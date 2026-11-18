# Journal interne des modifications du wiki

> Document de maintenance réservé au dépôt GitHub, rédigé en français. Ce fichier se trouve dans `.github/`, dossier ignoré par la génération du site. Il ne doit pas être ajouté aux sommaires EN/FR ni à la navigation publique.

## Convention de suivi

- Conserver les dates au format **AAAA-MM-JJ** et l'ordre réel des modifications à l'intérieur de chaque date.
- Ajouter une entrée numérotée pour chaque changement significatif, avec les fichiers concernés, les sources et les éventuelles vérifications restantes.
- Ne jamais reconstituer artificiellement des modifications anciennes à partir de souvenirs. L'historique Git reste la référence pour les travaux antérieurs à ce journal.
- Toujours lire le fichier actuel et son SHA avant chaque nouvelle modification, puis mettre à jour ce journal dans le même travail.
- Distinguer une mécanique **confirmée dans le code source du mod** d'une fonctionnalité **vérifiée dans le modpack déployé**.

---

## 2026-11-18

### 01. Audit de l'organisation des rubriques
- Vérification des sommaires `SUMMARY.md` et `fr-FR/SUMMARY.md`, du guide Cobbreeding, des pages existantes sur les formes, du système de métadonnées et du fonctionnement de la génération statique.
- Décision : les changements de forme jouables doivent être distincts des **Pokémon exclusifs** et des **Cosmétiques Pokémon**.
- Constat : les guides de Motisma, des formes Totémiques et des fusions de Necrozma existaient déjà. Ils conservent leurs chemins pour préserver les anciens liens.

### 02. Création de la rubrique bilingue « Pokémon Forms / Formes Pokémon »
- Création de neuf pages en anglais sous `pokemon-forms/`.
- Création des neuf équivalents français sous `fr-FR/pokemon-forms/`.
- Contenu : index, Shaymin, Deoxys, Hoopa, fusions Kyurem/Sylveroy, Zygarde, objets des légendaires, formes liées au type, autres changements de forme.
- Organisation : introductions en encadré, étapes d'utilisation, tableaux, mises en garde sur la configuration du modpack, liens vers les sources et bloc de contact habituel.
- Source principale : [Cobblemon Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown), code Java et registres du dépôt officiel.
- Limite volontaire : les recettes ou moyens d'obtention propres au serveur ne sont pas affirmés sans validation de la version et des paramètres de Cobblemon Realms.

### 03. Réorganisation des deux sommaires
- Modification de `SUMMARY.md` et `fr-FR/SUMMARY.md`.
- Ajout d'une catégorie de premier niveau placée entre les Pokémon exclusifs et les cosmétiques.
- Déplacement des **entrées de navigation** Motisma, formes Totémiques et Necrozma, sans déplacement physique des anciens fichiers.

### 04. Correction des instructions de fusion de Necrozma
- Modification des deux pages `pokemons-exclusives/necrozma-fusions.md` (EN/FR).
- Remplacement des indications imprécises « cliquer Solgaleo/Lunala » par la procédure du code : stocker le partenaire dans le N-Solarizer ou N-Lunarizer puis utiliser l'objet chargé sur Necrozma.
- Suppression de l'instruction non étayée indiquant de cliquer sur Lunala avec l'Ultranécrozélite Z ; la procédure exacte d'Ultra-Necrozma reste à confirmer sur le modpack.
- Sources : `MegaShowdownItems.java`, `SoloFusion.java`.

### 05. Complément des formes Totémiques
- Modification des pages EN/FR sur les formes Totémiques.
- Précision du fonctionnement du Miroir Sacré, qui sélectionne un Pokémon de l'équipe.
- Ajout d'Amovénus, également pris en charge par le code officiel.
- Sources : `MegaShowdownItems.java`, `FormChangeInteractItemMSD.java`.

### 06. Métadonnées
- Actualisation de `page-meta.json` : date, nouvelles thématiques `form-changes` et `mega-showdown`, règle des pages `pokemon-forms/`.
- Les nouvelles pages sont classées « À vérifier » pour ne pas présenter une vérification du code *upstream* comme une validation du serveur Cobblemon Realms.

### 07. Points à valider après publication
- Construire le site et exécuter `npm run test:static-routing`.
- Vérifier le menu EN/FR, la navigation et les liens entre rubriques, les illustrations, les transformations en jeu et la disponibilité des objets en survie.
- Effectuer le déploiement Cloudflare habituel et contrôler la page `/pokemon-forms/` ainsi que `/fr-FR/pokemon-forms/`.

### 08. Vérification des références après les commits
- Contrôle statique de la navigation à partir de l'arborescence GitHub actuelle : **138 liens valides sur 138** dans chacun des deux sommaires.
- Contrôle des liens locaux des neuf nouvelles pages anglaises : **21 liens valides, aucun lien cassé**.
- Contrôle des liens locaux des neuf nouvelles pages françaises : **21 liens valides, aucun lien cassé**.
- Correction des chemins d'image des pages françaises Shaymin et Zygarde vers le dossier partagé `imgwiki/`.
- Vérifications non effectuées : compilation locale du site et tests en jeu, faute d'accès direct aux exécutables du modpack et à un clone du dépôt dans cet environnement. Ces points restent à réaliser après déploiement.
### 09. Audit de CobbleSafari 0.4.1 et des sources officielles
- Vérification de la version **0.4.1**, compatible Minecraft 1.21.1, auprès des publications officielles [Modrinth 0.4.0](https://modrinth.com/mod/cobblesafari/version/0.4.0) et [0.4.1](https://modrinth.com/mod/cobblesafari/version/0.4.1).
- Contrôle du [dépôt officiel CobbleSafari](https://github.com/maxigregrze/CobbleSafari) : `gradle.properties` indique `version=0.4.1`.
- Vérification de la présence de l'extension CobbleSafari 0.4.1 dans les notes de **Cobblemon Realms v6.3** sur CurseForge.
- Audit initial des 19 guides CobbleSafari anglais et français déjà présents. Objectif : ne pas supprimer les anciennes URL ni refaire le thème.

### 10. Création de douze nouveaux guides CobbleSafari en anglais puis en français
- **24 fichiers créés**, à raison de 12 pages par langue sous `mods-guides/CobbleSafari/` et `fr-FR/mods-guides/CobbleSafari/`.
- Nouvelles pages : `ultra_space.md`, `ultra_megalopolis.md`, `ultra_warp_ride.md`, `ultra_dimensions.md`, `hyperspace_lumiose.md`, `hyperspace_donuts.md`, `bell_tower.md`, `ultra_loot.md`, `dimensional_objectives.md`, `lost_items.md`, `portal_spawner.md`, `admin_configuration.md`.
- Détails vérifiés : passage en Ultra-Brèche, Ultra Warp Ride, objectifs pondérés, tour de Ho-Oh (11 étages et 155 blocs), Donuts, récompenses et nouveaux objets, sécurité des donjons et configuration.
- Les pages donnent des liens directs vers les fichiers de données et le code source, avec une distinction claire entre comportement **upstream** et réglages spécifiques du serveur.

### 11. Corrections des anciennes pages présentant des informations obsolètes
- Modifications EN/FR de `safari_dimension.md` : suppression de l'ancienne procédure `/safariexit`, remplacée par les drones de sortie.
- `hoopa_portals.md` : correction de la gestion des durées (l'instance survit à l'expiration du portail tant que des joueurs y sont présents), nouveaux donjons et générateur de portails.
- `fight_boss.md` : ajout de Ho-Oh et des paramètres CSBoss 0.4 ; l'ancienne affirmation « Giratina uniquement » a été remplacée.
- `cobblesafari_command.md` : correction de `dungeon list portal`, ajout de la distinction portails / instances, des timers par session, d'Onboarding et du reset forcé.
- Plusieurs passes de relecture et de correction ponctuelle ont été nécessaires pour supprimer les mentions historiques et conserver les autres informations.

### 12. Compléments des guides préexistants
- Actualisation bilingue de `reward_balloons.md` : plafond anti-accumulation de 3 ballons par défaut.
- `motismart.md` : animations, accessibilité, interdictions dimensionnelles et Data Monitor hanté.
- `fonct_online.md` : filtrage GTS et pools Wonder Trade liés aux addons déclarés via Onboarding.
- `blocs_utiles.md` : nouvelles familles de blocs, statues animées, sièges, générateurs et 21 échanges supplémentaires de l'ouvrier kalosien.
- `distortion_world.md` et `sinnoh_underground.md` : nouveaux objectifs de donjons, sessions et correctifs de récompenses.

### 13. Création des fiches détaillées des sept Ultra-Dimensions
- **14 fichiers supplémentaires**, dans `mods-guides/CobbleSafari/ultra-dimensions/` et leur équivalent `fr-FR/`.
- Une fiche EN/FR par destination : Ultra Crater, Deep, Desert, Forest, Jungle, Plant et Ruins.
- Pour chaque destination : identifiant, type, couleur, huit Pokémon ordinaires, pools spéciaux avec leurs poids relatifs, liens vers le fichier de destination et la table de butin.
- Les pourcentages ne sont pas présentés comme des taux globaux d'apparition. Les variations selon la configuration du serveur ou les addons sont signalées.
- Les fiches sont accessibles depuis `ultra_dimensions.md`, sans allonger inutilement le menu latéral.

### 14. Vérification des identifiants des équipements et des tables de butin
- Lecture des tables `data/cobblesafari/loot_table/ultraspace/`.
- Ajout des identifiants exacts dans `ultra_loot.md` EN/FR : projectiles, armures Ultra Recon / Glutton, graines, Nihilhat, bouclier, canons et autres objets.
- Vérification du fonctionnement de Nihilhat dans `NihilegoHatItem.java` et correction de la condition eau/pluie et des effets négatifs.
- Les tableaux ne promettent pas de butin garanti dans le modpack.

### 15. Intégration au wiki et à ses métadonnées
- Actualisation de `SUMMARY.md` et `fr-FR/SUMMARY.md`, en conservant tous les liens existants.
- Actualisation des deux pages d'index `cobblesafari.md` : liens vers les 12 nouveaux guides.
- Ajout d'un lien vers les guides dans les historiques publics `version-history.md` EN/FR, au niveau de la release 6.3.
- Métadonnées `page-meta.json` : regroupements spécifiques Ultra Space, Hyperspace, donjons et pages réservées aux administrateurs ; statut « À vérifier » lorsque le comportement du serveur n'a pas été testé.

### 16. Contrôles des liens et de la structure du contenu
- Sommaire EN : **150 liens sur 150 valides**.
- Sommaire FR : **150 liens sur 150 valides**.
- Index de CobbleSafari EN et FR : **31 liens sur 31 valides** pour chaque langue.
- Douze nouveaux guides EN : **33 liens locaux sur 33 valides** ; même résultat pour les douze guides FR.
- Sept fiches Ultra-Dimensions EN : **21 liens locaux sur 21 valides** ; même résultat pour les sept fiches FR.
- Vérification des encadrés et étapes des 12 nouvelles pages principales pour chaque langue : balisage équilibré.
- Vérification par rapport à l'arborescence GitHub, sans supposer qu'un déploiement a déjà eu lieu.

### 17. Points restant à tester
- Exécuter le build et `npm run test:static-routing` dans un environnement possédant le dépôt et Node.js. Ces commandes n'ont **pas** été exécutées localement durant cette intervention.
- Contrôler les pages après publication Cloudflare et sur mobile, la recherche, les images et les badges.
- Tester en jeu les portails, les limitations dimensionnelles, les objectifs, les objets et la disponibilité réelle des Ultra-Chimères selon les addons et réglages du serveur.
- Le wiki officiel dynamique de l'auteur n'a pas pu être lu intégralement ; les nouveautés ont été vérifiées à partir des publications Modrinth 0.4.0/0.4.1 et des données du dépôt source.



### 18. Relecture finale
- Vérification de la numérotation chronologique des 18 entrées du journal, du 18 novembre 2026.
- Nettoyage d'un séparateur Markdown en double dans le guide français des combats de boss (`fr-FR/mods-guides/CobbleSafari/fight_boss.md`).
- Aucun déploiement Cloudflare ni test en jeu n'est présenté comme réalisé.

### 19. CobbleSafari : retrait des parties administrateur du wiki public

**Décision éditoriale :** la documentation CobbleSafari du wiki Cobblemon Realms est destinée aux **joueurs**. Les procédures réservées aux opérateurs, au mode Créatif technique et aux créateurs de datapacks ne doivent pas apparaître dans ses guides publics.

- **Six pages supprimées** : `admin_configuration.md`, `portal_spawner.md` et `cobblesafari_command.md`, en anglais et en français, dans `mods-guides/CobbleSafari/` et `fr-FR/mods-guides/CobbleSafari/`.
- Menus et index nettoyés : `SUMMARY.md`, `fr-FR/SUMMARY.md`, `mods-guides/CobbleSafari/cobblesafari.md`, `fr-FR/mods-guides/CobbleSafari/cobblesafari.md`.
- `page-meta.json` : suppression des règles réservées aux commandes et outils d'administration CobbleSafari ; catégorisation de la page d'accueil recentrée sur le gameplay.
- **Guides existants allégés EN/FR** : Safari Dimension, Portails Hoopa, Ballons, PC de Base Secrète, Parfums/Encens, Œufs sauvages, Souterrain de Sinnoh, Monde Distorsion, Échanges, Motismart, Blocs utiles, Lost Items et Objectifs dimensionnels. Suppression des sections sur les fichiers de configuration, outils d'admin, flags Creative, modifications des instances, Onboarding et datapacks.
- **Guides 0.4 EN/FR recentrés sur le joueur** : Ultra Warp Ride, Ultra-Dimensions et fiches individuelles, Hyperspace Lumiose, Bell Tower, Ultra Loot, ainsi que les notices des récompenses. Les détails internes comme les identifiants de dimension, valeurs techniques de boss ou listes d'identifiants d'objets réservées au débogage ont été retirés.
- **Fonctions joueurs préservées** : obtenir et utiliser les objets, gérer les captures et les œufs, trouver les donjons, lire les récompenses, configurer ses propres statues et Teleport Pads avec le Tinkhammer, profiter des options locales d'accessibilité et sortir du Safari avec les drones.
- Correction de l'avertissement périmé concernant l'expiration du portail dans `fr-FR/mods-guides/CobbleSafari/distortion_world.md`.
- Correction d'un encadré GitBook orphelin, laissé après suppression de la partie datapacks dans `wild_eggs_incubators.md` EN et FR.

**Vérifications après modification :**
- Les six fichiers administrateur sont absents de l'arborescence actuelle.
- Sommaires EN et FR : **147/147 liens Markdown valides** pour chaque langue.
- Index CobbleSafari EN et FR : **28/28 liens Markdown valides** pour chaque langue.
- Les **70 pages Markdown CobbleSafari restantes** (35 par langue) ont été contrôlées pour les liens locaux, les références aux trois guides supprimés et l'équilibre des encadrés. Aucun lien local cassé ni renvoi aux pages supprimées n'a été relevé ; le seul déséquilibre d'encadré détecté dans les incubateurs a été corrigé.
- Ce contrôle est **statique sur GitHub**. Le build complet, le déploiement Cloudflare et les tests en jeu restent à exécuter.


---

## Historique précédent

Pour retrouver les modifications antérieures au 18 novembre 2026, consulter l'[historique des commits GitHub](https://github.com/LevelsFR/cobblemon-realms-wiki/commits/main/). Aucune entrée historique n'a été inventée.
