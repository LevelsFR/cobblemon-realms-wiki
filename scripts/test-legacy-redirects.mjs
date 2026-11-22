import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const sourceFile = path.join(root, '_redirects');
const publishedFile = path.join(dist, '_redirects');

assert.ok(fs.existsSync(sourceFile), 'Repository must track the Cloudflare static redirect rules');
assert.ok(fs.existsSync(publishedFile), 'Build must copy _redirects into dist for Cloudflare Static Assets');
assert.equal(fs.readFileSync(publishedFile, 'utf8'), fs.readFileSync(sourceFile, 'utf8'),
  'Published Cloudflare redirect rules must match the reviewed source');

const config = JSON.parse(fs.readFileSync(path.join(root, 'wrangler.jsonc'), 'utf8'));
assert.equal(config.assets.directory, './dist');
assert.equal(config.assets.html_handling, 'auto-trailing-slash');
assert.equal(config.assets.not_found_handling, 'none');
assert.deepEqual(config.assets.run_worker_first,
  ['/api/*', '/__cr-admin*', '/page-meta.json'],
  '404 clean-up must not move all public pages into Worker-first routing');

const rows = fs.readFileSync(publishedFile, 'utf8')
  .split(/\r?\n/)
  .map(line => line.trim())
  .filter(line => line && !line.startsWith('#'))
  .map(line => {
    const parts = line.split(/\s+/);
    assert.equal(parts.length, 3, 'Expected source destination HTTP-status per rule: ' + line);
    const [from, to, code] = parts;
    assert.match(from, /^\/[^\s*:?]+$/, 'Use explicit historic paths, not wildcard redirects');
    assert.match(to, /^\/[^\s*:?]+$/, 'Redirect only within the official wiki');
    assert.equal(code, '301', 'Preserve permanent SEO redirects: ' + line);
    assert.notEqual(from, to, 'Redirect cannot target itself: ' + from);
    return { from, to };
  });

assert.equal(rows.length, 24, 'The provided Search Console sample supports 24 explicit redirects');
const bySource = new Map(rows.map(row => [row.from, row.to]));
assert.equal(bySource.size, rows.length, 'Duplicate redirect source rules');

for (const { from, to } of rows) {
  assert.ok(!bySource.has(to), 'No redirect chains or loops: ' + from + ' -> ' + to);
  const html = path.join(dist, to.slice(1) + '.html');
  assert.ok(fs.existsSync(html), 'Redirect target must be a generated HTML page: ' + to);
  const page = fs.readFileSync(html, 'utf8');
  const canonical = 'https://wiki.cobblemon-realms.com' + to;
  assert.ok(page.includes('<link rel="canonical" href="' + canonical + '">'),
    'Target must publish its matching canonical URL: ' + to);
  assert.ok(!fs.existsSync(path.join(dist, from.slice(1))),
    'Historic 404 should not turn into a duplicate 200 page: ' + from);
}

for (const locale of ['', '/fr-FR']) {
  for (let i = 1; i <= 9; i++) {
    const original = locale + '/pokemons-guides/pokemons-guides/gen-list2/gen_' + i + '.html';
    const destination = locale + '/pokemons-guides/gen-list2/gen_' + i;
    assert.equal(bySource.get(original), destination, 'Missing old generation guide alias: ' + original);
  }
}
for (const [from, to] of [
  ['/fr-FR/mods-guides/CobbleSafari/blocs_deco.html', '/fr-FR/mods-guides/CobbleSafari/blocs_utiles'],
  ['/mods-guides/CobbleSafari/perfumes_incense_repels.md', '/mods-guides/CobbleSafari/perfumes_incense_repels'],
  ['/.gitbook/assets/secret_base_pc.html', '/fr-FR/mods-guides/CobbleSafari/secret_base_pc'],
  ['/contributing.md', '/contributing'],
  ['/whats-new-v6.html', '/version-history'],
  ['/fr-FR/whats-new-v6.html', '/fr-FR/version-history']
]) {
  assert.equal(bySource.get(from), to, 'Missing confirmed renamed-page redirect: ' + from);
}
assert.ok(!bySource.has('/i'), 'Unknown /i is a legitimate 404, never redirect it arbitrarily');

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
const searchIndex = JSON.parse(fs.readFileSync(path.join(dist, 'search-index.json'), 'utf8'));
for (const { from } of rows) {
  assert.ok(!sitemap.includes('<loc>https://wiki.cobblemon-realms.com' + from + '</loc>'),
    'Legacy URL must not be listed in sitemap: ' + from);
  assert.ok(!searchIndex.some(item => item.href === from),
    'Legacy URL must not pollute internal wiki search: ' + from);
}

console.log('SEO redirect QA passed: 24 permanent aliases, canonical targets, no chains, unchanged static-first routing.');
