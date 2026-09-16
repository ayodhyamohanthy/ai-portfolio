import Link from 'next/link';import {patterns,howSteps} from '../componentData';import Reveal from '../Reveal';import CopyBlock from '../process/CopyBlock';
import SystemTrail from '../SystemTrail';
export const metadata={title:'AI-native Components · Ayodhya Mohanthy',description:'The catalogue of AI-native design components - streaming messages, thinking traces, tool calls, approval gates, composed surfaces - and the six steps to create your own.'};
export default function ComponentsGuide(){return <main className="pg2">
<nav className="pg2-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><Link href="/system">System</Link><div><Link href="/resources">Pattern library</Link><Link href="/sources">Sources</Link><Link href="/atlas">Atlas</Link><Link href="/fresh">Fresh</Link><Link href="/tools">Tools</Link><Link href="/process">Process</Link><Link href="/benchmarks">Benchmarks</Link></div></nav>
<header className="pg2-hero">
<p className="pg2-eyebrow">AI-NATIVE DESIGN COMPONENTS · THE CATALOGUE + THE BUILD GUIDE</p>
<h1>Components that<br/>think with you.</h1>
<p className="pg2-sub"><i>What they are. How to create them.</i></p>
<p className="pg2-lede">Twelve components that make a product AI-native - streaming messages, thinking traces, tool calls, approval gates, composed surfaces - each with the states you must design and a live example you can open today. Then six steps to build your own, with templates. Copy-paste primitives live in <Link href="/resources">the pattern library</Link>; the end-to-end method lives in <Link href="/process">the process manual</Link>.</p>
<ol className="pg2-journey">{patterns.map(p=><li key={p.n}><a href={`#pattern-${p.n}`}><span>{p.n}</span><b>{p.name}</b></a></li>)}<li className="cp-journey-how"><a href="#build"><span>THEN</span><b>Build your own ↓</b></a></li></ol>
</header><SystemTrail current="Build"/>
{patterns.map((p,i)=><section className={`pg2-step ${i%2?'alt':''}`} key={p.n} id={`pattern-${p.n}`} data-rv>
<div className="pg2-step-inner">
<span className="pg2-ghost">{p.n}</span>
<div className="pg2-step-head"><p className="pg2-step-eyebrow">COMPONENT {p.n} / {patterns.length}</p><h2>{p.name}<br/><i>{p.claim}</i></h2><p className="pg2-step-body">{p.what}</p></div>
<div className="pg2-block"><p className="pg2-label">THE STATES YOU MUST DESIGN</p><ul className="cp-chips">{p.states.map(s=><li key={s}>{s}</li>)}</ul></div>
<div className="pg2-block"><p className="pg2-label">WHEN YOU REACH FOR IT</p><p className="cp-when">{p.when}</p></div>
<div className="pg2-block"><p className="pg2-label">SEE IT LIVE · VERIFIED 13 SEP 2026</p><div className="pg2-tools">{p.examples.map(e=><a key={e.label} href={e.url} target="_blank" rel="noopener noreferrer" className="pg2-tool"><b>{e.label}</b><span>{e.note}</span><i>↗</i></a>)}</div></div>
</div>
</section>)}
<section className="pg2-step alt" id="build" data-rv>
<div className="pg2-step-inner">
<span className="pg2-ghost">→</span>
<div className="pg2-step-head"><p className="pg2-step-eyebrow">THE BUILD GUIDE · 6 STEPS</p><h2>How to create<br/><i>your own.</i></h2><p className="pg2-step-body">The twelve above share one recipe. Six steps, in order - each with the tools, a template to copy, and the ways the step goes wrong.</p></div>
</div>
</section>
{howSteps.map((s,i)=><section className={`pg2-step ${i%2?'':'alt'}`} key={s.n} id={`how-${s.n}`} data-rv>
<div className="pg2-step-inner">
<span className="pg2-ghost">{s.n}</span>
<div className="pg2-step-head"><p className="pg2-step-eyebrow">BUILD STEP {s.n} / {howSteps.length}</p><h2>{s.name}<br/><i>{s.claim}</i></h2><p className="pg2-step-body">{s.body}</p></div>
<div className="pg2-block"><p className="pg2-label">THE TOOLS · AND WHEN TO PICK WHICH</p><div className="pg2-tools">{s.tools.map(t=>t.url.startsWith('/')?<Link key={t.name} href={t.url} className="pg2-tool"><b>{t.name}</b><span>{t.what}</span><em>Pick it: {t.pick}</em><i>↗</i></Link>:<a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="pg2-tool"><b>{t.name}</b><span>{t.what}</span><em>Pick it: {t.pick}</em><i>↗</i></a>)}</div></div>
<div className="pg2-block"><p className="pg2-label">{s.templates.length>1?'THE TEMPLATES':'THE TEMPLATE'}</p>{s.templates.map(t=><CopyBlock key={t.label} label={t.label} text={t.text}/>)}</div>
<div className="pg2-block"><p className="pg2-label">WHERE THIS STEP GOES WRONG</p><ul className="pg2-failures">{s.failures.map(f=><li key={f}>{f}</li>)}</ul></div>
<p className="pg2-good">{s.good}</p>
<p className="pg2-done"><span>DONE WHEN</span>{s.doneWhen}</p>
</div>
</section>)}
<section className="pg2-close" data-rv>
<p className="pg2-eyebrow">AFTER STEP {howSteps.length} · SHIP ONE</p>
<h2>Then ship one small.</h2>
<p>Pick the component your product needs most, walk the six steps, and put it in front of a user this week. Everything here connects: <Link href="/resources">78 live patterns</Link> to start from, <Link href="/process">the full process</Link> for the product around the component, <Link href="/benchmarks">the rankings</Link> for choosing the model behind it, and <Link href="/fresh">the fresh shelf</Link> for the patterns still landing.</p>
<Link href="/" className="pg2-back">Back to the wall ↗</Link>
</section>
<footer className="pg2-footer"><span>Ayodhya Mohanthy · AI-native components</span><span>{patterns.length} components · {howSteps.length} build steps · {howSteps.reduce((a,s)=>a+s.tools.length,0)} tools · {howSteps.reduce((a,s)=>a+s.templates.length,0)} templates · {howSteps.reduce((a,s)=>a+s.failures.length,0)} failure modes · links verified live 13 Sep 2026</span></footer>
<Reveal/></main>}
