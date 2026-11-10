# 10: Fix canonical, hreflang and og:url pointing to /webdeveloper (404)  [CRITICAL]

**What to build:** Canonical, hreflang alternates, and og:url use /webutvikler.

**Blocked by:** none

**Status:** resolved

## Evidence

Live HTML has `<link rel="canonical" href="https://sitedesign.no/webdeveloper">`, and the same in hreflang. That URL returns 404. Source: `src/app/webutvikler/page.js` lines 18-34. Highest-impact fix.

## Acceptance criteria

- [ ] All `/webdeveloper` URLs in `generateMetadata()` changed to `/webutvikler` (no and en)
- [ ] Verify live HTML: canonical, hreflang, og:url
- [ ] Sitemap and canonical agree

## Comments
