// Minecraft status is refreshed by the source API only every five minutes.
// Keep a short per-isolate snapshot to avoid duplicate external fetches during traffic bursts.
const SUCCESS_TTL_MS = 5 * 60 * 1000;
const FAILURE_TTL_MS = 2 * 60 * 1000;
const STATUS_USER_AGENT = 'CobblemonRealmsWiki/1.0 (+https://wiki.cobblemon-realms.com/)';
const snapshots = new Map();
const pending = new Map();

function response(snapshot) {
  return new Response(JSON.stringify(snapshot.body), {
    status: snapshot.status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': `public, max-age=${Math.round(snapshot.ttlMs / 1000)}`,
      'x-content-type-options': 'nosniff'
    }
  });
}

async function requestStatus(address, inviteCode) {
  try {
    const result = await fetch(`https://api.mcsrvstat.us/3/${encodeURIComponent(address)}`, {
      headers: {
        'User-Agent': STATUS_USER_AGENT,
        'Accept': 'application/json'
      },
      signal: AbortSignal.timeout(8000),
      // Cache subrequests at Cloudflare's edge. Upstream already refreshes every 5 minutes.
      // Never cache rate-limited responses (429).
      cf: {
        cacheEverything: true,
        cacheTtlByStatus: { '200-299': 300, '403': 120, '404': 120, '429': 0, '500-599': 0 }
      }
    });
    if (!result.ok) throw new Error(`Minecraft status provider HTTP ${result.status}`);
    const data = await result.json();
    if (typeof data?.online !== 'boolean') throw new Error('Invalid Minecraft status response');
    const online = data.online;
    return {
      status: 200,
      ttlMs: SUCCESS_TTL_MS,
      body: {
        online,
        players: {
          online: online && Number.isFinite(data.players?.online) ? data.players.online : 0,
          max: online && Number.isFinite(data.players?.max) ? data.players.max : 0
        },
        icon: typeof data.icon === 'string' ? data.icon : null,
        joinUrl: `https://discord.gg/${inviteCode}`
      }
    };
  } catch {
    // Provider errors must never be reported as a confirmed offline Minecraft server.
    return {
      status: 503,
      ttlMs: FAILURE_TTL_MS,
      body: { unavailable: true, error: 'Minecraft status provider temporarily unavailable' }
    };
  }
}

export async function handleServerStatus(request, address, inviteCode) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405, headers: { allow: 'GET, HEAD' } });
  }
  const key = address;
  const now = Date.now();
  let snapshot = snapshots.get(key);
  if (!snapshot || now >= snapshot.expiresAt) {
    let work = pending.get(key);
    if (!work) {
      work = requestStatus(address, inviteCode).then((result) => {
        const entry = { ...result, expiresAt: Date.now() + result.ttlMs };
        snapshots.set(key, entry);
        return entry;
      }).finally(() => pending.delete(key));
      pending.set(key, work);
    }
    snapshot = await work;
  }
  const result = response(snapshot);
  return request.method === 'HEAD' ? new Response(null, { status: result.status, headers: result.headers }) : result;
}
