"""Fast track: merge every worker folder into fast/content and build fast/repro-endo-path.html, safely.

  python3 .repro/fast_merge.py [--probe] [--prefer <dest>=<ws> ...] [--skip <ws> ...]

1. Collects fast/ws/*/content/<kind>/<file>. The same destination from two workspaces with different bytes is a
   CONFLICT: nothing is written and the script exits 1 (resolve it, or pass --prefer kind/name=WS once reviewed).
2. Stages a complete candidate in fast/.stage/ (content + page), validates it (content loads with no errors,
   build succeeds, optional --probe: the gate's headless probe has no JS errors and every view renders).
3. Only then promotes: the current fast/content and page move to fast/.prev/, the candidate takes their place.
   A failed run leaves the last working page untouched.
"""
from __future__ import annotations

import hashlib
import json
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
FAST = ROOT / "fast"
DST = FAST / "content"
STAGE = FAST / ".stage"
PREV = FAST / ".prev"
PAGE = "repro-endo-path.html"
ASSETS = "repro-endo-assets"
KINDS = ("topics", "figs", "glossary", "guides", "questions", "rapid", "drills", "palace", "images")  # + repro-endo-assets/ files and content/placements.json


def digest(p: Path) -> str:
    return hashlib.sha256(p.read_bytes()).hexdigest()


def collect(prefer: dict[str, str], skip: set[str] = frozenset()):
    srcs: dict[str, list[tuple[str, Path]]] = {}
    for ws in sorted(p for p in (FAST / "ws").iterdir() if p.is_dir() and p.name not in skip):
        for k in KINDS:
            d = ws / "content" / k
            if d.is_dir():
                for f in sorted(d.iterdir()):
                    if f.is_file():
                        srcs.setdefault(f"{k}/{f.name}", []).append((ws.name, f))
        a = ws / ASSETS
        if a.is_dir():
            for f in sorted(a.iterdir()):
                if f.is_file():
                    srcs.setdefault(f"{ASSETS}/{f.name}", []).append((ws.name, f))
    chosen, conflicts = {}, []
    for dest, lst in srcs.items():
        if len({digest(f) for _, f in lst}) == 1:
            chosen[dest] = lst[-1][1]
        elif dest in prefer and any(w == prefer[dest] for w, _ in lst):
            chosen[dest] = next(f for w, f in lst if w == prefer[dest])
        else:
            conflicts.append(f"{dest}: " + ", ".join(w for w, _ in lst))
    return chosen, conflicts


def apply_placements(content: Path, ws_dirs: list[Path]) -> list[str]:
    """Insert-only image placement: each workspace may list content/placements.json entries
    {"img": key, "after": [rowtype, text-prefix]}; ["img", key] goes right after the first body row of the image's
    own topic whose type matches and whose first argument starts with the prefix. Returns problems."""
    probs = []
    for ws in ws_dirs:
        pf = ws / "content" / "placements.json"
        if not pf.is_file():
            continue
        for pl in json.loads(pf.read_text(encoding="utf-8")):
            key, after = pl.get("img", ""), pl.get("after") or []
            tid = key.split("_")[0]
            tf = content / "topics" / f"{tid}.json"
            if not tf.is_file() or not (content / "images" / f"{key}.json").is_file() or len(after) != 2:
                probs.append(f"{ws.name}: placement {key}: topic, image or 'after' missing"); continue
            t = json.loads(tf.read_text(encoding="utf-8"))
            body = t.get("body") or []
            if any(isinstance(b, list) and b[:2] == ["img", key] for b in body):
                continue
            ix = next((i for i, b in enumerate(body) if isinstance(b, list) and len(b) > 1 and b[0] == after[0]
                       and isinstance(b[1], str) and b[1].startswith(after[1])), None)
            if ix is None:
                probs.append(f"{ws.name}: placement {key}: no row {after} in {tid}"); continue
            body.insert(ix + 1, ["img", key])
            t["body"] = body
            tf.write_text(json.dumps(t, indent=1, ensure_ascii=False), encoding="utf-8")
    return probs


def write_path(content: Path, have: set[str]):
    meta = json.loads((content / "meta.json").read_text(encoding="utf-8"))
    stages = [{"id": "p0", "kind": "diag", "mins": 10, "t": "Ten-minute triage",
               "d": "One quick recall item per topic before you study, so the plan knows where to start."}]
    n = 0
    for b in meta["blocks"]:
        ts = [t for t in b["topics"] if t in have]
        for i in range(0, len(ts), 4):
            chunk = ts[i:i + 4]
            n += 1
            titles = []
            for t in chunk:
                try:
                    titles.append(json.loads((content / "topics" / f"{t}.json").read_text(encoding="utf-8")).get("title", t))
                except (OSError, ValueError):
                    titles.append(t)
            stages.append({"id": f"s{n}", "kind": "unit", "topics": chunk, "t": f"Stage {n}: {b['n']}", "d": "; ".join(titles)[:160]})
    stages.append({"id": "pf", "kind": "final", "mins": 30, "t": "Final check",
                   "d": "A mixed set across every finished topic, weighted toward what you have missed."})
    (content / "path.json").write_text(json.dumps(stages, indent=1, ensure_ascii=False), encoding="utf-8")
    return n


def main(argv: list[str]) -> int:
    prefer = {}
    for i, a in enumerate(argv):
        if a == "--prefer" and i + 1 < len(argv) and "=" in argv[i + 1]:
            d, w = argv[i + 1].split("=", 1)
            prefer[d] = w
    skip = {argv[i + 1] for i, a in enumerate(argv) if a == "--skip" and i + 1 < len(argv)}  # workspaces still being written
    chosen, conflicts = collect(prefer, skip)
    if conflicts:
        print("CONFLICT (nothing written):\n  " + "\n  ".join(conflicts))
        return 1

    if STAGE.exists():
        shutil.rmtree(STAGE)
    sc = STAGE / "content"
    for k in KINDS:
        (sc / k).mkdir(parents=True, exist_ok=True)
    shutil.copy2(ROOT / "content" / "meta.json", sc / "meta.json")
    shutil.copy2(ROOT / "content" / "concepts.json", sc / "concepts.json")
    (STAGE / ASSETS).mkdir(parents=True, exist_ok=True)
    for dest, f in chosen.items():
        shutil.copy2(f, (STAGE / dest) if dest.startswith(ASSETS + "/") else (sc / dest))
    pprobs = apply_placements(sc, [p for p in sorted((FAST / "ws").iterdir()) if p.is_dir() and p.name not in skip])
    if pprobs:
        print("CANDIDATE INVALID (placements), page not replaced:\n  " + "\n  ".join(pprobs[:10]))
        return 1
    have = {p.stem for p in (sc / "topics").glob("*.json")}
    n = write_path(sc, have)

    sys.path.insert(0, str(ROOT))
    import repro_common as rc  # noqa: E402
    ct = rc.Content(STAGE)
    if ct.errors:
        print("CANDIDATE INVALID (content errors), page not replaced:", ct.errors[:8])
        return 1
    r = subprocess.run([sys.executable, str(ROOT / "build.py"), "--root", str(STAGE), "--engine", str(ROOT / "engine"),
                        "--out", str(STAGE / PAGE)], capture_output=True, text=True, cwd=ROOT)
    if r.returncode not in (0, 3) or not (STAGE / PAGE).is_file():  # 3 = built with BUILD WARNINGs
        print("CANDIDATE BUILD FAILED, page not replaced:\n", r.stdout[-1500:], r.stderr[-1500:])
        return 1
    warns = [ln.strip() for ln in r.stdout.splitlines() if "BUILD WARNING" in ln]
    if warns:
        print(f"{len(warns)} build warning(s) (page still built):\n  " + "\n  ".join(warns[:20]))
    if "--probe" in argv:
        import check_repro as cr  # noqa: E402
        rt = cr.runtime(STAGE, force=True, page=STAGE / PAGE)
        bad = (cr.rget(rt, "probe.views.failures", []) + cr.rget(rt, "probe.errors", []) + cr.rget(rt, "probe.jsErrors", [])) if rt else ["runtime unavailable"]
        if bad:
            print("CANDIDATE PROBE FAILED, page not replaced:", bad[:8])
            return 1

    if PREV.exists():
        shutil.rmtree(PREV)
    PREV.mkdir()
    if DST.exists():
        DST.rename(PREV / "content")
    if (FAST / PAGE).is_file():
        (FAST / PAGE).rename(PREV / PAGE)
    if (FAST / ASSETS).is_dir():
        (FAST / ASSETS).rename(PREV / ASSETS)
    (STAGE / ASSETS).rename(FAST / ASSETS)
    sc.rename(DST)
    (STAGE / PAGE).rename(FAST / PAGE)
    shutil.rmtree(STAGE, ignore_errors=True)

    ct = rc.Content(FAST)
    print("PROMOTED. topics:", len(ct.topics), sorted(ct.topics, key=lambda t: (t[:2], int(t[2:]))))
    print("counts: questions", sum(len(v or []) for v in ct.questions.values()), "rapid", sum(len(v or []) for v in ct.rapid.values()),
          "figures", len(ct.figs), "drills", len(ct.drills), "palace", len(ct.palace), "images", len(ct.images), "stages", n)
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
