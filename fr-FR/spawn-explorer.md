# 🔎 Explorateur des apparitions Pokémon

{% hint style="info" %}
**Source : fichiers JSON réels du datapack Cobblemon Biome Expanded Spawns v6.4.1**, à une révision source précise. L'explorateur référence **149 règles standards supplémentaires d'apparition de Pokémon sauvages**, avec leurs identifiants exacts de biomes, raretés, niveaux, poids relatifs et éventuelles conditions de nuit et de luminosité du ciel. Ce n'est **pas** un Pokédex complet : les spawns natifs de Cobblemon, les autres mods et les rencontres de structures ou événements ne sont pas inclus.
{% endhint %}

## Rechercher une apparition naturelle supplémentaire

Recherchez par Pokémon, rareté, nom de biome ou identifiant Minecraft. Les informations proviennent **directement des JSON du datapack**, pas simplement du changelog. Les poids et catégories de rareté ne constituent **pas** des probabilités de rencontre.

<div id="spawn-explorer" class="wiki-spawn-explorer" data-spawn-language="fr">
  <div class="wiki-spawn-filters">
    <label for="spawn-query">Pokémon ou biome <input id="spawn-query" type="search" placeholder="Articuno, Flower Forest…" autocomplete="off"></label>
    <label for="spawn-rarity">Rareté <select id="spawn-rarity"><option value="">Toutes les raretés</option></select></label>
    <label for="spawn-biome">Biome <select id="spawn-biome"><option value="">Tous les biomes</option></select></label>
    <label for="spawn-time">Horaire <select id="spawn-time"><option value="">Toutes conditions</option><option value="night">Nuit uniquement</option></select></label>
  </div>
  <p id="spawn-count" role="status" aria-live="polite">Chargement des apparitions supplémentaires vérifiées…</p>
  <div id="spawn-results" class="wiki-spawn-results"></div>
  <p class="wiki-spawn-source">Données : <strong>fichiers JSON du datapack Cobblemon Biome Expanded Spawns v6.4.1</strong>, 149 fichiers standards. Les 24 fichiers optionnels destinés à d'autres mods, dont Terralith, sont exclus. Les spawns natifs de Cobblemon restent distincts.</p>
</div>

## Bien interpréter les résultats

- **Rareté** : catégorie d'apparition de Cobblemon, et non probabilité exprimée en pourcentage. Les poids et la disponibilité d'autres spawns influencent également les rencontres.
- **Niveaux** : plage de niveaux admissibles pour l'entrée documentée.
- **Biomes** : identifiants Minecraft exacts des fichiers du datapack. Chaque résultat comporte un lien vers son JSON source.
- **Heure et lumière du ciel** : restrictions supplémentaires indiquées lorsqu'elles existent. L'absence de condition horaire ne garantit pas une rencontre de jour.
- **Poids relatif** : intervient dans la sélection des spawns, mais ne représente pas un pourcentage de chance.
- **Versions** : la dernière version publique du modpack vérifiée sur le wiki est la **6.3**, alors que le datapack sélectionné ici est la **v6.4.1**. Ces règles ne sont pas nécessairement installées sur tous les mondes ou serveurs.

**Vérification de la source :** [Métadonnées du datapack Cobblemon Biome Expanded Spawns](https://github.com/LevelsFR/Cobblemon-Biome-Expanded-Spawns/blob/9a73f06f7a46fe57360299a1cd45436485a4f575/pack.mcmeta) et fichiers JSON individuels liés dans chaque résultat.

Voir aussi [Pokémon et apparitions](pokemon-and-spawns.md), [Référence des tags de biome](pokemons-guides/biome-tags-reference.md) et l'[Historique des versions](version-history.md).
