# Pending work and evidence (orchestrator checklist; keep current)

Updated 2026-10-04. Counts from `.repro/fast_check.py` / the gate's structural checks on fast/content.

## Fast-track state (fast/repro-endo-path.html, drafts, unreviewed)
36 topics (30 rp + en1 en2 en5 en6 en7 en9) · 347 questions · 360 rapid · 95 figures · 25 drills · 0 images · 0 memory scenes.
All 30 rp topics pass topic structure + key-term coverage. Build warnings: 12 en topics missing; en9 body figures
en9_hypercalcemia, en9_three_hpt missing.

## In flight
| id | owner | scope | evidence when done |
|---|---|---|---|
| P2.4 | worker (Sonnet xhigh) | F21 multi-drill verdict placement, .repro/ws/P2_4 | --status P2.4 ok; audit/P2.4.md 2026-10-04 section |
| G01 | worker | rp19, rp20 questions + rapid + drills (fast/ws/G01) | fast_check G01 ok |
| G02 | DONE (draft, accepted 2026-10-04; spot-checked rp11r01/r05/r09, rp17r03/r09/r16) | rapid rp3 13, rp11 15, rp17 22 | fast_check G02 ok; audit/G02-notes.md |
| G03 | worker | rapid rp23, rp29; drills rp10, rp11, rp16, rp17 (fast/ws/G03) | fast_check G03 ok |
| P1.V | HELD | token 5554dd5d05, 12 objectives | needs verifier at Opus max (host limit, asked user) |

## Wave 1 (reproductive, Oct 9) queue
1. (G03 in flight.) Figure gaps from G02 (hi blueprint items with no figure to pin): BP-rp11-04 bone/LDL, BP-rp17-10 molluscum, BP-rp17-05 perinatal HIV prevention, BP-rp17-12 HIV course and labs (en8_loop.svg has no JSON).
2. Visual pointers (ef/pt or fig media) or NO-VISUAL rows - per topic q/r missing:
   rp3 q4 · rp4 q7/r7 · rp5 q6/r4 · rp6 q6/r4 · rp7 q6/r6 · rp8 q4/r5 · rp9 q5/r9 · rp10 q7/r8 · rp11 q7 · rp12 q10/r6 ·
   rp13 r2 · rp14 q4/r6 · rp15 q4/r4 · rp16 q7/r7 · rp17 q8 · rp18 r2 · rp21 q1/r1 · rp22 q1/r1 · rp23 q6 · rp24 q7/r14 ·
   rp25 q6/r5 · rp26 q2/r3 · rp27 q4/r11 · rp28 q10/r12 · rp29 q6. Also rp16r06 keyed option conspicuously longest.
3. Engine: P2.4 -> P2.5 (F35) -> P2.6 (F31, F40, F33) -> P2.V with .repro/P2-REGRESSION.md.
4. P3.1-P3.10: import fast topics into gated workspaces, --close; P3.V.
5. Images P4.1-P4.5 (none exist): approved sources, licence + attribution copied, >= 800 px, < 2 MB, 4 look-alikes with
   whys; P4.6 overlays designed by Gemini (xmodel.py overlay), applied exactly.
6. P5/P6/P7 imports; memory scenes >= 6 (P7.4); concept homes + path (P7.5); P8.1 click-through (1280/400, both themes).
7. P8.2 publish Version 1 needs the user.

## Wave 2 (endocrine)
Unwritten: en3 en4 en8 en10 en11 en12 en13 en14 en15 en16 en17 en18. en9: 12 topic problems + 2 missing figures; en6: 1.
Questions only en1, en5; rapid only en5; drills only en5.

## External dependencies
- GitHub push 403 (Claude GitHub App / connection for vp9103/repro1). Commits are local until fixed.
- Canvas sign-in (P1.2 BLOCKED; optional Hendricks objectives doc only).
- Verifier at max effort: project agents load only at session start (see REPRO-CONTINUATION.md).
