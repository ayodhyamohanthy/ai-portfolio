'use client';
import {useState} from 'react';
export default function NewsletterForm(){const [email,setEmail]=useState(''),[state,setState]=useState<'idle'|'sending'|'done'|'error'>('idle');
const submit=async(e:React.FormEvent)=>{e.preventDefault();if(state==='sending')return;setState('sending');
try{const r=await fetch('https://formsubmit.co/ajax/ayodhyarammohanthy@gmail.com',{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({email,_subject:'Newsletter subscriber · ayodhya.work',source:'ayodhya.work/newsletter'})});
if(!r.ok)throw 0;setState('done')}catch{setState('error')}};
if(state==='done')return <p className="nl-done">You are on the list. First issue lands when sending opens - the list is already reading the field every hour.</p>;
return <form className="nl-form" onSubmit={submit}>
<input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@studio.com" aria-label="Email address"/>
<button type="submit" disabled={state==='sending'}>{state==='sending'?'Joining…':'Subscribe'}</button>
{state==='error'&&<p className="nl-error">That did not go through - email <a href="mailto:ayodhyarammohanthy@gmail.com?subject=Subscribe%20me">ayodhyarammohanthy@gmail.com</a> and I will add you.</p>}
</form>}
