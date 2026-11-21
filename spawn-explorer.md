# 🔎 Pokémon Spawn Explorer

{% hint style="info" %}
**Source: the actual Cobblemon Biome Expanded Spawns v6.4.1 datapack JSON**, pinned to a specific source revision. The explorer indexes **149 standard additional natural wild Pokémon spawn definitions**, including their exact biome IDs, rarity buckets, levels, relative weights and any nighttime/sky-light conditions. It is **not** a complete Pokédex and does not cover native Cobblemon spawns, all external sidemod spawns, events or structure encounters.
{% endhint %}

## Find an additional natural spawn

Search by Pokémon name, rarity, biome name or Minecraft biome ID. The results are derived from the **datapack source JSON**, not merely its changelog. Relative weights and spawn buckets are **not** exact encounter probabilities.

<div id="spawn-explorer" class="wiki-spawn-explorer" data-spawn-language="en">
  <div class="wiki-spawn-filters">
    <label for="spawn-query">Pokémon or biome <input id="spawn-query" type="search" placeholder="Articuno, Flower Forest…" autocomplete="off"></label>
    <label for="spawn-rarity">Rarity <select id="spawn-rarity"><option value="">All rarities</option></select></label>
    <label for="spawn-biome">Biome <select id="spawn-biome"><option value="">All biomes</option></select></label>
    <label for="spawn-time">Time <select id="spawn-time"><option value="">All conditions</option><option value="night">Night only</option></select></label>
  </div>
  <p id="spawn-count" role="status" aria-live="polite">Loading verified spawn additions…</p>
  <div id="spawn-results" class="wiki-spawn-results"></div>
  <p class="wiki-spawn-source">Data: Cobblemon Biome Expanded Spawns <strong>v6.4.1 JSON source</strong>, 149 standard files. The 24 optional-mod spawn files, including Terralith, are excluded. This does not replace the native Cobblemon encounter catalogue.</p>
</div>

## How to read these results

- **Rarity** is the Cobblemon spawn bucket, not a percentage chance. Weight and available spawn slots also influence results.
- **Levels** are an eligible level range for a documented entry.
- **Biomes** display the exact Minecraft resource IDs from the datapack. Each result links to its source JSON so that the rule can be inspected.
- **Time and sky light** display additional JSON restrictions when present. A blank time condition does not automatically mean a guaranteed daytime encounter.
- **Relative weight** is used by spawn selection; it is not a percentage chance.
- **Versions** matter: the last public modpack release verified by this wiki was **6.3**, while the datapack source selected for this explorer is **v6.4.1**. Do not assume all existing worlds or servers have already installed that datapack.

**Source verification:** [Cobblemon Biome Expanded Spawns pack metadata](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/9a73f06f7a46fe57360299a1cd45436485a4f575/pack.mcmeta) and the individual JSON files linked in each result.

For more complete explanations, read [Pokémon and Spawns](pokemon-and-spawns.md), [Biome Tags](pokemons-guides/biome-tags-reference.md) and the [Version History](version-history.md).
