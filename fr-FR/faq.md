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

Les problèmes au lancement peuvent avoir plusieurs causes : version de Java incorrecte, mémoire insuffisante, installation incomplète ou fichiers du modpack corrompus.

Avant toute chose, vérifiez que vous utilisez **Java 21** et que suffisamment de mémoire est allouée au jeu.

📘 [Consulter le guide d'installation](installation.md)

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

Les apparitions dépendent de nombreux facteurs : **biome, heure, météo, position du joueur et conditions de spawn**.

Utilisez `/checkspawns` pour consulter les Pokémon susceptibles d'apparaître dans votre zone.

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

Oui. Une sauvegarde commencée en solo peut être transférée vers un serveur sans avoir à recommencer votre progression, à condition de transférer correctement les données du monde.

📘 [Serveurs multijoueur](multiplayer-servers.md)

### 🖥️ Puis-je héberger le modpack moi-même ?

Oui. Vous pouvez héberger votre propre serveur, à condition de disposer d'une configuration adaptée et d'utiliser les versions requises par le modpack.

📘 [Serveurs multijoueur](multiplayer-servers.md)

### ☁️ Puis-je utiliser un hébergeur gratuit comme Aternos ou Minehut ?

C'est techniquement possible, mais les performances peuvent être limitées pour un modpack aussi conséquent. Nous recommandons de privilégier un hébergement disposant de suffisamment de **RAM**, du **support de Java 21** et d'un accès aux fichiers du serveur.

***

## 📚 Wiki & communauté

### 🐛 J'ai trouvé un bug, que faire ?

Avant de signaler un problème, vérifiez qu'il ne provient pas d'un mod ajouté manuellement ou d'une installation incorrecte.

Si le problème persiste, [signaler le problème](report-a-bug.md) afin qu'il puisse être vérifié et éventuellement corrigé.

### ✏️ Puis-je contribuer au wiki ?

Oui ! Les contributions sont les bienvenues. Vous pouvez notamment :

- Corriger des erreurs ;
- Améliorer des informations existantes ;
- Ajouter de nouvelles informations ;
- Traduire des pages ;
- Signaler des informations obsolètes.

📘 [Guide de contribution](contributing.md)

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

***

{% hint style="success" %}
## 💬 Besoin d'aide ?

<p align="center">
Si vous ne trouvez pas la réponse à votre question dans le wiki, rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>.<br>
<strong>@FabLeKebab</strong> peut vous aider pour les questions concernant le wiki, tandis que <strong>@Levels</strong> s'occupe des questions liées au modpack.
</p>
{% endhint %}
