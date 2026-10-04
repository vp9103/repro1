# Snapshot notes

Byte-exact snapshot of `C:\Users\varsh\repro-endo-path`, taken 2026-10-04 so a cloud session can continue the
Repro-Endo Path from it. Every file was written as a git blob with no filters (`core.autocrlf=false`), so its bytes,
line endings included, match the Windows folder. This file and `ref/cardio/` are the only additions.

## Cardio reference files (read-only copies)

REPRO-PLAN.md and the scripts read these from the cardio project, which is not part of this repo.
`check_repro.py` and `xmodel.py` hard-code
`CARDIO = C:\Users\varsh\Documents\Codex\2026-09-15\there-s-an-artifact-on-clot\outputs`; point that at `ref/cardio/`
to use the copies.

| Cardio file | Snapshot path | Read by |
|---|---|---|
| `cardio-path.html` | `ref/cardio/cardio-path.html` | check_repro.py (self-test probe on the cardio reference, P14.1 re-sync), xmodel.py (CSS/JS fallback), engine/extract_engine.py (source it extracts from) |
| `cardio-path-assets/` (45 files) | `ref/cardio/cardio-path-assets/` | xmodel.py imgverify calibration (`new_clubbing.jpg`); the images `cardio-path.html` loads |
| `PLAN-2.md` | `ref/cardio/PLAN-2.md` | REPRO-PLAN.md (engine task inputs, PLAN-2 contracts) |

## Not included

| Path | Files | Reason |
|---|---|---|
| `__pycache__/` | 4 | Python bytecode cache |
| `.repro/chrome-profile/` | 369 | headless Chrome profile the probes used: cookie and session stores, browser caches |

- `repro-endo-assets/` does not exist in the source folder, so there was nothing to include.
- Secret scan: every included file was scanned for API keys, tokens, auth headers, JWTs, private keys, Canvas and
  Microsoft session cookies and cookie-jar lines. Nothing was found. The Gemini key `xmodel.py` uses lives outside the
  project (`GEMINI_API_KEY` or the hybrid_swarm `.env`), and the Codex CLI keeps its own login; neither is in this repo.
- Absolute Windows paths in the scripts and in `.claude/settings.json` (the Stop hook runs
  `C:\Users\varsh\AppData\Local\Programs\Python\Python313\python.exe C:\Users\varsh\repro-endo-path\check_repro.py --gate`)
  are unchanged.
- `.repro-abort` is present: the user cancelled the run on 2026-10-03, and the Stop hook releases while that file exists.
