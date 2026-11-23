(() => {
  // V8-only editorial workspace. The original admin modules remain responsible
  // for data, forms, permissions and routing. This layer only reorganizes UI.
  if (location.pathname !== '/osadmin') return;

  const DEFINITIONS = [
    { id: 'overview', title: 'Accueil', group: 'daily', detail: 'Ce qui demande votre attention.' },
    { id: 'feedback', title: 'Retours des joueurs', group: 'daily', detail: 'Lire, traiter et conserver les commentaires.' },
    { id: 'to-review', title: 'Articles à corriger', group: 'daily', detail: 'Prioriser les pages qui nécessitent une vérification.' },
    { id: 'pages', title: 'Tous les articles', group: 'daily', detail: 'Retrouver une page et accéder à ses réglages.' },
    { id: 'search-quality', title: 'Recherches des joueurs', group: 'daily', detail: 'Comprendre ce que les joueurs ne trouvent pas.' },
    { id: 'badges', title: 'Apparence des articles', group: 'edit', detail: 'Changer les badges, filtres et statuts affichés.' },
    { id: 'inspector', title: 'Détails d’un article', group: 'edit', detail: 'Réunir les informations et réglages d’une page.' },
    { id: 'synonyms', title: 'Mots-clés et synonymes', group: 'edit', detail: 'Rendre les articles plus faciles à trouver.' },
    { id: 'redirects', title: 'Anciens liens', group: 'edit', detail: 'Réorienter les visiteurs vers la bonne page.' },
    { id: 'stats', title: 'Statistiques de visite', group: 'insights', detail: 'Voir les usages du wiki.' },
    { id: 'audit', title: 'Contrôles du site', group: 'advanced', detail: 'Contrôler les liens, images et pages manquantes.' },
    { id: 'translation-drift', title: 'Écarts EN / FR', group: 'advanced', detail: 'Comparer les versions traduites.' },
    { id: 'readiness', title: 'Contrôle avant publication', group: 'advanced', detail: 'Vérifier les alertes avant une release.' },
    { id: 'taxonomy', title: 'Classement interne', group: 'advanced', detail: 'Vérifier les thèmes utilisés pour lier les pages.' },
    { id: 'logs', title: 'Historique des actions', group: 'advanced', detail: 'Consulter les opérations administratives enregistrées.' },
    { id: 'maintenance', title: 'Maintenance technique', group: 'advanced', detail: 'Diagnostiquer les composants du site.' },
    { id: 'security', title: 'Sécurité', group: 'advanced', detail: 'Outils réservés au propriétaire.' }
  ];
  const byId = new Map(DEFINITIONS.map(item => [item.id, item]));
  const params = new URLSearchParams(location.search);
  const activeId = params.get('tab') || 'overview';
  const identity = document.querySelector('.v8-identity');
  const account = (identity?.dataset.v8User || 'anonymous').toLowerCase();
  const key = 'cr-wiki-admin-workspace-v1:' + account;
  const defaults = () => ({
    mode: 'simple',
    home: 'overview',
    favorites: ['feedback', 'to-review', 'pages', 'search-quality']
  });
  function normalize(raw) {
    const initial = defaults();
    if (!raw || typeof raw !== 'object') return initial;
    const favorites = Array.isArray(raw.favorites)
      ? [...new Set(raw.favorites.filter(id => byId.has(id)))].slice(0, 8)
      : initial.favorites;
    return {
      mode: raw.mode === 'full' ? 'full' : 'simple',
      home: ['overview', 'feedback', 'to-review', 'pages', 'search-quality'].includes(raw.home) ? raw.home : 'overview',
      favorites
    };
  }
  function load() {
    try { return normalize(JSON.parse(localStorage.getItem(key))); }
    catch { return defaults(); }
  }
  let prefs = load();
  const nav = document.querySelector('.admin-nav');
  const main = document.querySelector('.admin-main');
  const topbar = main?.querySelector('.admin-topbar');
  if (!nav || !topbar || !identity) return;
  const available = new Map();
  function collectLinks() {
    for (const anchor of nav.querySelectorAll('a[href]')) {
      const url = new URL(anchor.href, location.origin);
      const id = url.searchParams.get('tab');
      if (url.origin === location.origin && byId.has(id) && !available.has(id))
        available.set(id, url.pathname + url.search);
    }
  }
  collectLinks();
  if (!available.has('overview')) available.set('overview', '/osadmin?tab=overview');

  function href(id) { return available.get(id) || null; }
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function makeLink(id, className) {
    if (!href(id)) return null;
    const item = byId.get(id);
    const a = el('a', className || '');
    a.href = href(id);
    a.dataset.v8Tab = id;
    a.textContent = item.title;
    a.title = item.detail;
    if (id === activeId) {
      a.classList.add('is-active');
      a.setAttribute('aria-current', 'page');
    }
    return a;
  }
  function section(title, ids, className) {
    const group = el('div', 'nav-group ' + (className || ''));
    group.appendChild(el('small', '', title));
    let count = 0;
    for (const id of ids) {
      const item = makeLink(id);
      if (item) { group.appendChild(item); count++; }
    }
    return count ? group : null;
  }
  function renderNav() {
    const favorites = prefs.favorites.filter(id => available.has(id));
    const favoriteSet = new Set(favorites);
    const content = document.createDocumentFragment();
    const favoritesNode = section('Mes raccourcis', favorites, 'v8-nav-favorites');
    if (favoritesNode) content.appendChild(favoritesNode);
    const groups = [
      ['Pour les joueurs', 'daily'],
      ['Personnaliser le wiki', 'edit'],
      ['Comprendre les visites', 'insights']
    ];
    for (const [label, name] of groups) {
      const ids = DEFINITIONS.filter(d => d.group === name && !favoriteSet.has(d.id)).map(d => d.id);
      const group = section(label, ids);
      if (group) content.appendChild(group);
    }
    const advancedIds = DEFINITIONS.filter(d => d.group === 'advanced' && available.has(d.id)).map(d => d.id);
    if (advancedIds.length) {
      const details = el('details', 'v8-nav-advanced');
      if (prefs.mode === 'full' || advancedIds.includes(activeId)) details.open = true;
      details.appendChild(el('summary', '', 'Outils avancés'));
      const group = section('Administration et diagnostic', advancedIds);
      if (group) details.appendChild(group);
      content.appendChild(details);
    }
    nav.replaceChildren(content);
    nav.dataset.v8Organized = 'true';
  }

  function makeQuickLink(id, subtitle) {
    const node = makeLink(id, 'v8-workspace-action');
    if (!node) return null;
    node.replaceChildren(el('strong', '', byId.get(id).title), el('small', '', subtitle || byId.get(id).detail));
    return node;
  }
  const descriptions = {
    overview: ['Votre espace de travail', 'Commencez par les demandes des joueurs et les articles à améliorer. Les indicateurs détaillés restent disponibles dans les rubriques dédiées.'],
    feedback: ['Répondre aux besoins des joueurs', '« Lu » signifie que le retour est pris en compte. « Résolu » signifie que le problème a été corrigé. « Archiver » le conserve sans le laisser dans les demandes en cours.'],
    'to-review': ['Choisir quoi corriger en premier', 'Ouvrez chaque page, vérifiez son contenu puis reportez son prochain contrôle si tout est à jour. Ce report ne change jamais le texte de la page.'],
    pages: ['Retrouver et adapter un article', 'Les badges et filtres se modifient ici. Pour corriger un paragraphe, une recette ou une information, utilisez le fichier Markdown sur GitHub.'],
    'search-quality': ['Comprendre les recherches des joueurs', 'Repérez les noms introuvables, vérifiez si le guide existe puis ajoutez au besoin un synonyme ou complétez l’article.'],
    badges: ['Adapter ce que voient les joueurs', 'Changez les badges, les filtres et le statut des pages sans modifier leur texte. Pour le contenu des guides, passez par les fichiers Markdown.'],
    synonyms: ['Améliorer la recherche', 'Associez les mots des joueurs aux noms utilisés par les guides. Un synonyme prend effet sans reconstruire les articles.'],
    redirects: ['Réparer les anciens liens', 'Reliez une ancienne adresse à une page existante pour éviter les erreurs 404.'],
    inspector: ['Vérifier une page précise', 'Retrouvez ses retours, son état et ses réglages au même endroit. La modification du texte reste dans le fichier GitHub de l’article.'],
    stats: ['Comprendre la fréquentation', 'Consultez les pages et recherches les plus utilisées pour choisir les prochains guides à améliorer.']
  };
  const suggestions = {
    overview: ['feedback', 'to-review', 'pages', 'search-quality'],
    feedback: ['to-review', 'pages', 'synonyms'],
    pages: ['feedback', 'badges', 'inspector'],
    'to-review': ['feedback', 'pages', 'inspector'],
    'search-quality': ['synonyms', 'pages', 'feedback'],
    badges: ['pages', 'inspector', 'feedback'],
    inspector: ['pages', 'feedback', 'badges'],
    synonyms: ['search-quality', 'pages'],
    redirects: ['pages', 'stats'],
    stats: ['search-quality', 'feedback']
  };
  function paintContext() {
    const heading = topbar.querySelector('h1');
    if (heading && byId.has(activeId) && heading.textContent !== byId.get(activeId).title)
      heading.textContent = byId.get(activeId).title;
    const details = descriptions[activeId] || [
      byId.get(activeId)?.title || 'Administration',
      byId.get(activeId)?.detail || 'Outils de gestion complémentaires du wiki.'
    ];
    let context = main.querySelector(':scope > .v8-workspace-context');
    if (!context) {
      context = el('section', 'v8-workspace-context');
      topbar.insertAdjacentElement('afterend', context);
    }
    const signature = activeId + ':' + details.join('|');
    if (context.dataset.signature !== signature) {
      context.replaceChildren(el('strong', '', details[0]), el('p', '', details[1]));
      const links = el('div', 'v8-context-links');
      for (const id of suggestions[activeId] || ['overview', 'pages']) {
        const link = makeLink(id, 'v8-context-link');
        if (link && id !== activeId) links.appendChild(link);
      }
      context.appendChild(links);
      context.dataset.signature = signature;
    }
    let workflows = main.querySelector(':scope > .v8-workspace-workflows');
    if (activeId !== 'overview') {
      workflows?.remove();
      return;
    }
    if (!workflows) {
      workflows = el('section', 'v8-workspace-workflows');
      context.insertAdjacentElement('afterend', workflows);
    }
    if (!workflows.dataset.ready) {
      workflows.appendChild(el('h2', '', 'Que souhaitez-vous faire ?'));
      const cards = el('div', 'v8-workspace-actions');
      for (const id of ['feedback', 'to-review', 'pages', 'search-quality']) {
        const card = makeQuickLink(id);
        if (card) cards.appendChild(card);
      }
      workflows.appendChild(cards);
      workflows.dataset.ready = 'true';
    }
  }

  function persist() {
    prefs = normalize(prefs);
    try { localStorage.setItem(key, JSON.stringify(prefs)); } catch {}
    renderNav();
  }
  function setupPersonalization() {
    const bar = document.querySelector('.v8-header-actions');
    if (!bar || bar.querySelector('.v8-personalize')) return;
    const open = el('button', 'v8-personalize', 'Personnaliser');
    open.type = 'button';
    open.title = 'Personnaliser mes raccourcis et mon écran de départ';
    const themeButton = bar.querySelector('.v8-theme-toggle');
    if (themeButton) themeButton.before(open);
    else bar.prepend(open);
    const dialog = el('dialog', 'v8-workspace-dialog');
    dialog.setAttribute('aria-label', 'Personnaliser mon administration');
    const inner = el('div', 'v8-workspace-dialog-inner');
    const head = el('div', 'v8-workspace-dialog-head');
    head.appendChild(el('h2', '', 'Mon espace de travail'));
    head.appendChild(el('p', '', 'Ces préférences restent dans ce navigateur et sont séparées pour chaque compte GitHub. Elles ne changent pas les droits.'));
    inner.appendChild(head);
    const modeLabel = el('label', 'v8-workspace-field', 'Affichage de la navigation');
    const mode = el('select');
    const optSimple = new Option('Simple, pour les tâches courantes', 'simple');
    const optFull = new Option('Complet, avec les outils avancés visibles', 'full');
    mode.add(optSimple, optFull); mode.value = prefs.mode;
    modeLabel.appendChild(mode); inner.appendChild(modeLabel);
    const homeLabel = el('label', 'v8-workspace-field', 'Page à ouvrir au démarrage');
    const home = el('select');
    for (const id of ['overview', 'feedback', 'to-review', 'pages', 'search-quality']) {
      if (available.has(id)) home.add(new Option(byId.get(id).title, id));
    }
    home.value = prefs.home;
    homeLabel.appendChild(home); inner.appendChild(homeLabel);
    inner.appendChild(el('h3', '', 'Mes raccourcis'));
    inner.appendChild(el('p', 'v8-workspace-small', 'Cochez vos outils les plus utilisés, puis changez leur ordre avec les flèches. Maximum 8 raccourcis.'));
    const chooser = el('div', 'v8-workspace-chooser');
    const order = el('div', 'v8-workspace-fav-order');
    let draft = prefs.favorites.filter(id => available.has(id));
    const selectable = DEFINITIONS.filter(d => available.has(d.id));
    function renderOptions() {
      chooser.replaceChildren();
      for (const item of selectable) {
        const label = el('label', 'v8-workspace-check');
        const input = document.createElement('input');
        input.type = 'checkbox'; input.value = item.id;
        input.checked = draft.includes(item.id);
        input.addEventListener('change', () => {
          if (input.checked && !draft.includes(item.id)) {
            if (draft.length >= 8) { input.checked = false; return; }
            draft.push(item.id);
          } else draft = draft.filter(id => id !== item.id);
          renderOptions(); renderOrder();
        });
        label.appendChild(input);
        label.appendChild(el('span', '', item.title));
        chooser.appendChild(label);
      }
    }
    function renderOrder() {
      order.replaceChildren();
      if (!draft.length) { order.appendChild(el('p', 'v8-workspace-small', 'Aucun raccourci sélectionné.')); return; }
      draft.forEach((id, index) => {
        const row = el('div', 'v8-workspace-favorite');
        row.appendChild(el('span', '', byId.get(id).title));
        for (const [label, movement] of [['↑', -1], ['↓', 1]]) {
          const button = el('button', 'v8-workspace-order', label);
          button.type = 'button';
          button.title = movement < 0 ? 'Déplacer vers le haut' : 'Déplacer vers le bas';
          button.disabled = index + movement < 0 || index + movement >= draft.length;
          button.addEventListener('click', () => {
            const other = index + movement;
            [draft[index], draft[other]] = [draft[other], draft[index]];
            renderOrder();
          });
          row.appendChild(button);
        }
        order.appendChild(row);
      });
    }
    renderOptions(); renderOrder();
    inner.appendChild(chooser); inner.appendChild(order);
    const footer = el('div', 'v8-workspace-dialog-actions');
    const reset = el('button', 'v8-workspace-secondary', 'Réinitialiser');
    reset.type = 'button';
    const cancel = el('button', 'v8-workspace-secondary', 'Fermer');
    cancel.type = 'button';
    const save = el('button', 'v8-workspace-primary', 'Enregistrer');
    save.type = 'button';
    footer.append(reset, cancel, save);
    inner.appendChild(footer); dialog.appendChild(inner); document.body.appendChild(dialog);
    open.addEventListener('click', () => {
      mode.value = prefs.mode; home.value = prefs.home;
      draft = prefs.favorites.filter(id => available.has(id));
      renderOptions(); renderOrder();
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else dialog.setAttribute('open', '');
    });
    cancel.addEventListener('click', () => dialog.close());
    save.addEventListener('click', () => {
      prefs = { mode: mode.value, home: home.value, favorites: draft.slice() };
      persist(); dialog.close();
    });
    reset.addEventListener('click', () => {
      prefs = defaults(); persist(); dialog.close();
    });
    dialog.addEventListener('click', event => {
      if (event.target === dialog) dialog.close();
    });
  }

  // Public page-updates.json already maps each exact public article to its
  // original Markdown file. Only known source files get GitHub edit links.
  let sources = null;
  const sourceTabs = new Set(['feedback', 'pages', 'to-review', 'inspector']);
  function editUrl(source) {
    if (typeof source !== 'string' || !source.endsWith('.md')) return null;
    const parts = source.split('/');
    if (!parts.length || parts.some(part => !part || part === '.' || part === '..')) return null;
    return 'https://github.com/LevelsFR/cobblemon-realms-wiki/edit/main/' + parts.map(encodeURIComponent).join('/');
  }
  function appendSourceLinks() {
    if (!sources) return;
    for (const code of main.querySelectorAll('tr td code, .page-card code, .v4-row code, .grid-2 section code')) {
      const path = code.textContent.trim();
      const file = sources.get(path);
      const target = file && editUrl(file);
      if (!target) continue;
      const container = code.closest('tr') || code.closest('.page-card') || code.closest('.v4-row') || code.closest('section');
      if (!container || container.querySelector('.v8-edit-source')) continue;
      const actions = container.querySelector('.inline-form, .admin-actions') || container;
      const link = el('a', 'button mini v8-edit-source', '✎ Modifier le texte');
      link.href = target; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.title = 'Ouvrir le Markdown dans GitHub. La modification nécessite les permissions de dépôt appropriées.';
      actions.appendChild(link);
    }
  }
  async function fetchSources() {
    if (!sourceTabs.has(activeId)) return;
    try {
      const response = await fetch('/page-updates.json', { credentials:'same-origin', cache:'force-cache' });
      if (!response.ok) return;
      const pages = await response.json();
      if (!Array.isArray(pages)) return;
      sources = new Map(pages.filter(x => x && typeof x.path === 'string' && editUrl(x.source)).map(x => [x.path, x.source]));
      appendSourceLinks();
    } catch {}
  }

  // Destructive actions need clear confirmation. All server-side permission
  // checks remain unchanged; this is only an additional accidental-click guard.
  document.addEventListener('click', event => {
    const button = event.target.closest?.('button');
    if (!button) return;
    const form = button.closest('form');
    const isPermanentDelete = button.name === 'action' && button.value === 'delete';
    const isPurge = form?.querySelector('input[name="action"][value="purge-archived"]') && button.type !== 'button';
    if ((isPermanentDelete || isPurge) &&
        !window.confirm('Cette suppression est définitive et ne peut pas être annulée. Continuer ?')) {
      event.preventDefault(); event.stopImmediatePropagation();
    }
  }, true);

  function initialize() {
    collectLinks();
    if (!params.has('tab') && prefs.home !== 'overview' && available.has(prefs.home)) {
      location.replace(href(prefs.home));
      return;
    }
    renderNav();
    setupPersonalization();
    paintContext();
    fetchSources();
    // V4/V5 panels can replace main sections after their async state loads.
    // Restore the contextual guide without affecting their forms or state.
    let scheduled = false;
    new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      queueMicrotask(() => { scheduled = false; paintContext(); appendSourceLinks(); });
    }).observe(main, { childList:true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
})();
