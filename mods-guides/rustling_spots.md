# 🌿 Rustling Spots

{% hint style="info" %}
**Rustling Spots** brings the rustling grass experience from **Pokémon Black & White** to Cobblemon. Explore the world, spot a movement in the environment, and investigate it for a surprise Pokémon encounter or a themed reward.
{% endhint %}

This guide has two parts: **Part 1 is for players** who want to understand the mod. **Part 2 is for server owners and datapack creators** who want to customize Rustling Spots **v5.1+**.

## 🎮 Part 1: Player Guide

### ✨ What does Rustling Spots do?

While you explore, temporary **Rustling Spots** can appear in nearby terrain. They are small, animated events that make forests, caves, water, deserts and other places more rewarding to explore.

1. **Explore** an area with a compatible surface.
2. **Look for movement and particles** marking a temporary spot. In v5.1+, a quiet terrain-themed sound plays once when you get close to a newly spawned spot.
3. **Walk up to the spot.** The event triggers **automatically when you are close enough**. No right-click or special item is required.
4. **Collect your reward** or meet the Pokémon that appears. The spot then disappears.

{% hint style="success" %}
No new structures, blocks or terrain generation are required. Rustling Spots can be added to an existing world without regenerating its chunks.
{% endhint %}

### 🎁 What can you find?

| Outcome | What happens |
| --- | --- |
| 🎯 Pokémon encounter | A Pokémon from the area's configured pool appears. |
| 📦 Themed loot | Items are dropped at the spot, based on its environment and loot pool. |
| ❌ Empty spot | Sometimes nothing is awarded, if the server allows empty events. |
| ✨ Shiny spot | A very rare special spot. If it produces a Pokémon encounter, that Pokémon is forced shiny. |

Some servers may enable **multiple reward rolls**. The exact loot, Pokémon, levels and encounter probabilities depend on the server's configuration.

### 🌍 Meet the nine spot families

Each built-in family has its own compatible surfaces, visuals, Pokémon selection and rewards.

| Family | Where to look | Theme |
| --- | --- | --- |
| 🌿 **Grass** | Grass, paths and small flowers | General outdoor encounters |
| 🏜️ **Sand** | Sand and red sand | Desert Pokémon and fossils |
| 🌊 **Water** | Open water | Aquatic encounters |
| ❄️ **Snow** | Snowy surfaces | Ice-themed Pokémon |
| 🍃 **Leaves** | Leaf blocks and canopies | Forest encounters |
| ⛏️ **Cave** | Stone and deep underground | Cave and mining rewards |
| 🪽 **Flying** | Open air under the sky | Flying Pokémon |
| 🔥 **NetherFlamme** | Netherrack and lava | Fire and Nether encounters |
| 👻 **SoulFlame** | Soul sand and soul soil | Dark and spectral encounters |

Custom datapacks can introduce other themed spots, so a modpack or server may offer more than these nine families.

### ✨ Shiny spots vs. shiny Pokémon

These are **two different probabilities** in the default v5.1 configuration:

| Setting | Default |
| --- | --- |
| Chance that a generated spot is a special shiny spot | **0.25%** |
| Chance that a normal Rustling Pokémon encounter is shiny | **1%** |
| Pokémon encounter chance during a regular reward roll | **35%** |
| Chance of an empty result, when enabled | **2%** |

A **shiny spot** has a distinctive visual appearance and forces a shiny Pokémon when the spot successfully produces a Pokémon encounter. Its discovery can be announced to the entire server. This is not a promise that every shiny spot will produce a Pokémon if spawning cannot succeed.

**Important for returning players:** v5.1 lowered the normal Pokémon shiny default from **5% to 1%**. Server owners can set their own probabilities, so the values above are not guaranteed on every server.

### 🧭 Useful things to know

- Spots are temporary. By default, one expires after **6,000 ticks (about 5 minutes)**.
- You normally activate a spot within **2 blocks horizontally**, with extra vertical tolerance.
- A spot can disappear when the area is unloaded or no nearby player remains.
- Spots are resynchronized on login, respawn and dimension changes.
- The mod supports other dimensions when suitable rules are configured.

### ⌨️ Player commands

These commands let you choose which in-game messages you see:

```mcfunction
/rustlingspots messages
/rustlingspots messages on
/rustlingspots messages off
/rustlingspots messages pokemon on
/rustlingspots messages loot off
/rustlingspots messages empty on
```

Use `/rustlingspots stats` to view your own discovered spots, shiny spots and rewards. These preferences do not change the actual rewards.

### 📦 Install and play

Rustling Spots v5.1 source targets **Minecraft 1.21.1**, **Cobblemon 1.8.0+** and **Fabric or NeoForge**. Install the build matching your mod loader and its required dependencies. On a server, follow the server's modpack installation instructions.

- [Download on CurseForge](https://www.curseforge.com/minecraft/mc-mods/rustling-spots)
- [Download on Modrinth](https://modrinth.com/mod/cobblemon-rustling-spots)

The **v5.1 source version** does not necessarily mean a v5.1 download is already available on both platforms.

### 🚀 Official add-on: Team Rocket

**Rustling Spots: Team Rocket** adds Team Rocket-themed encounters to the exploration loop.

[CurseForge add-on](https://www.curseforge.com/minecraft/mc-mods/rs-teamrocket-addon) | [Modrinth add-on](https://modrinth.com/mod/rs-teamrocket-addon)

---

## 🛠️ Part 2: Customization Guide (v5.1+)

This section is for **modpack makers, server administrators and datapack authors**. Everything below describes the **v5.1 source defaults**. Existing server settings and datapack overrides can change effective behavior.

### ⚙️ Configure the mod in-game

Since v5.0, regular settings use **Cloth Config**, rather than the old custom configuration screen.

- **Fabric:** open **Mod Menu**, select **Rustling Spots**, then **Configure**.
- **NeoForge:** open **Mods**, choose **Rustling Spots**, then **Config**.
- In multiplayer, **level 2 operators** can edit server settings. Other players can still change their own client preferences.
- Saving server settings applies the changes immediately on a dedicated server.

**Cloth Config 15.x** is a required client dependency, alongside the relevant loader dependencies. **Mod Menu** provides the Fabric configuration entry point.

The JSON files under `config/rustlingspots/` remain in use for persistence and older-world migration, but **the in-game screen is the supported way to edit regular settings**. Pokémon pools, loot pools and custom datapack definitions remain data-driven.

### 📊 Important v5.1 defaults

| Setting | Default |
| --- | --- |
| Player spot search radius | `200` blocks |
| Minimum distance between spots | `16` blocks |
| Maximum active spots per player | `8` |
| Maximum active spots on the server | `64` |
| Spot lifetime | `6000` ticks |
| Interaction radius | `2` blocks |
| Vertical interaction allowance | `3` blocks |
| Pokémon encounter probability | `0.35` (35%) |
| Normal Pokémon shiny chance | `0.01` (1%) |
| Special shiny spot probability | `0.0025` (0.25%) |
| Empty spots enabled / probability | `true` / `0.02` (2%) |
| Multiple reward rolls | Disabled by default |
| Global shiny discovery announcements | Enabled by default |

Default family spawn multipliers:

| Grass | Sand | Water | Snow | Leaves | Cave | Flying | NetherFlamme | SoulFlame |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | 1.0 | **0.6** | 1.0 | 0.7 | 1.0 | 0.25 | 0.6 | 1.0 |

These are family spawn-rate multipliers, **not** Pokémon encounter chances.

### 📁 Config files and upgrade safety

| File under `config/rustlingspots/` | Controls |
| --- | --- |
| `rustlingspots-server.json` | Spawning, limits, shiny spots, empty spots and multi-rewards |
| `rustlingspots-pokemon.json` | Pokémon encounters, levels and default shiny chance |
| `rustlingspots-families.json` | Spawn multiplier per family |
| `rustlingspots-client.json` | Visual opacity and message defaults |
| `rustlingspots-sound.json` | Pokémon encounter and item reward sound volumes |
| `pokemon/families/*.json` | Advanced Pokémon encounter pools |

**v5.1 migration:** on first load, an old Pokémon shiny setting of exactly `0.05` (5%) is migrated to `0.01` (1%) and the config version is recorded. Other numeric values are preserved. If you intentionally configured **exactly 5%**, it cannot be distinguished from the old default: check and reapply it after upgrading if needed.

The new close-range terrain sound plays once per newly received spot, at a fixed volume in v5.1. The sound-volume settings above control **Pokémon and item reward sounds**, not this approach cue.

Existing v4.x JSON and custom pools are retained during upgrades. Invalid general JSON config files are backed up before defaults are regenerated. **Back up your config and world before major updates.**

### ⌨️ Admin and debugging commands

The following operations require **permission level 2**:

```mcfunction
/rustlingspots spawn grass
/rustlingspots spawn rustlingspots:grass
/rustlingspots spawn myserver:my_custom_spot
/rustlingspots spawnshiny rustlingspots:grass
/rustlingspots reload
/rustlingspots scan 64
/rustlingspots scan 64 grass
/rustlingspots debugspawn
/rustlingspots debugspawn 30
/rustlingspots stats <player>
```

- `spawn` creates a test spot, including a datapack spot by its complete ID.
- `spawnshiny` tests a forced shiny spot.
- `reload` reloads configuration and datapack-driven pools and definitions.
- `scan` lists active spots near the command user.
- `debugspawn` tests candidate positions and reports why a spot may not spawn.
- `stats <player>` checks another player's statistics. `/rustlingspots stats` remains available to players for their own statistics.

### 🧩 Create a custom spot with a datapack

No Java addon is required. A datapack can define **where a spot appears, its visual family, priority, weight, Pokémon pool, loot pool and particles**.

#### 1. Create the datapack folders

```text
MyRustlingPack/
├── pack.mcmeta
└── data/
    └── myserver/
        └── rustling_spots/
            ├── spot_definitions/
            │   └── swamp.json
            ├── pokemon_families/
            │   └── swamp.json
            └── loot_families/
                └── swamp.json
```

For **Minecraft 1.21.1**, an example `pack.mcmeta` is:

```json
{
  "pack": {
    "pack_format": 48,
    "description": "My Rustling Spots datapack"
  }
}
```

Put the pack in `world/datapacks/` and run `/rustlingspots reload`.

#### 2. Define the spot

Save this as `data/myserver/rustling_spots/spot_definitions/swamp.json`:

```json
{
  "format_version": 1,
  "id": "myserver:swamp_custom",
  "display_name": "Swamp Spot",
  "priority": 10,
  "weight": 5,
  "visual_family": "leaves",
  "dimensions": ["minecraft:overworld"],
  "biomes": ["minecraft:swamp", "minecraft:mangrove_swamp"],
  "blocks": ["minecraft:mud", "minecraft:grass_block"],
  "pokemon_family": "myserver:swamp",
  "loot_family": "myserver:swamp",
  "particles": [
    { "type": "rustlingspots:leaves_burst", "weight": 7 },
    { "type": "minecraft:happy_villager", "weight": 3 }
  ]
}
```

**How selection works:** built-in spots have `priority: 0` and `weight: 1`. Matching candidates with the **highest priority** are considered first, then `weight` determines the choice among those candidates. A custom priority of `10` can override a built-in family where its conditions match.

The optional `visual_family` selects a built-in visual style. Accepted values: `grass`, `sand`, `water`, `snow`, `leaves`, `cave`, `flying`, `netherflamme` and `soulflame`. Missing or invalid values fall back to `grass`.

For `biomes` and `blocks`, both exact IDs and `#namespace:tag` references are supported. If `dimensions` is omitted, the spot is limited to the **Overworld**. The `biomes` and `blocks` arrays must not be empty. Built-in spot IDs such as `rustlingspots:grass` are reserved.

#### 3. Define the Pokémon pool

Save as `data/myserver/rustling_spots/pokemon_families/swamp.json`:

```json
[
  { "species": "wooper", "weight": 10, "min_level": 5, "max_level": 20 },
  { "species": "lotad", "weight": 8, "min_level": 5, "max_level": 25 },
  { "species": "croagunk", "weight": 4, "min_level": 12, "max_level": 30 }
]
```

Each entry uses `species` and a positive `weight`. Optional fields include `min_level`, `max_level`, `shiny`, `shinyChance` and `families`.

**v5.1 Fakemon support:** use the Pokémon's registered, namespaced Cobblemon species ID, for example `myaddon:my_fakemon`, when an installed addon provides that species. The species must actually be registered in Cobblemon.

For an entry-specific shiny probability, use **`shinyChance`** (camelCase), for example `"shinyChance": 0.10`. The key `shiny_chance` is **not** supported in Pokémon pool entries.

#### 4. Define the loot pool

Save as `data/myserver/rustling_spots/loot_families/swamp.json`:

```json
[
  { "item": "minecraft:slime_ball", "min": 1, "max": 3, "weight": 5 },
  { "item": "minecraft:lily_pad", "min": 1, "max": 2, "weight": 3 }
]
```

Loot entries use an existing item ID, a positive `weight` and optional `min` / `max` quantities. Family-specific loot is combined with the global loot pool, and weights of duplicate entries are merged.

#### 5. Reload and test

```mcfunction
/rustlingspots reload
/rustlingspots spawn myserver:swamp_custom
/rustlingspots scan 64
/rustlingspots debugspawn 30
```

Check the **server log** if a Pokémon does not appear. Since v5.1, invalid Pokémon pool entries are reported with their **source file and zero-based entry index**. A bad entry is skipped without discarding other valid entries in the same valid JSON array. A malformed JSON document may still prevent that entire file from loading.

If Cobblemon's species registry is not ready, species/form validation is deferred and checked again when the registry is available or an encounter is attempted.

### 📚 Full guides and official example packs

This page covers the practical starting point. The source documentation explains all fields, more advanced rules and fallbacks.

- [Complete custom spot guide, English](https://github.com/LevelsFR/RustlingSpots-MultiLoader-1.21.1/blob/master/docs/custom-spot-definitions-guide-en.md)
- [Complete custom spot guide, French](https://github.com/LevelsFR/RustlingSpots-MultiLoader-1.21.1/blob/master/docs/custom-spot-definitions-guide.md)
- [Official source and changelog for v5.1+](https://github.com/LevelsFR/RustlingSpots-MultiLoader-1.21.1)
- [Example datapack on CurseForge](https://www.curseforge.com/minecraft/data-packs/rustling-spots-example-addon-datapack)
- [Example datapack on Modrinth](https://modrinth.com/datapack/rustling-spots-addon-datapack)

{% hint style="info" %}
**Questions or feedback?** Join the [Our Story Discord](https://discord.gg/kb8NSTF45n). Contact **@FabLeKebab** about wiki content or **@Levels** about the project.
{% endhint %}
