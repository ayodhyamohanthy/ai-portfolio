import Link from 'next/link';import {steps} from '../processData';import Reveal from '../Reveal';import CopyBlock from './CopyBlock';
export const metadata={title:'The Process · Ayodhya Mohanthy',description:'The manual for AI-native design. Ten steps from a one-line brief to a shipped design - exact tools, working templates, failure modes, and the test for every step.'};
export default function ProcessGuide(){return <main className="pg2">
<nav className="pg2-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Components</Link><Link href="/sources">Sources</Link><Link href="/atlas">Atlas</Link><Link href="/fresh">Fresh</Link><Link href="/benchmarks">Benchmarks</Link><Link href="/thinking">Thinking</Link></div></nav>
<header className="pg2-hero">
<p className="pg2-eyebrow">THE MANUAL · AI-NATIVE DESIGN · BRIEF → SHIPPED</p>
<h1>Design with AI,<br/>end to end.</h1>
<p className="pg2-sub"><i>Start with one line. Ship something real.</i></p>
<p className="pg2-lede">Ten steps, written for someone who has never designed with AI before. Exact tools and when to pick which. Working templates, ready to copy. The failure modes of every step, and the test that tells you when to move on. The philosophy behind it lives in <Link href="/process/ai-native">the companion essay</Link>.</p>
<ol className="pg2-journey">{steps.map(s=><li key={s.n}><a href={`#step-${s.n}`}><span>{s.n}</span><b>{s.name}</b></a></li>)}</ol>
</header>
{steps.map((s,i)=><section className={`pg2-step ${i%2?'alt':''}`} key={s.n} id={`step-${s.n}`} data-rv>
<div className="pg2-step-inner">
<span className="pg2-ghost">{s.n}</span>
<div className="pg2-step-head"><p className="pg2-step-eyebrow">STEP {s.n} / {steps.length}</p><h2>{s.name}<br/><i>{s.claim}</i></h2><p className="pg2-step-body">{s.body}</p></div>
<div className="pg2-block"><p className="pg2-label">THE TOOLS · AND WHEN TO PICK WHICH</p><div className="pg2-tools">{s.tools.map(t=>t.url.startsWith('/')?<Link key={t.name} href={t.url} className="pg2-tool"><b>{t.name}</b><span>{t.what}</span><em>Pick it: {t.pick}</em><i>↗</i></Link>:<a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="pg2-tool"><b>{t.name}</b><span>{t.what}</span><em>Pick it: {t.pick}</em><i>↗</i></a>)}</div></div>
<div className="pg2-block"><p className="pg2-label">{s.templates.length>1?'THE TEMPLATES':'THE TEMPLATE'}</p>{s.templates.map(t=><CopyBlock key={t.label} label={t.label} text={t.text}/>)}</div>
<div className="pg2-block"><p className="pg2-label">WHERE THIS STEP GOES WRONG</p><ul className="pg2-failures">{s.failures.map(f=><li key={f}>{f}</li>)}</ul></div>
<p className="pg2-good">{s.good}</p>
<p className="pg2-done"><span>DONE WHEN</span>{s.doneWhen}</p>
</div>
</section>)}
<section className="pg2-close" data-rv>
<p className="pg2-eyebrow">AFTER STEP {steps.length} · THE LOOP</p>
<h2>Then do it again.</h2>
<p>Every loop starts from evidence and ends with one deliberate change. Everything else on this site feeds it: <Link href="/resources">74 live patterns</Link> to try in your browser, <Link href="/sources">the readings</Link> in order, <Link href="/benchmarks">the rankings</Link> for choosing tools, <Link href="/process/ai-native">the rules I do not delegate</Link>.</p>
<Link href="/" className="pg2-back">Back to the wall ↗</Link>
</section>
<footer className="pg2-footer"><span>Ayodhya Mohanthy · the manual for AI-native design</span><span>{steps.length} steps · {steps.reduce((a,s)=>a+s.tools.length,0)} tools · {steps.reduce((a,s)=>a+s.templates.length,0)} templates · {steps.reduce((a,s)=>a+s.failures.length,0)} failure modes · links verified live 12 Sep 2026</span></footer>
<Reveal/></main>}
