from base import page

# ---------- 01-header v2: denser floor, higher ceiling ----------
import random
random.seed(7)
thumbs=""
for r in range(5):
    for c in range(16):
        v=random.choice(['#33322f','#383732','#302f2c','#353430'])
        bar=random.choice(['#4a4944','#444340'])
        thumbs+=f"<div style='background:{v};border-radius:4px;padding:6px;display:grid;gap:4px;align-content:start'><i style='display:block;height:4px;width:55%;background:{bar};border-radius:2px'></i><i style='display:block;height:4px;width:80%;background:{bar};border-radius:2px;opacity:.6'></i></div>"
body=f"""
<div style='position:absolute;left:0;right:0;bottom:110px;height:380px;padding:0 70px;display:grid;grid-template-columns:repeat(16,1fr);gap:9px;opacity:.85'>{thumbs}</div>
<div class='kicker' style='position:absolute;left:70px;bottom:58px'>THE FLOOR</div>
<div style='position:absolute;top:130px;left:50%;transform:translateX(-50%);width:270px;border:1.5px solid #b9ff47;border-radius:13px;background:#242422;padding:24px;display:grid;gap:11px'>
  <i style='display:block;height:8px;width:44%;background:#f4f1ea;border-radius:4px'></i>
  <i style='display:block;height:6px;width:82%;background:#5a594f;border-radius:3px'></i>
  <i style='display:block;height:6px;width:68%;background:#5a594f;border-radius:3px;opacity:.7'></i>
  <i style='display:block;height:27px;width:88px;background:#b9ff47;border-radius:6px;margin-top:7px'></i>
</div>
<div class='kicker' style='position:absolute;top:185px;left:calc(50% + 190px)'>THE CEILING</div>
"""
open('01-header.html','w').write(page(body))

# ---------- 01-process v2: aligned lanes, row headers ----------
stages=[("DISCOVERY","summarizes, clusters","sits with the problem"),
("FRAMING","attacks my assumptions","asks the real question"),
("PROTOTYPING","twenty directions by lunch","picks the one worth a week"),
("BEYOND SCREEN","motion, music, voice on demand","decides what the brand feels like"),
("VALIDATION","a mirror, first pass","tests with real people")]
def col(i,name,ai,human):
    border="border-left:1px solid #3d3d38;" if i else ""
    return f"""<div style='flex:1;{border}padding:0 30px;display:grid;grid-template-rows:30px 118px 1px auto;gap:22px'>
      <div class='kicker' style='font-size:17px'>{name}</div>
      <div style='color:#b9ff47;font-size:23px;line-height:1.35'>{ai}</div>
      <div class='hairline'></div>
      <div style='color:#f4f1ea;font-size:23px;line-height:1.35'>{human}</div>
    </div>"""
cols="".join(col(i,*s) for i,s in enumerate(stages))
body=f"""
<div style='position:absolute;inset:0;display:flex;align-items:center;justify-content:center'>
 <div style='width:100%;padding:0 70px;display:grid;grid-template-columns:170px 1fr;gap:0 30px;align-items:center'>
  <div style='display:grid;grid-template-rows:30px 118px 1px auto;gap:22px'>
    <div></div>
    <div class='kicker' style='font-size:15px;opacity:.8;align-self:start'>WHAT<br>AI DOES</div>
    <div></div>
    <div class='kicker' style='font-size:15px;opacity:.8'>WHAT THE<br>DESIGNER DOES</div>
  </div>
  <div style='display:flex'>{cols}</div>
 </div>
</div>"""
open('01-process.html','w').write(page(body))

# ---------- 02-header v2: dots on track, short connectors ----------
stage_pos={"EXPLORE":20,"PROTOTYPE":50,"SHIP":84}
tools=[("Polymet",12,-1),("Stitch",19,1),("Relume",27,-1),
       ("v0",41,1),("Lovable",48,-1),("Bolt",56,1),("Magic Patterns",64,-1),
       ("Subframe",73,1),("Onlook",79,-1),("json-render",92,-1)]
markers=""
for name,x in stage_pos.items():
    lime = name=="SHIP"
    col="#b9ff47" if lime else "#6a695f"
    markers+=f"""<div style='position:absolute;left:{x}%;top:50%;transform:translate(-50%,-50%)'>
      <div style='width:15px;height:15px;border-radius:50%;background:{col};margin:0 auto'></div>
      <div class='kicker' style='font-size:17px;margin-top:22px;color:{col};white-space:nowrap;transform:translateX(-36%)'>{name}</div>
    </div>"""
dots=""
for name,x,side in tools:
    y = "calc(50% + 92px)" if side>0 else "calc(50% - 118px)"
    line_top = "calc(50% + 8px)" if side>0 else "calc(50% - 100px)"
    dots+=f"""<div style='position:absolute;left:{x}%;top:50%;transform:translate(-50%,-50%);width:7px;height:7px;border-radius:50%;background:#8a8878'></div>
    <div style='position:absolute;left:{x}%;top:{line_top};transform:translateX(-50%);width:1px;height:84px;background:#3d3d38'></div>
    <div style='position:absolute;left:{x}%;top:{y};transform:translateX(-50%);color:#d8d4c8;font-size:20px;white-space:nowrap'>{name}</div>"""
body=f"""
<div class='hairline' style='position:absolute;left:6%;right:6%;top:50%;height:1px'></div>
{markers}{dots}
"""
open('02-header.html','w').write(page(body))

# ---------- 04-header v2: bleeding card, clean measurements ----------
body=f"""
<div style='position:absolute;inset:0;background:repeating-linear-gradient(to bottom, transparent 0 63px, #2a2a27 63px 64px);opacity:.45'></div>

<!-- card bleeds off right edge: macro crop -->
<div style='position:absolute;left:400px;top:180px;width:1320px;background:#262624;border:1px solid #3d3d38;border-radius:24px;padding:100px'>
  <div style='font-size:132px;letter-spacing:-.03em;line-height:1'>Details.</div>
  <div style='margin-top:72px;display:inline-block;background:#b9ff47;color:#1f1f1d;font-size:32px;font-weight:600;padding:28px 58px;border-radius:15px'>Ship it</div>
</div>

<!-- 24: left margin measure -->
<div style='position:absolute;left:120px;top:180px;height:60px;display:flex;align-items:center'>
  <div style='width:2px;height:60px;background:#b9ff47'></div>
  <div style='width:240px;height:2px;background:#b9ff47'></div>
  <div style='width:2px;height:60px;background:#b9ff47'></div>
</div>
<div class='kicker' style='position:absolute;left:210px;top:265px;font-size:22px'>24</div>

<!-- 8: vertical gap between headline and button (headline bottom ~400, button top ~452) -->
<div style='position:absolute;left:520px;top:400px;height:52px;display:flex;flex-direction:column;align-items:center;justify-content:space-between'>
  <div style='width:56px;height:2px;background:#b9ff47'></div>
  <div style='width:2px;height:40px;background:#b9ff47'></div>
  <div style='width:56px;height:2px;background:#b9ff47'></div>
</div>
<div class='kicker' style='position:absolute;left:600px;top:408px;font-size:22px'>8</div>

<!-- 1.25x scale callout pointing at headline -->
<div class='kicker' style='position:absolute;left:1050px;top:96px;font-size:22px'>1.25x scale</div>
<div style='position:absolute;left:1240px;top:106px;width:8px;height:8px;border-radius:50%;background:#b9ff47'></div>
<div style='position:absolute;left:1244px;top:106px;width:2px;height:160px;background:#b9ff47;opacity:.75;transform:rotate(24deg);transform-origin:top left'></div>
"""
open('04-header.html','w').write(page(body))

# ---------- 04-spectrum v2: stacked name grids ----------
zones=[("THE CANVAS",["Figma AI"],15),
("THE GENERATORS",["Polymet","Magic Patterns","Motiff","Uizard"],40),
("THE CODE BRIDGE",["Subframe","Onlook","Builder.io","Anima"],64),
("THE ASSETS",["Recraft"],88)]
els=""
for zone,tools,cx in zones:
    els+=f"<div class='kicker' style='position:absolute;left:{cx}%;top:330px;transform:translateX(-50%);font-size:19px;white-space:nowrap'>{zone}</div>"
    els+=f"<div style='position:absolute;left:{cx}%;top:50%;transform:translate(-50%,-50%);width:10px;height:10px;border-radius:50%;background:#b9ff47'></div>"
    if len(tools)==1:
        names=f"<div style='color:#d8d4c8;font-size:22px'>{tools[0]}</div>"
        els+=f"<div style='position:absolute;left:{cx}%;top:490px;transform:translateX(-50%)'>{names}</div>"
    else:
        cells="".join(f"<div style='color:#d8d4c8;font-size:20px;white-space:nowrap;text-align:center'>{t}</div>" for t in tools)
        els+=f"<div style='position:absolute;left:{cx}%;top:478px;transform:translateX(-50%);display:grid;grid-template-columns:1fr 1fr;gap:12px 44px'>{cells}</div>"
for sx in [27.5,52,76]:
    els+=f"<div style='position:absolute;left:{sx}%;top:310px;bottom:290px;width:1px;background:#2e2d2a'></div>"
body=f"""
<div class='hairline' style='position:absolute;left:7%;right:7%;top:50%;height:1px'></div>
{els}
"""
open('04-spectrum.html','w').write(page(body))
print("fixes done")
