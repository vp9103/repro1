# Coverage review, wave 1, slice B (topics rp16-rp30)

Reviewer: fresh Claude reading the accepted lessons content/topics/rp16.json to rp30.json (with their figure captions, glossary and
pretest/grid) against every ACCOUNTABLE objective (TOPIC-MAP rows whose first topic is rp16-rp30, 171 rows) and every blueprint item
BP-rp16-* to BP-rp30-* (213 items, none marked [x]). rp27 and rp28 were accepted at P3.10 (content/topics/rp27.json and rp28.json exist), so all
fifteen topics were reviewed. Course emphasis was checked in scope/lectures/*.md where a deck exists (HP-MALE, PATHPHARM-MALE,
TRANSGENDER-LEC); TBL-BREAST, PRENATAL-CARE, THIRD-TRI, PREG-REVIEW and LABOR-DELIVERY have no extracted deck, so Robbins and
ACOG/CDC standard content were the yardstick. The UNANCHORED parts of audit/P1.4.md (rounds 4 and 6) were treated as parts that
must be taught. Block numbers are the 0-based body indices that `.repro/term_context.py` prints. A verdict is about the accountable
(first) topic; where a listed secondary topic supplies a part, the evidence says so, and the row stays TAUGHT only if that topic is
listed on the objective. Nothing was edited.

Verdicts: TAUGHT = every named part is explained. PARTIAL = a named part is absent or only mentioned (the row says which part and
what one or two sentences of content would fix it). MISSING = not taught (none found). ERROR = factual problem in a block.

## rp16

| id | verdict | where | evidence |
|---|---|---|---|
| HP-UTERUS-OVARY.6 | TAUGHT | b10, b12, b14, b16 (rp14 b34) | Pathogens (chlamydia, gonorrhea, polymicrobial anaerobes, Gardnerella, enteric rods, group B strep; only about half PCR-positive), ascent along mucosa with menstrual thinning of mucus, endometritis (neutrophils in glands, plasma cells in stroma), salpingitis, pyosalpinx, tubo-ovarian abscess, hydrosalpinx, TB salpingitis; complications are tubal-factor infertility, ectopic pregnancy, chronic pelvic pain and Fitz-Hugh-Curtis. Chronic endometritis (plasma cells; IUD, retained tissue, TB) is in rp14 b34, which is listed on the objective. |
| TBL-STI.1 | PARTIAL | b1-b3, b8, b21-b24, b26-b29 | The six infections owned here have pathogen, clinical appearance, diagnosis and treatment: chlamydia, gonorrhea, syphilis (stages, darkfield, both blood tests, penicillin), chancroid, LGV, donovanosis; condyloma, molluscum and HSV are taught in rp17 b19-b27 and yeast, BV and trichomonas in rp12 b10-b14 (both listed). MISSING: the histologic appearance of syphilis (perivascular plasma-cell infiltrate with obliterative endarteritis; spirochetes by silver stain, Warthin-Starry) and of LGV (intracellular inclusions, stellate abscesses and granulomas); in rp17 the treatment of molluscum (curettage, cryotherapy, cantharidin or watchful waiting) is absent. One sentence each fixes it. |
| TBL-STI.2 | TAUGHT | b10, b14-b16, b18-b19 | Chlamydia/gonorrhea plus polymicrobial flora; lower abdominal pain, fever, discharge, cervical motion tenderness; acute (tubo-ovarian abscess, Fitz-Hugh-Curtis) and chronic (infertility, ectopic, pelvic pain) complications; outpatient and inpatient regimens, partner treatment, retest at 3 months. |
| BICEP-BROWN.5 | TAUGHT | b5-b8 | Annual NAAT under 25 and at-risk older women, vaginal swab (self-collected as good), first-catch urine in men, extragenital sites in MSM; syphilis, HIV (opt-out), hepatitis B and C screening in a table; HSV, trichomonas and BV not screened without symptoms (annual trichomonas in HIV). |
| BP-rp16-01 | TAUGHT | b1, b3, b8, b33 | Obligate intracellular (no ATP), elementary vs reticulate body, inclusions, NAAT, doxycycline (azithromycin in pregnancy), reactive arthritis, neonatal conjunctivitis and afebrile staccato pneumonia. |
| BP-rp16-02 | TAUGHT | b22, b24 | L1-L3, fleeting painless ulcer, painful matted buboes, groove sign, proctocolitis, doxycycline 21 days. |
| BP-rp16-03 | TAUGHT | b2-b3, b8, b33 | Gram-negative diplococci in neutrophils, pili antigenic variation, IgA protease, ceftriaxone, disseminated infection (tenosynovitis, pustules, septic arthritis), erythromycin ointment, C5-C9 deficiency. |
| BP-rp16-04 | TAUGHT | b26, b29 | Chancre, secondary rash incl. palms/soles, condylomata lata, lymphadenopathy, latent, gumma/aortitis/neurosyphilis, tabes dorsalis, Argyll Robertson pupil, benzathine penicillin, Jarisch-Herxheimer. Gumma is named only. |
| BP-rp16-05 | TAUGHT | b26, b28, b31 | VDRL/RPR (cardiolipin, titer, false positives in lupus, antiphospholipid, pregnancy, viral illness, prozone) vs FTA-ABS/TP-PA (lifelong); darkfield. |
| BP-rp16-06 | TAUGHT | b21, b24 | H. ducreyi, painful ragged ulcer with tender unilateral node, school of fish, azithromycin or ceftriaxone. |
| BP-rp16-07 | TAUGHT | b22, b24 | K. granulomatis, beefy-red bleeding ulcer, Donovan bodies, pseudobuboes, azithromycin 3 weeks or more. |
| BP-rp16-08 | TAUGHT | b21-b24 | Two-question sort and table: painful (HSV, chancroid) vs painless (syphilis, LGV, donovanosis). |
| BP-rp16-09 | TAUGHT | b10, b14-b15 | Ascending infection, chandelier sign, adnexal tenderness, tubo-ovarian abscess, infertility, ectopic, chronic pain, Fitz-Hugh-Curtis violin-string adhesions with the cholecystitis trap. |
| BP-rp16-10 | TAUGHT | b19 | Ceftriaxone + doxycycline + metronidazole for 14 days, inpatient criteria, partners treated. |
| BP-rp16-11 | TAUGHT | b8 | Persistent urethritis after doxycycline suggests M. genitalium (no cell wall); Trichomonas and Ureaplasma named; chlamydia is the lead cause. |
| BP-rp16-12 | TAUGHT | b8 | Expedited partner therapy, 60-day lookback, retest at 3 months, test of cure at 4 weeks in pregnancy. |
| BP-rp16-13 | TAUGHT | b1 | No ATP, little muramic acid (beta-lactams unreliable), glycogen-rich inclusions with Giemsa or iodine. |
| BP-rp16-14 | TAUGHT | b2-b3 | Oxidase-positive diplococcus, glucose not maltose (vs meningococcus), Thayer-Martin, lipooligosaccharide, no capsule, no vaccine. |
| BP-rp16-15 | TAUGHT | b8 | Coexistence, ceftriaxone plus doxycycline when chlamydia not excluded, partners treated. |
| BP-rp16-16 | TAUGHT | b30 | Doxycycline harms fetal bones/teeth, only penicillin treats the fetus, so desensitize. |
| BP-rp16-17 | TAUGHT | b5 | Asymptomatic cervical infection in women, yearly NAAT under 25; men have dysuria and purulent discharge with gonorrhea. |
| BP-rp16-18 | TAUGHT | b28, b31 | Anticardiolipin antibody, titer falls with treatment; treponemal tests stay positive for life; the pair is read in b31. |

rp16: 21 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR

## rp17

| id | verdict | where | evidence |
|---|---|---|---|
| VIRAL-STI-TORCH.1 | TAUGHT | b1-b2, b5, b24 | Virion has no ribosomes or energy supply and borrows host ribosomes, nucleotides, polymerases; five-step table (attachment, uncoating, copying and translation, assembly, budding or lysis) per virus; manipulation of the host: nef lowers MHC I, E6 degrades p53, E7 inactivates Rb, HSV latency transcripts. Other virulence proteins (VP16, vif) are not named (UNANCHORED, low yield). |
| VIRAL-STI-TORCH.2 | TAUGHT | b1, b3, b5, b24 | HIV reverse transcriptase then integrase then provirus in resting CD4 cells (latent reservoir) vs HSV lytic phase and neuronal episome vs HPV episome in basal cells (integration of high-risk types) vs cytoplasmic molluscum; table b3 compares persistence. |
| VIRAL-STI-TORCH.3 | TAUGHT | b3, b5, b11, b19, b24, b27 | Tropism, spread, presentation and outcome per virus; evasion: env antigenic variation (RT does not proofread), nef MHC I downregulation, CD4 killing; HSV TAP block and silent latency; HPV little inflammation or viremia; molluscum dampens inflammation; vertical transmission. |
| VIRAL-STI-TORCH.4 | TAUGHT | b3, b5, b15-b17 | Structure, entry, routes (sex, blood, syringes, vertical); table of condoms (70-80 percent), syringe services, PrEP (TDF/FTC, cabotegravir, lenacapavir 2025, time to protection), PEP 28 days within 72 h, undetectable = untransmittable, perinatal bundle. Behavioral measures beyond condoms and syringe sharing (fewer partners, disclosure) are only implied. |
| VIRAL-STI-TORCH.5 | TAUGHT | b1, b3, b19, b21 | Linear dsDNA enveloped virus, lytic vs latent in sacral ganglia with latency-associated transcripts, asymptomatic shedding, suppressive valacyclovir (halves transmission), condoms, avoiding sex in outbreaks, suppression from 36 weeks. |
| VIRAL-STI-TORCH.6 | TAUGHT | b24 | Nonenveloped circular dsDNA, icosahedral L1/L2 capsid, skin-to-skin spread (condoms reduce but do not prevent), types 6/11 vs 16/18 (E6, E7), 9-valent virus-like-particle vaccine, age 11-12, two vs three doses, catch-up to 26. |
| VIRAL-STI-TORCH.8 | TAUGHT | b11-b12, b19, b27, b29-b31 (rp18 b17, b21) | HIV opt-out screening 15-65 (CDC 13-64), fourth-generation then differentiation then RNA, retest in third trimester if at risk; HSV lesion PCR, no serologic screening, suppression from 36 weeks and exam at labor (the cesarean for lesion or prodrome is in rp18 b17 and b21, a listed topic); HPV cytology from 21 and HPV testing from 30, self-collection, usual schedule in pregnancy. |
| VIRAL-STI-TORCH.9 | TAUGHT | b7-b9, b16, b21-b22 | ART classes with mechanisms (chain terminators, allosteric NNRTI, integrase strand transfer, protease/polyprotein, entry), toxicity table (abacavir HLA-B*57:01, zidovudine, tenofovir, older NRTIs, efavirenz, PIs, maraviroc, enfuvirtide), ritonavir boosting, PrEP/PEP; acyclovir activation by viral thymidine kinase, valacyclovir first/episodic/suppressive use, crystalline nephropathy, foscarnet for TK-mutant virus. |
| VIRAL-STI-TORCH.10 | TAUGHT | b25-b26 | Table of imiquimod (TLR7), podofilox (tubulin), sinecatechins, trichloroacetic acid, cryotherapy, excision/laser with who applies, cautions (pregnancy, condom weakening, HIV); lesions not virus are removed, so recurrence is common. |
| BP-rp17-01 | TAUGHT | b1-b2 | Obligate intracellular parasite; retrovirus (RT, integrase, provirus) vs DNA viruses (latent episomes). |
| BP-rp17-02 | TAUGHT | b5 | gag/pol/env, p24, gp160 to gp120 and gp41, CD4 then CCR5 or CXCR4, gp41 fusion. |
| BP-rp17-03 | TAUGHT | b12-b13 | Fourth-generation Ag/Ab then differentiation then RNA, order of RNA, p24, antibody, window period. |
| BP-rp17-04 | TAUGHT | b16 | Condoms, PrEP, PEP within 72 h, treatment as prevention. |
| BP-rp17-05 | TAUGHT | b16 | Maternal ART, IV zidovudine and scheduled cesarean when viral load above 1,000, infant zidovudine, formula feeding advice (US). |
| BP-rp17-06 | TAUGHT | b7-b9 | NRTI/NNRTI/PI/INSTI/maraviroc/enfuvirtide with signature toxicities and ritonavir CYP3A4 boosting. |
| BP-rp17-07 | TAUGHT | b19 | Grouped painful vesicles, sacral ganglion latency, Tzanck with Cowdry A inclusions, PCR. |
| BP-rp17-08 | TAUGHT | b21-b22 | Guanosine analog activated by viral TK, DNA polymerase chain termination, crystals, TK-mutant resistance then foscarnet. |
| BP-rp17-09 | TAUGHT | b24, b26 | 6/11 warts, 16/18 cancers, vaccine, imiquimod (TLR7), podofilox, TCA, cryotherapy. |
| BP-rp17-10 | TAUGHT | b27 | Poxvirus, umbilicated pearly papules, molluscum bodies, large facial lesions in HIV; the Henderson-Patterson eponym is not given. |
| BP-rp17-11 | TAUGHT | b3, b5 | HIV mutation and CD4 depletion, HSV latency and TAP block, HPV low inflammation. |
| BP-rp17-12 | TAUGHT | b11 | Acute retroviral syndrome, clinical latency, AIDS = CD4 under 200 or AIDS-defining illness, viral load vs CD4. |
| BP-rp17-13 | TAUGHT | b17 | Maternal IgG persists up to 18 months, so infants are tested by nucleic acid tests. |
| BP-rp17-14 | TAUGHT | b5 | Homozygous CCR5 delta-32 resists, heterozygotes progress more slowly. |
| BP-rp17-15 | TAUGHT | b8 | Mitochondrial toxicity (lactic acidosis, steatosis, pancreatitis, neuropathy), indinavir stones. |
| BP-rp17-16 | TAUGHT | b5 | CCR5 strains early, CXCR4 strains late with faster decline. |
| BP-rp17-17 | TAUGHT | b7-b8 | Mechanism by replication step, tenofovir already a nucleotide, combination therapy because mutation selects resistance. |

rp17: 26 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp18

| id | verdict | where | evidence |
|---|---|---|---|
| TBL-STI.3 | TAUGHT | b12-b13, b15-b21 | Syphilis (stillbirth, hydrops, early and late congenital findings), chlamydia and gonorrhea (conjunctivitis timing, afebrile pneumonia, ointment), HSV (skin-eye-mouth, CNS, disseminated), HPV (laryngeal papillomatosis), HIV (under 1 percent with suppression), hepatitis B and C, group B strep, trichomoniasis/BV (preterm birth, early rupture) in one table. |
| VIRAL-STI-TORCH.7 | TAUGHT | b1, b3, b6-b8, b12 | Virology per agent (rubella togavirus +ssRNA, CMV herpesvirus latent in monocytes, HSV, VZV, parvovirus B19 nonenveloped ssDNA, Zika flavivirus), route (transplacental vs birth canal), timing, signature fetal findings, why primary infection is the dangerous one. |
| PRENATAL-CARE.14 | TAUGHT | b17, b21 | Risk set by maternal antibody (first genital infection near delivery 30-50 percent vs recurrent a few percent), acyclovir 400 mg three times daily or valacyclovir 500 mg twice daily from 36 weeks, cesarean for active lesion or prodrome, neonatal forms, IV acyclovir. |
| PRENATAL-CARE.15 | TAUGHT | b15-b16, b23 | Colonization about a quarter, rectovaginal culture at 36-37 weeks, IV penicillin or ampicillin at least 4 hours before birth, cefazolin/clindamycin/vancomycin by allergy risk, unscreened indications (bacteriuria, prior infant, preterm, rupture 18 hours or more, fever), early-onset sepsis prevented but late-onset not. |
| PREG-REVIEW.14 | TAUGHT | b6-b8, b12, b17-b19, b25-b27 | Parvovirus (hydrops), CMV, HIV, HSV, varicella (syndrome, VZIG, newborn VZIG window), rubella (vaccinate postpartum), hepatitis B (HBsAg, HBIG) and C (5 percent, treat after pregnancy); immune status by IgG/IgM/seroconversion/avidity. Fetal and neonatal effects dominate; maternal effects (for example varicella pneumonia) are not stated. |
| BP-rp18-01 | TAUGHT | b6 | Cat feces or undercooked meat, chorioretinitis, hydrocephalus, diffuse calcifications. |
| BP-rp18-02 | TAUGHT | b12-b13 | Stillbirth, hydrops, snuffles, rash; Hutchinson teeth, mulberry molars, saddle nose, saber shins, eighth-nerve deafness; screening every pregnancy. |
| BP-rp18-03 | TAUGHT | b7 | Cataracts, deafness, PDA/pulmonary artery stenosis, blueberry-muffin rash, immunity at first visit, live vaccine after delivery only. |
| BP-rp18-04 | TAUGHT | b6 | Most common congenital infection, periventricular calcifications, microcephaly, chorioretinitis, hearing loss. |
| BP-rp18-05 | TAUGHT | b17, b21 | Neonatal skin-eye-mouth, CNS, disseminated; cesarean for lesion/prodrome; suppression from 36 weeks. |
| BP-rp18-06 | TAUGHT | b8, b28 | Erythroid precursors via P antigen, fetal anemia, high-output failure, hydrops. |
| BP-rp18-07 | TAUGHT | b7 | Limb hypoplasia, zigzag scars, VZIG for exposed nonimmune mothers and newborns. |
| BP-rp18-08 | TAUGHT | b8, b23-b24 | Unpasteurized cheese/deli meat, amnionitis, preterm birth, sepsis/meningitis, ampicillin (cephalosporin trap). |
| BP-rp18-09 | TAUGHT | b15-b16 | Culture at 36-37 weeks, IV penicillin/ampicillin, early-onset sepsis, pneumonia, meningitis. |
| BP-rp18-10 | TAUGHT | b19, b21 | HBsAg screening, HBIG plus vaccine within 12 hours, hepatitis C transmission about 5 percent. |
| BP-rp18-11 | TAUGHT | b3, b7 | Severe microcephaly with eye lesions, mosquito and sexual spread. |
| BP-rp18-12 | TAUGHT | b20 | Chemical day 1, gonococcal days 2-5 purulent, chlamydial days 5-14. |
| BP-rp18-13 | TAUGHT | b25-b27 | IgG alone, IgM alone, seroconversion, avidity; newborn IgM vs IgG. |
| BP-rp18-14 | TAUGHT | b17 | First episode near delivery vs recurrent risk, IV acyclovir. |
| BP-rp18-15 | TAUGHT | b23-b24 | GBS beta-hemolytic, bacitracin-resistant, CAMP-positive; Listeria tumbling motility, granulomatosis infantiseptica; E. coli K1. |
| BP-rp18-16 | TAUGHT | b12-b13 | Hepatosplenomegaly, periostitis/osteochondritis (limb refusal), interstitial keratitis, Hutchinson triad. |

rp18: 21 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp19

| id | verdict | where | evidence |
|---|---|---|---|
| HP-MALE.1 | TAUGHT | b1-b3 | Tunica albuginea with septa and lobules, seminiferous tubules (about 90 percent of volume), Sertoli cells, peritubular myoid cells, blood-testis barrier, interstitium with Leydig cells and Reinke crystals. |
| HP-MALE.2 | TAUGHT | b1, b3, b10-b12 | Location, structure and ploidy of each germ cell (table), Sertoli functions (FSH receptor, ABP, inhibin B, AMH, barrier, residual-body phagocytosis), Leydig (LH, testosterone, smooth ER, Reinke). |
| HP-MALE.3 | TAUGHT | b10-b11, b13, b23, b27 | Mitosis (type A dark/pale, B), meiosis I and II, spermiogenesis (acrosome, protamines, flagellum, residual body), spermiation, 64-74 days; regulation by pulsatile GnRH, FSH, LH and intratubular testosterone. |
| HP-MALE.4 | TAUGHT | b16-b18, b21 | Table of lining/hallmark and function: rete and efferent ductules (ciliated and absorptive cells), epididymis (stereocilia, maturation, storage), ductus deferens (thick muscularis), seminal vesicle (folded mucosa, fructose), prostate (papillary infoldings, corpora amylacea, PSA), bulbourethral (mucous acini, pre-ejaculate). |
| HP-MALE.5 | TAUGHT | b18-b19, b20 | Obstructive azoospermia, vasectomy (normal volume and fructose, antisperm antibodies), CBAVD/CFTR and ejaculatory duct obstruction (scant, acidic, fructose-negative), retrograde ejaculation, loss of prostatic liquefaction, bulbourethral loss minimal. |
| HP-MALE.6 | TAUGHT | b29-b31 | Corpora cavernosa and spongiosum, sinusoids and trabeculae, tunica albuginea, Buck fascia, helicine arterioles, emissary veins, veno-occlusion, NO/cGMP/PDE5. |
| PATHPHARM-MALE.1 | TAUGHT | b3, b12, b16, b18, b21 | Slide clues: seminiferous tubule with Sertoli and germ cells, Leydig cell with Reinke crystals, epididymis (stereocilia), prostate (papillary infolding, corpora amylacea), seminal vesicle (folded, none). |
| PATHPHARM-MALE.2 | TAUGHT | b7-b8, b21, b29 | Zonal anatomy (peripheral for cancer, transition for BPH, central), scrotal layers mapped to disease (dartos/Fournier, cremaster, tunica vaginalis/hydrocele), penile columns, left testicular vein to left renal vein (varicocele), para-aortic lymph. |
| PATHPHARM-MALE.3 | TAUGHT | b10-b14 | Stages and timeline, epididymal motility, capacitation in the female tract, a sample reflects events about 3 months earlier, fever 6-10 weeks ago, repeat after at least 3 months of treatment. |
| PATHPHARM-MALE.4 | TAUGHT | b23-b27 | Pulsatile GnRH (continuous desensitizes), LH to Leydig, FSH to Sertoli, negative feedback by testosterone/estradiol and inhibin B, intratesticular testosterone via ABP, testosterone vs DHT vs estradiol, aging fall with rising SHBG and lower free testosterone. |
| PATHPHARM-MALE.5 | PARTIAL | b28-b31 | Neural (parasympathetic S2-S4 erection, sympathetic T10-L2 emission, pudendal ejaculation), vascular (helicine arterioles, veno-occlusion) and molecular (NO, cGMP, PKG, PDE5, alpha-1 detumescence, nitrate interaction) mechanisms are explained. The phases of the male sexual response (UNANCHORED part) are only listed in the last sentence of b31 (excitement, plateau, orgasm, resolution, refractory period) with no description. Fix: one or two sentences mapping each phase to the mechanism already taught (excitement = parasympathetic erection, orgasm = emission plus ejaculation, resolution = PDE5 and sympathetic detumescence, refractory period). |
| BICEP-MISHIMOTO.1 | TAUGHT | b5-b8, b16-b17 | Scrotal layers (table), spermatic cord contents, pampiniform cooling, cremaster and dartos, tunica vaginalis, epididymis head to tail, ductus deferens course into the ejaculatory duct. |
| BP-rp19-01 | TAUGHT | b1, b3 | Sertoli (FSH receptor, ABP, inhibin B, AMH, tight-junction barrier), Leydig in interstitium (LH, testosterone, Reinke). The nurse-cell label appears only in the grid. |
| BP-rp19-02 | TAUGHT | b10-b12 | Spermatogonia to primary and secondary spermatocytes to spermatids, spermiogenesis (acrosome from Golgi, flagellum from centriole), 64-74 days. |
| BP-rp19-03 | TAUGHT | b16-b18 | Rete, efferent ductules, epididymis with stereocilia (maturation, storage), ductus deferens, ejaculatory duct. |
| BP-rp19-04 | TAUGHT | b18, b21 | Seminal vesicle fructose and most volume, prostate PSA/citrate/zinc and corpora amylacea, bulbourethral pre-ejaculate; acid phosphatase is not named. |
| BP-rp19-05 | TAUGHT | b23-b24 | GnRH to LH (Leydig) and FSH (Sertoli), testosterone and inhibin B feedback. |
| BP-rp19-06 | TAUGHT | b25-b26 | Testosterone (Wolffian ducts, spermatogenesis, muscle, libido), DHT (genitalia, prostate, baldness, sebaceous glands), estradiol by aromatization (epiphyseal closure, bone). |
| BP-rp19-07 | TAUGHT | b30-b31 | Parasympathetic NO to cGMP to relaxation; PDE5 breaks cGMP. |
| BP-rp19-08 | TAUGHT | b5 | Pampiniform countercurrent cooling, cremaster and dartos. |
| BP-rp19-09 | PARTIAL | b13-b14 | The spermatogenic timeline in infertility is taught (3-month lag, repeat after 3 months). MISSING in rp19: the semen analysis parameters themselves (volume, concentration, motility, morphology and their lower reference limits); they are in rp22 b11 (WHO limits), so a one-line pointer or the list here closes it. |
| BP-rp19-10 | TAUGHT | b25 | Total testosterone falls about 1 percent a year, SHBG rises, free testosterone falls faster. |
| BP-rp19-11 | TAUGHT | b21 | Peripheral zone (cancer, rectal exam), transition zone (BPH), central zone. |

rp19: 21 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR

## rp20

| id | verdict | where | evidence |
|---|---|---|---|
| HP-MALE.11 | TAUGHT | b1-b3 | Heat and dysgenesis: germ cell loss within the first year, infertility worst when bilateral, germ cell tumor risk several-fold and also in the contralateral descended testis, torsion, patent processus and inguinal hernia, DSD work-up when bilateral and nonpalpable; orchiopexy lowers but never removes risk. |
| HP-MALE.12 | TAUGHT | b5, b8-b9 | Bell-clapper, venous before arterial occlusion, congestion then hemorrhagic infarction, sudden pain, high-riding horizontal lie, absent cremasteric reflex, Doppler, salvage by hours, manual detorsion then bilateral orchiopexy. |
| HP-MALE.13 | TAUGHT | b6, b13 | Epididymitis (CT/GC under 35, enteric rods when older or anal intercourse, Prehn, Doppler, ceftriaxone + doxycycline or levofloxacin), mumps orchitis (pressure necrosis in the tunica, barrier damage, infertility), autoimmune orchitis after barrier breach (sperm antigens), granulomatous orchitis (TB, idiopathic). Granulomatous lobular forms and syphilitic orchitis are not named; acceptable. |
| HP-MALE.14 | TAUGHT | b1, b15-b16 | Processus vaginalis origin, communicating vs noncommunicating hydrocele (transillumination, ultrasound for new adult hydrocele), chylocele from filariasis, spermatocele, hematocele (dark, no transillumination), indirect hernia contrast. |
| HP-MALE.18 | TAUGHT | b20-b25 | Age and presentation, risk factors (cryptorchidism, contralateral tumor, family history, infertility, shared dysgenesis), GCNIS and isochromosome 12p, seminoma (fried-egg cells, lymphocytes, PLAP, KIT), embryonal, yolk sac (Schiller-Duval, AFP), choriocarcinoma (hCG, hematogenous), teratoma, spermatocytic, Leydig/Sertoli, lymphoma, table of patterns and markers. |
| PATHPHARM-MALE.7 | PARTIAL | b1-b3, b5-b6, b9, b13, b15-b17, b20-b27 | The rp20 pathologies (cryptorchidism, hydrocele, varicocele, epididymal cyst, torsion, rupture, testicular cancer, epididymitis, orchitis) have presentation, pathophysiology and diagnosis; the rp21/rp22 conditions are taught in those topics. Treatment is thin: no management line for hydrocele (observe infants, hydrocelectomy for symptomatic adults), spermatocele/epididymal cyst (observe, excise only for pain), varicocele technique and indications (varicocelectomy or embolization for pain, infertility with abnormal semen, adolescent size discrepancy), mumps orchitis (supportive); testicular cancer stops at orchiectomy, sperm banking and markers (seminoma is only called radiosensitive and chemosensitive), with no seminoma regimen, NSGCT chemotherapy (BEP), retroperitoneal node dissection for residual masses, or the chemoresistance of teratoma (course slide 56). Two or three sentences or a treatment column fix it. |
| BICEP-MISHIMOTO.3 | TAUGHT | b5 | Genitofemoral nerve L1-L2, femoral branch afferent from the inner thigh, genital branch efferent to the ipsilateral cremaster, absent in torsion. |
| BICEP-MISHIMOTO.4 | TAUGHT | b6, b8, b11, b15-b17, b20 | Torsion, epididymitis, torsed appendix testis (blue dot), ureteral stone and hernia referral, trauma/rupture, orchitis, Fournier; mass differential by transillumination and position (hydrocele, spermatocele, hematocele, varicocele, hernia, tumor). |
| BICEP-MISHIMOTO.5 | TAUGHT | b6, b8-b9, b11 | Reflex and lie first, urinalysis and NAAT, Doppler without delaying surgery; torsion surgery and detorsion, epididymitis ceftriaxone + doxycycline or levofloxacin, appendix testis rest and analgesia. |
| BP-rp20-01 | TAUGHT | b1-b3 | Most common congenital genital anomaly, infertility and tumor risk (both testes), orchiopexy 6-18 months. |
| BP-rp20-02 | TAUGHT | b5, b9 | Bell-clapper, sudden pain, high-riding horizontal testis, absent cremasteric reflex, emergency, bilateral fixation. |
| BP-rp20-03 | TAUGHT | b6, b8 | Age-based organisms, gradual onset, Prehn sign, reflex present. |
| BP-rp20-04 | TAUGHT | b13 | Mumps (post-pubertal, infertility), autoimmune, granulomatous. |
| BP-rp20-05 | TAUGHT | b15 | Fluid in tunica vaginalis, transilluminates, communicating vs noncommunicating. |
| BP-rp20-06 | TAUGHT | b17 | Bag of worms, left-sided via left renal vein, worse standing, infertility, new right-sided suggests renal cell carcinoma. |
| BP-rp20-07 | TAUGHT | b15-b16 | Spermatocele (above/behind, transilluminates), hematocele, testicular rupture. |
| BP-rp20-08 | TAUGHT | b20-b22, b24 | Seminoma (fried-egg, PLAP, radiosensitive) vs embryonal, yolk sac, choriocarcinoma, teratoma, mixed. The embryonal "painful" detail and the seminoma "late spread" detail are not stated. |
| BP-rp20-09 | TAUGHT | b25 | Leydig (Reinke, androgens/estrogens, precocious puberty, gynecomastia), Sertoli, lymphoma over 60 (large B-cell, often bilateral). |
| BP-rp20-10 | TAUGHT | b20, b26, b29 | Para-aortic spread, radical inguinal orchiectomy never scrotal, GCNIS, isochromosome 12p, AFP/hCG/LDH. |
| BP-rp20-11 | TAUGHT | b27 | Pure seminoma never raises AFP, mild hCG and PLAP, yolk sac AFP, choriocarcinoma very high hCG. |
| BP-rp20-12 | TAUGHT | b5, b8 | Thin veins occlude first, congestion then hemorrhagic infarction, absent Doppler flow vs increased in epididymo-orchitis. |
| BP-rp20-13 | TAUGHT | b20 | Age 15-35, painless firm intratesticular mass, does not transilluminate, solid on ultrasound. |

rp20: 21 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR

## rp21

| id | verdict | where | evidence |
|---|---|---|---|
| HP-MALE.7 | TAUGHT | b24-b25 | Phimosis (physiologic to age 3-5 vs pathologic with lichen sclerosus, balanitis, diabetes; hygiene, gentle retraction, observation, topical steroid, circumcision; balanoposthitis and paraphimosis as consequences), hypospadias (failed fold fusion, ventral opening, associations, deflected stream, urethroplasty at 6-18 months, delay circumcision), epispadias (genital tubercle, exstrophy, incontinence, complex repair). |
| HP-MALE.8 | TAUGHT | b24, b27 | Table of candida (diabetes), HSV, primary syphilis, chancroid, condyloma, smegma/lichen sclerosus with clues and treatment, balanoposthitis from hygiene; LGV and donovanosis are in rp16 (listed). Bacterial balanitis organisms are not named. |
| HP-MALE.9 | TAUGHT | b29-b30 | Microtrauma and TGF-beta fibrous plaque, painful curvature, shortening, venous-leak ED, active phase 6-18 months, treat when stable, collagenase (only approved injection), verapamil/interferon off-label, traction/shockwave limited, plication, graft, prosthesis. |
| HP-MALE.15 | TAUGHT | b1, b4-b9 | DHT-driven hyperplasia of glands and stroma, transition zone, 5-alpha-reductase absence, LUTS, bladder changes, hydronephrosis, not premalignant; static vs dynamic obstruction, drugs and onset times, watchful waiting, minimally invasive and TURP/laser/simple prostatectomy with retrograde ejaculation and hyponatremia. |
| HP-MALE.16 | TAUGHT | b12 | Four patterns: acute bacterial (E. coli by intraprostatic reflux; CT/GC in young men; avoid vigorous massage), chronic bacterial (recurrent same-organism UTI, lipid-soluble antibiotics), chronic pelvic pain syndrome (most common, cultures negative), granulomatous (after BCG, mimics cancer). |
| HP-MALE.17 | TAUGHT | b35-b36 | Condyloma with koilocytes (6/11, imiquimod, cryotherapy), Bowen disease, erythroplasia of Queyrat, bowenoid papulosis (16/18, full-thickness atypia, 5-FU/laser/excision), invasive SCC (risks incl. circumcision, phimosis, lichen sclerosus, smoking), verrucous variant, partial/total penectomy, node dissection, groin drainage. Complications are stated in one clause (UNANCHORED part). |
| HP-MALE.19 | TAUGHT | b15 | Luminal secretory cell with androgen receptor, PSA and keratins 8/18, loss of basal markers, TMPRSS2-ERG, PTEN/MYC/TP53, AMACR, high-grade PIN. |
| HP-MALE.20 | TAUGHT | b15, b17 | Small crowded infiltrative glands, one cell layer, prominent nucleoli, perineural invasion, absent basal layer (p63 and keratin negative), Gleason grade groups. |
| HP-MALE.21 | TAUGHT | b14 | Rises with age, African ancestry, doubles with first-degree relative, BRCA2 aggressive. |
| HP-MALE.22 | TAUGHT | b19 | Latent cancers at autopsy vs clinically significant (Gleason 7 or more), overdiagnosis, active surveillance. |
| BP-rp21-01 | TAUGHT | b1, b4 | DHT-driven nodular hyperplasia of transition zone, LUTS, retention, infection, hydronephrosis, not premalignant. |
| BP-rp21-02 | TAUGHT | b5, b7-b9 | Tamsulosin 1A-selective, terazosin/doxazosin orthostasis, finasteride/dutasteride (halve PSA, handling), tadalafil, TURP. |
| BP-rp21-03 | TAUGHT | b12 | Acute (E. coli, boggy tender, avoid massage), chronic bacterial, CPPS, CT/GC in young men. |
| BP-rp21-04 | TAUGHT | b1, b14, b18 | Peripheral zone and DRE, age, African ancestry, family history, BRCA2, USPSTF shared decision, Gleason. |
| BP-rp21-05 | TAUGHT | b15, b17 | Crowded glands, nucleoli, perineural invasion, absent basal layer, AMACR. |
| BP-rp21-06 | TAUGHT | b19 | Batson plexus, lumbar spine and pelvis, osteoblastic, raised ALP. |
| BP-rp21-07 | TAUGHT | b19 | Latent vs clinically significant, overdiagnosis. |
| BP-rp21-08 | TAUGHT | b20-b22 | Leuprolide flare and antiandrogen cover, degarelix, bicalutamide/flutamide/enzalutamide, abiraterone. |
| BP-rp21-09 | TAUGHT | b24 | Phimosis, paraphimosis as emergency, balanoposthitis. |
| BP-rp21-10 | TAUGHT | b29 | Fibrous plaques of the tunica albuginea, curved painful erection. |
| BP-rp21-11 | TAUGHT | b32-b33 | Sickle cell, trazodone, cocaine, PDE5 inhibitors, injections, ischemic emergency. |
| BP-rp21-12 | TAUGHT | b35-b36 | HPV 16/18, circumcision, smoking, Bowen, Queyrat, bowenoid papulosis. |
| BP-rp21-13 | TAUGHT | b27, b31 | Fracture with pop and eggplant hematoma, urethral injury 10-20 percent, retrograde urethrogram; infection table. |
| BP-rp21-14 | TAUGHT | b1 | Tubuloalveolar glands, papillary infoldings, two-cell lining, corpora amylacea vs folded seminal vesicle without them. |
| BP-rp21-15 | TAUGHT | b7 | Alpha-1A selective: retrograde/absent ejaculation, floppy iris; nonselective: orthostasis; 5-ARI: libido, ED, gynecomastia, PSA halves. |
| BP-rp21-16 | TAUGHT | b18 | Organ-specific not cancer-specific, causes of rise, 5-ARI halves, free-to-total ratio. |
| BP-rp21-17 | TAUGHT | b21 | Hot flashes, libido and erections, gynecomastia, fatigue, bone loss; abiraterone mineralocorticoid excess with prednisone. |
| BP-rp21-18 | TAUGHT | b32-b33 | Ischemic (painful, dark acidotic) vs nonischemic (painless, perineal trauma, arterial fistula). |
| BP-rp21-19 | TAUGHT | b29 | Fibromatosis with Dupuytren and plantar fibromatosis, venous-leak ED. |

rp21: 29 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp22

| id | verdict | where | evidence |
|---|---|---|---|
| PATHPHARM-MALE.6 | TAUGHT | b1-b3, b8-b14, b31 | Testosterone low in both, LH is the fork (high = primary/hypergonadotropic, low or inappropriately normal = secondary/hypogonadotropic) with causes of each, inhibin B and FSH, SHBG trap and free testosterone; infertility panel: two semen analyses with WHO limits, volume/pH/fructose, testis size, testosterone/LH/FSH/prolactin, karyotype, Y microdeletions (AZF), CFTR, biopsy patterns. |
| PATHPHARM-MALE.8 | TAUGHT | b16-b24 (rp21 b5-b7) | Alpha-1A vs nonselective blockers (retrograde ejaculation, floppy iris, orthostasis, first-dose syncope), 5-ARIs (types 1/2, shrinkage, PSA halving, libido, teratogenic handling, baldness), PDE5 inhibitors (cGMP, nitrate rule, intervals, visual and hearing harms, NAION), SSRIs (serotonin raises the ejaculation threshold, paroxetine, delayed ejaculation and libido as adverse effects). The SSRI reuptake mechanism is implied rather than spelled out. |
| PATHPHARM-MALE.9 | TAUGHT | b5-b6, b25-b29 | Testosterone indication (two low morning levels, LH checked), effects, polycythemia, monitoring, contraindications, TRAVERSE, formulations; antiandrogen table (spironolactone, 5-ARIs, flutamide/bicalutamide, ketoconazole, enzalutamide); ADT with flare, degarelix/relugolix, abiraterone plus prednisone, hypogonadal adverse effects, bone protection. |
| BICEP-WEIAND.4 | TAUGHT | b1, b3, b5, b31 (rp9 b2-b9, b14-b16) | Male side here (hypergonadotropic vs hypogonadotropic, LH, FSH, inhibin B, exogenous androgens); female interpretation is taught in rp9 (compartment approach, FSH, estradiol, progestin challenge), which is listed on the objective. |
| BICEP-WEIAND.6 | TAUGHT | b8-b9, b11-b14 | Semen analysis with WHO limits and timeline, obstructive vs non-obstructive azoospermia, biopsy patterns (normal spermatogenesis, maturation arrest, Sertoli-cell-only, hypospermatogenesis, hyalinized tubules) with FSH and cause, indications for biopsy and microTESE/ICSI. |
| BP-rp22-01 | TAUGHT | b1 | Primary and secondary hypogonadism with LH/FSH pattern and causes. |
| BP-rp22-02 | TAUGHT | b5-b6 | LH/FSH suppression, shrinkage, azoospermia, polycythemia, acne, low HDL, gynecomastia, mood. |
| BP-rp22-03 | TAUGHT | b8-b9, b11, b13 | Semen analysis, CBAVD/CFTR with normal FSH vs non-obstructive with high FSH, varicocele, Kartagener. |
| BP-rp22-04 | TAUGHT | b16 | Vascular most common, neurogenic, hormonal, drug-induced, psychogenic with preserved nocturnal erections. |
| BP-rp22-05 | TAUGHT | b18-b19 | Sildenafil, vardenafil, tadalafil, avanafil: cGMP, headache, flushing, blue-green vision, NAION, nitrates, alpha-blockers. |
| BP-rp22-06 | TAUGHT | b24 | Premature ejaculation, SSRIs delay ejaculation. |
| BP-rp22-07 | TAUGHT | b26, b28 | Spironolactone, finasteride/dutasteride, flutamide/bicalutamide, ketoconazole; cyproterone appears only in the figure caption. |
| BP-rp22-08 | TAUGHT | b5 | Indications, hematocrit and PSA monitoring, contraindications (prostate/breast cancer, fertility). |
| BP-rp22-09 | TAUGHT | b24 | Puberty, Klinefelter, cirrhosis, hCG-secreting tumors, hyperthyroidism, drugs (spironolactone, cimetidine, ketoconazole, digoxin, marijuana, antiandrogens). |
| BP-rp22-10 | TAUGHT | b9 | Low-volume, acidic, fructose-negative = duct obstruction or CBAVD; sperm in post-ejaculate urine = retrograde (tamsulosin, diabetic neuropathy, prostate surgery). |
| BP-rp22-11 | TAUGHT | b18-b19 | Alprostadil (PGE1, cAMP), intracavernosal or intraurethral, pain, fibrosis, priapism; vacuum device, prosthesis. |

rp22: 16 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp23

| id | verdict | where | evidence |
|---|---|---|---|
| TBL-BREAST.3 | TAUGHT | b1-b3, b26, b28 | Fibroadenoma under 35, fibrocystic change premenopausal, papilloma for bloody discharge, carcinoma after menopause, ultrasound first under 30; men: gynecomastia common (centered, rubbery) vs rare cancer (hard, eccentric). |
| TBL-BREAST.4 | TAUGHT | b23-b24 | Fibrous capsule and capsular contracture, rupture with silicone granuloma and nodal silicone, no proven carcinoma risk, scleroderma/Sjogren reports unproven, BIA-ALCL (CD30-positive, textured implants). |
| TBL-BREAST.5 | TAUGHT | b19-b21 | Acute mastitis (S. aureus, nursing, continue breastfeeding, dicloxacillin), periductal mastitis (smokers, squamous metaplasia, keratin plug, granulomatous inflammation, subareolar abscess/fistula), duct ectasia (older multiparous, plasma cells, green-brown discharge), fat necrosis (saponification, calcified mass), with table and stepwise smoking pathway. Granulomatous lobular mastitis and lymphocytic mastopathy (Robbins) are not named; low yield. |
| TBL-BREAST.6 | TAUGHT | b6-b7, b10-b11 | Proliferative vs not, with vs without atypia, no added risk for cysts/fibrosis/apocrine metaplasia/simple fibroadenoma, UDH/sclerosing adenosis/papilloma/radial scar 1.5-2, ADH/ALH 4-5; atypia on core biopsy is excised; radial scar mimics carcinoma. |
| TBL-BREAST.7 | TAUGHT | b6, b8, b10 | Relative risk per category incl. carcinoma in situ 8-10, first-degree relative about 2, higher with young age, many relatives, BRCA; rp24 b4-b7 adds genes. |
| TBL-BREAST.8 | TAUGHT | b25 | Milk line, polythelia, polymastia (axilla, swells in pregnancy), amastia, Poland syndrome, juvenile hypertrophy, tuberous breast. |
| TBL-BREAST.9 | TAUGHT | b13-b16 | Both biphasic from intralobular stroma; fibroadenoma (young, mobile, intra/pericanalicular, estrogen-sensitive, benign) vs phyllodes (about 50, rapid, leaf-like stromal overgrowth, benign to malignant, recurs, hematogenous spread), core-biopsy sampling trap. |
| BP-rp23-01 | TAUGHT | b1, b3 | Lesion by age; gynecomastia vs cancer in men. |
| BP-rp23-02 | TAUGHT | b3, b6-b7, b10 | Cysts, fibrosis, apocrine metaplasia no risk; UDH, sclerosing adenosis, papilloma small risk; ADH/ALH about 4-5. |
| BP-rp23-03 | TAUGHT | b13-b16 | Mobile rubbery fibroadenoma vs phyllodes with leaf-like fronds, stromal overgrowth, recurrence. |
| BP-rp23-04 | TAUGHT | b18 | Bloody discharge from one duct, fibrovascular cores in a large lactiferous duct. |
| BP-rp23-05 | TAUGHT | b19-b20 | Trauma or surgery, saponification, calcified mass mimics carcinoma. |
| BP-rp23-06 | TAUGHT | b19-b21 | Acute mastitis treatment, periductal mastitis in smokers, duct ectasia with plasma cells and green-brown discharge. |
| BP-rp23-07 | TAUGHT | b18 | Prolactinoma, antipsychotics/metoclopramide, primary hypothyroidism (TRH), nipple stimulation. |
| BP-rp23-08 | TAUGHT | b25 | Polythelia/polymastia along milk line, amastia, Poland, juvenile hypertrophy. |
| BP-rp23-09 | TAUGHT | b23-b24 | Capsular contracture, rupture, silicone granuloma, BIA-ALCL, no proven autoimmune link. |
| BP-rp23-10 | TAUGHT | b26-b27 | Estrogen-to-androgen imbalance, cirrhosis worked example. |
| BP-rp23-11 | TAUGHT | b3 | Bilateral multifocal lumpiness, tender premenstrually, eases after menses. |
| BP-rp23-12 | TAUGHT | b26, b28 | Newborn, puberty, older men; concentric rubbery disc vs hard eccentric cancer with retraction or bloody discharge. |

rp23: 19 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp24

| id | verdict | where | evidence |
|---|---|---|---|
| BREAST-HISTO.1 | TAUGHT | b10, b12-b14, b17-b19 (rp23 b3, b6, b13-b14, b19) | Malignant: myoepithelial loss on invasion, desmoplasia, monomorphic vs streaming cells, cribriform/comedo DCIS, discohesive LCIS, single-file lobular cells, special-type morphology; benign findings (apocrine metaplasia, cysts, fibrosis, usual hyperplasia, sclerosing adenosis, fibroadenoma, phyllodes, papilloma, fat necrosis) are in rp23, which is listed on the objective. Pleomorphism is described for DCIS and in the Nottingham grade. |
| BREAST-HISTO.2 | TAUGHT | b10, b12-b14, b17 | Terminal duct lobular unit with luminal and myoepithelial layers on a basement membrane; DCIS (cohesive, cribriform/comedo, microcalcifications) vs LCIS (small discohesive, E-cadherin loss) vs invasive ductal (desmoplastic stellate) vs invasive lobular (single-file). The histology of invasive ductal carcinoma is mostly gross plus desmoplasia and grade; acceptable. |
| BREAST-HISTO.3 | TAUGHT | b21-b22, b26 | ER/PR by nuclear immunohistochemistry, HER2 IHC 0-3+ with 2+ settled by in situ hybridization (ERBB2 copies), each result a drug target (endocrine, anti-HER2), triple-negative reliance on chemotherapy. |
| BREAST-HISTO.4 | TAUGHT | b24-b25, b28 | Ligandless receptor, amplification and dimerization, RAS-MAPK and PI3K-AKT, trastuzumab (outer domain, immune attack, reversible cardiotoxicity vs anthracyclines), pertuzumab blocks pairing, lapatinib/tucatinib, antibody-drug conjugates. |
| TBL-BREAST.10 | TAUGHT | b10-b12 | UDH to ADH to DCIS to invasive ductal; ALH to LCIS to invasive lobular; invasion = crossing the basement membrane. |
| TBL-BREAST.11 | TAUGHT | b12-b13 | UDH mixed cells with streaming and slit spaces; ADH/DCIS monomorphic with rigid punched-out spaces; 2 mm / two ducts rule; cribriform, comedo, discohesive LCIS. Atypical lobular hyperplasia is not described separately from LCIS. |
| TBL-BREAST.12 | TAUGHT | b13-b15 | Table of cells, pattern, who and how found (incidence about 1 in 5 screen-detected), receptors, natural history (same breast vs either breast, about 1 percent a year), management, prognosis; trap on both breasts and chemoprevention. |
| TBL-BREAST.13 | TAUGHT | b3-b7 | 5-10 percent hereditary, BRCA1/2 homologous recombination and two-hit, risk by 70 (BRCA1 55-65, BRCA2 45-50, PALB2 35, ATM/CHEK2 about 2-fold), Ashkenazi founders 1 in 40, TP53/PTEN/CDH1/STK11 functions and syndromes (risk figures by age 70 are given only for BRCA and PALB2). |
| TBL-BREAST.14 | TAUGHT | b22 | PAM50 into luminal A, luminal B, HER2-enriched, basal-like with receptor profile and proliferation. |
| TBL-BREAST.15 | TAUGHT | b22, b26 | Luminal A best and endocrine-responsive, luminal B chemotherapy, HER2-enriched anti-HER2, basal-like chemotherapy, pathologic complete response in fast-dividing classes, recurrence score. |
| TBL-BREAST.16 | PARTIAL | b17-b19 | Table gives incidence for IDC, ILC, medullary, mucinous, tubular, metaplastic (and inflammatory), morphology, clue, outlook, men vs women (almost always ductal). Missing comparison axes of the objective: age predilection for most types (only mucinous "older women"), molecular class of ILC (ER-positive luminal) and tubular/mucinous, grade, treatment options by type (endocrine therapy for ER-positive special types, chemotherapy for medullary/metaplastic, surgery), and survival beyond "good/poor". Two table columns (age, receptor class/treatment) fix it. |
| TBL-BREAST.17 | TAUGHT | b22, b30-b31 | Nodal status strongest, size, grade (Nottingham: tubules, pleomorphism, mitoses), receptors, distant metastasis, Ki-67, recurrence score, node beats tumor trap and sentinel node. |
| BICEP-BROWN.2 | TAUGHT | b3-b4, b7-b8 | Pedigree triggers (before 50, bilateral, triple-negative, male, ovarian, Ashkenazi), genetic counseling, BRCA surveillance and risk-reducing options incl. salpingo-oophorectomy, colorectal first-degree rule (colonoscopy at 40 or 10 years before), Lynch, cervical screening unchanged by family history. |
| BP-rp24-01 | TAUGHT | b1, b4 | Estrogen exposure logic: menarche, menopause, nulliparity, obesity, combined HT, alcohol, density, radiation, atypia, BRCA; breastfeeding protective. |
| BP-rp24-02 | TAUGHT | b4-b6 | BRCA1/2, TP53, PTEN, CDH1, STK11, PALB2, ATM, CHEK2 with functions. |
| BP-rp24-03 | TAUGHT | b13-b14 | Comedo necrosis and microcalcifications, intact basement membrane; LCIS E-cadherin loss, incidental, bilateral risk. |
| BP-rp24-04 | TAUGHT | b17 | IDC most common with desmoplasia; ILC single-file, E-cadherin, bilateral/multicentric. |
| BP-rp24-05 | TAUGHT | b18-b19 | Medullary (BRCA1, syncytial, lymphocytes), mucinous, tubular, metaplastic (triple-negative, poor), inflammatory (dermal lymphatic emboli, peau d'orange, poor). |
| BP-rp24-06 | TAUGHT | b18 | Paget disease of the nipple from DCIS or invasive cells in the epidermis. |
| BP-rp24-07 | TAUGHT | b22 | Luminal A, luminal B, HER2-enriched, basal-like/triple-negative (BRCA1, young Black women). |
| BP-rp24-08 | TAUGHT | b30-b31 | Axillary nodes strongest, then size, receptors, grade, metastasis. |
| BP-rp24-09 | TAUGHT | b24-b25, b28 | ERBB2 amplification, trastuzumab cardiotoxicity, pertuzumab, lapatinib/tucatinib, ADCs. |
| BP-rp24-10 | TAUGHT | b26-b27, b32 | Tamoxifen (endometrial cancer, VTE), aromatase inhibitors (bone loss), fulvestrant, CDK4/6, raloxifene, PARP inhibitors with synthetic lethality. |
| BP-rp24-11 | TAUGHT | b17, b30 | Men: ducts only, usually ductal, ER-positive, BRCA2, Klinefelter. |
| BP-rp24-12 | TAUGHT | b10-b12 | Precursor sequence both lines. |
| BP-rp24-13 | TAUGHT | b30 | USPSTF 2024 biennial 40-74, carriers earlier with MRI; spread to nodes, bone, liver, lung, brain. |
| BP-rp24-14 | TAUGHT | b17 | Upper outer quadrant with axillary tail. |
| BP-rp24-15 | TAUGHT | b1 | Alcohol and dense breast tissue (also hides tumors). |

rp24: 27 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR

## rp25

| id | verdict | where | evidence |
|---|---|---|---|
| MATERNAL-PHYS.1 | TAUGHT | b8-b11, b19 | SVR falls first (progesterone, estrogen, relaxin, NO, placental circuit), pressure nadir in second trimester (diastolic more), RAAS-driven volume, output up 40-50 percent via stroke volume then heart rate 10-20, supine hypotension from caval compression. |
| MATERNAL-PHYS.2 | TAUGHT | b15-b17, b19 | Hormonal (progesterone drive, tidal volume +30-40, rate unchanged), metabolic (oxygen consumption +20 percent, overshoot), structural (diaphragm up 4 cm); PaCO2 30, PaO2 100-105, bicarbonate 20, compensated respiratory alkalosis; FRC, expiratory reserve and residual volume down, total lung capacity nearly unchanged. |
| MATERNAL-PHYS.3 | TAUGHT | b13-b14 | Plasma volume +40-50 vs red cell mass +20-30, erythropoietin, dilutional anemia thresholds, iron need, leukocytosis, platelets, fibrinogen and factors up, protein S down, fibrinolysis slowed, VTE (left leg), ESR unusable. |
| MATERNAL-PHYS.4 | TAUGHT | b21 | Constipation, reflux (relaxed LES), gallstones, relaxin and symphysis loosening, lordosis, carpal tunnel, skin changes. Gastric emptying is stated as slowed (see ERROR row). |
| MATERNAL-PHYS.5 | TAUGHT | b18 | Renal plasma flow and GFR +50 percent, creatinine and BUN fall (1.0 abnormal), glucosuria, hydroureter/hydronephrosis (right more), asymptomatic bacteriuria to pyelonephritis. |
| TBL-EARLY-PREG.1 | TAUGHT | b1-b6 | hCG from syncytiotrophoblast rescues the corpus luteum, kinetics, luteal-placental shift at 7-10 weeks (danger window), progesterone drives decidualization and myometrial quiescence (gap junctions, oxytocin receptors), mifepristone, hPL and estrogen roles. |
| PREG-REVIEW.1 | TAUGHT | b23-b26 | Physiology linked to pathology: aortocaval compression and uterine blood flow (no autoregulation), blood-volume reserve vs late shock signs, hypercoagulability and VTE, labor/delivery cardiac output peak, BP reference for preeclampsia; the labor, placentation and hypertension pathologies are in rp27/rp28. |
| PREG-REVIEW.6 | TAUGHT | b5, b8-b22 | Endocrine (hCG TSH-like action, TBG total T4, CBG cortisol, hPL insulin resistance, prolactin, pituitary enlargement), cardiovascular, pulmonary (residual volume), renal, gastrointestinal. |
| BP-rp25-01 | TAUGHT | b8-b11 | Output +40-50 percent, SVR down, nadir second trimester, supine hypotension. |
| BP-rp25-02 | TAUGHT | b13-b14 | Plasma volume vs red cell mass, leukocytosis, hypercoagulable. |
| BP-rp25-03 | TAUGHT | b15-b17 | Progesterone drive, tidal volume, respiratory alkalosis with low bicarbonate, FRC and residual volume down, TLC unchanged. |
| BP-rp25-04 | TAUGHT | b18 | GFR +50 percent, low creatinine, glucosuria, hydroureter/hydronephrosis, pyelonephritis. |
| BP-rp25-05 | TAUGHT | b21 | Slow gut, constipation, reflux, gallstones, relaxin, lordosis, carpal tunnel. |
| BP-rp25-06 | TAUGHT | b5, b22 | hPL insulin resistance, prolactin, TBG, CBG, pituitary enlargement. |
| BP-rp25-07 | TAUGHT | b1-b3 | Doubling about 48 h, peak near 10 weeks, corpus luteum then placental progesterone. |
| BP-rp25-08 | TAUGHT | b21 | Melasma, linea nigra, striae, spider angiomas, palmar erythema. |
| BP-rp25-09 | TAUGHT | b22 | Placental alkaline phosphatase, dilution, creatinine and BUN lower, fibrinogen higher (b14). |
| BP-rp25-10 | TAUGHT | b8, b11 | Underfilling sensed, renin, aldosterone and angiotensinogen, sodium and water retention. |
| rp25#b21 | ERROR | b21 (also b26 table row "Relaxed lower esophageal sphincter and slow gastric emptying") | "gastric emptying and colonic transit slow" under progesterone. Gastric emptying is not delayed in normal pregnancy before labor (Williams; ASA/obstetric anesthesia consensus); the aspiration risk comes from a lax lower esophageal sphincter, higher intragastric pressure and slowed intestinal and colonic transit, and gastric emptying slows only in labor or with opioids. Reword to "slows intestinal and colonic transit" and "relaxed LES" (minor; sources vary in wording). |

rp25: 18 TAUGHT, 0 PARTIAL, 0 MISSING, 1 ERROR

## rp26

| id | verdict | where | evidence |
|---|---|---|---|
| TBL-EARLY-PREG.3 | TAUGHT | b3, b5 | Gestational sac at about 5 weeks with double decidual sign (vs pseudosac), mean sac diameter, yolk sac 5-6 weeks, fetal pole 6 weeks, cardiac activity 6-7 weeks, crown-rump length dating, failure criteria (no cardiac activity at 7 mm; empty sac at 25 mm). |
| TBL-EARLY-PREG.4 | TAUGHT | b1, b3-b6 | Four ordered questions, hCG proves trophoblast not location, discriminatory zone (up to 3,500), pregnancy of unknown location, serial hCG rise thresholds (49/40/33 percent), failing falls and ectopic rises slowly, one-value trap, pain/instability override. |
| TBL-EARLY-PREG.5 | TAUGHT | b1-b6, b9, b14-b15, b18-b23 | Normal IUP vs loss types (table) vs ectopic (adnexal mass, empty uterus, slow hCG) vs mole (very high hCG, snowstorm). |
| TBL-EARLY-PREG.6 | TAUGHT | b11-b12 | Delayed tubal transport (PID/cilia damage, prior ectopic, surgery, smoking, IVF, IUD), ampulla, rupture and hemoperitoneum, amenorrhea-pain-bleeding, shoulder pain, methotrexate vs surgery. |
| TBL-EARLY-PREG.7 | TAUGHT | b1-b6 | Pregnant? intrauterine? viable? stable? framework with thresholds. |
| GTD.1 | TAUGHT | b24 | Extremes of maternal age, prior mole, nulliparity and Asian ancestry, familial NLRP7 recurrent moles. |
| GTD.2 | TAUGHT | b24, b27 | Maternal age and prior mole, antecedent pregnancy (mole 50, normal 25, abortion/ectopic 25 percent), complete vs partial progression, pre-evacuation hCG above 100,000, large theca lutein cysts, age over 40. |
| GTD.3 | TAUGHT | b26 | Baseline hCG, CBC, type and Rh, coagulation, renal, liver, thyroid, chest x-ray; suction curettage with uterotonic, medical evacuation avoided, hysterectomy for no more children, Rh immune globulin, hCG surveillance, hormonal contraception (IUD after hCG undetectable). |
| GTD.4 | TAUGHT | b27, b29-b30 | Plateau or rise criteria, staging I-IV and WHO score, imaging, low-risk single-agent methotrexate or actinomycin D, high-risk multiagent EMA-CO, PSTT/ETT hysterectomy. |
| GTD.5 | TAUGHT | b18-b23 | Paternal-only genome (empty egg, duplication) vs triploid dispermy, imprinting and p57, hydropic villi with cisterns and trophoblastic hyperplasia, partial mole two populations, hCG effects (hyperemesis, thyroid, theca lutein), comparison table. |
| GTD.6 | TAUGHT | b27, b29-b30 | Invasive mole, choriocarcinoma (cytotrophoblast and syncytiotrophoblast, no villi, hematogenous spread, chemosensitive), placental site tumor (intermediate trophoblast, hPL, hysterectomy), epithelioid tumor. |
| BICEP-LEWIS.3 | TAUGHT | b8-b9, b14 | Work-up (vitals, speculum, quantitative hCG, Rh, ultrasound) and differential table (implantation bleeding, subchorionic hemorrhage, cervical polyp/ectropion, threatened/inevitable abortion, ectopic, mole), Rh immune globulin. |
| BP-rp26-01 | TAUGHT | b1-b3 | Framework with sac, yolk sac, fetal pole, cardiac activity. |
| BP-rp26-02 | TAUGHT | b4 | Discriminatory zone and serial hCG rise. |
| BP-rp26-03 | TAUGHT | b11-b12 | Ampulla, risk factors, triad, hemoperitoneum, methotrexate criteria vs surgery. |
| BP-rp26-04 | TAUGHT | b14-b15 | Threatened, inevitable, incomplete, complete, missed by os and tissue; chromosomal causes. |
| BP-rp26-05 | TAUGHT | b16 | Antiphospholipid syndrome, septate uterus, parental translocation. |
| BP-rp26-06 | TAUGHT | b18, b20-b23 | 46,XX paternal, no fetal parts, snowstorm, very high hCG, hyperemesis, early preeclampsia, hyperthyroidism, theca lutein, p57 negative. |
| BP-rp26-07 | TAUGHT | b18, b20, b22-b23 | Triploid 69,XXY, fetal parts, lower hCG, p57 positive. |
| BP-rp26-08 | TAUGHT | b26 | Suction curettage, serial hCG to zero, contraception, persistence means neoplasia. |
| BP-rp26-09 | TAUGHT | b29-b30 | Invasive mole, choriocarcinoma, PSTT (hPL), chemosensitivity. |
| BP-rp26-10 | TAUGHT | b21, b32 | Hyperemesis with weight loss, ketosis, hypokalemic alkalosis, molar and multiple pregnancy. |
| BP-rp26-11 | TAUGHT | b4, b8 | Pregnancy of unknown location, Rh immune globulin. |
| BP-rp26-12 | TAUGHT | b24, b27 | Age extremes, prior mole, complete vs partial progression, choriocarcinoma after any pregnancy. |

rp26: 24 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp27

| id | verdict | where | evidence |
|---|---|---|---|
| THIRD-TRI.1 | TAUGHT | b1-b2 | BP trajectory with nadir, chronic vs gestational vs preeclampsia (140/90, 300 mg or ratio 0.3, end-organ damage), severe features (160/110, platelets under 100,000, creatinine over 1.1, transaminases twice normal, pulmonary edema, headache/visual), HELLP, eclampsia, superimposed. |
| THIRD-TRI.2 | TAUGHT | b4-b5, b11-b12 | Headache and visual change, RUQ/epigastric pain, edema/reflexes, labs; severe-range BP within an hour (labetalol, hydralazine, nifedipine), magnesium sulfate seizure prophylaxis and toxicity, delivery timing. |
| THIRD-TRI.3 | TAUGHT | b14 | hPL (with cortisol and progesterone) causes resistance and lipolysis, free fatty acids for mother, glucose for fetus (evolutionary advantage). |
| THIRD-TRI.4 | TAUGHT | b15 | Who (risk factors; first visit if high risk), when (24-28 weeks), how (two-step 50 g then 100 g with Carpenter-Coustan, one-step 75 g), why (treatment lowers macrosomia, shoulder dystocia, preeclampsia). |
| THIRD-TRI.5 | TAUGHT | b15-b16 | Risk factors incl. PCOS, fetal hyperinsulinemia, macrosomia, shoulder dystocia, neonatal hypoglycemia, surfactant delay, polycythemia, hypocalcemia, polyhydramnios, maternal preeclampsia/cesarean/type 2 diabetes. |
| THIRD-TRI.6 | TAUGHT | b20-b24 | Previa (lower segment bleeding, no digital exam), abruption (premature separation, concealed clot, DIC via tissue factor), accreta/increta/percreta (missing decidua basalis, cesarean scar), vasa previa; complications and why prenatal diagnosis matters. |
| PREG-REVIEW.7 | TAUGHT | b1 (rp25 b8) | Early fall from SVR, nadir in second trimester, return to prepregnancy value by term. |
| PREG-REVIEW.8 | TAUGHT | b1-b2, b4-b5, b11-b12 | Diagnostic criteria for preeclampsia, eclampsia and HELLP; magnesium prevents seizures, does not lower pressure, toxicity by patellar reflex, respiratory rate, urine output, calcium gluconate. |
| PREG-REVIEW.9 | TAUGHT | b26-b27 | Fetomaternal hemorrhage, IgM then IgG in the next pregnancy, hemolytic disease with hydrops and kernicterus, anti-D at 28 weeks and within 72 hours, Kleihauer-Betke, MCA Doppler and transfusion, ABO contrast. |
| PREG-REVIEW.10 | TAUGHT | b9, b15, b30 | Preeclampsia, GDM and preterm labor risk factors (prior preterm, multiples, short cervix, infection, smoking; chronic hypertension). |
| PREG-REVIEW.11 | TAUGHT | b14-b18 | hPL etiology, screening, fetal consequences, pregestational vs gestational (A1c under 6.5 preconception, organogenesis effects), postpartum retest and type 2 diabetes risk. |
| PREG-REVIEW.12 | TAUGHT | b33-b34 | Fundal height equals weeks 20-36 (gap over 3 cm), estimated fetal weight under 10th percentile, umbilical artery Doppler, symmetric vs asymmetric, macrosomia. |
| PREG-REVIEW.15 | TAUGHT | b20-b23 | Previa, abruption, accreta spectrum, vasa previa, uterine rupture; why ultrasound diagnosis allows scheduled cesarean/hysterectomy and avoids rupture of vessels. |
| PREG-REVIEW.17 | TAUGHT | b36-b37 | Intrahepatic cholestasis (bile acids, stillbirth, ursodiol, delivery 36-37 weeks), PUPPP (striae, spares umbilicus, benign), pemphigoid gestationis (periumbilical, IgG), AFLP, amniotic fluid embolism. |
| BICEP-LEWIS.7 | TAUGHT | b1-b2 | As THIRD-TRI.1. |
| BICEP-LEWIS.9 | TAUGHT | b4-b5, b11-b12 | Symptoms incl. epigastric pain, labetalol/hydralazine/nifedipine, magnesium seizure prophylaxis, delivery. |
| BICEP-LEWIS.10 | TAUGHT | b20-b23 | Previa, abruption, vasa previa, accreta, uterine rupture, bloody show, work-up without digital exam. Cervical/vaginal causes are not listed for the third trimester. |
| BICEP-LEWIS.11 | TAUGHT | b20-b22 | Painless bright-red previa, painful hypertonic abruption, accreta/increta/percreta, vasa previa. |
| BICEP-LEWIS.12 | TAUGHT | b33-b34 | Placental insufficiency (preeclampsia, hypertension, smoking), aneuploidy, congenital infection; oligohydramnios, stillbirth, asphyxia, adult metabolic syndrome. Other maternal causes (renal disease, lupus/antiphospholipid, malnutrition, drugs, multiples) are not listed. |
| BICEP-LEWIS.13 | TAUGHT | b26-b27 | Pathophysiology, sensitizing events, consequences (hydrops, kernicterus), prevention, ABO contrast. |
| BP-rp27-01 | TAUGHT | b1-b2, b5 | Chronic, gestational, preeclampsia, severe features, eclampsia, HELLP. |
| BP-rp27-02 | TAUGHT | b7 | Shallow spiral artery remodeling, ischemia, sFlt-1 trapping VEGF/PlGF, endothelial dysfunction, fibrinoid necrosis. |
| BP-rp27-03 | TAUGHT | b9, b11-b12 | Delivery definitive, magnesium (reflexes, respiratory depression, calcium gluconate), labetalol/hydralazine/nifedipine, aspirin 81 mg. |
| BP-rp27-04 | TAUGHT | b14-b16 | hPL resistance, screening 24-28 weeks, diet then insulin, macrosomia, shoulder dystocia, hypoglycemia, polyhydramnios, type 2 diabetes. |
| BP-rp27-05 | TAUGHT | b18 | Heart defects (TGA, VSD), NTD, caudal regression, stillbirth, tight preconception control. |
| BP-rp27-06 | TAUGHT | b20-b22 | Previa, accreta spectrum, abruption (risk factors, DIC), vasa previa. |
| BP-rp27-07 | TAUGHT | b26-b27 | Rh alloimmunization, anti-D 28 weeks and 72 hours, Kleihauer-Betke. |
| BP-rp27-08 | TAUGHT | b30 | Tocolytics (nifedipine, indomethacin before 32 weeks with ductus and oligohydramnios, terbutaline), betamethasone, magnesium neuroprotection, GBS. |
| BP-rp27-09 | TAUGHT | b31 | PROM tests (nitrazine, fern), chorioamnionitis. |
| BP-rp27-10 | TAUGHT | b33-b34 | Growth restriction vs macrosomia, fundal height, oligohydramnios in restriction, polyhydramnios in diabetes (b16). |
| BP-rp27-11 | TAUGHT | b36-b37 | Cholestasis, PUPPP, pemphigoid gestationis, AFLP. |
| BP-rp27-12 | TAUGHT | b1 | Trajectory. |
| BP-rp27-13 | TAUGHT | b1-b2 | 140/90 twice, 300 mg or ratio 0.3, 160/110, superimposed. |
| BP-rp27-14 | TAUGHT | b9 | Prior preeclampsia, nulliparity, multiples, chronic hypertension, diabetes, CKD, antiphospholipid/lupus, obesity, molar pregnancy. |
| BP-rp27-15 | TAUGHT | b16 | Glucose crosses, insulin does not; hyperplasia, macrosomia, hypoglycemia, polycythemia, hypocalcemia, surfactant delay. |
| BP-rp27-16 | TAUGHT | b27 | ABO in first pregnancy, mild, weak Coombs, not preventable vs Rh. The positive Coombs of Rh disease is not stated. |
| BP-rp27-17 | TAUGHT | b34 | Symmetric vs asymmetric head-sparing with causes. |
| BP-rp27-18 | TAUGHT | b36-b37 | Amniotic fluid embolism: hypoxemia, hypotension, DIC in labor. |
| BP-rp27-19 | TAUGHT | b15 | Risk factors and first-visit testing for high risk. |
| BP-rp27-20 | TAUGHT | b20 | Concealed retroplacental clot, shock out of proportion. |
| BP-rp27-21 | TAUGHT | b31 | Fever, fetal tachycardia, tender uterus or foul fluid, antibiotics and delivery, neonatal sepsis. |

rp27: 41 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp28

| id | verdict | where | evidence |
|---|---|---|---|
| LABOR-DELIVERY.1 | TAUGHT | b1 | Placental CRH to fetal pituitary ACTH, fetal adrenal cortisol and DHEA-S to placental estrogen, estrogen:progesterone shift, prostaglandins, posterior pituitary oxytocin, Ferguson reflex. |
| LABOR-DELIVERY.2 | TAUGHT | b1-b2 | Connexin 43 gap junctions pass ions, action potentials spread, synchronous contraction; estrogen upregulates connexin 43 and oxytocin receptors. |
| LABOR-DELIVERY.3 | TAUGHT | b8-b9, b25-b26, b34-b36 | Three stages with latent/active phase at 6 cm, cardinal movements in order incl. restitution, third stage separation signs, shoulder dystocia (McRoberts), postpartum hemorrhage. |
| LABOR-DELIVERY.4 | TAUGHT | b34, b36 | About 500 mL normal, 1000 mL or more is hemorrhage, oxytocin (Pitocin) in active management with cord traction and massage, atony mechanism. |
| LABOR-DELIVERY.5 | TAUGHT | b26 | C5-C6 Erb (waiter's tip posture), C8-T1 Klumpke (claw hand, Horner), traction mechanism. |
| LABOR-DELIVERY.6 | TAUGHT | b28-b29 | Perineal body, bulbospongiosus and transverse perineal muscles, external and internal anal sphincter, rectal mucosa, degrees 1-4 with 3a-3c, episiotomy type. |
| PRENATAL-CARE.10 | TAUGHT | b19 | Tocodynamometer (frequency only), Doppler, scalp electrode, intrauterine pressure catheter (needs ruptured membranes), non-stress test criteria. |
| PRENATAL-CARE.11 | TAUGHT | b5 | Dilation, effacement, station, consistency, position; Bishop 0-13 with 8 or more favorable. |
| PRENATAL-CARE.12 | TAUGHT | b6 | Misoprostol (PGE1), dinoprostone (PGE2), balloon, collagen breakdown, tachysystole, avoid after cesarean, oxytocin. |
| PRENATAL-CARE.13 | TAUGHT | b16-b17 | Four Leopold maneuvers, lie, presentation, vertex, frank breech, version with contraindications, planned cesarean, persistent transverse lie. |
| PRENATAL-CARE.16 | TAUGHT | b6, b19-b21 | Non-stress test, biophysical profile with AFI, tracing interpretation, indications for testing, induction when delivery is safer than waiting (preeclampsia, rupture, past 41 weeks). |
| PRENATAL-CARE.17 | TAUGHT | b13-b14 | Visceral T10-L1 vs somatic S2-S4 routes, opioid (neonatal depression), nitrous oxide, epidural (hypotension, longer second stage), pudendal block, local infiltration. |
| DELIVERY-SIM.1 | TAUGHT | b25, b30-b32 | Modified Ritgen, nuchal cord, restitution, anterior then posterior shoulder, delayed cord clamping 30-60 s, cut, skin to skin, placental separation signs and inspection, third-stage complications. Pre-delivery set-up and immediate newborn assessment are not described. |
| PREG-REVIEW.18 | TAUGHT | b8-b11 | Three stages, latent vs active at 6 cm, protraction vs arrest with 4-hour and 3/2-hour criteria, three Ps, table and figure. |
| PREG-REVIEW.19 | TAUGHT | b25-b27, b32 | Cardinal movements, shoulder dystocia, cord prolapse, retained placenta, uterine inversion, atony. |
| BP-rp28-01 | TAUGHT | b1-b2 | CRH, cortisol, estrogen:progesterone, prostaglandins, oxytocin receptors, connexin 43, Ferguson reflex. |
| BP-rp28-02 | TAUGHT | b8-b11 | Stages and arrest disorders. |
| BP-rp28-03 | TAUGHT | b25 | Engagement, descent, flexion, internal rotation, extension, restitution, expulsion. |
| BP-rp28-04 | TAUGHT | b5-b6 | Bishop, misoprostol, dinoprostone, balloon, oxytocin. |
| BP-rp28-05 | TAUGHT | b19-b23 | Early/variable/late decelerations, non-stress test, biophysical profile. |
| BP-rp28-06 | TAUGHT | b16-b17 | Leopold, breech, external cephalic version. |
| BP-rp28-07 | TAUGHT | b13-b14 | Epidural for both routes with hypotension, pudendal block S2-S4, systemic opioids. |
| BP-rp28-08 | TAUGHT | b26 | Erb C5-C6 and Klumpke C8-T1 with signs. |
| BP-rp28-09 | TAUGHT | b28-b29 | Degrees 1-4 with perineal body, external sphincter, rectal mucosa. |
| BP-rp28-10 | TAUGHT | b34-b36 | Over 1000 mL, atony and the four causes (tone, trauma, tissue, thrombin; not labeled "4 Ts"), oxytocin, methylergonovine, carboprost, misoprostol, retained placenta; tranexamic acid only in b41 and the figure caption. |
| BP-rp28-11 | TAUGHT | b38 | Prolactin, oxytocin let-down, estrogen/progesterone block, lactational amenorrhea. |
| BP-rp28-12 | TAUGHT | b39-b40 | Lochia, involution, endometritis, mastitis, thromboembolism, postpartum thyroiditis, Sheehan, blues/depression/psychosis. |
| BP-rp28-13 | TAUGHT | b38 | Active untreated TB, certain drugs, galactosemia, HIV with 2025 shared decision-making. |
| BP-rp28-14 | TAUGHT | b21 | Baseline 110-160, variability, accelerations, absent variability with recurrent lates, sinusoidal pattern. |
| BP-rp28-15 | TAUGHT | b3 | Gq receptor, IP3 and calcium, tachysystole, water intoxication and hyponatremia. |

rp28: 30 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR

## rp29

| id | verdict | where | evidence |
|---|---|---|---|
| PATHPHARM-MENSES-CONTRA.4 | TAUGHT | b18, b25-b26 (rp10) | Sexual history by the 5 Ps incl. consensual practices and pregnancy intention opening contraceptive counseling, adolescent time alone, confidentiality limits, minors' consent (parental consent exceptions), informed consent components; contraceptive method counseling itself is rp10 (listed). |
| TRANSGENDER-LEC.1 | TAUGHT | b1-b3 | Sex assigned at birth, gender identity, nonbinary, expression, orientation, layers of sex; current vs old terms (transgender not transsexual, gender-affirming not reassignment), gender dysphoria vs gender incongruence, asking names and pronouns. |
| TRANSGENDER-LEC.2 | TAUGHT | b21 | Name change without hormones or surgery, license marker and birth certificate by state law (self-attestation, X marker), Medicaid mandates and bans, state restrictions on minors' care as of 2025. |
| TRANSGENDER-LEC.3 | PARTIAL | b10, b13, b18 | Contraception (testosterone is not contraception, IUD/implant/progestin), fertility preservation (sperm banking, oocyte/embryo cryopreservation, pregnancy after stopping testosterone) and sexual-history-driven site-specific STI screening are taught. The "risk of sexual infections" is not stated as a risk: no mention of higher HIV/STI burden, receptive anal sex, neovaginal infections, or the course's point that testosterone-induced vaginal atrophy raises the risk of bacterial vaginosis, cervicitis and cystitis (slide 41), or of PrEP. One or two sentences fix it. |
| TRANSGENDER-LEC.4 | TAUGHT | b5-b9, b11 | Feminizing (estradiol, spironolactone with potassium, GnRH agonist; VTE, triglycerides, gallstones), masculinizing (testosterone; hematocrit above about 54 percent, lipids, vaginal atrophy, permanent voice/clitoral change, menstrual suppression, contraindications), puberty blockers (continuous GnRH agonist, Tanner 2, reversible, bone density); table with monitoring. The course's testosterone-associated BV/cystitis risk (slide 41) is not stated. |
| TRANSGENDER-LEC.5 | TAUGHT | b14 | Mastectomy, hysterectomy with or without oophorectomy, vaginoplasty (dilation, stenosis, fistula), phalloplasty (flap, urethral fistula, stricture, later implant); indication (persistent gender incongruence, assessment letter, hormones need not stop). |
| TRANSGENDER-LEC.6 | TAUGHT | b16-b19 | Organ inventory, cervical screening (testosterone, self-collected HPV), prostate after vaginoplasty with PSA caution, breast by tissue (hormone-exposure criteria not detailed), HPV vaccination, STI sites, mental health (suicide risk about 4 in 10), partner violence. |
| LIFESPAN-PANEL.1 | TAUGHT | b21 | Needs, higher depression/suicide/substance use/violence, refusal of care, discrimination, knowledge deficit, insurance coverage gaps. |
| LIFESPAN-PANEL.2 | TAUGHT | b2, b22 | Ask name and pronouns, chosen name field, neutral pronoun, apologize once when misgendering, inclusive language, intake form design. |
| LIFESPAN-PANEL.3 | TAUGHT | b21, b25-b26, b32 | State law and minors, parental permission with assent for hormones, capacity, informed consent, conscientious objection, mandatory reporting, autonomy. |
| LIFESPAN-PANEL.4 | TAUGHT | b23 | Primary care/endocrinology, ob/gyn, reproductive endocrinology, urology, plastic surgery, speech pathology, mental health and social work, referral and coordination. |
| LIFESPAN-PANEL.5 | TAUGHT | b22, b31 | Assumptions and microaggressions, intake forms, implicit bias, trans man pregnancy example. |
| LIFESPAN-CASES.1 | TAUGHT | b29 | Tuskegee 1932-1972, Belmont Report principles, coerced sterilization, mistrust and long-acting contraception pressure. |
| LIFESPAN-CASES.2 | TAUGHT | b32-b33 | Five lenses (clinical, ethical, legal, psychosocial, health equity) with autonomy, beneficence, nonmaleficence, justice, worked case in the figure. |
| LIFESPAN-CASES.3 | TAUGHT | b30-b31 | Structural racism, social determinants, maternal mortality gap, implicit bias, name the barrier. |
| LIFESPAN-CASES.4 | TAUGHT | b31 | Professional interpreter, cultural humility, shared decision-making, trauma-informed steps. |
| LIFESPAN-CASES.5 | TAUGHT | b32 | Standard of care as legal measure, mandatory reporting vs confidentiality, conscientious objection with duty to refer, divergence of law, ethics and judgment. |
| BICEP-BROWN.8 | TAUGHT | b26 | Capacity (understand, appreciate, reason, choose), disclosure of risks, benefits and alternatives incl. none, voluntariness, capacity vs competence. |
| BICEP-BROWN.9 | TAUGHT | b18, b31 | Explain each step, ask permission, chaperone, stop at any time, delay pelvic exam until rapport, patient-controlled speculum; sexual history approach. |
| BP-rp29-01 | TAUGHT | b1-b2 | Terminology and names/pronouns. |
| BP-rp29-02 | TAUGHT | b16-b19 | Organ inventory drives cervical, prostate and breast screening. |
| BP-rp29-03 | TAUGHT | b5, b9 | Estradiol plus spironolactone (potassium) or GnRH agonist, VTE, breast growth, fewer erections and sperm. |
| BP-rp29-04 | TAUGHT | b6, b9-b10 | Testosterone effects, hematocrit, not contraception, virilizes a female fetus. |
| BP-rp29-05 | TAUGHT | b7, b11 | Continuous GnRH agonist, reversible pause. |
| BP-rp29-06 | TAUGHT | b13-b14 | Fertility preservation first; surgeries with risks. |
| BP-rp29-07 | TAUGHT | b18, b25 | 5 Ps, minors' consent for contraception, STI and prenatal care, confidentiality. |
| BP-rp29-08 | TAUGHT | b29, b31 | Historical abuses (Tuskegee, coerced sterilization), trauma-informed care, informed consent. |
| BP-rp29-09 | PARTIAL | b21, b30 | Maternal mortality gap and LGBTQ+ access are taught. MISSING: the menopause-care disparity named in the item (for example later and longer vasomotor symptoms in Black women with lower rates of hormone therapy offers, and thin clinician training); rp11 has no disparity text either. One sentence fixes it. |
| BP-rp29-10 | TAUGHT | b32-b33 | Law, ethics and judgment diverge, with the figure. |
| BP-rp29-11 | TAUGHT | b3 | DSM-5 dysphoria: 6 months, distress; identity is not a disorder. |
| BP-rp29-12 | TAUGHT | b10, b6, b34 | Testosterone not contraception, ovulation can continue, IUD/progestin, estradiol incompletely stops sperm, vaginal atrophy, low HDL. |

rp29: 29 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR

## rp30

| id | verdict | where | evidence |
|---|---|---|---|
| TBL-EARLY-PREG.2 | TAUGHT | b1-b3 | LMP-based age, Naegele's rule with worked date, crown-rump length first, redating thresholds by gestational age, first-trimester dating never changed, IVF dating from embryo transfer (5-day blastocyst = 2 weeks 5 days). |
| PRENATAL-CARE.1 | TAUGHT | b4 | Gravidity vs parity (births from 20 weeks), TPAL digits, twins as one birth, worked G4 P1113 example. |
| PRENATAL-CARE.2 | TAUGHT | b16-b18 | Cell-free DNA (most sensitive, screen only), first-trimester screen (nuchal translucency, PAPP-A, hCG), quad screen (AFP, estriol, hCG, inhibin A) with trisomy 21 and 18 patterns, CVS and amniocentesis, microarray and carrier screening. |
| PRENATAL-CARE.3 | TAUGHT | b1-b3 | Crown-rump length first trimester (5-7 days); later biparietal diameter, head and abdominal circumference, femur length; redating table. |
| PRENATAL-CARE.4 | TAUGHT | b4, b6 | Preterm, early term, full term, late term, post-term table. |
| PRENATAL-CARE.5 | TAUGHT | b10-b11 | Table of menstrual, obstetric, medical, surgical, family, medication/allergy, social (substance use, intimate partner violence) history with why each matters; risk factors. |
| PRENATAL-CARE.6 | PARTIAL | b13 | Exam components are taught (blood pressure, weight, urine dipstick for protein and glucose, fetal heart tones from 10-12 weeks, fundal height, Leopold from 36 weeks, visit schedule, quickening 18-20 weeks). The "common questions elicited, based upon trimester" are not: b13 says only "asks about symptoms and fetal movement". Fix: one row or sentence listing questions by trimester (first: nausea, bleeding, cramping; second: fetal movement, leaking fluid; third: contractions, bleeding, leaking fluid, decreased movement, headache/visual change/RUQ pain). |
| PRENATAL-CARE.7 | TAUGHT | b14 | Timeline table: first-visit labs, 10-13 week screens and CVS, quad screen and amniocentesis, anatomy scan, 24-28 week glucose challenge/CBC/anti-D, Tdap/flu/RSV, group B strep at 36-37 weeks. |
| PRENATAL-CARE.8 | TAUGHT | b37-b38 | Tdap each pregnancy 27-36 weeks, inactivated influenza, RSV 32-36 weeks; live vaccines (MMR, varicella, intranasal influenza) contraindicated, HPV deferred. |
| PRENATAL-CARE.9 | TAUGHT | b19-b23 | Folic acid in DNA synthesis, neural tube closure at 28 days, 0.4 mg preconception, 4 mg after prior NTD, fortification; maternal AFP, amniotic AFP and acetylcholinesterase, ultrasound (banana and lemon signs), CVS cannot detect. |
| PREG-REVIEW.2 | TAUGHT | b1-b3 | As TBL-EARLY-PREG.2 incl. 7-day threshold and embryo transfer dating. |
| PREG-REVIEW.3 | TAUGHT | b28, b30, b32 | ACE inhibitors/ARBs, NSAIDs, warfarin, valproate, carbamazepine, methotrexate (fetal loss), isotretinoin, thalidomide, tetracyclines, aminoglycosides, lithium, phenytoin, methimazole, misoprostol, mycophenolate, topiramate, DES. |
| PREG-REVIEW.4 | TAUGHT | b22-b23 | Role, timing before conception, 0.4 mg, fortification, 4 mg and higher doses with antiseizure drugs. |
| PREG-REVIEW.5 | TAUGHT | b16, b18 | Cell-free DNA, first-trimester and quad screens, CVS, amniocentesis, carrier screening (CF, SMA, hemoglobinopathies), karyotype vs microarray with timing. |
| PREG-REVIEW.13 | TAUGHT | b37-b38 | As PRENATAL-CARE.8. |
| PREG-REVIEW.16 | PARTIAL | b24-b26 | Table gives nervous system (spina bifida, anencephaly), heart (fetal echocardiography), abdominal wall (gastroschisis, omphalocele), chest (diaphragmatic hernia), kidneys (bilateral renal agenesis), face (cleft, UNANCHORED part) with ultrasound clues and the anatomy scan at 18-22 weeks. MISSING organ systems: gastrointestinal (duodenal atresia with the double-bubble sign and Down syndrome, esophageal atresia with polyhydramnios and absent stomach bubble), skeletal/limb (clubfoot, limb reduction, skeletal dysplasia), and urinary tract (hydronephrosis, posterior urethral valves). Two or three table rows fix it. |
| BICEP-WALSH.8 | TAUGHT | b4 | As PRENATAL-CARE.1 (twins one birth, losses before 20 weeks as abortions). |
| BICEP-LEWIS.1 | TAUGHT | b4 | As PRENATAL-CARE.1. |
| BICEP-LEWIS.2 | TAUGHT | b10-b11 | Maternal age under 17 or over 35, smoking, obesity, chronic hypertension, pregestational diabetes, interpregnancy interval under 6 months, prior preterm birth/preeclampsia by history, bacteriuria. |
| BICEP-LEWIS.4 | TAUGHT | b1-b3, b6 | Crown-rump length, later biometry, redating, and term/preterm/post-term cut-offs. |
| BICEP-LEWIS.5 | TAUGHT | b10 | Seven-row history table. |
| BICEP-LEWIS.6 | TAUGHT | b28-b35 (rp18) | Timing windows (all-or-none, organogenesis, fetal), drug table and signature effects, ionizing radiation above about 50 mGy, maternal PKU, diabetes, congenital rubella; other infections in rp18. |
| BICEP-LEWIS.8 | TAUGHT | b34 | Alcohol (FAS), tobacco, cocaine (abruption), opioids (preterm, growth restriction, neonatal abstinence syndrome, methadone/buprenorphine); rp27 adds growth effects. |
| BP-rp30-01 | TAUGHT | b1-b4, b6 | Crown-rump first, Naegele's rule, term categories. |
| BP-rp30-02 | TAUGHT | b4 | G P TPAL. |
| BP-rp30-03 | TAUGHT | b16 | Cell-free DNA, nuchal translucency, PAPP-A, hCG, quad screen patterns for 21 and 18, CVS and amniocentesis timing. |
| BP-rp30-04 | TAUGHT | b19, b22-b23 | AFP causes, folic acid 0.4 mg and 4 mg. |
| BP-rp30-05 | TAUGHT | b37-b38 | Tdap, inactivated influenza, RSV, live vaccines contraindicated. |
| BP-rp30-06 | TAUGHT | b30, b32 | Whole list (ACE inhibitors/ARBs, warfarin, isotretinoin, valproate, carbamazepine, phenytoin, lithium, methotrexate, thalidomide, tetracyclines, aminoglycosides, DES, alcohol, cocaine, methimazole, misoprostol, mycophenolate). |
| BP-rp30-07 | TAUGHT | b13-b14 | Labs and ultrasound by trimester, fundal height (umbilicus at 20 weeks). |
| BP-rp30-08 | TAUGHT | b19, b21 | AFP, acetylcholinesterase, closed defects, CVS limits. |
| BP-rp30-09 | TAUGHT | b11 | Urine culture, ureteral dilation and compression, pyelonephritis and preterm labor. |
| BP-rp30-10 | TAUGHT | b30, b32, b35 | Signature effects incl. nasal hypoplasia and stippled epiphyses, phocomelia, smooth philtrum, Mobius, microtia, cleft lip, ductus closure with NSAIDs; heparin does not cross. |
| BP-rp30-11 | TAUGHT | b16 | Trisomy 21: increased nuchal translucency, high hCG, low PAPP-A; trisomy 18: low hCG, low PAPP-A, increased nuchal translucency. |

rp30: 32 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR

## Summary

rp16: 21 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR
rp17: 26 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp18: 21 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp19: 21 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR
rp20: 21 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR
rp21: 29 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp22: 16 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp23: 19 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp24: 27 TAUGHT, 1 PARTIAL, 0 MISSING, 0 ERROR
rp25: 18 TAUGHT, 0 PARTIAL, 0 MISSING, 1 ERROR
rp26: 24 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp27: 41 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp28: 30 TAUGHT, 0 PARTIAL, 0 MISSING, 0 ERROR
rp29: 29 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR
rp30: 32 TAUGHT, 2 PARTIAL, 0 MISSING, 0 ERROR

Total: 375 TAUGHT, 9 PARTIAL, 0 MISSING, 1 ERROR

PARTIAL ids: TBL-STI.1 (rp16), PATHPHARM-MALE.5 and BP-rp19-09 (rp19), PATHPHARM-MALE.7 (rp20), TBL-BREAST.16 (rp24),
TRANSGENDER-LEC.3 and BP-rp29-09 (rp29), PRENATAL-CARE.6 and PREG-REVIEW.16 (rp30). ERROR: rp25 b21 and b26 (gastric emptying).

## Notes (not rows)

- The PARTIAL fixes are all one to three sentences or a table row; none needs a new section. rp16/rp17 (syphilis and LGV histology,
  molluscum treatment), rp19 (sexual-response phases, semen analysis parameters), rp20 (treatment lines for hydrocele, spermatocele,
  varicocele, testicular cancer, orchitis), rp24 (age, receptor class and treatment columns for the special carcinoma types), rp29
  (STI risk statement, menopause-care disparity), rp30 (trimester-specific questions, GI/skeletal/urinary anomalies).
- Currency point to consider (not scored as an error): rp26 b8 and b26 give Rh immune globulin for every Rh-negative loss before
  12 weeks (50 or 120 mcg); the ACOG 2024-2025 clinical practice update on pregnancy loss before 12 weeks allows shared decision-making
  to forgo it. The lesson already says the evidence is weakest for threatened abortion. Standard Step 1 teaching still says give it.
- Observed in the course decks but outside any objective or blueprint item, so not rows: the testosterone-related risk of bacterial
  vaginosis, cervicitis and cystitis with topical estrogen/lubricant advice (TRANSGENDER-LEC slide 41); teratoma is chemoresistant and
  resected (PATHPHARM-MALE slide 56); the fetal-echocardiography indication list in rp30 b25 omits maternal phenylketonuria and
  teratogen exposure other than lithium.
- Minor wording points that were left as TAUGHT: rp20 BP-rp20-08 (embryonal carcinoma "painful" and seminoma "late spread" not
  stated), rp22 BP-rp22-07 (cyproterone only in a figure caption), rp17 BP-rp17-10 (Henderson-Patterson eponym), rp27 BP-rp27-16
  (positive direct Coombs test of Rh disease not stated), rp28 BP-rp28-10 ("4 Ts" not labeled though the four causes are given).
