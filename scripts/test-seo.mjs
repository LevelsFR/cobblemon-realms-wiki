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
// Home-only structured identity: one shared site identity, two localized pages.
for (const [file, lang, expectedTitle] of [
  ['index.html', 'en', 'Cobblemon Realms | Official Modpack Wiki by LevelsFR'],
  ['fr-FR/index.html', 'fr', 'Cobblemon Realms | Wiki officiel du modpack par LevelsFR']
]) {
  const html = read(file);
  assert.ok(html.includes('<title>' + expectedTitle + '</title>'), 'Missing distinctive homepage SEO title: ' + file);
  assert.ok(html.includes('name="description"') && html.includes('LevelsFR'), 'Missing official author in homepage description');
  assert.ok(html.includes('modpacks/cobblemon-realms-lite'), 'Missing official Lite download on homepage');
  assert.ok(html.includes('modpacks/cobblemon-realms'), 'Missing official Full download on homepage');
  assert.ok(!html.includes('MMO Realms'), 'Do not promote unrelated server brands on the official homepage');
  const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1, 'Only one home identity JSON-LD script should be generated: ' + file);
  const graph = JSON.parse(scripts[0][1]);
  assert.equal(graph['@context'], 'https://schema.org');
  assert.ok(Array.isArray(graph['@graph']), 'JSON-LD must provide an identity graph');
  const entity = type => graph['@graph'].find(item => item['@type'] === type);
  const website = entity('WebSite');
  const publisher = entity('Person');
  const modpack = entity('CreativeWork');
  const page = entity('WebPage');
  assert.equal(website.name, 'Cobblemon Realms Wiki');
  assert.equal(website.url, origin + '/');
  assert.equal(publisher.name, 'LevelsFR');
  assert.equal(website.publisher['@id'], publisher['@id']);
  assert.equal(modpack.name, 'Cobblemon Realms');
  assert.equal(modpack.creator['@id'], publisher['@id']);
  assert.equal(modpack.url, 'https://www.curseforge.com/minecraft/modpacks/cobblemon-realms');
  assert.ok(publisher.sameAs.includes('https://github.com/LevelsFR'));
  assert.ok(publisher.sameAs.includes('https://modrinth.com/user/LevelsFR'));
  assert.equal(page.inLanguage, lang);
  assert.equal(page.name, expectedTitle);
  assert.equal(page.about['@id'], modpack['@id']);
}
assert.ok(!read('quests.html').includes('application/ld+json'), 'Home identity JSON-LD should not be duplicated across every page');

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
