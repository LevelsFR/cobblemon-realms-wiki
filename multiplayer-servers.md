# 🌐 Multiplayer Servers

{% hint style="info" %}
<p align="center">
<strong>Cobblemon Realms</strong> can be played both solo and in multiplayer. Join an existing community or create your own server to experience the adventure with your friends! 🧑‍🤝‍🧑
</p>
{% endhint %}

---

## 🧑‍🤝‍🧑 Joining a Server

You can join a server using a **compatible Cobblemon Realms v6.x release**, provided you have **the exact files and versions required by that server**. A community server may also require additional mods or resources.

| 📦 Check | ✅ Required |
| --- | --- |
| **Modpack** | The same version as the server |
| **Java** | **Java 21** |
| **Client** | Matching **Minecraft 1.21.1 + NeoForge** and Cobblemon Realms profile |

{% hint style="info" %}
<p align="center">
💡 Some servers may use <strong>rules, additional mods, or custom features</strong> that are not included in the base Cobblemon Realms installation.
</p>
{% endhint %}

---

### 🎮 How to Connect

{% stepper %}
{% step %}
📦 Install **the exact Cobblemon Realms version** required by the server administrator, preferably through CurseForge.
{% endstep %}

{% step %}
🚀 Launch Minecraft using **your modpack profile** and open **Multiplayer**.
{% endstep %}

{% step %}
🌐 Select **Add Server** or **Direct Connection** and enter **the address provided by the administrator**. Include the port if it differs from the default.
{% endstep %}

{% step %}
✅ Make sure the server has finished starting and connect. For mod or registry mismatch errors, compare the **exact versions**, not just the label "v6.x".
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Community servers may require files not found in the standard client. **Do not automatically install** third-party server modifications into your primary profile: create a separate profile copy to keep your base installation clean.
{% endhint %}

---

## 🛠️ Creating Your Own Server

**Creating your own server** allows you to play with your friends, customize your adventure, and manage your own community.

### ⚙️ Recommended Configuration

| Resource | Recommendation |
| --- | --- |
| ☕ **Java** | Version **21** |
| 💾 **RAM** | Start with **8 GB dedicated**, adjusting for player count and exploration |
| 🌐 **Network** | Stable connection |
| 💽 **Storage** | **SSD recommended** |
| 🔓 **Port** | **25565/TCP by default**, or the port configured in `server.properties` |

📘 To install or update your server, see the [**Installation Guide**](installation.md).

---

### 📦 Client, Server Pack, and Updates

| Situation | Recommended approach |
| --- | --- |
| **New server** | Download the **official matching Server Pack** and extract it completely into an empty folder |
| **v6.x update** | Back up the old server, prepare **a completely new server installation**, and migrate a copy of your world |
| **Existing world** | Keep the **entire world** and player data; review `world/serverconfig/` and `world/datapacks/` |
| **Runtime files** | Use those from the **new Server Pack**, not old JARs or libraries |
| **Before opening** | Test startup and connect using a client on **the exact same version** |

{% hint style="warning" %}
Copying only `mods/`, `config/`, `kubejs/`, and `defaultconfigs/` **is not a safe full migration** for a major update. Old runtime files or world configuration may remain incompatible. Follow the [full installation and migration guide](installation.md).
{% endhint %}

### 🔐 Useful Multiplayer Settings

In `server.properties`, check:

- `online-mode=true`: keep Minecraft account authentication enabled.
- `server-port=25565`: default port, configurable for your hosting setup.
- `white-list=true`: restrict access to approved players.
- `allow-flight=true`: use if players are kicked with "Flying is not enabled on this server".

To manage a whitelist, use `/whitelist on` and `/whitelist add PlayerName`. In the server console, commands are generally entered **without the leading slash**.

{% hint style="info" %}
With a hosting provider, the **server address and port** usually come from its control panel. At home, Internet access may require forwarding the **TCP** port through your firewall and router. Some **CGNAT** connections cannot use standard port forwarding.
{% endhint %}

---

## ☁️ Hosting Your Server

You can host your server directly at home, but this means managing **port forwarding, maintenance, backups, and server availability**, among other things. For a simpler solution, you can use a **specialized hosting provider**.

### 🚀 BisectHosting

**BisectHosting** is the **official partner of Cobblemon Realms** and offers a solution specifically suited to hosting modded Minecraft servers.

**Some advantages:**

- ⚡ **One-click** modpack installation
- 🌍 Data centers located around the world
- 🛡️ Integrated **DDoS protection**
- 💾 Simplified backups
- 🔄 Easier update management
- 📂 Full access to server files

{% hint style="success" %}
<p align="center">
🎁 Use the code <code>OURSTORY</code> on <a href="https://bisecthosting.com/OurStory"><strong>BisectHosting</strong></a> when placing your order to receive <strong>25% off your first month of hosting</strong>.
</p>
{% endhint %}

---

## 🧰 Multiplayer Troubleshooting

| Symptom | First check |
| --- | --- |
| **Server not found / connection refused** | Address, port, firewall, server startup, and network configuration |
| **Mods or registries do not match** | Exact modpack versions, no leftover old mods, and server modifications |
| **Kicked for flying** | Set `allow-flight=true` and restart |
| **Startup or migration crash** | Read the complete `logs/latest.log`; test a fresh Server Pack with a world backup |
| **Lag during exploration** | Check memory, CPU, chunk generation, and consider [Chunky](mods-guides/chunky.md) |
| **Missing quests, Pokémon, or progress** | Verify the **complete world backup** and player data; do not overwrite originals |

{% hint style="warning" %}
When requesting support, include the **exact modpack version**, hosting method, reproduction steps, and complete `logs/latest.log` (or a crash report). Remove **private IPs, tokens, and other sensitive details** before sharing logs.
{% endhint %}

---

## 🔐 Best Practices

A well-maintained server is one that avoids many problems. In particular, remember to:

- 💾 **Regularly back up** your world
- 🔄 Keep **the server and modpack up to date**
- 🧱 Pre-generate your world with [**Chunky**](mods-guides/chunky.md)
- ✅ Use a **whitelist** to control access
- 📋 Check the **logs** in case of an error or crash

{% hint style="warning" %}
⚠️ **Before any major update**, make a complete backup of your world and configuration files. A recent backup can save you from losing several hours of progress.
{% endhint %}

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
A question, suggestion, or issue regarding servers?<br>
Join us on <a href="https://discord.gg/kb8NSTF45n">Discord</a> and contact <strong>@FabLeKebab</strong> for anything related to the wiki, or <strong>@Levels</strong> for anything related to the modpack.
</p>
{% endhint %}
