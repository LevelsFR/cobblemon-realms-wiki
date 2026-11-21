# 🔎 Explorateur des apparitions Pokémon

{% hint style="info" %}
**Source : notes de version Cobblemon Biome Expanded Spawns v6.4.1.** Cet outil référence **149 apparitions naturelles supplémentaires de Pokémon sauvages** décrites dans le changelog du datapack. Ce n'est **pas** un Pokédex complet : les spawns natifs de Cobblemon, les autres mods et toutes les conditions techniques ou rencontres de structures ne sont pas inclus.
{% endhint %}

## Rechercher une apparition naturelle supplémentaire

Filtrez les Pokémon par nom, rareté ou biome. Les biomes sont affichés sous leurs **noms d'origine dans les notes v6.4.1**. Les raretés et plages de niveaux concernent ces règles supplémentaires et ne garantissent aucune rencontre.

<div id="spawn-explorer" class="wiki-spawn-explorer" data-spawn-language="fr">
  <div class="wiki-spawn-filters">
    <label for="spawn-query">Pokémon ou biome <input id="spawn-query" type="search" placeholder="Articuno, Flower Forest…" autocomplete="off"></label>
    <label for="spawn-rarity">Rareté <select id="spawn-rarity"><option value="">Toutes les raretés</option></select></label>
    <label for="spawn-biome">Biome <select id="spawn-biome"><option value="">Tous les biomes</option></select></label>
  </div>
  <p id="spawn-count" role="status" aria-live="polite">Chargement des apparitions supplémentaires vérifiées…</p>
  <div id="spawn-results" class="wiki-spawn-results"></div>
  <p class="wiki-spawn-source">Données : Cobblemon Biome Expanded Spawns v6.4.1 (extrait des notes de version). Les spawns natifs, les mécaniques additionnelles et certaines conditions techniques ne sont pas représentés.</p>
</div>

## Bien interpréter les résultats

- **Rareté** : catégorie d'apparition de Cobblemon, et non probabilité exprimée en pourcentage. Les poids et la disponibilité d'autres spawns influencent également les rencontres.
- **Niveaux** : plage de niveaux admissibles pour l'entrée documentée.
- **Biomes** : lieux indiqués pour ces nouvelles règles. Les spawns natifs et les conditions d'autres mods peuvent proposer d'autres emplacements pour la même espèce.
- **Versions** : la dernière version publique du modpack mentionnée dans cet historique est la **6.3**, mais les notes du datapack consultées concernent la **v6.4.1**. Ces règles ne doivent pas être considérées comme automatiquement déployées sur tous les mondes ou serveurs.

Voir aussi [Pokémon et apparitions](pokemon-and-spawns.md), [Référence des tags de biome](pokemons-guides/biome-tags-reference.md) et l'[Historique des versions](version-history.md).
