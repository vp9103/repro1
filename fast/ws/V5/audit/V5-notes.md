# V5 notes: visual pointers for rp3, rp4, rp10, rp11, rp12, rp13, rp14

Built on the audited fast/content practice items of 2026-10-06. Only `ef`, `pt` (questions) and `media`, `pt` (rapid) were changed, on 37 items that had no visual; no stem, option, key, explanation, tag or objective was touched (checked by a field-by-field diff against fast/content). Last check: `python3 .repro/fast_check.py --ws V5 --topics rp3,rp4,rp10,rp11,rp12,rp13,rp14 --build` printed only ok lines.

## Share of items with a visual

| topic | questions | rapid | NO-VISUAL rows |
| --- | --- | --- | --- |
| rp3 | 10 of 10 | 13 of 13 | none |
| rp4 | 11 of 11 | 14 of 14 | none |
| rp10 | 10 of 11 | 18 of 18 | rp10q11 (audit/P5.4.md) |
| rp11 | 12 of 12 | 15 of 15 | none |
| rp12 | 13 of 13 | 15 of 15 | none |
| rp13 | 12 of 12 | 16 of 16 | none |
| rp14 | 12 of 12 | 18 of 18 | none |

rp10q11 (a minor asks for confidential contraception) is a consent and ethics item with no anatomy, mechanism or comparison to draw. No other task of these topics needs a NO-VISUAL row, so no other audit file was written.

## New figures (9), each a lesson comparison or sequence

| key | teaches | items pointed at it |
| --- | --- | --- |
| rp3_milk | two-layer duct wall and the myoepithelial invasion test, merocrine versus apocrine release, hormones from pregnancy to let-down | q07 q08 q09 q10, r13 |
| rp4_fertilize | capacitation, acrosome reaction, cortical reaction and why one sperm only | q02, r02 |
| rp4_fluid | amniotic fluid as fetal urine: oligohydramnios and the Potter sequence versus polyhydramnios | q10 |
| rp12_lesions | lichen sclerosus, lichen simplex chronicus, lichen planus, extramammary Paget disease and condyloma compared | q06 q07 q09 q12 q13, r09 |
| rp12_vaginal | sarcoma botryoides, DES adenosis and clear cell adenocarcinoma, vaginal squamous carcinoma by age and exposure | q10 q11, r13 r14 |
| rp12_drugs | fluconazole and metronidazole: target, what each treats, slide, partners | q03 q04, r06 |
| rp13_findings | ectropion, nabothian cyst, stenosis, cervicitis and invasive carcinoma with ureteral obstruction | r13 r15 |
| rp14_endometriosis | what it is, retrograde menstruation, pain triad, leuprolide, danazol | q02 q03 q04, r01 r02 r18 |
| rp14_sampling | postmenopausal bleeding work-up (biopsy, hysteroscopy, D and C) and benign endometrial diagnoses | q12, r15 r16 r17 |

The contract named one new figure per topic; the share gate cannot be met honestly with one for rp4 (two unrelated lesson sections) or rp12 (drug mechanisms, vulvar lesions and vaginal tumors) and rp14 (endometriosis versus endometrial sampling).

## Existing figures reused

- rp11: rp11_bonewhi (r14, the WHI panel lists venous thromboembolism; rp11_firstmove has the nearer row "breast cancer or past clot" but its wording does not contain the keyed answer, which the gate's word check requires).
- rp12: rp12_wall (q05, r07, r15: Bartholin glands and Gartner duct cyst).

## Facts checked twice

All figure text follows the lesson wording: milk-release details (merocrine casein by exocytosis, apocrine lipid droplets wrapped in membrane), triploid zygote of 69 chromosomes, fluid mostly fetal urine after about 16 weeks, fluconazole inhibition of lanosterol 14-alpha-demethylase, metronidazole nitro-group radicals, partners treated for trichomoniasis only, HPV types 6 and 11 for condyloma, DES adenosis, desmin and myogenin for sarcoma botryoides, nabothian cyst as a trapped gland, ureteral obstruction as a leading cause of death in cervical cancer, the leuprolide and danazol adverse effects, office endometrial biopsy first, plasma cells for chronic endometritis. No time-bound number was added.

## Rendering

Every figure was read at 1280 and 400 px. All 37 pinned items were answered through the page's own practice and rapid views at 1280 and 400 px: say-line shown, highlight present, no highlight outside its box or over another label, no JS errors. Median glyph is 9.8 px in the 628 px rapid view and larger in the practice view. At 400 px the figure width floor is 360 px (house CSS), so figures there are read by scrolling or the enlarge button, as for every existing figure. Hl strings were chosen to match one label each (a highlight marks every label containing the string), and the rp12_lesions title avoids the lesion names for that reason.

## Seen, not acted on

- audit/P5.4.md also exists in fast/ws/V4 (no rows, because rp29 needs none); merge the two by union so the rp10q11 row is kept.
- git status shows many deleted and new files under .repro/verify/P3-shots; none came from this workspace.
