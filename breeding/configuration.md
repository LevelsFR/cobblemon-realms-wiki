# ⚙️ Cobbreeding Settings & Server Rules

{% hint style="info" %}
<p align="center">
Understand how Cobbreeding is configured in <strong>Cobblemon Realms</strong>. This reference explains breeding intervals, egg storage, Shiny methods, Ditto rules, inherited features and administrator-only settings.
</p>
{% endhint %}

{% hint style="warning" %}
**Which values are these?** The values below were checked against the **`cobbreeding/main.json` file supplied with the Cobblemon Realms configuration archive**. They are a verified snapshot of those files, **not a live verification of the public server**. The exact behavior also depends on the installed mod version. Keep this distinction in mind when comparing different pack versions or private servers.
{% endhint %}

---

## ⏳ Breeding & Hatching

| Setting | Value in supplied configuration | What it does |
| --- | --- | --- |
| `minBreedingTimeInTicks` | `8000` | Minimum egg-generation wait, approximately **6 min 40 sec** at 20 TPS |
| `maxBreedingTimeInTicks` | `14000` | Maximum configured wait, approximately **11 min 40 sec** at 20 TPS |
| `mirrorHerbTimeInTicks` | `600` | Mirror Herb processing interval, approximately **30 seconds** at 20 TPS |
| `eggHatchMultiplier` | `1.0` | Hatching-time multiplier; smaller positive values produce faster hatching |
| `pastureInventorySize` | `5` | Maximum number of eggs stored in the Pasture nesting area |

{% hint style="info" %}
**Ticks are not a wall-clock guarantee.** Approximate times above assume a server running at 20 ticks per second. They describe configured intervals and do not guarantee an egg from every attempt. Hatching duration also depends on the species' egg cycles and possible Abilities.
{% endhint %}

At the mod's reference setting of `eggHatchMultiplier: 1.0`, the author gives an example of **around 10 minutes for a Pokémon with 20 egg cycles**. Eggs progress toward hatching while held in a **player inventory**, rather than sitting in an ordinary chest.

---

## ✨ Shiny Breeding

| Method in `shinyMethod` | Snapshot multiplier | Requirement |
| --- | :---: | --- |
| `masuda` | **×4.0** | The two parents have different **Original Trainers (OT)** |
| `crystal` | **×1.0** | One parent is Shiny; can apply twice with two Shiny parents |
| `always` | **×1.0** | Applies to all eggs |

These methods stack multiplicatively when applicable. **A ×1.0 multiplier adds no bonus**, even when the method's condition is met.

{% hint style="warning" %}
The **base Shiny rate is controlled by Cobblemon**, not established by this configuration file. Do not treat the example odds in the mod's guide as a confirmed Cobblemon Realms server rate. Unlike the classic game explanation, Cobbreeding's documented Masuda condition is **different OT**, not different game language.
{% endhint %}

---

## 💞 Ditto, Abilities & Parent Rules

| Setting | Snapshot value | Meaning |
| --- | --- | --- |
| `hiddenAbilitiesEnabled` | `true` | Eggs can roll a Hidden Ability even without direct inheritance |
| `forcedAbilitiesEnabled` | `false` | Forced Ability inheritance is not enabled by this file |
| `dittoAndDittoRandomEgg` | `false` | Two Ditto do **not** create random-species eggs under this configuration |
| `dittoAndDittoAllowLegendary` | `false` | Legendary/mythical random eggs disabled |
| `dittoAndDittoAllowParadox` | `false` | Paradox random eggs disabled |
| `dittoAndDittoAllowUltraBeast` | `false` | Ultra Beast random eggs disabled |
| `dittoAndDittoAllowUndiscovered` | `false` | Undiscovered Egg Group random eggs disabled |

The last four flags relate to the **optional Ditto + Ditto random-egg feature**. When that feature is off, the flags do not enable those eggs on their own.

---

## 🏡 Pastures, Automation & Data

| Setting | Snapshot value | Meaning |
| --- | --- | --- |
| `maxNumberOfActivatedPasturePerPlayer` | `-1` | No per-player activated Pasture limit in this file |
| `allowHoppersToPullFromPastureBlock` | `true` | Hopper extraction of eggs is enabled |
| `eggEncryptionEnabled` | `true` | Egg data is encrypted to prevent early inspection |
| `customColors` | `false` | Type-based egg colors disabled in this configuration snapshot |
| `cobblemonSizeVariationsCompatEnabled` | `true` | Legacy optional compatibility flag present in this snapshot |

{% hint style="warning" %}
`customColors` and `cobblemonSizeVariationsCompatEnabled` are **version-dependent/legacy parameters**. Their presence in an older configuration does not prove that newer Cobbreeding builds still use them.
{% endhint %}

### 🧬 Inherited Species Features

The configuration's `inheritedFeatures` list includes:

```text
bagworm_cloak, color, dance_style, fish_stripes,
striped, magikarp_jump, mooshtank, region_bias,
alolan, galarian, hisuian, paldean, bull_breed,
tatsugiri_texture, whiscash_nero, wooper_heart
```

The available feature names can evolve between releases. They control which species-specific visual or regional attributes can be inherited; they are **not a universal promise** that every cosmetic or custom Cobblemon Realms form can hatch.

---

## 🐺 Alpha Eggs in Newer Cobbreeding Builds

**Cobbreeding 2.4.0** introduced two additional options:

- A **configurable chance for an egg to hatch into an Alpha Pokémon**.
- An option to **enable Alpha inheritance** from parents.

Those options are part of the newer mod release, **not fields verified in the supplied configuration snapshot**. Do not assume they are enabled on the public server.

{% hint style="info" %}
**Version compatibility:** Cobbreeding 2.4.1 is published for **Cobblemon 1.8.2 or later** in the applicable Minecraft 1.21.1 branch. Always use the Cobbreeding version bundled with your installed modpack release, rather than upgrading a single dependency without checking compatibility.
{% endhint %}

---

## 🔐 Administration Only

Configuration file location:

```text
config/cobbreeding/main.json
```

Server administrators may use `/givepokemonegg <player> <species> ...` with appropriate permissions to create an egg. Players normally obtain eggs through Pastures.

{% hint style="danger" %}
**Do not delete the encryption file beside the configuration.** Turning off `eggEncryptionEnabled` does not mean existing egg encryption metadata can safely be discarded.
{% endhint %}

---

## 📚 Continue Exploring

- [🥚 Breeding Overview](README.md)
- [🏡 Pastures & Eggs](pastures-and-eggs.md)
- [🧬 Inheritance & Shiny Hunting](inheritance-and-shinies.md)
- [🛠️ FAQ & Troubleshooting](troubleshooting.md)

---

## 📖 Technical References & Credits

Information was cross-checked with the Cobbreeding guide by **Ludichat**, the [open-source project](https://gitlab.com/ludichat/Cobbreeding), its published configuration defaults and the supplied Cobblemon Realms configuration file. This page is intended to contain the key player-facing information directly, so you **do not need to open the developer guide**.

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
For questions, suggestions or corrections, join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for wiki topics or <strong>@Levels</strong> for modpack topics.
</p>
{% endhint %}
