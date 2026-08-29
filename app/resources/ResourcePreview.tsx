'use client';
import {useState} from 'react';
const snippets:Record<string,string>={
'Beautiful UI':`<ApprovalCard\n  action="Publish sourced claim"\n  risk="External visibility"\n  onApprove={approve}\n/>`,
'beUI':`<AgentStatus\n  state="working"\n  label="Checking sources"\n/>`,
'Rare UI':`<ProximitySidebar\n  items={navigation}\n  active="Evidence"\n/>`,
'Transitions.dev':`<motion.div layout\n  initial={{ opacity: 0 }}\n  animate={{ opacity: 1 }}\n/>`,
'shadcn/ui':`<Command>\n  <CommandInput placeholder="Search…" />\n  <CommandList>{results}</CommandList>\n</Command>`,
'EasyUI':`/* EasyUI · MIT · Suraj Maurya */
<MagneticButton strength={0.4}>
  Run agent
</MagneticButton>`,
'Ayodhya Mohanthy':`# Human approval matrix\nAction:\nRisk / reversibility:\nEvidence required:\nApproval must show:\nUndo path:`
};
export default function ResourcePreview({source,mode,url}:{source:string,mode:string,url:string}){const [active,setActive]=useState(0),[copied,setCopied]=useState(false);const hosted=mode.startsWith('Hosted');const copy=async()=>{await navigator.clipboard.writeText(snippets[source]||snippets['Ayodhya Mohanthy']);setCopied(true);setTimeout(()=>setCopied(false),1500)};return <div className={`resource-preview ${hosted?'live':'link-only'}`}>
 {hosted?<>{source==='Beautiful UI'&&<div className="pv-approval"><span>Approval required</span><b>Publish sourced claim?</b><p>External visibility · reversible</p><div><button>Hold</button><button>Approve</button></div></div>}{source==='beUI'&&<div className="pv-agent"><i/><div><b>Checking sources</b><span>3 of 5 complete</span></div><em>working</em></div>}{source==='Rare UI'&&<div className="pv-sidebar">{['Evidence','Decisions','Outcomes'].map((x,i)=><button className={active===i?'on':''} onMouseEnter={()=>setActive(i)} onClick={()=>setActive(i)} key={x}><span>0{i+1}</span>{x}</button>)}<i style={{transform:`translateY(${active*38}px)`}}/></div>}{source==='Transitions.dev'&&<div className="pv-transition"><div className="before"><span>Queued</span></div><i>→</i><div className="after"><span>Complete</span></div></div>}{source==='shadcn/ui'&&<div className="pv-command"><span>⌘K</span><p>Search components…</p><div>Command palette</div></div>}{source==='EasyUI'&&<div className="pv-easy"><i/><button>Run agent <span>↗</span></button><p>Spring pull · clear release</p></div>}{source==='Ayodhya Mohanthy'&&<div className="pv-template"><span>AI PROJECT ARTIFACT</span><b>Human approval matrix</b><div><i/> Action and consequence</div><div><i/> Evidence required</div><div><i/> Undo path</div></div>}<div className="preview-actions"><button onClick={copy}>{copied?'Copied ✓':'Copy starter code'}</button><a href={url}>Source ↗</a></div></>:<><div className="external-preview"><i>↗</i><span>LINK-ONLY CATALOGUE</span><b>Preview at the source</b><p>Paid or restricted material stays with its creator.</p></div><a className="source-cta" href={url}>Open source catalogue ↗</a></>}
 </div>}
