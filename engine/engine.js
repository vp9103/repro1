/* engine.js -- extracted by engine/extract_engine.py from a frozen copy of the cardio page
   (sha256 08f567b69746244865090b7f9942a66faa690030e94feab9cedaecb6e24fc444).
   engine/base/engine.js is the untouched extraction; engine/engine.js is the working copy the P2 tasks edit.
   Each @region line names the cardio region that follows (engine/base/REGIONS.json). */
/* @region content.meta (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.exam-date (LITERALS, engine) */
/* The exam date is user-adjustable. It is stored under its OWN key, not inside the
   block's progress object, so it survives a progress reset. EXAM is `let` because five
   call sites read it live. P2.2: the key, the default date and every word the page says
   about the exam come from META (content/meta.json); the engine names no exam itself.
   EXAM_NAME is a mid-sentence noun phrase ("3 days to your exam"); examNameCap() starts
   a sentence with it. A META with no examKey falls back to the shared series key. */
const EXAM_KEY = String(META.examKey || "step1.examDate"), EXAM_DEFAULT = String(META.examDefault || "");
const EXAM_NAME = String(META.examName || "your exam"), EXAM_LABEL = String(META.examLabel || "Exam date");
const examNameCap = () => EXAM_NAME.charAt(0).toUpperCase() + EXAM_NAME.slice(1);
const SECS_PER_Q = Math.max(30, +META.secsPerQ || 90);   /* pacing clock and the "slow" threshold */
function parseExamDate(v){
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v||""));
  if(!m) return null;
  /* P2.V F6 - a year typed digit by digit passes through 0002, 0020 and 0202, and
     new Date(2, ...) is 1902; none of those is an exam date, so they are not committed */
  if(+m[1] < 2000) return null;
  const d = new Date(+m[1], +m[2]-1, +m[3], 8, 0, 0);
  return isFinite(+d) && d.getDate() === +m[3] ? d : null;   /* rejects 2026-02-31 */
}
function readExamDate(){
  let v=null; try{ v = localStorage.getItem(EXAM_KEY); }catch(e){}
  /* no stored date and no META default: eight weeks out, so every date sum stays finite */
  return parseExamDate(v) || parseExamDate(EXAM_DEFAULT) || parseExamDate(dayKeyLocal(new Date(Date.now() + 56*864e5)));
}
const pad2 = n => String(n).padStart(2,"0");   /* declared before the first readExamDate() call, which may need it */
let EXAM = readExamDate();
const examISO = () => EXAM.getFullYear()+"-"+pad2(EXAM.getMonth()+1)+"-"+pad2(EXAM.getDate());
function setExamDate(v){
  const d = parseExamDate(v); if(!d) return false;
  EXAM = d; try{ localStorage.setItem(EXAM_KEY, v); }catch(e){}
  return true;
}

/* @region engine.gloss-registry (ENGINE, build): emitted by build.py */
/* @region content.glossary (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.palace-registry (ENGINE, build): emitted by build.py */
/* @region content.palace (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.imgs-registry (ENGINE, build): emitted by build.py */
/* @region content.images-1 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.glossary-2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.figs-registry (ENGINE, build): emitted by build.py */
/* @region content.figs-1 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-3 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p41 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p42 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p43 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p44 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p45 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p46 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p47 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p48-wall (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p48-arch (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p18c (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.figs-p19 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.blocks-1 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.blocks-2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.blocks-3 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.blocks-4 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.deep-dive (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.enrich (PATCH, drop): dropped */
/* @region content.rewrite-1 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyRewrite (PATCH, drop): dropped */
/* @region content.images-2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.placeImages (PATCH, drop): dropped */
/* @region content.images-3 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.placeImages3 (PATCH, drop): dropped */
/* @region content.credits (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyCredits (PATCH, drop): dropped */
/* @region content.images-set4 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.questions-1 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.rapid (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.drills (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.path (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.rapid-x-1 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.rapid-x-2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.applyRapidX (ENGINE, engine) */
/* ---- apply: fill in any rapid item that has no one-liner ---- */
(function applyRapidX(){
  let filled = 0, missing = 0;
  RAPID.forEach(r => {
    const key = String(r.q).replace(/\s+/g," ").trim();
    const alt = RAPID_X[key];
    /* Prefer the table's text when it says more than the item's own stub. Several
       items carried a bare mnemonic ("Osler = Ouch.") while the table held the
       mnemonic AND the mechanism, and the old !r.x guard threw that away. */
    if(alt && String(alt).length > String(r.x||"").length){ r.x = alt; filled++; }
    else if(!r.x){ r.x = "<b>" + r.o[r.a] + "</b>"; missing++; }
  });
  RAPID_X.__stats = {filled: filled, fallback: missing};
})();

/* @region patch.explainTheAnswer (PATCH, drop): dropped */
/* @region content.qdepth (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.applyQDepth (ENGINE, engine) */
(function applyQDepth(){
  let n = 0;
  QS.forEach(q => {
    const d = QDEPTH[q.id]; if(!d) return;
    if(d.w) Object.keys(d.w).forEach(k => { q.w[k] = d.w[k]; });
    if(d.ef) q.ef = d.ef;
    if(d.ei) q.ei = d.ei;
    if(d.et) q.et = d.et;
    n++;
  });
  QDEPTH.__applied = n;
})();
/* @region content.rewrite-2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyRewrite2 (PATCH, drop): dropped */
/* @region patch.dropDuplicates (PATCH, drop): dropped */
/* @region content.qs2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.images-4 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyCreditsLate (PATCH, drop): dropped */
/* @region content.rewrite-3 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyRewrite3 (PATCH, drop): dropped */
/* @region content.rewrite-4 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyRewrite4 (PATCH, drop): dropped */
/* @region content.rewrite-5 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.topUps (PATCH, drop): dropped */
/* @region patch.splitVasculitis (PATCH, drop): dropped */
/* @region patch.trimLong (PATCH, drop): dropped */
/* @region content.topup (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyTopups (PATCH, drop): dropped */
/* @region content.topup-late (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.applyTopups2 (PATCH, drop): dropped */
/* @region content.qdepth2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.applyQDepth2 (ENGINE, engine) */
(function applyQDepth2(){
  let moved = 0, missed = 0;
  QS.forEach(q => {
    const rows = QDEPTH2[q.id]; if(!rows) return;
    q.w = q.w || {};
    rows.forEach(([optText, note]) => {
      const i = q.o.indexOf(optText);
      if(i < 0){ missed++; return; }     /* option text changed: leave the old note */
      if(i === q.a){ missed++; return; } /* never annotate the correct answer */
      q.w[i] = note; moved++;
    });
  });
  QDEPTH2.__stats = {moved, missed};
})();
/* @region patch.panel-fixes (PATCH, drop): dropped */
/* @region patch.repairDrills (PATCH, drop): dropped */
/* @region content.drills2 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.sexp (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.attachSexp (ENGINE, engine) */
/* attach each one just before the topic's closing "why" block, so the learner
   commits to an explanation before being shown one */
(function attachSexp(){
  BLOCKS.forEach(b => b.topics.forEach(t => {
    const o = SEXP[t.id];
    if(!o || !t.body) return;
    if(t.body.some(r => r[0]==="sexp" && r[1] && r[1].id === o.id)) return;
    const at = t.body.findIndex(r => r[0] === "why");
    if(at >= 0) t.body.splice(at, 0, ["sexp", o]);
    else t.body.push(["sexp", o]);
  }));
})();
/* @region patch.fixDeadDistractors (PATCH, drop): dropped */
/* @region content.qs3 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.qs4 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.qs5 (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.fig-redraws (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.treesToTables (PATCH, drop): dropped */
/* @region content.fig-tof (CONTENT, drop): cardio content; build.py emits the globals */
/* @region patch.shuntsToTable (PATCH, drop): dropped */
/* @region content.visual-guides (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.vis-insert (ENGINE, engine) */
BLOCKS.forEach(b=>b.topics.forEach(t=>{ if(VISUAL_GUIDES[t.id] && !(t.body||[]).some(x=>x[0]==="vis"))
  t.body.splice(Math.max(1,Math.floor(t.body.length/2)),0,["vis",t.id]); }));

/* @region content.adv-questions (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.nbme (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.nbme-convert (LITERALS, engine) */
NBME_EXPANSION.forEach(x=>{
  const [id,c,s,l,correct,decoys,e]=x, o=[correct].concat(decoys);
  const w={}; decoys.forEach((d,i)=>{
    const written = (NB_WHY[id]||{})[d];
    w[i+1] = written || `<b>${d}</b> does not account for the stem's decisive findings. The discriminating mechanism is ${correct}.`;
  });
  QS.push({id,b:"mixed",c,d:3,s,l,o,a:0,e,w});
});
/* @region patch.p46-placements (PATCH, drop): dropped */
/* @region content.multi-drills (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.core (ENGINE, engine) */
/* =====================================================================
   STEP 1 BLOCK ENGINE  v2
   Budget model: 2 hours a day, 4-5 days per block.
   ===================================================================== */

const LS_KEY  = "step1." + META.key + ".v2";
const HUB_KEY = "step1.hub.v1";        /* shared across every block */
/* Gaps scaled to the RETENTION interval (weeks to the exam), not to one sitting.
   The old ladder topped out at 72 h, so block-1 material was never seen again. */
const BOXES  = [0, 15*60e3, 24*3600e3, 3*24*3600e3, 7*24*3600e3, 14*24*3600e3];
/* P2.6 (F33, reopened 2026-10-04) - every sentence the page says about when something comes back is
   built from the constants below, never typed: the rule had drifted from its texts three times (the
   plan row and method card said a slow right rapid pick stays on its step while the code dropped it
   a box at the top step; Weak Spots said "come back tomorrow" for a miss that returns in 15 minutes;
   the due-set text gave 1, 3, 7, 14 days for a first right answer that was due in 15 minutes).
   REPRO-PLAN section 8 F33 asks only that an item comes back when due, and ENGINE-MAP F33 and F22 name
   this ladder (15 min, 1, 3, 7, 14 days) and the 12 s hesitation rule, so the ladder and the rule are
   right and the texts were wrong, except in one place: at the top step the old code moved a slow right
   pick DOWN a step, which no text said and no rule intends, so promote() now holds it (see hold below).
   What the code does, and what the texts say:
     first answer to anything, right or wrong     BOXES[1] (15 minutes)
     rapid pick: right / slow right / miss        up one step / holds its step (SLOW_RAPID_MS) / down one step, never below BOXES[1]
     question and recall grid: right / miss       up one step / the first step (a question), grid per promote()
     question right, lucky-answer re-check        VERIFY_GAP.first (a day) after a first right answer
   Every gap carries +-15% jitter and is capped by examCeiling(). */
const SLOW_RAPID_MS = 12000;                     /* a right rapid pick slower than this is recognised, not known */
const VERIFY_GAP    = {first: 24*3600e3, again: 3*24*3600e3};
const LAST_PASS_MS  = 2*24*3600e3;               /* nothing is scheduled later than this before the exam (examCeiling) */
const JITTER        = 0.15;                      /* each gap is varied by +-15% so items do not clump */
const gapMs         = box => BOXES[box] * (1 - JITTER + Math.random() * 2 * JITTER);
const NUM_WORD = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
function spanWord(ms, spell){
  const m = Math.round(ms/6e4), h = Math.round(ms/36e5), d = Math.round(ms/864e5);
  const [n, u] = m < 60 ? [m, "minute"] : h < 24 ? [h, "hour"] : [d, "day"];
  return (spell && NUM_WORD[n] ? NUM_WORD[n] : n) + " " + u + (n === 1 ? "" : "s"); }
/* the steps after the first, "1, 3, 7 and 14 days"; the first step alone is "15 minutes" */
function ladderTail(){
  const st = BOXES.slice(2).map(ms => Math.round(ms/864e5));
  return st.length > 1 ? st.slice(0, -1).join(", ") + " and " + st[st.length-1] + " days" : st.length ? st[0] + (st[0] === 1 ? " day" : " days") : ""; }
const ladderWords = () => spanWord(BOXES[1]) + (BOXES.length > 2 ? ", then " + ladderTail() : "");
const slowWords   = () => (SLOW_RAPID_MS/1000) + " seconds";
const spanAdj     = ms => spanWord(ms).replace(/s$/, "").replace(" ", "-");   /* "15-minute", for "the 15-minute one" */
/* the two rules as one sentence each, for the places that explain a set that has nothing due */
const schedQuestionRule = () => "The first answer to a question, right or wrong, brings it back in about " + spanWord(BOXES[1])
  + "; each further right answer moves it up one step (" + ladderTail() + "), and a miss puts it back at " + spanWord(BOXES[1]) + ".";
const schedRapidRule = () => "The first answer to a pick, right or wrong, brings it back in about " + spanWord(BOXES[1])
  + "; each right answer moves it up one step (" + ladderTail() + ") unless it took over " + slowWords()
  + ", which keeps it on its step; a miss moves it down one step, never below the " + spanAdj(BOXES[1]) + " one.";
const DAILY_MIN    = 120;              /* fallback when no pace is selected */
/* P1.9 - REVIEW_FLOOR used to protect a flat 40 minutes for due review. On a
   30-minute day (a 14-day pace) that was more than the whole day, so a short
   pace served almost nothing but review and never reached new material. The
   protected slice is now a share of the day: see reviewCap in todaysPlan(). */
/* P3.6 - DBREF is the viewer's OWN progress document, resolved once by syncDb().
   It stays null whenever the db or the user capability is missing, or the viewer
   has no id - and that null IS the localStorage-only mode, which is what a page
   opened outside the artifact runtime always gets. */
let DB = null, DBREF = null, saveTimer = null;

const blank = () => ({
  v:2, ts:0,
  topics:{}, qs:{}, rapid:{}, drills:{}, spot:{}, pre:{}, sexp:{}, stage:{},
  days:{}, linked:[], chat:[], socratic:false,
  mode:"path", cur:null, stg:null, cloze:false, hiOnly:false,
  /* P2.2 - which yield axis drives the rail, the high-yield filter, the badges and the
     Weak Spots weights: "exam" reads t.exam (the course exam), "step1" reads t.yld. */
  yAxis:"exam",
  ps:null, rf:null, dr:null, sp:null, scroll:{}, bld:{}, paceDays:5,
  /* P3.5 - items the student marked for another look. An array, oldest
     first, of {kind, id, note, ts}. A save written before P3.5 has no such
     key at all, which is why repairState() rebuilds the shape rather than
     trusting it. */
  flags:[],
  /* P3.3 - when the CURRENT pace block started. 0 means "not anchored yet";
     repairState() resolves it, to now for a new state or to the start of the
     block a pre-P3.3 save was already part-way through. blockDay() counts only
     the studied days on or after it. */
  paceSetAt:0
});
let S = blank();

/* @region engine.flags (ENGINE, engine) */
/* =====================================================================
   FLAGGED ITEMS (P3.5)
   What was wrong: a student who met an item they thought was wrong,
   ambiguous, or simply worth returning to had nowhere to put the thought,
   so it was gone by the next click. What is right about this: the control
   toggles S.flags and repaints ITSELF - see wire() - because render()
   rebuilds the whole app subtree, and a rebuild in the middle of a question
   would move the page and the reader's focus. Declared here, above
   repairState(), so the kind table exists before the first repair runs.
   ===================================================================== */
const FLAG_KINDS = {q:"Question", rapid:"Rapid pick", img:"Image", drill:"Drill"};
/* esc() leaves the double quote alone, which is safe in text and wrong in an
   attribute: a note typed with quotes in it would end the value early. */
const escA = s => esc(s).replace(/"/g, "&quot;").replace(/>/g, "&gt;");
const flagList = () => (Array.isArray(S.flags) ? S.flags : (S.flags = []));
const flagIx = (kind, id) => flagList().findIndex(f => f && f.kind === kind && f.id === id);
const flagRef = (kind, id) => kind + ":" + id;
const unflagRef = ref => { const i = String(ref).indexOf(":"); return [String(ref).slice(0, i), String(ref).slice(i + 1)]; };
/* The control itself. The note box is rendered with the markup and simply
   hidden until the item is flagged, so toggling never has to build DOM and
   the note survives every later render (it lives in S, not in the input). */
function flagCtrl(kind, id){
  if(!kind || id == null || id === "") return "";
  const i = flagIx(kind, String(id)), on = i >= 0, note = on ? (flagList()[i].note || "") : "";
  const ref = escA(flagRef(kind, String(id)));
  return '<span class="flagwrap">' +
    '<button class="btn sm gho flagbtn' + (on ? " on" : "") + '" data-flag="' + ref + '"' +
      ' aria-pressed="' + (on ? "true" : "false") + '"' +
      /* the accessible name has to CONTAIN the visible label, so it is built
         from it rather than replacing it, and it changes with the state. */
      ' aria-label="' + (on ? "Flagged - press to remove the flag" : "Flag this item for another look") + '"' +
      ' title="' + (on ? "Flagged - press to remove the flag" : "Flag this item for another look") + '">' +
      (on ? "Flagged" : "Flag this") + '</button>' +
    '<input class="flagnote" data-flagnote="' + ref + '" value="' + escA(note) + '" maxlength="140"' +
      ' placeholder="note (optional)" aria-label="Note on this flagged item"' + (on ? "" : " hidden") + '></span>';
}
/* Resolve a stored flag back to something readable. Ids are chosen to still
   resolve months later: q.id for questions, r.i (<META.key>.xxxxx) for rapid
   picks, the IMGS key for images, and drill id plus the item's index in
   d.items for the sorts. Anything that no longer resolves is still listed,
   with a row that says so, rather than deleted behind the student's back. */
function flagTarget(f){
  let label = "", topic = null;
  if(f && f.kind === "q"){ const q = QS.find(x => x.id === f.id); if(q){ label = stripTags(q.l || q.s); topic = q.c; } }
  else if(f && f.kind === "rapid"){ const r = rItem(f.id); if(r){ label = stripTags(r.q); topic = r.c; } }
  else if(f && f.kind === "img"){ const im = IMGS[f.id]; if(im) label = im.n; }
  else if(f && f.kind === "drill"){
    const p = String(f.id).split("#"), d = DRILLS.find(x => x.id === p[0]);
    if(d){ const it = p.length > 1 ? d.items[+p[1]] : null;
      label = d.t + (it ? " \u2014 " + stripTags(Array.isArray(it) ? it[0] : it) : ""); topic = d.c; }
  }
  const gone = !label;
  if(gone) label = "This item is no longer in the block";
  const t = topic ? findT(topic) : null;
  return {label: label.length > 130 ? label.slice(0, 127) + "\u2026" : label,
          sub: ((f && FLAG_KINDS[f.kind]) || "Item") + (t ? " \u00b7 " + t.t : ""), topic: t ? topic : null, gone: gone};
}

/* @region engine.persistence (ENGINE, engine) */
function load(){
  try{
    let r = localStorage.getItem(LS_KEY);
    if(!r){ /* carry forward v1 progress so nothing already earned is lost */
      const old = localStorage.getItem("step1." + META.key + ".v1");
      if(old) r = old;
    }
    if(r) S = Object.assign(blank(), JSON.parse(r));
    migrateRapidKeys();
    repairState();
    hubPull();
  }catch(e){}
}
/* The old build marked sets "done" with zero answers and marked topics "read" just for
   opening them. Any saved flag with no supporting evidence is cleared on load. */
function repairState(){
  Object.keys(S.stage||{}).forEach(pid => {
    const st = S.stage[pid]; if(!st) return;
    if(st.done && !(st.n > 0)){ st.done = false; st.acc = 0; }
    if(st.quiz && st.quiz.done && !(st.quiz.n > 0)) st.quiz = {done:false, acc:0, n:0, total:st.quiz.total||0};
  });
  Object.keys(S.topics||{}).forEach(id => {
    const t = S.topics[id];
    if(t && t.read && !(t.dwell > 0) && t.grid == null) t.read = false;
  });
  /* P2.V F13: a finished pretest is kept on its topic page (pre[tid].keep) only while the
     student is still on that page; any other view or topic releases it, so the next visit
     opens on the lesson. Runs before every render, and on load (a reload on the page keeps it). */
  Object.keys(S.pre||{}).forEach(id => {
    const r = S.pre[id];
    if(r && r.keep && !(S.mode === "learn" && S.cur === id)) delete r.keep;
  });
  /* P3.5 - flags are the student's own marks, not scored records, so the
     only thing to repair is their shape: a save written before this task
     has no array at all, and a restored file can carry anything. Malformed
     and duplicate entries go; an entry whose id no longer resolves stays,
     because deleting somebody's note silently is worse than one stale row. */
  if(!Array.isArray(S.flags)) S.flags = [];
  S.flags = S.flags
    .filter(f => f && typeof f === "object" && FLAG_KINDS[f.kind] && typeof f.id === "string" && f.id)
    .map(f => ({kind:f.kind, id:f.id, note:String(f.note == null ? "" : f.note).slice(0,140),
                ts:(+f.ts > 0 ? +f.ts : Date.now())}))
    .filter((f,i,a) => a.findIndex(x => x.kind === f.kind && x.id === f.id) === i);
  if(S.yAxis !== "step1" && S.yAxis !== "exam") S.yAxis = "exam";
  if(!Number.isFinite(+S.paceDays) || +S.paceDays < 1) S.paceDays = 5;
  S.paceDays = Math.min(21, Math.max(1, Math.round(+S.paceDays)));
  /* P3.3 - a save written before paceSetAt existed. The epoch would keep
     counting every day ever studied (the bug this task removes) and today would
     silently restart a block the student is part-way through, so anchor on the
     earliest of their most recent paceDays studied days: the day number they
     saw yesterday is unchanged, and the next pace change re-anchors properly. */
  if(!(+S.paceSetAt > 0)){
    const studied = Object.keys(S.days||{}).filter(k => S.days[k] && S.days[k].acts).sort();
    const start = studied.length ? +new Date(studied[Math.max(0, studied.length - S.paceDays)]+"T00:00:00") : NaN;
    S.paceSetAt = start > 0 ? start : Date.now();
  }
  /* P2.3 - the linked queue holds this block's rapid items only, once each, in queue order. An id whose
     item has left the content (editing a rapid question changes its id) can never be served, so it is
     never answered and never drained; it used to keep the plan's linked row showing, and costed, for
     nothing. Pacing (stageAllot, planDaysLeft) therefore sees only items the Linked queue can serve. */
  { const seen = {};
    S.linked = (Array.isArray(S.linked) ? S.linked : []).filter(id =>
      typeof id === "string" && Object.prototype.hasOwnProperty.call(RBYID, id) && !seen[id] && (seen[id] = true)); }
  if(S.ps && (!Array.isArray(S.ps.set) || S.ps.i < 0 || S.ps.i >= S.ps.set.length || !QS.some(q=>q.id===S.ps.set[S.ps.i]))) S.ps = null;
  if(S.rf && (!Array.isArray(S.rf.set) || S.rf.i < 0 || S.rf.i >= S.rf.set.length || !rItem(S.rf.set[S.rf.i]))) S.rf = null;
  if(S.sp && (!Array.isArray(S.sp.set) || S.sp.i < 0 || S.sp.i >= S.sp.set.length || !IMGS[S.sp.set[S.sp.i]])) S.sp = null;
  if(S.dr){ const d=DRILLS.find(x=>x.id===S.dr.id);
    if(!d || (d.kind!=="order" && (!Array.isArray(S.dr.order) || S.dr.order.length!==d.items.length || S.dr.order.some(ix=>ix<0||ix>=d.items.length)))) S.dr=null;
  }
}
function save(){
  if(window.__SELFTEST) return;           /* self-test never persists */
  S.ts = Date.now();
  try{ hubPull(); }catch(e){}
  try{ localStorage.setItem(LS_KEY, JSON.stringify(S)); }catch(e){}
  try{ hubSync(); }catch(e){}
  flash(); clearTimeout(saveTimer); saveTimer = setTimeout(pushDb, 1200);
}
async function pushDb(){ if(!DBREF) return;
  /* P3.6 - writes only into this viewer's private subtree. The single shared
     document this used to write handed every signed-in visitor of the link the
     owner's progress, and overwrote whatever they had done themselves. */
  try{ await DBREF.set(JSON.parse(JSON.stringify(S))); }catch(e){} }
function flash(){ const d = el("savedot"); if(!d) return; d.classList.add("on"); setTimeout(()=>d.classList.remove("on"), 900); }
function flushNow(){ if(window.__SELFTEST) return; try{ S.ts = Date.now(); localStorage.setItem(LS_KEY, JSON.stringify(S)); }catch(e){} pushDb(); }
window.addEventListener("pagehide", flushNow);
window.addEventListener("beforeunload", flushNow);
document.addEventListener("visibilitychange", ()=>{ if(document.visibilityState === "hidden") flushNow(); });
setInterval(()=>{ if(S.ts) flushNow(); }, 20000);

/* P3.6 - claude.use() is contracted to settle (null when nothing answers), but
   nothing on this page may sit on a promise that does not. Sync is optional, so
   a missing or half-loaded runtime resolves null here and the page carries on
   with localStorage alone. Outside the artifact runtime window.claude does not
   exist at all and this returns without creating a promise to wait on. */
/* @region engine.db-sync (ENGINE, engine) */
function capOrNull(make, ms){
  try{
    if(!(window.claude && typeof window.claude.use === "function")) return Promise.resolve(null);
    return Promise.race([
      Promise.resolve(make()).catch(() => null),
      new Promise(done => setTimeout(() => done(null), ms || 12000))
    ]);
  }catch(e){ return Promise.resolve(null); }
}

/* P3.6 - two devices that both studied while offline. Newer still wins every
   conflict, and wins it per RECORD, so one topic row is never half from each
   device. What is new: a record only the OLDER side has is kept rather than
   dropped, because study records only ever accumulate and an evening's work
   lost to a clock comparison cannot be got back. Session fields (mode, cur,
   scroll, an unfinished set) come wholly from the newer side. */
function mergeProgress(newer, older){
  const out = Object.assign(blank(), newer);
  const map = o => (o && typeof o === "object" && !Array.isArray(o)) ? o : {};
  const arr = a => Array.isArray(a) ? a : [];
  ["topics","qs","rapid","drills","spot","pre","sexp","stage","days"].forEach(k => {
    out[k] = Object.assign({}, map(older[k]), map(newer[k]));
  });
  out.linked = arr(older.linked).concat(arr(newer.linked).filter(x => arr(older.linked).indexOf(x) < 0));
  /* flags carry their own ts, so the later note on any one item wins; the list
     is rebuilt oldest-first, the order the rest of the page assumes. */
  const seen = {};
  arr(older.flags).concat(arr(newer.flags)).forEach(f => {
    if(!f || typeof f !== "object") return;
    const k = f.kind + ":" + f.id, p = seen[k];
    if(!p || (+f.ts || 0) >= (+p.ts || 0)) seen[k] = f;
  });
  out.flags = Object.keys(seen).map(k => seen[k]).sort((a,b) => (+a.ts || 0) - (+b.ts || 0));
  out.ts = Math.max(+newer.ts || 0, +older.ts || 0);
  return out;
}

/* P3.6 - progress used to live in ONE shared document, so a second signed-in
   person opening the link inherited the owner's study record and overwrote
   their own. It now lives in that viewer's private subtree, the path
   data/users/ + id + /progress, which the platform hides from every other
   viewer, the owner included. No db, no user, or no id means no sync at all:
   localStorage only, no error, nothing said. */
(async function syncDb(){
  try{
    const [db, user] = await Promise.all([
      capOrNull(() => claude.use("db")),
      capOrNull(() => claude.use("user"))
    ]);
    if(!db || !user || typeof user.id !== "function" || typeof db.doc !== "function") return;
    const uid = await user.id();   /* user reads never reject; null = no private subtree */
    if(!uid || typeof uid !== "string") return;
    DB = db; DBREF = db.doc("data/users/" + uid + "/progress");
    const snap = await DBREF.get();
    const raw = snap && typeof snap.data === "function" ? snap.data() : null;
    const remote = (raw && typeof raw === "object" && !Array.isArray(raw)) ? raw : null;
    if(!remote){ if(S.ts) pushDb(); return; }
    const was = JSON.stringify(S), fresher = (+remote.ts || 0) > (S.ts || 0);
    S = fresher ? mergeProgress(remote, S) : mergeProgress(S, remote);
    repairState();                 /* a copy written by an older build has no flags and no paceSetAt */
    if(JSON.stringify(S) !== was){ save(); render(); }   /* local gained something */
    else if((+remote.ts || 0) !== (S.ts || 0)) pushDb(); /* the remote copy is the one behind */
  }catch(e){}
})();

/* @region engine.helpers (ENGINE, engine) */
/* ---------------------------------------------------------------- helpers */
const el = id => document.getElementById(id);
function migrateRapidKeys(){
  /* v2 stored S.rapid under the array index. Move those records onto the new
     stable ids once, using the order they were written in. */
  const old = S.rapid || {}; if(!Object.keys(old).some(k => /^\d+$/.test(k))) return;
  const next = {};
  Object.keys(old).forEach(k => {
    if(/^\d+$/.test(k)){ const r = RAPID[+k]; if(r && r.i) next[r.i] = old[k]; }
    else next[k] = old[k];
  });
  S.rapid = next;
  S.linked = (S.linked||[]).map(x => /^\d+$/.test(String(x)) ? (RAPID[+x]||{}).i : x).filter(Boolean);
}
const ALLT = () => BLOCKS.flatMap(b => b.topics.map(t => Object.assign({blk:b}, t)));
const findT = id => ALLT().find(t => t.id === id);
/* P2.2 - two yield axes. t.yld is Step 1 yield, t.exam is how likely the topic is on the
   course exam; they differ by design. S.yAxis chooses the one that drives the rail dot,
   the high-yield filter, every yield badge and the priority weights in topicEvidence()
   and conceptThreads(). A topic missing one axis falls back to the other. */
const YAXES = {step1:"Step 1", exam:"course final"};
const yAxis = () => S.yAxis === "step1" ? "step1" : "exam";
const yv = t => { const v = !t ? "" : yAxis() === "step1" ? (t.yld || t.exam) : (t.exam || t.yld);
  return v === "hi" || v === "lo" ? v : "mid"; };
const yWord = t => ({hi:"high yield", mid:"mid yield", lo:"low yield"})[yv(t)];
const esc = s => String(s).replace(/&(?![a-z#0-9]+;)/gi,"&amp;").replace(/</g,"&lt;");
const pct = (n,d) => d ? Math.round(100*n/d) : 0;
const clamp = (v,a,b) => Math.max(a, Math.min(b, v));
/* P6 cleanup - this only deleted the glossary DELIMITERS, so a link written as
   key then bar then label survived as "foamcell|foam cells" wherever plain text
   is wanted. The image-annotation aria-label is built here, so a screen reader
   read the raw key out loud. Expand the pair the way fmt() does - label if there
   is one, else the key - then keep the old sweep for any unpaired delimiter. */
const stripTags = s => String(s)
  .replace(/\{\{(.+?)\}\}/g, (m,x)=>{ const p = x.split("|"); return p[1] || p[0]; })
  .replace(/\[\[(.+?)\]\]/g, "$1")
  .replace(/\[\[|\]\]|\{\{|\}\}|\*\*/g,"").replace(/<[^>]+>/g,"");
function shuffle(a){ a=a.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function examCeiling(){
  const e = +EXAM, now = Date.now();
  /* A date already gone gave a ceiling two days further gone, so every
     Math.min(when, ceiling) landed behind now, every item stayed due forever and
     the boxes stopped meaning anything. A passed exam caps nothing. All four
     callers are Math.min(now + gap, ceiling) with gap > 0, so Infinity degrades
     to "no cap" rather than reaching state as an Infinity or a NaN. */
  if(!isFinite(e) || e <= now) return Infinity;
  /* everything gets one last pass two days out */
  const last = e - LAST_PASS_MS;
  if(last > now) return last;
  /* P2.V F6 - inside the last 48 h "two days out" is already behind now: with the
     exam tomorrow a correct answer was given a due date the day before, stayed due
     for ever and sat on top of the plan. The last pass lands halfway between now and
     the exam instead, so the ceiling is always after now and before the exam. */
  return now + (e - now) / 2;
}
/* hold: a right answer that does not earn a step (a slow rapid pick) stays on the step it is on, the first one
   for an item never seen. It used to be promoted and then moved down a box, which at the top step
   dropped it from 14 days to 7 where every lower step simply held. */
function promote(rec, ok, hold){
  rec.box = ok ? (hold ? Math.max(rec.box||0, 1) : Math.min((rec.box||0)+1, BOXES.length-1)) : Math.max((rec.box||0)-1, 1);
  rec.due = Math.min(Date.now() + gapMs(rec.box), examCeiling());
  rec.n = (rec.n||0)+1; rec.last = Date.now(); return rec;
}
/* An item never seen is NOT due -- it is new. Mixing the two made the due queue
   mostly unseen material, which is the opposite of spaced review. */
const isDue    = rec => !!rec && rec.box > 0 && (!rec.due || rec.due <= Date.now());
const overdue  = rec => { if(!isDue(rec)) return 0;
  const gap = Math.max(60e3, BOXES[rec.box||1] || 60e3);
  return (Date.now() - (rec.due || Date.now())) / gap + 1; };
/* LOCAL date, not toISOString(). toISOString() is UTC: east of UTC a local
   midnight maps to the previous day, and west of it an evening maps to the next
   one -- so activity was being filed under the wrong calendar day. */
const todayKey = () => dayKeyLocal(new Date());
let BOLDN = 0;
function fmt(s){
  BOLDN = 0;                 /* emphasis budget is per block, not per page */
  return String(s)
    .replace(/\[\[(.+?)\]\]/g, (m,x)=>'<span class="cz" tabindex="0" role="button">'+x+'</span>')
    .replace(/\{\{(.+?)\}\}/g, (m,x)=>{ const k = x.split("|")[0], lbl = x.split("|")[1] || k;
        return GLOSS[k] ? '<span class="gterm" tabindex="0" role="button" data-g="'+k+'">'+lbl+'</span>' : lbl; })
    /* Bold marks a TERM, not a sentence. A long emphasised clause is the thing
       that made bold stop signalling, so it is demoted to a soft highlight. */
    .replace(/\*\*(.+?)\*\*/g, (m,x)=>{
        const words = x.replace(/<[^>]+>/g,"").trim().split(/\s+/).length;
        BOLDN++;
        return (words <= 8 && BOLDN <= 3) ? "<strong>"+x+"</strong>"
                                          : "<em class=\"soft\">"+x+"</em>"; })
    .replace(/(^|[\s(])\*([^*]+)\*(?=[\s.,;:!?)]|$)/g, "$1<em>$2</em>");
}
const RBYID = {};        /* stable id -> local rapid item */
const IMGTOPIC = {};     /* image key -> the topic that teaches it */
let  HUBCACHE = null;    /* other blocks' items, loaded on demand */
function rItem(id){
  if(RBYID[id]) return RBYID[id];
  if(!HUBCACHE){ try{ HUBCACHE = hubLoad().items || {}; }catch(e){ HUBCACHE = {}; } }
  return HUBCACHE[id] || null;
}
function hashId(str){ let h = 2166136261;
  for(let i=0;i<str.length;i++){ h ^= str.charCodeAt(i); h = Math.imul(h,16777619)>>>0; }
  return h.toString(36); }
/* Build a lookup of glossary titles so prose can link them automatically.
   Longest first, so "aortic dissection" wins over "dissection". */
let GTERMS = null;
/* Every entry now offers its display title, its key and its aliases as match
   candidates, because a definition nothing links is a definition nobody reads.
   The regex is compiled once here, not per render: the candidate list trebled. */
function glossTerms(){
  if(GTERMS) return GTERMS;
  const cands = [];
  Object.keys(GLOSS).forEach(k => {
    const seen = {};
    [GLOSS[k].t, k].concat(GLOSS[k].alt || []).forEach(raw => {
      const c = String(raw == null ? "" : raw).trim(), lc = c.toLowerCase();
      if(!c || seen[lc]) return;
      seen[lc] = 1;
      /* An abbreviation is matched CASE-SENSITIVELY. Case-blind, "PT" would fire
         on a stray "pt" and "CO" on "co". Ordinary words keep the case-blind
         match, and only those still have to be longer than three letters. */
      const cs = /[A-Z]/.test(c.slice(1)) || (c.length <= 4 && /^[A-Z]/.test(c));
      if(!cs && c.length <= 3) return;
      cands.push({k, t:c, lc:lc, cs:cs,
        re:new RegExp("(^|[\\s(\u2014\u2013,;:\u201c])(" + c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?=[\\s.,;:!?)\u2014\u2013\u201d]|$)", cs ? "" : "i")});
    });
  });
  GTERMS = cands.sort((a,b) => b.t.length - a.t.length);
  return GTERMS;
}
/* Link the FIRST unlinked mention of each term within one topic, and no more:
   a page where every other word is a link is noise, not help. Only text
   outside existing tags is touched, so nothing already marked up is disturbed. */
/* The terms worth blanking are the ones already marked as testable: the bolded
   facts and the glossary links. Deriving the targets means every block gets
   hundreds of cloze blanks for free instead of the dozen someone typed by hand. */
function autoCloze(html){
  if(!html) return html;
  return html
    .replace(/<strong>([\s\S]*?)<\/strong>/g,
      (m,x) => '<strong><span class="cz" tabindex="0" role="button">'+x+'</span></strong>')
    .replace(/<span class="gterm([^"]*)" tabindex="0" role="button" data-g="([^"]+)">([\s\S]*?)<\/span>/g,
      (m,c,k,x) => '<span class="gterm'+c+'" tabindex="0" role="button" data-g="'+k+
        '"><span class="cz" tabindex="0" role="button">'+x+'</span></span>');
}
function autoGloss(html, used){
  if(!html) return html;
  used = used || {};
  /* An author's own glossary link is already expanded in this html, because
     fmt() ran before autoGloss ever saw the string. That link IS the key's one
     appearance on the page, so the key is spent here; otherwise autoGloss
     spends it again on the link's own label and wraps a second term inside the
     first, where the two click handlers cancel each other out. */
  (html.match(/data-g="[^"]+"/g) || []).forEach(m => { used[m.slice(8, -1)] = 1; });
  /* One lowercase copy per call, then a plain indexOf reject. The candidate list
     trebled when aliases arrived and autoGloss now runs over tables and steps as
     well, so without this a topic render does thousands of pointless regexes. */
  const hay = html.toLowerCase();
  glossTerms().forEach(g => {
    if(used[g.k]) return;
    if((g.cs ? html : hay).indexOf(g.cs ? g.t : g.lc) < 0) return;
    const re = g.re;
    let done = false, depth = 0;
    const out = html.replace(/(<[^>]*>)|([^<]+)/g, function(m, tag, text){
      /* The tokeniser handed every tag straight back and treated everything
         between tags as prose - including the LABEL of a glossary link fmt()
         had already made. depth counts how deep we are inside such a link, so
         its label is never linked a second time. */
      if(tag){
        if(/^<span\b/i.test(tag)) depth = depth ? depth + 1 : (/\bgterm\b/.test(tag) ? 1 : 0);
        else if(depth && /^<\/span\s*>/i.test(tag)) depth--;
        return m;
      }
      if(depth || done || !text) return m;
      return text.replace(re, function(mm, pre, word){
        done = true;
        return pre + '<span class="gterm auto" tabindex="0" role="button" data-g="' + g.k + '">' + word + '</span>';
      });
    });
    if(done){ used[g.k] = 1; html = out; }
  });
  return html;
}
function tagEverything(){
  /* Stable, content-derived ids. Keying schedules by array index meant that
     inserting one rapid item silently re-pointed every saved schedule. */
  const used = {};
  RAPID.forEach((r,i)=>{ let k = META.key + "." + hashId(stripTags(r.q));
    while(used[k]) k += "x"; used[k] = 1; r.i = k; r.ix = i; RBYID[k] = r; });
  BLOCKS.forEach(b => b.topics.forEach(t => (t.body||[]).forEach(row => {
    if(row && row[0] === "img" && row[1] && IMGS[row[1]] && !IMGTOPIC[row[1]]) IMGTOPIC[row[1]] = t.id; })));
  const fb = b => (BLOCKS.find(x=>x.id===b)||{topics:[{}]}).topics[0].id;
  QS.forEach(q => { if(!q.c) q.c = fb(q.b); });
  RAPID.forEach(r => { if(!r.c) r.c = fb(r.b); });
  DRILLS.forEach(d => { if(!d.c) d.c = fb(d.b); });
}

/* @region engine.diagnosis (LITERALS, engine) */
/* ---------------------------------------------------------------- diagnosis */
/* 50% on a 3-option item is nearly chance; 50% on a 5-option vignette is not.
   (P1.7-reopen2: said "3-option pick"; rapid picks are five-option since P1.1
   and are scored by miss rate below, not through chanceAdj.) */
function chanceAdj(p, opts){ const c = 1/Math.max(2,opts); return clamp((p - c)/(1 - c), 0, 1); }
/* P2.V F25 sweep: a topic with signals is only listed as weak while its mastery is under
   this; the Weak Spots text states the same number, read from here. */
const WEAK_BELOW = 0.78;
function topicEvidence(t){
  const qs = QS.filter(q => q.c === t.id), rp = RAPID.filter(r => r.c === t.id), dr = DRILLS.filter(d => d.c === t.id);
  const rec = S.topics[t.id] || {};
  let qSeen=0, qRight=0, confWrong=0, slowRight=0, falseConf=0, luckyFast=0, verified=0, wrong=[];
  let lastAt = 0;
  qs.forEach(q => { const a = S.qs[q.id]; if(!a) return; qSeen++; lastAt = Math.max(lastAt, a.ts||0);
    if(a.falseConf) falseConf++;
    if(a.verified) verified++;
    if(a.ok){ qRight++; if(a.slow || (a.slow === undefined && a.ms > SECS_PER_Q*1000*13/15)) slowRight++; }
    else { wrong.push(q); if(a.conf === "sure") confWrong++; if(a.fast) luckyFast++; } });
  let rSeen=0, rMiss=0;
  rp.forEach(r => { const sr = S.rapid[r.i]; if(!sr) return; rSeen++; rMiss += (sr.miss||0);
    lastAt = Math.max(lastAt, sr.last||0); });
  let dMiss=0, dSeen=0;
  let dItems=0;
  dr.forEach(d => { const sr = S.drills[d.id]; if(!sr) return; dSeen++;
    dMiss += (sr.missed||[]).length; dItems += (d.items||[]).length; lastAt = Math.max(lastAt, sr.ts||0); });
  const gridScore = rec.grid;
  /* Signals that were being graded and stored, then thrown away. */
  const pre = S.pre[t.id];                                   /* pre-reading check */
  const preOk = pre && pre.ok ? pre.ok.filter(x=>x===true).length : 0;
  /* P2.V F13: only a boolean is an answer; a saved sparse array carries null for the gaps */
  const preN  = pre && pre.ok ? pre.ok.filter(x=>typeof x === "boolean").length : 0;
  let sxOk=0, sxN=0;                                         /* self-explanation MCQs */
  (t.body||[]).forEach(row => { if(row && row[0]==="sexp" && row[1] && row[1].id){
    const pick = S.sexp[row[1].id]; if(pick == null) return; sxN++; if(pick === row[1].a) sxOk++; } });
  let spOk=0, spN=0;                                         /* name-the-image-cold */
  Object.keys(IMGS).forEach(k => { if(IMGTOPIC[k] !== t.id) return;
    const sr = S.spot[k]; if(!sr) return; spN++; if(sr.ok) spOk++; });
  /* P2.2 (R12) - chance is 1/options, and the option counts come from the items
     themselves: the mean over this topic's questions, pretest items, sexp rows and
     images (a spot item offers the diagnosis plus every wrong label). */
  const meanN = (a, dflt) => a.length ? a.reduce((x, n) => x + n, 0)/a.length : dflt;
  const qOpts  = meanN(qs.map(q => (q.o||[]).length).filter(n => n > 1), 5);
  const preOpts = meanN((t.pretest||[]).map(p => (p.o||[]).length).filter(n => n > 1), 4);
  const sxOpts = meanN((t.body||[]).filter(r => r && r[0]==="sexp" && r[1]).map(r => (r[1].o||[]).length).filter(n => n > 1), 4);
  const spOpts = meanN(Object.keys(IMGS).filter(k => IMGTOPIC[k] === t.id).map(k => 1 + (IMGS[k].wrong||[]).length).filter(n => n > 1), 5);
  const parts=[], weights=[];
  if(qSeen){ parts.push(chanceAdj(qRight/qSeen, qOpts));   weights.push(qSeen*2); }
  if(rSeen){ parts.push(clamp(1 - rMiss/Math.max(rSeen, rMiss),0,1)); weights.push(rSeen*0.7); }
  if(dSeen){ parts.push(clamp(1 - dMiss/Math.max(4, dItems),0,1)); weights.push(dSeen*1.2); }
  if(gridScore != null){ parts.push(gridScore);        weights.push(2.0); }
  if(preN){ parts.push(chanceAdj(preOk/preN, preOpts)); weights.push(preN*0.5); }
  if(sxN){  parts.push(chanceAdj(sxOk/sxN, sxOpts));   weights.push(sxN*1.4); }
  if(spN){  parts.push(chanceAdj(spOk/spN, spOpts));   weights.push(spN*1.1); }
  /* Transfer, calibration and retention are separate abilities. A learner who
     recognises facts but cannot use them in a long stem must not receive the
     same score as someone who can transfer and retain them. */
  const qHist = qs.flatMap(q=>((S.qs[q.id]||{}).hist||[]).map(h=>Object.assign({d:q.d||2},h)));
  const hardHist = qHist.filter(h=>h.d>=3);
  if(hardHist.length>=2){ parts.push(chanceAdj(hardHist.filter(h=>h.ok).length/hardHist.length,qOpts)); weights.push(Math.min(8,hardHist.length)*1.35); }
  const calibrated = qHist.filter(h=>h.conf);
  const calErr = calibrated.length ? calibrated.reduce((sum,h)=>{
    const p=h.conf==="sure"?.9:h.conf==="think"?.68:.36; return sum+Math.pow(p-(h.ok?1:0),2); },0)/calibrated.length : null;
  if(calErr!=null){ parts.push(clamp(1-calErr*1.8,0,1)); weights.push(Math.min(3,calibrated.length*.25)); }
  if(qSeen>=2){ parts.push(verified/Math.max(1,qRight)); weights.push(Math.min(4,qSeen*.45)); }
  const W = weights.reduce((a,b)=>a+b,0);
  const raw = W ? parts.reduce((a,p,i)=>a + p*weights[i],0)/W : 0.5;
  let mastery = (raw*W + 0.5*3)/(W + 3);
  /* Evidence goes stale. Without this, 3/3 on day 1 still reads as mastery on day 30. */
  const days = lastAt ? (Date.now() - lastAt)/864e5 : 0;
  const fresh = lastAt ? Math.exp(-days/12) : 1;
  if(mastery > 0.5) mastery = 0.5 + (mastery - 0.5) * (0.55 + 0.45*fresh);
  const modalityCount = [qSeen>0,rSeen>0,dSeen>0,gridScore!=null,spN>0,sxN>0].filter(Boolean).length;
  /* Prevent a single lucky modality from claiming mastery. The ceiling rises
     only as recall, transfer, discrimination and visual recognition converge. */
  const modalityCeiling = [0.56,0.68,0.78,0.87,0.94,0.98,1][modalityCount];
  mastery = Math.min(mastery, modalityCeiling);
  /* known is how much evidence exists, not how good it is. One question is not
     enough to display a percentage, so the scale starts later and rises slower. */
  const known = clamp((W - 2) / 12, 0, 1), read = !!rec.read;
  const ty = yv(t), examW = ty === "hi" ? 1 : (ty === "mid" ? 0.8 : 0.62);   /* the chosen yield axis */
  /* A miss on the pre-instruction diagnostic is not evidence of weakness -- it is
     material you have not been taught yet. It only counts once the topic is taught. */
  const taught = !!rec.read || rSeen > 0 || gridScore != null;
  /* The same distractor chosen twice for one concept is a repeatable
     misconception, which is a stronger signal than a low percentage. */
  const repeated = confusions().filter(x => !x.drill && x.c === t.id && x.n >= 2).length;
  /* P3.4: exactly the conditions of the old OR-chain, kept as a LIST so the page
     can say HOW MUCH evidence there is instead of only that some exists. Each
     entry is a separate measurement channel; the two accuracy tests are one
     entry because they are the same test at different n and cannot both hold.
     One channel = suspected weak, two or more channels = proven weak. */
  const sigs = [];
  if((qSeen>=2 && qRight/qSeen < 0.7) || (taught && qSeen===1 && qRight===0)) sigs.push("question accuracy");
  if(repeated > 0) sigs.push("a repeated misconception");
  if(confWrong > 0) sigs.push("sure and wrong");
  if(falseConf > 0) sigs.push("a failed re-test");
  if(gridScore != null && gridScore < 0.6) sigs.push("the recall grid");
  if(rMiss >= 2) sigs.push("rapid picks");
  if(dMiss >= 3) sigs.push("a drill");
  const proven = sigs.length > 0;
  const flag = proven && mastery < WEAK_BELOW;
  /* The one act that would turn a suspicion into a verdict or clear it: name a
     channel that has produced no evidence at all yet, cheapest first. */
  /* P2.V F25 sweep: only a channel this topic actually has is named */
  const settle = qSeen < 2 && qs.length >= 2 ? "answer 2 targeted questions here"
               : gridScore == null && t.grid && (t.grid.items||[]).length ? "run the recall grid on this topic"
               : rSeen === 0 && rp.length ? "take the rapid picks on this topic" : "re-test it once";
  /* Rank by exam weight x how wrong you were, and let the error flags SCALE that
     rather than replace it -- additive constants of 0.45 swamped a core term of
     0.1-0.3, which made the ranking effectively binary. */
  let priority = examW * (1-mastery) * (0.35 + 0.65*known);
  const errMult = 1 + repeated*0.6 + confWrong*0.55 + falseConf*0.85 + (rMiss>=2 ? 0.25 : 0)
                + (slowRight ? 0.12 : 0) + (luckyFast ? 0.3 : 0) + (dMiss>=3 ? 0.2 : 0);
  priority *= errMult;
  const unverified = qRight - verified;
  if(unverified > 0) priority += Math.min(0.15, unverified*0.04);
  if(flag) priority *= 1.8; else if(known < 0.15) priority += 0.12;
  /* A topic going backwards needs attention sooner than one at the same score
     that is climbing, and a topic already climbing needs less. */
  const traj = trajectory(t.id);
  if(traj){ if(traj.dir === "sliding") priority *= 1.35;
            else if(traj.dir === "improving") priority *= 0.8; }
  /* What counts as the best use of an hour changes as the exam approaches. Far
     out, covering untested ground matters; close in, a high-yield topic you are
     actually wrong about outranks a low-yield one you have simply never opened. */
  const dl = daysLeft();
  if(dl <= 21){
    const closeness = 1 - Math.max(0, dl)/21;
    priority *= 1 + closeness * (ty === "hi" ? 0.55 : ty === "mid" ? 0.1 : -0.35);
    if(!proven && known < 0.15) priority *= 1 - closeness*0.25;
  }
  const reasons = [];
  /* P3.4: the count leads, because it decides how much the rest of the list is
     worth. Two channels cannot both be one bad session; one channel can. */
  if(sigs.length >= 2) reasons.push("<b>"+sigs.length+" separate signals</b> &mdash; "+sigs.join(", "));
  else if(sigs.length === 1) reasons.push("one signal only ("+sigs[0]+") &mdash; "+settle+" to settle it");
  if(qSeen && qRight/qSeen < 0.7) reasons.push("missed "+(qSeen-qRight)+" of "+qSeen+" question"+(qSeen===1?"":"s")+" here");
  /* P2.V F25 sweep: confWrong counts questions (latest answer), not attempts */
  if(confWrong) reasons.push("<b>sure and wrong on "+confWrong+" question"+(confWrong>1?"s":"")+"</b>");
  if(repeated) reasons.push("<b>chose the same wrong option more than once</b> &mdash; a specific misconception, not a slip");
  if(gridScore != null && gridScore < 0.6) reasons.push("recall check only "+Math.round(gridScore*100)+"%");
  if(rMiss>=2) reasons.push("missed "+rMiss+" rapid picks");
  if(dMiss>=3) reasons.push("mis-sorted "+dMiss+" drill items");
  if(falseConf) reasons.push("<b>right before, wrong on re-test</b> &mdash; the first right answer may have been a guess");
  /* P5.3: this said "a guess, not a misreading" of exactly the attempts the
     error-type table below now counts as misreads, and the 9 s was a flat
     number the code stopped using when the floor was scaled to the stem. */
  if(luckyFast) reasons.push("answered faster than the stem could be read and missed it &mdash; counted as a <b>misread</b> below");
  if(slowRight) reasons.push("right but slow &mdash; not yet automatic");
  if(hardHist.length<2 && qSeen) reasons.push("not yet proven on enough multi-step transfer questions");
  if(modalityCount<3 && known>0.15) reasons.push("evidence comes from only "+modalityCount+" learning mode"+(modalityCount===1?"":"s"));
  if(calErr!=null && calErr>0.22) reasons.push("confidence is poorly calibrated to actual accuracy");
  if(qRight > 0 && verified === 0 && qSeen >= 2) reasons.push("right answers here not yet confirmed by a second right answer in a row &mdash; unproven");
  if(traj && traj.dir === "sliding") reasons.push("<b>going backwards</b> &mdash; "+Math.round(traj.early*100)+"% earlier, "+Math.round(traj.late*100)+"% lately");
  else if(traj && traj.dir === "improving") reasons.push("improving &mdash; "+Math.round(traj.early*100)+"% &rarr; "+Math.round(traj.late*100)+"%");
  else if(traj && traj.dir === "stuck" && traj.late < 0.7) reasons.push("flat at "+Math.round(traj.late*100)+"% across repeated attempts");
  /* P2.V F25 sweep: "read" is the read-detection credit, not a click, and a topic can hold a
     little evidence while known is still under 0.15, so neither "never opened" nor "never
     tested" was always true */
  if(known<0.15 && !read) reasons.push(W ? "not yet read, with only a little answered here so far" : "not yet read or tested");
  else if(known<0.15) reasons.push(W ? "read, with only a little answered here so far" : "read but never tested");
  return {t, mastery, known, read, flag, qSeen, qRight, confWrong, falseConf, luckyFast, verified,
          rSeen, rMiss, dMiss, priority, reasons, wrong, modalityCount, transferN:hardHist.length,
          /* P3.4: evidence is the number of independent signals behind the flag;
             certainty is the word the UI prints for it. */
          signals:sigs, evidence:sigs.length, settle,
          certainty: sigs.length>=2 ? "proven" : sigs.length===1 ? "suspected" : "none",
          calibration:calErr==null?null:1-calErr};
}
function diagnose(){ const ev = ALLT().map(topicEvidence).sort((a,b)=>b.priority-a.priority);
  /* P5.2: the per-topic verdicts and the cross-topic concept threads are
     measured from the same records in the same pass, so no caller can see
     one without the other. Attached as a property rather than returned in a
     new shape, because ten call sites filter and map this array today. */
  ev.threads = conceptThreads(); return ev; }
function confusions(){
  const map = {};
  QS.forEach(q => { const a = S.qs[q.id]; if(!a || a.ok || a.pick==null) return;
    const key = q.c + "|" + q.o[a.pick];
    const m = (map[key] = map[key] || {c:q.c, opt:q.o[a.pick], n:0, right:[]});
    m.n++;
    /* Record what the answer SHOULD have been. Naming only the wrong half
       ("you chose X three times") tells you that you are wrong but not what to
       study; the pair X-instead-of-Y is the thing that is actually confused. */
    const r = stripTags(String(q.o[q.a]));
    if(m.right.indexOf(r) < 0) m.right.push(r);
  });
  const out = Object.values(map).filter(x => x.n >= 2);
  /* P2.5 (K20): rapid pairs. wireRapid keeps each pick by TEXT (lastPick, picks), because the
     options are re-permuted on every load; the same wrong text picked twice on one item is a
     repeated confusion exactly like a question pair. kind:"rapid" keeps them apart from the
     question pairs that errorTypes() classifies against. */
  RAPID.forEach(r => { const rec = S.rapid[r.i]; if(!rec || !Array.isArray(rec.picks)) return;
    const right = r.o[r.a], seen = {};
    rec.picks.forEach(p => { if(typeof p === "string" && p && p !== right) seen[p] = (seen[p] || 0) + 1; });
    Object.keys(seen).forEach(p => { if(seen[p] >= 2)
      out.push({kind:"rapid", c:r.c, opt:p, n:seen[p], right:[stripTags(String(right))], rid:r.i, q:r.q}); }); });
  DRILLS.forEach(d => { const r = S.drills[d.id];
    if(r && (r.missed||[]).length >= 3) out.push({drill:d, c:d.c, n:r.missed.length, of:(d.items||[]).length}); });
  return out.sort((a,b)=>b.n-a.n);
}
/* P5.3: the "answered too fast to have read it" floor, in one place. It was
   computed inline at answer time only, so the fast flag stored on a record and
   anything classifying that record later could drift apart. 260 ms a word is
   the rate this page has always used; the 6 s minimum stops a 17-word stem from
   setting a bar nobody could trip. */
function stemFloorMs(q){
  const words = String(q.s + " " + q.l).split(/\s+/).length;
  return Math.max(6000, Math.round(words * 260));
}
/* P5.3: WHAT KIND of wrong, per topic. "You got 12 wrong here" collapses three
   problems that need three different hours, so every wrong attempt stored in
   S.qs[*].hist is sorted into exactly one of them. h.d is ignored on purpose:
   it holds the difficulty as it stood AT ANSWER TIME and P3.2 re-rated the whole
   set, so old records carry the old scale and would mis-sort on it. */
function errorTypes(conf){
  /* The pairs are the ones confusions() already names -- "you chose X when the
     answer was Y" -- and nothing new is invented here. That set is behavioural:
     it needs the same wrong option picked on two questions of one topic before
     it exists at all, so offerN counts how many questions in a topic even OFFER
     each option, which is the hard ceiling on what can ever be a confusion.
     Options carry no markup, so the raw text confusions() keys on is safe here. */
  const offerN = {};
  QS.forEach(q => q.o.forEach((o, i) => { if(i === q.a) return;
    const k = q.c + "|" + o; offerN[k] = (offerN[k] || 0) + 1; }));
  const pair = {};
  (conf || confusions()).forEach(x => { if(x.drill || x.kind === "rapid") return; pair[x.c + "|" + x.opt] = x.right || []; });
  const zero = () => ({misread:0, confusion:0, gap:0, wrong:0, untimed:0, testable:0});
  const byTopic = {}, tot = zero();
  let timedRight = 0, fastRight = 0, floorLo = Infinity, floorHi = 0, slowestWpm = Infinity;
  QS.forEach(q => { const floor = stemFloorMs(q);
    if(floor < floorLo) floorLo = floor;
    if(floor > floorHi) floorHi = floor;
    /* The floor is set on the stem, but the options have to be read as well, so
       the rate it really demands is measured across both. That is the number
       that decides whether this is a floor or merely an average reading speed. */
    const wpm = String(q.s + " " + q.l + " " + q.o.join(" ")).split(/\s+/).length / (floor/60000);
    if(wpm < slowestWpm) slowestWpm = wpm;
    const a = S.qs[q.id]; if(!a) return;
    const right = stripTags(String(q.o[q.a]));
    ((a.hist || []).length ? a.hist : [a]).forEach(h => {
      const timed = typeof h.ms === "number" && h.ms > 0;
      if(h.ok){ if(timed){ timedRight++; if(h.ms < floor) fastRight++; } return; }
      const e = byTopic[q.c] = byTopic[q.c] || zero();
      const k = h.pick == null ? null : q.c + "|" + q.o[h.pick];
      e.wrong++; tot.wrong++;
      /* An attempt saved before times were recorded cannot be tested against the
         floor at all, so it is counted here and never becomes a misread. */
      if(!timed){ e.untimed++; tot.untimed++; }
      if(k && offerN[k] >= 2){ e.testable++; tot.testable++; }
      /* Order matters. An answer given before the stem could have been read is
         not evidence of a stable misconception, whatever option it landed on. */
      const kind = (timed && h.ms < floor) ? "misread"
        : (k && pair[k] && pair[k].indexOf(right) >= 0) ? "confusion" : "gap";
      e[kind]++; tot[kind]++; }); });
  /* How much of the bank the pair rule can reach at best, ignoring the student
     entirely: a wrong option offered by only one question in its topic can never
     reach the two sightings confusions() requires. */
  let slots = 0, reachable = 0;
  QS.forEach(q => q.o.forEach((o, i) => { if(i === q.a) return; slots++;
    if(offerN[q.c + "|" + o] >= 2) reachable++; }));
  return {byTopic, tot, timedRight, fastRight, floorLo, floorHi, slowestWpm,
          pairs:Object.keys(pair).length, slots, reachable,
          testable: tot.wrong ? tot.testable/tot.wrong : 0};
}
function errorTypesHTML(et){
  /* Every number on this page already says HOW MUCH is wrong. This is the only
     one that says what kind, and the three sentences under the table are the
     point of it -- a count with no instruction attached changes nothing. */
  const head = `<div class="sectiontitle" id="errtypesec" style="margin-top:34px"><h3>Error types</h3>
    <span class="st2">Twelve wrong in one topic is not one problem. Twelve wrong because the stem went past too
    quickly, twelve wrong because two lesions keep swapping, and twelve wrong because the material was never
    learned are three different repairs. Every wrong attempt held against a question is sorted into one of them.</span></div>`;
  /* P2.V F25 sweep: only question attempts are sorted here, so a rapid or drill miss must not
     make "nothing has been answered wrongly" false */
  if(!et.tot.wrong) return head + `<div class="empty">No question has been answered wrongly yet, so there is nothing
    to sort. This fills in on the first missed question.</div>`;
  const rows = Object.keys(et.byTopic).sort((a, b) => et.byTopic[b].wrong - et.byTopic[a].wrong).slice(0, 12);
  const pctBank = et.slots ? Math.round(100*et.reachable/et.slots) : 0;
  return head + `<div class="tblwrap"><table><thead><tr><th>Topic</th>
    <th title="Answered faster than the stem itself could be read">Misread</th>
    <th title="The option chosen is already a named pair for that answer">Confusion</th>
    <th title="Neither of the other two">Knowledge gap</th><th>Wrong</th></tr></thead><tbody>
    ${rows.map(id => { const e = et.byTopic[id], t = findT(id) || {t:id};
      return `<tr><td>${esc(t.t)}</td>
      <td class="tnum" style="${e.misread?"color:var(--warn);font-weight:700":""}">${e.misread}</td>
      <td class="tnum" style="${e.confusion?"color:var(--crit);font-weight:700":""}">${e.confusion}</td>
      <td class="tnum">${e.gap}</td><td class="tnum">${e.wrong}</td></tr>`; }).join("")}
  </tbody></table></div>
  <div class="call key" style="margin-top:18px"><span class="cl">What each one asks you to do differently</span>
    <b>Misread</b> &mdash; cover the options, read the last line of the stem again, and say in your own words what is
    being asked before you uncover them; these were answered before the stem could have been read, so more
    questions on the topic will not move this number.<br>
    <b>Confusion</b> &mdash; put the two named things side by side, write down the single feature that separates
    them, then answer questions in which only that feature changes; re-reading the whole topic leaves the pair
    fused.<br>
    <b>Knowledge gap</b> &mdash; go back to the teaching section and read it before the missed question comes back
    (a miss returns in about ${spanWord(BOXES[1])}) rather than retrying it from memory of its options; re-testing
    material that was never encoded returns the same wrong answer.</div>
  <div class="call" style="margin-top:14px"><span class="cl">How these three numbers are measured</span>
    <b>Too fast</b> is measured against the stem rather than against a flat number: <b>260&#8239;ms a word</b>, never
    less than <b>6&#8239;s</b>, which across this bank runs from ${Math.round(et.floorLo/1000)}&#8239;s on the shortest
    stem to ${Math.round(et.floorHi/1000)}&#8239;s on the longest. The options have to be read on top of the
    stem, so even the most forgiving question here demands ${Math.round(et.slowestWpm)} words a minute across stem
    and options to come in under the floor, which is why anything below it is treated as unread rather than as
    fast.${
    et.timedRight >= 4 && et.fastRight/et.timedRight >= 0.25 ? ` <b>Check this one:</b> ${et.fastRight} of your
      ${et.timedRight} timed correct answers also came in under the floor, so on your own times the floor is sitting
      too high ${/* P2.V F25 sweep: said "the misread column is over-counting" with that column at 0 */
      et.tot.misread ? "and the " + et.tot.misread + " in the misread column may include misses you did read."
        : "&mdash; no miss has been counted as a misread yet, but a quick miss would be, read or not."}` : ""}${
    et.tot.untimed ? ` ${et.tot.untimed} of your ${et.tot.wrong} wrong attempt${et.tot.wrong===1?"":"s"} ${et.tot.untimed===1?"was":"were"} saved without a time, so ${et.tot.untimed===1?"it":"they"} can
      never be called ${et.tot.untimed===1?"a misread":"misreads"} and that column is a lower bound.` : ""}
    <br><b>Confusion</b> reuses the question pairs the <i>Specific confusions</i> list below is built from (its
    rapid pairs are not counted here), and nothing else: a
    pick counts only when that exact option is already a named pair and the answer it displaced is one of the answers
    on that pair. A pair needs the same wrong option offered on <b>two</b> questions of one topic, and only
    ${et.reachable} of the ${et.slots} wrong option${et.slots===1?"":"s"} in this bank (${pctBank}%) ${et.reachable===1?"is":"are"}, so at most ${pctBank}% of wrong
    picks can ever be classified this way; ${et.tot.testable} of your ${et.tot.wrong} wrong attempt${et.tot.wrong===1?"":"s"}
    (${pct(et.tot.testable, et.tot.wrong)}%) ${et.tot.testable===1?"sits":"sit"} on one. A low confusion count means the pairs could not see it, not
    that nothing is confused.</div>`;
}
/* P5.4: what counts as one sitting. The rule is a 3 h GAP between consecutive
   answers, not a 3 h window from the first one: someone working 09:00 to 16:00
   with coffee breaks is in one long sitting, and a fixed window would reset the
   comparison at noon for a reason they would never recognise. The sitting also
   has to still be running -- if the newest answer is more than 3 h old there is
   no current sitting, so yesterday's slide never greets them this morning. */
const SITTING_GAP = 3 * 3600e3;
/* P5.4: practice and rapid answers go into ONE stream, ordered by time.
   Fatigue belongs to the student, not to the surface: twenty-five rapid picks
   and then ten vignettes is an hour of work, and a per-mode counter would be
   blind to exactly that hour. Drills and image spot stay out because neither
   stores a timestamped per-answer outcome to order against these. */
function sittingAnswers(now){
  const all = [];
  QS.forEach(q => { const a = S.qs[q.id]; if(!a) return;
    /* Same fallback errorTypes() uses: a record saved before hist existed is
       one attempt, and it carries its own ts. */
    ((a.hist || []).length ? a.hist : [a]).forEach(h => {
      /* P5.4/P5.V FIX 3: d is the SAME number "Hardest first" sorts on --
         POOLS[m].diff -- read now rather than from the record, because P3.2
         re-rated the set and a stored d carries the old scale. */
      if(h && +h.ts > 0) all.push({ts:+h.ts, ok:!!h.ok, practice:1, d:POOLS.practice.diff(q)}); }); });
  RAPID.forEach(r => { const sr = S.rapid[r.i]; if(!sr) return;
    (sr.hist || []).forEach(h => { if(h && +h.ts > 0)
      all.push({ts:+h.ts, ok:!!h.ok, practice:0, d:POOLS.rapid.diff(r)}); }); });
  all.sort((a, b) => a.ts - b.ts);
  const t = +now > 0 ? +now : Date.now();
  if(!all.length || t - all[all.length - 1].ts > SITTING_GAP) return [];
  let i = all.length - 1;
  while(i > 0 && all[i].ts - all[i - 1].ts <= SITTING_GAP) i--;
  return all.slice(i);
}
/* P5.4: thirty answers before this can say anything at all, because two
   fifteen-answer windows that do not overlap need thirty. Below that the page
   says NOTHING -- no counter, no "you are at 22". A break prompt at answer
   twelve is noise, and a partial comparison off overlapping windows would be
   worse than noise because it would look like a measurement. */
const FATIGUE_MIN = 30;   /* answers in the sitting before the signal exists   */
const FATIGUE_WIN = 15;   /* answers per window, first vs last                 */
const FATIGUE_ON  = 25;   /* points of drop that turn the line on              */
const FATIGUE_OFF = 10;   /* points it has to come back to before it turns off */
const FATIGUE_MIX = 0.5;  /* how far the practice/rapid mix may shift          */
/* P5.V FIX 3: the banner used to assert "items come up shuffled", which the set
   builder makes false -- it offers "Hardest first", and a sitting can hold
   several sets built different ways, so no UI flag read at render time could
   tell you what the two windows actually held. The windows are compared on
   difficulty directly instead, on the page's own 1-to-3 scale. A quarter of a
   level is about four items of fifteen moving up a grade. */
const FATIGUE_HARD = 0.25; /* levels the last window may exceed the first by     */
function sessionFatigue(now){
  const s = sittingAnswers(now);
  const out = {n:s.length, on:false, drop:0, first:0, last:0, mix:0, hard:0, latched:false};
  if(s.length < FATIGUE_MIN) return out;
  const acc = a => Math.round(100 * a.filter(h => h.ok).length / a.length);
  const share = a => a.reduce((n, h) => n + h.practice, 0) / a.length;
  const hard = a => a.reduce((n, h) => n + (h.d || 2), 0) / a.length;
  const first = s.slice(0, FATIGUE_WIN), fp = acc(first), fs = share(first), fh = hard(first);
  /* The on/off state is replayed over the whole sitting rather than stored, so
     it survives a reload and cannot drift out of step with the answers.
     Hysteresis: it latches at a 25-point drop and only lets go once the gap has
     closed to under 10. A purely live line would blink on and off around 25
     every second answer; a purely latched one would still be claiming a
     30-point drop after the student had recovered. The 15-point dead band means
     it can only change its mind on a change too big to be sampling noise. */
  let on = false, drop = 0, win = first;
  for(let k = FATIGUE_MIN; k <= s.length; k++){
    win = s.slice(k - FATIGUE_WIN, k);
    drop = fp - acc(win);
    /* (P1.7-reopen2: was "Rapid is three options" - rapid has five since P1.1;
       the task difference that matters is the one-line stem, not the count.)
       Rapid is five short options and one line; practice is five options and a
       vignette, so a sitting that starts on one and ends on the other can post
       a 25-point "drop" that is only a change of task. The line may therefore
       only switch ON while the two windows are the same kind of work. The guard
       is not re-applied once it is on, or a drifting mix would make it flicker. */
    if(on){ if(drop < FATIGUE_OFF) on = false; }
    /* And the same again for difficulty. "Hardest first" is a real ordering the
       student can choose, so a drop across a window that is genuinely harder is
       partly the set rather than tiring, and the line must not claim otherwise.
       Like the mix guard it is not re-applied once on, or a drifting set would
       make it flicker. */
    else if(drop >= FATIGUE_ON && Math.abs(fs - share(win)) <= FATIGUE_MIX
            && hard(win) - fh <= FATIGUE_HARD) on = true;
  }
  out.first = fp; out.last = acc(win); out.drop = drop;
  out.mix = +Math.abs(fs - share(win)).toFixed(2); out.hard = +(hard(win) - fh).toFixed(2);
  out.on = out.latched = on;
  return out;
}
/* P5.4: the line itself. No close button on purpose -- a message that can be
   dismissed is dismissed once and then never seen again, which is the same as
   not showing it. It is amber rather than red because the student has done
   nothing wrong; it is not in the live region and carries no data-verdict, so
   it is never spoken over the answer they just gave. */
function fatigueHTML(f){
  if(!f || !f.on) return "";
  return `<div class="call step" style="margin:0 0 18px"><span class="cl">This sitting</span>
    <b>Accuracy has dropped ${f.drop} points this session &mdash; take a break.</b><br>
    Your first ${FATIGUE_WIN} answers this sitting were ${f.first}% right; the last ${FATIGUE_WIN} were
    ${f.last}%. ${/* P2.V F25 sweep: said "the same average difficulty" whatever the windows held; the
      guard allows the last window up to FATIGUE_HARD harder, and is not re-applied once the line is on */
      f.hard <= 0 ? "The last stretch was no harder on average than the first, so the later items were not the"
        + " harder ones &mdash; this is what tiring looks like."
      : f.hard <= FATIGUE_HARD ? "The last stretch was at most a quarter of a level harder on average than the first"
        + " (on the page's 1-to-3 difficulty scale), close to the same difficulty &mdash; this is what tiring looks like."
      : "The last stretch is now " + f.hard + " of a level harder on average than the first (on the page's 1-to-3"
        + " difficulty scale), so part of this drop may be the harder items; it began as a drop on items at most a"
        + " quarter of a level harder."} Twenty minutes away from the screen will do more for the next hour than twenty more
    questions, and answers given past this point put the wrong items on your review schedule. The line goes on
    its own once the gap closes to under ${FATIGUE_OFF} points, or after a break of more than ${SITTING_GAP/3600e3} hours.</div>`;
}
/* Items missed repeatedly DESPITE coming back on the spacing schedule. Re-testing
   these again is the one thing that reliably does not work — the answer has never
   been encoded, so it needs re-reading, not another attempt. */
function leeches(){
  const out = [];
  QS.forEach(q => { const a = S.qs[q.id]; if(!a) return;
    const miss = (a.hist||[]).filter(h=>!h.ok).length;
    if(miss >= 3) out.push({kind:"q", qid:q.id, c:q.c, n:miss, label:stripTags(String(q.l||q.s)).slice(0,110)}); });
  RAPID.forEach(r => { const sr = S.rapid[r.i]; if(!sr) return;
    if((sr.miss||0) >= 3) out.push({kind:"r", c:r.c, n:sr.miss, label:stripTags(String(r.q))}); });
  return out.sort((a,b)=>b.n-a.n);
}
/* Accuracy alone cannot tell "60% and climbing" from "60% and sliding", and those
   two need opposite responses. Compares the older half of attempts with the newer. */
function trajectory(tid){
  const hs = QS.filter(q=>q.c===tid).flatMap(q=>((S.qs[q.id]||{}).hist)||[])
    .filter(h=>h && h.ts).sort((a,b)=>a.ts-b.ts);
  if(hs.length < 4) return null;
  const half = Math.floor(hs.length/2);
  const early = hs.slice(0, half), late = hs.slice(half);
  const ea = early.filter(h=>h.ok).length/early.length;
  const la = late.filter(h=>h.ok).length/late.length;
  const delta = la - ea;
  return {delta, early:ea, late:la,
    dir: delta > 0.15 ? "improving" : delta < -0.15 ? "sliding" : "stuck"};
}
function calibration(){
  const c = {};
  QS.forEach(q => { const r = S.qs[q.id]; if(!r || !r.conf) return;
    const x = c[r.conf] = c[r.conf] || {n:0, r:0}; x.n++; if(r.ok) x.r++; });
  return c;
}

/* @region engine.progress (ENGINE, engine) */
/* ---------------------------------------------------------------- progress */
function stageOf(pid){ return PATH.find(p => p.id === pid); }
function stageQs(p){
  if(p.kind === "final") return QS;
  const set = new Set(p.topics||[]);
  const own = QS.filter(q => set.has(q.c));
  let teach = own.filter(q => !isReserved(q.id));
  if(teach.length < 2) teach = own;
  /* A 2-item gate needing 2 of 2 is a coin toss, not a check. Top it up from
     material already covered, which also interleaves. */
  if(teach.length < 5){
    const have = new Set(teach.map(q=>q.id));
    /* Draw from stages EARLIER in the path -- by the time this gate is reached
       that material has been taught, and mixing it in is also interleaving. */
    const here = PATH.indexOf(p);
    const earlier = new Set(PATH.slice(0, here < 0 ? 0 : here).flatMap(x => x.topics||[]));
    let top = QS.filter(q => !have.has(q.id) && !isReserved(q.id) && earlier.has(q.c));
    if(top.length < 5 - teach.length)
      top = top.concat(QS.filter(q => !have.has(q.id) && !isReserved(q.id) && !earlier.has(q.c) && !set.has(q.c)));
    teach = teach.concat(shuffle(top).slice(0, 5 - teach.length));
  }
  return teach;
}
function stageRapid(p){ const set = new Set(p.topics||[]); return RAPID.filter(r => set.has(r.c)); }
/* P2.2 (R1, R2) - the diagnostic and the final are found by KIND, never by a fixed id
   ("p0") or by position; the final's size is META.finalN (else the stage's own n). */
const diagStage  = () => PATH.find(p => p.kind === "diag") || null;
const finalStage = () => PATH.find(p => p.kind === "final") || PATH[PATH.length-1] || null;
const finalN = () => Math.min(QS.length, Math.max(1, +META.finalN || +(finalStage()||{}).n || 40));
/* After the diagnostic, topics you clearly already knew are marked so the path
   can tell you to skim rather than read in full. The order stays fixed, because
   a sequential path is the point -- what changes is the time you spend. */
function diagVerdict(tid){
  const d = S.stage[(PATH.find(p=>p.kind==="diag")||{}).id];
  if(!d || !d.done) return null;
  const rs = RAPID.filter(r => r.c === tid && S.rapid[r.i] && S.rapid[r.i].diag);
  if(!rs.length) return null;
  const right = rs.filter(r => S.rapid[r.i].diagOk).length;
  return right === rs.length ? "solid" : (right === 0 ? "cold" : null);
}
/* P2.V F40 - diagVerdict() was never called, so the diagnostic changed nothing the student could
   see: the run ended on the Path with no result, and no stage said what it had found. It now tags
   each unit stage (the path list and the plan's stage rows) and the Path shows the result once. */
function stageDiagTag(p){
  if(!p || p.kind !== "unit") return "";
  const v = (p.topics||[]).map(diagVerdict).filter(Boolean); if(!v.length) return "";
  const cold = v.filter(x => x === "cold").length, solid = v.length - cold;
  return ' <span class="tag ghost" data-diag>' + (!solid ? "diagnostic: missed" : !cold ? "diagnostic: right"
    : "diagnostic: " + solid + " right, " + cold + " missed") + '</span>';
}
function diagNote(set){
  const items = (set||[]).map(id => RBYID[id]).filter(Boolean);
  const ok = r => !!(S.rapid[r.i] || {}).diagOk, right = items.filter(ok).length;
  const name = r => esc((findT(r.c) || {t:r.c}).t);
  const missed = items.filter(r => !ok(r)).map(name), got = items.filter(ok).map(name);
  const lines = [];
  if(missed.length) lines.push("Missed: " + missed.join("; ") + ".");
  if(got.length) lines.push("Right: " + got.join("; ") + ".");
  lines.push("The stages below now carry these results. Their order stays the same: read a missed topic closely; "
    + "one right answer is a good start, not proof that you know the topic.");
  /* promote() puts a first answer, right or wrong, on the first step of BOXES */
  lines.push("Each item you answered is now on the spacing schedule and comes back for review (Review first in the plan, Due now in Rapid): "
    + "a first answer in about " + spanWord(BOXES[1]) + ", then further apart each time you get it right.");
  return {title:"Diagnostic done: " + right + " of " + items.length + " right", lines:lines, fresh:true};
}
function stageProgress(p){
  const st = S.stage[p.id] || {};
  if(p.kind === "diag")  return st.done ? 1 : (st.total ? clamp((st.n||0)/st.total, 0, 0.95) : 0);
  if(p.kind === "final"){ const q = st.quiz || {};
    return q.done ? clamp(q.acc||0,0,1) : (q.total ? clamp((q.n||0)/q.total,0,0.95) : 0); }
  const tp = p.topics || [];
  const readN = tp.filter(id => (S.topics[id]||{}).read).length / Math.max(1, tp.length);
  const quiz  = (st.quiz && st.quiz.done) ? 1 : ((st.quiz && st.quiz.n) ? st.quiz.n / Math.max(1, stageQs(p).length) : 0);
  /* Reading used to be worth half a stage. Re-reading is the weakest study
     technique there is, so most of the credit now comes from retrieval. */
  return clamp(0.28*readN + 0.52*quiz + 0.20*(st.rapid?1:0), 0, 1);
}
/* The final's progress IS your accuracy, so a 0.995 gate silently demanded 100%
   on 40 questions and the "you have finished this block" screen was unreachable. */
const stageDone = p => p.kind === "final"
  ? !!((S.stage[p.id]||{}).quiz||{}).done && stageProgress(p) >= 0.80
  : stageProgress(p) >= 0.995;
function currentStage(){ const i = PATH.findIndex(p => !stageDone(p)); return i === -1 ? PATH[PATH.length-1] : PATH[i]; }
function blockScore(b){ return b.topics.reduce((a,t)=>a+topicEvidence(Object.assign({blk:b},t)).mastery,0)/b.topics.length; }
function blockKnown(b){ return b.topics.reduce((a,t)=>a+topicEvidence(Object.assign({blk:b},t)).known,0)/b.topics.length; }
/* Two separate numbers, because they answer different questions.
   overall() = how much of this you have actually PROVEN you know.
   covered() = how much of the material you have TOUCHED. */
function overall(){
  const ev = ALLT().map(topicEvidence);
  const num = ev.reduce((a,e)=>a + e.mastery*e.known, 0);
  const den = ev.reduce((a,e)=>a + e.known, 0);
  if(den < 0.5) return 0;                    /* not enough evidence to claim a number */
  return Math.round(100 * (num/den) * Math.min(1, den/ev.length));
}
function covered(){
  const ev = ALLT().map(topicEvidence);
  const readN = ev.filter(e=>e.read).length / Math.max(1, ev.length);   /* P2.V F1: a block with no topics yet read "NaN% covered" */
  const qDone = QS.filter(q=>S.qs[q.id]).length / Math.max(1,QS.length);
  const rSeen = Object.values(S.rapid).filter(r=>r.box>0).length / Math.max(1,RAPID.length);
  const dDone = Object.keys(S.drills).length / Math.max(1,DRILLS.length);
  const sDone = Object.keys(S.spot).length / Math.max(1,Object.keys(IMGS).length);
  return Math.round(100*(0.30*readN + 0.30*qDone + 0.22*rSeen + 0.09*dDone + 0.09*sDone));
}
function stats(){
  const qDone = QS.filter(q=>S.qs[q.id]);
  const correct = qDone.filter(q=>S.qs[q.id].ok).length;
  return { read: ALLT().filter(t=>(S.topics[t.id]||{}).read).length, topics: ALLT().length,
    qDone:qDone.length, qTotal:QS.length, correct, acc:pct(correct,qDone.length),
    rapid:Object.values(S.rapid).filter(r=>r.box>0).length, rapidTotal:RAPID.length,
    drills:Object.keys(S.drills).length, drillsTotal:DRILLS.length,
    spot:Object.keys(S.spot).length, spotTotal:Object.keys(IMGS).length };
}
function bumpDay(mins){
  const k = todayKey(), d = S.days[k] = S.days[k] || {acts:0, mins:0, done:[]};
  d.acts++; d.mins = (+d.mins || 0) + (mins||0);
}
/* P2.V F5 - the calendar printed "14 activities · 0 min" after rapid picks and drills: only a
   topic marked read (its nominal minutes) and a practice answer (a flat 1) ever added minutes.
   S.days[k].mins is now measured time on the page, the same way for every activity: the time
   from one click, key press, wheel or touch scroll to the next, counted only while the gaps
   stay within IDLE_GAP (5 minutes) and the page stays visible, so a tab left open is not
   counted. Answers still count as activities through bumpDay(). */
const IDLE_GAP = 5*60e3;
let ACTIVE_AT = 0;
function noteActive(){
  const now = Date.now(), gap = now - ACTIVE_AT; ACTIVE_AT = now;
  if(!(gap > 0 && gap <= IDLE_GAP)) return;
  const k = todayKey(), d = S.days[k] = S.days[k] || {acts:0, mins:0, done:[]};
  d.mins = (+d.mins || 0) + gap/60000;
}
["pointerdown", "keydown", "wheel", "touchmove"].forEach(t => document.addEventListener(t, noteActive, {capture:true, passive:true}));
document.addEventListener("visibilitychange", () => { if(document.visibilityState !== "visible") ACTIVE_AT = 0; });
function streak(){
  let n = 0; const d = new Date();
  for(let i=0;i<400;i++){
    /* P2.2 (R15) - S.days is keyed by LOCAL date; toISOString() is UTC and miscounted
       the streak around local midnight for anyone not on UTC. */
    const k = dayKeyLocal(d);
    if(S.days[k] && S.days[k].acts) n++;
    else if(n > 0 || k !== todayKey()) break;
    d.setDate(d.getDate()-1);
  }
  return n;
}
const daysLeft = () => Math.max(0, Math.ceil((EXAM - Date.now())/864e5));
/* daysLeft() clamps at 0, so "the exam is today" and "the exam was last month"
   both read as 0 and the plan announced "0 days to Step 1" forever. Anything that
   needs to tell those two apart asks this instead, which leaves daysLeft()'s
   non-negative contract (priority weighting, calendar span) untouched. */
const examPassed = () => isFinite(+EXAM) && +EXAM <= Date.now();
/* P2.V F6 - the exam is stored at 08:00, so on the exam day itself examPassed()
   turns true at breakfast. The header already read "Exam day" then, but the plan
   said "exam date passed" and asked for a new date. Only a DATE behind today has
   passed; the header, the plan head and the banner all ask this one question. */
const examDateGone = () => examPassed() && examISO() < todayKey();
/* P2.V F6/N2 - the header said "10d 7h" (to 08:00 on the exam day) while the plan said "11 days"
   (daysLeft() rounds that span up). Both now print this one number: whole calendar days from
   today's date to the exam date, so they cannot disagree. Rounded, so a daylight-saving day of
   23 or 25 hours still counts as one day. */
const examDaysAway = () => Math.round((new Date(examISO() + "T00:00:00") - new Date(todayKey() + "T00:00:00")) / 864e5);
/* P3.3 - which day of the CHOSEN pace this is. Counting every day ever studied
   meant that picking a 5-day pace on study-day 11 opened on "day 5 of 5":
   paceLeft was 1 and todaysPlan() dropped the whole remainder into today. Only
   days on or after S.paceSetAt count now. An unanchored state (paceSetAt 0, so
   not yet through repairState) falls back to the old all-time count. */
function paceStartKey(){
  const t = +S.paceSetAt;
  return t > 0 ? dayKeyLocal(new Date(t)) : "";   /* "" sorts before every key: count all */
}
/* P2.V F8 follow-up - today counts once, whether or not it has activity yet. The old sum
   added 1 only when today had no record at all, but a plan-row click writes today's record
   with acts 0 (to tick the row), and a day with acts 0 is not in "used" either: so the
   first plan-row click of a fresh day turned "day 2 of this pace" into "day 1", and
   paceLeftNow() grew by a day. Days before today count when they have activity. */
function blockDay(){
  const since = paceStartKey(), today = todayKey();
  const before = Object.keys(S.days).filter(k => k >= since && k < today && S.days[k].acts).length;
  return Math.min(S.paceDays||5, before + 1);
}

/* @region engine.header (LITERALS, engine) */
/* ---------------------------------------------------------------- header */
const MODES = [["path","Path"],["learn","Learn"],["practice","Practice"],["drill","Drills"],
               ["rapid","Rapid"],["spot","Images"],["weak","Weak Spots"],["gloss","Glossary"]];
let lastNavHTML = "";
function paintHeader(){
  const away = examDaysAway();
  const cd = el("countdown");
  if(cd){
    /* P6 cleanup - this badge read "Exam day" from the exam morning onwards and
       then never changed, so the header contradicted the plan view. Ask the same
       examPassed() the P1.5 banner asks and, once the date is genuinely behind
       us, echo the banner's own words. Comparing examISO() with todayKey() keeps
       the exam day itself reading "Exam day" instead of "Date passed". */
    cd.innerHTML = away > 0 ? esc(examNameCap())+" in <b>"+away+" day"+(away===1?"":"s")+"</b><br>"+EXAM.toLocaleDateString(undefined,{month:"short",day:"numeric"})
                          : examDateGone()
                            ? "<b>Date passed</b><br>set a new date"
                          : "<b>Exam day</b>";
    cd.title = "Click to change the date of " + EXAM_NAME;
    cd.onclick = ()=>{ go("path"); setTimeout(()=>{ const i=el("examdate"); if(i){ i.scrollIntoView({block:"center"}); i.focus(); } },40); };
  }
  const o = overall(), cov = covered(), r = el("ringfill");
  if(r) r.setAttribute("stroke-dasharray", (o/100*97.4).toFixed(1)+" 97.4");
  const pn = el("pctnum"); if(pn) pn.textContent = o+"%";
  const rl = el("ringlbl");
  if(rl) rl.textContent = "proven \u00b7 " + cov + "% covered";
  const flags = diagnose().filter(e=>e.flag).length;
  const nav = el("modes");
  if(nav){
    const html = MODES.map(([k,l])=>
      '<button data-m="'+k+'"'+(S.mode===k?' aria-current="true"':'')+'>'+l+
      (k==="weak"&&flags?'<span class="nbadge">'+flags+'</span>':'')+'</button>').join("")
      + '<button class="yieldbtn'+(S.hiOnly?" on":"")+'" data-yield="1" title="Show only material that is high yield for '+YAXES[yAxis()]+' in the sets, the rail and the review rows of the daily plan (the path always covers the whole block)">'
      + (S.hiOnly ? "High yield only" : "All yields") + '</button>'
      /* P2.2 - the yield-axis toggle, next to the filter it steers: which of the two
         yields (Step 1, the course exam) the rail, that filter and the Weak Spots
         priorities read */
      + '<button class="yieldbtn" data-yaxis="1" title="Yield shown for '+YAXES[yAxis()]+
        '. Press to switch to '+YAXES[yAxis()==="step1"?"exam":"step1"]+'">Yield: '+YAXES[yAxis()]+'</button>'
      + '<button class="searchbtn" data-open-search="1" title="Search everything (press /)">Search <span class="kbd">/</span></button>';
    if(html !== lastNavHTML){ nav.innerHTML = html; lastNavHTML = html; }
  }
}
/* Nav clicks are DELEGATED and bound ONCE. Previously paintHeader() rebuilt the
   nav every 30 s, silently detaching the per-button handlers - which is exactly
   why tabs sometimes refused to switch until something else re-rendered. */
function bindChrome(){
  /* P2.5: the header can wrap to two lines on a desktop; the sticky rail reads its height */
  const hd = document.querySelector("header");
  if(hd && window.ResizeObserver) new ResizeObserver(() =>
    document.documentElement.style.setProperty("--hh", hd.offsetHeight + "px")).observe(hd);
  const nav = el("modes");
  if(nav) nav.addEventListener("click", e => {
    const b = e.target.closest("button"); if(!b) return;
    if(b.dataset.openSearch){ openSearch(); return; }
    /* P2.V F13 sweep: the yield toggles redraw the view in place (rerenderHere keeps an
       open lesson's disclosures, popups and scroll) */
    /* P2.V F8 - an empty-set notice describes a set asked for under the old filter, so a toggle clears it
       (it used to stay up, "No rapid pick is due", beside a Due now (2) the toggle had just refilled) */
    if(b.dataset.yield){ S.hiOnly = !S.hiOnly; SET_EMPTY = null; lastNavHTML = ""; rerenderHere(); return; }
    if(b.dataset.yaxis){ S.yAxis = yAxis() === "step1" ? "exam" : "step1"; SET_EMPTY = null; lastNavHTML = ""; rerenderHere(); return; }
    if(b.dataset.m) go(b.dataset.m);
  });
  document.addEventListener("keydown", e => {
    const typing = /^(INPUT|TEXTAREA)$/.test((e.target||{}).tagName||"");
    if(e.key === "/" && !typing){ e.preventDefault(); openSearch(); }
    if(e.key === "?" && !typing){ e.preventDefault(); dockOpen = true; paintDock(); }
    if(e.key === "Escape") closeSearch();
    if((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)){ e.preventDefault(); openSearch(); }
  });
  window.addEventListener("scroll", ()=>{ S.scroll[S.mode] = window.scrollY; }, {passive:true});
}
function go(m, cur){
  SET_EMPTY = null;   /* P2.3: an "empty set" notice belongs to the click that asked for it */
  S.scroll[S.mode] = window.scrollY;
  S.mode = m; if(cur !== undefined) S.cur = cur;
  if(cur !== undefined) S.scroll[m] = 0;
  save(); render(); window.scrollTo({top:0, behavior:"instant"});
  if(m === "learn" && cur !== undefined) landOnTopic();
}
/* P2.V N4 - where the rail stacks above the lesson (980 px and below), a topic change (rail,
   next/previous, search, path, weak spots) lands on the topic heading, just under the sticky
   header, instead of the page top. The desktop keeps the plain scroll to the top: its rail is
   a column beside the lesson, so the heading is already there. */
function landOnTopic(){
  if(!(window.matchMedia && window.matchMedia("(max-width:980px)").matches)) return;
  const h = document.querySelector("#app .topichead"); if(!h) return;
  const hd = document.querySelector("header");
  const y = Math.max(0, Math.round(h.getBoundingClientRect().top + window.scrollY - (hd ? hd.offsetHeight : 0) - 12));
  window.scrollTo({top:y, behavior:"instant"});
  /* the picked rail item is now inside the closed fold, so restoreFocus() could only park focus
     on the rail itself, above the view; the new lesson's heading is where the reader is */
  const h2 = h.querySelector("h2");
  if(h2){ h2.setAttribute("tabindex", "-1"); try{ h2.focus({preventScroll: true}); }catch(e){} }
}
/* @region engine.focus (ENGINE, engine) */
/* =====================================================================
   FOCUS CONTINUITY (P1.2)
   What was wrong: render() throws the whole app subtree away and builds it
   again, so the control a keyboard or screen-reader user was standing on
   stops existing and the browser drops them on the document body. Every
   answer therefore dumped them back at the top of the page.
   Why this is right: the new markup is produced from the same state, so the
   control has a twin. captureFocus() records it by identity - its id, else
   its data- attributes plus its trimmed label - instead of by object
   reference, and restoreFocus() stands the reader back on that twin after
   wire() has re-attached the handlers. Focus is always taken with
   preventScroll, so S.scroll stays the only thing that moves the page.
   ===================================================================== */
const FOCUSABLE_SEL = "a[href],button,input,select,textarea,summary,[tabindex],[contenteditable]";
function isTabbable(n){
  if(!n || n.disabled || n.tabIndex < 0) return false;
  /* a control inside a collapsed details element still reports client rects in
     Chrome, yet the browser silently refuses to focus it */
  if(typeof n.checkVisibility === "function") return n.checkVisibility({checkVisibilityCSS: true});
  return n.getClientRects().length > 0;
}
function captureFocus(node){
  /* P2.V F31: node lets the lightbox record its opener the same way */
  const a = node || document.activeElement;
  /* render() rebuilds the app subtree AND repaints the header nav and the
     dock, so anything in the document can be what is about to be destroyed */
  if(!a || a === document.body || a === document.documentElement) return null;
  const data = {};
  for(let i = 0; i < a.attributes.length; i++){
    const at = a.attributes[i];
    if(at.name.slice(0, 5) === "data-") data[at.name] = at.value;
  }
  return {id: a.id || "", tag: a.tagName, data: data,
          text: (a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120)};
}
function focusTwin(sig){
  if(sig.id){ const byId = el(sig.id); if(byId) return byId; }
  const keys = Object.keys(sig.data);
  if(!keys.length && !sig.text) return null;      /* nothing to recognise it by */
  const pool = document.querySelectorAll(FOCUSABLE_SEL);
  let loose = null;
  for(let i = 0; i < pool.length; i++){
    const n = pool[i];
    if(n.tagName !== sig.tag) continue;
    let same = true;
    for(let j = 0; j < keys.length; j++) if(n.getAttribute(keys[j]) !== sig.data[keys[j]]){ same = false; break; }
    if(!same) continue;
    if((n.textContent || "").replace(/\s+/g, " ").trim().slice(0, 120) === sig.text) return n;
    /* same data identity, different label (a counter, a score, "Hide markup") */
    if(keys.length && !loose) loose = n;
  }
  return loose;
}
/* An answered option comes back disabled and cannot hold focus. Climb to the
   nearest ancestor that still contains something tabbable - in practice the
   answer card - so the next Tab continues from the answer panel rather than
   from the top of the document. */
function focusHolder(node){
  let p = node.parentElement;
  while(p && p !== document.body){
    const kids = p.querySelectorAll(FOCUSABLE_SEL);
    for(let i = 0; i < kids.length; i++) if(kids[i] !== node && isTabbable(kids[i])) return p;
    p = p.parentElement;
  }
  return null;
}
/* P2.V F31 - where a reader starts when a view, or a new item in it, is drawn and nothing they
   were on survives: the question, the rapid prompt, the item to sort, the topic heading. A view
   without one of these falls back to the main landmark, as before. */
function viewLead(){
  const app = el("app"); if(!app) return null;
  const n = app.querySelector("[data-viewlead], .qstem, .rfq, .sortitem, .sumhead, .topichead h2");
  if(!n) return null;
  if(!n.hasAttribute("tabindex")) n.setAttribute("tabindex", "-1");
  return n;
}
/* ...and the same landing for a render that started with focus already on the body (a search
   result: the search dialog, which held focus, is removed before the view is drawn) */
function landFocus(){
  const a = document.activeElement;
  if(a && a !== document.body && a !== document.documentElement) return;
  const t = viewLead() || document.querySelector("main"); if(!t) return;
  if(t.tabIndex < 0 && !t.hasAttribute("tabindex")) t.setAttribute("tabindex", "-1");
  try{ t.focus({preventScroll: true}); }catch(e){}
}
/* P2.6 (F31, reopened 2026-10-04) - focus that must NOT follow the control that had it. After "next" the
   old code stood the reader on the twin of the control they had been on, and when that was an answer
   option (Enter on a focused option moves on, by design) the twin was the same-position option of the NEW,
   unanswered item, so one more Enter answered it unseen. A handler that moves to another item, or that
   moves what the reader was holding, names where focus goes (landOn) and the next render() puts it there:
   no argument = the item itself (viewLead), a selector = that control (a placed or returned order step,
   the order verdict). reveal scrolls it into view when the render left it outside the window; a
   viewLead landing always does, because a stem above the fold is the F40 defect again. */
let LAND = null;
function landOn(sel, reveal){ LAND = {sel:sel || "", reveal:reveal || false}; }
function inWindow(n, whole){
  const r = n.getBoundingClientRect(), hd = document.querySelector("header");
  return r.top >= (hd ? hd.getBoundingClientRect().bottom : 0) - 2 && (whole ? r.bottom <= window.innerHeight : r.top < window.innerHeight - 24); }
function applyLand(L){
  const app = el("app"); if(!app) return false;
  let t = L.sel ? app.querySelector(L.sel) : null;
  const lead = !t; if(!t) t = viewLead() || document.querySelector("main"); if(!t) return false;
  if(!t.hasAttribute("tabindex") && t.tabIndex < 0) t.setAttribute("tabindex", "-1");
  try{ t.focus({preventScroll: true}); }catch(e){}
  /* a new item is where the reader starts: the frame restoreScroll() queued for the old position must not
     take them back (it left the prompt above the window after Next) */
  if(lead) cancelRestore();
  /* reveal "start": a result to be read (the order verdict) comes up under the header unless all of it is already in view */
  if((L.reveal || lead) && !inWindow(t, L.reveal === "start")){ cancelRestore();
    t.scrollIntoView({block: lead || L.reveal === "start" ? "start" : "nearest", behavior: "instant"}); }
  return document.activeElement === t;
}
function restoreFocus(sig){
  if(!sig) return;
  const now = document.activeElement;
  /* focus either survived the rebuild untouched, or a handler parked it
     somewhere deliberately (the search box, the exam-date field). Either way
     it is not ours to move - only a drop to the body needs repairing. */
  if(now && now !== document.body && now !== document.documentElement) return;
  const twin = focusTwin(sig);
  let target = null;
  if(twin) target = isTabbable(twin) ? twin : focusHolder(twin);
  if(!target) target = viewLead() || document.querySelector("main");
  if(!target) return;
  if(target.tabIndex < 0 && !target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
  try{ target.focus({preventScroll: true}); }catch(e){}
  /* focus() is allowed to do nothing at all, silently. If it did, fall back to
     the main landmark rather than leaving the reader on the document body. */
  const mainEl = document.querySelector("main");
  if(document.activeElement === document.body && mainEl && mainEl !== target){
    if(!mainEl.hasAttribute("tabindex")) mainEl.setAttribute("tabindex", "-1");
    try{ mainEl.focus({preventScroll: true}); }catch(e){}
  }
}
/* P1.3 - after every render, the current view's verdict is copied into the persistent
   live region. Feedback containers opt in with a data-verdict attribute (practice
   explanation, rapid answer panel, drill result line, spot diagnosis); in every other
   view the region is emptied so a stale verdict is never re-read. The same text twice
   in a row gets a trailing no-break space, otherwise a reader sees no change to speak. */
/* P2.V F31 - a verdict from a redraw that keeps no [data-verdict] on screen (pretest, self-explanation) */
function sayLive(t){
  const live = document.getElementById("live"); if(!live || !t) return;
  live.textContent = t === live.textContent ? t + " " : t;
}
/* P2.V F31 - the words as written: labels set in capitals by CSS (text-transform) reached #live in
   capitals ("NOT QUITE"), which a screen reader may spell out letter by letter. The transform is
   lifted while the text is read, and each line of the verdict ends in punctuation, so the reader
   pauses between the label and what follows. */
function spokenText(e){
  const caps = [e].concat(Array.from(e.querySelectorAll("*"))).filter(x => getComputedStyle(x).textTransform !== "none");
  const was = caps.map(x => x.style.textTransform);
  caps.forEach(x => { x.style.textTransform = "none"; });
  /* P2.6 (F31): a chip that shares its line with the verdict ("Hormone synthesis Wrong: ...") gets its stop */
  const stops = Array.from(e.querySelectorAll("[data-sayend]")).map(x => x.appendChild(document.createTextNode(".")));
  const raw = e.innerText || e.textContent || "";
  stops.forEach(t => t.remove());
  caps.forEach((x, i) => { x.style.textTransform = was[i]; });
  return raw.split(/\n+/).map(l => l.replace(/\s+/g, " ").trim()).filter(Boolean)
    .map(l => /[.!?:;,\u2014-]$/.test(l) ? l : l + ".").join(" ");
}
function announceFeedback(){
  const live = document.getElementById("live"); if(!live) return;
  let txt = "";
  document.querySelectorAll("#app [data-verdict]").forEach(e => {
    const t = spokenText(e);
    if(t) txt += (txt ? " " : "") + t;
  });
  const prev = live.textContent;
  if(txt && txt === prev.replace(/\u00A0$/, "")) txt = /\u00A0$/.test(prev) ? txt : txt + "\u00A0";
  if(txt !== prev) live.textContent = txt;
}
const viewFor = () => ({path:viewPath, learn:viewLearn, practice:viewPractice, drill:viewDrill,
  rapid:viewRapid, spot:viewSpot, weak:viewWeak, gloss:viewGloss}[S.mode] || viewPath);
/* =====================================================================
   RENDER-FAILURE RECOVERY (P2.V F42)
   What was wrong: a view that threw fell back to the Path with nothing said,
   in the view or in #live (console.error only). Every running set was dropped,
   including sets on views that had not failed, and the header kept the failed
   view highlighted because paintHeader() had run before the throw.
   Now: the set that belongs to the failed view is ended (it may be what broke
   it) and the others are kept; the Path is drawn under a notice that says what
   failed, what was kept or ended and what to do; the header is repainted for
   the Path; the notice is spoken through #live and takes focus. If the Path
   cannot be drawn either, a small panel says so and links every other view.
   The notice stays on the Path until the student opens another view or closes
   it. RENDER_FAIL_LOG lets the page's own self-test see a failure that the
   recovery would otherwise hide.
   ===================================================================== */
const SESSION_OF = {practice:"ps", rapid:"rf", drill:"dr", spot:"sp"};
let RENDER_NOTE = null;
const RENDER_FAIL_LOG = [];
const modeLabel = m => (MODES.find(x => x[0] === m) || [m, "This view"])[1];
const viewName = m => MODES.some(x => x[0] === m) ? "the " + modeLabel(m) + " view" : "this view";
function sessionDesc(k){
  const s = S[k]; if(!s) return "";
  const n = Array.isArray(s.set) ? s.set.length : 0, at = Math.min(n, (+s.i || 0) + 1);
  if(k === "ps"){ const a = s.ans ? Object.keys(s.ans).length : 0;
    return {what:"your practice set", where:n ? (s.done ? "its summary" : "question " + at + " of " + n) : "",
            kept:a ? "The " + a + " answer" + (a === 1 ? "" : "s") + " you gave in it " + (a === 1 ? "is" : "are") + " saved." : "Nothing in it had been answered yet."}; }
  if(k === "rf") return {what:"your rapid-review set", where:n ? "item " + at + " of " + n : "",
                         kept:"Every pick you made in it is saved."};
  if(k === "sp") return {what:"your image set", where:n ? "image " + at + " of " + n : "",
                         kept:"Every image you answered in it is saved."};
  const d = DRILLS.find(x => x.id === s.id);
  return {what:d ? "the drill “" + stripTags(d.t) + "”" : "your drill", where:"",
          kept:"A drill is scored when it ends, so this run was not scored; your earlier runs are kept."};
}
function renderNoteHTML(){
  const N = RENDER_NOTE; if(!N || N.at !== S.mode) return "";
  const lines = [];
  lines.push(N.pathFailed
    ? "Something went wrong while drawing " + esc(N.label) + (N.failed !== "path" ? ", and the Path view could not be drawn either" : "") + "."
    : "Something went wrong while drawing " + esc(N.label) + ", so you are on the Path view instead.");
  lines.push("Your progress is saved: every answer, score and review date you have is kept.");
  N.ended.forEach(e => lines.push(esc(e.what.charAt(0).toUpperCase() + e.what.slice(1)) + (e.where ? " (at " + esc(e.where) + ")" : "")
    + " was closed, because it was on that screen. " + esc(e.kept)));
  N.kept.forEach(e => lines.push(esc(e.what.charAt(0).toUpperCase() + e.what.slice(1)) + " is still open"
    + (e.where ? ": " + esc(modeLabel(e.mode)) + " picks it up at " + esc(e.where) : ": " + esc(modeLabel(e.mode)) + " picks it up") + "."));
  lines.push(N.pathFailed
    ? "Open another view with a button below or from the menu. Reloading the page tries the Path view again."
    : "You can open " + esc(N.label) + " again from the menu. If it fails again, reload the page, and if it still fails, "
      + "use Download my progress at the foot of this page to keep a copy.");
  return '<div class="call trap rendernote" id="rendernote" tabindex="-1"><span class="cl">' + esc(N.label.charAt(0).toUpperCase() + N.label.slice(1)) + ' could not be shown</span>'
    + lines.map(l => '<p style="margin:.35em 0 0">' + l + '</p>').join("")
    + (N.pathFailed ? '<div class="btnrow" style="margin-top:12px">' + MODES.filter(m => m[0] !== "path" && m[0] !== N.failed)
        .map(m => '<button class="btn sm" data-m="' + m[0] + '">' + esc(m[1]) + '</button>').join("") + '</div>'
      : '<div class="btnrow" style="margin-top:12px"><button class="btn sm gho" data-rnote-x="1">Close this notice</button></div>')
    + '</div>';
}
/* P2.V F40 - a one-time result on the Path (the diagnostic's), shown and spoken like the notice above */
let PATH_NOTE = null;
function pathNoteHTML(){
  const N = PATH_NOTE; if(!N || S.mode !== "path") return "";
  return '<div class="call step pathnote" id="pathnote" tabindex="-1"><span class="cl">' + esc(N.title) + '</span>'
    + N.lines.map(l => '<p style="margin:.35em 0 0">' + l + '</p>').join("")
    + '<div class="btnrow" style="margin-top:12px"><button class="btn sm gho" data-pnote-x="1">Close this notice</button></div></div>';
}
const viewHTML = () => renderNoteHTML() + pathNoteHTML() + viewFor()();
function recoverRender(err, phase){
  const failed = S.mode;
  console.error("Recovered from render failure in " + failed + " (" + phase + ")", err);
  RENDER_FAIL_LOG.push({mode:failed, phase:phase, msg:String(err && err.message || err)});
  if(RENDER_FAIL_LOG.length > 20) RENDER_FAIL_LOG.shift();
  /* the failed view's own set may be what broke it, so it ends; a failure before any view
     was drawn (state repair, header) cannot be pinned on one set, so every running set ends */
  const own = SESSION_OF[failed], ends = (phase === "repair" || phase === "header") ? ["ps","rf","dr","sp"] : (own ? [own] : []);
  const ended = [], kept = [];
  ["ps","rf","dr","sp"].forEach(k => { if(!S[k]) return;
    const d = Object.assign({mode:Object.keys(SESSION_OF).find(m => SESSION_OF[m] === k)}, sessionDesc(k));
    if(ends.indexOf(k) >= 0){ ended.push(d); S[k] = null; } else kept.push(d); });
  S.mode = "path"; S.scroll.path = 0; SET_EMPTY = null;
  RENDER_NOTE = {at:"path", failed:failed, label:viewName(failed), ended:ended, kept:kept, pathFailed:failed === "path", fresh:true};
  /* P5.V FIX 7: never persisted during ?selftest=1 (save() is a no-op there) */
  try{ save(); }catch(_e){}
  /* the header was painted for the failed view before the throw; paint it for the view shown */
  try{ lastNavHTML = ""; paintHeader(); }catch(eh){ console.error("header repaint failed", eh); }
  if(failed !== "path"){
    let drawn = false;
    try{ el("app").innerHTML = viewHTML(); wire(); drawn = true; }
    catch(e2){ console.error("The Path view failed too", e2); RENDER_NOTE.pathFailed = true; }
    /* the tutor dock is not the Path: a dock that cannot paint leaves the Path standing */
    if(drawn){ try{ paintDock(); }catch(ed){ console.error("The tutor dock could not be drawn", ed); } return; }
  }
  /* last resort: no view code at all, only the notice and a way into every other view */
  const app = el("app");
  app.innerHTML = renderNoteHTML();
  app.querySelectorAll("[data-m]").forEach(b => b.onclick = ()=>go(b.dataset.m));
  try{ paintDock(); }catch(_e){}
}
/* after a recovery the notice is read out once and takes focus, so a keyboard or screen-reader
   user hears what happened and continues from it rather than from the failed view's control */
function announceRecovery(){
  const R = RENDER_NOTE && RENDER_NOTE.fresh && el("rendernote") ? [RENDER_NOTE, el("rendernote")]
          : PATH_NOTE && PATH_NOTE.fresh && el("pathnote") ? [PATH_NOTE, el("pathnote")] : null;
  if(!R) return false;
  const N = R[0], box = R[1];
  N.fresh = false;
  const live = el("live");
  /* textContent, not innerText: the label is upper-cased by CSS, and spoken capitals get spelled out */
  if(live){ const part = n => (n.textContent || "").replace(/\s+/g, " ").trim();
    const t = [box.querySelector(".cl")].concat(Array.from(box.querySelectorAll("p"))).filter(Boolean)
      .map((n, i) => part(n) + (i === 0 ? "." : "")).join(" ");
    live.textContent = t === live.textContent ? t + "\u00A0" : t; }
  try{ box.focus({preventScroll:true}); }catch(_e){}
  /* the notice is the first thing on the Path: the view starts at the top, and that is its position now
     (restoreScroll, run after wire() and still waiting for its frame, must not take the reader back) */
  cancelRestore(); S.scroll[S.mode] = 0;
  window.scrollTo({top:0, behavior:"instant"});
  return true;
}
function render(){
  /* P1.2 - remember who had focus before the subtree is thrown away */
  const keepFocus = captureFocus();
  const land = LAND; LAND = null;   /* P2.6 (F31): a named landing is for this render only */
  if(RENDER_NOTE && RENDER_NOTE.at !== S.mode) RENDER_NOTE = null;   /* the notice belongs to the view it was shown on */
  if(PATH_NOTE && S.mode !== "path") PATH_NOTE = null;
  let phase = "repair";
  try{
    repairState();
    ovScope();
    phase = "header"; paintHeader();
    phase = "view"; el("app").innerHTML = viewHTML();
    phase = "wire"; wire();
    phase = "dock"; paintDock();
  }catch(err){ recoverRender(err, phase); }
  /* P1.3 - speak the verdict for the view that was just built. Outside the try/catch so
     the recovery path clears the region too. */
  announceFeedback();
  if(announceRecovery()) return;
  if(land && applyLand(land)) return;
  /* P1.2 - after the rebuild AND after wire(), put the reader back where
     they were. Outside the try/catch so the recovery path restores too. */
  restoreFocus(keepFocus);
}
/* P2.V F13 sweep: a lesson is redrawn in place by a sexp pick, a pretest pick, the cloze
   toggle, grid scoring or a retake, and the yield toggles. The answers live in S and the
   per-item toggles in PT_OPEN / GRID_SEL, so they are drawn back by the view itself. What
   only the DOM knew is carried over here, by position, when the same topic is redrawn:
   open disclosures (why blocks, figure notes, scene stories), open glossary popups, and
   single cloze blanks the reader uncovered or covered (only while the toggle is unchanged). */
let CZ_DRAWN = false;
const lessonTerms = () => Array.from(document.querySelectorAll("#app .gterm")).filter(x => !x.closest(".gpop"));
function captureLesson(){
  const app = el("app"); if(S.mode !== "learn" || !app) return null;
  return {cur:S.cur, cloze:CZ_DRAWN,
    det:Array.from(app.querySelectorAll("details")).map(d => d.open),
    cz:Array.from(app.querySelectorAll(".cz")).map(s => s.classList.contains("blank") !== CZ_DRAWN),
    pops:Array.from(app.querySelectorAll(".gpop")).map(p => ({ix:+p.dataset.gix, g:p.dataset.gfor}))};
}
function restoreLesson(k){
  const app = el("app"); if(!k || !app || S.mode !== "learn" || S.cur !== k.cur) return;
  const det = app.querySelectorAll("details");
  if(det.length === k.det.length) det.forEach((d,i) => { if(d.open !== k.det[i]) d.open = k.det[i]; });
  const cz = app.querySelectorAll(".cz");
  if(k.cloze === CZ_DRAWN && cz.length === k.cz.length) cz.forEach((s,i) => { if(k.cz[i]) s.classList.toggle("blank"); });
  const terms = lessonTerms();
  k.pops.forEach(p => {
    const s = terms[p.ix] && terms[p.ix].dataset.g === p.g ? terms[p.ix] : terms.find(x => x.dataset.g === p.g);
    if(s) glossOpen(s);
  });
}
function rerenderHere(){
  const y = window.scrollY, m0 = S.mode;
  S.scroll[S.mode] = y;
  const keep = captureLesson();
  save(); render();
  if(S.mode !== m0) return;   /* P2.V F42: a failed redraw recovered to another view, which keeps its own scroll */
  restoreLesson(keep);
  requestAnimationFrame(()=>window.scrollTo({top:y,behavior:"instant"}));
}
/* P2.V F6 - render() around one live control, without ever detaching it.
   A type=date input fires change on every segment edit, and render() replaced it
   with a fresh copy each time; restoreFocus() found the copy by id but always on
   its first segment, so typing 10/27/2026 ended as 2026-10-10 and ArrowUp on the
   day changed the month from the second press on. Here the new view is built off
   screen and, at every level from the control up to #app, the live siblings are
   swapped for their new twins. The control keeps its value, segment and caret,
   and everything around it (plan head, banner, rows, calendar) is rebuilt. */
function renderAround(keep){
  const app = el("app");
  if(!app || !keep || !keep.id || !app.contains(keep)){ render(); return; }
  try{
    repairState(); paintHeader();
    const tpl = document.createElement("div");
    tpl.innerHTML = viewHTML();
    const twin = tpl.querySelector("#" + keep.id);
    const oldUp = [], newUp = [];
    for(let x = keep; x && x !== app; x = x.parentNode) oldUp.push(x);
    for(let x = twin; x && x !== tpl; x = x.parentNode) newUp.push(x);
    if(!twin || oldUp.length !== newUp.length){ render(); return; }
    oldUp.forEach((o, i) => {
      const n = newUp[i], op = o.parentNode, np = n.parentNode;
      while(o.previousSibling) op.removeChild(o.previousSibling);
      while(o.nextSibling) op.removeChild(o.nextSibling);
      while(np.firstChild !== n) op.insertBefore(np.firstChild, o);
      while(n.nextSibling) op.appendChild(n.nextSibling);
      if(i){   /* an ancestor: take the new attributes too (the control keeps its own) */
        Array.from(o.attributes).forEach(a => { if(!n.hasAttribute(a.name)) o.removeAttribute(a.name); });
        Array.from(n.attributes).forEach(a => { if(o.getAttribute(a.name) !== a.value) o.setAttribute(a.name, a.value); });
      }
    });
    wire(); paintDock();
  }catch(err){ console.error("renderAround fell back to render", err); render(); return; }
  announceFeedback();
}
/* P2.6 (F40, reopened 2026-10-04) - restoreScroll() asks for the saved position of the view in the next
   frame, after wire(); a render that then lands the reader somewhere on purpose (the diagnostic result,
   a recovery notice, the next item) scrolled first, and this frame scrolled back to the position saved
   before it: the diagnostic result sat 157 px (1280) and 570 px (400) above the window while holding
   focus, and "Next" left the new item's prompt above the window in the same way. A deliberate landing
   now cancels the frame it would lose to (cancelRestore). pendingScroll() is what the frame would apply. */
let SCROLL_Y = 0, SCROLL_RAF = 0;
function cancelRestore(){ if(SCROLL_RAF) cancelAnimationFrame(SCROLL_RAF); SCROLL_RAF = 0; SCROLL_Y = 0; }
const pendingScroll = () => SCROLL_Y;
function restoreScroll(){
  const y = S.scroll[S.mode]; cancelRestore();
  if(typeof y === "number" && y > 0){ SCROLL_Y = y;
    SCROLL_RAF = requestAnimationFrame(()=>{ const t = SCROLL_Y; SCROLL_RAF = 0; SCROLL_Y = 0; if(t > 0) window.scrollTo({top:t, behavior:"instant"}); }); }
}

/* @region engine.hub (ENGINE, engine) */
/* =====================================================================
   CROSS-BLOCK REVIEW HUB
   Every block writes the items it has actually taught into one shared store,
   so an earlier block comes back around while you are working through a later one.
   Without this, block-1 material is never seen again after day 8.
   ===================================================================== */
function hubLoad(){
  try{ const r = localStorage.getItem(HUB_KEY); return r ? JSON.parse(r) : {v:1, items:{}}; }
  catch(e){ return {v:1, items:{}}; }
}
function hubSave(h){ try{ localStorage.setItem(HUB_KEY, JSON.stringify(h)); }catch(e){} }
/* P2.V F28/N6 - one due queue, but two copies of each item: this block's record (S.rapid) and the
   hub's. Another block's Due now answers this block's items in the hub only (wireRapid's foreign
   branch), and hubSync below wrote this block's older copy back over it on the next save, so a
   review done on the other page was undone and the item came due again. Before anything is
   written, a hub record answered more times (n counts answers, and only ever grows) than this
   block's copy is taken in. Pages built before this still write n, so their reviews count too. */
function hubPull(){
  const h = hubLoad(); let took = 0;
  RAPID.forEach(r => { const it = h.items[r.i], rec = S.rapid[r.i];
    if(!it || it.b !== META.key || !rec || !((+it.n || 0) > (+rec.n || 0))) return;
    rec.box = it.box; rec.due = it.due; rec.miss = it.miss || 0; rec.n = it.n; took++; });
  return took;
}
/* Only items the student has actually met get stored, which keeps the hub small. */
function hubSync(){
  const h = hubLoad(); let touched = false;
  RAPID.forEach(r => {
    const rec = S.rapid[r.i]; if(!rec || !rec.box) return;
    h.items[r.i] = {b:META.key, bn:META.name, c:r.c, ct:(findT(r.c)||{}).t || r.c,
      q:r.q, o:r.o, a:r.a, x:r.x, box:rec.box, due:rec.due, miss:rec.miss||0, n:rec.n||0};
    touched = true;
  });
  if(touched) hubSave(h);
}
function hubDue(){
  const h = hubLoad();
  return Object.keys(h.items).map(k => Object.assign({i:k}, h.items[k]))
    .filter(it => it.box > 0 && (!it.due || it.due <= Date.now()))
    .sort((a,b) => overdue(b) - overdue(a));
}
function hubOtherBlocks(){
  const by = {};
  hubDue().forEach(it => { if(it.b === META.key) return; by[it.bn || it.b] = (by[it.bn || it.b]||0)+1; });
  return by;
}

/* @region engine.daily-plan (LITERALS, engine) */
/* =====================================================================
   DAILY PLAN — 2 hours a day, 4-5 days a block, review before new material
   ===================================================================== */
/* P2.V F4 - which day of the pace is left, and how many stages one day takes, are
   worked out here once. todaysPlan() schedules today with stageAllot(), and
   planDaysLeft() steps the same rule forward a day at a time, so the header's day
   count is the number of days the plan will actually take. The header used to divide
   the minutes left by the day's budget. That budget never drops below 30 min, but new
   material is held to perDay, so the header read "2 more days" at paces 2, 3, 5 and
   14 alike while the plan took 2, 3, 4 and 4 days. */
const paceLeftNow = () => Math.max(1, (S.paceDays||5) - blockDay() + 1);
function stageAllot(left, paceLeft, dueRapid, linkedN){
  const remainingMins = left.reduce((a,p)=>a+p.mins,0);
  /* Divide the work that is LEFT by the days that are LEFT, not by the full
     pace every morning. Dividing by the full pace re-spread the shrinking
     remainder over N days again each day, so the budget decayed instead of
     converging -- "finish in 2 days" actually took 6, and 5 took 12. On the
     last day of the pace this now schedules everything that is left, which
     is what the promise means. */
  const perDay = Math.ceil(remainingMins/paceLeft);   /* what the pace needs today */
  const budget = Math.min(300, Math.max(30, perDay));
  /* P1.9 - every review row used to cost a flat number of minutes sized for a
     120-minute day, so on a 30-minute day the review rows took two thirds of it
     and new material was squeezed out. reviewCap and rs make the review rows a
     proportion of the day instead. At the 120-minute reference day rs is 1, so
     a normal day is unchanged; rs never drops below half, so review shrinks but
     never disappears. */
  const reviewCap = Math.max(10, Math.round(budget*0.35));
  const rs = clamp(budget/120, 0.5, 1);
  const rmin = m => Math.max(3, Math.round(m*rs));
  /* The due and linked rows come BEFORE the stages and take from the same day,
     so their minutes are sized here, where the stage budget can see them. */
  const dueMins = dueRapid ? Math.min(reviewCap, Math.max(5, Math.round(dueRapid*10/60))) : 0;
  const linkedMins = linkedN ? rmin(6) : 0;
  const reviewMins = dueMins + linkedMins;
  /* On the LAST day of the chosen pace, everything still outstanding is
     exactly what "finish block in N days" promised, so it is all scheduled
     regardless of the budget. Without this the day's review rows ate into
     the stage budget and pushed the final simulation into an N+1th day, so
     every pace finished one day late. The header prints the overrun. */
  /* budget has a 30 min/day floor, so on a slow pace it sits ABOVE what the
     pace needs (389 min over 14 days is 28/day). Spending the whole floored
     budget on new material pulled the next stage forward and the block landed
     a day early. New material is held to perDay instead; the floor still keeps
     room for the day's review rows, and the current stage still always fits. */
  const stageBudget = paceLeft === 1 ? Infinity
                    : Math.max((left[0]||{}).mins||30, Math.min(budget - reviewMins, perDay));
  /* stop rather than skip: the path is sequential, so dropping a long stage and
     pulling a later short one in its place would teach things out of order */
  let take = 0, stageUsed = 0;
  while(take < left.length && !(take && stageUsed + left[take].mins > stageBudget)) stageUsed += left[take++].mins;
  return {perDay, budget, reviewCap, rmin, dueMins, linkedMins, take};
}
/* The study days the plan takes from today on, today included: stageAllot()
   stepped forward the way todaysPlan() runs it on each coming day, one day off
   the pace each time, with today's due and linked counts held. At least 1 while a
   stage is left, never more than the days left in the pace (the last day takes
   everything), 0 once every stage is done. peak is the heaviest of those days in
   stage plus due / linked minutes, and peakAt how many days after today it falls. */
/* P2.V F8 - the review load the plan schedules and costs: the Due now and Linked queue sets as
   their buttons serve them (rapidPool), so "High yield only" cuts the rows, their minutes and the
   head's day count alike. The plan used hubDue().length and S.linked.length, which the filter
   never touched: the due row read "4 items due" and served lower-yield items under the filter. */
const reviewLoad = () => ({due:rapidPool("due").length, linked:rapidPool("linked").length});
function planDaysLeft(){
  const {due:dueRapid, linked:linkedN} = reviewLoad();
  let left = PATH.filter(p=>!stageDone(p)), pl = paceLeftNow(), days = 0, peak = 0, peakAt = 0;
  while(left.length){ const a = stageAllot(left, pl, dueRapid, linkedN);
    const m = left.slice(0, a.take).reduce((s,p)=>s+p.mins, 0) + a.dueMins + a.linkedMins;
    if(m > peak){ peak = m; peakAt = days; }
    left = left.slice(a.take); pl = Math.max(1, pl - 1); days++; }
  return {days, peak, peakAt};
}
function todaysPlan(){
  const ev = diagnose(), out = [];
  const paceLeft = paceLeftNow();
  const stagesLeftArr = PATH.filter(p=>!stageDone(p));
  const {due:dueRapid, linked:linkedN} = reviewLoad();
  const {budget, rmin, dueMins, linkedMins, take} = stageAllot(stagesLeftArr, paceLeft, dueRapid, linkedN);
  /* under "High yield only" the due set holds no other block's items (rapidPool) */
  const otherB = S.hiOnly ? {} : hubOtherBlocks(), otherN = Object.values(otherB).reduce((a,b)=>a+b,0);
  /* REVIEW FIRST. New material is what feels productive; due review is what
     survives to exam day, so it is not allowed to be crowded out at the bottom. */
  if(dueRapid){
    out.push({id:"due", t:"Review first &mdash; "+dueRapid+" item"+(dueRapid===1?"":"s")+" due",
      d: (dueRapid > RF_CAP ? "The "+RF_CAP+" most overdue first. " : "Most overdue first. ")
         + (otherN ? otherN+" of these "+(otherN===1?"is":"are")+" from "+Object.keys(otherB).join(" and ")+
                   " &mdash; spaced review only works if earlier blocks keep coming back."
                /* P2.3: the rule as promote() and wireRapid() apply it (BOXES; +-15% jitter; capped
                   by examCeiling). It used to say "misses come back tomorrow": a miss drops one box,
                   never below the 15-minute one, so an early item is back in about 15 minutes. */
                : "A right answer moves an item up one step (" + ladderWords() + ") unless it took over " + slowWords() + ", "
                  + "which keeps it on its step; a miss moves it down one step, never below the " + spanAdj(BOXES[1]) + " one."),
      mins:dueMins, act:["rf","due"], n:dueRapid});
  }
  /* P2.3: the row's text counts what the Linked queue set serves (setCount). P2.V F8: it is now also
     shown and costed from that set (reviewLoad), so under "High yield only" a queue that holds only
     lower-yield items gives no row, instead of a row that opened an empty set. */
  const linkedC = setCount("rapid", "linked", ev);
  if(linkedN) out.push({id:"linked", t:"Clear your linked review queue",
    d: (linkedC.n === linkedC.m ? linkedC.n : linkedC.n+" of "+linkedC.m)+" item"+(linkedC.m>1?"s":"")
         +" queued automatically because you missed a question on that concept",
    mins:linkedMins, act:["rf","linked"], n:linkedC.n});
  /* How much new material belongs in one day is exactly what "finish block in N
     days" is choosing, so the plan offers as many consecutive stages as the day's
     budget allows (stageAllot above). It used to offer the current stage plus one
     more no matter what, which is why 2 days and 14 days produced almost the same list. */
  /* P2.V F8 - the path is not filtered: under "High yield only" each stage row says so (yx, shown
     as a tag), since a stage covers its own topics and the diagnostic and final the whole block */
  stagesLeftArr.slice(0, take).forEach((p, i) => out.push({id:"stage:"+p.id,
    t: i===0 ? (p.kind==="diag" ? "Take the diagnostic" : "Continue: "+p.t) : "Then: "+p.t,
    d:p.d, mins:p.mins, act:["stage",p.id], yx:S.hiOnly ? stageYx(p) : "", dg:stageDiagTag(p)}));
  /* P2.3: these rows count the set their button serves (setCount), capped and yield-filtered alike */
  const verifyN = setCount("practice", "verify", ev).n;
  if(verifyN) out.push({id:"verify", t:"Prove "+verifyN+" answer"+(verifyN>1?"s were":" was")+" not lucky",
    d:"You got these right on your last try, and not yet twice in a row. They come back now &mdash; miss one and Weak Spots "
     +"counts a failed re-test on its topic, because the right answer may have been a guess.",
    mins:rmin(8), act:["ps","verify"], n:verifyN});
  /* P2.V F8 - the topics named are the ones the set draws from: the high-yield ones under the filter */
  const weak = ev.filter(e=>e.flag && (!S.hiOnly || hiKeep(e.t.id)));
  if(weak.length && setCount("practice", "weak", ev).n) out.push({id:"weak", t:"Targeted set on your weak spots",
    d:"Questions not yet answered or last answered wrong on your flagged"+(S.hiOnly?" high-yield":"")+" topics, most urgent first: "
     +weak.slice(0,3).map(e=>e.t.t).join(", "), mins:rmin(20), act:["ps","weak"], tids:weak.slice(0,3).map(e=>e.t.id)});
  const dueQ = setCount("practice", "due", ev);
  if(dueQ.n >= 4) out.push({id:"dueq",
    t:(dueQ.n === dueQ.m ? dueQ.n : dueQ.n+" of "+dueQ.m)+" question"+(dueQ.m>1?"s are":" is")+" due again",
    d:"Questions you have already answered, right or wrong, back on the spacing schedule, most overdue first. "
     +"This is the format the exam actually uses, so it is the one worth re-testing.",
    mins:rmin(Math.min(24, dueQ.n*1.4)), act:["ps","due"], n:dueQ.n});
  /* P2.V F8 - the rail hides lower-yield topics under "High yield only", and so does this row */
  const staleGrids = ALLT().filter(t => { const r = S.topics[t.id]||{};
    return r.grid != null && r.due && r.due <= Date.now() && (!S.hiOnly || yv(t) === "hi"); });
  if(staleGrids.length) out.push({id:"regrid",
    t:"Re-test recall on "+staleGrids.length+" topic"+(staleGrids.length>1?"s":""),
    d:"Recall grids you have scored before, due again on the spacing schedule &mdash; "+
      staleGrids.slice(0,3).map(t=>t.t).join(", "),
    mins:rmin(Math.min(18, staleGrids.length*3)), act:["t",staleGrids[0].id], n:staleGrids.length, tids:staleGrids.slice(0,3).map(t=>t.id)});
  /* P2.4 (F20, reopened): the count is the "Not tried yet" set this row opens (spotPool), so it
     follows "High yield only" as the set does, and the row goes when that set is empty */
  const unseenImg = setCount("spot", "unseen").n;
  if(unseenImg) out.push({id:"img", t:unseenImg+(S.hiOnly?" high-yield":"")+" image"+(unseenImg===1?"":"s")+" you have not tried yet",
    d:"Name it from the raw slide first, then study the markup", mins:rmin(6), act:["sp","unseen"], n:unseenImg});
  /* P2.6: the drill list (bldPool) keeps only high-yield topics under "High yield only"; this row
     ignored it, so it could offer a drill the list hides. Same filter as the list and the other rows. */
  const undrilled = DRILLS.filter(d => !S.drills[d.id] && (!S.hiOnly || hiKeep(d.c)));
  if(undrilled.length) out.push({id:"drill", t:"Drill: "+undrilled[0].t,
    d:drillKindLine(undrilled[0]), mins:rmin(6), act:["dr",undrilled[0].id]});

  /* P1.9 round 2 - every review row above is capped on its own, but nothing
     capped their SUM: with a populated cross-block hub they all fire at once
     and review took 80% of a 30-minute day. reviewBudget bounds them
     collectively at half the day and is spent in value order, so a squeeze
     shrinks then drops the cheapest rows instead of truncating the queue.
     Round 2 said this runs after the stage loop so stageBudget sees the
     untrimmed total. That was never the reason: reviewMins is summed before
     the loop, when only the due and linked rows exist, so stageBudget never
     saw the other six wherever this ran. The load-bearing claim is the rest
     of it - due+linked always fit inside reviewBudget (due is capped at 0.35
     of the day, linked at 6 min, against a half-day budget), so neither is
     ever trimmed and the pace arithmetic above gets the same numbers. */
  const reviewBudget = Math.max(10, Math.round(budget*0.5));
  const cand = out.slice();   /* every row before the review cut (the self-test's yieldFilter reads it) */
  /* Value order for a student: items already decaying on the spacing schedule,
     then the gaps their own wrong answers flagged, then re-testing what may
     have been luck, then material that has simply never been seen. */
  const REVIEW_RANK = ["due","linked","verify","weak","dueq","regrid","img","drill"];
  let reviewLeft = reviewBudget; const cut = [];
  REVIEW_RANK.forEach(id => { const row = out.find(p => p.id === id); if(!row) return;
    const take = Math.min(row.mins, reviewLeft);
    /* 3 min is the same floor rmin() uses: below it a row is noise, so it is
       dropped rather than printed as a sliver. reviewBudget is at least 10, so
       the highest-ranked row that exists always clears this and review never
       falls to zero while something is genuinely due. */
    if(take < 3){ cut.push(row); return; }
    row.mins = take; reviewLeft -= take; });
  cut.forEach(row => { const i = out.indexOf(row); if(i >= 0) out.splice(i,1); });

  /* Fill to the 2-hour ceiling and stop. Test BEFORE committing the row, or the
     plan prints "124 min planned of your 120 min ceiling". */
  const picked = []; let mins = 0;
  /* Same last-day rule as stageBudget above: on the final day of the pace a
     stage row is never dropped for overrunning, or the block slips a day. */
  const capped = p => !(paceLeft === 1 && /^stage:/.test(p.id));
  for(const p of out){ if(capped(p) && mins + p.mins > budget && picked.length) continue;
    picked.push(p); mins += p.mins; }
  if(!picked.length && out.length){ picked.push(out[0]); mins = out[0].mins; }
  /* A slow pace makes the daily budget smaller than a single stage — at 14 days
     the budget is ~31 min while the first teaching stage costs 32 — so the picker
     skipped it every day, filled up on review rows, and the block could never
     finish. New material always gets a place, even if it overruns; the header
     already warns when the pace exceeds what a day can hold. */
  if(!picked.some(p => /^stage:/.test(p.id))){
    const firstStage = out.find(p => /^stage:/.test(p.id));
    if(firstStage){
      while(picked.length > 1 && mins + firstStage.mins > budget){
        mins -= picked.pop().mins;
      }
      picked.push(firstStage); mins += firstStage.mins;
    }
  }
  return {picked, mins, budget, cand};
}
const planKey = p => p.id + "|" + p.act.join(":");
function planHTML(){
  const {picked, mins, budget} = todaysPlan(), k = todayKey(), day = S.days[k] || {done:[], mins:0};
  const dl = examDaysAway(), st = streak(), passed = examDateGone(), examToday = examISO() === todayKey();
  const stagesLeft = PATH.filter(p=>!stageDone(p)).length;
  const totalMinLeft = PATH.filter(p=>!stageDone(p)).reduce((a,p)=>a+p.mins,0);
  /* P2.V F4 - the days the plan really schedules (planDaysLeft steps todaysPlan's
     own rule), and the pace day the last stage lands on. */
  const bd = blockDay(), pd = S.paceDays||5, proj = planDaysLeft(), planDays = proj.days, lastDay = bd + planDays - 1;
  const finishTxt = !PATH.length ? "no stages yet" : !stagesLeft ? "every stage done"
    : planDays === 1 ? "<b>finishes today</b>, day "+bd+" of "+pd
    : "<b>"+planDays+" days to finish</b>, today included &middot; done on day "+lastDay+" of "+pd;
  return `<div class="plan">
    <div class="planhead">
      <div><div class="pt2">Today &mdash; day ${/* P3.3 - "of this block" described a block
             that never restarted; the count runs from the day the pace was chosen
             (S.paceSetAt), so the words now say what the number counts. */
            bd} of this pace &middot; ${new Date().toLocaleDateString(undefined,{weekday:"long",month:"short",day:"numeric"})}</div>
        <div class="pd2">${Math.round(mins)} min planned of a <b>${budget} min/day</b> target &middot;
          ${PATH.length ? stagesLeft+" stage"+(stagesLeft===1?"":"s")+" left (~"+Math.round(totalMinLeft/60*10)/10+" h) &rarr;" : ""}
          <span data-plandays="${planDays}">${finishTxt}</span> &middot;
          ${/* Once the date is behind us daysLeft() is pinned at 0, so this read
                 "0 days to Step 1" forever -- wrong, and it hid the problem instead of
                 naming it. Say what actually happened; the fix is the date input below. */
            passed ? "exam date passed" : examToday ? esc(EXAM_NAME)+" is today" : dl+" day"+(dl===1?"":"s")+" to "+esc(EXAM_NAME)}
          ${/* Test the minutes actually PLANNED: the day that genuinely overruns is the
                 one whose own row total is over 5 h -- today's rows, or a coming day of
                 the same projection (the last day of a short pace takes everything
                 left). The old trigger, days-needed over the pace, fired on a day that
                 was under 5 h and then said that day was past the ceiling. */
            (mins > 300 || (proj.peak > 300 && proj.peakAt > 0)) ? '<br><b style="color:var(--warn)">Finishing in '+pd+
            ' day'+(pd===1?'':'s')+' puts '+(mins > 300
              ? (Math.round(mins/60*10)/10)+' h of work in today'
              : 'about '+(Math.round(proj.peak/60*10)/10)+' h of work on day '+(bd + proj.peakAt))+', past the 5 h/day ceiling. '+
            'Pick a longer pace if that is not realistic.</b>' : ''}${/* P2.V N2 - with the exam set before the
              pace ends, the head read "done on day 4 of 5 · 1 day to the exam" and never said that the plan
              runs past the exam */
            stagesLeft && !passed && planDays - 1 > dl ? '<br><b style="color:var(--warn)">At this pace the last stage lands on '
              + (d => { d.setDate(d.getDate() + planDays - 1); return d; })(new Date()).toLocaleDateString(undefined, {month:"short", day:"numeric"})
              + ', after '+esc(EXAM_NAME)+' ('+EXAM.toLocaleDateString(undefined, {month:"short", day:"numeric"})+'). A shorter pace finishes sooner.</b>' : ''}</div></div>
      <label class="examset" title="Choose how quickly to finish this block. The daily plan recalculates immediately.">
        <span class="exl">Finish block in</span>
        <select id="pacedays" aria-label="Days to finish this block">
          ${[2,3,5,7,10,14].map(n=>`<option value="${n}"${n===(S.paceDays||5)?" selected":""}>${n} days</option>`).join("")}
        </select>
      </label>
      <label class="examset" title="${escA("The date of "+EXAM_NAME+". Everything reschedules around it: the countdown, the spacing ceiling and the days-needed math."+(META.examNote ? " "+META.examNote : ""))}">
        <span class="exl">${esc(EXAM_LABEL)}</span>
        <input type="date" id="examdate" value="${examISO()}">
      </label>
      ${/* Nothing told the user their date had gone by, so the whole plan silently
             went wrong around them. Same call trap shape the topics use; flex 1 1 100%
             drops it onto its own row of the wrapping planhead, immediately under the
             date control it is asking them to change. */
        passed ? '<div class="call trap" style="margin:0;flex:1 1 100%"><span class="cl">Reschedule</span>'
          + 'The date of '+esc(EXAM_NAME)+' has passed &mdash; set a new date to reschedule everything.</div>' : ""}
      <div class="streak" title="Consecutive days studied"><b>${st}</b> day streak</div>
    </div>
    <div class="planlist">${picked.length ? picked.map((p,i)=>{
      /* P2.V - a row was struck through with a tick as soon as it was clicked, while its items were
         still due ("Review first - 3 items due", ticked). A row stays in the plan until its work is
         done, so a click is now shown as what it is: "opened today", keyed on the row AND what it
         opens (a different drill on the drill row is not marked by the first one). */
      const opened = (day.done||[]).indexOf(planKey(p)) >= 0;
      return `<button class="planrow${opened?" opened":""}" data-plan="${p.act.join(":")}" data-planid="${p.id}" data-plankey="${escA(planKey(p))}">
        <span class="pn2">${i+1}</span>
        <span><span class="pl2t">${esc(p.t)}${p.yx ? ' <span class="tag ghost" data-yx>'+esc(p.yx)+'</span>' : ""}${p.dg || ""}${opened ? ' <span class="tag ghost planopened">opened today</span>' : ""}</span><span class="pl2d">${p.d}</span></span>
        <span class="pl2m">${p.mins} min</span></button>`; }).join("")
      : '<div style="padding:22px;text-align:center;color:var(--ink-3);font-style:italic">'+(PATH.length ? "Nothing outstanding. Run the final simulation." : "Nothing to plan yet.")+'</div>'}</div>
    ${calStripHTML()}
  </div>`;
}
let CAL_SEL = null;   /* which calendar day the user has opened, or null */
function dayKeyLocal(d){ return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate()); }
function calStripHTML(){
  const days = [], now = new Date(); now.setHours(0,0,0,0);
  const start = new Date(now); start.setDate(start.getDate()-3);
  /* Run to two days past the exam so the star is always reachable, however far
     out the date is set. Clamped so a distant date cannot render 900 buttons. */
  const span = Math.min(120, Math.max(21, daysLeft()+6));
  for(let i=0;i<span;i++){
    const d = new Date(start); d.setDate(start.getDate()+i);
    const k = dayKeyLocal(d);
    const isToday = k === todayKey(), isExam = k === examISO();
    const past = d < now && !isToday, rec = S.days[k], did = rec && rec.acts;
    days.push(`<button type="button" class="calday${isToday?" today":""}${isExam?" exam":""}${past&&!did?" past":""}${did?" did":""}${k===CAL_SEL?" sel":""}"
      data-calday="${k}" aria-pressed="${k===CAL_SEL?"true":"false"}"
      title="${d.toDateString()}${did?" — "+did+" activit"+(did===1?"y":"ies"):""}${isExam?" — "+escA(examNameCap()):""}">
      <span class="cdn">${["S","M","T","W","T","F","S"][d.getDay()]}</span>
      <span class="cdd">${isExam?"&#9733;":d.getDate()}</span>
      <span class="cdm">${did?"&bull;":""}</span></button>`);
  }
  return '<div class="calstrip">'+days.join("")+'</div>'+calDetailHTML();
}
function calDetailHTML(){
  if(!CAL_SEL) return "";
  const d = parseExamDate(CAL_SEL); if(!d) return "";
  const rec = S.days[CAL_SEL], isExam = CAL_SEL === examISO();
  const when = d.toLocaleDateString(undefined,{weekday:"long", month:"long", day:"numeric"});
  const todayN = +new Date(todayKey()+"T00:00:00"), thisN = +new Date(CAL_SEL+"T00:00:00");
  let body;
  if(isExam){
    /* P2.3: examCeiling() caps every review date at two days before the exam (halfway there inside the last two days) */
    body = "<b>"+esc(examNameCap())+".</b> No review is scheduled later than "+spanWord(LAST_PASS_MS, true)+" before this (inside the last "+spanWord(LAST_PASS_MS, true)+", "
         + "halfway to it), so every item comes due for a final pass first.";
  } else if(rec && rec.acts){
    const names = (rec.done||[]).length;
    const m = +rec.mins || 0;
    body = `<span title="Answers given, recall grids scored and topics marked read"><b>${rec.acts}</b> activit${rec.acts===1?"y":"ies"}</span> &middot; <span title="Time on this page with a click, key press or scroll at most 5 minutes after the one before">${m < 1 ? "under <b>1</b> min" : "<b>"+Math.round(m)+"</b> min"} active</span>`
         + (names ? ` &middot; ${names} plan item${names===1?"":"s"} opened` : "");   /* S.days[k].done records a plan row when it is clicked */
  } else if(rec && +rec.mins >= 1 && thisN <= todayN){
    /* P2.V F5: time on the page with no answer is still time */
    body = "No answers or topics read" + (thisN === todayN ? " yet today" : " on this day") + " &middot; <b>" + Math.round(rec.mins) + "</b> min active on the page.";
  } else if(thisN < todayN){
    body = "Nothing recorded on this day.";
  } else if(thisN === todayN){
    body = "Today. Your plan is above &mdash; nothing logged yet.";
  } else {
    const away = Math.round((thisN-todayN)/864e5);
    body = `${away} day${away===1?"":"s"} from now. That day's plan is built on the day, from whatever is due then.`;
  }
  return `<div class="caldetail"><div class="cdt">${when}</div><div class="cdb">${body}</div>
    <button type="button" class="cdx" data-calday="${CAL_SEL}" aria-label="Close">&times;</button></div>`;
}

/* @region engine.view-path (LITERALS, engine) */
/* =====================================================================
   VIEW: PATH
   ===================================================================== */
/* P2.V F1 - a block whose study path is not written yet (no stages: the state of the real page until
   the path task) threw here on currentStage().t, so every boot fell into the render recovery. The plan
   and the progress file still work without stages, so they are drawn, with a line saying why the path
   is missing. */
function backupHTML(){
  return `<div class="sectiontitle"><h3>Your progress file</h3><span class="st2">Everything is saved as you go &mdash; answers, scores, review dates and every item you have
    flagged, notes included. This is your own copy of it.</span></div>
  <div class="backup">
    <button class="btn" id="expbtn">Download my progress</button>
    ${/* P2.V F29 - a label for a hidden input is not focusable, so the keyboard could never reach it */""}<button class="btn" id="impbtn" type="button">Restore from a file</button>
    <input type="file" id="impfile" accept="application/json,.json" hidden>
    <button class="btn danger" id="rstbtn">Start this block over</button>
    <span class="bkn" id="bkmsg">Clearing your browser data would otherwise wipe this.</span>
  </div>`;
}
function viewPath(){
  if(!PATH.length) return `${yieldBanner("path")}${planHTML()}
    <div class="panel" style="margin:26px 0"><h3>No study path yet</h3><p style="color:var(--ink-2);max-width:62ch">This block has no stages yet,
      so there is no path to follow. Every other view works with the material the block has so far.</p></div>
    <div class="divider"></div>${backupHTML()}`;
  const cur = currentStage(), st = stats(), o = overall();
  const doneN = PATH.filter(stageDone).length, allDone = doneN === PATH.length;
  const nPre = ALLT().filter(t => (t.pretest||[]).length).length, nVis = ALLT().filter(t => VISUAL_GUIDES[t.id]).length;
  const nImg = Object.keys(IMGS).length, nAnn = Object.values(IMGS).filter(im => (im.ann||[]).length).length;
  const nextLabel = (allDone ? "Run the final again"
    : (cur.kind==="diag" ? "Take the diagnostic" : cur.kind==="final" ? "Start the final simulation" : nextStepLabel(cur)))
    /* P2.V F8 - the diagnostic and the final measure the whole block, whatever the yield filter says */
    + (S.hiOnly && (allDone || cur.kind==="diag" || cur.kind==="final") ? " (whole block)" : "");
  return `
  ${yieldBanner("path")}
  ${planHTML()}
  <div class="pathhero">
    <div class="phtop">
      <div class="eyebrow">${esc(META.short)} &middot; ${PATH.length} stages &middot; start to finish</div>
      ${/* P2.V F3 - the heading read "Stage 2 of 4" above a next stage the content calls "Stage 1: Thyroid"
             (it counted the diagnostic), and the lede sent the reader to "the rail on the left", which the
             Path view does not have. The heading now counts stages done, which cannot clash with any stage
             title, and the lede names the controls that are on this page. */""}
      <h1>${allDone ? "You have finished this block" : (doneN ? doneN+" of "+PATH.length+" stages done" : "Start here")}</h1>
      <p class="lede">${allDone
        ? "Every stage is complete. Re-run the final simulation, or spend the time in <b>Weak Spots</b> &mdash; it now has real evidence to work with."
        : "Work down the stages in order. A teaching stage has you read its topics, then pass its stage check (75% right), then take a round of rapid picks, before it counts as done. <b>You can open any stage</b> from the list below, and any topic from Learn, but the stages in order are the path that gets you finished."}</p>
    </div>
    <div class="phbody">
      <div class="phnext">
        <div class="nl">${allDone ? "Optional" : "Do this next"}</div>
        <div class="nt">${esc(cur.t)}</div>
        <div class="nd">${esc(cur.d)}</div>
        <div class="phmeta">
          <span class="tag ghost">${cur.mins} min</span>
          ${cur.kind==="unit" ? '<span class="tag ghost">'+(cur.topics||[]).length+' topic'+((cur.topics||[]).length===1?"":"s")+'</span>' : ""}
          ${/* P2.V F3 sweep - the final serves finalN() questions (stageQs(final) is the whole bank), and a
                 stage check adds questions from finished stages to its own (openStage) */
            cur.kind==="final" ? '<span class="tag ghost">'+finalN()+' questions</span>'
            : cur.kind==="unit" ? (n => '<span class="tag ghost" title="Questions in the stage check'
                + (checkAddsReview(cur) ? '; it may add a few from the stages you have finished' : '')+'">'
                + n + (checkAddsReview(cur) ? '+' : '') + ' questions</span>')(stageQs(cur).length) : ""}
          ${S.hiOnly ? '<span class="tag ghost" data-yx>'+stageYx(cur)+'</span>' : ""}
        </div>
      </div>
      <div><button class="btn acc lg" data-stage="${cur.id}">${esc(nextLabel)} &rarr;</button></div>
    </div>
  </div>
  <div class="statgrid" style="margin-bottom:30px">
    <div class="stat"><div class="sv tnum">${doneN}<span style="font-size:15px;color:var(--ink-3)">/${PATH.length}</span></div><div class="sl">stages done</div></div>
    <div class="stat good"><div class="sv tnum">${o}%</div><div class="sl">mastery</div></div>
    <div class="stat acc"><div class="sv tnum">${st.acc}%</div><div class="sl">q accuracy</div></div>
    <div class="stat"><div class="sv tnum">${st.qDone}<span style="font-size:15px;color:var(--ink-3)">/${st.qTotal}</span></div><div class="sl">questions</div></div>
    <div class="stat"><div class="sv tnum">${st.read}<span style="font-size:15px;color:var(--ink-3)">/${st.topics}</span></div><div class="sl">topics read</div></div>
  </div>
  <div class="sectiontitle"><h3>The path</h3><span class="st2">Green = finished. You can open any stage at any time.${S.hiOnly
    ? " High yield only does not filter the path: each stage covers its own topics, and the diagnostic and the final simulation cover the whole block." : ""}</span></div>
  <div class="stages">${PATH.map((p,i)=>{
    const pr = stageProgress(p), dn = stageDone(p), isCur = p.id===cur.id && !allDone;
    return `<button class="stage${dn?" done":""}${isCur?" cur":""}" data-stage="${p.id}">
      <span class="sn">${dn?"&#10003;":(i+1)}</span>
      <span><span class="st">${esc(p.t)}${S.hiOnly && (p.kind==="diag" || p.kind==="final") ? ' <span class="tag ghost" data-yx>'+stageYx(p)+'</span>' : ""}${stageDiagTag(p)}</span><span class="sd">${esc(p.d)}</span></span>
      <span class="sm"><span>${p.mins} min</span><span class="stagebar"><i style="width:${Math.round(pr*100)}%"></i></span></span>
    </button>`; }).join("")}</div>
  <div class="divider"></div>
  <div class="sectiontitle"><h3>How this tool is built</h3><span class="st2">Every mechanic is here because the evidence says it works.</span></div>
  <div class="method">
    ${/* P2.V F3 sweep - each card now says only what this page does, with counts from the loaded content */""}
    <div class="mcard"><span class="mtag">Retrieval first</span><h4>You answer before you read</h4>
      <p>${nPre === ALLT().length ? "Each topic opens" : nPre+" of "+ALLT().length+" topics open"} with a few questions you are expected to get wrong. A guess that is then corrected is remembered better than the same fact only read.</p></div>
    <div class="mcard"><span class="mtag">Linked review</span><h4>A miss schedules its own revision</h4>
      <p>Get a question wrong and the related rapid items are queued automatically. You never have to notice a gap and act on it yourself.</p></div>
    <div class="mcard"><span class="mtag">Spacing</span><h4>Items return on expanding delays</h4>
      <p>A right answer sends an item one step further out (${ladderWords()}, each varied a little), except a rapid pick that took over ${slowWords()}, which stays on its step. A miss brings a rapid pick back one step sooner (never sooner than ${spanWord(BOXES[1])}) and a question back to the first step. Nothing is scheduled later than ${spanWord(LAST_PASS_MS, true)} before ${esc(EXAM_NAME)} (halfway to it, inside the last ${spanWord(LAST_PASS_MS, true)}), so every item gets a last pass.</p></div>
    <div class="mcard"><span class="mtag">Across blocks</span><h4>Earlier blocks come back while you work on this one</h4>
      <p>Rapid picks you have answered go into one store shared by every block opened in this browser from the same site, so the plan&rsquo;s review row also brings back other blocks&rsquo; due picks (not while High yield only is on).</p></div>
    <div class="mcard"><span class="mtag">Interleaving</span><h4>Topics are mixed, not blocked</h4>
      <p>Most sets mix topics on purpose. It feels harder, and it trains you to tell similar topics apart.</p></div>
    <div class="mcard"><span class="mtag">Dual coding</span><h4>Pictures carry their own labels</h4>
      <p>${nImg} image${nImg===1?"":"s"} (${nAnn} annotated), ${Object.keys(FIGS).length} drawn figure${Object.keys(FIGS).length===1?"":"s"} and a visual model in ${nVis === ALLT().length ? "every topic" : nVis+" of "+ALLT().length+" topics"}. An annotated image has numbered pins: hover, focus or tap one to outline its finding and show its label, or press <b>Show all findings</b>.</p></div>
    <div class="mcard"><span class="mtag">Calibration</span><h4>Confidence is scored too</h4>
      <p>Every practice question asks how sure you are. A wrong answer marked Sure is a signal of its own in Weak Spots and raises that topic&rsquo;s priority, because a confident error is the one you would not think to check again.</p></div>
  </div>
  <div class="divider"></div>
  ${backupHTML()}`;
}
/* openStage() mixes questions from finished stages that have topics into a stage check */
const checkAddsReview = p => PATH.some(x => x !== p && (x.topics||[]).length && stageDone(x));
function nextStepLabel(p){
  const st = S.stage[p.id] || {};
  const unread = (p.topics||[]).filter(id => !(S.topics[id]||{}).read);
  if(unread.length) return "Read: " + (findT(unread[0])||{t:"next topic"}).t;
  if(!(st.quiz && st.quiz.done)) return "Stage check";
  return "Rapid picks";
}
function openStage(pid){
  const p = stageOf(pid); if(!p) return;
  SET_EMPTY = null;   /* P2.6: a stage start is a set start too (the learn branch clears it in go()) */
  S.stg = pid;
  if(p.kind === "diag"){
    S.mode="rapid"; S.rf = {set:diagSet(), i:0, t0:Date.now(), src:"diag"}; save(); render();
    window.scrollTo({top:0,behavior:"instant"}); return;
  }
  if(p.kind === "final"){ S.mode="practice"; S.ps = {set:finalSet(), i:0, src:"final", t0:Date.now()}; save(); render(); return; }
  const st = S.stage[pid] || (S.stage[pid] = {});
  const unread = (p.topics||[]).filter(id => !(S.topics[id]||{}).read);
  if(unread.length){ go("learn", unread[0]); return; }
  if(!(st.quiz && st.quiz.done)){
    /* Interleave: this stage's questions plus a few from stages already done.
       Blocked practice feels easier and transfers worse. */
    const own = shuffle(stageQs(p)).map(q=>q.id);
    const doneIds = new Set(PATH.filter(x => x !== p && stageDone(x)).flatMap(x => x.topics||[]));
    const older = shuffle(QS.filter(q => doneIds.has(q.c))).slice(0, Math.max(2, Math.round(own.length*0.35))).map(q=>q.id);
    const mixed = shuffle(own.concat(older.filter(id => own.indexOf(id) < 0)));
    S.mode="practice"; S.ps = {set:mixed, i:0, src:"stage:"+pid, own:own.length, t0:Date.now()};
    save(); render(); return;
  }
  S.mode="rapid"; S.rf = {set:shuffle(stageRapid(p)).map(r=>r.i), i:0, t0:Date.now(), src:"stage:"+pid}; save(); render();
}
/* One rapid item per topic, so the engine gets a pre-instruction reading on
   every concept without consuming a single teaching vignette. */
function diagSet(){
  const byC = {}; RAPID.forEach(r => { (byC[r.c] = byC[r.c] || []).push(r); });
  return ALLT().map(t => { const pool = byC[t.id]; return pool && pool.length ? shuffle(pool)[0].i : null; })
    .filter(Boolean);
}
/* Vignettes held back from the diagnostic and from stage checks, so the final
   is answering questions you have genuinely never seen. */
function reservedIds(){
  const per = {};
  const out = new Set();
  QS.slice().sort((a,b)=>String(a.id).localeCompare(String(b.id))).forEach(q => {
    per[q.c] = (per[q.c]||0) + 1;
    if(per[q.c] % 4 === 0) out.add(q.id);      /* every 4th item of each topic */
  });
  return out;
}
let RESERVED = null;
const isReserved = id => (RESERVED = RESERVED || reservedIds()).has(id);
function finalSet(){
  const weakC = new Set(diagnose().filter(e=>e.flag).map(e=>e.t.id));
  /* Prefer items not yet seen, then items seen longest ago, then misses.
     Re-serving something whose explanation was read yesterday measures
     recognition rather than retention. */
  const now = Date.now();
  const age = q => { const a = S.qs[q.id]; return a && a.ts ? (now - a.ts)/864e5 : 99; };
  const pool = QS.map(q => ({q, w:(weakC.has(q.c)?3:1)
    * (S.qs[q.id] ? (S.qs[q.id].ok?0.4:2.4) : 2.6)
    * (isReserved(q.id) ? 3.5 : 1)             /* held back for exactly this */
    * (1 + Math.min(2, age(q)/3)) }));
  const out = [];
  const want = finalN();                       /* P2.2 (R2): META.finalN, not a fixed 40 */
  while(out.length < want && pool.length){
    const tot = pool.reduce((a,x)=>a+x.w,0); let r = Math.random()*tot, k = 0;
    while(r > 0 && k < pool.length){ r -= pool[k].w; if(r>0) k++; }
    out.push(pool.splice(Math.min(k,pool.length-1),1)[0].q.id);
  }
  return out;
}

/* @region engine.view-learn (ENGINE, engine) */
/* =====================================================================
   VIEW: LEARN
   ===================================================================== */
/* P2.2 (R17) - declared, not an implicit global: viewLearn() refills it per topic and
   bodyBlock() spends it, so each glossary term is linked once per page. */
let AUTOGLOSS_USED = {};
function railHTML(curId){
  let n = 0;
  return BLOCKS.map(b => {
    const shownTopics = b.topics.filter(t => !S.hiOnly || yv(t) === "hi");
    if(!shownTopics.length) return "";
    const inner = shownTopics.map(t => { n++;
      const ev = topicEvidence(Object.assign({blk:b}, t)), rd = (S.topics[t.id]||{}).read;
      const shown = ev.known >= 0.12 ? Math.round(ev.mastery*100) : 0;
      return `<button class="railitem${rd?" done":""}" data-t="${t.id}"${t.id===curId?' aria-current="true"':''}>
        <span class="rt"><span class="stepn">${rd?"&#10003;":n}</span>
        <span class="yield y-${yv(t)}" title="${yWord(t)} for ${YAXES[yAxis()]}"></span>
        <span style="min-width:0">${esc(t.t)}</span>
        ${ev.flag?'<span class="flagdot" title="weak"></span>':''}</span>
        <span class="rbar"><i style="width:${shown}%"></i></span></button>`;
    }).join("");
    const bk = blockKnown(b);
    const hiN = b.topics.filter(t=>yv(t)==="hi").length;
    return `<div class="railgrp"><h4>${esc(b.n)}
      <span class="ybadge" title="${hiN} of ${b.topics.length} topics are high yield for ${YAXES[yAxis()]}">${hiN}/${b.topics.length} HY</span>
      <span class="rnum">${bk>=0.12?Math.round(blockScore(b)*100)+"%":"&mdash;"}</span></h4>${inner}</div>`;
  }).join("");
}
/* P2.V F8 - one rule for "High yield only", stated where it applies. It filters everything a set
   button, the set builder or a review row of today's plan offers, and every count they show:
   questions, rapid picks (Due now included), images, drills, and the Learn rail. It does not filter
   the path (the diagnostic and the final simulation measure the whole block; a stage covers its own
   topics), search, the glossary or the evidence in Weak Spots. The banner used to say "every
   question, rapid pick and image is drawn from them" while Due now, the plan's due and re-test rows,
   the diagnostic and the final served lower-yield items. where: "path"/"learn" (the whole rule),
   "practice"/"rapid"/"spot"/"drill" (that menu's sets), "weak" (evidence vs buttons). */
function stageYx(p){ return p.kind === "diag" || p.kind === "final" ? "whole block, not filtered" : "path stage, not filtered"; }
function yieldBanner(where){
  if(!S.hiOnly) return "";
  const hi = ALLT().filter(t=>yv(t)==="hi").length, all = ALLT().length, ax = YAXES[yAxis()];
  const rev = !where || where === "path" || where === "learn" || where === "practice" || where === "rapid";
  const h = rev ? yHeld() : {low:0, other:0}, hn = h.low + h.other;
  const items = n => n + " review item" + (n === 1 ? "" : "s");
  const held = !hn ? "" : " " + (h.low ? items(h.low) + (h.low === 1 ? " on a lower-yield topic" : " on lower-yield topics") : "")
    + (h.low && h.other ? " and " + h.other : h.other ? items(h.other) : "")
    + (h.other ? (h.other === 1 ? " due from another block" : " due from other blocks") : "")
    + (hn === 1 ? " waits" : " wait") + " until you turn it off.";
  const head = `<b>High yield only (${ax}).</b> `, tail = " Turn this off in the header to see everything.";
  const txt = where === "weak"
    ? "The lists and the evidence on this page cover every topic. The buttons that start a set draw from the " + hi + " of " + all + " topics that are high yield."
    : where === "drill" ? "The drills listed on this page are the ones on the " + hi + " of " + all + " topics that are high yield." + tail
    : where === "practice" || where === "rapid" || where === "spot"
    ? "The sets on this page, and the counts on their buttons, are drawn from the " + hi + " of " + all + " topics that are high yield"
      + (where === "practice" || where === "rapid" ? ", due reviews included." + held : ".") + tail
    : "The topic list shows " + hi + " of " + all + " topics. Every question, rapid pick, image and drill offered by a set button, "
      + "the set builder or a review row of today's plan is drawn from them, and so is every count those show, due reviews included." + held
      + " Not filtered: the path, whose diagnostic and final simulation cover the whole block and whose stages (and their rows in "
      + "today's plan) cover their own topics; search; the glossary; and the evidence in Weak Spots." + tail;
  return `<div class="yieldbanner" data-yieldbanner="${where || "path"}">${head}${txt}</div>`;
}
function viewLearn(){
  const all = ALLT(), t = findT(S.cur) || all[0];
  /* P2.V F1: a block with no topics yet threw here on t.id */
  if(!t) return yieldBanner("learn") + '<div class="panel"><h3>No topics yet</h3><p style="color:var(--ink-2)">This block has no lessons yet.</p></div>';
  S.cur = t.id;
  /* P2.V F8 - under "High yield only" the previous / next buttons walk the topics the rail shows (and this one) */
  const nav = S.hiOnly ? all.filter(x => x.id === t.id || yv(x) === "hi") : all;
  const idx = nav.findIndex(x=>x.id===t.id), prev = nav[idx-1], next = nav[idx+1];
  /* P2.V F13: a finished pretest stays up, answered, until the student leaves the topic */
  const ptr = S.pre[t.id] || {}, ev = topicEvidence(t), pre = t.pretest && (!ptr.done || ptr.keep);
  /* P2.V N4 - where the rail stacks above the lesson (980 px and below) it folds behind this
     toggle, closed on every render, so a pick closes it again; above 980 px the toggle is
     hidden and the body is the sticky rail as before. */
  return `${yieldBanner("learn")}<div class="cols">
    <aside class="rail"><button type="button" class="railtoggle" aria-expanded="false" aria-controls="railbody">
      <span class="rtlab">Topics</span><span class="rtcur">${esc(t.t)}</span><span class="rtchev" aria-hidden="true">&#9662;</span></button>
      <div class="railbody" id="railbody">${railHTML(t.id)}</div></aside>
    <div>
      <div class="topichead">
        <div class="kick">
          <span class="eyebrow">${esc(t.blk.n)}</span>
          <span class="tag ${yv(t)}" title="Yield for ${YAXES[yAxis()]}">${yWord(t)}</span>
          <span class="tag ghost">${t.mins} min</span>
          ${ev.flag?'<span class="tag" style="background:var(--crit);color:#fff">weak spot</span>':''}
          ${(S.topics[t.id]||{}).read ? '<span class="tag" style="background:var(--good);color:#fff">read</span>'
            : '<span class="tag ghost" id="dwellTag">not read yet</span>'}
        </div>
        <h2>${esc(t.t)}</h2>
        <p class="sub">${esc(t.sub)}</p>
      </div>
      ${pre ? pretestHTML(t) : ""}
      <div class="body-inner">${(AUTOGLOSS_USED = explicitGloss(t), (t.body||[]).map((x, i) => bodyTag(bodyBlock(x), i)).join(""))}</div>
      ${t.grid ? gridHTML(t) : ""}
      <div class="navfoot">
        <div>${prev?'<button class="btn gho" data-t="'+prev.id+'">&larr; '+esc(prev.t)+'</button>':''}</div>
        <div class="btnrow">
          <button class="btn" id="clozeToggle" aria-pressed="${S.cloze}">${S.cloze?"Show answers":"Blank out key terms"}</button>
          ${next?'<button class="btn pri" data-t="'+next.id+'">'+esc(next.t)+' &rarr;</button>'
                :'<button class="btn pri" data-m="practice">Go to questions &rarr;</button>'}
        </div>
      </div>
    </div></div>`;
}
/* only rewrites when the toggle is on, so normal reading is untouched */
const cz = html => S.cloze ? autoCloze(html) : html;
/* An author's own link anywhere in this topic counts as that key's first
   occurrence, so autoGloss must not spend the key on a plain mention in an
   earlier block and leave the page carrying two links for one term. Seeding
   the used-map from the topic source first makes the author's link win
   whatever order the blocks happen to come in. */
function explicitGloss(t){
  const used = {};
  (JSON.stringify((t && t.body) || []).match(/\{\{.+?\}\}/g) || []).forEach(m => {
    const k = m.slice(2, -2).split("|")[0]; if(GLOSS[k]) used[k] = 1; });
  return used;
}
/* P2.5 F35b: every block carries its index in t.body (data-bi), so a search hit can land on the
   block, and on the row of a table, that the result quoted (srchLand) */
const bodyTag = (h, i) => h.replace(/^(\s*<[a-z][a-z0-9]*)/i, '$1 data-bi="' + i + '"');
function bodyBlock(x){
  const k = x[0];
  /* A section heading is where a term is INTRODUCED, so it is the honest place
     to link it -- "Virchow triad" appears nowhere else in any topic body. The
     wrapper span is added only when a link was, because .sechead is a flex row
     and bare text either side of a span becomes separate, gapped flex items. */
  if(k==="h"){ const raw = esc(x[1]), lk = autoGloss(raw, AUTOGLOSS_USED);
                 return '<div class="sechead">'+(lk===raw ? raw : '<span>'+lk+'</span>')+'</div>'; }
  if(k==="p")    return '<div class="prose"><p>'+cz(autoGloss(fmt(x[1]), AUTOGLOSS_USED))+'</p></div>';
  if(k==="f")    return figHTML(x[1]);
  if(k==="img")  return imgHTML(x[1]);
  if(k==="vis")  return visualGuideHTML(x[1]);
  if(k==="call") return '<div class="call '+x[1]+'"><span class="cl">'+esc(x[2])+'</span>'+cz(autoGloss(fmt(x[3]), AUTOGLOSS_USED))+'</div>';
  /* Half the prose in a topic is not in a `p` at all: it is in table cells, in
     unpacked steps and in the WHY answers. Glossing only `p` and `call` is why
     20 definitions were unreachable. AUTOGLOSS_USED still caps each term at its
     first appearance on the page, so the wider reach adds no repeats. */
  if(k==="why")  return '<details class="why"><summary><span class="qm">WHY</span><span>'+esc(x[1])+
                        '</span><span class="ch">&#9656;</span></summary><div class="ans">'+autoGloss(fmt(x[2]), AUTOGLOSS_USED)+'</div></details>';
  if(k==="t")    return tableHTML(x[1], x[2].map(r => r.map(c => cz(autoGloss(fmt(String(c)), AUTOGLOSS_USED)))));
  if(k==="palace") return palaceHTML(x[1]);
  if(k==="sexp") return sexpHTML(x[1], AUTOGLOSS_USED);
  if(k==="steps"){ const a = Array.isArray(x[1]) ? x[1] : [x[1], x[2]]; return stepsHTML(a[0], a[1] || [], AUTOGLOSS_USED); }
  return "";
}
function visualGuideHTML(key){
  const v = VISUAL_GUIDES[key]; if(!v) return "";
  const m = TOPIC_MEDIA[key] || {};
  const media = m.fig && FIGS[m.fig] ? figHTML(m.fig) : (m.img && IMGS[m.img] ? imgHTML(m.img) : "");
  return `<section class="conceptvisual"><h4>Visual model: ${esc(v[0])}</h4>
    <p class="cvintro">The diagram or specimen carries the visual information; the cards below are its reading sequence, not pretend hotspots.</p>
    ${media}<div class="conceptsteps">${v.slice(1).map((z,i)=>`<div><b>${i+1}. ${esc(z[0])}</b>${fmt(z[1])}</div>`).join("")}</div></section>`;
}
/* @region engine.pick-comment (ENGINE, engine) */
/* `pick` decides the visual: undefined falls back to the topic's own media,
   null means show none, {fig}/{img} pins a specific one. It exists because a
   panel headed "Why this answer fits" was opening the topic figure regardless —
   the doxorubicin item answered with an endocarditis organism tree. A visual
   that does not match is worse than no visual, so unmatched items now get none. */
/* @region content.rapid-media (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.rapid-media-fn (ENGINE, engine) */
/* P2.2 (R3) - both sides whitespace-normalised, the way applyRapidPoints() keys its map,
   so the renderer and the self-test's visuals count agree on every item. */
let RMEDIA_N = null;
function rapidMedia(r){
  const norm = x => String(x).replace(/\s+/g," ").trim();
  if(!RMEDIA_N){ RMEDIA_N = {}; Object.keys(RAPID_MEDIA).forEach(q => { RMEDIA_N[norm(q)] = RAPID_MEDIA[q]; }); }
  const v = RMEDIA_N[norm(r.q)];
  if(!v) return null;
  const key = v.slice(4);
  return v.slice(0,4)==="fig:" ? (FIGS[key]?{fig:key}:null) : (IMGS[key]?{img:key}:null);
}
/* @region content.rapid-point (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.rapid-points (ENGINE, engine) */
/* Runs at load, before anything renders: copies each point onto its item as r.pt. A key
   that matches no question would be a note nobody sees (the RAPID_X lesson), so say so. */
(function applyRapidPoints(){
  const norm = x => String(x).replace(/\s+/g, " ").trim();
  const by = {}; Object.keys(RAPID_POINT).forEach(k => { by[norm(k)] = RAPID_POINT[k]; });
  const seen = new Set();
  RAPID.forEach(r => { const k = norm(r.q), p = by[k]; if(!p) return; seen.add(k);
    r.pt = {hl: p.hl.slice(), say: p.say}; });
  const orphan = Object.keys(by).filter(k => !seen.has(k));
  if(orphan.length && typeof console !== "undefined") console.warn("applyRapidPoints: keys match no rapid question:", orphan);
})();
/* P1.8 (shared with P2.1): mark the part of a rendered figure or photo that answers the item.
   SVG figures: every <text> whose text contains an hl term gets class "hl" (or, when one
   <tspan> alone holds the term, that tspan does) and a rect.hlbox halo drawn behind it from
   its measured box. Photos: every annotation whose label contains a term gets .hot on its
   shape and leader line, and the first one is written into the side rail so its explanation
   is on screen without a hover. Matching is the same normalise-and-contains test the gate
   uses. Safe to call again on the same root (old marks are cleared first). Returns the count. */
function highlightFigure(root, hl){
  if(!root || !Array.isArray(hl) || !hl.length) return 0;
  const norm = x => String(x == null ? "" : x).replace(/<[^>]+>/g, " ").replace(/&[a-z]+;|&#\d+;/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
  const terms = hl.map(norm).filter(t => t.length >= 3);
  if(!terms.length) return 0;
  const hit = x => { const t = norm(x); return terms.some(h => t.indexOf(h) >= 0); };
  let n = 0;
  root.querySelectorAll("svg.dia").forEach(svg => {
    /* measure after the fitter has settled font sizes, so the halo matches the glyphs */
    try{ fitSvgText(svg); }catch(e){}
    svg.querySelectorAll("rect.hlbox").forEach(x => x.remove());
    svg.querySelectorAll(".hl").forEach(x => x.classList.remove("hl"));
    svg.querySelectorAll("text").forEach(t => {
      if(!hit(t.textContent)) return;
      const sp = [...t.querySelectorAll("tspan")].find(x => hit(x.textContent));
      const tg = sp || t;
      tg.classList.add("hl"); n++;
      let b = null; try{ b = tg.getBBox(); }catch(e){}
      if(b && b.width > 0 && b.height > 0){
        const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        r.setAttribute("class", "hlbox"); r.setAttribute("aria-hidden", "true");
        r.setAttribute("x", (b.x - 4).toFixed(1)); r.setAttribute("y", (b.y - 2).toFixed(1));
        r.setAttribute("width", (b.width + 8).toFixed(1)); r.setAttribute("height", (b.height + 4).toFixed(1));
        r.setAttribute("rx", "4");
        t.parentNode.insertBefore(r, t);
      }
    });
  });
  root.querySelectorAll(".photo .imgbox").forEach(box => {
    const any = box.querySelector("[data-annkey]"), im = any && IMGS[any.dataset.annkey];
    if(!im || !im.ann) return;
    let first = -1;
    /* P2.5 (K15): a callout can be several elements (an inset is a source box, a link line and
       the magnified box), and a kind "none" callout is its pin alone, so all of them are marked */
    im.ann.forEach((a, i) => { if(!hit(a.l)) return;
      box.querySelectorAll('[data-sh="' + i + '"], [data-lead="' + i + '"], .opin[data-pin="' + i + '"]').forEach(x => x.classList.add("hot"));
      n++;
      if(first < 0) first = i; });
    const rail = first >= 0 && document.getElementById(box.id + "_rail");
    if(rail) rail.innerHTML = '<span class="arhead">Image annotation</span><span class="arnum">' + (first + 1) + '</span>' + fmt(im.ann[first].l);
  });
  return n;
}
/* P1.8: optional 4th argument {open, say, hl, sayCls}. open renders the details already
   expanded (the rapid figure is the explanation, so it must not hide behind a click); say is
   the where-to-look line, placed first in the body so it sits directly above the figure; hl
   rides on data-hl so wireRapid (and the lightbox) can mark the answer with highlightFigure.
   Every existing caller passes three arguments and gets byte-identical output. */
/* @region engine.deep-review (LITERALS, engine) */
function deepReviewHTML(tid, label, pick, opt){
  opt = opt || {};
  const t=findT(tid), v=VISUAL_GUIDES[tid]; if(!t) return "";
  const m = pick === undefined ? (TOPIC_MEDIA[tid]||{}) : (pick || {});
  const media = m.fig&&FIGS[m.fig] ? figHTML(m.fig) : (m.img&&IMGS[m.img] ? imgHTML(m.img) : "");
  const rows = v ? v.slice(1).map(z=>`<div><b>${esc(z[0])}</b>${fmt(z[1])}</div>`).join("") : "";
  const hlA = opt.hl && opt.hl.length ? ' data-hl="'+escA(JSON.stringify(opt.hl))+'"' : "";
  const say = opt.say ? '<p class="'+(opt.sayCls||"rfsay")+'"><span class="sayk">Where to look</span>'+fmt(opt.say)+'</p>' : "";
  return `<details class="deepreview"${opt.open?" open":""}${hlA}><summary>${esc(label||"Open the deeper review: visual, comparison and lesson")}</summary>
    <div class="deepbody">${say}${media}${rows?`<div class="reviewgrid">${rows}</div>`:""}
      <button class="btn pri" data-gototopic="${esc(tid)}">Open the full lesson: ${esc(t.t)} &rarr;</button></div></details>`;
}
const stepsText = x => { const a = Array.isArray(x[1]) ? x[1] : [x[1], x[2]];
  return String(a[0]) + " " + (a[1]||[]).map(r=>r.join(" - ")).join("; "); };
/* numbered unpacking: one idea per row, each with its own explanation */
/* `used` is optional on purpose: passed from the topic body it shares that
   page's first-occurrence budget, and any other caller gets the old output. */
function stepsHTML(title, rows, used){
  const ag = h => used ? autoGloss(h, used) : h;
  return `<div class="unpack">
    <div class="unpackhead">${esc(title)}</div>
    ${rows.map((r,i)=>`<div class="unpackrow">
      <span class="un">${i+1}</span>
      <span><span class="ut">${ag(fmt(r[0]))}</span><span class="ud">${ag(fmt(r[1]))}</span></span></div>`).join("")}
  </div>`;
}
function tableHTML(head, rows){
  return '<div class="tblwrap"><table><thead><tr>'+head.map(h=>'<th>'+fmt(String(h))+'</th>').join("")+
    '</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td>'+c+'</td>').join("")+'</tr>').join("")+'</tbody></table></div>';
}
/* P2.5 (K18): the caption states what the figure settles; longer teaching (f.teach) sits
   under a closed disclosure directly beneath it, so it is one click away but never pushes
   the next paragraph down. */
function figHTML(key){
  const f = FIGS[key]; if(!f) return "";
  const teach = f.teach ? '<details class="figteach"><summary>More on this figure</summary><div class="figteachbody">'+fmt(f.teach)+'</div></details>' : "";
  return '<figure style="position:relative">'+
    '<button type="button" class="figzoom" data-zoomfig="'+key+'" aria-label="Enlarge this figure" title="Enlarge">&#10530;</button>'+
    '<div style="overflow-x:auto">'+f.svg+'</div><figcaption>'+fmt(f.cap)+'</figcaption>'+teach+'</figure>';
}
/* A memory scene is supposed to work by DUAL CODING -- a picture alongside the
   words. Rendered as a paragraph of prose plus a list, it was carrying verbal
   load with no visual code at all, which is the one thing that makes this
   technique work. The anchors are now laid out as a spatial board you can walk
   through, and the prose is collapsed behind it rather than read first. */
function palaceHTML(key){
  const p = PALACE[key]; if(!p) return "";
  return `<div class="palace" data-pal="${escA(key)}">
    <div class="palhead"><span class="pl2">Memory scene</span><h4>${esc(p.t)}</h4></div>
    <div class="palboard">${p.keys.map(([ic,k,v],i)=>
      `<figure class="palcard">
         <div class="palbig" aria-hidden="true">${ic}</div>
         <figcaption><span class="palstep">${i+1}</span><span class="pk">${esc(k)}</span>
           <span class="pv">${fmt(v)}</span></figcaption>
       </figure>`).join("")}</div>
    <details class="palstorywrap"><summary>Read the scene as a story</summary>
      <div class="palstory">${fmt(p.story)}</div></details>
  </div>`;
}
/* Annotated photograph. Overlays are HTML positioned in PERCENT, so they can
   never be stretched or offset by the image's aspect ratio. */
/* CC-BY and CC-BY-SA both require the author, the licence and a link to the
   source, and an indication that the file was modified. */
function credHTML(im){
  if(!im.cred && !im.by) return "";
  if(!im.by) return '<span class="cred">'+im.cred+'</span>';
  const lic = im.licurl ? '<a href="'+im.licurl+'" target="_blank" rel="noopener">'+esc(im.lic)+'</a>' : esc(im.lic||"");
  /* P2.2 (R24) - the source is named from the image's own srcurl (its host), never a fixed site */
  let host = "source"; try{ host = new URL(im.srcurl).hostname.replace(/^www\./, "") || host; }catch(e){}
  const src = im.srcurl ? '<a href="'+im.srcurl+'" target="_blank" rel="noopener">'+esc(host)+'</a>' : "";
  return '<span class="cred">'+esc(im.by)+' &middot; '+lic+(src?' &middot; '+src:'')+(im.mod?' &middot; resized':'')+'</span>';
}
let IMG_RENDER_SEQ=0;
/* "Show all findings" is one preference for every image on the page (kept across renders) */
let OV_SHOWALL = false;
/* P2.V K16/F19 - the reader's own marks on an image (the pinned callout, Hide markup) are
   state, not DOM. They are kept per image for the screen they were made on, so every redraw
   of that screen (a sexp pick, the cloze toggle, grid scoring, a yield toggle) and the
   Enlarge copy draw them back, and every live copy of the image follows a change at once
   (ovSync). They are dropped when the reader moves to another view or topic (ovScope, run
   by render()). */
let OV_PIN = {}, OV_RAW = {}, OV_AT = null;
function ovScope(){
  /* the topic viewLearn will show (it falls back to the first topic when S.cur is not set) */
  const t = S.mode === "learn" ? (findT(S.cur) || ALLT()[0]) : null;
  const at = S.mode + "|" + (t ? t.id : "");
  if(at !== OV_AT){ OV_AT = at; OV_PIN = {}; OV_RAW = {}; }
}
/* P2.5 (K15) - the overlay renderer draws all nine kinds of the contract, in percent of the
   image box: r (x y w h), e (x y rx ry rot), c (x y r, r in % of the width), poly (pts),
   arrow (x y = tip, tx ty = tail), bracket (x y -> x2 y2), spot (x y rx ry: everything
   outside is dimmed while the finding is selected), inset (x y w h = source, ix iy iw ih =
   the magnified box) and none (pin only). Nothing is filled. Every callout has a numbered
   pin at px py (the button that opens its label; when px py are missing the pin sits just
   outside the shape, never on the finding) and a dashed leader from the pin to the shape's
   nearest edge, so no pin or line lies on top of what it points at. `sh` is drawn as r.
   Shapes, polygons and leaders are all in the same %-space, so they cannot drift apart. */
const OVN = v => { v = +v; return isFinite(v) ? v : 0; };
const OVC = v => Math.max(2.5, Math.min(97.5, v));
function ovBox(a){
  const k = a.k, x = OVN(a.x), y = OVN(a.y);
  if(k === "r" || k === "sh" || k === "inset") return [x, y, x + OVN(a.w), y + OVN(a.h)];
  if(k === "e" || k === "spot") return [x - OVN(a.rx), y - OVN(a.ry), x + OVN(a.rx), y + OVN(a.ry)];
  if(k === "c") return [x - OVN(a.r), y - OVN(a.r), x + OVN(a.r), y + OVN(a.r)];
  if(k === "poly" && Array.isArray(a.pts) && a.pts.length){ const xs = a.pts.map(p => OVN(p[0])), ys = a.pts.map(p => OVN(p[1]));
    return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)]; }
  if(k === "bracket") return [Math.min(x, OVN(a.x2)), Math.min(y, OVN(a.y2)), Math.max(x, OVN(a.x2)), Math.max(y, OVN(a.y2))];
  return [x, y, x, y];
}
function ovPin(a){
  if(a.px != null && a.py != null) return [OVC(OVN(a.px)), OVC(OVN(a.py))];
  if(a.k === "arrow") return [OVC(OVN(a.tx)), OVC(OVN(a.ty))];
  if(a.k === "none" || a.k == null) return [OVC(OVN(a.x)), OVC(OVN(a.y))];
  const b = ovBox(a), cx = (b[0] + b[2]) / 2;
  return [OVC(cx), b[1] - 5 >= 2.5 ? b[1] - 5 : OVC(b[3] + 5)];
}
/* the point of a shape nearest to its pin, where the leader stops (null: no leader) */
function ovEdge(a, px, py){
  const k = a.k, x = OVN(a.x), y = OVN(a.y);
  const inRect = (r, qx, qy) => qx > r[0] && qx < r[2] && qy > r[1] && qy < r[3];
  const clampR = r => [Math.max(r[0], Math.min(r[2], px)), Math.max(r[1], Math.min(r[3], py))];
  const onSeg = (x1, y1, x2, y2) => { const dx = x2 - x1, dy = y2 - y1, L = dx*dx + dy*dy;
    const t = L ? Math.max(0, Math.min(1, ((px - x1)*dx + (py - y1)*dy) / L)) : 0; return [x1 + t*dx, y1 + t*dy]; };
  const d2 = p => (p[0] - px)*(p[0] - px) + (p[1] - py)*(p[1] - py);
  if(k === "r" || k === "sh"){ const r = ovBox(a); return inRect(r, px, py) ? null : clampR(r); }
  if(k === "e" || k === "c" || k === "spot"){
    const rx = k === "c" ? OVN(a.r) : OVN(a.rx), ry = k === "c" ? OVN(a.r) : OVN(a.ry);
    if(rx <= 0 || ry <= 0) return [x, y];
    const L = Math.hypot((px - x)/rx, (py - y)/ry); return L <= 1 ? null : [x + (px - x)/L, y + (py - y)/L]; }
  if(k === "poly" && Array.isArray(a.pts) && a.pts.length > 1){
    const p = a.pts.map(q => [OVN(q[0]), OVN(q[1])]); let inside = false, best = null;
    for(let i = 0, j = p.length - 1; i < p.length; j = i++){
      if((p[i][1] > py) !== (p[j][1] > py) && px < (p[j][0] - p[i][0])*(py - p[i][1])/(p[j][1] - p[i][1]) + p[i][0]) inside = !inside;
      const s = onSeg(p[j][0], p[j][1], p[i][0], p[i][1]); if(!best || d2(s) < d2(best)) best = s; }
    return inside ? null : best; }
  if(k === "arrow") return [OVN(a.tx), OVN(a.ty)];
  if(k === "bracket") return onSeg(x, y, OVN(a.x2), OVN(a.y2));
  if(k === "inset"){ const s = ovBox(a), z = [OVN(a.ix), OVN(a.iy), OVN(a.ix) + OVN(a.iw), OVN(a.iy) + OVN(a.ih)];
    if(inRect(s, px, py) || inRect(z, px, py)) return null;
    const ps = clampR(s), pz = clampR(z); return d2(ps) <= d2(pz) ? ps : pz; }
  return null;
}
/* one callout -> {h: HTML in the overlay layer, s: SVG in the %-space layer} */
function ovShape(a, i, key, im){
  const c = "oc" + ((i % 5) + 1), k = a.k, x = OVN(a.x), y = OVN(a.y), sh = ` data-sh="${i}"`;
  const f = v => +v.toFixed(3);
  if(k === "r" || k === "sh") return {h:`<div class="oshape rect ${c}"${sh} style="left:${f(x + OVN(a.w)/2)}%;top:${f(y + OVN(a.h)/2)}%;width:${OVN(a.w)}%;height:${OVN(a.h)}%"></div>`, s:""};
  if(k === "e") return {h:`<div class="oshape ${c}"${sh} style="left:${x}%;top:${y}%;width:${OVN(a.rx)*2}%;height:${OVN(a.ry)*2}%${a.rot ? ";transform:translate(-50%,-50%) rotate(" + OVN(a.rot) + "deg)" : ""}"></div>`, s:""};
  if(k === "c" || k == null) return {h:`<div class="oshape ${c}"${sh} style="left:${x}%;top:${y}%;width:${(OVN(a.r) || 1.2)*2}%;aspect-ratio:1"></div>`, s:""};
  if(k === "poly"){ const pts = (Array.isArray(a.pts) ? a.pts : []).map(p => OVN(p[0]) + "," + OVN(p[1])).join(" ");
    return {h:"", s:`<polygon class="ovs ${c}"${sh} points="${pts}"/>`}; }
  if(k === "arrow" || k === "bracket"){
    /* HTML, not SVG: an arrowhead or a bracket tick drawn in the stretched %-space would be
       skewed on any non-square image. The box starts at the tip (arrow) or the first end
       (bracket); CSS measures its length and angle in real pixels from the container size. */
    const ex = k === "arrow" ? OVN(a.tx) : OVN(a.x2), ey = k === "arrow" ? OVN(a.ty) : OVN(a.y2);
    const dx = ex - x, dy = ey - y, st = `--x:${x};--y:${y};--dx:${f(dx)};--dy:${f(dy)};--lf:${f(Math.hypot(dx, dy))};--af:${f(Math.atan2(dy, dx)*180/Math.PI)}deg`;
    if(k === "arrow") return {h:`<div class="oarrow ${c}"${sh} style="${st}"></div>`, s:""};
    /* the ticks point away from the pin, i.e. toward what the bracket measures */
    const p = ovPin(a), side = -dy*(p[0] - x) + dx*(p[1] - y) > 0 ? "tp" : "tn";
    return {h:`<div class="obracket ${side} ${c}"${sh} style="${st}"></div>`, s:""}; }
  if(k === "spot"){ const rx = OVN(a.rx), ry = OVN(a.ry);
    return {h:"", s:`<path class="ospotdim"${sh} fill-rule="evenodd" d="M0 0H100V100H0Z M${f(x - rx)} ${y}a${rx} ${ry} 0 1 0 ${f(2*rx)} 0a${rx} ${ry} 0 1 0 ${f(-2*rx)} 0Z"/>`
      + `<ellipse class="ovs dash ${c}"${sh} cx="${x}" cy="${y}" rx="${rx}" ry="${ry}"/>`}; }
  if(k === "inset"){
    const w = OVN(a.w), hh = OVN(a.h), ix = OVN(a.ix), iy = OVN(a.iy), iw = OVN(a.iw), ih = OVN(a.ih);
    const s = [x, y, x + w, y + hh], z = [ix, iy, ix + iw, iy + ih];
    const cl = (r, px, py) => [Math.max(r[0], Math.min(r[2], px)), Math.max(r[1], Math.min(r[3], py))];
    const p1 = cl(s, ix + iw/2, iy + ih/2), p2 = cl(z, x + w/2, y + hh/2);
    /* the magnified crop: the source rect scaled to fill the box (keep iw:ih = w:h) */
    const bs = w > 0 && hh > 0 ? `background-size:${f(10000/w)}% ${f(10000/hh)}%;background-position:${w < 100 ? f(100*x/(100 - w)) : 0}% ${hh < 100 ? f(100*y/(100 - hh)) : 0}%` : "";
    return {h:`<div class="oinset ${c}"${sh} style="left:${ix}%;top:${iy}%;width:${iw}%;height:${ih}%;background-image:url(&quot;${escA(im.url)}&quot;);${bs}"></div>`,
      s:`<rect class="ovs dash ${c}"${sh} x="${x}" y="${y}" width="${w}" height="${hh}"/><line class="ovs olink ${c}"${sh} x1="${f(p1[0])}" y1="${f(p1[1])}" x2="${f(p2[0])}" y2="${f(p2[1])}"/>`}; }
  return {h:"", s:""};   /* none: the pin is the whole callout */
}
/* lb: the Enlarge copy. It has no Enlarge button of its own (it would reopen the same view),
   and the image box sits in a pan pane that lbPhotoInit sizes and zooms. */
function imgHTML(key, lb){
  const im = IMGS[key]; if(!im) return "";
  const uid = "im_"+key.replace(/\W/g,"")+"_"+(++IMG_RENDER_SEQ);
  const ann = im.ann || [], parts = ann.map((a, i) => ovShape(a, i, key, im));
  const pins = ann.map((a, i) => { const p = ovPin(a);
    return `<button type="button" class="opin oc${(i%5)+1}" data-num="${i+1}" data-pin="${i}" data-annkey="${key}" aria-label="Annotation ${i+1}: ${esc(stripTags(a.l))}" aria-expanded="false" style="left:${p[0]}%;top:${p[1]}%">${i+1}</button>`; }).join("");
  /* Percentages map identically on both axes with preserveAspectRatio="none",
     so a straight line between two %-space points lands correctly. */
  const leads = ann.map((a,i)=>{
    const p = ovPin(a), e = ovEdge(a, p[0], p[1]);
    if(!e || Math.hypot(p[0]-e[0], p[1]-e[1]) < 3) return "";   /* pin is on it already */
    /* a circle's radius is a share of the WIDTH, so in %-space its edge depends on the image's
       aspect ratio: that leader is an HTML line aimed at the centre that CSS stops at the ring */
    if(a.k === "c" && OVN(a.r) > 0) return "";
    return `<line class="olead oc${(i%5)+1}" data-lead="${i}" x1="${p[0]}" y1="${p[1]}" x2="${+e[0].toFixed(3)}" y2="${+e[1].toFixed(3)}"/>`;
  }).join("");
  const leadsC = ann.map((a,i)=>{
    if(a.k !== "c" || !(OVN(a.r) > 0)) return "";
    const p = ovPin(a), e = ovEdge(a, p[0], p[1]);
    if(!e || Math.hypot(p[0]-e[0], p[1]-e[1]) < 3) return "";
    const dx = OVN(a.x) - p[0], dy = OVN(a.y) - p[1], f = v => +v.toFixed(3);
    return `<div class="oleadc oc${(i%5)+1}" data-lead="${i}" style="--x:${p[0]};--y:${p[1]};--dx:${f(dx)};--dy:${f(dy)};--r:${OVN(a.r)};--lf:${f(Math.max(0, Math.hypot(dx, dy) - OVN(a.r)))};--af:${f(Math.atan2(dy, dx)*180/Math.PI)}deg"></div>`;
  }).join("");
  const all = OV_SHOWALL ? " showall" : "", raw = !!OV_RAW[key];
  const box = `<div class="imgbox${all}${raw ? " raw" : ""}" id="${uid}" data-imgkey="${escA(key)}">
      <img src="${im.url}" alt="${esc(im.n)}"${lb ? ' draggable="false"' : ' loading="lazy"'}>
      <div class="ovlayer"><svg class="oleads" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${parts.map(p => p.s).join("")}${leads}</svg>${leadsC}${parts.map(p => p.h).join("")}${pins}</div>
    </div>`;
  return `<figure class="photo">
    <div class="photobar"><span class="pt">${esc(im.n)}</span>
      ${lb ? "" : `<button class="btn sm" data-zoomimg="${key}" style="margin-left:auto">Enlarge</button>`}
      ${ann.length ? `<button class="btn sm" data-showall="${uid}" aria-pressed="${OV_SHOWALL}">Show all findings</button>` : ""}
      <button class="btn sm pbtn" data-raw="${uid}">${raw ? "Show markup" : "Hide markup"}</button></div>
    <div class="photoannot">${lb ? `<div class="lbpan" tabindex="0" aria-label="Image. When it is larger than this frame, drag, scroll or use the arrow keys to pan.">${box}</div>` : box}<aside class="annrail" id="${uid}_rail" aria-live="polite"><span class="arhead">Image annotation</span>
      Hover, focus or tap a numbered pin. Its explanation stays here, upright and inside the page.</aside></div>
    ${(im.ann||[]).length ? '<details class="legend"><summary>All '+im.ann.length+
      ' findings as a list</summary>'+im.ann.map((a,i)=>
      '<div class="li"><span class="lnum c'+((i%5)+1)+'">'+(i+1)+'</span><span>'+fmt(a.l)+'</span></div>').join("")+'</details>' : ""}
    <figcaption>${fmt(im.look)}${credHTML(im)}</figcaption>
  </figure>`;
}
/* P2.V F13: a pretest row is drawn from S.pre, never from the DOM. The first answer is
   written once (ok[i] and the picked option's text in pick[i]); every render (a sexp pick,
   the cloze toggle, grid scoring, a yield toggle, a reload) draws the row answered, with the
   picked option's note open first. An item counts as answered only when ok[i] is a boolean:
   a save turns the holes of a sparse ok array into null. PT_OPEN keeps the why toggles the
   student flipped on an answered row, for this page session. */
let PT_OPEN = {};
const ptAnswered = (rec, i) => !!rec && Array.isArray(rec.ok) && typeof rec.ok[i] === "boolean";
function pretestHTML(t){
  const rec = S.pre[t.id];
  return `<div class="pretest" id="pretest">
    <div class="pthead"><b>Guess first.</b> You are not supposed to know these yet. Getting them wrong now
      is what makes the explanation stick &mdash; commit to an answer, then read.</div>
    ${t.pretest.map((p,i)=>{
      if(!ptAnswered(rec, i)) return `<div class="ptq" data-pt="${i}">
      <div class="ptqq">${fmt(p.q)}</div>
      <div class="ptopts">${p.o.map((o,j)=>
        `<button class="ptopt" data-pti="${i}" data-ptj="${j}"><span>${esc(o)}</span></button>`).join("")}</div>
      <div class="ptwhy hide"></div></div>`;
      /* the pick is stored as option text (the load permutation is by content); an answer
         saved before picks were stored still shows as answered, without a picked note */
      const pk = rec.pick ? p.o.indexOf(rec.pick[i]) : -1, j = pk >= 0 ? pk : (rec.ok[i] ? p.a : -1);
      const note = ix => (ix !== p.a && p.w && p.w[p.o[ix]]) || "";
      const tog = PT_OPEN[t.id+":"+i], open = ix => tog && (ix in tog) ? !!tog[ix] : ix === j;
      const pw = note(j);
      return `<div class="ptq" data-pt="${i}" data-picked="${j}">
      <div class="ptqq">${fmt(p.q)}</div>
      <div class="ptopts">${p.o.map((o,ix)=>{
        const base = `data-pti="${i}" data-ptj="${ix}"`, lab = `<span>${esc(o)}</span>`;
        if(ix === p.a) return `<button class="ptopt right" ${base} aria-disabled="true">${lab}</button>`;
        const cls = "ptopt " + (ix === j ? "wrong" : "dim"), why = note(ix), id = "ptw"+i+"_"+ix;
        if(!why) return `<button class="${cls}" ${base} aria-disabled="true">${lab}</button>`;
        return `<button class="${cls}" ${base} data-why="${ix}" aria-controls="${id}" aria-expanded="${open(ix)}">${lab}<span class="rfwh" aria-hidden="true">why not</span></button>`
          + (ix === j ? "" : `<div class="optwhy" id="${id}"${open(ix)?"":" hidden"}><b>Why not this one:</b> ${fmt(why)}</div>`);
      }).join("")}</div>
      <div class="ptwhy">${pw ? `<div class="ptpick" id="ptw${i}_${j}"${open(j)?"":" hidden"}><b>Your pick &mdash; why it is wrong:</b> ${fmt(pw)}</div>` : ""}<div>${fmt(p.why)}</div></div></div>`;
    }).join("")}
  </div>`;
}
/* Only the explanation is glossed. Each option is a real button, and a gterm
   span is itself role="button" with a tabindex, so glossing an option would put
   a control inside a control for anyone reading with a screen reader. */
function sexpHTML(o, used){
  const ag = h => used ? autoGloss(h, used) : h;
  const done = S.sexp[o.id];
  return `<div class="checkpoint" data-sexp="${o.id}">
    <div class="cphead"><div class="cpt">Explain it &mdash; pick the reasoning that is actually right</div>
      <div class="cpd">${esc(o.q)}</div></div>
    <div class="cpbody"><div class="rgrid" style="grid-template-columns:1fr">${o.o.map((x,i)=>{
      let cls = "rgi"; if(done!=null){ if(i===o.a) cls+=" hit"; else if(i===done) cls+=" fp"; }
      const tag = done==null ? "" : i===o.a ? '<span class="rgtag">'+(i===done ? "your pick, right" : "right")+'</span>' : i===done ? '<span class="rgtag">your pick</span>' : "";
      return `<button class="${cls}" data-sx="${o.id}" data-sxi="${i}"${done!=null?" disabled":""}>
        <span class="bx">&#10003;</span><span>${fmt(x)}</span>${tag}</button>`;}).join("")}</div>
      ${done!=null?'<div class="ptwhy" style="margin-top:14px">'+ag(fmt(o.why))+'</div>':''}</div></div>`;
}
/* P2.V F13 sweep: the grid is drawn from state on every render. Before scoring, the taps
   are in GRID_SEL (this page session); a scored grid keeps the items that were picked
   (topics[tid].gridPick, by item text) so its hit / missed / decoy colours and its score line
   come back after any re-render or a reload, not only a bare "Scored N%". */
let GRID_SEL = {};
function gridTally(t, picked){
  const items = t.grid.items, tot = items.filter(x=>x[1]).length; let hit = 0, fp = 0;
  items.forEach(it => { if(picked.indexOf(String(it[0])) < 0) return; if(it[1]) hit++; else fp++; });
  return {hit, fp, tot};
}
function gridHTML(t){
  const g = t.grid, rec = S.topics[t.id] || {};
  /* One frozen attempt used to set mastery for the whole month. It reopens now. */
  const done = rec.grid != null && !rec.gridRetake;
  const picked = done && Array.isArray(rec.gridPick) ? rec.gridPick : null, sel = GRID_SEL[t.id] || {};
  const tl = picked ? gridTally(t, picked) : null;
  const score = !done ? "Nothing selected yet" : "Scored <b>"+Math.round(rec.grid*100)+"%</b>" + (tl ? " &mdash; "+tl.hit+" of "+tl.tot+" found"
    + (tl.fp ? ", "+tl.fp+" decoy"+(tl.fp>1?"s":"")+" picked" : "") : "");
  return `<div class="checkpoint" id="rgrid" data-gt="${t.id}">
    <div class="cphead"><div class="cpt">Recall check</div>
      <div class="cpd">${esc(g.q)} &mdash; tap every one that belongs. Some of these are decoys.</div></div>
    <div class="cpbody">
      <div class="rgrid">${g.items.map((it,i)=>{
        let cls = "rgi", tag = "";
        /* P2.V sweep (F12): a scored item says what it was in words, not by its colour alone */
        if(picked){ const on = picked.indexOf(String(it[0])) >= 0; cls += on ? (it[1] ? " hit" : " fp") : (it[1] ? " miss" : "");
          tag = '<span class="rgtag">' + (on ? (it[1] ? "found" : "decoy, picked") : (it[1] ? "missed" : "decoy")) + '</span>'; }
        const st = done ? " disabled" : ' aria-pressed="' + (sel[i] ? "true" : "false") + '"';
        return `<button class="${cls}" data-rg="${i}"${st}><span class="bx">&#10003;</span><span>${fmt(it[0])}</span>${tag}</button>`; }).join("")}</div>
      <div class="cpscore">
        <span class="sc" id="rgscore">${score}</span>
        <button class="btn ${done?"":"acc"}" id="rgcheck"${done?" disabled":""}>${done?"Scored":"Check my recall"}</button>
        ${done?'<button class="btn" id="rgagain">Test me again</button>':''}
      </div></div></div>`;
}

/* @region engine.practice-helpers (ENGINE, engine) */
/* =====================================================================
   VIEW: PRACTICE
   ===================================================================== */
function practiceLabel(src){
  if(!src) return "Mixed practice";
  /* P2.V F8 - both measure the whole block, which "High yield only" does not narrow */
  if(src==="diag") return "Diagnostic sweep" + (S.hiOnly ? " &middot; whole block, not filtered" : "");
  if(src==="final") return "Final simulation" + (S.hiOnly ? " &middot; whole block, not filtered" : "");
  if(src==="weak") return "Targeted at your weak spots";
  if(src==="search") return "From search";
  if(src.startsWith("stage:")) return "Stage check &mdash; " + esc((stageOf(src.slice(6))||{t:""}).t);
  /* P2.3: a named set keeps its button's name while it runs ("Mixed practice" hid which set it was) */
  if(src==="custom") return "Your own set";
  if(PS_NAME[src]) return esc(psName(src));
  return "Mixed practice";
}
/* A deterministic shuffle keyed on how many times this item has been served,
   so the displayed order changes between presentations but is stable within one.
   Without this, four or five exposures teach the POSITION, not the fact. */
/* murmur3 fmix32. Both shufflers below derive an index from an LCG whose
   low bits cycle with period 2 and 4, while their seeds are FNV hashes of
   short ids that share prefixes ("q1".."q9"), leaving the HIGH bits nearly
   identical too. Either end alone is biased; this avalanches the whole word
   first, so any slice of it is usable. */
function mix32(x){ x^=x>>>16; x=Math.imul(x,2246822507)>>>0; x^=x>>>13;
                   x=Math.imul(x,3266489909)>>>0; x^=x>>>16; return x>>>0; }
function viewOrder(q, seed){
  const n = q.o.length, ord = [...Array(n).keys()];
  /* Domain tag. Without it, seed 0 leaves h at the bare FNV basis -- the same
     value permuteOptions starts from -- and both then hash the same q.id, so
     the view permutation WAS the load permutation applied a second time.
     perm-of-perm is not uniform, and A came up 1.6x its share on first sight. */
  let h = (2166136261 ^ 0x5bf03635 ^ (((seed|0) * 2654435761) >>> 0)) >>> 0;
  const id = String(q.id);
  for(let i=0;i<id.length;i++){ h ^= id.charCodeAt(i); h = Math.imul(h,16777619)>>>0; }
  h = mix32(h);
  for(let i=n-1;i>0;i--){ h = mix32((Math.imul(h,1103515245)+12345)>>>0); const j = h%(i+1); [ord[i],ord[j]]=[ord[j],ord[i]]; }
  return ord;
}
/* P2.3 (K9): the one retrievable rule, first in the explanation. */
function qblHTML(q){
  return q && q.bl ? '<p class="qbl"><span class="blk">Bottom line</span>' + fmt(q.bl) + '</p>' : "";
}
/* P2.3 (K8): q.et = [head, rows], every row keyed by its option's exact text. Rows follow
   the letters on screen (slot: original index -> display position) and carry that letter,
   so row and option read as one; the keyed row is tr.etkey. With no slot (the set summary,
   where no letters are shown) rows keep the option order. Body cells are raw HTML. */
function etTableHTML(q, slot){
  if(!q || !Array.isArray(q.et) || !Array.isArray(q.et[0]) || !Array.isArray(q.et[1])) return "";
  const at = r => { const k = q.o.indexOf(r[0]); return k < 0 ? q.o.length + 1 : (slot ? slot[k] : k); };
  const rows = q.et[1].filter(Array.isArray).slice().sort((x, y) => at(x) - at(y));
  return '<div class="tblwrap et"><table><thead><tr>' + q.et[0].map(h => '<th>' + fmt(String(h)) + '</th>').join("") +
    '</tr></thead><tbody>' + rows.map(r => {
      const k = q.o.indexOf(r[0]), key = k === q.a, p = at(r);
      const first = (slot && k >= 0 ? '<span class="etl">' + "ABCDE"[p] + '</span>' : "") + fmt(String(r[0])) +
        (key ? ' <span class="etans">answer</span>' : "");
      return '<tr' + (key ? ' class="etkey"' : "") + '>' + r.map((c, j) => '<td>' + (j ? c : first) + '</td>').join("") + '</tr>';
    }).join("") + '</tbody></table></div>';
}
/* P2.3 (K11): the end of a set. One row per answered question (stem, what was picked,
   the keyed answer); a row opens its .sumexp in place: the full stem, bottom line,
   explanation, table and every option's note, the picked one first. */
function setSummaryHTML(ps){
  const ids = ps.set.filter(id => ps.ans && Object.prototype.hasOwnProperty.call(ps.ans, id) && QS.some(x => x.id === id));
  const right = ids.filter(id => ps.ans[id]).length;
  const plain = s => esc(stripTags(String(s == null ? "" : s)));
  const rows = ids.map((id, n) => {
    const q = QS.find(x => x.id === id), ok = !!ps.ans[id];
    const pick = ps.picks && ps.picks[id] != null ? ps.picks[id] : (S.qs[id] || {}).pick;
    const stem = stripTags(q.s).split(/\s+/).filter(Boolean);
    const notes = q.o.map((o, k) => k).filter(k => k !== q.a && q.w && q.w[k] !== undefined)
      .sort((x, y) => (y === pick) - (x === pick) || x - y)
      .map(k => '<div><b>' + (k === pick ? "Your pick, " : "") + fmt(q.o[k]) + '</b> &mdash; ' + fmt(q.w[k]) + '</div>').join("");
    return `<div class="sumrow ${ok ? "ok" : "bad"}"><button class="sumq" data-sumq="${escA(id)}" aria-expanded="false" aria-controls="sx_${escA(id)}">
      <span class="sumk">${ok ? "Right" : "Missed"}</span><span class="sumtxt">
        <span class="sumstem">${n + 1}. ${esc(stem.slice(0, 16).join(" "))}${stem.length > 16 ? " &hellip;" : ""}</span>
        <span class="sumlead">${plain(q.l)}</span>
        <span class="sumpick">You picked <b>${pick != null && q.o[pick] != null ? plain(q.o[pick]) : "nothing"}</b>${ok ? "" : " &middot; the answer is <b>" + plain(q.o[q.a]) + "</b>"}</span></span></button>
      <div class="sumexp" id="sx_${escA(id)}" hidden><p class="sumfull">${fmt(q.s)} <b>${fmt(q.l)}</b></p>
        ${qblHTML(q)}<p>${fmt(q.e)}</p>${etTableHTML(q, null)}${notes ? '<div class="wrongs">' + notes + '</div>' : ""}</div></div>`;
  }).join("");
  return `<div class="toolbar"><span class="tl">${practiceLabel(ps.src)}</span><span style="flex:1"></span></div>
    <div class="qcard setsummary">
      <div class="sumhead" data-verdict><b>Set finished: ${right} of ${ids.length} right (${pct(right, ids.length)}%).</b>
        Open any question to go back over it: the explanation, the table and why each other option is wrong.</div>
      <div class="sumrows">${rows}</div>
      <div class="qfoot"><span style="flex:1"></span><button class="btn pri" data-ps="done">Done &rarr;</button></div></div>`;
}

/* @region engine.set-builder (ENGINE, engine) */
/* =====================================================================
   UNIVERSAL SET BUILDER
   One filter model over all four item kinds. Empty array = no filter,
   which is why "none selected" reads as "everything".
   ===================================================================== */
const BLD_DEF = {practice:{n:20,o:"shuffle"}, rapid:{n:20,o:"shuffle"},
                 spot:{n:0,o:"shuffle"},      drill:{n:0,o:"order"}};
const BLD_STATUS = {
  practice:[["unseen","Never attempted"],["missed","Got wrong"],["ok","Got right"],["due","Due for review"]],
  rapid:[["unseen","Never seen"],["shaky","Not yet solid"],["due","Due now"],["seen","Seen before"]],
  /* P2.4 (F20/F21, reopened): named for the rule bldMatch applies. An image is "unseen" until its
     first answer (right or wrong), so "Never identified" also promised the images missed so far;
     a drill record holds only its last run, so "Had misses" also promised drills since run clean */
  spot:[["unseen","Not tried yet"],["missed","Got wrong"],["ok","Got right"]],
  drill:[["unseen","Not run yet"],["missed","Misses on last run"],["ok","Clean last run"]]};
const BLD_YIELD = [["hi","High yield"],["mid","Middling"],["lo","Lower"]];
const POOLS = {
  practice:{noun:"question", all:()=>QS,    topic:x=>x.c, rec:x=>S.qs[x.id],   diff:x=>x.d||2},
  rapid:   {noun:"rapid pick", all:()=>RAPID, topic:x=>x.c, rec:x=>S.rapid[x.i], diff:()=>2},
  spot:    {noun:"image",    all:()=>Object.keys(IMGS).map(k=>({k:k})), topic:x=>IMGTOPIC[x.k],
            rec:x=>S.spot[x.k], diff:()=>2},
  drill:   {noun:"drill",    all:()=>DRILLS, topic:x=>x.c, rec:x=>S.drills[x.id], diff:()=>2}};
function bld(m){ S.bld = S.bld || {};
  if(!S.bld[m]) S.bld[m] = {t:[], y:[], s:[], n:BLD_DEF[m].n, o:BLD_DEF[m].o};
  return S.bld[m]; }
function bldMatch(m,x){
  const B = bld(m), P = POOLS[m], tid = P.topic(x), T = findT(tid);
  if(B.t.length && B.t.indexOf(tid) < 0) return false;
  if(B.y.length && B.y.indexOf(T ? yv(T) : null) < 0) return false;   /* the chosen yield axis */
  if(!B.s.length) return true;
  const r = P.rec(x), has = k => B.s.indexOf(k) >= 0;
  if(!r) return has("unseen");
  if(has("seen")) return true;
  if(has("due") && isDue(r)) return true;
  if(m==="practice" || m==="spot"){ if(has("missed") && !r.ok) return true; if(has("ok") && r.ok) return true; }
  if(m==="rapid" && has("shaky") && (r.box||0) <= 1) return true;
  if(m==="drill"){ const miss = (r.missed||[]).length;
    if(has("missed") && miss) return true; if(has("ok") && r.done && !miss) return true; }
  return false;
}
function bldPool(m){
  const P = POOLS[m];
  let out = P.all().filter(x => bldMatch(m,x));
  if(S.hiOnly) out = out.filter(x => { const T = findT(P.topic(x)); return !!T && yv(T) === "hi"; });
  return out;
}
/* hardest = what you actually got wrong, then never-seen, then difficulty */
function bldHard(m,x){ const P = POOLS[m], r = P.rec(x);
  if(!r) return 2;
  if((m==="practice"||m==="spot") && !r.ok) return 3;
  if(m==="drill" && (r.missed||[]).length) return 3;
  if(m==="rapid" && (r.box||0) <= 1) return 3;
  return 1; }
function bldOrdered(m){
  const B = bld(m), P = POOLS[m];
  let out = bldPool(m);
  if(B.o === "shuffle") out = shuffle(out);
  else if(B.o === "hard") out = out.slice().sort((a,b) => bldHard(m,b)-bldHard(m,a) || P.diff(b)-P.diff(a));
  if(B.n > 0) out = out.slice(0, B.n);
  return out;
}
function chipRow(m,kind,opts,sel){
  return opts.map(o => '<button class="chip" data-bldc="'+m+':'+kind+':'+o[0]+'" aria-pressed="'
    + (sel.indexOf(o[0])>=0?"true":"false") + '">' + esc(o[1]) + '</button>').join("");
}
function bldHTML(m){
  const B = bld(m), P = POOLS[m], avail = bldPool(m).length, total = P.all().length;
  const take = B.n > 0 ? Math.min(B.n, avail) : avail;
  /* P2.3: "My weak spots" selects the flagged topics only; with none flagged it is disabled
     (it used to select the top five topics by priority, weak or not) */
  const wN = diagnose().filter(e => e.flag).length;
  const short = t => t.length > 24 ? t.slice(0,23)+"…" : t;
  const topicChips = BLOCKS.map(b => '<div class="chiprow" style="margin-bottom:7px">'
    + '<span class="bldgl">'+esc(b.n)+'</span>'
    + b.topics.map(t => '<button class="chip" data-bldc="'+m+':t:'+t.id+'" aria-pressed="'
        + (B.t.indexOf(t.id)>=0?"true":"false") + '" title="'+esc(t.t)+'">'+esc(short(t.t))+'</button>').join("")
    + '</div>').join("");
  const counts = [[1,"1"],[5,"5"],[10,"10"],[20,"20"],[40,"40"],[0,"All"]];
  const orders = [["shuffle","Shuffled"],["order","In order"],["hard","Hardest first"]];
  return '<details class="bldbox"'+(B.open?" open":"")+' data-bldbox="'+m+'">'
   + '<summary>Build your own set'
   + '<span class="bldn">'+avail+' of '+total+' match</span></summary>'
   + '<div class="bldbody">'
   + '<div class="bldrow"><span class="bldl">Topics</span><div style="flex:1;min-width:0">'
   + '<div class="bldsub">Nothing selected means every topic. '+(B.t.length? B.t.length+' selected.' : '')+'</div>'
   + '<div class="chiprow" style="margin-bottom:9px">'
   + '<button class="btn sm gho" data-bldall="'+m+':all">Every topic</button>'
   + '<button class="btn sm gho" data-bldall="'+m+':weak"'+(wN?'':' disabled title="No topic is flagged weak yet"')+'>My weak spots ('+wN+')</button></div>'
   + topicChips + '</div></div>'
   + '<div class="bldrow"><span class="bldl">Yield</span><div class="chiprow">'+chipRow(m,"y",BLD_YIELD,B.y)+'</div></div>'
   + '<div class="bldrow"><span class="bldl">Status</span><div class="chiprow">'+chipRow(m,"s",BLD_STATUS[m],B.s)+'</div></div>'
   + '<div class="bldrow"><span class="bldl">How many</span><div class="chiprow">'
   + counts.map(c => '<button class="chip" data-bldn="'+m+':'+c[0]+'" aria-pressed="'+(B.n===c[0]?"true":"false")+'">'+c[1]+'</button>').join("")
   + '</div></div>'
   + '<div class="bldrow"><span class="bldl">Order</span><div class="chiprow">'
   + orders.map(o => '<button class="chip" data-bldo="'+m+':'+o[0]+'" aria-pressed="'+(B.o===o[0]?"true":"false")+'">'+o[1]+'</button>').join("")
   + '</div></div>'
   + '<div class="bldfoot">'
   + (m==="drill"
      ? '<span class="bldgo">Showing <b>'+take+'</b> '+P.noun+(take===1?"":"s")+' below.</span>'
      : '<button class="btn acc" data-bldgo="'+m+'"'+(take?"":" disabled")+'>'
        + (take ? 'Start '+take+' '+P.noun+(take===1?"":"s") : 'Nothing matches')+'</button>')
   + '<button class="btn sm gho" data-bldreset="'+m+'">Reset filters</button>'
   + (take===0 ? '<span class="bldwarn">Loosen a filter &mdash; nothing matches.</span>' : '')
   + '</div></div></details>';
}
function bldStart(m){
  const items = bldOrdered(m); if(!items.length) return;
  SET_EMPTY = null;
  if(m==="practice"){ S.mode="practice"; S.ps = {set:items.map(x=>x.id), i:0, src:"custom", t0:Date.now()}; }
  else if(m==="rapid"){ S.mode="rapid"; S.rf = {set:items.map(x=>x.i), i:0, t0:Date.now(), src:"custom"}; }
  else if(m==="spot"){ S.mode="spot"; S.sp = {set:items.map(x=>x.k), i:0, src:"custom", name:"Your own set"}; buildSpotOpts(); }
  save(); render(); window.scrollTo({top:0,behavior:"instant"});
}
function wireBld(app){
  app.querySelectorAll("[data-bldbox]").forEach(d => d.ontoggle = ()=>{ bld(d.dataset.bldbox).open = d.open; });
  app.querySelectorAll("[data-bldc]").forEach(b => b.onclick = ()=>{
    const q = b.dataset.bldc.split(":"), B = bld(q[0]);
    const arr = q[1]==="t" ? B.t : q[1]==="y" ? B.y : B.s;
    const i = arr.indexOf(q[2]); if(i>=0) arr.splice(i,1); else arr.push(q[2]);
    save(); render(); });
  app.querySelectorAll("[data-bldn]").forEach(b => b.onclick = ()=>{
    const q = b.dataset.bldn.split(":"); bld(q[0]).n = +q[1]; save(); render(); });
  app.querySelectorAll("[data-bldo]").forEach(b => b.onclick = ()=>{
    const q = b.dataset.bldo.split(":"); bld(q[0]).o = q[1]; save(); render(); });
  app.querySelectorAll("[data-bldall]").forEach(b => b.onclick = ()=>{
    const q = b.dataset.bldall.split(":"), B = bld(q[0]);
    if(q[1]==="all") B.t = [];
    else if(q[1]==="weak"){ const w = diagnose().filter(e=>e.flag).map(e=>e.t.id); if(!w.length) return;
      B.t = w; }
    save(); render(); });
  app.querySelectorAll("[data-bldreset]").forEach(b => b.onclick = ()=>{
    const m = b.dataset.bldreset;
    S.bld[m] = {t:[], y:[], s:[], n:BLD_DEF[m].n, o:BLD_DEF[m].o, open:true};
    save(); render(); });
  app.querySelectorAll("[data-bldgo]").forEach(b => b.onclick = ()=> bldStart(b.dataset.bldgo));
}

/* @region engine.view-practice (LITERALS, engine) */
function viewPractice(){
  /* P5.4: the fatigue line sits ABOVE the toolbar in both states of this view.
     It is the first thing in main, so it never moves and never pushes a stem
     around mid-read, and Next question already scrolls to the top, so it is
     re-read before every new question. On the build-a-set screen it lands right
     next to the buttons that would start another set, which is the moment the
     decision to stop is actually made. */
  const fat = fatigueHTML(sessionFatigue());
  if(!S.ps || !S.ps.set || !S.ps.set.length){
    const ev = diagnose();
    /* P2.3: every button names its own set and shows how many questions it serves (setCount) */
    const psBtn = (k, cls) => '<button class="btn' + cls + '" data-ps="' + k + '">' + esc(psName(k)) + ' ' + setCount("practice", k, ev).txt + '</button>';
    return fat + setEmptyHTML("practice", ev) + yieldBanner("practice") + `<div class="toolbar"><span class="tl">Build a set</span>
        ${psBtn("weak", " acc")}${psBtn("verify", "")}${psBtn("missed", "")}${psBtn("unseen", "")}${psBtn("all", "")}</div>
      ${bldHTML("practice")}
      <div class="panel"><div class="sectiontitle"><h3>Question bank</h3>
        <span class="st2">${QS.length} questions &middot; ${stats().qDone} attempted &middot; ${stats().acc}% correct</span></div>
        <p style="color:var(--ink-2);font-size:15px;line-height:1.6;max-width:62ch">
        Sets are <b>interleaved on purpose</b>. After each answer you mark how sure you were; that is what
        separates a lucky guess from real knowledge in <b>Weak Spots</b>. Miss one and the related rapid items
        are <b>queued automatically</b> for review. The bank mixes concise concept checks with longer,
        multi-step board-style clinical vignettes.</p>
        ${(()=>{ const fl = ev.filter(e=>e.flag), k = fl.filter(e=>hiKeep(e.t.id)).length; if(!fl.length) return "";
          /* P2.V F8 - under "High yield only" the targeted set keeps the high-yield flagged topics only */
          return '<div class="call trap" style="margin-top:22px"><span class="cl">Right now</span>'+fl.length+' topic'+(fl.length===1?" has":"s have")
            +' hard evidence of weakness. '+(!S.hiOnly ? "The targeted set draws from those first."
              : k ? "With High yield only on, the targeted set draws from the "+k+" of them that "+(k===1?"is":"are")+" high yield."
              : "None of them is high yield, so with High yield only on the targeted set has nothing to serve.")+'</div>'; })()}
      </div>`;
  }
  /* P2.3 (K11): a finished set stays on screen as its summary until the student leaves it */
  if(S.ps.done) return fat + setSummaryHTML(S.ps);
  const ps = S.ps, q = QS.find(x=>x.id===ps.set[ps.i]);
  if(!q){ S.ps = null; return viewPractice(); }
  const rec = S.qs[q.id], answered = !!ps.shown, t = findT(q.c) || {t:"", blk:{n:""}}, N = ps.set.length;
  /* Seed on the serve count as it was when the question was PRESENTED.
     Answering increments rec.n, so re-seeding here reshuffled all five
     options under the reader at the exact moment they were trying to see
     what they got wrong -- and moved the answer to a different letter than
     the one they had just been choosing between. */
  const ord = viewOrder(q, Math.max(0, ((rec && rec.n) || 0) - (answered ? 1 : 0)));
  const slot = {}; ord.forEach((orig, pos) => slot[orig] = pos);
  /* P2.3 (K7, K17): answered options used to be disabled, so a student could never ask
     why a distractor was wrong. Now each wrong option keeps data-why and toggles its own
     .optwhy directly under it (q.w follows the load permutation, so orig indexes it); the
     option actually picked opens at once; open state lives in ps.open so a re-render keeps
     it. The keyed option is aria-disabled instead of disabled. Same pattern as rapid. */
  const opts = ord.map((orig, pos)=>{
    let cls = "qopt";
    if(answered){ if(orig===q.a) cls += " right"; else if(orig===ps.pick) cls += " wrong"; else cls += " dim"; }
    const why = answered && orig!==q.a && q.w && q.w[orig]!==undefined ? q.w[orig] : "";
    const open = !!why && (ps.open && (orig in ps.open) ? !!ps.open[orig] : orig===ps.pick);
    const attrs = !answered ? "" : why ? ` data-why="${orig}" aria-expanded="${open}" aria-controls="qw${orig}"` : ` aria-disabled="true"`;
    return `<div class="qow${answered&&orig===ps.pick&&orig!==q.a?" picked":""}"><button class="${cls}" data-opt="${orig}"${attrs}>
      <span class="ol">${"ABCDE"[pos]}</span><span>${fmt(q.o[orig])}</span>${why?'<span class="rfwh" aria-hidden="true">why not</span>':""}</button>${why
      ?`<div class="optwhy" id="qw${orig}"${open?"":" hidden"}><b>${orig===ps.pick?"Your pick &mdash; why it is wrong:":"Why not "+"ABCDE"[pos]+":"}</b> ${fmt(why)}</div>`:""}</div>`; }).join("");
  const wrongs = answered ? q.o.map((o,k)=>({o,k})).filter(x=>x.k!==q.a)
    .sort((a,b)=>slot[a.k]-slot[b.k])
    .map(x=>'<div><b>'+"ABCDE"[slot[x.k]]+'</b> &mdash; '+fmt(q.w&&q.w[x.k]!==undefined?q.w[x.k]:
      'This choice does not account for the stem\'s decisive pattern. Contrast it with <b>'+q.o[q.a]+'</b> and re-check the visual summary below.')+'</div>').join("") : "";
  /* P2.V F8 follow-up - the number wirePractice queued on this miss (ps.linkQ), not every rapid item on the topic */
  const lq = answered && ps.pick !== q.a && ps.linkQ && ps.linkQ.id === q.id ? ps.linkQ : null, justLinked = lq ? lq.n : 0;
  const vis = q.ef && FIGS[q.ef] ? {fig:q.ef} : (q.ei && IMGS[q.ei] ? {img:q.ei} : null);
  return fat + `<div class="toolbar">
      <span class="tl">${practiceLabel(ps.src)}</span>
      <span class="mono" style="font-size:12px;color:var(--ink-3)">${ps.i+1} / ${N}</span>
      <span style="flex:1"></span>
      ${flagCtrl("q", q.id)}
      <button class="btn sm gho" data-ps="quit">End set</button></div>
    <div class="qcard">
      <div class="qtop"><span class="qn">${esc(t.blk.n)} &middot; ${esc(t.t)}</span>
        <span class="qsp"><span class="tag ghost">difficulty ${q.d||2}/3</span>
        <span class="tag ${yv(t)}" title="Yield for ${YAXES[yAxis()]}">${({hi:"high yield",mid:"mid",lo:"low"})[yv(t)]}</span></span></div>
      <div class="qstem">${fmt(q.s)}<div class="lead">${fmt(q.l)}</div></div>
      <div class="qopts">${opts}</div>
      ${answered && rec && rec.conf==="sure" && !rec.ok ? `<div class="hypercorr">
        <b>You were sure, and you were wrong.</b> That is the single most useful moment in
        this whole tool &mdash; a confident error is the kind most likely to survive to exam
        day, and also the kind most likely to be permanently corrected once you notice it.
        Read the explanation below slowly, and say the correct rule out loud before moving on.</div>` : ""}
      ${answered && rec && rec.conf==="guess" && rec.ok ? `<div class="hypercorr lucky">
        <b>Right, but you called it a guess.</b> This is logged as unproven and will come back,
        because a lucky answer looks identical to knowledge in every score except this one.</div>` : ""}
      <!-- P1.3: data-verdict hands this panel to announceFeedback, and the label now always
           carries both halves - the verdict and which option won. A wrong answer used to be
           labelled "Why the answer is B" with no word for wrong, and a right one named no
           letter at all, so neither read as a result when spoken away from the colours. -->
      <!-- P2.3 (K8-K10): the bottom line leads the explanation, the comparison table follows it
           in the order the options are on screen with the keyed row marked, and the old list of
           notes waits under a disclosure (each note is also one click away on its option). The
           question's own visual opens expanded with the say-line above it and q.pt.hl marked. -->
      ${answered?`<div class="qexp" data-verdict><span class="vt">${ps.pick===q.a?"Correct":"Not quite"} &mdash; why the answer is ${"ABCDE"[slot[q.a]]}</span>
        ${qblHTML(q)}
        <p>${fmt(q.e)}</p>
        ${etTableHTML(q, slot)}
        ${wrongs?'<details class="wrongs"><summary>Why each other option is wrong</summary>'+wrongs+'</details>':''}</div>
        ${vis ? deepReviewHTML(q.c,"Why this answer fits &mdash; see it drawn out",vis,{open:true, say:q.pt&&q.pt.say, hl:q.pt&&q.pt.hl, sayCls:"qsay"})
          : deepReviewHTML(q.c,"Open visual comparison and the full lesson")}
        ${vis && vis.fig && q.ei && IMGS[q.ei] ? '<div style="padding:0 26px 8px">'+imgHTML(q.ei)+'</div>' : ""}
        ${justLinked?`<div class="linked"><span><b>Queued for review:</b> ${justLinked} rapid item${justLinked>1?"s":""} on
          <b>${esc(t.t)}</b> ${lq.fresh === lq.n ? "added to your linked queue"
            : lq.fresh ? "in your linked queue ("+lq.fresh+" newly added, "+(lq.n-lq.fresh)+" already there)"
            : (lq.n === 1 ? "was" : "were")+" already in your linked queue"}, ${/* P2.V F8 - the Linked queue set keeps high-yield topics only under the filter */
          S.hiOnly && !hiKeep(q.c) ? "but this topic is not high yield, so the queue holds them back until High yield only is turned off."
          : "so this gap comes back before you forget it."}</span></div>`:""}`:""}
      <div class="qfoot">
        ${!answered?`<div class="conf"><span class="cl2">How sure are you?</span>
          <button class="chip${ps.conf==="sure"?" on":""}" data-conf="sure" aria-pressed="${ps.conf==="sure"}">Sure</button>
          <button class="chip${ps.conf==="think"?" on":""}" data-conf="think" aria-pressed="${ps.conf==="think"}">Fairly sure</button>
          <button class="chip${ps.conf==="guess"?" on":""}" data-conf="guess" aria-pressed="${ps.conf==="guess"}">Guessing</button></div>
          <span style="flex:1"></span>
          <span class="pace" id="pace" title="${escA(examNameCap()+" gives you about "+SECS_PER_Q+" seconds a question")}">&mdash;</span>
          <span class="mono" id="confhint" style="font-size:11.5px;color:var(--ink-3)">${
            !ps.conf ? "Say how sure you are first" : ps.confKept ? "Same as the last question &mdash; change it if this one feels different" : "Now pick an answer above"}</span>`
        :`<span class="mono" style="font-size:11.5px;color:var(--ink-3)">${rec&&rec.conf?"Marked: "+({sure:"Sure", think:"Fairly sure", guess:"Guessing"}[rec.conf] || esc(rec.conf)):""}</span>
          <span style="flex:1"></span>
          <button class="btn ${ps.i+1<N?"pri":"acc"}" id="qnext">${ps.i+1<N?"Next question &rarr;":"Finish set &rarr;"}</button>`}
      </div></div>`;
}

/* @region engine.view-drills (LITERALS, engine) */
/* =====================================================================
   VIEW: DRILLS
   ===================================================================== */
/* P2.4 (F21, reopened): one line per drill kind, for every place that offers a drill (the list,
   the plan's drill row, search), so each describes the drill its button starts */
function drillKindLine(d){
  return d.kind==="order" ? "Build the chain in order"
    : d.kind==="multi" ? "Sort across "+(d.cols||[]).length+" related conditions" : "Sort each finding to the right side";
}
function viewDrill(){
  if(!S.dr){
    return `${yieldBanner("drill")}<div class="sectiontitle"><h3>Discrimination drills</h3>
      <span class="st2">Separate two-way look-alikes and larger families of related conditions by their decisive clues.</span></div>
      ${bldHTML("drill")}
      <div class="wlist">${bldOrdered("drill").map(d=>{
        const r = S.drills[d.id]||{}, n = (r.missed||[]).length;
        return `<button class="witem" data-dr="${d.id}" style="text-align:left;width:100%">
          <span><span class="wt">${esc(d.t)}</span><span class="wd">${drillKindLine(d)} &middot; ${(d.items||[]).length} items${r.done?" &middot; last run: "+(d.items.length-n)+"/"+d.items.length:""}</span></span>
          <span class="sev"><i style="width:${r.done?Math.round(100*(d.items.length-n)/d.items.length):0}%;background:${n>2?"var(--crit)":"var(--good)"}"></i></span>
        </button>`; }).join("") || '<div class="empty">No drill matches those filters.</div>'}</div>`;
  }
  const d = DRILLS.find(x=>x.id===S.dr.id); if(!d){ S.dr=null; return viewDrill(); }
  return d.kind==="order" ? orderDrillHTML(d) : d.kind==="multi" ? multiDrillHTML(d) : sortDrillHTML(d);
}
/* P2.4 (K13): on a drill's end screen every item (sort and multi columns, the missed list,
   the placed steps of an order drill) is a [data-dwhy] toggle for its own DRILL_WHY note,
   an .optwhy directly under it. slot keeps the ids unique when an item is listed twice;
   S.dr.open keeps the state across renders; startDrill starts closed. An item with no
   note stays plain text. */
function drillWhyText(d, ix){
  const it = d.items[ix]; return (DRILL_WHY[d.id]||{})[d.kind==="order" ? it : it[0]] || "";
}
function drillWhyBtn(d, ix, slot, cls, inner, lead){
  const why = drillWhyText(d, ix), id = "dw_"+slot+ix;
  if(!why) return `<div class="dwrow"><div class="${cls||"dwbtn"}">${inner}</div></div>`;
  const open = !!(S.dr && S.dr.open && S.dr.open[id]);
  return `<div class="dwrow"><button class="${cls||"dwbtn"}" data-dwhy="${ix}" aria-expanded="${open}" aria-controls="${id}">${inner}<span class="rfwh" aria-hidden="true">why</span></button>`
    + `<div class="optwhy" id="${id}"${open?"":" hidden"}>${lead||""}${fmt(why)}</div></div>`;
}
/* flips the note a toggle controls, in place (no render, no scroll jump) */
function toggleCtlWhy(b){
  const w = b && document.getElementById(b.getAttribute("aria-controls")||""); if(!w) return null;
  const open = w.hidden; w.hidden = !open; b.setAttribute("aria-expanded", String(open));
  return w;
}
function drToggleWhy(b){
  const w = toggleCtlWhy(b);
  if(w && S.dr) (S.dr.open = S.dr.open || {})[w.id] = !w.hidden;
}
/* P2.V F21: a sort or multi pick used to move straight on, so its verdict was drawn under the
   NEXT item and read as a claim about it ("Mid-cycle pain" above "This belongs to Luteal").
   Now a pick keeps its item on screen: the sides come back disabled with the pick and the right
   side marked, the verdict under them names the item, and the next item appears only when the
   student presses Next. drJudged gives the item that verdict is about (st.last.ix; order[i-1]
   for a verdict saved before this change), or -1 while an item waits for its answer. */
function drJudged(d, st){
  if(!d || !st || !st.last || !Array.isArray(st.order) || !(st.i >= 1 && st.i <= st.order.length)) return -1;
  const ix = st.last.ix;
  return Number.isInteger(ix) && ix >= 0 && ix < d.items.length ? ix : st.order[st.i - 1];
}
/* one side of the running board: a live button (attr = data-sort / data-sortm), or, once the
   item is answered, a disabled one that says in words whether it was the pick and the right side */
function drSideBtn(attr, val, label, last, right){
  if(!last) return `<button class="btn" ${attr}="${escA(val)}">${label}</button>`;
  const pick = last.pick === val, ok = val === right;
  const note = pick && ok ? "your pick, right" : pick ? "your pick" : ok ? "right answer" : "";
  return `<button class="btn${ok ? " dright" : pick ? " dwrong" : ""}" disabled>${label}${note ? '<span class="dres">' + note + "</span>" : ""}</button>`;
}
/* the verdict for the item on screen, then Next (or the results after the last item) */
function drVerdictHTML(d, st, noLabel){
  const last = st.i >= st.order.length;
  return `<div class="call ${st.last.ok?"mnem":"trap"}" data-verdict style="margin-top:18px"><span class="cl">${st.last.ok?"Correct":noLabel}</span>${fmt(st.last.msg||"")}</div>
    <div class="btnrow"><button class="btn pri" id="drnext">${last ? "See the results" : "Next item"}</button></div>
    ${deepReviewHTML(d.c,"Refresher: "+((findT(d.c)||{}).t||"this topic"))}`;
}
/* P2.V K13: the column count rides in --dcols (not an inline grid-template-columns), so the
   .dmulti rule in the shell can drop the end screen and the board to one column on a phone */
function multiDrillHTML(d){
  const st=S.dr, items=st.order||[], i=st.i||0;
  if(i>=items.length && drJudged(d,st)<0){
    const missed=st.missed||[];
    /* P2.V F31: the end screen replaced the last item's verdict and said nothing to #live; its score is the verdict now, and its heading takes focus */
    return `<div class="panel"><div class="sectiontitle"><h3 data-viewlead>${esc(d.t)}</h3><span class="st2" data-verdict>${items.length-missed.length} of ${items.length} correct</span></div>
      <div class="dkey"><b>Sorting rule:</b> ${fmt(d.key)}</div>
      <div class="disc dmulti" style="--dcols:${Math.min(3,d.cols.length)}">${d.cols.map(c=>`<div class="disccol"><h5>${esc(c.l)}</h5><ul>${d.items.map((x,ix)=>x[1]===c.id?`<li>${drillWhyBtn(d,ix,"c","",`<span>${fmt(x[0])}</span>`)}</li>`:"").join("")}</ul></div>`).join("")}</div>
      ${missed.length?`<div class="call trap dmiss"><span class="cl">Review these</span>${missed.map(ix=>drillWhyBtn(d,ix,"m","",`<span>&bull; ${fmt(d.items[ix][0])} &rarr; <b>${esc((d.cols.find(c=>c.id===d.items[ix][1])||{}).l||"")}</b></span>`)).join("")}</div>`:'<div class="call mnem"><span class="cl">Clean run</span>Every discriminator landed correctly.</div>'}
      ${deepReviewHTML(d.c,"Open the visual comparison and complete lesson")}
      <div class="btnrow"><button class="btn pri" data-dr="__again">Run it again</button><button class="btn" data-dr="__quit">Back to drills</button></div></div>`;
  }
  /* P2.V F21: an answered item stays on screen with its verdict until Next (drJudged) */
  const jx=drJudged(d,st), ix=jx>=0?jx:items[i], it=d.items[ix];
  return `<div class="toolbar"><span class="tl">${esc(d.t)}</span><span class="mono">${jx>=0?i:i+1} / ${items.length}</span><span style="flex:1"></span>${flagCtrl("drill", d.id+"#"+ix)}<button class="btn sm gho" data-dr="__quit">End drill</button></div>
    <div class="panel" style="max-width:820px;margin:0 auto">${it[2]&&IMGS[it[2]]?`<div class="imgbox" style="max-height:330px;display:flex;align-items:center;justify-content:center;margin-bottom:15px"><img src="${IMGS[it[2]].url}" alt="${escA(IMGS[it[2]].n||"Image to classify")}" style="max-height:330px;width:auto;max-width:100%"></div>`:""}<div class="sortitem">${fmt(it[0])}</div>
      <div class="sortbtns dmulti" style="--dcols:${Math.min(3,d.cols.length)}">${d.cols.map(c=>drSideBtn("data-sortm", c.id, esc(c.l), jx>=0?st.last:null, it[1])).join("")}</div>
      <!-- P1.3: the sort result was silent - a reader tapped a side and heard nothing.
           data-verdict sends this line to the live region. -->
      ${jx>=0?drVerdictHTML(d,st,"Not this one"):""}</div>`;
}
function sortDrillHTML(d){
  const st = S.dr, i = st.i, items = st.order;
  if(i >= items.length && drJudged(d, st) < 0){
    const missed = st.missed || [];
    return `<div class="panel"><div class="sectiontitle"><h3 data-viewlead>${esc(d.t)}</h3>
        <span class="st2" data-verdict>${items.length-missed.length} of ${items.length} sorted correctly</span></div>
      <div class="dkey"><b>The one discriminator:</b> ${fmt(d.key)}</div>
      ${missed.length?`<div class="call trap dmiss"><span class="cl">You put these on the wrong side</span>
        ${missed.map(ix=>drillWhyBtn(d,ix,"m","","<span>&bull; "+esc(d.items[ix][0])+" &mdash; belongs to <b>"+
          (d.items[ix][1]==="a"?esc(d.a):esc(d.bb))+"</b></span>")).join("")}</div>`:
        '<div class="call mnem"><span class="cl">Clean run</span>Every item sorted correctly.</div>'}
      ${deepReviewHTML(d.c,"Open the visual comparison and complete lesson")}
      <div class="disc">
        <div class="disccol a"><h5>${esc(d.a)}</h5><div class="dsub">side A</div>
          <ul>${d.items.map((x,ix)=>x[1]==="a"?"<li>"+drillWhyBtn(d,ix,"c","","<span>"+fmt(x[0])+"</span>")+"</li>":"").join("")}</ul></div>
        <div class="disccol b"><h5>${esc(d.bb)}</h5><div class="dsub">side B</div>
          <ul>${d.items.map((x,ix)=>x[1]==="b"?"<li>"+drillWhyBtn(d,ix,"c","","<span>"+fmt(x[0])+"</span>")+"</li>":"").join("")}</ul></div></div>
      <div class="btnrow"><button class="btn pri" data-dr="__again">Run it again</button>
        <button class="btn" data-dr="__quit">Back to drills</button></div></div>`;
  }
  /* P2.V F21: an answered item stays on screen with its verdict until Next (drJudged) */
  const jx = drJudged(d, st), ix = jx >= 0 ? jx : items[i], it = d.items[ix], last = jx >= 0 ? st.last : null;
  return `<div class="toolbar"><span class="tl">${esc(d.t)}</span>
      <span class="mono" style="font-size:12px;color:var(--ink-3)">${jx >= 0 ? i : i+1} / ${items.length}</span>
      <span style="flex:1"></span>${flagCtrl("drill", d.id+"#"+ix)}<button class="btn sm gho" data-dr="__quit">End drill</button></div>
    <div class="panel" style="max-width:660px;margin:0 auto">
      <div class="sortitem">${fmt(it[0])}</div>
      <div class="sortbtns">
        ${drSideBtn("data-sort", "a", esc(d.a), last, it[1])}
        ${drSideBtn("data-sort", "b", esc(d.bb), last, it[1])}</div>
      <!-- P1.3: same silent feedback in the two-way sort; marked for the live region. -->
      ${jx >= 0 ? drVerdictHTML(d, st, "No") : ""}
    </div>`;
}
function orderDrillHTML(d){
  const st = S.dr, placed = st.placed || [], checked = st.checked, pool = st.pool || [];
  return `<div class="toolbar"><span class="tl">${esc(d.t)}</span>
      <span style="flex:1"></span>${flagCtrl("drill", d.id)}<button class="btn sm gho" data-dr="__quit">End drill</button></div>
    <div class="panel">
      <p data-viewlead style="font-size:15px;color:var(--ink-2);line-height:1.6;max-width:62ch;margin-bottom:6px">${fmt(d.q)}</p>
      <div class="orderwrap">
        <div class="ordercol"><h6>Steps, out of order</h6>
          <div class="orderpool">${pool.length?pool.map(ix=>
            `<button class="oitem" data-op="${ix}"${checked?" disabled":""}><span class="on">&plus;</span><span>${fmt(d.items[ix])}</span></button>`).join("")
            :'<span style="font-size:13.5px;color:var(--ink-3);padding:6px">All placed.</span>'}</div></div>
        <div class="ordercol"><h6>Your sequence</h6>
          <div class="ordertgt">${placed.length?placed.map((ix,n)=>{
            /* P2.4 (K13): once checked, each placed step is a [data-dwhy] toggle for why it sits
               where it does; a misplaced step also says which position it belongs in. */
            if(checked) return drillWhyBtn(d, ix, "o", "oitem"+(ix===n?" right":" wrong"),
              `<span class="on">${n+1}</span><span>${fmt(d.items[ix])}</span>`, ix===n ? "" : `<b>This belongs at step ${ix+1}; you placed it at ${n+1}.</b> `);
            return `<button class="oitem" data-ounp="${n}"><span class="on">${n+1}</span><span>${fmt(d.items[ix])}</span></button>`;}).join("")
            :'<span style="font-size:13.5px;color:var(--ink-3);padding:6px">Tap steps on the left, in order.</span>'}</div></div>
      </div>
      <!-- P1.3: the order drill verdict was silent for the same reason as the sorts.
           P2.V F21: it now names every step that is out of place and where it belongs (the
           steps themselves said so only by color), and it sits right under the board it judges,
           above the buttons. -->
      ${checked?`<div class="call ${st.perfect?"mnem":"trap"}" data-verdict id="ordverdict" tabindex="-1" style="margin-top:18px">
        <span class="cl">${st.perfect?"Exactly right":"Not the real order"}</span>${orderVerdictText(d, placed)} ${fmt(d.key)}</div>`:""}
      <div class="btnrow" style="margin-top:18px">
        ${checked?`<button class="btn pri" data-dr="__again">Try again</button>
                   <button class="btn" data-dr="__quit">Back to drills</button>`
                 :`<button class="btn acc" id="ocheck"${placed.length!==d.items.length?" disabled":""}>Check the sequence</button>`}
      </div>
    </div>`;
}
function orderVerdictText(d, placed){
  const off = placed.map((ix, n) => ix === n ? null : [ix, n]).filter(Boolean);
  if(!off.length) return `All ${placed.length} steps are in order.`;
  return `${off.length} of ${placed.length} steps are out of place: `
    + off.map(([ix, n]) => `&ldquo;${fmt(d.items[ix])}&rdquo; belongs at step ${ix+1}, not ${n+1}`).join("; ") + ".";
}

/* @region engine.view-rapid-banner (ENGINE, engine) */
/* =====================================================================
   VIEW: RAPID
   ===================================================================== */
/* @region content.tag-labels (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.view-rapid (LITERALS, engine) */
function rfCatHTML(r){
  const t = r && r.tags && r.tags[0], l = t && TAG_LABELS[t];
  return l ? '<span class="rfcat" data-sayend="1" title="The kind of fact this item tests">'+esc(l)+'</span> ' : "";
}
function viewRapid(){
  /* P5.4: same line, same place, one shared signal. Rapid answers and practice
     answers are counted into the same sitting, so a student who has been
     alternating between the two sees the same sentence whichever surface they
     are on rather than two half-counts that never reach the threshold. */
  const fat = fatigueHTML(sessionFatigue());
  if(!S.rf || !S.rf.set || !S.rf.set.length){
    /* P2.3: each count is the set that button serves (setCount): "Due now" counted this block's
       due items but served the hub's (every block); "All N" served 40; weak fell back to due */
    /* P2.V F8 - the Linked queue button shows when its set has something to serve (the filter can empty it) */
    const ev = diagnose(), linkedN = rapidPool("linked").length, rc = k => setCount("rapid", k, ev);
    return fat + setEmptyHTML("rapid", ev) + yieldBanner("rapid") + `<div class="toolbar"><span class="tl">Rapid picks</span>
        ${linkedN?'<button class="btn acc" data-rf="linked">Linked queue '+rc("linked").txt+'</button>':''}
        <button class="btn${linkedN?"":" acc"}" data-rf="due">Due now ${rc("due").txt}</button>
        <button class="btn" data-rf="weak">From my weak spots ${rc("weak").txt}</button>
        <button class="btn" data-rf="all">All ${rc("all").n}${S.hiOnly ? " high-yield" : ""}, shuffled</button></div>
      ${bldHTML("rapid")}
      <div class="panel"><div class="sectiontitle"><h3>Rapid picks</h3><span class="st2">One line, five options, fast retrieval.</span></div>
      <p style="color:var(--ink-2);font-size:15px;line-height:1.6;max-width:62ch">These are not flashcards &mdash; you
      never grade yourself. Each is a forced choice with plausible decoys, so a miss is objective evidence.
      The <b>linked queue</b> fills automatically whenever you miss a Practice question on the same concept.</p></div>`;
  }
  const rf = S.rf, r = rItem(rf.set[rf.i]), N = rf.set.length, shown = rf.pick != null;
  /* P2.V F28/N6 - an item from another block's hub came up with nothing to say where it was from */
  const from = RBYID[rf.set[rf.i]] ? "" : " &middot; from " + esc(r.bn || r.b || "another block") + (r.ct ? ": " + esc(stripTags(String(r.ct))) : "");
  return fat + `<div class="rf">
    <div class="rfmeta"><span class="mono" style="font-size:12px;color:var(--ink-3)">${rf.i+1} / ${N}${rf.src==="linked"?" &middot; linked review":""}${rf.src==="diag" && S.hiOnly ? " &middot; diagnostic: whole block, not filtered" : ""}${from}</span>
      ${flagCtrl("rapid", r.i)}
      <button class="btn sm gho" data-rf="quit">End</button></div>
    <div class="rfcard">
      <div class="rfq">${fmt(r.q)}</div>
      <!-- P1.7: answered options used to be disabled, so a student could never ask why a
           decoy was wrong. Now each wrong option keeps data-why and toggles its own
           .optwhy (r.w is keyed by option text, so the permutation cannot misalign it);
           the option actually picked opens at once; open state lives in rf.open so a
           re-render keeps it. The keyed option is aria-disabled instead of disabled. -->
      <div class="rfopts">${r.o.map((o,i)=>{
        let cls="rfopt"; if(shown){ if(i===r.a) cls+=" right"; else if(i===rf.pick) cls+=" wrong"; else cls+=" dim"; }
        const why = shown && i!==r.a && r.w ? (r.w[o]||"") : "";
        const open = !!why && (rf.open && (i in rf.open) ? !!rf.open[i] : i===rf.pick);
        const attrs = !shown ? "" : why ? ` data-why="${i}" aria-expanded="${open}" aria-controls="rfw${i}"` : ` aria-disabled="true"`;
        return `<div class="rfow${shown&&i===rf.pick&&i!==r.a?" picked":""}"><button class="${cls}" data-rfo="${i}"${attrs}>
          <span class="ol">${"ABCDE"[i]}</span><span>${fmt(o)}</span>${why?'<span class="rfwh" aria-hidden="true">why not</span>':""}</button>${why
          ?`<div class="optwhy" id="rfw${i}"${open?"":" hidden"}><b>${i===rf.pick?"Your pick &mdash; why it is wrong:":"Why not "+"ABCDE"[i]+":"}</b> ${fmt(why)}</div>`:""}</div>`;}).join("")}</div>
      ${shown?"":'<p class="rfhint">Keys 1&ndash;5 answer &middot; Enter goes to the next item</p>'}
      <!-- P1.3: the rapid verdict and its one-line explanation, marked so it is announced. -->
      <!-- P2.V F31 (reopened): a wrong pick said only "Correct: <answer>", so #live never told a listener the pick
           was wrong; the verdict now leads with "Wrong: <pick>." the way practice leads with "Not quite". -->
      ${shown ? '<div class="rfx'+(rf.pick !== r.a ? " miss" : "")+'" data-verdict>'+rfCatHTML(r)
        +(rf.pick !== r.a ? '<b class="rfmiss">Wrong: '+fmt(r.o[rf.pick])+(/[.!?]$/.test(stripTags(String(r.o[rf.pick])).trim()) ? "" : ".")+'</b> ' : "")
        +'<b>Correct: '+fmt(r.o[r.a])+'</b><br>'+(r.x ? fmt(r.x) : "The keyed pairing is the one to retrieve automatically.")+'</div>'
        +(rapidMedia(r)
           /* P1.8: pinned figure opens expanded, with the say-line above it and r.pt.hl marked */
           ? deepReviewHTML(r.c,"Why this answer fits — see it drawn out",rapidMedia(r),
               {open:true, say:r.pt&&r.pt.say, hl:r.pt&&r.pt.hl})
           : deepReviewHTML(r.c,"Refresher: "+((findT(r.c)||{}).t||"this topic"),null)) : ""}
      ${shown?`<div class="btnrow" style="margin-top:18px;justify-content:flex-end">
        <button class="btn acc" id="rfnext">${rf.i+1<N?"Next &rarr;":"Finish &rarr;"}</button></div>`:""}
      <div class="rfbar"><i style="width:${Math.round(100*(rf.i+(shown?1:0))/N)}%"></i></div>
    </div></div>`;
}

/* @region engine.view-spot (LITERALS, engine) */
/* =====================================================================
   VIEW: IMAGES
   ===================================================================== */
function viewSpot(){
  if(!S.sp){
    /* P2.4 (F20, reopened): each button names its set and shows how many images it serves
       (setCount over spotPool, the pool startSpot serves); an empty set says so (setEmptyHTML) */
    const spBtn = (k, cls) => '<button class="btn' + cls + '" data-sp="' + k + '">' + esc(spName(k)) + ' ' + setCount("spot", k).txt + '</button>';
    return setEmptyHTML("spot") + yieldBanner("spot") + `<div class="toolbar"><span class="tl">Image recognition</span>
        ${spBtn("all", " acc")}${spBtn("unseen", "")}</div>
      ${bldHTML("spot")}
      <div class="panel"><div class="sectiontitle"><h3>Images</h3>
        <span class="st2">Name it first from the raw image, then study the markup.</span></div>
      <p style="color:var(--ink-2);font-size:15px;line-height:1.6;max-width:62ch">
      Every image is shown clean first. You commit to a diagnosis, and only then does the markup appear with
      numbered features and a legend explaining exactly what you were supposed to notice.</p></div>`;
  }
  const sp = S.sp, k = sp.set[sp.i], im = IMGS[k], N = sp.set.length, shown = sp.pick != null;
  const opts = sp.opts || [];
  /* P2.4 (K12, K17): answered options used to be disabled and only the picked label got a
     note (in the verdict). Now every wrong option keeps data-why and toggles its own .optwhy
     directly under it; the note is looked up by label text because sp.opts is shuffled at
     presentation. The picked one opens at once; sp.open keeps the state across renders; the
     keyed option is aria-disabled instead of disabled. Same pattern as rapid and practice. */
  /* P2.4 (F20, reopened): a running set keeps its button's name, as practice does (P2.3) */
  return `<div class="toolbar"><span class="tl">${sp.name ? esc(sp.name) + " &middot; " : ""}Image ${sp.i+1} of ${N}</span>
      <span style="flex:1"></span>${flagCtrl("img", k)}<button class="btn sm gho" data-sp="quit">End</button></div>
    <div class="qcard">
      ${shown ? "" : `<div class="imgbox" style="max-height:460px;display:flex;align-items:center;justify-content:center">
        <img src="${im.url}" alt="unknown image" style="max-height:460px;width:auto;max-width:100%"></div>`}
      <div class="qstem" style="padding-top:20px">${shown?"":"<b>What is this?</b>"}</div>
      <div class="qopts">${opts.map((o,i)=>{
        let cls="qopt"; if(shown){ if(o===im.dx) cls+=" right"; else if(i===sp.pick) cls+=" wrong"; else cls+=" dim"; }
        const L = String.fromCharCode(65+i), why = shown && o!==im.dx && im.ww ? (im.ww[o]||"") : "";
        const open = !!why && (sp.open && (i in sp.open) ? !!sp.open[i] : i===sp.pick);
        const attrs = !shown ? "" : why ? ` data-why="${i}" aria-expanded="${open}" aria-controls="spw${i}"` : ` aria-disabled="true"`;
        return `<div class="qow${shown&&i===sp.pick&&o!==im.dx?" picked":""}"><button class="${cls}" data-spo="${i}"${attrs}>
          <span class="ol">${L}</span><span>${esc(o)}</span>${why?'<span class="rfwh" aria-hidden="true">why not</span>':""}</button>${why
          ?`<div class="optwhy" id="spw${i}"${open?"":" hidden"}><b>${i===sp.pick?"Your pick &mdash; why it is wrong:":"Why not "+L+":"}</b> ${why}</div>`:""}</div>`;}).join("")}</div>
      ${shown?"":'<p class="rfhint" style="padding:0 26px 14px">Keys A&ndash;E or 1&ndash;5 answer &middot; Enter goes to the next image</p>'}
      <!-- P1.3: the result was carried by button colour alone, so the diagnosis was never
           spoken and never read by anyone who cannot see the highlight. This states it in
           words and, through data-verdict, sends it to the live region. -->
      ${shown?`<div class="qexp" data-verdict><span class="vt">${opts[sp.pick]===im.dx?"Correct":"Not this one"}</span>
        <p>This image shows <b>${esc(im.dx)}</b>.</p></div>
        <div style="padding:0 26px 8px">${imgHTML(k)}</div>
        <div class="qfoot"><span style="flex:1"></span>
        <button class="btn acc" id="spnext">${sp.i+1<N?"Next image &rarr;":"Finish &rarr;"}</button></div>`:""}
    </div>`;
}
function buildSpotOpts(){
  const sp = S.sp, im = IMGS[sp.set[sp.i]];
  /* P2.2 (R12) - every wrong label the image carries, not the first three */
  sp.opts = shuffle([im.dx].concat(im.wrong||[]));
}

/* @region engine.view-weak (LITERALS, engine) */
/* =====================================================================
   VIEW: WEAK SPOTS
   ===================================================================== */
function viewWeak(){
  const ev = diagnose(), flags = ev.filter(e=>e.flag), blind = ev.filter(e=>!e.flag && e.known<0.15);
  const conf = confusions(), cal = calibration(), st = stats();
  /* P2.2 (R24) - the "too fast" range is measured from this bank's stems, not quoted */
  const et = errorTypes(conf), fastRange = QS.length
    ? Math.round(et.floorLo/1000)+" to "+Math.round(et.floorHi/1000)+" s, depending on its length" : "a floor scaled to its length";
  /* P3.4: one signal is a suspicion, two or more independent signals is a verdict.
     Proven topics come first everywhere on this page and are what the 30-minute
     set is built from, so "worth an hour now" is visible without reading a
     single reason line. */
  const pWeak = flags.filter(e=>e.evidence>=2), sWeak = flags.filter(e=>e.evidence===1);
  const ranked = pWeak.concat(sWeak);
  const rx = ranked.length ? ranked.slice(0,5) : ev.slice(0,4);
  /* P2.V F25 sweep: the button's count is the set startSet("weak") builds - unanswered or
     wrong questions on EVERY flagged topic, at most 20 - not a flat 20 when there are none,
     and the rapid button only shows when those topics have rapid items to serve.
     P2.3: both counts now come from the pools startSet / startRapid serve (setCount), and with
     nothing left to target the button is the whole bank, shuffled, labelled as such. */
  const rxQ = setCount("practice", "weak", ev), rxR = setCount("rapid", "weak", ev), rxAll = setCount("practice", "all", ev);
  /* "because nothing has been answered wrongly yet" was printed whenever no topic was
     flagged, including after misses that had not tripped a signal (pretest, self-explanation
     and recall-grid misses are answers too) */
  const anyMiss = QS.some(q => { const a = S.qs[q.id]; return !!a && (!a.ok || (a.hist||[]).some(h => h && !h.ok)); })
    || RAPID.some(r => ((S.rapid[r.i]||{}).miss||0) > 0) || DRILLS.some(d => ((S.drills[d.id]||{}).missed||[]).length > 0)
    || Object.keys(S.spot).some(k => S.spot[k] && S.spot[k].ok === false)
    || Object.keys(S.pre||{}).some(k => S.pre[k] && Array.isArray(S.pre[k].ok) && S.pre[k].ok.some(x => x === false))
    || ALLT().some(t => { const g = (S.topics[t.id]||{}).grid; return (g != null && g < 1)
      || (t.body||[]).some(r => r && r[0] === "sexp" && r[1] && S.sexp[r[1].id] != null && S.sexp[r[1].id] !== r[1].a); });
  /* P2.V F8 - under "High yield only" the set buttons say that they keep the high-yield topics */
  const hy = S.hiOnly ? " high-yield" : "";
  return `${yieldBanner("weak")}
  <div class="rx">
    <div class="rxhead"><div class="rxt">Your next 30 minutes</div>
      <div class="rxd">Built from what you actually got wrong &mdash; not from what you say you find hard.
      ${flags.length ? "Right now the evidence points at <b>"+esc(rx[0].t.t)+"</b> &mdash; "
          + (rx[0].evidence>=2
             ? "proven weak on "+rx[0].evidence+" separate signals, so more than one measurement agrees."
             : "suspected on one signal only, so this set confirms it as much as it fixes it.")
        : (anyMiss ? "Nothing is flagged yet: the misses so far have not flagged any topic. "
                   : "Nothing is flagged yet, because nothing has been answered wrongly yet. ")
          + "Work through a stage or a set of questions and this page starts naming specific topics."}</div></div>
    <div class="rxbody"><div class="btnrow">
      ${flags.length ? `
        ${rxQ.n ? '<button class="btn acc" data-ps="weak">' + (rxQ.n === rxQ.m ? rxQ.n : rxQ.n + " of " + rxQ.m) + " targeted question" + (rxQ.m === 1 ? "" : "s") + (S.hiOnly ? " on high-yield topics" : "") + '</button>'
          : '<button class="btn acc" data-ps="all">A mixed set: all ' + rxAll.n + hy + ' questions, shuffled</button>'}
        ${rxR.n ? '<button class="btn" data-rf="weak">' + (S.hiOnly ? "High-yield rapid picks" : "Rapid picks") + ' on these topics ' + rxR.txt + '</button>' : ""}
        ${rx[0] ? '<button class="btn" data-t="'+rx[0].t.id+'">Re-read '+esc(rx[0].t.t)+'</button>' : ""}`
      : `<button class="btn acc" data-m="path">Go to the path</button>
         <button class="btn" data-ps="all">Answer a mixed set${hy ? " of" + hy + " questions" : ""} instead</button>`}
    </div></div>
  </div>
  <div class="statgrid" style="margin-bottom:28px">
    <div class="stat acc"><div class="sv tnum">${pWeak.length}</div><div class="sl">proven weak</div></div>
    <div class="stat"><div class="sv tnum">${sWeak.length}</div><div class="sl">suspected weak</div></div>
    <div class="stat"><div class="sv tnum">${blind.length}</div><div class="sl">untested</div></div>
    <div class="stat"><div class="sv tnum">${st.qDone?st.acc:"--"}%</div><div class="sl">accuracy</div></div>
    <div class="stat"><div class="sv tnum">${(cal.sure||{}).n?pct((cal.sure||{}).r,(cal.sure||{}).n):"--"}%</div><div class="sl">right when "sure"</div></div>
  </div>
  ${(cal.sure && cal.sure.n>=4 && cal.sure.r/cal.sure.n < 0.85) ? `<div class="call trap">
    <span class="cl">Calibration problem</span>Your latest answer was marked <b>Sure</b> on ${cal.sure.n} questions,
    and ${cal.sure.r} of them ${cal.sure.r===1?"was":"were"} right. Confident errors are the ones that survive to exam day, because you never revisit them.</div>` : ""}
  <div class="sectiontitle" style="margin-top:30px"><h3>What the engine has actually observed</h3>
    <span class="st2">Nothing here is self-reported. This is the raw evidence behind every judgment.</span></div>
  <div class="tblwrap"><table><thead><tr><th>Topic</th><th>Q seen</th><th>Right</th>
    <th title="Right twice, so not a guess">Verified</th><th title="Right before, wrong on re-test">False conf.</th>
    <th title="Questions here whose latest answer was a miss given faster than the stem itself could be read: ${fastRange}">Too fast</th><th>Rapid miss</th><th>Recall</th><th>Mastery</th></tr></thead><tbody>
    ${ev.filter(e=>e.qSeen||e.rSeen||e.known>0.05).slice(0,16).map(e=>{
      const g = (S.topics[e.t.id]||{}).grid;
      return `<tr><td>${esc(e.t.t)}</td><td class="tnum">${e.qSeen}</td><td class="tnum">${e.qRight}</td>
      <td class="tnum">${e.verified||0}</td>
      <td class="tnum" style="${e.falseConf?"color:var(--crit);font-weight:700":""}">${e.falseConf||0}</td>
      <td class="tnum" style="${e.luckyFast?"color:var(--warn);font-weight:700":""}">${e.luckyFast||0}</td>
      <td class="tnum">${e.rMiss||0}</td>
      <td class="tnum">${g!=null?Math.round(g*100)+"%":"&mdash;"}</td>
      <td class="tnum"><b class="mval ${e.mastery<0.5?"lo":e.mastery<0.75?"mid":"hi"}">${Math.round(e.mastery*100)}%</b></td></tr>`; }).join("")
      || '<tr><td colspan="9" style="text-align:center;color:var(--ink-3);font-style:italic">No evidence yet — answer a set and this fills in.</td></tr>'}
  </tbody></table></div>
  <div class="call key" style="margin-top:18px"><span class="cl">How a gap is detected without asking you</span>
    Separate signals, each measured from your answers. A topic trips one for each of these: <b>question accuracy</b>
    under 70% on 2 or more questions, or the only question answered there missed once you have read or practiced
    the topic; <b>the same wrong option</b> chosen twice (on two questions of the topic, or twice on one rapid
    pick), which names the specific confusion; a question whose latest answer was marked <b>Sure</b> and was
    wrong; a <b>failed re-test</b> &mdash; a question you got right and then missed on a later attempt, which
    marks the first answer as luck; a <b>recall grid</b> under 60%; <b>2 or more rapid misses</b>;
    and <b>3 or more drill items</b> placed wrong. <b>How long</b> you took is not a signal on its own: a miss
    answered faster than the stem itself could be read is sorted as a misread below, and a correct answer slower
    than ${SECS_PER_Q} seconds (or 1.2 seconds a word of the stem, on a longer one) is marked not yet automatic.
    Trip <b>one</b> and a topic is listed as <b>suspected</b>; trip <b>two or more</b> and it is <b>proven</b>
    &mdash; in both cases only while its mastery is under ${Math.round(WEAK_BELOW*100)}%.</div>
  ${(()=>{ /* P3.4: one row renderer, two lists. The badge is the point -- a topic
       wrong in two independent ways is a different claim from one wrong on a
       single quiz, and only the first is worth an hour today. */
    /* P2.V F25 sweep: a topic that tripped signals but sits at or above WEAK_BELOW is in
       neither list, so an empty list says so instead of "no topic has failed" */
    const hidP = ev.filter(e => !e.flag && e.evidence >= 2).length, hidS = ev.filter(e => !e.flag && e.evidence === 1).length;
    const unlisted = (n, what) => n + " topic" + (n === 1 ? " has" : "s have") + " tripped " + what + ", but "
      + (n === 1 ? "its" : "their") + " mastery is " + Math.round(WEAK_BELOW*100) + "% or higher, so "
      + (n === 1 ? "it is" : "they are") + " not listed.";
    const row = e => `
    <button class="witem" data-t="${e.t.id}" style="text-align:left;width:100%">
      <span><span class="wt">${esc(e.t.t)} <span class="tag ${e.evidence>=2?"crit":"ghost"}">${e.evidence>=2?"Proven weak":"Suspected weak"}</span></span><span class="wd">${esc(e.t.blk.n)} &middot; ${e.reasons.join(" &middot; ")}</span></span>
      <span class="sev"><i style="width:${Math.round(e.mastery*100)}%;background:${e.mastery<0.5?"var(--m-lo)":e.mastery<0.75?"var(--m-mid)":"var(--m-hi)"}"></i></span>
    </button>`;
    return `<div class="sectiontitle" style="margin-top:34px"><h3>Proven weak</h3>
      <span class="st2">Wrong on <b>two or more separate signals</b> &mdash; a quiz score and a recall grid, say, or the
      same distractor twice and a failed re-test. Two measurements that agree are stronger evidence than any one.
      Spend your time here first.</span></div>
    ${pWeak.length ? `<div class="wlist">${pWeak.map(row).join("")}</div>`
      : '<div class="empty">Nothing is proven weak &mdash; ' + (hidP ? unlisted(hidP, "two or more signals")
        : 'no topic has tripped two separate signals yet.') + '</div>'}
    <div class="sectiontitle" style="margin-top:34px"><h3>Suspected weak</h3>
      <span class="st2">One signal each: enough to notice, not enough to trust. It may be one bad session.
      Every row names the single thing that would settle it.</span></div>
    ${sWeak.length ? `<div class="wlist">${sWeak.map(row).join("")}</div>`
      : '<div class="empty">No single-signal suspicions right now' + (hidS ? ' &mdash; ' + unlisted(hidS, "one signal") : '.') + '</div>'}`; })()}
  ${/* P5.2: threads sit directly under the two topic lists because they reframe
       them -- four rows above can turn out to be one idea failing in four
       places, and a per-topic list is structurally unable to say so. */
    threadsHTML(ev.threads || conceptThreads())}
  ${/* P5.3: sits between the threads and the pair list because it is the bridge.
       The threads say which idea keeps failing, this says what KIND of wrong each
       miss was, and the pairs below name the exact swap. The same confusions()
       list is passed in so the section and the list underneath cannot diverge. */
    errorTypesHTML(et)}
  ${(()=>{ /* P5.V FIX 5: the two kinds of row were ranked against each other on
       n, and n means different things in each. A drill row counts how many of a
       dozen items went to the wrong side, so it starts at 3; a question pair
       counts how many times one wrong option was picked, so it starts at 2.
       Twenty drill rows therefore pushed every pair off a six-row list, and the
       section under "the same wrong answer, more than once" could contain not
       one instance of that. They are ranked and capped separately now, so a pair
       at n=2 is always reachable, and no drill row is lost. */
    const pairs = conf.filter(c=>!c.drill), drs = conf.filter(c=>c.drill);
    const drillRow = c => `<button class="witem" data-dr="${c.drill.id}" style="text-align:left;width:100%">
        <span><span class="wt">${esc(c.drill.t)}</span><span class="wd">placed <b>${c.n}</b> of ${c.of} items wrong on your last run &middot; run the drill again</span></span>
        <span class="sev"><i style="width:${Math.round(100*(c.of-c.n)/c.of)}%;background:var(--crit)"></i></span></button>`;
    const pairRow = c => { const t = findT(c.c)||{t:"?"};
      const instead = (c.right||[]).length
        ? ' when the answer was <b>&ldquo;'+esc(c.right.slice(0,2).join('&rdquo; / &ldquo;'))+'&rdquo;</b>' : '';
      /* P2.5 (K20): a rapid pair names the item it happened on, since one rapid item is one fact */
      const onR = c.kind === "rapid" ? 'rapid review: on &ldquo;'+esc(stripTags(String(c.q||"")).slice(0,90))+'&rdquo; ' : "";
      return `<button class="witem" data-t="${c.c}" style="text-align:left;width:100%">
        <span><span class="wt">${esc(t.t)}</span><span class="wd">${onR}you chose <b>&ldquo;${esc(stripTags(String(c.opt)))}&rdquo;</b> ${
          /* P2.V F25 sweep: a question pair counts QUESTIONS whose latest pick was this option */
          c.kind === "rapid" ? c.n + " times" : "on " + c.n + " questions"}${instead}</span></span>
        <span class="sev"><i style="width:20%;background:var(--crit)"></i></span></button>`; };
    if(!pairs.length && !drs.length) return "";
    return `<div class="sectiontitle" style="margin-top:34px"><h3>Specific confusions</h3>
      <span class="st2">The same wrong answer, more than once.</span></div>`
      + (pairs.length
        ? `<div class="wlist">${pairs.slice(0,6).map(pairRow).join("")}</div>`
        : `<div class="empty">No pair has formed yet. A pair needs the
           <b>same</b> distractor on two questions of the same topic, or the same wrong pick twice on one rapid
           item, so this stays empty for a long time
           &mdash; it is not a claim that nothing is confused.</div>`)
      + (drs.length
        ? `<div class="sectiontitle" style="margin-top:22px"><h3>Drills with 3 or more misses</h3>
           <span class="st2">A different measurement, kept apart from the pairs above: how many items of one
           drill went to the wrong place on your last run of it.</span></div>
           <div class="wlist">${drs.slice(0,6).map(drillRow).join("")}</div>`
        : "");
  })()}
  ${(()=>{ const lx = leeches(); return lx.length ? `<div class="sectiontitle" style="margin-top:34px">
    <h3>Stuck items</h3><span class="st2">Missed three times or more even though they keep coming back.
    More attempts will not fix these &mdash; re-read the concept, then let them return.</span></div>
    <div class="wlist">${lx.slice(0,8).map(l=>{ const t = findT(l.c)||{t:"?"};
      return `<button class="witem" data-t="${l.c}" style="text-align:left;width:100%">
        <span><span class="wt">${esc(l.label)}</span><span class="wd">${esc(t.t)} &middot; missed <b>${l.n}</b> times &middot; re-read rather than re-test</span></span>
        <span class="sev"><i style="width:12%;background:var(--crit)"></i></span></button>`;}).join("")}</div>` : ""; })()}
  ${(()=>{ /* P3.5: the only place the student's own flags are listed, and the
       only place they come off again. A flag with no way to remove it turns
       into a list of stale regrets, so every row carries Unflag; where the
       item belongs to a topic the row also offers the re-read. */
    const fl = flagList().slice().sort((a,b)=>(b.ts||0)-(a.ts||0));
    const when = ts => { try{ return new Date(ts).toLocaleDateString(undefined,{month:"short",day:"numeric"}); }catch(e){ return ""; } };
    if(!fl.length) return `<div class="sectiontitle" id="flagsec" tabindex="-1" style="margin-top:34px"><h3>Flagged items</h3>
      <span class="st2">Nothing flagged yet. Anywhere you answer &mdash; questions, rapid picks, images, drills &mdash;
      there is a <b>Flag this</b> button. Use it when something looks wrong or you want to come back to it, add a note
      if you have one, and it lands here.</span></div>
      <div class="empty">No flagged items.</div>`;
    return `<div class="sectiontitle" id="flagsec" tabindex="-1" style="margin-top:34px"><h3>Flagged items</h3>
      <span class="st2">${fl.length} item${fl.length>1?"s":""} you marked for another look. Nothing here is scored.
      They travel inside your downloaded progress file.</span></div>
      <div class="wlist">${fl.map(f=>{ const tg = flagTarget(f); const d = when(f.ts);
        return `<div class="witem">
          <span><span class="wt">${esc(tg.label)}</span><span class="wd">${esc(tg.sub)}${d?" &middot; flagged "+esc(d):""}${
            f.note?' &middot; &ldquo;'+esc(f.note)+'&rdquo;':""}</span></span>
          <span class="frow">${tg.topic?'<button class="btn sm gho" data-t="'+escA(tg.topic)+'">Re-read</button>':""}<button
            class="btn sm gho" data-unflag="${escA(flagRef(f.kind,f.id))}">Unflag</button></span>
        </div>`; }).join("")}</div>`; })()}
  ${blind.length?`<div class="sectiontitle" style="margin-top:34px"><h3>Untested</h3>
    <span class="st2">Not weak &mdash; unknown: too little has been answered here to judge either way.</span></div>
    <div class="wlist">${blind.slice(0,12).map(e=>`
      <button class="witem" data-t="${e.t.id}" style="text-align:left;width:100%">
        <span><span class="wt">${esc(e.t.t)}</span><span class="wd">${esc(e.t.blk.n)} &middot; ${e.reasons.join(" &middot; ")}</span></span>
        <span class="sev"><i style="width:6%;background:var(--lock)"></i></span></button>`).join("")}</div>`:""}`;
}

/* @region engine.view-gloss (ENGINE, engine) */
/* =====================================================================
   VIEW: GLOSSARY
   ===================================================================== */
/* P2.V F10 - every entry links to the lesson section that introduces its term. The homes are
   found the way viewLearn links terms: each topic's body is glossed in body order with the
   topic's own used-map (explicitGloss, then autoGloss over headings, prose, call-outs, why
   answers, table cells and steps; captions, image notes, scenes, guide cards and sexp options
   carry only an author's {{key}} links). An author's own link wins over an automatic one;
   otherwise the first topic in block order that links the term. hix is the section: the n-th
   heading of that body, or -1 when the link comes before the first heading. */
let GLOSS_HOME = null;
function glossHomes(){
  if(GLOSS_HOME) return GLOSS_HOME;
  const home = {};
  ALLT().forEach(t => {
    const used = explicitGloss(t), ex = Object.assign({}, used), hs = [];
    const take = html => (String(html).match(/data-g="[^"]+"/g) || []).forEach(m => {
      const k = m.slice(8, -1), cur = home[k];
      if(!GLOSS[k] || (cur && (cur.t === t.id || cur.ex || !ex[k]))) return;
      home[k] = {t:t.id, hix:hs.length - 1, h:hs.length ? hs[hs.length - 1] : "", ex:!!ex[k]};
    });
    const ag = s => take(autoGloss(fmt(String(s == null ? "" : s)), used)), fm = s => { if(s) take(fmt(s)); };
    (t.body || []).forEach(x => {
      const k = x[0];
      if(k === "h"){ hs.push(String(x[1])); take(autoGloss(esc(x[1]), used)); }
      else if(k === "p") ag(x[1]);
      else if(k === "call") ag(x[3]);
      else if(k === "why") ag(x[2]);
      else if(k === "t"){ (x[1] || []).forEach(c => fm(String(c))); (x[2] || []).forEach(r => r.forEach(ag)); }
      else if(k === "steps"){ const a = Array.isArray(x[1]) ? x[1] : [x[1], x[2]]; (a[1] || []).forEach(r => { ag(r[0]); ag(r[1]); }); }
      else if(k === "f" && FIGS[x[1]]){ fm(FIGS[x[1]].cap); fm(FIGS[x[1]].teach); }
      else if(k === "img" && IMGS[x[1]]){ (IMGS[x[1]].ann || []).forEach(a => fm(a.l)); fm(IMGS[x[1]].look); }
      else if(k === "palace" && PALACE[x[1]]){ PALACE[x[1]].keys.forEach(c => fm(c[2])); fm(PALACE[x[1]].story); }
      else if(k === "vis" && VISUAL_GUIDES[x[1]]) VISUAL_GUIDES[x[1]].slice(1).forEach(z => fm(z[1]));
      else if(k === "sexp" && x[1]) (x[1].o || []).forEach(fm);
    });
  });
  return (GLOSS_HOME = home);
}
function viewGloss(){
  const ks = Object.keys(GLOSS).sort((a,b)=>GLOSS[a].t.localeCompare(GLOSS[b].t));
  const H = glossHomes(), off = ks.filter(k => !H[k] || !findT(H[k].t)).length;
  const link = k => { const h = H[k], t = h && findT(h.t); if(!t) return "";
    return `<button type="button" class="glink" data-glosshome="${escA(k)}">In the lesson: <b>${esc(t.t)}</b>${
      h.h ? ` &middot; &ldquo;${esc(h.h)}&rdquo;` : ""} &rarr;</button>`; };
  const sub = ks.length + (ks.length === 1 ? " term." : " terms.")
    + (off === ks.length ? " None is linked from a lesson yet."
       : " The link under " + (off ? "an entry" : "each entry") + " opens the lesson at the section that introduces the term."
         + (off ? " " + off + (off === 1 ? " term is" : " terms are") + " not linked from any lesson yet, so " + (off === 1 ? "it has" : "they have") + " no link." : ""));
  return `<div class="sectiontitle"><h3>Plain-language glossary</h3>
      <span class="st2">${sub}</span></div>
    <input class="gsearch" id="gsearch" placeholder="Search a term..." aria-label="Search the glossary" autocomplete="off">
    <div class="glist" id="glist">${ks.map(k=>
      `<div class="gitem" data-gk="${esc(GLOSS[k].t+" "+k+" "+GLOSS[k].d).toLowerCase()}" data-gkey="${escA(k)}">
        <h5>${esc(GLOSS[k].t)}</h5><p>${fmt(GLOSS[k].d)}</p>${link(k)}</div>`).join("")}</div>`;
}
/* the entry's link lands like any topic change (go), then on the section that introduces the
   term: the heading just under the sticky header, focused. A link inside a closed why block or
   figure note is opened, and the term is marked for a moment so the eye finds it. */
function glossGo(k){
  const h = glossHomes()[k]; if(!h || !findT(h.t)) return;
  go("learn", h.t);
  const body = document.querySelector("#app .body-inner"); if(!body) return;
  const term = Array.from(body.querySelectorAll(".gterm")).find(x => x.dataset.g === k && !x.closest(".gpop"));
  const d = term && term.closest("details"); if(d && !d.open) d.open = true;
  const target = (h.hix >= 0 && body.querySelectorAll(":scope > .sechead")[h.hix]) || term;
  if(!target) return;
  landAt(target);
  if(term){ term.classList.add("ghere"); setTimeout(() => term.classList.remove("ghere"), 2600); }
}
/* put target just under the sticky header and focus it (or f, a control inside it) */
function landAt(target, f){
  const hd = document.querySelector("header");
  window.scrollTo({top:Math.max(0, Math.round(target.getBoundingClientRect().top + window.scrollY - (hd ? hd.offsetHeight : 0) - 12)), behavior:"instant"});
  f = f || target;
  if(f.tabIndex < 0) f.setAttribute("tabindex", "-1");
  try{ f.focus({preventScroll:true}); }catch(e){}
}

/* @region engine.search (ENGINE, engine) */
/* =====================================================================
   GLOBAL SEARCH
   ===================================================================== */
let SEARCH_INDEX = null;
/* P2.V F35 - search matches, ranks and highlights on PLAIN text. The old hi() ran one
   replace per term over HTML it had already marked up, so a later term matched inside the
   inserted <mark> tags and inside entities ("ark>toark>", "&md a sh;"), and the score was
   an OR of substring counts, so "a" and "to" outranked the words that mattered and long
   topic bodies filled the 40 slots.
   Now each piece of an entry is normalized once (tags stripped, entities decoded, lower
   case, "&" read as "and", every run of non-letters one space) and filed under a weight:
   title 5 > bottom line, where-to-look line, caption, heading 3 > per-option why, table
   cell, call-out 2 > stem, prose, options 1. e.N holds one string per weight, its pieces
   joined by "|", so a phrase never runs from one piece into the next. `title` and `body`
   keep their old raw form (the probe reads them); `tt` and `sub` are plain display text. */
const SRCH_W = {title:5, key:3, why:2, body:1};
const SRCH_STOP = new Set(("a an and are as at be but by can could did do does for from had has have he her his how i if in into is it its may no nor not of on or our she so than that the their them then there these they this those to too was we were what when where which who whom whose why will with would you your").split(" "));
const srchPlain = s => { s = s == null ? "" : String(s);
  if(/[<{[*]/.test(s)) s = stripTags(s);
  if(s.indexOf("&") >= 0){ const ta = srchPlain.ta || (srchPlain.ta = document.createElement("textarea")); ta.innerHTML = s; s = ta.value; }
  return s.replace(/\s+/g, " ").trim(); };
const srchNorm = s => " " + String(s).toLowerCase().replace(/&/g, " and ").replace(/[^\p{L}\p{N}]+/gu, " ").trim() + " ";
const srchClip = (s, n) => { s = srchPlain(s); return s.length > n ? s.slice(0, n).trimEnd() + "…" : s; };
const escText = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/* P2.V sweep (K19): a hit found in a why, a table row, a bottom line or a where-to-look line
   used to show only the item's title and stem, so the words that matched were nowhere on the
   list. e.P holds the item's pieces as [label, text, at?]; srchSnip() adds a third line with the
   piece that matched best (see srchFind), clipped around the match and marked, whenever the
   title and the second line, as printed, do not already show it. */
const whyNot = o => "Why not \u201c" + srchClip(o, 48) + "\u201d";
function figTitle(k){
  const f = FIGS[k] || {}, m = /<text\b[^>]*\bclass="[^"]*\bttl\b[^"]*"[^>]*>([\s\S]*?)<\/text>/.exec(f.svg || "");
  const a = /\baria-label="([^"]+)"/.exec(f.svg || "");
  return (m && srchPlain(m[1])) || (a && srchPlain(a[1])) || k;
}
/* P2.V F35 redo (2026-10-04): the line used to clip around the first place ANY query word
   appeared, so an exact phrase late in a long why or explanation showed unrelated text with
   one word marked. It now clips around where the query really lands, best first:
     tier 3  the whole phrase;
     tier 2  else the tightest run of words that holds every scoring word (no longer than the
             clip), the "all words" window;
     tier 1  else the window of that length that holds the most rarity (idf) of distinct
             words, which is the single rarest word when no two sit near each other.
   Each piece of the entry is tried the same way and the best piece wins (tier, then the
   tighter window, then the earlier piece). Everything runs on plain text cut into words by
   SRCH_WORD, the same cut hi() uses, so the marks and the window can never disagree, and
   hi() still marks once over plain text. e.P pieces are [label, text, at]; `at` says where
   the piece sits on its own page (a topic block "3", a table row "6.2", "teach", "story") so
   that opening the hit can land there (searchGo). */
const SRCH_CLIP = 170, SRCH_SHOW = 190;
const srchCut = s => s.length > SRCH_SHOW ? s.slice(0, SRCH_SHOW).trimEnd() + "…" : s;
const srchWords = s => { const w = []; let m; SRCH_WORD.lastIndex = 0;
  while((m = SRCH_WORD.exec(s))) w.push([m.index, m.index + m[0].length, m[0] === "&" ? "and" : m[0].toLowerCase()]);
  return w; };
/* where term t sits in word x (a [start, end, lower] triple), or -1: at the start of the word, inside it
   for terms of 4+ letters, or as the whole word (short terms) */
const srchAt = (x, t, whole) => whole ? (x[2] === t ? 0 : -1) : x[2].startsWith(t) ? 0 : t.length >= 4 ? x[2].indexOf(t) : -1;
/* the span of term t in word x, or null (a word whose lower case changes length is marked whole) */
const srchSpan = (x, t, whole) => { const k = srchAt(x, t, whole);
  return k < 0 ? null : x[2].length === x[1] - x[0] ? [x[0] + k, x[0] + k + t.length] : [x[0], x[1]]; };
function srchFind(s, Q){
  const w = srchWords(s), n = Q.toks.length, K = Q.key, idf = Q.idf || K.map(() => 1);
  if(Q.phrase) for(let i = 0; i + n <= w.length; i++)
    if(Q.toks.every((t, j) => j < n - 1 ? w[i+j][2] === t : w[i+j][2].startsWith(t)))
      return {tier:3, a:w[i][0], b:srchSpan(w[i+n-1], Q.toks[n-1], false)[1], k:n, w:0};
  const hit = w.map(x => { const r = []; K.forEach((t, j) => { if(srchAt(x, t, Q.whole) >= 0) r.push(j); }); return r; });
  let best = null;
  for(let i = 0; i < w.length; i++){
    if(!hit[i].length) continue;
    const seen = new Set(); let wt = 0, end = w[i][1], last = i;
    for(let j = i; j < w.length && w[j][1] - w[i][0] <= SRCH_CLIP; j++){
      hit[j].forEach(t => { if(!seen.has(t)){ seen.add(t); wt += idf[t]; end = w[j][1]; last = j; } });
      if(seen.size === K.length) break;
    }
    const c = {tier:seen.size === K.length ? 2 : 1, a:w[i][0], b:end, k:last - i + 1, w:wt};
    if(!best || srchBetter(c, best)) best = c;
  }
  return best;
}
/* is match c better than d? (both from the same piece or from two pieces of one entry) */
function srchBetter(c, d){
  if(c.tier !== d.tier) return c.tier > d.tier;
  if(c.tier === 3) return false;
  if(c.tier === 2) return c.k < d.k || (c.k === d.k && c.b - c.a < d.b - d.a);
  return c.w > d.w + 1e-9 || (Math.abs(c.w - d.w) <= 1e-9 && c.b - c.a < d.b - d.a);
}
/* the piece of entry e that the "why it matched" line quotes, with where the query lands in it; null when
   the title and the second line, as printed, already show the match, or nothing in a piece does */
function srchPick(e, Q){
  const P = e.P; if(!P || !P.length) return null;
  const shown = srchNorm(srchCut(e.tt) + " | " + srchCut(e.sub));
  if(Q.phrase ? shown.indexOf(Q.phrase) >= 0 : Q.key.every(t => srchHit(shown, t, Q.whole))) return null;
  if(!Q.idf){ const N = buildIndex().length; Q.idf = Q.key.map(t => Math.log(1 + N / (1 + srchTerm(t, Q.whole).df))); }
  let best = null;
  P.forEach(p => { if(!p[1]) return;
    const c = p.c || (p.c = {s:srchPlain(p[1])});
    if(c.n === undefined) c.n = srchNorm(c.s);
    if(!(Q.phrase && c.n.indexOf(Q.phrase) >= 0) && !Q.key.some(t => c.n.indexOf(t) >= 0)) return;   /* no word of the query is in this piece */
    const m = srchFind(c.s, Q);
    if(m && (!best || srchBetter(m, best.m))) best = {p, s:c.s, m};
  });
  return best;
}
/* the third line: the label of the piece and the clip of it centered on the match, marked */
function srchSnip(e, Q, pk){
  pk = pk === undefined ? srchPick(e, Q) : pk;
  if(!pk) return "";
  const s = pk.s, len = s.length, ms = pk.m.a, me = pk.m.b, span = me - ms;
  let a = span >= SRCH_CLIP - 20 ? ms : ms - Math.floor((SRCH_CLIP - span) / 2);
  a = Math.max(0, Math.min(a, len - SRCH_CLIP));
  if(a > 0 && s[a - 1] !== " "){ const sp = s.indexOf(" ", a); a = sp >= 0 && sp < ms ? sp + 1 : (s.lastIndexOf(" ", a) + 1); }
  let b = Math.max(a + SRCH_CLIP, me);
  if(b < len){ const sp = s.lastIndexOf(" ", b); b = sp > me && sp > a + 60 ? sp : b; }
  const clip = s.slice(a, b).trimEnd();
  /* a question, rapid item or image opens unanswered: what it says in its bottom line, whys, table and
     where-to-look line is drawn only after the answer, so the line says so instead of leaving the
     student to look for it (opening it would have to record an answer to show it) */
  const late = /^(Question|Rapid review|Image)$/.test(e.kind) && pk.p[0] !== "Question" ? '<span class="sl">(after you answer)</span> ' : "";
  return '<div class="st3"><span class="sk">' + escText(srchPlain(pk.p[0])) + '</span> ' + late + hi((a > 0 ? "…" : "") + clip + (b < len ? "…" : ""), Q) + '</div>';
}
function buildIndex(){
  if(SEARCH_INDEX) return SEARCH_INDEX;
  const ix = [], W = SRCH_W;
  const add = (e, F) => { e.tt = srchPlain(e.title); const by = {};
    [[e.tt, W.title]].concat(F).forEach(f => { const s = srchNorm(srchPlain(f[0])); if(s.length > 2) (by[f[1]] = by[f[1]] || []).push(s); });
    e.N = Object.keys(by).map(w => [by[w].join("|"), +w]);
    e.A = e.N.map(f => f[0]).join("|");   /* a term absent here skips the entry */
    ix.push(e); };
  ALLT().forEach(t => {
    const text = stripTags(t.body.map(x => x[0]==="p"?x[1] : x[0]==="call"?x[2]+" "+x[3] :
      x[0]==="why"?x[1]+" "+x[2] : x[0]==="h"?x[1] : x[0]==="steps"?stepsText(x) :
      x[0]==="t"?(x[1].join(" ")+" "+x[2].map(r=>r.join(" ")).join(" ")) : "").join(" "));
    const F = [[t.sub, W.key], [t.blk.n, W.body]];
    t.body.forEach(x => {
      if(x[0]==="h") F.push([x[1], W.key]);
      else if(x[0]==="why" || x[0]==="call") F.push([x[0]==="why" ? x[1] : x[2], W.why], [x[0]==="why" ? x[2] : x[3], W.why]);
      else if(x[0]==="t") [].concat(x[1], ...x[2]).forEach(c => F.push([c, W.why]));
      else if(x[0]==="p") F.push([x[1], W.body]);
      else if(x[0]==="steps") F.push([stepsText(x), W.body]);
    });
    /* P2.5 F35b: the third item of a piece is where it sits in the lesson, the body block's index
       ("3"; a table row "6.2"), which the lesson draws back as data-bi, so a hit can land on it */
    const P = [];
    t.body.forEach((x, bi) => {
      if(x[0]==="h") P.push(["Section", x[1], ""+bi]);
      else if(x[0]==="p") P.push(["Lesson", x[1], ""+bi]);
      else if(x[0]==="call") P.push([x[2], x[3], ""+bi]);
      else if(x[0]==="why") P.push(["Why", x[1]+" "+x[2], ""+bi]);
      else if(x[0]==="t"){ x[2].forEach((r, ri) => P.push(["Table", r.join(" · "), bi+"."+ri]));
        P.push(["Table columns", x[1].join(" · "), ""+bi]); }
      else if(x[0]==="steps") P.push(["Steps", stepsText(x), ""+bi]);
    });
    add({kind:"Topic", title:t.t, sub:srchPlain(t.blk.n)+" — "+srchPlain(t.sub), body:text, act:["t",t.id], P}, F);
  });
  /* P2.5 (K19): the explanation layers are searchable too - every per-option why (q.w, r.w,
     image ww), the comparison table cells (q.et), the bottom line (q.bl), the where-to-look
     lines (pt.say) and a figure's teach text. */
  const notes = w => w && typeof w === "object" ? Object.values(w).join(" ") : "";
  const etText = et => Array.isArray(et) ? [].concat(et[0] || [], ...(et[1] || [])).join(" ") : "";
  const say = x => x.pt && x.pt.say ? x.pt.say : "";
  const vals = w => w && typeof w === "object" ? Object.values(w) : [];
  const cells = et => Array.isArray(et) ? [].concat(et[0] || [], ...(et[1] || [])) : [];
  QS.forEach(q => { const t = findT(q.c)||{t:""};
    add({kind:"Question", title:stripTags(q.l), sub:srchPlain(t.t)+" — "+srchClip(q.s, 110),
      body:stripTags([q.s, q.o.join(" "), q.e, q.bl || "", notes(q.w), etText(q.et), say(q)].join(" ")), act:["q",q.id],
      P:[["Bottom line", q.bl], ["Where to look", say(q)]].concat(q.o.map((o, k) => [whyNot(o), q.w && q.w[k]]),
        Array.isArray(q.et) && Array.isArray(q.et[1]) ? q.et[1].filter(Array.isArray).map(r => ["Table", r.join(" · ")]) : [],
        [["Explanation", q.e], ["Question", q.s]])},
      [[q.bl, W.key], [say(q), W.key]].concat(vals(q.w).map(v => [v, W.why]), cells(q.et).map(c => [c, W.why]),
        [[q.s, W.body], [q.e, W.body], [t.t, W.body]], q.o.map(o => [o, W.body]))); });
  RAPID.forEach(r => { const t = findT(r.c)||{t:""};
    add({kind:"Rapid review", title:stripTags(r.q), sub:srchPlain(t.t)+" — "+srchPlain(r.o[r.a]),
      body:stripTags([r.q, r.o.join(" "), r.x || "", notes(r.w), say(r)].join(" ")), act:["r",r.i],
      P:[["Where to look", say(r)]].concat(r.o.map(o => [whyNot(o), r.w && r.w[o]]), [["Explanation", r.x]])},
      [[say(r), W.key]].concat(vals(r.w).map(v => [v, W.why]), [[r.x, W.body], [t.t, W.body]], r.o.map(o => [o, W.body]))); });
  /* P2.4 (F21, reopened): a multi drill has no a/bb, and its result used to say "Build the chain" (the order drill's line) */
  DRILLS.forEach(d => add({kind:"Drill", title:d.t, sub:(d.kind!=="order" && d.kind!=="multi" && d.a ? srchPlain(d.a)+" vs "+srchPlain(d.bb) : drillKindLine(d)),
      body:stripTags((d.items||[]).map(x=>Array.isArray(x)?x[0]:x).join(" ")+" "+(d.key||"")), act:["d",d.id]},
      [[d.a, W.key], [d.bb, W.key], [d.key, W.body]].concat((d.items||[]).map(x => [Array.isArray(x)?x[0]:x, W.body]))));
  Object.keys(IMGS).forEach(k => { const im = IMGS[k];
    add({kind:"Image", title:im.n, sub:"Diagnosis: "+srchPlain(im.dx),
      body:stripTags(im.n+" "+im.look+" "+im.dx+" "+(im.ann||[]).map(a=>a.l).join(" ")+" "+notes(im.ww)), act:["i",k],
      P:(im.wrong||[]).map(o => [whyNot(o), im.ww && im.ww[o]]).concat([["What to look for", im.look]], (im.ann||[]).map(a => ["Finding", a.l]))},
      [[im.dx, W.key], [im.look, W.key]].concat((im.ann||[]).map(a => [a.l, W.why]), vals(im.ww).map(v => [v, W.why]))); });
  Object.keys(FIGS).forEach(k => add({kind:"Diagram", title:figTitle(k), sub:srchClip(FIGS[k].cap, 110),
      body:stripTags(FIGS[k].cap+" "+(FIGS[k].teach||"")+" "+FIGS[k].svg.replace(/<[^>]+>/g," ")), act:["f",k],
      P:[["Caption", FIGS[k].cap, "cap"], ["More on this figure", FIGS[k].teach, "teach"]]},
      [[FIGS[k].cap, W.key], [FIGS[k].teach, W.why], [FIGS[k].svg.replace(/<[^>]+>/g," "), W.body]]));
  Object.keys(PALACE).forEach(k => { const p = PALACE[k];
    add({kind:"Memory scene", title:p.t, sub:srchClip(p.story, 110),
      body:stripTags(p.story+" "+p.keys.map(x=>x[1]+" "+x[2]).join(" ")), act:["m",k],
      P:p.keys.map((x, i) => [x[1], x[2], "c"+i]).concat([["Story", p.story, "story"]])},
      [[p.story, W.body]].concat(p.keys.map(x => [x[1]+" "+x[2], W.why]))); });
  Object.keys(GLOSS).forEach(k => add({kind:"Glossary", title:GLOSS[k].t, sub:srchPlain(GLOSS[k].d),
      body:GLOSS[k].t+" "+k+" "+GLOSS[k].d, act:["g",k], P:[["Definition", GLOSS[k].d, "d"]]}, [[k, W.key], [GLOSS[k].d, W.why]]));
  SEARCH_INDEX = ix; return ix;
}
/* A query is split the way the pieces are. Stop words and 1-2 character tokens never
   score; they stay in the phrase. A query made only of short tokens ("LH", "T3 and T4")
   uses them as whole words instead, so it still finds something. */
function srchQuery(raw){
  const toks = srchNorm(raw).trim().split(" ").filter(Boolean), uniq = a => [...new Set(a)];
  let key = uniq(toks.filter(t => t.length >= 3 && !SRCH_STOP.has(t)));
  let short = uniq(toks.filter(t => t.length < 3 && !SRCH_STOP.has(t))), whole = false;
  if(!key.length && short.length){ key = short; short = []; whole = true; }
  const content = toks.filter(t => !SRCH_STOP.has(t)).length;
  return {toks, key, short, whole, phrase: toks.length > 1 && content > 1 ? " " + toks.join(" ") : ""};
}
/* How well term t lands in normalized text f: 1 at the start of a word; 0.5 only inside
   words (4+ letters, so "thyroid" still finds hypothyroidism); whole words for short terms. */
function srchHit(f, t, whole){
  if(whole) return f.indexOf(" "+t+" ") >= 0 ? 1 : 0;
  const k = f.indexOf(t); if(k < 0) return 0;
  if(f[k-1] === " " || f.indexOf(" "+t, k) >= 0) return 1;
  return t.length >= 4 ? 0.5 : 0;
}
/* Per term, for every entry: the heaviest weight it lands in, and how many entries hold it.
   Kept per term on the index itself, so each keystroke only scans for the word being typed. */
function srchTerm(t, whole){
  const ix = buildIndex(), memo = ix.memo || (ix.memo = new Map()), key = (whole ? "=" : "") + t;
  let r = memo.get(key);
  if(r) return r;
  let df = 0;
  const best = ix.map(e => { if(e.A.indexOf(t) < 0) return 0; let b = 0;
    e.N.forEach(f => { const s = srchHit(f[0], t, whole) * f[1]; if(s > b) b = s; });
    if(b) df++; return b; });
  if(memo.size > 300) memo.clear();
  memo.set(key, r = {best, df}); return r;
}
function openSearch(){
  if(el("searchwrap")) return;
  const div = document.createElement("div");
  div.className = "searchwrap"; div.id = "searchwrap";
  div.innerHTML = `<div class="searchbox">
    <input id="sq" placeholder="Search everything — topics, questions, rapid review, images, diagrams, terms…" autocomplete="off">
    <div class="sresults" id="sres"></div>
    <div class="sfoot"><span>&uarr;&darr; move</span><span>&crarr; open</span><span>esc close</span>
      <span style="margin-left:auto">${buildIndex().length} indexed items</span></div></div>`;
  document.body.appendChild(div);
  div.onclick = e => { if(e.target === div) closeSearch(); };
  const input = el("sq");
  input.oninput = () => runSearch(input.value);
  input.onkeydown = e => {
    const items = [...document.querySelectorAll("#sres .sitem")];
    let i = items.findIndex(x=>x.classList.contains("sel"));
    if(e.key === "ArrowDown"){ e.preventDefault(); if(items[i]) items[i].classList.remove("sel");
      i = Math.min(items.length-1, i+1); if(items[i]){ items[i].classList.add("sel"); items[i].scrollIntoView({block:"nearest"}); } }
    if(e.key === "ArrowUp"){ e.preventDefault(); if(items[i]) items[i].classList.remove("sel");
      i = Math.max(0, i-1); if(items[i]){ items[i].classList.add("sel"); items[i].scrollIntoView({block:"nearest"}); } }
    if(e.key === "Enter"){ e.preventDefault(); const t = items[i] || items[0]; if(t) t.click(); }
  };
  runSearch(""); input.focus();
}
function closeSearch(){ const w = el("searchwrap"); if(w) w.remove(); }
function runSearch(q){
  const res = el("sres"); if(!res) return;
  q = (q||"").trim();
  if(!q){ res.innerHTML = '<div class="sempty">Type to search every topic, question, rapid pick, drill, image, diagram and term in this block.</div>'; return; }
  /* P2.V F35 - rank: 3 = the whole query appears as a phrase (ties go to the heavier piece
     it sits in), 2 = every word appears (scoring terms anywhere, short tokens as whole
     words), 1 = some do. Inside a tier: the sum over scoring terms of rarity (idf over the
     index) x the heaviest weight the term lands in. Short tokens only split tier 2 from 1;
     they never make a match or add to the score. Entry length and repeat counts do not
     score, so a long topic body cannot crowd out the why, table cell, bottom line or rapid
     why that holds the phrase. */
  const Q = srchQuery(q);
  if(!Q.key.length){ res.innerHTML = '<div class="sempty">Keep typing: a search needs a word that is not just &ldquo;a&rdquo;, &ldquo;the&rdquo; or punctuation.</div>'; return; }
  const ix = buildIndex(), T = Q.key.map(t => srchTerm(t, Q.whole)), S = Q.short.map(t => srchTerm(t, true)), rows = [];
  const idf = Q.idf = T.map(r => Math.log(1 + ix.length / (1 + r.df)));
  ix.forEach((e, n) => {
    let got = 0, score = 0;
    T.forEach((r, j) => { const b = r.best[n]; if(b){ got++; score += b * idf[j]; } });
    if(!got) return;
    let pw = 0; if(Q.phrase && e.A.indexOf(Q.phrase) >= 0) e.N.forEach(f => { if(f[1] > pw && f[0].indexOf(Q.phrase) >= 0) pw = f[1]; });
    const sh = S.filter(r => r.best[n]).length;
    rows.push({e, n, pw, score, tier: pw ? 3 : got === T.length && sh === S.length ? 2 : 1});
  });
  const hits = rows.sort((a, b) => b.tier - a.tier || b.pw - a.pw || b.score - a.score || a.n - b.n).slice(0, 40);
  if(!hits.length){ res.innerHTML = '<div class="sempty">Nothing matched &ldquo;'+escText(q)+'&rdquo;.</div>'; return; }
  /* the list reads in rank order: groups are (tier, kind), in the order of their best hit,
     so the first button (pre-selected, what Enter opens) is the top-ranked result and no
     weaker hit of one kind sits above a phrase hit of another. The tier is named only when
     more than one is on the list. */
  const groups = {}, order = [], TL = {3:"Exact phrase", 2:"All words", 1:"Some words"};
  const named = new Set(hits.map(h => h.tier)).size > 1;
  hits.forEach(h => { const k = (named ? TL[h.tier] + " &middot; " : "") + h.e.kind;
    if(!groups[k]){ groups[k] = []; order.push(k); } groups[k].push(h.e); });
  /* P2.5 F35b: the piece the third line quotes is also where the hit opens (data-at) */
  res.innerHTML = order.map(k =>
    '<div class="sgroup">'+k+' &middot; '+groups[k].length+'</div>' +
    groups[k].map(e => { const pk = srchPick(e, Q), at = pk && pk.p[2] ? ` data-at="${escA(pk.p[2])}"` : "";
      return `<button class="sitem" data-go="${e.act.join(":")}"${at}>
      <div class="st1">${hi(e.tt, Q)}</div><div class="st2">${hi(e.sub, Q)}</div>${srchSnip(e, Q, pk)}</button>`; }).join("")
  ).join("");
  res.scrollTop = 0;
  const first = res.querySelector(".sitem"); if(first) first.classList.add("sel");
  res.querySelectorAll("[data-go]").forEach(b => b.onclick = () => { closeSearch(); searchGo(b.dataset.go, {Q, at:b.dataset.at || ""}); });
}
/* s is plain text. It is cut into words once (letters and digits; "&" reads as "and", as in
   srchNorm) and marked the way the ranking matches: the phrase first, then the terms
   longest first (at a word start, inside a word for 4+ letters, whole words for short
   terms; stop words are never marked alone). Marks are placed by position and every piece
   is escaped afterwards, so a mark can never open inside a tag or an entity, and no query
   text is ever turned into a pattern. */
const SRCH_WORD = /[\p{L}\p{N}]+|&/gu;
function hi(s, Q){
  s = srchCut(String(s));
  if(!Q) return escText(s);
  const w = srchWords(s), R = [];
  const n = Q.toks.length, terms = Q.key.concat(Q.short).sort((a, b) => b.length - a.length);
  for(let i = 0; i < w.length; i++){
    if(Q.phrase && i + n <= w.length && Q.toks.every((t, j) => j < n - 1 ? w[i+j][2] === t : w[i+j][2].startsWith(t))){
      R.push([w[i][0], srchSpan(w[i+n-1], Q.toks[n-1], false)[1]]); i += n - 1; continue; }
    for(const t of terms){ const r = srchSpan(w[i], t, Q.whole || t.length < 3); if(r){ R.push(r); break; } }
  }
  let out = "", last = 0;
  R.forEach(r => { out += escText(s.slice(last, r[0])) + "<mark>" + escText(s.slice(r[0], r[1])) + "</mark>"; last = r[1]; });
  return out + escText(s.slice(last));
}
/* P2.5 F35b - opening a hit lands on the piece the result quoted, not on the top of the item. The
   piece is data-at on the button (a lesson block "3", a table row "6.2", a figure's "teach", a
   scene's "story" or card "c1", a glossary "d"). Landing:
     1. opens what holds it shut (a why block, a figure's note, a scene's story);
     2. scrolls it into view, just under the sticky header (the whole table, if it fits, so its
        column heads show; the matched words, if the block is taller than the screen), and slides
        a table that scrolls inside its own box (400 px) so the matched cell shows;
     3. marks the block and, with the CSS Custom Highlight API where the browser has it, the matched
        words, for about three seconds, without touching the markup;
     4. moves focus there (a why's summary, a table row, the block itself).
   The matched words are found again in the DRAWN text with the same srchFind the result line used. */
let SRCH_FLASH_T = 0;
function srchRange(root, Q){
  const segs = []; let txt = "", prev = null;
  const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  /* a space goes where one block ends and the next begins (table cells, the WHY label and its
     question) and nowhere inside a line, so a word split by a gloss link or bold stays one word */
  const blockOf = n => { for(let q = n.parentElement; q && q !== root; q = q.parentElement){
    const d = getComputedStyle(q).display; if(d !== "inline" && d !== "contents") return q; } return root; };
  for(let n = tw.nextNode(); n; n = tw.nextNode()){
    if(!n.nodeValue || (n.parentElement && n.parentElement.closest(".gpop"))) continue;
    const bk = blockOf(n); if(prev && bk !== prev) txt += " "; prev = bk;
    segs.push([txt.length, n]); txt += n.nodeValue;
  }
  const m = srchFind(txt, Q); if(!m) return null;
  const pos = (off, end) => { for(let i = segs.length - 1; i >= 0; i--){ const g = segs[i];
    if(end ? off > g[0] : off >= g[0]) return [g[1], Math.min(off - g[0], g[1].nodeValue.length)]; } return null; };
  const a = pos(m.a, false), b = pos(m.b, true); if(!a || !b) return null;
  const r = document.createRange(); r.setStart(a[0], a[1]); r.setEnd(b[0], b[1]); return r;
}
function srchFlashOff(){
  clearTimeout(SRCH_FLASH_T);
  document.querySelectorAll(".srhit").forEach(x => x.classList.remove("srhit"));
  try{ if(window.CSS && CSS.highlights) CSS.highlights.delete("srhit"); }catch(e){}
}
function srchFlash(hot, rng){
  srchFlashOff();
  hot.classList.add("srhit");
  try{ if(rng && window.CSS && CSS.highlights && typeof Highlight === "function") CSS.highlights.set("srhit", new Highlight(rng)); }catch(e){}
  SRCH_FLASH_T = setTimeout(srchFlashOff, 3200);
}
/* hot: the element to mark and, unless o.text, the text to search; o.focus: what takes focus;
   o.place: what to bring under the header when it fits (default hot); o.pad: gap below the header */
function srchShow(hot, o){
  const rng = o.Q ? srchRange(o.text || hot, o.Q) : null, box = rng ? rng.getBoundingClientRect() : null;
  const wrap = hot.closest(".tblwrap");
  if(wrap && rng){ const wr = wrap.getBoundingClientRect(), n0 = rng.startContainer, cell = (n0.nodeType === 1 ? n0 : n0.parentElement).closest("td,th"), r1 = (cell || rng).getBoundingClientRect();
    if(r1.right > wr.right - 4) wrap.scrollLeft += Math.max(0, Math.min(r1.right - wr.right + 6, r1.left - wr.left - 4));
    else if(r1.left < wr.left + 4) wrap.scrollLeft -= wr.left - r1.left + 6; }
  const hd = document.querySelector("header"), H = hd ? hd.offsetHeight : 0, avail = window.innerHeight - H;
  const place = o.place || hot, pr = place.getBoundingClientRect(), fits = pr.height <= avail * 0.85;
  const lead = hot === place || o.pad === undefined ? 12 : o.pad;   /* a row in a table too tall for the screen: some rows above it */
  let y = (fits ? pr.top : hot.getBoundingClientRect().top) - H - (fits ? 12 : lead);
  if(box && box.bottom - y > window.innerHeight - 28) y = box.top - H - Math.round(avail * 0.3);
  window.scrollTo({top:Math.max(0, Math.round(window.scrollY + y)), behavior:"instant"});
  const f = o.focus || hot;
  if(f.tabIndex < 0) f.setAttribute("tabindex", "-1");
  try{ f.focus({preventScroll:true}); }catch(e){}
  srchFlash(hot, rng);
}
/* a lesson hit: the block data-bi, and for a table the row; a closed why is opened and focus goes to its summary */
function srchLandTopic(at, Q){
  const box = document.querySelector("#app .body-inner"), ix = String(at || "").split("."); if(!box || !Q || !at) return false;
  const blk = box.querySelector(':scope > [data-bi="' + (+ix[0]) + '"]'); if(!blk) return false;
  let hot = blk, f = blk, place = blk;
  if(blk.tagName === "DETAILS"){ blk.open = true; f = blk.querySelector("summary") || blk; }
  const row = ix.length > 1 ? blk.querySelectorAll("tbody tr")[+ix[1]] : null;
  if(row){ hot = f = row; }
  srchShow(hot, {Q, focus:f, place, pad:Math.round(window.innerHeight * 0.2)});
  return true;
}
function searchGo(spec, ctx){
  const i = spec.indexOf(":"), kind = spec.slice(0,i), id = spec.slice(i+1), at = (ctx && ctx.at) || "", Q = (ctx && ctx.Q) || null;
  /* P2.6: every set start clears the empty-set notice (P2.3); q: and r: used to leave it, so it
     came back on the landing page once the one-item set ended (t: and g: clear it in go()) */
  SET_EMPTY = null;
  /* P2.V F31: the dialog that held focus is gone before the view is drawn, so focus was left on the
     body and the next Tab started at the top of the page. Every branch now lands it (landFocus):
     on the question, the rapid prompt, the item to sort, the topic heading or the glossary entry.
     P2.5 F35b: a lesson hit lands on the block or table row it quoted (srchLandTopic), and the
     glossary hit on its own entry, found by key (the filter by title can leave several entries). */
  if(kind === "t"){ go("learn", id); if(!srchLandTopic(at, Q)) landFocus(); return; }
  if(kind === "g"){ go("gloss"); const inp = el("gsearch"); let landed = false;
    if(inp && GLOSS[id]){ inp.value = GLOSS[id].t; inp.dispatchEvent(new Event("input"));
      const all = Array.from(document.querySelectorAll("#glist .gitem")),
        it = all.find(x => x.dataset.gkey === id) || all.find(x => !x.classList.contains("hide"));
      const h = it && it.querySelector("h5");
      if(h){ landed = true; srchShow(it, {Q, focus:h, text:at === "d" ? it.querySelector("p") : null, pad:Math.round(window.innerHeight * 0.2)}); } }
    if(!landed) landFocus(); return; }
  if(kind === "q"){ S.mode="practice"; S.ps = {set:[id], i:0, src:"search", t0:Date.now()}; save(); render(); landFocus(); return; }
  /* P2.2 (R14) - rapid ids are strings (META.key + hash); +id made NaN and dropped the set */
  if(kind === "r"){ S.mode="rapid"; S.rf = {set:[id], i:0, t0:Date.now(), src:"search"}; save(); render(); landFocus(); return; }
  if(kind === "d"){ startDrill(id); landFocus(); return; }
  if(kind === "i"){ S.mode="spot"; S.sp = {set:[id], i:0, src:"search", name:"From search"}; buildSpotOpts(); save(); render(); landFocus(); return; }
  if(kind === "f" || kind === "m"){
    const t = ALLT().find(t => t.body.some(x => (x[0]==="f"||x[0]==="palace") && x[1]===id));
    if(!t) return;
    go("learn", t.id);
    /* P2.V sweep (K19): a diagram or scene hit lands on that diagram or scene, not on the top of
       its lesson, and focus goes to its Enlarge button (a scene: the scene itself).
       P2.5 F35b: a hit in a figure's note (K18, under a disclosure) or in a scene's story opens it
       and lands on the matched words; a hit on a scene card lands on that card. */
    const box = document.querySelector("#app .body-inner");
    const fz = kind === "f" && box ? Array.from(box.querySelectorAll("figure [data-zoomfig]")).find(b => b.dataset.zoomfig === id) : null;
    const pal = kind === "m" && box ? Array.from(box.querySelectorAll(".palace")).find(x => x.dataset.pal === id) : null;
    const pad = Math.round(window.innerHeight * 0.2), fig = fz && fz.closest("figure");
    const det = fig && at === "teach" ? fig.querySelector("details.figteach") : pal && at === "story" ? pal.querySelector("details.palstorywrap") : null;
    const card = pal && /^c\d+$/.test(at) ? pal.querySelectorAll(".palcard")[+at.slice(1)] : null;
    if(det && Q){ det.open = true; srchShow(det, {Q, focus:det.querySelector("summary") || det, text:det.querySelector(".figteachbody, .palstory"), place:fig || pal, pad}); }
    else if(card && Q) srchShow(card, {Q, focus:card, place:pal, pad});
    else if(fz && Q && at === "cap") srchShow(fig.querySelector("figcaption") || fig, {Q, focus:fz, place:fig, pad});
    else if(fz) landAt(fig, fz); else if(pal) landAt(pal);
  }
}

/* @region engine.tutor (LITERALS, engine) */
/* =====================================================================
   TUTOR DOCK — always present, sees the screen, optional Socratic mode
   ===================================================================== */
let SAMPLE = null, sampleTried = false, dockOpen = false, dockBusy = false;
async function getSample(){
  if(!sampleTried){ sampleTried = true;
    try{ if(window.claude && claude.use) SAMPLE = await claude.use("sample"); }catch(e){ SAMPLE = null; } }
  return SAMPLE;
}
/* P2.6 (F30): the tutor is never handed the answer to an item the student has not answered in
   the CURRENT attempt, in any mode, Socratic or direct. "Answered" is read from the running
   session (ps.pick, rf.pick, sp.pick, the drill run), never from the saved records: S.qs,
   S.rapid, S.spot and S.drills remember earlier attempts, so an image served again was sent with
   its diagnosis while unanswered (named came from S.spot), and a drill was sent its sorting rule,
   which answers every item, before the run was over. An unanswered screen carries `lock`, the
   item's key: the dock then sends and shows only the messages asked on that same unanswered
   item (chatFor), because a reply given on any other screen, or on this item once it was
   answered, can hold the answer. */
function screenContext(){
  const t = findT(S.cur);
  if(S.mode === "practice" && S.ps && S.ps.set && S.ps.set.length && !S.ps.done){
    const q = QS.find(x=>x.id===S.ps.set[S.ps.i]);
    /* Before the student commits, the answer and the explanation are withheld
       from the tutor entirely -- a prompt asking it not to tell is not a
       safeguard, it is an invitation. */
    const answered = S.ps.pick != null;
    if(q) return {label:"Question", detail:stripTags(q.l).slice(0,60), lock: answered ? null : "q:"+q.id,
      text: answered
        ? "The student is on this question and has ALREADY ANSWERED.\nSTEM: "+stripTags(q.s)+
          "\nASKS: "+stripTags(q.l)+"\nOPTIONS: "+q.o.map(stripTags).join(" | ")+
          "\nCORRECT: "+stripTags(q.o[q.a])+"\nTHEY CHOSE: "+stripTags(q.o[S.ps.pick])+
          "\nOFFICIAL EXPLANATION: "+stripTags(q.e)
        : "The student is on this question and has NOT answered yet. You have deliberately "+
          "not been told the correct answer, so you cannot give it away. Help them reason: "+
          "ask what the stem is pointing at, what each option would predict, and what would "+
          "have to be true for an option to be right.\nSTEM: "+stripTags(q.s)+
          "\nASKS: "+stripTags(q.l)+"\nOPTIONS: "+q.o.map(stripTags).join(" | ")};
  }
  if(S.mode === "rapid" && S.rf && S.rf.set && S.rf.set.length){
    const id = S.rf.set[S.rf.i], r = rItem(id);
    const shown = S.rf.pick != null;
    if(r) return {label:"Rapid pick", detail:stripTags(r.q).slice(0,60), lock: shown ? null : "r:"+id,
      text: shown
        ? "The student is on this rapid item and has answered.\nQ: "+stripTags(r.q)+
          "\nANSWER: "+stripTags(r.o[r.a])+(r.x?"\nNOTE: "+stripTags(r.x):"")
        : "The student is on this rapid item and has NOT answered. You have not been told "+
          "the answer. Nudge their reasoning instead.\nQ: "+stripTags(r.q)+
          "\nOPTIONS: "+r.o.map(stripTags).join(" | ")};
  }
  if(S.mode === "spot" && S.sp && S.sp.set){
    const k = S.sp.set[S.sp.i], im = IMGS[k];
    const named = S.sp.pick != null;   /* in this attempt; S.spot[k] is any earlier answer */
    if(im) return {label:"Image", detail:named ? im.n : "unidentified slide", lock: named ? null : "i:"+k,
      text: named
        ? "The student is looking at this image and has already named it.\nIMAGE: "+im.n+
          "\nDIAGNOSIS: "+im.dx+"\nWHAT TO SEE: "+stripTags(im.look)+
          "\nMARKED FEATURES: "+(im.ann||[]).map((a,i)=>(i+1)+". "+stripTags(a.l)).join("  ")
        : "The student is trying to identify this image cold and has NOT committed yet. "+
          "You have not been told the diagnosis. Ask them what they can actually see."};
  }
  if(S.mode === "drill" && S.dr){
    const d = DRILLS.find(x=>x.id===S.dr.id), st = S.dr;
    /* the rule is on screen only on the end screen (order: once checked); until then the tutor
       gets what the student sees: the item or the steps, never a side, a position or the rule */
    /* P2.V F21: an answered item stays on screen, with its verdict, until Next (drJudged); the
       tutor is given that item and that verdict, as it is for an answered question or image */
    const jx = d && d.kind !== "order" ? drJudged(d, st) : -1;
    const over = d && (d.kind === "order" ? !!st.checked : (st.i||0) >= (st.order||[]).length && jx < 0);
    if(d && over) return {label:"Drill", detail:d.t, text:"Discrimination drill: "+d.t+
      ". The student has finished this run and sees the result.\nKEY DISCRIMINATOR: "+stripTags(d.key||"")};
    if(d && jx >= 0) return {label:"Drill", detail:d.t, text:"Discrimination drill: "+d.t+
      ". The student is part-way through a run and has ALREADY ANSWERED the item on screen; its verdict is showing."+
      "\nSORT INTO: "+(d.kind === "multi" ? (d.cols||[]).map(c=>stripTags(c.l)) : [stripTags(d.a), stripTags(d.bb)]).join(" | ")+
      "\nITEM ON SCREEN: "+stripTags(d.items[jx][0])+"\nTHE VERDICT THEY SEE: "+stripTags(st.last.msg||"")};
    if(d){ const step = j => stripTags(d.items[j]);
      return {label:"Drill", detail:d.t, lock:"d:"+d.id,
      text:"Discrimination drill: "+d.t+". The student is part-way through a run and has NOT finished it. You have "+
        "deliberately not been told the rule or where any item belongs, so you cannot give it away. Help them "+
        "reason about what is in front of them.\n"+(d.kind === "order"
        ? "TASK: "+stripTags(d.q||"")+"\nTHEIR SEQUENCE SO FAR: "+((st.placed||[]).map(step).join(" > ") || "nothing placed yet")+
          "\nSTEPS STILL TO PLACE (in the shuffled order shown): "+(st.pool||[]).map(step).join(" | ")
        : "SORT INTO: "+(d.kind === "multi" ? (d.cols||[]).map(c=>stripTags(c.l)) : [stripTags(d.a), stripTags(d.bb)]).join(" | ")+
          "\nITEM ON SCREEN: "+stripTags(d.items[st.order[st.i]][0]))}; }
  }
  if(S.mode === "learn" && t){
    /* The lesson on screen. The pretest, self-explanation and recall-grid rows are never part of
       it, answered or not, so their keys and notes stay out. With "Blank out key terms" on, every
       term still blank on screen is blanked here too (P2.6), or the tutor would read them out. */
    let text = stripTags(t.body.map(x => x[0]==="p"?x[1] : x[0]==="h"?("## "+x[1]) :
      x[0]==="call"?(x[2]+": "+x[3]) : x[0]==="why"?(x[1]+" "+x[2]) :
      x[0]==="steps"?stepsText(x) :
      x[0]==="t"?(x[1].join(" | ")+" :: "+x[2].map(r=>r.join(" | ")).join(" ;; ")) : "").join("\n"));
    const blanks = S.cloze ? [...new Set([...document.querySelectorAll("#app .cz.blank")].map(s => s.textContent.trim()).filter(Boolean))] : [];
    blanks.sort((a, b) => b.length - a.length).forEach(w => { text = text.split(w).join("_____"); });
    return {label:"Reading", detail:t.t, text:"The student is reading this topic"+
      (blanks.length ? ", with key terms blanked out to test their recall (shown as _____; you have not been told them)" : "")+
      ".\nTOPIC: "+t.t+" ("+yWord(t)+" for "+YAXES[yAxis()]+")\n"+text.slice(0,6000)};
  }
  if(S.mode === "weak"){
    const ev = diagnose().filter(e=>e.flag).slice(0,6);
    return {label:"Weak spots", detail:ev.length+" flagged",
      text:"Weak spots page. Currently flagged: "+(ev.map(e=>e.t.t+" ("+stripTags(e.reasons.join("; "))+")").join(" | ") || "none yet")};
  }
  return {label:META.short, detail:"Overview", text:"The overview page of the "+META.name+" block."};
}
/* P2.V N4 - the floating Ask button never sits on a control. After every render, scroll,
   resize, click, key or disclosure toggle it checks what is under it; while a button, link,
   field, disclosure or where-to-look line is there, it steps aside (hidden and unclickable)
   until the page moves on. The ? key still opens the dock. On a phone it is a short "Ask"
   pill, so it has less to cover. */
let DODGE_RAF = 0, DODGE_RO = null;
const DODGE_SEL = 'button, a[href], input, select, textarea, summary, [tabindex="0"], [role="button"], .qsay, .rfsay, .ptsay';
function dockDodge(){
  DODGE_RAF = 0;
  const b = el("dockopen"), app = el("app"); if(!b || !app) return;
  /* content that grows or shrinks without a scroll (web fonts, an opened note) moves things too */
  if(!DODGE_RO && window.ResizeObserver){ DODGE_RO = new ResizeObserver(dockDodgeSoon); DODGE_RO.observe(app); }
  if(document.activeElement === b){ b.classList.remove("dodge"); return; }
  const r = b.getBoundingClientRect(), m = 6;
  const hit = Array.from(app.querySelectorAll(DODGE_SEL)).some(x => {
    const q = x.getBoundingClientRect();
    return q.width > 0 && q.height > 0 && q.right > r.left - m && q.left < r.right + m && q.bottom > r.top - m && q.top < r.bottom + m;
  });
  b.classList.toggle("dodge", hit);
}
function dockDodgeSoon(){ if(!DODGE_RAF) DODGE_RAF = requestAnimationFrame(dockDodge); }
["scroll", "resize"].forEach(t => window.addEventListener(t, dockDodgeSoon, {passive:true}));
["click", "keyup", "toggle", "load"].forEach(t => document.addEventListener(t, dockDodgeSoon, true));
/* P2.6: the messages the dock may show and send. On an unanswered item (ctx.lock) only those asked
   on that same unanswered item; the rest stay in S.chat and come back once it is answered. */
const chatFor = lock => (S.chat||[]).filter(m => !lock || m.k === lock);
function paintDock(){
  let host = el("dockhost");
  if(!host){ host = document.createElement("div"); host.id = "dockhost"; document.body.appendChild(host); }
  const ctx = screenContext();
  if(!dockOpen){
    host.innerHTML = `<button class="dockbtn" id="dockopen" aria-label="Ask about this"><span>Ask<span class="dlx"> about this</span></span> <span class="kbd">?</span></button>`;
    el("dockopen").onclick = () => { dockOpen = true; paintDock(); };
    dockDodgeSoon();
    return;
  }
  const msgs = chatFor(ctx.lock).slice(-14), held = !!ctx.lock && (S.chat||[]).some(m => m.k !== ctx.lock);
  host.innerHTML = `<div class="dock">
    <div class="dockhead"><b>Ask Claude</b>
      <span class="ctx">${esc(ctx.label)}<br>${esc(String(ctx.detail).slice(0,40))}</span>
      <button class="dockclose" id="dockclose" aria-label="close">&times;</button></div>
    <div class="dockbody" id="dockbody">
      ${held ? '<div class="dmsg sys">Earlier messages are hidden until you answer this one, so they cannot give it away.</div>' : ""}
      ${msgs.length ? msgs.map(m=>`<div class="dmsg ${m.r}">${esc(m.t)}</div>`).join("")
        : '<div class="dmsg sys">I can see whatever is on your screen right now — the topic you are reading, the question you are on, the image you are looking at. Ask me anything about it, or use a shortcut below.</div>'}
    </div>
    <div class="dockquick">
      <button data-q="explain">Explain this differently</button>
      <button data-q="simple">Like I am 15</button>
      ${S.mode==="practice"&&S.ps&&S.ps.shown&&!S.ps.done?'<button data-q="wrong">Why is my answer wrong?</button>':''}
      <button data-q="test">Quiz me on this</button>
      <button data-q="hook">Memory hook</button>
      <button data-q="clear">Clear</button>
    </div>
    <button class="socratic" id="socbtn" aria-pressed="${!!S.socratic}">
      <span class="sw"></span><span>Socratic mode — guide me with questions instead of telling me</span></button>
    <div class="dockfoot">
      <textarea id="dockin" rows="1" placeholder="Ask about what is on screen…"></textarea>
      <button class="btn acc" id="docksend"${dockBusy?" disabled":""}>Send</button>
    </div></div>`;
  el("dockclose").onclick = () => { dockOpen = false; paintDock(); };
  el("socbtn").onclick = () => { S.socratic = !S.socratic; save(); paintDock(); };
  host.querySelectorAll("[data-q]").forEach(b => b.onclick = () => {
    const k = b.dataset.q;
    if(k === "clear"){ S.chat = []; save(); paintDock(); return; }
    askDock({explain:"Explain this in a completely different way from how it is written.",
             simple:"Explain this at about a 10th grade reading level with one concrete everyday analogy.",
             wrong:"Why is the answer I chose wrong, and what in the stem should have ruled it out?",
             test:"Ask me three short questions about this, one at a time, starting with the first.",
             hook:"Give me a vivid memory hook or short visual scene for this that will actually stick."}[k]);
  });
  const ta = el("dockin");
  ta.oninput = () => { ta.style.height = "auto"; ta.style.height = Math.min(120, ta.scrollHeight)+"px"; };
  ta.onkeydown = e => { if(e.key === "Enter" && !e.shiftKey){ e.preventDefault(); el("docksend").click(); } };
  el("docksend").onclick = () => { const v = ta.value.trim(); if(v){ ta.value=""; askDock(v); } };
  const body = el("dockbody"); if(body) body.scrollTop = body.scrollHeight;
  if(!dockBusy) ta.focus();
}
async function askDock(userText){
  const sample = await getSample();
  /* P2.6: every message is tagged with the screen's lock, so the answer-free exchange on an
     unanswered item is the only history sent (and shown) while it is unanswered (chatFor) */
  const ctx = screenContext(), k = ctx.lock || null;
  S.chat = S.chat || [];
  S.chat.push({r:"me", t:userText, k});
  if(!sample){
    S.chat.push({r:"ai", t:"Claude is not reachable in this view, so the built-in explanations are your fallback. Everything else on the page still works.", k});
    save(); paintDock(); return;
  }
  dockBusy = true; S.chat.push({r:"ai", t:"Thinking…", k}); save(); paintDock();
  /* On an unanswered item the tutor holds no answer, so neither mode may tell it to give one */
  const style = (S.socratic
    ? "SOCRATIC MODE: do not give the answer outright. Ask ONE short leading question at a time that walks them toward it, then stop and wait. If their next reply shows they are stuck, give a hint"+(k ? "." : ", then the answer.")
    : "Answer directly and concretely.")
    + (k ? " The student has not answered what is on screen yet and you have not been told the answer, so do not name any option, side, position or diagnosis as the right one." : "");
  const prior = chatFor(k).filter(m => m.t !== "Thinking…").slice(-9, -1)
    .map(m => ({role: m.r === "me" ? "user" : "assistant", content: m.t}));
  const head =
    "You are a tutor embedded in "+(META.title ? META.title+", " : "")+"a medical-school study tool, in the "+META.name+" block. "+
    "The student can see the screen described below; refer to it naturally.\n\n=== WHAT IS ON SCREEN ===\n"+
    ctx.text+"\n=== END SCREEN ===\n\n"+style+
    " Keep it under 200 words, plain flowing prose at about a 10th grade reading level, no headings and no bullet lists. "+
    "Be accurate and specific to what "+EXAM_NAME+" tests. If something is genuinely uncertain, say so.\n\nStudent: ";
  try{
    const turns = prior.concat([{role:"user", content: head + userText}]);
    const r = await sample(turns, {modelTier:"default",
      onText:({text}) => { S.chat[S.chat.length-1] = {r:"ai", t:text, k}; paintDock(); }});
    S.chat[S.chat.length-1] = {r:"ai", t:r.text, k};
  }catch(e){
    S.chat[S.chat.length-1] = {r:"ai", t:"Could not reach Claude just now. Everything else on this page still works.", k};
  }
  dockBusy = false; save(); paintDock();
}

/* @region engine.svg-fitter (ENGINE, engine) */
/* =====================================================================
   SVG TEXT FITTER — measured at runtime, so no label can ever escape the
   box it belongs to, whatever the font ends up rendering at.
   ===================================================================== */
function fitSvgText(svg){
  if(!svg || svg.dataset.fitted) return;
  let vb; try{ vb = svg.viewBox.baseVal; }catch(e){ return; }
  const bb = e => { try{ return e.getBBox(); }catch(_){ return null; } };
  /* P1.8: rect.hlbox is a highlight halo hugging one label, not a box the label must fit in;
     counted as a holder it would squeeze the very text it highlights on a re-fit. */
  const rects = [...svg.querySelectorAll("rect:not(.hlbox)")].map(r=>{ const b = bb(r); if(!b) return null;
      return {x:b.x, y:b.y, w:b.width, h:b.height, area:b.width*b.height}; })
    .filter(r => r && r.w > 40 && r.h > 18);
  [...svg.querySelectorAll("text")].forEach(t => {
    const b = bb(t); if(!b || !b.width) return;
    const anchor = (t.getAttribute("text-anchor")||"start");
    /* find the tightest rect this label sits inside */
    const cx = b.x + 2, cy = b.y + b.height/2;
    const holders = rects.filter(r => cx>=r.x-1 && cx<=r.x+r.w+1 && cy>=r.y-1 && cy<=r.y+r.h+1);
    let right = vb.width - 4;
    if(holders.length){ const r = holders.sort((a,c)=>a.area-c.area)[0]; right = r.x + r.w - 6; }
    const avail = right - b.x;
    if(avail <= 12) return;
    let len = 0; try{ len = t.getComputedTextLength(); }catch(e){ len = b.width; }
    if(len <= avail) return;
    /* 1. shrink the font a little */
    const cs = window.getComputedStyle(t);
    const fs = parseFloat(t.getAttribute("font-size") || cs.fontSize) || 11;
    const target = Math.max(8.4, fs * (avail/len) * 0.99);
    t.setAttribute("font-size", target.toFixed(2));
    let len2 = len; try{ len2 = t.getComputedTextLength(); }catch(e){}
    /* 2. if still too wide, compress glyph spacing to exactly fit */
    if(len2 > avail && anchor === "start"){
      t.setAttribute("textLength", Math.max(10, avail).toFixed(1));
      t.setAttribute("lengthAdjust", "spacingAndGlyphs");
    }
  });
  svg.dataset.fitted = "1";
}
function fitAllFigures(){ document.querySelectorAll("figure svg.dia").forEach(fitSvgText); }
/* the first pass measures fallback-font metrics; re-run once the real faces land */
if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>{
  document.querySelectorAll("figure svg.dia").forEach(sv=>{ delete sv.dataset.fitted; fitSvgText(sv); });
});

/* @region engine.wiring (ENGINE, engine) */
/* =====================================================================
   WIRING
   ===================================================================== */
/* P2.V F13 sweep: the popup opener, moved out of wire() unchanged so rerenderHere() can
   reopen the popups a same-view redraw would otherwise close. */
function glossOpen(s){
  const g = GLOSS[s.dataset.g]; if(!g) return;
  /* The popup is a block, so it has to land in a block context. Now that terms
     link inside headings and step titles too, .sechead (a flex row) would take
     it as a third flex item beside the heading, and .ut would split the step
     from its own description. Both hand it to the row above instead. */
  /* A term inside a table cell used to take the td as its host, so the popup
     was inserted into the tr as a stray div and the browser billed it as an
     extra anonymous cell: every column width re-flowed and the row roughly
     trebled in height. Same treatment as .sechead and .ut - hand it to the
     whole table wrapper, so it opens below the table and the grid is intact. */
  let host = s.closest(".prose, .call, .ans, .tblwrap, li, .ud, .ptwhy, .unpackrow, .sechead") || s.parentElement;
  const tbl = s.closest("table");
  if(tbl && tbl.contains(host)) host = tbl;   /* a table with no .tblwrap: still escape the rows */
  /* A caption is the same trap as a table row: it matches nothing in the list
     above, so the popup was dropped into the caption column and came out
     183px wide instead of the usual 490. A figure is one indivisible visual,
     caption and legend included, so the popup opens below the whole thing. */
  const fg = s.closest("figure");
  if(fg) host = fg;
  /* Memory-scene cards and figure legends nest flex inside grid, and either
     one bills an extra child as one more column, so escaping the caption is
     not enough on its own. Climb until the popup's parent lays its children
     out as blocks and the popup gets the full body width. */
  for(let up = 0; up < 6 && host.parentElement; up++){
    const d = getComputedStyle(host.parentElement).display;
    if(d.indexOf("flex") < 0 && d.indexOf("grid") < 0) break;
    host = host.parentElement;
  }
  /* The toggle keyed on the HOST alone, so with two terms in one block -- 109
     of the links share a host -- clicking the second only closed the first
     one's popup and showed nothing. It keys on the term as well now: another
     term REPLACES the popup, the same term still closes it. */
  const nx = host.nextElementSibling;
  if(nx && nx.classList && nx.classList.contains("gpop")){
    const same = nx.dataset.gfor === s.dataset.g;
    glossClose(nx, false);
    if(same) return;
  }
  /* P2.V F10: the term is a disclosure button (aria-expanded, aria-controls); the popup's close
     button and Escape (glossKeydown) close it and hand focus back to the term */
  const div = document.createElement("div"); div.className = "gpop";
  div.id = "gpop" + (++GPOP_SEQ); div.dataset.gseq = GPOP_SEQ; div.__term = s;
  div.setAttribute("role", "group"); div.setAttribute("aria-label", g.t + ", definition");
  div.dataset.gfor = s.dataset.g; div.dataset.gix = lessonTerms().indexOf(s);
  div.innerHTML = '<button type="button" class="gclose" aria-label="Close the definition">&times;</button><h6>'+esc(g.t)+'</h6>'+fmt(g.d);
  div.querySelector(".gclose").onclick = ()=>glossClose(div, true);
  div.querySelectorAll(".gterm").forEach(wireTerm);
  host.parentElement.insertBefore(div, host.nextSibling);
  s.setAttribute("aria-expanded", "true"); s.setAttribute("aria-controls", div.id);
}
let GPOP_SEQ = 0;
function glossClose(div, refocus){
  const s = div.__term; div.remove();
  if(!s || !s.isConnected) return;
  s.setAttribute("aria-expanded", "false"); s.removeAttribute("aria-controls");
  if(refocus) try{ s.focus({preventScroll:true}); }catch(e){}
}
/* Escape closes the popup the reader is in or on (else the newest one) and returns focus to its
   term. It leaves the key to the lightbox, the search box and any field being typed in. */
function glossKeydown(e){
  if(e.key !== "Escape" || el("lightbox") || el("searchwrap")) return;
  const a = document.activeElement, app = el("app");
  if(a && !(app && (app.contains(a) || a.contains(app)))) return;   /* body and main hold #app */
  const pops = Array.from(document.querySelectorAll("#app .gpop")); if(!pops.length) return;
  const p = (a && a.closest && a.closest(".gpop")) || pops.find(x => x.__term === a)
         || pops.reduce((m, x) => (+x.dataset.gseq > +m.dataset.gseq ? x : m));
  e.preventDefault(); glossClose(p, true);
}
document.addEventListener("keydown", glossKeydown);
/* every role="button" span of the lesson answers Enter and Space as well as a click; a key on a
   cloze blank nested inside a term belongs to the blank (e.target), not to the term */
function wireTerm(s){
  if(!s.hasAttribute("aria-expanded")) s.setAttribute("aria-expanded", "false");
  s.onclick = ()=>glossOpen(s);
  s.onkeydown = e => { if(e.target !== s || (e.key !== "Enter" && e.key !== " ")) return; e.preventDefault(); glossOpen(s); };
}
function wire(){
  const app = el("app");
  app.querySelectorAll("[data-m]").forEach(b => b.onclick = ()=>go(b.dataset.m));
  /* P2.V F42: closing the recovery notice redraws the view without it and parks focus on the view */
  app.querySelectorAll("[data-pnote-x]").forEach(b => b.onclick = ()=>{ PATH_NOTE = null; render();
    const m = document.querySelector("main"); if(m){ if(!m.hasAttribute("tabindex")) m.setAttribute("tabindex", "-1"); try{ m.focus({preventScroll:true}); }catch(e){} } });
  app.querySelectorAll("[data-rnote-x]").forEach(b => b.onclick = ()=>{ RENDER_NOTE = null; render();
    const m = document.querySelector("main"); if(m){ if(!m.hasAttribute("tabindex")) m.setAttribute("tabindex", "-1"); try{ m.focus({preventScroll:true}); }catch(e){} } });
  /* button[data-t], not [data-t]: a container carrying the attribute would swallow
     every click inside it and re-navigate, which is what broke the recall check. */
  app.querySelectorAll("button[data-t]").forEach(b => b.onclick = ()=>go("learn", b.dataset.t));
  app.querySelectorAll("[data-gototopic]").forEach(b => b.onclick = ()=>go("learn", b.dataset.gototopic));
  const railT = app.querySelector(".railtoggle");
  if(railT) railT.onclick = ()=>{ const open = railT.parentElement.classList.toggle("open"); railT.setAttribute("aria-expanded", String(open)); };
  app.querySelectorAll("[data-stage]").forEach(b => b.onclick = ()=>openStage(b.dataset.stage));
  wireBld(app);
  app.querySelectorAll("[data-calday]").forEach(b => b.onclick = ()=>{
    CAL_SEL = (CAL_SEL === b.dataset.calday) ? null : b.dataset.calday; render(); });
  const exIn = el("examdate");
  if(exIn){
    /* P2.V F6 - change fires on every segment edit. A complete valid date commits at
       once and the view is rebuilt AROUND the field (renderAround), so the countdown,
       banner and plan follow while the caret stays in the segment being typed. A half
       typed or impossible value commits nothing; it snaps back only when the student
       leaves the field or presses Enter, never under their fingers. */
    exIn.onchange = ()=>{ if(setExamDate(exIn.value)) renderAround(exIn); };
    const settle = ()=>{ if(!parseExamDate(exIn.value)) exIn.value = examISO(); };
    exIn.onblur = settle;
    exIn.onkeydown = e => { if(e.key === "Enter"){ e.preventDefault(); settle(); } };
  }
  const paceIn = el("pacedays");
  if(paceIn) paceIn.onchange = ()=>{
    S.paceDays = Math.min(21, Math.max(1, +paceIn.value || 5));
    /* P3.3 - choosing a pace starts its block here and now. Without this the
       day count ran from the first day ever studied, so a student 10 days in
       who asked for 5 more days was told "day 5 of 5" and had the entire
       remainder budgeted into today instead of a fifth of it. */
    S.paceSetAt = Date.now();
    save(); render();
  };
  app.querySelectorAll("[data-plan]").forEach(b => b.onclick = ()=>{
    const k = todayKey(), d = S.days[k] = S.days[k] || {acts:0, mins:0, done:[]};
    if(!Array.isArray(d.done)) d.done = [];
    if(d.done.indexOf(b.dataset.plankey) < 0) d.done.push(b.dataset.plankey);
    const spec = b.dataset.plan, i = spec.indexOf(":"), kind = spec.slice(0,i), arg = spec.slice(i+1);
    if(kind === "stage") openStage(arg);
    else if(kind === "ps") startSet(arg);
    else if(kind === "rf") startRapid(arg);
    else if(kind === "sp") startSpot(arg);
    else if(kind === "dr") startDrill(arg);
  });
  app.querySelectorAll(".cz").forEach(s => { if(S.cloze) s.classList.add("blank");
    s.onclick = ()=>s.classList.toggle("blank");
    s.onkeydown = e => { if(e.key==="Enter"||e.key===" "){ e.preventDefault(); s.classList.toggle("blank"); } }; });
  CZ_DRAWN = !!S.cloze;
  const ct = el("clozeToggle"); if(ct) ct.onclick = ()=>{ S.cloze = !S.cloze; rerenderHere(); };
  app.querySelectorAll(".gterm").forEach(wireTerm);
  app.querySelectorAll("[data-glosshome]").forEach(b => b.onclick = ()=>glossGo(b.dataset.glosshome));
  /* [data-raw] (Hide markup) is wired in wirePins since P2.5, so the lightbox copy works too */
  /* P3.5 - button[data-flag], not [data-flag]: an ancestor carrying the
     attribute would swallow every click inside it, which is the bug that once
     made every click in a topic card re-navigate. Toggling deliberately does
     NOT call render(): main is rebuilt wholesale, so re-rendering in the
     middle of a question would move the page under the student. The button
     repaints itself instead, and their place is untouched. */
  app.querySelectorAll("button[data-flag]").forEach(b => b.onclick = ()=>{
    const kid = unflagRef(b.dataset.flag), at = flagIx(kid[0], kid[1]);
    const note = b.parentElement ? b.parentElement.querySelector("input[data-flagnote]") : null;
    if(at >= 0){ flagList().splice(at, 1); if(note){ note.value = ""; note.hidden = true; } }
    else { flagList().push({kind:kid[0], id:kid[1], note:"", ts:Date.now()}); if(note) note.hidden = false; }
    const on = flagIx(kid[0], kid[1]) >= 0;
    b.classList.toggle("on", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
    const nm = on ? "Flagged - press to remove the flag" : "Flag this item for another look";
    b.setAttribute("aria-label", nm); b.setAttribute("title", nm);
    b.textContent = on ? "Flagged" : "Flag this";
    save();
    /* The note is optional and the flag is already saved without one. Opening
       the box with the caret in it is the entire prompt: a control that
       demanded a sentence before it would record anything would not be used. */
    if(on && note){ try{ note.focus({preventScroll:true}); }catch(e){} }
  });
  app.querySelectorAll("input[data-flagnote]").forEach(n => {
    const write = ()=>{ const kid = unflagRef(n.dataset.flagnote), at = flagIx(kid[0], kid[1]);
      if(at < 0) return; flagList()[at].note = n.value.slice(0,140); save(); };
    n.oninput = ()=>{ clearTimeout(n.__nt); n.__nt = setTimeout(write, 500); };
    n.onchange = write;
    n.onkeydown = e => { if(e.key === "Enter"){ e.preventDefault(); clearTimeout(n.__nt); write(); n.blur(); } };
  });
  /* Unflagging from the Weak Spots list DOES have to redraw, because the row
     itself must go. rerenderHere() keeps the scroll position while it does,
     and restoreFocus() lands on the list the removed row was in. */
  app.querySelectorAll("button[data-unflag]").forEach((b, pos) => b.onclick = ()=>{
    const kid = unflagRef(b.dataset.unflag), at = flagIx(kid[0], kid[1]);
    if(at >= 0) flagList().splice(at, 1);
    rerenderHere();
    /* The row the reader was standing on has just stopped existing, so
       restoreFocus() would fall all the way back to the main landmark and the
       next Tab would start again from the top of the page. Stand them on the
       next row of the same list instead, or on the section once it is empty. */
    const left = document.querySelectorAll("#app button[data-unflag]");
    const next = left.length ? left[Math.min(pos, left.length - 1)] : el("flagsec");
    if(next){ try{ next.focus({preventScroll:true}); }catch(e){} }
  });
  wirePretest(app); wireSexp(app); wireGrid(app); wirePins(app); wireZoom(app);
  wirePractice(app); wireDrill(app); wireRapid(app); wireSpot(app);
  if(el("pace")) startPace();
  fitAllFigures();
  /* P2.V F29/F31 - every result of the three backup buttons goes to #live too; #bkmsg is not a live region */
  const bk = t => { const n = el("bkmsg"); if(n) n.textContent = t; sayLive(t); };
  const eb = el("expbtn");
  if(eb) eb.onclick = async ()=>{
    const payload = JSON.stringify({app:"step1", block:META.key,
      saved:new Date().toISOString(), state:S, hub:hubLoad()}, null, 1);
    /* P3.5 - S.flags rides inside state because it is part of S, but nobody
       can tell that from a button marked "Download my progress". Counting the
       flags in the confirmation is how the student learns that the flags and
       their notes are in the backup too. */
    const nf = (S.flags || []).length;
    const withFlags = nf ? " Includes " + nf + " flagged item" + (nf > 1 ? "s" : "") + "." : "";
    const name = "step1-" + META.key + "-" + todayKey() + ".json";
    /* The artifact viewer blocks plain download links, so the file has to be
       handed over through the downloads capability. */
    try{
      const dl = window.claude && window.claude.use ? await window.claude.use("downloads") : null;
      if(dl){ await dl.save({filename:name, data:payload});
        bk("Saved." + withFlags); return; }
    }catch(e){
      bk((e && e.code === "cancelled") ? "Save canceled." : "Could not save the file.");
      if(e && e.code === "cancelled") return;
    }
    /* running as a plain local file: the ordinary link still works there */
    try{
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([payload], {type:"application/json"}));
      a.download = name; document.body.appendChild(a); a.click(); a.remove();
      bk("Saved to your downloads." + withFlags);
    }catch(e2){ bk("Downloading is not available here."); }
  };
  const ibb = el("impbtn"); if(ibb) ibb.onclick = ()=>{ const f = el("impfile"); if(f){ f.value = ""; f.click(); } };
  const ib = el("impfile");
  if(ib) ib.onchange = ()=>{
    const f = ib.files && ib.files[0]; if(!f) return;
    const rd = new FileReader();
    rd.onload = ()=>{
      try{
        const d = JSON.parse(rd.result);
        if(!d || d.app !== "step1" || !d.state) throw new Error("not a progress file");
        if(d.block !== META.key) throw new Error("that file is from the " + d.block + " block");
        S = Object.assign(blank(), d.state);
        /* P2.V F29 - the whole hub used to be replaced by the file's copy, which put every OTHER
           block's items back to where they stood on the day of the export. Only this block's items
           are replaced: they are dropped here and written again from the restored state by save(). */
        const h = hubLoad();
        Object.keys(h.items || {}).forEach(k => { if(h.items[k] && h.items[k].b === META.key) delete h.items[k]; });
        hubSave(h);
        /* the confirmation is on the Path (a file saved mid-set would otherwise open on that set) */
        S.mode = "path";
        HUBCACHE = null; migrateRapidKeys(); repairState(); save(); render();
        const when = new Date(d.saved), nq = Object.keys(S.qs || {}).length, nr = Object.keys(S.rapid || {}).length;
        const msg = "Restored the progress saved " + (isFinite(+when) ? when.toLocaleString(undefined, {month:"short", day:"numeric", hour:"numeric", minute:"2-digit"}) : "in that file")
          + ": " + nq + " question" + (nq === 1 ? "" : "s") + " and " + nr + " rapid pick" + (nr === 1 ? "" : "s") + " answered. It replaced what this browser held for this block.";
        bk(msg);
      }catch(e){ bk("Could not restore: " + e.message); }
    };
    rd.readAsText(f);
  };
  const rb = el("rstbtn");
  if(rb) rb.onclick = ()=>{
    if(rb.dataset.armed !== "1"){
      rb.dataset.armed = "1"; rb.textContent = "Really erase it? Click again";
      bk("This wipes every answer, score and review schedule for this block. Download a copy first if you want one.");
      setTimeout(()=>{ if(rb){ rb.dataset.armed=""; rb.textContent="Start this block over"; } }, 6000);
      return;
    }
    const h = hubLoad();
    Object.keys(h.items||{}).forEach(k => { if(h.items[k].b === META.key) delete h.items[k]; });
    hubSave(h); HUBCACHE = null;
    S = blank(); save(); render();
    /* P2.V F29 - it used to end on the default line, with nothing to say the reset happened */
    bk("This block was started over: its answers, scores, review dates and flags are erased. The exam date and other blocks are kept.");
  };
  const gs = el("gsearch");
  if(gs) gs.oninput = ()=>{ const q = gs.value.toLowerCase().trim();
    el("glist").querySelectorAll(".gitem").forEach(it => it.classList.toggle("hide", !!q && it.dataset.gk.indexOf(q) === -1)); };
  restoreScroll();
}
/* P2.4 (K14): .ptwhy leads with the picked wrong option's own note (p.w, keyed by option
   text, so the load permutation cannot misalign it), then p.why. Every other wrong option
   keeps data-why and toggles its own .optwhy directly under it; the keyed option is
   aria-disabled.
   P2.V F13: the pick used to live only in the DOM, so any re-render brought the row back
   unanswered and a second answer, given after reading the why, overwrote ok[i]. Now the
   first answer is stored (ok[i], pick[i]) and never rewritten; a later click on an answered
   row only toggles a why. The view is then redrawn from S like every other answer. The last
   answer marks the pretest done and keeps it on the page (keep) until the student leaves
   the topic, so the whys can still be read (repairState drops keep). */
function wirePretest(app){
  app.querySelectorAll(".ptopt").forEach(b => b.onclick = ()=>{
    const t = findT(S.cur), i = +b.dataset.pti, j = +b.dataset.ptj;
    const p = t && t.pretest && t.pretest[i]; if(!p) return;
    const rec = S.pre[t.id] = S.pre[t.id] || {ok:[]};
    if(!Array.isArray(rec.ok)) rec.ok = [];
    if(ptAnswered(rec, i)){ if(b.dataset.why != null) ptToggleWhy(t, i, b); return; }
    rec.ok[i] = (j === p.a);
    (rec.pick = Array.isArray(rec.pick) ? rec.pick : [])[i] = p.o[j];
    delete PT_OPEN[t.id+":"+i];
    if(t.pretest.every((_,k) => ptAnswered(rec, k))){ rec.done = true; rec.keep = true; }
    bumpDay(0); rerenderHere();
    /* P2.V F31: the pick was drawn (green or red, and its note) but never spoken */
    sayLive(j === p.a ? "Right: " + stripTags(String(p.o[j])) + "."
      : "Not quite. You picked " + stripTags(String(p.o[j])) + "; the answer is " + stripTags(String(p.o[p.a])) + ". Why your pick is wrong is shown under the question.");
  });
}
function ptToggleWhy(t, i, b){
  const w = toggleCtlWhy(b); if(!w) return;
  (PT_OPEN[t.id+":"+i] = PT_OPEN[t.id+":"+i] || {})[b.dataset.why] = !w.hidden;
}
/* P2.V F13: the buttons are disabled once answered, but the record is guarded as well, so
   nothing (a stale handler, a scripted click) can replace the first pick. */
function wireSexp(app){
  app.querySelectorAll("[data-sx]").forEach(b => b.onclick = ()=>{
    if(S.sexp[b.dataset.sx] != null) return;
    S.sexp[b.dataset.sx] = +b.dataset.sxi; bumpDay(0); rerenderHere();
    /* P2.V F31: focus goes to the explanation below, which does not say whether the pick was right */
    { const t = findT(S.cur), row = t && (t.body||[]).find(x => x && x[0] === "sexp" && x[1] && x[1].id === b.dataset.sx), o = row && row[1];
      if(o) sayLive(+b.dataset.sxi === o.a ? "Your pick is right." : "Not the best reasoning. The right one: " + stripTags(String(o.o[o.a])) + "."); }
    /* P2.V sweep (F14): the options come back disabled and cannot hold focus, and the focus
       fallback climbed to the whole lesson, so the next Tab restarted at its top. The reader
       now goes on from the explanation that just appeared. */
    const w = document.querySelector('.checkpoint[data-sexp="' + CSS.escape(b.dataset.sx) + '"] .ptwhy');
    if(w){ w.setAttribute("tabindex", "-1"); try{ w.focus({preventScroll:true}); }catch(e){} } });
}
/* @region engine.lightbox (ENGINE, engine) */
/* ---------- lightbox: every figure and photo gets a full-size view on demand ---------- */
/* P4 repair - measured at a 400px viewport, Enlarge used to SHRINK every one of
   the 31 diagrams: 360px in the column (median glyph 4.0px) became 298px in the
   lightbox (3.31px) with zero pan, so no figure was readable on a phone at all.
   The svg is now laid out at its own viewBox width times a zoom the reader
   drives. The opening zoom is max(1, fit) - on a 1280px desktop that is still
   exactly the fit width the lightbox always used, so nothing there moves; on a
   phone it is 1.0, i.e. 900px and a 10px glyph. Sideways pan uses the box
   figHTML() already wraps the svg in; the lightbox pans vertically itself.
   Photographs carry no svg.dia, so this strip never appears for them; they get their
   own (lbPhotoInit, below). */
let LB_Z = 1;
function lbVbw(sv){ let w = 900; try{ w = sv.viewBox.baseVal.width || 900; }catch(e){} return w; }
function lbFitZ(sv){ return Math.max(240, sv.parentElement.clientWidth) / lbVbw(sv); }
/* P6 fix - the open path clamps to max(1, fit); this button did not, so on a
   400px phone "Fit width" meant 33 percent - 298px, NARROWER than the 360px the
   figure already had in the column, one tap from undoing the P4 repair. Both
   paths now share this floor. At 1280 fit is 1.22 so it never bites and the
   button still snaps 400 percent back to 1100px; where it bites it relabels. */
function lbBaseZ(sv){ return Math.max(1, lbFitZ(sv)); }
function lbApplyZoom(box){
  const sv = box.querySelector("svg.dia"); if(!sv) return;
  sv.style.width = Math.round(lbVbw(sv) * LB_Z) + "px";
  sv.style.minWidth = "0"; sv.style.maxWidth = "none";
  const out = box.querySelector(".lbzpct");
  if(out) out.textContent = Math.round(LB_Z * 100) + "%";
}
/* Widening the svg can itself pull in the lightbox's vertical scrollbar, which
   then narrows the pane by about 15px - so a width measured before that lands
   15px too wide and puts a needless sideways scrollbar under a short desktop
   figure. One re-measure settles it, and the 5% guard keeps a deliberate zoom
   (200%, 400%) from being dragged back down to the fit width. */
function lbZoomTo(box, z){
  const sv = box.querySelector("svg.dia"); if(!sv) return;
  LB_Z = z; lbApplyZoom(box);
  const f = lbFitZ(sv);
  if(LB_Z > f && LB_Z <= f * 1.05){ LB_Z = f; lbApplyZoom(box); }
}
function lbZoomInit(box){
  const sv = box.querySelector("svg.dia"), fig = box.querySelector("figure");
  if(!sv || !fig) return;
  /* the pane is the scroller, so a keyboard user needs to be able to land on it */
  const pane = sv.parentElement;
  pane.setAttribute("tabindex", "0");
  pane.setAttribute("aria-label", "Figure. Scroll sideways to see the rest of it.");
  const bar = document.createElement("div");
  bar.className = "lbzoom";
  bar.innerHTML = '<button type="button" class="btn sm" data-lbz="out" aria-label="Zoom out">&minus;</button>'+
    '<span class="lbzpct" aria-live="polite">100%</span>'+
    '<button type="button" class="btn sm" data-lbz="in" aria-label="Zoom in">+</button>'+
    '<button type="button" class="btn sm" data-lbz="fit">Fit width</button>'+
    '<span class="lbzhint">Scroll or drag the figure sideways to reach the rest of it.</span>';
  fig.parentNode.insertBefore(bar, fig);
  const fitB = bar.querySelector('[data-lbz="fit"]');   /* where the floor bites it is not fitting anything */
  if(fitB && lbFitZ(sv) < 1){ fitB.textContent = "Actual size";
    fitB.title = "Back to 100 percent - the size this figure opened at"; }
  bar.querySelectorAll("[data-lbz]").forEach(b => b.onclick = () => {
    const k = b.dataset.lbz;
    if(k === "fit"){ lbZoomTo(box, lbBaseZ(sv)); return; }
    LB_Z = k === "in" ? Math.min(4, LB_Z * 1.25) : Math.max(0.25, LB_Z / 1.25);
    lbApplyZoom(box);
  });
  /* never below the figure's own viewBox width, and never below the box either:
     on a 1280px desktop that is the fit width the lightbox has always used, so
     nothing moves there; on a phone it is 900px instead of 298px. */
  lbZoomTo(box, lbBaseZ(sv));
}
/* P2.V K16 - a photograph gets a full-size view too. 100 percent is the image's own pixels
   (one image pixel per CSS pixel) and it is the ceiling: a photo is never drawn above its
   natural size, so a KEEP-SMALL image is never blown up into a blur. It opens fitted to the
   frame (the whole picture), never smaller than the copy the reader enlarged, so Enlarge
   never shrinks it. + / - / Actual size reach full resolution, and the frame pans (a finger,
   the scroll wheel or scroll bars, a mouse drag, or the arrow keys once it has focus). The
   overlays are in percent of the image box, so they stay on their findings at every zoom. */
let LB_PZ = 1, LB_PFIT = true;
function lbPhotoParts(box){
  const pan = box && box.querySelector(".lbpan"), ib = pan && pan.querySelector(".imgbox"), img = ib && ib.querySelector("img");
  if(!img || !img.naturalWidth) return null;
  const N = img.naturalWidth, NH = img.naturalHeight || N, maxH = parseFloat(getComputedStyle(pan).maxHeight);
  /* Fit: the whole image inside the frame (its width, and the height the frame may grow to) */
  const fit = Math.min(1, pan.clientWidth / N, maxH > 0 ? maxH / NH : 1);
  return {pan, ib, img, N, NH, fit};
}
function lbPhotoZoom(box, z){
  const P = lbPhotoParts(box); if(!P) return;
  const {pan, ib, N, NH, fit} = P;
  const old = ib.offsetWidth, oh = ib.offsetHeight;
  /* keep the point at the middle of the frame where it is */
  const cx = old ? (pan.scrollLeft + pan.clientWidth / 2 - ib.offsetLeft) / old : 0.5;
  const cy = oh ? (pan.scrollTop + pan.clientHeight / 2 - ib.offsetTop) / oh : 0.5;
  LB_PZ = Math.max(fit, Math.min(1, z));
  ib.style.width = Math.round(N * LB_PZ) + "px"; ib.style.maxWidth = "none";
  pan.scrollLeft = cx * ib.offsetWidth - pan.clientWidth / 2 + ib.offsetLeft;
  pan.scrollTop = cy * ib.offsetHeight - pan.clientHeight / 2 + ib.offsetTop;
  pan.classList.toggle("canpan", pan.scrollWidth > pan.clientWidth + 1 || pan.scrollHeight > pan.clientHeight + 1);
  const at = (a, b) => Math.abs(a - b) < 0.005;
  LB_PFIT = at(LB_PZ, fit);
  const bar = box.querySelector(".lbpz"); if(!bar) return;
  const q = s => bar.querySelector('[data-lbp="' + s + '"]');
  bar.querySelector(".lbzpct").textContent = Math.round(LB_PZ * 100) + "%";
  q("out").disabled = at(LB_PZ, fit); q("in").disabled = at(LB_PZ, 1);
  q("fit").setAttribute("aria-pressed", LB_PFIT); q("full").setAttribute("aria-pressed", at(LB_PZ, 1));
  q("fit").disabled = q("full").disabled = at(fit, 1);   /* a small image: fitted IS actual size */
  bar.querySelector(".lbzdim").textContent = N + " × " + NH + " px" + (at(LB_PZ, 1) ? " · full resolution" : "");
}
function lbPhotoInit(box, minW){
  const pan = box.querySelector(".lbpan"), img = pan && pan.querySelector(".imgbox img");
  if(!img) return;
  const bar = document.createElement("div");
  bar.className = "lbzoom lbpz";
  bar.innerHTML = '<button type="button" class="btn sm" data-lbp="out" aria-label="Zoom out">&minus;</button>'+
    '<span class="lbzpct" aria-live="polite"></span>'+
    '<button type="button" class="btn sm" data-lbp="in" aria-label="Zoom in">+</button>'+
    '<button type="button" class="btn sm" data-lbp="fit" title="Show the whole image">Fit</button>'+
    '<button type="button" class="btn sm" data-lbp="full" title="One image pixel per screen pixel: the full resolution">Actual size</button>'+
    '<span class="lbzdim"></span>'+
    '<span class="lbzhint">Drag or scroll the image to pan when it is larger than the frame.</span>';
  const ann = box.querySelector(".photoannot"); ann.parentNode.insertBefore(bar, ann);
  bar.querySelectorAll("[data-lbp]").forEach(b => b.onclick = () => {
    const P = lbPhotoParts(box), k = b.dataset.lbp; if(!P) return;
    if(k === "fit") return lbPhotoZoom(box, P.fit);
    if(k === "full") return lbPhotoZoom(box, 1);
    let z = k === "in" ? LB_PZ * 1.25 : LB_PZ / 1.25;
    if(z > 0.97) z = 1; if(z < P.fit * 1.03) z = P.fit;
    lbPhotoZoom(box, z);
  });
  const start = () => {
    const P = lbPhotoParts(box); if(!P) return;
    /* never smaller than the copy that was enlarged, never above natural size */
    lbPhotoZoom(box, Math.min(1, Math.max(P.fit, (minW || 0) / P.N)));
  };
  if(img.complete && img.naturalWidth) start(); else img.addEventListener("load", start, {once:true});
  lbDragPan(pan);
}
/* a mouse drag pans the frame (a finger already does); a click that ended a drag is not a
   click on the picture, so it does not let go of the pinned callout */
function lbDragPan(pan){
  let d = null, dragged = false;
  pan.addEventListener("pointerdown", e => {
    if(e.pointerType !== "mouse" || e.button !== 0 || e.target.closest("button, a") || !pan.classList.contains("canpan")) return;
    d = {x:e.clientX, y:e.clientY, l:pan.scrollLeft, t:pan.scrollTop, on:false};
  });
  pan.addEventListener("pointermove", e => {
    if(!d) return;
    const dx = e.clientX - d.x, dy = e.clientY - d.y;
    if(!d.on){ if(Math.hypot(dx, dy) < 4) return; d.on = true; pan.classList.add("dragging"); try{ pan.setPointerCapture(e.pointerId); }catch(_e){} }
    pan.scrollLeft = d.l - dx; pan.scrollTop = d.t - dy;
  });
  const end = () => { if(!d) return; dragged = d.on; d = null; pan.classList.remove("dragging"); setTimeout(() => { dragged = false; }, 0); };
  pan.addEventListener("pointerup", end); pan.addEventListener("pointercancel", end);
  pan.addEventListener("click", e => { if(dragged){ dragged = false; e.stopPropagation(); e.preventDefault(); } }, true);
}
/* a turned phone or a resized window: a fitted image is fitted again, a zoomed one is kept in range */
function lbResize(){
  const box = document.querySelector("#lightboxhost .lbinner"), P = lbPhotoParts(box); if(!P) return;
  lbPhotoZoom(box, LB_PFIT ? P.fit : LB_PZ);
}
let lastFocusBeforeLightbox = null, lastFocusSig = null;
function openLightbox(html, minW, opener){
  let host = el("lightboxhost");
  if(!host){ host = document.createElement("div"); host.id = "lightboxhost"; document.body.appendChild(host); }
  /* P2.V F31: the control that opened it (Enlarge, Diagram) gets focus back on close, even where a
     mouse click does not focus a button; its signature finds the twin if a redraw replaced it */
  lastFocusBeforeLightbox = opener || document.activeElement;
  lastFocusSig = lastFocusBeforeLightbox ? captureFocus(lastFocusBeforeLightbox) : null;
  host.innerHTML = `<div class="lightbox" id="lightbox" role="dialog" aria-modal="true">
    <div class="lbinner"><button class="lbclose" id="lbclose" aria-label="Close">&times;</button>${html}</div>
  </div>`;
  const box = host.querySelector(".lbinner");
  box.querySelector(".imgbox") && wirePins(host);
  box.querySelectorAll(".gterm").forEach(wireTerm);   /* P2.V F10: a term in an enlarged caption works too */
  box.querySelectorAll("svg.dia").forEach(sv => { delete sv.dataset.fitted; fitSvgText(sv); });
  lbZoomInit(box);   /* P4 repair: size the diagram from its own viewBox, not from the phone's box */
  lbPhotoInit(box, minW);
  el("lbclose").onclick = closeLightbox;
  el("lightbox").onclick = e => { if(e.target.id === "lightbox") closeLightbox(); };
  document.addEventListener("keydown", lbKeydown);
  window.addEventListener("resize", lbResize);
  el("lbclose").focus();
}
function closeLightbox(){
  const host = el("lightboxhost"); if(!host) return;
  host.innerHTML = "";
  document.removeEventListener("keydown", lbKeydown);
  window.removeEventListener("resize", lbResize);
  const back = lastFocusBeforeLightbox && lastFocusBeforeLightbox.isConnected ? lastFocusBeforeLightbox
             : lastFocusSig ? focusTwin(lastFocusSig) : null;
  if(back && back.focus) try{ back.focus(); }catch(e){}
  lastFocusBeforeLightbox = lastFocusSig = null;
}
/* P2.V F31: the dialog is aria-modal, so Tab and Shift+Tab cycle through its own controls and
   never reach the page behind it. Every Tab is handled here (not only at the two ends), so focus
   that somehow sits outside the dialog is brought back in on the next key. */
function lbTrapTab(e){
  const dlg = el("lightbox"); if(!dlg) return;
  const all = Array.from(dlg.querySelectorAll(FOCUSABLE_SEL)).filter(isTabbable);
  e.preventDefault();
  if(!all.length) return;
  const a = document.activeElement, n = all.length;
  let i = all.indexOf(a), next;
  if(i >= 0) next = all[(i + (e.shiftKey ? n - 1 : 1)) % n];
  else if(a && dlg.contains(a)){
    /* on something inside that is not itself a Tab stop: continue from where it sits */
    const after = all.filter(x => a.compareDocumentPosition(x) & Node.DOCUMENT_POSITION_FOLLOWING);
    next = e.shiftKey ? (all.filter(x => after.indexOf(x) < 0).pop() || all[n - 1]) : (after[0] || all[0]);
  }
  else next = e.shiftKey ? all[n - 1] : all[0];
  try{ next.focus(); }catch(_e){}
}
/* Escape closes; + and - zoom a photo or a figure (arrow keys pan the focused frame natively) */
function lbKeydown(e){
  if(e.key === "Escape"){ closeLightbox(); return; }
  if(e.key === "Tab"){ lbTrapTab(e); return; }
  if(e.ctrlKey || e.metaKey || e.altKey || /^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || "")) return;
  const k = e.key === "+" || e.key === "=" ? "in" : e.key === "-" || e.key === "_" ? "out" : "";
  const b = k && document.querySelector('#lightboxhost [data-lbp="' + k + '"], #lightboxhost [data-lbz="' + k + '"]');
  if(b && !b.disabled){ e.preventDefault(); b.click(); }
}
/* P1.8: a figure opened from a highlighted review keeps its highlight when enlarged -
   the lightbox rebuilds the figure from FIGS, so the marks are re-applied to the copy. */
function lbHighlight(b){
  const d = b.closest("[data-hl]"), h = el("lightboxhost");
  if(d && h){ try{ highlightFigure(h, JSON.parse(d.dataset.hl)); }catch(e){} }
}
function wireZoom(app){
  app.querySelectorAll("[data-zoomfig]").forEach(b => b.onclick = e => {
    e.stopPropagation(); openLightbox(figHTML(b.dataset.zoomfig), 0, b); lbHighlight(b); });
  /* the enlarged photo opens at least as large as the copy it came from (P2.V K16) */
  app.querySelectorAll("[data-zoomimg]").forEach(b => b.onclick = e => {
    e.stopPropagation(); const ib = b.closest(".photo") && b.closest(".photo").querySelector(".imgbox");
    openLightbox(imgHTML(b.dataset.zoomimg, true), ib ? ib.getBoundingClientRect().width : 0, b); lbHighlight(b); });
}
/* Hover or focus previews a callout; a click pins it (touch too). What is pinned, and Hide
   markup, live in OV_PIN / OV_RAW (see ovScope): a click writes the state and ovSync draws it
   on every live copy of that image, the page's and the lightbox's. */
function ovLink(b, on){
  const box = b.closest(".imgbox"); if(!box) return;
  const i = b.dataset.pin;
  box.classList.toggle("focusing", on);
  /* P2.5 (K15): every element of the callout (an inset has three), not just the first */
  box.querySelectorAll('[data-sh="'+i+'"], [data-lead="'+i+'"]').forEach(x => x.classList.toggle("hot", on));
  if(on){
    const im=IMGS[b.dataset.annkey], a=im&&im.ann&&im.ann[+i], rail=el(box.id+"_rail");
    if(a&&rail) rail.innerHTML='<span class="arhead">Image annotation</span><span class="arnum">'+(+i+1)+'</span>'+fmt(a.l);
  }
  /* letting go of a preview hands the picture back to the pinned callout, if there is one */
  const p = !on && box.querySelector('[data-pin][data-pinned="1"]');
  if(p && p !== b) ovLink(p, true);
}
function ovDraw(box){
  const k = box.dataset.imgkey, raw = !!OV_RAW[k], pin = OV_PIN[k];
  box.classList.toggle("raw", raw);
  const rb = document.querySelector('[data-raw="' + box.id + '"]');
  if(rb) rb.textContent = raw ? "Show markup" : "Hide markup";
  box.querySelectorAll("[data-pin]").forEach(x => { x.dataset.pinned = ""; x.setAttribute("aria-expanded", "false"); });
  box.classList.remove("focusing"); box.querySelectorAll(".hot").forEach(x => x.classList.remove("hot"));
  const p = pin != null && box.querySelector('[data-pin="' + pin + '"]');
  if(p){ p.dataset.pinned = "1"; p.setAttribute("aria-expanded", "true"); ovLink(p, true); }
}
function ovSync(k){
  document.querySelectorAll(".imgbox[data-imgkey]").forEach(box => { if(box.dataset.imgkey === k) ovDraw(box); });
}
/* P2.V K16 - a photograph is never drawn above its natural size (a KEEP-SMALL image would be
   a blur): once it has loaded, its box is capped at naturalWidth and centred, and the
   overlays, which live in that box, stay on the picture. The lightbox frame sizes its own copy. */
function capPhoto(img){
  const box = img && img.parentNode;
  if(!box || !box.classList || !box.classList.contains("imgbox") || !img.naturalWidth || !img.closest(".photo") || img.closest(".lbpan")) return;
  box.style.maxWidth = img.naturalWidth + "px"; box.style.marginInline = "auto";
}
document.addEventListener("load", e => { if(e.target && e.target.tagName === "IMG") capPhoto(e.target); }, true);
function wirePins(app){
  app.querySelectorAll("[data-pin]").forEach(b => {
    b.onmouseenter = () => { if(b.dataset.pinned !== "1"){ b.setAttribute("aria-expanded","true"); ovLink(b,true); } };
    b.onmouseleave = () => { if(b.dataset.pinned !== "1"){ b.setAttribute("aria-expanded","false"); ovLink(b,false); } };
    /* P2.5: focus shows the label too, as the rail promises ("hover, focus or tap") */
    b.onfocus = () => { b.setAttribute("aria-expanded","true"); ovLink(b,true); };
    b.onblur  = () => { if(b.dataset.pinned !== "1"){ b.setAttribute("aria-expanded","false"); ovLink(b,false); } };
  });
  /* P2.5 (K15): markup is hover-only by default; "Show all findings" draws every outline at
     full strength. One preference for the whole page, so every image on it follows. Wired
     here rather than in wire() so the enlarged copy in the lightbox works as well. */
  app.querySelectorAll("[data-showall]").forEach(b => b.onclick = e => {
    e.stopPropagation(); OV_SHOWALL = !OV_SHOWALL;
    document.querySelectorAll("[data-showall]").forEach(x => { x.setAttribute("aria-pressed", OV_SHOWALL);
      const box = el(x.dataset.showall); if(box) box.classList.toggle("showall", OV_SHOWALL); }); });
  app.querySelectorAll("[data-raw]").forEach(b => b.onclick = ()=>{
    const box = el(b.dataset.raw); if(!box) return;
    OV_RAW[box.dataset.imgkey] = !box.classList.contains("raw"); ovSync(box.dataset.imgkey); });
  app.querySelectorAll("[data-pin]").forEach(b => b.onclick = (e) => {
    e.stopPropagation();
    const box = b.closest(".imgbox"); if(!box) return;
    OV_PIN[box.dataset.imgkey] = b.dataset.pinned === "1" ? null : +b.dataset.pin;
    ovSync(box.dataset.imgkey);
  });
  app.querySelectorAll(".imgbox[data-imgkey]").forEach(box => {
    /* P2.5: a tap on the picture itself also lets go of the selected callout (and a spot's dimming) */
    box.addEventListener("click", () => { OV_PIN[box.dataset.imgkey] = null; ovSync(box.dataset.imgkey); });
    /* draw what the reader had pinned before this redraw (or on the copy that was enlarged) */
    if(OV_PIN[box.dataset.imgkey] != null) ovDraw(box);
    const img = box.querySelector("img"); if(img && img.complete) capPhoto(img);
  });
}
function wireGrid(app){
  const host = el("rgrid"); if(!host) return;
  const t = findT(host.dataset.gt); if(!t) return;
  host.querySelectorAll(".rgi").forEach(b => b.onclick = ()=>{
    if(b.disabled) return;
    const on = b.getAttribute("aria-pressed") !== "true", sel = GRID_SEL[t.id] = GRID_SEL[t.id] || {};
    b.setAttribute("aria-pressed", String(on));
    if(on) sel[b.dataset.rg] = true; else delete sel[b.dataset.rg];
  });
  const again = el("rgagain");
  if(again) again.onclick = ()=>{ const rec = S.topics[t.id] = S.topics[t.id] || {};
    rec.gridRetake = true; delete GRID_SEL[t.id]; rerenderHere();
    /* P2.V F31: "Test me again" is gone after the redraw, so restoreFocus() had no twin and
       parked the reader on main; stand them on the first item of the fresh grid instead */
    const first = document.querySelector("#rgrid [data-rg]");
    if(first) try{ first.focus({preventScroll: true}); }catch(e){} };
  const btn = el("rgcheck");
  if(btn) btn.onclick = ()=>{
    const items = t.grid.items, picked = [];
    host.querySelectorAll(".rgi").forEach((b,i)=>{ if(b.getAttribute("aria-pressed")==="true") picked.push(String(items[i][0])); });
    const tl = gridTally(t, picked), score = clamp((tl.hit - tl.fp*0.5)/Math.max(1,tl.tot), 0, 1);
    const rec = S.topics[t.id] = S.topics[t.id] || {};
    rec.grid = score; rec.gridAt = Date.now(); rec.gridPick = picked; promote(rec, score >= 0.75);
    rec.gridRetake = false;
    delete GRID_SEL[t.id];
    if(!rec.read){ rec.read = true; bumpDay(0); }   /* P2.V F5: minutes are measured (noteActive), not t.mins */
    /* P2.V F13 sweep: the scored grid (colours, score line, "Test me again") and the "read"
       chip are now drawn from state, so the view is simply redrawn in place */
    bumpDay(0); rerenderHere();
  };
  startDwell(t);
}
/* @region engine.practice-flow (LITERALS, engine) */
/* The exam allows roughly SECS_PER_Q (META.secsPerQ) seconds a question. Showing the
   clock trains pacing, which is a separate skill from knowing the content. */
let paceTimer = null;
function startPace(){
  clearInterval(paceTimer);
  const tick = ()=>{
    const el0 = el("pace"); if(!el0){ clearInterval(paceTimer); return; }
    const ps = S.ps; if(!ps || ps.shown){ el0.textContent = ""; return; }
    const sec = Math.floor((Date.now() - (ps.t0||Date.now()))/1000);
    el0.textContent = Math.floor(sec/60)+":"+String(sec%60).padStart(2,"0");
    el0.className = "pace" + (sec > SECS_PER_Q ? " over" : sec > Math.round(SECS_PER_Q*7/9) ? " near" : "");
  };
  tick(); paceTimer = setInterval(tick, 1000);
}
/* A topic counts as read only when the reader has BOTH spent a plausible amount of time
   on it AND scrolled through most of it. Clicking through marks nothing.
   P2.V F9: the credit was inflated across topics. go() renders the next topic before it
   scrolls the page to the top, and startDwell() took its first reading of window.scrollY
   right then, so a topic reached from the bottom of the previous one (next-topic button,
   rail, search, a link) started at "scrolled 93%" and was marked read without ever being
   scrolled. Now a topic that was not already being tracked starts from zero, and the first
   reading waits two frames, until go()'s scroll to the top and restoreScroll() have put the
   page where it stays. Only the same topic re-rendered in place (a sexp answer, the cloze
   toggle, a grid retake) keeps its running counters. */
let dwellTimer = null, dwellTopic = null, dwellSeconds = 0, maxScrolled = 0, dwellListener = null, dwellSpan = null;
function dwellNeed(t){ return Math.max(45, Math.round((t.mins || 8) * 60 * 0.35)); }
/* the chip in the topic head follows every change to the topic's reading record: the dwell
   tick, and a scored recall grid, which marks the topic read on its own */
function paintDwellTag(t){
  const tag = el("dwellTag"), rec = S.topics[t.id]; if(!tag || !rec) return;
  if(rec.read){ tag.textContent = "read"; tag.className = "tag"; tag.style.background = "var(--good)"; tag.style.color = "#fff"; return; }
  if(!rec.dwell && !rec.scrolled) return;
  tag.textContent = "reading " + Math.min(100, Math.round(100*(rec.dwell||0)/dwellNeed(t))) + "% \u00b7 scrolled " + Math.round(100*(rec.scrolled||0)) + "%";
}
function startDwell(t){
  const same = dwellTimer !== null && !!dwellTopic && dwellTopic.id === t.id;
  clearInterval(dwellTimer); dwellTimer = null;
  if(dwellListener) window.removeEventListener("scroll", dwellListener);
  if(!same){ dwellSeconds = 0; maxScrolled = 0; dwellSpan = null; }
  dwellTopic = t;
  const need = dwellNeed(t);
  /* P2.V F10: the credit is the stretch of the page the reader has actually scrolled through
     (lowest to highest position seen on this visit), not the position alone. A lesson opened
     part-way down (a glossary link lands on its section) starts with no scroll credit; from the
     top of the page the two measures are the same. */
  const listener = dwellListener = () => {
    const doc = document.documentElement, y = window.scrollY;
    const total = Math.max(1, doc.scrollHeight - window.innerHeight);
    dwellSpan = dwellSpan ? [Math.min(dwellSpan[0], y), Math.max(dwellSpan[1], y)] : [y, y];
    maxScrolled = Math.max(maxScrolled, Math.min(1, (dwellSpan[1] - dwellSpan[0]) / total));
  };
  window.addEventListener("scroll", listener, {passive:true});
  requestAnimationFrame(() => requestAnimationFrame(() => { if(dwellListener === listener) listener(); }));
  paintDwellTag(t);
  dwellTimer = setInterval(() => {
    if(document.visibilityState !== "visible") return;
    if(S.mode !== "learn" || S.cur !== dwellTopic.id){ clearInterval(dwellTimer); dwellTimer = null; return; }
    dwellSeconds++;
    const rec = S.topics[dwellTopic.id] = S.topics[dwellTopic.id] || {};
    rec.dwell = Math.max(rec.dwell || 0, dwellSeconds);
    rec.scrolled = Math.max(rec.scrolled || 0, maxScrolled);
    if(!rec.read && rec.dwell >= need && rec.scrolled >= 0.7){
      rec.read = true; bumpDay(0); save(); paintHeader();   /* P2.V F5: minutes are measured (noteActive) */
    }
    paintDwellTag(dwellTopic);
    if(dwellSeconds % 10 === 0) save();
  }, 1000);
}
/* P2.3 (F23/F24, reopened 2026-09-28): one definition per named set. "Previously missed" used
   to call the spacing-due branch (a second k==="due" branch, the missed one, could never run),
   so it served right answers that were due, and every empty set was filled with 20 random
   questions under the button's label. Now the buttons, the plan rows and Weak Spots count with
   the same pool that startSet / startRapid serve, and an empty set says so (SET_EMPTY) instead.
   S.qs[id] is rewritten by every answer, so rec.ok is the result of the MOST RECENT answer:
     missed - answered, most recent answer wrong: a miss not since answered right. Earliest
              review due first: every miss restarts at the 15-minute box, so the miss that has
              waited longest leads and one made a minute ago comes last
     due    - answered and due on the spacing ladder now, right or wrong; most overdue first
     verify - most recent answer right, not yet verified, its re-check date reached
     weak   - on a topic Weak Spots flags, never answered or most recent answer wrong
     unseen - never answered;  all - every question
   Rapid: linked - this block's items in S.linked;  due - hubDue() (every block, most overdue
   first; this block's own due items when the hub is empty);  weak - flagged topics;  all.
   "High yield only" filters before the cap. P2.V F8: that includes Due now. It used to return
   the hub's list before the filter, so the button, the plan's review row and the set served
   lower-yield items while the banner said every rapid pick came from the high-yield topics.
   Under the filter Due now keeps this block's due items on high-yield topics; items from other
   blocks in the shared hub are left out, because their yield is set on their own page, and the
   yield banner counts what waits (yHeld). */
const PS_CAP = 20, RF_CAP = 40;
const PS_NAME = {weak:"Target my weak spots", verify:'Verify my "correct" answers', missed:"Previously missed",
                 due:"Due for review", unseen:"Never attempted", all:"Everything, shuffled"};
const RF_NAME = {linked:"Linked queue", due:"Due now", weak:"From my weak spots", all:"All rapid picks, shuffled"};
/* P2.V F8 - under "High yield only" the whole-bank sets are not the whole bank, so their names say so */
const psName = k => k === "all" && S.hiOnly ? "Every high-yield question, shuffled" : PS_NAME[k];
const rfName = k => k === "all" && S.hiOnly ? "All high-yield rapid picks, shuffled" : RF_NAME[k];
let SET_EMPTY = null;   /* {m:"practice"|"rapid", k}: the set just asked for had nothing to serve */
const hiKeep = c => { const T = findT(c); return !!T && yv(T) === "hi"; };
/* runs fn as if the header read "All yields" (the empty-set notice and the banner count what the filter holds back) */
function unfiltered(fn){ const was = S.hiOnly; S.hiOnly = false; try{ return fn(); } finally { S.hiOnly = was; } }
/* P2.V F8 - the review items "High yield only" holds back: this block's due or queued rapid picks
   and due questions on lower-yield topics (low), and due rapid picks from other blocks in the
   shared hub (other). The yield banner says how many wait until the filter is turned off. */
function yHeld(){
  if(!S.hiOnly) return {low:0, other:0};
  const rIds = () => new Set(rapidPool("due").concat(rapidPool("linked"))), qIds = () => new Set(practicePool("due").map(q => q.id));
  const keptR = rIds(), keptQ = qIds(), allR = unfiltered(rIds), allQ = unfiltered(qIds);
  let low = 0, other = 0;
  allR.forEach(i => { if(!keptR.has(i)){ if(RBYID[i]) low++; else other++; } });
  allQ.forEach(i => { if(!keptQ.has(i)) low++; });
  return {low, other};
}
function practicePool(k, ev){
  const now = Date.now(), R = q => S.qs[q.id];
  let out;
  if(k === "missed") out = QS.filter(q => { const a = R(q); return !!a && !a.ok; })
    .sort((x, y) => (R(x).due || R(x).ts || 0) - (R(y).due || R(y).ts || 0) || (R(x).ts || 0) - (R(y).ts || 0));
  else if(k === "due") out = QS.filter(q => { const a = R(q); return !!a && a.box > 0 && a.due && a.due <= now; })
    .sort((x, y) => R(x).due - R(y).due);
  else if(k === "verify") out = QS.filter(q => { const a = R(q); return !!a && a.ok && !a.verified && a.verifyDue && a.verifyDue <= now; });
  else if(k === "weak"){ const cs = new Set((ev || diagnose()).filter(e => e.flag).map(e => e.t.id));
    out = QS.filter(q => cs.has(q.c) && (!R(q) || !R(q).ok)); }
  else if(k === "unseen") out = QS.filter(q => !R(q));
  else out = QS.slice();
  return S.hiOnly ? out.filter(q => hiKeep(q.c)) : out;
}
function rapidPool(k, ev){
  let out;
  if(k === "linked"){ const set = new Set(S.linked || []); out = RAPID.filter(r => set.has(r.i)); }
  else if(k === "due"){ const hub = hubDue();
    if(hub.length) return (S.hiOnly ? hub.filter(it => RBYID[it.i] && hiKeep(RBYID[it.i].c)) : hub).map(it => it.i);
    out = RAPID.filter(r => isDue(S.rapid[r.i])).sort((a, b) => overdue(S.rapid[b.i]) - overdue(S.rapid[a.i])); }
  else if(k === "weak"){ const cs = new Set((ev || diagnose()).filter(e => e.flag).map(e => e.t.id));
    out = RAPID.filter(r => cs.has(r.c)); }
  else out = RAPID.slice();
  return (S.hiOnly ? out.filter(r => hiKeep(r.c)) : out).map(r => r.i);
}
/* P2.4 (F20, reopened 2026-09-28): the image sets, defined once like the two above. "Only ones
   I have not seen" used to fall back to every image when none was left, so a student who had
   tried them all was served the whole set again under that label. S.spot[key] is written by
   the first answer to an image, right or wrong, and rewritten by every later one:
     unseen - no answer yet ("Not tried yet"; the plan's image row counts this pool)
     all    - every image
   Both are shuffled and uncapped; "High yield only" keeps the images whose teaching topic
   (IMGTOPIC) is high yield, as the builder below them already did. */
const spName = k => ({unseen:"Not tried yet", all:S.hiOnly ? "All high-yield images, shuffled" : "All images, shuffled"})[k];
function spotPool(k){
  let out = Object.keys(IMGS);
  if(k === "unseen") out = out.filter(x => !S.spot[x]);
  return S.hiOnly ? out.filter(x => hiKeep(IMGTOPIC[x])) : out;
}
/* what a button serves: the ordered sets keep their order, the rest are shuffled; "all" is uncapped */
function practiceSet(k, ev){ const p = practicePool(k, ev), s = k === "missed" || k === "due" ? p : shuffle(p);
  return k === "all" ? s : s.slice(0, PS_CAP); }
function rapidSet(k, ev){ const p = rapidPool(k, ev), s = k === "due" ? p : shuffle(p);
  return k === "all" ? s : s.slice(0, RF_CAP); }
/* the label's count: "(n)" when the whole pool is served, "(n of m)" when the cap holds some back */
function setCount(m, k, ev){
  const all = (m === "rapid" ? rapidPool : m === "spot" ? spotPool : practicePool)(k, ev).length;
  const n = k === "all" || m === "spot" ? all : Math.min(m === "rapid" ? RF_CAP : PS_CAP, all);
  return {n, m:all, txt: n === all ? "(" + n + ")" : "(" + n + " of " + all + ")"};
}
/* An empty set is reported where it was asked for, with up to two non-empty sets to try instead */
function setEmptyHTML(m, ev){
  const E = SET_EMPTY; if(!E || E.m !== m) return "";
  const k = E.k, P = m === "practice", SP = m === "spot";
  const names = P ? {weak:psName("weak"), verify:psName("verify"), missed:psName("missed"), due:psName("due"), unseen:psName("unseen"), all:psName("all")}
    : SP ? {unseen:spName("unseen"), all:spName("all")} : {linked:rfName("linked"), due:rfName("due"), weak:rfName("weak"), all:rfName("all")};
  const flagged = (ev || diagnose()).filter(e => e.flag), fl = flagged.slice(0, 3).map(e => esc(e.t.t)).join(", ");
  const noFlag = "No topic is flagged weak yet, so there is nothing to target. Weak Spots flags a topic from the evidence in your answers.";
  let txt = P ? {
    missed: "No question has a wrong answer as its most recent answer. A question joins this set when you miss it and leaves it when you answer it right.",
    due: "No answered question is due for review yet. Each answer schedules the question's return. " + schedQuestionRule(),
    verify: "No right answer is waiting to be re-checked. A question you get right comes back for a re-check " + spanWord(VERIFY_GAP.first) + " later, to check that the answer was not a lucky guess.",
    weak: flagged.length ? "Your flagged topics (" + fl + ") have no question left that is unanswered or was last answered wrong." : noFlag,
    unseen: "You have attempted every question.",
    all: "There are no questions to serve."}[k] : SP ? {
    unseen: "You have tried every image. An image leaves this set with your first answer to it, right or wrong. "
      + "To go back over the ones you got wrong, open &ldquo;Build your own set&rdquo; below and choose &ldquo;Got wrong&rdquo;.",
    all: "There are no images to serve."}[k] : {
    linked: "The linked queue is empty. Missing a practice question queues the rapid picks on the same fact, and each one leaves the queue when you answer it right.",
    due: "No rapid pick is due for review yet. Each answer schedules the pick's return. " + schedRapidRule(),
    weak: flagged.length ? "Your flagged topics (" + fl + ") have no rapid picks." : noFlag,
    all: "There are no rapid picks to serve."}[k];
  if(S.hiOnly){ const hid = unfiltered(() => setCount(m, k, ev).m);
    /* P2.V F8 - Due now is filtered too; its held-back items can also be other blocks' */
    if(hid) txt = m === "rapid" && k === "due"
      ? "Every due rapid pick is on a lower-yield topic or comes from another block, and the header is set to High yield only. Switch it to All yields to review them."
      : "The " + (P ? "questions" : SP ? "images" : "rapid picks") + " that match are all on lower-yield topics, and the header is set to High yield only. Switch it to All yields to include them."; }
  const alts = (P ? ["missed", "unseen", "all"] : SP ? ["unseen", "all"] : ["due", "linked", "all"]).filter(x => x !== k)
    .map(x => [x, setCount(m, x, ev)]).filter(a => a[1].n > 0).slice(0, 2);
  return '<div class="call step setempty" data-verdict><span class="cl">' + esc(names[k] || "This set") + ': nothing to serve</span>'
    + (txt || "Nothing matches.") + (alts.length ? '<div class="btnrow" style="margin-top:12px"><span>Try instead:</span>'
    + alts.map(a => '<button class="btn sm" data-' + (P ? "ps" : SP ? "sp" : "rf") + '="' + a[0] + '">' + esc(names[a[0]]) + ' ' + a[1].txt + '</button>').join("")
    + '</div>' : "") + '</div>';
}
function startSet(k){
  const set = practiceSet(k);
  if(!set.length){ SET_EMPTY = {m:"practice", k}; S.mode = "practice"; S.ps = null; save(); render();
    window.scrollTo({top:0,behavior:"instant"}); return; }
  SET_EMPTY = null;
  S.mode="practice"; S.ps = {set:set.map(q=>q.id), i:0, src:k, t0:Date.now()}; save(); render();
  window.scrollTo({top:0,behavior:"instant"});
}
function wirePractice(app){
  /* P2.3 (K10): the question's visual is in the DOM (and open) by now, so mark the answer */
  app.querySelectorAll(".qcard details.deepreview[data-hl]").forEach(d => {
    try{ highlightFigure(d.closest(".qcard") || d, JSON.parse(d.dataset.hl)); }catch(e){} });
  app.querySelectorAll("[data-ps]").forEach(b => b.onclick = ()=>{
    if(b.dataset.ps === "quit"){ finishSet(); return; }
    if(b.dataset.ps === "done"){ S.ps = null; S.mode = "path"; save(); render(); window.scrollTo({top:0,behavior:"instant"}); return; }
    startSet(b.dataset.ps); });
  /* P2.3 (K11): a summary row opens and closes its explanation in place, without a render */
  app.querySelectorAll("[data-sumq]").forEach(b => b.onclick = ()=>{
    const x = document.getElementById("sx_" + b.dataset.sumq); if(!x) return;
    const open = x.hidden; x.hidden = !open; b.setAttribute("aria-expanded", String(open)); });
  /* P6 cleanup - this handler recorded the confidence but repainted nothing
     else, so the footer kept telling the student to say how sure they were
     after they had. Repaint that one span, the way P3.5 repaints the flag
     button: render() rebuilds main wholesale and would cost them their place
     mid-question. The old chip also only lost aria-pressed, never its .on. */
  app.querySelectorAll("[data-conf]").forEach(b => b.onclick = ()=>{
    app.querySelectorAll("[data-conf]").forEach(x=>{ x.setAttribute("aria-pressed","false"); x.classList.remove("on"); });
    b.setAttribute("aria-pressed","true"); b.classList.add("on");
    S.ps.conf = b.dataset.conf; S.ps.confKept = false; save();
    const hint = el("confhint"); if(hint) hint.textContent = "Now pick an answer above"; });
  app.querySelectorAll("[data-opt]").forEach(b => b.onclick = ()=>{
    const ps = S.ps;
    /* P2.3 (K7): once answered, a click on an option only opens/closes its why-note in
       place (no render, so the page does not jump); it never re-answers. */
    if(ps.shown){ qToggleWhy(b); return; }
    /* Calibration only works if confidence is recorded every time, so it is no
       longer optional -- but it costs one tap and is never asked again. */
    if(!ps.shown && !ps.conf){
      const c = app.querySelector(".conf");
      if(c){ c.classList.add("needconf"); setTimeout(()=>c.classList.remove("needconf"), 900); }
      return;
    }
    const q = QS.find(x=>x.id===ps.set[ps.i]), pick = +b.dataset.opt, ok = pick === q.a;
    ps.pick = pick; ps.shown = true; ps.open = null;
    const ms = Date.now() - (ps.t0||Date.now()), prev = S.qs[q.id] || {};
    /* Scale the "too fast to have read it" threshold to the length of the stem:
       a 27-word question and a 110-word vignette are not the same task. */
    const words = String(q.s + " " + q.l).split(/\s+/).length;
    /* P5.3: the floor now comes from stemFloorMs() so that the fast flag stored
       here and the error-type taxonomy in Weak Spots can never disagree about
       what counts as too fast. Same rule, same numbers, one definition. */
    const floorMs = stemFloorMs(q);
    const slowMs  = Math.max(SECS_PER_Q*1000, Math.round(words * 1200));
    const attempt = {ok,conf:ps.conf||null,pick,ms,ts:Date.now(),d:q.d||2};
    const rec = {ok, conf: ps.conf || null, pick, ms, n:(prev.n||0)+1,
                 fast: ms < floorMs, slow: ms > slowMs, ts: Date.now()};
    rec.hist = (prev.hist||[]).concat([attempt]).slice(-10);
    if(prev.ok && !ok) rec.falseConf = true;          /* knew it before, missed it now */
    /* A flag that can never clear is a punishment, not a measurement. Two clean
       re-tests after the slip retire it. */
    rec.streak = ok ? (prev.streak||0)+1 : 0;
    if(prev.falseConf && rec.streak < 2) rec.falseConf = true;
    if(ps.src === "diag") rec.diag = true;
    rec.verified = !!(ok && prev.ok);                 /* right twice, spaced apart = known */
    rec.verifyDue = ok ? Math.min(Date.now() + (prev.ok ? VERIFY_GAP.again : VERIFY_GAP.first), examCeiling()) : 0;
    /* Put the QUESTION itself on the spacing ladder, not just its rapid items.
       Vignettes are the format the exam uses, so they are the ones that most
       need to come back. */
    rec.box = ok ? Math.min((prev.box||0)+1, BOXES.length-1) : 1;
    rec.due = Math.min(Date.now() + gapMs(rec.box), examCeiling());
    S.qs[q.id] = rec;
    (ps.ans = ps.ans || {})[q.id] = ok;
    (ps.picks = ps.picks || {})[q.id] = pick;   /* P2.3 (K11): what the summary shows as picked */
    if(!ok){
      /* Queue the sub-fact that was missed, not the whole concept. Dumping all
         22 items for a topic buries the thing they actually got wrong. */
      const key = w => String(w).toLowerCase().replace(/<[^>]+>/g," ")
        .replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter(x=>x.length>4);
      const want = new Set(key(q.o[q.a] + " " + q.l + " " + (q.w && q.w[pick] ? q.w[pick] : "")));
      const sameC = RAPID.filter(r => r.c === q.c);
      const scored = sameC.map(r => {
        const kw = key(r.q + " " + r.o.join(" ") + " " + (r.x||""));
        return {r, hits: kw.filter(x => want.has(x)).length};
      }).filter(x => x.hits > 0).sort((a,b) => b.hits - a.hits).slice(0, 6).map(x => x.r.i);
      const add = scored.length ? scored : sameC.slice(0, 4).map(r => r.i);
      /* P2.V F8 follow-up - the notice reports what this miss queued (add, at most 6, or 4 with
         no keyword match) and how many were new; it used to print every rapid item on the topic */
      const had = new Set(S.linked||[]);
      S.linked = Array.from(new Set((S.linked||[]).concat(add)));
      ps.linkQ = {id:q.id, n:add.length, fresh:add.filter(i => !had.has(i)).length};
    } else ps.linkQ = null;
    /* P2.3: the confidence is no longer wiped after each answer. It carries to the next
       question as a visible default ("Same as the last question - change it ..."), so a
       set can be answered at the keyboard and the rating is still recorded every time. */
    bumpDay(0); save(); render();   /* P2.V F5: minutes are measured (noteActive), not a flat 1 */
  });
  const nx = el("qnext");
  if(nx) nx.onclick = ()=>{
    const ps = S.ps;
    landOn();   /* P2.6 (F31): the new question's stem, never the same-position option of it */
    if(ps.i + 1 < ps.set.length){ ps.i++; ps.pick=null; ps.shown=false; ps.open=null; ps.linkQ=null; ps.confKept=!!ps.conf; ps.t0=Date.now(); save(); render(); window.scrollTo({top:0,behavior:"instant"}); }
    else finishSet();
  };
  if(S.ps && !S.ps.t0) S.ps.t0 = Date.now();
}
function finishSet(){
  const ps = S.ps;
  /* P2.3 (K11): leaving a summary that is already on screen books nothing a second time */
  if(ps && ps.done){ S.ps = null; S.mode = "path"; save(); render(); window.scrollTo({top:0,behavior:"instant"}); return; }
  if(ps && ps.src){
    /* count ONLY what was answered in THIS run. S.qs persists across sets, so the
       old code marked a set complete that had never been attempted. */
    const ans = Object.keys(ps.ans || {}), total = ps.set.length;
    const acc = ans.length ? ans.filter(id => ps.ans[id]).length/ans.length : 0;
    const complete = total > 0 && ans.length >= Math.ceil(total * 0.9);
    /* P2.2 (R1, R2) - both stages found by kind, whatever the content calls them */
    const dg = diagStage(), f = finalStage();
    if(ps.src === "diag"){
      if(dg){ const st = S.stage[dg.id] = S.stage[dg.id] || {};
        st.n = ans.length; st.total = total; st.acc = acc; st.done = complete; }
    } else if(ps.src === "final"){
      if(f){ const st = S.stage[f.id] = S.stage[f.id] || {};
        st.quiz = {done: complete, acc, n:ans.length, total}; }
    } else if(ps.src.startsWith("stage:")){
      const pid = ps.src.slice(6), st = S.stage[pid] = S.stage[pid] || {};
      st.quiz = {done: complete && acc >= 0.75, acc, n:ans.length, total, at: Date.now()};
    }
  }
  /* P2.3 (K11): a set with answers is kept, marked done, for its summary (viewPractice);
     "Done" on the summary clears it. A set ended before any answer goes straight back. */
  if(ps && Object.keys(ps.ans || {}).length){
    ps.done = true; ps.open = null; S.mode = "practice"; save(); render(); window.scrollTo({top:0,behavior:"instant"}); return; }
  S.ps = null; S.mode = "path"; save(); render(); window.scrollTo({top:0,behavior:"instant"});
}
/* P2.3 (K7): toggles a wrong option's why-note by flipping the DOM node itself, so the
   scroll position is untouched; ps.open remembers it for any later render. */
function qToggleWhy(b){
  if(!b || b.dataset.why == null || !S.ps) return;
  const k = b.dataset.opt, w = document.getElementById("qw" + k); if(!w) return;
  const open = w.hidden; w.hidden = !open; b.setAttribute("aria-expanded", String(open));
  (S.ps.open = S.ps.open || {})[k] = open;
}
/* P2.3 (K21): keyboard answering in practice. a-e or 1-5 press the option in that
   position on screen (answer, or after answering toggle that option's why); Enter goes
   to the next question. Only while a practice question is on screen, never while
   typing, never with a modifier or a dialog open; "/" and "?" stay with the global handler. */
function practiceKeydown(e){
  const ps = S.ps;
  if(S.mode !== "practice" || !ps || !ps.set || !ps.set.length || ps.done) return;
  if(e.defaultPrevented || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
  const t = e.target || {};
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "") || t.isContentEditable) return;
  if(el("searchwrap") || document.querySelector('[aria-modal="true"]')) return;
  const k = String(e.key || "").toLowerCase();
  const n = k.length !== 1 ? -1 : /^[1-5]$/.test(k) ? +k - 1 : "abcde".indexOf(k);
  if(n >= 0){
    const b = document.querySelectorAll(".qopts [data-opt]")[n]; if(!b) return;
    e.preventDefault(); b.click(); return;
  }
  if(e.key === "Enter" && ps.shown){
    /* Enter on a focused control keeps its own meaning, except on an option button */
    if(t.closest && t.closest("button,a[href],summary,[role=button],[role=link],[role=tab]") && !t.closest(".qopt")) return;
    const nx = el("qnext"); if(nx){ e.preventDefault(); nx.click(); }
  }
}
document.addEventListener("keydown", practiceKeydown);
function startDrill(id){
  const d = DRILLS.find(x=>x.id===id); if(!d) return;
  SET_EMPTY = null;   /* P2.6: every set start clears the empty-set notice */
  S.mode = "drill";
  S.dr = d.kind==="order" ? {id, pool:shuffle(d.items.map((_,i)=>i)), placed:[], checked:false}
                          : {id, order:shuffle(d.items.map((_,i)=>i)), i:0, missed:[]};
  save(); render(); window.scrollTo({top:0,behavior:"instant"});
}
/* @region content.drill-why (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.wire-drill (ENGINE, engine) */
function wireDrill(app){
  app.querySelectorAll("[data-dr]").forEach(b => b.onclick = ()=>{
    const k = b.dataset.dr;
    if(k==="__quit"){ S.dr=null; save(); render(); return; }
    if(k==="__again"){ startDrill(S.dr.id); return; }
    startDrill(k);
  });
  /* P2.V F21: a pick records the verdict for THIS item (st.last.ix) and names it in the message;
     the item stays on screen until Next. Focus goes to Next, so Enter moves on, and Next is
     scrolled into view when the verdict would sit below the fold (a multi item with a photo at
     400 px; the photo's height arrives after the render, so the scroll is repeated when it
     loads). On the new item focus lands on the item itself (viewLead), never on a side, so a
     second Enter cannot answer it unseen. */
  const drPick = (d, st, pick, right, msg) => {
    const ix = st.order[st.i], ok = pick === right, why = (DRILL_WHY[d.id]||{})[d.items[ix][0]];
    (st.hist=st.hist||[]).push({ix,pick,ok,ts:Date.now()});
    if(!ok && !(st.missed||[]).includes(ix)) (st.missed=st.missed||[]).push(ix);
    st.last = {ix, pick, ok, msg: msg(ok) + (why ? " "+why : "")};
    st.i++;
    if(st.i>=st.order.length){ const prev=S.drills[d.id]||{}; S.drills[d.id]={missed:st.missed||[],done:true,ts:Date.now(),n:(prev.n||0)+1,hist:(prev.hist||[]).concat(st.hist||[]).slice(-60)}; }
    bumpDay(0); save(); render();
    const next = el("drnext"), img = app.querySelector(".imgbox img");
    drFocus(next);
    const reveal = () => { const n = el("drnext"); if(n) n.scrollIntoView({block:"nearest", behavior:"instant"}); };
    reveal();
    if(img && !img.complete) img.addEventListener("load", reveal, {once:true});   /* the photo's height arrives late */
  };
  app.querySelectorAll("[data-sort]").forEach(b => b.onclick = ()=>{
    const st = S.dr, d = DRILLS.find(x=>x.id===st.id);
    if(!d || drJudged(d, st) >= 0 || st.i>=st.order.length){ render(); return; }
    const it = d.items[st.order[st.i]], side = b.dataset.sort, nm = "<b>\u201c"+esc(it[0])+"\u201d</b>";
    const sideL = x => x==="a" ? esc(d.a) : esc(d.bb);
    drPick(d, st, side, it[1], ok => ok ? nm+" does belong to <b>"+sideL(side)+"</b>."
      : nm+" belongs to <b>"+sideL(it[1])+"</b>, not "+sideL(side)+".");
  });
  app.querySelectorAll("[data-sortm]").forEach(b => b.onclick = ()=>{
    const st=S.dr, d=DRILLS.find(x=>x.id===st.id);
    if(!d || drJudged(d, st) >= 0 || st.i>=st.order.length){ render(); return; }
    const it=d.items[st.order[st.i]], chosen=b.dataset.sortm, nm=`<b>\u201c${fmt(it[0])}\u201d</b>`;
    const colL = id => esc((d.cols.find(c=>c.id===id)||{}).l||id);
    drPick(d, st, chosen, it[1], ok => ok ? `${nm} fits <b>${colL(chosen)}</b>.`
      : `${nm} belongs to <b>${colL(it[1])}</b>, not ${colL(chosen)}.`);
  });
  const nx = el("drnext");
  if(nx) nx.onclick = ()=>{
    const st = S.dr; if(!st) return;
    landOn();   /* P2.6 (F31): the new item itself, whatever had focus */
    st.last = null; S.scroll.drill = 0; save(); render();
    window.scrollTo({top:0,behavior:"instant"});
  };
  app.querySelectorAll("[data-dwhy]").forEach(b => b.onclick = ()=>drToggleWhy(b));
  /* P2.6 (F31b, reopened): a placed step leaves the pool and a returned one leaves the sequence, so
     the control the reader pressed is gone after the redraw and focus fell to <main>. It now follows
     the step: a placed step is focused in "Your sequence", a returned one in the pool, and the check
     lands on its verdict. A keyboard press (click detail 0) also brings the step into view, which
     matters where the two columns stack (400 px). */
  app.querySelectorAll("[data-op]").forEach(b => b.onclick = e => {
    const st = S.dr, ix = +b.dataset.op;
    (st.placed = st.placed||[]).push(ix); st.pool = st.pool.filter(x=>x!==ix);
    landOn('[data-ounp="' + (st.placed.length - 1) + '"]', !e || !e.detail); save(); render(); });
  app.querySelectorAll("[data-ounp]").forEach(b => b.onclick = e => {
    const st = S.dr, n = +b.dataset.ounp, ix = st.placed[n];
    st.pool.push(ix); st.placed.splice(n,1);
    landOn('[data-op="' + ix + '"]', !e || !e.detail); save(); render(); });
  const oc = el("ocheck");
  if(oc) oc.onclick = ()=>{
    const st = S.dr, d = DRILLS.find(x=>x.id===st.id);
    landOn("#ordverdict", "start");
    st.checked = true; st.perfect = st.placed.every((ix,n)=>ix===n);
    { const prev=S.drills[d.id]||{}; S.drills[d.id] = {missed: st.placed.map((ix,n)=>ix===n?null:n).filter(x=>x!==null), done:true, ts:Date.now(), n:(prev.n||0)+1,
      hist:(prev.hist||[]).concat(st.placed.map((ix,n)=>({ix,pick:n,ok:ix===n,ts:Date.now()}))).slice(-60)}; }
    bumpDay(0); save(); render();
  };
}
function drFocus(n){ if(n) try{ n.focus({preventScroll:true}); }catch(e){} }
function startRapid(k){
  /* Due: most overdue first, drawn from EVERY block (the hub), not just this one. P2.3: the
     sets are rapidSet() (see practicePool); an empty one is reported, never filled at random. */
  if(k === "due") HUBCACHE = null;
  const ids = rapidSet(k);
  if(!ids.length){ SET_EMPTY = {m:"rapid", k}; S.mode = "rapid"; S.rf = null; save(); render();
    window.scrollTo({top:0,behavior:"instant"}); return; }
  SET_EMPTY = null;
  S.mode="rapid"; S.rf = {set:ids, i:0, t0:Date.now(), src:k}; save(); render();
  window.scrollTo({top:0,behavior:"instant"});
}
function wireRapid(app){
  /* P1.8: the figure is in the DOM (and open) by now, so its text can be measured and marked. */
  app.querySelectorAll(".rf details.deepreview[data-hl]").forEach(d => {
    try{ highlightFigure(d, JSON.parse(d.dataset.hl)); }catch(e){} });
  app.querySelectorAll("[data-rf]").forEach(b => b.onclick = ()=>{
    if(b.dataset.rf === "quit"){ S.rf=null; save(); render(); return; } startRapid(b.dataset.rf); });
  app.querySelectorAll("[data-rfo]").forEach(b => b.onclick = ()=>{
    /* P1.7: once answered, a click on an option only opens/closes its why-note in
       place (no render, so the page does not jump); it never re-answers. */
    if(S.rf && S.rf.pick != null){ rfToggleWhy(b); return; }
    const rf = S.rf, r = rItem(rf.set[rf.i]), pick = +b.dataset.rfo, ok = pick === r.a;
    rf.pick = pick; rf.open = null;
    const rms = Date.now() - (rf.t0 || Date.now());
    const foreign = !RBYID[rf.set[rf.i]];
    const rec = foreign ? {box:r.box, due:r.due, miss:r.miss||0, n:r.n||0}
                        : (S.rapid[r.i] = S.rapid[r.i] || {miss:0});
    if(!ok) rec.miss = (rec.miss||0)+1;
    rec.hist = (rec.hist||[]).concat([{ok,pick,ms:rms,ts:Date.now()}]).slice(-10);
    /* P1.7: hist stores the pick as an index, which is meaningless after the next
       load re-permutes the options; the chosen TEXT is what Weak Spots needs to
       name a rapid confusion, so it is kept by text (last one, and the last 10). */
    rec.lastPick = r.o[pick];
    rec.picks = (rec.picks||[]).concat([r.o[pick]]).slice(-10);
    rec.ms = rms;
    if(rf.src === "diag"){ rec.diag = true; rec.diagOk = ok; }
    /* A rapid item answered correctly but slowly is recognised, not known: it earns no step
       (promote's hold), so it comes round again at the gap it already had. */
    const hesitant = ok && rms > SLOW_RAPID_MS;
    promote(rec, ok, hesitant);
    if(hesitant) rec.slow = true;
    if(foreign){ const h = hubLoad(); const it = h.items[rf.set[rf.i]];
      if(it){ it.box=rec.box; it.due=rec.due; it.miss=rec.miss; it.n=rec.n; hubSave(h); HUBCACHE=null; } }
    if(ok) S.linked = (S.linked||[]).filter(x => x !== r.i);
    bumpDay(0); save(); render();
  });
  const nx = el("rfnext");
  if(nx) nx.onclick = ()=>{
    const rf = S.rf;
    landOn();   /* P2.6 (F31): the new item's prompt, never the same-position option of it */
    if(rf.i+1 < rf.set.length){ rf.i++; rf.pick=null; rf.open=null; rf.t0=Date.now(); save(); render(); }
    else{
      if(rf.src && rf.src.startsWith("stage:")) (S.stage[rf.src.slice(6)] = S.stage[rf.src.slice(6)]||{}).rapid = true;
      if(rf.src === "diag"){ const d = PATH.find(x=>x.kind==="diag");
        if(d) S.stage[d.id] = {done:true, n:rf.set.length, total:rf.set.length};
        PATH_NOTE = diagNote(rf.set); }
      const back = (rf.src && rf.src.startsWith("stage:")) || rf.src === "diag";
      S.rf = null; S.mode = back ? "path" : "rapid"; save(); render();
    }
  };
}
/* P1.7: toggles a wrong option's why-note by flipping the DOM node itself, so
   the scroll position is untouched; rf.open remembers it for any later render. */
function rfToggleWhy(b){
  if(!b || b.dataset.why == null) return;
  const i = +b.dataset.rfo, w = document.getElementById("rfw" + i); if(!w) return;
  const open = w.hidden; w.hidden = !open; b.setAttribute("aria-expanded", String(open));
  (S.rf.open = S.rf.open || {})[i] = open;
}
/* P1.7: rapid picks had no keyboard path. 1-5 press option A-E (answer, or after
   answering toggle that option's why); Enter goes to Next. Only while the rapid
   card is on screen, never while typing (search box, tutor box, notes), never
   with a modifier or a dialog open, and "/" and "?" are left to the global handler. */
function rapidKeydown(e){
  if(S.mode !== "rapid" || !S.rf || !S.rf.set || !S.rf.set.length) return;
  if(e.defaultPrevented || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
  const t = e.target || {};
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "") || t.isContentEditable) return;
  if(el("searchwrap") || document.querySelector('[aria-modal="true"]')) return;
  if(/^[1-5]$/.test(e.key)){
    const b = document.querySelector('.rfopts [data-rfo="' + (+e.key - 1) + '"]'); if(!b) return;
    e.preventDefault(); b.click(); return;
  }
  if(e.key === "Enter" && S.rf.pick != null){
    /* Enter on a focused control keeps its own meaning, except on an option
       button, where it would otherwise just re-toggle the note it opened. Only
       controls that act on Enter count: <main> itself carries tabindex=-1. */
    if(t.closest && t.closest("button,a[href],summary,[role=button],[role=link],[role=tab]") && !t.closest(".rfopt")) return;
    const nx = el("rfnext"); if(nx){ e.preventDefault(); nx.click(); }
  }
}
document.addEventListener("keydown", rapidKeydown);
/* P2.4 (F20, reopened 2026-09-28): serves spotPool(k), the pool its button and the plan's image
   row count. An empty set is reported (SET_EMPTY, the P2.3 notice), never refilled with every image. */
function startSpot(k){
  if(k !== "unseen") k = "all";
  const set = shuffle(spotPool(k));
  S.mode = "spot";
  if(!set.length){ SET_EMPTY = {m:"spot", k}; S.sp = null; save(); render();
    window.scrollTo({top:0,behavior:"instant"}); return; }
  SET_EMPTY = null;
  S.sp = {set, i:0, src:k, name:spName(k)}; buildSpotOpts(); save(); render();
  window.scrollTo({top:0,behavior:"instant"});
}
function wireSpot(app){
  app.querySelectorAll("[data-sp]").forEach(b => b.onclick = ()=>{
    if(b.dataset.sp === "quit"){ S.sp=null; save(); render(); return; } startSpot(b.dataset.sp); });
  app.querySelectorAll("[data-spo]").forEach(b => b.onclick = ()=>{
    /* P2.4 (K12): once answered, a click only opens/closes that option's why-note in place
       (no render, so the page does not jump); it never re-answers. */
    if(S.sp && S.sp.pick != null){ spToggleWhy(b); return; }
    const sp = S.sp, im = IMGS[sp.set[sp.i]], pick = +b.dataset.spo;
    sp.pick = pick; sp.open = null;
    S.spot[sp.set[sp.i]] = {ok: sp.opts[pick] === im.dx, n:((S.spot[sp.set[sp.i]]||{}).n||0)+1, ts:Date.now()};
    bumpDay(0); save(); render();
  });
  const nx = el("spnext");
  if(nx) nx.onclick = ()=>{
    const sp = S.sp;
    landOn();   /* P2.6 (F31): the new image's question, never the same-position option of it */
    if(sp.i+1 < sp.set.length){ sp.i++; sp.pick=null; sp.open=null; buildSpotOpts(); save(); render(); window.scrollTo({top:0,behavior:"instant"}); }
    else { S.sp=null; save(); render(); }
  };
}
/* P2.4 (K12): same in-place toggle as rfToggleWhy/qToggleWhy; sp.open remembers it. */
function spToggleWhy(b){
  if(!b || b.dataset.why == null || !S.sp) return;
  const i = +b.dataset.spo, w = document.getElementById("spw" + i); if(!w) return;
  const open = w.hidden; w.hidden = !open; b.setAttribute("aria-expanded", String(open));
  (S.sp.open = S.sp.open || {})[i] = open;
}
/* P2.4 (K21 for spot): a-e or 1-5 press the option in that position (answer, or after
   answering toggle that option's why); Enter goes to the next image. Only while an image
   is on screen, never while typing, never with a modifier, the search box or a dialog
   open; "/" and "?" stay with the global handler. */
function spotKeydown(e){
  const sp = S.sp;
  if(S.mode !== "spot" || !sp || !sp.set || !sp.set.length) return;
  if(e.defaultPrevented || e.repeat || e.ctrlKey || e.metaKey || e.altKey) return;
  const t = e.target || {};
  if(/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName || "") || t.isContentEditable) return;
  if(el("searchwrap") || document.querySelector('[aria-modal="true"]')) return;
  const k = String(e.key || "").toLowerCase();
  const n = k.length !== 1 ? -1 : /^[1-5]$/.test(k) ? +k - 1 : "abcde".indexOf(k);
  if(n >= 0){
    const b = document.querySelectorAll(".qopts [data-spo]")[n]; if(!b) return;
    e.preventDefault(); b.click(); return;
  }
  if(e.key === "Enter" && sp.pick != null){
    /* Enter on a focused control keeps its own meaning, except on an option button */
    if(t.closest && t.closest("button,a[href],summary,[role=button],[role=link],[role=tab]") && !t.closest(".qopt")) return;
    const nx = el("spnext"); if(nx){ e.preventDefault(); nx.click(); }
  }
}
document.addEventListener("keydown", spotKeydown);

/* @region engine.normalise-comments (ENGINE, engine) */
/* =====================================================================
   NORMALISE + BOOT
   ===================================================================== */
/* There used to be an expandRapidToFive() here that padded every item to five
   options by borrowing the CORRECT ANSWER of other items. It produced exactly the
   nonsense the design note above predicted: "Digoxin blocks which pump?" offering
   "Gap junction" and "Centrally", "Quinidine can cause what?" offering "ARBs" and
   "Bradykinin", and near-duplicate pairs like "VSD" / "Ventricular septal defect"
   inside one item. An option a reader can eliminate without knowing the content
   teaches nothing and inflates the score. Rapid fire is three-option recall; the
   five-option exam format lives in the vignette bank where it belongs.
   (P1.7-reopen2: that last sentence is history - the P1.1 block below replaced it
   with five hand-written options per rapid item.) */
/* @region content.rapid-opts (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.rapid-opt-swap (CONTENT, drop): cardio content; build.py emits the globals */
/* @region content.rapid-w (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.applyRapidFive (ENGINE, engine) */
/* Runs IMMEDIATELY BEFORE permuteOptions(), on purpose: new options must join r.o
   before the shuffle so all five are shuffled together; r.a still points at the
   same keyed text because swaps skip index r.a and additions are appended.
   r.w is built from the final option texts, so every key matches a live option. */
(function applyRapidFive(){
  const norm = s => String(s).replace(/\s+/g, " ").trim();
  const byNorm = m => { const o = {}; Object.keys(m).forEach(k => { o[norm(k)] = m[k]; }); return o; };
  const ADD = byNorm(RAPID_OPTS), SWAP = byNorm(RAPID_OPT_SWAP), WHY = byNorm(RAPID_W);
  const seen = new Set(), low = o => norm(stripTags(String(o))).toLowerCase();
  RAPID.forEach(r => {
    const k = norm(r.q); seen.add(k);
    const sw = SWAP[k];
    if(sw) r.o = r.o.map((o, i) => (i !== r.a && Object.prototype.hasOwnProperty.call(sw, o)) ? sw[o] : o);
    const add = ADD[k];
    if(add){ const have = new Set(r.o.map(low));
      add.forEach(d => { if(!have.has(low(d))){ r.o.push(d); have.add(low(d)); } }); }
    const w = WHY[k];
    if(w){ r.w = {}; r.o.forEach((o, i) => { if(i !== r.a && w[o]) r.w[o] = w[o]; }); }
  });
  /* A key that matches no question is a note nobody will ever see (the RAPID_X
     lesson); say so in the console rather than failing silently. */
  const orphan = [ADD, SWAP, WHY].flatMap(m => Object.keys(m)).filter(k => !seen.has(k));
  if(orphan.length && typeof console !== "undefined") console.warn("applyRapidFive: keys match no rapid question:", orphan);
})();
/* @region engine.permuteOptions (ENGINE, engine) */
(function permuteOptions(){
  const perm = (arr, seedStr) => {
    let h = 2166136261;
    for(let i=0;i<seedStr.length;i++){ h ^= seedStr.charCodeAt(i); h = Math.imul(h,16777619)>>>0; }
    h = mix32(h);
    const n = arr.length, ord = [...Array(n).keys()];
    for(let i=n-1;i>0;i--){ h = mix32((Math.imul(h,1103515245)+12345)>>>0); const j = h%(i+1); [ord[i],ord[j]]=[ord[j],ord[i]]; }
    return ord;
  };
  QS.forEach(q=>{ const ord = perm(q.o, q.id), w = {};
    ord.forEach((old,ni)=>{ if(q.w && q.w[old]!==undefined) w[ni] = q.w[old]; });
    q.o = ord.map(i=>q.o[i]); q.a = ord.indexOf(q.a); q.w = w; });
  /* P2.2 (R9) - seeded by the question text alone: inserting or reordering items no
     longer reshuffles every later item's options (the old seed carried the index) */
  RAPID.forEach(r=>{ const ord = perm(r.o, "r"+String(r.q));
    r.o = ord.map(j=>r.o[j]); r.a = ord.indexOf(r.a); });
  BLOCKS.forEach(b=>b.topics.forEach(t=>{ if(t.pretest) t.pretest.forEach((p,pi)=>{
    const ord = perm(p.o, t.id+"pt"+pi); p.o = ord.map(j=>p.o[j]); p.a = ord.indexOf(p.a); }); }));
  /* Recall grids were authored true-first, decoys-last. Unshuffled, tapping the
     top rows scored 100% without knowing anything -- and that score fed mastery. */
  BLOCKS.forEach(b=>b.topics.forEach(t=>{ if(t.grid && t.grid.items){
    const ord = perm(t.grid.items, t.id+"grid"); t.grid.items = ord.map(j=>t.grid.items[j]); } }));
})();

/* @region engine.audit (LITERALS, engine) */
/* P2.2 - named for the engine, not a block (the probe and the gate read __pathAudit) */
window.__pathAudit = () => {
  const topics = new Set(BLOCKS.flatMap(b=>b.topics.map(t=>t.id)));
  const dup = a => a.filter((x,i)=>a.indexOf(x)!==i);
  /* P2.6 - the texts DRILL_WHY is keyed by (CONTENT-SCHEMA §1.17): an order drill's items
     are its step strings; a sort or multi item is [text, side or column, image?]. The audit
     used to read items[i][0] for every kind, which is the first letter of an order step. */
  const itemTexts = d => (d.items||[]).map(it => d.kind==="order" ? String(it) : String((it||[])[0]));
  return {
    counts:{topics:topics.size,questions:QS.length,rapid:RAPID.length,drills:DRILLS.length,images:Object.keys(IMGS).length,figures:Object.keys(FIGS).length},
    duplicateQuestionIds:[...new Set(dup(QS.map(q=>q.id)))],
    badQuestionTopics:QS.filter(q=>!topics.has(q.c)).map(q=>q.id),
    badRapidTopics:RAPID.filter(r=>!topics.has(r.c)).map(r=>r.i),
    shortQuestionOptions:QS.filter(q=>!q.o||q.o.length<5).map(q=>q.id),
    /* P2.2 (R12) - every rapid item carries five options (the content contract), so
       anything shorter is listed, not only an item left with fewer than three. */
    shortRapidOptions:RAPID.filter(r=>!r.o||r.o.length<5).map(r=>r.i),
    dupQuestionOptions:QS.filter(q=>{const s=(q.o||[]).map(o=>stripTags(String(o)).toLowerCase().trim());
      return s.some((x,i)=>s.indexOf(x)!==i);}).map(q=>q.id),
    dupRapidOptions:RAPID.filter(r=>{const s=(r.o||[]).map(o=>stripTags(String(o)).toLowerCase().trim());
      return s.some((x,i)=>s.indexOf(x)!==i);}).map(r=>r.i),
    unannotatedImages:Object.entries(IMGS).filter(([,im])=>!im.ann||!im.ann.length).map(([k])=>k),
    topicsWithoutVisual:BLOCKS.flatMap(b=>b.topics).filter(t=>!(t.body||[]).some(x=>["img","f","vis","palace"].includes(x[0]))).map(t=>t.id),
    brokenImageRefs:BLOCKS.flatMap(b=>b.topics).flatMap(t=>(t.body||[]).filter(x=>x[0]==="img"&&!IMGS[x[1]]).map(x=>t.id+":"+x[1])),
    brokenFigureRefs:BLOCKS.flatMap(b=>b.topics).flatMap(t=>(t.body||[]).filter(x=>x[0]==="f"&&!FIGS[x[1]]).map(x=>t.id+":"+x[1])),
    badMultiDrills:DRILLS.filter(d=>d.kind==="multi"&&(d.items||[]).some(it=>!(d.cols||[]).some(c=>c.id===it[1]))).map(d=>d.id),
    /* A DRILL_WHY key that matches no item is a reason nobody will ever see --
       the same silent failure RAPID_X had, where entries were shadowed or
       assigned after their loop and simply never fired. Both directions are
       checked: dead keys, and items still on the bare template. P2.6: order steps
       included in both (K13: every step has a why). */
    drillWhyOrphanKeys:Object.entries(DRILL_WHY).flatMap(([did,m])=>{
      const d=DRILLS.find(x=>x.id===did);
      if(!d) return [did+" (no such drill)"];
      const texts=new Set(itemTexts(d));
      return Object.keys(m||{}).filter(k=>!texts.has(k)).map(k=>did+":"+k); }),
    drillItemsWithoutWhy:DRILLS.flatMap(d=>itemTexts(d).filter(x=>!(DRILL_WHY[d.id]||{})[x]).map(x=>d.id+":"+x))
  };
};

/* @region patch.placeImages4 (PATCH, drop): dropped */
/* @region patch.placeWhy (PATCH, drop): dropped */
/* @region patch.p4-placements (PATCH, drop): dropped */
/* @region engine.deriveMinutes (ENGINE, engine) */
/* ============ P1.6 - topic minutes derived from length ================== */
/* Every topic minute above was hand-set, which worked out at anywhere from 57
   to 160 words per minute - a 2.8x spread. Stage minutes and the whole pacing
   engine are built on those numbers, so every "N more days at this pace" line
   inherited the error. This IIFE runs LAST, after every REWRITE, split, trim
   and place pass, so it counts the words each topic actually renders. */
(function deriveMinutes(){
  const strip = s => String(s)
    .replace(/<[^>]+>/g, " ")                    /* markup */
    .replace(/&[a-z]+;|&#\d+;/gi, " ")           /* named and numeric entities */
    .replace(/\{\{[^}|]*\|/g, " ")               /* glossary link: keep the label */
    .replace(/\{\{|\}\}|\[\[|\]\]|\*\*/g, " ");
  /* body rows nest differently per type, so walk rather than assume a depth */
  const words = v => { let n = 0;
    if(typeof v === "string") n = strip(v).split(/\s+/).filter(Boolean).length;
    else if(Array.isArray(v)) v.forEach(x => { n += words(x); });
    else if(v && typeof v === "object") Object.values(v).forEach(x => { n += words(x); });
    return n; };
  const T = {};
  BLOCKS.forEach(b => b.topics.forEach(t => {
    /* row[0] is the block type ("p", "call", "steps", "t", "f", "img" ...),
       not prose, so it is dropped before counting */
    const w = (t.body || []).reduce((a, row) =>
      a + words(Array.isArray(row) ? row.slice(1) : row), 0);
    T[t.id] = t;
    t.mins = Math.min(18, Math.max(7, Math.round(w / 110)));
  }));
  /* Reading time ONLY. Time spent looking at a figure is deliberately kept out
     of t.mins - it would corrupt a words-per-minute estimate - so it stays in
     the per-topic stage allowance below, which is rebalanceMinutes' own
     arithmetic, reapplied here because the topic minutes just changed. */
  PATH.forEach(p => {
    if(p.kind !== "unit" || !p.topics) return;
    const read = p.topics.reduce((a, id) => a + ((T[id] || {}).mins || 0), 0);
    p.mins = Math.round(read + p.topics.length * 6);   /* reading + its checks */
  });
})();

/* @region content.q-diff (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.applyQDiff (ENGINE, engine) */
(function applyQDiff(){
  let miss = 0;
  /* P2.2 (R11) - a question whose difficulty is authored inline (q.d) is complete;
     only one with neither q.d nor a map entry is reported. */
  QS.forEach(q => { const d = Q_DIFF_R2[q.id] || Q_DIFF[q.id]; if(d) q.d = d; else if(!q.d) miss++; });
  if(miss) console.warn("P3.2: " + miss + " questions have no difficulty (q.d or Q_DIFF)");
})();

/* @region engine.boot-load (ENGINE, engine) */
/* P2.2 (R16) - ids first, then state: load() -> migrateRapidKeys()/repairState() need
   r.i and RBYID, which only tagEverything() assigns. */
tagEverything();
load();
/* @region content.concept-tags (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.applyConceptTags (ENGINE, engine) */
(function applyConceptTags(){
  /* Vocabulary is closed: anything outside CONCEPT_TAGS is dropped and warned
     about, so a typo can never create a private tag that P5.2 would thread on. */
  const ok = new Set(CONCEPT_TAGS), bad = [];
  let missQ = 0, missR = 0;
  const clean = (list, where) => (list || []).filter(t => {
    if(ok.has(t)) return true; bad.push(where + ":" + t); return false; });
  /* P2.2 (R9) - an item's own inline tags win; the side maps are the fallback, and
     R_TAGS is keyed by array index, so a reordered bank could re-tag through it. */
  const own = x => Array.isArray(x.tags) && x.tags.length ? x.tags : null;
  QS.forEach(q => { const t = clean(own(q) || Q_TAGS[q.id], q.id); if(t.length) q.tags = t; else missQ++; });
  RAPID.forEach(r => { const t = clean(own(r) || R_TAGS[r.ix], "r" + r.ix); if(t.length) r.tags = t; else missR++; });
  if(missQ) console.warn("P5.1: " + missQ + " questions absent from Q_TAGS");
  if(missR) console.warn("P5.1: " + missR + " rapid items absent from R_TAGS");
  if(bad.length) console.warn("P5.1: tags outside CONCEPT_TAGS: " + bad.join(", "));
})();
/* @region content.concept-home (CONTENT, drop): cardio content; build.py emits the globals */
/* @region engine.verifyConceptHomes (ENGINE, engine) */
(function verifyConceptHomes(){
  /* A pointer that names a section which no longer exists is worse than no
     pointer, so every home is checked against the rendered body here rather
     than trusted. Warns like applyConceptTags() instead of throwing. */
  const bad = [], ok = new Set(CONCEPT_TAGS);
  /* P5.V FIX 1: one checker, run over the home pointer AND over `also`, so a
     second section is exactly as protected from a later rewording as the first
     -- an unchecked `also` would rot into a sentence sending the student to a
     heading that is no longer there, which is the failure this function exists
     to prevent. */
  const checkPtr = (k, H, which) => {
    const t = findT(H.t); if(!t){ bad.push(k + ":" + which + " topic " + H.t); return; }
    const hs = (t.body || []).filter(x => x[0] === "h").map(x => String(x[1]).replace(/<[^>]+>/g, ""));
    if(hs.indexOf(H.h) < 0) bad.push(k + ":" + which + " heading");
    if(H.f && !FIGS[H.f]) bad.push(k + ":figure " + H.f); };
  CONCEPT_TAGS.forEach(k => { const H = CONCEPT_HOME[k];
    if(!H){ bad.push(k + ":no home"); return; }
    checkPtr(k, H, "home"); if(H.also) checkPtr(k, H.also, "also"); });
  Object.keys(DRILL_TAGS).forEach(id => { if(!DRILLS.some(d => d.id === id)) bad.push("drill " + id);
    DRILL_TAGS[id].forEach(k => { if(!ok.has(k)) bad.push("drill " + id + ":" + k); }); });
  if(bad.length) console.warn("P5.2: concept homes out of date: " + bad.join(", "));
})();
/* @region engine.threads (ENGINE, engine) */
/* P2.V F25 - the listing rule, in one place. conceptThreads() applies it and returns it
   (th.rule), threadsHTML() states it from there, and the page's self-test checks the
   rendered sentence against it, so the words can never drift from the rule again. */
const THREAD_MIN_MISSES = 3, THREAD_MIN_TOPICS = 2;
function conceptThreads(){
  /* Attempts and misses for one item always come from the same source -- the
     stored hist where there is one, the summary record otherwise -- so the
     rate below can never be a miss count over a different denominator. */
  const tally = {};
  let totAtt = 0, totMiss = 0;
  const add = (tags, topic, att, miss, chan) => {
    totAtt += att; totMiss += miss;
    (tags || []).forEach(k => { if(!CONCEPT_HOME[k]) return;
      const e = tally[k] = tally[k] || {k, miss:0, att:0, topics:{}, chan:{}};
      e.att += att; e.miss += miss; e.chan[chan] = 1;
      if(miss) e.topics[topic] = (e.topics[topic] || 0) + miss; }); };
  QS.forEach(q => { const a = S.qs[q.id]; if(!a) return;
    const h = (a.hist || []).length ? a.hist : [{ok:!!a.ok}];
    add(q.tags, q.c, h.length, h.filter(x => !x.ok).length, "questions"); });
  RAPID.forEach(r => { const sr = S.rapid[r.i]; if(!sr) return;
    const h = (sr.hist || []).length ? sr.hist : null;
    add(r.tags, r.c, h ? h.length : Math.max(sr.n || 0, sr.miss || 0, 1),
        h ? h.filter(x => !x.ok).length : (sr.miss || 0), "rapid picks"); });
  DRILLS.forEach(d => { const sr = S.drills[d.id]; if(!sr || !DRILL_TAGS[d.id]) return;
    /* One drill run is one sitting, so its contribution is capped at 3: a
       single bad run of a 12-item sort must not manufacture a thread. */
    add(DRILL_TAGS[d.id], d.c, Math.min((d.items || []).length || 1, 12),
        Math.min((sr.missed || []).length, 3), "a drill"); });
  const base = totAtt ? totMiss/totAtt : 0;
  /* The plan's floor is 3 misses across 2 topics, and that is what decides
     what gets LISTED. It cannot decide what gets ACTED ON: tags carry 7 to 44
     items, so a broad tag reaches 3 misses on volume alone while a small one
     the student is genuinely failing may never reach it. A thread is promoted
     only when it rests on 5+ attempts, at least a third of them wrong, and
     more misses than the student's OWN average predicts by more than chance
     explains -- 1.3 standard errors, so a 42%-wrong tag belonging to a
     34%-wrong student stays a lead instead of becoming an instruction. */
  /* P5.V FIX 2: a tag whose whole bank sits inside the topics it fired on, and
     which covers nearly every taggable item in each of them, is a NAME for those
     topics rather than an idea that crosses them. vasculitis-pattern carries 19
     of c2's 19 and 20 of c3's 20 and nothing anywhere else, so a thread on it
     fires on exactly "weak in both vasculitis topics" -- which the two lists
     directly above have already said. Measured from the bank on every call, so
     re-tagging an item changes the answer instead of leaving a stale constant.
     Such a row is still listed, and still carries the one thing the topic lists
     cannot give: the named sections. It is only barred from being promoted. */
  const bank = {}, perTopic = {};
  const note = (tags, topic) => { perTopic[topic] = (perTopic[topic] || 0) + 1;
    (tags || []).forEach(k => { if(!CONCEPT_HOME[k]) return;
      (bank[k] = bank[k] || {})[topic] = (bank[k][topic] || 0) + 1; }); };
  QS.forEach(q => note(q.tags, q.c));
  RAPID.forEach(r => note(r.tags, r.c));
  DRILLS.forEach(d => note(DRILL_TAGS[d.id], d.c));
  const ALIAS_COVER = 0.8;
  const isAlias = (k, tops) => { const b = bank[k] || {}, ids = Object.keys(b);
    return ids.length > 0 && ids.every(id => tops.indexOf(id) >= 0
      && b[id]/Math.max(1, perTopic[id]) >= ALIAS_COVER); };
  const rows = Object.keys(tally).map(k => { const e = tally[k];
    const tops = Object.keys(e.topics).sort((a, b) => e.topics[b] - e.topics[a]);
    const chans = Object.keys(e.chan), rate = e.att ? e.miss/e.att : 0;
    const exw = tops.reduce((a, id) => { const t = findT(id);
      return a + (!t ? 0.8 : yv(t) === "hi" ? 1 : yv(t) === "mid" ? 0.8 : 0.62); }, 0)/Math.max(1, tops.length);
    const exp = e.att*base, sd = Math.sqrt(Math.max(0.25, e.att*base*(1 - base)));
    /* Ranked by how far the rate sits above the student's own baseline, scaled
       by how much evidence is behind it, how many topics it crosses, how many
       formats it failed in, and what the exam weight of those topics is. */
    const score = Math.max(0.02, rate - base) * (0.4 + 0.6*Math.min(1, e.att/12))
                * (1 + 0.18*(tops.length - 2)) * (1 + 0.25*(chans.length - 1)) * exw;
    /* P5.V FIX 4: a flat att >= 5 treated 4 wrong out of 4 as weaker evidence
       than 2 wrong out of 5, which it is not, and some tags are small enough
       that a student may never meet five of them -- murmur-manoeuvres holds
       seven items in the whole bank. A CLEAN SWEEP is worth one attempt per
       topic it crosses beyond the first, floored at three, so 4-of-4 across
       three topics and 4-of-4 across two both count while 1-of-1 and 2-of-2
       still cannot reach the bar at any spread. A mixed record still needs 5. */
    const need = e.miss === e.att ? Math.max(3, 6 - tops.length) : 5;
    const alias = isAlias(k, tops);
    const strong = !alias && e.att >= need && rate >= 0.33 && (e.miss - exp) >= 1.3*sd;
    /* P2.V F25 - which part of the promotion test a listed row failed, so the row can say
       that and not a blanket "no worse than your average" (a 30%-wrong idea for a 5%-wrong
       student is worse than average; it is only under the one-third bar). */
    const reason = strong ? "" : alias ? "alias" : e.att < need ? "few" : rate < 0.33 ? "rate"
                 : rate <= base ? "average" : "chance";
    return {tag:k, home:CONCEPT_HOME[k], miss:e.miss, att:e.att, rate, base, exp, score,
            topics:tops, byTopic:e.topics, channels:chans, need, alias, strong, reason,
            floor: e.miss >= THREAD_MIN_MISSES && tops.length >= THREAD_MIN_TOPICS}; });
  const listed = rows.filter(r => r.floor).sort((a, b) => b.score - a.score);
  /* every idea missed at least once that is not yet listed, closest first */
  const pending = rows.filter(r => !r.floor && r.miss > 0).sort((a, b) => b.miss - a.miss || b.score - a.score);
  return {rows:listed, strong:listed.filter(r => r.strong), thin:listed.filter(r => !r.strong),
          base, misses:totMiss, attempts:totAtt, rule:{miss:THREAD_MIN_MISSES, topics:THREAD_MIN_TOPICS},
          pending, near: pending[0] || null};
}
function threadsHTML(th){
  /* Every row ends somewhere the student can actually go: a button that opens
     the topic where the idea is taught, the exact section inside it named in
     words, and where one exists a button that opens the figure full size. */
  /* P2.V F25 - every sentence here is read off what conceptThreads() computed: the rule
     comes from th.rule, a row or the near miss names EVERY topic the idea was missed in
     with its own count, and the empty state no longer claims "every miss sits inside a
     single topic" (it printed that, and one topic, for an idea missed once in each of
     two topics). The self-test (extra.conceptThreads) checks this text against
     conceptThreads() on seeded misses. */
  const R = th.rule || {miss:THREAD_MIN_MISSES, topics:THREAD_MIN_TOPICS};
  const list = c => c.length <= 1 ? (c[0] || "") : c.slice(0, -1).join(", ") + " and " + c[c.length - 1];
  /* P5.V FIX 6: " misses in N attempts" was emitted unconditionally one clause
     after the author had handled exactly this for attempt/attempts, so a row
     could read "about 1 misses in 5 attempts". One helper now pluralises both. */
  const plur = (n, w, many) => n + " " + (n === 1 ? w : (many || w + "s"));
  const topicT = id => esc((findT(id) || {t:"?"}).t);
  const where = r => list(r.topics.map(id => topicT(id) + " (" + r.byTopic[id] + ")"));
  const ruleTxt = "missed at least " + R.miss + " times across at least " + R.topics + " different topics";
  const head = `<div class="sectiontitle" id="threadsec" style="margin-top:34px"><h3>Concept threads</h3>
    <span class="st2">One idea, missed in more than one topic. Every list above can only name topics, so a student
    who keeps failing the same reasoning in four places is told about four topics and never about the reasoning.
    Each thread names the idea, every topic it has been missed in, and where it is taught.
    An idea is listed once it has been ${ruleTxt}, and promoted only once it is further above your own average
    than chance explains.</span></div>`;
  if(!th.rows.length){
    const n = th.near;
    let why;
    if(!th.misses) why = "No question or rapid pick has been missed yet, so there is no thread to follow."
      + " An idea becomes a thread once it has been " + ruleTxt + ".";
    else if(!n) why = "None of the misses so far is on an item that carries one of the ideas this section tracks,"
      + " so there is no thread to follow. An idea becomes a thread once it has been " + ruleTxt + ".";
    else {
      /* what the closest idea still needs under the rule: more misses, and a miss in a new topic if it has
         failed in fewer topics than the rule asks for */
      const moreT = Math.max(0, R.topics - n.topics.length), need = Math.max(R.miss - n.miss, moreT, 1);
      const other = n.topics.length === 1 ? "a topic other than " + topicT(n.topics[0])
                  : moreT === 1 ? "another topic" : moreT + " topics it has not been missed in yet";
      const after = !moreT ? ", in any topic"
                  : need === moreT ? " in " + other
                  : ", at least " + (moreT === 1 ? "one" : moreT) + " of them in " + other;
      why = "No idea has been " + ruleTxt + " yet, so there is no thread to follow. Closest is <b>" + esc(n.home.l)
        + "</b>, missed " + plur(n.miss, "time") + ": " + where(n) + ". It becomes a thread after "
        + plur(need, "more miss", "more misses") + " (" + (n.miss + need) + " in all)" + after
        + ". Until then the topic lists above are the better guide.";
    }
    return '<div id="threads">' + head + '<div class="empty">' + why + '</div></div>';
  }
  const TAGS = {alias:"another name for these topics", few:"too few attempts", rate:"under a third wrong",
                average:"no worse than your average", chance:"within chance of your average"};
  const row = r => { const H = r.home, ht = findT(H.t) || {t:"?"};
    const seen = !!(S.topics[H.t] || {}).read, verb = seen ? "Re-read" : "Read";
    /* P5.V FIX 1: the second section, for tags whose items are taught in two
       places. Inside the same topic it is named as a section, because the
       Re-read button already opens that topic; a different topic is named in
       full and earns its own button, because that is a second journey. */
    const A = H.also, at = A ? (findT(A.t) || {t:"?"}) : null;
    const alsoTxt = !A ? "" : A.t === H.t
      ? ` Then the section &ldquo;${esc(A.h)}&rdquo; in the same topic.`
      : ` Then <span style="color:var(--ink);font-weight:600">${esc(at.t)}</span> &mdash; the section &ldquo;${esc(A.h)}&rdquo;.`;
    const pc = x => Math.round(x*100) + "%";
    const note = r.strong
      ? " &middot; your own average predicts about " + plur(Math.round(r.exp), "miss", "misses") + " in "
        + plur(r.att, "attempt") + ", and you have " + r.miss
      : r.reason === "alias" ? " &middot; every item carrying this idea sits in those topics and it covers nearly all of them,"
        + " so this row is those topics under another name and the lists above already have it &mdash; what it"
        + " adds is where to read"
      : r.reason === "few" ? " &middot; only " + plur(r.att, "attempt") + " so far and promoting it needs " + r.need
        + ", so this is a lead rather than a verdict"
      : r.reason === "rate" ? " &middot; " + pc(r.rate) + " of your attempts on it were wrong, under the third a thread"
        + " needs before it is promoted"
      : r.reason === "average" ? " &middot; you miss " + pc(r.base) + " of everything and " + pc(r.rate)
        + " of this idea, so it is not out of line"
      : " &middot; you miss " + pc(r.base) + " of everything and " + pc(r.rate) + " of this idea, a gap that chance"
        + " can still explain at " + plur(r.att, "attempt");
    return `<div class="witem">
      <span><span class="wt">${esc(H.l)} <span class="tag ${r.strong ? "crit" : "ghost"}">${r.strong
          ? r.topics.length + " topics &middot; " + pc(r.rate) + " wrong" : TAGS[r.reason]}</span></span>
        <span class="wd">Missed <b>${r.miss}</b> of ${plur(r.att, "attempt")} on this idea: ${where(r)}
          &middot; across ${list(r.channels)}${note}.
          <br>${verb} <span style="color:var(--ink);font-weight:600">${esc(ht.t)}</span> &mdash; the section &ldquo;${esc(H.h)}&rdquo;${
          H.f ? ", then the diagram that goes with it" : ""}.${alsoTxt}</span></span>
      <span class="frow"><button class="btn sm gho" data-t="${escA(H.t)}">${verb}</button>${
        A && A.t !== H.t ? '<button class="btn sm gho" data-t="' + escA(A.t) + '">Also read</button>' : ""}${
        H.f ? '<button class="btn sm gho" data-zoomfig="' + escA(H.f) + '">Diagram</button>' : ""}</span>
    </div>`; };
  return '<div id="threads">' + head
    + (th.strong.length ? `<div class="wlist">${th.strong.map(row).join("")}</div>` : "")
    + (th.thin.length ? `<div class="call" style="margin-top:16px"><span class="cl">Not yet a pattern</span>
        ${th.strong.length ? "These also meet" : "These meet"} the listing rule, but each fails at least one part of the
        test for promotion, and its row names one: too few attempts, under a third of them wrong, no further above your own average
        than chance explains, or an idea that lives only in the topics it fired on, so the lists above already say it.
        Answer a few more on them before rearranging a week around them.</div>
        <div class="wlist">${th.thin.map(row).join("")}</div>` : "") + '</div>';
}
/* @region engine.boot-render (ENGINE, engine) */
/* P2.2 (R10) - the audit snapshot is taken after every load-time transform and after
   tagEverything(), so it describes the content the page actually renders. */
document.documentElement.dataset.pathAudit = JSON.stringify(window.__pathAudit());
bindChrome();
render();
/* @region engine.boot-tick (ENGINE, engine) */
setInterval(paintHeader, 30000);
