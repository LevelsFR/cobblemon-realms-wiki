# 🌐 Serveurs Multijoueur

{% hint style="info" %}
<p align="center">
<strong>Cobblemon Realms</strong> peut être joué aussi bien en solo qu'en multijoueur. Rejoignez une communauté existante ou créez votre propre serveur pour vivre l'aventure avec vos amis ! 🧑‍🤝‍🧑
</p>
{% endhint %}

---

## 🧑‍🤝‍🧑 Rejoindre un serveur

Vous pouvez rejoindre un serveur utilisant une version **compatible de Cobblemon Realms v6.x**, à condition d'avoir **exactement les mêmes fichiers et versions requis par ce serveur**. Un serveur communautaire peut aussi demander des mods ou ressources additionnels.

| 📦 Vérification | ✅ À avoir |
| --- | --- |
| **Modpack** | La même version que le serveur |
| **Java** | **Java 21** |
| **Client** | **Minecraft 1.21.1 + NeoForge** et le profil Cobblemon Realms correspondant |

{% hint style="info" %}
<p align="center">
💡 Certains serveurs peuvent utiliser des <strong>règles, mods supplémentaires ou fonctionnalités personnalisées</strong> qui ne sont pas présentes dans l'installation de base de Cobblemon Realms.
</p>
{% endhint %}

---

### 🎮 Connexion étape par étape

{% stepper %}
{% step %}
📦 Installez la **version exacte** de Cobblemon Realms demandée par l'administrateur, de préférence avec CurseForge.
{% endstep %}

{% step %}
🚀 Lancez Minecraft depuis **le profil du modpack**, puis ouvrez **Multijoueur**.
{% endstep %}

{% step %}
🌐 Cliquez sur **Ajouter un serveur** ou **Connexion directe** et saisissez **l'adresse fournie par l'administrateur**. Si le port n'est pas celui par défaut, ajoutez-le après l'adresse.
{% endstep %}

{% step %}
✅ Vérifiez que le serveur a terminé son démarrage et connectez-vous. En cas de message de mods ou de registres incompatibles, comparez les **versions exactes**, pas seulement « v6.x ».
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Le contenu d'une instance client peut différer d'un serveur communautaire. **N'ajoutez pas automatiquement** des mods demandés par un serveur tiers à votre profil principal : créez plutôt une copie du profil pour conserver une installation propre.
{% endhint %}

---

## 🛠️ Créer votre propre serveur

**Créer votre propre serveur** vous permet de jouer avec vos amis, de personnaliser votre aventure et de gérer votre propre communauté.

### ⚙️ Configuration recommandée

| Ressource | Recommandation |
| --- | --- |
| ☕ **Java** | Version **21** |
| 💾 **RAM** | **8 Go dédiés pour commencer**, à adapter au nombre de joueurs et à l'exploration |
| 🌐 **Réseau** | Connexion stable |
| 💽 **Stockage** | **SSD recommandé** |
| 🔓 **Port** | **25565/TCP par défaut**, ou le port choisi dans `server.properties` |

📘 Pour installer ou mettre à jour votre serveur, consultez le [**Guide d'installation**](installation.md).

---

### 📦 Client, Server Pack et mises à jour

| Situation | Méthode recommandée |
| --- | --- |
| **Nouvelle installation** | Télécharger le **Server Pack officiel** de la version jouée et l'extraire entièrement dans un dossier vide |
| **Mise à jour v6.x** | Sauvegarder l'ancien serveur, préparer **une nouvelle installation complète**, puis migrer une copie du monde |
| **Monde existant** | Conserver le monde **entier** et les données de joueurs ; vérifier `world/serverconfig/` et `world/datapacks/` |
| **Fichiers de lancement** | Employer ceux du **nouveau Server Pack**, sans recopier les anciens JAR ou bibliothèques |
| **Avant ouverture** | Tester le démarrage et la connexion d'un client sur **la même version exacte** |

{% hint style="warning" %}
Copier seulement les dossiers `mods/`, `config/`, `kubejs/` et `defaultconfigs/` **ne constitue pas une migration sûre** pour une mise à jour majeure. Les anciens fichiers de lancement ou les réglages du monde peuvent rester incompatibles. Pour la procédure complète, consultez le [guide d'installation et de migration](installation.md).
{% endhint %}

### 🔐 Paramètres multijoueur utiles

Dans `server.properties`, vérifiez notamment :

- `online-mode=true` : conserve l'authentification des comptes Minecraft.
- `server-port=25565` : port par défaut, à adapter à votre hébergement.
- `white-list=true` : permet de limiter l'accès à une liste de joueurs autorisés.
- `allow-flight=true` : à utiliser si des joueurs sont expulsés avec le message « Flying is not enabled on this server ».

Pour administrer une liste blanche, utilisez les commandes serveur `/whitelist on` et `/whitelist add Pseudo`. Dans la console serveur, ces commandes s'utilisent généralement **sans le slash initial**.

{% hint style="info" %}
Sur un hébergeur, le **port et l'adresse de connexion** sont généralement fournis par le panneau. Chez vous, un accès depuis Internet peut nécessiter l'ouverture du port **TCP** dans le pare-feu et sur le routeur. Certains accès Internet avec **CGNAT** ne permettent pas une redirection classique.
{% endhint %}

---

## ☁️ Héberger son serveur

Vous pouvez héberger votre serveur directement chez vous, mais cela implique notamment de gérer **l'ouverture des ports, la maintenance, les sauvegardes et la disponibilité du serveur**. Pour une solution plus simple, vous pouvez utiliser un **hébergeur spécialisé**.

### 🚀 BisectHosting

**BisectHosting** est le **partenaire officiel de Cobblemon Realms** et propose une solution spécialement adaptée à l'hébergement de serveurs Minecraft moddés.

**Quelques avantages :**

- ⚡ Installation du modpack en **un clic**
- 🌍 Centres de données répartis dans le monde
- 🛡️ **Protection DDoS** intégrée
- 💾 Sauvegardes simplifiées
- 🔄 Gestion facilitée des mises à jour
- 📂 Accès complet aux fichiers du serveur

{% hint style="success" %}
<p align="center">
🎁 Utilisez le code <code>OURSTORY</code> sur <a href="https://bisecthosting.com/OurStory"><strong>BisectHosting</strong></a> lors de votre commande pour bénéficier de <strong>25 % de réduction sur votre premier mois d'hébergement</strong>.
</p>
{% endhint %}

---

## 🧰 Dépannage multijoueur

| Symptôme | Vérification prioritaire |
| --- | --- |
| **Serveur introuvable / connexion refusée** | Adresse, port, pare-feu, serveur démarré et paramètres réseau |
| **Mods ou registres incompatibles** | Même version exacte du modpack, absence de vieux mods ou de changements côté serveur |
| **Expulsion pour vol** | Vérifier `allow-flight=true` puis redémarrer le serveur |
| **Crash au démarrage ou après migration** | Lire `logs/latest.log` en entier ; tester le nouveau Server Pack avec une sauvegarde du monde |
| **Lags pendant l'exploration** | Surveiller la RAM, le CPU et la génération des chunks ; envisager [Chunky](mods-guides/chunky.md) |
| **Quêtes, Pokémon ou progression manquants** | Vérifier la **sauvegarde complète du monde** et les données de joueurs, sans écraser les originaux |

{% hint style="warning" %}
Pour obtenir de l'aide, fournissez la **version exacte**, le type d'hébergement, les étapes du crash et un `logs/latest.log` complet (ou un rapport de crash). Masquez les **IP privées, jetons et autres données sensibles** avant de partager les fichiers.
{% endhint %}

---

## 🔐 Bonnes pratiques

Un serveur bien entretenu est un serveur qui évite beaucoup de problèmes. Pensez notamment à :

- 💾 Effectuer **régulièrement des sauvegardes** de votre monde
- 🔄 Garder **le serveur et le modpack à jour**
- 🧱 Pré-générer votre monde avec [**Chunky**](mods-guides/chunky.md)
- ✅ Utiliser une **whitelist** pour contrôler les accès
- 📋 Consulter les **logs** en cas d'erreur ou de crash

{% hint style="warning" %}
⚠️ **Avant toute mise à jour importante**, effectuez une sauvegarde complète de votre monde et de vos fichiers de configuration. Une sauvegarde récente peut vous éviter de perdre plusieurs heures de progression.
{% endhint %}

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">
Une question, une suggestion ou un problème concernant les serveurs ?<br>
Rejoignez-nous sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et contactez <strong>@FabLeKebab</strong> pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.
</p>
{% endhint %}
