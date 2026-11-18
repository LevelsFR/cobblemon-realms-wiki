# 🌀 Générateur de portails | Administrateurs

{% hint style="info" %}
<p align="center">Le bloc <strong>Portal's Shadow / Portal Spawner</strong> permet de générer des portails de Hoopa renouvelables, notamment dans les hubs et cartes personnalisées.</p>
{% endhint %}


{% hint style="warning" %}
**Outil d'administration :** le nouveau générateur remplace le Creative Portal dans l'inventaire Créatif. L'ancien bloc fonctionne encore dans les mondes existants, mais n'est plus maintenu comme fonctionnalité principale.
{% endhint %}

## ⚙️ Trois modes disponibles

| Mode | Principe |
| --- | --- |
| Intervalle fixe | Génération périodique à intervalles réguliers |
| Intervalle aléatoire | Génération après un délai variable |
| Redstone | Activation pilotée par la redstone |

Ouvrez l'interface de configuration du bloc pour sélectionner le mode et ses paramètres.

## 📍 Placement

Depuis la **0.4.1**, le générateur peut être fixé au **plafond** et faire apparaître son portail juste en dessous. L'ensemble nécessite ainsi seulement deux blocs de hauteur.

## 🔗 Durée des portails et donjons

Depuis la 0.4, un portail peut expirer alors que des joueurs sont encore dans le donjon correspondant. L'instance reste active tant que des occupants y sont présents. La génération naturelle peut également être limitée par biome, bloc support ou blocs répulsifs.

### ⚙️ Configuration

Le fichier `config/cobblesafari/dungeon_spawn_config.json` possède des options comme `bannedBiomes` et `repellentRadius`, ainsi que les tags de blocs `#cobblesafari:portal_spawnable_on` et `#cobblesafari:portal_repellents`.

{% hint style="warning" %}
**Cobblemon Realms :** ces informations proviennent de CobbleSafari **0.4.0/0.4.1**, intégré au modpack **6.3**. Les conditions peuvent dépendre de la configuration du serveur, des addons et des datapacks. Référez-vous à l'interface du jeu lorsqu'elle indique des règles différentes.
{% endhint %}

## 📖 Sources
[Version 0.4.0](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [Placement plafond 0.4.1](https://modrinth.com/mod/cobblesafari/version/0.4.1) · [Code du générateur](https://github.com/maxigregrze/CobbleSafari/tree/main/common/src/main/java/maxigregrze/cobblesafari/block/dungeon).

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">Une question, une suggestion ou une correction ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.</p>
{% endhint %}
