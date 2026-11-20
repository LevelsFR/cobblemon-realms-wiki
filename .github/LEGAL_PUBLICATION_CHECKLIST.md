# Cobblemon Realms Wiki: legal publication checklist

Prepared: 20 November 2026. This file is an internal publication checklist, not legal advice.

## Verify before merging

- [ ] Confirm whether the wiki publisher operates professionally or non-professionally. Apply [LCEN Article 1-1](https://www.legifrance.gouv.fr/loda/article_lc/LEGIARTI000049568614) to the actual status.
- [ ] Provide the required publisher identification information. When using the non-professional anonymity exception, confirm that the required identity details have been provided to the host. Avoid posting a private home address in public source files unless legally necessary.
- [ ] Add a monitored contact email for website and personal-data requests. Discord alone is not an acceptable contact method under the [Minecraft Usage Guidelines](https://www.minecraft.net/en-us/usage-guidelines).
- [ ] Confirm the host identity, legally published address and phone, and whether another infrastructure provider must be listed.
- [ ] Verify the live site's cookies, Cloudflare security products, third-party embeds and scripts using a clean browser session.
- [ ] Verify the legal basis for the analytics/search/feedback processing. Free-text search queries may include personal information, even when the visitor has no account.
- [ ] Define and document retention, deletion and backup rules for D1: analytics_events, analytics_hourly, search_zero_terms, search_query_events, article_feedback, article_feedback_comments, admin_logs.
- [ ] Define who can respond to access, deletion, opposition and correction requests and the appropriate administrative procedure.
- [ ] Confirm the applicable international transfer arrangements, including Cloudflare and any additional processors.
- [ ] Check publisher advertising and sponsorship disclosures on any pages mentioning BisectHosting and Patreon, as applicable.
- [ ] Confirm third-party logo, artwork and mod licence compliance beyond the non-affiliation disclaimer.
- [ ] Have the legal text reviewed for the site's actual status and business activities.

## Validation and deployment

1. Run `npm ci` and `npm run check:cloudflare`, or `npm run test:legal` for the focused check.
2. Confirm navigation to /legal-notice, /privacy-policy, /cookies and /terms-of-use and their /fr-FR equivalents.
3. Test desktop and mobile layouts and the 404 page in both languages.
4. Test opt-out persistence after refresh, GPC/DNT handling, and verify that both /api/analytics and search telemetry stop after opting out.
5. Confirm footer links and legal disclaimer are visible on every content page and that the Cloudflare deployment has completed.
6. Review sitemap.xml entries and language alternates.

The legal pages intentionally make unknown publisher/contact and retention details explicit. **Do not describe the site as fully legally compliant until these items are resolved.**
