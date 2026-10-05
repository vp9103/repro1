# R2 audit notes (repair round 2 after coverage audit A, `.repro/coverage/step1-audit-A.md`)

Method: every file started from its current `fast/content` version (round 1 included). Each row was applied with an
exact-match script (scratch only, not kept) that stops unless the old text occurs exactly once in the named block, so no
row could land in the wrong place. Block numbers are the 0-based `body` indices of the fast files (rp13 and rp14 count
their `img` rows); rp2 b17 is the block that gets the new heading, so its later blocks shift by one in the new file.
Every changed lesson was re-read start to finish after the edits. Facts were checked twice: ectopic ureter direction
(a bud that arises too high is absorbed late and opens too low), nutcracker syndrome (left renal vein, then left
gonadal vein), ureter course, Skene glands (prostate) and Bartholin glands (bulbourethral), growth hormone in Turner
syndrome, Bethesda wording, ACOG 2026 postmenopausal bleeding rule. No row was judged wrong; all 47 are applied.
American spelling throughout. Figure SVGs were rendered through the built page at 1280 px and 400 px (the 400 px frame
shows the engine's horizontal scroll pane; the text is unchanged in size) and through the gate probe
(`fast_check --build`: figures legible, no overlap or clipping: ok).

## Rows

| row | topic, block or figure | applied where |
|---|---|---|
| rp1-1 | b9 retropubic space | topics/rp1.json b9: "which covers only the bladder's upper surface. A full bladder rises above the pubic symphysis and lifts that peritoneum with it, so a suprapubic catheter placed just above the pubis enters the bladder..." (false "because" removed). |
| rp1-2 | b22 left gonadal vein call | topics/rp1.json b22: the last sentence now names the left renal vein (flank pain, hematuria) and the back-up into the left gonadal vein (left varicocele in men, pelvic congestion in women). See note A for the two compressions needed to stay inside the 110-word call band. |
| rp1-3 | b19 ureter at the brim | topics/rp1.json b19: "passes under the gonadal vessels and crosses the pelvic brim over the bifurcation of the common iliac artery, just medial to the ovarian vessels". |
| rp1-4 | b13 internal os | topics/rp1.json b13: "runs from the internal os, where it opens into the uterine cavity, to the **external os**, where it opens into the vagina." |
| rp1-5 | b6 parietal and visceral fascia | topics/rp1.json b6: "between the parietal fascia ... and the visceral fascia ...". |
| rp1-6 | b15 round ligament row | topics/rp1.json b15 table: "Remnant of the lower gubernaculum; passes through the inguinal canal". |
| rp1-7 | b7 prolapse | topics/rp1.json b7: ", so **prolapse** often appears years after the deliveries." |
| rp1-8 | b1 pelvic brim | topics/rp1.json b1: brim, false pelvis and true pelvis now one flowing sentence pair. |
| rp1-9 | b18 inferior vesical artery | topics/rp1.json b18: "...internal pudendal arteries; in men the inferior vesical artery supplies the bladder base, seminal vesicles and prostate." |
| rp1-10 | fig rp1_male | figs/rp1_male.json cap and teach (seminal colliculus and Denonvilliers fascia replaced as written); figs/rp1_male.svg: labels now "Ejaculatory duct opens into / the prostatic urethra", "Denonvilliers fascia" text deleted, aria-label edited as written. See note B (leader line and the red stroke that drew the fascia were removed with the label). |
| rp2-1 | glossary rp2_portocaval | glossary/rp2.json: the other classic sites (lower esophagus, esophageal varices; umbilicus, caput medusae) appended to `d`. |
| rp2-2 | b6 straddle injury | topics/rp2.json b6: "It cannot pass into the thighs, because Scarpa fascia is fused to the fascia lata, or back into the anal triangle, because Colles fascia is fused to the back edge of the perineal membrane." |
| rp2-3 | b17-b18 heading | topics/rp2.json: new heading row "Which sphincters guard the urethra and anus?" inserted immediately before "The bladder outlet has two sphincters..." (now b17; the two sphincter paragraphs are b18 and b19). |
| rp2-4 | fig rp2_vulva | figs/rp2_vulva.json cap and teach ("runs through the bulb and the penis to the glans"); figs/rp2_vulva.svg: titles and labels as written (no lengths, "Spongy urethra (longest)", "three parts"), navicular and glans-dilation text deleted, aria-label phrase deleted. See note B. |
| rp3-1 | b10 long thoracic row | topics/rp3.json b10: "...against the ribs, so the arm cannot be raised above the horizontal". |
| rp3-2 | b6 internal mammary | topics/rp3.json b6: "**internal thoracic artery** (internal mammary artery)". |
| rp4-1 | b6 notochord | topics/rp4.json b6: "...and later survives only as the nucleus pulposus of the intervertebral discs." |
| rp4-2 | b20 ductus venosus | topics/rp4.json b20: "...and much of it bypasses the liver through the ductus venosus, which becomes the ligamentum venosum after birth." |
| rp4-3 | b10 mesoderm sentence | topics/rp4.json b10: "Mesoderm as a whole forms muscle, bone and connective tissue, the heart, vessels and blood, the kidneys and gonads, and the adrenal cortex." inserted before "Two traps come up often." |
| rp4-4 | b3 and b4 steps | topics/rp4.json b3 ("follow the sperm and the oocyte from capacitation to implantation"), b4 title ("From capacitation to the implanted blastocyst, in order") and step 1 body (secretions of the uterus and tube strip cholesterol and surface proteins ({{rp4_cap\|capacitation}}); the link text is unchanged). |
| rp5-1 | b23 ectopic ureter | topics/rp5.json b23: "If the bud arises too high on the duct, it is carried down with the duct and opens too low, an **ectopic ureter**." |
| rp5-2 | b26 antecedent | topics/rp5.json b26: "The processus then leaves the canal through the superficial ring...". |
| rp5-3 | b29 cord sentences | topics/rp5.json: both cord-content and cremasteric-reflex sentences moved from the end of b29 to the end of b26, after the tunica vaginalis sentence; b29 now ends on the hydrocele. |
| rp5-4 | b8 homologs | topics/rp5.json b8: "...their female homologs, the Skene glands (prostate) and Bartholin glands (bulbourethral)." |
| rp5-5 | b15 hypospadias and epispadias | topics/rp5.json b15: "**Hypospadias** is common: the urethral folds fail to fuse, so..." and "**Epispadias** is rare: the opening is on the dorsal surface...". |
| rp5-6 | fig rp5_mullerian teach | figs/rp5_mullerian.json teach: ends "a bicornuate uterus a deep cleft." (imaging clause removed). |
| rp6-1 | b18 Turner | topics/rp6.json b18: "...the SHOX gene and is treated with growth hormone." |
| rp7-1 | fig rp7_precocious teach | figs/rp7_precocious.json teach: first (LH cut-offs) and last (peripheral cause switches on the central axis) sentences deleted. |
| rp7-2 | fig rp7_sequence teach | figs/rp7_sequence.json teach: first two sentences replaced as written; gynecomastia sentence kept. |
| rp8-1 | b25 tube | topics/rp8.json b25: "...into the ampulla, the widest part, where fertilization usually happens, and the cilia then move it through the narrow isthmus toward the uterus." |
| rp8-2 | fig rp8_twocell teach | figs/rp8_twocell.json teach: "LH acts on the theca cell to raise desmolase, which converts cholesterol to pregnenolone;" (StAR removed). |
| rp8-3 | fig rp8_endometrium | figs/rp8_endometrium.svg: text node "Compacta and spongiosa" deleted; the lines under it moved up (see note C). |
| rp9-1 | b3 breasts and a uterus | topics/rp9.json b3: "point either to an outflow block or to the same causes as secondary amenorrhea, which are then worked up the same way." Next sentence now opens "In an outflow block," (note D). |
| rp9-2 | b14 PCOS ovary | topics/rp9.json b14: "...line the enlarged ovary (the string of pearls on ultrasound) and none becomes dominant." |
| rp9-3 | fig rp9_infertility | figs/rp9_infertility.svg: "confirms ovulation" (cut-off removed); "Clip or remove hydrosalpinges first:" and "their fluid lowers implantation" deleted; "Saline sonography," deleted, "HSG, hysteroscopy" kept and moved up one line (note C). |
| rp10-1 | b16 DMPA | topics/rp10.json b16: "...slow return of fertility, and weight gain is also common." |
| rp10-2 | b21 ulipristal | topics/rp10.json b21: "...and it is less affected by body weight, so it beats levonorgestrel late in the window and in obesity." |
| rp10-3 | b9 estrogen | topics/rp10.json b9: "...clotting factors, so every estrogen-containing method..." |
| rp10-4 | fig rp10_abortion | figs/rp10_abortion.svg: "Regimen", "Through 70 days" deleted, "Mifepristone first, then misoprostol", "24 to 48 hours later", "Suspected ectopic pregnancy", "Bleeding disorder or anticoagulant use" deleted, "corticosteroids", aria-label phrase deleted; the two bottom cards were shortened to fit (note C). |
| rp11-1 | fig rp11_firstmove | figs/rp11_firstmove.svg: "(fragile X)" (adrenal antibodies removed). |
| rp11-2 | fig rp11_stages | figs/rp11_stages.json cap ("1 to 2 million follicles at birth"); figs/rp11_stages.svg: "1 to 2 million", "Follicles fall" / "steadily". |
| rp13-1 | b3 Pap sampling | topics/rp13.json b3: "...so even a negative result is less reassuring." |
| rp13-2 | b19 Bethesda | topics/rp13.json b19: "The main categories are negative (NILM), ASC-US, LSIL, HSIL and atypical glandular cells." |
| rp13-3 | b32 invasive histology | topics/rp13.json b32: "...make keratin pearls and show intercellular bridges." |
| rp13-4 | fig rp13_screen | figs/rp13_screen.json cap (ACS clause deleted) and teach ("The labels give the USPSTF schedule (as of 2025)."); figs/rp13_screen.svg: all nine listed text nodes deleted, "Same visit: other screening" now "Cervicitis", aria-label ends "the 9-valent HPV vaccine, and cervicitis"; the two bottom cards were shortened (note C). |
| rp14-1 | b10 ovarian cancer | topics/rp14.json b10: "...although ovarian cancer has a worse prognosis because it is usually found late." |
| rp14-2 | fig rp14_types | figs/rp14_types.svg: "carcinoma". |
| note | rp11 pretest[2].why (closing note) | topics/rp11.json pretest[2].why: "Cancer must still be excluded, because about 90 percent of endometrial cancers present with bleeding. As of 2026, ACOG advises transvaginal ultrasound plus endometrial sampling for most patients; ultrasound alone is enough only for a single episode with a fully seen stripe of 4 mm or less, no significant risk factors and reliable prompt follow-up." Matches rp11 b23 and rp14 b15. |

## Notes on how rows were applied

A. rp1-2: the row's sentence took the call to 113 words (the gate's call band is 25-110). To stay in band without
dropping a fact, the nutcracker sentence was reworded ("the superior mesenteric artery and the aorta squeeze the left
renal vein, usually in a thin patient") and the new sentence starts "The raised pressure causes left flank pain and
hematuria and backs up into the left gonadal vein, causing a left varicocele in men or pelvic congestion in women."
The call is now 107 words and every fact in the row is present.

B. Tied removals. A deleted label left something pointing at nothing in two figures, so these were removed with it:
rp1_male: the leader line of "Denonvilliers fascia" and the short red stroke between prostate and rectum that drew the
fascia. rp2_vulva: the leader line of "Navicular fossa" and the small ellipse in the glans that drew the fossa.
Everything else in both drawings is unchanged. Seen and not touched: rp2_vulva still labels the bulb "dilated urethra
inside it" (the row names only the navicular fossa and "two dilations" in the title); it does not contradict the new
caption, which says the spongy urethra runs through the bulb and the penis.

C. Layout after deletions (positions and box sizes only, no wording): rp8_endometrium moved the four remaining
functionalis lines and "Shed at every menses" up to close the gap; rp9_infertility moved "HSG, hysteroscopy" up under
TEST; rp10_abortion moved the remaining Regimen and "Not suitable if" lines up, shortened both bottom cards and the
viewBox (560 to 532); rp13_screen moved the single cervicitis line up under its heading, shortened both bottom cards
and the viewBox (684 to 644).

D. rp9-1: the row's replacement sentence is followed by "An imperforate hymen ... traps menstrual blood", which then
read as a statement about both possibilities. "In an outflow block," was added in front so the paragraph still flows.

## Knock-on outside this workspace (not edited; for the orchestrator)

Three visual-pointer items point at labels that the rows above delete. They fail `question_problems` /
`rapid_problems` on the R2 overlay and pass on the untouched content:

- `fast/content/questions/rp13.json` rp13q10 and `fast/content/rapid/rp13.json` rp13r14: `pt.hl` is
  "Chlamydia and gonorrhea NAAT" (row rp13-4 deletes that label), and the visual no longer contains the keyed answer
  (Chlamydia trachomatis). Suggested repair: set `pt.hl` to "Cervicitis: pus at the os; NAAT confirms" with a `say` such
  as "The cervicitis box notes pus at the os with NAAT confirming the organism, and Chlamydia trachomatis is its most
  common cause", and either name chlamydia in the rp13_screen caption or teach (one clause) or drop the visual from the
  two items.
- `fast/content/rapid/rp14.json` rp14r10: `pt.hl` "carcinoma (SEIC)" (row rp14-2 changes it to "carcinoma"). Suggested
  repair: `pt.hl` ["Serous precursor"] and a `say` that no longer spells the acronym.

Pre-existing visual-pointer or no-visual lines in questions and rapid for these topics (rp3, rp4, rp10, rp11 including
rp11q06 `pt.hl`, rp13, rp14) are identical on the untouched content and were left alone.

## Checks

`python3 .repro/fast_check.py --ws R2 --topics rp1,rp2,rp3,rp4,rp5,rp6,rp7,rp8,rp9,rp10,rp11,rp13,rp14 --build`: every
line `ok` (content loads, image placements, 12 topic-structure and key-term lines, figures, rendered views and JS
errors, rendered figures legible with no overlap or clipping). The first run flagged rp1 b22 at 113 call words; fixed
(note A). `fig_problems` was also run directly on all 13 figures, including the SVG-only ones (rp8_endometrium,
rp9_infertility, rp10_abortion, rp14_types), all ok.
