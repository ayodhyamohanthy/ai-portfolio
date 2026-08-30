'use client';
import {useEffect,useRef,useState} from 'react';
const snippets:Record<string,string>={'Beautiful UI':'<AIInterfacePattern />','beUI':'<AgentStatus state="working" />','Rare UI':'<MotionPattern />','Transitions.dev':'<motion.div layout />','shadcn/ui':'<AccessiblePrimitive />','EasyUI':'/* EasyUI · MIT · Suraj Maurya */\n<MotionPrimitive />','Ayodhya Mohanthy':'# AI-native product pattern'};
function kindFor(name:string){const n=name.toLowerCase();if(/load|status|progress|task|thinking|stream|agent|tool/.test(n))return'progress';if(/approval|human|selection|action/.test(n))return'approval';if(/command|search|input|conversation|code/.test(n))return'command';if(/nav|sidebar|dock|menu|tabs/.test(n))return'nav';if(/dialog|sheet|tooltip|reveal/.test(n))return'dialog';if(/table|context|card|grid|insight/.test(n))return'cards';if(/transition|motion|orb|fluid|bounce|scroll|magnetic|morph|ripple/.test(n))return'motion';if(/form|accordion|faq/.test(n))return'form';if(/toast|notification|feedback|failure|eval/.test(n))return'feedback';return'artifact'}
function Demo({name}:{name:string}){const n=name.toLowerCase(),k=kindFor(name);
if(n.includes('stream'))return <div className="cp cp-stream"><span>Designing</span><p>Evidence should remain visible while the answer <i>takes shape.</i></p><b/></div>;
if(n.includes('tool chips'))return <div className="cp cp-tools">{['Search','Read','Compare','Cite'].map((x,i)=><span key={x}><i>{i<3?'✓':'•'}</i>{x}</span>)}</div>;
if(n.includes('task rows'))return <div className="cp cp-tasks">{['Collect evidence','Check boundary','Prepare review'].map((x,i)=><p key={x}><i>{i<2?'✓':'↻'}</i>{x}<em>{i<2?'done':'active'}</em></p>)}</div>;
if(n.includes('grid reveal'))return <div className="cp cp-grid">{Array.from({length:16},(_,i)=><i key={i}/>)}</div>;
if(n.includes('step player'))return <div className="cp cp-steps"><span>01</span><i/><span>02</span><i/><span>03</span><p>Observe → frame → test</p></div>;
if(n.includes('code block'))return <pre className="cp cp-code"><i>const</i> decision = {'{'}\n  evidence: <b>true</b>,\n  reversible: <b>true</b>\n{'}'}</pre>;
if(n.includes('scroll progress'))return <div className="cp cp-scroll"><i/><span>01</span><span>02</span><span>03</span><b>Keep context while moving</b></div>;
if(n.includes('enter / exit'))return <div className="cp cp-enter"><i/><i/><span>old</span><b>new</b></div>;
if(n.includes('shared layout'))return <div className="cp cp-shared"><i/><i/><b>One object. Two states.</b></div>;
if(n.includes('list transition'))return <div className="cp cp-list">{['A','B','C'].map(x=><p key={x}>{x}<i/></p>)}</div>;
if(n==='tabs')return <div className="cp cp-tabs"><span>Evidence</span><span>Decision</span><span>Outcome</span><i/></div>;
if(n==='sheet')return <div className="cp cp-sheet"><div/><i><span>Review panel</span><b>Confirm boundary</b></i></div>;
if(n==='table')return <div className="cp cp-table">{['Source','Signal','Confidence'].map(x=><b key={x}>{x}</b>)}{Array.from({length:6},(_,i)=><span key={i}/>)}</div>;
if(n==='tooltip')return <div className="cp cp-tooltip"><button>Why?</button><span>Show context without leaving the task.</span></div>;
if(n.includes('20 live'))return <div className="cp cp-lab">{Array.from({length:9},(_,i)=><i key={i}/>) }<span>20 working patterns</span></div>;
if(n.includes('evidence content'))return <div className="cp cp-evidence"><blockquote>“Design claim”</blockquote><a>Source 01 ↗</a><a>Source 02 ↗</a></div>;
if(n.includes('failure taxonomy'))return <div className="cp cp-failure"><span>Recoverable</span><span>Needs review</span><span>Stop</span></div>;
if(n.includes('eval rubric'))return <div className="cp cp-rubric">{['Grounded','Clear','Safe'].map((x,i)=><p key={x}>{x}<i style={{width:`${82-i*17}%`}}/></p>)}</div>;
if(n.includes('handoff'))return <div className="cp cp-handoff"><span>Design</span><i>→</i><span>Build</span><i>→</i><span>Verify</span></div>;
if(k==='progress')return <div className="cp cp-progress"><i/><div><b>Working</b><span>Checking evidence</span></div><section><em/><em/><em/><em/></section></div>;
if(k==='approval')return <div className="cp cp-approval"><span>Review before action</span><b>Ready to publish?</b><div><button>Hold</button><button>Approve</button></div></div>;
if(k==='command')return <div className="cp cp-command"><div>⌘K <span>Find a pattern…</span></div><p><i/>Find evidence</p><p><i/>Open decision</p><p><i/>Compare states</p></div>;
if(k==='nav')return <div className="cp cp-nav">{['Explore','Decide','Ship'].map((x,i)=><p key={x}><i>0{i+1}</i>{x}</p>)}<em/></div>;
if(k==='dialog')return <div className="cp cp-dialog"><div><span>Pattern detail</span><b>Keep context</b><p>Continuity without losing place.</p><button>Done</button></div></div>;
if(k==='cards')return <div className="cp cp-cards"><div>{[1,2,3].map(i=><p key={i}><i/><span>{i===1?'Source':i===2?'Signal':'Decision'}</span></p>)}</div></div>;
if(k==='motion')return <div className="cp cp-motion"><i/><i/><i/><span>state → state</span></div>;
if(k==='form')return <div className="cp cp-form"><label>Goal<input readOnly value="Make behaviour clear"/></label><label>Boundary<input readOnly value="Ask before action"/></label></div>;
if(k==='feedback')return <div className="cp cp-feedback"><div><i/>Evidence found</div><div><i/>Boundary checked</div><div><i/>Ready to review</div></div>;
return <div className="cp cp-artifact"><span>PRODUCT DESIGN ARTIFACT</span><p><i/>Intent</p><p><i/>Evidence</p><p><i/>Exit condition</p></div>}
export default function ResourcePreview({source,mode,url,pattern}:{source:string,mode:string,url:string,pattern?:string}){const ref=useRef<HTMLDivElement>(null),[visible,setVisible]=useState(false),[copied,setCopied]=useState(false);useEffect(()=>{const el=ref.current;if(!el)return;const io=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{rootMargin:'120px'});io.observe(el);return()=>io.disconnect()},[]);const hosted=mode.startsWith('Hosted'),name=pattern||source;const copy=async()=>{await navigator.clipboard.writeText(`${snippets[source]||snippets['Ayodhya Mohanthy']}\n// ${name}`);setCopied(true);setTimeout(()=>setCopied(false),1500)};return <div ref={ref} className={`resource-preview ${hosted?'live':'link-only'} ${visible?'is-visible':'is-paused'}`}>{hosted?<><Demo name={name}/><details className="preview-code"><summary>Use this pattern <span>+</span></summary><div><button onClick={e=>{e.stopPropagation();copy()}}>{copied?'Copied ✓':'Copy starter code'}</button><a onClick={e=>e.stopPropagation()} href={url}>View source ↗</a></div></details></>:<><div className="external-preview"><i>↗</i><span>LINK-ONLY REFERENCE</span><b>{name}</b><p>Explore this restricted set at its creator&apos;s site.</p></div><a onClick={e=>e.stopPropagation()} className="source-cta" href={url}>See it at the source ↗</a></>}</div>}
