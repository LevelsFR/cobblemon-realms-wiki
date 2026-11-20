# OurStoryBot Privacy Policy

**Last updated: 20 November 2026**

This policy explains how **OurStoryBot**, the community Discord application maintained for **Our Story Collection** by **LevelsFR**, uses data when you interact with its features. It does not replace [Discord's Privacy Policy](https://discord.com/privacy) or the privacy notices of third-party sites.

**Contact:** Join the [official Our Story Discord](https://discord.gg/kb8NSTF45n) and contact **Levels** privately about data protection or deletion. Do not post sensitive personal data in a public channel. The operator should add a dedicated privacy email to this page once one is available.

## 1. Information processed

Depending on the features you use, the bot may process:

- Discord user, message, channel, thread, guild and role identifiers; usernames or display names; message timestamps and actions on bot controls.
- Content you intentionally submit to support forums, bug reports, forms, polls, feedback and staff requests, including technical descriptions and attachments.
- Recruitment applications, relevant answers, optional portfolios, consent to automated clarification, case status and private staff notes. Recruitment discussions are handled in private threads, but Discord administrators and users with relevant thread-management permissions may still have technical access.
- Your selected project-release subscriptions and delivery status, plus bot service statistics, audit trails and moderation actions.
- Technical diagnostics such as Minecraft version, loader and suspected error categories from log files.
- When the file-sharing feature is used, eligible attachment names, sizes, supported text contents, mclo.gs file identifiers, expiration timestamps, and the Discord author's numeric ID. To manage deletion requests, the bot persists the mclo.gs deletion token, the associated log ID, the author's numeric Discord ID and the registration time in a local JSON store. The original file contents are not kept in that deletion-token store.

**Please do not send passwords, access tokens, identity documents, payment information or unnecessary personal details.** Technical logs can contain sensitive information even when automatic masking is used.

## 2. Why this data is used

Our Story Collection uses this information to operate requested Discord features, answer support requests, review applications, provide optional release notifications, prevent abuse, troubleshoot failures, keep staff-only audit records and maintain the bot's reliability.

The processing relies, as relevant, on provision of requested services and legitimate interests in operating and protecting the community. Optional AI assistance for recruitment requires an explicit opt-in; project-release notifications require the member to subscribe. Members can stop future release notifications through the bot's subscription controls.

## 3. Third parties and automated processing

- **Discord** hosts the messages, accounts, permissions, files and interactions through which you use the bot.
- **mclo.gs** receives **processed Minecraft logs and eligible plain-text files** automatically shared from non-excluded server channels and public threads, including text documents that are not Minecraft logs. Direct messages and private threads are not automatically processed. Files are checked for supported extensions, size, format and certain content restrictions before forwarding. The bot masks several common credential patterns, but this redaction is best-effort and not guaranteed. Text submitted through this workflow should be treated as potentially public.
- **Google Gemini** may process limited, filtered text from publicly visible support conversations when AI support is enabled. Raw log files and attachments are not intentionally forwarded to that support model. Recruitment AI clarification runs only when the applicant explicitly agrees and the optional feature is enabled; selected application text is filtered before submission. A model provider may process submitted content under its own applicable terms, including terms for free-tier services.
- The bot's infrastructure, hosting and authorized administrators handle stored feature data to run the service. Public project links may lead to independent services such as CurseForge, Modrinth, Patreon or BisectHosting, each with its own privacy practices.

External service providers may process data outside the European Economic Area. Consult their own privacy notices for additional information.

## 4. Visibility and access

Forum support posts may be readable by community members with access to the relevant forum. Private recruitment data is intended for the applicant and designated authorized staff, subject to Discord's actual permissions. Staff moderation, support history and internal notes are accessible only through the bot's configured permission checks and underlying Discord permissions.

A message set as ephemeral is shown only to its intended user by Discord. This does not mean records stored by the bot are automatically deleted.

## 5. Retention and deletion

Different features have different lifecycles. Support cases may be retained in active or archived histories to allow investigations and restoration; closing a ticket **does not automatically erase its record**. Recruitment records, staff audit history, feedback and knowledge-base entries may remain for operational review. Release subscriptions remain until changed or removed, while delivery-attempt receipts have a rolling retention mechanism (currently up to 90 days). Some aggregated message statistics are periodically pruned.

The bot currently does **not** enforce one universal automatic deletion deadline across all these records, and backups or Discord-hosted messages may have separate lifecycles. The operator must define and document appropriate retention periods for each category before representing this policy as fully compliant. You may request access, correction or deletion of eligible records using the contact method above. Requests will be assessed in light of applicable obligations, safety and the rights of others.

### Automatic file sharing: Minecraft logs and text documents

OurStoryBot automatically processes eligible attachments in allowed Discord server channels. Supported files currently include plain-text files such as `.txt` and `.log`, recognized Minecraft crash reports and supported gzip-compressed text. A maximum of **10 eligible attachments per message** may be processed, with a **10 MiB per-file limit** and **25,000-line limit** after decompression. Unsupported files, excluded channels, direct messages and private threads are not uploaded by this feature.

When accepted, a sanitized copy of each eligible file is sent to the external **[mclo.gs](https://mclo.gs/)** service to make it readable in a browser. **Anyone with the resulting mclo.gs link may access that hosted copy.** The original Discord attachment stays in Discord; deleting the original Discord message does not remove the externally hosted file. Do not post sensitive or private documents in channels where automatic sharing is enabled.

The bot attempts to send the author **one private receipt** per message, listing uploaded files, their links and available deletion controls. A receipt may not arrive if Discord blocks direct messages. Where mclo.gs supplies a valid deletion token and the bot can persist it, **only the original author's Discord account can use the bot's delete control** to request deletion of the hosted copy. The bot keeps this credential server-side and does not expose the token in the public channel or private receipt. Successful deletion through this control **does not delete** the original Discord attachment or copies previously downloaded, cached or redistributed by others. Files are otherwise subject to the **expiration date returned by mclo.gs**, which may change under the provider's own retention rules. OurStoryBot does not control that third-party retention schedule.

The bot's deletion-token records are local operational data; **no universal automatic deletion deadline is currently enforced for these records**. Contact Levels privately through the official Discord to request help with a remaining hosted file or related local data. OurStoryBot is not affiliated with mclo.gs. See the [mclo.gs API documentation](https://api.mclo.gs/) for the external hosting and deletion mechanism.

## 6. Your choices and rights

Subject to applicable data-protection law, you may request access, rectification, erasure, restriction, portability where applicable, or object to processing. You may also withdraw optional consent without affecting prior lawful processing. Contact **Levels** privately through the [official Discord](https://discord.gg/kb8NSTF45n), identifying your Discord account and the relevant ticket or application, without publishing extra personal details. You may also lodge a complaint with your applicable data protection authority, including the [CNIL](https://www.cnil.fr/) in France.

Deleting a Discord message or leaving the server does not necessarily erase a separate bot record. Third-party platforms may retain copies under their own terms.

## 7. Security and changes

The application uses role checks, bounded local storage, restricted private threads and some sanitization of technical content. No internet service can guarantee absolute security. This notice will be updated if the features, processing, operator contact details or retention rules materially change.

**Related:** [OurStoryBot Terms of Service](/ourstorybot/terms-of-service).