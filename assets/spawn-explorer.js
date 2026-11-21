(() => {
  'use strict';
  const root = document.getElementById('spawn-explorer');
  if (!root) return;
  const fr = root.dataset.spawnLanguage === 'fr';
  const query = root.querySelector('#spawn-query');
  const rarity = root.querySelector('#spawn-rarity');
  const biome = root.querySelector('#spawn-biome');
  const count = root.querySelector('#spawn-count');
  const results = root.querySelector('#spawn-results');
  const normalize = value => String(value || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const rarityText = value => ({
    'ultra-rare': fr ? 'Ultra rare' : 'Ultra rare',
    rare: fr ? 'Rare' : 'Rare',
    uncommon: fr ? 'Peu commun' : 'Uncommon',
    common: fr ? 'Commun' : 'Common'
  }[value] || value);
  const make = (tag, className, text) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = String(text);
    return el;
  };
  let data = [];
  function draw() {
    const needle = normalize(query.value);
    const selectedRarity = rarity.value;
    const selectedBiome = biome.value;
    const filtered = data.filter(item =>
      (!selectedRarity || item.rarity === selectedRarity) &&
      (!selectedBiome || item.biomes.includes(selectedBiome)) &&
      (!needle || normalize(item.pokemon).includes(needle) || item.biomes.some(b => normalize(b).includes(needle)))
    );
    count.textContent = fr
      ? `${filtered.length} Pokémon sur ${data.length} apparitions supplémentaires répertoriées`
      : `${filtered.length} Pokémon out of ${data.length} indexed additional spawns`;
    results.replaceChildren();
    if (!filtered.length) {
      results.append(make('p','wiki-spawn-empty',fr?'Aucun résultat pour ces filtres.':'No matching additions for these filters.'));
      return;
    }
    const fragment = document.createDocumentFragment();
    for (const item of filtered) {
      const card = make('section','wiki-spawn-card');
      const title = make('h3','',item.pokemon);
      const badge = make('span','wiki-spawn-rarity',rarityText(item.rarity));
      const level = make('span','wiki-spawn-level', (fr ? 'Niveaux ' : 'Levels ') + item.level);
      const biomes = make('p','wiki-spawn-biomes',item.biomes.join(' · '));
      card.append(title,badge,level,biomes);
      fragment.append(card);
    }
    results.append(fragment);
  }
  const load = async () => {
    try {
      const response = await fetch('/assets/spawn-explorer-data.json', { cache:'no-store' });
      if (!response.ok) throw new Error('HTTP ' + response.status);
      const parsed = await response.json();
      if (parsed.schemaVersion !== 1 || parsed.version !== 'v6.4.1' || !Array.isArray(parsed.entries)) throw new Error('Unexpected data schema');
      data = parsed.entries.filter(item =>
        typeof item.pokemon === 'string' &&
        typeof item.rarity === 'string' &&
        typeof item.level === 'string' &&
        Array.isArray(item.biomes)
      );
      const rarities = [...new Set(data.map(item => item.rarity))].sort();
      for (const item of rarities) {
        const option = make('option','',rarityText(item));
        option.value = item;
        rarity.append(option);
      }
      const biomes = [...new Set(data.flatMap(item => item.biomes))].sort();
      for (const item of biomes) {
        const option = make('option','',item);
        option.value = item;
        biome.append(option);
      }
      draw();
    } catch {
      count.textContent = fr ? 'Données momentanément indisponibles.' : 'Spawn index temporarily unavailable.';
      results.replaceChildren();
    }
  };
  query.addEventListener('input', draw);
  rarity.addEventListener('change', draw);
  biome.addEventListener('change', draw);
  load();
})();
