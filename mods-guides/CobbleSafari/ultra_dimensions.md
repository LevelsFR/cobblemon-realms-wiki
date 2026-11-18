# 🌀 The Seven Ultra Dimensions

{% hint style="info" %}
<p align="center">Seven destination definitions are included in CobbleSafari 0.4. Each has its own Pokémon encounter pool and potential Ultra Beast reward.</p>
{% endhint %}


## 🗺️ Destinations and Encounters

These examples are read directly from `data/cobblesafari/ultra_warp_ride/destination/` in the upstream repository.

| Destination | Example normal encounters | Special reward pool |
| --- | --- | --- |
| **Ultra Crater** | Metagross, Clefable, Lunatone, Solrock | Celesteela, Poipole |
| **Ultra Deep** | Kingdra, Lanturn, Wailmer, Dhelmise | Nihilego, Poipole |
| **Ultra Desert** | Garchomp, Sableye, Glimmora, Krookodile | Pheromosa, Poipole |
| **Ultra Forest** | Scizor, Lurantis, Kleavor, Leavanny | Kartana, Poipole |
| **Ultra Jungle** | Salamence, Alolan Exeggutor, Tropius, Hawlucha | Buzzwole, Poipole |
| **Ultra Plant** | Magnezone, Eelektross, Electivire, Archaludon | Xurkitree, Poipole |
| **Ultra Ruins** | Tyranitar, Galarian Weezing, Golurk, Obstagoon | Guzzlord, Stakataka, Blacephalon, Poipole |

{% hint style="warning" %}
**How to read this table:** these are upstream **encounter definitions**, not guaranteed spawns or current Cobblemon Realms rates. A dimension gives an encounter, and the special reward pool only applies when the warp system selects that reward tier. Addon support for individual species must also be enabled.
{% endhint %}

## ⭐ Reward Quality

The result depends on the [Ultra Warp Ride](ultra_warp_ride.md). Higher-ranking portals and longer flights can improve IVs, moves and special encounter odds, but do not guarantee a Shiny or Ultra Beast.

### 🔎 Source-defined Special Pool Weights

The individual destination files mostly list a **70/30** split between their featured Ultra Beast and Poipole. Ultra Ruins instead uses weights **10 (Guzzlord), 30 (Stakataka), 30 (Blacephalon), 30 (Poipole)**. These are relative weights *within the selected special pool*, not overall encounter probabilities.

## 🧭 Related Guides

- [Ultra Space overview](ultra_space.md)
- [Ultra Warp Ride](ultra_warp_ride.md)
- [Ultra loot and equipment](ultra_loot.md)

{% hint style="warning" %}
**Cobblemon Realms:** this guide describes the upstream mechanics introduced in CobbleSafari **0.4.0/0.4.1**, included in Cobblemon Realms **6.3**. Actual encounter pools, dungeon availability, loot and timers may be overridden by the server, addons or datapacks. Do not treat upstream defaults as guaranteed public-server settings.
{% endhint %}

## 📖 Primary Sources
[Destination directory](https://github.com/maxigregrze/CobbleSafari/tree/main/common/src/main/resources/data/cobblesafari/ultra_warp_ride/destination) · [Difficulty file](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/resources/data/cobblesafari/ultra_warp_ride/difficulty.json) · [0.4.0 release](https://modrinth.com/mod/cobblesafari/version/0.4.0).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for the wiki or <strong>@Levels</strong> for the modpack.</p>
{% endhint %}
