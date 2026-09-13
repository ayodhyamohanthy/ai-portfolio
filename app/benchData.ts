export type BenchRow={rank:number;model:string;score:string;open?:boolean};
export type BenchSnapshot={board:string;category:string;what:string;checked:string;url:string;rows:BenchRow[]};
export type BenchResult={model:string;benchmark:string;result:string;note:string;url:string;checked:string};
export type WatchedBoard={name:string;what:string;url:string};
export const snapshots:BenchSnapshot[]=[
{board:'Design Arena',category:'Generative UI · Text-to-HTML',what:'The generative UI ranking: closed and open models in one crowd-voted table, Elo for websites generated from a single prompt. Open-weight rows tagged per the board\'s own Open Weights filter. Read off the live board on the stamped date.',checked:'12 Sep 2026',url:'https://designarena.ai/leaderboard',rows:[
{rank:1,model:'Kimi K3',score:'1388',open:true},
{rank:2,model:'Muse Spark 1.3 Max',score:'1370'},
{rank:3,model:'GPT-6 Astra (xhigh)',score:'1369'},
{rank:4,model:'Muse Spark 1.3 (xhigh)',score:'1365'},
{rank:5,model:'GPT-5.6 Sol (xhigh)',score:'1352'},
{rank:6,model:'Claude Fable 5.1',score:'1345'},
{rank:7,model:'DeepSeek-V4.1-Flash',score:'1345',open:true},
{rank:8,model:'Claude Opus 5',score:'1338'},
{rank:9,model:'GPT-5.6 Sol (Medium)',score:'1334'},
{rank:10,model:'GLM-5.3',score:'1331',open:true}]},
{board:'Design Arena',category:'Overall Open Weights · Text-to-HTML',what:'The same board filtered to open-weight models only - the open half of the field, on its own cut. Read off the live board on the stamped date.',checked:'12 Sep 2026',url:'https://designarena.ai/leaderboard',rows:[
{rank:1,model:'Kimi K3',score:'1388'},
{rank:2,model:'DeepSeek-V4.1-Flash',score:'1345'},
{rank:3,model:'GLM-5.3',score:'1331'},
{rank:4,model:'GLM 5.2',score:'1311'},
{rank:5,model:'Qwen3.8 Max',score:'1308'},
{rank:6,model:'GLM-5.3-Flash',score:'1302'},
{rank:7,model:'Kimi K2.6',score:'1287'},
{rank:8,model:'MiMo-V2.5-Pro',score:'1287'},
{rank:9,model:'GLM 5.1',score:'1282'},
{rank:10,model:'MiMo-V2.5',score:'1275'}]},
{board:'OpenDesign Arena',category:'Quality × cost × speed · composite',what:'Thirteen models building real design artifacts, ranked on a composite of quality (50%), cost (30%) and speed (20%). DeepSeek V4.1 Flash leads: 81.2/100 average at $0.023 per artifact in 5.3 minutes. GPT-6 Astra tops raw quality at 82.7 but costs $1.61 per artifact. Read off the live board on the stamped date.',checked:'12 Sep 2026',url:'https://open-design.ai/llm-arena-for-design/',rows:[
{rank:1,model:'DeepSeek V4.1 Flash',score:'78.8'},
{rank:2,model:'DeepSeek V4 Flash',score:'68.6'},
{rank:3,model:'GPT-5.6 Sol',score:'65.7'},
{rank:4,model:'Gemini 3.8 Flash',score:'64.7'},
{rank:5,model:'DeepSeek V4 Pro',score:'64.6'},
{rank:6,model:'Muse Spark 1.3',score:'63.2'},
{rank:7,model:'GLM-5.3 Flash',score:'61.4'},
{rank:8,model:'GPT-6 Astra',score:'57.5'},
{rank:9,model:'Grok 4.6',score:'56.5'},
{rank:10,model:'Hunyuan H4 Preview',score:'54.6'},
{rank:11,model:'Qwen 3.8-Max',score:'52.3'},
{rank:12,model:'Claude Fable 5.1',score:'52.1'},
{rank:13,model:'Kimi K3',score:'52.1'}]},
];
export const results:BenchResult[]=[
{model:'DeepSeek V4.1 Flash · DeepSeek',benchmark:'OpenDesign Arena',result:'81.2/100 · $0.023 per artifact',note:'Composite #1 of 13 models (quality 50% · cost 30% · speed 20%): 98% of GPT-6 Astra\u2019s 82.7 average score at roughly 1/70th of its $1.61 cost, in 5.3 min per artifact. Open-weights MoE - 552B backbone, 8B prefill / 16B decode active - under MIT licence.',url:'https://open-design.ai/llm-arena-for-design/',checked:'12 Sep 2026'},
{model:'OUI-1 · Thesys',benchmark:'Generative UI Benchmark',result:'71.7%',note:'Open-weight DiffusionGemma finetune writing interfaces in OpenUI Lang - 5.5x its base model, streaming 256-token blocks via diffusion decoding. Weights on Hugging Face under the Gemma Terms of Use.',url:'https://www.openui.com/blog/oui-1',checked:'10 Sep 2026'}];
export type GuiBenchRow={model:string;params:string;score:string};
export const guiBench:{title:string;what:string;checked:string;url:string;rows:GuiBenchRow[]}={
title:'Generative UI Benchmark',what:'Reported by Thesys with the OUI-1 release: open-weight models up to 31B active parameters writing OpenUI Lang, scored on structural validity against briefs. Vendor-reported numbers, kept with the claim and the link.',checked:'10 Sep 2026',url:'https://www.openui.com/blog/oui-1',rows:[
{model:'Qwen3.8 27B',params:'27B',score:'78.8%'},
{model:'OUI-1 (DiffusionGemma, finetuned)',params:'4B active',score:'71.7%'},
{model:'Qwen3.6 27B',params:'27B',score:'68.5%'},
{model:'Qwen3.6 35B-A3B',params:'3B active',score:'61.4%'},
{model:'Gemma 4 31B',params:'31B',score:'46.7%'},
{model:'Phi-4 14B',params:'14B',score:'44%'},
{model:'Gemma 4 26B-A4B',params:'4B active',score:'29.9%'},
{model:'Ministral 8B',params:'8B',score:'27.2%'},
{model:'Granite 4.1 8B',params:'8B',score:'14.7%'},
{model:'DiffusionGemma (base)',params:'4B active',score:'13%'},
{model:'LFM 2.5 2.6B',params:'2.6B',score:'3.3%'}]};
export const boards:WatchedBoard[]=[
{name:'Design Arena',what:'The largest crowdsourced benchmark for AI-generated design - websites, UI components, games, data viz, 3D, slides.',url:'https://designarena.ai/leaderboard'},
{name:'LMArena',what:'Crowd-voted arenas across text, code, image, video and agents, with a live snapshot of each arena.',url:'https://lmarena.ai/leaderboard'}];

export type DenseSnapshot={board:string;category:string;what:string;checked:string;url:string;cols:string[];notes:string[];rows:string[][]};
export const denseBoards:DenseSnapshot[]=[
{board:'Design Arena',category:'All categories · crowd-voted',what:'Every design category in one crowd-voted table - 1,550,140 votes counted by the board. Elo with standard error, win rate and battles, read off the live board data on the stamped date.',checked:'13 Sep 2026',url:'https://designarena.ai/leaderboard',cols:['#','MODEL','ELO','±','WIN RATE','BATTLES'],notes:['Elo · higher is better','± · standard error','Win rate · share of battles won','Battles · head-to-head votes'],rows:[
['01','Kimi K3','1388','4.7','64.7%','6,197'],
['02','Muse Spark 1.3 Max','1375','4.4','60.4%','6,996'],
['03','GPT-6 Astra','1369','5.0','62.1%','5,299'],
['04','Muse Spark 1.3','1365','3.7','59.3%','10,475'],
['05','GPT-5.6 Sol (xhigh)','1352','4.3','58.2%','7,117'],
['06','DeepSeek V4.1 Flash','1346','4.4','56.6%','6,815'],
['07','Claude Fable 5.1','1345','4.5','59.1%','6,429'],
['08','Claude Opus 5','1338','3.3','58.3%','12,844'],
['09','GPT-5.6 Sol','1334','2.6','57.5%','21,070'],
['10','Cortado','1331','3.3','58.1%','12,505'],
['11','Muse Spark 1.2','1327','2.9','55.1%','16,263'],
['12','Claude Fable 5','1325','2.9','58.1%','16,702'],
['13','Gemini 3.8 Flash','1324','3.3','54.1%','12,910'],
['14','Gemini 3.7 Flash','1321','2.0','56.7%','43,110'],
['15','GLM 5.2','1310','2.1','53.9%','33,132']]},
{board:'OpenDesign Arena',category:'Quality × cost × speed · composite',what:'Thirteen models building real design artifacts, composited at quality 50%, cost 30%, speed 20%. Composite, average score, cost per artifact and average time, read off the live board on the stamped date.',checked:'13 Sep 2026',url:'https://open-design.ai/llm-arena-for-design/',cols:['#','MODEL','COMPOSITE','AVG SCORE','COST / ARTIFACT','AVG TIME'],notes:['Composite · quality 50 / cost 30 / speed 20','Avg score · out of 100','Cost · per artifact, USD','Avg time · per artifact'],rows:[
['01','DeepSeek V4.1 Flash','78.8','81.2/100','$0.023','5.3 min'],
['02','DeepSeek V4 Flash','68.6','70.6/100','$0.031','11.1 min'],
['03','GPT-5.6 Sol','65.7','77.6/100','$0.544','3.2 min'],
['04','Gemini 3.8 Flash','64.7','68.9/100','$0.210','3.8 min'],
['05','DeepSeek V4 Pro','64.6','72.9/100','$0.061','17.7 min'],
['06','Muse Spark 1.3','63.2','66.6/100','$0.267','3.3 min'],
['07','GLM-5.3 Flash','61.4','69.8/100','$0.064','23.5 min'],
['08','GPT-6 Astra','57.5','82.7/100','$1.61','11.1 min'],
['09','Grok 4.6','56.5','72.4/100','$0.599','11.4 min'],
['10','Hunyuan H4 Preview','54.6','74.6/100','$0.418','29.2 min'],
['11','Qwen 3.8-Max','52.3','72.0/100','$0.595','26.4 min'],
['12','Claude Fable 5.1','52.1','80.3/100','$3.66','12.8 min'],
['13','Kimi K3','52.1','65.7/100','$0.614','14.0 min']]}];
export const highlights:{label:string;model:string;fact:string;url:string}[]=[
{label:'CROWD FAVORITE',model:'Kimi K3',fact:'1388 Elo on Design Arena\u2019s all-categories board - 64.7% win rate over 6,197 battles.',url:'https://designarena.ai/leaderboard'},
{label:'BEST VALUE',model:'DeepSeek V4.1 Flash',fact:'81.2/100 average at $0.023 per artifact - 98% of GPT-6 Astra\u2019s score at 1% of its cost.',url:'https://open-design.ai/llm-arena-for-design/'},
{label:'HIGHEST RAW QUALITY',model:'GPT-6 Astra',fact:'82.7/100 average - 56.2/70 design quality, 26.5/30 requirement fulfillment.',url:'https://open-design.ai/llm-arena-for-design/'},
{label:'FASTEST DELIVERY',model:'GPT-5.6 Sol',fact:'3.2 minutes per artifact on average while scoring 77.6/100.',url:'https://open-design.ai/llm-arena-for-design/'}];
