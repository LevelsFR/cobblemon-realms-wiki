# 🌸 Shaymin | Formes Terrestre et Céleste

{% hint style="info" %}
<p align="center">La <strong>Gracidée</strong> de Mega Showdown permet à Shaymin de passer de sa forme Terrestre à sa forme Céleste selon l'heure de Minecraft.</p>
{% endhint %}


![Shaymin](../../imgwiki/Myth_Legends/gen_4/shaymin.png)

## 🔄 Comment changer sa forme ?

{% stepper %}
{% step %}
### 🌸 Trouver une Gracidée
L'objet de Mega Showdown est `mega_showdown:gracidea_flower`. Vérifiez sa disponibilité dans votre version du modpack avant de chercher à l'obtenir en survie.
{% endstep %}
{% step %}
### ☀️ Utiliser la fleur de jour
Tenez la fleur en main, utilisez-la et sélectionnez Shaymin dans votre équipe. Si Shaymin n'est pas déjà sous sa forme Céleste, il se transforme.
{% endstep %}
{% step %}
### 🌙 Revenir à la forme Terrestre
Utilisez à nouveau la fleur sur Shaymin Céleste pendant la nuit.
{% endstep %}
{% endstepper %}

| Moment | Forme actuelle | Résultat |
| --- | --- | --- |
| Jour | Terrestre | Céleste |
| Jour | Céleste | Aucun changement |
| Nuit | Céleste | Terrestre |
| Nuit | Terrestre | Aucun changement |

{% hint style="info" %}
Le code distingue le jour de la nuit selon le temps du jeu modulo 24 000 : une valeur inférieure à 12 000 correspond au jour. Dans cette méthode, aucune condition de météo n'est vérifiée.
{% endhint %}


{% hint style="warning" %}
**Note pour le modpack :** ces mécaniques proviennent du code source de Mega Showdown. L'obtention des objets, les recettes et les fonctionnalités actives peuvent varier selon la version installée dans Cobblemon Realms et la configuration du serveur. La présence d'un objet dans le code ne garantit pas son obtention en survie.
{% endhint %}


## 📖 Sources
[Code source Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/form_change/Gracedia.java). L'objet est enregistré dans [Code source Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/block/MegaShowdownBlocks.java).

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">Vous avez une question, une suggestion ou une correction à proposer ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.</p>
{% endhint %}
