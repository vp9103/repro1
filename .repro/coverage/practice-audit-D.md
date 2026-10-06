# Practice-item audit D: questions, rapid items and drills of rp11, rp12, rp13, rp14, rp19, rp20

Auditor: fresh Opus reader, 2026-10-06. This is a practice-item audit, not a phase verdict (no token). Nothing but this
file was written; screenshots went to the session scratchpad only.

Read: every question (75), rapid item (93) and drill row (117, in nine drills: d_rp11_sort, d_rp12_multi, d_rp13_sort,
d_rp14_multi, d_rp19_multi, d_rp19_order, d_rp20_multi, d_rp20_order, d_rp20_sort) of the six topics in
`fast/content/questions`, `fast/content/rapid` and `fast/content/drills`. Each item was read against its current lesson
`fast/content/topics/<tid>.json` (body, pretest, glossary) and every figure the item points to (`figs/<key>.json` caption
and teach, every SVG label), plus the worker notes `fast/ws/P01/audit/P01-notes.md` and `fast/ws/P02/audit/P02-notes.md`,
the lesson repairs `fast/ws/R1` and `fast/ws/R2`, `.repro/verify/P3-report.md` and `.repro/coverage/step1-audit-A.md`.
Facts were judged against First Aid, Pathoma, Robbins and Costanzo, and these dated sources where an item depends on them:
ACOG Clinical Practice Update on postmenopausal bleeding (released April 16, 2026: transvaginal ultrasound plus
endometrial sampling for most patients; ultrasound alone only for a single episode, a fully seen stripe of 4 mm or less,
no significant risk factors and reliable follow-up), ASCCP 2019 risk-based management (ASC-US with a negative HPV test:
repeat HPV-based testing in 3 years; after hysterectomy for CIN 2+: vaginal HPV-based testing, yearly until three
negatives, then every 3 years for 25 years), the Stanford criteria for uterine leiomyosarcoma (any two of atypia, tumor
cell necrosis and at least 10 mitoses per 10 HPF), StatPearls "Cremasteric reflex" (sensory limb: ilioinguinal nerve and
femoral branch of the genitofemoral nerve; motor limb: genital branch), and the WHI age analyses (Manson, JAMA 2013).

Page: a script confirmed that the built `fast/repro-endo-path.html` (23:54) carries every current stem, `e`, `x`, `bl`,
rapid question and `pt.say` of these items word for word (543 fields, none missing). The page was served with
`python3 serve.py --root /home/user/repro1/fast --port 8816` (stopped afterwards) and driven with Node Playwright at a true
1280 px (light) and a true 400 px (dark): practice items rp11q06, rp13q06, rp14q07, rp14q12 and rapid items rp11r06,
rp11r07, rp12r03, rp14r10, rp20r06 were opened, answered with a wrong pick, and their notes, say-lines and highlighted
figure labels were read and screenshotted. No page errors, no horizontal overflow at 400 px.

Keys: every keyed answer is correct and the single best answer among its options, so the one KEY finding is a drill
row that fits two columns. Every `pt.hl` label exists in its figure except rp11q06 (finding below).

Conventions: fields are the JSON keys (`s` stem, `l` lead-in, `o` options, `e` explanation, `w["option"]` note on a wrong
option, `et` comparison table, `bl` bottom line, `pt.hl`/`pt.say` visual pointer, `x` rapid explanation). Every fix quotes
the text it replaces, keeps the item id and keyed answer, and was counted against the §7.11 word bands. Renaming an
option means renaming its `w` key and its `et` row key too.

## rp11 Menopause and hormone therapy

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp11q06 | ERROR | The visual pointer and bottom line still teach the superseded ACOG 2018 rule. `pt.hl` names "Endometrial biopsy if the stripe" and "is over 4 mm or bleeding recurs", labels R1 removed from figure rp11_firstmove, so on the page nothing is marked (checked at 1280 and 400). Above that figure, whose bleeding row now reads "Ultrasound plus endometrial sampling for most patients (2026)", the "Where to look" line says "Any bleeding after menopause needs an endometrial biopsy when the stripe is over 4 mm or bleeding recurs; ...". `bl` says "Postmenopausal bleeding with an endometrium over 4 mm, or recurrent bleeding, requires endometrial biopsy to exclude cancer." `e` sentence 2 and the `et` cell "Follow-up of a thin stripe only" carry the same old framing. Lesson b23 teaches the April 2026 rule. The key (endometrial biopsy) stays correct. | `pt.hl` → ["Ultrasound plus endometrial", "sampling for most patients (2026)"]. `pt.say` → "The bleeding row gives the 2026 rule: ultrasound plus endometrial sampling for most patients. Her 9-mm stripe, recurrent spotting and obesity rule out ultrasound alone, and atrophy is a diagnosis of exclusion." `bl` → "Postmenopausal bleeding needs endometrial sampling in most patients (ACOG, 2026), and a stripe over 4 mm or recurrent bleeding always requires a biopsy." In `e`, replace "A fully seen endometrial stripe of 4 mm or less makes cancer unlikely, but hers is 9 mm, the bleeding has recurred and obesity adds risk, so tissue is required: **endometrial biopsy**." with "As of 2026, ACOG advises ultrasound plus endometrial sampling for most patients. Ultrasound alone is enough only for a single episode with a fully seen stripe of 4 mm or less and no risk factors. Hers is 9 mm, the bleeding has recurred and obesity adds risk, so tissue is required: **endometrial biopsy**." In `et`, row "Repeat ultrasonography in 6 months", column "Role in postmenopausal bleeding": "Follow-up of a thin stripe only" → "Only a single episode with a thin stripe and no risk factors". |
| rp11q10 | ERROR | `e`: "Later analyses showed these harms were concentrated in older women who started therapy many years after menopause, the basis of the timing hypothesis." This overstates the WHI. The age and time-since-menopause pattern held mainly for coronary events. The excess of breast cancer, stroke and clots also occurred in younger starters, only at lower absolute risk (Manson, JAMA 2013). Lesson b30 says this correctly ("low absolute risk when treatment began within 10 years of menopause"). | Replace that sentence with "Later analyses found low absolute risk when therapy began before 60 or within 10 years of menopause, the basis of the timing hypothesis." |
| rp11r06 | ERROR | `w["Keratin"]`: "Keratin forms the protective surface of the skin, and the vaginal lining is only lightly keratinized." This is wrong. Human vaginal epithelium is nonkeratinized stratified squamous: keratohyalin granules may appear, but it does not keratinize. rp12 b1 and figure rp12_wall teach the same. | Replace the note with "Keratin forms the tough surface layer of the skin, but the vaginal lining is nonkeratinized stratified squamous epithelium. Keratin is a structural protein, not the sugar store for lactic acid." |
| rp11r07 | ERROR | `w["Ovarian carcinoma"]`: "The ovary has no cavity to bleed into." This is a false rationale, and it hides the classic exception. An estrogen-secreting granulosa cell tumor of the ovary causes postmenopausal bleeding by stimulating the endometrium (First Aid; rp14 b3 and figure rp14_estrogen list it as a source of unopposed estrogen). | Replace the note with "Ovarian epithelial cancer usually presents late with bloating, pelvic pain or an adnexal mass, not bleeding. An ovarian tumor causes bleeding mainly when it makes estrogen, as a granulosa cell tumor does, by stimulating the endometrium." |
| rp11q01 | WORDING | `e`: "Without these negative feedback signals the pituitary is released, and FSH rises most" does not say what the pituitary is released from. The stem's last sentence, "Her physician orders serum hormone levels to illustrate the changes for a teaching conference.", is contrived. It exists only because lesson b8 says labs are unnecessary in a typical woman over 45, and the lead-in can carry that instead. | In `e`, replace "the pituitary is released," with "the pituitary is freed from its brakes,". Delete the stem's last sentence (the stem stays at 32 words; d1). Change `l` to "If serum hormones were measured, which set of findings would most likely be seen?" |
| d_rp11_sort | GIVEAWAY | Two rows answer themselves. "Estrogen given with no endometrium left to overgrow" (side a) states the reason, and "Micronized progesterone taken together with estradiol" (side b) names the progestogen. Neither tests the discriminator, which is whether a uterus is still there. | Replace the first row with ["Vaginal estrogen cream for recurrent urinary infections after menopause", "a", "Low-dose vaginal estrogen restores the urethral and vaginal lining and is barely absorbed, so even with a uterus it needs no progestogen."]. Replace the second row with ["Hot flashes after removal of both ovaries, uterus left in place", "b", "Removing the ovaries does not remove the endometrium, so systemic estrogen still needs a progestogen to prevent hyperplasia."]. The sides stay 6 and 6. |

rp11: 6 findings

## rp12 Vulva and vagina: infections and lesions

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp12q03, rp12r06 | NOT-TAUGHT | Both keys name the enzyme: rp12q03 "Inhibition of fungal lanosterol 14-alpha-demethylase", and rp12r06 "Which enzyme does fluconazole inhibit?" keyed "Lanosterol 14-alpha-demethylase". No lesson names it. rp12 b13 says only "**Fluconazole**, which blocks fungal ergosterol synthesis, cures most episodes.", and a search of every topic, figure and glossary finds no "demethylase". It is a First Aid antifungal fact, so teach it rather than cut it. | Lesson fix, which keeps both items: in `topics/rp12.json` b13 replace "**Fluconazole**, which blocks fungal ergosterol synthesis, cures most episodes." with "**Fluconazole**, which blocks fungal ergosterol synthesis by inhibiting lanosterol 14-alpha-demethylase, a fungal cytochrome P450 enzyme, cures most episodes." b13 keeps its 3 bold spans and stays near 95 words. |
| rp12r03 | NON-STEP1 | The distractor "Desquamative inflammatory vaginitis" is not a Step 1 entity and is taught nowhere in the course. | Replace the option with "Prepubertal vulvovaginitis" and its note with "Before puberty little estrogen means little glycogen and few lactobacilli, so the vaginal pH sits near neutral, well above the normal acidic range." (Lesson b1 teaches this.) Leave `q` unchanged, because the rapid item's stable id is hashed from it. |
| rp12r04 | NON-STEP1 | `w["Parabasal cells"]`: "Immature parabasal cells dominate when estrogen is low, as in atrophic or desquamative inflammatory vaginitis." It cites the same untaught, non-Step-1 entity. | Replace the note with "Immature parabasal cells dominate when estrogen is low, as in atrophic vaginitis after menopause. They signal estrogen loss, not a protozoan infection." |
| rp12q07 | NOT-TAUGHT | `et` row "Extramammary Paget disease", column "Dermis or other clue", reads "PAS and CK7 positive". CK7 is not taught: lesson b28 says PAS-positive, keratin-positive and S100-negative. P01 replaced CK7 in rp12q09 and rp12r10 but missed this cell. | Change the cell to "PAS and keratin positive". |
| rp12q10 | NON-STEP1 | The distractor "Cytokeratin 7" (in the option, `w` and `et`) is a subtype beyond Step 1, which uses cytokeratin as the epithelial marker. | Rename the option "Cytokeratin". `w` → "Cytokeratin marks epithelial tumors such as clear cell adenocarcinoma. This mesenchymal tumor lies beneath an intact epithelium and does not express it." In its `et` row, set Cell type marked to "Epithelial cells" and keep "Clear cell adenocarcinoma, Paget" and "Glands or pale cells". |
| rp12q12 | NON-STEP1 | The `et` column "Vaccine coverage" lists bivalent and quadrivalent vaccines ("Quadrivalent and nine-valent", "Bivalent, quadrivalent, nine-valent", "Nine-valent only"). These are no longer used in the United States and are not taught: rp13 b35 teaches only the 9-valent vaccine. P01's notes say rp12q12's vaccine remarks were removed, but this column stayed. | Rename the header "Vaccine coverage" to "In the 9-valent vaccine" and set the cells to: HPV types 6 and 11 "Yes"; 16 and 18 "Yes"; 31 and 33 "Yes"; 1 and 2 "No"; 45 and 52 "Yes". |
| rp12q09 | WORDING | `w["Origin from HPV-infected basal keratinocytes"]`: "These cells are glandular, with mucin and keratin, not squamous." Keratin cannot separate glandular cells from squamous cells, because keratinocytes are keratin-positive too. The lesson uses keratin positivity only to exclude melanoma. The PAS-positive mucin is the glandular clue. | Replace the note with "High-grade squamous lesions arise from HPV-infected keratinocytes and stain for p16. These cells are glandular and hold PAS-positive mucin, which squamous cells lack." |

rp12: 7 findings

## rp13 The cervix, HPV and cervical cancer screening

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp13q06 | ERROR | `w["Repeat cytology in 12 months"]`: "A one-year wait suits low-risk findings such as ASC-US with negative HPV." This is wrong. Under ASCCP 2019, ASC-US with a negative HPV test returns to HPV-based testing in 3 years. One-year follow-up is for low-grade disease such as biopsy-proven CIN 1, which lesson b28 teaches is "watched with repeat testing". Also, the `et` row "Cotesting in 3 years" calls a 3-year cotest "Routine screening", but routine cotesting is every 5 years (lesson b23). | Replace the note with "A one-year repeat test is kept for low-grade disease that usually regresses, such as biopsy-proven CIN 1. HSIL carries too high an immediate CIN 3 risk to defer." In `et`, row "Cotesting in 3 years", column "Type of step": "Routine screening" → "Follow-up after a reassuring result". |
| rp13q11 | NON-STEP1 | The `et` row "Vaginal cuff cytology every year" reads "Applies to: Total hysterectomy with a past high-grade lesion" and "Test category: Surveillance". It presents yearly cuff cytology as the follow-up after hysterectomy for CIN 2 or worse. That is post-treatment management beyond Step 1, and it is also inexact: ASCCP uses vaginal HPV-based testing, yearly until three negatives, then every 3 years for 25 years. | Change the row's cells to: Applies to "Only women whose cervix was removed"; Samples the cervix "No, samples the vaginal cuff" (unchanged); Test category "Not routine screening". |
| rp13q04 | WORDING | `et` row "In 1 year": the "Age range" cell reads "Not average risk", which is not an age range. The "Evidence base" cell reads "More harm than benefit" right after naming the first years after an HIV diagnosis, where yearly screening is correct. | Change the cells to: Strategy that uses this interval "Old annual Pap; first years after an HIV diagnosis"; Age range "Any age, with HIV"; Evidence base "More harm than benefit at average risk". |
| rp13r14 | WORDING | `pt.say` repeats the organism: "The cervicitis box names chlamydia, Chlamydia trachomatis, as the usual cause, confirmed by NAAT." | `pt.say` → "The cervicitis box names Chlamydia trachomatis as the usual cause, confirmed by NAAT." |

rp13: 4 findings

## rp14 The uterus: endometrium and myometrium

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp14q12 | ERROR | The item frames postmenopausal bleeding by the pre-2026 rule. `e` opens "Bleeding after menopause with a lining thicker than 4 mm needs tissue ...", and the `et` row "Repeat transvaginal ultrasonography in 6 months" gives its use as "Reassuring thin lining only". Under the ACOG April 2026 update that lesson b15 teaches, a thin lining alone is not reassuring enough. Most patients get sampling, and ultrasound alone is kept for a single episode with a fully seen stripe of 4 mm or less, no significant risk factors and reliable follow-up. The key (office endometrial biopsy) stays correct. | In `e`, replace "Bleeding after menopause with a lining thicker than 4 mm needs tissue to rule out hyperplasia and **endometrial carcinoma**. Obesity and diabetes raise her risk." with "As of 2026, ACOG advises endometrial sampling for most women with postmenopausal bleeding. Her 12-mm lining, repeated bleeding, obesity and diabetes make tissue essential to rule out hyperplasia and **endometrial carcinoma**." In that `et` row, column "Usual indication": "Reassuring thin lining only" → "Single episode, fully seen stripe of 4 mm or less, no risk factors". `bl` → "Postmenopausal bleeding needs endometrial sampling in most women, and the first sampling test is an office endometrial biopsy." |
| rp14q07, rp14r06 | ERROR | Both say all three features are required for leiomyosarcoma. rp14q07 `e`: "**Leiomyosarcoma** needs cytologic atypia, necrosis and mitoses together". `w["Leiomyosarcoma"]`: "Sarcoma needs atypia, necrosis and mitoses together." `bl`: "sarcoma needs all three features assessed together". rp14r06 `x`: "Leiomyosarcoma is diagnosed when cytologic atypia, necrosis and many mitoses are found together." The accepted (Stanford) criteria need any two of the three, so a necrotic, atypical tumor with few mitoses is still a sarcoma. The lesson figure's "assessed together" is right; "needs ... together" is not. | rp14q07 `e`: replace "**Leiomyosarcoma** needs cytologic atypia, necrosis and mitoses together, and it is" with "**Leiomyosarcoma** is judged on cytologic atypia, necrosis and mitoses weighed together, never on mitoses alone, and it is". `w["Leiomyosarcoma"]` → "Sarcoma is judged on atypia, necrosis and mitoses weighed together. Here the edge is smooth and there is no atypia or necrosis, so the mitoses alone are not enough." `bl` → "Brisk mitoses without atypia or necrosis in a circumscribed whorled tumor of a young woman make a leiomyoma, because mitoses alone never make a sarcoma." rp14r06 `x` → "Leiomyosarcoma is diagnosed from cytologic atypia, necrosis and many mitoses weighed together, and mitoses alone occur in benign tumors of young women. These tumors are soft, hemorrhagic and necrotic." |
| rp14r10 | NON-STEP1 | `x` still spells the acronym: "Serous endometrial intraepithelial carcinoma (SEIC) is the TP53-mutated precursor ...". step1-audit-A flagged SEIC as untaught, and R2 removed it from figure rp14_types. This item's `pt` was updated, but its `x` was not. | `x` → "Serous endometrial intraepithelial carcinoma is the TP53-mutated precursor of serous carcinoma. It arises in atrophic endometrium, and its cells can spread early to the peritoneum." |
| rp14r05 | NON-STEP1 | The distractor "Parasitic omental" (a stalked fibroid that has attached to the omentum) is not Step 1 and is not taught. | Replace the option with "Pedunculated subserosal" and its note with "A pedunculated subserosal fibroid hangs from the outer surface on a stalk. It sits outside the cavity and leaves the lining alone, so it rarely causes heavy bleeding." (Figure rp14_map teaches "may hang on a stalk".) |
| d_rp14_multi | KEY | "Diagnosis proven on the hysterectomy specimen" is keyed to adenomyosis, but leiomyosarcoma is also usually diagnosed only on the removed uterus, so the row fits two columns. "Shrinks after menopause" (keyed leiomyoma) also fits adenomyosis, which regresses when estrogen falls; the lesson's key call says adenomyosis depends on estrogen. | Replace ["Diagnosis proven on the hysterectomy specimen", "adeno", ...] with ["Not a tumor, yet the whole uterus enlarges", "adeno", "Glands and stroma sit inside the wall and the muscle thickens around them, so the uterus grows evenly without a discrete mass."]. Replace ["Shrinks after menopause", "leio", ...] with ["Grows in pregnancy and shrinks after menopause", "leio", "A discrete estrogen-driven tumor enlarges when estrogen rises in pregnancy and regresses when it falls at menopause."] (lesson b22). |
| rp14q05 | WORDING | `w["Endometrial hyperplasia"]`: "it does not enlarge or tenderize the uterus" ("tenderize" reads as a cooking word). | Replace the note with "Hyperplasia is overgrowth of glands in the lining. It causes heavy bleeding, but the biopsy here is normal, and it does not make the uterus enlarged or tender." |
| rp14q01 | WORDING | `et` row "Corpus luteum cyst", column "Associated clue", reads "Early pregnancy mimic", which is unclear. The cyst is common in early pregnancy, and its rupture mimics an ectopic pregnancy. | Change the cell to "Common in early pregnancy; rupture mimics ectopic". |

rp14: 7 findings

## rp19 The testis, spermatogenesis and male reproductive hormones

No finding. All 11 questions, 15 rapid items and 25 drill rows were checked against lesson rp19 and First Aid. The Sertoli
and Leydig receptor and product pairings, blood-testis barrier, ploidy (2N 2C, 2N 4C, 1N 2C, 1N 1C), 64 to 74 days plus
about 2 weeks, the 3-month repeat after a fever, ABP at 50 to 100 times serum, inhibin B selectively lowering FSH,
aromatase in fat with low LH in obesity, SHBG rising with age, GnRH pulses every 1 to 2 hours, hCG on the LH receptor,
NO to guanylate cyclase to cGMP and PDE5, hypogastric (T10 to L2) emission and pudendal (S2 to S4) ejaculation, the
epididymis versus ductus deferens histology, corpora amylacea, fructose from the seminal vesicles, the peripheral zone and
the pampiniform plexus are all correct. Every `pt.hl` label exists in its figure (rp19, rp21 and rp22 figures and rp2_pudendal).

rp19: clean

## rp20 Scrotal and testicular disorders

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp20r06 | ERROR | `w["Ilioinguinal nerve"]`: "It is not part of the cremasteric reflex arc." This is wrong. Standard anatomy (Moore; StatPearls) places the ilioinguinal nerve, with the femoral branch of the genitofemoral nerve, in the sensory limb of the reflex. What it lacks is motor supply to the cremaster, and that is why it is the wrong answer here. | Replace the note with "The ilioinguinal nerve gives sensation to the front of the scrotum and the upper inner thigh. It carries no motor fibers to the cremaster, so it cannot be the motor limb." |
| rp20r04 | NON-STEP1 | The distractor "Carnett sign" (abdominal wall pain when the muscles are tensed) is not Step 1, is not taught and has nothing to do with the scrotum. It adds a non-Step-1 fact without testing anything. | Replace the option with "Transillumination" and its note with "Transillumination is light passing through a fluid-filled swelling such as a hydrocele or spermatocele. It does not involve lifting the testis or relieving pain." (lesson b13). |
| rp20r10 | WORDING | `x`: "Seminoma's uniform fried-egg cells and lymphocyte-rich septa respond well to radiation and chemotherapy." This says the septa respond to treatment. | `x` → "Seminoma cells are very sensitive to radiation and chemotherapy. The tumor spreads late and through lymphatics, so early-stage disease is almost always cured." |

rp20: 3 findings

## Checked and correct (no row needed)

- Worker keyed-answer rewrites: rp20q04, now asking for the organism (*E. coli* in a 68-year-old after a catheter with a
  negative NAAT), is correct and taught. P01's "kept although unsure" rp11 management items (hormone therapy route,
  venlafaxine rather than paroxetine or fluoxetine with tamoxifen, the postmenopausal bleeding work-up) are correct, apart
  from the 2026 framing in rp11q06 above.
- The lesson repairs carried into the items: no item says SGLT2 inhibitors raise glucose, no item asserts the
  metronidazole and alcohol reaction, the "Word catheter" and the R2-removed rp13_screen labels are gone, and rp13q10 and
  rp13r14 now point at "Cervicitis: usually chlamydia; NAAT confirms".
- Correct across the topics: the menopausal FSH and LH pattern, estrone from adipose aromatase, FMR1 in POI, fezolinetant
  (NK3, boxed liver warning), cyclic 12 to 14 days, continuous combined therapy, the WHI arms, RANKL and osteoprotegerin
  (rp11); Amsel criteria, metronidazole prodrug, trichomoniasis partner treatment, lichen sclerosus versus lichen simplex
  chronicus versus lichen planus, HPV versus TP53 vulvar roads, EMPD, DES adenosis, sarcoma botryoides (rp12); E6 and p53,
  E7 and Rb and p16, CIN grading, USPSTF intervals (21 to 29 cytology every 3 years; 30 to 65 primary HPV or cotest every 5
  years), endocervical curettage, cervical insufficiency after conization, L1 VLP vaccine, ureteral obstruction (rp13);
  endometrioma, retrograde menstruation, leuprolide, danazol and C1 esterase inhibitor, adenomyosis, PTEN, TP53 and
  mismatch repair, Lynch, tamoxifen, plasma cells, Asherman (rp14); torsion versus epididymitis, salvage within 6 hours,
  RCC and the varicocele that does not empty, the AFP rule for seminoma, PLAP, i(12p), choriocarcinoma with
  hyperthyroidism, Leydig cell tumor, lymphoma over 60, GCNIS, inguinal orchiectomy, mumps pressure necrosis (rp20).
- Not counted as findings: the items without a visual (NO-VISUAL lines in rp11, rp12, rp13, rp14, rp19, rp20) are
  unchanged from before the rewording, as the P01 and P02 notes say.

## Outside item scope (lesson and figure files; not counted)

- `figs/rp20_gct.svg` still labels teratoma "Chemoresistant". P02 removed the same claim from rp20r11 as not taught; the
  label is accurate but is now the only place in the course that says it.
- `topics/rp20.json` b5 and glossary entry rp20cremreflex say both limbs of the cremasteric reflex run in the
  genitofemoral nerve. Standard texts add the ilioinguinal nerve to the sensory limb. The rp20r06 fix above avoids
  contradicting the lesson either way.
- The rp12 b13 clause proposed under rp12q03 and rp12r06 is a lesson edit. It is the smallest change that keeps two
  Step 1 items rather than deleting them.

Totals: rp11 6, rp12 7, rp13 4, rp14 7, rp19 0, rp20 3 (27 findings: 8 ERROR, 1 KEY, 8 NON-STEP1, 2 NOT-TAUGHT,
7 WORDING, 1 GIVEAWAY).
