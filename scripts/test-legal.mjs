import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const read = (file) => fs.readFileSync(path.join(dist, file), 'utf8');
const pages = ['legal-notice', 'privacy-policy', 'cookies', 'terms-of-use'];
const variants = [
  { base: '', home: 'index.html', disclaimer: 'NOT AN OFFICIAL MINECRAFT', privacy: 'Privacy Policy' },
  { base: 'fr-FR/', home: 'fr-FR/index.html', disclaimer: "Ceci n'est pas un produit officiel Minecraft", privacy: 'Confidentialité' }
];

for (const variant of variants) {
  const home = read(variant.home);
  assert.match(home, /class="site-legal-footer"/, 'Legal footer must be present on every generated page');
  assert.ok(home.includes(variant.disclaimer), 'Independence disclaimer is missing');
  assert.ok(home.includes(variant.privacy), 'Localized footer links are missing');
  assert.ok(home.includes('data-analytics-toggle'), 'Analytics privacy control is missing');
  assert.ok(home.includes('data-contact-reveal'), 'Collapsible contact disclosure is missing');
  assert.ok(home.includes('/assets/contact-reveal.js'), 'Contact disclosure script is missing');
  assert.ok(!home.includes('@gmail.com'), 'Email must not be written into generated HTML');
  assert.ok(home.includes('/assets/legal-footer.css'), 'Legal footer stylesheet is missing');
  assert.ok(home.includes('/assets/privacy-controls.js'), 'Privacy controls script is missing');

  for (const slug of pages) {
    const html = read(`${variant.base}${slug}.html`);
    assert.ok(html.includes('site-legal-footer'), `No footer on ${variant.base}${slug}`);
    assert.ok(!html.includes('@gmail.com'), `Email must remain hidden from static HTML in ${variant.base}${slug}`);
    if (slug === 'legal-notice') {
      assert.ok(html.includes('id="contact"'), 'Legal contact anchor is missing');
      assert.ok(html.includes('wiki-contact-reveal'), 'Expandable contact block is missing from legal notice');
    }
    if (slug === 'privacy-policy') {
      assert.ok(html.includes('wiki-contact-reveal'), 'Expandable privacy contact is missing');
    }
    assert.ok(html.includes(`href="/${variant.base}${slug}"`), `Bad footer URL for ${variant.base}${slug}`);
    assert.ok(html.includes('rel="canonical"'), `No canonical on ${variant.base}${slug}`);
    assert.ok(html.includes('hreflang="fr"'), `No language alternate on ${variant.base}${slug}`);
  }
}

const missing = read('404.html');
assert.ok(missing.includes('site-legal-footer'), '404 page has no legal footer');
assert.ok(missing.includes('data-contact-reveal'), '404 needs a revealable email contact');
assert.ok(!missing.includes('@gmail.com'), '404 should never display email in source');
for (const page of pages) assert.ok(missing.includes(`data-legal-page="${page}"`), `404 missing ${page} link`);

const client = fs.readFileSync(path.join(dist, 'assets/site-features.js'), 'utf8');
const telemetry = fs.readFileSync(path.join(dist, 'assets/wiki-search-telemetry.js'), 'utf8');
const privacy = fs.readFileSync(path.join(dist, 'assets/privacy-controls.js'), 'utf8');
const contactReveal = fs.readFileSync(path.join(dist, 'assets/contact-reveal.js'), 'utf8');
assert.ok(contactReveal.includes('String.fromCharCode'), 'Contact must not appear as plain text in scripts');
assert.ok(contactReveal.includes('mailto:'), 'Disclosure must offer a direct email link');
assert.ok(contactReveal.includes('details.open'), 'Email must be tied to expansion state');
const searchIndex = read('search-index.json');
assert.ok(!searchIndex.includes('@gmail.com'), 'Search index must not expose contact email');
const prefKey = 'cr-wiki-analytics-opt-out';
for (const source of [client, telemetry, privacy]) {
  assert.ok(source.includes(prefKey), 'Client privacy preference key is inconsistent');
}
assert.ok(privacy.includes('navigator.globalPrivacyControl'), 'Global Privacy Control handling is missing');
console.log('Legal footer and privacy controls checks passed for EN, FR, 404 and telemetry.');
