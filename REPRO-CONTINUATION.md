# REPRO continuation addendum (2026-10-04)

Supersedes the model assignments, repeated-reading rules and dispatch template of REPRO-PLAN.md §1, §3 and §4.
Every acceptance criterion of REPRO-PLAN.md (§7–§10, bands, coverage, licensing, evidence, feature parity) stands,
except the second-model reviews the user dropped (below). Recover after compaction from: this file, the ledger's
CURRENT POSITION + last notes, `.repro/PENDING.md`, the §10 section of the current task.

## Host and paths
- Cloud Linux session; repo github.com/vp9103/repro1, branch `claude/repro-study-tool-continuation-laj7wj`
  (from the byte-exact snapshot on `main`, ref/SNAPSHOT.md). Project root `/home/user/repro1`. `python3`.
- Cardio reference: read-only copy in `ref/cardio/`. Chrome: `/opt/pw-browsers/chromium-*/chrome-linux/chrome`.
  Browser checks: Node Playwright at a real viewport width.
- Gemini key: `~/.config/repro/gemini_key` (outside the repo; never commit it). Model `gemini-3.5-flash` (free tier;
  `gemini-3.1-pro-preview` has no quota on this key).
- Not reachable from here: Canvas (sign-in on the user's PC; P1.2 stays BLOCKED), the user's PC folder.
- The Stop hook in `.claude/settings.json` points at the Windows Python; it does not run here.

## User directions
- 2026-10-04: no GPT/Gemini review ("there doesnt need to be a gpt/gemini review"); Gemini only labels images for
  overlays. Gate: `SECOND_MODEL = False` (GATE-CHANGE sha:71dd2029). Medical accuracy rests on the authors and the
  fresh Opus verifier.
- 2026-10-04: model roles. Orchestrator/final checker: Opus 5.5 max. Workers: `repro-worker` = Sonnet 5.5 xhigh.
  Verifier: `repro-verifier` = Opus 5.5 max, fresh context. At most three subagents at once, verifier included.
  No worker spawns workers. No swarm, OmniRoute, hybrid_swarm or extra orchestration layers.
- Priority: reproductive wave for the Oct 9, 2026 exam, then endocrine, then integration/release. Ordering only.
- Approved downloads: openly licensed CC0/PD/CC BY/CC BY-SA images from Wikimedia Commons, CDC PHIL, NIH Open-i into
  `repro-endo-assets/`, each < 2 MB, with attribution. No new public publishing.

- 2026-10-05 (after seeing the published draft): "the depth of much of this material is excessive. i need eveything
  relevant to step 1, no more ... each article is way to long and the language could use work being more user
  friendly" and "dont make them so short that info is jagged and blunt. it should still read smoothly and logically in
  an easy to understand manner. also only remove info if it is not step one relevant". So every lesson is rewritten:
  keep every Step 1 fact (all STEP1-BLUEPRINT items), remove only non-Step-1 detail, smooth plain prose. Gate:
  `STEP1_ONLY = True` (length floors relaxed, no new ceiling; course-objective TOPIC-MAP terms advisory).
  The page is published privately at https://claude.ai/artifact/NQUiTXZwk9sKBk68SFdQ9T (capabilities db + user only:
  "just the progress saving"; tutor and backup download not wanted).

## Ownership
- One owner per file. The orchestrator integrates shared content/engine/metadata/ledger changes and runs every
  `--start/--close/--verify/--record`. Gated engine/integration tasks stay exclusive.
- Fast-track drafts: `fast/ws/<id>/content/<kind>/...` per worker; merged only by `.repro/fast_merge.py` (rejects
  conflicting duplicates, stages, validates, promotes on success). Drafts are labeled unreviewed until their gated
  task closes. Gated tasks import accepted fast components into `.repro/ws/<task>/` and close through the gate.

## Contract (every dispatch)
```
TASK / GOAL:
WORKSPACE / OWNED FILES:
EXISTING WORK TO PRESERVE:
REQUIRED INPUTS: exact paths and sections; mapped objectives and quality requirements
MISSING OUTPUTS / ACCEPTANCE CRITERIA:
CHECKS: commands, root paths, review types
DEPENDENCIES / APPROVED ACTIONS:
REPORT: READY | STUCK | CONTRACT-PROBLEM; changed paths; check results; unresolved issue IDs; evidence paths; next action
```
Reports stay under ~250 words; details go in files. After two failed repair rounds on the same issue, the
orchestrator diagnoses and changes the approach.

## Verification
- Phase verdicts: `--verify P<n>` sample + `.repro/P2-REGRESSION.md`-style checklists of every known failure, on the
  real rendered candidate, true 1280/400 px, both themes, keyboard. Orchestrator-authored substantive fixes get a
  fresh checker.

## Coverage (decision 2026-10-05)
- Key terms (TOPIC-MAP, blueprint) are a proxy: P1.V judges them by the plan's question (right topic, accurate,
  specific, not generic; unanchorable parts logged), not by whether a term could ever appear elsewhere.
- Teaching is judged directly: after P3.10 (and after P9.6) a fresh Claude reviewer reads every accepted lesson
  against each accountable objective and blueprint item -> audit/COVERAGE-wave<n>.md rows
  | id | TAUGHT / PARTIAL / MISSING | block or heading | evidence |; PARTIAL/MISSING reopen the owning topic task;
  the phase verifier samples the rows.
