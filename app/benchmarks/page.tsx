import Link from 'next/link';import {snapshots,results,boards,guiBench,denseBoards,highlights} from '../benchData';import Reveal from '../Reveal';
export const metadata={title:'Benchmarks · Ayodhya Mohanthy',description:'Benchmark data for AI models on design work, every number linked to its source.'};
export default function Benchmarks(){return <main className="resource-page atlas-page fresh-page tools-page benchmarks-page">
<nav className="atlas-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/components">Components</Link><Link href="/sources">Sources</Link><Link href="/atlas">Atlas</Link><Link href="/fresh">Fresh</Link><Link href="/tools">Tools</Link><Link href="/thinking">Thinking</Link></div></nav>
<header className="atlas-hero"><p className="eyebrow">BENCHMARKS · AI-NATIVE DESIGN · ALL OF THEM, ONE PAGE</p><h1>All the benchmarks.<br/><i>Clubbed in one place.</i></h1><p>Every benchmark this site tracks lives here: the live generative UI rankings, the lab table, the vendor-reported results, and the boards we watch. The homepage keeps a one-line teaser that points back to this page - nothing benchmark-shaped lives anywhere else. Every number is read off a live source page on the date stamped - follow the link and check it yourself.</p><p className="bench-toc"><a href="#rankings">Live rankings ↓</a><a href="#lab">Lab benchmark ↓</a><a href="#reported">Reported results ↓</a><a href="#boards">Boards we watch ↓</a></p></header>
<div id="rankings"/><section className="sources-track" data-rv>
<div className="track-head"><b>01</b><div><h2>Highlights</h2><p>The four numbers a screener asks for first - each read off its live board on 13 Sep 2026.</p></div></div>
<div className="bench-hi">{highlights.map(h=><a key={h.label} href={h.url} target="_blank" rel="noopener noreferrer" className="bench-hi-card"><span>{h.label}</span><b>{h.model}</b><p>{h.fact}</p><i>Open the board ↗</i></a>)}</div>
</section>
{denseBoards.map((d,di)=>{const top=(ci:number)=>new Set(d.rows.map(r=>parseFloat(r[ci])).sort((a,b)=>b-a).slice(0,5));const t1=top(2),t2=top(d.cols.length>4?4:3);return <section className="sources-track bench-snapshot" key={d.category} data-rv>
<div className="track-head"><b>{String(di+2).padStart(2,'0')}</b><div><h2>{d.board}</h2><p>{d.category} · {d.what}</p></div></div>
<table className="bench-table bench-dense lb-table"><thead><tr>{d.cols.map((c,ci)=><th key={c} className={ci>1?'num':''}>{c}</th>)}</tr></thead><tbody>{d.rows.map(r=><tr key={r[1]}>{r.map((cell,ci)=>{const v=parseFloat(cell);const shaded=(ci===2&&t1.has(v))||((ci===(d.cols.length>4?4:3))&&t2.has(v));return <td key={ci} className={`${ci===0?'bench-rank':ci>1?'num bench-score':''} ${ci===2?'lb-global':''} ${shaded?'lb-top':''}`}>{cell}</td>})}</tr>)}</tbody></table>
<p className="lb-foot">// elo & composite · higher is better · shading = top 5 per column · mirrored from {d.url.replace('https://','')} · checked {d.checked.toLowerCase()}</p>
</section>})}
{snapshots.map(s=><section className="sources-track bench-snapshot" key={s.board+s.category} data-rv>
<div className="track-head"><b>04</b><div><h2>{s.board}</h2><p>{s.category} · {s.what}</p></div></div>
<table className="bench-table"><tbody>{s.rows.map(r=><tr key={r.rank}><td className="bench-rank">{String(r.rank).padStart(2,'0')}</td><td>{r.model}{r.open&&<span className='bench-open'>OPEN</span>}</td><td className="bench-score">{r.score}</td></tr>)}</tbody></table>
<p className="bench-meta">CHECKED {s.checked.toUpperCase()} · <a href={s.url} target="_blank" rel="noopener noreferrer">{s.url.replace('https://','')} ↗</a></p>
</section>)}
<section className="sources-track bench-snapshot" id="lab" data-rv>
<div className="track-head"><b>05</b><div><h2>{guiBench.title}</h2><p>{guiBench.what}</p></div></div>
<table className="bench-table"><tbody>{guiBench.rows.map((r,i)=><tr key={r.model}><td className="bench-rank">{String(i+1).padStart(2,'0')}</td><td>{r.model}<span className="bench-open bench-params">{r.params}</span></td><td className="bench-score">{r.score}</td></tr>)}</tbody></table>
<p className="bench-meta">CHECKED {guiBench.checked.toUpperCase()} · <a href={guiBench.url} target="_blank" rel="noopener noreferrer">{guiBench.url.replace('https://','')} ↗</a></p>
</section>
<section className="sources-track" id="reported" data-rv>
<div className="track-head"><b>06</b><div><h2>Reported results</h2><p>Vendor-published benchmark numbers, kept with the claim and the link.</p></div></div>
{results.map((r,i)=><article className="source-item fresh-item" key={r.model}><span className="num">{String(i+1).padStart(2,'0')}</span><div>
<p className="source-meta">CHECKED {r.checked.toUpperCase()} · {r.benchmark.toUpperCase()}</p>
<h3>{r.model} · {r.result}</h3><p className="source-note">{r.note}</p>
<a className="fresh-src" href={r.url} target="_blank" rel="noopener noreferrer">{r.url.replace('https://','').replace('www.','')} ↗</a>
</div></article>)}
</section>
<section className="sources-track" id="boards" data-rv>
<div className="track-head"><b>07</b><div><h2>Boards we watch</h2><p>Live leaderboards checked on the sweep. Snapshots above are re-read as they move.</p></div></div>
<div className="sources-anchors bench-boards">{boards.map(b=><Link key={b.name} href={b.url} target="_blank"><b>{b.name} ↗</b><span>{b.what}</span></Link>)}</div>
</section>
<footer className="resource-footer"><Link href="/">Ayodhya Mohanthy</Link><span>{snapshots.length} live snapshots · 1 reported table · {results.length} reported result · reviewed 12 Sep 2026</span><a href="https://x.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">Follow on X ↗</a><a href="https://www.linkedin.com/in/ayodhyamohanthy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="https://ayodhyamohanthy.substack.com" target="_blank" rel="noopener noreferrer">Newsletter ↗</a><Link href="/accessibility">Accessibility ↗</Link></footer><Reveal/></main>}
