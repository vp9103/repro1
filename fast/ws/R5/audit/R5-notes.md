# R5 notes: First Aid checklist audit H (rp16-rp30), 79 rows

Source: .repro/coverage/fa-audit-H.md. Every row was applied; where the wording or place differs from the row, the line says why. Block numbers (bN) are the 0-based body indices of the files as they now stand (splits and the two inserted rows shift later indices). Gate-style check: `python3 .repro/fast_check.py --ws R5 --topics rp16,...,rp30 --build` prints only `ok` lines. No SVG label, glossary file, question or rapid file was changed.

Body words before -> after: rp16 2026 -> 2251, rp17 2004 -> 2267, rp18 1782 -> 1957, rp19 2160 -> 2204, rp20 2035 -> 2141, rp21 1868 -> 1876, rp22 1955 -> 2031, rp23 1743 -> 1767, rp24 1833 -> 1885, rp25 1944 -> 1983, rp26 2190 -> 2271, rp27 2350 -> 2421, rp28 2240 -> 2366, rp29 2021 -> 2145, rp30 2252 -> 2377 (band 900-2600).

## rp16
- rp16 b1 doxycycline (QUALIFIER): applied in b2. The long chlamydia paragraph was split at "Doxycycline works instead:" (b1 biology, b2 drug and serovars) to stay under 170 words. Wording as given.
- rp16 b1 serovars A-C (MISSING): applied in b2, wording as given (trachoma, leading infectious cause of blindness).
- rp16 b2 Thayer-Martin (QUALIFIER): applied in b3 as "vancomycin, colistin and nystatin suppress gram-positive bacteria, other gram-negative bacteria and fungi". Trimethoprim left out: it belongs to the Martin-Lewis variant, not to the Thayer-Martin medium taught here, and rapid/rp16 already says vancomycin, colistin, nystatin.
- rp16 b5 call chlamydia epidemiology (MISSING): applied in the b6 call, first sentence, as given.
- rp16 b6 pharynx and rectum (MISSING): applied in b7; joined to the ceftriaxone sentence ("so the exposed site is tested. It is treated with ...") so two sentences do not both open with "Gonorrhea".
- rp16 b6 ceftriaxone (QUALIFIER): applied in b7 as "third-generation cephalosporin that binds penicillin-binding proteins and blocks cross-linking of the cell wall ... older drugs such as penicillin and fluoroquinolones". The paragraph was split after it (new b8 starts "Chlamydia is treated with doxycycline").
- rp16 b9 PID by organism (MISSING): applied in b11, wording as given.
- rp16 b26 secondary syphilis (MISSING): applied in b28 (fever and malaise, patchy hair loss), wording as given.
- rp16 b28 aortitis consequence (QUALIFIER): applied in b30 ("tree-bark intima ... aneurysm of the ascending aorta and arch that can cause aortic regurgitation"); "ascending aorta and arch" matches the paragraph's own wording and FA.
- rp16 b28 neurosyphilis (MISSING): applied in b31 (new paragraph "Neurosyphilis takes several forms."); dorsal roots and columns, wide base, Romberg, Charcot joints, general paresis, meningovascular stroke. "in young people" dropped from the stroke clause ("in people without hypertension") because FA gives only "stroke without hypertension".
- rp16 b30 false positives (MISSING): applied in b33 (mononucleosis, hepatitis, rheumatic fever, leprosy, procainamide, chlorpromazine); reworded so the drugs are "patients taking drugs such as ...", not "antibodies appear in drugs".
- rp16 b31 CSF testing (MISSING): applied in b34, with "does not reach that fluid" at the end so "cerebrospinal fluid" is not said twice.
- rp16 b36 neonatal chlamydial pneumonia (QUALIFIER): applied in b39 as given.

## rp17
- rp17 new row after b10, CD4 ladder (MISSING, highest priority): applied as a short intro paragraph (b11) plus a compact table (b12) directly after the "From infection to AIDS" steps. Rows: below 500 (thrush, oral hairy leukoplakia EBV, Kaposi HHV-8, tuberculosis can reactivate at any count; no prophylaxis), below 200 (Pneumocystis, PML JC virus, HIV dementia; TMP-SMX), below 100 (Toxoplasma abscesses, cryptococcal meningitis, Candida esophagitis; TMP-SMX also covers Toxoplasma if IgG positive), below 50 (CMV retinitis and colitis, MAC, EBV-associated CNS lymphoma; azithromycin for MAC only if the virus is not yet suppressed by ART, the current-guideline form of the classic CD4 under 50 rule). Table chosen over the paragraph the audit proposed, as the user allowed.
- rp17 b7 integrase row (MISSING): applied, new row after the protease inhibitor row, wording as given.
- rp17 b7 NNRTI cell (QUALIFIER): applied as given.
- rp17 b7 protease inhibitor cell (QUALIFIER): applied as given.
- rp17 b8 call rifampin (MISSING): applied as given.
- rp17 b11 genotyping (MISSING): applied in b13. To keep the paragraph logical the sentence "Everyone is offered opt-out screening, and every pregnancy is tested." moved to the start of the paragraph so the genotype sentence ends the testing sequence.
- rp17 b18 HSV-2 meningitis (MISSING): applied in b20 as given.
- rp17 b21 CMV drugs (MISSING): applied in b23-b24 (paragraph split): "same drugs treat varicella-zoster but not cytomegalovirus, which lacks thymidine kinase" and "ganciclovir, which a CMV kinase activates, treats CMV retinitis and colitis but suppresses the bone marrow".
- rp17 b27 poxvirus (QUALIFIER): applied in b30 as given (b1 keeps its short mention of cytoplasmic replication).

## rp18
- rp18 b1 nonspecific newborn picture (MISSING): applied as a new short paragraph (b6) opening the "Which signature finding names each TORCH organism?" section, not inside b1. Reason: b1's following sentence says "This damage happens in the womb ...", which the added sentence would have broken, and the shared picture only matters when the signature finding is chosen.
- rp18 b6 toxoplasma (MISSING): applied in b7 (mother usually asymptomatic or lymphadenopathy; pyrimethamine plus sulfadiazine with leucovorin).
- rp18 b7 rubella maternal picture (MISSING): applied in b8; the paragraph was split before "Maternal varicella" and the varicella and Zika text (b10) now follows the rubella image (b9).
- rp18 b13 syphilis stages (MISSING): applied in b15 ("most likely when the mother has primary or secondary syphilis, so treating her early in pregnancy can prevent fetal infection"; "can prevent" rather than "prevents").
- rp18 b13 rhagades and short maxilla (MISSING): applied in b16 (paragraph split into early and late findings).
- rp18 b19 HBeAg (MISSING): applied in b22 as given.
- rp18 b22 CAMP (QUALIFIER): applied in b25 as two sentences (hippurate-positive, CAMP-positive; CAMP factor enlarges the S. aureus zone of hemolysis; capsule is the main virulence factor).
- rp18 b22 listeriolysin (MISSING): applied in b25 as given.

## rp19
- rp19 b3 homologs (MISSING): applied as the last sentence of the b3 call.
- rp19 b5 heat spares Leydig cells (QUALIFIER): applied in b5 as given.
- rp19 fig rp19_scrotum teach (ERROR): applied in figs/rp19_scrotum.json ("Scrotal and penile skin drain to the superficial inguinal nodes and the glans to the deep inguinal nodes ..."), as rp2 teaches. The SVG label "Penis and scrotal skin: inguinal nodes" is not wrong and was left unchanged.

## rp20
- rp20 b2 cryptorchidism hormones (QUALIFIER): applied in b2. The row says FSH and LH rise with testosterone normal in unilateral disease; rp19 teaches that germ cell loss alone raises FSH only, so the text says inhibin B falls and FSH rises, and that LH rises together with the fall in testosterone in bilateral disease.
- rp20 b15 varicocele (QUALIFIER): applied in b15-b16 (paragraph split to stay under 170 words); most common cause of scrotal enlargement in adult men, Valsalva, does not transilluminate.
- rp20 b18 Klinefelter (MISSING): applied in b19 as a separate sentence after the "abnormal fetal development" clause.
- rp20 b21 choriocarcinoma spread (QUALIFIER): applied in b22 as given.
- rp20 b21 BEP drugs (MISSING): applied as new paragraph b24 after the yolk sac image (cisplatin, bleomycin, etoposide), so the nonseminoma paragraph keeps its image.

## rp21
- rp21 b20 PSA and PAP with metastases (MISSING): applied in b20 as given.

## rp22
- rp22 b6 androgens (QUALIFIER): applied in b6; the growth-plate clause is attached to the estradiol sentence ("estradiol, which causes gynecomastia and, in adolescents, closes the growth plates early"), since estradiol is what closes the plates, and oral anabolic steroids and hepatic adenomas follow.
- rp22 b9 Kartagener (QUALIFIER): applied in b9 as given.
- rp22 b21 PDE5 inhibitors in pulmonary hypertension (MISSING): applied in b21 as given.
- rp22 b21 alprostadil and the ductus (MISSING): applied in b22 (paragraph split after the nitrate and NAION text), as given.

## rp23
- rp23 b18 papilloma (QUALIFIER): applied in b18 ("Bloody or serous ... the most common cause of pathologic nipple discharge. It is a benign papillary growth ...").
- rp23 b19 fat necrosis (QUALIFIER): applied in b19 as "although many patients recall no injury"; the "up to half" figure was not used because the percentage could not be verified here.
- rp23 b21 periductal mastitis step (QUALIFIER): applied in the b21 step "Smoking changes the duct lining" (toxins in smoke and a relative vitamin A deficiency).

## rp24
- rp24 b1 female sex and age (MISSING): applied in b1 as "The strongest risk factors are female sex and older age. Many others work through estrogen: breast epithelium divides ...".
- rp24 b18 inflammatory carcinoma (QUALIFIER): applied in b18 as given.
- rp24 b25 trastuzumab gastric cancer (MISSING): applied in the "Antibody attack" step as "Trastuzumab, which also treats HER2-positive gastric cancer, binds ...".
- rp24 b26 dexrazoxane (QUALIFIER): applied in the b26 call as given.
- rp24 b27 raloxifene (QUALIFIER): applied in b27 as given.

## rp25
- rp25 b1 urine hCG (MISSING): applied in b1 as given.
- rp25 b8 murmur and S3 (MISSING): applied in b8, after the sentence that points to the steps, so "this rise" still refers to cardiac output.

## rp26
- rp26 b10 ruptured appendix (MISSING): applied in b10 ("a ruptured appendix, whose pelvic infection can scar the tube").
- rp26 b11 appendicitis mimic (MISSING): applied in b11 as given.
- rp26 b11 methotrexate and leucovorin (MISSING): applied in b11; the row's "(mouth ulcers, marrow suppression, liver injury) can be reversed with leucovorin" was split so leucovorin is not credited with reversing liver injury: "It also harms other dividing cells, causing marrow suppression and mouth sores, and it can injure the liver; leucovorin (folinic acid) rescues normal cells because it bypasses the blocked enzyme."
- rp26 b15 antiphospholipid diagnosis (MISSING): applied in the b15 call as given (88 words, under the 110 limit).
- rp26 b17 and b24 partial mole karyotype (QUALIFIER): applied in b17 ("most often 69,XXY but also 69,XXX or, rarely, 69,XYY") and in the b24 Karyotype table cell. The figure rp26_moles still labels 69,XXY only, which is the commonest and is not wrong.
- rp26 b29 cannonball (QUALIFIER): applied in b29 as given.

## rp27
- rp27 b5 HELLP complications (QUALIFIER): applied in b5 as given (subcapsular hematoma that may rupture, then DIC).
- rp27 b11 hydralazine (QUALIFIER): applied in the "Lower severe-range pressure" step as given.
- rp27 b11 methyldopa (MISSING): applied in the same step as "Methyldopa, a central alpha-2 agonist, is an older choice for chronic hypertension in pregnancy and can cause a Coombs-positive hemolytic anemia."
- rp27 b27 ABO disease (QUALIFIER): applied in b27 as "the disease is mild: jaundice appears in the first day of life and phototherapy usually treats it, the Coombs test is only weakly positive, and it cannot be prevented".
- rp27 b37 acute fatty liver (MISSING): applied in the table row, Clue cell (microvesicular fat; fetal fatty acid oxidation defect, LCHAD deficiency).

## rp28
- rp28 b25 Erb palsy (QUALIFIER): applied in b25 as given.
- rp28 b36 lactation (MISSING): applied in new b37 (paragraph split after lactational amenorrhea): IgA and immune cells, low vitamin D, lower maternal breast and ovarian cancer risk.
- rp28 b37 endometritis (MISSING): applied in b38 (polymicrobial, clindamycin plus gentamicin).
- rp28 b37 Sheehan (QUALIFIER): applied in new b39 (the postpartum paragraph was split before the thromboembolism sentence), as given.
- rp28 b38 mood changes (QUALIFIER): applied in b40; "most likely with a history of bipolar disorder" became "most likely in a woman with bipolar or another psychotic disorder" (FA: bipolar or psychotic disorder).

## rp29
- rp29 b23 minors (QUALIFIER): applied in b23 as given.
- rp29 b24 consent exceptions (MISSING): applied in b24; "Its exceptions" became "The exceptions to informed consent" and "a patient who waives the right to be informed" so the antecedent is clear.
- rp29 new paragraph, spouse consent (MISSING): applied as new paragraph b25, first sentence as given.
- rp29 new paragraph, refusal in pregnancy (MISSING): applied as the second sentence of b25, as given.

## rp30
- rp30 b11 nasal bone (QUALIFIER): applied in b11 as given.
- rp30 b11 trisomy 13 (MISSING): applied in b11 as given.
- rp30 b26 isotretinoin iPLEDGE (QUALIFIER): applied in the table cell as given.
- rp30 b28 antimicrobials to avoid (MISSING): applied as three new rows in the b26 exposure table (sulfonamides near term: kernicterus; chloramphenicol: gray baby syndrome; trimethoprim) and one sentence in b28 (ribavirin and griseofulvin teratogenic, clarithromycin embryotoxic). Aminoglycosides, fluoroquinolones and tetracyclines were already taught. The table has 12 rows (limit 14).
- rp30 b28 trimethoprim (MISSING): applied as the table row "Trimethoprim, first trimester, folate antagonist: neural tube defects" (the first-trimester timing and neural tube risk as FA gives).
- rp30 b30 tobacco (QUALIFIER): applied in the Tobacco row, middle cell, as "tobacco is its leading cause in developed countries" plus later SIDS and ADHD.

## Checks
- `python3 .repro/fast_check.py --ws R5 --topics rp16,rp17,rp18,rp19,rp20,rp21,rp22,rp23,rp24,rp25,rp26,rp27,rp28,rp29,rp30 --build`: every topic structure, key terms, figures (rp19), rendered views and rendered figure legibility line is `ok`.
- The two widest additions, the rp17 CD4 table and the rp30 exposure table, were rendered at 1280 px and 400 px: readable, scroll inside their table wrapper like the other wide tables, no page-level horizontal scroll.
