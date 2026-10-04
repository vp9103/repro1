"""Fast-track study map: course objectives + Step 1 must-knows + the user's own lecture text, per topic,
ordered by course-final yield. One self-contained HTML page. Data only (no new medical content)."""
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
S = ROOT / "scope"
esc = html.escape

# topics and titles from the blueprint headers
titles, bp = {}, {}
cur = None
for line in (S / "STEP1-BLUEPRINT.md").read_text(encoding="utf-8").splitlines():
    m = re.match(r"^## ((?:rp|en)\d+) [—-] (.+)$", line)
    if m:
        cur = m.group(1); titles[cur] = m.group(2).strip(); bp[cur] = []; continue
    m = re.match(r"^BP-((?:rp|en)\d+)-(\d+) \[(hi|mid|lo|x)\] (.+?)(?: \{k:.*\})?\s*$", line)
    if m and m.group(3) != "x":
        bp.setdefault(m.group(1), []).append((m.group(3), m.group(4)))

# yields
yld = {}
for m in re.finditer(r"^\|\s*((?:rp|en)\d+)\s*\|\s*(hi|mid|lo)\s*\|\s*(hi|mid|lo)\s*\|\s*([^|]+?)\s*\|", (S / "YIELD.md").read_text(encoding="utf-8"), re.M):
    yld[m.group(1)] = (m.group(2), m.group(3), m.group(4))

# sessions and objectives
sess, obj, obj_sess = {}, {}, {}
cur = None
for line in (S / "CANVAS-SCOPE.md").read_text(encoding="utf-8").splitlines():
    m = re.match(r"^## ([A-Z][A-Z0-9-]+) \| (\d+) \| ([^|]+) \| ([^|]+) \| ([^|]+)", line)
    if m:
        cur = m.group(1); sess[cur] = {"week": m.group(3).strip(), "date": m.group(4).strip(), "title": m.group(5).strip()}; continue
    m = re.match(r"^([A-Z][A-Z0-9-]+)\.(\d+) (.+)$", line)
    if m and cur and m.group(1) == cur:
        oid = f"{m.group(1)}.{m.group(2)}"; obj[oid] = m.group(3).strip(); obj_sess[oid] = cur

# topic map: objective -> topics (first = accountable)
tmap = {}
for m in re.finditer(r"^\|\s*([A-Z][A-Z0-9-]+\.\d+)\s*\|\s*([a-z0-9, ]+?)\s*\|", (S / "TOPIC-MAP.md").read_text(encoding="utf-8"), re.M):
    tmap[m.group(1)] = [t.strip() for t in m.group(2).split(",") if t.strip()]

# lecture files by session
lect = {}
for p in sorted((S / "lectures").glob("*.md")):
    txt = p.read_text(encoding="utf-8", errors="replace")
    first = txt.splitlines()[0] if txt else ""
    m = re.search(r"session ([A-Z][A-Z0-9-]+)", first)
    name = first.split("|")[1].strip() if first.count("|") >= 2 else p.stem
    lect[p.stem] = {"session": m.group(1) if m else "", "name": name, "text": txt}


def md(txt):
    out, ul = [], False
    for raw in txt.splitlines()[1:]:
        line = raw.rstrip()
        if not line.strip():
            if ul: out.append("</ul>"); ul = False
            continue
        h = re.match(r"^(#{1,6})\s+(.*)$", line)
        b = re.match(r"^\s*[-*•]\s+(.*)$", line)
        if h:
            if ul: out.append("</ul>"); ul = False
            out.append(f"<h5>{esc(h.group(2))}</h5>")
        elif b:
            if not ul: out.append("<ul>"); ul = True
            out.append(f"<li>{esc(b.group(1))}</li>")
        else:
            if ul: out.append("</ul>"); ul = False
            out.append(f"<p>{esc(line)}</p>")
    if ul: out.append("</ul>")
    return "\n".join(out)


rank = {"hi": 0, "mid": 1, "lo": 2}
repro = [t for t in titles if t.startswith("rp")]
endo = [t for t in titles if t.startswith("en")]


def order(ts):
    return sorted(ts, key=lambda t: (rank[yld.get(t, ("lo", "lo", ""))[1]], rank[yld.get(t, ("lo", "lo", ""))[0]], int(t[2:])))


def topic_html(t):
    s1, ex, why = yld.get(t, ("?", "?", ""))
    acc = [o for o, ts in tmap.items() if ts and ts[0] == t and o in obj]
    sec = [o for o, ts in tmap.items() if t in ts[1:] and o in obj]
    sessions = []
    for o in acc + sec:
        s = obj_sess.get(o)
        if s and s not in sessions:
            sessions.append(s)
    lecs = [k for k, v in lect.items() if v["session"] in sessions]
    items = sorted(bp.get(t, []), key=lambda x: rank.get(x[0], 3))
    h = [f'<section class="topic" id="{t}"><h2><span class="tid">{t}</span> {esc(titles[t])}</h2>',
         f'<p class="yl"><span class="chip y-{ex}">Course final: {ex}</span> <span class="chip y-{s1}">Step 1: {s1}</span></p>',
         f'<p class="why">{esc(why)}</p>']
    if acc or sec:
        h.append("<h3>Your course objectives</h3><ul class=obj>")
        for o in acc:
            h.append(f'<li><b>{esc(o)}</b> {esc(obj[o])} <span class="src">{esc(sess.get(obj_sess[o], {}).get("title", ""))}</span></li>')
        for o in sec:
            h.append(f'<li class="sec"><b>{esc(o)}</b> {esc(obj[o])} <span class="src">(shared) {esc(sess.get(obj_sess[o], {}).get("title", ""))}</span></li>')
        h.append("</ul>")
    h.append("<h3>Step 1 must-knows</h3><ul class=bp>")
    for y, txt in items:
        h.append(f'<li><span class="chip y-{y}">{y}</span> {esc(txt)}</li>')
    h.append("</ul>")
    if lecs:
        h.append("<h3>Your lecture material</h3><ul class=lec>")
        for k in lecs:
            h.append(f'<li><a href="#L{k}">{esc(lect[k]["name"])}</a> <span class="src">{esc(sess.get(lect[k]["session"], {}).get("week", ""))}</span></li>')
        h.append("</ul>")
    h.append("</section>")
    return "\n".join(h)


nav = []
for label, ts in (("Reproductive (BSE 638 final, Oct 9) - highest course-final yield first", order(repro)), ("Endocrine", order(endo))):
    nav.append(f"<h4>{esc(label)}</h4><ol>")
    for t in ts:
        nav.append(f'<li><a href="#{t}"><span class="dot y-{yld.get(t, ("lo","lo",""))[1]}"></span>{esc(titles[t])}</a></li>')
    nav.append("</ol>")

body = [topic_html(t) for t in order(repro) + order(endo)]
lib = ['<section id="library"><h2>Lecture library (your extracted decks and handouts)</h2>']
for k, v in lect.items():
    lib.append(f'<details class="lecfile" id="L{k}"><summary>{esc(v["name"])} <span class="src">{esc(v["session"])} · {esc(sess.get(v["session"], {}).get("week", ""))}</span></summary>{md(v["text"])}</details>')
lib.append("</section>")

page = f"""<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Repro-Endo Study Map</title>
<style>
:root{{--bg:#fbfaf8;--ink:#1d1b1a;--mut:#6b6461;--card:#fff;--line:#e6e1dc;--a1:#8A2E62;--hi:#b3261e;--mid:#a86b00;--lo:#5b6b7a}}
@media (prefers-color-scheme:dark){{:root{{--bg:#141213;--ink:#ece7e3;--mut:#a39c98;--card:#1e1b1d;--line:#34302f;--a1:#E39AC6;--hi:#ff8a80;--mid:#f0b64a;--lo:#9fb0c0}}}}
*{{box-sizing:border-box}} body{{margin:0;background:var(--bg);color:var(--ink);font:16px/1.55 system-ui,Segoe UI,sans-serif}}
.wrap{{display:grid;grid-template-columns:320px 1fr;min-height:100vh}} nav{{position:sticky;top:0;height:100vh;overflow:auto;border-right:1px solid var(--line);padding:16px;background:var(--card)}}
nav h4{{margin:14px 0 6px;font-size:13px;color:var(--mut)}} nav ol{{margin:0;padding-left:22px}} nav a{{color:var(--ink);text-decoration:none;font-size:14px}} nav a:hover{{color:var(--a1)}}
main{{padding:24px 32px;max-width:980px}} h1{{margin:0 0 6px;color:var(--a1)}} .topic{{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px 22px;margin:18px 0}}
.tid{{font-size:13px;color:var(--mut);font-weight:600;margin-right:6px}} h2{{margin:0 0 6px;font-size:22px}} h3{{margin:16px 0 6px;font-size:16px;color:var(--a1)}}
.chip{{display:inline-block;font-size:12px;font-weight:700;padding:1px 8px;border-radius:999px;border:1px solid currentColor;margin-right:6px}}
.y-hi{{color:var(--hi)}} .y-mid{{color:var(--mid)}} .y-lo{{color:var(--lo)}} .dot{{display:inline-block;width:8px;height:8px;border-radius:50%;background:currentColor;margin-right:6px}}
.why{{color:var(--mut);font-size:14px}} .src{{color:var(--mut);font-size:13px}} li{{margin:4px 0}} .sec{{opacity:.85}}
details.lecfile{{background:var(--card);border:1px solid var(--line);border-radius:10px;padding:8px 14px;margin:8px 0}} details.lecfile summary{{cursor:pointer;font-weight:600}}
details.lecfile h5{{margin:14px 0 4px;font-size:14px;color:var(--a1)}} details.lecfile p{{margin:4px 0}}
@media (max-width:760px){{.wrap{{grid-template-columns:1fr}} nav{{position:static;height:auto;border-right:0;border-bottom:1px solid var(--line)}} main{{padding:16px}}}}
</style></head><body><div class="wrap"><nav><b>Repro-Endo Study Map</b><p class="src">Ordered by likelihood on the BSE 638 final, then Step 1 yield. Each topic: your objectives, the Step 1 must-knows, and links to your own lecture text.</p>{"".join(nav)}<p><a href="#library">Lecture library</a></p></nav>
<main><h1>Repro-Endo Study Map</h1><p class="src">Built from your Canvas objectives, the Step 1 blueprint (673 items) and the text of your 49 extracted lecture files. The interactive version with lessons, questions and rapid review is being built now.</p>
{"".join(body)}{"".join(lib)}</main></div></body></html>"""
out = ROOT / "study-now.html"
out.write_text(page, encoding="utf-8")
print(out, round(out.stat().st_size / 1e6, 2), "MB;", len(repro), "repro +", len(endo), "endo topics;", len(lect), "lecture files")
