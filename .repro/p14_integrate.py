"""Integrate the P1.4 round-3 row proposals (.repro/P1.4-proposals/A.md, B.md) into the gated workspace.

  python3 .repro/p14_integrate.py [--dry] [--partial R5.md ...]

Each proposal line: | OBJ-ID | topics | terms | anchors | unanchored | note |
Validates: every TOPIC-MAP row proposed exactly once; topics exist; 2-4 terms, lowercase, no '|', each >= 5 chars or an
or a measurement such as '7 mm' (the gate's own P1.4 check judges the format); anchors non-empty. Then rewrites the rows of .repro/ws/P1_4/scope/TOPIC-MAP.md
(topics + terms; section kept) and appends a dated section with every UNANCHORED part and every topic change to
.repro/ws/P1_4/audit/P1.4.md. Writes nothing when any check fails.
"""
from __future__ import annotations

import re
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import check_repro as cr  # noqa: E402
import repro_common as rc  # noqa: E402

WS = ROOT / ".repro" / "ws" / "P1_4"
PROPS = ROOT / ".repro" / "P1.4-proposals"
LINE = re.compile(r"^\|\s*([A-Z][A-Z0-9-]+\.\d+)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|\s*$")


def main(argv: list[str]) -> int:
    rows = rc.topic_map_rows(WS / "scope")
    props, probs = {}, []
    only = [a for a in argv if a.endswith(".md")]  # --partial R5.md: integrate just these files' rows
    partial = "--partial" in argv
    for f in ([PROPS / o for o in only] if only else sorted(PROPS.glob("*.md"))):
        for ln in f.read_text(encoding="utf-8").splitlines():
            m = LINE.match(ln.strip())
            if not m or m.group(1) == "OBJ-ID":
                continue
            oid = m.group(1)
            if oid in props:
                probs.append(f"{oid}: proposed twice ({f.name})")
            props[oid] = {k: m.group(i).strip() for i, k in enumerate(("topics", "terms", "anchors", "unanchored", "note"), 2)}
    missing = [] if partial else [o for o in rows if o not in props]
    extra = [o for o in props if o not in rows]
    if missing:
        probs.append(f"{len(missing)} rows not proposed: {missing[:8]}")
    if extra:
        probs.append(f"{len(extra)} unknown rows proposed: {extra[:8]}")
    for oid, p in props.items():
        if oid not in rows:
            continue
        tids = [t.strip() for t in p["topics"].split(",") if t.strip()]
        if not tids or any(t not in cr.TOPICS for t in tids):
            probs.append(f"{oid}: bad topics '{p['topics']}'")
        terms = [t.strip() for t in p["terms"].split(";") if t.strip()]
        if not 2 <= len(terms) <= 4:
            probs.append(f"{oid}: {len(terms)} terms (2-4)")
        for t in terms:
            if t != t.lower():
                probs.append(f"{oid}: term '{t}' not lowercase")
        if not p["anchors"] or p["anchors"] == "-":
            probs.append(f"{oid}: anchors empty")
    if probs:
        print("NOT INTEGRATED:\n  " + "\n  ".join(probs[:40]))
        return 1
    if "--dry" in argv:
        print(f"OK (dry): {len(props)} rows")
        return 0

    tm = WS / "scope" / "TOPIC-MAP.md"
    out, changed, moved = [], 0, []
    for ln in tm.read_text(encoding="utf-8").splitlines():
        m = re.match(r"^\|\s*([A-Z][A-Z0-9-]+\.\d+)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|\s*$", ln)
        if m and m.group(1) in props:
            oid, p = m.group(1), props[m.group(1)]
            new = f"| {oid} | {p['topics']} | {m.group(3).strip()} | {p['terms']} |"
            if new != ln:
                changed += 1
            if p["topics"].replace(" ", "") != m.group(2).strip().replace(" ", ""):
                moved.append(f"| {oid} | TOPICS | {m.group(2).strip()} -> {p['topics']}: {p['note']} |")
            out.append(new)
        else:
            out.append(ln)
    # the reference list under '## Objective text' repeats each row's topics: keep it in step with the table
    ref = re.compile(r"^- `([A-Z][A-Z0-9-]+\.\d+)` → ([^ ]+) — (.*)$")
    table = {m.group(1): m.group(2).strip().replace(" ", "") for m in (re.match(r"^\|\s*([A-Z][A-Z0-9-]+\.\d+)\s*\|([^|]*)\|", ln) for ln in out) if m}
    out = [(lambda m: f"- `{m.group(1)}` → {table[m.group(1)]} — {m.group(3)}" if m and m.group(1) in table else ln)(ref.match(ln)) for ln in out]
    out = [ln.replace("Each term is matched as a lowercase substring of the first topic's rendered text",
                      "Each term is matched in the first topic's rendered text at the start of a word (gate rule repro_common.term_hit: stems run on, terms of <= 3 characters and numbers must end there, hyphens optional)") for ln in out]
    tm.write_text("\n".join(out) + "\n", encoding="utf-8")
    un = [f"| {o} | UNANCHORED | {p['unanchored']} |" for o, p in props.items() if p["unanchored"] not in ("", "-")]
    au = WS / "audit" / "P1.4.md"
    sec = [f"\n## {time.strftime('%Y-%m-%d')} round 3 (part -> anchor mapping for every row)\n",
           "Proposals: .repro/P1.4-proposals/A.md and B.md (one line per row: topics, terms, every named part -> its anchor, "
           "unanchored parts, note), integrated by .repro/p14_integrate.py. Matching is word-start since GATE-CHANGE sha:f2340e00.\n",
           f"Rows rewritten: {changed}; topic changes: {len(moved)}; UNANCHORED parts: {len(un)}.\n", "### UNANCHORED parts\n",
           "| objective | tag | part and reason |", "|---|---|---|", *un, "\n### Topic changes\n", "| objective | tag | change and reason |",
           "|---|---|---|", *moved, ""]
    au.write_text(au.read_text(encoding="utf-8") + "\n".join(sec) + "\n", encoding="utf-8")
    print(f"INTEGRATED: {changed} rows rewritten, {len(moved)} topic changes, {len(un)} UNANCHORED parts")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
