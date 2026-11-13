# 🧬 Inheritance & Shiny Hunting

{% hint style="info" %}
<p align="center">
Breeding is more than producing eggs. <strong>Cobbreeding</strong> lets offspring inherit several traits from their parents, with special behavior for certain items, forms and Shiny methods.
</p>
{% endhint %}

---

## 🎯 IVs, Natures & Poké Balls

Cobbreeding supports the inheritance of **Individual Values (IVs)**, **Natures** and **Poké Balls**, following rules inspired by the main Pokémon games.

| Item or Mechanic | Role |
| --- | --- |
| **Destiny Knot** | Influences IV inheritance |
| **Power items** | Influence the IVs passed down |
| **Everstone** | Supports Nature inheritance |
| **Poké Ball inheritance** | Allows Poké Ball traits to be passed to offspring |

{% hint style="info" %}
The mod's implementation is not identical to every main-series game. Consult the [official project documentation](https://modrinth.com/mod/cobbreeding) for specific breeding item interactions.
{% endhint %}

---

## 🌍 Forms & Regional Variants

In Cobbreeding, inheritable forms are generally taken from the **mother**, rather than using an Everstone to pass down a father's regional form.

Examples documented by the author include regional variants, **Magikarp Jump patterns** and **Oricorio dance styles**.

Some forms are special cases:

- **Rotom:** offspring use the regular form.
- **Flabébé:** the flower is randomized.
- **Other species features:** whether they are inherited can be controlled through the mod's configuration.

{% hint style="warning" %}
Not every appearance or special form is guaranteed to pass down. The `inheritedFeatures` configuration determines which supported species features may be inherited.
{% endhint %}

---

## 🐺 Alpha Pokémon (Cobbreeding 2.4.x)

**Cobbreeding 2.4.0** introduced a **configurable chance of hatching Alpha Pokémon**, along with an option for **Alpha status inheritance**. These mechanics depend on the installed Cobbreeding version and server settings.

{% hint style="warning" %}
An Alpha egg chance or Alpha inheritance is **not automatically guaranteed** in Cobblemon Realms. The active server configuration has not been independently verified.
{% endhint %}


## ✨ Abilities & Hidden Abilities

The author describes these Ability slot inheritance rules:

| Mother's Ability | Documented chance to keep her Ability slot |
| --- | --- |
| Regular Ability | **80%** |
| Hidden Ability | **60%** |

Other available Ability slots share the remaining probability. Cobbreeding can also allow an offspring to hatch with its **Hidden Ability** even if its mother has a regular Ability, when the relevant setting is enabled.

These percentages describe the mod author's rules, not a separately verified Cobblemon Realms server configuration.

---

## 📖 Egg Moves & Mirror Herb

### 🥚 Passing Down Egg Moves

The mod checks both parents' moves for eligible Egg Moves. It can use **currently equipped moves and benched moves**, so the parents do not necessarily need to have every move in their active moveset.

{% hint style="info" %}
If an expected Egg Move is not passed down, try moving it into the parent's **benched moves**.
{% endhint %}

### 🌿 Using Mirror Herb

A Pokémon holding a **Mirror Herb** in a Pasture can learn eligible Egg Moves from another pastured Pokémon.

- The Pokémon involved do **not** need to share an Egg Group for this transfer.
- The herb's check happens when the Pasture attempts to generate an egg, even if egg creation fails.

---

## ✨ Shiny Breeding

Cobbreeding includes optional, configurable Shiny methods. The mod author's documented **example default multipliers** are:

| Method | Activation condition | Author's example bonus |
| --- | --- | :---: |
| **Masuda** | Parents have **different Original Trainers** | **×4** |
| **Crystal** | At least one Shiny parent; can apply twice if both are Shiny | **×1** |
| **Always** | Applies to every egg | **×1** |

When enabled, the methods can **stack multiplicatively**. The base Shiny rate is taken from the relevant Cobblemon settings.

{% hint style="warning" %}
**These are not verified public-server rates.** The `shinyMethod` multipliers, base Shiny rate and enabled options can differ between Cobblemon Realms instances. In Cobbreeding, the documented **Masuda** condition checks **Original Trainers**, not language regions.
{% endhint %}

---

## 🔗 Continue Learning

- [🏡 Pastures & Eggs](pastures-and-eggs.md): set up a breeding area.
- [🛠️ FAQ & Troubleshooting](troubleshooting.md): diagnose missing eggs, hatching timers and compatibility.

---

## 📖 Sources

[Official Cobbreeding guide](https://docs.google.com/document/d/1Hk5Iqnzm2NqkXGwzUIvPVFKhAwVHSEM3hyP3Qdhl5g4/edit) by Ludichat; [Cobbreeding on Modrinth](https://modrinth.com/mod/cobbreeding).

{% hint style="success" %}
## 📥 Contact Us

<p align="center">
If you have questions, suggestions or corrections, join our <a href="https://discord.gg/kb8NSTF45n">Discord</a>. Contact <strong>@FabLeKebab</strong> for wiki-related topics or <strong>@Levels</strong> for modpack-related topics.
</p>
{% endhint %}
