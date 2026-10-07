# 🐎 Système de montures — Cobblemon 1.8.1

{% hint style="info" %}
<p align="center">
Ce guide décrit <strong>uniquement les montures natives de Cobblemon 1.8.1</strong>, pour Minecraft 1.21.1. Les espèces, styles, places et plages de statistiques ci-dessous sont établis d'après le <strong>wiki officiel de Cobblemon</strong> et les données d'espèces de la version 1.8.1.
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

{% hint style="info" %}
**Sources utilisées pour cette version 1.8.1 :**
- [Wiki officiel Cobblemon — Riding](https://wiki.cobblemon.com/index.php/Pok%C3%A9mon/Riding) : styles, places et plages de statistiques.
- [Changelog Cobblemon 1.8.0](https://wiki.cobblemon.com/index.php/1.8.0) : les dix nouvelles montures natives et les places conditionnelles.
- [Changelog Cobblemon 1.8.1](https://wiki.cobblemon.com/index.php/1.8.1) : correction du siège supplémentaire de Tortank.
- [Source des espèces Cobblemon 1.8.1](https://gitlab.com/cable-mc/cobblemon/-/tree/1.8.1/common/src/main/resources/data/cobblemon/species) : déclarations versionnées `riding.behaviours`, `stats` et `seats`.

Les versions ultérieures de Cobblemon ou des datapacks supplémentaires peuvent modifier ces données. Cette page est volontairement limitée à **Cobblemon 1.8.1**.
{% endhint %}

---

{% hint style="success" %}
## Nous contacter

<p align="center">
Si vous avez des questions, des suggestions ou des modifications à proposer, n'hésitez pas à nous rejoindre sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et à contacter directement <strong>@FabLeKebab</strong> sur le serveur pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.
</p>
{% endhint %}
