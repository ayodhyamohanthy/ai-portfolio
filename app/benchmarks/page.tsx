import Link from 'next/link';import {snapshots,results,boards,guiBench} from '../benchData';import Reveal from '../Reveal';
export const metadata={title:'Benchmarks · Ayodhya Mohanthy',description:'Benchmark data for AI models on design work, every number linked to its source.'};
export default function Benchmarks(){return <main className="resource-page atlas-page fresh-page tools-page benchmarks-page">
<nav className="atlas-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Components</Link><Link href="/sources">Sources</Link><Link href="/atlas">Atlas</Link><Link href="/fresh">Fresh</Link><Link href="/tools">Tools</Link><Link href="/thinking">Thinking</Link></div></nav>
<header className="atlas-hero"><p className="eyebrow">BENCHMARKS · AI-NATIVE DESIGN</p><h1>The generative UI ranking.<br/><i>Closed and open, one table.</i></h1><p>Benchmark data for models doing design work, generative UI first. Every number is read off a live source page on the date stamped - follow the link and check it yourself.</p></header>
{snapshots.map(s=><section className="sources-track bench-snapshot" key={s.board+s.category} data-rv>
<div className="track-head"><b>LIVE</b><div><h2>{s.board}</h2><p>{s.category} · {s.what}</p></div></div>
<table className="bench-table"><tbody>{s.rows.map(r=><tr key={r.rank}><td className="bench-rank">{String(r.rank).padStart(2,'0')}</td><td>{r.model}{r.open&&<span className='bench-open'>OPEN</span>}</td><td className="bench-score">{r.score}</td></tr>)}</tbody></table>
<p className="bench-meta">CHECKED {s.checked.toUpperCase()} · <a href={s.url} target="_blank" rel="noopener noreferrer">{s.url.replace('https://','')} ↗</a></p>
</section>)}
<section className="sources-track bench-snapshot" data-rv>
<div className="track-head"><b>LAB</b><div><h2>{guiBench.title}</h2><p>{guiBench.what}</p></div></div>
<table className="bench-table"><tbody>{guiBench.rows.map((r,i)=><tr key={r.model}><td className="bench-rank">{String(i+1).padStart(2,'0')}</td><td>{r.model}<span className="bench-open bench-params">{r.params}</span></td><td className="bench-score">{r.score}</td></tr>)}</tbody></table>
<p className="bench-meta">CHECKED {guiBench.checked.toUpperCase()} · <a href={guiBench.url} target="_blank" rel="noopener noreferrer">{guiBench.url.replace('https://','')} ↗</a></p>
</section>
<section className="sources-track" data-rv>
<div className="track-head"><b>LAB</b><div><h2>Reported results</h2><p>Vendor-published benchmark numbers, kept with the claim and the link.</p></div></div>
{results.map((r,i)=><article className="source-item fresh-item" key={r.model}><span className="num">{String(i+1).padStart(2,'0')}</span><div>
<p className="source-meta">CHECKED {r.checked.toUpperCase()} · {r.benchmark.toUpperCase()}</p>
<h3>{r.model} · {r.result}</h3><p className="source-note">{r.note}</p>
<a className="fresh-src" href={r.url} target="_blank" rel="noopener noreferrer">{r.url.replace('https://','').replace('www.','')} ↗</a>
</div></article>)}
</section>
<section className="sources-track" data-rv>
<div className="track-head"><b>EYES</b><div><h2>Boards we watch</h2><p>Live leaderboards checked on the sweep. Snapshots above are re-read as they move.</p></div></div>
<div className="sources-anchors bench-boards">{boards.map(b=><Link key={b.name} href={b.url} target="_blank"><b>{b.name} ↗</b><span>{b.what}</span></Link>)}</div>
</section>
<footer className="resource-footer"><Link href="/">Ayodhya Mohanthy</Link><span>{snapshots.length} live snapshots · 1 reported table · {results.length} reported result · reviewed 10 Sep 2026</span><a href="https://x.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">Follow on X ↗</a><a href="https://www.linkedin.com/in/ayodhyamohanthy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://ayodhyamohanthy.substack.com" target="_blank" rel="noopener noreferrer">Newsletter ↗</a><Link href="/accessibility">Accessibility ↗</Link></footer><Reveal/></main>}
