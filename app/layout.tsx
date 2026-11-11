import '@astryxdesign/core/astryx.css';
import '@astryxdesign/theme-neutral/theme.css';
import './globals.css';
import Providers from './Providers';
export const metadata={title:'Ayodhya Mohanthy — AI-Native Product Design',description:'Three deep product-design case studies: enterprise automation, evidence-led product strategy and B2B workflow design. Decisions, original artifacts, outcomes and the AI-native practice behind the work.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><head><script dangerouslySetInnerHTML={{__html:`try{localStorage.removeItem('ayodhya-theme-v3')}catch(e){}`}}/></head><body><Providers>{children}</Providers></body></html>}
