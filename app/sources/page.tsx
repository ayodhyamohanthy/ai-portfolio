import Link from 'next/link';import {sourceTracks} from '../sourcesData';
export const metadata={title:'Sources · Ayodhya Mohanthy',description:'Canonical readings for AI-native design in reading order, each with a short first-person note.'};
import Reveal from '../Reveal';
export default function Sources(){const total=sourceTracks.reduce((n,t)=>n+t.items.length,0);return <main className="resource-page atlas-page sources-page">
<nav className="atlas-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Components</Link><Link href="/atlas">Atlas</Link><Link href="/fresh">Fresh</Link><Link href="/tools">Tools</Link><Link href="/benchmarks">Benchmarks</Link><Link href="/library">Starter kit</Link></div></nav>
<header className="atlas-hero"><p className="eyebrow">SOURCES · AI-NATIVE DESIGN</p><h1>Read the field.<br/><i>In the order I would.</i></h1><p>Canonical readings for AI-native design, sequenced as a path. Every note is mine, written after reading the piece. Suggest what is missing: <a href="mailto:ayodhyarammohanthy@gmail.com">ayodhyarammohanthy@gmail.com</a>.</p></header>
{sourceTracks.map((t,ti)=><section className="sources-track" key={t.id}>
<div className="track-head"><b>{String(ti+1).padStart(2,'0')}</b><div><h2>{t.label}</h2><p>{t.lede}</p></div></div>
{t.items.map((s,i)=><article className="source-item" key={s.url} data-rv style={{'--rd':`${Math.min(i,6)*55}ms`} as React.CSSProperties}><span className="num">{ti+1}.{i+1}</span><div>
<a href={s.url} target="_blank" rel="noopener noreferrer"><h3>{s.title} <i>↗</i></h3></a>
<p className="source-meta">{s.author} · {s.year}</p><p className="source-note">{s.note}</p>
</div></article>)}
</section>)}
<section className="sources-track sources-internal"><div className="track-head"><b>→</b><div><h2>Then touch it</h2><p>Reading holds when it meets running software. The patterns, the map and the starter kit are one click away.</p></div></div>
<div className="sources-anchors"><Link href="/resources">74 live patterns ↗</Link><Link href="/atlas">The atlas ↗</Link><Link href="/library">Starter kit ↗</Link></div></section>
<footer className="resource-footer"><Link href="/">Ayodhya Mohanthy</Link><span>{total} readings · curated by Ayodhya · reviewed 10 Sep 2026</span><Link href="/resources">Components ↗</Link><Link href="/atlas">Atlas ↗</Link><a href="https://x.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">Follow on X ↗</a><a href="https://www.linkedin.com/in/ayodhyamohanthy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><Link href="/#newsletter">Newsletter ↗</Link><Link href="/accessibility">Accessibility ↗</Link></footer><Reveal/>
</main>}
