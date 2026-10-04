# G03 notes: rapid sets for rp23 and rp29, drills for rp10, rp11, rp16 and rp17 (fast-track draft)

Workspace `fast/ws/G03/`. Owned files: `content/rapid/rp23.json`, `content/rapid/rp29.json`, `content/drills/d_rp10_multi.json`, `d_rp11_sort.json`, `d_rp16_multi.json`, `d_rp17_order.json`, `audit/P6.6.md` (rp23 NO-VISUAL row), `audit/G03-novisual.md` (rp29 NO-VISUAL row) and this file. Nothing else was written; no figure, topic or question file was created or edited. The rp29 gated task id was not given in the contract, so its NO-VISUAL row sits in `audit/G03-novisual.md` and must be copied into that task's audit file on import.

Check: `python3 .repro/fast_check.py --ws G03 --topics rp10,rp11,rp16,rp17,rp23,rp29 --build` prints only `ok` lines. No second-model review was run (user direction 2026-10-04). Every medical statement was written from the topic files in `fast/content/topics/` and the course decks in `scope/lectures/` (contraception deck 70351/23596393, transgender care deck 70351/24194789, viral STI deck 70351/23884526, pelvic infections TBL reading 70351/23741671, menopause decks 70351/24117199 and 24117204), then re-read a second time from memory of standard Step 1 teaching (First Aid, Robbins, CDC 2021 STI guidelines, CDC US MEC, ACOG); no outside source was opened. Time-bound statements say as of 2025.

## Summary

| Set | Kind | Items | Pinned to a figure | NO-VISUAL rows | Key positions 0-4 |
|---|---|---|---|---|---|
| rp23 P6.6 rapid | rapid | 13 | 12 (92%) | 1 | 0:3, 1:2, 2:3, 3:3, 4:2 |
| rp29 rapid (task id not given) | rapid | 11 | 10 (91%) | 1 | 0:2, 1:2, 2:2, 3:3, 4:2 |
| rp10 Which contraceptive fits the feature? | multi drill | 17 | n/a | n/a | n/a |
| rp11 Estrogen alone, or a progestogen added? | sort drill | 12 | n/a | n/a | n/a |
| rp16 Which genital ulcer is it? | multi drill | 20 | n/a | n/a | n/a |
| rp17 The HIV replication cycle, step by step | order drill | 7 | n/a | n/a | n/a |

Drill kinds: multi (rp10, rp16), sort (rp11), order (rp17). Why each kind: rp10 and rp16 are many-to-many matching problems (five contraceptive methods to their features; five genital ulcers to their clues), so a multi drill fits; rp11 turns on one binary question (is a uterus present?), so a sort drill fits; rp17 is a fixed sequence that the drug classes map onto, so an order drill fits.

Pins outside the topic's own figures: rp23 uses `en3_prl` (rp23r10, prolactin and TRH) and `rp22_androgen` (rp23r11, drugs that cause gynecomastia). Every `pt.hl` string is an exact fragment of a `<text>` label in the pinned figure; the `say` lines name where to look and the keyed answer.

## rp23 Benign breast disease and gynecomastia (rapid)

| Item | Blueprint ids | Objective ids | Tags | Pinned figure | Keyed answer |
|---|---|---|---|---|---|
| rp23r01 | BP-rp23-01 | TBL-BREAST.3 | risk-factors, normal-vs-pathologic | fig:rp23_age | Carcinoma |
| rp23r02 | BP-rp23-06, BP-rp23-01 | TBL-BREAST.5 | histology-to-diagnosis, normal-vs-pathologic | fig:rp23_age | Duct ectasia |
| rp23r03 | BP-rp23-12, BP-rp23-01 | TBL-BREAST.3 | normal-vs-pathologic, histology-to-diagnosis | fig:rp23_age | A hard mass off center from the nipple |
| rp23r04 | BP-rp23-12 | TBL-BREAST.3 | normal-vs-pathologic, hormone-timeline | fig:rp23_age | Newborn, puberty and older age |
| rp23r05 | BP-rp23-02 | TBL-BREAST.6, TBL-BREAST.7 | risk-factors, histology-to-diagnosis | fig:rp23_risk | Apocrine metaplasia |
| rp23r06 | BP-rp23-02 | TBL-BREAST.7 | risk-factors, inheritance-pattern | fig:rp23_risk | About doubles it |
| rp23r07 | BP-rp23-02, BP-rp23-04 | TBL-BREAST.6, BREAST-HISTO.1 | histology-to-diagnosis, risk-factors | fig:rp23_risk | Proliferative disease without atypia |
| rp23r08 | BP-rp23-02 | TBL-BREAST.6 | treatment-sequence, tumor-progression | fig:rp23_risk | Excise the lesion |
| rp23r09 | BP-rp23-02 | BREAST-HISTO.1 | histology-to-diagnosis, tumor-progression | fig:rp23_risk | Myoepithelial cells |
| rp23r10 | BP-rp23-07 | TBL-BREAST.3 | feedback-logic, hormone-actions | fig:en3_prl | Primary hypothyroidism |
| rp23r11 | BP-rp23-10, BP-rp23-12 | TBL-BREAST.3 | adverse-effects, drug-mechanism | fig:rp22_androgen | Cimetidine |
| rp23r12 | BP-rp23-06 | TBL-BREAST.5 | pathogen-clues, treatment-sequence | none (row in audit/P6.6.md) | Continue nursing and give dicloxacillin or cephalexin |
| rp23r13 | BP-rp23-03 | TBL-BREAST.9 | histology-to-diagnosis, tumor-progression | fig:rp23_age | Rapid growth to a large size |

Blueprint coverage (hi items first; practice questions shown for context):

| Blueprint id | Yield | Rapid items | Practice questions |
|---|---|---|---|
| BP-rp23-01 | hi | rp23r01, rp23r02, rp23r03 | rp23q01, rp23q12 |
| BP-rp23-02 | hi | rp23r05, rp23r06, rp23r07, rp23r08, rp23r09 | rp23q07, rp23q08 |
| BP-rp23-03 | hi | rp23r13 | rp23q01, rp23q02 |
| BP-rp23-04 | hi | rp23r07 | rp23q03 |
| BP-rp23-05 | hi | none | rp23q06 |
| BP-rp23-06 | hi | rp23r02, rp23r12 | rp23q05 |
| BP-rp23-07 | hi | rp23r10 | rp23q04 |
| BP-rp23-08 | mid | none | none |
| BP-rp23-09 | mid | none | rp23q11 |
| BP-rp23-10 | mid | rp23r11 | rp23q09, rp23q10 |
| BP-rp23-11 | mid | none | rp23q12 |
| BP-rp23-12 | mid | rp23r03, rp23r04, rp23r11 | rp23q09 |

## rp29 Gender-affirming care, sexual health and reproductive ethics (rapid)

| Item | Blueprint ids | Objective ids | Tags | Pinned figure | Keyed answer |
|---|---|---|---|---|---|
| rp29r01 | BP-rp29-03 | TRANSGENDER-LEC.4 | feedback-logic, drug-mechanism | fig:rp29_hormones | It suppresses LH by negative feedback |
| rp29r02 | BP-rp29-05 | TRANSGENDER-LEC.4 | feedback-logic, pulsatile-signaling | fig:rp29_hormones | Constant exposure downregulates pituitary GnRH receptors |
| rp29r03 | BP-rp29-05 | TRANSGENDER-LEC.4 | feedback-logic, hormone-timeline | fig:rp29_hormones | Puberty resumes |
| rp29r04 | BP-rp29-05 | TRANSGENDER-LEC.4 | adverse-effects, hormone-actions | fig:rp29_hormones | Bone density |
| rp29r05 | BP-rp29-04, BP-rp29-12 | TRANSGENDER-LEC.4 | adverse-effects, hormone-actions | fig:rp29_hormones | Lower HDL cholesterol |
| rp29r06 | BP-rp29-12, BP-rp29-04 | TRANSGENDER-LEC.4 | hormone-actions, adverse-effects | fig:rp29_hormones | Atrophy of the vaginal epithelium |
| rp29r07 | BP-rp29-06 | TRANSGENDER-LEC.3 | consent-ethics, treatment-sequence | fig:rp29_hormones | Before the first dose |
| rp29r08 | BP-rp29-12, BP-rp29-04 | TRANSGENDER-LEC.3, TRANSGENDER-LEC.4 | feedback-logic, hormone-actions | fig:rp29_hormones | Ovulation can continue after menses stop |
| rp29r09 | BP-rp29-03, BP-rp29-04 | TRANSGENDER-LEC.4 | hormone-actions, drug-mechanism | fig:rp29_hormones | Breast growth |
| rp29r10 | BP-rp29-03 | TRANSGENDER-LEC.4 | adverse-effects, drug-mechanism | fig:rp29_hormones | Venous clotting (VTE) |
| rp29r11 | BP-rp29-08, BP-rp29-10 | BICEP-BROWN.8, LIFESPAN-CASES.5 | consent-ethics | none (row in audit/G03-novisual.md) | Competence |

Blueprint coverage (hi items first; practice questions shown for context):

| Blueprint id | Yield | Rapid items | Practice questions |
|---|---|---|---|
| BP-rp29-03 | hi | rp29r01, rp29r09, rp29r10 | rp29q03, rp29q04 |
| BP-rp29-04 | hi | rp29r05, rp29r06, rp29r08, rp29r09 | rp29q01, rp29q02, rp29q06 |
| BP-rp29-05 | hi | rp29r02, rp29r03, rp29r04 | rp29q05 |
| BP-rp29-07 | hi | none | rp29q07, rp29q11 |
| BP-rp29-01 | mid | none | none |
| BP-rp29-02 | mid | none | rp29q08 |
| BP-rp29-06 | mid | rp29r07 | none |
| BP-rp29-08 | mid | rp29r11 | rp29q09, rp29q10 |
| BP-rp29-09 | mid | none | none |
| BP-rp29-10 | mid | rp29r11 | none |
| BP-rp29-11 | mid | none | none |
| BP-rp29-12 | mid | rp29r05, rp29r06, rp29r08 | rp29q06 |

Hi items without a rapid item, and why:

- BP-rp23-05 (fat necrosis, saponification): no existing figure shows it, only one rapid item per set may be bare, and the practice question rp23q06 covers it. The one bare slot went to acute mastitis management (BP-rp23-06), which no practice question tests.
- BP-rp29-07 (minors' consent, confidentiality, 5 Ps): no figure can hold it and practice questions rp29q07 and rp29q11 cover it. The bare slot of rp29 went to capacity versus competence (BP-rp29-08, BP-rp29-10), which no practice question tests.
- rp29 rapid items sit mostly on the single rp29 figure (hormone regimens) because 90 percent of rapid items must pin a figure that holds the answer and no existing figure covers terminology, consent or ethics; those themes are carried by the practice questions, the topic and the sexp.

## Drills

| Drill | Topic | Kind | Items | Columns or sides | Tags | Blueprint ids |
|---|---|---|---|---|---|---|
| d_rp10_multi | rp10 | multi | 17 | Combined pill, patch or ring (4); DMPA injection (3); Etonogestrel implant (3); Levonorgestrel IUD (3); Copper IUD (4) | drug-mechanism, adverse-effects | BP-rp10-01, BP-rp10-03, BP-rp10-05, BP-rp10-06, BP-rp10-12 |
| d_rp11_sort | rp11 | sort | 12 | Estrogen alone is enough (6); Progestogen must be added (6) | unopposed-estrogen, risk-factors | BP-rp11-06, BP-rp11-08, BP-rp11-16, BP-rp11-02 |
| d_rp16_multi | rp16 | multi | 20 | Genital herpes (4); Chancroid (4); Primary syphilis (4); Lymphogranuloma venereum (4); Donovanosis (4) | pathogen-clues, histology-to-diagnosis | BP-rp16-02, BP-rp16-04, BP-rp16-06, BP-rp16-07, BP-rp16-08 |
| d_rp17_order | rp17 | order | 7 | 7 ordered steps | drug-mechanism, virulence-factors | BP-rp17-01, BP-rp17-02, BP-rp17-06, BP-rp17-17 |

Hi blueprint items touched by each drill:

- d_rp10_multi: hi BP-rp10-01, BP-rp10-03, BP-rp10-05, BP-rp10-06; mid BP-rp10-12
- d_rp11_sort: hi BP-rp11-06, BP-rp11-08, BP-rp11-02; mid BP-rp11-16
- d_rp16_multi: hi BP-rp16-02, BP-rp16-04, BP-rp16-06, BP-rp16-07, BP-rp16-08
- d_rp17_order: hi BP-rp17-01, BP-rp17-02, BP-rp17-06, BP-rp17-17

Design notes:

- d_rp10_multi: every item is a feature that belongs to exactly one of the five columns. Ambiguous features were left out on purpose (rifampin interaction, amenorrhea, weight gain, ovarian cancer protection) because more than one method shares them. Typical-use efficacy numbers were left to the figure.
- d_rp11_sort: the discriminator is whether an endometrium is present. Low-dose vaginal estrogen is included as the one deliberate exception (barely absorbed, no progestogen), and the two Women's Health Initiative arms sit on opposite sides.
- d_rp16_multi: chancroid, syphilis, LGV and donovanosis each carry an organism or test clue, a node clue and a treatment clue; herpes carries the vesicle, Tzanck, latency and antiviral clues. The painful-versus-painless split is the key.
- d_rp17_order: seven steps from attachment to maturation; the why of each step says why it must come after the previous one and names the drug class that blocks it. Steps 5 and 6 have no drug, which the key states.

## Facts checked twice

- CDC 2021 STI guidelines (from the topic and my own knowledge, no download): chancroid azithromycin 1 g or ceftriaxone 250 mg IM once; LGV doxycycline 100 mg twice daily for 21 days; donovanosis azithromycin for at least 3 weeks until healed; primary syphilis benzathine penicillin G 2.4 million units IM once.
- CDC US MEC (2024 update, relevant rows as I recall them, no download): combined hormonal methods are category 4 for migraine with aura, category 4 for current breast cancer (all hormonal methods) and category 3 or 4 for smokers aged 35 or older; the copper IUD is category 1 with current breast cancer. Pill, patch, ring and DMPA wording matches the topic; IUD and implant durations carry as of 2025.
- Estrogen therapy: low-dose vaginal estrogen needs no progestogen; Women's Health Initiative estrogen-alone arm (after hysterectomy) did not raise invasive breast cancer, the estrogen-plus-medroxyprogesterone arm stopped early in 2002 for breast cancer, stroke, VTE and coronary events.
- Gender-affirming care: estradiol lowers LH; spironolactone blocks androgen receptors and aldosterone; continuous GnRH agonist downregulates receptors after a flare and is reversible; testosterone lowers HDL, raises hematocrit, atrophies vaginal epithelium, stops menses but does not reliably stop ovulation; fertility preservation is discussed before the first dose.
- Breast: ADH and ALH about 4 to 5 times, carcinoma in situ about 8 to 10 times, one first-degree relative about 2 times; atypia on core biopsy is excised; myoepithelial layer and basement membrane intact until invasion; cimetidine is an antiandrogen H2 blocker; hypothyroidism raises TRH and prolactin.

## Not done, on purpose

- No second model, no download, no figure, topic or question was touched. No rapid stem repeats a practice stem of its topic (compared against fast/content/questions/rp23.json and rp29.json), and the check confirms that no rapid question text repeats one elsewhere in the block.
- Closest overlaps in answer fact, for the importing reviewer to judge: rp23r08 and rp23q07 (atypical ductal hyperplasia; the rapid asks the next step, the question asks the risk), rp23r13 and rp23q02 (phyllodes; the rapid asks the discriminating feature), rp29r10 and rp29q04 (VTE with oral estrogen; the rapid asks the adverse effect, the question asks the remedy), rp29r08 and rp29q06 (testosterone is not contraception; the rapid asks the mechanism, the question asks the method).
