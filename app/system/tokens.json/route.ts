import {NextResponse} from 'next/server';
export const dynamic='force-static';
const reference={espresso950:'#0B0907',ink900:'#17120F',cream50:'#F3EEE5',steam400:'#B9AFA2',gold500:'#D8AD63',gold650:'#A77932',moss600:'#5F725F',ember600:'#A34732',sky600:'#32658A'};
export function GET(){return NextResponse.json({name:'ayodhya.',version:'0.1.0',status:'beta',naming:'ayodhya.{category}.{role}.{state}.{variant}',tiers:{reference,semantic:{surface:'{cream50}',text:'{ink900}',brand:'{gold500}',thinking:'{sky600}',acting:'{gold650}',evidence:'{moss600}',approval:'{gold650}',uncertainty:'{ember600}',stale:'{steam400}'},component:{buttonPrimaryBackground:'{semantic.brand}',focusIndicator:'{semantic.thinking}',evidenceChip:'{semantic.evidence}'}}});}
