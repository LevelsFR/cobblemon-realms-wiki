import assert from 'node:assert/strict';
import fs from 'node:fs';
import { handleServerStatus } from './server-status.mjs';

const request = (method = 'GET') => new Request('https://wiki.cobblemon-realms.com/api/server', { method });
const originalFetch = globalThis.fetch;
let count = 0;
let options;

try {
  globalThis.fetch = async (_url, init) => {
    count += 1;
    options = init;
    return new Response(JSON.stringify({ online: true, players: { online: 12, max: 80 } }), { status: 200 });
  };
  let result = await handleServerStatus(request(), 'success-test:25565', 'testInvite');
  assert.equal(result.status, 200);
  let data = await result.json();
  assert.deepEqual({ online: data.online, players: data.players }, { online: true, players: { online: 12, max: 80 } });
  assert.equal(data.joinUrl, 'https://discord.gg/testInvite');
  assert.equal(result.headers.get('cache-control'), 'public, max-age=300');
  assert.match(options.headers['User-Agent'], /CobblemonRealmsWiki/);
  assert.equal(options.cf.cacheEverything, true);
  assert.equal(options.cf.cacheTtlByStatus['200-299'], 300);
  assert.equal(options.cf.cacheTtlByStatus['429'], 0);

  result = await handleServerStatus(request(), 'success-test:25565', 'testInvite');
  assert.equal(result.status, 200);
  assert.equal(count, 1, 'Repeated requests must reuse the snapshot');

  const head = await handleServerStatus(request('HEAD'), 'success-test:25565', 'testInvite');
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  assert.equal(count, 1);

  const invalidMethod = await handleServerStatus(request('POST'), 'unused-test:25565', 'testInvite');
  assert.equal(invalidMethod.status, 405);
  assert.equal(count, 1);

  count = 0;
  globalThis.fetch = async () => {
    count += 1;
    return new Response(JSON.stringify({ online: false }), { status: 200 });
  };
  result = await handleServerStatus(request(), 'offline-test:25565', 'testInvite');
  assert.equal(result.status, 200);
  assert.equal((await result.json()).online, false, 'Confirmed offline must remain supported');

  count = 0;
  globalThis.fetch = async () => {
    count += 1;
    return new Response('Forbidden', { status: 403 });
  };
  result = await handleServerStatus(request(), 'forbidden-test:25565', 'testInvite');
  assert.equal(result.status, 503);
  data = await result.json();
  assert.equal(data.unavailable, true);
  assert.equal('online' in data, false, 'Provider HTTP 403 must never be shown as server offline');
  assert.equal(result.headers.get('cache-control'), 'public, max-age=120');
  await handleServerStatus(request(), 'forbidden-test:25565', 'testInvite');
  assert.equal(count, 1, 'Provider failures must back off');

  count = 0;
  globalThis.fetch = async () => {
    count += 1;
    return new Response(JSON.stringify({ error: 'Missing status' }), { status: 200 });
  };
  result = await handleServerStatus(request(), 'bad-json-test:25565', 'testInvite');
  assert.equal(result.status, 503, 'Invalid upstream payload must not be treated as offline');

  count = 0;
  globalThis.fetch = async () => {
    count += 1;
    return new Response(JSON.stringify({ online: true, players: { online: 3, max: 10 } }), { status: 200 });
  };
  const pair = await Promise.all([
    handleServerStatus(request(), 'parallel-test:25565', 'testInvite'),
    handleServerStatus(request(), 'parallel-test:25565', 'testInvite')
  ]);
  assert.equal(pair[0].status, 200);
  assert.equal(pair[1].status, 200);
  assert.equal(count, 1, 'Concurrent requests in the same Worker isolate must be deduplicated');

  const frontend = fs.readFileSync('assets/wiki.js', 'utf8');
  assert.match(frontend, /SERVER_STATUS_TTL_MS = 5 \* 60 \* 1000/);
  assert.match(frontend, /document\.hidden \|\| serverStatusLoading/);
  assert.match(frontend, /localStorage\.setItem\(SERVER_STATUS_STORAGE_KEY/);
  assert.match(frontend, /visibilitychange/);
  assert.match(frontend, /fetchWithTimeout\('\/api\/server', 8000, 'default'\)/);
  assert.doesNotMatch(frontend, /setInterval\(\(\) => loadServerStats\(badge, language\), 60000\)/);
  console.log('Server-status API tests passed: upstream headers, errors, caching, backoff, concurrency and browser throttling.');
} finally {
  globalThis.fetch = originalFetch;
}
