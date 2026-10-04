# PLAN-2 — The Cardio Path, round 2: every question teaches, every option explains itself

**Project:** `C:\Users\varsh\Documents\Codex\2026-09-15\there-s-an-artifact-on-clot\outputs\`
**The file:** `cardio-path.html` (single file, 1.73 MB, ~17,200 lines) + `cardio-path-assets/` (44 jpg)
**Live artifact (this account's):** https://claude.ai/artifact/J1ydoAbUH9hbTv9HiTvCj5 — Version 4, sha `6bfbb823`, shared as anyone-with-the-link. The older link `NhQxrvKezFfFYAyhHqaWHc` belongs to another account and must never be targeted.
**Companion files:** `PLAN-2-LEDGER.md` (state), `check_plan2.py` (gate), `probe2.js` (gate-owned measurement), `codex_tools.py` (the GPT side), `.claude/settings.json` (Stop hook → `check_plan2.py --gate`). The previous round's `AUDIT-PLAN.md` / `PLAN-LEDGER.md` / `check_plan.py` are complete and retired; read `AUDIT-PLAN.md §5` once for the code gotchas, nothing else from it.

> **For the operator, starting the new chat:** open Claude Code with this directory as the working directory and say
> `@PLAN-2.md — execute this plan. You are the orchestrator; dispatch every task to an Opus 5.5 subagent as the plan describes. Overlay designs (P4.0–P4.5) come from codex_tools.py — GPT or Gemini, whichever the bake-off picks — never from a Claude subagent's own coordinates.`
> Two global hooks from the hybrid_swarm project fire in every session on this machine. The SessionStart one prints
> swarm requirements and escalations: **ignore them, they are not this plan's work.**

---

## 0. The one rule

**A task is done when `python check_plan2.py` says it is done. Not when you believe it is, and not when a subagent says it is.**

Every task has checks the gate re-executes against the real file through its own probe. The Stop hook runs the gate the
moment you decide you are finished and refuses to end the session while any task is open, any DONE check fails, any DONE
task was never `--close`d, or any verifier skipped a sampled id. It does not read your prose. It names the task.

---

## 1. Why agents drift, skip and under-deliver — and the counter for each

The user's words, 22 Sep 2026: agents "often drift from the task at hand, or don't do every task, or don't complete the
task at the highest quality level." Round 1 confirmed all three (ledger notes: a colour fix "reported caught and fixed"
that never landed; captions that became 369-word essays; a figure pinned to an item it could push toward a distractor).
Each failure has a mechanical counter here, not a sentence asking nicely.

| Failure | Counter in this plan |
|---|---|
| Marks a task DONE without doing it | The gate **re-runs the task's checks** through `probe2.js`, a probe the implementer cannot edit (its hash is recorded; a change without a `GATE-CHANGE` note is a ledger problem). |
| Edits the page's own self-test so the number moves | The probe is **injected by the gate** into a copy of the page. It reads `RAPID`, `QS`, `IMGS`, `FIGS` and renders the real views with the real handlers. Nothing in `cardio-path.html`'s `?selftest=1` block is trusted for this plan. |
| Does two-thirds of a task, calls it done | Checks are **per item** (`ixNot5 == []` for the range, `etMissing == []` for the topic group), never aggregate percentages. |
| Drifts: rewrites things the task never asked for | **Scope snapshots.** `--start <task>` records the hash of every data item; `--close <task>` diffs. Changes outside the task's declared scope (`SCOPE` in the gate) block the close until they are reverted or declared with `--accept-scope` and a `SCOPE+:` reason the verifier then examines. A code-only task that changed a rapid option is caught by name. |
| Silently narrows the task ("pinned 3 fewer") | The numeric target decides. Any deliberate narrowing goes in the audit doc as a `NO-VISUAL` / `NARROWER` row with a reason, and the gate counts those rows against the remaining ids. |
| Implements something other than the contract, so nothing can find it | Every task names its **contract**: field names (`r.w`, `q.et`, `q.bl`, `r.pt`), attributes (`data-why`, `data-dwhy`), classes (`.optwhy`, `.rfcat`, `.rfsay`, `.setsummary`). The probe looks for exactly those. §8 lists them. |
| Quality below the bar (throwaway distractors, restating whys) | Machine proxies where they exist (throwaway regex, why length and novelty, table shape, say-line names the answer) **plus a second model**: GPT grades every distractor in every range through `codex_tools.py grade-rapid`, and a distractor it calls a throwaway blocks the task until replaced. Overlays are **designed** by a second model (GPT or Gemini, chosen by a blind bake-off) and **reviewed** from the rendered PNG by the other one; a review under 7/10 or any callout covering its finding blocks. |
| A model is forced into the wrong shape of solution | The overlay prompt hands the model the image and the teaching content, not the old markup: it chooses the number of callouts, the forms (outline, polygon, arrow, bracket, spotlight, magnified inset, pin-only) and the wording. If the chosen model cannot pass review on an image in three tries, the other model gets that image. |
| Verifier samples the easy ones | `--verify P<n>` prints a **seeded sample** derived from the file hash. The verifier must write a verdict for every id in it; a missing id is a ledger problem. |
| Verification by the agent that did the work | Each phase ends with `P<n>.V` by a **fresh** subagent with a different prompt; its token is derived from the file hash and cannot be guessed. |
| Cherry-picks easy tasks | Tasks close **in order** within a phase; a phase cannot start until the previous phase is all terminal. |
| Forgets the list after compaction | `PLAN-2-LEDGER.md` is the memory. `python check_plan2.py --next` always says what to do now, and prints the `--start`/`--close` commands for it. |
| Subagent reports success, orchestrator believes it | The orchestrator never writes DONE from a report. `--close` runs the checks and prints the evidence line; the row is that line. |
| Stops to "ask a question" and never resumes | Asking is done by marking the task `BLOCKED` with the three fields. The gate honours that; anything else is refused. |
| Three rounds of the same fix, still failing | Cap: three implementer rounds, then `BLOCKED` with `TRIED:` listing all three. The orchestrator does not attempt the edit itself. |

None of this works if the ledger is edited from memory. **Run `--close`, then write the row from what it printed.**

---

## 2. Session-start protocol (every session, and again after every context compaction)

1. `cd` to the project directory. Confirm `pwd` ends in `outputs`.
2. Read `PLAN-2-LEDGER.md` top to bottom. Read the CURRENT POSITION block twice.
3. Read this file's §3, §5, §7 and the section of the current task.
4. `python check_plan2.py --next`. Its output is the instruction. Do not choose a task by memory. (First run takes ~50 s: it renders the page at two viewports in headless Chrome. Results are cached by file hash.)
5. If it prints LEDGER PROBLEMS, fix them before any new work.
6. For interactive checking, start the test server in the background if it is not running (`python -m http.server 8743 --bind 127.0.0.1`) and open `http://127.0.0.1:8743/cardio-path.html` in the browser pane; wait 8 s before scripting it. The gate does **not** need the server.

---

## 3. The task loop (orchestrator)

You, the main chat, are the **orchestrator**. You do not edit `cardio-path.html` yourself after Phase 0. You dispatch, verify and record.

For the task `python check_plan2.py --next` names:

1. `python check_plan2.py --start <TASK>` (page-editing tasks). Set the ledger row to `IN_PROGRESS` and update CURRENT POSITION.
2. Back up the file: `cp cardio-path.html .plan2/backups/<TASK>-<sha8>.html` (create the directory once).
3. Dispatch an **Opus 5.5 subagent** with the template in §3.1, pasting the task's full section from §9 and the contract lines from §8 it names. **Only one subagent that edits `cardio-path.html` may run at a time.** Document-only work (audit rows, click-through doc) may run in parallel.
4. When the subagent returns, do **not** copy its claims. Run `python check_plan2.py --close <TASK>`.
   - `CLOSED`: write the row `DONE` with the evidence line it printed (it contains `sha:` and `closed:`), plus one line of before/after numbers. Update CURRENT POSITION.
   - `OUT-OF-SCOPE CHANGES`: read the ids. If they are collateral damage, restore from the backup and re-dispatch with "touch only …". If each is a deliberate fix the task needed, re-run `--close` with `--accept-scope` and put `SCOPE+: <ids> reason: …` in the cell.
   - `CHECKS FAIL`: re-dispatch the same subagent (SendMessage) with the exact failing lines. Three rounds; then `BLOCKED` with the three fields.
5. At `P<n>.V`, dispatch a **fresh** verifier subagent with §3.2. It runs `--verify P<n>`, judges every sampled id, clicks the surfaces, and returns the evidence line; you paste it.
6. `python check_plan2.py --next` again. Repeat.

Append one line to the ledger's Notes for anything the next session needs.

### 3.1 Implementer template (Opus 5.5)

```
You are implementing ONE task of PLAN-2.md for The Cardio Path study tool. Do only this task. Touch only what its
SCOPE line allows; the gate diffs every data item and will refuse the task if anything else changed.

PROJECT: C:\Users\varsh\Documents\Codex\2026-09-15\there-s-an-artifact-on-clot\outputs\cardio-path.html
SERVER:  http://127.0.0.1:8743/cardio-path.html is being served. Open it in the browser pane, wait 8 s, then use
         javascript_tool to inspect internals (QS, RAPID, IMGS, FIGS, DRILLS, RAPID_MEDIA, S, all functions).
         window.__cardioAudit() must stay all-empty. Do not use `find` in page scope (it is window.find).
GATE:    The task is done only when `python check_plan2.py --status P<n>` shows every line of this task `ok`.
         Run it yourself before reporting (first run ~50 s). Never edit check_plan2.py, probe2.js or codex_tools.py;
         if a check cannot pass because the contract is wrong, say so in your reply and stop.
RULES:   Edit with small, surgical python replace scripts (assert count==1 before replacing). Leave a 2-5 line
         comment beside every change saying what was wrong and why this is right. Never rewrite blocks wholesale.
         Do not touch the ledger. Do not start other tasks. Do not "also fix" things outside SCOPE.
CONTRACT: <paste the §8 lines this task names>
TASK:    <paste the task's full section from §9, including Check, Scope and Done-when>
QUALITY: <paste §7 for any content task>
GOTCHAS: <paste §5>
WHEN DONE: paste the `--status P<n>` lines for this task, then reply with exactly this JSON and nothing after it:
{"task":"<ID>","changed":["<function/section names>"],"before":"<numbers>","after":"<numbers>",
 "status_lines":"<pasted>","sha":"<first 8 hex of sha256 cardio-path.html>","narrowed":"<what you did NOT do and why, or none>"}
```

### 3.2 Verifier template (one per phase, a fresh subagent)

```
You did NOT do the work in phase <n> of PLAN-2.md and you have no stake in it passing. Your job is to find what was
skipped, faked, drifted or done below the bar. PROJECT/SERVER/GOTCHAS as in the implementer template.
1. Run `python check_plan2.py --verify P<n>`. If it prints PHASE NOT VERIFIABLE, stop and report the lines verbatim.
   Otherwise it prints `verifier-run: <token>` and a SEEDED SAMPLE of ids. You must judge every one of them.
2. For each sampled id, open it in the running page (rapid: put its id in S.rf.set; question: S.ps.set; image: S.sp.set)
   and judge it against PLAN-2.md §7. Write `<id>=PASS` or `<id>=FAIL(<why, 8 words>)`. A FAIL reopens the task.
3. Click the surfaces the phase changed with REAL clicks (computer + ref), not JS calls: every wrong option, the
   why it reveals, the category chip, the figure highlight, the table, the summary rows, the overlays. Attach
   window.__errs=[]; window.addEventListener('error',e=>window.__errs.push(e.message)); report it.
4. Read the SCOPE+ declarations in the phase's evidence cells and judge each one: was it a needed fix or drift?
5. Phase 4 only: open .plan2/overlays/<key>.preview.png for every sampled image and say whether any shape or pin
   covers its finding. Phase 5 only: repeat step 3 at 400 px width.
Reply with: the `verifier-run:` line exactly, then `sampled: <id>=PASS ...` for every id, `clicked: <list>`,
`errors: <window.__errs>`, `scope+: <verdicts>`, and (P4) `looked: <keys>` / (P5) `400px: <what you checked>`.
```

### 3.3 Overlay operator template (P4.2–P4.5; an Opus subagent runs the tool, a second model designs the markup)

```
You are the operator for overlay batch <A/B/C/D> of PLAN-2.md. You do not design markup and you do not decide
coordinates; the model does. For each key in the batch:
1. PYTHONIOENCODING=utf-8 python codex_tools.py overlay <key>
   -> .plan2/overlays/<key>.json (the design: callouts with kind, geometry, label) + <key>.preview.png.
   The provider is the bake-off winner for that image's modality (.plan2/overlays/PROVIDER); the tool falls back
   to the other model by itself if the first cannot produce a valid design in three attempts.
2. Look at the preview PNG (Read tool). If a callout is plainly on the wrong structure, run step 1 again (models are
   not deterministic), or run it with --provider <other>. Never hand-place. At most 2 callouts per image may be
   adjusted by you, each logged in the json under "adjustments":[{"i":<n>,"reason":"..."}].
3. Apply the design to IMGS.<key>.ann in cardio-path.html exactly as the json has it: every callout's kind and
   geometry fields AND its label text (the model may have merged, split or reworded the findings; the gate checks
   that every original finding's key terms survive). One python replace per image.
4. PYTHONIOENCODING=utf-8 python check_plan2.py --runtime      (refreshes the probe with the applied markup)
5. PYTHONIOENCODING=utf-8 python codex_tools.py overlay-review <key>
   -> the OTHER model reviews the rendered PNG. Any callout covering or missing its finding, or overall < 7/10,
   means back to step 1 (a review says why; feed nothing to the model yourself, just re-run).
Report per key: provider, kinds used, area sum/max, review score. The gate checks all of it.
```

### 3.4 Evidence cell format

One line, no pipes. Page-editing task: `sha:1a2b3c4d closed:1a2b3c4d ix 0-39: 3->5 options, 160 whys added, grade 0 implausible`
Document task: `file:P2-TABLES-AUDIT.md rows 41`. Verification: `verifier-run: a1b2c3d4e5 sampled: 12=PASS 87=PASS 140=FAIL(say-line names distractor) ... clicked: ... errors: []`
BLOCKED: `TRIED: … NARROWER: … NEEDS-USER: …`. Scope declarations: `SCOPE+: rw:12,rw:13 reason: whys referenced an option renamed in this range`.

---

## 4. Before you stop

The Stop hook runs `check_plan2.py --gate`. It releases only when every task is terminal, every DONE check passes, every
page-editing DONE task has a `--close` record, and every verifier judged its sample. Before ending a turn:

1. `python check_plan2.py --next` — if it prints problems, fix them now.
2. CURRENT POSITION updated. Notes appended.
3. If you need the user (the only planned case is the publish at P6.2), mark the task `BLOCKED` with `TRIED:`,
   `NARROWER:`, `NEEDS-USER:` — then the gate lets you stop and ask.

The gate gives up after 8 consecutive refusals so it can never trap a session. The operator can release it any time
with `.plan2-abort`. `.plan2-complete` is created only by P6.V, only when `--next` prints ALL TASKS TERMINAL.

---

## 5. Environment facts and gotchas

**Tooling**
- Python 3.13 at `C:\Users\varsh\AppData\Local\Programs\Python\Python313\python.exe`; headless Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe`. No git here. Console is cp1252: prefix python one-liners that print page text with `PYTHONIOENCODING=utf-8` or they die on `⁺`.
- The gate renders a **copy** of the page (`.plan2/probe-copy.html`, with a `<base href>` back to `outputs/`) from `file://`, at 1280×900 and 400×800, ~25 s each. `.plan2/selftest.json` is keyed to the html hash and the probe hash; `--runtime` forces a refresh. Never publish `.plan2/`.
- The Codex CLI (`codex exec`, GPT model from `~/.codex/config.toml`, signed in through the desktop app) answers a trivial prompt in ~30 s and a structured-output call with an image in ~1–2 min. `codex_tools.py` wraps it; nothing else calls it. It runs in `-s read-only` and cannot touch the page.
- The browser pane's screenshots time out on this page; use `read_page`, `find`, `get_page_text`, `javascript_tool`. Real clicks: `computer` with a `ref`. The dev server truncates the 1.7 MB document about one load in three (`ERR_CONNECTION_RESET`, then `QS undefined`): retry `navigate` until `typeof conceptThreads === 'function'`.
- `computer` key `"slash"` does not deliver `key === "/"`; open search by clicking its button.
- Bash heredocs with unbalanced `'` break; write long content with the Write tool to a scratch file and splice with python.
- Publishing: only the user can approve it (auto-mode blocks "Modify Shared Resources"); target `J1ydoAbUH9hbTv9HiTvCj5` only.

**The code** (from round 1, still true — costs hours if ignored)
- Top-level `const`/`let` are not on `window`. `typeof S` works; `window.S` is undefined. A second classic `<script>` can see them, which is how the probe works.
- Topic bodies are rewritten at load by `REWRITE.<id>` and a chain of `apply*()` / `place*()` IIFEs; **order matters**. New placement IIFEs go at the end, before `load();`.
- **Options are permuted at load** by `permuteOptions()` (line ~15920): `QS` by `q.id`, `RAPID` by `"r"+i+r.q.slice(0,12)`, pretests by topic. So: any map of per-option text is **keyed by option text**, never by index (`NB_WHY`, `DRILL_WHY`, `IMGS.ww` do this right; `q.w` is index-keyed but re-mapped inside `permuteOptions`). New option data (`RAPID_OPTS`, `RAPID_W`, pretest `p.w`) must be applied **before** `permuteOptions()` runs, keyed by question text, and the runtime object (`r.w`, `p.w`) keyed by option text.
- `RAPID_X` entries assigned *after* `applyRapidX()` never take effect. `RAPID_MEDIA` is keyed by the rapid item's **normalised question text**, values `fig:<key>` / `img:<key>`; `rapidMedia(r)` resolves it. Rapid ids `r.i` and `r.ix` are assigned at load by hashing the question text — **never change a rapid question's text** (the id, the user's saved progress and every keyed map hang off it).
- `viewRapid()` renders `r.o.map(...)` directly with `"ABCDE"[i]`; after answering, buttons are `disabled`. `viewPractice()` renders `q.w` as a list under "Why each other option is wrong" and disables the buttons. `viewSpot()` uses `"ABCD"[i]` and `buildSpotOpts()` slices `wrong` to 3. These are the three places the click-any-wrong-option contract lands.
- `render()` replaces `main`'s innerHTML on every interaction and re-binds handlers; state lives in `S`. Toggling a why must not require a full re-render that loses scroll — toggle the DOM node and record the open state in `S.ps`/`S.rf` if you re-render.
- `repairState()` deliberately discards a topic `read:true` without `dwell`/`grid`, and a stage `done` without `n`; it keeps unknown fields on `S.rapid[id]` (probe confirmed).
- `save()` and `flushNow()` are no-ops while `window.__SELFTEST` is set. Opening `?selftest=1` is safe.
- Figures: `FIGS.<key> = {cap, svg}`, SVG text in `<text>`/`<tspan>` with theme tokens; `figHTML(key)` wraps them with a `data-zoomfig` Enlarge button; the lightbox scroller is the svg's parent pane (`lbZoomInit`). Images: `IMGS.<key> = {n,url,dx,wrong,ww,look,cred,ann:[{k,x,y,w,h|rx,ry,rot|r,px,py,l}]}`; `imgHTML(key)` draws `.oshape` buttons and leader lines in `.ovlayer`, labels go to the side rail `.annrail` on hover/tap (`wirePins`). "Hide markup" = `.imgbox.raw`.
- `window.__cardioAudit()` (structural) and `?selftest=1` (behavioural) must both stay clean. This plan's own numbers come from `probe2.js` instead; do not add fields to `__selftestExtra` for this plan.
- `S.rf = {set:[ids], i, pick, src}`; `S.ps = {set:[qids], i, pick, shown, conf, src, ans:{}}` (practice ignores option clicks until `conf` is set); `S.sp = {set:[keys], i, pick, opts}`; `S.dr = {id, order, i, missed, last}` (sort/multi) or `{id, placed, pool, checked, perfect}` (order). The probe seeds exactly these shapes.

---

## 6. The findings behind this plan

Measured on sha `6bfbb823` (the live Version 4) by running the page through `probe2.js`, not by reading it. `python check_plan2.py --runtime` reprints all of them.

**What the user asked for, in numbers**
- Rapid review: **240 items, every one with exactly 3 options**, none with a per-option explanation. 9 carry a hedge distractor ("There are none", "Neither", "Either", "Both equally").
- Rapid figures: 211 of 240 items pin a visual (151 diagrams, 60 photographs). In **67** of them the visual's text and annotations never mention the keyed answer — the figure "doesn't actually give you the answer". None has a pointer to *where* in the figure the answer is; the figure is collapsed under a "Why this answer fits — see it drawn out" disclosure. 29 items have no visual.
- Practice questions: 204, all 5-option, all with complete wrong-option notes — but the notes are a **list under the explanation**, the option buttons are disabled after answering, and **0 of 204** use the answer-choice comparison table the renderer already supports (`q.et`). 156 have a visual; in 26 the visual does not carry the answer; 48 have none. No "bottom line".
- Image spot: 44 images, **4 choices each**; only the picked wrong option gets a note; buttons disabled after answering.
- Drills: 349 items, **25 without a why** (all 18 order-drill steps, plus 7 sort/multi items); end screens list misses but nothing is clickable.
- Pretests: 43 items, 4 options, a single general why — the wrong option picked is never addressed.
- Overlays: 44 annotated images, 149 shapes. **8 images have shapes covering more than 35% of the frame** (mi_stages tiles 88% of it in eight boxes; nutmeg 58%; ecg_torsades 56%), **13 have a single shape over 15%** (myxoma_gross: one ellipse over 45% of the picture). That is the "overlay covers the area of interest" complaint, measured.

**Things the user has not asked for that the measurements surface**
- Nine captions run 149–369 words (house band is 32–90); with a say-line now pointing at the answer, the essays belong under a disclosure.
- Inline diagrams render at 0.75 scale at 1280 px, glyphs ~7.5–8.6 px (round 1's own verifier called it sub-threshold and left it); the lightbox at 400 px is fine since round 1's fix.
- Search (632 entries) does not index wrong-option notes, so a distractor a student keeps confusing cannot be searched for.
- Rapid picks are not recorded by text, so Weak Spots' "Specific confusions" can never list a rapid confusion (`confusions()` has no rapid kind).
- No surface answers from the keyboard.
- Throwaway/hedge distractors also exist in practice? No: `longestOption.questions` is 1 (q198) and all 204 have 5 real options — practice is fine on this axis.

---

## 7. The quality bar (paste into every content task)

The test for every explanation-type text: *with only this text, could a student who picked the wrong option see why it was tempting and why it is wrong, and could they pick the keyed option next time for the right reason?*

**Distractors (rapid, spot, pretest).** Each new option is the classic confusion partner — the neighbouring structure, the same-class drug with the opposite property, the other layer, the other side, the look-alike tracing, the other time window — phrased in the same grammatical form and roughly the same length as the keyed answer. Never: a hedge (none/neither/both/either), a different category from what the stem asks (a drug when a structure is asked), a near-duplicate of another option, or a term from another organ system. GPT grades every one; a grade of implausible blocks the task. *Rejected example:* "Which vessels are the main site of resistance?" → "Veins" is fine, "Lymphatics" is a throwaway. *Accepted:* "Arterioles / Large arteries / Capillaries / Venules / Small veins".

**Why-wrong notes (r.w, ww, p.w).** 12–45 words. Name the specific thing that makes the option tempting, then the fact that kills it. Must contain at least three content words that appear in neither the option nor the question (the gate checks this proxy). *Rejected:* "Desmosomes are not the electrical link." *Accepted:* "Desmosomes are the mechanical rivets of the disc; they hold cells together but have no channel, so current cannot pass through them — that is the gap junction's connexon pore."

**Points (r.pt, q.pt).** `hl` is a list of 1–3 strings that appear verbatim in the figure's text nodes or the image's annotation labels — the thing the eye should land on. `say` is one sentence of 8–60 words that starts with what to look at and ends with why it settles the question, and names the keyed answer. *Rejected:* "See the figure." *Accepted:* "Find the **PR interval** row: digoxin slows the AV node, so the tracing shows a long PR with a normal QRS — first-degree block, not bundle-branch block."
If the figure does not contain the answer, **add it to the figure** (a labelled row, an arrow, a small answer panel in the same SVG style), or re-pin to a figure that does, or author a new figure. Never leave a figure that could push a student toward a distractor (round 1's `fetalcirc` on the recurrent-laryngeal item).

**Comparison tables (q.et).** `[head, rows]`: 3–5 columns, the first column is the option text exactly, one row per option, no empty cell, no two rows identical. Columns are the two to four features the stem turns on; the keyed row is the one that matches the stem on all of them. A student should be able to reconstruct the answer from the table alone. *Rejected:* a column "Correct?" with yes/no. *Accepted:* for a murmur question — columns Timing / Manoeuvre that increases it / Site.

**Bottom lines (q.bl).** 8–28 words, one retrievable rule, names the answer. *Accepted:* "A murmur that gets louder on standing or Valsalva is HOCM; every other systolic murmur gets softer."

**Category chip (rapid).** Derived from the item's first concept tag, rendered as 1–6 human words ("ECG pattern", "Drug target", "Embryologic derivative"), so the student knows what *kind* of fact was tested.

**Overlays.** The model designs them; the bar is the student's experience, not a house style. Every finding stays visible (no outline, pin, arrowhead or inset box on top of it); each outline is the smallest form that contains its finding; a spotlight or an inset is used when that is what makes the finding findable; largest outline ≤ 15% of the frame and all outlines plus inset boxes ≤ 35%; nothing filled; labels 10–60 words of causal prose. The teaching content of every original finding survives, in whatever grouping the model chooses. The other model's review of the rendered PNG must find no callout covering or missing its finding and score the design ≥ 7/10.

**Picked option first.** On every answered surface the option the student actually chose shows its why at once; the others open on click, and each toggle carries `aria-expanded`. Highlights (`.hl`) use theme tokens and are checked in both themes by the verifier.

**Prose register.** 10th-grade reading level, causal chain left in ("because X, therefore Y"), no bullet fragments, no mnemonics as explanations.

---

## 8. Contracts (the exact names the probe looks for)

| Surface | Data | DOM after answering |
|---|---|---|
| Rapid options | `RAPID_OPTS[qtext] = [D4, D5]` and `RAPID_W[qtext] = {optionText: why}` applied by `applyRapidFive()` placed **immediately before** `permuteOptions()`; runtime `r.o.length === 5`, `r.w` keyed by option text | 5 `.rfopt` buttons lettered A–E; wrong ones keep `data-why` and are **not** `disabled` (use `aria-disabled="true"` on the keyed/picked ones if needed); clicking a wrong one toggles an `.optwhy` element directly under it containing `r.w[opt]` |
| Rapid feedback | `RAPID_POINT[qtext] = {hl:[...], say:"..."}` applied by `applyRapidPoints()` → `r.pt`; category from `r.tags[0]` via a `TAG_LABELS` map | `.rfcat` chip (1–6 words) beside the verdict; `.rfsay` line above the figure; `details.deepreview` rendered **with the `open` attribute**; matching figure `<text>` nodes get class `hl` (and/or a `rect.hlbox` halo); matching image annotations get `.hot` |
| Rapid state | `S.rapid[id].lastPick` = picked option text, `S.rapid[id].picks` = array | keys `1`–`5` answer; `Enter` = Next |
| Practice options | unchanged data | wrong `.qopt` buttons keep `data-why`, not `disabled`; click toggles `.optwhy` under the button with `q.w[k]`; the existing list stays under a `<details>` |
| Practice explanation | `q.et = [head[], rows[][]]` rows keyed by option text; `q.bl` string; `Q_POINT[q.id] = {hl, say}` → `q.pt` | `.qbl` first inside `.qexp`; table via `tableHTML` inside a wrapper with class `tblwrap et`, rows in display order, keyed row class `etkey`; `.qsay` above the figure; `details.deepreview[open]`; `.hl` in the figure |
| Practice set summary | `S.ps.done = true` after `finishSet()` keeps the set for the summary | `.setsummary` with one `[data-sumq="<qid>"]` row per answered question; click toggles `.sumexp` holding the explanation |
| Spot | `IMGS[k].wrong` has 4 entries, `ww` has all 4 keys; `buildSpotOpts` uses all 4 | 5 `.qopt` lettered A–E; wrong clickable → `.optwhy` with `ww[opt]` |
| Drills | `DRILL_WHY[d.id][itemText]` for every item, including order-drill steps (key = step text) | end screens: every item is a `[data-dwhy="<ix>"]` control; click toggles `.optwhy`; order drills the same on each placed step |
| Pretest | `p.w = {optionText: why}` for every wrong option | `.ptwhy` shows `p.w[picked]` then `p.why`; wrong `.ptopt` keeps `data-why`, not disabled |
| Overlays | `ann[]` copied from `.plan2/overlays/<key>.json`: kinds `r` (x y w h) · `e` (x y rx ry rot) · `c` (x y r) · `poly` (pts [[x,y]…]) · `arrow` (x y = tip, tx ty = tail) · `bracket` (x y → x2 y2) · `spot` (x y rx ry: dim everything outside) · `inset` (x y w h source, ix iy iw ih = where the zoom box sits) · `none` (pin only); every entry has `px py l` | `imgHTML` renders every kind (the gate greps for each `k === "…"` branch); nothing `.fill` above 0.12 opacity; a `data-showall` toggle for hover-only vs all-on markup; the rail and legend as today |
| Image quality | source images ≥ 800 px on the long side, or a `KEEP-SMALL` row in `P4-IMAGES.md`; replacements carry `cred`/`by`/`lic` like the rest | — |
| Picked option | — | on rapid, practice and spot the picked wrong option's `.optwhy` is visible before any further click; toggles carry `aria-expanded` |
| Figures | `FIGS[k].teach` for moved caption text | teach text under a `<details>` beneath the caption |
| Search | `buildIndex()` entries include `w`, `et` cells, `bl`, `say` text | — |
| Weak Spots | `confusions()` rows carry `kind:"rapid"` for rapid pairs | — |

---

## 9. Tasks

Every task: **Goal · How · Check** (verbatim from the gate, `--status` shows them) · **Scope** (what `--close` allows to change) · **Done-when**. Phases close in order; tasks close in order within a phase.

### Phase 0 — claim and baseline

**P0.1 Claim.** Create `.plan2-active` (any content). Run `python check_plan2.py --runtime`; it must print `probeErrors=[]`, `auditListsEmpty true`, `viewFailures []`. Start the dev server for later interactive work. *Check:* `.plan2-active` exists; probe errors `[]`; audit all-empty; all views render. *Scope:* none.

**P0.2 Baseline.** `python check_plan2.py --baseline`; paste the two lines it prints (`BASELINE sha:` and `GATE sha:`) into the ledger's BASELINE block. *Check:* `.plan2/baseline.json` exists; ledger records both shas. *Scope:* none. Document task — no `--start`/`--close`.

### Phase 1 — rapid review: five plausible options, a why for every wrong one, a figure that gives the answer

**P1.1–P1.6 Five options + whys, by ix range** (0–39, 40–79, 80–119, 120–159, 160–199, 200–239).
*Goal:* every rapid item in the range has 5 options and a why-wrong note for each of the 4 wrong ones, at the §7 bar.
*How:* (1) Read the items from the running page: `RAPID.filter(r=>r.ix>=lo&&r.ix<=hi).map(r=>({ix:r.ix,q:r.q,o:r.o,a:r.a,x:r.x}))` — the source literal has pre-permutation order, the page has the truth. (2) For each item write two new distractors and four whys (one per wrong option, including the two existing distractors). (3) Add them to `RAPID_OPTS` and `RAPID_W` (create both constants and `applyRapidFive()` in the first range task, immediately before `permuteOptions()`; later ranges only add entries). Replace any hedge distractor the probe flags (`rapid.throwaway`) with a real one in the same pass. (4) Add one row per ix to `P1-RAPID5-AUDIT.md`: `| ix | NEW | why D4 is plausible (≥20 chars) | why D5 is plausible (≥20 chars) |`. (5) `python check_plan2.py --runtime`, then `PYTHONIOENCODING=utf-8 python codex_tools.py grade-rapid <lo>-<hi>` — GPT grades every distractor; replace any it calls implausible, re-run `--runtime` and the grade until it prints `0 distractor(s) judged implausible`. (6) `--status P1`.
*Check (per ix in range):* exactly 5 options; no duplicates; no empty; no throwaway distractor; keyed option not >1.4× longest; every wrong option has a why of 12–60 words keyed by option text; no why merely restates (≥3 novel content words); audit doc row present; GPT grade current for every ix with no implausible distractor remaining; page audit all-empty.
*Scope:* `ropt`, `rw`, `rx` for ix in the range only. Changing an item outside the range, or any question text, is refused.
*Done-when:* `--close P1.k` prints CLOSED.

**P1.7 Rapid renderer.** *Goal:* the rapid surface shows 5 options; after answering, the option the student picked shows its why at once and every other wrong option reveals its why on click; shows the category; answers from the keyboard; records the pick. *How:* edit `viewRapid()` and its `[data-rfo]` handler (line ~15851) per the §8 contract; add `TAG_LABELS` (30 entries, one per `CONCEPT_TAGS` value, 1–6 words each); record `S.rapid[r.i].lastPick`/`picks` in the answer handler; keydown handler for `1`–`5` and `Enter`; toggles carry `aria-expanded`. Toggling a why must not reset scroll. *Check:* `renderRapid.optionsRendered == 5`; `wrongClickable`; `whyRevealed`; `whyMatches`; `pickedWhyOpen`; `ariaExpanded`; `catChip`; `keyboardPick`; `pickRecorded`; audit all-empty; views render. *Scope:* `rmedia` only (code task; no rapid data may change). *Done-when:* CLOSED.

**P1.8 Rapid media points.** *Goal:* for all 211 pinned items the figure or photo *actively* gives the answer: it contains the answer, the answer element is highlighted, and a say-line tells the student where to look and why it settles the question; the figure is open, not collapsed. *How:* (1) Build `RAPID_POINT` for every pinned item (§7 Points). (2) For the 67 items whose visual does not carry the answer (`rapid.media.answerNotOnMedia` lists them; round 1's Notes list the 16 hardest with what content is missing), add the answer to the visual: a labelled row or annotation in the same SVG style (`FIGS[k].svg`), or re-pin via `RAPID_MEDIA` to a figure that has it, or author a new small figure. Do not unpin. (3) Renderer: `applyRapidPoints()` → `r.pt`; in `viewRapid` render `.rfsay`, pass `open` to `deepReviewHTML`'s details, and after inserting the figure add class `hl` to `<text>` nodes whose text contains an `hl` term (and `.hot` to matching image annotations). *Check:* `pointMissing == []`; `pointNoMatch == []`; `pointSayMissesAnswer == []`; `pointSayBand == []`; `answerNotOnMedia == []`; `renderRapid.detailsOpen`; `highlightCount ≥ 1`; `sayShown`; audit all-empty. *Scope:* `rpt`, `figSvg`, `figCap`, `rmedia`, `rx`. *Done-when:* CLOSED. Large task: the orchestrator may split it into two dispatches (fig-pinned, then img-pinned) but it closes once.

**P1.9 Items without a visual.** *Goal:* 29 → ≤ 10, honestly. *How:* pin only a visual that contains the answer (add a `RAPID_POINT` for each); author a new figure where a cluster of items shares a missing visual (round 1's P4.8 notes name the clusters it refused to fake); for each item left without, add a row `| ix | NO-VISUAL | reason (≥20 chars) | |` to `P1-RAPID5-AUDIT.md`. *Check:* `withoutMedia ≤ 10`; NO-VISUAL rows for every remaining ix; `pointMissing == []`; `answerNotOnMedia == []`; audit all-empty. *Scope:* `rmedia`, `rpt`, `figSvg`, `figCap`. *Done-when:* CLOSED.

**P1.V Verification** by a fresh subagent (§3.2). Sample: 14 rapid ixs. *Check:* token; `sampled:` with every id; `clicked:`.

### Phase 2 — practice: the ScholarRx-style explanation

**P2.1 Practice renderer.** *Goal:* every wrong option is clickable after answering and explains itself in place; keyboard answering; the explanation has slots for the bottom line, the table, the say-line and an open figure with highlights. *How:* edit `viewPractice()` and the `[data-opt]` handler per §8; `.qbl` / `.tblwrap.et` / `.qsay` render only when the data exists (P2.2–P2.7 fill it); highlight logic shared with P1.8 (one helper, `highlightFigure(el, hl)`). *Check:* `renderPractice.optionsRendered == 5`; `wrongClickable`; `whyRevealed`; `whyMatches`; `keyboardPick`; audit; views. *Scope:* none (code only). *Done-when:* CLOSED.

**P2.2–P2.6 Tables + bottom lines by topic group** (f1 f2 f3 p1 · p2 p3 a1 a2 · i1 i2 r1 h1 · v1 n1 n2 c1 · c2 c3 m1 d1 d2). *Goal:* every question in the group has a comparison table (`q.et`) and a bottom line (`q.bl`) at the §7 bar. *How:* read the questions from the running page (post-permutation option text); write `q.et` with the first cell equal to the option text; write `q.bl`; add both through a `Q_TABLES` / `Q_BOTTOM` map keyed by `q.id` applied by one IIFE (create in P2.2, extend after). Add one row per id to `P2-TABLES-AUDIT.md`: `| id | discriminating column(s) | which row settles it and why (≥15 chars) |`. *Check (per id in the group):* table present and well-formed (3–5 columns, one row per option keyed by option text, no empty/identical rows); bottom line present, 8–28 words, names the answer; audit rows; page audit all-empty. *Scope:* `qet`, `qbl`, `qe` for the group's ids. *Done-when:* CLOSED.

**P2.7 Question media points.** *Goal:* every question with a visual has `q.pt`, the visual carries the answer (26 do not), and ≥ 175 questions have a visual (48 have none). *How:* as P1.8 with `Q_POINT[q.id]`; for questions without a visual, attach one only if it contains the answer; the rest get `| id | NO-VISUAL | reason | |` rows in `P2-TABLES-AUDIT.md`. *Check:* `qs.pointMissing == []`; `pointNoMatch == []`; `pointSayMissesAnswer == []`; `visAnsNot == []`; `withVis ≥ 175`; NO-VISUAL rows; `renderPractice.tableShown`, `blShown`, `detailsOpen`, `highlightCount ≥ 1`; audit. *Scope:* `qpt`, `qvis`, `figSvg`, `figCap`, `rpt`. *Done-when:* CLOSED.

**P2.8 Set summary.** *Goal:* "Finish set" shows every answered question — stem, what was picked, the keyed answer — each expandable to the full explanation with its whys and table, so the student can go back over every wrong answer at the end. *How:* `finishSet()` keeps `S.ps` with `done:true`; `viewPractice()` renders `.setsummary` in that state; rows `[data-sumq]` toggle `.sumexp`. The existing stage/diag/final bookkeeping in `finishSet()` must be untouched (the pacing check guards it). *Check:* `summaryRows == 2`; `summaryExpandable`; `paceDays` exact; audit. *Scope:* none. *Done-when:* CLOSED.

**P2.V Verification.** Sample: 10 question ids. *Check:* token; `sampled:`; `clicked:`.

### Phase 3 — image spot, drills, pretests

**P3.1 Spot: five choices, every wrong one explains itself.** *How:* add a 4th `wrong` entry and its `ww` note to all 44 `IMGS` entries (§7 distractor bar — the classic look-alike); `buildSpotOpts` uses all 4; `viewSpot` letters A–E, wrong clickable → `.optwhy`. *Check:* `wrongNot4 == []`; `wwMissing == []`; `renderSpot.optionsRendered == 5`; `wrongClickable`; `whyRevealed`; `whyMatches`; audit. *Scope:* `imgWrong`. *Done-when:* CLOSED.

**P3.2 Drills: a why for every item, clickable at the end.** *How:* write the 25 missing `DRILL_WHY` entries (order drills keyed by step text: why this step sits *here* in the sequence); end screens render every item as `[data-dwhy]` (sort/multi columns and the missed list; order drill placed steps) toggling `.optwhy`. *Check:* `itemsWithoutWhy == []`; `renderDrill.itemsClickable ≥ 12`; `whyRevealed`; `orderClickable ≥ 4`; audit. *Scope:* `drillWhy`. *Done-when:* CLOSED.

**P3.3 Pretests: the wrong option you picked gets its own why.** *How:* `p.w` keyed by option text for every wrong option of all 43 items (add through a map keyed by topic id + item index applied before `permuteOptions()`); the `data-pti` handler shows `p.w[picked]` above the general `p.why`; wrong buttons keep `data-why`. *Check:* `pretest.wMissing == []`; `renderPretest.wrongSpecific`; audit. *Scope:* `pretestW`. *Done-when:* CLOSED.

**P3.V Verification.** Sample: 5 images. *Check:* token; `sampled:`; `clicked:`.

### Phase 4 — overlays: designed by a second model, GPT or Gemini, whichever proves better

**P4.0 Bake-off** (document task, no page edit). *Goal:* decide which model designs the overlays, per modality, on evidence. *How:* `PYTHONIOENCODING=utf-8 python codex_tools.py bakeoff` (default images mi_stages · ecg_torsades · myxoma_gross · cxr_chf: histology, ECG, gross, imaging). Both models design each image from the same brief; each model reviews all eight designs blind from the rendered PNGs; the tool writes `.plan2/overlays/BAKEOFF.md`, `bakeoff.json` and `PROVIDER` (default + per-modality winner) and copies each image's winning design to `<key>.json`. The orchestrator reads BAKEOFF.md and looks at the eight preview PNGs; if the scores disagree with what the pictures show, add two more images and re-run. Append one Notes line with the decision. *Check:* bakeoff.json covers ≥ 4 images, both models reviewed both designs, PROVIDER has a default and per-modality winners, BAKEOFF.md has a `DEFAULT:` line. *Scope:* none.

**P4.1 Overlay renderer.** *Goal:* the page can draw whatever the model designs, and the markup never hides the finding. *How:* extend `imgHTML` (and the lightbox copy, `wirePins`, the rail and legend) to render every kind in the §8 contract — `r e c poly arrow bracket spot inset none` — as HTML/SVG in percent space; spot = a dimming mask with an elliptical hole; inset = a magnified crop (`background-size`/`background-position` from the source rect) drawn at `ix iy iw ih` with a dashed link line; no `.fill` above 0.12 opacity; pins at `px,py`; default **hover-only markup** with a `data-showall` toggle ("Show all findings"); keep `.imgbox.raw` for "Hide markup"; 400-px pins ≥ 20 px hit area. The existing 44 images keep rendering unchanged (their kinds are `r e c`). *Check:* `renderSpot.filledShapes == 0`; `pinsRendered ≥ 1`; a render branch for each kind; a `data-showall` toggle; audit; views. *Scope:* none (code only). *Done-when:* CLOSED.

**P4.2–P4.5 Designs by the winning model, four batches (worst first).** Batch A: mi_stages nutmeg ecg_torsades ecg_pericarditis myxoma_gross ecg_block3 mi_granul ecg_vt ecg_vf cxr_chf dvt_leg · B: dissection pe_gross ecg_wpw gca iga_purpura aschoff egg_string kawasaki_tongue ecg_flutter ecg_af schisto · C: rib_notch lvh_gross aaa_ct buerger_gangrene athero_histo fmd_beads angioedema valve_as tof_spec mi_neutro boot_heart · D: janeway tendon_xan clubbing_cyanotic athero_gross endocard_veg mitral_gross mi_gross ecg_stemi cardiac_normal splinter xanthelasma.
*How:* the §3.3 operator loop, one key at a time; the four bake-off images already have their winning designs in `<key>.json` — apply and review those first. *Check (per key):* design from codex_tools.py (provider codex or gemini) with matching `image_sha` and a completed transcript; a review by the **other** model of the current design with no callout covering or missing its finding and overall ≥ 7/10; page callouts equal the design (kind, geometry, label) except ≤ 2 logged adjustments; 1–12 callouts; every baseline finding's key terms present in the new labels; markup not identical to baseline; outlines + insets sum ≤ 35%, largest ≤ 15%, nothing filled, nothing off-frame; labels 10–60 words; audit. *Scope:* `imgAnn` for the batch's keys only. *Done-when:* CLOSED.

**P4.6 Source-image quality.** *Goal:* no finding is asked of a picture too small to show it. *How:* the probe lists images under 800 px on the long side (`imgs.small`; on the baseline: egg_string, rib_notch, splinter, kawasaki_tongue, myxoma_gross, buerger_gangrene, iga_purpura). For each: find a larger free-licence version (Wikimedia Commons, same or better licence; attribution fields `cred`/`by`/`lic`/`licurl`/`srcurl` filled as round 1 did), drop it into `cardio-path-assets/`, re-run that image's design (P4.2–P4.5 style, since geometry is per picture) — or, if no better image exists, write `| key | KEEP-SMALL | why the finding is still legible / no better licensed image (≥15 chars) |` in `P4-IMAGES.md`. Replaced images get `| key | REPLACED | source URL and licence |`. *Check:* every image loads; every small image REPLACED or KEEP-SMALL with a reason; every image still credited; audit. *Scope:* `imgAnn`, `imgMeta`. *Done-when:* CLOSED.

**P4.V Verification.** Sample: 8 images — the verifier opens each `.plan2/overlays/<key>.preview.png` and the live image at 1280 and 400 px, in both themes, and judges whether any callout covers or misses its finding and whether the inset/spotlight kinds read clearly. *Check:* token; `sampled:`; `looked:`.

### Phase 5 — legibility and the improvements nobody asked for

**P5.1 Inline figure legibility.** *Goal:* every inline diagram's median glyph ≥ 9 px at 1280 (font-size × rendered scale, the probe's metric — `--runtime` prints per-figure values); lightbox at 400 px ≥ 10 px and pannable. *How:* let the reading column's figure pane scroll horizontally at natural width above a minimum scale, or raise the SVG base font where a figure's density allows; do not shrink content. *Check:* `glyph.below9 == []`; `unmeasured == []`; `probe400.glyph.lightbox.medianGlyph ≥ 10`; `pan > 0`; audit. *Scope:* `figSvg`. *Done-when:* CLOSED.

**P5.2 Captions back to a band.** *How:* the nine essays (cmy_geometry heart_sounds av_block digoxin shock_table xanthomas secondary_htn vesselwall archderiv) → `cap` 20–110 words stating what the figure settles; the rest → `FIGS[k].teach`, rendered under `<details>` beneath the caption by `figHTML`. *Check:* `capOver110 == []`; `capUnder20 == []`; `teachPresent ≥ 9`; teach renders under a disclosure; audit. *Scope:* `figCap`, `figTeach`. *Done-when:* CLOSED.

**P5.3 Keyboard everywhere.** Rapid `1`–`5`, practice `a`–`e`/`1`–`5`, spot `1`–`5`, `Enter` advances on all three; no conflict with the `/` search shortcut or typing in the tutor box. *Check:* `renderRapid.keyboardPick`; `renderPractice.keyboardPick`; `Enter` handler wired to `qnext|rfnext|spnext`; spot keys. *Scope:* none. Droppable with `REASON:` only if it conflicts with the tutor dock in a way that cannot be scoped.

**P5.4 Rapid confusions reach Weak Spots.** `confusions()` includes rapid pairs (`kind:"rapid"`, same wrong option text picked twice on one item); `repairState` keeps `lastPick`/`picks`; export payload carries them. *Check:* `state.repairKeepsLastPick`; `confusionsHasRapidKind`; export includes `lastPick`. *Scope:* none.

**P5.5 Search covers the new text.** `buildIndex()` indexes `q.w` notes, `q.et` cells, `q.bl`, `r.w` notes, say-lines. *Check:* `search.indexReadable`; `whyFindable`; `tableFindable`; `bottomLineFindable`. *Scope:* none. Droppable with `REASON:`.

**P5.6 Phone width.** With whys open, tables present and the figure open, the rapid and practice answered views do not overflow horizontally at 400 px; `.optwhy` wraps; tables scroll inside `.tblwrap`. *Check:* `probe400.renderRapid.scrollOverflow ≤ 1`; `probe400.renderPractice.scrollOverflow ≤ 1`; probe clean at 400. *Scope:* none. Droppable with `REASON:`.

**P5.V Verification.** Sample: 6 figures + 4 rapid ixs, at 1280 and 400. *Check:* token; `sampled:`; `400px:`.

### Phase 6 — ship

**P6.1 Click-through.** A fresh subagent clicks every surface in `SURFACES` (20 rows, listed in `check_plan2.py`) with real clicks at 1280 and 400 px and writes `P6-CLICKTHROUGH-2.md`: `| surface | PASS | what was clicked and seen |`. Any non-PASS reopens the owning task. *Check:* 20 PASS rows; audit; views; pacing; probe clean.

**P6.2 Publish** (the user). `BLOCKED` with `NEEDS-USER: publish Version 5 to https://claude.ai/artifact/J1ydoAbUH9hbTv9HiTvCj5 with all 44 assets; capabilities sample and downloads, not db`. Evidence when done: `published: Version 5 (sha:…, bytes)`.

**P6.3 Live check.** Fetch the live artifact; confirm the file matches local sha and that a rapid item renders 5 options. Evidence: `live-check: … rapid options 5`.

**P6.V Reconciliation.** List every task with final status in Notes; `reconciled: 42 tasks (…)`; create `.plan2-complete` only when `--next` prints ALL TASKS TERMINAL.

---

## Appendix A — what the planning session already verified (22–25 Sep 2026)

- `probe2.js` runs clean (0 section errors) on sha `6bfbb823` at both viewports; every render section seeds the state shapes in §5 and reaches the answered view. Its numbers are §6. It also measures every source image's pixel size (7 are under 800 px) and whether the picked option's why is open.
- `check_plan2.py --demo` fakes six ledger rows (DONE without work, cherry-picked renderer, guessed verifier token, phase-2 work during phase 1, BLOCKED without fields, overlays without second-model files) and the gate names every one on its own row. Re-run it any time.
- `codex_tools.py grade-rapid 0-9` completed a real GPT call (gpt-5.6-terra) with structured output; the grader was calibrated on the baseline: a yes/no "judge strictly" prompt rejected 12 of 20 existing distractors (including "Large arteries" and "Marfan"); the three-way verdict flags 2 throwaways ("There are none", "Straight, with no looping at all") and 3 weak ones on the same ten items. Only throwaways block. `rapid-0-9.json` is a smoke test — P1.1 must run `grade-rapid 0-39`.
- An earlier, constrained version of the overlay tool (GPT placing the old shape kinds, labels frozen) produced 8 tight ellipses on mi_stages covering 8% of the frame against 88% today, and passed GPT's review. That run was deleted when the tool was rewritten to let the model design freely; the free tool (`bakeoff`, `overlay`, `overlay-review`, both providers) parses and its Gemini path was verified against the model list (gemini-3.1-pro-preview, gemini-3.5-flash answer with the swarm's key) but **has not made a live overlay call yet** — P4.0's bake-off is its first real run, so treat any tool error there as the tool's bug (BLOCK with the traceback), not the model's.
- Codex CLI facts the tool encodes: the prompt goes in on stdin (`-` as the prompt argument) because `-i` is variadic and eats a trailing positional prompt; `--json` emits `thread.started / turn.started / item.completed / turn.completed`; `-o` writes the final message, which under `--output-schema` is the JSON; a call with one image takes about a minute. Gemini goes through the AI Studio OpenAI-compatible endpoint with the key from the hybrid_swarm `.env`, tries `json_schema` then `json_object`, and falls through the model list on quota errors.
- The old Stop hook (`check_plan.py`) is replaced in `.claude/settings.json` by `check_plan2.py --gate`; the old plan is complete and its gate released by `.plan-complete`.
