# 🐾 Pokémon and Spawns

{% hint style="info" %}
<p align="center">
<strong>Cobblemon Realms</strong> uses the custom <strong>Biome Expanded Spawns (v6.x branch)</strong> datapack to provide spawns adapted to each environment of the modpack. A Pokémon can spawn depending on its <strong>biome</strong>, <strong>dimension</strong>, <strong>time</strong>, <strong>weather</strong>, <strong>light level</strong>, <strong>altitude</strong>, <strong>structures</strong>, <strong>surrounding blocks</strong>, and many other conditions.
</p>
{% endhint %}

---

## 🧭 How does the system work?

Unlike a system where each Pokémon would simply be associated with a biome, **each species has its own spawn rules**.

The same Pokémon can therefore have several different spawns:

| 🌿 Example | 📍 Situation |
| --- | --- |
| ☀️ Common Spawn | Forest during the day |
| 🌙 Rare Spawn | Another biome at night |
| 🏛️ Special Encounter | Near a structure |
| ✨ Ultra Rare Spawn | In a particular dimension |

{% hint style="warning" %}
⚠️ <strong>Entering the correct biome does not guarantee a spawn.</strong> Other conditions may be required, such as the time, weather, light level, altitude, spawn position, or even the presence of certain blocks.
{% endhint %}

---

## 📚 What you will find in this guide

| 📌 Section | 🔎 What it explains |
| --- | --- |
| 🌍 **Dimensions** | The different areas where Pokémon can spawn |
| 🧭 **Biomes & Tags** | How the biome categories used by the datapack work |
| ⚙️ **Conditions** | Time, weather, light, altitude, structures, blocks, and positions |
| ✨ **Rarity** | The different encounter categories |
| 🔎 **Search** | `/checkspawns` and Discord tools |
| 🧠 **Tips** | A few methods to optimize your searches |

---

## 🌍 Dimensions and spawn areas

Each dimension has its own environments and therefore its own groups of Pokémon.

| 🌎 Dimension | 📝 General Overview |
| --- | --- |
| 🌎 **Overworld** | Main exploration area: forests, oceans, caves, mountains, structures, and other natural environments. |
| 🔥 **Nether** | Encounters adapted to volcanic environments, lava, fossils, ruins, and Nether structures. |
| 🌌 **End** | Rare Pokémon and late-game encounters spread across the different environments and structures of the End. |
| ☁️ **The Aether** | Custom spawns across Aether biomes, with their own biome, altitude, and dimension rules. |
| 🌑 **The Otherside** | Encounters primarily focused on Ghost, Dark, Dragon, Psychic, and late-game content. |
| 🐝 **The Bumblezone (when accessible)** | The datapack also contains rules for Bumblezone biomes. These encounters only apply if the matching dimension is actually installed and accessible. |

### 📖 Dedicated Guides

- [☁️ **Aether Spawns**](mods-guides/worlds_and_dimensions/aether.md)
- [🌑 **The Otherside Spawns**](mods-guides/worlds_and_dimensions/deeper_and_darker.md)

{% hint style="info" %}
💡 The dedicated dimension guides present encounters **biome by biome**, along with rarity levels and special conditions whenever they are relevant.
{% endhint %}

---

## 🧭 Biomes and biome tags

The datapack uses **biome tags** to group together multiple environments that share the same characteristics.

For example:

- `#cobblemon:is_forest` → forest environments
- `#cobblemon:is_ocean` → ocean environments
- `#cobblemon:is_cave` → caves and underground environments
- `#cobblemon:is_mountain` → mountains and mountainous terrain
- `#cobblemon:is_floral` → vegetation-rich environments
- `#cobblemon:is_otherside` → The Otherside environments
- `#aether:is_aether` → Aether environments

The same tag can group together **Vanilla biomes and biomes added by mods**, allowing a spawn rule to be defined without having to list every biome individually.

Some tags also reference other tags or **optional mod biomes**: seeing a biome in the datapack does not prove it is accessible in your installation.

⮕ Check the [**Biome Tag Reference**](pokemons-guides/biome-tags-reference.md) to find the tags used by the modpack and their associated biomes.

---

## 📂 How to Read the Datapack

The supplied **v6.x** datapack contains individual Pokémon spawn files, **herds** (`pokemon-herd`), **biome tags**, presets, and habitat pools. It is not simply a list matching Pokémon species to biomes.

| Element | What it means |
| --- | --- |
| **Pokémon / form** | The species and sometimes a form or special properties |
| **Biome or tag** | Where a rule may apply; a tag starting with `#` can represent multiple biomes |
| **Conditions** | Requirements such as light, time, weather, altitude, or structures |
| **Exclusions** | Conditions that prevent a rule from applying even in a matching biome |
| **Position** | Ground, submerged, surface, seafloor, or fishing-based encounter |
| **Bucket and weight** | The rarity group and **relative weighting among eligible rules**, not a fixed spawn or capture percentage |
| **Herd** | A group-spawn rule whose members and group sizes are defined separately |

{% hint style="info" %}
A biome tag is **not** a single Minecraft biome. For example, the datapack's `#cobblemon:is_jungle` tag includes vanilla biomes and optional modded biomes when those mods are present. The exact matches depend on the mods actually installed on your server.
{% endhint %}

---

## ⚙️ Spawn conditions

Spawns can use many different conditions. Here are the main ones to know.

<details>
<summary><strong>🌤️ Time, weather, and moon phases</strong></summary>

Some Pokémon are only available during certain periods or under specific weather conditions.

This may include:

- ☀️ Daytime
- 🌙 Nighttime
- 🌅 Dusk
- 🌧️ Rain
- ☁️ Certain weather conditions
- 🌕 Certain moon phases

These conditions are notably used for nocturnal, Ghost-type, or weather-related Pokémon.

</details>

<details>
<summary><strong>💡 Light, sky, and altitude</strong></summary>

A spawn may also depend on the light level or the height at which it occurs.

The rules may check:

- 💡 Sky light level
- 🔦 General light level
- ☀️ Direct access to the sky
- ⛰️ A minimum or maximum Y altitude
- 🕳️ An underground or surface position

Therefore, finding the correct biome is not always enough for a spawn in a **cave, mountain, or deep underground**.

</details>

<details>
<summary><strong>🏛️ Structures and special locations</strong></summary>

Some Pokémon have spawns linked to **specific structures** rather than a traditional biome.

This may notably include:

- 🏘️ Villages
- 🏚️ Ruins
- ⚓ Shipwrecks
- 🌊 Ocean monuments
- 🌌 End structures
- 🕳️ Ancient Cities
- 🏛️ The Ancient Temple in The Otherside
- 🗝️ Aether dungeons

These encounters may use different rarity levels and conditions from natural spawns.

</details>

<details>
<summary><strong>🧱 Blocks and nearby environment</strong></summary>

Some Pokémon also check the **blocks present around the spawn point**.

These may include:

- 🌸 Specific flowers and vegetation
- 🌳 Special trees
- 💧 Water or lava
- 💎 Ores and gems
- 🔴 Redstone components
- ⚡ Lightning rods
- 💻 PCs and Cobblemon machines
- 🪨 Stone, Deepslate, and other blocks specific to certain dimensions

These conditions make it possible to create spawns adapted to **technological, mineral, floral, or elemental** Pokémon.

</details>

<details>
<summary><strong>🌊 Water, fishing, and special positions</strong></summary>

The exact spawn position may also be taken into account.

For example, a Pokémon may spawn:

- 🌱 On the ground
- 🌊 In water
- 🐟 On the surface of the water
- 🪸 On the ocean floor
- 🎣 Through fishing
- 🌳 In treetops or foliage

Fishing-related spawns may also depend on the **rod, lure, or bait used**.

</details>

---

## 🔬 Examples Verified in the Datapack

The following examples are taken from the **attached spawn definitions**, not estimated in-game encounter percentages.

| Pokémon | Rule present in the datapack | What to remember |
| --- | --- | --- |
| 🌱 **Bulbasaur** | Ground spawn in `#cobblemon:is_jungle` or `#cobblemon:is_tropical_island` with sky light between 8 and 15 | There is also a **separate PokéSnack-related rule** in jungles; PokéSnacks are not required for all Bulbasaur encounters |
| ⚡ **Pikachu** | A rule in `#cobblemon:is_forest`, excluding `#cobblemon:is_spooky`, with **5× weight during thunderstorms** | This modifies one rule's weight; it does not guarantee a Pikachu or multiply all Pokémon spawning by five |
| 🎣 **Magikarp** | Several water and fishing rules, including submerged encounters in freshwater or ocean biomes with sky access | Fishing encounters and natural underwater spawns are separate methods |
| 🌸 **Mew** | An Ultra Rare rule in `#cobblemon:is_floral` or `#cobblemon:is_jungle`, with **1.15× weight at noon** | The bonus does not mean Mew is impossible to encounter at other times |
| 🏛️ **Mewtwo** | An Ultra Rare rule requiring `#cobblemon:is_deep_dark` **and** the `minecraft:stronghold` structure | Being in the Deep Dark alone is not enough: both conditions must be satisfied |

{% hint style="warning" %}
These are **declared rules** from this datapack snapshot, not guarantees of encounters. Presets, spawn limits, Cobblemon's own logic, and other mods can affect actual results.
{% endhint %}

---

## ✨ Understanding rarity

Ordinary spawns use **four main rarity categories**. This datapack also includes a special **Boss** bucket for specific encounter rules:

| ✨ Rarity | 📖 Meaning |
| --- | --- |
| 🟢 **Common** | Frequent encounter when the conditions are met. |
| 🔵 **Uncommon** | Less frequent encounter, but relatively accessible. |
| 🟣 **Rare** | Uncommon encounter that often requires more specific conditions. |
| 🟡 **Ultra Rare** | Encounters that are extremely difficult to obtain naturally. |
| 🔴 **Boss (special)** | A separate group used by special spawn rules, including some Alpha Pokémon and herd definitions. It is not a fifth ordinary rarity. |

The **Ultra Rare** categories notably include many starters, fossils, Paradox Pokémon, Ultra Beasts, as well as Legendary and Mythical Pokémon.

The **relative weights** of eligible rules and active conditions also matter. An Ultra Rare Pokémon has no universal fixed spawn percentage: multiple species and rules can compete in the same environment.

{% hint style="info" %}
💡 <strong>A Pokémon can have multiple spawns with different rarities.</strong> Its rarity therefore depends on the spawn rule being used, and not solely on the species.
{% endhint %}

---

## 🔎 Finding Pokémon in-game

### `/checkspawns`

The `/checkspawns` command displays the Pokémon that may spawn **at your current position**.

It notably takes your environment and the conditions currently active into account.

{% hint style="warning" %}
⚠️ A Pokémon displayed by `/checkspawns` may still require an additional condition: <strong>time, weather, light, altitude, structure, specific block, or spawn position</strong>.
{% endhint %}

---

## 🤖 Searching for a Pokémon on Discord

The **@Our Story** Discord bot also allows you to search for spawn data without having to explore the different biomes in-game.

### 📋 Commands

| 🌐 Language | 💬 Command |
| --- | --- |
| 🇬🇧 English | `/where <pokemon_name>` |
| 🇫🇷 French | `/tesou <pokemon_name>` |
| 🇩🇪 German | `/wobistdu <pokemon_name>` |
| 🇯🇵 Japanese / Rōmaji | `/doko <pokemon_name>` |

Treat these results as **spawn conditions**, not live GPS coordinates for a Pokémon. The bot and the server also need data matching the datapack version being played.

The results may notably display:

- 🌍 The dimension
- 🧭 Biome tags
- 🗺️ The relevant biomes
- 📊 Encounter level
- ✨ Its rarity
- ⚙️ Special conditions

{% hint style="success" %}
<p align="center">
## 💡 Prepare your hunt before you set out!

The bot allows you to quickly identify the dimensions and environments where you should search for a rare Pokémon.
</p>
{% endhint %}

---

## 🧠 Tips for your hunts

### 🌍 Prepare your search

Before setting out to search for a Pokémon:

- 🔎 Check its **spawn biomes**
- 🌤️ Check the **time and weather**
- ✨ Identify its **rarity**
- 🌍 Check whether it spawns in a **specific dimension**
- 🏛️ Check whether a **structure** is required

### 🗺️ Explore intelligently

Don't limit yourself to the surface:

- ⛰️ Explore **mountains and high elevations**
- 🕳️ Descend into **caves and deep areas**
- 🌊 Explore **oceans and the ocean floor**
- 🎣 Consider **fishing**
- 🏛️ Inspect **structures and special locations**
- 🌳 Check **treetops and foliage**

### 🛠️ Use the right tools

| 🛠️ Tool | 🎯 Purpose |
| --- | --- |
| `/checkspawns` | Check possible spawns **around you** |
| 🤖 **@Our Story** | Search for spawns **remotely** |
| 📖 [Biome Tags](pokemons-guides/biome-tags-reference.md) | Understand biome categories |
| ☁️ [Aether Guide](mods-guides/worlds_and_dimensions/aether.md) | Explore Aether spawns |
| 🌑 [The Otherside Guide](mods-guides/worlds_and_dimensions/deeper_and_darker.md) | Explore The Otherside spawns |

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
Have a question about spawns, missing information, or an error to report?<br>
Join us on <a href="https://discord.gg/kb8NSTF45n">Discord</a> and contact <strong>@FabLeKebab</strong> for anything related to the wiki, or <strong>@Levels</strong> for anything related to the modpack.
</p>
{% endhint %}
