import fs from 'node:fs';import path from 'node:path';
const root='public/system',read=p=>JSON.parse(fs.readFileSync(p));
const manifest=read(`${root}/manifest.json`);if(manifest.version!=='0.2.0')throw Error('manifest version');
const index=read(`${root}/schemas/components/index.json`);const known=new Set(index.components.map(x=>x.slug));
for(const c of index.components){const d=read(`${root}/schemas/components/${c.slug}.json`);for(const k of ['name','slug','states','accessibility','responsive'])if(!d[k])throw Error(`${c.slug}: ${k}`);}
const scenario=read(`${root}/scenarios/approval-flow.json`);const walk=n=>{if(n.component&&!known.has(n.component))throw Error(`unknown component: ${n.component}`);(n.children||[]).forEach(walk)};walk(scenario.tree);
console.log(`validated ${known.size} components, pattern, scenario, IDs and version pin`);
