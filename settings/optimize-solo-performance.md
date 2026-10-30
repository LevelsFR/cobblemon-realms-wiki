

{% hint style="info" %}
<p align="center">
If you experience freezes, rollbacks, memory slowdowns, or performance issues while playing Cobblemon Realms in singleplayer, adjusting your JVM arguments can significantly improve game stability.
</p>
{% endhint %}

---

# 📋 Recommended Configuration

| Element | Recommendation |
|---|---|
| ☕ Java | Java 21 or higher |
| 💾 RAM | Minimum 8 GB |
| 💾 Recommended RAM | 10 GB |
| ⚙️ Garbage Collector | G1GC |

---

# ⚙️ Recommended JVM Arguments

Copy the following JVM tuning arguments into your additional Java settings. Set the RAM allocation separately using the CurseForge slider:

```
-XX:+UseG1GC
-XX:MaxGCPauseMillis=100
-XX:InitiatingHeapOccupancyPercent=30
-XX:+ExplicitGCInvokesConcurrent
```

---

# 🛠️ Configuration in CurseForge

## ☝🏼 Steps

1. Open `CurseForge`.
2. Click on `⚙️ Settings`.
3. Go to `Game Specific → Minecraft`.
4. Scroll down to `Java Settings`.
5. Disable `Use System Memory Settings`.
6. Start with `8 GB (8192 MB)` of RAM. You can use up to `10 GB (10240 MB)` if needed and your PC has enough available memory.
7. Paste the JVM arguments above into `Additional Java Arguments`. Remove any existing `-Xms` and `-Xmx` entries so they do not conflict with the memory slider.
8. Save and restart the modpack.

{% hint style="warning" %}
<p align="center">
CurseForge manages Minecraft's Java memory allocation through its RAM slider. Do not manually set <code>-Xms</code> or <code>-Xmx</code> in Additional Java Arguments, as they may override or conflict with that setting. Also check for per-profile memory overrides.
</p>
{% endhint %}

---

# 📈 What These Settings Improve

- ✅ Reduced freezes and micro-stutters
- ✅ Better memory management (GC)
- ✅ Fewer singleplayer rollbacks
- ✅ More stable gameplay sessions
- ✅ Better overall performance

---

{% hint style="info" %}
## 💡 Additional Tips

- ❌ Avoid running heavy background applications
- 🎮 Limit highly demanding shaders
- 📦 Keep your graphics drivers up to date
- 🖥️ Java RAM allocation and graphics card memory (VRAM) are separate. Increasing Java RAM will not resolve a GPU memory allocation error.
- 🗺️ Use Chunky to pre-generate chunks in your worlds
{% endhint %}

---

{% hint style="success" %}
<p align="center">
With Java 21 and these JVM settings, Cobblemon Realms should run smoother and more reliably, especially on advanced worlds and during long play sessions.
</p>
{% endhint %}

---

{% hint style="success" %}
## Contact Us

<p align="center">
If you have any questions, suggestions, or changes to propose, feel free to join us on <a href="https://discord.gg/kb8NSTF45n">Discord</a> and contact <strong>@FabLeKebab</strong> directly on the server for anything related to the wiki, or <strong>@Levels</strong> for anything related to the modpack.
</p>
{% endhint %}
