import { roles, coreCapabilities, aiStack, extras } from './experienceData';
import './experience.css';

export default function Experience() {
  return <section className="experience" id="experience" aria-labelledby="experience-title">
    <header>
      <p className="ds-eyebrow">EXPERIENCE · 10+ YEARS · AI PRODUCT DESIGN</p>
      <h2 id="experience-title">The resume behind the work.<br /><i>Ten years, seven teams.</i></h2>
      <p className="xp-lede">The roles, outcomes and operating range below come from my current resume, so recruiters and design heads can check this site against it line by line. The case studies above stay published without client names; nothing here maps a named employer to an unnamed case.</p>
    </header>
    <ol className="xp-timeline">
      {roles.map(r => <li key={r.org}>
        <div className="xp-when"><span>{r.years}</span></div>
        <div className="xp-what">
          <h3>{r.title}</h3>
          <p className="xp-org">{r.org} <span>{r.context}</span></p>
          <ul>{r.highlights.map(h => <li key={h.slice(0, 40)}>{h}</li>)}</ul>
        </div>
      </li>)}
    </ol>
    <div className="xp-band">
      <p className="ds-eyebrow">CORE CAPABILITIES</p>
      <ul className="xp-chips">{coreCapabilities.map(c => <li key={c}>{c}</li>)}</ul>
    </div>
    <div className="xp-band">
      <p className="ds-eyebrow">TOOLS & AI STACK</p>
      <p className="xp-stackline">{aiStack.join(' · ')}</p>
    </div>
    <div className="xp-extras">
      {extras.map(x => <div key={x.label}><span>{x.label}</span><p>{x.body}</p></div>)}
    </div>
  </section>;
}
