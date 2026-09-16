'use client';
import {useState} from 'react';
export default function CopyBlock({label,text}:{label:string,text:string}){
const [ok,setOk]=useState(false);
return <div className="proc-template"><div className="proc-template-head"><span>{label}</span><button onClick={()=>{navigator.clipboard.writeText(text);setOk(true);setTimeout(()=>setOk(false),1600)}}>{ok?'Copied ✓':'Copy'}</button></div><pre>{text}</pre></div>}
