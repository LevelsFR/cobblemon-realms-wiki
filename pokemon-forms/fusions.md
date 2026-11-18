# 🧊 Legendary Fusions | Kyurem & Calyrex

{% hint style="info" %}
<p align="center">Mega Showdown's fusion tools store one Pokémon inside an item, then combine it with a different <strong>primary Pokémon</strong>. These are not ordinary held-item transformations.</p>
{% endhint %}


## 🧬 Supported Fusions

| Primary Pokémon | Partner to store | Item | Result |
| --- | --- | --- | --- |
| Kyurem | Zekrom | `mega_showdown:dna_splicer` | Black Kyurem |
| Kyurem | Reshiram | `mega_showdown:dna_splicer` | White Kyurem |
| Calyrex | Spectrier | `mega_showdown:reins_of_unity` | Shadow Rider Calyrex |
| Calyrex | Glastrier | `mega_showdown:reins_of_unity` | Ice Rider Calyrex |

## 🎮 How to Fuse

{% stepper %}
{% step %}
### 1. Send out the partner
Send out **Zekrom/Reshiram**, or **Spectrier/Glastrier**, depending on the form you want.
{% endstep %}
{% step %}
### 2. Charge the fusion item
While holding the matching fusion item, use it while looking at the partner. The partner is stored **inside the item**, not lost.
{% endstep %}
{% step %}
### 3. Send out the primary Pokémon
Use the charged item while looking at **Kyurem** or **Calyrex**. The corresponding fused form is applied.
{% endstep %}
{% step %}
### 4. Separate the Pokémon
Use the matching item on the fused primary Pokémon to reverse the fusion and return the stored partner to your party.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
Fusion requires Pokémon owned by the player. The code rejects Pokémon that are battling, already changing form or tethered. Avoid dropping or destroying a fusion item containing a Pokémon.
{% endhint %}

## ☀️ Necrozma

Necrozma uses the same two-step principle with a **different implementation**: an N-Solarizer stores Solgaleo for Dusk Mane, while an N-Lunarizer stores Lunala for Dawn Wings. See [Necrozma Fusions](../pokemons-exclusives/necrozma-fusions.md).


{% hint style="warning" %}
**Modpack note:** These mechanics are documented from Mega Showdown's upstream source. Item acquisition, recipes and enabled features may differ with the installed Cobblemon Realms version or server configuration. An upstream item existing does not prove it is obtainable in survival here.
{% endhint %}


## 📖 Sources
[Mega Showdown source](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/MegaShowdownItems.java), [Mega Showdown source](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/fusion/DuFusion.java) and [Mega Showdown source](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/main/common/src/main/java/com/github/yajatkaul/mega_showdown/item/custom/fusion/SoloFusion.java).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for wiki matters or <strong>@Levels</strong> for modpack matters.</p>
{% endhint %}
