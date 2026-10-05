#!/usr/bin/env python
"""repro_common.py -- shared, gate-owned helpers for REPRO-PLAN.md.

check_repro.py (the gate), xmodel.py (the second-model tools) and build.py (the page
assembler) all import this module, so an item is loaded, hashed, stripped and counted
the SAME way everywhere. If two tools disagreed about what an item's hash is, a
second-model verdict could be matched to the wrong text; one module removes that class
of bug. Implementers never edit this file (it is part of the GATE sha).

Content lives in <root>/content/ as one object per file (see REPRO-PLAN.md §6):
  meta.json, path.json, concepts.json
  topics/<tid>.json      questions/<tid>.json   rapid/<tid>.json   glossary/<tid>.json
  guides/<tid>.json      drills/<did>.json      palace/<key>.json
  figs/<key>.svg + figs/<key>.json              images/<key>.json (+ assets/<file>)
<root> is the project directory for MAIN, or .repro/ws/<task>/ for a task workspace.
"""
from __future__ import annotations

import hashlib
import html as htmllib
import json
import re
import struct
from pathlib import Path

PROJECT = Path(__file__).resolve().parent
SCOPE_DIR = PROJECT / "scope"

# ----------------------------------------------------------------------------
# text helpers
# ----------------------------------------------------------------------------
_TAG = re.compile(r"<[^>]+>")
_ENT = re.compile(r"&(#\d+|#x[0-9a-f]+|[a-z]+);", re.I)
_GLOSS = re.compile(r"\{\{([^}|]+)(?:\|([^}]+))?\}\}")
_WIKI = re.compile(r"\[\[([^\]]+)\]\]")


def strip(s) -> str:
    """Markup-free text: HTML tags, entities, **bold**, *italic*, {{key|Label}} -> Label, [[term]] -> term."""
    s = "" if s is None else str(s)
    s = _GLOSS.sub(lambda m: (m.group(2) or m.group(1)), s)
    s = _WIKI.sub(lambda m: m.group(1), s)
    s = _TAG.sub(" ", s)
    s = htmllib.unescape(s)
    s = s.replace("**", "").replace("__", "")
    s = re.sub(r"(?<!\w)\*(?!\s)|(?<!\s)\*(?!\w)", "", s)
    return re.sub(r"\s+", " ", s).strip()


def words(s) -> list[str]:
    return [w for w in strip(s).split(" ") if w]


def wc(s) -> int:
    return len(words(s))


STOP = set("""a an the and or but if then than that this these those of in on at to for from by with without into onto
over under between among about as is are was were be been being it its it's their there here which who whom whose what
when where why how not no nor so such can could may might must shall should will would do does did done has have had
having more most less least very much many few each every any all both either neither one two three first second
also only just even still yet because therefore thus hence while whereas although though since until unless
patient patients student students most commonly common usually often typically""".split())


def kws(s, n=4) -> list[str]:
    """Content words (>= n letters, not stopwords), lowercase, in order."""
    return [w for w in re.split(r"[^a-z0-9α-ωµ\-]+", strip(s).lower()) if len(w) >= n and w not in STOP]


def novel_words(text, *against, n=4) -> list[str]:
    """Content words of `text` that appear in none of `against` (the restatement proxy)."""
    pool = set()
    for a in against:
        pool.update(kws(a, n))
    return [w for w in dict.fromkeys(kws(text, n)) if w not in pool]


def names_answer(text, answer) -> bool:
    """True if `text` contains at least one content word (>= 4 letters) of `answer`,
    or the whole answer string when the answer is short (e.g. 'FSH', 'T3')."""
    a = strip(answer).lower()
    t = strip(text).lower()
    if not a:
        return False
    k = kws(a, 4)
    if not k:
        return a in t
    return any(w in t for w in k)


def fnv(s: str) -> str:
    h = 2166136261
    for ch in s:
        h ^= ord(ch)
        h = (h * 16777619) & 0xFFFFFFFF
    return f"{h:08x}"


def jhash(obj) -> str:
    """Canonical content hash of any JSON-able object (sorted keys, no whitespace)."""
    return hashlib.sha256(json.dumps(obj, sort_keys=True, ensure_ascii=False, separators=(",", ":")).encode("utf-8")).hexdigest()[:12]


def fhash(p: Path, n=12) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()[:n]


# ----------------------------------------------------------------------------
# American spelling (NBME/USMLE spelling; the user's earlier repro tool enforced it)
# ----------------------------------------------------------------------------
BRITISH = {
    "oestrogen": "estrogen", "oestradiol": "estradiol", "oestrone": "estrone", "oestriol": "estriol", "oestrus": "estrus",
    "haemorrhage": "hemorrhage", "haemoglobin": "hemoglobin", "haematocrit": "hematocrit", "haematoma": "hematoma",
    "haemolysis": "hemolysis", "haematuria": "hematuria", "haem": "heme", "anaemia": "anemia", "leukaemia": "leukemia",
    "oedema": "edema", "oesophagus": "esophagus", "oesophageal": "esophageal", "foetus": "fetus", "foetal": "fetal",
    "gynaecology": "gynecology", "gynaecologic": "gynecologic", "gynaecological": "gynecologic", "paediatric": "pediatric",
    "orthopaedic": "orthopedic", "ischaemia": "ischemia", "ischaemic": "ischemic", "diarrhoea": "diarrhea",
    "amenorrhoea": "amenorrhea", "dysmenorrhoea": "dysmenorrhea", "galactorrhoea": "galactorrhea",
    "gonorrhoea": "gonorrhea", "luteinise": "luteinize", "luteinising": "luteinizing", "luteinised": "luteinized",
    "tumour": "tumor", "tumours": "tumors", "colour": "color", "behaviour": "behavior", "fibre": "fiber", "centre": "center",
    "litre": "liter", "millilitre": "milliliter", "haemostasis": "hemostasis", "caesarean": "cesarean", "hypoglycaemia": "hypoglycemia",
    "hyperglycaemia": "hyperglycemia", "glycaemic": "glycemic", "hypercalcaemia": "hypercalcemia", "hypocalcaemia": "hypocalcemia",
    "hyperkalaemia": "hyperkalemia", "hypokalaemia": "hypokalemia", "hyponatraemia": "hyponatremia", "hypernatraemia": "hypernatremia",
    "aetiology": "etiology", "anaesthesia": "anesthesia",
    "programme": "program", "recognise": "recognize", "organise": "organize", "characterise": "characterize",
    "haemophilus": "haemophilus",  # genus name keeps its spelling (Haemophilus ducreyi) - listed only to whitelist
}
BRITISH_WHITELIST = {"haemophilus"}
_BRIT = re.compile(r"\b(" + "|".join(sorted((k.strip() for k in BRITISH if k.strip() not in BRITISH_WHITELIST), key=len, reverse=True)) + r")\b", re.I)


def british_hits(text) -> list[str]:
    return sorted({m.group(1).lower() for m in _BRIT.finditer(strip(text))})


# Hedges / non-answers offered as distractors. "No change" is allowed (direction questions need it).
THROWAWAY = re.compile(r"^(none|neither|both|either|all of the above|none of the above|any of the above|it does not|it doesn't|"
                       r"there (are|is) (none|no)\b|not applicable|nothing|n/a|unknown|cannot be determined|all of these)\b", re.I)


# ----------------------------------------------------------------------------
# scope files: Canvas objectives and the Step 1 blueprint
# ----------------------------------------------------------------------------
OBJ_LINE = re.compile(r"^([A-Z][A-Z0-9-]+)\.(\d+) (.+)$", re.M)
BP_LINE = re.compile(r"^(BP-((?:en|rp)\d+)-(\d+)) \[(hi|mid|lo|x)\] (.+?)(?:\s*\{k:\s*([^}]*)\})?\s*$", re.M)


def objectives(scope_dir: Path = SCOPE_DIR) -> dict[str, str]:
    p = scope_dir / "CANVAS-SCOPE.md"
    if not p.is_file():
        return {}
    return {f"{m.group(1)}.{m.group(2)}": m.group(3).strip() for m in OBJ_LINE.finditer(p.read_text(encoding="utf-8"))}


def blueprint(scope_dir: Path = SCOPE_DIR) -> dict[str, dict]:
    p = scope_dir / "STEP1-BLUEPRINT.md"
    if not p.is_file():
        return {}
    out = {}
    for m in BP_LINE.finditer(p.read_text(encoding="utf-8")):
        terms = [t.strip() for t in (m.group(6) or "").split(";") if t.strip()]
        out[m.group(1)] = {"topic": m.group(2), "n": int(m.group(3)), "yield": m.group(4), "text": m.group(5).strip(),
                           "terms": [[alt.strip().lower() for alt in t.split("|") if alt.strip()] for t in terms]}
    return out


def topic_map(scope_dir: Path = SCOPE_DIR) -> dict[str, list[str]]:
    """scope/TOPIC-MAP.md rows: | OBJ-ID | tid[,tid...] | section heading that teaches it | key terms |"""
    p = scope_dir / "TOPIC-MAP.md"
    out: dict[str, list[str]] = {}
    if not p.is_file():
        return out
    for m in re.finditer(r"^\|\s*([A-Z][A-Z0-9-]+\.\d+)\s*\|\s*([a-z0-9, ]+?)\s*\|(.*)\|\s*$", p.read_text(encoding="utf-8"), re.M):
        out[m.group(1)] = [t.strip() for t in m.group(2).split(",") if t.strip()]
    return out


def topic_map_rows(scope_dir: Path = SCOPE_DIR) -> dict[str, dict]:
    p = scope_dir / "TOPIC-MAP.md"
    out = {}
    if not p.is_file():
        return out
    for m in re.finditer(r"^\|\s*([A-Z][A-Z0-9-]+\.\d+)\s*\|\s*([a-z0-9, ]+?)\s*\|\s*([^|]*?)\s*\|\s*([^|]*?)\s*\|\s*$", p.read_text(encoding="utf-8"), re.M):
        out[m.group(1)] = {"topics": [t.strip() for t in m.group(2).split(",") if t.strip()], "section": m.group(3).strip(),
                           "terms": [[a.strip().lower() for a in t.split("|") if a.strip()] for t in m.group(4).split(";") if t.strip()]}
    return out


# ----------------------------------------------------------------------------
# content loading
# ----------------------------------------------------------------------------
def _load(p: Path, default=None):
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return default
    except ValueError as e:
        raise ValueError(f"{p}: invalid JSON: {e}") from e


class Content:
    """Everything under <root>/content, loaded once. Missing files load as empty."""

    def __init__(self, root: Path):
        self.root = Path(root)
        c = self.root / "content"
        self.dir = c
        self.errors: list[str] = []
        self.meta = self._try(lambda: _load(c / "meta.json", {}), {})
        self.path = self._try(lambda: _load(c / "path.json", []), [])
        self.concepts = self._try(lambda: _load(c / "concepts.json", {}), {})
        self.topics: dict[str, dict] = {}
        self.questions: dict[str, list] = {}
        self.rapid: dict[str, list] = {}
        self.glossary: dict[str, list] = {}
        self.guides: dict[str, dict] = {}
        for sub, store, default in (("topics", self.topics, {}), ("questions", self.questions, []), ("rapid", self.rapid, []),
                                    ("glossary", self.glossary, []), ("guides", self.guides, {})):
            d = c / sub
            if d.is_dir():
                for p in sorted(d.glob("*.json")):
                    store[p.stem] = self._try(lambda p=p: _load(p, default), default)
        self.drills = {p.stem: self._try(lambda p=p: _load(p, {}), {}) for p in sorted((c / "drills").glob("*.json"))} if (c / "drills").is_dir() else {}
        self.palace = {p.stem: self._try(lambda p=p: _load(p, {}), {}) for p in sorted((c / "palace").glob("*.json"))} if (c / "palace").is_dir() else {}
        self.images = {p.stem: self._try(lambda p=p: _load(p, {}), {}) for p in sorted((c / "images").glob("*.json"))} if (c / "images").is_dir() else {}
        self.figs: dict[str, dict] = {}
        fd = c / "figs"
        if fd.is_dir():
            for p in sorted(fd.glob("*.json")):
                meta = self._try(lambda p=p: _load(p, {}), {})
                svgp = fd / (p.stem + ".svg")
                meta = dict(meta or {})
                meta["svg"] = svgp.read_text(encoding="utf-8") if svgp.is_file() else ""
                self.figs[p.stem] = meta

    def _try(self, fn, default):
        try:
            return fn()
        except ValueError as e:
            self.errors.append(str(e))
            return default

    # ---- derived views ----
    def topic_ids(self) -> list[str]:
        order = [t for b in (self.meta.get("blocks") or []) for t in (b.get("topics") or [])]
        return order + [t for t in sorted(self.topics) if t not in order]

    def all_questions(self):
        for tid, qs in self.questions.items():
            for q in qs or []:
                yield tid, q

    def all_rapid(self):
        for tid, rs in self.rapid.items():
            for r in rs or []:
                yield tid, r

    def block_of(self, tid: str) -> str | None:
        for b in self.meta.get("blocks") or []:
            if tid in (b.get("topics") or []):
                return b.get("id")
        return None


# ----------------------------------------------------------------------------
# item enumeration + canonical hashes (scope snapshots and second-model records)
# ----------------------------------------------------------------------------
def item_hashes(ct: Content) -> dict[str, dict[str, str]]:
    """{map: {id: hash}} for every content item. Map names are what SCOPE rules name."""
    H: dict[str, dict[str, str]] = {k: {} for k in ("topic", "tbody", "pretest", "grid", "q", "qopts", "qw", "qet", "qbl", "qpt", "qvis",
                                                  "r", "ropts", "rw", "rpt", "rmedia", "drill", "fig", "figsvg", "figcap", "img", "imgann",
                                                  "imgwrong", "imgmeta", "gloss", "palace", "guide", "path", "concepts", "meta")}
    for tid, t in ct.topics.items():
        H["topic"][tid] = jhash(t)
        H["tbody"][tid] = jhash(t.get("body"))
        H["pretest"][tid] = jhash(t.get("pretest"))
        H["grid"][tid] = jhash(t.get("grid"))
    for tid, q in ct.all_questions():
        i = str(q.get("id"))
        H["q"][i] = jhash(q)
        H["qopts"][i] = jhash(sorted(q.get("o") or []))
        H["qw"][i] = jhash(q.get("w"))
        H["qet"][i] = jhash(q.get("et"))
        H["qbl"][i] = jhash(q.get("bl"))
        H["qpt"][i] = jhash(q.get("pt"))
        H["qvis"][i] = jhash([q.get("ef"), q.get("ei")])
    for tid, r in ct.all_rapid():
        i = str(r.get("id"))
        H["r"][i] = jhash(r)
        H["ropts"][i] = jhash(sorted(r.get("o") or []))
        H["rw"][i] = jhash(r.get("w"))
        H["rpt"][i] = jhash(r.get("pt"))
        H["rmedia"][i] = jhash(r.get("media"))
    for k, d in ct.drills.items():
        H["drill"][k] = jhash(d)
    for k, f in ct.figs.items():
        H["fig"][k] = jhash(f)
        H["figsvg"][k] = jhash(f.get("svg"))
        H["figcap"][k] = jhash([f.get("cap"), f.get("teach")])
    for k, im in ct.images.items():
        H["img"][k] = jhash(im)
        H["imgann"][k] = jhash(im.get("ann"))
        H["imgwrong"][k] = jhash([im.get("wrong"), im.get("ww")])
        H["imgmeta"][k] = jhash([im.get(f) for f in ("file", "cred", "by", "lic", "licurl", "srcurl", "dx")])
    for tid, g in ct.glossary.items():
        for e in g or []:
            H["gloss"][str(e.get("k"))] = jhash(e)
    for k, p in ct.palace.items():
        H["palace"][k] = jhash(p)
    for tid, g in ct.guides.items():
        H["guide"][tid] = jhash(g)
    H["path"]["path"] = jhash(ct.path)
    H["concepts"]["concepts"] = jhash(ct.concepts)
    H["meta"]["meta"] = jhash(ct.meta)
    return H


def question_payload(q: dict) -> dict:
    """What a second model judges for a practice question (and what its record hash covers)."""
    return {k: q.get(k) for k in ("id", "s", "l", "o", "a", "e", "w", "et", "bl", "pt", "ef", "ei")}


def rapid_payload(r: dict) -> dict:
    return {k: r.get(k) for k in ("id", "q", "o", "a", "x", "w", "pt", "media")}


def payload_hash(obj) -> str:
    return jhash(obj)


# ----------------------------------------------------------------------------
# topic rendered text (static approximation of what the student reads)
# ----------------------------------------------------------------------------
def block_text(b) -> str:
    if not isinstance(b, list) or not b:
        return ""
    k = b[0]
    if k in ("h", "p"):
        return str(b[1]) if len(b) > 1 else ""
    if k == "call":
        return " ".join(str(x) for x in b[2:4])
    if k == "why":
        return " ".join(str(x) for x in b[1:3])
    if k == "t":
        head = b[1] if len(b) > 1 else []
        rows = b[2] if len(b) > 2 else []
        return " ".join(str(c) for c in head) + " " + " ".join(str(c) for r in rows for c in r)
    if k == "steps":
        a = b[1] if isinstance(b[1], list) else [b[1], b[2] if len(b) > 2 else []]
        title, rows = a[0], (a[1] if len(a) > 1 else [])
        return str(title) + " " + " ".join(" ".join(str(c) for c in (r if isinstance(r, list) else [r])) for r in rows)
    if k == "sexp" and len(b) > 1 and isinstance(b[1], dict):
        s = b[1]
        return " ".join([str(s.get("q", "")), " ".join(str(o) for o in s.get("o") or []), str(s.get("why", ""))])
    return ""


def svg_texts(svg: str) -> list[str]:
    """Text of every <text>/<tspan> node, markup stripped (what the eye can land on)."""
    out = []
    for m in re.finditer(r"<text\b[^>]*>(.*?)</text>", svg or "", re.S | re.I):
        t = strip(m.group(1))
        if t:
            out.append(t)
    return out


def fig_text(f: dict) -> str:
    return " ".join(svg_texts(f.get("svg", ""))) + " " + strip(f.get("cap", "")) + " " + strip(f.get("teach", ""))


def img_text(im: dict) -> str:
    return " ".join(strip(a.get("l", "")) for a in (im.get("ann") or [])) + " " + strip(im.get("look", "")) + " " + strip(im.get("n", "")) + " " + strip(im.get("dx", ""))


def topic_text(ct: Content, tid: str, with_media=True) -> str:
    t = ct.topics.get(tid) or {}
    parts = [str(t.get("t", "")), str(t.get("sub", ""))]
    for b in t.get("body") or []:
        parts.append(block_text(b))
        if with_media and isinstance(b, list) and len(b) > 1:
            if b[0] == "f" and b[1] in ct.figs:
                parts.append(fig_text(ct.figs[b[1]]))
            elif b[0] == "img" and b[1] in ct.images:
                parts.append(img_text(ct.images[b[1]]))
            elif b[0] == "palace" and b[1] in ct.palace:
                parts.append(json.dumps(ct.palace[b[1]], ensure_ascii=False))
    g = ct.guides.get(tid) or {}
    if g:
        parts.append(json.dumps(g, ensure_ascii=False))
        m = g.get("media") or {}
        if with_media and m.get("fig") in ct.figs:
            parts.append(fig_text(ct.figs[m["fig"]]))
        if with_media and m.get("img") in ct.images:
            parts.append(img_text(ct.images[m["img"]]))
    for e in ct.glossary.get(tid) or []:
        parts.append(str(e.get("t", "")) + " " + str(e.get("d", "")))
    return strip(" ".join(parts))


def body_words(t: dict) -> int:
    return sum(wc(block_text(b)) for b in (t.get("body") or []))


def term_hit(low: str, term: str) -> bool:
    """A key term is found only at the start of a word (so 'plication' is not found inside 'complication', nor
    'training' inside 'straining'); a stem may run on ('koilocyt' finds 'koilocytes'). A term of 3 characters or
    fewer is an abbreviation and must also end the word, a plural allowed ('whi' is not found in 'which')."""
    tail = r"(?:e?s)?(?![a-z])" if len(term) <= 3 else ""
    return re.search(r"(?<![a-z0-9])(?<![0-9][.,])" + re.escape(term) + tail, low) is not None  # '1 cm' not inside '2.1 cm'


def terms_present(text: str, terms: list[list[str]]) -> list[str]:
    """Return the terms (as 'a|b' strings) NOT found in text; each term is a list of alternatives."""
    low = strip(text).lower()
    return ["|".join(alts) for alts in terms if not any(term_hit(low, a) for a in alts)]


# ----------------------------------------------------------------------------
# images
# ----------------------------------------------------------------------------
def jpeg_size(p: Path) -> tuple[int, int] | None:
    """Pixel size from a JPEG/PNG header without PIL."""
    try:
        data = p.read_bytes()
    except OSError:
        return None
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        w, h = struct.unpack(">II", data[16:24])
        return w, h
    if data[:2] != b"\xff\xd8":
        return None
    i = 2
    while i < len(data) - 9:
        if data[i] != 0xFF:
            i += 1
            continue
        marker = data[i + 1]
        if marker in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
            h, w = struct.unpack(">HH", data[i + 5:i + 9])
            return w, h
        if marker in (0xD8, 0x01) or 0xD0 <= marker <= 0xD7:
            i += 2
            continue
        seg = struct.unpack(">H", data[i + 2:i + 4])[0]
        i += 2 + seg
    return None


ALLOWED_LICENSES = re.compile(r"^(CC0|Public domain|PD[- ]\S*|CC BY(-SA)? \d\.\d|CC BY(-SA)?)$", re.I)
NC_LICENSE = re.compile(r"\bNC\b|non-?commercial", re.I)


def ann_area(a: dict) -> float:
    k = a.get("k")
    try:
        if k in ("r", "sh"):
            return a["w"] * a["h"] / 100
        if k == "e":
            return 3.14159 * a["rx"] * a["ry"] / 100
        if k == "c":
            return 3.14159 * a["r"] * a["r"] / 100
        if k == "poly":
            p = a["pts"]; s = 0.0
            for i in range(len(p)):
                x0, y0 = p[i]; x1, y1 = p[(i + 1) % len(p)]
                s += x0 * y1 - x1 * y0
            return abs(s) / 2 / 100
        if k == "inset":
            return a["iw"] * a["ih"] / 100
    except (KeyError, TypeError, IndexError):
        return -1.0
    return 0.0
