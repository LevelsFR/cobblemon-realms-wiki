# 📦 Installation

## 📦 Guide d'installation

{% hint style="info" %}
<p align="center">
Installez <strong>Cobblemon Realms</strong>, mettez votre jeu à jour et hébergez un serveur multijoueur avec les bonnes versions, sans mettre vos mondes en danger.
</p>
{% endhint %}

---

## 🧭 Avant de commencer

| Élément | Version et téléchargement |
| --- | --- |
| **Minecraft** | **Java Edition 1.21.1** |
| **Modloader** | **NeoForge** (pas Forge ni Fabric) |
| **Java** | **Java 21** |
| **Modpack client** | [Cobblemon Realms sur CurseForge](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms) |
| **Server Pack** | [Fichiers officiels de Cobblemon Realms](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files) |
| **Versions v6.x** | [Télécharger le client et le Server Pack correspondant](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files) : vérifiez que les deux fichiers ont exactement le même numéro de version. |

{% hint style="warning" %}
**Client et serveur sont deux téléchargements différents.** Pour héberger une partie, téléchargez le **Server Pack** correspondant exactement à la version utilisée par les joueurs. N'installez pas le modpack client à la place du Server Pack sur un serveur dédié.
{% endhint %}

---

## 🎮 Installation du modpack

{% tabs %}
{% tab title="Windows" %}

### 🖥️ Jouer en solo

{% stepper %}
{% step %}
📥 Installez l'[application CurseForge](https://www.curseforge.com/download/app).
{% endstep %}

{% step %}
🔎 Dans Minecraft, recherchez [Cobblemon Realms](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms).
{% endstep %}

{% step %}
📦 Cliquez sur **Installer**. Laissez CurseForge créer le profil et télécharger les dépendances.
{% endstep %}

{% step %}
⏳ Attendez la fin de l'installation avant de modifier les fichiers du profil.
{% endstep %}

{% step %}
🚀 Lancez le modpack depuis CurseForge et connectez-vous à votre compte Minecraft si nécessaire.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="MacOS" %}

### 🍎 Jouer en solo

{% stepper %}
{% step %}
📥 Installez l'[application CurseForge pour macOS](https://www.curseforge.com/download/app).
{% endstep %}

{% step %}
🔎 Recherchez [Cobblemon Realms](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms) dans le catalogue Minecraft.
{% endstep %}

{% step %}
📦 Cliquez sur **Installer** et attendez que toutes les dépendances soient téléchargées.
{% endstep %}

{% step %}
☕ En cas de demande d'environnement Java, sélectionnez **Java 21** adapté à votre Mac. Ajustez les permissions macOS uniquement si nécessaire.
{% endstep %}

{% step %}
🚀 Lancez le profil. Le premier chargement peut prendre plusieurs minutes.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Linux" %}

### 🐧 Jouer en solo

{% stepper %}
{% step %}
📥 Utilisez l'[application CurseForge pour Linux](https://www.curseforge.com/download/app) sur une distribution **Ubuntu officiellement prise en charge**, ou [Prism Launcher](https://prismlauncher.org/) sur une autre distribution compatible.
{% endstep %}

{% step %}
🔎 Recherchez **Cobblemon Realms** dans le catalogue CurseForge du lanceur ou utilisez sa fonction d'import de modpack client.
{% endstep %}

{% step %}
📦 Créez une **nouvelle instance**, configurée pour **Minecraft 1.21.1** et **NeoForge**.
{% endstep %}

{% step %}
☕ Vérifiez que l'instance utilise **Java 21** et que tous les mods ont été téléchargés.
{% endstep %}

{% step %}
🚀 Démarrez l'instance et consultez le journal du lanceur si un téléchargement échoue.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="success" %}
**CurseForge est le lanceur recommandé** lorsqu'il est compatible avec votre système. Il facilite l'installation des dépendances et les changements de version.
{% endhint %}

---

## ⚙️ Configuration recommandée

{% tabs %}
{% tab title="Windows" %}

{% stepper %}
{% step %}
☕ Vérifiez que Minecraft utilise **Java 21**. Le lanceur peut gérer l'installation de Java automatiquement.
{% endstep %}

{% step %}
💾 Commencez avec environ **8 Go de RAM alloués**, si votre PC possède suffisamment de mémoire. Réglez cette valeur dans les paramètres Minecraft de CurseForge.
{% endstep %}

{% step %}
🎮 Maintenez vos pilotes graphiques à jour et utilisez un **SSD** si possible.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="MacOS" %}

{% stepper %}
{% step %}
☕ Sélectionnez **Java 21** compatible avec l'architecture de votre Mac.
{% endstep %}

{% step %}
💾 Commencez avec environ **8 Go de RAM alloués** si la mémoire disponible le permet, en conservant de la RAM pour macOS.
{% endstep %}

{% step %}
🍎 Maintenez macOS à jour et privilégiez un **SSD**.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Linux" %}

{% stepper %}
{% step %}
☕ Sélectionnez **Java 21** dans les paramètres de votre instance.
{% endstep %}

{% step %}
💾 Commencez avec environ **8 Go de RAM alloués**, selon la mémoire totale disponible.
{% endstep %}

{% step %}
🎮 Vérifiez les pilotes graphiques (Mesa, NVIDIA ou AMD) et utilisez si possible un **SSD**.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="info" %}
**La RAM recommandée est un point de départ.** N'allouez pas toute la mémoire de votre ordinateur à Minecraft et évitez de cumuler les réglages RAM du lanceur avec des arguments Java contradictoires.
{% endhint %}

---

## 🔄 Mise à jour du client

### 🧭 Sur CurseForge

{% stepper %}
{% step %}
💾 **Sauvegardez vos mondes solo** avant une mise à jour majeure. Conservez notamment une copie du dossier `saves/` de votre ancienne instance.
{% endstep %}

{% step %}
🔎 Dans CurseForge, ouvrez **Mes modpacks**, puis cliquez sur les **petites flèches à côté de Jouer** sur le profil Cobblemon Realms.
{% endstep %}

{% step %}
📦 Choisissez **Mettre à jour vers la dernière version** ou sélectionnez précisément la version souhaitée.
{% endstep %}

{% step %}
🛡️ Pour une mise à jour **v6.x**, notamment lorsqu'elle apporte des changements importants, privilégiez **Mettre à jour vers un profil séparé**. Vous conserverez ainsi l'ancienne installation en secours.
{% endstep %}

{% step %}
🚀 Cliquez sur **Continuer**, attendez l'installation et lancez le nouveau profil. Testez-le avant de transférer une **copie** de vos sauvegardes.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
**Ne fusionnez jamais les anciens dossiers** `mods/`, `config/`, `kubejs/` ou `defaultconfigs/` avec ceux d'un nouveau profil. Des mods supprimés ou remplacés peuvent provoquer des incompatibilités.
{% endhint %}

{% hint style="info" %}
**L'option de mise à jour est absente ?** Dans les options du profil CurseForge, désactivez **Autoriser la gestion du contenu** si cette option est activée. Les modifications personnalisées peuvent être remplacées pendant la mise à jour ; un profil séparé permet de les conserver.
{% endhint %}

### 🌍 Sur d'autres launchers (Prism, Modrinth, MultiMC)

Les possibilités d'import varient selon le lanceur et sa version.

{% stepper %}
{% step %}
📥 Récupérez l'archive **client** depuis les [fichiers CurseForge](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files), ou recherchez le modpack dans le catalogue du lanceur lorsqu'il est compatible.
{% endstep %}

{% step %}
📂 Installez la nouvelle version dans **une nouvelle instance** plutôt que de mélanger les anciens mods et les nouveaux.
{% endstep %}

{% step %}
⚙️ Vérifiez **Minecraft 1.21.1**, **NeoForge**, **Java 21** et l'absence de téléchargement manquant.
{% endstep %}

{% step %}
💾 Après un premier lancement réussi, importez uniquement les données personnelles compatibles, en commençant par une **copie** de vos mondes `saves/`.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
Le **Server Pack ne sert pas à installer un client**. N'importez pas cette archive dans un lanceur Minecraft.
{% endhint %}

---

## 🎮 Héberger un serveur multijoueur

### 🧰 Prérequis

| Élément | Recommandation |
| --- | --- |
| **Minecraft** | **1.21.1**, avec **NeoForge** |
| **Java** | **21**, aussi sur un hébergeur |
| **Mémoire serveur** | Environ **8 Go dédiés** pour commencer, à adapter au nombre de joueurs et au monde |
| **Stockage** | **SSD** avec de l'espace pour les sauvegardes |
| **Fichiers** | **Server Pack de la même version** que les clients |
| **Connexion** | Port et pare-feu configurés si le serveur est public |

{% hint style="info" %}
Sur un hébergement géré, utilisez le **panneau de contrôle** pour sélectionner Java 21, démarrer le serveur et définir sa mémoire. Sur une machine personnelle, utilisez le script fourni avec le Server Pack.
{% endhint %}

---

## 📦 Installation ou mise à jour manuelle d'un serveur

{% hint style="warning" %}
**Avant toute mise à jour :** arrêtez le serveur et effectuez une **sauvegarde complète** du dossier serveur, y compris le monde, ses dimensions, les données de joueurs et les fichiers d'administration. Vérifiez que la sauvegarde est récupérable.
{% endhint %}

{% tabs %}
{% tab title="Installation" %}

### 🆕 Nouveau serveur

{% stepper %}
{% step %}
📥 Téléchargez le **Server Pack officiel v6.x** depuis les [fichiers CurseForge](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files). Choisissez la même version exacte que celle des clients, et non simplement le fichier le plus récent.
{% endstep %}

{% step %}
📂 Extrayez **l'intégralité du Server Pack dans un dossier vide**. Ne copiez pas uniquement `mods/` : les configurations et fichiers de lancement du pack doivent correspondre à sa version.
{% endstep %}

{% step %}
☕ Vérifiez le Java utilisé par le serveur :

~~~text
java -version
~~~

La version doit être **Java 21**. Configurez la RAM via votre panneau d'hébergement ou le fichier d'arguments JVM utilisé par votre installation.
{% endstep %}

{% step %}
🚀 Lancez le serveur en suivant la section **Installation manuelle du serveur** ci-dessous.
{% endstep %}

{% step %}
📜 Si le serveur génère `eula.txt` puis s'arrête, lisez le [contrat Minecraft](https://www.minecraft.net/en-us/eula). Si vous acceptez ses termes, modifiez `eula=false` en `eula=true` et redémarrez.
{% endstep %}

{% step %}
✅ Attendez la fin du démarrage, vérifiez `logs/latest.log` et testez une connexion avec un client de **la même version**.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Mise à jour" %}

### 🔄 Mettre à jour un serveur existant (v6.x)

{% stepper %}
{% step %}
🛑 **Arrêtez totalement l'ancien serveur** et sauvegardez son répertoire complet, sans exception. Ne mettez jamais à jour pendant que le monde est chargé.
{% endstep %}

{% step %}
📥 Téléchargez le **Server Pack de la version cible** et lisez les notes de version avant toute migration importante.
{% endstep %}

{% step %}
📂 Créez **un nouveau dossier vide** pour la nouvelle version, puis extrayez-y l'intégralité du Server Pack. **Ne recopiez pas** les anciens `mods/`, `config/`, `kubejs/`, `defaultconfigs/`, `libraries/`, fichiers `.jar` ou `showdown/`.
{% endstep %}

{% step %}
🌍 Depuis votre sauvegarde, recopiez le monde et uniquement les fichiers d'administration nécessaires :

- `world/`, ou le nom du monde défini dans `level-name`
- `server.properties`, après comparaison avec les nouveaux réglages
- `ops.json`, `whitelist.json`, `banned-players.json` et `banned-ips.json` s'ils existent
- `server-icon.png`, si vous l'utilisez

**Conservez toujours une copie intacte du monde d'origine.**
{% endstep %}

{% step %}
⚙️ Examinez `world/serverconfig/` et `world/datapacks/` s'ils existent. Ils peuvent conserver des réglages ou datapacks d'anciennes versions. **Ne supprimez rien à l'aveugle** : sauvegardez et comparez avant de désactiver ou de modifier un fichier.
{% endstep %}

{% step %}
🚀 Démarrez le nouveau serveur **sans l'ouvrir immédiatement aux joueurs**. Contrôlez le chargement du monde dans `logs/latest.log` puis testez la connexion avec un client de même version.
{% endstep %}

{% step %}
✅ Ouvrez le serveur si tout fonctionne. En cas d'échec, arrêtez cette nouvelle installation et **revenez à la sauvegarde complète** plutôt que d'endommager les données originales.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="danger" %}
### 🛡️ Fichiers à protéger

- **Ne jamais perdre :** monde, dimensions, données de joueurs et sauvegardes.
- **Reprendre depuis le nouveau Server Pack :** mods, configurations fournies, scripts et environnement du serveur.
- **Vérifier au cas par cas :** `world/serverconfig/`, `world/datapacks/` et personnalisations.

**Ne supprimez jamais le seul exemplaire de votre monde.** Les anciens JAR et bibliothèques de lancement ne doivent pas être recopiés dans une installation neuve uniquement parce qu'ils existaient auparavant.
{% endhint %}

---

## 🛠️ Installation manuelle du serveur

Une fois le Server Pack extrait, utilisez le script fourni pour votre système **s'il est présent**. Sur un hébergeur, utilisez son panneau de contrôle.

{% tabs %}
{% tab title="Windows" %}

{% stepper %}
{% step %}
☕ Installez **[Java 21](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)** ou sélectionnez-le dans votre panneau.
{% endstep %}

{% step %}
🖥️ Dans le dossier du serveur, lancez `run.bat` si le Server Pack inclut ce fichier.
{% endstep %}

{% step %}
📜 Si `eula.txt` est créé, acceptez-le après lecture si vous êtes d'accord, puis relancez `run.bat`.
{% endstep %}

{% step %}
⚙️ Configurez `server.properties` et la mémoire serveur, puis vérifiez la console.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="MacOS" %}

{% stepper %}
{% step %}
☕ Installez **[Java 21](https://www.oracle.com/java/technologies/downloads/#jdk21-mac)** adapté à votre Mac.
{% endstep %}

{% step %}
🖥️ Dans le dossier extrait, si `run.sh` est fourni, exécutez :

~~~bash
chmod +x run.sh
./run.sh
~~~
{% endstep %}

{% step %}
📜 Si `eula.txt` est créé, acceptez-le après lecture si vous êtes d'accord, puis relancez `./run.sh`.
{% endstep %}

{% step %}
⚙️ Vérifiez `server.properties`, les arguments mémoire et le journal de démarrage.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Linux" %}

{% stepper %}
{% step %}
☕ Installez **[Java 21](https://www.oracle.com/java/technologies/downloads/#jdk21-linux)** et contrôlez `java -version`.
{% endstep %}

{% step %}
🖥️ Si le Server Pack comprend `run.sh`, exécutez dans son dossier :

~~~bash
chmod +x run.sh
./run.sh
~~~
{% endstep %}

{% step %}
📜 Si `eula.txt` est créé, acceptez-le après lecture si vous êtes d'accord, puis relancez `./run.sh`.
{% endstep %}

{% step %}
⚙️ Configurez le port, la mémoire et les paramètres serveur avant son ouverture.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="info" %}
Si votre hébergeur ou votre archive utilise **un autre système de lancement**, suivez les instructions de ce système. N'essayez pas de démarrer un JAR pris au hasard dans `mods/` ou `libraries/`.
{% endhint %}

---

## 🌐 Autoriser les joueurs à se connecter

{% stepper %}
{% step %}
🔄 Vérifiez que les joueurs possèdent **la même version de Cobblemon Realms** que le serveur.
{% endstep %}

{% step %}
⚙️ Dans `server.properties`, adaptez `motd`, `max-players` et `server-port`. Conservez `online-mode=true` pour l'authentification normale.
{% endstep %}

{% step %}
✈️ Si un joueur est expulsé avec le message `Flying is not enabled on this server`, définissez :

~~~properties
allow-flight=true
~~~

Enregistrez puis redémarrez.
{% endstep %}

{% step %}
🌐 Pour un serveur personnel accessible depuis Internet, vérifiez la redirection du port `server-port` (par défaut **25565/TCP**) et le pare-feu. Chez un hébergeur, utilisez l'adresse et le port du panneau.
{% endstep %}
{% endstepper %}

---

## 🧰 Résoudre les problèmes courants

| Symptôme | Première vérification |
| --- | --- |
| **Le client ne démarre pas** | Java 21, RAM, téléchargements, pilotes graphiques |
| **Le serveur ne démarre pas** | Server Pack correct, Java 21, script, `logs/latest.log` |
| **Erreur de mods incompatibles** | Même version client/serveur, absence de vieux JAR |
| **Crash après une mise à jour** | Nouvelle installation serveur, `world/serverconfig/` et `world/datapacks/` |
| **Connexion refusée** | Port, pare-feu, adresse, serveur prêt, version |
| **Expulsion pour vol** | `allow-flight=true` puis redémarrage |

{% hint style="warning" %}
Pour demander de l'aide, partagez le **`logs/latest.log` complet**, votre version de Cobblemon Realms et votre méthode d'installation. Ajoutez le rapport de crash ou, pour les combats, le fichier associé dans `battle_logs/` si disponible. **Masquez les informations privées** avant de publier un journal.
{% endhint %}

Consultez aussi la [FAQ](faq.md), la page [Signaler un problème](report-a-bug.md) ou notre [Discord](https://discord.gg/kb8NSTF45n).

---

{% hint style="success" %}
### ☁️ Hébergement recommandé : BisectHosting

Cobblemon Realms est partenaire de **BisectHosting**. Vous pouvez héberger un serveur sans configurer vous-même la redirection des ports ou NeoForge.

- 🚀 Installation simplifiée du modpack
- 💾 Outils de gestion et de sauvegarde
- 🌍 Choix de la localisation du serveur
- 🛠️ Panneau d'administration des fichiers et paramètres

**[Découvrir BisectHosting](https://bisecthosting.com/OurStory)**
{% endhint %}

{% hint style="info" %}
### 🎉 Réduction partenaire

🎁 Utilisez le code **`OURSTORY`** pour bénéficier de **25 % de réduction sur votre premier mois d'hébergement**, via notre [lien partenaire BisectHosting](https://bisecthosting.com/OurStory).
{% endhint %}

---

<p align="center">🔥 Profitez de vos aventures Pokémon, en solo ou entre amis. Les Realms vous attendent ! 🧭✨</p>

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">
Une question ou une suggestion ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.
</p>
{% endhint %}
