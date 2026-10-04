/* selftest.js -- extracted by engine/extract_engine.py from a frozen copy of the cardio page
   (sha256 08f567b69746244865090b7f9942a66faa690030e94feab9cedaecb6e24fc444).
   engine/base/selftest.js is the untouched extraction; engine/selftest.js is the working copy the P2 tasks edit.
   Each @region line names the cardio region that follows (engine/base/REGIONS.json). */
/* @region selftest.hooks (LITERALS, selftest) */
/* P5.2 self-test hook. Registered here because the self-test block below runs
   at boot and reads window.__selftestExtra at that moment. It seeds exactly
   the plan's floor -- three wrong answers on one concept tag, two of them in
   one topic and one in another -- then renders Weak Spots. The extra fields
   report WHICH thread fired and that the pointer text rendered with it, so a
   hard-coded heading could not satisfy this check unnoticed. */
window.__selftestExtra = ((prev) => ctx => Object.assign(prev ? prev(ctx) : {}, {
  conceptThreads: (function(){ ctx.fresh(); /* seed 3 misses on one tag across 2 topics */
    /* P2.2 (R3) / P2.6 - the tag is found in the loaded content, never named here. Only a
       tag with a home can thread (conceptThreads skips the rest), and the misses are seeded
       from every channel conceptThreads counts -- questions first, then rapid items, then
       drills -- so a small bank still reaches the floor. The tag chosen is the one whose
       items cross the most topics, then the one with the most items. Content with no tag
       in two topics reports "skipped" instead of failing. */
    const byTag = {}, now = Date.now();
    const note = (tags, topic, it) => (tags || []).forEach(k => { if(!CONCEPT_HOME[k]) return;
      const e = byTag[k] = byTag[k] || {}; (e[topic] = e[topic] || []).push(it); });
    QS.forEach(q => note(q.tags, q.c, {kind:"q", x:q}));
    RAPID.forEach(r => note(r.tags, r.c, {kind:"r", x:r}));
    DRILLS.forEach(d => note(DRILL_TAGS[d.id], d.c, {kind:"d", x:d}));
    const spread = k => Object.keys(byTag[k]).length, count = k => Object.values(byTag[k]).reduce((a, l) => a + l.length, 0);
    const tag = Object.keys(byTag).filter(k => spread(k) >= 2).sort((a, b) => spread(b) - spread(a) || count(b) - count(a))[0] || null;
    if(!tag) return {rendered:null, skipped:"no concept tag with a home is carried by items in two topics"};
    /* a drill run is capped at 3 misses over up to 12 attempts, so topics with more single
       items (questions, rapid) are drawn from first */
    const byTopic = byTag[tag], single = id => byTopic[id].filter(s => s.kind !== "d").length;
    const tops = Object.keys(byTopic).sort((a, b) => single(b) - single(a) || byTopic[b].length - byTopic[a].length);
    /* the plan's floor exactly: two misses in the first topic, one in the next */
    const seed = byTopic[tops[0]].slice(0, 2);
    tops.slice(1).forEach(id => { if(seed.length < 3) seed.push(byTopic[id][0]); });
    if(seed.length < 3) return {rendered:null, skipped:"tag " + tag + " carries only " + seed.length + " items"};
    const miss = ({kind, x}) => {
      if(kind === "q"){ const pick = (x.a + 1) % x.o.length, at = {ok:false, conf:"think", pick, ms:30000, ts:now, d:x.d || 2};
        S.qs[x.id] = {ok:false, conf:"think", pick, ms:30000, n:1, ts:now, hist:[at]}; }
      else if(kind === "r"){ const pick = (x.a + 1) % x.o.length;
        S.rapid[x.i] = {box:1, due:now + 6e5, n:1, miss:1, ms:9000, last:now, lastPick:x.o[pick], picks:[x.o[pick]], hist:[{ok:false, pick, ms:9000, ts:now}]}; }
      else S.drills[x.id] = {missed:[0], done:true, ts:now, n:1, hist:[]}; };
    /* P2.V F25 - the section's words are checked against what conceptThreads() computed, in
       four seeded states: nothing missed; the idea missed once in each of two topics (the
       state the verifier caught saying "every miss sits inside a single topic"); twice in
       one topic; and the listing floor. In each, every "Topic (n)" on the section must be a
       count conceptThreads() holds for the idea shown, every topic it holds must be named,
       the rule must be stated from th.rule, and the near miss must say what it still needs. */
    const title = id => (findT(id) || {t:"?"}).t;
    const reEsc = s => String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const secText = () => { const n = document.getElementById("threads");
      return n ? String(n.textContent || "").replace(/\s+/g, " ").trim() : ""; };
    const check = name => { S.mode = "weak"; render();
      const th = conceptThreads(), txt = secText(), R = th.rule || {}, bad = [];
      if(!txt) bad.push(name + ": no #threads section");
      if(txt.indexOf("missed at least " + R.miss + " times across at least " + R.topics + " different topics") < 0)
        bad.push(name + ": the rule (" + R.miss + " misses, " + R.topics + " topics) is not stated");
      const shown = th.rows.length ? th.rows : th.near ? [th.near] : [];
      shown.forEach(r => { if(txt.indexOf(r.home.l) < 0) bad.push(name + ": " + r.tag + " label missing");
        r.topics.forEach(id => { if(txt.indexOf(title(id) + " (" + r.byTopic[id] + ")") < 0)
          bad.push(name + ": " + r.tag + " " + id + " (" + r.byTopic[id] + ") not named"); }); });
      /* longest titles first, each match blanked, so a title that ends another cannot match inside it */
      let rest = txt;
      ALLT().slice().sort((a, b) => String(b.t).length - String(a.t).length).forEach(t => {
        rest = rest.replace(new RegExp(reEsc(t.t) + " \\((\\d+)\\)", "g"), (m0, k) => {
          if(!shown.some(r => r.byTopic[t.id] === +k)) bad.push(name + ": " + t.id + " (" + k + ") is not a count conceptThreads computed");
          return "\u0000"; }); });
      if(th.rows.length) th.rows.forEach(r => {
        if(txt.indexOf("Missed " + r.miss + " of " + r.att + " attempt") < 0) bad.push(name + ": " + r.tag + " miss/attempt count");
        if(txt.indexOf(String(r.home.h)) < 0) bad.push(name + ": " + r.tag + " home section missing"); });
      else if(th.near){ const n = th.near, moreT = Math.max(0, R.topics - n.topics.length), need = Math.max(R.miss - n.miss, moreT, 1);
        const want = ["Closest is " + n.home.l + ", missed " + n.miss + " time" + (n.miss === 1 ? "" : "s"),
                      "after " + need + " more miss" + (need === 1 ? "" : "es") + " (" + (n.miss + need) + " in all)"
                        + (moreT ? "" : ", in any topic")];
        if(moreT && n.topics.length === 1) want.push("in a topic other than " + title(n.topics[0]));
        want.forEach(w => { if(txt.indexOf(w) < 0) bad.push(name + ": near miss lacks \"" + w + "\""); }); }
      else { if(/Closest is/.test(txt)) bad.push(name + ": names a closest idea conceptThreads did not compute");
        if(!th.misses && txt.indexOf("No question or rapid pick has been missed yet") < 0) bad.push(name + ": empty state"); }
      return {state:name, rows:th.rows.map(r => r.tag), near:th.near ? {tag:th.near.tag, byTopic:th.near.byTopic} : null,
              misses:th.misses, bad}; };
    const A = byTopic[tops[0]], B = byTopic[tops[1]], states = [];
    ctx.fresh(); states.push(check("nothing missed"));
    ctx.fresh(); [A[0], B[0]].forEach(miss); states.push(check("once in each of two topics"));
    if(A.length >= 2){ ctx.fresh(); [A[0], A[1]].forEach(miss); states.push(check("twice in one topic")); }
    ctx.fresh(); seed.forEach(miss); states.push(check("at the listing floor"));
    const mismatches = [].concat(...states.map(s => s.bad));
    const th = conceptThreads(), top = th.rows[0] || null, txt = ctx.main(), H = CONCEPT_HOME[tag];
    return {rendered:/Concept threads/i.test(txt), seededTag:tag, seededTopics:tops.slice(0, 2),
      seeded:seed.map(s => s.kind + ":" + (s.x.id != null ? s.x.id : s.x.ix)),
      listed:th.rows.map(r => r.tag), listedSeeded:th.rows.some(r => r.tag === tag), top: top && top.tag, pointsAt: top && top.home.t,
      pointerRendered: txt.indexOf(ctx.strip(H.h)) >= 0 && txt.indexOf(H.l) >= 0,
      strong:th.strong.length, thin:th.thin.length,
      textMatches: !mismatches.length, mismatches, states:states.map(s => ({state:s.state, rows:s.rows, near:s.near}))}; })() }))(window.__selftestExtra);
/* P5.3 self-test hook, chained onto P5.2's rather than replacing it. It seeds
   one wrong attempt of each kind inside a single topic -- one under the stem
   floor, one on an option the existing pair set already names, one that is
   neither -- renders Weak Spots, then reads the counts back off the classifier
   and the section out of the rendered page, so neither a hard-coded heading nor
   a classifier that agrees with nothing on screen could satisfy it unnoticed. */
window.__selftestExtra = ((prev) => ctx => Object.assign(prev ? prev(ctx) : {}, {
  errorTypes: (function(){ ctx.fresh();
    /* Two questions of one topic must offer the SAME wrong option, because that
       is the only way confusions() can ever name a pair. Found rather than
       hard-coded, so re-worded options cannot quietly retire this check. */
    const idx = {};
    QS.forEach(q => q.o.forEach((o, i) => { if(i === q.a) return;
      (idx[q.c + "|" + o] = idx[q.c + "|" + o] || []).push({q, i}); }));
    const key = Object.keys(idx).filter(k => idx[k].length >= 2)
      .find(k => QS.filter(q => q.c === idx[k][0].q.c).length >= 3);
    /* P2.2 (R3) - a bank with no such pair reports that, rather than throwing */
    if(!key) return {classified:null, skipped:"no topic with 3+ questions offers one wrong option twice"};
    const two = idx[key], tid = two[0].q.c;
    /* The third question is picked on an option no other question in the topic
       offers, which is what guarantees it can only land on knowledge gap. */
    const lone = q => q.o.map((o, i) => i).filter(i => i !== q.a && idx[q.c + "|" + q.o[i]].length < 2)[0];
    const third = QS.find(q => q.c === tid && q.id !== two[0].q.id && q.id !== two[1].q.id && lone(q) != null);
    if(!third) return {classified:null, skipped:"no third question in " + tid + " with an option no other question offers"};
    const put = (q, pick, ms) => { const at = {ok:false, conf:"think", pick, ms, ts:Date.now(), d:q.d || 2};
      S.qs[q.id] = {ok:false, conf:"think", pick, ms, n:1, ts:Date.now(), hist:[at]}; };
    /* Both halves have to be wrong on the same option before the pair exists at
       all; the second is also made too fast, which is what turns it into the
       misread instead of a second confusion. */
    put(two[0].q, two[0].i, stemFloorMs(two[0].q) + 40000);
    put(two[1].q, two[1].i, 2000);
    put(third, lone(third), stemFloorMs(third) + 40000);
    S.mode = "weak"; render();
    const et = errorTypes(), row = et.byTopic[tid] || {}, txt = ctx.main();
    const rendered = /Error types/i.test(txt) && /What each one asks you to do differently/i.test(txt)
      && txt.indexOf("Knowledge gap") >= 0;
    return {classified: rendered && row.misread === 1 && row.confusion === 1 && row.gap === 1 && row.wrong === 3,
      rendered, topic:tid, sharedOption:ctx.strip(key.split("|")[1]),
      counts:{misread:row.misread, confusion:row.confusion, gap:row.gap, wrong:row.wrong, untimed:row.untimed},
      seeded:{confusion:two[0].q.id, misread:two[1].q.id, gap:third.id},
      floor:{msPerWord:260, minMs:6000, lo:et.floorLo, hi:et.floorHi, slowestWpmOnStemPlusOptions:Math.round(et.slowestWpm)},
      pairsNamed:et.pairs, bankReachable:et.reachable, bankWrongOptions:et.slots,
      testableShare:+et.testable.toFixed(2)}; })() }))(window.__selftestExtra);
/* P5.4 self-test hook, chained onto P5.3's rather than replacing it (and P5.3's
   is itself chained onto P5.2's, so all three still report). Six sittings are
   seeded, not one: it must show on both surfaces AND in both of their states,
   and it must stay silent on a flat sitting, on one under thirty answers, on
   yesterday's, and on one whose fall is only a switch from rapid to practice.
   A line that were simply always on could not pass, and nor could one that only
   ever appeared on a landing screen. */
window.__selftestExtra = ((prev) => ctx => Object.assign(prev ? prev(ctx) : {}, {
  fatigue: (function(){
    const now = Date.now(), STEP = 120000;
    if(!QS.length || !RAPID.length) return {shown:null, skipped:"needs questions and rapid items"};
    /* Answers are laid two minutes apart and the run ends now, so every seeded
       sitting is inside the gap and none of them needs a fake clock. */
    /* P2.2 (R3) - a bank smaller than the sitting is cycled: each answer is appended to
       its item's hist, and sittingAnswers() reads every hist entry, so the sitting holds
       all the seeded answers whatever the bank size (a large bank seeds exactly as before). */
    const seed = (rows, end) => { ctx.fresh();
      let qi = 0, ri = 0;
      rows.forEach((row, i) => { const ts = end - (rows.length - 1 - i) * STEP;
        if(row.p){ const q = QS[qi++ % QS.length], pick = row.ok ? q.a : (q.a + 1) % q.o.length;
          const rec = S.qs[q.id] = S.qs[q.id] || {n:0, hist:[]};
          Object.assign(rec, {ok:row.ok, conf:"think", pick, ms:40000, n:rec.n + 1, ts});
          rec.hist.push({ok:row.ok, conf:"think", pick, ms:40000, ts, d:q.d || 2}); }
        else { const r = RAPID[ri++ % RAPID.length], pick = row.ok ? r.a : (r.a + 1) % r.o.length;
          const rec = S.rapid[r.i] = S.rapid[r.i] || {n:0, miss:0, hist:[]};
          Object.assign(rec, {box:row.ok ? 2 : 1, due:ts + 6e5, miss:rec.miss + (row.ok ? 0 : 1), n:rec.n + 1, ms:9000, last:ts});
          rec.hist.push({ok:row.ok, pick, ms:9000, ts}); } });
      return sessionFatigue(now); };
    /* mode defaults to strict alternation, so the practice/rapid mix is the same
       at both ends of the sitting and the guard is not what is under test. */
    const mk = (n, wrong, mode) => Array.from({length:n}, (_, i) =>
      ({ok:wrong.indexOf(i) < 0, p:mode ? mode(i) : i % 2 === 0}));
    const dead = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
    const SLIDE = [3,7,11,16,18,19,21,22,24,25,27,28,30];   /* 80% then 40% */
    const f = seed(mk(32, SLIDE), now);
    const LINE = "Accuracy has dropped " + f.drop + " points this session — take a break";
    const see = () => ctx.main().indexOf(LINE) >= 0;
    const quiet = () => !/take a break/i.test(ctx.main());
    S.mode = "practice"; S.ps = null; render(); const pBuild = see();
    S.ps = {set:[QS[0].id], i:0, src:"all", t0:now}; render(); const pCard = see();
    S.ps = null; S.mode = "rapid"; S.rf = null; render(); const rBuild = see();
    S.rf = {set:[RAPID[0].i], i:0, t0:now, src:"all"}; render(); const rCard = see();
    S.rf = null;
    /* Silent cases. Each is rendered, not merely computed, because the only
       failure that matters is a line on the screen that should not be there. */
    const flat = seed(mk(32, [3,7,11,18,22,26]), now);
    S.mode = "practice"; render(); const qFlat = quiet();
    const short = seed(mk(20, [10,11,12,13,14,15,16,17,18,19]), now);
    S.mode = "practice"; render(); const qShort = quiet();
    const stale = seed(mk(32, SLIDE), now - 26 * 3600e3);
    S.mode = "practice"; render(); const qStale = quiet();
    /* The same fall, but the first half is all practice and the second half all
       rapid: a real 40-point gap that is a change of task, not fatigue. */
    const shift = seed(mk(32, SLIDE, i => i < 16), now);
    S.mode = "rapid"; render(); const qShift = quiet();
    /* And the release. Eighty per cent, then seventeen wrong in a row, then
       eighty per cent again: it latches on the way down and lets go on its own
       once the gap is back under ten points. */
    const back = seed(mk(47, [3,7,11].concat(dead, [34,38,42])), now);
    S.mode = "practice"; render(); const qBack = quiet();
    S.ps = S.rf = null;
    return {shown: pBuild && pCard && rBuild && rCard && qFlat && qShort && qStale && qShift && qBack,
      line:LINE, n:f.n, drop:f.drop, first:f.first, last:f.last, mix:f.mix, hard:f.hard,
      onPracticeBuilder:pBuild, onPracticeQuestion:pCard, onRapidBuilder:rBuild, onRapidQuestion:rCard,
      quietWhenFlat:qFlat, quietUnder30:qShort, quietWhenStale:qStale, quietOnModeShift:qShift,
      clearsOnRecovery:qBack,
      flat:{n:flat.n, drop:flat.drop}, short:{n:short.n, on:short.on}, stale:{n:stale.n, on:stale.on},
      modeShift:{drop:shift.drop, mix:shift.mix, on:shift.on},
      recovered:{n:back.n, drop:back.drop, on:back.on},
      rule:{minAnswers:FATIGUE_MIN, window:FATIGUE_WIN, onAtPoints:FATIGUE_ON, offAtPoints:FATIGUE_OFF,
            maxMixShift:FATIGUE_MIX, maxHardnessRise:FATIGUE_HARD,
            sittingGapHours:SITTING_GAP / 3600e3}}; })() }))(window.__selftestExtra);
/* @region selftest.main (LITERALS, selftest) */
/* ======================= SELF-TEST  (?selftest=1) =======================
   Machine-readable invariants (REPRO-PLAN.md §8, F36/F37). Runs ONLY when the page is
   opened with ?selftest=1. It never saves (save() and flushNow() are no-ops
   while window.__SELFTEST is set), works on a fresh blank state, and restores
   the real state afterwards. The gate's probe (probe_repro.js) reads the
   selftest pre element through headless Chrome --dump-dom. R.ok is false when
   a section throws or an invariant at the end fails; the other numbers are reports.
   Each section is isolated: one throwing does not blank the report. */
if(/[?&]selftest=1/.test(location.search)){
  window.__SELFTEST = true;
  const R = {ok:true, errors:[], generatedAt:new Date().toISOString()};
  const SNAP = JSON.stringify(S), RealDate = window.Date, EXAM0 = EXAM;
  const strip = s => String(s||"").replace(/<[^>]+>/g,"").replace(/&[a-z]+;/g," ").trim();
  const wc = s => strip(s).split(/\s+/).filter(Boolean).length;
  const fnv = s => { let h=2166136261; for(let i=0;i<s.length;i++){ h^=s.charCodeAt(i); h=Math.imul(h,16777619)>>>0; } return h.toString(16).padStart(8,"0"); };
  const fresh = () => { Object.keys(S).forEach(k=>delete S[k]); Object.assign(S, blank()); };
  const sec = (name, fn) => { try{ R[name] = fn(); }catch(e){ R.ok=false; R.errors.push(name+": "+e.message); R[name]=null; } };
  const main = () => (document.querySelector("main")||{innerText:""}).innerText;
  const realTopic = () => ({read:true, dwell:600, grid:1, gridAt:Date.now()});
  /* P2.2 (R3) - a completed stage records the counts the loaded content really has */
  const completeStage = p => { if(p.kind==="diag"){ const n=Math.max(1,diagSet().length); S.stage[p.id]={done:true,n,total:n,acc:1}; }
    else if(p.kind==="final"){ const n=Math.max(1,finalN()); S.stage[p.id]={quiz:{done:true,acc:1,n,total:n}}; }
    else { (p.topics||[]).forEach(id=>{ S.topics[id]=realTopic(); }); const n=Math.max(1,stageQs(p).length); S.stage[p.id]={quiz:{done:true,acc:1,n,total:n},rapid:true}; } };
  window.addEventListener("error", e => { R.ok=false; R.errors.push("window: "+e.message); });

  fresh();
  sec("audit", () => window.__pathAudit());
  sec("auditListsEmpty", () => Object.entries(R.audit||{}).filter(([k])=>k!=="counts").every(([,v])=>Array.isArray(v)&&!v.length));
  /* P2.6 - every mode the engine offers (MODES), not a copied list */
  sec("viewFailures", () => MODES.map(m=>m[0]).map(m=>{ try{ S.mode=m; if(m==="learn") S.cur=(ALLT()[0]||{}).id||null; render(); const t=main(); return /\bNaN\b|\bundefined\b|\[object/.test(t)? m+":leak" : null; }catch(e){ return m+":"+e.message; } }).filter(Boolean));
  sec("biasChi", () => { const chi=d=>{const e=d.reduce((a,b)=>a+b,0)/d.length; return +d.reduce((a,o)=>a+(o-e)*(o-e)/e,0).toFixed(1);};
    return [0,1,2,3].map(s=>{ const d=[0,0,0,0,0]; QS.forEach(q=>d[viewOrder(q,s).indexOf(q.a)]++); return chi(d); }); });
  sec("paceDays", () => { let offset=0;
    class FakeDate extends RealDate { constructor(...a){ a.length? super(...a) : super(RealDate.now()+offset); } static now(){ return RealDate.now()+offset; } }
    window.Date = FakeDate; const out={};
    try{ for(const N of [2,3,5,7,10,14]){ fresh(); offset=0; S.paceDays=N; let day=0;
      while(day<40){ if(!PATH.filter(p=>!stageDone(p)).length) break; day++;
        const plan=todaysPlan(); const sr=plan.picked.filter(r=>r.act&&r.act[0]==="stage"); if(!sr.length){ day=-1; break; }
        sr.forEach(r=>completeStage(stageOf(r.act[1]))); bumpDay(plan.mins); offset+=864e5; }
      out[N]=day; } } finally { window.Date = RealDate; }
    return out; });
  /* P2.V F4 - the plan head's day count (data-plandays, from planDaysLeft) must be what
     todaysPlan() really schedules. The plan is stepped a day at a time for paces 1-14, once
     with no review and once with a standing review load (due items from another block and a
     linked queue), and on EVERY day the head's figure is compared with the days still taken.
     P2.3 - the linked queue is seeded with real rapid ids of this block: repairState now drops any
     other id, so a made-up one would test a queue the page can no longer hold. */
  sec("paceHeader", () => { if(!PATH.length) return {skipped:"no stages yet"}; let offset=0; const bad=[], hl=window.hubLoad;
    class FakeDate extends RealDate { constructor(...a){ a.length? super(...a) : super(RealDate.now()+offset); } static now(){ return RealDate.now()+offset; } }
    const due={}; for(let i=0;i<6;i++) due["zz"+i]={b:"zz-other", bn:"another block", c:"x", q:"q", o:[], a:0, box:1, due:1, miss:1, n:1};
    window.Date = FakeDate;
    try{ for(const load of [0,1]){ window.hubLoad = () => ({v:1, items: load ? due : {}});
      for(let N=1; N<=14; N++){ fresh(); offset=0; S.paceDays=N; if(load) S.linked=RAPID.slice(0,2).map(r=>r.i); const said=[]; let day=0;
        while(day<40 && PATH.some(p=>!stageDone(p))){ day++;
          const m=/data-plandays="(\d+)"/.exec(planHTML()); said.push(m ? +m[1] : -1);
          const plan=todaysPlan(); const sr=plan.picked.filter(r=>r.act&&r.act[0]==="stage"); if(!sr.length){ day=-1; break; }
          sr.forEach(r=>completeStage(stageOf(r.act[1]))); bumpDay(plan.mins); offset+=864e5; }
        if(day<0 || said.some((v,i)=>v!==day-i)) bad.push((load?"with review, ":"")+"pace "+N+": head said "+said.join(",")+", plan took "+day); } } }
    finally{ window.Date = RealDate; window.hubLoad = hl; }
    return {bad}; });
  sec("finished", () => { fresh(); PATH.forEach(completeStage); S.mode="path"; render();
    return {headline:(document.querySelector("main h1")||{}).innerText||"", stagesDone:PATH.filter(stageDone).length, of:PATH.length}; });
  sec("drillWhy", () => ({orphans:(R.audit||{}).drillWhyOrphanKeys?R.audit.drillWhyOrphanKeys.length:-1, missing:(R.audit||{}).drillItemsWithoutWhy?R.audit.drillItemsWithoutWhy.length:-1}));
  sec("imagesWithoutCredit", () => Object.entries(IMGS).filter(([,im])=>!im.cred).map(([k])=>k));
  sec("qExplanationMissesAnswer", () => QS.filter(q=>{ const a=strip(q.o[q.a]).toLowerCase(), e=strip(q.e).toLowerCase(), kw=a.split(/\s+/).filter(w=>w.length>4); return kw.length && !kw.some(w=>e.includes(w)); }).map(q=>q.id));
  sec("longestOption", () => ({
    questions: QS.filter(q=>{ const L=q.o.map(o=>strip(o).length); return L[q.a]===Math.max(...L) && L[q.a]>1.35*Math.max(...L.filter((_,i)=>i!==q.a)); }).map(q=>q.id),
    rapid: RAPID.filter(r=>{ const L=r.o.map(o=>strip(o).length); return L[r.a]===Math.max(...L) && L[r.a]>1.4*Math.max(...L.filter((_,i)=>i!==r.a)); }).map(r=>r.ix) }));
  sec("rapidRestatementCandidates", () => RAPID.filter(r=>{ const a=strip(r.o[r.a]).toLowerCase(); return wc(r.x)<14 && strip(r.x).toLowerCase().includes(a); }).map(r=>r.ix));
  /* P2.6 - an image is covered when every wrong label it offers has its own note (the old
     test counted three notes, the number of wrong labels a cardio image carried) */
  sec("spotWrongNotes", () => { const full = im => (im.wrong||[]).length > 0 && im.wrong.every(w => im.ww && im.ww[w]);
    return {imagesWithNotes:Object.values(IMGS).filter(full).length, images:Object.keys(IMGS).length,
      missing:Object.entries(IMGS).filter(([,im])=>!full(im)).map(([k])=>k)}; });
  sec("glossaryNeverLinked", () => { const linked=new Set(); BLOCKS.flatMap(b=>b.topics).forEach(t=>{ S.mode="learn"; S.cur=t.id; render(); document.querySelectorAll(".gterm").forEach(g=>linked.add(g.dataset.g)); });
    return Object.keys(GLOSS).filter(k=>!linked.has(k)); });
  sec("topicWpm", () => { const rows=BLOCKS.flatMap(b=>b.topics).map(t=>({id:t.id, words:wc((t.body||[]).map(x=>JSON.stringify(x)).join(" ")), mins:t.mins})); const w=rows.map(r=>r.words/Math.max(1,r.mins));
    return {spread:+(Math.max(...w)/Math.min(...w)).toFixed(2), rows}; });
  sec("tagging", () => ({ yieldHi:BLOCKS.flatMap(b=>b.topics).filter(t=>t.exam==="hi").length, topics:BLOCKS.flatMap(b=>b.topics).length,
    difficulty:QS.reduce((a,q)=>{ a[q.d||2]=(a[q.d||2]||0)+1; return a; },{}),
    untaggedQuestions:QS.filter(q=>!Array.isArray(q.tags)||!q.tags.length).length, untaggedRapid:RAPID.filter(r=>!Array.isArray(r.tags)||!r.tags.length).length }));
  sec("topicsWithoutWhy", () => BLOCKS.flatMap(b=>b.topics).filter(t=>!(t.body||[]).some(x=>x[0]==="why")).map(t=>t.id));
  sec("rapidPerTopic", () => RAPID.reduce((a,r)=>{ a[r.c]=(a[r.c]||0)+1; return a; },{}));
  sec("visuals", () => ({ questionsWithVisual:QS.filter(q=>q.ef||q.ei).length, questions:QS.length, rapidWithoutVisual:RAPID.filter(r=>!rapidMedia(r)).length, rapid:RAPID.length,
    figKeys:Object.keys(FIGS), topicFigRefs:[...new Set(BLOCKS.flatMap(b=>b.topics).flatMap(t=>(t.body||[]).filter(x=>x[0]==="f").map(x=>x[1])))], rapidMediaFigs:[...new Set(Object.values(RAPID_MEDIA).filter(v=>/^fig:/.test(v)).map(v=>v.slice(4)))] }));
  sec("a11y", () => { const out={htmlLang:document.documentElement.lang||"", titleTags:document.querySelectorAll("title").length};
    fresh(); S.mode="path"; render(); const b=document.querySelector("main button"); if(b) b.focus(); render();
    out.focusAfterRender = document.activeElement===document.body ? "BODY" : document.activeElement.tagName;
    /* P2.6 - a bank with no question or no rapid item yet (mid-wave) skips that half */
    const q=QS[0]; if(!q) out.practice="skipped: no questions"; else { S.mode="practice"; S.ps={set:[q.id], i:0, src:"all", t0:Date.now(), pick:q.a, shown:true, conf:"sure"}; S.qs[q.id]={ok:true,conf:"sure",pick:q.a,n:1,ts:Date.now()}; render();
    out.ariaLivePractice = document.querySelectorAll("main [aria-live]").length;
    out.ariaLivePracticeCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>/\bcorrect\b|why the answer/i.test(e.innerText||"")); }
    const r=RAPID[0]; if(!r) out.rapid="skipped: no rapid items"; else { S.mode="rapid"; S.rf={set:[r.i], i:0, t0:Date.now(), src:"all", pick:r.a}; S.rapid[r.i]={box:1,n:1,ok:true}; render();
    out.ariaLiveRapid = document.querySelectorAll("main [aria-live]").length;
    out.ariaLiveRapidCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>(e.innerText||"").includes(strip(r.o[r.a])) || /\bcorrect\b/i.test(e.innerText||"")); }
    out.liveElements = [...document.querySelectorAll("[aria-live]")].map(e=>e.tagName+"."+String(e.className).slice(0,20));
    return out; });
  sec("a11yFeedback", () => { const out={};
    try{ const d=DRILLS.find(x=>x.kind==="sort"); if(!d) out.drill="skipped: no sort drill"; else { S.mode="drill"; S.dr={id:d.id, order:d.items.map((_,i)=>i), i:1, missed:[], hist:[], last:{ok:true, msg:"<b>"+d.items[0][0]+"</b> does belong to "+d.a+"."}}; render();
      out.ariaLiveDrill = document.querySelectorAll("main [aria-live]").length;
      out.ariaLiveDrillCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>(e.innerText||"").includes(strip(d.items[0][0]))); } }catch(e){ out.drillErr=e.message; }
    try{ const k=Object.keys(IMGS)[0], im=IMGS[k]; if(!im) out.spot="skipped: no images"; else { S.mode="spot"; S.sp={set:[k], i:0, opts:[im.dx].concat(im.wrong||[]), pick:0, shown:true}; S.spot[k]={ok:true,n:1,ts:Date.now()}; render();
      out.ariaLiveSpot = document.querySelectorAll("main [aria-live]").length;
      out.ariaLiveSpotCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>(e.innerText||"").includes(strip(im.dx))); } }catch(e){ out.spotErr=e.message; }
    return out; });
  /* P2.V F31 - focus after the two changes the P2.4 and P2.5 redos found. "Test me again" (the
     recall grid) disappears in its own redraw, so focus must land on the first item of the fresh
     grid, not on main. The lightbox is aria-modal, so Tab and Shift+Tab must cycle inside it, and
     Escape must hand focus back to the control that opened it. Seeded from the loaded content: a
     bank with no grid, or nothing to enlarge, skips that half. */
  sec("focus", () => { const out = {}, tag = a => !a || a === document.body ? "BODY"
      : a.tagName + (a.id ? "#" + a.id : "") + (a.dataset && a.dataset.rg != null ? "[data-rg=" + a.dataset.rg + "]" : "");
    const gt = ALLT().find(t => t.grid && (t.grid.items||[]).length);
    if(!gt) out.gridRetake = "skipped: no recall grid";
    else { fresh(); S.topics[gt.id] = {grid:0.5, gridAt:Date.now(), gridPick:[]}; S.mode = "learn"; S.cur = gt.id; render();
      const again = document.getElementById("rgagain");
      if(!again) out.gridRetake = false;
      else { again.focus(); again.click(); const first = document.querySelector("#rgrid [data-rg]");
        out.gridRetake = !!first && document.activeElement === first; out.gridRetakeFocus = tag(document.activeElement); } }
    let opener = null; fresh();
    for(const t of ALLT()){ S.mode = "learn"; S.cur = t.id; render();
      opener = document.querySelector("main [data-zoomfig], main [data-zoomimg]"); if(opener) break; }
    if(!opener) out.lightbox = "skipped: nothing to enlarge";
    else { const key = (k, shift) => document.dispatchEvent(new KeyboardEvent("keydown", {key:k, shiftKey:!!shift, bubbles:true, cancelable:true}));
      const sig = opener.getAttribute("data-zoomfig") != null ? ["data-zoomfig", opener.getAttribute("data-zoomfig")] : ["data-zoomimg", opener.getAttribute("data-zoomimg")];
      opener.focus(); opener.click();
      const dlg = document.getElementById("lightbox"), stops = dlg ? [...dlg.querySelectorAll(FOCUSABLE_SEL)].filter(isTabbable) : [];
      const r = {opened:!!dlg, stops:stops.length, openFocus:!!dlg && document.activeElement === stops[0]};
      /* each Tab must move to the NEXT stop (a synthetic key has no default action, so focus that
         merely stays put would otherwise pass), and the last one must wrap to the first */
      let inside = true, inOrder = stops.length > 0;
      for(let i = 0; i < stops.length; i++){ key("Tab"); inside = inside && !!dlg && dlg.contains(document.activeElement);
        if(document.activeElement !== stops[(i + 1) % stops.length]) inOrder = false; }
      r.tabCycles = inOrder;
      key("Tab", true); inside = inside && !!dlg && dlg.contains(document.activeElement);
      r.shiftTabWraps = stops.length > 0 && document.activeElement === stops[stops.length - 1];
      r.stayedInside = inside;
      key("Escape"); const a = document.activeElement;
      r.closed = !document.getElementById("lightbox");
      r.focusReturned = !!a && a.getAttribute && a.getAttribute(sig[0]) === sig[1];
      r.focusAfterClose = tag(a);
      if(document.getElementById("lightbox")) closeLightbox();
      out.lightboxSteps = r;
      out.lightbox = r.opened && r.openFocus && r.tabCycles && r.shiftTabWraps && r.stayedInside && r.closed && r.focusReturned; }
    return out; });
  sec("examPast", () => { fresh(); EXAM = new RealDate(RealDate.now()-5*864e5); S.mode="path"; render(); const t=main();
    const out={bannerShown:/date has passed|has passed|set a new date|update your exam date/i.test(t), daysLeft:daysLeft(), ceilingInPast:examCeiling()<RealDate.now()};
    EXAM = EXAM0; return out; });
  /* P2.6 - the daily plan needs a stage spine; content with no PATH yet (mid-wave) skips these two */
  sec("reviewShareAtPace14", () => { if(!PATH.length) return {skipped:"no stages yet"}; fresh(); RAPID.forEach(r=>{ S.rapid[r.i]={box:1,due:RealDate.now()-6e5,n:1,miss:1}; }); S.paceDays=14; const plan=todaysPlan();
    const review=plan.picked.filter(r=>!/^stage:/.test(r.id)).reduce((a,r)=>a+r.mins,0); return {review, budget:plan.budget, share:+(review/Math.max(1,plan.budget)).toFixed(2)}; });
  sec("lateResetBudgetRatio", () => { if(!PATH.length) return {skipped:"no stages yet"}; fresh(); for(let i=1;i<=10;i++){ const d=new RealDate(RealDate.now()-i*864e5); S.days[dayKeyLocal(d)]={acts:3,mins:30,done:[]}; }
    S.paceDays=5; S.paceSetAt=RealDate.now(); const remaining=PATH.filter(p=>!stageDone(p)).reduce((a,p)=>a+p.mins,0); const plan=todaysPlan();
    return {budget:plan.budget, remaining, ratio:+(plan.budget/Math.max(1,remaining)).toFixed(2), blockDay:blockDay()}; });
  /* P2.3 - repairState keeps the linked queue to this block's rapid items: stale and inherited-key ids go,
     duplicates go, queue order stays; a queue of stale ids alone leaves no linked row in the plan */
  sec("linkedPrune", () => { if(!RAPID.length) return {skipped:"no rapid items"}; fresh();
    const a = RAPID[0].i, b = (RAPID[1] || RAPID[0]).i, want = a === b ? [a] : [b, a];
    S.linked = ["zz-stale-id", b, a, b, "constructor", 7]; repairState(); const after = S.linked.slice();
    S.linked = ["zz-stale-id"]; repairState(); const emptied = S.linked.length === 0;
    const noRow = !PATH.length || !todaysPlan().picked.some(r => r.id === "linked");
    return {after, want, emptied, noRow, pass: JSON.stringify(after) === JSON.stringify(want) && emptied && noRow}; });
  /* P2.6 (F30) - the tutor is never handed the answer to an item not answered in the CURRENT
     attempt. The first question, rapid item, image and drill of each kind in the loaded content is
     recorded as answered in an earlier attempt, then served again unanswered: its context must
     carry a lock and no answer, and the dock must neither send nor show a reply given on an
     answered screen. Answered in this attempt, the answer must appear (so the check can fail).
     Sentinel pretest, sexp and grid rows must never reach the reading context, and terms blanked
     by the cloze toggle must not either. */
  sec("tutorContext", () => { const bad = [], checked = [], OLD = "zz-earlier-reply-naming-the-answer";
    const has = (c, w) => !!w && (String(c.text).indexOf(w) >= 0 || String(c.detail).indexOf(w) >= 0);
    const seedChat = () => { S.chat = [{r:"me", t:"which one is it?", k:null}, {r:"ai", t:OLD, k:null}]; };
    const locked = (name, words) => { const c = screenContext(); checked.push(name);
      if(!c.lock) bad.push(name + ": no lock while unanswered");
      words.filter(w => has(c, w)).forEach(w => bad.push(name + ": unanswered context carries \"" + w.slice(0, 40) + "\""));
      if(chatFor(c.lock).some(m => m.t === OLD)) bad.push(name + ": an answered-screen reply would be sent");
      dockOpen = true; paintDock(); const shown = (el("dockbody") || {}).textContent || ""; dockOpen = false; paintDock();
      if(shown.indexOf(OLD) >= 0) bad.push(name + ": an answered-screen reply is shown"); };
    const opened = (name, words) => { const c = screenContext();
      if(c.lock) bad.push(name + ": still locked once answered");
      if(!words.some(w => has(c, w))) bad.push(name + ": answered context lacks the answer");
      if(!chatFor(c.lock).some(m => m.t === OLD)) bad.push(name + ": history not restored once answered"); };
    const q = QS[0];
    if(q){ fresh(); seedChat(); S.qs[q.id] = {ok:true, conf:"sure", pick:q.a, n:1, ts:Date.now()};
      S.mode = "practice"; S.ps = {set:[q.id], i:0, src:"verify", t0:Date.now()}; render();
      const w = ["CORRECT:", stripTags(q.e).slice(0, 40)]; locked("practice", w);
      S.ps.pick = q.a; S.ps.shown = true; opened("practice", w); }
    const r = RAPID[0];
    if(r){ fresh(); seedChat(); S.rapid[r.i] = {box:2, n:1, due:Date.now(), hist:[{ok:true, pick:r.a, ms:3000, ts:Date.now()}]};
      S.mode = "rapid"; S.rf = {set:[r.i], i:0, t0:Date.now(), src:"due"}; render();
      const w = ["ANSWER:"].concat(r.x ? [stripTags(r.x).slice(0, 40)] : []); locked("rapid", w);
      S.rf.pick = r.a; opened("rapid", w); }
    const ik = Object.keys(IMGS)[0];
    if(ik){ const im = IMGS[ik]; fresh(); seedChat(); S.spot[ik] = {ok:true, n:1, ts:Date.now()};
      S.mode = "spot"; S.sp = {set:[ik], i:0, src:"all", name:spName("all")}; buildSpotOpts(); render();
      const w = [String(im.dx), String(im.n)]; locked("spot", w);
      S.sp.pick = S.sp.opts.indexOf(im.dx); opened("spot", w); }
    /* a drill run served in reverse, so the steps on screen are never in their true order */
    ["sort", "multi", "order"].forEach(kind => { const d = DRILLS.find(x => (x.kind || "sort") === kind); if(!d || !d.items.length) return;
      fresh(); seedChat(); S.drills[d.id] = {missed:[], done:true, ts:Date.now(), n:1, hist:[]};
      const n = d.items.length, rev = d.items.map((_, i) => n - 1 - i);
      S.mode = "drill"; S.dr = kind === "order" ? {id:d.id, pool:rev, placed:[], checked:false} : {id:d.id, order:rev, i:0, missed:[]}; render();
      const w = ["KEY DISCRIMINATOR", stripTags(d.key || "").slice(0, 40)].concat(kind === "order" && n > 1
        ? [d.items.map(x => stripTags(x)).join(" | "), d.items.map(x => stripTags(x)).join(" > ")] : [stripTags(drillWhyText(d, rev[0])).slice(0, 40)]);
      locked("drill:" + kind, w);
      if(kind === "order"){ S.dr.placed = d.items.map((_, i) => i); S.dr.pool = []; S.dr.checked = true; } else S.dr.i = n;
      opened("drill:" + kind, w.slice(0, 2)); });
    const lt = BLOCKS.flatMap(b => b.topics)[0];   /* the content object itself (ALLT() hands out copies) */
    if(lt){ const Z = "zzsentinel", body0 = lt.body, pre0 = lt.pretest, grid0 = lt.grid; checked.push("learn");
      try{ lt.body = (body0 || []).concat([["sexp", {id:"zz_sx", q:Z + " question", o:[Z + " keyed option", Z + " decoy"], a:0, why:Z + " note"}]]);
        lt.pretest = (pre0 || []).concat([{q:Z + " pretest", o:[Z + " pretest key", Z + " pretest decoy"], a:0, why:Z + " pretest note", w:{}}]);
        lt.grid = {q:(grid0 || {}).q || Z, items:((grid0 || {}).items || []).concat([[Z + " grid item", 1]])};
        fresh(); S.mode = "learn"; S.cur = lt.id; render();
        if(has(screenContext(), Z)) bad.push("learn: a pretest, sexp or grid row reached the reading context");
      } finally { lt.body = body0; [["pretest", pre0], ["grid", grid0]].forEach(([f, v]) => { if(v === undefined) delete lt[f]; else lt[f] = v; }); }
      /* the body is what follows the TOPIC line (the title may hold a blanked term) */
      const body = c => { const t = String(c.text), i = t.indexOf("\nTOPIC: "); return i < 0 ? t : t.slice(t.indexOf("\n", i + 1) + 1); };
      fresh(); S.cloze = true; S.mode = "learn"; S.cur = lt.id; render();
      const blanks = [...new Set([...document.querySelectorAll("#app .cz.blank")].map(s => s.textContent.trim()).filter(Boolean))];
      if(blanks.length){ const shown = blanks.filter(w => body(screenContext()).indexOf(w) >= 0);
        if(shown.length) bad.push("cloze: blanked terms reach the tutor: " + shown.slice(0, 3).join(", "));
        S.cloze = false; render();
        if(!blanks.some(w => body(screenContext()).indexOf(w) >= 0)) bad.push("cloze: no blanked term appears once cloze is off"); } }
    dockOpen = false; paintDock();
    return checked.length ? {checked, bad, pass:!bad.length} : {skipped:"no items to serve"}; });
  sec("maps", () => ({ qIdsByTopic:QS.reduce((a,q)=>{ (a[q.c]=a[q.c]||[]).push(q.id); return a; },{}), rapidIx:RAPID.map(r=>r.ix), imgKeys:Object.keys(IMGS),
    qeHash:Object.fromEntries(QS.map(q=>[q.id, fnv(String(q.e||""))])), qwHash:Object.fromEntries(QS.map(q=>[q.id, fnv(JSON.stringify(q.w||{}))])), rxHash:Object.fromEntries(RAPID.map(r=>[r.ix, fnv(String(r.x||""))])),
    optHash:Object.fromEntries(QS.map(q=>[q.id, fnv(JSON.stringify(q.o))])), roptHash:Object.fromEntries(RAPID.map(r=>[r.ix, fnv(JSON.stringify(r.o))])) }));
  /* tasks in later phases register their own sections by defining window.__selftestExtra */
  sec("extra", () => (typeof window.__selftestExtra==="function") ? window.__selftestExtra({fresh, strip, wc, main, completeStage, RealDate}) : {});
  /* P2.6 - the invariants this report exists to prove now decide R.ok; before, only a
     section that threw could fail it, so a non-empty audit or a thread that never fired
     still read "ok". Each one is measured on the loaded content: a hook that finds no
     material for its case in this content says "skipped" and why, and that is not a
     failure, so the same checks hold on the stub, on a block mid-wave and on the full block. */
  const must = (name, pass, detail) => { if(!pass){ R.ok=false; R.errors.push("assert " + name + (detail ? ": " + detail : "")); } };
  must("auditListsEmpty", R.auditListsEmpty === true,
    Object.entries(R.audit||{}).filter(([k,v])=>k!=="counts" && Array.isArray(v) && v.length).map(([k,v])=>k+" ("+v.length+")").join(", "));
  must("viewFailures", Array.isArray(R.viewFailures) && !R.viewFailures.length, (R.viewFailures||[]).join(", "));
  must("linkedPrune", !!R.linkedPrune && (!!R.linkedPrune.skipped || R.linkedPrune.pass === true), JSON.stringify(R.linkedPrune));
  must("paceHeader", !!R.paceHeader && (!!R.paceHeader.skipped || !(R.paceHeader.bad||[]).length), ((R.paceHeader||{}).bad||[]).join("; "));
  must("tutorContext", !!R.tutorContext && (!!R.tutorContext.skipped || R.tutorContext.pass === true), ((R.tutorContext||{}).bad||[]).join("; "));
  /* P2.V F31 - each half passes or says why it was skipped */
  ["gridRetake", "lightbox"].forEach(k => { const v = (R.focus||{})[k];
    must("focus." + k, v === true || /^skipped/.test(String(v)), k === "lightbox" ? JSON.stringify((R.focus||{}).lightboxSteps||null) : (R.focus||{}).gridRetakeFocus); });
  const ex = R.extra || {}, hook = (k, pass, why) => { const h = ex[k]; if(h && h.skipped) return; must("extra." + k, !!h && pass(h), h && why ? why(h) : ""); };
  /* P2.V F25 - the threads text must say what conceptThreads() computed (textMatches) */
  hook("conceptThreads", h => h.rendered && h.listedSeeded && h.pointerRendered && h.textMatches === true, h => (h.mismatches||[]).join("; "));
  hook("errorTypes", h => h.classified === true);
  hook("fatigue", h => h.shown === true);

  window.Date = RealDate; EXAM = EXAM0;
  Object.keys(S).forEach(k=>delete S[k]); Object.assign(S, JSON.parse(SNAP)); S.mode="path"; render();
  const pre = document.createElement("pre"); pre.id = "selftest"; pre.style.cssText = "position:fixed;left:0;top:0;z-index:99999;max-height:40vh;overflow:auto;background:#000;color:#0f0;font:11px/1.3 monospace;padding:8px;margin:0";
  pre.textContent = JSON.stringify(R); document.body.appendChild(pre);
  /* P2.2 - the verdict goes on the root element, not into document.title: the page keeps
     its own title (META.title) while the self-test report sits in <pre id="selftest">. */
  document.documentElement.dataset.selftest = (R.ok ? "OK" : "FAIL") + " " + R.errors.length + " errors";
}
