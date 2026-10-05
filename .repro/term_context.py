"""Where does each TOPIC-MAP key term hit in its accountable topic? (P1.4 review support; read-only)

  python3 .repro/term_context.py [--rows OBJ1,OBJ2] [--topic rp9] [--scope <dir>]

For every term of the selected rows prints each body block of the accountable topic whose text contains the term
(gate rule: repro_common.term_hit), as  <block index> <row type>: ...snippet around the hit...  ; a term that hits only
outside the body (figure labels, glossary, guide) says so; a term that hits nowhere says ABSENT. The text is the
accepted topic in content/ when it exists, else the fast-track draft in fast/content/.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import repro_common as rc  # noqa: E402


def arg(name, default=None):
    a = sys.argv[1:]
    return a[a.index(name) + 1] if name in a and a.index(name) + 1 < len(a) else default


def block_text(b) -> str:
    def flat(x):
        if isinstance(x, str):
            return x
        if isinstance(x, list):
            return " ".join(flat(y) for y in x)
        if isinstance(x, dict):
            return " ".join(flat(v) for v in x.values())
        return ""
    t = flat(b[1:] if isinstance(b, list) else b)
    t = re.sub(r"\{\{[^|}]+\|([^}]+)\}\}", r"\1", t)
    return rc.strip(t).lower()


def main() -> int:
    rows = rc.topic_map_rows(Path(arg("--scope", str(ROOT / "scope"))))
    main_ct, fast_ct = rc.Content(ROOT), rc.Content(ROOT / "fast")
    want = set(arg("--rows").split(",")) if arg("--rows") else None
    only = arg("--topic")
    for oid, row in rows.items():
        tid = (row.get("topics") or ["-"])[0]
        if (want and oid not in want) or (only and tid != only):
            continue
        ct = main_ct if tid in main_ct.topics else fast_ct
        src = "accepted" if ct is main_ct else "draft"
        t = ct.topics.get(tid)
        print(f"\n## {oid} -> {tid} ({src}): terms {'; '.join('|'.join(a) for a in row.get('terms') or [])}")
        if not t:
            print("   (topic not written)")
            continue
        whole = rc.strip(rc.topic_text(ct, tid)).lower()
        body = t.get("body") or []
        for alts in row.get("terms") or []:
            for term in alts:
                hits = [(i, b[0] if isinstance(b, list) else "?", block_text(b)) for i, b in enumerate(body) if rc.term_hit(block_text(b), term)]
                if not hits:
                    print(f"   [{term}] " + ("only outside the body (figure/glossary/guide)" if rc.term_hit(whole, term) else "ABSENT"))
                    continue
                for i, kind, txt in hits[:4]:
                    k = txt.find(term.replace("-", " ").split()[0][:5])
                    k = max(0, k)
                    print(f"   [{term}] b{i} {kind}: ...{txt[max(0, k - 70):k + 90]}...")
                if len(hits) > 4:
                    print(f"   [{term}] (+{len(hits) - 4} more blocks)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
