import Link from 'next/link';import Reveal from '../../Reveal';import CopyBlock from '../CopyBlock';import {appliedSteps} from './data';
export const metadata={title:'The Process, Applied: Skipwait · Ayodhya Mohanthy',description:'The ten-step AI-native design process with every template filled for a very complex AI product - Skipwait, a live agentic referral marketplace. Copy, paste, swap in your own product.'};
export default function InPractice(){return <main className="pg2">
<nav className="pg2-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><Link href="/system">System</Link><div><Link href="/process">Process</Link><Link href="/components">Components</Link><Link href="/sources">Sources</Link><Link href="/benchmarks">Benchmarks</Link><Link href="/tools">Tools</Link></div></nav>
<header className="pg2-hero">
<p className="pg2-eyebrow">THE PROCESS, APPLIED · A VERY COMPLEX AI PRODUCT</p>
<h1>Skipwait,<br/>end to end.</h1>
<p className="pg2-sub"><i>Copy any block. Swap in your product. Run the loop.</i></p>
<p className="pg2-lede">The manual's ten steps with every template filled for a real agentic product: a private referral marketplace where AI assistants act under consent, limits and human review. Blocks marked <b>FROM THE BUILD</b> come from the shipped product and its public repo. Blocks marked <b>PLANNED</b> are the next loop, filled and ready - the difference is always labeled. No outcome metrics are claimed; the product's own previews are labeled NO LIVE DATA. The theory sits in <Link href="/process">the manual</Link>.</p>
<p className="pg2-lede"><a href="https://skipwait.me" target="_blank" rel="noopener noreferrer">Live product ↗</a> · <a href="https://github.com/ayodhyamohanthy/skipwaitmanus" target="_blank" rel="noopener noreferrer">Public repo ↗</a> · <Link href="/work/skipwait">Case study</Link></p>
<ol className="pg2-journey">{appliedSteps.map(s=><li key={s.n}><a href={`#applied-${s.n}`}><span>{s.n}</span><b>{s.name}</b></a></li>)}</ol>
</header>
{appliedSteps.map((s,i)=><section className={`pg2-step ${i%2?'alt':''}`} key={s.n} id={`applied-${s.n}`} data-rv>
<div className="pg2-step-inner">
<span className="pg2-ghost">{s.n}</span>
<div className="pg2-step-head"><p className="pg2-step-eyebrow">STEP {s.n} / {appliedSteps.length} · <Link href={`/process#step-${s.n}`}>THE MANUAL STEP ↗</Link></p><h2>{s.name}</h2><span className={`ip-status ${s.status==='FROM THE BUILD'?'build':''}`}>{s.status}</span></div>
<div className="pg2-block"><CopyBlock label={s.artifactLabel} text={s.artifact}/></div>
<div className="pg2-block"><p className="pg2-label">WHAT IT PRODUCED</p><p className="pg2-step-body">{s.produced}</p>
<p className="ip-ev">{s.evidence.map(e=>e.href?<Link key={e.text} href={e.href} target={e.href.startsWith('http')?'_blank':undefined} rel={e.href.startsWith('http')?'noopener noreferrer':undefined}>{e.text}</Link>:<span key={e.text}>{e.text}</span>)}</p></div>
</div>
</section>)}
<section className="pg2-close" data-rv>
<p className="pg2-eyebrow">AFTER STEP 10 · YOUR TURN</p>
<h2>Run it on yours.</h2>
<p>Every block on this page copies with one tap. Take the blank templates from <Link href="/process">the manual</Link>, fill them for your product the way these are filled for Skipwait, and hold every direction against your eval. Pick models on evidence from <Link href="/benchmarks">the live board</Link>, not taste.</p>
<Link href="/process" className="pg2-back">Back to the manual ↗</Link>
</section>
<footer className="pg2-footer"><span>Ayodhya Mohanthy · the process, applied</span><span>10 steps · Skipwait · build artifacts from the shipped product and public repo · planned blocks labeled · 13 Nov 2026</span></footer>
<Reveal/></main>}
