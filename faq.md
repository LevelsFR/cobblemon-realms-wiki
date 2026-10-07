# ❓ Frequently Asked Questions

<p align="center"> 
Do you have a question about <strong>Cobblemon Realms</strong>? Here you will find answers to the most common issues and questions regarding installation, gameplay, multiplayer, and how the modpack works.
</p>

{% hint style="info" %}
## 💡 <strong>Can't find your answer?</strong><br>

<p align="center"> 
Check the related guides or contact us directly on <a href="https://discord.gg/kb8NSTF45n">Discord</a>.
</p>
{% endhint %}

***

## 🛠️ Installation & Performance

### 🚫 My game crashes on launch

A startup crash may be caused by **Java**, **memory**, incomplete downloads, or manually added mods.

{% stepper %}
{% step %}
☕ Confirm **Minecraft 1.21.1**, **NeoForge**, **Java 21**, and your exact Cobblemon Realms version.
{% endstep %}

{% step %}
💾 Start with around **8 GB of allocated RAM** if your computer has enough memory. Do not allocate all available RAM to Minecraft.
{% endstep %}

{% step %}
📦 Confirm that every file downloaded correctly and no outdated mods remain after an update.
{% endstep %}

{% step %}
🧪 Try **a fresh, clean profile** in CurseForge. Back up your worlds before making changes.
{% endstep %}

{% step %}
📄 If it still crashes, collect `logs/latest.log` and any report under `crash-reports/`. Explain when it happens and whether you added other mods.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
**Exit code 1** alone cannot identify the cause. The final lines may describe a secondary error: share the **complete log** after removing private information.
{% endhint %}

📘 [Installation Guide](installation.md) · [Report an Issue](report-a-bug.md)

### 📦 How can I update without breaking my profile?

For significant **v6.x** updates, prefer **a separate CurseForge profile**. Back up your worlds from `saves/` and test the new profile before transferring personal data. Do not merge your old `mods/`, `config/`, `kubejs/`, or `defaultconfigs/` into the fresh version.

📘 [Updating the Client](installation.md)

### 🖥️ What is the difference between the client and Server Pack?

The **client** runs the game on your computer; the **Server Pack** provides the files for a dedicated server. They are not interchangeable and must match **the exact same Cobblemon Realms version**.

📘 [Server Installation](installation.md)

### 💾 How much RAM should I allocate?

We recommend allocating **8 GB of RAM** to the modpack for a comfortable experience. However, avoid allocating all available memory to Minecraft: your operating system and other applications need to retain enough resources.

### 🎮 Can I play on a low-end PC?

This mainly depends on your processor, graphics card, and available memory. To improve performance, install the modpack on an **SSD**, keep your graphics drivers up to date, and adjust the graphics settings if necessary.

📘 [View the installation guide](installation.md)

### 🧩 Can I add other mods?

This is technically possible, but **strongly discouraged**. Additional mods may cause incompatibilities, crashes, or alter the modpack's functionality and balance.

{% hint style="warning" %}
⚠️ Issues caused by manually adding mods cannot be guaranteed to be supported by the team.
{% endhint %}

### ✨ Can I use shaders?

Yes, provided that your system can handle them and that the shaders you use are compatible with your modpack version. However, keep in mind that they can have a significant impact on performance.

***

## 🐾 Gameplay & Progression

### 🏝️ Where does my adventure begin in v6?

Your adventure begins on **Spawn Island**, the central hub of Cobblemon Realms.

Your first main objective is to meet **Professor Oak** and choose your starter. If you are unsure where to go, speak with **Mila, the Spawn Guide**, near the starting area. She can teleport you to important locations such as Professor Oak's Laboratory, the PokéCenter, PokéShop, Village, and League Hall.

📘 [Getting Started](getting-started.md)

### 🎒 What do I receive when starting my adventure?

After choosing your starter with Professor Oak, you receive a **Pokédex** and a **Badge Box**.

The Pokédex helps you follow your Pokémon discoveries, while the Badge Box tracks the Gym Badges earned during the **Gym World Tour**.

### 🔄 How do I return to Spawn Island?

You can return to the main hub at any time with:

- `/spawn`
- `/hub`

### 🏆 How does the Gym World Tour work?

The official v6 trainer progression is a single continuous **Gym World Tour**. You battle Gym Leaders in a strict order, earn their Badges, and progressively increase your personal Level Cap.

The current World Tour contains **66 Gym Leaders across 8 regions**, from Kanto through Paldea. Your adventure starts with a personal **Level Cap of 15**.

📘 [Gym World Tour & Level Caps](pokemons-guides/levelcap-and-trainers.md)

### 🚪 How do I enter my next Gym challenge?

There are two official ways to reach your next eligible Gym Leader:

- use either **League Door** inside the League Hall on Spawn Island;
- discover an **Arena Entrance** while exploring the Overworld.

Both methods lead to the same next challenge in your current Gym World Tour progression.

### 🏅 I defeated a Gym Leader, where is my Badge?

Gym Badges are no longer handled as normal physical item drops during the official progression.

Your victory is recorded through the integrated **PokeBadges** system and the Badge is displayed in your **Badge Box**. Gym victories are also tracked through dedicated advancements.

{% hint style="info" %}
💡 If you are looking for a Badge item in your normal inventory after a Gym victory, this is not the intended v6 progression flow.
{% endhint %}

### 🥊 Does the Battle Court PvP advance my Gym progression?

No. The **Battle Court** inside the League Hall is completely separate from the Gym World Tour.

PvP battles do not award Gym Badges, increase your Level Cap, defeat a Gym Leader, or advance your official progression.

### 🏁 Where does the current Gym World Tour end?

The currently implemented Gym World Tour ends after the **Paldea Gym Leaders**, with **Grusha** as the final Gym challenge.

The **Elite Four** and **League Champion** stages are not currently implemented in this progression and are planned as future extensions.

### 🐾 Why aren't any Pokémon spawning around me?

The **Biome Expanded Spawns v6.x** datapack checks many conditions: **biomes and tags, time, weather, light, altitude, structures, nearby blocks, and spawn position**.

- 🔎 `/checkspawns` helps inspect possible spawns around your current location.
- 🤖 On the **Our Story** Discord, `/where` and `/tesou` let you look up a species' spawn rules.
- 🎣 Some encounters use **fishing** or **herd** mechanics.

**Even with the correct biome and conditions, an encounter is never guaranteed.**

📘 [Pokémon and Spawns](pokemon-and-spawns.md)

### 🔎 Can I search Pokémon information directly through JEI?

Yes. The Cobblemon JEI integration included in the current v6 branch can search Pokémon by information such as **type, ability, biome, generation, form, and dropped items**.

Filters can be combined, and values containing spaces can be quoted, for example `biome:"flower forest"`. The interface also provides Pokémon evolution navigation, move information, and reverse drop recipes showing which Pokémon can drop an item.

### 📈 Where can I find information about level caps?

**Level caps**, trainers, gyms, and the various stages of progression are covered in a dedicated guide.

📘 [Trainers & Level Caps](pokemons-guides/levelcap-and-trainers.md)

### 🌟 How do I obtain Legendary Pokémon?

Legendary Pokémon have their own requirements and methods of obtaining them. Some information may also depend on the player's progression.

📘 [Myths & Legends](pokemons-guides/myths-and-legends-legendaries.md)

### ✨ Are there Pokémon exclusive to Cobblemon Realms?

Yes. The modpack notably adds **special forms, unique mechanics, and exclusive evolutions** that are not available in standard Cobblemon.

📘 [Discover Exclusive Content](pokemons-exclusives/mewtwo-exclusive-forms.md)

***

## 🌐 Multiplayer

### 👥 Can I start in single-player and then join a server?

**Often, yes**, by moving the **entire world** to a compatible server. However, progress can also depend on **player data, UUIDs, and mod-specific saved data**. Copying an inventory alone is not a guarantee.

Make a **complete backup**, test the move with a copy, and verify your Pokémon, quests, and progression data.

📘 [Multiplayer Servers](multiplayer-servers.md) · [Migration Guide](installation.md)

### 🖥️ Can I host the modpack myself?

Yes. You can host your own server, provided that you have a suitable setup and use the versions required by the modpack.

📘 [Multiplayer Servers](multiplayer-servers.md)

### ☁️ Can I use a free host like Aternos or Minehut?

**Only if the provider really supports this modpack.** It must allow **NeoForge 1.21.1**, **Java 21**, the **complete Server Pack**, and enough memory. Some free hosts restrict custom files or cannot install all required mods.

Check the provider's limitations first: a generic "Minecraft server" offer does not guarantee compatibility.

***

## 📚 Wiki & Community

### 🐛 I found a bug, what should I do?

Before reporting an issue, make sure it is not caused by a manually added mod or an incorrect installation.

If the issue persists, [report the issue](report-a-bug.md) so it can be investigated and potentially fixed.

### ✏️ Can I contribute to the wiki?

The wiki is **maintained directly by the team**. You can still help by **reporting mistakes**, proposing clarifications, providing reliable sources, or suggesting translations through Discord or GitHub issues.

The team reviews proposals before making editorial changes.

📘 [Support the Project](contributing.md) · [Report a Wiki Issue](report-a-bug.md)

### 🧭 I don't know which page to check

If you don't know where to start, here are some useful starting points:

| 🔎 I'm looking for... | 📖 Check... |
| --- | --- |
| Installing the modpack | [Installation Guide](installation.md) |
| Starting my adventure | [Getting Started](getting-started.md) |
| Understanding the Gym World Tour and Badges | [Gym World Tour & Level Caps](pokemons-guides/levelcap-and-trainers.md) |
| Playing multiplayer | [Multiplayer Servers](multiplayer-servers.md) |
| Understanding spawns | [Pokémon and Spawns](pokemon-and-spawns.md) |
| Understanding Legendaries | [Myths & Legends](pokemons-guides/myths-and-legends-legendaries.md) |
| Following quests | [Quests](quests.md) |
| Reporting a bug | [Report an Issue](report-a-bug.md) |
| Finding older releases | [Version History](version-history.md) |

***

{% hint style="success" %}
## 💬 Need Help?

<p align="center">
If you can't find the answer to your question in the wiki, join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>.<br>
<strong>@FabLeKebab</strong> can help you with questions regarding the wiki, while <strong>@Levels</strong> handles questions related to the modpack.
</p>
{% endhint %}
