# 🔎 Pokémon Spawn Explorer

{% hint style="info" %}
**Source: Cobblemon Biome Expanded Spawns v6.4.1 release notes.** This explorer indexes **149 additional natural wild Pokémon spawns** documented for the datapack. It is **not** a complete Pokédex and does not cover every Cobblemon or sidemod spawn, every datapack condition, or event/structure encounter.
{% endhint %}

## Find an additional natural spawn

Use the filters to search by Pokémon name, rarity or biome. Biomes below are the **names published in the v6.4.1 release notes**. Rarity buckets and level ranges describe these extra spawn entries, not a guaranteed encounter or a numerical shiny/spawn probability.

<div id="spawn-explorer" class="wiki-spawn-explorer" data-spawn-language="en">
  <div class="wiki-spawn-filters">
    <label for="spawn-query">Pokémon or biome <input id="spawn-query" type="search" placeholder="Articuno, Flower Forest…" autocomplete="off"></label>
    <label for="spawn-rarity">Rarity <select id="spawn-rarity"><option value="">All rarities</option></select></label>
    <label for="spawn-biome">Biome <select id="spawn-biome"><option value="">All biomes</option></select></label>
  </div>
  <p id="spawn-count" role="status" aria-live="polite">Loading verified spawn additions…</p>
  <div id="spawn-results" class="wiki-spawn-results"></div>
  <p class="wiki-spawn-source">Data: Cobblemon Biome Expanded Spawns v6.4.1 (release-note extract). Excludes vanilla Cobblemon spawns, additional mod mechanics and unreproduced technical conditions.</p>
</div>

## How to read these results

- **Rarity** is the Cobblemon spawn bucket, not a percentage chance. Weight and available spawn slots also influence results.
- **Levels** are an eligible level range for a documented entry.
- **Biomes** list the published locations for these new entries. Existing spawns, other mods and tag-based conditions can add other ways to find the same species.
- **Versions** matter: the official modpack release tracked by this wiki was **6.3**, while the source datapack release notes are **v6.4.1**. Do not assume these additional rules are present on every existing world or server.

For more complete explanations, read [Pokémon and Spawns](pokemon-and-spawns.md), [Biome Tags](pokemons-guides/biome-tags-reference.md) and the [Version History](version-history.md).
