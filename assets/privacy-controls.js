(() => {
  'use strict';
  const key = 'cr-wiki-analytics-opt-out';
  const french = document.documentElement.lang === 'fr';
  const buttons = document.querySelectorAll('[data-analytics-toggle]');
  if (!buttons.length) return;

  const browserOptOut = () => navigator.globalPrivacyControl === true ||
    navigator.doNotTrack === '1' || window.doNotTrack === '1';

  function optedOut() {
    try { return window.localStorage.getItem(key) === '1'; }
    catch { return false; }
  }

  function update() {
    const forced = browserOptOut();
    const disabled = forced || optedOut();
    for (const button of buttons) {
      button.disabled = forced;
      button.setAttribute('aria-pressed', String(disabled));
      button.textContent = forced
        ? (french ? 'Statistiques désactivées par le navigateur' : 'Analytics disabled by browser')
        : disabled
          ? (french ? 'Activer les statistiques facultatives' : 'Enable optional analytics')
          : (french ? 'Désactiver les statistiques facultatives' : 'Disable optional analytics');
    }
  }

  for (const button of buttons) {
    button.addEventListener('click', () => {
      if (browserOptOut()) return;
      try {
        window.localStorage.setItem(key, optedOut() ? '0' : '1');
        update();
      } catch {
        button.textContent = french
          ? "Impossible d'enregistrer ce choix dans le navigateur."
          : 'Unable to save this preference in your browser.';
      }
    });
  }
  update();
})();
