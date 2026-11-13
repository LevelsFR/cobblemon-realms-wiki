# 🛠️ Breeding FAQ & Troubleshooting

{% hint style="info" %}
<p align="center">
Can't place a Pokémon in a Pasture? No eggs appearing? An egg timer stuck at zero? This page covers the most common <strong>Cobbreeding</strong> questions.
</p>
{% endhint %}

---

## ❓ Common Problems

### 🏡 I Can't Put My Pokémon in the Pasture

Cobblemon may prevent a Pokémon from appearing when the space around the Pasture Block is too small.

**Try this:** clear space behind the block, especially for large Pokémon, and make the surrounding area accessible.

### 💞 My Pokémon Aren't Breeding

Check all of the following:

1. **Breeding is enabled** in the Pasture interface.
2. The parents share an **Egg Group**, have compatible genders, or form a valid **Ditto** pairing.
3. Neither parent belongs to the **Undiscovered** Egg Group.
4. The Pasture nesting inventory still has room for eggs.
5. Enough time has passed under the server's configured breeding interval. The supplied configuration uses **8,000 to 14,000 ticks** for the breeding interval, but the public server's live values are not independently confirmed.

### 🩹 My Pastured Pokémon Are Fainting

Environmental hazards can damage pastured Pokémon when not prevented by an active protection.

**Try this:** avoid unsafe water, lava, sharp drops and hazardous blocks. Build an enclosed, safe pasture.

### 🌳 My Pokémon Disappear and Return to the PC

According to the author, Pokémon can return if they travel too far from the Pasture Block.

**Try this:** limit their wandering area. Server administrators can review Cobblemon's pasture wandering settings.

### ⏱️ My Egg Timer Reaches Zero but Nothing Hatches

The client timer can become **desynchronized** from the server. The server determines when the egg is actually ready.

**Try this:** keep the egg in your player inventory and allow the server-side timer to finish.

---

## 📦 What Happens When the Chunk Unloads?

When a Pasture chunk is unloaded, normal breeding activity is interrupted. On reload, the mod can account for elapsed time and produce eggs that would have been generated, but **only up to the Pasture's available nesting inventory capacity**.

For example, if a Pasture is configured to hold five eggs and remains unloaded for a long period, it cannot produce more than those five eggs into that inventory when loaded again.

{% hint style="warning" %}
A hopper does not remove this offline catch-up capacity limit. Collecting eggs regularly remains useful.
{% endhint %}

---

## 🧬 When Are an Egg's Traits Decided?

The resulting Pokémon's data is determined **when the egg is created**, not at the moment it hatches.

This also explains why certain egg-data options are relevant to server administrators.

---

## ⚙️ Server Configuration & Admin Notes

Cobbreeding's configuration is located at:

```text
.minecraft/config/cobbreeding/main.json
```

Settings can control breeding time, hatching speed, Shiny multipliers, eligible inherited forms, Hopper automation, active Pasture limits and egg encryption.

### 🔐 Egg Encryption

The guide describes an option named `eggEncryptionEnabled`. If administrators disable it, **already existing encrypted eggs** may need to be decrypted by holding and right-clicking them.

{% hint style="danger" %}
**For server administrators:** do not delete the encryption file stored alongside the Cobbreeding configuration. Disabling encryption is not the same thing as deleting its key data.
{% endhint %}

### ⌨️ Administrator Command

```text
/givepokemonegg <player> <species> ...
```

This command creates Pokémon Eggs using arguments comparable to Cobblemon's Pokémon-giving commands. It requires appropriate permissions and is **not a normal player breeding shortcut**.

---

## 📚 Related Guides

- [🥚 Pokémon Breeding](README.md): overview and starting point.
- [🏡 Pastures & Eggs](pastures-and-eggs.md): placement, compatibility and egg collection.
- [🧬 Inheritance & Shiny Hunting](inheritance-and-shinies.md): traits, items and Shiny methods.
- [🔥 CobbleSafari Egg Incubators](../mods-guides/CobbleSafari/wild_eggs_incubators.md): an alternate way to incubate Cobbreeding eggs.
- [⚙️ Settings & Server Rules](configuration.md): actual settings found in the supplied Cobblemon Realms archive.

---

## 📖 Source

Adapted from the [official Cobbreeding FAQ and configuration guide](https://docs.google.com/document/d/1Hk5Iqnzm2NqkXGwzUIvPVFKhAwVHSEM3hyP3Qdhl5g4/edit).

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
If you have questions, suggestions or corrections, join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for wiki-related topics or <strong>@Levels</strong> for modpack-related topics.
</p>
{% endhint %}
