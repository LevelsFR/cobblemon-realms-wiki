# 🧬 Hérédité et Pokémon chromatiques

{% hint style="info" %}
<p align="center">
L'élevage ne sert pas seulement à produire des œufs. <strong>Cobbreeding</strong> permet de transmettre plusieurs caractéristiques des parents aux descendants, avec des règles spécifiques pour certains objets, formes et méthodes de recherche de Pokémon chromatiques.
</p>
{% endhint %}

---

## 🎯 IV, Natures et Poké Balls

Cobbreeding permet la transmission des **valeurs individuelles (IV)**, des **Natures** et des **Poké Balls**, selon des règles inspirées des jeux Pokémon principaux.

| Objet ou mécanique | Rôle |
| --- | --- |
| **Nœud Destin** | Influence l'hérédité des IV |
| **Objets Pouvoir** | Influencent les IV transmis |
| **Pierre Stase** | Intervient dans l'hérédité de la Nature |
| **Hérédité des Poké Balls** | Permet de transmettre des caractéristiques de la Poké Ball aux descendants |

{% hint style="info" %}
L'implémentation du mod ne reproduit pas forcément chaque détail de toutes les générations des jeux Pokémon. Pour les interactions précises des objets, consultez la [documentation officielle](https://modrinth.com/mod/cobbreeding).
{% endhint %}

---

## 🌍 Formes et variantes régionales

Dans Cobbreeding, les formes transmissibles proviennent généralement de **la mère**. La Pierre Stase n'est pas utilisée pour transmettre la forme régionale du père.

Parmi les exemples documentés : les variantes régionales, les **motifs de Magicarpe (Magikarp Jump)** et les **styles de danse de Plumeline**.

Certaines formes sont particulières :

- **Motisma :** la forme obtenue est la forme classique.
- **Flabébé :** la couleur de la fleur est aléatoire.
- **Autres caractéristiques d'espèce :** leur transmission peut dépendre de la configuration du mod.

{% hint style="warning" %}
Toutes les apparences et formes spéciales ne sont pas automatiquement transmissibles. Le paramètre `inheritedFeatures` détermine quelles caractéristiques d'espèce prises en charge peuvent être héritées.
{% endhint %}

---

## 🐺 Pokémon Alpha (Cobbreeding 2.4.x)

**Cobbreeding 2.4.0** a ajouté une **probabilité configurable d'obtenir un Pokémon Alpha à l'éclosion** ainsi qu'une option permettant **l'hérédité du statut Alpha**. Leur disponibilité dépend de la version de Cobbreeding et des réglages du serveur.

{% hint style="warning" %}
L'obtention d'un œuf Alpha ou la transmission de ce statut n'est **pas garantie automatiquement** dans Cobblemon Realms. La configuration active du serveur n'a pas été vérifiée indépendamment.
{% endhint %}

---

## ✨ Talents et talents cachés

L'auteur présente les probabilités suivantes pour conserver l'emplacement du talent de la mère :

| Talent de la mère | Chance documentée de conserver son emplacement de talent |
| --- | --- |
| Talent classique | **80 %** |
| Talent caché | **60 %** |

La probabilité restante est répartie entre les autres emplacements de talent possibles. Cobbreeding peut aussi autoriser un descendant à obtenir son **talent caché** même si sa mère possède un talent classique, lorsque le paramètre correspondant est activé.

Ces pourcentages décrivent les règles indiquées par l'auteur et ne constituent pas une vérification séparée de la configuration du serveur public Cobblemon Realms.

---

## 📖 Capacités Œuf et Herbe Miroir

### 🥚 Transmettre des capacités Œuf

Le mod recherche les **capacités Œuf compatibles** parmi les capacités des deux parents. Il prend en compte les **capacités actives et celles mises en réserve** : il n'est donc pas toujours nécessaire de les équiper dans les quatre emplacements actifs.

{% hint style="info" %}
Si une capacité Œuf attendue n'est pas transmise, essayez de la placer parmi les **capacités en réserve** du parent.
{% endhint %}

### 🌿 Utiliser l'Herbe Miroir

Un Pokémon tenant une **Herbe Miroir (Mirror Herb)** dans le pâturage peut apprendre certaines capacités Œuf auprès d'un autre Pokémon présent.

- Les Pokémon concernés n'ont **pas besoin d'appartenir au même groupe d'œufs** pour ce transfert.
- La vérification est effectuée à chaque tentative de génération d'œuf du pâturage, même si elle échoue.

---

## ✨ Recherche de Pokémon chromatiques

Cobbreeding comprend plusieurs méthodes de bonus chromatique configurables. Voici les **multiplicateurs d'exemple par défaut présentés par l'auteur** :

| Méthode | Condition | Bonus d'exemple de l'auteur |
| --- | --- | :---: |
| **Masuda** | Parents possédant des **dresseurs d'origine différents** | **×4** |
| **Crystal** | Au moins un parent chromatique ; applicable deux fois si les deux le sont | **×1** |
| **Always** | S'applique à tous les œufs | **×1** |

Lorsqu'elles sont actives, ces méthodes peuvent **se cumuler de manière multiplicative**. Le taux chromatique de base dépend des paramètres de Cobblemon.

{% hint style="warning" %}
**Ces valeurs ne sont pas des taux vérifiés pour le serveur public.** Les multiplicateurs `shinyMethod`, les chances chromatiques de base et les options actives peuvent varier entre les instances de Cobblemon Realms. Dans Cobbreeding, la condition **Masuda** documentée compare les **dresseurs d'origine**, et non la langue des jeux.
{% endhint %}

---

## 🔗 Continuer

- [🏡 Pâturages et œufs](pastures-and-eggs.md) : installer un espace d'élevage.
- [🛠️ FAQ et dépannage](troubleshooting.md) : résoudre les problèmes d'œufs, de minuteur ou de compatibilité.

---

## 📖 Sources

[Guide officiel de Cobbreeding](https://docs.google.com/document/d/1Hk5Iqnzm2NqkXGwzUIvPVFKhAwVHSEM3hyP3Qdhl5g4/edit) par Ludichat ; [Cobbreeding sur Modrinth](https://modrinth.com/mod/cobbreeding).

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">
Vous avez une question, une suggestion ou une correction à proposer ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.
</p>
{% endhint %}
