# 📦 Installation

## 📦 Installation Guide

{% hint style="info" %}
<p align="center">
Install <strong>Cobblemon Realms</strong>, keep your game updated, and set up or migrate a multiplayer server with the correct versions while keeping your worlds safe.
</p>
{% endhint %}

---

## 🧭 Before You Start

| Item | Version and download |
| --- | --- |
| **Minecraft** | **Java Edition 1.21.1** |
| **Modloader** | **NeoForge** (not Forge or Fabric) |
| **Java** | **Java 21** |
| **Client modpack** | [Cobblemon Realms on CurseForge](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms) |
| **Server Pack** | [Official Cobblemon Realms files](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files) |
| **Version 6.1** | [Client v6.1](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files/9085509) · [Server Pack v6.1](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files/9085516) |

{% hint style="warning" %}
**The client and server are separate downloads.** To host a server, download the **Server Pack** matching the exact modpack version used by your players. Do not install the client modpack in place of the Server Pack on a dedicated server.
{% endhint %}

---

## 🎮 Modpack Installation

{% tabs %}
{% tab title="Windows" %}

### 🖥️ Playing Solo

{% stepper %}
{% step %}
📥 Install the [CurseForge app](https://www.curseforge.com/download/app).
{% endstep %}

{% step %}
🔎 Under Minecraft, search for [Cobblemon Realms](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms).
{% endstep %}

{% step %}
📦 Click **Install**. Let CurseForge create your profile and download all required dependencies.
{% endstep %}

{% step %}
⏳ Wait until installation is complete before changing any profile files.
{% endstep %}

{% step %}
🚀 Launch the modpack from CurseForge and sign in to your Minecraft account if needed.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="MacOS" %}

### 🍎 Playing Solo

{% stepper %}
{% step %}
📥 Install the [CurseForge app for macOS](https://www.curseforge.com/download/app).
{% endstep %}

{% step %}
🔎 Find [Cobblemon Realms](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms) in the Minecraft catalog.
{% endstep %}

{% step %}
📦 Click **Install** and wait for all dependencies to download.
{% endstep %}

{% step %}
☕ If a Java runtime is requested, select **Java 21** compatible with your Mac. Adjust macOS permissions only if needed.
{% endstep %}

{% step %}
🚀 Launch the profile. The first load may take several minutes.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Linux" %}

### 🐧 Playing Solo

{% stepper %}
{% step %}
📥 Use the [CurseForge app for Linux](https://www.curseforge.com/download/app) on an **officially supported Ubuntu distribution**, or [Prism Launcher](https://prismlauncher.org/) on another compatible distribution.
{% endstep %}

{% step %}
🔎 Find **Cobblemon Realms** in your launcher's CurseForge catalog, or use its client modpack import feature.
{% endstep %}

{% step %}
📦 Create a **new instance** configured for **Minecraft 1.21.1** and **NeoForge**.
{% endstep %}

{% step %}
☕ Ensure the instance uses **Java 21** and that every mod has downloaded successfully.
{% endstep %}

{% step %}
🚀 Start the instance and check the launcher log if a download fails.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="success" %}
**CurseForge is the recommended launcher** when supported on your system. It simplifies dependency installation and version changes.
{% endhint %}

---

## ⚙️ Recommended Configuration

{% tabs %}
{% tab title="Windows" %}

{% stepper %}
{% step %}
☕ Check that Minecraft uses **Java 21**. Your launcher may install or manage Java automatically.
{% endstep %}

{% step %}
💾 Start with about **8 GB of allocated RAM** if your computer has enough memory. Adjust this through CurseForge's Minecraft settings.
{% endstep %}

{% step %}
🎮 Keep your graphics drivers updated and use an **SSD** when possible.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="MacOS" %}

{% stepper %}
{% step %}
☕ Select **Java 21** compatible with your Mac's architecture.
{% endstep %}

{% step %}
💾 Start with about **8 GB of allocated RAM** if available, leaving sufficient memory for macOS.
{% endstep %}

{% step %}
🍎 Keep macOS updated and prefer an **SSD**.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Linux" %}

{% stepper %}
{% step %}
☕ Select **Java 21** in your instance settings.
{% endstep %}

{% step %}
💾 Start with about **8 GB of allocated RAM**, depending on total available memory.
{% endstep %}

{% step %}
🎮 Check your graphics drivers (Mesa, NVIDIA, or AMD) and prefer an **SSD**.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="info" %}
**The RAM recommendation is a starting point.** Do not allocate all your computer's memory to Minecraft, and avoid combining launcher memory settings with conflicting custom Java arguments.
{% endhint %}

---

## 🔄 Updating the Client

### 🧭 Using CurseForge

{% stepper %}
{% step %}
💾 **Back up your singleplayer worlds** before a major update. In particular, keep a copy of your old instance's `saves/` folder.
{% endstep %}

{% step %}
🔎 In CurseForge, open **My Modpacks** and click the **small arrows next to Play** on your Cobblemon Realms profile.
{% endstep %}

{% step %}
📦 Choose **Update to the latest version** or select the specific version you want.
{% endstep %}

{% step %}
🛡️ For a major update such as **v6.1**, prefer **Update to a separate modpack profile**. This retains your previous installation as a fallback.
{% endstep %}

{% step %}
🚀 Click **Continue**, wait for installation, and launch the new profile. Test it before transferring a **copy** of your worlds.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
**Never merge the old** `mods/`, `config/`, `kubejs/`, or `defaultconfigs/` **folders** into a new profile. Removed or replaced mods can cause compatibility problems.
{% endhint %}

{% hint style="info" %}
**Missing the update option?** In your CurseForge profile settings, disable **Allow content management** if it is enabled. Updates may overwrite custom modifications; a separate profile allows you to retain them for reference.
{% endhint %}

### 🌍 Using Other Launchers (Prism, Modrinth, MultiMC)

Import options vary by launcher and version.

{% stepper %}
{% step %}
📥 Download the **client modpack** from [CurseForge files](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files), or find it through the launcher's supported catalog.
{% endstep %}

{% step %}
📂 Install the new version as **a fresh instance**, rather than mixing old and new mods.
{% endstep %}

{% step %}
⚙️ Verify **Minecraft 1.21.1**, **NeoForge**, **Java 21**, and that no dependencies are missing.
{% endstep %}

{% step %}
💾 After the first successful launch, transfer only compatible personal data, beginning with a **copy** of your `saves/` worlds.
{% endstep %}
{% endstepper %}

{% hint style="warning" %}
The **Server Pack is not a client installation archive**. Do not import it into a Minecraft launcher.
{% endhint %}

---

## 🎮 Hosting a Multiplayer Server

### 🧰 Requirements

| Item | Recommendation |
| --- | --- |
| **Minecraft** | **1.21.1** with **NeoForge** |
| **Java** | **21**, including on a hosting provider |
| **Server memory** | About **8 GB dedicated** to start, adjusted for player count and world size |
| **Storage** | **SSD** with free space for backups |
| **Files** | **Server Pack matching the client version** |
| **Network** | Configured port and firewall if publicly accessible |

{% hint style="info" %}
With a managed host, use its **control panel** to select Java 21, start the server, and configure memory. On a personal computer, use the startup script included with your Server Pack.
{% endhint %}

---

## 📦 Manual Server Installation or Update

{% hint style="warning" %}
**Before every update:** stop the server and make a **complete backup** of its folder, including the world, dimensions, player data, and administrative files. Verify that the backup can be recovered.
{% endhint %}

{% tabs %}
{% tab title="Installation" %}

### 🆕 New Server

{% stepper %}
{% step %}
📥 Download the **official Server Pack** from [CurseForge files](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files). For v6.1, use [Server Pack 6.1](https://www.curseforge.com/minecraft/modpacks/cobblemon-realms/files/9085516).
{% endstep %}

{% step %}
📂 Extract **the entire Server Pack into an empty folder**. Do not copy only `mods/`: the included configurations and startup files need to match this pack version.
{% endstep %}

{% step %}
☕ Check which Java the server is using:

~~~text
java -version
~~~

It must use **Java 21**. Configure memory using your host control panel or the JVM arguments file used by your server installation.
{% endstep %}

{% step %}
🚀 Start the server by following the **Manual Server Installation** section below.
{% endstep %}

{% step %}
📜 If the server creates `eula.txt` and then stops, read the [Minecraft EULA](https://www.minecraft.net/en-us/eula). If you agree to its terms, change `eula=false` to `eula=true` and restart.
{% endstep %}

{% step %}
✅ Wait for startup to finish, inspect `logs/latest.log`, and test connecting with a client on **the same version**.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Update" %}

### 🔄 Existing Server, Including v6.0.x to v6.1

{% stepper %}
{% step %}
🛑 **Fully stop your old server** and back up the entire installation folder. Never update while the world is loaded.
{% endstep %}

{% step %}
📥 Download the **Server Pack for your target version** and read the release notes before any major migration.
{% endstep %}

{% step %}
📂 Create **a new, empty server folder** and extract the entire new Server Pack. **Do not copy** old `mods/`, `config/`, `kubejs/`, `defaultconfigs/`, `libraries/`, `.jar` files, or `showdown/`.
{% endstep %}

{% step %}
🌍 From your backup, copy the world and only the administration files you need:

- `world/`, or the actual world folder specified by `level-name`
- `server.properties`, after comparing it with the new defaults
- `ops.json`, `whitelist.json`, `banned-players.json`, and `banned-ips.json` if present
- `server-icon.png` if you use one

**Always keep an untouched copy of the original world.**
{% endstep %}

{% step %}
⚙️ Review `world/serverconfig/` and `world/datapacks/` if present. They may retain configurations or datapacks from previous versions. **Do not delete them blindly**: back up and compare before disabling or changing anything.
{% endstep %}

{% step %}
🚀 Start the new server **without immediately opening it to players**. Check world loading in `logs/latest.log`, then test with a matching client version.
{% endstep %}

{% step %}
✅ Open the server once your checks pass. If they fail, stop the new instance and **restore your full backup**, rather than risking the original data.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="danger" %}
### 🛡️ Files You Must Protect

- **Never lose:** your world, dimensions, player data, and backups.
- **Use from the new Server Pack:** mods, provided configuration, startup scripts, and server runtime files.
- **Review individually:** `world/serverconfig/`, `world/datapacks/`, and customizations.

**Never delete your only copy of a world.** Old runtime JARs and libraries should not be copied into a fresh installation just because they existed in the previous version.
{% endhint %}

---

## 🛠️ Manual Server Installation

Once the Server Pack has been extracted, use the provided script for your operating system **if present**. On a hosting service, use the host's control panel.

{% tabs %}
{% tab title="Windows" %}

{% stepper %}
{% step %}
☕ Install **[Java 21](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)** or select it in your hosting panel.
{% endstep %}

{% step %}
🖥️ In the server folder, launch `run.bat` if it is included in your Server Pack.
{% endstep %}

{% step %}
📜 If `eula.txt` is created, accept it after reading if you agree, then run `run.bat` again.
{% endstep %}

{% step %}
⚙️ Configure `server.properties` and server memory, then check the console for successful startup.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="MacOS" %}

{% stepper %}
{% step %}
☕ Install **[Java 21](https://www.oracle.com/java/technologies/downloads/#jdk21-mac)** compatible with your Mac.
{% endstep %}

{% step %}
🖥️ In the extracted server folder, if `run.sh` is included, run:

~~~bash
chmod +x run.sh
./run.sh
~~~
{% endstep %}

{% step %}
📜 If `eula.txt` is created, accept it after reading if you agree, then run `./run.sh` again.
{% endstep %}

{% step %}
⚙️ Check `server.properties`, memory arguments, and the startup log.
{% endstep %}
{% endstepper %}

{% endtab %}

{% tab title="Linux" %}

{% stepper %}
{% step %}
☕ Install **[Java 21](https://www.oracle.com/java/technologies/downloads/#jdk21-linux)** and check `java -version`.
{% endstep %}

{% step %}
🖥️ If the Server Pack includes `run.sh`, run from that folder:

~~~bash
chmod +x run.sh
./run.sh
~~~
{% endstep %}

{% step %}
📜 If `eula.txt` is created, accept it after reading if you agree, then run `./run.sh` again.
{% endstep %}

{% step %}
⚙️ Configure the port, memory, and server settings before opening it to players.
{% endstep %}
{% endstepper %}

{% endtab %}
{% endtabs %}

{% hint style="info" %}
If your host or Server Pack uses **another startup method**, follow that method's instructions. Do not try to launch a random JAR from `mods/` or `libraries/`.
{% endhint %}

---

## 🌐 Allowing Players to Join

{% stepper %}
{% step %}
🔄 Make sure players are using **the same Cobblemon Realms version** as the server.
{% endstep %}

{% step %}
⚙️ In `server.properties`, adjust `motd`, `max-players`, and `server-port`. Keep `online-mode=true` for normal player authentication.
{% endstep %}

{% step %}
✈️ If a player is kicked with `Flying is not enabled on this server`, set:

~~~properties
allow-flight=true
~~~

Save the file and restart.
{% endstep %}

{% step %}
🌐 For a personal server reachable over the Internet, check the firewall and forwarding of `server-port` (default **25565/TCP**). On a hosting provider, use the address and port from its control panel.
{% endstep %}
{% endstepper %}

---

## 🧰 Common Troubleshooting

| Symptom | First checks |
| --- | --- |
| **Client will not start** | Java 21, available RAM, downloads, graphics drivers |
| **Server will not start** | Correct Server Pack, Java 21, startup script, `logs/latest.log` |
| **Incompatible mods error** | Matching client/server versions, no leftover old JARs |
| **Crash after updating** | Fresh server installation, `world/serverconfig/` and `world/datapacks/` |
| **Connection refused** | Port, firewall, address, server readiness, version |
| **Flying kick** | `allow-flight=true` then restart |

{% hint style="warning" %}
For support, share your complete **`logs/latest.log`**, your Cobblemon Realms version, and how you installed the game or server. Include the crash report or, for battle issues, the relevant `battle_logs/` file if available. **Remove private information** before sharing logs.
{% endhint %}

You can also check the [FAQ](faq.md), [Report an Issue](report-a-bug.md), or ask for help on [Discord](https://discord.gg/kb8NSTF45n).

---

{% hint style="success" %}
### ☁️ Recommended Hosting: BisectHosting

Cobblemon Realms partners with **BisectHosting**, so you can host a server without configuring port forwarding or NeoForge manually.

- 🚀 Simplified modpack installation
- 💾 Server management and backup tools
- 🌍 Choice of server location
- 🛠️ Control panel for files and settings

**[Explore BisectHosting](https://bisecthosting.com/OurStory)**
{% endhint %}

{% hint style="info" %}
### 🎉 Partner Discount

🎁 Use code **`OURSTORY`** for **25% off your first month of hosting** through our [BisectHosting partner link](https://bisecthosting.com/OurStory).
{% endhint %}

---

<p align="center">🔥 Enjoy your Pokémon adventures, solo or with friends. The Realms await you! 🧭✨</p>

---

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
Have a question or suggestion? Join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> about the wiki or <strong>@Levels</strong> about the modpack.
</p>
{% endhint %}
