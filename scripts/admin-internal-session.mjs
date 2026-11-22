// Server-only V8 authentication context. The symbol is never serialized into HTTP.
// Both legacy auth adapters receive this context only from a verified V8 OAuth session.
const internalSession = Symbol('cr-wiki-internal-admin-session');

export function withInternalAdminSession(env, githubSession) {
  if (!githubSession || typeof githubSession.login !== 'string' ||
      !/^[a-zA-Z0-9-]{1,39}$/.test(githubSession.login) ||
      !['owner', 'wiki'].includes(githubSession.role) ||
      !Number.isSafeInteger(githubSession.id) || githubSession.id < 1) {
    throw new TypeError('Invalid internal GitHub admin identity');
  }
  return Object.assign(Object.create(env), {
    [internalSession]: Object.freeze({
      user: githubSession.login,
      role: githubSession.role,
      githubId: githubSession.id
    })
  });
}

export function getInternalAdminSession(env) {
  return env?.[internalSession] || null;
}
