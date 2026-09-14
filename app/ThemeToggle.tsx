'use client';
import {useEffect,useState} from 'react';
import Icon from './Icons';

const KEY='ayodhya-theme-v3';
type Theme='dark'|'light';

export default function ThemeToggle(){
  const [theme,setTheme]=useState<Theme>('light');
  useEffect(()=>{const next:Theme=localStorage.getItem(KEY)==='dark'?'dark':'light';document.documentElement.dataset.theme=next;setTheme(next)},[]);
  function toggle(){
    const next:Theme=theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=next;
    localStorage.setItem(KEY,next);
    setTheme(next);
  }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${theme==='dark'?'light':'dark'} mode`} title={`Switch to ${theme==='dark'?'light':'dark'} mode`}><Icon name={theme==='dark'?'sun':'moon'} size={17}/></button>
}
