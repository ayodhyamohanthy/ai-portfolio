from base import page

# ---------- 04-header: macro UI corner with measurements ----------
ticks="".join(f"<div class='hairline' style='height:1px;width:100%'></div>" for _ in range(8))
body=f"""
<!-- faint 8px baseline grid across the frame -->
<div style='position:absolute;inset:0;background:repeating-linear-gradient(to bottom, transparent 0 63px, #2a2a27 63px 64px);opacity:.5'></div>

<!-- the card, macro-cropped: bleeds off right and bottom -->
<div style='position:absolute;left:330px;top:170px;width:1100px;background:#262624;border:1px solid #3d3d38;border-radius:22px;padding:90px'>
  <div style='font-size:120px;letter-spacing:-.03em;line-height:1'>Details.</div>
  <div style='margin-top:64px;display:inline-block;background:#b9ff47;color:#1f1f1d;font-size:30px;font-weight:600;padding:26px 54px;border-radius:14px'>Ship it</div>
</div>

<!-- measurement: card left margin 24 -->
<div style='position:absolute;left:90px;top:170px;width:200px;display:flex;align-items:center;gap:10px'>
  <div style='width:2px;height:70px;background:#b9ff47'></div>
  <div style='flex:1;height:2px;background:#b9ff47'></div>
  <div style='width:2px;height:70px;background:#b9ff47'></div>
</div>
<div class='kicker' style='position:absolute;left:130px;top:255px;font-size:22px'>24</div>

<!-- measurement: headline-to-button gap 8 grid units -->
<div style='position:absolute;left:430px;top:425px;height:120px;display:flex;flex-direction:column;align-items:center;gap:6px'>
  <div style='width:70px;height:2px;background:#b9ff47'></div>
  <div style='flex:1;width:2px;background:#b9ff47'></div>
  <div style='width:70px;height:2px;background:#b9ff47'></div>
</div>
<div class='kicker' style='position:absolute;left:520px;top:470px;font-size:22px'>8</div>

<!-- type-scale callout -->
<div style='position:absolute;left:1150px;top:120px;display:flex;align-items:center;gap:16px'>
  <div class='kicker' style='font-size:22px'>1.25x scale</div>
  <div style='width:130px;height:2px;background:#b9ff47'></div>
  <div style='width:8px;height:8px;border-radius:50%;background:#b9ff47'></div>
</div>
<div style='position:absolute;left:1290px;top:140px;width:2px;height:110px;background:#b9ff47;opacity:.7'></div>
"""
open('04-header.html','w').write(page(body))

# ---------- 04-spectrum ----------
zones=[("THE CANVAS",["Figma AI"]),
("THE GENERATORS",["Polymet","Magic Patterns","Motiff","Uizard"]),
("THE CODE BRIDGE",["Subframe","Onlook","Builder.io","Anima"]),
("THE ASSETS",["Recraft"])]
# axis from 7% to 93%; zone centers at 15, 40, 65, 88 (percent)
centers=[15,40,65,88]
els=""
for (zone,tools),cx in zip(zones,centers):
    els+=f"<div class='kicker' style='position:absolute;left:{cx}%;top:340px;transform:translateX(-50%);font-size:19px;white-space:nowrap'>{zone}</div>"
    els+=f"<div style='position:absolute;left:{cx}%;top:50%;transform:translate(-50%,-50%);width:10px;height:10px;border-radius:50%;background:#b9ff47'></div>"
    n=len(tools)
    spread=120*(n-1)/2
    names="".join(f"<div style='color:#d8d4c8;font-size:21px;white-space:nowrap'>{t}</div>" for t in tools)
    els+=f"<div style='position:absolute;left:{cx}%;top:500px;transform:translateX(-50%);display:flex;gap:38px'>{names}</div>"
# zone separators
for sx in [27.5,52.5,76.5]:
    els+=f"<div style='position:absolute;left:{sx}%;top:300px;bottom:300px;width:1px;background:#33322f'></div>"
body=f"""
<div class='hairline' style='position:absolute;left:7%;right:7%;top:50%;height:1px'></div>
{els}
"""
open('04-spectrum.html','w').write(page(body))
print("set3 done")
