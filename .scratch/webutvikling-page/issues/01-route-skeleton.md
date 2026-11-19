# 01: Route skeleton: /webutvikling renders, is in the sitemap, has metadata

**What to build:** Visiting `/webutvikling` on both the NO and EN domains shows a page with a placeholder H1 and intro, correct metadata, and an entry in the sitemap. Prefactor first: pull the shared page building blocks of `/webutvikler` (section heading, card, CTA and similar) into shared components so this page and later tickets reuse them instead of duplicating.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

**Model:** Sonnet (Opus only if the shared-component extraction proves tangled)

- [ ] `/webutvikling` returns 200 in NO and EN, with a single H1
- [ ] Title, description, canonical, hreflang (no/en) and og:url all point to `/webutvikling` (not `/webutvikler`); canonical matches the sitemap
- [ ] Sitemap lists `/webutvikling` for both languages with its own `lastmod` constant
- [ ] `/webutvikler` renders exactly as before after the extraction
- [ ] Placeholder strings live in `no.json` and `en.json`, not hardcoded
- [ ] Lint and build pass
