import assert from 'node:assert/strict';
import fs from 'node:fs';
import worker from './worker-entry-v8.mjs';

const base = 'https://wiki.cobblemon-realms.com';
const source = fs.readFileSync('scripts/worker-entry-v8.mjs', 'utf8');
const publicCss = fs.readFileSync('assets/wiki.css', 'utf8');
const adminCss = fs.readFileSync('assets/wiki-admin-v8.css', 'utf8');
const theme = fs.readFileSync('assets/wiki-admin-v8-theme.js', 'utf8');
const csrf = fs.readFileSync('assets/wiki-admin-v8-csrf.js', 'utf8');

// The V8 palette intentionally mirrors the public wiki, rather than the old
// navy V8 prototype. Login also honors the same light/dark preference key.
for (const [publicToken, adminToken] of [
  ['--bg:#191919', '--v8-bg:#191919'],
  ['--sidebar:#1d1d1d', '--v8-sidebar:#1d1d1d'],
  ['--surface:#202020', '--v8-surface:#202020'],
  ['--accent:#4c91ff', '--v8-accent:#4c91ff']
]) {
  assert.ok(publicCss.includes(publicToken), 'Public source theme changed: ' + publicToken);
  assert.ok(adminCss.includes(adminToken), 'Admin token no longer matches public wiki: ' + adminToken);
}
assert.ok(adminCss.includes('html[data-theme="light"]'));
assert.ok(adminCss.includes('@media(max-width:860px)'));
assert.ok(adminCss.includes('@media(max-width:600px)'));
assert.ok(adminCss.includes('prefers-reduced-motion:reduce'));
assert.equal((adminCss.match(/\{/g) || []).length, (adminCss.match(/\}/g) || []).length, 'Admin CSS brace balance');
assert.ok(theme.includes("cobblemon-wiki-theme"), 'Admin theme must use player wiki preference');
assert.ok(theme.includes("localStorage.setItem(key, next)"));
assert.ok(theme.includes("document.addEventListener('DOMContentLoaded'"));
assert.doesNotMatch(theme, /(?:document\.cookie|cr_v8_csrf|sessionStorage|Authorization)/i);
assert.ok(csrf.includes('form.requestSubmit(submitter)'), 'Submission and CSRF behavior must be unchanged');

const configuredEnv = {
  CR_V8_GITHUB_CLIENT_ID: 'unit-id',
  CR_V8_GITHUB_CLIENT_SECRET: 'unit-secret',
  CR_V8_SESSION_SECRET: 'unit-session-secret',
  CR_V8_GITHUB_OWNERS: 'LevelsFR'
};
const login = await worker.fetch(new Request(base + '/osadmin'), configuredEnv, {});
assert.equal(login.status, 200);
const html = await login.text();
for (const part of [
  'v8-login-brand', 'cobblemon-realms-server-icon.svg',
  'wiki-admin-v8-theme.js?v=1', 'wiki-admin-v8.css?v=9',
  'Consulter le wiki public', 'Se connecter avec GitHub'
]) assert.ok(html.includes(part), 'Login is missing ' + part);
assert.equal(login.headers.get('cache-control'), 'no-store, private');
const notConfigured = await worker.fetch(new Request(base + '/osadmin'), {}, {});
assert.equal(notConfigured.status, 200);
assert.match(await notConfigured.text(), /GitHub OAuth V8 n’est pas encore configuré/);
for (const part of [
  'v8-brand-icon', 'v8-theme-toggle', 'v8-header-link', 'v8-user-dot',
  'wiki-admin-v8-theme.js?v=1', 'wiki-admin-v8.css?v=9',
  'csrfForm(out,session.csrf)', 'cr_v8_csrf', "roleFor(env,"
]) assert.ok(source.includes(part), 'Admin protected shell is missing ' + part);

for (const asset of [
  'dist/assets/wiki-admin-v8.css',
  'dist/assets/wiki-admin-v8-theme.js',
  'dist/assets/cobblemon-realms-server-icon.svg'
]) assert.ok(fs.existsSync(asset), 'Build did not copy ' + asset);
const player = fs.readFileSync('dist/index.html', 'utf8');
assert.ok(!player.includes('wiki-admin-v8-theme.js'), 'Admin controls leaked into public pages');
assert.ok(!player.includes('wiki-admin-v8.css'), 'Admin design leaked into public pages');

console.log('Admin V8 visual smoke passed: public palette, login branding, responsive rules, theme sync and isolation.');
