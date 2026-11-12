import Image from 'next/image';
import Link from 'next/link';
import { deepStudies, type DeepStudy as Study } from './deepStudyData';
import sourceCases from './behanceCaseData.json';
import './deep-studies.css';

function Artifact({ slug, file, caption }: { slug: string; file: string; caption: string }) {
  const src = `/cases/${slug}/${file}`;
  return <figure className="ds-artifact">
    <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size artifact: ${caption}`}>
      <Image src={src} alt={caption} width={1600} height={1000} sizes="(max-width: 760px) 100vw, 1100px" />
      <span>Inspect original ↗</span>
    </a>
    <figcaption>{caption}</figcaption>
  </figure>;
}
export default function DeepStudy({ study }: { study: Study }) {
  const next = deepStudies[(deepStudies.indexOf(study) + 1) % deepStudies.length];
  return <main className="ds-page" id="top">
    <a className="ds-skip" href="#study-content">Skip to case study</a>
    <header className="ds-topbar"><Link href="/">Ayodhya Mohanthy<span> / Product design</span></Link><nav aria-label="Portfolio"><Link href="/#cases">Selected work</Link><Link href="/contact">Get in touch ↗</Link></nav></header>
    <header className="ds-hero ds-wrap">
      <p className="ds-eyebrow">CASE STUDY {study.number} / {study.category}</p>
      <h1>{study.title}</h1><p className="ds-summary">{study.summary}</p>
      <div className="ds-meta"><div><span>MY ROLE</span><p>{study.role}</p></div><div><span>THE SCOPE</span><p>{study.scope}</p></div><div><span>COLLABORATION</span><p>{study.collaboration}</p></div></div>
    </header>
    <div className={`ds-cover ds-cover-${study.slug}`}><Image src={`/cases/${study.slug}/${study.image}`} alt={`${study.sourceTitle}: original published product screen`} width={1600} height={1000} priority sizes="100vw" /><span>ORIGINAL PROJECT ARTIFACT / OPEN THE STUDY BELOW</span></div>
    <div className="ds-body ds-wrap" id="study-content">
      <aside className="ds-index"><p>INSIDE THE CASE</p><nav aria-label="Case study sections"><a href="#at-a-glance">At a glance</a>{study.sections.map(s => <a href={`#${s.id}`} key={s.id}>{s.title}</a>)}<a href="#full-gallery">Full gallery</a><a href="#reflection">Reflection</a><a href="#evidence-notes">Evidence & limits</a></nav></aside>
      <article className="ds-story">
        <section id="at-a-glance" className="ds-glance"><p className="ds-eyebrow">THE CENTRAL DESIGN QUESTION</p><h2>{study.question}</h2><p>{study.answer}</p><div className="ds-results">{study.results.map(r => <div key={r.label}><strong>{r.value}</strong><span>{r.label}</span></div>)}</div><small>{study.slug === 'ad-platform' ? 'Research scope and qualitative outcome. See evidence notes below.' : 'Outcomes reported in the original published case. See evidence notes below.'}</small></section>
        {study.sections.map((s, i) => <section className="ds-section" id={s.id} key={s.id}><div className="ds-section-label"><span>{String(i + 1).padStart(2, '0')}</span><p>{s.id.toUpperCase()}</p></div><h2>{s.title}</h2><p className="ds-intro">{s.intro}</p>{s.points && <div className="ds-points">{s.points.map(p => <div key={p.title}><h3>{p.title}</h3><p>{p.body}</p></div>)}</div>}{s.images?.map(im => <Artifact slug={study.slug} key={im.file} {...im} />)}</section>)}
        <section className="ds-reflection" id="reflection"><p className="ds-eyebrow">WHAT I TAKE FORWARD</p><h2>The judgment behind the work.</h2><p>{study.reflection}</p></section>
        <section className="ds-evidence" id="evidence-notes"><p className="ds-eyebrow">EVIDENCE & MEASUREMENT</p><h2>Clear about what this case proves.</h2><p>{study.measurement}</p><p>The narrative and images are drawn from my published project. Client identity, project dates, reporting lines and team size are not specified in that material, so this case does not assign them or map the project to an employer on my resume. Selected artifacts are reproduced unchanged; this page is an edited presentation of the work, not a new validation study.</p><a href={study.source} target="_blank" rel="noopener noreferrer">Read the original published project ↗</a></section>
        <section className="ds-gallery" id="full-gallery"><p className="ds-eyebrow">FULL ARTIFACT GALLERY</p><h2>Every original screen from the published project.</h2><p>All {(sourceCases.find(x => x.slug === study.slug)?.images.length ?? 0)} artifacts from the original case, unchanged, for a detailed screener pass. Select any image to open it full size.</p><div className="ds-gallery-grid">{(sourceCases.find(x => x.slug === study.slug)?.images ?? []).map((im, i) => <a key={im.src} href={im.src} target="_blank" rel="noopener noreferrer" aria-label={`Open original artifact ${i + 1} full size`}><Image src={im.src} alt={`${study.sourceTitle}: original artifact ${i + 1}`} width={im.width || 1400} height={im.height || 900} loading="lazy" /><span>ARTIFACT {String(i + 1).padStart(2, '0')}</span></a>)}</div></section>
        <Link className="ds-next" href={`/work/${next.slug}`}><span>NEXT CASE / {next.category}</span><h2>{next.title}</h2><b>Read case study ↗</b></Link>
      </article>
    </div>
    <footer className="ds-footer ds-wrap"><Link href="/#cases">← All three studies</Link><a href="#top">Back to top ↑</a><Link href="/contact">Talk about the work ↗</Link></footer>
  </main>;
}
