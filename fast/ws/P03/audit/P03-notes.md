# P03 audit notes (rp22, rp23, rp25, rp28, rp29)

Task: bring the practice items in line with the Step 1 lessons rewritten in S06 (`fast/ws/S06/content/topics/<tid>.json`). Method: every item was read against the new lesson. An item stayed unchanged when its fact, stem and notes were already Step 1 and plain. It was rewritten when the explanation (e, x) or a wrong-option note (w) used a detail the lesson no longer teaches, ran on in very long sentences, or (rp22 q03) said something wrong. Ids, keyed answers (the text and its position), tags, bp/obj ids, difficulty and every visual field (ef, pt, media) are unchanged in all items. No item was deleted, and no keyed answer changed, so counts are the same as before.

Check run at the end: `python3 .repro/fast_check.py --ws P03 --topics rp22,rp23,rp25,rp28,rp29 --build`. Every line is `ok` except the pre-existing lines described under "Pre-existing check lines" below, which are identical on the untouched content.

SHBG: no practice item stated the old (wrong) version. rp22q04 already had obesity lowering SHBG; its explanation now says it the way the corrected lesson does (obesity lowers SHBG, so the total falls while the free level may stay normal) and its two notes no longer rely on a "two morning samples" rule. rp23q10 and rapid rp23r10 mention high SHBG in cirrhosis and hyperthyroidism, which matches the lesson.

Questions and rapid items are given as the id suffix (q01 = rp22q01, r04 = rp22r04).

## rp22 Male hypogonadism, infertility, sexual dysfunction and androgen drugs (yld mid)
Questions 13, rapid 15, drill d_rp22_multi unchanged.
- Questions kept unchanged (5): q02, q06, q09, q11, q13.
- Questions rewritten (8): q01 (explanation split into short sentences); q03 (explanation said acne comes from aromatization to estradiol, which is wrong; acne is the androgen's own effect, estradiol causes gynecomastia); q04 (explanation and two notes rewritten for the corrected SHBG story; distractor "repeat the total testosterone in the afternoon" replaced by "order a karyotype to look for Klinefelter syndrome", a Step 1 alternative from the lesson; the afternoon-timing rule is not in the lesson); q05 (dropped "before assisted reproduction"); q07 (priapism note no longer cites trazodone and sickle cell disease; explanation sentence split); q08 (the guanylate cyclase note no longer cites riociguat); q10 (stem "penile duplex ultrasonography" became "evaluation shows a venous leak"; explanation dropped "erection lasting more than 4 hours" and "fibrotic cavernosal muscle"); q12 (distractor "microdissection testicular sperm extraction" replaced by "surgical sperm retrieval", which the lesson names; stem "below the detection limit" became "very low").
- Questions deleted: none.
- Rapid kept unchanged (10): r01, r02, r03, r06, r08, r09, r12, r13, r14, r15.
- Rapid rewritten (5): r04 (recovery wording matches the lesson, "months and sometimes incomplete"); r05 (dropped "injections carry the highest risk"); r07 (dropped "before assisted reproduction"); r10 (distractors phentolamine and papaverine, which the lesson does not teach, became vardenafil and avanafil, both in the lesson's drug table); r11 (dropped "half-lives of about 4 hours" for sildenafil; now states the 17-hour tadalafil half-life and the 24 and 48 hour waits the lesson teaches).
- Rapid deleted: none.
- Drill d_rp22_multi: every item tests a point the lesson teaches; unchanged.

## rp23 Benign breast disease and gynecomastia (yld mid)
Questions 12, rapid 13, drill d_rp23_multi unchanged.
- Questions kept unchanged (5): q01, q04, q05, q06, q12.
- Questions rewritten (7): q02 (papilloma note dropped the "luminal and myoepithelial layers" wording); q03 (dropped the excision sentence, added the other two causes of discharge or lumps it rejects); q07 (stem "rigid bridges and punched-out spaces" became "monotonous population of evenly spaced, uniform cells"; explanation now ends with the one clause the lesson keeps, that atypia on a core biopsy is usually excised); q08 (atypical hyperplasia note dropped "rigid bridges"); q09 (explanation dropped the testicular ultrasound, hCG and estradiol work-up; two notes simplified); q10 (explanation and fat note no longer use "pseudogynecomastia", which the lesson does not teach); q11 (explanation dropped implant and capsule removal; the diffuse large B-cell lymphoma distractor became "fat necrosis", a lesson condition).
- Questions deleted: none.
- Rapid kept unchanged (10): r01, r02, r03, r04, r05, r06, r07, r10, r12, r13.
- Rapid rewritten (3): r08 (explanation and two notes dropped the later chemoprevention and mastectomy detail); r09 (explanation dropped smooth muscle actin, keeps p63); r11 (explanation dropped "famotidine lacks this effect" and the cytochrome P450 aside; the famotidine note is one short clause).
- Rapid deleted: none.
- Drill: unchanged.

## rp25 Maternal physiology and the hormones of pregnancy (yld mid)
Questions 11, rapid 13, drill d_rp25_sort changed (1 item).
- Questions kept unchanged (4): q02, q03, q07, q11.
- Questions rewritten (7): q01 (explanation split into short sentences); q04 (explanation no longer says inspiratory capacity increases or that relaxin loosens the rib attachments; distractor "inspiratory capacity" replaced by "minute ventilation", which the lesson teaches); q05 (stem lost reticulocyte count and bilirubin, and hemoglobin 10.8 became 11.4 so it sits in the lesson's "about 11 to 12 g/dL"; distractor "hemolysis within the placental circulation" replaced by "a fall in total red cell mass" and the table's last column renamed "Red cell mass"); q06 (explanation dropped the 0.4 to 0.8 mg/dL range, which the lesson no longer gives); q08 (explanation dropped "the uterus rotates to the right and the right ovarian vein crosses the ureter"; immunity note simplified); q09 (distractor "Trendelenburg position" replaced by "start intravenous heparin", a clot-treatment trap that uses the lesson's heparin point; phenylephrine note simplified); q10 (explanation dropped "gestational transient thyrotoxicosis").
- Questions deleted: none.
- Rapid kept unchanged (9): r01, r02, r04, r05, r06, r09, r11, r12, r13.
- Rapid rewritten (4): r03 (dropped "rise of at least about 35 percent over 48 hours" and the ectopic aside); r07 (postpartum note no longer claims pressure rises for several days after delivery); r08 (explanation no longer says relaxin loosens ribs; distractors "vital capacity" and "inspiratory capacity" became "forced vital capacity" and "minute ventilation"); r10 (dropped the 0.4 to 0.8 mg/dL range).
- Rapid deleted: none.
- Drill d_rp25_sort: one item rewritten (Serum creatinine, why-note no longer gives the 0.4 to 0.8 mg/dL range). Other items unchanged.

## rp28 Labor, delivery and the postpartum period (yld mid)
Questions 14, rapid 17, drill d_rp28_order unchanged.
- Questions kept unchanged (3): q03, q12, q14.
- Questions rewritten (11): q01 (explanation shortened; "fetal liver" step dropped); q02 (stem lost "intrauterine pressure catheter" and "240 Montevideo units", now says contractions are strong, regular and adequate; explanation lost "200 Montevideo units" and "6 hours of inadequate contractions"; latent-phase note lost the "20 hours" cutoff); q04 (sweeping note lost "from 39 weeks" and "past 41 weeks"); q05 (explanation lost the side-lying, IV fluid, amnioinfusion and forceps detail; distractor "transcervical amnioinfusion" replaced by "continue the infusion and reassure her", which tests early versus late decelerations; bottom line lost "resuscitating the fetus"); q06 (explanation lost the phenylephrine and ephedrine detail; bupivacaine note simplified); q07 (one long sentence split); q08 (two long sentences split); q09 (dropped the forceps, first birth and large infant risk sentence); q10 (tranexamic note lost the 3-hour rule); q11 (explanation and bottom line lost the "inspect and repair" management step); q13 (explanation lost sertraline and "1 in 7"; thyroiditis note lost "4 to 8 months").
- Questions deleted: none.
- Rapid kept unchanged (10): r01, r02, r04, r08, r09, r13, r14, r15, r16, r17.
- Rapid rewritten (7): r03 (dropped "2 hours in later labors"); r05 (dropped "the insert can be removed" and the misoprostol storage aside); r06 (sleep-cycle note lost "up to about 40 minutes"); r07 (explanation lost the delivery advice; sleep note lost "20 to 40 minutes"); r10 (internal sphincter note lost the "3c" grade); r11 (normal vaginal loss now "about 500 mL" as in the lesson; two notes adjusted); r12 (explanation lost the risk-factor list the lesson does not teach).
- Rapid deleted: none.
- Drill: unchanged.

## rp29 Gender-affirming care, sexual health and reproductive ethics (yld lo)
Questions 11, rapid 11, drill d_rp29_sort unchanged.
- Questions kept unchanged (1): q10.
- Questions rewritten (10): q01 (explanation split into short sentences, notes simplified); q02 (explanation lost "every 3 months", hepcidin and the switch-to-gel advice; JAK2 stays only as the polycythemia vera distractor); q03 (explanation split, ENaC and Na/K-ATPase detail dropped); q04 (distractors "conjugated equine estrogens" and "medroxyprogesterone acetate" replaced by "replace spironolactone with a GnRH agonist" and "add low-dose aspirin", which use only the lesson's drugs; explanation rewritten); q05 (stem lost "multidisciplinary team"); q06 (stem lost "no bleeding for 20 months"; distractor "fertility awareness based on cycle tracking" replaced by "progestin-only daily pill", which the stem rules out; explanation rewritten); q07 (explanation lost "treat her partner", "retest in 3 months" and the near-age peers detail); q08 (mammography note lost the "begins at 40" number; explanation tidied); q09 (one long sentence split); q11 (one very long sentence split into three).
- Questions deleted: none.
- Rapid kept unchanged (8): r01, r03, r04, r07, r08, r09, r10, r11.
- Rapid rewritten (3): r02 (aromatase note lost the boys' LH aside); r05 (explanation and three notes keep only what the lesson teaches, that testosterone lowers HDL; the hepatic lipase and triglyceride and LDL claims are gone); r06 (explanation lost "lubricants, moisturizers or low-dose topical estrogen").
- Rapid deleted: none.
- Drill: unchanged (every item matches a lesson point).

## One line per deletion or keyed-answer rewrite
None. No item was deleted and no keyed answer was rewritten. Option changes are limited to distractors, listed above.

## Items kept although unsure that every claim is Step 1
- rp25q04 and rp25r08 keep the FEV1 and forced vital capacity distractors (unchanged in pregnancy is standard teaching, the lesson does not state it).
- rp28q01 keeps placental sulfatase deficiency as a distractor (X-linked, low estriol, male fetuses).
- rp29 drill keeps "acne and scalp hair loss" and "softer skin and less muscle" in the sort items (the lesson names acne and softer skin only).

## Pre-existing check lines (identical on the untouched content)
The checks print a `no visual and no NO-VISUAL row` line for each item without a figure or pinned visual, and a share line per topic where the share of items with a visual is below the band. All of these were present before this task and are untouched, because no figure or image is among this task's files. The items without a visual are:
- rp22: question q13; rapid r15 (visual share is above the band).
- rp23: questions q04, q05, q06, q09, q10, q11 (6 of 12 carry a visual); rapid r12.
- rp25: questions q03, q04, q06, q07, q08, q10 (5 of 11); rapid r08, r09, r10, r12, r13 (8 of 13).
- rp28: questions q01, q02, q03, q04, q06, q07, q08, q09, q12, q13 (4 of 14); rapid r01-r05, r08, r09, r10, r14-r17 (5 of 17).
- rp29: questions q06-q11 (5 of 11); rapid r11 (G03 already carries its row).
The share of items with a visual pointer is exactly what it was in every topic. I wrote no NO-VISUAL rows, because those reasons belong to the owners of the visuals.
