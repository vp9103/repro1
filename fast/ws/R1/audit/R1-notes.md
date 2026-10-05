# R1 audit notes (repair round 1 after P3.V run 2, report .repro/verify/P3-report.md)

Method: every change starts from the current fast/content file. Each lesson changed was re-read start to finish after
the edit. The facts below were checked twice; time-bound statements carry "as of". American spelling.

Figure files: the labels the verifier named live only in the figure SVGs (figs/<key>.svg), not in figs/<key>.json, so
the SVG of rp19_scrotum, rp19_axis, rp12_wall and rp11_firstmove was edited in this workspace as well as the JSON of
rp20_gct, rp30_timeline and rp11_firstmove. Each SVG was rendered at 1280 px to confirm the new lines fit their boxes
(fast_check --build: figures legible, no overlap or clipping: ok).

## Findings and where each is fixed

| topic | finding | fixed in |
|---|---|---|
| rp20 | (1) hydrocele cause and 1-year closure; end on explaining sentence | b13: "Most infant hydroceles close on their own by about 1 year. An acquired adult hydrocele is noncommunicating and can follow infection, trauma or a tumor, so a new adult hydrocele is imaged to exclude a testicular tumor." |
| rp20 | (2) BEP / cisplatin; seminoma radiosensitivity | b21 ends with "Metastatic germ cell tumors, seminoma and nonseminoma alike, are treated with cisplatin-based chemotherapy, such as BEP (bleomycin, etoposide, cisplatin)." Seminoma radiosensitivity was already taught in b20 ("very sensitive to radiation and chemotherapy"), unchanged. |
| rp20 | (3) prematurity | b1: "...most common congenital genital anomaly in boys, and prematurity raises the risk. Most testes descend by 6 months." |
| rp20 | (5) marker half-lives | figure rp20_gct teach: half-lives removed; keeps "a marker that falls more slowly than expected after surgery signals residual or metastatic disease". |
| rp20 | (4) glossary link of 'tunica' | see glossary decisions (rp21_ta). |
| rp30 | (1) timeline teach | figure rp30_timeline teach: ACOG redating thresholds and early/full/late term subdivisions removed; now "an early ultrasound replaces the LMP date when the two differ by more than a few days. Preterm is before 37 weeks and post-term is 42 weeks or later." (matches b2). |
| rp30 | (2) heart row | b22 table: "Congenital heart defects; conotruncal defects (transposition, tetralogy of Fallot) can look normal on the four-chamber view" / "Most common anomaly; needs four-chamber plus outflow-tract views, and fetal echocardiography if suspected". |
| rp30 | (3) 'inhibin' link | glossary decision rp22_inhibin. |
| rp30 | (4) radiation | b29: "has not been shown to harm the fetus below 50 mGy. Intellectual disability and microcephaly need higher doses, roughly 60 to 310 mGy at 8 to 15 weeks. A chest film delivers far less than either, so needed imaging is not withheld." (ACOG CO 723) |
| rp19 | (1) prostatic acid phosphatase | b17 prostate row: "PSA, prostatic acid phosphatase, citrate, zinc" (it is the only place the lesson lists the prostate secretions). |
| rp19 | (2) 'tunica albuginea' link | glossary decision rp21_ta. |
| rp19 | (3) figures | rp19_scrotum.svg: varicocele grades and the right/left nodal stations removed (para-aortic, never inguinal, kept); the two freed left-box lines now say pooled warm blood harms sperm, a correctable cause of infertility (both in b15). rp19_axis.svg: "falls about 1% a year after 40" now "falls gradually with age" (b24 wording). |
| rp19 | (4) b5 and b19 | b5: obesity warms the testis and also acts through hormones (aromatase in fat makes estradiol, lowering LH), pointing to the feedback section (b24). b19: "A blockage on both sides causes obstructive azoospermia... A blockage on one side usually does not, because the other side still delivers sperm." |
| rp12 | (1) SGLT2 | b12: "diabetes or SGLT2 inhibitors that put glucose in the urine". |
| rp12 | (2) metronidazole and alcohol | b10: "Textbooks list a disulfiram-like reaction with alcohol (flushing and nausea), a classic exam point. However, the CDC 2021 STI guidelines, still current as of 2025, found no convincing evidence for it and no longer require patients to avoid alcohol." |
| rp12 | (3) 'basal cells' link | glossary decision rp21_basal. |
| rp12 | (4) Word catheter | rp12_wall.svg: label now "Blocked: cyst, then abscess" (removed). |
| rp12 | minor atrophic vaginitis | b2: "After menopause, estrogen loss causes atrophic vaginitis, in which the epithelium is thin and the rugae are flat." |
| rp11 | postmenopausal bleeding | b23 steps 2 and 3 rewritten "as of 2026": ACOG advises both transvaginal ultrasound and endometrial sampling at the first evaluation for most patients because endometrial cancer must be excluded (b22 already says about 90 percent of endometrial cancers present with bleeding); ultrasound alone only for a single episode, a fully seen stripe of 4 mm or less, no significant risk factors and reliable prompt follow-up; otherwise office endometrial biopsy, then hysteroscopy with curettage. Figure rp11_firstmove: SVG cell now "Ultrasound plus endometrial sampling for most patients (2026)", caption (JSON) and aria-label updated. |
| rp14 | b14 (the steps row, b15 by index) | steps row 2 now carries the same 2026 rule and the four conditions; the b14 sentence "about 1 in 10 of these women has endometrial cancer" is unchanged and consistent. |
| rp26 | b8 Rh immune globulin | scope and exception restored: ACOG 2024 lets clinicians forgo Rh testing and Rh immune globulin only after abortion or pregnancy loss before 12 weeks (spontaneous, induced or threatened); still given for ectopic pregnancy (50 mcg before 12 weeks, 300 mcg from 12 weeks) and after molar evacuation; from 12 weeks on within 72 hours for any loss or bleeding. |

## Glossary cross-links

Method: the cross file lists terms by text match. The engine's real behavior (candidates are title, key and aliases; first
unlinked mention per topic; prose in h, p, call, why, table cells, steps and revealed sexp why only) was re-run on the
built page for every topic (scratch script, not kept). Result: 190 real cross-topic links before, 172 after; no
glossary term became unreachable (every term still links somewhere). 103 distinct keys cover all 233 rows of the cross
file (rows that differ only by topic or duplicate key share a decision), plus 8 keys the engine-based scan found that the
cross file lacked. Rows in the cross file that the engine never links (sexp options, shadowed duplicates) are marked
KEEP with the others.

Entries changed: 16 in 11 files (rp21, rp22, rp23, rp11, rp5, rp12, en7, rp14, rp29, en2, rp6): 8 generic aliases
dropped, 10 definitions widened (two entries had both).

| key | term(s) matched | owner | linked in | decision |
|---|---|---|---|---|
| en5_deiod | 5'-deiodinase | en5 | en6 | KEEP: same concept, definition fits the linked context. |
| rp6_5ard | 5-alpha-reductase deficiency, 5α-reductase deficiency | rp6 | rp19, rp5 | KEEP: same concept, definition fits the linked context. |
| rp23_adh | ADH, Atypical ductal hyperplasia | rp23 | en1, en2, en9, rp28, rp24 | CHANGED: dropped alias 'ADH' (it caught antidiuretic hormone in en1, en2, en9, rp28). The full term still links in rp24 (same concept). |
| rp5_amh | AMH | rp5 | rp6, rp8, rp9 | CHANGED definition to cover both roles: fetal Sertoli-cell AMH (rp6) and granulosa-cell AMH as the ovarian reserve marker (rp8, rp9). |
| rp14_adenomyosis | Adenomyosis | rp14 | rp9 | KEEP: same concept, definition fits the linked context. |
| rp27_alloimm | Alloimmunization | rp27 | rp18, rp30 | KEEP: same concept, definition fits the linked context. |
| rp22_adt | Androgen deprivation therapy | rp22 | rp21, rp23 | KEEP: same concept, definition fits the linked context. |
| rp26_apls | Antiphospholipid syndrome | rp26 | rp16, rp27 | KEEP: same concept, definition fits the linked context. |
| rp25_aortocaval | Aortocaval compression | rp25 | rp28 | KEEP: same concept, definition fits the linked context. |
| rp14_asherman | Asherman syndrome | rp14 | rp8, rp9 | KEEP: same concept, definition fits the linked context. |
| rp6_azoo | Azoospermia | rp6 | rp19, rp22 | KEEP: same concept, definition fits the linked context. |
| rp24_brca | BRCA1 and BRCA2 | rp24 | rp15 | KEEP: same concept, definition fits the linked context. |
| rp12_bartholin | Bartholin glands | rp12 | rp2, rp5 | KEEP: same concept, definition fits the linked context. |
| rp1_batson | Batson venous plexus | rp1 | rp21 | KEEP: same concept, definition fits the linked context. |
| rp3_batson | Batson venous plexus | rp3 | rp21 | KEEP: same concept, definition fits the linked context. |
| rp13_p16 | Block p16 staining | rp13 | rp12 | KEEP: same concept, definition fits the linked context. |
| rp19btb | Blood-testis barrier, blood-testis barrier | rp19 | rp20 | KEEP: same concept, definition fits the linked context. |
| rp7_boneage | Bone age | rp7 | rp6 | KEEP: same concept, definition fits the linked context. |
| rp4_cap | Capacitation | rp4 | rp19 | KEEP: same concept, definition fits the linked context. |
| rp2_colles | Colles fascia | rp2 | rp19 | KEEP: same concept, definition fits the linked context. |
| rp8_cl | Corpus luteum | rp8 | rp11, rp14, rp25, rp4, rp9 | KEEP: same concept, definition fits the linked context. |
| rp20cremreflex | Cremasteric reflex | rp20 | rp19, rp5 | KEEP: same concept, definition fits the linked context. |
| rp6_hygroma | Cystic hygroma | rp6 | en5 | CHANGED definition wording to a posterior-neck lymphatic swelling, fetal ultrasound sign of Turner syndrome (en5 context is a neck mass in the posterior triangle). |
| rp21_dht | DHT | rp21 | rp19, rp22, rp5, rp6, rp7 | CHANGED definition: now also names the external genitalia, balding and acne (rp5, rp6, rp7, rp19, rp22 use DHT for those). |
| rp25_decid | Decidualization | rp25 | rp8 | KEEP: same concept, definition fits the linked context. |
| rp8_decid | Decidualization | rp8 | rp25 | KEEP: same concept, definition fits the linked context. |
| rp14_endometrioma | Endometrioma | rp14 | rp15, rp9 | KEEP: same concept, definition fits the linked context. |
| rp11_estrone | Estrone | rp11 | rp14, rp23, rp24, rp8, rp9 | CHANGED definition: granulosa cells before menopause, fat tissue after it (rp8 granulosa aromatase; rp14, rp23, rp24 fat). |
| rp23_fn | Fat necrosis | rp23 | en9 | CHANGED definition to cover fat necrosis of the breast and of acute pancreatitis (en9 context: lipase, saponification). |
| rp28_ferguson | Ferguson reflex | rp28 | en1 | KEEP: same concept, definition fits the linked context. |
| rp15_folcyst | Follicular cyst | rp15 | rp8 | KEEP: same concept, definition fits the linked context. |
| rp29_gi | Gender identity | rp29 | rp6 | KEEP: same concept, definition fits the linked context. |
| rp8_granulosa | Granulosa cells, granulosa cell | rp8 | rp11, rp7, rp14, rp15 | KEEP: same cell lineage. 'granulosa cell tumors' (rp14, rp15, rp7) land on the normal-cell definition, which explains why the tumor makes estrogen and inhibin. |
| rp5_gub | Gubernaculum | rp5 | rp1, rp20 | KEEP: same concept, definition fits the linked context. |
| rp25_hpl | Human placental lactogen, hPL | rp25 | rp27, rp4, rp26 | KEEP: same concept (three duplicate hPL entries agree; rp26 'hPL positive' is the same hormone as a tumor marker). |
| rp27_hpl | Human placental lactogen, hPL, placental lactogen | rp27 | rp25, rp4, rp26 | KEEP: same concept (duplicate hPL entries agree). |
| rp4_hpl | Human placental lactogen, hPL | rp4 | rp25, rp27, rp26 | KEEP: same concept (duplicate hPL entries agree). |
| rp5_insl3 | INSL3 | rp5 | rp20 | KEEP: same concept, definition fits the linked context. |
| rp22_inhibin | Inhibin B, inhibin | rp22 | rp19, rp8, rp11, rp15, rp30, rp9 | CHANGED: dropped generic alias 'inhibin' (caught inhibin A on the rp30 quad screen and generic 'inhibin' in rp9/rp15); definition now covers Sertoli (men) and granulosa (women) inhibin B for rp8, rp11, rp19. Lowercase 'inhibin B' no longer auto-links (the engine matches 'Inhibin B' case-sensitively), a harmless loss. |
| rp7_kiss | Kisspeptin | rp7 | rp11 | KEEP: same peptide (rp11 KNDy neurons). |
| rp8_lhsurge | LH surge | rp8 | rp10, rp7, rp9 | KEEP: same concept, definition fits the linked context. |
| rp12_lsa | Lichen sclerosus | rp12 | rp21 | CHANGED definition to cover penile lichen sclerosus (rp21: pathologic phimosis, foreskin) as well as the vulvar disease. |
| rp5_mrkh | Mayer-Rokitansky-Küster-Hauser syndrome | rp5 | rp9 | KEEP: same concept, definition fits the linked context. |
| rp24_myo | Myoepithelial cells | rp24 | rp3 | KEEP: same concept, definition fits the linked context. |
| rp3_myo | Myoepithelial cells | rp3 | rp24 | KEEP: same concept, definition fits the linked context. |
| en7_myxedema | Myxedema | en7 | en6 | CHANGED definition to cover generalized myxedema (hypothyroidism) and pretibial myxedema in Graves disease (en6 context). |
| rp4_crest | Neural crest | rp4 | en5, en7, rp30 | KEEP: same concept (thyroid C cells in en5/en7, retinoic acid in rp30 are neural crest derivatives and effects). |
| rp30_nt | Nuchal translucency | rp30 | rp6 | KEEP: same concept, definition fits the linked context. |
| rp30_organogenesis | Organogenesis | rp30 | rp18, rp27 | KEEP: same concept, definition fits the linked context. |
| rp22_pde5 | PDE5 inhibitor, PDE5 inhibitors | rp22 | rp21, rp19 | KEEP: same concept, definition fits the linked context. |
| rp21_psa | PSA, prostate-specific antigen | rp21 | rp19, rp22, rp29, rp1 | KEEP: same concept (rp1 semen, rp19 liquefaction, rp22 monitoring, rp29 transgender care). |
| rp24_paget | Paget disease of the nipple | rp24 | rp12 | KEEP: same concept, definition fits the linked context. |
| rp19pamp | Pampiniform plexus | rp19 | rp5 | KEEP: same concept, definition fits the linked context. |
| rp1_splanchnic | Pelvic splanchnic nerves | rp1 | rp19, rp2 | KEEP: same concept, definition fits the linked context. |
| rp2_perbody | Perineal body | rp2 | rp28 | KEEP: same concept, definition fits the linked context. |
| rp27_abruption | Placental abruption | rp27 | rp30 | KEEP: same concept, definition fits the linked context. |
| en6_ppt | Postpartum thyroiditis | en6 | rp28 | KEEP: same concept, definition fits the linked context. |
| rp22_primary | Primary hypogonadism | rp22 | rp6 | KEEP: same concept, definition fits the linked context. |
| rp11_poi | Primary ovarian insufficiency | rp11 | rp9 | KEEP: same concept, definition fits the linked context. |
| rp9_poi | Primary ovarian insufficiency | rp9 | rp11 | KEEP: same concept, definition fits the linked context. |
| rp20procvag | Processus vaginalis | rp20 | rp1, rp19, rp5 | KEEP: same concept, definition fits the linked context. |
| rp5_pv | Processus vaginalis | rp5 | rp1, rp19, rp20 | KEEP: same concept, definition fits the linked context. |
| en6_ptu | Propylthiouracil | en6 | en5, rp30 | KEEP: same concept, definition fits the linked context. |
| en2_rathke | Rathke pouch | en2 | rp4 | KEEP: same concept, definition fits the linked context. |
| rp20reinke | Reinke crystals | rp20 | rp19 | KEEP: same concept, definition fits the linked context. |
| rp1_retrograde | Retrograde ejaculation | rp1 | rp19, rp22 | KEEP: same concept, definition fits the linked context. |
| en1_shbg | SHBG, Sex hormone-binding globulin | en1 | rp10, rp19, rp22, rp9, rp23 | KEEP: same concept; the three SHBG entries (en1, rp9, rp22) agree on direction of every factor. |
| rp22_shbg | SHBG, sex hormone-binding globulin | rp22 | en1, rp10, rp19, rp9, rp23 | KEEP: same concept (see en1_shbg). |
| rp9_shbg | SHBG, Sex hormone-binding globulin | rp9 | en1, rp10, rp19, rp22, rp23 | KEEP: same concept (see en1_shbg). |
| rp5_sry | SRY | rp5 | rp6 | KEEP: same concept, definition fits the linked context. |
| rp15_sd | Schiller-Duval bodies | rp15 | rp20 | KEEP: same concept, definition fits the linked context. |
| rp20schiller | Schiller-Duval bodies | rp20 | rp15 | KEEP: same concept, definition fits the linked context. |
| rp2_sentinel | Sentinel lymph node, sentinel node | rp2 | rp24, rp3 | KEEP: same concept (breast context in rp24 fits the generic definition). |
| rp3_sentinel | Sentinel lymph node, sentinel node | rp3 | rp24, rp2 | KEEP: same concept (breast). |
| en5_nis | Sodium-iodide symporter | en5 | en7 | KEEP: same concept, definition fits the linked context. |
| rp25_syncytio | Syncytiotrophoblast | rp25 | rp20, rp26, rp4 | KEEP: same concept, definition fits the linked context. |
| rp4_syn | Syncytiotrophoblast | rp4 | rp20, rp25, rp26 | KEEP: same concept, definition fits the linked context. |
| en5_tbg | TBG, Thyroxine-binding globulin | en5 | en1, en7, rp25 | KEEP: same concept, definition fits the linked context. |
| rp25_tbg | TBG, Thyroxine-binding globulin | rp25 | en1, en5, en7 | KEEP: same concept, definition fits the linked context. |
| rp3_tdlu | Terminal duct lobular unit | rp3 | rp24 | KEEP: same concept, definition fits the linked context. |
| en5_tpo | Thyroid peroxidase | en5 | en6, en7 | KEEP: same concept, definition fits the linked context. |
| rp13_tz | Transformation zone | rp13 | rp8 | KEEP: same concept, definition fits the linked context. |
| rp21_ta | Tunica albuginea, tunica | rp21 | rp19, rp2, rp20, rp22, rp5 | CHANGED: dropped alias 'tunica' (caught 'tunica vaginalis' in rp1, rp5, rp19, rp20); definition now covers the testicular capsule (rp19, rp20) and the corpora cavernosa (rp2, rp22). |
| rp11_unopposed | Unopposed estrogen, unopposed | rp11 | rp14, rp15, rp6, rp8, rp9 | CHANGED: dropped bare alias 'unopposed' (generic; the phrase 'unopposed estrogen' is still matched by the term). All five cross-links are the endometrial sense (rp9, rp10, rp14, rp15, rp8) and fit. The rp6 'unopposed estrogen' in the 46,XY option is a sexp option, which the engine never auto-links. |
| en5_wc | Wolff-Chaikoff effect | en5 | en6, en7 | KEEP: same concept, definition fits the linked context. |
| en7_wolff | Wolff-Chaikoff effect | en7 | en5, en6 | KEEP: same concept, definition fits the linked context. |
| rp6_ais | androgen insensitivity | rp6 | en1, rp29, rp9 | KEEP: same concept in en1, rp9, rp29. |
| rp14_ein | atypical hyperplasia | rp14 | rp23, rp24 | CHANGED: dropped alias 'atypical hyperplasia' (caught breast atypical hyperplasia in rp23 and rp24). rp14 links the term explicitly. |
| rp21_basal | basal cells | rp21 | rp12, rp13, rp17 | CHANGED: dropped aliases 'basal cells' and 'basal cell' (caught skin and cervical basal cells in rp12, rp13, rp17; the entry is the prostate basal cell layer). Own rp21 link is explicit and stays. |
| rp29_cap | capacity | rp29 | rp25 | CHANGED: dropped alias 'capacity' (caught 'functional residual capacity' in rp25). Own rp29 link is explicit. |
| rp7_cdgp | constitutional delay | rp7 | rp9 | KEEP: same concept, definition fits the linked context. |
| rp19dartos | dartos | rp19 | rp2, rp5 | KEEP: same concept, definition fits the linked context. |
| rp8_functionalis | functionalis | rp8 | rp14 | KEEP: same concept, definition fits the linked context. |
| rp16pyo | hydrosalpinx | rp16 | rp15, rp9 | KEEP: same concept, definition fits the linked context. |
| rp13_koil | koilocytes | rp13 | rp12, rp17 | KEEP: same concept, definition fits the linked context. |
| rp3_lact | lactiferous ducts | rp3 | rp23 | KEEP: same concept, definition fits the linked context. |
| rp27_accreta | placenta accreta | rp27 | rp4 | KEEP: same concept, definition fits the linked context. |
| en2_portal | portal system | en2 | rp2 | CHANGED: dropped alias 'portal system' (caught the hepatic portal system in rp2). 'portal veins' kept (no cross-topic hit). |
| rp1_douglas | pouch of Douglas | rp1 | rp9 | KEEP: same concept, definition fits the linked context. |
| rp8_prim | primordial follicles | rp8 | rp5 | KEEP: same concept, definition fits the linked context. |
| en7_psammoma | psammoma bodies | en7 | rp14, rp15 | CHANGED definition: papillary thyroid, serous ovarian and endometrial carcinoma, meningioma, mesothelioma (rp14, rp15 contexts are serous tumors). |
| rp8_theca | theca cells | rp8 | en1, rp15, rp7, rp9 | KEEP: same concept, definition fits the linked context. |
| rp17vlp | virus-like particles | rp17 | rp13 | KEEP: same concept, definition fits the linked context. |
| rp4_decbas | Decidua basalis | - | rp27 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |
| rp8_desmolase | desmolase | - | en1 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |
| rp5_gartner | Gartner duct cyst | - | rp12 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |
| rp9_hemato | hematocolpos | - | rp5 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |
| rp21_pz | peripheral zone | - | rp19 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |
| rp21_tz | transition zone | - | rp19 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |
| rp2_portocaval | portocaval anastomosis | - | rp1 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |
| en6_raiu | radioactive iodine uptake | - | en5 | KEEP: same concept (found by the engine-based re-scan, not in the cross file). |

## Noticed, not acted on (outside this task)

- Figure rp30_windows (JSON teach text and SVG label) says "radiation above 50 mGy injure the brain at any stage"; with the
  rp30 b29 wording now carrying ACOG CO 723, that figure could be reworded to match (not in the R1 figure list).
- rapid/rp16 still has "a disulfiram-like reaction of flushing and vomiting occurs when alcohol is taken with
  metronidazole" as a fact; rp12 now says both the textbook claim and the CDC 2021 position.
- rapid and question items in rp11 and rp24 say "endometrial biopsy when the stripe is over 4 mm or bleeding recurs";
  these are still true (tissue is required then) but do not mention that most patients now get both tests first.
- Merge: S01..S06, E01, E03, E04 and the older W0x workspaces hold the same file names with different bytes, so
  fast_merge needs --prefer for every R1 destination.
