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
  conceptThreads: (function(){ ctx.fresh(); /* seed 3 wrong answers on one tag across 2 topics into S.qs */
    const tag = "infarct-timeline", byTopic = {};
    QS.filter(q => (q.tags || []).indexOf(tag) >= 0).forEach(q => (byTopic[q.c] = byTopic[q.c] || []).push(q));
    const tops = Object.keys(byTopic).sort((a, b) => byTopic[b].length - byTopic[a].length).slice(0, 2);
    const seed = byTopic[tops[0]].slice(0, 2).concat(byTopic[tops[1]].slice(0, 1));
    seed.forEach(q => { const pick = (q.a + 1) % q.o.length, at = {ok:false, conf:"think", pick, ms:30000, ts:Date.now(), d:q.d || 2};
      S.qs[q.id] = {ok:false, conf:"think", pick, ms:30000, n:1, ts:Date.now(), hist:[at]}; });
    S.mode="weak"; render();
    const th = conceptThreads(), top = th.rows[0] || null;
    return {rendered:/Concept threads/i.test(ctx.main()), seededTag:tag, seededTopics:tops, seeded:seed.map(q => q.id),
      listed:th.rows.map(r => r.tag), top: top && top.tag, pointsAt: top && top.home.t,
      pointerRendered: th.rows.some(r => ctx.main().indexOf(ctx.strip(r.home.h)) >= 0),
      strong:th.strong.length, thin:th.thin.length}; })() }))(window.__selftestExtra);
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
    const two = idx[key], tid = two[0].q.c;
    /* The third question is picked on an option no other question in the topic
       offers, which is what guarantees it can only land on knowledge gap. */
    const lone = q => q.o.map((o, i) => i).filter(i => i !== q.a && idx[q.c + "|" + q.o[i]].length < 2)[0];
    const third = QS.find(q => q.c === tid && q.id !== two[0].q.id && q.id !== two[1].q.id && lone(q) != null);
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
    /* Answers are laid two minutes apart and the run ends now, so every seeded
       sitting is inside the gap and none of them needs a fake clock. */
    const seed = (rows, end) => { ctx.fresh();
      let qi = 0, ri = 0;
      rows.forEach((row, i) => { const ts = end - (rows.length - 1 - i) * STEP;
        if(row.p){ const q = QS[qi++], pick = row.ok ? q.a : (q.a + 1) % q.o.length;
          S.qs[q.id] = {ok:row.ok, conf:"think", pick, ms:40000, n:1, ts,
            hist:[{ok:row.ok, conf:"think", pick, ms:40000, ts, d:q.d || 2}]}; }
        else { const r = RAPID[ri++], pick = row.ok ? r.a : (r.a + 1) % r.o.length;
          S.rapid[r.i] = {box:row.ok ? 2 : 1, due:ts + 6e5, miss:row.ok ? 0 : 1, n:1, ms:9000, last:ts,
            hist:[{ok:row.ok, pick, ms:9000, ts}]}; } });
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
   Machine-readable invariants for AUDIT-PLAN.md. Runs ONLY when the page is
   opened with ?selftest=1. It never saves (save() and flushNow() are no-ops
   while window.__SELFTEST is set), works on a fresh blank state, and restores
   the real state afterwards. check_plan.py reads the selftest pre element
   through headless Chrome --dump-dom, so every number below is a target that
   some task moves, and the gate will not close that task until it has moved.
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
  const completeStage = p => { if(p.kind==="diag") S.stage[p.id]={done:true,n:21,total:21,acc:1};
    else if(p.kind==="final") S.stage[p.id]={quiz:{done:true,acc:1,n:40,total:40}};
    else { (p.topics||[]).forEach(id=>{ S.topics[id]=realTopic(); }); S.stage[p.id]={quiz:{done:true,acc:1,n:7,total:7},rapid:true}; } };
  window.addEventListener("error", e => { R.ok=false; R.errors.push("window: "+e.message); });

  fresh();
  sec("audit", () => window.__cardioAudit());
  sec("auditListsEmpty", () => Object.entries(R.audit||{}).filter(([k])=>k!=="counts").every(([,v])=>Array.isArray(v)&&!v.length));
  sec("viewFailures", () => ["path","learn","practice","drill","rapid","spot","weak","gloss"].map(m=>{ try{ S.mode=m; if(m==="learn") S.cur="f1"; render(); const t=main(); return /\bNaN\b|\bundefined\b|\[object/.test(t)? m+":leak" : null; }catch(e){ return m+":"+e.message; } }).filter(Boolean));
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
  sec("finished", () => { fresh(); PATH.forEach(completeStage); S.mode="path"; render();
    return {headline:(document.querySelector("main h1")||{}).innerText||"", stagesDone:PATH.filter(stageDone).length, of:PATH.length}; });
  sec("drillWhy", () => ({orphans:(R.audit||{}).drillWhyOrphanKeys?R.audit.drillWhyOrphanKeys.length:-1, missing:(R.audit||{}).drillItemsWithoutWhy?R.audit.drillItemsWithoutWhy.length:-1}));
  sec("imagesWithoutCredit", () => Object.entries(IMGS).filter(([,im])=>!im.cred).map(([k])=>k));
  sec("qExplanationMissesAnswer", () => QS.filter(q=>{ const a=strip(q.o[q.a]).toLowerCase(), e=strip(q.e).toLowerCase(), kw=a.split(/\s+/).filter(w=>w.length>4); return kw.length && !kw.some(w=>e.includes(w)); }).map(q=>q.id));
  sec("longestOption", () => ({
    questions: QS.filter(q=>{ const L=q.o.map(o=>strip(o).length); return L[q.a]===Math.max(...L) && L[q.a]>1.35*Math.max(...L.filter((_,i)=>i!==q.a)); }).map(q=>q.id),
    rapid: RAPID.filter(r=>{ const L=r.o.map(o=>strip(o).length); return L[r.a]===Math.max(...L) && L[r.a]>1.4*Math.max(...L.filter((_,i)=>i!==r.a)); }).map(r=>r.ix) }));
  sec("rapidRestatementCandidates", () => RAPID.filter(r=>{ const a=strip(r.o[r.a]).toLowerCase(); return wc(r.x)<14 && strip(r.x).toLowerCase().includes(a); }).map(r=>r.ix));
  sec("spotWrongNotes", () => ({imagesWithNotes:Object.values(IMGS).filter(im=>im.ww && Object.keys(im.ww).length>=3).length, images:Object.keys(IMGS).length}));
  sec("glossaryNeverLinked", () => { const linked=new Set(); BLOCKS.flatMap(b=>b.topics).forEach(t=>{ S.mode="learn"; S.cur=t.id; render(); document.querySelectorAll(".gterm").forEach(g=>linked.add(g.dataset.g)); });
    return Object.keys(GLOSS).filter(k=>!linked.has(k)); });
  sec("topicWpm", () => { const rows=BLOCKS.flatMap(b=>b.topics).map(t=>({id:t.id, words:wc((t.body||[]).map(x=>JSON.stringify(x)).join(" ")), mins:t.mins})); const w=rows.map(r=>r.words/Math.max(1,r.mins));
    return {spread:+(Math.max(...w)/Math.min(...w)).toFixed(2), rows}; });
  sec("tagging", () => ({ yieldHi:BLOCKS.flatMap(b=>b.topics).filter(t=>t.exam==="hi").length, topics:BLOCKS.flatMap(b=>b.topics).length,
    difficulty:QS.reduce((a,q)=>{ a[q.d||2]=(a[q.d||2]||0)+1; return a; },{}),
    untaggedQuestions:QS.filter(q=>!Array.isArray(q.tags)||!q.tags.length).length, untaggedRapid:RAPID.filter(r=>!Array.isArray(r.tags)||!r.tags.length).length }));
  sec("topicsWithoutWhy", () => BLOCKS.flatMap(b=>b.topics).filter(t=>!(t.body||[]).some(x=>x[0]==="why")).map(t=>t.id));
  sec("rapidPerTopic", () => RAPID.reduce((a,r)=>{ a[r.c]=(a[r.c]||0)+1; return a; },{}));
  sec("visuals", () => ({ questionsWithVisual:QS.filter(q=>q.ef||q.ei).length, questions:QS.length, rapidWithoutVisual:RAPID.filter(r=>!RAPID_MEDIA[r.q]).length, rapid:RAPID.length,
    figKeys:Object.keys(FIGS), topicFigRefs:[...new Set(BLOCKS.flatMap(b=>b.topics).flatMap(t=>(t.body||[]).filter(x=>x[0]==="f").map(x=>x[1])))], rapidMediaFigs:[...new Set(Object.values(RAPID_MEDIA).filter(v=>/^fig:/.test(v)).map(v=>v.slice(4)))] }));
  sec("a11y", () => { const out={htmlLang:document.documentElement.lang||"", titleTags:document.querySelectorAll("title").length};
    fresh(); S.mode="path"; render(); const b=document.querySelector("main button"); if(b) b.focus(); render();
    out.focusAfterRender = document.activeElement===document.body ? "BODY" : document.activeElement.tagName;
    const q=QS[0]; S.mode="practice"; S.ps={set:[q.id], i:0, src:"all", t0:Date.now(), pick:q.a, shown:true, conf:"sure"}; S.qs[q.id]={ok:true,conf:"sure",pick:q.a,n:1,ts:Date.now()}; render();
    out.ariaLivePractice = document.querySelectorAll("main [aria-live]").length;
    out.ariaLivePracticeCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>/correct|why the answer/i.test(e.innerText||""));
    const r=RAPID[0]; S.mode="rapid"; S.rf={set:[r.i], i:0, t0:Date.now(), src:"all", pick:r.a}; S.rapid[r.i]={box:1,n:1,ok:true}; render();
    out.ariaLiveRapid = document.querySelectorAll("main [aria-live]").length;
    out.ariaLiveRapidCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>(e.innerText||"").includes(strip(r.o[r.a])) || /correct/i.test(e.innerText||""));
    out.liveElements = [...document.querySelectorAll("[aria-live]")].map(e=>e.tagName+"."+String(e.className).slice(0,20));
    return out; });
  sec("a11yFeedback", () => { const out={};
    try{ const d=DRILLS.find(x=>x.kind==="sort"); S.mode="drill"; S.dr={id:d.id, order:d.items.map((_,i)=>i), i:1, missed:[], hist:[], last:{ok:true, msg:"<b>"+d.items[0][0]+"</b> does belong to "+d.a+"."}}; render();
      out.ariaLiveDrill = document.querySelectorAll("main [aria-live]").length;
      out.ariaLiveDrillCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>(e.innerText||"").includes(strip(d.items[0][0]))); }catch(e){ out.drillErr=e.message; }
    try{ const k=Object.keys(IMGS)[0], im=IMGS[k]; S.mode="spot"; S.sp={set:[k], i:0, opts:[im.dx].concat((im.wrong||[]).slice(0,3)), pick:0, shown:true}; S.spot[k]={ok:true,n:1,ts:Date.now()}; render();
      out.ariaLiveSpot = document.querySelectorAll("main [aria-live]").length;
      out.ariaLiveSpotCarriesVerdict = [...document.querySelectorAll("[aria-live]")].some(e=>(e.innerText||"").includes(strip(im.dx))); }catch(e){ out.spotErr=e.message; }
    return out; });
  sec("examPast", () => { fresh(); EXAM = new RealDate(RealDate.now()-5*864e5); S.mode="path"; render(); const t=main();
    const out={bannerShown:/date has passed|has passed|set a new date|update your exam date/i.test(t), daysLeft:daysLeft(), ceilingInPast:examCeiling()<RealDate.now()};
    EXAM = EXAM0; return out; });
  sec("reviewShareAtPace14", () => { fresh(); RAPID.forEach(r=>{ S.rapid[r.i]={box:1,due:RealDate.now()-6e5,n:1,miss:1}; }); S.paceDays=14; const plan=todaysPlan();
    const review=plan.picked.filter(r=>!/^stage:/.test(r.id)).reduce((a,r)=>a+r.mins,0); return {review, budget:plan.budget, share:+(review/Math.max(1,plan.budget)).toFixed(2)}; });
  sec("lateResetBudgetRatio", () => { fresh(); for(let i=1;i<=10;i++){ const d=new RealDate(RealDate.now()-i*864e5); S.days[dayKeyLocal(d)]={acts:3,mins:30,done:[]}; }
    S.paceDays=5; S.paceSetAt=RealDate.now(); const remaining=PATH.filter(p=>!stageDone(p)).reduce((a,p)=>a+p.mins,0); const plan=todaysPlan();
    return {budget:plan.budget, remaining, ratio:+(plan.budget/Math.max(1,remaining)).toFixed(2), blockDay:blockDay()}; });
  sec("maps", () => ({ qIdsByTopic:QS.reduce((a,q)=>{ (a[q.c]=a[q.c]||[]).push(q.id); return a; },{}), rapidIx:RAPID.map(r=>r.ix), imgKeys:Object.keys(IMGS),
    qeHash:Object.fromEntries(QS.map(q=>[q.id, fnv(String(q.e||""))])), qwHash:Object.fromEntries(QS.map(q=>[q.id, fnv(JSON.stringify(q.w||{}))])), rxHash:Object.fromEntries(RAPID.map(r=>[r.ix, fnv(String(r.x||""))])),
    optHash:Object.fromEntries(QS.map(q=>[q.id, fnv(JSON.stringify(q.o))])), roptHash:Object.fromEntries(RAPID.map(r=>[r.ix, fnv(JSON.stringify(r.o))])) }));
  /* tasks in later phases register their own sections by defining window.__selftestExtra */
  sec("extra", () => (typeof window.__selftestExtra==="function") ? window.__selftestExtra({fresh, strip, wc, main, completeStage, RealDate}) : {});

  window.Date = RealDate; EXAM = EXAM0;
  Object.keys(S).forEach(k=>delete S[k]); Object.assign(S, JSON.parse(SNAP)); S.mode="path"; render();
  const pre = document.createElement("pre"); pre.id = "selftest"; pre.style.cssText = "position:fixed;left:0;top:0;z-index:99999;max-height:40vh;overflow:auto;background:#000;color:#0f0;font:11px/1.3 monospace;padding:8px;margin:0";
  pre.textContent = JSON.stringify(R); document.body.appendChild(pre);
  document.title = "SELFTEST " + (R.ok ? "OK" : "FAIL") + " " + R.errors.length + " errors";
}
