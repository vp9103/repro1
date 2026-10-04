#!/usr/bin/env python
"""build.py -- assemble repro-endo-path.html from content/ + engine/ (gate-owned).

  python build.py                       main:      <project>/content + <project>/engine -> <project>/repro-endo-path.html
  python build.py --root .repro/ws/P3.2 a task workspace (its own content, engine, assets) -> <ws>/repro-endo-path.html
  python build.py --root fixtures/stub  the engine test bed
  python build.py --root fixtures/stub --engine .repro/ws/P2_3/engine --out .repro/runtime/stub.html
                                        the test bed with a workspace's engine (what the gate does for P2 tasks)

The page is ONE file, like the cardio path: engine/shell.html (head, CSS, header, main) with
placeholders, and one <script> = generated content globals + engine/engine.js + engine/selftest.js.
Images live next to the page in repro-endo-assets/ and are referenced relatively.

The content model is one object per file (REPRO-PLAN.md §6). The engine was extracted from
the cardio page and still reads the cardio globals (ENGINE-MAP §1g), so this script is the
ADAPTER: it emits every global the engine reads, filled from the clean content, and emits
empty side maps for the cardio-era transforms so they are no-ops. It never invents content:
a missing or broken reference is printed as a BUILD WARNING and the gate fails the owning task.

Implementers never edit this file (GATE sha). If the engine needs a different global, the
engine changes (an engine-phase task), or the orchestrator records a GATE-CHANGE.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import repro_common as rc

for _s in (sys.stdout, sys.stderr):  # Windows consoles default to cp1252; never crash on a non-Latin character
    try:
        _s.reconfigure(encoding="utf-8", errors="replace")
    except (AttributeError, ValueError):
        pass

PROJECT = Path(__file__).resolve().parent
PAGE_NAME = "repro-endo-path.html"
ASSET_DIR = "repro-endo-assets"
PLACEHOLDERS = ("@@TITLE@@", "@@A1@@", "@@A2@@", "@@A1_DARK@@", "@@A2_DARK@@", "@@SCRIPT@@")


def js(v) -> str:
    """JSON is valid JS; escape the two sequences that would end or confuse a <script>."""
    return json.dumps(v, ensure_ascii=False).replace("</", "<\\/").replace("\u2028", "\\u2028").replace("\u2029", "\\u2029")


def w_to_index(opts: list, w: dict | None, warn: list, where: str) -> dict:
    """Content keys why-notes by OPTION TEXT; the cardio engine's q.w is index-keyed before
    permuteOptions (which remaps it). Convert here, and warn about orphans."""
    out = {}
    w = w or {}
    for k, note in w.items():
        if k in opts:
            out[str(opts.index(k))] = note
        else:
            warn.append(f"{where}: why-note keyed by '{str(k)[:40]}' matches no option")
    return out


def build(root: Path, out: Path | None = None, quiet=False, engine: Path | None = None) -> tuple[Path, list[str]]:
    """engine: an explicit engine directory (the gate builds the stub fixture with a WORKSPACE's engine)."""
    root = Path(root).resolve()
    warn: list[str] = []
    ct = rc.Content(root)
    warn += [f"content: {e}" for e in ct.errors]
    eng = Path(engine) if engine else root / "engine"
    if not engine and not (eng / "shell.html").is_file():
        eng = PROJECT / "engine"          # a workspace that does not touch the engine uses main's
    shell_p, engine_p, selftest_p = eng / "shell.html", eng / "engine.js", eng / "selftest.js"
    for p in (shell_p, engine_p):
        if not p.is_file():
            raise SystemExit(f"missing {p}: the engine has not been extracted yet (task P2.1)")
    shell = shell_p.read_text(encoding="utf-8")
    for ph in PLACEHOLDERS:
        if ph not in shell:
            warn.append(f"engine/shell.html lacks placeholder {ph}")
    meta = dict(ct.meta or {})
    meta.setdefault("key", "reproendo")
    blocks_meta = meta.pop("blocks", []) or []

    # ---- BLOCKS (topics in meta.blocks order) ----
    blocks = []
    placed_imgs: dict[str, str] = {}
    for b in blocks_meta:
        tops = []
        for tid in b.get("topics") or []:
            t = ct.topics.get(tid)
            if not t:
                warn.append(f"meta.blocks lists topic {tid} but content/topics/{tid}.json does not exist")
                continue
            t = json.loads(json.dumps(t))
            for key in ("obj", "bp"):
                t.pop(key, None)
            t.setdefault("mins", 0)
            for x in t.get("body") or []:
                if isinstance(x, list) and len(x) > 1:
                    if x[0] == "f" and x[1] not in ct.figs:
                        warn.append(f"{tid}: body figure '{x[1]}' does not exist")
                    if x[0] == "img":
                        if x[1] not in ct.images:
                            warn.append(f"{tid}: body image '{x[1]}' does not exist")
                        elif x[1] in placed_imgs:
                            warn.append(f"image {x[1]} placed in two topics ({placed_imgs[x[1]]}, {tid}); place each image once")
                        else:
                            placed_imgs[x[1]] = tid
                    if x[0] == "palace" and x[1] not in ct.palace:
                        warn.append(f"{tid}: palace '{x[1]}' does not exist")
                    if x[0] == "vis" and x[1] != tid:
                        warn.append(f"{tid}: vis block names '{x[1]}' (must be its own topic id)")
            tops.append(t)
        blocks.append({"id": b.get("id"), "n": b.get("n"), "wk": b.get("wk", ""), "topics": tops})
    listed = {t for b in blocks_meta for t in (b.get("topics") or [])}
    for tid in ct.topics:
        if tid not in listed:
            warn.append(f"topic {tid} exists but no meta.blocks entry lists it (it will not render)")

    # ---- QS ----
    qs = []
    for tid, q in ct.all_questions():
        q2 = {k: q.get(k) for k in ("id", "d", "s", "l", "o", "a", "e", "et", "bl", "pt", "tags", "ef", "ei") if q.get(k) is not None}
        q2["c"] = tid
        q2["b"] = ct.block_of(tid)
        q2["w"] = w_to_index(q.get("o") or [], q.get("w"), warn, f"question {q.get('id')}")
        if q.get("ef") and q["ef"] not in ct.figs:
            warn.append(f"question {q.get('id')}: ef '{q['ef']}' does not exist")
        if q.get("ei") and q["ei"] not in ct.images:
            warn.append(f"question {q.get('id')}: ei '{q['ei']}' does not exist")
        qs.append(q2)

    # ---- RAPID (+ the side maps the cardio engine reads, derived from inline fields) ----
    rapid, rapid_media, rapid_point, q_tags, r_tags = [], {}, {}, {}, {}
    for tid, r in ct.all_rapid():
        r2 = {k: r.get(k) for k in ("id", "q", "o", "a", "x", "w", "pt", "tags", "media") if r.get(k) is not None}
        r2["c"] = tid
        r2["b"] = ct.block_of(tid)
        m = r.get("media")
        if m:
            kind, _, key = str(m).partition(":")
            if (kind == "fig" and key not in ct.figs) or (kind == "img" and key not in ct.images) or kind not in ("fig", "img"):
                warn.append(f"rapid {r.get('id')}: media '{m}' does not exist")
            else:
                rapid_media[r["q"]] = m
        if r.get("pt"):
            rapid_point[r["q"]] = r["pt"]
        if r.get("tags"):
            r_tags[len(rapid)] = r["tags"]
        rapid.append(r2)
    for tid, q in ct.all_questions():
        if q.get("tags"):
            q_tags[q["id"]] = q["tags"]

    # ---- DRILLS + DRILL_WHY ----
    drills, drill_why = [], {}
    for did, d in ct.drills.items():
        d2 = {k: d.get(k) for k in ("id", "c", "kind", "t", "a", "bb", "key", "q", "cols") if d.get(k) is not None}
        d2["id"] = d.get("id") or did
        d2["b"] = ct.block_of(d.get("c", ""))
        items, whys = [], {}
        for it in d.get("items") or []:
            if d.get("kind") == "order":
                text, why = (it[0], it[1] if len(it) > 1 else None) if isinstance(it, list) else (it, None)
                items.append(text)
            else:
                text, col = it[0], it[1]
                why = it[2] if len(it) > 2 else None
                row = [text, col] + ([it[3]] if len(it) > 3 and it[3] else [])
                items.append(row)
            if why:
                whys[text] = why
        d2["items"] = items
        drills.append(d2)
        drill_why[d2["id"]] = whys

    # ---- figures, images, glossary, palace, guides, path, concepts ----
    figs = {k: {kk: v for kk, v in (("cap", f.get("cap", "")), ("svg", f.get("svg", "")), ("teach", f.get("teach"))) if v} for k, f in ct.figs.items()}
    imgs = {}
    for k, im in ct.images.items():
        e = {kk: im.get(kk) for kk in ("n", "dx", "wrong", "ww", "look", "cred", "by", "lic", "licurl", "srcurl", "mod", "ann") if im.get(kk) is not None}
        e["url"] = f"{ASSET_DIR}/{im.get('file', '')}"
        if not (root / ASSET_DIR / im.get("file", "")).is_file() and not (PROJECT / ASSET_DIR / im.get("file", "")).is_file():
            warn.append(f"image {k}: file {ASSET_DIR}/{im.get('file')} missing")
        imgs[k] = e
    for k in ct.images:
        if k not in placed_imgs:
            warn.append(f"image {k} is not placed in any topic body (IMGTOPIC needs exactly one [\"img\", key] row)")
    gloss_calls, seen = [], {}
    for tid, g in ct.glossary.items():
        for e in g or []:
            k = e.get("k")
            if k in seen:
                warn.append(f"glossary key '{k}' defined twice ({seen[k]}, {tid})")
                continue
            seen[k] = tid
            gloss_calls.append(f"G({js(k)},{js(e.get('t', k))},{js(e.get('d', ''))},{js(e.get('alt') or [])});")
    palace = {k: {kk: p.get(kk) for kk in ("t", "story", "keys") if p.get(kk) is not None} for k, p in ct.palace.items()}
    vis, tmedia = {}, {}
    for tid, g in ct.guides.items():
        if g.get("vis"):
            vis[tid] = g["vis"]
        if g.get("media"):
            tmedia[tid] = g["media"]
    concepts = ct.concepts or {}

    meta_js = dict(meta)
    content_js = "\n".join([
        "/* ===== GENERATED by build.py from content/ -- do not edit here; edit content/*.json ===== */",
        f"const META = {js(meta_js)};",
        "const GLOSS = {};",
        "const G = (k,t,d,alt) => { GLOSS[k] = {k,t,d,alt:alt||[]}; };",
        "\n".join(gloss_calls),
        f"const PALACE = {js(palace)};",
        f"const IMGS = {js(imgs)};",
        f"const FIGS = {js(figs)};",
        f"const BLOCKS = {js(blocks)};",
        f"const QS = {js(qs)};",
        f"const RAPID = {js(rapid)};",
        f"const DRILLS = {js(drills)};",
        f"const PATH = {js(ct.path or [])};",
        f"const RAPID_MEDIA = {js(rapid_media)};",
        f"const RAPID_POINT = {js(rapid_point)};",
        f"const VISUAL_GUIDES = {js(vis)};",
        f"const TOPIC_MEDIA = {js(tmedia)};",
        f"const DRILL_WHY = {js(drill_why)};",
        f"const CONCEPT_TAGS = {js(concepts.get('tags') or [])};",
        f"const TAG_LABELS = {js(concepts.get('labels') or {})};",
        f"const CONCEPT_HOME = {js(concepts.get('home') or {})};",
        f"const DRILL_TAGS = {js({(d.get('id') or did): d['tags'] for did, d in ct.drills.items() if d.get('tags')})};",
        f"const Q_TAGS = {js(q_tags)};",
        f"const R_TAGS = {js({str(k): v for k, v in r_tags.items()})};",
        "/* cardio-era side maps: the clean content is already complete, so these are empty and their transforms are no-ops */",
        "const RAPID_X = {}, RAPID_OPTS = {}, RAPID_OPT_SWAP = {}, RAPID_W = {}, SEXP = {}, QDEPTH = {}, QDEPTH2 = {}, NB_WHY = {}, Q_DIFF = {}, Q_DIFF_R2 = {};",
        "const NBME_EXPANSION = [];",
        "/* ===== end of generated content ===== */",
    ])
    script = content_js + "\n" + engine_p.read_text(encoding="utf-8") + "\n" + (selftest_p.read_text(encoding="utf-8") if selftest_p.is_file() else "")
    pal = meta.get("palette") or {}
    page = (shell.replace("@@TITLE@@", str(meta.get("title", "The Repro-Endo Path")))
                 .replace("@@A1@@", pal.get("a1", "#8A2E62")).replace("@@A2@@", pal.get("a2", "#1F6F68"))
                 .replace("@@A1_DARK@@", pal.get("a1Dark", "#E39AC6")).replace("@@A2_DARK@@", pal.get("a2Dark", "#7FD0C5"))
                 .replace("@@SCRIPT@@", script))
    out = Path(out) if out else root / PAGE_NAME
    out.write_text(page, encoding="utf-8", newline="\n")
    if not quiet:
        print(f"built {out} ({out.stat().st_size:,} bytes): {len(ct.topics)} topics, {len(qs)} questions, {len(rapid)} rapid, {len(drills)} drills, "
              f"{len(figs)} figures, {len(imgs)} images, {len(gloss_calls)} glossary terms, {len(palace)} palace scenes")
        for w in warn[:60]:
            print("  BUILD WARNING: " + w)
        if len(warn) > 60:
            print(f"  ... and {len(warn) - 60} more build warnings")
    return out, warn


def main(argv):
    root = Path(argv[argv.index("--root") + 1]) if "--root" in argv else PROJECT
    if not root.is_absolute():
        root = (PROJECT / root).resolve()
    out = Path(argv[argv.index("--out") + 1]) if "--out" in argv else None
    eng = Path(argv[argv.index("--engine") + 1]).resolve() if "--engine" in argv else None
    _, warn = build(root, out, engine=eng)
    return 0 if not warn else 3


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
