# 💡 Useful Blocks

Not all blocks added by **CobbleSafari** are purely decorative. Some allow you to **teleport, slow down movement, launch creatures into the air, or trigger traps** when activated.

{% hint style="info" %}
<p align="center">
Some blocks with their own dedicated page are not detailed here: the <strong>Teleportation Pad</strong>, the <strong>Egg Incubator and Wild Egg Nest</strong>, the <strong>Secret Base PC</strong> as well as the <strong>Rotom Phone</strong>, its Empty Phones and its online feature PCs.
</p>
{% endhint %}

***

## 🚪 Teleportation Pad

The **Teleportation Pad** allows two platforms to be linked together in order to teleport instantly from one to the other. Stand on a linked pad, then **press the jump key** to automatically travel to its partner.

### 🛠️ Obtaining

The version available in Survival mode can be crafted and then configured using a **Tinkhammer**.

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/pad_teleport.png" width="300" >
  <figcaption style="text-align: center;">Teleportation Pad crafting recipe</figcaption>
</figure>

### 🔗 Linking pads

Teleportation Pads work **in pairs** and automatically search for their partner. Place two correctly oriented pads and the game will search for a compatible pad in the indicated direction, up to **100 blocks away**.

Each pad has **three modes**, which determine the position searched for its partner:

| Mode | Partner position |
| --- | --- |
| **Top** | Above the pad, forming an L shape with it. |
| **Bottom** | Below the pad, mirroring the Up mode. |
| **Front** | Directly in front of the pad, with slight lateral tolerance. |

The linking follows a few simple rules:

- **Top** links with **Bottom**, and **Front** with **Front**.
- The path between the two pads must remain **completely clear**.
- The search stops at the **first pad encountered**. If it is already linked, no other pad will be searched beyond it.
- The connection is stored **relative to the pads' orientation**, allowing you to move or rotate a structure without losing its connections.

Once the two pads are linked, their **activation animation** becomes visible.

### ⚙️ Usage and configuration

To teleport, stand on a linked pad and **press the jump or sneak key**. A portal sound confirms that the teleportation was successful. If it fails, a sound similar to lava coming into contact with water is played.

The **Tinkhammer** allows you to modify and configure the pads:

- **Right-click** → changes the pad's mode and automatically restarts the search for a partner.
- **Right-click while sneaking** → opens the advanced configuration interface.

The interface allows you to select the **pad mode**, manually set the **X / Y / Z** coordinates, check a destination, launch automatic detection and change the **pad color** using a hexadecimal value.

***

## 🔨 Tinkhammer

The **Tinkhammer** is not a block, but it is an essential tool for configuring several of the blocks presented on this page.

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/forgelimarteau.png" width="300" >
  <figcaption style="text-align: center;">Tinkhammer crafting recipe</figcaption>
</figure>

Its durability is comparable to that of a **diamond axe** and it can be repaired on an anvil using **Tinkhammer**. In Survival mode, it notably serves as an equivalent to configuration options normally reserved for Creative mode: it allows you to configure **Teleportation Pads** and reset certain colored blocks.

**Tinkhammer** are obtained from the **Compacted Trash Blocks** found in the Steel biome of the Safari Dimension.

***

## 🗿 Pokémon Statue

The **Pokémon Statue** is a two-block-tall pedestal that allows you to display **any Pokémon in the game** in the pose of your choice. Its appearance is fully configurable after crafting: a single statue can therefore represent every species, different finishes and the animations available for each Pokémon.

### 🛠️ Obtaining

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/statue_pokemon.png" width="300" >
  <figcaption style="text-align: center;">Pokémon Statue crafting recipe</figcaption>
</figure>

The **Tinkhammer Block** used in the center of the recipe corresponds to **9 Tinkhammer**. These are obtained from the **Compacted Trash Blocks** in the Steel biome of the Safari Dimension, in the same location as the materials required to craft the **Tinkhammer**.

### 📍 Placement

Place the lower part of the statue on a solid block with free space above it. The statue will then automatically face you. These checks are only performed **when placing it**: if you subsequently remove the block beneath the statue, it will remain in place, even in mid-air.

The statue has durability comparable to that of an **anvil** and requires at least a **stone pickaxe** to be collected. It cannot be moved by pistons, but can be destroyed by explosions. Destroying **either of the two parts** destroys the entire statue and drops a new blank statue, without retaining the previously configured settings.

### ⚙️ Configuration

**Right-click** on either of the two parts with a <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/items/forgeliroue_update.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/items/forgeliroue_update.png" title="Tinkhammer" width="32"></a> to open the configuration interface. The **Confirm** button saves the changes, **Reset** restores the default settings, and the **Esc** key exits without saving the changes.

| Setting | Function |
| --- | --- |
| **Species** | Determines the displayed Pokémon. Form arguments work like those in the GTS search field: `Rowlet Hisuian` or `Pikachu shiny=true`, for example. If the field is empty or contains a nonexistent Pokémon, a generic gray model is displayed. |
| **Statue type** | Determines the statue's finish. Only **Hologram** mode also changes the appearance of the pedestal. |
| **Animation** | Determines the Pokémon animation to freeze. The list directly depends on the selected species. |
| **Progress** | Determines the exact moment of the animation at which the statue is frozen. `0` corresponds to the beginning and `1` to the last frame. The `‹` and `›` buttons change the value by `0.01`, while `«` and `»` change it by `0.10`. |
| **Size** | Sets the Pokémon's size, from `0.01` to `3`. A value of **1** scales the Pokémon so that it occupies exactly one block, regardless of its species. |
| **Color** | Allows a hexadecimal tint to be applied to the decorative plate of the pedestal or to the hologram. Leaving the field empty preserves the default appearance of the pedestal or uses a green hologram. |

### 🎨 Finishes

| Statue type | Pokémon appearance |
| --- | --- |
| **Stone** | Gray, with no particular tint. |
| **Gold** | Monochrome, with a golden tint. |
| **Diamond** | Monochrome, with a turquoise tint. |
| **Hologram** | Monochrome, tinted, **transparent and luminous**. |
| **Painted** | Retains the Pokémon's colors, but without emissive textures. |

The **Color** setting can also tint the pedestal. With a Hologram statue, the entire pedestal adopts its holographic version and uses a green color by default if no color is specified.

### 🔒 Locking a statue

**Right-click with a honeycomb** on a statue to wax it, exactly as with a sign. A waxed statue can no longer be modified by players. To remove the wax, use **any axe**, except the Tinkhammer. If you use **Jade** or **WTHIT**, point your cursor at either of the two parts of the statue to display the represented Pokémon and see whether the statue is waxed.

***

## 🌪️ Whirlwind

The **Whirlwind** is a small tornado that appears on the ground and may seem harmless at first glance. Any living creature that comes into contact with it is **launched into the air**: players, wild Pokémon, hostile creatures, etc. Its effect works similarly to a wind charge and propels the target directly upward. They naturally appear in the **Flying biome** of the Safari Dimension, where they can be numerous enough to chain several launches.

***

## 🟤 Mud Pile and Sludge Pile

**Mud Piles** and **Sludge Piles** are two small piles found on the ground that slow down creatures passing through them, similarly to cobwebs. **Sludge Piles** have an additional effect: any living creature that touches one is **poisoned for 2 seconds**.

Both blocks can appear naturally: **Mud Piles** in the **Ground biome** and **Sludge Piles** in the **Poison biome**. They can also be crafted using the following recipes:

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/amas_de_boue.png" width="300" >
  <figcaption style="text-align: center;">Mud Pile crafting recipe</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/amas_de_bouillasse.png" width="300" >
  <figcaption style="text-align: center;">Sludge Pile crafting recipe</figcaption>
</figure>

The Sludge Pile recipe is **shapeless**: it requires 4 Mud Piles and 1 Black Sludge and produces 4 Sludge Piles.

***

## 🌋 Craters and Geysers

**Craters and Geysers** are three environmental hazards that operate on the same principle. Each one appears in a specific biome, remains integrated into the ground and activates when a creature **walks over it**. After activation, a short delay occurs before the eruption, after which the block enters a cooldown period before it can be triggered again.

| Block | Biome | Effect |
| :---: | :---: | :---: |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/volcanic_crater.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/volcanic_crater.png" title="Volcanic Crater" width="48"></a> | Fire | Shoots a burst of flames from the ground. |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/hot_geyser.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/hot_geyser.png" title="Hot Geyser" width="48"></a> | Water | Shoots a column of boiling water. |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/draconic_crater.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/draconic_crater.png" title="Draconic Crater" width="48"></a> | Dragon | Causes a Draco Meteor to fall on the creature that triggered the crater. |

The **delay between activation and eruption** gives you a few moments to move away. Keep moving after triggering the block so that you are out of range when the eruption occurs.

All three blocks use the same crafting principle: **8 blocks associated with the biome's theme surrounding a Magma Block**.

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/cratere_volcanique.png" width="300" >
  <figcaption style="text-align: center;">Volcanic Crater crafting recipe</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/geyser_chaud.png" width="300" >
  <figcaption style="text-align: center;">Hot Geyser crafting recipe</figcaption>
</figure>

<figure style="text-align: center;">
  <img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/cratere_draconique.png" width="300" >
  <figcaption style="text-align: center;">Draconic Crater crafting recipe</figcaption>
</figure>

***

## 🪤 Traps

**Traps** are available in **10 variants**, each existing in **Normal** and **Reinforced** versions, for a total of **20 different blocks**. They are triggered when a living creature walks over them.

### 🛒 Obtaining

Traps can be **purchased from a specialized merchant**: a variant of the Hiker available in the [Sinnoh Underground](sinnoh_underground.md). See the [Merchant Trade List](traders_trade_list.md) for their prices. They can also naturally appear in the **Darkness biome** of the Safari Dimension. Be especially careful when exploring this area.

### 👁️ Visibility

A placed Trap is **invisible by default**. It becomes visible only when you are **sneaking**, **holding a trap in your hand**, or are in **Creative mode**. Its outline nevertheless remains visible when you look directly at the location where it is placed, allowing an attentive player to spot it.

Traps can be quickly destroyed by hand and are **instantly collected with shears**. They always drop their own block when destroyed, unless they are destroyed by an explosion.

### ⚠️ Trap effects

| Trap | Normal | Reinforced |
| --- | --- | --- |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_obscurite.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_obscurite.png" title="Darkness Trap" width="48"></a> | Darkness for 10 s | Blindness for 20 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_explosion.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_explosion.png" title="Explosion Trap" width="48"></a> | Explosion causing minor damage without destroying blocks | Explosion capable of destroying fragile blocks and dealing real damage |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_flatulent.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_flatulent.png" title="Fart Trap" width="48"></a> | Like the Explosion, with a sound effect | Like the Reinforced Explosion, with a stronger sound effect |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_feu.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_feu.png" title="Fire Trap" width="48"></a> | Sets the player on fire for 2 s | Inflicts a stronger fire effect for 5 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_gravite.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_gravite.png" title="Gravity Trap" width="48"></a> | Levitation for 3 s | Levitation for 10 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_poussee.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_poussee.png" title="Move Trap" width="48"></a> | Moves the target 1 block forward | Moves the target 3 blocks forward |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_roche.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_roche.png" title="Rock Trap" width="48"></a> | Causes a Draco Meteor to fall nearby | Causes a Draco Meteor to fall directly on the target |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_ralentissement.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_ralentissement.png" title="Slow Trap" width="48"></a> | Slowness I for 10 s | Slowness IV for 10 s |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_teleportation.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_teleportation.png" title="Teleport Trap" width="48"></a> | Random teleportation up to 8 blocks | Random teleportation up to 32 blocks |
| <a href="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_vent.png"><img src="https://raw.githubusercontent.com/LevelsFR/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/blocs_utiles/piege_vent.png" title="Wind Trap" width="48"></a> | Launch similar to a wind charge | Launch similar to a stronger wind charge |

{% hint style="warning" %}
<p align="center">
The <strong>Explosion</strong> and <strong>Fart</strong> traps can also be triggered by a projectile. This is the only way to activate them remotely, whether to disarm them without approaching or to deliberately trigger them beneath another creature's feet.
</p>
{% endhint %}

{% hint style="warning" %}
<p align="center">
All traps can be **oriented in different directions**, even though only the <strong>Move</strong> trap actually uses their orientation to determine the direction in which the target will be moved.
</p>
{% endhint %}

***

{% hint style="success" %}
## Contact Us

<p align="center">
If you have any questions, suggestions or modifications to propose, feel free to join us on <a href="https://discord.gg/kb8NSTF45n">Discord</a> and contact <strong>@FabLeKebab</strong> directly on the server for anything concerning the wiki, or <strong>@Levels</strong> for anything concerning the modpack.
</p>
{% endhint %}
