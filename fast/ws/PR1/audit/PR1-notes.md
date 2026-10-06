# PR1 notes: practice-item repair round 1 (audit C rp1-rp10, audit D rp11-rp14 and rp20)

Source rows: `.repro/coverage/practice-audit-C.md` (31 findings) and `.repro/coverage/practice-audit-D.md` (27 findings), 58 rows in all.
Every file was started from its current `fast/content` version. All item ids and all keyed answers are unchanged (no `a` index moved).
Result: 57 rows applied (6 of them with a stated deviation, extra edit or flag: rp3r01, rp5r10, rp8q06, rp10r10, rp11q06, rp12r03), 1 row not applied (rp12q03 and rp12r06, a lesson edit outside this workspace).
Self-check: `python3 .repro/fast_check.py --ws PR1 --topics rp1,rp2,rp3,rp4,rp5,rp6,rp8,rp9,rp10,rp11,rp12,rp13,rp14,rp20 --build`.
The only lines still not ok are the NO-VISUAL and visual-share lines, identical on the untouched content; the one real line the untouched content
had (rp11q06 pt.hl) is now ok.

## Audit C (rp1-rp10)

| audit row | status | what was done |
|---|---|---|
| rp1q02 | applied | `e` now says the retropubic space always lies outside the peritoneum and a full bladder only lifts the peritoneal fold above the pubis; `bl` rewritten as in the row. |
| rp1q03 | applied | `et` cell "Ovarian ligament" / "Clamped in" is now "Hysterectomy that leaves the ovary in place". |
| rp1q05 | applied | `et` cell "Left common iliac vein" / "Side" is now "Paired; the two join to form the IVC". |
| rp1q06 | applied | Deleted the stem sentence that defines the cardinal ligament. |
| rp1q07 | applied | `e` now says normal sensation on the sole (not the back of the thigh) rules out a sciatic injury. |
| rp1q08 | applied | Stem sentence replaced with "She has no fecal incontinence. Pelvic floor MRI shows a tear in the part of the levator ani that normally steadies the urethra and bladder neck during a cough." |
| rp2q01 | applied | Option "Ureter" replaced by "Bladder dome", with the row's `w` and `et` row (the rp2 lesson already teaches bladder rupture causing ascites). |
| rp2q06 | applied | `et` cell "Sebaceous gland of the labium majus" / "Sex" is now "Female; the scrotum has the same glands". |
| rp2r03 | applied | `x` sentence now credits the rami and the back edge of the perineal membrane for sealing the anal triangle. |
| rp3q04 | applied | Last stem sentence replaced so it no longer says "near the sternum". |
| rp3r01 | applied, small deviation | Corrected the "stromal tumors are uncommon" note and added that fibroadenoma arises from the intralobular stroma. Left out "such as lipoma or sarcoma" because rp3 does not teach those two tumors; the note says "Tumors of this stroma are rare". |
| rp3r11 | applied | Note now says intralobular fibroblasts give rise to fibroadenoma and phyllodes tumor, stromal tumors, not carcinomas. |
| rp4q02 | applied | "Neither stops" is now "None of these stops". |
| rp4q06 | applied | Stem now describes a planned repeat cesarean at 37 weeks and a low-lying placenta over the scar, as in the row. |
| rp4q08 | applied | Giveaway sentence replaced with "She asks why the problem appeared in the second half of pregnancy and is expected to resolve after delivery." |
| d_rp4_multi | applied | The thyroid and airway "why" lines are no longer circular (thyroid grows down from the gut-tube lining; the lung bud grows out of the front wall of the gut tube). |
| rp5r10 | applied, small deviation | The didelphys note no longer says "often found with an obstructed hemivagina"; it says "only sometimes comes with an obstructed hemivagina". Left out the row's "usually comes with a longitudinal vaginal septum" because rp5 does not teach it. |
| rp6q06 | applied | `w` and `et` row for the androgen-receptor option now rest on LH and testosterone (receptor defects raise both; his testosterone is low). |
| rp6r12 | applied | Same correction in the rapid note. |
| rp8q04 | applied | Inhibin B note and `et` row corrected (inhibin B restrains FSH, peaks early and mid follicular, no positive-feedback action). |
| rp8q06 | applied, extra edit | `et` cell is now "Coiled glands, luminal secretion, no vacuoles". Also changed the same option's `w` ("vacuoles have moved above the nuclei" to "vacuoles have already emptied into the lumens") so the note does not contradict the new cell and the figure clock (+3 to 4 days moved up, +5 to 6 days lumens full). |
| rp8q08 | applied | `et` cell "Loss of LH receptors on theca cells" / "Effect on FSH" is now "Rises as estradiol falls". |
| rp8q09 (wording) | applied | Stem now says she breastfed for 2 months and then stopped, and has had no menses in the 8 months since the procedure. |
| rp8q09 (giveaway) | applied | "Mesometrium" replaced by "Surface epithelium of the endometrium", with the row's `w` and `et` row. |
| rp8r11 | applied | Same option swap, with the row's `w`. |
| rp9q01 | applied | `et` cell "Progestin challenge" / "Burden" is now "7 to 10 days of pills". |
| rp9q10 | applied | `pt.say` no longer mentions clipping or removing the hydrosalpinges. |
| rp10q01 | applied | "Extended-cycle combined pill" replaced by "Copper intrauterine device" (new `w`, `et` row and `e` sentence as in the row). |
| rp10r03 | applied | `pt.say` now says estrogen raises hepatic clotting factors by any route, not "first-pass". The label in `figs/rp10_pitfalls.svg` still says "First-pass effect" and belongs to the figure owner. |
| rp10r10 | applied, flag | `x` now says the rod works for years, up to 5 on its FDA label since January 2026 (checked: Organon release 16 January 2026). Lesson `topics/rp10.json` b18 and `figs/rp10_methods.svg` still say 3 years, so those two need the same update or the page contradicts itself. |
| d_rp10_multi | applied | The "Lasts 3 years" row replaced by "Most effective reversible method" (implant column). |

## Audit D (rp11-rp14, rp20)

| audit row | status | what was done |
|---|---|---|
| rp11q06 | applied, extra wording | Highest priority. `pt.hl` is now "Ultrasound plus endometrial" and "sampling for most patients (2026)", both labels in `figs/rp11_firstmove.svg`. `pt.say`, `bl`, `e` and the `et` cell follow the ACOG April 2026 rule: ultrasound plus endometrial sampling for most patients; ultrasound alone only for a single episode, a fully seen stripe of 4 mm or less, no significant risk factors and reliable prompt follow-up. The `pt.say` also names "endometrial biopsy" (the row's say-line did not contain the keyed answer). The `w` note for repeat ultrasonography was aligned to the same wording. Key unchanged. |
| rp11q10 | applied | WHI sentence now says low absolute risk when therapy began before 60 or within 10 years of menopause (rp11 b30 teaches both). |
| rp11r06 | applied | Keratin note now says the vaginal lining is nonkeratinized stratified squamous epithelium. |
| rp11r07 | applied | Ovarian carcinoma note now names the estrogen-making granulosa cell tumor exception (taught in rp14). |
| rp11q01 | applied | `e` says "freed from its brakes"; contrived stem sentence deleted; lead-in is now "If serum hormones were measured, which set of findings would most likely be seen?". |
| d_rp11_sort | applied | Both rows replaced as in the row (vaginal estrogen cream for urinary infections, side a; hot flashes after removal of both ovaries with the uterus in place, side b). Sides stay 6 and 6. Note: the new side-a row sits next to the existing "Low-dose vaginal estrogen for dryness alone" row, so two rows now test the vaginal-estrogen exception. |
| rp12q03, rp12r06 | NOT applied | The row's fix is a lesson edit (`topics/rp12.json` b13: add "by inhibiting lanosterol 14-alpha-demethylase, a fungal cytochrome P450 enzyme"). Topics are outside this workspace's OWNS and rule 3 of the task forbids touching them. Both items are left exactly as they were, so they become taught as soon as that b13 edit lands. Until then they test an enzyme name the lesson does not state. |
| rp12r03 | applied, small deviation | "Desquamative inflammatory vaginitis" replaced by "Prepubertal vulvovaginitis"; `q` untouched. The note says the pH is "higher than the normal 3.8 to 4.5" because lesson b1 says girls before puberty have a higher vaginal pH; it does not say "near neutral" or "few lactobacilli", which the lesson does not state. |
| rp12r04 | applied | Parabasal-cell note no longer cites desquamative inflammatory vaginitis. |
| rp12q07 | applied | `et` cell is now "PAS and keratin positive". |
| rp12q10 | applied | Option, `w` key and `et` row renamed "Cytokeratin"; note and "Cell type marked" cell as in the row. |
| rp12q12 | applied | `et` column renamed "In the 9-valent vaccine" with Yes, Yes, Yes, No, Yes. |
| rp12q09 | applied | Note now says the cells are glandular and hold PAS-positive mucin, which squamous cells lack. |
| rp13q06 | applied | Note now ties a one-year repeat to low-grade disease such as CIN 1; `et` cell is now "Follow-up after a reassuring result". |
| rp13q11 | applied | `et` row "Vaginal cuff cytology every year": "Only women whose cervix was removed" and "Not routine screening". |
| rp13q04 | applied | Three `et` cells of the "In 1 year" row changed as in the row. |
| rp13r14 | applied | `pt.say` no longer repeats the organism. |
| rp14q12 | applied | `e`, `et` cell and `bl` follow the ACOG April 2026 rule; key unchanged. |
| rp14q07, rp14r06 | applied | "Needs all three together" is now "judged on atypia, necrosis and mitoses weighed together" in `e`, `w`, `bl` (q07) and `x` (r06). |
| rp14r10 | applied | The acronym SEIC is gone from `x`. |
| rp14r05 | applied | "Parasitic omental" replaced by "Pedunculated subserosal", with the row's note. It sits beside the existing "Subserosal" option, as the row specifies. |
| d_rp14_multi | applied | The "hysterectomy specimen" row and the "shrinks after menopause" row replaced as in the row. |
| rp14q05 | applied | "tenderize" replaced; the note now says the uterus is not "enlarged or tender". |
| rp14q01 | applied | `et` cell "Corpus luteum cyst" / "Associated clue" is now "Common in early pregnancy; rupture mimics ectopic". |
| rp20r06 | applied | Ilioinguinal note now says it is sensory only and has no motor fibers to the cremaster. |
| rp20r04 | applied | "Carnett sign" replaced by "Transillumination", with the row's note (rp20 teaches transillumination and spermatocele). |
| rp20r10 | applied | `x` no longer says the septa respond to treatment. |

## Seen but not touched (outside this task)

- `topics/rp12.json` b13 needs the lanosterol 14-alpha-demethylase clause (see rp12q03 and rp12r06 above).
- `topics/rp10.json` b18 (Implant row, "Lasts 3 years") and `figs/rp10_methods.svg` ("rod in the arm, 3 years") need the January 2026 label; `figs/rp10_pitfalls.svg` label "First-pass effect raises clotting factors" needs the row's new wording.
- `figs/rp20_gct.svg` still labels teratoma "Chemoresistant"; `topics/rp20.json` b5 and the glossary entry rp20cremreflex put both cremasteric limbs in the genitofemoral nerve (standard texts add the ilioinguinal nerve to the sensory limb). The rp20r06 note avoids contradicting either version.
