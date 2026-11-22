import legacyWorker from './worker-entry-v7.mjs';

// V8 is deliberately opt-in. Existing Basic Auth routes and their deployment remain unchanged.
const PREFIX = '/__cr-admin/v8';
const API = '/api/admin/v8';
const COOKIE = '__Host-cr_v8';
const STATE_COOKIE = '__Host-cr_v8_oauth_state';
const enc = new TextEncoder();
const safe = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function reply(body, status=200, type='text/html; charset=utf-8') {
  return new Response(body,{status,headers:{'content-type':type,'cache-control':'no-store, private','x-robots-tag':'noindex, nofollow','x-content-type-options':'nosniff','referrer-policy':'no-referrer','x-frame-options':'DENY'}});
}
function redirect(url, cookies=[]) { const r=Response.redirect(url,303); r.headers.set('cache-control','no-store');r.headers.set('referrer-policy','no-referrer');for(const c of cookies)r.headers.append('set-cookie',c);return r; }
function fail(message,status=403) { return reply('<!doctype html><html lang="fr"><meta charset="utf-8"><title>Accès refusé</title><body><main style="max-width:560px;margin:10vh auto;font:16px system-ui"><h1>Accès non disponible</h1><p>'+safe(message)+'</p><a href="'+PREFIX+'">Retour</a></main></body></html>',status); }
function cookie(req,name) { const raw=req.headers.get('cookie')||''; return raw.split(';').map(x=>x.trim()).find(x=>x.startsWith(name+'='))?.slice(name.length+1)||''; }
function random() { const b=crypto.getRandomValues(new Uint8Array(32));return b64(b); }
function b64(bytes) { let s='';for(const x of bytes)s+=String.fromCharCode(x);return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,''); }
function from64(s) { const raw=atob(s.replace(/-/g,'+').replace(/_/g,'/')+'='.repeat((4-s.length%4)%4));return Uint8Array.from(raw,c=>c.charCodeAt(0)); }
function configured(env) { return Boolean(env.CR_V8_GITHUB_CLIENT_ID && env.CR_V8_GITHUB_CLIENT_SECRET && env.CR_V8_SESSION_SECRET && (env.CR_V8_GITHUB_OWNERS||env.CR_V8_GITHUB_EDITORS)); }
async function mac(env, payload) { const k=await crypto.subtle.importKey('raw',enc.encode(env.CR_V8_SESSION_SECRET),{name:'HMAC',hash:'SHA-256'},false,['sign']);return b64(new Uint8Array(await crypto.subtle.sign('HMAC',k,enc.encode(payload)))); }
async function readSession(req,env) {
  if (!env.CR_V8_SESSION_SECRET) return null;
  const raw=cookie(req,COOKIE);const dot=raw.lastIndexOf('.');if(dot<0)return null;
  const part=raw.slice(0,dot), signature=raw.slice(dot+1);
  let expected;try{expected=await mac(env,part);}catch{return null;}
  const a=enc.encode(signature),b=enc.encode(expected);if(a.length!==b.length)return null;
  let diff=0;for(let i=0;i<a.length;i++)diff|=a[i]^b[i];if(diff)return null;
  try { const obj=JSON.parse(new TextDecoder().decode(from64(part)));return obj.exp>Date.now() && obj.id && obj.csrf && ['owner','wiki'].includes(obj.role)?obj:null; }catch{return null;}
}
async function writeSession(env, session) { const part=b64(enc.encode(JSON.stringify(session)));return part+'.'+await mac(env,part); }
function setCookie(name,value,maxAge,sameSite='Lax') {return name+'='+value+'; Path=/; Secure; HttpOnly; SameSite='+sameSite+'; Max-Age='+maxAge;}
function clearCookies() {return [setCookie(COOKIE,'',0,'Strict'),setCookie(STATE_COOKIE,'',0)];}
function allow(raw, profile) {
  return String(raw||'').split(/[\s,;]+/).filter(Boolean).some(x => x.toLowerCase()===String(profile.login).toLowerCase() || x===String(profile.id) || x==='id:'+profile.id);
}
function roleFor(env,profile) { if(allow(env.CR_V8_GITHUB_OWNERS,profile))return 'owner';if(allow(env.CR_V8_GITHUB_EDITORS,profile))return 'wiki';return null; }
function legacyAccount(env,role) {
  let accounts=[];
  try{accounts=JSON.parse(env.CR_ADMIN_ACCOUNTS||'[]');}catch{}
  if(!Array.isArray(accounts))accounts=[];
  if(!accounts.length && env.CR_ADMIN_USER && env.CR_ADMIN_PASSWORD)accounts=[{user:env.CR_ADMIN_USER,password:env.CR_ADMIN_PASSWORD,role:'owner'}];
  return accounts.find(x=>x?.user&&x?.password&&(x.role==='wiki'?'wiki':'owner')===role)||null;
}
function paths(env) {
  const t=String(env.CR_ADMIN_PATH_TOKEN||'').trim();
  const encoded=t?'/'+encodeURIComponent(t):'';
  return { page:'/__cr-admin'+encoded, api:'/api/admin'+encoded };
}
function legacyPath(pathname,env) {
  const p=paths(env);
  if(pathname===PREFIX || pathname===PREFIX+'/')return p.page;
  if(pathname.startsWith(API+'/'))return p.api+pathname.slice(API.length);
  return null;
}
function rewriteLocation(location,env,origin) {
  if(!location)return null;
  const target=new URL(location,origin),p=paths(env);
  if(target.origin!==origin)return null;
  if(target.pathname===p.page||target.pathname===p.page+'/')target.pathname=PREFIX;
  else if(target.pathname.startsWith(p.api+'/'))target.pathname=API+target.pathname.slice(p.api.length);
  else if(target.pathname.startsWith('/__cr-admin')||target.pathname.startsWith('/api/admin'))return null;
  return target.toString();
}
function noCredentials(req) {return req.headers.has('authorization');}
function loginPage(env) {
  const ready=configured(env);
  return reply('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cobblemon Realms | Administration</title><link rel="stylesheet" href="/assets/wiki-admin-v8.css"></head><body class="v8-login"><main class="v8-login-card"><span class="v8-eyebrow">COBBLEMON REALMS</span><h1>Administration du wiki</h1><p>Connectez-vous avec un compte GitHub explicitement autorisé. Aucun mot de passe du wiki ne transite par votre navigateur.</p>'+(ready?'<a class="v8-github-button" href="'+PREFIX+'/oauth/start">Se connecter avec GitHub</a>':'<p class="v8-alert">GitHub OAuth V8 n’est pas encore configuré. L’administration actuelle reste disponible séparément.</p>')+'<p class="v8-note">Accès réservé aux mainteneurs autorisés.</p></main></body></html>');
}
async function start(req,env) {
  if(!configured(env))return fail('Configuration OAuth incomplète.',503);
  const state=random(),callback=new URL(PREFIX+'/oauth/callback',req.url);
  const authorize=new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id',env.CR_V8_GITHUB_CLIENT_ID);
  authorize.searchParams.set('redirect_uri',callback.toString());
  authorize.searchParams.set('scope','read:user');
  authorize.searchParams.set('state',state);
  return redirect(authorize.toString(),[setCookie(STATE_COOKIE,state,600)]);
}
async function callback(req,env) {
  const u=new URL(req.url);const state=u.searchParams.get('state')||'';
  const expected=cookie(req,STATE_COOKIE);
  if(!configured(env)||!state||!expected||state!==expected||!u.searchParams.get('code'))return fail('Connexion GitHub non validée. Réessayez.',401);
  const callbackUrl=new URL(PREFIX+'/oauth/callback',req.url).toString();
  let token,profile;
  try {
    const exchange=await fetch('https://github.com/login/oauth/access_token',{method:'POST',headers:{accept:'application/json','content-type':'application/json'},body:JSON.stringify({client_id:env.CR_V8_GITHUB_CLIENT_ID,client_secret:env.CR_V8_GITHUB_CLIENT_SECRET,code:u.searchParams.get('code'),redirect_uri:callbackUrl,state})});
    if(!exchange.ok)throw new Error('exchange');
    const data=await exchange.json();token=data.access_token;if(typeof token!=='string'||!token)throw new Error('token');
    const user=await fetch('https://api.github.com/user',{headers:{authorization:'Bearer '+token,accept:'application/vnd.github+json','user-agent':'Cobblemon-Realms-Wiki'}});
    if(!user.ok)throw new Error('profile');
    profile=await user.json();
    if(!Number.isSafeInteger(profile.id)||!profile.login)throw new Error('invalid profile');
  }catch{return fail('Impossible de valider le compte auprès de GitHub.',502);}
  const role=roleFor(env,profile);
  if(!role||!legacyAccount(env,role))return fail('Ce compte GitHub ne dispose pas des permissions requises.',403);
  const session={id:profile.id,login:profile.login,role,csrf:random(),iat:Date.now(),exp:Date.now()+8*3600000};
  const value=await writeSession(env,session);
  return redirect(new URL(PREFIX,req.url).toString(),[setCookie(STATE_COOKIE,'',0),setCookie(COOKIE,value,8*3600,'Strict')]);
}
function csrfForm(html,csrf) {
  return html.replace(/<form\b[^>]*\bmethod=["']post["'][^>]*>/gi,m=>m+'<input type="hidden" name="cr_v8_csrf" value="'+safe(csrf)+'">');
}
function protectHtml(html,env,session) {
  const p=paths(env);
  let out=html.replaceAll(p.api+'/',API+'/').replaceAll(p.page+'?',PREFIX+'?').replaceAll('action="'+p.page+'"','action="'+PREFIX+'"').replaceAll('href="'+p.page+'"','href="'+PREFIX+'"');
  out=csrfForm(out,session.csrf);
  out=out.replace('</head>','<meta name="cr-v8-csrf" content="'+safe(session.csrf)+'"><link rel="stylesheet" href="/assets/wiki-admin-v8.css?v=8"></head>');
  out=out.replace(/<body([^>]*)>/i,'<body$1><div class="v8-banner"><span>COBBLEMON REALMS <strong>ADMIN V8</strong></span><span class="v8-identity">'+safe(session.login)+' · '+safe(session.role)+'</span><form method="post" action="'+PREFIX+'/logout"><input type="hidden" name="cr_v8_csrf" value="'+safe(session.csrf)+'"><button type="submit">Déconnexion</button></form></div>');
  // Prevent unintentional disclosure of the retired path token through legacy HTML.
  return out;
}
async function verifyCsrf(req,session) {
  if(req.headers.get('origin')!==new URL(req.url).origin)return false;
  const ct=req.headers.get('content-type')||'';
  if(ct.includes('application/json'))return req.headers.get('x-cr-v8-csrf')===session.csrf;
  if(!ct.includes('application/x-www-form-urlencoded')&&!ct.includes('multipart/form-data'))return false;
  try { const form=await req.clone().formData();return form.get('cr_v8_csrf')===session.csrf; }catch{return false;}
}
async function handle(req,env,ctx) {
  const url=new URL(req.url);
  if(noCredentials(req))return fail('En-tête Authorization non accepté sur la passerelle V8.',400);
  if(req.method==='GET'&&url.pathname===PREFIX+'/oauth/start')return start(req,env);
  if(req.method==='GET'&&url.pathname===PREFIX+'/oauth/callback')return callback(req,env);
  const session=await readSession(req,env);
  if(req.method==='GET'&&(url.pathname===PREFIX||url.pathname===PREFIX+'/')&&!session)return loginPage(env);
  if(!session)return fail('Session absente ou expirée. Reconnectez-vous.',401);
  if(roleFor(env,{id:session.id,login:session.login})!==session.role)return fail('Les autorisations du compte ont été révoquées ou modifiées.',403);
  if(req.method==='POST'&&url.pathname===PREFIX+'/logout') {
    if(!await verifyCsrf(req,session))return fail('Vérification CSRF refusée.');
    return redirect(new URL(PREFIX,req.url).toString(),clearCookies());
  }
  if(!['GET','HEAD','POST'].includes(req.method))return fail('Méthode non autorisée.',405);
  if(req.method==='POST'&&!await verifyCsrf(req,session))return fail('Vérification CSRF refusée.');
  const account=legacyAccount(env,session.role);
  if(!account)return fail('Le compte de relais du rôle GitHub est indisponible.',503);
  const newPath=legacyPath(url.pathname,env);if(!newPath)return fail('Route V8 inconnue.',404);
  const destination=new URL(req.url);destination.pathname=newPath;
  const headers=new Headers(req.headers);
  headers.set('authorization','Basic '+btoa(unescape(encodeURIComponent(account.user+':'+account.password))));
  headers.delete('cookie');headers.delete('origin');headers.delete('referer');
  const inner=new Request(destination,{method:req.method,headers,body:['GET','HEAD'].includes(req.method)?undefined:req.body,redirect:'manual'});
  const response=await legacyWorker.fetch(inner,env,ctx);
  if(response.status>=300&&response.status<400){
    const location=rewriteLocation(response.headers.get('location'),env,url.origin);
    if(!location)return fail('Redirection administrative refusée.',403);
    return redirect(location);
  }
  const headersOut=new Headers(response.headers);
  headersOut.delete('www-authenticate');headersOut.delete('set-cookie');
  headersOut.set('cache-control','no-store, private');
  headersOut.set('referrer-policy','no-referrer');
  headersOut.set('x-robots-tag','noindex, nofollow');
  headersOut.set('x-frame-options','DENY');
  const ct=headersOut.get('content-type')||'';
  if(!ct.includes('text/html')||req.method==='HEAD')return new Response(response.body,{status:response.status,headers:headersOut});
  const html=protectHtml(await response.text(),env,session);
  headersOut.delete('content-length');headersOut.delete('content-encoding');
  return new Response(html,{status:response.status,headers:headersOut});
}
export default {async fetch(req,env,ctx) {
  const p=new URL(req.url).pathname;
  if(p===PREFIX||p.startsWith(PREFIX+'/')||p.startsWith(API+'/'))return handle(req,env,ctx);
  return legacyWorker.fetch(req,env,ctx);
}};
