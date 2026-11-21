# Journal des mises à jour du wiki Cobblemon Realms

> **Historique de maintenance réservé au dépôt GitHub.** Ce document décrit les évolutions du **wiki**, et non les versions du modpack Cobblemon Realms. Il est public pour toute personne consultant ce dépôt, mais volontairement **exclu du site généré, de la recherche, de la navigation et du sitemap**. Pour les versions du modpack, consulter l'[historique officiel](https://wiki.cobblemon-realms.com/fr-FR/version-history).

## 21 novembre 2026

### Explorateur des apparitions fondé sur les fichiers JSON du datapack

- Remplacement du premier index issu du changelog par **149 définitions JSON réelles d'apparitions naturelles** du datapack **Cobblemon Biome Expanded Spawns v6.4.1**, avec une révision source précisément identifiée.
- Ajout de filtres par Pokémon, rareté, biome et apparitions nocturnes ; affichage des identifiants de biome, plages de niveaux, poids relatifs, restrictions de luminosité et liens vers les JSON sources.
- Exclusion des **24 fichiers de spawns optionnels** associés à d'autres mods, notamment les données de compatibilité Terralith.
- Distinction explicite entre la version **v6.4.1 du datapack** et la dernière version publique du modpack vérifiée (**v6.3**).
- Renforcement des tests des données, de génération et de référencement.

Source : [PR #42](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/42).

### Accueil des joueurs, guides et nettoyage des biomes

- Publication d'une checklist interactive **Bien démarrer** en français et en anglais. La progression est enregistrée uniquement dans le navigateur du visiteur.
- Première version de l'explorateur des apparitions et remplacement des anciennes pages de guides de mods inachevées par un véritable index bilingue.
- Suppression des références obsolètes aux biomes Terralith dans les tableaux de générations et de Legendary Monuments, en FR et EN.
- Conservation des références techniques aux tags natifs lorsqu'elles concernent une **compatibilité optionnelle**, accompagnées d'une explication.
- Publication d'un guide bilingue de préparation au **retrait annoncé de Create en v6.4**, sans présenter ce changement comme déjà effectif en **Full v6.3**.
- Mise à jour du badge de version du site à partir d'un fichier central contenant la dernière version vérifiée.

Source : [PR #41](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/41).

### Informations légales et contrôles de confidentialité

- Publication des mentions légales, de la politique de confidentialité, de la politique de cookies et des conditions d'utilisation du wiki, dans les deux langues.
- Ajout d'un footer juridique et des précisions d'indépendance vis-à-vis des marques Minecraft et Pokémon.
- Ajout d'un contrôle de désactivation des statistiques internes.
- Ajout d'un contact dont l'adresse e-mail est révélée après une action explicite du visiteur. **Ce mécanisme ne garantit pas l'impossibilité de retrouver l'adresse dans le JavaScript public.**
- Ajout de tests pour les pages juridiques, les langues et la page 404.

Source : [PR #40](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/40).

## 20 novembre 2026

### Référencement et contenu des guides

- Amélioration des descriptions de pages, URL canoniques, métadonnées Open Graph, aperçus sociaux et liens alternatifs FR/EN `hreflang`.
- Exclusion des traductions inexistantes des groupes linguistiques et ajout de `noindex` sur la page 404.
- Enrichissement de la navigation des quêtes et des guides des mondes et dimensions.
- Actualisation de la documentation **Biome Expanded Spawns v6.4.1**, des tags de biomes et des indications historiques sur les identifiants de spawn.

Sources : [PR #38](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/38), [mise à jour des tags de biome](https://github.com/LevelsFR/cobblemon-realms-wiki/commit/2228c0a492), [clarification des identifiants](https://github.com/LevelsFR/cobblemon-realms-wiki/commit/9ed272ee9e).

### Documentation de confidentialité OurStoryBot

- Clarification des règles publiques d'OurStoryBot concernant les logs Minecraft, les fichiers texte, les liens de partage, leur suppression et les limites de conservation.

Source : [PR #37](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/37).

## 18 novembre 2026

### Performances et routage Cloudflare

- Passage à un service **prioritairement statique** des pages, CSS, JS et images. Le Worker est réservé aux API, à l'administration et à certaines métadonnées ; les redirections D1 et la page 404 personnalisée sont conservées.
- Réduction des interrogations du statut du serveur Minecraft, amélioration du cache et de la temporisation après erreur, afin de ne pas confondre une panne de l'API externe avec un serveur hors ligne.
- Création ou extension des tests de routage Cloudflare et de statut serveur.
- Nettoyage de plusieurs explications CobbleSafari destinées aux joueurs francophones.

Sources : [PR #35](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/35), [PR #36](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/36).

## 14 novembre 2026

### Pages juridiques OurStoryBot

- Publication des conditions d'utilisation et de la politique de confidentialité **OurStoryBot**, en anglais et en français, distinctes des informations légales propres au wiki.

Source : [PR #34](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/34).

## 13 octobre 2026

### Documentation Gym World Tour

- Révision des guides de difficulté FR/EN à partir des configurations de dresseurs v6.2.1 : IV, EV, tailles des équipes et préparation des combats.

Source : [PR #33](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/33).

## 6 août 2026

### Fondations du site wiki

- Mise en place du générateur de pages HTML depuis les fichiers Markdown, des navigations bilingues `SUMMARY.md`, du rendu des composants GitBook et d'une interface responsive.
- Préparation du premier hébergement indépendant du wiki.

Source : [PR #32](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/32).

---

## Règles de maintenance

- Actualiser **les deux fichiers** `CHANGELOG.md` et `CHANGELOG_FR.md` lors de chaque modification significative du wiki, des plus récentes aux plus anciennes.
- Indiquer les changements réels, leur date, la PR ou le commit de référence et les réserves nécessaires. Ne pas inventer de versions ni affirmer qu'un déploiement a réussi sans le vérifier.
- Ne jamais consigner de mots de passe, d'informations de contact privées, d'adresses personnelles, d'URL d'administration secrètes, d'IP directes de serveurs ou de données inédites provenant d'un dépôt privé.
- Ces fichiers restent **consultables uniquement via GitHub** et ne doivent pas être intégrés au `SUMMARY.md`, au site généré, à la recherche ou au sitemap.
