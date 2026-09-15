export type SystemResource={type:'figma-kit'|'github'|'tokens'|'playground';label:string;url:string;verified_at:string};
export type FavouriteSystem={title:string;publisher:string;canonical_url:string;why:string;lesson:string;founder_added:boolean;featured_order:number;resources:SystemResource[]};
export const favouriteSystems:FavouriteSystem[]=[
{title:'Backpack',publisher:'Skyscanner',canonical_url:'https://www.skyscanner.design/latest/welcome-to-backpack-Mtf5OEo4',why:'For keeping one product language coherent across platforms without forcing sameness.',lesson:'Multi-platform coherence',founder_added:true,featured_order:1,resources:[]},
{title:'Wanda',publisher:'Wonderflow',canonical_url:'https://design.wonderflow.ai/',why:'For pairing a precise token system with component guidance you can inspect, test, and use.',lesson:'Open, inspectable craft',founder_added:true,featured_order:2,resources:[]},
{title:'Fluent 2',publisher:'Microsoft',canonical_url:'https://fluent2.microsoft.design/',why:'For a token architecture that can scale without losing intent.',lesson:'Token architecture',founder_added:false,featured_order:3,resources:[]},
{title:'Material Design 3',publisher:'Google',canonical_url:'https://m3.material.io/',why:'For adaptive theming when one language must flex across contexts.',lesson:'Adaptive theming',founder_added:false,featured_order:4,resources:[{type:'figma-kit',label:'Open the Material 3 Design Kit in Figma ↗',url:'https://www.figma.com/community/file/1035203688168086460',verified_at:'2026-09-16'}]},
{title:'Polaris',publisher:'Shopify',canonical_url:'https://polaris.shopify.com/',why:'For product guidance that gives a component judgment, not only anatomy.',lesson:'Product guidance',founder_added:false,featured_order:5,resources:[]},
{title:'Atlassian Design System',publisher:'Atlassian',canonical_url:'https://atlassian.design/',why:'For governance that keeps consistency alive through scale and time.',lesson:'Governance at scale',founder_added:false,featured_order:6,resources:[]}
] satisfies FavouriteSystem[];
favouriteSystems.sort((a,b)=>a.featured_order-b.featured_order);
