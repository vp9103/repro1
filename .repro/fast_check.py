"""Check one fast-track workspace with the gate's own structural checks (no second-model checks).

  python3 .repro/fast_check.py --ws <id> --topics rp19,rp20 [--task P5.8] [--build]

Overlays fast/ws/<id>/content on a copy of fast/content in a temporary root, then runs, for the listed topics:
topic structure + key-term coverage (if the topic file is in the workspace), questions, rapid, drills, figures.
--task names the gated task whose audit file (fast/ws/<id>/audit/<task>.md) holds NO-VISUAL rows (default: all
workspace audit files).
--build also builds the page and runs the gate's headless probe (JS errors, every view renders).
Prints 'ok' or the problems per check; exit 0 only if every check is ok.
"""
from __future__ import annotations

import shutil
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
import check_repro as cr  # noqa: E402
import repro_common as rc  # noqa: E402


def arg(name, default=None):
    a = sys.argv[1:]
    return a[a.index(name) + 1] if name in a and a.index(name) + 1 < len(a) else default


def main() -> int:
    ws = ROOT / "fast" / "ws" / arg("--ws", "")
    tids = [t for t in (arg("--topics", "") or "").split(",") if t]
    task = arg("--task", "-")
    if not ws.is_dir() or not tids:
        print(__doc__); return 2
    tmp = Path(tempfile.mkdtemp(prefix="fastcheck-"))
    try:
        shutil.copytree(ROOT / "fast" / "content", tmp / "content")
        if (ws / "content").is_dir():
            shutil.copytree(ws / "content", tmp / "content", dirs_exist_ok=True)
        for f in ("meta.json", "concepts.json"):
            shutil.copy2(ROOT / "content" / f, tmp / "content" / f)
        shutil.copytree(ROOT / "fast" / "repro-endo-assets", tmp / "repro-endo-assets") if (ROOT / "fast" / "repro-endo-assets").is_dir() else None
        if (ws / "repro-endo-assets").is_dir():
            shutil.copytree(ws / "repro-endo-assets", tmp / "repro-endo-assets", dirs_exist_ok=True)
        sys.path.insert(0, str(ROOT / ".repro"))
        from fast_merge import apply_placements  # noqa: E402
        pl_probs = apply_placements(tmp / "content", [ws])
        if (ws / "audit").is_dir():
            shutil.copytree(ws / "audit", tmp / "audit")
            if task == "-":  # no task named: every audit row in the workspace counts (NO-VISUAL etc.)
                (tmp / "audit" / "-.md").write_text("\n".join(f.read_text(encoding="utf-8") for f in sorted((ws / "audit").glob("*.md"))), encoding="utf-8")
        ct = rc.Content(tmp)
        results = [("content loads", ct.errors), ("image placements", pl_probs)]
        for t in tids:
            if (ws / "content" / "topics" / f"{t}.json").is_file():
                results.append((f"{t} topic structure", cr.topic_problems(ct, t)))
                results.append((f"{t} key terms taught", cr.coverage_terms_problems(ct, t)))
            if (ws / "content" / "questions" / f"{t}.json").is_file():
                results.append((f"{t} questions", cr.question_problems(ct, t, tmp, task)))
            if (ws / "content" / "rapid" / f"{t}.json").is_file():
                results.append((f"{t} rapid", cr.rapid_problems(ct, t, tmp, task)))
            if list((ws / "content" / "drills").glob(f"d_{t}_*.json")) if (ws / "content" / "drills").is_dir() else []:
                results.append((f"{t} drills", cr.drill_problems(ct, [t])))
            if [k for k in ct.images if k.startswith(t + "_") and (ws / "content" / "images" / f"{k}.json").is_file()]:
                results.append((f"{t} images (files, size, licence, labels, distractors, placement, overlay geometry)",
                                cr.image_problems(ct, tmp, [t], task, with_ann=True)))
                results.append((f"{t} overlays: Gemini design applied exactly", cr.overlay_problems(ct, tmp, cr.imgs_of(ct, [t]), task)))
            figs = [k for k in ct.figs if k.startswith(t + "_") and (ws / "content" / "figs" / f"{k}.json").is_file()]
            if figs:
                results.append((f"{t} figures", [p for k in figs for p in cr.fig_problems(k, ct.figs[k])]))
        if "--build" in sys.argv:
            rt = cr.runtime(tmp, force=True)
            results.append(("rendered: views, JS errors", (cr.rget(rt, "probe.views.failures", []) + cr.rget(rt, "probe.errors", [])
                                                         + cr.rget(rt, "probe.jsErrors", [])) if rt else ["build/probe unavailable"]))
            if rt:
                results.append(("rendered: figures legible, no overlap/clipping",
                                [f"{k}: median glyph < 9 px" for k in cr.rget(rt, "probe.figs.below9", []) if any(k.startswith(t + "_") for t in tids)]
                                + [f"{k}: overlap {v[:2]}" for k, v in cr.rget(rt, "probe.figs.overlaps", {}).items() if any(k.startswith(t + "_") for t in tids)]
                                + [f"{k}: clipped {v[:2]}" for k, v in cr.rget(rt, "probe.figs.clipped", {}).items() if any(k.startswith(t + "_") for t in tids)]))
        ok = True
        for name, probs in results:
            if probs:
                ok = False
                print(f"XX {name}: {len(probs)} problem(s): " + "; ".join(str(p) for p in probs[:8]) + (" ..." if len(probs) > 8 else ""))
            else:
                print(f"ok {name}")
        return 0 if ok else 1
    finally:
        shutil.rmtree(tmp, ignore_errors=True)


if __name__ == "__main__":
    sys.exit(main())
