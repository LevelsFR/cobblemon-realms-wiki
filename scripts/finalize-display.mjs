import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const out = path.join(root, 'dist');
const assetVersion = Date.now().toString(36);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
  }[character]));
}

function decodeEntities(value = '') {
  return String(value)
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, decimal) => String.fromCodePoint(parseInt(decimal, 10)))
    .replace(/&quot;/g, '"')
    .replace(/&#039;|&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');
}

function stripTags(value = '') {
  return decodeEntities(String(value).replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function renderCaption(raw = '') {
  const plain = decodeEntities(raw).trim();
  if (!plain) return '';
  let html = escapeHtml(plain);
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  html = html.replace(/_([^_]+)_/g, '<em>$1</em>');
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  return html;
}

function transformArticleImages(html) {
  return html.replace(/<article\b([^>]*)>([\s\S]*?)<\/article>/i, (full, articleAttributes, content) => {
    let article = content.replace(/<img\b([^>]*)>/gi, (image, attributes) => {
      if (/\bdata-wiki-image-ready\b/i.test(attributes)) return image;
      const altMatch = attributes.match(/\balt\s*=\s*(["'])([\s\S]*?)\1/i);
      const caption = renderCaption(altMatch?.[2] || '');
      const readyImage = image.replace(/<img\b/i, '<img data-wiki-image-ready="true"');
      return `<span class="wiki-image" role="figure">${readyImage}${caption ? `<small class="wiki-image-caption">${caption}</small>` : ''}</span>`;
    });

    article = article.replace(
      /<p>\s*((?:<span class="wiki-image" role="figure">[\s\S]*?<\/span>\s*)+)<\/p>/gi,
      '<div class="wiki-image-row">$1</div>'
    );

    return `<article${articleAttributes}>${article}</article>`;
  });
}

function compactNavigation(html) {
  return html.replace(/<details class="nav-group"(?:\s+open)?>([\s\S]*?)<\/details>/gi, (full, inner) => {
    const title = stripTags(inner.match(/<summary[^>]*>\s*<span>([\s\S]*?)<\/span>/i)?.[1] || '');
    const defaultOpen = title === 'Présentation'
      || title === 'Informations'
      || title === 'Presentation'
      || title === 'Information';
    return `<details class="nav-group"${defaultOpen ? ' open' : ''}>${inner}</details>`;
  });
}

function injectDisplayAssets(html) {
  if (!html.includes('/assets/wiki-display-fixes.css')) {
    html = html.replace('</head>', `  <link rel="stylesheet" href="/assets/wiki-display-fixes.css?v=${assetVersion}">\n</head>`);
  }
  if (!html.includes('/assets/wiki-navigation-state.js')) {
    html = html.replace('</body>', `  <script defer src="/assets/wiki-navigation-state.js?v=${assetVersion}"></script>\n</body>`);
  }
  return html;
}

let changed = 0;
for (const file of walk(out).filter((entry) => entry.endsWith('.html'))) {
  const relative = path.relative(out, file).split(path.sep).join('/');
  let html = fs.readFileSync(file, 'utf8');
  const before = html;
  html = transformArticleImages(html);
  html = compactNavigation(html);
  html = injectDisplayAssets(html);
  if (html !== before) {
    fs.writeFileSync(file, html);
    changed += 1;
  }
}

console.log(`Display finalization applied to ${changed} HTML pages.`);
