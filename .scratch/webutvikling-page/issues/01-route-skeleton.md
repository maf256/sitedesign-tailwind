# 01: Route skeleton: /webutvikling renders, is in the sitemap, has metadata

**What to build:** Visiting `/webutvikling` on both the NO and EN domains shows a page with a placeholder H1 and intro, correct metadata, and an entry in the sitemap. Prefactor first: pull the shared page building blocks of `/webutvikler` (section heading, card, CTA and similar) into shared components so this page and later tickets reuse them instead of duplicating.

**Blocked by:** None (can start immediately)

**Status:** resolved

**Model:** Sonnet (Opus only if the shared-component extraction proves tangled)

- [ ] `/webutvikling` returns 200 in NO and EN, with a single H1
- [ ] Title, description, canonical, hreflang (no/en) and og:url all point to `/webutvikling` (not `/webutvikler`); canonical matches the sitemap
- [ ] Sitemap lists `/webutvikling` for both languages with its own `lastmod` constant
- [ ] `/webutvikler` renders exactly as before after the extraction
- [ ] Placeholder strings live in `no.json` and `en.json`, not hardcoded
- [ ] Lint and build pass

## Comments

- Shared blocks (headingStyle/textStyle, SectionIntro, SectionHeading, CardTitle, InfoCard, CardText, CtaCard) extracted to `src/components/PageSections.js`; `CtaCard` now takes a `cta` prop. `/webutvikler` markup unchanged.
- `/webutvikling` is `src/app/webutvikling/page.js` (generateMetadata + H1/intro/CTA only). Placeholders live in `no.json`/`en.json` under top-level `webdevelopment` (breadcrumbLabel, breadcrumbHome, hero.{title,subtitle}, cta.{title,description,button}) and `seo.webdevelopment` (title, description, keywords[], openGraph.{title,description}). Later tickets add sections to `webdevelopment`.
- Sitemap entry added with its own `WEBUTVIKLING_DATE_MODIFIED` in `src/lib/page-dates.js`. Lint (one pre-existing warning) and build pass; EN build not run separately.
