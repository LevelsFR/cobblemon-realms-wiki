# 🌍 Biome Tags Reference

## 🌍 Biome Tags Reference for Modpack v6+

{% hint style="info" %}
<p align="center">
This page preserves a <strong>historical reference of 99 top-level biome tags from Biome Expanded Spawns v6.0</strong>. The associations and entry counts below have not yet been revalidated against datapack v6.4.0. These tags group biomes with shared environmental characteristics and are used to define Pokémon spawn conditions.
</p>
{% endhint %}

{% hint style="warning" %}
Use the complete tag identifier shown below, including the <code>#cobblemon:</code> prefix. Expand a tag to view its referenced tags and direct biome IDs, grouped by source mod.
{% endhint %}

---

{% hint style="warning" %}
**v6.4.1 compatibility:** the datapack preserves native Cobblemon biome tags and adds rules without overwriting native biome lists. v6.4.1 contains no biome-tag JSON changes from v6.4.0. Tags may be nested; an `anticondition.biomes` exclusion overrides a positive match. Confirmed example: **Allium Shrubland is not a Togepi spawn biome**, despite matching `#cobblemon:is_floral`, because it also matches the explicitly excluded `#cobblemon:is_plains`. Do not assume absent optional mods provide accessible biomes.

The [v6.4.0 technical audit](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.md) is static, not an in-game validation. **The historical listings below still need to be regenerated** against effective v6.4.0 tags and installed mods.
{% endhint %}

## 🧪 v6.4.0 static audit: limits and rules to review

The [v6.4.0 source audit](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.md) compared the datapack against Minecraft 1.21.1 and **344 JARs** from a local NeoForge instance. It analyzed **16,141 entries**, including **9,496 entries belonging to the pack**, loading **930 biome tags** and **277 registered biomes**. These are **audit-environment totals**, not a count of custom datapack tags.

| Check | Result |
| --- | --- |
| Pack entries whose allowed and excluded biomes intersect | **2,210** |
| Among those, entries still retaining other allowed biomes | **2,145** |
| Pack rules classified unreachable by the static audit | **8** |
| Other rules requiring manual review of exclusions and unresolved optional data | **57** |
| Pack entries requiring review due to at least one unresolved biome reference | **2,750** |
| Tag cycles, exact functional duplicates, and invalid JSON detected in the pack | **0** |

### 🦋 Eight Vivillon entries to review

**v6.4.0 audit note:** the rule IDs below preserve the uppercase `OS-` prefix used by that historical release. v6.4.1 custom IDs use lowercase `os-`.

| Group | Exact rule identifiers | Affected biomes |
| --- | --- | --- |
| **Biomes We've Gone, Tundra** | `OS-vivillon-biomeswevegone-03`, `OS-vivillon-biomeswevegone-22`, `OS-vivillon-herd-biomeswevegone-11`, `OS-vivillon-herd-biomeswevegone-22` | `biomeswevegone:shattered_glacier` |
| **Regions Unexplored, Archipelago** | `OS-vivillon-regions-unexplored-06`, `OS-vivillon-regions-unexplored-12`, `OS-vivillon-herd-regions-unexplored-01`, `OS-vivillon-herd-regions-unexplored-12` | `regions_unexplored:blackwood_taiga`, `regions_unexplored:fungal_fen` |

In the analyzed environment, exclusions remove all known candidate biomes for these eight rules. The four Regions Unexplored entries also reference optional tags absent from the instance. **No spawn-balancing changes or automatic fixes were applied**: deciding whether those exclusions should remain is a separate design decision.

{% hint style="warning" %}
An unresolved optional reference **does not automatically mean a bug**. A static audit cannot prove every tag loads at runtime or guarantee an actual encounter. In-game Fabric and NeoForge tests remain separate.
{% endhint %}

[**Audit summary**](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.md) · [**Detailed JSON**](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.json) · [**Intersections CSV**](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_INTERSECTIONS_v6.4.0.csv)

---

## 🧬 Key biome tags verified from v6.4.1 source

{% hint style="info" %}
The definitions below come directly from the **v6.4.1** repository JSON files; the tag definitions are unchanged from v6.4.0. These are **datapack additions**, not complete expanded native Cobblemon or third-party mod tags. The `replace: false` flag preserves contributions from other datapacks to the same tag. Optional entries do not guarantee those biomes are installed.
{% endhint %}

<details>
<summary><strong><code>#cobblemon:is_floral</code></strong> · 35 JSON additions</summary>

- `#ourstory:bumblezone/is_floral`
- `#c:is_flower_forest` *(optional)*
- `biomesoplenty:cherry_blossom_grove` *(optional)*
- `biomesoplenty:clover_patch` *(optional)*
- `biomeswevegone:allium_shrubland` *(optional)*
- `biomeswevegone:amaranth_grassland` *(optional)*
- `biomeswevegone:coconino_meadow` *(optional)*
- `biomeswevegone:orchard` *(optional)*
- `biomeswevegone:sakura_grove` *(optional)*
- `regions_unexplored:clover_plains` *(optional)*
- `regions_unexplored:flower_fields` *(optional)*
- `regions_unexplored:highland_fields` *(optional)*
- `regions_unexplored:magnolia_woodland` *(optional)*
- `regions_unexplored:mauve_hills` *(optional)*
- `regions_unexplored:orchard` *(optional)*
- `regions_unexplored:poppy_fields` *(optional)*
- `regions_unexplored:rocky_meadow` *(optional)*
- `terralith:sakura_grove` *(optional)*
- `terralith:sakura_valley` *(optional)*
- `wythers:sakura_forest` *(optional)*
- `biomesoplenty:auroral_garden` *(optional)*
- `biomesoplenty:jacaranda_glade` *(optional)*
- `biomesoplenty:pumpkin_patch` *(optional)*
- `biomesoplenty:snowblossom_grove` *(optional)*
- `#byg:is_floral` *(optional)*
- `byg:amaranth_fields` *(optional)*
- `byg:allium_fields` *(optional)*
- `byg:rose_fields` *(optional)*
- `byg:skyris_vale` *(optional)*
- `byg:orchard` *(optional)*
- `atmospheric:flourishing_dunes` *(optional)*
- `#natures_spirit:is_flowering` *(optional)*
- `#natures_spirit:is_wisteria` *(optional)*
- `paradise_lost:highlands_shield` *(optional)*
- `paradise_lost:wisteria_woods` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_plains</code></strong> · 45 JSON additions</summary>

- `#ourstory:bumblezone/is_plains`
- `#ourstory:twilight_forest/is_plains`
- `biomesoplenty:forested_field` *(optional)*
- `biomesoplenty:pumpkin_patch` *(optional)*
- `biomesoplenty:old_growth_dead_forest` *(optional)*
- `biomesoplenty:shrubland` *(optional)*
- `#c:plains` *(optional)*
- `#forge:is_plains` *(optional)*
- `regions_unexplored:barley_fields` *(optional)*
- `regions_unexplored:shrubland` *(optional)*
- `regions_unexplored:clover_plains` *(optional)*
- `regions_unexplored:grassland` *(optional)*
- `regions_unexplored:prairie` *(optional)*
- `regions_unexplored:flower_fields` *(optional)*
- `biomeswevegone:allium_shrubland` *(optional)*
- `biomeswevegone:amaranth_grassland` *(optional)*
- `biomeswevegone:coconino_meadow` *(optional)*
- `biomeswevegone:crimson_tundra` *(optional)*
- `biomeswevegone:firecracker_chaparral` *(optional)*
- `biomeswevegone:prairie` *(optional)*
- `biomeswevegone:pumpkin_valley` *(optional)*
- `biomeswevegone:rose_fields` *(optional)*
- `biomeswevegone:temperate_grove` *(optional)*
- `still_life:alpine_plains` *(optional)*
- `still_life:cold_steppe` *(optional)*
- `still_life:cold_taiga_clearings` *(optional)*
- `still_life:warm_temperate_clearings` *(optional)*
- `still_life:dry_cold_steppe` *(optional)*
- `still_life:mediterranean_steppe` *(optional)*
- `still_life:mixed_forest_steppe` *(optional)*
- `still_life:shrub_steppe` *(optional)*
- `still_life:wooded_mediterranean_steppe` *(optional)*
- `still_life:alpine_heathlands` *(optional)*
- `biomesoplenty:snowy_fir_clearing` *(optional)*
- `biomesoplenty:volcanic_plains` *(optional)*
- `biomesoplenty:wasteland_steppe` *(optional)*
- `still_life:flooded_grasslands` *(optional)*
- `still_life:grassland_savanna` *(optional)*
- `still_life:steppe_river` *(optional)*
- `#byg:is_plains` *(optional)*
- `#natures_spirit:is_field` *(optional)*
- `paradise_lost:continental_plateau` *(optional)*
- `paradise_lost:highlands` *(optional)*
- `paradise_lost:highlands_grand_glade` *(optional)*
- `paradise_lost:tradewinds` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_jungle</code></strong> · 23 JSON additions</summary>

- `#ourstory:is_bamboo_forest`
- `biomesoplenty:rocky_rainforest` *(optional)*
- `biomesoplenty:tropics` *(optional)*
- `biomesoplenty:fungal_jungle` *(optional)*
- `biomesoplenty:bamboo_grove` *(optional)*
- `regions_unexplored:rainforest` *(optional)*
- `regions_unexplored:sparse_rainforest` *(optional)*
- `regions_unexplored:eucalyptus_forest` *(optional)*
- `biomeswevegone:crag_gardens` *(optional)*
- `biomeswevegone:fragment_jungle` *(optional)*
- `biomeswevegone:jacaranda_jungle` *(optional)*
- `biomeswevegone:tropical_rainforest` *(optional)*
- `still_life:humid_savanna` *(optional)*
- `still_life:monsoon_forest` *(optional)*
- `still_life:old_growth_tropical_rainforest` *(optional)*
- `still_life:tropical_rainforest` *(optional)*
- `still_life:tropical_rainforest_river` *(optional)*
- `still_life:tropical_wetlands` *(optional)*
- `atmospheric:kousa_jungle` *(optional)*
- `#atmospheric:is_rainforest` *(optional)*
- `nomansland:bayou` *(optional)*
- `nomansland:lush_river` *(optional)*
- `nomansland:tropical_beach` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_forest</code></strong> · 77 JSON additions</summary>

- `#ourstory:twilight_forest/is_forest`
- `#ourstory:is_bamboo_forest`
- `biomesoplenty:fir_clearing` *(optional)*
- `biomesoplenty:forested_field` *(optional)*
- `biomesoplenty:redwood_forest` *(optional)*
- `biomesoplenty:grassland` *(optional)*
- `biomesoplenty:coniferous_forest` *(optional)*
- `#c:flower_forests` *(optional)*
- `#c:is_tree/deciduous` *(optional)*
- `wythers:subtropical_forest` *(optional)*
- `regions_unexplored:alpha_grove` *(optional)*
- `regions_unexplored:autumnal_maple_forest` *(optional)*
- `regions_unexplored:deciduous_forest` *(optional)*
- `regions_unexplored:maple_forest` *(optional)*
- `regions_unexplored:redwoods` *(optional)*
- `regions_unexplored:sparse_redwoods` *(optional)*
- `regions_unexplored:magnolia_woodland` *(optional)*
- `regions_unexplored:mauve_hills` *(optional)*
- `regions_unexplored:mountains` *(optional)*
- `regions_unexplored:orchard` *(optional)*
- `regions_unexplored:pine_slopes` *(optional)*
- `regions_unexplored:silver_birch_forest` *(optional)*
- `regions_unexplored:temperate_grove` *(optional)*
- `regions_unexplored:willow_forest` *(optional)*
- `biomesoplenty:aspen_glade` *(optional)*
- `biomesoplenty:dead_forest` *(optional)*
- `biomesoplenty:jacaranda_glade` *(optional)*
- `biomesoplenty:old_growth_dead_forest` *(optional)*
- `biomesoplenty:pumpkin_patch` *(optional)*
- `biomesoplenty:rainforest` *(optional)*
- `biomesoplenty:rocky_rainforest` *(optional)*
- `biomesoplenty:snowblossom_grove` *(optional)*
- `biomesoplenty:snowy_coniferous_forest` *(optional)*
- `biomesoplenty:snowy_maple_woods` *(optional)*
- `still_life:birch_forest` *(optional)*
- `still_life:larch_woodlands` *(optional)*
- `still_life:mangrove_marsh` *(optional)*
- `still_life:mediterranean_forest` *(optional)*
- `still_life:mediterranean_wooded_highlands` *(optional)*
- `still_life:mixed_forest_steppe` *(optional)*
- `still_life:monsoon_forest` *(optional)*
- `still_life:old_growth_temperate_forest` *(optional)*
- `still_life:old_growth_tropical_rainforest` *(optional)*
- `still_life:pine_woods` *(optional)*
- `still_life:temperate_forest` *(optional)*
- `still_life:temperate_mixed_forest` *(optional)*
- `still_life:tropical_dry_forest` *(optional)*
- `still_life:tropical_rainforest` *(optional)*
- `still_life:tropical_rainforest_river` *(optional)*
- `still_life:warm_temperate_woodlands` *(optional)*
- `atmospheric:aspen_parkland` *(optional)*
- `atmospheric:grimwoods` *(optional)*
- `atmospheric:laurel_forest` *(optional)*
- `#atmospheric:is_rainforest` *(optional)*
- `natures_spirit:blooming_sugi_forest` *(optional)*
- `natures_spirit:wisteria_forest` *(optional)*
- `natures_spirit:boreal_taiga` *(optional)*
- `natures_spirit:snowy_fir_forest` *(optional)*
- `natures_spirit:sugi_forest` *(optional)*
- `natures_spirit:sparse_tropical_woods` *(optional)*
- `natures_spirit:tropical_woods` *(optional)*
- `natures_spirit:fir_forest` *(optional)*
- `natures_spirit:windswept_sugi_forest` *(optional)*
- `natures_spirit:redwood_forest` *(optional)*
- `natures_spirit:aspen_forest` *(optional)*
- `natures_spirit:snowy_redwood_forest` *(optional)*
- `natures_spirit:maple_woodlands` *(optional)*
- `natures_spirit:coniferous_covert` *(optional)*
- `paradise_lost:highlands_forest` *(optional)*
- `paradise_lost:highlands_shield` *(optional)*
- `paradise_lost:highlands_thicket` *(optional)*
- `paradise_lost:wisteria_woods` *(optional)*
- `nomansland:dark_taiga` *(optional)*
- `nomansland:frozen_woods` *(optional)*
- `nomansland:bayou` *(optional)*
- `nomansland:lush_river` *(optional)*
- `nomansland:tropical_beach` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_cave</code></strong> · 19 JSON additions</summary>

- `#ourstory:space/is_cave`
- `#ourstory:twilight_forest/is_underground`
- `#ourstory:is_lush_cave`
- `#cobblemon:is_deep_dark`
- `still_life:barren_caves` *(optional)*
- `still_life:glowing_caves` *(optional)*
- `still_life:haunted_depths` *(optional)*
- `still_life:infested_tunnels` *(optional)*
- `still_life:scorched_caves` *(optional)*
- `still_life:frozen_caves` *(optional)*
- `still_life:mushroom_caves` *(optional)*
- `regions_unexplored:prismachasm` *(optional)*
- `regions_unexplored:redstone_caves` *(optional)*
- `biomesoplenty:fungal_jungle` *(optional)*
- `biomeswevegone:dead_sea` *(optional)*
- `byg:dead_sea` *(optional)*
- `nomansland:alchemist_ruins` *(optional)*
- `nomansland:caves` *(optional)*
- `nomansland:cave_depths` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_ocean</code></strong> · 12 JSON additions</summary>

- `#cobblemon:is_coast`
- `regions_unexplored:hyacinth_deeps` *(optional)*
- `still_life:arctic_deep_ocean` *(optional)*
- `still_life:arctic_shallow_ocean` *(optional)*
- `still_life:cold_deep_ocean` *(optional)*
- `still_life:cold_shallow_ocean` *(optional)*
- `still_life:subtropical_deep_ocean` *(optional)*
- `still_life:subtropical_shallow_ocean` *(optional)*
- `still_life:temperate_deep_ocean` *(optional)*
- `still_life:temperate_shallow_ocean` *(optional)*
- `still_life:tropical_deep_ocean` *(optional)*
- `still_life:tropical_shallow_ocean` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_mountain</code></strong> · 40 JSON additions</summary>

- `#ourstory:space/is_rocky`
- `#ourstory:twilight_forest/is_mountain`
- `#ourstory:is_high_mountain`
- `biomesoplenty:muskeg` *(optional)*
- `#forge:is_mountain` *(optional)*
- `regions_unexplored:mountains` *(optional)*
- `regions_unexplored:arid_mountains` *(optional)*
- `regions_unexplored:towering_cliffs` *(optional)*
- `biomeswevegone:crag_gardens` *(optional)*
- `biomeswevegone:howling_peaks` *(optional)*
- `biomesoplenty:highland` *(optional)*
- `biomesoplenty:jade_cliffs` *(optional)*
- `biomesoplenty:moor` *(optional)*
- `biomesoplenty:volcano` *(optional)*
- `still_life:alpine_heathlands` *(optional)*
- `still_life:alpine_plains` *(optional)*
- `still_life:alpine_tundra` *(optional)*
- `still_life:arid_highlands` *(optional)*
- `still_life:barren_mediterranean_highlands` *(optional)*
- `still_life:barren_peaks` *(optional)*
- `still_life:boreal_alpine_tundra` *(optional)*
- `still_life:cold_barren_highlands` *(optional)*
- `still_life:dry_tropical_highlands` *(optional)*
- `still_life:larch_woodlands` *(optional)*
- `still_life:mediterranean_highlands` *(optional)*
- `still_life:mediterranean_wooded_highlands` *(optional)*
- `still_life:savanna_highlands` *(optional)*
- `still_life:snowy_barren_peaks` *(optional)*
- `still_life:snowy_boreal_alpine_tundra` *(optional)*
- `still_life:snowy_peaks` *(optional)*
- `still_life:taiga_highlands` *(optional)*
- `still_life:tropical_highlands` *(optional)*
- `still_life:wooded_highlands` *(optional)*
- `#natures_spirit:is_highlands` *(optional)*
- `#natures_spirit:is_alpine` *(optional)*
- `natures_spirit:red_peaks` *(optional)*
- `natures_spirit:snowcapped_red_peaks` *(optional)*
- `natures_spirit:dusty_slopes` *(optional)*
- `paradise_lost:calcite_craglands` *(optional)*
- `paradise_lost:continental_plateau` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_swamp</code></strong> · 24 JSON additions</summary>

- `#ourstory:twilight_forest/is_swamp`
- `regions_unexplored:bayou` *(optional)*
- `regions_unexplored:fen` *(optional)*
- `regions_unexplored:marsh` *(optional)*
- `regions_unexplored:muddy_river` *(optional)*
- `regions_unexplored:old_growth_bayou` *(optional)*
- `#biomeswevegone:swamp` *(optional)*
- `still_life:mediterranean_swamp` *(optional)*
- `still_life:temperate_swamp` *(optional)*
- `still_life:bog` *(optional)*
- `still_life:arctic_wetlands` *(optional)*
- `still_life:desert_wetlands` *(optional)*
- `still_life:fen` *(optional)*
- `still_life:flooded_grasslands` *(optional)*
- `still_life:flooded_savanna` *(optional)*
- `still_life:mediterranean_marsh` *(optional)*
- `still_life:mire` *(optional)*
- `still_life:temperate_marsh` *(optional)*
- `still_life:tropical_wetlands` *(optional)*
- `biomesoplenty:moor` *(optional)*
- `biomesoplenty:muskeg` *(optional)*
- `still_life:mangrove_marsh` *(optional)*
- `#byg:is_swamp` *(optional)*
- `#natures_spirit:is_wetland` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_desert</code></strong> · 27 JSON additions</summary>

- `#ourstory:space/is_desert`
- `yungscavebiomes:lost_caves` *(optional)*
- `biomesoplenty:wasteland` *(optional)*
- `regions_unexplored:saguaro_desert` *(optional)*
- `regions_unexplored:joshua_desert` *(optional)*
- `biomeswevegone:atacama_outback` *(optional)*
- `biomeswevegone:mojave_desert` *(optional)*
- `biomeswevegone:windswept_desert` *(optional)*
- `biomeswevegone:rugged_badlands` *(optional)*
- `still_life:arid_desert` *(optional)*
- `still_life:cold_desert` *(optional)*
- `still_life:cold_semi_desert` *(optional)*
- `still_life:desert_river` *(optional)*
- `still_life:desert_wetlands` *(optional)*
- `still_life:semiarid_desert` *(optional)*
- `still_life:wooded_semiarid_desert` *(optional)*
- `still_life:xeric_shrubland` *(optional)*
- `biomesoplenty:cold_desert` *(optional)*
- `biomesoplenty:dryland` *(optional)*
- `still_life:arctic_desert` *(optional)*
- `still_life:arctic_desert_basin` *(optional)*
- `still_life:arid_beach` *(optional)*
- `still_life:arid_highlands` *(optional)*
- `still_life:barren_arctic_desert` *(optional)*
- `#byg:is_desert` *(optional)*
- `#atmospheric:is_dunes` *(optional)*
- `#natures_spirit:is_desert` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_sky</code></strong> · 6 JSON additions</summary>

- `#ourstory:space/is_gas_giant`
- `#ourstory:space/is_orbit`
- `still_life:barren_peaks` *(optional)*
- `still_life:snowy_barren_peaks` *(optional)*
- `still_life:snowy_peaks` *(optional)*
- `#ourstory:is_paradise_lost`

</details>

<details>
<summary><strong><code>#cobblemon:is_spooky</code></strong> · 11 JSON additions</summary>

- `#ourstory:twilight_forest/is_spooky`
- `#ourstory:is_ominous`
- `biomesoplenty:undergrowth` *(optional)*
- `regions_unexplored:pumpkin_fields` *(optional)*
- `wythers:bayou` *(optional)*
- `still_life:barren_caves` *(optional)*
- `still_life:infested_tunnels` *(optional)*
- `still_life:scorched_caves` *(optional)*
- `still_life:haunted_depths` *(optional)*
- `#byg:is_spooky` *(optional)*
- `byg:ebony_woods` *(optional)*

</details>

<details>
<summary><strong><code>#cobblemon:is_grassland</code></strong> · 36 JSON additions</summary>

- `biomesoplenty:grassland` *(optional)*
- `biomesoplenty:clover_patch` *(optional)*
- `biomesoplenty:field` *(optional)*
- `biomesoplenty:lavender_field` *(optional)*
- `biomesoplenty:mediterranean_forest` *(optional)*
- `biomesoplenty:orchard` *(optional)*
- `biomesoplenty:pasture` *(optional)*
- `biomesoplenty:dead_forest` *(optional)*
- `biomesoplenty:wooded_scrubland` *(optional)*
- `biomesoplenty:scrubland` *(optional)*
- `biomesoplenty:pumpkin_patch` *(optional)*
- `biomesoplenty:shrubland` *(optional)*
- `regions_unexplored:grassland` *(optional)*
- `regions_unexplored:prairie` *(optional)*
- `regions_unexplored:shrubland` *(optional)*
- `biomeswevegone:allium_shrubland` *(optional)*
- `biomeswevegone:amaranth_grassland` *(optional)*
- `biomeswevegone:coconino_meadow` *(optional)*
- `biomeswevegone:crimson_tundra` *(optional)*
- `biomeswevegone:firecracker_chaparral` *(optional)*
- `biomeswevegone:prairie` *(optional)*
- `biomeswevegone:pumpkin_valley` *(optional)*
- `biomeswevegone:rose_fields` *(optional)*
- `biomeswevegone:temperate_grove` *(optional)*
- `still_life:cold_steppe` *(optional)*
- `still_life:flooded_grasslands` *(optional)*
- `still_life:grassland_savanna` *(optional)*
- `still_life:mediterranean_steppe` *(optional)*
- `still_life:tropical_highlands` *(optional)*
- `biomesoplenty:prairie` *(optional)*
- `#natures_spirit:is_field` *(optional)*
- `paradise_lost:continental_plateau` *(optional)*
- `paradise_lost:highlands` *(optional)*
- `paradise_lost:highlands_grand_glade` *(optional)*
- `paradise_lost:tradewinds` *(optional)*
- `nomansland:prairie` *(optional)*

</details>

{% hint style="warning" %}
The `is_otherside.json` and `is_aether.json` files were not found at the same source paths as these six tags. Their older listings are therefore not claimed as verified against v6.4.0.
{% endhint %}

---

## 📖 Table of Contents

- [❄️ Snow, Ice and Cold](#snow-ice-and-cold)
- [⛰️ Mountains, Hills and Highlands](#mountains-hills-and-highlands)
- [⛏️ Caves and Underground](#caves-and-underground)
- [🌊 Oceans, Rivers, Lakes and Coasts](#oceans-rivers-lakes-and-coasts)
- [🌳 Forests, Jungles and Vegetation](#forests-jungles-and-vegetation)
- [🌾 Plains, Grasslands and Arid Biomes](#plains-grasslands-and-arid-biomes)
- [🌺 Floral, Magical and Seasonal](#floral-magical-and-seasonal)
- [🔥 Nether Biomes](#nether-biomes)
- [🌀 Special Dimensions and Worlds](#special-dimensions-and-worlds)

---

## ❄️ Snow, Ice and Cold

<details>
<summary><strong><code>#cobblemon:is_cold</code></strong> · 25 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_freezing`, `#cobblemon:is_frigid`, `#cobblemon:is_peak`, `#cobblemon:is_taiga`, `#cobblemon:is_tundra`, `#cobblemon:is_cold_ocean`, `#byg:is_cold`, `#c:is_cold`, `#c:is_cold/overworld`
* **Oh The Biomes We've Gone:** `biomeswevegone:aspen_boreal`, `biomeswevegone:black_forest`, `biomeswevegone:canadian_shield`, `biomeswevegone:cika_woods`, `biomeswevegone:coniferous_forest`, `biomeswevegone:dacite_ridges`, `biomeswevegone:frosted_coniferous_forest`, `biomeswevegone:frosted_taiga`, `biomeswevegone:howling_peaks`, `biomeswevegone:maple_taiga`, `biomeswevegone:shattered_glacier`, `biomeswevegone:crimson_tundra`, `biomeswevegone:overgrowth_woodlands`, `biomeswevegone:eroded_borealis`
* **Regions Unexplored:** `regions_unexplored:cold_river`
* **YUNG's Cave Biomes:** `yungscavebiomes:frosted_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_freezing</code></strong> · 20 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_frozen`, `#cobblemon:is_glacial`, `#cobblemon:is_snowy`, `#cobblemon:is_frozen_ocean`, `#cobblemon:is_snowy_forest`, `#c:is_snowy`, `#forge:is_snowy`, `#byg:is_snowy`, `#c:snowy`
* **Minecraft:** `minecraft:frozen_river`, `minecraft:jagged_peaks`, `minecraft:snowy_beach`, `minecraft:snowy_plains`, `minecraft:snowy_slopes`
* **Terralith:** `terralith:emerald_peaks`, `terralith:scarlet_mountains`, `terralith:skylands_winter`, `terralith:snowy_badlands`
* **Oh The Biomes We've Gone:** `biomeswevegone:shattered_glacier`
* **BYG Compatibility:** `byg:cardinal_tundra`

</details>

<details>
<summary><strong><code>#cobblemon:is_frigid</code></strong> · 3 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_frozen`
* **Minecraft:** `minecraft:cold_ocean`, `minecraft:deep_cold_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_frozen</code></strong> · 2 entries</summary>

* **Minecraft:** `minecraft:deep_frozen_ocean`, `minecraft:frozen_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_frozen_ocean</code></strong> · 3 entries</summary>

* **Minecraft:** `minecraft:deep_frozen_ocean`, `minecraft:frozen_ocean`
* **Terralith:** `terralith:frozen_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_glacial</code></strong> · 11 entries</summary>

* **Referenced biome tags:** `#c:icy`, `#byg:is_icy`, `#c:is_icy`
* **Minecraft:** `minecraft:frozen_peaks`, `minecraft:ice_spikes`
* **Terralith:** `terralith:cave/frostfire_caves`, `terralith:frozen_cliffs`, `terralith:glacial_chasm`
* **Oh The Biomes We've Gone:** `biomeswevegone:shattered_glacier`
* **Regions Unexplored:** `regions_unexplored:spires`
* **YUNG's Cave Biomes:** `yungscavebiomes:frosted_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_snowy</code></strong> · 25 entries</summary>

* **Referenced biome tags:** `#biomeswevegone:snowy`, `#c:is_snowy`, `#cobblemon:is_glacial`, `#cobblemon:is_snowy_forest`, `#cobblemon:is_snowy_taiga`, `#byg:is_snowy`
* **Minecraft:** `minecraft:grove`, `minecraft:snowy_taiga`, `minecraft:jagged_peaks`, `minecraft:snowy_beach`, `minecraft:snowy_plains`, `minecraft:snowy_slopes`
* **Terralith:** `terralith:alpha_islands_winter`, `terralith:alpine_grove`, `terralith:ice_marsh`, `terralith:siberian_grove`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_forest`, `terralith:wintry_lowlands`, `terralith:emerald_peaks`, `terralith:scarlet_mountains`, `terralith:skylands_winter`, `terralith:snowy_badlands`
* **BYG Compatibility:** `byg:cardinal_tundra`

</details>

<details>
<summary><strong><code>#cobblemon:is_snowy_forest</code></strong> · 17 entries</summary>

* **Minecraft:** `minecraft:grove`, `minecraft:snowy_taiga`
* **Terralith:** `terralith:alpha_islands_winter`, `terralith:alpine_grove`, `terralith:ice_marsh`, `terralith:siberian_grove`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_forest`, `terralith:wintry_lowlands`, `terralith:snowy_cherry_grove`
* **Oh The Biomes We've Gone:** `biomeswevegone:frosted_taiga`, `biomeswevegone:frosted_coniferous_forest`, `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:cold_boreal_taiga`, `regions_unexplored:cold_deciduous_forest`, `regions_unexplored:frozen_pine_taiga`

</details>

<details>
<summary><strong><code>#cobblemon:is_snowy_taiga</code></strong> · 14 entries</summary>

* **Minecraft:** `minecraft:grove`, `minecraft:snowy_taiga`
* **Terralith:** `terralith:alpine_grove`, `terralith:cold_shrubland`, `terralith:siberian_grove`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_forest`, `terralith:wintry_lowlands`
* **Oh The Biomes We've Gone:** `biomeswevegone:frosted_taiga`
* **Regions Unexplored:** `regions_unexplored:cold_boreal_taiga`, `regions_unexplored:frozen_pine_taiga`, `regions_unexplored:spires`, `regions_unexplored:icy_heights`

</details>

<details>
<summary><strong><code>#cobblemon:is_tundra</code></strong> · 12 entries</summary>

* **Referenced biome tags:** `#c:snowy_plains`, `#c:is_snowy_plains`
* **Minecraft:** `minecraft:ice_spikes`, `minecraft:snowy_plains`
* **Terralith:** `terralith:cold_shrubland`, `terralith:gravel_desert`, `terralith:rocky_shrubland`, `terralith:snowy_badlands`, `terralith:yellowstone`
* **BYG Compatibility:** `byg:cardinal_tundra`
* **Regions Unexplored:** `regions_unexplored:frozen_tundra`, `regions_unexplored:tundra`

</details>

<details>
<summary><strong><code>#cobblemon:is_winter</code></strong> · 2 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_freezing`
* **Terralith:** `terralith:skylands_winter`

</details>

---

## ⛰️ Mountains, Hills and Highlands

<details>
<summary><strong><code>#cobblemon:is_high_mountain</code></strong> · 9 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_peak`
* **Terralith:** `terralith:stony_spires`, `terralith:volcanic_peaks`, `terralith:windswept_spires`, `terralith:yosemite_cliffs`
* **Oh The Biomes We've Gone:** `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:mountains`, `regions_unexplored:arid_mountains`, `regions_unexplored:towering_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_highlands</code></strong> · 6 entries</summary>

* **Minecraft:** `minecraft:meadow`
* **Terralith:** `terralith:alpine_highlands`, `terralith:arid_highlands`, `terralith:blooming_plateau`, `terralith:highlands`
* **Regions Unexplored:** `regions_unexplored:highland_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_hill</code></strong> · 3 entries</summary>

* **Minecraft:** `minecraft:windswept_hills`, `minecraft:windswept_forest`, `minecraft:windswept_gravelly_hills`

</details>

<details>
<summary><strong><code>#cobblemon:is_hills</code></strong> · 18 entries</summary>

* **Referenced biome tags:** `#minecraft:is_hill`, `#cobblemon:is_highlands`, `#c:mountain_slope`, `#forge:is_slope`, `#c:is_hill`, `#c:is_mountain/slope`, `#c:is_windswept`
* **Terralith:** `terralith:blooming_valley`, `terralith:forested_highlands`, `terralith:lavender_valley`, `terralith:lush_valley`, `terralith:moonlight_valley`, `terralith:sakura_valley`, `terralith:savanna_slopes`, `terralith:temperate_highlands`, `terralith:yosemite_lowlands`
* **Regions Unexplored:** `regions_unexplored:mauve_hills`, `regions_unexplored:poppy_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_mountain</code></strong> · 14 entries</summary>

* **Referenced biome tags:** `#minecraft:is_mountain`, `#cobblemon:is_high_mountain`, `#cobblemon:is_hills`, `#forge:is_mountain`, `#c:is_mountain`
* **Terralith:** `terralith:stony_spires`, `terralith:volcanic_peaks`, `terralith:windswept_spires`, `terralith:yosemite_cliffs`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`, `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:mountains`, `regions_unexplored:arid_mountains`, `regions_unexplored:towering_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_peak</code></strong> · 12 entries</summary>

* **Referenced biome tags:** `#c:mountain_peak`, `#c:is_mountain/peak`
* **Minecraft:** `minecraft:frozen_peaks`, `minecraft:jagged_peaks`, `minecraft:snowy_slopes`, `minecraft:stony_peaks`
* **Terralith:** `terralith:emerald_peaks`, `terralith:rocky_mountains`, `terralith:scarlet_mountains`, `terralith:windswept_spires`
* **Oh The Biomes We've Gone:** `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:icy_heights`

</details>

<details>
<summary><strong><code>#cobblemon:is_plateau</code></strong> · 7 entries</summary>

* **Referenced biome tags:** `#forge:is_plateau`, `#byg:is_plateau`, `#c:is_plateau`
* **Minecraft:** `minecraft:savanna_plateau`
* **Regions Unexplored:** `regions_unexplored:barley_fields`, `regions_unexplored:prairie`, `regions_unexplored:steppe`

</details>

<details>
<summary><strong><code>#cobblemon:is_volcanic</code></strong> · 5 entries</summary>

* **Terralith:** `terralith:volcanic_crater`, `terralith:volcanic_peaks`, `terralith:cave/mantle_caves`
* **Regions Unexplored:** `regions_unexplored:scorching_caves`, `regions_unexplored:ashen_woodland`

</details>

---

## ⛏️ Caves and Underground

<details>
<summary><strong><code>#cobblemon:is_abyss</code></strong> · 3 entries</summary>

* **Minecraft:** `minecraft:deep_dark`
* **Terralith:** `terralith:cave/deep_caves`, `terralith:cave/tuff_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_cave</code></strong> · 15 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_lush_cave`, `#cobblemon:is_dripstone`, `#cobblemon:is_deep_dark`, `#c:is_cave`, `#c:is_underground`
* **Minecraft:** `minecraft:dripstone_caves`, `minecraft:lush_caves`
* **Terralith:** `terralith:cave/andesite_caves`, `terralith:cave/diorite_caves`, `terralith:cave/fungal_caves`, `terralith:cave/granite_caves`, `terralith:cave/infested_caves`, `terralith:cave/thermal_caves`, `terralith:cave/underground_jungle`, `terralith:cave/desert_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_crystal</code></strong> · 0 entries</summary>

*No biome entries are currently defined for this tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_deep</code></strong> · 1 entry</summary>

* **Referenced biome tags:** `#minecraft:is_deep_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_deep_dark</code></strong> · 6 entries</summary>

* **Minecraft:** `minecraft:deep_dark`
* **Terralith:** `terralith:cave/crystal_caves`, `terralith:cave/deep_caves`, `terralith:cave/frostfire_caves`, `terralith:cave/mantle_caves`, `terralith:cave/tuff_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_dripstone</code></strong> · 7 entries</summary>

* **Minecraft:** `minecraft:dripstone_caves`
* **Terralith:** `terralith:fractured_savanna`, `terralith:stony_spires`
* **Oh The Biomes We've Gone:** `biomeswevegone:dead_sea`
* **BYG Compatibility:** `byg:dead_sea`
* **Regions Unexplored:** `regions_unexplored:prismachasm`, `regions_unexplored:redstone_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_lush_cave</code></strong> · 4 entries</summary>

* **Minecraft:** `minecraft:lush_caves`
* **Terralith:** `terralith:cave/fungal_caves`, `terralith:cave/underground_jungle`
* **Regions Unexplored:** `regions_unexplored:bioshroom_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_salt</code></strong> · 5 entries</summary>

* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:skylands_winter`, `terralith:yellowstone`
* **Regions Unexplored:** `regions_unexplored:chalk_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_thermal</code></strong> · 5 entries</summary>

* **Terralith:** `terralith:caldera`, `terralith:yellowstone`, `terralith:cave/thermal_caves`
* **Regions Unexplored:** `regions_unexplored:scorching_caves`, `regions_unexplored:tropical_river`

</details>

---

## 🌊 Oceans, Rivers, Lakes and Coasts

<details>
<summary><strong><code>#cobblemon:is_beach</code></strong> · 8 entries</summary>

* **Referenced biome tags:** `#minecraft:is_beach`, `#c:is_beach`
* **Oh The Biomes We've Gone:** `biomeswevegone:basalt_barrera`, `biomeswevegone:dacite_shore`, `biomeswevegone:rainbow_beach`
* **Regions Unexplored:** `regions_unexplored:rocky_reef`, `regions_unexplored:grassy_beach`, `regions_unexplored:gravel_beach`

</details>

<details>
<summary><strong><code>#cobblemon:is_coast</code></strong> · 14 entries</summary>

* **Referenced biome tags:** `#minecraft:is_beach`, `#cobblemon:is_beach`, `#c:stony_shores`, `#c:is_beach`, `#c:is_stony_shores`
* **Minecraft:** `minecraft:stony_shore`
* **Terralith:** `terralith:white_cliffs`, `terralith:basalt_cliffs`, `terralith:granite_cliffs`
* **Oh The Biomes We've Gone:** `biomeswevegone:basalt_barrera`, `biomeswevegone:dacite_shore`, `biomeswevegone:rainbow_beach`
* **Regions Unexplored:** `regions_unexplored:rocky_reef`, `regions_unexplored:chalk_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_cold_ocean</code></strong> · 4 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_frozen_ocean`
* **Minecraft:** `minecraft:cold_ocean`, `minecraft:deep_cold_ocean`
* **Regions Unexplored:** `regions_unexplored:cold_river`

</details>

<details>
<summary><strong><code>#cobblemon:is_deep_ocean</code></strong> · 4 entries</summary>

* **Referenced biome tags:** `#minecraft:is_deep_ocean`, `#c:deep_ocean`, `#c:is_deep_ocean`
* **Regions Unexplored:** `regions_unexplored:hyacinth_deeps`

</details>

<details>
<summary><strong><code>#cobblemon:is_freshwater</code></strong> · 3 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_river`, `#cobblemon:is_swamp`
* **Regions Unexplored:** `regions_unexplored:chalk_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_island</code></strong> · 8 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_true_island`, `#cobblemon:is_tropical_island`
* **Minecraft:** `minecraft:mushroom_fields`
* **Terralith:** `terralith:alpha_islands`, `terralith:alpha_islands_winter`, `terralith:mirage_isles`, `terralith:warped_mesa`
* **BYG Compatibility:** `byg:lush_stacks`

</details>

<details>
<summary><strong><code>#cobblemon:is_kelp</code></strong> · 1 entry</summary>

* **Regions Unexplored:** `regions_unexplored:tropical_river`

</details>

<details>
<summary><strong><code>#cobblemon:is_lake</code></strong> · 1 entry</summary>

* **Minecraft:** `minecraft:river`

</details>

<details>
<summary><strong><code>#cobblemon:is_lukewarm</code></strong> · 2 entries</summary>

* **Minecraft:** `minecraft:deep_lukewarm_ocean`, `minecraft:lukewarm_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_lukewarm_ocean</code></strong> · 6 entries</summary>

* **Minecraft:** `minecraft:deep_lukewarm_ocean`, `minecraft:lukewarm_ocean`
* **Oh The Biomes We've Gone:** `biomeswevegone:dead_sea`, `biomeswevegone:lush_stacks`
* **Regions Unexplored:** `regions_unexplored:rocky_reef`, `regions_unexplored:tropics`

</details>

<details>
<summary><strong><code>#cobblemon:is_mirage_island</code></strong> · 1 entry</summary>

* **Terralith:** `terralith:mirage_isles`

</details>

<details>
<summary><strong><code>#cobblemon:is_ocean</code></strong> · 10 entries</summary>

* **Referenced biome tags:** `#minecraft:is_ocean`, `#cobblemon:is_coast`, `#cobblemon:is_cold_ocean`, `#cobblemon:is_deep_ocean`, `#cobblemon:is_frozen_ocean`, `#cobblemon:is_lukewarm_ocean`, `#cobblemon:is_warm_ocean`, `#cobblemon:is_temperate_ocean`, `#c:is_ocean`
* **Regions Unexplored:** `regions_unexplored:hyacinth_deeps`

</details>

<details>
<summary><strong><code>#cobblemon:is_reef</code></strong> · 1 entry</summary>

* **Minecraft:** `minecraft:warm_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_river</code></strong> · 6 entries</summary>

* **Referenced biome tags:** `#minecraft:is_river`, `#c:is_river`
* **Terralith:** `terralith:warm_river`
* **Regions Unexplored:** `regions_unexplored:cold_river`, `regions_unexplored:muddy_river`, `regions_unexplored:tropical_river`

</details>

<details>
<summary><strong><code>#cobblemon:is_temperate_ocean</code></strong> · 2 entries</summary>

* **Minecraft:** `minecraft:ocean`, `minecraft:deep_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_tropical_island</code></strong> · 2 entries</summary>

* **Regions Unexplored:** `regions_unexplored:tropics`, `regions_unexplored:rocky_reef`

</details>

<details>
<summary><strong><code>#cobblemon:is_true_island</code></strong> · 6 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_tropical_island`
* **Minecraft:** `minecraft:mushroom_fields`
* **Terralith:** `terralith:alpha_islands`, `terralith:alpha_islands_winter`, `terralith:mirage_isles`
* **Oh The Biomes We've Gone:** `biomeswevegone:lush_stacks`

</details>

<details>
<summary><strong><code>#cobblemon:is_warm_ocean</code></strong> · 4 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_kelp`
* **Minecraft:** `minecraft:warm_ocean`
* **Oh The Biomes We've Gone:** `biomeswevegone:lush_stacks`
* **BYG Compatibility:** `byg:lush_stacks`

</details>

---

## 🌳 Forests, Jungles and Vegetation

<details>
<summary><strong><code>#cobblemon:is_ancient_overgrown</code></strong> · 13 entries</summary>

* **Minecraft:** `minecraft:dark_forest`
* **Terralith:** `terralith:cloud_forest`, `terralith:orchid_swamp`
* **Oh The Biomes We've Gone:** `biomeswevegone:cypress_swamplands`, `biomeswevegone:cypress_wetlands`, `biomeswevegone:forgotten_forest`, `biomeswevegone:redwood_thicket`
* **Regions Unexplored:** `regions_unexplored:ancient_delta`, `regions_unexplored:old_growth_bayou`, `regions_unexplored:old_growth_boreal_taiga`, `regions_unexplored:old_growth_forest`, `regions_unexplored:old_growth_golden_boreal_taiga`, `regions_unexplored:redwoods`

</details>

<details>
<summary><strong><code>#cobblemon:is_bamboo</code></strong> · 5 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_bamboo_forest`
* **Minecraft:** `minecraft:bamboo_jungle`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`
* **BYG Compatibility:** `byg:bamboo_forest`
* **Regions Unexplored:** `regions_unexplored:bamboo_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_bamboo_forest</code></strong> · 2 entries</summary>

* **Minecraft:** `minecraft:bamboo_jungle`
* **Regions Unexplored:** `regions_unexplored:bamboo_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_cherry_blossom</code></strong> · 5 entries</summary>

* **Minecraft:** `minecraft:cherry_grove`
* **Terralith:** `terralith:sakura_grove`, `terralith:sakura_valley`
* **BYG Compatibility:** `byg:cherry_blossom_forest`, `byg:bamboo_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_dense</code></strong> · 5 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_jungle`, `#forge:is_dense/overworld`, `#c:is_dense_vegetation/overworld`
* **Minecraft:** `minecraft:dark_forest`, `minecraft:mangrove_swamp`

</details>

<details>
<summary><strong><code>#cobblemon:is_forest</code></strong> · 32 entries</summary>

* **Referenced biome tags:** `#minecraft:is_forest`, `#cobblemon:is_bamboo_forest`, `#c:flower_forests`, `#c:is_tree/deciduous`, `#c:is_forest`, `#c:is_flower_forest`, `#c:tree/deciduous`
* **Minecraft:** `minecraft:cherry_grove`
* **Terralith:** `terralith:alpha_islands`, `terralith:alpha_islands_winter`, `terralith:blooming_valley`, `terralith:forested_highlands`, `terralith:lavender_forest`, `terralith:lavender_valley`, `terralith:mirage_isles`, `terralith:sakura_grove`, `terralith:sakura_valley`, `terralith:temperate_highlands`
* **Regions Unexplored:** `regions_unexplored:alpha_grove`, `regions_unexplored:autumnal_maple_forest`, `regions_unexplored:deciduous_forest`, `regions_unexplored:maple_forest`, `regions_unexplored:redwoods`, `regions_unexplored:sparse_redwoods`, `regions_unexplored:magnolia_woodland`, `regions_unexplored:mauve_hills`, `regions_unexplored:mountains`, `regions_unexplored:orchard`, `regions_unexplored:pine_slopes`, `regions_unexplored:silver_birch_forest`, `regions_unexplored:temperate_grove`, `regions_unexplored:willow_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_jungle</code></strong> · 11 entries</summary>

* **Referenced biome tags:** `#minecraft:is_jungle`, `#cobblemon:is_bamboo_forest`, `#c:is_jungle`
* **Terralith:** `terralith:cave/underground_jungle`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`, `biomeswevegone:fragment_jungle`, `biomeswevegone:jacaranda_jungle`, `biomeswevegone:tropical_rainforest`
* **Regions Unexplored:** `regions_unexplored:rainforest`, `regions_unexplored:sparse_rainforest`, `regions_unexplored:eucalyptus_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_lush</code></strong> · 7 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_lush_cave`, `#cobblemon:is_lush_surface`, `#c:is_lush`
* **Minecraft:** `minecraft:lush_caves`
* **Terralith:** `terralith:cave/fungal_caves`, `terralith:cave/underground_jungle`
* **BYG Compatibility:** `byg:lush_stacks`

</details>

<details>
<summary><strong><code>#cobblemon:is_lush_surface</code></strong> · 18 entries</summary>

* **Minecraft:** `minecraft:jungle`, `minecraft:sparse_jungle`, `minecraft:bamboo_jungle`, `minecraft:mangrove_swamp`
* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:jungle_mountains`, `terralith:rocky_jungle`, `terralith:tropical_jungle`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`, `biomeswevegone:fragment_jungle`, `biomeswevegone:jacaranda_jungle`, `biomeswevegone:lush_stacks`, `biomeswevegone:tropical_rainforest`
* **Regions Unexplored:** `regions_unexplored:ancient_delta`, `regions_unexplored:eucalyptus_forest`, `regions_unexplored:rainforest`, `regions_unexplored:sparse_rainforest`

</details>

<details>
<summary><strong><code>#cobblemon:is_shrubland</code></strong> · 12 entries</summary>

* **Terralith:** `terralith:alpine_highlands`, `terralith:arid_highlands`, `terralith:brushland`, `terralith:cold_shrubland`, `terralith:hot_shrubland`, `terralith:rocky_shrubland`, `terralith:shrubland`
* **Oh The Biomes We've Gone:** `biomeswevegone:crimson_tundra`, `biomeswevegone:allium_shrubland`, `biomeswevegone:firecracker_chaparral`
* **Regions Unexplored:** `regions_unexplored:shrubland`, `regions_unexplored:dry_bushland`

</details>

<details>
<summary><strong><code>#cobblemon:is_sparse</code></strong> · 8 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_arid`, `#cobblemon:is_grassland`, `#cobblemon:is_tundra`, `#c:vegetation_sparse`, `#forge:is_sparse/overworld`, `#c:is_sparse_vegetation/overworld`
* **Regions Unexplored:** `regions_unexplored:sparse_rainforest`, `regions_unexplored:sparse_redwoods`

</details>

<details>
<summary><strong><code>#cobblemon:is_swamp</code></strong> · 12 entries</summary>

* **Referenced biome tags:** `#biomeswevegone:swamp`, `#c:is_swamp`, `#byg:is_swamp`
* **Minecraft:** `minecraft:mangrove_swamp`, `minecraft:swamp`
* **Terralith:** `terralith:ice_marsh`, `terralith:orchid_swamp`
* **Regions Unexplored:** `regions_unexplored:bayou`, `regions_unexplored:fen`, `regions_unexplored:marsh`, `regions_unexplored:muddy_river`, `regions_unexplored:old_growth_bayou`

</details>

<details>
<summary><strong><code>#cobblemon:is_taiga</code></strong> · 28 entries</summary>

* **Referenced biome tags:** `#minecraft:is_taiga`, `#c:tree_coniferous`, `#forge:is_coniferous`, `#biomeswevegone:taiga`, `#c:is_taiga`, `#cobblemon:is_snowy_taiga`, `#c:tree/coniferous`
* **Minecraft:** `minecraft:grove`
* **Terralith:** `terralith:alpine_grove`, `terralith:haze_mountain`, `terralith:ice_marsh`, `terralith:moonlight_grove`, `terralith:moonlight_valley`, `terralith:shield_clearing`, `terralith:siberian_grove`, `terralith:siberian_taiga`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_lowlands`, `terralith:bryce_canyon`, `terralith:cloud_forest`, `terralith:shield`, `terralith:yellowstone`, `terralith:yosemite_lowlands`
* **Regions Unexplored:** `regions_unexplored:blackwood_taiga`, `regions_unexplored:boreal_taiga`, `regions_unexplored:golden_boreal_taiga`, `regions_unexplored:pine_taiga`

</details>

---

## 🌾 Plains, Grasslands and Arid Biomes

<details>
<summary><strong><code>#cobblemon:is_arid</code></strong> · 5 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_hot_arid`, `#cobblemon:is_sandy`, `#cobblemon:is_savanna`, `#cobblemon:is_badlands`, `#cobblemon:is_desert`

</details>

<details>
<summary><strong><code>#cobblemon:is_badlands</code></strong> · 11 entries</summary>

* **Referenced biome tags:** `#minecraft:is_badlands`, `#c:is_badlands`
* **Terralith:** `terralith:ashen_savanna`, `terralith:red_oasis`, `terralith:warped_mesa`, `terralith:white_mesa`
* **Oh The Biomes We've Gone:** `biomeswevegone:red_rock_valley`, `biomeswevegone:rugged_badlands`, `biomeswevegone:sierra_badlands`
* **Regions Unexplored:** `regions_unexplored:arid_mountains`, `regions_unexplored:outback`

</details>

<details>
<summary><strong><code>#cobblemon:is_desert</code></strong> · 18 entries</summary>

* **Referenced biome tags:** `#c:is_desert`, `#byg:is_desert`
* **Minecraft:** `minecraft:desert`
* **Terralith:** `terralith:ancient_sands`, `terralith:desert_canyon`, `terralith:desert_oasis`, `terralith:desert_spires`, `terralith:lush_desert`, `terralith:red_oasis`, `terralith:sandstone_valley`, `terralith:cave/desert_caves`
* **Oh The Biomes We've Gone:** `biomeswevegone:atacama_outback`, `biomeswevegone:mojave_desert`, `biomeswevegone:windswept_desert`, `biomeswevegone:rugged_badlands`
* **Regions Unexplored:** `regions_unexplored:saguaro_desert`, `regions_unexplored:joshua_desert`
* **YUNG's Cave Biomes:** `yungscavebiomes:lost_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_grassland</code></strong> · 14 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_plains`, `#cobblemon:is_savanna`
* **Oh The Biomes We've Gone:** `biomeswevegone:allium_shrubland`, `biomeswevegone:amaranth_grassland`, `biomeswevegone:coconino_meadow`, `biomeswevegone:crimson_tundra`, `biomeswevegone:firecracker_chaparral`, `biomeswevegone:prairie`, `biomeswevegone:pumpkin_valley`, `biomeswevegone:rose_fields`, `biomeswevegone:temperate_grove`
* **Regions Unexplored:** `regions_unexplored:grassland`, `regions_unexplored:prairie`, `regions_unexplored:shrubland`

</details>

<details>
<summary><strong><code>#cobblemon:is_hot_arid</code></strong> · 39 entries</summary>

* **Minecraft:** `minecraft:desert`, `minecraft:badlands`, `minecraft:eroded_badlands`, `minecraft:wooded_badlands`, `minecraft:savanna`, `minecraft:savanna_plateau`, `minecraft:windswept_savanna`
* **Terralith:** `terralith:ancient_sands`, `terralith:arid_highlands`, `terralith:ashen_savanna`, `terralith:bryce_canyon`, `terralith:desert_canyon`, `terralith:desert_oasis`, `terralith:desert_spires`, `terralith:fractured_savanna`, `terralith:painted_mountains`, `terralith:red_oasis`, `terralith:sandstone_valley`, `terralith:savanna_badlands`, `terralith:savanna_slopes`, `terralith:warped_mesa`, `terralith:white_mesa`
* **Oh The Biomes We've Gone:** `biomeswevegone:araucaria_savanna`, `biomeswevegone:atacama_outback`, `biomeswevegone:baobab_savanna`, `biomeswevegone:ironwood_gour`, `biomeswevegone:mojave_desert`, `biomeswevegone:red_rock_peaks`, `biomeswevegone:red_rock_valley`, `biomeswevegone:rugged_badlands`, `biomeswevegone:sierra_badlands`, `biomeswevegone:windswept_desert`
* **Regions Unexplored:** `regions_unexplored:arid_mountains`, `regions_unexplored:baobab_savanna`, `regions_unexplored:dry_bushland`, `regions_unexplored:joshua_desert`, `regions_unexplored:outback`, `regions_unexplored:saguaro_desert`, `regions_unexplored:steppe`

</details>

<details>
<summary><strong><code>#cobblemon:is_plains</code></strong> · 26 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_highlands`, `#c:plains`, `#forge:is_plains`, `#c:is_plains`, `#byg:is_plains`
* **Minecraft:** `minecraft:plains`, `minecraft:sunflower_plains`
* **Terralith:** `terralith:brushland`, `terralith:steppe`, `terralith:valley_clearing`, `terralith:shrubland`
* **Oh The Biomes We've Gone:** `biomeswevegone:allium_shrubland`, `biomeswevegone:amaranth_grassland`, `biomeswevegone:coconino_meadow`, `biomeswevegone:crimson_tundra`, `biomeswevegone:firecracker_chaparral`, `biomeswevegone:prairie`, `biomeswevegone:pumpkin_valley`, `biomeswevegone:rose_fields`, `biomeswevegone:temperate_grove`
* **Regions Unexplored:** `regions_unexplored:barley_fields`, `regions_unexplored:shrubland`, `regions_unexplored:clover_plains`, `regions_unexplored:grassland`, `regions_unexplored:prairie`, `regions_unexplored:flower_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_sandy</code></strong> · 4 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_badlands`, `#cobblemon:is_desert`, `#byg:is_sandy`, `#c:is_sandy`

</details>

<details>
<summary><strong><code>#cobblemon:is_savanna</code></strong> · 15 entries</summary>

* **Referenced biome tags:** `#minecraft:is_savanna`, `#biomeswevegone:savanna`, `#c:is_savanna`
* **Terralith:** `terralith:arid_highlands`, `terralith:ashen_savanna`, `terralith:brushland`, `terralith:desert_oasis`, `terralith:fractured_savanna`, `terralith:hot_shrubland`, `terralith:red_oasis`, `terralith:savanna_badlands`, `terralith:savanna_slopes`, `terralith:shrubland`
* **Regions Unexplored:** `regions_unexplored:baobab_savanna`, `regions_unexplored:steppe`

</details>

<details>
<summary><strong><code>#cobblemon:is_temperate</code></strong> · 2 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_forest`, `#cobblemon:is_plains`

</details>

<details>
<summary><strong><code>#cobblemon:is_tropical</code></strong> · 2 entries</summary>

* **Regions Unexplored:** `regions_unexplored:tropics`, `regions_unexplored:tropical_river`

</details>

---

## 🌺 Floral, Magical and Seasonal

<details>
<summary><strong><code>#cobblemon:is_autumn</code></strong> · 10 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_arid`, `#cobblemon:is_cold_ocean`, `#cobblemon:is_mountain`, `#cobblemon:is_mushroom`, `#cobblemon:is_taiga`
* **Terralith:** `terralith:skylands_autumn`
* **Regions Unexplored:** `regions_unexplored:autumnal_maple_forest`, `regions_unexplored:golden_boreal_taiga`, `regions_unexplored:maple_forest`, `regions_unexplored:orchard`

</details>

<details>
<summary><strong><code>#cobblemon:is_enchanted</code></strong> · 11 entries</summary>

* **Referenced biome tags:** `#c:is_magical`
* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:mirage_isles`, `terralith:moonlight_grove`, `terralith:moonlight_valley`
* **Oh The Biomes We've Gone:** `biomeswevegone:enchanted_tangle`, `biomeswevegone:skyris_vale`, `biomeswevegone:weeping_witch_forest`
* **Regions Unexplored:** `regions_unexplored:prismachasm`, `regions_unexplored:bioshroom_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_floral</code></strong> · 34 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_cherry_blossom`, `#c:is_floral`, `#c:is_flower_forest`, `#byg:is_floral`, `#c:flower_forest`
* **Minecraft:** `minecraft:cherry_grove`, `minecraft:flower_forest`, `minecraft:meadow`, `minecraft:sunflower_plains`
* **Terralith:** `terralith:blooming_plateau`, `terralith:blooming_valley`, `terralith:lavender_forest`, `terralith:lavender_valley`, `terralith:sakura_grove`, `terralith:sakura_valley`, `terralith:cloud_forest`
* **Oh The Biomes We've Gone:** `biomeswevegone:allium_shrubland`, `biomeswevegone:amaranth_grassland`, `biomeswevegone:coconino_meadow`, `biomeswevegone:orchard`, `biomeswevegone:sakura_grove`
* **BYG Compatibility:** `byg:amaranth_fields`, `byg:allium_fields`, `byg:rose_fields`, `byg:skyris_vale`, `byg:orchard`
* **Regions Unexplored:** `regions_unexplored:clover_plains`, `regions_unexplored:flower_fields`, `regions_unexplored:highland_fields`, `regions_unexplored:magnolia_woodland`, `regions_unexplored:mauve_hills`, `regions_unexplored:orchard`, `regions_unexplored:poppy_fields`, `regions_unexplored:rocky_meadow`

</details>

<details>
<summary><strong><code>#cobblemon:is_haunted</code></strong> · 0 entries</summary>

*No biome entries are currently defined for this tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_infested</code></strong> · 1 entry</summary>

* **Terralith:** `terralith:cave/infested_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_magical</code></strong> · 12 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_enchanted`, `#c:is_magical`, `#byg:is_magical`
* **Minecraft:** `minecraft:dark_forest`
* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:mirage_isles`, `terralith:moonlight_grove`, `terralith:moonlight_valley`
* **BYG Compatibility:** `byg:skyris_vale`
* **Regions Unexplored:** `regions_unexplored:fungal_fen`, `regions_unexplored:mauve_hills`

</details>

<details>
<summary><strong><code>#cobblemon:is_mushroom</code></strong> · 16 entries</summary>

* **Referenced biome tags:** `#c:mushroom`, `#forge:is_mushroom`, `#c:is_mushroom`, `#c:is_mushroom_island`
* **Minecraft:** `minecraft:dark_forest`, `minecraft:mushroom_fields`
* **Terralith:** `terralith:mirage_isles`, `terralith:cave/fungal_caves`
* **Oh The Biomes We've Gone:** `biomeswevegone:ebony_woods`, `biomeswevegone:jacaranda_jungle`
* **BYG Compatibility:** `byg:temperate_rainforest`, `byg:tropical_rainforest`, `byg:weeping_witch_forest`
* **Regions Unexplored:** `regions_unexplored:bioshroom_caves`, `regions_unexplored:blackwood_taiga`, `regions_unexplored:fungal_fen`

</details>

<details>
<summary><strong><code>#cobblemon:is_ominous</code></strong> · 7 entries</summary>

* **Referenced biome tags:** `#c:is_spooky`
* **Minecraft:** `minecraft:dark_forest`
* **Oh The Biomes We've Gone:** `biomeswevegone:black_forest`, `biomeswevegone:forgotten_forest`, `biomeswevegone:weeping_witch_forest`
* **Regions Unexplored:** `regions_unexplored:ashen_woodland`, `regions_unexplored:blackwood_taiga`

</details>

<details>
<summary><strong><code>#cobblemon:is_spooky</code></strong> · 7 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_ominous`, `#byg:is_spooky`, `#c:is_spooky`
* **Minecraft:** `minecraft:dark_forest`
* **Oh The Biomes We've Gone:** `biomeswevegone:pale_bog`
* **BYG Compatibility:** `byg:ebony_woods`
* **Regions Unexplored:** `regions_unexplored:pumpkin_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_spring</code></strong> · 5 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_floral`, `#cobblemon:is_lukewarm`, `#cobblemon:is_magical`, `#cobblemon:is_plains`
* **Terralith:** `terralith:skylands_spring`

</details>

<details>
<summary><strong><code>#cobblemon:is_summer</code></strong> · 10 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_forest`, `#cobblemon:is_jungle`, `#cobblemon:is_lush`, `#cobblemon:is_reef`, `#cobblemon:is_warm_ocean`, `#cobblemon:is_swamp`, `#c:swamp`, `#forge:is_swamp`
* **Terralith:** `terralith:skylands_summer`, `terralith:ice_marsh`

</details>

---

## 🔥 Nether Biomes

<details>
<summary><strong><code>#cobblemon:is_nether_basalt</code></strong> · 4 entries</summary>

* **Minecraft:** `minecraft:basalt_deltas`
* **Incendium:** `incendium:ash_barrens`, `incendium:volcanic_deltas`, `incendium:withered_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_crimson</code></strong> · 1 entry</summary>

* **Minecraft:** `minecraft:crimson_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_desert</code></strong> · 3 entries</summary>

* **Minecraft:** `minecraft:soul_sand_valley`
* **Incendium:** `incendium:infernal_dunes`, `incendium:weeping_valley`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_forest</code></strong> · 0 entries</summary>

*No biome entries are currently defined for this tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_fungus</code></strong> · 3 entries</summary>

* **Minecraft:** `minecraft:crimson_forest`, `minecraft:warped_forest`
* **Incendium:** `incendium:inverted_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_mountain</code></strong> · 2 entries</summary>

* **Minecraft:** `minecraft:basalt_deltas`
* **Incendium:** `incendium:volcanic_deltas`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_overgrowth</code></strong> · 0 entries</summary>

*No biome entries are currently defined for this tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_quartz</code></strong> · 1 entry</summary>

* **Incendium:** `incendium:quartz_flats`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_soul_fire</code></strong> · 3 entries</summary>

* **Minecraft:** `minecraft:soul_sand_valley`
* **Incendium:** `incendium:quartz_flats`, `incendium:weeping_valley`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_soul_sand</code></strong> · 2 entries</summary>

* **Minecraft:** `minecraft:soul_sand_valley`
* **Incendium:** `incendium:weeping_valley`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_toxic</code></strong> · 2 entries</summary>

* **Regions Unexplored:** `regions_unexplored:mycotoxic_undergrowth`
* **Incendium:** `incendium:toxic_heap`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_warped</code></strong> · 1 entry</summary>

* **Minecraft:** `minecraft:warped_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_wasteland</code></strong> · 4 entries</summary>

* **Minecraft:** `minecraft:nether_wastes`
* **Regions Unexplored:** `regions_unexplored:infernal_holt`
* **Incendium:** `incendium:ash_barrens`, `incendium:toxic_heap`

</details>

---

## 🌀 Special Dimensions and Worlds

<details>
<summary><strong><code>#cobblemon:is_aether</code></strong> · 4 entries</summary>

* **The Aether:** `aether:skyroot_forest`, `aether:skyroot_grove`, `aether:skyroot_meadow`, `aether:skyroot_woodland`

</details>


<details>
<summary><strong><code>#cobblemon:is_end</code></strong> · 4 entries</summary>

* **Referenced biome tags:** `#minecraft:is_end`, `#c:is_end`, `#nullscape:all_nullscape_biomes`
* **Nullscape:** `nullscape:shadowlands`

</details>

<details>
<summary><strong><code>#cobblemon:is_otherside</code></strong> · 4 entries</summary>

* **Deeper and Darker:** `deeperdarker:deeplands`, `deeperdarker:echoing_forest`, `deeperdarker:blooming_caverns`, `deeperdarker:overcast_columns`

</details>

<details>
<summary><strong><code>#cobblemon:is_overworld</code></strong> · 22 entries</summary>

* **Referenced biome tags:** `#cobblemon:is_arid`, `#cobblemon:is_cave`, `#cobblemon:is_coast`, `#cobblemon:is_deep_dark`, `#cobblemon:is_floral`, `#cobblemon:is_forest`, `#cobblemon:is_freshwater`, `#cobblemon:is_grassland`, `#cobblemon:is_highlands`, `#cobblemon:is_island`, `#cobblemon:is_jungle`, `#cobblemon:is_magical`, `#cobblemon:is_mountain`, `#cobblemon:is_mushroom`, `#cobblemon:is_ocean`, `#minecraft:is_overworld`, `#cobblemon:is_sky`, `#cobblemon:is_spooky`, `#cobblemon:is_temperate`, `#cobblemon:is_thermal`, `#cobblemon:is_volcanic`, `#c:is_overworld`

</details>

<details>
<summary><strong><code>#cobblemon:is_sky</code></strong> · 4 entries</summary>

* **Terralith:** `terralith:skylands_autumn`, `terralith:skylands_spring`, `terralith:skylands_summer`, `terralith:skylands_winter`

</details>


<details>
<summary><strong><code>#cobblemon:is_void</code></strong> · 1 entry</summary>

* **Minecraft:** `minecraft:the_void`

</details>

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
If you have any questions, suggestions, or changes to propose, feel free to join us on <a href="https://discord.gg/kb8NSTF45n">Discord</a> and contact <strong>@FabLeKebab</strong> directly on the server for anything related to the wiki, or <strong>@Levels</strong> for anything related to the modpack.
</p>
{% endhint %}
