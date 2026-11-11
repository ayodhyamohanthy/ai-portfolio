import Image from 'next/image';
import Link from 'next/link';
import { deepStudies } from './deepStudyData';
import './deep-studies.css';
export default function FeaturedStudies() {
  return <section className="selected-studies" id="cases" aria-labelledby="selected-title">
    <header><p className="ds-eyebrow">SELECTED WORK / THREE DEEP DIVES</p><h2 id="selected-title">The decisions.<br /><i>The work behind them.</i></h2><p>Enterprise complexity, product direction and the details that make a workflow work. Three projects, with the original artifacts and an honest account of the evidence.</p></header>
    <div className="selected-grid">{deepStudies.map(s => <Link className={`selected-card selected-${s.slug}`} href={`/work/${s.slug}`} key={s.slug}>
      <div className="selected-image"><Image src={`/cases/${s.slug}/${s.image}`} alt={`${s.sourceTitle}: original interface artifact`} width={1000} height={650} priority={s.number === '01'} sizes="(max-width: 760px) 100vw, 42vw" /><span>{s.number} / CASE STUDY</span></div>
      <div className="selected-copy"><p>{s.category}</p><h3>{s.title}</h3><span>{s.summary}</span><small>{s.signal}</small><b>Read the decisions & evidence <i>↗</i></b></div>
    </Link>)}</div>
    <p className="selected-note">Selected from my published project archive. Outcome figures are source-reported; each case makes its measurement limits explicit.</p>
  </section>;
}
