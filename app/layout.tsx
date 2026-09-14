import Script from 'next/script';
import './globals.css';
export const metadata={title:'Ayodhya Mohanthy — AI-Native Product Design',description:'An open-source AI-native design system backed by shipped product work: live interaction patterns, process, templates, tools, benchmarks and current field notes.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="dark" suppressHydrationWarning><head><Script id="theme-init" strategy="beforeInteractive">{`try{var t=localStorage.getItem('ayodhya-theme-v2');document.documentElement.dataset.theme=t==='light'?'light':'dark'}catch(e){document.documentElement.dataset.theme='dark'}`}</Script></head><body>{children}</body></html>}
