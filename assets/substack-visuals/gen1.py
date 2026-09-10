from base import page
import random
random.seed(7)

# ---------- 01-header: the floor and the ceiling ----------
thumbs=""
for r in range(4):
    for c in range(14):
        v=random.choice(['#33322f','#383732','#302f2c','#353430'])
        bar=random.choice(['#4a4944','#444340'])
        thumbs+=f"<div style='background:{v};border-radius:5px;padding:8px;display:grid;gap:5px;align-content:start'><i style='display:block;height:5px;width:55%;background:{bar};border-radius:3px'></i><i style='display:block;height:5px;width:80%;background:{bar};border-radius:3px;opacity:.6'></i></div>"
body=f"""
<div style='position:absolute;left:0;right:0;bottom:120px;height:340px;padding:0 90px;display:grid;grid-template-columns:repeat(14,1fr);gap:12px;opacity:.85'>{thumbs}</div>
<div class='kicker' style='position:absolute;left:90px;bottom:64px'>THE FLOOR</div>
<div style='position:absolute;top:150px;left:50%;transform:translateX(-50%);width:300px;border:1.5px solid #b9ff47;border-radius:14px;background:#242422;padding:26px;display:grid;gap:12px'>
  <i style='display:block;height:9px;width:44%;background:#f4f1ea;border-radius:4px'></i>
  <i style='display:block;height:7px;width:82%;background:#5a594f;border-radius:4px'></i>
  <i style='display:block;height:7px;width:68%;background:#5a594f;border-radius:4px;opacity:.7'></i>
  <i style='display:block;height:30px;width:96px;background:#b9ff47;border-radius:7px;margin-top:8px'></i>
</div>
<div class='kicker' style='position:absolute;top:210px;left:calc(50% + 210px)'>THE CEILING</div>
"""
open('01-header.html','w').write(page(body))

# ---------- 01-process: two-lane, five-stage strip ----------
stages=[("DISCOVERY","summarizes, clusters","sits with the problem"),
("FRAMING","attacks my assumptions","asks the real question"),
("PROTOTYPING","twenty directions by lunch","picks the one worth a week"),
("BEYOND SCREEN","motion, music, voice on demand","decides what the brand feels like"),
("VALIDATION","a mirror, first pass","tests with real people")]
cols=""
for i,(name,ai,human) in enumerate(stages):
    border="border-left:1px solid #3d3d38;" if i else ""
    cols+=f"""<div style='flex:1;{border}padding:0 34px;display:grid;gap:26px;align-content:start'>
      <div class='kicker' style='font-size:17px'>{name}</div>
      <div style='color:#b9ff47;font-size:22px;line-height:1.35'>{ai}</div>
      <div class='hairline' style='height:1px;width:100%'></div>
      <div style='color:#f4f1ea;font-size:22px;line-height:1.35'>{human}</div>
    </div>"""
lane_ai=f"<div class='kicker' style='font-size:15px;opacity:.75;margin-bottom:14px'>WHAT AI DOES</div>"
lane_me=f"<div class='kicker' style='font-size:15px;opacity:.75;margin-bottom:14px'>WHAT THE DESIGNER DOES</div>"
body=f"""
<div style='position:absolute;inset:0;display:flex;align-items:center'>
 <div style='width:100%;padding:0 90px'>
  <div style='display:flex;margin-bottom:0'>
    <div style='flex:1'>{lane_ai}</div>
  </div>
  <div style='display:flex'>{cols}</div>
  <div style='margin-top:26px'>{lane_me.replace('margin-bottom:14px','margin-top:0')}</div>
 </div>
</div>"""
open('01-process.html','w').write(page(body))

# ---------- 01-quote ----------
def typecard(text,fname):
    body=f"""
<div style='position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:54px'>
  <div style='width:120px;height:2px;background:#b9ff47'></div>
  <div style='font-size:64px;letter-spacing:-.02em;max-width:1100px;text-align:center;line-height:1.15'>{text}</div>
  <div style='width:120px;height:2px;background:#b9ff47'></div>
</div>"""
    open(fname,'w').write(page(body))
typecard("AI generates options, not opinions.","01-quote.html")
typecard("The advantage was never tool count. It is how fast you move from idea to evidence.","02-outro.html")
typecard("Everyone gets the same gradients. What keeps the work yours is the system behind it.","04-outro.html")
print("set1 done")
