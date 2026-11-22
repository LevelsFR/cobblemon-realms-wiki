import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const config = JSON.parse(fs.readFileSync(path.join(root, 'wrangler.jsonc'), 'utf8'));
assert.deepEqual(config.assets.run_worker_first, ['/api/*', '/__cr-admin*', '/osadmin', '/osadmin/*', '/admin', '/admin/*', '/page-meta.json']);
assert.equal(config.assets.not_found_handling, 'none', 'Missing paths must reach the Worker to resolve D1 redirects');
assert.equal(config.assets.binding, 'ASSETS');
assert.equal(config.d1_databases?.[0]?.binding, 'WIKI_DB');

const assets = [
  '/assets/wiki-public-v4.css?v=public-v4',
  '/assets/gitbook-blocks.js?v=gitbook-reference-3',
  '/assets/wiki-public-v4.js?v=public-v4'
];

for (const sample of ['index.html', 'fr-FR/index.html', '404.html']) {
  const file = path.join(root, 'dist', sample);
  assert.ok(fs.existsSync(file), `Missing generated HTML: ${sample}`);
  const html = fs.readFileSync(file, 'utf8');
  for (const asset of assets) {
    const count = html.split(asset).length - 1;
    assert.equal(count, 1, `${sample} should include ${asset} exactly once, got ${count}`);
  }
  assert.ok(html.includes('/assets/wiki-navigation-state.js'), `Missing navigation enhancements in ${sample}`);
  assert.ok(!html.includes('/assets/wiki-admin-v4.js'), `Private admin scripts leaked into ${sample}`);
}

const entry = fs.readFileSync(path.join(root, 'scripts/worker-entry.mjs'), 'utf8');
assert.ok(entry.includes("!isAdminPage(url)"), 'HTML rewriting must be restricted to admin pages');
const v8Entry=fs.readFileSync(path.join(root,'scripts/worker-entry-v8.mjs'),'utf8');
assert.ok(v8Entry.includes("const PREFIX = '/osadmin'"), 'V8 must use permanent /osadmin route');
const worker = fs.readFileSync(path.join(root, 'scripts/worker.mjs'), 'utf8');
assert.ok(worker.includes("new URL('/404.html',url)"), 'Worker must preserve the branded 404 fallback');
assert.ok(entry.includes('getRedirectMap'), 'D1 redirect support must remain available');
console.log('Static-first routing checks passed: EN/FR, 404, admin isolation and D1 preserved.');
