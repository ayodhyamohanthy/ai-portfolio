export type StudySection = {
  id: string; title: string; intro: string;
  points?: { title: string; body: string }[];
  images?: { file: string; caption: string }[];
};
export type DeepStudy = {
  slug: string; number: string; category: string; title: string; summary: string;
  image: string; signal: string; role: string; scope: string; collaboration: string;
  question: string; answer: string; source: string; sourceTitle: string;
  results: { value: string; label: string }[]; measurement: string;
  sections: StudySection[]; reflection: string;
};
export const deepStudies: DeepStudy[] = [
  {
    slug: 'application-automation', number: '01', category: 'ENTERPRISE SYSTEMS / PRODUCT INTEGRATION',
    title: 'Make complex automation feel like one product.',
    summary: 'Integrating an acquired no-code builder into an enterprise platform, from the first template to the failed run.',
    image: '04.jpg', signal: '40% faster setup, reported in the published case',
    role: 'Re-architected setup, template discovery and monitoring UX.',
    scope: 'Cloud hub, template picker, workflow builder and execution monitoring.',
    collaboration: 'Design, product and engineering across the UK, Canada, Sweden, Spain and Belgium; research partnership with the UX Research team.',
    question: 'How do you absorb a capable product without absorbing its fragmentation?',
    answer: 'Treat integration as a workflow problem, not a visual reskin. Help people find a starting point, build with guidance, and understand what happened when the automation runs.',
    source: 'https://www.behance.net/gallery/240200425/Re-designing-the-productwith-new-acquired-startup',
    sourceTitle: 'Re-designing the product with a newly acquired startup',
    results: [{ value: '40%', label: 'faster automation setup' }, { value: '35%', label: 'increase in successful automation runs' }],
    measurement: 'These are the outcomes reported in the original published case. Baselines, sample sizes, measurement windows and attribution controls are not included in the public material. They are not presented here as a new experiment or independent verification.',
    sections: [
      { id: 'context', title: 'One platform. Two mental models.', intro: 'The acquired builder felt separate from the surrounding cloud platform. Setup exposed too much at once, templates felt rigid, and execution offered too little feedback. Even experienced users struggled to troubleshoot.', points: [
        { title: 'The product constraint', body: 'Automation had to fit the platform\'s existing design system while retaining its technical capability. Consistency needed to help people navigate, not merely make screens look related.' },
        { title: 'The user constraint', body: 'Beginners needed a guided start. Experienced creators needed flexible templates and control. A single undifferentiated setup experience was failing both.' }
      ], images: [{ file: '02.png', caption: 'Published legacy-builder artifact. The case describes an experience disconnected from the surrounding cloud platform.' }] },
      { id: 'evidence', title: 'Find friction across the whole lifecycle.', intro: 'Research combined customer conversations with the UX Research team, behavioral analytics, community feedback, competitor review and collaborative use-case mapping. The resulting journey extended beyond creation into monitoring and recovery.', points: [
        { title: 'Discovery', body: 'Low template adoption was not simply a visibility problem: beginners felt lost, while expert users found templates restrictive.' },
        { title: 'Execution', body: 'Users could not clearly tell whether an automation succeeded, failed or stalled. Without an obvious route to errors and logs, troubleshooting became guesswork.' }
      ], images: [{ file: '05.jpg', caption: 'Template selection artifact from the published project. The redesign reorganized categories and made starting points easier to find.' }] },
      { id: 'decisions', title: 'Guide the start. Preserve the controls.', intro: 'The design work focused on four connected decisions rather than isolated interface fixes.', points: [
        { title: '01 / Integrate the entry point', body: 'Align the builder with the cloud design system so moving into automation feels like continuing the same task, not switching products.' },
        { title: '02 / Make templates a flexible starting point', body: 'Reorganize template categories and support adaptation. A guided route should help a novice begin without becoming a ceiling for an expert.' },
        { title: '03 / Reveal complexity as it becomes relevant', body: 'Structure setup around Trigger → Logic → Action, using guided steps and progressive disclosure rather than exposing every configuration at once.' },
        { title: '04 / Make recovery part of the product', body: 'Bring execution state, errors, logs and integration settings into a central monitoring experience. Creating a workflow is only half the job.' }
      ], images: [{ file: '11.png', caption: 'Integrated builder with contextual configuration. This is an original project artifact, not a newly built interactive prototype.' }, { file: '18.png', caption: 'Execution monitoring and run detail. The source describes status, errors, logs and settings as part of the same workflow.' }] },
      { id: 'delivery', title: 'Integration needed cross-team alignment.', intro: 'The published role spans re-architecting the experience, improving performance visibility and working with a distributed cross-functional team. Designs were grounded in user feedback and telemetry, then refined through iterative testing.', points: [
        { title: 'A shared interaction language', body: 'Aligning with the existing design system reduced the discontinuity between the acquired builder and the host platform.' },
        { title: 'A complete operational loop', body: 'Setup guidance, execution visibility and troubleshooting were designed together. The source also describes clear alerts, suggested fixes and interactive debugging.' }
      ], images: [{ file: '09.png', caption: 'Cloud-hub entry into automation. The integration connects entry, setup and execution rather than presenting the builder in isolation.' }] },
      { id: 'outcomes', title: 'The reported result, and its limits.', intro: 'The original case reports faster setup and more successful runs, alongside higher template engagement and stronger governance and monitoring. The qualitative changes are documented in the flow and screen artifacts; the numerical effects remain the original author-reported figures.' }
    ],
    reflection: 'The useful leadership move was to frame integration around a complete user journey. A consistent shell helps orientation; guidance, control and recovery make that consistency meaningful. The published retrospective also stresses prioritization under tight timelines.'
  },
  {
    slug: 'data-product-design', number: '02', category: 'PRODUCT STRATEGY / RESEARCH & EXPERIMENTATION',
    title: 'Turn behavioral evidence into product direction.',
    summary: 'Reframing a multi-product website around how prospects evaluate, how customers return, and what actually leads to retained use.',
    image: '12.png', signal: '129% conversion increase, reported in the published case',
    role: 'Research, experience framing, wireframes, visual design and iterative experimentation.',
    scope: 'A multi-product international website with 1M+ monthly visitors, according to the published case.',
    collaboration: 'Product, Marketing, Sales, Services, Support, executive stakeholders, developers and QA.',
    question: 'Which business problem should the next design decision solve?',
    answer: 'Start with behavior, compare it with what users say, and narrow the scope around a measurable opportunity. The design is the result of that framing, not its substitute.',
    source: 'https://www.behance.net/gallery/204843885/Deep-Data-based-Product-Designing', sourceTitle: 'Deep Data based Product Designing',
    results: [{ value: '129%', label: 'conversion increase' }, { value: '35%', label: 'increase in demo requests' }, { value: '27%', label: 'increase in retained customers' }],
    measurement: 'All figures reproduce the published case, which also reports 38% more sales chats and 113% more calls. It does not supply raw experiment data, confidence intervals, exact time windows or a complete attribution model. These figures should not be read as independently audited causal estimates.',
    sections: [
      { id: 'context', title: 'Growth had outpaced the story.', intro: 'The company had evolved from one product into an international, multi-product business. The website no longer represented the offer clearly enough. Updating its aesthetic alone would not address the gaps in comprehension and conversion.', points: [
        { title: 'Prospects were searching for missing information', body: 'Analytics showed people moving directly from the homepage to pricing, FAQs or search. The case interprets this as a sign that the homepage was not answering important evaluation questions.' },
        { title: 'Existing customers had a different job', body: 'The source says 10% of homepage traffic came from returning customers seeking their portals or resources. Optimizing only for new leads would overlook that audience.' }
      ], images: [{ file: '03.png', caption: 'Published heat-map and scroll-map artifact. The source reports weak engagement with critical elements and fewer than 25% of visitors scrolling.' }] },
      { id: 'evidence', title: 'Triangulate before deciding.', intro: 'The project combined Google Analytics and Mixpanel, heat and scroll maps, anonymous session recordings, focused usability sessions, customer conversations and stakeholder interviews. The source reports 467,308 data points from heat-map and scroll-map work.', points: [
        { title: 'Behavior explained where', body: 'Navigation, engagement and session recordings exposed where users diverted, stalled or failed to reach important information.' },
        { title: 'Conversations explained why', body: 'Customer and stakeholder interviews helped distinguish prospect evaluation from returning-customer access and exposed the needs of different business functions.' },
        { title: 'Contradiction became a design input', body: 'Users said they preferred video or reading to chat, while chat converted well. Rather than dismiss either signal, the project explored a better chat experience alongside video-led and story-led content.' }
      ], images: [{ file: '02.png', caption: 'Analytics and research artifacts from the original case. These are published screenshots, not a live analytics connection.' }] },
      { id: 'decisions', title: 'Make the structure earn its place.', intro: 'Multiple wireframe directions were tested with users and stakeholders, narrowed to three major variations, and brought into one design framework.', points: [
        { title: 'A modular grid, not a single fixed story', body: 'A grid-based structure let teams move or update content as the product portfolio evolved. Editorial sections were designed so marketing could maintain them.' },
        { title: 'Different content for different jobs', body: 'Customer-specific dynamic content addressed returning visitors, while prospect content reflected evaluation stages and messaging research.' },
        { title: 'Simplify the path to action', body: 'Journey audits informed a standardized three-step Get Started flow. The source also describes recognizing returning accounts rather than forcing people through a new-user conversion path.' },
        { title: 'Design for translation and access', body: 'Layouts needed room for longer translations across six languages. Color-vision simulation, screen-reader checks and cross-device QA were part of the documented process.' }
      ], images: [{ file: '10.png', caption: 'Wireframe and information-structure artifact. The final direction grew from alternative layouts, not a single visual proposal.' }, { file: '15.png', caption: 'Published interface composition showing the modular visual direction. Original images are preserved rather than recreated as new work.' }] },
      { id: 'delivery', title: 'Treat launch as the start of learning.', intro: 'The case describes instrumentation for CTA views, clicks and submissions, ongoing user testing and session recordings, and repeated heat-map studies. Work was prioritized against goals rather than personal preferences.', points: [
        { title: 'Connect design to the operating rhythm', body: 'Opportunities came from the core team, stakeholders and performance analysis. A kickoff established direction, timeline and collaborators; epics, a Kanban board and research notes kept the work organized.' },
        { title: 'Look beyond an isolated click', body: 'The published account describes tracking retention and revenue across more than 90 conversion journeys, using analytics and custom reporting to assess what happened after signup.' },
        { title: 'Keep QA tied to the audience', body: 'Developers and QA tested across devices and browsers. The case describes prioritizing fixes by audience share and the severity of the issue.' }
      ], images: [{ file: '19.png', caption: 'Published reporting artifact. It supports the documented measurement process; the underlying dataset is not available on this portfolio.' }] },
      { id: 'outcomes', title: 'Results do not remove uncertainty.', intro: 'The source reports gains across conversion, demos, chats, calls and retained customers. The process evidence shows how the project moved between research, framing, experimentation and iteration. The public material does not allow independent reproduction of the numerical results.' }
    ],
    reflection: 'The original retrospective names scope growth as a weakness: late-stage ideas put pressure on delivery without always serving the initial KPIs. The lesson is to make the goal explicit, revisit it with stakeholders, and evaluate every additional request against it.'
  },
  {
    slug: 'ad-platform', number: '03', category: 'B2B WORKFLOWS / PRIORITIZATION & DELIVERY',
    title: 'Make an audience wizard easier to finish.',
    summary: 'Using research severity, a focused scope and engineering collaboration to improve a complex advertising setup workflow.',
    image: '11.png', signal: '7 users informed the focused Audience Wizard redesign',
    role: 'User research, synthesis, prioritization, interaction design, usability testing and implementation review.',
    scope: 'A B2B advertising platform beta, narrowed to the Audience Wizard.',
    collaboration: 'Account managers, a design teammate, Product, Engineering and the front-end team.',
    question: 'Where should a platform rebuild begin?',
    answer: 'Choose a consequential workflow using task severity and delivery effort. Then solve the specific interaction failures before broadening the scope.',
    source: 'https://www.behance.net/gallery/218071655/Redesigning-a-new-Ad-Platform', sourceTitle: 'Redesigning a new Ad Platform',
    results: [{ value: '7', label: 'users in the focused research' }, { value: '3', label: 'specific usability problems addressed' }, { value: '↓', label: 'service-desk complaints, qualitatively reported' }],
    measurement: 'The source reports fewer service-desk complaints and positive feedback after release, but no numerical reduction or task-time measurement. Research percentages are descriptive of a seven-user study, not population estimates. No conversion lift is claimed for this project.',
    sections: [
      { id: 'context', title: 'A platform ambition needed a focused first release.', intro: 'An Australia-based internet marketing company wanted to improve its B2B ads-management application. The immediate task was to identify usability issues in the beta and choose what should enter the next iteration.', points: [
        { title: 'Start with the people doing the work', body: 'Research interviews with account managers examined goals, existing journeys and task success. Recordings were synthesized through affinity mapping with a design teammate.' },
        { title: 'Turn findings into a delivery conversation', body: 'Problems were grouped into epics so Product and Engineering could see where the most important usability work sat within the wider roadmap.' }
      ], images: [{ file: '03.jpg', caption: 'Original affinity-mapping artifact. Research findings were grouped into themes before solutions were selected.' }] },
      { id: 'evidence', title: 'Give prioritization a shared basis.', intro: 'The project used task criticality × impact × frequency as a severity framework. Product, Design and Engineering selected the Audience Wizard by considering severity alongside UX and engineering effort.', points: [
        { title: 'The workflow felt laborious', body: '57% of the seven research participants described configuration as arduous. This is a small-sample finding, not a general market statistic.' },
        { title: 'The interface hid the reason for failure', body: '29% were frustrated by a disabled Next button because they could not identify missing required fields; 29% missed inputs because the visual hierarchy was weak.' }
      ], images: [{ file: '05.png', caption: 'Published epic-prioritization table, with severity, UX effort and issue counts. The project selected a focused workflow rather than rebuilding everything at once.' }] },
      { id: 'decisions', title: 'Remove ambiguity, not necessary control.', intro: 'The redesign addressed the research findings through form structure, validation behavior and progressive disclosure.', points: [
        { title: 'Reduce steps and group related fields', body: 'A clearer form hierarchy reduced the sense of a long, fragmented configuration task. Initial wireframes were reviewed with Product, Engineering and users.' },
        { title: 'Explain what is missing', body: 'Instead of leaving Next disabled without explanation, enable progression attempts to reveal validation and surface required fields.' },
        { title: 'Keep advanced settings available, but out of the main path', body: 'Advanced settings moved under a collapsible control. Necessary expert configuration remained accessible without competing with the core setup.' },
        { title: 'Make the solution reusable', body: 'Because a formal wizard component did not exist, the work also established a consistent interaction and visual pattern for future wizards.' }
      ], images: [{ file: '08.png', caption: 'Original wireframe artifact showing grouped audience configuration fields.' }, { file: '11.png', caption: 'Published high-fidelity audience-creation screen. The case connects grouping, required fields and advanced settings to specific research problems.' }] },
      { id: 'delivery', title: 'Test the task, then inspect the implementation.', intro: 'The usability script asked participants to create an audience targeting females of all ages, on mobile devices, with manual bidding enabled. Observation focused on how people completed configuration, not whether they liked the mockup.', points: [
        { title: 'What testing indicated', body: 'The published account reports that grouping related fields made setup less arduous and that hiding advanced settings made required inputs easier to identify.' },
        { title: 'What shipping required', body: 'The designer worked with the front-end team on interactions missing from high-fidelity mockups and reviewed implemented tickets against the design before release.' }
      ], images: [{ file: '12.png', caption: 'Another published configuration state. The project included implementation-level interaction review, not only static-screen delivery.' }] },
      { id: 'outcomes', title: 'A qualitative improvement, not an invented uplift.', intro: 'After the rebuild, the original case reports a significant decrease in service-desk complaints and positive user feedback about simpler configuration and time saved. A percentage improvement or measured completion-time delta is not published, so none is added here.' }
    ],
    reflection: 'The published takeaways emphasize an MVP plan, continued testing after development, and early engineering involvement. The project demonstrates a useful senior-design pattern: use evidence to narrow the scope, define the reusable interaction, and stay accountable through implementation.'
  }
];
