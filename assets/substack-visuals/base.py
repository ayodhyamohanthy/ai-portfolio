import html
FONTS="/home/sandbox/portfolio/public/fonts"
CSS=f"""
@font-face{{font-family:'OG';src:url('file://{FONTS}/OverusedGrotesk-VF.woff2')}}
@font-face{{font-family:'DM';src:url('file://{FONTS}/DepartureMono-Regular.woff2')}}
@font-face{{font-family:'PM';font-weight:400;src:url('file://{FONTS}/ibm-plex-mono-latin-400-normal.woff2')}}
@font-face{{font-family:'PM';font-weight:500;src:url('file://{FONTS}/ibm-plex-mono-latin-500-normal.woff2')}}
*{{margin:0;padding:0;box-sizing:border-box}}
body{{width:1600px;height:900px;background:#1f1f1d;color:#f4f1ea;font-family:'OG';overflow:hidden;position:relative}}
.kicker{{font-family:'PM';font-size:19px;font-weight:500;letter-spacing:.14em;color:#b9ff47}}
.hairline{{background:#3d3d38}}
"""
def page(body,extra=""):
    return f"<html><head><meta charset='utf-8'><style>{CSS}{extra}</style></head><body>{body}</body></html>"
