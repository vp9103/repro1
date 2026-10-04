# CANVAS-SCOPE — every lecture/session in scope for The Repro-Endo Path

Pulled 2026-09-26 from canvas.illinois.edu through the Canvas REST API in the user's logged-in Chrome
(`/api/v1/courses/<id>/modules?include[]=items`, then `/api/v1/courses/<id>/pages/<page_url>` per session).
Student rosters, group spreadsheets, Zoom credentials and panel biographies were deliberately NOT copied.

**Courses in scope**
- **BSE 638 Human Development & Reproductive Health** (Fall 2026, course id **70351**), weeks 1–8, 8/17–10/9/2026.
  Midterm 9/11/2026 (weeks 1–4). **Final exam: the module lists it Fri 10/9/2026 1:30–4 PM** (the page body says 10/2 — a copy error; the module position is 10/9). Anatomy practical 10/2/2026.
- **BSE 612 Foundations M2** (Summer 2026, course id **70371**), module "Week 2: Endocrinology & Pharmacology" (7/27–7/31/2026) — the only endocrine teaching the user has had. Everything else in endocrine comes from the Step 1 blueprint (see `STEP1-BLUEPRINT.md`).

**Machine-readable convention (the gate parses this file):** every objective is one line `CODE.N text`.
Session header lines start with `## CODE |`. `FILE` lines are Canvas file ids (`course/file`), `VIDEO` lines are MediaSpace links.
Objective IDs are stable: never renumber; add new ones at the end of a session as `CODE.N+1`.

**Also in the courses, not session pages (for the plan's S-phase):**
- Weekly quizzes, 70351: Week 1 (24 q, id 430007; practice copy 436910), Week 2 (22 q, 430008 / 437710), Week 3 (25 q, 430009 / 438508), Week 5 (24 q, 430010 / 439080), Week 6 (18 q, 430011 / 439869). 70371: Week 2 endocrine quiz (16 q, 423178 / practice 427056).
- BiCEP (weekly integrated clinical cases, required, Mon/Wed 1–2:50): Williams (wk1), Mishimoto (wk2), Brown (wk3), Weiand (wk4), Walsh (wk5), Lewis (wk6), Hendricks (wk7, files still LOCKED on 9/26). Each has a "Learning objectives.docx" plus day-1/day-2 slide decks (~15 MB each): 70351/23481607, 23481616, 23482656, 23482662, 23913121, 23913225, 23913309 (objectives docx ids).
- TBLs: STI (wk3), Puberty (wk5), Early Pregnancy (wk6), Breast (wk7); endocrine TBL Pharmacology/Diabetes (70371, wk2).
- Sessions with no teachable objectives (excluded from coverage): course launch, BiCEP pages (objectives live in the docx), anatomy table tests, midterm, final, anatomy practical, robotics video (no objectives).

---

## ANAT-PELVIS-LEC | 70351 | Week 1 | 8/17/2026 | Anatomy Lecture: Basic Reproductive Anatomy (Male/Female) | Dr. Wessam Ibrahim | Interactive Lecture | Anatomy
ANAT-PELVIS-LEC.1 Describe the locations and relationships between the true pelvic cavity, the false pelvis, and the perineum.
ANAT-PELVIS-LEC.2 Identify the features of the bony pelvis that are important for adequacy of the pelvis for childbirth (pelvic inlet via diagonal conjugate, interspinous distance, intertuberous distance, width of subpubic arch).
ANAT-PELVIS-LEC.3 Explain the function of the pelvic floor, its innervation, and the two major muscles that comprise it.
ANAT-PELVIS-LEC.4 Describe the peritoneal relationships of the pelvic viscera, including pouches and spaces.
ANAT-PELVIS-LEC.5 Describe the anatomical features and general functions of the pelvic viscera in females (bladder, uterus, uterine tube, ovary, cervix, vagina, and rectum).
ANAT-PELVIS-LEC.6 Describe the anatomical features and general functions of the pelvic viscera in males (bladder, ductus deferens, seminal vesicle, ejaculatory duct, prostate, prostatic urethra, and rectum).
ANAT-PELVIS-LEC.7 Trace the arterial blood supply and venous drainage of internal pelvic structures to their vascular origins and terminations.
ANAT-PELVIS-LEC.8 Relate the pelvic vasculature to neighboring organs, fascial planes, and clinically significant anatomical landmarks.
ANAT-PELVIS-LEC.9 Apply anatomical knowledge explaining methods of achieving hemostasis during common gynecologic, urologic, and colorectal surgical procedures.
  FILE 70351/23517089 | Anatomy of Male & Female Reproductive System-Class of 2029- Student Copy -1.pptx | 43 MB
  FILE 70351/23552898 | Anatomy of the Male & Female Reproductive Systems- With Questions.pdf | 8.9 MB

## ANAT-PELVIS-LAB | 70351 | Week 1 | 8/18/2026 | Anatomy Lab: Pelvis (groups A/B and C/D, identical objectives) | Drs. Ibrahim, Swigart, Shackelford | Laboratory | Anatomy
ANAT-PELVIS-LAB.1 Describe the structure of the bony pelvis, including its related joints and ligaments.
ANAT-PELVIS-LAB.2 Describe the locations and relationships between the true pelvis cavity, the false pelvis, and the perineum.
ANAT-PELVIS-LAB.3 Identify muscles on the anterolateral and posterolateral walls of the pelvic cavity, explaining how the piriformis subdivides the greater sciatic foramen into 2 regions
ANAT-PELVIS-LAB.4 Describe the general organization of pelvic fascia (parietal, visceral, endopelvic)
ANAT-PELVIS-LAB.5 Explain the peritoneal relationships of the pelvic viscera, including pouches and mesenteries
ANAT-PELVIS-LAB.6 Name the ventral rami that form the sacral plexus while describing the location of the plexus in the pelvic cavity
ANAT-PELVIS-LAB.7 Describe the arterial blood supply, venous drainage, and lymphatic drainage of internal pelvic organs in females and males, explaining their relationship to other pelvic structures.
ANAT-PELVIS-LAB.8 Explain the autonomic innervation of the pelvic organs via the pelvic plexus and splanchnic nerves, recalling the effects of sympathetic and parasympathetic innervation on pelvic organs.
ANAT-PELVIS-LAB.9 Describe the anatomical features and general functions of the pelvic viscera in females (bladder, uterus, uterine tube, ovary, cervix, vagina, and rectum).
ANAT-PELVIS-LAB.10 Describe the anatomical features and general functions of the pelvic viscera in males (bladder, ductus deferens, seminal vesicles, prostate, rectum).
ANAT-PELVIS-LAB.11 Describe the gross anatomy of the uterus, including its parts, position, layers, ligaments, pouches & related clinical applications.
ANAT-PELVIS-LAB.12 Describe the gross anatomy of the ovary, including its position, ligaments & related clinical applications.
ANAT-PELVIS-LAB.13 Describe the gross anatomy of the testis, epididymis, ductus deferens, and prostate & related clinical applications.

## HP-UTERUS-OVARY | 70351 | Week 1 | 8/20/2026 | Uterine/Tubo-ovarian Histology/Pathology | Dr. Samar Hegazy | Small Group Discussion (NBME-style questions) | Pathology, Histology, Pathophysiology
HP-UTERUS-OVARY.1 Describe the microscopic organization of the ovary, uterine tube, and uterus.
HP-UTERUS-OVARY.2 Relate histological changes in the ovary, uterine tubes, and uterus to the ovarian cycle, menstrual cycle, and pregnancy.
HP-UTERUS-OVARY.3 Explain how altered structure/function leads to clinical consequences (e.g., follicular cysts, tubal infertility, endometriosis, abnormal uterine bleeding, menopause).
HP-UTERUS-OVARY.4 Recognize congenital and developmental anomalies of the uterus and their clinical implications.
HP-UTERUS-OVARY.5 Explain the pathophysiology and clinicopathologic features of functional disorders, including polycystic ovary syndrome, endometrial hyperplasia, adenomyosis, and endometriosis.
HP-UTERUS-OVARY.6 Discuss pelvic inflammatory disease and infections of the uterine tubes and endometrium: common pathogens, pathogenesis, morphology, and complications.
HP-UTERUS-OVARY.7 Compare benign and malignant uterine tumors (e.g., leiomyomas vs. leiomyosarcomas), including morphology, clinical course, and prognosis.
HP-UTERUS-OVARY.8 Differentiate between type I and type II endometrial carcinomas in terms of risk factors, molecular basis, morphology, and outcomes, and relate type I to hereditary nonpolyposis colorectal carcinoma (Lynch syndrome).
HP-UTERUS-OVARY.9 Recognize the features and molecular alterations of uterine carcinosarcoma (malignant mixed Müllerian tumor).
HP-UTERUS-OVARY.10 Describe the embryologic/histologic components of the ovary (surface epithelium, germ cells, sex cord–stromal cells) as the basis for tumor classification.
HP-UTERUS-OVARY.11 Identify risk factors, hereditary cancer syndromes, and molecular mechanisms underlying epithelial, sex cord–stromal, and germ cell ovarian tumors.
  FILE 70351/23623160 | Handout-Tubo-ovarian Histology-Pathology-2029.pdf | 9 MB
  FILE 70351/23653552 | Tubo-ovarian Histology-Pathology-2029.pptx | 75.3 MB

## PHYS-MENSTRUAL | 70351 | Week 1 | 8/20/2026 | Asynchronous: Menstrual Cycle Video (10 min) | Dr. Valerie Jennings | Lecture | Reproductive Health, Physiology, Endocrinology
PHYS-MENSTRUAL.1 Explain the process of various types of estrogen development, including precursors, cell function, and enzymes.
PHYS-MENSTRUAL.2 Explain oogenesis and follicular development, including the process of Meiosis.
PHYS-MENSTRUAL.3 Explain the origin and role of the following hormones: follicle stimulating hormone, luteinizing hormone, estradiol, progesterone, gonadotropin releasing hormone.
PHYS-MENSTRUAL.4 Identify the following hormones on a menstrual cycle graph: follicle stimulating hormone, luteinizing hormone, estradiol, progesterone, gonadotropin releasing hormone.
PHYS-MENSTRUAL.5 List the uterine and ovarian changes during the menstrual cycle and role of the corpus luteum.
  VIDEO https://mediaspace.illinois.edu/playlist/dedicated/89801311/1_n1whqf5d/1_whn5bvah

## PATHPHARM-MENSES-CONTRA | 70351 | Week 1 | 8/21/2026 | Female Pathology/Pharmacology Lecture (Menstrual Disorders/Contraception) | Drs. Carla Rafferty, Eman Alefishat | Lecture | Physiology, Pathology, Pharmacology
PATHPHARM-MENSES-CONTRA.1 Describe common menstrual disorders like abnormal uterine bleeding, amenorrhea, dysmenorrhea, and endometriosis and explain the diagnostic approach for evaluating menstrual abnormalities including hormonal testing and imaging.
PATHPHARM-MENSES-CONTRA.2 Compare hormonal contraceptive and other hormonally acting therapies in terms of mechanism of action, efficacy, indications, contraindications, and adverse effects.
PATHPHARM-MENSES-CONTRA.3 Explain the pharmacology of medications used for emergency contraception and induced abortion, including their mechanism of action and adverse effects.
PATHPHARM-MENSES-CONTRA.4 Develop a foundational understanding of discussing sensitive topics surrounding sexual health in adults and adolescents, how to discuss consent, and counseling on sexual health topics like contraception.
  FILE 70351/23596393 | Menstrual disorders Contraception CICOM.pdf | 3.3 MB
  (required reading: Lippincott Illustrated Reviews: Pharmacology 8e, Ch. 25 Estrogens, Progestogens and Androgens)

## ANAT-PERINEUM-LEC | 70351 | Week 2 | 8/24/2026 | Anatomy Lecture: Basic Reproductive Anatomy (Perineum Male/Female) | Dr. Wessam Ibrahim | Interactive Lecture | Anatomy
ANAT-PERINEUM-LEC.1 Differentiate the subdivisions of the perineum (urogenital and anal regions) based on their boundaries and spatial orientation.
ANAT-PERINEUM-LEC.2 Describe the attachment of the perineal membrane.
ANAT-PERINEUM-LEC.3 Describe the anatomical boundaries and contents of the deep and superficial perineal pouches.
ANAT-PERINEUM-LEC.4 Compare the blood supply, venous drainage, nerve supply and lymphatic drainage of the anal canal with particular attention to the differences superior and inferior to the pectinate line.
ANAT-PERINEUM-LEC.5 Describe the anatomy of female external genitalia (mons pubis, labia majora, labia minora, vestibule, clitoris, urethra, bulbs of the vestibule, greater vestibular (Bartholin's) glands, vagina).
ANAT-PERINEUM-LEC.6 Describe the anatomy of the penis and the course of the male urethra.
ANAT-PERINEUM-LEC.7 Explain the innervation, blood supply, and venous drainage of the external genitalia, emphasizing the role of the pudendal nerves and vessels.
ANAT-PERINEUM-LEC.8 Trace the lymphatic drainage of pelvic and perineal organs in males and females, including the clinical applications of affected lymph nodes in various invasive cancers and infections of internal pelvic structures.
ANAT-PERINEUM-LEC.9 Describe the autonomic innervation of the pelvic & perineal regions and the effects of sympathetic vs. parasympathetic input on pelvic organs.
  FILE 70351/23720637 | Anatomy of Male & Female Perineum-Class of 2029- Student Copy-1.pptx | 28.1 MB
  FILE 70351/23774873 | Anatomy of the Male & Female Perineum- With Questions.pdf | 4.3 MB

## ANAT-EXTGEN-LAB | 70351 | Week 2 | 8/25/2026, 8/27/2026 | Anatomy Lab: External Genitalia (groups A/B and C/D, identical objectives) | Drs. Ibrahim, Swigart, Shackelford | Laboratory | Anatomy
ANAT-EXTGEN-LAB.1 Explain the function of the pelvic floor, its innervation, and its two major muscles.
ANAT-EXTGEN-LAB.2 Explain the subdivisions of the perineum (urogenital and anal regions), the borders of these regions, and their spatial orientation.
ANAT-EXTGEN-LAB.3 Name the fascial layer that separates the superficial from the deep perineal spaces (perineal membrane), discussing its attachments.
ANAT-EXTGEN-LAB.4 Explain the importance of these fascial layers in the spread of fluids during trauma, such as urethral rupture.
ANAT-EXTGEN-LAB.5 Describe the anatomy of the vulva in females (mons pubis, labia majora, labia minora, vestibule, clitoris, urethra, bulbs of the vestibule, greater vestibular (Bartholin's) glands, vagina) and their function.
ANAT-EXTGEN-LAB.6 Identify the position of the structures that open into the vestibule of the vulva (urethra, vagina, ducts of greater vestibular glands).
ANAT-EXTGEN-LAB.7 Identify the components of the penis and the parts and course of the male urethra.
ANAT-EXTGEN-LAB.8 Describe the innervation of the genitalia via the pudendal nerve and the relationship of the nerve to the ischial spine.
ANAT-EXTGEN-LAB.9 Explain the innervation of the internal and external urethral sphincters.
ANAT-EXTGEN-LAB.10 Describe the innervation, blood supply, lymphatic and venous drainage of the external male and female genital structures, explaining how this correlates clinically with the spread of malignancies or infection.

## HP-MALE | 70351 | Week 2 | 8/25/2026 | Male Histology/Pathology | Dr. Samar Hegazy | Small Group Discussion (NBME-style questions) | Histology, Pathology
HP-MALE.1 Describe the microscopic structure of the testis.
HP-MALE.2 Correlate the structure, location, and function of germ cells (spermatogonia, spermatocytes, spermatids, spermatozoa), Sertoli cells, and Leydig cells.
HP-MALE.3 Explain the processes and regulation of spermatogenesis and spermiogenesis.
HP-MALE.4 Correlate the microscopic organization and function of the rete testis, ductuli efferentes, epididymis, and ductus deferens, seminal vesicles, prostate gland, and bulbourethral glands.
HP-MALE.5 Predict how structural alterations in the male reproductive duct system and accessory glands (rete testis, ductuli efferentes, epididymis, ductus deferens, seminal vesicles, prostate gland, and bulbourethral glands) affect reproductive function.
HP-MALE.6 Relate the microscopic structure of the penis to its function
HP-MALE.7 Discuss the morphology, consequences, and type of management (pharmacologic, non-pharmacologic, surgical) of phimosis, hypospadias, and epispadias.
HP-MALE.8 List the common causes of penile infections, both sexually transmitted and acquired through other routes.
HP-MALE.9 Describe the underlying abnormality causing Peyronie disease, the clinical consequences, and its treatment type (pharmacologic, non-pharmacologic, surgical)
HP-MALE.10 Name the structure through which the testes descend during fetal development and what is brought with the testes in the descent.
HP-MALE.11 Describe the complications associated with cryptorchidism.
HP-MALE.12 Describe the clinical features and pathologic findings in the testis that occur due to torsion of the spermatic cord.
HP-MALE.13 Discuss several inflammatory conditions affecting the testis and epididymis and the clinicopathologic features associated with each.
HP-MALE.14 Compare and contrast the pathogenesis and clinical consequences of disorders related to the tunica vaginalis.
HP-MALE.15 Explain the molecular and hormonal origins of prostatic nodular hyperplasia, the area of the gland affected, the natural history of the disease, various treatment strategies, and anticipated outcomes of treatment.
HP-MALE.16 Describe the pathophysiologic basis for inflammatory conditions affecting the prostate, including the causative organisms.
HP-MALE.17 Explain the spectrum of squamous neoplasia affecting the penis, ranging from condyloma acuminata to invasive squamous cell carcinoma, describing the risk factors, pathogenesis, morphologic features, complications, and treatment strategies.
HP-MALE.18 Describe the most important risk factors, genetic associations, molecular basis, and clinicopathologic features for the development of testicular tumors and the different morphologic patterns seen.
HP-MALE.19 Describe the cellular phenotype of the typical prostate adenocarcinoma and its molecular and immunohistochemical characteristics.
HP-MALE.20 Define the histopathological diagnostic criteria for the diagnosis of prostatic adenocarcinoma.
HP-MALE.21 Explain the epidemiology of prostate cancer with respect to age and family history.
HP-MALE.22 Compare and contrast the significance of “histological” prostatic adenocarcinoma versus a “clinically significant” adenocarcinoma.
  FILE 70351/23747799 | Male Repro Histology-Pathology-Questions-Relevant Notes-2029-2.pptx | 45 MB
  FILE 70351/23760164 | Male Repro Histology-Pathology-Questions-Answers-Relevant Notes-2029.pptx | 46.3 MB
  (required reading: Robbins & Kumar Basic Pathology 11e, Ch. 16 Male Genital System and Lower Urinary Tract)

## PATHPHARM-MALE | 70351 | Week 2 | 8/27/2026 | Male Pathology/Pharmacology Lecture | Dr. Vikas Desai | Lecture | Physiology, Pathology, Pharmacology
PATHPHARM-MALE.1 Identify normal components of the male reproductive system on histologic slides, including the seminiferous tubule, Sertoli cells, Leydig cells, epididymis, prostate, and seminal vesicle.
PATHPHARM-MALE.2 Describe the gross anatomy of the male reproductive tract, including prostate zonal anatomy, penile and scrotal structure, and testicular venous and lymphatic drainage, and relate each to the pathology that arises there.
PATHPHARM-MALE.3 Outline the stages of spermatogenesis and sperm maturation, and explain how the spermatogenic timeline affects the evaluation and treatment of male infertility.
PATHPHARM-MALE.4 Describe hormonal regulation of the male reproductive system, including the hypothalamic-pituitary-gonadal axis, the distinct roles of testosterone, dihydrotestosterone, and inhibin, and the hormonal changes that occur in adulthood and aging.
PATHPHARM-MALE.5 Explain the neural, vascular, and molecular mechanisms of erection, emission, ejaculation, and the male sexual response.
PATHPHARM-MALE.6 Differentiate primary from secondary hypogonadism using the hypothalamic-pituitary-gonadal axis, and interpret a basic hypogonadism and male infertility laboratory panel.
PATHPHARM-MALE.7 Explain the clinical presentation, pathophysiology, work-up, diagnosis, and treatment options of the following male reproductive pathologies: benign prostatic hyperplasia, prostatitis, prostate cancer, cryptorchidism, hydrocele, varicocele, epididymal cyst, testicular torsion, testicular rupture, testicular cancer (germ cell and non-germ cell), epididymitis, orchitis, male infertility, phimosis, Peyronie’s disease, traumatic penile injuries, penile cancer, erectile dysfunction, and premature ejaculation.
PATHPHARM-MALE.8 Describe the pharmacology and utilization of alpha-1 blockers, 5-alpha-reductase inhibitors, phosphodiesterase-5-inhibitors, and SSRIs.
PATHPHARM-MALE.9 Describe the indications, mechanisms, and major adverse effects of androgen therapy and antiandrogen therapy, including androgen deprivation therapy for prostate cancer.
  FILE 70351/23766781 | Male_Physiology_Pathology_Pharmacology_Desai.pptx | 9.7 MB

## HP-CERVIX-VULVA | 70351 | Week 3 | 8/31/2026 | Cervical/Vulvar Histology/Pathology Lecture | Dr. Samar Hegazy | Just-in-time Teaching, Small Group Discussion | Histology, Pathology
HP-CERVIX-VULVA.1 Correlate the histological structure of the cervix with its function.
HP-CERVIX-VULVA.2 Predict functional outcomes that result from altered structure and function of the uterine cervix (e.g., cervical cancer).
HP-CERVIX-VULVA.3 Correlate the histological structure of the vagina with its functions.
HP-CERVIX-VULVA.4 Correlate the histological structure of greater vestibular (Bartholin’s) glands and paraurethral glands with their functions.
HP-CERVIX-VULVA.5 Discuss common pelvic infections, including those affecting the vulva, vagina, and cervix, and describe the pathogenesis of these diseases, common organisms involved, and related complications.
HP-CERVIX-VULVA.6 List the differential diagnosis for benign and neoplastic lesions of the vulvar epithelium as well as the clinical and pathologic features of each, including lichen sclerosus, squamous cell hyperplasia, vulvar intraepithelial neoplasia, vulvar carcinoma, and extramammary Paget disease.
HP-CERVIX-VULVA.7 Describe the clinicopathologic features of vaginal embryonal rhabomyosarcoma (sarcoma botryoides).
HP-CERVIX-VULVA.8 Discuss the common human papillomavirus types that affect the cervix and the pathogenesis of cervical dysplasia, neoplasia, cervical screening methods, and prevention.
HP-CERVIX-VULVA.9 Describe the morphologic features of the spectrum of cervical dysplasia and neoplasia derived from both cytologic and tissue specimens and clinical outcomes associated with each.
  FILE 70351/23842251 | Vulvovaginal and Cervical Histology-Pathology-Questions-Relevant Notes-2029.pdf | 2 MB
  FILE 70351/23861781 | Vulvovaginal and Cervical Histology-Pathology-Answers-Questions-Relevant Notes-2029.pptx | 26.1 MB

## PATHPHARM-CERVIX-HPV | 70351 | Week 3 | 9/1/2026 | Female Pathology/Pharmacology lecture (Cervical/HPV/Vaginal/Vulva) | Dr. Carla Rafferty | Lecture | Physiology, Pathology, Pharmacology
PATHPHARM-CERVIX-HPV.1 Describe the screening guidelines for cervical cancer and how to implement them.
PATHPHARM-CERVIX-HPV.2 Explain how HPV affects cervical cells and how that progresses over time into cervical cancer.
PATHPHARM-CERVIX-HPV.3 Describe the impact of HIV’s additive risk for HPV infected individuals with respect to cervical and anal cancer screenings.
PATHPHARM-CERVIX-HPV.4 Describe the surveillance and possible treatments for abnormal cervical cytology in pre-cancerous abnormalities in addition to prevention measures.
PATHPHARM-CERVIX-HPV.5 Describe the various pathogens that can cause cervicitis and vulvovaginitis and how they develop, including a description of common symptomology, diagnostic workup, and treatment options.
PATHPHARM-CERVIX-HPV.6 Explain other vulvar non-cancerous pathologies including how to diagnose and treat.
  FILE 70351/23884930 | Cervical & Vaginalvular Path CICOM-2.pptx | 9.6 MB
  FILE 70351/23568845 | CDC Sexually Transmitted Infections Treatment Guidelines 2021-1.pdf | 2.5 MB

## ADNEXAL | 70351 | Week 3 | 9/2/2026 | Asynchronous: Adnexal Masses Lecture Video (46 min) | Dr. Valerie Jennings | Independent Learning | Pathophysiology
ADNEXAL.1 Define and distinguish between functional and neoplastic adnexal masses using clinical and radiographic criteria.
ADNEXAL.2 Identify key clinical signs, symptoms, and imaging findings associated with common benign and malignant adnexal masses.
ADNEXAL.3 Interpret transvaginal ultrasound features (e.g., septations, papillary projections, solid components, ascites) to categorize adnexal masses based on risk of malignancy.
ADNEXAL.4 (duplicate of ADNEXAL.3 on the Canvas page; map it to the same topic)
ADNEXAL.5 Formulate an age and risk-appropriate differential diagnosis for adnexal masses across reproductive stages (prepubertal, reproductive age, postmenopausal).
ADNEXAL.6 Develop initial management plans for patients presenting with adnexal masses, incorporating risk stratification and referral guidelines (e.g., when to refer to gynecologic oncology).
ADNEXAL.7 Evaluate adnexal mass cases to determine malignancy risk using criteria such as IOTA or ACOG guidelines.
ADNEXAL.8 Explain the role of tumor markers (e.g., CA-125, AFP, β-hCG, LDH) in distinguishing types of adnexal tumors in specific clinical scenarios.
  FILE 70351/23458844 | Adnexal mass lecture-1.pptx | 4.6 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_nwqazm3o

## GYN-ONC | 70351 | Week 3 | 9/2/2026 | Female Pathology (All Gyne Cancers) | Dr. Megan Hutchcraft | Lecture | Pathology
GYN-ONC.1 Identify risk factors for gynecologic neoplastic conditions, including uterine, ovarian, vulvar, cervical, and vaginal diseases.
GYN-ONC.2 Describe initial workup and management for patients with gynecologic neoplastic conditions, including uterine, ovarian, vulvar, cervical, and vaginal diseases.
GYN-ONC.3 Discuss pathology and pathophysiology of gynecologic neoplastic conditions, including uterine, ovarian, vulvar, cervical, and vaginal diseases.
  (no slides posted)

## TBL-STI | 70351 | Week 3 | 9/4/2026 | TBL: Sexually Transmitted Infections | Drs. Michael Olsen, Carla Rafferty, Eman Alefishat | Team Based Learning | Microbiology, Infectious Disease, Pharmacology
TBL-STI.1 Be able to identify the pathogen responsible and describe the histologic appearance, clinical appearance and symptoms, diagnostic testing, and treatment options for the following infections: condyloma acuminata, molluscum contagiosum, herpes simplex, vulvo-vaginal yeast infection, bacterial vaginosis, trichomonas, chlamydia, gonorrhea, syphilis, chancroid, lymphogranuloma venereum, donovanosis.
TBL-STI.2 Explain the common pathogens, clinical presentation, acute and chronic complications, and treatment for pelvic inflammatory disease.
TBL-STI.3 Describe the implications of various sexually transmitted infections in pregnancy and the associated congenital findings.
  FILE 70351/23741671 | Pelvic Infections TBL reading (1).pdf | 0.6 MB

## VIRAL-STI-TORCH | 70351 | Week 3 | 9/4/2026 | STI's Viral Edition (HIV, HSV, HPV, & TORCH) | Drs. Carla Rafferty, Michael Olson, Eman Alefishat | Lecture | Microbiology, Pharmacology, Pathophysiology
VIRAL-STI-TORCH.1 Explain how viruses function as obligate intracellular parasites, utilizing and manipulating host cellular machinery to support their replication and persistence.
VIRAL-STI-TORCH.2 Compare the key biological features of retroviruses and DNA viruses, including their mechanisms of persistence, latency, and genome integration within host cells.
VIRAL-STI-TORCH.3 Explain the clinical presentation, transmission routes, tissue tropism, and disease outcomes of viral infections, and evaluate the strategies retroviruses and DNA viruses use to evade and subvert host immune responses.
VIRAL-STI-TORCH.4 Describe the virology of HIV, how it is transmitted & prevented utilizing behavioral, barrier, and pharmacologic methods.
VIRAL-STI-TORCH.5 Describe the virology of HSV, how it is transmitted & prevented utilizing behavioral and pharmacologic methods.
VIRAL-STI-TORCH.6 Describe the virology of HPV, how it is transmitted & prevented including via vaccination.
VIRAL-STI-TORCH.7 Describe the virology of TORCH infections and their maternal-fetal transmission as well as fetal complications with exposure.
VIRAL-STI-TORCH.8 Understand the clinical screening, symptomatology, and diagnostic testing of HIV, HSV, and HPV in all patients and additionally as it relates to pregnancy.
VIRAL-STI-TORCH.9 Explain the main mechanisms, risks, and indications for antiviral medications and preventative antiviral medications related to HIV and HSV.
VIRAL-STI-TORCH.10 Explain the main mechanisms, risks, and indications for pharmaceutical treatments for HPV infections, specifically genital warts.
  FILE 70351/23884526 | Viral STI (2026) Presentation.pdf | 2.7 MB
  FILE 70351/23479458 | CDC Sexually Transmitted Infections Treatment Guidelines 2021.pdf | 2.5 MB
  (required reading: Lippincott Pharmacology 8e Ch. 34 Antiviral Drugs VII–XIII; Review of Medical Microbiology & Immunology 17e Ch. 37, Ch. 45)

## MDR-REVIEW | 70351 | Week 4 | 9/8/2026, 9/9/2026 | Male/Female Anatomy/Pathology/Histology Multi-Disciplinary Review (8 stations x 5 NBME-style questions) | Drs. Hegazy, Ibrahim, Rafferty | Small Group Discussion | Embryology, Anatomy, Histology, Pathology, Clinical Decision Making
MDR-REVIEW.1 Apply knowledge of embryology, anatomy, histology, and pathology to clinical case scenarios in male & female reproductive medicine, demonstrating integration across disciplines for problem-solving and early clinical reasoning.
MDR-REVIEW.2 Apply knowledge of neoplasia, including cellular origins and molecular mechanisms, to describe the clinical presentation, biologic behavior, morphologic appearance, classification, diagnosis, prognosis, and treatment (pharmacological, non-pharmacological, surgical) of male and female reproductive neoplasms.
  FILE 70351/24043452 | Multidisciplinary Session Questions and Answers-2029.pdf | 2.5 MB
  FILE 70351/24043467 | Multidisciplinary Histology and Histopathology Slides-Annotations and Explanations-2029.pdf | 4.9 MB

## EMBRYO-GU | 70351 | Week 5 | 9/14/2026 | Asynchronous: Embryology Video (GU embryology, 75 min) | Dr. Matt Wheeler | Lecture | Anatomy, Embryology
EMBRYO-GU.1 Describe the embryologic development of the following structures and their respective homologs: fallopian tubes, uterus, cervix, upper vagina, lower vagina, labia, epididymis, vas deferens, ejaculatory duct, seminal vesicle, ovary, testis, germ cells, penis, clitoris, and urethra.
EMBRYO-GU.2 Explain the relationship between embryologic reproductive abnormalities and urologic abnormalities.
EMBRYO-GU.3 Explain the origin and role of the Y chromosome, Anti-mullerian hormone, testis determining factor, and androgens in development of the male reproductive system.
EMBRYO-GU.4 Characterize the origins of the following female reproductive anomalies: Uterus didelphys, bicornuate uterus, septate uterus, vaginal atresia, Gartner cyst, imperforate hymen, Mullerian Agenesis (Mayer-Rokitansky-Kuster-Hauser syndrome).
EMBRYO-GU.5 Characterize the origins of the following male reproductive anomalies: hypospadias, epispadias, cryptorchidism, hydrocele.
EMBRYO-GU.6 Explain the pathophysiology, physical exam findings, and laboratory findings of placental aromatase deficiency, 5-alpha reductase deficiency, androgen insensitivity syndrome, congenital adrenal hyperplasia, and Swyer syndrome.
  FILE 70351/23483229 | GU Embryology Lecture 2023-1.pptx | 39.8 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_p15o75b7/89801311

## MENOPAUSE | 70351 | Week 5 | 9/14/2026 | Menopause Physiology/Pharmacology | Drs. Carla Rafferty, Eman Alefishat | Lecture | Physiology, Pathophysiology, Pharmacology
MENOPAUSE.1 Define the stages of the reproductive life cycle.
MENOPAUSE.2 Explain the pathophysiology of common menopausal symptoms (vasomotor, genitourinary, sleep, mood, cognition, and sex dysfunction).
MENOPAUSE.3 Explain the health effects of estrogen deficiency on bone health, cardiovascular health, cognition, and GU health.
MENOPAUSE.4 Describe pathophysiology of osteoporosis.
MENOPAUSE.5 Describe bleeding pattern changes during perimenopause & menopause.
MENOPAUSE.6 Differentiate the clinical indications, contraindications, and adverse effects of estrogen-only versus combined estrogen-progestin therapy.
MENOPAUSE.7 Explain the main mechanisms, risks, and clinical utility of some non-hormonal pharmacological therapies utilized for menopausal vasomotor symptoms.
MENOPAUSE.8 Select the most appropriate menopausal pharmacotherapy for a patient by analyzing comorbid conditions and individual risk stratification.
MENOPAUSE.9 Characterize the evidence-based medicine lab work in menopause diagnosis/care.
MENOPAUSE.10 Explain preventative health items in menopause: osteoporosis prevention & monitoring, cardiovascular risk reduction, cancer screening and immunizations.
MENOPAUSE.11 Describe how to evaluate postmenopausal bleeding.
MENOPAUSE.12 Describe menopause mimics and other conditions to rule out.
MENOPAUSE.13 Explore the impact of the Women’s Health Initiative study on menopause education & training and subsequent care of menopausal women.
MENOPAUSE.14 Describe disparities in the care of menopausal symptoms.
MENOPAUSE.15 Explore how the impact of wellness/influencers intersects with evidenced based medicine.
  FILE 70351/24117199 | Menopause.pptx | 3.9 MB
  FILE 70351/24117204 | Menopause_Pharm_Canvas.pptx | 5.4 MB

## EMBRYO-CLIN | 70351 | Week 5 | 9/15/2026 | Clinical Embryology of Early Pregnancy & Reproductive Development | Dr. Wessam Ibrahim | Interactive Flipped Classroom, Q & A | Embryology
EMBRYO-CLIN.1 Differentiate between embryonic/fetal age & gestational age.
EMBRYO-CLIN.2 Describe the major events of the first three weeks of human development, including fertilization, cleavage, implantation, and gastrulation.
EMBRYO-CLIN.3 Explain the formation and derivatives of the three germ layers while correlating them with clinically relevant congenital anomalies.
EMBRYO-CLIN.4 Describe the development and functions of extraembryonic membranes and the placenta during early pregnancy.
EMBRYO-CLIN.5 Explain the establishment of maternal-fetal circulation and the endocrine functions of the placenta.
EMBRYO-CLIN.6 Apply embryologic principles to interpret abnormalities of implantation and placentation, including ectopic pregnancy, placenta previa, and placenta accreta.
EMBRYO-CLIN.7 Describe the embryologic origins of the gonads, genital ducts, and external genitalia.
EMBRYO-CLIN.8 Explain the molecular and hormonal mechanisms of sex determination and sexual differentiation, including the roles of SRY and AMH.
EMBRYO-CLIN.9 Differentiate the derivatives of the mesonephric (Wolffian) and paramesonephric (Müllerian) ducts in males and females.
EMBRYO-CLIN.10 Analyze the embryologic basis of common congenital malformations of the reproductive system, including cryptorchidism, hypospadias, Müllerian anomalies, and disorders of sexual development.
EMBRYO-CLIN.11 Integrate embryologic, placental, and reproductive developmental concepts to solve clinical and USMLE Step 1-style questions involving congenital abnormalities and reproductive disorders.
  FILE 70351/24143238 | Clinical Embryology- Class of 2029- Student Copy.pptx | 16.3 MB
  FILE 70351/24159308 | Clinical Embryology -Student Copy with Answers.pdf | 4 MB
  FILE 70351/23569355 | Embryology Foundation I & II-Class of 2029-2.pptx | 28.8 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_d27wwonf/89801311
  VIDEO https://mediaspace.illinois.edu/media/t/1_e9c3bz00/89801311

## TRANSGENDER-LEC | 70351 | Week 5 | 9/17/2026 | LGBTQ+/Transgender Lecture | Dr. Beverly London | Lecture | Physiology, Pathophysiology, Pharmacology, Transgender and Gender Diverse Care
TRANSGENDER-LEC.1 Describe the different gender terminologies as it relates to the spectrum of gender identity differentiating between old and new terminology being mindful of patient preferences as to which terminology best fits an individual and referring to that individual per their gender identified preferences.
TRANSGENDER-LEC.2 Define legal considerations related to the care of transgendered individuals and the use of gender terminologies.
TRANSGENDER-LEC.3 Explain reproductive considerations for transgendered individuals including applicable forms of contraception, fertility preservation options, and risk of sexual infections.
TRANSGENDER-LEC.4 Describe pharmaceutical therapies used in medical transition (Feminizing therapy, Masculinizing therapy, and Puberty Blockers) and explain their mechanism of action, side effects, purpose, and monitoring considerations.
TRANSGENDER-LEC.5 Explain surgical transition options for transgendered individuals including indications and risk.
TRANSGENDER-LEC.6 Describe what preventative care recommendations are applicable to transgendered individuals after taking an organ inventory and sexual history.
  FILE 70351/24194789 | September 5, 2006 Transgender Care.pptx | 14.8 MB
  FILE 70351/24189916 | Patient Centered Language Guide.pdf | 0.3 MB

## TBL-PUBERTY | 70351 | Week 5 | 9/17/2026 | TBL 2: Puberty | Dr. Hector Lantigua | Team Based Learning | Physiology, Pathology
TBL-PUBERTY.1 Identify Tanner stages.
TBL-PUBERTY.2 Explain the terminology (“-arches”) and physical findings of secondary sexual characteristics and the hormones responsible.
TBL-PUBERTY.3 Explain how puberty is regulated by the hypothalamic-pituitary-gonadal axis in males and females.
TBL-PUBERTY.4 Describe the normal sequence of pubertal development in boys and girls.
TBL-PUBERTY.5 Define precocious puberty and describe the etiologies, physical exam findings, work-up, and diagnosis for central (true) precocious puberty, peripheral (pseudo) precocious puberty, and delayed puberty in both males and females.
TBL-PUBERTY.6 Explain variants of normal that are common.
TBL-PUBERTY.7 Identify sex chromosome disorders of puberty.
  FILE 70351/24188880 | Puberty TBL Applications Slides (002).pptx | 7.9 MB
  FILE 70351/23484186 | NormPub1-1.pdf (Bordini & Rosenfield, Normal Pubertal Development I, Pediatr Rev 2011) | 0.2 MB
  FILE 70351/23484246 | NormPub2-1.pdf (Bordini & Rosenfield, Normal Pubertal Development II) | 0.3 MB
  FILE 70351/23484249 | PubDelay-1.pdf (Kaplowitz, Delayed Puberty, Pediatr Rev 2010) | 0.2 MB
  FILE 70351/23484254 | PubPrecocious-1.pdf (Long, Precocious Puberty, Pediatr Rev 2015) | 0.5 MB

## LIFESPAN-PANEL | 70351 | Week 5 | 9/18/2026 | Lifespan Health: LGBTQ+/Transgender Panel | multi-speaker panel | Panel Discussion | Medical, Legal, Ethical, Social, Economic, Health Care Policy
LIFESPAN-PANEL.1 Describe common health-care needs, disparities, and barriers experienced by LGBTQ+ and transgender patients.
LIFESPAN-PANEL.2 Demonstrate respectful, patient-centered communication, including appropriate use of names, pronouns, and inclusive language.
LIFESPAN-PANEL.3 Discuss ethical and legal considerations relevant to LGBTQ+ and transgender health care.
LIFESPAN-PANEL.4 Recognize the multidisciplinary nature of LGBTQ+ and transgender health care and identify when referral or collaboration may be appropriate.
LIFESPAN-PANEL.5 Reflect on how personal assumptions and health-care environments can influence the patient experience and quality of care.

## MATERNAL-PHYS | 70351 | Week 6 | 9/21/2026 | Asynchronous: Maternal Physiology Video (43 min) | Dr. Valerie Jennings | Lecture | Physiology
MATERNAL-PHYS.1 Describe the normal physiologic cardiovascular changes associated with pregnancy, including the impact on systemic vascular resistance, cardiac output, heart rate, blood pressure, and stroke volume.
MATERNAL-PHYS.2 Describe the normal physiologic pulmonary changes that occur during pregnancy and explain the etiology for these changes (hormonal vs structural vs metabolic), including the impact on respiratory acid/base status, residual volume, total lung capacity, functional residual capacity, tidal volume, respiratory rate.
MATERNAL-PHYS.3 Describe the normal physiologic hematologic changes that occur during pregnancy, including red blood cell volume, white blood cell volume, plasma volume, coagulation factors, and hemoglobin.
MATERNAL-PHYS.4 Describe the normal physiologic musculoskeletal and gastrointestinal changes associated with pregnancy.
MATERNAL-PHYS.5 Describe the normal physiologic renal and urinary changes associated with pregnancy.
  VIDEO https://mediaspace.illinois.edu/media/t/1_5grmcvl4

## LABOR-DELIVERY | 70351 | Week 6 | 9/21/2026 | Asynchronous: Delivery Simulation Background Information (35 min) | Dr. Valerie Jennings | Lecture |
LABOR-DELIVERY.1 Cite the hormones responsible for the onset of labor, including where these hormones originate.
LABOR-DELIVERY.2 Explain the role of gap junctions in concerted uterine contractions.
LABOR-DELIVERY.3 Describe the 3 stages of labor, the cardinal movements of labor, and the potential complications that can occur during or immediately after delivery (postpartum hemorrhage, shoulder dystocia).
LABOR-DELIVERY.4 Explain the normal blood loss in a vaginal delivery, and the amount that would be considered a postpartum hemorrhage, as well as the role of pitocin in preventing postpartum hemorrhage.
LABOR-DELIVERY.5 Cite the cervical roots of the brachial plexus most commonly damaged during a shoulder dystocia, and explain the clinical presentation of those injuries.
LABOR-DELIVERY.6 Cite pelvic floor anatomy in grading of perineal lacerations that may occur at birth.
  VIDEO https://mediaspace.illinois.edu/media/t/1_8xwadqwh

## TBL-EARLY-PREG | 70351 | Week 6 | 9/22/2026 | TBL 3: Early Pregnancy | Dr. Simone Hampton | Team Based Learning | Pathophysiology, Pathology, Physiology
TBL-EARLY-PREG.1 Explain the role of human chorionic gonadotropin (hCG) and progesterone in the establishment and maintenance of early pregnancy.
TBL-EARLY-PREG.2 Calculate gestational age and apply pregnancy dating concepts to common clinical scenarios.
TBL-EARLY-PREG.3 Identify normal first-trimester ultrasound findings, including the gestational sac, yolk sac, fetal pole, and cardiac activity.
TBL-EARLY-PREG.4 Interpret early pregnancy findings using patient history, β-hCG measurements, and ultrasound results.
TBL-EARLY-PREG.5 Distinguish among normal intrauterine pregnancy, pregnancy loss, ectopic pregnancy, and gestational trophoblastic disease.
TBL-EARLY-PREG.6 Describe the pathophysiology, risk factors, common clinical presentation, and potential complications of ectopic pregnancy.
TBL-EARLY-PREG.7 Apply a clinical framework to determine whether a pregnancy is present, intrauterine, viable, and/or requires urgent evaluation.
  FILE 70351/24312038 | EarlyPregnancyTBLApplicationsSlides.pptx | 7.5 MB
  FILE 70351/24017938 | First Trimester Bleeding AAFP.pdf | 0.4 MB
  FILE 70351/24017946 | Ectopic Pregnancy AAFP.pdf | 0.2 MB
  FILE 70351/24017947 | prenatal-care.pdf (AAFP Prenatal Care: An Evidence-Based Approach) | 0.6 MB
  FILE 70351/24017951 | Early pregnancy quick guide.docx | 0.03 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_nr5zwfr6 (Female Reproductive Physiology, supplemental)
  VIDEO https://mediaspace.illinois.edu/media/t/1_a136k3qy (Complications of Pregnancy Lecture 1, supplemental)
  VIDEO https://mediaspace.illinois.edu/media/t/1_ti5szx2o (Embryogenesis and Fetal Development, supplemental)

## PRENATAL-CARE | 70351 | Week 6 | 9/22/2026 | Asynchronous: Routine Clinical Prenatal Care Lecture (80 min) | Dr. Valerie Jennings | Lecture | Physiology, Pharmacology
PRENATAL-CARE.1 Describe the nomenclature to establish gravity and parity for pregnancy history (GxPxxxx).
PRENATAL-CARE.2 Explain options for aneuploidy screening and interpret results.
PRENATAL-CARE.3 Describe which ultrasound parameter is used to determine gestational age in the first trimester and how gestational age is determined in subsequent trimesters.
PRENATAL-CARE.4 Distinguish the gestational ages at which a patient is term, preterm, and post-term.
PRENATAL-CARE.5 Explain the components of an accurate and thorough history in a pregnant patient.
PRENATAL-CARE.6 Cite common questions elicited from patients and physical exam components performed during routine prenatal visits based upon trimester.
PRENATAL-CARE.7 Cite routine ultrasound and laboratory studies performed based upon trimester.
PRENATAL-CARE.8 Cite common immunizations that are recommended in pregnancy, as well as those that are contraindicated in pregnancy.
PRENATAL-CARE.9 Explain the role of folic acid in fetal development, and understand screening and diagnostic tests that can be performed to evaluate neural tube abnormalities.
PRENATAL-CARE.10 Describe the equipment used to monitor the fetal heart rate and contractions during a non-stress test and labor.
PRENATAL-CARE.11 List the components of a cervical exam for evaluation of labor, understand the role of the Bishop score in cervical assessment.
PRENATAL-CARE.12 Understand which medications that can be used for cervical ripening and explain their pharmacologic effects.
PRENATAL-CARE.13 Explain Leopold maneuvers, how to assess for fetal positioning, and options available to patients with a fetus in breech position at term.
PRENATAL-CARE.14 Explain the risk of genital HSV in pregnancy and how it determines delivery mode as well as what pharmacologic agent is used to decrease risk.
PRENATAL-CARE.15 Describe the importance of Group B Strep identification in pregnancy and pharmacologic treatment during delivery as well as the method of neonatal sepsis prevention.
PRENATAL-CARE.16 Explain the role of antepartum fetal assessment (non-stress test, biophysical profile) and induction of labor to prevent poor maternal/fetal outcomes.
PRENATAL-CARE.17 Describe various methods for pain reduction in labor, including the pros/cons of systemic vs regional vs local methods.
  VIDEO https://mediaspace.illinois.edu/media/t/1_q7jiraev/89801311

## THIRD-TRI | 70351 | Week 6 | 9/23/2026 | Asynchronous: Third Trimester Clinical Complications Lecture (60 min) | Dr. Valerie Jennings | Lecture | Physiology, Pathology, Pharmacology
THIRD-TRI.1 Define normal blood pressure in pregnancy, as well as clinical signs/symptoms and laboratory findings that differentiate gestational hypertension, pre-eclampsia without severe features, pre-eclampsia with severe features, and HELLP syndrome.
THIRD-TRI.2 Cite common signs and symptoms of pre-eclampsia and treatment.
THIRD-TRI.3 Cite the hormone responsible for insulin resistance in pregnancy, and what the evolutionary advantage is for increased insulin resistance.
THIRD-TRI.4 Explain how to screen for gestational diabetes, who to screen, when to screen, and why to screen.
THIRD-TRI.5 Explain risk factors and potential maternal/fetal complications resulting from gestational diabetes.
THIRD-TRI.6 Describe the pathophysiology of disorders of placentation including placenta previa, placenta accreta/increta/percreta, and abruptio placentae and how they complicate pregnancy
  VIDEO https://mediaspace.illinois.edu/media/t/1_7evhxli6/89801311

## GTD | 70351 | Week 6 | 9/23/2026 | Molar Pregnancy & Gestational Trophoblastic Neoplasia | Dr. Megan Hutchcraft | Lecture | Pathology, Pathophysiology
GTD.1 Identify risk factors for molar pregnancy.
GTD.2 Identify risk factors for gestational trophoblastic disease.
GTD.3 Describe initial workup and management for patients with molar pregnancy.
GTD.4 Describe initial workup and management for patients with gestational trophoblastic disease.
GTD.5 Discuss pathology and pathophysiology of molar pregnancy.
GTD.6 Discuss pathology and pathophysiology of gestational trophoblastic disease.
  FILE 70351/24312045 | Molar Pregnancy GTD HDR 2026.pdf | 2.9 MB

## DELIVERY-SIM | 70351 | Week 6 | 9/24/2026 | Delivery Simulation (Everitt Sim Center) | CNM/OB faculty | Simulation | Obstetrics, Physiology, Pharmacology
DELIVERY-SIM.1 Perform a simulated vaginal delivery with a mannequin.

## LIFESPAN-CASES | 70351 | Week 6 | 9/25/2026 | Lifespan Health: Case Studies | multi-speaker panel | Case-Based Instruction, Guest Panel | Reproductive Health
LIFESPAN-CASES.1 Describe how historical abuses and inequities in medical care and research have contributed to contemporary concerns regarding trust, informed consent, and reproductive health.
LIFESPAN-CASES.2 Analyze reproductive health issued from ethical, legal, clinical, psychosocial, and health-equity perspectives.
LIFESPAN-CASES.3 Explain how historical and structural factors can influence a patient's experience of the health care system.
LIFESPAN-CASES.4 Identify strategies physicians can use to provide ethical, patient-centered, culturally responsive, and trauma-informed care.
LIFESPAN-CASES.5 Recognize that legal requirements, ethical principles, and clinical decision-making may not always address the same questions or arrive at the same conclusions.

## BREAST-HISTO | 70351 | Week 7 | 9/28/2026 | Asynchronous: Breast Histology Video (45 min) | Dr. Ike Uzoaru | Lecture | Histology, Pathology, Pharmacology
BREAST-HISTO.1 Identify common histologic findings associated with benign and malignant breast disease.
BREAST-HISTO.2 Identify normal ducts, ductal carcinoma in situ, invasive ductal carcinoma, normal lobules, lobular carcinoma in situ, and invasive lobular carcinoma on histology.
BREAST-HISTO.3 Explain the importance of estrogen receptor, progesterone receptor, HER2 status in breast cancer development and treatment.
BREAST-HISTO.4 Describe the molecular signaling network of HER2, its role in breast cancer development/propagation, and therapies directed at HER2 positive breast cancers.
  VIDEO https://mediaspace.illinois.edu/media/t/1_nyrv80l5
  (required reading: Robbins & Kumar Basic Pathology 11e, Ch. 17 Female Genital System and Breast)

## ANAT-BREAST | 70351 | Week 7 | 9/29/2026 | Breast Anatomy and Anatomy Review (groups A/B and C/D, identical objectives) | Drs. Ibrahim, Swigart, Shackelford | Laboratory | Anatomy
ANAT-BREAST.1 Identify the gross anatomy morphology of the breast, including lobule, lactiferous duct, alveoli, nipple, areola, Montgomery's tubercle, ampulla (lactiferous sinus), Cooper's (suspensor) ligaments, and subcutaneous fat.
ANAT-BREAST.2 Identify the following on the clinical exam of the breast: nipple, areola, axillary tail.
ANAT-BREAST.3 Explain the relationship between the breast, pectoral fascia, and retromammary space.
ANAT-BREAST.4 Explain the blood supply, vascular and lymphatic drainage, and innervation of the breast, applying the knowledge to the clinical breast exam.
  VIDEO https://mediaspace.illinois.edu/media/t/1_c6ctvjvo (Dr. Shackelford's breast lecture, 9 min)

## TBL-BREAST | 70351 | Week 7 | 9/30/2026 | TBL 4: Breast Disorders | Dr. Samar Hegazy | Team Based Learning | Histology, Pathology, Genetics
TBL-BREAST.1 Describe the normal histology of the mammary gland.
TBL-BREAST.2 Relate the cellular organization to the breast function.
TBL-BREAST.3 Identify the most frequently diagnosed breast lesions by age of the patient, based on the most common clinical presentations in men versus women.
TBL-BREAST.4 Discuss silicone breast implants in terms of the morphologic changes in the adjacent breast and the risk of subsequent autoimmune disease and cancer.
TBL-BREAST.5 Compare and contrast inflammatory breast conditions in terms of etiology, pathogenesis, morphology, and clinical features.
TBL-BREAST.6 Discuss the clinical significance of proliferative and non-proliferative breast changes, with and without atypia.
TBL-BREAST.7 Describe how each of the proliferative and non-proliferative breast changes and the family history affects the subsequent risk of developing breast cancer.
TBL-BREAST.8 Describe the clinical features of congenital and developmental disorders of the breast.
TBL-BREAST.9 Compare and contrast fibroadenoma and phyllodes tumor in terms of clinical features, morphologic findings, and prognosis.
TBL-BREAST.10 Describe the proposed precursor-carcinoma sequence in breast cancer.
TBL-BREAST.11 Identify the characteristic morphologic changes in the proposed precursor-carcinoma sequence in breast cancer.
TBL-BREAST.12 Compare and contrast ductal carcinoma in situ (DCIS) and lobular carcinoma in situ (LCIS) in terms of incidence, clinical presentation, morphology, biomarker expression, pattern of spread, natural history, treatment, and prognosis.
TBL-BREAST.13 Describe the normal function of the gene product, incidence of gene mutation, reasons for its association with cancer, percentage of hereditary breast cancer, and risk of breast cancer by age 70 for the most common breast cancer susceptibility genes.
TBL-BREAST.14 Explain the major molecular classes of invasive ductal carcinoma of the breast identified by gene expression profiling.
TBL-BREAST.15 Describe how the major molecular classes of invasive ductal carcinoma correlates with prognosis and response to therapy.
TBL-BREAST.16 Compare and contrast invasive ductal carcinoma, invasive lobular carcinoma, medullary carcinoma, colloid (mucinous) carcinoma, tubular carcinoma, and metaplastic carcinoma of the breast in terms of incidence, age predilection, etiology, pathogenesis, clinical presentation, gross and microscopic morphology, grade, molecular classification, patterns of spread, clinical course, prognostic indicators, treatment options, and survival rates, indicating which are more common in men versus women.
TBL-BREAST.17 Explain the prognosis and likelihood of recurrence and response to therapy for patients having breast cancer based on knowledge of molecular classification and/or gene expression profiling, morphologic classification, grade, prognostic marker studies, and other predictive factors.
  (resources: Robbins & Kumar 11e Ch. 17; Pathelective breast pathology lesson 1)

## PREG-REVIEW | 70351 | Week 8 | 10/5/2026 | Remote: Pregnancy Review | Dr. Jamie Fulfer | Lecture, Group Discussion | Obstetrics, Pathophysiology, Pharmacology, Anatomy
PREG-REVIEW.1 Apply knowledge of female anatomy, normal pregnancy, maternal physiology, and pathologies of pregnancy including labor and delivery to demonstrate an integration across disciplines for problem-solving and early clinical reasoning.
PREG-REVIEW.2 Apply your knowledge on how to best determine gestational age during pregnancy.
PREG-REVIEW.3 Apply your knowledge on what medications should be discontinued due to the risk of spontaneous abortion and fetal malformations when taken in the first trimester.
PREG-REVIEW.4 Explain the importance of folic acid supplementation prior to and during pregnancy.
PREG-REVIEW.5 Describe the types of genetic testing available and when these tests are performed.
PREG-REVIEW.6 Describe what changes pregnancy has on the endocrine, cardiovascular, pulmonary, renal and gastrointestinal systems.
PREG-REVIEW.7 Describe the normal progression of blood pressure throughout pregnancy.
PREG-REVIEW.8 Apply your knowledge on how to diagnose pre-eclampsia, eclampsia and HELLP syndrome and the importance of magnesium sulfate therapy.
PREG-REVIEW.9 Apply your knowledge to describe importance of Rh status during pregnancy, how isoimmunization is prevented and how becoming iso-immunized can affect future pregnancies.
PREG-REVIEW.10 Recite the risk factors for the various complications that can occur in the third trimester including gestational diabetes, pre-eclampsia and preterm labor.
PREG-REVIEW.11 Describe importance of blood sugar control in both pregestational and gestational diabetes, how gestational diabetes is diagnosed, its etiology and the risks postpartum.
PREG-REVIEW.12 Apply your knowledge on screening for appropriate fetal growth including how uterine size correlates with gestational age.
PREG-REVIEW.13 Recite which immunizations are indicated and contraindicated in pregnancy.
PREG-REVIEW.14 Apply your knowledge on which infections are relevant to pregnancy, how to determine immune status, and the effects infection can have on pregnancy (parvovirus B19, CMV, HIV, HSV2, varicella, rubella, hepatitis B and C).
PREG-REVIEW.15 Differentiate placental disorders of pregnancy and why their diagnosis prenatally is important.
PREG-REVIEW.16 Describe the most common congenital fetal anomalies by organ system and how they are identified prenatally.
PREG-REVIEW.17 Apply your knowledge to characterize several skin disorders that can occur in the third trimester and their impact on pregnancy.
PREG-REVIEW.18 Recite the three stages of labor and how to identify the abnormal progression of labor.
PREG-REVIEW.19 Apply your knowledge to describe the cardinal movements of labor and the complications that can occur during delivery of the fetus as well as disorders of the 3rd stage of labor.

## SIM-COLPO | 70351 | Week 8 | 10/6/2026 | Simulation Lab: Colpo/LEEP/EMB/D&C (groups A/B and C/D) | Dr. Carla Rafferty | Laboratory | Reproductive Health
SIM-COLPO.1 Describe the difference between screening, diagnosis, and treatment, and apply this to early detection and prevention of gynecologic malignancies
SIM-COLPO.2 Perform the following procedures: endometrial biopsy, dilation and curettage, hysteroscopy, colposcopy with biopsy, LEEP
SIM-COLPO.3 Understand the clinical implications for not being able to sample the transformation zone during a pap smear
  FILE 70351/23274306 | Vulva and Cervix Path Lab Lecture-RS-1.pptx | 29.1 MB
  FILE 70351/23274426 | pap smear presentation sim.pptx | 1.5 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_a0xgl7eq

## ENDO-DM | 70371 | Foundations M2 Week 2 | 7/27/2026 | VIDEO: Diabetes Lecture | Dr. Sathya Subbiah | Video Lecture | Physiology
ENDO-DM.1 Explain the histology and function of the islets of Langerhans.
ENDO-DM.2 Explain insulin and glucagon synthesis and sites of production.
ENDO-DM.3 Explain the physiologic actions of insulin and glucagon.
ENDO-DM.4 Explain the regulation of insulin and glucagon release.
ENDO-DM.5 Identify insulin target tissues and relevant physiological effects of insulin secretion.
ENDO-DM.6 Understand the etiology and risk factors for type 1 and type 2 diabetes.
ENDO-DM.7 Describe the pathophysiology and symptoms of type 1 and type 2 diabetes.
ENDO-DM.8 Describe the mechanistic basis for changes in vital signs and electrolytes in patients with DKA.
ENDO-DM.9 Discuss the acute management of DKA and potential complications associated with treatment.
ENDO-DM.10 Define normoglycemia and outline the diagnostic criteria for diabetes.
ENDO-DM.11 Describe hyperosmolar hyperglycemic state (HHS).
ENDO-DM.12 Discuss the long-term management and treatment of type 1 and type 2 diabetes and its complications.
  FILE 70371/23174708 | endocrine LECTURES - DM-1-1.pptx | 17.7 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_9copn97d/89801311

## ENDO-THYROID | 70371 | Foundations M2 Week 2 | 7/28/2026 | VIDEO: Thyroid Lecture | Dr. Sathya Subbiah | Video Lecture | Physiology
ENDO-THYROID.1 Understand the anatomy, synthesis, and regulation of Thyroid hormones.
ENDO-THYROID.2 Identify relevant histopathology.
ENDO-THYROID.3 Identify the various causes, pathophysiology and treatment of hyperthyroidism and hyperthyroid crisis.
ENDO-THYROID.4 Understand the investigations associated with Thyroid disorders, nodules and thyroid cancer.
ENDO-THYROID.5 Identify the pathophysiology and treatment of hypothyroidism, myxedema coma and understand pregnancy-related changes.
ENDO-THYROID.6 Understand the presentations of primary hyperparathyroidism.
  FILE 70371/23174715 | endocrine lectures- Thyroid-1.pptx | 23.8 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_o7yl9cka/89801311

## ENDO-ADRENAL | 70371 | Foundations M2 Week 2 | 7/29/2026 | VIDEO: Adrenal Lecture | Dr. Sathya Subbiah | Video Lecture | Physiology
ENDO-ADRENAL.1 Learn relevant anatomy and embryology of adrenal glands,
ENDO-ADRENAL.2 Understand pathophysiology of adrenal insufficiency and treatment.
ENDO-ADRENAL.3 Define polyglandular autoimmune syndromes.
ENDO-ADRENAL.4 Understand steroid synthesis pathways and pathology of congenital adrenal hyperplasia (CAH).
ENDO-ADRENAL.5 Describe the varying clinical features of CAH and how they relate to hormonal abnormalities.
ENDO-ADRENAL.6 Understand hormonal causes of hypertension – Primary hyperaldosteronism and pheochromocytoma.
ENDO-ADRENAL.7 Describe the genetic features, cellular origins, and presentation and treatment of pheochromocytoma.
  FILE 70371/23160322 | endocrine lectures- Adrenal (3) (1).pptx | 10.8 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_czri89yd/89801311

## ENDO-PITUITARY | 70371 | Foundations M2 Week 2 | 7/30/2026 | VIDEO: Pituitary Lecture | Dr. Sathya Subbiah | Video Lecture | Physiology
ENDO-PITUITARY.1 Understand the anatomy, cell types of the pituitary and hormones secreted.
ENDO-PITUITARY.2 Identify the visual pathways and vision disturbance caused by a pituitary tumor.
ENDO-PITUITARY.3 Understand the Hypothalamic-Pituitary axis and its disturbances.
ENDO-PITUITARY.4 Identify basic radiology findings of pituitary tumors.
ENDO-PITUITARY.5 Understand the various causes/ patterns of over and underactive pituitary lesions, including Diabetes insipidus and pituitary apoplexies.
  FILE 70371/23174731 | endocrine lectures- Pituitary-1-1.pptx | 11 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_k5ui702x/89801311

## ENDO-PHARM | 70371 | Foundations M2 Week 2 | 7/30/2026 | VIDEO: Pharmacology of Disorders of Thyroid Gland, Adrenal Gland and Weight Management (3 videos) | Dr. Victoria Richards | Video Lecture | Pharmacology
ENDO-PHARM.1 Differentiate between the treatment modalities for hypothyroidism including the drugs of choice and their clinical pharmacology (pharmacokinetics and pharmacodynamics) in non-pregnant patients.
ENDO-PHARM.2 Evaluate the clinically-relevant drug and food interactions with levothyroxine sodium.
ENDO-PHARM.3 Evaluate the pharmacologic treatment of choice for primary and secondary adrenal insufficiency including the agent of choice and its clinical pharmacology.
ENDO-PHARM.4 Evaluate the weight loss achieved by mechanisms of action among sympathomimetics, appetite suppressants, fat absorption inhibitors and GLP-1 and GIP/GLP-1 receptor agonists.
ENDO-PHARM.5 Differentiate the pharmacokinetics and pharmacoeconomics of the two currently available oral GLP-1 receptor agonists.
ENDO-PHARM.6 Predict the adverse effects of weight loss medications based on their mechanism of action.
ENDO-PHARM.7 Appraise the claim that berberine is 'nature's Ozempic'.
ENDO-PHARM.8 Distinguish between drugs used for weight gain.
ENDO-PHARM.9 Explain what the Medicare GLP-1 Bridge allows and doesn't allow for in weight management.
  FILE 70371/23196976 | Endocrine Pharmacology I — Disorders of the Thyroid Gland (Hyperthyroidism deck; video covers hypothyroidism), Richards 2025 | 3.3 MB
  FILE 70371/23196866 | Endocrine Pharmacology II — Disorders of the Adrenal Gland: Adrenal Insufficiency, Richards 2025 | 4.3 MB
  FILE 70371/23196915 | Endocrine Pharmacology III — Pharmacology and Toxicology of Weight Management, Richards 2025 | 2.6 MB
  VIDEO https://mediaspace.illinois.edu/media/t/1_xfkqeadx/89801311
  VIDEO https://mediaspace.illinois.edu/media/t/1_lyq1fw08
  VIDEO https://mediaspace.illinois.edu/media/t/1_ubs6jaoi/89801311

## ENDO-TBL-DM | 70371 | Foundations M2 Week 2 | 7/31/2026 | TBL: Pharmacology/Diabetes | Dr. Sathya Subbiah | TBL, Lecture | Pharmacology/Pathology (Endocrinology)
ENDO-TBL-DM.1 Describe the indications, mechanisms of action, distinctive and adverse effects of medications used to treat type 2 diabetes, and their mechanisms of action.
ENDO-TBL-DM.2 Identify appropriate initial and add-on therapy for a patient with Type 2 diabetes.
ENDO-TBL-DM.3 Explain the use of glucose-lowering drugs, including the rationale for multiple drugs instead of insulin.
ENDO-TBL-DM.4 Identify clinically important interactions involving anti-hyperglycemic medications.
  FILE 70371/23192282 | Applications Type 2 Diabetes TBL -rev3.pdf | 0.9 MB
  FILE 70371/23174805 | MEDICATIONS FOR TREATMENT OF TYPE 2 DIABETES.pdf | 0.3 MB
  FILE 70371/23174807 | Type 2 Diabetes TBL Background.pptx | 2.3 MB

---

**Totals:** 41 distinct teaching sessions (35 in BSE 638, 6 in BSE 612 endocrine week), **326 objective lines** (ADNEXAL.4 is a
Canvas duplicate of ADNEXAL.3; counted, mapped to the same topic). Content files linked from sessions: ~62 decks/handouts/readings
(~700 MB, mostly image-heavy .pptx), plus 7 BiCEP learning-objective documents and 14 BiCEP case decks.
