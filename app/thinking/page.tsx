import Link from 'next/link';import {sourceTracks} from '../sourcesData';import {freshFinds} from '../freshData';import {fieldNotes} from '../atlasData';import Reveal from '../Reveal';
export const metadata={title:'Thinking · Ayodhya Mohanthy',description:'Positions on AI-native design, published next to the work they argue for.'};
const src=(t:string)=>{for(const tr of sourceTracks){const it=tr.items.find(i=>i.title===t);if(it)return{title:it.title,note:it.note,meta:`SOURCES · ${tr.label.toUpperCase()}`,href:'/sources',ext:it.url}}return null};
const fresh=(t:string)=>{const f=freshFinds.find(x=>x.title===t);return f?{title:f.title,note:f.body,meta:'FRESH · '+f.date.toUpperCase(),href:'/fresh',ext:f.source.url}:null};
const field=(t:string)=>{const f=fieldNotes.find(x=>x.title===t);return f?{title:f.title,note:f.body,meta:'ATLAS FIELD NOTE · '+f.date.toUpperCase(),href:'/atlas',ext:f.source.url}:null};
type Entry={title:string;note:string;meta:string;href:string;ext:string};
const sections:{label:string;title:string;lede:string;entries:(Entry|null)[]}[]=[
{label:'01 · THE SURFACE',title:'Beyond the chatbox',lede:'The interface is not a conversation with a text box bolted on. States become spectrums, surfaces assemble themselves, and what stays fixed is grammar, not layout.',entries:[
 src('Eight Dimensions of AI-Native Design'),
 src('Designing Generative UI in an Agent-Native World'),
 fresh('Smashing argues the button is dying'),
 fresh('OUI-1 puts generative UI on consumer GPUs'),
 src('Agent to UI: Designing Interfaces for AI Agents'),
 src('Dual-Native Design for the AI Future')]},
{label:'02 · TRUST',title:'Non-determinism, latency and failure',lede:'The model will be slow, wrong and confident - sometimes in the same answer. The interface carries that honestly: reasoning visible, uncertainty admitted, evidence attached.',entries:[
 src('People + AI Guidebook'),
 src('AI UX Patterns for AI-Native Products'),
 field('Honest motion is a research trail'),
 src('How we built Linear Agent')]},
{label:'03 · AGENCY',title:'Human agency over autopilot',lede:'Automation is a dial, not a destination. The design work is deciding where the person steers, approves, interrupts and recovers - then building exactly those surfaces.',entries:[
 src('The Agent is the Interface'),
 src('UX Patterns for Agentic AI: 16 Essentials')]}];
export default function Thinking(){const count=sections.reduce((n,s)=>n+s.entries.filter(Boolean).length,0);return <main className="resource-page atlas-page fresh-page tools-page">
<nav className="atlas-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Components</Link><Link href="/sources">Sources</Link><Link href="/atlas">Atlas</Link><Link href="/fresh">Fresh</Link><Link href="/tools">Tools</Link></div></nav>
<header className="atlas-hero"><p className="eyebrow">POSITIONS · AI-NATIVE DESIGN</p><h1>What I believe,<br/><i>argued next to the work.</i></h1><p>Not an essay wall - every position here is already published on this site, next to the reading or artifact it argues for. This page gathers them in one scan. The quotes are the notes as published; the links go to where they live.</p></header>
{sections.map(s=><section className="sources-track" key={s.label} data-rv>
<div className="track-head"><b>{s.label.split(' · ')[0]}</b><div><h2>{s.title}</h2><p>{s.lede}</p></div></div>
{s.entries.filter((e):e is Entry=>!!e).map((e,i)=><article className="source-item fresh-item" key={e.title}><span className="num">{String(i+1).padStart(2,'0')}</span><div>
<p className="source-meta">{e.meta}</p>
<h3>{e.title}</h3><p className="source-note">{e.note}</p>
<a className="fresh-src" href={e.href}>lives at {e.href} ↗</a> <a className="fresh-src" href={e.ext} target="_blank" rel="noopener noreferrer">source ↗</a>
</div></article>)}
{s.label.startsWith('03')&&<>
<div className="sources-anchors bench-boards"><Link href="/atlas?t=human-control"><b>Human control territory ↗</b><span>The control surfaces, mapped: approval, steering, correction, recovery.</span></Link></div>
<div className="process-split">{[['Discover','AI clusters research and retrieves patterns.','I verify sources, separate signal from repetition, and decide what is trustworthy.'],['Frame','AI generates competing problem frames.','I choose the frame that connects user behavior to the business constraint.'],['Explore','AI widens the option space.','I set principles, reject weak patterns and select a direction deliberately.'],['Prototype','AI accelerates variants and working prototypes.','I decide what the prototype must prove and preserve interaction quality.'],['Validate','AI helps synthesize evidence.','I inspect contradictions, resist false certainty and own the final recommendation.']].map(x=><div className="process-row" key={x[0]}><b>{x[0]}</b><p><span>AI</span>{x[1]}</p><p><span>ME</span>{x[2]}</p></div>)}</div>
<p className="bench-meta">THE DIVISION OF LABOR, AS PUBLISHED IN MY AI PROCESS</p>
</>}
</section>)}
<section className="sources-track" data-rv>
<div className="track-head"><b>04</b><div><h2>Prototypes over screens</h2><p>A static screen of an AI product proves nothing - the behaviour is the product. So the evidence on this site runs.</p></div></div>
<div className="sources-anchors bench-boards"><Link href="/resources"><b>74 live patterns ↗</b><span>Every pattern runs in the browser: streaming, approval, recovery, control.</span></Link><Link href="/work/ai-interface-exploration"><b>The Interface Lab ↗</b><span>21 patterns in one running surface, including a scripted generative-UI assembly.</span></Link><Link href="/capabilities"><b>The evidence map ↗</b><span>Twelve stages, each marked strong, partial or needs evidence - with the proof linked.</span></Link></div>
</section>
<section className="sources-track" data-rv>
<div className="track-head"><b>05</b><div><h2>The stance as a system</h2><p>The positions hold together as a map and a ruleset, not a pile of takes.</p></div></div>
<div className="sources-anchors bench-boards"><Link href="/atlas"><b>The field atlas ↗</b><span>Nine territories, thirty-seven nodes - the field mapped and re-mapped as it moves.</span></Link><a href="https://github.com/ayodhyamohanthy/ai-portfolio" target="_blank" rel="noopener noreferrer"><b>The design system ↗</b><span>The production rules behind this interface, versioned in the open source history.</span></a></div>
</section>
<footer className="resource-footer"><Link href="/">Ayodhya Mohanthy</Link><span>{count} positions · gathered from the live site · 10 Sep 2026</span><a href="https://x.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">Follow on X ↗</a><a href="https://www.linkedin.com/in/ayodhyamohanthy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://ayodhyamohanthy.substack.com" target="_blank" rel="noopener noreferrer">Newsletter ↗</a><Link href="/accessibility">Accessibility ↗</Link></footer><Reveal/></main>}
