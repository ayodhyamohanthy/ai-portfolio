export type Pillar={slug:string;number:string;title:string;question:string;status:'Published'|'In progress';topics:{title:string;question:string}[]};
export const pillars:Pillar[]=[
{slug:'harnesses-workflows',number:'01',title:'Harnesses & Workflows',question:'How does the agent keep working without losing truth, state, or ownership?',status:'Published',topics:[{title:'The loop is the product',question:'What happens between intent and completion?'},{title:'Context is a decision system',question:'What must the agent know now?'},{title:'Tools are contracts',question:'Can the agent call and recover without guessing?'},{title:'Handoffs preserve ownership',question:'What survives when work moves?'},{title:'Memory is not a transcript',question:'What should persist, expire, or be rechecked?'}]},
{slug:'dynamic-interaction',number:'02',title:'Dynamic Interaction',question:'How should the interface adapt while keeping people oriented?',status:'In progress',topics:[]},
{slug:'governance-control',number:'03',title:'Governance & Control',question:'Where must the system ask, explain, stop, or recover?',status:'In progress',topics:[]},
{slug:'system-evaluation',number:'04',title:'System Evaluation',question:'How do we know the whole product works?',status:'In progress',topics:[]},
];
export const sources=[
{publisher:'Anthropic',title:'Effective context engineering for AI agents',url:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents'},
{publisher:'Anthropic',title:'Writing effective tools for agents',url:'https://www.anthropic.com/engineering/writing-tools-for-agents'},
{publisher:'OpenAI',title:'Harness engineering',url:'https://openai.com/index/harness-engineering/'},
{publisher:'OpenAI',title:'MCP and Connectors',url:'https://developers.openai.com/api/docs/guides/agents-api/tools/mcp'},
{publisher:'OpenAI',title:'Agents SDK handoffs',url:'https://openai.github.io/openai-agents-python/handoffs/'},
];
