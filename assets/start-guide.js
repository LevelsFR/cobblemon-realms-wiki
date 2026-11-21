(() => {
  'use strict';
  const box = document.querySelector('[data-start-guide]');
  if (!box) return;
  const lang = box.dataset.guideLanguage === 'fr' ? 'fr' : 'en';
  const version = box.dataset.guideVersion || 'unknown';
  const key = 'cobblemon-wiki-start-guide-' + version;
  const checkboxes = [...box.querySelectorAll('input[type="checkbox"][data-step]')];
  const status = box.querySelector('.wiki-starter-progress');
  const meter = box.querySelector('[role="progressbar"]');
  const fill = meter?.querySelector('span');
  let saved = [];
  try {
    const state = JSON.parse(localStorage.getItem(key) || '[]');
    saved = Array.isArray(state) ? state : [];
  } catch { saved = []; }
  const completed = new Set(saved.filter(s => typeof s === 'string'));
  function refresh() {
    const count = checkboxes.filter(item => item.checked).length;
    const total = checkboxes.length;
    if (status) status.textContent = lang === 'fr'
      ? `${count} étape${count > 1 ? 's' : ''} sur ${total} terminée${count > 1 ? 's' : ''}`
      : `${count} of ${total} milestones completed`;
    if (meter) meter.setAttribute('aria-valuenow', String(count));
    if (fill) fill.style.width = total ? (count / total * 100) + '%' : '0%';
  }
  for (const item of checkboxes) {
    item.checked = completed.has(item.dataset.step);
    item.addEventListener('change', () => {
      if (item.checked) completed.add(item.dataset.step);
      else completed.delete(item.dataset.step);
      try { localStorage.setItem(key, JSON.stringify([...completed])); } catch {}
      refresh();
    });
  }
  box.querySelector('.wiki-starter-reset')?.addEventListener('click', () => {
    completed.clear();
    for (const item of checkboxes) item.checked = false;
    try { localStorage.removeItem(key); } catch {}
    refresh();
  });
  refresh();
})();
