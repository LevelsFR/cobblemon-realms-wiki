import assert from 'node:assert/strict';
import fs from 'node:fs';
import { searchQuality } from './worker-entry-v5.mjs';

const quality = searchQuality([
  { query:'foreroar',event:'zero',category:'all',language:'en',count:6 },
  { query:'myu',event:'zero',category:'all',language:'en',count:4 },
  { query:'mew',event:'search',category:'all',language:'en',count:8 },
  { query:'mew',event:'click',category:'all',language:'en',count:5 },
  { query:'demeteros',event:'search',category:'all',language:'fr',count:1 },
  { query:'demeteros',event:'zero',category:'all',language:'fr',count:1 }
]);
assert.equal(quality.searches,20,'Attempts include successful searches and no-result attempts');
assert.equal(quality.successful,9);
assert.equal(quality.zeros,11);
assert.equal(quality.clicks,5);
assert.equal(quality.successRate,45);
assert.equal(quality.zeroRate,55);
assert.equal(quality.clickRate,25);
assert.equal(quality.failures[0].query,'foreroar');
assert.equal(searchQuality([]).successRate,100);

const index=JSON.parse(fs.readFileSync('dist/search-index.json','utf8'));
for(const language of ['en','fr']){
  const baby=index.find(x=>x.language===language&&/\/pokemons-exclusives\/baby-legends(?:$|[/?#])/.test(x.href));
  assert.ok(baby,'Baby Legends must exist in search index for '+language);
  for(const term of ['foreroar','myu','haidon','kaidon','regiclay','regigigas']){
    assert.ok(baby.text.toLowerCase().includes(term),language+' full article must index '+term);
  }
}
const en=fs.readFileSync('pokemons-exclusives/baby-legends.md','utf8');
const fr=fs.readFileSync('fr-FR/pokemons-exclusives/baby-legends.md','utf8');
assert.match(en,/Delcalf evolves into Kyogre at \*\*level 60\*\*/);
assert.match(fr,/Delcalf évolue en Kyogre au \*\*niveau 60\*\*/);
assert.match(en,/Regigigas.*level 100/);
assert.match(fr,/Regigigas.*niveau 100/);
assert.doesNotMatch(en,/to be completed/i);
assert.doesNotMatch(fr,/à compléter/i);
const telemetry=fs.readFileSync('assets/wiki-search-telemetry.js','utf8');
assert.match(telemetry,/selected\?\.dataset\.searchCategory \|\| 'all'/);
console.log('Search quality and complete Baby Legends EN/FR index regression checks passed.');
