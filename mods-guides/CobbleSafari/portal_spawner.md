# 🌀 Portal Spawner | Creative / Admin Guide

{% hint style="info" %}
<p align="center">The <strong>Portal's Shadow / Portal Spawner</strong> is a new creative/admin block in CobbleSafari 0.4 for generating renewable Hoopa dungeon portals.</p>
{% endhint %}


{% hint style="warning" %}
**Administrator feature:** the Portal Spawner is designed for configured worlds, server hubs and map makers. The old Creative Portal still works in existing worlds but is considered discontinued by the author.
{% endhint %}

## ⚙️ Three Spawn Modes

| Mode | Purpose |
| --- | --- |
| Fixed interval | Produce portals at scheduled intervals |
| Random interval | Produce portals after randomized intervals |
| Redstone | Control generation with redstone input |

Open its configuration screen to choose the mode and determine its portal behavior.

## 📍 Placement

In **0.4.1**, the Portal Spawner can also be installed on a **ceiling**, spawning its portal underneath. This allows the block and portal to fit a two-block-high space.

## 🔗 Portal and Session Rules

The 0.4 dungeon system separates the entrance portal's lifetime from the dungeon session. **A portal expiring does not immediately terminate a dungeon while players are still inside.** The server can also block spawning in specific biomes, control eligible spawn surfaces, and prevent portals near configured repellent blocks.

### ⚙️ Relevant Configuration

`config/cobblesafari/dungeon_spawn_config.json` supports `bannedBiomes`, portal lifetime settings, `repellentRadius`, and the block tags `#cobblesafari:portal_spawnable_on` and `#cobblesafari:portal_repellents`.

{% hint style="warning" %}
**Cobblemon Realms:** CobbleSafari 0.4.1 is included in modpack v6.3, but the default behavior described here can be altered by server settings, custom datapacks, difficulty or enabled addons. When in doubt, follow the actual in-game interface.
{% endhint %}

## 📖 Sources
[0.4.0 release](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [0.4.1 ceiling placement](https://modrinth.com/mod/cobblesafari/version/0.4.1) · [PortalSpawner source](https://github.com/maxigregrze/CobbleSafari/tree/main/common/src/main/java/maxigregrze/cobblesafari/block/dungeon).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for the wiki or <strong>@Levels</strong> for the modpack.</p>
{% endhint %}
