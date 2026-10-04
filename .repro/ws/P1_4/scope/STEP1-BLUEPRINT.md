# STEP1-BLUEPRINT — what USMLE Step 1 asks in the endocrine and reproductive systems

Written by the planning session on 2026-09-26 from Step 1 knowledge (USMLE content outline: *Endocrine System*,
*Reproductive System*, and the pharmacology, microbiology, genetics, embryology and behavioral-science items that
Step 1 files under them). It is the second half of the coverage contract; the first half is `CANVAS-SCOPE.md`.

**Machine-readable convention (check_repro.py parses this file):**
`BP-<topic>-<nn> [hi|mid|lo] <concept> {k: term; term|alt}`  (topic ids: `en1`-`en18` endocrine, `rp1`-`rp30` reproductive; prefixed so they can never collide with the cardio block's `f1 p1 r1 c1 ...` in the shared review hub)
- `<topic>` is the topic id that must teach it (see REPRO-PLAN.md §9 topic table). An item may be taught in more than one
  topic; the id names the one that is accountable.
- `[hi|mid|lo]` is **Step 1 yield** (not course-exam likelihood — that is the separate `exam` axis, set per topic in P1.4 in `scope/YIELD.md`).
- `{k: ...}` are key terms, lowercase, American spelling. Every `;`-separated term must appear in the accountable topic's
  rendered text (body + tables + figure captions + figure text + image labels of media placed in that topic);
  `a|b` means either spelling/synonym counts. The gate checks this; the second-model coverage review (topic tasks P3.x / P9.x)
  checks that the concept is actually TAUGHT, not just mentioned.
- Items are never deleted. If one turns out wrong, mark it `[x]` with a reason on the same line; the gate skips `[x]`.
- P1.3 extends this list (gap-finding by a second model, `python xmodel.py gaps`); new items get the next free number in their topic.

---

## en1 — How hormones work: receptors, second messengers, transport, feedback
BP-en1-01 [hi] Gs/cAMP hormones: FSH, LH, ACTH, TSH, CRH, hCG, ADH at V2, MSH, PTH, calcitonin, GHRH, glucagon {k: camp; glucagon; v2}
BP-en1-02 [hi] Gq/IP3-Ca hormones: GnRH, oxytocin, ADH at V1, TRH, histamine H1, angiotensin II, gastrin {k: ip3; trh; oxytocin}
BP-en1-03 [hi] Intracellular (nuclear) receptors: steroids, thyroid hormone, vitamin D (calcitriol); act on DNA response elements {k: nuclear; response element}
BP-en1-04 [hi] Receptor tyrosine kinase (insulin, IGF-1, FGF, PDGF, EGF) vs receptor-associated JAK/STAT (GH, prolactin, EPO, cytokines) {k: tyrosine kinase; jak}
BP-en1-05 [mid] cGMP signaling: ANP, BNP, nitric oxide {k: cgmp; natriuretic}
BP-en1-06 [hi] Binding globulins set free hormone: SHBG, TBG, CBG; estrogen/pregnancy raise TBG and SHBG; free level drives feedback {k: shbg; tbg; free hormone|free fraction}
BP-en1-07 [hi] Negative feedback logic: primary gland failure raises the trophic hormone; secondary failure lowers it (lab-pattern reasoning) {k: negative feedback; primary; secondary}
BP-en1-08 [mid] Positive feedback exceptions: mid-cycle LH surge, oxytocin in labor (Ferguson reflex) {k: positive feedback; lh surge}
BP-en1-09 [hi] Peptide vs steroid vs amine hormones: storage, half-life, transport, receptor location {k: peptide; steroid; half-life}
BP-en1-10 [mid] Steroidogenesis starts with cholesterol -> pregnenolone (desmolase/CYP11A1, StAR); ACTH and LH both stimulate it {k: pregnenolone; desmolase|cyp11a1}
BP-en1-11 [hi] Second-messenger cascades: Gs -> adenylyl cyclase -> cAMP -> protein kinase A; Gi inhibits adenylyl cyclase (dopamine D2, somatostatin); Gq -> phospholipase C -> IP3 (ER calcium release) + DAG (protein kinase C) {k: adenylyl cyclase; protein kinase a|pka; phospholipase c; protein kinase c|pkc}
BP-en1-12 [hi] Lab logic beyond simple gland failure: primary hyperfunction suppresses the trophic hormone (cortisol-secreting adrenal adenoma: low ACTH; Graves: low TSH); a trophic-hormone-secreting tumor raises both (Cushing disease, TSH-secreting adenoma); end-organ resistance gives a high hormone level with signs of deficiency (androgen insensitivity: high testosterone and LH; pseudohypoparathyroidism: high PTH, low calcium; Laron: high GH, low IGF-1) {k: suppress; resistance; trophic|tropic}

## en2 — Hypothalamus and pituitary: anatomy, cells, axes
BP-en2-01 [hi] Anterior pituitary from Rathke pouch (oral/surface ectoderm); posterior from neuroectoderm (downgrowth of diencephalon) {k: rathke; neuroectoderm}
BP-en2-02 [hi] Anterior cell types: acidophils GH, prolactin; basophils FSH, LH, ACTH, TSH {k: acidophil; basophil}
BP-en2-03 [hi] Hypophyseal portal system carries hypothalamic releasing/inhibiting hormones to the anterior lobe {k: portal}
BP-en2-04 [hi] Posterior pituitary stores ADH (supraoptic) and oxytocin (paraventricular) made in hypothalamic neurons {k: supraoptic; paraventricular}
BP-en2-05 [hi] Dopamine tonically inhibits prolactin; TRH stimulates prolactin; prolactin inhibits GnRH (why hyperprolactinemia causes amenorrhea/infertility) {k: dopamine; tonic|tonically; gnrh}
BP-en2-06 [hi] GH physiology: pulsatile, sleep, stimulated by hypoglycemia/exercise, suppressed by glucose and somatostatin; IGF-1 from liver mediates growth {k: igf-1; somatostatin}
BP-en2-07 [hi] ACTH and MSH both come from POMC (why ACTH excess darkens skin) {k: pomc; msh}
BP-en2-08 [hi] Optic chiasm sits above the sella: compression from below gives bitemporal hemianopia (superior quadrants first) {k: chiasm; bitemporal}
BP-en2-09 [mid] Pituitary enlarges in pregnancy (lactotroph hyperplasia) and depends on a fragile blood supply (Sheehan) {k: lactotroph; hyperplasia}
BP-en2-10 [mid] Somatostatin inhibits GH, TSH, insulin, glucagon, gastrin (basis of octreotide) {k: somatostatin; octreotide}
BP-en2-11 [hi] Pulsatile GnRH stimulates LH and FSH; a continuous GnRH agonist (leuprolide) gives an initial flare, then receptor downregulation suppresses LH, FSH and sex steroids (prostate cancer, central precocious puberty, endometriosis, fibroids) {k: pulsatile; continuous; downregulat|desensitiz}
BP-en2-12 [hi] TSH, LH, FSH and hCG are glycoproteins that share one alpha subunit; the beta subunit gives specificity (pregnancy tests detect beta-hCG; very high hCG cross-stimulates the TSH receptor) {k: alpha subunit|α subunit|α-subunit|alpha-subunit; beta subunit|β subunit|β-subunit|beta-subunit|beta-hcg|β-hcg}
BP-en2-13 [hi] Hypothalamic releasing and inhibiting hormones and their targets: TRH -> TSH (and prolactin), CRH -> ACTH, GnRH -> LH and FSH, GHRH -> GH; somatostatin inhibits GH and TSH; dopamine inhibits prolactin {k: ghrh; crh; trh}
BP-en2-14 [lo] Posterior pituitary histology: unmyelinated axons of hypothalamic neurons, pituicytes (glial cells) and Herring bodies (axon dilations storing ADH or oxytocin bound to neurophysin) {k: pituicyte; herring; neurophysin}
BP-en2-15 [mid] The cavernous sinus beside the sella holds the internal carotid artery and CN III, IV, V1, V2 and VI; lateral extension of a pituitary mass or apoplexy causes diplopia, ophthalmoplegia and facial numbness {k: cavernous sinus; diplopia|ophthalmoplegia}

## en3 — Pituitary tumors and hypopituitarism
BP-en3-01 [hi] Prolactinoma: most common pituitary adenoma; galactorrhea, amenorrhea, infertility, low libido; men present late with mass effect {k: prolactinoma; galactorrhea}
BP-en3-02 [hi] Dopamine agonists cabergoline and bromocriptine shrink prolactinomas; other causes of high prolactin: antipsychotics (D2 block), hypothyroidism (TRH), pregnancy, stalk compression {k: cabergoline; bromocriptine; stalk}
BP-en3-03 [hi] Acromegaly: GH adenoma after epiphyseal closure; coarse face, large hands/feet, macroglossia, sweating, glucose intolerance, cardiomyopathy (leading cause of death) {k: acromegaly; macroglossia|large tongue}
BP-en3-04 [hi] Acromegaly diagnosis: high IGF-1 and GH not suppressed by oral glucose; treatment surgery, octreotide, pegvisomant (GH receptor antagonist) {k: igf-1; oral glucose; pegvisomant}
BP-en3-05 [hi] Gigantism: GH excess before growth plates close {k: gigantism}
BP-en3-06 [hi] Nonfunctioning macroadenoma: headache, bitemporal hemianopia, hypopituitarism; mild hyperprolactinemia from stalk effect {k: nonfunctioning; macroadenoma}
BP-en3-07 [hi] Pituitary apoplexy: sudden hemorrhage into adenoma; thunderclap headache, visual loss, ophthalmoplegia, shock from acute ACTH loss; give steroids {k: apoplexy; ophthalmoplegia}
BP-en3-08 [hi] Sheehan syndrome: postpartum pituitary infarction after hemorrhage; first sign failure to lactate {k: sheehan; lactate|lactation}
BP-en3-09 [mid] Order of hormone loss in hypopituitarism: GH, then FSH/LH, then TSH, then ACTH (ACTH loss is the dangerous one) {k: hypopituitarism}
BP-en3-10 [mid] Empty sella syndrome; lymphocytic hypophysitis (peripartum) {k: empty sella; hypophysitis}
BP-en3-11 [hi] Craniopharyngioma: Rathke remnant, children, calcified cystic suprasellar mass, "motor oil" fluid, bitemporal hemianopia, growth failure {k: craniopharyngioma; calcif}
BP-en3-12 [mid] GH deficiency in children: short stature with delayed bone age; Laron syndrome = GH receptor defect (high GH, low IGF-1) {k: laron; bone age}
BP-en3-13 [mid] Pituitary imaging: MRI; microadenoma < 1 cm vs macroadenoma >= 1 cm {k: microadenoma; mri}
BP-en3-14 [lo] TSH-secreting adenoma: high T4 with inappropriately normal/high TSH {k: tsh-secreting|thyrotroph}
BP-en3-15 [mid] Other acromegaly associations: carpal tunnel syndrome, obstructive sleep apnea, arthropathy, hypertension with LVH, colorectal polyps and cancer {k: carpal tunnel; sleep apnea; colorectal|colon}
BP-en3-16 [mid] Octreotide (somatostatin analog) for acromegaly, carcinoid syndrome and VIPoma; adverse effects nausea, steatorrhea and gallstones (it inhibits gallbladder contraction) {k: octreotide; gallstone|cholelithiasis}
BP-en3-17 [mid] Diabetes insipidus with a sellar or suprasellar mass points to a stalk or hypothalamic process (craniopharyngioma, Langerhans cell histiocytosis, hypophysitis, metastasis); anterior pituitary adenomas rarely cause DI {k: diabetes insipidus; langerhans}

## en4 — Water balance: ADH, diabetes insipidus, SIADH
BP-en4-01 [hi] ADH acts on V2 receptors -> aquaporin-2 insertion in collecting duct; V1 causes vasoconstriction {k: aquaporin; v2}
BP-en4-02 [hi] ADH release: rising plasma osmolality (hypothalamic osmoreceptors) and large volume loss {k: osmoreceptor|osmolality}
BP-en4-03 [hi] Central DI: low ADH (trauma, surgery, tumors, idiopathic); nephrogenic DI: resistance (lithium, demeclocycline, hypercalcemia, hypokalemia, V2/AQP2 mutations) {k: central; nephrogenic; lithium}
BP-en4-04 [hi] DI labs: large volume of dilute urine, high-normal/high serum sodium and osmolality {k: dilute urine|low urine osmolality}
BP-en4-05 [hi] Water deprivation test then desmopressin: central DI concentrates after desmopressin, nephrogenic does not; primary polydipsia concentrates with deprivation {k: water deprivation; desmopressin; primary polydipsia}
BP-en4-06 [hi] Treatment: desmopressin for central DI; thiazides, amiloride (lithium-induced), NSAIDs/indomethacin, low salt for nephrogenic DI {k: thiazide; amiloride}
BP-en4-07 [hi] SIADH: euvolemic hyponatremia, inappropriately concentrated urine, high urine sodium; causes small cell lung cancer, CNS disease, lung disease, drugs (carbamazepine, cyclophosphamide, SSRIs) {k: siadh; small cell; euvolemic}
BP-en4-08 [hi] SIADH treatment: fluid restriction, salt tablets, hypertonic saline if severe, vaptans (conivaptan, tolvaptan), demeclocycline {k: fluid restriction; tolvaptan|conivaptan}
BP-en4-09 [hi] Correcting chronic hyponatremia too fast causes osmotic demyelination syndrome (central pontine myelinolysis) {k: osmotic demyelination|central pontine}
BP-en4-10 [mid] Hyperglycemia and hyperlipidemia can lower measured sodium (translational/pseudo-hyponatremia) {k: pseudohyponatremia|translational}
BP-en4-11 [mid] Sorting polyuria: water diuresis (DI, primary polydipsia; low urine osmolality) vs solute (osmotic) diuresis (hyperglycemia with glucosuria, mannitol; urine osmolality not low) {k: osmotic diuresis; glucosuria|glycosuria}
BP-en4-12 [mid] Desmopressin (V2-selective ADH analog): central DI, nocturnal enuresis, von Willebrand disease and mild hemophilia A (releases vWF and factor VIII); adverse effect hyponatremia {k: desmopressin; von willebrand; hyponatremia}
BP-en4-13 [mid] Serum sodium separates the polyurias: DI loses free water, so sodium runs high-normal and rises to hypernatremia only when thirst or water access fails; primary polydipsia dilutes the plasma, so serum sodium and osmolality are low-normal {k: hypernatremia; thirst; primary polydipsia}
BP-en4-14 [mid] Euvolemic hyponatremia with concentrated urine is not always SIADH: glucocorticoid deficiency (even secondary adrenal insufficiency, because cortisol normally restrains ADH release) and severe hypothyroidism must be excluded first {k: glucocorticoid deficiency|cortisol deficiency; hypothyroidism}

## en5 — Thyroid structure, hormone synthesis and function tests
BP-en5-01 [hi] Thyroid develops from the foramen cecum; thyroglossal duct cyst is a midline neck mass that moves with swallowing/tongue protrusion; lingual thyroid {k: foramen cecum; thyroglossal}
BP-en5-02 [hi] Parafollicular C cells (calcitonin) come from neural crest via the ultimobranchial body (4th pouch) {k: parafollicular; ultimobranchial|neural crest}
BP-en5-03 [hi] Synthesis steps and the drug that blocks each: NIS uptake (perchlorate, pertechnetate), peroxidase oxidation/organification/coupling (PTU, methimazole), 5'-deiodinase T4->T3 (PTU, propranolol, glucocorticoids) {k: perchlorate; peroxidase; deiodinase}
BP-en5-04 [hi] Thyroglobulin, MIT/DIT coupling, T4 is the main secretory product, T3 the active hormone {k: thyroglobulin; coupling}
BP-en5-05 [hi] Wolff-Chaikoff effect (iodide excess blocks organification) and Jod-Basedow (iodide-induced hyperthyroidism in nodular goiter) {k: wolff-chaikoff; jod-basedow}
BP-en5-06 [hi] Actions: raise BMR via Na/K-ATPase, increase beta-1 receptor expression (tachycardia), bone growth, CNS maturation {k: na/k-atpase|na+/k+-atpase; beta-1|β1}
BP-en5-07 [hi] TFT patterns: TSH is the best screen; high TSH + low free T4 = primary hypothyroid; low TSH + high free T4 = primary hyperthyroid; central patterns {k: free t4; tsh}
BP-en5-08 [hi] TBG rises with estrogen (pregnancy, OCPs): total T4 up, free T4 normal; falls with androgens, nephrotic syndrome, liver failure {k: tbg; total t4}
BP-en5-09 [hi] Pregnancy: hCG weakly stimulates the TSH receptor (low TSH in 1st trimester); levothyroxine dose rises in pregnancy {k: hcg; pregnancy}
BP-en5-10 [mid] Sick euthyroid (nonthyroidal illness): low T3, high reverse T3, normal TSH {k: reverse t3|rt3; euthyroid}
BP-en5-11 [mid] Radioactive iodine uptake separates overproduction (high uptake) from leak/exogenous (low uptake) {k: radioactive iodine uptake|raiu}
BP-en5-12 [mid] Histology: follicles of cuboidal cells around colloid; tall cells and scalloped colloid when stimulated {k: colloid; follicle}
BP-en5-13 [mid] Subclinical thyroid disease: high TSH with normal free T4 (subclinical hypothyroidism); low TSH with normal free T4 and T3 (subclinical hyperthyroidism); T3 toxicosis: low TSH, normal free T4, high T3 {k: subclinical; t3 toxicosis|t3 thyrotoxicosis}
BP-en5-14 [mid] Thyroid follicular cells derive from endoderm of the floor of the primitive pharynx; a persisting part of the thyroglossal duct remains as the pyramidal lobe {k: endoderm; pyramidal lobe}
BP-en5-15 [hi] Central (secondary) hypothyroidism: low free T4 with a low or inappropriately normal TSH, so a normal TSH alone does not exclude hypothyroidism when pituitary or hypothalamic disease is suspected {k: central hypothyroidism; inappropriately normal}

## en6 — Hyperthyroidism and thyroiditis
BP-en6-01 [hi] Graves: thyroid-stimulating immunoglobulin (IgG, type II hypersensitivity) -> diffuse goiter, ophthalmopathy, pretibial myxedema; HLA-DR3 {k: thyroid-stimulating immunoglobulin|tsi; pretibial; ophthalmopathy}
BP-en6-02 [hi] Graves ophthalmopathy: TSH-receptor antibodies activate orbital fibroblasts -> glycosaminoglycan deposition, exophthalmos {k: glycosaminoglycan; exophthalmos}
BP-en6-03 [hi] Toxic multinodular goiter (patchy uptake, no eye signs) and toxic adenoma (single hot nodule; TSH-receptor activating mutations) {k: multinodular; hot nodule}
BP-en6-04 [hi] Subacute granulomatous (de Quervain) thyroiditis: painful tender gland after viral illness, high ESR, granulomas with giant cells, transient hyper -> hypo {k: de quervain; granulomatous; painful}
BP-en6-05 [hi] Painless (silent) and postpartum thyroiditis: lymphocytic, low uptake, transient {k: postpartum thyroiditis; painless|silent}
BP-en6-06 [hi] Exogenous thyroid hormone (factitious): low uptake, low thyroglobulin {k: factitious; thyroglobulin}
BP-en6-07 [hi] Thyroid storm: precipitated by surgery, infection, childbirth, iodinated contrast; fever, tachyarrhythmia, delirium; treat beta-blocker, PTU, steroids, then iodide {k: thyroid storm; propranolol}
BP-en6-08 [hi] PTU vs methimazole: PTU also blocks peripheral deiodinase and is preferred in 1st trimester; methimazole otherwise (teratogen: aplasia cutis); both cause agranulocytosis; PTU hepatotoxicity {k: agranulocytosis; aplasia cutis; hepatotoxic}
BP-en6-09 [hi] Radioactive iodine ablation (contraindicated in pregnancy; can worsen ophthalmopathy); surgery; beta-blockers for symptoms {k: radioactive iodine; ablation}
BP-en6-10 [mid] Hyperthyroidism effects: weight loss, heat intolerance, tremor, AF, osteoporosis, hypercalcemia, proximal myopathy, lid lag, hyperdefecation {k: heat intolerance; atrial fibrillation}
BP-en6-11 [mid] Struma ovarii and hCG-driven hyperthyroidism (molar pregnancy, hyperemesis) {k: struma ovarii}
BP-en6-12 [mid] Amiodarone-induced thyroid dysfunction (hypo or hyper) {k: amiodarone}
BP-en6-13 [mid] Destructive thyroiditis (subacute, painless, postpartum, early Hashimoto "hashitoxicosis") releases preformed hormone: low radioactive iodine uptake; treat symptoms with beta-blockers (NSAIDs or glucocorticoids for painful subacute thyroiditis); thionamides do not help because synthesis is not increased {k: preformed; beta-blocker|beta blocker|β-blocker; thionamide}
BP-en6-14 [lo] PTU can cause ANCA-associated vasculitis {k: anca; vasculitis}
BP-en6-15 [mid] Maternal TSH-receptor-stimulating IgG crosses the placenta and causes transient neonatal thyrotoxicosis (neonatal Graves disease) {k: neonatal; placenta}
BP-en6-16 [mid] Radioactive iodine ablation or total thyroidectomy for Graves disease usually leaves permanent hypothyroidism, so lifelong levothyroxine replacement follows {k: permanent hypothyroidism; levothyroxine}

## en7 — Hypothyroidism, nodules and thyroid cancer
BP-en7-01 [hi] Hashimoto thyroiditis: anti-TPO and antithyroglobulin; lymphocytic infiltrate with germinal centers and Hurthle cells; HLA-DR3/DR5; risk of thyroid lymphoma {k: hashimoto; hurthle|hürthle; germinal}
BP-en7-02 [hi] Hypothyroid features: cold intolerance, weight gain, bradycardia, constipation, dry skin, myxedema, hyporeflexia with slow relaxation, menorrhagia, high LDL, CK rise {k: cold intolerance; myxedema}
BP-en7-03 [hi] Congenital hypothyroidism (cretinism): dysgenesis most common; pot belly, pale, puffy face, protruding umbilicus, macroglossia, poor brain development; newborn screen {k: congenital hypothyroidism|cretinism; umbilic}
BP-en7-04 [hi] Myxedema coma: hypothermia, bradycardia, hyponatremia, hypoventilation, coma; IV levothyroxine plus hydrocortisone {k: myxedema coma; hypothermia}
BP-en7-05 [mid] Riedel thyroiditis: rock-hard fibrosis extending into neck (IgG4-related), mimics anaplastic carcinoma {k: riedel; igg4}
BP-en7-06 [hi] Levothyroxine: empty stomach; absorption reduced by calcium, iron, PPIs, bile-acid resins, soy/coffee; over-replacement -> AF, bone loss; liothyronine is T3 {k: levothyroxine; calcium; iron}
BP-en7-07 [hi] Nodule work-up: TSH first; low TSH -> scintigraphy (hot nodules rarely malignant); normal/high TSH -> ultrasound and fine-needle aspiration {k: fine-needle|fna; scintigraphy|scan}
BP-en7-08 [hi] Papillary carcinoma: most common; radiation; Orphan Annie nuclei, nuclear grooves, psammoma bodies; RET/PTC and BRAF; lymphatic spread; excellent prognosis {k: papillary; orphan annie; psammoma}
BP-en7-09 [hi] Follicular carcinoma: capsular/vascular invasion (needs histology, not FNA); RAS, PAX8-PPARG; hematogenous to bone/lung {k: follicular carcinoma; capsular}
BP-en7-10 [hi] Medullary carcinoma: C cells, calcitonin, amyloid stroma; RET; MEN2A/2B; prophylactic thyroidectomy in carriers {k: medullary; calcitonin; amyloid}
BP-en7-11 [hi] Anaplastic carcinoma: elderly, rapid, invasive, TP53, dismal {k: anaplastic}
BP-en7-12 [mid] Primary thyroid lymphoma arises in Hashimoto {k: lymphoma}
BP-en7-13 [hi] Thyroidectomy complications: recurrent laryngeal nerve (hoarseness), external branch of superior laryngeal nerve (pitch), hypocalcemia from parathyroid removal {k: recurrent laryngeal; hypocalcemia}
BP-en7-14 [mid] Iodine deficiency: most common cause of goiter and hypothyroidism worldwide; low hormone -> high TSH -> diffuse, later multinodular goiter; endemic congenital hypothyroidism {k: iodine deficiency; goiter}
BP-en7-15 [mid] Drug-induced hypothyroidism: lithium (inhibits thyroid hormone release; goiter) and iodine excess (amiodarone, iodinated contrast; Wolff-Chaikoff effect) {k: lithium; wolff-chaikoff}

## en8 — Calcium, PTH, vitamin D and calcitonin
BP-en8-01 [hi] Parathyroid embryology: inferior glands from 3rd pouch (with thymus, can be ectopic in mediastinum), superior from 4th pouch; DiGeorge (22q11) -> hypocalcemia, thymic aplasia, conotruncal defects {k: third pouch|3rd pouch; digeorge}
BP-en8-02 [hi] PTH actions: bone resorption via RANKL on osteoblasts, distal tubule calcium reabsorption, proximal tubule phosphate wasting, 1-alpha-hydroxylase activation {k: rankl; phosphate; 1-alpha|1α}
BP-en8-03 [hi] Calcium-sensing receptor sets PTH release; magnesium is needed for PTH secretion (severe hypomagnesemia -> hypocalcemia) {k: calcium-sensing; magnesium}
BP-en8-04 [hi] Vitamin D pathway: skin (UV) -> 25-hydroxylation in liver -> 1-alpha-hydroxylation in kidney; calcitriol raises gut calcium and phosphate absorption {k: 25-hydroxy; calcitriol}
BP-en8-05 [hi] Granulomatous disease (sarcoidosis, TB) and some lymphomas make calcitriol -> hypercalcemia {k: sarcoid; granulom}
BP-en8-06 [mid] Calcitonin lowers bone resorption; minor physiologic role; tumor marker for medullary carcinoma {k: calcitonin}
BP-en8-07 [mid] FGF23 lowers phosphate reabsorption and calcitriol; tumor-induced osteomalacia; X-linked hypophosphatemic rickets {k: fgf23|fgf-23}
BP-en8-08 [hi] Ionized calcium falls with alkalosis (albumin binds more) -> tetany; correct total calcium for albumin {k: ionized; albumin; alkalosis}
BP-en8-09 [hi] Hypocalcemia signs: Chvostek, Trousseau, perioral tingling, QT prolongation, seizures, laryngospasm {k: chvostek; trousseau; qt}
BP-en8-10 [mid] Intermittent PTH is anabolic to bone (teriparatide) while continuous PTH resorbs bone {k: intermittent}
BP-en8-11 [lo] Parathyroid histology: chief cells secrete PTH; oxyphil cells (eosinophilic, mitochondria-rich) increase with age; stromal fat {k: chief cell; oxyphil}
BP-en8-12 [mid] 25-hydroxyvitamin D is the storage form and the lab test for vitamin D status; calcitriol can stay normal in deficiency because high PTH drives renal 1-alpha-hydroxylase {k: storage form; 25-hydroxy}

## en9 — Parathyroid disease and disorders of calcium
BP-en9-01 [hi] Primary hyperparathyroidism: adenoma (most), hyperplasia (MEN); high Ca, low phosphate, high PTH, high urine Ca; stones, bones, groans, thrones, psychiatric overtones {k: adenoma; stones; groans}
BP-en9-02 [hi] Osteitis fibrosa cystica: subperiosteal resorption, brown tumors (hemosiderin-laden giant-cell lesions) {k: osteitis fibrosa cystica; brown tumor}
BP-en9-03 [hi] Secondary hyperparathyroidism: CKD (low calcitriol, high phosphate) or vitamin D deficiency -> low/normal Ca, high PTH; renal osteodystrophy {k: secondary hyperparathyroidism; renal osteodystrophy}
BP-en9-04 [mid] Tertiary hyperparathyroidism: autonomous PTH after long-standing secondary; hypercalcemia {k: tertiary}
BP-en9-05 [hi] Familial hypocalciuric hypercalcemia: inactivating CaSR mutation; mild hypercalcemia with LOW urine calcium; benign, no surgery {k: hypocalciuric; casr|calcium-sensing}
BP-en9-06 [hi] Hypercalcemia of malignancy: PTHrP (squamous cell lung, renal, breast), osteolysis (myeloma, breast), calcitriol (lymphoma); PTH is suppressed {k: pthrp; osteoly}
BP-en9-07 [hi] Hypercalcemia treatment: IV saline, bisphosphonates, calcitonin, denosumab; steroids for granulomatous/lymphoma; cinacalcet for parathyroid causes {k: saline; cinacalcet}
BP-en9-08 [hi] Hypoparathyroidism: post-thyroidectomy, autoimmune (APS-1), DiGeorge; low Ca, high phosphate, low PTH {k: hypoparathyroidism; high phosphate|hyperphosphatemia}
BP-en9-09 [hi] Pseudohypoparathyroidism type 1A: GNAS inactivation (maternal allele), Albright hereditary osteodystrophy (short 4th/5th metacarpals, short stature, round face), end-organ PTH resistance -> high PTH, low Ca {k: pseudohypoparathyroidism; albright; gnas}
BP-en9-10 [mid] Pseudopseudohypoparathyroidism: AHO phenotype, normal calcium and PTH (paternal allele) {k: pseudopseudo}
BP-en9-11 [mid] Other hypercalcemia: thiazides, lithium, vitamin D toxicity, milk-alkali, immobilization, hyperthyroidism {k: milk-alkali; thiazide}
BP-en9-12 [mid] Other hypocalcemia: vitamin D deficiency, CKD, acute pancreatitis (saponification), massive transfusion (citrate), hungry bone {k: pancreatitis; citrate}
BP-en9-13 [mid] Hypercalcemia effects: nephrolithiasis, polyuria from nephrogenic DI (the dehydration worsens hypercalcemia), constipation, pancreatitis, peptic ulcer, weakness, confusion; shortened QT interval {k: shortened qt|short qt; nephrogenic; constipation}
BP-en9-14 [mid] First-line treatments: symptomatic primary hyperparathyroidism -> parathyroidectomy; severe symptomatic hypocalcemia (tetany, seizures, arrhythmia) -> IV calcium gluconate {k: parathyroidectomy; calcium gluconate}
BP-en9-15 [mid] PTH-independent hypercalcemia from vitamin D excess (vitamin D toxicity, calcitriol-making granulomas) raises calcium with high-normal or high phosphate (more gut absorption) and suppressed PTH, unlike the low phosphate of PTH or PTHrP excess {k: vitamin d toxicity; high phosphate|hyperphosphatemia}
BP-en9-16 [mid] Cinacalcet is a calcimimetic: it sensitizes the parathyroid calcium-sensing receptor so PTH falls (secondary hyperparathyroidism of CKD, parathyroid carcinoma); adverse effect hypocalcemia {k: calcimimetic; calcium-sensing}
BP-en9-17 [mid] With hypercalcemia any unsuppressed PTH is inappropriate: a PTH inside the reference range still points to PTH-driven disease (primary hyperparathyroidism; also FHH and lithium), because PTH-independent causes suppress it {k: inappropriately normal; unsuppressed}

## en10 — Bone turnover: osteoporosis, osteomalacia, Paget disease and bone-active drugs
BP-en10-01 [hi] Osteoporosis: low bone mass with normal mineralization; postmenopausal estrogen loss raises RANKL/lowers OPG -> osteoclast activity; normal serum Ca, phosphate, ALP {k: osteoporosis; rankl; osteoprotegerin|opg}
BP-en10-02 [hi] Fractures: vertebral compression (kyphosis, height loss), hip, distal radius; DEXA T-score <= -2.5 {k: dexa; t-score}
BP-en10-03 [hi] Risk factors: glucocorticoids, smoking, alcohol, low weight, hyperthyroidism, heparin, immobility; prevention with weight-bearing exercise, calcium, vitamin D {k: glucocorticoid; weight-bearing}
BP-en10-04 [hi] Bisphosphonates: pyrophosphate analogs that bind hydroxyapatite and induce osteoclast apoptosis; pill esophagitis (upright, water), osteonecrosis of jaw, atypical femur fracture {k: bisphosphonate; osteonecrosis of the jaw|osteonecrosis of jaw; esophagitis}
BP-en10-05 [hi] Denosumab (RANKL antibody), teriparatide/abaloparatide (intermittent PTH/PTHrP analog; anabolic; osteosarcoma warning), romosozumab (sclerostin), raloxifene, calcitonin {k: denosumab; teriparatide; romosozumab}
BP-en10-06 [hi] Osteomalacia/rickets: defective mineralization from vitamin D deficiency; low Ca and phosphate, high PTH and ALP; bowed legs, rachitic rosary, craniotabes, Looser zones {k: osteomalacia; rickets; rosary}
BP-en10-07 [hi] Paget disease of bone: disordered remodeling, mosaic lamellar bone, isolated high ALP, bone pain, enlarging skull, hearing loss, high-output failure, osteosarcoma risk {k: paget; mosaic}
BP-en10-08 [mid] Osteopetrosis contrast: failed osteoclasts (carbonic anhydrase II) {k: osteopetrosis}
BP-en10-09 [hi] Osteoporosis is diagnosed by a DEXA T-score of -2.5 or lower or by a fragility fracture (fall from standing height) of the hip or vertebra; a T-score between -1 and -2.5 is osteopenia {k: fragility fracture; osteopenia}
BP-en10-10 [mid] Secondary causes of osteoporosis beyond drugs: hyperparathyroidism, hyperthyroidism, hypogonadism (anorexia nervosa, low estrogen or testosterone), malabsorption, multiple myeloma {k: secondary osteoporosis|secondary cause; hypogonadism; malabsorption}
BP-en10-11 [mid] Bisphosphonates are first-line drug therapy for postmenopausal osteoporosis and for symptomatic Paget disease of bone {k: first-line; paget}
BP-en10-12 [hi] Raloxifene is a SERM: estrogen agonist at bone, antagonist at breast and endometrium, so it treats osteoporosis and lowers breast cancer risk without raising endometrial cancer risk; it raises VTE risk and causes hot flashes {k: raloxifene; selective estrogen receptor modulator|serm; thromboembolism|vte}
BP-en10-13 [mid] Osteomalacia and rickets leave excess unmineralized osteoid (wide osteoid seams on biopsy); adults have diffuse bone pain and proximal muscle weakness; children's radiographs show widened growth plates with metaphyseal cupping and fraying {k: osteoid; proximal muscle weakness|proximal weakness; metaphyseal}
BP-en10-14 [mid] Causes of vitamin D deficiency: little sunlight or dietary intake, fat malabsorption (celiac disease, pancreatic insufficiency, gastric bypass), liver or kidney disease (lost hydroxylation), enzyme-inducing anticonvulsants such as phenytoin {k: malabsorption; phenytoin}

## en11 — Adrenal cortex: zones, steroidogenesis and congenital adrenal hyperplasia
BP-en11-01 [hi] Zones: glomerulosa (aldosterone; angiotensin II, K+), fasciculata (cortisol; ACTH), reticularis (androgens; ACTH); medulla (catecholamines) {k: glomerulosa; fasciculata; reticularis}
BP-en11-02 [hi] Cortex from mesoderm, medulla from neural crest; cortisol reaching the medulla induces PNMT (epinephrine) {k: neural crest; pnmt}
BP-en11-03 [hi] Pathway enzymes: 21-hydroxylase, 11-beta-hydroxylase, 17-alpha-hydroxylase (and 17,20-lyase), aromatase, 5-alpha-reductase; ketoconazole blocks desmolase/17,20-lyase {k: 21-hydroxylase; 11-beta|11β; 17-alpha|17α}
BP-en11-04 [hi] 21-hydroxylase deficiency (most common): low cortisol and aldosterone, high androgens, high 17-hydroxyprogesterone; salt wasting (hyponatremia, hyperkalemia, shock) in newborns; virilized 46,XX {k: 17-hydroxyprogesterone; salt wasting|salt-wasting}
BP-en11-05 [hi] 11-beta-hydroxylase deficiency: 11-deoxycorticosterone accumulates -> hypertension, hypokalemia, low renin; virilization {k: 11-deoxycorticosterone|deoxycorticosterone}
BP-en11-06 [hi] 17-alpha-hydroxylase deficiency: hypertension, hypokalemia, low sex steroids -> 46,XY phenotypic female, 46,XX absent puberty {k: phenotypic female|undervirilized}
BP-en11-07 [hi] High ACTH drives bilateral adrenal hyperplasia in all CAH; treat with glucocorticoid (+ mineralocorticoid if salt-wasting); newborn screening {k: bilateral; newborn screen}
BP-en11-08 [mid] Nonclassic (late-onset) CAH mimics PCOS: hirsutism, oligomenorrhea {k: nonclassic|late-onset}
BP-en11-09 [mid] CAH is autosomal recessive (21-hydroxylase deficiency most common); each sibling of an affected child has a 25% risk {k: autosomal recessive; 25%}
BP-en11-10 [hi] Sex-specific CAH presentation: 46,XX infants have virilized external genitalia with normal ovaries and uterus (no AMH); 46,XY infants have normal genitalia and present with a salt-wasting crisis in the first weeks, or later with precocious pseudopuberty {k: 46,xx; 46,xy; uterus}
BP-en11-11 [mid] 3-beta-hydroxysteroid dehydrogenase converts pregnenolone to progesterone, 17-hydroxypregnenolone to 17-hydroxyprogesterone and DHEA to androstenedione (an early step shared by all three zones) {k: 3-beta|3β; androstenedione}
BP-en11-12 [mid] Renin in CAH: 21-hydroxylase deficiency raises renin (aldosterone is lost); 11-beta- and 17-alpha-hydroxylase deficiencies accumulate deoxycorticosterone, which suppresses renin and usually aldosterone as well {k: renin; deoxycorticosterone}

## en12 — Cortisol excess and deficiency
BP-en12-01 [hi] Cortisol actions: gluconeogenesis, lipolysis, proteolysis, insulin resistance, anti-inflammatory (lipocortin inhibits phospholipase A2, blocks IL-2), upregulates alpha-1 receptors, inhibits bone formation, diurnal peak in the morning {k: phospholipase a2; alpha-1|α1; gluconeogenesis}
BP-en12-02 [hi] Cushing syndrome causes: exogenous steroids (most common), pituitary adenoma (Cushing disease), ectopic ACTH (small cell lung cancer, bronchial carcinoid), adrenal adenoma/carcinoma/hyperplasia {k: cushing disease; ectopic acth}
BP-en12-03 [hi] Cushing features: central obesity, moon face, buffalo hump, violaceous striae, proximal weakness, osteoporosis, hypertension, hyperglycemia, bruising, infections, amenorrhea, hirsutism {k: striae; buffalo hump|dorsocervical}
BP-en12-04 [hi] Work-up: screen with 24-h urine free cortisol, late-night salivary cortisol, or 1 mg overnight dexamethasone test; then ACTH; high-dose dexamethasone suppresses pituitary but not ectopic; CRH test, petrosal sinus sampling {k: dexamethasone suppression; salivary; petrosal}
BP-en12-05 [hi] ACTH-independent Cushing: low ACTH, contralateral adrenal atrophy; ectopic ACTH: very high ACTH, hypokalemia, hyperpigmentation {k: acth-independent; atrophy}
BP-en12-06 [mid] Nelson syndrome after bilateral adrenalectomy: enlarging corticotroph adenoma, hyperpigmentation, visual loss {k: nelson}
BP-en12-07 [hi] Primary adrenal insufficiency (Addison): autoimmune most common in US, TB worldwide, metastases, hemorrhage; low cortisol and aldosterone -> hypotension, hyponatremia, hyperkalemia, hypoglycemia, hyperpigmentation {k: addison; hyperpigmentation; hyperkalemia}
BP-en12-08 [hi] Secondary/tertiary adrenal insufficiency: low ACTH -> no hyperpigmentation, no hyperkalemia (renin-angiotensin keeps aldosterone); abrupt withdrawal of chronic steroids is the commonest cause {k: secondary adrenal insufficiency; withdrawal}
BP-en12-09 [hi] Cosyntropin (ACTH) stimulation test diagnoses adrenal insufficiency {k: cosyntropin}
BP-en12-10 [hi] Adrenal crisis: shock, vomiting, abdominal pain; IV hydrocortisone and saline immediately; stress dosing {k: adrenal crisis; hydrocortisone; stress dos}
BP-en12-11 [hi] Waterhouse-Friderichsen syndrome: bilateral adrenal hemorrhage in meningococcal sepsis/DIC {k: waterhouse-friderichsen; meningococc}
BP-en12-12 [hi] Autoimmune polyglandular syndromes: APS-1 (AIRE; mucocutaneous candidiasis, hypoparathyroidism, Addison) and APS-2 (Addison + autoimmune thyroid disease + type 1 diabetes) {k: aire; mucocutaneous candidiasis}
BP-en12-13 [hi] Glucocorticoid drugs and potency (hydrocortisone, prednisone, methylprednisolone, dexamethasone); fludrocortisone for mineralocorticoid replacement {k: fludrocortisone; prednisone; dexamethasone}
BP-en12-14 [hi] Glucocorticoid adverse effects: iatrogenic Cushing, HPA suppression (taper), hyperglycemia, osteoporosis, avascular necrosis, cataracts, psychosis, peptic ulcer risk with NSAIDs, infection, growth suppression, neutrophilia with lymphopenia/eosinopenia {k: avascular necrosis; cataract; taper}
BP-en12-15 [mid] Steroidogenesis blockers: ketoconazole, metyrapone (11-beta-hydroxylase), osilodrostat, mitotane (adrenolytic); mifepristone blocks the glucocorticoid receptor; pasireotide for Cushing disease {k: metyrapone; mitotane}
BP-en12-16 [mid] Adrenoleukodystrophy: VLCFA accumulation, adrenal insufficiency in boys {k: adrenoleukodystrophy|vlcfa}
BP-en12-17 [lo] Metyrapone stimulation test: metyrapone blocks 11-beta-hydroxylase; normally cortisol falls and ACTH and 11-deoxycortisol rise; in primary adrenal insufficiency ACTH is high but 11-deoxycortisol stays low; in secondary or tertiary insufficiency both stay low {k: metyrapone; 11-deoxycortisol}
BP-en12-18 [mid] Adrenal morphology in Cushing syndrome: ACTH-dependent causes (pituitary adenoma, ectopic ACTH) give bilateral adrenal cortical hyperplasia; exogenous glucocorticoids suppress ACTH and cause bilateral cortical atrophy; a cortisol-secreting adenoma atrophies the other gland {k: bilateral adrenal hyperplasia|bilateral cortical hyperplasia; bilateral cortical atrophy|bilateral adrenal atrophy}

## en13 — Aldosterone, the adrenal medulla and endocrine hypertension
BP-en13-01 [hi] Primary hyperaldosteronism (Conn): adenoma or bilateral hyperplasia; hypertension, hypokalemia (not always), metabolic alkalosis, LOW renin, no edema (aldosterone escape) {k: conn; low renin; aldosterone escape}
BP-en13-02 [hi] Screen with aldosterone:renin ratio; confirm with salt loading; CT then adrenal venous sampling; adenoma -> surgery; hyperplasia -> spironolactone/eplerenone {k: aldosterone-to-renin|aldosterone:renin|aldosterone to renin; venous sampling}
BP-en13-03 [hi] Secondary hyperaldosteronism: HIGH renin (renal artery stenosis, heart failure, cirrhosis, nephrotic syndrome, diuretics) {k: secondary hyperaldosteronism; renal artery stenosis}
BP-en13-04 [mid] Mineralocorticoid excess with low aldosterone: licorice/11-beta-HSD2 inhibition, apparent mineralocorticoid excess, Liddle syndrome (ENaC gain; amiloride), 11-beta-hydroxylase deficiency {k: licorice; liddle; 11-beta-hsd2|11β-hsd2}
BP-en13-05 [hi] Pheochromocytoma: chromaffin tumor; episodic hypertension, headache, palpitations, sweating, pallor; plasma free or urine metanephrines; chromogranin; zellballen {k: pheochromocytoma; metanephrine; zellballen}
BP-en13-06 [hi] Pheochromocytoma genetics: MEN2A/2B (RET), von Hippel-Lindau (bilateral pheo, hemangioblastoma, RCC; chromosome 3), NF1, SDH (paraganglioma) {k: von hippel-lindau|vhl; nf1; paraganglioma}
BP-en13-07 [hi] Pheochromocytoma treatment: alpha blockade first (phenoxybenzamine, irreversible) then beta-blocker, then surgery; beta first risks unopposed alpha crisis {k: phenoxybenzamine; unopposed}
BP-en13-08 [hi] Neuroblastoma: children, adrenal medulla, abdominal mass that crosses the midline, opsoclonus-myoclonus, high HVA/VMA, N-myc amplification, Homer-Wright rosettes {k: neuroblastoma; n-myc|mycn; homer-wright}
BP-en13-09 [mid] Adrenal incidentaloma: test for cortisol, catecholamine and aldosterone excess; resect if > 4 cm or suspicious {k: incidentaloma}
BP-en13-10 [mid] Catecholamine synthesis: tyrosine -> DOPA -> dopamine -> norepinephrine -> epinephrine (PNMT); VMA is the end product {k: tyrosine; vma|vanillylmandelic}
BP-en13-11 [mid] Aldosterone mechanism: nuclear mineralocorticoid receptor in collecting-duct principal cells increases ENaC and Na+/K+-ATPase (sodium retention, potassium secretion) and alpha-intercalated cell H+ secretion -> hypokalemic metabolic alkalosis {k: principal cell; enac; intercalated}

## en14 — Insulin, glucagon and fuel regulation
BP-en14-01 [hi] Islets: beta cells (insulin, center), alpha cells (glucagon, periphery), delta cells (somatostatin) {k: beta cell; alpha cell; delta cell}
BP-en14-02 [hi] Preproinsulin -> proinsulin -> insulin + C-peptide; C-peptide marks endogenous insulin (low in factitious insulin use) {k: c-peptide; proinsulin}
BP-en14-03 [hi] Beta-cell secretion: glucose enters by GLUT2, ATP closes K-ATP channels, depolarization opens Ca channels, exocytosis; sulfonylureas act on the same channel {k: glut2; k-atp|katp; depolariz}
BP-en14-04 [hi] Incretins (GLP-1, GIP) make oral glucose release more insulin than IV glucose {k: incretin; glp-1; gip}
BP-en14-05 [hi] Insulin receptor is a tyrosine kinase; PI3K pathway moves GLUT4 into muscle and fat membranes; GLUT1/3 (brain, RBC) are insulin-independent {k: glut4; glut1; insulin-independent}
BP-en14-06 [hi] Insulin actions: glycogen, fat and protein synthesis; K+ uptake into cells; suppresses gluconeogenesis, lipolysis, ketogenesis {k: glycogen synthesis|glycogenesis; ketogenesis; potassium}
BP-en14-07 [hi] Glucagon: glycogenolysis, gluconeogenesis, lipolysis, ketogenesis; released by hypoglycemia and amino acids; suppressed by insulin and glucose {k: glucagon; glycogenolysis}
BP-en14-08 [mid] Counter-regulatory hormones: glucagon, epinephrine, cortisol, GH {k: counter-regulatory|counterregulatory}
BP-en14-09 [mid] Fed vs fasting fuel switch; brain uses ketones in prolonged starvation {k: fasting; ketone}
BP-en14-10 [mid] Insulin secretion regulators beyond glucose: stimulated by incretins, amino acids, vagal (M3) input and beta-2 agonists; inhibited by alpha-2 stimulation (catecholamines during stress) and somatostatin {k: alpha-2|α2; beta-2|β2}
BP-en14-11 [hi] Liver enzyme switches: insulin (dephosphorylation) activates glycogen synthase and PFK-2 (more fructose-2,6-bisphosphate, so glycolysis); glucagon (cAMP/PKA phosphorylation) activates glycogen phosphorylase and FBPase-2 (gluconeogenesis); muscle lacks glucagon receptors and glucose-6-phosphatase, so its glycogen fuels only the muscle {k: glycogen synthase; glycogen phosphorylase; fructose-2,6-bisphosphate}
BP-en14-12 [mid] Insulin and fat: activates adipose lipoprotein lipase (triglyceride uptake) and acetyl-CoA carboxylase (malonyl-CoA blocks CPT-1, halting fatty-acid oxidation and ketogenesis); inhibits hormone-sensitive lipase (lipolysis) {k: lipoprotein lipase; hormone-sensitive lipase; malonyl-coa}
BP-en14-13 [mid] Muscle contraction recruits GLUT4 without insulin, so exercise lowers glucose (exercise-induced hypoglycemia in insulin-treated diabetes) {k: exercise; glut4}
BP-en14-14 [mid] Ketone use: the liver makes ketone bodies but cannot use them (lacks thiophorase); brain and muscle oxidize them in prolonged fasting; red cells cannot (no mitochondria) {k: thiophorase; mitochondria}
BP-en14-15 [mid] Beta-cell glucokinase (low affinity, high Km) is the glucose sensor that sets the insulin-secretion threshold; heterozygous loss (glucokinase MODY) raises the threshold and gives mild, stable, lifelong fasting hyperglycemia {k: glucokinase; glucose sensor}
BP-en14-16 [mid] Only skeletal muscle and adipose tissue need insulin for glucose uptake (GLUT4); liver, beta cells, kidney and intestine use GLUT2, and brain, RBCs and placenta use GLUT1 or GLUT3, all insulin-independent {k: glut2; insulin-independent}

## en15 — Diabetes mellitus: types, diagnosis and chronic complications
BP-en15-01 [hi] Type 1: autoimmune beta-cell destruction (GAD65, insulin, IA-2, ZnT8 antibodies), HLA-DR3/DR4, insulitis, absolute insulin deficiency, ketoacidosis-prone {k: gad65|gad; hla-dr4; insulitis}
BP-en15-02 [hi] Type 2: insulin resistance plus progressive beta-cell failure; obesity; strong twin concordance; islet amyloid (amylin/IAPP); acanthosis nigricans {k: insulin resistance; amyloid; acanthosis nigricans}
BP-en15-03 [hi] Diagnosis: fasting glucose >= 126, 2-h OGTT >= 200, HbA1c >= 6.5%, random >= 200 with symptoms; prediabetes ranges {k: 126; 6.5}
BP-en15-04 [hi] Nonenzymatic glycation (AGEs) -> hyaline arteriolosclerosis, nephropathy (Kimmelstiel-Wilson nodules, albuminuria), retinopathy (microaneurysms, neovascularization via VEGF) {k: kimmelstiel-wilson; glycation; neovascular}
BP-en15-05 [hi] Osmotic (sorbitol) damage via aldose reductase in Schwann cells, lens, retina, kidney -> neuropathy, cataracts {k: sorbitol; aldose reductase}
BP-en15-06 [hi] Neuropathy: stocking-glove sensory loss, autonomic (gastroparesis, erectile dysfunction, orthostasis), foot ulcers {k: stocking-glove|stocking and glove; gastroparesis}
BP-en15-07 [hi] Macrovascular disease: coronary disease is the leading cause of death; ACE inhibitors/ARBs and SGLT2 inhibitors slow nephropathy {k: coronary; ace inhibitor}
BP-en15-08 [mid] Infections in diabetes: mucormycosis (DKA), malignant otitis externa (Pseudomonas), emphysematous pyelonephritis, candidiasis {k: mucor|mucormycosis; malignant otitis}
BP-en15-09 [mid] MODY: autosomal dominant; glucokinase (mild) and HNF1A (sulfonylurea-sensitive) {k: mody; glucokinase}
BP-en15-10 [mid] HbA1c reflects ~3 months; falsely low with shortened RBC survival (hemolysis) {k: hba1c; hemoly}
BP-en15-11 [mid] Secondary diabetes: pancreatic destruction (chronic pancreatitis, cystic fibrosis, hemochromatosis "bronze diabetes", pancreatectomy) or counter-regulatory hormone excess (glucocorticoids/Cushing syndrome, acromegaly, pheochromocytoma, glucagonoma) {k: hemochromatosis; cystic fibrosis; glucocorticoid}
BP-en15-12 [hi] Diabetic nephropathy sequence: glomerular hyperfiltration (high GFR from efferent arteriolar hyalinosis and glomerular hypertension) -> GBM thickening and diffuse mesangial expansion -> Kimmelstiel-Wilson nodules; microalbuminuria is the first sign; ACE inhibitors/ARBs lower intraglomerular pressure {k: hyperfiltration; efferent; mesangial}
BP-en15-13 [mid] Diabetic ischemic oculomotor (CN III) palsy spares the pupil (central motor fibers infarct; peripheral parasympathetic fibers survive), unlike a compressive posterior communicating artery aneurysm {k: pupil; oculomotor|cn iii|third nerve}
BP-en15-14 [hi] Classic presentation of diabetes: polyuria and polydipsia (glucosuria drives osmotic diuresis), polyphagia and weight loss (catabolism without insulin action); type 1 typically presents acutely in youth, often as DKA {k: polyuria; polydipsia; polyphagia}

## en16 — Diabetic emergencies and hypoglycemia
BP-en16-01 [hi] DKA: insulin deficiency + glucagon excess -> ketogenesis (beta-hydroxybutyrate, acetoacetate), anion-gap acidosis, Kussmaul breathing, fruity breath, abdominal pain, dehydration {k: beta-hydroxybutyrate|β-hydroxybutyrate; anion gap; kussmaul}
BP-en16-02 [hi] DKA potassium: serum K often high, total body K depleted (acidosis and insulin lack shift K out; osmotic diuresis loses it) -> replete K with/before insulin {k: total body potassium|total-body potassium}
BP-en16-03 [hi] DKA treatment: IV fluids, IV insulin, potassium, add dextrose when glucose ~200-250; complications: hypokalemia, hypoglycemia, cerebral edema (children), hypophosphatemia {k: cerebral edema; dextrose}
BP-en16-04 [hi] HHS: type 2, extreme hyperglycemia and hyperosmolality, minimal ketosis (residual insulin blocks ketogenesis), profound dehydration, altered mental status {k: hyperosmolar; residual insulin}
BP-en16-05 [hi] Precipitants: infection, missed insulin, MI, SGLT2 inhibitors (euglycemic DKA) {k: euglycemic}
BP-en16-06 [hi] Hypoglycemia work-up (Whipple triad): insulinoma (high insulin AND C-peptide, negative sulfonylurea screen), sulfonylurea (high C-peptide, positive screen), exogenous insulin (high insulin, low C-peptide) {k: whipple; insulinoma; sulfonylurea screen|sulfonylurea level}
BP-en16-07 [mid] Other hypoglycemia: alcohol, adrenal insufficiency, hypopituitarism, post-bariatric (dumping), sepsis {k: alcohol}
BP-en16-08 [mid] Hypoglycemia symptoms: adrenergic (tremor, sweating, palpitations) then neuroglycopenic (confusion, seizure); beta-blockers mask warning signs {k: neuroglycopenic; beta-blocker}
BP-en16-09 [mid] The urine nitroprusside ketone test detects acetoacetate but not beta-hydroxybutyrate (the dominant ketone in DKA and alcoholic ketoacidosis because of high NADH), so it underestimates ketosis {k: nitroprusside; acetoacetate}
BP-en16-10 [mid] Severe hypoglycemia treatment: IV dextrose; IM or intranasal glucagon without IV access (glucagon needs hepatic glycogen, so it fails in alcohol- or starvation-related hypoglycemia) {k: dextrose; glucagon; glycogen}

## en17 — Diabetes and weight-management pharmacology
BP-en17-01 [hi] Insulins: rapid (lispro, aspart, glulisine), short (regular; IV for DKA and hyperkalemia), intermediate (NPH), long (glargine, detemir, degludec); hypoglycemia, weight gain, lipodystrophy {k: lispro; glargine; nph}
BP-en17-02 [hi] Metformin: lowers hepatic gluconeogenesis, raises insulin sensitivity; first line; weight neutral, no hypoglycemia; GI upset, B12 deficiency, lactic acidosis (avoid in severe renal failure, contrast, hypoxia) {k: metformin; lactic acidosis; b12}
BP-en17-03 [hi] Sulfonylureas (glipizide, glyburide, glimepiride) and meglitinides (repaglinide, nateglinide) close K-ATP channels; hypoglycemia, weight gain; 1st-gen chlorpropamide disulfiram-like {k: glipizide|glyburide; repaglinide}
BP-en17-04 [hi] Thiazolidinediones (pioglitazone, rosiglitazone): PPAR-gamma agonists; weight gain, edema, heart failure (contraindicated), fractures, hepatotoxicity; bladder cancer (pioglitazone) {k: ppar; pioglitazone; heart failure}
BP-en17-05 [hi] DPP-4 inhibitors (sitagliptin etc.): raise endogenous incretins; weight neutral {k: dpp-4; sitagliptin|gliptin}
BP-en17-06 [hi] GLP-1 receptor agonists (exenatide, liraglutide, semaglutide, dulaglutide): glucose-dependent insulin release, less glucagon, slower gastric emptying, satiety, weight loss, CV benefit; nausea, pancreatitis, gallbladder disease; avoid with personal/family medullary thyroid cancer/MEN2 {k: semaglutide; gastric emptying; medullary}
BP-en17-07 [hi] Tirzepatide: dual GIP/GLP-1 receptor agonist for diabetes and weight {k: tirzepatide}
BP-en17-08 [hi] SGLT2 inhibitors (-gliflozins): block proximal tubule glucose reabsorption; glucosuria, genital mycotic infections, UTIs, volume depletion, euglycemic DKA; heart failure and CKD benefit {k: sglt2; gliflozin; mycotic}
BP-en17-09 [mid] Alpha-glucosidase inhibitors (acarbose, miglitol): flatulence, diarrhea; treat their hypoglycemia with glucose, not sucrose {k: acarbose}
BP-en17-10 [mid] Pramlintide (amylin analog): slows gastric emptying, lowers glucagon; hypoglycemia with insulin {k: pramlintide|amylin}
BP-en17-11 [hi] Add-on logic for type 2: metformin first; GLP-1 RA or SGLT2 inhibitor when cardiovascular/renal/heart-failure disease or weight loss matters; insulin when glucose very high {k: add-on|second-line; cardiovascular}
BP-en17-12 [mid] Weight-management drugs: phentermine (sympathomimetic), phentermine/topiramate, naltrexone/bupropion, orlistat (lipase inhibitor; steatorrhea, fat-soluble vitamin loss), GLP-1 RAs, tirzepatide {k: orlistat; phentermine; naltrexone}
BP-en17-13 [mid] Clinically important interactions: beta-blockers mask hypoglycemia; sulfonylurea hypoglycemia with sulfonamides/fluconazole/renal failure; metformin with iodinated contrast {k: contrast}
BP-en17-14 [lo] Course-specific items (oral GLP-1 RAs, berberine claim, drugs for weight gain, Medicare GLP-1 Bridge) must come from the ENDO-PHARM lecture text, not memory {k: oral}
BP-en17-15 [mid] Weight-loss drug adverse effects (ENDO-PHARM lecture): phentermine (sympathomimetic; palpitations, raised blood pressure; avoid in cardiovascular disease), phentermine/topiramate (birth defects such as orofacial clefts; topiramate inhibits carbonic anhydrase -> metabolic acidosis, kidney stones), naltrexone/bupropion (precipitates opioid withdrawal; bupropion lowers the seizure threshold) {k: birth defect|cleft|teratogen; opioid; seizure}

## en18 — Endocrine tumor syndromes: MEN, pancreatic neuroendocrine tumors and carcinoid
BP-en18-01 [hi] MEN1 (menin, tumor suppressor, chromosome 11): pituitary, parathyroid, pancreatic/duodenal tumors (gastrinoma, insulinoma, VIPoma, glucagonoma) {k: men1|men 1; menin}
BP-en18-02 [hi] MEN2A (RET gain of function): medullary thyroid carcinoma, pheochromocytoma, parathyroid hyperplasia {k: men2a|men 2a; ret}
BP-en18-03 [hi] MEN2B: medullary thyroid carcinoma, pheochromocytoma, mucosal neuromas, marfanoid habitus, intestinal ganglioneuromatosis {k: men2b|men 2b; mucosal neuroma; marfanoid}
BP-en18-04 [hi] Zollinger-Ellison (gastrinoma): refractory/jejunal ulcers, diarrhea; secretin stimulation raises gastrin; MEN1 {k: zollinger-ellison; gastrinoma; secretin}
BP-en18-05 [hi] VIPoma (watery diarrhea, hypokalemia, achlorhydria), glucagonoma (necrolytic migratory erythema, diabetes, DVT, weight loss), somatostatinoma (diabetes, gallstones, steatorrhea, achlorhydria) {k: vipoma; necrolytic migratory erythema; somatostatinoma}
BP-en18-06 [hi] Carcinoid syndrome: serotonin from liver metastases bypassing first-pass metabolism; flushing, diarrhea, wheezing, right-sided valve disease; high urinary 5-HIAA; niacin deficiency; octreotide {k: 5-hiaa; flushing; tricuspid|right-sided}
BP-en18-07 [mid] Neuroendocrine tumor histology: salt-and-pepper chromatin, chromogranin A, synaptophysin {k: chromogranin; synaptophysin}
BP-en18-08 [mid] Insulinoma in MEN1; pheochromocytoma screening before surgery in MEN2 {k: screen}
BP-en18-09 [mid] All MEN syndromes are autosomal dominant: MEN1 = loss of the menin tumor suppressor (two hits); MEN2A/2B = activating mutations of the RET proto-oncogene (a receptor tyrosine kinase) {k: autosomal dominant; tyrosine kinase}

---

## rp1 — The pelvis, pelvic floor and pelvic viscera
BP-rp1-01 [hi] True vs false pelvis (pelvic brim), pelvic inlet/outlet; obstetric measures: diagonal conjugate, interspinous distance, intertuberous distance, subpubic arch; gynecoid pelvis {k: diagonal conjugate; interspinous; subpubic}
BP-rp1-02 [hi] Pelvic floor: levator ani (pubococcygeus, puborectalis, iliococcygeus) + coccygeus; innervation S3-S4 and nerve to levator ani (pudendal to external sphincter); support failure -> prolapse, incontinence {k: levator ani; puborectalis; prolapse}
BP-rp1-03 [hi] Peritoneal pouches: rectouterine pouch of Douglas (lowest point; fluid collects; culdocentesis), vesicouterine pouch; rectovesical pouch in males {k: rectouterine; douglas}
BP-rp1-04 [hi] Ligaments and what they carry: infundibulopelvic/suspensory ligament of ovary (ovarian vessels; ligated in oophorectomy; ureter nearby), cardinal ligament (uterine vessels), round ligament (through inguinal canal; gubernaculum remnant), ovarian ligament, broad ligament (mesosalpinx, mesovarium, mesometrium), uterosacral ligament {k: infundibulopelvic|suspensory ligament; cardinal ligament; round ligament}
BP-rp1-05 [hi] "Water under the bridge": ureter passes under the uterine artery at the cardinal ligament; injured in hysterectomy {k: water under the bridge; ureter}
BP-rp1-06 [hi] Arterial supply: ovarian/testicular arteries from the aorta; uterine, vaginal, internal pudendal from anterior division of internal iliac {k: internal iliac; ovarian artery}
BP-rp1-07 [hi] Gonadal veins: left -> left renal vein, right -> IVC (left varicocele; nutcracker) {k: left renal vein}
BP-rp1-08 [mid] Surgical hemostasis: ligation of uterine artery, ovarian vessels, internal iliac anterior division; collateral flow keeps the pelvis perfused {k: ligation; collateral}
BP-rp1-09 [mid] Pelvic fascia (parietal, visceral, endopelvic) and the pelvic organ support system {k: endopelvic}
BP-rp1-10 [mid] Sacral plexus (L4-S4) on piriformis; piriformis divides the greater sciatic foramen into suprapiriform (superior gluteal) and infrapiriform (inferior gluteal, sciatic, pudendal) spaces {k: sacral plexus; piriformis; greater sciatic}
BP-rp1-11 [hi] Autonomic supply: pelvic splanchnics (S2-S4, parasympathetic) and hypogastric plexus (sympathetic); pain from pelvic viscera {k: pelvic splanchnic; hypogastric}
BP-rp1-12 [hi] Uterus parts, anteverted/anteflexed position, layers (endometrium, myometrium, perimetrium); ovary position in the ovarian fossa {k: anteverted|anteflexed; myometrium}
BP-rp1-13 [mid] Male pelvic viscera: ductus deferens path, seminal vesicles, ejaculatory ducts, prostate relations, prostatic urethra {k: ejaculatory duct; seminal vesicle}
BP-rp1-14 [mid] Pelvic organ prolapse by compartment: anterior wall -> cystocele (bladder), posterior wall -> rectocele (rectum), apical -> uterine or vaginal vault prolapse; risks are vaginal childbirth, age and estrogen loss {k: cystocele; rectocele}
BP-rp1-15 [mid] Micturition: parasympathetic pelvic splanchnics (S2-S4, muscarinic M3) contract the detrusor to void; sympathetic hypogastric fibers relax the detrusor and close the internal urethral sphincter for storage {k: detrusor; muscarinic|m3}
BP-rp1-16 [mid] In males the ductus deferens crosses over the ureter near the posterior bladder wall (the male version of "water under the bridge"), a relation at risk in pelvic surgery {k: ductus deferens; ureter}

## rp2 — The perineum, external genitalia and lymphatic drainage
BP-rp2-01 [hi] Urogenital vs anal triangles; perineal membrane; superficial and deep perineal pouches and their contents {k: perineal membrane; superficial perineal; deep perineal}
BP-rp2-02 [hi] Colles fascia: anterior (bulbar/spongy) urethral rupture leaks urine into scrotum, penis, perineum and lower abdominal wall but not the thighs; posterior (membranous) injury with pelvic fracture leaks into the retropubic space {k: colles; urethral rupture|urethral injury; retropubic}
BP-rp2-03 [hi] Pudendal nerve (S2-S4) passes around the ischial spine; pudendal block landmark; supplies perineum and external anal/urethral sphincters {k: pudendal; ischial spine}
BP-rp2-04 [hi] Erection parasympathetic (pelvic splanchnic), emission sympathetic (hypogastric), ejaculation somatic (pudendal) — "point, squeeze, shoot" {k: emission; ejaculation; parasympathetic}
BP-rp2-05 [hi] Lymph drainage: ovaries/testes -> para-aortic; uterus/cervix/upper vagina -> internal/external iliac and obturator; distal vagina, vulva, scrotum -> superficial inguinal; glans -> deep inguinal {k: para-aortic; superficial inguinal}
BP-rp2-06 [hi] Pectinate line: above = internal hemorrhoids (painless), adenocarcinoma, visceral nerves, internal iliac nodes; below = external hemorrhoids (painful), squamous cell carcinoma, inferior rectal (pudendal) nerve, superficial inguinal nodes {k: pectinate; internal hemorrhoid; external hemorrhoid}
BP-rp2-07 [hi] Vulva: mons, labia majora/minora, vestibule, clitoris, vestibular bulbs, Bartholin glands (posterolateral vestibule at 4 and 8 o'clock) {k: vestibule; bartholin}
BP-rp2-08 [hi] Male urethra parts: prostatic, membranous (through external sphincter), spongy/penile; penis: corpora cavernosa and corpus spongiosum; tunica albuginea {k: membranous urethra|membranous; corpus spongiosum; corpora cavernosa}
BP-rp2-09 [mid] Internal urethral sphincter (smooth, sympathetic) vs external (skeletal, pudendal) {k: internal urethral sphincter|internal sphincter; external urethral sphincter|external sphincter}
BP-rp2-10 [mid] Ischioanal (ischiorectal) fossa and Alcock (pudendal) canal {k: ischioanal|ischiorectal; alcock|pudendal canal}
BP-rp2-11 [mid] Pudendal nerve branches in the pudendal (Alcock) canal: inferior rectal (external anal sphincter, perianal skin), perineal (perineal muscles, posterior labial or scrotal skin) and dorsal nerve of the penis or clitoris (sensation of the glans); the ilioinguinal nerve supplies the anterior scrotum or labia {k: inferior rectal; dorsal nerve; ilioinguinal}
BP-rp2-12 [mid] Anal sphincters: internal (smooth muscle, involuntary, autonomic) vs external (skeletal, voluntary, inferior rectal branch of the pudendal nerve); the perineal body is the fibromuscular center that anchors the sphincter and perineal muscles and is torn in obstetric lacerations {k: internal anal sphincter; external anal sphincter; perineal body}
BP-rp2-13 [lo] Lymph details: the uterine fundus can drain along the round ligament to superficial inguinal nodes; the prostate drains to internal iliac, obturator and sacral nodes; penile shaft skin drains to superficial inguinal nodes {k: round ligament; internal iliac}

## rp3 — Breast anatomy and histology
BP-rp3-01 [hi] Terminal duct lobular unit (lobules + terminal ducts): most breast disease starts here; lactiferous ducts and sinuses (ampulla) open at the nipple {k: terminal duct lobular unit|tdlu; lactiferous}
BP-rp3-02 [hi] Two-cell epithelium: luminal cells over myoepithelial cells; loss of myoepithelium marks invasion {k: myoepithelial; luminal}
BP-rp3-03 [hi] Cooper (suspensory) ligaments: tumor tethering causes skin dimpling/retraction {k: cooper; retraction|dimpling}
BP-rp3-04 [hi] Lymph: ~75% to axillary nodes (levels I-III), medial quadrants also to internal mammary nodes; sentinel node {k: axillary; internal mammary; sentinel}
BP-rp3-05 [mid] Blood supply: internal thoracic (mammary), lateral thoracic, thoracoacromial, intercostal arteries {k: internal thoracic; lateral thoracic}
BP-rp3-06 [hi] Axillary surgery nerves: long thoracic (serratus anterior -> winged scapula), thoracodorsal (latissimus), intercostobrachial (medial arm numbness) {k: long thoracic; winged scapula; thoracodorsal}
BP-rp3-07 [mid] Retromammary space and pectoral fascia (fixation to chest wall signals deep invasion); axillary tail of Spence; Montgomery tubercles {k: retromammary; montgomery}
BP-rp3-08 [mid] Hormonal changes: estrogen grows ducts, progesterone grows lobules/alveoli; prolactin + oxytocin in lactation {k: prolactin; alveoli}
BP-rp3-09 [mid] Resting vs lactating breast histology: resting = small ducts and sparse lobules in fibrous and fatty stroma; lactating = large secretory alveoli full of milk (proteins released by merocrine exocytosis, lipid droplets by apocrine secretion) {k: apocrine; merocrine; lactating}

## rp4 — Early embryology, the placenta and twinning
BP-rp4-01 [hi] Fertilization in the ampulla; implantation ~day 6; hCG from syncytiotrophoblast detectable ~1 week after fertilization {k: ampulla; implantation; syncytiotrophoblast}
BP-rp4-02 [hi] Week 2 "rule of 2s" (bilaminar disc: epiblast/hypoblast; 2 cavities; 2 trophoblast layers) and week 3 "rule of 3s" (gastrulation, trilaminar disc, notochord, neural plate) {k: bilaminar; gastrulation; trilaminar}
BP-rp4-03 [hi] Embryonic period weeks 3-8 = organogenesis = peak teratogen sensitivity; before week 3 all-or-none {k: organogenesis; all-or-none}
BP-rp4-04 [hi] Germ layer derivatives (surface ectoderm, neuroectoderm, neural crest, mesoderm, endoderm) with key anomalies {k: ectoderm; mesoderm; endoderm}
BP-rp4-05 [hi] Gestational age (from LMP) is ~2 weeks more than embryonic/fertilization age {k: gestational age; fertilization age|embryonic age}
BP-rp4-06 [hi] Placenta: fetal side chorion frondosum (cytotrophoblast + syncytiotrophoblast), maternal side decidua basalis; maternal blood in intervillous spaces {k: decidua basalis; cytotrophoblast; intervillous}
BP-rp4-07 [hi] Placental hormones: hCG (maintains corpus luteum until the placenta makes progesterone at ~8-10 weeks), hPL (insulin resistance, lipolysis), estriol (needs fetal adrenal DHEA-S), progesterone {k: corpus luteum; human placental lactogen|hpl; estriol}
BP-rp4-08 [hi] Umbilical cord: two arteries (deoxygenated, from internal iliacs) and one vein (oxygenated); single umbilical artery associates with renal/other anomalies {k: umbilical arter; single umbilical artery}
BP-rp4-09 [hi] Allantois -> urachus (patent urachus/cyst/sinus); vitelline duct -> Meckel diverticulum; yolk sac {k: urachus; vitelline}
BP-rp4-10 [hi] Twinning: dizygotic always dichorionic-diamniotic; monozygotic timing: 0-4 d di/di, 4-8 d mono/di (twin-twin transfusion), 8-12 d mono/mono, >13 d conjoined {k: dizygotic; monozygotic; twin-twin}
BP-rp4-11 [mid] Amniotic fluid: fetal urine and swallowing; oligohydramnios (renal agenesis -> Potter sequence) and polyhydramnios (esophageal/duodenal atresia, anencephaly, maternal diabetes) {k: potter; polyhydramnios; oligohydramnios}
BP-rp4-12 [mid] Extraembryonic membranes: amnion, chorion, yolk sac, allantois {k: amnion; chorion}
BP-rp4-13 [mid] Fertilization steps: capacitation in the female tract, the acrosome reaction lets sperm penetrate the zona pellucida, the cortical (zona) reaction blocks polyspermy, then the oocyte completes meiosis II {k: capacitation; acrosome reaction|acrosomal reaction; cortical reaction|zona reaction}
BP-rp4-14 [mid] Week 1: cleavage -> morula (about day 3) -> blastocyst (about day 5) with an inner cell mass (embryo) and trophoblast (placenta); the blastocyst hatches from the zona pellucida and implants about day 6 {k: morula; blastocyst; inner cell mass}
BP-rp4-15 [lo] Persistent primitive streak remnants form a sacrococcygeal teratoma (the most common neonatal tumor; tissues from all three germ layers) {k: sacrococcygeal; primitive streak}
BP-rp4-16 [mid] Errors in morphogenesis: malformation (intrinsic developmental error), deformation (extrinsic compression, e.g., oligohydramnios), disruption (breakdown of normal tissue, e.g., amniotic band syndrome), sequence (one defect cascading, e.g., Potter sequence) {k: malformation; deformation; disruption; amniotic band}
BP-rp4-17 [mid] Twin-twin transfusion syndrome (monochorionic placenta with vascular anastomoses): the donor twin becomes anemic and growth-restricted with oligohydramnios; the recipient becomes polycythemic and volume-overloaded with polyhydramnios and can develop heart failure {k: donor; recipient; polycythemi}

## rp5 — Sex determination and genital development
BP-rp5-01 [hi] SRY on Y -> testis determining factor -> Sertoli cells make AMH (Mullerian regression) and Leydig cells make testosterone (Wolffian development) {k: sry; anti-mullerian|anti-müllerian|amh; leydig}
BP-rp5-02 [hi] Wolffian (mesonephric) derivatives: epididymis, vas deferens, seminal vesicle, ejaculatory duct ("SEED"); remnant in females = Gartner duct cyst {k: mesonephric; gartner}
BP-rp5-03 [hi] Mullerian (paramesonephric) derivatives: fallopian tubes, uterus, cervix, upper vagina; lower vagina from urogenital sinus; female development is the default {k: paramesonephric; urogenital sinus}
BP-rp5-04 [hi] DHT (5-alpha-reductase) builds the external genitalia and prostate; testosterone builds Wolffian ducts {k: dht|dihydrotestosterone; 5-alpha|5α}
BP-rp5-05 [hi] Homologs: genital tubercle -> glans penis/clitoris; urogenital folds -> ventral penis (spongy urethra)/labia minora; labioscrotal swellings -> scrotum/labia majora; prostate/Skene glands; bulbourethral/Bartholin glands {k: genital tubercle; labioscrotal; urogenital fold}
BP-rp5-06 [hi] Gubernaculum -> ovarian and round ligaments in females, anchors testis in males; processus vaginalis -> tunica vaginalis {k: gubernaculum; processus vaginalis}
BP-rp5-07 [hi] Mullerian anomalies: agenesis (MRKH: normal ovaries and secondary sex characteristics, absent uterus/upper vagina, primary amenorrhea), didelphys (failed fusion), bicornuate (incomplete fusion), septate (failed resorption; most common; recurrent pregnancy loss), unicornuate {k: mayer-rokitansky|mrkh; didelphys; septate}
BP-rp5-08 [hi] Imperforate hymen and transverse vaginal septum: cyclic pain, hematocolpos, primary amenorrhea; vaginal atresia {k: imperforate hymen; hematocolpos}
BP-rp5-09 [hi] Hypospadias (urethral folds fail to fuse; ventral opening; common) vs epispadias (abnormal genital tubercle position; dorsal; bladder exstrophy) {k: hypospadias; epispadias; exstrophy}
BP-rp5-10 [mid] Mullerian anomalies travel with renal anomalies (shared mesonephric origin): unilateral renal agenesis {k: renal agenesis}
BP-rp5-11 [mid] Gonads arise from the genital ridge; primordial germ cells migrate from the yolk sac {k: genital ridge; primordial germ}
BP-rp5-12 [mid] Spermatic cord coverings come from the abdominal wall layers the testis passes during descent: external spermatic fascia (external oblique), cremasteric muscle and fascia (internal oblique), internal spermatic fascia (transversalis fascia); cord contents are the vas deferens, testicular artery, pampiniform plexus and genital branch of the genitofemoral nerve {k: external spermatic fascia; cremaster; internal spermatic fascia}
BP-rp5-13 [mid] The endodermal urogenital sinus forms the prostate and bulbourethral (Cowper) glands in males and the lower vagina, Skene (paraurethral) and Bartholin (greater vestibular) glands in females {k: urogenital sinus; skene}

## rp6 — Disorders of sex development and sex chromosome disorders
BP-rp6-01 [hi] Complete androgen insensitivity (46,XY): androgen receptor defect; female external genitalia, blind vaginal pouch, no uterus, testes (inguinal/abdominal); high testosterone, estrogen and LH; scant pubic/axillary hair {k: androgen insensitivity; blind; androgen receptor}
BP-rp6-02 [hi] 5-alpha-reductase deficiency (46,XY): ambiguous genitalia at birth, virilizes at puberty; normal testosterone, low DHT {k: 5-alpha-reductase deficiency|5α-reductase deficiency; puberty}
BP-rp6-03 [hi] CAH is the commonest cause of ambiguous genitalia in 46,XX (see en11) {k: congenital adrenal hyperplasia}
BP-rp6-04 [hi] Placental aromatase deficiency: 46,XX virilization and maternal virilization during pregnancy {k: aromatase deficiency}
BP-rp6-05 [hi] Swyer syndrome (46,XY pure gonadal dysgenesis; SRY defect): female external and internal genitalia with streak gonads; high gonadoblastoma risk {k: swyer; streak; gonadoblastoma}
BP-rp6-06 [hi] Turner syndrome (45,X; mosaicism): short stature, streak ovaries, primary amenorrhea with high FSH, webbed neck, lymphedema, coarctation, bicuspid aortic valve, horseshoe kidney, shield chest {k: turner; coarctation; horseshoe}
BP-rp6-07 [hi] Klinefelter (47,XXY): tall, small firm testes, gynecomastia, infertility, female hair pattern; high FSH/LH, low inhibin, low testosterone, high estradiol; Barr body; breast cancer risk {k: klinefelter; inhibin; barr body}
BP-rp6-08 [hi] Kallmann syndrome: failed GnRH neuron migration + anosmia; low GnRH, FSH, LH, sex steroids; delayed puberty {k: kallmann; anosmia}
BP-rp6-09 [mid] 47,XYY (tall, normal fertility), ovotesticular DSD, 46,XX testicular DSD (SRY translocation) {k: xyy; ovotesticular}
BP-rp6-10 [hi] Lab-pattern table: testosterone, DHT, LH, estrogen, AMH/uterus presence separate AIS, 5-ARD, Swyer and CAH {k: amh; uterus}
BP-rp6-11 [mid] Turner lymphatic defects start in fetal life: cystic hygroma (with increased nuchal translucency) on prenatal ultrasound, then webbed neck and lymphedema of the hands and feet in the newborn {k: cystic hygroma; lymphedema}

## rp7 — Puberty: normal, early and late
BP-rp7-01 [hi] Pulsatile GnRH reactivation at puberty (kisspeptin; leptin permissive); gonadarche vs adrenarche (DHEA-S) {k: pulsatile; kisspeptin; adrenarche}
BP-rp7-02 [hi] Girls: thelarche (breast, estrogen) -> pubarche -> growth spurt -> menarche (~2-3 years after thelarche); boys: testicular enlargement first -> pubarche -> growth spurt later {k: thelarche; menarche; testicular enlargement}
BP-rp7-03 [hi] Tanner stages for breast, genitalia, pubic hair; secondary sex characteristics and which hormone drives each {k: tanner}
BP-rp7-04 [hi] Central (GnRH-dependent) precocious puberty: high LH/FSH, advanced bone age; idiopathic in girls, CNS lesions (hypothalamic hamartoma) in boys; treat with continuous GnRH agonist {k: central precocious; hamartoma; gnrh agonist}
BP-rp7-05 [hi] Peripheral (GnRH-independent) precocious puberty: low LH/FSH; CAH, McCune-Albright (GNAS activating, cafe-au-lait, polyostotic fibrous dysplasia), granulosa/Leydig cell tumors, hCG-secreting tumors, exogenous sex steroids {k: peripheral precocious; mccune-albright; cafe-au-lait|café-au-lait}
BP-rp7-06 [hi] Delayed puberty: constitutional delay (most common; delayed bone age; family history), hypogonadotropic (Kallmann, anorexia/athletes, pituitary), hypergonadotropic (Turner, Klinefelter) {k: constitutional delay; hypogonadotropic; hypergonadotropic}
BP-rp7-07 [mid] Normal variants: premature thelarche, premature adrenarche, pubertal gynecomastia {k: premature thelarche; premature adrenarche}
BP-rp7-08 [mid] Work-up: bone age X-ray, LH (basal/GnRH-stimulated), sex steroids, TSH, prolactin, karyotype {k: bone age; karyotype}
BP-rp7-09 [hi] Timing definitions: precocious puberty = pubertal signs before age 8 in girls or 9 in boys; delayed puberty = no breast development by 13 in girls or no testicular enlargement (volume at least 4 mL) by 14 in boys {k: 8 years|age 8|before 8; 9 years|age 9|before 9; 4 ml|4-ml}

## rp8 — The ovary, oogenesis and the menstrual cycle
BP-rp8-01 [hi] Follicle stages: primordial (primary oocyte arrested in prophase I) -> primary -> secondary -> Graafian; corpus luteum -> corpus albicans {k: primordial; prophase i; graafian}
BP-rp8-02 [hi] Oocyte arrests: prophase I until ovulation; metaphase II until fertilization; polar bodies; nondisjunction risk rises with maternal age {k: metaphase ii; polar bod; nondisjunction}
BP-rp8-03 [hi] Two-cell two-gonadotropin model: theca cells (LH) make androgens, granulosa cells (FSH, aromatase) convert them to estradiol {k: theca; granulosa; aromatase}
BP-rp8-04 [hi] Estrogen forms: estradiol (ovary, most potent), estrone (adipose aromatization; postmenopausal, obesity), estriol (placenta) {k: estradiol; estrone; estriol}
BP-rp8-05 [hi] Cycle: variable follicular phase; estrogen positive feedback triggers the LH surge; ovulation ~36 h after surge onset; fixed 14-day luteal phase; menses from progesterone withdrawal {k: lh surge; luteal phase; progesterone withdrawal}
BP-rp8-06 [hi] Progesterone: secretory endometrium, thick cervical mucus, raised basal body temperature; estrogen: proliferative endometrium, thin stretchy (spinnbarkeit) mucus {k: basal body temperature; secretory; proliferative}
BP-rp8-07 [hi] Endometrial histology by phase: proliferative (straight glands, mitoses) vs secretory (subnuclear then supranuclear vacuoles, tortuous glands, spiral arteries, stromal edema/predecidua) {k: subnuclear vacuole; spiral arter}
BP-rp8-08 [mid] Inhibin B (granulosa) suppresses FSH; AMH (granulosa of small follicles) measures ovarian reserve {k: inhibin; ovarian reserve}
BP-rp8-09 [mid] Fallopian tube: ciliated and secretory (peg) cells; fimbriae, ampulla, isthmus; cilia move the oocyte (Kartagener -> infertility/ectopic) {k: ciliated; fimbria}
BP-rp8-10 [mid] Mittelschmerz (ovulation pain); follicular cyst from a follicle that fails to rupture {k: mittelschmerz}
BP-rp8-11 [hi] Cervix histology by site: endocervix mucinous columnar, ectocervix nonkeratinized squamous, transformation zone between (see rp13) {k: endocervix; ectocervix}
BP-rp8-12 [mid] Ploidy and DNA content in gametogenesis: primary oocyte or spermatocyte 2N, 4C (after DNA replication); secondary oocyte or spermatocyte 1N, 2C; ovum or spermatid 1N, 1C {k: 4c; 2c}
BP-rp8-13 [mid] Endometrial layers: the stratum functionalis (fed by spiral arteries) is shed at menses; the stratum basalis (straight arteries) remains and regenerates it; curettage that removes the basalis causes Asherman syndrome {k: functionalis; basalis}
BP-rp8-14 [mid] Hormone curves across a 28-day cycle: estradiol peaks just before the LH surge and rises again in the mid-luteal phase; progesterone peaks about 7 days after ovulation (a day-21 progesterone confirms ovulation); as the corpus luteum regresses, falling estradiol, progesterone and inhibin let FSH rise to recruit the next follicles {k: mid-luteal|midluteal; day 21|day-21}

## rp9 — Amenorrhea, abnormal bleeding, PCOS and female infertility
BP-rp9-01 [hi] Pregnancy first in any amenorrhea; primary amenorrhea (none by 15, or 13 without breasts) vs secondary (none for 3 cycles/6 months) {k: primary amenorrhea; secondary amenorrhea; pregnancy}
BP-rp9-02 [hi] Primary amenorrhea sorted by breasts (estrogen) and uterus: Turner, MRKH, AIS, imperforate hymen, Kallmann, constitutional delay {k: breast; uterus}
BP-rp9-03 [hi] Secondary amenorrhea causes: PCOS, functional hypothalamic (weight loss, exercise, stress -> low GnRH), hyperprolactinemia, thyroid disease, primary ovarian insufficiency, Asherman syndrome, Sheehan {k: functional hypothalamic|hypothalamic amenorrhea; asherman; primary ovarian insufficiency}
BP-rp9-04 [mid] Female athlete triad / relative energy deficiency: amenorrhea, low bone density, low energy availability {k: athlete}
BP-rp9-05 [hi] PCOS: Rotterdam criteria (oligo/anovulation, hyperandrogenism, polycystic ovaries); high LH:FSH, insulin resistance, obesity, acanthosis; risks endometrial hyperplasia/cancer (unopposed estrogen), infertility, diabetes {k: rotterdam; insulin resistance; unopposed estrogen}
BP-rp9-06 [hi] PCOS treatment: weight loss, combined OCPs, progestins (endometrial protection), metformin, spironolactone for hirsutism, letrozole/clomiphene for ovulation {k: letrozole; spironolactone}
BP-rp9-07 [hi] Abnormal uterine bleeding PALM-COEIN (polyp, adenomyosis, leiomyoma, malignancy/hyperplasia; coagulopathy, ovulatory, endometrial, iatrogenic, not classified) {k: palm-coein}
BP-rp9-08 [mid] Primary dysmenorrhea: prostaglandins from endometrium -> NSAIDs; secondary dysmenorrhea (endometriosis, adenomyosis) {k: dysmenorrhea; prostaglandin}
BP-rp9-09 [hi] Hirsutism/virilization work-up: rapid onset or virilization suggests tumor; very high testosterone (ovarian tumor) vs very high DHEA-S (adrenal tumor); 17-OHP for nonclassic CAH {k: dhea-s|dheas; virilization}
BP-rp9-10 [hi] Infertility work-up and ovulation induction: clomiphene (SERM at hypothalamus -> more GnRH; hot flashes, visual changes, multiples), letrozole (first-line in PCOS), gonadotropins, hCG trigger; ovarian hyperstimulation syndrome {k: clomiphene; ovarian hyperstimulation}
BP-rp9-11 [mid] Tubal factor infertility after PID or endometriosis; hysterosalpingography {k: hysterosalpingogra|hsg; tubal}
BP-rp9-12 [mid] Progestin challenge logic: withdrawal bleed means estrogen is present and outflow tract is intact {k: progestin challenge|withdrawal bleed}
BP-rp9-13 [mid] PCOS androgen excess: high LH drives theca-cell androgen production, and hyperinsulinemia both stimulates theca cells and suppresses hepatic SHBG, raising free testosterone even when total testosterone is only mildly high {k: theca; shbg; free testosterone}
BP-rp9-14 [mid] Letrozole induces ovulation by inhibiting aromatase: less estrogen means less negative feedback, so FSH rises and drives follicle growth {k: letrozole; aromatase}

## rp10 — Contraception, emergency contraception and medication abortion
BP-rp10-01 [hi] Combined hormonal contraception: estrogen + progestin suppress FSH/LH (no ovulation); progestin thickens cervical mucus and thins endometrium {k: combined; cervical mucus; ovulation}
BP-rp10-02 [hi] Benefits: lower ovarian and endometrial cancer risk, regular lighter periods, less acne/hirsutism {k: ovarian cancer; endometrial cancer}
BP-rp10-03 [hi] Risks/contraindications of estrogen: VTE, smokers over 35, migraine with aura, prior VTE/stroke, estrogen-dependent cancer, liver disease/hepatic adenoma, uncontrolled hypertension, < 21 days postpartum {k: migraine with aura; smok; thromboembolism|vte}
BP-rp10-04 [hi] Enzyme inducers lower efficacy: rifampin, carbamazepine, phenytoin, St John's wort {k: rifampin; st john}
BP-rp10-05 [hi] Progestin-only methods: minipill, DMPA injection (bone density loss, delayed fertility return), etonogestrel implant (most effective reversible), levonorgestrel IUD {k: dmpa|medroxyprogesterone; implant; levonorgestrel}
BP-rp10-06 [hi] Copper IUD: nonhormonal, spermicidal inflammation; heavier bleeding/cramps; most effective emergency contraception {k: copper iud|copper}
BP-rp10-07 [hi] Emergency contraception: levonorgestrel (delays ovulation; less effective with high BMI), ulipristal (selective progesterone receptor modulator), copper IUD {k: ulipristal; emergency contraception}
BP-rp10-08 [hi] Medication abortion: mifepristone (progesterone receptor antagonist) then misoprostol (PGE1 analog; uterine contraction, cervical ripening) {k: mifepristone; misoprostol}
BP-rp10-09 [mid] Efficacy tiers (typical use) and barrier methods/sterilization {k: typical use}
BP-rp10-10 [mid] Counseling and consent for adolescents; confidential contraception for minors (links rp29) {k: confidential; adolescent}
BP-rp10-11 [mid] Emergency contraception windows: levonorgestrel works best within 72 hours and only before the LH surge (it delays ovulation); ulipristal works up to 5 days and can still act after the LH rise begins; a copper IUD inserted within 5 days is most effective; none disrupts an implanted pregnancy {k: 72 hours; 5 days|five days; implant}
BP-rp10-12 [mid] Bleeding pattern differs by progestin method: the levonorgestrel IUD thins the endometrium and lightens menses (often amenorrhea; also a treatment for heavy menstrual bleeding); the etonogestrel implant causes unpredictable spotting; DMPA commonly leads to amenorrhea {k: spotting; heavy menstrual bleeding}
BP-rp10-13 [mid] IUD insertion carries a small early risk of pelvic infection, so active PID or purulent cervicitis contraindicates insertion until treated {k: pelvic infection; insertion}

## rp11 — Menopause and hormone therapy
BP-rp11-01 [hi] Menopause (~51): follicle depletion -> low estradiol and inhibin -> high FSH (most useful marker), high LH, high GnRH; estrone from adipose becomes main estrogen {k: fsh; follicle depletion|depletion}
BP-rp11-02 [hi] Primary ovarian insufficiency (< 40): high FSH; causes include Turner, fragile X premutation, autoimmune, chemotherapy/radiation {k: primary ovarian insufficiency; fragile x}
BP-rp11-03 [hi] Vasomotor symptoms from hypothalamic thermoregulatory (KNDy neuron/NK3) change; genitourinary syndrome (atrophy, dyspareunia, UTIs); sleep, mood changes {k: vasomotor; genitourinary syndrome; knd|nk3|neurokinin}
BP-rp11-04 [hi] Long-term effects of estrogen loss: bone loss (osteoporosis), rising LDL and cardiovascular risk {k: bone loss; cardiovascular}
BP-rp11-05 [hi] Postmenopausal bleeding = endometrial cancer until proven otherwise; transvaginal ultrasound endometrial thickness and endometrial biopsy {k: postmenopausal bleeding; endometrial biopsy; thickness}
BP-rp11-06 [hi] Hormone therapy: estrogen alone only without a uterus; add progestin with a uterus (unopposed estrogen -> endometrial hyperplasia/cancer); lowest dose for vasomotor symptoms {k: unopposed; progestin}
BP-rp11-07 [hi] HT contraindications: breast cancer, endometrial cancer, VTE, stroke/CAD, active liver disease, unexplained bleeding {k: contraindicat}
BP-rp11-08 [hi] Women's Health Initiative: combined HT raised breast cancer, stroke, VTE and CHD in older women starting late; timing hypothesis {k: women's health initiative|whi}
BP-rp11-09 [mid] Nonhormonal options: SSRIs/SNRIs (low-dose paroxetine), gabapentin, clonidine, fezolinetant (NK3 antagonist); vaginal estrogen, ospemifene (SERM) for dyspareunia {k: paroxetine; fezolinetant; ospemifene}
BP-rp11-10 [mid] Menopause mimics to rule out: pregnancy, thyroid disease, hyperprolactinemia {k: mimic}
BP-rp11-11 [mid] Stages of reproductive aging (STRAW); perimenopausal bleeding changes {k: straw|perimenopaus}
BP-rp11-12 [mid] Preventive care after menopause: bone density screening, CV risk, cancer screening, immunizations {k: screening}
BP-rp11-13 [mid] Menopause is diagnosed retrospectively after 12 consecutive months without menses; FSH testing is unnecessary in a typical woman over 45, and in perimenopause FSH and estradiol fluctuate, so one normal value does not exclude the transition {k: 12 months; perimenopaus}
BP-rp11-14 [mid] Postmenopausal bleeding: endometrial or vaginal atrophy is the most common cause, but cancer must be excluded; a fully seen endometrium under 4 mm on transvaginal ultrasound makes cancer unlikely (MENOPAUSE lecture) {k: atrophy; 4 mm|4mm}
BP-rp11-15 [hi] Oral vs transdermal estrogen: oral estrogen passes through the liver first (raises clotting factors, triglycerides and gallstone risk); transdermal estradiol avoids first-pass metabolism and carries lower VTE risk {k: transdermal; first-pass|first pass; gallstone}
BP-rp11-16 [mid] Hormone therapy formats: low-dose vaginal estrogen treats genitourinary syndrome of menopause (not hot flashes) and needs no progestogen; cyclic estrogen-progestogen gives scheduled withdrawal bleeding; continuous combined therapy aims for amenorrhea after initial spotting; primary ovarian insufficiency needs replacement until the usual age of menopause {k: vaginal estrogen; cyclic; continuous combined}
BP-rp11-17 [mid] Paroxetine strongly inhibits CYP2D6 and blocks activation of tamoxifen, so women taking tamoxifen use venlafaxine, gabapentin or a neurokinin antagonist for hot flashes {k: cyp2d6; tamoxifen}

## rp12 — Vulva and vagina: infections and lesions
BP-rp12-01 [hi] Vagina: nonkeratinized stratified squamous with glycogen, no glands; lactobacilli keep pH < 4.5 {k: nonkeratinized; lactobacill; glycogen}
BP-rp12-02 [hi] Bacterial vaginosis: Gardnerella overgrowth, thin gray discharge, fishy (whiff) odor, pH > 4.5, clue cells; metronidazole (disulfiram-like reaction) or clindamycin {k: gardnerella; clue cell; whiff}
BP-rp12-03 [hi] Trichomoniasis: motile flagellated trophozoites on wet mount, frothy yellow-green discharge, strawberry cervix, pH > 4.5; metronidazole for patient and partners {k: trichomon; strawberry cervix; flagellated}
BP-rp12-04 [hi] Vulvovaginal candidiasis: thick white "cottage cheese" discharge, normal pH, pseudohyphae; risk with antibiotics, diabetes, pregnancy; azoles (fluconazole) {k: candid; pseudohyphae; fluconazole}
BP-rp12-05 [hi] Bartholin cyst/abscess: blocked duct, posterolateral vestibular mass; drainage {k: bartholin}
BP-rp12-06 [hi] Lichen sclerosus: thin white parchment-like skin, older women, slight SCC risk; lichen simplex chronicus (squamous hyperplasia): thick leathery skin from scratching, no cancer risk {k: lichen sclerosus; lichen simplex chronicus; parchment}
BP-rp12-07 [hi] Vulvar carcinoma: HPV-related (younger, from VIN/usual type) vs HPV-negative (older, lichen sclerosus -> differentiated VIN) {k: vulvar carcinoma; vulvar intraepithelial neoplasia|vin}
BP-rp12-08 [hi] Extramammary Paget disease: intraepithelial adenocarcinoma cells (PAS+, keratin+) in vulvar epidermis; usually no underlying carcinoma (unlike breast Paget) {k: extramammary paget}
BP-rp12-09 [hi] Condyloma acuminatum: HPV 6/11 koilocytes {k: condyloma; koilocyt}
BP-rp12-10 [hi] Clear cell adenocarcinoma of vagina after in-utero DES (vaginal adenosis) {k: clear cell adenocarcinoma; diethylstilbestrol|des}
BP-rp12-11 [hi] Sarcoma botryoides (embryonal rhabdomyosarcoma): girls < 5, grape-like polypoid mass, desmin/myogenin positive {k: sarcoma botryoides|botryoid; desmin}
BP-rp12-12 [mid] Vaginal SCC usually spreads from cervix; Gartner duct cyst on the lateral vaginal wall {k: gartner}
BP-rp12-13 [hi] Vulvar squamous precursors by marker: HPV-associated HSIL (usual VIN; diffuse block p16 staining, wild-type p53, koilocytes; younger women; warty or basaloid carcinoma) vs HPV-independent differentiated VIN (basal atypia, aberrant p53, absent or focal p16; older women with lichen sclerosus; keratinizing carcinoma); vulvar carcinoma spreads first to inguinal nodes {k: p16; p53; differentiated vin|dvin}
BP-rp12-14 [mid] Vulvar dermatoses: lichen sclerosus (figure-of-eight white atrophic vulvar and perianal skin, dermal sclerosis, spares the vagina; high-potency topical corticosteroids) vs lichen planus (T-cell-mediated; erosive, involves vaginal and oral mucosa, can scar) {k: figure-of-eight|figure of 8|figure-of-8|figure of eight; lichen planus; corticosteroid}
BP-rp12-15 [lo] Sarcoma botryoides histology: small round blue cells crowded into a dense subepithelial cambium layer just beneath the vaginal epithelium (course pathology lectures) {k: cambium; small round blue}

## rp13 — Cervix, HPV and cervical cancer screening
BP-rp13-01 [hi] Transformation zone (squamocolumnar junction) is where metaplasia and CIN occur; a Pap that misses it is inadequate {k: transformation zone; squamocolumnar; metaplasia}
BP-rp13-02 [hi] High-risk HPV 16/18: E6 degrades p53, E7 inactivates Rb {k: e6; e7; p53}
BP-rp13-03 [hi] CIN 1-3 / LSIL-HSIL; koilocytes (raisinoid nuclei, perinuclear halo); CIN 1 often regresses, CIN 3 progresses {k: koilocyt; hsil; lsil}
BP-rp13-04 [hi] Invasive cervical carcinoma: SCC most common, adenocarcinoma second; risk factors (early/multiple partners, smoking, immunosuppression/HIV); death from ureteral obstruction/renal failure {k: squamous cell carcinoma; hydronephrosis|ureteral obstruction}
BP-rp13-05 [hi] Screening: cytology every 3 years from 21-29; 30-65 primary HPV every 5 years (or cotest every 5 or cytology every 3); stop > 65 with adequate negative history; after hysterectomy for benign disease stop; HIV more frequent {k: every 3 years|3 years; every 5 years|5 years; cotest}
BP-rp13-06 [hi] Abnormal result management: colposcopy with biopsy; LEEP/cone for high-grade lesions; surveillance for low-grade {k: colposcopy; leep}
BP-rp13-07 [hi] HPV vaccine (9-valent; recombinant L1 VLP); anal cancer screening in HIV {k: vaccine; anal}
BP-rp13-08 [mid] Cervicitis: chlamydia, gonorrhea (mucopurulent discharge, friable cervix) {k: cervicitis; mucopurulent}
BP-rp13-09 [mid] Screening vs diagnosis vs treatment in gynecologic cancer prevention {k: screening test|screening; diagnosis}
BP-rp13-10 [mid] Nabothian cysts (benign trapped endocervical glands) {k: nabothian}
BP-rp13-11 [mid] p16 immunostaining: E7 inactivation of Rb causes p16 overexpression, so diffuse block p16 staining marks HPV-driven high-grade lesions and resolves CIN 2 as HSIL {k: p16; hsil}
BP-rp13-12 [hi] CIN natural history and grading: most HPV infections clear, and persistent high-risk HPV drives dysplasia that starts in the basal layer; CIN 1 involves the lower third, CIN 2 the lower two-thirds and CIN 3 more than two-thirds up to the full thickness (carcinoma in situ); breach of the basement membrane defines invasive carcinoma {k: persistent; lower third|lower one-third|basal third; basement membrane}
BP-rp13-13 [mid] Invasive cervical carcinoma presents with postcoital or irregular vaginal bleeding and a watery, blood-tinged discharge; early lesions are found only by screening {k: postcoital; discharge}
BP-rp13-14 [mid] Excisional treatment of the cervix (LEEP or cone) can cause later cervical insufficiency with second-trimester loss or preterm birth, so excision is kept for high-grade lesions (SIM-COLPO lecture notes) {k: cervical insufficiency|cervical incompetence; preterm}

## rp14 — Uterus: endometrium and myometrium
BP-rp14-01 [hi] Endometriosis: endometrial glands and stroma outside the uterus (retrograde menstruation, metaplasia, lymphatic spread); ovary (endometrioma/chocolate cyst), pelvic peritoneum (powder-burn), dysmenorrhea, dyspareunia, dyschezia, infertility; normal-sized uterus {k: endometriosis; chocolate cyst|endometrioma; retrograde menstruation}
BP-rp14-02 [hi] Endometriosis treatment: NSAIDs, combined OCPs, progestins, GnRH agonists/antagonists (elagolix), danazol, surgery {k: gnrh; danazol|elagolix}
BP-rp14-03 [hi] Adenomyosis: endometrial tissue within myometrium; uniformly enlarged soft globular uterus; heavy painful periods {k: adenomyosis; globular}
BP-rp14-04 [hi] Leiomyoma: most common tumor in women; estrogen-sensitive, whorled smooth muscle, well-circumscribed; more common in Black women; bleeding, pressure, infertility; grows in pregnancy (red degeneration); does not become sarcoma {k: leiomyoma; whorl}
BP-rp14-05 [hi] Leiomyosarcoma: arises de novo; postmenopausal; necrosis, atypia, many mitoses {k: leiomyosarcoma; mitos}
BP-rp14-06 [hi] Endometrial hyperplasia: unopposed estrogen (obesity, PCOS, estrogen-only HT, tamoxifen, granulosa tumor, anovulation); atypia is the best predictor of cancer {k: hyperplasia; atypia}
BP-rp14-07 [hi] Endometrial carcinoma: most common gynecologic cancer in the US; postmenopausal bleeding; type I endometrioid (estrogen-driven, PTEN, microsatellite instability/Lynch) vs type II serous (older, atrophic endometrium, p53, psammoma bodies, aggressive) {k: endometrioid; serous; pten}
BP-rp14-08 [hi] Lynch syndrome (MLH1/MSH2 mismatch repair): colon + endometrial + ovarian cancer {k: lynch; mismatch repair}
BP-rp14-09 [mid] Carcinosarcoma (malignant mixed Mullerian tumor): malignant epithelium + malignant mesenchyme; aggressive; postmenopausal {k: carcinosarcoma|malignant mixed}
BP-rp14-10 [mid] Endometritis: acute (postpartum, retained products; polymicrobial) vs chronic (plasma cells; IUD, PID, TB) {k: endometritis; plasma cell}
BP-rp14-11 [mid] Endometrial polyp; Asherman syndrome (adhesions after curettage -> secondary amenorrhea) {k: polyp; adhesion}
BP-rp14-12 [mid] Sampling procedures: endometrial biopsy, D&C, hysteroscopy (what each samples and when used) {k: dilation and curettage|d&c; hysteroscopy}
BP-rp14-13 [lo] Tamoxifen is a partial estrogen agonist at the endometrium (hyperplasia, polyps, cancer) {k: tamoxifen}
BP-rp14-14 [hi] Endometrial carcinoma risk tracks lifetime unopposed estrogen: obesity, nulliparity, early menarche, late menopause, anovulation (PCOS), estrogen-only therapy, tamoxifen, diabetes, Lynch syndrome; progestins, combined oral contraceptives and pregnancy protect {k: nulliparity|nulliparous; obesity; oral contraceptive}
BP-rp14-15 [mid] Danazol is a synthetic androgen (partial androgen-receptor agonist) that suppresses gonadotropins; used for endometriosis and hereditary angioedema; adverse effects are androgenic (acne, hirsutism, voice deepening), weight gain, low HDL and hepatotoxicity {k: danazol; hirsutism; hereditary angioedema}

## rp15 — Ovary and fallopian tube: cysts, torsion, adnexal masses and tumors
BP-rp15-01 [hi] Tumor classification by cell of origin: surface epithelium, germ cells, sex cord-stromal cells, metastases {k: surface epithel; germ cell; sex cord}
BP-rp15-02 [hi] Functional cysts: follicular (most common), corpus luteum (hemorrhage), theca lutein (high hCG: molar pregnancy, multiples, ovarian hyperstimulation) {k: follicular cyst; corpus luteum cyst; theca lutein}
BP-rp15-03 [hi] Serous tumors: most common malignant; high-grade serous from fallopian tube (serous tubal intraepithelial carcinoma), psammoma bodies, BRCA1/2, TP53; CA-125 {k: high-grade serous|serous carcinoma; ca-125; brca}
BP-rp15-04 [hi] Mucinous tumors (large; pseudomyxoma peritonei usually from appendix); endometrioid and clear cell (associated with endometriosis); Brenner (transitional-type cells, coffee-bean nuclei) {k: mucinous; pseudomyxoma; brenner}
BP-rp15-05 [hi] Mature cystic teratoma (dermoid): commonest ovarian neoplasm in young women, hair/teeth/sebum, torsion risk; struma ovarii; immature teratoma (neuroepithelium) {k: teratoma; dermoid; struma}
BP-rp15-06 [hi] Dysgerminoma (sheets of clear "fried-egg" cells, LDH, radiosensitive; like seminoma; Turner/Swyer risk); yolk sac tumor (AFP, Schiller-Duval bodies, young girls); choriocarcinoma (hCG, no villi) {k: dysgerminoma; schiller-duval; afp}
BP-rp15-07 [hi] Granulosa cell tumor: estrogen (precocious puberty, endometrial hyperplasia, postmenopausal bleeding), Call-Exner bodies, coffee-bean nuclei, inhibin marker {k: granulosa cell tumor; call-exner; inhibin}
BP-rp15-08 [hi] Sertoli-Leydig cell tumor: androgens -> virilization; fibroma + ascites + right pleural effusion = Meigs syndrome; thecoma {k: sertoli-leydig; meigs; fibroma}
BP-rp15-09 [hi] Krukenberg tumor: bilateral mucin-secreting signet-ring metastases from stomach {k: krukenberg; signet}
BP-rp15-10 [hi] Risk factors: BRCA, Lynch, nulliparity, age, endometriosis; protective: OCPs, multiparity, breastfeeding, tubal ligation/salpingectomy {k: nulliparity|nulliparous; breastfeeding}
BP-rp15-11 [hi] Ovarian torsion: twisting on the infundibulopelvic ligament, usually with an enlarged ovary; sudden unilateral pain, nausea; emergency {k: torsion}
BP-rp15-12 [hi] Adnexal mass approach: age (prepubertal, reproductive, postmenopausal); ultrasound features that suggest malignancy (solid parts, papillary projections, thick septations, ascites, flow); IOTA/O-RADS; when to refer to gynecologic oncology {k: papillary projection; septation; ascites}
BP-rp15-13 [hi] Tumor markers: CA-125 (epithelial; nonspecific premenopause), AFP (yolk sac), hCG (choriocarcinoma), LDH (dysgerminoma), inhibin (granulosa) {k: ldh; hcg}
BP-rp15-14 [mid] Tubal lesions: hydrosalpinx, salpingitis, tubal ectopic (links rp26); paratubal cyst {k: hydrosalpinx}
BP-rp15-15 [hi] Ovarian epithelial tumor spectrum: benign -> borderline (atypia and stratification without destructive stromal invasion; noninvasive implants) -> carcinoma; type I low-grade carcinomas (low-grade serous, mucinous, endometrioid, clear cell; KRAS/BRAF; arise from borderline tumors or endometriosis) vs type II high-grade serous carcinoma (TP53, from tubal intraepithelial carcinoma, aggressive) {k: borderline; kras; stromal invasion}
BP-rp15-16 [hi] Ovarian carcinoma presentation: vague bloating, early satiety and rising abdominal girth; spreads by peritoneal seeding (ascites, omental caking); CA-125 and ultrasound fail as screening tests for average-risk women {k: bloating; early satiety; omental|omentum}
BP-rp15-17 [mid] Ovarian torsion compresses the thin-walled veins and lymphatics first while arterial inflow continues, so the ovary swells with edema before arterial occlusion causes hemorrhagic infarction (Doppler flow can persist early) {k: venous; hemorrhagic infarction|infarction}
BP-rp15-18 [mid] Laterality of ovarian epithelial tumors: serous tumors are often bilateral, while primary mucinous tumors are usually large and unilateral, so bilateral mucinous masses suggest metastasis (Krukenberg tumor, appendiceal primary) {k: bilateral; unilateral}

## rp16 — Bacterial STIs and pelvic inflammatory disease
BP-rp16-01 [hi] Chlamydia trachomatis D-K: obligate intracellular; elementary body (infectious) and reticulate body (replicating); NAAT; doxycycline (azithromycin in pregnancy); reactive arthritis; neonatal conjunctivitis and afebrile staccato pneumonia {k: elementary bod; reticulate bod; naat}
BP-rp16-02 [hi] Lymphogranuloma venereum (L1-L3): painless ulcer then painful inguinal buboes, groove sign, proctocolitis {k: lymphogranuloma; bubo}
BP-rp16-03 [hi] Gonorrhea: gram-negative intracellular diplococci; pili antigenic variation, IgA protease; ceftriaxone; disseminated gonococcal infection (tenosynovitis, dermatitis, septic arthritis); ophthalmia neonatorum prophylaxis with erythromycin ointment; recurrent Neisseria with C5-C9 deficiency {k: diplococc; ceftriaxone; disseminated}
BP-rp16-04 [hi] Syphilis stages: primary painless chancre; secondary rash on palms/soles, condylomata lata, lymphadenopathy; tertiary gummas, aortitis, neurosyphilis (tabes dorsalis, Argyll Robertson pupil); penicillin G benzathine; Jarisch-Herxheimer {k: chancre; condylomata lata|condyloma lata; tabes|argyll robertson}
BP-rp16-05 [hi] Syphilis tests: nontreponemal VDRL/RPR (screen; false positives in SLE/antiphospholipid, pregnancy, viral infection) vs treponemal FTA-ABS/TP-PA; darkfield microscopy {k: vdrl|rpr; fta-abs|treponemal; darkfield}
BP-rp16-06 [hi] Chancroid (H. ducreyi): painful ulcer with ragged base + painful adenopathy, "school of fish" {k: chancroid; ducreyi}
BP-rp16-07 [hi] Granuloma inguinale/donovanosis (Klebsiella granulomatis): painless beefy-red ulcer, Donovan bodies {k: donovan; granuloma inguinale|donovanosis}
BP-rp16-08 [hi] Genital ulcer comparison table: painful (HSV, chancroid) vs painless (syphilis, LGV, donovanosis) {k: painless; painful}
BP-rp16-09 [hi] PID: ascending chlamydia/gonorrhea (+ anaerobes); cervical motion tenderness (chandelier sign), adnexal tenderness; complications tubo-ovarian abscess, infertility, ectopic pregnancy, chronic pelvic pain, Fitz-Hugh-Curtis perihepatitis ("violin string" adhesions) {k: cervical motion tenderness; fitz-hugh-curtis; tubo-ovarian}
BP-rp16-10 [hi] PID treatment: ceftriaxone + doxycycline + metronidazole; partner treatment {k: doxycycline; metronidazole}
BP-rp16-11 [mid] Nongonococcal urethritis: chlamydia, Mycoplasma genitalium, Trichomonas, Ureaplasma {k: mycoplasma genitalium|genitalium; urethritis}
BP-rp16-12 [mid] Expedited partner therapy and test-of-cure/re-testing {k: partner}
BP-rp16-13 [mid] Chlamydia microbiology: obligate intracellular (cannot make its own ATP); its cell wall lacks classic peptidoglycan (little muramic acid), so beta-lactams fail; C. trachomatis forms glycogen-rich cytoplasmic inclusions seen with Giemsa or iodine stain {k: inclusion; peptidoglycan|muramic}
BP-rp16-14 [mid] Neisseria gonorrhoeae microbiology: gram-negative, oxidase-positive diplococcus that ferments glucose but not maltose (meningococcus ferments both); grown on Thayer-Martin selective medium; lipooligosaccharide endotoxin; no polysaccharide capsule and no vaccine (pilus antigenic variation) {k: maltose; thayer-martin; lipooligosaccharide}
BP-rp16-15 [mid] Gonorrhea and chlamydia often coexist: treat gonorrhea with ceftriaxone and add doxycycline when chlamydia has not been excluded (CDC 2021); treat partners {k: coinfect|coexist; ceftriaxone; doxycycline}
BP-rp16-16 [mid] Syphilis in pregnancy: only penicillin G reliably treats the fetus, so a penicillin-allergic pregnant patient is desensitized rather than switched to another drug {k: desensitiz; penicillin}
BP-rp16-17 [mid] Chlamydia and gonorrhea are often asymptomatic, especially cervical infection in women (hence yearly NAAT screening of sexually active women under 25); men more often have dysuria or, with gonorrhea, purulent urethral discharge {k: asymptomatic; under 25|younger than 25}
BP-rp16-18 [mid] Nontreponemal tests (VDRL, RPR) detect anticardiolipin antibody and their titers fall after successful treatment, so they follow therapy; treponemal tests usually stay positive for life and cannot separate past from current infection {k: cardiolipin; titer}

## rp17 — Viral STIs: HIV, HSV, HPV and molluscum
BP-rp17-01 [hi] Viruses as obligate intracellular parasites; retrovirus (RNA -> DNA via reverse transcriptase, integrase inserts provirus) vs DNA viruses (latency as episomes) {k: reverse transcriptase; integrase; latency|latent}
BP-rp17-02 [hi] HIV structure and entry: gp120 binds CD4 then CCR5/CXCR4, gp41 fusion; p24 capsid; env/gag/pol {k: gp120; ccr5; gp41}
BP-rp17-03 [hi] HIV testing: 4th-generation antigen/antibody (p24) immunoassay then differentiation assay; viral load; window period {k: p24; antigen/antibody|fourth-generation|4th-generation}
BP-rp17-04 [hi] Prevention: condoms, PrEP (tenofovir + emtricitabine or cabotegravir), PEP within 72 h, treatment as prevention (undetectable = untransmittable) {k: prep; pep; undetectable}
BP-rp17-05 [hi] Perinatal HIV prevention: maternal ART, intrapartum zidovudine when viral load high, cesarean if viral load high, infant prophylaxis, avoid breastfeeding (US) {k: zidovudine; perinatal}
BP-rp17-06 [hi] ART classes and signature toxicities: NRTIs (zidovudine anemia; tenofovir kidney/bone; abacavir HLA-B*57:01 hypersensitivity), NNRTIs (efavirenz vivid dreams/CNS; nevirapine hepatotoxic), protease inhibitors (lipodystrophy, hyperglycemia; ritonavir boosts by CYP3A4 inhibition), integrase inhibitors (-tegravir), maraviroc (CCR5), enfuvirtide (gp41) {k: abacavir; efavirenz; ritonavir}
BP-rp17-07 [hi] HSV: painful grouped vesicles on an erythematous base; latency in sensory (sacral) ganglia; Tzanck multinucleated giant cells, Cowdry A inclusions; PCR {k: vesicle; sacral|dorsal root ganglia; tzanck}
BP-rp17-08 [hi] Acyclovir/valacyclovir/famciclovir: guanosine analogs activated by viral thymidine kinase, inhibit viral DNA polymerase; crystalline nephropathy; resistance via thymidine kinase mutation -> foscarnet {k: thymidine kinase; crystal; foscarnet}
BP-rp17-09 [hi] HPV: 6/11 warts; 16/18 cancer (cervix, anus, oropharynx, penis); vaccine; wart treatments: imiquimod (immune response modifier, TLR7), podofilox, trichloroacetic acid, cryotherapy {k: imiquimod; podofilox|podophyllotoxin; cryotherapy}
BP-rp17-10 [hi] Molluscum contagiosum: poxvirus, umbilicated pearly papules, molluscum (Henderson-Patterson) bodies; widespread in HIV {k: molluscum; umbilicated}
BP-rp17-11 [mid] Immune evasion: HIV mutation, CD4 depletion; HSV latency; HPV low inflammation {k: immune evasion|evade}
BP-rp17-12 [hi] HIV course and labs: acute retroviral syndrome (fever, rash, pharyngitis, lymphadenopathy) during the antibody window, when HIV RNA or p24 is positive; clinical latency; AIDS = CD4 count under 200/mm3 or an AIDS-defining illness; viral load tracks replication and treatment response, CD4 count tracks immune status {k: acute retroviral syndrome|acute hiv; cd4; viral load; aids-defining}
BP-rp17-13 [mid] Infants of mothers with HIV carry maternal anti-HIV IgG for up to 18 months, so infant infection is diagnosed by HIV nucleic acid (PCR) testing, not antibody tests {k: 18 months; nucleic acid|pcr}
BP-rp17-14 [mid] A homozygous CCR5 deletion (delta-32) protects against CCR5-tropic HIV; heterozygotes progress more slowly {k: homozygous; delta 32|delta-32|δ32}
BP-rp17-15 [mid] More ART toxicities: NRTI mitochondrial toxicity (lactic acidosis, hepatic steatosis; pancreatitis and neuropathy with older NRTIs such as didanosine and stavudine) and indinavir nephrolithiasis {k: lactic acidosis; indinavir; pancreatitis}
BP-rp17-16 [mid] HIV coreceptor tropism: CCR5-using (macrophage-tropic) strains dominate early infection; CXCR4-using (T-cell-tropic) strains emerge later in disease {k: cxcr4; macrophage}
BP-rp17-17 [hi] ART mechanisms by replication step: NRTIs are phosphorylated to nucleotide analogs that terminate viral DNA chains (tenofovir is already a nucleotide); NNRTIs bind reverse transcriptase allosterically without activation; integrase inhibitors block provirus insertion; protease inhibitors block cleavage of gag-pol polyproteins, leaving immature noninfectious virions; drugs are always given in combination because rapid mutation selects resistance to any single agent {k: chain termination|chain terminator; allosteric; polyprotein}

## rp18 — Infections in pregnancy and the newborn
BP-rp18-01 [hi] Toxoplasma: cat feces/undercooked meat; chorioretinitis, hydrocephalus, diffuse intracranial calcifications {k: toxoplasm; chorioretinitis; hydrocephalus}
BP-rp18-02 [hi] Congenital syphilis: stillbirth, hydrops, snuffles, rash; later Hutchinson teeth, mulberry molars, saddle nose, saber shins, CN VIII deafness; screen every pregnancy {k: congenital syphilis; hutchinson; saber}
BP-rp18-03 [hi] Rubella: cataracts, sensorineural deafness, PDA/pulmonary artery stenosis, blueberry-muffin rash; check immunity pre-pregnancy; live vaccine contraindicated in pregnancy {k: rubella; cataract; blueberry}
BP-rp18-04 [hi] CMV: most common congenital infection; sensorineural hearing loss, periventricular calcifications, microcephaly, chorioretinitis {k: cytomegalovirus|cmv; periventricular; hearing loss}
BP-rp18-05 [hi] HSV in pregnancy: neonatal skin/eye/mouth, CNS or disseminated disease; cesarean with active lesions/prodrome; acyclovir suppression from 36 weeks {k: 36 weeks; cesarean}
BP-rp18-06 [hi] Parvovirus B19: fetal anemia -> hydrops fetalis (infects erythroid precursors) {k: parvovirus; hydrops}
BP-rp18-07 [hi] Varicella: congenital limb hypoplasia and cicatricial scars; VZIG for exposed nonimmune pregnant women {k: varicella; limb hypoplasia}
BP-rp18-08 [hi] Listeria: unpasteurized dairy/deli meat; amnionitis, preterm birth, neonatal sepsis/meningitis; ampicillin {k: listeria; ampicillin}
BP-rp18-09 [hi] Group B strep: screen at 36-37 weeks; intrapartum IV penicillin/ampicillin prevents early-onset neonatal sepsis, pneumonia, meningitis {k: group b strep|gbs|agalactiae; intrapartum}
BP-rp18-10 [hi] Hepatitis B: screen HBsAg; newborn gets HBIG + vaccine within 12 h; hepatitis C vertical transmission {k: hbig; hbsag}
BP-rp18-11 [mid] Zika: microcephaly, ocular findings {k: zika; microcephaly}
BP-rp18-12 [hi] Neonatal conjunctivitis: gonococcal (days 2-5, purulent) vs chlamydial (days 5-14) {k: conjunctivitis; ophthalmia}
BP-rp18-13 [mid] Determining immune status (IgG vs IgM, avidity) {k: igm; igg}
BP-rp18-14 [mid] Neonatal HSV risk is highest when the mother acquires a first genital infection near delivery (no protective maternal IgG yet); recurrent maternal HSV carries far lower risk; neonatal HSV is treated with IV acyclovir {k: first episode|primary infection|primary genital|first genital; iv acyclovir|intravenous acyclovir}
BP-rp18-15 [mid] Lab identity of neonatal sepsis bacteria: group B strep = beta-hemolytic, bacitracin-resistant, CAMP-positive gram-positive cocci in chains; Listeria = motile (tumbling) facultative intracellular gram-positive rod (granulomatosis infantiseptica); E. coli with the K1 capsule causes neonatal meningitis {k: camp; bacitracin; tumbling; k1}
BP-rp18-16 [mid] More congenital syphilis findings: early hepatosplenomegaly and periostitis or osteochondritis of long bones (painful pseudoparalysis); late interstitial keratitis, which with Hutchinson teeth and eighth-nerve deafness forms the Hutchinson triad {k: interstitial keratitis; periostitis|osteochondritis}

## rp19 — Testis, spermatogenesis and male reproductive endocrinology
BP-rp19-01 [hi] Seminiferous tubule: Sertoli cells (FSH receptors; androgen-binding protein, inhibin B, AMH; blood-testis barrier via tight junctions; nurse cells) and germ cells; Leydig cells in the interstitium (LH -> testosterone; Reinke crystals) {k: sertoli; blood-testis barrier; androgen-binding protein}
BP-rp19-02 [hi] Spermatogenesis: spermatogonia -> primary spermatocytes (meiosis I) -> secondary spermatocytes -> spermatids -> spermiogenesis (acrosome from Golgi, flagellum from centriole) -> spermatozoa; ~2.5 months (64-74 days) {k: spermiogenesis; acrosome; 74 days|64|2.5 months|about 70}
BP-rp19-03 [hi] Duct system: rete testis -> efferent ductules -> epididymis (pseudostratified columnar with stereocilia; maturation, storage) -> vas deferens -> ejaculatory duct {k: epididymis; stereocilia; rete testis}
BP-rp19-04 [hi] Accessory glands: seminal vesicles (fructose-rich alkaline fluid, most volume), prostate (PSA, citrate, acid phosphatase; corpora amylacea), bulbourethral glands (pre-ejaculate mucus) {k: fructose; psa; bulbourethral}
BP-rp19-05 [hi] Male HPG axis: GnRH -> LH (Leydig testosterone) and FSH (Sertoli); testosterone and inhibin feed back {k: inhibin; testosterone}
BP-rp19-06 [hi] Testosterone vs DHT vs estradiol: testosterone (Wolffian ducts, spermatogenesis, muscle, libido, epiphyseal closure via aromatization), DHT (external genitalia, prostate, male-pattern baldness, sebaceous glands) {k: dht|dihydrotestosterone; aromatiz}
BP-rp19-07 [hi] Erection: parasympathetic -> NO -> cGMP -> smooth muscle relaxation in corpora; detumescence by PDE5 {k: nitric oxide; cgmp; pde5|pde-5}
BP-rp19-08 [mid] Temperature: pampiniform plexus countercurrent cooling; cremaster {k: pampiniform}
BP-rp19-09 [mid] Semen analysis parameters and the spermatogenic timeline in infertility treatment (changes take ~3 months to show) {k: semen analysis}
BP-rp19-10 [mid] Aging: gradual fall in testosterone, rise in SHBG {k: aging}
BP-rp19-11 [mid] Prostate zonal anatomy: peripheral (cancer), transition (BPH), central {k: peripheral zone; transition zone}

## rp20 — Scrotal and testicular disorders
BP-rp20-01 [hi] Cryptorchidism: most common congenital GU anomaly in boys; infertility and germ cell tumor risk (both testes); orchiopexy by ~1 year lowers but does not remove risk {k: cryptorchidism; orchiopexy}
BP-rp20-02 [hi] Testicular torsion: bell-clapper deformity; sudden severe pain, high-riding horizontal testis, absent cremasteric reflex; surgical emergency (hours) with bilateral fixation {k: torsion; cremasteric; bell-clapper|bell clapper}
BP-rp20-03 [hi] Epididymitis: chlamydia/gonorrhea (< 35) vs E. coli/enteric (older, anal intercourse); gradual pain, relief on elevation (Prehn sign), cremasteric reflex present {k: epididymitis; prehn}
BP-rp20-04 [hi] Orchitis: mumps (post-pubertal; infertility risk), autoimmune/granulomatous {k: mumps; orchitis}
BP-rp20-05 [hi] Hydrocele: fluid in tunica vaginalis; transilluminates; communicating (patent processus vaginalis) vs noncommunicating {k: hydrocele; transillumin}
BP-rp20-06 [hi] Varicocele: dilated pampiniform plexus, "bag of worms", left-sided (left gonadal vein -> left renal vein), worse standing, raises scrotal temperature -> infertility; new right-sided varicocele suggests IVC obstruction/RCC {k: varicocele; bag of worms; renal cell}
BP-rp20-07 [mid] Spermatocele/epididymal cyst (transilluminates, above testis), hematocele, testicular rupture after trauma {k: spermatocele|epididymal cyst; hematocele}
BP-rp20-08 [hi] Germ cell tumors (~95%): seminoma (most common; fried-egg cells; placental ALP; radiosensitive; late spread, good prognosis) vs nonseminomatous: embryonal (hemorrhagic, painful), yolk sac (AFP, Schiller-Duval; boys), choriocarcinoma (hCG -> gynecomastia, hyperthyroidism; hematogenous), teratoma (malignant potential in adult males), mixed {k: seminoma; embryonal; yolk sac}
BP-rp20-09 [hi] Non-germ cell: Leydig cell tumor (Reinke crystals; androgen/estrogen -> gynecomastia, precocious puberty), Sertoli cell tumor; lymphoma is the most common testicular mass in men > 60 (DLBCL, often bilateral) {k: leydig cell tumor; reinke; lymphoma}
BP-rp20-10 [hi] Testicular tumor spread to para-aortic nodes; radical inguinal orchiectomy (never transscrotal biopsy); germ cell neoplasia in situ; isochromosome 12p; markers AFP, hCG, LDH {k: orchiectomy; para-aortic; 12p}
BP-rp20-11 [mid] Tumor markers sort testicular germ cell tumors: pure seminoma never raises AFP (an elevated AFP means a nonseminomatous component) though syncytiotrophoblast cells can mildly raise hCG and placental alkaline phosphatase marks seminoma; AFP = yolk sac tumor, very high hCG = choriocarcinoma {k: afp; hcg; placental alkaline phosphatase|plap}
BP-rp20-12 [mid] Testicular torsion twists the spermatic cord so the thin-walled veins occlude before the arteries: the testis congests, then undergoes hemorrhagic infarction; Doppler shows absent flow, whereas epididymo-orchitis shows increased flow {k: hemorrhagic infarction|infarction; doppler}
BP-rp20-13 [hi] Testicular germ cell tumors present in men aged about 15-35 as a painless, firm intratesticular mass that does not transilluminate (unlike hydrocele or spermatocele); ultrasound shows a solid lesion {k: painless; intratesticular}

## rp21 — Prostate and penis
BP-rp21-01 [hi] BPH: DHT-driven nodular hyperplasia of glands and stroma in the transition/periurethral zone; LUTS, retention, UTIs, bladder hypertrophy, hydronephrosis; not premalignant {k: bph|benign prostatic hyperplasia; transition zone}
BP-rp21-02 [hi] BPH drugs: alpha-1 blockers (tamsulosin alpha-1A selective; terazosin, doxazosin - orthostasis), 5-alpha-reductase inhibitors (finasteride, dutasteride; halve PSA; teratogenic to handle), tadalafil; TURP {k: tamsulosin; finasteride; turp}
BP-rp21-03 [hi] Prostatitis: acute bacterial (E. coli; fever, tender boggy prostate; avoid vigorous massage), chronic bacterial (recurrent UTIs), chronic pelvic pain syndrome; young men chlamydia/gonorrhea {k: prostatitis; boggy}
BP-rp21-04 [hi] Prostate adenocarcinoma: peripheral zone (palpable on DRE), older men, African ancestry, family history, BRCA2; PSA screening shared decision; Gleason grading {k: peripheral zone; gleason; psa}
BP-rp21-05 [hi] Diagnostic histology: small crowded glands, prominent nucleoli, perineural invasion, ABSENT basal cell layer (p63/high-molecular-weight keratin negative), AMACR positive {k: basal cell; amacr; perineural}
BP-rp21-06 [hi] Osteoblastic metastases to lumbar spine/pelvis (Batson plexus), raised ALP {k: osteoblastic; batson}
BP-rp21-07 [hi] Latent ("histological") cancers are very common at autopsy vs clinically significant cancers that need treatment (overdiagnosis) {k: latent|incidental; clinically significant}
BP-rp21-08 [hi] Androgen deprivation: GnRH agonists (leuprolide; initial flare -> add antiandrogen), GnRH antagonist (degarelix), antiandrogens (flutamide, bicalutamide, enzalutamide), abiraterone (CYP17 inhibitor) {k: leuprolide; degarelix; abiraterone}
BP-rp21-09 [hi] Phimosis (foreskin cannot retract) vs paraphimosis (emergency), balanitis/balanoposthitis {k: phimosis; paraphimosis}
BP-rp21-10 [hi] Peyronie disease: fibrous plaques of tunica albuginea -> curved painful erection {k: peyronie; tunica albuginea}
BP-rp21-11 [hi] Priapism: sickle cell disease, trazodone, PDE5 inhibitors, intracavernosal drugs; ischemic priapism is an emergency {k: priapism; trazodone|sickle}
BP-rp21-12 [hi] Penile SCC: HPV 16/18, uncircumcised, smoking; precursors Bowen disease (shaft), erythroplasia of Queyrat (glans), bowenoid papulosis {k: bowen; queyrat; circumcis}
BP-rp21-13 [mid] Penile fracture (tunica albuginea rupture), urethral injury; penile infections list {k: fracture}
BP-rp21-14 [mid] Prostate vs seminal vesicle histology: prostate = tubuloalveolar glands with papillary infoldings, a two-cell lining and corpora amylacea (laminated concretions) in older men; seminal vesicle = highly folded mucosa with no corpora amylacea (PATHPHARM-MALE quiz discriminator) {k: corpora amylacea; papillary infolding; seminal vesicle}
BP-rp21-15 [mid] BPH drug adverse effects: 5-alpha-reductase inhibitors cause decreased libido, erectile dysfunction and gynecomastia and halve PSA; alpha-1A-selective blockers (tamsulosin, silodosin) cause retrograde or absent ejaculation and floppy iris syndrome at cataract surgery; nonselective alpha-1 blockers cause orthostatic hypotension {k: retrograde; floppy iris; libido}
BP-rp21-16 [hi] PSA is organ-specific, not cancer-specific: raised by BPH, prostatitis, instrumentation, urinary retention and ejaculation; halved by 5-alpha-reductase inhibitors; a lower free-to-total PSA ratio favors cancer {k: organ-specific; prostatitis; free-to-total|free psa}
BP-rp21-17 [mid] Androgen deprivation adverse effects: hot flashes, loss of libido and erections, gynecomastia, fatigue and bone loss; abiraterone causes mineralocorticoid excess (hypertension, hypokalemia, fluid retention) because ACTH rises, so it is given with prednisone {k: hot flash; bone loss|osteoporosis; mineralocorticoid}
BP-rp21-18 [mid] Priapism types: ischemic (low-flow; painful, rigid, dark acidotic cavernosal blood; sickle cell disease, trazodone, intracavernosal drugs; emergency) vs nonischemic (high-flow; painless, partly rigid; perineal trauma with an arterial-cavernosal fistula) {k: ischemic; nonischemic|non-ischemic; high-flow|high flow}
BP-rp21-19 [lo] Peyronie disease is a fibromatosis of the tunica albuginea that travels with Dupuytren contracture and plantar fibromatosis (PATHPHARM-MALE lecture); the scarred tunica also causes venous-leak erectile dysfunction {k: dupuytren; fibromatosis}

## rp22 — Male hypogonadism, infertility, sexual dysfunction and androgen pharmacology
BP-rp22-01 [hi] Primary hypogonadism: low testosterone, HIGH LH/FSH (Klinefelter, orchitis, chemotherapy, cryptorchidism); secondary: low testosterone with low/normal LH/FSH (Kallmann, pituitary tumor, hyperprolactinemia, opioids, anabolic steroids, obesity) {k: primary hypogonadism; secondary hypogonadism}
BP-rp22-02 [hi] Exogenous testosterone/anabolic steroids suppress LH/FSH -> testicular atrophy, azoospermia; also polycythemia, acne, low HDL, gynecomastia (aromatization), mood change {k: anabolic; azoospermia; polycythemia|hematocrit}
BP-rp22-03 [hi] Male infertility: semen analysis; obstructive azoospermia (CBAVD with CFTR mutations; normal FSH) vs non-obstructive (high FSH); varicocele (most common correctable); Kartagener immotile sperm {k: cbavd|congenital bilateral absence; cftr; kartagener}
BP-rp22-04 [hi] Erectile dysfunction: vascular most common, neurogenic, drug-induced, psychogenic (nocturnal erections preserved) {k: erectile dysfunction; nocturnal}
BP-rp22-05 [hi] PDE5 inhibitors (sildenafil, vardenafil, tadalafil): raise cGMP; headache, flushing, dyspepsia, blue-green vision (sildenafil), NAION; contraindicated with nitrates (severe hypotension); caution with alpha-blockers {k: sildenafil; nitrate; blue|cyanopsia}
BP-rp22-06 [mid] Premature ejaculation: SSRIs (delay ejaculation) {k: premature ejaculation; ssri}
BP-rp22-07 [hi] Antiandrogens: spironolactone (receptor + synthesis; gynecomastia), finasteride/dutasteride (5-alpha-reductase), flutamide/bicalutamide (receptor), ketoconazole (synthesis), cyproterone {k: spironolactone; flutamide|bicalutamide; ketoconazole}
BP-rp22-08 [mid] Testosterone therapy indications/monitoring (hematocrit, PSA) and contraindications (prostate/breast cancer, desire for fertility) {k: monitor}
BP-rp22-09 [mid] Gynecomastia causes: puberty, Klinefelter, cirrhosis, testicular tumors, hyperthyroidism, drugs (spironolactone, cimetidine, ketoconazole, digoxin, marijuana, antiandrogens) {k: gynecomastia; cimetidine}
BP-rp22-10 [mid] Semen and urine clues: low-volume, acidic, fructose-negative ejaculate = ejaculatory duct obstruction or CBAVD (no seminal vesicle fluid); low volume with sperm in post-ejaculatory urine = retrograde ejaculation (alpha-1 blockers, diabetic autonomic neuropathy, prostate surgery) {k: fructose; post-ejaculatory|postejaculatory; retrograde}
BP-rp22-11 [mid] Second-line erectile dysfunction therapy: alprostadil (PGE1 analog, raises cAMP in cavernosal smooth muscle) by intracavernosal injection or intraurethral pellet; risks penile pain, fibrosis and priapism {k: alprostadil; intracavernosal}

## rp23 — Benign breast disease and gynecomastia
BP-rp23-01 [hi] Lesion by age: fibroadenoma (< 35), fibrocystic change (premenopausal), cancer (postmenopausal); in men gynecomastia vs cancer {k: fibroadenoma; fibrocystic}
BP-rp23-02 [hi] Nonproliferative change (cysts, fibrosis, apocrine metaplasia) = no added risk; proliferative without atypia (usual ductal hyperplasia, sclerosing adenosis, papilloma) = small risk; atypical ductal/lobular hyperplasia = moderate (~4-5x) risk {k: apocrine; sclerosing adenosis; atypical ductal hyperplasia}
BP-rp23-03 [hi] Fibroadenoma: mobile, rubbery, well-circumscribed, biphasic stroma + ducts, estrogen-sensitive; phyllodes: older women, leaf-like projections, stromal overgrowth, can be malignant/recur {k: phyllodes; leaf-like}
BP-rp23-04 [hi] Intraductal papilloma: bloody nipple discharge from a lactiferous duct {k: intraductal papilloma; bloody}
BP-rp23-05 [hi] Fat necrosis: trauma/surgery, calcifications and saponification (mimics cancer) {k: fat necrosis; saponification}
BP-rp23-06 [hi] Acute mastitis (S. aureus, breastfeeding; continue nursing, dicloxacillin/cephalexin); periductal mastitis (smokers, squamous metaplasia, subareolar abscess); duct ectasia (older multiparous, plasma cells, green-brown discharge) {k: mastitis; duct ectasia; squamous metaplasia}
BP-rp23-07 [hi] Galactorrhea causes: prolactinoma, antipsychotics/metoclopramide, hypothyroidism, nipple stimulation {k: galactorrhea}
BP-rp23-08 [mid] Congenital/developmental: polythelia/polymastia along the milk line, amastia, Poland syndrome; juvenile hypertrophy {k: milk line|polythelia; poland}
BP-rp23-09 [mid] Silicone implants: capsular contracture, rupture, siliconoma; breast-implant associated anaplastic large cell lymphoma (textured implants, CD30+); no proven autoimmune disease link {k: capsular contracture; anaplastic large cell}
BP-rp23-10 [mid] Gynecomastia mechanism: estrogen:androgen imbalance (see rp22) {k: estrogen:androgen|estrogen-to-androgen|imbalance}
BP-rp23-11 [mid] Fibrocystic change presents in premenopausal women as bilateral, multifocal lumpy breasts that are tender before menses and improve afterward {k: premenstrual; multifocal}
BP-rp23-12 [mid] Physiologic gynecomastia occurs at three ages (newborns from maternal estrogen, puberty, older men as testosterone falls) and is concentric beneath the areola, whereas male breast cancer is a hard, eccentric mass with nipple retraction or discharge {k: physiologic; eccentric}

## rp24 — Breast cancer
BP-rp24-01 [hi] Risk factors: female sex, age, BRCA1/2, family history, early menarche/late menopause, nulliparity/late first birth, obesity after menopause, combined HT, chest radiation, atypia; breastfeeding protective {k: brca1; brca2; menarche}
BP-rp24-02 [hi] Susceptibility genes and functions: BRCA1/2 (homologous recombination repair), TP53 (Li-Fraumeni), PTEN (Cowden), CDH1 (lobular + diffuse gastric), STK11 (Peutz-Jeghers), PALB2, ATM, CHEK2 {k: li-fraumeni; cowden; cdh1}
BP-rp24-03 [hi] DCIS: fills ducts, comedo necrosis, microcalcifications on mammogram, does not cross basement membrane; LCIS: E-cadherin loss, incidental, marker of bilateral risk {k: comedo; microcalcification; e-cadherin}
BP-rp24-04 [hi] Invasive ductal carcinoma: most common, firm stellate mass, desmoplasia; invasive lobular: single-file cells, E-cadherin loss, bilateral/multicentric, orderly {k: invasive ductal; invasive lobular; single-file|single file}
BP-rp24-05 [hi] Special types: medullary (BRCA1, syncytial sheets with lymphocytes), mucinous/colloid (older, good), tubular (good), metaplastic (triple-negative, poor), inflammatory carcinoma (dermal lymphatic tumor emboli, peau d'orange, poor) {k: medullary; mucinous|colloid; peau d'orange}
BP-rp24-06 [hi] Paget disease of the nipple: eczematous nipple from underlying DCIS/invasive carcinoma cells in epidermis {k: paget}
BP-rp24-07 [hi] Molecular classes: luminal A (ER/PR+, HER2-, low Ki-67; best), luminal B, HER2-enriched, basal-like/triple-negative (BRCA1, young Black women, poor) {k: luminal; her2; triple-negative|triple negative}
BP-rp24-08 [hi] Prognosis: axillary lymph node status is the strongest predictor; tumor size, grade, receptor status, distant metastasis {k: lymph node; prognos}
BP-rp24-09 [hi] HER2 (ERBB2) receptor tyrosine kinase amplification; trastuzumab (reversible cardiotoxicity), pertuzumab, lapatinib/tucatinib (TKIs), antibody-drug conjugates {k: trastuzumab; cardiotoxic; erbb2}
BP-rp24-10 [hi] Endocrine therapy: tamoxifen (SERM; premenopausal; endometrial cancer and VTE risk), aromatase inhibitors (anastrozole, letrozole, exemestane; postmenopausal; bone loss), fulvestrant (SERD), CDK4/6 inhibitors; raloxifene for risk reduction without endometrial effect; PARP inhibitors in BRCA {k: tamoxifen; anastrozole|aromatase inhibitor; raloxifene}
BP-rp24-11 [mid] Male breast cancer: BRCA2, Klinefelter; usually invasive ductal, ER+ {k: male breast cancer}
BP-rp24-12 [mid] Precursor sequence: usual hyperplasia -> ADH -> DCIS -> invasive ductal; ALH -> LCIS -> invasive lobular {k: precursor}
BP-rp24-13 [mid] Mammography screening; spread to axillary nodes, bone, liver, lung, brain {k: mammogra}
BP-rp24-14 [mid] Most breast carcinomas arise in the upper outer quadrant, which holds the most glandular tissue (including the axillary tail) {k: upper outer quadrant; axillary tail|tail of spence}
BP-rp24-15 [mid] Further breast cancer risk factors: alcohol use (dose-related) and dense breast tissue on mammography (which also hides tumors and lowers mammographic sensitivity) {k: alcohol; breast density|dense breast}

## rp25 — Maternal physiology and the hormones of pregnancy
BP-rp25-01 [hi] Cardiovascular: cardiac output up ~40-50% (stroke volume then heart rate), SVR down, BP lowest in 2nd trimester, supine hypotension (IVC compression) {k: cardiac output; systemic vascular resistance|svr; supine}
BP-rp25-02 [hi] Blood: plasma volume rises more than red cell mass (dilutional anemia), leukocytosis, hypercoagulable (more fibrinogen and clotting factors) {k: plasma volume; dilutional; hypercoagul}
BP-rp25-03 [hi] Lungs: progesterone drives ventilation -> higher tidal volume, respiratory alkalosis with compensatory low bicarbonate; FRC and residual volume fall (diaphragm up); TLC ~unchanged {k: tidal volume; respiratory alkalosis; functional residual capacity|frc}
BP-rp25-04 [hi] Kidney: GFR up ~50% (low creatinine), glucosuria, ureteral dilation (hydroureter, more pyelonephritis) {k: gfr; creatinine; hydronephrosis|hydroureter}
BP-rp25-05 [mid] GI and MSK: progesterone slows gut (constipation, reflux), gallstones; relaxin loosens ligaments, lordosis, carpal tunnel {k: relaxin; constipation}
BP-rp25-06 [hi] Endocrine: hPL insulin resistance, rising prolactin, TBG up (total T4 up), cortisol and CBG up, pituitary enlarges {k: prolactin; insulin resistance}
BP-rp25-07 [hi] hCG doubles about every 48 h early; peaks ~10 weeks; progesterone from corpus luteum then placenta {k: doubl; 10 weeks}
BP-rp25-08 [mid] Skin in pregnancy: melasma, linea nigra, striae, spider angiomas {k: melasma; linea nigra}
BP-rp25-09 [lo] Normal pregnancy lab shifts: serum alkaline phosphatase rises from the placenta without liver disease; BUN and creatinine fall; fibrinogen rises {k: alkaline phosphatase; fibrinogen}
BP-rp25-10 [mid] Plasma volume expands in pregnancy because estrogen and the fall in systemic vascular resistance activate the renin-angiotensin-aldosterone system, which retains sodium and water despite lower blood pressure {k: renin; aldosterone}

## rp30 — Prenatal care: dating, screening, teratogens and vaccines
BP-rp30-01 [hi] Dating: first-trimester crown-rump length is most accurate; Naegele's rule; term 37-42 weeks (preterm < 37, post-term >= 42) {k: crown-rump; naegele; preterm}
BP-rp30-02 [hi] Gravidity/parity nomenclature (G P TPAL) {k: gravid; parity}
BP-rp30-03 [hi] Aneuploidy screening: cell-free DNA; first-trimester (nuchal translucency, PAPP-A, hCG) and quad screen (AFP, estriol, hCG, inhibin A) patterns for trisomy 21 (AFP low, estriol low, hCG high, inhibin high) and 18 (all low); diagnostic CVS (10-13 wk) and amniocentesis (15-20 wk) {k: nuchal translucency; quad screen; amniocentesis}
BP-rp30-04 [hi] Maternal serum AFP high in neural tube and abdominal wall defects, multiples, wrong dates; folic acid 0.4 mg (4 mg after prior NTD) before conception {k: neural tube; folic acid; alpha-fetoprotein|afp}
BP-rp30-05 [hi] Vaccines: Tdap each pregnancy (27-36 wk), inactivated influenza, RSV; live vaccines (MMR, varicella) contraindicated {k: tdap; live vaccine|live}
BP-rp30-06 [hi] Teratogens: ACE inhibitors/ARBs, warfarin, isotretinoin/vitamin A, valproate, carbamazepine, phenytoin, lithium (Ebstein), methotrexate, thalidomide, tetracyclines, aminoglycosides, DES, alcohol, cocaine, methimazole, misoprostol, mycophenolate {k: isotretinoin; valproate; warfarin}
BP-rp30-07 [mid] Routine prenatal labs and ultrasound by trimester; fundal height tracks gestational age (20 wk at umbilicus) {k: fundal height; umbilicus}
BP-rp30-08 [mid] Open neural tube defects leak AFP: high maternal serum and amniotic fluid AFP, with amniotic acetylcholinesterase as the confirmatory marker; closed defects may not raise AFP; CVS samples placental tissue and cannot detect neural tube defects {k: acetylcholinesterase; amniotic fluid}
BP-rp30-09 [mid] Screen for and treat asymptomatic bacteriuria in pregnancy: progesterone-related ureteral dilation and uterine compression raise the risk of pyelonephritis, which can trigger preterm labor {k: asymptomatic bacteriuria; pyelonephritis}
BP-rp30-10 [hi] Signature teratogen effects: ACE inhibitors/ARBs (fetal renal failure, oligohydramnios), warfarin (nasal hypoplasia, stippled epiphyses; heparin does not cross the placenta), isotretinoin (craniofacial, cardiac, CNS defects), valproate and carbamazepine (neural tube defects), phenytoin (fetal hydantoin syndrome: hypoplastic nails and distal phalanges), methotrexate (limb and craniofacial defects), thalidomide (phocomelia), tetracyclines (tooth discoloration), aminoglycosides (ototoxicity), alcohol (fetal alcohol syndrome: smooth philtrum, thin upper lip, microcephaly), misoprostol (Mobius sequence), mycophenolate (microtia, clefts), topiramate (cleft lip), NSAIDs late in pregnancy (premature ductus arteriosus closure, oligohydramnios) {k: phocomelia; stippled epiphyses; smooth philtrum; ductus arteriosus}
BP-rp30-11 [hi] First-trimester screen patterns (10-13 weeks): trisomy 21 = increased nuchal translucency and high hCG with low PAPP-A; trisomy 18 = low hCG and low PAPP-A (nuchal translucency also increased) {k: papp-a; first-trimester|first trimester}

## rp26 — Early pregnancy complications: ectopic, pregnancy loss and gestational trophoblastic disease
BP-rp26-01 [hi] Framework: pregnant? (hCG) -> intrauterine? (transvaginal ultrasound; gestational sac, yolk sac, fetal pole, cardiac activity) -> viable? -> unstable? {k: gestational sac; yolk sac; fetal pole}
BP-rp26-02 [hi] Discriminatory zone: hCG above ~1,500-3,500 without an intrauterine sac suggests ectopic; serial hCG (a normal pregnancy rises >= ~35-50% in 48 h) {k: discriminatory zone|discriminatory; serial}
BP-rp26-03 [hi] Ectopic: ampulla most common; risk factors PID, prior ectopic, tubal surgery, IUD in place, smoking, IVF; amenorrhea + pain + bleeding; rupture -> hemoperitoneum; methotrexate if stable and criteria met, else surgery {k: ectopic; ampulla; methotrexate}
BP-rp26-04 [hi] Spontaneous abortion types: threatened (closed os), inevitable (open os), incomplete (tissue passed, open), complete, missed (nonviable, closed); most first-trimester losses are chromosomal {k: threatened; inevitable; missed}
BP-rp26-05 [hi] Recurrent pregnancy loss: antiphospholipid syndrome, septate uterus, parental translocation {k: antiphospholipid; recurrent}
BP-rp26-06 [hi] Complete mole: 46,XX (or XY) all paternal, empty egg; no fetal parts; "snowstorm"/"cluster of grapes"; very high hCG; hyperemesis, early pre-eclampsia (< 20 weeks), hyperthyroidism, theca lutein cysts; uterus large for dates; p57 negative {k: complete mole; snowstorm|cluster of grapes; paternal}
BP-rp26-07 [hi] Partial mole: triploid 69,XXY (two sperm), fetal parts present, lower hCG, p57 positive {k: partial mole; triploid; 69}
BP-rp26-08 [hi] Management: suction curettage, serial hCG to zero, contraception during follow-up; persistent/rising hCG = gestational trophoblastic neoplasia {k: suction; serial hcg|hcg follow}
BP-rp26-09 [hi] GTN: invasive mole, choriocarcinoma (cytotrophoblast + syncytiotrophoblast, no villi, early hematogenous spread to lungs), placental site trophoblastic tumor (hPL); methotrexate/actinomycin D chemosensitive {k: choriocarcinoma; invasive mole; placental site}
BP-rp26-10 [mid] Hyperemesis gravidarum: weight loss, ketosis, hypokalemic metabolic alkalosis; molar/multiple pregnancy {k: hyperemesis}
BP-rp26-11 [mid] Pregnancy of unknown location; Rh immunoglobulin for bleeding in Rh-negative women {k: unknown location}
BP-rp26-12 [mid] Gestational trophoblastic disease risks: molar pregnancy is more likely at the extremes of maternal age and after a prior mole; complete moles progress to gestational trophoblastic neoplasia far more often than partial moles; choriocarcinoma can follow any pregnancy (mole, miscarriage, ectopic or term delivery) {k: maternal age; prior mole|previous mole; gestational trophoblastic neoplasia}

## rp27 — Complications of later pregnancy
BP-rp27-01 [hi] Hypertensive disorders: chronic (before 20 wk), gestational (after 20 wk, no proteinuria), pre-eclampsia (after 20 wk + proteinuria or end-organ damage), severe features, eclampsia (seizures), HELLP (hemolysis, elevated liver enzymes, low platelets) {k: gestational hypertension; pre-eclampsia|preeclampsia; hellp}
BP-rp27-02 [hi] Pre-eclampsia mechanism: abnormal spiral artery remodeling -> placental ischemia -> antiangiogenic factors (sFlt-1) -> endothelial dysfunction; fibrinoid necrosis of placental vessels {k: spiral arter; sflt; endothelial}
BP-rp27-03 [hi] Treatment: delivery is definitive; magnesium sulfate prevents/treats eclamptic seizures (toxicity: loss of reflexes, respiratory depression -> calcium gluconate); antihypertensives labetalol, hydralazine, nifedipine; low-dose aspirin prevention {k: magnesium sulfate; calcium gluconate; labetalol}
BP-rp27-04 [hi] Gestational diabetes: hPL (+ other placental hormones) insulin resistance; screen 24-28 weeks (1-h 50 g then 3-h 100 g, or 2-h 75 g); diet then insulin; macrosomia, shoulder dystocia, neonatal hypoglycemia (fetal hyperinsulinemia), polyhydramnios; later type 2 diabetes {k: gestational diabetes; 24-28 weeks|24 to 28; macrosomia}
BP-rp27-05 [hi] Pregestational diabetes: congenital heart defects (TGA, VSD), neural tube defects, caudal regression, stillbirth; tight preconception control {k: caudal regression; transposition}
BP-rp27-06 [hi] Placenta previa (painless bright-red bleeding; no digital exam), placenta accreta/increta/percreta (defective decidua; prior cesarean/previa; hemorrhage at delivery), abruption (painful bleeding, hypertonic uterus; hypertension, cocaine, smoking, trauma; DIC), vasa previa (fetal vessels; rupture of membranes -> fetal bleeding) {k: placenta previa|previa; accreta; abruption}
BP-rp27-07 [hi] Rh alloimmunization: Rh-negative mother makes anti-D IgG after fetomaternal hemorrhage -> hemolytic disease/hydrops in the next Rh+ fetus; anti-D immunoglobulin at 28 weeks and within 72 h of delivery or bleeding; Kleihauer-Betke {k: anti-d|rhogam|rho(d); 28 weeks; kleihauer}
BP-rp27-08 [hi] Preterm labor: tocolytics to allow steroids (nifedipine, indomethacin < 32 wk (ductus closure, oligohydramnios), terbutaline), antenatal betamethasone (lung maturity), magnesium for fetal neuroprotection < 32 wk, GBS prophylaxis {k: tocoly; betamethasone; neuroprotect}
BP-rp27-09 [mid] Premature rupture of membranes; chorioamnionitis {k: rupture of membranes; chorioamnionitis}
BP-rp27-10 [mid] Fetal growth restriction vs macrosomia; fundal height lag; amniotic fluid abnormalities {k: growth restriction}
BP-rp27-11 [mid] Skin/liver disorders of late pregnancy: intrahepatic cholestasis (itching palms/soles, high bile acids, stillbirth risk; ursodiol), PUPPP (striae, benign), pemphigoid gestationis, acute fatty liver of pregnancy {k: intrahepatic cholestasis; pruritic urticarial|puppp; pemphigoid gestationis}
BP-rp27-12 [mid] Normal BP trajectory: falls in 1st-2nd trimester, returns toward baseline by term {k: trajectory|returns}
BP-rp27-13 [mid] Hypertensive disorder thresholds: blood pressure 140/90 or higher on two readings; proteinuria 300 mg per 24 h or more (protein:creatinine ratio 0.3 or more); severe range 160/110 or higher; chronic hypertension with new proteinuria or end-organ damage after 20 weeks = superimposed pre-eclampsia {k: 140/90; 300 mg; 160/110}
BP-rp27-14 [mid] Pre-eclampsia risk factors: prior pre-eclampsia, nulliparity, multifetal gestation, chronic hypertension, pregestational diabetes, chronic kidney disease, antiphospholipid syndrome or SLE, obesity; molar pregnancy gives pre-eclampsia before 20 weeks {k: nulliparity|nulliparous; multifetal|twin; molar}
BP-rp27-15 [mid] Infant of a diabetic mother: maternal glucose crosses the placenta but insulin does not, so fetal beta-cell hyperplasia and hyperinsulinemia cause macrosomia, neonatal hypoglycemia, polycythemia, hypocalcemia and respiratory distress (insulin delays surfactant synthesis) {k: surfactant; polycythemia; hyperplasia}
BP-rp27-16 [mid] ABO vs Rh hemolytic disease: ABO disease (type O mother with IgG anti-A or anti-B) can affect the first pregnancy, is usually mild and is not preventable; Rh disease needs prior sensitization, spares the first pregnancy and can cause hydrops; the newborn direct Coombs test is positive in Rh disease and often only weakly positive in ABO disease {k: type o; first pregnancy; coombs}
BP-rp27-17 [mid] Fetal growth restriction (estimated weight under the 10th percentile): symmetric (early insult such as aneuploidy or congenital infection) vs asymmetric head-sparing (late placental insufficiency from pre-eclampsia, hypertension or smoking) {k: 10th percentile; asymmetric; head-sparing|head sparing}
BP-rp27-18 [mid] Amniotic fluid embolism: sudden hypoxemia, hypotension and DIC during labor or right after delivery {k: amniotic fluid embolism; dic|disseminated intravascular}
BP-rp27-19 [mid] Gestational diabetes risk factors: obesity, prior gestational diabetes or macrosomic infant, PCOS, family history of type 2 diabetes, older maternal age; high-risk patients are tested at the first prenatal visit and everyone else at 24-28 weeks (THIRD-TRI objectives 4-5) {k: prior gestational diabetes|previous gestational diabetes; first prenatal visit}
BP-rp27-20 [mid] Placental abruption can bleed behind the placenta (concealed retroplacental hemorrhage), so shock, a rigid tender uterus and fetal distress can be out of proportion to the visible bleeding {k: concealed; retroplacental}
BP-rp27-21 [mid] Chorioamnionitis (intra-amniotic infection, usually ascending after prolonged membrane rupture): maternal fever with fetal tachycardia, uterine tenderness or purulent, foul-smelling amniotic fluid; treated with broad-spectrum antibiotics and delivery; it raises neonatal sepsis risk {k: intra-amniotic; fetal tachycardia}

## rp28 — Labor, delivery and the postpartum period
BP-rp28-01 [hi] Onset of labor: fetal cortisol/placental CRH, rising estrogen:progesterone, prostaglandins, oxytocin receptors; gap junctions (connexin 43) synchronize contraction; Ferguson reflex {k: gap junction; connexin; ferguson}
BP-rp28-02 [hi] Stages of labor: 1st (latent/active; to full dilation), 2nd (full dilation to delivery), 3rd (placenta); arrest disorders {k: first stage; second stage; third stage}
BP-rp28-03 [hi] Cardinal movements: engagement, descent, flexion, internal rotation, extension, external rotation (restitution), expulsion {k: engagement; internal rotation; extension}
BP-rp28-04 [hi] Bishop score and cervical ripening: misoprostol (PGE1), dinoprostone (PGE2), mechanical (balloon); induction with oxytocin {k: bishop; dinoprostone; oxytocin}
BP-rp28-05 [hi] Fetal heart tracings: early decelerations (head compression, benign), variable (cord compression), late (uteroplacental insufficiency); non-stress test, biophysical profile {k: late deceleration|late decel; variable; non-stress|nonstress}
BP-rp28-06 [mid] Leopold maneuvers; breech presentation and external cephalic version {k: leopold; breech; external cephalic}
BP-rp28-07 [hi] Labor analgesia: epidural (T10-L1 visceral pain of first stage; hypotension), pudendal block (S2-S4, second stage, ischial spine landmark), systemic opioids (neonatal respiratory depression) {k: epidural; pudendal block|pudendal}
BP-rp28-08 [hi] Shoulder dystocia -> Erb-Duchenne palsy (C5-C6: arm adducted, internally rotated, "waiter's tip") or Klumpke (C8-T1: claw hand, Horner) {k: shoulder dystocia; erb; klumpke}
BP-rp28-09 [hi] Perineal lacerations: 1st (skin/mucosa), 2nd (perineal body muscles), 3rd (external anal sphincter), 4th (rectal mucosa) {k: perineal body; external anal sphincter; fourth-degree|4th degree|fourth degree}
BP-rp28-10 [hi] Postpartum hemorrhage (> 1000 mL; normal vaginal < 500): uterine atony most common ("4 Ts"); oxytocin first; methylergonovine (avoid in hypertension), carboprost (avoid in asthma), misoprostol, tranexamic acid; retained placenta {k: atony; methylergonovine; carboprost}
BP-rp28-11 [hi] Lactation: prolactin (milk production) and oxytocin (let-down, myoepithelial contraction); estrogen/progesterone block lactation until delivery; lactational amenorrhea {k: let-down; myoepithelial}
BP-rp28-12 [mid] Postpartum: lochia, uterine involution, postpartum endometritis, mastitis, postpartum thyroiditis, Sheehan, blues vs depression vs psychosis {k: lochia; postpartum depression}
BP-rp28-13 [mid] Breastfeeding contraindications (HIV in the US, active untreated TB, certain drugs, galactosemia in infant) {k: galactosemia}
BP-rp28-14 [mid] Fetal heart tracing basics: a baseline of 110-160/min with moderate variability and accelerations is reassuring; absent variability with recurrent late decelerations or bradycardia signals fetal acidemia; a sinusoidal pattern means severe fetal anemia {k: 110-160|110 to 160; variability; sinusoidal}
BP-rp28-15 [mid] Oxytocin acts on Gq-coupled myometrial receptors (IP3, calcium); high or prolonged doses cause uterine tachysystole and water intoxication with hyponatremia (oxytocin resembles ADH) {k: tachysystole|hyperstimulation; hyponatremia|water intoxication}

## rp29 — Gender-affirming care, sexual health and reproductive ethics
BP-rp29-01 [mid] Gender terminology (sex assigned at birth, gender identity, expression, sexual orientation); patient-preferred names and pronouns {k: gender identity; pronoun}
BP-rp29-02 [mid] Organ inventory drives screening (cervical screening if cervix present; prostate if prostate present; breast screening by tissue and hormone exposure) {k: organ inventory}
BP-rp29-03 [hi] Feminizing therapy: estradiol + antiandrogen (spironolactone; monitor K+) or GnRH agonist; VTE risk; breast growth, reduced erections/spermatogenesis {k: feminizing; spironolactone; vte|thromboembol}
BP-rp29-04 [hi] Masculinizing therapy: testosterone (monitor hematocrit; acne, amenorrhea, voice deepening, clitoral growth); testosterone is NOT contraception and is teratogenic {k: masculinizing; hematocrit; not contracepti}
BP-rp29-05 [hi] Puberty blockers: GnRH agonists (continuous) pause puberty reversibly {k: puberty blocker; gnrh agonist}
BP-rp29-06 [mid] Fertility preservation before transition; surgical options and their risks {k: fertility preservation}
BP-rp29-07 [hi] Adolescent confidentiality and minors' consent for contraception, STI care and prenatal care (in most states without parental consent); sexual history (5 Ps) {k: confidential; minor; 5 ps|five ps}
BP-rp29-08 [mid] Trauma-informed, culturally responsive care; historical abuses in reproductive medicine and research (e.g., coerced sterilization, Tuskegee) shaping mistrust; informed consent {k: trauma-informed; informed consent}
BP-rp29-09 [mid] Health disparities (maternal mortality, menopause care, LGBTQ+ access) {k: disparit}
BP-rp29-10 [mid] Law vs ethics vs clinical judgment can diverge (course objective LIFESPAN-CASES.5) {k: ethic; legal}
BP-rp29-11 [mid] Gender dysphoria (DSM-5): marked incongruence between experienced gender and assigned sex for at least 6 months with clinically significant distress or impairment; transgender identity itself is not a disorder {k: gender dysphoria; 6 months|six months; distress}
BP-rp29-12 [mid] Gender-affirming hormones are not contraception: estradiol lowers but does not reliably stop sperm production, and a patient on testosterone who has a uterus and ovaries can conceive (use an IUD or progestin method); testosterone also causes vaginal atrophy and lowers HDL {k: contracepti; iud; atrophy}
