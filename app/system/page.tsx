import Link from 'next/link';
import {resources} from '../resourceData';
import {territories} from '../atlasData';
import {sourceTracks} from '../sourcesData';
import {libraryEntries} from '../libraryData';
import {freshFinds} from '../freshData';
import {tools} from '../toolsData';
const tokens=[['Paper','#F7F4EE','Primary canvas'],['Ink','#111111','Text and dark surfaces'],['Signal','#C8FF5C','Action, status, evidence'],['Violet','#7666F4','AI-native practice'],['Sand','#E5D8C8','Secondary system accent']];
const patternCount=resources.reduce((n,r)=>n+(r.access==='Hosted'?r.components.length:1),0);
const readingCount=sourceTracks.reduce((n,t)=>n+t.items.length,0);
const paths=[
 ['01','Orient','Map the field before choosing a pattern.','/atlas',`${territories.length} territories`],
 ['02','Learn','Read the foundations and interface arguments in order.','/sources',`${readingCount} readings`],
 ['03','Try','Use the working interaction patterns, not screenshots.','/resources',`${patternCount} live patterns`],
 ['04','Build','Follow the component catalogue and six-step build guide.','/components','12 component jobs'],
 ['05','Apply','Move from brief to shipped work with the full manual.','/process','10-step process'],
 ['06','Specify','Copy the briefs, rubrics and failure templates into a project.','/library',`${libraryEntries.length} open templates`],
 ['07','Evaluate','Compare current models against the live boards.','/benchmarks','Hourly board refresh'],
 ['08','Stay current','Review verified additions to the field, with sources attached.','/fresh',`${freshFinds.length} field notes`]
];
export default function System(){return <main>
<nav><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Patterns</Link><Link href="/process">Manual</Link><a href="https://github.com/ayodhyamohanthy/ai-portfolio">GitHub ↗</a></div></nav>
<header className="docs-hero system-hero"><p className="eyebrow">OPEN-SOURCE · AI-NATIVE DESIGN SYSTEM</p><h1>Learn the field.<br/>Try the patterns.<br/><i>Ship the decisions.</i></h1><p>This portfolio is one working design system for AI-native products: foundations, interface patterns, process, templates, tools, benchmarks and current field notes - organised as a path from first principle to shipped work.</p><div className="system-stats"><span><b>{patternCount}</b> live patterns</span><span><b>{libraryEntries.length}</b> open templates</span><span><b>{territories.length}</b> territories</span><span><b>{tools.length}</b> watched tools</span></div></header>
<section className="system-path"><header><p className="eyebrow">START HERE · THE LEARNING PATH</p><h2>One field. Eight connected moves.</h2><p>Follow the sequence once, then enter wherever your project is stuck.</p></header><div>{paths.map(([n,title,body,href,proof])=><Link href={href} key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p><b>{proof}</b><i>Open →</i></Link>)}</div></section>
<section className="docs-section system-taxonomy"><p className="eyebrow">THE SHARED TAXONOMY</p><h2>Organised by the decision a designer must make.</h2><p className="docs-note">The same territory names run through the map, component wall and learning material. A visitor can move from a concept to a working pattern without learning a second filing system.</p><div>{territories.map(t=><Link key={t.id} href={`/atlas?t=${t.id}`}><span>{t.label}</span><i>Explore →</i></Link>)}</div></section>
<section className="docs-section"><p className="eyebrow">FOUNDATIONS / TOKENS</p><h2>Contrast first. Signal used sparingly.</h2><div className="token-grid">{tokens.map(([n,v,u])=><article style={{'--swatch':v} as React.CSSProperties} key={n}><i/><b>{n}</b><code>{v}</code><p>{u}</p></article>)}</div></section>
<section className="docs-section"><p className="eyebrow">INTERFACE CONTRACT</p><h2>Every AI-native component explains four things.</h2><div className="grammar-grid">{[['State','What the system is doing now.'],['Source','Why the result deserves trust.'],['Action','The next move, written as a verb.'],['Recovery','What happens when confidence or a tool fails.']].map(x=><article key={x[0]}><b>{x[0]}</b><p>{x[1]}</p></article>)}</div><Link className="text-link" href="/resources">Inspect the live pattern wall →</Link></section>
<section className="docs-section type-spec"><p className="eyebrow">TYPE + SHAPE</p><h2>Editorial hierarchy. Operational controls.</h2><div><span>Display / 116</span><b>Evidence before interface.</b></div><div><span>Body / 18</span><p>Short words, visible limits and one obvious next action.</p></div><p className="docs-note">Tight radii keep the system operational: 7-10px controls, 12-16px containers, pills only for status or filters.</p></section>
<section className="docs-section"><p className="eyebrow">RESPONSIVE + MOTION</p><h2>Same decision path. Less simultaneous information.</h2><div className="docs-columns"><p><b>Desktop</b>Persistent evidence, comparison and multi-column scan.</p><p><b>Mobile</b>One column, larger targets and secondary evidence progressively disclosed.</p><p><b>Motion</b>Explains loading, state change or continuity. Animation resolves under <code>prefers-reduced-motion</code>.</p></div></section>
<section className="docs-governance"><p className="eyebrow">OPEN GOVERNANCE</p><h2>Current by evidence, not by decoration.</h2><p>The source is public. Changes ship as versioned commits. Third-party work keeps its author, access boundary and exact licence. New patterns need a source, a reviewed date, keyboard use, reduced motion and desktop and mobile checks before production.</p><div className="system-actions"><a href="https://github.com/ayodhyamohanthy/ai-portfolio">View source history ↗</a><Link href="/resources/credits">Credits + licences ↗</Link><Link href="/accessibility">Accessibility rules ↗</Link></div></section>
</main>}
