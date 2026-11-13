import {contribWeeks,contribTotal,contribRange,contribChecked} from './contributionsData';
const COLORS:Record<string,string>={NONE:'#e8e4da',FIRST_QUARTILE:'#b7e26e',SECOND_QUARTILE:'#8fd444',THIRD_QUARTILE:'#5fb32a',FOURTH_QUARTILE:'#3e8a1c'};
const MONTHS=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export default function Contributions(){
const labels:{i:number;label:string}[]=[];let last=-1;
contribWeeks.forEach((wk,i)=>{const day=wk.find(d=>d);if(day){const m=parseInt(day.date.slice(5,7),10)-1;if(m!==last){labels.push({i,label:MONTHS[m]});last=m}}});
return <a className="contributions-proof" href="https://github.com/ayodhyamohanthy" target="_blank" rel="noopener noreferrer">
<div className="contrib-cal" role="img" aria-label={`GitHub contributions, ${contribRange}: ${contribTotal} total`}>
<div className="contrib-months">{labels.map(l=><span key={l.i} style={{gridColumnStart:l.i+1}}>{l.label}</span>)}</div>
<div className="contrib-weeks">{contribWeeks.map((wk,i)=><div key={i} className="contrib-week">{wk.map((d,j)=><span key={j} className="contrib-day" style={{background:d?COLORS[d.level]||COLORS.NONE:'transparent'}} title={d?`${d.date}: ${d.count} contribution${d.count===1?'':'s'}`:undefined}/>)}</div>)}</div>
</div>
<span>{contribTotal.toLocaleString('en-IN')} contributions · {contribRange} · github.com/ayodhyamohanthy ↗</span>
</a>}
