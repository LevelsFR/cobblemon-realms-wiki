(() => {
  'use strict';

  // The email is deliberately not printed into static HTML, markdown or search indexes.
  // This is interface-level protection against casual exposure, not a promise of anti-scraping.
  const contactCharCodes = [108,101,118,101,108,115,99,114,97,102,116,55,64,103,109,97,105,108,46,99,111,109];
  const email = () => String.fromCharCode(...contactCharCodes);

  function updateContact(details) {
    const target = details.querySelector('[data-wiki-contact-email]');
    if (!target) return;
    target.replaceChildren();
    if (!details.open) return;
    const address = email();
    const link = document.createElement('a');
    link.href = `mailto:${address}`;
    link.textContent = address;
    link.setAttribute('aria-label', document.documentElement.lang === 'fr'
      ? 'Envoyer un e-mail au responsable du wiki'
      : 'Email the wiki operator');
    target.append(link);
  }

  document.querySelectorAll('details[data-contact-reveal]').forEach((details) => {
    details.addEventListener('toggle', () => updateContact(details));
    if (details.open) updateContact(details);
  });
})();
