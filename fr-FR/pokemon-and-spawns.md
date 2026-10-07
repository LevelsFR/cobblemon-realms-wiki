# 🐾 Pokémon et apparitions

{% hint style="info" %}
<p align="center">
<strong>Cobblemon Realms</strong> utilise le datapack personnalisé <strong>Biome Expanded Spawns (branche v6.x)</strong> pour proposer des apparitions adaptées à chaque environnement du modpack. Un Pokémon peut apparaître selon son <strong>biome</strong>, la <strong>dimension</strong>, l'<strong>heure</strong>, la <strong>météo</strong>, la <strong>luminosité</strong>, l'<strong>altitude</strong>, les <strong>structures</strong>, les <strong>blocs environnants</strong> et bien d'autres conditions.
</p>
{% endhint %}

---

## 🧭 Comment fonctionne le système ?

Contrairement à un système où chaque Pokémon serait simplement associé à un biome, **chaque espèce possède ses propres règles d'apparition**.

Un même Pokémon peut donc disposer de plusieurs apparitions différentes :

| 🌿 Exemple | 📍 Situation |
| --- | --- |
| ☀️ Apparition commune | Forêt pendant la journée |
| 🌙 Apparition rare | Autre biome pendant la nuit |
| 🏛️ Rencontre spéciale | À proximité d'une structure |
| ✨ Apparition Ultra Rare | Dans une dimension particulière |

{% hint style="warning" %}
⚠️ <strong>Entrer dans le bon biome ne garantit pas une apparition.</strong> D'autres conditions peuvent être nécessaires, comme l'heure, la météo, la luminosité, l'altitude, la position d'apparition ou encore la présence de certains blocs.
{% endhint %}

---

## 📚 Ce que vous trouverez dans ce guide

| 📌 Section | 🔎 Ce qu'elle explique |
| --- | --- |
| 🌍 **Dimensions** | Les différentes zones dans lesquelles les Pokémon peuvent apparaître |
| 🧭 **Biomes & tags** | Le fonctionnement des catégories de biomes utilisées par le datapack |
| ⚙️ **Conditions** | Heure, météo, lumière, altitude, structures, blocs et positions |
| ✨ **Rareté** | Les différentes catégories de rencontres |
| 🔎 **Recherche** | `/checkspawns` et les outils Discord |
| 🧠 **Conseils** | Quelques méthodes pour optimiser vos recherches |

---

## 🌍 Dimensions et zones d'apparition

Chaque dimension possède ses propres environnements et donc ses propres groupes de Pokémon.

| 🌎 Dimension | 📝 Fonctionnement général |
| --- | --- |
| 🌎 **Overworld** | Principal terrain d'exploration : forêts, océans, grottes, montagnes, structures et autres environnements naturels. |
| 🔥 **Nether** | Rencontres adaptées aux environnements volcaniques, à la lave, aux fossiles, aux ruines et aux structures du Nether. |
| 🌌 **End** | Pokémon rares et rencontres de fin de progression répartis dans les différents environnements et structures de l'End. |
| ☁️ **The Aether** | Apparitions personnalisées dans les biomes de l'Aether, avec leurs propres règles de biome, d'altitude et de dimension. |
| 🌑 **The Otherside** | Rencontres principalement orientées Spectre, Ténèbres, Dragon, Psy et contenu de fin de progression. |
| 🐝 **The Bumblezone (si accessible)** | Le datapack contient aussi des règles pour des biomes de The Bumblezone. Ces apparitions nécessitent que la dimension correspondante soit effectivement installée et accessible. |

### 📖 Guides dédiés

- [☁️ **Apparitions de l'Aether**](mods-guides/worlds_and_dimensions/aether.md)
- [🌑 **Apparitions de The Otherside**](mods-guides/worlds_and_dimensions/deeper_and_darker.md)

{% hint style="info" %}
💡 Les guides dédiés aux dimensions présentent les rencontres **biome par biome**, ainsi que les niveaux de rareté et les conditions particulières lorsqu'elles sont importantes.
{% endhint %}

---

## 🧭 Biomes et tags de biome

Le datapack utilise des **tags de biome** afin de regrouper plusieurs environnements partageant les mêmes caractéristiques.

Par exemple :

- `#cobblemon:is_forest` → environnements forestiers
- `#cobblemon:is_ocean` → environnements océaniques
- `#cobblemon:is_cave` → grottes et environnements souterrains
- `#cobblemon:is_mountain` → montagnes et reliefs
- `#cobblemon:is_floral` → environnements riches en végétation
- `#cobblemon:is_otherside` → environnements de The Otherside
- `#aether:is_aether` → environnements de l'Aether

Un même tag peut regrouper des **biomes Vanilla et des biomes ajoutés par des mods**, permettant de définir une règle d'apparition sans devoir répertorier chaque biome individuellement.

Certains tags contiennent également des références à d'autres tags ou à des biomes de mods **optionnels** : un tag présent dans le fichier ne prouve pas qu'un biome est accessible dans votre installation.

⮕ Consultez la [**Référence des tags de biome**](pokemons-guides/biome-tags-reference.md) pour retrouver les tags utilisés par le modpack et les biomes associés.

---

## 📂 Comment lire les données du datapack

Le datapack fourni pour la branche **v6.x** contient des fichiers d'apparitions individuelles, des **troupeaux** (`pokemon-herd`), des **tags de biome**, des presets et des pools d'habitats. Il ne s'agit donc pas d'une simple liste « Pokémon → biome ».

| Élément | Ce qu'il signifie |
| --- | --- |
| **Pokémon / forme** | L'espèce, et parfois une forme ou des propriétés spéciales |
| **Biome ou tag** | Les lieux où la règle peut s'appliquer ; un tag commençant par `#` représente plusieurs biomes |
| **Conditions** | Les paramètres qui doivent être réunis : lumière, heure, météo, altitude, structure, etc. |
| **Exclusions** | Les paramètres qui empêchent cette règle de fonctionner, même si le biome correspond |
| **Position** | Pokémon au sol, immergé, à la surface, au fond de l'eau ou obtenu par la pêche |
| **Rareté et poids** | Le groupe de sélection et le poids relatif **par rapport aux autres règles éligibles**, pas un pourcentage fixe de capture ou d'apparition |
| **Troupeau** | Une règle d'apparition de groupe dont les membres et les tailles varient selon sa configuration |

{% hint style="info" %}
Un tag de biome n'est **pas** un biome Minecraft unique. Par exemple, le datapack associe `#cobblemon:is_jungle` à des biomes vanilla et, lorsque les mods correspondants sont installés, à des biomes additionnels. L'ensemble dépend des mods réellement présents sur le serveur.
{% endhint %}

---

## ⚙️ Conditions d'apparition

Les apparitions peuvent utiliser de nombreuses conditions. Voici les principales à connaître.

<details>
<summary><strong>🌤️ Heure, météo et phases lunaires</strong></summary>

Certains Pokémon sont uniquement disponibles à certaines périodes ou dans certaines conditions météorologiques.

Cela peut inclure :

- ☀️ La journée
- 🌙 La nuit
- 🌅 Le crépuscule
- 🌧️ La pluie
- ☁️ Certaines conditions météorologiques
- 🌕 Certaines phases de la lune

Ces conditions sont notamment utilisées pour les Pokémon nocturnes, Spectre ou liés à la météo.

</details>

<details>
<summary><strong>💡 Lumière, ciel et altitude</strong></summary>

Une apparition peut également dépendre de la luminosité ou de la hauteur à laquelle elle se produit.

Les règles peuvent vérifier :

- 💡 La luminosité du ciel
- 🔦 La lumière générale
- ☀️ L'accès direct au ciel
- ⛰️ Une altitude Y minimale ou maximale
- 🕳️ Une position souterraine ou en surface

Ainsi, trouver le bon biome ne suffit pas toujours pour une apparition en **grotte, montagne ou grande profondeur**.

</details>

<details>
<summary><strong>🏛️ Structures et lieux particuliers</strong></summary>

Certains Pokémon possèdent des apparitions liées à des **structures spécifiques** plutôt qu'à un biome classique.

Cela peut notamment concerner :

- 🏘️ Les villages
- 🏚️ Les ruines
- ⚓ Les épaves
- 🌊 Les monuments océaniques
- 🌌 Les structures de l'End
- 🕳️ Les cités antiques
- 🏛️ L'Ancient Temple de The Otherside
- 🗝️ Les donjons de l'Aether

Ces rencontres peuvent utiliser des niveaux de rareté et des conditions différentes des apparitions naturelles.

</details>

<details>
<summary><strong>🧱 Blocs et environnement proche</strong></summary>

Certains Pokémon vérifient également les **blocs présents autour du point d'apparition**.

Il peut notamment s'agir de :

- 🌸 Fleurs et végétation particulières
- 🌳 Arbres spéciaux
- 💧 Eau ou lave
- 💎 Minerais et gemmes
- 🔴 Composants de redstone
- ⚡ Paratonnerres
- 💻 PC et machines Cobblemon
- 🪨 Pierre, ardoise des abîmes et autres blocs spécifiques à certaines dimensions

Ces conditions permettent notamment de créer des apparitions adaptées aux Pokémon **technologiques, minéraux, floraux ou élémentaires**.

</details>

<details>
<summary><strong>🌊 Eau, pêche et positions particulières</strong></summary>

La position exacte de l'apparition peut également être prise en compte.

Un Pokémon peut par exemple apparaître :

- 🌱 Au sol
- 🌊 Dans l'eau
- 🐟 À la surface de l'eau
- 🪸 Sur le fond marin
- 🎣 Par la pêche
- 🌳 Dans les cimes ou le feuillage

Les apparitions liées à la pêche peuvent également dépendre de la **canne, du leurre ou de l'appât utilisé**.

</details>

---

## 🔬 Exemples vérifiés dans le datapack

Les exemples ci-dessous proviennent des **fichiers de spawn joints**, et non d'une estimation des probabilités en jeu.

| Pokémon | Règle présente dans le datapack | Ce qu'il faut retenir |
| --- | --- | --- |
| 🌱 **Bulbizarre** | Apparition au sol en zone `#cobblemon:is_jungle` ou `#cobblemon:is_tropical_island`, avec luminosité du ciel de 8 à 15 | Il existe aussi une **règle distincte liée aux PokéSnacks** en jungle : ce n'est pas une obligation pour toutes ses apparitions |
| ⚡ **Pikachu** | Une règle en `#cobblemon:is_forest`, hors `#cobblemon:is_spooky`, avec un **multiplicateur de poids ×5 pendant l'orage** | L'orage augmente le poids de cette règle ; il ne garantit pas de voir Pikachu ni de multiplier par cinq le nombre total de Pokémon |
| 🎣 **Magicarpe** | Plusieurs règles aquatiques et de pêche, dont une rencontre immergée en eau douce ou océan avec accès au ciel | Il faut distinguer la pêche des apparitions naturelles dans l'eau |
| 🌸 **Mew** | Règle Ultra Rare en `#cobblemon:is_floral` ou `#cobblemon:is_jungle`, avec un bonus de poids de **1,15× à midi** | Le bonus ne signifie pas que Mew est impossible à rencontrer hors de midi |
| 🏛️ **Mewtwo** | Règle Ultra Rare demandant `#cobblemon:is_deep_dark` **et** la structure `minecraft:stronghold` | Être simplement dans le Deep Dark n'est pas suffisant : plusieurs conditions doivent coïncider |

{% hint style="warning" %}
Les exemples illustrent les **règles déclarées** dans cette version du datapack, pas une garantie de rencontre. Les presets, les limites de spawn, les règles de Cobblemon et les autres mods peuvent également influencer le résultat final.
{% endhint %}

---

## ✨ Comprendre la rareté

Les apparitions ordinaires utilisent **quatre catégories de rareté principales**. Le datapack inclut également un bucket spécial **Boss**, utilisé par certaines règles spécifiques :

| ✨ Rareté | 📖 Signification |
| --- | --- |
| 🟢 **Commune** | Rencontre fréquente lorsque les conditions sont réunies. |
| 🔵 **Peu commune** | Rencontre moins fréquente, mais relativement accessible. |
| 🟣 **Rare** | Rencontre peu courante nécessitant souvent des conditions plus précises. |
| 🟡 **Ultra Rare** | Rencontres extrêmement difficiles à obtenir naturellement. |
| 🔴 **Boss (spécial)** | Groupe distinct utilisé pour des apparitions spéciales, notamment certaines règles de Pokémon Alpha ou de troupeaux. Ce n'est pas une cinquième rareté « normale ». |

Les catégories **Ultra Rare** regroupent notamment de nombreux starters, fossiles, Pokémon Paradoxes, Ultra-Chimères ainsi que des Pokémon légendaires et mythiques.

Les **poids des règles** et les conditions actives influencent aussi la sélection. Une espèce classée Ultra Rare ne possède pas un taux d'apparition universel : plusieurs Pokémon et règles peuvent entrer en concurrence dans le même environnement.

{% hint style="info" %}
💡 <strong>Un Pokémon peut posséder plusieurs apparitions avec des raretés différentes.</strong> Sa rareté dépend donc de la règle d'apparition utilisée, et non uniquement de l'espèce.
{% endhint %}

---

## 🔎 Trouver les Pokémon en jeu

### `/checkspawns`

La commande `/checkspawns` permet d'afficher les Pokémon susceptibles d'apparaître **à votre position actuelle**.

Elle prend notamment en compte votre environnement et les conditions actuellement actives.

{% hint style="warning" %}
⚠️ Un Pokémon affiché par `/checkspawns` peut toujours nécessiter une condition supplémentaire : <strong>heure, météo, lumière, altitude, structure, bloc particulier ou position d'apparition</strong>.
{% endhint %}

---

## 🤖 Rechercher un Pokémon sur Discord

Le bot Discord **@Our Story** permet également de rechercher les données d'apparition sans avoir à parcourir les différents biomes en jeu.

### 📋 Commandes

| 🌐 Langue | 💬 Commande |
| --- | --- |
| 🇬🇧 Anglais | `/where <pokemon_name>` |
| 🇫🇷 Français | `/tesou <pokemon_name>` |
| 🇩🇪 Allemand | `/wobistdu <pokemon_name>` |
| 🇯🇵 Japonais / Rōmaji | `/doko <pokemon_name>` |

Les résultats doivent être lus comme des **conditions d'apparition**, pas comme la position GPS actuelle d'un Pokémon. Le bot et le serveur doivent aussi disposer de données cohérentes avec la version du datapack utilisée.

Les résultats peuvent notamment afficher :

- 🌍 La dimension
- 🧭 Les tags de biome
- 🗺️ Les biomes concernés
- 📊 Le niveau de la rencontre
- ✨ Sa rareté
- ⚙️ Les conditions particulières

{% hint style="success" %}
<p align="center">
## 💡 Préparez votre chasse avant de partir ! 

Le bot permet d'identifier rapidement les dimensions et les environnements dans lesquels rechercher un Pokémon rare.
</p>
{% endhint %}

---

## 🧠 Conseils pour vos chasses

### 🌍 Préparez votre recherche

Avant de partir à la recherche d'un Pokémon :

- 🔎 Vérifiez ses **biomes d'apparition**
- 🌤️ Vérifiez l'**heure et la météo**
- ✨ Identifiez sa **rareté**
- 🌍 Vérifiez s'il apparaît dans une **dimension particulière**
- 🏛️ Regardez si une **structure** est nécessaire

### 🗺️ Explorez intelligemment

Ne vous limitez pas à la surface :

- ⛰️ Explorez les **montagnes et hauteurs**
- 🕳️ Descendez dans les **grottes et profondeurs**
- 🌊 Explorez les **océans et fonds marins**
- 🎣 Pensez à la **pêche**
- 🏛️ Inspectez les **structures et lieux particuliers**
- 🌳 Vérifiez les **cimes et feuillages**

### 🛠️ Utilisez les bons outils

| 🛠️ Outil | 🎯 Utilité |
| --- | --- |
| `/checkspawns` | Vérifier les apparitions possibles **autour de vous** |
| 🤖 **@Our Story** | Rechercher les apparitions **à distance** |
| 📖 [Tags de biome](pokemons-guides/biome-tags-reference.md) | Comprendre les catégories de biomes |
| ☁️ [Guide de l'Aether](mods-guides/worlds_and_dimensions/aether.md) | Explorer les apparitions de l'Aether |
| 🌑 [Guide de The Otherside](mods-guides/worlds_and_dimensions/deeper_and_darker.md) | Explorer les apparitions de The Otherside |

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">
Une question sur les apparitions, une information manquante ou une erreur à signaler ?<br>
Rejoignez-nous sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et contactez <strong>@FabLeKebab</strong> pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.
</p>
{% endhint %}
