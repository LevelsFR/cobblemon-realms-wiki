# 🐎 Système de montures — Cobblemon 1.8.1

{% hint style="info" %}
<p align="center">
Ce guide décrit <strong>uniquement les montures natives de Cobblemon 1.8.1</strong>, pour Minecraft 1.21.1. Les espèces, styles, places et plages de statistiques ci-dessous sont établis d'après le <strong>wiki officiel de Cobblemon</strong> et les notes de version officielles 1.8.0/1.8.1. Les JSON d'espèces sont liés en fin de page pour une vérification indépendante.
</p>
{% endhint %}

{% hint style="warning" %}
Cette liste concerne le <strong>jeu Cobblemon 1.8.1 sans modification de ses montures</strong>. Les Pokémon supplémentaires ou les caractéristiques modifiées par <strong>Cobblemon Ride+</strong>, un autre addon ou un datapack **ne sont pas inclus**.
{% endhint %}

---

## 🎮 Comment monter un Pokémon

{% stepper %}
{% step %}
🐾 Envoyez un Pokémon prenant en charge les montures.
{% endstep %}

{% step %}
🖱️ **Accroupissez-vous (Shift par défaut) et faites un clic droit** sur le Pokémon, puis choisissez l'interaction de monture.
{% endstep %}

{% step %}
🎮 Utilisez vos touches de déplacement. **Les commandes dépendent du style** : les montures terrestres, aquatiques et aériennes ne se dirigent pas toutes de la même façon.
{% endstep %}

{% step %}
🚶 Descendez avec la touche habituelle de Minecraft (**Shift** par défaut).
{% endstep %}
{% endstepper %}

{% hint style="info" %}
**Aucune selle n'est nécessaire.** Un Pokémon peut posséder plusieurs styles selon le milieu : **Dracaufeu** utilise par exemple **Standard** au sol et **Oiseau (Bird)** dans les airs. Certaines montures disposent de plusieurs places pour les joueurs.
{% endhint %}

---

## 🧭 Styles de monture natifs

### 🌍 Terre

| Style | Fonctionnement |
| --- | --- |
| **Standard** (`land/horse`) | Similaire à un cheval de Minecraft : suit la direction du regard, déplacement latéral et sprint consommant de l'endurance. |

Le wiki officiel décrit également le style **Véhicule (Vehicle)** de manière générale, mais **aucune monture terrestre native de la liste 1.8.1 ne l'utilise** : les entrées terrestres ci-dessous fonctionnent avec **Standard**.

### 🌊 Eau et autres liquides

| Style | Fonctionnement |
| --- | --- |
| **Bateau (Boat)** (`liquid/boat`) | Se déplace en surface ; les touches gauche/droite dirigent la monture indépendamment de la caméra. |
| **Sous-marin (Submarine)** (`liquid/submarine`) | Permet de naviguer en surface et de plonger sous l'eau. |
| **Dauphin (Dolphin)** (`liquid/dolphin`) | Permet de plonger et d'effectuer des bonds hors de l'eau. |

### ☁️ Air

| Style | Fonctionnement |
| --- | --- |
| **Oiseau (Bird)** (`air/bird`) | Vol dirigé par la caméra, déplacements latéraux et vol stationnaire ; un mode de contrôle proche des élytres existe dans la configuration. |
| **Jet** (`air/jet`) | Vol rapide orienté vers l'avant, sans vol stationnaire ; **Saut** et **Accroupissement** contrôlent l'altitude. |
| **Vol stationnaire (Hover)** (`air/hover`) | Déplacements précis dans toutes les directions ; dépasser l'altitude habituelle sollicite l'endurance. |
| **Fusée (Rocket)** (`air/rocket`) | Variante du vol stationnaire, avec déplacement vers l'avant plus rapide. |

{% hint style="info" %}
Les styles sont des **comportements de monture**, pas des types de Pokémon ni des capacités de combat. Un Pokémon Eau n'est pas automatiquement une monture aquatique, et un Pokémon Vol n'est pas forcément montable.
{% endhint %}

---

## 📊 Statistiques des montures

Ces statistiques sont **indépendantes des statistiques de combat** (Vitesse, Attaque, Défense, etc.). Les tableaux ci-dessous présentent des **plages configurées de 0 à 100** : chaque Pokémon possède des valeurs individuelles déterminées à partir de ces plages.

| Statistique | Effet |
| --- | --- |
| **Vitesse** | Vitesse maximale de déplacement |
| **Accélération** | Rapidité à atteindre la vitesse maximale |
| **Maniabilité (Skill)** | Facilité à tourner ; en **Hover**, influe sur la décélération |
| **Saut** | Hauteur de saut au sol ; plongée, vol plané, décollage ou altitude selon le style |
| **Endurance** | Durée des capacités spéciales comme le sprint, le vol prolongé ou le maintien en altitude |

Le **Saut** intervient différemment selon le style : plongée en **Sous-marin**, plongée et bonds en **Dauphin**, vol plané en **Oiseau**, vitesse nécessaire au décollage en **Jet**, altitude sans dépense supplémentaire en **Hover** et vitesse de montée en **Fusée**.

{% hint style="success" %}
Certaines statistiques de monture peuvent être améliorées grâce aux [Aprijuices](../cobblemon-craft/aprijuice-guide.md). Les valeurs de monture ne correspondent **pas** aux statistiques des combats Pokémon.
{% endhint %}

---

## ⚙️ Configuration des montures

Les paramètres natifs du client peuvent être modifiés dans `config/cobblemon/main.json`. Par exemple, pour limiter le mal des transports causé par l'inclinaison de la caméra, réglez **l'option existante** sur `"disableRoll": true`.

- **Inversion des axes** (pitch, yaw, roll) et **sensibilité** : ajustent les préférences de caméra et de conduite.
- **Remember Riding Camera** : permet de conserver les préférences de caméra lors de la descente.
- Certaines options peuvent également être disponibles dans l'interface de configuration de Cobblemon.

{% hint style="warning" %}
Ne **remplacez pas tout le fichier de configuration** par un petit exemple JSON. Sauvegardez-le et modifiez uniquement les options nécessaires. La configuration du serveur et les mods additionnels peuvent aussi modifier le comportement.
{% endhint %}

---

## 🆕 Les 10 nouvelles montures natives depuis Cobblemon 1.8

Ces dix Pokémon ajoutés au système de montures en **1.8.0** sont également présents en **1.8.1** :

| Pokémon | Places | Terre | Eau | Air |
| --- | :---: | --- | --- | --- |
| **Roucarnage** | 1 | Standard | — | Oiseau |
| **Nostenfer** | 1 | Standard | — | Oiseau |
| **Airmure** | 1 | Standard | — | Oiseau |
| **Milobellus** | 1 | Standard | Dauphin | — |
| **Aéroptéryx** | 1 | Standard | — | Oiseau |
| **Muplodocus** | 1 | Standard | — | — |
| **Muplodocus (Hisui)** | 1 | Standard | — | — |
| **Draïeul** | 1 | Standard | Bateau | Oiseau |
| **Duralugon** | 1 | Standard | — | — |
| **Pondralugon** | 1 | Standard | — | — |

**Places et formes :** chaque espèce possède ses propres emplacements natifs. Quelques exemples : **Wailord (19)**, **Oyacata (7)**, **Camérupt (6)** et **Métalosse (4)**. **Tortank n'a plus qu'une place en 1.8.1** : un siège supplémentaire involontaire a été supprimé.

{% hint style="info" %}
La version **1.8.0** a également introduit les **places conditionnelles** : certaines peuvent dépendre de propriétés du Pokémon, comme le statut Alpha. Une valeur maximale de places ne signifie donc pas que chaque forme ou modèle dispose systématiquement de tous ces emplacements.
{% endhint %}

---

## 🗂️ Liste complète des montures natives et de leurs places

**99 entrées d'espèces ou de formes** prises en charge par le système natif de **Cobblemon 1.8.1**. Ce récapitulatif indique précisément les milieux, les styles et le nombre de places déclarés. Les statistiques détaillées se trouvent dans les trois tableaux suivants.

{% hint style="info" %}
Le nombre de places est celui de la définition native. Certaines places peuvent être conditionnelles (par exemple selon la forme ou l'état Alpha) ou nécessiter un point d'ancrage adapté dans le modèle. Une place déclarée n'est donc pas une garantie pour toutes les variantes visuelles.
{% endhint %}

<details>
<summary><strong>📖 Afficher les 99 entrées de montures</strong></summary>

| Pokémon | Places | Terre | Eau | Air |
| --- | :---: | --- | --- | --- |
| Florizarre | 1 | Standard | — | — |
| Dracaufeu | 1 | Standard | — | Oiseau |
| Tortank | 1 | Standard | Sous-marin | Fusée |
| Roucarnage | 1 | Standard | — | Oiseau |
| Parasect | 1 | Standard | — | — |
| Arcanin | 1 | Standard | — | — |
| Lamantine | 2 | Standard | Dauphin | — |
| Rhinocorne | 1 | Standard | — | — |
| Rhinoféros | 1 | Standard | — | — |
| Poissoroy | 1 | — | Sous-marin | — |
| Mr. Mime | 1 | Standard | — | — |
| Tauros | 1 | Standard | — | — |
| Tauros (Paldea-Aqua) | 1 | Standard | Bateau | — |
| Tauros (Paldea-Blaze) | 1 | Standard | — | — |
| Tauros (Paldea-Combat) | 1 | Standard | — | — |
| Léviator | 1 | Standard | Dauphin | Jet |
| Lokhlass | 1 | Standard | Bateau | — |
| Ptéra | 1 | Standard | — | Oiseau |
| Artikodin | 1 | Standard | — | Oiseau |
| Électhor | 1 | Standard | — | Oiseau |
| Sulfura | 1 | Standard | — | Oiseau |
| Dracolosse | 2 | Standard | Dauphin | Jet |
| Migalos | 1 | Standard | — | — |
| Nostenfer | 1 | Standard | — | Oiseau |
| Girafarig | 1 | Standard | — | — |
| Forêtress | 1 | — | — | Stationnaire |
| Scarhino | 1 | Standard | — | Oiseau |
| Ursaring | 1 | Standard | — | — |
| Cochignon | 1 | Standard | — | — |
| Démanta | 1 | Standard | Dauphin | Oiseau |
| Airmure | 1 | Standard | — | Oiseau |
| Lugia | 1 | Standard | Dauphin | Oiseau |
| Ho-Oh | 2 | Standard | — | Oiseau |
| Monaflèmit | 1 | Standard | — | — |
| Sharpedo | 1 | — | Dauphin | — |
| Wailmer | 1 | Standard | Sous-marin | — |
| Wailord | 19 | Standard | Sous-marin | — |
| Camérupt | 6 | Standard | — | — |
| Libégon | 1 | Standard | — | Oiseau |
| Altaria | 1 | Standard | — | Oiseau |
| Kaorine | 1 | — | — | Stationnaire |
| Milobellus | 1 | Standard | Dauphin | — |
| Tropius | 2 | Standard | — | Oiseau |
| Relicanth | 1 | — | Sous-marin | — |
| Drattak | 2 | Standard | — | Oiseau |
| Métalosse | 4 | Standard | — | Stationnaire |
| Latias | 1 | Standard | — | Jet |
| Latios | 1 | Standard | — | Jet |
| Étouraptor | 1 | Standard | — | Oiseau |
| Bastiodon | 2 | Standard | — | — |
| Tritosor | 1 | Standard | — | — |
| Grodrive | 1 | — | — | Stationnaire |
| Corboss | 1 | Standard | — | Oiseau |
| Archéodong | 2 | — | — | Stationnaire |
| Carchacrok | 1 | Standard | Bateau | Jet |
| Magnézone | 1 | — | — | Stationnaire |
| Coudlangue | 2 | Standard | — | — |
| Rhinastoc | 1 | Standard | — | — |
| Togekiss | 1 | Standard | — | Jet |
| Mammochon | 3 | Standard | — | — |
| Noctunoir | 1 | — | — | Stationnaire |
| Majaspic | 1 | Standard | — | — |
| Zéblitz | 1 | Standard | — | — |
| Brutapode | 1 | Standard | — | — |
| Darumacho | 1 | Standard | — | — |
| Crabaraque | 4 | Standard | — | — |
| Aéroptéryx | 1 | Standard | — | Oiseau |
| Cliticlic | 1 | — | — | Stationnaire |
| Golemastoc | 3 | Standard | — | Fusée |
| Frison | 1 | Standard | — | — |
| Gueriaigle | 1 | Standard | — | Oiseau |
| Gueriaigle (Hisui) | 1 | Standard | — | Oiseau |
| Trioxhydre | 2 | Standard | — | Oiseau |
| Pyrax | 1 | Standard | — | Oiseau |
| Cabriolaine | 1 | Standard | — | — |
| Chevroum | 1 | Standard | — | — |
| Rexillius | 2 | Standard | — | — |
| Muplodocus | 1 | Standard | — | — |
| Muplodocus (Hisui) | 1 | Standard | — | — |
| Bruyverne | 1 | Standard | — | Oiseau |
| Bourrinos | 1 | Standard | — | — |
| Draïeul | 1 | Standard | Bateau | Oiseau |
| Sinistrail | 1 | Standard | Sous-marin | — |
| Corvaillus | 2 | Standard | — | Oiseau |
| Duralugon | 1 | Standard | — | — |
| Lanssorien | 1 | Standard | Dauphin | Jet |
| Cerbyllin | 1 | Standard | — | — |
| Ursaking | 2 | Standard | — | — |
| Farfurex | 1 | Standard | — | — |
| Fulgulairo | 1 | Standard | — | Oiseau |
| Cléopsytra | 1 | Standard | — | — |
| Vrombotor | 2 | Standard | — | — |
| Motorizard | 1 | Standard | — | — |
| Ferdeter | 1 | Standard | — | — |
| Oyacata | 7 | Standard | Sous-marin | — |
| Farigiraf | 1 | Standard | — | — |
| Deusolourdo | 2 | Standard | — | — |
| Deusolourdo (Forme Triple) | 2 | Standard | — | — |
| Pondralugon | 1 | Standard | — | — |

</details>

---

## 📋 Toutes les statistiques de monture natives — 1.8.1

Les trois tableaux repliables ci-dessous regroupent les **valeurs de chaque milieu**. Un même Pokémon peut apparaître plusieurs fois avec des **statistiques différentes**. Colonnes : **Accél.**, **Maniab.**, **Vit.**, **End.**, **Saut**.

Les montures supplémentaires de **Cobblemon Ride+** ne figurent pas dans ces tableaux.

---

<details>

<summary><strong>🐾 Liste des montures terrestres</strong></summary>

***

| Pokémon | Accél. | Maniab. |  Vit. |  End.  |  Saut |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Florizarre |  40-75 |  10-40  | 30-55 |  45-85 | 40-60 |
| Dracaufeu |  55-65 |  10-25  | 25-40 |  20-30 | 15-25 |
| Tortank |  30-50 |  10-35  | 30-65 |  15-35 | 15-30 |
| Roucarnage | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Parasect |  50-70 |  45-65  | 15-30 |  15-30 |  0-15 |
| Arcanin |  70-90 |  40-80  | 45-70 |  35-80 | 45-65 |
| Lamantine |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Rhinocorne |  5-20  |   5-25  | 25-60 |  40-80 |  5-15 |
| Rhinoféros |  55-75 |  30-60  |  5-15 |  55-90 | 20-30 |
| Mr. Mime |  20-40 |  15-45  | 25-45 |  35-60 | 15-35 |
| Tauros |  15-50 |  15-30  | 55-75 |  35-55 | 25-35 |
| Tauros (Paldea-Aqua) |  15-50 |  15-30  | 50-70 |  40-60 | 25-30 |
| Tauros (Paldea-Blaze) |  20-55 |  15-30  | 55-75 |  30-50 | 25-40 |
| Tauros (Paldea-Combat) |  15-50 |  15-30  | 55-75 |  35-55 | 25-35 |
| Léviator |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Lokhlass |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Ptéra |  55-75 |  15-45  | 10-20 |  20-45 | 25-35 |
| Artikodin |  70-90 |  30-60  | 10-20 |  40-80 | 25-50 |
| Électhor |  70-90 |  30-60  | 10-20 |  40-80 | 25-50 |
| Sulfura |  70-90 |  30-60  | 10-20 |  40-80 | 25-50 |
| Dracolosse |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Migalos |  55-85 |  45-65  | 30-45 |  15-30 | 25-45 |
| Nostenfer | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Girafarig |  40-65 |  20-35  | 25-45 |  30-50 | 30-45 |
| Scarhino |  55-70 |  40-65  | 15-30 |  35-50 | 35-50 |
| Ursaring |  45-80 |  20-45  | 30-40 |  30-65 | 25-40 |
| Cochignon |  30-50 |  30-45  | 10-25 |  35-70 |  5-10 |
| Démanta |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Airmure | 50-65 | 20-35 | 30-45 | 30-55 | 25-35 |
| Lugia |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Ho-Oh |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Monaflèmit |  0-20  |   0-20  | 25-65 | 60-100 | 25-40 |
| Wailmer |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Wailord |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Camérupt |  45-60 |  10-30  | 25-35 |  50-80 | 10-25 |
| Libégon |  60-75 |  15-25  | 15-25 |  25-40 | 15-30 |
| Altaria |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Milobellus | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Tropius |  30-50 |  30-50  | 15-25 |  55-85 | 10-20 |
| Drattak |  60-80 |   5-20  | 10-20 |  35-70 | 15-25 |
| Métalosse |  50-70 |  35-50  | 10-20 |  55-70 | 30-45 |
| Latias |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Latios |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Étouraptor |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Bastiodon |  15-25 |   0-5   | 15-35 |  50-90 |  0-5  |
| Tritosor |  70-90 |   0-15  |  5-10 |  10-20 |  0-10 |
| Corboss |  55-65 |  10-25  | 25-40 |  20-30 | 15-25 |
| Carchacrok |  65-75 |  40-70  | 40-55 |  30-45 | 30-50 |
| Coudlangue |  0-15  |   0-5   | 10-25 |  20-40 | 40-60 |
| Rhinastoc |  45-75 |  25-55  |  5-15 | 75-100 | 10-25 |
| Togekiss |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Mammochon |  30-40 |  20-30  | 20-35 |  60-90 | 10-20 |
| Majaspic |  65-80 |   0-30  | 25-45 |  35-55 |  0-5  |
| Zéblitz |  65-85 | 50-75 | 35-75 |  25-45 | 35-45 |
| Brutapode |  20-25 |  25-35  | 45-75 |  50-70 | 25-35 |
| Darumacho |  45-65 |  15-25  | 40-50 |  35-60 | 35-45 |
| Crabaraque |  15-45 |  25-35  |  1-5  |  60-85 |  0-5  |
| Aéroptéryx | 55-65 | 10-25 | 25-40 | 20-40 | 25-35 |
| Golemastoc |  65-80 |  40-65  | 35-50 |  60-85 | 40-60 |
| Frison |  50-75 |  15-30  | 45-65 |  55-70 | 20-30 |
| Gueriaigle | 90-100 |  15-30  | 10-20 |  15-30 | 10-20 |
| Gueriaigle (Hisui) |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Trioxhydre |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Pyrax |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Cabriolaine |  40-65 |  20-40  | 30-45 |  30-45 | 30-40 |
| Chevroum |  65-75 |  40-60  | 45-65 |  45-65 | 40-60 |
| Rexillius |  50-70 |  40-60  | 20-30 | 70-100 | 40-55 |
| Muplodocus | 60-70 | 20-35 | 20-35 | 55-85 | 45-60 |
| Muplodocus (Hisui) | 50-60 | 10-25 | 10-25 | 70-100 | 20-35 |
| Bruyverne |  65-85 |  30-50  | 35-50 |  10-20 | 30-45 |
| Bourrinos |  50-70 |  30-60  | 30-40 | 70-100 | 30-40 |
| Draïeul | 10-40 | 30-65 | 0-10 | 55-85 | 30-65 |
| Sinistrail |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Corvaillus |  60-80 |  30-50  | 15-30 |  60-80 | 30-45 |
| Duralugon | 35-60 | 5-25 | 10-20 | 40-80 | 20-25 |
| Lanssorien |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Cerbyllin |  60-80 |  40-60  | 45-65 |  55-70 | 45-55 |
| Ursaking |  30-40 |  10-25  | 40-65 |  65-85 | 25-35 |
| Farfurex |  75-90 |  65-85  | 35-45 |  10-20 | 30-40 |
| Fulgulairo |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Cléopsytra |  30-65 |  15-40  | 55-70 |  25-35 | 40-55 |
| Vrombotor |   0-5  |  25-40  | 70-85 |  20-40 | 15-20 |
| Motorizard |  65-85 |  35-60  | 50-80 |  30-60 | 35-45 |
| Ferdeter |  15-25 |   0-15  | 30-40 |  25-75 |  0-5  |
| Oyacata |  10-40 |  80-100 | 10-40 |  10-40 | 10-40 |
| Farigiraf |  40-60 |  35-50  | 45-60 |  50-70 | 45-55 |
| Deusolourdo |  30-50 |  30-40  |  5-25 |  30-75 | 20-45 |
| Deusolourdo (Forme Triple) |  35-60 |  30-40  |  5-25 |  35-85 | 25-55 |
| Pondralugon | 45-70 | 5-25 | 5-10 | 50-90 | 25-30 |

</details>

---

<details>

<summary><strong>🌊 Liste des montures aquatiques</strong></summary>

***

| Pokémon | Accél. | Maniab. |  Vit. |  End.  |  Saut  |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Tortank |  45-65 |  50-75  | 35-65 |  35-70 |  30-50 |
| Lamantine |  50-75 |  30-65  | 25-45 |  25-50 |  25-50 |
| Poissoroy |  35-70 |  25-55  | 35-65 |  20-40 |  15-35 |
| Tauros (Paldea-Aqua) |  55-65 |  40-55  | 30-40 |  30-65 |  20-30 |
| Léviator |  40-60 |  35-65  | 30-55 |  45-75 |  40-70 |
| Lokhlass |  30-55 |  50-75  | 25-40 |  45-75 |  20-30 |
| Dracolosse |  30-65 |  35-50  | 30-50 |  60-90 |  55-85 |
| Démanta |  30-55 |  45-75  | 20-40 |  20-40 |  40-80 |
| Lugia | 80-100 |  75-95  | 60-80 | 80-100 |  75-90 |
| Sharpedo |  55-85 |  25-65  | 55-85 |  20-45 |  45-75 |
| Wailmer |  30-55 |  30-55  | 30-50 |  40-85 |  25-40 |
| Wailord |  20-45 |  30-55  | 20-40 | 65-100 |  40-55 |
| Milobellus | 40-55 | 65-90 | 45-70 | 45-60 | 25-40 |
| Relicanth |  25-40 |  40-80  | 15-35 |  50-90 |  50-75 |
| Carchacrok |  75-85 |  10-25  | 35-60 |  5-10  |  40-80 |
| Draïeul | 10-25 | 50-70 | 10-30 | 50-65 | 20-40 |
| Sinistrail |  40-55 |  20-30  | 15-30 |  45-65 | 70-100 |
| Lanssorien |  60-85 |  55-70  | 50-65 |  25-35 |  40-55 |
| Oyacata |  45-65 |  50-75  | 25-45 |  60-75 |  10-25 |

</details>

---

<details>

<summary><strong>🪶 Liste des montures aériennes</strong></summary>

***

| Pokémon | Accél. | Maniab. |  Vit.  |  End.  |  Saut  |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Dracaufeu |  45-75 |  55-85  |  30-65 |  45-75 |  30-65 |
| Tortank |  5-40  |  30-60  |  5-15  |  2-20  |  10-20 |
| Roucarnage | 45-70 | 35-65 | 30-65 | 25-40 | 55-80 |
| Léviator |  35-60 |  45-65  |  15-50 |  15-55 |  20-45 |
| Ptéra |  35-65 |  35-70  |  45-75 |  40-65 |  45-75 |
| Artikodin |  70-85 |  80-100 |  65-90 |  70-90 |  65-90 |
| Électhor |  65-90 |  70-85  | 80-100 |  65-85 |  70-85 |
| Sulfura |  70-85 |  65-90  |  70-85 | 80-100 |  65-90 |
| Dracolosse |  35-50 |  50-85  |  40-60 |  50-85 |  50-70 |
| Nostenfer | 50-75 | 65-85 | 65-85 | 25-40 | 45-65 |
| Forêtress |  20-40 |  25-45  |  15-25 |   0-5  |  5-10  |
| Scarhino |  40-65 |  55-85  |  35-50 |  35-55 |   0-5  |
| Démanta | 75-100 |  30-50  |  20-40 |   0-0  |  25-45 |
| Airmure | 35-50 | 30-55 | 30-50 | 50-75 | 50-70 |
| Lugia |  65-85 |  60-80  |  60-80 |  65-90 |  75-90 |
| Ho-Oh |  75-95 |  65-85  |  75-90 | 80-100 | 75-100 |
| Libégon |  40-75 |  40-85  |  50-80 |  45-65 |  45-60 |
| Altaria |  25-45 |  40-50  |  25-35 |  70-90 |  25-45 |
| Kaorine |  65-85 |  50-70  |  10-20 |  5-10  |  35-70 |
| Tropius |  20-45 |  20-40  |  20-45 |  55-80 |  70-90 |
| Drattak |  60-75 |  40-65  |  60-75 |  65-85 |  60-85 |
| Métalosse |  60-75 |  35-55  |  45-75 |  10-25 |  25-45 |
| Latias |  70-95 |  70-95  |  75-90 | 85-100 | 85-100 |
| Latios |  70-95 |  70-95  | 85-100 |  70-95 | 80-100 |
| Étouraptor |  45-70 | 25-55 | 45-70 |  45-70 |  45-65 |
| Grodrive |  10-20 |  15-25  |  5-15  |  40-80 | 60-100 |
| Corboss |  20-40 |  30-50  |  20-35 |  55-75 |  50-70 |
| Archéodong |  40-65 |  25-40  |  15-30 |  10-20 |  30-50 |
| Carchacrok |  50-70 |  50-60  |  70-80 |  30-50 |  20-70 |
| Magnézone |  65-90 |  35-50  |  20-35 |  5-15  |  45-65 |
| Togekiss |  20-30 |  45-65  |  20-30 | 70-100 |  10-20 |
| Noctunoir |  45-60 |  60-70  |  15-25 |   0-5  |  45-80 |
| Aéroptéryx | 55-75 | 60-85 | 10-20 | 0-5 | 30-65 |
| Cliticlic |  40-60 |  40-60  |  30-40 |  5-10  |  15-25 |
| Golemastoc |  10-35 |  15-30  |  45-75 |  30-50 |  25-40 |
| Gueriaigle |  35-55 |  30-50  |  45-70 |  55-85 |  35-55 |
| Gueriaigle (Hisui) |  30-50 |  30-50  |  40-65 |  60-90 |  40-60 |
| Trioxhydre |  35-55 |  30-60  |  45-60 | 75-100 |  5-10  |
| Pyrax |  45-65 |  55-75  |  30-50 |  65-90 |  25-35 |
| Bruyverne |  40-65 |  50-85  |  55-90 |  30-45 |  55-85 |
| Draïeul | 10-25 | 45-60 | 10-30 | 80-100 | 0-10 |
| Corvaillus |  35-55 |  20-35  |  25-40 | 80-100 | 80-100 |
| Lanssorien |  60-85 |  55-70  |  55-90 |  25-35 |  45-80 |
| Fulgulairo |  35-50 |  40-65  |  30-45 |  40-65 |  50-70 |

</details>

---

<!-- cr-addon-riding-start -->
## 🧩 Montures des addons pour Cobblemon 1.8.1

Les tableaux précédents restent strictement **natifs**. Cette section présente les données ajoutées ou modifiées par les addons **compatibles Cobblemon 1.8.1**, sans les mélanger aux valeurs d'origine. Certains réglages de mods dépassent 100.

{% hint style="warning" %}
**Conflit documenté :** la définition Mega Showdown 1.3.0 de **Tortank / Méga-Tortank indique deux sièges** alors que le Tortank natif 1.8.1 n'en possède qu'un. Les fichiers réellement chargés et leurs priorités déterminent le résultat en jeu.
{% endhint %}

## 🔷 Cobblemon: Mega Showdown

### Définitions Mega Showdown : espèces additionnelles (1/3)

Les données ci-dessous proviennent des JSON de **Mega Showdown 1.3.0**, pas des statistiques natives. Certains Pokémon déjà montables voient leurs paramètres remplacés.

| Pokémon | Places | Terre | Eau | Air | Origine |
| --- | :---: | --- | --- | --- | --- |
| Hooh | 1 | Standard | — | Oiseau | Modification native |
| Entei | 1 | Standard | — | — | Ajout du mod |
| Lugia | 1 | Standard | Dauphin | Oiseau | Modification native |
| Lunala | 1 | — | — | Oiseau | Ajout du mod |
| Arceus | 1 | Standard | — | Oiseau | Ajout du mod |
| Kyogre | 1 | — | Dauphin | — | Ajout du mod |
| Zekrom | 1 | Standard | — | Oiseau | Ajout du mod |
| Keldeo | 1 | Standard | — | — | Ajout du mod |
| Chongjian | 1 | Standard | — | — | Ajout du mod |
| Groudon | 1 | Standard | — | — | Ajout du mod |
| Genesect | 1 | Standard | — | Oiseau | Ajout du mod |
| Reshiram | 1 | Standard | — | Oiseau | Ajout du mod |

<details>
<summary><strong>📊 Plages statistiques exactes</strong></summary>

| Pokémon | Milieu | Style | Accél. | Maniab. | Vit. | End. | Saut |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Hooh | Air | Oiseau | 20-100 | 50-100 | 25-50 | 30-70 | 25-50 |
| Hooh | Terre | Standard | 90-100 | 15-30 | 10-20 | 15-30 | 10-20 |
| Entei | Terre | Standard | 30-60 | 20-50 | 20-40 | 60-120 | 30-65 |
| Lugia | Air | Oiseau | 20-100 | 50-100 | 70-95 | 130-150 | 25-50 |
| Lugia | Terre | Standard | 90-100 | 15-30 | 10-20 | 15-30 | 10-20 |
| Lugia | Eau | Dauphin | 55-85 | 10-40 | 55-85 | 80-135 | 30-65 |
| Lunala | Air | Oiseau | 45-75 | 55-85 | 30-80 | 70-100 | 30-65 |
| Arceus | Air | Oiseau | 30-65 | 30-65 | 55-85 | 80-160 | 30-65 |
| Arceus | Terre | Standard | 10-40 | 30-65 | 30-65 | 30-65 | 55-85 |
| Kyogre | Eau | Dauphin | 55-85 | 10-40 | 55-85 | 80-135 | 30-65 |
| Zekrom | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Zekrom | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Keldeo | Terre | Standard | 30-60 | 20-50 | 40-50 | 100-145 | 30-65 |
| Chongjian | Terre | Standard | 20-30 | 45-65 | 20-30 | 80-100 | 5-20 |
| Groudon | Terre | Standard | 30-60 | 20-50 | 20-40 | 80-135 | 30-65 |
| Genesect | Air | Oiseau | 41-60 | 41-60 | 80-160 | 80-120 | 41-60 |
| Genesect | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Reshiram | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Reshiram | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |

</details>

Fichiers sources : [hooh.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/hooh.json), [entei.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/entei.json), [lugia.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/lugia.json), [lunala.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/lunala.json), [arceus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/arceus.json), [kyogre.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/kyogre.json), [zekrom.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/zekrom.json), [keldeo.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/keldeo.json), [wochien.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/wochien.json), [groudon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/groudon.json), [genesect.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/genesect.json), [reshiram.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/reshiram.json)

### Définitions Mega Showdown : espèces additionnelles (2/3)

| Pokémon | Places | Terre | Eau | Air | Origine |
| --- | :---: | --- | --- | --- | --- |
| Type:0 | 1 | Standard | — | — | Ajout du mod |
| Miraidon | 1 | Standard | Bateau | Oiseau | Ajout du mod |
| Koraidon | 1 | Standard | Bateau | Oiseau | Ajout du mod |
| Melmetal | 1 | Standard | — | — | Ajout du mod |
| Viridium | 1 | Standard | — | — | Ajout du mod |
| Silvallié | 1 | Standard | — | — | Ajout du mod |
| Blizzeval | 1 | Standard | — | — | Ajout du mod |
| Spectreval | 1 | Standard | — | — | Ajout du mod |
| Volcanion | 1 | Standard | — | — | Ajout du mod |
| Latias | 1 | Standard | Dauphin | Jet | Remplace le natif |
| Latios | 1 | Standard | Dauphin | Jet | Remplace le natif |
| Yveltal | 1 | Standard | Bateau | Oiseau | Ajout du mod |

<details>
<summary><strong>📊 Plages statistiques exactes</strong></summary>

| Pokémon | Milieu | Style | Accél. | Maniab. | Vit. | End. | Saut |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Type:0 | Terre | Standard | 30-60 | 40-70 | 20-40 | 60-95 | 30-65 |
| Miraidon | Air | Oiseau | 45-75 | 55-85 | 30-65 | 30-65 | 30-65 |
| Miraidon | Terre | Standard | 65-85 | 35-60 | 50-85 | 30-60 | 35-45 |
| Miraidon | Eau | Bateau | 0-20 | 35-60 | 30-65 | 30-60 | 35-45 |
| Koraidon | Air | Oiseau | 45-75 | 55-85 | 30-65 | 30-65 | 30-65 |
| Koraidon | Terre | Standard | 65-85 | 35-60 | 50-85 | 30-60 | 35-45 |
| Koraidon | Eau | Bateau | 0-20 | 35-60 | 30-65 | 30-60 | 35-45 |
| Melmetal | Terre | Standard | 30-60 | 20-50 | 20-40 | 80-135 | 30-65 |
| Viridium | Terre | Standard | 75-85 | 60-80 | 60-80 | 45-65 | 40-60 |
| Silvallié | Terre | Standard | 30-60 | 20-50 | 20-40 | 30-65 | 30-65 |
| Blizzeval | Terre | Standard | 30-60 | 20-50 | 20-40 | 60-120 | 30-65 |
| Spectreval | Terre | Standard | 50-70 | 20-50 | 50-70 | 60-120 | 30-65 |
| Volcanion | Terre | Standard | 30-60 | 20-50 | 20-40 | 60-105 | 30-65 |
| Latias | Air | Jet | 70-90 | 100-130 | 75-85 | 82-120 | 41-60 |
| Latias | Terre | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Latias | Eau | Dauphin | 0-20 | 60-80 | 41-60 | 60-90 | 41-60 |
| Latios | Air | Jet | 70-90 | 100-130 | 85-95 | 82-120 | 41-60 |
| Latios | Terre | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Latios | Eau | Dauphin | 0-20 | 60-80 | 41-60 | 60-90 | 41-60 |
| Yveltal | Air | Oiseau | 61-68 | 150-180 | 41-75 | 162-220 | 41-60 |
| Yveltal | Terre | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Yveltal | Eau | Bateau | 0-20 | 21-40 | 41-60 | 0-20 | 41-60 |

</details>

Fichiers sources : [typenull.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/typenull.json), [miraidon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/miraidon.json), [koraidon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/koraidon.json), [melmetal.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/melmetal.json), [virizion.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/virizion.json), [silvally.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/silvally.json), [glastrier.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/glastrier.json), [spectrier.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/spectrier.json), [volcanion.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/volcanion.json), [latias.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/latias.json), [latios.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/latios.json), [yveltal.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/yveltal.json)

### Autres espèces et formes Mega Showdown (3/3, partie A)

| Pokémon | Places | Terre | Eau | Air | Origine |
| --- | :---: | --- | --- | --- | --- |
| Absol (Mega-Z) | 1 | Standard | — | — | Forme / espèce du mod |
| Goupelin (Mega) | 2 | Standard | — | Jet | Forme / espèce du mod |
| Zygarde | 1 | Standard | — | — | Forme / espèce du mod |
| Zygarde (10%) | 0* | Standard | — | — | Forme / espèce du mod |
| Zygarde (10%-C) | 0* | Standard | — | — | Forme / espèce du mod |
| Zygarde (50%-C) | 1 | Standard | — | — | Forme / espèce du mod |
| Zygarde (Complete) | 0* | Standard | — | — | Forme / espèce du mod |
| Zygarde (Core) | 0* | Standard | — | — | Forme / espèce du mod |
| Florizarre | 1 | Standard | — | — | Remplace le natif |
| Florizarre (Mega) | 1 | Standard | — | — | Forme / espèce du mod |
| Kyurem | 1 | Standard | — | — | Forme / espèce du mod |
| Kyurem (White) | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Kyurem (Black) | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Éthernatos | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Amovénus (Therian) | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Boréas | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Zacian | 1 | Standard | — | — | Forme / espèce du mod |
| Landorus | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Duraludon | 1 | Standard | — | — | Remplace le natif |

*Une définition de comportement avec 0 siège explicite ne confirme pas un siège utilisable en jeu.*

<details>
<summary><strong>📊 Statistiques des définitions</strong></summary>

| Pokémon | Milieu | Style | Accél. | Maniab. | Vit. | End. | Saut |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Absol (Mega-Z) | Terre | Standard | 75-85 | 60-80 | 50-70 | 35-55 | 30-50 |
| Goupelin (Mega) | Air | Jet | 50-70 | 35-55 | 65-85 | 60-75 | 40-60 |
| Goupelin (Mega) | Terre | Standard | 50-70 | 35-55 | 35-45 | 60-75 | 10-25 |
| Zygarde | Terre | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (10%) | Terre | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (10%-C) | Terre | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (50%-C) | Terre | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (Complete) | Terre | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (Core) | Terre | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Florizarre | Terre | Standard | 40-75 | 10-40 | 30-55 | 45-85 | 40-60 |
| Florizarre (Mega) | Terre | Standard | 40-75 | 10-40 | 30-55 | 45-85 | 40-60 |
| Kyurem | Terre | Standard | 30-60 | 20-50 | 20-40 | 30-65 | 30-65 |
| Kyurem (White) | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Kyurem (White) | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Kyurem (Black) | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Kyurem (Black) | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Éthernatos | Air | Oiseau | 41-60 | 41-60 | 21-40 | 81-130 | 41-60 |
| Éthernatos | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Amovénus (Therian) | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Amovénus (Therian) | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Boréas | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Boréas | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Zacian | Terre | Standard | 30-60 | 20-50 | 50-80 | 60-95 | 30-65 |
| Landorus | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Landorus | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Duraludon | Terre | Standard | 35-60 | 5-25 | 10-20 | 40-80 | 20-25 |

</details>

Sources JSON : [absol_mega_z.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/absol_mega_z.json), [delphox_mega.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/delphox_mega.json), [zygarde.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation6/zygarde.json), [melmetal.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation7b/melmetal.json), [venusaur.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/venusaur.json), [kyurem.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/kyurem.json), [eternatus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/eternatus.json), [enamorus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8a/enamorus.json), [tornadus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/tornadus.json), [zacian.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/zacian.json), [landorus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/landorus.json), [duraludon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/duraludon.json)

### Autres espèces et formes Mega Showdown (3/3, partie B)

| Pokémon | Places | Terre | Eau | Air | Origine |
| --- | :---: | --- | --- | --- | --- |
| Fulguris | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Ursaking | 2 | Standard | — | — | Remplace le natif |
| Ursaking (Bloodmoon) | 0* | Standard | — | — | Forme / espèce du mod |
| Dracaufeu | 1 | Standard | — | Oiseau | Remplace le natif |
| Dracaufeu (Mega-X) | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Dracaufeu (Mega-Y) | 1 | Standard | — | Oiseau | Forme / espèce du mod |
| Zamazenta | 1 | Standard | — | — | Forme / espèce du mod |
| Métalosse | 4 | Standard | — | Stationnaire | Remplace le natif |
| Métalosse (Mega) | 4 | Standard | — | Stationnaire | Forme / espèce du mod |
| Lokhlass | 1 | Standard | Bateau | — | Remplace le natif |
| Tortank | 2 | Standard | Sous-marin | Fusée | Remplace le natif |
| Tortank (Mega) | 2 | Standard | Sous-marin | Fusée | Forme / espèce du mod |
| Laggron (Mega) | 2 | Standard | Dauphin | — | Forme / espèce du mod |
| Rayquaza | 4 | Standard | Bateau | Jet | Forme / espèce du mod |
| Necrozma | 1 | — | — | Stationnaire | Forme / espèce du mod |
| Darumacho | 1 | Standard | — | — | Remplace le natif |

*0* signale une définition sans siège explicite : monture non confirmée en jeu.

<details>
<summary><strong>📊 Statistiques des définitions</strong></summary>

| Pokémon | Milieu | Style | Accél. | Maniab. | Vit. | End. | Saut |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Fulguris | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Fulguris | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Ursaking | Terre | Standard | 30-40 | 10-25 | 40-65 | 65-85 | 25-35 |
| Ursaking (Bloodmoon) | Terre | Standard | 30-40 | 10-25 | 40-65 | 65-85 | 25-35 |
| Dracaufeu | Air | Oiseau | 45-75 | 55-85 | 30-65 | 45-75 | 30-65 |
| Dracaufeu | Terre | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Dracaufeu (Mega-X) | Air | Oiseau | 45-75 | 55-85 | 30-65 | 45-75 | 30-65 |
| Dracaufeu (Mega-X) | Terre | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Dracaufeu (Mega-Y) | Air | Oiseau | 45-75 | 55-85 | 30-65 | 45-75 | 30-65 |
| Dracaufeu (Mega-Y) | Terre | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Zamazenta | Terre | Standard | 30-60 | 20-50 | 50-80 | 60-95 | 30-65 |
| Métalosse | Air | Stationnaire | 60-75 | 35-55 | 45-75 | 10-25 | 25-45 |
| Métalosse | Terre | Standard | 50-70 | 35-50 | 10-20 | 55-70 | 30-45 |
| Métalosse (Mega) | Air | Stationnaire | 60-75 | 35-55 | 45-75 | 10-25 | 25-45 |
| Métalosse (Mega) | Terre | Standard | 50-70 | 35-50 | 10-20 | 55-70 | 30-45 |
| Lokhlass | Terre | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Lokhlass | Eau | Bateau | 30-55 | 50-75 | 25-40 | 45-75 | 20-30 |
| Tortank | Air | Fusée | 5-40 | 30-60 | 5-15 | 2-20 | 10-20 |
| Tortank | Terre | Standard | 30-50 | 10-35 | 30-65 | 15-35 | 15-30 |
| Tortank | Eau | Sous-marin | 45-65 | 50-75 | 35-65 | 35-70 | 30-50 |
| Tortank (Mega) | Air | Fusée | 5-40 | 30-60 | 5-15 | 2-20 | 10-20 |
| Tortank (Mega) | Terre | Standard | 30-50 | 10-35 | 30-65 | 15-35 | 15-30 |
| Tortank (Mega) | Eau | Sous-marin | 45-65 | 50-75 | 35-65 | 35-70 | 30-50 |
| Laggron (Mega) | Terre | Standard | 80-85 | 35-70 | 10-35 | 45-65 | 40-60 |
| Laggron (Mega) | Eau | Dauphin | 75-85 | 60-80 | 30-50 | 45-65 | 40-60 |
| Rayquaza | Air | Jet | 61-68 | 150-180 | 41-75 | 162-220 | 41-60 |
| Rayquaza | Terre | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Rayquaza | Eau | Bateau | 0-20 | 21-40 | 41-60 | 0-20 | 41-60 |
| Necrozma | Air | Stationnaire | 65-90 | 41-80 | 34-70 | 20-25 | 45-65 |
| Darumacho | Terre | Standard | 45-65 | 15-25 | 40-50 | 35-60 | 35-45 |

</details>

Sources JSON : [machamp.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/machamp.json), [thundurus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/thundurus.json), [ursaluna.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8a/ursaluna.json), [charizard.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/charizard.json), [zamazenta.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/zamazenta.json), [butterfree.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/butterfree.json), [metagross.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation3/metagross.json), [lapras.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/lapras.json), [blastoise.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/blastoise.json), [swampert.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation3/swampert.json), [rayquaza.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation3/rayquaza.json), [necrozma.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation7/necrozma.json), [darmanitan.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/darmanitan.json)

## 📜 Lost Lore 3.2.0

Montures et formes spéciales avec **comportements `riding.behaviours` explicitement déclarés** dans les fichiers de Lost Lore. Les cinq versions Starmobile possèdent quatre emplacements chacune.

| Pokémon / forme | Places | Terre | Eau | Air |
| --- | :---: | --- | --- | --- |
| MT | 1 | Standard | — | — |
| MT2 | 1 | Standard | — | — |
| Black Fog | 1 | Standard | — | Stationnaire |
| Tyranocif (Black) | 1 | Standard | — | — |
| Dialga (Primal) | 1 | Standard | — | Oiseau |
| Vrombotor (Segin) | 4 | Standard | — | — |
| Vrombotor (Caph) | 4 | Standard | — | — |
| Vrombotor (Ruchbah) | 4 | Standard | — | — |
| Vrombotor (Schedar) | 4 | Standard | — | — |
| Vrombotor (Navi) | 4 | Standard | — | — |
| Lugia (Shadow) | 1 | Standard | Dauphin | Oiseau |
| Mewtwo (Armored) | 1 | Standard | Dauphin | Jet |
| Mewtwo (Mega-Armored) | 1 | Standard | Dauphin | Jet |
| Mewtwo (Shadow) | 1 | Standard | Dauphin | Jet |

<details>
<summary><strong>📊 Statistiques exactes Lost Lore</strong></summary>

| Pokémon | Milieu | Style | Accél. | Maniab. | Vit. | End. | Saut |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| MT | Terre | Standard | 50-75 | 35-55 | 20-40 | 125-150 | 10-25 |
| MT2 | Terre | Standard | 50-75 | 35-55 | 20-40 | 125-150 | 10-25 |
| Black Fog | Air | Stationnaire | 60-75 | 35-55 | 55-85 | 65-80 | 25-45 |
| Black Fog | Terre | Standard | 50-70 | 35-50 | 10-20 | 55-70 | 30-45 |
| Tyranocif (Black) | Terre | Standard | 50-75 | 35-55 | 40-60 | 60-85 | 10-25 |
| Dialga (Primal) | Air | Oiseau | 45-75 | 55-85 | 30-80 | 45-77 | 30-65 |
| Dialga (Primal) | Terre | Standard | 55-65 | 20-55 | 40-70 | 55-99 | 20-80 |
| Vrombotor (Segin) | Terre | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Vrombotor (Caph) | Terre | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Vrombotor (Ruchbah) | Terre | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Vrombotor (Schedar) | Terre | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Vrombotor (Navi) | Terre | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Lugia (Shadow) | Air | Oiseau | 20-100 | 50-100 | 85-110 | 150-180 | 25-50 |
| Lugia (Shadow) | Terre | Standard | 90-100 | 15-30 | 10-20 | 15-30 | 10-20 |
| Lugia (Shadow) | Eau | Dauphin | 55-85 | 10-40 | 55-85 | 80-135 | 30-65 |
| Mewtwo (Armored) | Air | Jet | 50-70 | 60-80 | 70-95 | 95-105 | 40-60 |
| Mewtwo (Armored) | Terre | Standard | 65-75 | 35-55 | 15-25 | 30-45 | 10-25 |
| Mewtwo (Armored) | Eau | Dauphin | 55-75 | 10-30 | 45-65 | 85-105 | 30-65 |
| Mewtwo (Mega-Armored) | Air | Jet | 50-70 | 60-80 | 70-95 | 95-105 | 40-60 |
| Mewtwo (Mega-Armored) | Terre | Standard | 65-75 | 35-55 | 15-25 | 30-45 | 10-25 |
| Mewtwo (Mega-Armored) | Eau | Dauphin | 55-75 | 10-30 | 45-65 | 85-105 | 30-65 |
| Mewtwo (Shadow) | Air | Jet | 50-70 | 60-80 | 70-95 | 95-105 | 40-60 |
| Mewtwo (Shadow) | Terre | Standard | 65-75 | 35-55 | 15-25 | 30-45 | 10-25 |
| Mewtwo (Shadow) | Eau | Dauphin | 55-75 | 10-30 | 45-65 | 85-105 | 30-65 |

</details>

{% hint style="warning" %}
Le changelog de Lost Lore mentionne des corrections de montures pour les **starters clonés, Groudon Virus et Rayquaza Illusion**. Leurs fichiers ne définissent toutefois aucun nouveau `riding.behaviours` : ils pourraient utiliser des propriétés héritées. **Ils ne sont pas comptés comme nouvelles montures explicites** sans vérification en jeu. La forme **Ronflex Snowman** possède une configuration `riding.behaviour` au singulier, sans `behaviours` : son fonctionnement n'est pas confirmé.
{% endhint %}

Sources JSON : [mt.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species/generation5/mt.json), [mt2.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species/generation5/mt2.json), [blackfog.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species/lost_lore/blackfog.json), [black_tyranitar.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/black_tyranitar.json), [primal_dialga.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/primal_dialga.json), [starmobile_revavroom.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/starmobile_revavroom.json), [shadow_lugia.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/shadow_lugia.json), [armored_mewtwo.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/armored_mewtwo.json), [shadow_mewtwo.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/shadow_mewtwo.json)

## 🧬 Navas ZA Mega (ZaMega 1.8.1+1.8)

Analyse directe du JAR `zamega-neoforge-1.8.1+1.8.jar` fourni : **aucune définition `riding`** dans les JSON de ce mod. Il contient des formes supplémentaires pour **Darkrai, Heatran, Zygarde, Magearna, Zeraora et Tatsugiri**, ainsi que la forme **Ange de Floette**. Aucune de ces variantes ne peut être ajoutée en tant que **nouvelle monture confirmée par les données**. Certaines peuvent hériter de propriétés du Pokémon de base ou d'un autre addon, sans preuve de montabilité autonome.

{% hint style="info" %}
Le JAR demande notamment `cobblemon >= 1.8.0` et la dépendance `mega_showdown`. Les informations de cette section sont bornées au **JAR fourni**, et non à d'éventuelles versions ultérieures.
{% endhint %}

<!-- cr-rideplus-start -->
## 🐎 Cobblemon Ride+ (v1.2.7b)

Cette extension de **LevelsFR** cible **Minecraft 1.21.1 / Cobblemon 1.8.1**, pour Fabric et NeoForge. Le dépôt contient **118 JSON d'ajout de montures**. Les données Ride+ sont présentées séparément des montures natives et des autres addons.

{% hint style="info" %}
« Aussi natif » signifie que l'espèce figure déjà parmi les montures natives. **Ne comptez pas deux fois cette espèce.** Des chevauchements avec Mega Showdown et Lost Lore sont également possibles. Les noms internationaux correspondent aux identifiants JSON.
{% endhint %}

{% hint style="warning" %}
Cette section documente les fichiers JSON, **pas des tests en jeu**. L'accès à un siège peut varier avec la forme, les points d'ancrage du modèle ou les priorités des datapacks. **Noadkoko d'Alola** utilise notamment un ancrage de tête ; **Oyacata** possède une configuration Ride+ distincte du natif.
{% endhint %}

Source : [Cobblemon Ride+ sur GitHub](https://github.com/LevelsFR/Cobblemon-Ride-Plus), branche `master`, version `1.2.7b` (accès au code potentiellement restreint).

<details>
<summary><strong>📖 Afficher les montures Ride+</strong></summary>

| Pokémon | Places | Terre | Eau | Air | Origine |
| --- | :---: | --- | --- | --- | --- |
| Absol | 1 | Standard | — | — | Ajout Ride+ |
| Aggron | 1 | Standard | — | — | Ajout Ride+ |
| Ampharos | 1 | Standard | — | — | Ajout Ride+ |
| Arbok | 1 | Standard | — | — | Ajout Ride+ |
| Armarouge | 1 | Standard | — | — | Ajout Ride+ |
| Aurorus | 1 | Standard | — | — | Ajout Ride+ |
| Basculegion | 1 | — | Dauphin | — | Ajout Ride+ |
| Beartic | 1 | Standard | — | — | Ajout Ride+ |
| Bewear | 1 | Standard | — | — | Ajout Ride+ |
| Breloom | 1 | Standard | — | — | Ajout Ride+ |
| Butterfree | 1 | — | — | Oiseau | Ajout Ride+ |
| Carracosta | 1 | Standard | Dauphin | — | Ajout Ride+ |
| Centiskorch | 1 | Standard | — | — | Ajout Ride+ |
| Ceruledge | 1 | Standard | — | — | Ajout Ride+ |
| Cetitan | 1 | Standard | — | — | Ajout Ride+ |
| Chesnaught | 1 | Standard | — | — | Ajout Ride+ |
| Clodsire | 1 | Standard | — | — | Ajout Ride+ |
| Cloyster | 1 | Standard | Sous-marin | — | Ajout Ride+ |
| Copperajah | 1 | Standard | — | — | Ajout Ride+ |
| Dialga | 1 | Standard | — | — | Ajout Ride+ |
| Dondozo | 1 | — | Dauphin | — | Ajout Ride+ |
| Donphan | 1 | Standard | — | — | Ajout Ride+ |
| Dracovish | 1 | Standard | Sous-marin | — | Ajout Ride+ |
| Dragalge | 1 | — | Dauphin | — | Ajout Ride+ |
| Drapion | 1 | Standard | — | — | Ajout Ride+ |
| Druddigon | 1 | Standard | — | — | Ajout Ride+ |
| Eelektross | 1 | — | Dauphin | — | Ajout Ride+ |
| Emboar | 1 | Standard | — | — | Ajout Ride+ |
| Empoleon | 1 | Standard | Dauphin | — | Ajout Ride+ |
| Enamorus | 1 | Standard | — | Oiseau | Ajout Ride+ |
| Exeggutor | 1 | Standard | — | — | Ajout Ride+ |
| Exploud | 1 | Standard | — | — | Ajout Ride+ |
| Feraligatr | 1 | Standard | Dauphin | — | Ajout Ride+ |
| Flamigo | 1 | Standard | — | Oiseau | Ajout Ride+ |
| Floatzel | 1 | — | Dauphin | — | Ajout Ride+ |
| Garganacl | 1 | Standard | — | — | Ajout Ride+ |
| Gengar | 1 | Standard | — | Stationnaire | Ajout Ride+ |
| Gliscor | 1 | Standard | — | Oiseau | Ajout Ride+ |
| Gorebyss | 1 | Standard | Dauphin | — | Ajout Ride+ |
| Gouging Fire | 1 | Standard | — | — | Ajout Ride+ |
| Hariyama | 1 | Standard | — | — | Ajout Ride+ |
| Haxorus | 1 | Standard | — | — | Ajout Ride+ |
| Hippowdon | 1 | Standard | — | — | Ajout Ride+ |
| Houndoom | 1 | Standard | — | — | Ajout Ride+ |
| Huntail | 1 | Standard | Dauphin | — | Ajout Ride+ |
| Hydrapple | 1 | Standard | — | — | Ajout Ride+ |
| Iron Leaves | 1 | Standard | — | — | Ajout Ride+ |
| Jellicent | 1 | — | Dauphin | — | Ajout Ride+ |
| Kingdra | 1 | — | Dauphin | — | Ajout Ride+ |
| Kingler | 1 | Standard | Sous-marin | — | Ajout Ride+ |
| Klawf | 1 | Standard | — | — | Ajout Ride+ |
| Kommo-o | 1 | Standard | — | — | Ajout Ride+ |
| Krookodile | 1 | Standard | — | — | Ajout Ride+ |
| Kyurem | 1 | Standard | — | — | Ajout Ride+ |
| Landorus | 1 | Standard | — | Oiseau | Ajout Ride+ |
| Lanturn | 1 | — | Dauphin | — | Ajout Ride+ |
| Ludicolo | 1 | Standard | Dauphin | — | Ajout Ride+ |
| Lunala | 1 | — | — | Oiseau | Ajout Ride+ |
<!-- cr-rideplus-list-next -->

</details>

<details>
<summary><strong>📊 Statistiques détaillées de Ride+</strong></summary>

| Pokémon | Milieu | Style | Accél. | Maniab. | Vit. | End. | Saut |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Absol | Terre | Standard | 75-85 | 60-80 | 50-70 | 35-55 | 20-40 |
| Aggron | Terre | Standard | 20-45 | 35-65 | 20-45 | 45-80 | 20-40 |
| Ampharos | Terre | Standard | 25-45 | 35-60 | 20-40 | 30-55 | 10-25 |
| Arbok | Terre | Standard | 65-80 | 0-30 | 25-45 | 35-55 | 0-5 |
| Armarouge | Terre | Standard | 40-65 | 50-80 | 35-55 | 35-60 | 20-35 |
| Aurorus | Terre | Standard | 30-55 | 25-45 | 20-40 | 50-80 | 15-30 |
| Basculegion | Eau | Dauphin | 40-65 | 35-60 | 45-75 | 30-65 | 25-45 |
| Beartic | Terre | Standard | 20-45 | 30-55 | 20-45 | 50-85 | 20-35 |
| Bewear | Terre | Standard | 40-65 | 25-45 | 35-55 | 55-85 | 20-30 |
| Breloom | Terre | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Butterfree | Air | Oiseau | 45-65 | 60-85 | 25-45 | 40-65 | 25-40 |
| Carracosta | Terre | Standard | 15-35 | 30-55 | 15-35 | 45-80 | 10-25 |
| Carracosta | Eau | Dauphin | 20-40 | 40-70 | 25-50 | 55-90 | 20-35 |
| Centiskorch | Terre | Standard | 35-60 | 35-60 | 35-65 | 50-85 | 20-35 |
| Ceruledge | Terre | Standard | 45-70 | 60-85 | 35-60 | 30-55 | 25-40 |
| Cetitan | Terre | Standard | 20-45 | 30-55 | 20-40 | 45-80 | 10-25 |
| Chesnaught | Terre | Standard | 30-55 | 35-60 | 25-45 | 55-85 | 20-35 |
| Clodsire | Terre | Standard | 10-25 | 20-40 | 5-20 | 60-90 | 0-10 |
| Cloyster | Terre | Standard | 30-50 | 10-35 | 30-65 | 15-35 | 15-30 |
| Cloyster | Eau | Sous-marin | 45-65 | 50-75 | 35-65 | 35-70 | 30-50 |
| Copperajah | Terre | Standard | 20-35 | 25-45 | 15-30 | 70-100 | 5-15 |
| Dialga | Terre | Standard | 20-45 | 35-65 | 20-45 | 45-80 | 20-40 |
| Dondozo | Eau | Dauphin | 15-35 | 25-45 | 25-50 | 75-100 | 10-25 |
| Donphan | Terre | Standard | 30-45 | 25-40 | 30-50 | 60-90 | 20-35 |
| Dracovish | Terre | Standard | 25-45 | 30-55 | 25-45 | 45-75 | 10-25 |
| Dracovish | Eau | Sous-marin | 35-60 | 40-70 | 40-65 | 50-85 | 30-55 |
| Dragalge | Eau | Dauphin | 35-60 | 40-65 | 30-55 | 45-75 | 20-40 |
| Drapion | Terre | Standard | 20-40 | 35-60 | 20-40 | 40-70 | 15-30 |
| Druddigon | Terre | Standard | 20-45 | 35-65 | 20-45 | 45-75 | 20-35 |
| Eelektross | Eau | Dauphin | 35-65 | 45-75 | 30-60 | 45-75 | 20-40 |
| Emboar | Terre | Standard | 25-45 | 35-60 | 25-45 | 45-80 | 20-35 |
| Empoleon | Terre | Standard | 15-35 | 30-55 | 15-35 | 30-60 | 15-30 |
| Empoleon | Eau | Dauphin | 30-60 | 45-75 | 30-60 | 40-80 | 25-45 |
| Enamorus | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Enamorus | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Exeggutor | Terre | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Exploud | Terre | Standard | 20-40 | 25-45 | 15-35 | 30-55 | 15-30 |
| Feraligatr | Terre | Standard | 30-55 | 25-45 | 30-50 | 45-70 | 25-40 |
| Feraligatr | Eau | Dauphin | 40-65 | 40-70 | 35-60 | 45-80 | 30-55 |
| Flamigo | Terre | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Flamigo | Air | Oiseau | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Floatzel | Eau | Dauphin | 40-70 | 45-75 | 35-65 | 35-65 | 25-45 |
| Garganacl | Terre | Standard | 10-25 | 30-55 | 10-30 | 55-85 | 10-20 |
| Gengar | Terre | Standard | 35-55 | 45-65 | 25-40 | 30-55 | 20-35 |
| Gengar | Air | Stationnaire | 25-45 | 55-80 | 20-35 | 30-60 | 25-45 |
| Gliscor | Air | Oiseau | 45-75 | 55-85 | 30-65 | 30-65 | 30-65 |
| Gliscor | Terre | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Gorebyss | Terre | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Gorebyss | Eau | Dauphin | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Gouging Fire | Terre | Standard | 20-45 | 35-65 | 20-45 | 45-80 | 20-40 |
| Hariyama | Terre | Standard | 15-35 | 30-55 | 15-35 | 45-80 | 10-25 |
| Haxorus | Terre | Standard | 30-55 | 35-65 | 30-55 | 45-80 | 25-45 |
| Hippowdon | Terre | Standard | 15-35 | 25-45 | 20-40 | 60-90 | 15-30 |
| Houndoom | Terre | Standard | 55-80 | 30-60 | 40-65 | 25-55 | 25-45 |
| Huntail | Terre | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Huntail | Eau | Dauphin | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Hydrapple | Terre | Standard | 25-45 | 35-60 | 25-50 | 50-80 | 20-35 |
| Iron Leaves | Terre | Standard | 55-80 | 45-70 | 55-85 | 35-60 | 25-45 |
| Jellicent | Eau | Dauphin | 25-50 | 35-65 | 25-50 | 45-80 | 20-35 |
| Kingdra | Eau | Dauphin | 45-70 | 45-75 | 40-70 | 35-70 | 20-40 |
| Kingler | Terre | Standard | 25-50 | 20-40 | 20-40 | 30-55 | 10-25 |
| Kingler | Eau | Sous-marin | 35-60 | 45-70 | 30-55 | 40-75 | 15-35 |
| Klawf | Terre | Standard | 20-35 | 35-55 | 20-40 | 45-75 | 10-25 |
| Kommo-o | Terre | Standard | 40-60 | 45-70 | 35-55 | 50-80 | 20-35 |
| Krookodile | Terre | Standard | 25-50 | 40-70 | 30-55 | 45-80 | 20-40 |
| Kyurem | Terre | Standard | 30-60 | 20-50 | 20-40 | 30-65 | 30-65 |
| Landorus | Air | Oiseau | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Landorus | Terre | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Lanturn | Eau | Dauphin | 35-60 | 45-75 | 30-55 | 40-80 | 25-45 |
| Ludicolo | Terre | Standard | 20-40 | 25-45 | 20-40 | 30-55 | 15-30 |
| Ludicolo | Eau | Dauphin | 30-55 | 40-70 | 30-55 | 35-65 | 20-35 |
| Lunala | Air | Oiseau | 45-75 | 55-85 | 30-80 | 70-100 | 30-65 |
<!-- cr-rideplus-stats-next -->

</details>

<!-- cr-rideplus-end -->

<!-- cr-addon-riding-end -->


{% hint style="info" %}
**Références de cette page ciblant 1.8.1 :**
- [Wiki officiel Cobblemon — Riding](https://wiki.cobblemon.com/index.php/Pok%C3%A9mon/Riding) : styles, places et plages de statistiques.
- [Changelog Cobblemon 1.8.0](https://wiki.cobblemon.com/index.php/1.8.0) : les dix nouvelles montures natives et les places conditionnelles.
- [Changelog Cobblemon 1.8.1](https://wiki.cobblemon.com/index.php/1.8.1) : correction du siège supplémentaire de Tortank.
- [Source des espèces Cobblemon 1.8.1](https://gitlab.com/cable-mc/cobblemon/-/tree/1.8.1/common/src/main/resources/data/cobblemon/species) : fichiers JSON versionnés à consulter pour vérifier les données de monture. Le contenu brut complet de cette archive n'a pas été audité ici.

Les versions ultérieures de Cobblemon ou des datapacks supplémentaires peuvent modifier ces données. Cette page est volontairement limitée à **Cobblemon 1.8.1**.
{% endhint %}

---

{% hint style="success" %}
## Nous contacter

<p align="center">
Si vous avez des questions, des suggestions ou des modifications à proposer, n'hésitez pas à nous rejoindre sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et à contacter directement <strong>@FabLeKebab</strong> sur le serveur pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.
</p>
{% endhint %}
