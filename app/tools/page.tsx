import Link from 'next/link';import {tools} from '../toolsData';import Reveal from '../Reveal';
export const metadata={title:'Tools · Ayodhya Mohanthy',description:'AI-native design tools worth your time, kept current.'};
export default function Tools(){return <main className="resource-page atlas-page fresh-page tools-page">
<nav className="atlas-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Components</Link><Link href="/sources">Sources</Link><Link href="/atlas">Atlas</Link><Link href="/fresh">Fresh</Link></div></nav>
<header className="atlas-hero"><p className="eyebrow">TOOLS · AI-NATIVE DESIGN</p><h1>Design with the new tools.<br/><i>Picked when they earn it.</i></h1><p>AI-native design tools worth your time, kept current. A tool lands here when it earns a place, and the list moves as the field ships. Know one I should try: <a href="mailto:ayodhyarammohanthy@gmail.com">ayodhyarammohanthy@gmail.com</a>.</p></header>
<section className="sources-track">{tools.map((t,i)=><article className="source-item fresh-item tool-item" key={t.name} data-rv style={{'--rd':`${Math.min(i,6)*55}ms`} as React.CSSProperties}><span className="num">{String(i+1).padStart(2,'0')}</span><div>
<p className="source-meta">ADDED {t.added.toUpperCase()} · {t.tags.join(' · ')}</p>
<h3>{t.name}</h3><p className="tool-what">{t.what}</p><p className="source-note">{t.note}</p>
<a className="fresh-src" href={t.url} target="_blank" rel="noopener noreferrer">{t.url.replace('https://','').replace('www.','').replace(/\/$/,'')} ↗</a>
</div></article>)}</section>
<footer className="resource-footer"><Link href="/">Ayodhya Mohanthy</Link><span>{tools.length} tools · curated by Ayodhya · reviewed 10 Sep 2026</span><a href="https://x.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">Follow on X ↗</a><a href="https://www.linkedin.com/in/ayodhyamohanthy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><Link href="/#newsletter">Newsletter ↗</Link><Link href="/accessibility">Accessibility ↗</Link></footer><Reveal/></main>}
