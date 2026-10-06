# V4 notes: visual pointers for rp16, rp17, rp18, rp19, rp20, rp21, rp22, rp25, rp26, rp29

Built on the audited fast/content practice items of 2026-10-06. Only `ef`, `pt` (questions) and `media`, `pt` (rapid) were changed, and only on items that had no visual; every existing pin was left exactly as it was. No stem, option, key, explanation, tag, objective or `bl` was touched (checked by a field-by-field diff against fast/content). Last check: `python3 .repro/fast_check.py --ws V4 --topics rp16,rp17,rp18,rp19,rp20,rp21,rp22,rp25,rp26,rp29 --build` printed only ok lines.

## Share of items with a visual

| topic | questions | rapid | NO-VISUAL rows |
| --- | --- | --- | --- |
| rp16 | 12 of 12 | 14 of 14 | none |
| rp17 | 12 of 12 | 22 of 22 | none |
| rp18 | 12 of 12 | 15 of 16 | rp18r13 (audit/P6.7.md) |
| rp19 | 11 of 11 | 15 of 15 | none |
| rp20 | 15 of 15 | 14 of 14 | none |
| rp21 | 13 of 13 | 14 of 14 | none |
| rp22 | 13 of 13 | 15 of 15 | none |
| rp25 | 11 of 11 | 13 of 13 | none |
| rp26 | 12 of 12 | 13 of 14 | rp26r03 (audit/P6.9.md) |
| rp29 | 11 of 11 | 11 of 11 | none |

57 items were newly pointed (36 questions, 21 rapid). audit/P5.7.md, P5.8.md, P5.9.md, P5.4.md, P6.8.md and P6.4.md hold no rows because every item of those tasks carries a visual.

## New figures (13), each a lesson comparison or sequence

| key | teaches | items pointed at it |
| --- | --- | --- |
| rp16_bugs | chlamydia, gonococcus and Mycoplasma: what marks each and why a drug works or fails | q01 q02 q03 q11, r01 r02 r03 r14 |
| rp16_treat | screening and the drug for chlamydia, gonorrhea, PID and syphilis, desensitization, Jarisch-Herxheimer | q05 q09 q10, r04 r05 r13 |
| rp17_art | antiretroviral signature toxicities, ritonavir boosting, and the same drugs as PrEP, PEP and at delivery | q04 q05 q06, r21 r22 |
| rp17_persist | where HIV, HSV, HPV and molluscum hide, wart creams and the L1 vaccine, CD4 below 200 | q07 q10 q11 q12 |
| rp18_dating | antibody timeline, IgG avidity and the first-trimester reading | r15 |
| rp19_route | duct path with histology, glands that add fluid, how the testis is kept cool | q11, r15 |
| rp20_inflame | epididymitis by age, mumps orchitis, appendix testis, cremasteric reflex arc | q04 q12, r06 |
| rp21_prostatitis | four prostatitis patterns, what to avoid, which are treated with antibiotics | q06, r07 |
| rp22_ejac | emission and ejaculation by nerve, serotonin, alpha-1 blockers, retrograde ejaculation | q13, r15 |
| rp25_renal | kidney, ureter and lab changes of pregnancy that mislead | q06 q07 q08 q10, r10 r12 r13 |
| rp26_loss | five loss types from os and tissue, causes, recurrent-loss causes and treatment | q08 q10, r10 |
| rp29_consent | minor consent, three parts of valid consent, capacity versus competence, history of mistrust | q07 q09 q10, r11 |
| rp29_sexhx | ask, test, protect, and contraception for a transgender man on testosterone | q06 q11 |

The contract named one new figure per topic; the share gate cannot be met honestly with one for rp16 (2), rp17 (2) and rp29 (2), because the missing answers come from unrelated lesson sections. rp18_dating exists because the checker keeps the hyphen in the keyed answer "High-avidity IgG" (repro_common.kws splits on spaces, not hyphens), so the existing rp18_serology, which says "high avidity", cannot be pinned to rp18r15; the new figure draws the antibody timeline and avidity maturation that the lesson describes, which rp18_serology only tabulates.

## Existing figures reused (cross-topic where marked)

- rp17: rp17_hivtest (q03).
- rp19: rp21_histology (q10, cross-topic: corpora amylacea in older men).
- rp20: rp19_scrotum (q05, cross-topic: left testicular vein into the left renal vein, a varicocele that stays full lying down).
- rp25: rp25_lungs (q03 q04, r08 r09).
- rp29: rp29_inventory (q08).

## NO-VISUAL rows

- rp18r13 (K1 capsule of Escherichia coli): no rp18 figure draws neonatal sepsis organisms, and a capsule is one virulence fact with no sequence to draw.
- rp26r03 (methotrexate blocks dihydrofolate reductase): no figure draws folate metabolism; rp26_framework only says that stable ectopic pregnancy gets methotrexate.

## Facts checked twice

Lesson text was the source for every label. Checked against it and against standard Step 1 teaching: elementary versus reticulate body, maltose not fermented by the gonococcus, C5 to C9 deficiency, ceftriaxone plus doxycycline plus metronidazole for outpatient PID, doxycycline for 7 days (azithromycin in pregnancy), desensitization then benzathine penicillin G in pregnancy, HLA-B*57:01 and abacavir, polymerase gamma toxicity of stavudine and didanosine, CYP3A4 inhibition by ritonavir, PEP 28 days started within 72 hours, scheduled cesarean at 38 weeks with IV zidovudine, sacral dorsal root ganglia for HSV-2 and trigeminal ganglion for HSV-1, imiquimod toll-like receptor 7, podofilox microtubules, hypogastric nerves T10 to L2 for emission and pudendal nerve S2 to S4 for ejaculation, GFR up about 50 percent, ALP doubling or tripling from the placenta, relaxin, the five loss types by os and tissue, low-dose aspirin plus heparin for antiphospholipid syndrome. No new time-bound number was introduced; the only guideline-dependent statements are "women under 25" (yearly NAAT) and PrEP and PEP regimens, which follow the lesson text.

## Rendering

All 268 pinned items of these ten topics (old and new) were rendered through the page's own practice and rapid views, with the confidence chip and answer clicked, at 1280 px; the say-line, the open figure and the answer halo were present on every one and every halo stays inside its box for all new pins. The 57 new pins were also rendered at 400 px: the house CSS gives every figure a 360 px floor (5.6 px glyphs), so as for every old figure the reader scrolls or opens the enlarge button, which shows the figure at 100 percent (checked for rp17_art). The probe's own figure checks (glyph size, overlap, clipping) print ok. Median glyph in the 628 px rapid view is at least 9.8 px.

## Seen, not acted on

- Existing pins (not mine) whose bold highlight spills a few units past the box edge in this environment's wide fallback font (halo test, 1280 px): rp25q02 and rp25r04 on rp25_hormones; rp26q09 and rp26r07 on rp26_framework ("No heartbeat at crown-rump 7 mm+:" is 24 units over); rp21r02 and rp21r04 on rp21_bphdrugs; rp21r12 on rp21_penis. The real page font (IBM Plex Sans) is narrower, so these may fit there.
- rp20 lesson text names the cremasteric reflex sensory limb twice, as the ilioinguinal nerve and as the femoral branch of the genitofemoral nerve; rp20r06's explanation and the new rp20_inflame use the second (standard) version: sensory limb in the femoral branch and motor limb in the genital branch of the genitofemoral nerve.
- rp21_bphdrugs, rp25_hormones and rp26_framework labels are not editable here; if the overflow matters, the figure owner can shorten them.
