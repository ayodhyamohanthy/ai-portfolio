'use client';
import {useEffect,useState} from 'react';
const catalog=['Nav','Header','Metric','Chart','Table','Form','Card','Button'];
const prompts:[string,string[]][]=[
 ['Team dashboard',['Nav','Metric','Metric','Metric','Chart','Table']],
 ['Signup flow',['Header','Form','Button']],
 ['Pricing page',['Header','Card','Card','Card','Button']]];
export default function GenerativeLab(){
 const [pi,setPi]=useState(0),[shown,setShown]=useState(0);
 useEffect(()=>{setShown(0);const blocks=prompts[pi][1];let i=0;
  const id=setInterval(()=>{i+=1;setShown(i);if(i>=blocks.length)clearInterval(id)},420);
  return()=>clearInterval(id)},[pi]);
 const used=new Set(prompts[pi][1].slice(0,shown));
 return <div className="gen-demo">
  <div className="gen-prompts">{prompts.map((p,i)=><button key={p[0]} className={i===pi?'on':''} onClick={()=>setPi(i)}>{p[0]}</button>)}</div>
  <div className="gen-body">
   <aside className="gen-catalog"><span>FIXED CATALOG</span>{catalog.map(c=><b key={c} className={used.has(c)?'used':''}>{c}</b>)}</aside>
   <div className="gen-surface">{prompts[pi][1].slice(0,shown).map((b,i)=><div className="gen-block" key={pi+'-'+i}><span>{b}</span><i/><i style={{width:'62%'}}/></div>)}
    {shown<prompts[pi][1].length&&<div className="gen-block gen-ghost"><span>assembling…</span></div>}
   </div>
  </div>
  <p className="gen-caption">The catalog is fixed - the assembly is generated. Scripted walkthrough, no model calls: the constraint grammar is the design, the surface is the output.</p>
 </div>}
