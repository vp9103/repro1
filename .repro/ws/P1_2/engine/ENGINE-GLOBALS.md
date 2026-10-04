# ENGINE-GLOBALS: what the engine reads, and where build.py provides it

The engine (`engine/engine.js` + `engine/selftest.js`) was cut from the cardio page by `engine/extract_engine.py`
(task P2.1). It still reads the cardio globals. `build.py` is the adapter: it writes one `<script>` that starts with
the generated content globals and then appends `engine.js` and `selftest.js`. So every global below is a top-level
`const` declared by build.py **before** the engine runs. The engine must never declare them again (the extractor
refuses to write an `engine.js` that does).

Consumers were found by scanning `engine.js` / `selftest.js` for each name (comments ignored), per top-level function.
Line numbers are omitted on purpose: they move with every edit.

## 1. The shell placeholders (filled by build.py from `content/meta.json`)

| Placeholder in `shell.html` | Where | build.py fills it with |
|---|---|---|
| `@@TITLE@@` | `<title>` and the header brand `<b>` | `META.title` (default "The Repro-Endo Path") |
| `@@A1@@`, `@@A2@@` | `--a1`, `--a2` in `:root` (light) | `META.palette.a1`, `.a2` |
| `@@A1_DARK@@`, `@@A2_DARK@@` | `--a1`, `--a2` in both dark blocks | `META.palette.a1Dark`, `.a2Dark` |
| `@@SCRIPT@@` | inside the single `<script>` | generated content globals + `engine.js` + `selftest.js` |

The derived accents `--a1-2`, `--a1-soft`, `--a2-2`, `--a2-soft` are computed in `shell.html` from `--a1`/`--a2` with
`color-mix()` (light and both dark blocks), so the META palette recolours every accent (P2.2, ENGINE-MAP R25).

## 2. Content globals the engine reads

| Global | Read by (engine functions) | build.py provides it from |
|---|---|---|
| `META` | `LS_KEY`, `load`, `tagEverything` (rapid ids), `hubSync`, `hubOtherBlocks`, `viewPath`, `screenContext`, `askDock`, `wire` (export, import, reset); since P2.2 also the exam-date region (`EXAM_KEY`, `EXAM_DEFAULT`, `EXAM_NAME`, `EXAM_LABEL`, `SECS_PER_Q`), `finalN`, `planHTML`, `paintHeader`. Fields read: `key`, `name`, `short`, `title`, `examKey`, `examDefault`, `examName`, `examLabel`, `examNote`, `finalN`, `secsPerQ`. | `content/meta.json` minus `blocks`; `key` defaults to `"reproendo"` |
| `GLOSS` | `fmt`, `glossTerms`, `explicitGloss`, `viewGloss`, `buildIndex`, `searchGo`, `wire` | `const GLOSS = {}` plus one `G(k,t,d,alt)` call per entry of `content/glossary/<tid>.json` |
| `G` | not read by the engine (build.py uses it to fill `GLOSS`) | declared by build.py |
| `PALACE` | `palaceHTML`, `buildIndex` | `content/palace/*.json` → `{t, story, keys}` |
| `IMGS` | `flagTarget`, `repairState`, `tagEverything`, `topicEvidence`, `covered`, `stats`, `todaysPlan`, `viewPath`, `visualGuideHTML`, `rapidMedia`, `highlightFigure`, `deepReviewHTML`, `imgHTML`, `POOLS`, `multiDrillHTML`, `viewSpot`, `buildSpotOpts`, `buildIndex`, `screenContext`, `wirePins`, `spotPool` (the image sets; since P2.4's image-set fix), `startSpot`, `wireSpot`, `__pathAudit` | `content/images/*.json` → `{n, dx, wrong, ww, look, cred, by, lic, licurl, srcurl, mod, ann}` and `url = "repro-endo-assets/<file>"` |
| `FIGS` | `viewPath`, `visualGuideHTML`, `rapidMedia`, `deepReviewHTML`, `figHTML`, `buildIndex`, `verifyConceptHomes`, `__pathAudit` | `content/figs/<key>.svg` + `<key>.json` → `{cap, svg, teach?}` |
| `BLOCKS` | `ALLT` (and so every topic lookup), `tagEverything`, `railHTML`, `bldHTML`, `attachSexp`, the vis insertion, `permuteOptions`, `deriveMinutes`, `__pathAudit` | `meta.blocks` order; each topic from `content/topics/<tid>.json` without `obj`/`bp`, `mins` defaulted to 0 (recomputed by `deriveMinutes`) |
| `QS` | practice (`viewPractice`, `practicePool`, `startSet`, `wirePractice`), stages (`stageQs`, `openStage`, `reservedIds`, `finalSet`), evidence (`topicEvidence`, `confusions`, `errorTypes`, `sittingAnswers`, `leeches`, `trajectory`, `calibration`), `todaysPlan`, `covered`, `stats`, `POOLS`, `viewWeak`, `buildIndex`, `screenContext`, `flagTarget`, `repairState`, `tagEverything`, the transforms `applyQDepth`, `applyQDepth2`, NBME converter, `permuteOptions`, `applyQDiff`, `applyConceptTags`, `conceptThreads`, `__pathAudit`, self-test | `content/questions/<tid>.json` → `{id, d, s, l, o, a, e, et, bl, pt, tags, ef, ei}` plus `c` = topic id, `b` = its block, and `w` converted from option-text keys to authored option indexes (the engine's `permuteOptions` remaps them) |
| `RAPID` | rapid (`viewRapid`, `rapidPool`, `startRapid`, `wireRapid`), `diagSet`, `stageRapid`, `hubSync`, evidence, `covered`, `stats`, `POOLS`, `viewPractice` (linked queue), `wirePractice`, `buildIndex`, `migrateRapidKeys`, `tagEverything` (sets `r.i`, `r.ix`), `applyRapidX`, `applyRapidPoints`, `applyRapidFive`, `permuteOptions`, `applyConceptTags`, `conceptThreads`, `__pathAudit`, self-test | `content/rapid/<tid>.json` → `{id, q, o, a, x, w, pt, tags, media}` plus `c`, `b` (`w` stays keyed by option text) |
| `DRILLS` | `viewDrill`, `startDrill`, `wireDrill`, `todaysPlan`, `topicEvidence`, `confusions`, `covered`, `stats`, `POOLS`, `buildIndex`, `screenContext`, `flagTarget`, `repairState`, `tagEverything`, `verifyConceptHomes`, `conceptThreads`, `__pathAudit` | `content/drills/*.json` → `{id, c, kind, t, a, bb, key, q, cols}` plus `b`; `items` = step texts (order) or `[text, col, img?]` (sort, multi); the whys move to `DRILL_WHY` |
| `PATH` | `stageOf`, `stageQs`, `currentStage`, `todaysPlan`, `planDaysLeft`, `planHTML`, `viewPath`, `openStage`, `finishSet`, `wireRapid`, `deriveMinutes`, self-test | `content/path.json` as authored |
| `RAPID_MEDIA` | `rapidMedia`, self-test (`visuals`) | `{r.q: r.media}` for every rapid item with a valid `media` (`fig:` / `img:`) |
| `RAPID_POINT` | `applyRapidPoints` (copies it onto `r.pt`) | `{r.q: r.pt}` for every rapid item with `pt` |
| `VISUAL_GUIDES` | `visualGuideHTML`, `deepReviewHTML`, the vis insertion | `content/guides/<tid>.json` `.vis` |
| `TOPIC_MEDIA` | `visualGuideHTML`, `deepReviewHTML` | `content/guides/<tid>.json` `.media` |
| `DRILL_WHY` | `wireDrill`, `drillWhyText` (the end-screen toggles of `sortDrillHTML`, `multiDrillHTML`, `orderDrillHTML`; since P2.4, order steps included), `__pathAudit` (order steps included in both lists since P2.6) | `{drillId: {itemText: why}}` from the drill items' why fields |
| `CONCEPT_TAGS` | `applyConceptTags`, `verifyConceptHomes` | `content/concepts.json` `.tags` |
| `TAG_LABELS` | `rfCatHTML` | `content/concepts.json` `.labels` |
| `CONCEPT_HOME` | `verifyConceptHomes`, `conceptThreads`, self-test (threads hook, since P2.6) | `content/concepts.json` `.home` |
| `DRILL_TAGS` | `verifyConceptHomes`, `conceptThreads`, self-test (threads hook, since P2.6) | `{drillId: tags}` from each drill's `tags` |
| `Q_TAGS` | `applyConceptTags` | `{qid: tags}` from each question's `tags` |
| `R_TAGS` | `applyConceptTags`, only as the fallback since P2.2: an item's own inline `r.tags` wins (R_TAGS is keyed by `r.ix`, the array index) | `{index: tags}` in the order build.py emits `RAPID`, which is the index `tagEverything` assigns |

## 3. Cardio-era side maps: declared empty by build.py, so their transforms are no-ops

| Global | Transform in the engine | build.py value |
|---|---|---|
| `RAPID_X` | `applyRapidX` (falls back to `<b>answer</b>` only when an item has no `x`) | `{}` |
| `RAPID_OPTS`, `RAPID_OPT_SWAP`, `RAPID_W` | `applyRapidFive` (touches `r.w` only when `RAPID_W` has the question, so inline `w` survives) | `{}` |
| `SEXP` | `attachSexp` | `{}` (sexp rows are authored in the body) |
| `QDEPTH`, `QDEPTH2` | `applyQDepth`, `applyQDepth2` | `{}` |
| `NBME_EXPANSION`, `NB_WHY` | the NBME converter | `[]`, `{}` |
| `Q_DIFF`, `Q_DIFF_R2` | `applyQDiff` (keeps the authored `q.d`; logs a console warning that every question is "absent from Q_DIFF") | `{}` |

## 4. Not from build.py

- **Browser storage** (engine constants): `LS_KEY = "step1." + META.key + ".v2"` (legacy `.v1` read once), `HUB_KEY = "step1.hub.v1"` (shared hub), `EXAM_KEY = META.examKey` (fallback the shared `"step1.examDate"`) with `EXAM_DEFAULT = META.examDefault` (P2.2; with neither a stored date nor a default the date is eight weeks out).
- **Artifact runtime**, all optional and guarded: `window.claude.use("db")` and `("user")` in `syncDb`, `("sample")` in `getSample`, `("downloads")` in the export handler. Without `window.claude` the page runs on localStorage alone. What the tutor is sent comes from `screenContext()` alone; since the P2.6 tutor fix it withholds every answer the student has not given in the running session (and sets `lock`), and `S.chat` entries carry `k`, the lock they were asked under, so `chatFor` sends and shows only the answer-free exchange on an unanswered item.
- **Page flags**: `location.search` `?selftest=1` runs `selftest.js`'s block and sets `window.__SELFTEST` (which makes `save()` and `flushNow()` no-ops).
- **Globals the page exposes**: `window.__pathAudit` (structural audit, renamed from `__cardioAudit` in P2.2; its snapshot is `document.documentElement.dataset.pathAudit`, taken after boot), `window.__selftestExtra` (self-test hooks), `document.documentElement.dataset.selftest` (the `?selftest=1` verdict; `document.title` stays `META.title`; since P2.6 the verdict `R.ok` is false when a section throws or when an end-of-run invariant fails: the audit lists not empty, a view leaking, a tutor context that carries an answer not yet given (`tutorContext`), or a hook that had material in the content and did not prove its case), and the top-level `const`/`let` of the script (`S`, `blank`, `render`, `MODES` ...) that the probe reads.

## 5. What build.py already emits that this engine does not use yet

`META.palette` reaches the page only through the shell placeholders; `META.title` through the placeholders and the
tutor prompt. Since P2.2 the engine reads `examName`, `examLabel`, `examDefault`, `examKey`, `examNote`, `finalN` and
`secsPerQ`; `series` is still not read (the storage and export namespace stays `step1`, ENGINE-MAP §1b).
Since P2.3 the practice view renders `q.bl` (`.qbl`), `q.et` (`.tblwrap.et`, keyed row `tr.etkey`) and `q.pt`
(`.qsay` above the question's own visual, `q.pt.hl` marked by `highlightFigure`) straight from each question, so no
`Q_POINT` map is needed. Since P2.4 the pretest renders `p.w` (the picked note first in `.ptwhy`, the other wrong
options on click; since P2.V F13 `pretestHTML` draws each row from `S.pre[tid]`, whose `ok[i]` and `pick[i]` are
written once by the first answer) and the spot view renders every `ww` note under its own option. Spot offers every `wrong`
label (P2.2). Since P2.5 `figHTML` renders figure `teach` under a closed `details.figteach` beneath the caption,
`imgHTML` draws all nine overlay kinds (`r e c poly arrow bracket spot inset none`; `sh` as an unfilled `r`) with a
numbered `.opin` at each callout's `px`/`py` and a `[data-showall]` toggle, `buildIndex` also indexes `q.w`, `q.et`,
`q.bl`, `r.w`, `pt.say`, image `ww` and figure `teach`, and `confusions()` adds `kind:"rapid"` rows from
`S.rapid[id].picks`.
Since P2.V K16 a photograph's size comes from the image file itself (`naturalWidth`/`naturalHeight`): the box is
capped at natural size and the lightbox's 100 % is one image pixel per CSS pixel, so `IMGS` needs no size field.
