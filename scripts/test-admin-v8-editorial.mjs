import assert from 'node:assert/strict';
import fs from 'node:fs';
import { feedbackBuckets } from './worker.mjs';

const cases = [
  { id:1, path:'/a', status:'open', hidden:0 },
  { id:2, path:'/a', status:'read', hidden:0 },
  { id:3, path:'/a', status:'resolved', hidden:0 },
  { id:4, path:'/a', status:'archived', hidden:1 },
  { id:5, path:'/b', status:'open', hidden:0 },
  { id:6, path:'/b', status:'archived', hidden:0 },
  { id:7, path:'/b', hidden:0 }
];
const all = feedbackBuckets(cases);
assert.deepEqual(all.active.map(x => x.id), [1,2,5,7]);
assert.deepEqual(all.resolved.map(x => x.id), [3]);
assert.deepEqual(all.archived.map(x => x.id), [4,6]);
const a = feedbackBuckets(cases, '/a');
assert.deepEqual(a.active.map(x => x.id), [1,2]);
assert.deepEqual(a.resolved.map(x => x.id), [3]);
assert.deepEqual(a.archived.map(x => x.id), [4]);
assert.deepEqual(feedbackBuckets([]), {active:[],resolved:[],archived:[]});

const read = p => fs.readFileSync(p, 'utf8');
const admin = read('scripts/worker.mjs');
const gateway = read('scripts/worker-entry-v8.mjs');
const fr = read('assets/wiki-admin-fr.js');
const work = read('assets/wiki-admin-v8-workspace.js');
const css = read('assets/wiki-admin-v8.css');
assert.match(admin, /Resolved comments/);
assert.match(admin, /const buttons=archived\?/);
assert.match(admin, /i\.status==='resolved'/);
assert.match(admin, /feedbackBuckets\(comments,url\.searchParams\.get\('path'\)/);
assert.match(gateway, /wiki-admin-v8-workspace\.js\?v=1/);
assert.match(gateway, /data-v8-user/);
assert.match(fr, /location\.pathname === '\/osadmin' \|\| navBusy/);
assert.match(fr, /if \(location\.pathname === '\/osadmin'\) return/);
assert.match(work, /cr-wiki-admin-workspace-v1:/);
assert.match(work, /function renderNav/);
assert.match(work, /mode: 'simple'/);
assert.match(work, /Raccourcis/);
assert.match(work, /Personnaliser/);
assert.match(work, /page-updates\.json/);
assert.match(work, /edit\/main\//);
assert.match(work, /data-v8-tab/);
assert.match(work, /window\.confirm/);
assert.doesNotMatch(work, /document\.cookie/);
for (const component of ['v8-workspace-context','v8-workspace-dialog','v8-nav-advanced','v8-workspace-actions'])
  assert.ok(css.includes(component), 'Missing editorial CSS for '+component);
for (const asset of [
  'dist/assets/wiki-admin-v8-workspace.js',
  'dist/assets/wiki-admin-v8.css',
  'dist/page-updates.json'
]) assert.ok(fs.existsSync(asset), 'Missing generated asset: '+asset);
const index = JSON.parse(read('dist/page-updates.json'));
assert.ok(index.some(p => p.path && typeof p.source === 'string' && p.source.endsWith('.md')), 'Editor links must use exact source manifest paths');
const publicHtml = read('dist/index.html');
assert.ok(!publicHtml.includes('wiki-admin-v8-workspace.js'), 'Editorial console must not alter player wiki HTML');
console.log('Editorial V8: protected UI, useful feedback buckets, local preferences and source-map shortcuts verified.');
