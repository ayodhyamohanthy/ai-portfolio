'use client';
import {useEffect} from 'react';
export default function Reveal(){
 useEffect(()=>{
  document.documentElement.classList.add('rv-on');
  const els=()=>Array.from(document.querySelectorAll('[data-rv]:not(.rv-in)')) as HTMLElement[];
  if(!('IntersectionObserver' in window)){els().forEach(e=>e.classList.add('rv-in'));return}
  const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){en.target.classList.add('rv-in');io.unobserve(en.target)}}),{rootMargin:'0px 0px -6% 0px',threshold:0});
  els().forEach(e=>io.observe(e));
  const mo=new MutationObserver(()=>els().forEach(e=>io.observe(e)));
  mo.observe(document.body,{childList:true,subtree:true});
  return()=>{io.disconnect();mo.disconnect()};
 },[]);
 return null;
}
