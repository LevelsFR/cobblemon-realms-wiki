# 🌀 Hoopa | Confined & Unbound

{% hint style="info" %}
<p align="center">The <strong>Prison Bottle</strong> in Mega Showdown toggles Hoopa between Confined and Unbound forms.</p>
{% endhint %}


## 🔄 Change Form

1. Get the **Prison Bottle**, item `mega_showdown:prison_bottle`.
2. Use the bottle and select **Hoopa** from your party.
3. Repeat the interaction to revert to **Confined** form.

| Form | Item interaction |
| --- | --- |
| Confined | Prison Bottle → Unbound |
| Unbound | Prison Bottle → Confined |

{% hint style="info" %}
This is the Mega Showdown form-change item. It is **not** the same mechanic as Hoopa portals in [CobbleSafari](../mods-guides/CobbleSafari/hoopa_portals.md).
{% endhint %}


{% hint style="warning" %}
**Modpack note:** These mechanics are documented from Mega Showdown's upstream source. Item acquisition, recipes and enabled features may differ with the installed Cobblemon Realms version or server configuration. An upstream item existing does not prove it is obtainable in survival here.
{% endhint %}


## 📖 Source
[Mega Showdown source](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/MegaShowdownItems.java) registers the bottle, while [Mega Showdown source](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/form_change/FormChangeInteractItemMSD.java) implements reversible interaction.

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for wiki matters or <strong>@Levels</strong> for modpack matters.</p>
{% endhint %}
