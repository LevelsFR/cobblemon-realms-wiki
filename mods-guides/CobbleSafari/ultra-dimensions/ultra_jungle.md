# 🌀 Ultra Jungle | Ultra Space

{% hint style="info" %}
<p align="center">This guide documents the <strong>upstream encounter pools</strong> for this Ultra Dimension. The encounter depends on your wormhole rank and may be modified by the server configuration.</p>
{% endhint %}

## 🗺️ Destination Reference

| Property | Value |
| --- | --- |
| Destination ID | `cobblesafari:ultra_jungle` |
| Type ID | `2` |
| Portal tint | `#339933` |
| Mod | CobbleSafari 0.4.x |

---

## 🐾 Normal Encounter Pool

The upstream destination file lists the following eight Pokémon in its normal pool:

- **Salamence**
- **Alolan Exeggutor**
- **Tropius**
- **Jumpluff**
- **Toucannon**
- **Hawlucha**
- **Chatot**
- **Tangrowth**

---

## ⭐ Weighted Special Reward Pool

| Pokémon | Weight |
| --- | ---: |
| **Buzzwole** | 70 |
| **Poipole** | 30 |

{% hint style="warning" %}
**Important :** these are relative weights **within the special reward pool**, not the chance of receiving that Pokémon on every trip. The Ultra Warp Ride must first select this reward pool, and addon support must be enabled.
{% endhint %}

---

## 🎁 Related Loot & Souvenirs

The source includes a loot table associated with this destination's featured special Pokémon. It includes an entry for `cobblesafari:buzzwole_seeds`.

This **does not guarantee** the item will drop on each run. The source tables may also contain equipment such as Ultra Recon Armor pieces.

---

## 🧭 How to Reach This Destination

1. Enter [Ultra Megalopolis](../ultra_megalopolis.md).
2. Start the [Ultra Warp Ride](../ultra_warp_ride.md), collect boosts and avoid hazards.
3. Select a wormhole leading to this destination and discover its encounter.

[← All Ultra Dimensions](../ultra_dimensions.md)

---

## 📖 Verifiable Sources

- [Official destination definition](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/resources/data/cobblesafari/ultra_warp_ride/destination/ultra_jungle.json)
- [Related source loot table](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/resources/data/cobblesafari/loot_table/ultraspace/treasure_buzzwole.json)
- [Warp difficulty model](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/resources/data/cobblesafari/ultra_warp_ride/difficulty.json)

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for wiki corrections or <strong>@Levels</strong> for modpack questions.</p>
{% endhint %}
