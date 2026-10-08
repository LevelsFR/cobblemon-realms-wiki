# 🐎 Pokémon Riding — Cobblemon 1.8.1

{% hint style="info" %}
<p align="center">
This guide covers <strong>only the native riding system in Cobblemon 1.8.1</strong>, on Minecraft 1.21.1. The Pokémon, styles, seats and stat ranges below are based on the <strong>official Cobblemon riding reference</strong> and the official 1.8.0/1.8.1 release notes. Versioned species JSON files are linked below for independent checking.
</p>
{% endhint %}

{% hint style="warning" %}
The <strong>native riding tables</strong> below show <strong>unmodified Cobblemon 1.8.1</strong>. Additional mounts and riding settings from <strong>Cobblemon Ride+</strong>, Mega Showdown and Lost Lore are documented <strong>separately, further down this page</strong>.
{% endhint %}

---

## 🎮 How to Ride a Pokémon

{% stepper %}
{% step %}
🐾 Send out a Pokémon that supports riding.
{% endstep %}

{% step %}
🖱️ **Crouch (Shift by default) and right-click** the Pokémon, then select the ride interaction.
{% endstep %}

{% step %}
🎮 Use your movement keys. **Controls vary by ride style**: land, water and air mounts do not always steer the same way.
{% endstep %}

{% step %}
🚶 Dismount with your normal Minecraft dismount key (**Shift** by default).
{% endstep %}
{% endstepper %}

{% hint style="info" %}
**No saddle is required.** A Pokémon can have more than one environment-specific ride style: for example, **Charizard** supports **Standard** on land and **Bird** in the air. If a mount has several seats, more than one player may ride at once.
{% endhint %}

---

## 🧭 Native Riding Styles

### 🌍 Land

| Style | How it behaves |
| --- | --- |
| **Standard** (`land/horse`) | Similar to a Minecraft horse: steer with your view, strafe with left/right and sprint using stamina. |

The official wiki also documents a **Vehicle** style as a general riding concept, but the **native 1.8.1 species roster uses Standard for its land entries**. No Vehicle-style Pokémon is listed below.

### 🌊 Water and Other Liquids

| Style | How it behaves |
| --- | --- |
| **Boat** (`liquid/boat`) | Moves at the surface; left/right steer the mount while the camera can turn independently. |
| **Submarine** (`liquid/submarine`) | Can dive and travel underwater, as well as move at the surface. |
| **Dolphin** (`liquid/dolphin`) | Can dive and leap out of the water. |

### ☁️ Air

| Style | How it behaves |
| --- | --- |
| **Bird** (`air/bird`) | Flight with view-based steering, strafing and the ability to hover. An alternative Elytra-like control mode is available in configuration. |
| **Jet** (`air/jet`) | Fast, forward-oriented flight. Cannot hover; use **Jump** and **Crouch** to control altitude. |
| **Hover** (`air/hover`) | Slow, precise movement in all directions, similar to Creative flight; height limits affect stamina usage. |
| **Rocket** (`air/rocket`) | Hover-like controls with faster forward travel. |

{% hint style="info" %}
Ride styles are **behavior definitions**, not Pokémon types or combat moves. A Water-type Pokémon is not automatically a water mount, and a Flying-type Pokémon is not necessarily rideable.
{% endhint %}

---

## 📊 Riding Stats

These are **separate from battle stats** such as Speed, Attack and Defense. Each entry in the lists below shows the **configured range (0–100)** from which the individual Pokémon's riding stats are assigned.

| Stat | Effect |
| --- | --- |
| **Speed** | Maximum travel speed |
| **Acceleration** | How quickly the mount approaches its top speed |
| **Skill** | Turning/handling; for **Hover**, this affects deceleration |
| **Jump** | Jump height on land; diving, gliding, takeoff or height performance depending on style |
| **Stamina** | How long style-specific abilities such as sprinting, sustained flight or higher-altitude hovering remain usable |

**Jump** is interpreted differently by different mounts: it affects diving for **Submarine**, diving and leaps for **Dolphin**, gliding for **Bird**, takeoff speed for **Jet**, altitude without extra stamina for **Hover**, and ascent for **Rocket**.

{% hint style="success" %}
Some riding stats can be improved using [Aprijuices](../cobblemon-craft/aprijuice-guide.md). Riding stats are **not the same values as the Pokémon's battle stats**.
{% endhint %}

---

## ⚙️ Riding Configuration

The native client riding settings can be adjusted in `config/cobblemon/main.json`. For example, if riding camera roll makes you uncomfortable, change the **existing** setting to `"disableRoll": true`.

- **Invert pitch/yaw/roll** and **axis sensitivity** change camera or steering preferences.
- **Remember Riding Camera** affects how your chosen camera mode is restored after dismounting.
- The available settings may also be exposed through the Cobblemon configuration interface.

{% hint style="warning" %}
Do **not** replace the entire configuration file with a short JSON example. Back it up and modify only the existing options you need. Server configuration and added mods may also affect riding behavior.
{% endhint %}

---

## 🆕 The 10 Native Mounts Added in Cobblemon 1.8

All ten additions from **Cobblemon 1.8.0** remain part of the **1.8.1** native riding roster:

| Pokémon | Seats | Land | Water | Air |
| --- | :---: | --- | --- | --- |
| **Pidgeot** | 1 | Standard | — | Bird |
| **Crobat** | 1 | Standard | — | Bird |
| **Skarmory** | 1 | Standard | — | Bird |
| **Milotic** | 1 | Standard | Dolphin | — |
| **Archeops** | 1 | Standard | — | Bird |
| **Goodra** | 1 | Standard | — | — |
| **Goodra (Hisui)** | 1 | Standard | — | — |
| **Drampa** | 1 | Standard | Boat | Bird |
| **Duraludon** | 1 | Standard | — | — |
| **Archaludon** | 1 | Standard | — | — |

**Seats and forms:** the seat count belongs to each Pokémon's native riding definition. Notable examples include **Wailord (19)**, **Dondozo (7)**, **Camerupt (6)** and **Metagross (4)**. **Blastoise has 1 seat in 1.8.1** (an unintended extra seat was fixed in this patch).

{% hint style="info" %}
The **1.8.0** update also introduced support for **conditional seats**, including conditions based on properties such as Alpha status. A supported seat count does not mean every Pokémon form or model necessarily uses every possible locator.
{% endhint %}

---

## 🗂️ Complete Native Mounts and Seats

**99 species or form entries** are listed for the native riding system in **Cobblemon 1.8.1**. This overview shows their environments, ride styles and declared seat counts. The detailed stat ranges follow in the three tables below.

{% hint style="info" %}
Seat counts come from the native riding definitions. Some seats may be conditional (for example by form or Alpha status) or depend on model seat locators. A configured seat does not guarantee an available passenger position on every visual variant.
{% endhint %}

<details>
<summary><strong>📖 Show all 99 mount entries</strong></summary>

| Pokémon | Seats | Land | Water | Air |
| --- | :---: | --- | --- | --- |
| Venusaur | 1 | Standard | — | — |
| Charizard | 1 | Standard | — | Bird |
| Blastoise | 1 | Standard | Submarine | Rocket |
| Pidgeot | 1 | Standard | — | Bird |
| Parasect | 1 | Standard | — | — |
| Arcanine | 1 | Standard | — | — |
| Dewgong | 2 | Standard | Dolphin | — |
| Rhyhorn | 1 | Standard | — | — |
| Rhydon | 1 | Standard | — | — |
| Seaking | 1 | — | Submarine | — |
| Mr. Mime | 1 | Standard | — | — |
| Tauros | 1 | Standard | — | — |
| Tauros (Paldea-Aqua) | 1 | Standard | Boat | — |
| Tauros (Paldea-Blaze) | 1 | Standard | — | — |
| Tauros (Paldea-Combat) | 1 | Standard | — | — |
| Gyarados | 1 | Standard | Dolphin | Jet |
| Lapras | 1 | Standard | Boat | — |
| Aerodactyl | 1 | Standard | — | Bird |
| Articuno | 1 | Standard | — | Bird |
| Zapdos | 1 | Standard | — | Bird |
| Moltres | 1 | Standard | — | Bird |
| Dragonite | 2 | Standard | Dolphin | Jet |
| Ariados | 1 | Standard | — | — |
| Crobat | 1 | Standard | — | Bird |
| Girafarig | 1 | Standard | — | — |
| Forretress | 1 | — | — | Hover |
| Heracross | 1 | Standard | — | Bird |
| Ursaring | 1 | Standard | — | — |
| Piloswine | 1 | Standard | — | — |
| Mantine | 1 | Standard | Dolphin | Bird |
| Skarmory | 1 | Standard | — | Bird |
| Lugia | 1 | Standard | Dolphin | Bird |
| Ho-Oh | 2 | Standard | — | Bird |
| Slaking | 1 | Standard | — | — |
| Sharpedo | 1 | — | Dolphin | — |
| Wailmer | 1 | Standard | Submarine | — |
| Wailord | 19 | Standard | Submarine | — |
| Camerupt | 6 | Standard | — | — |
| Flygon | 1 | Standard | — | Bird |
| Altaria | 1 | Standard | — | Bird |
| Claydol | 1 | — | — | Hover |
| Milotic | 1 | Standard | Dolphin | — |
| Tropius | 2 | Standard | — | Bird |
| Relicanth | 1 | — | Submarine | — |
| Salamence | 2 | Standard | — | Bird |
| Metagross | 4 | Standard | — | Hover |
| Latias | 1 | Standard | — | Jet |
| Latios | 1 | Standard | — | Jet |
| Staraptor | 1 | Standard | — | Bird |
| Bastiodon | 2 | Standard | — | — |
| Gastrodon | 1 | Standard | — | — |
| Drifblim | 1 | — | — | Hover |
| Honchkrow | 1 | Standard | — | Bird |
| Bronzong | 2 | — | — | Hover |
| Garchomp | 1 | Standard | Boat | Jet |
| Magnezone | 1 | — | — | Hover |
| Lickilicky | 2 | Standard | — | — |
| Rhyperior | 1 | Standard | — | — |
| Togekiss | 1 | Standard | — | Jet |
| Mamoswine | 3 | Standard | — | — |
| Dusknoir | 1 | — | — | Hover |
| Serperior | 1 | Standard | — | — |
| Zebstrika | 1 | Standard | — | — |
| Scolipede | 1 | Standard | — | — |
| Darmanitan | 1 | Standard | — | — |
| Crustle | 4 | Standard | — | — |
| Archeops | 1 | Standard | — | Bird |
| Klinklang | 1 | — | — | Hover |
| Golurk | 3 | Standard | — | Rocket |
| Bouffalant | 1 | Standard | — | — |
| Braviary | 1 | Standard | — | Bird |
| Braviary (Hisui) | 1 | Standard | — | Bird |
| Hydreigon | 2 | Standard | — | Bird |
| Volcarona | 1 | Standard | — | Bird |
| Skiddo | 1 | Standard | — | — |
| Gogoat | 1 | Standard | — | — |
| Tyrantrum | 2 | Standard | — | — |
| Goodra | 1 | Standard | — | — |
| Goodra (Hisui) | 1 | Standard | — | — |
| Noivern | 1 | Standard | — | Bird |
| Mudsdale | 1 | Standard | — | — |
| Drampa | 1 | Standard | Boat | Bird |
| Dhelmise | 1 | Standard | Submarine | — |
| Corviknight | 2 | Standard | — | Bird |
| Duraludon | 1 | Standard | — | — |
| Dragapult | 1 | Standard | Dolphin | Jet |
| Wyrdeer | 1 | Standard | — | — |
| Ursaluna | 2 | Standard | — | — |
| Sneasler | 1 | Standard | — | — |
| Kilowattrel | 1 | Standard | — | Bird |
| Espathra | 1 | Standard | — | — |
| Revavroom | 2 | Standard | — | — |
| Cyclizar | 1 | Standard | — | — |
| Orthworm | 1 | Standard | — | — |
| Dondozo | 7 | Standard | Submarine | — |
| Farigiraf | 1 | Standard | — | — |
| Dudunsparce | 2 | Standard | — | — |
| Dudunsparce (Three-Segment) | 2 | Standard | — | — |
| Archaludon | 1 | Standard | — | — |

</details>

---

## 📋 Complete Native Ride Stats — 1.8.1

The three expandable tables preserve the **configured stats for each environment separately**. A Pokémon may appear in several tables with **different values**. Abbreviations: **Accel.**, **Skill**, **Speed**, **Stam.**, **Jump**.

These are the **native Cobblemon** listings, not the additional Cobblemon Ride+ mounts.

---

<details>

<summary><strong>🐾 Ground Mount List</strong></summary>

---

| Pokémon | Accel. | Skill | Speed | Stam. | Jump |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Venusaur | 40-75 | 10-40 | 30-55 | 45-85 | 40-60 |
| Charizard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Blastoise | 30-50 | 10-35 | 30-65 | 15-35 | 15-30 |
| Pidgeot | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Parasect | 50-70 | 45-65 | 15-30 | 15-30 | 0-15 |
| Arcanine | 70-90 | 40-80 | 45-70 | 35-80 | 45-65 |
| Dewgong | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Rhyhorn | 5-20 | 5-25 | 25-60 | 40-80 | 5-15 |
| Rhydon | 55-75 | 30-60 | 5-15 | 55-90 | 20-30 |
| Mr. Mime | 20-40 | 15-45 | 25-45 | 35-60 | 15-35 |
| Tauros | 15-50 | 15-30 | 55-75 | 35-55 | 25-35 |
| Tauros (Paldea-Aqua) | 15-50 | 15-30 | 50-70 | 40-60 | 25-30 |
| Tauros (Paldea-Blaze) | 20-55 | 15-30 | 55-75 | 30-50 | 25-40 |
| Tauros (Paldea-Combat) | 15-50 | 15-30 | 55-75 | 35-55 | 25-35 |
| Gyarados | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Lapras | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Aerodactyl | 55-75 | 15-45 | 10-20 | 20-45 | 25-35 |
| Articuno | 70-90 | 30-60 | 10-20 | 40-80 | 25-50 |
| Zapdos | 70-90 | 30-60 | 10-20 | 40-80 | 25-50 |
| Moltres | 70-90 | 30-60 | 10-20 | 40-80 | 25-50 |
| Dragonite | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Ariados | 55-85 | 45-65 | 30-45 | 15-30 | 25-45 |
| Crobat | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Girafarig | 40-65 | 20-35 | 25-45 | 30-50 | 30-45 |
| Heracross | 55-70 | 40-65 | 15-30 | 35-50 | 35-50 |
| Ursaring | 45-80 | 20-45 | 30-40 | 30-65 | 25-40 |
| Piloswine | 30-50 | 30-45 | 10-25 | 35-70 | 5-10 |
| Mantine | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Skarmory | 50-65 | 20-35 | 30-45 | 30-55 | 25-35 |
| Lugia | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Ho-Oh | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Slaking | 0-20 | 0-20 | 25-65 | 60-100 | 25-40 |
| Wailmer | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Wailord | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Camerupt | 45-60 | 10-30 | 25-35 | 50-80 | 10-25 |
| Flygon | 60-75 | 15-25 | 15-25 | 25-40 | 15-30 |
| Altaria | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Milotic | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Tropius | 30-50 | 30-50 | 15-25 | 55-85 | 10-20 |
| Salamence | 60-80 | 5-20 | 10-20 | 35-70 | 15-25 |
| Metagross | 50-70 | 35-50 | 10-20 | 55-70 | 30-45 |
| Latias | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Latios | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Staraptor | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Bastiodon | 15-25 | 0-5 | 15-35 | 50-90 | 0-5 |
| Gastrodon | 70-90 | 0-15 | 5-10 | 10-20 | 0-10 |
| Honchkrow | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Garchomp | 65-75 | 40-70 | 40-55 | 30-45 | 30-50 |
| Lickilicky | 0-15 | 0-5 | 10-25 | 20-40 | 40-60 |
| Rhyperior | 45-75 | 25-55 | 5-15 | 75-100 | 10-25 |
| Togekiss | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Mamoswine | 30-40 | 20-30 | 20-35 | 60-90 | 10-20 |
| Serperior | 65-80 | 0-30 | 25-45 | 35-55 | 0-5 |
| Zebstrika | 65-85 | 50-75 | 35-75 | 25-45 | 35-45 |
| Scolipede | 20-25 | 25-35 | 45-75 | 50-70 | 25-35 |
| Darmanitan | 45-65 | 15-25 | 40-50 | 35-60 | 35-45 |
| Crustle | 15-45 | 25-35 | 1-5 | 60-85 | 0-5 |
| Archeops | 55-65 | 10-25 | 25-40 | 20-40 | 25-35 |
| Golurk | 65-80 | 40-65 | 35-50 | 60-85 | 40-60 |
| Bouffalant | 50-75 | 15-30 | 45-65 | 55-70 | 20-30 |
| Braviary | 90-100 | 15-30 | 10-20 | 15-30 | 10-20 |
| Braviary (Hisui) | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Hydreigon | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Volcarona | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Skiddo | 40-65 | 20-40 | 30-45 | 30-45 | 30-40 |
| Gogoat | 65-75 | 40-60 | 45-65 | 45-65 | 40-60 |
| Tyrantrum | 50-70 | 40-60 | 20-30 | 70-100 | 40-55 |
| Goodra | 60-70 | 20-35 | 20-35 | 55-85 | 45-60 |
| Goodra (Hisui) | 50-60 | 10-25 | 10-25 | 70-100 | 20-35 |
| Noivern | 65-85 | 30-50 | 35-50 | 10-20 | 30-45 |
| Mudsdale | 50-70 | 30-60 | 30-40 | 70-100 | 30-40 |
| Drampa | 10-40 | 30-65 | 0-10 | 55-85 | 30-65 |
| Dhelmise | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Corviknight | 60-80 | 30-50 | 15-30 | 60-80 | 30-45 |
| Duraludon | 35-60 | 5-25 | 10-20 | 40-80 | 20-25 |
| Dragapult | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Wyrdeer | 60-80 | 40-60 | 45-65 | 55-70 | 45-55 |
| Ursaluna | 30-40 | 10-25 | 40-65 | 65-85 | 25-35 |
| Sneasler | 75-90 | 65-85 | 35-45 | 10-20 | 30-40 |
| Kilowattrel | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Espathra | 30-65 | 15-40 | 55-70 | 25-35 | 40-55 |
| Revavroom | 0-5 | 25-40 | 70-85 | 20-40 | 15-20 |
| Cyclizar | 65-85 | 35-60 | 50-80 | 30-60 | 35-45 |
| Orthworm | 15-25 | 0-15 | 30-40 | 25-75 | 0-5 |
| Dondozo | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Farigiraf | 40-60 | 35-50 | 45-60 | 50-70 | 45-55 |
| Dudunsparce | 30-50 | 30-40 | 5-25 | 30-75 | 20-45 |
| Dudunsparce (Three-Segment) | 35-60 | 30-40 | 5-25 | 35-85 | 25-55 |
| Archaludon | 45-70 | 5-25 | 5-10 | 50-90 | 25-30 |

</details>

---

<details>
  
<summary><strong>🌊 Water Mount List</strong></summary>

---

| Pokémon | Accel. | Skill | Speed | Stam. | Jump |
| :---: | :---: | :---: | :---: | :---: | :---: | 
| Blastoise | 45-65 | 50-75 | 35-65 | 35-70 | 30-50 |
| Dewgong | 50-75 | 30-65 | 25-45 | 25-50 | 25-50 |
| Seaking | 35-70 | 25-55 | 35-65 | 20-40 | 15-35 |
| Tauros (Paldea-Aqua) | 55-65 | 40-55 | 30-40 | 30-65 | 20-30 |
| Gyarados | 40-60 | 35-65 | 30-55 | 45-75 | 40-70 |
| Lapras | 30-55 | 50-75 | 25-40 | 45-75 | 20-30 |
| Dragonite | 30-65 | 35-50 | 30-50 | 60-90 | 55-85 |
| Mantine | 30-55 | 45-75 | 20-40 | 20-40 | 40-80 |
| Lugia | 80-100 | 75-95 | 60-80 | 80-100 | 75-90 |
| Sharpedo | 55-85 | 25-65 | 55-85 | 20-45 | 45-75 |
| Wailmer | 30-55 | 30-55 | 30-50 | 40-85 | 25-40 |
| Wailord | 20-45 | 30-55 | 20-40 | 65-100 | 40-55 |
| Milotic | 40-55 | 65-90 | 45-70 | 45-60 | 25-40 |
| Relicanth | 25-40 | 40-80 | 15-35 | 50-90 | 50-75 |
| Garchomp | 75-85 | 10-25 | 35-60 | 5-10 | 40-80 |
| Drampa | 10-25 | 50-70 | 10-30 | 50-65 | 20-40 |
| Dhelmise | 40-55 | 20-30 | 15-30 | 45-65 | 70-100 |
| Dragapult | 60-85 | 55-70 | 50-65 | 25-35 | 40-55 |
| Dondozo | 45-65 | 50-75 | 25-45 | 60-75 | 10-25 |

</details>

---

<details>

<summary><strong>🪶 Flying Mount List</strong></summary>

---

| Pokémon | Accel. | Skill | Speed | Stam. | Jump |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Charizard | 45-75 | 55-85 | 30-65 | 45-75 | 30-65 |
| Blastoise | 5-40 | 30-60 | 5-15 | 2-20 | 10-20 |
| Pidgeot | 45-70 | 35-65 | 30-65 | 25-40 | 55-80 |
| Gyarados | 35-60 | 45-65 | 15-50 | 15-55 | 20-45 |
| Aerodactyl | 35-65 | 35-70 | 45-75 | 40-65 | 45-75 |
| Articuno | 70-85 | 80-100 | 65-90 | 70-90 | 65-90 |
| Zapdos | 65-90 | 70-85 | 80-100 | 65-85 | 70-85 |
| Moltres | 70-85 | 65-90 | 70-85 | 80-100 | 65-90 |
| Dragonite | 35-50 | 50-85 | 40-60 | 50-85 | 50-70 |
| Crobat | 50-75 | 65-85 | 65-85 | 25-40 | 45-65 |
| Forretress | 20-40 | 25-45 | 15-25 | 0-5 | 5-10 |
| Heracross | 40-65 | 55-85 | 35-50 | 35-55 | 0-5 |
| Mantine | 75-100 | 30-50 | 20-40 | 0-0 | 25-45 |
| Skarmory | 35-50 | 30-55 | 30-50 | 50-75 | 50-70 |
| Lugia | 65-85 | 60-80 | 60-80 | 65-90 | 75-90 |
| Ho-Oh | 75-95 | 65-85 | 75-90 | 80-100 | 75-100 |
| Flygon | 40-75 | 40-85 | 50-80 | 45-65 | 45-60 |
| Altaria | 25-45 | 40-50 | 25-35 | 70-90 | 25-45 |
| Claydol | 65-85 | 50-70 | 10-20 | 5-10 | 35-70 |
| Tropius | 20-45 | 20-40 | 20-45 | 55-80 | 70-90 |
| Salamence | 60-75 | 40-65 | 60-75 | 65-85 | 60-85 |
| Metagross | 60-75 | 35-55 | 45-75 | 10-25 | 25-45 |
| Latias | 70-95 | 70-95 | 75-90 | 85-100 | 85-100 |
| Latios | 70-95 | 70-95 | 85-100 | 70-95 | 80-100 |
| Staraptor | 45-70 | 25-55 | 45-70 | 45-70 | 45-65 |
| Drifblim | 10-20 | 15-25 | 5-15 | 40-80 | 60-100 |
| Honchkrow | 20-40 | 30-50 | 20-35 | 55-75 | 50-70 |
| Bronzong | 40-65 | 25-40 | 15-30 | 10-20 | 30-50 |
| Garchomp | 50-70 | 50-60 | 70-80 | 30-50 | 20-70 |
| Magnezone | 65-90 | 35-50 | 20-35 | 5-15 | 45-65 |
| Togekiss | 20-30 | 45-65 | 20-30 | 70-100 | 10-20 |
| Dusknoir | 45-60 | 60-70 | 15-25 | 0-5 | 45-80 |
| Archeops | 55-75 | 60-85 | 10-20 | 0-5 | 30-65 |
| Klinklang | 40-60 | 40-60 | 30-40 | 5-10 | 15-25 |
| Golurk | 10-35 | 15-30 | 45-75 | 30-50 | 25-40 |
| Braviary | 35-55 | 30-50 | 45-70 | 55-85 | 35-55 |
| Braviary (Hisui) | 30-50 | 30-50 | 40-65 | 60-90 | 40-60 |
| Hydreigon | 35-55 | 30-60 | 45-60 | 75-100 | 5-10 |
| Volcarona | 45-65 | 55-75 | 30-50 | 65-90 | 25-35 |
| Noivern | 40-65 | 50-85 | 55-90 | 30-45 | 55-85 |
| Drampa | 10-25 | 45-60 | 10-30 | 80-100 | 0-10 |
| Corviknight | 35-55 | 20-35 | 25-40 | 80-100 | 80-100 |
| Dragapult | 60-85 | 55-70 | 55-90 | 25-35 | 45-80 |
| Kilowattrel | 35-50 | 40-65 | 30-45 | 40-65 | 50-70 |

</details>

---

<!-- cr-addon-riding-start -->
## 🧩 Addon Mounts for Cobblemon 1.8.1

The preceding tables remain strictly **native**. This section covers settings added or overridden by addons **targeting Cobblemon 1.8.1**, without mixing them into vanilla values. Some mod stat values exceed 100.

{% hint style="warning" %}
**Documented conflict:** Mega Showdown 1.3.0 declares **two seats for Blastoise / Mega Blastoise**, whereas native Cobblemon 1.8.1 declares one for Blastoise. Loaded files and data override priority determine the effective in-game result.
{% endhint %}

## 🔷 Cobblemon: Mega Showdown

### Mega Showdown: species addition definitions (1/3)

The following records are sourced from **Mega Showdown 1.3.0** JSON, not vanilla stats. Some already-rideable Pokémon have overridden parameters.

| Pokémon | Seats | Land | Water | Air | Origin |
| --- | :---: | --- | --- | --- | --- |
| Ho-Oh | 1 | Standard | — | Bird | Native override |
| Entei | 1 | Standard | — | — | Addon addition |
| Lugia | 1 | Standard | Dolphin | Bird | Native override |
| Lunala | 1 | — | — | Bird | Addon addition |
| Arceus | 1 | Standard | — | Bird | Addon addition |
| Kyogre | 1 | — | Dolphin | — | Addon addition |
| Zekrom | 1 | Standard | — | Bird | Addon addition |
| Keldeo | 1 | Standard | — | — | Addon addition |
| Wo-Chien | 1 | Standard | — | — | Addon addition |
| Groudon | 1 | Standard | — | — | Addon addition |
| Genesect | 1 | Standard | — | Bird | Addon addition |
| Reshiram | 1 | Standard | — | Bird | Addon addition |

<details>
<summary><strong>📊 Exact configured stat ranges</strong></summary>

| Pokémon | Environment | Style | Accel. | Skill | Speed | Stamina | Jump |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Ho-Oh | Air | Bird | 20-100 | 50-100 | 25-50 | 30-70 | 25-50 |
| Ho-Oh | Land | Standard | 90-100 | 15-30 | 10-20 | 15-30 | 10-20 |
| Entei | Land | Standard | 30-60 | 20-50 | 20-40 | 60-120 | 30-65 |
| Lugia | Air | Bird | 20-100 | 50-100 | 70-95 | 130-150 | 25-50 |
| Lugia | Land | Standard | 90-100 | 15-30 | 10-20 | 15-30 | 10-20 |
| Lugia | Water | Dolphin | 55-85 | 10-40 | 55-85 | 80-135 | 30-65 |
| Lunala | Air | Bird | 45-75 | 55-85 | 30-80 | 70-100 | 30-65 |
| Arceus | Air | Bird | 30-65 | 30-65 | 55-85 | 80-160 | 30-65 |
| Arceus | Land | Standard | 10-40 | 30-65 | 30-65 | 30-65 | 55-85 |
| Kyogre | Water | Dolphin | 55-85 | 10-40 | 55-85 | 80-135 | 30-65 |
| Zekrom | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Zekrom | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Keldeo | Land | Standard | 30-60 | 20-50 | 40-50 | 100-145 | 30-65 |
| Wo-Chien | Land | Standard | 20-30 | 45-65 | 20-30 | 80-100 | 5-20 |
| Groudon | Land | Standard | 30-60 | 20-50 | 20-40 | 80-135 | 30-65 |
| Genesect | Air | Bird | 41-60 | 41-60 | 80-160 | 80-120 | 41-60 |
| Genesect | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Reshiram | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Reshiram | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |

</details>

Source files : [hooh.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/hooh.json), [entei.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/entei.json), [lugia.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/lugia.json), [lunala.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/lunala.json), [arceus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/arceus.json), [kyogre.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/kyogre.json), [zekrom.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/zekrom.json), [keldeo.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/keldeo.json), [wochien.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/wochien.json), [groudon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/groudon.json), [genesect.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/genesect.json), [reshiram.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/reshiram.json)

### Mega Showdown: species addition definitions (2/3)

| Pokémon | Seats | Land | Water | Air | Origin |
| --- | :---: | --- | --- | --- | --- |
| Type: Null | 1 | Standard | — | — | Addon addition |
| Miraidon | 1 | Standard | Boat | Bird | Addon addition |
| Koraidon | 1 | Standard | Boat | Bird | Addon addition |
| Melmetal | 1 | Standard | — | — | Addon addition |
| Virizion | 1 | Standard | — | — | Addon addition |
| Silvally | 1 | Standard | — | — | Addon addition |
| Glastrier | 1 | Standard | — | — | Addon addition |
| Spectrier | 1 | Standard | — | — | Addon addition |
| Volcanion | 1 | Standard | — | — | Addon addition |
| Latias | 1 | Standard | Dolphin | Jet | Native override |
| Latios | 1 | Standard | Dolphin | Jet | Native override |
| Yveltal | 1 | Standard | Boat | Bird | Addon addition |

<details>
<summary><strong>📊 Exact configured stat ranges</strong></summary>

| Pokémon | Environment | Style | Accel. | Skill | Speed | Stamina | Jump |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Type: Null | Land | Standard | 30-60 | 40-70 | 20-40 | 60-95 | 30-65 |
| Miraidon | Air | Bird | 45-75 | 55-85 | 30-65 | 30-65 | 30-65 |
| Miraidon | Land | Standard | 65-85 | 35-60 | 50-85 | 30-60 | 35-45 |
| Miraidon | Water | Boat | 0-20 | 35-60 | 30-65 | 30-60 | 35-45 |
| Koraidon | Air | Bird | 45-75 | 55-85 | 30-65 | 30-65 | 30-65 |
| Koraidon | Land | Standard | 65-85 | 35-60 | 50-85 | 30-60 | 35-45 |
| Koraidon | Water | Boat | 0-20 | 35-60 | 30-65 | 30-60 | 35-45 |
| Melmetal | Land | Standard | 30-60 | 20-50 | 20-40 | 80-135 | 30-65 |
| Virizion | Land | Standard | 75-85 | 60-80 | 60-80 | 45-65 | 40-60 |
| Silvally | Land | Standard | 30-60 | 20-50 | 20-40 | 30-65 | 30-65 |
| Glastrier | Land | Standard | 30-60 | 20-50 | 20-40 | 60-120 | 30-65 |
| Spectrier | Land | Standard | 50-70 | 20-50 | 50-70 | 60-120 | 30-65 |
| Volcanion | Land | Standard | 30-60 | 20-50 | 20-40 | 60-105 | 30-65 |
| Latias | Air | Jet | 70-90 | 100-130 | 75-85 | 82-120 | 41-60 |
| Latias | Land | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Latias | Water | Dolphin | 0-20 | 60-80 | 41-60 | 60-90 | 41-60 |
| Latios | Air | Jet | 70-90 | 100-130 | 85-95 | 82-120 | 41-60 |
| Latios | Land | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Latios | Water | Dolphin | 0-20 | 60-80 | 41-60 | 60-90 | 41-60 |
| Yveltal | Air | Bird | 61-68 | 150-180 | 41-75 | 162-220 | 41-60 |
| Yveltal | Land | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Yveltal | Water | Boat | 0-20 | 21-40 | 41-60 | 0-20 | 41-60 |

</details>

Source files : [typenull.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/typenull.json), [miraidon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/miraidon.json), [koraidon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/koraidon.json), [melmetal.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/melmetal.json), [virizion.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/virizion.json), [silvally.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/silvally.json), [glastrier.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/glastrier.json), [spectrier.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/spectrier.json), [volcanion.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/volcanion.json), [latias.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/latias.json), [latios.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/latios.json), [yveltal.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/yveltal.json)

### Other Mega Showdown species and forms (3/3, part A)

| Pokémon | Seats | Land | Water | Air | Origin |
| --- | :---: | --- | --- | --- | --- |
| Absol (Mega-Z) | 1 | Standard | — | — | Addon form/species |
| Delphox (Mega) | 2 | Standard | — | Jet | Addon form/species |
| Zygarde | 1 | Standard | — | — | Addon form/species |
| Zygarde (10%) | 0* | Standard | — | — | Addon form/species |
| Zygarde (10%-C) | 0* | Standard | — | — | Addon form/species |
| Zygarde (50%-C) | 1 | Standard | — | — | Addon form/species |
| Zygarde (Complete) | 0* | Standard | — | — | Addon form/species |
| Zygarde (Core) | 0* | Standard | — | — | Addon form/species |
| Venusaur | 1 | Standard | — | — | Native override |
| Venusaur (Mega) | 1 | Standard | — | — | Addon form/species |
| Kyurem | 1 | Standard | — | — | Addon form/species |
| Kyurem (White) | 1 | Standard | — | Bird | Addon form/species |
| Kyurem (Black) | 1 | Standard | — | Bird | Addon form/species |
| Eternatus | 1 | Standard | — | Bird | Addon form/species |
| Enamorus (Therian) | 1 | Standard | — | Bird | Addon form/species |
| Tornadus | 1 | Standard | — | Bird | Addon form/species |
| Zacian | 1 | Standard | — | — | Addon form/species |
| Landorus | 1 | Standard | — | Bird | Addon form/species |
| Duraludon | 1 | Standard | — | — | Native override |

*A ride behaviour defined with zero explicit seats does not confirm that a player seat is usable.*

<details>
<summary><strong>📊 Exact configured stat ranges</strong></summary>

| Pokémon | Environment | Style | Accel. | Skill | Speed | Stamina | Jump |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Absol (Mega-Z) | Land | Standard | 75-85 | 60-80 | 50-70 | 35-55 | 30-50 |
| Delphox (Mega) | Air | Jet | 50-70 | 35-55 | 65-85 | 60-75 | 40-60 |
| Delphox (Mega) | Land | Standard | 50-70 | 35-55 | 35-45 | 60-75 | 10-25 |
| Zygarde | Land | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (10%) | Land | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (10%-C) | Land | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (50%-C) | Land | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (Complete) | Land | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Zygarde (Core) | Land | Standard | 30-60 | 20-50 | 20-40 | 90-130 | 30-65 |
| Venusaur | Land | Standard | 40-75 | 10-40 | 30-55 | 45-85 | 40-60 |
| Venusaur (Mega) | Land | Standard | 40-75 | 10-40 | 30-55 | 45-85 | 40-60 |
| Kyurem | Land | Standard | 30-60 | 20-50 | 20-40 | 30-65 | 30-65 |
| Kyurem (White) | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Kyurem (White) | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Kyurem (Black) | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Kyurem (Black) | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Eternatus | Air | Bird | 41-60 | 41-60 | 21-40 | 81-130 | 41-60 |
| Eternatus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Enamorus (Therian) | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Enamorus (Therian) | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Tornadus | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Tornadus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Zacian | Land | Standard | 30-60 | 20-50 | 50-80 | 60-95 | 30-65 |
| Landorus | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Landorus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Duraludon | Land | Standard | 35-60 | 5-25 | 10-20 | 40-80 | 20-25 |

</details>

JSON sources : [absol_mega_z.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/absol_mega_z.json), [delphox_mega.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species_additions/delphox_mega.json), [zygarde.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation6/zygarde.json), [melmetal.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation7b/melmetal.json), [venusaur.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/venusaur.json), [kyurem.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/kyurem.json), [eternatus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/eternatus.json), [enamorus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8a/enamorus.json), [tornadus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/tornadus.json), [zacian.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/zacian.json), [landorus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/landorus.json), [duraludon.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/duraludon.json)

### Other Mega Showdown species and forms (3/3, part B)

| Pokémon | Seats | Land | Water | Air | Origin |
| --- | :---: | --- | --- | --- | --- |
| Thundurus | 1 | Standard | — | Bird | Addon form/species |
| Ursaluna | 2 | Standard | — | — | Native override |
| Ursaluna (Bloodmoon) | 0* | Standard | — | — | Addon form/species |
| Charizard | 1 | Standard | — | Bird | Native override |
| Charizard (Mega-X) | 1 | Standard | — | Bird | Addon form/species |
| Charizard (Mega-Y) | 1 | Standard | — | Bird | Addon form/species |
| Zamazenta | 1 | Standard | — | — | Addon form/species |
| Metagross | 4 | Standard | — | Hover | Native override |
| Metagross (Mega) | 4 | Standard | — | Hover | Addon form/species |
| Lapras | 1 | Standard | Boat | — | Native override |
| Blastoise | 2 | Standard | Submarine | Rocket | Native override |
| Blastoise (Mega) | 2 | Standard | Submarine | Rocket | Addon form/species |
| Swampert (Mega) | 2 | Standard | Dolphin | — | Addon form/species |
| Rayquaza | 4 | Standard | Boat | Jet | Addon form/species |
| Necrozma | 1 | — | — | Hover | Addon form/species |
| Darmanitan | 1 | Standard | — | — | Native override |

*0* indicates no explicit seat: actual rideability is unconfirmed.

<details>
<summary><strong>📊 Exact configured stat ranges</strong></summary>

| Pokémon | Environment | Style | Accel. | Skill | Speed | Stamina | Jump |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| Thundurus | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Thundurus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Ursaluna | Land | Standard | 30-40 | 10-25 | 40-65 | 65-85 | 25-35 |
| Ursaluna (Bloodmoon) | Land | Standard | 30-40 | 10-25 | 40-65 | 65-85 | 25-35 |
| Charizard | Air | Bird | 45-75 | 55-85 | 30-65 | 45-75 | 30-65 |
| Charizard | Land | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Charizard (Mega-X) | Air | Bird | 45-75 | 55-85 | 30-65 | 45-75 | 30-65 |
| Charizard (Mega-X) | Land | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Charizard (Mega-Y) | Air | Bird | 45-75 | 55-85 | 30-65 | 45-75 | 30-65 |
| Charizard (Mega-Y) | Land | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Zamazenta | Land | Standard | 30-60 | 20-50 | 50-80 | 60-95 | 30-65 |
| Metagross | Air | Hover | 60-75 | 35-55 | 45-75 | 10-25 | 25-45 |
| Metagross | Land | Standard | 50-70 | 35-50 | 10-20 | 55-70 | 30-45 |
| Metagross (Mega) | Air | Hover | 60-75 | 35-55 | 45-75 | 10-25 | 25-45 |
| Metagross (Mega) | Land | Standard | 50-70 | 35-50 | 10-20 | 55-70 | 30-45 |
| Lapras | Land | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Lapras | Water | Boat | 30-55 | 50-75 | 25-40 | 45-75 | 20-30 |
| Blastoise | Air | Rocket | 5-40 | 30-60 | 5-15 | 2-20 | 10-20 |
| Blastoise | Land | Standard | 30-50 | 10-35 | 30-65 | 15-35 | 15-30 |
| Blastoise | Water | Submarine | 45-65 | 50-75 | 35-65 | 35-70 | 30-50 |
| Blastoise (Mega) | Air | Rocket | 5-40 | 30-60 | 5-15 | 2-20 | 10-20 |
| Blastoise (Mega) | Land | Standard | 30-50 | 10-35 | 30-65 | 15-35 | 15-30 |
| Blastoise (Mega) | Water | Submarine | 45-65 | 50-75 | 35-65 | 35-70 | 30-50 |
| Swampert (Mega) | Land | Standard | 80-85 | 35-70 | 10-35 | 45-65 | 40-60 |
| Swampert (Mega) | Water | Dolphin | 75-85 | 60-80 | 30-50 | 45-65 | 40-60 |
| Rayquaza | Air | Jet | 61-68 | 150-180 | 41-75 | 162-220 | 41-60 |
| Rayquaza | Land | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Rayquaza | Water | Boat | 0-20 | 21-40 | 41-60 | 0-20 | 41-60 |
| Necrozma | Air | Hover | 65-90 | 41-80 | 34-70 | 20-25 | 45-65 |
| Darmanitan | Land | Standard | 45-65 | 15-25 | 40-50 | 35-60 | 35-45 |

</details>

JSON sources : [machamp.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/machamp.json), [thundurus.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/thundurus.json), [ursaluna.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8a/ursaluna.json), [charizard.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/charizard.json), [zamazenta.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation8/zamazenta.json), [butterfree.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/butterfree.json), [metagross.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation3/metagross.json), [lapras.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/lapras.json), [blastoise.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation1/blastoise.json), [swampert.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation3/swampert.json), [rayquaza.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation3/rayquaza.json), [necrozma.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation7/necrozma.json), [darmanitan.json](https://github.com/yajatkaul/CobblemonMegaShowdown/blob/ba22a7317f35543cbef7e5e28cb26fd068391516/common/src/main/resources/data/cobblemon/species/generation5/darmanitan.json)

## 📜 Lost Lore 3.2.0

Special Pokémon and forms with **explicit `riding.behaviours` declarations** in Lost Lore. The five Starmobile variants each declare four seats.

| Pokémon / form | Seats | Land | Water | Air |
| --- | :---: | --- | --- | --- |
| MT | 1 | Standard | — | — |
| MT2 | 1 | Standard | — | — |
| Black Fog | 1 | Standard | — | Hover |
| Tyranitar (Black) | 1 | Standard | — | — |
| Dialga (Primal) | 1 | Standard | — | Bird |
| Revavroom (Segin) | 4 | Standard | — | — |
| Revavroom (Caph) | 4 | Standard | — | — |
| Revavroom (Ruchbah) | 4 | Standard | — | — |
| Revavroom (Schedar) | 4 | Standard | — | — |
| Revavroom (Navi) | 4 | Standard | — | — |
| Lugia (Shadow) | 1 | Standard | Dolphin | Bird |
| Mewtwo (Armored) | 1 | Standard | Dolphin | Jet |
| Mewtwo (Mega-Armored) | 1 | Standard | Dolphin | Jet |
| Mewtwo (Shadow) | 1 | Standard | Dolphin | Jet |

<details>
<summary><strong>📊 Exact Lost Lore configured stats</strong></summary>

| Pokémon | Environment | Style | Accel. | Skill | Speed | Stamina | Jump |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: |
| MT | Land | Standard | 50-75 | 35-55 | 20-40 | 125-150 | 10-25 |
| MT2 | Land | Standard | 50-75 | 35-55 | 20-40 | 125-150 | 10-25 |
| Black Fog | Air | Hover | 60-75 | 35-55 | 55-85 | 65-80 | 25-45 |
| Black Fog | Land | Standard | 50-70 | 35-50 | 10-20 | 55-70 | 30-45 |
| Tyranitar (Black) | Land | Standard | 50-75 | 35-55 | 40-60 | 60-85 | 10-25 |
| Dialga (Primal) | Air | Bird | 45-75 | 55-85 | 30-80 | 45-77 | 30-65 |
| Dialga (Primal) | Land | Standard | 55-65 | 20-55 | 40-70 | 55-99 | 20-80 |
| Revavroom (Segin) | Land | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Revavroom (Caph) | Land | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Revavroom (Ruchbah) | Land | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Revavroom (Schedar) | Land | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Revavroom (Navi) | Land | Standard | 40-60 | 5-20 | 85-105 | 105-125 | 5-15 |
| Lugia (Shadow) | Air | Bird | 20-100 | 50-100 | 85-110 | 150-180 | 25-50 |
| Lugia (Shadow) | Land | Standard | 90-100 | 15-30 | 10-20 | 15-30 | 10-20 |
| Lugia (Shadow) | Water | Dolphin | 55-85 | 10-40 | 55-85 | 80-135 | 30-65 |
| Mewtwo (Armored) | Air | Jet | 50-70 | 60-80 | 70-95 | 95-105 | 40-60 |
| Mewtwo (Armored) | Land | Standard | 65-75 | 35-55 | 15-25 | 30-45 | 10-25 |
| Mewtwo (Armored) | Water | Dolphin | 55-75 | 10-30 | 45-65 | 85-105 | 30-65 |
| Mewtwo (Mega-Armored) | Air | Jet | 50-70 | 60-80 | 70-95 | 95-105 | 40-60 |
| Mewtwo (Mega-Armored) | Land | Standard | 65-75 | 35-55 | 15-25 | 30-45 | 10-25 |
| Mewtwo (Mega-Armored) | Water | Dolphin | 55-75 | 10-30 | 45-65 | 85-105 | 30-65 |
| Mewtwo (Shadow) | Air | Jet | 50-70 | 60-80 | 70-95 | 95-105 | 40-60 |
| Mewtwo (Shadow) | Land | Standard | 65-75 | 35-55 | 15-25 | 30-45 | 10-25 |
| Mewtwo (Shadow) | Water | Dolphin | 55-75 | 10-30 | 45-65 | 85-105 | 30-65 |

</details>

{% hint style="warning" %}
The Lost Lore changelog mentions riding fixes for **clone starters, Virus Groudon and Illusion Rayquaza**. Their species addition files define no new `riding.behaviours`; they may inherit existing properties. **They are not counted as new explicit riding definitions** without in-game verification. **Snowman Snorlax** uses `riding.behaviour` (singular), not `behaviours`; its ride functionality is unconfirmed.
{% endhint %}

JSON sources : [mt.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species/generation5/mt.json), [mt2.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species/generation5/mt2.json), [blackfog.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species/lost_lore/blackfog.json), [black_tyranitar.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/black_tyranitar.json), [primal_dialga.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/primal_dialga.json), [starmobile_revavroom.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/starmobile_revavroom.json), [shadow_lugia.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/shadow_lugia.json), [armored_mewtwo.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/armored_mewtwo.json), [shadow_mewtwo.json](https://github.com/Lvnatic-T/Lost-Lore/blob/227a317d44000d32fc3feea9e059468325bd4ab1/common/src/main/resources/data/cobblemon/species_additions/shadow_mewtwo.json)

## 🧬 Navas ZA Mega (ZaMega 1.8.1+1.8)

The supplied `zamega-neoforge-1.8.1+1.8.jar` was inspected directly. Its JSON files contain **no `riding` declarations**. It adds forms for **Darkrai, Heatran, Zygarde, Magearna, Zeraora and Tatsugiri**, plus **Floette Ange**. None can be listed as a **new confirmed riding definition** from ZaMega itself. Some forms could inherit riding from their base species or another addon, but independent rideability is not established.

{% hint style="info" %}
The JAR declares `cobblemon >= 1.8.0` and requires `mega_showdown`. These findings apply to the **supplied JAR**, not necessarily to later releases.
{% endhint %}

<!-- cr-rideplus-start -->
## 🐎 Cobblemon Ride+ (v1.2.7b)

Created by **LevelsFR**, Ride+ targets **Minecraft 1.21.1 / Cobblemon 1.8.1** for Fabric and NeoForge. The source repository contains **118 riding species addition JSON files**. The tables below document **Ride+ definitions** separately from native mounts and other addons.

{% hint style="info" %}
“Also native” means that a species already appears in the native riding roster and must **not be double-counted**. Ride+ data may also overlap Mega Showdown or Lost Lore. International names match the JSON species identifiers.
{% endhint %}

{% hint style="warning" %}
This is an audit of JSON definitions, **not an in-game test**. Seats may depend on forms, model locators and load priority. **Alolan Exeggutor** uses a head-bone anchor; **Dondozo** has Ride+ settings distinct from native Cobblemon.
{% endhint %}

Source: [Cobblemon Ride+ on GitHub](https://github.com/LevelsFR/Cobblemon-Ride-Plus), `master` branch, version `1.2.7b` (source access may be restricted).

<details>
<summary><strong>📖 View all Ride+ riding species</strong></summary>

| Pokémon | Seats | Land | Water | Air | Origin |
| --- | :---: | --- | --- | --- | --- |
| Absol | 1 | Standard | — | — | Ride+ addition |
| Aggron | 1 | Standard | — | — | Ride+ addition |
| Ampharos | 1 | Standard | — | — | Ride+ addition |
| Arbok | 1 | Standard | — | — | Ride+ addition |
| Armarouge | 1 | Standard | — | — | Ride+ addition |
| Aurorus | 1 | Standard | — | — | Ride+ addition |
| Basculegion | 1 | — | Dolphin | — | Ride+ addition |
| Beartic | 1 | Standard | — | — | Ride+ addition |
| Bewear | 1 | Standard | — | — | Ride+ addition |
| Breloom | 1 | Standard | — | — | Ride+ addition |
| Butterfree | 1 | — | — | Bird | Ride+ addition |
| Carracosta | 1 | Standard | Dolphin | — | Ride+ addition |
| Centiskorch | 1 | Standard | — | — | Ride+ addition |
| Ceruledge | 1 | Standard | — | — | Ride+ addition |
| Cetitan | 1 | Standard | — | — | Ride+ addition |
| Chesnaught | 1 | Standard | — | — | Ride+ addition |
| Clodsire | 1 | Standard | — | — | Ride+ addition |
| Cloyster | 1 | Standard | Submarine | — | Ride+ addition |
| Copperajah | 1 | Standard | — | — | Ride+ addition |
| Dialga | 1 | Standard | — | — | Ride+ addition |
| Dondozo | 1 | — | Dolphin | — | Also native |
| Donphan | 1 | Standard | — | — | Ride+ addition |
| Dracovish | 1 | Standard | Submarine | — | Ride+ addition |
| Dragalge | 1 | — | Dolphin | — | Ride+ addition |
| Drapion | 1 | Standard | — | — | Ride+ addition |
| Druddigon | 1 | Standard | — | — | Ride+ addition |
| Eelektross | 1 | — | Dolphin | — | Ride+ addition |
| Emboar | 1 | Standard | — | — | Ride+ addition |
| Empoleon | 1 | Standard | Dolphin | — | Ride+ addition |
| Enamorus | 1 | Standard | — | Bird | Ride+ addition |
| Exeggutor | 1 | Standard | — | — | Ride+ addition |
| Exploud | 1 | Standard | — | — | Ride+ addition |
| Feraligatr | 1 | Standard | Dolphin | — | Ride+ addition |
| Flamigo | 1 | Standard | — | Bird | Ride+ addition |
| Floatzel | 1 | — | Dolphin | — | Ride+ addition |
| Garganacl | 1 | Standard | — | — | Ride+ addition |
| Gengar | 1 | Standard | — | Hover | Ride+ addition |
| Gliscor | 1 | Standard | — | Bird | Ride+ addition |
| Gorebyss | 1 | Standard | Dolphin | — | Ride+ addition |
| Gouging Fire | 1 | Standard | — | — | Ride+ addition |
| Hariyama | 1 | Standard | — | — | Ride+ addition |
| Haxorus | 1 | Standard | — | — | Ride+ addition |
| Hippowdon | 1 | Standard | — | — | Ride+ addition |
| Houndoom | 1 | Standard | — | — | Ride+ addition |
| Huntail | 1 | Standard | Dolphin | — | Ride+ addition |
| Hydrapple | 1 | Standard | — | — | Ride+ addition |
| Iron Leaves | 1 | Standard | — | — | Ride+ addition |
| Jellicent | 1 | — | Dolphin | — | Ride+ addition |
| Kingdra | 1 | — | Dolphin | — | Ride+ addition |
| Kingler | 1 | Standard | Submarine | — | Ride+ addition |
| Klawf | 1 | Standard | — | — | Ride+ addition |
| Kommo-o | 1 | Standard | — | — | Ride+ addition |
| Krookodile | 1 | Standard | — | — | Ride+ addition |
| Kyurem | 1 | Standard | — | — | Ride+ addition |
| Landorus | 1 | Standard | — | Bird | Ride+ addition |
| Lanturn | 1 | — | Dolphin | — | Ride+ addition |
| Ludicolo | 1 | Standard | Dolphin | — | Ride+ addition |
| Lunala | 1 | — | — | Bird | Ride+ addition |
| Luxray | 1 | Standard | — | — | Ride+ addition |
| Mabosstiff | 1 | Standard | — | — | Ride+ addition |
| Manectric | 1 | Standard | — | — | Ride+ addition |
| Meganium | 1 | Standard | — | — | Ride+ addition |
| Mightyena | 1 | Standard | — | — | Ride+ addition |
| Miltank | 1 | Standard | — | — | Ride+ addition |
| Nidoking | 1 | Standard | — | — | Ride+ addition |
| Nihilego | 1 | — | — | Bird | Ride+ addition |
| Ninetales | 1 | Standard | — | — | Ride+ addition |
| Noctowl | 1 | Standard | — | Bird | Ride+ addition |
| Oinkologne | 1 | Standard | — | — | Ride+ addition |
| Overqwil | 1 | — | Dolphin | — | Ride+ addition |
| Palafin | 1 | — | Dolphin | — | Ride+ addition |
| Pangoro | 1 | Standard | — | — | Ride+ addition |
| Pelipper | 1 | Standard | — | Bird | Ride+ addition |
| Pyroar | 1 | Standard | — | — | Ride+ addition |
| Raging Bolt | 1 | Standard | — | — | Ride+ addition |
| Raichu | 1 | Standard | — | — | Ride+ addition |
| Rampardos | 1 | Standard | — | — | Ride+ addition |
| Rapidash | 1 | Standard | — | — | Ride+ addition |
| Raticate | 1 | Standard | — | — | Ride+ addition |
| Rayquaza | 4 | Standard | Boat | Jet | Ride+ addition |
| Regice | 1 | Standard | — | — | Ride+ addition |
| Regidrago | 1 | Standard | — | — | Ride+ addition |
| Regieleki | 1 | Standard | Boat | Jet | Ride+ addition |
| Regigigas | 1 | Standard | — | — | Ride+ addition |
| Regirock | 1 | Standard | — | — | Ride+ addition |
| Registeel | 1 | Standard | — | — | Ride+ addition |
| Revavroom | 1 | Standard | — | — | Also native |
| Rillaboom | 1 | Standard | — | — | Ride+ addition |
| Samurott | 1 | Standard | Dolphin | — | Ride+ addition |
| Sandslash | 1 | Standard | — | — | Ride+ addition |
| Sawsbuck | 1 | Standard | — | — | Ride+ addition |
| Sceptile | 1 | Standard | — | — | Ride+ addition |
| Shiftry | 1 | Standard | — | — | Ride+ addition |
| Skeledirge | 1 | Standard | — | — | Ride+ addition |
| Slowbro | 1 | Standard | — | — | Ride+ addition |
| Snorlax | 1 | Standard | — | — | Ride+ addition |
| Solgaleo | 1 | Standard | — | — | Ride+ addition |
| Steelix | 1 | Standard | — | — | Ride+ addition |
| Stonjourner | 1 | Standard | — | — | Ride+ addition |
| Stoutland | 1 | Standard | — | — | Ride+ addition |
| Swampert | 1 | Standard | Dolphin | — | Ride+ addition |
| Swellow | 1 | Standard | — | Bird | Ride+ addition |
| Talonflame | 1 | Standard | — | Bird | Ride+ addition |
| Tangrowth | 1 | Standard | — | — | Ride+ addition |
| Tentacruel | 1 | Standard | Dolphin | — | Ride+ addition |
| Thundurus | 1 | Standard | — | Bird | Ride+ addition |
| Torkoal | 1 | Standard | — | — | Ride+ addition |
| Tornadus | 1 | Standard | — | Bird | Ride+ addition |
| Torterra | 1 | Standard | — | — | Ride+ addition |
| Toucannon | 1 | Standard | — | Bird | Ride+ addition |
| Toxicroak | 1 | Standard | — | — | Ride+ addition |
| Turtonator | 1 | Standard | — | — | Ride+ addition |
| Tyranitar | 1 | Standard | — | — | Ride+ addition |
| Tyrantrum | 1 | Standard | — | — | Also native |
| Veluza | 1 | — | Dolphin | — | Ride+ addition |
| Walking Wake | 1 | Standard | Dolphin | — | Ride+ addition |
| Walrein | 1 | Standard | Dolphin | — | Ride+ addition |
| Zarude | 1 | Standard | — | — | Ride+ addition |
<!-- cr-rideplus-list-next -->

</details>

<details>
<summary><strong>📊 Detailed Ride+ riding stats</strong></summary>

| Pokémon | Environment | Style | Accel. | Skill | Speed | Stamina | Jump |
| --- | --- | --- | :---: | :---: | :---: | :---: | :---: | :---: |
| Absol | Land | Standard | 75-85 | 60-80 | 50-70 | 35-55 | 20-40 |
| Aggron | Land | Standard | 20-45 | 35-65 | 20-45 | 45-80 | 20-40 |
| Ampharos | Land | Standard | 25-45 | 35-60 | 20-40 | 30-55 | 10-25 |
| Arbok | Land | Standard | 65-80 | 0-30 | 25-45 | 35-55 | 0-5 |
| Armarouge | Land | Standard | 40-65 | 50-80 | 35-55 | 35-60 | 20-35 |
| Aurorus | Land | Standard | 30-55 | 25-45 | 20-40 | 50-80 | 15-30 |
| Basculegion | Water | Dolphin | 40-65 | 35-60 | 45-75 | 30-65 | 25-45 |
| Beartic | Land | Standard | 20-45 | 30-55 | 20-45 | 50-85 | 20-35 |
| Bewear | Land | Standard | 40-65 | 25-45 | 35-55 | 55-85 | 20-30 |
| Breloom | Land | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Butterfree | Air | Bird | 45-65 | 60-85 | 25-45 | 40-65 | 25-40 |
| Carracosta | Land | Standard | 15-35 | 30-55 | 15-35 | 45-80 | 10-25 |
| Carracosta | Water | Dolphin | 20-40 | 40-70 | 25-50 | 55-90 | 20-35 |
| Centiskorch | Land | Standard | 35-60 | 35-60 | 35-65 | 50-85 | 20-35 |
| Ceruledge | Land | Standard | 45-70 | 60-85 | 35-60 | 30-55 | 25-40 |
| Cetitan | Land | Standard | 20-45 | 30-55 | 20-40 | 45-80 | 10-25 |
| Chesnaught | Land | Standard | 30-55 | 35-60 | 25-45 | 55-85 | 20-35 |
| Clodsire | Land | Standard | 10-25 | 20-40 | 5-20 | 60-90 | 0-10 |
| Cloyster | Land | Standard | 30-50 | 10-35 | 30-65 | 15-35 | 15-30 |
| Cloyster | Water | Submarine | 45-65 | 50-75 | 35-65 | 35-70 | 30-50 |
| Copperajah | Land | Standard | 20-35 | 25-45 | 15-30 | 70-100 | 5-15 |
| Dialga | Land | Standard | 20-45 | 35-65 | 20-45 | 45-80 | 20-40 |
| Dondozo | Water | Dolphin | 15-35 | 25-45 | 25-50 | 75-100 | 10-25 |
| Donphan | Land | Standard | 30-45 | 25-40 | 30-50 | 60-90 | 20-35 |
| Dracovish | Land | Standard | 25-45 | 30-55 | 25-45 | 45-75 | 10-25 |
| Dracovish | Water | Submarine | 35-60 | 40-70 | 40-65 | 50-85 | 30-55 |
| Dragalge | Water | Dolphin | 35-60 | 40-65 | 30-55 | 45-75 | 20-40 |
| Drapion | Land | Standard | 20-40 | 35-60 | 20-40 | 40-70 | 15-30 |
| Druddigon | Land | Standard | 20-45 | 35-65 | 20-45 | 45-75 | 20-35 |
| Eelektross | Water | Dolphin | 35-65 | 45-75 | 30-60 | 45-75 | 20-40 |
| Emboar | Land | Standard | 25-45 | 35-60 | 25-45 | 45-80 | 20-35 |
| Empoleon | Land | Standard | 15-35 | 30-55 | 15-35 | 30-60 | 15-30 |
| Empoleon | Water | Dolphin | 30-60 | 45-75 | 30-60 | 40-80 | 25-45 |
| Enamorus | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Enamorus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Exeggutor | Land | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Exploud | Land | Standard | 20-40 | 25-45 | 15-35 | 30-55 | 15-30 |
| Feraligatr | Land | Standard | 30-55 | 25-45 | 30-50 | 45-70 | 25-40 |
| Feraligatr | Water | Dolphin | 40-65 | 40-70 | 35-60 | 45-80 | 30-55 |
| Flamigo | Land | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Flamigo | Air | Bird | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Floatzel | Water | Dolphin | 40-70 | 45-75 | 35-65 | 35-65 | 25-45 |
| Garganacl | Land | Standard | 10-25 | 30-55 | 10-30 | 55-85 | 10-20 |
| Gengar | Land | Standard | 35-55 | 45-65 | 25-40 | 30-55 | 20-35 |
| Gengar | Air | Hover | 25-45 | 55-80 | 20-35 | 30-60 | 25-45 |
| Gliscor | Air | Bird | 45-75 | 55-85 | 30-65 | 30-65 | 30-65 |
| Gliscor | Land | Standard | 55-65 | 10-25 | 25-40 | 20-30 | 15-25 |
| Gorebyss | Land | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Gorebyss | Water | Dolphin | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Gouging Fire | Land | Standard | 20-45 | 35-65 | 20-45 | 45-80 | 20-40 |
| Hariyama | Land | Standard | 15-35 | 30-55 | 15-35 | 45-80 | 10-25 |
| Haxorus | Land | Standard | 30-55 | 35-65 | 30-55 | 45-80 | 25-45 |
| Hippowdon | Land | Standard | 15-35 | 25-45 | 20-40 | 60-90 | 15-30 |
| Houndoom | Land | Standard | 55-80 | 30-60 | 40-65 | 25-55 | 25-45 |
| Huntail | Land | Standard | 10-40 | 80-100 | 10-40 | 10-40 | 10-40 |
| Huntail | Water | Dolphin | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Hydrapple | Land | Standard | 25-45 | 35-60 | 25-50 | 50-80 | 20-35 |
| Iron Leaves | Land | Standard | 55-80 | 45-70 | 55-85 | 35-60 | 25-45 |
| Jellicent | Water | Dolphin | 25-50 | 35-65 | 25-50 | 45-80 | 20-35 |
| Kingdra | Water | Dolphin | 45-70 | 45-75 | 40-70 | 35-70 | 20-40 |
| Kingler | Land | Standard | 25-50 | 20-40 | 20-40 | 30-55 | 10-25 |
| Kingler | Water | Submarine | 35-60 | 45-70 | 30-55 | 40-75 | 15-35 |
| Klawf | Land | Standard | 20-35 | 35-55 | 20-40 | 45-75 | 10-25 |
| Kommo-o | Land | Standard | 40-60 | 45-70 | 35-55 | 50-80 | 20-35 |
| Krookodile | Land | Standard | 25-50 | 40-70 | 30-55 | 45-80 | 20-40 |
| Kyurem | Land | Standard | 30-60 | 20-50 | 20-40 | 30-65 | 30-65 |
| Landorus | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Landorus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Lanturn | Water | Dolphin | 35-60 | 45-75 | 30-55 | 40-80 | 25-45 |
| Ludicolo | Land | Standard | 20-40 | 25-45 | 20-40 | 30-55 | 15-30 |
| Ludicolo | Water | Dolphin | 30-55 | 40-70 | 30-55 | 35-65 | 20-35 |
| Lunala | Air | Bird | 45-75 | 55-85 | 30-80 | 70-100 | 30-65 |
| Luxray | Land | Standard | 25-50 | 40-70 | 25-50 | 35-65 | 20-40 |
| Mabosstiff | Land | Standard | 35-55 | 30-50 | 35-60 | 40-70 | 20-35 |
| Manectric | Land | Standard | 35-65 | 30-55 | 35-65 | 25-45 | 20-40 |
| Meganium | Land | Standard | 35-60 | 20-45 | 25-45 | 50-80 | 30-55 |
| Mightyena | Land | Standard | 25-50 | 30-55 | 30-55 | 25-45 | 20-40 |
| Miltank | Land | Standard | 30-55 | 25-45 | 35-60 | 50-80 | 20-35 |
| Nidoking | Land | Standard | 65-75 | 40-70 | 40-55 | 30-45 | 30-50 |
| Nihilego | Air | Bird | 30-55 | 50-75 | 35-60 | 55-80 | 20-45 |
| Ninetales | Land | Standard | 65-85 | 40-75 | 45-70 | 30-60 | 40-60 |
| Noctowl | Air | Bird | 30-55 | 45-75 | 25-55 | 30-60 | 30-55 |
| Noctowl | Land | Standard | 35-55 | 15-30 | 20-35 | 20-35 | 10-25 |
| Oinkologne | Land | Standard | 20-40 | 20-40 | 25-45 | 40-70 | 15-30 |
| Overqwil | Water | Dolphin | 30-50 | 40-70 | 35-60 | 45-80 | 15-35 |
| Palafin | Water | Dolphin | 45-70 | 50-80 | 45-75 | 40-70 | 35-60 |
| Pangoro | Land | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Pelipper | Air | Bird | 40-70 | 45-75 | 35-65 | 25-50 | 30-55 |
| Pelipper | Land | Standard | 15-35 | 25-40 | 15-30 | 20-40 | 15-30 |
| Pyroar | Land | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Raging Bolt | Land | Standard | 20-45 | 35-65 | 20-45 | 45-80 | 20-40 |
| Raichu | Land | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Rampardos | Land | Standard | 20-45 | 35-60 | 15-35 | 40-75 | 20-35 |
| Rapidash | Land | Standard | 55-80 | 35-55 | 60-85 | 35-55 | 30-50 |
| Raticate | Land | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Rayquaza | Air | Jet | 61-68 | 150-180 | 41-75 | 162-220 | 41-60 |
| Rayquaza | Land | Standard | 41-60 | 21-40 | 21-40 | 61-80 | 41-60 |
| Rayquaza | Water | Boat | 0-20 | 21-40 | 41-60 | 0-20 | 41-60 |
| Regice | Land | Standard | 10-30 | 35-60 | 15-30 | 40-80 | 10-25 |
| Regidrago | Land | Standard | 25-45 | 35-60 | 35-55 | 45-80 | 25-45 |
| Regieleki | Air | Jet | 50-70 | 50-60 | 70-80 | 30-50 | 20-70 |
| Regieleki | Land | Standard | 65-75 | 40-70 | 40-55 | 30-45 | 30-50 |
| Regieleki | Water | Boat | 75-85 | 10-25 | 35-60 | 5-10 | 40-80 |
| Regigigas | Land | Standard | 10-25 | 60-85 | 18-32 | 70-100 | 10-22 |
| Regirock | Land | Standard | 10-30 | 35-60 | 15-30 | 40-80 | 10-25 |
| Registeel | Land | Standard | 10-30 | 35-60 | 15-30 | 40-80 | 10-25 |
| Revavroom | Land | Standard | 60-95 | 40-65 | 55-90 | 45-70 | 5-20 |
| Rillaboom | Land | Standard | 30-55 | 40-65 | 30-50 | 55-85 | 20-35 |
| Samurott | Land | Standard | 20-40 | 30-55 | 20-40 | 40-70 | 15-30 |
| Samurott | Water | Dolphin | 30-55 | 45-75 | 30-55 | 50-85 | 25-45 |
| Sandslash | Land | Standard | 45-65 | 45-65 | 45-65 | 45-65 | 45-65 |
| Sawsbuck | Land | Standard | 25-50 | 35-60 | 25-50 | 35-65 | 25-45 |
| Sceptile | Land | Standard | 40-70 | 45-75 | 40-70 | 30-55 | 35-60 |
| Shiftry | Land | Standard | 25-45 | 40-70 | 25-50 | 30-60 | 20-40 |
| Skeledirge | Land | Standard | 20-40 | 45-75 | 25-45 | 45-80 | 20-35 |
| Slowbro | Land | Standard | 20-35 | 20-35 | 18-30 | 65-95 | 10-20 |
| Snorlax | Land | Standard | 0-20 | 0-25 | 15-35 | 70-100 | 10-25 |
| Solgaleo | Land | Standard | 55-80 | 35-55 | 60-85 | 35-55 | 30-50 |
| Steelix | Land | Standard | 15-35 | 35-60 | 10-30 | 60-100 | 0-10 |
| Stonjourner | Land | Standard | 20-35 | 20-40 | 15-30 | 60-90 | 5-15 |
| Stoutland | Land | Standard | 25-45 | 35-60 | 25-50 | 50-80 | 20-35 |
| Swampert | Land | Standard | 80-85 | 35-70 | 10-35 | 45-65 | 40-60 |
| Swampert | Water | Dolphin | 75-85 | 60-80 | 30-50 | 45-65 | 40-60 |
| Swellow | Air | Bird | 40-70 | 45-75 | 35-65 | 25-50 | 30-55 |
| Swellow | Land | Standard | 15-35 | 25-40 | 15-30 | 20-40 | 15-30 |
| Talonflame | Air | Bird | 50-80 | 55-85 | 45-85 | 35-65 | 35-65 |
| Talonflame | Land | Standard | 35-55 | 20-40 | 25-45 | 20-35 | 15-30 |
| Tangrowth | Land | Standard | 15-30 | 35-60 | 15-30 | 45-80 | 10-25 |
| Tentacruel | Land | Standard | 5-20 | 20-40 | 5-20 | 30-60 | 0-5 |
| Tentacruel | Water | Dolphin | 40-65 | 45-75 | 30-60 | 40-80 | 25-55 |
| Thundurus | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Thundurus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Torkoal | Land | Standard | 10-25 | 30-55 | 10-25 | 50-90 | 10-20 |
| Tornadus | Air | Bird | 41-60 | 41-60 | 21-40 | 41-60 | 41-60 |
| Tornadus | Land | Standard | 21-40 | 21-40 | 21-40 | 41-60 | 41-60 |
| Torterra | Land | Standard | 15-35 | 35-60 | 15-35 | 55-90 | 15-30 |
| Toucannon | Air | Bird | 40-70 | 55-85 | 35-70 | 35-65 | 25-60 |
| Toucannon | Land | Standard | 20-40 | 30-50 | 15-30 | 25-45 | 15-30 |
| Toxicroak | Land | Standard | 40-65 | 35-60 | 40-65 | 30-55 | 25-45 |
| Turtonator | Land | Standard | 20-40 | 25-45 | 15-30 | 55-85 | 5-15 |
| Tyranitar | Land | Standard | 30-55 | 40-60 | 20-35 | 70-100 | 15-30 |
| Tyrantrum | Land | Standard | 30-55 | 30-50 | 35-60 | 65-95 | 20-35 |
| Veluza | Water | Dolphin | 50-80 | 40-70 | 45-75 | 35-70 | 20-40 |
| Walking Wake | Land | Standard | 35-60 | 25-45 | 35-60 | 40-70 | 25-45 |
| Walking Wake | Water | Dolphin | 40-70 | 35-60 | 45-75 | 45-75 | 30-55 |
| Walrein | Land | Standard | 15-35 | 30-55 | 10-25 | 40-80 | 10-20 |
| Walrein | Water | Dolphin | 30-55 | 45-75 | 30-60 | 50-90 | 25-40 |
| Zarude | Land | Standard | 55-80 | 45-65 | 60-85 | 40-65 | 30-50 |
<!-- cr-rideplus-stats-next -->

</details>

<!-- cr-rideplus-end -->

<!-- cr-addon-riding-end -->


{% hint style="info" %}
**References for this 1.8.1-focused guide:**
- [Cobblemon official Riding wiki](https://wiki.cobblemon.com/index.php/Pok%C3%A9mon/Riding) — ride styles, seat counts and configured stat ranges.
- [Cobblemon 1.8.0 changelog](https://wiki.cobblemon.com/index.php/1.8.0) — the ten new native mounts and conditional seating.
- [Cobblemon 1.8.1 changelog](https://wiki.cobblemon.com/index.php/1.8.1) — the Blastoise passenger-seat correction.
- [Cobblemon 1.8.1 species source](https://gitlab.com/cable-mc/cobblemon/-/tree/1.8.1/common/src/main/resources/data/cobblemon/species) — versioned JSON files for independent verification of ride definitions. The complete raw 1.8.1 archive has not been audited here.

Future Cobblemon versions or additional datapacks may change these entries. This page intentionally targets **Cobblemon 1.8.1 only**.
{% endhint %}

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
If you have any questions, suggestions, or changes to propose, feel free to join us on <a href="https://discord.gg/kb8NSTF45n">Discord</a> and contact <strong>@FabLeKebab</strong> directly on the server for anything related to the wiki, or <strong>@Levels</strong> for anything related to the modpack.
</p>
{% endhint %}
