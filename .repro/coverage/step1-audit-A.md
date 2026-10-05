# Step 1 coverage audit A: the Step 1 rewrite of rp1-rp11, rp13, rp14

Auditor: fresh Opus reader, 2026-10-05 (coverage audit, not a phase verdict; nothing in content, engine, scope or the
ledger was edited). Read for every topic: the current lesson `fast/content/topics/<tid>.json` (body, pretest, grid,
sexp, why), its glossary `fast/content/glossary/<tid>.json`, every figure the body places (`figs/<key>.json` caption
and teach, `figs/<key>.svg` labels and aria-label), the guide card, the long version (`git show 5cb3043:content/topics/<tid>.json`
and its glossary), the worker cut lists (`fast/ws/S04` rp1-rp4, rp6; `S03` rp5, rp9; `S05` rp7, rp8, rp10, rp11; `S01`
rp13, rp14) and the topic's section of `scope/STEP1-BLUEPRINT.md`. Medical accuracy judged against First Aid, Pathoma,
Robbins and Costanzo, plus dated guidance where a lesson states it (USPSTF cervical screening 2018 final and 2024 draft,
CDC STI 2021, ACOG, ACS Cancer Facts and Figures 2026).

Glossary links were checked with the engine itself: each topic was rendered through `viewLearn()` on the built
`fast/repro-endo-path.html` (served from `fast/` on port 8813, server stopped afterwards) and every `.gterm` link was read
against the popup it opens (168 links, 70 to another topic's key).

Repair round R1 was merged at 23:12 while this audit ran. Every finding below was re-checked against the post-R1 files
and the rebuilt page; findings R1 had already fixed were dropped (see "Fixed by R1 during this audit").

Conventions
- Block `bN` is the 0-based index in the `body` array of `fast/content/topics/<tid>.json`. In rp13 and rp14 that array
  holds two `img` rows (rp13 b16, b18; rp14 b8, b23) that `content/topics` lacks, so later indices there are 1 or 2
  lower. Every row also quotes the text to change.
- Figure fixes name the file: captions and teach text live in `figs/<key>.json`; SVG labels and the aria-label live in
  `figs/<key>.svg` (edit the fast copy; the gated import carries it to `content/figs`).
- Not re-reported (known, being fixed): rp11/rp14 postmenopausal bleeding first step (R1 rewrote rp11 b23, rp14 b15 and
  rp11_firstmove; one leftover is noted at the end), rp12 SGLT2 and metronidazole wording, rp21 'tunica'/'basal cells'
  and rp22 'inhibin' aliases (R1 dropped them; confirmed gone from all 13 pages).

## rp1 The pelvis, pelvic floor and pelvic viscera

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp1 | b9 (peritoneum paragraph) | ERROR | The rewording added a false cause: "The **retropubic** space in front of the bladder lies outside the peritoneum, because a full bladder lifts the peritoneum away from it." The space is always extraperitoneal (peritoneum covers only the bladder's upper surface); filling only raises the peritoneal reflection above the pubis, which is why a suprapubic catheter misses the peritoneal cavity. The long version had no such "because". | Replace the two sentences "The **retropubic** space in front of the bladder lies outside the peritoneum, because a full bladder lifts the peritoneum away from it. A suprapubic catheter can therefore enter the bladder without entering the peritoneal cavity." with "The **retropubic** space in front of the bladder lies outside the peritoneum, which covers only the bladder's upper surface. A full bladder rises above the pubic symphysis and lifts that peritoneum with it, so a suprapubic catheter placed just above the pubis enters the bladder without entering the peritoneal cavity." |
| rp1 | b22 (call "The left gonadal vein takes the long way home") | ERROR | Last sentence "Pressure then rises in the left gonadal vein, causing flank pain and hematuria." blames hematuria and flank pain on the gonadal vein; they come from left renal vein hypertension. The rewrite also cut the gonadal consequence (left varicocele in men, pelvic congestion in women), the nutcracker link BP-rp1-07 asks for. | Replace that sentence with "Pressure rises in the left renal vein, causing left flank pain and hematuria, and backs up into the left gonadal vein, causing a left varicocele in men or pelvic congestion in women." |
| rp1 | b19 (water under the bridge) | CUT-STEP1 | The long version had the ureter crossing the pelvic brim "at the bifurcation of the common iliac artery". First Aid's course of the ureter is under the gonadal vessels, over the common iliac artery, then under the uterine artery or ductus deferens; only the last step is left. | Replace "Higher up, the ureter crosses the pelvic brim just medial to the ovarian vessels, so clamping the infundibulopelvic ligament can injure it too." with "Higher up, the ureter passes under the gonadal vessels and crosses the pelvic brim over the bifurcation of the common iliac artery, just medial to the ovarian vessels, so clamping the infundibulopelvic ligament can injure it too." |
| rp1 | b13 (cervix, vagina, tube) | CUT-STEP1 | The internal os was cut (long version: the canal "opens into the cavity at the internal os"). It is the landmark later lessons use for placenta previa and cervical insufficiency, and it is defined nowhere else. | Replace "The cervical canal opens into the vagina at the **external os**." with "The cervical canal runs from the internal os, where it opens into the uterine cavity, to the **external os**, where it opens into the vagina." |
| rp1 | b6 (second layer of support) | CUT-STEP1 | BP-rp1-09 names parietal, visceral and endopelvic fascia. The rewrite describes the first two but dropped their names. | Replace "lies between the fascia lining the pelvic walls and the fascia wrapping each organ" with "lies between the parietal fascia lining the pelvic walls and the visceral fascia wrapping each organ". |
| rp1 | b15 (ligament table, Round ligament row) | CUT-STEP1 | BP-rp1-04 lists the round ligament as a gubernaculum remnant; only the ovarian-ligament row says so (missing before and after the rewrite). | Change the Round ligament row's last cell from "Passes through the inguinal canal" to "Remnant of the lower gubernaculum; passes through the inguinal canal". |
| rp1 | b7 (prolapse) | FLOW | Splitting a sentence left a blunt fragment: "So **prolapse** appears years later." | Replace "and estrogen loss after menopause weakens them further. So **prolapse** appears years later." with "and estrogen loss after menopause weakens them further, so **prolapse** often appears years after the deliveries." |
| rp1 | b1 (bony pelvis) | FLOW | The brim is followed by four clipped sentences ("It is a line from...", "The false pelvis only holds...", "The true pelvis is...") that read as a list. | Replace "The pelvic brim divides the **false pelvis** above from the **true pelvis** below. It is a line from the sacral promontory (the forward-jutting top of the sacrum) to the top of the pubic symphysis. The false pelvis only holds abdominal organs. The true pelvis is the bony birth canal." with "The pelvic brim runs from the sacral promontory (the forward-jutting top of the sacrum) to the top of the pubic symphysis. Above it lies the **false pelvis**, which holds only abdominal organs; below it lies the **true pelvis**, the bony birth canal." |
| rp1 | b18 (internal iliac branches) | FLOW | "(the inferior vesical artery in men)" follows "internal pudendal arteries" and reads as a male name for the internal pudendal artery. | Replace "middle rectal and internal pudendal arteries (the inferior vesical artery in men)." with "middle rectal and internal pudendal arteries; in men the inferior vesical artery supplies the bladder base, seminal vesicles and prostate." |
| rp1 | fig rp1_male (b29) | NON-STEP1 | Caption, teach, labels and aria-label keep "seminal colliculus" and "Denonvilliers fascia", which S04 cut from b26/b27 as course-only (it also deleted the rp1_colliculus glossary entry), so both are now unexplained. | rp1_male.json cap: "which opens on the seminal colliculus of the prostatic urethra" → "which opens into the prostatic urethra"; "Denonvilliers fascia lies between the prostate and rectum, so" → "the prostate lies directly in front of the rectum, so". teach: "and opens on the seminal colliculus" → "and opens into the prostatic urethra"; "Denonvilliers fascia separates the rectum from the prostate and seminal vesicles, and" → "the rectum lies directly behind the prostate and seminal vesicles, and". rp1_male.svg: labels "Ejaculatory duct opens on" / "the seminal colliculus" → "Ejaculatory duct opens into" / "the prostatic urethra"; delete the text node "Denonvilliers fascia"; aria-label "with the seminal colliculus where the ejaculatory duct opens" → "where the ejaculatory duct opens" and "and Denonvilliers fascia in front of the rectum" → "in front of the rectum". |

rp1: 10 findings

## rp2 The perineum, external genitalia and lymph drainage

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp2 | glossary rp2_portocaval | CUT-STEP1 | The rewrite cut "Other sites are the lower esophagus and the umbilicus." The three portosystemic anastomoses (esophageal varices, caput medusae, rectal varices) are a First Aid item; the popup now names only the rectal site. | In `fast/content/glossary/rp2.json`, append to the rp2_portocaval `d`: " The other classic sites are the lower esophagus (esophageal varices) and the umbilicus (caput medusae)." |
| rp2 | b6 (under heading "Why does a straddle injury spread urine into the scrotum but not the thighs?") | FLOW | The heading asks why, but the answer sentence "It cannot pass into the thighs or the anal triangle." gives no reason; the attachments that explain it sit four sentences earlier. | Replace "It cannot pass into the thighs or the anal triangle." with "It cannot pass into the thighs, because Scarpa fascia is fused to the fascia lata, or back into the anal triangle, because Colles fascia is fused to the back edge of the perineal membrane." |
| rp2 | b17-b18 (under heading b13) | FLOW | Heading b13 "How do the pudendal nerve and vessels reach the perineum?" also covers b17 (urethral sphincters) and b18 (anal sphincters, perineal body, birth lacerations), which answer a different question. | Insert the heading row `["h", "Which sphincters guard the urethra and anus?"]` immediately before b17 ("The bladder outlet has two sphincters..."). |
| rp2 | fig rp2_vulva (b12) | NON-STEP1 | Caption, teach, labels and aria keep the navicular fossa (S04 cut it from b11 as beyond Step 1) and urethral lengths (3 cm, 2 cm, about 15 cm). | rp2_vulva.json cap and teach: replace "and the spongy part dilates in the bulb and again in the glans as the navicular fossa." with "and the spongy part runs through the bulb and the penis to the glans." rp2_vulva.svg: "Male urethra: three parts, two dilations" → "Male urethra: three parts"; "Prostatic urethra (3 cm)" → "Prostatic urethra"; "Membranous urethra (2 cm)" → "Membranous urethra"; "Spongy urethra (about 15 cm)" → "Spongy urethra (longest)"; delete the text nodes "Navicular fossa" and "dilation in the glans"; in the aria-label delete "the navicular fossa in the glans, ". |

rp2: 4 findings

## rp3 Breast anatomy and histology

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp3 | b10 (nerve table, Long thoracic row) | CUT-STEP1 | The old row ended "trouble raising the arm overhead"; the cell now gives only the winging. Serratus anterior abducts the arm above the horizontal, so long thoracic injury causes winging plus weak overhead abduction (First Aid upper-limb nerves). | Change the Injury cell to "**Winged scapula**: serratus anterior no longer holds the scapula against the ribs, so the arm cannot be raised above the horizontal". |
| rp3 | b6 (blood supply) | CUT-STEP1 | The synonym "(internal mammary artery)" was cut. BP-rp3-05 names the internal thoracic (mammary) artery, and the internal mammary nodes in b7 are named after it. | Replace "perforating branches of the **internal thoracic artery** come through" with "perforating branches of the **internal thoracic artery** (internal mammary artery) come through". |

rp3: 2 findings

## rp4 Early embryology, the placenta and twinning

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp4 | b6 (week 3) | CUT-STEP1 | S04 cut "the notochord ... persists as the nucleus pulposus" as beyond Step 1. It is First Aid's notochord derivative and now appears nowhere in the course. | Replace "The notochord forms in the midline." with "The notochord forms in the midline and later survives only as the nucleus pulposus of the intervertebral discs." |
| rp4 | b20 (trap "The umbilical vein carries the oxygen") | CUT-STEP1 | Cut "most of it bypassing the liver through the ductus venosus". The ductus venosus and its remnant, the ligamentum venosum, are First Aid fetal circulation and now appear nowhere in the course. | Replace "The single umbilical vein carries the most oxygenated blood in the fetus back toward the heart." with "The single umbilical vein carries the most oxygenated blood in the fetus back toward the heart, and much of it bypasses the liver through the ductus venosus, which becomes the ligamentum venosum after birth." |
| rp4 | b10 (germ layers) with b11 table | CUT-STEP1 | Turning the derivative paragraph into a table lost "Mesoderm forms muscle, bone, ... blood": no germ layer now owns blood, and bone appears only as vertebrae (First Aid mesoderm derivatives). | Before "Two traps come up often." insert "Mesoderm as a whole forms muscle, bone and connective tissue, the heart, vessels and blood, the kidneys and gonads, and the adrenal cortex." |
| rp4 | b3 and b4 (steps intro, title, step 1) | FLOW | b3 says "The steps below follow the oocyte from fertilization to implantation" and the title says "From fertilization to the implanted blastocyst", but steps 1 and 2 (capacitation, acrosome reaction) come before fertilization; step 1 also repeats "In the female tract". | b3: replace "The steps below follow the oocyte from fertilization to implantation." with "The steps below follow the sperm and the oocyte from capacitation to implantation." b4 title: "From capacitation to the implanted blastocyst, in order". b4 step 1 body: "Secretions of the uterus and tube strip cholesterol and surface proteins from the sperm membrane ({{rp4_cap\|capacitation}}), so the sperm can bind the zona pellucida." (the link is `{{rp4_cap` + pipe + `capacitation}}`; the backslash only escapes this table). |

rp4: 4 findings

## rp5 Sex determination and genital development

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp5 | b23 (last sentence) | ERROR | "If the bud arises too low on the duct, the ureter opens in the wrong place, an **ectopic ureter**." has the direction reversed: a bud that arises too high (cranially) on the mesonephric duct is absorbed late and opens too low (bladder neck, urethra, vagina, or male duct derivatives); a bud that arises too low opens high and lateral and refluxes. The long version had the same error and the rewrite kept it. | Replace with "If the bud arises too high on the duct, it is carried down with the duct and opens too low, an **ectopic ureter**." |
| rp5 | b26 (processus vaginalis) | FLOW | Splitting the sentence left a wrong antecedent: after "This ring is an opening in the transversalis fascia...", "It leaves the canal through the superficial ring" now says the ring leaves the canal. | Replace "It leaves the canal through the superficial ring in the external oblique aponeurosis." with "The processus then leaves the canal through the superficial ring in the external oblique aponeurosis." |
| rp5 | b29 (failed descent) | FLOW | The paragraph on failed descent ends with two sentences on cord contents and the cremasteric reflex, a jump back to normal anatomy. | Move the two sentences "Inside the cord run the vas deferens, testicular artery, pampiniform plexus and the genital branch of the genitofemoral nerve, which supplies the cremaster. Stroking the inner thigh makes the ipsilateral cremaster lift the testis, the cremasteric reflex, whose afferent limb is the femoral branch of the same nerve." from the end of b29 to the end of b26 (after "...a peritoneal sac around the front and sides of the testis."). |
| rp5 | b8 (urogenital sinus) | CUT-STEP1 | BP-rp5-05's homolog pairs (prostate with Skene glands, bulbourethral with Bartholin glands) are only implied by word order (before and after the rewrite); figure rp5_homologs lumps them too. | Replace "The sinus also forms the prostate and bulbourethral glands in males and the Skene and Bartholin glands in females." with "The sinus also forms the prostate and bulbourethral glands in males and their female homologs, the Skene glands (prostate) and Bartholin glands (bulbourethral)." |
| rp5 | b15 (trap "Hypospadias is ventral; epispadias is dorsal") | FLOW | Three-word sentences "**Hypospadias** is common." and "**Epispadias** is rare." chop each term off its mechanism. | Replace "**Hypospadias** is common. The urethral folds fail to fuse, so" with "**Hypospadias** is common: the urethral folds fail to fuse, so", and "**Epispadias** is rare. The opening is on the dorsal surface" with "**Epispadias** is rare: the opening is on the dorsal surface". |
| rp5 | fig rp5_mullerian (b18) teach | NON-STEP1 | The teach keeps "so MRI or 3-D ultrasound decides", the imaging step S03 cut from the body (T2 imaging paragraph). | In rp5_mullerian.json teach replace "a bicornuate uterus a deep cleft, so MRI or 3-D ultrasound decides." with "a bicornuate uterus a deep cleft." |

rp5: 6 findings

## rp6 Disorders of sex development and sex chromosome disorders

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp6 | b18 (Turner syndrome) | CUT-STEP1 | S04 cut "and is treated with growth hormone" as Step 2, but First Aid lists Turner syndrome as an indication for growth hormone, and it is now absent from the course. | Replace "Short stature comes from loss of one copy of the SHOX gene." with "Short stature comes from loss of one copy of the SHOX gene and is treated with growth hormone." |

rp6: 1 findings

## rp7 Puberty: normal, early and late

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp7 | fig rp7_precocious (b18) teach | NON-STEP1 | The teach keeps the LH cut-offs (0.3 and 5 mIU/mL) and the point that a long peripheral cause can switch on the central axis; S05 cut both from b14 and b16 as beyond Step 1. | In rp7_precocious.json teach delete the first sentence "A basal LH above roughly 0.3 mIU/mL on an ultrasensitive assay, or a peak above roughly 5 mIU/mL after GnRH stimulation, shows central puberty." and the last sentence "A peripheral cause that goes on long enough can advance the bone age and switch the central axis on." |
| rp7 | fig rp7_sequence (b8) teach | NON-STEP1 | The teach keeps peak growth velocities (8 and 9.5 cm a year) and spermarche at about age 13, cut from b7 and b11. | In rp7_sequence.json teach replace the first two sentences with "Peak height velocity comes near breast stage 3 in girls and at genital stage 3 to 4 in boys. Spermarche, the first ejaculation containing sperm, comes in mid-puberty." and keep the gynecomastia sentence. |

rp7: 2 findings

## rp8 The ovary, oogenesis and the menstrual cycle

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp8 | b25 (cervix and tube) | CUT-STEP1 | BP-rp8-09 names fimbriae, ampulla and isthmus. The tubal isthmus is now taught nowhere: the rewrite cut "the isthmus joins the uterine wall" from rp1 b13, and only an rp4 pretest distractor mentions it. | Replace "The fimbriae sweep the oocyte into the ampulla, where fertilization usually happens, and the cilia beat toward the uterus." with "The fimbriae sweep the oocyte into the ampulla, the widest part, where fertilization usually happens, and the cilia then move it through the narrow isthmus toward the uterus." |
| rp8 | fig rp8_twocell (b11) teach | NON-STEP1 | The teach keeps StAR, which S05 cut from b10 as beyond Step 1. | In rp8_twocell.json teach replace "LH acts on the theca cell to raise StAR, which carries cholesterol into the mitochondria, and desmolase, which converts cholesterol to pregnenolone;" with "LH acts on the theca cell to raise desmolase, which converts cholesterol to pregnenolone;". |
| rp8 | fig rp8_endometrium (b23) label | NON-STEP1 | The label "Compacta and spongiosa" names sublayers of the functionalis that the lesson never teaches (S05 pruned stratum spongiosum distractors for the same reason). | In rp8_endometrium.svg delete the text node "Compacta and spongiosa". |

rp8: 3 findings

## rp9 Amenorrhea, abnormal bleeding, PCOS and female infertility

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp9 | b3 (first sentence) | ERROR | "Breasts and a uterus suggest an outflow block." The rewrite dropped "or a cause of secondary amenorrhea". Most girls with breasts and a uterus have the usual causes (pregnancy, PCOS, hyperprolactinemia, functional hypothalamic amenorrhea, thyroid disease); outflow obstruction is one possibility. Figure rp9_workup already says "otherwise work up as secondary". | Replace with "Breasts and a uterus point either to an outflow block or to the same causes as secondary amenorrhea, which are then worked up the same way." |
| rp9 | b14 (PCOS mechanism) | CUT-STEP1 | PCOS ovarian morphology (enlarged ovaries with a peripheral ring of small follicles, the ultrasound "string of pearls") was cut from rp14 b4 and appears nowhere in the course. | Replace "so many small follicles line the ovary and none becomes dominant." with "so many small follicles line the enlarged ovary (the string of pearls on ultrasound) and none becomes dominant." |
| rp9 | fig rp9_infertility (b34) labels | NON-STEP1 | The labels keep a progesterone cut-off ("above 3 ng/mL"), IVF management ("Clip or remove hydrosalpinges first: their fluid lowers implantation") and saline sonography, all beyond Step 1 (P02 removed a progesterone cut-off from rapid items for this reason; S03 cut saline sonography from the body). | In rp9_infertility.svg: "above 3 ng/mL confirms ovulation" → "confirms ovulation"; delete the text nodes "Clip or remove hydrosalpinges first:" and "their fluid lowers implantation"; delete the text node "Saline sonography," (the next line "HSG, hysteroscopy" stays). |

rp9: 3 findings

## rp10 Contraception, emergency contraception and medication abortion

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp10 | b16 (progestin-only methods) | CUT-STEP1 | DMPA weight gain was cut (long version: "weight gain is typical", and "with DMPA, weight gain" in the bleeding paragraph). It is a classic DMPA adverse effect (ACOG, CDC) and is now absent from text and figures. | Replace "That explains its amenorrhea, bone density loss and slow return of fertility." with "That explains its amenorrhea, bone density loss and slow return of fertility, and weight gain is also common." |
| rp10 | b21 (ulipristal) | FLOW | A cut left a non sequitur: "It can still delay follicle rupture after LH has begun to rise, so it beats levonorgestrel late in the window and in obesity." The obesity advantage came from the cut clause "is less affected by weight". | Replace with "It can still delay follicle rupture after LH has begun to rise, and it is less affected by body weight, so it beats levonorgestrel late in the window and in obesity." |
| rp10 | b9 (estrogen risks) | FLOW | "Estrogen raises the liver's output of clotting factors. So every estrogen-containing method raises..." splits a cause from its effect. | Replace "Estrogen raises the liver's output of clotting factors. So every estrogen-containing method" with "Estrogen raises the liver's output of clotting factors, so every estrogen-containing method". |
| rp10 | fig rp10_abortion (b24) labels and aria | NON-STEP1 | The "Regimen as of 2025" card keeps the doses and gestational limit S05 cut from b23 (200 mg, 800 mcg, 70 days) and Step 2 exclusions (IUD in place, bleeding disorder, allergy); the aria-label repeats the 70-day limit. | In rp10_abortion.svg: "Regimen as of 2025" → "Regimen"; delete "Through 70 days of gestation"; "Mifepristone 200 mg, then misoprostol" → "Mifepristone first, then misoprostol"; "800 mcg 24 to 48 hours later" → "24 to 48 hours later"; "Suspected ectopic pregnancy or IUD in place" → "Suspected ectopic pregnancy"; delete "Bleeding disorder or anticoagulant use"; "corticosteroids; allergy to either drug" → "corticosteroids"; in the aria-label delete "; the regimen runs through 70 days of gestation as of 2025 and has listed contraindications". |

rp10: 4 findings

## rp11 Menopause and hormone therapy

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp11 | fig rp11_firstmove (b35) label | NON-STEP1 | The label "(fragile X), adrenal antibodies" keeps the extended work-up for primary ovarian insufficiency that S05 cut from b13 (R1 edited this SVG only for bleeding). | In rp11_firstmove.svg change "(fragile X), adrenal antibodies" to "(fragile X)". |
| rp11 | fig rp11_stages (b6) caption and labels | NON-STEP1 | Follicle counts that S05 cut from rp8 and rp11 remain ("about a million follicles", "250,000 to 400,000 follicles remain"), and "About 1 million" disagrees with rp8 b2 ("1 to 2 million"). | rp11_stages.json cap: "from a prepubertal ovary with about a million follicles" → "from a prepubertal ovary with 1 to 2 million follicles at birth". rp11_stages.svg: "About 1 million" → "1 to 2 million"; "250,000 to 400,000" → "Follicles fall"; "follicles remain" → "steadily". |

rp11: 2 findings

## rp13 The cervix, HPV and cervical cancer screening

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp13 | b3 (Pap sampling) | ERROR | "so the sampling is called inadequate" misuses the Bethesda term. A smear without an endocervical or transformation-zone component is still "satisfactory for evaluation" with the missing component noted; "unsatisfactory" means too few squamous cells or cells hidden by blood or inflammation (the long version had this right). BP-rp13-01's own "inadequate" is loose wording, a note for P1.3. | Replace "A sample with no endocervical or metaplastic cells may have missed the zone, so the sampling is called inadequate and a negative result cannot be fully trusted." with "A sample with no endocervical or metaplastic cells may have missed the zone, so even a negative result is less reassuring." |
| rp13 | b19 (Bethesda) | ERROR | "The categories are negative (NILM), ASC-US, LSIL, HSIL and atypical glandular cells." presents a partial list as complete (ASC-H and carcinoma were cut). | Replace "The categories are" with "The main categories are". |
| rp13 | b32 (invasive histology) | CUT-STEP1 | "Intercellular bridges", the squamous cell carcinoma hallmark beside keratin pearls (First Aid), was cut and appears nowhere in the course. | Replace "and well-differentiated tumors make keratin pearls." with "and well-differentiated tumors make keratin pearls and show intercellular bridges." |
| rp13 | fig rp13_screen (b24) caption, teach, labels, aria | NON-STEP1 | Keeps what S01 cut from the screening section as beyond Step 1: the ACS 2020 schedule (caption, teach, two labels), "USPSTF (2018)" in the teach (clashes with "as of 2025" in b22 and the caption), "No CIN 2 or worse in 25 years", the vaccine dose schedule and the 27 to 45 shared decision (dose counts are also in flux: in 2026 HHS backed a one-dose schedule that ACOG and AAP do not support), and a whole "Same visit: other screening" card (chlamydia, mammography, colorectal, HIV, hepatitis C). | rp13_screen.json cap: delete "; the American Cancer Society (2020) starts primary HPV testing at 25". teach: replace "The main labels give the USPSTF (2018) schedule; the added ACS 2020 lines show the other guideline, which starts primary HPV testing at 25 and does not screen younger people." with "The labels give the USPSTF schedule (as of 2025)." rp13_screen.svg: delete the text nodes "ACS 2020: primary HPV from 25", "ACS 2020: primary HPV preferred", "No CIN 2 or worse in 25 years", "Shared decision from 27 to 45", "Two doses before 15, else three", "Chlamydia and gonorrhea NAAT, age 24 and under", "Mammography every 2 years, 40 to 74", "Colorectal screening from 45 to 75" and "HIV test 15 to 65; hepatitis C once, 18 to 79"; change "Same visit: other screening" to "Cervicitis" so the card keeps only "Cervicitis: pus at the os; NAAT confirms"; in the aria-label replace "the 9-valent HPV vaccine schedule and other preventive services at the same visit, including HIV and hepatitis C testing" with "the 9-valent HPV vaccine, and cervicitis". |

rp13: 4 findings

## rp14 The uterus: endometrium and myometrium

| tid | block or figure key | kind | what is wrong | exact fix |
|---|---|---|---|---|
| rp14 | b10 (first sentence) | ERROR | "although ovarian cancer kills more women" is out of date: ACS estimates have put US uterine-corpus cancer deaths above ovarian cancer deaths since 2024 (Cancer Facts and Figures 2026: about 14,450 vs 12,450). The Step 1 point is that ovarian cancer has the worst prognosis per case. Present before and after the rewrite. | Replace "although ovarian cancer kills more women." with "although ovarian cancer has a worse prognosis because it is usually found late." |
| rp14 | fig rp14_types (b11) label | NON-STEP1 | The label "carcinoma (SEIC)" adds an acronym (serous endometrial intraepithelial carcinoma) the lesson never teaches. | In rp14_types.svg change "carcinoma (SEIC)" to "carcinoma". |

rp14: 2 findings

## Glossary cross-links (GLOSS)

GLOSS: no open findings in these 13 topics. The engine scan found two wrong cross-topic popups, and R1 fixed both
before this file was written; both were re-checked on the rebuilt page (23:12):
- rp2 b24 pectinate table "Portal system, through the superior rectal vein" opened en2_portal (hypophyseal portal
  system). R1 dropped the alias 'portal system' from en2_portal.
- rp8 b2 and rp9 b32 "AMH" (ovarian reserve) opened rp5_amh, which defined only fetal Sertoli-cell AMH. R1 widened the
  definition to granulosa-cell AMH as the reserve marker.

The other 70 cross-topic links fit their context (for example rp1 b15 gubernaculum, rp2 b11 tunica albuginea with its
widened definition, rp8 b10 estrone, rp14 b12 psammoma bodies with its widened definition). Duplicate links of the same
concept (rp3 b13/b14 myoepithelial cells, rp4 b5 syncytiotrophoblast, rp5 b26 processus vaginalis, rp9 SHBG three times)
open consistent definitions and are left alone.

## Leftover from a known fix (not counted)

- rp11 pretest item 3 (`pretest[2].why`) still says "Cancer must still be excluded with transvaginal ultrasound or
  endometrial biopsy"; after R1, b23 says both tests for most patients (as of 2026). Suggested text: "Cancer must still
  be excluded: as of 2026, ACOG advises both transvaginal ultrasound and endometrial sampling for most patients, because
  about 90 percent of endometrial cancers present with bleeding." R1's change list does not name this field.

## Checked and correct (no row needed)

Every STEP1-BLUEPRINT item for these 13 topics is taught in the current lesson except the parts named in the rows
above (BP-rp1-04, -07 and -09; BP-rp3-05; BP-rp5-05; BP-rp8-09). Facts spot-checked twice and found right include:
obstetric conjugate and gynecoid arch, Trendelenburg sign, pelvic pain routes and M3 voiding (rp1); Colles fascia spread,
pudendal branches, laceration degrees and lymph map (rp2); TDLU, two-cell epithelium, axillary levels and lactation
hormones (rp3); timing windows, twinning days, TTTS, estriol and Potter sequence (rp4); AMH, testosterone and DHT roles,
Müllerian anomalies and cord coverings (rp5); the AIS, 5-ARD, Swyer, CAH and aromatase lab table, Turner and Klinefelter
(rp6); puberty order, central vs peripheral clues and delayed-puberty sorting (rp7); ploidy table, two-cell model, LH
surge timing and the day-21 trap (rp8); amenorrhea work-up, PCOS mechanism, PALM-COEIN and ovulation induction (rp9);
estrogen contraindications, CYP3A4 inducers, emergency contraception windows and mifepristone/misoprostol (rp10); FSH and
inhibin B, KNDy/NK3, RANKL, WHI and the CYP2D6 trap (rp11); E6/E7, CIN grades and the USPSTF intervals, which match both
the 2018 final and the 2024 draft (rp13); type I vs II carcinoma, Lynch, fibroid vs leiomyosarcoma vs adenomyosis and
danazol (rp14).

Totals: rp1 10, rp2 4, rp3 2, rp4 4, rp5 6, rp6 1, rp7 2, rp8 3, rp9 3, rp10 4, rp11 2, rp13 4, rp14 2 (47 findings:
7 ERROR, 16 CUT-STEP1, 13 NON-STEP1, 11 FLOW, 0 GLOSS).
