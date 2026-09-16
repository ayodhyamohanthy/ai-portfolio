import '@astryxdesign/core/astryx.css';
import '@astryxdesign/theme-neutral/theme.css';
import './globals.css';
import Providers from './Providers';
export const metadata={title:'Ayodhya Mohanthy — AI-Native Product Design',description:'An open-source AI-native design system backed by shipped product work: live interaction patterns, process, templates, tools, benchmarks and current field notes.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><head><script dangerouslySetInnerHTML={{__html:`try{localStorage.removeItem('ayodhya-theme-v3')}catch(e){}`}}/></head><body><Providers>{children}</Providers></body></html>}
