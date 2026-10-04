# ENGINE-MAP: The Cardio Path, engine vs cardio content

Purpose: an exact, verifiable map of `cardio-path.html` so that the generic engine can be lifted out by a script and paired with new Repro-Endo content without losing anything.

## How to read this map

**Two snapshots.** Another session is editing the file right now (PLAN-2 task P1.8), so every region is identified in two ways:

1. by an **anchor**: an exact substring. Unless a row says otherwise, it is the first occurrence in the file.
2. by **line numbers** in two versions of the file:

| Tag | File | md5 | Lines | Notes |
|---|---|---|---|---|
| **L** (live) | `outputs/cardio-path.html` | `fc7e3be3e61ee7cabbc29c75a6432089` | 20,290 | 2,083,317 bytes, mtime 2026-09-26 09:15:16. The ledger says "P1.8 part A done; part B next". |
| **S0** (frozen) | `outputs/.plan2/backups/P1.8-041fd49b.html` | `5c2b2b8d887343e544a4dd159d2d9f42` | 20,058 | Byte-identical to the file I read end to end at 08:58, which is the state before P1.8. |

- Line numbers written in prose ("L1234") are **live** lines.
- A region runs from its anchor to the line before the next row's anchor.
- **An extraction script must cut on anchors, not on line numbers.** Parts B and C of P1.8 will add more `RAPID_POINT` entries and more FIGS svg edits, so live numbers after about L1419 will drift again.

**Drift already observed.** At my final check the file had moved on to md5 `e799637802d23060e1bcc1d9709e13dd` (20,434 lines):

- `RAPID_POINT` had grown to 151 entries.
- Engine functions had shifted by about 144 lines. For example, `function wireRapid(app){` went from L16130 to L16274, and `IMGTOPIC` in `topicEvidence` from L12224 to L12288.
- A top-level-declaration diff against S0 still showed **only** the four P1.8 additions: `RAPID_POINT`, `applyRapidPoints`, `highlightFigure`, `lbHighlight`. So the region structure below is unchanged; only the numbers moved.

**What changed between S0 and live** (`diff S0 live`, all P1.8 work):

- New CSS: `.rfsay/.ptsay`, `rect.hlbox`, `text.hl` at L945–953.
- SVG and text edits inside `FIGS` (wiggers, pvloop, apotent, conduction, coronary, shunts, lipid …) and one re-pin in `RAPID_MEDIA`.
- New code:
  - `const RAPID_POINT` (L13849)
  - `applyRapidPoints()` IIFE (L13928)
  - `highlightFigure()` (L13944)
  - a 4th `opt` argument for `deepReviewHTML()` (L13985–13998)
  - `viewRapid` passes `{open, say, hl}` (L14569)
  - `fitSvgText` ignores `rect.hlbox`
  - `lbHighlight()` (L15419) plus two calls in `wireZoom`
  - a highlight hook in `wireRapid` (L16132)

**Method.** I read every line of the code regions: 1–1136, S0 11714–16024, and S0 18781 to the end. I also read the S0→live diff. For content regions I read only the boundaries, the schemas, and every IIFE or top-level mutating statement inside them. Nothing was run: no browser and no self-test. Runtime counts quoted from PLAN-2 or the ledger are labelled as such.

**Class legend:**

| Class | Meaning |
|---|---|
| **E** | ENGINE. Generic; works unchanged. |
| **E+L** | ENGINE+LITERALS. Generic code that embeds cardio or exam literals (listed in §1b). |
| **E-T** | ENGINE, load-time transform. Generic code that sits in a content region and merges a side map into items. Keep it if the new content uses the same side map. |
| **C** | CONTENT. Replace it. |
| **P** | CARDIO-PATCH. A one-off IIFE that mutates cardio content. Drop it, but honour its lesson (§1e). |

---

## 1. REGION MAP

### 1a. Contiguous regions, top to bottom

| # | Anchor (exact substring) | L | S0 | Class | Contents / notes |
|---|---|---|---|---|---|
| 1 | `<!doctype html><html lang="en">` | 1 | 1 | E+L | `<title>The Cardio Path</title>` on L1 |
| 2 | `<!-- P1.1 fix, two defects` | 2 | 2 | E | comment (L2–6) |
| 3 | `<link rel="preconnect" href="https://fonts.googleapis.com">` | 7 | 7 | E | Google Fonts: Newsreader, IBM Plex Sans/Mono (L7–9) |
| 4 | `/* ============================ TOKENS` | 11 | 11 | E+L | opens `<style>` (L10). Per-block palette `--a1/--a2` at L20–21 (light), L40–41 (dark media query), L54–55 (dark attr); comments "arterial"/"venous" L20–21. The comment at L12–13 says the palette is block-specific. `META.a1/a2` is never read by any code. |
| 5 | `/* ============================ BASE` | 64 | 64 | E | Component CSS to `</style>` L621. Sub-anchors: HEADER 81 · LAYOUT 103 · CARDS 129 · PATH/SPINE 133 · TYPE/READING 169 · FIGURES 239 · annotated photographs 261 · BUTTONS 298 · QUESTIONS 323 · pretest 366 · RAPID PICK 383 (P1.7 rules 393–417) · DRILLS 427 · recall grid 469 · label-the-diagram 495 · MEMORY PALACE 507 · WEAK SPOTS 526 · STATS/MISC 553 · glossary 579 · AI tutor 597 · RESPONSIVE 602. **Dead (no JS producer):** `.imgbox svg.ovl` and `.ovl .mk/.sh/.pin/text.pn` (265–278); `.labwrap/.labbank/.labchip/.labslot` (495–505); `.tutor/.tutorout` (597–600). |
| 6 | `<header>` | 622 | 622 | E+L | Brand `<b>The Cardio Path</b>` L624. Also `#countdown` 625, `nav#modes` 626, ring svg `#ringfill/#pctnum/#ringlbl` 627–633, `#savedot` 634. |
| 7 | `<main tabindex="-1">` | 638 | 638 | E | `#app` mount point |
| 8 | `<!-- P1.3 - screen-reader announcement channel` | 639 | 639 | E | `#live` aria-live region (L643–644) |
| 9 | `ENGINE v2 COMPONENTS` | 647 | 647 | E | Second `<style>` (L645) to `</style>` L1135 (S0 1126). Sub-anchors: image overlays 651 · tutor dock 666 · global search 710 · daily plan 736 · calendar 758 · linked banner 821 · unpack 833 · yield filter 849 · backup 862 · calibration 867 · pins/rail 877 · `.vmap` 923 · conceptvisual 935 · deepreview 940 · **P1.8 `.rfsay/.ptsay`, `rect.hlbox`, `text.hl` 945–953 (live only)** · signalling 961 · pacing 965 · memory scenes 971 · leader lines 990 · LAYOUT REPAIRS 1001 · COLOUR 1071 · enlarge/lightbox 1100. **Dead:** `.vmap/.vzone` (923–934). **Undefined tokens:** `var(--shadow-soft)` L917, `var(--surf-2)` L974. |
| 10 | `<script>` | 1136 | 1127 | E | The single script, to L20288 |
| 11 | `const META = {key:"cardio"` | 1140 | 1131 | C | Banner "CARDIOVASCULAR — META, GLOSSARY…" at L1138. `META={key,name,short,a1,a2}`; the engine reads `key`, `name`, `short`. |
| 12 | `const EXAM_KEY = "step1.examDate"` | 1145 | 1136 | E+L | Comment L1142–1144; `parseExamDate`, `readExamDate`, `let EXAM`, `pad2`, `examISO`, `setExamDate` (to L1163). `EXAM_DEFAULT="2026-10-10"`. |
| 13 | `/* ---------------------------------------------------------------- glossary */` | 1165 | 1156 | E | Registry `const GLOSS = {};` L1166 and helper `const G = (k,t,d,alt)` L1171 |
| 14 | `G("preload","Preload"` | 1173 | 1164 | C | 53 terms, ending with `G("ASO","ASO titre"` L1229 |
| 15 | `/* ---------------------------------------------------------------- memory scenes */` | 1231 | 1222 | E(decl)+C | `const PALACE = {};` L1232; `PALACE.mi` L1234 … `antiarrhythmic` (5 scenes) |
| 16 | `/* ---------------------------------------------------------------- images` | 1283 | 1274 | E(decl)+C | `const IMGS = {};` L1286; `IMGS.mi_stages` L1288 … `dissection` (8 images) |
| 17 | `/* ---- glossary terms introduced by the depth rewrites ---- */` | 1411 | 1402 | C | 6 more `G()` calls |
| 18 | `CARDIOVASCULAR — FIGURES` (1st of 3 matches) | 1419 | 1410 | E(decl)+C | `const FIGS = {};` L1423; `FIGS.wiggers` L1426 … `13. Lipids` L2295 (13 figures). P1.8 is editing svg text here. |
| 19 | `/* ---------- Antiarrhythmic classes drawn ON the action potential` | 2360 | 2319 | C | aaclasses, tof, drugtree, bugtree |
| 20 | `/* ---------------- Frank-Starling curves` | 2658 | 2617 | C | starling, jvp, fetalcirc, guyton, axis |
| 21 | `/* ---------------- P4.1 Cardiomyopathy geometry` | 2941 | 2882 | C | 9 × `Object.assign(FIGS,{…})`: cmy_geometry, heart_sounds, av_block, digoxin, shock_table, xanthomas, secondary_htn, vesselwall, archderiv (the last starts at `P4.8r2 The arterial pole` L4442) |
| 22 | `CARDIOVASCULAR — BLOCKS, part 1` | 4578 | 4518 | C | `const BLOCKS = [` L4581: found (f1,f2), phys (p1,p2,p3) |
| 23 | `CARDIOVASCULAR — BLOCKS, part 2` | 4821 | 4761 | C | `BLOCKS.push(` athero (a1,a2), ihd (i1,i2), arrhy (r1) |
| 24 | `CARDIOVASCULAR — BLOCKS, part 3` | 5064 | 5004 | C | hf (h1), valve (v1), inflam (n1,n2), vasc (c1,c2) |
| 25 | `CARDIOVASCULAR — BLOCKS, part 4` | 5350 | 5290 | C | hemo (m1), drugs (d1,d2) |
| 26 | `CARDIOVASCULAR — DEEP DIVE ADDITIONS` | 5540 | 5480 | C | `PALACE.drugsuffix` L5546, `bugpairs`; congen/f3 via `BLOCKS.push(` after `/* ---------- a full congenital heart disease topic` L5571 |
| 27 | `(function enrich(){` | 5654 | 5594 | P | Comment at L5653 |
| 28 | `CARDIOVASCULAR — DEPTH REWRITE, batch 1` | 5680 | 5620 | C | `const REWRITE = {};` L5684; c2, i1, v1 |
| 29 | `(function applyRewrite(){` | 5809 | 5749 | P | |
| 30 | `CARDIOVASCULAR — REAL IMAGES, set 2` | 5813 | 5753 | C | `IMGS.ecg_af` L5818 … `valve_as` (8) |
| 31 | `(function placeImages(){` | 5931 | 5871 | P | |
| 32 | `CARDIOVASCULAR — REAL IMAGES, set 3` | 5954 | 5894 | C | ecg_vt … tof_spec (6) |
| 33 | `(function placeImages3(){` | 6042 | 5982 | P | |
| 34 | `IMAGE CREDITS — author, licence and source` | 6065 | 6005 | C | `const CRED = {};` L6069 |
| 35 | `(function applyCredits(){` | 6138 | 6078 | P | Literal "Wikimedia Commons (resized)" L6142 |
| 36 | `/* NEWIMAGESET4START */` | 6146 | 6086 | C | 14 images, to `/* NEWIMAGESET4END */` L6367 |
| 37 | `CARDIOVASCULAR — QUESTIONS, RAPID PICKS, DRILLS, PATH` | 6369 | 6309 | C | `const QS = [` L6372 (q1–q61) |
| 38 | `RAPID PICKS — one line, three options, five seconds` | 6862 | 6802 | C | `const RAPID = [` L6864; P1.8 coverage-floor tail L7118 |
| 39 | `   DRILLS` (banner line) | 7137 | 7077 | C | `const DRILLS = [` L7139 (dr1–dr12) |
| 40 | `PATH — the sequential spine` | 7238 | 7178 | C | `const PATH = [` L7240; `{id:"p0", kind:"diag"` L7241; `{id:"pf", kind:"final"` L7280 ("Forty questions" L7281) |
| 41 | `CARDIOVASCULAR — RAPID ONE-LINERS, batch 1` | 7284 | 7224 | C | `const RAPID_X = {` L7287 |
| 42 | `CARDIOVASCULAR — RAPID ONE-LINERS, batch 2, and the apply step` | 7379 | 7319 | C | `Object.assign(RAPID_X,…)` batches; `RAPID_X["Coarctation…` L7538; P1.8 block L7541; P2.9 L7570; second pass L7681; re-audit L7726 |
| 43 | `(function applyRapidX(){` | 7757 | 7697 | E-T | Sets `r.x` from `RAPID_X` by normalised question text; fallback is `<b>answer</b>` |
| 44 | `(function explainTheAnswer(){` | 7776 | 7716 | P | |
| 45 | `CARDIOVASCULAR — DEEPER QUESTION WALK-THROUGHS` | 7830 | 7770 | C | `const QDEPTH = {` L7834 |
| 46 | `(function applyQDepth(){` | 7979 | 7919 | E-T | Merges `w`/`ef`/`ei`/`et` into the QS items that exist at that moment |
| 47 | `CARDIOVASCULAR — DEPTH REWRITE, batch 2` | 7992 | 7932 | C | `REWRITE.d2` L7997, a2, p3 |
| 48 | `(function applyRewrite2(){` | 8090 | 8030 | P | |
| 49 | `CARDIOVASCULAR — QUESTION BANK, batch 2` | 8094 | 8034 | P | `(function dropDuplicates(){` L8102 |
| 50 | `const QS2 = [` | 8107 | 8047 | C | Merge statement `QS2.forEach(q => QS.push(q));` L8408 |
| 51 | `CARDIOVASCULAR — REAL IMAGES, batch 4` | 8410 | 8350 | C | `IMGS.ecg_pericarditis` L8416 … `schisto` (8) |
| 52 | `(function applyCreditsLate(){` | 8532 | 8472 | P | Comment L8527; literal L8537 |
| 53 | `CARDIOVASCULAR — DEPTH REWRITE, batch 3` | 8541 | 8481 | C+P | c1, i2, m1, n1; `(function applyRewrite3(){` L8688 |
| 54 | `CARDIOVASCULAR — DEPTH REWRITE, batch 4` | 8692 | 8632 | C+P | r1, n2, h1, a1; `(function applyRewrite4(){` L8832 |
| 55 | `CARDIOVASCULAR — DEPTH REWRITE, batch 5` | 8836 | 8776 | C+P | d1, f2, p1, p2, f1; `(function topUps(){` L8987 re-applies every REWRITE |
| 56 | `CARDIOVASCULAR — final structural pass` | 9012 | 8952 | P | `(function splitVasculitis(){` L9020; `const SMALL = /ANCA` L9089 |
| 57 | `(function trimLong(){` | 9095 | 9035 | P | |
| 58 | `const TOPUP = {` | 9124 | 9064 | C+P | `(function applyTopups(){` L9145; `TOPUP.d1.push(`… L9152–9160; `(function applyTopups2(){` L9162 |
| 59 | `CARDIOVASCULAR — WRONG-ANSWER DEPTH, batch 2` | 9169 | 9109 | C+E-T | `const QDEPTH2 = {` L9177; `(function applyQDepth2(){` L9347 |
| 60 | `CARDIOVASCULAR — PANEL FIXES` | 9362 | 9302 | P | 17 IIFEs, L9369–L9726 (see §1d) |
| 61 | `CARDIOVASCULAR — DRILL REPAIRS AND NEW DRILLS` | 9728 | 9668 | P+C | `(function repairDrills(){` L9733; `const DRILLS2 = [` L9764; merge L9830 |
| 62 | `CARDIOVASCULAR — SELF-EXPLANATION CHECKPOINTS` | 9832 | 9772 | C+E-T | `const SEXP = {` L9839; `(function attachSexp(){` L9916 |
| 63 | `RAPID ITEMS — DISTRACTOR QUALITY` | 9927 | 9867 | P | Stale "three-option recall" rationale; `(function fixDeadDistractors(){` L9950 |
| 64 | `CARDIOVASCULAR — QUESTION BANK, batch 3` | 9967 | 9907 | C | `const QS3 = [` L9973; merge L10258 |
| 65 | `CARDIOVASCULAR — QUESTION BANK, batch 4` | 10260 | 10200 | C | QS4 L10265; merge L10529 |
| 66 | `CARDIOVASCULAR — QUESTION BANK, batch 5` | 10531 | 10471 | C | QS5 L10535; merge L10938 |
| 67 | `FIGURE REDRAWS` | 10940 | 10880 | C | Overrides `FIGS.murmurs` (`/* ---------------- Murmurs: shapes on a timeline` L10947) and `FIGS.lipid` (`/* ---------------- Lipid handling` L11016) |
| 68 | `(function treesToTables(){` | 11082 | 11018 | P | |
| 69 | `/* ---------------- Tetralogy: the anatomy, not a sentence tree` | 11132 | 11068 | C | Overrides `FIGS.tof` |
| 70 | `/* shunts was two paragraph boxes` | 11185 | 11121 | P | `(function shuntsToTable(){` L11186; `(function fixQ198(){` L11202 |
| 71 | `/* One original annotated concept image per topic.` | 11207 | 11143 | C | `const VISUAL_GUIDES = {` L11209; `const TOPIC_MEDIA = {` L11234 |
| 72 | `BLOCKS.forEach(b=>b.topics.forEach(t=>{ if(VISUAL_GUIDES[t.id]` | 11245 | 11181 | E-T | Top-level statement that inserts `["vis",t.id]` at `floor(body.length/2)` |
| 73 | `/* Longer, two-step clinical vignettes` | 11248 | 11184 | C | `QS.push(` adv1–adv8 (`{id:"adv1",b:"phys"` L11250) |
| 74 | `/* Forty-two additional multi-step board-style cases` | 11263 | 11199 | C+E-T | `const NBME_EXPANSION = [` L11266; `const NB_WHY = {` L11321; converter `NBME_EXPANSION.forEach(x=>{` L11533 (literals `b:"mixed"`, `d:3`, template fallback note) |
| 75 | `/* P4.6 - the two nb* stems the xanthoma figure` | 11541 | 11477 | P | `placeXanthomaEf` L11548; `placeSecondaryHtnEf` L11557; `placeP48Visuals` L11565; `placeP48r2Visuals` L11705 |
| 76 | `{id:"dm_vasc",kind:"multi"` (the preceding line is `DRILLS.push(`) | 11716 | 11652 | C | 8 multi drills; the region ends L11777 |
| 77 | `STEP 1 BLOCK ENGINE  v2` | 11779 | 11715 | E(+L) | `LS_KEY` L11783, `HUB_KEY` L11784, `BOXES` L11787, `DAILY_MIN` L11788 (never used), `DB/DBREF/saveTimer` L11797, `blank()` L11799, `let S = blank();` L11816 |
| 78 | `FLAGGED ITEMS (P3.5)` | 11819 | 11755 | E | `FLAG_KINDS` L11828, `escA`, `flagList`, `flagIx`, `flagRef`, `unflagRef`, `flagCtrl` L11839, `flagTarget` L11859 |
| 79 | `function load(){` | 11876 | 11812 | E | `repairState` L11890, `save` L11930, `pushDb` L11937, `flash` L11942, `flushNow` L11943, pagehide/beforeunload/visibility listeners L11944–11946, 20 s flush interval L11947 |
| 80 | `function capOrNull(` | 11954 | 11890 | E | `mergeProgress` L11970; `(async function syncDb(){` L11997 (runs at parse time) |
| 81 | `/* ---------------------------------------------------------------- helpers */` | 12019 | 11955 | E | `el`; `migrateRapidKeys` L12021; `ALLT` L12033; `findT` L12034; `esc` L12035; `pct`; `clamp`; `stripTags` L12043; `shuffle` L12047; `examCeiling` L12048; `promote` L12058; `isDue` L12066; `overdue` L12067; `todayKey` L12073; `BOLDN`/`fmt` L12075; `RBYID` L12090; `IMGTOPIC` L12091; `HUBCACHE`/`rItem` L12093; `hashId` L12098; `GTERMS`/`glossTerms` L12107; `autoCloze` L12134; `autoGloss` L12143; `tagEverything` L12181 |
| 82 | `/* ---------------------------------------------------------------- diagnosis */` | 12195 | 12131 | E+L | `chanceAdj` L12197; `topicEvidence` L12198 (option-count literals L12227–12233); `diagnose` L12345; `confusions` L12351; `stemFloorMs` L12373; `errorTypes` L12382; `errorTypesHTML` L12432 ("five options" L12467); `SITTING_GAP` L12491; `sittingAnswers` L12497; `FATIGUE_*` L12522–12533; `sessionFatigue` L12534; `fatigueHTML` L12577; `leeches` L12590; `trajectory` L12601; `calibration` L12613 |
| 83 | `/* ---------------------------------------------------------------- progress */` | 12620 | 12556 | E | `stageOf` L12621, `stageQs` L12622, `stageRapid` L12643, `diagVerdict` L12647 (never called), `stageProgress` L12655, `stageDone` L12669, `currentStage` L12672, `blockScore/blockKnown` L12673–12674, `overall` L12678, `covered` L12685, `stats` L12694, `bumpDay` L12703, `streak` L12707, `daysLeft` L12717, `examPassed` L12722, `paceStartKey` L12728, `blockDay` L12732 |
| 84 | `/* ---------------------------------------------------------------- header */` | 12738 | 12674 | E+L | `MODES` L12739; `paintHeader` L12742 (literals L12752, L12756); `bindChrome` L12779; `go` L12796 |
| 85 | `FOCUS CONTINUITY (P1.2)` | 12803 | 12739 | E | `FOCUSABLE_SEL` L12815, `isTabbable` L12816, `captureFocus` L12823, `focusTwin` L12836, `focusHolder` L12858, `restoreFocus` L12867, `announceFeedback` L12894, `render` L12905, `rerenderHere` L12934, `restoreScroll` L12940 |
| 86 | `CROSS-BLOCK REVIEW HUB` | 12946 | 12882 | E | `hubLoad` L12951, `hubSave` L12955, `hubSync` L12957, `hubDue` L12967, `hubOtherBlocks` L12973. The comment at L12948 names Cardio/Renal/Neuro. |
| 87 | `DAILY PLAN — 2 hours a day` | 12980 | 12916 | E+L | `todaysPlan` L12982; `planHTML` L13130 (literals L13148, L13159, L13162–13163, L13171); `CAL_SEL` L13184; `dayKeyLocal` L13185; `calStripHTML` L13186 (L13199); `calDetailHTML` L13206 (L13214) |
| 88 | `   VIEW: PATH` | 13232 | 13168 | E+L | `viewPath` L13234 (literals L13287, L13288, L13295); `nextStepLabel` L13308; `openStage` L13315; `diagSet` L13340; `reservedIds` L13347; `isReserved` L13357; `finalSet` L13358 (40 at L13370) |
| 89 | `   VIEW: LEARN` | 13379 | 13315 | E | `railHTML` L13381; `yieldBanner` L13403; `viewLearn` L13409 (implicit global `AUTOGLOSS_USED` L13430); `cz` L13443; `explicitGloss` L13449; `bodyBlock` L13455; `visualGuideHTML` L13480 |
| 90 | `decides the visual: undefined falls back` | 13488 | 13424 | E comment + C | This comment belongs to `deepReviewHTML`. It is followed by `/* Rapid item -> the one visual` L13493 and `const RAPID_MEDIA = {` L13497 (content inside the engine region, to L13834). |
| 91 | `function rapidMedia(r){` | 13835 | 13768 | E | |
| 92 | `/* P1.8: the pinned figure used to sit collapsed` | 13841 | n/a | C+E-T+E | **Live only.** `const RAPID_POINT = {` L13849 (C; 75 entries at this snapshot); `(function applyRapidPoints(){` L13928 (E-T); `function highlightFigure(root, hl){` L13944 (E) |
| 93 | `function deepReviewHTML(tid, label, pick` | 13990 | 13774 | E(+L) | `opt` argument (live) at L13985–13998; `stepsText` L14002; `stepsHTML` L14007; `tableHTML` L14016; `figHTML` L14020; `palaceHTML` L14031; `credHTML` L14049 (literal L14053); `IMG_RENDER_SEQ` L14056; `imgHTML` L14057; `pretestHTML` L14093; `sexpHTML` L14107; `gridHTML` L14119 |
| 94 | `   VIEW: PRACTICE` | 14137 | 13918 | E | `practiceLabel` L14139, `mix32` L14156, `viewOrder` L14158 |
| 95 | `UNIVERSAL SET BUILDER` | 14173 | 13954 | E | `BLD_DEF` L14177, `BLD_STATUS` L14179, `BLD_YIELD` L14184, `POOLS` L14185, `bld` L14191, `bldMatch` L14194, `bldPool` L14209, `bldHard` L14216, `bldOrdered` L14222, `chipRow` L14230, `bldHTML` L14234, `bldStart` L14272, `wireBld` L14279 |
| 96 | `function viewPractice(){` | 14303 | 14084 | E+L | Literals L14326, L14390 |
| 97 | `   VIEW: DRILLS` | 14400 | 14181 | E+L | `viewDrill` L14402; `multiDrillHTML` L14417 (literal L14430); `sortDrillHTML` L14436; `orderDrillHTML` L14470 |
| 98 | `   VIEW: RAPID` | 14499 | 14280 | C+E+L | `const TAG_LABELS = {` L14505 (C, 30 labels); `rfCatHTML` L14519; `viewRapid` L14523 (literal L14538) |
| 99 | `   VIEW: IMAGES` | 14578 | 14357 | E+L | `viewSpot` L14580 ("ABCD" L14608); `buildSpotOpts` L14620 (`slice(0,3)` L14622) |
| 100 | `   VIEW: WEAK SPOTS` | 14626 | 14405 | E+L | `viewWeak` L14628 (literal L14672) |
| 101 | `   VIEW: GLOSSARY` | 14790 | 14569 | E | `viewGloss` L14792 |
| 102 | `   GLOBAL SEARCH` | 14803 | 14582 | E | `SEARCH_INDEX` L14805; `buildIndex` L14806; `openSearch` L14836; `closeSearch` L14860; `runSearch` L14861; `hi` L14887; `searchGo` L14893 (bug at L14898) |
| 103 | `   TUTOR DOCK` | 14908 | 14687 | E+L | Dock state L14910; `getSample` L14911; `screenContext` L14916; `paintDock` L14977; `askDock` L15027 (literals L15043, L15047) |
| 104 | `   SVG TEXT FITTER` | 15060 | 14839 | E | `fitSvgText` L15063; `fitAllFigures` L15098; `document.fonts.ready` re-fit L15100 |
| 105 | `   WIRING` | 15105 | 14882 | E | `wire` L15107 (export/import/reset handlers at L15244–15304; series literal "step1" L15247, L15255, L15282); `wirePretest` L15310; `wireSexp` L15323 |
| 106 | `/* ---------- lightbox: every figure and photo` | 15327 | 15104 | E | `LB_Z` L15337; `lbVbw/lbFitZ/lbBaseZ` L15338–15345; `lbApplyZoom` L15346; `lbZoomTo` L15358; `lbZoomInit` L15364; `openLightbox` L15394; `closeLightbox` L15410; `lbKeydown` L15416; `lbHighlight` L15419 (live only); `wireZoom` L15423; `wirePins` L15429; `wireGrid` L15462 |
| 107 | `/* Step 1 allows roughly 90 seconds a question.` | 15500 | 15271 | E+L | `startPace` L15503; dwell vars L15516; `startDwell` L15517; `startSet` L15549; `wirePractice` L15570; `finishSet` L15646 (`"p0"` L15655); `startDrill` L15667 |
| 108 | `/* DRILL_WHY -- one clause naming` | 15674 | 15445 | C | `const DRILL_WHY = {` L15682, to L16060 (content inside the engine region) |
| 109 | `function wireDrill(app){` | 16061 | 15832 | E | `startRapid` L16111; `wireRapid` L16130 (highlight hook L16132, live only); `rfToggleWhy` L16181; `rapidKeydown` L16191 with its listener L16209; `startSpot` L16210; `wireSpot` L16216 |
| 110 | `   NORMALISE + BOOT` | 16234 | 16002 | E (comments) | History comments L16236–16256, including the stale "rapid is three-option" claim |
| 111 | `const RAPID_OPTS = {` | 16257 | 16025 | C | `const RAPID_OPT_SWAP = {` L16521; `const RAPID_W = {` L16596, to L19012 |
| 112 | `(function applyRapidFive(){` | 19017 | 18785 | E-T | Comment L19013 |
| 113 | `(function permuteOptions(){` | 19037 | 18805 | E | |
| 114 | `window.__cardioAudit = () => {` | 19059 | 18827 | E+L | Dataset snapshot `document.documentElement.dataset.cardioAudit` L19092 |
| 115 | `CARDIOVASCULAR — REAL IMAGES, set 4: wiring` | 19095 | 18863 | P | `(function placeImages4(){` L19099 |
| 116 | `/* ============ P1.7 - self-explanation checkpoints` | 19152 | 18920 | P | `(function placeWhy(){` L19159 |
| 117 | `/* ============ P4.1 - cmy_geometry into n2` | 19190 | 18958 | P | `placeCmyGeometry` L19196, `placeHeartSounds` L19218, `placeAvBlock` L19240, `placeDigoxin` L19263, `placeShockTable` L19286, `placeXanthomas` L19310, `placeSecondaryHtn` L19335, `placeVesselWall` L19358, `placeArchDeriv` L19380 |
| 118 | `/* ============ P1.6 - topic minutes derived from length` | 19396 | 19164 | E-T | `(function deriveMinutes(){` L19402 |
| 119 | `/* ============ P3.2 - difficulty re-rated` | 19434 | 19202 | C+E-T | `const Q_DIFF = {` L19447; `const Q_DIFF_R2 = {` L19477; `(function applyQDiff(){` L19506 |
| 120 | `load();` | 19512 | 19280 | E (boot) | `tagEverything();` L19513 |
| 121 | `/* ================== P5.1  CONCEPT TAGS` | 19514 | 19282 | C+E-T | `const CONCEPT_TAGS = [` L19523; `const Q_TAGS = {` L19530; `const R_TAGS = {` L19662; `(function applyConceptTags(){` L19792 |
| 122 | `/* ===================== CONCEPT THREADS (P5.2)` | 19805 | 19573 | C+E | `const CONCEPT_HOME = {` L19824; `const DRILL_TAGS = {` L19882; `(function verifyConceptHomes(){` L19892 |
| 123 | `function conceptThreads(){` | 19914 | 19682 | E | `threadsHTML` L19996 |
| 124 | `bindChrome();` | 20060 | 19828 | E (boot) | `render();` L20061 |
| 125 | `/* P5.2 self-test hook.` | 20062 | 19830 | E+L | P5.3 hook L20082; P5.4 hook L20122; tag literal L20070 |
| 126 | `/* ======================= SELF-TEST  (?selftest=1)` | 20188 | 19956 | E+L | `if(/[?&]selftest=1/…` L20196; literals L20207–20209, L20215, L20221, L20263 |
| 127 | `setInterval(paintHeader, 30000);` | 20287 | 20055 | E | `</script>` L20288; `</body></html>` L20290 |

### 1b. Cardio and exam literals inside engine code (ENGINE+LITERALS)

Every literal found in engine regions, with its live line and what it should become.

| L | Literal | Should become |
|---|---|---|
| 1 | `<title>The Cardio Path</title>` | `META.title` (write `document.title` at boot, or template it) |
| 12–13 | comment "Palette is block-specific … Step 1 series" | comment only |
| 20–21, 40–41, 54–55 | `--a1/--a2` hexes (#B23A32 / #38538A; dark #E88A80 / #8FADE0); "arterial"/"venous" comments | Per-block palette. Inject from `META.a1/a2` at boot (those two fields exist at L1141 but are never read), or template the three CSS blocks. |
| 624 | `<b>The Cardio Path</b>` | `META.title` |
| 1145 | `EXAM_DEFAULT = "2026-10-10"` | `META.examDefault`, or a series constant. Keep `EXAM_KEY "step1.examDate"`: it is deliberately shared. |
| 11783 / 11784 / 11880 | `"step1." + META.key + ".v2"`, `"step1.hub.v1"`, `"step1."+META.key+".v1"` | Keep. `step1` is the series namespace and the hub is shared by design. |
| 11855 | comment `r.i (cardio.xxxxx)` | comment only |
| 12185 | `META.key + "." + hashId(…)` | Already META-driven. Keep, but `META.key` must be unique per block (§5). |
| 12227 | `chanceAdj(qRight/qSeen, 5)` | Use the item's `q.o.length` (5 for vignettes) |
| 12231 | `chanceAdj(preOk/preN, 4)` | pretest option count |
| 12232 | `chanceAdj(sxOk/sxN, 4)` | sexp option count |
| 12233 | `chanceAdj(spOk/spN, 4)` | `1 + wrong.length` (becomes 5 after PLAN-2 P3.1) |
| 12467 | "The five options have to be read" | computed option count, or "the options" |
| 12553 | comment "Rapid is three options" | stale comment; rapid is now 5 |
| 12710 | `d.toISOString().slice(0,10)` in `streak()` | not a literal but a bug: use `dayKeyLocal(d)` (§5) |
| 12752 | `"Step 1 in <b>"` | `META.examName` |
| 12756 | `"Click to change your Step 1 date"` | `META.examName` |
| 12948 | comment "Cardio … Renal and Neuro" | comment only |
| 13148 | `" to Step 1"` | `META.examName` |
| 13159 | pace choices `[2,3,5,7,10,14]` | generic; keep as a shared constant (the self-test repeats it at L20221) |
| 13162–13163 | "Your Step 1 date…", "Step 1 date" | `META.examName` |
| 13171 | "Your Step 1 date has passed…" | `META.examName` |
| 13199 | `" — Step 1"` (calendar exam-day title) | `META.examName` |
| 13214 | `"<b>Step 1.</b> Spaced review stops…"` | `META.examName` |
| 13287 | "two days before Step 1" | `META.examName` |
| 13288 | "Cardio comes back while you are doing Renal" | Generic wording: "Earlier blocks come back while you work on this one" |
| 13295 | "strongest predictor of a Step 1 miss" | `META.examName` |
| 13370 | `Math.min(40, QS.length)` in `finalSet` | `META.finalN` or a property on the final PATH stage (content L7281 also says "Forty questions") |
| 13430 | `AUTOGLOSS_USED = …` (implicit global) | declare `let AUTOGLOSS_USED = {}` (§5) |
| 14053 | `"Wikimedia Commons"` (credit source text) | `im.srcname` or "Source" |
| 14326 | "NBME-style clinical vignettes" | generic, or `META` |
| 14390 | title "Step 1 gives you about 90 seconds a question" | `META.examName` + `META.secsPerQ` (the pace thresholds 70/90 s in `startPace` L15503+ also assume 90) |
| 14430 | `alt="ECG to classify"` (multi-drill image) | `IMGS[it[2]].n` or "Image to classify" |
| 14538 | "One line, three options, fast retrieval." | "five options", or computed |
| 14608 | `"ABCD"[i]` (spot letters) | `"ABCDE"` (PLAN-2 P3.1) |
| 14622 | `(im.wrong\|\|[]).slice(0,3)` | all of `wrong` |
| 14672 | "6 to 24 s" | computed from `errorTypes().floorLo/floorHi` |
| 14898 | `S.rf = {set:[+id]…}` | `[id]` (bug, §5) |
| 15043 | "USMLE Step 1 study tool" | `META.examName` / series name |
| 15047 | "specific to Step 1" | `META.examName` |
| 15247 / 15255 / 15282 | `app:"step1"`, filename `"step1-"`, import check `d.app !== "step1"` | keep (series namespace) |
| 15500 | comment "Step 1 allows roughly 90 seconds" | comment |
| 15655 | `S.stage["p0"]` in `finishSet` | `PATH.find(p=>p.kind==="diag").id` |
| 16236–16256 | comments "three-option recall" | stale comments |
| 19059, 19092 | `window.__cardioAudit`, `dataset.cardioAudit` | `__blockAudit`. The gate reads the self-test key `auditListsEmpty` (check_plan2.py L500ff), not this name. |
| 19069 | `shortRapidOptions … r.o.length<3` | `<5` (PLAN-2) |
| 19088 | `drillItemsWithoutWhy` skips `kind==="order"` | include order steps (PLAN-2 P3.2) |
| 20070 | self-test tag `"infarct-timeline"` | the tag carried by the most QS, found at run time |
| 20207 | `completeStage` diag `n:21,total:21` | `diagSet().length` / `ALLT().length` |
| 20208 | final `n:40,total:40` | `finalSet().length` |
| 20209 | unit `n:7,total:7` | `stageQs(p).length` |
| 20215 | `S.cur="f1"` | `ALLT()[0].id` |
| 20263 | spot opts `slice(0,3)` | all of `wrong` |

Content-side literals the engine displays (these are content fields, not engine code): the `PATH` titles and descriptions ("Stage 1 — Foundations" …, "Forty questions" L7281), `BLOCKS[].n` and `.wk` (`wk` is never read by code), and the `cred` strings.

### 1c. Content structures (what the new block must supply)

| Structure | Where (L) | Schema | Keyed by | Consumed by |
|---|---|---|---|---|
| `META` | 1140 | `{key, name, short, a1, a2}` | none | `LS_KEY`, `tagEverything`, hub, export/import, `viewPath`, `screenContext`, `askDock` |
| `GLOSS` via `G(k,t,d,alt[])` | 1166/1171 | `{k, t, d, alt[]}` | key | `fmt`, `glossTerms`, `autoGloss`, `viewGloss`, search |
| `PALACE` | 1232 | `{t, story, keys:[[emoji, k, v]]}` | key | `palaceHTML`, search; body row `["palace",key]` |
| `IMGS` | 1286 (4 sets) | `{n, url, dx, wrong[3], ww{label:note}, look, cred, by, lic, licurl, srcurl, mod, ann:[{k:"r"(x,y,w,h) \| "e"(x,y,rx,ry,rot) \| "c"(x,y,r) \| "sh", px?, py?, l}]}`. At S0: 44 images, 149 shapes (54 c, 53 e, 42 r), all with 3 `wrong` and `ww`. | key | `imgHTML`, spot, search, `highlightFigure`, `flagTarget`, multi-drill image, self-test |
| `FIGS` | 1423 | `{cap, svg}` where the svg is `class="dia"` with a viewBox, theme tokens, and `<tspan class="b">` never `<b>`. 31 keys; murmurs, lipid and tof are defined twice and **the last definition wins**. | key | `figHTML`, lightbox, search, `rapidMedia`, `deepReviewHTML`, `verifyConceptHomes` |
| `BLOCKS` | 4581 (+3 pushes, + congen) | `[{id, n, wk, topics:[{id, t, yld:"hi"\|"mid"\|"lo", exam:"hi"\|"mid"\|"lo", mins, sub, pretest:[{q, o[4], a, why}], body:[row], grid:{q, items:[[text, 1\|0\|true\|false]]}}]}]`. Row kinds: `["h",s]`, `["p",s]`, `["call","key"\|"trap"\|"mnem"\|"step",label,html]`, `["why",q,html]`, `["t",head[],rows[][]]`, `["f",figKey]`, `["img",imgKey]`, `["palace",key]`, `["sexp",{id,q,o,a,why}]`, `["steps",[title,[[k,v]…]]]` or `["steps",title,rows]`, `["vis",tid]` (inserted at load). Text markup: `**bold**`, `*em*`, `{{key\|Label}}`, `[[cloze]]`, inline HTML. | topic id | everything |
| `QS` (+QS2–QS5, adv, NBME) | 6372… | `{id, b, c, d:1\|2\|3, s, l, o[5], a, e, w{index:note}, ef?, ei?, et?}`; `tags` and the permutation are added at load. 204 items per PLAN-2 §6. | id | practice, stage checks, final, weak spots, search, tutor |
| `RAPID` | 6864 | `{b, c, q, o[3], a, x?}`. At load it gains `o[5]`, `w{optText:why}`, `i`, `ix`, `tags`, `pt`. 240 items. | normalised question text → id | rapid, diag, hub, weak spots |
| `DRILLS` (+DRILLS2, multi) | 7139 | sort: `{id, b, c, kind:"sort", t, a, bb, key, items:[[text,"a"\|"b"]]}`; order: `{id, b, c, kind:"order", t, q, key, items:[step…]}` in correct order; multi: `{id, kind:"multi", c, t, key, cols:[{id,l}], items:[[text, colId, imgKey?]]}`. 26 drills; dr8/dr9/dr10 are order drills. | id | drills, plan, weak spots, search |
| `PATH` | 7240 | `[{id, kind:"diag", mins, t, d}, {id, kind:"unit", mins, topics[], t, d}…, {id, kind:"final", mins, t, d}]` | id | path, plan, pacing |
| `RAPID_X` | 7287 | `{questionText: html}` | normalised question text | `applyRapidX` |
| `QDEPTH` | 7834 | `{qid:{w{idx:note}, ef?, ei?, et?}}` | qid | `applyQDepth` (first QS batch only) |
| `REWRITE` / `TOPUP` / `CRED` | 5684 / 9124 / 6069 | `topicId → body[]` / `topicId → rows[]` / `imgKey → {a,l,lu,u}` | n/a | patch-only mechanisms; do not carry |
| `QDEPTH2` | 9177 | `{qid:[[optionText, note]…]}` | qid, then option text | `applyQDepth2` |
| `SEXP` | 9839 | `{topicId:{id, q, o[4], a, why}}` | topic id | `attachSexp` |
| `VISUAL_GUIDES` | 11209 | `{topicId:[title, [k,v], [k,v], [k,v]]}` | topic id | `visualGuideHTML`, `deepReviewHTML`, vis insertion |
| `TOPIC_MEDIA` | 11234 | `{topicId:{fig?, img?}}` | topic id | `visualGuideHTML`, `deepReviewHTML` default media |
| `NBME_EXPANSION` + `NB_WHY` | 11266 / 11321 | `[id, topicId, stem, lead, correctText, [4 decoys], explanation]` / `{id:{optionText:note}}` | id, then option text | converter at L11533 |
| `RAPID_MEDIA` | 13497 | `{questionText:"fig:key"\|"img:key"}` | question text (the self-test uses the raw `r.q`) | `rapidMedia`, self-test |
| `RAPID_POINT` (live) | 13849 | `{questionText:{hl:[1–3 strings in the figure text or annotation labels], say}}` | normalised question text | `applyRapidPoints`, then `r.pt` |
| `TAG_LABELS` | 14505 | `{tag: "1–6 words"}`, one per `CONCEPT_TAGS` value | tag | `rfCatHTML` |
| `DRILL_WHY` | 15682 | `{drillId:{itemText: why}}` | drill id, then item text | `wireDrill`, audit |
| `RAPID_OPTS` / `RAPID_OPT_SWAP` / `RAPID_W` | 16257 / 16521 / 16596 | `{q:[D4,D5]}` / `{q:{old:new}}` / `{q:{optionText:why}}` | normalised question text | `applyRapidFive` |
| `Q_DIFF`, `Q_DIFF_R2` | 19447 / 19477 | `{qid:1\|2\|3}` (R2 wins) | qid | `applyQDiff` |
| `CONCEPT_TAGS` / `Q_TAGS` / `R_TAGS` | 19523 / 19530 / 19662 | closed vocabulary (30) / `{qid:[1–3 tags]}` / `{r.ix:[tags]}` (**index-keyed**) | n/a | `applyConceptTags` |
| `CONCEPT_HOME` / `DRILL_TAGS` | 19824 / 19882 | `{tag:{l, t:topicId, f?:figKey, h:headingText, also?:{t,h}}}` / `{drillId:[tags]}` | tag / drill id | `verifyConceptHomes`, `conceptThreads`, `threadsHTML` |

Content counts per PLAN-2 §6, the P6 click-through and the ledger (not re-measured): 21 topics in 12 blocks, 204 questions, 240 rapid items, 26 drills, 44 images, 31 figures, 59 glossary terms, 7 palaces.

### 1d. CARDIO-PATCH IIFEs: what each does, and its lesson (lesson codes refer to §1e)

| IIFE | L (S0) | What it does | Lessons |
|---|---|---|---|
| `enrich` | 5654 (5594) | Splices the aaclasses figure and a paragraph after d1's antiarrhythmic palace; palace drugsuffix + paragraph + drugtree figure after a d1 heading; palace bugpairs + bugtree figure into d2. Uses local `find`/`insertAfter` helpers that fall back to push. | G1 |
| `applyRewrite` / `2` / `3` / `4` | 5809 / 8090 / 8688 / 8832 | Replace `t.body` wholesale with `REWRITE[t.id]` (19 topics by the end) | G1 |
| `placeImages` | 5931 (5871) | Inserts ecg_af, ecg_flutter, ecg_wpw, ecg_torsades into r1; ecg_block3 into p2; ecg_stemi into i1; endocard_veg into n2; valve_as into v1 | G1, G8 |
| `placeImages3` | 6042 (5982) | ecg_vt and ecg_vf into r1; janeway into n2; mi_neutro into i2; tof_spec into f3; lvh_gross into h1; re-adds gca to c2 (a rewrite had dropped it) | G1, G8 |
| `applyCredits` | 6138 (6078) | `CRED` → `im.by/lic/licurl/srcurl/mod`, plus a cred string "… · Wikimedia Commons (resized)". Only reaches IMGS that exist at that point. | G8 |
| `applyCreditsLate` | 8532 (8472) | The same for the 8 images declared later; never overwrites an existing `cred` | G8, G16 |
| `explainTheAnswer` | 7776 (7716) | Overrides `r.x` (and `RAPID_X`) for 22 rapid items, keyed by question text | G6 |
| `dropDuplicates` | 8102 (8042) | Removes q3 and q4 (duplicates of q59/q60) | G7 |
| `topUps` | 8987 (8927) | Splices the starling figure into `REWRITE.p3` and jvp into `REWRITE.n1`; pushes call/why rows to p3, m1, a2; then re-applies every REWRITE | G1, G10 |
| `splitVasculitis` | 9020 (8960) | Cuts c2 at "small-vessel group", renames c2 and sets `mins=7`. Creates topic c3 inline (sub, pretest, a grid with boolean flags, body) and splices it after c2 in block `vasc`. Pushes c3 into the PATH stage that holds c2. Re-tags QS (s+l+e) and RAPID (q+x) from c2 to c3 by the `SMALL` regex at L9089. | G2, G3 |
| `trimLong` | 9095 (9035) | Drops a v1 setup paragraph by regex; removes i1's territory heading/paragraph/why and its ecg_stemi image; pushes a pointer callout | G1, G12 |
| `applyTopups` / `applyTopups2` | 9145 / 9162 | Append `TOPUP` rows; the second pass appends `TOPUP[t].slice(1)` for rows that were pushed after pass 1 | G1, G10 |
| `fixFigurePlacement` | 9369 (9309) | Removes shunts from f2 and inserts fetalcirc after "steps" (push fallback); removes the duplicate pvloop from p3 | G1, G9 |
| `restoreAntithrombotics` | 9384 (9324) | Re-appends to d1 the antithrombotic section (fig coag, tables, calls, why) that `REWRITE.d1` had dropped | G1 |
| `addHaemodynamics` | 9420 (9360) | Appends Starling forces, autoregulation, Poiseuille, neurogenic-shock trap and Fick why to p3 | G1, G10 |
| `addEcgPatterns` | 9446 (9386) | Appends an electrolyte ECG table and a Brugada callout to p2 | G1, G10 |
| `addTumoursAndCmExtras` | 9462 (9402) | Appends a cardiac tumours table and cardiomyopathy extras to n2 | G1, G10 |
| `addCongenitalAssociations` | 9482 (9422) | Appends a syndrome→lesion table, look-alike steps and an HLHS trap to f3 | G1, G10 |
| `addVascularLesions` | 9510 (9450) | Appends a vascular tumours table and a cryoglobulinaemia callout to c3 (depends on c3 existing) | G1, G2 |
| `addSmallGaps` | 9531 (9471) | Appends a RILE/Austin Flint callout to v1, an apolipoprotein table to a2, an ARNI callout to h1 | G1, G10 |
| `fixQuestions` | 9550 (9490) | Re-files q101 to c:i2/b:ihd; rewrites q114's keyed option, e and a w note; removes a giveaway clue from q5's stem; adds a rhythm fact to q7's stem | G2, G7, G18 |
| `fixShockTable` | 9579 (9519) | Rewrites one p3 table cell by regex | G20 |
| `fixChemoreceptors` | 9591 (9531) | Rewrites one p3 table cell by regex | G20 |
| `useOrphanedAssets` | 9606 (9546) | Re-inserts palace drugsuffix into d1, and mi_neutro/mi_gross into i2 when missing | G1, G12 |
| `trimOverweighted` | 9625 (9565) | Keeps only the first "diabetes protects against AAA" row across all bodies | G12 |
| `moreQuestionFixes` | 9640 (9580) | q26: option, w and e. q36: whole item (stem, lead, 5 options, a, e, w, d=3). | G7 |
| `rebalanceMinutes` | 9677 (9617) | Hand-sets 7 topic minutes and recomputes PATH unit minutes. Overridden later by `deriveMinutes`, so it is dead. | G13 |
| `addGuyton` | 9695 (9635) | Inserts the guyton figure after starling in p3 | G1 |
| `addAxisAndPressors` | 9704 (9644) | Axis section + axis figure into p2; vasoactive table + callout into p3 | G1 |
| `repairDrills` | 9733 (9673) | Replaces dr4's items; swaps one dr11 item and rewrites dr11's key | G14 |
| `fixDeadDistractors` | 9950 (9890) | Replaces 4 hedge rapid distractors by text | G6 |
| `treesToTables` | 11082 (11018) | Replaces `["f","drugtree"]` in d1, `["f","bugtree"]` in d2 and `["f","vasculitis"]` in c2 with tables. The figures stay in FIGS and are still referenced by TOPIC_MEDIA, RAPID_MEDIA, CONCEPT_HOME and q.ef. | G9 |
| `shuntsToTable` | 11186 (11122) | Replaces `["f","shunts"]` in f3 with the 1-to-5 table and a callout | G9 |
| `fixQ198` | 11202 (11138) | Deletes `q198.ef` (it pointed at a tree that became a table) | G15 |
| `placeXanthomaEf` / `placeSecondaryHtnEf` / `placeP48Visuals` / `placeP48r2Visuals` | 11548 / 11557 / 11565 / 11705 | Set `q.ef`/`q.ei` for listed ids when absent. They exist because nb* items are pushed after `applyQDepth` has already run. | G15, G16 |
| `placeImages4` | 19099 (18867) | Places the 14 set-4 images into f3, a2, n2, c2, c3, c1, h1, d1 by anchor (push fallback) | G1, G8 |
| `placeWhy` | 19159 (18927) | Adds a why block to i1 and c2 | G10 |
| `placeCmyGeometry` … `placeArchDeriv` (9 IIFEs) | 19196–19380 | Place the 9 P4 figures into n2, p1, r1, d1, p3, a2, c1, f1, f2 by anchor; `console.warn` when the anchor misses | G1, G9 |

Not patches, although they live in content regions: `applyRapidX`, `applyQDepth`, `applyQDepth2`, `attachSexp`, the vis insertion, the NBME converter, `applyRapidFive`, `permuteOptions`, `deriveMinutes`, `applyQDiff`, `applyConceptTags`, `verifyConceptHomes` (all E-T or E).

### 1e. Generic lessons the new content must satisfy up front

- **G1. Author final topic bodies in the `BLOCKS` literal.**
  - No REWRITE, splice or insertAfter chains.
  - A body-replacing rewrite silently erases earlier splices. `restoreAntithrombotics` and `useOrphanedAssets` exist only to repair such losses.
  - Every `after`/`insertAfter` helper falls back to `body.push()` when its anchor misses, stranding content at the end of the topic (see the comment inside `placeImages4` about the c1 image).
- **G2. Every item carries its final topic id.**
  - Set `c` on every Q, rapid item and drill. The multi drills have no `b`, so `tagEverything`'s fallback `fb(d.b)` returns `undefined`.
  - `b` must be a real `BLOCKS` id or be omitted. The adv items use `"isch"`, `"arr"`, `"peri"`, `"heme"`; the NBME items use `"mixed"`.
  - Never route items to topics by regex. `SMALL` once matched "behaves" via "Beh".
- **G3. Define every topic in the literal** with `id, t, yld, exam, sub, mins(ignored), pretest, body, grid`. c3 once had no `sub`, and "undefined" rendered. Each topic belongs to exactly one unit stage in `PATH`.
- **G4. Per-option notes are keyed by option TEXT** (NB_WHY, QDEPTH2, RAPID_W, IMGS.ww, DRILL_WHY).
  - The only index-keyed map, `q.w`, must match the authored option order; `permuteOptions` remaps it (L19046).
  - The correct answer may be authored at any index; the permutation removes positional cues.
- **G5. Never change a rapid question's text after release.**
  - `r.i = META.key+"."+hash(text)` (L12185), and six side maps are keyed by that text.
  - Append new rapid items at the END of `RAPID`. `R_TAGS` is keyed by array index (L19800), and the rapid option shuffle seed includes the index (L19049).
- **G6. Rapid items:**
  - 5 options, with no hedge or throwaway distractors.
  - A why for every wrong option (`RAPID_W`).
  - An `r.x` that derives the answer: it must not be under 14 words while merely containing the answer (`rapidRestatementCandidates`).
  - The keyed option no longer than 1.4× the longest distractor (`longestOption`).
- **G7. Questions:**
  - Exactly 5 options, unique ids, no duplicate questions or options.
  - The explanation mentions and derives the keyed answer (`qExplanationMissesAnswer`).
  - The keyed option no longer than 1.35× the longest distractor.
  - The stem never hands over the answer; wrong-option notes use only facts that are in the stem.
  - No vocabulary lookups.
  - `d` on the 1/2/3 rubric with a real spread (`Q_DIFF`), and 1–3 concept tags.
- **G8. Images carry their credit fields inline** (`by`, `lic`, `licurl`, `srcurl`, `mod`, `cred`); never a `CRED` side table (keys drifted: gca_histo vs gca, tof vs tof_spec).
  - `wrong[]` plus `ww{}` for every wrong label; 4 per PLAN-2.
  - At least one annotation.
  - Placed in exactly one topic body row, so `IMGTOPIC` attributes it (L12181+).
- **G9. Figures:**
  - One definition per key.
  - A figure contains the answer for every item pinned to it, and never pushes toward a distractor.
  - `<tspan class="b">`, never `<b>`, inside `<text>` (CSS comment L248–251).
  - Theme tokens only.
  - Captions of 20–110 words, with any overflow in `teach` (PLAN-2).
  - "Text in boxes" belongs in a table.
- **G10. Every topic has:**
  - at least 1 `why` row, 1 sexp checkpoint and 1 visual;
  - a `VISUAL_GUIDES` and a `TOPIC_MEDIA` entry;
  - at least one rapid item (for `diagSet`), with a coverage floor of about 10 per topic;
  - at least 7 questions (QS5 banner);
  - full blueprint coverage (the panel-fix IIFEs back-filled cardio gaps).
- **G11. Glossary:**
  - Every term must be reachable from the prose: give `alt` the spellings the bodies actually use.
  - Words of 3 letters or fewer are skipped unless they are abbreviations, which match case-sensitively (L12107+).
  - Always link as `{{key|Label}}`; a bare `{{key}}` prints the key.
- **G12. No repeated facts across topics and no orphaned assets.** Every PALACE, IMGS and FIGS entry must be referenced.
- **G13. Never hand-set minutes.** `deriveMinutes` recomputes 7–18 min per topic at 110 words/min, and stage minutes as the topic sum plus 6 per topic (L19402).
- **G14. Drills:**
  - Sort drills sort discriminators, not shared features.
  - Every drill item, including order steps, has a `DRILL_WHY`.
  - Multi-drill column ids exist (audit `badMultiDrills`).
- **G15. Author `q.ef`/`q.ei` on the question,** pointing at a visual that answers the stem.
- **G16. Assign any side map BEFORE its apply IIFE runs.** RAPID_X after `applyRapidX` never lands; QDEPTH entries for items pushed later never land.
- **G17. Bold marks a term.** More than 8 words, or more than 3 bolds in one block, is demoted to soft emphasis by `fmt` (L12075).
- **G18. An option's text never carries its own explanation** (P2.11 option length).
- **G19. PATH:**
  - exactly one `kind:"diag"` stage, currently id `"p0"`: see risk R1;
  - unit stages list their topics;
  - the `kind:"final"` stage is the LAST element (`finishSet` uses `PATH[PATH.length-1]`, L15646+).
- **G20. Fact-check tables and notes before shipping.** Do not patch cells by regex at load.

### 1f. Required order of load-time transforms (applies to any block)

Top-level statements run in file order. Live lines.

1. Content registries and literals (META … `DRILLS.push`) – L1140–L11777.
2. `applyRapidX` L7757 must follow **every** `RAPID_X` assignment. Anything assigned later is ignored (comment at L7541). `splitVasculitis` (cardio) read `r.x`, so it had to follow.
3. The side-map mergers `applyQDepth` L7979 and `applyQDepth2` L9347 only touch QS items present at that moment. `applyQDepth2` must run **before** `permuteOptions`, because it converts option-text keys to pre-permutation indices.
4. `attachSexp` L9916 inserts a sexp checkpoint before the topic's first `why`. It must follow the final bodies; in cardio it ran before later patches.
5. The vis insertion L11245 depends on `body.length`. It should run after bodies are final.
6. NBME converter L11533: its `a:0` is permuted later.
7. Engine definitions L11779+. Top-level side effects:
   - listeners L11944–11947;
   - `syncDb()` L11997, which runs async and later calls `repairState`/`render`;
   - `fonts.ready` re-fit L15100;
   - the `rapidKeydown` listener L16209;
   - [live] `applyRapidPoints` L13928, keyed by text, so its position does not matter provided `RAPID` is final.
8. **`applyRapidFive` L19017 must be IMMEDIATELY BEFORE `permuteOptions` L19037.**
   - Swaps never touch index `r.a`; additions are appended; `r.w` is built from the final option texts.
   - Nothing may push rapid options after it.
9. **`permuteOptions` L19037**:
   - QS seeded by `q.id` (remaps `q.w`);
   - RAPID seeded by `"r"+index+q.slice(0,12)`;
   - pretests seeded by `t.id+"pt"+i`;
   - grids seeded by `t.id+"grid"`.
   Every index-keyed map must be applied before it; text-keyed maps are safe on either side.
10. `__cardioAudit` definition L19059 and dataset snapshot L19092. This snapshot is taken **before** the place IIFEs, `deriveMinutes` and `tagEverything`: stale, and `badRapidTopics` would list `r.i=undefined`. Move it after step 14 in the new build.
11. Placement IIFEs L19099–L19394 (cardio only).
12. `deriveMinutes` L19402 must be the **last body mutation** (it recounts words) and must come before render.
13. `applyQDiff` L19506 is the last word on `q.d`.
14. `load()` L19512, **then** `tagEverything()` L19513. This order is a trap; see risk R16. `tagEverything` assigns `r.i`/`r.ix`, builds `RBYID` and `IMGTOPIC`, and fills missing `c`. It must follow the last change to `RAPID`, `QS`, `DRILLS` or bodies. Recommended new order: `tagEverything(); load();`.
15. `applyConceptTags` L19792 needs `r.ix`, so it must follow `tagEverything`.
16. `verifyConceptHomes` L19892 needs final bodies (headings).
17. `bindChrome()` L20060, then `render()` L20061.
18. `__selftestExtra` hooks L20062–L20187 must be registered **before** the self-test block.
19. Self-test L20196 runs only with `?selftest=1`. It uses `fresh()` state and restores `S` afterwards.
20. `setInterval(paintHeader, 30000)` L20287.

### 1g. Extraction cut list (for the script)

**KEEP as engine:**

- rows 2, 3, 5, 7–10, 13 (GLOSS/G), the registry declarations in 15, 16 and 18;
- rows 43, 46, 59 (apply only), 62 (apply only), 72, 74 (converter only; optional);
- rows 77–81, 83, 85, 86, 89, 91, 92 (`applyRapidPoints` and `highlightFigure`), 93–95, 101, 102, 104–106, 109, 112, 113, 118, 119 (apply only), 120, 121 (apply only), 122 (verify only), 123, 124, 127.

**KEEP with literal substitution (§1b):** rows 1, 4, 6, 12, 82, 84, 87, 88, 96–100, 103, 107, 114, 125, 126.

**REPLACE with Repro-Endo content (C):**

- rows 11, 14–26, 28, 30, 32, 34, 36–42, 45, 47, 50, 51;
- the data parts of 53–55, 58, 59, 61, 62, 64–67, 69, 71, 73, 74, 76;
- 90 (`RAPID_MEDIA`), 92 (`RAPID_POINT` data), 98 (`TAG_LABELS`), 108 (`DRILL_WHY`), 111, and the data parts of 119, 121, 122.

**DROP (P):** rows 27, 29, 31, 33, 35, 44, 48, 49, 52, the apply IIFEs of 53–55 (including `topUps`), 56, 57, the apply IIFEs of 58, 60 (all 17), `repairDrills` in 61, 63, 68, 70, 75, 115, 116, 117.

**Engine–content interface: globals the engine reads directly.**

- Required: `META`, `GLOSS` (via `G`), `PALACE`, `IMGS`, `FIGS`, `BLOCKS`, `QS`, `RAPID`, `DRILLS`, `PATH`, `RAPID_MEDIA`, `VISUAL_GUIDES`, `TOPIC_MEDIA`, `DRILL_WHY`, `TAG_LABELS`, `CONCEPT_TAGS`, `CONCEPT_HOME`, `DRILL_TAGS`.
- Required if the matching transform is kept: `RAPID_X`, `RAPID_OPTS`, `RAPID_OPT_SWAP`, `RAPID_W`, `RAPID_POINT`, `SEXP`, `QDEPTH`, `QDEPTH2`, `NBME_EXPANSION`, `NB_WHY`, `Q_DIFF`, `Q_DIFF_R2`, `Q_TAGS`, `R_TAGS`.
- All of these must be declared before `permuteOptions` and before boot.

---

## 2. FEATURE INVENTORY

Live lines. "S:" lists state fields read or written; "Content:" lists the structures consumed; "Cardio deps:" lists cardio-specific dependencies.

- **F1. Boot and render loop.**
  - Code: boot `load` L19512 → `tagEverything` L19513 → `bindChrome` L20060 → `render` L20061. `render` (L12905) runs `repairState`, `paintHeader`, the view dispatch, `wire`, `paintDock`, `announceFeedback` and `restoreFocus`, with try/catch recovery to the path view. Also `rerenderHere` L12934, `restoreScroll` L12940, `go` L12796.
  - S: `mode`, `scroll`; `ps/rf/dr/sp` are cleared on a render failure.
  - Cardio deps: none; order trap R16.
- **F2. Views/modes.**
  - Code: `MODES` L12739 (path, learn, practice, drill, rapid, spot, weak, gloss) and the view map in `render` L12905+. The nav is painted in `paintHeader` L12742 and its clicks are delegated once in `bindChrome` L12779.
  - Cardio deps: none.
- **F3. Path view and stage sequencer.**
  - Code: `viewPath` L13234; `nextStepLabel` L13308; `openStage` L13315. For a diag stage it builds a rapid set with `diagSet`; for a final stage, a practice `finalSet`; for a unit stage it opens the first unread topic, then the stage check (practice: own questions plus about 35% from finished stages), then the stage rapid.
  - Code (continued): `stageQs` L12622 (≥2 non-reserved own questions, topped up to 5 from earlier stages); `stageRapid` L12643; `stageProgress` L12655 (0.28 read + 0.52 quiz + 0.20 rapid); `stageDone` L12669 (final ≥ 0.80); `currentStage` L12672; `reservedIds` L13347 (every 4th Q per topic by string-sorted id is held back for the final); `finalSet` L13358; `finishSet` L15646 (≥90% answered, and quiz acc ≥0.75 to pass); stage-rapid completion in `wireRapid`'s next handler.
  - S: `stage`, `stg` (written only, never read), `topics[].read`, `ps`, `rf`.
  - Content: `PATH`, `QS`, `RAPID`.
  - Cardio deps: `S.stage["p0"]` L15655; 40 at L13370; the final must be the last PATH element.
- **F4. Pacing engine and daily plan.**
  - Code: `todaysPlan` L12982. Rows due / linked / stage / verify / weak / dueq / regrid / img / drill.
  - Budget clamp 30–300 min; `reviewCap` 35% and review budget 50% of the day, spent in `REVIEW_RANK` order.
  - Stages are never skipped; everything left is scheduled on the last pace day.
  - Code (continued): `planHTML` L13130; `blockDay` L12732; `paceStartKey` L12728; `bumpDay` L12703; `streak` L12707; the `#pacedays` handler in `wire` resets `paceSetAt`; `deriveMinutes` L19402 feeds `mins`.
  - S: `paceDays`, `paceSetAt`, `days`, `linked`, `qs`, `topics`, `spot`, `drills`.
  - Content: `PATH.mins`, `t.mins`, `IMGS`, `DRILLS`.
  - Cardio deps: "Step 1" literals L13148–13171; streak bug R19.
- **F5. Calendar strip.**
  - Code: `calStripHTML` L13186 (3 days back, 21–120 days span, exam star); `calDetailHTML` L13206; `CAL_SEL` L13184; `dayKeyLocal` L13185; `[data-calday]` in `wire`.
  - S: `days`.
  - Cardio deps: "Step 1" L13199, L13214.
- **F6. Exam date, countdown and passed-date guard.**
  - Code: `EXAM_KEY`/`EXAM_DEFAULT` L1145 with parse/read/set L1146–1163; `examISO`; `daysLeft` L12717; `examPassed` L12722; `examCeiling` L12048 (2 days before the exam; Infinity once passed); the countdown in `paintHeader` L12742–12758 (clicking it focuses `#examdate`); the date input and passed banner in `planHTML` L13162–13171; the `#examdate` handler in `wire`.
  - S: none; the date lives under its own shared key.
  - Cardio deps: "Step 1" literals; `EXAM_DEFAULT`.
- **F7. Header ring.**
  - Code: `paintHeader` sets `#ringfill` dasharray, `#pctnum` and `#ringlbl` from `overall()` L12678 and `covered()` L12685; the weak badge count comes from `diagnose()`.
  - Cardio deps: none.
- **F8. Yield filter.**
  - Code: the `S.hiOnly` toggle in `bindChrome` L12779; `yieldBanner` L13403; `railHTML` L13381 filter; `bldPool` L14209; `startSet` L15549; `startRapid` L16111.
  - Content: topic `exam` (filter and badge) and `yld` (rail dot colour).
  - Cardio deps: none; the content needs a real hi/mid/lo spread.
- **F9. Learn view and read detection.**
  - Code: `viewLearn` L13409; `bodyBlock` L13455 (row kinds, §1c); `stepsHTML` L14007; `tableHTML` L14016; `startDwell` L15517. A topic counts as read after max(45 s, 35% × `t.mins`) of visible dwell **and** ≥70% scrolled, or after the recall grid is scored.
  - S: `cur`, `topics[tid].dwell/scrolled/read`.
  - Content: `BLOCKS`.
  - Cardio deps: none; implicit global R17.
- **F10. Glossary popups and view.**
  - Code: `G` L1171; `glossTerms` L12107 (longest first; case rules); `autoGloss` L12143 (first mention per topic, across p/call/why/table/steps/heading); `explicitGloss` L13449; `fmt` `{{k|label}}` L12075; the `.gterm` popup in `wire` (host-climbing logic, toggles per term); `viewGloss` L14792; the `#gsearch` filter in `wire`.
  - Content: `GLOSS`.
  - Cardio deps: none.
- **F11. Cloze.**
  - Code: `fmt` `[[x]]` → `.cz`; `autoCloze` L12134 (blanks `<strong>` and glossary terms); `cz` L13443; `.cz` and `#clozeToggle` handlers in `wire`.
  - S: `cloze`.
  - Cardio deps: none.
- **F12. Recall grid.**
  - Code: `gridHTML` L14119; `wireGrid` L15462. Score = (hits − 0.5 × false positives) / true items; `promote(rec, score ≥ 0.75)`; scoring marks the topic read; "Test me again" (`gridRetake`).
  - S: `topics[tid].grid/gridAt/gridRetake/box/due/n/last`.
  - Content: `topic.grid` (shuffled by `permuteOptions`).
  - Cardio deps: none.
- **F13. Pretests.**
  - Code: `pretestHTML` L14093 (shown until done); `wirePretest` L15310 (disables all options, shows `p.why`).
  - S: `pre[tid]={ok:[], done}`.
  - Content: `topic.pretest` (4 options, permuted).
  - Cardio deps: chanceAdj 4, L12231.
- **F14. Self-explanation (sexp).**
  - Code: `sexpHTML` L14107; `wireSexp` L15323; `attachSexp` L9916.
  - S: `sexp[id]=pickIndex`.
  - Content: `SEXP` or inline `["sexp",{…}]` rows.
  - Cardio deps: chanceAdj 4, L12232.
- **F15. Why blocks.**
  - Code: `bodyBlock` "why" → `<details class="why">`.
  - Content: `["why",q,html]`.
- **F16. Memory palace.**
  - Code: `palaceHTML` L14031 (a spatial board of cards, with the story in `<details>`); search entries.
  - Content: `PALACE`.
- **F17. Visual guides.**
  - Code: `visualGuideHTML` L13480 ("Visual model" section: `TOPIC_MEDIA` media plus 3 cards); the vis insertion L11245; `deepReviewHTML` L13990 reuses the guide cards and default media.
  - Content: `VISUAL_GUIDES`, `TOPIC_MEDIA`.
- **F18. Figures, lightbox, zoom and pan.**
  - Code: `figHTML` L14020 (Enlarge button, `data-zoomfig`); `fitSvgText` L15063 (shrinks, then compresses, labels to fit their rect); `fitAllFigures` L15098; `fonts.ready` re-fit L15100; `openLightbox` L15394, `closeLightbox` L15410, `lbKeydown` L15416 (Esc); `lbZoomInit` L15364 (−/+/Fit or Actual size; opens at max(1, fit)); `lbZoomTo` L15358; `lbApplyZoom` L15346; `lbFitZ/lbBaseZ/lbVbw` L15338–15345; `wireZoom` L15423; [live] `lbHighlight` L15419.
  - Content: `FIGS`.
  - Cardio deps: none.
- **F19. Annotated images: pins, rail, hide-markup.**
  - Code: `imgHTML` L14057, which handles:
    - shape kinds `r`/`sh` rect, `e` ellipse, anything else a circle;
    - leader lines when `px/py` sit ≥3% away from the shape;
    - the side rail `.annrail`;
    - the `<details>` legend;
    - the caption with `look` and `credHTML` L14049.
  - Code (continued): `wirePins` L15429 (hover/focus opens; click pins; writes the rail; `.hot`/`.focusing`); the `[data-raw]` Hide markup toggle in `wire` L15194.
  - Content: `IMGS`.
  - Cardio deps: "Wikimedia Commons" L14053.
- **F20. Image spot.**
  - Code: `viewSpot` L14580 (clean image first; wrong-pick note `ww` L14598; markup shown after answering); `buildSpotOpts` L14620; `startSpot` L16210; `wireSpot` L16216; the `POOLS.spot` topic comes from `IMGTOPIC`.
  - S: `sp={set,i,opts,pick}`, `spot[k]={ok,n,ts}`.
  - Content: `IMGS.dx/wrong/ww`.
  - Cardio deps: "ABCD" L14608 and `slice(0,3)` L14622 (3-wrong assumption).
- **F21. Drills (sort / order / multi).**
  - Code: `viewDrill` L14402 (index built through the set builder); `sortDrillHTML` L14436; `orderDrillHTML` L14470; `multiDrillHTML` L14417 (optional image per item); `startDrill` L15667; `wireDrill` L16061 (feedback message + `DRILL_WHY`; record on finish).
  - S: `dr` = `{id,order,i,missed,hist,last}` for sort/multi, or `{id,pool,placed,checked,perfect}` for order; `drills[id]={missed,done,ts,n,hist}`.
  - Content: `DRILLS`, `DRILL_WHY`.
  - Cardio deps: alt "ECG to classify" L14430.
- **F22. Rapid review.**
  - Code: `viewRapid` L14523 (5 options; the answered option toggles `.optwhy`; chip; say-line; open figure); `rfCatHTML` L14519; `startRapid` L16111 (linked / due / weak / all).
  - The due set comes from `hubDue()` across **all blocks**, max 40; other sets are max 40.
  - Code (continued): `wireRapid` L16130 (records `hist`, `lastPick`, `picks`, `ms`; `promote`; a correct but hesitant answer (>12 s) drops one box; foreign hub items are written back to the hub; a correct answer clears the item from `linked`); `rfToggleWhy` L16181; `rapidKeydown` L16191 (keys 1–5 and Enter); `rapidMedia` L13835; `deepReviewHTML` L13990; [live] `applyRapidPoints` L13928 and `highlightFigure` L13944.
  - S: `rf={set,i,t0,src,pick,open}`, `rapid[id]`, `linked`.
  - Content: `RAPID` (+ `w`, `tags`, `pt`), `RAPID_MEDIA`, `TAG_LABELS`, `RAPID_POINT`.
  - Cardio deps: "three options" L14538.
- **F23. Practice.**
  - Code: `viewPractice` L14303 (confidence gate, hypercorrection and lucky banners, an explanation with per-option notes listed in letter order, `q.et` table, `q.ef/q.ei` visual, deep review, linked-queue notice, flag, End set, pace clock); `practiceLabel` L14139; `viewOrder` L14158 with `mix32` L14156 (per-serve display shuffle); `startSet` L15549; `wirePractice` L15570.
  - `wirePractice` records `ok`, `conf`, `pick`, `ms`, `fast` (below `stemFloorMs`), `slow` (> max(90 s, 1.2 s/word)), `hist` (last 10), `falseConf`, `streak`, `verified`, `verifyDue` (1 d, then 3 d), `box`, `due`. It also fills the linked queue by keyword overlap with same-topic rapid items (max 6).
  - Code (continued): `finishSet` L15646; `startPace` L15503 (70/90 s colours).
  - S: `ps={set,i,src,t0,own?,pick,shown,conf,ans}`, `qs`, `linked`, `stage`.
  - Content: `QS`.
  - Cardio deps: literals L14326, L14390; chanceAdj 5.
- **F24. Universal set builder.**
  - Code: L14173–14301; filters are topics, yield and status; count options 1/5/10/20/40/All; order options shuffled / in order / hardest first.
  - S: `bld[m]={t,y,s,n,o,open}`.
  - Content: `BLOCKS`, `QS`, `RAPID`, `IMGS`, `DRILLS`.
  - Cardio deps: none.
- **F25. Weak Spots.**
  - Code: `viewWeak` L14628 (next-30-minutes block, stat grid, calibration callout, evidence table, proven/suspected lists, threads, error types, specific confusions, drill mis-sorts, stuck items, flagged items, untested).
  - `topicEvidence` L12198 builds 7 weighted channels (questions, rapid, drills, grid, pretest, sexp, spot) plus transfer, calibration and verification, then applies Bayesian shrinkage, freshness decay (12-day) and a modality ceiling. It returns signals, certainty (proven ≥ 2 / suspected 1) and a priority weighted by exam yield and nearness to the exam.
  - Code (continued): `diagnose` L12345; `confusions` L12351 (Q pairs ≥ 2 plus drills with ≥ 3 misses); `errorTypes` L12382 and `errorTypesHTML` L12432; `leeches` L12590; `trajectory` L12601; `calibration` L12613; `conceptThreads` L19914 and `threadsHTML` L19996; the flags list.
  - S: all record maps, plus `flags`.
  - Content: `QS.tags`, `RAPID.tags`, `DRILL_TAGS`, `CONCEPT_HOME`, `topic.exam`.
  - Cardio deps: "6 to 24 s" L14672.
- **F26. Session fatigue line.**
  - Code: `sittingAnswers` L12497 (practice + rapid, a 3 h gap splits sittings); `sessionFatigue` L12534 (30 answers minimum, 15-answer windows, on at a 25-point drop, off below 10, with mix and difficulty guards); `fatigueHTML` L12577, shown on the practice and rapid screens.
  - S: `qs`, `rapid`.
  - Cardio deps: none.
- **F27. Flags.**
  - Code: `FLAG_KINDS` L11828, `flagCtrl` L11839, `flagTarget` L11859. `wire` handles `button[data-flag]` (toggles in place), `input[data-flagnote]` (140 characters) and `button[data-unflag]`. `repairState` reshapes `flags`.
  - S: `flags=[{kind,id,note,ts}]`.
  - Cardio deps: none. A flag on a rapid item uses `r.i`, which is namespaced by `META.key`.
- **F28. Cross-block hub.**
  - Code: `hubLoad` L12951, `hubSave` L12955, `hubSync` L12957 (on every `save`, writes this block's rapid items with `box>0`), `hubDue` L12967, `hubOtherBlocks` L12973, `rItem`/`HUBCACHE` L12093. Consumers: the plan's due row, `startRapid("due")`, and `wireRapid`'s foreign branch.
  - Storage: `HUB_KEY`.
  - Content: `RAPID`.
  - Cardio deps: none (risks R5–R7).
- **F29. Export / restore / start over.**
  - Code: `wire` `#expbtn` L15244+. The payload is `{app:"step1", block:META.key, saved, state:S, hub}`, saved through `claude.use("downloads")` with a blob fallback. `#impfile` refuses a different block. `#rstbtn` needs a second click within 6 s and deletes this block's hub items.
  - S: all.
  - Cardio deps: none (uses `META.key`).
- **F30. AI tutor dock.**
  - Code: `getSample` L14911 (`claude.use("sample")`); `screenContext` L14916 (the answer is withheld until the student commits); `paintDock` L14977 (quick prompts; Socratic toggle); `askDock` L15027 (streams; 200-word prose rules); the `?` key in `bindChrome`.
  - S: `chat`, `socratic`.
  - Cardio deps: "USMLE Step 1" L15043, L15047.
- **F31. Focus management and aria-live.**
  - Code: `captureFocus` L12823, `focusTwin` L12836, `focusHolder` L12858, `restoreFocus` L12867, `isTabbable` L12816, `announceFeedback` L12894 (copies every `[data-verdict]` into `#live` L643).
  - Cardio deps: none.
- **F32. Persistence and DB sync.**
  - Code: `save` L11930 (no-op under `__SELFTEST`); `flushNow` L11943 on pagehide, beforeunload, hidden and every 20 s; `flash` L11942; `pushDb` L11937 (1.2 s debounce); `capOrNull` L11954; `mergeProgress` L11970 (newer side wins per record; session fields taken from the newer side); `syncDb` L11997, which reads `claude.use("db")` and `claude.use("user")` and writes the doc `data/users/<uid>/progress`.
  - Cardio deps: none (see R8).
- **F33. Spaced repetition.**
  - Code: `BOXES` L11787 [0, 15 min, 1 d, 3 d, 7 d, 14 d]; `promote` L12058 (±15% jitter, capped by `examCeiling`); `isDue` L12066; `overdue` L12067. Used by rapid (`wireRapid`), questions (`wirePractice`: box/due/verifyDue), grids (`wireGrid`) and the hub.
  - Cardio deps: none.
- **F34. Mastery and diagnosis.**
  - Code: `chanceAdj` L12197, `topicEvidence` L12198, `diagnose` L12345, `overall` L12678 (proven), `covered` L12685 (touched), `stats` L12694, `blockScore/blockKnown` L12673–12674.
  - Cardio deps: option-count literals L12227–12233.
- **F35. Global search.**
  - Code: `buildIndex` L14806 indexes topics, questions (s + o + e), rapid (q + o + x), drills, images (n + look + dx + annotations), diagrams (cap + svg text), memory scenes and glossary. Also `openSearch` L14836 (`/`, Ctrl/Cmd+K, header button), `runSearch` L14861, `hi` L14887, `searchGo` L14893.
  - Cardio deps: none (bug R14).
- **F36. Structural audit.**
  - Code: `window.__cardioAudit` L19059: counts, duplicate Q ids, bad topics, short options, duplicate options, unannotated images, topics without a visual, broken img/fig refs, bad multi drills, DRILL_WHY orphans, items without a why.
  - Cardio deps: name; `<3` rapid threshold; order drills excluded.
- **F37. Behavioural self-test (`?selftest=1`).**
  - Code: L20196–20286. Sections:
    - audit, auditListsEmpty, viewFailures, biasChi, paceDays, finished;
    - drillWhy, imagesWithoutCredit, qExplanationMissesAnswer, longestOption, rapidRestatementCandidates, spotWrongNotes;
    - glossaryNeverLinked, topicWpm, tagging, topicsWithoutWhy, rapidPerTopic, visuals;
    - a11y, a11yFeedback, examPast, reviewShareAtPace14, lateResetBudgetRatio, maps;
    - extra = `__selftestExtra` (conceptThreads L20062, errorTypes L20082, fatigue L20122).
  - Cardio deps: `S.cur="f1"`, n:21/40/7, tag "infarct-timeline", spot `slice(0,3)`, the raw `RAPID_MEDIA[r.q]` lookup.
- **F38. Linked review queue.**
  - Code: filled in `wirePractice` on a miss; drained in `wireRapid` on a correct answer; `startRapid("linked")`; the plan's linked row.
  - S: `linked`.
- **F39. Verification of "lucky" answers.**
  - Code: `verifyDue`/`verified` in `wirePractice`; `startSet("verify")`; the plan's verify row; the `topicEvidence` verified channel.
- **F40. Diagnostic sweep.**
  - Code: `diagSet` L13340 (one random rapid item per topic); the diag branch of `openStage` L13315; `wireRapid` marks `rec.diag/diagOk` and the stage done.
  - `diagVerdict` L12647 exists but is never called.
- **F41. SVG text fitter.** `fitSvgText` L15063.
- **F42. Render-failure recovery.** Inside `render` L12905 (never persists under `__SELFTEST`).

---

## 3. PLAN-2 §8 contracts: status in the live file (md5 fc7e3be3…)

| Contract | Status | Evidence (live lines) |
|---|---|---|
| **Rapid options (data):** `RAPID_OPTS`, `RAPID_W` (and `RAPID_OPT_SWAP`) applied by `applyRapidFive` immediately before `permuteOptions`; `r.w` keyed by option text | **PRESENT** | `RAPID_OPTS` L16257; `RAPID_OPT_SWAP` L16521; `RAPID_W` L16596; `applyRapidFive` L19017 (swap L19025, append L19028, `r.w` L19030); `permuteOptions` L19037. That `r.o.length===5` holds at runtime is taken from the ledger (P1.6 "optionCounts 5:240"); I did not run it. |
| **Rapid options (DOM):** 5 `.rfopt` lettered A–E; wrong options keep `data-why` and are not disabled; the keyed option is `aria-disabled`; clicking toggles `.optwhy` under the option | **PRESENT** | `viewRapid` L14557–14562 (`"ABCDE"[i]`, `data-why`, `aria-disabled` L14559, `.optwhy` L14562); `rfToggleWhy` L16181; the answered-click route in `wireRapid` L16130+ |
| **Rapid feedback:** `RAPID_POINT` → `applyRapidPoints` → `r.pt` | **PARTIAL** | Code: L13849, L13928, `r.pt` L13933. Data: 75 entries (ix 3…114) in the fc7e3be3 snapshot and 151 at the final check (e7996378); P1.8 is still filling it (211 pinned items is the target). |
| Category chip `.rfcat` from `r.tags[0]` via `TAG_LABELS` | **PRESENT** | `TAG_LABELS` L14505; `rfCatHTML` L14519; used at L14565 |
| `.rfsay` above the figure; `details.deepreview` rendered with `open` | **PRESENT** for pinned items | CSS L948; `say` built at L13997; `open` at L13998; `viewRapid` passes `{open:true, say, hl}` L14569 (only when `rapidMedia(r)` exists) |
| Figure `<text>` gets `.hl` and `rect.hlbox`; image annotations get `.hot` | **PRESENT** (code) / partial (data) | `highlightFigure` L13944; called from `wireRapid` L16132 and `lbHighlight` L15419; CSS L952–953 |
| **Rapid state:** `S.rapid[id].lastPick` / `picks`; keys 1–5 answer; Enter goes to Next | **PRESENT** | L16151, L16152; `rapidKeydown` L16191 (1–5 at L16197; Enter branch); listener L16209 |
| **Practice options:** wrong `.qopt` keep `data-why`, not disabled; click toggles `.optwhy`; the old list goes under `<details>` | **ABSENT** | Buttons are disabled after answering (L14344); the list "Why each other option is wrong" is rendered inline (L14378); no `data-why` or `.optwhy` in practice |
| **Practice explanation:** `q.et` table (`tblwrap et`, keyed row `etkey`) | **PARTIAL** (renderer stub only) | `${q.et ? tableHTML(q.et[0], q.et[1]) : ""}` L14377, with no `et` wrapper class and no `etkey`. Data: only `applyQDepth` copies `d.et` (L7986), and no QDEPTH entry has `et`, so 0 questions have a table. |
| `q.bl` / `.qbl` | **ABSENT** | No `q.bl` or `.qbl` anywhere |
| `Q_POINT` → `q.pt`, `.qsay`, `details.deepreview[open]` in practice | **ABSENT** (helper ready) | No `Q_POINT`/`q.pt`/`.qsay`. `viewPractice` calls `deepReviewHTML(q.c, label)` with no `opt` (L14381). CSS `.ptsay` exists (L948) but nothing produces it. `highlightFigure` is shareable. |
| **Practice set summary:** `S.ps.done`, `.setsummary`, `[data-sumq]`, `.sumexp` | **ABSENT** | `finishSet` clears `S.ps` (L15665); no summary markup |
| **Spot:** 4 `wrong` with `ww` for all 4; `buildSpotOpts` uses all 4; 5 `.qopt` A–E; wrong options clickable → `.optwhy` | **ABSENT** | All 44 images have 3 `wrong` (e.g. L1292); `slice(0,3)` L14622; `"ABCD"` L14608; `disabled` L14607; only the picked wrong option gets a note (`wwNote` L14598) |
| **Drills:** `DRILL_WHY` for every item including order steps; end screens with `[data-dwhy]` → `.optwhy` | **PARTIAL** | `DRILL_WHY` L15682 covers sort/multi items (used at L16074, L16089). The 3 order drills have no entries, and the audit skips them (L19088). End screens are plain lists (sort L14443, multi L14417+, order L14470): no `data-dwhy`. |
| **Pretest:** `p.w` for every wrong option; `.ptwhy` shows `p.w[picked]` then `p.why`; wrong `.ptopt` not disabled | **ABSENT** | `wirePretest` disables all options (L15314) and shows only `p.why` (L15316); `.ptwhy` host L14101 |
| **Overlays:** kinds `r e c poly arrow bracket spot inset none`; nothing `.fill` above 0.12; `data-showall` toggle | **ABSENT** (only r/e/c) | `imgHTML` handles `r`/`sh` (L14062) and `e` (L14066); anything else becomes a circle using `a.r`. No poly, arrow, bracket, spot, inset or none; no `data-showall`. `.oshape.fill{opacity:.24}` L659 is used only by kind `sh`, and no current image uses `sh`. Hide markup (`.imgbox.raw`) exists (L655, L15194). |
| Image quality (≥800 px or KEEP-SMALL rows) | **N/A in code** | Asset-level; not checked. PLAN-2 §6 lists 7 images under 800 px. |
| **Picked option shows its why first, with `aria-expanded`** | **PARTIAL** | Rapid: yes (L14558, `aria-expanded` L14559). Practice and spot: no. |
| **Figures:** `FIGS[k].teach` under `<details>` | **ABSENT** | `figHTML` L14020–14025 renders only `svg` and `cap`; no `.teach` anywhere |
| **Search:** `buildIndex` includes `w`, `et` cells, `bl`, `say` | **ABSENT** | QS body = `s + o + e` (L14817); rapid = `q + o + x` (L14820); images without `ww` (L14825) |
| **Weak Spots:** `confusions()` rows carry `kind:"rapid"` | **ABSENT** | `confusions` covers QS (L12353) and drills (L12364) only. The raw material exists (`lastPick`/`picks`, L16151–16152). |
| Keyboard answering outside rapid (practice a–e/1–5, spot 1–5, Enter on all three; P5.3) | **ABSENT** | Only `rapidKeydown` (L16191) |

---

## 4. STATE SCHEMA

**`blank()` (L11799) → `S`.** 28 top-level fields; the P6 export check found all 28.

- `v`: `2`.
- `ts`: last save time (ms). The newer side wins in `mergeProgress`.
- `topics{tid}`: `{read, dwell(s), scrolled(0–1), grid(0–1), gridAt, gridRetake, box, due, n, last}`.
  - Grid scoring calls `promote`, which sets `box/due/n/last`.
  - `read` requires dwell plus scroll, or a scored grid. `repairState` clears `read` when there is no `dwell` and no `grid` (L11890+).
- `qs{qid}`: `{ok, conf:"sure"|"think"|"guess", pick(original index after the load permutation), ms, n, fast, slow, ts, hist:[{ok,conf,pick,ms,ts,d}]×10, falseConf, streak, diag?, verified, verifyDue, box, due}`.
- `rapid{r.i}`: `{miss, hist:[{ok,pick,ms,ts}]×10, lastPick(text), picks[text]×10, ms, diag?, diagOk?, box, due, n, last, slow?}`. The key is `META.key+"."+hash(question)`.
- `drills{did}`: `{missed:[itemIndex], done, ts, n, hist:[{ix,pick,ok,ts}]×60}`.
- `spot{imgKey}`: `{ok, n, ts}`.
- `pre{tid}`: `{ok:[bool per pretest item], done}`.
- `sexp{sxId}`: chosen option index.
- `stage{pid}`:
  - diag: `{done, n, total, acc?}`;
  - unit: `{quiz:{done, acc, n, total, at}, rapid:true}`;
  - final: `{quiz:{done, acc, n, total}}`.
  - `repairState` clears `done` when `n` is not positive.
- `days{YYYY-MM-DD local}`: `{acts, mins, done:[planRowIds]}`.
- `linked`: array of rapid ids.
- `chat`: `[{r:"me"|"ai", t}]`.
- `socratic`: bool.
- `mode`: path | learn | practice | drill | rapid | spot | weak | gloss.
- `cur`: topic id.
- `stg`: stage id (written by `openStage`, never read).
- `cloze`, `hiOnly`: bools.
- `ps` (practice session): `{set:[qid], i, src:"diag"|"final"|"weak"|"verify"|"due"|"unseen"|"all"|"custom"|"search"|"stage:<pid>", t0, own?, pick, shown, conf, ans:{qid:bool}}`.
- `rf` (rapid session): `{set:[r.i or hub id], i, t0, src:"linked"|"due"|"weak"|"all"|"custom"|"search"|"diag"|"stage:<pid>", pick, open:{i:bool}}`.
- `dr` (drill session): sort/multi `{id, order:[ix], i, missed, hist, last:{ok,msg}}`; order `{id, pool, placed, checked, perfect}`.
- `sp` (spot session): `{set:[imgKey], i, opts:[labels], pick}`.
- `scroll{mode}`: `scrollY`.
- `bld{practice|rapid|spot|drill}`: `{t:[tid], y:[hi|mid|lo], s:[status], n, o:"shuffle"|"order"|"hard", open}`.
- `paceDays`: 1–21, default 5.
- `paceSetAt`: ms. `repairState` anchors it when missing.
- `flags`: `[{kind:"q"|"rapid"|"img"|"drill", id, note≤140, ts}]`.

`repairState` (L11890) also nulls `ps/rf/sp/dr` when they point at items that no longer exist. It keeps unknown fields on records, e.g. `S.rapid[id].lastPick`, per PLAN-2 §5.

**Storage keys** (localStorage, plus the optional db):

| Key | Value | Shared across blocks? |
|---|---|---|
| `step1.<META.key>.v2` (`LS_KEY` L11783) | `JSON(S)` | No, one per block. `load` also reads `step1.<key>.v1` as a fallback (L11880). |
| `step1.hub.v1` (`HUB_KEY` L11784) | `{v:1, items:{r.i:{b:META.key, bn:META.name, c, ct:topicTitle, q, o, a, x, box, due, miss, n}}}` | **Yes, by design.** Every block writes its taught rapid items; the due queue reads all blocks. |
| `step1.examDate` (`EXAM_KEY` L1145) | `"YYYY-MM-DD"` | **Yes, by design.** It survives a progress reset. |
| db doc `data/users/<uid>/progress` (L12006) | `JSON(S)` | Per artifact db. The path is not namespaced by `META.key` (R8). |
| Export file `step1-<key>-<date>.json` | `{app:"step1", block, saved, state:S, hub}` | Import requires `app=="step1"` and `block==META.key`. |

Module globals (not in `S`): `EXAM`, `DB`, `DBREF`, `saveTimer`, `RBYID`, `IMGTOPIC`, `HUBCACHE`, `GTERMS`, `BOLDN`, `CAL_SEL`, `RESERVED`, `SEARCH_INDEX`, `SAMPLE`, `dockOpen`, `dockBusy`, `LB_Z`, `paceTimer`, the dwell vars, `lastNavHTML`, `IMG_RENDER_SEQ`, and the implicit `AUTOGLOSS_USED`.

---

## 5. RISKS FOR EXTRACTION (things that break silently when content is swapped)

- **R1. `finishSet` hard-codes the diag stage id: `S.stage["p0"]` (L15655).** Practice-sourced diag results would land on a phantom stage if the new PATH names its diag differently. The rapid diag path correctly uses `PATH.find(kind==="diag")` (in `wireRapid`).
- **R2. The final stage must be the LAST `PATH` element** (`finishSet` uses `PATH[PATH.length-1]`, L15646+), and `finalSet` draws 40 questions (L13370).
- **R3. Self-test literals.** It will throw or mis-seed on new content:
  - `S.cur="f1"` (L20215);
  - `completeStage` n:21/40/7 (L20207–20209);
  - `__selftestExtra` seeds tag `"infarct-timeline"` (L20070). If no question carries that tag, `byTopic[tops[0]]` is undefined and the `extra` section fails, which sets `R.ok=false`.
  - Spot opts `slice(0,3)` (L20263).
  - `visuals` looks up the raw `RAPID_MEDIA[r.q]` rather than the normalised text (L20246).
  - The gate (`check_plan2.py`) keys on `auditListsEmpty` and `viewFailures`.
- **R4. Rapid identity is `META.key + "." + hash(question text)` (L12185).**
  - Changing `META.key` or any question's text orphans saved progress, hub entries, flags and every text-keyed map (`RAPID_X`, `RAPID_MEDIA`, `RAPID_OPTS`, `RAPID_OPT_SWAP`, `RAPID_W`, `RAPID_POINT`).
  - Hash collisions get an `x` suffix, so identity also depends on array order.
- **R5. `META.key` must be unique per block.** "Start this block over" deletes every hub item whose `b===META.key` (L15301), and import accepts any file whose `block` equals `META.key`.
- **R6. Topic ids must be globally unique across blocks.** Hub items from other blocks keep their own `c` (e.g. cardio's `p1`, `r1`, `c1` …).
  - If Repro-Endo reuses such ids, a cardio item in the shared due queue resolves `findT(r.c)` to the wrong Repro-Endo topic: wrong "Refresher" panel, wrong topic title, and `deepReviewHTML` shows the wrong lesson.
  - Use prefixed ids (e.g. `re_…`).
- **R7. Cross-block sharing only works on one origin.**
  - `HUB_KEY` and `EXAM_KEY` sharing, and therefore "Cardio comes back while you are doing Renal", requires both blocks on one origin (same local server/file, or one artifact).
  - UNSURE how the blocks will be deployed. Per the Artifact runtime, each published artifact has its own origin, so two separately published blocks would **not** share a hub or an exam date.
- **R8. The db path `data/users/<uid>/progress` is not namespaced by `META.key` (L12006).** That is harmless while each block is its own artifact (per-artifact db). If two blocks ever share one db, `mergeProgress` would merge two blocks' `S`.
- **R9. `R_TAGS` is keyed by array index (`r.ix`, L19800), and the rapid shuffle seed uses the index (L19049).** Any insertion or reorder in `RAPID` silently re-tags items and reshuffles options. Key tags by question text in the new block.
- **R10. Load-order traps inside the engine:**
  - `applyRapidFive` must stay immediately before `permuteOptions`.
  - `applyConceptTags` must follow `tagEverything`.
  - `deriveMinutes` must be the last body mutation.
  - The `__cardioAudit` dataset (L19092) is captured before `tagEverything` and the placements, so it is stale.
  - See §1f.
- **R11. Silent no-ops.**
  - Side maps assigned after their apply IIFE (`RAPID_X`, `QDEPTH`; lesson G16).
  - `after()`/`insertAfter()` push fallbacks (G1).
  - `CONCEPT_HOME`/`TAG_LABELS` gaps: `rfCatHTML` returns "" (L14519), `conceptThreads` skips tags without a home (L19914+), and `verifyConceptHomes` only warns in the console.
  - `Q_DIFF` gaps only warn (L19506+).
  - `applyRapidFive` and `applyRapidPoints` orphan keys only warn.
- **R12. Option-count assumptions.**
  - `chanceAdj` assumes 5 (questions), 4 (pretest), 4 (sexp), 4 (spot) (L12227–12233).
  - Spot UI assumes 3 wrong (L14608, L14622).
  - Audit thresholds: `shortQuestionOptions<5`, `shortRapidOptions<3` (L19067–19069).
  - If Repro-Endo pretests or sexp have a different count, calibration of mastery drifts.
- **R13. `imgHTML` knows only kinds `r`/`sh`/`e`, and treats anything else as a circle using `a.r`.** A new overlay kind without `r` renders `width:NaN%` (L14057–14067). Needs PLAN-2 P4.1 first, or new content must stick to r/e/c.
- **R14. Engine bug: search result → rapid item uses `set:[+id]` (L14898).** Rapid ids are strings, so this yields `NaN`; `repairState` then drops `S.rf`, and the user lands on the rapid chooser. Fix: `[id]`.
- **R15. Engine bug: `streak()` builds UTC keys with `toISOString()` (L12710)** while `S.days` uses local keys (`dayKeyLocal` L13185). Streaks miscount around local midnight for non-UTC users.
- **R16. Engine ordering bug: `load()` (L19512) runs before `tagEverything()` (L19513).**
  - `migrateRapidKeys()` (L12021) sees `r.i===undefined`, so legacy index-keyed records are dropped rather than migrated.
  - `repairState()` inside `load` validates `S.rf` against an empty `RBYID`. A reload mid-rapid-set on an item never answered (not in the hub) discards the set.
  - Swap the order in the extracted engine.
- **R17. `AUTOGLOSS_USED` is an implicit global (L13430).** It throws if the engine is ever wrapped in `"use strict"` or an ES module.
- **R18. `IMGTOPIC` comes only from `["img",key]` body rows (L12181+).** Images used only via `TOPIC_MEDIA`, `RAPID_MEDIA`, `q.ei` or multi drills get no topic: they are excluded from spot topic filters and from the spot channel in `topicEvidence` (L12224). All 44 cardio images are placed statically, but new content must place every image.
- **R19. `q.b`/`d.b` are only fallbacks** (`tagEverything` `fb()`, L12189–12192). A drill or item without `c` and without a valid `b` gets `c=undefined` and vanishes from every topic view (multi drills have no `b`).
- **R20. Legacy `c2`/`c3` split.** Cardio's vasculitis split lives in a patch (`SMALL` regex L9089, block id `vasc`, PATH stage lookup); none of it may be carried. Carried patches would do one of three things:
  - no-op, because a `find(id)` misses;
  - strand content at the end of a topic via the push fallback;
  - touch same-named ids in the new block.
- **R21. FIGS redefinitions** (murmurs, lipid, tof are defined twice). A naive "first definition" extractor gets the wrong SVG. Irrelevant for new content, but relevant for any content diffing tool.
- **R22. `treesToTables`/`shuntsToTable` removed figures from bodies,** but those figure keys stay referenced by `TOPIC_MEDIA` (L11234: `n2`/`d2`→bugtree, `d1`→drugtree, `c2`/`c3`→vasculitis), `CONCEPT_HOME.f` and `q.ef`. Fine in cardio; a lesson for new content: remove references when a figure is retired.
- **R23. Visual guide placement is arbitrary:** `["vis",id]` goes in at `floor(body.length/2)` (L11245). Place `["vis",id]` explicitly in the new bodies, or accept a mid-topic insertion.
- **R24. Literal UI strings** ("The Cardio Path", "Step 1", "USMLE", "NBME", "Wikimedia Commons", "ECG to classify", "Cardio … Renal", "three options", "6 to 24 s") appear on screen in the new block unless substituted (§1b).
- **R25. The CSS palette is per block but hard-coded** (L20–21, 40–41, 54–55). `META.a1/a2` are dead, so a new META palette alone changes nothing.
- **R26. Undefined CSS tokens** `--shadow-soft` (L917) and `--surf-2` (L974). Palace cards and the annotation rail silently get no background or shadow; `--surf-2` is presumably meant to be `--surface-2`.
- **R27. Dead code and dead CSS** to decide on:
  - `diagVerdict` L12647, `DAILY_MIN` L11788, `S.stg` (written at L13317 only), `rebalanceMinutes` (overridden);
  - CSS `.vmap/.vzone`, `.labwrap…`, `.tutor…`, `svg.ovl/.mk/.pin`.
- **R28. `viewOrder` and `permuteOptions` seeds depend on `q.id` strings** (L14158, L19046). The display-order bias test (`biasChi`) assumes 5-option questions (the self-test `d=[0,0,0,0,0]`).
- **R29. `reservedIds` string-sorts question ids (L13347).** Which questions are held back for the final depends on id spelling ("q10" < "q2"). Zero-pad new ids if a stable reserve set matters.
- **R30. Foreign hub items render in reduced form in `viewRapid`.** `rItem` returns the raw hub record, with no `i`, `w`, `tags` or `pt`, so there is no flag control, no whys, no chip and no highlight. That is acceptable, but it must stay null-safe if the rapid renderer grows more fields (PLAN-2 P1.8 code already guards with `r.pt&&…`).
- **R31. P1.8 is mid-flight.** Live line numbers after about L1419 will shift as parts B and C add `RAPID_POINT` entries and FIGS edits; later PLAN-2 phases (P2–P5) will add `Q_POINT`, `q.et`/`q.bl`, summary, spot 5-option, overlay kinds and `teach` to the engine. Re-run the anchor lookup (`grep -n -F`) on the frozen or live file before cutting, and re-diff against S0 to pick up any new engine code.
