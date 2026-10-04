"""Fast track: merge every worker folder into fast/content, write path.json from the finished topics, build the page."""
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FAST = ROOT / "fast"
DST = FAST / "content"
KINDS = ("topics", "figs", "glossary", "guides", "questions", "rapid", "drills")

if DST.exists():
    shutil.rmtree(DST)
DST.mkdir(parents=True)
shutil.copy2(ROOT / "content" / "meta.json", DST / "meta.json")
shutil.copy2(ROOT / "content" / "concepts.json", DST / "concepts.json")
for k in KINDS:
    (DST / k).mkdir()

done = []
for ws in sorted((FAST / "ws").iterdir()):
    src = ws / "content"
    for k in KINDS:
        d = src / k
        if d.is_dir():
            for f in d.iterdir():
                if f.is_file():
                    shutil.copy2(f, DST / k / f.name)
    done += [p.stem for p in (src / "topics").glob("*.json")] if (src / "topics").is_dir() else []

meta = json.loads((DST / "meta.json").read_text(encoding="utf-8"))
have = set(done)
stages = [{"id": "p0", "kind": "diag", "mins": 10, "t": "Ten-minute triage",
           "d": "One quick recall item per topic before you study, so the plan knows where to start."}]
n = 0
for b in meta["blocks"]:
    ts = [t for t in b["topics"] if t in have]
    for i in range(0, len(ts), 4):
        chunk = ts[i:i + 4]
        if not chunk:
            continue
        n += 1
        titles = []
        for t in chunk:
            try:
                titles.append(json.loads((DST / "topics" / f"{t}.json").read_text(encoding="utf-8")).get("title", t))
            except Exception:
                titles.append(t)
        stages.append({"id": f"s{n}", "kind": "unit", "topics": chunk, "t": f"Stage {n}: {b['n']}",
                       "d": "; ".join(titles)[:160]})
stages.append({"id": "pf", "kind": "final", "mins": 30, "t": "Final check",
               "d": "A mixed set across every finished topic, weighted toward what you have missed."})
(DST / "path.json").write_text(json.dumps(stages, indent=1, ensure_ascii=False), encoding="utf-8")

sys.path.insert(0, str(ROOT))
import repro_common as rc  # noqa: E402
ct = rc.Content(FAST)
print("topics:", sorted(have, key=lambda t: (t[:2], int(t[2:]))))
print("content errors:", ct.errors[:5])
print("counts: questions", sum(len(v or []) for v in ct.questions.values()), "rapid", sum(len(v or []) for v in ct.rapid.values()),
      "figures", len(ct.figs), "drills", len(ct.drills), "stages", n)
r = subprocess.run([sys.executable, str(ROOT / "build.py"), "--root", str(FAST), "--engine", str(ROOT / "engine"),
                    "--out", str(FAST / "repro-endo-path.html")], capture_output=True, text=True, cwd=ROOT)
print(r.stdout[-1500:], r.stderr[-1500:])
