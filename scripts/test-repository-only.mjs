import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const names = ['CHANGELOG.md', 'CHANGELOG_FR.md'];
const read = file => fs.readFileSync(path.join(root, file), 'utf8');

for (const name of names) {
  const original = read(name);
  assert.ok(original.length > 500, `Expected a substantial root changelog: ${name}`);
  assert.match(original, /2026/, `Changelog must include dated entries: ${name}`);
  assert.match(original, /github\.com\/LevelsFR\/cobblemon-realms-wiki\/pull\//, `Must cite verified PRs: ${name}`);
  for (const emitted of [name, name.replace(/\.md$/, '.html')]) {
    assert.ok(!fs.existsSync(path.join(dist, emitted)), `Repository-only changelog leaked into dist: ${emitted}`);
  }
}
const index = JSON.parse(fs.readFileSync(path.join(dist, 'search-index.json'), 'utf8'));
assert.ok(index.every(entry => !names.some(name => (entry.href || '').toLowerCase().includes(name.replace('.md', '').toLowerCase()))),
  'Repository-only changelog must not appear in wiki search');
const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
for (const name of names) {
  assert.ok(!sitemap.toLowerCase().includes(name.replace('.md', '').toLowerCase()), `Changelog leaked into sitemap: ${name}`);
}
for (const name of ['SUMMARY.md', 'fr-FR/SUMMARY.md']) {
  const navigation = read(name);
  assert.ok(!/\bCHANGELOG(?:_FR)?\.md\b/i.test(navigation), `Changelog leaked into navigation: ${name}`);
}
const build = read('scripts/build.mjs');
const postbuild = read('scripts/postbuild.mjs');
for (const name of names) {
  assert.ok(build.includes(name), `Root changelog missing from build exclusion: ${name}`);
  assert.ok(postbuild.includes(name), `Root changelog missing from audit exclusion: ${name}`);
}
const ignores = read('.gitignore');
for (const pattern of ['.env', '.dev.vars', '*.pem', '*.key', '*.sqlite']) {
  assert.ok(ignores.includes(pattern), `Missing safety ignore rule: ${pattern}`);
}
console.log('Repository-only bilingual changelogs validated: GitHub sources exist; no HTML, search, navigation or sitemap exposure.');
