import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const read = (rel) => fs.readFileSync(path.join(dist, rel), 'utf8');
const release = JSON.parse(read('assets/pack-release.json'));
const dataset = JSON.parse(read('assets/spawn-explorer-data.json'));

assert.equal(release.schemaVersion, 1);
assert.equal(release.full.version, '6.3');
assert.equal(release.lite.version, '6.3');
assert.equal(dataset.schemaVersion, 1);
assert.equal(dataset.version, 'v6.4.1');
assert.equal(dataset.kind, 'release-notes-extract');
assert.equal(dataset.entries.length, 149);
assert.equal(new Set(dataset.entries.map(e => e.pokemon.toLowerCase())).size, 149, 'Index contains duplicate species');
for (const entry of dataset.entries) {
  assert.ok(typeof entry.pokemon === 'string' && entry.pokemon.trim(), 'Missing species');
  assert.match(entry.level, /^\d+-\d+$/, 'Invalid level range');
  assert.ok(['common','uncommon','rare','ultra-rare'].includes(entry.rarity), 'Invalid rarity');
  assert.ok(Array.isArray(entry.biomes) && entry.biomes.length > 0, 'Missing documented biomes');
}
for (const prefix of ['', 'fr-FR/']) {
  const home = read(prefix + 'index.html');
  const start = read(prefix + 'start-here.html');
  const explorer = read(prefix + 'spawn-explorer.html');
  const migration = read(prefix + 'migration-create.html');
  const guides = read(prefix + 'mods-guides/index.html');
  const versionHistory = read(prefix + 'version-history.html');
  assert.ok(home.includes('start-here'), 'Homepage should link onboarding');
  assert.ok(home.includes('>v6.3</span>'), 'Wiki header should show latest verified release');
  assert.ok(start.includes('data-start-guide'), 'Missing starter checklist');
  assert.equal((start.match(/data-step="/g)||[]).length,7,'Checklist needs seven milestones');
  assert.ok(start.includes('/assets/start-guide.js'), 'Missing checklist behavior');
  assert.ok(explorer.includes('id="spawn-explorer"'), 'Missing index explorer');
  assert.ok(explorer.includes('/assets/spawn-explorer.js'), 'Missing explorer JS');
  assert.ok(explorer.includes('149'), 'Dataset scope should be explicit');
  assert.ok(explorer.includes('6.4.1'), 'Datapack version should be explicit');
  assert.ok(migration.includes('6.4'), 'Missing migration version distinction');
  assert.ok(migration.includes('6.3'), 'Missing v6.3 status distinction');
  assert.ok(!guides.includes('Coming soon!') && !guides.includes('À venir bientôt !'), 'Obsolete mod index placeholder');
  assert.ok(versionHistory.includes('6.3'), 'Expected version history');
}
for (const p of [
  'pokemons-guides/gen-list/gen_3.md','pokemons-guides/gen-list/gen_4.md',
  'pokemons-guides/gen-list/gen_5.md','pokemons-guides/gen-list/gen_6.md',
  'pokemons-guides/gen-list/gen_7.md','pokemons-guides/gen-list/gen_8.md',
  'mods-guides/legendary_monuments/overworld_world.md'
]) {
  for (const prefix of ['', 'fr-FR/']) {
    const src = fs.readFileSync(path.join(root,prefix+p),'utf8');
    assert.ok(!/terralith:/i.test(src), 'Obsolete biome ID remains in current guide: '+prefix+p);
    assert.ok(src.includes('Spawn Explorer')||src.includes('Explorateur')||src.includes('Terralith'), 'Missing removal context in '+prefix+p);
  }
}
for (const prefix of ['', 'fr-FR/']) {
  const reference = fs.readFileSync(path.join(root,prefix+'pokemons-guides/biome-tags-reference.md'),'utf8');
  assert.ok(reference.includes('terralith:'), 'Native tag reference should preserve optional compatibility IDs');
  assert.ok(reference.includes('removed')||reference.includes('retiré'), 'Optional compatibility is not explained');
}

console.log('Player onboarding, spawn explorer, release metadata, and biome cleanup checks passed.');
