(() => {
  'use strict';
  const root = document.getElementById('spawn-explorer');
  if (!root) return;
  const fr = root.dataset.spawnLanguage === 'fr';
  const query = root.querySelector('#spawn-query');
  const rarity = root.querySelector('#spawn-rarity');
  const biome = root.querySelector('#spawn-biome');
  const time = root.querySelector('#spawn-time');
  const count = root.querySelector('#spawn-count');
  const results = root.querySelector('#spawn-results');
  const sourceCommit = '9a73f06f7a46fe57360299a1cd45436485a4f575';

  const normalize = value => String(value || '')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[_:.-]+/g, ' ').replace(/\s+/g, ' ').toLowerCase().trim();
  const friendlyBiome = value => {
    const id = String(value || '').replace(/^#/, '').split(':').pop();
    return id.split('/').pop().replace(/[_-]/g, ' ')
      .replace(/\b[a-z]/g, letter => letter.toUpperCase());
  };
  const rarityText = value => ({
    'ultra-rare': 'Ultra rare',
    rare: 'Rare',
    uncommon: fr ? 'Peu commun' : 'Uncommon',
    common: fr ? 'Commun' : 'Common'
  }[value] || value);
  const make = (tag, className, content) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = String(content);
    return element;
  };
  let data = [];
  function draw() {
    const needle = normalize(query.value);
    const selectedRarity = rarity.value;
    const selectedBiome = biome.value;
    const selectedTime = time.value;
    const filtered = data.filter(item => {
      const condition = item.condition || {};
      return (!selectedRarity || item.rarity === selectedRarity)
        && (!selectedBiome || item.biomes.includes(selectedBiome))
        && (!selectedTime || condition.timeRange === selectedTime)
        && (!needle || normalize(item.pokemon).includes(needle)
          || normalize(item.pokemonId).includes(needle)
          || item.biomes.some(value => normalize(value).includes(needle)
            || normalize(friendlyBiome(value)).includes(needle)));
    });
    count.textContent = fr
      ? `${filtered.length} Pokémon parmi ${data.length} définitions d'apparition supplémentaires`
      : `${filtered.length} Pokémon among ${data.length} additional spawn definitions`;
    results.replaceChildren();
    if (!filtered.length) {
      results.append(make('p', 'wiki-spawn-empty',
        fr ? 'Aucune apparition correspondant à ces filtres.' : 'No additional spawns match those filters.'));
      return;
    }
    const fragment = document.createDocumentFragment();
    for (const item of filtered) {
      const card = make('section', 'wiki-spawn-card');
      const heading = make('h3', '', item.pokemon);
      const bucket = make('span', 'wiki-spawn-rarity', rarityText(item.rarity));
      const level = make('span', 'wiki-spawn-level', (fr ? 'Niveaux ' : 'Levels ') + item.level);
      const location = make('div', 'wiki-spawn-biomes');
      location.append(make('strong', '', fr ? 'Biomes : ' : 'Biomes: '));
      const list = make('ul', 'wiki-spawn-biome-list');
      for (const id of item.biomes) {
        const li = make('li', '');
        li.append(make('span', '', friendlyBiome(id)), make('code', '', id));
        list.append(li);
      }
      location.append(list);
      const extra = make('div', 'wiki-spawn-conditions');
      const condition = item.condition || {};
      if (condition.timeRange) {
        extra.append(make('span', 'wiki-spawn-condition',
          (fr ? 'Horaire : ' : 'Time: ') +
          (condition.timeRange === 'night' ? (fr ? 'Nuit' : 'Night') : condition.timeRange)));
      }
      if (Number.isFinite(condition.minSkyLight) || Number.isFinite(condition.maxSkyLight)) {
        const lo = Number.isFinite(condition.minSkyLight) ? condition.minSkyLight : '?';
        const hi = Number.isFinite(condition.maxSkyLight) ? condition.maxSkyLight : '?';
        extra.append(make('span', 'wiki-spawn-condition',
          (fr ? 'Lumière du ciel : ' : 'Sky light: ') + lo + '–' + hi));
      }
      if (item.position === 'submerged') {
        extra.append(make('span', 'wiki-spawn-condition', fr ? 'Dans l’eau' : 'Submerged'));
      }
      if (Number.isFinite(item.weight)) {
        extra.append(make('span', 'wiki-spawn-condition',
          (fr ? 'Poids relatif : ' : 'Relative weight: ') + item.weight));
      }
      const link = make('a', 'wiki-spawn-source-link',
        fr ? 'Voir le JSON source' : 'View source JSON');
      link.href = 'https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/'
        + sourceCommit + '/' + item.sourceFile;
      link.rel = 'noopener noreferrer';
      link.target = '_blank';
      card.append(heading, bucket, level, location, extra, link);
      fragment.append(card);
    }
    results.append(fragment);
  }
  async function load() {
    try {
      const response = await fetch('/assets/spawn-explorer-data.json', { cache: 'no-store' });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const parsed = await response.json();
      if (parsed.schemaVersion !== 2 || parsed.version !== 'v6.4.1'
        || parsed.kind !== 'datapack-json' || parsed.source?.ref !== sourceCommit
        || !Array.isArray(parsed.entries) || parsed.entries.length !== 149) {
        throw new Error('Unexpected v6.4.1 source data');
      }
      data = parsed.entries.filter(item =>
        typeof item.pokemon === 'string'
        && typeof item.pokemonId === 'string'
        && typeof item.rarity === 'string'
        && typeof item.level === 'string'
        && Array.isArray(item.biomes)
        && item.biomes.every(value => typeof value === 'string')
        && typeof item.sourceFile === 'string'
        && item.sourceFile.startsWith('data/ourstory/spawn_pool_world/')
        && !item.sourceFile.includes('optional_')
      );
      if (data.length !== 149) throw new Error('Incomplete v6.4.1 source data');
      for (const value of [...new Set(data.map(item => item.rarity))].sort()) {
        const option = make('option', '', rarityText(value));
        option.value = value;
        rarity.append(option);
      }
      for (const id of [...new Set(data.flatMap(item => item.biomes))].sort()) {
        const option = make('option', '', friendlyBiome(id) + ' (' + id + ')');
        option.value = id;
        biome.append(option);
      }
      draw();
    } catch (error) {
      count.textContent = fr
        ? 'Données du datapack v6.4.1 momentanément indisponibles.'
        : 'Datapack v6.4.1 source data temporarily unavailable.';
      results.replaceChildren();
    }
  }
  query?.addEventListener('input', draw);
  rarity?.addEventListener('change', draw);
  biome?.addEventListener('change', draw);
  time?.addEventListener('change', draw);
  if (query && rarity && biome && time && count && results) load();
})();
