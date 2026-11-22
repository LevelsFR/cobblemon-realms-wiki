import test from 'node:test';
import assert from 'node:assert/strict';
import worker from './worker-entry-v8.mjs';
import legacy from './worker.mjs';
import v4 from './worker-entry.mjs';
import { withInternalAdminSession, getInternalAdminSession } from './admin-internal-session.mjs';

const base='https://wiki.cobblemon-realms.com';
const env={};
test('V8 shows a safe, not-configured login screen',async()=>{
  const r=await worker.fetch(new Request(base+'/osadmin'),env,{});
  assert.equal(r.status,200);
  assert.match(await r.text(),/GitHub OAuth V8 n’est pas encore configuré/);
  assert.equal(r.headers.get('cache-control'),'no-store, private');
  assert.equal(r.headers.get('x-cr-admin-version'),'v8.2-oauth-diagnostics-20261122');
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

const gatewayEnv={
  CR_V8_GITHUB_CLIENT_ID:'test-client',
  CR_V8_GITHUB_CLIENT_SECRET:'test-secret',
  CR_V8_SESSION_SECRET:'test-key-for-testing-only-dont-use-in-production',
  CR_V8_GITHUB_OWNERS:'LevelsFR',
  CR_V8_GITHUB_EDITORS:'Anxiolytiques',
  CR_ADMIN_PATH_TOKEN:'test-path',
  ASSETS:{fetch:async()=>new Response('{}',{headers:{'content-type':'application/json'}})}
};
test('Internal identity cannot be forged through a user header or Basic Auth',async()=>{
  assert.equal(getInternalAdminSession(gatewayEnv),null);
  const r=await legacy.fetch(new Request(base+'/api/admin/test-path/status',{headers:{'x-cr-internal-session':'owner'}}),gatewayEnv,{});
  assert.equal(r.status,503);
});
test('Independent GitHub editor identity is forwarded with wiki role and own audit actor',async()=>{
  const delegated=withInternalAdminSession(gatewayEnv,{id:428,login:'Anxiolytiques',role:'wiki'});
  assert.equal(getInternalAdminSession(delegated).user,'Anxiolytiques');
  assert.equal(getInternalAdminSession(delegated).role,'wiki');
  const response=await legacy.fetch(new Request(base+'/api/admin/test-path/status'),delegated,{});
  assert.equal(response.status,200);
  const v4Response=await v4.fetch(new Request(base+'/api/admin/test-path/v4/state'),delegated,{});
  assert.equal(v4Response.status,200);
});
test('Editor and owner are strictly separate and invalid roles are rejected',()=>{
  assert.throws(()=>withInternalAdminSession(gatewayEnv,{id:428,login:'Anxiolytiques',role:'owner-ish'}),TypeError);
  assert.deepEqual(getInternalAdminSession(withInternalAdminSession(gatewayEnv,{id:40616006,login:'LevelsFR',role:'owner'})).role,'owner');
});
test('GitHub OAuth accepts allowlisted editor without any legacy Basic account',async()=>{
  const originalFetch=globalThis.fetch;
  let calls=0;
  try {
    globalThis.fetch=async(url)=>{
      calls++;
      if(String(url).includes('/login/oauth/access_token'))return Response.json({access_token:'fake-oauth-token'});
      if(String(url).includes('/user'))return Response.json({id:428,login:'Anxiolytiques'});
      throw new Error('Unexpected fetch '+url);
    };
    const start=await worker.fetch(new Request(base+'/osadmin/oauth/start'),gatewayEnv,{});
    assert.equal(start.status,303);
    const state=new URL(start.headers.get('location')).searchParams.get('state');
    const stateCookie=start.headers.get('set-cookie').split(';')[0];
    const callback=await worker.fetch(new Request(base+'/osadmin/oauth/callback?state='+encodeURIComponent(state)+'&code=dummy',{
      headers:{cookie:stateCookie}
    }),gatewayEnv,{});
    assert.equal(callback.status,303);
    assert.equal(callback.headers.get('location'),base+'/osadmin');
    assert.ok(callback.headers.get('set-cookie').includes('__Host-cr_v8='));
    assert.equal(calls,2);
    const sessionCookie=callback.headers.get('set-cookie').split(',').map(s=>s.trim()).find(s=>s.startsWith('__Host-cr_v8='));
    const sessionValue=sessionCookie?.split(';')[0];
    assert.ok(sessionValue);
    const resp=await worker.fetch(new Request(base+'/api/admin/v8/status',{headers:{cookie:sessionValue}}),gatewayEnv,{});
    assert.equal(resp.status,200);
  }finally{globalThis.fetch=originalFetch;}
});

test('Unallowlisted GitHub account receives an identifiable, non-secret denial',async()=>{
  const original=globalThis.fetch;
  try {
    globalThis.fetch=async url=>String(url).includes('/access_token')?Response.json({access_token:'temporary-token'}):Response.json({id:429,login:'UnknownEditor'});
    const start=await worker.fetch(new Request(base+'/osadmin/oauth/start'),gatewayEnv,{});
    const state=new URL(start.headers.get('location')).searchParams.get('state');
    const stateCookie=start.headers.get('set-cookie').split(';')[0];
    const callback=await worker.fetch(new Request(base+'/osadmin/oauth/callback?state='+encodeURIComponent(state)+'&code=fake',{headers:{cookie:stateCookie}}),gatewayEnv,{});
    assert.equal(callback.status,403);
    const message=await callback.text();
    assert.match(message,/UnknownEditor/);
    assert.match(message,/v8.2-oauth-diagnostics-20261122/);
    assert.doesNotMatch(message,/test-secret|temporary-token|test-key-for-testing/);
  }finally{globalThis.fetch=original;}
});
