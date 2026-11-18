# ⚙️ CobbleSafari 0.4 | Server Setup & Compatibility

{% hint style="info" %}
<p align="center">A reference for modpack maintainers and server operators: onboarding, portal and session settings, client accessibility and addon compatibility.</p>
{% endhint %}


{% hint style="warning" %}
**Administration only:** these options are not intended for regular survival players. This page describes the upstream CobbleSafari controls, not the exact confidential configuration of the Cobblemon Realms server.
{% endhint %}

## 🧭 One-Time Onboarding

Administrators with permission level **2** are invited to complete a one-time setup when first connecting after updating, or can open it with:

```mcfunction
/cobblesafari onboarding
```

The screen can declare installed **Legendary/Mythical**, **Ultra Beast**, **Paradox** and other species addons. It also configures portal spawning, announcements, Reward Balloons and **Mega Showdown** compatibility.

Those choices affect the default Wonder Trade pools and prevent unsupported unique GTS offers from appearing. `askForOnboarding` is the corresponding `misc_config.json` option.

## 🌀 Portal and Dungeon Management

Important changes since 0.4.0:

- `/cs dungeon spawn [player] [dungeon]` supports a target dungeon.
- `/cs dungeon list portal` lists known portals.
- `/cs dungeon list portal force` rescans relevant **loaded** chunks.
- `/cs dungeon list` shows active instances, occupants and closed entrances.
- `/cs reset dungeon force` can reset even when players are present and must be used cautiously.

See the [full command guide](cobblesafari_command.md).

## ⏱️ Sessions, Not Just Dimensions

A dungeon timer now belongs to a **visit/session**, not simply to a dimension. Server commands include:

```mcfunction
/cs timer session list <player>
/cs timer session add <player> <scope> <seconds>
/cs timer session set <player> <scope> <seconds>
```

Sub-dungeons (including Ultra Space) can spend time from a parent instance. On migration to 0.4, legacy dungeon timer data was discarded and affected players sent back.

## 🧰 Config Files and Defaults

| File | Important 0.4.x options |
| --- | --- |
| `misc_config.json` | `askForOnboarding`, `balloonMaxNearby` (3), `enableShardsClusters` (false), `enableUltraReconElytra`, `hauntedMonitorStrikeChance`, `ultraWarpDiveCSMusic` |
| `safari_config.json` | `safariDroneEnabled`, `safariDroneSpawnMultiplier` (10) |
| `dungeon_spawn_config.json` | `bannedBiomes`, `repellentRadius`, portal tags |
| `client_settings.json` | HUD options, Rotom Phone totem animations, Ultra Warp Ride flashes |
| Dimensional restrictions | `allowRotomSafety`, `forbidElytra`, `forbidParkourItems` (0.4.1) |

The 0.4.1 `forbidParkourItems` restriction covers Ender Pearls, Chorus Fruit, Wind Charges and Boats in restricted dungeons. Buckets also follow dimensional block-placement restrictions.

## 🔗 Other Admin Guides
[Portal Spawner](portal_spawner.md) · [Dimensional Objectives](dimensional_objectives.md) · [All Commands](cobblesafari_command.md).

## 📖 Sources
[0.4.0 release](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [0.4.1 release](https://modrinth.com/mod/cobblesafari/version/0.4.1) · [CobbleSafari source repository](https://github.com/maxigregrze/CobbleSafari).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for the wiki or <strong>@Levels</strong> for the modpack.</p>
{% endhint %}
