# 🌿 Rustling Spots

{% hint style="info" %}
**Rustling Spots** fait revivre les herbes frémissantes de **Pokémon Noir et Blanc** dans Cobblemon. En explorant le monde, repérez des mouvements dans l'environnement et approchez-vous pour découvrir un Pokémon ou récupérer une récompense.
{% endhint %}

Ce guide comporte deux parties : **la première est destinée aux joueurs**, tandis que **la seconde accompagne les administrateurs et créateurs de datapacks** qui veulent personnaliser Rustling Spots **v5.1+**.

## 🎮 Partie 1 : Guide des joueurs

### ✨ Que fait Rustling Spots ?

Pendant vos explorations, des **spots temporaires** apparaissent sur certains terrains. Ces petits événements animés rendent les forêts, grottes, étendues d'eau, déserts et autres environnements plus vivants.

1. **Explorez** une zone présentant une surface compatible.
2. **Repérez les mouvements et particules** qui signalent un spot. Depuis la v5.1, un discret son lié au terrain est joué une fois lorsque vous approchez d'un nouveau spot.
3. **Approchez-vous du spot.** L'événement se déclenche **automatiquement à courte distance**. Aucun clic droit ni objet spécial n'est nécessaire.
4. **Récupérez votre récompense** ou rencontrez le Pokémon apparu. Une explosion de particules propre à la famille marque l'activation en v5.1, puis le spot disparaît.

{% hint style="success" %}
Le mod n'ajoute ni structures ni génération de terrain. Il peut être installé dans un monde existant sans régénérer les chunks.
{% endhint %}

### 🎁 Quelles récompenses peut-on obtenir ?

| Résultat | Description |
| --- | --- |
| 🎯 Rencontre Pokémon | Un Pokémon est choisi dans le pool associé au spot. |
| 📦 Butin thématique | Des objets correspondant à l'environnement sont déposés au sol. |
| ❌ Spot vide | Parfois, aucune récompense n'est donnée si le serveur autorise ce résultat. |
| ✨ Spot shiny | Un spot spécial très rare. S'il produit une rencontre Pokémon, le Pokémon est forcément shiny. |

Certains serveurs peuvent activer **plusieurs tirages de récompense**. Les Pokémon, objets, niveaux et probabilités dépendent de la configuration du serveur.

### 🌍 Les neuf familles de spots

Chaque famille de base possède ses propres surfaces, apparences, Pokémon et récompenses.

| Famille | Où chercher ? | Thème |
| --- | --- | --- |
| 🌿 **Grass** | Herbe, chemins et petites fleurs | Rencontres en extérieur |
| 🏜️ **Sand** | Sable et sable rouge | Pokémon désertiques et fossiles |
| 🌊 **Water** | Étendues d'eau dégagées | Rencontres aquatiques |
| ❄️ **Snow** | Surfaces enneigées | Pokémon de glace |
| 🍃 **Leaves** | Feuillages et canopées | Rencontres forestières |
| ⛏️ **Cave** | Pierre et sous-sols | Grottes et butin minier |
| 🪽 **Flying** | Espaces aériens à ciel ouvert | Pokémon volants |
| 🔥 **NetherFlamme** | Netherrack et lave | Feu et Nether |
| 👻 **SoulFlame** | Sable des âmes et terre des âmes | Rencontres sombres et spectrales |

Les datapacks peuvent ajouter d'autres spots thématiques. Un serveur ou modpack peut donc proposer davantage de variantes.

### ✨ Spots shiny et Pokémon shiny : quelle différence ?

Il s'agit de **deux probabilités distinctes** dans les réglages par défaut de la v5.1 :

| Paramètre | Valeur par défaut |
| --- | --- |
| Probabilité qu'un spot généré soit un spot shiny spécial | **0,25 %** |
| Probabilité qu'un Pokémon issu d'un spot normal soit shiny | **1 %** |
| Probabilité de rencontre Pokémon lors d'un tirage classique | **35 %** |
| Probabilité d'un résultat vide, si activé | **2 %** |

Un **spot shiny** se distingue visuellement et garantit l'état shiny du Pokémon **si une rencontre Pokémon aboutit**. Sa découverte peut faire l'objet d'une annonce globale. Cela ne garantit pas l'apparition d'un Pokémon si la tentative de génération échoue.

**Pour les anciens joueurs :** la v5.1 réduit la probabilité shiny Pokémon par défaut de **5 % à 1 %**. Chaque serveur peut cependant modifier ces valeurs.

### 🧭 Informations utiles

- Un spot est temporaire. Sa durée de vie par défaut est de **6 000 ticks (environ 5 minutes)**.
- Un spot s'active normalement à **2 blocs de distance horizontale**, avec une tolérance verticale supplémentaire.
- Il peut disparaître lorsque la zone n'est plus chargée ou qu'aucun joueur ne reste à proximité.
- Les spots sont resynchronisés après connexion, réapparition et changement de dimension.
- Les dimensions supplémentaires sont prises en charge si des règles adaptées le permettent.

### ⌨️ Commandes des joueurs

Vous pouvez choisir quels messages de Rustling Spots afficher dans votre chat :

```mcfunction
/rustlingspots messages
/rustlingspots messages on
/rustlingspots messages off
/rustlingspots messages pokemon on
/rustlingspots messages loot off
/rustlingspots messages empty on
```

La commande `/rustlingspots stats` affiche vos spots découverts, spots shiny et récompenses. Ces préférences n'influencent pas les récompenses obtenues.

### 📦 Installation

Le code source v5.1 cible **Minecraft 1.21.1**, **Cobblemon 1.8.0+**, avec **Fabric ou NeoForge**. Installez la version correspondant à votre loader et ses dépendances obligatoires. Sur un serveur, suivez les consignes de son modpack.

- [Télécharger sur CurseForge](https://www.curseforge.com/minecraft/mc-mods/rustling-spots)
- [Télécharger sur Modrinth](https://modrinth.com/mod/cobblemon-rustling-spots)

La présence de la **v5.1 dans le code source** ne signifie pas nécessairement que les fichiers v5.1 sont déjà disponibles sur les deux plateformes.

### 🚀 Add-on officiel : Team Rocket

**Rustling Spots: Team Rocket** ajoute des rencontres sur le thème de la Team Rocket pendant vos explorations.

[Add-on CurseForge](https://www.curseforge.com/minecraft/mc-mods/rs-teamrocket-addon) | [Add-on Modrinth](https://modrinth.com/mod/rs-teamrocket-addon)

---

## 🛠️ Partie 2 : Personnaliser le mod (v5.1+)

Cette section s'adresse aux **créateurs de modpacks, administrateurs et auteurs de datapacks**. Les valeurs suivantes sont celles du **code source v5.1** : elles peuvent être modifiées par un serveur ou par des datapacks.

### ⚙️ Configurer le mod en jeu

Depuis la v5.0, les réglages classiques utilisent **Cloth Config** et non plus l'ancien écran de configuration personnalisé.

- **Fabric :** ouvrez **Mod Menu**, choisissez **Rustling Spots**, puis **Configure**.
- **NeoForge :** ouvrez **Mods**, sélectionnez **Rustling Spots**, puis **Config**.
- En multijoueur, les **opérateurs de niveau 2** peuvent modifier les paramètres serveur. Les autres joueurs conservent l'accès à leurs préférences client.
- Les paramètres serveur enregistrés sont appliqués immédiatement sur un serveur dédié.

**Cloth Config 15.x** est obligatoire côté client, en plus des dépendances du loader. **Mod Menu** donne accès à la configuration sur Fabric.

Les fichiers JSON de `config/rustlingspots/` restent utilisés pour sauvegarder les valeurs et assurer la migration des anciennes versions. Toutefois, **l'interface en jeu est la méthode recommandée pour modifier les paramètres classiques**. Les pools Pokémon, le butin et les définitions des spots personnalisés restent gérés par les fichiers de données.

### 📊 Valeurs importantes par défaut en v5.1

| Paramètre | Valeur |
| --- | --- |
| Rayon de recherche autour du joueur | `200` blocs |
| Distance minimale entre spots | `16` blocs |
| Spots actifs maximum par joueur | `8` |
| Spots actifs maximum sur le serveur | `64` |
| Durée de vie d'un spot | `6000` ticks |
| Rayon d'interaction | `2` blocs |
| Tolérance verticale d'interaction | `3` blocs |
| Probabilité de rencontre Pokémon | `0.35` (35 %) |
| Probabilité shiny d'un Pokémon normal | `0.01` (1 %) |
| Probabilité d'un spot shiny spécial | `0.0025` (0,25 %) |
| Spots vides activés / probabilité | `true` / `0.02` (2 %) |
| Récompenses multiples | Désactivées par défaut |
| Annonces globales des spots shiny | Activées par défaut |

Multiplicateurs d'apparition des familles :

| Grass | Sand | Water | Snow | Leaves | Cave | Flying | NetherFlamme | SoulFlame |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | 1.0 | **0.6** | 1.0 | 0.7 | 1.0 | 0.25 | 0.6 | 1.0 |

Ces multiplicateurs contrôlent l'apparition des familles de spots, **pas** la probabilité d'obtenir un Pokémon.

### 📁 Fichiers de configuration et migration

| Fichier dans `config/rustlingspots/` | Rôle |
| --- | --- |
| `rustlingspots-server.json` | Apparition, limites, spots shiny, spots vides et multi-récompenses |
| `rustlingspots-pokemon.json` | Rencontres Pokémon, niveaux et probabilité shiny |
| `rustlingspots-families.json` | Multiplicateurs d'apparition des familles |
| `rustlingspots-client.json` | Opacité des effets et messages par défaut |
| `rustlingspots-sound.json` | Volume des sons d'apparition Pokémon et de butin |
| `pokemon/families/*.json` | Pools avancés de Pokémon |

**Migration v5.1 :** lors du premier chargement, une ancienne valeur shiny Pokémon égale à `0.05` (5 %) devient `0.01` (1 %), avec mémorisation de la version de configuration. Les autres valeurs numériques sont conservées. Si vous aviez volontairement choisi **exactement 5 %**, le mod ne peut pas la distinguer de l'ancien réglage par défaut : vérifiez votre configuration et réappliquez cette valeur si nécessaire.

Le nouveau son de proximité est joué une seule fois pour chaque spot nouvellement reçu, à un volume fixe en v5.1. Les réglages de volume ci-dessus concernent les **sons de rencontre Pokémon et de butin**, et non ce signal sonore d'approche.

Les anciens JSON v4.x et les pools personnalisés sont conservés lors des mises à jour. Les configurations JSON générales invalides sont sauvegardées avant restauration des valeurs par défaut. **Effectuez une sauvegarde du monde et des configurations avant une mise à jour importante.**

### ⌨️ Commandes admin et débogage

Ces opérations demandent le **niveau de permission 2** :

```mcfunction
/rustlingspots spawn grass
/rustlingspots spawn rustlingspots:grass
/rustlingspots spawn myserver:my_custom_spot
/rustlingspots spawnshiny rustlingspots:grass
/rustlingspots reload
/rustlingspots scan 64
/rustlingspots scan 64 grass
/rustlingspots debugspawn
/rustlingspots debugspawn 30
/rustlingspots stats <player>
```

- `spawn` crée un spot de test, y compris un spot de datapack désigné par son identifiant complet.
- `spawnshiny` permet de tester un spot shiny forcé.
- `reload` recharge les configurations, pools et définitions issus des datapacks.
- `scan` affiche les spots actifs proches du joueur.
- `debugspawn` teste des positions candidates et indique les raisons empêchant l'apparition d'un spot.
- `stats <player>` affiche les statistiques d'un autre joueur. `/rustlingspots stats` reste disponible aux joueurs pour leurs statistiques personnelles.

### 🧩 Créer un spot personnalisé avec un datapack

Aucun addon Java n'est nécessaire. Un datapack peut définir **les lieux d'apparition, l'apparence, la priorité, le poids de sélection, les Pokémon, le butin et les particules**.

#### 1. Préparer les dossiers

```text
MyRustlingPack/
├── pack.mcmeta
└── data/
    └── myserver/
        └── rustling_spots/
            ├── spot_definitions/
            │   └── swamp.json
            ├── pokemon_families/
            │   └── swamp.json
            └── loot_families/
                └── swamp.json
```

Pour **Minecraft 1.21.1**, voici un exemple de `pack.mcmeta` :

```json
{
  "pack": {
    "pack_format": 48,
    "description": "Mon datapack Rustling Spots"
  }
}
```

Placez ce datapack dans `world/datapacks/` puis exécutez `/rustlingspots reload`.

#### 2. Définir le spot

Créez `data/myserver/rustling_spots/spot_definitions/swamp.json` :

```json
{
  "format_version": 1,
  "id": "myserver:swamp_custom",
  "display_name": "Swamp Spot",
  "priority": 10,
  "weight": 5,
  "visual_family": "leaves",
  "dimensions": ["minecraft:overworld"],
  "biomes": ["minecraft:swamp", "minecraft:mangrove_swamp"],
  "blocks": ["minecraft:mud", "minecraft:grass_block"],
  "pokemon_family": "myserver:swamp",
  "loot_family": "myserver:swamp",
  "particles": [
    { "type": "rustlingspots:leaves_burst", "weight": 7 },
    { "type": "minecraft:happy_villager", "weight": 3 }
  ]
}
```

**Sélection des spots :** les spots intégrés utilisent `priority: 0` et `weight: 1`. Parmi les candidats compatibles, seules les **priorités les plus élevées** sont retenues, puis le `weight` départage les candidats de même priorité. Une priorité `10` permet ainsi de remplacer le spot classique lorsque les conditions correspondent.

Le champ facultatif `visual_family` utilise un style intégré. Valeurs acceptées : `grass`, `sand`, `water`, `snow`, `leaves`, `cave`, `flying`, `netherflamme` et `soulflame`. Une valeur absente ou invalide revient au style `grass`.

Pour `biomes` et `blocks`, vous pouvez utiliser des identifiants précis ou des tags `#namespace:tag`. Sans `dimensions`, seul l'**Overworld** est autorisé. Les listes `biomes` et `blocks` ne doivent pas être vides. Les identifiants intégrés comme `rustlingspots:grass` sont réservés.

#### 3. Définir les Pokémon

Créez `data/myserver/rustling_spots/pokemon_families/swamp.json` :

```json
[
  { "species": "wooper", "weight": 10, "min_level": 5, "max_level": 20 },
  { "species": "lotad", "weight": 8, "min_level": 5, "max_level": 25 },
  { "species": "croagunk", "weight": 4, "min_level": 12, "max_level": 30 }
]
```

Chaque entrée demande `species` et un `weight` positif. Champs facultatifs : `min_level`, `max_level`, `shiny`, `shinyChance` et `families`.

**Fakemon en v5.1 :** les espèces ajoutées par un addon Cobblemon sont prises en charge avec leur véritable identifiant namespacé, par exemple `myaddon:my_fakemon`. L'espèce doit être réellement enregistrée par un addon installé.

Pour une probabilité shiny propre à une entrée, utilisez **`shinyChance`** avec la casse exacte, par exemple `"shinyChance": 0.10`. Le champ `shiny_chance` **n'est pas reconnu** dans les pools Pokémon.

#### 4. Définir le butin

Créez `data/myserver/rustling_spots/loot_families/swamp.json` :

```json
[
  { "item": "minecraft:slime_ball", "min": 1, "max": 3, "weight": 5 },
  { "item": "minecraft:lily_pad", "min": 1, "max": 2, "weight": 3 }
]
```

Chaque entrée de butin utilise un identifiant d'objet existant, un `weight` positif et éventuellement les quantités `min` / `max`. Le butin d'une famille est combiné au butin global, et les poids des entrées identiques sont fusionnés.

#### 5. Recharger et tester

```mcfunction
/rustlingspots reload
/rustlingspots spawn myserver:swamp_custom
/rustlingspots scan 64
/rustlingspots debugspawn 30
```

Consultez les **logs serveur** lorsqu'un Pokémon n'apparaît pas. Depuis la v5.1, une entrée Pokémon invalide est signalée avec **le fichier source et son index (commençant à zéro)**. Cette entrée est ignorée sans supprimer les autres entrées valides d'un tableau JSON valide. En revanche, un document JSON entièrement malformé peut empêcher le chargement de son fichier.

Si le registre d'espèces Cobblemon n'est pas encore disponible, la validation est différée puis relancée lorsque ce registre devient accessible ou lors d'une tentative de rencontre.

### 📚 Guides complets et datapacks officiels

Cette page couvre les besoins les plus courants. La documentation technique détaille l'ensemble des champs, règles avancées et mécanismes de repli.

- [Guide complet des spots personnalisés, français](https://github.com/LevelsFR/RustlingSpots-MultiLoader-1.21.1/blob/master/docs/custom-spot-definitions-guide.md)
- [Guide complet des spots personnalisés, anglais](https://github.com/LevelsFR/RustlingSpots-MultiLoader-1.21.1/blob/master/docs/custom-spot-definitions-guide-en.md)
- [Code source officiel et changelog v5.1+](https://github.com/LevelsFR/RustlingSpots-MultiLoader-1.21.1)
- [Datapack d'exemple sur CurseForge](https://www.curseforge.com/minecraft/data-packs/rustling-spots-example-addon-datapack)
- [Datapack d'exemple sur Modrinth](https://modrinth.com/datapack/rustling-spots-addon-datapack)

{% hint style="info" %}
**Une question ou une suggestion ?** Rejoignez le [Discord Our Story](https://discord.gg/kb8NSTF45n). Contactez **@FabLeKebab** pour le wiki ou **@Levels** pour le projet.
{% endhint %}
