# BP-GAPS — second-model gap review of the Step 1 blueprint (task P1.3)

`python xmodel.py gaps all --jobs 3` asked a second model (Codex, GPT) which USMLE Step 1 concepts each topic's
blueprint section is missing. Its records are `.repro/xm/gaps/topic_<tid>.json`. Every suggestion (GAP id) has one row:

- `| GAP-id | ADDED | BP-<tid>-<nn> |` — the concept is now a blueprint line in `scope/STEP1-BLUEPRINT.md`. Several
  suggestions that describe one concept share one new line (each names the same BP id); a suggestion may be added to the
  topic that should teach it rather than the topic it was raised under.
- `| GAP-id | REJECTED | reason |` — already covered (the BP id that covers it is named), beyond Step 1 scope, or another
  organ system. Course emphasis is cited from `scope/lectures/*.md` where it decides the question.

Judging rules: ADD what Step 1 / NBME questions actually test for that topic (First Aid, Robbins, Costanzo level) and
what the course lectures teach; REJECT restatements of an existing item, management detail beyond first-line choice,
rare genetics or boxed-warning trivia, and material taught in another organ system (renal, GI, neuro, heme, MSK).

## en1
| GAP-en1-01 | ADDED | BP-en1-11 |
| GAP-en1-02 | ADDED | BP-en1-11 |
| GAP-en1-03 | ADDED | BP-en1-11 |
| GAP-en1-04 | REJECTED | already covered by BP-en2-05 (tonic dopamine inhibition of prolactin) and BP-en3-02 (D2 blockade, stalk compression) |
| GAP-en1-05 | REJECTED | already covered by BP-en14-05 (insulin receptor tyrosine kinase, PI3K pathway, GLUT4 translocation) |
| GAP-en1-06 | REJECTED | leptin's receptor class is below Step 1 emphasis; the JAK/STAT class itself is covered by BP-en1-04 |
| GAP-en1-07 | REJECTED | beyond Step 1: serine/threonine kinase (SMAD) signaling of AMH/activin is not a tested endocrine receptor class |
| GAP-en1-08 | REJECTED | membrane vs soluble guanylyl cyclase is finer detail than Step 1 asks; the tested fact (ANP, BNP and nitric oxide act through cGMP) is BP-en1-05 |
| GAP-en1-09 | ADDED | BP-en2-11 |
| GAP-en1-10 | REJECTED | inhibin-FSH feedback already covered by BP-rp8-08 and BP-rp19-05; activin is below Step 1 emphasis |
| GAP-en1-11 | ADDED | BP-en2-12 |
| GAP-en1-12 | ADDED | BP-en1-12 |
| GAP-en1-13 | ADDED | BP-en1-12 |
| GAP-en1-14 | REJECTED | already covered by BP-en12-08 (withdrawal of chronic steroids) and BP-en12-14 (HPA suppression, taper) |
| GAP-en1-15 | REJECTED | already covered by BP-rp7-05 (McCune-Albright, activating GNAS, cafe-au-lait, polyostotic fibrous dysplasia) |
| GAP-en1-16 | REJECTED | already covered by BP-en9-09 (pseudohypoparathyroidism 1A, maternal GNAS inactivation, Albright osteodystrophy) |

## en2
| GAP-en2-01 | ADDED | BP-en2-13 |
| GAP-en2-02 | ADDED | BP-en2-11 |
| GAP-en2-03 | REJECTED | already covered by BP-en3-02 (stalk compression raises prolactin) and BP-en3-06 (stalk effect with hypopituitarism) |
| GAP-en2-04 | REJECTED | already covered by BP-en1-07 (primary failure raises the trophic hormone; secondary failure lowers it) |
| GAP-en2-05 | ADDED | BP-en5-15 |
| GAP-en2-06 | REJECTED | already covered by BP-rp8-08 (inhibin B suppresses FSH) and BP-rp19-05 (inhibin feedback in the male axis) |
| GAP-en2-07 | REJECTED | already covered by BP-rp28-11 (prolactin for milk production, oxytocin for let-down) and BP-rp3-08 |
| GAP-en2-08 | REJECTED | already covered by BP-en1-08 (Ferguson reflex), BP-rp28-11 (suckling reflex) and BP-rp23-07 (nipple stimulation) |
| GAP-en2-09 | ADDED | BP-en2-14 |
| GAP-en2-10 | REJECTED | chromophobes are low-yield histology; the tested acidophil/basophil split is BP-en2-02 |
| GAP-en2-11 | REJECTED | the portal supply of the anterior lobe is BP-en2-03 and its vulnerability in Sheehan syndrome is BP-en2-09; the posterior lobe's separate arterial supply is finer anatomy than Step 1 tests |
| GAP-en2-12 | ADDED | BP-en2-15 |
| GAP-en2-13 | REJECTED | already covered by BP-en4-02 (osmolality and large volume loss release ADH) |
| GAP-en2-14 | REJECTED | already covered by BP-en1-04 (GH and prolactin use JAK/STAT) and BP-en14-08 (GH is counter-regulatory) |
| GAP-en2-15 | ADDED | BP-en2-12 |
| GAP-en2-16 | REJECTED | already covered by BP-en3-02 (antipsychotic D2 blockade, dopamine agonists) and BP-rp23-07 (metoclopramide) |
| GAP-en2-17 | REJECTED | already covered by BP-en3-02 (hypothyroidism raises prolactin through TRH) |
| GAP-en2-18 | REJECTED | already covered by BP-rp6-08 (Kallmann: failed GnRH neuron migration, anosmia, low gonadotropins) |
| GAP-en2-19 | REJECTED | beyond Step 1: PIT1 (POU1F1) combined pituitary hormone deficiency is not tested |
| GAP-en2-20 | REJECTED | already covered by BP-en3-11 (craniopharyngioma from Rathke remnant, calcified cystic suprasellar mass) |

## en3
| GAP-en3-01 | REJECTED | already covered by BP-en12-02 (Cushing disease) and BP-en12-03 (Cushing features); taught in en12 |
| GAP-en3-02 | REJECTED | already covered by BP-en12-04 (high-dose dexamethasone, CRH test, petrosal sinus sampling) |
| GAP-en3-03 | REJECTED | already covered by BP-en2-05 (prolactin inhibits GnRH, causing amenorrhea and infertility) |
| GAP-en3-04 | REJECTED | already covered by BP-en3-01 (prolactinoma) and BP-en3-06 (only mild hyperprolactinemia from stalk effect) |
| GAP-en3-05 | REJECTED | already covered by BP-en2-06 (IGF-1 from liver mediates growth) and BP-en3-03 (glucose intolerance in acromegaly) |
| GAP-en3-06 | ADDED | BP-en3-15 |
| GAP-en3-07 | ADDED | BP-en3-15 |
| GAP-en3-08 | ADDED | BP-en3-16 |
| GAP-en3-09 | REJECTED | already covered by BP-en12-08 (secondary adrenal insufficiency: no hyperpigmentation, no hyperkalemia) |
| GAP-en3-10 | ADDED | BP-en5-15 |
| GAP-en3-11 | REJECTED | already covered by BP-en3-09 (hypopituitarism) and BP-rp22-01 (secondary hypogonadism with low LH/FSH) |
| GAP-en3-12 | REJECTED | already covered by BP-en4-03 (central DI causes) and BP-en4-04 (DI labs) |
| GAP-en3-13 | REJECTED | already covered by BP-en4-05 (water deprivation then desmopressin) |
| GAP-en3-14 | ADDED | BP-en3-17 |
| GAP-en3-15 | REJECTED | already covered by BP-en18-01 (MEN1: menin, pituitary, parathyroid, pancreatic tumors) |
| GAP-en3-16 | REJECTED | covered by BP-en3-11 (craniopharyngioma); wet keratin and palisading histology is below Step 1 emphasis |
| GAP-en3-17 | REJECTED | already covered by BP-en2-01 (Rathke pouch from oral ectoderm; posterior lobe from neuroectoderm) |
| GAP-en3-18 | REJECTED | already covered by BP-en2-08 (chiasm compression from below gives bitemporal hemianopia) |
| GAP-en3-19 | ADDED | BP-en2-15 |
| GAP-en3-20 | REJECTED | already covered by BP-en3-10 (empty sella syndrome) |
| GAP-en3-21 | REJECTED | already covered by BP-en3-10 (lymphocytic hypophysitis, peripartum) |
| GAP-en3-22 | REJECTED | already covered by BP-en12-08 (abrupt withdrawal of chronic steroids is the commonest cause) |

## en4
| GAP-en4-01 | REJECTED | already covered by BP-en2-04 (ADH from supraoptic nuclei stored in posterior lobe), BP-en2-01 and BP-en2-14 (neurophysin) |
| GAP-en4-02 | REJECTED | already covered by BP-en1-01 (ADH at V2, cAMP), BP-en1-02 (ADH at V1, IP3) and BP-en1-11 |
| GAP-en4-03 | REJECTED | gestational DI from placental vasopressinase is below Step 1 emphasis (not in First Aid); DI types are BP-en4-03 |
| GAP-en4-04 | REJECTED | already covered by BP-en4-03 (nephrogenic DI from V2/AQP2 mutations); inheritance mode detail is below Step 1 emphasis |
| GAP-en4-05 | REJECTED | beyond Step 1: familial central DI from AVP-neurophysin mutations is not tested |
| GAP-en4-06 | REJECTED | beyond Step 1: the posterior pituitary MRI bright spot is radiology detail |
| GAP-en4-07 | REJECTED | beyond Step 1: the triphasic response after pituitary surgery is neurosurgical management detail |
| GAP-en4-08 | ADDED | BP-en4-13 |
| GAP-en4-09 | ADDED | BP-en4-11 |
| GAP-en4-10 | ADDED | BP-en4-13 |
| GAP-en4-11 | REJECTED | thiazides for nephrogenic DI are BP-en4-06; the paradox mechanism (volume contraction, more proximal reabsorption) is renal pharmacology taught with the diuretics, not in endocrine |
| GAP-en4-12 | REJECTED | amiloride for lithium-induced nephrogenic DI is BP-en4-06; ENaC blockade as the mechanism is renal pharmacology taught with the diuretics |
| GAP-en4-13 | ADDED | BP-en4-12 |
| GAP-en4-14 | REJECTED | already covered by BP-en4-10 (hyperglycemia and hyperlipidemia lower measured sodium) and BP-en4-07 |
| GAP-en4-15 | REJECTED | already covered by BP-en4-07 (SIADH is euvolemic with high urine sodium) |
| GAP-en4-16 | REJECTED | low uric acid and BUN are minor supporting labs; the SIADH lab pattern is BP-en4-07 |
| GAP-en4-17 | REJECTED | cerebral salt wasting is renal/neuro material beyond core Step 1; SIADH volume status is BP-en4-07 |
| GAP-en4-18 | ADDED | BP-en4-14 |
| GAP-en4-19 | REJECTED | the drug causes Step 1 lists for SIADH are in BP-en4-07 (carbamazepine, cyclophosphamide, SSRIs); MDMA, chlorpropamide and vincristine are extra list entries below Step 1 emphasis |
| GAP-en4-20 | REJECTED | vaptans for SIADH are BP-en4-08; the V1a vs V2 selectivity of conivaptan and tolvaptan is finer pharmacology than Step 1 asks |
| GAP-en4-21 | ADDED | BP-en3-17 |
| GAP-en4-22 | REJECTED | beyond Step 1: Wolfram syndrome (WFS1) is a rare genetic syndrome |

## en5
| GAP-en5-01 | ADDED | BP-en5-14 |
| GAP-en5-02 | REJECTED | already covered by BP-en2-13 (TRH to TSH) and BP-en5-07 (TSH feedback patterns) |
| GAP-en5-03 | REJECTED | already covered by BP-en1-01 (TSH is a Gs/cAMP hormone) |
| GAP-en5-04 | REJECTED | NIS uptake already covered by BP-en5-03; pendrin transport is diagram detail below Step 1 emphasis |
| GAP-en5-05 | REJECTED | synthesis and coupling are BP-en5-03 and BP-en5-04; colloid endocytosis and MIT/DIT deiodination for recycling are diagram detail below Step 1 emphasis |
| GAP-en5-06 | REJECTED | already covered by BP-en1-03 (thyroid hormone uses a nuclear receptor) |
| GAP-en5-07 | REJECTED | the Wolff-Chaikoff effect is BP-en5-05; the escape mechanism (reduced iodide uptake after days) is below Step 1 emphasis |
| GAP-en5-08 | REJECTED | beyond Step 1: Pendred syndrome (SLC26A4) is not standard First Aid content |
| GAP-en5-09 | ADDED | BP-en7-14 |
| GAP-en5-10 | ADDED | BP-en5-13 |
| GAP-en5-11 | ADDED | BP-en5-13 |
| GAP-en5-12 | REJECTED | already covered by BP-en6-06 (factitious thyrotoxicosis: low uptake, low thyroglobulin) |
| GAP-en5-13 | REJECTED | beyond Step 1: biotin assay interference is laboratory medicine detail |
| GAP-en5-14 | REJECTED | beyond Step 1: THRB hormone resistance; the resistance lab pattern is BP-en1-12 and TSH-oma is BP-en3-14 |
| GAP-en5-15 | REJECTED | already covered by BP-en7-07 (hot nodules rarely malignant; cold nodules get FNA) |
| GAP-en5-16 | REJECTED | beyond Step 1: ultrasound risk features of nodules are clinical imaging detail; nodule work-up is BP-en7-07 |
| GAP-en5-17 | REJECTED | already covered by BP-en7-07 (ultrasound and fine-needle aspiration) |
| GAP-en5-18 | REJECTED | calcitonin marker covered by BP-en7-10 and BP-en8-06; thyroglobulin surveillance after thyroidectomy is management |
| GAP-en5-19 | ADDED | BP-en7-15 |
| GAP-en5-20 | REJECTED | already covered by BP-en6-08 (agranulocytosis, PTU hepatotoxicity, methimazole aplasia cutis) |

## en6
| GAP-en6-01 | REJECTED | already covered by BP-en5-07 (low TSH with high free T4 = primary hyperthyroidism) |
| GAP-en6-02 | ADDED | BP-en5-13 |
| GAP-en6-03 | REJECTED | already covered by BP-en5-11 (radioactive iodine uptake separates overproduction from leak) |
| GAP-en6-04 | REJECTED | already covered by BP-en5-12 (tall cells and scalloped colloid when stimulated) |
| GAP-en6-05 | REJECTED | a thyroid bruit is an exam detail of the Graves goiter in BP-en6-01, not a separately tested concept |
| GAP-en6-06 | REJECTED | beyond Step 1: orbital CT pattern (muscle bellies, tendons spared) is radiology detail |
| GAP-en6-07 | REJECTED | covered by BP-en6-02 (orbitopathy is driven by TSH-receptor antibodies on orbital fibroblasts, not by hormone levels) |
| GAP-en6-08 | REJECTED | already covered by BP-en6-05 (painless and postpartum lymphocytic thyroiditis, transient) |
| GAP-en6-09 | ADDED | BP-en6-13 |
| GAP-en6-10 | ADDED | BP-en6-13 |
| GAP-en6-11 | ADDED | BP-en6-13 |
| GAP-en6-12 | REJECTED | already covered by BP-en5-05 (Jod-Basedow in nodular goiter) |
| GAP-en6-13 | REJECTED | amiodarone thyroid dysfunction covered by BP-en6-12; the type 1 vs type 2 split is beyond Step 1 |
| GAP-en6-14 | REJECTED | already covered by BP-en5-03 (PTU and methimazole block peroxidase oxidation, organification, coupling) |
| GAP-en6-15 | REJECTED | already covered by BP-en6-07 (thyroid storm: beta-blocker, PTU, steroids, then iodide) |
| GAP-en6-16 | REJECTED | already covered by BP-en5-03 (propranolol inhibits 5'-deiodinase) and BP-en6-07 |
| GAP-en6-17 | ADDED | BP-en6-14 |
| GAP-en6-18 | ADDED | BP-en6-16 |
| GAP-en6-19 | REJECTED | thyrotoxic periodic paralysis is below Step 1 emphasis; thyroid effects on Na/K-ATPase are BP-en5-06 |
| GAP-en6-20 | REJECTED | apathetic thyrotoxicosis of the elderly is below Step 1 emphasis; atrial fibrillation is in BP-en6-10 |
| GAP-en6-21 | ADDED | BP-en6-15 |
| GAP-en6-22 | REJECTED | already covered by BP-en3-14 (TSH-secreting adenoma: high T4 with normal or high TSH) |
| GAP-en6-23 | REJECTED | beyond Step 1: THRB thyroid hormone resistance; general resistance lab logic is BP-en1-12 |
| GAP-en6-24 | REJECTED | already covered by BP-en7-05 (Riedel thyroiditis, IgG4-related, mimics anaplastic carcinoma) |
| GAP-en6-25 | REJECTED | thyroid acropachy is a rare Graves sign below Step 1 emphasis; tested Graves signs are BP-en6-01 |

## en7
| GAP-en7-01 | ADDED | BP-en5-15 |
| GAP-en7-02 | ADDED | BP-en5-13 |
| GAP-en7-03 | REJECTED | already covered by BP-en7-01 (Hashimoto: anti-TPO, antithyroglobulin, lymphocytic infiltrate) |
| GAP-en7-04 | REJECTED | already covered by BP-en3-02 (hypothyroidism raises prolactin through TRH) |
| GAP-en7-05 | REJECTED | covered by BP-en7-02 (myxedema) and BP-en6-02 (glycosaminoglycan deposition mechanism) |
| GAP-en7-06 | REJECTED | pericardial effusion is a minor hypothyroid finding that is not in the tested feature list of BP-en7-02 and is below Step 1 emphasis |
| GAP-en7-07 | ADDED | BP-en7-14 |
| GAP-en7-08 | ADDED | BP-en7-15 |
| GAP-en7-09 | ADDED | BP-en6-16 |
| GAP-en7-10 | REJECTED | already covered by BP-en6-04 (de Quervain: painful, post-viral, high ESR, granulomas) and BP-en6-13 (low radioactive iodine uptake in destructive thyroiditis) |
| GAP-en7-11 | REJECTED | already covered by BP-en6-05 (postpartum thyroiditis, low uptake, transient) |
| GAP-en7-12 | REJECTED | already covered by BP-en5-01 (lingual thyroid from failed descent) and BP-en7-03 |
| GAP-en7-13 | REJECTED | congenital hypothyroidism is BP-en7-03 (dysgenesis most common, newborn screen); the rarer inherited dyshormonogenesis causes are not asked separately at Step 1 level |
| GAP-en7-14 | REJECTED | already covered by BP-en5-08 (estrogen raises TBG, total T4) and BP-en5-09 (hCG lowers first-trimester TSH) |
| GAP-en7-15 | REJECTED | already covered by BP-en5-09 (levothyroxine dose rises in pregnancy) and BP-en7-03 (hormone needed for brain development) |
| GAP-en7-16 | REJECTED | already covered by BP-en7-06 (levothyroxine is T4; liothyronine is T3) and BP-en5-04 (T4 converted to active T3) |
| GAP-en7-17 | REJECTED | beyond Step 1: thyroid ultrasound risk features are clinical imaging detail; nodule work-up is BP-en7-07 |
| GAP-en7-18 | REJECTED | examination red flags are clinical detail; nodule work-up is BP-en7-07 and recurrent laryngeal nerve is BP-en7-13 |
| GAP-en7-19 | REJECTED | papillary carcinoma histology is BP-en7-08 (Orphan Annie nuclei, nuclear grooves, psammoma bodies); fibrovascular cores and multifocality are below Step 1 emphasis |
| GAP-en7-20 | REJECTED | already covered by BP-en5-02 (C cells from neural crest via the ultimobranchial body) |
| GAP-en7-21 | REJECTED | already covered by BP-en18-02 (MEN2A) and BP-en18-03 (MEN2B) |
| GAP-en7-22 | REJECTED | calcitonin marker covered by BP-en7-10; CEA, diarrhea and iodine-uptake detail of medullary carcinoma is below Step 1 emphasis |
| GAP-en7-23 | REJECTED | thyroglobulin surveillance after thyroidectomy is cancer follow-up management beyond Step 1 |
| GAP-en7-24 | REJECTED | already covered by BP-en7-12 (primary thyroid lymphoma arises in Hashimoto) and BP-en7-01 |

## en8
| GAP-en8-01 | ADDED | BP-en8-11 |
| GAP-en8-02 | REJECTED | already covered by BP-en9-01 (primary hyperparathyroidism: adenoma, high calcium, low phosphate, high PTH) |
| GAP-en8-03 | REJECTED | parathyroid adenoma histology is below Step 1 emphasis; adenoma vs hyperplasia is BP-en9-01 and normal histology BP-en8-11 |
| GAP-en8-04 | REJECTED | already covered by BP-en18-01 (MEN1 parathyroid tumors) and BP-en9-01 (hyperplasia in MEN) |
| GAP-en8-05 | REJECTED | already covered by BP-en18-02 (MEN2A: RET, medullary carcinoma, pheochromocytoma, parathyroid hyperplasia) |
| GAP-en8-06 | REJECTED | already covered by BP-en9-02 (osteitis fibrosa cystica, subperiosteal resorption, brown tumors) |
| GAP-en8-07 | REJECTED | already covered by BP-en9-02 (brown tumors: hemosiderin-laden giant-cell lesions) |
| GAP-en8-08 | ADDED | BP-en9-13 |
| GAP-en8-09 | REJECTED | already covered by BP-en9-03 (secondary hyperparathyroidism in CKD: low calcitriol, high phosphate) |
| GAP-en8-10 | REJECTED | already covered by BP-en9-04 (tertiary hyperparathyroidism) |
| GAP-en8-11 | REJECTED | rugger-jersey spine is a minor imaging sign; renal osteodystrophy is BP-en9-03 |
| GAP-en8-12 | REJECTED | already covered by BP-en9-08 (post-thyroidectomy hypoparathyroidism) and BP-en7-13 |
| GAP-en8-13 | REJECTED | already covered by BP-en12-12 (APS-1: AIRE, mucocutaneous candidiasis, hypoparathyroidism, Addison) |
| GAP-en8-14 | REJECTED | already covered by BP-en9-09 (pseudohypoparathyroidism 1A) |
| GAP-en8-15 | REJECTED | already covered by BP-en9-10 (pseudopseudohypoparathyroidism, paternal allele) |
| GAP-en8-16 | REJECTED | already covered by BP-en9-05 (familial hypocalciuric hypercalcemia, inactivating CaSR) |
| GAP-en8-17 | REJECTED | beyond Step 1: autosomal dominant hypocalcemia from activating CaSR mutations |
| GAP-en8-18 | REJECTED | already covered by BP-en8-03 (magnesium is needed for PTH secretion; hypomagnesemia causes hypocalcemia) |
| GAP-en8-19 | REJECTED | already covered by BP-en9-06 (PTHrP from squamous cell carcinoma; PTH suppressed) |
| GAP-en8-20 | REJECTED | already covered by BP-en9-06 (osteolysis in myeloma and breast cancer; PTH suppressed) |
| GAP-en8-21 | ADDED | BP-en8-12 |
| GAP-en8-22 | REJECTED | already covered by BP-en10-06 (vitamin D deficiency: low calcium and phosphate, high PTH and ALP) |
| GAP-en8-23 | REJECTED | already covered by BP-en10-06 (rickets: bowed legs, rachitic rosary, craniotabes) |
| GAP-en8-24 | ADDED | BP-en10-13 |
| GAP-en8-25 | REJECTED | already covered by BP-en10-01 (osteoporosis: normal mineralization, normal calcium, phosphate, ALP) |
| GAP-en8-26 | REJECTED | beyond Step 1: vitamin D-dependent rickets type 1A (1-alpha-hydroxylase defect) |
| GAP-en8-27 | REJECTED | beyond Step 1: vitamin D-dependent rickets type 2 (receptor defect) |
| GAP-en8-28 | REJECTED | already covered by BP-en1-03 (vitamin D uses a nuclear receptor) |
| GAP-en8-29 | ADDED | BP-en9-15 |
| GAP-en8-30 | REJECTED | already covered by BP-en9-11 (milk-alkali syndrome) |
| GAP-en8-31 | REJECTED | already covered by BP-en5-02 (C cells from the ultimobranchial body) and BP-en8-06 |
| GAP-en8-32 | REJECTED | already covered by BP-en8-07 (FGF23, X-linked hypophosphatemic rickets); the PHEX gene name is beyond Step 1 |
| GAP-en8-33 | REJECTED | thiazide hypercalcemia covered by BP-en9-11; diuretic calcium handling is renal-system pharmacology |
| GAP-en8-34 | REJECTED | lithium as a cause of hypercalcemia is BP-en9-11; its shift of the calcium-sensing receptor set point is below Step 1 emphasis |
| GAP-en8-35 | ADDED | BP-en9-16 |
| GAP-en8-36 | REJECTED | already covered by BP-en10-05 (denosumab, RANKL antibody) |
| GAP-en8-37 | REJECTED | already covered by BP-en10-04 (bisphosphonates: osteoclast apoptosis) |
| GAP-en8-38 | REJECTED | already covered by BP-en10-04 (pill esophagitis, osteonecrosis of jaw, atypical femur fracture) |
| GAP-en8-39 | REJECTED | already covered by BP-en9-12 (hungry bone as a cause of hypocalcemia) |

## en9
| GAP-en9-01 | REJECTED | already covered by BP-en8-02 (PTH resorbs bone via RANKL on osteoblasts) |
| GAP-en9-02 | REJECTED | already covered by BP-en8-02 (distal calcium reabsorption, proximal phosphate wasting) |
| GAP-en9-03 | REJECTED | already covered by BP-en8-02 (1-alpha-hydroxylase activation) and BP-en8-04 (calcitriol gut absorption) |
| GAP-en9-04 | ADDED | BP-en9-17 |
| GAP-en9-05 | REJECTED | already covered by BP-en9-01 (adenoma in most, hyperplasia in MEN) |
| GAP-en9-06 | REJECTED | already covered by BP-en18-01 (MEN1, menin) and BP-en18-02 (MEN2A, RET) |
| GAP-en9-07 | REJECTED | already covered by BP-en8-01 (inferior glands from third pouch with thymus, superior from fourth) |
| GAP-en9-08 | REJECTED | already covered by BP-en8-01 (DiGeorge 22q11: hypocalcemia, thymic aplasia) |
| GAP-en9-09 | REJECTED | already covered by BP-en9-09 (pseudohypoparathyroidism: end-organ PTH resistance) and BP-en9-08 (high phosphate) |
| GAP-en9-10 | REJECTED | GNAS inactivation is BP-en9-09 and Gs signaling BP-en1-01; resistance to TSH and other Gs-coupled hormones in type 1A is below Step 1 emphasis |
| GAP-en9-11 | REJECTED | already covered by BP-en8-03 (severe hypomagnesemia causes hypocalcemia) |
| GAP-en9-12 | REJECTED | already covered by BP-en10-06 and BP-en8-12 (25-hydroxyvitamin D measures deficiency) |
| GAP-en9-13 | REJECTED | rugger-jersey spine is a minor imaging sign; renal osteodystrophy is BP-en9-03 |
| GAP-en9-14 | REJECTED | already covered by BP-en8-09 (Chvostek, Trousseau, perioral tingling) |
| GAP-en9-15 | ADDED | BP-en9-13 |
| GAP-en9-16 | REJECTED | already covered by BP-en8-08 (correct total calcium for albumin) |
| GAP-en9-17 | REJECTED | already covered by BP-en8-08 (alkalosis lowers ionized calcium, tetany) |
| GAP-en9-18 | REJECTED | already covered by BP-en8-05 (granulomatous disease makes calcitriol) |
| GAP-en9-19 | ADDED | BP-en9-15 |
| GAP-en9-20 | ADDED | BP-en9-15 |
| GAP-en9-21 | REJECTED | already covered by BP-en9-11 (milk-alkali syndrome) |
| GAP-en9-22 | REJECTED | lithium as a cause of hypercalcemia is BP-en9-11; its shift of the calcium-sensing receptor set point is below Step 1 emphasis |
| GAP-en9-23 | REJECTED | already covered by BP-en9-11 (thiazides); tubular calcium handling is renal-system physiology |
| GAP-en9-24 | ADDED | BP-en9-13 |
| GAP-en9-25 | ADDED | BP-en9-16 |
| GAP-en9-26 | REJECTED | already covered by BP-en10-05 (denosumab) |
| GAP-en9-27 | REJECTED | already covered by BP-en10-04 (bisphosphonates, osteonecrosis of jaw) |
| GAP-en9-28 | ADDED | BP-en9-14 |
| GAP-en9-29 | ADDED | BP-en9-14 |
| GAP-en9-30 | REJECTED | already covered by BP-en9-12 (hungry bone) |

## en10
| GAP-en10-01 | ADDED | BP-en10-09 |
| GAP-en10-02 | ADDED | BP-en10-09 |
| GAP-en10-03 | REJECTED | already covered by BP-en12-01 (cortisol inhibits bone formation) and BP-en10-03 (glucocorticoid risk) |
| GAP-en10-04 | ADDED | BP-en10-10 |
| GAP-en10-05 | REJECTED | already covered by BP-en10-01 (low bone mass with normal mineralization) |
| GAP-en10-06 | ADDED | BP-en10-11 |
| GAP-en10-07 | REJECTED | beyond Step 1: farnesyl pyrophosphate synthase is not tested; mechanism is BP-en10-04 |
| GAP-en10-08 | REJECTED | beyond Step 1: denosumab rebound fractures are prescribing detail; denosumab is BP-en10-05 |
| GAP-en10-09 | REJECTED | covered by BP-en10-05 (romosozumab, sclerostin); boxed-warning detail is below Step 1 emphasis |
| GAP-en10-10 | ADDED | BP-en10-12 |
| GAP-en10-11 | REJECTED | already covered by BP-en8-06 (calcitonin lowers bone resorption) |
| GAP-en10-12 | REJECTED | already covered by BP-en8-10 (intermittent PTH anabolic, continuous resorbs) |
| GAP-en10-13 | ADDED | BP-en8-12 |
| GAP-en10-14 | REJECTED | already covered by BP-en9-03 (vitamin D deficiency: low/normal calcium, high PTH) and BP-en10-06 (low phosphate, high PTH and ALP) |
| GAP-en10-15 | ADDED | BP-en10-13 |
| GAP-en10-16 | ADDED | BP-en10-13 |
| GAP-en10-17 | ADDED | BP-en10-13 |
| GAP-en10-18 | ADDED | BP-en10-14 |
| GAP-en10-19 | REJECTED | beyond Step 1: hereditary vitamin D-dependent rickets types |
| GAP-en10-20 | REJECTED | already covered by BP-en8-07 (FGF23, X-linked hypophosphatemic rickets) |
| GAP-en10-21 | REJECTED | already covered by BP-en10-07 (Paget: disordered remodeling, mosaic bone) |
| GAP-en10-22 | REJECTED | Paget disease is BP-en10-07; cotton-wool skull, flame-shaped lysis and picture-frame vertebra are radiology detail below Step 1 emphasis |
| GAP-en10-23 | REJECTED | beyond Step 1: SQSTM1 mutations in familial Paget disease |
| GAP-en10-24 | REJECTED | covered by BP-en10-08 (osteopetrosis contrast); its hematologic and nerve findings are musculoskeletal-system material |
| GAP-en10-25 | REJECTED | beyond Step 1: CLCN7 and TCIRG1 genes; the tested defect is carbonic anhydrase II (BP-en10-08) |

## en11
| GAP-en11-01 | ADDED | BP-en11-09 |
| GAP-en11-02 | REJECTED | already covered by BP-en1-10 (StAR and desmolase start steroidogenesis) |
| GAP-en11-03 | REJECTED | already covered by BP-en1-10 (cholesterol to pregnenolone by desmolase/CYP11A1) |
| GAP-en11-04 | ADDED | BP-en11-11 |
| GAP-en11-05 | REJECTED | already covered by BP-en11-03 and BP-en11-04 (21-hydroxylase reactions and deficiency) |
| GAP-en11-06 | REJECTED | already covered by BP-en11-05 (11-beta-hydroxylase deficiency) and BP-en11-06 (17-alpha) |
| GAP-en11-07 | REJECTED | zone products are BP-en11-01 and pathway enzymes BP-en11-03; which enzyme each zone expresses (aldosterone synthase only in glomerulosa) is below Step 1 emphasis |
| GAP-en11-08 | REJECTED | already covered by BP-en11-01 (reticularis makes androgens) and BP-rp7-01 (DHEA-S) |
| GAP-en11-09 | REJECTED | the three zones and their products are BP-en11-01; telling the zones apart by cell appearance on histology is below Step 1 emphasis |
| GAP-en11-10 | REJECTED | salt-wasting classic CAH is BP-en11-04 and nonclassic CAH BP-en11-08; the simple-virilizing subtype is below Step 1 emphasis |
| GAP-en11-11 | ADDED | BP-en11-10 |
| GAP-en11-12 | ADDED | BP-en11-10 |
| GAP-en11-13 | REJECTED | already covered by BP-rp7-05 (CAH causes peripheral precocious puberty) and BP-en11-04 |
| GAP-en11-14 | REJECTED | covered by BP-en11-07 (high ACTH in CAH), BP-en2-07 (POMC pigmentation) and BP-en12-07 (hypoglycemia of cortisol lack) |
| GAP-en11-15 | ADDED | BP-en11-12 |
| GAP-en11-16 | ADDED | BP-en11-12 |
| GAP-en11-17 | ADDED | BP-en11-12 |
| GAP-en11-18 | REJECTED | beyond Step 1: corticosterone's glucocorticoid activity in 17-alpha-hydroxylase deficiency |
| GAP-en11-19 | REJECTED | already covered by BP-en11-06 (46,XY phenotypic female) and BP-rp6-10 (AMH and uterus presence) |
| GAP-en11-20 | REJECTED | already covered by BP-en11-08 (nonclassic CAH mimics PCOS) and BP-rp9-09 (17-OHP for nonclassic CAH) |
| GAP-en11-21 | REJECTED | beyond Step 1: 3-beta-hydroxysteroid dehydrogenase deficiency is a rare CAH form |
| GAP-en11-22 | REJECTED | beyond Step 1: StAR deficiency (lipoid CAH) is rare; StAR itself is BP-en1-10 |
| GAP-en11-23 | ADDED | BP-en12-17 |
| GAP-en11-24 | ADDED | BP-rp21-17 |

## en12
| GAP-en12-01 | REJECTED | already covered by BP-en2-13 (CRH to ACTH) and BP-en1-07 (negative feedback) |
| GAP-en12-02 | REJECTED | already covered by BP-en1-03 (steroids use nuclear receptors) |
| GAP-en12-03 | ADDED | BP-en12-18 |
| GAP-en12-04 | ADDED | BP-en12-18 |
| GAP-en12-05 | REJECTED | already covered by BP-en12-04 (1 mg overnight dexamethasone test) |
| GAP-en12-06 | REJECTED | already covered by BP-en12-04 (CRH test, petrosal sinus sampling) |
| GAP-en12-07 | REJECTED | covered by BP-en12-05 (ectopic ACTH hypokalemia) and BP-en13-04 (11-beta-HSD2) |
| GAP-en12-08 | REJECTED | covered by BP-en12-03 (Cushing features) and BP-en12-14 (glucocorticoid growth suppression) |
| GAP-en12-09 | REJECTED | covered by BP-en12-02 (adrenal carcinoma) and BP-rp9-09 (very high DHEA-S from an adrenal tumor) |
| GAP-en12-10 | REJECTED | pseudo-Cushing states (alcohol, depression) are below Step 1 emphasis |
| GAP-en12-11 | REJECTED | already covered by BP-en12-07 (primary adrenal insufficiency: low cortisol and aldosterone) and BP-en1-07 |
| GAP-en12-12 | REJECTED | already covered by BP-en12-07 (hyperpigmentation) and BP-en2-07 (ACTH and MSH from POMC) |
| GAP-en12-13 | REJECTED | aldosterone loss with hypotension and hyperkalemia is BP-en12-07; salt craving and the accompanying hyperkalemic non-anion-gap (type 4 RTA-like) acidosis are renal acid-base detail |
| GAP-en12-14 | ADDED | BP-en4-14 |
| GAP-en12-15 | REJECTED | covered by BP-en12-07 (autoimmune Addison most common in the US); antibody target is detail |
| GAP-en12-16 | REJECTED | covered by BP-en12-07 (TB as the worldwide cause of Addison disease) |
| GAP-en12-17 | REJECTED | covered by BP-en12-09 (cosyntropin test); early false-normal results are clinical nuance beyond Step 1 |
| GAP-en12-18 | REJECTED | already covered by BP-en12-08 (secondary and tertiary adrenal insufficiency) |
| GAP-en12-19 | REJECTED | covered by BP-en12-13 (fludrocortisone for mineralocorticoid replacement) and BP-en12-08 (aldosterone preserved centrally) |
| GAP-en12-20 | REJECTED | already covered by BP-en12-13 (glucocorticoid potency, hydrocortisone to dexamethasone) |
| GAP-en12-21 | REJECTED | already covered by BP-en12-15 (ketoconazole) and BP-rp22-07 (ketoconazole antiandrogen effects) |
| GAP-en12-22 | REJECTED | metyrapone precursor effects are prescribing detail; metyrapone is BP-en12-15 |
| GAP-en12-23 | REJECTED | covered by BP-en12-14 (neutrophilia); demargination is hematology detail |
| GAP-en12-24 | REJECTED | covered by BP-en12-12 (APS-1 and AIRE); thymic negative selection is immunology material |
| GAP-en12-25 | REJECTED | already covered by BP-en12-16 (adrenoleukodystrophy, VLCFA) |
| GAP-en12-26 | REJECTED | surgical first-line treatment of a functioning pituitary adenoma is management; Cushing drugs are BP-en12-15 |

## en13
| GAP-en13-01 | REJECTED | already covered by BP-en11-01 (glomerulosa responds to angiotensin II and potassium) |
| GAP-en13-02 | ADDED | BP-en13-11 |
| GAP-en13-03 | REJECTED | beyond Step 1: glucocorticoid-remediable aldosteronism (CYP11B1/B2 fusion) |
| GAP-en13-04 | ADDED | BP-en11-12 |
| GAP-en13-05 | REJECTED | already covered by BP-en13-04 (licorice, 11-beta-HSD2, apparent mineralocorticoid excess) |
| GAP-en13-06 | REJECTED | covered by BP-en13-02 (spironolactone or eplerenone) and BP-rp22-07 (spironolactone gynecomastia) |
| GAP-en13-07 | REJECTED | covered by BP-en11-02 (medulla from neural crest); its preganglionic innervation is autonomic pharmacology |
| GAP-en13-08 | REJECTED | already covered by BP-en11-02 (cortisol induces PNMT) |
| GAP-en13-09 | REJECTED | the synthesis pathway is BP-en13-10; the tyrosine hydroxylase step and its inhibitor metyrosine are autonomic pharmacology taught with the noradrenergic synapse |
| GAP-en13-10 | REJECTED | metanephrines as the pheochromocytoma test are BP-en13-05 and VMA as end product BP-en13-10; the COMT and MAO degradation steps are biochemistry of catecholamine metabolism |
| GAP-en13-11 | REJECTED | already covered by BP-en13-06 (paraganglioma) |
| GAP-en13-12 | REJECTED | covered by BP-en13-07 (alpha blockade before surgery prevents crisis) |
| GAP-en13-13 | REJECTED | already covered by BP-en18-02 and BP-en18-03 (MEN2A and MEN2B) |
| GAP-en13-14 | REJECTED | beyond Step 1: SDHB metastatic risk; SDH is already in BP-en13-06 |
| GAP-en13-15 | REJECTED | beyond Step 1: criteria for malignant pheochromocytoma |
| GAP-en13-16 | REJECTED | covered by BP-en14-08 (epinephrine is a counter-regulatory hormone) |
| GAP-en13-17 | REJECTED | the tested neuroblastoma features are BP-en13-08; periorbital (raccoon-eye) and skin metastases in infants are below Step 1 emphasis |
| GAP-en13-18 | REJECTED | VIP secretion by neuroblastoma is rare and below Step 1 emphasis |
| GAP-en13-19 | REJECTED | covered by BP-en13-08 (abdominal mass crossing the midline); imaging detail below Step 1 emphasis |
| GAP-en13-20 | REJECTED | beyond Step 1: germline ALK mutations; N-myc amplification is BP-en13-08 |

## en14
| GAP-en14-01 | ADDED | BP-en14-15 |
| GAP-en14-02 | ADDED | BP-en14-15 |
| GAP-en14-03 | REJECTED | beyond Step 1: K-ATP channel gene defects in neonatal diabetes and congenital hyperinsulinism |
| GAP-en14-04 | REJECTED | already covered by BP-en14-07 (amino acids release glucagon) and BP-en14-10 (amino acids stimulate insulin) |
| GAP-en14-05 | ADDED | BP-en14-10 |
| GAP-en14-06 | REJECTED | already covered by BP-en14-01 (delta cells, somatostatin) and BP-en2-10 (somatostatin inhibits insulin and glucagon) |
| GAP-en14-07 | REJECTED | covered by BP-en14-04 (GLP-1, GIP incretins); K and L cell sources are GI-system material |
| GAP-en14-08 | REJECTED | already covered by BP-en17-05 (DPP-4 inhibitors raise endogenous incretins) |
| GAP-en14-09 | REJECTED | already covered by BP-en17-10 (amylin analog) and BP-en15-02 (islet amyloid) |
| GAP-en14-10 | REJECTED | beyond Step 1: prohormone convertase processing of proglucagon |
| GAP-en14-11 | REJECTED | already covered by BP-en1-01 (glucagon is a Gs/cAMP hormone) and BP-en1-11 |
| GAP-en14-12 | ADDED | BP-en14-11 |
| GAP-en14-13 | ADDED | BP-en14-16 |
| GAP-en14-14 | ADDED | BP-en14-11 |
| GAP-en14-15 | ADDED | BP-en14-11 |
| GAP-en14-16 | ADDED | BP-en14-12 |
| GAP-en14-17 | ADDED | BP-en14-12 |
| GAP-en14-18 | ADDED | BP-en14-13 |
| GAP-en14-19 | REJECTED | already covered by BP-en14-09 (fed vs fasting fuel switch) |
| GAP-en14-20 | REJECTED | ketones in prolonged starvation are BP-en14-09 and ketogenesis BP-en16-01; the oxaloacetate-diversion mechanism is biochemistry (metabolism) material |
| GAP-en14-21 | ADDED | BP-en14-14 |
| GAP-en14-22 | REJECTED | the counter-regulatory hormones are BP-en14-08; their order of recruitment during falling glucose is below Step 1 emphasis |
| GAP-en14-23 | REJECTED | already covered by BP-en16-06 (sulfonylurea screen separates sulfonylurea use from insulinoma) |
| GAP-en14-24 | REJECTED | covered by BP-en14-06 (insulin suppresses lipolysis and ketogenesis) and BP-en16-06 |
| GAP-en14-25 | REJECTED | diazoxide is a low-yield drug; the K-ATP channel mechanism is BP-en14-03 and BP-en17-03 |

## en15
| GAP-en15-01 | ADDED | BP-en15-14 |
| GAP-en15-02 | REJECTED | already covered by BP-en14-02 (C-peptide marks endogenous insulin) |
| GAP-en15-03 | REJECTED | covered by BP-en12-12 (APS-2: Addison, thyroid disease, type 1 diabetes); celiac disease is GI material |
| GAP-en15-04 | REJECTED | beyond Step 1: latent autoimmune diabetes in adults |
| GAP-en15-05 | REJECTED | already covered by BP-rp27-04 (gestational diabetes: hPL insulin resistance, later type 2 diabetes) |
| GAP-en15-06 | ADDED | BP-en15-11 |
| GAP-en15-07 | ADDED | BP-en15-11 |
| GAP-en15-08 | REJECTED | covered by BP-en15-03 (ADA diagnostic thresholds); the repeat-test rule is guideline detail |
| GAP-en15-09 | REJECTED | distortion of HbA1c by red-cell survival is BP-en15-10 (falsely low with hemolysis); falsely high values in iron deficiency are below Step 1 emphasis |
| GAP-en15-10 | REJECTED | beyond Step 1: fructosamine |
| GAP-en15-11 | ADDED | BP-en15-12 |
| GAP-en15-12 | ADDED | BP-en15-12 |
| GAP-en15-13 | ADDED | BP-en15-12 |
| GAP-en15-14 | REJECTED | covered by BP-en15-04 (retinopathy from microaneurysms to VEGF neovascularization); fundus grading is ophthalmology |
| GAP-en15-15 | REJECTED | covered by BP-en15-04 (proliferative retinopathy); its complications are ophthalmology detail |
| GAP-en15-16 | REJECTED | covered by BP-en15-04 (retinopathy); macular edema grading is ophthalmology detail |
| GAP-en15-17 | ADDED | BP-en15-13 |
| GAP-en15-18 | REJECTED | covered by BP-en15-06 (neuropathy, foot ulcers); Charcot joints are taught in musculoskeletal pathology |
| GAP-en15-19 | REJECTED | already covered by BP-en15-07 (macrovascular disease) |
| GAP-en15-20 | REJECTED | the infections typical of diabetes are BP-en15-08; the neutrophil chemotaxis and phagocytosis defect behind them is immunology detail below Step 1 emphasis |
| GAP-en15-21 | REJECTED | already covered by BP-en17-01 (insulins, hypoglycemia, weight gain); pharmacology is taught in en17 |
| GAP-en15-22 | REJECTED | already covered by BP-en17-01 (rapid vs long-acting insulins) |
| GAP-en15-23 | REJECTED | already covered by BP-en17-02 (metformin) |
| GAP-en15-24 | REJECTED | already covered by BP-en17-03 (sulfonylureas) |
| GAP-en15-25 | REJECTED | already covered by BP-en17-06 (GLP-1 receptor agonists) |
| GAP-en15-26 | REJECTED | already covered by BP-en17-05 (DPP-4 inhibitors) |
| GAP-en15-27 | REJECTED | already covered by BP-en17-08 (SGLT2 inhibitors) |
| GAP-en15-28 | REJECTED | already covered by BP-en17-04 (thiazolidinediones) |
| GAP-en15-29 | REJECTED | already covered by BP-en17-09 (alpha-glucosidase inhibitors) |
| GAP-en15-30 | REJECTED | already covered by BP-en17-10 (pramlintide) |

## en16
| GAP-en16-01 | REJECTED | already covered by BP-en16-06 (Whipple triad) |
| GAP-en16-02 | REJECTED | covered by BP-en16-01 (dehydration in DKA), BP-en16-04 (HHS) and BP-en4-11 (osmotic diuresis) |
| GAP-en16-03 | REJECTED | covered by BP-en4-10 (hyperglycemia lowers measured sodium); the correction factor is calculation detail |
| GAP-en16-04 | REJECTED | covered by BP-en16-04 (hyperosmolality in HHS); the osmolality formula is renal-system material |
| GAP-en16-05 | REJECTED | covered by BP-en16-01 and BP-en16-04 (DKA acidosis vs HHS minimal ketosis); numeric cutoffs are guideline detail |
| GAP-en16-06 | ADDED | BP-en16-09 |
| GAP-en16-07 | REJECTED | covered by BP-en16-01 (anion-gap acidosis); the anion gap formula is acid-base (renal) material |
| GAP-en16-08 | ADDED | BP-en15-14 |
| GAP-en16-09 | REJECTED | already covered by BP-en16-04 (HHS: profound dehydration, altered mental status) |
| GAP-en16-10 | REJECTED | covered by BP-en16-03 (IV fluids first); HHS fluid priority is management detail |
| GAP-en16-11 | REJECTED | alcohol as a cause of hypoglycemia is BP-en16-07; the high-NADH block of gluconeogenesis is biochemistry of ethanol metabolism |
| GAP-en16-12 | REJECTED | already covered by BP-en16-06 (insulinoma work-up) |
| GAP-en16-13 | REJECTED | already covered by BP-en18-08 (insulinoma in MEN1) and BP-en18-01 |
| GAP-en16-14 | REJECTED | covered by BP-en14-06 (insulin suppresses ketogenesis) and BP-en16-06 |
| GAP-en16-15 | REJECTED | beyond Step 1: IGF-2-secreting non-islet-cell tumor hypoglycemia |
| GAP-en16-16 | REJECTED | already covered by BP-rp27-04 (neonatal hypoglycemia from fetal hyperinsulinemia) |
| GAP-en16-17 | ADDED | BP-en16-10 |
| GAP-en16-18 | REJECTED | adrenergic warning symptoms and their masking by beta-blockers are BP-en16-08; unawareness after recurrent episodes is clinical detail below Step 1 emphasis |

## en17
| GAP-en17-01 | REJECTED | already covered by BP-en17-01 (insulin preparations) and BP-en15-01 (absolute insulin deficiency) |
| GAP-en17-02 | REJECTED | already covered by BP-en14-05 (insulin receptor tyrosine kinase, GLUT4) |
| GAP-en17-03 | REJECTED | already covered by BP-en14-06 (insulin drives potassium into cells) and BP-en16-02 |
| GAP-en17-04 | REJECTED | already covered by BP-en17-01 (rapid, short, intermediate NPH, long-acting insulins) |
| GAP-en17-05 | ADDED | BP-en16-10 |
| GAP-en17-06 | REJECTED | covered by BP-en17-02 (metformin lowers hepatic gluconeogenesis); AMPK is below Step 1 emphasis |
| GAP-en17-07 | REJECTED | already covered by BP-en17-03 (sulfonylureas and meglitinides close K-ATP channels) |
| GAP-en17-08 | REJECTED | chlorpropamide SIADH is a minor detail; chlorpropamide is in BP-en17-03 |
| GAP-en17-09 | REJECTED | covered by BP-en17-05 (DPP-4 inhibitors); pancreatitis and saxagliptin heart-failure data are label detail |
| GAP-en17-10 | REJECTED | already covered by BP-en17-09 (alpha-glucosidase inhibitors) |
| GAP-en17-11 | REJECTED | already covered by BP-en17-10 (pramlintide, amylin analog) |
| GAP-en17-12 | REJECTED | covered by BP-en17-08 (genital mycotic infections, UTIs); Fournier gangrene is rare label detail |
| GAP-en17-13 | ADDED | BP-en17-15 |
| GAP-en17-14 | ADDED | BP-en17-15 |
| GAP-en17-15 | ADDED | BP-en17-15 |
| GAP-en17-16 | REJECTED | beyond Step 1 and not in the course lecture (scope/lectures/70371_23196915.md page 12 gives only class and adverse effects) |
| GAP-en17-17 | ADDED | BP-en17-15 |
| GAP-en17-18 | REJECTED | already covered by BP-rp27-04 (gestational diabetes: diet then insulin) |

## en18
| GAP-en18-01 | ADDED | BP-en18-09 |
| GAP-en18-02 | REJECTED | covered by BP-en18-01 (MEN1 parathyroid tumors); order of appearance is detail |
| GAP-en18-03 | REJECTED | covered by BP-en18-01 (MEN1 pituitary tumors) and BP-en3-01 (prolactinoma most common adenoma) |
| GAP-en18-04 | REJECTED | already covered by BP-en18-02 and BP-en18-03 (MEN2A includes parathyroid hyperplasia; MEN2B does not) |
| GAP-en18-05 | REJECTED | already covered by BP-en7-10 (medullary carcinoma: C cells, calcitonin, amyloid stroma) |
| GAP-en18-06 | REJECTED | covered by BP-en7-10 (medullary carcinoma in MEN2); C-cell hyperplasia and multifocality are detail |
| GAP-en18-07 | REJECTED | already covered by BP-en11-02 (medulla from neural crest) and BP-en13-05 (chromaffin tumor) |
| GAP-en18-08 | REJECTED | already covered by BP-en13-05 (episodic hypertension, headache, palpitations, sweating) |
| GAP-en18-09 | REJECTED | already covered by BP-en13-05 (plasma free or urine metanephrines) |
| GAP-en18-10 | REJECTED | already covered by BP-en13-05 (zellballen) |
| GAP-en18-11 | REJECTED | already covered by BP-en13-07 (alpha blockade first; beta first risks unopposed alpha crisis) |
| GAP-en18-12 | REJECTED | already covered by BP-en13-06 (MEN2, von Hippel-Lindau, NF1, SDH) |
| GAP-en18-13 | REJECTED | already covered by BP-en13-06 (SDH mutations and paraganglioma) |
| GAP-en18-14 | REJECTED | already covered by BP-en16-06 (Whipple triad, insulinoma) |
| GAP-en18-15 | REJECTED | already covered by BP-en16-06 and BP-en14-02 (insulin and C-peptide patterns) |
| GAP-en18-16 | REJECTED | already covered by BP-en16-06 (sulfonylurea screen) |
| GAP-en18-17 | REJECTED | covered by BP-en18-04 (gastrinoma, secretin test); other causes of hypergastrinemia are GI-system material |
| GAP-en18-18 | REJECTED | covered by BP-en18-04 (diarrhea in Zollinger-Ellison); acid inactivation of enzymes is GI-system material |
| GAP-en18-19 | REJECTED | VIPoma's watery diarrhea, hypokalemia and achlorhydria are BP-en18-05; the non-anion-gap acidosis from stool bicarbonate loss is renal and GI acid-base material |
| GAP-en18-20 | REJECTED | already covered by BP-en18-05 (somatostatinoma: diabetes, gallstones, steatorrhea, achlorhydria) |
| GAP-en18-21 | REJECTED | covered by BP-en18-06 (carcinoid syndrome); primary sites of carcinoid tumors are GI-system material |
| GAP-en18-22 | REJECTED | already covered by BP-en18-06 (serotonin bypassing first-pass metabolism) |
| GAP-en18-23 | REJECTED | already covered by BP-en18-06 (right-sided valve disease) |
| GAP-en18-24 | REJECTED | carcinoid crisis during anesthesia is perioperative management beyond Step 1 |

## rp1
| GAP-rp1-01 | ADDED | BP-rp2-12 |
| GAP-rp1-02 | REJECTED | already covered by BP-rp28-09 (first- to fourth-degree perineal lacerations) |
| GAP-rp1-03 | REJECTED | puborectalis is named in BP-rp1-02 with incontinence after support failure; its anorectal-angle role in fecal continence is GI anatomy |
| GAP-rp1-04 | REJECTED | already covered by BP-rp2-03 (pudendal nerve around the ischial spine) and BP-rp2-10 (Alcock canal) |
| GAP-rp1-05 | ADDED | BP-rp1-14 |
| GAP-rp1-06 | REJECTED | pelvic diaphragm composition (levator ani plus coccygeus) is BP-rp1-02 and the pudendal canal BP-rp2-10; obturator internus as a lateral-wall muscle is course lab anatomy (TOPIC-MAP ANAT-PELVIS-LAB.3) below Step 1 emphasis |
| GAP-rp1-07 | ADDED | BP-rp1-15 |
| GAP-rp1-08 | REJECTED | already covered by BP-rp2-09 (internal urethral sphincter smooth and sympathetic vs external skeletal and pudendal) |
| GAP-rp1-09 | REJECTED | already covered by BP-rp2-04 (erection parasympathetic, emission sympathetic, ejaculation somatic) |
| GAP-rp1-10 | REJECTED | already covered by BP-rp28-07 (first-stage pain T10-L1; pudendal block S2-S4 for the second stage) |
| GAP-rp1-11 | REJECTED | already covered by BP-rp2-05 (gonads to para-aortic nodes; scrotum to superficial inguinal nodes) |
| GAP-rp1-12 | ADDED | BP-rp2-13 |
| GAP-rp1-13 | REJECTED | already covered by BP-rp2-05 (upper vagina to iliac nodes; distal vagina to superficial inguinal nodes) |
| GAP-rp1-14 | REJECTED | already covered by BP-rp21-06 (Batson plexus spread of prostate cancer to the spine) |
| GAP-rp1-15 | REJECTED | already covered by BP-rp19-11 (prostate zones) and BP-rp21-01, BP-rp21-04 |
| GAP-rp1-16 | REJECTED | already covered by BP-rp8-09 (tube parts) and BP-rp4-01 (fertilization in the ampulla) |
| GAP-rp1-17 | REJECTED | already covered by BP-rp26-03 (ampulla most common ectopic site; PID and tubal surgery as risks) |
| GAP-rp1-18 | REJECTED | covered by BP-rp16-09 (PID spreading to peritoneum and perihepatitis); the open tube is the route taught there |
| GAP-rp1-19 | REJECTED | already covered by BP-rp8-11 (endocervix vs ectocervix) and BP-rp13-01 (transformation zone) |
| GAP-rp1-20 | REJECTED | already covered by BP-rp5-03 (paramesonephric derivatives; lower vagina from urogenital sinus) |
| GAP-rp1-21 | REJECTED | already covered by BP-rp5-07 (MRKH, didelphys, bicornuate, septate, unicornuate) |
| GAP-rp1-22 | REJECTED | already covered by BP-rp5-02 (Wolffian derivatives, SEED) and BP-rp5-04 |
| GAP-rp1-23 | ADDED | BP-rp5-13 |
| GAP-rp1-24 | ADDED | BP-rp1-16 |
| GAP-rp1-25 | REJECTED | renal-system anatomy: bladder trigone and vesicoureteral reflux are taught with the urinary tract |
| GAP-rp1-26 | REJECTED | covered by BP-rp1-06 (anterior division of the internal iliac supplies pelvic viscera); vesical branches are detail |
| GAP-rp1-27 | REJECTED | already covered by BP-rp2-02 (posterior membranous urethral injury with pelvic fracture) |
| GAP-rp1-28 | REJECTED | GI-system anatomy (rectal arterial supply); the anal canal split is BP-rp2-06 |
| GAP-rp1-29 | REJECTED | GI-system portosystemic anastomosis; rectal venous drainage by the pectinate line is BP-rp2-06 |

## rp2
| GAP-rp2-01 | REJECTED | the pectinate-line split taught here is BP-rp2-06 (hemorrhoids, cancer type, nerves, nodes); the rectal arterial supply above and below the line is GI-system anatomy (see GAP-rp1-28) |
| GAP-rp2-02 | REJECTED | the pectinate-line split taught here is BP-rp2-06; rectal venous drainage and the portosystemic anastomosis are GI-system material (see GAP-rp1-29) |
| GAP-rp2-03 | REJECTED | the pectinate-line split taught here is BP-rp2-06 (adenocarcinoma above, squamous cell carcinoma below); the hindgut-endoderm vs ectoderm origin of the anal canal is GI embryology |
| GAP-rp2-04 | ADDED | BP-rp2-12 |
| GAP-rp2-05 | REJECTED | already covered by BP-rp1-02 (levator ani with puborectalis and coccygeus form the pelvic diaphragm) |
| GAP-rp2-06 | ADDED | BP-rp2-12 |
| GAP-rp2-07 | REJECTED | the internal pudendal artery's origin is BP-rp1-06 and the pudendal nerve's course around the ischial spine BP-rp2-03; the artery's exit and re-entry through the sciatic foramina is dissection detail below Step 1 emphasis |
| GAP-rp2-08 | ADDED | BP-rp2-11 |
| GAP-rp2-09 | ADDED | BP-rp2-11 |
| GAP-rp2-10 | REJECTED | already covered by BP-rp2-05 (glans to deep inguinal nodes) and BP-rp2-13 (shaft skin to superficial inguinal) |
| GAP-rp2-11 | ADDED | BP-rp2-13 |
| GAP-rp2-12 | ADDED | BP-rp2-13 |
| GAP-rp2-13 | REJECTED | already covered by BP-rp19-07 (parasympathetic, nitric oxide, cGMP, smooth muscle relaxation) |
| GAP-rp2-14 | REJECTED | already covered by BP-rp22-05 (PDE5 inhibitors contraindicated with nitrates) |
| GAP-rp2-15 | REJECTED | covered by BP-rp2-04 (erection is parasympathetic) and BP-rp1-11 (pelvic splanchnics); surgical nerve injury follows |
| GAP-rp2-16 | REJECTED | already covered by BP-rp12-05 (Bartholin cyst and abscess) and BP-rp2-07 |
| GAP-rp2-17 | REJECTED | already covered by BP-rp5-09 (hypospadias vs epispadias, bladder exstrophy) |
| GAP-rp2-18 | REJECTED | already covered by BP-rp5-05 (external genital homologs) |
| GAP-rp2-19 | REJECTED | already covered by BP-rp5-04 (DHT builds external genitalia) and BP-rp6-02 (5-alpha-reductase deficiency) |
| GAP-rp2-20 | REJECTED | already covered by BP-rp2-02 (anterior bulbar urethral rupture and urine spread) |
| GAP-rp2-21 | REJECTED | already covered by BP-rp21-13 (penile fracture, tunica albuginea rupture) |
| GAP-rp2-22 | REJECTED | Fournier gangrene is a surgical or infectious emergency below Step 1 emphasis for this topic |

## rp3
| GAP-rp3-01 | REJECTED | neurology-system fact: dermatome landmarks (T4 at the nipple) are taught with the spinal nerves |
| GAP-rp3-02 | REJECTED | already covered by BP-rp23-08 (polythelia and polymastia along the milk line) |
| GAP-rp3-03 | REJECTED | already covered by BP-rp24-05 (inflammatory carcinoma, dermal lymphatic emboli, peau d'orange) |
| GAP-rp3-04 | ADDED | BP-rp24-14 |
| GAP-rp3-05 | REJECTED | covered by BP-rp3-04 (axillary node levels I to III); the named node group sequence is below Step 1 emphasis |
| GAP-rp3-06 | ADDED | BP-rp3-09 |
| GAP-rp3-07 | ADDED | BP-rp3-09 |
| GAP-rp3-08 | REJECTED | intralobular vs interlobular stroma is low-yield histology beyond Step 1 emphasis |
| GAP-rp3-09 | REJECTED | nipple epithelium type is low-yield histology beyond Step 1 emphasis |

## rp4
| GAP-rp4-01 | ADDED | BP-rp4-13 |
| GAP-rp4-02 | ADDED | BP-rp4-13 |
| GAP-rp4-03 | REJECTED | already covered by BP-rp8-02 (oocyte arrested in metaphase II until fertilization) |
| GAP-rp4-04 | ADDED | BP-rp4-14 |
| GAP-rp4-05 | ADDED | BP-rp4-14 |
| GAP-rp4-06 | REJECTED | already covered by BP-rp4-02 (gastrulation forms the trilaminar disc) |
| GAP-rp4-07 | ADDED | BP-rp4-15 |
| GAP-rp4-08 | REJECTED | already covered by BP-rp4-03 (embryonic period weeks 3-8; the fetal period follows) |
| GAP-rp4-09 | REJECTED | covered by BP-rp4-09 (yolk sac) and BP-rp5-11 (germ cells from the yolk sac); fetal hematopoiesis sites are heme material |
| GAP-rp4-10 | REJECTED | the extraembryonic membranes are BP-rp4-12 and the bilaminar disc BP-rp4-02; which germ layer builds each membrane is below Step 1 emphasis |
| GAP-rp4-11 | ADDED | BP-rp4-16 |
| GAP-rp4-12 | REJECTED | already covered by BP-rp4-06 (chorionic villi, maternal blood in intervillous spaces) |
| GAP-rp4-13 | REJECTED | primary, secondary and tertiary villus stages are below Step 1 emphasis |
| GAP-rp4-14 | REJECTED | already covered by BP-rp27-02 (abnormal spiral artery remodeling in pre-eclampsia) |
| GAP-rp4-15 | REJECTED | IgG vs IgM serology in pregnancy is BP-rp18-13; that only IgG crosses the placenta (FcRn transport) is immunology material |
| GAP-rp4-16 | REJECTED | already covered by BP-rp4-07 (hPL insulin resistance, lipolysis) |
| GAP-rp4-17 | REJECTED | covered by BP-rp4-07 (placental progesterone) and BP-rp28-01 (falling progesterone effect at labor) |
| GAP-rp4-18 | REJECTED | already covered by BP-rp26-03 (ampulla most common; PID, tubal surgery) |
| GAP-rp4-19 | REJECTED | already covered by BP-rp26-02 (discriminatory zone, serial hCG) |
| GAP-rp4-20 | REJECTED | methotrexate for a stable ectopic pregnancy is BP-rp26-03; its dihydrofolate reductase mechanism is pharmacology taught with the antimetabolites |
| GAP-rp4-21 | REJECTED | already covered by BP-rp27-06 (placenta previa, painless bleeding) |
| GAP-rp4-22 | REJECTED | already covered by BP-rp27-06 (accreta from defective decidua, prior cesarean) |
| GAP-rp4-23 | REJECTED | already covered by BP-rp27-06 (accreta, increta, percreta) |
| GAP-rp4-24 | REJECTED | already covered by BP-rp27-06 (abruption: painful bleeding, hypertension, cocaine) |
| GAP-rp4-25 | REJECTED | already covered by BP-rp27-06 (vasa previa: fetal vessels, fetal bleeding) |
| GAP-rp4-26 | ADDED | BP-rp4-17 |
| GAP-rp4-27 | REJECTED | covered by BP-rp4-10 (mono/mono twins); cord entanglement is obstetric detail |
| GAP-rp4-28 | REJECTED | beyond Step 1: lambda and T signs are obstetric ultrasound detail |
| GAP-rp4-29 | REJECTED | already covered by BP-rp4-11 (oligohydramnios, Potter sequence) |
| GAP-rp4-30 | REJECTED | already covered by BP-rp26-06 (complete mole: paternal 46,XX, no fetal parts) |
| GAP-rp4-31 | REJECTED | already covered by BP-rp26-07 (partial mole: triploid, fetal parts) |

## rp5
| GAP-rp5-01 | REJECTED | beyond Step 1: SOX9 downstream of SRY; SRY itself is BP-rp5-01 |
| GAP-rp5-02 | REJECTED | already covered by BP-rp6-09 (46,XX testicular DSD from SRY translocation) |
| GAP-rp5-03 | REJECTED | already covered by BP-rp6-05 (Swyer syndrome, streak gonads, uterus present) |
| GAP-rp5-04 | REJECTED | already covered by BP-rp6-01 (complete androgen insensitivity) |
| GAP-rp5-05 | REJECTED | already covered by BP-rp6-01 (high testosterone, estrogen and LH) |
| GAP-rp5-06 | REJECTED | complete androgen insensitivity is BP-rp6-01; partial androgen insensitivity (hypospadias, pubertal gynecomastia) is below Step 1 emphasis |
| GAP-rp5-07 | REJECTED | already covered by BP-rp6-02 (5-alpha-reductase deficiency virilizes at puberty) |
| GAP-rp5-08 | REJECTED | already covered by BP-rp6-02 (normal testosterone, low DHT) and BP-rp6-10 (lab-pattern table) |
| GAP-rp5-09 | REJECTED | follows from BP-rp5-01 (Sertoli AMH regresses Mullerian ducts); persistent Mullerian duct syndrome is below Step 1 emphasis |
| GAP-rp5-10 | REJECTED | already covered by BP-rp6-03 (CAH in 46,XX) and BP-en11-10 (46,XX CAH keeps ovaries and uterus) |
| GAP-rp5-11 | REJECTED | already covered by BP-rp6-04 (placental aromatase deficiency virilizes fetus and mother) |
| GAP-rp5-12 | REJECTED | placental hCG driving fetal Leydig cells is below Step 1 emphasis; hCG functions are BP-rp4-07 |
| GAP-rp5-13 | REJECTED | beyond Step 1: INSL3 in testicular descent; the gubernaculum is BP-rp5-06 |
| GAP-rp5-14 | REJECTED | already covered by BP-rp20-01 (cryptorchidism: infertility and germ cell tumor risk) |
| GAP-rp5-15 | ADDED | BP-rp5-12 |
| GAP-rp5-16 | REJECTED | already covered by BP-rp20-05 (communicating hydrocele, patent processus vaginalis) |
| GAP-rp5-17 | REJECTED | GI-system anatomy (indirect inguinal hernia); the processus vaginalis is BP-rp5-06 and BP-rp20-05 |
| GAP-rp5-18 | REJECTED | covered by BP-rp5-02 (mesonephric derivatives); efferent ductule origin is detail |
| GAP-rp5-19 | REJECTED | torsion of the appendix testis is below Step 1 emphasis; testicular torsion is BP-rp20-02 |
| GAP-rp5-20 | ADDED | BP-rp5-13 |
| GAP-rp5-21 | REJECTED | embryologic origin of each urethral segment is below Step 1 emphasis |
| GAP-rp5-22 | REJECTED | already covered by BP-rp5-07 (bicornuate from incomplete fusion vs septate from failed resorption) |
| GAP-rp5-23 | REJECTED | already covered by BP-rp5-07 (didelphys from failed fusion) |
| GAP-rp5-24 | REJECTED | already covered by BP-rp5-07 (unicornuate uterus) |
| GAP-rp5-25 | REJECTED | already covered by BP-rp5-02 and BP-rp12-12 (Gartner duct cyst on the lateral vaginal wall) |
| GAP-rp5-26 | REJECTED | already covered by BP-rp5-08 (imperforate hymen and transverse vaginal septum) |
| GAP-rp5-27 | REJECTED | already covered by BP-rp5-08 (vaginal atresia) |
| GAP-rp5-28 | REJECTED | already covered by BP-rp21-02 (5-alpha-reductase inhibitors are teratogenic to handle) |

## rp6
| GAP-rp6-01 | REJECTED | already covered by BP-rp5-01 (Sertoli AMH, Leydig testosterone) and BP-rp5-04 (DHT for external genitalia) |
| GAP-rp6-02 | REJECTED | covered by BP-rp6-01 (high testosterone and estrogen in complete androgen insensitivity; breasts develop from aromatization) |
| GAP-rp6-03 | REJECTED | complete androgen insensitivity is BP-rp6-01; the partial androgen insensitivity spectrum (hypospadias, micropenis, bifid scrotum) is below Step 1 emphasis |
| GAP-rp6-04 | REJECTED | already covered by BP-rp6-02 and BP-rp6-10 (internal anatomy and labs separate the 46,XY disorders) |
| GAP-rp6-05 | REJECTED | already covered by BP-rp6-02 (normal testosterone, low DHT) |
| GAP-rp6-06 | REJECTED | follows from BP-rp5-01 (AMH regresses Mullerian ducts); persistent Mullerian duct syndrome is below Step 1 emphasis |
| GAP-rp6-07 | REJECTED | covered by BP-rp6-05 (Swyer syndrome, streak gonads) and BP-rp7-06 (hypergonadotropic delayed puberty) |
| GAP-rp6-08 | REJECTED | covered by BP-rp6-04 (placental aromatase deficiency); CYP19A1 and low estriol are detail |
| GAP-rp6-09 | REJECTED | pregnancy luteoma and maternal androgen exposure are below Step 1 emphasis |
| GAP-rp6-10 | REJECTED | the small firm testes and low inhibin of Klinefelter syndrome (tubular dysgenesis) are BP-rp6-07; the biopsy picture of hyalinized tubules is below Step 1 emphasis |
| GAP-rp6-11 | REJECTED | beyond Step 1: SHOX haploinsufficiency |
| GAP-rp6-12 | ADDED | BP-rp6-11 |
| GAP-rp6-13 | REJECTED | the Turner features Step 1 tests are listed in BP-rp6-06; short fourth metacarpal and cubitus valgus are minor skeletal signs below Step 1 emphasis |
| GAP-rp6-14 | REJECTED | gonadoblastoma in dysgenetic gonads that carry a Y chromosome is taught with Swyer syndrome in BP-rp6-05; Turner Y-mosaicism is below Step 1 emphasis |
| GAP-rp6-15 | REJECTED | beyond Step 1: mixed gonadal dysgenesis (45,X/46,XY) |
| GAP-rp6-16 | REJECTED | 47,XXX is below Step 1 emphasis; Barr body logic is in BP-rp6-07 |
| GAP-rp6-17 | REJECTED | already covered by BP-rp6-09 (ovotesticular DSD) |
| GAP-rp6-18 | REJECTED | already covered by BP-rp6-09 (46,XX testicular DSD from SRY translocation) |

## rp7
| GAP-rp7-01 | ADDED | BP-rp7-09 |
| GAP-rp7-02 | ADDED | BP-rp7-09 |
| GAP-rp7-03 | REJECTED | already covered by BP-rp19-05 (LH to Leydig, FSH to Sertoli) and BP-rp8-03 (FSH and granulosa aromatase) |
| GAP-rp7-04 | REJECTED | covered by BP-rp19-06 (epiphyseal closure via aromatization) and BP-rp7-04 (advanced bone age) |
| GAP-rp7-05 | REJECTED | covered by BP-rp7-04 and BP-rp7-05 (central is gonadotropin-driven so testes enlarge; peripheral has low LH and FSH) |
| GAP-rp7-06 | REJECTED | covered by BP-rp7-04 (hypothalamic hamartoma); gelastic seizures are a neurologic detail |
| GAP-rp7-07 | REJECTED | beyond Step 1: familial male-limited precocious puberty (activating LH receptor) |
| GAP-rp7-08 | REJECTED | already covered by BP-rp7-05 (hCG-secreting tumors cause peripheral precocity) |
| GAP-rp7-09 | REJECTED | already covered by BP-rp7-05 (granulosa and Leydig cell tumors) |
| GAP-rp7-10 | REJECTED | already covered by BP-rp7-05 (CAH as peripheral precocity) and BP-en11-04 |
| GAP-rp7-11 | REJECTED | already covered by BP-rp7-05 (McCune-Albright, GNAS activating) |
| GAP-rp7-12 | REJECTED | Van Wyk-Grumbach syndrome is rare and below Step 1 emphasis |
| GAP-rp7-13 | REJECTED | already covered by BP-rp7-07 (premature thelarche) |
| GAP-rp7-14 | REJECTED | already covered by BP-rp7-07 (premature adrenarche) |
| GAP-rp7-15 | REJECTED | already covered by BP-rp7-07 (pubertal gynecomastia) and BP-rp23-10 |
| GAP-rp7-16 | REJECTED | already covered by BP-rp7-06 (hypogonadotropic vs hypergonadotropic delayed puberty) |
| GAP-rp7-17 | REJECTED | already covered by BP-rp6-08 (Kallmann syndrome) |
| GAP-rp7-18 | REJECTED | micropenis as a clue to GnRH deficiency is below Step 1 emphasis; constitutional delay is BP-rp7-06 |
| GAP-rp7-19 | REJECTED | already covered by BP-rp6-06 (Turner syndrome) |
| GAP-rp7-20 | REJECTED | already covered by BP-rp6-07 (Klinefelter syndrome) |
| GAP-rp7-21 | REJECTED | covered by BP-rp7-06 (functional hypogonadotropic causes) and BP-en2-05 (prolactin inhibits GnRH) |

## rp8
| GAP-rp8-01 | REJECTED | already covered by BP-rp8-02 (prophase I arrest until ovulation, metaphase II until fertilization) |
| GAP-rp8-02 | ADDED | BP-rp8-12 |
| GAP-rp8-03 | REJECTED | covered by BP-rp8-01 (primordial follicles), BP-rp8-08 (ovarian reserve) and BP-rp11-01 (follicle depletion) |
| GAP-rp8-04 | REJECTED | already covered by BP-rp5-11 (primordial germ cells migrate from the yolk sac) |
| GAP-rp8-05 | REJECTED | already covered by BP-rp8-01 (primordial, primary, secondary, Graafian follicles) |
| GAP-rp8-06 | REJECTED | covered by BP-rp8-03 (theca makes androgens, granulosa converts them); interna vs externa is detail |
| GAP-rp8-07 | REJECTED | ovarian cortex vs medulla is low-yield histology below Step 1 emphasis |
| GAP-rp8-08 | REJECTED | dominant follicle selection is below Step 1 emphasis; the follicular phase is BP-rp8-05 |
| GAP-rp8-09 | ADDED | BP-en2-11 |
| GAP-rp8-10 | REJECTED | already covered by BP-rp8-05 (estrogen positive feedback triggers the LH surge) |
| GAP-rp8-11 | ADDED | BP-rp8-14 |
| GAP-rp8-12 | REJECTED | covered by BP-rp8-05 (luteal phase) and BP-rp8-08 (inhibin suppresses FSH); inhibin A vs B is detail |
| GAP-rp8-13 | ADDED | BP-rp8-14 |
| GAP-rp8-14 | REJECTED | already covered by BP-rp4-07 (hCG maintains the corpus luteum) |
| GAP-rp8-15 | ADDED | BP-rp8-13 |
| GAP-rp8-16 | REJECTED | covered by BP-rp8-05 (progesterone withdrawal) and BP-rp9-08 (prostaglandins in dysmenorrhea) |
| GAP-rp8-17 | REJECTED | covered by BP-rp9-07 (ovulatory dysfunction in PALM-COEIN) and BP-rp14-06 (anovulation, unopposed estrogen) |
| GAP-rp8-18 | REJECTED | already covered by BP-rp4-01 (fertilization in the ampulla) |
| GAP-rp8-19 | REJECTED | already covered by BP-rp15-02 (corpus luteum cyst hemorrhage) |
| GAP-rp8-20 | REJECTED | already covered by BP-rp9-10 (clomiphene, SERM at the hypothalamus) |
| GAP-rp8-21 | ADDED | BP-rp9-14 |
| GAP-rp8-22 | REJECTED | already covered by BP-rp10-01 (combined hormonal contraception suppresses FSH and LH) |

## rp9
| GAP-rp9-01 | REJECTED | covered by BP-en1-07 (primary vs central feedback logic), BP-rp9-03 and BP-rp11-02 (ovarian insufficiency with high FSH) |
| GAP-rp9-02 | REJECTED | already covered by BP-rp11-02 (primary ovarian insufficiency: Turner, fragile X premutation, autoimmune, chemotherapy) |
| GAP-rp9-03 | REJECTED | already covered by BP-rp6-06 (Turner syndrome) and BP-rp9-02 (primary amenorrhea sorted by breasts and uterus) |
| GAP-rp9-04 | REJECTED | already covered by BP-rp6-08 (Kallmann syndrome) |
| GAP-rp9-05 | REJECTED | already covered by BP-rp5-07 (MRKH) and BP-rp5-10 (renal anomalies) |
| GAP-rp9-06 | REJECTED | already covered by BP-rp6-01 (complete androgen insensitivity) |
| GAP-rp9-07 | REJECTED | already covered by BP-rp5-08 (imperforate hymen, hematocolpos) |
| GAP-rp9-08 | REJECTED | already covered by BP-en2-05 (prolactin inhibits GnRH) and BP-rp9-03 (hyperprolactinemia) |
| GAP-rp9-09 | REJECTED | already covered by BP-en3-02 (hypothyroidism raises prolactin through TRH) |
| GAP-rp9-10 | REJECTED | already covered by BP-en3-02 (antipsychotic D2 blockade) and BP-rp23-07 (metoclopramide) |
| GAP-rp9-11 | REJECTED | already covered by BP-en3-08 (Sheehan syndrome, failure to lactate) |
| GAP-rp9-12 | REJECTED | already covered by BP-rp9-03 and BP-rp14-11 (Asherman syndrome after curettage) |
| GAP-rp9-13 | REJECTED | the progestin challenge is BP-rp9-12; the follow-up estrogen-progestin challenge is clinical work-up detail below Step 1 emphasis |
| GAP-rp9-14 | REJECTED | already covered by BP-rp28-11 (lactational amenorrhea) |
| GAP-rp9-15 | ADDED | BP-rp9-13 |
| GAP-rp9-16 | ADDED | BP-rp9-13 |
| GAP-rp9-17 | REJECTED | already covered by BP-rp9-05 (polycystic ovaries in the Rotterdam criteria) |
| GAP-rp9-18 | REJECTED | covered by BP-rp8-04 (estrone from adipose aromatization) and BP-rp9-05 (unopposed estrogen) |
| GAP-rp9-19 | ADDED | BP-rp9-14 |
| GAP-rp9-20 | REJECTED | covered by BP-rp9-06 (spironolactone for hirsutism) and BP-rp22-07 (its antiandrogen actions) |
| GAP-rp9-21 | REJECTED | covered by BP-rp9-07 (ovulatory dysfunction in PALM-COEIN) and BP-rp14-06 (anovulation, unopposed estrogen) |
| GAP-rp9-22 | REJECTED | covered by BP-rp9-07 (coagulopathy in PALM-COEIN); von Willebrand disease itself is hematology material |
| GAP-rp9-23 | REJECTED | already covered by BP-rp14-04 (leiomyoma) |
| GAP-rp9-24 | REJECTED | already covered by BP-rp14-03 (adenomyosis) |
| GAP-rp9-25 | REJECTED | already covered by BP-rp14-01 (endometriosis) |
| GAP-rp9-26 | REJECTED | covered by BP-rp14-02 (GnRH agonists for endometriosis) and BP-en2-11 (continuous GnRH suppresses estrogen) |
| GAP-rp9-27 | REJECTED | already covered by BP-rp14-11 (endometrial polyp) |
| GAP-rp9-28 | REJECTED | already covered by BP-rp14-06 (endometrial hyperplasia; atypia predicts cancer) |
| GAP-rp9-29 | REJECTED | testing for pregnancy first is BP-rp9-01; applying the same first step to abnormal bleeding is clinical work-up order, not a separate Step 1 concept |
| GAP-rp9-30 | REJECTED | covered by BP-rp11-05 (ultrasound and endometrial biopsy) and BP-rp14-12 (sampling procedures) |
| GAP-rp9-31 | REJECTED | covered by BP-rp8-06 (luteal progesterone and basal body temperature); progesterone cutoffs are clinical detail |
| GAP-rp9-32 | REJECTED | already covered by BP-rp8-08 (AMH measures ovarian reserve) |
| GAP-rp9-33 | REJECTED | already covered by BP-rp9-11 (hysterosalpingography for tubal factor) |
| GAP-rp9-34 | REJECTED | already covered by BP-rp9-10 (ovarian hyperstimulation syndrome) |

## rp10
| GAP-rp10-01 | REJECTED | covered by BP-rp10-01 (combined hormonal contraception; pill, patch and ring share its mechanism and risks) |
| GAP-rp10-02 | REJECTED | covered by BP-rp10-03 (estrogen VTE risk) and BP-rp11-15 (hepatic first-pass rise in clotting factors) |
| GAP-rp10-03 | REJECTED | covered by BP-rp10-03 (estrogen contraindications including prior VTE); inherited thrombophilia is hematology |
| GAP-rp10-04 | REJECTED | minor adverse effects (nausea, breast tenderness, spotting) are below Step 1 emphasis |
| GAP-rp10-05 | REJECTED | already covered by BP-rp10-05 (progestin-only methods) and BP-rp10-03 (estrogen contraindications) |
| GAP-rp10-06 | REJECTED | covered by BP-rp10-05 (minipill) and BP-rp10-01 (progestin thickens cervical mucus) |
| GAP-rp10-07 | ADDED | BP-rp10-12 |
| GAP-rp10-08 | ADDED | BP-rp10-12 |
| GAP-rp10-09 | ADDED | BP-rp10-13 |
| GAP-rp10-10 | ADDED | BP-rp10-13 |
| GAP-rp10-11 | REJECTED | already covered by BP-rp26-03 (IUD in place is an ectopic pregnancy risk factor) |
| GAP-rp10-12 | REJECTED | copper IUD in Wilson disease is label detail below Step 1 emphasis |
| GAP-rp10-13 | REJECTED | covered by BP-rp10-09 (barrier methods) and BP-rp17-04 (condoms for HIV prevention) |
| GAP-rp10-14 | ADDED | BP-rp10-11 |
| GAP-rp10-15 | ADDED | BP-rp10-11 |
| GAP-rp10-16 | REJECTED | timing of hormonal contraception after ulipristal is prescribing detail beyond Step 1 |
| GAP-rp10-17 | ADDED | BP-rp10-11 |
| GAP-rp10-18 | REJECTED | covered by BP-en12-15 (mifepristone blocks the glucocorticoid receptor) and BP-rp10-08 |
| GAP-rp10-19 | REJECTED | ectopic pregnancy treatment is BP-rp26-03; failure of medication abortion there is management detail |
| GAP-rp10-20 | REJECTED | covered by BP-rp10-08 (misoprostol causes uterine contraction); its GI effects are minor detail |
| GAP-rp10-21 | REJECTED | covered by BP-rp28-11 (lactational amenorrhea); method criteria are counseling detail |

## rp11
| GAP-rp11-01 | ADDED | BP-rp11-13 |
| GAP-rp11-02 | ADDED | BP-rp11-13 |
| GAP-rp11-03 | REJECTED | already covered by BP-rp11-11 (perimenopausal bleeding changes) |
| GAP-rp11-04 | REJECTED | follows from BP-rp11-01 (ovarian follicle loss causes menopause); surgical timing is a direct consequence |
| GAP-rp11-05 | REJECTED | intermittent ovulation in primary ovarian insufficiency is below Step 1 emphasis; POI is BP-rp11-02 |
| GAP-rp11-06 | REJECTED | covered by BP-rp11-03 (genitourinary syndrome, atrophy) and BP-rp12-01 (glycogen, lactobacilli, pH) |
| GAP-rp11-07 | REJECTED | already covered by BP-en10-01 (estrogen loss raises RANKL and lowers OPG) |
| GAP-rp11-08 | REJECTED | already covered by BP-en10-01 (osteoporosis with normal calcium, phosphate, ALP) |
| GAP-rp11-09 | ADDED | BP-rp11-14 |
| GAP-rp11-10 | ADDED | BP-rp11-14 |
| GAP-rp11-11 | ADDED | BP-rp11-15 |
| GAP-rp11-12 | ADDED | BP-rp11-15 |
| GAP-rp11-13 | ADDED | BP-rp11-16 |
| GAP-rp11-14 | REJECTED | already covered by BP-rp11-08 (WHI; hormone therapy is not for disease prevention) |
| GAP-rp11-15 | ADDED | BP-rp11-16 |
| GAP-rp11-16 | ADDED | BP-rp11-16 |
| GAP-rp11-17 | ADDED | BP-en10-12 |
| GAP-rp11-18 | ADDED | BP-rp11-17 |

## rp12
| GAP-rp12-01 | REJECTED | covered by BP-rp11-03 (genitourinary syndrome of menopause) and BP-rp12-01 (glycogen, lactobacilli, pH) |
| GAP-rp12-02 | REJECTED | already covered by BP-rp12-02 (bacterial vaginosis) |
| GAP-rp12-03 | REJECTED | already covered by BP-rp12-04 (vulvovaginal candidiasis) |
| GAP-rp12-04 | REJECTED | already covered by BP-rp12-05 (Bartholin abscess) and BP-rp2-07 (gland location) |
| GAP-rp12-05 | ADDED | BP-rp12-14 |
| GAP-rp12-06 | ADDED | BP-rp12-14 |
| GAP-rp12-07 | ADDED | BP-rp12-14 |
| GAP-rp12-08 | ADDED | BP-rp12-13 |
| GAP-rp12-09 | ADDED | BP-rp12-13 |
| GAP-rp12-10 | ADDED | BP-rp12-13 |
| GAP-rp12-11 | REJECTED | already covered by BP-rp12-08 (extramammary Paget disease) |
| GAP-rp12-12 | REJECTED | already covered by BP-rp12-09 (condyloma acuminatum) and BP-rp17-09 |
| GAP-rp12-13 | REJECTED | already covered by BP-rp17-10 (molluscum contagiosum, molluscum bodies) |
| GAP-rp12-14 | REJECTED | already covered by BP-rp17-07 (HSV grouped vesicles, latency) |
| GAP-rp12-15 | REJECTED | already covered by BP-rp17-07 (Tzanck multinucleated giant cells, Cowdry A, sacral ganglia) |
| GAP-rp12-16 | REJECTED | already covered by BP-rp17-08 (acyclovir activated by viral thymidine kinase) |
| GAP-rp12-17 | REJECTED | already covered by BP-rp16-04 (painless chancre) and BP-rp16-08 |
| GAP-rp12-18 | REJECTED | already covered by BP-rp16-04 (condylomata lata) and BP-rp12-09 (condyloma acuminatum) |
| GAP-rp12-19 | REJECTED | already covered by BP-rp16-05 (nontreponemal then treponemal tests) and BP-rp16-04 (penicillin G) |
| GAP-rp12-20 | REJECTED | already covered by BP-rp16-06 (chancroid) |
| GAP-rp12-21 | REJECTED | already covered by BP-rp16-02 (lymphogranuloma venereum) |
| GAP-rp12-22 | REJECTED | already covered by BP-rp16-07 (donovanosis) |
| GAP-rp12-23 | REJECTED | already covered by BP-rp13-08 (cervicitis) and BP-rp16-01 (NAAT) |
| GAP-rp12-24 | REJECTED | already covered by BP-rp5-03 (upper vagina Mullerian, lower vagina urogenital sinus) |
| GAP-rp12-25 | REJECTED | already covered by BP-rp5-02 (Gartner duct cyst as Wolffian remnant) |
| GAP-rp12-26 | REJECTED | already covered by BP-rp5-08 (imperforate hymen) |
| GAP-rp12-27 | REJECTED | already covered by BP-rp12-10 (DES and vaginal adenosis) |
| GAP-rp12-28 | ADDED | BP-rp12-15 |
| GAP-rp12-29 | REJECTED | covered by BP-rp12-12 (vaginal SCC) and BP-rp13-02 (high-risk HPV oncogenesis) |

## rp13
| GAP-rp13-01 | REJECTED | already covered by BP-rp8-11 (ectocervix squamous, endocervix mucinous columnar) |
| GAP-rp13-02 | REJECTED | already covered by BP-rp8-06 (estrogen thin mucus, progesterone thick mucus) |
| GAP-rp13-03 | REJECTED | already covered by BP-rp12-09 and BP-rp17-09 (HPV 6/11 warts vs 16/18 cancer) |
| GAP-rp13-04 | ADDED | BP-rp13-12 |
| GAP-rp13-05 | REJECTED | viral integration and E2 disruption are below Step 1 emphasis; E6 and E7 are BP-rp13-02 |
| GAP-rp13-06 | ADDED | BP-rp13-11 |
| GAP-rp13-07 | ADDED | BP-rp13-12 |
| GAP-rp13-08 | ADDED | BP-rp13-12 |
| GAP-rp13-09 | REJECTED | cervical adenocarcinoma is BP-rp13-04 and high-risk HPV 16/18 BP-rp13-02; the specific link of HPV 18 to glandular lesions is below Step 1 emphasis |
| GAP-rp13-10 | ADDED | BP-rp13-13 |
| GAP-rp13-11 | REJECTED | already covered by BP-rp12-10 (DES clear cell adenocarcinoma) |
| GAP-rp13-12 | REJECTED | covered by BP-rp13-06 (colposcopy with biopsy); acetowhite change is procedure detail |
| GAP-rp13-13 | REJECTED | covered by BP-rp13-07 (HPV vaccine) and BP-rp13-05 (screening continues) |
| GAP-rp13-14 | REJECTED | post-treatment surveillance intervals are guideline detail beyond Step 1 |
| GAP-rp13-15 | ADDED | BP-rp13-14 |
| GAP-rp13-16 | REJECTED | risk-based colposcopy triage is guideline detail beyond Step 1; colposcopy is BP-rp13-06 |

## rp14
| GAP-rp14-01 | ADDED | BP-rp8-13 |
| GAP-rp14-02 | REJECTED | already covered by BP-rp8-07 (proliferative phase: straight glands, mitoses) |
| GAP-rp14-03 | REJECTED | already covered by BP-rp8-07 (secretory phase: vacuoles, tortuous glands, stromal edema) |
| GAP-rp14-04 | REJECTED | already covered by BP-rp8-05 (menses from progesterone withdrawal) |
| GAP-rp14-05 | REJECTED | already covered by BP-rp14-06 (anovulation, unopposed estrogen) |
| GAP-rp14-06 | REJECTED | covered by BP-rp14-01 (endometriosis, chocolate cyst, powder-burn lesions); hemosiderin is its histology |
| GAP-rp14-07 | REJECTED | already covered by BP-rp14-01 (endometriosis causes infertility) and BP-rp9-11 |
| GAP-rp14-08 | ADDED | BP-en2-11 |
| GAP-rp14-09 | REJECTED | covered by BP-rp14-02 (GnRH agonists or antagonists) and BP-en2-11 (sex steroid suppression) |
| GAP-rp14-10 | ADDED | BP-rp14-15 |
| GAP-rp14-11 | REJECTED | uterine imaging features of adenomyosis are radiology detail; adenomyosis is BP-rp14-03 |
| GAP-rp14-12 | REJECTED | covered by BP-rp14-04 (leiomyoma: bleeding, infertility) |
| GAP-rp14-13 | REJECTED | covered by BP-rp14-04 (estrogen-sensitive leiomyoma, grows in pregnancy) |
| GAP-rp14-14 | REJECTED | already covered by BP-rp14-05 (leiomyosarcoma: de novo, postmenopausal) |
| GAP-rp14-15 | REJECTED | already covered by BP-rp14-06 (endometrial hyperplasia) |
| GAP-rp14-16 | REJECTED | already covered by BP-rp14-06 (atypia best predicts cancer) and BP-rp14-07 |
| GAP-rp14-17 | REJECTED | already covered by BP-rp14-07 (type I endometrioid carcinoma, estrogen-driven) |
| GAP-rp14-18 | ADDED | BP-rp14-14 |
| GAP-rp14-19 | ADDED | BP-rp14-14 |
| GAP-rp14-20 | ADDED | BP-rp11-14 |
| GAP-rp14-21 | REJECTED | already covered by BP-rp14-11 (endometrial polyp) |
| GAP-rp14-22 | REJECTED | already covered by BP-rp14-11 (Asherman syndrome) and BP-rp8-13 (basalis loss) |
| GAP-rp14-23 | REJECTED | already covered by BP-rp14-10 (postpartum endometritis) and BP-rp28-12 |
| GAP-rp14-24 | REJECTED | already covered by BP-rp14-10 (acute vs chronic endometritis with plasma cells) |
| GAP-rp14-25 | REJECTED | beyond Step 1: clonal origin of carcinosarcoma; the tumor is BP-rp14-09 |
| GAP-rp14-26 | REJECTED | already covered by BP-rp5-07 (septate uterus) |
| GAP-rp14-27 | REJECTED | already covered by BP-rp5-07 (bicornuate and didelphys) |

## rp15
| GAP-rp15-01 | REJECTED | covered by BP-rp15-02 (functional cysts) and BP-rp15-12 (ultrasound features of benign vs malignant) |
| GAP-rp15-02 | REJECTED | already covered by BP-rp15-02 (corpus luteum cyst hemorrhage) |
| GAP-rp15-03 | REJECTED | covered by BP-rp14-01 (endometrioma, chocolate cyst); ultrasound echo pattern is imaging detail |
| GAP-rp15-04 | ADDED | BP-rp15-17 |
| GAP-rp15-05 | ADDED | BP-rp15-17 |
| GAP-rp15-06 | ADDED | BP-rp15-15 |
| GAP-rp15-07 | ADDED | BP-rp15-15 |
| GAP-rp15-08 | ADDED | BP-rp15-18 |
| GAP-rp15-09 | ADDED | BP-rp15-16 |
| GAP-rp15-10 | ADDED | BP-rp15-16 |
| GAP-rp15-11 | ADDED | BP-rp15-16 |
| GAP-rp15-12 | REJECTED | covered by BP-rp24-02 (BRCA homologous recombination repair) and BP-rp24-10 (PARP inhibitors in BRCA) |
| GAP-rp15-13 | REJECTED | already covered by BP-rp14-08 (Lynch mismatch repair: colon, endometrial, ovarian) |
| GAP-rp15-14 | REJECTED | covered by BP-rp15-04 (clear cell carcinoma with endometriosis); hobnail cells are detail |
| GAP-rp15-15 | REJECTED | synchronous ovarian and endometrial endometrioid tumors are below Step 1 emphasis |
| GAP-rp15-16 | REJECTED | already covered by BP-rp15-05 (teratoma, struma ovarii) and BP-en6-11 |
| GAP-rp15-17 | REJECTED | covered by BP-rp15-06 (dysgerminoma, fried-egg cells like seminoma); septal lymphocytes are detail |
| GAP-rp15-18 | REJECTED | already covered by BP-rp6-05 (gonadoblastoma in Y-containing streak gonads) and BP-rp15-06 |
| GAP-rp15-19 | REJECTED | covered by BP-rp15-07 (granulosa cell tumor, inhibin); FOXL2 is beyond Step 1 |
| GAP-rp15-20 | REJECTED | covered by BP-rp15-08 (Sertoli-Leydig) and BP-rp9-09 (ovarian vs adrenal androgen source); DICER1 is beyond Step 1 |
| GAP-rp15-21 | REJECTED | thecoma is named in BP-rp15-08 and estrogen-driven hyperplasia from an ovarian tumor is taught with granulosa cell tumor (BP-rp15-07, BP-rp14-06); estrogen output by thecomas is below Step 1 emphasis |
| GAP-rp15-22 | REJECTED | already covered by BP-rp15-14 (hydrosalpinx) |

## rp16
| GAP-rp16-01 | ADDED | BP-rp16-17 |
| GAP-rp16-02 | REJECTED | already covered by BP-rp16-11 (nongonococcal urethritis) |
| GAP-rp16-03 | ADDED | BP-rp16-13 |
| GAP-rp16-04 | ADDED | BP-rp16-17 |
| GAP-rp16-05 | ADDED | BP-rp16-14 |
| GAP-rp16-06 | REJECTED | covered by BP-rp16-01 (NAAT); culture for susceptibility is laboratory detail |
| GAP-rp16-07 | ADDED | BP-rp16-14 |
| GAP-rp16-08 | ADDED | BP-rp16-15 |
| GAP-rp16-09 | REJECTED | already covered by BP-rp18-12 (gonococcal days 2-5 vs chlamydial days 5-14) |
| GAP-rp16-10 | REJECTED | already covered by BP-rp20-03 (epididymitis from chlamydia or gonorrhea under 35) |
| GAP-rp16-11 | REJECTED | Mycoplasma genitalium as a cause of urethritis is BP-rp16-11; its missing cell wall (so beta-lactams fail) is general Mycoplasma microbiology taught with M. pneumoniae |
| GAP-rp16-12 | REJECTED | covered by BP-rp16-05 (darkfield microscopy for spirochetes) |
| GAP-rp16-13 | REJECTED | covered by BP-rp16-04 (tertiary syphilis); obliterative endarteritis is cardiovascular pathology |
| GAP-rp16-14 | REJECTED | covered by BP-rp16-04 (aortitis); aortic aneurysm from vasa vasorum endarteritis is cardiovascular material |
| GAP-rp16-15 | ADDED | BP-rp16-18 |
| GAP-rp16-16 | REJECTED | the prozone effect is laboratory detail below Step 1 emphasis |
| GAP-rp16-17 | REJECTED | CSF-VDRL sensitivity is neurology and laboratory detail below Step 1 emphasis |
| GAP-rp16-18 | REJECTED | already covered by BP-rp18-02 (congenital syphilis) |
| GAP-rp16-19 | REJECTED | already covered by BP-rp18-02 (Hutchinson teeth, CN VIII deafness) |
| GAP-rp16-20 | ADDED | BP-rp16-16 |
| GAP-rp16-21 | REJECTED | covered by BP-rp16-09 (tubo-ovarian abscess) and BP-rp15-14 (hydrosalpinx) |
| GAP-rp16-22 | REJECTED | ultrasound findings in PID are imaging detail beyond Step 1 |
| GAP-rp16-23 | REJECTED | the signs of PID are BP-rp16-09; diagnosing it clinically without fever or a positive NAAT is CDC management criteria beyond Step 1 emphasis |
| GAP-rp16-24 | REJECTED | already covered by BP-rp16-02 (LGV, serovars L1-L3) and BP-rp16-01 (doxycycline) |
| GAP-rp16-25 | REJECTED | treatment of chancroid and donovanosis is below Step 1 emphasis; the organisms are BP-rp16-06 and BP-rp16-07 |

## rp17
| GAP-rp17-01 | ADDED | BP-rp17-12 |
| GAP-rp17-02 | ADDED | BP-rp17-12 |
| GAP-rp17-03 | ADDED | BP-rp17-12 |
| GAP-rp17-04 | ADDED | BP-rp17-13 |
| GAP-rp17-05 | ADDED | BP-rp17-16 |
| GAP-rp17-06 | ADDED | BP-rp17-14 |
| GAP-rp17-07 | REJECTED | Nef downregulation of MHC I is below Step 1 emphasis; HIV immune evasion is BP-rp17-11 |
| GAP-rp17-08 | ADDED | BP-rp17-17 |
| GAP-rp17-09 | ADDED | BP-rp17-17 |
| GAP-rp17-10 | ADDED | BP-rp17-15 |
| GAP-rp17-11 | ADDED | BP-rp17-15 |
| GAP-rp17-12 | ADDED | BP-rp17-15 |
| GAP-rp17-13 | ADDED | BP-rp17-17 |
| GAP-rp17-14 | REJECTED | HSV latency is BP-rp17-07; which HSV type recurs more often in the genital tract is below Step 1 emphasis (both types cause genital herpes) |
| GAP-rp17-15 | REJECTED | latency with reactivation is BP-rp17-07 and the antivirals BP-rp17-08; transmission during asymptomatic shedding and suppressive therapy for couples are counseling detail below Step 1 emphasis |
| GAP-rp17-16 | REJECTED | HSV lesions and latency are BP-rp17-07; the clinical contrast between a severe primary episode and milder recurrences is below Step 1 emphasis |
| GAP-rp17-17 | ADDED | BP-rp18-14 |
| GAP-rp17-18 | REJECTED | type-specific HSV serology is laboratory detail beyond Step 1; PCR is BP-rp17-07 |
| GAP-rp17-19 | REJECTED | already covered by BP-rp17-08 (foscarnet for thymidine kinase-mutant HSV) |
| GAP-rp17-20 | REJECTED | already covered by BP-rp13-02 (E6 degrades p53, E7 inactivates Rb) |
| GAP-rp17-21 | REJECTED | viral integration and E2 disruption are below Step 1 emphasis; E6 and E7 are BP-rp13-02 |
| GAP-rp17-22 | REJECTED | already covered by BP-rp13-03 (koilocytes) and BP-rp12-09 |
| GAP-rp17-23 | REJECTED | already covered by BP-rp12-09 (condyloma acuminatum) and BP-rp16-04 (condylomata lata) |
| GAP-rp17-24 | REJECTED | already covered by BP-rp13-01 (transformation zone) |
| GAP-rp17-25 | REJECTED | test selection for warts vs precancer is clinical detail; screening is BP-rp13-05 |
| GAP-rp17-26 | REJECTED | covered by BP-rp13-05 (more frequent screening in HIV) and BP-rp13-07 (anal cancer screening in HIV) |
| GAP-rp17-27 | REJECTED | already covered by BP-rp13-07 (9-valent recombinant L1 VLP vaccine) |
| GAP-rp17-28 | REJECTED | covered by BP-rp17-09 (podofilox); pregnancy avoidance is label detail |
| GAP-rp17-29 | REJECTED | skin-contact spread beyond condom coverage is counseling detail below Step 1 emphasis |
| GAP-rp17-30 | REJECTED | covered by BP-rp17-10 (molluscum poxvirus); cytoplasmic replication of poxviruses is microbiology |
| GAP-rp17-31 | REJECTED | molluscum natural history and removal methods are clinical detail below Step 1 emphasis |

## rp18
| GAP-rp18-01 | REJECTED | covered by BP-rp18-01 (congenital toxoplasmosis); timing versus severity is detail |
| GAP-rp18-02 | REJECTED | spiramycin and fetal treatment regimens are management detail beyond Step 1 |
| GAP-rp18-03 | ADDED | BP-rp18-16 |
| GAP-rp18-04 | ADDED | BP-rp18-16 |
| GAP-rp18-05 | ADDED | BP-rp16-16 |
| GAP-rp18-06 | REJECTED | infant-to-maternal titer ratio is diagnostic detail beyond Step 1 |
| GAP-rp18-07 | REJECTED | covered by BP-rp18-03 (congenital rubella) and BP-rp4-03 (organogenesis is the sensitive period) |
| GAP-rp18-08 | REJECTED | the discriminating congenital CMV features are BP-rp18-04 (sensorineural hearing loss, periventricular calcifications); petechiae, thrombocytopenia and hepatosplenomegaly are shared by several TORCH infections and do not discriminate |
| GAP-rp18-09 | REJECTED | timing rules for confirming congenital CMV by PCR are diagnostic detail beyond Step 1 |
| GAP-rp18-10 | REJECTED | ganciclovir pharmacology is taught with CMV in microbiology; congenital CMV is BP-rp18-04 |
| GAP-rp18-11 | ADDED | BP-rp18-14 |
| GAP-rp18-12 | ADDED | BP-rp18-14 |
| GAP-rp18-13 | REJECTED | fetal parvovirus disease is BP-rp18-06; the maternal slapped-cheek or lacy rash and arthralgia are erythema infectiosum, taught with the viral exanthems in microbiology |
| GAP-rp18-14 | REJECTED | the peripartum varicella window is clinical detail; congenital varicella and VZIG are BP-rp18-07 |
| GAP-rp18-15 | ADDED | BP-rp18-15 |
| GAP-rp18-16 | ADDED | BP-rp18-15 |
| GAP-rp18-17 | REJECTED | covered by BP-rp18-09 (GBS screening and intrapartum prophylaxis); extra indications are guideline detail |
| GAP-rp18-18 | REJECTED | covered by BP-rp18-09 (prophylaxis prevents early-onset disease) |
| GAP-rp18-19 | REJECTED | covered by BP-rp18-10 (hepatitis B screening); HBeAg serology is GI-system hepatitis material |
| GAP-rp18-20 | REJECTED | newborn HBIG plus vaccine is BP-rp18-10; the high chronicity of perinatally acquired HBV is hepatitis B natural history taught in GI and microbiology |
| GAP-rp18-21 | REJECTED | covered by BP-rp18-10 (hepatitis C vertical transmission); absence of prophylaxis is detail |
| GAP-rp18-22 | REJECTED | already covered by BP-rp17-05 (maternal ART, infant prophylaxis) |
| GAP-rp18-23 | ADDED | BP-rp17-13 |
| GAP-rp18-24 | REJECTED | already covered by BP-rp17-05 (perinatal HIV, avoid breastfeeding in the US) |
| GAP-rp18-25 | REJECTED | covered by BP-rp18-11 (Zika microcephaly and ocular findings); neuroimaging pattern is detail |
| GAP-rp18-26 | REJECTED | congenital Zika is BP-rp18-11; Aedes mosquito and sexual transmission are arbovirus microbiology |
| GAP-rp18-27 | REJECTED | covered by BP-rp16-03 (erythromycin prophylaxis) and BP-rp18-12 (gonococcal vs chlamydial conjunctivitis) |
| GAP-rp18-28 | REJECTED | covered by BP-rp18-12 (gonococcal ophthalmia) and BP-rp16-03 (gram-negative diplococci) |
| GAP-rp18-29 | REJECTED | already covered by BP-rp16-01 (afebrile staccato pneumonia) |
| GAP-rp18-30 | REJECTED | covered by BP-rp18-12 (chlamydial conjunctivitis); systemic treatment choice is management detail |
| GAP-rp18-31 | REJECTED | respiratory-system material (laryngeal papillomatosis); HPV 6/11 is BP-rp17-09 |
| GAP-rp18-32 | ADDED | BP-rp18-15 |
| GAP-rp18-33 | ADDED | BP-rp27-21 |

## rp19
| GAP-rp19-01 | ADDED | BP-rp8-12 |
| GAP-rp19-02 | REJECTED | covered by BP-rp19-03 (epididymal maturation) and BP-rp4-13 (capacitation, acrosome reaction) |
| GAP-rp19-03 | REJECTED | already covered by BP-rp19-01 (blood-testis barrier via Sertoli tight junctions) |
| GAP-rp19-04 | REJECTED | already covered by BP-rp19-05 (testosterone and inhibin feedback) and BP-rp8-08 |
| GAP-rp19-05 | ADDED | BP-en2-11 |
| GAP-rp19-06 | REJECTED | already covered by BP-rp22-02 (exogenous testosterone suppresses LH/FSH, atrophy, azoospermia) |
| GAP-rp19-07 | REJECTED | already covered by BP-rp22-01 (primary vs secondary hypogonadism) |
| GAP-rp19-08 | REJECTED | covered by BP-rp19-05 (inhibin feeds back on FSH) and BP-rp22-03 (non-obstructive azoospermia with high FSH) |
| GAP-rp19-09 | REJECTED | already covered by BP-rp6-08 (Kallmann syndrome) |
| GAP-rp19-10 | REJECTED | already covered by BP-en2-05 (prolactin inhibits GnRH) and BP-rp22-01 |
| GAP-rp19-11 | REJECTED | already covered by BP-rp6-07 (Klinefelter syndrome) |
| GAP-rp19-12 | REJECTED | beyond Step 1: Y-chromosome AZF microdeletions |
| GAP-rp19-13 | REJECTED | already covered by BP-rp22-03 (CBAVD with CFTR mutations) |
| GAP-rp19-14 | REJECTED | already covered by BP-rp22-03 (obstructive normal FSH vs non-obstructive high FSH) |
| GAP-rp19-15 | ADDED | BP-rp22-10 |
| GAP-rp19-16 | REJECTED | covered by BP-rp10-09 (sterilization); preserved testosterone after vasectomy follows from BP-rp19-01 |
| GAP-rp19-17 | REJECTED | already covered by BP-rp20-01 (cryptorchidism) and BP-rp19-08 (temperature) |
| GAP-rp19-18 | REJECTED | already covered by BP-rp20-06 (varicocele) |
| GAP-rp19-19 | REJECTED | already covered by BP-rp1-07 (left gonadal vein to left renal vein, right to IVC) |
| GAP-rp19-20 | REJECTED | already covered by BP-rp2-05 (testis to para-aortic, scrotum to superficial inguinal) |
| GAP-rp19-21 | REJECTED | already covered by BP-rp20-02 (testicular torsion) |
| GAP-rp19-22 | REJECTED | covered by BP-rp20-02 (absent cremasteric reflex) and BP-rp5-12 (genitofemoral branch in the cord); reflex segments are neuro |
| GAP-rp19-23 | REJECTED | already covered by BP-rp20-05 (communicating hydrocele, transillumination) |
| GAP-rp19-24 | REJECTED | already covered by BP-rp2-04 (emission sympathetic, ejaculation pudendal) |
| GAP-rp19-25 | REJECTED | covered by BP-rp2-08 (corpora cavernosa vs corpus spongiosum) and BP-rp19-07 (erection mechanism) |
| GAP-rp19-26 | REJECTED | already covered by BP-rp22-05 (PDE5 inhibitors and nitrates) |
| GAP-rp19-27 | REJECTED | already covered by BP-rp6-02 (5-alpha-reductase deficiency) |
| GAP-rp19-28 | REJECTED | already covered by BP-rp6-01 (complete androgen insensitivity) |
| GAP-rp19-29 | REJECTED | already covered by BP-rp5-01 (SRY, AMH, Leydig testosterone) |
| GAP-rp19-30 | ADDED | BP-rp21-15 |
| GAP-rp19-31 | REJECTED | covered by BP-rp19-03 (duct system histology); efferent ductule vs vas detail is below Step 1 emphasis |
| GAP-rp19-32 | ADDED | BP-rp21-14 |

## rp20
| GAP-rp20-01 | REJECTED | already covered by BP-rp5-06 (gubernaculum, processus vaginalis to tunica vaginalis) |
| GAP-rp20-02 | ADDED | BP-rp5-12 |
| GAP-rp20-03 | REJECTED | beyond Step 1: INSL3 in testicular descent |
| GAP-rp20-04 | REJECTED | covered by BP-rp20-01 (cryptorchidism and infertility); its tubular histology is detail |
| GAP-rp20-05 | REJECTED | GI-system anatomy (indirect inguinal hernia); the processus vaginalis is BP-rp5-06 and BP-rp20-05 |
| GAP-rp20-06 | ADDED | BP-rp20-12 |
| GAP-rp20-07 | ADDED | BP-rp20-12 |
| GAP-rp20-08 | REJECTED | torsion of the appendix testis is below Step 1 emphasis; testicular torsion is BP-rp20-02 |
| GAP-rp20-09 | REJECTED | tuberculous epididymitis is below Step 1 emphasis; epididymitis is BP-rp20-03 |
| GAP-rp20-10 | REJECTED | already covered by BP-rp20-07 (hematocele) |
| GAP-rp20-11 | REJECTED | already covered by BP-rp20-07 (testicular rupture after trauma) |
| GAP-rp20-12 | ADDED | BP-rp20-13 |
| GAP-rp20-13 | REJECTED | cryptorchidism (BP-rp20-01) and dysgenetic gonads (BP-rp6-05) are the tested germ cell tumor risks; a prior contralateral tumor, family history and infertility are secondary risks below Step 1 emphasis |
| GAP-rp20-14 | REJECTED | covered by BP-rp20-08 (seminoma fried-egg cells); septal lymphocytes are histology detail |
| GAP-rp20-15 | ADDED | BP-rp20-11 |
| GAP-rp20-16 | REJECTED | already covered by BP-rp20-08 (embryonal carcinoma) |
| GAP-rp20-17 | REJECTED | covered by BP-rp20-08 (yolk sac tumor, Schiller-Duval bodies); hyaline globules are detail |
| GAP-rp20-18 | REJECTED | already covered by BP-rp20-08 (choriocarcinoma, hematogenous spread) and BP-rp26-09 |
| GAP-rp20-19 | REJECTED | already covered by BP-rp20-08 (teratoma, malignant potential in adult males) |
| GAP-rp20-20 | REJECTED | spermatocytic tumor is below Step 1 emphasis |
| GAP-rp20-21 | REJECTED | already covered by BP-rp20-09 (Sertoli cell tumor) |
| GAP-rp20-22 | REJECTED | already covered by BP-rp6-05 (gonadoblastoma) |
| GAP-rp20-23 | REJECTED | already covered by BP-rp2-05 (scrotum to superficial inguinal, testis to para-aortic) |
| GAP-rp20-24 | REJECTED | chemotherapy toxicities (bleomycin, etoposide, cisplatin) are hematology-oncology pharmacology |

## rp21
| GAP-rp21-01 | ADDED | BP-rp21-14 |
| GAP-rp21-02 | ADDED | BP-rp21-15 |
| GAP-rp21-03 | ADDED | BP-rp21-15 |
| GAP-rp21-04 | ADDED | BP-rp21-16 |
| GAP-rp21-05 | ADDED | BP-rp21-16 |
| GAP-rp21-06 | REJECTED | covered by BP-rp21-04 (peripheral zone cancer palpable on DRE) and BP-rp21-01 |
| GAP-rp21-07 | REJECTED | the absent basal cell layer that marks prostate carcinoma is BP-rp21-05; high-grade PIN as a precursor with retained basal cells is below Step 1 emphasis |
| GAP-rp21-08 | REJECTED | beyond Step 1: TMPRSS2-ERG fusion |
| GAP-rp21-09 | REJECTED | immunostains for prostatic origin are pathology detail beyond Step 1 |
| GAP-rp21-10 | ADDED | BP-en2-11 |
| GAP-rp21-11 | ADDED | BP-rp21-17 |
| GAP-rp21-12 | ADDED | BP-rp21-17 |
| GAP-rp21-13 | REJECTED | already covered by BP-rp21-03 (chronic pelvic pain syndrome) |
| GAP-rp21-14 | REJECTED | already covered by BP-rp5-09 (hypospadias) |
| GAP-rp21-15 | REJECTED | already covered by BP-rp5-09 (epispadias, bladder exstrophy) |
| GAP-rp21-16 | REJECTED | already covered by BP-rp12-09 (condyloma, HPV 6/11, koilocytes) |
| GAP-rp21-17 | REJECTED | already covered by BP-rp13-02 (E6 and E7) and BP-rp21-12 (HPV 16/18 penile SCC) |
| GAP-rp21-18 | REJECTED | already covered by BP-rp21-12 (Bowen disease, erythroplasia of Queyrat, bowenoid papulosis) |
| GAP-rp21-19 | REJECTED | penile SCC is BP-rp21-12; keratin pearls and basement-membrane invasion are general squamous carcinoma histology from general pathology |
| GAP-rp21-20 | REJECTED | covered by BP-rp21-12 (penile SCC) and BP-rp2-05 (inguinal node drainage) |
| GAP-rp21-21 | REJECTED | HPV-independent penile carcinoma is below Step 1 emphasis |
| GAP-rp21-22 | REJECTED | covered by BP-rp21-09 (balanitis) and BP-rp12-04 (Candida risk with diabetes) |
| GAP-rp21-23 | REJECTED | already covered by BP-rp16-08 (painful vs painless genital ulcers) |
| GAP-rp21-24 | REJECTED | already covered by BP-rp16-06 (chancroid) |
| GAP-rp21-25 | ADDED | BP-rp16-17 |
| GAP-rp21-26 | REJECTED | already covered by BP-rp2-04 (point, squeeze, shoot) |
| GAP-rp21-27 | REJECTED | already covered by BP-rp19-07 (nitric oxide, cGMP) and BP-rp22-05 |
| GAP-rp21-28 | REJECTED | already covered by BP-rp22-05 (nitrates contraindicated) |
| GAP-rp21-29 | REJECTED | already covered by BP-rp22-05 (blue-green vision, headache, flushing) |
| GAP-rp21-30 | REJECTED | already covered by BP-rp22-04 (psychogenic ED preserves nocturnal erections) |
| GAP-rp21-31 | REJECTED | already covered by BP-rp22-06 (SSRIs for premature ejaculation) |
| GAP-rp21-32 | ADDED | BP-rp21-18 |
| GAP-rp21-33 | REJECTED | already covered by BP-rp21-13 (penile fracture, urethral injury) |
| GAP-rp21-34 | ADDED | BP-rp21-19 |

## rp22
| GAP-rp22-01 | REJECTED | already covered by BP-rp19-05 (LH to Leydig, FSH to Sertoli, inhibin feedback) |
| GAP-rp22-02 | REJECTED | covered by BP-rp19-05 (inhibin and FSH) and BP-rp22-03 (non-obstructive azoospermia with high FSH) |
| GAP-rp22-03 | REJECTED | repeat morning testosterone testing is clinical detail; SHBG effects are BP-en1-06 |
| GAP-rp22-04 | REJECTED | already covered by BP-rp6-08 (Kallmann syndrome) |
| GAP-rp22-05 | REJECTED | already covered by BP-rp6-07 (Klinefelter syndrome) |
| GAP-rp22-06 | REJECTED | already covered by BP-en2-05 and BP-en3-02 (dopamine agonists for prolactinoma) |
| GAP-rp22-07 | REJECTED | covered by BP-rp22-08 (testosterone therapy is contraindicated when fertility is desired); gonadotropin regimens are management |
| GAP-rp22-08 | REJECTED | beyond Step 1: Y-chromosome AZF microdeletions |
| GAP-rp22-09 | ADDED | BP-rp22-10 |
| GAP-rp22-10 | REJECTED | already covered by BP-rp20-06 (varicocele) and BP-rp19-08 (pampiniform cooling) |
| GAP-rp22-11 | ADDED | BP-rp22-10 |
| GAP-rp22-12 | REJECTED | sulfasalazine effects on sperm are below Step 1 emphasis |
| GAP-rp22-13 | REJECTED | already covered by BP-rp2-04 and BP-rp19-07 (erection and emission pathways) |
| GAP-rp22-14 | REJECTED | covered by BP-rp22-05 (PDE5 inhibitors raise cGMP); the need for stimulation follows from nitric oxide release |
| GAP-rp22-15 | ADDED | BP-rp22-11 |
| GAP-rp22-16 | REJECTED | covered by BP-rp22-04 (vascular and neurogenic ED) and BP-en15-06 (diabetic autonomic neuropathy) |
| GAP-rp22-17 | REJECTED | SSRIs for premature ejaculation are BP-rp22-06; their sexual adverse effects (low libido, erectile dysfunction, anorgasmia) are psychiatric pharmacology |
| GAP-rp22-18 | REJECTED | already covered by BP-rp21-10 (Peyronie disease) |
| GAP-rp22-19 | REJECTED | covered by BP-rp22-09 and BP-rp23-10 (gynecomastia causes and estrogen:androgen imbalance) |
| GAP-rp22-20 | ADDED | BP-rp21-15 |
| GAP-rp22-21 | REJECTED | already covered by BP-rp6-02 (5-alpha-reductase deficiency) |
| GAP-rp22-22 | REJECTED | already covered by BP-rp6-01 (androgen insensitivity) |
| GAP-rp22-23 | ADDED | BP-rp21-15 |
| GAP-rp22-24 | ADDED | BP-en2-11 |
| GAP-rp22-25 | REJECTED | already covered by BP-rp21-08 (degarelix; agonist flare needs an antiandrogen) |
| GAP-rp22-26 | ADDED | BP-rp21-17 |
| GAP-rp22-27 | ADDED | BP-rp21-17 |
| GAP-rp22-28 | REJECTED | the antiandrogens are BP-rp22-07 and ketoconazole's block of adrenal steroid synthesis is BP-en12-15; flutamide hepatotoxicity is a label warning below Step 1 emphasis |
| GAP-rp22-29 | REJECTED | GI-system liver pathology (peliosis, adenoma); anabolic steroid effects are BP-rp22-02 |

## rp23
| GAP-rp23-01 | ADDED | BP-rp23-11 |
| GAP-rp23-02 | REJECTED | already covered by BP-rp23-02 (cysts, apocrine metaplasia) |
| GAP-rp23-03 | REJECTED | already covered by BP-rp23-02 (sclerosing adenosis) and BP-rp3-02 (myoepithelium) |
| GAP-rp23-04 | REJECTED | radial scar is below Step 1 emphasis |
| GAP-rp23-05 | REJECTED | usual vs atypical ductal hyperplasia and their cancer risks are BP-rp23-02; the histologic features that separate them (slitlike vs rigid secondary spaces) are below Step 1 emphasis |
| GAP-rp23-06 | REJECTED | already covered by BP-rp23-04 (intraductal papilloma) |
| GAP-rp23-07 | REJECTED | covered by BP-rp23-03 (phyllodes can be malignant and recur); spread route is detail |
| GAP-rp23-08 | REJECTED | already covered by BP-rp23-05 (fat necrosis) |
| GAP-rp23-09 | REJECTED | already covered by BP-rp23-06 (duct ectasia) |
| GAP-rp23-10 | REJECTED | already covered by BP-rp23-06 (periductal mastitis, squamous metaplasia, subareolar abscess) |
| GAP-rp23-11 | REJECTED | galactocele is below Step 1 emphasis |
| GAP-rp23-12 | REJECTED | covered by BP-rp24-01 (family history, atypia as risk factors) and BP-rp23-02 |
| GAP-rp23-13 | ADDED | BP-rp23-12 |
| GAP-rp23-14 | REJECTED | already covered by BP-rp22-09 (drug causes of gynecomastia) |
| GAP-rp23-15 | REJECTED | already covered by BP-rp22-09 (Klinefelter, cirrhosis, testicular tumors, hyperthyroidism) |
| GAP-rp23-16 | REJECTED | pseudogynecomastia is clinical detail below Step 1 emphasis |
| GAP-rp23-17 | ADDED | BP-rp23-12 |
| GAP-rp23-18 | REJECTED | already covered by BP-rp23-09 (implant-associated anaplastic large cell lymphoma) |

## rp24
| GAP-rp24-01 | ADDED | BP-rp24-15 |
| GAP-rp24-02 | REJECTED | already covered by BP-rp23-02 (nonproliferative, proliferative, atypical risk tiers) |
| GAP-rp24-03 | REJECTED | ADH as a precursor on the path to DCIS is BP-rp24-12 and its risk BP-rp23-02; the extent criterion separating ADH from low-grade DCIS is pathology detail below Step 1 emphasis |
| GAP-rp24-04 | REJECTED | covered by BP-rp24-02 (BRCA tumor suppressors); the two-hit mechanism is taught in genetics |
| GAP-rp24-05 | REJECTED | already covered by BP-rp15-03 and BP-rp15-10 (BRCA ovarian cancer) |
| GAP-rp24-06 | REJECTED | already covered by BP-rp3-02 (loss of myoepithelium marks invasion) |
| GAP-rp24-07 | REJECTED | already covered by BP-rp24-03 (DCIS vs LCIS) |
| GAP-rp24-08 | REJECTED | already covered by BP-rp24-03 (LCIS, E-cadherin loss, incidental) |
| GAP-rp24-09 | REJECTED | receptor profiles of in situ lesions are below Step 1 emphasis |
| GAP-rp24-10 | REJECTED | already covered by BP-rp3-03 (Cooper ligament retraction) and BP-rp24-04 (firm stellate mass) |
| GAP-rp24-11 | REJECTED | already covered by BP-rp24-04 (invasive lobular single-file cells) |
| GAP-rp24-12 | REJECTED | unusual metastatic sites of lobular carcinoma are below Step 1 emphasis |
| GAP-rp24-13 | REJECTED | medullary carcinoma is BP-rp24-05; its relatively favorable prognosis despite high-grade cells is a minor feature below Step 1 emphasis |
| GAP-rp24-14 | REJECTED | already covered by BP-rp24-05 (mucinous carcinoma) |
| GAP-rp24-15 | REJECTED | already covered by BP-rp24-05 (tubular carcinoma) |
| GAP-rp24-16 | REJECTED | already covered by BP-rp24-05 (metaplastic carcinoma) |
| GAP-rp24-17 | REJECTED | covered by BP-rp24-11 (male breast cancer usually ductal); lobule absence is detail |
| GAP-rp24-18 | REJECTED | Nottingham grading components are pathology detail beyond Step 1 |
| GAP-rp24-19 | REJECTED | covered by BP-rp24-07 (receptor classes) and BP-rp24-10 (endocrine therapy) |
| GAP-rp24-20 | REJECTED | already covered by BP-rp24-07 (triple-negative) |
| GAP-rp24-21 | REJECTED | HER2 as an amplified receptor tyrosine kinase and pertuzumab are BP-rp24-09; the dimerization and downstream PI3K/MAPK signaling details are below Step 1 emphasis |
| GAP-rp24-22 | REJECTED | HER2 immunohistochemistry vs in situ hybridization is laboratory detail beyond Step 1 |
| GAP-rp24-23 | REJECTED | already covered by BP-rp24-10 (tamoxifen SERM, endometrial risk) and BP-rp14-13 |
| GAP-rp24-24 | REJECTED | already covered by BP-rp24-10 (aromatase inhibitors for postmenopausal patients) and BP-rp8-04 (postmenopausal estrogen is estrone from peripheral aromatization) |
| GAP-rp24-25 | REJECTED | CDK4/6 inhibitors are BP-rp24-10; their mechanism rests on Rb phosphorylation at the G1/S checkpoint, which is cell-cycle biology taught in biochemistry and general pathology |
| GAP-rp24-26 | REJECTED | covered by BP-rp24-10 (PARP inhibitors in BRCA) and BP-rp24-02 (homologous recombination) |
| GAP-rp24-27 | REJECTED | covered by BP-en9-06 (osteolytic breast metastases, hypercalcemia) and BP-rp24-13 (bone spread) |

## rp25
| GAP-rp25-01 | REJECTED | already covered by BP-rp4-07 (hCG maintains the corpus luteum) and BP-rp4-01 (syncytiotrophoblast) |
| GAP-rp25-02 | ADDED | BP-en2-12 |
| GAP-rp25-03 | REJECTED | already covered by BP-rp4-07 (placenta takes over progesterone at 8-10 weeks) |
| GAP-rp25-04 | REJECTED | covered by BP-rp4-07 (progesterone) and BP-rp28-01 (falling progesterone effect at labor onset) |
| GAP-rp25-05 | REJECTED | already covered by BP-rp4-07 (estriol needs fetal adrenal DHEA-S) |
| GAP-rp25-06 | REJECTED | already covered by BP-rp3-08 (estrogen grows ducts, progesterone lobules) |
| GAP-rp25-07 | REJECTED | already covered by BP-rp28-11 (estrogen and progesterone block lactation until delivery) |
| GAP-rp25-08 | REJECTED | already covered by BP-rp4-07 (hPL insulin resistance, lipolysis) |
| GAP-rp25-09 | REJECTED | pregnancy insulin resistance is BP-rp25-06 and gestational diabetes BP-rp27-04; beta-cell compensation and the slightly lower fasting glucose of normal pregnancy are below Step 1 emphasis |
| GAP-rp25-10 | REJECTED | already covered by BP-en5-09 (hCG lowers first-trimester TSH) |
| GAP-rp25-11 | REJECTED | already covered by BP-en5-08 (TBG raises total T4, free T4 normal) |
| GAP-rp25-12 | REJECTED | already covered by BP-en2-09 (lactotroph hyperplasia, Sheehan) |
| GAP-rp25-13 | ADDED | BP-rp25-10 |
| GAP-rp25-14 | REJECTED | covered by BP-rp25-01 (cardiac output rise); flow murmur is cardiovascular exam detail |
| GAP-rp25-15 | REJECTED | covered by BP-rp25-02 (hypercoagulable state) and BP-rp25-01 (IVC compression) |
| GAP-rp25-16 | REJECTED | gestational thrombocytopenia is hematology detail below Step 1 emphasis |
| GAP-rp25-17 | REJECTED | covered by BP-rp25-02 (dilutional anemia); iron deficiency is hematology |
| GAP-rp25-18 | REJECTED | already covered by BP-rp25-03 (higher tidal volume drives ventilation) |
| GAP-rp25-19 | REJECTED | covered by BP-rp25-04 (GFR up, creatinine down) |
| GAP-rp25-20 | ADDED | BP-rp25-09 |
| GAP-rp25-21 | REJECTED | already covered by BP-rp25-05 (gallstones in pregnancy) |

## rp26
| GAP-rp26-01 | REJECTED | already covered by BP-rp4-05 (gestational age) and BP-rp30-01 (crown-rump length dating) |
| GAP-rp26-02 | REJECTED | covered by BP-rp26-01 (gestational sac, yolk sac, fetal pole); week-by-week timing is detail |
| GAP-rp26-03 | REJECTED | ultrasound cutoffs for nonviable pregnancy are guideline detail beyond Step 1 |
| GAP-rp26-04 | REJECTED | already covered by BP-rp26-02 (serial hCG, discriminatory zone) and BP-rp26-11 (unknown location) |
| GAP-rp26-05 | REJECTED | covered by BP-rp26-03 (PID and tubal surgery as ectopic risks) and BP-rp8-09 (cilia move the oocyte) |
| GAP-rp26-06 | REJECTED | ultrasound signs of ectopic pregnancy are imaging detail beyond Step 1 |
| GAP-rp26-07 | REJECTED | pseudogestational sac is imaging detail beyond Step 1 |
| GAP-rp26-08 | REJECTED | heterotopic pregnancy is below Step 1 emphasis |
| GAP-rp26-09 | REJECTED | rupture with hemoperitoneum is BP-rp26-03; shoulder-tip pain referred from diaphragmatic irritation (phrenic nerve, C3-C5) is thoracic and neuro anatomy |
| GAP-rp26-10 | REJECTED | a nonviable closed-os pregnancy (missed abortion) is BP-rp26-04; the anembryonic-gestation subtype is ultrasound detail below Step 1 emphasis |
| GAP-rp26-11 | REJECTED | already covered by BP-rp26-04 (incomplete vs complete abortion) |
| GAP-rp26-12 | REJECTED | covered by BP-rp14-10 (acute endometritis with retained products); septic abortion management is beyond Step 1 |
| GAP-rp26-13 | REJECTED | management options for pregnancy loss are beyond Step 1 |
| GAP-rp26-14 | REJECTED | covered by BP-rp26-04 (most first-trimester losses are chromosomal); the specific trisomy is detail |
| GAP-rp26-15 | ADDED | BP-rp26-12 |
| GAP-rp26-16 | REJECTED | complete vs partial mole (karyotype, fetal parts, hCG level, p57) is BP-rp26-06 and BP-rp26-07; diffuse vs focal hydropic villous histology is below Step 1 emphasis |
| GAP-rp26-17 | ADDED | BP-en2-12 |
| GAP-rp26-18 | ADDED | BP-rp26-12 |
| GAP-rp26-19 | REJECTED | already covered by BP-rp26-09 (invasive mole, choriocarcinoma without villi) |
| GAP-rp26-20 | ADDED | BP-rp26-12 |
| GAP-rp26-21 | REJECTED | already covered by BP-rp26-09 (placental site trophoblastic tumor, hPL) |

## rp27
| GAP-rp27-01 | ADDED | BP-rp27-13 |
| GAP-rp27-02 | ADDED | BP-rp27-13 |
| GAP-rp27-03 | ADDED | BP-rp27-14 |
| GAP-rp27-04 | REJECTED | covered by BP-rp27-02 (endothelial dysfunction); glomerular endotheliosis is renal histology detail |
| GAP-rp27-05 | REJECTED | covered by BP-rp27-01 (HELLP: hemolysis, elevated liver enzymes, low platelets) |
| GAP-rp27-06 | REJECTED | postpartum pre-eclampsia is clinical detail below Step 1 emphasis |
| GAP-rp27-07 | ADDED | BP-rp27-19 |
| GAP-rp27-08 | ADDED | BP-rp27-19 |
| GAP-rp27-09 | ADDED | BP-rp27-15 |
| GAP-rp27-10 | ADDED | BP-rp27-15 |
| GAP-rp27-11 | REJECTED | already covered by BP-rp27-05 (pregestational diabetes defects) and BP-rp4-03 (organogenesis) |
| GAP-rp27-12 | REJECTED | diabetic vasculopathy causing growth restriction is below Step 1 emphasis |
| GAP-rp27-13 | REJECTED | placenta previa and the no-digital-exam rule are BP-rp27-06; confirming placental position by ultrasound is clinical work-up beyond Step 1 emphasis |
| GAP-rp27-14 | REJECTED | already covered by BP-rp27-06 (accreta, increta, percreta) |
| GAP-rp27-15 | REJECTED | ultrasound signs of accreta are imaging detail beyond Step 1 |
| GAP-rp27-16 | ADDED | BP-rp27-20 |
| GAP-rp27-17 | REJECTED | covered by BP-rp27-06 (vasa previa); velamentous insertion is detail |
| GAP-rp27-18 | ADDED | BP-rp27-16 |
| GAP-rp27-19 | REJECTED | covered by BP-rp27-07 (anti-D prophylaxis prevents sensitization) |
| GAP-rp27-20 | REJECTED | fetal middle cerebral artery Doppler is obstetric imaging detail beyond Step 1 |
| GAP-rp27-21 | ADDED | BP-rp27-16 |
| GAP-rp27-22 | REJECTED | covered by BP-rp27-08 (preterm labor) and BP-rp30-01 (preterm under 37 weeks) |
| GAP-rp27-23 | REJECTED | cervical length and fetal fibronectin are obstetric testing detail beyond Step 1 |
| GAP-rp27-24 | REJECTED | covered by BP-rp27-08 (terbutaline); beta-2 agonist adverse effects are autonomic pharmacology |
| GAP-rp27-25 | REJECTED | bedside tests for membrane rupture are clinical procedure detail; rupture of membranes is BP-rp27-09 |
| GAP-rp27-26 | REJECTED | latency antibiotics after preterm rupture are management detail; PROM is BP-rp27-09 |
| GAP-rp27-27 | ADDED | BP-rp27-21 |
| GAP-rp27-28 | ADDED | BP-rp27-17 |
| GAP-rp27-29 | REJECTED | umbilical artery Doppler is obstetric imaging detail beyond Step 1 |
| GAP-rp27-30 | REJECTED | already covered by BP-rp4-11 (oligohydramnios, Potter sequence) |
| GAP-rp27-31 | REJECTED | already covered by BP-rp4-11 (polyhydramnios with atresias and anencephaly) |
| GAP-rp27-32 | REJECTED | already covered by BP-rp28-05 (non-stress test) and BP-rp28-14 |
| GAP-rp27-33 | REJECTED | already covered by BP-rp28-05 (biophysical profile) |
| GAP-rp27-34 | REJECTED | already covered by BP-rp30-07 (fundal height tracks gestational age) |
| GAP-rp27-35 | REJECTED | already covered by BP-rp27-11 (PUPPP vs pemphigoid gestationis) |
| GAP-rp27-36 | REJECTED | pemphigoid gestationis immunofluorescence is dermatology detail beyond Step 1 |
| GAP-rp27-37 | REJECTED | already covered by BP-rp27-11 (intrahepatic cholestasis: itching palms and soles, bile acids) |
| GAP-rp27-38 | REJECTED | acute fatty liver of pregnancy is named in BP-rp27-11 and HELLP is BP-rp27-01; the microvesicular steatosis, hypoglycemia and coagulopathy that separate them are GI liver pathology |
| GAP-rp27-39 | REJECTED | fetal LCHAD deficiency behind acute fatty liver is below Step 1 emphasis |
| GAP-rp27-40 | REJECTED | covered by BP-rp30-01 (post-term at 42 weeks or more); surveillance is management |
| GAP-rp27-41 | REJECTED | uterine rupture during trial of labor is obstetric emergency detail beyond Step 1 |
| GAP-rp27-42 | ADDED | BP-rp27-18 |

## rp28
| GAP-rp28-01 | REJECTED | covered by BP-rp28-02 (labor defined by cervical change through its stages); Braxton Hicks contractions are detail |
| GAP-rp28-02 | REJECTED | already covered by BP-rp28-04 (Bishop score) and BP-rp2-03 (ischial spine landmark) |
| GAP-rp28-03 | REJECTED | covered by BP-rp28-02 (latent and active phases, arrest disorders) |
| GAP-rp28-04 | REJECTED | cephalopelvic disproportion and occiput-posterior arrest are obstetric detail beyond Step 1 |
| GAP-rp28-05 | REJECTED | fetal monitoring equipment is procedural detail beyond Step 1 |
| GAP-rp28-06 | REJECTED | already covered by BP-rp28-05 (non-stress test) |
| GAP-rp28-07 | REJECTED | already covered by BP-rp28-05 (biophysical profile) |
| GAP-rp28-08 | ADDED | BP-rp28-14 |
| GAP-rp28-09 | ADDED | BP-rp28-14 |
| GAP-rp28-10 | ADDED | BP-rp28-15 |
| GAP-rp28-11 | ADDED | BP-rp28-15 |
| GAP-rp28-12 | REJECTED | misoprostol with a prior cesarean scar is obstetric management detail |
| GAP-rp28-13 | REJECTED | bedside tests for membrane rupture are clinical procedure detail; rupture of membranes is BP-rp27-09 |
| GAP-rp28-14 | ADDED | BP-rp27-21 |
| GAP-rp28-15 | REJECTED | already covered by BP-rp18-09 (GBS intrapartum prophylaxis) |
| GAP-rp28-16 | REJECTED | umbilical cord prolapse is obstetric emergency detail beyond Step 1 |
| GAP-rp28-17 | REJECTED | uterine rupture during labor is obstetric emergency detail beyond Step 1 |
| GAP-rp28-18 | REJECTED | shoulder dystocia maneuvers are management; the dystocia and its plexus injuries are BP-rp28-08 |
| GAP-rp28-19 | REJECTED | already covered by BP-rp28-10 (uterine atony most common, 4 Ts) |
| GAP-rp28-20 | REJECTED | covered by BP-rp28-10 (4 Ts: trauma is one of them) |
| GAP-rp28-21 | REJECTED | DIC is hematology material; obstetric DIC causes are in BP-rp27-06 and BP-rp27-18 |
| GAP-rp28-22 | REJECTED | already covered by BP-rp27-06 (placenta accreta) |
| GAP-rp28-23 | REJECTED | uterine inversion is obstetric emergency detail beyond Step 1 |
| GAP-rp28-24 | ADDED | BP-rp27-18 |
| GAP-rp28-25 | REJECTED | post-dural-puncture headache is anesthesia detail beyond Step 1 |
| GAP-rp28-26 | REJECTED | already covered by BP-rp14-10 (postpartum endometritis) and BP-rp28-12 |
| GAP-rp28-27 | REJECTED | already covered by BP-rp23-06 (acute mastitis, S. aureus) |
| GAP-rp28-28 | REJECTED | already covered by BP-en3-08 (Sheehan syndrome) and BP-en2-09 |
| GAP-rp28-29 | REJECTED | already covered by BP-en6-05 (postpartum thyroiditis) |
| GAP-rp28-30 | REJECTED | covered by BP-rp28-11 (lactational amenorrhea) and BP-en2-05 (dopamine and prolactin) |
| GAP-rp28-31 | REJECTED | already covered by BP-rp27-07 (anti-D within 72 h of delivery) |

## rp29
| GAP-rp29-01 | ADDED | BP-rp29-11 |
| GAP-rp29-02 | ADDED | BP-en2-11 |
| GAP-rp29-03 | REJECTED | puberty blockers are BP-rp29-05; their effect on bone mineral accrual is guideline monitoring detail below Step 1 emphasis |
| GAP-rp29-04 | REJECTED | already covered by BP-rp22-07 (spironolactone receptor and synthesis block) and BP-rp29-03 |
| GAP-rp29-05 | REJECTED | covered by BP-rp29-03 (feminizing therapy) and BP-en1-07 (negative feedback) |
| GAP-rp29-06 | REJECTED | estrogen-related prolactin rise is below Step 1 emphasis |
| GAP-rp29-07 | ADDED | BP-rp29-12 |
| GAP-rp29-08 | ADDED | BP-rp29-12 |
| GAP-rp29-09 | ADDED | BP-rp29-12 |
| GAP-rp29-10 | REJECTED | bone loss after gonadectomy without hormones is below Step 1 emphasis |
| GAP-rp29-11 | REJECTED | covered by BP-rp16-01 (NAAT) and BP-rp29-07 (sexual history); site selection is guideline detail |
| GAP-rp29-12 | REJECTED | already covered by BP-rp17-04 (PrEP) |
| GAP-rp29-13 | ADDED | BP-rp29-12 |
| GAP-rp29-14 | REJECTED | reproductive coercion by a partner is a form of intimate partner violence taught in behavioral science; the reproductive-ethics content here (coerced sterilization, informed consent) is BP-rp29-08 |
| GAP-rp29-15 | REJECTED | minors' confidential care is BP-rp29-07 and BP-rp10-10; the general exceptions to confidentiality (mandated reporting, serious threats) are behavioral-science ethics, and billing disclosure is below Step 1 emphasis |
| GAP-rp29-16 | REJECTED | covered by BP-rp29-08 (coerced sterilization history, informed consent) |

## rp30
| GAP-rp30-01 | REJECTED | already covered by BP-rp4-05 (gestational age from LMP) |
| GAP-rp30-02 | REJECTED | covered by BP-rp30-01 (first-trimester crown-rump length most accurate); later biometry is detail |
| GAP-rp30-03 | ADDED | BP-rp30-11 |
| GAP-rp30-04 | ADDED | BP-rp30-11 |
| GAP-rp30-05 | ADDED | BP-rp6-11 |
| GAP-rp30-06 | REJECTED | covered by BP-rp30-03 (cell-free DNA screens; CVS or amniocentesis diagnose) |
| GAP-rp30-07 | REJECTED | confined placental mosaicism is below Step 1 emphasis |
| GAP-rp30-08 | REJECTED | predictive value by prevalence is biostatistics material; maternal age risk is BP-rp8-02 |
| GAP-rp30-09 | ADDED | BP-rp30-08 |
| GAP-rp30-10 | ADDED | BP-rp30-08 |
| GAP-rp30-11 | REJECTED | lemon and banana signs are neuro and imaging detail beyond Step 1 |
| GAP-rp30-12 | REJECTED | GI-system embryology (gastroschisis vs omphalocele); raised AFP is BP-rp30-04 |
| GAP-rp30-13 | REJECTED | carrier screening panels are genetics counseling detail beyond Step 1 |
| GAP-rp30-14 | REJECTED | already covered by BP-rp27-07 (anti-D at 28 weeks) |
| GAP-rp30-15 | ADDED | BP-rp30-09 |
| GAP-rp30-16 | REJECTED | the vaccines Step 1 asks about in pregnancy are BP-rp30-05 (Tdap, inactivated influenza, RSV; no live vaccines); hepatitis B vaccination when indicated and deferring HPV vaccine are schedule detail below Step 1 emphasis |
| GAP-rp30-17 | ADDED | BP-rp30-10 |
| GAP-rp30-18 | ADDED | BP-rp30-10 |
| GAP-rp30-19 | ADDED | BP-rp30-10 |
| GAP-rp30-20 | ADDED | BP-rp30-10 |
| GAP-rp30-21 | ADDED | BP-rp30-10 |
| GAP-rp30-22 | ADDED | BP-rp30-10 |
| GAP-rp30-23 | ADDED | BP-rp30-10 |
| GAP-rp30-24 | ADDED | BP-rp30-10 |
| GAP-rp30-25 | ADDED | BP-rp30-10 |
| GAP-rp30-26 | REJECTED | DES clear cell adenocarcinoma is BP-rp12-10 and DES as a teratogen BP-rp30-06; the T-shaped uterus is a minor anomaly below Step 1 emphasis |
| GAP-rp30-27 | ADDED | BP-rp30-10 |
| GAP-rp30-28 | REJECTED | already covered by BP-rp27-06 (cocaine and abruption) and BP-rp30-06 |
| GAP-rp30-29 | REJECTED | already covered by BP-en6-08 (methimazole aplasia cutis; PTU in the first trimester) |
| GAP-rp30-30 | ADDED | BP-rp30-10 |
| GAP-rp30-31 | ADDED | BP-rp30-10 |
| GAP-rp30-32 | ADDED | BP-rp30-10 |
| GAP-rp30-33 | ADDED | BP-rp30-10 |
| GAP-rp30-34 | REJECTED | already covered by BP-rp27-05 (pregestational diabetes: caudal regression, heart defects) |
