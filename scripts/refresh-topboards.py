#!/usr/bin/env python3
"""Regenerate app/topBoards.ts from Design Arena's live board API + model registry.
Run from the repo root: python3 scripts/refresh-topboards.py
Prints CHANGED (file rewritten, stamped today IST) or UNCHANGED (data identical)."""
import json,re,sys,urllib.request,datetime

API='https://www.designarena.ai/api/leaderboard'
REG='https://www.designarena.ai/api/registry'
PAGE='https://www.designarena.ai/leaderboard'
DA='https://designarena.ai/leaderboard'
ARC='https://arcada.com/leaderboards'
NOFEED='This cut has no public data feed - open the live board to see it.'

def get(url,data=None):
    req=urllib.request.Request(url,data=data,headers={'User-Agent':'Mozilla/5.0','Content-Type':'application/json'})
    return urllib.request.urlopen(req,timeout=40).read().decode('utf-8','ignore')

def ist_today():
    now=datetime.datetime.now(datetime.timezone(datetime.timedelta(hours=5,minutes=30)))
    return f'{now.day} {now.strftime("%b")} {now.year}'

registry=json.loads(get(REG))['models']

def api_rows(arena,category):
    body=json.dumps({'arenaType':arena,'category':category}).encode()
    d=json.loads(get(API,body))
    rows=[]
    for r in d.get('data') or []:
        m=registry.get(r['modelId'],{})
        wr=r.get('winRate'); wr=round(wr,1) if isinstance(wr,float) else (wr or 0)
        rows.append(dict(name=m.get('displayName') or r['modelId'],elo=int(round(r.get('elo') or 0)),
                         winRate=wr,battles=int(r.get('battles') or 0),
                         open=bool(m.get('openSource')),router=bool(m.get('router'))))
    rows.sort(key=lambda x:-x['elo'])
    return rows

def page_board(key,html):
    i=html.find('"initialBoards"'); j=html.find('"'+key+'"',i)
    k=html.find('"modelStats"',j); a=html.find('[',k); depth=0; end=a
    for p in range(a,len(html)):
        c=html[p]
        if c=='[':depth+=1
        elif c==']':
            depth-=1
            if depth==0: end=p; break
    return json.loads(html[a:end+1])

def overall_rows():
    html=get(PAGE).replace('\\"','"').replace('\\u0026','&')
    merged=page_board('allcategories',html)+page_board('fullstack',html)
    merged.sort(key=lambda r:-r['elo'])
    out=[]
    for r in merged:
        m=registry.get(r['model'],{})
        out.append(dict(name=m.get('displayName') or r['model'],elo=int(r['elo']),
                        winRate=round(r['winRate'],1),battles=int(r['total']),
                        open=bool(m.get('openSource')),router=bool(m.get('router'))))
    return out

BOARDS={'overall':overall_rows()}
for bid,arena,cat in [('website','models','website'),('uicomponent','models','uicomponent'),
 ('gamedev','models','gamedev'),('dataviz','models','dataviz'),('3d','models','3d'),
 ('fullstack','agents','fullstack'),('webapps','agents','agon_webapps'),
 ('agenticgamedev','agents','agentic_gamedev'),('godot','agents','agon_godot'),
 ('mobileapps','agents','mobileapps'),('nativeapps','agents','nativeapps'),
 ('image','models','image'),('imageediting','models','imagetoimage'),
 ('graphicdesign','models','graphicdesign'),('logo','models','logo'),
 ('video','models','video'),('imagetovideo','models','imagetovideo'),
 ('videoediting','models','videotovideo'),('multimodal','models','multimodaltovideo'),
 ('multito','models','multitovideo'),('tts','models','tts'),
 ('audiorealism','models','audiorealism'),('slides','models','slides'),
 ('agenticslides','agents','agon_slides'),('htmlslides','agents','agon_slides_html'),
 ('svg','models','svg'),('ascii','models','ascii')]:
    BOARDS[bid]=api_rows(arena,cat)

def rows_ts(rows):
    return ',\n'.join(f"['{r['name'].replace(chr(39),chr(92)+chr(39))}',{r['elo']},{r['winRate']},{r['battles']},{1 if r['open'] else 0},{1 if r['router'] else 0}]" for r in rows)

def board(bid,label,url,note=None,key=None):
    rows=BOARDS.get(key or bid,[])
    n=f",note:'{note}'" if note else ''
    return f"{{id:'{bid}',label:'{label}',url:'{url}'{n},rows:[\n{rows_ts(rows)}\n]}}"

CHECKED=ist_today()
header=f"""// Design Arena "Top Leaderboards" frame - data mirrored live from the Design Arena board API
// (designarena.ai/api/leaderboard) and model registry (designarena.ai/api/registry) on {CHECKED}.
// Row: [displayName, elo, winRate, battles, openSource, router]. Names and flags are the registry's own.
// Regenerate with: python3 scripts/refresh-topboards.py
export type TBRow=[string,number,number,number,number,number];
export type TBoard={{id:string;label:string;url:string;note?:string;rows:TBRow[]}};
export type TGroup={{title:string;boards:TBoard[]}};
export type TTab={{id:string;label:string;groups:TGroup[]}};
export const topBoardsChecked='{CHECKED}';
"""
tabs=f"""export const topBoardTabs:TTab[]=[
{{id:'code',label:'Code',groups:[
{{title:'Web Dev (Non-Agentic)',boards:[
{board('overall','Overall',DA)},
{board('website','Website',DA+'/website')},
{board('uicomponent','UI Component',DA+'/ui-components')},
{board('gamedev','Game Dev',DA+'/game-dev')},
{board('dataviz','Data Visualization',DA+'/data-viz')},
{board('threed','3D Design',DA+'/3d-design',key='3d')},
{board('imagetohtml','Image to Website',DA+'/image-to-html',NOFEED)},
{board('videotowebsite','Video to Website',DA+'/video-to-website',NOFEED)}
]}},
{{title:'Web Dev (Agentic)',boards:[
{board('fullstack','Full-Stack',DA+'/fullstack')},
{board('webapps','Web Apps',DA+'/webapps')},
{{id:'frontend',label:'Frontend',url:'{ARC}?tab=code&section=agentic-web-dev&category=frontend',note:'{NOFEED}',rows:[]}},
{{id:'imagetofrontend',label:'Image to Frontend',url:'{ARC}?tab=code&section=agentic-web-dev&category=image-to-frontend',note:'{NOFEED}',rows:[]}}
]}},
{{title:'Game Dev (Agentic)',boards:[
{board('agenticgamedev','Agentic',DA+'/agentic-game-dev')},
{{id:'htmlgamedev',label:'HTML',url:'{DA}/agentic-game-dev',note:'{NOFEED}',rows:[]}},
{board('godot','Godot',DA+'/godot-game-dev')}
]}},
{{title:'Mobile Dev',boards:[
{board('mobileapps','Mobile App',DA+'/mobileapps')},
{board('nativeapps','Android Native',DA+'/android')}
]}}
]}},
{{id:'image',label:'Image',groups:[{{title:'Image',boards:[
{board('image','Image',DA+'/image')},
{board('imageediting','Image Editing',DA+'/image-to-image')},
{board('graphicdesign','Graphic Design',DA+'/graphic-design')},
{board('logo','Logo',DA+'/logos')}
]}}]}},
{{id:'video',label:'Video',groups:[{{title:'Video',boards:[
{board('video','Video',DA+'/video')},
{board('imagetovideo','Image to Video',DA+'/image-to-video')},
{board('videoediting','Video Editing',DA+'/video-to-video')},
{board('multimodal','Multimodal to Video',DA+'/multimodal-to-video')},
{board('multito','Multi-Image to Video',DA+'/multi-to-video')}
]}}]}},
{{id:'audio',label:'Audio',groups:[{{title:'Audio',boards:[
{board('tts','Text-to-Speech',DA+'/tts')},
{board('audiorealism','Audio Realism',DA+'/audiorealismbench')}
]}}]}},
{{id:'slides',label:'Slides',groups:[{{title:'Slides',boards:[
{board('slides','Slides',DA+'/slides')},
{board('agenticslides','Agentic Slides',DA+'/agentic-slides')},
{board('htmlslides','HTML Slides',DA+'/agentic-html-slides')}
]}}]}},
{{id:'more',label:'SVG, ASCII, and more',groups:[{{title:'SVG, ASCII, and more',boards:[
{board('svg','SVG',DA+'/svgs')},
{board('ascii','ASCII Art',DA+'/ascii')}
]}}]}}
];"""

new=header+tabs+'\n'
path='app/topBoards.ts'
try: old=open(path).read()
except FileNotFoundError: old=''
# compare ignoring the stamped date (header line + topBoardsChecked)
strip=lambda s: re.sub(r"\d{1,2} \w{3} \d{4}",'<DATE>',s)
if old and strip(old)==strip(new):
    print('UNCHANGED'); sys.exit(0)
open(path,'w').write(new)
print('CHANGED')
