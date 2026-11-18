# ⚙️ CobbleSafari 0.4 | Configuration et compatibilité

{% hint style="info" %}
<p align="center">Référence pour les créateurs de modpacks et les administrateurs : Onboarding, gestion des portails, sessions de donjons, accessibilité et compatibilité avec les addons.</p>
{% endhint %}


{% hint style="warning" %}
**Réservé à l'administration :** ce guide présente les réglages du mod d'origine. Il ne révèle pas la configuration privée du serveur Cobblemon Realms.
{% endhint %}

## 🧭 Onboarding initial

Les administrateurs de niveau de permission **2** reçoivent une invitation à configurer CobbleSafari au premier lancement après la mise à jour. L'écran reste accessible avec :

```mcfunction
/cobblesafari onboarding
```

Il permet de déclarer les addons de Pokémon **légendaires/fabuleux**, **Ultra-Chimères**, **Paradoxes** et autres espèces manquantes. Il active ou désactive aussi les portails, annonces, Reward Balloons et la compatibilité **Mega Showdown**.

Ces choix adaptent notamment les pools Wonder Trade et empêchent certaines offres GTS uniques portant sur des espèces absentes. L'option correspondante est `askForOnboarding` dans `misc_config.json`.

## 🌀 Gestion des donjons

Changements importants depuis la 0.4 :

- `/cs dungeon spawn [player] [dungeon]` permet de cibler un donjon précis ;
- `/cs dungeon list portal` affiche les portails ;
- `/cs dungeon list portal force` relance la recherche dans les **chunks chargés** ;
- `/cs dungeon list` affiche les instances, leurs occupants et l'état de l'entrée ;
- `/cs reset dungeon force` force une remise à zéro même en présence de joueurs, à manier avec prudence.

Consultez [le guide des commandes](cobblesafari_command.md).

## ⏱️ Gestion par sessions

Les minuteurs de donjons sont maintenant liés à **chaque visite**, et non simplement à une dimension. Exemples :

```mcfunction
/cs timer session list <player>
/cs timer session add <player> <scope> <seconds>
/cs timer session set <player> <scope> <seconds>
```

Les sous-donjons, dont Ultra Space, peuvent consommer du temps de la session parente. Lors de la migration depuis une ancienne version, les anciens minuteurs de donjon sont écartés et les joueurs concernés renvoyés au point de départ.

## 🧰 Fichiers de configuration

| Fichier | Options à connaître |
| --- | --- |
| `misc_config.json` | `askForOnboarding`, `balloonMaxNearby` (3), `enableShardsClusters` (false), `enableUltraReconElytra`, `hauntedMonitorStrikeChance`, `ultraWarpDiveCSMusic` |
| `safari_config.json` | `safariDroneEnabled`, `safariDroneSpawnMultiplier` (10) |
| `dungeon_spawn_config.json` | `bannedBiomes`, `repellentRadius`, tags des portails |
| `client_settings.json` | HUD, animations Motismart, flashs du voyage Ultra |
| Restrictions dimensionnelles | `allowRotomSafety`, `forbidElytra`, `forbidParkourItems` (0.4.1) |

L'option `forbidParkourItems` bloque notamment les Perles de l'End, Fruits de Chorus, Charges de vent et bateaux dans les dimensions concernées. Les seaux suivent également les règles de placement des blocs.

## 🔗 Autres guides
[Générateur de portails](portal_spawner.md) · [Objectifs dimensionnels](dimensional_objectives.md) · [Commandes](cobblesafari_command.md).

## 📖 Sources
[Version 0.4.0](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [Version 0.4.1](https://modrinth.com/mod/cobblesafari/version/0.4.1) · [Dépôt du mod](https://github.com/maxigregrze/CobbleSafari).

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">Une question, une suggestion ou une correction ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.</p>
{% endhint %}
