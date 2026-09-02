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

Launch issues can have several causes: incorrect Java version, insufficient memory, incomplete installation, or corrupted modpack files.

First of all, make sure you are using **Java 21** and that enough memory is allocated to the game.

📘 [View the installation guide](installation.md)

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

Spawns depend on many factors: **biome, time, weather, player position, and spawn conditions**.

Use `/checkspawns` to check which Pokémon are likely to spawn in your area.

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

Yes. A save started in single-player can be transferred to a server without having to restart your progression, provided that the world data is transferred correctly.

📘 [Multiplayer Servers](multiplayer-servers.md)

### 🖥️ Can I host the modpack myself?

Yes. You can host your own server, provided that you have a suitable setup and use the versions required by the modpack.

📘 [Multiplayer Servers](multiplayer-servers.md)

### ☁️ Can I use a free host like Aternos or Minehut?

This is technically possible, but performance may be limited for such a large modpack. We recommend choosing a host with sufficient **RAM**, **Java 21 support**, and access to the server files.

***

## 📚 Wiki & Community

### 🐛 I found a bug, what should I do?

Before reporting an issue, make sure it is not caused by a manually added mod or an incorrect installation.

If the issue persists, [report the issue](report-a-bug.md) so it can be investigated and potentially fixed.

### ✏️ Can I contribute to the wiki?

Yes! Contributions are welcome. You can:

- Correct errors;
- Improve existing information;
- Add new information;
- Translate pages;
- Report outdated information.

📘 [Contribution Guide](contributing.md)

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

***

{% hint style="success" %}
## 💬 Need Help?

<p align="center">
If you can't find the answer to your question in the wiki, join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>.<br>
<strong>@FabLeKebab</strong> can help you with questions regarding the wiki, while <strong>@Levels</strong> handles questions related to the modpack.
</p>
{% endhint %}
