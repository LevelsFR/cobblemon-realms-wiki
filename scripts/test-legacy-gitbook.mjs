import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const legacy = ['secret_base_pc', 'wild_pokemon_safari'];

for (const basename of legacy) {
  const oldPath = path.join('fr-FR', '.gitbook', 'assets', basename + '.html');
  assert.ok(!fs.existsSync(path.join(dist, oldPath)), 'Legacy GitBook document must not be a public page: ' + oldPath);
}
const search = JSON.parse(fs.readFileSync(path.join(dist, 'search-index.json'), 'utf8'));
assert.ok(!search.some(item => String(item.href || '').includes('/.gitbook/assets/')),
  'Legacy GitBook pages must be absent from wiki search');
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
assert.ok(!sitemap.includes('/.gitbook/assets/'), 'Legacy GitBook documents must not appear in the sitemap');

function walk(folder) {
  return fs.readdirSync(folder, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(folder, entry.name);
    return entry.isDirectory() ? walk(full) : entry.name.endsWith('.html') ? [full] : [];
  });
}
let langLinks = 0;
for (const file of walk(dist)) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<a class="language" href="([^"]+)">/g)) {
    const href = match[1];
    assert.ok(href.startsWith('/'), 'Language link should be a local absolute path: ' + href);
    assert.ok(fs.existsSync(path.join(dist, href.slice(1))), 'Language link has no translated page: ' + href);
    langLinks++;
  }
}
assert.ok(langLinks > 100, 'Expected language switch links on bilingual content');
console.log('Legacy GitBook documents excluded, and language links resolve to real bilingual pages.');
