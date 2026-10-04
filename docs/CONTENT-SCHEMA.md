# CONTENT-SCHEMA — the content contract for a new block on The Cardio Path engine

**What this is.** The exact data contract the Cardio Path engine renders, derived from `cardio-path.html`, so a new block
(reproductive + endocrine) can be authored as clean, consolidated data files that reach the cardio file's post-audit
quality bar on day one, with no layered patches.

**Provenance (read before using any line number).**
- Source: `C:\Users\varsh\Documents\Codex\2026-09-15\there-s-an-artifact-on-clot\outputs\cardio-path.html`.
- Every line number here refers to a **read-only snapshot taken 2026-09-26 09:06**: sha256 `041fd49bbfbd3387…`
  (md5 `5c2b2b8d…`), 20,058 lines. That is the file exactly as PLAN-2 task P1.7 closed it (`sha:041fd49b` in
  `PLAN-2-LEDGER.md`), with P1.8 already in progress. The live file has since changed (20,290 lines when last checked;
  P1.8 added `RAPID_POINT`, `applyRapidPoints()`, `highlightFigure()`, answer panels in several FIGS and CSS). Lines after
  ~944 in the live file are offset by +9 to +230 from the numbers below.
- Numbers were computed, not estimated. The page script (snapshot lines 1128–19827, i.e. everything before
  `bindChrome(); render();`) was evaluated in a Node `vm` with stubbed DOM objects, so every figure below is the
  **runtime** content after all ~95 load-time mutations. "Literal" means the state before the first mutation.
  Scripts and raw outputs are in the scratchpad next to this file: `ctx.js`, `analyze.js` → `stats.json`,
  `ledger.js` → `ledger.json`, `rowattr.js` → `rowattr.json`, `provenance.js`, `probe-static.js`.
- Word counts use the engine's own rule (`deriveMinutes`, 19171–19181): strip tags, entities, the key half of
  `{{key|Label}}`, and the `[[ ]]`/`**` delimiters, then split on whitespace.
- Legend for fields: **REQ** required; **OPT** optional; **DER** derived at load (authored value ignored or overwritten);
  **PLAN** a PLAN-2 §8 contract that the snapshot does not consume yet (author it anyway; the renderer is landing in
  P1.8/P2.x/P3.x/P5.2). "fmt", "esc", "raw" say how a string is rendered (§1.11).

## Contents
0. How the engine loads content (the load-order facts a clean block must respect)
1. The structures — every field, type, constraint, consumer, count, size and one real example
2. How the cardio content was layered — every mechanism and the generic rule it enforces
3. The quality bar, consolidated and made checkable
4. Minimum cardio densities per topic
5. Clean-block checklist (engine gotchas that silently break a new block)

---

## 0. How the engine loads content

- One classic `<script>` (1127–20056). All content is top-level `const` (`GLOSS`, `PALACE`, `IMGS`, `FIGS`, `BLOCKS`,
  `QS`, `RAPID`, `DRILLS`, `PATH`, …). Top-level `const` is not on `window` (`typeof QS` works, `window.QS` does not).
- Boot order at the bottom: `applyRapidFive()` 18785 → `permuteOptions()` 18805 → `__cardioAudit` 18827 →
  placement IIFEs 18867–19162 → `deriveMinutes()` 19170 → `applyQDiff()` 19274 → `load()` 19280 →
  `tagEverything()` 19281 → `applyConceptTags()` 19560 → `verifyConceptHomes()` 19660 → `bindChrome(); render();`
  19828–19829 → self-test hooks 19836–19955 → `?selftest=1` block 19956–20054.
- Load-time transforms that still apply to clean data (they are engine, not patches):

| Transform | Line | Effect on authored data |
|---|---|---|
| `permuteOptions()` | 18805–18825 | Shuffles `q.o` (seed `q.id`), remaps `q.a` and index-keyed `q.w`; shuffles `r.o` (seed `"r"+ix+q.slice(0,12)`), remaps `r.a`; shuffles each pretest `p.o` (seed `t.id+"pt"+i`); shuffles `t.grid.items` (seed `t.id+"grid"`). **Does not** shuffle `sexp` options or spot labels (spot is shuffled per view by `buildSpotOpts`). So authoring keyed-first is fine everywhere except `sexp`. |
| `deriveMinutes()` | 19170–19200 | `t.mins = clamp(round(words/110), 7, 18)`; unit `p.mins = Σ topic mins + 6 × topics`. Authored `mins` are ignored. |
| `applyQDiff()` | 19274–19278 | `q.d` = `Q_DIFF_R2[id]`, else `Q_DIFF[id]` (console warning when absent). |
| `tagEverything()` | 12117–12129 | `r.i = META.key+"."+hashId(stripTags(r.q))` (+`"x"` on collision), `r.ix` = array index; `IMGTOPIC[img]` = first topic (BLOCKS order) whose body has `["img",key]`; fills missing `c` from block `b`. |
| `applyConceptTags()` | 19560–19572 | `q.tags = Q_TAGS[q.id]`, `r.tags = R_TAGS[r.ix]`, filtered to `CONCEPT_TAGS`. |
| vis auto-insert | 11181–11182 | Any topic with a `VISUAL_GUIDES` entry but no `["vis",id]` row gets one spliced at `floor(body.length/2)`. |
| `applyRapidFive()` | 18785–18804 | Applies `RAPID_OPT_SWAP`, appends `RAPID_OPTS`, builds `r.w` from `RAPID_W` (all keyed by normalised question text). With inline 5 options and inline `r.w`, the maps can be empty and nothing changes. |

---

## 1. The structures

### 1.1 META — 1131–1132

| Field | Type | Req | Consumed by |
|---|---|---|---|
| `key` | string, lowercase, unique per block | REQ | `LS_KEY = "step1."+key+".v2"` 11719 (and legacy `.v1` 11816); rapid ids 12121; hub entries `b` 12897, other-block filter 12911; export/import filename and block check 15024, 15032, 15060; reset 15078 |
| `name` | string | REQ | hub `bn` 12897; tutor system prompt 14822; overview context 14754 |
| `short` | string | REQ | path eyebrow 13180; tutor label 14754 |
| `a1`, `a2` | hex string | — | **Not read by any code.** The accents are CSS tokens `--a1/--a2` (+ `-2`, `-soft`) at 20–21, dark 40–41 and 54–55. A new block edits those tokens. |

Example (1131): `const META = {key:"cardio", name:"Cardiovascular", short:"Cardiovascular block", a1:"#B23A32", a2:"#38538A"};`
Also shared across all blocks, not per block: `EXAM_KEY="step1.examDate"`, `EXAM_DEFAULT="2026-10-10"` (1136) and `HUB_KEY="step1.hub.v1"` (11720).

### 1.2 GLOSS via `G(k, t, d, alt)` — 1157–1220, 1403–1408

`G(k,t,d,alt)` stores `GLOSS[k] = {k, t, d, alt: alt||[]}` (1162).

| Field | Type | Req | Constraint / rendering | Consumed by |
|---|---|---|---|---|
| `k` | string | REQ | unique; case-sensitive; no pipe character or `}`; referenced as `{{k}}` or `{{k\|Label}}` | `fmt` 12015–12016, `explicitGloss` 13385, `glossTerms` 12043 |
| `t` | string | REQ | display title (esc); also an auto-link match candidate | glossary view 14571–14578, popup header 14965, search 14610 |
| `d` | string | REQ | definition (fmt: `<b>`, entities allowed) | popup 14965, glossary view 14578, search 14610 |
| `alt` | string[] | OPT | extra match candidates; must be the forms the bodies actually use (comment 1158–1161) | `glossTerms` 12048 |

Auto-linking rules (`glossTerms` 12043–12063, `autoGloss` 12079–12116): candidates are `[t, k, …alt]`, longest first. A
candidate is matched case-sensitively when it has a capital after its first letter or is ≤4 chars starting with a
capital (so `PT`, `CO` never fire on "pt", "co"); case-insensitive candidates must be longer than 3 chars. It must be
preceded by start, space, `(`, `—`, `–`, `,`, `;`, `:` or `“` and followed by whitespace, `. , ; : ! ? ) — – ”` or end.
Only the **first** mention per topic page is linked; an author's explicit `{{k}}` anywhere in the topic claims the key
first (`explicitGloss`, 13385–13390). Auto-linking runs on `h`, `p`, `call`, `why`, table cells, `steps` rows and the
revealed `sexp` why; it does **not** run on pretest, grid, palace, image legends, figure captions, VISUAL_GUIDES cards,
questions or rapid items (explicit `{{k}}` still works there, e.g. `q46.e`).

Counts: 59 terms (53 at 1164–1220 + 6 at 1403–1408). 20 have aliases (53 aliases). `d` 11–60 words (median 22);
`t` 3–36 chars (median 12). Rendered links per topic 1–12 (median 8, r1 is 1); 3 terms are never linked from any
topic (`chronotropy`, `firstpass`, `ASO`). One broken explicit key exists: `{{restrictive|diastolic}}` in
`IMGS.lvh_gross` (no `restrictive` term, so it silently prints "diastolic" unlinked).

Example (1172): `G("pulsepressure","Pulse pressure","Systolic minus diastolic pressure. It is set mainly by stroke volume and by how stiff the aorta is.",["pulse pressures","wide pulse pressure","narrow pulse pressure"]);`

### 1.3 PALACE (memory scenes) — 1223–1272, 5486–5509

`PALACE[key] = {t, story, keys: [[icon, label, text], …]}`, placed with the body row `["palace", key]`.

| Field | Type | Req | Rendering | Size in cardio |
|---|---|---|---|---|
| `t` | string | REQ | esc, `h4` | 5–13 words |
| `story` | string | REQ | fmt, collapsed under "Read the scene as a story" | 72–169 words (median 132) |
| `keys[i][0]` | emoji | REQ | raw, `aria-hidden` | one glyph |
| `keys[i][1]` | string | REQ | esc (plain) | 1–8 words (median 4) |
| `keys[i][2]` | string | REQ | fmt | 4–23 words (median 10.5) |

Consumers: `palaceHTML` 13812–13825; `bodyBlock` 13411; search 14607–14609; `__cardioAudit.topicsWithoutVisual`
counts a palace as a visual (18843). Counts: 7 scenes, 46 cards (5–9 per scene, median 6), placed in 6 topics
(i2, f3, v1, n2, d1 ×2, d2). A palace is a mnemonic board; PLAN-2 §7 forbids mnemonics as explanations.

Example (1245–1252, story truncated):
`PALACE.murmur = {t:"The squat and the stand", story:"Forget murmur lists. Picture yourself **squatting down** …", keys:[["🧎","Squat / leg raise / lying flat","Preload UP → nearly all murmurs LOUDER."], …]};`

### 1.4 IMGS (annotated photographs) — 1277–1401, 5758–5869, 5897–5980, 6087–6306, 8356–8471

| Field | Type | Req | Constraint / rendering | Consumed by |
|---|---|---|---|---|
| `n` | string | REQ | esc; photobar title and `alt`; 10–70 chars (median 46) | `imgHTML` 13860–13864, search 14603 |
| `url` | string | REQ | relative asset path (`cardio-path-assets/<md5>.jpg` ×30, `…/new_*.jpg` ×14); PLAN P4.6: source ≥800 px on the long side | `imgHTML` 13864, spot 14382, multi-drill 14211 |
| `dx` | string | REQ | esc; the correct spot label; 14–49 chars | `viewSpot` 14385–14392, `buildSpotOpts` 14401 |
| `wrong` | string[] | REQ | esc; distractor labels; cardio has 3 each; **PLAN P3.1: 4 each** (today `buildSpotOpts` slices to 3 and letters `"ABCD"`, 14387, 14401) | `buildSpotOpts` 14399–14402 |
| `ww` | `{wrongLabel: note}` | REQ | note inserted **raw** (not fmt) after a wrong pick (14377, 14393) → use `<b>`, not `**`; 12–29 words (median 21); probe needs ≥8; §7 band 12–45 | `viewSpot` |
| `look` | string | REQ | fmt; photo caption; 42–80 words (median 58) | `imgHTML` 13871, tutor 14732, search |
| `cred` | string | REQ | raw HTML credit line; self-test `imagesWithoutCredit` checks `im.cred` | `credHTML` 13830–13836 |
| `by`, `lic`, `licurl`, `srcurl` | string | REQ for CC-BY/SA | when `by` is present the credit is rebuilt as `by · <a licurl>lic</a> · <a srcurl>Wikimedia Commons</a>` | `credHTML` |
| `mod` | boolean | OPT | appends "· resized" | `credHTML` 13835 |
| `ann` | array | REQ, non-empty | numbered hotspots; empty fails `__cardioAudit.unannotatedImages` (18842) | `imgHTML` 13841–13870, `wirePins` 15200–15232 |

Annotation fields (all coordinates are **percent of the image box**, 0–100):

| Field | Kind | Meaning |
|---|---|---|
| `k` | all | `"r"` rectangle, `"e"` ellipse, `"c"` circle; `"sh"` filled rectangle exists in code but PLAN-2 forbids fills. PLAN P4.1 adds `poly` (`pts:[[x,y]…]`), `arrow` (`x,y` tip, `tx,ty` tail), `bracket` (`x,y`→`x2,y2`), `spot` (`x,y,rx,ry`, dims everything outside), `inset` (`x,y,w,h` source + `ix,iy,iw,ih` zoom box), `none` (pin only). |
| `x`,`y` | r | top-left corner (renderer centres at `x+w/2, y+h/2`) |
| `w`,`h` | r | width, height |
| `x`,`y`,`rx`,`ry` | e | centre and radii (`rx` % of width, `ry` % of height) |
| `rot` | e | optional rotation in degrees |
| `x`,`y`,`r` | c | centre; `r` is % of **width** (drawn with `aspect-ratio:1`) |
| `px`,`py` | all, OPT | pin position; a dashed leader line is drawn when the pin is ≥3 units from the shape anchor (13852–13858); 56 of 149 use pins |
| `l` | all, REQ | label, fmt; shown in the side rail on hover/tap and in the "All N findings" legend; `aria-label` uses `stripTags(l)`; house form `"<b>Finding.</b> Causal explanation…"` |

Other consumers: `IMGTOPIC` (12123–12124) feeds the spot pool (13969) and each topic's image-recognition mastery
channel (12159–12161); `q.ei`; `TOPIC_MEDIA.img`; `RAPID_MEDIA` `img:`; multi-drill item images; lightbox (15197);
tutor (14726–14735); daily plan "images you have not identified" (13006).

Counts: 44 images, 149 annotations (r 42, e 53, c 54), 1–8 per image (median 4). Labels 11–56 words (median 34).
Coverage per image 2.3–88 % of the frame (median 17.7 %); 8 images over 35 % in total and 13 with one shape over
15 % (the PLAN-2 ceilings), `myxoma_gross` has one ellipse over 45 %. All 44 are placed in a body.

Example (6167–6179, strings truncated):
```js
IMGS.splinter = {
n:"Splinter haemorrhages", url:"cardio-path-assets/new_splinter_hem.jpg", dx:"Splinter haemorrhages",
wrong:["Subungual melanoma","Onychomycosis","A bruise from direct trauma"],
ww:{"Subungual melanoma":"These are short thin lines near the free edge, not a pigmented band running the whole length …", …},
look:"Fine, dark reddish-brown lines running lengthwise under the nail plate … only become a real endocarditis clue when …",
cred:"Splarka · Public domain · Wikimedia Commons",
by:"Splarka", lic:"Public domain", licurl:"", srcurl:"https://commons.wikimedia.org/wiki/File:Splinter_hemorrhage.jpg",
ann:[{k:"e",x:46,y:78,rx:10,ry:12,l:"<b>Two linear streaks near the nail bed.</b> They run parallel to the direction of growth …"}]};
```

### 1.5 CRED — 6009–6077 (applied by `applyCredits` 6078 and `applyCreditsLate` 8472)

`CRED[imgKey] = {a: author, l: licence, lu: licence URL, u: Commons file URL}` → sets `im.by, im.lic, im.licurl,
im.srcurl`, `im.mod = true`, `im.cred = a+" · "+l+" · Wikimedia Commons (resized)"`. 33 entries; `applyCreditsLate`
never overwrites an existing `cred`. A clean block writes these five fields inline on each `IMGS` entry, as the 14
`new_*` images already do. Example (6045): `CRED["janeway"] = {a:"Warfieldian", l:"CC BY-SA 4.0", lu:"https://creativecommons.org/licenses/by-sa/4.0", u:"https://commons.wikimedia.org/wiki/File:Janeway_lesion.JPG"};`

### 1.6 FIGS (inline SVG diagrams) — 1414–4516, redraws 10888, 10957, 11069

`FIGS[key] = {cap, svg}`; PLAN P5.2 adds `teach`. The P4 figures are registered as `Object.assign(FIGS, {key:{cap,svg}})`
(2890, 2989, …); the form does not matter to the engine.

| Field | Type | Req | Rendering / constraint | Consumed by |
|---|---|---|---|---|
| `cap` | string | REQ | fmt figcaption; one paragraph stating what the figure settles (AUDIT-PLAN §7 Phase 4); cardio 32–371 words (median 74), 9 over 110; **PLAN P5.2 band 20–110** | `figHTML` 13801–13806; search 14605 |
| `svg` | string | REQ | raw SVG markup (template literal), house style below | `figHTML`; lightbox 15171; `fitSvgText` 14842; search (text of the svg); probe `figText` (text nodes + caption) |
| `teach` | string | PLAN | overflow teaching moved out of long captions; rendered under a `<details>` beneath the caption (P5.2) | not consumed at this sha |

Where figures appear: body `["f",key]`; `q.ef`; `TOPIC_MEDIA.fig` (the `vis` block and the "Open visual comparison"
panel); `RAPID_MEDIA` `fig:`; `CONCEPT_HOME.f` ("Diagram" button in Weak Spots threads, 19817).
Counts: 31 figures; 27 are placed in a topic body; `shunts`, `vasculitis`, `drugtree`, `bugtree` are reachable only
through `TOPIC_MEDIA`, questions, rapid pins and concept homes, because `treesToTables`/`shuntsToTable` (11018, 11122)
replaced them with tables in the bodies.

**SVG house style (measured over all 31):**
- Root: `<svg class="dia" viewBox="0 0 900 H" role="img" aria-label="…">` — 31/31 have `class="dia"`, `role="img"`,
  `aria-label`. Width 900 (29) or 880 (2); height 400–972 (median 470).
- First child: `<text class="ttl" x="14" y="18">Title</text>` (31/31).
- Text classes (CSS 246–259): default `text` 11.5 px sans `--ink-2`; `s` 10 px mono `--ink-3` (951 uses); `b` bold
  `--ink` (229); `ttl` 12.5 px bold (56); `a1`, `a2` accent 600 (56, 79); `gd`, `wn`, `cr` good/warn/crit 600 (61, 61, 43).
  Bold runs inside a label use `<tspan class="b">` (14 figures). **Never `<b>` inside `<text>`**: the HTML parser closes the
  svg there and spills the figure into the page (CSS comment 248–251).
- Colour: only theme tokens `var(--line) var(--line-strong) var(--ink) var(--ink-2) var(--ink-3) var(--surface)
  var(--surface-2) var(--surface-3) var(--ground) var(--a1) var(--a2) var(--a1-soft) var(--a2-soft) var(--good)
  var(--good-soft) var(--warn) var(--warn-soft) var(--crit) var(--crit-soft)`. Zero hard-coded hex colours in any figure.
- HTML entities are used freely (`&mdash; &rarr; &middot; &#8322; &deg;`), so a figure is not standalone XML; parsing
  it as `image/svg+xml` fails and that is expected (AUDIT-PLAN §5).
- Layout: "Every label is placed on an explicit grid. Text baselines are never closer than 13px vertically when they
  share horizontal space" (1411–1412). Panels are `<rect rx="6–10" fill="var(--x-soft)" stroke="var(--x)">` with their
  labels inside. `font-size` attributes seen: 8–14 (mostly 11–12.5). Text node length median 22 chars, max 146.
- **`fitSvgText` constraints (14842–14874)**, which runs on every `figure svg.dia` (and again after webfonts load, 14877):
  for each `<text>` it finds the smallest `<rect>` wider than 40 and taller than 18 user units that contains the label's
  left edge; the label may extend to `rect.right − 6` (or `viewBox.width − 4` if it is in no rect). If the label is
  longer, the font is shrunk to `max(8.4, fs × avail/len × 0.99)`; if still too long **and** `text-anchor` is `start`, it is
  squeezed with `textLength` + `lengthAdjust="spacingAndGlyphs"`; labels with `avail ≤ 12` are skipped. Consequence:
  author every label to fit its box at native size; middle/end-anchored text is only shrunk, never squeezed; a label
  that relies on the fitter ends at 8.4 user units ≈ 6.3 px on screen. (Live P1.8 file: `rect.hlbox` highlight halos are
  excluded from the rect search.)
- Legibility target (PLAN-2 P5.1): median glyph ≥9 px at 1280 px (glyph = font-size × rendered width / viewBox width;
  PLAN-2 §6 measured the inline scale at 0.75, i.e. ≈12 user units needed for 9 px) and ≥10 px in the lightbox at 400 px.

Example (2890–2898, truncated):
```js
Object.assign(FIGS, {
cmy_geometry: {
cap:"Three cardiomyopathies, and one question each drawing answers: <b>what did the wall do, and what did that cost?</b> …",
svg:`<svg class="dia" viewBox="0 0 900 476" role="img" aria-label="Normal, dilated, hypertrophic and restrictive ventricles …">
<text class="ttl" x="14" y="18">Wall, cavity, and which half of the beat fails</text>
<rect x="14" y="30" width="150" height="306" rx="10" fill="var(--surface)" stroke="var(--line)" stroke-width="1.6"/>
<text class="b" x="26" y="52" font-size="12">NORMAL</text> …
</svg>`}});
```

### 1.7 BLOCKS (groups) and topics — 4521–5478 (+ `BLOCKS.push` at 4763, 5006, 5292, 5512)

Block: `{id, n, wk, topics:[…]}`.

| Field | Type | Req | Consumed by |
|---|---|---|---|
| `id` | string, unique | REQ | fallback `c` for items (12125–12128); PLAN-2's probe builds its per-block vocabulary corpus from bodies, `QS`/`DRILLS` whose `b` equals this id (probe2.js 41–46) |
| `n` | string | REQ | esc: rail group heading 13334, topic eyebrow 13355, question header 14139, search 14592, set-builder chips 14020 |
| `wk` | string | — | no consumer found (grep `.wk`) |
| `topics` | array | REQ | order = rail order, `ALLT()` order, diag order, prev/next links |

Cardio: 12 groups, 1–3 topics each, 21 topics.

Topic object (21 of 21 carry exactly `id t sub yld exam mins pretest body grid`):

| Field | Type | Req | Constraint | Consumed by |
|---|---|---|---|---|
| `id` | string, unique | REQ | referenced by `q.c`, `r.c`, `d.c`, `PATH.topics`, `VISUAL_GUIDES`/`TOPIC_MEDIA`/`SEXP` keys, `CONCEPT_HOME.t`, state `S.topics` | everywhere |
| `t` | string | REQ | esc; 34–60 chars (median 42) | rail, header 13362, search, tutor |
| `sub` | string | REQ | esc; one sentence, 10–19 words; c3 once lacked it and "undefined" was printed (8984–8987) | header 13363, search 14592 |
| `exam` | `"hi"`/`"mid"`/`"lo"` | REQ | drives the yield filter, badges and the weights in `topicEvidence` 12196, 12244 and threads 19739; cardio 15 hi, 6 mid, 0 lo | many |
| `yld` | same values | REQ | only the rail dot class `y-<yld>` (13327); keep equal to `exam` | `railHTML` |
| `mins` | number | DER | overwritten by `deriveMinutes` (7–18) | header tag, dwell target 15292, stage minutes |
| `pretest` | array | OPT (21/21 have one) | §1.9 | `pretestHTML` 13874 |
| `body` | array of rows | REQ | §1.8 | `bodyBlock` 13391 |
| `grid` | object | **REQ in practice** | §1.10. `startDwell()` is started only from `wireGrid()` (15233, 15269), so a topic without a grid can never be marked read by reading, and a unit stage needs every topic read to finish (12597–12601, 12605–12607). | `gridHTML` 13900, `wireGrid` |

Example (5513–5516): `{id:"congen", n:"Congenital Heart Disease", wk:"Stage 1", topics:[ {id:"f3", t:"Congenital Heart Disease, Lesion by Lesion", yld:"hi", exam:"hi", mins:16, sub:"Pink or blue, and why — with Tetralogy taken apart properly.", pretest:[…], body:[…], grid:{…}} ]}`
f3 (5515–5590) is the one topic whose literal body is still live, so it is the best in-file model of a complete topic.

### 1.8 Topic body rows — renderer `bodyBlock` 13391–13415

Runtime census: 406 rows — `h` 84, `p` 58, `call` 51 (key 28, trap 20, mnem 3, step 0), `img` 47, `t` 43, `why` 31,
`f` 28, `steps` 26, `vis` 21, `sexp` 10, `palace` 7. All `steps` rows use the nested 2-element form.

| Row | Exact shape | Rendering | Renderer | Cardio size |
|---|---|---|---|---|
| heading | `["h", text]` | esc + autoGloss; `.sechead` (CSS uppercases it, 191–193). Must be unique and stable: `CONCEPT_HOME.h` points at it by exact text | 13397–13398 | 2–16 words (median 8); 2–7 per topic |
| paragraph | `["p", text]` | fmt + autoGloss + cloze; `.prose p` | 13399 | 20–137 words (median 62); 1–5 per topic |
| figure | `["f", figKey]` | `figHTML` (Enlarge button, figcaption) | 13400, 13801 | 0–4 per topic |
| image | `["img", imgKey]` | `imgHTML` | 13401, 13838 | 0–7 per topic |
| visual guide | `["vis", topicId]` | `visualGuideHTML`: "Visual model: <title>", `TOPIC_MEDIA` media (fig wins, else img), 3 numbered cards | 13402, 13416–13423 | exactly 1 per topic (auto-inserted if absent) |
| call-out | `["call", kind, label, text]` | `kind` is a CSS class: `key` (blue), `trap` (red), `mnem` (green), `step` (amber, unused); `label` esc (uppercase mono); `text` fmt + autoGloss + cloze | 13403 | label 2–13 words (median 8); text 35–91 words (median 61); 1–6 per topic |
| why (elaborative question) | `["why", question, answer]` | `<details>` collapsed; question esc; answer fmt + autoGloss | 13408–13409 | question 12–21 words (median 16); answer 78–144 words (median 113); 1–3 per topic |
| table | `["t", header[], rows[][]]` | header cells fmt; body cells fmt + autoGloss + cloze; `.tblwrap` scrolls; first column bold (CSS 235). Every row must have `header.length` cells (0 ragged in cardio); a header cell may be `""` | 13410, 13797 | 2–6 columns (median 3), 2–11 rows (median 5), cells 0–55 words (median 3); 0–5 per topic |
| unpacked steps | `["steps", [title, [[head, body], …]]]` (legacy flat `["steps", title, rows]` still parses) | title esc; head and body fmt + autoGloss; numbered rows | 13413, 13788–13796 | 2–6 rows (median 4); title 4–13 words; head 3–16 words (median 8); body 19–100 words (median 54); 1–3 per topic |
| memory scene | `["palace", palaceKey]` | `palaceHTML` | 13411, 13812 | 0–2 per topic (7 total) |
| self-explanation MCQ | `["sexp", {id, q, o:[…4], a, why}]` | §1.20 | 13412, 13888 | 0–1 per topic (10 total) |

Examples (all live): `["h","The one question that sorts every congenital lesion"]` (5530) · `["p","There are a lot of congenital heart lesions and they blur together fast. Almost all of the confusion disappears if you ask one question first: **is the baby blue?** …"]` (5531) · `["f","shunts"]` (5533) · `["img","cardiac_normal"]` (8910) · `["palace","cyanotic"]` (5534) · `["call","trap","Tetralogy versus transposition &mdash; both blue, very different babies","<b>Tetralogy</b> is usually blue <b>after</b> the newborn period …"]` (5550) · `["why","Why does a child with Tetralogy get suddenly and dramatically blue when crying, feeding or having a tantrum?","Because all three of those things **drop systemic vascular resistance** …"]` (5549) · `["t",["Lesion","Give-away","Association"],[["<b>Coarctation of the aorta</b>","<b>Upper limb hypertension</b> with weak, delayed femoral pulses; …","<b>Bicuspid aortic valve</b> in about half; …"], …]]` (5563–5565) · `["steps",["The four features, and why each one has to be there",[["**Pulmonary stenosis** — the outflow to the lungs is narrowed","Because the septum deviated forward, it crowds …"], …]]]` (5539–5547) · `["vis","f3"]` (runtime only).

House order that the audits converged on: a heading promises a question; prose explains the mechanism; the figure or
photograph comes right after the heading or paragraph that promises it and before any table that restates it (P4
placement comments 18958–19162); tables summarise after the prose (batch-1 rewrite header 5619–5623); a `sexp` sits
immediately before the topic's closing `why` (attachSexp 9856–9865).

### 1.9 pretest — `pretestHTML` 13874–13884, `wirePretest` 15087–15099

`t.pretest = [{q, o, a, why, w}]`, shown above the body until every item is answered (`viewLearn` 13349, 13365).

| Field | Type | Req | Rendering / constraint |
|---|---|---|---|
| `q` | string | REQ | fmt; 7–22 words (median 14) |
| `o` | string[4] | REQ | **esc** (plain text, no markup); 1–15 words (median 2); shuffled at load |
| `a` | integer | REQ | index into `o` as authored (remapped by `permuteOptions`) |
| `why` | string | REQ | fmt; shown after any pick; 18–52 words (median 34) |
| `w` | `{optionText: why}` | PLAN P3.3 | shown for the picked wrong option above `why`; ≥8 words (probe), §7 band 12–45 |

Counts: 43 items, 2 per topic (c3 has 3), 4 options each, none has `w` yet. Scored into `S.pre` and the mastery engine
at weight 0.5 per item, chance-adjusted for 4 options (12153–12155, 12167).
Example (5518–5522, truncated): `{q:"A 2-year-old with a known heart defect turns deeply blue while crying and immediately **squats down**. Why does squatting help?", o:["It raises systemic vascular resistance, pushing blood through the lungs instead of across the defect","It lowers the heart rate","It increases oxygen in the air he breathes","It compresses the chest and helps the lungs empty"], a:0, why:"This is a **tet spell** in Tetralogy of Fallot. …"}`

### 1.10 grid (recall check) — `gridHTML` 13900–13915, `wireGrid` 15233–15270

`t.grid = {q, items: [[text, flag], …]}`; `flag` is `1/0` (244 items) or `true/false` (c3's 10); the engine reads `!!flag`.

| Field | Rendering | Cardio size |
|---|---|---|
| `q` | esc; the page appends "— tap every one that belongs. Some of these are decoys." | 4–11 words |
| `items[i][0]` | fmt | 2–14 words (median 7) |
| `items[i][1]` | truthy = belongs | 6–12 true (median 8), 3–6 decoys (median 4) per grid |

Items are shuffled at load (18823–18824) because true-first authoring let a student score 100 % by tapping the top rows.
Score = `clamp((hits − 0.5 × decoys picked) / true count, 0, 1)`; ≥0.75 promotes the topic's spacing box, marks it read,
and feeds mastery at weight 2.0 (15243–15255, 12166). Cardio: 21 grids, 10–16 items (median 12), 254 items.

### 1.11 The inline markup mini-language

`fmt(s)` (12011–12025), applied in this order, with the bold budget reset per call:

| Source | Output | Rule |
|---|---|---|
| `[[term]]` | `<span class="cz">term</span>` | a cloze target, always styled; blanked when the Learn "Blank out key terms" toggle is on (14920–14923). None survive at runtime (the only ones were in dead literal bodies). |
| `{{key\|Label}}` | glossary link showing `Label` | if `GLOSS[key]` is missing, `Label` prints as plain text |
| `{{key}}` | glossary link showing the key itself | use only when the key is the displayed word (`{{HACEK}}`, `{{RAAS}}`); a bare `{{pulsusparadoxus}}` once printed the raw key (AUDIT-PLAN §5) |
| `**x**` | `<strong>x</strong>` if x ≤8 words and it is the 1st–3rd `**` in this string; otherwise `<em class="soft">x</em>` (soft highlight, 952–953) | bold marks a term, never a sentence; the rule is enforced only for `**`, not for `<b>` |
| `*x*` | `<em>x</em>` | preceded by start/space/`(`, followed by space or punctuation (organism names: `*Streptococcus viridans*`) |
| raw HTML | passes through | `<b>`, `<i>`, `<br>`, entities (`&mdash; &rarr; &#8322;`) and Unicode sub/superscripts (`Ca²⁺`) are all used |

Other helpers: `autoGloss` (§1.2); `autoCloze` (12070–12078) turns every `<strong>` and glossary link into a cloze target
**only in `p`, `call` and table cells** (`cz`, 13379) and only when the toggle is on — `<b>` is never clozed, so testable
terms in prose should be `**term**`; `esc` (11971) escapes `&` that is not already an entity and `<` (so entities
survive in esc fields, tags do not); `escA` (11767) also escapes quotes; `stripTags` (11979–11982) resolves
`{{k|L}}`→`L` and drops `[[ ]] ** <tags>` for plain-text uses (ids, aria labels, tutor, search).

Runtime census: body strings use `**` 399 times and `<b>` 1,045 times; questions use `<b>` only (833); rapid uses `<b>`
only (83). 62 `**` spans exceed 8 words and 36 strings carry more than three `**` spans (173 soft-demoted highlights
across the bodies); 28 `<b>` spans exceed 8 words. Cloze targets per topic 3–19 (median 10).

**Which fields accept markup** (anything not fmt must be plain text; entities are fine in esc fields):

| fmt (markup allowed) | esc (plain text only) | raw (HTML inserted as is) |
|---|---|---|
| `p` text, `call` text, `why` answer, table cells, `steps` head/body, `palace` story and card text, `sexp` options and why, pretest `q`/`why`, grid items, `IMGS.look`, `IMGS.ann[].l`, `FIGS.cap`, `GLOSS.d`, `VISUAL_GUIDES` card bodies, `q.s`, `q.l`, `q.o`, `q.e`, `q.w`, `r.q`, `r.o`, `r.x`, `r.w`, drill `key`, order-drill `q` and steps, multi-drill items, `DRILL_WHY` notes, (live) `r.pt.say` | `h` text, `call` label, `why` question, `steps` title, `palace.t` and card labels, `sexp.q`, pretest options, `grid.q`, `IMGS.n/dx/wrong`, topic `t/sub`, block `n`, drill `t`, sort-drill `a/bb` and **sort-drill items** (esc in the missed list and feedback, 14225, 15846), multi `cols[].l`, `PATH.t`, `PATH.d` (esc in the path view, raw in the plan 13114), `CONCEPT_HOME.l/h`, `TAG_LABELS` | `IMGS.ww` notes (14393), `IMGS.cred` (when no `by`), `q.et` body cells (`tableHTML` inserts them raw, 13799), `FIGS.svg` |

### 1.12 QS (practice questions) — literal 6312–6800; appended by `QS2` 8348, `QS3` 10198, `QS4` 10469, `QS5` 10878, `QS.push(adv…)` 11185, `NBME_EXPANSION` 11469

| Field | Type | Req | Constraint | Consumed by |
|---|---|---|---|---|
| `id` | string, unique | REQ | `q<n>`, `nb<nn>`, `adv<n>`; also decides which items are held back for the final (`reservedIds`, 13283–13291: every 4th per topic in `localeCompare` id order) | state `S.qs`, maps `Q_TAGS`/`Q_DIFF`, search |
| `b` | block id | OPT (legacy) | only a fallback for `c` (12126) and PLAN-2's probe vocabulary corpus; values like `"mixed"`, `"isch"` exist | `tagEverything`, probe |
| `c` | topic id | REQ | the topic that **teaches** the concept (q101 was mis-filed, 9494) | stage sets, mastery, weak spots, filters |
| `d` | 1/2/3 | DER | overwritten by `Q_DIFF_R2`/`Q_DIFF` (§1.22) | "Hardest first", difficulty tag, transfer signal |
| `s` | string | REQ | fmt stem; 13–81 words (median 34; 79 under 30, 84 of 30–59, 41 of 60+) | `viewPractice` 14142, `stemFloorMs` 12309 |
| `l` | string | REQ | fmt lead-in question; 3–19 words (median 9) | 14142 |
| `o` | string[5] | REQ | fmt; exactly 5 (`__cardioAudit.shortQuestionOptions`), no duplicates; 3–99 chars (median 33); keyed option not >1.35 × the longest distractor | 14122–14126 |
| `a` | integer | REQ | index into `o` as authored (keyed-first is fine) | remapped at load |
| `e` | string | REQ | fmt explanation; 22–118 words (median 86), ≤120 (AUDIT §6.1); must contain a >4-letter keyword of the keyed option (self-test `qExplanationMissesAnswer`) | 14157 |
| `w` | `{index: note}` for every wrong index | REQ | fmt; keyed by **authored** index, remapped by `permuteOptions`; a missing note falls back to a useless template (14129–14130); cardio 4 per question, 4–65 words (median 22; 60 notes under 12 words) | 14127–14130, linked queue 15398 |
| `ef` | FIGS key | OPT | the figure must answer **this** stem | 14160 |
| `ei` | IMGS key | OPT | same | 14161 |
| `tags` | string[1–3] | DER | from `Q_TAGS` | threads, chips |
| `et` | `[header[], rows[][]]` | PLAN P2.2 (rendered at 14158 if present) | 3–5 columns; first cell of each row = option text exactly; one row per option; no empty cell; no two rows identical; body cells raw HTML | `tableHTML` |
| `bl` | string | PLAN P2.2 | 8–28 words, one retrievable rule, names the answer | not rendered at this sha |
| `pt` | `{hl:[…], say}` | PLAN P2.7 (`Q_POINT[q.id]`) | as `r.pt` (§1.13) | not rendered at this sha |

Counts: 204 (154 `q`, 42 `nb`, 8 `adv`); 9–13 per topic (median 9); 5 options each; `d` 38/111/55. 156 carry a
visual (119 `ef`, 41 `ei`, 4 both); 48 have none; 19 visuals do not contain the keyed answer (probe proxy).
After permutation the keyed letter is spread 32/46/39/44/43 over A–E.

Engine behaviours that constrain authoring: a miss queues rapid items of the same topic that share >4-letter
keywords with the keyed option, the lead-in and the picked option's note (15393–15406), so rapid items should reuse the
questions' vocabulary. `confusions()` (12287–12303) and `errorTypes()` (12318+) can only name a misconception when two
questions **in the same topic offer the identical wrong-option text**; the self-test error-types hook needs at least one
such pair in a topic with ≥3 questions (19858–19866). Cardio has shared pairs in 12 topics and none in 9 (f1 p1 p2 p3
i1 n2 c1 c2 d1). "Too fast to have read it" = `max(6 s, 260 ms × words(s+l))` (12309–12312).

Example (6321–6326, literal; `w` later replaced by `QDEPTH2`):
```js
{id:"q2",b:"found",c:"f1",d:1,
s:"A histology slide shows striated muscle fibres that branch, contain centrally placed nuclei, and are joined end to end by darkly staining transverse bands.",
l:"Which tissue is this?",
o:["Cardiac muscle","Skeletal muscle","Smooth muscle","Myoepithelium","Fibroblastic connective tissue"],a:0,
e:"Three features together are diagnostic of cardiac muscle: <b>striations, branching, and intercalated discs</b>, with <b>central</b> nuclei. …",
w:{1:"Skeletal muscle is striated but never branches and its nuclei sit at the periphery.",2:"…",3:"…",4:"Fibroblasts are not muscle at all."}}
```
`NBME_EXPANSION` (11202–11256) is a legacy tuple form `[id, c, s, l, keyedOption, [4 decoys], e]` expanded at 11469–11476
into `{id, b:"mixed", c, d:3, s, l, o:[keyed,…decoys], a:0, e, w}` with `w` from `NB_WHY[id][decoyText]`. Do not reuse it.

### 1.13 RAPID (rapid picks) — 6804–7075

| Field | Type | Req | Constraint | Consumed by |
|---|---|---|---|---|
| `b` | block id | OPT (legacy) | probe corpus key; fallback for `c` | probe |
| `c` | topic id | REQ | ≥1 per topic (diag set, 13276–13280); stage rapid runs (12579) | all rapid views |
| `q` | string | REQ | fmt; 3–14 words (median 6; 21–87 chars). **Frozen once published**: `r.i` and every text-keyed map hang off it | `viewRapid` 14330 |
| `o` | string[5] | REQ | fmt; 5 after layering (authored 3 + `RAPID_OPTS` 2); 2–48 chars (median 15), 1–8 words (median 2); no duplicates, no empty; keyed not >1.4 × longest distractor | 14336–14343 |
| `a` | integer | REQ | index as authored | remapped at load |
| `x` | string | REQ | fmt one-liner shown with the verdict; 9–48 words (median 19; 30 under 14, 131 of 14–24, 62 of 25–45, 17 over 45); self-test fails an `x` under 14 words that contains the answer | 14346 |
| `w` | `{optionText: why}` for all 4 wrong options | REQ | fmt; keyed by exact option text; 23–44 words (median 34), gate band 12–60 (§7 says 12–45); ≥3 content words (≥4 letters) not in option+question | 14338–14343 |
| `tags` | string[1–2] | DER | `R_TAGS[ix]`; `tags[0]` drives the category chip via `TAG_LABELS` | `rfCatHTML` 14300 |
| `i` | string | DER | `META.key+"."+hashId(stripTags(q))` | state, hub |
| `ix` | integer | DER | array position after all appends; append new items at the end (comment 7058–7062) | `R_TAGS`, audits |
| `pt` | `{hl:[1–3], say}` | PLAN P1.8 (live file: `RAPID_POINT[qtext]` → `applyRapidPoints()`) | `hl` strings ≥3 chars that occur in a `<text>` node of the pinned figure or an annotation label of the pinned image (case-insensitive contains); `say` fmt, 8–60 words, starts with where to look, names the keyed answer | live `deepReviewHTML`/`highlightFigure` |

Counts: 240 items, 8–22 per topic (median 10), all 5-option with 4 whys, 211 pinned to media (151 fig, 60 img),
29 bare; 59 pins whose visual does not contain the keyed answer (probe proxy; P1.8 in progress). Other blocks' items
reach this block through the hub with only `{b, bn, c, ct, q, o, a, x, box, due, miss, n}` (12897–12898).

The same item in the snapshot lives in six places — the clean form is one object (runtime value of ix 7):
```js
// literal 6813: {b:"found",c:"f1",q:"Which vessels are the main site of resistance?",o:["Arterioles","Large arteries","Capillaries"],a:0},
// RAPID_X 7233, RAPID_MEDIA 13446, RAPID_OPTS 16033, RAPID_W 16435–16444, R_TAGS 19435 (by ix 7)
{b:"found", c:"f1", q:"Which vessels are the main site of resistance?",
 o:["Arterioles","Large arteries","Capillaries","Venules","Small veins"], a:0,
 x:"Arterioles. That is why they, not the big arteries, set blood pressure — and why they are the target of most antihypertensives.",
 w:{"Large arteries":"Large arteries carry the highest pressure, so they seem to set it, but their wide lumen offers little resistance; …",
    "Capillaries":"…", "Venules":"…", "Small veins":"…"},
 tags:["preload-afterload"]}   // + RAPID_MEDIA entry + (PLAN) RAPID_POINT entry
```

### 1.14 RAPID_MEDIA — 13433–13767; resolver `rapidMedia` 13768–13773

`RAPID_MEDIA[normalisedQuestionText] = "fig:<FIGS key>"` or `"img:<IMGS key>"`. Normalisation is only
`String(q).replace(/\s+/g," ").trim()` — case, punctuation, entities and tags must match exactly. A key whose target
does not exist resolves to no media. With media, the verdict panel shows `deepReviewHTML(r.c, "Why this answer fits —
see it drawn out", media)`; without, "Refresher: <topic>" and no picture (14347–14349). The self-test counts bare items
with the raw `RAPID_MEDIA[r.q]` lookup (so keep the key byte-identical to `q`). 211 entries (151 fig, 60 img); no
orphan keys, no broken targets. Rule stated in the file: "A visual that does not match is worse than no visual" (13424–13432).
Example (13434): `"Which junction in the intercalated disc carries the electrical signal between cells?":"img:cardiac_normal",`

### 1.15 Rapid layer maps (patches; a clean block leaves them empty or deletes them)

| Map | Lines | Key | Value | Applied by | Count |
|---|---|---|---|---|---|
| `RAPID_X` | 7227–7316, 7322–7695 | normalised question text | `x` text | `applyRapidX` 7697 (longer text wins), later `explainTheAnswer` 7716 overrides 22 | 235 keys, 232 applied |
| `RAPID_OPTS` | 16025–16287 | normalised question text | `[D4, D5]` | `applyRapidFive` 18785 | 240 |
| `RAPID_OPT_SWAP` | 16289–16360 | normalised question text | `{oldDistractor: newDistractor}` (never the keyed option) | `applyRapidFive` | 32 items, 34 swaps |
| `RAPID_W` | 16364–18780 | normalised question text | `{optionText: why}` | `applyRapidFive` (only for final option texts) | 240 items, 960 notes |
| `RAPID_POINT` | live file only | normalised question text | `{hl, say}` | `applyRapidPoints` (live) | in progress |

### 1.16 DRILLS — literal 7079–7176; `DRILLS2` 9704–9770; `DRILLS.push` 11651–11712

| Field | Kinds | Type | Req | Rendering / constraint |
|---|---|---|---|---|
| `id` | all | string, unique | REQ | `dr<n>`, `dm_<name>`; key of `S.drills`, `DRILL_WHY`, `DRILL_TAGS` |
| `b` | all | block id | OPT (legacy) | fallback for `c`; probe corpus |
| `c` | all | topic id | REQ | per-topic mastery channel (12135, 12147–12150), confusions, threads, "Refresher" link |
| `kind` | all | `"sort"`/`"multi"`/`"order"` | REQ | anything else renders as sort (14196) |
| `t` | all | string | REQ | esc title |
| `key` | all | string | REQ | fmt; sort: "The one discriminator"; multi: "Sorting rule"; order: shown after checking. 12–59 words (median 27) |
| `a`, `bb` | sort | string | REQ | esc side labels |
| `items` | sort | `[[text, "a"/"b"], …]` | REQ | text fmt in play but esc in the missed list and feedback → plain text |
| `cols` | multi | `[{id, l}, …]` | REQ | `l` esc; 4–8 columns (median 6); the UI lays out ≤3 per row |
| `items` | multi | `[[text, colId, imgKey?], …]` | REQ | text fmt; `colId` must exist (`__cardioAudit.badMultiDrills`); optional `imgKey` shows `IMGS[imgKey].url` above the item (14211; 15 items in `dm_rhythm`) |
| `q` | order | string | REQ | fmt prompt |
| `items` | order | `[step, …]` in the **correct** order | REQ | fmt; pool shuffled at start (15441) |

Renderers: `viewDrill` 14183, `sortDrillHTML` 14217, `multiDrillHTML` 14198, `orderDrillHTML` 14251, `startDrill`
15438, `wireDrill` 15832–15881. Feedback = template sentence + `DRILL_WHY[id][itemText]` (15845–15848, 15860–15862).
Counts: 26 drills — sort 15 × 12 items (180; sides balanced 4/8 to 8/4), multi 8 × 18–21 items (151; 2–5 items per
column, median 3), order 3 × 6 steps (18). Per topic 0–2 (median 1); f1, f2, c3 have none. `dr4` (GPA vs MPA) is filed
under c2 although its content was moved to c3 by the split.

Examples: sort (7087–7094) `{id:"dr2",b:"hf",c:"h1",kind:"sort",t:"Systolic (HFrEF) vs Diastolic (HFpEF) Failure",a:"HFrEF — systolic",bb:"HFpEF — diastolic", key:"One number settles it: the <b>ejection fraction</b>. …", items:[["Ejection fraction below 40%","a"],["Ejection fraction 50% or above","b"],["S3 gallop","a"],["S4 gallop","b"], …]}` · order (7131–7139) `{id:"dr8",b:"ihd",c:"i2",kind:"order",t:"Build the MI Timeline", q:"Put the histological stages of a myocardial infarct into the correct order, earliest first. …", key:"The order is fixed because it is ordinary wound healing: …", items:["Wavy fibres, no inflammation (1–4 hours)","Coagulative necrosis, nuclei lost (4–24 hours)", …]}` · multi (11672) `{id:"dm_cmy",kind:"multi",c:"n2",t:"Cardiomyopathies: match structure to physiology",key:"Dilated is weak and large; …",cols:[{id:"dcm",l:"Dilated"},{id:"hcm",l:"Hypertrophic"},{id:"rcm",l:"Restrictive"},{id:"arvc",l:"Arrhythmogenic RV"}],items:[["Four-chamber dilation with low ejection fraction","dcm"], …]}`

### 1.17 DRILL_WHY — 15453–15831

`DRILL_WHY[drillId][itemText] = why`, nested by drill because the same text means different things in different drills
(15445–15452). Keys must equal `items[i][0]` exactly (for order drills, the step string). `__cardioAudit` requires no
orphan keys and a why for every sort/multi item (18851–18857); PLAN P3.2 adds order steps ("why this step sits here")
and ≥8 words each. Cardio: 23 drills, 331 notes, 6–27 words (median 14); 0 of the 18 order steps; 7 notes under 8
words. Example (15469): `"Ejection fraction below 40%":"Ejection fraction measures the share of blood expelled per beat, so a low number is a direct statement that contraction has failed."`

### 1.18 PATH (the stage spine) — 7180–7222

| Field | Type | Req | Notes |
|---|---|---|---|
| `id` | string | REQ | the diag stage **must be `"p0"`** (`finishSet` hard-codes `S.stage["p0"]`, 15426) |
| `kind` | `"diag"`/`"unit"`/`"final"` | REQ | the final **must be the last element** (`finishSet` 15429, `currentStage` 12608) |
| `mins` | number | diag/final REQ, unit DER | diag 5, final 45 hand-set; unit = Σ topic mins + 6 × topics (19195–19199) |
| `topics` | topic id[] | REQ for unit | 1–3; every topic in exactly one unit (the split had to push c3 into s9, 9020–9022) |
| `t` | string | REQ | esc; 2–6 words |
| `d` | string | REQ | plain text (esc in the path view, raw in the plan row 13114); 12–62 words |

Behaviour: `diag` = one random rapid item per topic (`openStage` 13254–13257, `diagSet` 13276). `unit` = read every
topic (dwell ≥ `max(45 s, 0.35 × mins × 60)` and ≥70 % scrolled, 15292–15316, or a grid check) → stage quiz from
`stageQs` (own questions minus the reserved quarter, topped up to ≥5 from earlier stages, 12558–12578), done at ≥90 %
answered and ≥75 % right (15431–15433) → rapid run over the stage's topics (15939). `final` = 40 questions weighted to
reserved, weak and unseen items (13294–13312), done at ≥80 % (12605–12607). Cardio: 14 stages (1 diag, 12 unit,
1 final); unit minutes 14–52; stage checks hold 7–10 own questions per topic (median 7).
Examples (7181–7185, 7220–7221): `{id:"p0", kind:"diag", mins:5, t:"Five-minute triage", d:"One quick recall item per topic, before you study anything. …"}` · `{id:"s1", kind:"unit", mins:38, topics:["f1","f2"], t:"Stage 1 — Foundations", d:"How cardiac muscle is built, why the vessel wall has three layers, and the embryology behind every congenital lesion."}` (the 38 is overwritten to 27 at load) · `{id:"pf", kind:"final", mins:45, t:"Final simulation", d:"Forty questions, interleaved across the whole block and weighted towards everything you have got wrong. …"}`

### 1.19 VISUAL_GUIDES and TOPIC_MEDIA — 11145–11180

`VISUAL_GUIDES[topicId] = [title, [head, body], [head, body], [head, body]]` — title esc (2–4 words), head esc (1–5
words), body fmt (3–10 words). Rendered by the `vis` row (`visualGuideHTML` 13416–13423) and as the review grid inside
`deepReviewHTML` (13774–13782), which appears under practice explanations, drill feedback and rapid verdicts.
`TOPIC_MEDIA[topicId] = {fig?, img?}` supplies the picture for both; `fig` wins, `img` is used only when there is no
`fig` (so in the 12 topics with both, the image is never shown there). Counts: 21 guides × 3 cards; TOPIC_MEDIA 21
(fig 7, img 2, fig+img 12).
Example (11147, 11171): `f2:["Fetal flow map",["Umbilical vein","Highest-oxygen fetal blood heads toward the liver."],["Foramen ovale","Right atrium to left atrium, bypassing lungs."],["Ductus arteriosus","Pulmonary artery to aorta; prostaglandin keeps it open."]]` and `f2:{fig:"fetalcirc"}`.

### 1.20 SEXP (self-explanation MCQs) — 9779–9855, `attachSexp` 9856–9865

A clean block writes the row in place: `["sexp", {id, q, o:[4], a, why}]`.

| Field | Req | Rendering / constraint |
|---|---|---|
| `id` | REQ | unique `sx_<name>`; `S.sexp[id]` stores the pick |
| `q` | REQ | esc; 10–23 words (median 16.5) |
| `o` | REQ | fmt; 4 lines of *reasoning*, not bare answers; 8–27 words (median 14) |
| `a` | REQ | index; **options are not shuffled by the engine**, and all 10 cardio items have `a:0` (a positional cue) — vary it |
| `why` | REQ | fmt + autoGloss, shown after the pick; 71–94 words (median 80) |

Renderer `sexpHTML` 13888–13899, `wireSexp` 15100–15103; a mastery channel at weight 1.4 per answered item, chance-
adjusted for 4 options (12156–12158, 12168). Cardio: 10 (p1 p2 a1 i1 h1 n1 c1 m1 d1 f3); 11 topics have none.
Example (9789–9795, truncated): `p2:{id:"sx_wide", q:"A tachycardia has a QRS of 150 ms. Which reasoning correctly narrows it down?", o:["A wide QRS means the impulse did not travel down the fast His–Purkinje system, so it either started in ventricular muscle or took an abnormal route", "A wide QRS means the ventricle is hypertrophied, …", …], a:0, why:"The QRS measures how long the <b>ventricles</b> take to depolarise, …"}`

### 1.21 Concept tags — CONCEPT_TAGS 19291, Q_TAGS 19298, R_TAGS 19430, CONCEPT_HOME 19592, DRILL_TAGS 19650, TAG_LABELS 14286

| Structure | Shape | Constraint | Consumed by | Cardio |
|---|---|---|---|---|
| `CONCEPT_TAGS` | string[] | closed vocabulary, kebab-case; block-specific | `applyConceptTags` 19560 | 30 |
| `Q_TAGS` | `{qid: [tag…]}` | 1–3 tags from the vocabulary, chosen by the reasoning the item demands, not by its topic (19282–19290) | `applyConceptTags` → `q.tags` | 204 (103 one, 92 two, 9 three) |
| `R_TAGS` | `{ix: [tag…]}` | keyed by array **index** (fragile: any insertion re-tags everything after it) | → `r.tags` | 240 (161 one, 79 two) |
| `CONCEPT_HOME` | `{tag: {l, t, f, h, also?:{t,h}}}` | `l` label (esc); `t` topic; `f` FIGS key or `""`; `h` exact heading text (tags stripped) of a live `["h",…]` row in `t`; `also` a second section | `conceptThreads` 19682, `threadsHTML` 19764; checked by `verifyConceptHomes` 19660 (console warning only) | 30 (5 with `also`; `reentry` has no figure) |
| `DRILL_TAGS` | `{drillId: [tag…]}` | 1–2 tags | threads | 26 |
| `TAG_LABELS` | `{tag: label}` | 1–6 human words; one per vocabulary term | `rfCatHTML` 14300 (rapid category chip) | 30 (1–4 words) |

Density: 5–44 tagged items per tag (median 20), spanning 2–12 topics (median 3). A tag only makes a useful thread if
it crosses ≥2 topics; a tag covering ≥80 % of the items of the only topics it lives in is shown as "another name for
these topics" (19715–19734). The self-test threads hook seeds the cardio tag `"infarct-timeline"` (19838).
Example (19601): `"heart-sounds":{l:"The heart sounds",t:"p1",f:"heart_sounds",h:"The heart sounds, and what each one means"},`
Other one-line examples: `CONCEPT_TAGS = [ "preload-afterload", "starling-contractility", "pv-loop", … ]` (19291) · `Q_TAGS`: `q102:["cardiomyopathy-structure","action-potential"],` (19302) · `R_TAGS`: `3:["drug-side-effect"],` (19434, key = ix) · `DRILL_TAGS`: `dr2:["hf-loop","cardiomyopathy-structure"],` (19651) · `TAG_LABELS`: `"preload-afterload": "Load and resistance",` (14287).

### 1.22 Q_DIFF and Q_DIFF_R2 (difficulty rubric) — 19202–19278

Rubric (19205–19209): **1** = one retrieval answers it and the distractors fall to that same fact; **2** = two chained
retrievals, or one real discrimination against a close differential; **3** = a multi-step chain where at least one
distractor is a genuine competing mechanism that fails only on physiological reasoning. Stem length is not difficulty.
`Q_DIFF` rates all 204; `Q_DIFF_R2` (21 overrides) wins. Gate (AUDIT P3.2): level 1 ≥25 questions and no level above
55 %. Cardio final: 38 / 111 / 55 (18.6 % / 54.4 % / 27.0 %). Consumers: "Hardest first" (13967, 14007), difficulty
tag (14140), attempt history (15374), the transfer signal that needs ≥2 attempts at `d≥3` per topic (12173–12175).
Hard questions per topic: 0–8 (median 2); f1, h1, d2 have none.
Examples: `Q_DIFF = { q2:1, q59:1, … q1:2, q5:2, … q7:3, q8:3, … }` (19215–19237) · `Q_DIFF_R2 = { q20:2, q46:2, … q59:3, … q25:3, … }` (19245–19273).

### 1.23 Block-specific text that lives in the engine, not in data

`<title>` (1) and brand (624) "The Cardio Path"; the Path method card "Cardio comes back while you are doing Renal"
(13224); CSS accent tokens (20–21, 40–41, 54–55); the asset folder in every `IMGS.url`; self-test hooks seeded with
cardio values (`"infarct-timeline"` 19838, `n:21` 19975); and every cardio IIFE that looks items up by id (§5).

---

## 2. How the cardio content was layered

**Scale of the layering.** Of the 406 body rows that render, 18 come from a literal that is still live (f3) and 23 are
one-token rows that happen to be identical in the dead literal and its replacement. 19 of the 21 topics had their
literal body replaced wholesale by `REWRITE.<id>` (≈11,350 literal words are dead code at 4521–5478; only `t`, `sub`,
`pretest`, `grid` and metadata survive from those objects). The literal held 61 of the 204 questions, 12 of the 26
drills and 8 of the 44 images. Row provenance at runtime (rowattr.json):

| Step that first produced the row | Rows | Words |
|---|---|---|
| f3 literal (5512) + token rows from the dead literal | 41 | 1,359 |
| REWRITE batches 1–4 (applyRewrite 5749, 8030, 8628, 8772) | 175 | 11,388 |
| REWRITE batch 5 + top-ups (topUps 8927) | 53 | 3,532 |
| splitVasculitis (c3 created, 8960) | 9 | 975 |
| TOPUP (9085, 9102) | 9 | 1,167 |
| trimLong pointer, restoreAntithrombotics, E-series, table fixes (9035–9666) | 42 | 2,909 |
| attachSexp (9856) | 9 | 1,459 |
| treesToTables, shuntsToTable (11018, 11122) | 5 | 529 |
| vis auto-insert (11181) | 21 | 21 |
| placement IIFEs (enrich, placeImages/3/4, fixFigurePlacement, addGuyton, placeWhy, P4 figure placements) | 42 | 313 |
| **Total** | **406** | **23,652** |

**Mechanisms, what each changed, and the rule a clean source satisfies directly.** Counts are from `ledger.json`
(diff of the runtime state before and after each step).

| # | Mechanism (lines) | What it changed | Generic rule the new block's source must already satisfy |
|---|---|---|---|
| 1 | `enrich` 5594 | +7 rows in d1/d2 (figures, palaces) | Every figure or scene a topic relies on is written into that topic's body at its place. |
| 2 | `REWRITE[topicId] = [body rows]` + `applyRewrite`, `applyRewrite2/3/4` 5624–8774 (each apply sets `t.body = REWRITE[t.id]`) | replaced 19 bodies (was 344–858 words each) | Author each topic body once, final. Prose explains the mechanism first; tables summarise after (5619–5623). Batch 2 was calibrated to 420–850 words (7933–7934); the final bar is ≥770 (§4). |
| 3 | `topUps` 8927 | +figures (starling, jvp) and calls in p3, n1, m1, a2; re-applied batch 5 | If the prose describes a graph, draw it and place it under the heading. A topic short of the bar gets a worked explanation, not filler (comment 9092). |
| 4 | `splitVasculitis` 8960 | c2 (1,258 words, ten diseases) split into c2 + c3; re-homed 1 question and 9 rapid items by regex; pushed c3 into PATH | One topic ≈ one organising idea; split before ~2,000 words. Every item's `c` is the topic that teaches it. Every topic sits in exactly one unit stage. |
| 5 | `trimLong` 9035 | removed setup prose (v1) and a lead-to-territory section duplicated in i1 and i2 | No throat-clearing openers. Each concept has one home; the other topic gets a one-line pointer. |
| 6 | `TOPUP[topicId] = [rows]`, `applyTopups/2` 9064–9107 (pushed to the end of the body) | +9 rows (why, call) in 6 topics | Every topic has ≥1 `why` and enough worked explanation to meet the word floor. |
| 7 | `fixFigurePlacement` 9309 | moved `shunts` out of f2, placed `fetalcirc`; removed a duplicate `pvloop` from p3 | A figure appears in the topic that introduces it, after a lead-in, and not duplicated elsewhere. |
| 8 | `restoreAntithrombotics` 9324 | +9 rows: the antithrombotic tables `REWRITE.d1` had silently dropped | A rewrite must keep blueprint coverage: check every objective still has a home after any edit. |
| 9 | E-series: `addHaemodynamics` 9360, `addEcgPatterns` 9386, `addTumoursAndCmExtras` 9402, `addCongenitalAssociations` 9422, `addVascularLesions` 9450, `addSmallGaps` 9471, `addAxisAndPressors` 9644 | +30 rows of blueprint gaps | Map the whole Step 1 blueprint for the block to headings before writing; no in-scope objective without a teaching home. |
| 10 | `fixShockTable` 9519, `fixChemoreceptors` 9531 | corrected one table cell each | State exceptions inside the rule they qualify (neurogenic shock is warm but not tachycardic; central chemoreceptors sense CSF pH). No oversimplified "always". |
| 11 | `useOrphanedAssets` 9546 | re-placed a palace and two images that no body showed any more (+3 rows in d1, i2) | Every defined asset is referenced. Lint for unreferenced `PALACE`/`IMGS`/`FIGS` keys. |
| 12 | `trimOverweighted` 9565 | written because "diabetes protects against AAA" appeared 4 times (9564); a no-op at this snapshot (0 matching rows remain before it runs) | Teach a fact once per block (questions and rapid items may retest it). |
| 13 | `fixQuestions` 9490, `moreQuestionFixes` 9580 | q101 re-filed to i2; q114 key contradicted stem and teaching; q5 stem handed over the answer; q7 note relied on a rhythm the stem never gave; q26 option "Amiodarone with caution" was not a real choice and its note was wrong; q36 stem described the pathognomonic cell (a vocabulary lookup) | Key agrees with the stem and the body. The stem never names the answer or its pathognomonic descriptor. Every fact a note or explanation relies on is in the stem. Options are plain answer choices with no hedging qualifiers. |
| 14 | `rebalanceMinutes` 9617 → `deriveMinutes` 19170 | hand-set minutes (57–160 wpm, 2.8× spread) replaced | Never hand-set `t.mins` or unit `p.mins`; they are derived from words (spread now 1.14). |
| 15 | `addGuyton` 9635 and the P4 placements `placeCmyGeometry` 18964 … `placeArchDeriv` 19148 | +10 figure rows | A figure is placed directly under the heading that promises it and before the table that restates it; `after()` silently appends to the end when its anchor misses (AUDIT-PLAN §5), so clean source has no anchors at all. |
| 16 | `placeImages` 5871, `placeImages3` 5982, `placeImages4` 18867 | +29 image rows (8, 7, 14); restored the biopsy the c2 rewrite lost; the FMD image was once stranded at the end (18904–18907) | Every photograph sits beside the prose that describes it. |
| 17 | `placeWhy` 18927 | +2 why rows (i1 lost its prompt to trimLong, c2 to the split) | Every topic has ≥1 `why` asking the single most examinable "why" of the topic. |
| 18 | `SEXP` + `attachSexp` 9779–9865 | +9 sexp rows | A topic's `sexp` is written in place, immediately before its closing `why`. (Cardio reached 10/21; aim for 21/21, §4.) |
| 19 | `repairDrills` 9673 | dr4 sorted features shared by GPA and MPA; dr11 filed amlodipine as symptom relief | Each sort item belongs to exactly one side; shared features are excluded; the `key` names the one discriminator and is factually exact. |
| 20 | `DRILLS2` 9704–9770, `DRILLS.push` 11651 | +6 sort drills for topics with none; +8 multi drills | Every topic has ≥1 drill; each high-yield family also gets a multi-way drill (4–8 columns, image items where recognition is the skill). |
| 21 | `QS2` 8047, `QS3` 9913, `QS4` 10205, `QS5` 10475, `QS.push(adv…)` 11185, `NBME_EXPANSION` 11202 | +24, +21, +20, +30, +8, +42 questions; QS5 was "levelling every topic to at least seven items" (10472) | Write the full bank per topic up front: ≥9 questions (a single-topic stage check stays self-contained only with ≥5 non-reserved, i.e. ≥6 questions, 12558–12578), NBME-length vignettes with age, vitals, an exam paragraph and 2–3 facts that do not change the answer (8034–8038, 9906–9911), ≥2 at difficulty 3. |
| 22 | `dropDuplicates` 8042 | removed q3, q4 (q59/q60 test the same two facts better) | No two questions test the same pair of facts; lint near-duplicate stems and keyed answers within a topic. |
| 23 | `NB_WHY[qid][decoyText] = note` 11257 (replaced 168 template notes) | "`<decoy>` does not account for the stem's decisive findings" | No template notes. Each wrong-option note says what that option would be the answer to and which fact in this stem rules it out. |
| 24 | `QDEPTH[qid] = {w:{authoredIndex: note}, ef?, ei?, et?}` + `applyQDepth` 7774–7930 | 24 questions: `w` rewritten, 17 visuals attached | Wrong-option notes explain rather than assert; attach a visual only where it helps this stem. |
| 25 | `QDEPTH2[qid] = [[optionText, note], …]` + `applyQDepth2` 9117–9300 | 69 notes moved, keyed by option text | Per-option data is keyed by option text wherever the engine allows (index-keyed `q.w` is remapped by `permuteOptions`); never annotate the keyed option. |
| 26 | `placeXanthomaEf` 11484, `placeSecondaryHtnEf` 11493, `placeP48Visuals` 11501, `placeP48r2Visuals` 11641, `fixQ198` 11138 | 81 `ef/ei` changes (80 attached, 1 dangling `ef` removed); q5 moved off `fetalcirc`, which printed one of its distractors (11510); q42 and q59 moved to figures that print the missing treatment step and q34 left bare, because their photographs only confirmed a diagnosis the stem had already given (11612–11622) | Attach `ef/ei` only when the visual answers **this** stem, checked line by line against the artwork; never the topic default; never a visual that shows a distractor as if it were the answer; every key must resolve. |
| 27 | `RAPID_X` + `applyRapidX` 7227–7709 | `x` set for 232 items (longer text wins; fallback was a bare bold answer) | Every rapid item carries its `x` inline. |
| 28 | `explainTheAnswer` 7716 | 22 `x` rewritten: they named a true adjacent fact | `x` makes the keyed answer follow from a mechanism; a true neighbouring fact, an equation or a mnemonic is not an explanation. |
| 29 | `fixDeadDistractors` 9890, then `RAPID_OPT_SWAP` 16289 | 4 hedges replaced, then 34 weak or throwaway distractors replaced (some of the first fix's replacements again) | No hedge or throwaway distractor ever (§3 D). |
| 30 | `RAPID_OPTS`, `RAPID_W`, `applyRapidFive` 16025–18804 | all 240 items: 3 → 5 options, 960 why notes | Author 5 options and a why for each of the 4 wrong options, inline, keyed by option text. |
| 31 | `permuteOptions` 18805 | shuffles options, pretests, grids | Authoring keyed-first is fine; per-option data by text; `sexp` is not shuffled, so vary its `a`. |
| 32 | `treesToTables` 11018, `shuntsToTable` 11122, FIGS redraws 10888/10957/11069 | 3 "decision tree" figures and one "shunt" figure swapped for tables; murmurs, lipid, tof redrawn | A lookup is a `t` table. A figure must draw the mechanism (shapes on a timeline, drugs on the step they block, anatomy), never text in boxes. |
| 33 | `VISUAL_GUIDES` + auto-insert 11145–11182 | +21 vis rows | Every topic has one visual guide row, written where it belongs. |
| 34 | `CRED` + `applyCredits` 6078, `applyCreditsLate` 8472 | 22 then 8 images re-credited from the Commons API | Every image carries author, licence (+URL) and source URL, verified against the source, never typed from memory (6004–6008). |
| 35 | `Q_DIFF`, `Q_DIFF_R2`, `applyQDiff` 19202–19278 | 116 `d` values changed (5/72/127 → 38/111/55) | Rate difficulty on the rubric when the item is written (§1.22). |
| 36 | `Q_TAGS`, `R_TAGS`, `applyConceptTags`, `verifyConceptHomes` 19291–19681 | tags on 204 + 240 items | 1–3 tags per item from a closed vocabulary; every tag has a home heading that exists. |
| 37 | Inline audit edits in the literals (P2.2–P2.12 comments, e.g. 6409, 6460, 6822) | option-length balancing, rewritten `e`/`w` | Keyed option not conspicuously longest; distractors at matching specificity; the keyed option never carries its own explanation. |
| 38 | `tagEverything` 12117, `migrateRapidKeys` 11957 | ids from question-text hashes | Never change a published rapid question's text; append new rapid items at the end. |

---

## 3. The quality bar

Sources: PLAN-2 §7 (the bar) and §8 (contracts); AUDIT-PLAN §6.1 (the content standard) and §5; the gate's probe
(`probe2.js`) and `check_plan2.py`; the page's own `__cardioAudit()` (18827–18859) and `?selftest=1` (19956–20054);
the audit docs `P1-RAPID5-AUDIT.md`, `P2-QE-AUDIT.md`, `P2-RAPID-AUDIT.md`. "Cardio now" is measured on the snapshot;
✔ = met, ✘ = not yet met (the PLAN-2 phases that fix it are still open).

**The single test** for every explanation-type text (PLAN-2 §7; AUDIT-PLAN §6.1): *with only this text, could a student who
picked the wrong option see why it tempted them and why it is wrong, and could they pick the keyed option next time for
the right reason?* An explanation makes the keyed answer **follow** from the stem: mechanism first, then the
discriminating feature, then (optionally) the exam pattern.

### A. Prose register (all text)
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| A1 | 10th-grade register, causal chain left in ("because X, therefore Y"); no bullet fragments; no flashcard phrasing | review; heuristic Flesch–Kincaid ≈ grade 10–12 | heuristic FK: `p` 11.1, `steps` 10.9, `r.x` 10.3, `q.w` 11.4, `q.e` 12.5, `why` 13.6, `r.w` 17.0 (each note is one ≈34-word sentence) |
| A2 | Forbidden patterns found by the audits: explanation opens or closes with study advice or an exhortation; a mnemonic as the explanation; an equation (`A + B = C`) as the explanation; a restatement of the option; a true adjacent fact; a slash-laden list; a colon-headed fragment; a bare formula without the principle named or units reconciled; a drug or finding the stem never mentions; ALL-CAPS shouting in notes | review (P2-QE-AUDIT, P2-RAPID-AUDIT reasons) | ✔ after the audits |
| A3 | Bold marks a term, never a clause or sentence: each bold span ≤8 words (fmt demotes longer `**` to a soft highlight); ≤3 `**` spans per string; the explanation carries 1–3 bolded "term anchors" | regex on `**…**` and `<b>…</b>` | ✘ 62 `**` spans >8 words, 36 strings with >3, 28 `<b>` spans >8 words |
| A4 | British spelling, used consistently in the file: haem-/-aemia, oedema, ischaemia, oesophagus, paediatric, tumour, manoeuvre, centre, colour, fibre, litre, grey, favour, neighbour, titre, gynaecomastia, diarrhoea, dyspnoea, orthopnoea, ageing, -ise/-isation. Deliberate international exceptions: **fetal** (55 uses, never "foetal") and **sulfa/sulfonamide/sulfate** | regex census (0 American forms of the British words in content) | ✔ (only "discoloration" appears in both spellings, 2 each) |
| A5 | US clinical units: mg/dL (35 uses, no mmol/L), mEq/L, "mm Hg" with a space (76 vs 9 "mmHg"), °C | regex | ✔ mostly |
| A6 | Capitals only for the stem qualifier the item turns on ("Commonest CYANOTIC…", "LEFT", "SINGLE"), never in explanations | review | ✔ |

### B. Topic bodies
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| B1 | Mechanism explained in prose before any summary table; one organising idea per topic | review | ✔ |
| B2 | Every in-scope blueprint objective has a heading home; no concept taught in two topics | coverage lint | ✔ after E-series |
| B3 | Body words 770–2,100 (split above); `t.mins` derived | `deriveMinutes` count | ✔ 773–2,061 |
| B4 | ≥1 `why` (self-test `topicsWithoutWhy == []`); answer 78–144 words | count | ✔ |
| B5 | ≥1 visual row of `img/f/vis/palace` (`__cardioAudit.topicsWithoutVisual`) | audit | ✔ |
| B6 | Every visual placed under the heading or paragraph that promises it, before the table restating it | review | ✔ |
| B7 | Every glossary term reachable from some topic (self-test `glossaryNeverLinked` ≤3; aim 0) | render + collect `.gterm` | 3 unlinked |
| B8 | Topic `sub` present; `exam == yld`; yield axis informative (P3.1: `exam=="hi"` on ≤ ~70 % of topics) | lint | ✔ 15 hi / 6 mid |
| B9 | A grid on every topic, shuffled; 10–16 items with ≥6 true and ≥3 decoys | lint | ✔ |

### C. Practice questions
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| C1 | 5 options, no duplicates (`__cardioAudit.shortQuestionOptions/dupQuestionOptions`) | audit | ✔ |
| C2 | Keyed option not >1.35 × the longest other (self-test `longestOption.questions`) | length ratio | ✔ except q198 (1.36) |
| C3 | `e` names the keyed answer (a >4-letter keyword of the option appears in `e`; self-test `qExplanationMissesAnswer == []`); ≤120 words; rejects the runner-up distractor inside the explanation | regex + review | ✔ (22–118 words) |
| C4 | A note for every wrong option (`q.w`), stating why that option fails **this** stem — what it would be the answer to and which stem fact rules it out — not what the option is; >20 chars (probe `wMissing`); aim 12–45 words | probe + review | ✔ present; 60 of 816 notes <12 words |
| C5 | Stem never gives the answer away; every fact the notes use is in the stem; NBME style (age, vitals, exam paragraph, 2–3 irrelevant facts) for d ≥2 | review | ✔ |
| C6 | `q.c` = the topic that teaches the concept | review | ✔ |
| C7 | `ef/ei` only when the visual contains the keyed answer (probe `visAnsNot == []`) and answers this stem; PLAN P2.7: ≥175 of 204 with a visual (≈86 %) or a `NO-VISUAL` row with a reason (≥20 chars) | probe | ✘ 156 with visual, 19 not carrying the answer |
| C8 | PLAN P2.2 table `q.et`: 3–5 columns; first cell = option text exactly; one row per option; no empty cell; no identical rows; columns = the 2–4 features the stem turns on; never a "Correct?" column | probe `etMissing/etBad` | ✘ 0 of 204 |
| C9 | PLAN P2.2 bottom line `q.bl`: 8–28 words, one retrievable rule, names the answer | probe `blMissing/blBad` | ✘ 0 of 204 |
| C10 | PLAN P2.7 `q.pt`: as D8 | probe | ✘ |
| C11 | Difficulty on the rubric; level 1 ≥12 % (the AUDIT P3.2 floor was 25 of 204) and no level >55 % | self-test `tagging.difficulty` | ✔ 38/111/55 (18.6 / 54.4 / 27.0 %) |
| C12 | 1–3 concept tags each (`untaggedQuestions == 0`) | self-test | ✔ |
| C13 | Reuse identical wrong-option text across ≥2 questions of a topic where the same misconception is tested (lets `confusions()` name it) | lint | 12 of 21 topics |

### D. Rapid picks
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| D1 | Exactly 5 options; no duplicates; none empty or <2 chars | probe `ixNot5/dupOptions/emptyOption` | ✔ |
| D2 | No throwaway distractor: the probe's `THROWAWAY` regex (probe2.js line 30, quoted below this table) must not match any distractor; "No change" is allowed for direction items | probe `throwaway` | ✔ 0 |
| D3 | Each distractor is the classic confusion partner (neighbouring structure, same-class drug with the opposite property, other layer or side, look-alike tracing, other time window), same grammatical form and similar length; never a hedge, a different category from what the stem asks, a near-duplicate of another option, or a term from another organ system. Graded by GPT (`codex_tools.py grade-rapid`); a throwaway blocks | GPT grade + review | ✔ 0 throwaway |
| D4 | Keyed option not >1.4 × the longest distractor | probe `longest` | ✔ 0 |
| D5 | `r.w` for all 4 wrong options, keyed by option text, 12–60 words (gate; §7 says 12–45): names what makes the option tempting, then the fact that kills it; ≥3 content words (≥4 letters) that appear in neither the option nor the question | probe `wMissing/wRestating` | ✔ (23–44 words, 0 restating) |
| D6 | `x` makes the keyed answer follow (mechanism), house length ≈25–45 words for rewrites (P2-RAPID-AUDIT); never <14 words while restating the answer (self-test `rapidRestatementCandidates == []`) | self-test + review | ✔ gate; 161 of 240 are 9–24 words |
| D7 | Pinned visual (`RAPID_MEDIA`) contains the keyed answer (a ≥4-letter keyword of the answer in the figure's text nodes + caption, or the image's labels + look + title) | probe `answerNotOnMedia == []` | ✘ 59 |
| D8 | PLAN P1.8 point `r.pt`: `hl` = 1–3 strings (≥3 chars) found verbatim in the figure's `<text>` nodes or the image's annotation labels; `say` = 8–60 words, starts with where to look, ends with why it settles the item, names the keyed answer. If the figure lacks the answer, add it to the figure (labelled row, arrow, small answer panel in the house SVG style), re-pin, or draw a new figure | probe `pointMissing/pointNoMatch/pointSayMissesAnswer/pointSayBand` | in progress |
| D9 | ≤ ~4 % of items without a visual (P1.9: ≤10 of 240), each bare item with a `NO-VISUAL` row and a reason | probe `withoutMedia` | ✘ 29 |
| D10 | ≥1 rapid item per topic (diag); ≥8 per topic (self-test `rapidPerTopic` floor from AUDIT P1.8) | count | ✔ 8–22 |
| D11 | Category chip: `tags[0]` has a `TAG_LABELS` entry of 1–6 words | probe `catChip` | ✔ |
| D12 | The question text is final before release (ids and every map key hang off it) | process | — |

D2's regex, applied to the tag-stripped text of every non-keyed option (probe2.js line 30):
```
/^(none|neither|both|either|all of the above|none of the above|any of the above|it does not|it doesn't|there (are|is) (none|no)\b|not applicable|nothing|n\/a|unknown|cannot be determined)\b/i
```

### E. Images and image spot
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| E1 | ≥1 annotation (`unannotatedImages`), 1–12 callouts, labels 10–60 words of causal prose (probe `labelWordsOut`) | probe | ✔ (1–8, 11–56 words) |
| E2 | Outlines: largest ≤15 % of the frame, all outlines plus inset boxes ≤35 %, nothing filled (no `sh`), every finding left visible, each outline the smallest form that contains its finding; not degenerate (area ≥0.2 % and centre inside the frame) | probe `over15/over35/filled/degenerate` | ✘ 13 over 15 %, 8 over 35 % |
| E3 | PLAN P3.1: 4 wrong labels, each the classic look-alike, with a `ww` note ≥8 words (§7: 12–45) naming the visual feature that excludes it | probe `wrongNot4/wwMissing` | ✘ 3 wrong each; ww ✔ |
| E4 | Credit: `cred` + `by`/`lic`/`licurl`/`srcurl` from the source's API (self-test `imagesWithoutCredit == []`) | self-test | ✔ |
| E5 | Source image ≥800 px on the long side, or a `KEEP-SMALL` row with a reason ≥15 chars (P4.6) | probe `imgs.small` | ✘ 7 small per PLAN-2 P4.6 (not re-measured here) |
| E6 | Overlays designed by a second model and reviewed from the rendered PNG by the other model at ≥7/10 with no callout covering or missing its finding (P4.2–P4.5) | `codex_tools.py overlay/overlay-review` | not started |

### F. Figures
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| F1 | House style of §1.6 (class `dia`, role, aria-label, `ttl`, classes, tokens only, `<tspan class="b">`, 13 px baseline spacing, labels fit their boxes without the fitter) | lint + render | ✔ |
| F2 | Caption 20–110 words stating what the figure settles; overflow goes to `teach` (PLAN P5.2) | probe `capOver110/capUnder20` | ✘ 9 over 110 |
| F3 | Median glyph ≥9 px at 1280 px; lightbox ≥10 px and pannable at 400 px (P5.1) | probe `glyph` | ✘ ≈7.5–8.6 px per PLAN-2 §6 (not re-measured here; needs a browser) |
| F4 | A figure draws the mechanism; a lookup is a table; a figure that could push a student toward a distractor is not attached | review | ✔ after redraws |
| F5 | Every question or rapid item pinned to a figure finds its answer in the figure's text nodes or caption | probe | see C7, D7 |

### G. Drills
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| G1 | Sort: every item belongs to exactly one side; no shared features; `key` states the one discriminator; ≈12 items, sides roughly balanced | review | ✔ after repairs |
| G2 | Multi: every item's column exists (`badMultiDrills`), 2–5 items per column | audit | ✔ |
| G3 | A `DRILL_WHY` note for every item including order steps (keyed by step text: why the step sits here), ≥8 words, naming the discriminating feature rather than restating the side; no orphan keys (`drillWhyOrphanKeys`, `drillItemsWithoutWhy`) | audit + probe `itemsWithoutWhy` | ✘ 25 (18 order steps + 7 short) |
| G4 | ≥1 drill per topic (DRILLS2 rationale) | count | ✘ f1, f2, c3 have none |

### H. Pretest, grid, sexp, why
| # | Criterion | Check | Cardio now |
|---|---|---|---|
| H1 | Pretest: 2–3 per topic, 4 plain-text options, `why` 18–52 words; PLAN P3.3 `p.w[optionText]` ≥8 words for every wrong option | probe `pretest.wMissing` | ✘ 0 of 43 have `w` |
| H2 | Grid: see B9 | — | ✔ |
| H3 | `sexp`: 4 reasoning options, keyed position varied, `why` 70–95 words; one per topic | lint | ✘ 10/21 topics; `a` always 0 |
| H4 | `why`: question 12–21 words; answer 78–144 words, derivation not assertion | lint | ✔ |

### I. Structural validators that must stay empty/true
`__cardioAudit()` (18827–18859): `duplicateQuestionIds`, `badQuestionTopics`, `badRapidTopics`, `shortQuestionOptions` (<5),
`shortRapidOptions` (<3), `dupQuestionOptions`, `dupRapidOptions`, `unannotatedImages`, `topicsWithoutVisual`,
`brokenImageRefs`, `brokenFigureRefs`, `badMultiDrills`, `drillWhyOrphanKeys`, `drillItemsWithoutWhy` — all `[]` in cardio.
`?selftest=1`: `auditListsEmpty`, `viewFailures == []` (no "NaN", "undefined", "[object" on any view), `paceDays` exact for
2/3/5/7/10/14, `imagesWithoutCredit`, `qExplanationMissesAnswer`, `longestOption`, `rapidRestatementCandidates`,
`spotWrongNotes`, `glossaryNeverLinked`, `topicWpm.spread ≤1.35` (cardio 1.14), `tagging` (yield, difficulty, untagged),
`topicsWithoutWhy`, `rapidPerTopic`, `visuals`, and the extra hooks (`conceptThreads`, `errorTypes`, `fatigue`).
Plus: every `{{key}}` resolves in `GLOSS` (cardio has one that does not); every `CONCEPT_HOME.h` matches a live heading.

### J. Evidence rows the PLAN-2 gate expects (audit-doc conventions)
- `P1-RAPID5-AUDIT.md`: `| ix | NEW | why D4 is plausible (≥20 chars) | why D5 is plausible (≥20 chars) |`; bare items `| ix | NO-VISUAL | reason (≥20 chars) | |`; swapped distractors listed below each range's table with the reason and "why the new option tempts".
- `P2-QE-AUDIT.md` and `P2-RAPID-AUDIT.md`: `| id-or-ix | KEEP or REWRITE | one-line reason |`, one row per item, judged on the running page; a REWRITE row's text must differ from the baseline.
- `P2-TABLES-AUDIT.md`: `| id | discriminating column(s) | which row settles it and why (≥15 chars) |`, plus `NO-VISUAL` rows.
- `P4-IMAGES.md`: `| key | KEEP-SMALL or REPLACED | reason or source URL and licence (≥15 chars) |`.

---

## 4. Minimum cardio densities per topic (runtime, 21 topics)

The last column is the floor a new topic must match or beat: the cardio minimum, except where marked **engine** (the
engine needs more for the topic to be fully measurable) or *raised* (cardio's minimum is one outlier topic or zero).
The Median column is the target. Per-1000-word values let topics of different length be compared.

| Measure (per topic) | Min | Median | Max | Mean | Total | Per 1000 words (min / median) | Floor for a new topic |
|---|---|---|---|---|---|---|---|
| Body words | 773 | 1,001 | 2,061 | 1,126 | 23,652 | — | ≥770 (split above ~2,100) |
| Minutes (derived) | 7 | 9 | 18 | 10.2 | 215 | — | derived |
| Body rows | 13 | 18 | 31 | 19.3 | 406 | — | ≥13 |
| Headings `h` | 2 | 4 | 7 | 4.0 | 84 | 1.8 / 3.3 | ≥2 |
| Paragraphs `p` | 1 | 3 | 5 | 2.8 | 58 | 0.9 / 2.4 | ≥1 |
| Tables `t` | 0 | 2 | 5 | 2.0 | 43 | 0 / 2.0 | ≥1 *raised* |
| Steps | 1 | 1 | 3 | 1.2 | 26 | 0.5 / 1.1 | ≥1 |
| Call-outs | 1 | 2 | 6 | 2.4 | 51 | — | ≥1 (key 0–4, trap 0–2) |
| `why` blocks | 1 | 1 | 3 | 1.5 | 31 | 0.5 / 1.2 | ≥1 |
| `sexp` | 0 | 0 | 1 | 0.5 | 10 | — | **≥1 (engine: a mastery channel)** |
| Palace scenes | 0 | 0 | 2 | 0.33 | 7 | — | optional (cardio 1 per 3 topics) |
| Figures in body `f` | 0 | 1 | 4 | 1.3 | 28 | 0 / 1.05 | ≥1 *raised* |
| Figures visible incl. the `vis` block | 1 | 1 | 5 | 1.7 | 36 | 0.76 / 1.21 | ≥1 |
| Images in body `img` | 0 | 2 | 7 | 2.2 | 47 | 0 / 1.81 | **≥1 first placed here (engine: spot channel)** |
| Images first placed here (`IMGTOPIC`) | 0 | 2 | 7 | 2.1 | 44 | — | ≥1 |
| Visual rows (f + img + vis + palace) | 2 | 4 | 9 | — | — | — | ≥2 |
| `vis` guide | 1 | 1 | 1 | 1 | 21 | — | exactly 1 |
| Pretest items | 2 | 2 | 3 | 2.0 | 43 | 0.97 / 2.07 | ≥2 |
| Grid items (true / decoys) | 10 (6 / 3) | 12 (8 / 4) | 16 (12 / 6) | 12.1 | 254 | 5.8 / 12.0 | ≥10 with ≥6 true, ≥3 decoys |
| Glossary links rendered | 1 | 8 | 12 | 7.3 | 153 | 1.1 / 6.4 | ≥4 *raised* (cardio p10; only r1 has 1) |
| Cloze targets (Blank-out toggle) | 3 | 10 | 19 | — | — | — | ≥5 *raised* |
| Questions | 9 | 9 | 13 | 9.7 | 204 | 5.8 / 9.3 | ≥9 (engine needs ≥6 for a self-contained single-topic stage check) |
| Questions held for the stage check (non-reserved) | 7 | 7 | 10 | — | — | — | ≥7 |
| Questions at difficulty 3 | 0 | 2 | 8 | 2.6 | 55 | — | **≥2 (engine: transfer signal)** |
| Questions at difficulty 1 | 0 | 2 | 5 | 1.8 | 38 | — | ≥1 *raised* |
| Questions with a visual | count 4 · share 40 % | count 8 · share 78 % | count 10 · share 100 % | 7.4 | 156 | — | share ≥78 %; PLAN target ≈86 % (175/204) |
| Rapid items | 8 | 10 | 22 | 11.4 | 240 | 6.0 / 9.9 | ≥8 |
| Rapid items with a visual | count 6 · share 58 % | count 9 · share 90 % | count 17 · share 100 % | 10.0 | 211 | — | share ≥90 %; PLAN ≥96 % (≤10 bare of 240) |
| Drills | 0 | 1 | 2 | 1.2 | 26 | — | **≥1 (engine: drill channel)** |
| Drill items | 0 | 12 | 33 | 16.6 | 349 | 0 / 12.7 | ≥12 |
| Mastery channels present (questions, rapid, drill, grid, image, sexp) | 3 | 5 | 6 | — | — | — | **6 of 6** (the mastery ceiling is 0.78/0.87/0.94/0.98 for 3/4/5/6 channels, 12188–12192; cardio has all six in only 7 topics) |

Block-level ratios for scale (cardio): 21 topics · 12 groups · 14 stages · 204 questions · 240 rapid · 26 drills
(15 sort, 8 multi, 3 order; 349 items) · 44 images (149 annotations) · 31 figures · 59 glossary terms · 7 palace scenes
(46 cards) · 10 sexp · 43 pretest items · 254 grid items · 21 visual guides · 30 concept tags · 211 rapid pins.

Item-level size bands to match (medians in brackets): question stem 13–81 words (34), lead-in 3–19 (9), options 3–99
chars (33), explanation 22–118 words (86), wrong-option note 4–65 (22; aim ≥12); rapid question 3–14 words (6), option
2–48 chars (15), `x` 9–48 words (19; aim 25–45), `r.w` 23–44 (34); image label 11–56 (34), `look` 42–80 (58), `ww`
12–29 (21); figure caption 32–371 (74; bar 20–110); drill why 6–27 (14; bar ≥8); glossary definition 11–60 (22).

---

## 5. Clean-block checklist (engine gotchas that silently break a new block)

1. **Replace every cardio map and remove every cardio IIFE.** Dozens of IIFEs look content up by id: topics (`"f1"`,
   `"p3"`, `"d1"`, `"c2"`…: 5594–5618, 5871–6003, 8927–9700, 11018–11141, 18867–19162), questions (`q5`, `q7`, `q26`, `q36`,
   `q101`, `q114`, `q198`, `nb15`, `nb16`, `nb39`, the `EF`/`EI` maps at 11501–11650), drills (`dr4`, `dr11`). `Q_TAGS`,
   `Q_DIFF`, `Q_DIFF_R2` are keyed by question id, `R_TAGS` by array index, `DRILL_WHY`/`DRILL_TAGS` by drill id. If the
   new block reuses ids like `f1`, `q1`, `dr1` or simply has rapid items at index 0–239, these will inject cardio rows,
   re-tag, re-rate or overwrite the new content without any error.
2. `META.key` must be new: it namespaces saved progress, rapid ids and the cross-block hub. Shared keys (`step1.examDate`,
   `step1.hub.v1`) stay shared on purpose.
3. Every topic needs a `grid` (reading can only be credited through `wireGrid`), ≥1 rapid item (diag and stage runs), and
   membership in exactly one `unit` stage. The diag stage id is `"p0"` and the final is the last `PATH` element.
4. Write the `vis` row, `sexp` rows, figures and images in place; the auto-insert and the `after()` anchors are patch tools.
5. Author 5 rapid options and `r.w` inline (keyed by option text); leave `RAPID_OPTS/RAPID_OPT_SWAP/RAPID_W/RAPID_X` empty.
   `RAPID_MEDIA` (and the live `RAPID_POINT`) must still be maps keyed by the byte-exact, whitespace-normalised question text.
6. `q.w` is keyed by the authored option index (remapped at load); everything else per-option (`r.w`, `ww`, `p.w`,
   `DRILL_WHY`, `q.et` first cells) is keyed by exact option text. A text edit to an option orphans its note.
7. `sexp` options are not shuffled: vary `a`.
8. Plain-text fields (§1.11) must not contain tags; sort-drill items and pretest options are plain text; `IMGS.ww`
   and `q.et` body cells are raw HTML (no `**`); use `**term**` (not `<b>`) for the ≤3 testable terms per prose string so
   the cloze toggle can blank them.
9. `GLOSS` aliases must be the forms the bodies actually use; every `{{key}}` must exist; every term must be linked once.
10. `CONCEPT_HOME.h` strings must equal a heading in the named topic exactly (tags stripped); use Unicode punctuation in
    headings rather than entities so the match is literal.
11. Replace the block-specific engine strings in §1.23 and the self-test seed tag.
12. Never hand-set `mins`; never edit a published rapid question's text; append rapid items at the end.
