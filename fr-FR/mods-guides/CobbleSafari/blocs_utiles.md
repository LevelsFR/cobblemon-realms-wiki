# 💡 Blocs utiles

Tous les blocs ajoutés par **CobbleSafari** ne sont pas uniquement décoratifs. Certains permettent de **se téléporter, ralentissent les déplacements, projettent les créatures dans les airs ou déclenchent des pièges** lorsqu'ils sont activés !

{% hint style="info" %}
<p align="center">
Certains blocs disposant de leur propre page ne sont pas détaillés ici : le <strong>Pad de Téléportation</strong>, l'<strong>Incubateur à Œufs et le Nid à Œufs sauvages</strong>, le <strong>PC de Base Secrète</strong> ainsi que le <strong>Motismart</strong>, ses Téléphones vides et ses PC de fonctionnalités en ligne.
</p>
{% endhint %}

***

## 🚪 Pad de Téléportation

Le **Pad de Téléportation** permet de relier deux plateformes entre elles afin de se téléporter instantanément de l'une à l'autre. Placez-vous sur un pad lié, puis **appuyez sur la touche de saut** pour rejoindre automatiquement son partenaire.

### 🛠️ Obtention

La version disponible en mode Survie peut être fabriquée puis configurée à l'aide d'un **Forgelimarteau**.

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/pad_teleport.png" width="300" >
  <figcaption style="text-align: center;">Recette de fabrication du Pad de Téléportation</figcaption>
</figure>

### 🔗 Association des pads

Les Pads de Téléportation fonctionnent **par paires** et recherchent automatiquement leur partenaire. Placez deux pads correctement orientés et le jeu recherchera un pad compatible dans la direction indiquée, jusqu'à **100 blocs de distance**.

Chaque pad possède **trois modes**, qui déterminent la position recherchée pour son partenaire :

| Mode | Position du partenaire |
| --- | --- |
| **Haut** | Au-dessus du pad, formant un L avec celui-ci. |
| **Bas** | En dessous du pad, en miroir du mode Haut. |
| **Avant** | Directement devant le pad, avec une légère tolérance latérale. |

L'association respecte quelques règles simples :

- **Haut** s'associe avec **Bas**, et **Avant** avec **Avant**.
- Le chemin entre les deux pads doit rester **entièrement dégagé**.
- La recherche s'arrête au **premier pad rencontré**. S'il est déjà associé, aucun autre pad ne sera recherché au-delà.
- La connexion est enregistrée **relativement à l'orientation des pads**, ce qui permet de déplacer ou de faire pivoter une structure sans perdre ses associations.

Une fois les deux pads associés, leur **animation d'activation** devient visible.

### ⚙️ Utilisation et configuration

Pour vous téléporter, tenez-vous sur un pad associé puis **appuyez sur la touche de saut ou d'accroupissement**. Un son de portail confirme que la téléportation a réussi. En cas d'échec, un son similaire à celui de la lave entrant en contact avec de l'eau est joué.

Le **Forgelimarteau** permet de modifier et de configurer les pads :

- **Clic droit** → change le mode du pad et relance automatiquement la recherche d'un partenaire.
- **Clic droit en étant accroupi** → ouvre l'interface de configuration avancée.

L'interface permet de sélectionner le **mode du pad**, de définir manuellement les coordonnées **X / Y / Z**, de vérifier une destination, de lancer une détection automatique et de modifier la **couleur du pad** à l'aide d'une valeur hexadécimale.

***

## 🔨 Forgelimarteau

Le **Forgelimarteau** n'est pas un bloc, mais il constitue un outil essentiel pour configurer plusieurs des blocs présentés sur cette page.

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/forgelimarteau.png" width="300" >
  <figcaption style="text-align: center;">Recette de fabrication du Forgelimarteau</figcaption>
</figure>

Sa durabilité est comparable à celle d'une **hache en diamant** et il peut être réparé sur une enclume à l'aide de **Forgeliroue**. En mode Survie, il sert notamment d'équivalent aux possibilités de configuration normalement réservées au mode Créatif : il permet de configurer les **Pads de Téléportation** et de réinitialiser certains blocs colorés.

Les **Forgeliroues** s'obtiennent à partir des **Blocs de Déchets Compactés** présents dans le biome Acier de la Dimension Safari.

***

## 🗿 Statue Pokémon

La **Statue Pokémon** est un socle de deux blocs de hauteur permettant d'afficher **n'importe quel Pokémon du jeu** dans la pose de votre choix. Son apparence est entièrement configurable après sa fabrication : une seule statue peut ainsi représenter toutes les espèces, différentes finitions et les animations disponibles pour chaque Pokémon.

### 🛠️ Obtention

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/statue_pokemon.png" width="300" >
  <figcaption style="text-align: center;">Recette de fabrication d'une Statue Pokémon</figcaption>
</figure>

Le **Bloc de Forgeliroue** utilisé au centre de la recette correspond à **9 Forgeliroues**. Ces dernières s'obtiennent à partir des **Blocs de Déchets Compactés** du biome Acier de la Dimension Safari, au même endroit que les matériaux nécessaires à la fabrication du **Forgelimarteau**.

### 📍 Placement

Placez la partie inférieure de la statue sur un bloc solide disposant d'un espace libre au-dessus. La statue s'oriente alors automatiquement vers vous. Ces vérifications ne sont effectuées **qu'au moment du placement** : si vous retirez ensuite le bloc situé sous la statue, celle-ci restera en place, même dans les airs.

La statue possède une résistance comparable à celle d'une **enclume** et nécessite au minimum une **pioche en pierre** pour être récupérée. Elle ne peut pas être déplacée par des pistons, mais peut être détruite par des explosions. Détruire **l'une ou l'autre des deux parties** détruit l'intégralité de la statue et fait tomber une nouvelle statue vierge, sans conserver les paramètres précédemment configurés.

### ⚙️ Configuration

**Faites un clic droit** sur l'une des deux parties avec un <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/items/forgeliroue_update.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/items/forgeliroue_update.png" title="Forgeliroue" width="32"></a> pour ouvrir l'interface de configuration. Le bouton **Confirmer** enregistre les modifications, **Réinitialiser** restaure les paramètres par défaut et la touche **Échap** permet de quitter sans enregistrer les changements.

| Paramètre | Fonction |
| --- | --- |
| **Espèce** | Détermine le Pokémon affiché. Les arguments de forme fonctionnent comme dans le champ de recherche de la GTS : `Brindibou Hisui` ou `Pikachu shiny=true`, par exemple. Si le champ est vide ou contient un Pokémon inexistant, un modèle gris générique est affiché. |
| **Type de statue** | Détermine la finition de la statue. Seul le mode **Hologramme** modifie également l'apparence du socle. |
| **Animation** | Détermine l'animation du Pokémon à figer. La liste dépend directement de l'espèce sélectionnée. |
| **Progression** | Détermine le moment précis de l'animation auquel la statue est figée. `0` correspond au début et `1` à la dernière image. Les boutons `‹` et `›` modifient la valeur de `0,01`, tandis que `«` et `»` la modifient de `0,10`. |
| **Taille** | Définit la taille du Pokémon, de `0,01` à `3`. Une valeur de **1** permet d'adapter le Pokémon afin qu'il occupe exactement un bloc, quelle que soit son espèce. |
| **Couleur** | Permet d'appliquer une teinte hexadécimale à la plaque décorative du socle ou à l'hologramme. Laisser le champ vide conserve l'apparence par défaut du socle ou utilise un hologramme vert. |

### 🎨 Finitions

| Type de statue | Apparence du Pokémon |
| --- | --- |
| **Pierre** | Gris, sans teinte particulière. |
| **Or** | Monochrome, avec une teinte dorée. |
| **Diamant** | Monochrome, avec une teinte turquoise. |
| **Hologramme** | Monochrome, teinté, **transparent et lumineux**. |
| **Peinte** | Conserve les couleurs du Pokémon, mais sans textures émissives. |

Le paramètre **Couleur** permet également de teinter le socle. Avec une statue Hologramme, l'ensemble du socle adopte sa version holographique et utilise une couleur verte par défaut si aucune couleur n'est renseignée.

### 🔒 Verrouiller une statue

Faites un **clic droit avec un rayon de miel** sur une statue pour la cirer, exactement comme avec un panneau. Une statue cirée ne peut alors plus être modifiée par les joueurs. Pour retirer la cire, utilisez **une hache quelconque**, à l'exception du Forgelimarteau. Si vous utilisez **Jade** ou **WTHIT**, pointez votre curseur sur l'une des deux parties de la statue pour afficher le Pokémon représenté et savoir si la statue est cirée.

***

## 🌪️ Tourbillon

Le **Tourbillon** est une petite tornade qui apparaît au sol et peut sembler inoffensive au premier regard. Toute créature vivante qui entre en contact avec lui est **projetée dans les airs** : joueurs, Pokémon sauvages, créatures hostiles, etc. Son effet fonctionne de manière similaire à une charge de vent et propulse directement la cible vers le haut. Ils apparaissent naturellement dans le **biome Vol** de la Dimension Safari, où ils peuvent être suffisamment nombreux pour permettre d'enchaîner plusieurs projections.

***

## 🟤 Amas de Boue et Amas de Bouillasse

Les **Amas de Boue** et les **Amas de Bouillasse** sont deux petits amas présents au sol qui ralentissent les créatures les traversant, de manière similaire aux toiles d'araignée. Les **Amas de Bouillasse** possèdent cependant un effet supplémentaire : toute créature vivante qui le touche est **empoisonnée pendant 2 secondes**.

Les deux blocs peuvent apparaître naturellement : les **Amas de Boue** dans le **biome Sol** et les **Amas de Bouillasse** dans le **biome Poison**. Ils peuvent également être fabriqués à l'aide des recettes suivantes :

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/amas_de_boue.png" width="300" >
  <figcaption style="text-align: center;">Recette de fabrication de l'Amas de Boue</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/amas_de_bouillasse.png" >
  <figcaption style="text-align: center;">Recette de fabrication de l'Amas de Bouillasse</figcaption>
</figure>

La recette de l'Amas de Bouillasse est **sans forme** : elle nécessite 4 Amas de Boue et 1 Boue Noire et produit 4 Amas de Bouillasse.

***

## 🌋 Cratères et Geysers

Les **Cratères et Geysers** sont trois dangers environnementaux fonctionnant sur le même principe. Chacun apparaît dans un biome spécifique, reste intégré au sol et se déclenche lorsqu'une créature **marche dessus**. Après activation, une courte période de délai précède l'éruption, puis le bloc entre en temps de recharge avant de pouvoir être déclenché à nouveau.

| Bloc | Biome | Effet |
| :---: | :---: | :---: |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/volcanic_crater.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/volcanic_crater.png" title="Cratère Volcanique" width="48"></a> | Feu | Projette une gerbe de flammes depuis le sol. |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/hot_geyser.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/hot_geyser.png" title="Geyser Chaud" width="48"></a> | Eau | Projette une colonne d'eau brûlante. |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/draconic_crater.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/draconic_crater.png" title="Cratère Draconique" width="48"></a> | Dragon | Fait tomber une Météore Draco sur la créature ayant déclenché le cratère. |

Le **délai entre l'activation et l'éruption** vous laisse quelques instants pour vous éloigner. Continuez à avancer après avoir déclenché le bloc afin d'être hors de portée lorsque l'éruption se produit.

Les trois blocs utilisent le même principe de fabrication : **8 blocs associés au thème du biome autour d'un Bloc de Magma**.

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/cratere_volcanique.png" >
  <figcaption style="text-align: center;">Recette de fabrication du Cratère Volcanique</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/geyser_chaud.png" width="300" >
  <figcaption style="text-align: center;">Recette de fabrication du Geyser Chaud</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/cratere_draconique.png" >
  <figcaption style="text-align: center;">Recette de fabrication du Cratère Draconique</figcaption>
</figure>

***

## 🪤 Pièges

Les **Pièges** sont disponibles en **10 variantes**, chacune existant en version **Normale** et **Renforcée**, soit **20 blocs différents** au total. Ils se déclenchent lorsqu'une créature vivante marche dessus.

### 🛒 Obtention

Les Pièges peuvent être **achetés auprès d'un marchand spécialisé** : une variante du Montagnard disponible dans les [Souterrains de Sinnoh](sinnoh_underground.md). Consultez la [Liste des échanges des marchands](traders_trade_list.md) pour connaître leurs prix. Ils peuvent également apparaître naturellement dans le **biome Ténèbres** de la Dimension Safari. Soyez donc particulièrement prudent lorsque vous explorez cette zone.

### 👁️ Visibilité

Un Piège placé est **invisible par défaut**. Il devient visible uniquement lorsque vous êtes **accroupi**, que vous **tenez un piège en main** ou que vous êtes en **mode Créatif**. Son contour reste toutefois visible lorsque vous regardez directement l'emplacement où il se trouve, ce qui permet à un joueur attentif de le repérer.

Les pièges peuvent être détruits rapidement à la main et sont **instantanément récupérés avec des cisailles**. Ils lâchent toujours leur propre bloc lorsqu'ils sont détruits, sauf s'ils sont détruits par une explosion.

### ⚠️ Effets des pièges

| Piège | Normal | Renforcé |
| --- | --- | --- |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_obscurite.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_obscurite.png" title="Piège d'Obscurité" width="48"></a> | Obscurité pendant 10 s | Cécité pendant 20 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_explosion.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_explosion.png" title="Piège d'Explosif" width="48"></a> | Explosion causant de faibles dégâts sans détruire les blocs | Explosion capable de détruire les blocs fragiles et infligeant de vrais dégâts |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_flatulent.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_flatulent.png" title="Piège Flatulent" width="48"></a> | Comme l'Explosion, avec un effet sonore | Comme l'Explosion renforcée, avec un effet sonore plus important |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_feu.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_feu.png" title="Piège de Feu" width="48"></a> | Met le joueur en feu pendant 2 s | Inflige un feu plus puissant pendant 5 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_gravite.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_gravite.png" title="Piège de Gravité" width="48"></a> | Lévitation pendant 3 s | Lévitation pendant 10 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_poussee.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_poussee.png" title="Piège de Poussée" width="48"></a> | Déplace la cible d'1 bloc vers l'avant | Déplace la cible de 3 blocs vers l'avant |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_roche.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_roche.png" title="Piège de Roche" width="48"></a> | Fait tomber une Météore Draco à proximité | Fait tomber directement une Météore Draco sur la cible |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_ralentissement.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_ralentissement.png" title="Piège de Ralentissement" width="48"></a> | Lenteur I pendant 10 s | Lenteur IV pendant 10 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_teleportation.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_teleportation.png" title="Piège de Téléportation" width="48"></a> | Téléportation aléatoire jusqu'à 8 blocs | Téléportation aléatoire jusqu'à 32 blocs |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_vent.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_vent.png" title="Piège de Vent" width="48"></a> | Projection similaire à une charge de vent | Projection similaire à une charge de vent plus puissante |

{% hint style="warning" %}
<p align="center">
Les pièges <strong>Explosion</strong> et <strong>Flatulent</strong> peuvent également être déclenchés par un projectile. C'est la seule manière de les activer à distance, que ce soit pour les désamorcer sans s'en approcher ou pour les déclencher volontairement sous les pieds d'une autre créature.
</p>
{% endhint %}

{% hint style="warning" %}
<p align="center">
Tous les pièges peuvent être <strong>orientés dans différentes directions</strong>, même si seul le piège de <strong>Déplacement</strong> utilise réellement leur orientation pour déterminer la direction dans laquelle la cible sera déplacée.
</p>
{% endhint %}

***

{% hint style="success" %}
## Nous contacter

<p align="center">
Si vous avez des questions, des suggestions ou des modifications à proposer, n'hésitez pas à nous rejoindre sur <a href="https://discord.gg/kb8NSTF45n">Discord</a> et à contacter directement <strong>@FabLeKebab</strong> sur le serveur pour tout ce qui concerne le wiki, ou <strong>@Levels</strong> pour tout ce qui concerne le modpack.
</p>
{% endhint %}
