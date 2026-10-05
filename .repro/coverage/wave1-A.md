# Coverage review, wave 1, slice A (topics rp1-rp15)

Reviewer: fresh Claude reading the accepted lessons content/topics/rp1.json to rp15.json (with their figure captions, glossary and
pretest/grid) against every ACCOUNTABLE objective (TOPIC-MAP rows whose first topic is rp1-rp15, 182 rows) and every blueprint item
BP-rp1-* to BP-rp15-* (none marked [x]). Course emphasis checked in scope/lectures/*.md for the mapped sessions, and the UNANCHORED
parts of audit/P1.4.md (rounds 4 and 6) were treated as parts that must be taught. Block numbers are the 0-based body indices that
`.repro/term_context.py` prints. A verdict is about the accountable (first) topic; where a listed secondary topic supplies a missing
part, the evidence says so and the row stays TAUGHT only if the gap is small and that topic is listed on the objective. Nothing was edited.

Verdicts: TAUGHT = every named part is explained. PARTIAL = a named part is absent or only mentioned (the row says which part and
what one or two sentences of content would fix it). MISSING = not taught (none found). ERROR = factual problem in a block.

## rp1

| id | verdict | where | evidence |
|---|---|---|---|
| ANAT-PELVIS-LEC.1 | TAUGHT | b1 | Pelvic brim (promontory to symphysis) separates false pelvis (abdominal organs) above from true pelvis (bony birth canal) below; outlet closed by the pelvic diaphragm; diamond-shaped perineum lies beneath. |
| ANAT-PELVIS-LEC.2 | TAUGHT | b2 | Diagonal conjugate (finger-reachable) minus 1.5-2 cm = obstetric conjugate (>= 10 cm); interspinous = tightest midpelvic diameter; intertuberous and subpubic arch (>90 degrees) at the outlet; gynecoid vs android. |
| ANAT-PELVIS-LEC.3 | TAUGHT | b4-b5, b34 | Pelvic diaphragm = levator ani (pubococcygeus, puborectalis, iliococcygeus) + coccygeus; continence/support roles explained; nerve to levator ani (S4, S3/S5) vs pudendal to external sphincters. |
| ANAT-PELVIS-LEC.4 | TAUGHT | b8-b9, b37 | Vesicouterine pouch, rectouterine pouch of Douglas (lowest point), male rectovesical pouch, closed vs open sac; retropubic space (suprapubic catheter) and retrorectal space (presacral veins). |
| ANAT-PELVIS-LEC.5 | TAUGHT | b11-b14, b16 | Uterus (parts, version/flexion, layers), cervix (internal/external os, round vs slit), vagina (fornices), tube (fimbriae, ampulla, isthmus), ovary (fossa, relations), bladder (trigone, detrusor), rectum (rectosigmoid at S3, anorectal flexure). Functions stated. |
| ANAT-PELVIS-LEC.6 | TAUGHT | b16, b25-b29 | Bladder; ductus deferens course; ampulla + seminal vesicle -> ejaculatory duct opening on seminal colliculus; semen shares (70 % vesicle, 20 % prostate), fructose, PSA liquefaction; prostate relations; retrograde ejaculation. |
| ANAT-PELVIS-LEC.7 | PARTIAL | b18-b19, b23 | Arterial origins are complete (ovarian from aorta, internal iliac anterior/posterior branches, inferior vesical, superior rectal from IMA); veins go plexus -> internal iliac -> IVC and gonadal veins. MISSING: venous drainage of the rectum to its portal termination (superior rectal vein -> IMV -> portal vs middle/inferior rectal -> caval); the course slide stresses it ("You should know this"). rp2 b24/b26 teaches it, so a one-sentence rp1 line plus pointer fixes it. |
| ANAT-PELVIS-LEC.8 | TAUGHT | b18-b20 | Parametrium and cardinal ligament with the uterine artery over the ureter (2 cm lateral to cervix), ureter at the common iliac bifurcation near ovarian vessels, internal pudendal artery over the ischial spine, Batson plexus, cervical cancer compressing ureter. |
| ANAT-PELVIS-LEC.9 | TAUGHT | b23, b36 | Gynecologic (ligate uterine/ovarian vessels after tracing ureter; internal iliac anterior division ligation or embolization), colorectal (superior rectal artery), urologic (prostatectomy pedicles/dorsal vein, spare neurovascular bundles); collaterals explain no necrosis. |
| ANAT-PELVIS-LAB.1 | TAUGHT | b1 | Ilium/ischium/pubis + sacrum, sacroiliac joints and pubic symphysis, sacrospinous and sacrotuberous ligaments forming the greater and lesser sciatic foramina. |
| ANAT-PELVIS-LAB.2 | TAUGHT | b1 | Same content as LEC.1 plus pelvic outlet and pelvic diaphragm. |
| ANAT-PELVIS-LAB.3 | TAUGHT | b4, b31 | Obturator internus (side wall, exits lesser sciatic foramen) and piriformis (back wall, exits greater sciatic foramen); suprapiriform space = superior gluteal only, infrapiriform = sciatic, inferior gluteal, pudendal; Trendelenburg consequence. |
| ANAT-PELVIS-LAB.4 | TAUGHT | b6 | Parietal (obturator fascia), visceral, endopelvic with its condensations (cardinal, uterosacral), pubocervical fascia, rectovaginal septum; support role and prolapse. |
| ANAT-PELVIS-LAB.5 | TAUGHT | b8, b13 | Pouches (b8) and the broad ligament as mesovarium, mesosalpinx, mesometrium (b13). |
| ANAT-PELVIS-LAB.6 | TAUGHT | b31 | Lumbosacral trunk (L4-L5) + ventral rami S1-S4 through the anterior sacral foramina; lies on the front of the piriformis. |
| ANAT-PELVIS-LAB.7 | PARTIAL | b18-b20 | Arterial and lymphatic (para-aortic for gonads; iliac/sacral for others) and Batson plexus are taught for both sexes. Same gap as LEC.7: rectal venous drainage (portal vs caval) is not taught in rp1. |
| ANAT-PELVIS-LAB.8 | TAUGHT | b32-b35 | Inferior hypogastric plexus; lumbar splanchnic/hypogastric (sympathetic) vs pelvic splanchnic S2-S4 (parasympathetic); bladder storage vs voiding (M3), erection vs emission, hindgut supply, pelvic splanchnic trap. |
| ANAT-PELVIS-LAB.9 | TAUGHT | b11-b16 | As LEC.5 (infundibulum, trigone, rectosigmoid, anorectal flexure all explained). |
| ANAT-PELVIS-LAB.10 | TAUGHT | b16, b25-b27, b29 | Trigone, ductus/spermatic cord, seminal vesicle, prostate with Denonvilliers fascia and rectovesical pouch, rectum. |
| ANAT-PELVIS-LAB.11 | TAUGHT | b6, b8, b11, b14 | Fundus/body/isthmus/cervix, anteverted/anteflexed, retroverted variant vs fixed (endometriosis/PID), endometrium-myometrium-perimetrium, round/ovarian/cardinal/uterosacral ligaments, pouches, culdocentesis. |
| ANAT-PELVIS-LAB.12 | TAUGHT | b13-b14 | Ovarian fossa boundaries, obturator nerve referred pain, mesovarium, ovarian and suspensory ligaments; torsion appears only as a table cell ("twists in ovarian torsion") but the anatomy basis (vascular pedicle in the infundibulopelvic ligament) is given; acceptable for an anatomy objective. |
| ANAT-PELVIS-LAB.13 | TAUGHT | b25-b28 | Tunica vaginalis (hydrocele), seminiferous tubules -> rete -> efferent ductules -> epididymis -> ductus deferens, vasectomy, prostate base/apex/posterior surface, Denonvilliers fascia, digital rectal exam. Minor: tunica albuginea and prostate zones are not named (rp19 owns zones). |
| ANAT-EXTGEN-LAB.1 | TAUGHT | b4-b5 | Same as LEC.3. |
| BP-rp1-01 | TAUGHT | b1-b2 | True vs false pelvis, outlet, all four obstetric measures, gynecoid vs android. |
| BP-rp1-02 | TAUGHT | b4-b6 | Levator ani parts + coccygeus, nerve to levator ani vs pudendal, continence, prolapse. |
| BP-rp1-03 | TAUGHT | b8-b9, b37 | Rectouterine pouch lowest point, fluid collects, culdocentesis through posterior fornix; vesicouterine; rectovesical. |
| BP-rp1-04 | TAUGHT | b6, b13-b14, b20 | Suspensory ligament (ovarian vessels, clamped in oophorectomy, ureter nearby), cardinal (uterine vessels), round (inguinal canal), ovarian (gubernaculum remnant), broad ligament parts, uterosacral. Minor: only the ovarian-ligament row says "gubernaculum remnant"; round ligament row does not. |
| BP-rp1-05 | TAUGHT | b17, b20 | "Water under the bridge", 2 cm lateral to cervix, injury in hysterectomy. |
| BP-rp1-06 | TAUGHT | b18 | Ovarian artery from aorta; uterine, vaginal, vesical, middle rectal, internal pudendal from anterior division of the internal iliac. |
| BP-rp1-07 | PARTIAL | b18, b22 | Left -> left renal vein, right -> IVC, left varicocele explained (b22). MISSING: nutcracker syndrome (left renal vein squeezed between SMA and aorta -> raised left gonadal vein pressure: left varicocele, hematuria, flank pain); one sentence in the b22 callout fixes it. |
| BP-rp1-08 | TAUGHT | b23, b36 | Ligation of uterine/ovarian vessels and anterior division of internal iliac; collaterals keep organs alive. |
| BP-rp1-09 | TAUGHT | b6 | Parietal, visceral, endopelvic fascia and its condensations as the support system. |
| BP-rp1-10 | TAUGHT | b31, b34 | Sacral plexus on piriformis; suprapiriform (superior gluteal) vs infrapiriform (sciatic, inferior gluteal, pudendal). |
| BP-rp1-11 | TAUGHT | b32-b33, b35 | Pelvic splanchnics S2-S4 parasympathetic, hypogastric sympathetic; visceral pain routes (uterine body vs cervix). |
| BP-rp1-12 | TAUGHT | b11, b13 | Parts, anteverted/anteflexed, layers, ovarian fossa. |
| BP-rp1-13 | TAUGHT | b25-b27 | Ductus path, ampulla, seminal vesicle, ejaculatory duct to seminal colliculus, prostate relations, prostatic urethra. |
| BP-rp1-14 | TAUGHT | b6 | Cystocele (anterior), rectocele (posterior), apical uterine/vault prolapse; childbirth and estrogen loss ("years later" covers age). |
| BP-rp1-15 | TAUGHT | b32, b34 | Sympathetic stores (relaxes detrusor, closes internal sphincter), pelvic splanchnic M3 voids; external sphincter relaxes. |
| BP-rp1-16 | TAUGHT | b20, b25, b29 | Ductus deferens crosses over the ureter, "male bridge". |

rp1: 36 TAUGHT, 3 PARTIAL, 0 MISSING, 0 ERROR

## rp2

| id | verdict | where | evidence |
|---|---|---|---|
| ANAT-PERINEUM-LEC.1 | TAUGHT | b1 | Diamond bounded by symphysis, ischiopubic rami, ischial tuberosities, sacrotuberous ligaments, coccyx; line between tuberosities gives urogenital triangle (horizontal plane) and anal triangle (near-vertical plane) with contents. |
| ANAT-PERINEUM-LEC.2 | TAUGHT | b2-b3 | Perineal membrane attaches to ischiopubic rami, pubic arch (transverse perineal ligament) and perineal body; pierced by urethra/vagina. |
| ANAT-PERINEUM-LEC.3 | TAUGHT | b2-b4 | Deep pouch (above membrane: external urethral sphincter, deep transverse perineal, membranous urethra, bulbourethral glands, dorsal vessels/nerves) vs superficial pouch (below: erectile roots, bulbospongiosus, ischiocavernosus, superficial transverse perineal, Bartholin glands; floor Colles fascia); table by sex. |
| ANAT-PERINEUM-LEC.4 | TAUGHT | b24-b27 | Above vs below the pectinate line: epithelium, cancer type, artery (superior vs inferior rectal), veins (portal vs caval), lymph (internal iliac vs superficial inguinal), nerves (visceral vs somatic), hemorrhoids; portocaval anastomosis and rectal varices. |
| ANAT-PERINEUM-LEC.5 | TAUGHT | b9-b10 | Mons, labia majora/minora, vestibule with urethral and vaginal orifices, hymen, Bartholin glands, vestibular bulbs, clitoris (glans, corpora, crura). |
| ANAT-PERINEUM-LEC.6 | TAUGHT | b11, b13 | Root (bulb + crura), corpora cavernosa, corpus spongiosum, tunica albuginea, prepuce; prostatic/membranous/spongy urethra with navicular fossa and the narrowest membranous part. |
| ANAT-PERINEUM-LEC.7 | PARTIAL | b15-b17 | Pudendal nerve branches and ilioinguinal territory, internal pudendal artery branches, helicine arteries, external pudendal arteries are taught. Venous drainage is thin: only the deep dorsal vein of the penis (to the prostatic plexus) is given; nothing on internal pudendal veins -> internal iliac, or superficial dorsal/external pudendal veins -> great saphenous, or the female side. Fix: one sentence. |
| ANAT-PERINEUM-LEC.8 | TAUGHT | b28-b34 | Lymph follows arteries; gonads to para-aortic, uterus/cervix/upper vagina to iliac/obturator, prostate to internal iliac, lower vagina/vulva/scrotum/anal canal below pectinate to superficial inguinal, glans to deep inguinal; sentinel node, inguinal bubo (chancroid/LGV vs syphilis); table with classic cases. |
| ANAT-PERINEUM-LEC.9 | TAUGHT | b18, b20-b22 | Inferior hypogastric plexus; sympathetic (lumbar splanchnic: vasoconstriction, internal urethral/anal sphincter closure, emission) vs parasympathetic (pelvic splanchnic: vasodilation, detrusor, erection); point, squeeze, shoot. |
| ANAT-EXTGEN-LAB.2 | TAUGHT | b1 | As LEC.1 (anal triangle, coccyx, sacrotuberous ligament, planes). |
| ANAT-EXTGEN-LAB.3 | TAUGHT | b2 | Perineal membrane named as the separating layer; attachments to ischiopubic rami, pubic arch (transverse perineal ligament), perineal body. |
| ANAT-EXTGEN-LAB.4 | TAUGHT | b5-b7, b33 | Colles fascia attachments and continuity with dartos/Scarpa/fascia lata explains spread to scrotum, penis, abdominal wall but not thighs; membranous tear fills deep pouch/retropubic space; retrograde urethrogram. |
| ANAT-EXTGEN-LAB.5 | TAUGHT | b9-b10 | All listed vulvar parts present; function stated for Bartholin glands (lubrication) and bulbs (swell in arousal). |
| ANAT-EXTGEN-LAB.6 | TAUGHT | b9-b10, b13 | Urethral orifice in front, vaginal orifice behind, Bartholin ducts posterolateral at 4 and 8 o'clock. |
| ANAT-EXTGEN-LAB.7 | TAUGHT | b11, b13 | Bulb, crura, corpora cavernosa, corpus spongiosum, glans, prepuce; three urethral parts with course and caliber. |
| ANAT-EXTGEN-LAB.8 | TAUGHT | b15-b17 | Pudendal course (greater sciatic foramen, ischial spine/sacrospinous ligament, lesser sciatic foramen, Alcock canal), branches, pudendal block at the spine, ilioinguinal for the front. |
| ANAT-EXTGEN-LAB.9 | TAUGHT | b18, b21 | Internal sphincter smooth muscle, sympathetic hypogastric via alpha-1 (tamsulosin relaxes it); external sphincter skeletal, pudendal. |
| ANAT-EXTGEN-LAB.10 | PARTIAL | b15-b17, b28-b32 | Innervation, arteries, lymph and clinical spread (cancer, bubo) are well taught; venous drainage of male and female external genitalia is not (same gap as LEC.7: only the deep dorsal vein of the penis). |
| BP-rp2-01 | TAUGHT | b1-b4 | Triangles, perineal membrane, both pouches and contents. |
| BP-rp2-02 | TAUGHT | b5-b7, b33 | Spongy urethra below membrane leaks under Colles into scrotum/penis/abdominal wall not thighs; membranous tear with pelvic fracture leaks to deep pouch/retropubic space. |
| BP-rp2-03 | TAUGHT | b15, b17-b19 | Pudendal S2-S4 around ischial spine, block landmark, supplies perineum and external sphincters. |
| BP-rp2-04 | TAUGHT | b16, b22 | Point (parasympathetic), squeeze (sympathetic emission), shoot (pudendal ejaculation). |
| BP-rp2-05 | TAUGHT | b29-b31 | All five routes in text and table. |
| BP-rp2-06 | TAUGHT | b24-b27 | Every above/below pair listed in BP is covered. |
| BP-rp2-07 | TAUGHT | b9-b10 | Vulva parts, Bartholin ducts at 4 and 8 o'clock. |
| BP-rp2-08 | TAUGHT | b11, b13 | Three urethral parts, corpora cavernosa/spongiosum, tunica albuginea. |
| BP-rp2-09 | TAUGHT | b18 | Smooth/sympathetic internal vs skeletal/pudendal external. |
| BP-rp2-10 | TAUGHT | b1, b4, b15 | Ischioanal fossa (fat, expansion) and Alcock canal (split in obturator fascia, nerve branches). |
| BP-rp2-11 | TAUGHT | b15, b17 | Inferior rectal, perineal (deep/superficial), dorsal nerve; ilioinguinal for the anterior scrotum/labia. |
| BP-rp2-12 | TAUGHT | b19 | Internal vs external anal sphincter, perineal body, laceration degrees, episiotomy. |
| BP-rp2-13 | TAUGHT | b29, b31 | Fundus along round ligament, prostate to internal iliac/obturator/sacral, penile shaft skin to superficial inguinal. |

rp2: 29 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR

## rp3

| id | verdict | where | evidence |
|---|---|---|---|
| ANAT-BREAST.1 | TAUGHT | b1-b2, b16-b18 | Modified apocrine gland, 15-20 lobes each with a lactiferous duct widening into a sinus/ampulla before opening on the nipple; lobule/TDLU; alveoli (b17-b18); areola with Montgomery tubercles; Cooper ligaments; fat between lobes in subcutaneous tissue. |
| ANAT-BREAST.2 | TAUGHT | b6-b7 | Inspection of nipple (inversion, scaling, discharge) and areola, palpation of all quadrants with the axillary tail, clock-face recording; UOQ at 9-12 (right) and 12-3 (left) checked as correct. |
| ANAT-BREAST.3 | TAUGHT | b2-b4, b20 | Retromammary space as the loose gliding plane between gland and pectoral fascia over pectoralis major; tumor crossing it is fixed (hands-on-hips test). |
| ANAT-BREAST.4 | TAUGHT | b6, b9-b13 | Internal thoracic, lateral thoracic, thoracoacromial, posterior intercostal arteries; veins to axillary/internal thoracic/intercostal with Batson plexus; ~75 % axillary (levels I-III), internal mammary, sentinel node, supraclavicular; T4-T6 intercostal nerves; exam of axilla and supraclavicular fossa. |
| TBL-BREAST.1 | TAUGHT | b16, b18 | Two-layer lining (luminal cuboidal/columnar over myoepithelial on basement membrane), loose intralobular vs dense interlobular stroma, resting vs lactating histology, involution. |
| TBL-BREAST.2 | TAUGHT | b16-b18 | Luminal cells make milk (casein by merocrine exocytosis, lipid droplets by apocrine pinching), myoepithelial cells contract to oxytocin (let-down), prolactin/oxytocin loop. |
| BP-rp3-01 | TAUGHT | b1 | TDLU defined and tied to where disease starts; lactiferous ducts/sinus open at nipple. |
| BP-rp3-02 | TAUGHT | b16, b19 | Luminal vs myoepithelial cells; loss of myoepithelium and p63/SMM staining mark invasion; sclerosing adenosis mimic. |
| BP-rp3-03 | TAUGHT | b2-b4, b20 | Cooper ligament shortening -> dimpling/retraction; contrasted with fixation. |
| BP-rp3-04 | TAUGHT | b10, b12-b13 | ~75 % axillary, levels I-III by pectoralis minor, medial quadrants to internal mammary, sentinel node, supraclavicular N3. |
| BP-rp3-05 | TAUGHT | b9, b13 | Internal thoracic perforators, lateral thoracic, thoracoacromial pectoral branches, posterior intercostals. |
| BP-rp3-06 | TAUGHT | b11, b13-b14 | Long thoracic (winged scapula), thoracodorsal (latissimus), intercostobrachial (numb medial arm); winging trap. |
| BP-rp3-07 | TAUGHT | b1-b2, b4 | Retromammary space and pectoral fascia fixation = deep invasion, axillary tail, Montgomery tubercles. |
| BP-rp3-08 | TAUGHT | b17 | Estrogen/GH/IGF-1 ducts, progesterone lobular buds and alveoli, prolactin, oxytocin, placental progesterone brake. |
| BP-rp3-09 | TAUGHT | b18 | Resting (fibrous/fatty stroma, few lobules) vs lactating (dilated alveoli); merocrine casein vs apocrine lipid droplets; postmenopausal involution. |

rp3: 15 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp4

| id | verdict | where | evidence |
|---|---|---|---|
| EMBRYO-CLIN.1 | TAUGHT | b1 | Gestational age from LMP (40 wk / 280 d) vs fertilization/embryonic age (conception about 2 weeks later, 38 wk / 266 d); which clock each source uses. |
| EMBRYO-CLIN.2 | TAUGHT | b3-b8 | Fertilization in ampulla with capacitation, acrosome and cortical reactions; cleavage, morula, blastocyst, hatching, implantation day 6, hCG; week 2 bilaminar disc; week 3 gastrulation through the primitive streak, notochord, neural plate; teratogen windows. |
| EMBRYO-CLIN.3 | TAUGHT | b10-b14 | Derivatives by layer (surface ectoderm, neuroectoderm, neural crest, paraxial/intermediate/lateral mesoderm, endoderm), neurulation and neuropore closure (NTDs, folic acid, AFP), somites, tracheoesophageal septum/atresia, Hirschsprung, VACTERL, patent urachus/vitelline duct; table pairs each layer with an anomaly. |
| EMBRYO-CLIN.4 | TAUGHT | b16-b21, b34 | Amnion (cushion, movement, lung growth), yolk sac (first blood cells, germ cells), allantois/urachus, vitelline duct/Meckel, chorion and villi stages (primary to tertiary), chorion frondosum vs laeve, decidua basalis/capsularis/parietalis; amniotic fluid source and disorders. |
| EMBRYO-CLIN.5 | TAUGHT | b18-b19, b23-b24 | Spiral artery remodeling -> intervillous space, no mixing of blood, IgG transfer, cord arteries/vein and fates, preeclampsia link; hCG-corpus luteum-progesterone with luteal-placental shift (and the 6 vs 12 week WHY), hPL, estriol via fetal adrenal DHEA-S/fetal liver/placenta. |
| EMBRYO-CLIN.6 | TAUGHT | b26-b27 | Ectopic (ampulla, no decidua in tube, rupture), previa (lower segment over internal os, painless bleeding, no digital exam), accreta/increta/percreta from deficient decidua basalis over a cesarean scar; risk-factor table. |
| EMBRYO-CLIN.11 | TAUGHT | b35-b38 | Integration method (date the insult, name the primordium and its siblings, read fluid/cord/placenta), teratogen defined with all-or-none/organogenesis windows, chorionicity and twinning, malformation/deformation/disruption/sequence. Specific teratogenic drugs are not listed here (shared with rp5/rp6). |
| BP-rp4-01 | TAUGHT | b3-b4 | Ampulla, implantation about day 6, syncytiotrophoblast hCG positive about 1 week after fertilization. |
| BP-rp4-02 | TAUGHT | b4-b6 | Rule of 2s and rule of 3s with epiblast/hypoblast, two cavities, two trophoblast layers; gastrulation, trilaminar disc, notochord, neural plate. |
| BP-rp4-03 | TAUGHT | b5, b7 | Weeks 3-8 organogenesis peak sensitivity; all-or-none before week 3; growth effects after week 8. |
| BP-rp4-04 | TAUGHT | b10-b14 | All layers and key anomalies. |
| BP-rp4-05 | TAUGHT | b1 | Gestational age about 2 weeks more than embryonic age. |
| BP-rp4-06 | TAUGHT | b17-b19 | Chorion frondosum (cyto + syncytiotrophoblast) vs decidua basalis; maternal blood in intervillous space. |
| BP-rp4-07 | TAUGHT | b18, b23-b24 | hCG until placental progesterone at 8-10 weeks, hPL (insulin resistance, lipolysis), estriol needing fetal adrenal DHEA-S, progesterone. |
| BP-rp4-08 | TAUGHT | b19-b20 | Two arteries (deoxygenated, from fetal internal iliacs) and one vein; single umbilical artery marks renal anomalies; trap on oxygen content. |
| BP-rp4-09 | TAUGHT | b16, b21 | Allantois -> urachus (patent urachus, cyst, sinus), vitelline duct -> Meckel diverticulum or fistula, yolk sac roles. |
| BP-rp4-10 | TAUGHT | b29-b32, b38 | Dizygotic always di/di; monozygotic split timing 0-4, 4-8, 8-12, >13 days; TTTS; ultrasound signs. |
| BP-rp4-11 | TAUGHT | b34 | Fetal urine and swallowing; oligohydramnios (renal agenesis, ACE inhibitors, Potter) and polyhydramnios (atresias, anencephaly, maternal diabetes). |
| BP-rp4-12 | TAUGHT | b16 | Amnion, chorion, yolk sac, allantois. |
| BP-rp4-13 | TAUGHT | b3, b8 | Capacitation, acrosome reaction, cortical/zona reaction, meiosis II completion. |
| BP-rp4-14 | TAUGHT | b3-b4, b8 | Morula day 3, blastocyst day 5, inner cell mass vs trophoblast, hatching, implantation day 6. |
| BP-rp4-15 | TAUGHT | b5 | Persistent primitive streak -> sacrococcygeal teratoma, most common newborn tumor, three germ layers. |
| BP-rp4-16 | TAUGHT | b35 | Malformation, deformation, disruption (amniotic band), sequence (Potter). |
| BP-rp4-17 | TAUGHT | b30-b31 | Monochorionic anastomoses; donor anemic/growth-restricted/oligohydramnios; recipient polycythemic/polyhydramnios/heart failure. |

rp4: 24 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp5

| id | verdict | where | evidence |
|---|---|---|---|
| HP-UTERUS-OVARY.4 | TAUGHT | b16-b22 | Step-by-step Müllerian development with each anomaly mapped to its failed step; table of agenesis, unicornuate, didelphys, bicornuate, septate, T-shaped (DES) with imaging clue and obstetric consequence (recurrent loss, preterm birth, breech, rudimentary-horn ectopic); renal ultrasound advice. |
| HP-MALE.10 | TAUGHT | b27-b31 | Descent through the inguinal canal in two phases (INSL3/gubernaculum, then androgen-dependent), deep ring in transversalis fascia lateral to inferior epigastric vessels, processus vaginalis, a covering from each wall layer (table), cord contents. |
| EMBRYO-GU.1 | TAUGHT | b1-b3, b7-b9, b11-b14, b17 | Genital ridge/germ cells, testis vs ovary organization, tubes/uterus/cervix/upper vagina from Müllerian ducts, lower vagina and urethra from urogenital sinus, epididymis/vas/seminal vesicle/ejaculatory duct from mesonephric duct, tubercle/folds/swellings to penis-clitoris, spongy urethra, scrotum-labia, with homolog table and figure. |
| EMBRYO-GU.2 | TAUGHT | b23-b25 | Shared mesonephric origin: Müllerian anomalies with ipsilateral renal agenesis (OHVIRA pattern), male renal agenesis with absent vas/seminal vesicle, ectopic ureter (upper pole of duplex kidney) with sex-specific presentation. |
| EMBRYO-GU.3 | TAUGHT | b1-b2, b5, b32-b33 | SRY/TDF -> SOX9 -> Sertoli -> AMH; Leydig -> testosterone (Wolffian); 5-alpha-reductase -> DHT; default female pathway; 5-ARD and persistent Müllerian duct syndrome as worked cases. |
| EMBRYO-GU.4 | TAUGHT | b7, b17-b22 | Gartner cyst (mesonephric remnant), didelphys (no fusion), bicornuate (partial fusion), septate (no resorption), vaginal atresia/imperforate hymen (no canalization), MRKH (no duct formation). |
| EMBRYO-GU.5 | TAUGHT | b15, b27-b31 | Hypospadias (urethral folds not fused, ventral, chordee), epispadias (tubercle position, exstrophy), cryptorchidism (INSL3/androgen phases, tumor and fertility risk), communicating hydrocele from patent processus vaginalis. |
| EMBRYO-CLIN.7 | TAUGHT | b1, b7-b8, b11-b12 | Intermediate mesoderm genital ridge with bipotent gonad; both duct pairs and fates; urorectal septum/cloaca division; tubercle, folds, swellings. |
| EMBRYO-CLIN.8 | TAUGHT | b1-b2, b4-b5 | Sex-determining region of Y -> testis-determining factor -> SOX9 -> Sertoli cells -> AMH; Leydig/testosterone/DHT; default female. |
| EMBRYO-CLIN.9 | TAUGHT | b7-b9 | Mesonephric (epididymis, vas, seminal vesicle, ejaculatory duct, ureteric bud; epoophoron and Gartner remnant in females) vs paramesonephric (tubes, uterus, cervix, upper vagina; appendix testis) table and grid. |
| EMBRYO-CLIN.10 | TAUGHT | b5, b15-b22, b27-b33 | Cryptorchidism, hypospadias, Müllerian anomalies and the three-signal logic for sex-development disorders (missing AMH, androgen action or DHT) with 5-ARD and PMDS cases; the full DSD catalogue is deferred to rp6 (named in b13). |
| BICEP-MISHIMOTO.2 | TAUGHT | b28, b31 | Processus vaginalis precedes the testis, proximal part obliterates, distal part persists as tunica vaginalis; patent processus -> indirect hernia/communicating hydrocele. |
| BICEP-WALSH.19 | PARTIAL | b21 | Only the T2 zonal signal of the uterus (bright endometrium, dark junctional zone, intermediate myometrium) and "sagittal images trace the uterus, cervix and vagina between bladder and rectum" are given; no MRI figure. MISSING: how to tell the cervix (lower tubular segment below the isthmus/internal os, dark fibrous stroma around bright endocervical mucus) and the vagina (collapsed tube below the cervix, H-shaped on axial, between urethra/bladder and rectum, fornices around the cervix) on MRI. Two sentences fix it. |
| BP-rp5-01 | TAUGHT | b1-b2 | SRY -> TDF -> SOX9/Sertoli -> AMH; Leydig -> testosterone. |
| BP-rp5-02 | TAUGHT | b7, b9 | SEED derivatives, Gartner cyst and epoophoron in females. |
| BP-rp5-03 | TAUGHT | b8-b9, b2 | Tubes, uterus, cervix, upper vagina; lower vagina from urogenital sinus; female default. |
| BP-rp5-04 | TAUGHT | b2, b5, b32 | DHT via 5-alpha-reductase for external genitalia/prostate; testosterone for Wolffian ducts. |
| BP-rp5-05 | TAUGHT | b8-b9, b12, b14 | Tubercle, folds, swellings homologs; prostate/Skene and bulbourethral/Bartholin as urogenital-sinus derivatives. |
| BP-rp5-06 | TAUGHT | b27-b28 | Gubernaculum -> ovarian and round ligaments in females; processus vaginalis -> tunica vaginalis. |
| BP-rp5-07 | TAUGHT | b17-b20 | MRKH (normal ovaries, 46,XX, primary amenorrhea), didelphys, bicornuate, septate (most common, recurrent loss), unicornuate. |
| BP-rp5-08 | TAUGHT | b22 | Imperforate hymen, transverse septum, hematocolpos, cyclic pain, primary amenorrhea; vaginal atresia. |
| BP-rp5-09 | TAUGHT | b15 | Hypospadias vs epispadias with exstrophy. |
| BP-rp5-10 | TAUGHT | b24 | Müllerian anomalies with ipsilateral renal agenesis via mesonephric duct. |
| BP-rp5-11 | TAUGHT | b1 | Genital ridge; primordial germ cells from the yolk sac. |
| BP-rp5-12 | TAUGHT | b28, b30-b31 | Coverings by wall layer (table) and cord contents. |
| BP-rp5-13 | TAUGHT | b8-b9 | Urogenital sinus -> prostate, bulbourethral glands; lower vagina, Skene, Bartholin. |

rp5: 25 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR

## rp6

| id | verdict | where | evidence |
|---|---|---|---|
| EMBRYO-GU.6 | TAUGHT | b3-b5, b7-b17 | For each of aromatase deficiency (b16-b17: DHEA-S not aromatized, virilized 46,XX fetus and mother, no breasts/high FSH-LH/tall at puberty), 5-ARD (b8: T normal, DHT low, high T:DHT, ambiguous at birth, virilizes at puberty), CAIS (b7), CAH (b15: 21-hydroxylase, ACTH up, salt wasting, 17-OHP high; enzyme detail deferred to en11), Swyer (b9-b10); lab table b12. |
| TBL-PUBERTY.7 | TAUGHT | b19-b22 | Turner (45,X/mosaic, streak ovaries, hypergonadotropic hypogonadism, SHOX short stature, cardiac, renal, chest findings) and Klinefelter (47,XXY, primary hypogonadism, low inhibin B, high FSH/LH, low T, gynecomastia, tall, Barr body, azoospermia). |
| BICEP-WALSH.21 | TAUGHT | b19-b21 | Karyotypes and signs for both; hormone patterns; fig rp6_sexchrom contrasts them. |
| BICEP-WALSH.22 | TAUGHT | b7-b10, b12-b13, b16-b17 | Pathophysiology, exam and labs for aromatase deficiency, 5-ARD, CAIS, including scant pubic hair, breasts from aromatized testosterone, gonadectomy timing, maternal virilization WHY. |
| BICEP-WALSH.23 | TAUGHT | b1-b2 | Genotypic, gonadal, phenotypic sex, gender identity (cannot be read from karyotype/anatomy) and sexual orientation as a separate axis. |
| BP-rp6-01 | TAUGHT | b7, b12-b13 | AR defect, female genitalia, blind pouch, no uterus (AMH made), testes inguinal, high T/LH/estradiol, scant hair; MRKH contrast. |
| BP-rp6-02 | TAUGHT | b8, b12, b32 (rp5) | Ambiguous genitalia, virilizes at puberty, normal T, low DHT. |
| BP-rp6-03 | TAUGHT | b15 | CAH commonest cause of ambiguous genitalia in 46,XX; pointer to en11. |
| BP-rp6-04 | TAUGHT | b16-b17 | 46,XX virilization plus maternal virilization; mechanism via fetal DHEA-S. |
| BP-rp6-05 | TAUGHT | b9-b10 | 46,XY SRY defect, streak gonads, uterus present, female genitalia, gonadoblastoma, gonadectomy. |
| BP-rp6-06 | TAUGHT | b19-b20 | Every listed Turner feature including short stature, streak ovaries, high FSH, webbed neck, lymphedema, coarctation, bicuspid valve, horseshoe kidney, shield chest. |
| BP-rp6-07 | TAUGHT | b21 | All listed Klinefelter features and hormone pattern, Barr body, breast cancer risk. |
| BP-rp6-08 | TAUGHT | b24 | Failed GnRH neuron migration with anosmia, low GnRH/FSH/LH/steroids, puberty does not start. |
| BP-rp6-09 | TAUGHT | b25 | 47,XYY, 46,XX testicular DSD (SRY translocation), ovotesticular DSD. |
| BP-rp6-10 | TAUGHT | b4-b5, b11-b12 | Four-question approach and a table of karyotype, gonad, uterus (AMH), T/DHT, LH, genitalia across CAIS, 5-ARD, Swyer, CAH, aromatase deficiency. |
| BP-rp6-11 | TAUGHT | b20 | Jugular lymph sac failure -> cystic hygroma/nuchal translucency -> webbed neck, hand/foot lymphedema. |

rp6: 16 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp7

| id | verdict | where | evidence |
|---|---|---|---|
| TBL-PUBERTY.1 | TAUGHT | b10-b11 | Tanner 1-5 for breast, pubic hair and male genitalia in a table (breast bud = breast stage 2, testes 4 mL or more = genital stage 2) with the hormone behind each sign. |
| TBL-PUBERTY.2 | TAUGHT | b3, b5-b6, b10 | Gonadarche, adrenarche, pubarche, thelarche, menarche, spermarche defined with hormone behind each; adrenal vs gonadal engine. |
| TBL-PUBERTY.3 | TAUGHT | b1-b2, b4 | Kisspeptin/arcuate pulse generator, leptin permissive, nocturnal LH pulses, LH-theca / FSH-granulosa-aromatase, LH-Leydig / FSH-Sertoli-inhibin B, maturing feedback and late positive feedback in girls only. |
| TBL-PUBERTY.4 | TAUGHT | b8-b9 | Girls thelarche -> pubarche -> peak height velocity -> menarche (2-3 y after thelarche); boys testicular enlargement -> pubic hair/penis -> spermarche -> late growth spurt; typical ages and PHV values. |
| TBL-PUBERTY.5 | TAUGHT | b13-b17, b22-b25 | Definition (before 8 / 9 y), central (LH cutoffs, GnRH stimulation, MRI, hamartoma, agonist) vs peripheral (McCune-Albright, testotoxicosis, CAH, tumors, hCG, exogenous) with boys vs girls exam clues; delayed puberty (13 girls / 4 mL by 14 boys) sorted by LH/FSH, bone age and karyotype; stepwise work-up. |
| TBL-PUBERTY.6 | TAUGHT | b4, b19-b20 | Premature thelarche, premature adrenarche, pubertal gynecomastia: self-limited, growth velocity and bone age separate variant from disease; reexamine, do not give a GnRH agonist. |
| BICEP-WALSH.1 | TAUGHT | b3, b6, b10 | Terminology, physical findings and hormones (estrogen, testosterone, FSH, adrenal/gonadal androgen, DHT). |
| BICEP-WALSH.2 | TAUGHT | b1-b2 | Same as TBL-PUBERTY.3. |
| BICEP-WALSH.3 | TAUGHT | b8-b9 | Same as TBL-PUBERTY.4. |
| BICEP-WALSH.4 | TAUGHT | b2-b3, b12 | Gonadotropin-steroid interactions, maturing feedback and positive feedback, DHEA-S/ACTH adrenarche, GH and IGF-1 with sex steroids. |
| BICEP-WALSH.5 | TAUGHT | b12-b13 | Sex steroids drive the spurt and mature the plates; estrogen (aromatized in boys) fuses epiphyses; bone age read from hand X-ray; tall child, short adult WHY. |
| BICEP-WALSH.6 | TAUGHT | b22-b24 | Constitutional delay, functional hypogonadotropic (anorexia, athletes, chronic illness), permanent (pituitary lesions, Kallmann), hypergonadotropic (Turner, chemotherapy), plus TSH/prolactin screen (b25). |
| BP-rp7-01 | TAUGHT | b1-b4 | Pulsatile GnRH, kisspeptin, leptin, gonadarche vs adrenarche (DHEA-S). |
| BP-rp7-02 | TAUGHT | b8-b9 | Order and timing in both sexes. |
| BP-rp7-03 | TAUGHT | b10-b11 | Tanner staging and hormone behind each sign. |
| BP-rp7-04 | TAUGHT | b13, b15, b17 | High LH/FSH, advanced bone age, idiopathic in girls vs CNS lesion/hamartoma in boys, continuous GnRH agonist. |
| BP-rp7-05 | TAUGHT | b16-b17 | Low LH/FSH; CAH, McCune-Albright (GNAS, café-au-lait, fibrous dysplasia), granulosa/Leydig tumors, hCG tumors, exogenous steroids, testotoxicosis. |
| BP-rp7-06 | TAUGHT | b22-b24 | Constitutional delay (most common, bone age, family history), hypogonadotropic, hypergonadotropic. |
| BP-rp7-07 | TAUGHT | b19-b20 | Premature thelarche, premature adrenarche, pubertal gynecomastia. |
| BP-rp7-08 | TAUGHT | b25 | Bone age, LH basal/stimulated, steroids, TSH, prolactin, karyotype, imaging. |
| BP-rp7-09 | TAUGHT | b15, b22 | Before 8 (girls) / 9 (boys); no breasts by 13 / testes under 4 mL by 14. |

rp7: 21 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp8

| id | verdict | where | evidence |
|---|---|---|---|
| HP-UTERUS-OVARY.1 | TAUGHT | b1, b22-b25 | Ovary: surface epithelium, tunica albuginea, cortex with follicles, medulla; follicle stages and corpus luteum/albicans. Uterus: endometrium (functionalis/basalis, glands, stroma), myometrium, perimetrium. Tube: folded mucosa with ciliated and secretory (peg) cells, fimbriae/ampulla. Wall layers of the tube and regional folding are not described (course slide stresses only the ciliated/peg cells). |
| HP-UTERUS-OVARY.2 | TAUGHT | b17, b20, b22-b25, b27 | Luteinization and corpus albicans; proliferative/secretory glands, subnuclear then supranuclear vacuoles, predecidua; implantation and decidualization under hCG-rescued progesterone; tube cilia follow estrogen/progesterone; phase table. |
| PHYS-MENSTRUAL.1 | TAUGHT | b9-b12 | LH-StAR-desmolase -> pregnenolone (rate-limiting) -> androstenedione in theca; FSH-induced aromatase in granulosa -> estrone/estradiol; estradiol (ovary), estrone (adipose), estriol (placenta). |
| PHYS-MENSTRUAL.2 | TAUGHT | b1-b7, b28 | Oogonia -> primary oocyte (prophase I, 2N 4C) -> secondary oocyte (metaphase II) -> ovum with polar bodies; follicle stages, atresia, FSH-rescued cohort and dominant follicle; ploidy table; maternal age and nondisjunction. |
| PHYS-MENSTRUAL.3 | TAUGHT | b14-b19 | GnRH pulsatility and frequency, gonadotrophs, FSH/LH roles, estradiol negative then positive feedback, progesterone and corpus luteum, inhibin B; hormone table. |
| PHYS-MENSTRUAL.4 | TAUGHT | b16, b18-b19 | Graph-reading rules for each hormone (LH spike near day 14, FSH early and small mid-cycle rise, estradiol two humps, progesterone peak day 21, GnRH by pulse frequency); day-21 trap in long cycles. |
| PHYS-MENSTRUAL.5 | TAUGHT | b17, b20, b22-b24, b27 | Ovarian (follicular growth, ovulation, luteinization, luteolysis) and uterine (proliferative, secretory, menses via progesterone withdrawal and spiral artery constriction) changes; corpus luteum roles and 14-day lifespan; fixed luteal phase. |
| BICEP-WALSH.20 | TAUGHT | b11-b12 | Adipose aromatase converts androstenedione and testosterone to estrone/estradiol; postmenopausal estrone and obesity; gynecomastia in obese men. |
| BP-rp8-01 | TAUGHT | b1, b5 | Primordial -> primary -> secondary -> Graafian; corpus luteum -> albicans; prophase I arrest. |
| BP-rp8-02 | TAUGHT | b4-b7, b28 | Prophase I and metaphase II arrests, polar bodies, trap on secondary oocyte, maternal-age nondisjunction. |
| BP-rp8-03 | TAUGHT | b9-b10 | Two-cell, two-gonadotropin model with enzymes. |
| BP-rp8-04 | TAUGHT | b11 | Estradiol, estrone, estriol sources and potency. |
| BP-rp8-05 | TAUGHT | b14-b15, b17, b20 | Variable follicular phase, positive-feedback LH surge, ovulation about 36 h later, fixed 14-day luteal phase, progesterone withdrawal. |
| BP-rp8-06 | TAUGHT | b16, b25, b27 | Progesterone: secretory endometrium, thick scant mucus, higher basal temperature; estradiol: proliferative, thin stretchy (spinnbarkeit) mucus. |
| BP-rp8-07 | TAUGHT | b22-b23, b27, b29 | Proliferative vs secretory histology with subnuclear/supranuclear vacuoles, coiling glands, spiral arteries, edema, predecidua. |
| BP-rp8-08 | TAUGHT | b2, b11, b14 | Inhibin B suppresses FSH; AMH from small follicles tracks ovarian reserve (antral follicle count). |
| BP-rp8-09 | TAUGHT | b25-b26 | Ciliated and peg cells, fimbriae to ampulla, cilia beat toward uterus, Kartagener infertility and ectopic. |
| BP-rp8-10 | TAUGHT | b20, b26 | Mittelschmerz; follicular cyst from failed rupture. |
| BP-rp8-11 | TAUGHT | b25-b26 | Endocervix mucinous columnar, ectocervix nonkeratinized squamous, transformation zone. |
| BP-rp8-12 | TAUGHT | b4, b6 | 2N/4C, 1N/2C, 1N/1C with male counterparts. |
| BP-rp8-13 | TAUGHT | b22-b23 | Functionalis (spiral arteries, shed) vs basalis (straight arteries, regrows); Asherman syndrome. |
| BP-rp8-14 | TAUGHT | b16-b19 | Estradiol peak before surge and second luteal rise, progesterone peak about day 21 (7 days post-ovulation, trap), falling steroids/inhibin let FSH rise. |

rp8: 22 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp9

| id | verdict | where | evidence |
|---|---|---|---|
| HP-UTERUS-OVARY.3 | TAUGHT | b26, b28-b30, b32-b33 | Follicular cyst (unruptured follicle over 3 cm), endometriosis/endometrioma/adhesions and infertility, tubal infertility after PID with HSG hydrosalpinx, AUB (PALM-COEIN, ovulatory dysfunction). Menopause consequences are only introduced in b26 (perimenopause logic); rp11, also listed, teaches the rest. |
| PATHPHARM-MENSES-CONTRA.1 | TAUGHT | b1-b12, b21-b30 | Amenorrhea (compartments, hCG/TSH/prolactin/FSH, progestin challenge), AUB (terminology, PALM-COEIN, transvaginal US, saline sonography, hysteroscopy, biopsy), dysmenorrhea (primary vs secondary), endometriosis (laparoscopy, transvaginal US, 17-OHP and androgen testing in PCOS work-up). |
| BICEP-WILLIAMS.1 | TAUGHT | b22 | Heavy menstrual bleeding vs menorrhagia, intermenstrual vs metrorrhagia, menometrorrhagia, oligomenorrhea (>35 d), polymenorrhea (<21 d), irregular bleeding. |
| BICEP-WILLIAMS.2 | TAUGHT | b22 | HMB (>80 mL or >7 d), irregular (variation of about 7-9 days between shortest and longest cycle), postmenopausal bleeding (12 months or more after the final period, cancer until proven otherwise). |
| BICEP-WILLIAMS.3 | PARTIAL | b23, b25 | PALM-COEIN is fully taught with a clue per letter. The "broad differential" before it is only one sentence: GI bleeding and hematuria can mimic vaginal bleeding, and pregnancy must be excluded. MISSING: the other non-uterine sources (cervical/vaginal lesions, cervicitis, trauma or foreign body, pregnancy complications such as miscarriage/ectopic, urinary and GI causes by name). Two sentences or a short list fix it. |
| BICEP-WEIAND.1 | TAUGHT | b32 | 12 months (6 months at 35 or older); primary vs secondary infertility. |
| BICEP-WEIAND.2 | TAUGHT | b32, b34-b35 | Female: ovulation (regular cycles, mid-luteal progesterone), reserve (AMH, antral follicle count), tubes (HSG), uterus. Male side is only "semen analysis" plus varicocele in rp9; the full male differential and work-up is in rp22 (b8, b11), which is also listed for this objective. |
| BICEP-WEIAND.3 | TAUGHT | b32 | Women: age, PID, endometriosis, PCOS, obesity, smoking; men: varicocele, undescended testes, heat, gonadotoxic drugs. |
| BICEP-WEIAND.5 | TAUGHT | b33-b34 | Contrast through the cervix outlines cavity and tubes; spill = patency; hydrosalpinx dilates with no spill; filling defect = polyp, submucosal fibroid, Asherman adhesions, clot (septate vs bicornuate on HSG in rp5 b21). |
| BICEP-WEIAND.7 | TAUGHT | b34-b37 | Letrozole/clomiphene, IUI for mild male factor/unexplained with open tubes, IVF for tubal disease (gonadotropins, hCG trigger, retrieval, transfer), ICSI, surgical sperm retrieval, OHSS risk. |
| BICEP-WALSH.7 | TAUGHT | b1 | Delayed puberty asks only whether thelarche has begun (13 y); primary amenorrhea with breasts means puberty began and menses are blocked (15 y). |
| BICEP-WALSH.9 | TAUGHT | b1-b9 | Amenorrhea defined; breasts/uterus sorting; four compartments (outflow, ovary, pituitary, hypothalamus) with hyper- vs hypogonadotropic patterns; cause table. |
| BICEP-WALSH.10 | TAUGHT | b1 | Primary (15 / 13 without breasts) vs secondary (3 months after regular, 6 after irregular). |
| BICEP-WALSH.11 | TAUGHT | b2, b11 | Kallmann (GnRH neuron migration, anosmia); functional hypothalamic amenorrhea (low energy -> low leptin, high cortisol -> slow GnRH -> low FSH/LH/estradiol). |
| BICEP-WALSH.12 | PARTIAL | b6, b9, b12, b19 | Prolactinoma (prolactin suppresses GnRH, galactorrhea), Sheehan (infarction after postpartum hemorrhage, no lactation) and Cushing (cortisol suppresses GnRH) are explained. Empty sella is only named in a list in b6, with no pathophysiology or symptoms (CSF fills a flattened sella; usually normal function, may cause hypopituitarism or mild hyperprolactinemia; MRI diagnosis); Sheehan also lacks why the enlarged pregnant pituitary is vulnerable. The pituitary topic en3 is not yet accepted, so rp9 must carry it. |
| BICEP-WALSH.13 | TAUGHT | b2-b3, b12 | Imperforate hymen/transverse septum with hematocolpos, cyclic pain and bulging membrane; MRKH vaginal agenesis; Asherman after curettage with normal hormones, hysteroscopy. |
| BICEP-WALSH.14 | TAUGHT | b14-b20 | PCOS, obesity (aromatization, insulin), thyroid (TRH-prolactin), nonclassic CAH (17-OHP), adrenal tumor (DHEA-S), Cushing; table with exam clue and key lab. |
| BICEP-WALSH.15 | TAUGHT | b7 | POI before age 40, FSH above 25 twice, low estradiol; alkylating chemotherapy, radiation, fragile X premutation, autoimmune oophoritis, Turner, idiopathic; karyotype/FMR1; hormone therapy to about 51. |
| BICEP-WALSH.16 | TAUGHT | b1, b9 | Pregnancy test first in every case; hCG keeps the corpus luteum. |
| BICEP-WALSH.17 | TAUGHT | b11 | Triad of low energy availability, menstrual dysfunction, low bone density; leptin/cortisol pathway; RED-S; treat by restoring energy, pill does not fix bone. |
| BICEP-WALSH.18 | TAUGHT | b2-b8, b10 | Primary: breasts, uterus, FSH, karyotype; secondary: hCG then TSH, prolactin, FSH, ultrasound, progestin challenge, with the reasoning for each. |
| BP-rp9-01 | TAUGHT | b1 | Pregnancy first; primary vs secondary definitions. |
| BP-rp9-02 | TAUGHT | b2-b3 | Breast/uterus sort with Turner, MRKH, AIS, imperforate hymen, Kallmann, constitutional delay. |
| BP-rp9-03 | TAUGHT | b6-b9, b11-b12 | PCOS, functional hypothalamic, hyperprolactinemia, thyroid, POI, Asherman, Sheehan. |
| BP-rp9-04 | TAUGHT | b11 | Female athlete triad and RED-S. |
| BP-rp9-05 | TAUGHT | b14-b16, b19 | Rotterdam, insulin resistance, acanthosis, unopposed estrogen, endometrial, fertility and diabetes risks; fast GnRH favors LH. |
| BP-rp9-06 | TAUGHT | b16, b35-b37 | Weight loss, COC, progestin, metformin, spironolactone, letrozole first-line; clomiphene. |
| BP-rp9-07 | TAUGHT | b23-b25 | PALM-COEIN with a clue per letter. |
| BP-rp9-08 | TAUGHT | b28 | Primary dysmenorrhea (PGF2-alpha, NSAIDs) vs secondary causes. |
| BP-rp9-09 | TAUGHT | b19-b20 | Rapid onset/virilization = tumor; very high testosterone (ovarian) vs very high DHEA-S (adrenal); 17-OHP for nonclassic CAH. |
| BP-rp9-10 | TAUGHT | b35-b37 | Clomiphene mechanism and side effects, letrozole, gonadotropins, hCG trigger, OHSS. |
| BP-rp9-11 | TAUGHT | b32-b33 | PID tubal scarring, endometriosis, HSG. |
| BP-rp9-12 | TAUGHT | b10, b38 | Withdrawal bleed proves estrogen and open outflow. |
| BP-rp9-13 | TAUGHT | b14 | LH-theca, insulin on theca and SHBG, free testosterone. |
| BP-rp9-14 | TAUGHT | b36-b37 | Aromatase inhibition lowers estrogen feedback and raises FSH. |

rp9: 33 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR

## rp10

| id | verdict | where | evidence |
|---|---|---|---|
| PATHPHARM-MENSES-CONTRA.2 | TAUGHT | b1-b18, b26-b28 | Estrogen vs progestin mechanisms, three method families with typical vs perfect-use efficacy, estrogen contraindications and the VTE mechanism, enzyme-inducer trap, noncontraceptive uses (dysmenorrhea, heavy bleeding, endometriosis, acne), breakthrough bleeding and other adverse effects by hormone, progestin-only methods and IUDs, patient-situation choice table. |
| PATHPHARM-MENSES-CONTRA.3 | TAUGHT | b20-b24, b29 | Levonorgestrel (delays LH surge), ulipristal (SPRM), copper IUD, adverse effects; mifepristone (progesterone receptor antagonist, also glucocorticoid at higher dose) then misoprostol (PGE1 analog), regimen as of 2025, cramping/bleeding/GI effects, contraindications and follow-up. |
| BICEP-BROWN.6 | PARTIAL | b5-b9, b12-b18, b28 | Hormonal methods are fully taught: pill, patch (norelgestromin), ring (etonogestrel), DMPA, implant, LNG IUD, copper IUD with hormones, mechanism, schedule/use, efficacy, contraindications, benefits and risks. Thin for the non-hormonal rows: condom and diaphragm only get failure rates and (condom) STI protection; sterilization only says tubes occluded/removed and vasectomy with semen analysis at about 3 months. MISSING: barrier contraindications and risks (latex allergy; diaphragm with spermicide: UTI risk, toxic shock history; nonoxynol-9 irritation), how to use a condom, and sterilization risks (permanence and regret, surgical risk, rare failure with ectopic pregnancy risk). A short table row each fixes it. |
| BICEP-BROWN.7 | TAUGHT | b20-b21, b29 | LNG (72 h, before the LH surge, BMI), ulipristal (5 days, after LH rise), copper IUD (5 days, most effective); EC acts before implantation so it is not an abortifacient, contrasted with mifepristone/misoprostol after implantation. |
| BP-rp10-01 | TAUGHT | b1-b3 | Negative feedback, estrogen blunts FSH, progestin blocks LH surge, thickens mucus, thins endometrium. |
| BP-rp10-02 | TAUGHT | b8, b10 | Lighter regular periods, less acne/hirsutism, lower ovarian and endometrial cancer risk with mechanism. |
| BP-rp10-03 | TAUGHT | b8, b28 | Full contraindication list with the clotting-factor mechanism. |
| BP-rp10-04 | TAUGHT | b9, b28 | Rifampin, carbamazepine, phenytoin, topiramate, St John's wort; amoxicillin does not interfere; DMPA or IUD instead. |
| BP-rp10-05 | TAUGHT | b16, b18 | Minipill, DMPA (bone loss, delayed fertility), etonogestrel implant (most effective reversible), LNG IUD. |
| BP-rp10-06 | TAUGHT | b17-b18, b20 | Copper IUD mechanism, heavier bleeding, most effective EC. |
| BP-rp10-07 | TAUGHT | b20 | Levonorgestrel, ulipristal, copper IUD with BMI effect. |
| BP-rp10-08 | TAUGHT | b22-b24 | Mifepristone then misoprostol. |
| BP-rp10-09 | TAUGHT | b5-b7 | Typical-use tiers; condom, diaphragm, sterilization. |
| BP-rp10-10 | TAUGHT | b26 | Adolescent consent and confidentiality with limits; five Ps. |
| BP-rp10-11 | TAUGHT | b20-b21, b29 | Windows and the LH-surge logic, none disrupts implanted pregnancy. |
| BP-rp10-12 | TAUGHT | b16, b18 | LNG IUD lightens/amenorrhea and treats HMB; implant spotting; DMPA amenorrhea. |
| BP-rp10-13 | TAUGHT | b17 | Early PID risk after insertion; treat PID/cervicitis first. |

rp10: 16 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR

## rp11

| id | verdict | where | evidence |
|---|---|---|---|
| MENOPAUSE.1 | TAUGHT | b4, b6 | Prepubertal (1 million follicles at birth, 250-400k at puberty), reproductive stage to the final menstrual period, menopausal transition up to a decade before, postmenopause after 12 months; STRAW with FMP = 0; median age 51; retrospective diagnosis. Matches the course's three-stage slide. |
| MENOPAUSE.2 | TAUGHT | b14-b16 | Vasomotor: estrogen loss -> overactive KNDy/neurokinin B at NK3 -> narrowed thermoneutral zone; GSM: thin glycogen-poor epithelium, pH 4.5 to 7, bladder/urethra receptors; sleep (night sweats, nocturia), mood (serotonin/norepinephrine), cognition (brain fog), libido and dyspareunia. |
| MENOPAUSE.3 | TAUGHT | b15-b18 | Bone (RANKL/OPG, trabecular first, up to 20 % loss), cardiovascular (HDL down, LDL up, visceral fat, insulin resistance), cognition (temporary fog, no dementia prevention), GU (atrophy, UTIs, vaginal pH). |
| MENOPAUSE.4 | TAUGHT | b18-b19, b33 | Estrogen lowers osteoblast RANKL and raises osteoprotegerin; loss lets osteoclasts multiply and live longer, trabecular bone first; T-score -2.5; calcium/vitamin D, bisphosphonates (osteoclast apoptosis), denosumab (RANKL). |
| MENOPAUSE.5 | TAUGHT | b5-b6 | Early transition: shorter follicular phase, cycle length varies by 7 days or more, polymenorrhea; late transition: anovulatory skipped cycles, gaps of 60 days or more; unopposed estrogen heavy bleeding; biopsy from age 45. |
| MENOPAUSE.6 | TAUGHT | b24, b26-b29, b32 | Uterus decides progestogen; estrogen-only after hysterectomy, combined with a uterus; contraindications; adverse effects of each; WHI breast cancer difference; cyclic vs continuous; vaginal estrogen needs none. |
| MENOPAUSE.7 | PARTIAL | b36 | Gabapentin (alpha-2-delta, sedation), fezolinetant (NK3 antagonist, hepatotoxicity boxed warning), clonidine (central alpha-2, hypotension/rebound) and the paroxetine-CYP2D6-tamoxifen risk are explained. MISSING: the mechanism and adverse effects of the SSRIs/SNRIs themselves (serotonin/norepinephrine reuptake inhibition acting on the thermoregulatory center; nausea, sexual dysfunction, venlafaxine blood-pressure rise, discontinuation symptoms); they are only named. One or two sentences. |
| MENOPAUSE.8 | TAUGHT | b26, b29-b30 | Route and drug chosen by comorbidity table (hypertriglyceridemia/gallbladder/migraine -> transdermal; VTE/stroke/CAD -> avoid; breast cancer; tamoxifen; cirrhosis); start low and titrate; within 10 years / before 60; 10-year CV risk tiers. |
| MENOPAUSE.9 | TAUGHT | b8-b10 | Clinical diagnosis, labs unnecessary over 45, when to test, thresholds, fluctuation of FSH/estradiol in perimenopause, drug interference; WHY FSH not LH. |
| MENOPAUSE.10 | TAUGHT | b19, b39 | DXA from 65 (earlier with risk factors), calcium/vitamin D, weight-bearing exercise, BP and lipids, 150 min exercise, mammography/cervical/colorectal screening, zoster and "other immunizations" (not itemized), continued contraception until confirmed. |
| MENOPAUSE.11 | TAUGHT | b21-b22 | Cancer until proven otherwise (90 % present this way), atrophy most common cause, speculum exam, transvaginal ultrasound stripe (under 4 mm), office biopsy or hysteroscopy; single-episode rule. See ERROR row for one ACOG wording. |
| MENOPAUSE.12 | TAUGHT | b11-b12 | Mimic table: pregnancy (hCG), thyroid (TSH), hyperprolactinemia, Sheehan/pituitary adenoma (FSH low), carcinoid (5-HIAA), eating disorder/overtraining/depression. |
| MENOPAUSE.13 | TAUGHT | b32-b34 | Observational pre-WHI belief, randomized design, both arms' results, timing hypothesis, collapse in prescribing, a generation of residents untrained, regimen limits, 2025 FDA label change. |
| MENOPAUSE.14 | TAUGHT | b21, b41 | Black women: more frequent/longer VMS, undertreated through access, socioeconomic barriers and bias; endometrial cancer disparity. Brief but names each driver. |
| MENOPAUSE.15 | TAUGHT | b42 | Influencers vs evidence, "bioidentical" as a marketing label, compounded hormones with no oversight and salivary dosing, society positions. |
| BICEP-WILLIAMS.4 | TAUGHT | b4, b8, b11 | Menopause = 12 months without menses (retrospective); POI before 40 with FSH above 25 twice, karyotype, FMR1, treatment until about 51. |
| BICEP-WILLIAMS.5 | TAUGHT | b1-b2, b8, b15, b21 | Estradiol/inhibin/AMH fall, FSH/LH/GnRH rise; estrone from adipose aromatization of adrenal and stromal androstenedione is the main estrogen; vaginal parabasal cells and endometrial atrophy; symptoms and clinical findings. |
| BICEP-WILLIAMS.6 | TAUGHT | b24, b26-b28, b30, b32, b42 | Observational history, WHI with conjugated equine estrogen plus medroxyprogesterone, estradiol and micronized progesterone, routes, indications, contraindications, adverse effects. |
| BICEP-WILLIAMS.7 | TAUGHT | b21-b22 | Atrophy, polyps, hyperplasia, cancer, exogenous estrogen/tamoxifen/anticoagulants; speculum exam, TVUS, biopsy, hysteroscopy; risk factors. |
| BP-rp11-01 | TAUGHT | b1-b2 | Depletion -> low estradiol/inhibin -> high FSH, LH, GnRH; estrone main estrogen. |
| BP-rp11-02 | TAUGHT | b11 | POI under 40, high FSH, Turner, fragile X premutation, autoimmune, chemo/radiation. |
| BP-rp11-03 | TAUGHT | b2, b14-b16 | KNDy/NK3, GSM, sleep and mood. |
| BP-rp11-04 | TAUGHT | b18 | Bone loss and rising LDL/CV risk. |
| BP-rp11-05 | TAUGHT | b21-b22 | PMB = cancer until proven otherwise; TVUS thickness and biopsy. |
| BP-rp11-06 | TAUGHT | b24, b27-b28 | Unopposed estrogen, progestogen with a uterus, lowest effective dose. |
| BP-rp11-07 | TAUGHT | b26, b29 | Breast/endometrial cancer, VTE, stroke, CAD, liver disease, unexplained bleeding, pregnancy. |
| BP-rp11-08 | TAUGHT | b32-b34 | WHI findings and timing hypothesis. |
| BP-rp11-09 | TAUGHT | b36, b24 | Paroxetine, venlafaxine, escitalopram, gabapentin, clonidine, fezolinetant, ospemifene, vaginal estrogen. |
| BP-rp11-10 | TAUGHT | b12 | Pregnancy, thyroid, hyperprolactinemia (plus Sheehan, carcinoid, eating disorder). |
| BP-rp11-11 | TAUGHT | b4-b6 | STRAW and perimenopausal bleeding changes. |
| BP-rp11-12 | TAUGHT | b39 | Bone density, CV risk, cancer screening, immunizations. |
| BP-rp11-13 | TAUGHT | b4, b8-b10 | 12 months, FSH unnecessary over 45, fluctuation. |
| BP-rp11-14 | TAUGHT | b21-b22 | Atrophy most common; under 4 mm stripe makes cancer unlikely. |
| BP-rp11-15 | TAUGHT | b25-b26, b43 | Oral first pass (clotting factors, triglycerides, gallstones) vs transdermal lower VTE risk. |
| BP-rp11-16 | TAUGHT | b24-b25 | Vaginal estrogen for GSM only without progestogen; cyclic vs continuous combined; POI replacement until menopause age (b11). |
| BP-rp11-17 | TAUGHT | b29, b36-b37 | Paroxetine/fluoxetine inhibit CYP2D6 and impair tamoxifen activation; alternatives. |
| rp11#b22 | ERROR | b22 | "for most women ACOG pairs it [transvaginal ultrasound] with endometrial biopsy at the first visit" is not what ACOG states: Committee Opinion 734 accepts either transvaginal ultrasound or endometrial biopsy as the first step, with sampling when the stripe is over 4 mm, poorly seen, or bleeding persists or risk factors are present. Reword to match (the next bullet of the same step already says ultrasound alone may suffice after one episode). |

rp11: 35 TAUGHT, 1 PARTIAL, 0 MISSING, 1 ERROR

## rp12

| id | verdict | where | evidence |
|---|---|---|---|
| HP-CERVIX-VULVA.3 | TAUGHT | b1-b2, b7 | Nonkeratinized stratified squamous epithelium, glycogen -> lactobacilli -> lactic acid (pH 3.8-4.5); elastic lamina propria, venous plexus, smooth muscle, rugae for distension; plasma transudate lubrication; atrophic vaginitis. |
| HP-CERVIX-VULVA.4 | TAUGHT | b5-b7 | Bartholin glands (mucus-secreting acini, transitional-epithelium duct, 4 and 8 o'clock, lubrication, cyst/abscess, Word catheter/marsupialization) and paraurethral/Skene glands (prostate counterpart, keep meatus moist, dysuria when infected); Gartner cyst contrast. |
| HP-CERVIX-VULVA.5 | TAUGHT | b8-b19, b27 | BV (anaerobes), trichomonas, candida, cervicitis (chlamydia, gonorrhea, trichomonas, HSV), Bartholin abscess, condyloma; pathogenesis via lost lactobacilli; complications PID, infertility, ectopic, preterm birth, HIV acquisition. Upper-tract PID is rp16. |
| HP-CERVIX-VULVA.6 | TAUGHT | b21-b22, b27-b33 | Lichen sclerosus (dermal sclerosis, figure-of-eight, small SCC risk), lichen simplex chronicus/squamous hyperplasia (acanthosis, hyperkeratosis, no risk), lichen planus, condyloma, HSIL (p16 block) vs differentiated VIN (p53), warty/basaloid vs keratinizing carcinoma, inguinal nodes, extramammary Paget (Paget cells, PAS, CK7, S100-negative, usually no carcinoma). |
| HP-CERVIX-VULVA.7 | TAUGHT | b35-b37 | Girls under 5, grape-like polypoid mass, small round blue cells in a cambium layer, rhabdomyoblasts, desmin/myogenin/MyoD1, chemotherapy with limited surgery. |
| PATHPHARM-CERVIX-HPV.5 | TAUGHT | b8-b19 | Pathogens, development, symptoms, pH/whiff/wet mount/KOH/NAAT work-up (Amsel criteria), treatment (metronidazole/clindamycin, fluconazole, partner treatment, doxycycline +/- ceftriaxone, retest), CDC 2021 alcohol note. Mycoplasma genitalium is not named. |
| PATHPHARM-CERVIX-HPV.6 | TAUGHT | b5, b21-b25 | Bartholin cyst (Word catheter, marsupialization), lichen sclerosus (clobetasol), lichen simplex, lichen planus, contact dermatitis, vulvodynia, atrophic vaginitis with diagnosis and treatment table. |
| BP-rp12-01 | TAUGHT | b1 | Nonkeratinized stratified squamous, glycogen, no glands, lactobacilli, pH under 4.5. |
| BP-rp12-02 | TAUGHT | b9-b10, b14 | Gardnerella, thin gray fishy discharge, whiff, pH, clue cells, metronidazole/clindamycin, disulfiram-like reaction discussed with the 2021 CDC correction. |
| BP-rp12-03 | TAUGHT | b11, b14 | Motile flagellated trichomonads, frothy yellow-green, strawberry cervix, pH, metronidazole for patient and partners. |
| BP-rp12-04 | TAUGHT | b12, b14-b15 | Thick white discharge, normal pH, pseudohyphae, risk factors, fluconazole, no partner treatment. |
| BP-rp12-05 | TAUGHT | b5 | Blocked duct, posterolateral vestibular mass, drainage. |
| BP-rp12-06 | TAUGHT | b21-b22 | Lichen sclerosus (parchment, older women, small SCC risk) vs lichen simplex chronicus (leathery, no risk). |
| BP-rp12-07 | TAUGHT | b27-b29 | HPV-related HSIL/warty-basaloid vs HPV-independent differentiated VIN/keratinizing carcinoma. |
| BP-rp12-08 | TAUGHT | b32 | Intraepithelial adenocarcinoma, PAS/keratin positive, usually no underlying carcinoma. |
| BP-rp12-09 | TAUGHT | b27 | HPV 6/11 condyloma with koilocytes. |
| BP-rp12-10 | TAUGHT | b35 | DES exposure, vaginal adenosis, clear cell adenocarcinoma. |
| BP-rp12-11 | TAUGHT | b35-b37 | Sarcoma botryoides clinical and desmin/myogenin features. |
| BP-rp12-12 | TAUGHT | b6, b35 | Vaginal SCC mostly spread from cervix; Gartner cyst on lateral wall. |
| BP-rp12-13 | TAUGHT | b27-b31 | p16 vs p53 patterns with E7/Rb mechanism, age groups, inguinal spread. |
| BP-rp12-14 | TAUGHT | b21-b22 | Lichen sclerosus (figure-of-eight, spares vagina, steroids) vs lichen planus (T-cell, erosive, vaginal and oral, scarring). |
| BP-rp12-15 | TAUGHT | b36 | Small round blue cells in cambium layer. |

rp12: 22 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp13

| id | verdict | where | evidence |
|---|---|---|---|
| HP-CERVIX-VULVA.1 | TAUGHT | b1-b3 | Ectocervix nonkeratinized squamous, endocervix mucus-secreting columnar with plicae palmatae (crypts), estrogen-timed mucus (thin alkaline at ovulation, thick under progesterone), eversion and metaplasia, transformation zone, nabothian cyst. |
| HP-CERVIX-VULVA.2 | TAUGHT | b6-b7, b3-b4 | Ectropion (estrogen, bleeding), stenosis -> hematometra, cervical insufficiency after excision, cancer compressing ureters/hydronephrosis, hidden zone after menopause. |
| HP-CERVIX-VULVA.8 | TAUGHT | b9-b12, b19-b22, b24, b32 | Low-risk 6/11 vs high-risk 16/18 (E2 loss on integration, E6-p53, E7-Rb-p16), cytology/HPV/cotest screening schedules, vaccine and primary vs secondary prevention. |
| HP-CERVIX-VULVA.9 | PARTIAL | b14-b17 | Taught: CIN 1-3 by epithelial thirds with intact basement membrane, LSIL/HSIL mapping, koilocytes (enlarged hyperchromatic raisinoid nuclei, halo), Bethesda categories, regression vs progression, invasion defined by basement-membrane breach. MISSING: the cytologic and histologic morphology of HSIL cells (small cells, high nuclear-to-cytoplasmic ratio, irregular contours, hyperchromasia) and of invasive carcinoma (irregular nests invading stroma with keratin pearls, intercellular bridges and desmoplasia for squamous cell carcinoma; adenocarcinoma only named). The course slides test both. Two sentences fix it. |
| PATHPHARM-CERVIX-HPV.1 | TAUGHT | b19-b22 | USPSTF 2018 and ACS 2020 schedules by age (table), stopping rules (over 65, total hysterectomy), HIV exception, how to sample (speculum, spatula plus endocervical brush, liquid medium), family history does not change schedule. |
| PATHPHARM-CERVIX-HPV.2 | TAUGHT | b9-b12, b17 | Basal cells via microabrasions, clearance vs persistence, integration, E2 loss, E6/E7, CIN 2/3, basement-membrane breach over years. |
| PATHPHARM-CERVIX-HPV.3 | TAUGHT | b33 | Low CD4 -> poor clearance, persistent HPV/CIN/cancer; screening from within a year of debut, annual cytology until three normal then every 3 years, never stops at 65; anal transformation zone, anal cytology, high-resolution anoscopy. |
| PATHPHARM-CERVIX-HPV.4 | TAUGHT | b24-b27, b32 | Reflex HPV for ASC-US, risk-based ASCCP management (4 % threshold), colposcopy/biopsy/ECC, CIN 1 surveillance, LEEP/cold-knife conization/ablation with indications, cervical insufficiency risk, 9-valent vaccine. |
| SIM-COLPO.1 | TAUGHT | b19, b22, b24-b26 | Primary prevention (vaccine) vs secondary (screening of precancer) vs diagnosis (colposcopy and biopsy) vs treatment (excision); screening never diagnoses. Other gynecologic cancers are rp14/rp15. |
| SIM-COLPO.2 | TAUGHT | b4, b24-b26 (rp13); b17-b18 (rp14) | Colposcopy with acetic acid and directed biopsy/ECC, LEEP and cold-knife (rp13); endometrial biopsy, hysteroscopy and D&C with what each samples (rp14, also listed). Technique is described at the level of purpose and setting. |
| SIM-COLPO.3 | TAUGHT | b3-b4, b37 | Unsatisfactory specimen (repeat in 2-4 months), no endocervical component = possible false negative, receding junction after menopause, brush, inadequate colposcopy then ECC. |
| BICEP-BROWN.1 | TAUGHT | b19-b21, b35 | Cervical (from 21), chlamydia/gonorrhea (24 and younger), HIV (15-65), hepatitis C (18-79), mammography (40-74 every 2 years), colorectal (45-75); DXA at 65 is in rp11 b39. Lipids, diabetes, depression and intimate-partner-violence screening are not covered. |
| BICEP-BROWN.3 | TAUGHT | b19-b22, b24 | Current USPSTF (2018) vs ACS (2020) with primary HPV from 25, ASCCP 2019 risk-based management and app. |
| BICEP-BROWN.4 | TAUGHT | b32 | 9-valent (6, 11, 16, 18, 31, 33, 45, 52, 58), L1 VLP, age 11-12 (can start at 9), 2 vs 3 doses, catch-up to 26, shared decision 27-45. |
| BP-rp13-01 | TAUGHT | b1-b4 | Transformation zone, SCJ, metaplasia, inadequate Pap if missed. |
| BP-rp13-02 | TAUGHT | b9-b12 | E6 degrades p53, E7 inactivates Rb. |
| BP-rp13-03 | TAUGHT | b14-b16 | CIN 1-3, LSIL/HSIL, koilocytes, regression vs progression. |
| BP-rp13-04 | TAUGHT | b30 | SCC about three quarters, adenocarcinoma second (HPV 18), risk factors, ureteral obstruction/hydronephrosis. |
| BP-rp13-05 | TAUGHT | b19-b22, b33 | Age-based schedule, stopping rules, HIV. |
| BP-rp13-06 | TAUGHT | b24-b27 | Colposcopy with biopsy, LEEP/cone, surveillance of low grade. |
| BP-rp13-07 | TAUGHT | b32-b33 | 9-valent L1 VLP vaccine; anal screening in HIV. |
| BP-rp13-08 | TAUGHT | b34 | Chlamydia/gonorrhea, mucopurulent discharge, friable cervix, NAAT. |
| BP-rp13-09 | TAUGHT | b22, b24 | Screening vs diagnosis vs treatment. |
| BP-rp13-10 | TAUGHT | b3 | Nabothian cyst. |
| BP-rp13-11 | TAUGHT | b10, b12, b14-b15 | p16 as E7/Rb surrogate, resolves CIN 2 as HSIL. |
| BP-rp13-12 | TAUGHT | b9, b14-b17 | Persistence, basal-layer origin, thirds grading, basement membrane. |
| BP-rp13-13 | TAUGHT | b30 | Postcoital/irregular bleeding, watery blood-tinged discharge, silent early disease. |
| BP-rp13-14 | TAUGHT | b7, b27 | Excision-related cervical insufficiency, preterm birth, cone vs LEEP vs punch. |

rp13: 27 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR

## rp14

| id | verdict | where | evidence |
|---|---|---|---|
| HP-UTERUS-OVARY.5 | PARTIAL | b1-b6, b8, b26-b32 | Unopposed estrogen/hyperplasia (with and without atypia), adenomyosis (globular uterus, glands within muscle), endometriosis (sites, retrograde menstruation, PGE2/aromatase loop, treatment) and the PCOS mechanism (insulin, LH, SHBG, anovulation) are all taught; rp9 b14-b16 adds the clinical side. MISSING in both rp9 and rp14: the clinicopathologic features of the PCOS ovary itself (enlarged ovaries, thickened smooth capsule, multiple subcortical follicular cysts, stromal/theca hyperplasia, no corpora lutea). One sentence fixes it. |
| HP-UTERUS-OVARY.7 | TAUGHT | b24-b27 | Leiomyoma (circumscribed, whorled, estrogen-driven, red degeneration, never becomes sarcoma, locations) vs leiomyosarcoma (de novo, solitary, necrotic, atypia + necrosis + mitoses, hematogenous spread to lung); table with adenomyosis. |
| HP-UTERUS-OVARY.8 | TAUGHT | b11-b14, b20, b22 | Type I endometrioid (80 %, unopposed estrogen, obese, PTEN/mismatch repair, indolent) vs type II serous/clear cell (older, thin, atrophic endometrium, TP53, papillae and psammoma bodies, early peritoneal spread); myometrial-invasion staging; Lynch tie to type I. Clear cell morphology is only named. |
| HP-UTERUS-OVARY.9 | TAUGHT | b21 | Biphasic carcinoma plus sarcoma, homologous vs heterologous elements, Müllerian origin, monoclonal metaplastic (carcinoma) behavior, TP53, postmenopausal, tamoxifen risk. |
| MDR-REVIEW.1 | TAUGHT | b24-b28, b36 | Integrated uterine cases: fibroid location (submucosal, intramural, subserosal) and complications, adenomyosis vs endometriosis, tamoxifen vignette, estrogen-load logic; leuprolide for endometriosis (b31). Other tracts are rp15/rp20/rp21. |
| MDR-REVIEW.2 | TAUGHT | b11-b22, b26 | Uterine neoplasia: presentation (postmenopausal bleeding), biopsy/hysteroscopy/D&C work-up, classification, morphology, molecular basis, prognosis, surgical staging, hysterectomy with BSO; other tracts in rp15/rp20/rp21. |
| BICEP-WILLIAMS.10 | TAUGHT | b11-b13 | Two categories with patient features (obese 55-65 vs thin 65-70), morphology and behavior (indolent vs aggressive) in a table; carcinosarcoma grouped with type II. Clear cell histology is only named. |
| BICEP-WILLIAMS.12 | TAUGHT | b20-b21, b6 (rp14); rp13 b9-b12 | PTEN, TP53, MLH1/MSH2 mismatch repair, Lynch and Cowden here; E6/E7 in rp13 (listed); BRCA belongs to rp15 (listed) and is not in rp14. |
| BP-rp14-01 | TAUGHT | b30-b31 | Endometriosis sites, retrograde menstruation, endometrioma, powder-burn, symptoms, normal-sized uterus. |
| BP-rp14-02 | TAUGHT | b31 | NSAIDs, COCs/progestins, GnRH agonist, elagolix, danazol, surgery. |
| BP-rp14-03 | TAUGHT | b26-b27, b32 | Glands within myometrium, boggy globular uterus, heavy painful periods. |
| BP-rp14-04 | TAUGHT | b24 | Most common tumor, estrogen-sensitive, whorled, circumscribed, Black women, symptoms, red degeneration, no sarcoma. |
| BP-rp14-05 | TAUGHT | b26 | De novo, postmenopausal, necrosis, atypia, mitoses. |
| BP-rp14-06 | TAUGHT | b3, b8-b9 | Unopposed estrogen sources; atypia predicts cancer. |
| BP-rp14-07 | TAUGHT | b11-b14 | Most common gynecologic cancer, PMB, type I vs II. |
| BP-rp14-08 | TAUGHT | b20, b22 | MLH1/MSH2, microsatellite instability, colon + endometrial + ovary. |
| BP-rp14-09 | TAUGHT | b21 | Malignant epithelium + mesenchyme, aggressive, postmenopausal. |
| BP-rp14-10 | TAUGHT | b34 | Acute (postpartum, retained products, polymicrobial) vs chronic (plasma cells; IUD, PID, TB). |
| BP-rp14-11 | TAUGHT | b34 | Polyp; Asherman syndrome. |
| BP-rp14-12 | TAUGHT | b17-b18 | Biopsy, hysteroscopy, D&C with what each samples and when. |
| BP-rp14-13 | TAUGHT | b3, b36 | Tamoxifen partial agonist at endometrium. |
| BP-rp14-14 | TAUGHT | b2-b3, b5 | Risk factors and protective factors. |
| BP-rp14-15 | TAUGHT | b31 | Danazol: androgen, gonadotropin suppression, adverse effects, hereditary angioedema. |

rp14: 22 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR

## rp15

| id | verdict | where | evidence |
|---|---|---|---|
| HP-UTERUS-OVARY.10 | TAUGHT | b19-b22 | Surface (coelomic) epithelium over the genital ridge with Müllerian-type differentiation (serous, endometrioid, mucinous; about 90 % of cancers, many high-grade serous from the tube), primordial germ cells from the yolk sac, sex cord-stromal cells from genital ridge mesenchyme, plus metastases; tumor-to-cell-of-origin figure. |
| HP-UTERUS-OVARY.11 | TAUGHT | b23-b24, b26-b27, b30-b32 | Epithelial: BRCA1/2, Lynch, TP53 early in type II, KRAS/BRAF/PTEN in type I, ovulation-number mechanism, tubal origin; sex cord-stromal: FOXL2, DICER1, Peutz-Jeghers; germ cell: gonadal dysgenesis with Y material (Swyer, Turner mosaics). Germ-cell molecular lesions (12p, KIT) are not named. |
| ADNEXAL.1 | TAUGHT | b1-b2, b5-b6 | Functional cysts (follicular, corpus luteum/hemorrhagic, theca lutein) regress on repeat scan in 1-3 cycles; persistent, growing or solid masses are neoplasms; simple cyst management. |
| ADNEXAL.2 | TAUGHT | b5-b6, b16, b23, b30-b32 | Simple, hemorrhagic (lace-like echoes), endometrioma (ground glass), dermoid (Rokitansky nodule, shadow), torsion (whirlpool, edema, Doppler caveat); presentation of torsion, high-grade serous (bloating, ascites) and others. |
| ADNEXAL.3 | TAUGHT | b7-b10 | Solid components, papillary projections, thick septations, multilocular vs unilocular, color score 1-4, ascites; O-RADS categories. |
| ADNEXAL.4 | TAUGHT | b7-b10 | Same content: O-RADS 2-5 table with risk percentages, unilocular, intermediate risk, solid component. |
| ADNEXAL.5 | TAUGHT | b12 | Age-based differential table (prepubertal germ cell tumors/torsion, reproductive functional/endometrioma/dermoid/ectopic/hydrosalpinx/TOA, postmenopausal epithelial carcinoma). |
| ADNEXAL.6 | TAUGHT | b13, b6 | Pregnancy test, ultrasound with Doppler, selective markers, expectant management vs laparoscopic cystectomy vs emergency torsion surgery, referral to gynecologic oncology before surgery for suspicious masses. |
| ADNEXAL.7 | TAUGHT | b9-b10, b13 | IOTA Simple Rules (benign vs malignant features, inconclusive), risk of malignancy index (US x menopause x CA-125, over 200), O-RADS; referral triggers. |
| ADNEXAL.8 | TAUGHT | b13-b14, b33, b37 | CA-125 (weak before menopause, normal in half of early cancers), AFP, hCG, LDH, inhibin, androgens by tumor, with scenario logic. |
| GYN-ONC.1 | TAUGHT | b26, b35-b36 | Risk factors for ovary, endometrium (unopposed estrogen), cervix (HPV, smoking, immunosuppression), vulva (HPV, lichen sclerosus), vagina (DES) in one table. |
| GYN-ONC.2 | TAUGHT | b13, b23, b36 | First work-up and treatment per site (ovary staging/cytoreduction/platinum; endometrial biopsy and hysterectomy with BSO; colposcopy/conization/chemoradiation; wide local excision with sentinel node; vaginal radiation or sarcoma chemotherapy). |
| GYN-ONC.3 | TAUGHT | b35-b36 | Precursor and pathophysiology per site (atypical hyperplasia, E6/E7, VIN types with TP53, adenosis, STIC); detail in rp12-rp14. |
| BICEP-WILLIAMS.8 | TAUGHT | b1, b12-b13 | Differential and work-up by age group, pregnancy test first, transvaginal ultrasound, markers. |
| BICEP-WILLIAMS.9 | TAUGHT | b22-b23, b30-b33 | Serous (psammoma, bilateral), mucinous (large mucin-filled, unilateral, KRAS), Brenner (coffee-bean), endometrioid/clear cell, teratoma, dysgerminoma, yolk sac (Schiller-Duval), choriocarcinoma, granulosa (Call-Exner, coffee-bean), Sertoli-Leydig, fibroma, Krukenberg; markers table. |
| BICEP-WILLIAMS.11 | TAUGHT | b4 | Endometrial stripe by phase, endocervical canal, ovary with antral follicles, anechoic fluid. Brief: the uterine body and myometrium are not described. |
| BICEP-WILLIAMS.13 | TAUGHT | b26-b27, b35 | Nulliparity, early menarche, late menopause, endometriosis, BRCA/Lynch; protective OCPs (5+ years about half), multiparity, breastfeeding, tubal ligation/salpingectomy; unopposed estrogen and HPV for other sites (rp13/rp14). |
| BP-rp15-01 | TAUGHT | b19-b21 | Four-way classification. |
| BP-rp15-02 | TAUGHT | b2 | Follicular, corpus luteum/hemorrhagic, theca lutein (high hCG). |
| BP-rp15-03 | TAUGHT | b22-b23, b33 | Serous most common, HGSC from tubal STIC, psammoma, BRCA/TP53, CA-125. |
| BP-rp15-04 | TAUGHT | b22 | Mucinous (large, pseudomyxoma from appendix), endometrioid/clear cell from endometriosis, Brenner. |
| BP-rp15-05 | TAUGHT | b30 | Dermoid (most common in young women, hair/teeth/sebum, torsion), struma ovarii, immature teratoma. |
| BP-rp15-06 | TAUGHT | b30, b33 | Dysgerminoma (LDH, radiosensitive, Swyer/Turner), yolk sac (AFP, Schiller-Duval), choriocarcinoma (hCG). |
| BP-rp15-07 | TAUGHT | b31 | Estrogen effects by age, Call-Exner, coffee-bean nuclei, inhibin. |
| BP-rp15-08 | TAUGHT | b31-b32 | Sertoli-Leydig virilization, thecoma, fibroma with Meigs syndrome. |
| BP-rp15-09 | TAUGHT | b20-b21 | Krukenberg: bilateral mucin-secreting signet-ring metastases, gastric primary. |
| BP-rp15-10 | TAUGHT | b26-b27 | Risk and protective factors with the ovulation and tubal-origin mechanisms. |
| BP-rp15-11 | TAUGHT | b16-b17 | Infundibulopelvic/utero-ovarian pedicle, enlarged ovary, sudden pain and vomiting, emergency. |
| BP-rp15-12 | TAUGHT | b7-b13 | Age, ultrasound malignancy features, O-RADS/IOTA, referral. |
| BP-rp15-13 | TAUGHT | b14, b33 | CA-125, AFP, hCG, LDH, inhibin. |
| BP-rp15-14 | TAUGHT | b1 | Hydrosalpinx after salpingitis, tubo-ovarian abscess, paratubal cyst, ectopic pregnancy as adnexal masses. |
| BP-rp15-15 | TAUGHT | b22-b24 | Benign-borderline-carcinoma, type I vs II with KRAS/BRAF vs TP53 and precursors. |
| BP-rp15-16 | TAUGHT | b23, b28 | Bloating, early satiety, girth, peritoneal seeding/omental caking; screening fails (USPSTF). |
| BP-rp15-17 | TAUGHT | b16-b17 | Veins/lymphatics collapse first, congestion, then arterial occlusion and hemorrhagic infarction; Doppler may persist. |
| BP-rp15-18 | TAUGHT | b22 | Serous often bilateral; mucinous usually unilateral, bilateral suggests metastasis. |

rp15: 35 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## Summary

rp1: 36 TAUGHT, 3 PARTIAL, 0 MISSING, 0 ERROR
rp2: 29 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR
rp3: 15 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp4: 24 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp5: 25 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR
rp6: 16 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp7: 21 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp8: 22 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp9: 33 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR
rp10: 16 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR
rp11: 35 TAUGHT, 1 PARTIAL, 0 MISSING, 1 ERROR
rp12: 22 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp13: 27 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR
rp14: 22 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR
rp15: 35 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

Total: 378 TAUGHT, 12 PARTIAL, 0 MISSING, 1 ERROR

## Notes (not rows)

- The PARTIAL fixes are all one to three sentences or a table row; none needs a new section. rp1 (rectal venous drainage, nutcracker), rp2 (external-genital venous drainage), rp5 (MRI identification), rp9 (differential for non-uterine bleeding, empty sella), rp10 (barrier and sterilization risks), rp11 (SSRI/SNRI mechanism and risks), rp13 (HSIL cytology and invasive carcinoma morphology), rp14 (PCOS ovarian morphology).
- Observed in the course decks but outside any objective or blueprint item, so not rows: the mature cystic teratoma complications (about 1 % squamous transformation, paraneoplastic anti-NMDA receptor limbic encephalitis, usually unilateral and more often right-sided) are absent from rp15; the Nugent score for bacterial vaginosis is absent from rp12; MED12 mutation in leiomyoma is absent from rp14.
