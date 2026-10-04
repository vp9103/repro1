# G02 notes: rapid review sets for rp3, rp11 and rp17 (fast-track draft)

Workspace `fast/ws/G02/`. Owned files: `content/rapid/rp3.json`, `content/rapid/rp11.json`, `content/rapid/rp17.json`, `audit/P6.1.md` (rp3), `audit/P6.4.md` (rp11), `audit/P6.7.md` (rp17) and this file. Nothing else was written. Check: `python3 .repro/fast_check.py --ws G02 --topics rp3,rp11,rp17 --build` prints only `ok` lines. No second-model review was run (user direction 2026-10-04); facts were checked twice by the author against First Aid / Robbins / current CDC, ACOG and ACIP teaching and the course decks in `scope/lectures/`.

## Summary

| Set | Gated task | Items | Pinned to a figure | Items without a figure (NO-VISUAL rows) | Key positions 0-4 |
|---|---|---|---|---|---|
| rp3 Breast anatomy and histology | P6.1 | 13 | 12 (92%) | 1 | 0:3, 1:2, 2:3, 3:3, 4:2 |
| rp11 Menopause and hormone therapy | P6.4 | 15 | 14 (93%) | 1 | 0:3, 1:3, 2:3, 3:3, 4:3 |
| rp17 Viral STIs: HIV, HSV, HPV and molluscum | P6.7 | 22 | 20 (90%) | 2 | 0:4, 1:6, 2:4, 3:3, 4:5 |

Only existing figures are pinned (no figure was created or edited). Pins outside the topic's own figures: rp3 uses `rp24_sequence` (luminal cell) and `en2_axes` (prolactin); rp11 uses `rp12_vaginitis` (glycogen), `rp14_estrogen` (bleeding in endometrial carcinoma) and `en3_prl` (prolactin excess suppresses GnRH); rp17 uses `rp13_e6e7`, `rp13_screen`, `rp16_ulcers`, `rp18_routes` and `rp30_timeline`. Each `pt.hl` string is an exact fragment of a `<text>` label in the pinned figure.

## rp3 Breast anatomy and histology

| Item | Blueprint ids | Objective ids | Pinned figure | Keyed answer |
|---|---|---|---|---|
| rp3r01 | BP-rp3-01 | ANAT-BREAST.1, TBL-BREAST.1 | fig:rp3_section | Terminal duct lobular unit |
| rp3r02 | BP-rp3-07 | ANAT-BREAST.1 | fig:rp3_section | Montgomery tubercles |
| rp3r03 | BP-rp3-03 | ANAT-BREAST.1 | fig:rp3_section | Dermis and the pectoral fascia |
| rp3r04 | BP-rp3-07 | ANAT-BREAST.3 | fig:rp3_section | Retromammary space |
| rp3r05 | BP-rp3-04 | ANAT-BREAST.4 | fig:rp3_axilla | 75% |
| rp3r06 | BP-rp3-04 | ANAT-BREAST.4 | fig:rp3_axilla | Medial to the muscle |
| rp3r07 | BP-rp3-06 | ANAT-BREAST.4 | fig:rp3_axilla | Serratus anterior |
| rp3r08 | BP-rp3-06 | ANAT-BREAST.4 | fig:rp3_axilla | Intercostobrachial nerve |
| rp3r09 | BP-rp3-05 | ANAT-BREAST.4 | fig:rp3_axilla | Internal thoracic artery |
| rp3r10 | BP-rp3-07 | ANAT-BREAST.2 | fig:rp3_axilla | Upper outer quadrant |
| rp3r11 | BP-rp3-02 | TBL-BREAST.1, TBL-BREAST.2 | fig:rp24_sequence | Luminal epithelial cells |
| rp3r12 | BP-rp3-08 | TBL-BREAST.2 | fig:en2_axes | Prolactin |
| rp3r13 | BP-rp3-09 | TBL-BREAST.2 | none (row in audit/P6.1.md) | Merocrine secretion |

Blueprint coverage for rp3 (hi items first; practice questions shown for context):

| Blueprint id | Yield | Rapid items | Practice questions |
|---|---|---|---|
| BP-rp3-01 | hi | rp3r01 | none |
| BP-rp3-02 | hi | rp3r11 | rp3q07, rp3q08 |
| BP-rp3-03 | hi | rp3r03 | rp3q02, rp3q03 |
| BP-rp3-04 | hi | rp3r05, rp3r06 | rp3q04, rp3q05 |
| BP-rp3-06 | hi | rp3r07, rp3r08 | rp3q01, rp3q06 |
| BP-rp3-05 | mid | rp3r09 | none |
| BP-rp3-07 | mid | rp3r02, rp3r04, rp3r10 | rp3q03 |
| BP-rp3-08 | mid | rp3r12 | rp3q07, rp3q10 |
| BP-rp3-09 | mid | rp3r13 | rp3q09 |

## rp11 Menopause and hormone therapy

| Item | Blueprint ids | Objective ids | Pinned figure | Keyed answer |
|---|---|---|---|---|
| rp11r01 | BP-rp11-01 | MENOPAUSE.1, MENOPAUSE.9 | fig:rp11_axis | Inhibin B |
| rp11r02 | BP-rp11-02 | MENOPAUSE.1 | fig:rp11_axis | Age 40 |
| rp11r03 | BP-rp11-02, BP-rp11-16 | MENOPAUSE.8 | fig:rp11_axis | The usual age of menopause, about 51 |
| rp11r04 | BP-rp11-13, BP-rp11-11 | MENOPAUSE.9 | fig:rp11_axis | Clinically, after 12 months without menses |
| rp11r05 | BP-rp11-03 | MENOPAUSE.2 | fig:rp11_axis | KNDy neurons of the arcuate nucleus |
| rp11r06 | BP-rp11-03 | MENOPAUSE.2, MENOPAUSE.3 | fig:rp12_vaginitis | Glycogen |
| rp11r07 | BP-rp11-05 | MENOPAUSE.11 | fig:rp14_estrogen | Endometrial carcinoma |
| rp11r08 | BP-rp11-06 | MENOPAUSE.6 | fig:rp11_ht | Estrogen alone |
| rp11r09 | BP-rp11-16 | MENOPAUSE.6 | fig:rp11_ht | Continuous combined therapy |
| rp11r10 | BP-rp11-16 | MENOPAUSE.6 | fig:rp11_ht | 12 to 14 days |
| rp11r11 | BP-rp11-15 | MENOPAUSE.6, MENOPAUSE.8 | fig:rp11_ht | Greater production of clotting factors |
| rp11r12 | BP-rp11-08, BP-rp11-06 | MENOPAUSE.13 | fig:rp11_ht | Unopposed estrogen would risk endometrial cancer |
| rp11r13 | BP-rp11-10 | MENOPAUSE.12 | fig:en3_prl | GnRH |
| rp11r14 | BP-rp11-07 | MENOPAUSE.6, MENOPAUSE.8 | none (row in audit/P6.4.md) | Previous venous thromboembolism |
| rp11r15 | BP-rp11-01 | MENOPAUSE.1 | fig:rp11_axis | Ovarian stroma |

Blueprint coverage for rp11 (hi items first; practice questions shown for context):

| Blueprint id | Yield | Rapid items | Practice questions |
|---|---|---|---|
| BP-rp11-01 | hi | rp11r01, rp11r15 | rp11q01, rp11q02 |
| BP-rp11-02 | hi | rp11r02, rp11r03 | rp11q03 |
| BP-rp11-03 | hi | rp11r05, rp11r06 | rp11q04, rp11q12 |
| BP-rp11-04 | hi | none | rp11q09 |
| BP-rp11-05 | hi | rp11r07 | rp11q06 |
| BP-rp11-06 | hi | rp11r08, rp11r12 | rp11q05, rp11q08 |
| BP-rp11-07 | hi | rp11r14 | none |
| BP-rp11-08 | hi | rp11r12 | rp11q10 |
| BP-rp11-15 | hi | rp11r11 | rp11q08 |
| BP-rp11-09 | mid | none | rp11q04, rp11q07 |
| BP-rp11-10 | mid | rp11r13 | rp11q11 |
| BP-rp11-11 | mid | rp11r04 | none |
| BP-rp11-12 | mid | none | none |
| BP-rp11-13 | mid | rp11r04 | rp11q11 |
| BP-rp11-14 | mid | none | rp11q06 |
| BP-rp11-16 | mid | rp11r03, rp11r09, rp11r10 | rp11q12 |
| BP-rp11-17 | mid | none | rp11q07 |

## rp17 Viral STIs: HIV, HSV, HPV and molluscum

| Item | Blueprint ids | Objective ids | Pinned figure | Keyed answer |
|---|---|---|---|---|
| rp17r01 | BP-rp17-02 | VIRAL-STI-TORCH.4 | fig:rp17_hiv | gp41 |
| rp17r02 | BP-rp17-02, BP-rp17-06 | VIRAL-STI-TORCH.9 | fig:rp17_hiv | Coreceptor tropism assay |
| rp17r03 | BP-rp17-16, BP-rp17-02 | VIRAL-STI-TORCH.3 | fig:rp17_hiv | CXCR4 |
| rp17r04 | BP-rp17-17, BP-rp17-01 | VIRAL-STI-TORCH.9, VIRAL-STI-TORCH.2 | fig:rp17_hiv | Error-prone reverse transcription without proofreading |
| rp17r05 | BP-rp17-17, BP-rp17-06 | VIRAL-STI-TORCH.9 | fig:rp17_hiv | Integrase strand transfer inhibitors |
| rp17r06 | BP-rp17-17 | VIRAL-STI-TORCH.9 | fig:rp17_hiv | The gag-pol polyprotein |
| rp17r07 | BP-rp17-17, BP-rp17-06 | VIRAL-STI-TORCH.9 | fig:rp17_hiv | Nonnucleoside reverse transcriptase inhibitors |
| rp17r08 | BP-rp17-01 | VIRAL-STI-TORCH.2 | fig:rp17_hiv | Integrated provirus |
| rp17r09 | BP-rp17-03, BP-rp17-12, BP-rp17-02 | VIRAL-STI-TORCH.8 | fig:rp17_hiv | p24 |
| rp17r10 | BP-rp17-03, BP-rp17-05 | VIRAL-STI-TORCH.8 | fig:rp30_timeline | At the first prenatal visit, opt-out |
| rp17r11 | BP-rp17-07 | VIRAL-STI-TORCH.8 | fig:rp16_ulcers | Lesion PCR |
| rp17r12 | BP-rp17-07, BP-rp17-08 | VIRAL-STI-TORCH.5, VIRAL-STI-TORCH.9 | fig:rp18_routes | Acyclovir |
| rp17r13 | BP-rp17-07 | VIRAL-STI-TORCH.5, VIRAL-STI-TORCH.8 | fig:rp18_routes | Cesarean delivery |
| rp17r14 | BP-rp17-08 | VIRAL-STI-TORCH.9 | fig:rp17_acyclovir | Valine ester prodrug of acyclovir |
| rp17r15 | BP-rp17-08 | VIRAL-STI-TORCH.9 | fig:rp17_acyclovir | Chain termination after competing with guanosine |
| rp17r16 | BP-rp17-08, BP-rp17-07 | VIRAL-STI-TORCH.5 | fig:rp17_acyclovir | Latent virus has no active thymidine kinase or polymerase to act on |
| rp17r17 | BP-rp17-09 | VIRAL-STI-TORCH.6 | fig:rp13_e6e7 | Types 6 and 11 |
| rp17r18 | BP-rp17-09 | VIRAL-STI-TORCH.6 | fig:rp13_e6e7 | E6 and E7 |
| rp17r19 | BP-rp17-09 | VIRAL-STI-TORCH.6 | fig:rp13_screen | Catch-up through age 26 |
| rp17r20 | BP-rp17-09 | PATHPHARM-CERVIX-HPV.3, VIRAL-STI-TORCH.8 | fig:rp13_screen | Anal cytology |
| rp17r21 | BP-rp17-04 | VIRAL-STI-TORCH.4 | none (row in audit/P6.7.md) | Tenofovir with emtricitabine |
| rp17r22 | BP-rp17-06 | VIRAL-STI-TORCH.9 | none (row in audit/P6.7.md) | It inhibits CYP3A4, raising levels of the partner drug |

Blueprint coverage for rp17 (hi items first; practice questions shown for context):

| Blueprint id | Yield | Rapid items | Practice questions |
|---|---|---|---|
| BP-rp17-01 | hi | rp17r04, rp17r08 | rp17q07 |
| BP-rp17-02 | hi | rp17r01, rp17r02, rp17r03, rp17r09 | rp17q01 |
| BP-rp17-03 | hi | rp17r09, rp17r10 | rp17q03 |
| BP-rp17-04 | hi | rp17r21 | none |
| BP-rp17-05 | hi | rp17r10 | rp17q06 |
| BP-rp17-06 | hi | rp17r02, rp17r05, rp17r07, rp17r22 | rp17q04 |
| BP-rp17-07 | hi | rp17r11, rp17r12, rp17r13, rp17r16 | rp17q07 |
| BP-rp17-08 | hi | rp17r12, rp17r14, rp17r15, rp17r16 | rp17q08, rp17q09 |
| BP-rp17-09 | hi | rp17r17, rp17r18, rp17r19, rp17r20 | rp17q10, rp17q11 |
| BP-rp17-10 | hi | none | rp17q12 |
| BP-rp17-12 | hi | rp17r09 | rp17q03 |
| BP-rp17-17 | hi | rp17r04, rp17r05, rp17r06, rp17r07 | none |
| BP-rp17-11 | mid | none | none |
| BP-rp17-13 | mid | none | none |
| BP-rp17-14 | mid | none | rp17q02 |
| BP-rp17-15 | mid | none | rp17q05 |
| BP-rp17-16 | mid | rp17r03 | rp17q02 |

## Gaps that need a figure first (reported, not worked around)

The rapid gate needs a pinned figure on at least 90 percent of items, so each set has room for only one or two figure-less items. Those slots went to facts that no practice question tests directly: rp3r13 (merocrine versus apocrine), rp11r14 (contraindications to hormone therapy), rp17r21 (oral PrEP drugs) and rp17r22 (ritonavir boosting). The hi blueprint items below have no rapid item because no existing figure contains their answer; they are covered only by practice questions.

- BP-rp11-04 (bone loss and cardiovascular effects of estrogen loss): practice rp11q09 covers bone. A rapid item needs a bone and lipid panel (RANKL and osteoprotegerin, trabecular bone, LDL); `en8_loop.svg` has no JSON, so it cannot be pinned.
- BP-rp17-05 (perinatal HIV prevention): only partly covered by rp17r10 (screening and early antiretroviral therapy); infant prophylaxis, intrapartum zidovudine and the formula-feeding advice are tested by practice rp17q06 only.
- BP-rp17-10 (molluscum contagiosum): practice rp17q12 only; no figure shows it.
- BP-rp17-12 (HIV course and labs): rp17r09 covers the p24 and window-period part; AIDS definition (CD4 under 200), viral load versus CD4 count and acute retroviral syndrome have no figure.

## Fact notes and time-bound statements

- HPV vaccination (rp17r19) says "as of 2025": routine age 11 to 12, catch-up through 26, shared decision-making 27 to 45.
- HIV testing (rp17r09, rp17r10): fourth-generation antigen/antibody immunoassay first, then an antibody differentiation assay; universal opt-out screening at the first prenatal visit, repeat in the third trimester when risk is higher.
- HSV in pregnancy (rp17r12, rp17r13): acyclovir 400 mg three times daily or valacyclovir 500 mg twice daily from 36 weeks; cesarean for lesions or prodrome at labor.
- PrEP (rp17r21): the stem asks for the daily oral pair; injectable cabotegravir is named only as one long-acting option, with no claim that it is the only one.
- Menopause hormone therapy (rp11r08 to rp11r12, rp11r14): estrogen alone after hysterectomy, progestogen with a uterus (cyclic 12 to 14 days or continuous combined), oral first pass versus transdermal, WHI design and the estrogen-alone arm not raising breast cancer, contraindications as in the course pharmacology deck. No dose limits or age limits from newer labeling are stated.
- Not stated on purpose because they were not needed or could not be verified from the scope files: lenacapavir, elinzanetant, and the late-2025 FDA labeling change for menopausal hormone therapy.

## Observations outside this task (not acted on)

- The rp17 topic grid (`fast/content/topics/rp17.json`) lists "E6 protein degrades p53" as a decoy (0) because the grid asks about herpes simplex and its treatment; this is consistent, but a student could read it as false. rp17r18 teaches the E6/E7 roles.
- `fast/content/figs/en8_loop.svg` and `en8_vitd.svg` have no JSON file, so they cannot be pinned by media keys.
