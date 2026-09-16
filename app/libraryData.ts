export type LibraryEntry={slug:string;kind:'Template'|'Primitive'|'Process';title:string;oneLine:string;when:string;source:{label:string,url:string};reviewed:string;template:string};
export const libraryEntries:LibraryEntry[]=[
{slug:'capability-boundary-brief',kind:'Template',title:'Capability + boundary brief',oneLine:'Define what the system can do, where it becomes unreliable, and what it must never imply.',when:'Before scope or interface work. It stops a promising demo becoming a dishonest product promise.',source:{label:'Google PAIR · Mental Models',url:'https://pair.withgoogle.com/chapter/mental-models/'},reviewed:'30 Aug 2026',template:`# Capability + boundary brief\n\nUser job:\nModel-assisted task:\nWhat the system can do reliably:\nWhat varies by context:\nWhat it cannot know:\nWhat it must never imply:\nEvidence required before showing a result:\nSafe fallback when confidence is low:\nOwner of the final decision:`},
{slug:'model-behaviour-spec',kind:'Template',title:'Model behaviour spec',oneLine:'Turn product intent into explicit rules for behaviour, priorities, refusals and uncertainty.',when:'When teams disagree about how the AI should act. Review it whenever model or policy changes.',source:{label:'OpenAI · Model Spec',url:'https://model-spec.openai.com/2026-08-18.html'},reviewed:'30 Aug 2026',template:`# Model behaviour spec\n\nRole in the product:\nPrimary objective:\nPriority order when goals conflict:\nMust do:\nMust not do:\nHow to express uncertainty:\nWhen to ask a question:\nWhen to refuse:\nWhen to escalate to a person:\nExamples of good behaviour:\nCounterexamples:\nVersion / owner:`},
{slug:'grounding-brief',kind:'Template',title:'Grounding + source brief',oneLine:'Specify which sources are allowed, how fresh they must be, and how claims stay traceable.',when:'Before an answer, recommendation or action depends on external knowledge.',source:{label:'NIST · Generative AI Profile',url:'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence'},reviewed:'30 Aug 2026',template:`# Grounding + source brief\n\nDecision this evidence supports:\nAllowed sources:\nSource of truth:\nMinimum freshness:\nRequired fields / claims:\nHow conflicts are handled:\nWhat counts as missing evidence:\nCitation shown to the user:\nFallback when a source is unavailable:\nData owner / review date:`},
{slug:'prompt-contract',kind:'Template',title:'Prompt contract',oneLine:'Define the job, inputs, output shape and non-negotiable rules before polishing prompt wording.',when:'When a prompt is becoming hidden product logic that nobody owns.',source:{label:'Anthropic · Building effective agents',url:'https://www.anthropic.com/engineering/building-effective-agents'},reviewed:'30 Aug 2026',template:`# Prompt contract\n\nJob to be done:\nInputs available:\nInputs that may be missing:\nRequired output:\nOutput schema / length:\nRules that cannot be relaxed:\nTools the model may use:\nActions it may never take:\nQuestions it should ask first:\nFailure response:\nTest examples:`},
{slug:'evaluation-rubric',kind:'Template',title:'Evaluation rubric',oneLine:'Make "good" testable with criteria, examples, thresholds and a release decision.',when:'Before comparing prompts or models, and before every meaningful release.',source:{label:'OpenAI · Evaluation best practices',url:'https://developers.openai.com/api/docs/guides/evaluation-best-practices'},reviewed:'30 Aug 2026',template:`# Evaluation rubric\n\nTask / user segment:\nDataset or scenarios:\nCriterion 1 + pass threshold:\nCriterion 2 + pass threshold:\nCriterion 3 + pass threshold:\nCritical failure (automatic fail):\nReference answer or ideal behaviour:\nEdge cases:\nHuman review sample size:\nRelease threshold:\nRegression owner:`},
{slug:'failure-taxonomy',kind:'Template',title:'Failure taxonomy',oneLine:'Name failures by user harm and recovery path, not only by model error.',when:'As soon as prototypes reach real users. Update it from support, research and eval findings.',source:{label:'Google PAIR · Errors + graceful failure',url:'https://pair.withgoogle.com/chapter/errors-failures/'},reviewed:'30 Aug 2026',template:`# Failure taxonomy\n\nFailure name:\nWhat the user sees:\nLikely cause:\nFrequency:\nSeverity / user harm:\nCan the system detect it?\nRecovery shown in the interface:\nData saved or rolled back:\nWhen a person takes over:\nHow this becomes an eval case:\nOwner / status:`},
{slug:'human-approval-matrix',kind:'Template',title:'Human approval matrix',oneLine:'Place human checkpoints according to impact, reversibility and confidence.',when:'Before an agent sends, spends, deletes, publishes or changes real-world state.',source:{label:'AI SDK · Tool approvals',url:'https://ai-sdk.dev/docs/agents/tool-approvals'},reviewed:'30 Aug 2026',template:`# Human approval matrix\n\nAction:\nUser impact: low / medium / high\nReversible: yes / partly / no\nMoney or external representation: yes / no\nEvidence required:\nConfidence threshold:\nAuto-run allowed when:\nApproval required when:\nWhat the approval card must show:\nTimeout / cancellation behaviour:\nAudit record:`},
{slug:'handoff-escalation-rule',kind:'Template',title:'Handoff + escalation rule',oneLine:'Define when the AI stops, what context transfers, and who owns the next move.',when:'For every workflow that can hit ambiguity, risk or a tool failure.',source:{label:'OpenAI Agents SDK · Human in the loop',url:'https://openai.github.io/openai-agents-js/guides/human-in-the-loop/'},reviewed:'30 Aug 2026',template:`# Handoff + escalation rule\n\nTrigger condition:\nWhy automation stops here:\nPerson or team receiving it:\nContext already gathered:\nEvidence attached:\nDecision still needed:\nSafe state while waiting:\nWhat the user sees:\nResponse deadline:\nResume rule:\nAudit owner:`},
{slug:'feedback-control-plan',kind:'Template',title:'Feedback + control plan',oneLine:'Design correction, override, undo and learning as product flows rather than thumbs icons.',when:'When users need to shape, correct or recover from AI output.',source:{label:'Google PAIR · Feedback + Control',url:'https://pair.withgoogle.com/chapter/feedback-controls/'},reviewed:'30 Aug 2026',template:`# Feedback + control plan\n\nDecision or output users can correct:\nControl available before generation:\nControl available after generation:\nUndo / rollback:\nWhat feedback is captured:\nWhat feedback changes immediately:\nWhat requires review before learning:\nHow the user sees the effect:\nPrivacy constraint:\nOwner:`},
{slug:'agent-state-map',kind:'Process',title:'Agent state map',oneLine:'Map what the agent is doing, waiting for, blocked by and handing back to the user.',when:'Before designing progress, tool-use or long-running-task interfaces.',source:{label:'Microsoft · HAX Guidelines',url:'https://www.microsoft.com/en-us/haxtoolkit/ai-guidelines/'},reviewed:'30 Aug 2026',template:`# Agent state map\n\nState:\nWhat the system is doing:\nWhat evidence it has:\nWhat the user sees:\nCan the user interrupt?\nCan the user edit the plan?\nTool or dependency in use:\nTimeout behaviour:\nFailure state:\nRecovery action:\nNext state:`},
{slug:'release-change-record',kind:'Process',title:'Release + change record',oneLine:'Tie model, prompt, data and interface changes to eval evidence and observed impact.',when:'Every time behaviour changes, even when the UI does not.',source:{label:'NIST · AI RMF',url:'https://www.nist.gov/itl/ai-risk-management-framework'},reviewed:'30 Aug 2026',template:`# AI release + change record\n\nDate / version:\nWhat changed:\nModel / prompt / data / tool / UI:\nReason for change:\nEval set run:\nBefore / after result:\nNew failure mode introduced:\nHuman review completed by:\nRollback trigger:\nUser-facing note:\nNext review date:`}
,
{slug:'reasoning-disclosure',kind:'Primitive',title:'Reasoning disclosure',oneLine:'Show a useful plan, evidence and limits without exposing or inventing private chain-of-thought.',when:'When the user needs to judge why an answer deserves trust.',source:{label:'AI Elements · Reasoning',url:'https://elements.ai-sdk.dev/components/reasoning'},reviewed:'30 Aug 2026',template:`# Reasoning disclosure

Status / current step:
Plan the user can inspect:
Evidence used:
Checks completed:
Assumptions:
Known limits:
What remains uncertain:
Next action:
User control: pause / edit / continue`},
{slug:'tool-call-card',kind:'Primitive',title:'Tool call card',oneLine:'Make an agent action legible before, during and after it touches another system.',when:'Whenever the AI searches, reads, writes or acts through a tool.',source:{label:'assistant-ui · Tool UI',url:'https://github.com/assistant-ui/tool-ui'},reviewed:'30 Aug 2026',template:`# Tool call card

Tool / system:
Why it is being used:
Input summary:
Permission level: read / write
Status: queued / running / done / failed
Result summary:
Source or artifact link:
Side effect created:
Undo available:
Retry / fallback:`},
{slug:'approval-card',kind:'Primitive',title:'Approval card',oneLine:'Put the exact proposed action, consequence and undo cost in one decision surface.',when:'Before an irreversible, costly, sensitive or externally visible action.',source:{label:'assistant-ui · Approval Card',url:'https://www.assistant-ui.com/elements/approval-card'},reviewed:'30 Aug 2026',template:`# Approval card

Proposed action:
Recipient / destination:
Exact content or change:
Evidence supporting it:
Cost / consequence:
Can it be undone?
What happens on approve:
What happens on reject:
Edit option:
Approval expires:`},
{slug:'agent-progress-row',kind:'Primitive',title:'Agent progress row',oneLine:'Show what finished, what is running, what is waiting and what needs the user.',when:'For work that spans tools, steps or more than a few seconds.',source:{label:'21st.dev · Agent Elements',url:'https://github.com/21st-dev/agent-elements'},reviewed:'30 Aug 2026',template:`# Agent progress row

Step name:
State: queued / active / blocked / done
Started at:
Evidence or output:
Dependency:
What blocked means:
User action required:
Retry policy:
Completion condition:`},
{slug:'source-evidence-card',kind:'Primitive',title:'Source + evidence card',oneLine:'Keep each claim attached to its source, freshness and limits.',when:'For research, recommendations, summaries and any answer that can go stale.',source:{label:'Vercel · AI Elements',url:'https://github.com/vercel/ai-elements'},reviewed:'30 Aug 2026',template:`# Source + evidence card

Claim supported:
Source title:
Source URL / record:
Publisher / owner:
Observed date:
Freshness requirement:
Exact evidence used:
Conflict with other sources:
Confidence:
Limit / caveat:`},
{slug:'uncertainty-recovery',kind:'Primitive',title:'Uncertainty + recovery state',oneLine:'Turn low confidence into a clear next move instead of a vague disclaimer.',when:'When missing context, conflicting evidence or a weak model match changes the answer.',source:{label:'Google PAIR · Errors + Graceful Failure',url:'https://pair.withgoogle.com/chapter/errors-failures/'},reviewed:'30 Aug 2026',template:`# Uncertainty + recovery state

What is uncertain:
Why it matters:
What is known:
What is missing or conflicting:
Risk of continuing:
Best next question:
Alternative safe action:
Can the user override?
How recovery is confirmed:`}
];
