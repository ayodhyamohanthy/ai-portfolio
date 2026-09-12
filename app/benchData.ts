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
