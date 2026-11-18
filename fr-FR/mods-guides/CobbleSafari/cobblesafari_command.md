# ⌨️ Commande /cobblesafari

## ⌨️ Commandes CobbleSafari

{% hint style="info" %}
<p align="center">Cette page répertorie les différentes commandes ajoutées par <strong>CobbleSafari</strong>, permettant notamment de gérer la Dimension Safari, les portails Hoopa, les marchands et plusieurs fonctionnalités du mod.</p>
{% endhint %}

{% hint style="warning" %}
<p align="center">Cette page s'adresse principalement aux administrateurs et propriétaires de serveurs.</p>
{% endhint %}

***

## 🔄 Gestion de la configuration

Ces commandes permettent de recharger ou réinitialiser certains systèmes de CobbleSafari.

### `/cobblesafari refresh`

```
/cobblesafari refresh
```

ℹ️ Recharge les fichiers de configuration du mod sans redémarrer le serveur.

***

### `/cobblesafari reset safari`

```
/cobblesafari reset safari
```

ℹ️ Réinitialise la Dimension Safari.

***

### `/cobblesafari reset dungeon`

```
/cobblesafari reset dungeon
```

ℹ️ Réinitialise les donjons et supprime les portails actifs.

{% hint style="danger" %}
<p align="center">Les donjons ne peuvent pas être réinitialisés si des joueurs sont encore présents à l'intérieur.</p>
{% endhint %}

***

## 🤝 Gestion des Marchands

Permet de faire apparaître les marchands CobbleSafari.

### `/cobblesafari summon`

```
/cobblesafari summon <name> <variant>
```

ℹ️ Fait apparaître un marchand à votre position.

### `/cobblesafari summon_template`

```
/cobblesafari summon_template <name> <variant>
```

ℹ️ Fait apparaître un marchand modèle destiné aux structures.

***

## ⏳ Gestion des timers

### Safari

```
/cobblesafari timer safari add <joueur> <secondes>
```

ℹ️ Ajoute du temps à un joueur dans la Dimension Safari.

```
/cobblesafari timer safari remove <joueur> <secondes>
```

ℹ️ Retire du temps à un joueur.

```
/cobblesafari timer safari set <joueur> <secondes>
```

ℹ️ Définit le temps restant.

```
/cobblesafari timer safari get <joueur>
```

ℹ️ Affiche le temps restant.

```
/cobblesafari timer safari toggle <joueur>
```

ℹ️ Active ou désactive le bypass du timer.

***

### Dimensions personnalisées

```
/cobblesafari timer dimension set <joueur> <secondes> <dimension>
```

ℹ️ Permet de modifier le temps restant d'une dimension configurée.

***

## 🌀 Portails Hoopa et Donjons

### Faire apparaître un portail

```
/cobblesafari dungeon spawn
```

ℹ️ Crée un portail Hoopa près du joueur.

### Voir les portails actifs

```
/cobblesafari dungeon list portal
```

ℹ️ Affiche les **portails d'entrée**. Pour consulter les instances et leurs occupants, utilisez désormais **`/cobblesafari dungeon list`**.

### Afficher les dimensions enregistrées

```
/cobblesafari dungeon dimensions
```

ℹ️ Affiche les dimensions de donjons disponibles ainsi que leur durée configurée.

***

---

## 🆕 Commandes apparues en 0.4

### 🧭 Onboarding administrateur

```mcfunction
/cobblesafari onboarding
```

Ouvre l'assistant initial pour les opérateurs (permission de niveau 2). Il permet de choisir les addons compatibles, les Ultra-Chimères, Mega Showdown, les annonces et les Reward Balloons.

### 🌀 Portails et instances

```mcfunction
/cs dungeon list
/cs dungeon list portal
/cs dungeon list portal force
/cs dungeon spawn [player] [dungeon]
/cs reset dungeon force
```

- `list` présente les **instances de donjons**, leurs occupants et l'état de leurs entrées.
- `list portal` liste les portails ; `force` lance une nouvelle recherche dans les **chunks chargés**.
- `spawn` peut sélectionner un donjon précis, sans imposer un flag de forçage.
- `reset dungeon force` contourne la protection habituelle des donjons occupés. À employer uniquement si une évacuation est prévue.

### ⏳ Temps de session

```mcfunction
/cs timer session list <player>
/cs timer session add <player> <scope> <seconds>
/cs timer session set <player> <scope> <seconds>
```

Les minuteurs sont désormais liés à **chaque visite**. L'ancienne commande `timer dimension` ajuste uniquement une session existante et ne peut plus en créer une nouvelle.

### 🛠️ Ressources pour les admins

[Générateur de portails](portal_spawner.md) · [Configuration 0.4](admin_configuration.md) · [Objectifs dimensionnels](dimensional_objectives.md).

**Sources :** [Version 0.4.0](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [Code des commandes](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/java/maxigregrze/cobblesafari/command/CobbleSafariCommand.java).

---

{% hint style="success" %}
### Nous contacter

<p align="center">Si vous avez des questions, des suggestions ou des modifications à proposer, n'hésitez pas à nous rejoindre sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et à contacter directement <strong>@FabLeKebab</strong> sur le serveur pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.</p>
{% endhint %}
