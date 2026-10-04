# REPRO-PLAN — The Repro-Endo Path

A complete, NBME-style USMLE Step 1 study path for the **reproductive and endocrine systems**, built the same way as
The Cardio Path, with every feature the cardio page has (including every PLAN-2 improvement), at the same quality bar
or higher. Sources: the user's Canvas courses (BSE 638 Human Development & Reproductive Health, weeks 1–8; BSE 612
Foundations M2, week 2 endocrinology) and the Step 1 blueprint in `scope/STEP1-BLUEPRINT.md`.

Written 2026-09-26 by the planning session. Enforced by `check_repro.py` (the gate). Progress lives only in
`REPRO-LEDGER.md`. Project folder: `C:\Users\varsh\repro-endo-path`. The cardio project
(`C:\Users\varsh\Documents\Codex\2026-09-15\there-s-an-artifact-on-clot\outputs`) is **read-only** reference.

**Contents:** §0 The one rule · §1 Session start · §2 Guardrails · §3 Dispatch templates · §4 Orchestrator loop ·
§5 Workspaces, records, evidence · §6 Architecture · §7 Quality bar · §8 Feature parity · §9 Topics ·
§10 Phases and tasks · §11 Timeline · §12 What only the user can do · §13 Environment notes ·
Appendix A (tooling verified) · Appendix B (decisions)

---

## §0 The one rule

**Nothing is done because someone says it is done.** A task is DONE when `python check_repro.py --close <task>`
re-runs its checks, merges its files and writes the ledger row. A phase is verified when a fresh verifier's token
and per-item verdicts are recorded with `--record P<n>.V`. The plan is finished when the Stop hook lets the session
end. Summaries, subagent reports and anyone's memory are not evidence; the checks are. When this document and the
gate disagree, the gate wins until the orchestrator records a GATE-CHANGE (§5.6).

---

## §1 Session start (every session, and again after every context compaction)

1. The working directory is `C:\Users\varsh\repro-endo-path`. Never `cd` into the cardio folder (its own Stop hook
   would start judging this session against PLAN-2).
2. Read §0–§5 of this file in full, then the part of §10 for the current phase. Do not work from memory of it.
3. Run `python check_repro.py --next`. Fix every `LEDGER PROBLEMS` line before anything else.
4. Read `CURRENT POSITION` and the last ten `Notes` lines of `REPRO-LEDGER.md`.
5. For each IN_PROGRESS task: its workspace is kept. If its subagent is still running, wait for it; if not, run
   `python check_repro.py --status <task> --ws <task>` and continue the loop (§4) at "a report arrived".
6. Rewrite the one `CURRENT POSITION` line (what is in flight, what is next).

---

## §2 Guardrails: every way subagents fail, and the mechanism that stops it

The user asked for guardrails that do not depend on anyone remembering them. Each row below is enforced by code or
by a file that is loaded every time, not by a sentence someone has to recall.

| Failure | What stops it (mechanically) | Where it lives |
|---|---|---|
| **Drift** — editing things outside the task | Every task works in its own copy of the project (`.repro/ws/<task>/`). `--close` merges back **only** the files the task owns (globs in the gate); everything else it touched is listed as drift and thrown away. Main is hash-locked, so an edit made outside a task shows up as `MAIN CHANGED OUTSIDE --close`. | `cmd_start`, `cmd_close`, `validate` (lock) |
| **Tunneling** — hours polishing one sub-part | A task's checks cover every part of it (every topic needs every row kind, every objective's key terms, every item's fields), so a half-done task cannot close. Topic tasks start with an objective→heading outline. Agent file rule 6: three fix rounds per failing check, then report STUCK. | topic/question/rapid checks; `.claude/agents/repro-worker.md` |
| **Over-engineering** | Only owned files merge; no task owns tooling (the gate files are hashed — `GATE sha`); band maxima cap words, rows, options, SVG size; the agent file forbids extra files, refactors and features. | `--close`, `GATE sha`, bands (§7.11) |
| **Not doing everything** | Every Canvas objective (326 + BiCEP) and every blueprint item (523 + gap additions) is accountable to one topic: its key terms must appear in that topic's rendered text **and** a second model must judge it "taught". Every topic must have all six mastery channels. The parity list (70 ids, parsed from the cardio engine map) needs a PASS click-through row each. | `coverage_terms_problems`, `xm_coverage`, `integration_problems`, `clickthrough` |
| **Hallucinated accuracy** | A different model family judges every fact: GPT (Codex CLI) by default, Gemini as backup and adjudicator. Topics, glossary, guides, figure captions and labels, questions (incl. "is the key the single best answer"), rapid items, drills, images and memory scenes are fact-checked. A provider's verdicts count only after it passes a planted-error calibration. Records are bound to the hash of exactly the text judged. Disputes go to the **other** model, never back to Claude, and every upheld rebuttal is added to the phase verifier's sample. | `xmodel.py`, `xm_fact`, calibration, `adjudicated`, `seeded_sample` |
| **Wrong pictures** | A second model looks at every photograph and must say it shows the claimed diagnosis; figures are rendered to PNG and reviewed as pictures (overall ≥ 7/10, legibility ≥ 3/5, "teaches its caption"); overlays are designed by one model and reviewed from the rendered PNG by the other. | `xm_imgs`, `xm_figs`, `overlay_problems` |
| **Quality below the bar** | Bands taken from the cardio page's measured minimums or PLAN-2's bar, whichever is higher; throwaway distractors fail; the rendered page is probed at 1280 and 400 px; a fresh, adversarial verifier judges a **gate-seeded** sample every phase (it cannot pick easy items). | `B` bands, `xm_grade`, `probe_repro.js`, `--verify` |
| **Claiming done / faking rows** | Rows are written only by `--close` and `--record`. A hand-written DONE, a guessed verifier token, a BLOCKED without reasons, a DROPPED row, parallel overload, an un-started IN_PROGRESS, a forged close record, a FAILed verification marked DONE, an illegal BLOCKED and gate tampering are all caught (`--demo` proves all 12). | `validate`, `--demo` |
| **Skipping ahead** | Phases run in order; `--start` refuses a task that is not startable; at most 3 tasks in parallel, and engine/document/integration tasks run alone. | `next_task`, `validate` |
| **Breaking earlier work** | After every merge, the checks of **every** DONE task are re-run on main; any failure rolls the merge back. | `cmd_close` regression pass |
| **Stale reviews** | A second-model record is stored under the hash of what it judged; change one word and that record no longer applies, so the owning task's check fails until it is re-reviewed. | `xm_record(key, hash)` |
| **Blocking to avoid work** | BLOCKED needs `TRIED:`, `NARROWER:`, `NEEDS-USER:` and is allowed only for tasks that genuinely need the user or an outside service. | `BLOCKABLE`, `cmd_block` |
| **Stopping early** | The Stop hook refuses to end the orchestrator's turn while work is open. It lets go only on `.repro-complete`, `.repro-abort`, when everything is DONE or legitimately BLOCKED, or after 8 refusals in a row (and says why). | `cmd_gate`, `.claude/settings.json` |
| **Forgetting after compaction** | §1 is re-read; everything that matters is in files (ledger, audit files, records, this plan). | §1 |
| **Tampering with the checks** | The GATE sha (check_repro.py, repro_common.py, xmodel.py, build.py, probe_repro.js, serve.py, fixtures/, docs/) is recorded at baseline; any change without a `GATE-CHANGE` note is a ledger problem. | `validate` |
| **Rubber-stamp verification** | The gate issues the token and the sample; the verifier must write `.repro/verify/P<n>-report.md` with the token and a reasoned row (≥ 30 chars) per sampled id; any FAIL forces `--reopen` of the owning task and a new verification. | `cmd_verify`, `cmd_record` |

---

## §3 Dispatch templates

Every subagent is **`repro-worker`** (implementer/operator) or **`repro-verifier`**. Both are defined in
`.claude/agents/` with `model: opus` and `effort: xhigh` — Opus 5.5 at extra-high effort, as the user asked. Never
dispatch plan work to another agent type. Always pass the template **in full**; the subagent knows nothing else.
Fill every `<...>`; copy Goal/How from §10 verbatim.

### §3.1 Implementer (content and engine tasks)

```
Agent(subagent_type="repro-worker", description="<task id> <3-5 words>", prompt="""
TASK: <task id> - <title from the ledger row>
WORKSPACE: C:\Users\varsh\repro-endo-path\.repro\ws\<task id with . replaced by _>\
  A full copy of the project. Work ONLY here. Build/preview:  python build.py --root .repro/ws/<ws>
OWNS (only these are merged back; anything else you change is discarded as drift):
<paste the OWNS lines that --start printed, and any 'rule' lines>
GOAL: <§10 Goal for this task, verbatim>
HOW: <§10 How for this task type, verbatim>
READ FIRST: REPRO-PLAN.md §7 (quality bar) and the §10 text for this task; docs/CONTENT-SCHEMA.md sections <list>;
  the worked examples in fixtures/stub/content/; <task-specific inputs: TOPIC-MAP rows, blueprint sections,
  scope/lectures files for the sessions that map to these topics>.
DONE WHEN: python check_repro.py --status <task> --ws <task> prints only 'ok' lines. You run it yourself.
SECOND MODEL (run from the project root, always with --root .repro/ws/<ws>): <the xmodel commands for this task, §10>.
  A 'wrong' / 'missing' / throwaway / blocking verdict is fixed in the content. If you are sure the reviewer is
  wrong, dispute it ONCE with python xmodel.py adjudicate <cmd> <key> [--item ...] --rebuttal "<why, citing
  scope/lectures/<file> or a standard source>" and log it in audit/<task>.md as | <key> | ADJUDICATED | summary |.
  Never edit anything under .repro/xm.
TIME BOX: three fix rounds per failing check; then stop and report STUCK with the failing lines.
REPORT: reply with this JSON only:
{"task": "<id>", "status": "READY | STUCK | CONTRACT-PROBLEM", "files": ["<every file you changed>"],
 "checks": "<the last --status output, ok/XX lines>", "xmodel": "<reviews run, flags, how each was resolved>",
 "notes": "<anything outside this task you noticed; do not act on it>"}
""")
```

### §3.2 Verifier (one per phase, fresh context, after `--verify`)

```
Agent(subagent_type="repro-verifier", description="verify P<n>", prompt="""
PHASE: P<n> - <phase name>.   TOKEN: <token printed by --verify>
SAMPLED IDS (judge every one; you may not swap them): <ids printed by --verify>
WHAT EACH ID MUST MEET: <for each id: the owning task and its §10 Goal; for 'adjudicated:' ids, the record key:
  read the flag, the rebuttal and the ruling in .repro/xm/adjudicate/ and decide whether the rebuttal is right>
HOW TO SEE IT: content files under C:\Users\varsh\repro-endo-path\content\; the page: run `python serve.py`
  (port 8744) and open http://127.0.0.1:8744/repro-endo-path.html in the browser pane at 1280 px and at 400 px
  wide, light and dark theme; click the real controls. Engine phase: `python build.py --root fixtures/stub` and
  `python serve.py --root fixtures/stub`.
QUALITY BAR: REPRO-PLAN.md §7 (and §8 for features).
WRITE: .repro/verify/P<n>-report.md exactly as your agent file says (token line, one row per id, clicked line).
REPORT: JSON only: {"phase": "P<n>", "token": "<token>", "verdicts": {"<id>": "PASS | FAIL: <reason>"},
 "clicked": "<one line: the real UI actions you took>"}
""")
```

Then: all PASS → `python check_repro.py --record P<n>.V "verifier-run: <token> sampled: <id>=PASS <id>=PASS ... clicked: <line>"`.
Any FAIL → `python check_repro.py --reopen <owning task> "<the verifier's reason>"`, redo that task (§4 step 2),
then `--verify P<n>` again (new token, new sample).

### §3.3 Operator (browser, Canvas, downloads, image sourcing, click-throughs)

Same as §3.1, plus these lines (the orchestrator may do operator work itself when a subagent lacks browser tools;
the workspace and `--close` discipline still apply):

```
BROWSER: Canvas work uses Claude in Chrome (the user's logged-in Chrome) through the Canvas REST API
  (https://canvas.illinois.edu/api/v1/...), read-only. Never submit forms, never start or resume a quiz attempt,
  never message anyone. Other pages use the built-in browser pane.
APPROVED BY THE USER IN CHAT (quote the user's words and date here, or write NONE): <...>
  Downloads happen only if approved above. File type, source and size are logged in audit/<task>.md.
NEVER: type passwords or keys; accept consent banners beyond the essential ones; copy roster, grade, group, Zoom or
  personal information into the project.
```

---

## §4 The orchestrator loop

The orchestrator is the main session. Its context is the plan's working memory, so it **never writes content
itself**; it starts tasks, dispatches, closes, verifies and keeps the ledger honest.

1. `python check_repro.py --next`. Fix any ledger problem first.
2. For each startable task (up to 3 at once when they are parallel content tasks; engine, document and integration
   tasks run alone): `python check_repro.py --start <task>`, then dispatch §3.1 (or §3.3) in the background.
   Orchestrator-kind tasks (P0) are done directly, then `--record`.
3. When a report arrives:
   - `READY` → `python check_repro.py --close <task>`.
     - `CLOSED` → go to 1.
     - checks fail in the workspace → send the failing lines back to **the same** subagent (SendMessage), up to 3
       rounds. Still failing → re-dispatch a **narrower** prompt in the same workspace (one topic, one item type).
     - `DRIFT` → read the list. If the task needed a drifted file, its scope is wrong: stop and fix the dispatch. If
       not, `--close <task> --ack-drift`.
     - `REGRESSION` → the task broke DONE work (usually a stale second-model record it caused). Send the lines back.
   - `STUCK` → read why; re-dispatch narrower, or split the work across two dispatches in the same workspace.
   - `CONTRACT-PROBLEM` → check the claim yourself. If the check is wrong, fix it by GATE-CHANGE (§5.6). If the
     check is right, say so to the subagent and continue.
4. Phase end: `python check_repro.py --verify P<n>` → dispatch §3.2 → `--record P<n>.V ...` (or `--reopen` on FAIL).
5. User tasks (downloads, publishing, licence decisions): ask the user in chat with exact details; while waiting,
   `python check_repro.py --block <task> "TRIED: ... NARROWER: ... NEEDS-USER: ..."` and carry on with other work.
   BLOCKED does not hold later phases. When the user answers: a user task is `--record`ed; any other blocked task is
   resumed with `--start <task>` (allowed even while later phases run; if its phase was already verified, the
   verification is reset and must be run again once the task closes).
6. After every close, rewrite `CURRENT POSITION` in the ledger (one line).
7. Never end a turn while `--next` shows startable work. The Stop hook enforces this; if it blocks you, do what it
   says. Only the user may create `.repro-abort`.

---

## §5 Workspaces, records, evidence

### §5.1 Workspaces and ownership
`--start <task>` copies the tracked folders (`content/ engine/ scope/ audit/ repro-endo-assets/`) to
`.repro/ws/<task>/`, snapshots them, and prints the task's OWNS globs. The subagent works only there. `--close`:
(1) lists changed files; (2) drift (changed, not owned) is shown and discarded; (3) conflict (an owned file changed on
main since `--start`) stops the close; (4) scope rules are applied — `insert-only:img` (a topic may only gain
`["img", key]` rows), `insert-only:palace`, `field-only:ann` (an image may only change its overlay), `field-only:home,labels`,
`reason-per-file` (each changed file needs `| path | CHANGED | reason |` in the task's audit file); (5) the task's
checks run in the workspace; (6) owned files are copied to main (with a backup in `.repro/backups/`); (7) the task's
checks run again on main, then every DONE task's checks (regression pass); any failure restores main; (8) the page is
rebuilt, main is re-locked, and the DONE row is written with `sha: tree: closed: files: drift-discarded: checks:`.
`--start <task>` on an IN_PROGRESS task keeps its workspace; `--start <task> --fresh` throws it away.

### §5.2 The lock
`.repro/lock.json` holds the hash of every tracked file after the last close. If main differs, `--next` and the Stop
hook report it. Restore from `.repro/backups/<task>-<time>/` or redo the change as a task.

### §5.3 Second-model records
`python xmodel.py <cmd> ... --root <ws>` writes `.repro/xm/<cmd>/<key>.json` (latest) and `<key>@<hash>.json` (for
exactly that content), with provider, model, verdicts and a transcript that must end in `turn.completed`. The gate
reads only the hash-addressed copy, so a workspace re-review never disturbs main's records. Calibration records live
in `.repro/xm/calibration/`; a provider's verdicts count only for the checks it passed. Adjudication:
`python xmodel.py adjudicate <cmd> <key> [--item "<objective id | option text>"] --rebuttal "..."` asks the OTHER
provider; `rebuttal-upheld` clears exactly that item for exactly that content. Every upheld rebuttal is added to the
phase verifier's sample. Nobody edits anything under `.repro/xm/`.

| xmodel command | Judges | Blocking verdicts |
|---|---|---|
| `factcheck <topic|gloss|guide|fig|img|q|rapid|drill|palace> <tids>` | factual accuracy; for questions also "is the key the single best answer" | `wrong` |
| `grade <q|rapid|spot|pretest> <tids>` | each distractor: plausible / weak / throwaway | `throwaway`, `unknown` |
| `coverage <tids>` | each accountable objective and blueprint item: taught / partial / missing | `missing`, `unknown`; `partial` needs a `PARTIAL-OK` row |
| `figreview <tids>` | the rendered PNG of each figure | any `error`/`misleading`, overall < 7, legibility < 3, not teaching its caption |
| `imgverify <tids>` | the photograph itself vs the claimed diagnosis and findings | anything but `yes` |
| `overlay <img>` / `overlay-review <img>` / `bakeoff <imgs>` | overlay design; review of the rendered overlay by the other model | a callout covering its finding or misplaced; overall < 7 |
| `gaps <tids>` | Step 1 concepts missing from the blueprint (P1.3) | every gap needs ADDED or REJECTED |

### §5.4 Audit files
Each task writes `audit/<task>.md`: a short account of what it did, plus the rows the checks read. Row format is
always `| key | TAG | text |`:

| Tag | Meaning | Needed when |
|---|---|---|
| `NO-VISUAL` | why this question/rapid item has no figure or image (≥ 20 chars) | an item without a visual |
| `NO-IMAGE` | why this topic has no photograph (≥ 20 chars) | a topic without an image |
| `KEEP-SMALL` | why an image under 800 px is kept (≥ 20 chars) | a small image |
| `PARTIAL-OK` | why a "partial" coverage verdict is acceptable (≥ 20 chars) | coverage says partial |
| `ADJUDICATED` | a dispute the other model ruled on | after `xmodel.py adjudicate` |
| `ADJUSTED` | `<imgkey>#<i>`: a callout changed after review (≤ 2 per image) | overlay tasks |
| `CHANGED` | `<path>`: why an integration/accessibility task changed that file | P14.2, P14.3 |
| `SKIP` | a lecture file not extracted, with reason | P1.2 (`scope/LECTURE-FILES.md`) |

### §5.5 Verification
`--verify P<n>` refuses unless every task of the phase is DONE and passes now. It prints a token (bound to the
current tree) and a seeded sample. The verifier's report file and verdicts are required by `--record`. The
`verified` column of each task in the phase is stamped `V:<date>`.

### §5.6 Changing the gate (GATE-CHANGE)
Only the orchestrator, only to fix a check that is wrong (never to lower a bar so something passes). Edit the gate
file, run `python check_repro.py --selftest` (all demo cases must still be caught), then add a Notes line
`GATE-CHANGE sha:<python check_repro.py --selfcheck> reason: <what was wrong>`. Tell the next verifier.

---

## §6 Architecture

```
C:\Users\varsh\repro-endo-path\
  REPRO-PLAN.md  REPRO-LEDGER.md            this plan; the ledger (the gate reads it)
  check_repro.py                            the gate: tasks, checks, workspaces, verification, Stop hook
  repro_common.py                           shared loading/hashing/text helpers (gate-owned)
  xmodel.py                                 second models: GPT (Codex CLI) and Gemini (gate-owned)
  build.py                                  content + engine -> repro-endo-path.html (gate-owned)
  probe_repro.js                            runtime probe run in headless Chrome at 1280 and 400 px (gate-owned)
  serve.py                                  local server, http://127.0.0.1:8744/ (gate-owned)
  docs/ENGINE-MAP.md  docs/CONTENT-SCHEMA.md the cardio engine and content, mapped line by line (gate-owned)
  fixtures/stub  fixtures/stub-partial      the engine test bed (gate-owned; also the worked content examples)
  scope/   CANVAS-SCOPE.md STEP1-BLUEPRINT.md TOPIC-MAP.md YIELD.md QUIZ-SIGNALS.md BP-GAPS.md LECTURE-FILES.md lectures/*.md
  content/ meta.json path.json concepts.json topics/ questions/ rapid/ glossary/ guides/ drills/ palace/ figs/ images/
  engine/  extract_engine.py base/ resync/ shell.html engine.js selftest.js ENGINE-GLOBALS.md
  audit/   <task>.md  CLICKTHROUGH-W1.md  CLICKTHROUGH-FINAL.md  ENGINE-RESYNC.md
  repro-endo-assets/                        images (served next to the page)
  repro-endo-path.html                      the built page (rebuilt at every close)
  lecture-src/                              downloaded Canvas files (NOT tracked, NOT copied into workspaces)
  .repro/                                   state: ws/ snap/ backups/ xm/ verify/ runtime/ lock.json (never edit by hand)
  .claude/                                  agents (repro-worker, repro-verifier) and the Stop hook
```

**Content model.** One object per file, so parallel tasks never touch the same file. The formats are the cardio
formats (docs/CONTENT-SCHEMA.md §1) with these deltas: (1) everything about an item is inline — a rapid item carries
its own `w`, `pt`, `media`, `tags`; a question its `w` (keyed by option **text**), `et`, `bl`, `pt`, `tags`, `d`; an
image its `wrong` (4), `ww`, `ann`, `findings`, `modality` and licence fields; a drill its items' whys (`[text, col,
why, img?]`; order drills `[step, why]`) and its `tags`. (2) Every item carries `obj` and/or `bp` ids (what it
teaches). (3) Topics carry `yld` (Step 1 yield) **and** `exam` (course-final likelihood) as two different axes.
(4) `sexp` rows sit in the body. (5) Figures are `figs/<key>.svg` + `figs/<key>.json` (`cap`, optional `teach`).
(6) Keys start with the topic id: `rp13_hsil_cyto`, `d_rp13_...`, `pal_rp13_...`, `rp13q07`, `rp13r11`, `sx_rp13_...`.
`fixtures/stub/content/` shows every file type filled in correctly; copy its shapes.

**Build.** `python build.py [--root <dir>] [--engine <dir>] [--out <file>]` writes one self-contained HTML page (the
engine's shell + one script: generated content globals + `engine/engine.js` + `engine/selftest.js`) and warns about
every broken reference. `build.py` is the adapter between the clean content and the globals the engine reads
(ENGINE-MAP §1g); cardio-era side maps are emitted empty.

**Engine.** Extracted by script from a frozen copy of the cardio page (P2.1), then generalized (P2.2–P2.6) and
re-synced with the final cardio engine at the end (P14.1). The engine never contains block content or block names:
title, brand, palette, exam date and labels come from `content/meta.json`.

---

## §7 Quality bar

The bar is the cardio page's measured level or PLAN-2's, whichever is higher, raised where cardio was weak. The gate
checks the numbers (§7.11); the verifier judges the rest.

### §7.1 Register, spelling and markup (all text)
- Written for a second-year medical student: causal, concrete, no filler, no hedging, no "it is important to note".
  Explain **why** (mechanism), then the discriminating feature, then the exam trap.
- **American spelling** (estrogen, hemorrhage, tumor, fetus, gynecology, anemia, edema, pediatric). The gate flags
  British spellings (the genus *Haemophilus* is exempt).
- `**bold**` marks a key term (≤ 8 words, ≤ 3 per string); bold terms in prose, call-outs and tables become the cloze
  targets. `{{key|Label}}` links a glossary term on first mention. Plain text only in fields the schema marks "esc".
- Numbers, drug names, enzymes, eponyms, laterality and associations are checked twice; when unsure, cut the claim.
- Current guidelines where Step 1 uses them (ACOG/USPSTF cervical screening, CDC STI treatment, ADA diabetes
  diagnosis, current prenatal screening and vaccines); say "as of 2025" where a number is time-bound.

### §7.2 Topics
- Title exactly as §9; `sub` one sentence (8–30 words); `yld` and `exam` from `scope/YIELD.md`.
- Body 900–2600 words (cardio's topics ran 700–2400; ours carry more objectives). Headings (≥ 3) each promise a
  question; prose explains mechanisms; the figure comes right after the paragraph that promises it and before a table
  that restates it; tables summarize after the prose; ≥ 1 `key` and ≥ 1 `trap` call-out; ≥ 1 `why` (question ends in
  "?", answer 60–160 words); ≥ 1 `steps` block; exactly one `["vis", tid]`; one `sexp` (answer position varied across
  topics); ≥ 13 body rows.
- Every accountable objective (first topic listed in TOPIC-MAP) and every blueprint item for the topic is **taught**:
  its key terms appear and the coverage review says `taught`. Secondary objectives are covered where they fit.
- Pretest: 2–3 items, 4 plain-text options, a `why` (18–70 words) and a `w` note for each wrong option (12–50 words).
- Grid: 10–16 items, ≥ 6 true and ≥ 3 plausible decoys.
- Glossary: ≥ 3 terms per topic, each linked from the body; ≥ 4 glossary links rendered per topic.
- Visual guide (`guides/<tid>.json`): title (2–6 words) + 3 cards (head 1–6, body 3–16 words) + media (a figure or image).

### §7.3 Figures (inline SVG)
- House style (docs/CONTENT-SCHEMA.md §1.6): `<svg class="dia" viewBox="0 0 900 H" role="img" aria-label="...">`,
  first child `<text class="ttl">`, theme tokens only (`var(--ink)`, `var(--a1)` ... — no hex colors), `<tspan class="b">`
  for bold (never `<b>` inside `<text>`), ≥ 8 text labels, ≤ 60 KB, no scripts or external links.
- **Legibility:** labels at ≥ 13 user units in a 900-wide viewBox so the median glyph is ≥ 9 px inline at 1280 px, and
  ≥ 10 px in the lightbox at 400 px (the lightbox pans). No overlapping or clipped labels (the probe measures
  getBBox). Every label fits its panel at native size; do not rely on the text fitter.
- A figure teaches one thing its caption states (20–110 words; longer teaching goes in `teach`, shown under a
  disclosure). It is reviewed as a rendered picture by the second model.
- ≥ 1 figure per topic, ≥ 2 for a Step-1 high-yield topic. Prefer mechanisms, axes, pathways, anatomical
  relationships, timelines, lab-pattern grids and comparison diagrams over decoration.

### §7.4 Images (photographs, histology, imaging)
- Openly licensed only: CC0, public domain, CC BY, CC BY-SA (Wikimedia Commons, CDC PHIL, NIH Open-i with CC BY).
  **No NC/ND** without the user's decision (the task BLOCKs with NEEDS-USER). Attribution (`by`, `lic`, `licurl`,
  `srcurl`, `cred`) is copied from the source page, never typed from memory; `mod: true` when resized or cropped.
- ≥ 800 px on the long side (or a `KEEP-SMALL` row with a reason); resized to ≤ 1600 px, JPEG quality 85;
  files named `<tid>_<name>.jpg` in `repro-endo-assets/`.
- The picture must show the claimed diagnosis to a second model (`imgverify` = yes). `dx` is the spot answer;
  `wrong` = 4 look-alikes of the **same modality** a student could confuse, each with a `ww` note (12–45 words);
  `look` (30–90 words) says what to notice and why; `findings` (1–8) list what the overlay must teach.
- Placed in exactly one body (its own topic). Overlays: 1–12 callouts, kinds `r e c poly arrow bracket spot inset
  none`, nothing filled, no callout over 15 % of the frame, all together ≤ 35 %, labels 10–60 words of causal prose,
  the finding never covered.
- Every topic gets ≥ 1 image unless a `NO-IMAGE` row explains why (expected only for rp29, en1, en8).
- The artifact limit is 255 files per version: keep the total image count ≤ 240.

### §7.5 Practice questions (NBME style)
- ≥ 9 per topic (≥ 10 for Step-1 high-yield); ids `<tid>qNN` (zero-padded).
- Stem 25–180 words: an NBME vignette (age, sex, setting, complaint, history, exam, labs or imaging as needed) for
  every d2/d3 item (≥ 40 words). Lead-in 4–28 words ending in "?". No answer words in the stem.
- Exactly 5 options, homogeneous (all drugs, all enzymes, all diagnoses...), ≤ 25 words each, no "none/all of the
  above", keyed option not conspicuously the longest; the key must be the single best answer (second model checks).
- `e` 60–170 words: names the answer, explains the mechanism, rejects at least one distractor by name. `w` note for
  each wrong option (15–70 words, new information, not a restatement). `et` comparison table: 3–5 columns that are the
  features the stem turns on (never a "correct?" column), one row per option keyed by its exact text. `bl` bottom
  line (8–28 words) naming the answer. A visual (`ef` figure or `ei` image) that **contains** the answer, with `pt`
  (`hl`: 1–3 labels that exist in that visual; `say`: 8–60 words naming the answer) on ≥ 80 % of questions; the rest
  need `NO-VISUAL` rows.
- Difficulty rubric `d` (docs/CONTENT-SCHEMA.md §1.22): 1 = one retrieval; 2 = two chained retrievals or one real
  discrimination; 3 = a multi-step chain with a competing mechanism. Per topic ≥ 1 at d1 and ≥ 2 at d3; block-wide
  d1 ≥ 12 %, no level > 55 %.
- 1–3 concept tags; no near-duplicate stems; at least two questions in a topic share a wrong-option text (so Weak
  Spots can name a recurring confusion).

### §7.6 Rapid review
- ≥ 10 per topic (≥ 12 high-yield); ids `<tid>rNN`. Question 4–28 words ending in "?", unique in the block.
- 5 options of 1–12 words, plausible, same category; `x` 20–65 words naming the answer (mechanism, not
  restatement); a `w` why for each wrong option (12–60 words, new information).
- A pinned visual (`media: "fig:<key>"` or `"img:<key>"`) that contains the answer, with `pt`, on ≥ 90 % of items.
- 1–3 concept tags (the first drives the category chip).

### §7.7 Drills
- Every topic has ≥ 1 drill whose `c` is that topic. Kinds: sort (10–16 items, sides ≥ 35 % each), multi (3–8
  columns, 12–24 items, 2–6 per column, optional image per item), order (5–9 steps). Every item and every order step
  has a why (8–45 words). `key` states the one discriminator exactly (12–70 words). 1–2 tags.

### §7.8 Self-explanation, why blocks, pretests, grids
- `sexp`: 4 options that are lines of **reasoning**, not bare answers; `why` 50–120 words; answer positions varied
  (block-wide no position > 50 %).
- `why` blocks answer a real "why" a student would ask, with the mechanism.

### §7.9 Memory scenes (palace)
- ≥ 6 in wave 1, ≥ 4 in wave 2, for list-heavy material (teratogens, STI features, MEN syndromes, ovarian tumor
  markers ...). A scene is a mnemonic board (title, 60–180-word story, 4–9 cards), placed in exactly one topic body.
  A mnemonic never replaces the explanation.

### §7.10 Concept tags, homes and the study path
- 30–45 reasoning-level tags (`feedback-logic`, `binding-proteins`, `steroidogenesis-enzymes`, `embryologic-origin`
  ...), not topic names; each used tag has a home (topic + exact heading + optional figure); ≥ 60 % of used tags span
  ≥ 2 topics (a thread needs two topics).
- Path: `p0` diagnostic first, unit stages of 1–4 topics (every topic in exactly one), the final stage last. The
  pacing promise must hold: a pace of N days finishes on day N for every N the probe tries.

### §7.11 Bands the gate checks (generated from check_repro.py)

| What | Band |
|---|---|
| Topic body words | 900–2600 |
| Body rows (min) | 13 |
| Topic subtitle words | 8–30 |
| Heading words | 2–16 |
| Paragraph words | 20–170 |
| Call-out label / text words | 2–14 / 25–110 |
| Why: question / answer words | 8–26 / 60–160 |
| Table columns / rows | 2–6 / 2–14 |
| Steps: title words / rows | 3–14 / 2–7 |
| Steps: head / body words | 2–18 / 12–110 |
| Self-explanation: question / option / why words | 8–30 / 6–35 / 50–120 |
| Pretest items per topic | 2–3 |
| Pretest: question / option / why / per-option why words | 7–35 / 1–15 / 18–70 / 12–50 |
| Recall grid items / words per item | 10–16 / 2–18 |
| Recall grid: min true / min decoys | 6 / 3 |
| Glossary terms per topic (min) | 3 |
| Glossary: term / definition words | 1–8 / 12–70 |
| Figure caption words | 20–110 |
| Figure 'teach' words (max) | 400 |
| SVG size KB (max) / text labels (min) | 60 / 8 |
| SVG viewBox width | 840–1000 |
| Question stem / lead-in words | 25–180 / 4–28 |
| Question option words (max) | 25 |
| Question explanation / per-option why words | 60–170 / 15–70 |
| Question bottom line / say-line words | 8–28 / 8–60 |
| Questions per topic (min; Step-1 high-yield) | 9 / 10 |
| Questions with a visual (share) | 80 % |
| Questions per topic at d1 / d3 (min) | 1 / 2 |
| Stem words for d2/d3 (min) | 40 |
| Rapid: question / option words | 4–28 / 1–12 |
| Rapid: explanation / per-option why / say-line words | 20–65 / 12–60 / 8–60 |
| Rapid items per topic (min; Step-1 high-yield) | 10 / 12 |
| Rapid items with a pinned visual (share) | 90 % |
| Image: name / dx / look words | 2–12 / 1–10 / 30–90 |
| Image: per-distractor why / finding words | 12–45 / 10–60 |
| Image long side px (min) | 800 |
| Overlay callouts / label words | 1–12 / 10–60 |
| Overlay: one callout / all callouts, % of frame (max) | 15.0 / 35.0 |
| Drill key / item why words | 12–70 / 8–45 |
| Sort items / multi columns / multi items / order steps | 10–16 / 3–8 / 12–24 / 5–9 |
| Memory scene: story words / cards / card label / card text words | 60–180 / 4–9 / 1–8 / 4–26 |
| Visual guide: title / card head / card body words | 2–6 / 1–6 / 3–16 |
| Bold span words (max) / bold spans per string (max) | 8 / 3 |
| Option-position bias (chi-square, max over 4 seeds) | < 18.47 |

---

## §8 Feature parity (nothing the cardio page does may be missing)

The list is parsed, not remembered: F-ids are every feature in `docs/ENGINE-MAP.md` §2 (the full inventory of the
live cardio page), K-ids are the PLAN-2 contracts (ENGINE-MAP §3 and PLAN-2 phases 2–5), N-ids are new for this
block. The engine phase proves them on the stub with the runtime probe; P8.1 and P15.1 prove each one again by real
clicks on the real page (a PASS row with ≥ 40 characters of what was clicked and seen, per id).

| Id | Feature | Proven by |
|---|---|---|
| F1 | Boot and render loop | probe: no errors, no JS errors; every view renders |
| F2 | Views/modes | probe.views: every mode renders with no NaN/undefined leak |
| F3 | Path view and stage sequencer | pacing simulation completes every stage; click-through |
| F4 | Pacing engine and daily plan | probe.pacing: pace N finishes on day N; review share at 14 days ≤ 0.6 |
| F5 | Calendar strip | probe.calendar.strip |
| F6 | Exam date, countdown and passed-date guard | probe.examPast (banner, no ceiling in the past); exam input |
| F7 | Header ring | click-through |
| F8 | Yield filter | probe.yieldAxes.axisToggle (+ N1) |
| F9 | Learn view and read detection | probe.renderLearn; per-topic metrics |
| F10 | Glossary popups and view | probe.renderLearn.glossPopup; ≥ 4 links per topic; reach ≤ 2 % never linked |
| F11 | Cloze | probe.renderLearn.clozeBlanks ≥ 3 |
| F12 | Recall grid | probe.renderLearn.gridScored |
| F13 | Pretests | probe.renderLearn.pretestWhy / pretestWrongSpecific (K14) |
| F14 | Self-explanation (sexp) | probe.renderLearn.sexpAnswered |
| F15 | Why blocks | probe.renderLearn.why |
| F16 | Memory palace | palace checks; click-through |
| F17 | Visual guides | probe.renderLearn.vis = 1 |
| F18 | Figures, lightbox, zoom and pan | probe.figs (legibility, overlaps, clipping) and probe400 lightbox (K22) |
| F19 | Annotated images: pins, rail, hide-markup | probe.renderSpot pins, hide markup (K15) |
| F20 | Image spot | probe.renderSpot 5 options (K12) |
| F21 | Drills (sort / order / multi) | probe.renderDrill end screens (K13) |
| F22 | Rapid review | probe.renderRapid (K1–K6) |
| F23 | Practice | probe.renderPractice (K7–K11) |
| F24 | Universal set builder | click-through |
| F25 | Weak Spots | probe.weak (threads, error types, proven/suspected) |
| F26 | Session fatigue line | page self-test (fatigue); click-through |
| F27 | Flags | probe flag control; export carries flags |
| F28 | Cross-block hub | click-through with both pages on one origin (N6) |
| F29 | Export / restore / start over | probe export button; click-through export + restore |
| F30 | AI tutor dock | probe.tutor (degrades, Socratic); click-through |
| F31 | Focus management and aria-live | probe.a11y focus after render; live verdicts |
| F32 | Persistence and DB sync | click-through: reload keeps progress |
| F33 | Spaced repetition | click-through: an item comes back when due |
| F34 | Mastery and diagnosis | probe.weak.proven |
| F35 | Global search | probe.search (K19) |
| F36 | Structural audit | probe.pageAudit: __pathAudit lists all empty |
| F37 | Behavioural self-test (`?selftest=1`) | probe.pageSelftest.ok |
| F38 | Linked review queue | click-through: a miss queues linked rapid items |
| F39 | Verification of "lucky" answers | click-through: a lucky answer is re-asked |
| F40 | Diagnostic sweep | click-through: the p0 diagnostic |
| F41 | SVG text fitter | probe.figs overlaps / clipped empty |
| F42 | Render-failure recovery | click-through (a forced render error recovers to the path) |
| K1 | Rapid: 5 options, a why for each wrong option | static: 5 options + w for 4; probe.renderRapid.optionsRendered = 5 |
| K2 | Rapid: wrong options stay clickable and toggle .optwhy; keyed option aria-disabled | probe.renderRapid wrongClickable, whyRevealed, whyMatches |
| K3 | Rapid: pointed visual (r.pt) highlights figure labels / image pins | probe.renderRapid.highlightCount ≥ 1; static pt checks |
| K4 | Rapid: category chip .rfcat | probe.renderRapid.catChip |
| K5 | Rapid: say-line .rfsay + deep review open | probe.renderRapid sayShown, detailsOpen |
| K6 | Rapid: lastPick/picks recorded; keys 1-5 and Enter | probe.renderRapid pickRecorded, keyboardPick |
| K7 | Practice: wrong options clickable for their why; old list under details | probe.renderPractice wrongClickable, whyRevealed, whyMatches |
| K8 | Practice: comparison table (q.et, .tblwrap.et, .etkey) | probe.renderPractice tableShown, tableKeyRow |
| K9 | Practice: bottom line .qbl | probe.renderPractice.blShown |
| K10 | Practice: pointed visual q.pt, .qsay, deep review open | probe.renderPractice sayShown, detailsOpen, highlightCount |
| K11 | Practice: set summary with expandable rows | probe.renderPractice summaryRows = 2, summaryExpandable |
| K12 | Spot: 5 options, every wrong option clickable for its why | probe.renderSpot optionsRendered = 5, wrongClickable, whyRevealed |
| K13 | Drills: end screens with a why per item, order steps included | probe.renderDrill itemsClickable ≥ 10, orderClickable ≥ 5, multiClickable ≥ 12 |
| K14 | Pretest: per-option why, picked why shown first | probe.renderLearn pretestWhy, pretestWrongSpecific |
| K15 | Overlays: nine kinds, nothing filled, show-all toggle, hide markup | probe.renderSpot kindRender (9 kinds), filledShapes = 0, showAllToggle, hideMarkup |
| K16 | Images >= 800 px or KEEP-SMALL | static: image size ≥ 800 px or KEEP-SMALL |
| K17 | Picked option's why opens first, aria-expanded (rapid, practice, spot) | probe pickedWhyOpen + ariaExpanded (rapid, practice, spot) |
| K18 | Figure 'teach' text under a disclosure | engine source: teach under <details> |
| K19 | Search finds whys, tables, bottom lines, say-lines | probe.search whyFindable, tableFindable, bottomLineFindable, rapidWhyFindable |
| K20 | Weak Spots: rapid confusions | probe.state.confusionsHasRapidKind |
| K21 | Keyboard answering in practice and spot | probe.renderPractice.keyboardPick (practice); click-through (spot) |
| K22 | Figures legible: >= 9 px inline at 1280, >= 10 px lightbox at 400, pannable | probe.figs.below9 = []; probe400 lightbox ≥ 10 px and pans |
| N1 | Two yield axes (Step 1 vs the course final) with a toggle | probe.yieldAxes (toggle; axes differ on ≥ 8 topics) |
| N2 | Exam date defaults to the course final; passed-date guard | probe.examPast; meta.examDefault; click-through |
| N3 | Self-explanation rows in the body with varied answer positions | static sexp checks; block-wide position spread (P14.2) |
| N4 | Phone width 400 px: no horizontal scroll in any view | probe400: no view scrolls sideways |
| N5 | Dark theme: every figure, overlay and table readable | click-through in dark theme |
| N6 | Hub: cardio and repro-endo rapid items share one due queue (same origin) | click-through with the cardio page served from the same folder |

**DOM contract the probe reads (engine tasks must keep these names):** practice options `[data-opt]`/`.qopt`,
explanation `.qexp`, next `#qnext`; rapid options `[data-rfo]`/`.rfopt`; spot options `[data-spo]`/`.qopt`; per-option
why `.optwhy` with `data-why` on the button and `aria-expanded`; `.rfcat`; `.rfsay`/`.qsay`/`.ptsay`;
`details.deepreview[open]`; figure highlights `.hl`/`.hlbox`, image hot pins `.hot`; `.tblwrap.et` with `.etkey`;
`.qbl`; `.setsummary [data-sumq]` → `.sumexp`; `[data-dwhy]`; pretest `[data-pti][data-ptj]` → `[data-pt] .ptwhy`;
sexp `.checkpoint[data-sexp]` with `[data-sx]`; grid `#rgrid [data-rg]` + `#rgcheck`; cloze `#clozeToggle` → `.cz.blank`;
glossary `.gterm[data-g]` → `.gpop`; figures `main figure [data-zoomfig]` + `svg.dia`, lightbox `.lightbox` with a
"Fit" button; images `.photo`, `.oshape` (`.fill` never visible above 0.12 opacity), pins `.opin`/`[data-pin]`,
`[data-showall]`, `[data-raw]`, `.cred`; `.conceptvisual`; `details.why`; `#pacedays`, `#examdate`, `#expbtn`,
`[data-calday]`; live region `#live`; `window.__pathAudit()`; `?selftest=1` → `<pre id="selftest">`.

---

## §9 Topics

48 topics in 15 blocks. Wave 1 (reproductive, rp1–rp30) is built and published first because the BSE 638 final is
Fri 9 Oct 2026; wave 2 (endocrine, en1–en18) follows. Ids are prefixed so they never collide with the cardio block's
topic ids in the shared review hub. "Obj" = Canvas objectives this topic is accountable for (first listed in
TOPIC-MAP) + objectives it shares; "BP" = blueprint items (high-yield). The Step 1 and course-exam yield of each
topic is set in P1.4 (`scope/YIELD.md`).

| Id | Title | Block | Group | Wave | Obj (own + shared) | BP (hi) |
|---|---|---|---|---|---|---|
| rp1 | The pelvis, pelvic floor and pelvic viscera | Reproductive anatomy | G1 | 1 | 23 + 1 | 13 (9) |
| rp2 | The perineum, external genitalia and lymph drainage | Reproductive anatomy | G1 | 1 | 18 + 1 | 10 (8) |
| rp3 | Breast anatomy and histology | Reproductive anatomy | G1 | 1 | 6 + 0 | 8 (5) |
| rp4 | Early embryology, the placenta and twinning | Development: embryo, sex and puberty | G2 | 1 | 7 + 2 | 12 (10) |
| rp5 | Sex determination and genital development | Development: embryo, sex and puberty | G2 | 1 | 11 + 2 | 11 (9) |
| rp6 | Disorders of sex development and sex chromosome disorders | Development: embryo, sex and puberty | G2 | 1 | 2 + 2 | 10 (9) |
| rp7 | Puberty: normal, early and late | Development: embryo, sex and puberty | G3 | 1 | 6 + 1 | 8 (6) |
| rp8 | The ovary, oogenesis and the menstrual cycle | The cycle and its disorders | G3 | 1 | 7 + 0 | 11 (8) |
| rp9 | Amenorrhea, abnormal bleeding, PCOS and female infertility | The cycle and its disorders | G3 | 1 | 2 + 1 | 12 (8) |
| rp10 | Contraception, emergency contraception and medication abortion | The cycle and its disorders | G4 | 1 | 2 + 1 | 10 (8) |
| rp11 | Menopause and hormone therapy | The cycle and its disorders | G4 | 1 | 14 + 1 | 12 (8) |
| rp29 | Gender-affirming care, sexual health and reproductive ethics | Whole-person reproductive care | G4 | 1 | 17 + 0 | 10 (4) |
| rp12 | Vulva and vagina: infections and lesions | Female genital tract pathology | G5 | 1 | 7 + 4 | 12 (11) |
| rp13 | The cervix, HPV and cervical cancer screening | Female genital tract pathology | G5 | 1 | 11 + 3 | 10 (7) |
| rp14 | The uterus: endometrium and myometrium | Female genital tract pathology | G5 | 1 | 6 + 7 | 13 (8) |
| rp15 | Ovary and fallopian tube: cysts, adnexal masses and tumors | Female genital tract pathology | G6 | 1 | 13 + 3 | 14 (13) |
| rp23 | Benign breast disease and gynecomastia | The breast | G6 | 1 | 7 + 1 | 10 (7) |
| rp24 | Breast cancer | The breast | G6 | 1 | 12 + 1 | 13 (10) |
| rp16 | Bacterial STIs and pelvic inflammatory disease | Sexually transmitted and perinatal infections | G7 | 1 | 3 + 3 | 12 (10) |
| rp17 | Viral STIs: HIV, HSV, HPV and molluscum | Sexually transmitted and perinatal infections | G7 | 1 | 9 + 3 | 11 (10) |
| rp18 | Infections in pregnancy and the newborn | Sexually transmitted and perinatal infections | G7 | 1 | 5 + 1 | 13 (11) |
| rp19 | The testis, spermatogenesis and male reproductive hormones | The male reproductive system | G8 | 1 | 11 + 1 | 11 (7) |
| rp20 | Scrotal and testicular disorders | The male reproductive system | G8 | 1 | 6 + 4 | 10 (9) |
| rp21 | The prostate and the penis | The male reproductive system | G8 | 1 | 10 + 5 | 13 (12) |
| rp22 | Male hypogonadism, infertility, sexual dysfunction and androgen drugs | The male reproductive system | G8 | 1 | 3 + 1 | 9 (6) |
| rp25 | Maternal physiology and the hormones of pregnancy | Pregnancy | G9 | 1 | 8 + 1 | 8 (6) |
| rp30 | Prenatal care: dating, screening, teratogens and vaccines | Pregnancy | G9 | 1 | 16 + 1 | 7 (6) |
| rp26 | Early pregnancy: ectopic, pregnancy loss and trophoblastic disease | Pregnancy | G9 | 1 | 11 + 1 | 11 (9) |
| rp27 | Complications of later pregnancy | Pregnancy | G10 | 1 | 14 + 2 | 12 (8) |
| rp28 | Labor, delivery and the postpartum period | Pregnancy | G10 | 1 | 15 + 1 | 13 (10) |
| en1 | How hormones work: receptors, messengers, transport and feedback | Hormones and the pituitary | G11 | 2 | 0 + 0 | 10 (7) |
| en2 | The hypothalamus and pituitary | Hormones and the pituitary | G11 | 2 | 3 + 0 | 10 (8) |
| en3 | Pituitary tumors and hypopituitarism | Hormones and the pituitary | G11 | 2 | 2 + 2 | 14 (9) |
| en4 | Water balance: ADH, diabetes insipidus and SIADH | Hormones and the pituitary | G12 | 2 | 0 + 1 | 10 (9) |
| en5 | The thyroid: structure, hormone synthesis and function tests | Thyroid | G12 | 2 | 1 + 2 | 12 (9) |
| en6 | Hyperthyroidism and thyroiditis | Thyroid | G12 | 2 | 1 + 1 | 12 (9) |
| en7 | Hypothyroidism, thyroid nodules and thyroid cancer | Thyroid | G13 | 2 | 5 + 0 | 13 (11) |
| en8 | Calcium, PTH, vitamin D and calcitonin | Calcium, parathyroid and bone | G13 | 2 | 0 + 0 | 10 (7) |
| en9 | Parathyroid disease and disorders of calcium | Calcium, parathyroid and bone | G13 | 2 | 1 + 0 | 12 (8) |
| en10 | Bone turnover: osteoporosis, osteomalacia and bone-active drugs | Calcium, parathyroid and bone | G14 | 2 | 1 + 1 | 8 (7) |
| en11 | The adrenal cortex, steroid synthesis and congenital adrenal hyperplasia | Adrenal | G14 | 2 | 3 + 1 | 8 (7) |
| en12 | Cortisol excess and adrenal insufficiency | Adrenal | G14 | 2 | 3 + 0 | 16 (13) |
| en13 | Aldosterone, the adrenal medulla and endocrine hypertension | Adrenal | G15 | 2 | 2 + 0 | 10 (7) |
| en14 | Insulin, glucagon and fuel regulation | Endocrine pancreas and diabetes | G15 | 2 | 5 + 0 | 9 (7) |
| en15 | Diabetes mellitus: types, diagnosis and chronic complications | Endocrine pancreas and diabetes | G15 | 2 | 3 + 1 | 10 (7) |
| en16 | Diabetic emergencies and hypoglycemia | Endocrine pancreas and diabetes | G16 | 2 | 3 + 0 | 8 (6) |
| en17 | Diabetes and weight-management pharmacology | Endocrine pancreas and diabetes | G16 | 2 | 11 + 0 | 14 (9) |
| en18 | Endocrine tumor syndromes: MEN, pancreatic NETs and carcinoid | Endocrine tumor syndromes | G16 | 2 | 0 + 1 | 8 (6) |
| | **48 topics** | 15 blocks | 16 groups | | **326 objectives** | **523 items** |

---

## §10 Phases and tasks

Every task below is a ledger row. "Owns" and the check names are generated from the gate; the gate's version wins.
The generic How for each content task type is written once (§10.3–§10.8) and applies to every task of that type.

### §10.1 P0 — Claim and prove the tooling (orchestrator does these directly)

**P0.1** — Goal: the plan is claimed and the gate is proven. How: create `.repro-active` (one line: date); run
`python check_repro.py --selftest` (the demo must catch all 12 faked rows; the probe must run clean on the cardio
reference page); if the engine exists, the stub probe runs too. Then `--record P0.1 "selftest: demo 12/12, probe errors []"`.

**P0.2** — Goal: both second models answer and are calibrated. How: `python xmodel.py ping codex`,
`python xmodel.py ping gemini`; then `python xmodel.py calibrate <factcheck|grade|coverage|figreview|imgverify> --provider codex`
and `calibrate <factcheck|grade> --provider gemini`. A failed calibration is investigated (read the transcript), never
waved through. Gemini rate limits: retry later; if Gemini stays down after three tries an hour apart, BLOCK P0.2 with
NEEDS-USER (adjudication needs it). `--record P0.2 "calibrated: ..."`.

**P0.3** — Goal: main is locked and the gate's hash recorded. How: `python check_repro.py --baseline`; paste its two
lines into the ledger's BASELINE line; `--record P0.3 "baseline: tree:<...> GATE sha:<...>"`.

### §10.2 P1 — Scope

**P1.1 Canvas scope** (operator, §3.3; needs Canvas in Chrome). Goal: `scope/CANVAS-SCOPE.md` is complete and
correct: all 41 sessions and 326 objectives re-verified against Canvas (fix any mismatch; keep ids stable; add
missing objectives at the end of their session); the BiCEP case objectives added as sessions `## BICEP-<NAME> | ...`
with objectives `BICEP-<NAME>.<n> <text>` (from each case's "Learning objectives.docx"; requires the user's approval to
download those docx files; the week-7 Hendricks files were locked on 9/26 — if still locked, a line saying so);
`scope/QUIZ-SIGNALS.md` has one row per weekly quiz `| <quiz id> | VIEWED or NOT-VIEWABLE | topics and question
styles it signals |` from the user's **already submitted** attempts (read-only; never start an attempt).
How: Canvas REST API through the user's logged-in Chrome (`/api/v1/courses/70351/modules?include[]=items`,
`/pages/<url>`, `/files/<id>`, `/quizzes/<id>/submissions?include[]=submission_history` ...). No rosters, grades or
personal data. If the user has not approved downloads, read each BiCEP objectives document in Canvas's built-in file
preview (open the file page in Chrome and read the rendered text): that is reading, not downloading.

**P1.2 Lecture material** (operator). Goal: the text of every lecture deck, handout and reading listed on a `FILE`
line in CANVAS-SCOPE.md is in `scope/lectures/<course>_<file>.md` (≥ 150 words each), or has a `| <course/file> | SKIP
| reason |` row in `scope/LECTURE-FILES.md` (≥ 80 % extracted). How: after the user approves the download list
(file names and sizes from CANVAS-SCOPE.md), fetch each file's download URL through the Canvas API in Chrome and save
it to `lecture-src/` (not tracked); extract text: `.pptx` → unzip and read `ppt/slides/slide*.xml` and
`ppt/notesSlides/*.xml` `<a:t>` runs in slide order (`## Slide N` headings, speaker notes under `Notes:`); `.pdf` →
PyMuPDF (`import fitz`) or `pdftotext`; `.docx` → python-docx. Keep slide titles, bullet text, tables and notes;
drop boilerplate (title slides, "Questions?"). These files are the course's own emphasis: topic authors read them.
If the user declines downloads, read each file through Canvas's built-in preview in Chrome instead (slower, no file
is saved) and write the same `scope/lectures/*.md`; BLOCK only if neither route works.

**P1.3 Blueprint gaps.** Goal: nothing Step 1 tests in these systems is missing from the blueprint. How: run
`python xmodel.py gaps all --jobs 3`; for every GAP id write `| GAP-id | ADDED | BP-<tid>-<nn> |` (after appending a new
line `BP-<tid>-<nn> [hi|mid|lo] <concept> {k: <2-4 key terms>}` with the next free number in that topic) or `| GAP-id
| REJECTED | <reason ≥ 20 chars: already covered by BP-..., beyond Step 1, wrong system> |` in `scope/BP-GAPS.md`.
Items are never deleted; a wrong item is marked `[x]` with a reason on its line.

**P1.4 Topic map and yield axes.** Goal: every TOPIC-MAP row has 2–4 key terms (lowercase, `;`-separated, `a|b` for
synonyms, each ≥ 5 characters or an abbreviation; the words a student must see for that objective), every objective
(including BiCEP) has a row, and `scope/YIELD.md` has `| tid | step1 | exam | reason |` for all 48 topics:
`step1` = Step 1 yield from the blueprint and NBME experience; `exam` = likelihood on the BSE 638 final (repro) from
session hours, quiz signals and lecture emphasis (endocrine topics: the BSE 612 endocrine week, else `lo`). The two
axes must differ for ≥ 8 topics and neither may mark > 70 % `hi`. The `section` column stays `-` until the topic exists.

**P1.5 Concept tags.** Goal: `content/concepts.json` `tags` (30–45 kebab-case, reasoning-level) and `labels` (1–6
words). Homes are added later (P7/P13).

**P1.V** — verifier samples 12 objectives: is each mapped to the right topic, with the right key terms?

### §10.3 P2 — Engine (all tasks non-parallel; owns `engine/*`)

Inputs for every engine task: `docs/ENGINE-MAP.md` (region map §1, feature inventory §2, PLAN-2 contract status §3,
state schema §4, risks §5), `docs/CONTENT-SCHEMA.md` §5 (clean-block checklist), the cardio PLAN-2.md §7–§8 (read-only),
the stub fixtures. Test loop: `python build.py --root fixtures/stub --engine .repro/ws/<ws>/engine --out
.repro/runtime/stub.html`, open it (serve.py can serve `.repro/runtime` with `--root`), then `python check_repro.py
--status <task> --ws <task>` (runs the probe).

**P2.1 Extract.** Goal: `engine/extract_engine.py --src <cardio page> --out <dir>` turns the cardio page into
`shell.html` (head, CSS, header, main; placeholders `@@TITLE@@ @@A1@@ @@A2@@ @@A1_DARK@@ @@A2_DARK@@ @@SCRIPT@@`),
`engine.js` (engine code only: no content literals), `selftest.js` and `REGIONS.json` (every region of the page with
`name`, `class` ∈ ENGINE / CONTENT / PATCH / MIXED / LITERALS, `sha`). Regions are found by anchors (banner comments,
declarations), **never line numbers**; an unclassified region makes the script exit 1. How: copy the live cardio page
**once** to `engine/base/cardio-source.html` (+ `SOURCE.json` with its sha256 and date); run the script into
`engine/base/`; copy the three outputs to `engine/` as the working copies; write `engine/ENGINE-GLOBALS.md` (every global
the engine reads and where build.py provides it). Replace brand literals by META reads. Make the stub and the
stub-partial pages load with no errors (the smallest edits to the working copies; everything else waits for P2.2).

**P2.2 Generalize and repair.** Goal: nothing block-specific in the engine; the two yield axes; every ENGINE-MAP risk
answered. How: title, brand, exam name/label/default/key from META (`META.title`, `META.examName`, `META.examLabel`,
`META.examDefault`, `META.examKey`; palette via build placeholders); the yield toggle (`S.yAxis`: "step1" uses
`t.yld`, "exam" uses `t.exam` — rail dot, filter, badges, weights in `topicEvidence` and threads); `R1–R31` each get
a row `| R<n> | FIXED / NOT-APPLICABLE / CONTENT-RULE | how |` in `audit/P2.2.md` (e.g. R1 diag id from PATH, R2
`META.finalN`, R3 self-test seeded from content, R9 tags by question text, R12 option counts from data, R13 overlay
kinds, R14 search ids, R15 local-date streak, R16 tag before load, R17 declared `AUTOGLOSS_USED`, R25 palette, R26 the
missing CSS tokens). The page's own self-test must pass on the stub.

**P2.3 Practice and rapid contracts** (K1–K11, K17, K21 for practice). **P2.4 Spot, drill, pretest contracts**
(K12–K14). **P2.5 Overlays, figures, search, confusions, phone width** (K15, K16, K18–K20, K22, N4). **P2.6 The page's
own self-test and `__pathAudit`** generalized to any content (no cardio literals, seeded from the loaded content),
green on the stub; Weak Spots, threads, tutor, calendar, export verified. For each: implement the contract exactly as
§8 names it, test on the stub, and keep every earlier contract green (the regression pass enforces it).

**P2.V** — verifier samples 10 parity ids and clicks them on the stub page.

### §10.4 Topic tasks (P3.1–P3.10 wave 1; P9.1–P9.6 wave 2; parallel, up to 3)

Goal: the three (or four) topics of the group are complete, accurate lessons at the §7.2 bar: every accountable
objective and blueprint item taught, figures that teach, pretest, grid, sexp, glossary, visual guide.

How (in this order — the order is the anti-tunneling guard):
1. **Outline first.** Read the TOPIC-MAP rows whose first topic is yours (accountable) and those that list yours
   second; the blueprint section for each topic; the lecture files for the mapped sessions (`scope/lectures/`); the
   quiz signals. Write in `audit/<task>.md` a table `| objective or BP id | heading that will teach it |` covering
   every accountable id. Only then write.
2. Write each topic JSON (shape: `fixtures/stub/content/topics/*.json`), glossary (≥ 3 terms, linked with `{{k|Label}}`
   on first mention), guide, figures (§7.3; ≥ 1, ≥ 2 if Step-1 high-yield), memory scene if the material is a list.
3. `python check_repro.py --status <task> --ws <task>`; fix until the static checks pass.
4. Second models (all with `--root .repro/ws/<ws>`): `factcheck topic <tids>`, `factcheck gloss <tids>`,
   `factcheck guide <tids>`, `factcheck fig <tids>`, `figreview <tids>`, `coverage <tids>`, `grade pretest <tids>`.
   Fix every blocking verdict; `partial` → fix or `PARTIAL-OK` row.
5. `--status` until every line is ok; report. (scope/ is not owned by topic tasks: the TOPIC-MAP `section` column stays
   `-`; the outline table in the audit file and the coverage records are the proof of where each objective is taught.)

### §10.5 Image tasks (P4.1–P4.5 wave 1; P10.1–P10.3 wave 2; parallel) and overlay task (P4.6; P10.4)

Image goal: every topic of the batch has the photographs it needs (histology, gross, cytology, imaging, clinical
photos: what Step 1 shows), licensed, legible, verified by a second model, with 4 look-alike distractors, placed in
the topic. How: find candidates on Wikimedia Commons (and CDC PHIL / NIH Open-i with open licences); open the file
page and copy author, licence, licence URL and source URL exactly; download the original (user approval required,
§12), resize to ≤ 1600 px (`mod: true`), save `repro-endo-assets/<tid>_<name>.jpg`; write `content/images/<key>.json`;
insert `["img", key]` after the paragraph it illustrates (the only change allowed to the topic file). Then
`python xmodel.py imgverify <tids>`, `factcheck img <tids>`, `grade spot <tids>`, `coverage <tids>` (with
`--root`). A picture the model says is not what we claim is replaced, not argued.

Overlay goal: every image's markup is designed by a model, reviewed by the other from the rendered PNG, and applied
exactly. How: first `python xmodel.py bakeoff <4 varied images>` (writes the default provider); then for each image
`overlay <key>` and `overlay-review <key>`; copy the design's `ann` into the image file (up to 2 adjusted callouts,
each logged `| <key>#<i> | ADJUSTED | reason |`); re-run `imgverify`, `factcheck img`, `coverage` for the topics.

### §10.6 Practice-question tasks (P5.x; P11.x; parallel)

Goal: §7.5 for every topic of the group. How: plan the set first in `audit/<task>.md`: `| qid | objective/BP ids |
d | visual |` so every accountable objective with testable content gets a question and the difficulty spread is right;
write; `--status`; then `factcheck q <tids>` and `grade q <tids>` (and `figreview`, `factcheck fig`, `coverage` for any
figure you add or change — you own `content/figs/<tid>_*`). New figures made for questions must also meet §7.3.

### §10.7 Rapid tasks (P6.x; P12.x; parallel)

Goal: §7.6. How: one rapid item per retrievable fact the topic teaches (definitions, associations, drugs and adverse
effects, enzyme deficiencies, markers, histology, embryologic origins), reusing the topic's vocabulary so the linked
review queue can find them after a missed question; pin a visual that shows the answer; `--status`; `factcheck rapid`,
`grade rapid` (+ figure reviews for any figure touched, and `coverage`).

### §10.8 Drills, memory scenes, concept homes and path (P7.x; P13.x)

Drill tasks (parallel): §7.7 for every topic of the group (`factcheck drill`). Memory-scene task: §7.9 (`factcheck
palace`, `coverage` of the topics where scenes are placed). Homes-and-path task: `content/concepts.json` homes and
labels for every used tag; `content/path.json` (wave 1: p0 + units for rp topics + final; wave 2: add en units before
the final); the rendered page's pacing promise, self-test, audit and Weak Spots threads must be green.

### §10.9 P8 and P15 — Release

**P8.1 / P15.1 Click-through** (operator; alone). Goal: every parity id (F1–F42, K1–K22, N1–N6) proven by real clicks on
the real page at 1280 px and 400 px, light and dark, with a PASS row (≥ 40 characters: what you clicked, what you saw).
Anything broken → FAIL row and the owning task is reopened (engine tasks for features). N6 (hub) is tested by serving
the cardio page and this page from one folder (same origin) — never by editing the cardio project.
**P8.2 / P15.2 Publish** (the orchestrator, after the user says yes in chat). Version 1 = a **new** artifact:
publish `repro-endo-path.html` with every image in `files` (`"repro-endo-assets/<file>": "<local path>"`), icon
`study`, and the runtime capabilities the engine uses (tutor → sample, progress sync → db + user, export → downloads;
load the `artifact-capabilities` skill first and match the cardio artifact's declarations). Version 2 updates the
**same** URL. Record `published: <version> <url>`.
**P8.3 / P15.3 Live check.** Open the published URL; walk the path, one practice question, one rapid item, one
image spot, the lightbox, export; record `live-check: ...`.

### §10.10 P14 — Integration

**P14.1 Engine re-sync** (engine; alone). Goal: every change the cardio engine gained after P2.1 (PLAN-2 was still
running when this plan was written) is ported or reasoned out. How: copy the current cardio page to
`engine/resync/cardio-source.html` (+ SOURCE.json), run `extract_engine.py` into `engine/resync/` (update the
classification if the cardio page gained regions), and for every non-content region whose sha differs from
`engine/base/REGIONS.json` write `| region | PORTED / NOT-NEEDED / ALREADY | reason |` in `audit/ENGINE-RESYNC.md`.
The list of changed regions is computed by the gate; nothing can be skipped. If the cardio page changes again before
the end, this check fails again (by design).
**P14.2 Whole-block integration** (content-wide; alone; `reason-per-file`). Near-duplicate questions across topics,
difficulty spread, sexp answer positions, all six mastery channels for ≥ 90 % of topics, glossary reach (≤ 2 % never
linked), threads crossing topics, search, pacing, option-position bias.
**P14.3 Accessibility and legibility across the whole block** (every figure, every view, 400 px, dark theme).

### §10.11 Task index (generated from check_repro.py)

| Task | Title | Kind | Parallel | Owns | Checks (the gate's names) |
|---|---|---|---|---|---|
| P0.1 | Claim (.repro-active); gate self-test: demo catches every faked row; probe clean on the cardio reference | orchestrator | no | — | (see §10 Goal); (see §10 Goal) |
| P0.2 | Second models answer and are calibrated (planted-error sets): GPT for all five checks, Gemini for fact-check and grading | orchestrator | no | — | (see §10 Goal) |
| P0.3 | Baseline: lock main, record BASELINE and GATE sha in the ledger | orchestrator | no | — | (see §10 Goal); (see §10 Goal) |
| P1.1 | Canvas scope: verify 41 sessions/326 objectives; add BiCEP learning objectives; weekly-quiz topic signals | document | yes | `scope/CANVAS-SCOPE.md`, `scope/QUIZ-SIGNALS.md`, `audit/P1.1.md` | objectives + BiCEP counted; scope/QUIZ-SIGNALS.md has a row per weekly quiz (>= 6) |
| P1.2 | Lecture material: text of every lecture deck/handout/reading into scope/lectures/ (or a reasoned SKIP) | document | yes | `scope/lectures/*`, `scope/LECTURE-FILES.md`, `audit/P1.2.md` | lecture text extracted or SKIP |
| P1.3 | Blueprint gap-finding: a second model lists missing Step 1 concepts per topic; each ADDED to the blueprint or REJECTED with a reason | document | no | `scope/STEP1-BLUEPRINT.md`, `scope/BP-GAPS.md`, `audit/P1.3.md` | every gap ADDED or REJECTED; (see §10 Goal) |
| P1.4 | Topic map completed (key terms per objective) and the two yield axes (Step 1 / course final) set with reasons | document | no | `scope/TOPIC-MAP.md`, `scope/YIELD.md`, `audit/P1.4.md` | TOPIC-MAP complete; YIELD.md informative |
| P1.5 | Concept-tag vocabulary: 30-45 reasoning-level tags with 1-6 word labels | document | no | `content/concepts.json`, `audit/P1.5.md` | concept vocabulary |
| P1.V | Phase 1 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P2.1 | Extract the engine from a frozen copy of the cardio page by script (every region classified, fail-loud), build the stub, probe clean | engine | no | `engine/*`, `audit/P2.*` | extraction reproducible; no cardio brand literals left in the engine; stub page: loads, every view renders, the probe runs clean; stub-partial page: a topic with no items and no stage yet still renders everywhere (the mid-wave state) |
| P2.2 | Generalize and repair the engine: META-driven strings/palette/exam date, two yield axes, every ENGINE-MAP risk R1-R31 answered | engine | no | `engine/*`, `audit/P2.*` | R1–R31 answered; engine generalized; stub page: exam date, yield axes, a11y, pacing, bias, own self-test |
| P2.3 | Practice and rapid contracts (PLAN-2 §8): clickable whys, picked-why-first, table, bottom line, pointed visual, set summary, keyboard | engine | no | `engine/*`, `audit/P2.*` | stub page: practice answered view; stub page: rapid answered view |
| P2.4 | Spot, drill and pretest contracts: 5-option spot with why-click, clickable drill end screens incl. order steps, pretest per-option whys | engine | no | `engine/*`, `audit/P2.*` | stub page: spot; stub page: drills; stub page: learn view (pretest, sexp, grid, cloze, glossary) |
| P2.5 | Overlay kinds + show-all, figure legibility (inline >= 9 px, lightbox >= 10 px and pannable at 400), FIGS.teach, search, rapid confusions, 400 px | engine | no | `engine/*`, `audit/P2.*` | stub page: overlay renderer; stub page: figures legible at 1280; lightbox at 400; stub page: search, confusions, phone width; figure 'teach' text renders under a disclosure |
| P2.6 | The page's own ?selftest=1 and __pathAudit generalized to any content (green on the stub); weak spots, threads, tutor, calendar, export | engine | no | `engine/*`, `audit/P2.*` | stub page: own self-test and audit; stub page: weak spots, tutor, calendar, flags; self-test carries no cardio literals |
| P2.V | Phase 2 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P3.1 | Topics rp1, rp2, rp3: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp1.json`, `content/topics/rp2.json`, `content/topics/rp3.json`, `content/figs/rp1_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.2 | Topics rp4, rp5, rp6: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp4.json`, `content/topics/rp5.json`, `content/topics/rp6.json`, `content/figs/rp4_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.3 | Topics rp7, rp8, rp9: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp7.json`, `content/topics/rp8.json`, `content/topics/rp9.json`, `content/figs/rp7_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.4 | Topics rp10, rp11, rp29: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp10.json`, `content/topics/rp11.json`, `content/topics/rp29.json`, `content/figs/rp10_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.5 | Topics rp12, rp13, rp14: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp12.json`, `content/topics/rp13.json`, `content/topics/rp14.json`, `content/figs/rp12_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.6 | Topics rp15, rp23, rp24: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp15.json`, `content/topics/rp23.json`, `content/topics/rp24.json`, `content/figs/rp15_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.7 | Topics rp16, rp17, rp18: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp16.json`, `content/topics/rp17.json`, `content/topics/rp18.json`, `content/figs/rp16_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.8 | Topics rp19, rp20, rp21, rp22: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp19.json`, `content/topics/rp20.json`, `content/topics/rp21.json`, `content/topics/rp22.json` … (+17) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.9 | Topics rp25, rp30, rp26: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp25.json`, `content/topics/rp30.json`, `content/topics/rp26.json`, `content/figs/rp25_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.10 | Topics rp27, rp28: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/rp27.json`, `content/topics/rp28.json`, `content/figs/rp27_*`, `content/figs/rp28_*` … (+7) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P3.V | Phase 3 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P4.1 | Images for rp1, rp2, rp3, rp4, rp5, rp6: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/rp1_*`, `content/images/rp2_*`, `content/images/rp3_*`, `content/images/rp4_*` … (+15) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P4.2 | Images for rp7, rp8, rp9, rp10, rp11, rp29: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/rp7_*`, `content/images/rp8_*`, `content/images/rp9_*`, `content/images/rp10_*` … (+15) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P4.3 | Images for rp12, rp13, rp14, rp15, rp23, rp24: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/rp12_*`, `content/images/rp13_*`, `content/images/rp14_*`, `content/images/rp15_*` … (+15) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P4.4 | Images for rp16, rp17, rp18, rp19, rp20, rp21, rp22: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/rp16_*`, `content/images/rp17_*`, `content/images/rp18_*`, `content/images/rp19_*` … (+18) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P4.5 | Images for rp25, rp30, rp26, rp27, rp28: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/rp25_*`, `content/images/rp30_*`, `content/images/rp26_*`, `content/images/rp27_*` … (+12) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P4.6 | Overlays: designed by the bake-off winner (GPT or Gemini), reviewed from the rendered PNG by the other, applied exactly | content | no | `content/images/rp1_*`, `content/images/rp2_*`, `content/images/rp3_*`, `content/images/rp4_*` … (+27) Rules: field-only:ann | overlays: designed, cross-reviewed, applied as reviewed; overlay geometry and labels; second model re-run on the labelled images (picture, facts); second model: coverage re-run with the image labels; rendered: spot view and overlay kinds |
| P4.V | Phase 4 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P5.1 | Practice questions for rp1, rp2, rp3: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp1.json`, `content/questions/rp2.json`, `content/questions/rp3.json`, `content/figs/rp1_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.2 | Practice questions for rp4, rp5, rp6: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp4.json`, `content/questions/rp5.json`, `content/questions/rp6.json`, `content/figs/rp4_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.3 | Practice questions for rp7, rp8, rp9: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp7.json`, `content/questions/rp8.json`, `content/questions/rp9.json`, `content/figs/rp7_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.4 | Practice questions for rp10, rp11, rp29: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp10.json`, `content/questions/rp11.json`, `content/questions/rp29.json`, `content/figs/rp10_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.5 | Practice questions for rp12, rp13, rp14: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp12.json`, `content/questions/rp13.json`, `content/questions/rp14.json`, `content/figs/rp12_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.6 | Practice questions for rp15, rp23, rp24: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp15.json`, `content/questions/rp23.json`, `content/questions/rp24.json`, `content/figs/rp15_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.7 | Practice questions for rp16, rp17, rp18: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp16.json`, `content/questions/rp17.json`, `content/questions/rp18.json`, `content/figs/rp16_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.8 | Practice questions for rp19, rp20, rp21, rp22: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp19.json`, `content/questions/rp20.json`, `content/questions/rp21.json`, `content/questions/rp22.json` … (+5) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.9 | Practice questions for rp25, rp30, rp26: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp25.json`, `content/questions/rp30.json`, `content/questions/rp26.json`, `content/figs/rp25_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.10 | Practice questions for rp27, rp28: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/rp27.json`, `content/questions/rp28.json`, `content/figs/rp27_*`, `content/figs/rp28_*` … (+1) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P5.V | Phase 5 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P6.1 | Rapid review for rp1, rp2, rp3: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp1.json`, `content/rapid/rp2.json`, `content/rapid/rp3.json`, `content/figs/rp1_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.2 | Rapid review for rp4, rp5, rp6: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp4.json`, `content/rapid/rp5.json`, `content/rapid/rp6.json`, `content/figs/rp4_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.3 | Rapid review for rp7, rp8, rp9: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp7.json`, `content/rapid/rp8.json`, `content/rapid/rp9.json`, `content/figs/rp7_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.4 | Rapid review for rp10, rp11, rp29: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp10.json`, `content/rapid/rp11.json`, `content/rapid/rp29.json`, `content/figs/rp10_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.5 | Rapid review for rp12, rp13, rp14: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp12.json`, `content/rapid/rp13.json`, `content/rapid/rp14.json`, `content/figs/rp12_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.6 | Rapid review for rp15, rp23, rp24: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp15.json`, `content/rapid/rp23.json`, `content/rapid/rp24.json`, `content/figs/rp15_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.7 | Rapid review for rp16, rp17, rp18: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp16.json`, `content/rapid/rp17.json`, `content/rapid/rp18.json`, `content/figs/rp16_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.8 | Rapid review for rp19, rp20, rp21, rp22: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp19.json`, `content/rapid/rp20.json`, `content/rapid/rp21.json`, `content/rapid/rp22.json` … (+5) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.9 | Rapid review for rp25, rp30, rp26: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp25.json`, `content/rapid/rp30.json`, `content/rapid/rp26.json`, `content/figs/rp25_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.10 | Rapid review for rp27, rp28: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/rp27.json`, `content/rapid/rp28.json`, `content/figs/rp27_*`, `content/figs/rp28_*` … (+1) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P6.V | Phase 6 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P7.1 | Drills for rp1, rp2, rp3, rp4, rp5, rp6, rp7, rp8, rp9, rp10, rp11, rp29: sort / multi / order, a why for every item and step | content | yes | `content/drills/d_rp1_*`, `content/drills/d_rp2_*`, `content/drills/d_rp3_*`, `content/drills/d_rp4_*` … (+9) | drills: every topic has one; items, whys, balance; second model: drill facts; rendered: drill end screens clickable |
| P7.2 | Drills for rp12, rp13, rp14, rp15, rp23, rp24, rp16, rp17, rp18, rp19, rp20, rp21, rp22: sort / multi / order, a why for every item and step | content | yes | `content/drills/d_rp12_*`, `content/drills/d_rp13_*`, `content/drills/d_rp14_*`, `content/drills/d_rp15_*` … (+10) | drills: every topic has one; items, whys, balance; second model: drill facts; rendered: drill end screens clickable |
| P7.3 | Drills for rp25, rp30, rp26, rp27, rp28: sort / multi / order, a why for every item and step | content | yes | `content/drills/d_rp25_*`, `content/drills/d_rp30_*`, `content/drills/d_rp26_*`, `content/drills/d_rp27_*` … (+2) | drills: every topic has one; items, whys, balance; second model: drill facts; rendered: drill end screens clickable |
| P7.4 | Memory scenes for wave 1 (>= 6), placed in their topics | content | no | `content/palace/pal_rp1_*`, `content/palace/pal_rp2_*`, `content/palace/pal_rp3_*`, `content/palace/pal_rp4_*` … (+57) Rules: insert-only:palace | memory scenes; second model: memory-scene facts; second model: coverage re-run where scenes were placed |
| P7.5 | Concept homes and the study path (diag, unit stages, final); weak-spot threads work on real content | content | no | `content/concepts.json`, `content/path.json`, `audit/P7.5.md` Rules: field-only:home,labels | concept homes; study path; rendered: pacing promise, page self-test, weak spots on real content |
| P7.V | Phase 7 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P8.1 | Wave-1 click-through: every cardio feature (F1-F42), PLAN-2 contract (K1-K22) and new feature (N1-N6), real clicks at 1280 and 400 px, both themes | document | no | `audit/CLICKTHROUGH-W1.md`, `audit/P8.1.md` | click-through parity; rendered: whole page clean |
| P8.2 | Publish Version 1 (the reproductive half) as a NEW artifact (needs the user) | user | no | — | (see §10 Goal) |
| P8.3 | Live check of Version 1 | user | no | — | (see §10 Goal) |
| P8.V | Phase 8 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P9.1 | Topics en1, en2, en3: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/en1.json`, `content/topics/en2.json`, `content/topics/en3.json`, `content/figs/en1_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P9.2 | Topics en4, en5, en6: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/en4.json`, `content/topics/en5.json`, `content/topics/en6.json`, `content/figs/en4_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P9.3 | Topics en7, en8, en9: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/en7.json`, `content/topics/en8.json`, `content/topics/en9.json`, `content/figs/en7_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P9.4 | Topics en10, en11, en12: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/en10.json`, `content/topics/en11.json`, `content/topics/en12.json`, `content/figs/en10_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P9.5 | Topics en13, en14, en15: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/en13.json`, `content/topics/en14.json`, `content/topics/en15.json`, `content/figs/en13_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P9.6 | Topics en16, en17, en18: prose, figures, pretest, grid, sexp, glossary, visual guide; second-model reviewed | content | yes | `content/topics/en16.json`, `content/topics/en17.json`, `content/topics/en18.json`, `content/figs/en16_*` … (+12) | topic structure and bands; blueprint + objective key terms taught; second model: topic facts; second model: figure captions and labels; second model: coverage of objectives and blueprint; second model: figures reviewed as pictures; second model: pretest distractors; rendered: figures legible, no overlapping or clipped labels; rendered: glossary links and cloze targets per topic; rendered: every view, no JS errors, no leaks |
| P9.V | Phase 9 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P10.1 | Images for en1, en2, en3, en4, en5, en6: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/en1_*`, `content/images/en2_*`, `content/images/en3_*`, `content/images/en4_*` … (+15) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P10.2 | Images for en7, en8, en9, en10, en11, en12: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/en7_*`, `content/images/en8_*`, `content/images/en9_*`, `content/images/en10_*` … (+15) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P10.3 | Images for en13, en14, en15, en16, en17, en18: licensed, >= 800 px, verified by a second model, 4 look-alike distractors with whys, placed | content | yes | `content/images/en13_*`, `content/images/en14_*`, `content/images/en15_*`, `content/images/en16_*` … (+15) Rules: insert-only:img | images: files, size, licence, labels, distractors, placement; every topic has an image (or a reasoned NO-IMAGE row); second model: the picture shows the claimed diagnosis; second model: image facts; second model: spot distractors; second model: coverage re-run with the placed images; rendered: images decode |
| P10.4 | Overlays: designed by the bake-off winner (GPT or Gemini), reviewed from the rendered PNG by the other, applied exactly | content | no | `content/images/en1_*`, `content/images/en2_*`, `content/images/en3_*`, `content/images/en4_*` … (+15) Rules: field-only:ann | overlays: designed, cross-reviewed, applied as reviewed; overlay geometry and labels; second model re-run on the labelled images (picture, facts); second model: coverage re-run with the image labels; rendered: spot view and overlay kinds |
| P10.V | Phase 10 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P11.1 | Practice questions for en1, en2, en3: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/en1.json`, `content/questions/en2.json`, `content/questions/en3.json`, `content/figs/en1_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P11.2 | Practice questions for en4, en5, en6: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/en4.json`, `content/questions/en5.json`, `content/questions/en6.json`, `content/figs/en4_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P11.3 | Practice questions for en7, en8, en9: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/en7.json`, `content/questions/en8.json`, `content/questions/en9.json`, `content/figs/en7_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P11.4 | Practice questions for en10, en11, en12: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/en10.json`, `content/questions/en11.json`, `content/questions/en12.json`, `content/figs/en10_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P11.5 | Practice questions for en13, en14, en15: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/en13.json`, `content/questions/en14.json`, `content/questions/en15.json`, `content/figs/en13_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P11.6 | Practice questions for en16, en17, en18: NBME-style, 5 options, whys, comparison table, bottom line, pointed visual | content | yes | `content/questions/en16.json`, `content/questions/en17.json`, `content/questions/en18.json`, `content/figs/en16_*` … (+3) | questions: structure, bands, visuals, tables, bottom lines; second model: question facts and best answer; second model: question distractors; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics (a changed body figure changes what the topic teaches); rendered: practice answered view (why-click, table, bottom line, point); rendered: every view, no JS errors |
| P11.V | Phase 11 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P12.1 | Rapid review for en1, en2, en3: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/en1.json`, `content/rapid/en2.json`, `content/rapid/en3.json`, `content/figs/en1_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P12.2 | Rapid review for en4, en5, en6: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/en4.json`, `content/rapid/en5.json`, `content/rapid/en6.json`, `content/figs/en4_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P12.3 | Rapid review for en7, en8, en9: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/en7.json`, `content/rapid/en8.json`, `content/rapid/en9.json`, `content/figs/en7_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P12.4 | Rapid review for en10, en11, en12: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/en10.json`, `content/rapid/en11.json`, `content/rapid/en12.json`, `content/figs/en10_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P12.5 | Rapid review for en13, en14, en15: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/en13.json`, `content/rapid/en14.json`, `content/rapid/en15.json`, `content/figs/en13_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P12.6 | Rapid review for en16, en17, en18: 5 plausible options, a why for each wrong one, a pinned visual that shows the answer | content | yes | `content/rapid/en16.json`, `content/rapid/en17.json`, `content/rapid/en18.json`, `content/figs/en16_*` … (+3) | rapid: structure, bands, media, points; second model: rapid distractors; second model: rapid facts; figures touched by this task still reviewed (picture, facts, structure); second model: coverage still current for these topics; rendered: rapid answered view; rendered: every view, no JS errors |
| P12.V | Phase 12 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P13.1 | Drills for en1, en2, en3, en4, en5, en6: sort / multi / order, a why for every item and step | content | yes | `content/drills/d_en1_*`, `content/drills/d_en2_*`, `content/drills/d_en3_*`, `content/drills/d_en4_*` … (+3) | drills: every topic has one; items, whys, balance; second model: drill facts; rendered: drill end screens clickable |
| P13.2 | Drills for en7, en8, en9, en10, en11, en12: sort / multi / order, a why for every item and step | content | yes | `content/drills/d_en7_*`, `content/drills/d_en8_*`, `content/drills/d_en9_*`, `content/drills/d_en10_*` … (+3) | drills: every topic has one; items, whys, balance; second model: drill facts; rendered: drill end screens clickable |
| P13.3 | Drills for en13, en14, en15, en16, en17, en18: sort / multi / order, a why for every item and step | content | yes | `content/drills/d_en13_*`, `content/drills/d_en14_*`, `content/drills/d_en15_*`, `content/drills/d_en16_*` … (+3) | drills: every topic has one; items, whys, balance; second model: drill facts; rendered: drill end screens clickable |
| P13.4 | Memory scenes for wave 2 (>= 4), placed in their topics | content | no | `content/palace/pal_en1_*`, `content/palace/pal_en2_*`, `content/palace/pal_en3_*`, `content/palace/pal_en4_*` … (+33) Rules: insert-only:palace | memory scenes; second model: memory-scene facts; second model: coverage re-run where scenes were placed |
| P13.5 | Concept homes and the study path (diag, unit stages, final); weak-spot threads work on real content | content | no | `content/concepts.json`, `content/path.json`, `audit/P13.5.md` Rules: field-only:home,labels | concept homes; study path; rendered: pacing promise, page self-test, weak spots on real content |
| P13.V | Phase 13 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P14.1 | Engine re-sync with the final cardio engine: every cardio region that changed since P2.1 ported or reasoned out (computed, not remembered) | engine | no | `engine/*`, `audit/P2.*`, `audit/ENGINE-RESYNC.md`, `audit/P14.1.md` | re-sync: every changed region answered; rendered: every engine contract still holds on real content; stub page still green with the re-synced engine |
| P14.2 | Whole-block integration: cross-topic duplicates, difficulty spread, mastery channels, glossary reach, threads across waves | content | no | `content/*`, `audit/P14.2.md` Rules: reason-per-file | integration; concept threads cross topics; rendered: glossary reach, search, pacing, self-test; audit/P14.2.md lists every file this task changed with a reason |
| P14.3 | Accessibility, legibility and phone width across the whole block (every figure, every view, both themes) | content | no | `engine/*`, `audit/P2.*`, `content/figs/*`, `audit/P14.3.md` Rules: reason-per-file | rendered: a11y + legibility + 400 px; audit/P14.3.md lists every file this task changed with a reason |
| P14.V | Phase 14 verification by a fresh verifier (token + seeded sample + real clicks) | verification | no | — | token + seeded sample + report + clicks |
| P15.1 | Final click-through: every feature F/K/N over both waves, real clicks at 1280 and 400 px, both themes -> audit/CLICKTHROUGH-FINAL.md | document | no | `audit/CLICKTHROUGH-FINAL.md`, `audit/P15.1.md` | click-through parity; rendered: whole page clean |
| P15.2 | Publish Version 2 (the whole block) to the SAME artifact URL as Version 1 (needs the user) | user | no | — | (see §10 Goal) |
| P15.3 | Live check of Version 2 | user | no | — | (see §10 Goal) |
| P15.V | Reconciliation: every task listed with its final status; every phase token refreshed; create .repro-complete | verification | no | — | (see §10 Goal) |

---

## §11 Timeline

The BSE 638 final is **Fri 9 Oct 2026, 1:30 PM**; the anatomy practical is **Fri 2 Oct**. Group G1 (pelvic,
perineal and breast anatomy) is the first topic task for that reason. The page is rebuilt at every close, so the user
can study wave-1 topics locally as they land (`python serve.py`, then http://127.0.0.1:8744/repro-endo-path.html);
progress there can be moved to the published artifact with Export/Restore.

| Target | Milestone |
|---|---|
| Sat 26 Sep | P0, P1 (needs the user's approval to download Canvas files) |
| Sun 27 Sep | P2 engine (six tasks, serial) |
| Mon 28 – Tue 29 Sep | P3 wave-1 topics (10 tasks, 3 at a time), P3.V |
| Tue 29 – Wed 30 Sep | P4 images + overlays (needs approval to download openly licensed images) |
| Wed 30 Sep – Thu 1 Oct | P5 practice questions |
| Thu 1 – Fri 2 Oct | P6 rapid review, P7 drills / scenes / path |
| **Sat 3 Oct** | **P8: click-through, publish Version 1 (the reproductive half) — six days before the final** |
| Sun 4 – Thu 8 Oct | Wave 2 (endocrine): P9–P13 |
| Sat 10 – Mon 12 Oct | P14 integration and engine re-sync; P15 publish Version 2 (same URL) |

If a milestone slips, nothing is dropped (the gate forbids it); the orchestrator reports the new date.

---

## §12 What only the user can do

1. **Approve downloads** (asked in chat with names and sizes): the Canvas lecture files and BiCEP objective documents
   listed in CANVAS-SCOPE.md (about 700 MB, saved outside the tracked folders), and openly licensed medical images from
   Wikimedia Commons / CDC PHIL / NIH Open-i (each ≤ 2 MB).
2. **Approve publishing** Version 1 (new artifact) and Version 2 (same URL).
3. **Decide** on any image that is only available under a non-commercial licence.
4. Keep Chrome signed in to Canvas while P1 runs (the Claude in Chrome extension connected).
5. Create `.repro-abort` only if the plan should stop.

---

## §13 Environment notes

- Windows 11. The Bash tool is Git Bash (real bash); commands given **to the user** must be PowerShell 5.1 (no `&&`).
- Python: `python` = 3.13 at `C:\Users\varsh\AppData\Local\Programs\Python\Python313\python.exe`; available:
  python-docx, pypdf, PyMuPDF (`fitz`), Pillow; `pdftotext` is on PATH. No python-pptx: read `.pptx` with `zipfile`.
- Chrome: `C:\Program Files\Google\Chrome\Application\chrome.exe` (headless probe and renders).
- GPT: the Codex CLI (`codex exec`, model from `~/.codex/config.toml`, gpt-6-sol on 2026-09-26), prompt on stdin.
- Gemini: key in `C:\Users\varsh\.gemini\antigravity\scratch\hybrid_swarm\.env`; gemini-3.5-flash works (503s under load
  are retried); gemini-3.1-pro-preview has no quota on this key; gemini-2.5-pro is retired.
- Heredocs through the Bash tool may lose backslashes: write patch scripts with the Write tool and run them.
- Never `cd` into the cardio outputs folder (its Stop hook gates sessions whose cwd is inside it). Read it by path.
- Ports: this project serves on 8744 (cardio uses its own). `serve.py` sends no-cache headers.
- Hybrid-swarm hook output may appear in tool results; ignore it.

---

## Appendix A — tooling verified by the planning session (2026-09-26)

Everything below was run by the planning session on 2026-09-26; the new orchestrator repeats P0.1–P0.3 anyway (the
gate files may change between now and then, and P0 is cheap).

| What | Result |
|---|---|
| Canvas pull (Canvas REST API through the user's logged-in Chrome) | 41 sessions, 326 objectives across BSE 638 weeks 1–8 and BSE 612 week 2 → `scope/CANVAS-SCOPE.md` (objective count verified by the gate's own parser); BiCEP objective documents, lecture files and quizzes identified (ids in the file) but not downloaded |
| Step 1 blueprint | 523 items over 48 topics (398 hi, 122 mid, 3 lo) with key terms → `scope/STEP1-BLUEPRINT.md` |
| Topic map | every objective assigned to an accountable topic (en1 and en8 have no Canvas objectives: blueprint-only) → `scope/TOPIC-MAP.md` |
| `python check_repro.py --demo` | 12 of 12 faked-work cases caught: hand-written DONE, skipping a phase, guessed verifier token, BLOCKED without reasons, DROPPED, edit outside a task (lock), 4 tasks in parallel, IN_PROGRESS without a workspace, forged close record whose checks fail, FAILed verification marked DONE, BLOCKED used to skip, gate files edited without a note. The real ledger is never touched. |
| `python check_repro.py --selftest` | demo all caught; the runtime probe ran on a copy of the live cardio page with **0 section errors, 0 JS errors** (15 s) |
| Workspace cycle (in a throwaway copy of the project) | `--start` made the workspace and printed OWNS; `--status --ws` passed; `--close` listed the out-of-scope edit as drift, refused until `--ack-drift`, discarded it (main untouched), merged the owned files, re-checked on main, ran the regression pass and wrote the DONE row; a hand edit on main was reported as `MAIN CHANGED OUTSIDE --close`; the Stop hook blocked inside the project, released outside it, and reported the swapped gate file |
| `python xmodel.py ping codex` / `ping gemini` | GPT via Codex CLI (model gpt-6-sol) answers; Gemini: gemini-3.5-flash answers (503s under load are retried with backoff), gemini-3.1-pro-preview has no quota on this key, gemini-2.5-pro is retired |
| Calibration, GPT (codex) | factcheck **passed** (6/6 planted errors caught, 0 false alarms on 10 true statements); grade **passed** (every planted throwaway caught, 0 false alarms); coverage **passed** (the untaught item called missing, the taught ones not); imgverify **passed** (true diagnosis yes, false diagnosis no); figreview **passed** (planted GnRH→TRH and LH/FSH→TSH/ACTH swaps caught as errors, the correct figure scored 7–8/10 with no false error) |
| Calibration, Gemini (flash) | factcheck **passed** (6/6, 0 false alarms); grade **passed** |
| Stub fixtures | `fixtures/stub` (2 complete topics: every body-row kind, 6 questions, 6 rapid items, sort/multi/order drills, 2 figures, 2 images with all 9 overlay kinds, glossary, guides, memory scene, concept homes, path) and `fixtures/stub-partial` (+ a topic with no items and no stage): both load cleanly through `repro_common.Content`; both figures render legibly with no overlapping labels (checked as PNG) |
| Figure reviewer strictness | on its first calibration GPT failed the planning session's own "good" figure for missing arrowheads and an undrawn feedback loop — it is strict about figures that only look right, which is the point |

## Appendix B — decisions made by the planning session

1. **One combined block, two waves.** Reproductive first (the course final is 9 Oct), endocrine second.
2. **Ids** `rp1–rp30`, `en1–en18` (never collide with cardio's `f1 p1 r1 c1 ...` in the shared hub). rp30 (prenatal
   care) was split out of rp25 because 24 objectives would not fit one lesson; it sits after rp25 in the block.
3. **Two yield axes.** `yld` = Step 1 yield, `exam` = course-final likelihood; the student toggles which one drives
   the rail, filters and priorities. Cardio kept them equal; here they differ by design.
4. **American spelling** (USMLE spelling), enforced.
5. **Content as one object per file + an adapter build**, instead of cardio's layered patches: parallel tasks never
   collide, every item is hashable for second-model records, and the engine is shared with cardio by re-sync.
6. **GPT as the default judge, Gemini as backup and adjudicator**, both calibrated on planted errors; Claude never
   judges Claude's text.
7. **Nothing is droppable.** BLOCKED only for user-dependent work.
8. **Exam date** defaults to the BSE 638 final (2026-10-09) under its own storage key (`reproendo.examDate`), so it
   does not overwrite the Step 1 date the cardio page uses.
