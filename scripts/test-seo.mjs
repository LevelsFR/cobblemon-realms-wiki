import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const origin = 'https://wiki.cobblemon-realms.com';

function read(relative) {
  const file = path.join(dist, relative);
  assert.ok(fs.existsSync(file), `Missing generated HTML: ${relative}`);
  return fs.readFileSync(file, 'utf8');
}

function checkMetadata(relative, canonical, locale) {
  const html = read(relative);
  assert.match(html, /<title>[^<]+<\/title>/, `Missing title in ${relative}`);
  assert.equal((html.match(/<link rel="canonical"/g) || []).length, 1, `Canonical must be unique: ${relative}`);
  assert.ok(html.includes(`<link rel="canonical" href="${origin}${canonical}">`), `Incorrect canonical: ${relative}`);
  const descriptions = [...html.matchAll(/<meta name="description" content="([^"]+)">/g)];
  assert.equal(descriptions.length, 1, `Meta description must be unique: ${relative}`);
  assert.ok(descriptions[0][1].length >= 50 && descriptions[0][1].length <= 250, `Unhelpful description: ${relative}`);
  for (const tag of ['og:type', 'og:site_name', 'og:title', 'og:description', 'og:url', 'og:locale']) {
    assert.ok(html.includes(`property="${tag}"`), `Missing ${tag}: ${relative}`);
  }
  for (const tag of ['twitter:card', 'twitter:title', 'twitter:description']) {
    assert.ok(html.includes(`name="${tag}"`), `Missing ${tag}: ${relative}`);
  }
  assert.ok(html.includes(`<meta property="og:locale" content="${locale}">`), `Wrong locale: ${relative}`);
  assert.ok(html.includes(`<meta property="og:url" content="${origin}${canonical}">`), `Wrong og:url: ${relative}`);
  return html;
}

for (const [enFile, frFile, enUrl, frUrl] of [
  ['index.html', 'fr-FR/index.html', '/', '/fr-FR/'],
  ['quests.html', 'fr-FR/quests.html', '/quests', '/fr-FR/quests'],
  ['mods-guides/worlds_and_dimensions/worlds_and_dimensions.html',
    'fr-FR/mods-guides/worlds_and_dimensions/worlds_and_dimensions.html',
    '/mods-guides/worlds_and_dimensions/worlds_and_dimensions',
    '/fr-FR/mods-guides/worlds_and_dimensions/worlds_and_dimensions']
]) {
  const en = checkMetadata(enFile, enUrl, 'en_US');
  const fr = checkMetadata(frFile, frUrl, 'fr_FR');
  for (const html of [en, fr]) {
    assert.ok(html.includes(`hreflang="en" href="${origin}${enUrl}"`), 'Missing reciprocal EN alternate');
    assert.ok(html.includes(`hreflang="fr" href="${origin}${frUrl}"`), 'Missing reciprocal FR alternate');
    assert.ok(html.includes(`hreflang="x-default" href="${origin}${enUrl}"`), 'Missing default language');
  }
}
const missing = read('404.html');
assert.ok(missing.includes('<meta name="robots" content="noindex,follow">'), '404 must not be indexed');
assert.ok(!missing.includes('hreflang='), '404 must not be in language clusters');

const sitemap = fs.readFileSync(path.join(dist, 'sitemap.xml'), 'utf8');
for (const url of ['/', '/fr-FR/', '/quests', '/fr-FR/quests']) {
  assert.ok(sitemap.includes(`<loc>${origin}${url}</loc>`), `Missing sitemap URL: ${url}`);
}
assert.ok(!sitemap.includes('<loc>https://wiki.cobblemon-realms.com/404'), '404 must not be in sitemap');
const robots = fs.readFileSync(path.join(dist, 'robots.txt'), 'utf8');
assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`), 'Robots sitemap must point to official domain');
console.log('Wiki SEO checks passed: canonical, metadata, bilingual alternates, 404, sitemap and robots.');
