# Wiki Admin V8: GitHub OAuth migration

## État actuel

Cette branche implémente une **première étape fonctionnelle** de la V8, sans remplacer les anciennes routes. Le site public et les chemins Basic Auth existants restent inchangés. L'entrée Worker est remplacée sur cette branche seulement par `scripts/worker-entry-v8.mjs`, qui délègue tout ce qui n'est pas V8 au Worker V7.

La console V8 réutilise temporairement les panneaux et mutations existants via une passerelle compatible. Cela garantit la continuité des fonctionnalités, mais **la refonte complète des composants métier n'est pas terminée**. Le nouvel habillage visuel est volontairement non destructif.

## URL permanente

L'administration V8 utilise **`https://wiki.cobblemon-realms.com/osadmin`**. Les anciens chemins d'essai `/__cr-admin/v8` et `/admin` redirigent vers `/osadmin`. Les chemins historiques protégés restent inchangés pour la migration. Le routeur Cloudflare place `/osadmin`, `/osadmin/*` et les anciens chemins de redirection sous `run_worker_first`.

Les utilisateurs autorisés se connectent avec GitHub en un clic. **Ils ne saisissent aucun token, aucun secret OAuth et aucun mot de passe wiki**. Les secrets OAuth sont configurés **une seule fois** par l'administrateur du Worker et restent côté Cloudflare.

## Configuration Cloudflare

Créer une **GitHub OAuth App** (Settings > Developer settings > OAuth Apps) avec :
- Homepage URL : `https://wiki.cobblemon-realms.com/`
- Authorization callback URL : `https://wiki.cobblemon-realms.com/osadmin/oauth/callback`

Dans les variables / secrets du Worker :
- `CR_V8_GITHUB_CLIENT_ID` : ID public OAuth App
- `CR_V8_GITHUB_CLIENT_SECRET` : **secret** OAuth App
- `CR_V8_SESSION_SECRET` : **secret** aléatoire long (au moins 32 octets d'entropie)
- `CR_V8_GITHUB_OWNERS` : identifiants GitHub autorisés, séparés par des virgules, format recommandé `id:123456`
- `CR_V8_GITHUB_EDITORS` : identifiants GitHub pour les rôles éditoriaux (par exemple le compte GitHub de Fab), même format

Ne jamais committer ces valeurs. Laisser `CR_ADMIN_ACCOUNTS` et les anciens secrets en place pendant la migration.

**Compatibilité temporaire :** la passerelle utilise un compte Basic Auth existant correspondant au rôle GitHub autorisé. Elle n'envoie jamais ce mot de passe au navigateur. Un propriétaire GitHub requiert un compte legacy `owner`, un éditeur un compte `wiki`. Chaque collaborateur possède néanmoins sa **propre identité GitHub et sa propre session**, sans accès au mot de passe legacy. Pour l'autonomie des collaborateurs, le propriétaire autorise leur compte via la liste `CR_V8_GITHUB_EDITORS` avant la première connexion. Avec seulement `CR_ADMIN_USER` et `CR_ADMIN_PASSWORD`, seul le propriétaire peut utiliser la passerelle. Si cette correspondance n'existe pas, l'accès V8 est refusé.

## Sécurité

- Échange du code OAuth exclusivement côté Worker. Le jeton GitHub n'est pas conservé dans les cookies.
- Les utilisateurs sont rapprochés d'une liste d'autorisation explicite, **pas** d'une simple appartenance à un dépôt.
- Session signée HMAC-SHA256, cookie HttpOnly, Secure, SameSite=Strict, expiration à 8 h.
- State OAuth aléatoire dans un cookie HttpOnly, Secure, SameSite=Lax, durée de 10 minutes.
- Mutations POST protégées par vérification Origin et jeton CSRF. Les anciennes actions HTML et les actions JSON V4 sont prises en charge.
- Route V8 et API V8 à cache privé désactivé, robots désactivés, referrer-policy no-referrer.
- Aucune modification de données D1, ni migration de schéma.
- Le rôle `wiki` ne peut pas se transformer en `owner` : les contrôles de permissions existants reçoivent directement le rôle GitHub vérifié côté serveur, sans compte partagé.

**Limites connues :**
- La révocation côté GitHub d'un utilisateur déjà connecté prend effet au plus tard à l'expiration de la session, sauf rotation de `CR_V8_SESSION_SECRET`. La liste d'autorisation doit être revérifiée à chaque requête lors de la prochaine étape.
- Le rendu utilise encore les anciennes générations d'interface, scripts et routeurs. La suppression de Basic Auth et des chemins historiques nécessite une migration contrôlée ultérieure.
- Pas encore d'édition du contenu Markdown depuis la V8 : le contenu reste géré dans GitHub.

## Validation avant déploiement

1. Exécuter `npm run test:admin-v8`, `npm run build` et `npm run check:cloudflare`.
2. Configurer les secrets et tester la connexion avec un compte autorisé, puis non autorisé.
3. Vérifier les rôles et la distinction `owner` / `wiki`.
4. Tester lecture, retours, badges, métadonnées, review 30/60/90 jours, redirections et synonymes.
5. Vérifier la navigation FR/EN, les graphiques, les statistiques, les onglets V4/V5/V6 et la déconnexion.
6. Vérifier la protection CSRF des formulaires et des mutations JSON, avec un Origin incorrect et sans jeton.
7. Vérifier que les anciennes routes et le site public fonctionnent comme avant.
8. **Ne pas fusionner** tant que ces vérifications ne sont pas passées en environnement de préproduction.

## Retour arrière

Revenir au commit antérieur au changement d'entrée `wrangler.jsonc` (V7), sans toucher à D1 ni aux données du wiki. Conserver les secrets legacy pendant la période de validation.

## Diagnostic des refus OAuth

Depuis v8.2, une réponse de refus affiche l'identifiant public GitHub vérifié et le numéro de version du Worker. Les secrets OAuth, les valeurs d'allowlist et les tokens ne sont pas exposés. L'en-tête `x-cr-admin-version` permet de confirmer que le nouveau Worker est réellement servi, indépendamment de la version GitHub.

Si le refus indique `v8.2-oauth-diagnostics-20261122` et le login `Anxiolytiques`, contrôler la variable production `CR_V8_GITHUB_EDITORS` dans la version du Worker effectivement déployée. Si aucun numéro n'est visible, le Worker est ancien ou n'a pas été redéployé. Ne pas partager d'URL contenant `/oauth/callback?code=...` : le code OAuth est éphémère mais sensible.
