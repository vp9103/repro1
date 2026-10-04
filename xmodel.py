#!/usr/bin/env python
"""xmodel.py -- the second-model side of REPRO-PLAN.md.

Claude writes the content; a DIFFERENT model family judges it. GPT runs through the Codex
CLI (`codex exec`, signed in via the Codex desktop app); Gemini runs through the AI Studio
OpenAI-compatible endpoint with the key in the hybrid_swarm .env. The default judge is
GPT ("codex"); disputes go to the other model ("adjudicate"), never back to Claude.

  python xmodel.py ping [codex|gemini]                    prove a provider answers structured JSON
  python xmodel.py calibrate <factcheck|grade|coverage|figreview|imgverify> [--provider P]
                                                          run the planted-error set; the gate refuses
                                                          records from an uncalibrated provider
  python xmodel.py factcheck <kind> <ids|tids|all> [--root R] [--provider P] [--jobs N]
        kind: topic | q | rapid | drill | fig | img | gloss | palace | guide
  python xmodel.py grade <rapid|q|spot|pretest> <tids|all> [--root R] [--provider P]
  python xmodel.py coverage <tids|all> [--root R]         are the mapped objectives + blueprint items TAUGHT?
  python xmodel.py figreview <figkeys|all> [--root R]     render the SVG to PNG, the model reviews the picture
  python xmodel.py imgverify <imgkeys|all> [--root R]     does the photo actually show the claimed diagnosis?
  python xmodel.py overlay <imgkey> [--provider P] [--root R]        the model designs the markup
  python xmodel.py overlay-review <imgkey> [--reviewer P] [--root R] the OTHER model reviews the rendered PNG
  python xmodel.py bakeoff <imgkey,imgkey,...> [--root R]            both design, both review blind -> PROVIDER
  python xmodel.py adjudicate <cmd> <recordkey> [--item "<objective id | option text>"] --rebuttal "<why the flag is wrong, citing scope/lectures/... or a standard source>"
                                                          the OTHER model rules; coverage and grade are ruled one item at a time
  python xmodel.py gaps <tids|all> [--provider P] [--jobs N]  Step 1 concepts missing from the blueprint (P1.3)
  python xmodel.py status <cmd> [prefix]                  summarize records

Every record is .repro/xm/<cmd>/<recordkey>.json and carries: provider, model, the canonical
hash of exactly what was judged (repro_common), the verdict, and the path of a transcript
that ends with a "turn.completed" event. check_repro.py recomputes the hash from the current
content; a record for text that has since changed is STALE and counts as missing. A record
typed by hand has no transcript and is rejected. Implementers never edit this file.
"""
from __future__ import annotations

import base64
import concurrent.futures as cf
import hashlib
import json
import os
import re
import shutil
import subprocess
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

import repro_common as rc

for _s in (sys.stdout, sys.stderr):  # Windows consoles default to cp1252; never crash on a non-Latin character
    try:
        _s.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

PROJECT = Path(__file__).resolve().parent
STATE = PROJECT / ".repro"
XM = STATE / "xm"
TRANSCRIPTS = XM / "transcripts"
CALIB = XM / "calibration"
OVERLAYS = XM / "overlays"
PROVIDER_FILE = OVERLAYS / "PROVIDER"
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
CARDIO = Path(r"C:\Users\varsh\Documents\Codex\2026-09-15\there-s-an-artifact-on-clot\outputs")
GEMINI_BASE = "https://generativelanguage.googleapis.com/v1beta/openai/"
# 2026-09-26: this key has no quota for gemini-3.1-pro-preview (429) and gemini-2.5-pro is retired for new users (404);
# gemini-3.5-flash answers but returns 503 under load, so transient errors are retried with backoff before moving on.
GEMINI_MODELS = ["gemini-3.5-flash", "gemini-3.1-pro-preview"]
GEMINI_BACKOFF = (20, 60, 120)
GEMINI_ENV_FILE = Path(r"C:\Users\varsh\.gemini\antigravity\scratch\hybrid_swarm\.env")
PROVIDERS = ("codex", "gemini")


def other(p: str) -> str:
    return "gemini" if p == "codex" else "codex"


def arg(argv, flag, default=None):
    return argv[argv.index(flag) + 1] if flag in argv and argv.index(flag) + 1 < len(argv) else default


def now():
    return time.strftime("%Y-%m-%d %H:%M:%S")


def sha_text(s: str, n=10) -> str:
    return hashlib.sha256(s.encode("utf-8")).hexdigest()[:n]


# ----------------------------------------------------------------------------
# providers (same wire format as the cardio round-2 tool; GPT via Codex CLI, Gemini via REST)
# ----------------------------------------------------------------------------
def find_codex() -> str:
    base = Path(os.path.expandvars(r"%LOCALAPPDATA%\OpenAI\Codex\bin"))
    if base.is_dir():
        found = sorted(base.glob("*/codex.exe"), key=lambda p: p.stat().st_mtime, reverse=True)
        if found:
            return str(found[0])
    w = shutil.which("codex")
    if w:
        return w
    raise SystemExit("codex.exe not found (the Codex desktop app installs it under %LOCALAPPDATA%\\OpenAI\\Codex\\bin)")


def codex_model() -> str:
    try:
        for ln in (Path.home() / ".codex" / "config.toml").read_text(encoding="utf-8", errors="replace").splitlines():
            if ln.strip().startswith("model ="):
                return ln.split("=", 1)[1].strip().strip('"')
    except OSError:
        pass
    return "gpt (codex default)"


def gemini_key() -> str:
    k = os.environ.get("GEMINI_API_KEY")
    if not k and GEMINI_ENV_FILE.is_file():
        for line in GEMINI_ENV_FILE.read_text(encoding="utf-8", errors="replace").splitlines():
            if line.startswith("GEMINI_API_KEY="):
                k = line.split("=", 1)[1].strip().strip('"').strip("'")
                break
    if not k:
        raise SystemExit("no GEMINI_API_KEY in the environment or in the hybrid_swarm .env")
    return k


def _codex(prompt: str, schema: dict, transcript: Path, images: list[Path]) -> tuple[dict, str]:
    work = XM / "codex-work"
    work.mkdir(parents=True, exist_ok=True)
    schema_p = work / ("schema-" + sha_text(json.dumps(schema, sort_keys=True)) + ".json")
    schema_p.write_text(json.dumps(schema), encoding="utf-8")
    out_p = work / ("last-" + str(int(time.time() * 1000)) + "-" + str(os.getpid()) + ".json")
    # the prompt goes on STDIN: -i is variadic and swallows a trailing positional prompt
    cmd = [find_codex(), "exec", "--skip-git-repo-check", "-s", "read-only", "--json", "--output-schema", str(schema_p), "-o", str(out_p), "-C", str(work)]
    for im in images:
        cmd += ["-i", str(im)]
    cmd.append("-")
    res = subprocess.run(cmd, input=prompt, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=1200)
    transcript.parent.mkdir(parents=True, exist_ok=True)
    transcript.write_text(res.stdout, encoding="utf-8")
    if "turn.completed" not in res.stdout:
        raise RuntimeError(f"codex did not complete a turn (exit {res.returncode}). stderr: {res.stderr[-800:]}")
    if not out_p.is_file():
        raise RuntimeError("codex produced no output file")
    return json.loads(out_p.read_text(encoding="utf-8")), codex_model()


def _gemini(prompt: str, schema: dict, transcript: Path, images: list[Path]) -> tuple[dict, str]:
    key = gemini_key()
    content: list[dict] = [{"type": "text", "text": prompt}]
    for im in images:
        b64 = base64.b64encode(im.read_bytes()).decode("ascii")
        mime = "image/png" if im.suffix.lower() == ".png" else "image/jpeg"
        content.append({"type": "image_url", "image_url": {"url": f"data:{mime};base64,{b64}"}})
    events, last_err = [], None
    attempts = [(m, f, 0) for m in GEMINI_MODELS for f in ("json_schema", "json_object")]
    while attempts:
        model, fkind, tries = attempts.pop(0)
        fmt = {"type": "json_schema", "json_schema": {"name": "result", "schema": schema, "strict": True}} if fkind == "json_schema" else {"type": "json_object"}
        if True:
            body = {"model": model, "messages": [{"role": "user", "content": json.loads(json.dumps(content))}], "response_format": fmt, "temperature": 0.2}
            if fmt["type"] == "json_object":
                body["messages"][0]["content"][0]["text"] = prompt + "\n\nReturn JSON matching exactly this schema:\n" + json.dumps(schema)
            req = urllib.request.Request(GEMINI_BASE + "chat/completions", data=json.dumps(body).encode("utf-8"),
                                         headers={"Authorization": "Bearer " + key, "Content-Type": "application/json"}, method="POST")
            events.append({"type": "turn.started", "provider": "gemini", "model": model, "format": fmt["type"], "images": len(images), "prompt_sha": sha_text(prompt)})
            try:
                with urllib.request.urlopen(req, timeout=900) as r:
                    resp = json.loads(r.read().decode("utf-8"))
                txt = resp["choices"][0]["message"]["content"]
                txt = re.sub(r"^```(?:json)?\s*|\s*```$", "", txt.strip(), flags=re.S)
                data = json.loads(txt)
                events.append({"type": "item.completed", "model": model, "usage": resp.get("usage")})
                events.append({"type": "turn.completed", "provider": "gemini", "model": model})
                transcript.parent.mkdir(parents=True, exist_ok=True)
                transcript.write_text("\n".join(json.dumps(e) for e in events) + "\n", encoding="utf-8")
                return data, model
            except urllib.error.HTTPError as e:
                last_err = f"{model} {fmt['type']}: HTTP {e.code} {e.read()[:300].decode('utf-8', 'replace')}"
                events.append({"type": "error", "model": model, "error": last_err})
                if e.code in (429, 500, 503) and tries < len(GEMINI_BACKOFF) and not (e.code == 429 and "quota" in last_err.lower() and "pro" in model):
                    time.sleep(GEMINI_BACKOFF[tries])
                    attempts.insert(0, (model, fkind, tries + 1))
                    continue
                if e.code in (400, 404) and fmt["type"] == "json_schema":
                    continue
                attempts = [a for a in attempts if a[0] != model]
                continue
            except (ValueError, KeyError, urllib.error.URLError, TimeoutError) as e:
                last_err = f"{model} {fmt['type']}: {type(e).__name__} {e}"
                events.append({"type": "error", "model": model, "error": last_err})
                continue
    transcript.parent.mkdir(parents=True, exist_ok=True)
    transcript.write_text("\n".join(json.dumps(e) for e in events) + "\n", encoding="utf-8")
    raise RuntimeError("gemini failed on every model/format: " + str(last_err))


def ask_json(provider: str, prompt: str, schema: dict, transcript: Path, images: list[Path] | None = None) -> tuple[dict, str]:
    if provider not in PROVIDERS:
        raise SystemExit(f"provider must be one of {PROVIDERS}")
    return (_codex if provider == "codex" else _gemini)(prompt, schema, transcript, images or [])


def write_record(cmd: str, key: str, rec: dict):
    """<key>.json is the latest verdict; <key>@<hash>.json is the verdict for exactly that content. The gate reads the
    hash-addressed copy, so a workspace re-review never makes main's record look stale (and vice versa)."""
    d = XM / cmd
    d.mkdir(parents=True, exist_ok=True)
    txt = json.dumps(rec, indent=1, ensure_ascii=False)
    (d / (safe(key) + ".json")).write_text(txt, encoding="utf-8")
    if rec.get("hash"):
        (d / (safe(key) + "@" + str(rec["hash"]) + ".json")).write_text(txt, encoding="utf-8")


def safe(key: str) -> str:
    return re.sub(r"[^A-Za-z0-9_.-]", "_", key)


def read_record(cmd: str, key: str, h: str | None = None) -> dict | None:
    p = XM / cmd / (safe(key) + (f"@{h}" if h else "") + ".json")
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return None


def transcript_path(cmd: str, tag: str) -> Path:
    return TRANSCRIPTS / f"{cmd}-{safe(tag)}-{int(time.time() * 1000)}.jsonl"


# ----------------------------------------------------------------------------
# rendering helpers (figures and overlay previews) -- headless Chrome screenshots
# ----------------------------------------------------------------------------
def page_css(root: Path) -> str:
    """The page's theme tokens + figure CSS, so a standalone figure renders like the page.
    Taken from the extracted engine if it exists, else from the cardio page (read-only)."""
    for p in (root / "engine" / "shell.html", PROJECT / "engine" / "shell.html", CARDIO / "cardio-path.html"):
        if p.is_file():
            txt = p.read_text(encoding="utf-8", errors="replace")
            styles = re.findall(r"<style>(.*?)</style>", txt, re.S)
            if styles:
                return "\n".join(styles)
    return ""


def fit_js(root: Path) -> str:
    for p in (root / "engine" / "engine.js", PROJECT / "engine" / "engine.js", CARDIO / "cardio-path.html"):
        if p.is_file():
            txt = p.read_text(encoding="utf-8", errors="replace")
            m = re.search(r"function fitSvgText\(svg\)\{.*?\n\}", txt, re.S)
            if m:
                return m.group(0)
    return "function fitSvgText(){}"


def shoot(html: str, out_png: Path, width=1100, height=1400) -> Path:
    out_png.parent.mkdir(parents=True, exist_ok=True)
    hp = out_png.with_suffix(".html")
    hp.write_text(html, encoding="utf-8")
    if Path(CHROME).is_file():
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--no-sandbox", "--allow-file-access-from-files", f"--window-size={width},{height}",
                        "--hide-scrollbars", "--virtual-time-budget=4000", f"--screenshot={out_png}", hp.resolve().as_uri()], capture_output=True, timeout=180)
    if not out_png.is_file():
        raise RuntimeError("headless Chrome produced no screenshot (is Chrome installed?)")
    return out_png


def render_figure(root: Path, key: str, fig: dict, theme="light") -> Path:
    css = page_css(root)
    html = f"""<!doctype html><html lang="en" data-theme="{theme}"><head><meta charset="utf-8"><style>{css}</style>
<style>body{{margin:0;padding:24px;background:var(--bg,#fff);width:1000px}} figure{{margin:0}} svg.dia{{width:960px;height:auto;display:block}}</style></head>
<body><figure class="fig">{fig.get('svg', '')}<figcaption style="max-width:960px;margin-top:10px;font:15px/1.45 system-ui">{fig.get('cap', '')}</figcaption></figure>
<script>{fit_js(root)}; document.querySelectorAll('svg').forEach(function(s){{ if(!s.classList.contains('dia')) s.classList.add('dia'); try{{fitSvgText(s);}}catch(e){{}} }});</script></body></html>"""
    return shoot(html, XM / "renders" / f"fig-{safe(key)}-{theme}.png", width=1050, height=1300)


# ----------------------------------------------------------------------------
# schemas
# ----------------------------------------------------------------------------
FACT_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "items": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "id": {"type": "string"},
        "verdict": {"type": "string", "enum": ["correct", "imprecise", "wrong"]},
        "claim": {"type": "string"}, "correction": {"type": "string"},
        "key_is_best": {"type": "boolean"}}, "required": ["id", "verdict", "claim", "correction", "key_is_best"]}}},
    "required": ["items"]}

GRADE_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "items": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "id": {"type": "string"},
        "options": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
            "text": {"type": "string"}, "verdict": {"type": "string", "enum": ["plausible", "weak", "throwaway"]}, "reason": {"type": "string"}},
            "required": ["text", "verdict", "reason"]}}}, "required": ["id", "options"]}}},
    "required": ["items"]}

COVER_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "items": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "id": {"type": "string"}, "verdict": {"type": "string", "enum": ["taught", "partial", "missing"]}, "note": {"type": "string"}},
        "required": ["id", "verdict", "note"]}}},
    "required": ["items"]}

FIG_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "errors": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "what": {"type": "string"}, "why_wrong": {"type": "string"}, "severity": {"type": "string", "enum": ["error", "misleading", "cosmetic"]}},
        "required": ["what", "why_wrong", "severity"]}},
    "legibility": {"type": "integer"}, "teaches_caption": {"type": "boolean"}, "overall": {"type": "integer"}, "verdict": {"type": "string"}},
    "required": ["errors", "legibility", "teaches_caption", "overall", "verdict"]}

IMG_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "shows_claimed_dx": {"type": "string", "enum": ["yes", "uncertain", "no"]}, "modality_seen": {"type": "string"},
    "findings_visible": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "finding": {"type": "string"}, "visible": {"type": "string", "enum": ["yes", "uncertain", "no"]}}, "required": ["finding", "visible"]}},
    "better_dx_if_not": {"type": "string"}, "comment": {"type": "string"}},
    "required": ["shows_claimed_dx", "modality_seen", "findings_visible", "better_dx_if_not", "comment"]}

ADJ_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "ruling": {"type": "string", "enum": ["flag-upheld", "rebuttal-upheld"]}, "reason": {"type": "string"}},
    "required": ["ruling", "reason"]}

PING_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {"answer": {"type": "string"}}, "required": ["answer"]}


# ----------------------------------------------------------------------------
# prompts
# ----------------------------------------------------------------------------
FACT_PROMPT = """You are a senior USMLE Step 1 content editor (endocrine and reproductive systems). A study tool for a
second-year medical student shows the items below. Judge ONLY factual accuracy against current standard teaching
(First Aid / Robbins / Costanzo / current ACOG, CDC, ADA and Endocrine Society guidance as of 2025-2026).

Verdicts per item:
  "correct"   - no factual error. Style, length, reading level and what is left out are NOT your concern.
  "imprecise" - true as far as it goes, but oversimplified or ambiguous in a way that could plant a misconception on an
                exam question. Reported, not blocking.
  "wrong"     - contains a false statement, a wrong association or number, an explanation that contradicts the keyed
                answer, or (for a question) a keyed answer that is not the single best answer. Blocking.
For "imprecise"/"wrong": "claim" quotes the problem (<= 30 words) and "correction" states the correct fact.
For "correct": claim and correction are "". "key_is_best": for a question, is the keyed option the single best answer
(false if another option is at least as defensible); for non-question items return true.
Course-specific or very recent facts (drug approvals, program names, guideline years) that you cannot verify are
"imprecise", not "wrong", unless you are sure they are false.

{kind_note}

Items (JSON):
{items}

Return JSON only."""

GRADE_PROMPT = """You are a USMLE Step 1 question editor reviewing DISTRACTORS (the wrong options) in endocrine and
reproductive-system items for a second-year medical student. For each item you get the stem, the keyed answer and the
wrong options. Give every WRONG option one verdict:

"plausible" - same category as the keyed answer (another enzyme, cell type, drug in or near the class, organism,
             tumor, embryologic structure, lab pattern, time window, side, nerve root) and a student with a specific
             misconception could pick it. Being the classic confusion partner is enough: "Leydig cell" for an AMH stem,
             "Leuprolide" for a GnRH-antagonist stem, "Partial mole" for a complete-mole stem are plausible.
"weak"      - right category but few students would pick it; it fills a slot. Reported, not blocking.
"throwaway" - a hedge (none / neither / both / either / all of the above), a different category from what the stem
             asks (a drug when a cell is asked), a near-duplicate of another option, a term from an unrelated organ
             system with no confusion link, or something absurd.
Only "throwaway" fails. Return JSON only; "id" echoes the item id and "text" echoes each wrong option exactly.

Items:
{items}"""

COVER_PROMPT = """Below is the complete text a medical student reads for one topic of a Step 1 study tool (prose, tables,
figure labels and captions, image annotations), followed by the course objectives and USMLE Step 1 blueprint items this
topic is accountable for. For EACH objective/item decide:
  "taught"  - the text explains it well enough that the student could answer a Step 1-style question on it
              (mechanism or discriminating feature present, not just the name mentioned);
  "partial" - mentioned, or part of it explained, but a testable piece is missing (say exactly what in "note");
  "missing" - not in the text.
Procedural objectives ("perform a delivery", "perform a LEEP") count as taught when the text explains the concepts a
written exam can test about them (indications, anatomy, what goes wrong), and say so in the note.
Objectives about attitudes/communication count as taught when the text gives the principles and the rules an exam uses.

TOPIC TEXT:
{text}

ACCOUNTABLE ITEMS (id: text):
{items}

Return JSON only."""

FIG_PROMPT = """The attached picture is a teaching diagram (inline SVG rendered to PNG) from a USMLE Step 1 study tool on the
endocrine and reproductive systems, followed by its caption. Review it as an expert anatomist/physiologist/pathologist
and a careful graphic editor would:
1. errors: every label, arrow, color pairing, number, sequence, direction or relationship that is factually WRONG
   ("error"), or technically true but likely to MISLEAD a student ("misleading"), or a purely visual defect
   ("cosmetic": overlapping text, clipped label, unreadable size, legend that does not match). Quote what you see.
2. legibility 1-5 (can every label be read at this size; nothing overlaps or is cut off).
3. teaches_caption: does the picture itself show what the caption claims it settles?
4. overall 1-10 as a teaching figure.
Caption: {cap}
Text nodes in the figure (for reference): {texts}
Return JSON only."""

IMG_PROMPT = """The attached photograph is used in a USMLE Step 1 study tool. The tool claims:
  name: {n}
  diagnosis / what it shows: {dx}
  what the student should notice: {look}
  findings the tool points at: {labels}
Judge from the picture itself: does it plausibly show the claimed diagnosis ("yes"/"uncertain"/"no")? What modality do you
see (H&E histology, cytology, gross specimen, clinical photo, ultrasound, CT, MRI, X-ray, mammogram, gram stain, other)?
For each finding: is it visible? If "no", name a better description in better_dx_if_not. Be strict: a picture of a
different organ, stain, species or disease is "no". Return JSON only."""

ADJ_PROMPT = """Two reviewers disagree about an item in a USMLE Step 1 study tool (endocrine/reproductive). A reviewing
model flagged it; the author rebutted. You are the adjudicator. Decide on the medical facts only.
ITEM: {item}
FLAG ({flag_by}): {flag}
REBUTTAL (author, may cite the student's own lecture text): {rebuttal}
"flag-upheld" if the item as written would teach something false or would be marked wrong by an expert Step 1 editor;
"rebuttal-upheld" if the item is correct (or correct per the cited course material and not contradicted by standard
teaching). Give a one-paragraph reason. Return JSON only."""


# ----------------------------------------------------------------------------
# calibration sets (planted errors). A provider must pass before its records count.
# ----------------------------------------------------------------------------
CAL_FACT = [
    ("c1", True, "In complete androgen insensitivity (46,XY), the testes make AMH, so the uterus and upper vagina are absent; testosterone is high but cannot act, so the external genitalia are female."),
    ("c2", True, "Methimazole is avoided in the first trimester because of aplasia cutis; PTU is used then, and methimazole is preferred afterward because PTU can cause liver failure."),
    ("c3", True, "In primary adrenal insufficiency, low cortisol removes feedback, ACTH rises, and POMC processing also yields MSH, which darkens the skin."),
    ("c4", True, "Seminoma is the most common testicular germ cell tumor; it is radiosensitive and can raise placental alkaline phosphatase."),
    ("c5", True, "A granulosa cell tumor secretes estrogen, which can cause endometrial hyperplasia and postmenopausal bleeding; Call-Exner bodies are characteristic."),
    ("c6", True, "Varicocele is more common on the left because the left gonadal vein drains into the left renal vein."),
    ("c7", True, "Familial hypocalciuric hypercalcemia comes from an inactivating calcium-sensing receptor mutation, so urinary calcium is low and parathyroidectomy is not indicated."),
    ("c8", True, "Human placental lactogen increases maternal insulin resistance, shifting glucose toward the fetus; this underlies gestational diabetes."),
    ("c9", True, "In 21-hydroxylase deficiency, 17-hydroxyprogesterone accumulates, and salt wasting can cause hyponatremia and hyperkalemia in newborns."),
    ("c10", True, "Levonorgestrel emergency contraception works mainly by delaying ovulation; a copper IUD is the most effective emergency contraceptive."),
    ("w1", False, "In Klinefelter syndrome (47,XXY), inhibin is high and FSH is low because Sertoli cells are overactive."),
    ("w2", False, "Invasive lobular carcinoma of the breast is defined by overexpression of E-cadherin, which makes its cells grow in single-file lines."),
    ("w3", False, "A complete hydatidiform mole is triploid (69,XXY) and usually contains fetal parts."),
    ("w4", False, "Hypocalcemia after thyroidectomy is caused by injury to the recurrent laryngeal nerve."),
    ("w5", False, "In central diabetes insipidus, urine concentrates during water deprivation and does not respond to desmopressin."),
    ("w6", False, "Pheochromocytoma should be treated with a beta-blocker first and an alpha-blocker second, to prevent reflex tachycardia."),
]
CAL_GRADE = [
    {"id": "g1", "q": "Which cell secretes anti-Mullerian hormone in the male fetus?", "a": "Sertoli cell",
     "wrong": {"Leydig cell": True, "Granulosa cell": True, "Spermatogonium": True, "None of the above": False}},
    {"id": "g2", "q": "Which drug is a GnRH receptor ANTAGONIST used in advanced prostate cancer?", "a": "Degarelix",
     "wrong": {"Leuprolide": True, "Flutamide": True, "Finasteride": True, "Amoxicillin": False}},
    {"id": "g3", "q": "Where does fertilization usually occur?", "a": "Ampulla of the uterine tube",
     "wrong": {"Isthmus of the uterine tube": True, "Uterine fundus": True, "Infundibulum of the uterine tube": True, "Both the ampulla and the fundus": False}},
    {"id": "g4", "q": "Which enzyme deficiency causes hypertension with virilization of a 46,XX infant?", "a": "11-beta-hydroxylase",
     "wrong": {"21-hydroxylase": True, "17-alpha-hydroxylase": True, "Aromatase": True, "Left anterior descending artery": False}},
]
CAL_COVER_TEXT = ("Each cycle, rising estradiol from the dominant follicle switches from negative to positive feedback on the "
                  "pituitary once it stays high for about two days, and that switch triggers the LH surge; ovulation follows about 36 "
                  "hours later. After ovulation the corpus luteum makes progesterone for a fixed 14 days unless hCG rescues it, so the "
                  "luteal phase length barely varies while the follicular phase does.")
CAL_COVER_ITEMS = [("k1", True, "Explain what triggers the mid-cycle LH surge."), ("k2", True, "Explain why the luteal phase is about 14 days."),
                   ("k3", False, "Explain where and when oocytes arrest in meiosis.")]
CAL_FIG_CAP = ("The hypothalamic-pituitary-ovarian axis: pulsatile GnRH drives LH and FSH; estradiol in the follicular phase, then "
               "estradiol plus progesterone in the luteal phase, suppress GnRH, LH and FSH; estradiol held high at mid-cycle switches to "
               "positive feedback and triggers the LH surge (with a smaller FSH surge); inhibin suppresses FSH only.")
CAL_FIG_GOOD = """<svg class="dia" viewBox="0 0 1000 470" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hypothalamic-pituitary-ovarian axis with its three feedback loops">
<text x="14" y="24" font-size="17" font-weight="700">The ovarian axis and its three feedback loops</text>
<rect x="260" y="40" width="220" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="370" y="71" text-anchor="middle" font-size="18">Hypothalamus</text>
<line x1="370" y1="90" x2="370" y2="150" stroke="currentColor" stroke-width="3"/><polygon points="363,148 370,160 377,148" fill="currentColor"/>
<text x="384" y="128" font-size="16">GnRH (pulsatile)</text>
<rect x="260" y="160" width="220" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="370" y="191" text-anchor="middle" font-size="18">Anterior pituitary</text>
<line x1="300" y1="210" x2="300" y2="272" stroke="currentColor" stroke-width="3"/><polygon points="293,270 300,282 307,270" fill="currentColor"/>
<text x="312" y="266" font-size="16">FSH</text>
<line x1="440" y1="210" x2="440" y2="272" stroke="currentColor" stroke-width="3"/><polygon points="433,270 440,282 447,270" fill="currentColor"/>
<text x="452" y="250" font-size="16">LH</text>
<rect x="260" y="282" width="220" height="50" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="370" y="313" text-anchor="middle" font-size="18">Ovary</text>
<polyline points="480,300 560,300 560,58 486,58" fill="none" stroke="currentColor" stroke-width="2"/><line x1="486" y1="48" x2="486" y2="68" stroke="currentColor" stroke-width="3"/>
<polyline points="560,178 486,178" fill="none" stroke="currentColor" stroke-width="2"/><line x1="486" y1="168" x2="486" y2="188" stroke="currentColor" stroke-width="3"/>
<text x="572" y="226" font-size="16">(&#8722;) follicular:</text>
<text x="572" y="248" font-size="16">estradiol</text>
<text x="572" y="270" font-size="16">luteal: estradiol</text>
<text x="572" y="292" font-size="16">+ progesterone</text>
<polyline points="480,322 760,322 760,78 492,78" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="9 5"/><polygon points="494,72 482,78 494,84" fill="currentColor"/>
<polyline points="760,198 492,198" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="9 5"/><polygon points="494,192 482,198 494,204" fill="currentColor"/>
<text x="772" y="140" font-size="16">(+) mid-cycle only:</text>
<text x="772" y="162" font-size="16">LH surge and a</text>
<text x="772" y="184" font-size="16">smaller FSH surge</text>
<polyline points="260,318 200,318 200,236 292,236" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2 4"/><line x1="293" y1="226" x2="293" y2="246" stroke="currentColor" stroke-width="3"/>
<text x="188" y="226" font-size="16" text-anchor="end">Inhibin</text>
<text x="188" y="248" font-size="16" text-anchor="end">(B follicular,</text>
<text x="188" y="270" font-size="16" text-anchor="end">A luteal):</text>
<text x="188" y="292" font-size="16" text-anchor="end">FSH only (&#8722;)</text>
<text x="14" y="372" font-size="15">Arrowhead = stimulates; flat bar = suppresses.</text>
<text x="14" y="396" font-size="15">Thin solid (&#8722;): estradiol (follicular phase), then estradiol plus progesterone (luteal phase), suppress GnRH, LH and FSH.</text>
<text x="14" y="420" font-size="15">Dashed (+): estradiol held high for about two days at mid-cycle switches to positive feedback: LH surge (smaller FSH surge).</text>
<text x="14" y="444" font-size="15">Dotted (&#8722;): inhibin from granulosa cells (B in the follicular phase, A in the luteal phase) suppresses FSH only.</text>
</svg>"""
CAL_FIG_BAD = CAL_FIG_GOOD.replace("GnRH (pulsatile)", "TRH (pulsatile)").replace(">LH<", ">TSH<").replace(">FSH<", ">ACTH<")
CAL_IMG = [("clubbing_true", "new_clubbing.jpg", "Digital clubbing", True), ("clubbing_false", "new_clubbing.jpg", "Seminoma of the testis, H&E histology", False)]


def cmd_calibrate(which: str, provider: str) -> int:
    CALIB.mkdir(parents=True, exist_ok=True)
    t0 = now()
    if which == "factcheck":
        items = [{"id": i, "kind": "statement", "text": t} for i, _, t in CAL_FACT]
        out, model = ask_json(provider, FACT_PROMPT.format(kind_note="Each item is a single teaching statement.", items=json.dumps(items, indent=1)),
                              FACT_SCHEMA, transcript_path("calibrate", f"factcheck-{provider}"))
        v = {x["id"]: x["verdict"] for x in out["items"]}
        planted = [i for i, ok, _ in CAL_FACT if not ok]
        good = [i for i, ok, _ in CAL_FACT if ok]
        caught = [i for i in planted if v.get(i) == "wrong"]
        false_pos = [i for i in good if v.get(i) == "wrong"]
        passed = len(caught) >= len(planted) - 1 and len(false_pos) <= 1
        rec = {"which": which, "provider": provider, "model": model, "at": t0, "caught": caught, "planted": planted, "falsePositive": false_pos, "verdicts": v, "passed": passed}
    elif which == "grade":
        lines = [f"id {g['id']}: STEM: {g['q']}\n   ANSWER: {g['a']}\n   WRONG: " + " || ".join(g["wrong"]) for g in CAL_GRADE]
        out, model = ask_json(provider, GRADE_PROMPT.format(items="\n".join(lines)), GRADE_SCHEMA, transcript_path("calibrate", f"grade-{provider}"))
        got = {(x["id"], o["text"].strip().lower()): o["verdict"] for x in out["items"] for o in x["options"]}
        missed, false_pos = [], []
        for g in CAL_GRADE:
            for text, ok in g["wrong"].items():
                vv = got.get((g["id"], text.lower()))
                if not ok and vv != "throwaway":
                    missed.append(f"{g['id']}:{text}")
                if ok and vv == "throwaway":
                    false_pos.append(f"{g['id']}:{text}")
        passed = not missed and len(false_pos) <= 1
        rec = {"which": which, "provider": provider, "model": model, "at": t0, "missedThrowaways": missed, "falsePositive": false_pos, "passed": passed}
    elif which == "coverage":
        items = "\n".join(f"{i}: {t}" for i, _, t in CAL_COVER_ITEMS)
        out, model = ask_json(provider, COVER_PROMPT.format(text=CAL_COVER_TEXT, items=items), COVER_SCHEMA, transcript_path("calibrate", f"coverage-{provider}"))
        v = {x["id"]: x["verdict"] for x in out["items"]}
        passed = v.get("k3") == "missing" and v.get("k1") != "missing" and v.get("k2") != "missing"
        rec = {"which": which, "provider": provider, "model": model, "at": t0, "verdicts": v, "passed": passed}
    elif which == "figreview":
        res = {}
        for tag, svg in (("good", CAL_FIG_GOOD), ("bad", CAL_FIG_BAD)):
            png = render_figure(PROJECT, f"calib-{tag}", {"svg": svg, "cap": CAL_FIG_CAP})
            out, model = ask_json(provider, FIG_PROMPT.format(cap=CAL_FIG_CAP, texts=json.dumps(rc.svg_texts(svg))),
                                  FIG_SCHEMA, transcript_path("calibrate", f"figreview-{tag}-{provider}"), images=[png])
            res[tag] = {"errors": [e for e in out["errors"] if e["severity"] in ("error", "misleading")], "overall": out["overall"]}
        planted_caught = any(e["severity"] == "error" and re.search(r"TRH|TSH|ACTH", e["what"] + " " + e["why_wrong"]) for e in res["bad"]["errors"])
        false_error = [e for e in res["good"]["errors"] if e["severity"] == "error"]
        # "misleading" remarks on the correct figure are tolerated here (the gate still blocks them on real figures,
        # with adjudication by the other model as the escape); a false "error" or a low score is not.
        passed = planted_caught and not false_error and res["good"]["overall"] >= 7 and res["bad"]["overall"] < res["good"]["overall"]
        rec = {"which": which, "provider": provider, "model": codex_model() if provider == "codex" else "gemini", "at": t0, "result": res, "passed": passed}
    elif which == "imgverify":
        res = {}
        for tag, fn, dx, truth in CAL_IMG:
            p = CARDIO / "cardio-path-assets" / fn
            if not p.is_file():
                raise SystemExit(f"calibration image missing: {p}")
            out, model = ask_json(provider, IMG_PROMPT.format(n=dx, dx=dx, look="", labels="[]"), IMG_SCHEMA, transcript_path("calibrate", f"imgverify-{tag}-{provider}"), images=[p])
            res[tag] = out["shows_claimed_dx"]
        passed = res["clubbing_true"] == "yes" and res["clubbing_false"] == "no"
        rec = {"which": which, "provider": provider, "at": t0, "result": res, "passed": passed}
    else:
        raise SystemExit("calibrate what? factcheck | grade | coverage | figreview | imgverify")
    (CALIB / f"{which}-{provider}.json").write_text(json.dumps(rec, indent=1, ensure_ascii=False), encoding="utf-8")
    print(f"calibration {which} / {provider}: {'PASSED' if rec['passed'] else 'FAILED'}  {json.dumps({k: v for k, v in rec.items() if k not in ('verdicts', 'result')})[:400]}")
    return 0 if rec["passed"] else 2


def calibrated(which: str, provider: str) -> bool:
    try:
        return json.loads((CALIB / f"{which}-{provider}.json").read_text(encoding="utf-8")).get("passed") is True
    except (OSError, ValueError):
        return False


def require_calibration(which: str, provider: str):
    if not calibrated(which, provider):
        raise SystemExit(f"{provider} is not calibrated for {which}: run  python xmodel.py calibrate {which} --provider {provider}")


# ----------------------------------------------------------------------------
# item selection
# ----------------------------------------------------------------------------
def select_tids(ct: rc.Content, spec: str) -> list[str]:
    if spec in ("all", "*"):
        return ct.topic_ids()
    return [s.strip() for s in spec.split(",") if s.strip()]


def fact_items(ct: rc.Content, kind: str, spec: str) -> list[tuple[str, str, dict]]:
    """[(recordkey, hash, payload)] for a factcheck of `kind` over `spec` (topic ids, or object keys)."""
    out = []
    if kind == "q":
        for tid in select_tids(ct, spec):
            for q in ct.questions.get(tid) or []:
                p = rc.question_payload(q)
                out.append((f"q:{q['id']}", rc.jhash(p), p))
    elif kind == "rapid":
        for tid in select_tids(ct, spec):
            for r in ct.rapid.get(tid) or []:
                p = rc.rapid_payload(r)
                out.append((f"r:{r['id']}", rc.jhash(p), p))
    elif kind == "topic":
        for tid in select_tids(ct, spec):
            t = ct.topics.get(tid)
            if t:
                # img / palace / vis rows are keys to objects fact-checked under their own kinds; leaving them out means
                # a later task that places an image does not invalidate the topic's fact-check
                p = {k: t.get(k) for k in ("id", "t", "sub", "pretest", "grid")}
                p["body"] = [b for b in t.get("body") or [] if not (isinstance(b, list) and b and b[0] in ("img", "palace", "vis"))]
                out.append((f"topic:{tid}", rc.jhash(p), p))
    elif kind == "gloss":
        for tid in select_tids(ct, spec):
            g = ct.glossary.get(tid)
            if g:
                out.append((f"gloss:{tid}", rc.jhash(g), {"topic": tid, "entries": g}))
    elif kind == "guide":
        for tid in select_tids(ct, spec):
            g = ct.guides.get(tid)
            if g:
                out.append((f"guide:{tid}", rc.jhash(g), g))
    elif kind in ("drill", "fig", "img", "palace"):
        store = {"drill": ct.drills, "fig": ct.figs, "img": ct.images, "palace": ct.palace}[kind]
        keys = sorted(store) if spec in ("all", "*") else [k for k in spec.split(",") if k]
        # a topic id selects every object whose key starts with it (naming convention: <tid>_...)
        sel = []
        for k in keys:
            if k in store:
                sel.append(k)
            else:
                sel += [s for s in sorted(store) if s.startswith(k + "_") or (kind == "drill" and s.startswith("d_" + k + "_")) or (kind == "palace" and s.startswith("pal_" + k + "_"))]
        for k in dict.fromkeys(sel):
            obj = store[k]
            if kind == "fig":
                p = {"key": k, "cap": obj.get("cap"), "teach": obj.get("teach"), "text_nodes": rc.svg_texts(obj.get("svg", ""))}
                out.append((f"fig:{k}", rc.jhash({"svg": obj.get("svg"), "cap": obj.get("cap"), "teach": obj.get("teach")}), p))
            elif kind == "img":
                p = {k2: obj.get(k2) for k2 in ("n", "dx", "look", "wrong", "ww")}
                p["labels"] = [a.get("l") for a in obj.get("ann") or []]
                p["key"] = k
                out.append((f"img:{k}", rc.jhash(p), p))
            else:
                out.append((f"{kind}:{k}", rc.jhash(obj), obj))
    else:
        raise SystemExit("factcheck kind: topic | q | rapid | drill | fig | img | gloss | palace | guide")
    return out


KIND_NOTE = {
    "q": "Each item is a 5-option vignette: s = stem, l = lead-in, o = options, a = index of the keyed option (0-based), e = explanation, w = why each wrong option is wrong (keyed by option text), et = comparison table [head, rows], bl = bottom line, pt = where the figure shows the answer.",
    "rapid": "Each item is a one-line rapid-review question: q, o = 5 options, a = keyed index (0-based), x = explanation, w = why each wrong option is wrong, pt = figure pointer.",
    "topic": "Each item is a whole topic (prose blocks, tables, WHY answers, self-explanation MCQs, pretest items, and a true/false recall grid where 1 = true, 0 = false). Judge every block; quote the block that is wrong.",
    "drill": "Each item is a discrimination drill: items [text, column, why]; check that each item sits in the right column and that each why is true.",
    "fig": "Each item is a figure's caption and the text labels drawn in it (you do not see the picture here; figreview checks the picture).",
    "img": "Each item is a clinical image's claimed diagnosis, what to look for, the distractor diagnoses (wrong) and why each is not it (ww), and the annotation labels.",
    "gloss": "Each item is a set of glossary definitions (k = key, t = term, d = definition).",
    "palace": "Each item is a memory-scene card set; check the facts each card encodes.",
    "guide": "Each item is a topic's one-screen visual guide.",
}
BATCH = {"q": 6, "rapid": 15, "topic": 1, "drill": 5, "fig": 8, "img": 8, "gloss": 3, "palace": 4, "guide": 6}


def cmd_factcheck(kind: str, spec: str, root: Path, provider: str, jobs: int) -> int:
    require_calibration("factcheck", provider)
    ct = rc.Content(root)
    items = fact_items(ct, kind, spec)
    if not items:
        raise SystemExit("nothing selected")
    todo = []
    for key, h, p in items:
        old = read_record("factcheck", key, h)
        if old and old.get("hash") == h and old.get("provider") == provider:
            continue
        todo.append((key, h, p))
    print(f"factcheck {kind} {spec}: {len(items)} items, {len(todo)} need a (re)check with {provider}")
    batches = [todo[i:i + BATCH[kind]] for i in range(0, len(todo), BATCH[kind])]

    def run(batch):
        payload = [{"id": key, **({"content": p} if kind != "q" and kind != "rapid" else p)} for key, h, p in batch]
        tr = transcript_path("factcheck", batch[0][0])
        out, model = ask_json(provider, FACT_PROMPT.format(kind_note=KIND_NOTE[kind], items=json.dumps(payload, ensure_ascii=False, indent=1)), FACT_SCHEMA, tr)
        got = {x["id"]: x for x in out["items"]}
        res = []
        for key, h, p in batch:
            x = got.get(key)
            if not x:
                res.append((key, "NO VERDICT RETURNED"))
                continue
            verdict = x["verdict"]
            if kind == "q" and x.get("key_is_best") is False and verdict == "correct":
                verdict = "wrong"
            write_record("factcheck", key, {"cmd": "factcheck", "kind": kind, "key": key, "hash": h, "provider": provider, "model": model, "at": now(),
                                            "verdict": verdict, "claim": x.get("claim", ""), "correction": x.get("correction", ""), "key_is_best": x.get("key_is_best"),
                                            "transcript": str(tr.relative_to(PROJECT))})
            res.append((key, verdict + ("" if verdict == "correct" else f": {x.get('claim', '')[:90]} -> {x.get('correction', '')[:110]}")))
        return res

    bad = 0
    with cf.ThreadPoolExecutor(max_workers=max(1, min(jobs, 3))) as ex:
        for res in ex.map(run, batches):
            for key, msg in res:
                if not msg.startswith("correct"):
                    print(f"   {key}: {msg}")
                    bad += msg.startswith("wrong") or msg.startswith("NO VERDICT")
    print(f"done: {bad} blocking (wrong / no verdict). Fix the content and re-run, or dispute with: python xmodel.py adjudicate factcheck <key> --rebuttal \"...\"")
    return 0 if not bad else 2


# ----------------------------------------------------------------------------
# distractor grading
# ----------------------------------------------------------------------------
def grade_items(ct: rc.Content, kind: str, spec: str) -> list[tuple[str, str, dict]]:
    out = []
    if kind == "rapid":
        for tid in select_tids(ct, spec):
            for r in ct.rapid.get(tid) or []:
                p = {"stem": r.get("q"), "answer": r["o"][r["a"]], "wrong": [o for i, o in enumerate(r["o"]) if i != r["a"]]}
                out.append((f"grade-r:{r['id']}", rc.jhash(p), p))
    elif kind == "q":
        for tid in select_tids(ct, spec):
            for q in ct.questions.get(tid) or []:
                p = {"stem": rc.strip(q.get("s", "")) + " " + rc.strip(q.get("l", "")), "answer": q["o"][q["a"]], "wrong": [o for i, o in enumerate(q["o"]) if i != q["a"]]}
                out.append((f"grade-q:{q['id']}", rc.jhash(p), p))
    elif kind == "spot":
        keys = sorted(ct.images) if spec in ("all", "*") else [k for k in ct.images if any(k == s or k.startswith(s + "_") for s in spec.split(","))]
        for k in keys:
            im = ct.images[k]
            p = {"stem": "Name the diagnosis shown in this image (" + rc.strip(im.get("n", "")) + ")", "answer": im.get("dx"), "wrong": im.get("wrong") or []}
            out.append((f"grade-spot:{k}", rc.jhash(p), p))
    elif kind == "pretest":
        for tid in select_tids(ct, spec):
            for i, pt in enumerate((ct.topics.get(tid) or {}).get("pretest") or []):
                p = {"stem": pt.get("q"), "answer": pt["o"][pt["a"]], "wrong": [o for j, o in enumerate(pt["o"]) if j != pt["a"]]}
                out.append((f"grade-pt:{tid}#{i}", rc.jhash(p), p))
    else:
        raise SystemExit("grade kind: rapid | q | spot | pretest")
    return out


def cmd_grade(kind: str, spec: str, root: Path, provider: str, jobs: int) -> int:
    require_calibration("grade", provider)
    ct = rc.Content(root)
    items = [x for x in grade_items(ct, kind, spec)]
    todo = [x for x in items if not ((lambda o: o and o.get("hash") == x[1] and o.get("provider") == provider)(read_record("grade", x[0], x[1])))]
    print(f"grade {kind} {spec}: {len(items)} items, {len(todo)} to grade with {provider}")
    batches = [todo[i:i + 20] for i in range(0, len(todo), 20)]

    def run(batch):
        lines = [f"id {key}: STEM: {rc.strip(p['stem'])}\n   ANSWER: {rc.strip(p['answer'])}\n   WRONG: " + " || ".join(rc.strip(w) for w in p["wrong"]) for key, h, p in batch]
        tr = transcript_path("grade", batch[0][0])
        out, model = ask_json(provider, GRADE_PROMPT.format(items="\n".join(lines)), GRADE_SCHEMA, tr)
        got = {x["id"].replace("id ", "").strip(): x for x in out["items"]}
        res = []
        for key, h, p in batch:
            x = got.get(key)
            verdicts = {}
            for w in p["wrong"]:
                o = next((o for o in (x or {}).get("options", []) if o["text"].strip().lower() == rc.strip(w).lower()), None)
                verdicts[w] = {"verdict": o["verdict"], "reason": o["reason"]} if o else {"verdict": "unknown", "reason": "no verdict returned for this option"}
            write_record("grade", key, {"cmd": "grade", "kind": kind, "key": key, "hash": h, "provider": provider, "model": model, "at": now(),
                                        "verdicts": verdicts, "transcript": str(tr.relative_to(PROJECT))})
            for w, v in verdicts.items():
                if v["verdict"] in ("throwaway", "unknown", "weak"):
                    res.append(f"   {key}: {v['verdict']:<9} '{rc.strip(w)[:50]}' -> {v['reason'][:100]}")
        return res

    n_block = 0
    with cf.ThreadPoolExecutor(max_workers=max(1, min(jobs, 3))) as ex:
        for res in ex.map(run, batches):
            for line in res:
                print(line)
                n_block += ("throwaway" in line or "unknown" in line)
    print(f"done: {n_block} blocking (throwaway/unknown); weak ones are reported only")
    return 0 if not n_block else 2


# ----------------------------------------------------------------------------
# coverage: is every mapped objective and blueprint item actually TAUGHT?
# ----------------------------------------------------------------------------
def coverage_payload(ct: rc.Content, tid: str) -> tuple[str, list[tuple[str, str]]]:
    objs = rc.objectives()
    tm = rc.topic_map()
    bp = rc.blueprint()
    acc = [(oid, objs[oid]) for oid, tids in tm.items() if tid in tids and oid in objs]
    acc += [(bid, b["text"]) for bid, b in bp.items() if b["topic"] == tid and b["yield"] != "x"]
    return rc.topic_text(ct, tid), acc


def cmd_coverage(spec: str, root: Path, provider: str, jobs: int) -> int:
    require_calibration("coverage", provider)
    ct = rc.Content(root)
    tids = select_tids(ct, spec)

    def run(tid):
        text, acc = coverage_payload(ct, tid)
        if not text or not acc:
            return [f"   {tid}: nothing to check (text {len(text)} chars, {len(acc)} accountable items)"]
        h = rc.jhash({"text": text, "acc": acc})
        old = read_record("coverage", f"topic:{tid}", h)
        if old and old.get("hash") == h and old.get("provider") == provider:
            return [f"   {tid}: up to date"]
        tr = transcript_path("coverage", tid)
        out, model = ask_json(provider, COVER_PROMPT.format(text=text, items="\n".join(f"{i}: {t}" for i, t in acc)), COVER_SCHEMA, tr)
        got = {x["id"]: x for x in out["items"]}
        verdicts = {i: (got.get(i) or {"verdict": "unknown", "note": "no verdict returned"}) for i, _ in acc}
        write_record("coverage", f"topic:{tid}", {"cmd": "coverage", "key": f"topic:{tid}", "hash": h, "provider": provider, "model": model, "at": now(),
                                                   "verdicts": verdicts, "transcript": str(tr.relative_to(PROJECT))})
        return [f"   {tid} {i}: {v['verdict']} - {v.get('note', '')[:120]}" for i, v in verdicts.items() if v["verdict"] != "taught"]

    n_block = 0
    with cf.ThreadPoolExecutor(max_workers=max(1, min(jobs, 3))) as ex:
        for res in ex.map(run, tids):
            for line in res:
                print(line)
                n_block += (": missing" in line or ": unknown" in line)
    print(f"done: {n_block} blocking (missing/unknown); partials are reported to the verifier")
    return 0 if not n_block else 2


# ----------------------------------------------------------------------------
# figures: render, then the model reviews the PICTURE
# ----------------------------------------------------------------------------
def cmd_figreview(spec: str, root: Path, provider: str, jobs: int) -> int:
    require_calibration("figreview", provider)
    ct = rc.Content(root)
    keys = sorted(ct.figs) if spec in ("all", "*") else [k for k in ct.figs if any(k == s or k.startswith(s + "_") for s in spec.split(","))]

    def run(k):
        f = ct.figs[k]
        h = rc.jhash({"svg": f.get("svg"), "cap": f.get("cap")})
        old = read_record("figreview", f"fig:{k}", h)
        if old and old.get("hash") == h and old.get("provider") == provider:
            return [f"   {k}: up to date ({old.get('overall')}/10)"]
        png = render_figure(root, k, f)
        tr = transcript_path("figreview", k)
        out, model = ask_json(provider, FIG_PROMPT.format(cap=rc.strip(f.get("cap", "")), texts=json.dumps(rc.svg_texts(f.get("svg", "")), ensure_ascii=False)), FIG_SCHEMA, tr, images=[png])
        write_record("figreview", f"fig:{k}", {"cmd": "figreview", "key": f"fig:{k}", "hash": h, "provider": provider, "model": model, "at": now(),
                                                "errors": out["errors"], "legibility": out["legibility"], "teaches_caption": out["teaches_caption"],
                                                "overall": out["overall"], "verdict": out["verdict"], "png": str(png.relative_to(PROJECT)), "transcript": str(tr.relative_to(PROJECT))})
        blocking = [e for e in out["errors"] if e["severity"] in ("error", "misleading")]
        lines = [f"   {k}: overall {out['overall']}/10, legibility {out['legibility']}/5, teaches caption {out['teaches_caption']}; {len(blocking)} blocking"]
        lines += [f"      {e['severity']}: {e['what'][:90]} -> {e['why_wrong'][:110]}" for e in out["errors"]]
        return lines

    n_block = 0
    with cf.ThreadPoolExecutor(max_workers=max(1, min(jobs, 3))) as ex:
        for res in ex.map(run, keys):
            for line in res:
                print(line)
                if re.search(r"; [1-9]\d* blocking|overall [0-6]/10|teaches caption False|legibility [12]/5", line):
                    n_block += 1
    print(f"done: {n_block} figure(s) blocking (an error/misleading item, overall < 7, legibility < 3, or not teaching its caption)")
    return 0 if not n_block else 2


# ----------------------------------------------------------------------------
# images: does the photo actually show what we claim?
# ----------------------------------------------------------------------------
ASSET_DIR = "repro-endo-assets"


def image_path(root: Path, im: dict) -> Path:
    for base in (root / ASSET_DIR, PROJECT / ASSET_DIR):
        p = base / (im.get("file") or "")
        if p.is_file():
            return p
    return root / ASSET_DIR / (im.get("file") or "")


def cmd_imgverify(spec: str, root: Path, provider: str, jobs: int) -> int:
    require_calibration("imgverify", provider)
    ct = rc.Content(root)
    keys = sorted(ct.images) if spec in ("all", "*") else [k for k in ct.images if any(k == s or k.startswith(s + "_") for s in spec.split(","))]

    def run(k):
        im = ct.images[k]
        p = image_path(root, im)
        if not p.is_file():
            return [f"   {k}: image file missing ({p})"]
        labels = [rc.strip(a.get("l", "")) for a in im.get("ann") or []]
        h = rc.jhash({"file": rc.fhash(p), "dx": im.get("dx"), "n": im.get("n"), "look": im.get("look"), "labels": labels})
        old = read_record("imgverify", f"img:{k}", h)
        if old and old.get("hash") == h and old.get("provider") == provider:
            return [f"   {k}: up to date ({old.get('shows_claimed_dx')})"]
        tr = transcript_path("imgverify", k)
        out, model = ask_json(provider, IMG_PROMPT.format(n=rc.strip(im.get("n", "")), dx=rc.strip(im.get("dx", "")), look=rc.strip(im.get("look", "")), labels=json.dumps(labels, ensure_ascii=False)),
                              IMG_SCHEMA, tr, images=[p])
        write_record("imgverify", f"img:{k}", {"cmd": "imgverify", "key": f"img:{k}", "hash": h, "provider": provider, "model": model, "at": now(), **out,
                                                "transcript": str(tr.relative_to(PROJECT))})
        return [f"   {k}: shows claimed dx = {out['shows_claimed_dx']} ({out['modality_seen']}); " + (out["better_dx_if_not"] or out["comment"])[:140]]

    n_block = 0
    with cf.ThreadPoolExecutor(max_workers=max(1, min(jobs, 3))) as ex:
        for res in ex.map(run, keys):
            for line in res:
                print(line)
                n_block += ("= no" in line or "missing" in line)
    print(f"done: {n_block} image(s) blocking (the picture does not show the claim, or the file is missing)")
    return 0 if not n_block else 2


# ----------------------------------------------------------------------------
# overlays (ported from the cardio round-2 tool; the model designs, the other model reviews)
# ----------------------------------------------------------------------------
KINDS = ["rect", "ellipse", "circle", "polygon", "arrow", "bracket", "spotlight", "inset", "none"]
ANN_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "callouts": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "i": {"type": "integer"}, "kind": {"type": "string", "enum": KINDS},
        "cx": {"type": "number"}, "cy": {"type": "number"}, "w": {"type": "number"}, "h": {"type": "number"}, "rot": {"type": "number"},
        "pts": {"type": "array", "items": {"type": "array", "items": {"type": "number"}}},
        "tail": {"type": "array", "items": {"type": "number"}}, "box": {"type": "array", "items": {"type": "number"}},
        "px": {"type": "number"}, "py": {"type": "number"}, "label": {"type": "string"}, "reason": {"type": "string"}},
        "required": ["i", "kind", "cx", "cy", "w", "h", "rot", "pts", "tail", "box", "px", "py", "label", "reason"]}},
    "design_note": {"type": "string"}}, "required": ["callouts", "design_note"]}

OVERLAY_PROMPT = """You are designing the teaching markup for a clinical image in a medical-student study tool (USMLE Step 1,
endocrine and reproductive systems). The image is attached. You decide the design: how many callouts, what form each
takes, and what each label says. The hard constraints: the student must still be able to SEE every finding (markup never
sits on top of the thing it points at), and every finding listed below must be taught by your labels.

Coordinates are PERCENT of the image: x values against the width, y values against the height; origin top-left.
Forms: rect / ellipse / circle (outline; cx,cy centre, w,h full extent; circle uses w as diameter; rot for ellipse),
polygon (pts [[x,y],...] 3-12 vertices; cx,cy centroid), arrow (cx,cy = tip touching the finding, tail=[x,y]),
bracket (cx,cy = start, tail=[x,y] = end; for a span or thickness), spotlight (dims everything outside an ellipse
cx,cy,w,h; at most one), inset (magnified copy of source region cx,cy,w,h drawn at box=[x,y,w,h] in an empty corner),
none (pin only, for a whole-image pattern). px,py = where the numbered pin sits (edge of the outline, arrow tail, bracket
end, inset corner; never on the finding, never inside another callout). Unused numeric fields: 0; unused arrays: [].
Rules: outlines are the smallest form that contains the finding; no outline over 15% of the frame; all outlines and inset
boxes together under 35%; outlines/inset boxes do not overlap. Labels 10-60 words of plain causal prose a second-year
student reads once and remembers. 1-12 callouts. In "reason" say what visual feature you anchored each callout on.

Image: {name}
Diagnosis: {dx}
What the student should take from the whole image: {look}
Findings that must be taught (index: text):
{labels}

Return JSON only."""

REVIEW_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "callouts": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "i": {"type": "integer"}, "covers_finding": {"type": "boolean"}, "tight": {"type": "boolean"}, "points_at_right_thing": {"type": "boolean"}, "comment": {"type": "string"}},
        "required": ["i", "covers_finding", "tight", "points_at_right_thing", "comment"]}},
    "clarity": {"type": "integer"}, "teaching": {"type": "integer"}, "overall": {"type": "integer"}, "verdict": {"type": "string"}},
    "required": ["callouts", "clarity", "teaching", "overall", "verdict"]}

REVIEW_PROMPT = """The attached picture is a clinical image with numbered teaching callouts drawn on it (outlines, arrows,
brackets, a dimmed spotlight, magnified insets, or plain pins), for a second-year medical student. What each number is
meant to show:
{labels}
Diagnosis: {dx}
For each callout: covers_finding = true if the markup makes its finding harder to see; tight = smallest sensible form;
points_at_right_thing = the callout is really on the structure its label names (be strict). Then clarity 1-5, teaching
1-5, overall 1-10, one-sentence verdict. Return JSON only."""


def area_of(e):
    return max(0.0, rc.ann_area(e))


def bbox_of(e):
    k = e["k"]
    if k == "r":
        return (e["x"], e["y"], e["x"] + e["w"], e["y"] + e["h"])
    if k == "e":
        return (e["x"] - e["rx"], e["y"] - e["ry"], e["x"] + e["rx"], e["y"] + e["ry"])
    if k == "c":
        return (e["x"] - e["r"], e["y"] - e["r"], e["x"] + e["r"], e["y"] + e["r"])
    if k == "poly":
        xs = [p[0] for p in e["pts"]]; ys = [p[1] for p in e["pts"]]
        return (min(xs), min(ys), max(xs), max(ys))
    if k == "inset":
        return (e["ix"], e["iy"], e["ix"] + e["iw"], e["iy"] + e["ih"])
    return None


def convert(proposed: list[dict]) -> tuple[list[dict], list[str]]:
    merged, problems = [], []
    if not (1 <= len(proposed) <= 12):
        problems.append(f"{len(proposed)} callouts; keep between 1 and 12")
    for g in proposed:
        i = g.get("i", len(merged)); kind = g.get("kind")
        try:
            cx, cy, w, h = float(g["cx"]), float(g["cy"]), float(g["w"]), float(g["h"])
        except (KeyError, TypeError, ValueError):
            problems.append(f"callout {i}: missing numbers"); continue
        lab = str(g.get("label", "")).strip()
        if not (10 <= rc.wc(lab) <= 60):
            problems.append(f"callout {i}: label is {rc.wc(lab)} words (10-60)")
        if not (0 <= cx <= 100 and 0 <= cy <= 100) or (cx == 0 and cy == 0):
            problems.append(f"callout {i}: centre ({cx},{cy}) outside the image or unset"); continue
        if kind in ("rect", "ellipse", "circle", "spotlight", "inset") and (w < 2 or (kind != "circle" and h < 2)):
            problems.append(f"callout {i}: extent {w}x{h}% is degenerate"); continue
        if kind == "rect":
            e = {"k": "r", "x": round(cx - w / 2, 1), "y": round(cy - h / 2, 1), "w": round(w, 1), "h": round(h, 1)}
        elif kind == "ellipse":
            e = {"k": "e", "x": round(cx, 1), "y": round(cy, 1), "rx": round(w / 2, 1), "ry": round(h / 2, 1)}
            if g.get("rot"):
                e["rot"] = round(float(g["rot"]))
        elif kind == "circle":
            e = {"k": "c", "x": round(cx, 1), "y": round(cy, 1), "r": round(w / 2, 1)}
        elif kind == "polygon":
            pts = [[round(float(p[0]), 1), round(float(p[1]), 1)] for p in (g.get("pts") or []) if len(p) == 2]
            if len(pts) < 3:
                problems.append(f"callout {i}: polygon needs 3+ points"); continue
            e = {"k": "poly", "x": round(sum(p[0] for p in pts) / len(pts), 1), "y": round(sum(p[1] for p in pts) / len(pts), 1), "pts": pts}
        elif kind == "arrow":
            t = g.get("tail") or []
            if len(t) != 2:
                problems.append(f"callout {i}: arrow needs tail"); continue
            e = {"k": "arrow", "x": round(cx, 1), "y": round(cy, 1), "tx": round(float(t[0]), 1), "ty": round(float(t[1]), 1)}
            if abs(e["tx"] - cx) + abs(e["ty"] - cy) < 4:
                problems.append(f"callout {i}: arrow too short")
        elif kind == "bracket":
            t = g.get("tail") or []
            if len(t) != 2:
                problems.append(f"callout {i}: bracket needs tail"); continue
            e = {"k": "bracket", "x": round(cx, 1), "y": round(cy, 1), "x2": round(float(t[0]), 1), "y2": round(float(t[1]), 1)}
        elif kind == "spotlight":
            e = {"k": "spot", "x": round(cx, 1), "y": round(cy, 1), "rx": round(w / 2, 1), "ry": round(h / 2, 1)}
            if 3.14159 * (w / 2) * (h / 2) / 100 > 45:
                problems.append(f"callout {i}: spotlight reveals too much to be a spotlight")
        elif kind == "inset":
            b = g.get("box") or []
            if len(b) != 4:
                problems.append(f"callout {i}: inset needs box"); continue
            e = {"k": "inset", "x": round(cx - w / 2, 1), "y": round(cy - h / 2, 1), "w": round(w, 1), "h": round(h, 1),
                 "ix": round(float(b[0]), 1), "iy": round(float(b[1]), 1), "iw": round(float(b[2]), 1), "ih": round(float(b[3]), 1)}
            if e["iw"] < 8 or e["ih"] < 8:
                problems.append(f"callout {i}: inset box too small")
        elif kind == "none":
            e = {"k": "none", "x": round(cx, 1), "y": round(cy, 1)}
        else:
            problems.append(f"callout {i}: unknown kind {kind}"); continue
        bb = bbox_of(e)
        if bb and (bb[0] < -1 or bb[1] < -1 or bb[2] > 101 or bb[3] > 101):
            problems.append(f"callout {i}: runs off the image")
        if area_of(e) > 15:
            problems.append(f"callout {i}: covers {area_of(e):.1f}% of the frame (max 15%)")
        px, py = float(g.get("px", cx)), float(g.get("py", cy))
        if bb and e["k"] != "inset" and bb[0] + 0.25 * (bb[2] - bb[0]) < px < bb[2] - 0.25 * (bb[2] - bb[0]) and bb[1] + 0.25 * (bb[3] - bb[1]) < py < bb[3] - 0.25 * (bb[3] - bb[1]):
            problems.append(f"callout {i}: pin sits on the finding")
        e.update({"px": round(px, 1), "py": round(py, 1), "l": lab})
        merged.append(e)
    boxes = [(i, bbox_of(e)) for i, e in enumerate(merged) if bbox_of(e)]
    for a in range(len(boxes)):
        for b in range(a + 1, len(boxes)):
            (i, A), (j, B) = boxes[a], boxes[b]
            if A[0] < B[2] and A[2] > B[0] and A[1] < B[3] and A[3] > B[1]:
                problems.append(f"callouts {i} and {j} overlap")
    if sum(area_of(e) for e in merged) > 35:
        problems.append("all outlines together cover more than 35% of the frame")
    return merged, problems


def preview_html(ann: list[dict], img_uri: str) -> str:
    cols = ["#FF4D3D", "#4DA3FF", "#2ECC80", "#FFB236", "#C77DFF"]
    divs, svg = [], []
    for i, a in enumerate(ann):
        c = cols[i % 5]; k = a["k"]
        if k == "r":
            divs.append(f'<div style="position:absolute;left:{a["x"]}%;top:{a["y"]}%;width:{a["w"]}%;height:{a["h"]}%;border:2px solid {c};border-radius:3px;box-sizing:border-box"></div>')
        elif k in ("e", "spot"):
            if k == "spot":
                svg.append(f'<path fill="rgba(0,0,0,.5)" fill-rule="evenodd" d="M0 0H100V100H0Z M{a["x"] - a["rx"]} {a["y"]} a{a["rx"]} {a["ry"]} 0 1 0 {2 * a["rx"]} 0 a{a["rx"]} {a["ry"]} 0 1 0 {-2 * a["rx"]} 0Z"/>')
            divs.append(f'<div style="position:absolute;left:{a["x"]}%;top:{a["y"]}%;width:{a["rx"] * 2}%;height:{a["ry"] * 2}%;border:2px {"dashed" if k == "spot" else "solid"} {c};border-radius:50%;transform:translate(-50%,-50%) rotate({a.get("rot", 0)}deg);box-sizing:border-box"></div>')
        elif k == "c":
            divs.append(f'<div style="position:absolute;left:{a["x"]}%;top:{a["y"]}%;width:{a["r"] * 2}%;aspect-ratio:1;border:2px solid {c};border-radius:50%;transform:translate(-50%,-50%);box-sizing:border-box"></div>')
        elif k == "poly":
            svg.append(f'<polygon points="{" ".join(f"{p[0]},{p[1]}" for p in a["pts"])}" fill="none" stroke="{c}" stroke-width="0.35" vector-effect="non-scaling-stroke"/>')
        elif k == "arrow":
            svg.append(f'<line x1="{a["tx"]}" y1="{a["ty"]}" x2="{a["x"]}" y2="{a["y"]}" stroke="{c}" stroke-width="0.4" vector-effect="non-scaling-stroke"/><circle cx="{a["x"]}" cy="{a["y"]}" r="0.9" fill="{c}"/>')
        elif k == "bracket":
            svg.append(f'<line x1="{a["x"]}" y1="{a["y"]}" x2="{a["x2"]}" y2="{a["y2"]}" stroke="{c}" stroke-width="0.4" vector-effect="non-scaling-stroke"/>')
        elif k == "inset":
            divs.append(f'<div style="position:absolute;left:{a["x"]}%;top:{a["y"]}%;width:{a["w"]}%;height:{a["h"]}%;border:1.5px dashed {c};box-sizing:border-box"></div>')
            bsx = 10000 / max(a["w"], 0.1); bsy = 10000 / max(a["h"], 0.1)
            bpx = a["x"] / max(100 - a["w"], 0.1) * 100; bpy = a["y"] / max(100 - a["h"], 0.1) * 100
            divs.append(f'<div style="position:absolute;left:{a["ix"]}%;top:{a["iy"]}%;width:{a["iw"]}%;height:{a["ih"]}%;border:2px solid {c};box-sizing:border-box;background-image:url({img_uri});background-size:{bsx:.1f}% {bsy:.1f}%;background-position:{bpx:.2f}% {bpy:.2f}%"></div>')
        divs.append(f'<div style="position:absolute;left:{a["px"]}%;top:{a["py"]}%;transform:translate(-50%,-50%);width:22px;height:22px;border-radius:50%;background:{c};color:#fff;font:700 11px/22px monospace;text-align:center;border:1.5px solid #fff">{i + 1}</div>')
    legend = "".join(f'<div style="margin:4px 0"><b style="color:{cols[i % 5]}">{i + 1}</b> [{a["k"]}] {rc.strip(a.get("l", ""))}</div>' for i, a in enumerate(ann))
    return f"""<!doctype html><meta charset="utf-8"><body style="margin:0;background:#111;color:#eee;font:13px system-ui;width:1000px">
<div style="position:relative;width:1000px;line-height:0"><img src="{img_uri}" style="width:1000px;display:block">
<svg viewBox="0 0 100 100" preserveAspectRatio="none" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible">{''.join(svg)}</svg>{''.join(divs)}</div>
<div style="padding:12px 16px;line-height:1.4">{legend}</div></body>"""


def default_provider(key: str | None = None) -> str:
    try:
        cfg = json.loads(PROVIDER_FILE.read_text(encoding="utf-8"))
        return cfg.get("default", "codex")
    except (OSError, ValueError):
        return "codex"


def cmd_overlay(key: str, root: Path, provider: str | None, suffix="") -> dict:
    ct = rc.Content(root)
    im = ct.images.get(key) or raise_(f"unknown image {key}")
    p = image_path(root, im)
    findings = im.get("findings") or [a.get("l", "") for a in im.get("ann") or []]
    if not findings:
        raise SystemExit(f"{key}: no findings to teach (content/images/{key}.json needs 'findings' or 'ann' labels)")
    provider = provider or default_provider(key)
    prompt = OVERLAY_PROMPT.format(name=rc.strip(im.get("n", key)), dx=rc.strip(im.get("dx", "")), look=rc.strip(im.get("look", "")),
                                   labels="\n".join(f"{i}: {rc.strip(l)}" for i, l in enumerate(findings)))
    problems, merged, model = ["(first attempt)"], [], "?"
    for attempt in range(3):
        ask = prompt if attempt == 0 else prompt + "\n\nYour previous design was rejected; fix every one of these and keep the rest:\n- " + "\n- ".join(problems)
        tr = OVERLAYS / f"{key}{suffix}.propose.jsonl"
        out, model = ask_json(provider, ask, ANN_SCHEMA, tr, images=[p])
        merged, problems = convert(out.get("callouts", []))
        lost = [i for i, l in enumerate(findings) if rc.terms_present(" ".join(e["l"] for e in merged), [[w] for w in rc.kws(l, 6)[:4]]) and len(rc.terms_present(" ".join(e["l"] for e in merged), [[w] for w in rc.kws(l, 6)[:4]])) > max(1, len(rc.kws(l, 6)[:4]) // 2)]
        problems += [f"finding {i} lost its key terms" for i in lost]
        if not problems:
            break
        print(f"  {provider} attempt {attempt + 1} rejected: " + "; ".join(problems[:4]))
    if problems:
        raise RuntimeError(f"{provider} could not design {key} in 3 attempts: " + "; ".join(problems[:6]))
    rec = {"provider": provider, "model": model, "key": key, "image_sha": rc.fhash(p, 16), "at": now(), "ann": merged,
           "kinds": [e["k"] for e in merged], "areaSum": round(sum(area_of(e) for e in merged), 1), "areaMax": round(max(area_of(e) for e in merged), 1),
           "findings": findings, "adjustments": []}
    OVERLAYS.mkdir(parents=True, exist_ok=True)
    (OVERLAYS / f"{key}{suffix}.json").write_text(json.dumps(rec, indent=1, ensure_ascii=False), encoding="utf-8")
    png = shoot(preview_html(merged, p.resolve().as_uri()), OVERLAYS / f"{key}{suffix}.preview.png", width=1000, height=1400)
    print(f"{key}{suffix}: {len(merged)} callouts ({', '.join(rec['kinds'])}) by {provider}/{model}; area sum {rec['areaSum']}% max {rec['areaMax']}%\n  preview: {png}")
    return rec


def raise_(msg):
    raise SystemExit(msg)


def cmd_overlay_review(key: str, root: Path, reviewer: str | None, suffix="") -> dict:
    ct = rc.Content(root)
    im = ct.images.get(key) or raise_(f"unknown image {key}")
    prop = json.loads((OVERLAYS / f"{key}{suffix}.json").read_text(encoding="utf-8"))
    reviewer = reviewer or other(prop.get("provider", "codex"))
    p = image_path(root, im)
    png = shoot(preview_html(prop["ann"], p.resolve().as_uri()), OVERLAYS / f"{key}{suffix}.preview.png", width=1000, height=1400)
    labels = "\n".join(f"{i + 1}: {rc.strip(a.get('l', ''))}" for i, a in enumerate(prop["ann"]))
    tr = OVERLAYS / f"{key}{suffix}.review.jsonl"
    out, model = ask_json(reviewer, REVIEW_PROMPT.format(labels=labels, dx=rc.strip(im.get("dx", ""))), REVIEW_SCHEMA, tr, images=[png])
    rec = {"provider": reviewer, "model": model, "key": key, "reviewed_provider": prop.get("provider"), "proposal_hash": rc.jhash(prop["ann"]), "at": now(),
           "shapes": out["callouts"], **{k: out[k] for k in ("clarity", "teaching", "overall", "verdict")}}
    (OVERLAYS / f"{key}{suffix}.review.json").write_text(json.dumps(rec, indent=1, ensure_ascii=False), encoding="utf-8")
    bad = [s for s in out["callouts"] if s.get("covers_finding") or not s.get("points_at_right_thing")]
    print(f"{key}{suffix}: reviewed by {reviewer}/{model}: overall {out['overall']}/10; {len(bad)} callout(s) failing")
    for s in bad:
        print(f"   callout {s['i']}: {'covers ' if s.get('covers_finding') else ''}{'misplaced ' if not s.get('points_at_right_thing') else ''}- {s.get('comment', '')[:110]}")
    return rec


def cmd_bakeoff(keys: list[str], root: Path) -> int:
    results = {}
    for key in keys:
        results[key] = {}
        for prov in PROVIDERS:
            sfx = f".{prov}"
            try:
                rec = cmd_overlay(key, root, prov, sfx)
            except (RuntimeError, SystemExit) as e:
                results[key][prov] = {"failed": str(e)[:200]}
                continue
            revs = {}
            for rv in PROVIDERS:
                try:
                    r = cmd_overlay_review(key, root, rv, sfx)
                    revs[rv] = {"overall": r["overall"], "failing": sum(1 for s in r["shapes"] if s.get("covers_finding") or not s.get("points_at_right_thing"))}
                except (RuntimeError, SystemExit) as e:
                    revs[rv] = {"failed": str(e)[:200]}
            ok = [v for v in revs.values() if "overall" in v]
            results[key][prov] = {"model": rec["model"], "kinds": rec["kinds"], "areaSum": rec["areaSum"], "reviews": revs,
                                  "score": round(sum(v["overall"] for v in ok) / max(1, len(ok)), 2) - 2 * sum(v.get("failing", 0) for v in ok)}
    tot = {p: [r.get("score", -99) for provs in results.values() for pp, r in provs.items() if pp == p] for p in PROVIDERS}
    default = max(tot, key=lambda p: sum(tot[p]) / max(1, len(tot[p])))
    cfg = {"default": default, "decidedAt": now(), "images": keys}
    OVERLAYS.mkdir(parents=True, exist_ok=True)
    PROVIDER_FILE.write_text(json.dumps(cfg, indent=1), encoding="utf-8")
    (OVERLAYS / "bakeoff.json").write_text(json.dumps({"results": results, "config": cfg}, indent=1, ensure_ascii=False), encoding="utf-8")
    lines = ["# BAKEOFF - which model designs the overlays", "", "| image | provider | callouts | area % | codex review | gemini review | score |", "|---|---|---|---|---|---|---|"]
    for key, provs in results.items():
        for prov, r in provs.items():
            if "failed" in r:
                lines.append(f"| {key} | {prov} | FAILED | - | - | - | {r['failed'][:60]} |"); continue
            f = lambda v: f"{v['overall']}/10 ({v['failing']} failing)" if "overall" in v else "failed"
            lines.append(f"| {key} | {prov} | {len(r['kinds'])} | {r['areaSum']} | {f(r['reviews'].get('codex', {}))} | {f(r['reviews'].get('gemini', {}))} | {r['score']} |")
    lines += ["", f"DEFAULT: {default}"]
    (OVERLAYS / "BAKEOFF.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    for key, provs in results.items():
        best = max((p for p in provs if "failed" not in provs[p]), key=lambda p: provs[p]["score"], default=None)
        if best:
            for ext in (".json", ".propose.jsonl", ".review.json", ".review.jsonl", ".preview.png", ".preview.html"):
                src = OVERLAYS / f"{key}.{best}{ext}"
                if src.is_file():
                    shutil.copyfile(src, OVERLAYS / f"{key}{ext}")
    print("\n".join(lines))
    return 0


# ----------------------------------------------------------------------------
# gaps: what does Step 1 test in this topic that the blueprint does not list? (task P1.3)
# ----------------------------------------------------------------------------
GAPS_SCHEMA = {"type": "object", "additionalProperties": False, "properties": {
    "gaps": {"type": "array", "items": {"type": "object", "additionalProperties": False, "properties": {
        "concept": {"type": "string"}, "why_tested": {"type": "string"}, "yield": {"type": "string", "enum": ["hi", "mid", "lo"]}},
        "required": ["concept", "why_tested", "yield"]}}},
    "required": ["gaps"]}

GAPS_PROMPT = """You are a USMLE Step 1 content expert (endocrine and reproductive systems) auditing a study tool's plan.
Below are the Step 1 concepts the tool will teach for ONE topic, and the medical-school course objectives mapped to it.
List every concept that USMLE Step 1 / NBME-style questions commonly test for THIS topic and that is NOT already on the
list: a mechanism, association, drug or adverse effect, lab or hormone pattern, histology or imaging finding, embryologic
origin, genetic defect, classic vignette clue, or discriminating feature between look-alikes.
Rules: do not repeat anything already covered under different wording; do not list clinical-management detail beyond
Step 1 scope (dosing, guideline algorithms beyond first-line choice); do not list material that belongs to another
organ system. Each gap: "concept" (<= 25 words, precise and testable), "why_tested" (<= 30 words: the question stem it
enables), "yield" (hi / mid / lo for Step 1). Return an empty list if nothing important is missing.

TOPIC: {title}
PLANNED CONCEPTS:
{items}
COURSE OBJECTIVES MAPPED TO THIS TOPIC:
{objs}

Return JSON only."""


def blueprint_titles() -> dict[str, str]:
    p = PROJECT / "scope" / "STEP1-BLUEPRINT.md"
    if not p.is_file():
        return {}
    return {m.group(1): m.group(2).strip() for m in re.finditer(r"^## ((?:en|rp)\d+) \S+ (.+)$", p.read_text(encoding="utf-8"), re.M)}


def cmd_gaps(spec: str, provider: str, jobs: int) -> int:
    require_calibration("factcheck", provider)
    titles = blueprint_titles()
    tids = list(titles) if spec in ("all", "*") else [s.strip() for s in spec.split(",") if s.strip()]
    bp, objs, tm = rc.blueprint(), rc.objectives(), rc.topic_map()

    def run(tid):
        items = [(bid, b["text"]) for bid, b in bp.items() if b["topic"] == tid and b["yield"] != "x"]
        mapped = [(oid, objs[oid]) for oid, ts in tm.items() if tid in ts and oid in objs]
        h = rc.jhash({"items": items, "objs": mapped})
        old = read_record("gaps", f"topic:{tid}")
        if old and old.get("hash") == h and old.get("provider") == provider:
            return [f"   {tid}: up to date ({len(old.get('gaps') or [])} gaps)"]
        tr = transcript_path("gaps", tid)
        out, model = ask_json(provider, GAPS_PROMPT.format(title=titles.get(tid, tid), items="\n".join(f"{i}: {t}" for i, t in items) or "(none)",
                                                           objs="\n".join(f"{i}: {t}" for i, t in mapped) or "(none: this topic comes from the Step 1 outline only)"), GAPS_SCHEMA, tr)
        gaps = [{"gid": f"GAP-{tid}-{n + 1:02d}", **g} for n, g in enumerate(out.get("gaps") or [])]
        write_record("gaps", f"topic:{tid}", {"cmd": "gaps", "key": f"topic:{tid}", "hash": h, "provider": provider, "model": model, "at": now(),
                                               "gaps": gaps, "transcript": str(tr.relative_to(PROJECT))})
        return [f"   {g['gid']} [{g['yield']}] {g['concept']}  -- {g['why_tested'][:120]}" for g in gaps] or [f"   {tid}: no gaps"]

    with cf.ThreadPoolExecutor(max_workers=max(1, min(jobs, 3))) as ex:
        for res in ex.map(run, tids):
            for line in res:
                print(line)
    print("Every GAP id now needs a row in scope/BP-GAPS.md:  | GAP-id | ADDED | BP-<tid>-<nn> |  or  | GAP-id | REJECTED | reason (>= 20 chars) |")
    return 0


# ----------------------------------------------------------------------------
# adjudication: the OTHER model rules on a disputed flag
# ----------------------------------------------------------------------------
def cmd_adjudicate(cmd: str, key: str, rebuttal: str, root: Path, item: str | None = None) -> int:
    """item: one objective id (coverage) or one wrong-option text (grade) inside a multi-verdict record; the
    ruling then covers only that item. factcheck / figreview / imgverify records are adjudicated whole."""
    rec = read_record(cmd, key)
    if not rec:
        raise SystemExit(f"no {cmd} record for {key}")
    if cmd in ("coverage", "grade") and not item:
        raise SystemExit(f"{cmd} verdicts are adjudicated one item at a time: add --item \"<objective id or option text>\"")
    if len(rebuttal.strip()) < 40:
        raise SystemExit("a rebuttal must explain, with a source, why the flag is wrong (>= 40 chars)")
    judge = other(rec["provider"])
    ct = rc.Content(root)
    kind = key.split(":", 1)[0]
    items = {k: p for k, h, p in fact_items(ct, {"q": "q", "r": "rapid", "topic": "topic", "drill": "drill", "fig": "fig", "img": "img", "gloss": "gloss", "palace": "palace", "guide": "guide"}.get(kind, kind), "all")} if cmd == "factcheck" else {}
    thing = items.get(key) or {"key": key}
    if item:
        v = (rec.get("verdicts") or {}).get(item)
        if v is None:
            raise SystemExit(f"{key} has no verdict for item {item!r}")
        flag = json.dumps({"item": item, "verdict": v}, ensure_ascii=False)
        if cmd == "coverage":
            tid = key.split(":", 1)[1]
            text, acc = coverage_payload(ct, tid)
            thing = {"objective": dict(acc).get(item, item), "topic_text": text[:12000]}
    else:
        flag = json.dumps({k: rec.get(k) for k in ("verdict", "claim", "correction", "verdicts", "errors", "shows_claimed_dx", "better_dx_if_not") if rec.get(k) is not None}, ensure_ascii=False)[:3000]
    item_json = json.dumps(thing, ensure_ascii=False)[:14000]
    tr = transcript_path("adjudicate", key)
    out, model = ask_json(judge, ADJ_PROMPT.format(item=item_json, flag_by=rec["provider"], flag=flag, rebuttal=rebuttal), ADJ_SCHEMA, tr)
    akey = f"{cmd}-{key}" + (f"#{item}" if item else "")
    write_record("adjudicate", akey, {"cmd": "adjudicate", "of": cmd, "key": key, "item": item, "hash": rec.get("hash"), "flag_provider": rec["provider"], "provider": judge,
                                      "model": model, "at": now(), "ruling": out["ruling"], "reason": out["reason"], "rebuttal": rebuttal, "transcript": str(tr.relative_to(PROJECT))})
    print(f"{key}: {out['ruling']} by {judge}/{model} - {out['reason'][:300]}")
    return 0 if out["ruling"] == "rebuttal-upheld" else 2


def cmd_ping(provider: str) -> int:
    out, model = ask_json(provider, "Reply with the single word READY as the value of answer.", PING_SCHEMA, transcript_path("ping", provider))
    ok = "READY" in out.get("answer", "").upper()
    (XM / f"ping-{provider}.json").write_text(json.dumps({"provider": provider, "model": model, "at": now(), "ok": ok}), encoding="utf-8")
    print(f"{provider}/{model}: {'ok' if ok else 'unexpected answer: ' + str(out)}")
    return 0 if ok else 2


def cmd_status(cmd: str, prefix: str) -> int:
    d = XM / cmd
    if not d.is_dir():
        print("no records"); return 0
    n = 0
    for p in sorted(d.glob("*.json")):
        r = json.loads(p.read_text(encoding="utf-8"))
        if prefix and not r.get("key", "").startswith(prefix):
            continue
        n += 1
        v = r.get("verdict") or r.get("shows_claimed_dx") or (f"{r.get('overall')}/10" if "overall" in r else "") or ""
        print(f"{r.get('key')}: {v} [{r.get('provider')}/{r.get('model')} {r.get('at')}]")
    print(f"{n} record(s)")
    return 0


def main(argv):
    if not argv:
        print(__doc__); return 1
    cmd = argv[0]
    root = Path(arg(argv, "--root", str(PROJECT))).resolve()
    prov = arg(argv, "--provider")
    jobs = int(arg(argv, "--jobs", "1"))
    if cmd == "ping":
        return cmd_ping(argv[1] if len(argv) > 1 and not argv[1].startswith("--") else "codex")
    if cmd == "calibrate":
        return cmd_calibrate(argv[1], prov or "codex")
    if cmd == "factcheck":
        return cmd_factcheck(argv[1], argv[2], root, prov or "codex", jobs)
    if cmd == "grade":
        return cmd_grade(argv[1], argv[2], root, prov or "codex", jobs)
    if cmd == "coverage":
        return cmd_coverage(argv[1], root, prov or "codex", jobs)
    if cmd == "figreview":
        return cmd_figreview(argv[1], root, prov or "codex", jobs)
    if cmd == "imgverify":
        return cmd_imgverify(argv[1], root, prov or "codex", jobs)
    if cmd == "overlay":
        try:
            cmd_overlay(argv[1], root, prov)
        except RuntimeError as e:
            print(f"{e}\nfalling back to the other model")
            cmd_overlay(argv[1], root, other(prov or default_provider(argv[1])))
        return 0
    if cmd == "overlay-review":
        rec = cmd_overlay_review(argv[1], root, arg(argv, "--reviewer"))
        return 0 if not [s for s in rec["shapes"] if s.get("covers_finding") or not s.get("points_at_right_thing")] and rec["overall"] >= 7 else 2
    if cmd == "bakeoff":
        return cmd_bakeoff(argv[1].split(","), root)
    if cmd == "adjudicate":
        return cmd_adjudicate(argv[1], argv[2], arg(argv, "--rebuttal", ""), root, arg(argv, "--item"))
    if cmd == "gaps":
        return cmd_gaps(argv[1], prov or "codex", jobs)
    if cmd == "status":
        return cmd_status(argv[1], argv[2] if len(argv) > 2 and not argv[2].startswith("--") else "")
    print(__doc__)
    return 1


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
