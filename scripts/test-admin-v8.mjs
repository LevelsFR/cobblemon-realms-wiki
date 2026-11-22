import test from 'node:test';
import assert from 'node:assert/strict';
import worker from './worker-entry-v8.mjs';

const base='https://wiki.cobblemon-realms.com';
const env={};
test('V8 shows a safe, not-configured login screen',async()=>{
  const r=await worker.fetch(new Request(base+'/osadmin'),env,{});
  assert.equal(r.status,200);
  assert.match(await r.text(),/GitHub OAuth V8 n’est pas encore configuré/);
  assert.equal(r.headers.get('cache-control'),'no-store, private');
});
test('V8 rejects unauthenticated internal admin API access',async()=>{
  const r=await worker.fetch(new Request(base+'/api/admin/v8/v4/state'),env,{});
  assert.equal(r.status,401);
});
test('V8 rejects browser-supplied Basic credentials',async()=>{
  const r=await worker.fetch(new Request(base+'/osadmin',{headers:{authorization:'Basic Zm9vOmJhcg=='}}),env,{});
  assert.equal(r.status,400);
});
test('V8 refuses unconfigured OAuth start without redirecting',async()=>{
  const r=await worker.fetch(new Request(base+'/osadmin/oauth/start'),env,{});
  assert.equal(r.status,503);
});
test('V8 checks OAuth callback state',async()=>{
  const r=await worker.fetch(new Request(base+'/osadmin/oauth/callback?code=fake&state=wrong'),env,{});
  assert.equal(r.status,401);
});
test('V8 does not authorize unknown POST mutations',async()=>{
  const r=await worker.fetch(new Request(base+'/api/admin/v8/badge',{method:'POST',headers:{origin:base}}),env,{});
  assert.equal(r.status,401);
});

test('Old V8 pilot URL redirects to canonical /osadmin',async()=>{
  const r=await worker.fetch(new Request(base+'/__cr-admin/v8'),env,{});
  assert.equal(r.status,303);
  assert.equal(r.headers.get('location'),base+'/osadmin');
});

test('Previous /admin address redirects to /osadmin',async()=>{
  const r=await worker.fetch(new Request(base+'/admin'),env,{});
  assert.equal(r.status,303);
  assert.equal(r.headers.get('location'),base+'/osadmin');
});
