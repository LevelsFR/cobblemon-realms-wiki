# 🎯 Dimensional Objectives | Dungeon Tasks

{% hint style="info" %}
<p align="center">CobbleSafari 0.4 introduces and expands <strong>instance-based objectives</strong>. Complete assigned challenges while exploring to earn additional rewards.</p>
{% endhint %}


## 📋 How Objectives Work

- Objectives are defined by dungeon-specific datapack files and can differ from one visit to the next.
- A single dungeon can select from multiple tasks using **weights and target ranges**.
- The objective HUD displays relevant progress, subject to the client's HUD settings.
- Certain dungeons offer a **final reward** when all required tasks are complete. Others only award individual tasks.

## 🗺️ Default Task Types

| Dungeon | Source-defined tasks |
| --- | --- |
| **Ultra Megalopolis** | Warp energy, obstacles, travel distance, Pokémon captures, Lost Items |
| **Hyperspace Lumiose** | Collect floating/sparkling Lost Items, capture themed Pokémon, clear boulders/brambles/sludge |
| **Bell Tower** | Gain height, make ramp jumps, collect Lost Items, defeat/engage with the boss |
| **Distortion World** | Has its own configurable objectives and rewards |
| **Sinnoh Underground** | Uses its own tasks and reward tables |

{% hint style="info" %}
The default Hyperspace Lumiose definition enables its **Golden Auspicious Poké Ball** reward when the objective set is finished. The Megalopolis and Bell Tower definitions **do not** enable an additional final-completion reward in their shipped data.
{% endhint %}

## 🎁 Why Look for Lost Items?

The 0.4 update rebalanced Lost Item and Auspicious Poké Ball loot. Some objective tasks require opening collectibles, which can also yield independent loot.

See [Lost Items](lost_items.md) and [Hyperspace Lumiose](hyperspace_lumiose.md).

## 🛠️ For Server Creators

The definitions live in `data/cobblesafari/dimensional_objectives/`. You can inspect `tasks`, `weight`, optional `countRange`, and reward tables before overriding them in a datapack.

{% hint style="warning" %}
**Cobblemon Realms:** CobbleSafari 0.4.1 is included in modpack v6.3, but the default behavior described here can be altered by server settings, custom datapacks, difficulty or enabled addons. When in doubt, follow the actual in-game interface.
{% endhint %}

## 📖 Sources
[0.4.0](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [0.4.1](https://modrinth.com/mod/cobblesafari/version/0.4.1) · [Objectives directory](https://github.com/maxigregrze/CobbleSafari/tree/main/common/src/main/resources/data/cobblesafari/dimensional_objectives).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for the wiki or <strong>@Levels</strong> for the modpack.</p>
{% endhint %}
