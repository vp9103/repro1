# Pending work and evidence (orchestrator checklist; keep current)

Updated 2026-10-04. Counts from `.repro/fast_check.py` / the gate's structural checks on fast/content.

## Fast-track state (fast/repro-endo-path.html, drafts, unreviewed)
36 topics (30 rp + en1 en2 en5 en6 en7 en9) · 373 questions · 439 rapid · 95 figures · 30 drills · 0 images · 0 memory scenes (after merging G01+G02, 2026-10-04).
All 30 rp topics pass topic structure + key-term coverage. Build warnings: 12 en topics missing; en9 body figures
en9_hypercalcemia, en9_three_hpt missing.

## In flight
| id | owner | scope | evidence when done |
|---|---|---|---|
| P2.4 | CLOSED 2026-10-04 | F21 | ledger row sha:e4e21f2f |
| G01 | DONE (draft, accepted; spot-checked rp20q01-q05) | rp19 11q/15r/2 drills, rp20 15q/14r/3 drills | fast_check G01 ok; audit/G01-notes.md |
| I01 | worker | images rp13, rp15, rp24 + Gemini overlays (fast/ws/I01) | fast_check I01 ok; audit/I01-sources.md |
| P2.5 | worker | F35/F35b search snippet + landing (.repro/ws/P2_5) | --status P2.5 ok |
| G02 | DONE (draft, accepted 2026-10-04; spot-checked rp11r01/r05/r09, rp17r03/r09/r16) | rapid rp3 13, rp11 15, rp17 22 | fast_check G02 ok; audit/G02-notes.md |
| G03 | DONE (draft, accepted; checked rp29 pins vs figure labels, d_rp16_multi) | rapid rp23 13, rp29 11; drills rp10 multi, rp11 sort, rp16 multi, rp17 order | fast_check G03 ok; audit/G03-notes.md (rp29 NO-VISUAL row in G03-novisual.md -> P6.9 on import) |
| P1.V | HELD | token 5554dd5d05, 12 objectives | needs verifier at Opus max (host limit, asked user) |

## Wave 1 (reproductive, Oct 9) queue
1. Every rp topic now has questions, rapid and >= 1 drill. Figure gaps (hi blueprint items with no figure to pin a rapid item): BP-rp23-05 fat necrosis, BP-rp29-07 minors' consent, BP-rp11-04 bone/LDL, BP-rp17-10 molluscum, BP-rp17-05 perinatal HIV prevention, BP-rp17-12 HIV course and labs (en8_loop.svg has no JSON).
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
