# 🧊 Fusions légendaires | Kyurem et Sylveroy

{% hint style="info" %}
<p align="center">Les objets de fusion de Mega Showdown permettent de <strong>stocker un Pokémon dans l'objet</strong> avant de le fusionner avec un autre. Ce ne sont pas des transformations classiques à l'aide d'un objet tenu.</p>
{% endhint %}


## 🧬 Fusions disponibles

| Pokémon principal | Partenaire à stocker | Objet | Résultat |
| --- | --- | --- | --- |
| Kyurem | Zekrom | `mega_showdown:dna_splicer` | Kyurem Noir |
| Kyurem | Reshiram | `mega_showdown:dna_splicer` | Kyurem Blanc |
| Sylveroy | Spectreval | `mega_showdown:reins_of_unity` | Sylveroy Cavalier d'Effroi |
| Sylveroy | Blizzeval | `mega_showdown:reins_of_unity` | Sylveroy Cavalier du Froid |

## 🎮 Étapes de fusion

{% stepper %}
{% step %}
### 1. Faites sortir le partenaire
Invoquez **Zekrom/Reshiram** ou **Spectreval/Blizzeval** suivant la forme souhaitée.
{% endstep %}
{% step %}
### 2. Chargez l'objet
Tenez l'objet de fusion et utilisez-le en visant le partenaire. Celui-ci est conservé **dans l'objet**, il n'est pas perdu.
{% endstep %}
{% step %}
### 3. Faites sortir le Pokémon principal
Utilisez l'objet chargé en visant **Kyurem** ou **Sylveroy**. La forme fusionnée correspondante est appliquée.
{% endstep %}
{% step %}
### 4. Séparez les Pokémon
Utilisez de nouveau le même objet sur le Pokémon fusionné pour annuler la fusion et récupérer son partenaire dans l'équipe.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
Les Pokémon doivent appartenir au joueur. Le code refuse notamment les Pokémon en combat, déjà en changement de forme ou attachés à un autre système. Évitez de jeter ou de détruire un objet de fusion contenant un Pokémon.
{% endhint %}

## ☀️ Necrozma

Necrozma suit une procédure en deux étapes similaire, mais utilise une autre implémentation : le **N-Solarizer** stocke Solgaleo pour obtenir la Crinière du Couchant ; le **N-Lunarizer** stocke Lunala pour obtenir les Ailes de l'Aube. Consultez [les fusions de Necrozma](../pokemons-exclusives/necrozma-fusions.md).


{% hint style="warning" %}
**Note pour le modpack :** ces mécaniques proviennent du code source de Mega Showdown. L'obtention des objets, les recettes et les fonctionnalités actives peuvent varier selon la version installée dans Cobblemon Realms et la configuration du serveur. La présence d'un objet dans le code ne garantit pas son obtention en survie.
{% endhint %}


## 📖 Sources
[Code source Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/MegaShowdownItems.java), [Code source Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/fusion/DuFusion.java) et [Code source Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/fusion/SoloFusion.java).

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">Vous avez une question, une suggestion ou une correction à proposer ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.</p>
{% endhint %}
