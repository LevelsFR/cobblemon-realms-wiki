# 🐉 Zygarde | Cube, Cellules et Réassemblage

{% hint style="info" %}
<p align="center">Mega Showdown comprend un <strong>Cube de Zygarde</strong> et une <strong>unité de réassemblage</strong> pour créer et gérer différentes formes de Zygarde.</p>
{% endhint %}


![Zygarde](../imgwiki/Myth_Legends/gen_6/zygarde.png)

## 🧰 Objets nécessaires

- **Cube de Zygarde** : `mega_showdown:zygarde_cube`
- **Cellule de Zygarde** : `mega_showdown:zygarde_cell`
- **Cœur de Zygarde** : `mega_showdown:zygarde_core`
- **Unité de réassemblage** : `mega_showdown:reassembly_unit`

## 🧪 Conditions d'assemblage

| Assemblage | Cellules | Cœurs | Durée |
| --- | ---: | ---: | --- |
| Forme 10 % | 9 | 1 | 2 minutes |
| Forme 50 % | 49 | 1 | 5 minutes |
| Forme 50 % avec Rassemblement | 95 | 5 | 10 minutes |

{% hint style="info" %}
Ces valeurs proviennent directement du code de l'unité de réassemblage. Le résultat « 95 cellules / 5 cœurs » possède **Rassemblement** et commence à 50 %. La Forme Parfaite est liée à sa mécanique de combat, pas à un Pokémon « 100 % » directement fabriqué par cette machine.
{% endhint %}

## 🏗️ Procédure

{% stepper %}
{% step %}
### 📦 Remplissez le Cube
Ouvrez le Cube et ajoutez-y les Cellules et Cœurs.
{% endstep %}
{% step %}
### ⚙️ Activez la machine
Utilisez le Cube sur l'**unité de réassemblage** pour lancer le processus.
{% endstep %}
{% step %}
### ⏳ Finalisez l'assemblage
Quand le cycle est terminé, utilisez une **Poké Ball** sur la machine pour récupérer Zygarde.
{% endstep %}
{% endstepper %}

### 🔁 Modifier un Zygarde existant

Le Cube peut stocker ou libérer Zygarde. Sur un Zygarde avec Rassemblement, il permet aussi d'alterner entre les formes 10 % et 50 %. Le réassemblage peut récupérer les Cellules et le Cœur d'un Zygarde 10 % ou 50 % stocké.


{% hint style="warning" %}
**Note pour le modpack :** ces mécaniques proviennent du code source de Mega Showdown. L'obtention des objets, les recettes et les fonctionnalités actives peuvent varier selon la version installée dans Cobblemon Realms et la configuration du serveur. La présence d'un objet dans le code ne garantit pas son obtention en survie.
{% endhint %}


## 📖 Sources
[Code source Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/block/custom/ReassemblyUnitBlock.java), [Code source Mega Showdown](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/form_change/ZygardeCube.java).

---

{% hint style="success" %}
## 📥 Nous contacter

<p align="center">Vous avez une question, une suggestion ou une correction à proposer ? Rejoignez notre <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contactez <strong>@FabLeKebab</strong> pour le wiki ou <strong>@Levels</strong> pour le modpack.</p>
{% endhint %}
