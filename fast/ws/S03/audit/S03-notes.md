# S03 notes: Step 1 rewrite of rp26, rp27, rp30, rp9, rp5

Method for every topic: kept every blueprint item and its key terms, kept every figure, image, grid item, pretest answer key and sexp answer key unchanged, rewrote the prose in shorter plain sentences (average 15 to 17 words), defined each technical term at first use, and removed only detail beyond Step 1 or facts said twice. Word counts are the gate's own body count (headings, paragraphs, call-outs, tables, steps, sexp, why). Glossary entries were simplified and each is linked at its first mention.

## rp26 Early pregnancy: 2458 -> 2113 body words (mins 13)
- Step 2 or guideline detail removed: exact minimum hCG rise by starting level (49/40/33 percent) reduced to the classic 35 to 50 percent in 48 hours; mean sac diameter 25 mm and crown-rump 7 mm no-heartbeat cut-offs; hCG ceiling for methotrexate, the day 4 to 7 fall of 15 percent and the methotrexate contraindication list; ACOG Rh immune globulin dose split (50 vs 300 mcg) reduced to one dated sentence; subchorionic hemorrhage; molar work-up details (uterotonic, hysterectomy over 40, IUD timing, hCG follow-up schedule); GTN staging I to IV, WHO risk-score components, EMA-CO, persistence predictors (hCG over 100,000, cysts over 6 cm, age over 40).
- Course-only or non-classic: risk-factor percentages (5 to 10 times at 45, 1 to 2 percent after one mole, 15 to 20 percent after two), Asian ancestry, NLRP7 familial mole, epithelioid trophoblastic tumor row, the 50/25/25 antecedent-pregnancy split (now "about half follow a mole").
- Repetition removed: bleeding-cause table (restated ectopic, threatened loss and mole), ultrasound milestones said in both paragraph and table, loss types said in both paragraph and table, gestational-vs-fetal-age remark (taught in rp30).
- Kept although unsure: "15 to 20 percent of complete moles progress", misoprostol/mifepristone sentence, Rh immune globulin one-liner (blueprint BP-rp26-11).
- Flag: figure rp26_gtn (not mine to edit) still shows the exact GTN criteria (four values within 10 percent over 3 weeks, and so on) and the score cut-off.

## rp27 Complications of later pregnancy: 2502 -> 2340 body words (mins 14)
- Step 2 or guideline detail removed: GDM cut-off values (Carpenter-Coustan, one-step thresholds, 130 to 140 mg/dL screen cut) while keeping the test structure the blueprint names; delivery-timing weeks (34, 37) replaced by the principle; "within an hour" BP target; A1c under 6.5 percent; postpartum retest window; umbilical-artery Doppler; fetal MCA Doppler; late-bleeding work-up list (fibrinogen, fetal monitoring, labs); hysterectomy for accreta; bloody-show paragraph; the hourly monitoring interval for magnesium.
- Repetition removed: eclampsia and HELLP definitions in the first paragraph (now only in the disorder table), itch paragraph that restated the table.
- Kept although unsure: uterine rupture sentence, acute fatty liver row, aspirin 81 mg, vaginal progesterone for short cervix.

## rp30 Prenatal care: 2590 -> 2185 body words (mins 13); glossary 10 -> 9
- Step 2 or guideline detail removed: redating thresholds table and the "Redating" glossary entry (now one sentence), IVF 5-day blastocyst arithmetic, early/full/late-term table, first-visit history table and trimester-question table, visit-frequency schedule, Leopold maneuvers (rp28 teaches them), glucose-challenge cut-off, interpregnancy interval, USPSTF folic acid range, "counsel and plan" step, methadone/buprenorphine pearl, RSV months, advice about accidental live-vaccine dose and delaying conception.
- Repetition removed: trisomy 21 and 18 marker patterns now in one small table instead of a long sentence; milestones not restated.
- Kept although unsure: ionizing radiation 50 mGy, HPV "deferred" row, face and skeletal rows of the anatomy table, carrier screening and microarray sentence.

## rp9 Amenorrhea, abnormal bleeding, PCOS, infertility: 2595 -> 2378 body words (mins 14)
- Course-only or Step 2 removed: delayed-puberty digression, PMOS renaming, hormone therapy to age 51, FSH cut-off of 25 mIU/mL, GI and urinary mimics of vaginal bleeding, saline infusion sonography and hysteroscopy as imaging steps, "irregular menstrual bleeding" variability definition, endometriosis surgical option, "why menses stop" column of the cause table (paragraphs explain it).
- Repetition removed: empty sella shortened to the part that explains hormones; clomiphene mechanism no longer said in both the steps and the why block.
- Kept although unsure: empty sella paragraph, relative energy deficiency in sport sentence, AMH and antral follicle count.

## rp5 Sex determination and genital development: 2407 -> 2049 body words (mins 13)
- Course-only or Step 2 removed: sagittal T2 MRI anatomy of cervix and vagina, the T2 imaging paragraph for septate vs bicornuate uterus (the table already carries the imaging clue), ectopic ureter detail by sex (one clause kept), rete testis and efferent ductules, appendix testis torsion "blue dot", cryptorchidism prevalence percentage, DES drug-history aside.
- Kept although unsure: ectopic ureter clause, circumcision-delay remark in the hypospadias call-out, cremasteric reflex afferent limb.

## Checks
`python3 .repro/fast_check.py --ws S03 --topics rp26,rp27,rp30,rp9,rp5 --build` prints only ok lines. Guides unchanged (no guide card mentions removed content).
