# P2 regression checklist (consolidated 2026-10-04 from REPRO-LEDGER.md notes, P2.V runs 1-7)

Every engine redo exercises its OPEN items and every FIXED item in the same area, by real clicks on the stub
(`python3 build.py --root fixtures/stub --engine .repro/ws/<ws>/engine --out .repro/runtime/stub.html`,
`python3 serve.py --root .repro/runtime --port <n>`), at a real 1280 px and a real 400 px viewport (Playwright
viewport, confirm `window.innerWidth`; the probe's "400 px" Chrome window is really 500 px), light and dark, keyboard
and mouse. The phase verifier gets this list in addition to the gate's seeded sample.

## OPEN (reopened by P2.V run 7, token cabb49f8bb)

| id | task | defect | done when |
|---|---|---|---|
| F21 | P2.4 | Multi-drill run: a wrong pick's verdict appears under the NEXT item and does not name the item it judges (400 px: "Mid-cycle pain (mittelschmerz)" above "NOT THIS ONE. This belongs to Luteal..."); #live says the same | verdict sits with and names the item it judges, in the page and in #live, at 1280 and 400 |
| F35 | P2.5 | Search "why it matched" line (srchSnip) clips around the first place ANY query word appears, not the phrase ("retrospective evidence that ovulation occurred" shows the start of the rp8 why; "too brief to change length by nine days" shows "...about 14 days...") | snippet centers on the whole-phrase match (else all-words, else best word) |
| F35b | P2.5 | A topic hit found in a why/table opens at the top of the topic (why was 3732 px below) with nothing pointing to it | opening a hit lands on (scrolls to, highlights, focuses) the matching section; why blocks open |
| F31a | P2.6 | After a right rapid/spot answer by Tab+Enter, Enter for "next" leaves focus on the same-position option of the new item, so one more Enter answers it | focus lands on the new item's stem/heading (or first option without auto-activation); no accidental answer |
| F31b | P2.6 | Order-drill step placement and "Check the sequence" drop focus to main | focus stays on the moved step / the verdict |
| F31c | P2.6 | After a WRONG rapid pick, #live says "Correct: <answer>" and nothing says the pick was wrong | #live: "Wrong: <pick>. Correct: <answer>." (same pattern as practice) |
| F31d | P2.6 | Multi-drill wrong verdict names no item (shared with F21) | covered by F21 |
| F40 | P2.6 | Diagnostic result notice (from the hero button) lands above the viewport (-157 px at 1280, -570 px at 400) while holding focus: restoreScroll rAF runs after announceRecovery's scrollTo | result is in view and focused at both widths |
| F33a | P2.6 | Slow right rapid answers DO drop a box on the 14-day step, though the plan row and method card say they stay | text and code agree (fix whichever is wrong; the scheduler's real rule is stated) |
| F33b | P2.6 | Weak Spots says questions come back tomorrow, but a miss returns in about 15 min | text matches the real interval |
| F33c | P2.6 | Practice due-set text says right answers return after 1, 3, 7, 14 days, but a first-try right answer was due in 15 min | text matches the real ladder |

## FIXED earlier (re-check whenever the same area changes)

| id | area | fixed behavior to keep |
|---|---|---|
| F6 | exam date | exam ceiling never before now; #examdate typeable and arrow-able |
| F4 | plan header | "N more days" equals the days the plan schedules (stageAllot/planDaysLeft); plurals |
| F8 | High yield only | filters every set, count and plan review row; path labeled "not filtered" |
| F9 | reading | read credit from each topic's own scroll; rail titles wrap, no horizontal scrollbar |
| K13 | multi drill | one column at <= 760 px; every why clickable at a true 400/375 px |
| F13 | pretest | first answer stored once, re-applied on every render/reload |
| F16 | phone layout | no stray scrollbars on memory cards / photo bars at 400 px; rail folds behind "Topics" at <= 980 px |
| K16 | photo lightbox | Fit / Actual size / zoom capped at natural size; never smaller than inline; no upscaling; overlays aligned; close button clear of Hide markup |
| F25 | Weak Spots threads | thread/near-miss text from conceptThreads and th.rule; rows stack at <= 600 px |
| F10 | glossary | entries link to their teaching section; .gterm Enter/Space opens; focus returns |
| F42 | render failure | visible recovery notice + #live + header repaint |
| F23/F24 | practice sets | "Previously missed" serves exactly the latest-wrong questions; empty sets say why |
| N6/F28 | cross-block hub | hubPull: other block's reviews never overwritten |
| F35 (run 2) | search | single-pass plain-text highlight; tiered ranking (phrase > all words > some); stop words ignored |
| tutor | tutor | "answered" from the current attempt only; no answer leaks |
