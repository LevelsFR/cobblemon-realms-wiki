(() => {
  const toc = document.getElementById('page-toc');
  const tocNav = toc?.querySelector('nav');
  const article = document.querySelector('article');
  if (!toc || !tocNav) return;

  let isSyncingOpenState = false;

  function currentHashId() {
    try {
      return decodeURIComponent(location.hash.replace(/^#/, ''));
    } catch {
      return location.hash.replace(/^#/, '');
    }
  }

  function normalizeHash(link) {
    try {
      return decodeURIComponent(link.hash.replace(/^#/, ''));
    } catch {
      return link.hash.replace(/^#/, '');
    }
  }

  function slugify(value = '') {
    return String(value)
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'section';
  }

  function ensureHeadingId(heading) {
    if (heading.id) return heading.id;
    const base = slugify(heading.textContent.trim());
    let id = base;
    let suffix = 2;
    while (document.getElementById(id)) id = `${base}-${suffix++}`;
    heading.id = id;
    return id;
  }

  function isExtraEeveelutionsEnglishPage() {
    const path = location.pathname.replace(/\/+$/, '');
    return !/^\/fr-FR(?:\/|$)/i.test(path)
      && /\/pokemons-exclusives\/extra-eevee(?:\.html)?$/i.test(path);
  }

  function setOnlyOpenGroup(targetGroup) {
    isSyncingOpenState = true;
    tocNav.querySelectorAll('.page-toc-group').forEach((group) => {
      group.open = group === targetGroup;
    });
    isSyncingOpenState = false;
  }

  function createGroup(parentLink, childLinks) {
    const wrapper = document.createElement('details');
    wrapper.className = 'page-toc-group';

    const summary = document.createElement('summary');
    summary.className = 'page-toc-group-summary';
    summary.appendChild(parentLink);

    const chevron = document.createElement('span');
    chevron.className = 'page-toc-group-chevron';
    chevron.setAttribute('aria-hidden', 'true');
    summary.appendChild(chevron);

    const childList = document.createElement('div');
    childList.className = 'page-toc-children';
    childLinks.forEach((child) => childList.appendChild(child));

    wrapper.append(summary, childList);
    wrapper.querySelector(':scope > summary > a')?.addEventListener('click', () => {
      setOnlyOpenGroup(wrapper);
    });
    wrapper.addEventListener('toggle', () => {
      if (!isSyncingOpenState && wrapper.open) setOnlyOpenGroup(wrapper);
    });

    return wrapper;
  }

  function buildExtraEeveelutionsGroups() {
    if (!article || !isExtraEeveelutionsEnglishPage()) return false;
    if (tocNav.dataset.collapsibleReady === 'true') return true;

    const existingLinks = [...tocNav.querySelectorAll(':scope > a')];
    const pageTitle = article.querySelector(':scope > h1');
    const fakemonHeadings = [...article.querySelectorAll('h1')]
      .filter((heading) => heading !== pageTitle && !heading.closest('.hint'));

    if (!existingLinks.length || !fakemonHeadings.length) return false;

    const linkById = new Map(existingLinks.map((link) => [normalizeHash(link), link]));
    const claimedLinks = new Set();
    const groups = [];

    fakemonHeadings.forEach((parentHeading) => {
      const parentId = ensureHeadingId(parentHeading);
      const childHeadings = [];
      let cursor = parentHeading.nextElementSibling;

      while (cursor) {
        if (cursor.matches?.('h1')) break;
        if (cursor.matches?.('h2') && !cursor.closest('.hint')) childHeadings.push(cursor);
        cursor = cursor.nextElementSibling;
      }

      const childLinks = childHeadings
        .map((heading) => linkById.get(ensureHeadingId(heading)))
        .filter(Boolean);

      if (!childLinks.length) return;

      childLinks.forEach((link) => {
        claimedLinks.add(link);
        link.classList.remove('toc-depth-2');
        link.classList.add('toc-depth-3');
      });

      const parentLink = document.createElement('a');
      parentLink.href = `#${parentId}`;
      parentLink.textContent = parentHeading.textContent.trim();
      parentLink.className = 'toc-depth-2';

      groups.push({ firstChild: childLinks[0], wrapper: createGroup(parentLink, childLinks) });
    });

    if (!groups.length) return false;

    const groupByFirstChild = new Map(groups.map((group) => [group.firstChild, group.wrapper]));
    const fragment = document.createDocumentFragment();

    existingLinks.forEach((link) => {
      const group = groupByFirstChild.get(link);
      if (group) {
        fragment.appendChild(group);
        return;
      }
      if (!claimedLinks.has(link)) fragment.appendChild(link);
    });

    tocNav.replaceChildren(fragment);
    tocNav.dataset.collapsibleReady = 'true';
    tocNav.dataset.extraEeveelutions = 'true';
    syncOpenGroup();
    return true;
  }

  function buildGroups() {
    if (tocNav.dataset.collapsibleReady === 'true') return;
    if (buildExtraEeveelutionsGroups()) return;

    const links = [...tocNav.querySelectorAll(':scope > a')];
    if (links.length < 6 || !links.some((link) => link.classList.contains('toc-depth-3'))) return;

    const sections = [];
    links.forEach((link) => {
      const isChild = link.classList.contains('toc-depth-3');
      if (!isChild) {
        sections.push({ parent: link, children: [] });
        return;
      }

      const current = sections[sections.length - 1];
      if (current) current.children.push(link);
      else sections.push({ parent: null, children: [link] });
    });

    const fragment = document.createDocumentFragment();
    sections.forEach((section) => {
      if (!section.parent) {
        section.children.forEach((child) => fragment.appendChild(child));
        return;
      }

      if (!section.children.length) {
        fragment.appendChild(section.parent);
        return;
      }

      fragment.appendChild(createGroup(section.parent, section.children));
    });

    tocNav.replaceChildren(fragment);
    tocNav.dataset.collapsibleReady = 'true';
    syncOpenGroup();
  }

  function syncOpenGroup() {
    const activeLink = tocNav.querySelector('a.is-active')
      || (currentHashId() ? [...tocNav.querySelectorAll('a[href^="#"]')].find((link) => normalizeHash(link) === currentHashId()) : null);

    if (!activeLink) return;
    const group = activeLink.closest('.page-toc-group');
    if (group) setOnlyOpenGroup(group);
  }

  function start() {
    buildGroups();
    const observer = new MutationObserver(() => {
      if (tocNav.dataset.collapsibleReady !== 'true') buildGroups();
      syncOpenGroup();
    });
    observer.observe(tocNav, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });

    window.addEventListener('hashchange', syncOpenGroup);
    window.addEventListener('scroll', syncOpenGroup, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.requestAnimationFrame(start), { once: true });
  } else {
    window.requestAnimationFrame(start);
  }
})();
