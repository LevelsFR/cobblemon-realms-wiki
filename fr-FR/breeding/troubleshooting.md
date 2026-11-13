# 🛠️ FAQ et dépannage de l'élevage

{% hint style="info" %}
<p align="center">
Impossible de placer un Pokémon dans le pâturage ? Aucun œuf n'apparaît ? Un minuteur reste bloqué à zéro ? Retrouvez les réponses aux problèmes les plus fréquents de <strong>Cobbreeding</strong>.
</p>
{% endhint %}

---

## ❓ Problèmes courants

### 🏡 Impossible de placer un Pokémon dans le pâturage

Cobblemon peut empêcher l'apparition d'un Pokémon si l'espace autour du bloc est trop étroit.

**Solution :** dégagez de la place derrière le bloc, en particulier pour les grands Pokémon, et rendez la zone accessible.

### 💞 Mes Pokémon ne se reproduisent pas

Vérifiez les points suivants :

1. **L'élevage est activé** dans l'interface du pâturage.
2. Les parents partagent un **groupe d'œufs**, possèdent des sexes compatibles ou constituent une association valide avec **Métamorph**.
3. Aucun parent n'appartient au groupe **Inconnu / Undiscovered**.
4. L'inventaire de nidification du pâturage n'est pas plein.
5. Le délai de reproduction prévu par la configuration du serveur est écoulé. Le fichier fourni indique **8 000 à 14 000 ticks**, sans confirmation en direct des valeurs du serveur public.

### 🩹 Mes Pokémon perdent leurs PV dans le pâturage

Les dangers environnementaux peuvent blesser les Pokémon si aucune protection active ne les en empêche.

**Solution :** évitez l'eau dangereuse, la lave, les grandes chutes et les blocs à risque. Aménagez un pâturage sûr.

### 🌳 Mes Pokémon disparaissent et retournent au PC

Selon l'auteur, cela peut se produire lorsqu'ils s'éloignent trop du bloc de pâturage.

**Solution :** limitez leur zone de déplacement. Les administrateurs peuvent aussi vérifier les paramètres d'errance de Cobblemon.

### ⏱️ Mon œuf atteint zéro mais n'éclot pas

Le minuteur du client peut être **désynchronisé** de celui du serveur. C'est le serveur qui décide du moment réel de l'éclosion.

**Solution :** gardez l'œuf dans votre inventaire et laissez le minuteur serveur se terminer.

---

## 📦 Que se passe-t-il si le chunk est déchargé ?

Quand le chunk d'un pâturage est déchargé, son activité de reproduction normale est interrompue. Au rechargement, le mod peut tenir compte du temps écoulé et générer des œufs correspondant aux tentatives passées, mais **sans dépasser la capacité de stockage du nid**.

Exemple : si la configuration autorise cinq œufs dans un pâturage et que le chunk est resté déchargé longtemps, le bloc ne pourra pas en générer plus de cinq dans son inventaire lors du retour.

{% hint style="warning" %}
Un entonnoir ne permet pas de contourner cette limite de rattrapage hors chargement. Il reste utile de récolter les œufs régulièrement.
{% endhint %}

---

## 🧬 Quand les caractéristiques de l'œuf sont-elles définies ?

Les données du futur Pokémon sont déterminées **à la création de l'œuf**, pas lors de son éclosion.

C'est notamment pour cette raison que certains réglages de protection des données des œufs sont utiles aux administrateurs.

---

## ⚙️ Configuration serveur et administration

Le fichier de configuration de Cobbreeding se trouve ici :

```text
.minecraft/config/cobbreeding/main.json
```

On peut y régler les délais de reproduction, la vitesse d'éclosion, les multiplicateurs chromatiques, les formes transmissibles, les entonnoirs, les limites de pâturage et le chiffrement des œufs.

### 🔐 Chiffrement des œufs

Le guide mentionne le paramètre `eggEncryptionEnabled`. Si un administrateur le désactive, il peut être nécessaire de **déchiffrer les anciens œufs** en les tenant dans la main et en faisant un clic droit.

{% hint style="danger" %}
**Pour les administrateurs :** ne supprimez pas le fichier de chiffrement enregistré à côté de la configuration Cobbreeding. Désactiver le chiffrement ne signifie pas supprimer les données de clé.
{% endhint %}

### ⌨️ Commande administrateur

```text
/givepokemonegg <player> <species> ...
```

Cette commande crée des œufs Pokémon avec des arguments comparables aux commandes d'attribution de Pokémon de Cobblemon. Elle exige les permissions appropriées et **ne remplace pas l'élevage pour les joueurs**.

---

## 📚 Guides associés

- [🥚 Élevage Pokémon](README.md) : présentation et point de départ.
- [🏡 Pâturages et œufs](pastures-and-eggs.md) : installation, compatibilité et collecte.
- [🧬 Hérédité et Pokémon chromatiques](inheritance-and-shinies.md) : caractéristiques, objets et méthodes chromatiques.
- [🔥 Incubateurs CobbleSafari](../mods-guides/CobbleSafari/wild_eggs_incubators.md) : une autre façon de faire éclore les œufs Cobbreeding.
- [⚙️ Configuration et règles serveur](configuration.md) : tous les réglages trouvés dans l'archive Cobblemon Realms.

---

## 📖 Source

Adapté de la [FAQ et du guide de configuration officiels de Cobbreeding](https://docs.google.com/document/d/1Hk5Iqnzm2NqkXGwzUIvPVFKhAwVHSEM3hyP3Qdhl5g4/edit).

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">
Vous avez une question, une suggestion ou une correction à proposer ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.
</p>
{% endhint %}
