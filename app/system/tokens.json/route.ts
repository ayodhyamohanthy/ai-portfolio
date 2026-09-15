import {NextResponse} from 'next/server';
export const dynamic='force-static';
const token=(id:string,value:string,type:string,description:string,extra={})=>({id,value,type,description,mode:'all',status:'beta',version:'0.2.0',platformTransforms:{web:value},contrastRelationships:[],deprecated:false,replacement:null,prohibitedUse:[],...extra});
const tokens=[
token('ayodhya.color.reference.espresso950','#0B0907','color','Deep editorial surface',{prohibitedUse:['body text on ink surfaces']}),
token('ayodhya.color.reference.ink900','#17120F','color','Primary light-mode text'),
token('ayodhya.color.reference.cream50','#F3EEE5','color','Light surface and dark-mode heading'),
token('ayodhya.color.reference.steam400','#B9AFA2','color','Muted text on dark surfaces'),
token('ayodhya.color.reference.gold500','#D8AD63','color','Brand and editorial emphasis',{prohibitedUse:['status as color alone']}),
token('ayodhya.color.reference.gold650','#A77932','color','Dark gold accent'),
token('ayodhya.color.reference.moss600','#5F725F','color','Evidence accent'),
token('ayodhya.color.reference.ember600','#A34732','color','Uncertainty accent'),
token('ayodhya.color.reference.sky600','#32658A','color','Focus and thinking accent'),
token('ayodhya.color.text.default','{ayodhya.color.reference.ink900}','color','Default text',{alias:'ayodhya.color.reference.ink900',contrastRelationships:[{against:'ayodhya.color.surface.default',target:'WCAG 2.2 AA'}]}),
token('ayodhya.color.surface.default','{ayodhya.color.reference.cream50}','color','Default page surface',{alias:'ayodhya.color.reference.cream50'}),
token('ayodhya.color.focus.default','{ayodhya.color.reference.sky600}','color','Visible focus indicator',{alias:'ayodhya.color.reference.sky600',prohibitedUse:['non-interactive decoration']}),
token('ayodhya.component.button.primary.background','{ayodhya.color.reference.gold500}','color','Primary button background',{alias:'ayodhya.color.reference.gold500'}),
token('ayodhya.component.evidence-chip.accent','{ayodhya.color.reference.moss600}','color','Evidence chip accent',{alias:'ayodhya.color.reference.moss600'})];
export function GET(){return NextResponse.json({$schema:'https://ayodhya.work/system/schemas/tokens.schema.json',schemaVersion:'1.0.0',name:'ayodhya.',version:'0.2.0',status:'beta',naming:'ayodhya.{category}.{role}.{state}.{variant}',tokens});}
