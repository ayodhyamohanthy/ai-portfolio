import '@astryxdesign/core/astryx.css';
import '@astryxdesign/theme-neutral/theme.css';
import './globals.css';
import Providers from './Providers';
export const metadata={title:'Ayodhya Mohanthy — AI-Native Product Design',description:'An open-source AI-native design system backed by shipped product work: live interaction patterns, process, templates, tools, benchmarks and current field notes.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" data-theme="light" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`try{var t=localStorage.getItem('ayodhya-theme-v3');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`}}/></head><body><Providers>{children}</Providers></body></html>}
