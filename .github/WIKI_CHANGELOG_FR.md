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

### 08. Vérification des références après les commits
- Contrôle statique de la navigation à partir de l'arborescence GitHub actuelle : **138 liens valides sur 138** dans chacun des deux sommaires.
- Contrôle des liens locaux des neuf nouvelles pages anglaises : **21 liens valides, aucun lien cassé**.
- Contrôle des liens locaux des neuf nouvelles pages françaises : **21 liens valides, aucun lien cassé**.
- Correction des chemins d'image des pages françaises Shaymin et Zygarde vers le dossier partagé `imgwiki/`.
- Vérifications non effectuées : compilation locale du site et tests en jeu, faute d'accès direct aux exécutables du modpack et à un clone du dépôt dans cet environnement. Ces points restent à réaliser après déploiement.

### 07. Points à valider après publication
- Construire le site et exécuter `npm run test:static-routing`.
- Vérifier le menu EN/FR, la navigation et les liens entre rubriques, les illustrations, les transformations en jeu et la disponibilité des objets en survie.
- Effectuer le déploiement Cloudflare habituel et contrôler la page `/pokemon-forms/` ainsi que `/fr-FR/pokemon-forms/`.

---

## Historique précédent

Pour retrouver les modifications antérieures au 18 novembre 2026, consulter l'[historique des commits GitHub](https://github.com/LevelsFR/cobblemon-realms-wiki/commits/main/). Aucune entrée historique n'a été inventée.
