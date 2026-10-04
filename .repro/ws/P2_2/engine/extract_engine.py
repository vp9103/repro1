#!/usr/bin/env python
"""extract_engine.py -- cut the cardio page into the Repro-Endo engine (REPRO-PLAN.md task P2.1).

    python engine/extract_engine.py --src engine/base/cardio-source.html --out engine/base

Reads a FROZEN copy of cardio-path.html and writes four files into --out:

  shell.html    head, CSS, header, main and the empty <script> element, with the placeholders
                @@TITLE@@ @@A1@@ @@A2@@ @@A1_DARK@@ @@A2_DARK@@ @@SCRIPT@@ that build.py fills
  engine.js     the engine code only: every ENGINE / LITERALS region in file order, no content
  selftest.js   the page's own self-test (the __selftestExtra hooks and the ?selftest=1 block)
  REGIONS.json  every region of the page: name, class, action, anchor, lines, sha, statements

How regions are found. Each row of REGIONS below names an ANCHOR, an exact substring of the page.
Anchors are searched in order, each one after the previous match, never by line number. A region
runs from the line holding its anchor (or, when the anchor sits inside a /* */ or <!-- --> comment,
from the line where that comment opens) to the line before the next region. So the regions tile the
whole file with no gap.

How the script fails loud (exit 1, nothing written):
  - an anchor is missing, out of order, or two anchors land on the same line;
  - a region holds a top-level statement its row does not allow: every column-0 statement
    (declaration, IIFE, call, assignment) is matched against the row's `allow` patterns, so a new
    content map, patch IIFE or mutation that the table does not classify stops the extraction;
  - a literal substitution does not find exactly the expected number of occurrences;
  - engine.js would re-declare a global that build.py emits, or the shell lacks a placeholder.

Classes (REGIONS.json `class`): ENGINE generic code; LITERALS generic code that embeds cardio or exam
literals (ENGINE-MAP 1b); CONTENT cardio data (build.py emits the replacement globals from content/);
PATCH one-off IIFEs that mutate cardio content (dropped); MIXED engine and content in one region.
Actions: shell / engine / selftest (copied into that output), build (an engine declaration that
build.py now emits, so it is not copied), drop (content or patch; not copied).

The script is deterministic: same source bytes, same output bytes (no paths, no timestamps).
CRLF line endings in the source are read as LF (anchors and line numbers assume LF).
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path

CLASSES = ("ENGINE", "CONTENT", "PATCH", "MIXED", "LITERALS")
ACTIONS = ("shell", "engine", "selftest", "build", "drop")
PLACEHOLDERS = ("@@TITLE@@", "@@A1@@", "@@A2@@", "@@A1_DARK@@", "@@A2_DARK@@", "@@SCRIPT@@")

# Globals build.py emits ahead of engine.js (build.py content_js). engine.js must not declare them.
BUILD_GLOBALS = ("META", "GLOSS", "G", "PALACE", "IMGS", "FIGS", "BLOCKS", "QS", "RAPID", "DRILLS", "PATH",
                 "RAPID_MEDIA", "RAPID_POINT", "VISUAL_GUIDES", "TOPIC_MEDIA", "DRILL_WHY", "CONCEPT_TAGS",
                 "TAG_LABELS", "CONCEPT_HOME", "DRILL_TAGS", "Q_TAGS", "R_TAGS", "RAPID_X", "RAPID_OPTS",
                 "RAPID_OPT_SWAP", "RAPID_W", "SEXP", "QDEPTH", "QDEPTH2", "NB_WHY", "Q_DIFF", "Q_DIFF_R2",
                 "NBME_EXPANSION")

# Statements every ENGINE / LITERALS region may hold without listing them: function declarations and
# lower-case bindings. ALL-CAPS bindings (the file's convention for data maps), IIFEs, calls and
# assignments must be named in the row.
ENGINE_DEFAULT = (r"fn [\w$]+", r"var [a-z_$][\w$]*")

# (name, anchor, class, action, allow, note)
REGIONS = [
    # ------------------------------------------------------------------ page shell (HTML + CSS)
    ("html.head", '<!doctype html><html lang="en">', "LITERALS", "shell", [], "doctype, head, <title> (brand -> @@TITLE@@)"),
    ("html.p11-comment", "<!-- P1.1 fix, two defects", "ENGINE", "shell", [], "comment"),
    ("html.fonts", '<link rel="preconnect" href="https://fonts.googleapis.com">', "ENGINE", "shell", [], "Google Fonts links; opens the first <style>"),
    ("css.tokens", "/* ============================ TOKENS", "LITERALS", "shell", [], "design tokens; the block palette --a1/--a2 (light and two dark copies) -> placeholders"),
    ("css.base", "/* ============================ BASE", "ENGINE", "shell", [], "component CSS to the first </style>"),
    ("html.header", "<header>", "LITERALS", "shell", [], "header: brand (-> @@TITLE@@), #countdown, nav#modes, ring, #savedot"),
    ("html.main", '<main tabindex="-1">', "ENGINE", "shell", [], "#app mount point"),
    ("html.live", "<!-- P1.3 - screen-reader announcement channel", "ENGINE", "shell", [], "#live aria-live region"),
    ("css.v2", "ENGINE v2 COMPONENTS", "ENGINE", "shell", [], "second <style>: engine v2 components"),
    ("html.script-open", "<script>", "ENGINE", "shell", [], "the single <script>; @@SCRIPT@@ follows it in the shell"),

    # ------------------------------------------------------------------ content zone (cardio data, patches, load-time transforms)
    ("content.meta", "CARDIOVASCULAR — META, GLOSSARY, MEMORY SCENES, IMAGES", "CONTENT", "drop", [r"var META"], "banner + META (build.py emits META from content/meta.json)"),
    ("engine.exam-date", "/* The exam date is user-adjustable.", "LITERALS", "engine", list(ENGINE_DEFAULT) + [r"var EXAM_KEY", r"var EXAM"], "EXAM_KEY, EXAM_DEFAULT (literal date), parse/read/set, let EXAM"),
    ("engine.gloss-registry", "/* ---------------------------------------------------------------- glossary */", "ENGINE", "build", [r"var GLOSS", r"var G"], "const GLOSS = {} and G(); build.py emits both"),
    ("content.glossary", 'G("preload","Preload"', "CONTENT", "drop", [r"call G"], "cardio glossary terms"),
    ("engine.palace-registry", "/* ---------------------------------------------------------------- memory scenes */", "ENGINE", "build", [r"var PALACE"], "const PALACE = {}; build.py emits it"),
    ("content.palace", "PALACE.mi = {", "CONTENT", "drop", [r"set PALACE\.[\w$]+"], "cardio memory scenes"),
    ("engine.imgs-registry", "/* ---------------------------------------------------------------- images", "ENGINE", "build", [r"var IMGS"], "const IMGS = {}; build.py emits it"),
    ("content.images-1", "IMGS.mi_stages = {", "CONTENT", "drop", [r"set IMGS\.[\w$]+"], "cardio images, set 1"),
    ("content.glossary-2", "/* ---- glossary terms introduced by the depth rewrites ---- */", "CONTENT", "drop", [r"call G"], "cardio glossary terms, set 2"),
    ("engine.figs-registry", "CARDIOVASCULAR — FIGURES", "ENGINE", "build", [r"var FIGS"], "banner + const FIGS = {}; build.py emits FIGS"),
    ("content.figs-1", "/* ---------- 1. Wiggers diagram ---------- */", "CONTENT", "drop", [r"set FIGS\.[\w$]+"], "cardio figures 1-13"),
    ("content.figs-2", "/* ---------- Antiarrhythmic classes drawn ON the action potential", "CONTENT", "drop", [r"set FIGS\.[\w$]+"], "aaclasses, tof, drugtree, bugtree"),
    ("content.figs-3", "/* ---------------- Frank-Starling curves", "CONTENT", "drop", [r"set FIGS\.[\w$]+"], "starling, jvp, fetalcirc, guyton, axis"),
    ("content.figs-p41", "/* ---------------- P4.1 Cardiomyopathy geometry", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "cmy_geometry"),
    ("content.figs-p42", "/* ---------------- P4.2 Heart sounds", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "heart_sounds"),
    ("content.figs-p43", "/* ---------------- P4.3 AV block", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "av_block"),
    ("content.figs-p44", "/* ---------------- P4.4 Digoxin", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "digoxin"),
    ("content.figs-p45", "/* ---------------- P4.5 Shock", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "shock_table"),
    ("content.figs-p46", "/* ---------------- P4.6 Xanthoma types", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "xanthomas"),
    ("content.figs-p47", "/* ---------------- P4.7 Secondary hypertension", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "secondary_htn"),
    ("content.figs-p48-wall", "/* ---------------- P4.8r2 Vessel wall", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "vesselwall"),
    ("content.figs-p48-arch", "/* ---------------- P4.8r2 The arterial pole", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "archderiv"),
    ("content.figs-p18c", "/* ---------------- P1.8 part C: three small figures", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "figures for image-pinned rapid items"),
    ("content.figs-p19", "/* P1.9: 29 rapid items had no visual.", "CONTENT", "drop", [r"call Object\.assign\(FIGS"], "figures for rapid items without a visual"),
    ("content.blocks-1", "CARDIOVASCULAR — BLOCKS, part 1", "CONTENT", "drop", [r"var BLOCKS"], "BLOCKS literal: found, phys"),
    ("content.blocks-2", "CARDIOVASCULAR — BLOCKS, part 2", "CONTENT", "drop", [r"call BLOCKS\.push"], "athero, ihd, arrhy"),
    ("content.blocks-3", "CARDIOVASCULAR — BLOCKS, part 3", "CONTENT", "drop", [r"call BLOCKS\.push"], "hf, valve, inflam, vasc"),
    ("content.blocks-4", "CARDIOVASCULAR — BLOCKS, part 4", "CONTENT", "drop", [r"call BLOCKS\.push"], "hemo, drugs"),
    ("content.deep-dive", "CARDIOVASCULAR — DEEP DIVE ADDITIONS", "CONTENT", "drop", [r"set PALACE\.[\w$]+", r"call BLOCKS\.push"], "palaces drugsuffix/bugpairs; the congenital topic"),
    ("patch.enrich", "/* ---------- splice the new visuals and memory systems into existing topics", "PATCH", "drop", [r"iife enrich"], "splices figures/palaces into d1, d2"),
    ("content.rewrite-1", "CARDIOVASCULAR — DEPTH REWRITE, batch 1", "CONTENT", "drop", [r"var REWRITE", r"set REWRITE\.[\w$]+"], "REWRITE c2, i1, v1"),
    ("patch.applyRewrite", "/* ---------- apply the rewrites ---------- */", "PATCH", "drop", [r"iife applyRewrite"], "replaces topic bodies"),
    ("content.images-2", "CARDIOVASCULAR — REAL IMAGES, set 2", "CONTENT", "drop", [r"set IMGS\.[\w$]+"], "cardio images, set 2"),
    ("patch.placeImages", "/* ---------- wire the new images into the topics that describe them", "PATCH", "drop", [r"iife placeImages"], "places set-2 images"),
    ("content.images-3", "CARDIOVASCULAR — REAL IMAGES, set 3", "CONTENT", "drop", [r"set IMGS\.[\w$]+"], "cardio images, set 3"),
    ("patch.placeImages3", "/* ---------- place them, and restore the image the vasculitis rewrite dropped", "PATCH", "drop", [r"iife placeImages3"], "places set-3 images"),
    ("content.credits", "IMAGE CREDITS — author, licence and source", "CONTENT", "drop", [r"var CRED", r"set CRED\[\]", r"set CRED\.[\w$]+"], "CRED side table"),
    ("patch.applyCredits", "(function applyCredits(){", "PATCH", "drop", [r"iife applyCredits"], "CRED -> IMGS credit fields"),
    ("content.images-set4", "/* NEWIMAGESET4START */", "CONTENT", "drop", [r"set IMGS\.[\w$]+"], "cardio images, set 4"),
    ("content.questions-1", "CARDIOVASCULAR — QUESTIONS, RAPID PICKS, DRILLS, PATH", "CONTENT", "drop", [r"var QS"], "QS literal"),
    ("content.rapid", "RAPID PICKS — one line,", "CONTENT", "drop", [r"var RAPID"], "RAPID literal"),
    ("content.drills", "\n   DRILLS\n", "CONTENT", "drop", [r"var DRILLS"], "DRILLS literal"),
    ("content.path", "PATH — the sequential spine", "CONTENT", "drop", [r"var PATH"], "PATH literal"),
    ("content.rapid-x-1", "CARDIOVASCULAR — RAPID ONE-LINERS, batch 1", "CONTENT", "drop", [r"var RAPID_X"], "RAPID_X"),
    ("content.rapid-x-2", "CARDIOVASCULAR — RAPID ONE-LINERS, batch 2, and the apply step", "CONTENT", "drop", [r"call Object\.assign\(RAPID_X", r"set RAPID_X\[\]"], "RAPID_X batches"),
    ("engine.applyRapidX", "/* ---- apply: fill in any rapid item that has no one-liner", "ENGINE", "engine", [r"iife applyRapidX"], "E-T: r.x from RAPID_X (build.py emits RAPID_X = {})"),
    ("patch.explainTheAnswer", "/* ---- explanations that named a true fact instead of explaining the answer", "PATCH", "drop", [r"iife explainTheAnswer"], "overrides r.x for 22 cardio items"),
    ("content.qdepth", "CARDIOVASCULAR — DEEPER QUESTION WALK-THROUGHS", "CONTENT", "drop", [r"var QDEPTH"], "QDEPTH"),
    ("engine.applyQDepth", "(function applyQDepth(){", "ENGINE", "engine", [r"iife applyQDepth"], "E-T: merges QDEPTH (build.py emits QDEPTH = {})"),
    ("content.rewrite-2", "CARDIOVASCULAR — DEPTH REWRITE, batch 2", "CONTENT", "drop", [r"set REWRITE\.[\w$]+"], "REWRITE d2, a2, p3"),
    ("patch.applyRewrite2", "/* ---- apply batch 2 ---- */", "PATCH", "drop", [r"iife applyRewrite2"], ""),
    ("patch.dropDuplicates", "CARDIOVASCULAR — QUESTION BANK, batch 2", "PATCH", "drop", [r"iife dropDuplicates"], "removes q3, q4"),
    ("content.qs2", "const QS2 = [", "CONTENT", "drop", [r"var QS2", r"call QS2\.forEach"], "QS2 and its merge"),
    ("content.images-4", "CARDIOVASCULAR — REAL IMAGES, batch 4", "CONTENT", "drop", [r"set IMGS\.[\w$]+"], "cardio images, batch 4"),
    ("patch.applyCreditsLate", "/* P1.4 — these eight images are declared AFTER applyCredits()", "PATCH", "drop", [r"iife applyCreditsLate"], ""),
    ("content.rewrite-3", "CARDIOVASCULAR — DEPTH REWRITE, batch 3", "CONTENT", "drop", [r"set REWRITE\.[\w$]+"], "REWRITE c1, i2, m1, n1"),
    ("patch.applyRewrite3", "/* ---- apply batch 3 ---- */", "PATCH", "drop", [r"iife applyRewrite3"], ""),
    ("content.rewrite-4", "CARDIOVASCULAR — DEPTH REWRITE, batch 4", "CONTENT", "drop", [r"set REWRITE\.[\w$]+"], "REWRITE r1, n2, h1, a1"),
    ("patch.applyRewrite4", "/* ---- apply batch 4 ---- */", "PATCH", "drop", [r"iife applyRewrite4"], ""),
    ("content.rewrite-5", "CARDIOVASCULAR — DEPTH REWRITE, batch 5", "CONTENT", "drop", [r"set REWRITE\.[\w$]+"], "REWRITE d1, f2, p1, p2, f1"),
    ("patch.topUps", "/* ---- top-ups: add the missing figures and a little more prose ---- */", "PATCH", "drop", [r"iife topUps"], "splices figures, re-applies REWRITE"),
    ("patch.splitVasculitis", "CARDIOVASCULAR — final structural pass", "PATCH", "drop", [r"iife splitVasculitis"], "c2 -> c2 + c3, regex re-tagging"),
    ("patch.trimLong", "/* ---------- 2. trim the setup prose from the two remaining long topics", "PATCH", "drop", [r"iife trimLong"], ""),
    ("content.topup", "/* ---------- 3. top up the topics still short of the bar", "CONTENT", "drop", [r"var TOPUP"], "TOPUP"),
    ("patch.applyTopups", "(function applyTopups(){", "PATCH", "drop", [r"iife applyTopups"], ""),
    ("content.topup-late", "TOPUP.d1.push(", "CONTENT", "drop", [r"call TOPUP\.[\w$]+\.push"], "rows pushed after applyTopups"),
    ("patch.applyTopups2", "(function applyTopups2(){", "PATCH", "drop", [r"iife applyTopups2"], ""),
    ("content.qdepth2", "CARDIOVASCULAR — WRONG-ANSWER DEPTH, batch 2", "CONTENT", "drop", [r"var QDEPTH2"], "QDEPTH2"),
    ("engine.applyQDepth2", "(function applyQDepth2(){", "ENGINE", "engine", [r"iife applyQDepth2"], "E-T: QDEPTH2 option-text notes -> q.w (build.py emits QDEPTH2 = {})"),
    ("patch.panel-fixes", "CARDIOVASCULAR — PANEL FIXES", "PATCH", "drop",
     [r"iife (fixFigurePlacement|restoreAntithrombotics|addHaemodynamics|addEcgPatterns|addTumoursAndCmExtras|addCongenitalAssociations|addVascularLesions|addSmallGaps|fixQuestions|fixShockTable|fixChemoreceptors|useOrphanedAssets|trimOverweighted|moreQuestionFixes|rebalanceMinutes|addGuyton|addAxisAndPressors)"],
     "17 panel-fix IIFEs"),
    ("patch.repairDrills", "CARDIOVASCULAR — DRILL REPAIRS AND NEW DRILLS", "PATCH", "drop", [r"iife repairDrills"], ""),
    ("content.drills2", "/* ---- I8: six topics had no discrimination drill ---- */", "CONTENT", "drop", [r"var DRILLS2", r"call DRILLS2\.forEach"], "DRILLS2 and its merge"),
    ("content.sexp", "CARDIOVASCULAR — SELF-EXPLANATION CHECKPOINTS", "CONTENT", "drop", [r"var SEXP"], "SEXP"),
    ("engine.attachSexp", '/* attach each one just before the topic\'s closing "why" block', "ENGINE", "engine", [r"iife attachSexp"], "E-T: SEXP -> sexp rows (build.py emits SEXP = {})"),
    ("patch.fixDeadDistractors", "RAPID ITEMS — DISTRACTOR QUALITY", "PATCH", "drop", [r"iife fixDeadDistractors"], ""),
    ("content.qs3", "CARDIOVASCULAR — QUESTION BANK, batch 3", "CONTENT", "drop", [r"var QS3", r"call QS3\.forEach"], ""),
    ("content.qs4", "CARDIOVASCULAR — QUESTION BANK, batch 4", "CONTENT", "drop", [r"var QS4", r"call QS4\.forEach"], ""),
    ("content.qs5", "CARDIOVASCULAR — QUESTION BANK, batch 5", "CONTENT", "drop", [r"var QS5", r"call QS5\.forEach"], ""),
    ("content.fig-redraws", "FIGURE REDRAWS", "CONTENT", "drop", [r"set FIGS\.[\w$]+"], "murmurs, lipid redefined"),
    ("patch.treesToTables", "/* ---------- the three text trees become honest tables", "PATCH", "drop", [r"iife treesToTables"], ""),
    ("content.fig-tof", "/* ---------------- Tetralogy: the anatomy, not a sentence tree", "CONTENT", "drop", [r"set FIGS\.[\w$]+"], "tof redefined"),
    ("patch.shuntsToTable", "/* shunts was two paragraph boxes", "PATCH", "drop", [r"iife (shuntsToTable|fixQ198)"], ""),
    ("content.visual-guides", "/* One original annotated concept image per topic.", "CONTENT", "drop", [r"var VISUAL_GUIDES", r"var TOPIC_MEDIA"], "VISUAL_GUIDES, TOPIC_MEDIA"),
    ("engine.vis-insert", "BLOCKS.forEach(b=>b.topics.forEach(t=>{ if(VISUAL_GUIDES[t.id]", "ENGINE", "engine", [r"call BLOCKS\.forEach"], "E-T: inserts [\"vis\",id] when a topic has a guide and no vis row"),
    ("content.adv-questions", "/* Longer, two-step clinical vignettes", "CONTENT", "drop", [r"call QS\.push"], "adv1-adv8"),
    ("content.nbme", "/* Forty-two additional multi-step board-style cases", "CONTENT", "drop", [r"var NBME_EXPANSION", r"var NB_WHY"], "NBME_EXPANSION, NB_WHY"),
    ("engine.nbme-convert", "NBME_EXPANSION.forEach(x=>{", "LITERALS", "engine", [r"call NBME_EXPANSION\.forEach"], "E-T converter (literals b:\"mixed\", d:3; build.py emits NBME_EXPANSION = [])"),
    ("patch.p46-placements", "/* P4.6 - the two nb* stems the xanthoma figure", "PATCH", "drop", [r"iife (placeXanthomaEf|placeSecondaryHtnEf|placeP48Visuals|placeP48r2Visuals)"], "q.ef/q.ei by id"),
    ("content.multi-drills", 'DRILLS.push(\n {id:"dm_vasc"', "CONTENT", "drop", [r"call DRILLS\.push"], "multi drills"),

    # ------------------------------------------------------------------ engine zone
    ("engine.core", "STEP 1 BLOCK ENGINE  v2", "ENGINE", "engine", ENGINE_DEFAULT + (r"var (LS_KEY|HUB_KEY|BOXES|DAILY_MIN|DB|S)",), "LS_KEY, HUB_KEY, BOXES, blank(), S"),
    ("engine.flags", "FLAGGED ITEMS (P3.5)", "ENGINE", "engine", ENGINE_DEFAULT + (r"var FLAG_KINDS",), "flags"),
    ("engine.persistence", "function load(){", "ENGINE", "engine", ENGINE_DEFAULT + (r"call window\.addEventListener", r"call document\.addEventListener", r"call setInterval"), "load, repairState, save, flush listeners"),
    ("engine.db-sync", "function capOrNull(", "ENGINE", "engine", ENGINE_DEFAULT + (r"iife syncDb",), "capOrNull, mergeProgress, syncDb"),
    ("engine.helpers", "/* ---------------------------------------------------------------- helpers */", "ENGINE", "engine", ENGINE_DEFAULT + (r"var (ALLT|BOLDN|RBYID|IMGTOPIC|HUBCACHE|GTERMS)",), "helpers, fmt, glossary matcher, tagEverything"),
    ("engine.diagnosis", "/* ---------------------------------------------------------------- diagnosis */", "LITERALS", "engine", ENGINE_DEFAULT + (r"var (SITTING_GAP|FATIGUE_MIN|FATIGUE_WIN|FATIGUE_ON|FATIGUE_OFF|FATIGUE_MIX|FATIGUE_HARD)",), "topicEvidence (option-count literals), errorTypes, fatigue"),
    ("engine.progress", "/* ---------------------------------------------------------------- progress */", "ENGINE", "engine", ENGINE_DEFAULT, "stages, overall, streak, days"),
    ("engine.header", "/* ---------------------------------------------------------------- header */", "LITERALS", "engine", ENGINE_DEFAULT + (r"var MODES",), "MODES, paintHeader (exam-name literals), bindChrome, go"),
    ("engine.focus", "FOCUS CONTINUITY (P1.2)", "ENGINE", "engine", ENGINE_DEFAULT + (r"var FOCUSABLE_SEL",), "focus continuity, render"),
    ("engine.hub", "CROSS-BLOCK REVIEW HUB", "ENGINE", "engine", ENGINE_DEFAULT, "hub"),
    ("engine.daily-plan", "DAILY PLAN — 2 hours a day", "LITERALS", "engine", ENGINE_DEFAULT + (r"var CAL_SEL",), "todaysPlan, planHTML, calendar (exam-name literals)"),
    ("engine.view-path", "   VIEW: PATH", "LITERALS", "engine", ENGINE_DEFAULT + (r"var RESERVED",), "viewPath, openStage, diagSet, finalSet (40)"),
    ("engine.view-learn", "   VIEW: LEARN", "ENGINE", "engine", ENGINE_DEFAULT, "railHTML, viewLearn, bodyBlock, visualGuideHTML"),
    ("engine.pick-comment", "decides the visual: undefined falls back", "ENGINE", "engine", [], "comment that documents deepReviewHTML's pick argument"),
    ("content.rapid-media", "/* Rapid item -> the one visual that actually shows", "CONTENT", "drop", [r"var RAPID_MEDIA"], "RAPID_MEDIA (build.py emits it from rapid.media)"),
    ("engine.rapid-media-fn", "function rapidMedia(r){", "ENGINE", "engine", ENGINE_DEFAULT, "rapidMedia"),
    ("content.rapid-point", "/* P1.8: the pinned figure used to sit collapsed", "CONTENT", "drop", [r"var RAPID_POINT"], "RAPID_POINT (build.py emits it from rapid.pt)"),
    ("engine.rapid-points", "/* Runs at load, before anything renders: copies each point onto its item as r.pt.", "ENGINE", "engine", ENGINE_DEFAULT + (r"iife applyRapidPoints",), "applyRapidPoints, highlightFigure"),
    ("engine.deep-review", "function deepReviewHTML(tid, label, pick", "LITERALS", "engine", ENGINE_DEFAULT + (r"var IMG_RENDER_SEQ",), "deepReviewHTML, figHTML, palaceHTML, credHTML (source literal), imgHTML, pretest, sexp, grid"),
    ("engine.practice-helpers", "   VIEW: PRACTICE", "ENGINE", "engine", ENGINE_DEFAULT, "practiceLabel, mix32, viewOrder"),
    ("engine.set-builder", "UNIVERSAL SET BUILDER", "ENGINE", "engine", ENGINE_DEFAULT + (r"var (BLD_DEF|BLD_STATUS|BLD_YIELD|POOLS)",), "set builder"),
    ("engine.view-practice", "function viewPractice(){", "LITERALS", "engine", ENGINE_DEFAULT, "viewPractice (exam literals)"),
    ("engine.view-drills", "   VIEW: DRILLS", "LITERALS", "engine", ENGINE_DEFAULT, "viewDrill, multi/sort/order drill HTML"),
    ("engine.view-rapid-banner", "   VIEW: RAPID", "ENGINE", "engine", [], "banner"),
    ("content.tag-labels", "/* P1.7: the rapid verdict never said what KIND of fact", "CONTENT", "drop", [r"var TAG_LABELS"], "TAG_LABELS (build.py emits it from concepts.labels)"),
    ("engine.view-rapid", "function rfCatHTML(r){", "LITERALS", "engine", ENGINE_DEFAULT, "rfCatHTML, viewRapid (option-count literal)"),
    ("engine.view-spot", "   VIEW: IMAGES", "LITERALS", "engine", ENGINE_DEFAULT, "viewSpot, buildSpotOpts (three-wrong literals)"),
    ("engine.view-weak", "   VIEW: WEAK SPOTS", "LITERALS", "engine", ENGINE_DEFAULT, "viewWeak"),
    ("engine.view-gloss", "   VIEW: GLOSSARY", "ENGINE", "engine", ENGINE_DEFAULT, "viewGloss"),
    ("engine.search", "   GLOBAL SEARCH", "ENGINE", "engine", ENGINE_DEFAULT + (r"var SEARCH_INDEX",), "search"),
    ("engine.tutor", "   TUTOR DOCK", "LITERALS", "engine", ENGINE_DEFAULT + (r"var SAMPLE",), "tutor dock (exam literals)"),
    ("engine.svg-fitter", "   SVG TEXT FITTER", "ENGINE", "engine", ENGINE_DEFAULT + (r"if document\.fonts .*",), "fitSvgText, fitAllFigures, fonts.ready re-fit"),
    ("engine.wiring", "   WIRING", "ENGINE", "engine", ENGINE_DEFAULT, "wire, wirePretest, wireSexp"),
    ("engine.lightbox", "/* ---------- lightbox: every figure and photo", "ENGINE", "engine", ENGINE_DEFAULT + (r"var LB_Z",), "lightbox, wireZoom, wirePins, wireGrid"),
    ("engine.practice-flow", "/* Step 1 allows roughly 90 seconds a question.", "LITERALS", "engine", ENGINE_DEFAULT, "startPace, dwell, startSet, wirePractice, finishSet (p0 literal), startDrill"),
    ("content.drill-why", "/* DRILL_WHY -- one clause naming", "CONTENT", "drop", [r"var DRILL_WHY"], "DRILL_WHY (build.py emits it from the drill items)"),
    ("engine.wire-drill", "function wireDrill(app){", "ENGINE", "engine", ENGINE_DEFAULT + (r"call document\.addEventListener",), "wireDrill, startRapid, wireRapid, rapidKeydown, startSpot, wireSpot"),
    ("engine.normalise-comments", "   NORMALISE + BOOT", "ENGINE", "engine", [], "history comments"),
    ("content.rapid-opts", "/* PLAN-2 P1.1 -- five-option rapid review", "CONTENT", "drop", [r"var RAPID_OPTS"], "RAPID_OPTS"),
    ("content.rapid-opt-swap", "/* {oldDistractor: newDistractor} per question", "CONTENT", "drop", [r"var RAPID_OPT_SWAP"], "RAPID_OPT_SWAP"),
    ("content.rapid-w", "/* {optionText: why} per question -- keyed by OPTION TEXT", "CONTENT", "drop", [r"var RAPID_W"], "RAPID_W"),
    ("engine.applyRapidFive", "/* Runs IMMEDIATELY BEFORE permuteOptions(), on purpose", "ENGINE", "engine", [r"iife applyRapidFive"], "E-T: RAPID_OPTS/SWAP/W (build.py emits them empty)"),
    ("engine.permuteOptions", "(function permuteOptions(){", "ENGINE", "engine", [r"iife permuteOptions"], "seeded option permutation"),
    ("engine.audit", "window.__cardioAudit = () => {", "LITERALS", "engine", [r"set window\.__cardioAudit", r"set document\.documentElement\.dataset\.cardioAudit"], "structural audit (name and thresholds are literals)"),
    ("patch.placeImages4", "CARDIOVASCULAR — REAL IMAGES, set 4: wiring", "PATCH", "drop", [r"iife placeImages4"], ""),
    ("patch.placeWhy", "/* ============ P1.7 - self-explanation checkpoints", "PATCH", "drop", [r"iife placeWhy"], ""),
    ("patch.p4-placements", "/* ============ P4.1 - cmy_geometry into n2", "PATCH", "drop",
     [r"iife (placeCmyGeometry|placeHeartSounds|placeAvBlock|placeDigoxin|placeShockTable|placeXanthomas|placeSecondaryHtn|placeVesselWall|placeArchDeriv)"], "9 figure placements"),
    ("engine.deriveMinutes", "/* ============ P1.6 - topic minutes derived from length", "ENGINE", "engine", [r"iife deriveMinutes"], "E-T: minutes from word counts"),
    ("content.q-diff", "/* ============ P3.2 - difficulty re-rated", "CONTENT", "drop", [r"var Q_DIFF", r"var Q_DIFF_R2"], "Q_DIFF, Q_DIFF_R2"),
    ("engine.applyQDiff", "(function applyQDiff(){", "ENGINE", "engine", [r"iife applyQDiff"], "E-T: q.d from Q_DIFF (build.py emits them empty)"),
    ("engine.boot-load", "load();\ntagEverything();", "ENGINE", "engine", [r"call load", r"call tagEverything"], "boot: load, tagEverything"),
    ("content.concept-tags", "/* ================== P5.1  CONCEPT TAGS", "CONTENT", "drop", [r"var (CONCEPT_TAGS|Q_TAGS|R_TAGS)"], "CONCEPT_TAGS, Q_TAGS, R_TAGS"),
    ("engine.applyConceptTags", "(function applyConceptTags(){", "ENGINE", "engine", [r"iife applyConceptTags"], "E-T: tags from Q_TAGS/R_TAGS"),
    ("content.concept-home", "/* ===================== CONCEPT THREADS (P5.2)", "CONTENT", "drop", [r"var (CONCEPT_HOME|DRILL_TAGS)"], "CONCEPT_HOME, DRILL_TAGS"),
    ("engine.verifyConceptHomes", "(function verifyConceptHomes(){", "ENGINE", "engine", [r"iife verifyConceptHomes"], "warns when a concept home names a missing heading"),
    ("engine.threads", "function conceptThreads(){", "ENGINE", "engine", ENGINE_DEFAULT, "conceptThreads, threadsHTML"),
    ("engine.boot-render", "bindChrome();\nrender();", "ENGINE", "engine", [r"call bindChrome", r"call render"], "boot: bindChrome, render"),
    ("selftest.hooks", "/* P5.2 self-test hook.", "LITERALS", "selftest", [r"set window\.__selftestExtra"], "__selftestExtra hooks (seed literals)"),
    ("selftest.main", "/* ======================= SELF-TEST  (?selftest=1)", "LITERALS", "selftest", [r"if /\[\?&\]selftest=1/.*"], "the ?selftest=1 block (cardio seed literals)"),
    ("engine.boot-tick", "setInterval(paintHeader, 30000);", "ENGINE", "engine", [r"call setInterval"], "header refresh timer"),
    ("html.script-close", "</script>", "ENGINE", "shell", [], "closes the script, body and html"),
]

# (region, old, new, expected count). Applied to the output copy of the region only; the region sha
# is always the sha of the untouched source text.
SUBSTITUTIONS = [
    ("html.head", "<title>The Cardio Path</title>", "<title>@@TITLE@@</title>", 1),
    ("css.tokens", "--a1:#B23A32;", "--a1:@@A1@@;", 1),
    ("css.tokens", "--a2:#38538A;", "--a2:@@A2@@;", 1),
    ("css.tokens", "--a1:#E88A80;", "--a1:@@A1_DARK@@;", 2),
    ("css.tokens", "--a2:#8FADE0;", "--a2:@@A2_DARK@@;", 2),
    ("html.header", "<b>The Cardio Path</b>", "<b>@@TITLE@@</b>", 1),
    ("engine.view-path", "Cardio comes back while you are doing Renal", "Earlier blocks come back while you work on this one", 1),
    ("engine.view-drills", 'alt="ECG to classify"', 'alt="${escA(IMGS[it[2]].n||"Image to classify")}"', 1),
]


class ExtractError(Exception):
    pass


def sha(text: str) -> str:
    return hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]


def line_no(src: str, pos: int) -> int:
    return src.count("\n", 0, pos) + 1


def region_start(src: str, pos: int, floor: int) -> int:
    """Start of the line holding `pos`; if `pos` sits inside a comment that opens at the start of an
    earlier line (after `floor`), start at that comment instead, so a banner travels with its region."""
    for opener, closer in (("/*", "*/"), ("<!--", "-->")):
        o = src.rfind(opener, floor, pos)
        if o != -1 and src.rfind(closer, o, pos) == -1:
            ls = src.rfind("\n", 0, o) + 1
            if src[ls:o].strip() == "":
                return ls
    return src.rfind("\n", 0, pos) + 1


STMT_START = re.compile(r"^(?:\(|[A-Za-z_$])")
PROPERTY = re.compile(r"^[A-Za-z_$][\w$]*\s*:(?!:)")


def signature(line: str) -> str:
    s = line.rstrip()
    m = re.match(r"\((?:async\s+)?function\s*([\w$]*)", s)
    if m:
        return "iife " + (m.group(1) or "(anonymous)")
    m = re.match(r"(?:async\s+)?function\b\s*\*?\s*([\w$]+)", s)
    if m:
        return "fn " + m.group(1)
    m = re.match(r"(?:const|let|var)\s+([\w$]+)", s)
    if m:
        return "var " + m.group(1)
    m = re.match(r"if\s*\((.{0,40})", s)
    if m:
        return "if " + m.group(1)
    m = re.match(r"([\w$]+(?:\.[\w$]+)*)\s*(\[[^\]]*\])?\s*=(?!=)", s)
    if m:
        return "set " + m.group(1) + ("[]" if m.group(2) else "")
    m = re.match(r"([\w$]+(?:\.[\w$]+)*)\s*\(\s*([\w$]*)", s)
    if m:
        return "call " + m.group(1) + ("(" + m.group(2) if m.group(1) == "Object.assign" else "")
    return "stmt " + s[:40]


def statements(text: str, first_line: int) -> list[tuple[int, str]]:
    out = []
    for i, ln in enumerate(text.split("\n")):
        if STMT_START.match(ln) and not PROPERTY.match(ln):
            out.append((first_line + i, signature(ln)))
    return out


def cut(src: str) -> list[dict]:
    names = [r[0] for r in REGIONS]
    if len(set(names)) != len(names):
        raise ExtractError("duplicate region names in the REGIONS table")
    found, search_from, floor = [], 0, 0
    for name, anchor, cls, action, allow, note in REGIONS:
        if cls not in CLASSES or action not in ACTIONS:
            raise ExtractError(f"region {name}: class {cls!r} / action {action!r} not allowed")
        i = src.find(anchor, search_from)
        if i < 0:
            where = "anywhere" if src.find(anchor) < 0 else f"after the previous anchor (line {line_no(src, search_from)})"
            raise ExtractError(f"anchor for region {name} not found {where}: {anchor!r}")
        pos = i + (len(anchor) - len(anchor.lstrip("\n")))
        start = region_start(src, pos, floor)
        if found and start <= found[-1]["start"]:
            raise ExtractError(f"region {name} starts on or before region {found[-1]['name']} (line {line_no(src, start)})")
        found.append({"name": name, "anchor": anchor, "class": cls, "action": action, "allow": allow, "note": note, "start": start})
        search_from, floor = i + len(anchor), start
    if found[0]["start"] != 0:
        raise ExtractError("the first region does not start at the top of the file")
    for k, r in enumerate(found):
        r["end"] = found[k + 1]["start"] if k + 1 < len(found) else len(src)
        r["text"] = src[r["start"]:r["end"]]
    return found


def classify(src: str, regs: list[dict]) -> list[str]:
    """Every top-level statement must be allowed by its region's row; returns the problems."""
    problems = []
    for r in regs:
        first = line_no(src, r["start"])
        is_js = not r["name"].startswith(("html.", "css."))   # the HTML/CSS shell regions hold no script
        r["statements"] = statements(r["text"], first) if is_js else []
        pats = [re.compile(p) for p in r["allow"]]
        for ln, sig in r["statements"]:
            if not any(p.fullmatch(sig) for p in pats):
                problems.append(f"line {ln}: unclassified top-level statement `{sig}` in region {r['name']} ({r['class']})")
    return problems


def substitute(regs: list[dict]) -> None:
    by = {r["name"]: r for r in regs}
    for r in regs:
        r["out"] = r["text"]
    for name, old, new, n in SUBSTITUTIONS:
        if name not in by:
            raise ExtractError(f"substitution names unknown region {name}")
        got = by[name]["out"].count(old)
        if got != n:
            raise ExtractError(f"substitution in {name}: expected {n} x {old!r}, found {got}")
        by[name]["out"] = by[name]["out"].replace(old, new)


def assemble(src: str, regs: list[dict], src_sha: str, src_bytes: int) -> dict[str, str]:
    shell, eng, st = [], [], []
    for r in regs:
        if r["action"] == "shell":
            shell.append(r["out"])
            if r["name"] == "html.script-open":
                shell.append("@@SCRIPT@@\n")
    head = ("/* {f} -- extracted by engine/extract_engine.py from a frozen copy of the cardio page\n"
            "   (sha256 {s}).\n"
            "   engine/base/{f} is the untouched extraction; engine/{f} is the working copy the P2 tasks edit.\n"
            "   Each @region line names the cardio region that follows (engine/base/REGIONS.json). */\n")
    eng.append(head.format(f="engine.js", s=src_sha))
    st.append(head.format(f="selftest.js", s=src_sha))
    for r in regs:
        if r["name"].startswith(("html.", "css.")):
            continue
        tag = f"/* @region {r['name']} ({r['class']}, {r['action']})"
        if r["action"] == "engine":
            eng.append(tag + " */\n" + r["out"])
        elif r["action"] == "selftest":
            st.append(tag + " */\n" + r["out"])
        else:
            why = "emitted by build.py" if r["action"] == "build" else ("cardio content; build.py emits the globals" if r["class"] == "CONTENT" else "dropped")
            eng.append(tag + f": {why} */\n")
    out = {"shell.html": "".join(shell), "engine.js": "".join(eng), "selftest.js": "".join(st)}
    for ph in PLACEHOLDERS:
        if out["shell.html"].count(ph) < 1:
            raise ExtractError(f"shell.html lacks placeholder {ph}")
    redecl = re.findall(r"^(?:const|let|var)\s+(" + "|".join(BUILD_GLOBALS) + r")\b", out["engine.js"] + out["selftest.js"], re.M)
    if redecl:
        raise ExtractError(f"engine.js/selftest.js would re-declare globals build.py emits: {sorted(set(redecl))}")
    regions = []
    for r in regs:
        regions.append({"name": r["name"], "class": r["class"], "action": r["action"], "anchor": r["anchor"],
                        "lines": [line_no(src, r["start"]), line_no(src, max(r["start"], r["end"] - 1))],
                        "sha": sha(r["text"]), "statements": [s for _, s in r["statements"]], "note": r["note"]})
    doc = {"source": {"sha256": src_sha, "bytes": src_bytes, "lines": src.count("\n")},
           "script": "engine/extract_engine.py", "classes": list(CLASSES), "actions": list(ACTIONS),
           "counts": {c: sum(1 for r in regs if r["class"] == c) for c in CLASSES},
           "substitutions": [{"region": a, "old": b, "new": c, "count": d} for a, b, c, d in SUBSTITUTIONS],
           "regions": regions}
    out["REGIONS.json"] = json.dumps(doc, ensure_ascii=False, indent=1) + "\n"
    return out


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description="Extract the engine from a frozen copy of the cardio page.")
    ap.add_argument("--src", required=True, help="the frozen cardio page (engine/base/cardio-source.html)")
    ap.add_argument("--out", required=True, help="directory for shell.html, engine.js, selftest.js, REGIONS.json")
    a = ap.parse_args(argv)
    raw = Path(a.src).read_bytes()
    src = raw.decode("utf-8").replace("\r\n", "\n")
    try:
        regs = cut(src)
        problems = classify(src, regs)
        if problems:
            raise ExtractError(f"{len(problems)} unclassified statement(s):\n  " + "\n  ".join(problems[:40]))
        substitute(regs)
        out = assemble(src, regs, hashlib.sha256(raw).hexdigest(), len(raw))
    except ExtractError as e:
        print(f"extract_engine.py: FAILED: {e}", file=sys.stderr)
        return 1
    d = Path(a.out)
    d.mkdir(parents=True, exist_ok=True)
    for f, text in out.items():
        (d / f).write_bytes(text.encode("utf-8"))
    c = {k: sum(1 for r in regs if r["class"] == k) for k in CLASSES}
    print(f"extract_engine.py: {len(regs)} regions ({', '.join(f'{k} {v}' for k, v in c.items())}); "
          f"engine.js {len(out['engine.js'].encode('utf-8')):,} bytes, selftest.js {len(out['selftest.js'].encode('utf-8')):,} bytes, "
          f"shell.html {len(out['shell.html'].encode('utf-8')):,} bytes -> {d}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
