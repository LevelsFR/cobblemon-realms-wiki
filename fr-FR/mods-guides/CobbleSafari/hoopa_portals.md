# 🌀 Le Portail d'Hoopa

<p align="center">
Au détour de vos aventures, vous pourrez apercevoir d’étranges portails flottant dans le monde.
<br>
Ces failles, que l’on dit créées par <strong>Hoopa lui-même</strong>, permettent d’accéder à des donjons et dimensions inconnus… mais leur stabilité est loin d’être garantie.</p>

![Portail Hoopa](https://raw.githubusercontent.com/LevelsCraft7/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/distortion_world/hoopa_portal_v2.png)

***

## 🌀 Fonctionnement

Les portails apparaissent **périodiquement dans l’Overworld**, près d’un joueur choisi aléatoirement.
<br>
Toutes les 10 minutes par défaut. Vous pouvez modifier ce temps dans les fichiers de configurations.

Chaque portail est relié à une **instance unique de donjon**, sélectionnée dans le _Dungeon Pool_.
<br>
Une fois utilisé, le portail transporte les joueurs vers ce donjon précis.

{% hint style="warning" %}
<p align="center">
Chaque donjon est instancié : vous ne rejoignez pas un monde partagé, mais une version unique générée pour votre groupe.
</p>
{% endhint %}

***

## ⏳ Temps limité

Les donjons ne sont pas éternels.

* ⏳ Chaque donjon possède une **durée de session configurable** ; les 15 minutes ne sont plus une valeur universelle pour tous les donjons de la 0.4 ;
* 💥 Les portails finissent par expirer ou être détruits ;
* 🚪 Les joueurs encore présents sont expulsés à la fin du timer dimensionnel.

**Depuis CobbleSafari 0.4.0 :** la disparition du portail ne ferme pas immédiatement le donjon. L'instance reste active tant qu'elle accueille des joueurs, selon les nouvelles règles de session.

***

## 🎮 Comment l’utiliser ?

Pour activer un portail, faites un **clic droit sur sa partie basse**.
<br>
Dans la majorité des cas, un écran de confirmation s’affiche afin de vous indiquer la destination.

{% hint style="info" %}
<p align="center">
Toujours vérifier la destination avant d’accepter une téléportation.
</p>
{% endhint %}

✔️ En cas d’acceptation :

* Vous êtes téléporté dans le donjon ;
* Si vous êtes le premier joueur, une génération peut entraîner un léger temps de chargement ;
* Vous pouvez quitter à tout moment via un portail interne.

***

## 🗺️ Dungeon Pool par défaut

Le choix des destinations dépend du pool de donjons et de la configuration du serveur. Le mod d'origine propose notamment :

* 🌍 **Souterrain de Sinnoh**
  Exploration souterraine, mini-jeu d’excavation, trésors rares et Pokémon cachés.

* 🌀 **Monde Distorsion**\
  Dimension chaotique de Giratina avec plateformes inversées, labyrinthes d’illusions et combats de Pokémon Distordus.
  → [Voir la page](distortion_world.md)

* 🌃 **[Ultra Mégalopole](ultra_megalopolis.md)** : ville sombre et accès à Ultra Warp Ride.
* 🏙️ **[Hyperspace Lumiose](hyperspace_lumiose.md)** : Zones Sauvages, rencontres rares et objectifs d'instance.
* 🔔 **[Tour Carillon](bell_tower.md)** : ascension et combat contre Ho-Oh.

---

## 🆕 Changements depuis la 0.4.0/0.4.1

- Chaque visite possède désormais son propre **temps de session**, indépendant de la durée de vie du portail.
- Le donjon **reste actif pour les joueurs déjà à l'intérieur** lorsque le portail d'entrée expire.
- Un **[générateur de portails](portal_spawner.md)** réservé aux admins propose des intervalles fixes, aléatoires ou un déclenchement redstone.
- La génération naturelle peut être restreinte via `bannedBiomes` et les tags `#cobblesafari:portal_spawnable_on` et `#cobblesafari:portal_repellents`.
- Depuis la 0.4.1, l'entrée d'Ultra Mégalopole prend l'apparence d'une Ultra-Brèche.

[Version 0.4.0](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [Version 0.4.1](https://modrinth.com/mod/cobblesafari/version/0.4.1).

---

## ⚙️ Configuration

Le comportement des portails est défini dans :

`config/cobblesafari/dungeon_spawn_config.json`

### 🔧 Paramètres principaux

* ⏱️ **Intervalle d'apparition** → `spawnIntervalSeconds` (défaut : 600)
* 🌀 **Durée de vie du portail** → `portalLifetimeMinutes` (défaut : 30)
* 🔘 **Activer les portails** → `enabled` (true/false)

***

{% hint style="info" %}
## Plus d'informations

<p align="center">
Vous trouverez une description complète du fichier de configuration sur la page officielle du mod : <a href="https://cobblesafari.maxigregrze.fr/en/addons/config_dungeon_spawn_config">dungeon_spawn_config</a>
</p>
{% endhint %}

***

{% hint style="success" %}
## Nous contacter

<p align="center">
Si vous avez des questions, des suggestions ou des modifications à proposer, n'hésitez pas à nous rejoindre sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et à contacter directement <strong>@FabLeKebab</strong> sur le serveur pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.
</p>
{% endhint %}
