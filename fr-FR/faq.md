# ❓ Foire aux questions

<p align="center"> 
Vous avez une question sur <strong>Cobblemon Realms</strong> ? Vous trouverez ici les réponses aux problèmes et questions les plus courants concernant l'installation, le gameplay, le multijoueur et le fonctionnement du modpack.
</p>

{% hint style="info" %}
## 💡 <strong>Vous ne trouvez pas votre réponse ?</strong><br>

<p align="center"> 
Consultez les guides associés ou contactez-nous directement sur <a href="https://discord.gg/kb8NSTF45n">Discord</a>.
</p>
{% endhint %}

***

## 🛠️ Installation & performances

### 🚫 Mon jeu plante au lancement

Un crash au lancement peut provenir de **Java**, de la **mémoire**, d'un téléchargement incomplet ou d'un mod ajouté manuellement.

{% stepper %}
{% step %}
☕ Vérifiez **Minecraft 1.21.1**, **NeoForge**, **Java 21** et la version exacte de Cobblemon Realms.
{% endstep %}

{% step %}
💾 Commencez avec environ **8 Go de RAM alloués** si votre PC le permet, sans attribuer toute la mémoire à Minecraft.
{% endstep %}

{% step %}
📦 Vérifiez que tous les fichiers ont été téléchargés et qu'aucun ancien mod ne subsiste après une mise à jour.
{% endstep %}

{% step %}
🧪 Testez **un nouveau profil propre** dans CurseForge. Sauvegardez vos mondes avant toute manipulation.
{% endstep %}

{% step %}
📄 Si le problème persiste, récupérez `logs/latest.log` et le rapport dans `crash-reports/` s'il existe. Précisez quand le crash se produit et si vous avez ajouté des mods.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
Le **code de sortie 1** ne permet pas, à lui seul, d'identifier la cause. Les dernières lignes du journal peuvent correspondre à une erreur secondaire : transmettez le **journal complet**, après avoir masqué les informations privées.
{% endhint %}

📘 [Guide d'installation](installation.md) · [Signaler un problème](report-a-bug.md)

### 📦 Comment mettre à jour le modpack sans casser mon profil ?

Pour une mise à jour importante de la branche **v6.x**, privilégiez **un profil CurseForge séparé**. Sauvegardez vos mondes dans `saves/` et testez le nouveau profil avant d'importer vos données personnelles. Ne fusionnez pas les anciens dossiers `mods/`, `config/`, `kubejs/` et `defaultconfigs/` avec la nouvelle version.

📘 [Mise à jour du client](installation.md)

### 🖥️ Quelle est la différence entre le client et le Server Pack ?

Le **client** permet de jouer sur votre ordinateur ; le **Server Pack** fournit les fichiers nécessaires à un serveur dédié. Les deux ne sont pas interchangeables et doivent correspondre à **la même version exacte** de Cobblemon Realms.

📘 [Installation du serveur](installation.md)

### 💾 Quelle quantité de RAM faut-il allouer ?

Nous recommandons d'allouer **8 Go de RAM** au modpack pour bénéficier d'une expérience confortable. Évitez cependant d'allouer toute la mémoire disponible à Minecraft : votre système d'exploitation et les autres applications doivent conserver suffisamment de ressources.

### 🎮 Puis-je jouer avec un PC peu puissant ?

Cela dépend principalement de votre processeur, de votre carte graphique et de la mémoire disponible. Pour améliorer les performances, utilisez une installation sur **SSD**, maintenez vos pilotes graphiques à jour et ajustez les paramètres graphiques si nécessaire.

📘 [Consulter le guide d'installation](installation.md)

### 🧩 Puis-je ajouter d'autres mods ?

C'est techniquement possible, mais **fortement déconseillé**. Les mods supplémentaires peuvent provoquer des incompatibilités, des crashs ou modifier le fonctionnement et l'équilibrage du modpack.

{% hint style="warning" %}
⚠️ Les problèmes causés par l'ajout manuel de mods ne peuvent pas être garantis comme étant pris en charge par l'équipe.
{% endhint %}

### ✨ Puis-je utiliser des shaders ?

Oui, à condition que votre configuration puisse les supporter et que les shaders utilisés soient compatibles avec votre version du modpack. Gardez cependant à l'esprit qu'ils peuvent avoir un impact important sur les performances.

***

## 🐾 Gameplay & progression

### 🏝️ Où commence mon aventure dans la v6 ?

Votre aventure commence sur **Spawn Island**, le hub central de Cobblemon Realms.

Votre premier objectif principal est de rencontrer **Professor Oak** et de choisir votre starter. Si vous ne savez pas où aller, parlez à **Mila, la Spawn Guide**, près de la zone de départ. Elle peut vous téléporter vers plusieurs lieux importants comme le laboratoire de Professor Oak, le PokéCenter, le PokéShop, le village et le League Hall.

📘 [Premiers pas](getting-started.md)

### 🎒 Que reçoit-on au début de l'aventure ?

Après avoir choisi votre starter avec Professor Oak, vous recevez un **Pokédex** et une **Badge Box**.

Le Pokédex vous aide à suivre vos découvertes de Pokémon, tandis que la Badge Box permet de suivre les Badges obtenus pendant le **Gym World Tour**.

### 🔄 Comment retourner sur Spawn Island ?

Vous pouvez revenir au hub principal à tout moment avec :

- `/spawn`
- `/hub`

### 🏆 Comment fonctionne le Gym World Tour ?

La progression officielle des dresseurs en v6 repose sur un unique **Gym World Tour** continu. Vous affrontez les Champions d'Arène dans un ordre strict, gagnez leurs Badges et augmentez progressivement votre Level Cap personnel.

Le World Tour actuel contient **66 Champions d'Arène répartis sur 8 régions**, de Kanto à Paldea. Votre aventure commence avec un **Level Cap de 15**.

📘 [Gym World Tour & Level Caps](pokemons-guides/levelcap-and-trainers.md)

### 🚪 Comment accéder à mon prochain combat d'Arène ?

Il existe deux moyens officiels d'accéder au prochain Champion auquel vous êtes éligible :

- utiliser l'une des **League Doors** dans le League Hall de Spawn Island ;
- découvrir une **Arena Entrance** en explorant l'Overworld.

Les deux méthodes mènent au même prochain défi de votre progression actuelle dans le Gym World Tour.

### 🏅 J'ai vaincu un Champion d'Arène, où est mon Badge ?

Les Badges ne sont plus gérés comme de simples objets physiques déposés dans l'inventaire pendant la progression officielle.

Votre victoire est enregistrée via le système intégré **PokeBadges** et le Badge apparaît dans votre **Badge Box**. Les victoires d'Arène sont également suivies via des advancements dédiés.

{% hint style="info" %}
💡 Si vous cherchez un objet Badge dans votre inventaire après une victoire, ce n'est pas le fonctionnement prévu de la progression v6.
{% endhint %}

### 🥊 Le Battle Court PvP fait-il avancer ma progression d'Arène ?

Non. Le **Battle Court** situé dans le League Hall est complètement séparé du Gym World Tour.

Les combats PvP n'accordent pas de Badge, n'augmentent pas votre Level Cap, ne valident pas un Champion d'Arène et ne font pas avancer votre progression officielle.

### 🏁 Où se termine actuellement le Gym World Tour ?

Le Gym World Tour actuellement implémenté se termine après les **Champions d'Arène de Paldea**, avec **Grusha** comme dernier défi d'Arène.

Les étapes **Elite Four** et **League Champion** ne sont pas encore implémentées dans cette progression et sont prévues pour de futures extensions.

### 🐾 Pourquoi aucun Pokémon n'apparaît autour de moi ?

Le datapack **Biome Expanded Spawns v6.x** vérifie de nombreuses conditions : **biomes et tags, heure, météo, luminosité, altitude, structures, blocs proches et position d'apparition**.

- 🔎 `/checkspawns` permet d'examiner les apparitions possibles autour de vous.
- 🤖 Sur le Discord **Our Story**, `/tesou` et `/where` permettent de rechercher les règles d'une espèce.
- 🎣 Certaines rencontres se produisent par **pêche** ou en **troupeau**.

**Même avec le bon biome et les bonnes conditions, une rencontre n'est pas garantie.**

📘 [Pokémon et apparitions](pokemon-and-spawns.md)

### 🔎 Puis-je rechercher des informations Pokémon directement dans JEI ?

Oui. L'intégration Cobblemon JEI incluse dans la branche v6 actuelle permet de rechercher des Pokémon selon des informations comme le **type, le talent, le biome, la génération, la forme et les objets obtenus**.

Les filtres peuvent être combinés et les valeurs contenant des espaces peuvent être placées entre guillemets, par exemple `biome:"flower forest"`. L'interface propose également la navigation entre les évolutions, les informations sur les attaques et des recettes inversées indiquant quels Pokémon peuvent donner un objet.

### 📈 Où trouver les informations sur les level caps ?

Les **level caps**, les dresseurs, les arènes et les différentes étapes de progression sont regroupés dans un guide dédié.

📘 [Dresseurs & Level Caps](pokemons-guides/levelcap-and-trainers.md)

### 🌟 Comment obtenir les Pokémon légendaires ?

Les Pokémon légendaires possèdent leurs propres conditions et méthodes d'obtention. Certaines informations peuvent également dépendre de la progression du joueur.

📘 [Myths & Legends](pokemons-guides/myths-and-legends-legendaries.md)

### ✨ Existe-t-il des Pokémon exclusifs à Cobblemon Realms ?

Oui. Le modpack ajoute notamment **des formes spéciales, des mécaniques inédites et des évolutions uniques** qui ne sont pas disponibles dans Cobblemon standard.

📘 [Découvrir les contenus exclusifs](pokemons-exclusives/mewtwo-exclusive-forms.md)

***

## 🌐 Multijoueur

### 👥 Puis-je commencer en solo puis rejoindre un serveur ?

**Souvent oui**, en transférant le **monde complet** vers un serveur compatible. Mais la progression peut dépendre des **données des joueurs, des UUID et des données propres aux mods**. Le transfert d'un inventaire seul ne garantit rien.

Faites une **sauvegarde complète**, testez la migration sur une copie et vérifiez vos Pokémon, quêtes et données de progression.

📘 [Serveurs multijoueur](multiplayer-servers.md) · [Guide de migration](installation.md)

### 🖥️ Puis-je héberger le modpack moi-même ?

Oui. Vous pouvez héberger votre propre serveur, à condition de disposer d'une configuration adaptée et d'utiliser les versions requises par le modpack.

📘 [Serveurs multijoueur](multiplayer-servers.md)

### ☁️ Puis-je utiliser un hébergeur gratuit comme Aternos ou Minehut ?

**Uniquement si cet hébergeur accepte réellement le pack.** Il doit prendre en charge **NeoForge 1.21.1**, **Java 21**, l'import du **Server Pack complet** et la RAM nécessaire. Certains hébergeurs gratuits limitent les fichiers personnalisés ou empêchent d'installer l'ensemble des mods.

Vérifiez les limitations de votre hébergeur avant d'essayer : une offre « Minecraft » ne garantit pas la compatibilité.

***

## 📚 Wiki & communauté

### 🐛 J'ai trouvé un bug, que faire ?

Avant de signaler un problème, vérifiez qu'il ne provient pas d'un mod ajouté manuellement ou d'une installation incorrecte.

Si le problème persiste, [signaler le problème](report-a-bug.md) afin qu'il puisse être vérifié et éventuellement corrigé.

### ✏️ Puis-je contribuer au wiki ?

Le wiki est **maintenu directement par l'équipe**. Vous pouvez néanmoins nous aider en **signalant une erreur**, en proposant une précision, une source fiable ou une traduction via Discord ou un signalement GitHub.

L'équipe vérifie ensuite les propositions avant toute modification.

📘 [Soutenir le projet](contributing.md) · [Signaler une erreur](report-a-bug.md)

### 🧭 Je ne sais pas quelle page consulter

Si vous ne savez pas par où commencer, voici quelques points d'entrée utiles :

| 🔎 Je cherche... | 📖 Consultez... |
| --- | --- |
| Installer le modpack | [Guide d'installation](installation.md) |
| Commencer mon aventure | [Premiers pas](getting-started.md) |
| Comprendre le Gym World Tour et les Badges | [Gym World Tour & Level Caps](pokemons-guides/levelcap-and-trainers.md) |
| Jouer en multijoueur | [Serveurs multijoueur](multiplayer-servers.md) |
| Comprendre les apparitions | [Pokémon et apparitions](pokemon-and-spawns.md) |
| Comprendre les légendaires | [Myths & Legends](pokemons-guides/myths-and-legends-legendaries.md) |
| Suivre les quêtes | [Quêtes](quests.md) |
| Signaler un bug | [Signaler un problème](report-a-bug.md) |
| Consulter les anciennes versions | [Historique des versions](version-history.md) |

***

{% hint style="success" %}
## 💬 Besoin d'aide ?

<p align="center">
Si vous ne trouvez pas la réponse à votre question dans le wiki, rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>.<br>
<strong>@FabLeKebab</strong> peut vous aider pour les questions concernant le wiki, tandis que <strong>@Levels</strong> s'occupe des questions liées au modpack.
</p>
{% endhint %}
