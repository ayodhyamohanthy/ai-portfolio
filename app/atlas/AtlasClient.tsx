'use client';
import {useMemo,useRef,useState} from 'react';
import {territories,atlasNodes,atlasEdges,fieldNotes,AtlasNode} from '../atlasData';

const COLS=3,ZW=412,ZH=268,ZX=14,ZY=20;
function layout(){
 const zone:Record<string,{x:number,y:number}>={};
 territories.forEach((t,i)=>{zone[t.id]={x:ZX+(i%COLS)*ZW,y:ZY+Math.floor(i/COLS)*ZH}});
 const pos:Record<string,{x:number,y:number}>={};
 territories.forEach(t=>{
  const ns=atlasNodes.filter(n=>n.territory===t.id),z=zone[t.id],per=3;
  ns.forEach((n,i)=>{pos[n.id]={x:z.x+56+(i%per)*118,y:z.y+62+Math.floor(i/per)*46}});
 });
 return pos;
}
const POS=layout();
const H=ZY*2+Math.ceil(territories.length/COLS)*ZH;

export default function AtlasClient(){
 const [filter,setFilter]=useState('All'),[sel,setSel]=useState<AtlasNode|null>(null),[hov,setHov]=useState<string|null>(null);
 const mapRef=useRef<HTMLDivElement>(null);
 const active=hov||sel?.id||null;
 const linked=useMemo(()=>{if(!active)return new Set<string>();const s=new Set([active]);atlasEdges.forEach(e=>{if(e.from===active)s.add(e.to);if(e.to===active)s.add(e.from)});return s},[active]);
 const visible=(n:AtlasNode)=>filter==='All'||n.territory===filter;
 const jump=(id:string)=>{const n=atlasNodes.find(x=>x.id===id);if(!n)return;setFilter('All');setSel(n);mapRef.current?.scrollIntoView({behavior:'smooth',block:'start'})};
 return <>
 <div className="atlas-filters scroll-chips">
  {['All',...territories.map(t=>t.id)].map(id=><button key={id} aria-pressed={filter===id} onClick={()=>setFilter(id)}>{id==='All'?'All':territories.find(t=>t.id===id)!.label}</button>)}
 </div>
 <div className="atlas-map" ref={mapRef}>
  <svg viewBox={`0 0 ${ZX*2+COLS*ZW} ${H}`} role="img" aria-label="Map of AI-native design patterns, templates and cases by territory">
   {territories.map((t,i)=>{const x=ZX+(i%COLS)*ZW,y=ZY+Math.floor(i/COLS)*ZH;return <g key={t.id}>
    <rect x={x} y={y} width={ZW-16} height={ZH-16} rx={10} className="atlas-zone"/>
    <text x={x+14} y={y+26} className="atlas-zone-label">{t.label.toUpperCase()}</text>
   </g>})}
   {atlasEdges.map((e,i)=>{const a=POS[e.from],b=POS[e.to];if(!a||!b)return null;
    const on=active&&(e.from===active||e.to===active),mx=(a.x+b.x)/2;
    return <path key={i} d={`M${a.x} ${a.y} Q${mx} ${(a.y+b.y)/2-24} ${b.x} ${b.y}`} className={`atlas-edge rel-${e.rel}${on?' on':''}${active&&!on?' dim':''}`}/>})}
   {atlasNodes.map(n=>{const p=POS[n.id];if(!p)return null;const off=!visible(n),on=active===n.id,near=linked.has(n.id);
    return <g key={n.id} className={`atlas-node${off?' off':''}${on?' on':''}${active&&near&&!on?' near':''}${active&&!near?' dim':''}`}
     transform={`translate(${p.x} ${p.y})`} role="button" tabIndex={off?-1:0} aria-label={`${n.label} · ${n.kind}`}
     onMouseEnter={()=>setHov(n.id)} onMouseLeave={()=>setHov(null)} onFocus={()=>setHov(n.id)} onBlur={()=>setHov(null)}
     onClick={()=>setSel(n)} onKeyDown={e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSel(n)}}}>
     <circle r={n.kind==='Case'?7:5.5} className={`dot kind-${n.kind.toLowerCase()}`}/>
     <text y={18} textAnchor="middle">{n.label}</text>
    </g>})}
  </svg>
  <div className="atlas-legend">
   <span><i className="k-pattern"/>Pattern</span><span><i className="k-template"/>Template</span><span><i className="k-case"/>Case</span>
   <span><b className="e-solid"/>pairs-with</span><span><b className="e-dash"/>mitigates</span><span><b className="e-arrow"/>feeds-into</span>
  </div>
 </div>
 {sel&&<aside className="atlas-detail" role="dialog" aria-label={`${sel.label} details`}>
  <button className="atlas-close" onClick={()=>setSel(null)} aria-label="Close detail">×</button>
  <p className="eyebrow">{territories.find(t=>t.id===sel.territory)!.label} · {sel.kind}</p>
  <h3>{sel.label}</h3>
  <p>{sel.note}</p>
  <div className="atlas-relations">{atlasEdges.filter(e=>e.from===sel.id||e.to===sel.id).map((e,i)=>{const other=e.from===sel.id?e.to:e.from;const n=atlasNodes.find(x=>x.id===other)!;return <button key={i} onClick={()=>jump(other)}><span>{e.rel}</span>{n.label}</button>})}</div>
  <a href={sel.href}>Open {sel.kind==='Pattern'?'the live pattern':sel.kind==='Template'?'the template':'the case'} ↗</a>
 </aside>}
 <section className="atlas-notes">
  <p className="eyebrow">FIELD NOTES</p>
  <h2>What changed, and what I think of it.</h2>
  {fieldNotes.map(n=><article key={n.date+n.title}>
   <b>{n.date}</b>
   <h3>{n.title}</h3>
   <p>{n.body}</p>
   <div className="atlas-note-meta">
    <a href={n.source.url}>{n.source.label} ↗</a>
    <span>{n.nodes.map(id=><button key={id} onClick={()=>jump(id)}>{atlasNodes.find(x=>x.id===id)!.label}</button>)}</span>
   </div>
  </article>)}
 </section>
 </>;
}
