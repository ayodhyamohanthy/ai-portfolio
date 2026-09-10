import Link from 'next/link';import AtlasClient from './AtlasClient';import {fieldNotes} from '../atlasData';
export const metadata={title:'Atlas · Ayodhya Mohanthy',description:'A living map of AI-native design: patterns, templates and case evidence by territory, with dated field notes.'};
export default function Atlas(){return <main className="resource-page atlas-page atlas-light">
<nav className="atlas-nav"><Link href="/" className="wordmark">Ayodhya Mohanthy</Link><div><Link href="/resources">Components</Link><Link href="/fresh">Fresh</Link><Link href="/tools">Tools</Link><Link href="/benchmarks">Benchmarks</Link><Link href="/library">Starter kit</Link><Link href="/work/ai-interface-exploration">Interface lab</Link></div></nav>
<header className="atlas-hero"><p className="eyebrow">THE ATLAS · AI-NATIVE DESIGN</p><h1>The field, mapped.<br/><i>Changed when the field changes.</i></h1><p>Every node is something that already exists here: a verified live pattern, a starter-kit template, or case evidence. Hover to trace relations. Open a note to see why it matters.</p></header>
<AtlasClient/>
<footer className="resource-footer"><Link href="/">Ayodhya Mohanthy</Link><span>{fieldNotesCount()} notes · curated by Ayodhya · reviewed 06 Sep 2026</span><Link href="/resources">Components ↗</Link><Link href="/library">Starter kit ↗</Link><a href="https://x.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">Follow on X ↗</a><a href="https://www.linkedin.com/in/ayodhyamohanthy/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">GitHub ↗</a><Link href="/accessibility">Accessibility ↗</Link></footer>
</main>}
function fieldNotesCount(){return fieldNotes.length}
