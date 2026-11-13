# ⚙️ Configuration Cobbreeding et règles serveur

{% hint style="info" %}
<p align="center">
Comprenez le fonctionnement des réglages de <strong>Cobbreeding dans Cobblemon Realms</strong> : temps de reproduction, stockage des œufs, chances de Pokémon chromatiques, Métamorph, formes héritées et options réservées aux administrateurs.
</p>
{% endhint %}

{% hint style="warning" %}
**À quelles valeurs se fier ?** Les paramètres ci-dessous ont été vérifiés dans le fichier **`cobbreeding/main.json` de l'archive de configuration Cobblemon Realms fournie**. Ils décrivent cet état précis des fichiers, **pas une lecture en direct du serveur public**. Le comportement exact dépend également de la version du mod installée.
{% endhint %}

---

## ⏳ Reproduction et éclosion

| Paramètre | Valeur du fichier fourni | Fonction |
| --- | --- | --- |
| `minBreedingTimeInTicks` | `8000` | Délai minimal, environ **6 min 40 s** à 20 TPS |
| `maxBreedingTimeInTicks` | `14000` | Délai maximal configuré, environ **11 min 40 s** à 20 TPS |
| `mirrorHerbTimeInTicks` | `600` | Intervalle de traitement de l'Herbe Miroir, environ **30 secondes** à 20 TPS |
| `eggHatchMultiplier` | `1.0` | Multiplicateur du temps d'éclosion : plus il est faible, plus l'éclosion est rapide |
| `pastureInventorySize` | `5` | Nombre maximal d'œufs stockés dans le nid d'un pâturage |

{% hint style="info" %}
**Les ticks ne garantissent pas une durée réelle exacte.** Les conversions ci-dessus supposent un serveur à 20 ticks par seconde. Elles décrivent des intervalles configurés, sans promettre un œuf à chaque tentative. Le temps d'éclosion dépend aussi de l'espèce et de certains talents.
{% endhint %}

Avec le réglage de référence `eggHatchMultiplier: 1.0`, l'auteur prend l'exemple d'une espèce ayant **20 cycles d'œuf, avec environ 10 minutes d'éclosion**. Le minuteur progresse quand l'œuf est dans **l'inventaire d'un joueur**, et non dans un coffre ordinaire.

---

## ✨ Reproduction et Pokémon chromatiques

| Méthode de `shinyMethod` | Multiplicateur du fichier | Condition |
| --- | :---: | --- |
| `masuda` | **×4.0** | Parents ayant des **dresseurs d'origine (DO/OT) différents** |
| `crystal` | **×1.0** | Un parent chromatique ; peut s'appliquer deux fois avec deux parents chromatiques |
| `always` | **×1.0** | S'applique à tous les œufs |

Les méthodes applicables se multiplient entre elles. **Un multiplicateur ×1.0 n'apporte aucun bonus**, même lorsque la condition est remplie.

{% hint style="warning" %}
Le **taux chromatique de base dépend de Cobblemon** et n'est pas indiqué par ce fichier. Ne considérez pas les probabilités d'exemple du guide du mod comme les taux confirmés du serveur Cobblemon Realms. Dans Cobbreeding, la condition Masuda documentée correspond à **des dresseurs d'origine différents**, pas à des jeux de langues différentes.
{% endhint %}

---

## 💞 Métamorph, talents et règles de reproduction

| Paramètre | Valeur | Signification |
| --- | --- | --- |
| `hiddenAbilitiesEnabled` | `true` | Possibilité d'obtenir un talent caché sans héritage direct |
| `forcedAbilitiesEnabled` | `false` | Transmission forcée des talents désactivée dans ce fichier |
| `dittoAndDittoRandomEgg` | `false` | Deux Métamorph ne produisent **pas** d'œuf d'espèce aléatoire |
| `dittoAndDittoAllowLegendary` | `false` | Œufs de légendaires/mythiques aléatoires désactivés |
| `dittoAndDittoAllowParadox` | `false` | Œufs de Pokémon Paradoxe aléatoires désactivés |
| `dittoAndDittoAllowUltraBeast` | `false` | Œufs d'Ultra-Chimères aléatoires désactivés |
| `dittoAndDittoAllowUndiscovered` | `false` | Œufs aléatoires du groupe Inconnu désactivés |

Les quatre derniers paramètres concernent **uniquement la mécanique optionnelle Métamorph + Métamorph**. Lorsque cette mécanique est désactivée, ils ne permettent pas d'obtenir ces œufs.

---

## 🏡 Pâturages, automatisation et données

| Paramètre | Valeur | Signification |
| --- | --- | --- |
| `maxNumberOfActivatedPasturePerPlayer` | `-1` | Pas de limite de pâturages actifs par joueur dans ce fichier |
| `allowHoppersToPullFromPastureBlock` | `true` | Récupération des œufs par entonnoir autorisée |
| `eggEncryptionEnabled` | `true` | Données des œufs chiffrées pour éviter leur inspection anticipée |
| `customColors` | `false` | Coloration des œufs selon le type désactivée dans cet état |
| `cobblemonSizeVariationsCompatEnabled` | `true` | Ancienne option de compatibilité présente dans ce fichier |

{% hint style="warning" %}
`customColors` et `cobblemonSizeVariationsCompatEnabled` sont des **paramètres historiques ou dépendants de la version**. Leur présence dans une ancienne configuration ne prouve pas qu'ils existent toujours dans les versions récentes de Cobbreeding.
{% endhint %}

### 🧬 Caractéristiques d'espèce transmissibles

Le paramètre `inheritedFeatures` contient :

```text
bagworm_cloak, color, dance_style, fish_stripes,
striped, magikarp_jump, mooshtank, region_bias,
alolan, galarian, hisuian, paldean, bull_breed,
tatsugiri_texture, whiscash_nero, wooper_heart
```

La liste dépend de la version du mod. Elle définit quelles caractéristiques visuelles ou régionales peuvent être héritées, mais **ne garantit pas que toutes les formes exclusives de Cobblemon Realms soient reproductibles**.

---

## 🐺 Œufs Alpha dans les versions récentes

**Cobbreeding 2.4.0** a ajouté deux nouvelles possibilités :

- Une **chance configurable d'obtenir un Pokémon Alpha à l'éclosion**.
- Une option pour **activer la transmission du statut Alpha** depuis les parents.

Ces options sont documentées dans cette version du mod, mais **elles ne figurent pas dans l'archive de configuration examinée**. Ne supposez pas qu'elles sont actives sur le serveur public.

{% hint style="info" %}
**Compatibilité :** Cobbreeding 2.4.1 est publié pour **Cobblemon 1.8.2 ou supérieur**, sur la branche Minecraft 1.21.1 concernée. Utilisez de préférence la version intégrée à votre modpack : mettre à jour seulement Cobbreeding peut provoquer une incompatibilité.
{% endhint %}

---

## 🔐 Réservé à l'administration

Chemin du fichier :

```text
config/cobbreeding/main.json
```

Un administrateur disposant des permissions nécessaires peut utiliser `/givepokemonegg <player> <species> ...` pour créer un œuf. Les joueurs obtiennent normalement leurs œufs via les pâturages.

{% hint style="danger" %}
**Ne supprimez pas le fichier de chiffrement à côté de la configuration.** Désactiver `eggEncryptionEnabled` ne signifie pas que les anciennes données de chiffrement peuvent être effacées sans conséquence.
{% endhint %}

---

## 📚 Continuer votre lecture

- [🥚 Présentation de l'élevage](README.md)
- [🏡 Pâturages et œufs](pastures-and-eggs.md)
- [🧬 Hérédité et Pokémon chromatiques](inheritance-and-shinies.md)
- [🛠️ FAQ et dépannage](troubleshooting.md)

---

## 📖 Références techniques et crédits

Informations croisées avec le guide de **Ludichat**, le [code source de Cobbreeding](https://gitlab.com/ludichat/Cobbreeding), ses valeurs par défaut publiées et le fichier de configuration de Cobblemon Realms fourni. Les principales explications utiles aux joueurs sont rassemblées directement ici : **inutile de quitter le wiki pour lire la documentation du développeur**.

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">
Vous avez une question, une suggestion ou une correction à proposer ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.
</p>
{% endhint %}
