# 🌸 Shaymin | Land & Sky Forme

{% hint style="info" %}
<p align="center">The Gracidea Flower from Mega Showdown switches Shaymin between <strong>Land Forme</strong> and <strong>Sky Forme</strong>, depending on the Minecraft time of day.</p>
{% endhint %}

![Shaymin](../imgwiki/Myth_Legends/gen_4/shaymin.png)

## 🔄 How to Change Form

{% stepper %}
{% step %}
### 🌸 Get a Gracidea Flower
The Mega Showdown item is `mega_showdown:gracidea_flower`. Check its availability in your Cobblemon Realms world before planning a survival route.
{% endstep %}
{% step %}
### ☀️ Use it during the day
Hold the flower, use it and select Shaymin in your party. If Shaymin is not already in Sky Forme, it switches to **Sky Forme**.
{% endstep %}
{% step %}
### 🌙 Revert at night
Use the same flower on Sky Forme Shaymin at night to return to **Land Forme**.
{% endstep %}
{% endstepper %}

| Time | Current form | Result |
| --- | --- | --- |
| Day | Land | Sky |
| Day | Sky | No change |
| Night | Sky | Land |
| Night | Land | No change |

{% hint style="info" %}
The implementation checks Minecraft daylight using game time modulo 24,000: values below 12,000 count as day. It does **not** check for clear weather in this method.
{% endhint %}


{% hint style="warning" %}
**Modpack note:** These mechanics are documented from Mega Showdown's upstream source. Item acquisition, recipes and enabled features may differ with the installed Cobblemon Realms version or server configuration. An upstream item existing does not prove it is obtainable in survival here.
{% endhint %}


## 📖 Source
[Mega Showdown source](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/form_change/Gracedia.java). The item registration is in [Mega Showdown source](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/block/MegaShowdownBlocks.java).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for wiki matters or <strong>@Levels</strong> for modpack matters.</p>
{% endhint %}
