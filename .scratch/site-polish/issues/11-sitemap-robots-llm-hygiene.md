# 11: Tidy sitemap, robots.txt and llms.txt

**What to build:** Crawler-facing files are accurate and consistent with the pages' canonicals.

**Blocked by:** none

**Status:** resolved

## Evidence

- `sitemap.js` sets every `lastModified` to `new Date()` at build time, so all URLs claim to change on every deploy. Google learns to ignore the field.
- Sitemap has no `alternates.languages`, although every page has an en/no pair.
- `public/robots.txt` lists `Allow:` for `/about`, `/career`, `/contact` but not `/webutvikler`. Harmless under `Allow: /`, but the list is misleading and redundant. It also has a trailing space after `/career`.
- `public/llms.txt` should be checked against the current pages (Webutvikler page, current role) after ticket 05.

## Acceptance criteria

- [ ] `lastModified` reflects real content change dates (per-route constants or git dates), not build time
- [ ] Sitemap entries carry en/no `alternates.languages`
- [ ] robots.txt reduced to `Allow: /` plus the Sitemap line
- [ ] llms.txt lists all five pages and matches current content
- [ ] All sitemap URLs return 200 and equal their page's canonical

## Comments

## Answer

Implemented on branch `seo-fixes`.
