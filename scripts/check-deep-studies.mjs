import fs from 'node:fs';
import assert from 'node:assert/strict';
const routes=['application-automation','data-product-design','ad-platform'];
for (const slug of routes) {
 const html=fs.readFileSync(`.next/server/app/work/${slug}.html`,'utf8');
 for(const anchor of ['at-a-glance','context','evidence','decisions','delivery','outcomes','reflection']) assert.ok(html.includes(`id="${anchor}"`),`${slug}: missing ${anchor}`);
 assert.ok(html.includes('Clear about what this case proves.'),`${slug}: evidence limits missing`);
 assert.ok(html.includes('Read the original published project'),`${slug}: source link missing`);
 const images=[...html.matchAll(/(?:src|href)="(\/cases\/[^"?]+)/g)].map(x=>x[1]);
 assert.ok(images.length>=5,`${slug}: original artifacts missing`);
 for(const image of images) assert.ok(fs.existsSync(`public${image}`),`Missing image: ${image}`);
 console.log(`PASS ${slug}: sections, provenance, ${new Set(images).size} existing original assets`);
}
const home=fs.readFileSync('.next/server/app/index.html','utf8');
assert.equal((home.match(/class="selected-card /g)||[]).length,3,'Homepage must feature exactly three deep studies');
assert.ok(home.indexOf('SELECTED WORK / THREE DEEP DIVES')<home.indexOf('Try the behaviour'),'Selected work must precede library content');
assert.ok(home.includes('AI-native design.')&&home.includes('Led in the open.'),'Preserve established headline');
assert.equal((home.match(/id="cases"/g)||[]).length,1,'Exactly one cases anchor');
assert.ok(home.includes('BENCHMARK SNAPSHOT'),'Benchmark entry remains explicitly dated');
assert.ok(home.indexOf('SELECTED WORK / THREE DEEP DIVES')<home.indexOf('BENCHMARK SNAPSHOT'),'Work must precede benchmark snapshot');
console.log('PASS home: exactly three featured studies, ahead of library, established headline and benchmark entry preserved');
assert.equal((home.match(/id="experience"/g)||[]).length,1,'Exactly one experience anchor');
assert.ok(home.indexOf('SELECTED WORK / THREE DEEP DIVES')<home.indexOf('id="experience"'),'Experience timeline must follow selected work');
assert.ok(home.indexOf('id="experience"')<home.indexOf('BENCHMARK SNAPSHOT'),'Experience timeline must precede benchmark snapshot');
for(const org of ['Breakthrough Labs','Shell','Noon','Yellow.ai','Simplyfi.tech','Heaps.ai','Deloitte','Andhra University','202641131732','freecoffee.tech','RailSwap']) assert.ok(home.includes(org),`Homepage experience section missing: ${org}`);
for(const phrase of ['Agentic','human-in-the-loop','evals','guardrails','semantic search','conversational AI','design system','Figma','Claude Code','Supabase']) assert.ok(home.toLowerCase().includes(phrase.toLowerCase()),`Homepage missing recruiter keyword: ${phrase}`);
console.log('PASS home: experience timeline carries every resume employer, education, patent, R&D prototypes and recruiter keywords');
