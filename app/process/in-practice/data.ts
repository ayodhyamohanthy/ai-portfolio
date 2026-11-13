export type AppliedStep={n:string;name:string;status:'FROM THE BUILD'|'RECONSTRUCTED FROM THE BUILD'|'PLANNED';artifactLabel:string;artifact:string;produced:string;evidence:{text:string;href?:string}[]};
export const appliedSteps:AppliedStep[]=[
{n:'01',name:'Brief',status:'RECONSTRUCTED FROM THE BUILD',artifactLabel:'THE BRIEF · FILLED FOR SKIPWAIT',artifact:
`For people job hunting through referrals - seekers who know someone inside a target company.
They are trying to turn a warm contact into a real interview without chasing people across chat threads.
Today it fails when a referral lives in memory and DMs: offers to refer get lost, nobody can see the state of a request, and an AI assistant acting for either side could overstep without anyone noticing.
Done looks like a request that moves from asked to referred with every step visible - and assistants that act only inside consent, limits and a review trail.
Not in scope: a public job board. Skipwait is a private referral marketplace - no scraping, no open listings.`,
produced:'This brief is why Skipwait is a private referral marketplace with an agentic layer - not another job board. Every screen and every assistant behavior answers to the five lines above.',
evidence:[{text:'Live product ↗',href:'https://skipwait.me'},{text:'Full case study',href:'/work/skipwait'}]},
{n:'02',name:'Eval',status:'RECONSTRUCTED FROM THE BUILD',artifactLabel:'THE EVAL · RECONSTRUCTED FROM THE SHIPPED BUILD',artifact:
`A screen, flow or assistant behavior ships only if it passes all five:
1. CONSENT VISIBLE - a person can see what an assistant may do before it acts. 0/1
2. APPROVAL DEFAULT - a consequential action waits for a human yes. 0/1
3. REVIEWABLE - every assistant action lands in an activity log a person can open. 0/1
4. STATE HONEST - empty, pending, blocked and error states are designed, not improvised. 0/1
5. OPERATOR OVERRIDE - an operator can verify, moderate and revoke. 0/1`,
produced:'Consent screens with every state, propose-action approval cards, a visible assistant activity log, and an operator console for trust, verification and moderation. Each one is an eval criterion made visible.',
evidence:[{text:'Consent, activity and console artifacts in the case study',href:'/work/skipwait'},{text:'Public repo ↗',href:'https://github.com/ayodhyamohanthy/skipwaitmanus'}]},
{n:'03',name:'Research',status:'RECONSTRUCTED FROM THE BUILD',artifactLabel:'THE EVIDENCE FILE · THE STANDING INPUTS',artifact:
`Proof collected before inventing:
- The differentiator is agent trust: assistants acting for people under consent, limits and review (the product premise, straight from the brief).
- Model choice is an evidence question, not taste. The crowd-voted design board is mirrored at /benchmarks - rechecked every loop before a model is picked.
- Interaction patterns: 78 live AI-native patterns at /resources, each runnable in the browser.
- Reading order for AI-native design: /sources.`,
produced:'Pattern and model choices on Skipwait trace back to these shelves. When the board moves, the loop rechecks the choice - the eval decides, the board informs.',
evidence:[{text:'Model benchmarks',href:'/benchmarks'},{text:'Live patterns',href:'/resources'},{text:'Sources',href:'/sources'}]},
{n:'04',name:'Structure',status:'RECONSTRUCTED FROM THE BUILD',artifactLabel:'THE OBJECT MAP · READ BACK FROM THE BUILD',artifact:
`Objects: SEEKER · REFERRER · REQUEST · REFERRAL · ASSISTANT · CONSENT · ACTION · APPROVAL · LIMIT · OPERATOR
States designed before any screen:
- Consent: granted / pending / revoked
- Assistant action: proposed / approved / blocked / executed / failed
- Request: open / matched / referred / closed`,
produced:'The consent states and action states are exactly what the consent screens and the activity log render. Naming them first is what made "every state designed" possible.',
evidence:[{text:'Assistant consent and activity artifacts',href:'/work/skipwait'}]},
{n:'05',name:'Directions',status:'PLANNED',artifactLabel:'FIVE DIRECTIONS · THE NEXT LOOP, FILLED AND READY',artifact:
`Decision on the table: how a seeker sees referral matches.
D1 - Timeline: matches as a feed, newest first.
D2 - Pipeline: stages as columns, requests move left to right.
D3 - Assistant-led: the assistant proposes the next best match each visit.
D4 - Map: companies as nodes, warm paths drawn.
D5 - Inbox: requests as threads, state as labels.
Held against the eval: D3 fails CONSENT VISIBLE unless every proposal carries its reason. D5 passes all five with the least new UI.`,
produced:'This is the directions template filled for a loop that has not run yet - shown so you can copy the shape, not presented as shipped work.',
evidence:[{text:'Held against the eval from step 02 above'}]},
{n:'06',name:'Visual design',status:'RECONSTRUCTED FROM THE BUILD',artifactLabel:'THE ONE DIRECTION · OPERATOR TRUST CONSOLE',artifact:
`Picked: a console that reads like an instrument panel - trust, verification and moderation as first-class surfaces. Calm type, state chips over decoration.
System tokens and components: the open design system at /system.
Components the console needed: approval card, activity row, consent summary, state chip - from the 12 AI-native components at /components.`,
produced:'The operator trust console design preview in the public repo - labeled NO LIVE DATA, because the evidence rule applies to my own product too.',
evidence:[{text:'Console artifact',href:'/work/skipwait'},{text:'Design system',href:'/system'},{text:'Components',href:'/components'}]},
{n:'07',name:'Prototype',status:'FROM THE BUILD',artifactLabel:'THE RUNNING THING',artifact:
`Prototype = the real product, not a mock: skipwait.me, built in the open at github.com/ayodhyamohanthy/skipwaitmanus.
Agent-layer rules in the build: read-only tools, propose-action approval cards, tool output treated as data, deterministic fallbacks when no model is configured.
The model stays swappable: the eval picks it, the board at /benchmarks is the evidence.`,
produced:'A live product and a public repo anyone can read - the strongest prototype is one people can actually use and audit.',
evidence:[{text:'Live product ↗',href:'https://skipwait.me'},{text:'Public repo ↗',href:'https://github.com/ayodhyamohanthy/skipwaitmanus'}]},
{n:'08',name:'Test',status:'PLANNED',artifactLabel:'THE STRANGER SCRIPT · READY TO RUN',artifact:
`One stranger, 20 minutes, three tasks:
1. Ask for a referral. Watch: can they find the request flow unaided?
2. Review what the assistant did yesterday. Watch: do they find the activity log, and can they tell proposed from approved?
3. Revoke the assistant's access. Watch: do they trust it is really off?
Pass = all three unaided. Any hesitation on task 2 or 3 fails the trust core, not the task.`,
produced:'No moderated test results yet - this is the honest gap. The script is filled and ready; results land here after the first session.',
evidence:[{text:'Gap labeled: no test data published yet'}]},
{n:'09',name:'Ship',status:'FROM THE BUILD',artifactLabel:'THE URL',artifact:
`Live: https://skipwait.me
Build in the open: github.com/ayodhyamohanthy/skipwaitmanus
Evidence rule: screens in the repo are design previews, labeled NO LIVE DATA / EXAMPLE ACTIVITY. No outcome metrics are claimed anywhere.`,
produced:'A URL a stranger can open beats a folder of exports. The case study carries the artifacts with their honest labels.',
evidence:[{text:'Live product ↗',href:'https://skipwait.me'},{text:'Case study',href:'/work/skipwait'}]},
{n:'10',name:'Iterate',status:'PLANNED',artifactLabel:'THE NEXT LOOP',artifact:
`Inputs for the next loop:
- Run the stranger script (step 08) and log failures against the eval (step 02).
- Recheck the board at /benchmarks before touching the model config.
- Ship the winning direction from step 05 behind the same consent rules.
One deliberate change per loop. Everything else waits.`,
produced:'The loop is the discipline: evidence in, one change out.',
evidence:[{text:'Model benchmarks',href:'/benchmarks'}]}];
