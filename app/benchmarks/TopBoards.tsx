'use client';
import {useMemo,useState} from 'react';
import {topBoardTabs,topBoardsChecked} from '../topBoards';

type Metric='winRate'|'elo';
type Filter='all'|'open'|'router';
const BAR_COLORS=['#3b5bd6','#7666f4','#5f8c1f','#e07856','#c9a02e'];

function mono(name:string){
 const parts=name.split(/[^A-Za-z0-9]+/).filter(Boolean);
 const a=(parts[0]||'?')[0], b=parts.length>1?parts[1][0]:(parts[0]?.[1]||'');
 return (a+b).toUpperCase();
}
function fmt(v:number,metric:Metric){
 if(metric==='elo') return String(Math.round(v));
 const r=Math.round(v*10)/10;
 return (Number.isInteger(r)?String(r):r.toFixed(1))+'%';
}

export default function TopBoards(){
 const [tabId,setTabId]=useState('code');
 const [boardId,setBoardId]=useState('overall');
 const [metric,setMetric]=useState<Metric>('winRate');
 const [filter,setFilter]=useState<Filter>('all');
 const tab=topBoardTabs.find(t=>t.id===tabId)||topBoardTabs[0];
 const allBoards=tab.groups.flatMap(g=>g.boards);
 const board=allBoards.find(b=>b.id===boardId)||allBoards[0];
 const mi=metric==='elo'?1:2;
 const rows=useMemo(()=>{
   const f=board.rows.filter(r=>filter==='all'||(filter==='open'?r[4]===1:r[5]===1));
   return [...f].sort((a,b)=>b[mi]-a[mi]).slice(0,16);
 },[board,filter,mi]);
 const max=rows.length?rows[0][mi]:1;
 return <div className="tbf">
  <div className="tbf-tabs" role="tablist">{topBoardTabs.map(t=><button key={t.id} role="tab" aria-selected={t.id===tab.id} className={t.id===tab.id?'on':''} onClick={()=>{setTabId(t.id);setBoardId(t.groups[0].boards[0].id);setFilter('all');}}>{t.label}</button>)}</div>
  <div className="tbf-body">
   <aside className="tbf-side">{tab.groups.map(g=><div key={g.title} className="tbf-group"><h4>{g.title}</h4><div role="radiogroup" aria-label={g.title}>{g.boards.map(b=><button key={b.id} role="radio" aria-checked={b.id===board.id} className={b.id===board.id?'on':''} onClick={()=>{setBoardId(b.id);setFilter('all');}}>{b.label}</button>)}</div></div>)}</aside>
   <div className="tbf-main">
    <div className="tbf-head"><h3>{board.label}{tab.id==='code'&&board.id==='overall'?' · all cuts':''}</h3><a className="tbf-expand" href={board.url} target="_blank" rel="noopener noreferrer">Expand ↗</a></div>
    <div className="tbf-sub"><p>DesignArena <span>· live board data · mirrored {topBoardsChecked.toLowerCase()}</span></p>
     <div className="tbf-controls">
      <select value={filter} onChange={e=>setFilter(e.target.value as Filter)} aria-label="Model filter">
       <option value="all">All Models</option>
       <option value="open">Open Weights</option>
       <option value="router">Routers</option>
      </select>
      <div className="tbf-toggle" role="group" aria-label="Metric">
       <button className={metric==='elo'?'on':''} onClick={()=>setMetric('elo')}>Elo Rating</button>
       <button className={metric==='winRate'?'on':''} onClick={()=>setMetric('winRate')}>Win Rate</button>
      </div>
     </div>
    </div>
    {board.rows.length===0
     ? <div className="tbf-empty"><p>{board.note||'No public data feed for this cut.'}</p><a href={board.url} target="_blank" rel="noopener noreferrer">Open the live board ↗</a></div>
     : rows.length===0
      ? <div className="tbf-empty"><p>No {filter==='open'?'open-weight':'router'} models on this board.</p></div>
      : <div className="tbf-scroll"><div className="tbf-chart" style={{gridTemplateColumns:`repeat(${rows.length},minmax(44px,1fr))`}}>
       {rows.map((r,i)=>{
        const v=r[mi]; const h=Math.max(6,Math.round(v/max*100));
        return <div className="tbf-col" key={r[0]+i}>
         <span className="tbf-val">{fmt(v,metric)}</span>
         <div className="tbf-barwrap"><div className="tbf-bar" style={{height:h+'%',background:i<5?BAR_COLORS[i]:'#e6e2d8',color:i<5?'#fff':'#57534a'}}><span className="tbf-mono">{mono(r[0])}</span></div></div>
         <span className="tbf-name">{r[0]}</span>
        </div>})}
      </div></div>}
    <p className="tbf-foot">// {metric==='elo'?'elo rating':'win rate'} · higher is better · top 16 of {board.rows.length} ranked · colored = top 5 · mirrored from designarena.ai · checked {topBoardsChecked.toLowerCase()}</p>
   </div>
  </div>
 </div>;
}
