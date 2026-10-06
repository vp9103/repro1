# R6 notes: First Aid checklist audit G (rp1-rp15), 64 rows

Source: .repro/coverage/fa-audit-G.md. All 64 rows were applied; three carry a deliberate trim of a clause the Step 1 sources do not support (rp1 superior gluteal, rp11 smokers, rp12 lichen sclerosus), each explained on its line. Block numbers (bN) are the 0-based body indices of the files as they now stand; splits and inserted rows shift later indices. Check: `python3 .repro/fast_check.py --ws R6 --topics rp1,...,rp15 --build` prints only `ok` lines. No SVG, figure, glossary, question or rapid file was changed (no row names a figure label, so no pt.hl needed re-pointing). Where a row put a sentence at a place that would break the paragraph's flow, it went to the nearest place that reads logically, or into a split or new paragraph under a fitting heading; each line says so.

Body words before -> after (band 400-2600): rp1 2332 -> 2537, rp2 1917 -> 2064, rp3 1310 -> 1318, rp4 2123 -> 2523, rp5 2059 -> 2170, rp6 1764 -> 2018, rp7 1834 -> 1893, rp8 1899 -> 1997, rp9 2407 -> 2487, rp10 1887 -> 1944, rp11 1918 -> 1984, rp12 1896 -> 1944, rp13 1936 -> 2037, rp14 1800 -> 1904, rp15 1810 -> 1944. Longest paragraph in any topic: 146 words (band 15-170).

## rp1
- rp1 b7 prolapse (MISSING): applied in b7 as given (obesity and chronic coughing or straining; cystocele most common with frequency, incomplete emptying or leakage; rectocele or enterocele, difficult defecation).
- rp1 new paragraph after b32, urge and overflow incontinence (MISSING): applied as new b33 before figure rp1_nerves. Opening changed from "This wiring sorts" to "Failures of bladder storage and emptying sort urinary incontinence into three types" (the paragraph also names the outlet, not only wiring); stress, urge and overflow each bold; "a sudden urge to void". Facts as given (oxybutynin M3 block, mirabegron beta-3, catheterization, alpha-1 blocker, bethanechol).
- rp1 b14 obturator nerve (MISSING): applied in b14 as "The same nerve can be injured in pelvic surgery, which weakens adduction of the thigh and numbs the medial thigh" (the given sentence repeated "medial thigh" and "the nerve" had no clear antecedent after the pain sentence).
- rp1 b15 round ligament (MISSING): applied in the ligament table, Round ligament row, cell "Only the small artery of Sampson"; the Ovarian ligament row keeps "No major vessel".
- rp1 b31 superior gluteal injection (MISSING): applied at the end of b31 (after the Trendelenburg sentence, so "the injured leg" is not separated from the wound sentence). Trimmed: "preferably the anterolateral (ventrogluteal) site" left out as a nursing-practice detail that First Aid's nerve entry does not teach; the Step 1 point (injection in the upper inner buttock injures the nerve, so use the upper outer quadrant) is kept.

## rp2
- rp2 b6 straddle injury (QUALIFIER): applied in b6/b7. b6 was split after "just below the inguinal ligament" (it would have reached 160 words); the Buck fascia sentence and "Urine then fills the pouch and follows Colles fascia ..." are in the new b7 as given.
- rp2 new paragraph after b7, bladder rupture (MISSING): applied as new b10 under a new heading b9 "Where does urine go when the bladder ruptures?" (a new subject, so a heading rather than a paragraph under the straddle-injury question). b38 (sexp why) now ends "a rupture of the bladder dome leaks urine into the peritoneal cavity" as given.
- rp2 b16 pudendal nerve injury (MISSING): applied in b19, right after the ilioinguinal sentence as given; b16 was split there so the internal pudendal artery sentences form their own paragraph (b20) and the injury sentence does not interrupt them.
- rp2 b30 lymph drainage (QUALIFIER): applied in b34 as "The uterine tubes and the fundus also follow the ovarian vessels to para-aortic nodes, and a little fundal lymph follows the round ligament to the groin". "upper uterus" became "fundus" so it does not contradict the sentence above that sends the uterine body to iliac nodes.

## rp3
- rp3 b14 steps 2 and 3 (QUALIFIER): applied in the steps block (b14), both sentences as given (estrogen and progesterone block prolactin's action; both fall within days).

## rp4
- rp4 genes of embryogenesis (MISSING): applied as new b16 under a new heading b15 "Which genes lay out the body plan?", placed after figure rp4_origins (not before it, so the germ-layer figure stays under the germ-layer heading). Opening "Four groups of signaling genes pattern the embryo"; SHH, Wnt-7 (limb ectoderm), FGF (apical ectodermal ridge), HOX and isotretinoin ("partly by disturbing HOX expression") as given.
- rp4 b5 syncytiotrophoblast (MISSING): applied in b5, ending "lowers the chance that the mother's immune system attacks this fetal tissue" (not "maternal T cells").
- rp4 b6 week 4 and 8 (MISSING): applied in b6 as given.
- rp4 b10 and b11 germ-layer derivatives (MISSING): applied in the b11 table (surface ectoderm, neural crest and its anomaly, paraxial mesoderm VACTERL parts, endoderm cells as given) and b10 (spleen sentence; "Two traps" became "Three traps").
- rp4 b16 allantois origin (QUALIFIER): applied in b18 as given.
- rp4 b16 fetal erythropoiesis (MISSING): applied in b18 as "the first blood cells, in weeks 3 to 8 ... Blood formation then moves to the liver (week 6 until birth), the spleen (weeks 10 to 28) and finally the bone marrow (from week 18 onward)", the First Aid numbers, in two sentences instead of one long one.
- rp4 b19 umbilical cord (QUALIFIER): applied in b22; b19 was split before "The umbilical cord carries two umbilical arteries" (b21 exchange and spiral arteries, b22 cord) to keep paragraphs short. Sentences as given.
- rp4 b21 urachus (MISSING): applied in b24 as given.
- rp4 b31 amniotic fluid (QUALIFIER): applied in b34; the two long replacements were cut into short sentences ("It also follows placental insufficiency, which cuts fetal kidney perfusion"; "Fetal anemia and multiple gestation also cause polyhydramnios").
- rp4 b32 birth-defect patterns (MISSING): applied in b35 (opening, malformation weeks 3 to 8 with cleft lip, deformation after that period) and a new b36 "Two further terms describe where and how far development was disturbed" (field defect, agenesis, aplasia, hypoplasia); split so b35 stays short. Bold limited to agenesis, aplasia, hypoplasia (three spans max).

## rp5
- rp5 b13 external genitalia (QUALIFIER): applied in b13 as given.
- rp5 b20 didelphys imaging clue (MISSING): applied in the Müllerian anomaly table as given.
- rp5 b26 cremasteric reflex (QUALIFIER): applied as new b27 (split from b26, which would have reached 167 words); sensory limb ilioinguinal plus femoral branch of the genitofemoral nerve, motor limb genital branch, L1 to L2, matching rp20 and glossary rp20cremreflex.
- rp5 b29 direct and indirect hernias (MISSING): applied as new b31 after the descent-failure paragraph, not inside it (the next sentence there, "Peritoneal fluid can instead fill it as a hydrocele", needs "it" to mean the processus vaginalis). Reworded so the patent processus explains the infant occurrence and the fasciae are a separate fact.

## rp6
- rp6 b7 androgen insensitivity (MISSING): applied in b7 as "Androgen insensitivity, complete or partial, is the most common cause of 46,XY DSD". b7 was split before "Complete androgen insensitivity usually comes to attention as ..." (b8) because it would have reached 154 words.
- rp6 11-beta and 17-alpha deficiencies (MISSING): applied as new heading b19 "Which enzyme blocks add hypertension?" and paragraph b20 after the aromatase why box (both enzymes in one place, not under the 46,XX-only heading), and in the b12 lab-pattern table as a 17-alpha row (as given). Extra: an 11-beta-hydroxylase row was added to the same table (same columns, from the same audit fact) so the two enzymes are sorted together; remove it if you want only the row the audit named.
- rp6 b15 maternal androgens (MISSING): applied as new b18 "A third source of androgen is the mother herself", after the aromatase why box, instead of at the end of the aromatase paragraph (where it would trail the girl's puberty history). Drugs and maternal tumor as given.
- rp6 b18 Turner meiotic error (MISSING): applied in b22 as "usually lost in the father's sperm through a meiotic error, which explains the lack of an age effect; a loss after fertilization, a mitotic error, gives a mosaic". b18 was split before "Short stature" (new b23).
- rp6 new paragraph after b19, Turner mosaic and pregnancy (MISSING): applied as new b25 after the webbed-neck steps, text as given.
- rp6 b20 Klinefelter (MISSING): applied in b26 as "Language and learning delays can occur, although intelligence is usually normal" ("can occur" for First Aid's "may present").

## rp7
- rp7 b1 nocturnal pulses (MISSING): applied in b1 after the kisspeptin sentence (not directly after "pulsatile bursts") so the pulses sentence is not split from "Kisspeptin neurons drive the pulses".
- rp7 b16 McCune-Albright (MISSING): applied in b16 as given. The testotoxicosis sentence moved to the start of b17 so b16 stays at 125 words; b17 still reads "In boys ... Other peripheral sources are".

## rp8
- rp8 b1, b22 and b25 epithelia (MISSING): applied in b1, b22 and b25, all three replacements as given.
- rp8 b7 oocyte survival (MISSING): applied in the b7 trap call as given.
- rp8 b15 estrogen receptors (MISSING): applied at the end of b15 (not before "Ovulation follows about 36 hours", which continues the surge sentence), rewritten as "receptors that the rest of the cycle depends on: its own and progesterone receptors in the endometrium, and LH receptors on granulosa cells", plus myometrial excitability and prolactin.
- rp8 b18 mittelschmerz (MISSING): applied in b18 step 2 as given.
- rp8 b19 progesterone effects (MISSING): applied in b19 as given.

## rp9
- rp9 b2 Turner (MISSING): applied in b2 as given.
- rp9 b28 PMS and PMDD (MISSING): applied as new heading b31 "What are premenstrual syndrome and premenstrual dysphoric disorder?" and paragraph b32 after the follicular-cyst paragraph, not appended to the dysmenorrhea paragraph (PMS is not a pelvic cause of pain). Adds "It occurs only in ovulatory cycles", which is why a combined hormonal contraceptive helps; SSRI first as given.

## rp10
- rp10 b11 CYP inducers (QUALIFIER): applied in the b11 trap call as given (phenobarbital, griseofulvin added).
- rp10 b14 hepatic adenoma (MISSING): applied at the end of b14 as given.
- rp10 b17 and b20 copper IUD (QUALIFIER): applied in b17 as given; in b20 the given clause would have read "works before implantation ... by preventing implantation", so it became "acts before a pregnancy has implanted: it delays ovulation or stops fertilization, and a copper IUD can also prevent implantation", and the next sentence (not an abortifacient) is unchanged.

## rp11
- rp11 b1 relative androgen excess (MISSING): applied in b1 as given, ending "this relative androgen excess can cause coarse hair on the chin and upper lip".
- rp11 b4 smokers (MISSING): applied in b4 as "a median age of 51 and earlier in smokers". The given "one to two years" was cut: First Aid says only "earlier in smokers", and the figure is not in the Step 1 sources the audit cites.
- rp11 b20 raloxifene (MISSING): applied in b20 as given.

## rp12
- rp12 b11 vaginosis risk factors and partners (MISSING): applied in b11 as given, with "so partners are not routinely treated".
- rp12 b20 lichen sclerosus (MISSING): applied in b20 as "and the vagina is spared: vulvar skin is keratinized stratified squamous epithelium, whereas the vagina is lined by nonkeratinized mucosa". "because" became a colon, because First Aid gives the two epithelia but not a causal link to lichen sclerosus.
- rp12 b30 vaginal carcinoma (MISSING): applied in b30 as given (HPV, VAIN).

## rp13
- rp13 b32 adenocarcinoma (MISSING): applied in b32 as given.
- rp13 b33 gynecologic cancer epidemiology (MISSING): applied at the start of b33 as given (worldwide most common; least common of the three in the United States; younger age, 35 to 44; cervical prognosis ranking left out as the audit says).
- rp13 b36 HIV (MISSING): applied in b36 as given (AIDS-defining illness).
- rp13 b37 cervicitis (QUALIFIER): applied in b37; the last sentence reads "When either is found, the patient and her partners are treated, because the infection can ascend ..." (the given "A patient with either infection and her partners" was the same fact in smoother order).

## rp14
- rp14 b3 hypertension (MISSING): applied in b3 as given.
- rp14 b22 leiomyoma (MISSING): applied in b22. The anemia and erythropoietin sentence follows the symptom sentences as given; the leuprolide sentence moved to the end of the paragraph ("shrinks them temporarily, for example before surgery") so the sarcoma and red-degeneration sentence stays next to the symptoms.
- rp14 b26 adenomyosis (MISSING): applied in b26 as given.
- rp14 b30 endometriosis (MISSING): applied in b30 as given.
- rp14 b31 leuprolide and danazol adverse effects (MISSING): applied in b31 as given; the danazol list was made one list ("acne, hirsutism, voice deepening, weight gain with edema, low HDL cholesterol, liver injury and idiopathic intracranial hypertension").
- rp14 b34 endometritis treatment (MISSING): applied in b34 as given.

## rp15
- rp15 b2 functional cysts (MISSING): applied in b2 as "its granulosa cells keep making estrogen, which can lead to endometrial hyperplasia" (the given "can ... can" reworded), and choriocarcinoma added to the theca lutein list.
- rp15 b19 endometrioid carcinoma (MISSING): applied in b19 as given.
- rp15 b20 anti-Yo (MISSING): applied at the end of b20, after the treatment sentence (not between presentation and treatment), as "Ovarian cancer, like breast cancer, can also trigger paraneoplastic cerebellar degeneration, in which anti-Yo antibodies attack Purkinje cells and cause ataxia".
- rp15 b27 teratoma malignant change (MISSING): applied in b27; b27 was split (see the next rows) so the teratoma paragraph holds teratomas only.
- rp15 b27 and b32 dysgerminoma (QUALIFIER): applied in the new b30 ("It is the most common malignant ovarian germ cell tumor, ... LDH, and some also raise hCG") and in the b34 table cell "LDH; sometimes hCG"; b30 opens "Other malignant germ cell tumors announce themselves with a marker".
- rp15 new paragraph after b28, anti-NMDA receptor encephalitis (MISSING): applied as new b29 right after image rp15_teratoma, text as given ("which often improve once the teratoma is removed").

## Not changed, for the record
- No SVG, figure JSON, glossary, question or rapid file was edited. Practice items in questions/rapid were not touched, so these now disagree with the lesson in wording and need a follow-up by whoever owns them (not R6, not V3's list): questions/rp4.json (allantois item, "The allantois grows from the hindgut ..." and the table cell "Hindgut and bladder to connecting stalk") and rapid/rp4.json ("The allantois grows from the hindgut into the connecting stalk") now contradict rp4 b18 (outpouching of the yolk sac, opens into the cloaca at the end of the hindgut); the answer (allantois, urachus) is unchanged. questions/rp3.json and rapid/rp3.json credit only the fall in progesterone with releasing prolactin; still correct as a simplification, but rp3 b14 now says estrogen and progesterone.
- fast_check topic, key-term, figure and rendered lines are all ok. Questions, rapid and drills for rp1-rp15 were also run on the overlay in scratch: the problems they report (rp3, rp4, rp10 to rp15 visual pointers) are identical on the untouched content.
