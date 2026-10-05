# R3 notes: coverage audit B repair (52 rows, rp15 to rp29)

Source: .repro/coverage/step1-audit-B.md. Started from the current fast/content files (including the rp18, rp21 and rp23 image blocks merged in commit 62247df). Every row is applied unless a line says otherwise. Wording variants are named.

## rp15
- rp15 body[13] torsion ligaments: applied as written (tube, infundibulopelvic and utero-ovarian ligament).
- rp15 body[17] germ cell migration: applied as written (mediastinum and pineal region; sacrococcygeal teratoma left out).
- rp15 body[19] borderline tumor: applied as written (peritoneal implants usually noninvasive).
- rp15 body[24] why answer: applied as written ("Oral contraceptives, pregnancy and breastfeeding all do this ...").
- rp15 body[27] dysgerminoma: applied as written (dysgenetic gonads that carry Y material).
- rp15 body[27] and body[32] yolk sac: applied as written ("girls and young women" in the text and the table).
- rp15 body[31] thecoma and fibroma: applied as written (whole paragraph replaced).
- rp15 figs/rp15_patterns teach and svg: applied as written ("Torsion risk; benign"; teach text replaced).

## rp16
- rp16 body[1] muramic acid: applied as written.
- rp16 body[6] cervicitis: applied as written.
- rp16 body[14] liver enzymes: applied as written ("because only the capsule is inflamed").
- rp16 body[20] genital ulcer and HIV: applied as written.
- rp16 figs/rp16_tube teach: applied as written.

## rp17
- rp17 body[1] HSV: applied as written (enveloped linear dsDNA, envelope from the nuclear membrane).
- rp17 body[4] gag and env: applied as written (p24 and p17, gp160 cut into gp120 and gp41).
- rp17 body[6] ART sentence: applied as written.
- rp17 body[7] table, enfuvirtide: applied as written (injection-site reactions).
- rp17 body[15] HIV breastfeeding: applied with the date style changed to the house rule. Text now reads "formula feeding is still recommended because the virus passes in breast milk. As of 2025, however, federal guidelines support a mother on ART with a sustained undetectable viral load who chooses to breastfeed, after shared decision-making." Consistent with rp28 body[36] ("as of 2025 shared decision-making is accepted when viral load is suppressed"); the rp17 practice explanations ("US guidance advises formula") still hold.
- rp17 body[21] foscarnet: applied as written (kidneys, low calcium and magnesium, seizures).
- rp17 figs/rp17_hivtest teach: applied as written (window-range sentence deleted). The figure itself only shows the three approximate first-positive days (10, 18, 23); left alone, the audit did not flag it.

## rp18
- rp18 body[3] CMV row: applied as written (latent in monocytes; primary or reactivated infection).
- rp18 body[3] rubella row: NOT applied as written, applied as a variant. The audit asks for "**Matonavirus** (classed as a togavirus until 2019)". The course lecture (scope/lectures/70351) and the topic map key term (VIRAL-STI-TORCH.7) use "togavirus", and that is the term a Step 1 item uses, so the bold term stays and the update is added: "**Togavirus** (reclassified in 2019 as a matonavirus): enveloped, positive-strand RNA". The 2019 reclassification itself is correct; I could not confirm that current First Aid lists "matonavirus", so I did not make it the lead term.
- rp18 body[17] hepatitis B: applied as written (about 90 percent chronic carriers).

## rp21
- rp21 body[13] prostate cancer epidemiology: applied as written.
- rp21 body[24] hypospadias: applied as written (cryptorchidism and inguinal hernia).
- rp21 body[27] venous leak: applied as written.
- rp21 body[27] collagenase sentence: applied as written (deleted).
- rp21 body[29] priapism table: applied as written (cocaine added).
- rp21 body[32] precursor lesions: applied as written (one sentence listing three forms).
- rp21 figs/rp21_histology cap and svg: applied as written. Layout follow-on: after the third label was deleted, the Gleason line moved up to y=506, the box height went from 142 to 118 and the viewBox height from 560 to 536, so no gap is left. Checked at 1280 and 400 px.
- rp21 figs/rp21_bphdrugs svg: applied as written ("Daily tadalafil ...").
- rp21 figs/rp21_adt svg: applied as written.

## rp22
- rp22 figs/rp22_semen teach and svg: applied as written. The practice pointer rp19q06 ("repeat testing after 3 months") still matches the label.

## rp23
- rp23 body[3] fibrocystic change: applied as written.
- rp23 body[5] DCIS and LCIS laterality (highest priority): applied as written. The benign lesions' extra risk applies to both breasts; carcinoma in situ raises risk to about 8 to 10, DCIS mainly in the same breast (where it can progress to invasive ductal carcinoma) and LCIS in either breast. The following sentence ("None of them has crossed the basement membrane ...") still reads correctly.
- rp23 body[16] papilloma: applied with one change in form. The audit's one long sentence with a semicolon is split into two sentences at the semicolon ("... covered by luminal and myoepithelial cells. Papillary carcinoma, which is more likely after menopause, lacks the myoepithelial layer."); no fact changed. The words "myoepithelial cells" now auto-link to the existing rp24_myo definition, which fits.

## rp24
- rp24 body[12] DCIS natural history: applied as written ("Can become invasive ductal cancer in the same breast if untreated").
- rp24 body[13] (follow-on, not an audit row): the trap call said DCIS is excised "because it becomes invasive where it sits"; changed to "can become invasive" so it agrees with the fixed table row.
- rp24 body[18] special types: applied with two small changes. "the skin of the breast and nipple" instead of "the breast skin" (Paget disease is nipple skin), and the next sentence now starts "In **inflammatory carcinoma**, tumor emboli plug ..." so it does not repeat "not a cell type" right after the new first sentence.
- rp24 body[25] trastuzumab: applied as written (antibody-dependent killing by natural killer cells).

## rp25
- rp25 body[20] gallstones: applied as written.

## rp26
- rp26 body[21] hyperemesis: applied as written.
- rp26 body[26] work-up reasons: applied as written.
- rp26 figs/rp26_framework svg, questions/rp26 rp26q09 and rapid/rp26 rp26r07: applied as written. Label is now "No heartbeat in a visible embryo:"; both pt.hl entries re-pointed to it (ids, stems, options, keys and say text untouched). The "pregnancy loss" hl in rp26q09 still matches.
- rp26 figs/rp26_gtn cap, teach and svg (highest priority): applied as written (cap, teach, every listed label, the two deleted "low risk" and "high risk" lines, "(EMA-CO)", the aria-label edits). Layout follow-on: the low-risk and high-risk box text moved up into the freed space (y=224, 248, 272), box sizes unchanged. The box heading "Intermediate trophoblast tumors" was left as is. Checked at 1280 and 400 px.

## rp27
- rp27 body[5] eclampsia timing: applied as written.
- rp27 figs/rp27_rh svg: applied as written ("Then intrauterine transfusion").
- rp27 figs/rp27_bleeding svg: applied as written ("Expect heavy bleeding").

## rp28
- rp28 body[19] amniotic fluid index: applied as written.
- rp28 figs/rp28_stages svg: applied as written (five Bishop component labels without points).
- rp28 figs/rp28_fhr svg: applied as written ("Recurrent: fetal hypoxia risk").
- rp28 figs/rp28_pph cap and svg: applied as written (tranexamic acid add-on; escalation line deleted, no gap left because it was the last line of the panel).

## rp29
- rp29 figs/rp29_inventory svg: applied as written (breast row and prostate row labels shortened, the two extra lines deleted).

## GLOSS
- No findings in the audit. Link scan of the built page before and after (all 13 topics): no link lost; one new automatic link ("myoepithelial cells" in rp23 body[16] to rp24_myo), and its definition fits the sentence.

## Checks and other notes
- fast_check --ws R3 for all 13 topics with --build: every topic structure, key-term, figure and rendered line is ok. The only XX lines are rp26 questions rp26q08 and rp26q10 and rp26 rapid rp26r03, rp26r10 and the 12/14 visual share (no visual, no NO-VISUAL row): identical on the untouched fast/content (checked), so not caused by R3. The two pt.hl problems the old label would have caused are gone because of the re-point.
- All pt.hl strings of every question and rapid item that points at one of the changed figures were matched against the new SVG text nodes: none missing.
- Practice items were not edited beyond the two pt.hl entries. No practice item stem or key depends on a removed detail (searched for collagenase, EMA-CO, FIGO, MCA Doppler, amnioinfusion, cystectomy, AZF, 5 years of estrogen and the like).
- Files that carry no change but sit in the workspace so fast_check can examine them: topics rp22 and rp29, and the .json of figures whose .svg changed (rp21_adt, rp21_bphdrugs, rp26_framework, rp27_bleeding, rp27_rh, rp28_stages, rp28_fhr, rp29_inventory). They are byte-identical to fast/content.
