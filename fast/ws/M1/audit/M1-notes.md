# M1 notes: eight memory scenes for the reproductive wave

Files: `content/palace/pal_<tid>_<name>.json` (8) and `audit/M1-placements.json`. Written against the fast/content
topics as they stood at the end of the session (the repair workers were still editing rp15, rp16, rp18, rp20 and rp30
while this ran; their latest state was re-read before the final check).

## Checks run

- Gate `palace_problems` on a temp root (copy of fast/content + the 8 files): with the rows inserted at the anchors in
  `M1-placements.json` it returns `[]`; with no rows inserted the only problem per scene is "must be placed in exactly
  one topic body". Every anchor matches exactly one row, and every anchor is at least 30 characters.
- `topic_problems` on the 8 temp topics with the `palace` rows inserted: no problems. `british_hits` on each scene: none.
- Built a temp page and looked at every scene at 1280 and 400 px: cards and story render, no horizontal scroll, no JS error.
- Every card was checked by phrase against the current lesson text (scripted list of the facts each card states, all
  found), then read once more against First Aid / Robbins teaching by hand.

## Scenes

| Key | Topic | Anchor (row, then start of its text) | Lesson text that teaches the cards |
|---|---|---|---|
| pal_rp30_teratogens | rp30 | p "Lithium causes Ebstein anomaly, a malformed tricuspid valve, and phenytoin..." | Exposure table (ACE inhibitors/ARBs, NSAIDs, warfarin, valproate/carbamazepine, isotretinoin, thalidomide, tetracyclines, aminoglycosides); the paragraph that anchors it (lithium); the heparin "why" row (heparin does not cross the placenta) |
| pal_rp18_torch | rp18 | p "Late findings come from damage to growing tissue: notched incisors, mulberry molars..." | Signature-finding paragraphs (toxoplasmosis, CMV, rubella, varicella, Zika, parvovirus), the blueberry-muffin trap, the two syphilis paragraphs, and the neonatal herpes paragraph (skin-eye-mouth vesicles, encephalitis, disseminated) plus the opening paragraph (herpes caught at birth) |
| pal_rp15_ovarian_markers | rp15 | p "The thecoma, like the granulosa cell tumor, makes estrogen." | Teratoma, dysgerminoma/yolk sac/choriocarcinoma, sex cord-stromal and Meigs paragraphs; high-grade serous paragraph and the marker table; Krukenberg in the "which cell" paragraph |
| pal_rp20_testis_tumors | rp20 | p "About 5 percent of testicular tumors arise from sex cord-stromal cells..." | Seminoma, nonseminomatous germ cell and Leydig paragraphs; the "a high AFP means not a pure seminoma" trap (never AFP, mild hCG, LDH tracks bulk); marker table |
| pal_rp16_genital_ulcers | rp16 | p "The third painless ulcer is **granuloma inguinale**, also called donovanosis..." | The three ulcer paragraphs (painful: herpes, chancroid; painless: syphilis chancre, LGV, donovanosis; any ulcer raises HIV risk) and the ulcer table (tender nodes both sides for herpes, darkfield, L serovars, Donovan bodies) |
| pal_rp24_breast_types_drugs | rp24 | p "Endocrine therapy starves receptor-positive cancer of estrogen signaling..." | Invasive-type paragraphs and table (ductal 70 to 80 percent, lobular single file, inflammatory, Paget); receptor/molecular-class paragraph (triple-negative, BRCA1, young Black women); endocrine-therapy paragraph (tamoxifen, aromatase inhibitors, PARP); the trastuzumab/anthracycline trap |
| pal_rp6_sex_chromosomes_dsd | rp6 | p "Three variants round out the list. **XYY syndrome** (47,XYY)..." | Androgen insensitivity, 5-alpha-reductase, Swyer, CAH, Turner, Klinefelter, Kallmann and the "three variants" paragraph (XYY, 46,XX testicular DSD) |
| pal_rp10_contraception_risks | rp10 | p "The copper IUD contains no hormone. Copper ions cause a sterile inflammatory reaction..." | Estrogen/clot-risk and contraindication paragraph, enzyme-inducer trap, progestin-only/IUD paragraph, no-hormone methods table (condom, diaphragm, tubal sterilization) |

Counts: titles 7 to 9 words; stories 108 to 141 words; 7 to 9 cards each; card labels at most 7 words; card texts 7 to 25 words.

## Placement notes for P7.4

- A table row cannot be an anchor (its first argument is the header list, not a string), so each scene is anchored to the
  paragraph that finishes the list. In rp15, rp20 and rp10 the summary table follows the scene; in rp18 and rp16 an `img` or
  `f` row follows the anchor paragraph (rp18_hutchinson, rp16_ulcers). If the image row is present at import time, insert the
  scene after it so the photograph stays directly under the paragraph that promises it.
- The anchors are exact starts of the current text. If a repair edit rewrites an anchor paragraph, re-match on the same
  paragraph's new start (the scene still belongs after it).

## Facts left out on purpose

- Nothing on a card is missing from its lesson; no fact was added that the lesson does not teach.
- Taught in the lesson but left off for space (nine cards at most): rp30 phenytoin, methotrexate, methimazole, misoprostol,
  mycophenolate, diethylstilbestrol, alcohol; rp6 placental aromatase deficiency and ovotesticular DSD; rp24 luminal A/B;
  rp15 mucinous, Brenner, struma ovarii; rp20 lymphoma; rp10 vasectomy, drospirenone, minipill.
- Mnemonic-only words (hutch for Hutchinson, "pair" for PARP, the taxi meter for CA-125, "H's hurt") are sound or picture
  hooks; every medical statement they point to is on the card and in the lesson.
- No time-bound numbers are used, so no "as of 2025" is needed.
