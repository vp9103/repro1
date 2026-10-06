# Practice-item audit C: questions, rapid items and drills of rp1-rp10

Auditor: fresh Opus reader, 2026-10-06. This is a practice-item audit, not a phase verdict. Nothing but this file was written.

Read: every question (110), rapid item (142) and drill row (142, in ten drills) of rp1-rp10 in `fast/content/questions`,
`fast/content/rapid` and `fast/content/drills`. Each was checked against its current lesson `fast/content/topics/<tid>.json`
(body, the figures it places, pretest, grid) and the worker notes `fast/ws/P01/audit/P01-notes.md`. Facts were judged
against First Aid, Pathoma, Costanzo and Robbins, plus the dated FDA label cited under rp10.

Page: not opened in a browser. A script confirmed that the built `fast/repro-endo-path.html` contains, word for word, every
current stem, lead-in, `e`, `bl`, rapid question, `x`, `w` note, `pt.say` and drill row of these items (2,259 strings, none
missing). It also confirmed that every `pt.hl` label appears in the SVG of the figure it points to.

Keys: all 252 keyed answers are correct and the single best answer, so there is no KEY finding. The P01 "kept although
unsure" items were checked and are fine: the rp3q04 supraclavicular distractor, rp6q07 11-beta-hydroxylase, rp9q10 in vitro
fertilization, and the rp4q09/rp4r13 estriol chain.

Conventions: fields are the JSON keys. `s` is the stem, `e` the explanation, `w["option"]` the note on a wrong option,
`et` the comparison table, `bl` the bottom line, `pt.say` the say-line, `x` the rapid explanation and `o` the options.
Every fix quotes the text it replaces.

## rp1 The pelvis, pelvic floor and pelvic viscera

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp1q02 | ERROR | `e` and `bl` say a full bladder creates the retropubic space. `e`: "A full bladder rises above the pubic symphysis and lifts the peritoneum off the abdominal wall. That leaves a fat-filled space outside the peritoneum in front of the bladder, the **retropubic space**." `bl`: "...which a full bladder opens by lifting the peritoneum away." The space is outside the peritoneum whether the bladder is full or not, because peritoneum covers only the bladder's upper surface. Filling only lifts the peritoneal fold above the pubis. step1-audit-A removed the same false cause from lesson b9. | In `e`, replace those two sentences with "The **retropubic space** is the fat-filled space between the pubic symphysis and the bladder, and it always lies outside the peritoneum, which covers only the bladder's upper surface. A full bladder rises above the pubic symphysis and lifts that peritoneum with it." Replace `bl` with "A suprapubic catheter crosses the extraperitoneal retropubic space. A full bladder lifts the peritoneum above the pubis, so the needle stays outside the peritoneal cavity." |
| rp1q03 | ERROR | `et` row "Ovarian ligament", column "Clamped in", reads "Removal of the uterus with the adnexa". That is wrong. When the adnexa come out with the uterus, the infundibulopelvic ligament is clamped and the ovarian ligament leaves with the specimen. The ovarian ligament is clamped in a hysterectomy that keeps the ovary. | Change that cell to "Hysterectomy that leaves the ovary in place". |
| rp1q05 | WORDING | `et` row "Left common iliac vein", column "Side", reads "Both sides, unpaired course". It contradicts itself, because the common iliac veins are paired. | Change that cell to "Paired; the two join to form the IVC". |
| rp1q06 | GIVEAWAY | The last stem sentence, "Imaging shows stretched and torn condensations of endopelvic fascia that anchor the cervix to the pelvic side wall.", is the textbook definition of the cardinal ligament, the same definition rp1r11 asks for. A student can answer from the definition without reading the apical-prolapse picture. | Delete that sentence. The stem stays at 44 words and `e` needs no change. |
| rp1q07 | ERROR | `e`: "Normal knee flexion and normal sensation on the back of the thigh rule out a sciatic injury." The sciatic nerve has no skin branch on the back of the thigh, which belongs to the posterior femoral cutaneous nerve. The sciatic skin territory in the stem is the sole (tibial branch). | Replace with "Normal knee flexion and normal sensation on the sole rule out a sciatic injury." |
| rp1q08 | GIVEAWAY | The stem reads "...the main portion of the levator ani, the part that arises from the back of the pubic bone and passes around the urethra and vagina on its way to the coccyx." This spells out pubo-coccygeus, so the name can be read off the stem. | Replace that sentence with "She has no fecal incontinence. Pelvic floor MRI shows a tear in the part of the levator ani that normally steadies the urethra and bladder neck during a cough." The stem becomes 46 words and `e` is unchanged. |

rp1: 6 findings

## rp2 The perineum, external genitalia and lymph drainage

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp2q01 | GIVEAWAY | The distractor "Ureter" is not a plausible Step 1 answer for urine in the scrotum after a straddle injury. Its own `w` and `et` row say it lies far above the pelvic floor and is not injured this way, so the item has only four real options. | Replace option "Ureter" with "Bladder dome". `w["Bladder dome"]`: "A torn bladder dome, usually from a blow to a full bladder, leaks urine into the peritoneal cavity and causes ascites, not scrotal and penile swelling." New `et` row: ["Bladder dome", "Far above it, covered by peritoneum", "Blow to a full bladder", "Peritoneal cavity"]. |
| rp2q06 | WORDING | `et` row "Sebaceous gland of the labium majus", column "Sex", reads "Both", which contradicts an option that names a female structure. | Change that cell to "Female; the scrotum has the same glands". |
| rp2r03 | WORDING | `x`: "The attachments of Colles fascia to the rami and of Scarpa fascia to the fascia lata keep it out of the thighs and the anal triangle." This credits the attachment to the rami with sealing the anal triangle. The anal triangle is sealed by the attachment to the back edge of the perineal membrane, as this item's own "Ischioanal fossae" note says. | Replace that sentence with "Colles fascia's attachments to the ischiopubic rami and the back edge of the perineal membrane, and Scarpa fascia's fusion with the fascia lata, keep it out of the thighs and the anal triangle." `x` becomes 60 words. |

rp2: 3 findings

## rp3 Breast anatomy and histology

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp3q04 | GIVEAWAY | The last stem sentence reads "...flowing medially, away from the axilla, to a single deep node near the sternum; no axillary uptake is seen." "Near the sternum" restates the keyed option "Internal mammary (parasternal) nodes", so the item no longer tests whether the student knows that the medial quadrants drain there. | Replace that sentence with "Lymphoscintigraphy shows a single deep sentinel node outside the axilla, and no axillary uptake is seen." The supraclavicular nodes remain as the other option outside the axilla. `e` and `w` need no change. |
| rp3r01 | ERROR | `w["Interlobular fibrous stroma"]`: "Stromal tumors are uncommon next to epithelial disease." For the breast this is too broad and wrong. Fibroadenoma, the most common benign breast tumor, is driven by the intralobular stroma inside the TDLU. Only the interlobular stroma's own tumors (lipoma, sarcoma) are rare. | Replace with "Dense fibrous stroma and fat fill the spaces between lobules and give support. Tumors of this interlobular stroma, such as lipoma or sarcoma, are rare, and even fibroadenoma arises from the intralobular stroma inside the terminal duct lobular unit." |
| rp3r11 | ERROR | `w["Intralobular stromal fibroblasts"]`: "Their tumors, such as phyllodes tumor, are far less common than epithelial carcinoma." It leaves out fibroadenoma, the most common benign breast tumor, which arises from this stroma, so the comparison misleads. | Replace with "Intralobular fibroblasts support the lobule and respond to hormones. They give rise to fibroadenoma and phyllodes tumor, which are stromal tumors, not carcinomas." |

rp3: 3 findings

## rp4 Early embryology, the placenta and twinning

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp4q02 | WORDING | `e` ends "Neither stops extra sperm from entering." after naming three processes: the acrosome reaction, capacitation and completion of meiosis II. | Replace with "None of these stops extra sperm from entering." |
| rp4q06 | WORDING | The vignette is not realistic. A woman with three prior cesareans and a low-lying anterior placenta "delivers vaginally at 39 weeks", when she would have a planned repeat cesarean. The odd route distracts from the accreta logic. | Replace the first two stem sentences and the start of the third with "A 36-year-old woman, gravida 4, para 3, undergoes a planned repeat cesarean delivery at 37 weeks. Her three earlier children were also born by cesarean delivery, and ultrasound in this pregnancy showed a low-lying anterior placenta over the uterine scar. After the baby is delivered, the placenta does not separate, ...". The rest of the stem and `e` are unchanged. |
| rp4q08 | GIVEAWAY | Stem: "The physician explains that a placental hormone whose level rises steadily with placental mass antagonizes insulin to keep glucose available for the fetus." This restates the lesson's definition of human placental lactogen (b23), so the vignette gives away the answer's defining features. | Replace that sentence with "She asks why the problem appeared in the second half of pregnancy and is expected to resolve after delivery." The stem becomes 44 words and `e` is unchanged. |
| d_rp4_multi | WORDING | Two whys are circular. "Thyroid follicular cells": "The thyroid follicular cells come from the endoderm of the gut tube, so they are endoderm." "Lining of the airways": "The airway lining grows out of the endoderm of the gut tube, so it is endoderm." | Thyroid why: "The thyroid grows down into the neck from the lining of the embryonic gut tube, so its follicular cells share the gut lining's endodermal origin." Airway why: "The lung bud grows out of the front wall of the gut tube, so the lining of the trachea and bronchi shares the gut's endodermal origin." |

rp4: 4 findings

## rp5 Sex determination and genital development

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp5r10 | ERROR | `w["Uterus didelphys"]`: "It is rarer and is often found with an obstructed hemivagina." This overstates it. Didelphys usually comes with a longitudinal vaginal septum, and an obstructed hemivagina (with same-side renal agenesis) is an uncommon variant. | Replace with "Didelphys is complete fusion failure with two uteri and two cervices. It is rarer, usually comes with a longitudinal vaginal septum, and only sometimes has one hemivagina obstructed." |

rp5: 1 finding

## rp6 Disorders of sex development and sex chromosome disorders

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp6q06 | ERROR | `w["A defective androgen receptor in breast tissue"]` rejects the option because receptor defects give "a 46,XY person who looks female from birth", and its `et` row says "Testes in a female phenotype". Milder receptor defects produce exactly an infertile, undervirilized man with gynecomastia, so his phenotype does not exclude this option. His low testosterone does, because a receptor defect raises both LH and testosterone. | `w`: "Androgen receptor defects raise both LH and testosterone, because the pituitary cannot sense androgen. His testosterone is low, which points to failing Leydig cells instead." `et` row: ["A defective androgen receptor in breast tissue", "LH high", "Testes making high testosterone", "Estrogen acts while androgen cannot"]. |
| rp6r12 | ERROR | `w["Androgen receptors are defective"]`: "Receptor defects cause androgen insensitivity in a 46,XY person who looks female." This repeats the overgeneralization in rp6q06. | Replace with "Androgen receptor defects raise both LH and testosterone, because the pituitary cannot sense androgen. Klinefelter men have low testosterone and respond to testosterone replacement." |

rp6: 2 findings

## rp7 Puberty: normal, early and late

rp7: clean

## rp8 The ovary, oogenesis and the menstrual cycle

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp8q04 | ERROR | `w["Falling inhibin B releasing FSH and LH"]` says "...and it rises as the dominant follicle grows." That is wrong. Inhibin B peaks in the mid-follicular phase and falls as the dominant follicle matures, while inhibin A is the one that rises. The `et` row repeats the error ("Mainly follicular, rising"). | `w`: "Inhibin B from granulosa cells restrains FSH, not LH, and it has no positive-feedback action. A change in inhibin B cannot produce a mid-cycle LH surge." `et` row: ["Falling inhibin B releasing FSH and LH", "Inhibin B", "Early and mid follicular phase", "None; it acts on FSH"]. |
| rp8q06 | ERROR | `et` row "About 7 days after ovulation", column "Gland appearance", reads "Supranuclear vacuoles, luminal secretion". By 7 days the vacuoles have moved up and emptied. The lesson's own clock (figure rp8_endometrium) puts supranuclear vacuoles at +3 to 4 days and full lumens at +5 to 6. | Change that cell to "Coiled glands, luminal secretion, no vacuoles". |
| rp8q08 | ERROR | `et` row "Loss of LH receptors on theca cells", column "Effect on FSH", reads "Little change". Without theca androgen the granulosa cells make little estradiol, so negative feedback weakens and FSH rises. | Change that cell to "Rises as estradiol falls". |
| rp8q09 | WORDING | Stem: "She has had no menses in the 8 months since, although she breastfed successfully." Breastfeeding itself suppresses menses, so this sentence suggests the wrong explanation. The intended point is that normal lactation rules out Sheehan syndrome, which works only if she has stopped breastfeeding. | Replace with "She breastfed for 2 months without difficulty and then stopped, but she has had no menses in the 8 months since the procedure." |
| rp8q09 | GIVEAWAY | The distractor "Mesometrium" is part of the broad ligament, not a layer of the uterus, so it cannot plausibly answer "Loss of which layer". | Replace option "Mesometrium" with "Surface epithelium of the endometrium". New `w`: "The surface epithelium is lost at every menses and regrows from the glands of the basalis, so its loss cannot stop regeneration." New `et` row: ["Surface epithelium of the endometrium", "Lining of the cavity, part of the functionalis", "None of its own; fed from the stroma", "Yes"]. |
| rp8r11 | GIVEAWAY | The same filler distractor "Mesometrium" appears in "Which endometrial layer regenerates the lining". | Replace it with "Surface epithelium of the endometrium". New `w`: "The surface epithelium is shed with the functionalis at each menses and is rebuilt from the basalis glands, so it is a product of regeneration, not its source." |

rp8: 6 findings

## rp9 Amenorrhea, abnormal bleeding, PCOS and female infertility

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp9q01 | ERROR | `et` row "Progestin challenge", column "Burden", reads "Two weeks of pills", which contradicts the lesson's 7 to 10 days (b10). | Change that cell to "7 to 10 days of pills". |
| rp9q10 | NOT-TAUGHT | `pt.say` ends "...bypasses the damaged tubes after the hydrosalpinges are clipped or removed." The P01 notes say this surgical step was cut from the item, but it survives in the say-line. Neither the lesson nor figure rp9_infertility teaches it, and it is Step 2 management. | Replace `pt.say` with "On hysterosalpingography a dilated tube with no spill is a hydrosalpinx, and in the tubes column in vitro fertilization bypasses the damaged tubes." |

rp9: 2 findings

## rp10 Contraception, emergency contraception and medication abortion

| item id | kind | what is wrong | exact fix |
|---|---|---|---|
| rp10q01 | GIVEAWAY | All four distractors (combined pill, patch, ring, extended-cycle pill) contain estrogen. The keyed levonorgestrel IUD is therefore the only option of a different kind, and the stem's heavy-menses clue is never tested against another estrogen-free method. | Replace option "Extended-cycle combined pill" with "Copper intrauterine device". New `w`: "The copper IUD has no estrogen and is safe for a smoker, but its local inflammation makes periods heavier and more painful, which would worsen her moderately heavy menses." New `et` row: ["Copper intrauterine device", "None (copper)", "No", "Under 1 in 100", "Heavier, more cramping"]. In `e`, replace "The pill, the **transdermal patch**, the vaginal ring and an extended-cycle pill all contain estrogen, so they share the contraindication." with "The pill, the **transdermal patch** and the vaginal ring all contain estrogen, so they share the contraindication. The copper IUD avoids estrogen but makes heavy periods heavier." The copper IUD then also shares a wrong option with rp10q08. |
| rp10r03 | ERROR | `pt.say`: "The liver row shows first-pass estrogen raising clotting factors...". Ethinyl estradiol raises hepatic clotting factors by any route. The patch and ring carry the same or higher clot risk, as rp10q01's ring note says ("Bypassing the gut does not remove estrogen's effect on clotting factors"). Calling it a first-pass effect gives the wrong mechanism. The label in `figs/rp10_pitfalls.svg` ("First-pass effect raises clotting / factors such as fibrinogen") has the same error. | Replace `pt.say` with "The liver row shows estrogen raising the liver's clotting factors such as fibrinogen, by any route of delivery, which causes venous thromboembolism: deep vein thrombosis and pulmonary embolism." For the figure owner: change the label to "Ethinyl estradiol raises hepatic clotting / factors such as fibrinogen". |
| rp10r10 | ERROR | `x`: "...it works for 3 years..." is out of date. On 16 January 2026 the FDA extended the etonogestrel implant (Nexplanon) label from 3 to up to 5 years. | Replace `x` with "Etonogestrel implant. Once the rod is placed in the arm it works for years, up to 5 on its FDA label since January 2026, with nothing for the user to remember. Typical use equals perfect use, and fewer than 1 in 100 women become pregnant each year." |
| d_rp10_multi | ERROR | Row ["Lasts 3 years", "imp", "...labeled for 3 years as of 2025, shorter than the levonorgestrel IUDs and the copper IUD."]. The label is now up to 5 years (FDA, January 2026). "Shorter than the levonorgestrel IUDs" was already wrong, because the 3-year levonorgestrel IUD lasts as long. A 5-year label would also overlap the levonorgestrel column ("Lasts 3 to 8 years"). | Replace the row with ["Most effective reversible method", "imp", "Once the rod is in, nothing depends on the user and etonogestrel reliably blocks ovulation, so it has the lowest pregnancy rate of any reversible method."] |

rp10: 4 findings

## Outside item scope: the same facts in lesson and figure files

- `fast/content/topics/rp10.json` b18 table, Implant row, "Lasts": "3 years", and the `figs/rp10_methods.svg` label "rod in the
  arm, 3 years" both need the January 2026 label ("up to 5 years").
- `figs/rp10_pitfalls.svg` label "First-pass effect raises clotting": see rp10r03.

Sources for the implant label: Contemporary OB/GYN, 19 January 2026,
https://www.contemporaryobgyn.net/view/fda-approves-5-year-use-for-etonogestrel-implant-68-mg-contraceptive ; Organon
press release, 16 January 2026, https://www.businesswire.com/news/home/20260116204496/en/Organon-Announces-US-Food-and-Drug-Administration-Approval-of-Supplemental-New-Drug-Application-Extending-Duration-of-Use-of-NEXPLANON-etonogestrel-implant-68-mg-Radiopaque

Total: 31 findings in 394 items read (110 questions, 142 rapid items, 142 drill rows).
