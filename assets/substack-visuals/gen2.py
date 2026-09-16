from base import page

# ---------- 02-header: product path track ----------
# track across frame; stages at 20%, 50%, 84%; tools dotted along
stage_pos={"EXPLORE":20,"PROTOTYPE":50,"SHIP":84}
tools=[("Polymet",12),("Stitch",19),("Relume",27),
       ("v0",41),("Lovable",48),("Bolt",55),("Magic Patterns",63),
       ("Subframe",76),("Onlook",83),("json-render",91)]
markers=""
for name,x in stage_pos.items():
    lime = name=="SHIP"
    col="#b9ff47" if lime else "#6a695f"
    markers+=f"""<div style='position:absolute;left:{x}%;top:50%;transform:translate(-50%,-50%)'>
      <div style='width:14px;height:14px;border-radius:50%;background:{col};margin:0 auto'></div>
      <div class='kicker' style='font-size:17px;margin-top:20px;color:{col};white-space:nowrap;transform:translateX(-38%)'>{name}</div>
    </div>"""
dots=""
import random
random.seed(3)
for name,x in tools:
    off=random.choice([-120,-95,95,120])
    dotcol="#f4f1ea"
    dots+=f"""<div style='position:absolute;left:{x}%;top:calc(50% + {off}px);transform:translateX(-50%);text-align:center'>
      <div style='width:6px;height:6px;border-radius:50%;background:#8a8878;margin:0 auto 10px'></div>
      <div style='color:#d8d4c8;font-size:20px;white-space:nowrap'>{name}</div>
    </div>
    <div style='position:absolute;left:{x}%;top:50%;transform:translate(-50%,-50%);width:2px;height:{abs(off)-14}px;background:#3d3d38;{"margin-top:"+str(min(off,0))+"px" if off<0 else ""}'></div>"""
body=f"""
<div class='hairline' style='position:absolute;left:6%;right:6%;top:50%;height:1px'></div>
{markers}{dots}
"""
open('02-header.html','w').write(page(body))

# ---------- 02-table ----------
rows=[("v0","Prototype","UI you can run"),("Lovable","Prototype","A working app flow"),("Bolt","Prototype","Logic you can poke"),("Subframe","Ship","Design close to code"),("Onlook","Ship","Visual edits on a real product"),("Polymet","Explore","Directions to react to"),("json-render","Ship","Generative UI, guardrailed"),("Magic Patterns","Explore","UI directions, fast"),("Stitch","Explore","Prompt-to-UI, Google's take"),("Relume","Explore","Marketing sites that publish")]
trs="".join(f"<div style='display:grid;grid-template-columns:1.2fr .9fr 1.6fr;padding:21px 0;border-bottom:1px solid #3d3d38;font-size:24px'><div>{a}</div><div style='color:#a9a698'>{b}</div><div style='color:#a9a698'>{c}</div></div>" for a,b,c in rows)
body=f"""
<div style='padding:88px 120px'>
 <div style='display:grid;grid-template-columns:1.2fr .9fr 1.6fr;padding-bottom:18px;border-bottom:1px solid #b9ff47'>
   <div class='kicker'>TOOL</div><div class='kicker'>STAGE</div><div class='kicker'>WHAT YOU GET BACK</div>
 </div>
 {trs}
</div>"""
open('02-table.html','w').write(page(body))

# ---------- 03-header: chaos to structure ----------
import random
random.seed(11)
notes=""
for i in range(16):
    x=random.randint(60,600); y=random.randint(120,640)
    rot=random.uniform(-14,14); w=random.randint(110,190); h=random.randint(70,120)
    col=random.choice(['#383732','#403f39','#45443d','#33322f','#4a4941'])
    notes+=f"<div style='position:absolute;left:{x}px;top:{y}px;width:{w}px;height:{h}px;background:{col};border-radius:4px;transform:rotate({rot}deg)'></div>"
for i in range(5):
    x=random.randint(90,620); y=random.randint(140,660); l=random.randint(50,140); rot=random.uniform(-40,40)
    notes+=f"<div style='position:absolute;left:{x}px;top:{y}px;width:{l}px;height:3px;background:#57564e;transform:rotate({rot}deg);border-radius:2px'></div>"
grid=""
for r in range(3):
    for c in range(4):
        lime = (r==1 and c==2)
        grid+=f"<div style='width:130px;height:88px;background:{'#b9ff47' if lime else '#3a3934'};border-radius:4px'></div>"
body=f"""
{notes}
<div class='hairline' style='position:absolute;left:50%;top:80px;bottom:130px;width:1px'></div>
<div style='position:absolute;right:110px;top:50%;transform:translateY(-58%);display:grid;grid-template-columns:repeat(4,130px);gap:16px'>{grid}</div>
<div class='kicker' style='position:absolute;left:50%;bottom:64px;transform:translateX(-50%)'>RESEARCH TO EVIDENCE</div>
"""
open('03-header.html','w').write(page(body))

# ---------- 03-table ----------
rows=[("Interviews and feedback, kept","Dovetail"),("Testing a flow without ten calls","Maze"),("Quick checks before you build","Lyssna"),("Does the structure make sense","Optimal Workshop"),("Workshops and synthesis","Miro"),("Inside the canvas you already have","Figma AI"),("Where the eye goes first","Attention Insight"),("A first flow in minutes","UX Pilot"),("Low-fidelity, testable early","Uizard"),("Site structure, decided early","Relume")]
trs="".join(f"<div style='display:grid;grid-template-columns:1.7fr 1fr;padding:21px 0;border-bottom:1px solid #3d3d38;font-size:24px'><div>{a}</div><div style='color:#a9a698'>{b}</div></div>" for a,b in rows)
body=f"""
<div style='padding:88px 120px'>
 <div style='display:grid;grid-template-columns:1.7fr 1fr;padding-bottom:18px;border-bottom:1px solid #b9ff47'>
   <div class='kicker'>UX TASK</div><div class='kicker'>TOOL</div>
 </div>
 {trs}
</div>"""
open('03-table.html','w').write(page(body))
print("set2 done")
