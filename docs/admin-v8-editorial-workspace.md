# Wiki Admin V8 : espace éditorial

## Objectif

Réorganiser l'administration autour du travail concret sur le wiki et des besoins des joueurs, sans supprimer les outils existants.

## Parcours recommandé

1. **Retours des joueurs** : lire, traiter et réouvrir des retours. Les statuts `open` et `read` sont dans la file à traiter. `resolved` est visible dans l'historique des résolutions. `archived` est conservé dans les archives.
2. **Articles à corriger** : consulter les alertes, ouvrir la page publique et décider si une modification est réellement nécessaire.
3. **Tous les articles** : trouver une page, ouvrir ses réglages de statut/badges ou le fichier Markdown sur GitHub.
4. **Recherches des joueurs** : comprendre les termes sans résultat, vérifier que la page existe et gérer les synonymes si nécessaire.
5. **Apparence des articles** : modifier les métadonnées visibles via D1, sans reconstruire le wiki.
6. **Outils avancés** : audit, taxonomie, traductions, suivi de publication, journaux, maintenance et sécurité restent accessibles dans un groupe repliable.

## Personnalisation

La boîte **Personnaliser** permet de choisir des favoris (jusqu'à 8), leur ordre, la page d'accueil et l'affichage simple ou complet. Les préférences utilisent `localStorage` et une clé distincte selon le compte GitHub authentifié. Elles sont donc propres au navigateur et **ne sont pas encore synchronisées entre appareils**. Elles n'accordent aucun droit supplémentaire.

## Modifier le contenu des articles

Le wiki public est construit à partir des fichiers Markdown du dépôt `LevelsFR/cobblemon-realms-wiki`. Le fichier `page-updates.json` contient le chemin source exact de chaque page. Le bouton **Modifier le texte** ouvre ce fichier sur GitHub. Il ne modifie jamais le contenu automatiquement. Une modification nécessite les permissions GitHub appropriées, ou une proposition de changement via fork/PR lorsque GitHub l'autorise.

Les statuts, badges, filtres, redirections et synonymes restent éditables dans l'administration. **Un éditeur Markdown intégré au wiki n'est pas implémenté**, faute de mécanisme d'écriture GitHub avec permissions et circuit de publication distincts de l'OAuth `read:user` actuel.

## Sécurité et compatibilité

- Aucun changement des rôles `owner` / `wiki`, de la session GitHub, du CSRF ou des anciennes routes Basic Auth.
- Aucune modification de données D1 existantes ni migration de schéma.
- Les menus ne sont pas une frontière de sécurité : seuls les liens aux rubriques effectivement autorisées sont affichés, et les API conservent leurs vérifications.
- Les changements de statut sont journalisés sous l'identité GitHub du membre qui les exécute.
- Les suppressions définitives demandent une confirmation dans l'interface V8, en complément des permissions serveur.
- L'administration historique ne reçoit pas les nouveaux éléments de personnalisation. La navigation, les formulaires et le site public sont conservés.

## Contrôles de publication

Exécuter `npm run check:cloudflare`, `npm run test:admin-v8`, `npm run test:admin-v8-theme`, `npm run test:admin-v8-editorial`, `npm run test:search-quality`, `npm run test:seo`.

Vérifier sur le Worker déployé :
- Connexion propriétaire `LevelsFR` et éditeur `Anxiolytiques`.
- Réponse à un retour : ouvert -> lu -> résolu -> réouvert -> archivé.
- Exactitude du compteur « Commentaires à traiter » et de l'historique.
- Navigation simple et avancée, liens directs et raccourcis, y compris sur mobile.
- Liens GitHub de correction des guides EN et FR.
- Navigation et permissions identiques après personnalisation et rechargement.
- Aucun changement visuel du wiki public.
