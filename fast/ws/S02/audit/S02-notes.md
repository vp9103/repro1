# S02 audit notes: Step 1-only rewrite of rp16, rp17, rp18, rp20, rp21

Body words (engine rule, tables and sexp included) before -> after; mins = ceil(words / 170).
Placed figures and images are unchanged in every topic. Guides were not touched (no card mentions removed content).
All five topics pass `fast_check.py --ws S02 --topics rp16,rp17,rp18,rp20,rp21 --build` (every line ok).

## rp16 Bacterial STIs and PID: 2567 -> 1992 words (mins 14 -> 12)
- Course-only / beyond Step 1: exact doses and durations for every drug (CDC mg, days, IM routes); the screening table (HIV, hepatitis B and C, men-who-have-sex-with-men sites, self-collected swabs); the chlamydia vs gonorrhea table (repeated the two paragraphs above it); IUD risk note; reverse-sequence syphilis algorithm (kept only in the pretest); tuberculous salpingitis; Streptococcus agalactiae and Gardnerella in PID.
- Step 2 management: PID diagnostic criteria (fever cutoff, wet mount, ESR/CRP), pregnancy test and ultrasound, admission criteria; test of cure at 4 weeks; syphilis dose schedule by stage and neurosyphilis duration.
- Repetition: the "about half of PID is culture-negative" aside; treatment lines repeated in three blocks.
- Added back for the practice items: "for 7 days" on doxycycline, "for several weeks" on LGV and donovanosis treatment.
- Kept although unsure: prozone effect, Warthin-Starry stain, pyosalpinx vs hydrosalpinx, "any genital ulcer raises HIV risk", erythromycin ointment not preventing chlamydial disease.

## rp17 Viral STIs: 2578 -> 1907 words (mins 14 -> 12)
- Course-only: generic virology table (genome, capsid, spread, evasion per virus) and the five-step "every virus borrows" steps block. The steps block is now the HIV course (acute infection, latency, AIDS); the life cycle with drug targets stays in figure rp17_hiv and in the ART paragraph.
- Beyond Step 1: gp160 cleavage, nef/TAP evasion detail; PrEP onset days, lenacapavir, condom efficacy percent, syringe programs; integrase-inhibitor chelation and antacids; screening age ranges and the screening-by-virus table; acyclovir regimens by episode type; type-specific serology; HPV vaccine dose schedule and list of five extra types; sinecatechins and surgical wart rows; cantharidin; HPV cytology schedule.
- Moved: the pregnancy HSV rules now sit in one sentence (36 weeks) and in rp18.
- Kept although unsure: scheduled cesarean at about 38 weeks (a practice item uses it), tropism test for maraviroc, Henderson-Paterson bodies, trigeminal ganglion, tenofovir "already a nucleotide".

## rp18 Infections in pregnancy and the newborn: 2259 -> 1765 words (mins 14 -> 11)
- Step 2 management: the 10-row maternal screening/action/newborn-risk table (repeated rp16 and rp17 and prenatal care); HIV delivery thresholds (viral load cutoff, transmission percent) because HIV is taught in rp17; chlamydia/gonorrhea NAAT and test of cure in pregnancy; trichomoniasis and bacterial vaginosis; GBS prophylaxis indications and penicillin-allergy alternatives; acyclovir and valacyclovir doses; wart treatment in pregnancy; hepatitis C screening/treatment detail; intrauterine transfusion; gentamicin synergy; interval to conception after rubella vaccine; VZIG timing windows.
- Repetition: the congenital syphilis stage table (merged into one paragraph with the same facts).
- Kept although unsure: chemical conjunctivitis on day 1, 30 to 50 percent neonatal HSV risk, laryngeal papillomatosis, hepatitis C 5 percent, fetal MCA Doppler (one clause, used in a practice stem), amnionitis.

## rp20 Scrotal and testicular disorders: 2588 -> 1971 words (mins 14 -> 12)
- Step 2 management: the whole treatment table (hydrocelectomy, varicocelectomy criteria, seminoma regimens, BEP, RPLND); manual detorsion; salvage percentages beyond the 6-hour point; CDC epididymitis regimens; sperm banking; staging details (nodal side, half-lives); testicular rupture exploration window; disorder-of-sex-development work-up for bilateral nonpalpable testes.
- Course-only / low yield: the "what else makes a testis hurt" section (referred pain, Fournier gangrene, work-up order); cryptorchidism incidence percentages; ascending testis; hydrocele resolution timing; filarial chylocele; hernia differential; varicocele grading and prevalence; spermatocytic tumor row; KIT mutation; torsed appendix testis as a third table column.
- Kept although unsure: torsed appendix testis (now one sentence; "blue dot sign" appears as a practice distractor), retractile testis, tuberculous/idiopathic granulomatous orchitis, INSL3 and gubernaculum.

## rp21 The prostate and the penis: 2342 -> 1845 words (mins 14 -> 11)
- Step 2 management: BPH watchful waiting, minimally invasive procedures, laser enucleation, simple prostatectomy, TURP hyponatremia; first-dose syncope; prostatitis antibiotic duration; USPSTF age 70 and risk-group earlier screening; bone-density management on ADT; hypospadias repair timing; phimosis algorithm (topical steroid, circumcision); Peyronie phases, nonsurgical list, plication/graft/prosthesis; penile cancer surgery; condyloma treatments; priapism treatment beyond "emergency".
- Course-only / low yield: BPH prevalence by age, estrogen role, gland weight; TMPRSS2-ERG, PTEN, MYC, TP53, luminal markers (glossary entry rp21_tmprss2 dropped); PIN percentage; the balanitis cause table (HSV, syphilis, chancroid are taught in rp16); urethral injury percent.
- Added back for the practice items: "Grade Groups 1 to 5".
- Kept although unsure: granulomatous prostatitis after BCG, verrucous carcinoma, flutamide hepatotoxicity, Batson plexus description.

## Notes for the orchestrator (not acted on)
- Practice questions, rapid items and drills for these topics were written against the longer lessons. Spot checks show some stems still use details the lessons no longer teach (for example rapid/rp18 penicillin-allergy GBS alternatives such as clindamycin and vancomycin, questions/rp17 delivery planning, questions/rp21 Fournier gangrene as a distractor). Most are distractors; the verifier may want to confirm none is the keyed answer.
- Figures, figure captions, images and guides were not edited (outside OWNS); nothing in them contradicts the shortened text.
