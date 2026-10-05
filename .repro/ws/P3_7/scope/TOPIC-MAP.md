# TOPIC-MAP — every Canvas session objective, and the topic(s) accountable for teaching it

Drafted by the planning session on 2026-09-26 (topic assignment only). **Task P1.4 completes it**: for every row it fills the
`terms` column (2-4 key terms, lowercase, `;`-separated, `a|b` for alternatives, each >= 5 characters or an abbreviation,
never a generic word such as `patient`, `disease`, `describe`: the words a student must meet to have learned the objective)
and adds a row for every objective P1.1 adds (BiCEP cases). The `section` column stays `-` (topic tasks record where each
objective is taught in their audit outline). The gate checks: every objective in CANVAS-SCOPE.md has a row; every listed
topic exists (REPRO-PLAN.md §9); and every term appears in the rendered text of the FIRST topic listed. There is no
second-model coverage review any more (user direction 2026-10-04, GATE-CHANGE sha:71dd2029), so these key terms are the
only mechanical guard that a topic teaches each objective; the phase verifier judges whether it is actually taught. The
first topic listed is the accountable one; the others also cover it.

Row format: `| OBJ-ID | tid[,tid...] | section | terms |`  (one line per objective; never delete a row)

Term rules (clause-by-clause pass of 2026-10-04): the terms of a row anchor every named part of the objective (what to
define, list, explain, compare), so a topic can only contain them by teaching that part. A term is a specific, discriminating
word (a drug, finding, mechanism or named complication), not a generic word, not a word that also matches unrelated text in
the topic, and not merely a copy of that topic's STEP1-BLUEPRINT key terms (those are checked separately). Where 2-4 terms
cannot anchor every part, the parts the course and Step 1 test most are anchored and the rest is listed as UNANCHORED in
`audit/P1.4.md` so the verifier and the topic authors see it. Sibling rows of one session (lecture and lab, TBL and
BiCEP versions of the same objective) are chosen to complement each other.

Filled by P1.4 on 2026-09-26, redone 2026-10-04. Each term is matched in the first topic's rendered text at the start of a word (gate rule repro_common.term_hit: stems run on, terms of <= 3 characters and numbers must end there, hyphens optional), so some
terms are stems (`atypi`, `koilocyt`, `thromboembol`, `contracepti`) and names that carry a diacritic or an apostrophe
are given by their plain part (`paramesonephric` for Müllerian, `health initiative` for the Women's Health Initiative).
No row uses `a|b`: a `|` inside the terms cell ends the table cell, and the parser (`repro_common.topic_map_rows`) then
drops the whole row, so every term here is one spelling. BiCEP rows (added by P1.1) follow the lecture rows; their
topic assignments and the reasons are in `audit/P1.4.md`.

| objective | topics | section | terms |
|---|---|---|---|
| ANAT-PELVIS-LEC.1 | rp1 | - | true pelvis; false pelvis; pelvic brim; diamond |
| ANAT-PELVIS-LEC.2 | rp1 | - | intertuberous; obstetric conjugate; sacral promontory; gynecoid |
| ANAT-PELVIS-LEC.3 | rp1 | - | pubococcygeus; coccygeus; nerve to levator ani; continence |
| ANAT-PELVIS-LEC.4 | rp1 | - | vesicouterine; rectovesical; retropubic; retrorectal |
| ANAT-PELVIS-LEC.5 | rp1 | - | fimbria; external os; fornices; ovarian fossa |
| ANAT-PELVIS-LEC.6 | rp1 | - | fructose; liquef; seminal colliculus; retrograde ejaculation |
| ANAT-PELVIS-LEC.7 | rp1 | - | inferior vesical; middle rectal; uterovaginal; internal iliac vein |
| ANAT-PELVIS-LEC.8 | rp1 | - | parametri; ischial spine; common iliac |
| ANAT-PELVIS-LEC.9 | rp1 | - | embolization; prostatectomy; superior rectal; anastomos |
| ANAT-PELVIS-LAB.1 | rp1 | - | sacroiliac; sacrospinous; sacrotuberous; ischium |
| ANAT-PELVIS-LAB.2 | rp1 | - | true pelvis; false pelvis; pelvic diaphragm; pelvic outlet |
| ANAT-PELVIS-LAB.3 | rp1 | - | obturator internus; suprapiriform; infrapiriform; lesser sciatic |
| ANAT-PELVIS-LAB.4 | rp1 | - | obturator fascia; rectovaginal; pubocervical |
| ANAT-PELVIS-LAB.5 | rp1 | - | vesicouterine; mesosalpinx; mesovarium; mesometrium |
| ANAT-PELVIS-LAB.6 | rp1 | - | lumbosacral trunk; ventral rami; sacral foram |
| ANAT-PELVIS-LAB.7 | rp1 | - | uterine artery; inferior vesical; para-aortic; batson |
| ANAT-PELVIS-LAB.8 | rp1 | - | inferior hypogastric; emission; erection; lumbar splanchnic |
| ANAT-PELVIS-LAB.9 | rp1 | - | trigone; rectosigmoid; anorectal; infundibulum |
| ANAT-PELVIS-LAB.10 | rp1 | - | trigone; denonvilliers; rectovesical; spermatic cord |
| ANAT-PELVIS-LAB.11 | rp1 | - | fundus; perimetrium; uterosacral; retrover |
| ANAT-PELVIS-LAB.12 | rp1 | - | ovarian fossa; ovarian ligament; torsion; obturator nerve |
| ANAT-PELVIS-LAB.13 | rp1,rp19 | - | tunica vaginalis; efferent ductules; vasectomy; digital rectal |
| HP-UTERUS-OVARY.1 | rp8,rp14,rp15 | - | medulla; tunica albuginea; peg cell; perimetrium |
| HP-UTERUS-OVARY.2 | rp8 | - | decidualiz; corpus albicans; implanted embryo; luteinization |
| HP-UTERUS-OVARY.3 | rp9,rp14,rp15,rp11 | - | follicular cyst; endometrioma; pelvic adhesion |
| HP-UTERUS-OVARY.4 | rp5 | - | bicornuate; unicornuate; pregnancy loss; preterm |
| HP-UTERUS-OVARY.5 | rp14,rp9 | - | polycystic; hyperandrogen; insulin resistance; unopposed estrogen |
| HP-UTERUS-OVARY.6 | rp16,rp14 | - | upper genital tract; pyosalpinx; hydrosalpinx; endometritis |
| HP-UTERUS-OVARY.7 | rp14 | - | circumscribed; degenerat; necrosis; hematogenous |
| HP-UTERUS-OVARY.8 | rp14 | - | atrophic endometrium; p53; psammoma; myometrial invasion |
| HP-UTERUS-OVARY.9 | rp14 | - | biphasic; heterologous; metaplast |
| HP-UTERUS-OVARY.10 | rp15 | - | coelomic epithelium; primordial germ; genital ridge |
| HP-UTERUS-OVARY.11 | rp15 | - | lynch; tp53; dysgenesis |
| PHYS-MENSTRUAL.1 | rp8 | - | pregnenolone; androstenedione; desmolase |
| PHYS-MENSTRUAL.2 | rp8 | - | oogoni; antral follicle; dominant follicle; atresia |
| PHYS-MENSTRUAL.3 | rp8 | - | pulsatile; gonadotroph; positive feedback; corpus luteum |
| PHYS-MENSTRUAL.4 | rp8 | - | day 14; pulse frequency; second rise |
| PHYS-MENSTRUAL.5 | rp8 | - | corpus albicans; implanted embryo; luteinization |
| PATHPHARM-MENSES-CONTRA.1 | rp9 | - | transvaginal; laparoscop; 17-hydroxyprogesterone; dyschezia |
| PATHPHARM-MENSES-CONTRA.2 | rp10 | - | ethinyl estradiol; breakthrough bleeding; perfect use; vaginal ring |
| PATHPHARM-MENSES-CONTRA.3 | rp10 | - | progesterone receptor; pge1; cramping |
| PATHPHARM-MENSES-CONTRA.4 | rp29,rp10 | - | parental consent; pregnancy intention; consensual |
| ANAT-PERINEUM-LEC.1 | rp2 | - | urogenital triangle; ischial tuberosit; horizontal plane; vertical plane |
| ANAT-PERINEUM-LEC.2 | rp2 | - | ischiopubic; pubic arch; crura |
| ANAT-PERINEUM-LEC.3 | rp2 | - | bulbospongiosus; ischiocavernosus; deep transverse perineal; bulbourethral |
| ANAT-PERINEUM-LEC.4 | rp2 | - | superior rectal; inferior mesenteric; portocaval; visceral |
| ANAT-PERINEUM-LEC.5 | rp2 | - | labia majora; labia minora; hymen; paired corpora |
| ANAT-PERINEUM-LEC.6 | rp2 | - | prostatic urethra; spongy urethra; navicular fossa; crura |
| ANAT-PERINEUM-LEC.7 | rp2 | - | internal pudendal; external pudendal; dorsal vein; helicine |
| ANAT-PERINEUM-LEC.8 | rp2 | - | sentinel; obturator nodes; deep inguinal |
| ANAT-PERINEUM-LEC.9 | rp2 | - | inferior hypogastric; lumbar splanchnic; vasoconstriction; erection |
| ANAT-EXTGEN-LAB.1 | rp1,rp2 | - | coccygeus; iliococcygeus; nerve to levator ani; continence |
| ANAT-EXTGEN-LAB.2 | rp2 | - | anal triangle; coccyx; sacrotuberous; horizontal plane |
| ANAT-EXTGEN-LAB.3 | rp2 | - | ischiopubic; pubic arch; transverse perineal ligament |
| ANAT-EXTGEN-LAB.4 | rp2 | - | straddle; scarpa; fascia lata; extravasat |
| ANAT-EXTGEN-LAB.5 | rp2 | - | mons pubis; clitoris; vestibular bulb; lubrication |
| ANAT-EXTGEN-LAB.6 | rp2 | - | external urethral orifice; vaginal orifice; posterolateral |
| ANAT-EXTGEN-LAB.7 | rp2 | - | prostatic urethra; spongy urethra; bulb of the penis; prepuce |
| ANAT-EXTGEN-LAB.8 | rp2 | - | sacrospinous; lesser sciatic; pudendal block; posterior labial |
| ANAT-EXTGEN-LAB.9 | rp2 | - | bladder neck; hypogastric; alpha-1 |
| ANAT-EXTGEN-LAB.10 | rp2 | - | internal pudendal; dorsal vein; sentinel; inguinal bubo |
| HP-MALE.1 | rp19 | - | seminiferous tubule; tunica albuginea; interstiti; myoid |
| HP-MALE.2 | rp19 | - | spermatogonia; spermatocyte; spermatid; reinke |
| HP-MALE.3 | rp19 | - | secondary spermatocyte; flagellum; residual bod; spermiation |
| HP-MALE.4 | rp19 | - | efferent ductules; principal cell; muscularis; corpora amylacea |
| HP-MALE.5 | rp19 | - | obstructive azoospermia; cystic fibrosis; vasectomy; retrograde ejaculation |
| HP-MALE.6 | rp19 | - | corpora cavernosa; sinusoid; trabecul; emissary |
| HP-MALE.7 | rp21,rp5 | - | hypospadias; epispadias; topical steroid; urethroplasty |
| HP-MALE.8 | rp21,rp16,rp17 | - | balanitis; candida; herpes; syphilis |
| HP-MALE.9 | rp21 | - | fibrous plaque; curvature; collagenase; plication |
| HP-MALE.10 | rp5,rp20 | - | inguinal canal; deep inguinal ring |
| HP-MALE.11 | rp20 | - | inguinal hernia; contralateral; germ cell tumor; bilateral cryptorchidism |
| HP-MALE.12 | rp20 | - | high-riding; detorsion; congestion; salvage |
| HP-MALE.13 | rp20 | - | granulomatous; enteric; sperm antigen |
| HP-MALE.14 | rp20 | - | patent processus; communicating; filaria; chylocele |
| HP-MALE.15 | rp21 | - | dihydrotestosterone; watchful waiting; transurethral; hydronephrosis |
| HP-MALE.16 | rp21 | - | e. coli; reflux; chronic bacterial; chronic pelvic pain |
| HP-MALE.17 | rp21 | - | koilocyt; imiquimod; penectomy; verrucous |
| HP-MALE.18 | rp20 | - | isochromosome; in situ; choriocarcinoma; teratoma |
| HP-MALE.19 | rp21 | - | p63; tmprss2; luminal |
| HP-MALE.20 | rp21 | - | crowded gland; nucleoli; infiltrative |
| HP-MALE.21 | rp21 | - | first-degree; brca2; rises with age |
| HP-MALE.22 | rp21 | - | autopsy; overdiagnos; active surveillance |
| PATHPHARM-MALE.1 | rp19 | - | reinke; corpora amylacea; papillary infolding; folded |
| PATHPHARM-MALE.2 | rp19 | - | dartos; fournier; left renal vein; para-aortic |
| PATHPHARM-MALE.3 | rp19 | - | spermatogonia; motility; capacitation; febrile |
| PATHPHARM-MALE.4 | rp19 | - | pulsatile; intratesticular; free testosterone |
| PATHPHARM-MALE.5 | rp19 | - | helicine; emission; bulbospongiosus; orgasm |
| PATHPHARM-MALE.6 | rp22 | - | inappropriately normal; karyotype; microdeletion; semen analysis |
| PATHPHARM-MALE.7 | rp20,rp21,rp22 | - | testicular rupture; sperm banking; retractile |
| PATHPHARM-MALE.8 | rp22,rp21 | - | tamsulosin; finasteride; orthostatic; paroxetine |
| PATHPHARM-MALE.9 | rp22,rp21 | - | leuprolide; flare; hot flash; abiraterone |
| HP-CERVIX-VULVA.1 | rp13 | - | endocervi; ectocervi; plicae palmatae; mucus |
| HP-CERVIX-VULVA.2 | rp13 | - | ectropion; stenosis; hematometra |
| HP-CERVIX-VULVA.3 | rp12 | - | lactic acid; transudate; distensib; rugae |
| HP-CERVIX-VULVA.4 | rp12 | - | paraurethral; mucus-secreting; lubricat; transitional |
| HP-CERVIX-VULVA.5 | rp12,rp16 | - | cervicitis; anaerob; preterm; pelvic inflammatory disease |
| HP-CERVIX-VULVA.6 | rp12 | - | hyperkeratosis; dermal sclerosis; basaloid; paget cell |
| HP-CERVIX-VULVA.7 | rp12 | - | embryonal rhabdomyosarcoma; rhabdomyoblast; myogenin; polypoid |
| HP-CERVIX-VULVA.8 | rp13 | - | high-risk; low-risk; integrat; cytology |
| HP-CERVIX-VULVA.9 | rp13 | - | hyperchromat; full thickness; bethesda; regress |
| PATHPHARM-CERVIX-HPV.1 | rp13 | - | cytology; primary hpv; total hysterectomy; speculum |
| PATHPHARM-CERVIX-HPV.2 | rp13 | - | microabrasion; integrat; basal layer |
| PATHPHARM-CERVIX-HPV.3 | rp13,rp17 | - | cd4; clearance; annual; anoscopy |
| PATHPHARM-CERVIX-HPV.4 | rp13 | - | reflex hpv; conization; ablat; 9-valent |
| PATHPHARM-CERVIX-HPV.5 | rp12,rp16 | - | wet mount; amsel; metronidazole; nucleic acid |
| PATHPHARM-CERVIX-HPV.6 | rp12 | - | marsupialization; clobetasol; contact dermatitis; word catheter |
| ADNEXAL.1 | rp15 | - | simple cyst; hemorrhagic cyst; repeat scan |
| ADNEXAL.2 | rp15 | - | ground-glass; whirlpool; rokitansky; doppler |
| ADNEXAL.3 | rp15 | - | solid component; color score; multilocular cyst |
| ADNEXAL.4 | rp15 | - | o-rads; unilocular; intermediate risk; solid component |
| ADNEXAL.5 | rp15 | - | prepubertal; postmenopausal; tubo-ovarian |
| ADNEXAL.6 | rp15 | - | gynecologic oncolog; expectant; cystectomy; pregnancy test |
| ADNEXAL.7 | rp15 | - | simple rules; malignancy index; o-rads |
| ADNEXAL.8 | rp15 | - | alpha-fetoprotein; lactate dehydrogenase; chorionic gonadotropin; premenopaus |
| GYN-ONC.1 | rp15,rp14,rp13,rp12 | - | unopposed estrogen; lichen sclerosus; immunosuppress; diethylstilbestrol |
| GYN-ONC.2 | rp15,rp14,rp13,rp12 | - | endometrial biopsy; cytoreduct; colposcopy; wide local excision |
| GYN-ONC.3 | rp15,rp14,rp13,rp12 | - | atypical hyperplasia; e6; vulvar intraepithelial neoplasia; adenosis |
| TBL-STI.1 | rp16,rp17,rp12 | - | treponema pallidum; granulomatis; azithromycin; benzathine |
| TBL-STI.2 | rp16 | - | polymicrobial; tubal factor; ectopic pregnancy; chronic pelvic pain |
| TBL-STI.3 | rp18 | - | neonatal herpes; erythromycin; papillomatosis |
| VIRAL-STI-TORCH.1 | rp17 | - | ribosome; uncoating; inactivates rb; budding |
| VIRAL-STI-TORCH.2 | rp17 | - | provirus; episom; reservoir; lytic |
| VIRAL-STI-TORCH.3 | rp17 | - | tropism; antigenic variation; downregulat; vertical |
| VIRAL-STI-TORCH.4 | rp17 | - | syringe; condom; pre-exposure |
| VIRAL-STI-TORCH.5 | rp17 | - | latency-associated; shedding; suppressive; condom |
| VIRAL-STI-TORCH.6 | rp17 | - | icosahedral; skin-to-skin; virus-like particle; 9-valent |
| VIRAL-STI-TORCH.7 | rp18 | - | transplacental; togavirus; calcification; seroconver |
| VIRAL-STI-TORCH.8 | rp17,rp18 | - | opt-out; serolog; cytology; third trimester |
| VIRAL-STI-TORCH.9 | rp17 | - | tenofovir; integrase inhibitor; protease inhibitor; valacyclovir |
| VIRAL-STI-TORCH.10 | rp17 | - | toll-like; microtubule; sinecatechins; trichloroacetic |
| MDR-REVIEW.1 | rp14,rp15,rp20,rp21 | - | submucosal; intramural; subserosal; leuprolide |
| MDR-REVIEW.2 | rp14,rp15,rp20,rp21 | - | postmenopausal bleeding; endometrial biopsy; staging; hysterectomy |
| EMBRYO-GU.1 | rp5 | - | vaginal plate; spongy urethra; uterovaginal |
| EMBRYO-GU.2 | rp5 | - | ureteric bud; ectopic ureter; ipsilateral |
| EMBRYO-GU.3 | rp5 | - | y chromosome; determining factor; sertoli; wolffian |
| EMBRYO-GU.4 | rp5 | - | bicornuate; resorption; canalization; vaginal atresia |
| EMBRYO-GU.5 | rp5,rp20 | - | urethral fold; insl3; inguinoscrotal; communicating hydrocele |
| EMBRYO-GU.6 | rp6,en11 | - | maternal virilization; 21-hydroxylase; 17-hydroxyprogesterone; dht ratio |
| MENOPAUSE.1 | rp11 | - | prepubertal; menopausal transition; final menstrual period |
| MENOPAUSE.2 | rp11 | - | thermoneutral; serotonin; libido; nocturia |
| MENOPAUSE.3 | rp11 | - | ldl rises; brain fog; urinary tract infection; vaginal ph |
| MENOPAUSE.4 | rp11,en10 | - | rankl; osteoprotegerin; osteoclast; trabecular |
| MENOPAUSE.5 | rp11 | - | anovulat; cycle length; 60 days; polymenorrhea |
| MENOPAUSE.6 | rp11 | - | estrogen-only; hysterectomy; endometrial hyperplasia; breast tenderness |
| MENOPAUSE.7 | rp11 | - | gabapentin; venlafaxine; hepatotoxic; clonidine |
| MENOPAUSE.8 | rp11 | - | hypertriglyceridemia; thromboembol; 10 years; titrat |
| MENOPAUSE.9 | rp11 | - | unnecessary; fluctuat; retrospective |
| MENOPAUSE.10 | rp11,en10 | - | bone density; mammogra; zoster; weight-bearing |
| MENOPAUSE.11 | rp11 | - | transvaginal; hysteroscopy; single episode |
| MENOPAUSE.12 | rp11 | - | pregnancy test; carcinoid; sheehan; thyroid-stimulating hormone |
| MENOPAUSE.13 | rp11 | - | health initiative; timing hypothesis; residency; abandon |
| MENOPAUSE.14 | rp11 | - | vasomotor burden; socioeconomic; undertreat |
| MENOPAUSE.15 | rp11 | - | influencer; bioidentical; compounded; oversight |
| EMBRYO-CLIN.1 | rp4 | - | last menstrual period; 2 weeks |
| EMBRYO-CLIN.2 | rp4 | - | cleavage; zona pellucida; epiblast; notochord |
| EMBRYO-CLIN.3 | rp4 | - | neural crest; neural tube; somite; tracheoesophageal |
| EMBRYO-CLIN.4 | rp4 | - | yolk sac; allantois; chorionic villi; amniotic fluid |
| EMBRYO-CLIN.5 | rp4 | - | spiral arter; umbilical vein; chorionic gonadotropin; fetal adrenal |
| EMBRYO-CLIN.6 | rp4 | - | ectopic; previa; accreta; internal os |
| EMBRYO-CLIN.7 | rp5 | - | intermediate mesoderm; bipotent; urorectal septum |
| EMBRYO-CLIN.8 | rp5 | - | sex-determining region; sox9; sertoli |
| EMBRYO-CLIN.9 | rp5 | - | seminal vesicle; fallopian tube; appendix testis; epoophoron |
| EMBRYO-CLIN.10 | rp5,rp6 | - | urethral fold; insl3; ambiguous genitalia |
| EMBRYO-CLIN.11 | rp4,rp5,rp6 | - | teratogen; chorionicity |
| TRANSGENDER-LEC.1 | rp29 | - | sex assigned at birth; gender incongruence; reassignment; nonbinary |
| TRANSGENDER-LEC.2 | rp29 | - | name change; birth certificate; state law; medicaid |
| TRANSGENDER-LEC.3 | rp29 | - | sperm banking; cryopreserv; progestin; anal sex |
| TRANSGENDER-LEC.4 | rp29 | - | antiandrogen; potassium; polycythemia; bone density |
| TRANSGENDER-LEC.5 | rp29 | - | mastectomy; hysterectomy; vaginoplasty; fistula |
| TRANSGENDER-LEC.6 | rp29 | - | cervical cancer screening; prostate-specific antigen; hpv vaccin; suicide risk |
| TBL-PUBERTY.1 | rp7 | - | breast bud; pubic hair; testicular volume; stage 2 |
| TBL-PUBERTY.2 | rp7 | - | pubarche; gonadarche; adrenal androgen; axillary |
| TBL-PUBERTY.3 | rp7 | - | leptin; nocturnal; theca cells; sertoli |
| TBL-PUBERTY.4 | rp7 | - | pubarche; peak height velocity; penile; spermarche |
| TBL-PUBERTY.5 | rp7 | - | gnrh stimulation; magnetic resonance; testotoxicosis; kallmann |
| TBL-PUBERTY.6 | rp7 | - | gynecomastia; self-limit; growth velocity |
| TBL-PUBERTY.7 | rp6,rp7 | - | 45,x; 47,xxy; hypergonadotropic; primary hypogonadism |
| LIFESPAN-PANEL.1 | rp29 | - | discriminat; insurance coverage; knowledge deficit; refused care |
| LIFESPAN-PANEL.2 | rp29 | - | chosen name; inclusive language; misgender; neutral pronoun |
| LIFESPAN-PANEL.3 | rp29 | - | autonomy; state law; refus; parental consent |
| LIFESPAN-PANEL.4 | rp29 | - | speech; social work; plastic surg; referral |
| LIFESPAN-PANEL.5 | rp29 | - | implicit bias; assumption; microaggression; intake form |
| MATERNAL-PHYS.1 | rp25 | - | stroke volume; heart rate; nadir; vasodilat |
| MATERNAL-PHYS.2 | rp25 | - | respiratory rate; diaphragm; ventilatory drive; oxygen consumption |
| MATERNAL-PHYS.3 | rp25 | - | cell mass; leukocytosis; erythropoietin; protein s |
| MATERNAL-PHYS.4 | rp25 | - | lordosis; lower esophageal sphincter; gallstone; symphysis |
| MATERNAL-PHYS.5 | rp25 | - | glomerular filtration; renal plasma flow; glucosuria; pyelonephritis |
| LABOR-DELIVERY.1 | rp28 | - | prostaglandin; corticotropin-releasing; fetal adrenal; posterior pituitary |
| LABOR-DELIVERY.2 | rp28 | - | synchron; action potential; oxytocin receptor; upregulat |
| LABOR-DELIVERY.3 | rp28 | - | active phase; placental separation; restitution; postpartum hemorrhage |
| LABOR-DELIVERY.4 | rp28 | - | 500 ml; 1000 ml; pitocin; active management |
| LABOR-DELIVERY.5 | rp28 | - | c5; c8; waiter; horner |
| LABOR-DELIVERY.6 | rp28,rp1 | - | internal anal sphincter; rectal mucosa; bulbospongiosus; vaginal mucosa |
| TBL-EARLY-PREG.1 | rp25,rp4 | - | rescue; decidualiz; luteal-placental; quiescen |
| TBL-EARLY-PREG.2 | rp30,rp26 | - | due date; redat; last menstrual period |
| TBL-EARLY-PREG.3 | rp26 | - | cardiac activity; double decidual; sac diameter |
| TBL-EARLY-PREG.4 | rp26 | - | chorionic gonadotropin; transvaginal; rises slowly; hemoperitoneum |
| TBL-EARLY-PREG.5 | rp26 | - | pregnancy loss; adnexal mass; hydatidiform |
| TBL-EARLY-PREG.6 | rp26 | - | pelvic inflammatory; cilia; shoulder pain; hemoperitoneum |
| TBL-EARLY-PREG.7 | rp26 | - | pregnancy test; cardiac activity; 7 mm; hemodynamic |
| PRENATAL-CARE.1 | rp30 | - | term births; abortion; living children |
| PRENATAL-CARE.2 | rp30 | - | cell-free dna; inhibin a; trisomy 21; chorionic villus |
| PRENATAL-CARE.3 | rp30 | - | biparietal; femur length; abdominal circumference |
| PRENATAL-CARE.4 | rp30 | - | early term; full term; late term; 42 weeks |
| PRENATAL-CARE.5 | rp30 | - | menstrual history; surgical history; substance use; intimate partner |
| PRENATAL-CARE.6 | rp30 | - | quickening; dipstick; fetal heart; fetal movement |
| PRENATAL-CARE.7 | rp30 | - | blood type; glucose challenge; anatomy scan; group b strep |
| PRENATAL-CARE.8 | rp30 | - | pertussis; influenza; respiratory syncytial; varicella |
| PRENATAL-CARE.9 | rp30 | - | 0.4 mg; dna synthesis; banana sign |
| PRENATAL-CARE.10 | rp28 | - | tocodynamometer; doppler; intrauterine pressure catheter; fetal scalp electrode |
| PRENATAL-CARE.11 | rp28 | - | cervical position; effacement; station; consistency |
| PRENATAL-CARE.12 | rp28 | - | misoprostol; pge1; collagen |
| PRENATAL-CARE.13 | rp28 | - | vertex; transverse lie; frank breech; planned cesarean |
| PRENATAL-CARE.14 | rp18 | - | acyclovir; prodrom; active lesion; disseminated |
| PRENATAL-CARE.15 | rp18 | - | rectovaginal; 4 hours; early-onset; bacteriuria |
| PRENATAL-CARE.16 | rp28,rp27 | - | biophysical profile; amniotic fluid index; accelerations; induction |
| PRENATAL-CARE.17 | rp28 | - | opioid; nitrous oxide; local anesthe; respiratory depression |
| THIRD-TRI.1 | rp27 | - | severe features; platelet; proteinuria; transaminase |
| THIRD-TRI.2 | rp27 | - | headache; right upper quadrant; hydralazine; visual |
| THIRD-TRI.3 | rp27,rp4 | - | placental lactogen; free fatty acid; evolution |
| THIRD-TRI.4 | rp27 | - | glucose challenge; 75 g; carpenter |
| THIRD-TRI.5 | rp27 | - | polycystic; shoulder dystocia; neonatal hypoglycemia; type 2 diabetes |
| THIRD-TRI.6 | rp27 | - | internal os; decidua basalis; percreta; premature separation |
| GTD.1 | rp26 | - | nlrp7; nulliparity; familial |
| GTD.2 | rp26 | - | antecedent; 15 to 20 percent |
| GTD.3 | rp26 | - | uterotonic; no more children; thyroid function; hormonal contraception |
| GTD.4 | rp26 | - | plateau or rise; multiagent; hysterectomy; gynecologic oncolog |
| GTD.5 | rp26 | - | hydropic; trophoblastic hyperplasia; p57; duplicat |
| GTD.6 | rp26 | - | hematogenous; cytotrophoblast; intermediate trophoblast; epithelioid trophoblastic |
| DELIVERY-SIM.1 | rp28 | - | ritgen; nuchal cord; anterior shoulder; cord clamp |
| LIFESPAN-CASES.1 | rp29 | - | tuskegee; sterilization; belmont; mistrust |
| LIFESPAN-CASES.2 | rp29 | - | autonomy; justice; health equity; psychosocial |
| LIFESPAN-CASES.3 | rp29 | - | structural racism; social determinants; implicit bias; maternal mortality |
| LIFESPAN-CASES.4 | rp29 | - | interpreter; shared decision; cultural humility |
| LIFESPAN-CASES.5 | rp29 | - | mandatory reporting; conscientious; standard of care; diverg |
| BREAST-HISTO.1 | rp24,rp23 | - | myoepithelial; desmoplas; pleomorphi |
| BREAST-HISTO.2 | rp24 | - | ductal carcinoma in situ; lobular carcinoma in situ; discohesive; terminal duct |
| BREAST-HISTO.3 | rp24 | - | estrogen receptor; progesterone receptor; immunohistochemistry; in situ hybridization |
| BREAST-HISTO.4 | rp24 | - | dimeriz; pi3k; pertuzumab; lapatinib |
| ANAT-BREAST.1 | rp3 | - | lactiferous sinus; subcutaneous fat; lobule |
| ANAT-BREAST.2 | rp3 | - | axillary tail; inspection; palpation; clock |
| ANAT-BREAST.3 | rp3 | - | pectoral fascia; pectoralis major; fixation; glide freely |
| ANAT-BREAST.4 | rp3 | - | thoracoacromial; batson; supraclavicular; intercostal nerve |
| TBL-BREAST.1 | rp3 | - | intralobular; interlobular; cuboidal |
| TBL-BREAST.2 | rp3 | - | oxytocin; casein; lipid droplet; ejection |
| TBL-BREAST.3 | rp23 | - | gynecomastia; premenopausal; postmenopausal; male breast cancer |
| TBL-BREAST.4 | rp23 | - | fibrous capsule; silicone granuloma; textured; scleroderma |
| TBL-BREAST.5 | rp23 | - | periductal; staphylococc; granulomatous; subareolar |
| TBL-BREAST.6 | rp23 | - | nonproliferative; usual ductal hyperplasia; atypical lobular hyperplasia; radial scar |
| TBL-BREAST.7 | rp23,rp24 | - | relative risk; atypia; first-degree |
| TBL-BREAST.8 | rp23 | - | polymastia; amastia; juvenile hypertrophy; tuberous |
| TBL-BREAST.9 | rp23 | - | biphasic; pericanalicular; stromal overgrowth; mobile |
| TBL-BREAST.10 | rp24 | - | usual ductal hyperplasia; atypical ductal hyperplasia; atypical lobular hyperplasia; lobular carcinoma in situ |
| TBL-BREAST.11 | rp24 | - | cribriform; monomorphic; streaming; myoepithelial |
| TBL-BREAST.12 | rp24 | - | lumpectomy; incidental; both breasts; chemoprevention |
| TBL-BREAST.13 | rp24 | - | homologous recombination; ashkenazi; two-hit; age 70 |
| TBL-BREAST.14 | rp24 | - | luminal b; her2-enriched; basal-like; pam50 |
| TBL-BREAST.15 | rp24 | - | luminal a; ki-67; endocrine therapy; complete response |
| TBL-BREAST.16 | rp24 | - | syncytial; lakes of mucin; well-formed tubules; unusual sites |
| TBL-BREAST.17 | rp24 | - | nottingham; hormone receptor; recurrence score; tumor size |
| PREG-REVIEW.1 | rp25,rp27,rp28 | - | aortocaval; thromboembol; uterine blood flow |
| PREG-REVIEW.2 | rp30 | - | last menstrual period; redat; more than 7 days; embryo transfer |
| PREG-REVIEW.3 | rp30 | - | methotrexate; mycophenolate; misoprostol |
| PREG-REVIEW.4 | rp30 | - | 0.4 mg; preconception; fortif |
| PREG-REVIEW.5 | rp30 | - | carrier screening; spinal muscular; microarray; cell-free dna |
| PREG-REVIEW.6 | rp25 | - | thyroxine-binding; lower esophageal sphincter; residual volume |
| PREG-REVIEW.7 | rp27,rp25 | - | nadir; prepregnancy; vascular resistance |
| PREG-REVIEW.8 | rp27 | - | proteinuria; seizure; hemolysis; patellar |
| PREG-REVIEW.9 | rp27 | - | rh-negative; hydrops; sensitiz; 72 hours |
| PREG-REVIEW.10 | rp27 | - | prior preterm; short cervix; chronic hypertension |
| PREG-REVIEW.11 | rp27 | - | pregestational; glucose challenge; placental lactogen; type 2 diabetes |
| PREG-REVIEW.12 | rp27,rp30 | - | fundal height; estimated fetal weight; umbilical artery |
| PREG-REVIEW.13 | rp30 | - | pertussis; respiratory syncytial; measles; intranasal |
| PREG-REVIEW.14 | rp18,rp17 | - | avidity; hepatitis c; antiretroviral |
| PREG-REVIEW.15 | rp27 | - | vasa previa; hysterectomy; digital |
| PREG-REVIEW.16 | rp30 | - | fetal echocardiography; gastroschisis; diaphragmatic hernia; renal agenesis |
| PREG-REVIEW.17 | rp27 | - | ursodiol; stillbirth; striae; periumbilical |
| PREG-REVIEW.18 | rp28 | - | arrest; protraction; 6 cm; latent phase |
| PREG-REVIEW.19 | rp28 | - | cardinal movements; retained placenta; uterine inversion; cord prolapse |
| SIM-COLPO.1 | rp13 | - | precancer; primary prevention; secondary prevention; cold knife |
| SIM-COLPO.2 | rp13,rp14 | - | acetic acid; endocervical curettage; endometrial biopsy; loop electrosurgical |
| SIM-COLPO.3 | rp13 | - | unsatisfactory; false-negative; endocervical component |
| ENDO-DM.1 | en14 | - | langerhans; pancreatic polypeptide; paracrine; fenestrated |
| ENDO-DM.2 | en14 | - | preproinsulin; proglucagon; convertase; secretory granule |
| ENDO-DM.3 | en14 | - | lipogenesis; gluconeogenesis; lipolysis; protein synthesis |
| ENDO-DM.4 | en14 | - | somatostatin; vagal; amino acid; epinephrine |
| ENDO-DM.5 | en14 | - | skeletal muscle; adipose; hepatocyte |
| ENDO-DM.6 | en15 | - | monozygotic; visceral; inactivity |
| ENDO-DM.7 | en15 | - | insulin deficiency; blurred vision; catabolic; ketoacidosis |
| ENDO-DM.8 | en16 | - | hyponatremia; hypovolemi; bicarbonate; osmotic diuresis |
| ENDO-DM.9 | en16 | - | normal saline; insulin infusion; hypokalemia; hypophosphatemia |
| ENDO-DM.10 | en15 | - | normoglycemia; impaired fasting glucose; random plasma glucose; glucose tolerance |
| ENDO-DM.11 | en16 | - | 600; osmolality; mental status; thromboembol |
| ENDO-DM.12 | en17,en15 | - | basal insulin; statin; a1c; dilated eye |
| ENDO-THYROID.1 | en5 | - | isthmus; recurrent laryngeal; symporter; thyrotropin-releasing |
| ENDO-THYROID.2 | en7,en6 | - | nuclear groove; pseudoinclusion; congo red; giant cell |
| ENDO-THYROID.3 | en6 | - | methimazole; propylthiouracil; potassium iodide |
| ENDO-THYROID.4 | en7,en5 | - | bethesda; anti-tpo; free t4; rising thyroglobulin |
| ENDO-THYROID.5 | en7,en5 | - | hydrocortisone; thyroxine-binding; chorionic gonadotropin |
| ENDO-THYROID.6 | en9 | - | routine labs; nephrolithiasis; osteoporosis; psychiatric |
| ENDO-ADRENAL.1 | en11 | - | mesoderm; fetal zone; adrenal vein; chromaffin |
| ENDO-ADRENAL.2 | en12 | - | adrenalitis; tuberculosis; orthostatic; salt craving |
| ENDO-ADRENAL.3 | en12 | - | polyglandular; autoimmune regulator; hypoparathyroidism; schmidt |
| ENDO-ADRENAL.4 | en11 | - | desmolase; pregnenolone; rate-limiting; dehydroepiandrosterone |
| ENDO-ADRENAL.5 | en11 | - | hyperkalemia; viriliz; ambiguous genitalia; hypokalemia |
| ENDO-ADRENAL.6 | en13 | - | resistant hypertension; spironolactone; palpitation; sweating |
| ENDO-ADRENAL.7 | en13,en18 | - | chromaffin; neural crest; men2; episodic |
| ENDO-PITUITARY.1 | en2 | - | sella turcica; infundibulum; chromophobe; somatotroph |
| ENDO-PITUITARY.2 | en2,en3 | - | nasal retina; optic tract; geniculate; quadrant |
| ENDO-PITUITARY.3 | en2,en3 | - | long loop; short loop; hyperprolactinemia |
| ENDO-PITUITARY.4 | en3 | - | gadolinium; suprasellar; 1 cm; cavernous sinus |
| ENDO-PITUITARY.5 | en3,en4 | - | corticotroph; gonadotroph; panhypopituitarism; mass effect |
| ENDO-PHARM.1 | en7 | - | liothyronine; desiccated; half-life; empty stomach |
| ENDO-PHARM.2 | en7 | - | proton pump; cholestyramine; warfarin; coffee |
| ENDO-PHARM.3 | en12 | - | circadian; salt-retaining; sick day; medical alert |
| ENDO-PHARM.4 | en17 | - | pancreatic lipase; norepinephrine; satiety; placebo |
| ENDO-PHARM.5 | en17 | - | oral semaglutide; orforglipron; empty stomach; small molecule |
| ENDO-PHARM.6 | en17 | - | steatorrhea; palpitation; suicidal; cholecystitis |
| ENDO-PHARM.7 | en17 | - | berberine; amp-activated; ozempic; dietary supplement |
| ENDO-PHARM.8 | en17 | - | dronabinol; megestrol; cyproheptadine |
| ENDO-PHARM.9 | en17 | - | medicare; coverage; bridge |
| ENDO-TBL-DM.1 | en17 | - | k-atp; fournier; fractures; pancreatitis |
| ENDO-TBL-DM.2 | en17 | - | first-line; atherosclerotic; chronic kidney disease; cardiorenal |
| ENDO-TBL-DM.3 | en17 | - | beta-cell function; patient reluctance; ominous octet |
| ENDO-TBL-DM.4 | en17 | - | iodinated contrast; fluconazole; sulfonamide; unawareness |
| BICEP-WILLIAMS.1 | rp9 | - | oligomenorrhea; polymenorrhea; intermenstrual |
| BICEP-WILLIAMS.2 | rp9,rp11 | - | heavy menstrual bleeding; 80 ml; variation; postmenopausal bleeding |
| BICEP-WILLIAMS.3 | rp9 | - | gastrointestinal; hematuria; coagulopathy; von willebrand |
| BICEP-WILLIAMS.4 | rp11,rp9 | - | retrospectiv; age 40; two occasions; karyotype |
| BICEP-WILLIAMS.5 | rp11 | - | estrone; androstenedione; parabasal |
| BICEP-WILLIAMS.6 | rp11 | - | conjugated; observational; micronized; medroxyprogesterone |
| BICEP-WILLIAMS.7 | rp11,rp14 | - | polyp; exogenous; hysteroscopy |
| BICEP-WILLIAMS.8 | rp15 | - | prepubertal; postmenopausal; transvaginal; pregnancy test |
| BICEP-WILLIAMS.9 | rp15 | - | psammoma; coffee bean; mucin-filled |
| BICEP-WILLIAMS.10 | rp14 | - | clear cell; indolent; p53; atrophic endometrium |
| BICEP-WILLIAMS.11 | rp15,rp1 | - | endometrial stripe; antral follicle; anechoic; endocervical canal |
| BICEP-WILLIAMS.12 | rp14,rp15,rp13 | - | mlh1; msh2; cowden; p53 |
| BICEP-WILLIAMS.13 | rp15,rp14,rp13 | - | oral contracepti; salpingectomy; multiparity; endometriosis |
| BICEP-MISHIMOTO.1 | rp19,rp5 | - | dartos; cremaster; tunica vaginalis; spermatic cord |
| BICEP-MISHIMOTO.2 | rp5,rp20 | - | tunica vaginalis; obliterat; patent |
| BICEP-MISHIMOTO.3 | rp20,rp5 | - | genitofemoral; inner thigh; ipsilateral; genital branch |
| BICEP-MISHIMOTO.4 | rp20 | - | appendix testis; blue dot; hernia; ureteral stone |
| BICEP-MISHIMOTO.5 | rp20 | - | detorsion; ceftriaxone; doxycycline; levofloxacin |
| BICEP-BROWN.1 | rp13,rp24,rp16 | - | mammogra; colorectal; age 21; hepatitis c |
| BICEP-BROWN.2 | rp24,rp15,rp14,rp13 | - | pedigree; genetic counsel; lynch; first-degree |
| BICEP-BROWN.3 | rp13 | - | uspstf; american cancer society; asccp; primary hpv |
| BICEP-BROWN.4 | rp13,rp17 | - | 9-valent; 31, 33, 45; age 11; age 26 |
| BICEP-BROWN.5 | rp16,rp17 | - | nontreponemal; self-collect; vaginal swab; nucleic acid amplification |
| BICEP-BROWN.6 | rp10 | - | norelgestromin; etonogestrel; diaphragm; vasectomy |
| BICEP-BROWN.7 | rp10 | - | abortifacient; implantation; body mass index |
| BICEP-BROWN.8 | rp29 | - | capacity; risks and benefits; alternatives; voluntar |
| BICEP-BROWN.9 | rp29 | - | chaperone; permission; speculum; sexual history |
| BICEP-WEIAND.1 | rp9,rp22 | - | 12 months of; primary infertility; secondary infertility; age 35 |
| BICEP-WEIAND.2 | rp9,rp22 | - | semen analysis; ovarian reserve; mid-luteal progesterone; antral follicle |
| BICEP-WEIAND.3 | rp9,rp22 | - | pelvic inflammatory; maternal age; varicocele; endometriosis |
| BICEP-WEIAND.4 | rp22,rp9 | - | hypergonadotropic; hypogonadotropic; luteinizing; inhibin b |
| BICEP-WEIAND.5 | rp9,rp1 | - | patency; hydrosalpinx; filling defect; spill |
| BICEP-WEIAND.6 | rp22,rp19 | - | semen analysis; testicular biopsy; maturation arrest; sertoli cell |
| BICEP-WEIAND.7 | rp9,rp22 | - | intrauterine insemination; in vitro fertilization; intracytoplasmic; sperm retrieval |
| BICEP-WALSH.1 | rp7 | - | pubarche; axillary hair; adrenal androgen; dihydrotestosterone |
| BICEP-WALSH.2 | rp7 | - | gonadarche; arcuate; leptin; sertoli |
| BICEP-WALSH.3 | rp7 | - | breast bud; penile; peak height velocity |
| BICEP-WALSH.4 | rp7 | - | igf-1; dhea-s; positive feedback |
| BICEP-WALSH.5 | rp7 | - | epiphyseal; aromatiz; growth plate |
| BICEP-WALSH.6 | rp7 | - | turner; kallmann; anorexia; chronic illness |
| BICEP-WALSH.7 | rp9,rp7 | - | delayed puberty; age 15; age 13; thelarche |
| BICEP-WALSH.8 | rp30 | - | living children; abortion; one birth |
| BICEP-WALSH.9 | rp9 | - | outflow tract; compartment; hypogonadotropic; hypergonadotropic |
| BICEP-WALSH.10 | rp9 | - | age 15; previously regular; after irregular |
| BICEP-WALSH.11 | rp9,rp6 | - | kallmann; anosmia; leptin; migrat |
| BICEP-WALSH.12 | rp9,en3 | - | prolactinoma; sheehan; empty sella; cushing |
| BICEP-WALSH.13 | rp9,rp5 | - | imperforate hymen; hematocolpos; rokitansky; curettage |
| BICEP-WALSH.14 | rp9 | - | 17-hydroxyprogesterone; adrenal tumor; hypothyroidism; polycystic |
| BICEP-WALSH.15 | rp9,rp11 | - | age 40; fragile x; alkylating; oophoritis |
| BICEP-WALSH.16 | rp9 | - | pregnancy test; chorionic gonadotropin; physiologic |
| BICEP-WALSH.17 | rp9 | - | energy availability; bone mineral density; relative energy deficiency; disordered eating |
| BICEP-WALSH.18 | rp9 | - | hcg is negative; karyotype; pelvic ultrasound; thyroid-stimulating |
| BICEP-WALSH.19 | rp5,rp1 | - | magnetic resonance; sagittal; t2-weighted; junctional zone |
| BICEP-WALSH.20 | rp8,rp6,rp19 | - | peripheral conversion; adipose; androstenedione; gynecomastia |
| BICEP-WALSH.21 | rp6 | - | 47,xxy; 45,x; short stature; azoospermia |
| BICEP-WALSH.22 | rp6 | - | maternal virilization; dihydrotestosterone; pubic hair; gonadectomy |
| BICEP-WALSH.23 | rp6,rp29 | - | phenotypic sex; genotypic sex; gonadal sex; gender identity |
| BICEP-LEWIS.1 | rp30 | - | term births; one birth; counts toward parity |
| BICEP-LEWIS.2 | rp30 | - | maternal age; chronic hypertension; pregestational diabetes; interpregnancy interval |
| BICEP-LEWIS.3 | rp26 | - | subchorionic; implantation bleeding; rh immun; cervical polyp |
| BICEP-LEWIS.4 | rp30 | - | head circumference; early term; late term; 42 weeks |
| BICEP-LEWIS.5 | rp30 | - | obstetric history; family history; allerg |
| BICEP-LEWIS.6 | rp30,rp18 | - | phenylketonuria; ionizing radiation; congenital rubella |
| BICEP-LEWIS.7 | rp27 | - | severe features; hemolysis; creatinine; pulmonary edema |
| BICEP-LEWIS.8 | rp30,rp27 | - | cocaine; neonatal abstinence; fetal alcohol; low birth weight |
| BICEP-LEWIS.9 | rp27 | - | epigastric; nifedipine; seizure prophylaxis |
| BICEP-LEWIS.10 | rp27 | - | vasa previa; uterine rupture; digital exam; bloody show |
| BICEP-LEWIS.11 | rp27 | - | increta; percreta; bright red; rigid |
| BICEP-LEWIS.12 | rp27 | - | placental insufficiency; oligohydramnios; aneuploidy; metabolic syndrome |
| BICEP-LEWIS.13 | rp27 | - | alloimmunization; fetomaternal; kernicterus; sensitiz |

## Objective text (for reference; the source of truth is CANVAS-SCOPE.md)

- `ANAT-PELVIS-LEC.1` → rp1 — Describe the locations and relationships between the true pelvic cavity, the false pelvis, and the perineum.
- `ANAT-PELVIS-LEC.2` → rp1 — Identify the features of the bony pelvis that are important for adequacy of the pelvis for childbirth (pelvic inlet via diagonal conjugate, interspinous distance, intertuberous distance, width of subpubic arch).
- `ANAT-PELVIS-LEC.3` → rp1 — Explain the function of the pelvic floor, its innervation, and the two major muscles that comprise it.
- `ANAT-PELVIS-LEC.4` → rp1 — Describe the peritoneal relationships of the pelvic viscera, including pouches and spaces.
- `ANAT-PELVIS-LEC.5` → rp1 — Describe the anatomical features and general functions of the pelvic viscera in females (bladder, uterus, uterine tube, ovary, cervix, vagina, and rectum).
- `ANAT-PELVIS-LEC.6` → rp1 — Describe the anatomical features and general functions of the pelvic viscera in males (bladder, ductus deferens, seminal vesicle, ejaculatory duct, prostate, prostatic urethra, and rectum).
- `ANAT-PELVIS-LEC.7` → rp1 — Trace the arterial blood supply and venous drainage of internal pelvic structures to their vascular origins and terminations.
- `ANAT-PELVIS-LEC.8` → rp1 — Relate the pelvic vasculature to neighboring organs, fascial planes, and clinically significant anatomical landmarks.
- `ANAT-PELVIS-LEC.9` → rp1 — Apply anatomical knowledge explaining methods of achieving hemostasis during common gynecologic, urologic, and colorectal surgical procedures.
- `ANAT-PELVIS-LAB.1` → rp1 — Describe the structure of the bony pelvis, including its related joints and ligaments.
- `ANAT-PELVIS-LAB.2` → rp1 — Describe the locations and relationships between the true pelvis cavity, the false pelvis, and the perineum.
- `ANAT-PELVIS-LAB.3` → rp1 — Identify muscles on the anterolateral and posterolateral walls of the pelvic cavity, explaining how the piriformis subdivides the greater sciatic foramen into 2 regions
- `ANAT-PELVIS-LAB.4` → rp1 — Describe the general organization of pelvic fascia (parietal, visceral, endopelvic)
- `ANAT-PELVIS-LAB.5` → rp1 — Explain the peritoneal relationships of the pelvic viscera, including pouches and mesenteries
- `ANAT-PELVIS-LAB.6` → rp1 — Name the ventral rami that form the sacral plexus while describing the location of the plexus in the pelvic cavity
- `ANAT-PELVIS-LAB.7` → rp1 — Describe the arterial blood supply, venous drainage, and lymphatic drainage of internal pelvic organs in females and males, explaining their relationship to other pelvic structures.
- `ANAT-PELVIS-LAB.8` → rp1 — Explain the autonomic innervation of the pelvic organs via the pelvic plexus and splanchnic nerves, recalling the effects of sympathetic and parasympathetic innervation on pelvic organs.
- `ANAT-PELVIS-LAB.9` → rp1 — Describe the anatomical features and general functions of the pelvic viscera in females (bladder, uterus, uterine tube, ovary, cervix, vagina, and rectum).
- `ANAT-PELVIS-LAB.10` → rp1 — Describe the anatomical features and general functions of the pelvic viscera in males (bladder, ductus deferens, seminal vesicles, prostate, rectum).
- `ANAT-PELVIS-LAB.11` → rp1 — Describe the gross anatomy of the uterus, including its parts, position, layers, ligaments, pouches & related clinical applications.
- `ANAT-PELVIS-LAB.12` → rp1 — Describe the gross anatomy of the ovary, including its position, ligaments & related clinical applications.
- `ANAT-PELVIS-LAB.13` → rp1,rp19 — Describe the gross anatomy of the testis, epididymis, ductus deferens, and prostate & related clinical applications.
- `HP-UTERUS-OVARY.1` → rp8,rp14,rp15 — Describe the microscopic organization of the ovary, uterine tube, and uterus.
- `HP-UTERUS-OVARY.2` → rp8 — Relate histological changes in the ovary, uterine tubes, and uterus to the ovarian cycle, menstrual cycle, and pregnancy.
- `HP-UTERUS-OVARY.3` → rp9,rp14,rp15,rp11 — Explain how altered structure/function leads to clinical consequences (e.g., follicular cysts, tubal infertility, endometriosis, abnormal uterine bleeding, menopause).
- `HP-UTERUS-OVARY.4` → rp5 — Recognize congenital and developmental anomalies of the uterus and their clinical implications.
- `HP-UTERUS-OVARY.5` → rp14,rp9 — Explain the pathophysiology and clinicopathologic features of functional disorders, including polycystic ovary syndrome, endometrial hyperplasia, adenomyosis, and endometriosis.
- `HP-UTERUS-OVARY.6` → rp16,rp14 — Discuss pelvic inflammatory disease and infections of the uterine tubes and endometrium: common pathogens, pathogenesis, morphology, and complications.
- `HP-UTERUS-OVARY.7` → rp14 — Compare benign and malignant uterine tumors (e.g., leiomyomas vs. leiomyosarcomas), including morphology, clinical course, and prognosis.
- `HP-UTERUS-OVARY.8` → rp14 — Differentiate between type I and type II endometrial carcinomas in terms of risk factors, molecular basis, morphology, and outcomes, and relate type I to hereditary nonpolyposis colorectal carcinoma (Lynch syndrome).
- `HP-UTERUS-OVARY.9` → rp14 — Recognize the features and molecular alterations of uterine carcinosarcoma (malignant mixed Müllerian tumor).
- `HP-UTERUS-OVARY.10` → rp15 — Describe the embryologic/histologic components of the ovary (surface epithelium, germ cells, sex cord–stromal cells) as the basis for tumor classification.
- `HP-UTERUS-OVARY.11` → rp15 — Identify risk factors, hereditary cancer syndromes, and molecular mechanisms underlying epithelial, sex cord–stromal, and germ cell ovarian tumors.
- `PHYS-MENSTRUAL.1` → rp8 — Explain the process of various types of estrogen development, including precursors, cell function, and enzymes.
- `PHYS-MENSTRUAL.2` → rp8 — Explain oogenesis and follicular development, including the process of Meiosis.
- `PHYS-MENSTRUAL.3` → rp8 — Explain the origin and role of the following hormones: follicle stimulating hormone, luteinizing hormone, estradiol, progesterone, gonadotropin releasing hormone.
- `PHYS-MENSTRUAL.4` → rp8 — Identify the following hormones on a menstrual cycle graph: follicle stimulating hormone, luteinizing hormone, estradiol, progesterone, gonadotropin releasing hormone.
- `PHYS-MENSTRUAL.5` → rp8 — List the uterine and ovarian changes during the menstrual cycle and role of the corpus luteum.
- `PATHPHARM-MENSES-CONTRA.1` → rp9 — Describe common menstrual disorders like abnormal uterine bleeding, amenorrhea, dysmenorrhea, and endometriosis and explain the diagnostic approach for evaluating menstrual abnormalities including hormonal testing and imaging.
- `PATHPHARM-MENSES-CONTRA.2` → rp10 — Compare hormonal contraceptive and other hormonally acting therapies in terms of mechanism of action, efficacy, indications, contraindications, and adverse effects.
- `PATHPHARM-MENSES-CONTRA.3` → rp10 — Explain the pharmacology of medications used for emergency contraception and induced abortion, including their mechanism of action and adverse effects.
- `PATHPHARM-MENSES-CONTRA.4` → rp29,rp10 — Develop a foundational understanding of discussing sensitive topics surrounding sexual health in adults and adolescents, how to discuss consent, and counseling on sexual health topics like contraception.
- `ANAT-PERINEUM-LEC.1` → rp2 — Differentiate the subdivisions of the perineum (urogenital and anal regions) based on their boundaries and spatial orientation.
- `ANAT-PERINEUM-LEC.2` → rp2 — Describe the attachment of the perineal membrane.
- `ANAT-PERINEUM-LEC.3` → rp2 — Describe the anatomical boundaries and contents of the deep and superficial perineal pouches.
- `ANAT-PERINEUM-LEC.4` → rp2 — Compare the blood supply, venous drainage, nerve supply and lymphatic drainage of the anal canal with particular attention to the differences superior and inferior to the pectinate line.
- `ANAT-PERINEUM-LEC.5` → rp2 — Describe the anatomy of female external genitalia (mons pubis, labia majora, labia minora, vestibule, clitoris, urethra, bulbs of the vestibule, greater vestibular (Bartholin's) glands, vagina).
- `ANAT-PERINEUM-LEC.6` → rp2 — Describe the anatomy of the penis and the course of the male urethra.
- `ANAT-PERINEUM-LEC.7` → rp2 — Explain the innervation, blood supply, and venous drainage of the external genitalia, emphasizing the role of the pudendal nerves and vessels.
- `ANAT-PERINEUM-LEC.8` → rp2 — Trace the lymphatic drainage of pelvic and perineal organs in males and females, including the clinical applications of affected lymph nodes in various invasive cancers and infections of internal pelvic structures.
- `ANAT-PERINEUM-LEC.9` → rp2 — Describe the autonomic innervation of the pelvic & perineal regions and the effects of sympathetic vs. parasympathetic input on pelvic organs.
- `ANAT-EXTGEN-LAB.1` → rp1,rp2 — Explain the function of the pelvic floor, its innervation, and its two major muscles.
- `ANAT-EXTGEN-LAB.2` → rp2 — Explain the subdivisions of the perineum (urogenital and anal regions), the borders of these regions, and their spatial orientation.
- `ANAT-EXTGEN-LAB.3` → rp2 — Name the fascial layer that separates the superficial from the deep perineal spaces (perineal membrane), discussing its attachments.
- `ANAT-EXTGEN-LAB.4` → rp2 — Explain the importance of these fascial layers in the spread of fluids during trauma, such as urethral rupture.
- `ANAT-EXTGEN-LAB.5` → rp2 — Describe the anatomy of the vulva in females (mons pubis, labia majora, labia minora, vestibule, clitoris, urethra, bulbs of the vestibule, greater vestibular (Bartholin's) glands, vagina) and their function.
- `ANAT-EXTGEN-LAB.6` → rp2 — Identify the position of the structures that open into the vestibule of the vulva (urethra, vagina, ducts of greater vestibular glands).
- `ANAT-EXTGEN-LAB.7` → rp2 — Identify the components of the penis and the parts and course of the male urethra.
- `ANAT-EXTGEN-LAB.8` → rp2 — Describe the innervation of the genitalia via the pudendal nerve and the relationship of the nerve to the ischial spine.
- `ANAT-EXTGEN-LAB.9` → rp2 — Explain the innervation of the internal and external urethral sphincters.
- `ANAT-EXTGEN-LAB.10` → rp2 — Describe the innervation, blood supply, lymphatic and venous drainage of the external male and female genital structures, explaining how this correlates clinically with the spread of malignancies or infection.
- `HP-MALE.1` → rp19 — Describe the microscopic structure of the testis.
- `HP-MALE.2` → rp19 — Correlate the structure, location, and function of germ cells (spermatogonia, spermatocytes, spermatids, spermatozoa), Sertoli cells, and Leydig cells.
- `HP-MALE.3` → rp19 — Explain the processes and regulation of spermatogenesis and spermiogenesis.
- `HP-MALE.4` → rp19 — Correlate the microscopic organization and function of the rete testis, ductuli efferentes, epididymis, and ductus deferens, seminal vesicles, prostate gland, and bulbourethral glands.
- `HP-MALE.5` → rp19 — Predict how structural alterations in the male reproductive duct system and accessory glands (rete testis, ductuli efferentes, epididymis, ductus deferens, seminal vesicles, prostate gland, and bulbourethral glands) affect reproductive function.
- `HP-MALE.6` → rp19 — Relate the microscopic structure of the penis to its function
- `HP-MALE.7` → rp21,rp5 — Discuss the morphology, consequences, and type of management (pharmacologic, non-pharmacologic, surgical) of phimosis, hypospadias, and epispadias.
- `HP-MALE.8` → rp21,rp16,rp17 — List the common causes of penile infections, both sexually transmitted and acquired through other routes.
- `HP-MALE.9` → rp21 — Describe the underlying abnormality causing Peyronie disease, the clinical consequences, and its treatment type (pharmacologic, non-pharmacologic, surgical)
- `HP-MALE.10` → rp5,rp20 — Name the structure through which the testes descend during fetal development and what is brought with the testes in the descent.
- `HP-MALE.11` → rp20 — Describe the complications associated with cryptorchidism.
- `HP-MALE.12` → rp20 — Describe the clinical features and pathologic findings in the testis that occur due to torsion of the spermatic cord.
- `HP-MALE.13` → rp20 — Discuss several inflammatory conditions affecting the testis and epididymis and the clinicopathologic features associated with each.
- `HP-MALE.14` → rp20 — Compare and contrast the pathogenesis and clinical consequences of disorders related to the tunica vaginalis.
- `HP-MALE.15` → rp21 — Explain the molecular and hormonal origins of prostatic nodular hyperplasia, the area of the gland affected, the natural history of the disease, various treatment strategies, and anticipated outcomes of treatment.
- `HP-MALE.16` → rp21 — Describe the pathophysiologic basis for inflammatory conditions affecting the prostate, including the causative organisms.
- `HP-MALE.17` → rp21 — Explain the spectrum of squamous neoplasia affecting the penis, ranging from condyloma acuminata to invasive squamous cell carcinoma, describing the risk factors, pathogenesis, morphologic features, complications, and treatment strategies.
- `HP-MALE.18` → rp20 — Describe the most important risk factors, genetic associations, molecular basis, and clinicopathologic features for the development of testicular tumors and the different morphologic patterns seen.
- `HP-MALE.19` → rp21 — Describe the cellular phenotype of the typical prostate adenocarcinoma and its molecular and immunohistochemical characteristics.
- `HP-MALE.20` → rp21 — Define the histopathological diagnostic criteria for the diagnosis of prostatic adenocarcinoma.
- `HP-MALE.21` → rp21 — Explain the epidemiology of prostate cancer with respect to age and family history.
- `HP-MALE.22` → rp21 — Compare and contrast the significance of “histological” prostatic adenocarcinoma versus a “clinically significant” adenocarcinoma.
- `PATHPHARM-MALE.1` → rp19 — Identify normal components of the male reproductive system on histologic slides, including the seminiferous tubule, Sertoli cells, Leydig cells, epididymis, prostate, and seminal vesicle.
- `PATHPHARM-MALE.2` → rp19 — Describe the gross anatomy of the male reproductive tract, including prostate zonal anatomy, penile and scrotal structure, and testicular venous and lymphatic drainage, and relate each to the pathology that arises there.
- `PATHPHARM-MALE.3` → rp19 — Outline the stages of spermatogenesis and sperm maturation, and explain how the spermatogenic timeline affects the evaluation and treatment of male infertility.
- `PATHPHARM-MALE.4` → rp19 — Describe hormonal regulation of the male reproductive system, including the hypothalamic-pituitary-gonadal axis, the distinct roles of testosterone, dihydrotestosterone, and inhibin, and the hormonal changes that occur in adulthood and aging.
- `PATHPHARM-MALE.5` → rp19 — Explain the neural, vascular, and molecular mechanisms of erection, emission, ejaculation, and the male sexual response.
- `PATHPHARM-MALE.6` → rp22 — Differentiate primary from secondary hypogonadism using the hypothalamic-pituitary-gonadal axis, and interpret a basic hypogonadism and male infertility laboratory panel.
- `PATHPHARM-MALE.7` → rp20,rp21,rp22 — Explain the clinical presentation, pathophysiology, work-up, diagnosis, and treatment options of the following male reproductive pathologies: benign prostatic hyperplasia, prostatitis, prostate cancer, cryptorchidism, hydrocele, varicocele, epididymal cyst, testicular torsion, testicular rupture, testicular cancer (germ cell and non-germ cell), epididymitis, orchitis, male infertility, phimosis, Peyronie’s disease, traumatic penile injuries, penile cancer, erectile dysfunction, and premature ejaculation.
- `PATHPHARM-MALE.8` → rp22,rp21 — Describe the pharmacology and utilization of alpha-1 blockers, 5-alpha-reductase inhibitors, phosphodiesterase-5-inhibitors, and SSRIs.
- `PATHPHARM-MALE.9` → rp22,rp21 — Describe the indications, mechanisms, and major adverse effects of androgen therapy and antiandrogen therapy, including androgen deprivation therapy for prostate cancer.
- `HP-CERVIX-VULVA.1` → rp13 — Correlate the histological structure of the cervix with its function.
- `HP-CERVIX-VULVA.2` → rp13 — Predict functional outcomes that result from altered structure and function of the uterine cervix (e.g., cervical cancer).
- `HP-CERVIX-VULVA.3` → rp12 — Correlate the histological structure of the vagina with its functions.
- `HP-CERVIX-VULVA.4` → rp12 — Correlate the histological structure of greater vestibular (Bartholin’s) glands and paraurethral glands with their functions.
- `HP-CERVIX-VULVA.5` → rp12,rp16 — Discuss common pelvic infections, including those affecting the vulva, vagina, and cervix, and describe the pathogenesis of these diseases, common organisms involved, and related complications.
- `HP-CERVIX-VULVA.6` → rp12 — List the differential diagnosis for benign and neoplastic lesions of the vulvar epithelium as well as the clinical and pathologic features of each, including lichen sclerosus, squamous cell hyperplasia, vulvar intraepithelial neoplasia, vulvar carcinoma, and extramammary Paget disease.
- `HP-CERVIX-VULVA.7` → rp12 — Describe the clinicopathologic features of vaginal embryonal rhabomyosarcoma (sarcoma botryoides).
- `HP-CERVIX-VULVA.8` → rp13 — Discuss the common human papillomavirus types that affect the cervix and the pathogenesis of cervical dysplasia, neoplasia, cervical screening methods, and prevention.
- `HP-CERVIX-VULVA.9` → rp13 — Describe the morphologic features of the spectrum of cervical dysplasia and neoplasia derived from both cytologic and tissue specimens and clinical outcomes associated with each.
- `PATHPHARM-CERVIX-HPV.1` → rp13 — Describe the screening guidelines for cervical cancer and how to implement them.
- `PATHPHARM-CERVIX-HPV.2` → rp13 — Explain how HPV affects cervical cells and how that progresses over time into cervical cancer.
- `PATHPHARM-CERVIX-HPV.3` → rp13,rp17 — Describe the impact of HIV’s additive risk for HPV infected individuals with respect to cervical and anal cancer screenings.
- `PATHPHARM-CERVIX-HPV.4` → rp13 — Describe the surveillance and possible treatments for abnormal cervical cytology in pre-cancerous abnormalities in addition to prevention measures.
- `PATHPHARM-CERVIX-HPV.5` → rp12,rp16 — Describe the various pathogens that can cause cervicitis and vulvovaginitis and how they develop, including a description of common symptomology, diagnostic workup, and treatment options.
- `PATHPHARM-CERVIX-HPV.6` → rp12 — Explain other vulvar non-cancerous pathologies including how to diagnose and treat.
- `ADNEXAL.1` → rp15 — Define and distinguish between functional and neoplastic adnexal masses using clinical and radiographic criteria.
- `ADNEXAL.2` → rp15 — Identify key clinical signs, symptoms, and imaging findings associated with common benign and malignant adnexal masses.
- `ADNEXAL.3` → rp15 — Interpret transvaginal ultrasound features (e.g., septations, papillary projections, solid components, ascites) to categorize adnexal masses based on risk of malignancy.
- `ADNEXAL.4` → rp15 — (duplicate of ADNEXAL.3 on the Canvas page; map it to the same topic)
- `ADNEXAL.5` → rp15 — Formulate an age and risk-appropriate differential diagnosis for adnexal masses across reproductive stages (prepubertal, reproductive age, postmenopausal).
- `ADNEXAL.6` → rp15 — Develop initial management plans for patients presenting with adnexal masses, incorporating risk stratification and referral guidelines (e.g., when to refer to gynecologic oncology).
- `ADNEXAL.7` → rp15 — Evaluate adnexal mass cases to determine malignancy risk using criteria such as IOTA or ACOG guidelines.
- `ADNEXAL.8` → rp15 — Explain the role of tumor markers (e.g., CA-125, AFP, β-hCG, LDH) in distinguishing types of adnexal tumors in specific clinical scenarios.
- `GYN-ONC.1` → rp15,rp14,rp13,rp12 — Identify risk factors for gynecologic neoplastic conditions, including uterine, ovarian, vulvar, cervical, and vaginal diseases.
- `GYN-ONC.2` → rp15,rp14,rp13,rp12 — Describe initial workup and management for patients with gynecologic neoplastic conditions, including uterine, ovarian, vulvar, cervical, and vaginal diseases.
- `GYN-ONC.3` → rp15,rp14,rp13,rp12 — Discuss pathology and pathophysiology of gynecologic neoplastic conditions, including uterine, ovarian, vulvar, cervical, and vaginal diseases.
- `TBL-STI.1` → rp16,rp17,rp12 — Be able to identify the pathogen responsible and describe the histologic appearance, clinical appearance and symptoms, diagnostic testing, and treatment options for the following infections: condyloma acuminata, molluscum contagiosum, herpes simplex, vulvo-vaginal yeast infection, bacterial vaginosis, trichomonas, chlamydia, gonorrhea, syphilis, chancroid, lymphogranuloma venereum, donovanosis.
- `TBL-STI.2` → rp16 — Explain the common pathogens, clinical presentation, acute and chronic complications, and treatment for pelvic inflammatory disease.
- `TBL-STI.3` → rp18 — Describe the implications of various sexually transmitted infections in pregnancy and the associated congenital findings.
- `VIRAL-STI-TORCH.1` → rp17 — Explain how viruses function as obligate intracellular parasites, utilizing and manipulating host cellular machinery to support their replication and persistence.
- `VIRAL-STI-TORCH.2` → rp17 — Compare the key biological features of retroviruses and DNA viruses, including their mechanisms of persistence, latency, and genome integration within host cells.
- `VIRAL-STI-TORCH.3` → rp17 — Explain the clinical presentation, transmission routes, tissue tropism, and disease outcomes of viral infections, and evaluate the strategies retroviruses and DNA viruses use to evade and subvert host immune responses.
- `VIRAL-STI-TORCH.4` → rp17 — Describe the virology of HIV, how it is transmitted & prevented utilizing behavioral, barrier, and pharmacologic methods.
- `VIRAL-STI-TORCH.5` → rp17 — Describe the virology of HSV, how it is transmitted & prevented utilizing behavioral and pharmacologic methods.
- `VIRAL-STI-TORCH.6` → rp17 — Describe the virology of HPV, how it is transmitted & prevented including via vaccination.
- `VIRAL-STI-TORCH.7` → rp18 — Describe the virology of TORCH infections and their maternal-fetal transmission as well as fetal complications with exposure.
- `VIRAL-STI-TORCH.8` → rp17,rp18 — Understand the clinical screening, symptomatology, and diagnostic testing of HIV, HSV, and HPV in all patients and additionally as it relates to pregnancy.
- `VIRAL-STI-TORCH.9` → rp17 — Explain the main mechanisms, risks, and indications for antiviral medications and preventative antiviral medications related to HIV and HSV.
- `VIRAL-STI-TORCH.10` → rp17 — Explain the main mechanisms, risks, and indications for pharmaceutical treatments for HPV infections, specifically genital warts.
- `MDR-REVIEW.1` → rp14,rp15,rp20,rp21 — Apply knowledge of embryology, anatomy, histology, and pathology to clinical case scenarios in male & female reproductive medicine, demonstrating integration across disciplines for problem-solving and early clinical reasoning.
- `MDR-REVIEW.2` → rp14,rp15,rp20,rp21 — Apply knowledge of neoplasia, including cellular origins and molecular mechanisms, to describe the clinical presentation, biologic behavior, morphologic appearance, classification, diagnosis, prognosis, and treatment (pharmacological, non-pharmacological, surgical) of male and female reproductive neoplasms.
- `EMBRYO-GU.1` → rp5 — Describe the embryologic development of the following structures and their respective homologs: fallopian tubes, uterus, cervix, upper vagina, lower vagina, labia, epididymis, vas deferens, ejaculatory duct, seminal vesicle, ovary, testis, germ cells, penis, clitoris, and urethra.
- `EMBRYO-GU.2` → rp5 — Explain the relationship between embryologic reproductive abnormalities and urologic abnormalities.
- `EMBRYO-GU.3` → rp5 — Explain the origin and role of the Y chromosome, Anti-mullerian hormone, testis determining factor, and androgens in development of the male reproductive system.
- `EMBRYO-GU.4` → rp5 — Characterize the origins of the following female reproductive anomalies: Uterus didelphys, bicornuate uterus, septate uterus, vaginal atresia, Gartner cyst, imperforate hymen, Mullerian Agenesis (Mayer-Rokitansky-Kuster-Hauser syndrome).
- `EMBRYO-GU.5` → rp5,rp20 — Characterize the origins of the following male reproductive anomalies: hypospadias, epispadias, cryptorchidism, hydrocele.
- `EMBRYO-GU.6` → rp6,en11 — Explain the pathophysiology, physical exam findings, and laboratory findings of placental aromatase deficiency, 5-alpha reductase deficiency, androgen insensitivity syndrome, congenital adrenal hyperplasia, and Swyer syndrome.
- `MENOPAUSE.1` → rp11 — Define the stages of the reproductive life cycle.
- `MENOPAUSE.2` → rp11 — Explain the pathophysiology of common menopausal symptoms (vasomotor, genitourinary, sleep, mood, cognition, and sex dysfunction).
- `MENOPAUSE.3` → rp11 — Explain the health effects of estrogen deficiency on bone health, cardiovascular health, cognition, and GU health.
- `MENOPAUSE.4` → rp11,en10 — Describe pathophysiology of osteoporosis.
- `MENOPAUSE.5` → rp11 — Describe bleeding pattern changes during perimenopause & menopause.
- `MENOPAUSE.6` → rp11 — Differentiate the clinical indications, contraindications, and adverse effects of estrogen-only versus combined estrogen-progestin therapy.
- `MENOPAUSE.7` → rp11 — Explain the main mechanisms, risks, and clinical utility of some non-hormonal pharmacological therapies utilized for menopausal vasomotor symptoms.
- `MENOPAUSE.8` → rp11 — Select the most appropriate menopausal pharmacotherapy for a patient by analyzing comorbid conditions and individual risk stratification.
- `MENOPAUSE.9` → rp11 — Characterize the evidence-based medicine lab work in menopause diagnosis/care.
- `MENOPAUSE.10` → rp11,en10 — Explain preventative health items in menopause: osteoporosis prevention & monitoring, cardiovascular risk reduction, cancer screening and immunizations.
- `MENOPAUSE.11` → rp11 — Describe how to evaluate postmenopausal bleeding.
- `MENOPAUSE.12` → rp11 — Describe menopause mimics and other conditions to rule out.
- `MENOPAUSE.13` → rp11 — Explore the impact of the Women’s Health Initiative study on menopause education & training and subsequent care of menopausal women.
- `MENOPAUSE.14` → rp11 — Describe disparities in the care of menopausal symptoms.
- `MENOPAUSE.15` → rp11 — Explore how the impact of wellness/influencers intersects with evidenced based medicine.
- `EMBRYO-CLIN.1` → rp4 — Differentiate between embryonic/fetal age & gestational age.
- `EMBRYO-CLIN.2` → rp4 — Describe the major events of the first three weeks of human development, including fertilization, cleavage, implantation, and gastrulation.
- `EMBRYO-CLIN.3` → rp4 — Explain the formation and derivatives of the three germ layers while correlating them with clinically relevant congenital anomalies.
- `EMBRYO-CLIN.4` → rp4 — Describe the development and functions of extraembryonic membranes and the placenta during early pregnancy.
- `EMBRYO-CLIN.5` → rp4 — Explain the establishment of maternal-fetal circulation and the endocrine functions of the placenta.
- `EMBRYO-CLIN.6` → rp4 — Apply embryologic principles to interpret abnormalities of implantation and placentation, including ectopic pregnancy, placenta previa, and placenta accreta.
- `EMBRYO-CLIN.7` → rp5 — Describe the embryologic origins of the gonads, genital ducts, and external genitalia.
- `EMBRYO-CLIN.8` → rp5 — Explain the molecular and hormonal mechanisms of sex determination and sexual differentiation, including the roles of SRY and AMH.
- `EMBRYO-CLIN.9` → rp5 — Differentiate the derivatives of the mesonephric (Wolffian) and paramesonephric (Müllerian) ducts in males and females.
- `EMBRYO-CLIN.10` → rp5,rp6 — Analyze the embryologic basis of common congenital malformations of the reproductive system, including cryptorchidism, hypospadias, Müllerian anomalies, and disorders of sexual development.
- `EMBRYO-CLIN.11` → rp4,rp5,rp6 — Integrate embryologic, placental, and reproductive developmental concepts to solve clinical and USMLE Step 1-style questions involving congenital abnormalities and reproductive disorders.
- `TRANSGENDER-LEC.1` → rp29 — Describe the different gender terminologies as it relates to the spectrum of gender identity differentiating between old and new terminology being mindful of patient preferences as to which terminology best fits an individual and referring to that individual per their gender identified preferences.
- `TRANSGENDER-LEC.2` → rp29 — Define legal considerations related to the care of transgendered individuals and the use of gender terminologies.
- `TRANSGENDER-LEC.3` → rp29 — Explain reproductive considerations for transgendered individuals including applicable forms of contraception, fertility preservation options, and risk of sexual infections.
- `TRANSGENDER-LEC.4` → rp29 — Describe pharmaceutical therapies used in medical transition (Feminizing therapy, Masculinizing therapy, and Puberty Blockers) and explain their mechanism of action, side effects, purpose, and monitoring considerations.
- `TRANSGENDER-LEC.5` → rp29 — Explain surgical transition options for transgendered individuals including indications and risk.
- `TRANSGENDER-LEC.6` → rp29 — Describe what preventative care recommendations are applicable to transgendered individuals after taking an organ inventory and sexual history.
- `TBL-PUBERTY.1` → rp7 — Identify Tanner stages.
- `TBL-PUBERTY.2` → rp7 — Explain the terminology (“-arches”) and physical findings of secondary sexual characteristics and the hormones responsible.
- `TBL-PUBERTY.3` → rp7 — Explain how puberty is regulated by the hypothalamic-pituitary-gonadal axis in males and females.
- `TBL-PUBERTY.4` → rp7 — Describe the normal sequence of pubertal development in boys and girls.
- `TBL-PUBERTY.5` → rp7 — Define precocious puberty and describe the etiologies, physical exam findings, work-up, and diagnosis for central (true) precocious puberty, peripheral (pseudo) precocious puberty, and delayed puberty in both males and females.
- `TBL-PUBERTY.6` → rp7 — Explain variants of normal that are common.
- `TBL-PUBERTY.7` → rp6,rp7 — Identify sex chromosome disorders of puberty.
- `LIFESPAN-PANEL.1` → rp29 — Describe common health-care needs, disparities, and barriers experienced by LGBTQ+ and transgender patients.
- `LIFESPAN-PANEL.2` → rp29 — Demonstrate respectful, patient-centered communication, including appropriate use of names, pronouns, and inclusive language.
- `LIFESPAN-PANEL.3` → rp29 — Discuss ethical and legal considerations relevant to LGBTQ+ and transgender health care.
- `LIFESPAN-PANEL.4` → rp29 — Recognize the multidisciplinary nature of LGBTQ+ and transgender health care and identify when referral or collaboration may be appropriate.
- `LIFESPAN-PANEL.5` → rp29 — Reflect on how personal assumptions and health-care environments can influence the patient experience and quality of care.
- `MATERNAL-PHYS.1` → rp25 — Describe the normal physiologic cardiovascular changes associated with pregnancy, including the impact on systemic vascular resistance, cardiac output, heart rate, blood pressure, and stroke volume.
- `MATERNAL-PHYS.2` → rp25 — Describe the normal physiologic pulmonary changes that occur during pregnancy and explain the etiology for these changes (hormonal vs structural vs metabolic), including the impact on respiratory acid/base status, residual volume, total lung capacity, functional residual capacity, tidal volume, respiratory rate.
- `MATERNAL-PHYS.3` → rp25 — Describe the normal physiologic hematologic changes that occur during pregnancy, including red blood cell volume, white blood cell volume, plasma volume, coagulation factors, and hemoglobin.
- `MATERNAL-PHYS.4` → rp25 — Describe the normal physiologic musculoskeletal and gastrointestinal changes associated with pregnancy.
- `MATERNAL-PHYS.5` → rp25 — Describe the normal physiologic renal and urinary changes associated with pregnancy.
- `LABOR-DELIVERY.1` → rp28 — Cite the hormones responsible for the onset of labor, including where these hormones originate.
- `LABOR-DELIVERY.2` → rp28 — Explain the role of gap junctions in concerted uterine contractions.
- `LABOR-DELIVERY.3` → rp28 — Describe the 3 stages of labor, the cardinal movements of labor, and the potential complications that can occur during or immediately after delivery (postpartum hemorrhage, shoulder dystocia).
- `LABOR-DELIVERY.4` → rp28 — Explain the normal blood loss in a vaginal delivery, and the amount that would be considered a postpartum hemorrhage, as well as the role of pitocin in preventing postpartum hemorrhage.
- `LABOR-DELIVERY.5` → rp28 — Cite the cervical roots of the brachial plexus most commonly damaged during a shoulder dystocia, and explain the clinical presentation of those injuries.
- `LABOR-DELIVERY.6` → rp28,rp1 — Cite pelvic floor anatomy in grading of perineal lacerations that may occur at birth.
- `TBL-EARLY-PREG.1` → rp25,rp4 — Explain the role of human chorionic gonadotropin (hCG) and progesterone in the establishment and maintenance of early pregnancy.
- `TBL-EARLY-PREG.2` → rp30,rp26 — Calculate gestational age and apply pregnancy dating concepts to common clinical scenarios.
- `TBL-EARLY-PREG.3` → rp26 — Identify normal first-trimester ultrasound findings, including the gestational sac, yolk sac, fetal pole, and cardiac activity.
- `TBL-EARLY-PREG.4` → rp26 — Interpret early pregnancy findings using patient history, β-hCG measurements, and ultrasound results.
- `TBL-EARLY-PREG.5` → rp26 — Distinguish among normal intrauterine pregnancy, pregnancy loss, ectopic pregnancy, and gestational trophoblastic disease.
- `TBL-EARLY-PREG.6` → rp26 — Describe the pathophysiology, risk factors, common clinical presentation, and potential complications of ectopic pregnancy.
- `TBL-EARLY-PREG.7` → rp26 — Apply a clinical framework to determine whether a pregnancy is present, intrauterine, viable, and/or requires urgent evaluation.
- `PRENATAL-CARE.1` → rp30 — Describe the nomenclature to establish gravity and parity for pregnancy history (GxPxxxx).
- `PRENATAL-CARE.2` → rp30 — Explain options for aneuploidy screening and interpret results.
- `PRENATAL-CARE.3` → rp30 — Describe which ultrasound parameter is used to determine gestational age in the first trimester and how gestational age is determined in subsequent trimesters.
- `PRENATAL-CARE.4` → rp30 — Distinguish the gestational ages at which a patient is term, preterm, and post-term.
- `PRENATAL-CARE.5` → rp30 — Explain the components of an accurate and thorough history in a pregnant patient.
- `PRENATAL-CARE.6` → rp30 — Cite common questions elicited from patients and physical exam components performed during routine prenatal visits based upon trimester.
- `PRENATAL-CARE.7` → rp30 — Cite routine ultrasound and laboratory studies performed based upon trimester.
- `PRENATAL-CARE.8` → rp30 — Cite common immunizations that are recommended in pregnancy, as well as those that are contraindicated in pregnancy.
- `PRENATAL-CARE.9` → rp30 — Explain the role of folic acid in fetal development, and understand screening and diagnostic tests that can be performed to evaluate neural tube abnormalities.
- `PRENATAL-CARE.10` → rp28 — Describe the equipment used to monitor the fetal heart rate and contractions during a non-stress test and labor.
- `PRENATAL-CARE.11` → rp28 — List the components of a cervical exam for evaluation of labor, understand the role of the Bishop score in cervical assessment.
- `PRENATAL-CARE.12` → rp28 — Understand which medications that can be used for cervical ripening and explain their pharmacologic effects.
- `PRENATAL-CARE.13` → rp28 — Explain Leopold maneuvers, how to assess for fetal positioning, and options available to patients with a fetus in breech position at term.
- `PRENATAL-CARE.14` → rp18 — Explain the risk of genital HSV in pregnancy and how it determines delivery mode as well as what pharmacologic agent is used to decrease risk.
- `PRENATAL-CARE.15` → rp18 — Describe the importance of Group B Strep identification in pregnancy and pharmacologic treatment during delivery as well as the method of neonatal sepsis prevention.
- `PRENATAL-CARE.16` → rp28,rp27 — Explain the role of antepartum fetal assessment (non-stress test, biophysical profile) and induction of labor to prevent poor maternal/fetal outcomes.
- `PRENATAL-CARE.17` → rp28 — Describe various methods for pain reduction in labor, including the pros/cons of systemic vs regional vs local methods.
- `THIRD-TRI.1` → rp27 — Define normal blood pressure in pregnancy, as well as clinical signs/symptoms and laboratory findings that differentiate gestational hypertension, pre-eclampsia without severe features, pre-eclampsia with severe features, and HELLP syndrome.
- `THIRD-TRI.2` → rp27 — Cite common signs and symptoms of pre-eclampsia and treatment.
- `THIRD-TRI.3` → rp27,rp4 — Cite the hormone responsible for insulin resistance in pregnancy, and what the evolutionary advantage is for increased insulin resistance.
- `THIRD-TRI.4` → rp27 — Explain how to screen for gestational diabetes, who to screen, when to screen, and why to screen.
- `THIRD-TRI.5` → rp27 — Explain risk factors and potential maternal/fetal complications resulting from gestational diabetes.
- `THIRD-TRI.6` → rp27 — Describe the pathophysiology of disorders of placentation including placenta previa, placenta accreta/increta/percreta, and abruptio placentae and how they complicate pregnancy
- `GTD.1` → rp26 — Identify risk factors for molar pregnancy.
- `GTD.2` → rp26 — Identify risk factors for gestational trophoblastic disease.
- `GTD.3` → rp26 — Describe initial workup and management for patients with molar pregnancy.
- `GTD.4` → rp26 — Describe initial workup and management for patients with gestational trophoblastic disease.
- `GTD.5` → rp26 — Discuss pathology and pathophysiology of molar pregnancy.
- `GTD.6` → rp26 — Discuss pathology and pathophysiology of gestational trophoblastic disease.
- `DELIVERY-SIM.1` → rp28 — Perform a simulated vaginal delivery with a mannequin.
- `LIFESPAN-CASES.1` → rp29 — Describe how historical abuses and inequities in medical care and research have contributed to contemporary concerns regarding trust, informed consent, and reproductive health.
- `LIFESPAN-CASES.2` → rp29 — Analyze reproductive health issued from ethical, legal, clinical, psychosocial, and health-equity perspectives.
- `LIFESPAN-CASES.3` → rp29 — Explain how historical and structural factors can influence a patient's experience of the health care system.
- `LIFESPAN-CASES.4` → rp29 — Identify strategies physicians can use to provide ethical, patient-centered, culturally responsive, and trauma-informed care.
- `LIFESPAN-CASES.5` → rp29 — Recognize that legal requirements, ethical principles, and clinical decision-making may not always address the same questions or arrive at the same conclusions.
- `BREAST-HISTO.1` → rp24,rp23 — Identify common histologic findings associated with benign and malignant breast disease.
- `BREAST-HISTO.2` → rp24 — Identify normal ducts, ductal carcinoma in situ, invasive ductal carcinoma, normal lobules, lobular carcinoma in situ, and invasive lobular carcinoma on histology.
- `BREAST-HISTO.3` → rp24 — Explain the importance of estrogen receptor, progesterone receptor, HER2 status in breast cancer development and treatment.
- `BREAST-HISTO.4` → rp24 — Describe the molecular signaling network of HER2, its role in breast cancer development/propagation, and therapies directed at HER2 positive breast cancers.
- `ANAT-BREAST.1` → rp3 — Identify the gross anatomy morphology of the breast, including lobule, lactiferous duct, alveoli, nipple, areola, Montgomery's tubercle, ampulla (lactiferous sinus), Cooper's (suspensor) ligaments, and subcutaneous fat.
- `ANAT-BREAST.2` → rp3 — Identify the following on the clinical exam of the breast: nipple, areola, axillary tail.
- `ANAT-BREAST.3` → rp3 — Explain the relationship between the breast, pectoral fascia, and retromammary space.
- `ANAT-BREAST.4` → rp3 — Explain the blood supply, vascular and lymphatic drainage, and innervation of the breast, applying the knowledge to the clinical breast exam.
- `TBL-BREAST.1` → rp3 — Describe the normal histology of the mammary gland.
- `TBL-BREAST.2` → rp3 — Relate the cellular organization to the breast function.
- `TBL-BREAST.3` → rp23 — Identify the most frequently diagnosed breast lesions by age of the patient, based on the most common clinical presentations in men versus women.
- `TBL-BREAST.4` → rp23 — Discuss silicone breast implants in terms of the morphologic changes in the adjacent breast and the risk of subsequent autoimmune disease and cancer.
- `TBL-BREAST.5` → rp23 — Compare and contrast inflammatory breast conditions in terms of etiology, pathogenesis, morphology, and clinical features.
- `TBL-BREAST.6` → rp23 — Discuss the clinical significance of proliferative and non-proliferative breast changes, with and without atypia.
- `TBL-BREAST.7` → rp23,rp24 — Describe how each of the proliferative and non-proliferative breast changes and the family history affects the subsequent risk of developing breast cancer.
- `TBL-BREAST.8` → rp23 — Describe the clinical features of congenital and developmental disorders of the breast.
- `TBL-BREAST.9` → rp23 — Compare and contrast fibroadenoma and phyllodes tumor in terms of clinical features, morphologic findings, and prognosis.
- `TBL-BREAST.10` → rp24 — Describe the proposed precursor-carcinoma sequence in breast cancer.
- `TBL-BREAST.11` → rp24 — Identify the characteristic morphologic changes in the proposed precursor-carcinoma sequence in breast cancer.
- `TBL-BREAST.12` → rp24 — Compare and contrast ductal carcinoma in situ (DCIS) and lobular carcinoma in situ (LCIS) in terms of incidence, clinical presentation, morphology, biomarker expression, pattern of spread, natural history, treatment, and prognosis.
- `TBL-BREAST.13` → rp24 — Describe the normal function of the gene product, incidence of gene mutation, reasons for its association with cancer, percentage of hereditary breast cancer, and risk of breast cancer by age 70 for the most common breast cancer susceptibility genes.
- `TBL-BREAST.14` → rp24 — Explain the major molecular classes of invasive ductal carcinoma of the breast identified by gene expression profiling.
- `TBL-BREAST.15` → rp24 — Describe how the major molecular classes of invasive ductal carcinoma correlates with prognosis and response to therapy.
- `TBL-BREAST.16` → rp24 — Compare and contrast invasive ductal carcinoma, invasive lobular carcinoma, medullary carcinoma, colloid (mucinous) carcinoma, tubular carcinoma, and metaplastic carcinoma of the breast in terms of incidence, age predilection, etiology, pathogenesis, clinical presentation, gross and microscopic morphology, grade, molecular classification, patterns of spread, clinical course, prognostic indicators, treatment options, and survival rates, indicating which are more common in men versus women.
- `TBL-BREAST.17` → rp24 — Explain the prognosis and likelihood of recurrence and response to therapy for patients having breast cancer based on knowledge of molecular classification and/or gene expression profiling, morphologic classification, grade, prognostic marker studies, and other predictive factors.
- `PREG-REVIEW.1` → rp25,rp27,rp28 — Apply knowledge of female anatomy, normal pregnancy, maternal physiology, and pathologies of pregnancy including labor and delivery to demonstrate an integration across disciplines for problem-solving and early clinical reasoning.
- `PREG-REVIEW.2` → rp30 — Apply your knowledge on how to best determine gestational age during pregnancy.
- `PREG-REVIEW.3` → rp30 — Apply your knowledge on what medications should be discontinued due to the risk of spontaneous abortion and fetal malformations when taken in the first trimester.
- `PREG-REVIEW.4` → rp30 — Explain the importance of folic acid supplementation prior to and during pregnancy.
- `PREG-REVIEW.5` → rp30 — Describe the types of genetic testing available and when these tests are performed.
- `PREG-REVIEW.6` → rp25 — Describe what changes pregnancy has on the endocrine, cardiovascular, pulmonary, renal and gastrointestinal systems.
- `PREG-REVIEW.7` → rp27,rp25 — Describe the normal progression of blood pressure throughout pregnancy.
- `PREG-REVIEW.8` → rp27 — Apply your knowledge on how to diagnose pre-eclampsia, eclampsia and HELLP syndrome and the importance of magnesium sulfate therapy.
- `PREG-REVIEW.9` → rp27 — Apply your knowledge to describe importance of Rh status during pregnancy, how isoimmunization is prevented and how becoming iso-immunized can affect future pregnancies.
- `PREG-REVIEW.10` → rp27 — Recite the risk factors for the various complications that can occur in the third trimester including gestational diabetes, pre-eclampsia and preterm labor.
- `PREG-REVIEW.11` → rp27 — Describe importance of blood sugar control in both pregestational and gestational diabetes, how gestational diabetes is diagnosed, its etiology and the risks postpartum.
- `PREG-REVIEW.12` → rp27,rp30 — Apply your knowledge on screening for appropriate fetal growth including how uterine size correlates with gestational age.
- `PREG-REVIEW.13` → rp30 — Recite which immunizations are indicated and contraindicated in pregnancy.
- `PREG-REVIEW.14` → rp18,rp17 — Apply your knowledge on which infections are relevant to pregnancy, how to determine immune status, and the effects infection can have on pregnancy (parvovirus B19, CMV, HIV, HSV2, varicella, rubella, hepatitis B and C).
- `PREG-REVIEW.15` → rp27 — Differentiate placental disorders of pregnancy and why their diagnosis prenatally is important.
- `PREG-REVIEW.16` → rp30 — Describe the most common congenital fetal anomalies by organ system and how they are identified prenatally.
- `PREG-REVIEW.17` → rp27 — Apply your knowledge to characterize several skin disorders that can occur in the third trimester and their impact on pregnancy.
- `PREG-REVIEW.18` → rp28 — Recite the three stages of labor and how to identify the abnormal progression of labor.
- `PREG-REVIEW.19` → rp28 — Apply your knowledge to describe the cardinal movements of labor and the complications that can occur during delivery of the fetus as well as disorders of the 3rd stage of labor.
- `SIM-COLPO.1` → rp13 — Describe the difference between screening, diagnosis, and treatment, and apply this to early detection and prevention of gynecologic malignancies
- `SIM-COLPO.2` → rp13,rp14 — Perform the following procedures: endometrial biopsy, dilation and curettage, hysteroscopy, colposcopy with biopsy, LEEP
- `SIM-COLPO.3` → rp13 — Understand the clinical implications for not being able to sample the transformation zone during a pap smear
- `ENDO-DM.1` → en14 — Explain the histology and function of the islets of Langerhans.
- `ENDO-DM.2` → en14 — Explain insulin and glucagon synthesis and sites of production.
- `ENDO-DM.3` → en14 — Explain the physiologic actions of insulin and glucagon.
- `ENDO-DM.4` → en14 — Explain the regulation of insulin and glucagon release.
- `ENDO-DM.5` → en14 — Identify insulin target tissues and relevant physiological effects of insulin secretion.
- `ENDO-DM.6` → en15 — Understand the etiology and risk factors for type 1 and type 2 diabetes.
- `ENDO-DM.7` → en15 — Describe the pathophysiology and symptoms of type 1 and type 2 diabetes.
- `ENDO-DM.8` → en16 — Describe the mechanistic basis for changes in vital signs and electrolytes in patients with DKA.
- `ENDO-DM.9` → en16 — Discuss the acute management of DKA and potential complications associated with treatment.
- `ENDO-DM.10` → en15 — Define normoglycemia and outline the diagnostic criteria for diabetes.
- `ENDO-DM.11` → en16 — Describe hyperosmolar hyperglycemic state (HHS).
- `ENDO-DM.12` → en17,en15 — Discuss the long-term management and treatment of type 1 and type 2 diabetes and its complications.
- `ENDO-THYROID.1` → en5 — Understand the anatomy, synthesis, and regulation of Thyroid hormones.
- `ENDO-THYROID.2` → en7,en6 — Identify relevant histopathology.
- `ENDO-THYROID.3` → en6 — Identify the various causes, pathophysiology and treatment of hyperthyroidism and hyperthyroid crisis.
- `ENDO-THYROID.4` → en7,en5 — Understand the investigations associated with Thyroid disorders, nodules and thyroid cancer.
- `ENDO-THYROID.5` → en7,en5 — Identify the pathophysiology and treatment of hypothyroidism, myxedema coma and understand pregnancy-related changes.
- `ENDO-THYROID.6` → en9 — Understand the presentations of primary hyperparathyroidism.
- `ENDO-ADRENAL.1` → en11 — Learn relevant anatomy and embryology of adrenal glands,
- `ENDO-ADRENAL.2` → en12 — Understand pathophysiology of adrenal insufficiency and treatment.
- `ENDO-ADRENAL.3` → en12 — Define polyglandular autoimmune syndromes.
- `ENDO-ADRENAL.4` → en11 — Understand steroid synthesis pathways and pathology of congenital adrenal hyperplasia (CAH).
- `ENDO-ADRENAL.5` → en11 — Describe the varying clinical features of CAH and how they relate to hormonal abnormalities.
- `ENDO-ADRENAL.6` → en13 — Understand hormonal causes of hypertension – Primary hyperaldosteronism and pheochromocytoma.
- `ENDO-ADRENAL.7` → en13,en18 — Describe the genetic features, cellular origins, and presentation and treatment of pheochromocytoma.
- `ENDO-PITUITARY.1` → en2 — Understand the anatomy, cell types of the pituitary and hormones secreted.
- `ENDO-PITUITARY.2` → en2,en3 — Identify the visual pathways and vision disturbance caused by a pituitary tumor.
- `ENDO-PITUITARY.3` → en2,en3 — Understand the Hypothalamic-Pituitary axis and its disturbances.
- `ENDO-PITUITARY.4` → en3 — Identify basic radiology findings of pituitary tumors.
- `ENDO-PITUITARY.5` → en3,en4 — Understand the various causes/ patterns of over and underactive pituitary lesions, including Diabetes insipidus and pituitary apoplexies.
- `ENDO-PHARM.1` → en7 — Differentiate between the treatment modalities for hypothyroidism including the drugs of choice and their clinical pharmacology (pharmacokinetics and pharmacodynamics) in non-pregnant patients.
- `ENDO-PHARM.2` → en7 — Evaluate the clinically-relevant drug and food interactions with levothyroxine sodium.
- `ENDO-PHARM.3` → en12 — Evaluate the pharmacologic treatment of choice for primary and secondary adrenal insufficiency including the agent of choice and its clinical pharmacology.
- `ENDO-PHARM.4` → en17 — Evaluate the weight loss achieved by mechanisms of action among sympathomimetics, appetite suppressants, fat absorption inhibitors and GLP-1 and GIP/GLP-1 receptor agonists.
- `ENDO-PHARM.5` → en17 — Differentiate the pharmacokinetics and pharmacoeconomics of the two currently available oral GLP-1 receptor agonists.
- `ENDO-PHARM.6` → en17 — Predict the adverse effects of weight loss medications based on their mechanism of action.
- `ENDO-PHARM.7` → en17 — Appraise the claim that berberine is 'nature's Ozempic'.
- `ENDO-PHARM.8` → en17 — Distinguish between drugs used for weight gain.
- `ENDO-PHARM.9` → en17 — Explain what the Medicare GLP-1 Bridge allows and doesn't allow for in weight management.
- `ENDO-TBL-DM.1` → en17 — Describe the indications, mechanisms of action, distinctive and adverse effects of medications used to treat type 2 diabetes, and their mechanisms of action.
- `ENDO-TBL-DM.2` → en17 — Identify appropriate initial and add-on therapy for a patient with Type 2 diabetes.
- `ENDO-TBL-DM.3` → en17 — Explain the use of glucose-lowering drugs, including the rationale for multiple drugs instead of insulin.
- `ENDO-TBL-DM.4` → en17 — Identify clinically important interactions involving anti-hyperglycemic medications.
- `BICEP-WILLIAMS.1` → rp9 — Utilize correct terminology for menstrual irregularities
- `BICEP-WILLIAMS.2` → rp9,rp11 — Define heavy menstrual bleeding, irregular menstrual bleeding, and postmenopausal bleeding
- `BICEP-WILLIAMS.3` → rp9 — List a broad differential diagnosis including GI and GU causes and taper it to more specifically focus on the differential diagnoses of abnormal uterine bleeding using PALM-COEIN acronym
- `BICEP-WILLIAMS.4` → rp11,rp9 — Define menopause and explain the difference between menopause and premature ovarian insufficiency
- `BICEP-WILLIAMS.5` → rp11 — Explain the hormonal changes of menopause, including the changes in types and source of estrogens, laboratory findings, resultant histologic changes, clinical findings, and symptoms
- `BICEP-WILLIAMS.6` → rp11 — Understand the historical perspectives of hormonal replacement therapy (HRT), the types of hormones used in HRT, the clinical indications/contraindications, and risks/side-effects.
- `BICEP-WILLIAMS.7` → rp11,rp14 — Develop a differential diagnosis and work-up for postmenopausal bleeding
- `BICEP-WILLIAMS.8` → rp15 — Develop a differential diagnosis and work-up for adnexal mass, including variations in work-up depending upon reproductive age (prepubertal, menstrual, and post-menopausal)
- `BICEP-WILLIAMS.9` → rp15 — Identify ovarian neoplasms based upon serologic markers, histologic and gross pathology
- `BICEP-WILLIAMS.10` → rp14 — List the 2 broad categories of endometrial carcinoma, the typical patient features (age, weight), the morphology (endometrioid vs serous/clear cell/mixed mullerian), and behavior of each type (aggressive vs indolent)
- `BICEP-WILLIAMS.11` → rp15,rp1 — Identify the uterus, endometrium, cervix, and ovaries on transvaginal ultrasound
- `BICEP-WILLIAMS.12` → rp14,rp15,rp13 — List the molecular genetics responsible for gynecologic malignancies (i.e. PTEN, p53, MSH, MLH, E6, E7, BRCA), as well as various inherited disorders (i.e. Cowden, Lynch, BRCA) which predispose patients to gynecologic cancers
- `BICEP-WILLIAMS.13` → rp15,rp14,rp13 — Recognize risk factors and protective factors for gynecologic malignancies
- `BICEP-MISHIMOTO.1` → rp19,rp5 — Explain the normal anatomy of the testicles, scrotum, spermatic cord, vas deferens, and epididymis.
- `BICEP-MISHIMOTO.2` → rp5,rp20 — Understand the embryologic origins of the processus vaginalis/tunica vaginalis.
- `BICEP-MISHIMOTO.3` → rp20,rp5 — Explain the cremasteric reflex.
- `BICEP-MISHIMOTO.4` → rp20 — Develop a differential diagnosis of testicular pain and testicular mass.
- `BICEP-MISHIMOTO.5` → rp20 — Explain the work-up and treatment plan of various pathologies associated with testicular pain.
- `BICEP-BROWN.1` → rp13,rp24,rp16 — Understand the preventative screening services that should be provided to women based on age.
- `BICEP-BROWN.2` → rp24,rp15,rp14,rp13 — Understand the role of family history in assessment for breast, ovarian, colon, and cervical cancers.
- `BICEP-BROWN.3` → rp13 — Explain various screening recommendations for HPV and cervical cancer, including CURRENT USPSTF and ACS recommendations, and understand how to use the ASCCP app for management of abnormal cervical cytology.
- `BICEP-BROWN.4` → rp13,rp17 — List the vaccination for prevention of cervical cancer, what serotypes are included, and what ages this should be offered.
- `BICEP-BROWN.5` → rp16,rp17 — Explain what sexually transmitted infections should be screened in reproductive age patients and how to screen for them.
- `BICEP-BROWN.6` → rp10 — For the following contraceptive options, list the hormones involved (or non-hormonal), explain the mechanism of action, list contraindications, understand general efficacy, explain how to use, and list benefits and risks: pill, patch, ring, injection, progesterone IUD, copper IUD, implant, barrier methods, sterilization.
- `BICEP-BROWN.7` → rp10 — List options for emergency contraception (EC), mechanism of action, window of efficacy, and the difference between EC and abortifacients.
- `BICEP-BROWN.8` → rp29 — Understand components of informed consent for a procedure.
- `BICEP-BROWN.9` → rp29 — Understand components of trauma informed care when obtaining sexual history and performing pelvic/breast exams.
- `BICEP-WEIAND.1` → rp9,rp22 — Define infertility, including differentiating primary vs secondary infertility
- `BICEP-WEIAND.2` → rp9,rp22 — Develop a differential diagnosis and work-up of infertility in males and females
- `BICEP-WEIAND.3` → rp9,rp22 — Explain risk factors for infertility in males and females
- `BICEP-WEIAND.4` → rp22,rp9 — Apply knowledge of hypothalamic-pituitary-gonadal axis to interpret hormone test results for adult males and females
- `BICEP-WEIAND.5` → rp9,rp1 — Apply knowledge of female pelvic anatomy to interpret a hysterosalpingogram
- `BICEP-WEIAND.6` → rp22,rp19 — Apply knowledge of spermatogenesis and testicular histology to interpret semen analysis and testicular biopsy
- `BICEP-WEIAND.7` → rp9,rp22 — Develop treatment options for an infertile couple based upon etiology
- `BICEP-WALSH.1` → rp7 — Explain the terminology and physical findings of secondary sexual characteristics and the hormones responsible.
- `BICEP-WALSH.2` → rp7 — Explain how puberty is regulated by the hypothalamic-pituitary-gonadal axis in males and females.
- `BICEP-WALSH.3` → rp7 — Describe the normal sequence of pubertal development in boys and girls.
- `BICEP-WALSH.4` → rp7 — Describe the hormonal interactions involved in pubertal development in girls and boys.
- `BICEP-WALSH.5` → rp7 — Describe how puberty hormones are responsible for bone age, growth, and epiphyseal fusion.
- `BICEP-WALSH.6` → rp7 — List etiologies for delayed puberty in girls.
- `BICEP-WALSH.7` → rp9,rp7 — Explain the difference between primary amenorrhea and delayed puberty in females.
- `BICEP-WALSH.8` → rp30 — Describe the nomenclature to establish gravity and parity for pregnancy history.
- `BICEP-WALSH.9` → rp9 — Define amenorrhea and establish a differential diagnosis.
- `BICEP-WALSH.10` → rp9 — Explain the difference between primary and secondary amenorrhea and give criteria for each.
- `BICEP-WALSH.11` → rp9,rp6 — Explain pathophysiology and symptoms of hypothalamic abnormalities resulting in amenorrhea (functional hypothalamic amenorrhea and Kallmmann syndrome).
- `BICEP-WALSH.12` → rp9,en3 — Explain pathophysiology and symptoms of pituitary abnormalities resulting in amenorrhea (prolactinoma, Sheehan syndrome, Cushing syndrome, and empty sella).
- `BICEP-WALSH.13` → rp9,rp5 — Explain pathophysiology and symptoms of uterine/vaginal abnormalities resulting in amenorrhea (Asherman, imperforate hymen, vaginal agenesis).
- `BICEP-WALSH.14` → rp9 — Understand the pathophysiology, physical exam findings, and laboratory findings of endocrine etiologies for amenorrhea (obesity, polycystic ovarian syndrome, adrenal tumor, congenital adrenal hyperplasia, thyroid dysfunction).
- `BICEP-WALSH.15` → rp9,rp11 — Define primary ovarian insufficiency and list potential causes.
- `BICEP-WALSH.16` → rp9 — Understand that pregnancy is the most common etiology of amenorrhea.
- `BICEP-WALSH.17` → rp9 — Explain the female athletic triad and the pathophysiology behind these signs/symptoms.
- `BICEP-WALSH.18` → rp9 — Explain the work-up for primary and secondary amenorrhea and the reasoning behind each part.
- `BICEP-WALSH.19` → rp5,rp1 — Identify the uterus, cervix, and vagina on an MRI.
- `BICEP-WALSH.20` → rp8,rp6,rp19 — Understand the physiology behind peripheral conversion of testosterone to estrogen.
- `BICEP-WALSH.21` → rp6 — Identify karyotype and signs/symptoms of sex chromosome disorders of puberty development (Kleinfelter and Turner).
- `BICEP-WALSH.22` → rp6 — Understand the pathophysiology, physical exam findings, and laboratory findings of placental aromatase deficiency, 5alpha-reductase deficiency, and androgen insensitivity syndrome.
- `BICEP-WALSH.23` → rp6,rp29 — Describe the difference between phenotypic sex, genotypic sex and gender identity.
- `BICEP-LEWIS.1` → rp30 — Describe the nomenclature to establish gravity and parity for pregnancy history (GxPxxxx).
- `BICEP-LEWIS.2` → rp30 — Cite risk factors for poor pregnancy outcomes.
- `BICEP-LEWIS.3` → rp26 — Cite a differential diagnosis of vaginal bleeding in the first trimester and explain the work-up.
- `BICEP-LEWIS.4` → rp30 — Explain how to establish gestational age via ultrasound, recite the gestational ages at which a patient is term, preterm, and post-term.
- `BICEP-LEWIS.5` → rp30 — Explain the components of an accurate and thorough history in a pregnant patient.
- `BICEP-LEWIS.6` → rp30,rp18 — Describe common teratogens (medications, environmental exposures, maternal medical conditions, and infections), their complications in embryologic development, and subsequent congenital anomalies.
- `BICEP-LEWIS.7` → rp27 — Define normal blood pressure in pregnancy, as well as clinical signs/symptoms and laboratory findings that differentiate gestational hypertension, pre-eclampsia without severe features, pre-eclampsia with severe features, and HELLP syndrome.
- `BICEP-LEWIS.8` → rp30,rp27 — Explain the risks and complications of substance use in pregnancy (i.e. cocaine, opioids, tobacco, alcohol).
- `BICEP-LEWIS.9` → rp27 — Describe common signs and symptoms of pre-eclampsia and its treatment.
- `BICEP-LEWIS.10` → rp27 — Describe a differential diagnosis for vaginal bleeding in the third trimester, including work-up.
- `BICEP-LEWIS.11` → rp27 — Describe the disorders of placentation (i.e. placenta previa, placenta accreta/increta/percreta, abruptio placentae), and explain the clinical picture of each.
- `BICEP-LEWIS.12` → rp27 — Explain causes for and complications associated with fetal growth restriction.
- `BICEP-LEWIS.13` → rp27 — Explain the pathophysiology, risk factors, consequences, and prevention of alloimmunization in pregnancy.
