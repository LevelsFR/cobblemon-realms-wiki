import legacyWorker from './worker-entry-v7.mjs';
import { withInternalAdminSession } from './admin-internal-session.mjs';

// V8 is deliberately opt-in. Existing Basic Auth routes and their deployment remain unchanged.
const PREFIX = '/osadmin';
const VERSION = 'v8.2-oauth-diagnostics-20261122';
const PREVIOUS_ADMIN = '/admin';
const OLD_V8 = '/__cr-admin/v8';
const API = '/api/admin/v8';
const COOKIE = '__Host-cr_v8';
const STATE_COOKIE = '__Host-cr_v8_oauth_state';
const enc = new TextEncoder();
const safe = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function reply(body, status=200, type='text/html; charset=utf-8') {
  return new Response(body,{status,headers:{'content-type':type,'cache-control':'no-store, private','x-robots-tag':'noindex, nofollow','x-content-type-options':'nosniff','referrer-policy':'no-referrer','x-frame-options':'DENY','x-cr-admin-version':VERSION}});
}
function redirect(url, cookies=[]) { const headers=new Headers({'location':url,'cache-control':'no-store, private','referrer-policy':'no-referrer','x-robots-tag':'noindex, nofollow'});for(const c of cookies)headers.append('set-cookie',c);return new Response(null,{status:303,headers}); }
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
  return reply('<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cobblemon Realms | Administration</title><script src="/assets/wiki-admin-v8-theme.js?v=1"></script><link rel="stylesheet" href="/assets/wiki-admin-v8.css?v=10"></head><body class="v8-login"><main class="v8-login-card"><div class="v8-login-brand"><img src="/assets/cobblemon-realms-server-icon.svg" alt="" width="47" height="47"><div><strong>Cobblemon Realms</strong><small>Wiki officiel · Administration</small></div></div><span class="v8-eyebrow">COBBLEMON REALMS</span><h1>Administration du wiki</h1><p>Connectez-vous avec un compte GitHub explicitement autorisé. Aucun mot de passe du wiki ne transite par votre navigateur.</p>'+(ready?'<a class="v8-github-button" href="'+PREFIX+'/oauth/start">Se connecter avec GitHub</a>':'<p class="v8-alert">GitHub OAuth V8 n’est pas encore configuré. L’administration actuelle reste disponible séparément.</p>')+'<p class="v8-note">Accès réservé aux mainteneurs autorisés.</p><div class="v8-login-footer"><a href="/" target="_blank" rel="noopener noreferrer">Consulter le wiki public</a></div></main></body></html>');
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
  if(!role)return fail('Compte GitHub vérifié : '+profile.login+'. Ce compte ne figure pas dans les autorisations du Worker actuellement déployé. Version : '+VERSION+'. Vérifiez la variable CR_V8_GITHUB_EDITORS et le dernier déploiement Cloudflare.',403);
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
  out=out.replace('</head>','<meta name="cr-v8-csrf" content="'+safe(session.csrf)+'"><script src="/assets/wiki-admin-v8-theme.js?v=1"></script><link rel="stylesheet" href="/assets/wiki-admin-v8.css?v=10"><script defer src="/assets/wiki-admin-v8-csrf.js?v=1"></script><script defer src="/assets/wiki-admin-v8-workspace.js?v=1"></script></head>');
  const banner='<div class="v8-banner">'
    +'<a class="v8-brand" href="/" target="_blank" rel="noopener noreferrer" aria-label="Ouvrir le wiki public">'
    +'<img class="v8-brand-icon" src="/assets/cobblemon-realms-server-icon.svg" alt="" width="38" height="38">'
    +'<span class="v8-brand-copy"><span class="v8-brand-name">Cobblemon Realms</span><span class="v8-brand-subtitle">Administration du wiki</span></span></a>'
    +'<div class="v8-header-actions"><a class="v8-header-link" href="/" target="_blank" rel="noopener noreferrer">↗ Wiki public</a>'
    +'<button type="button" class="v8-theme-toggle" aria-label="Changer le thème" title="Changer le thème">☀</button>'
    +'<span class="v8-identity" data-v8-user="'+safe(session.login)+'"><span class="v8-user-dot" aria-hidden="true"></span>'+safe(session.login)
    +'<span class="v8-identity-role">· '+safe(session.role)+'</span></span>'
    +'<form method="post" action="'+PREFIX+'/logout"><input type="hidden" name="cr_v8_csrf" value="'+safe(session.csrf)+'"><button type="submit">Déconnexion</button></form></div></div>';
  out=out.replace(/<body([^>]*)>/i,'<body$1>'+banner);
  // Prevent unintentional disclosure of the retired path token through legacy HTML.
  return out;
}
// Return stable reason codes, never the expected or supplied secret value.
// This is a synchronizer-token CSRF defense: a random token tied to the signed
// 8-hour, HttpOnly, SameSite=Strict GitHub session. Origin/Referer are
// intentionally not authorization gates: some privacy browsers and reverse
// proxies supply an Origin different from Request.url, even on valid admin
// submissions. Fetch Metadata is an additional cross-site defense when present.
function fetchMetadataFailure(req) {
  const fetchSite=(req.headers.get('sec-fetch-site')||'').toLowerCase();
  return fetchSite && fetchSite!=='same-origin' && fetchSite!=='none' ? 'site' : null;
}
async function csrfFailureReason(req,session) {
  const siteFailure=fetchMetadataFailure(req);
  if(siteFailure)return siteFailure;
  const ct=(req.headers.get('content-type')||'').toLowerCase();
  if(ct.includes('application/json'))return req.headers.get('x-cr-v8-csrf')===session.csrf?null:'token';
  if(!ct.includes('application/x-www-form-urlencoded')&&!ct.includes('multipart/form-data'))return 'content-type';
  try {
    const form=await req.clone().formData();
    const supplied=form.get('cr_v8_csrf');
    if(typeof supplied!=='string'||!supplied)return 'missing-token';
    return supplied===session.csrf?null:'stale-token';
  }catch{return 'body';}
}
function csrfDenied(reason) {
  // No tokens or request body values are logged, reflected or returned.
  const message=reason==='stale-token'
    ? 'Le formulaire utilise un ancien jeton de sécurité, probablement après une nouvelle connexion. Actualisez la page des retours et recommencez.'
    : reason==='missing-token'
      ? 'Le formulaire est incomplet (jeton de sécurité absent). Actualisez la page des retours et recommencez.'
      : 'Vérification CSRF refusée ('+reason+'). Actualisez la page et recommencez.';
  const response=fail(message,403);
  response.headers.set('x-cr-admin-csrf-diagnostic',reason);
  return response;
}
function allowedTokenRefresh(req) {
  // Readable only by the same-origin page (SOP); cross-site Fetch Metadata is denied.
  // The response is never cached and never sets CORS allow-origin headers.
  return !fetchMetadataFailure(req);
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
  if(req.method==='GET'&&url.pathname===API+'/csrf') {
    if(!allowedTokenRefresh(req))return fail('Origine de la requête non autorisée.',403);
    return reply(JSON.stringify({csrf:session.csrf}),200,'application/json; charset=utf-8');
  }
  if(req.method==='POST'&&url.pathname===PREFIX+'/logout') {
    { const reason=await csrfFailureReason(req,session);if(reason)return csrfDenied(reason); }
    return redirect(new URL(PREFIX,req.url).toString(),clearCookies());
  }
  if(!['GET','HEAD','POST'].includes(req.method))return fail('Méthode non autorisée.',405);
  if(req.method==='POST') { const reason=await csrfFailureReason(req,session);if(reason)return csrfDenied(reason); }
  const newPath=legacyPath(url.pathname,env);if(!newPath)return fail('Route V8 inconnue.',404);
  const destination=new URL(req.url);destination.pathname=newPath;
  const headers=new Headers(req.headers);
  headers.delete('authorization');
  headers.delete('cookie');headers.delete('origin');headers.delete('referer');
  const inner=new Request(destination,{method:req.method,headers,body:['GET','HEAD'].includes(req.method)?undefined:req.body,...(req.method==='POST'?{duplex:'half'}:{}),redirect:'manual'});
  // Directly delegate the verified GitHub role, without Basic Auth or shared credentials.
  const response=await legacyWorker.fetch(inner,withInternalAdminSession(env,session),ctx);
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
  headersOut.set('x-cr-admin-version',VERSION);
  const ct=headersOut.get('content-type')||'';
  if(!ct.includes('text/html')||req.method==='HEAD')return new Response(response.body,{status:response.status,headers:headersOut});
  const html=protectHtml(await response.text(),env,session);
  headersOut.delete('content-length');headersOut.delete('content-encoding');
  return new Response(html,{status:response.status,headers:headersOut});
}
export default {async fetch(req,env,ctx) {
  const p=new URL(req.url).pathname;
  if(p===OLD_V8||p===OLD_V8+'/'||p===PREVIOUS_ADMIN||p===PREVIOUS_ADMIN+'/') {
    const target=new URL(PREFIX,req.url);return redirect(target.toString());
  }
  if(p===PREFIX||p.startsWith(PREFIX+'/')||p.startsWith(API+'/'))return handle(req,env,ctx);
  return legacyWorker.fetch(req,env,ctx);
}};
