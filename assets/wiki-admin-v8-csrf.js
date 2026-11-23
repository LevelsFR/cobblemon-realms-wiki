(() => {
  // A second GitHub login in another tab rotates the HttpOnly session and CSRF token.
  // Always fetch the token tied to the *current* cookie before posting a native form.
  const endpoint = '/api/admin/v8/csrf';
  const ready = new WeakSet();

  document.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;
    if (form.method.toLowerCase() !== 'post') return;
    const action = new URL(form.action, location.href);
    if (action.origin !== location.origin) return;
    if (!(action.pathname.startsWith('/api/admin/v8/') || action.pathname === '/osadmin/logout')) return;
    const field = form.querySelector('input[name="cr_v8_csrf"]');
    if (!field) return;
    if (ready.has(form)) {
      ready.delete(form);
      return;
    }

    event.preventDefault();
    const submitter = event.submitter;
    try {
      const response = await fetch(endpoint, {
        credentials: 'same-origin',
        cache: 'no-store',
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('expired');
      const body = await response.json();
      if (!body || typeof body.csrf !== 'string' || !body.csrf) throw new Error('invalid');
      field.value = body.csrf;
      ready.add(form);
      if (submitter && submitter.form === form) form.requestSubmit(submitter);
      else form.requestSubmit();
    } catch {
      ready.delete(form);
      const banner = document.createElement('p');
      banner.setAttribute('role', 'alert');
      banner.textContent = 'Session administrative à actualiser. Rechargez cette page et reconnectez-vous si nécessaire.';
      banner.style.cssText = 'color:#d97706;margin:.75rem 0';
      form.prepend(banner);
    }
  }, true);
})();
