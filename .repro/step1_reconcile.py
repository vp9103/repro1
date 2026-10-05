"""Import the Step 1 rewrites (user direction 2026-10-05) from the fast page into the gated P3 tasks.

  python3 .repro/step1_reconcile.py P3.1 [P3.2 ...]

For each task: --reopen (reason: the user's Step 1 direction), --start, copy fast/content/topics/<tid>.json (img rows
stripped: images belong to P4) and fast/content/glossary/<tid>.json into the workspace, --status, --close.
Stops at the first task that does not close.
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
GROUPS = {"P3.1": ["rp1", "rp2", "rp3"], "P3.2": ["rp4", "rp5", "rp6"], "P3.3": ["rp7", "rp8", "rp9"],
          "P3.4": ["rp10", "rp11", "rp29"], "P3.5": ["rp12", "rp13", "rp14"], "P3.6": ["rp15", "rp23", "rp24"],
          "P3.7": ["rp16", "rp17", "rp18"], "P3.8": ["rp19", "rp20", "rp21", "rp22"], "P3.9": ["rp25", "rp30", "rp26"],
          "P3.10": ["rp27", "rp28"]}
import os
REASON = os.environ.get("RECONCILE_REASON") or ("user direction 2026-10-05: lessons rewritten to Step 1 only in smooth plain prose (fast workspaces S01-S06, "
          "orchestrator fact sweep); import the rewrite (img rows stay with P4)")


def run(*a):
    r = subprocess.run([sys.executable, str(ROOT / "check_repro.py"), *a], capture_output=True, text=True, cwd=ROOT)
    out = (r.stdout + r.stderr).strip().splitlines()
    print(f"$ check_repro.py {' '.join(a[:2])}\n  " + "\n  ".join(out[-6:]), flush=True)
    return r.returncode, "\n".join(out)


for task in sys.argv[1:]:
    code, out = run("--reopen", task, REASON)
    code, out = run("--start", task)
    ws = ROOT / ".repro" / "ws" / task.replace(".", "_")
    for tid in GROUPS[task]:
        t = json.loads((ROOT / "fast/content/topics" / f"{tid}.json").read_text(encoding="utf-8"))
        t["body"] = [b for b in t["body"] if not (isinstance(b, list) and b and b[0] == "img")]
        (ws / "content/topics" / f"{tid}.json").write_text(json.dumps(t, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
        g = ROOT / "fast/content/glossary" / f"{tid}.json"
        if g.is_file():
            shutil.copy2(g, ws / "content/glossary" / f"{tid}.json")
        # figures repaired after the rewrite (repair rounds R1-R3): the topic's own accepted figures, json and svg
        for f in sorted((ROOT / "content/figs").glob(f"{tid}_*")):
            src = ROOT / "fast/content/figs" / f.name
            if src.is_file() and src.read_bytes() != f.read_bytes():
                shutil.copy2(src, ws / "content/figs" / f.name)
    code, out = run("--status", task, "--ws", task)
    if "XX" in out:
        print(f"STOP: {task} has failing checks"); sys.exit(1)
    code, out = run("--close", task)
    if f"CLOSED {task}" not in out:
        print(f"STOP: {task} did not close"); sys.exit(1)
print("ALL CLOSED")
