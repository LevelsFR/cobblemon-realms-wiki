# Cobblemon Realms Wiki Changelog

> **Repository-only maintenance history.** This document tracks changes to the **wiki**, not Cobblemon Realms modpack releases. It is public to anyone viewing this GitHub repository but is intentionally **excluded from the generated website, wiki search, navigation and sitemap**. For the modpack release history, use the [official wiki](https://wiki.cobblemon-realms.com/version-history).

## 21 November 2026

### Official modpack identity and legacy GitBook cleanup

- Clarified the bilingual homepage identity: **Cobblemon Realms is the independent Minecraft Pokémon modpack created by LevelsFR** as part of Our Story Collection, not a generic server network.
- Added official Full and Lite CurseForge links, more specific homepage SEO titles and descriptions, and consistent social preview titles.
- Introduced homepage-only JSON-LD for the wiki (`WebSite`), public creator pseudonym (`Person`), modpack (`CreativeWork`) and localized home pages (`WebPage`), with verifiable official profile links.
- Completed previously pending GitBook cleanup: two legacy Markdown files are excluded from public page generation, search and sitemap. Language-switch links now appear only if their destination page exists.
- Expanded automated SEO and legacy-route regression tests. These changes do **not** guarantee Google rankings or corrections to AI Overviews.

Sources: [PR #39](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/39), [PR #44](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/44).

### Spawn Explorer powered by authoritative datapack JSON

- Replaced the initial changelog-based index with **149 actual natural-spawn JSON definitions** from **Cobblemon Biome Expanded Spawns v6.4.1**, pinned to an exact source revision.
- Added filters for Pokémon, rarity, biome and nighttime-only encounters; displayed raw biome IDs, level ranges, relative spawn weights, skylight constraints and links to each source definition.
- Excluded **24 optional-mod spawn files** from this standard-spawn explorer, notably Terralith compatibility data.
- Clearly distinguished the datapack's **v6.4.1** version from the last verified publicly released modpack version (**v6.3**).
- Extended automated source-data, build and SEO checks.

Source: [PR #42](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/42).

### New-player experience, guides and biome cleanup

- Published an interactive **Start Here** checklist in English and French. Checklist state is saved only in the visitor's browser.
- Added the first Spawn Explorer version and a bilingual guide index, replacing the obsolete Mod Guides placeholders.
- Removed outdated Terralith biome references from generation and Legendary Monuments guide tables in both languages.
- Preserved upstream native biome-tag reference entries where they document **optional compatibility**, with explanations that these do not represent installed biomes.
- Added a bilingual preparation guide for the **planned v6.4 removal of Create**, while preserving accurate documentation for **Full v6.3**, where Create remains included.
- Updated the wiki header's version badge to use a central, verified release metadata file.

Source: [PR #41](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/41).

### Legal information and privacy controls

- Published bilingual wiki-specific Legal Notice, Privacy Policy, Cookies and Terms of Use pages.
- Added a site-wide legal footer and Minecraft/Pokémon independence notices.
- Added first-party analytics opt-out controls.
- Added a contact disclosure that reveals the publisher's email only after an explicit user interaction. **It is not a guarantee against extraction from public JavaScript.**
- Covered both languages, the 404 page and legal routes in automated tests.

Source: [PR #40](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/40).

## 20 November 2026

### Search visibility and editorial content

- Improved page descriptions, canonical URLs, Open Graph metadata, social previews and reciprocal English/French `hreflang` links.
- Kept unavailable translations out of alternate-language clusters and marked the branded 404 as non-indexable.
- Improved quest navigation and worlds/dimensions guides.
- Updated the documentation for **Biome Expanded Spawns v6.4.1**, including biome-tag handling and historical spawn-ID notes.

Sources: [PR #38](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/38), [biome-tag guidance commit](https://github.com/LevelsFR/cobblemon-realms-wiki/commit/2228c0a492), [spawn-ID clarification](https://github.com/LevelsFR/cobblemon-realms-wiki/commit/9ed272ee9e).

### OurStoryBot privacy documentation

- Clarified the public OurStoryBot privacy documentation for Minecraft logs and text-file sharing, link visibility, deletion and retention limitations.

Source: [PR #37](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/37).

## 18 November 2026

### Performance and Cloudflare routing

- Switched public HTML, CSS, JS and images to **static-first delivery**, reserving Worker execution for API, administration and selected metadata routes. Preserved D1-backed redirects and the custom 404 page.
- Reduced Minecraft server-status polling, improved caching and backoff, and avoided mistaking an upstream API failure for an offline server.
- Added or expanded Cloudflare routing and server-status regression tests.
- Improved some French CobbleSafari player-facing explanations.

Sources: [PR #35](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/35), [PR #36](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/36).

## 14 November 2026

### OurStoryBot legal pages

- Added separate English and French Terms of Service and Privacy Policy pages for **OurStoryBot**, distinct from the wiki's own legal notices.

Source: [PR #34](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/34).

## 13 October 2026

### Gym World Tour documentation

- Refreshed English and French difficulty guidance using the v6.2.1 trainer configurations, including IV/EV ranges, team sizes and battle preparation details.

Source: [PR #33](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/33).

## 6 August 2026

### Wiki site foundations

- Introduced the static Markdown-to-HTML site generator, bilingual navigation from `SUMMARY.md`, GitBook-style content components and a responsive presentation.
- Established the initial independently hosted website workflow.

Source: [PR #32](https://github.com/LevelsFR/cobblemon-realms-wiki/pull/32).

---

## Maintenance rules

- Update **both** `CHANGELOG.md` and `CHANGELOG_FR.md` when a meaningful wiki change is merged. Newest entries go first.
- Document the actual changes, date, source PR/commit and any necessary limitations. Do not invent releases or assert that a production deployment succeeded without checking.
- Never include credentials, private contact information, personal addresses, hidden administrator URLs, server IP addresses or unpublished private-repository contents.
- These files are intentionally **GitHub-only**. Do not add them to `SUMMARY.md`, the generated website, the search index or the sitemap.
