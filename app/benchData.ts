export type BenchRow={rank:number;model:string;score:string;open?:boolean};
export type BenchSnapshot={board:string;category:string;what:string;checked:string;url:string;rows:BenchRow[]};
export type BenchResult={model:string;benchmark:string;result:string;note:string;url:string;checked:string};
export type WatchedBoard={name:string;what:string;url:string};
export const snapshots:BenchSnapshot[]=[
{board:'Design Arena',category:'Generative UI · Text-to-HTML',what:'The generative UI ranking: closed and open models in one crowd-voted table, Elo for websites generated from a single prompt. Open-weight rows tagged per the board\'s own Open Weights filter. Read off the live board on the stamped date.',checked:'10 Sep 2026',url:'https://designarena.ai/leaderboard',rows:[
{rank:1,model:'Kimi K3',score:'1391',open:true},
{rank:2,model:'GPT-6 Astra (xhigh)',score:'1379'},
{rank:3,model:'Muse Spark 1.3 (xhigh)',score:'1366'},
{rank:4,model:'GPT-5.6 Sol (xhigh)',score:'1352'},
{rank:5,model:'Claude Fable 5.1',score:'1343'},
{rank:6,model:'Claude Opus 5',score:'1339'},
{rank:7,model:'GPT-5.6 Sol (Medium)',score:'1335'},
{rank:8,model:'GLM-5.3',score:'1332',open:true},
{rank:9,model:'Muse Spark 1.2',score:'1328'},
{rank:10,model:'Claude Fable 5',score:'1327'}]},
{board:'Design Arena',category:'Overall Open Weights · Text-to-HTML',what:'The same board filtered to open-weight models only - the open half of the field, on its own cut. Read off the live board on the stamped date.',checked:'10 Sep 2026',url:'https://designarena.ai/leaderboard',rows:[
{rank:1,model:'Kimi K3',score:'1391'},
{rank:2,model:'GLM-5.3',score:'1332'},
{rank:3,model:'GLM 5.2',score:'1314'},
{rank:4,model:'Qwen3.8 Max',score:'1310'},
{rank:5,model:'GLM-5.3-Flash',score:'1306'},
{rank:6,model:'Kimi K2.6',score:'1288'},
{rank:7,model:'MiMo-V2.5-Pro',score:'1287'},
{rank:8,model:'GLM 5.1',score:'1283'},
{rank:9,model:'MiMo-V2.5',score:'1276'},
{rank:10,model:'Kimi K2.7 Code',score:'1271'}]},];
export const results:BenchResult[]=[
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
