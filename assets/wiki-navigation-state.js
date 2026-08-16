(() => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const language = document.documentElement.lang === 'fr' ? 'fr' : 'en';
  const storageKey = `cobblemon-wiki-sidebar-scroll:${language}`;
  let scheduled = false;

  function removeArticlePagination() {
    document.querySelectorAll('.article-pagination').forEach((element) => element.remove());
  }

  function savePosition() {
    try { sessionStorage.setItem(storageKey, String(Math.max(0, Math.round(sidebar.scrollTop)))); } catch {}
  }

  function scheduleSave() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      savePosition();
    });
  }

  function ensureActiveVisible() {
    const active = sidebar.querySelector('a[aria-current="page"]');
    if (!active) return;
    const sidebarRect = sidebar.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const padding = 12;
    if (activeRect.top < sidebarRect.top + padding || activeRect.bottom > sidebarRect.bottom - padding) {
      active.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }

  function restorePosition() {
    let stored = null;
    try { stored = sessionStorage.getItem(storageKey); } catch {}
    const position = Number(stored);
    if (stored !== null && Number.isFinite(position) && position >= 0) sidebar.scrollTop = position;
    requestAnimationFrame(() => requestAnimationFrame(ensureActiveVisible));
  }

  removeArticlePagination();
  const paginationObserver = new MutationObserver(removeArticlePagination);
  paginationObserver.observe(document.body, { childList: true, subtree: true });
  window.setTimeout(() => paginationObserver.disconnect(), 5000);

  sidebar.addEventListener('scroll', scheduleSave, { passive: true });
  sidebar.addEventListener('click', (event) => {
    if (event.target.closest('a')) savePosition();
  }, true);
  sidebar.querySelectorAll('details.nav-group').forEach((details) => {
    details.addEventListener('toggle', () => requestAnimationFrame(savePosition));
  });
  window.addEventListener('pagehide', savePosition);

  restorePosition();
})();
