"""Scan TOPIC-MAP key terms for weak anchors (P1.4 support tool; read-only).

  python3 .repro/term_scan.py [--scope <dir holding TOPIC-MAP.md>] [--rows OBJ1,OBJ2,...] [--from N --to M]

For every term of every selected row prints: how many topics' rendered text contain it (word-start match, the gate's
rule), whether the accountable (first) topic contains it, and whether it duplicates one of that topic's blueprint key
terms. Flags: GENERIC (in >= 8 topics), DUP-BP (same as a blueprint key of the topic), ABSENT (not in the accountable
topic's current fast-track text: content work, not by itself a reason to change the term).
"""
from __future__ import annotations

import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import repro_common as rc  # noqa: E402


def arg(name, default=None):
    a = sys.argv[1:]
    return a[a.index(name) + 1] if name in a and a.index(name) + 1 < len(a) else default


def main() -> int:
    rows = rc.topic_map_rows(Path(arg("--scope", str(ROOT / "scope"))))
    ct = rc.Content(ROOT / "fast")
    texts = {t: rc.strip(rc.topic_text(ct, t)).lower() for t in ct.topics}
    bp = rc.blueprint()
    bpkeys: dict[str, set[str]] = {}
    for b in bp.values():
        bpkeys.setdefault(b["topic"], set()).update(a for alts in b["terms"] for a in alts)
    ids = list(rows)
    if arg("--rows"):
        want = set(arg("--rows").split(","))
        ids = [i for i in ids if i in want]
    lo, hi = int(arg("--from", "0")), int(arg("--to", str(len(ids))))
    ids = ids[lo:hi]
    print("| objective | topic | term | topics hit | in topic | flags |")
    print("|---|---|---|---|---|---|")
    for oid in ids:
        row = rows[oid]
        tid = (row.get("topics") or ["-"])[0]
        for alts in row.get("terms") or []:
            for a in alts:
                n = sum(1 for t in texts.values() if rc.term_hit(t, a))
                here = tid in texts and rc.term_hit(texts[tid], a)
                flags = [f for f, c in (("GENERIC", n >= 8), ("DUP-BP", a in bpkeys.get(tid, set())),
                                        ("ABSENT", tid in texts and not here)) if c]
                print(f"| {oid} | {tid} | {a} | {n} | {'yes' if here else ('-' if tid not in texts else 'no')} | {' '.join(flags)} |")
    return 0


if __name__ == "__main__":
    sys.exit(main())
