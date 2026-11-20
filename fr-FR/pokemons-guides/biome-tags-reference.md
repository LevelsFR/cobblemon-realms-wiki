# 🌍 Référence des tags de biome

## 🌍 Référence des tags de biome

{% hint style="info" %}
<p align="center">
Cette page conserve une <strong>référence historique de 99 tags de biome principaux, issue de Biome Expanded Spawns v6.0</strong>. Les associations et nombres d'entrées affichés ci-dessous ne constituent pas un inventaire revérifié pour le datapack v6.4.0. Ces tags regroupent les biomes partageant des caractéristiques environnementales et servent à définir les conditions d’apparition des Pokémon.
</p>
{% endhint %}

{% hint style="warning" %}
Utilisez l’identifiant complet affiché ci-dessous, avec le préfixe <code>#cobblemon:</code>. Dépliez un tag pour consulter les tags référencés et les identifiants directs de biome, regroupés par mod source.
{% endhint %}

---

{% hint style="warning" %}
**Compatibilité v6.4.1 :** le datapack conserve les tags natifs de Cobblemon et ajoute des règles sans remplacer les listes de biomes de base. La v6.4.1 ne modifie aucun fichier JSON de tags par rapport à la v6.4.0. Les tags peuvent être imbriqués, et une exclusion (`anticondition.biomes`) prévaut sur une condition positive. Exemple confirmé : **Allium Shrubland ne permet pas le spawn de Togepi**, malgré son appartenance à `#cobblemon:is_floral`, car il appartient également à `#cobblemon:is_plains`, explicitement exclu. Les biomes des mods absents ne doivent pas être supposés accessibles.

Les résultats détaillés de l'[audit technique v6.4.0](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.md) sont statiques et ne remplacent pas un test en jeu. **La liste historique ci-dessous reste à régénérer** depuis les tags effectifs de v6.4.0 et des mods installés.
{% endhint %}

## 🧪 Audit statique v6.4.0 : limites et règles à surveiller

L'[audit source v6.4.0](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.md) a comparé le datapack avec Minecraft 1.21.1 et **344 JARs** d'une instance NeoForge locale. Il a examiné **16 141 entrées**, dont **9 496 entrées propres au pack**, et chargé **930 tags de biome** et **277 biomes enregistrés**. Ces nombres décrivent l'**environnement de l'audit**, pas le nombre de tags personnalisés du datapack.

| Contrôle | Résultat |
| --- | --- |
| Entrées du pack présentant une intersection entre biomes autorisés et exclus | **2 210** |
| Parmi elles, entrées conservant d'autres biomes possibles | **2 145** |
| Règles du pack classées inatteignables par l'audit | **8** |
| Autres règles à revoir pour exclusions potentielles et données optionnelles manquantes | **57** |
| Entrées du pack nécessitant une revue à cause d'au moins une référence de biome non résolue | **2 750** |
| Cycles de tags, doublons fonctionnels exacts et JSON invalides détectés dans le pack | **0** |

### 🦋 Huit entrées Vivillon à examiner

**Note sur l'audit v6.4.0 :** les IDs ci-dessous conservent le préfixe majuscule `OS-` de cette version historique. Les IDs personnalisés de la v6.4.1 sont en minuscules : `os-`.

| Groupe | Identifiants exacts | Biomes concernés |
| --- | --- | --- |
| **Biomes We've Gone, Tundra** | `OS-vivillon-biomeswevegone-03`, `OS-vivillon-biomeswevegone-22`, `OS-vivillon-herd-biomeswevegone-11`, `OS-vivillon-herd-biomeswevegone-22` | `biomeswevegone:shattered_glacier` |
| **Regions Unexplored, Archipelago** | `OS-vivillon-regions-unexplored-06`, `OS-vivillon-regions-unexplored-12`, `OS-vivillon-herd-regions-unexplored-01`, `OS-vivillon-herd-regions-unexplored-12` | `regions_unexplored:blackwood_taiga`, `regions_unexplored:fungal_fen` |

Dans l'environnement analysé, les exclusions couvrent toutes les candidates connues de ces huit règles. Les quatre entrées Regions Unexplored référencent également des tags optionnels absents de l'instance. **Aucun rééquilibrage ni correctif de spawn n'a été appliqué automatiquement** : ces cas nécessitent un arbitrage sur les exclusions.

{% hint style="warning" %}
Une référence optionnelle non résolue **n'est pas nécessairement un bug**. Un audit statique ne prouve ni le chargement effectif de tous les tags en jeu, ni qu'une rencontre aura lieu. Les tests Fabric et NeoForge en jeu restent distincts.
{% endhint %}

[**Rapport de synthèse**](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.md) · [**Résultats détaillés JSON**](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_AUDIT_v6.4.0.json) · [**Intersections CSV**](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/main/BIOME_TAG_INTERSECTIONS_v6.4.0.csv)

---

## 🧬 Tags essentiels vérifiés dans la source v6.4.1

{% hint style="info" %}
Les définitions ci-dessous proviennent directement des fichiers JSON de la **v6.4.1** ; elles sont inchangées par rapport à la v6.4.0. Elles représentent les **ajouts du datapack**, et non la composition complète des tags Cobblemon natifs ou d'autres mods. L'option `replace: false` conserve les contributions des autres datapacks au même tag. Les références marquées optionnelles ne garantissent pas la présence de leur biome en jeu.
{% endhint %}

<details>
<summary><strong><code>#cobblemon:is_floral</code></strong> · 35 ajouts JSON</summary>

- `#ourstory:bumblezone/is_floral`
- `#c:is_flower_forest` *(optionnel)*
- `biomesoplenty:cherry_blossom_grove` *(optionnel)*
- `biomesoplenty:clover_patch` *(optionnel)*
- `biomeswevegone:allium_shrubland` *(optionnel)*
- `biomeswevegone:amaranth_grassland` *(optionnel)*
- `biomeswevegone:coconino_meadow` *(optionnel)*
- `biomeswevegone:orchard` *(optionnel)*
- `biomeswevegone:sakura_grove` *(optionnel)*
- `regions_unexplored:clover_plains` *(optionnel)*
- `regions_unexplored:flower_fields` *(optionnel)*
- `regions_unexplored:highland_fields` *(optionnel)*
- `regions_unexplored:magnolia_woodland` *(optionnel)*
- `regions_unexplored:mauve_hills` *(optionnel)*
- `regions_unexplored:orchard` *(optionnel)*
- `regions_unexplored:poppy_fields` *(optionnel)*
- `regions_unexplored:rocky_meadow` *(optionnel)*
- `terralith:sakura_grove` *(optionnel)*
- `terralith:sakura_valley` *(optionnel)*
- `wythers:sakura_forest` *(optionnel)*
- `biomesoplenty:auroral_garden` *(optionnel)*
- `biomesoplenty:jacaranda_glade` *(optionnel)*
- `biomesoplenty:pumpkin_patch` *(optionnel)*
- `biomesoplenty:snowblossom_grove` *(optionnel)*
- `#byg:is_floral` *(optionnel)*
- `byg:amaranth_fields` *(optionnel)*
- `byg:allium_fields` *(optionnel)*
- `byg:rose_fields` *(optionnel)*
- `byg:skyris_vale` *(optionnel)*
- `byg:orchard` *(optionnel)*
- `atmospheric:flourishing_dunes` *(optionnel)*
- `#natures_spirit:is_flowering` *(optionnel)*
- `#natures_spirit:is_wisteria` *(optionnel)*
- `paradise_lost:highlands_shield` *(optionnel)*
- `paradise_lost:wisteria_woods` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_plains</code></strong> · 45 ajouts JSON</summary>

- `#ourstory:bumblezone/is_plains`
- `#ourstory:twilight_forest/is_plains`
- `biomesoplenty:forested_field` *(optionnel)*
- `biomesoplenty:pumpkin_patch` *(optionnel)*
- `biomesoplenty:old_growth_dead_forest` *(optionnel)*
- `biomesoplenty:shrubland` *(optionnel)*
- `#c:plains` *(optionnel)*
- `#forge:is_plains` *(optionnel)*
- `regions_unexplored:barley_fields` *(optionnel)*
- `regions_unexplored:shrubland` *(optionnel)*
- `regions_unexplored:clover_plains` *(optionnel)*
- `regions_unexplored:grassland` *(optionnel)*
- `regions_unexplored:prairie` *(optionnel)*
- `regions_unexplored:flower_fields` *(optionnel)*
- `biomeswevegone:allium_shrubland` *(optionnel)*
- `biomeswevegone:amaranth_grassland` *(optionnel)*
- `biomeswevegone:coconino_meadow` *(optionnel)*
- `biomeswevegone:crimson_tundra` *(optionnel)*
- `biomeswevegone:firecracker_chaparral` *(optionnel)*
- `biomeswevegone:prairie` *(optionnel)*
- `biomeswevegone:pumpkin_valley` *(optionnel)*
- `biomeswevegone:rose_fields` *(optionnel)*
- `biomeswevegone:temperate_grove` *(optionnel)*
- `still_life:alpine_plains` *(optionnel)*
- `still_life:cold_steppe` *(optionnel)*
- `still_life:cold_taiga_clearings` *(optionnel)*
- `still_life:warm_temperate_clearings` *(optionnel)*
- `still_life:dry_cold_steppe` *(optionnel)*
- `still_life:mediterranean_steppe` *(optionnel)*
- `still_life:mixed_forest_steppe` *(optionnel)*
- `still_life:shrub_steppe` *(optionnel)*
- `still_life:wooded_mediterranean_steppe` *(optionnel)*
- `still_life:alpine_heathlands` *(optionnel)*
- `biomesoplenty:snowy_fir_clearing` *(optionnel)*
- `biomesoplenty:volcanic_plains` *(optionnel)*
- `biomesoplenty:wasteland_steppe` *(optionnel)*
- `still_life:flooded_grasslands` *(optionnel)*
- `still_life:grassland_savanna` *(optionnel)*
- `still_life:steppe_river` *(optionnel)*
- `#byg:is_plains` *(optionnel)*
- `#natures_spirit:is_field` *(optionnel)*
- `paradise_lost:continental_plateau` *(optionnel)*
- `paradise_lost:highlands` *(optionnel)*
- `paradise_lost:highlands_grand_glade` *(optionnel)*
- `paradise_lost:tradewinds` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_jungle</code></strong> · 23 ajouts JSON</summary>

- `#ourstory:is_bamboo_forest`
- `biomesoplenty:rocky_rainforest` *(optionnel)*
- `biomesoplenty:tropics` *(optionnel)*
- `biomesoplenty:fungal_jungle` *(optionnel)*
- `biomesoplenty:bamboo_grove` *(optionnel)*
- `regions_unexplored:rainforest` *(optionnel)*
- `regions_unexplored:sparse_rainforest` *(optionnel)*
- `regions_unexplored:eucalyptus_forest` *(optionnel)*
- `biomeswevegone:crag_gardens` *(optionnel)*
- `biomeswevegone:fragment_jungle` *(optionnel)*
- `biomeswevegone:jacaranda_jungle` *(optionnel)*
- `biomeswevegone:tropical_rainforest` *(optionnel)*
- `still_life:humid_savanna` *(optionnel)*
- `still_life:monsoon_forest` *(optionnel)*
- `still_life:old_growth_tropical_rainforest` *(optionnel)*
- `still_life:tropical_rainforest` *(optionnel)*
- `still_life:tropical_rainforest_river` *(optionnel)*
- `still_life:tropical_wetlands` *(optionnel)*
- `atmospheric:kousa_jungle` *(optionnel)*
- `#atmospheric:is_rainforest` *(optionnel)*
- `nomansland:bayou` *(optionnel)*
- `nomansland:lush_river` *(optionnel)*
- `nomansland:tropical_beach` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_forest</code></strong> · 77 ajouts JSON</summary>

- `#ourstory:twilight_forest/is_forest`
- `#ourstory:is_bamboo_forest`
- `biomesoplenty:fir_clearing` *(optionnel)*
- `biomesoplenty:forested_field` *(optionnel)*
- `biomesoplenty:redwood_forest` *(optionnel)*
- `biomesoplenty:grassland` *(optionnel)*
- `biomesoplenty:coniferous_forest` *(optionnel)*
- `#c:flower_forests` *(optionnel)*
- `#c:is_tree/deciduous` *(optionnel)*
- `wythers:subtropical_forest` *(optionnel)*
- `regions_unexplored:alpha_grove` *(optionnel)*
- `regions_unexplored:autumnal_maple_forest` *(optionnel)*
- `regions_unexplored:deciduous_forest` *(optionnel)*
- `regions_unexplored:maple_forest` *(optionnel)*
- `regions_unexplored:redwoods` *(optionnel)*
- `regions_unexplored:sparse_redwoods` *(optionnel)*
- `regions_unexplored:magnolia_woodland` *(optionnel)*
- `regions_unexplored:mauve_hills` *(optionnel)*
- `regions_unexplored:mountains` *(optionnel)*
- `regions_unexplored:orchard` *(optionnel)*
- `regions_unexplored:pine_slopes` *(optionnel)*
- `regions_unexplored:silver_birch_forest` *(optionnel)*
- `regions_unexplored:temperate_grove` *(optionnel)*
- `regions_unexplored:willow_forest` *(optionnel)*
- `biomesoplenty:aspen_glade` *(optionnel)*
- `biomesoplenty:dead_forest` *(optionnel)*
- `biomesoplenty:jacaranda_glade` *(optionnel)*
- `biomesoplenty:old_growth_dead_forest` *(optionnel)*
- `biomesoplenty:pumpkin_patch` *(optionnel)*
- `biomesoplenty:rainforest` *(optionnel)*
- `biomesoplenty:rocky_rainforest` *(optionnel)*
- `biomesoplenty:snowblossom_grove` *(optionnel)*
- `biomesoplenty:snowy_coniferous_forest` *(optionnel)*
- `biomesoplenty:snowy_maple_woods` *(optionnel)*
- `still_life:birch_forest` *(optionnel)*
- `still_life:larch_woodlands` *(optionnel)*
- `still_life:mangrove_marsh` *(optionnel)*
- `still_life:mediterranean_forest` *(optionnel)*
- `still_life:mediterranean_wooded_highlands` *(optionnel)*
- `still_life:mixed_forest_steppe` *(optionnel)*
- `still_life:monsoon_forest` *(optionnel)*
- `still_life:old_growth_temperate_forest` *(optionnel)*
- `still_life:old_growth_tropical_rainforest` *(optionnel)*
- `still_life:pine_woods` *(optionnel)*
- `still_life:temperate_forest` *(optionnel)*
- `still_life:temperate_mixed_forest` *(optionnel)*
- `still_life:tropical_dry_forest` *(optionnel)*
- `still_life:tropical_rainforest` *(optionnel)*
- `still_life:tropical_rainforest_river` *(optionnel)*
- `still_life:warm_temperate_woodlands` *(optionnel)*
- `atmospheric:aspen_parkland` *(optionnel)*
- `atmospheric:grimwoods` *(optionnel)*
- `atmospheric:laurel_forest` *(optionnel)*
- `#atmospheric:is_rainforest` *(optionnel)*
- `natures_spirit:blooming_sugi_forest` *(optionnel)*
- `natures_spirit:wisteria_forest` *(optionnel)*
- `natures_spirit:boreal_taiga` *(optionnel)*
- `natures_spirit:snowy_fir_forest` *(optionnel)*
- `natures_spirit:sugi_forest` *(optionnel)*
- `natures_spirit:sparse_tropical_woods` *(optionnel)*
- `natures_spirit:tropical_woods` *(optionnel)*
- `natures_spirit:fir_forest` *(optionnel)*
- `natures_spirit:windswept_sugi_forest` *(optionnel)*
- `natures_spirit:redwood_forest` *(optionnel)*
- `natures_spirit:aspen_forest` *(optionnel)*
- `natures_spirit:snowy_redwood_forest` *(optionnel)*
- `natures_spirit:maple_woodlands` *(optionnel)*
- `natures_spirit:coniferous_covert` *(optionnel)*
- `paradise_lost:highlands_forest` *(optionnel)*
- `paradise_lost:highlands_shield` *(optionnel)*
- `paradise_lost:highlands_thicket` *(optionnel)*
- `paradise_lost:wisteria_woods` *(optionnel)*
- `nomansland:dark_taiga` *(optionnel)*
- `nomansland:frozen_woods` *(optionnel)*
- `nomansland:bayou` *(optionnel)*
- `nomansland:lush_river` *(optionnel)*
- `nomansland:tropical_beach` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_cave</code></strong> · 19 ajouts JSON</summary>

- `#ourstory:space/is_cave`
- `#ourstory:twilight_forest/is_underground`
- `#ourstory:is_lush_cave`
- `#cobblemon:is_deep_dark`
- `still_life:barren_caves` *(optionnel)*
- `still_life:glowing_caves` *(optionnel)*
- `still_life:haunted_depths` *(optionnel)*
- `still_life:infested_tunnels` *(optionnel)*
- `still_life:scorched_caves` *(optionnel)*
- `still_life:frozen_caves` *(optionnel)*
- `still_life:mushroom_caves` *(optionnel)*
- `regions_unexplored:prismachasm` *(optionnel)*
- `regions_unexplored:redstone_caves` *(optionnel)*
- `biomesoplenty:fungal_jungle` *(optionnel)*
- `biomeswevegone:dead_sea` *(optionnel)*
- `byg:dead_sea` *(optionnel)*
- `nomansland:alchemist_ruins` *(optionnel)*
- `nomansland:caves` *(optionnel)*
- `nomansland:cave_depths` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_ocean</code></strong> · 12 ajouts JSON</summary>

- `#cobblemon:is_coast`
- `regions_unexplored:hyacinth_deeps` *(optionnel)*
- `still_life:arctic_deep_ocean` *(optionnel)*
- `still_life:arctic_shallow_ocean` *(optionnel)*
- `still_life:cold_deep_ocean` *(optionnel)*
- `still_life:cold_shallow_ocean` *(optionnel)*
- `still_life:subtropical_deep_ocean` *(optionnel)*
- `still_life:subtropical_shallow_ocean` *(optionnel)*
- `still_life:temperate_deep_ocean` *(optionnel)*
- `still_life:temperate_shallow_ocean` *(optionnel)*
- `still_life:tropical_deep_ocean` *(optionnel)*
- `still_life:tropical_shallow_ocean` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_mountain</code></strong> · 40 ajouts JSON</summary>

- `#ourstory:space/is_rocky`
- `#ourstory:twilight_forest/is_mountain`
- `#ourstory:is_high_mountain`
- `biomesoplenty:muskeg` *(optionnel)*
- `#forge:is_mountain` *(optionnel)*
- `regions_unexplored:mountains` *(optionnel)*
- `regions_unexplored:arid_mountains` *(optionnel)*
- `regions_unexplored:towering_cliffs` *(optionnel)*
- `biomeswevegone:crag_gardens` *(optionnel)*
- `biomeswevegone:howling_peaks` *(optionnel)*
- `biomesoplenty:highland` *(optionnel)*
- `biomesoplenty:jade_cliffs` *(optionnel)*
- `biomesoplenty:moor` *(optionnel)*
- `biomesoplenty:volcano` *(optionnel)*
- `still_life:alpine_heathlands` *(optionnel)*
- `still_life:alpine_plains` *(optionnel)*
- `still_life:alpine_tundra` *(optionnel)*
- `still_life:arid_highlands` *(optionnel)*
- `still_life:barren_mediterranean_highlands` *(optionnel)*
- `still_life:barren_peaks` *(optionnel)*
- `still_life:boreal_alpine_tundra` *(optionnel)*
- `still_life:cold_barren_highlands` *(optionnel)*
- `still_life:dry_tropical_highlands` *(optionnel)*
- `still_life:larch_woodlands` *(optionnel)*
- `still_life:mediterranean_highlands` *(optionnel)*
- `still_life:mediterranean_wooded_highlands` *(optionnel)*
- `still_life:savanna_highlands` *(optionnel)*
- `still_life:snowy_barren_peaks` *(optionnel)*
- `still_life:snowy_boreal_alpine_tundra` *(optionnel)*
- `still_life:snowy_peaks` *(optionnel)*
- `still_life:taiga_highlands` *(optionnel)*
- `still_life:tropical_highlands` *(optionnel)*
- `still_life:wooded_highlands` *(optionnel)*
- `#natures_spirit:is_highlands` *(optionnel)*
- `#natures_spirit:is_alpine` *(optionnel)*
- `natures_spirit:red_peaks` *(optionnel)*
- `natures_spirit:snowcapped_red_peaks` *(optionnel)*
- `natures_spirit:dusty_slopes` *(optionnel)*
- `paradise_lost:calcite_craglands` *(optionnel)*
- `paradise_lost:continental_plateau` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_swamp</code></strong> · 24 ajouts JSON</summary>

- `#ourstory:twilight_forest/is_swamp`
- `regions_unexplored:bayou` *(optionnel)*
- `regions_unexplored:fen` *(optionnel)*
- `regions_unexplored:marsh` *(optionnel)*
- `regions_unexplored:muddy_river` *(optionnel)*
- `regions_unexplored:old_growth_bayou` *(optionnel)*
- `#biomeswevegone:swamp` *(optionnel)*
- `still_life:mediterranean_swamp` *(optionnel)*
- `still_life:temperate_swamp` *(optionnel)*
- `still_life:bog` *(optionnel)*
- `still_life:arctic_wetlands` *(optionnel)*
- `still_life:desert_wetlands` *(optionnel)*
- `still_life:fen` *(optionnel)*
- `still_life:flooded_grasslands` *(optionnel)*
- `still_life:flooded_savanna` *(optionnel)*
- `still_life:mediterranean_marsh` *(optionnel)*
- `still_life:mire` *(optionnel)*
- `still_life:temperate_marsh` *(optionnel)*
- `still_life:tropical_wetlands` *(optionnel)*
- `biomesoplenty:moor` *(optionnel)*
- `biomesoplenty:muskeg` *(optionnel)*
- `still_life:mangrove_marsh` *(optionnel)*
- `#byg:is_swamp` *(optionnel)*
- `#natures_spirit:is_wetland` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_desert</code></strong> · 27 ajouts JSON</summary>

- `#ourstory:space/is_desert`
- `yungscavebiomes:lost_caves` *(optionnel)*
- `biomesoplenty:wasteland` *(optionnel)*
- `regions_unexplored:saguaro_desert` *(optionnel)*
- `regions_unexplored:joshua_desert` *(optionnel)*
- `biomeswevegone:atacama_outback` *(optionnel)*
- `biomeswevegone:mojave_desert` *(optionnel)*
- `biomeswevegone:windswept_desert` *(optionnel)*
- `biomeswevegone:rugged_badlands` *(optionnel)*
- `still_life:arid_desert` *(optionnel)*
- `still_life:cold_desert` *(optionnel)*
- `still_life:cold_semi_desert` *(optionnel)*
- `still_life:desert_river` *(optionnel)*
- `still_life:desert_wetlands` *(optionnel)*
- `still_life:semiarid_desert` *(optionnel)*
- `still_life:wooded_semiarid_desert` *(optionnel)*
- `still_life:xeric_shrubland` *(optionnel)*
- `biomesoplenty:cold_desert` *(optionnel)*
- `biomesoplenty:dryland` *(optionnel)*
- `still_life:arctic_desert` *(optionnel)*
- `still_life:arctic_desert_basin` *(optionnel)*
- `still_life:arid_beach` *(optionnel)*
- `still_life:arid_highlands` *(optionnel)*
- `still_life:barren_arctic_desert` *(optionnel)*
- `#byg:is_desert` *(optionnel)*
- `#atmospheric:is_dunes` *(optionnel)*
- `#natures_spirit:is_desert` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_sky</code></strong> · 6 ajouts JSON</summary>

- `#ourstory:space/is_gas_giant`
- `#ourstory:space/is_orbit`
- `still_life:barren_peaks` *(optionnel)*
- `still_life:snowy_barren_peaks` *(optionnel)*
- `still_life:snowy_peaks` *(optionnel)*
- `#ourstory:is_paradise_lost`

</details>

<details>
<summary><strong><code>#cobblemon:is_spooky</code></strong> · 11 ajouts JSON</summary>

- `#ourstory:twilight_forest/is_spooky`
- `#ourstory:is_ominous`
- `biomesoplenty:undergrowth` *(optionnel)*
- `regions_unexplored:pumpkin_fields` *(optionnel)*
- `wythers:bayou` *(optionnel)*
- `still_life:barren_caves` *(optionnel)*
- `still_life:infested_tunnels` *(optionnel)*
- `still_life:scorched_caves` *(optionnel)*
- `still_life:haunted_depths` *(optionnel)*
- `#byg:is_spooky` *(optionnel)*
- `byg:ebony_woods` *(optionnel)*

</details>

<details>
<summary><strong><code>#cobblemon:is_grassland</code></strong> · 36 ajouts JSON</summary>

- `biomesoplenty:grassland` *(optionnel)*
- `biomesoplenty:clover_patch` *(optionnel)*
- `biomesoplenty:field` *(optionnel)*
- `biomesoplenty:lavender_field` *(optionnel)*
- `biomesoplenty:mediterranean_forest` *(optionnel)*
- `biomesoplenty:orchard` *(optionnel)*
- `biomesoplenty:pasture` *(optionnel)*
- `biomesoplenty:dead_forest` *(optionnel)*
- `biomesoplenty:wooded_scrubland` *(optionnel)*
- `biomesoplenty:scrubland` *(optionnel)*
- `biomesoplenty:pumpkin_patch` *(optionnel)*
- `biomesoplenty:shrubland` *(optionnel)*
- `regions_unexplored:grassland` *(optionnel)*
- `regions_unexplored:prairie` *(optionnel)*
- `regions_unexplored:shrubland` *(optionnel)*
- `biomeswevegone:allium_shrubland` *(optionnel)*
- `biomeswevegone:amaranth_grassland` *(optionnel)*
- `biomeswevegone:coconino_meadow` *(optionnel)*
- `biomeswevegone:crimson_tundra` *(optionnel)*
- `biomeswevegone:firecracker_chaparral` *(optionnel)*
- `biomeswevegone:prairie` *(optionnel)*
- `biomeswevegone:pumpkin_valley` *(optionnel)*
- `biomeswevegone:rose_fields` *(optionnel)*
- `biomeswevegone:temperate_grove` *(optionnel)*
- `still_life:cold_steppe` *(optionnel)*
- `still_life:flooded_grasslands` *(optionnel)*
- `still_life:grassland_savanna` *(optionnel)*
- `still_life:mediterranean_steppe` *(optionnel)*
- `still_life:tropical_highlands` *(optionnel)*
- `biomesoplenty:prairie` *(optionnel)*
- `#natures_spirit:is_field` *(optionnel)*
- `paradise_lost:continental_plateau` *(optionnel)*
- `paradise_lost:highlands` *(optionnel)*
- `paradise_lost:highlands_grand_glade` *(optionnel)*
- `paradise_lost:tradewinds` *(optionnel)*
- `nomansland:prairie` *(optionnel)*

</details>

{% hint style="warning" %}
Les fichiers `is_otherside.json` et `is_aether.json` ne sont pas présents aux mêmes chemins que ces six tags dans le dépôt consulté. Leurs anciennes listes ne sont donc pas prétendues vérifiées pour la v6.4.0.
{% endhint %}

---

## 📖 Sommaire

- [❄️ Neige, glace et froid](#neige-glace-et-froid)
- [⛰️ Montagnes, collines et hautes terres](#montagnes-collines-et-hautes-terres)
- [⛏️ Grottes et souterrains](#grottes-et-souterrains)
- [🌊 Océans, rivières, lacs et côtes](#oceans-rivieres-lacs-et-cotes)
- [🌳 Forêts, jungles et végétation](#forets-jungles-et-vegetation)
- [🌾 Plaines, prairies et biomes arides](#plaines-prairies-et-biomes-arides)
- [🌺 Biomes floraux, magiques et saisonniers](#biomes-floraux-magiques-et-saisonniers)
- [🔥 Biomes du Nether](#biomes-du-nether)
- [🌀 Dimensions et mondes spéciaux](#dimensions-et-mondes-speciaux)

---

## ❄️ Neige, glace et froid

<details>
<summary><strong><code>#cobblemon:is_cold</code></strong> · 25 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_freezing`, `#cobblemon:is_frigid`, `#cobblemon:is_peak`, `#cobblemon:is_taiga`, `#cobblemon:is_tundra`, `#cobblemon:is_cold_ocean`, `#byg:is_cold`, `#c:is_cold`, `#c:is_cold/overworld`
* **Oh The Biomes We've Gone:** `biomeswevegone:aspen_boreal`, `biomeswevegone:black_forest`, `biomeswevegone:canadian_shield`, `biomeswevegone:cika_woods`, `biomeswevegone:coniferous_forest`, `biomeswevegone:dacite_ridges`, `biomeswevegone:frosted_coniferous_forest`, `biomeswevegone:frosted_taiga`, `biomeswevegone:howling_peaks`, `biomeswevegone:maple_taiga`, `biomeswevegone:shattered_glacier`, `biomeswevegone:crimson_tundra`, `biomeswevegone:overgrowth_woodlands`, `biomeswevegone:eroded_borealis`
* **Regions Unexplored:** `regions_unexplored:cold_river`
* **YUNG's Cave Biomes:** `yungscavebiomes:frosted_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_freezing</code></strong> · 20 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_frozen`, `#cobblemon:is_glacial`, `#cobblemon:is_snowy`, `#cobblemon:is_frozen_ocean`, `#cobblemon:is_snowy_forest`, `#c:is_snowy`, `#forge:is_snowy`, `#byg:is_snowy`, `#c:snowy`
* **Minecraft:** `minecraft:frozen_river`, `minecraft:jagged_peaks`, `minecraft:snowy_beach`, `minecraft:snowy_plains`, `minecraft:snowy_slopes`
* **Terralith:** `terralith:emerald_peaks`, `terralith:scarlet_mountains`, `terralith:skylands_winter`, `terralith:snowy_badlands`
* **Oh The Biomes We've Gone:** `biomeswevegone:shattered_glacier`
* **Compatibilité BYG :** `byg:cardinal_tundra`

</details>

<details>
<summary><strong><code>#cobblemon:is_frigid</code></strong> · 3 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_frozen`
* **Minecraft:** `minecraft:cold_ocean`, `minecraft:deep_cold_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_frozen</code></strong> · 2 entrées</summary>

* **Minecraft:** `minecraft:deep_frozen_ocean`, `minecraft:frozen_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_frozen_ocean</code></strong> · 3 entrées</summary>

* **Minecraft:** `minecraft:deep_frozen_ocean`, `minecraft:frozen_ocean`
* **Terralith:** `terralith:frozen_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_glacial</code></strong> · 11 entrées</summary>

* **Tags de biome référencés :** `#c:icy`, `#byg:is_icy`, `#c:is_icy`
* **Minecraft:** `minecraft:frozen_peaks`, `minecraft:ice_spikes`
* **Terralith:** `terralith:cave/frostfire_caves`, `terralith:frozen_cliffs`, `terralith:glacial_chasm`
* **Oh The Biomes We've Gone:** `biomeswevegone:shattered_glacier`
* **Regions Unexplored:** `regions_unexplored:spires`
* **YUNG's Cave Biomes:** `yungscavebiomes:frosted_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_snowy</code></strong> · 25 entrées</summary>

* **Tags de biome référencés :** `#biomeswevegone:snowy`, `#c:is_snowy`, `#cobblemon:is_glacial`, `#cobblemon:is_snowy_forest`, `#cobblemon:is_snowy_taiga`, `#byg:is_snowy`
* **Minecraft:** `minecraft:grove`, `minecraft:snowy_taiga`, `minecraft:jagged_peaks`, `minecraft:snowy_beach`, `minecraft:snowy_plains`, `minecraft:snowy_slopes`
* **Terralith:** `terralith:alpha_islands_winter`, `terralith:alpine_grove`, `terralith:ice_marsh`, `terralith:siberian_grove`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_forest`, `terralith:wintry_lowlands`, `terralith:emerald_peaks`, `terralith:scarlet_mountains`, `terralith:skylands_winter`, `terralith:snowy_badlands`
* **Compatibilité BYG :** `byg:cardinal_tundra`

</details>

<details>
<summary><strong><code>#cobblemon:is_snowy_forest</code></strong> · 17 entrées</summary>

* **Minecraft:** `minecraft:grove`, `minecraft:snowy_taiga`
* **Terralith:** `terralith:alpha_islands_winter`, `terralith:alpine_grove`, `terralith:ice_marsh`, `terralith:siberian_grove`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_forest`, `terralith:wintry_lowlands`, `terralith:snowy_cherry_grove`
* **Oh The Biomes We've Gone:** `biomeswevegone:frosted_taiga`, `biomeswevegone:frosted_coniferous_forest`, `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:cold_boreal_taiga`, `regions_unexplored:cold_deciduous_forest`, `regions_unexplored:frozen_pine_taiga`

</details>

<details>
<summary><strong><code>#cobblemon:is_snowy_taiga</code></strong> · 14 entrées</summary>

* **Minecraft:** `minecraft:grove`, `minecraft:snowy_taiga`
* **Terralith:** `terralith:alpine_grove`, `terralith:cold_shrubland`, `terralith:siberian_grove`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_forest`, `terralith:wintry_lowlands`
* **Oh The Biomes We've Gone:** `biomeswevegone:frosted_taiga`
* **Regions Unexplored:** `regions_unexplored:cold_boreal_taiga`, `regions_unexplored:frozen_pine_taiga`, `regions_unexplored:spires`, `regions_unexplored:icy_heights`

</details>

<details>
<summary><strong><code>#cobblemon:is_tundra</code></strong> · 12 entrées</summary>

* **Tags de biome référencés :** `#c:snowy_plains`, `#c:is_snowy_plains`
* **Minecraft:** `minecraft:ice_spikes`, `minecraft:snowy_plains`
* **Terralith:** `terralith:cold_shrubland`, `terralith:gravel_desert`, `terralith:rocky_shrubland`, `terralith:snowy_badlands`, `terralith:yellowstone`
* **Compatibilité BYG :** `byg:cardinal_tundra`
* **Regions Unexplored:** `regions_unexplored:frozen_tundra`, `regions_unexplored:tundra`

</details>

<details>
<summary><strong><code>#cobblemon:is_winter</code></strong> · 2 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_freezing`
* **Terralith:** `terralith:skylands_winter`

</details>

---

## ⛰️ Montagnes, collines et hautes terres

<details>
<summary><strong><code>#cobblemon:is_high_mountain</code></strong> · 9 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_peak`
* **Terralith:** `terralith:stony_spires`, `terralith:volcanic_peaks`, `terralith:windswept_spires`, `terralith:yosemite_cliffs`
* **Oh The Biomes We've Gone:** `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:mountains`, `regions_unexplored:arid_mountains`, `regions_unexplored:towering_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_highlands</code></strong> · 6 entrées</summary>

* **Minecraft:** `minecraft:meadow`
* **Terralith:** `terralith:alpine_highlands`, `terralith:arid_highlands`, `terralith:blooming_plateau`, `terralith:highlands`
* **Regions Unexplored:** `regions_unexplored:highland_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_hill</code></strong> · 3 entrées</summary>

* **Minecraft:** `minecraft:windswept_hills`, `minecraft:windswept_forest`, `minecraft:windswept_gravelly_hills`

</details>

<details>
<summary><strong><code>#cobblemon:is_hills</code></strong> · 18 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_hill`, `#cobblemon:is_highlands`, `#c:mountain_slope`, `#forge:is_slope`, `#c:is_hill`, `#c:is_mountain/slope`, `#c:is_windswept`
* **Terralith:** `terralith:blooming_valley`, `terralith:forested_highlands`, `terralith:lavender_valley`, `terralith:lush_valley`, `terralith:moonlight_valley`, `terralith:sakura_valley`, `terralith:savanna_slopes`, `terralith:temperate_highlands`, `terralith:yosemite_lowlands`
* **Regions Unexplored:** `regions_unexplored:mauve_hills`, `regions_unexplored:poppy_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_mountain</code></strong> · 14 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_mountain`, `#cobblemon:is_high_mountain`, `#cobblemon:is_hills`, `#forge:is_mountain`, `#c:is_mountain`
* **Terralith:** `terralith:stony_spires`, `terralith:volcanic_peaks`, `terralith:windswept_spires`, `terralith:yosemite_cliffs`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`, `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:mountains`, `regions_unexplored:arid_mountains`, `regions_unexplored:towering_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_peak</code></strong> · 12 entrées</summary>

* **Tags de biome référencés :** `#c:mountain_peak`, `#c:is_mountain/peak`
* **Minecraft:** `minecraft:frozen_peaks`, `minecraft:jagged_peaks`, `minecraft:snowy_slopes`, `minecraft:stony_peaks`
* **Terralith:** `terralith:emerald_peaks`, `terralith:rocky_mountains`, `terralith:scarlet_mountains`, `terralith:windswept_spires`
* **Oh The Biomes We've Gone:** `biomeswevegone:howling_peaks`
* **Regions Unexplored:** `regions_unexplored:icy_heights`

</details>

<details>
<summary><strong><code>#cobblemon:is_plateau</code></strong> · 7 entrées</summary>

* **Tags de biome référencés :** `#forge:is_plateau`, `#byg:is_plateau`, `#c:is_plateau`
* **Minecraft:** `minecraft:savanna_plateau`
* **Regions Unexplored:** `regions_unexplored:barley_fields`, `regions_unexplored:prairie`, `regions_unexplored:steppe`

</details>

<details>
<summary><strong><code>#cobblemon:is_volcanic</code></strong> · 5 entrées</summary>

* **Terralith:** `terralith:volcanic_crater`, `terralith:volcanic_peaks`, `terralith:cave/mantle_caves`
* **Regions Unexplored:** `regions_unexplored:scorching_caves`, `regions_unexplored:ashen_woodland`

</details>

---

## ⛏️ Grottes et souterrains

<details>
<summary><strong><code>#cobblemon:is_abyss</code></strong> · 3 entrées</summary>

* **Minecraft:** `minecraft:deep_dark`
* **Terralith:** `terralith:cave/deep_caves`, `terralith:cave/tuff_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_cave</code></strong> · 15 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_lush_cave`, `#cobblemon:is_dripstone`, `#cobblemon:is_deep_dark`, `#c:is_cave`, `#c:is_underground`
* **Minecraft:** `minecraft:dripstone_caves`, `minecraft:lush_caves`
* **Terralith:** `terralith:cave/andesite_caves`, `terralith:cave/diorite_caves`, `terralith:cave/fungal_caves`, `terralith:cave/granite_caves`, `terralith:cave/infested_caves`, `terralith:cave/thermal_caves`, `terralith:cave/underground_jungle`, `terralith:cave/desert_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_crystal</code></strong> · 0 entrées</summary>

*Aucune entrée de biome n’est actuellement définie pour ce tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_deep</code></strong> · 1 entrée</summary>

* **Tags de biome référencés :** `#minecraft:is_deep_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_deep_dark</code></strong> · 6 entrées</summary>

* **Minecraft:** `minecraft:deep_dark`
* **Terralith:** `terralith:cave/crystal_caves`, `terralith:cave/deep_caves`, `terralith:cave/frostfire_caves`, `terralith:cave/mantle_caves`, `terralith:cave/tuff_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_dripstone</code></strong> · 7 entrées</summary>

* **Minecraft:** `minecraft:dripstone_caves`
* **Terralith:** `terralith:fractured_savanna`, `terralith:stony_spires`
* **Oh The Biomes We've Gone:** `biomeswevegone:dead_sea`
* **Compatibilité BYG :** `byg:dead_sea`
* **Regions Unexplored:** `regions_unexplored:prismachasm`, `regions_unexplored:redstone_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_lush_cave</code></strong> · 4 entrées</summary>

* **Minecraft:** `minecraft:lush_caves`
* **Terralith:** `terralith:cave/fungal_caves`, `terralith:cave/underground_jungle`
* **Regions Unexplored:** `regions_unexplored:bioshroom_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_salt</code></strong> · 5 entrées</summary>

* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:skylands_winter`, `terralith:yellowstone`
* **Regions Unexplored:** `regions_unexplored:chalk_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_thermal</code></strong> · 5 entrées</summary>

* **Terralith:** `terralith:caldera`, `terralith:yellowstone`, `terralith:cave/thermal_caves`
* **Regions Unexplored:** `regions_unexplored:scorching_caves`, `regions_unexplored:tropical_river`

</details>

---

## 🌊 Océans, rivières, lacs et côtes

<details>
<summary><strong><code>#cobblemon:is_beach</code></strong> · 8 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_beach`, `#c:is_beach`
* **Oh The Biomes We've Gone:** `biomeswevegone:basalt_barrera`, `biomeswevegone:dacite_shore`, `biomeswevegone:rainbow_beach`
* **Regions Unexplored:** `regions_unexplored:rocky_reef`, `regions_unexplored:grassy_beach`, `regions_unexplored:gravel_beach`

</details>

<details>
<summary><strong><code>#cobblemon:is_coast</code></strong> · 14 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_beach`, `#cobblemon:is_beach`, `#c:stony_shores`, `#c:is_beach`, `#c:is_stony_shores`
* **Minecraft:** `minecraft:stony_shore`
* **Terralith:** `terralith:white_cliffs`, `terralith:basalt_cliffs`, `terralith:granite_cliffs`
* **Oh The Biomes We've Gone:** `biomeswevegone:basalt_barrera`, `biomeswevegone:dacite_shore`, `biomeswevegone:rainbow_beach`
* **Regions Unexplored:** `regions_unexplored:rocky_reef`, `regions_unexplored:chalk_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_cold_ocean</code></strong> · 4 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_frozen_ocean`
* **Minecraft:** `minecraft:cold_ocean`, `minecraft:deep_cold_ocean`
* **Regions Unexplored:** `regions_unexplored:cold_river`

</details>

<details>
<summary><strong><code>#cobblemon:is_deep_ocean</code></strong> · 4 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_deep_ocean`, `#c:deep_ocean`, `#c:is_deep_ocean`
* **Regions Unexplored:** `regions_unexplored:hyacinth_deeps`

</details>

<details>
<summary><strong><code>#cobblemon:is_freshwater</code></strong> · 3 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_river`, `#cobblemon:is_swamp`
* **Regions Unexplored:** `regions_unexplored:chalk_cliffs`

</details>

<details>
<summary><strong><code>#cobblemon:is_island</code></strong> · 8 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_true_island`, `#cobblemon:is_tropical_island`
* **Minecraft:** `minecraft:mushroom_fields`
* **Terralith:** `terralith:alpha_islands`, `terralith:alpha_islands_winter`, `terralith:mirage_isles`, `terralith:warped_mesa`
* **Compatibilité BYG :** `byg:lush_stacks`

</details>

<details>
<summary><strong><code>#cobblemon:is_kelp</code></strong> · 1 entrée</summary>

* **Regions Unexplored:** `regions_unexplored:tropical_river`

</details>

<details>
<summary><strong><code>#cobblemon:is_lake</code></strong> · 1 entrée</summary>

* **Minecraft:** `minecraft:river`

</details>

<details>
<summary><strong><code>#cobblemon:is_lukewarm</code></strong> · 2 entrées</summary>

* **Minecraft:** `minecraft:deep_lukewarm_ocean`, `minecraft:lukewarm_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_lukewarm_ocean</code></strong> · 6 entrées</summary>

* **Minecraft:** `minecraft:deep_lukewarm_ocean`, `minecraft:lukewarm_ocean`
* **Oh The Biomes We've Gone:** `biomeswevegone:dead_sea`, `biomeswevegone:lush_stacks`
* **Regions Unexplored:** `regions_unexplored:rocky_reef`, `regions_unexplored:tropics`

</details>

<details>
<summary><strong><code>#cobblemon:is_mirage_island</code></strong> · 1 entrée</summary>

* **Terralith:** `terralith:mirage_isles`

</details>

<details>
<summary><strong><code>#cobblemon:is_ocean</code></strong> · 10 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_ocean`, `#cobblemon:is_coast`, `#cobblemon:is_cold_ocean`, `#cobblemon:is_deep_ocean`, `#cobblemon:is_frozen_ocean`, `#cobblemon:is_lukewarm_ocean`, `#cobblemon:is_warm_ocean`, `#cobblemon:is_temperate_ocean`, `#c:is_ocean`
* **Regions Unexplored:** `regions_unexplored:hyacinth_deeps`

</details>

<details>
<summary><strong><code>#cobblemon:is_reef</code></strong> · 1 entrée</summary>

* **Minecraft:** `minecraft:warm_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_river</code></strong> · 6 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_river`, `#c:is_river`
* **Terralith:** `terralith:warm_river`
* **Regions Unexplored:** `regions_unexplored:cold_river`, `regions_unexplored:muddy_river`, `regions_unexplored:tropical_river`

</details>

<details>
<summary><strong><code>#cobblemon:is_temperate_ocean</code></strong> · 2 entrées</summary>

* **Minecraft:** `minecraft:ocean`, `minecraft:deep_ocean`

</details>

<details>
<summary><strong><code>#cobblemon:is_tropical_island</code></strong> · 2 entrées</summary>

* **Regions Unexplored:** `regions_unexplored:tropics`, `regions_unexplored:rocky_reef`

</details>

<details>
<summary><strong><code>#cobblemon:is_true_island</code></strong> · 6 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_tropical_island`
* **Minecraft:** `minecraft:mushroom_fields`
* **Terralith:** `terralith:alpha_islands`, `terralith:alpha_islands_winter`, `terralith:mirage_isles`
* **Oh The Biomes We've Gone:** `biomeswevegone:lush_stacks`

</details>

<details>
<summary><strong><code>#cobblemon:is_warm_ocean</code></strong> · 4 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_kelp`
* **Minecraft:** `minecraft:warm_ocean`
* **Oh The Biomes We've Gone:** `biomeswevegone:lush_stacks`
* **Compatibilité BYG :** `byg:lush_stacks`

</details>

---

## 🌳 Forêts, jungles et végétation

<details>
<summary><strong><code>#cobblemon:is_ancient_overgrown</code></strong> · 13 entrées</summary>

* **Minecraft:** `minecraft:dark_forest`
* **Terralith:** `terralith:cloud_forest`, `terralith:orchid_swamp`
* **Oh The Biomes We've Gone:** `biomeswevegone:cypress_swamplands`, `biomeswevegone:cypress_wetlands`, `biomeswevegone:forgotten_forest`, `biomeswevegone:redwood_thicket`
* **Regions Unexplored:** `regions_unexplored:ancient_delta`, `regions_unexplored:old_growth_bayou`, `regions_unexplored:old_growth_boreal_taiga`, `regions_unexplored:old_growth_forest`, `regions_unexplored:old_growth_golden_boreal_taiga`, `regions_unexplored:redwoods`

</details>

<details>
<summary><strong><code>#cobblemon:is_bamboo</code></strong> · 5 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_bamboo_forest`
* **Minecraft:** `minecraft:bamboo_jungle`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`
* **Compatibilité BYG :** `byg:bamboo_forest`
* **Regions Unexplored:** `regions_unexplored:bamboo_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_bamboo_forest</code></strong> · 2 entrées</summary>

* **Minecraft:** `minecraft:bamboo_jungle`
* **Regions Unexplored:** `regions_unexplored:bamboo_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_cherry_blossom</code></strong> · 5 entrées</summary>

* **Minecraft:** `minecraft:cherry_grove`
* **Terralith:** `terralith:sakura_grove`, `terralith:sakura_valley`
* **Compatibilité BYG :** `byg:cherry_blossom_forest`, `byg:bamboo_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_dense</code></strong> · 5 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_jungle`, `#forge:is_dense/overworld`, `#c:is_dense_vegetation/overworld`
* **Minecraft:** `minecraft:dark_forest`, `minecraft:mangrove_swamp`

</details>

<details>
<summary><strong><code>#cobblemon:is_forest</code></strong> · 32 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_forest`, `#cobblemon:is_bamboo_forest`, `#c:flower_forests`, `#c:is_tree/deciduous`, `#c:is_forest`, `#c:is_flower_forest`, `#c:tree/deciduous`
* **Minecraft:** `minecraft:cherry_grove`
* **Terralith:** `terralith:alpha_islands`, `terralith:alpha_islands_winter`, `terralith:blooming_valley`, `terralith:forested_highlands`, `terralith:lavender_forest`, `terralith:lavender_valley`, `terralith:mirage_isles`, `terralith:sakura_grove`, `terralith:sakura_valley`, `terralith:temperate_highlands`
* **Regions Unexplored:** `regions_unexplored:alpha_grove`, `regions_unexplored:autumnal_maple_forest`, `regions_unexplored:deciduous_forest`, `regions_unexplored:maple_forest`, `regions_unexplored:redwoods`, `regions_unexplored:sparse_redwoods`, `regions_unexplored:magnolia_woodland`, `regions_unexplored:mauve_hills`, `regions_unexplored:mountains`, `regions_unexplored:orchard`, `regions_unexplored:pine_slopes`, `regions_unexplored:silver_birch_forest`, `regions_unexplored:temperate_grove`, `regions_unexplored:willow_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_jungle</code></strong> · 11 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_jungle`, `#cobblemon:is_bamboo_forest`, `#c:is_jungle`
* **Terralith:** `terralith:cave/underground_jungle`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`, `biomeswevegone:fragment_jungle`, `biomeswevegone:jacaranda_jungle`, `biomeswevegone:tropical_rainforest`
* **Regions Unexplored:** `regions_unexplored:rainforest`, `regions_unexplored:sparse_rainforest`, `regions_unexplored:eucalyptus_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_lush</code></strong> · 7 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_lush_cave`, `#cobblemon:is_lush_surface`, `#c:is_lush`
* **Minecraft:** `minecraft:lush_caves`
* **Terralith:** `terralith:cave/fungal_caves`, `terralith:cave/underground_jungle`
* **Compatibilité BYG :** `byg:lush_stacks`

</details>

<details>
<summary><strong><code>#cobblemon:is_lush_surface</code></strong> · 18 entrées</summary>

* **Minecraft:** `minecraft:jungle`, `minecraft:sparse_jungle`, `minecraft:bamboo_jungle`, `minecraft:mangrove_swamp`
* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:jungle_mountains`, `terralith:rocky_jungle`, `terralith:tropical_jungle`
* **Oh The Biomes We've Gone:** `biomeswevegone:crag_gardens`, `biomeswevegone:fragment_jungle`, `biomeswevegone:jacaranda_jungle`, `biomeswevegone:lush_stacks`, `biomeswevegone:tropical_rainforest`
* **Regions Unexplored:** `regions_unexplored:ancient_delta`, `regions_unexplored:eucalyptus_forest`, `regions_unexplored:rainforest`, `regions_unexplored:sparse_rainforest`

</details>

<details>
<summary><strong><code>#cobblemon:is_shrubland</code></strong> · 12 entrées</summary>

* **Terralith:** `terralith:alpine_highlands`, `terralith:arid_highlands`, `terralith:brushland`, `terralith:cold_shrubland`, `terralith:hot_shrubland`, `terralith:rocky_shrubland`, `terralith:shrubland`
* **Oh The Biomes We've Gone:** `biomeswevegone:crimson_tundra`, `biomeswevegone:allium_shrubland`, `biomeswevegone:firecracker_chaparral`
* **Regions Unexplored:** `regions_unexplored:shrubland`, `regions_unexplored:dry_bushland`

</details>

<details>
<summary><strong><code>#cobblemon:is_sparse</code></strong> · 8 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_arid`, `#cobblemon:is_grassland`, `#cobblemon:is_tundra`, `#c:vegetation_sparse`, `#forge:is_sparse/overworld`, `#c:is_sparse_vegetation/overworld`
* **Regions Unexplored:** `regions_unexplored:sparse_rainforest`, `regions_unexplored:sparse_redwoods`

</details>

<details>
<summary><strong><code>#cobblemon:is_swamp</code></strong> · 12 entrées</summary>

* **Tags de biome référencés :** `#biomeswevegone:swamp`, `#c:is_swamp`, `#byg:is_swamp`
* **Minecraft:** `minecraft:mangrove_swamp`, `minecraft:swamp`
* **Terralith:** `terralith:ice_marsh`, `terralith:orchid_swamp`
* **Regions Unexplored:** `regions_unexplored:bayou`, `regions_unexplored:fen`, `regions_unexplored:marsh`, `regions_unexplored:muddy_river`, `regions_unexplored:old_growth_bayou`

</details>

<details>
<summary><strong><code>#cobblemon:is_taiga</code></strong> · 28 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_taiga`, `#c:tree_coniferous`, `#forge:is_coniferous`, `#biomeswevegone:taiga`, `#c:is_taiga`, `#cobblemon:is_snowy_taiga`, `#c:tree/coniferous`
* **Minecraft:** `minecraft:grove`
* **Terralith:** `terralith:alpine_grove`, `terralith:haze_mountain`, `terralith:ice_marsh`, `terralith:moonlight_grove`, `terralith:moonlight_valley`, `terralith:shield_clearing`, `terralith:siberian_grove`, `terralith:siberian_taiga`, `terralith:snowy_maple_forest`, `terralith:snowy_shield`, `terralith:wintry_lowlands`, `terralith:bryce_canyon`, `terralith:cloud_forest`, `terralith:shield`, `terralith:yellowstone`, `terralith:yosemite_lowlands`
* **Regions Unexplored:** `regions_unexplored:blackwood_taiga`, `regions_unexplored:boreal_taiga`, `regions_unexplored:golden_boreal_taiga`, `regions_unexplored:pine_taiga`

</details>

---

## 🌾 Plaines, prairies et biomes arides

<details>
<summary><strong><code>#cobblemon:is_arid</code></strong> · 5 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_hot_arid`, `#cobblemon:is_sandy`, `#cobblemon:is_savanna`, `#cobblemon:is_badlands`, `#cobblemon:is_desert`

</details>

<details>
<summary><strong><code>#cobblemon:is_badlands</code></strong> · 11 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_badlands`, `#c:is_badlands`
* **Terralith:** `terralith:ashen_savanna`, `terralith:red_oasis`, `terralith:warped_mesa`, `terralith:white_mesa`
* **Oh The Biomes We've Gone:** `biomeswevegone:red_rock_valley`, `biomeswevegone:rugged_badlands`, `biomeswevegone:sierra_badlands`
* **Regions Unexplored:** `regions_unexplored:arid_mountains`, `regions_unexplored:outback`

</details>

<details>
<summary><strong><code>#cobblemon:is_desert</code></strong> · 18 entrées</summary>

* **Tags de biome référencés :** `#c:is_desert`, `#byg:is_desert`
* **Minecraft:** `minecraft:desert`
* **Terralith:** `terralith:ancient_sands`, `terralith:desert_canyon`, `terralith:desert_oasis`, `terralith:desert_spires`, `terralith:lush_desert`, `terralith:red_oasis`, `terralith:sandstone_valley`, `terralith:cave/desert_caves`
* **Oh The Biomes We've Gone:** `biomeswevegone:atacama_outback`, `biomeswevegone:mojave_desert`, `biomeswevegone:windswept_desert`, `biomeswevegone:rugged_badlands`
* **Regions Unexplored:** `regions_unexplored:saguaro_desert`, `regions_unexplored:joshua_desert`
* **YUNG's Cave Biomes:** `yungscavebiomes:lost_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_grassland</code></strong> · 14 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_plains`, `#cobblemon:is_savanna`
* **Oh The Biomes We've Gone:** `biomeswevegone:allium_shrubland`, `biomeswevegone:amaranth_grassland`, `biomeswevegone:coconino_meadow`, `biomeswevegone:crimson_tundra`, `biomeswevegone:firecracker_chaparral`, `biomeswevegone:prairie`, `biomeswevegone:pumpkin_valley`, `biomeswevegone:rose_fields`, `biomeswevegone:temperate_grove`
* **Regions Unexplored:** `regions_unexplored:grassland`, `regions_unexplored:prairie`, `regions_unexplored:shrubland`

</details>

<details>
<summary><strong><code>#cobblemon:is_hot_arid</code></strong> · 39 entrées</summary>

* **Minecraft:** `minecraft:desert`, `minecraft:badlands`, `minecraft:eroded_badlands`, `minecraft:wooded_badlands`, `minecraft:savanna`, `minecraft:savanna_plateau`, `minecraft:windswept_savanna`
* **Terralith:** `terralith:ancient_sands`, `terralith:arid_highlands`, `terralith:ashen_savanna`, `terralith:bryce_canyon`, `terralith:desert_canyon`, `terralith:desert_oasis`, `terralith:desert_spires`, `terralith:fractured_savanna`, `terralith:painted_mountains`, `terralith:red_oasis`, `terralith:sandstone_valley`, `terralith:savanna_badlands`, `terralith:savanna_slopes`, `terralith:warped_mesa`, `terralith:white_mesa`
* **Oh The Biomes We've Gone:** `biomeswevegone:araucaria_savanna`, `biomeswevegone:atacama_outback`, `biomeswevegone:baobab_savanna`, `biomeswevegone:ironwood_gour`, `biomeswevegone:mojave_desert`, `biomeswevegone:red_rock_peaks`, `biomeswevegone:red_rock_valley`, `biomeswevegone:rugged_badlands`, `biomeswevegone:sierra_badlands`, `biomeswevegone:windswept_desert`
* **Regions Unexplored:** `regions_unexplored:arid_mountains`, `regions_unexplored:baobab_savanna`, `regions_unexplored:dry_bushland`, `regions_unexplored:joshua_desert`, `regions_unexplored:outback`, `regions_unexplored:saguaro_desert`, `regions_unexplored:steppe`

</details>

<details>
<summary><strong><code>#cobblemon:is_plains</code></strong> · 26 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_highlands`, `#c:plains`, `#forge:is_plains`, `#c:is_plains`, `#byg:is_plains`
* **Minecraft:** `minecraft:plains`, `minecraft:sunflower_plains`
* **Terralith:** `terralith:brushland`, `terralith:steppe`, `terralith:valley_clearing`, `terralith:shrubland`
* **Oh The Biomes We've Gone:** `biomeswevegone:allium_shrubland`, `biomeswevegone:amaranth_grassland`, `biomeswevegone:coconino_meadow`, `biomeswevegone:crimson_tundra`, `biomeswevegone:firecracker_chaparral`, `biomeswevegone:prairie`, `biomeswevegone:pumpkin_valley`, `biomeswevegone:rose_fields`, `biomeswevegone:temperate_grove`
* **Regions Unexplored:** `regions_unexplored:barley_fields`, `regions_unexplored:shrubland`, `regions_unexplored:clover_plains`, `regions_unexplored:grassland`, `regions_unexplored:prairie`, `regions_unexplored:flower_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_sandy</code></strong> · 4 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_badlands`, `#cobblemon:is_desert`, `#byg:is_sandy`, `#c:is_sandy`

</details>

<details>
<summary><strong><code>#cobblemon:is_savanna</code></strong> · 15 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_savanna`, `#biomeswevegone:savanna`, `#c:is_savanna`
* **Terralith:** `terralith:arid_highlands`, `terralith:ashen_savanna`, `terralith:brushland`, `terralith:desert_oasis`, `terralith:fractured_savanna`, `terralith:hot_shrubland`, `terralith:red_oasis`, `terralith:savanna_badlands`, `terralith:savanna_slopes`, `terralith:shrubland`
* **Regions Unexplored:** `regions_unexplored:baobab_savanna`, `regions_unexplored:steppe`

</details>

<details>
<summary><strong><code>#cobblemon:is_temperate</code></strong> · 2 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_forest`, `#cobblemon:is_plains`

</details>

<details>
<summary><strong><code>#cobblemon:is_tropical</code></strong> · 2 entrées</summary>

* **Regions Unexplored:** `regions_unexplored:tropics`, `regions_unexplored:tropical_river`

</details>

---

## 🌺 Biomes floraux, magiques et saisonniers

<details>
<summary><strong><code>#cobblemon:is_autumn</code></strong> · 10 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_arid`, `#cobblemon:is_cold_ocean`, `#cobblemon:is_mountain`, `#cobblemon:is_mushroom`, `#cobblemon:is_taiga`
* **Terralith:** `terralith:skylands_autumn`
* **Regions Unexplored:** `regions_unexplored:autumnal_maple_forest`, `regions_unexplored:golden_boreal_taiga`, `regions_unexplored:maple_forest`, `regions_unexplored:orchard`

</details>

<details>
<summary><strong><code>#cobblemon:is_enchanted</code></strong> · 11 entrées</summary>

* **Tags de biome référencés :** `#c:is_magical`
* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:mirage_isles`, `terralith:moonlight_grove`, `terralith:moonlight_valley`
* **Oh The Biomes We've Gone:** `biomeswevegone:enchanted_tangle`, `biomeswevegone:skyris_vale`, `biomeswevegone:weeping_witch_forest`
* **Regions Unexplored:** `regions_unexplored:prismachasm`, `regions_unexplored:bioshroom_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_floral</code></strong> · 34 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_cherry_blossom`, `#c:is_floral`, `#c:is_flower_forest`, `#byg:is_floral`, `#c:flower_forest`
* **Minecraft:** `minecraft:cherry_grove`, `minecraft:flower_forest`, `minecraft:meadow`, `minecraft:sunflower_plains`
* **Terralith:** `terralith:blooming_plateau`, `terralith:blooming_valley`, `terralith:lavender_forest`, `terralith:lavender_valley`, `terralith:sakura_grove`, `terralith:sakura_valley`, `terralith:cloud_forest`
* **Oh The Biomes We've Gone:** `biomeswevegone:allium_shrubland`, `biomeswevegone:amaranth_grassland`, `biomeswevegone:coconino_meadow`, `biomeswevegone:orchard`, `biomeswevegone:sakura_grove`
* **Compatibilité BYG :** `byg:amaranth_fields`, `byg:allium_fields`, `byg:rose_fields`, `byg:skyris_vale`, `byg:orchard`
* **Regions Unexplored:** `regions_unexplored:clover_plains`, `regions_unexplored:flower_fields`, `regions_unexplored:highland_fields`, `regions_unexplored:magnolia_woodland`, `regions_unexplored:mauve_hills`, `regions_unexplored:orchard`, `regions_unexplored:poppy_fields`, `regions_unexplored:rocky_meadow`

</details>

<details>
<summary><strong><code>#cobblemon:is_haunted</code></strong> · 0 entrées</summary>

*Aucune entrée de biome n’est actuellement définie pour ce tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_infested</code></strong> · 1 entrée</summary>

* **Terralith:** `terralith:cave/infested_caves`

</details>

<details>
<summary><strong><code>#cobblemon:is_magical</code></strong> · 12 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_enchanted`, `#c:is_magical`, `#byg:is_magical`
* **Minecraft:** `minecraft:dark_forest`
* **Terralith:** `terralith:amethyst_canyon`, `terralith:amethyst_rainforest`, `terralith:mirage_isles`, `terralith:moonlight_grove`, `terralith:moonlight_valley`
* **Compatibilité BYG :** `byg:skyris_vale`
* **Regions Unexplored:** `regions_unexplored:fungal_fen`, `regions_unexplored:mauve_hills`

</details>

<details>
<summary><strong><code>#cobblemon:is_mushroom</code></strong> · 16 entrées</summary>

* **Tags de biome référencés :** `#c:mushroom`, `#forge:is_mushroom`, `#c:is_mushroom`, `#c:is_mushroom_island`
* **Minecraft:** `minecraft:dark_forest`, `minecraft:mushroom_fields`
* **Terralith:** `terralith:mirage_isles`, `terralith:cave/fungal_caves`
* **Oh The Biomes We've Gone:** `biomeswevegone:ebony_woods`, `biomeswevegone:jacaranda_jungle`
* **Compatibilité BYG :** `byg:temperate_rainforest`, `byg:tropical_rainforest`, `byg:weeping_witch_forest`
* **Regions Unexplored:** `regions_unexplored:bioshroom_caves`, `regions_unexplored:blackwood_taiga`, `regions_unexplored:fungal_fen`

</details>

<details>
<summary><strong><code>#cobblemon:is_ominous</code></strong> · 7 entrées</summary>

* **Tags de biome référencés :** `#c:is_spooky`
* **Minecraft:** `minecraft:dark_forest`
* **Oh The Biomes We've Gone:** `biomeswevegone:black_forest`, `biomeswevegone:forgotten_forest`, `biomeswevegone:weeping_witch_forest`
* **Regions Unexplored:** `regions_unexplored:ashen_woodland`, `regions_unexplored:blackwood_taiga`

</details>

<details>
<summary><strong><code>#cobblemon:is_spooky</code></strong> · 7 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_ominous`, `#byg:is_spooky`, `#c:is_spooky`
* **Minecraft:** `minecraft:dark_forest`
* **Oh The Biomes We've Gone:** `biomeswevegone:pale_bog`
* **Compatibilité BYG :** `byg:ebony_woods`
* **Regions Unexplored:** `regions_unexplored:pumpkin_fields`

</details>

<details>
<summary><strong><code>#cobblemon:is_spring</code></strong> · 5 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_floral`, `#cobblemon:is_lukewarm`, `#cobblemon:is_magical`, `#cobblemon:is_plains`
* **Terralith:** `terralith:skylands_spring`

</details>

<details>
<summary><strong><code>#cobblemon:is_summer</code></strong> · 10 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_forest`, `#cobblemon:is_jungle`, `#cobblemon:is_lush`, `#cobblemon:is_reef`, `#cobblemon:is_warm_ocean`, `#cobblemon:is_swamp`, `#c:swamp`, `#forge:is_swamp`
* **Terralith:** `terralith:skylands_summer`, `terralith:ice_marsh`

</details>

---

## 🔥 Biomes du Nether

<details>
<summary><strong><code>#cobblemon:is_nether_basalt</code></strong> · 4 entrées</summary>

* **Minecraft:** `minecraft:basalt_deltas`
* **Incendium:** `incendium:ash_barrens`, `incendium:volcanic_deltas`, `incendium:withered_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_crimson</code></strong> · 1 entrée</summary>

* **Minecraft:** `minecraft:crimson_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_desert</code></strong> · 3 entrées</summary>

* **Minecraft:** `minecraft:soul_sand_valley`
* **Incendium:** `incendium:infernal_dunes`, `incendium:weeping_valley`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_forest</code></strong> · 0 entrées</summary>

*Aucune entrée de biome n’est actuellement définie pour ce tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_fungus</code></strong> · 3 entrées</summary>

* **Minecraft:** `minecraft:crimson_forest`, `minecraft:warped_forest`
* **Incendium:** `incendium:inverted_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_mountain</code></strong> · 2 entrées</summary>

* **Minecraft:** `minecraft:basalt_deltas`
* **Incendium:** `incendium:volcanic_deltas`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_overgrowth</code></strong> · 0 entrées</summary>

*Aucune entrée de biome n’est actuellement définie pour ce tag.*

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_quartz</code></strong> · 1 entrée</summary>

* **Incendium:** `incendium:quartz_flats`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_soul_fire</code></strong> · 3 entrées</summary>

* **Minecraft:** `minecraft:soul_sand_valley`
* **Incendium:** `incendium:quartz_flats`, `incendium:weeping_valley`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_soul_sand</code></strong> · 2 entrées</summary>

* **Minecraft:** `minecraft:soul_sand_valley`
* **Incendium:** `incendium:weeping_valley`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_toxic</code></strong> · 2 entrées</summary>

* **Regions Unexplored:** `regions_unexplored:mycotoxic_undergrowth`
* **Incendium:** `incendium:toxic_heap`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_warped</code></strong> · 1 entrée</summary>

* **Minecraft:** `minecraft:warped_forest`

</details>

<details>
<summary><strong><code>#cobblemon:is_nether_wasteland</code></strong> · 4 entrées</summary>

* **Minecraft:** `minecraft:nether_wastes`
* **Regions Unexplored:** `regions_unexplored:infernal_holt`
* **Incendium:** `incendium:ash_barrens`, `incendium:toxic_heap`

</details>

---

## 🌀 Dimensions et mondes spéciaux

<details>
<summary><strong><code>#cobblemon:is_aether</code></strong> · 4 entrées</summary>

* **The Aether:** `aether:skyroot_forest`, `aether:skyroot_grove`, `aether:skyroot_meadow`, `aether:skyroot_woodland`

</details>


<details>
<summary><strong><code>#cobblemon:is_end</code></strong> · 4 entrées</summary>

* **Tags de biome référencés :** `#minecraft:is_end`, `#c:is_end`, `#nullscape:all_nullscape_biomes`
* **Nullscape:** `nullscape:shadowlands`

</details>

<details>
<summary><strong><code>#cobblemon:is_otherside</code></strong> · 4 entrées</summary>

* **Deeper and Darker:** `deeperdarker:deeplands`, `deeperdarker:echoing_forest`, `deeperdarker:blooming_caverns`, `deeperdarker:overcast_columns`

</details>

<details>
<summary><strong><code>#cobblemon:is_overworld</code></strong> · 22 entrées</summary>

* **Tags de biome référencés :** `#cobblemon:is_arid`, `#cobblemon:is_cave`, `#cobblemon:is_coast`, `#cobblemon:is_deep_dark`, `#cobblemon:is_floral`, `#cobblemon:is_forest`, `#cobblemon:is_freshwater`, `#cobblemon:is_grassland`, `#cobblemon:is_highlands`, `#cobblemon:is_island`, `#cobblemon:is_jungle`, `#cobblemon:is_magical`, `#cobblemon:is_mountain`, `#cobblemon:is_mushroom`, `#cobblemon:is_ocean`, `#minecraft:is_overworld`, `#cobblemon:is_sky`, `#cobblemon:is_spooky`, `#cobblemon:is_temperate`, `#cobblemon:is_thermal`, `#cobblemon:is_volcanic`, `#c:is_overworld`

</details>

<details>
<summary><strong><code>#cobblemon:is_sky</code></strong> · 4 entrées</summary>

* **Terralith:** `terralith:skylands_autumn`, `terralith:skylands_spring`, `terralith:skylands_summer`, `terralith:skylands_winter`

</details>


<details>
<summary><strong><code>#cobblemon:is_void</code></strong> · 1 entrée</summary>

* **Minecraft:** `minecraft:the_void`

</details>

---

{% hint style="success" %}
## Nous contacter

<p align="center">
Si vous avez des questions, des suggestions ou des modifications à proposer, n’hésitez pas à nous rejoindre sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et à contacter directement <strong>@FabLeKebab</strong> sur le serveur pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.
</p>
{% endhint %}
