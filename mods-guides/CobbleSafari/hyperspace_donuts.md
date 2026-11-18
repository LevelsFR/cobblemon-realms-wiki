# 🍩 Hyperspace Donuts | Flavors & Powers

{% hint style="info" %}
<p align="center">In Hyperspace Lumiose, ingredients found during exploration can be used at a <strong>Cooking Pot</strong> to prepare donuts with special powers.</p>
{% endhint %}


## 🧑‍🍳 Getting Started

1. Explore [Hyperspace Lumiose](hyperspace_lumiose.md) and collect cooking ingredients.
2. Find a **Cooking Pot** and open its interface.
3. Choose ingredients and prepare a donut.
4. Check the generated donut's tooltip for its **flavor, tier and powers** before using it.

{% hint style="info" %}
The source defines several donut powers and levels. The final result depends on its ingredients and generation logic. This guide intentionally does **not** invent exact recipes or ingredient counts.
{% endhint %}

## 🌶️ Main Flavors

Mega Showdown-independent CobbleSafari donut code defines these six flavor families:

| Flavor | Associated stat |
| --- | --- |
| Spicy | Attack |
| Dry | Special Attack |
| Sweet | Defense |
| Sour | Special Defense |
| Bitter | Speed |
| Mixed | HP |

## ✨ Available Power Families

The registered bonus list includes:

| Category | Examples from source code |
| --- | --- |
| Hunting and catching | Encounter, Capture, Sparkling, Alpha, Hidden Ability |
| Pokémon details | Humongo, Teensy, Atypical, Friendship |
| Battle effects | Attack, Defense, Special Attack, Special Defense, Speed, Move, Resistance |
| Exploration and rewards | Luck, Salvage, Big Haul, Item |

The generated bonus level and type affect its strength. A given donut is **not guaranteed** to grant a particular listed effect.

## 🔗 Related
[Hyperspace Lumiose](hyperspace_lumiose.md) · [Dimensional Objectives](dimensional_objectives.md).

{% hint style="warning" %}
**Cobblemon Realms:** this guide describes the upstream mechanics introduced in CobbleSafari **0.4.0/0.4.1**, included in Cobblemon Realms **6.3**. Actual encounter pools, dungeon availability, loot and timers may be overridden by the server, addons or datapacks. Do not treat upstream defaults as guaranteed public-server settings.
{% endhint %}

## 📖 Sources
[Official 0.4.0 release](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [Donut power registry](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/java/maxigregrze/cobblesafari/item/donut/DonutPowerRegistry.java) · [Flavor enumeration](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/java/maxigregrze/cobblesafari/item/donut/DonutMainFlavor.java).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for the wiki or <strong>@Levels</strong> for the modpack.</p>
{% endhint %}
