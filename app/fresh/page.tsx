import Link from 'next/link';import {freshFinds} from '../freshData';
export const metadata={title:'Fresh · Ayodhya Mohanthy',description:'New sources, products and methods in AI-native design, landed when they verify.'};
import Reveal from '../Reveal';
export default function Fresh(){return <main className="resource-page atlas-page fresh-page">
<nav className="atlas-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Components</Link><Link href="/sources">Sources</Link><Link href="/atlas">Atlas</Link><Link href="/tools">Tools</Link><Link href="/benchmarks">Benchmarks</Link></div></nav>
<header className="atlas-hero"><p className="eyebrow">FRESH · AI-NATIVE DESIGN</p><h1>New, and checked.<br/><i>Landed when the field moves.</i></h1><p>Sources, products and methods in AI-native design, watched hourly and landed only when they verify. No timer promises. Spot something first: <a href="mailto:ayodhyarammohanthy@gmail.com">ayodhyarammohanthy@gmail.com</a>.</p></header>
<section className="sources-track">{freshFinds.map((f,i)=><article className="source-item fresh-item" key={f.title} data-rv style={{'--rd':`${Math.min(i,6)*55}ms`} as React.CSSProperties}><span className="num">{String(freshFinds.length-i).padStart(2,'0')}</span><div>
<p className="source-meta">{f.date} · {f.tags.join(' · ')}</p>
<h3>{f.title}</h3><p className="source-note">{f.body}</p>
<a className="fresh-src" href={f.source.url} target="_blank" rel="noopener noreferrer">{f.source.label} ↗</a>
</div></article>)}</section>
<footer className="resource-footer"><Link href="/">Ayodhya Mohanthy</Link><span>{freshFinds.length} finds · curated by Ayodhya · reviewed 10 Sep 2026</span><Link href="/sources">Sources ↗</Link><Link href="/atlas">Atlas ↗</Link><a href="https://x.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">Follow on X ↗</a><a href="https://www.linkedin.com/in/ayodhyamohanthy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><Link href="/accessibility">Accessibility ↗</Link></footer><Reveal/>
</main>}
