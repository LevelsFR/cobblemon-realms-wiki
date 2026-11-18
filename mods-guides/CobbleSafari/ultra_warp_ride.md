# 🪽 Ultra Warp Ride | Travel Between Wormholes

{% hint style="info" %}
<p align="center">Fly through an Ultra Space tunnel to reach unusual dimensions. Your performance affects how valuable the eventual encounter can become.</p>
{% endhint %}


## 🚀 The Flight

{% stepper %}
{% step %}
### 1. Enter Ultra Megalopolis
Access the [Ultra Megalopolis dungeon](ultra_megalopolis.md) and locate its warp device.
{% endstep %}
{% step %}
### 2. Start the ride
The minigame uses Elytra-like movement. Steer with the movement controls displayed in the game.
{% endstep %}
{% step %}
### 3. Balance energy and distance
Pick up positive energy objects while avoiding negative hazards. The longer you travel, the stronger the potential encounter rewards.
{% endstep %}
{% step %}
### 4. Enter a wormhole
Choose an available portal. Its colour/appearance represents a destination and its rank. The resulting encounter takes place in an Ultra Dimension.
{% endstep %}
{% endstepper %}

## 🎁 What Performance Changes

The source-defined difficulty model uses distance bands and four portal ranks. Depending on the result, the encountered Pokémon may receive bonuses to:

- Perfect IV count and level;
- Shiny and Alpha chances;
- Hidden Ability chances;
- Egg Moves or TM bonus moves;
- Selection of a rarer reward encounter, including potential Ultra Beasts.

{% hint style="warning" %}
The system defines probabilities, not guaranteed Shiny, Alpha or Ultra Beast outcomes. The exact parameters are datapack-driven and server-adjustable.
{% endhint %}

## 📊 How Distance Works

The upstream `difficulty.json` defines bands beginning at **0, 300, 600, 1,000, 1,500** and farther light-years. At high distances, top-ranked portals have a nonzero chance to occur. The reference configuration sets `noBonusDistance` to **5,100**, where additional positive energy boosts no longer appear.

The **Ultra Recon Armor** set can provide additional protection during the ride and grants an Elytra-like effect when its configured full-set bonus is enabled.

## ♿ Accessibility and Settings

As of **0.4.1**, the Ultra Warp Ride flash effects can be disabled in client settings. This option belongs to `client_settings.json`, not the main server settings.

Explore [the seven destinations](ultra_dimensions.md) and [their unique equipment](ultra_loot.md).

{% hint style="warning" %}
**Cobblemon Realms:** this guide describes the upstream mechanics introduced in CobbleSafari **0.4.0/0.4.1**, included in Cobblemon Realms **6.3**. Actual encounter pools, dungeon availability, loot and timers may be overridden by the server, addons or datapacks. Do not treat upstream defaults as guaranteed public-server settings.
{% endhint %}

## 📖 Sources
[0.4.0 release](https://modrinth.com/mod/cobblesafari/version/0.4.0) · [0.4.1 accessibility changes](https://modrinth.com/mod/cobblesafari/version/0.4.1) · [Difficulty and rewards data](https://github.com/maxigregrze/CobbleSafari/blob/main/common/src/main/resources/data/cobblesafari/ultra_warp_ride/difficulty.json).

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">Questions, suggestions or corrections? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for the wiki or <strong>@Levels</strong> for the modpack.</p>
{% endhint %}
