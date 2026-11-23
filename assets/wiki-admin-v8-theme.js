(() => {
  // The public wiki uses the same key. No auth data or CSRF tokens are read.
  const key = 'cobblemon-wiki-theme';
  const root = document.documentElement;
  const current = () => root.dataset.theme === 'light' ? 'light' : 'dark';
  const setTheme = theme => {
    root.dataset.theme = theme === 'light' ? 'light' : 'dark';
    document.querySelectorAll('.v8-theme-toggle').forEach(button => {
      const light = current() === 'light';
      button.textContent = light ? '☾' : '☀';
      button.setAttribute('aria-label', light ? 'Passer au mode sombre' : 'Passer au mode clair');
      button.setAttribute('title', light ? 'Mode sombre' : 'Mode clair');
      button.setAttribute('aria-pressed', String(light));
    });
  };
  try {
    setTheme(localStorage.getItem(key) === 'light' ? 'light' : 'dark');
  } catch {
    setTheme('dark');
  }
  document.addEventListener('click', event => {
    const button = event.target.closest?.('.v8-theme-toggle');
    if (!button) return;
    const next = current() === 'light' ? 'dark' : 'light';
    setTheme(next);
    try { localStorage.setItem(key, next); } catch {}
  });
  window.addEventListener('storage', event => {
    if (event.key === key) setTheme(event.newValue === 'light' ? 'light' : 'dark');
  });
  document.addEventListener('DOMContentLoaded', () => setTheme(current()));
})();
