# V3 notes: visual pointers for rp15, rp23, rp24, rp27, rp28

Built on the audited fast/content practice items of 2026-10-06. Only `ef`, `pt` (questions) and `media`, `pt` (rapid) were changed; no stem, option, key, explanation, tag or objective was touched. Last check: `python3 .repro/fast_check.py --ws V3 --topics rp15,rp23,rp24,rp27,rp28 --build` printed only ok lines.

## Share of items with a visual

| topic | questions | rapid | NO-VISUAL rows |
| --- | --- | --- | --- |
| rp15 | 11 of 12 | 15 of 15 | rp15q04 (audit/P5.6.md) |
| rp23 | 12 of 12 | 13 of 13 | none |
| rp24 | 11 of 11 | 14 of 14 | none |
| rp27 | 9 of 10 | 16 of 16 | rp27q10 (audit/P5.10.md) |
| rp28 | 13 of 14 | 17 of 17 | rp28q06 (audit/P5.10.md) |

audit/P6.6.md and audit/P6.10.md hold no rows because every rapid item pins a visual.

## New figures (11), each a lesson comparison or sequence

| key | teaches | items pointed at it |
| --- | --- | --- |
| rp15_cysts | functional cysts compared, and the four steps of torsion | q01 q03, r09 r10 |
| rp15_serous | ovulation to serous cancer, risk, protection, late symptoms | r11 r15 |
| rp23_mimics | acute and periductal mastitis, duct ectasia, fat necrosis, implant complications | q05 q06 q11, r12 |
| rp24_genes | inherited breast cancer genes: job lost and family pattern | q10 q11, r01 r11 r12 |
| rp24_drugs | SERMs, aromatase inhibitors, fulvestrant, trastuzumab, doxorubicin | q03 q05, r06 r07 r08 r13 |
| rp24_signs | DCIS patterns, inflammatory carcinoma, Paget disease | q06 q07, r02 r04 r14 |
| rp27_mag | severe features, order of treatment, magnesium toxicity ladder | q01 q02, r02 r03 r04 |
| rp27_fetal | one cause, one fetal signature (diabetes timing, growth restriction, cholestasis, indomethacin) | r07 r14 r15 r16 |
| rp28_onset | start of labor, induction agents | q01 q04, r01 r02 r05 r17 |
| rp28_birth | cardinal movements, Erb and Klumpke palsy, perineal tears | q03 q07 q08 q09, r09 r10 |
| rp28_milk | lactation reflexes, mood levels, when not to nurse | q12 q13, r14 r15 r16 |

The contract named one new figure per topic; the share gate cannot be met honestly with one for rp15 (2), rp24 (3), rp27 (2) and rp28 (3), because the missing answers come from unrelated lesson sections.

## Existing figures reused (cross-topic where marked)

- rp15: rp15_patterns (q02).
- rp23: en3_prl (q04), rp7_engines (q09), rp22_androgen (q10).
- rp24: rp24_sequence (r03), rp24_classes (r05), rp3_axilla (q09, r09), rp3_exam (r10).
- rp27: rp27_rh (q08, r12, r13), rp27_gdm (r05), rp4_placenta (r11).
- rp28: rp28_stages (q02, r03, r04), rp2_pudendal (r08).

## Facts checked twice

Thresholds and drug limits follow the lesson text: severe-range 160/110, platelets under 100,000, creatinine over 1.1 mg/dL, magnesium for 24 hours postpartum, indomethacin before 32 weeks only, anti-D at 28 weeks and within 72 hours, upper trunk C5 and C6 for Erb palsy, lower trunk C8 and T1 for Klumpke palsy, blues fade within 2 weeks. The only time-bound number (USPSTF against screening average-risk women for ovarian cancer) says as of 2025.

## Rendering

Figures were rendered through the page's own practice and rapid views at 1280 and 400 px and the answer highlight was checked on all 70 pinned items. Highlighted labels stay inside their boxes. The probe's glyph check skips figures that no lesson body contains, so the median glyph was measured separately: at least 9.7 px in the 628 px rapid view at 1280 and 16 px in the practice view. At 400 px the figure width floor is 360 px (house CSS), so every figure there, old and new, is read by scrolling or the enlarge button.

## Seen, not acted on

fast/ws/R5 is editing the rp23 and rp24 lesson text while this workspace pins figures to practice items; none of these pins depends on lesson wording.
