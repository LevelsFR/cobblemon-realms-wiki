# 🎈 Reward Balloon

<p align="center">
Inspired by Pokémon GO sponsored gifts, <strong>Reward Balloons</strong> are rare events that appear in the Overworld and contain Cobblemon-related loot.
</p>

![Reward Balloon](https://raw.githubusercontent.com/LevelsCraft7/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/reward_balloons.png)

---

## 🎯 How It Works

While exploring the surface of the Overworld, balloons may very rarely appear in the sky within a configurable radius around players.

{% hint style="info" %}
<p align="center">
Reward Balloons are rare and completely random events.
</p>
{% endhint %}

### 🎈 Interaction

To open them, simply **right-click** on them:

- whether they are still floating in the air;
- or already resting on the ground.

Once the balloon is opened:
- 🎁 it releases its contents;
- 🎈 it becomes lighter;
- ⬆️ it rises back into the sky before disappearing.

---

### ⏳ Automatic Despawn

If a balloon is not used, it automatically disappears after **5 minutes** to prevent entity buildup on the server.

---

## 🏝️ Safari Balloon

**Safari Balloons** are an exclusive variant that only appears within the Safari area.

Unlike regular balloons, they contain only one type of reward: **Safari Balls**.

### 📊 Features

- 📈 4× more common than standard Reward Balloons;
- 🎁 Drops between 1 and 4 Safari Balls;
- 🌿 Exclusive to the Safari surface.

{% hint style="success" %}
<p align="center">
A small bonus designed to make Safari exploration easier.
</p>
{% endhint %}

![Safari Balloon](https://raw.githubusercontent.com/LevelsCraft7/cobblemon-realms-wiki/refs/heads/main/imgwiki/CobbleSafari/safari_ballons.png)

---

## ⚙️ Configuration

Configuration files are separated by balloon type:

- 🎈 `config/cobblesafari/misc_config.json` → Reward Balloons
- 🏝️ `config/cobblesafari/safari_config.json` → Safari Balloons

### 🔧 Main Settings

- 🎈 **Reward Balloons**
  - `balloonEnabled` → enable/disable

- 🏝️ **Safari Balloons**
  - `balloonSafariEnabled` → enable/disable

---

{% hint style="info" %}
## More Information

<p align="center">
You can find a complete description of the configuration files on the mod's official pages: <a href="https://cobblesafari.maxigregrze.fr/en/addons/config_misc_config">Reward Balloon Configuration</a> and <a href="https://cobblesafari.maxigregrze.fr/en/addons/config_safari_config">Safari Balloon Configuration</a>
</p>
{% endhint %}

---

## 🆕 Update 0.4: Balloon Spawn Limit

To prevent unused balloons from accumulating, the upstream `misc_config.json` now includes **`balloonMaxNearby`**, with a **default limit of 3**. A new Reward Balloon cannot spawn while at least three unlooted balloons are already nearby. Set the value to `0` to disable this limit on a customized server.

The Safari-specific balloon system remains separate. These settings can be modified by Cobblemon Realms and are not guaranteed to match the upstream defaults.

[Official CobbleSafari 0.4.0 changes](https://modrinth.com/mod/cobblesafari/version/0.4.0).

---

{% hint style="success" %}
## Contact Us

<p align="center">
If you have any questions, suggestions, or changes to propose, feel free to join us on <a href="https://discord.gg/kb8NSTF45n">Discord</a> and contact <strong>@FabLeKebab</strong> directly on the server for anything related to the wiki, or <strong>@Levels</strong> for anything related to the modpack.
</p>
{% endhint %}
