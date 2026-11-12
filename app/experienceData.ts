export type Role = {
  org: string;
  title: string;
  years: string;
  context: string;
  highlights: string[];
};

// Source: the user's two current approved resumes (Principal AI Product Designer and
// Head of AI Product Design, both November 11, 2026). Roles, employers, dates and
// outcome figures are taken from those documents only. Case studies on this site stay
// published without client names; nothing here maps a named employer to an unnamed case.
export const roles: Role[] = [
  {
    org: 'Breakthrough Labs · Skipwait.me',
    title: 'Principal AI Product Designer & Product Lead',
    years: '2023 — Present',
    context: 'Two-sided AI talent-matching & referral marketplace · Global',
    highlights: [
      'Defined agentic autonomy frameworks (copilot / supervised / autopilot tiers) with risk-matched human-review gates, and made AI evals a core design artifact - rubrics, golden datasets, failure taxonomies, hallucination guardrails - cutting low-confidence human-review escalations and prompt failure rates by 35%.',
      'Architected the internal operator verification and agent-review console behind the public marketplace: progressive streaming states, match-score explainability, evidence audit and state rollback.',
      'Shipped production features end to end with AI-native workflows (Cursor, Claude Code, React/TypeScript, Supabase), compressing delivery from ~3-week spec-and-handoff cycles to under 1 week (-65% cycle time); referral turnaround cut from multi-week cold outreach to under 48 hours.'
    ]
  },
  {
    org: 'Shell',
    title: 'Principal Product Designer, Center of Excellence (Contract via Marlabs)',
    years: '2022 — 2023',
    context: 'Enterprise energy, trading & telemetry · UK & Global',
    highlights: [
      'Set UX strategy, information architecture and the design quality bar for high-density energy trading and telemetry platforms across 6+ distributed product and engineering squads.',
      'Led an enterprise multi-brand design system (Figma-to-code tokens, high-density data-grid components, WCAG AA), cutting front-end design-QA rework tickets and duplicate component builds by 50%.',
      'Translated real-time telemetry and predictive anomaly-detection models into operator decision-support workflows, cutting mean time to triage operational alerts by 30% in operator workflow benchmarks.'
    ]
  },
  {
    org: 'Noon',
    title: 'Principal Product Designer',
    years: '2020 — 2022',
    context: 'Four-sided e-commerce marketplace · UAE & 7 GCC markets',
    highlights: [
      'Partnered with Search ML and Checkout Engineering on AI-powered semantic search, bilingual Arabic/English (RTL) address autofill and streamlined checkout across 7 GCC countries, lifting search-to-checkout conversion by 12% in production A/B testing across millions of monthly active users.',
      'Led hiring loops, critique rituals and mentoring for 8+ senior and mid-level designers while governing cross-platform design standards (Web, iOS, Android).',
      'Reused shared marketplace primitives to cut UI delivery time for new verticals (Grocery, Quick-Commerce) by 40%.'
    ]
  },
  {
    org: 'Yellow.ai (formerly Yellow Messenger)',
    title: 'Head of AI Product Design',
    years: '2019 — 2020',
    context: 'Enterprise conversational AI · 500+ clients · 70+ countries',
    highlights: [
      'Player-coach: personally architected the core conversational AI builder and interaction model - multi-turn intent orchestration, NLU confidence thresholds, fallback recovery and human hand-off - lifting bot-building task completion by 40% in moderated usability benchmarks.',
      'Recruited to scale the design org from a 2-person core team to 15+ product designers, conversation designers and UX researchers through Series A-B hypergrowth, partnering directly with the CEO, VP Product and ML leadership.',
      'Built an enterprise AI design system of reusable conversation components and self-serve deployment templates, contributing to +8% net MRR expansion and 15% lower customer churn.'
    ]
  },
  {
    org: 'Simplyfi.tech',
    title: 'Lead UX Designer',
    years: '2018 — 2019',
    context: 'Fintech SaaS · Trade-finance compliance automation',
    highlights: [
      'Redesigned AI-assisted OCR compliance and trade-finance document-verification flows with exception handling and human-review states, cutting manual operator review time from 60 to 6 minutes per dossier (-90%) in production audits.',
      'Led contextual inquiry and usability testing with bank trade-finance operators to simplify multi-level credit approvals and regulatory audit trails.'
    ]
  },
  {
    org: 'K-Arogia / Heaps.ai',
    title: 'Senior UI/UX Designer',
    years: '2017 — 2018',
    context: 'Healthtech AI · Clinical decision support & care coordination',
    highlights: [
      'Overhauled 18 predictive clinical risk-scoring and care-coordination workflows, cutting nurse triage and charting time by 75% (~20 minutes to under 5 per patient encounter) and supporting 10x clinic adoption in 18 months.',
      'Conducted clinical workflow audits and funnel drop-off analysis to streamline provider onboarding and patient intake.'
    ]
  },
  {
    org: 'Deloitte',
    title: 'UX Designer',
    years: '2016 — 2017',
    context: 'Consulting · US healthcare & public-sector digital products',
    highlights: [
      'Designed enrollment and member experiences for US healthcare clients, including state Affordable Care Act (ACA) health-insurance marketplaces and a leading New York health system.',
      'Delivered interactive prototypes, UX specifications and accessible design system components in cross-functional consulting squads.'
    ]
  }
];

export const coreCapabilities: string[] = [
  'Agentic & multi-step AI UX',
  'AI evals, guardrails & human-in-the-loop',
  'Reasoning transparency',
  'Multi-brand design systems (Figma-to-code)',
  'High-density enterprise workflows',
  'Full-stack AI prototyping',
  'Design org building & hiring',
  'Executive product strategy',
  'Cross-squad UX direction',
  'AI-native delivery workflows'
];

export const aiStack: string[] = [
  'Figma', 'FigJam', 'Cursor', 'Claude Code', 'React / TypeScript', 'Tailwind CSS',
  'Replit', 'Multi-model LLM APIs', 'Prompt & eval pipelines', 'Supabase', 'PostHog', 'Mixpanel'
];

export const extras: { label: string; body: string }[] = [
  { label: 'EDUCATION', body: 'M.Tech, Computer Science - Andhra University.' },
  { label: 'PATENT', body: 'Patent pending (App. No. 202641131732, filed 2026) - ergonomic fluid-dispensing spectacle nosepad; human-factors hardware R&D for digital eye-strain relief.' },
  { label: 'APPLIED AI R&D', body: 'freecoffee.tech - privacy-first macOS menu-bar prototype exploring consent-based attention design. RailSwap - peer-to-peer railway seat-swapping and passenger coordination web app, designed and built end to end in code.' },
  { label: 'BASE & OVERLAP', body: 'India (IST) · Global remote, with US & EU overlap.' }
];
