# 06: Structured data: Article/WebPage, BreadcrumbList, author

**What to build:** Valid JSON-LD on `/webutvikling` describing the page, its breadcrumb (Home > Webutvikling) and its author, with one shared `dateModified` constant used by both the markup and the sitemap.

**Blocked by:** 04 (Render body copy)

**Status:** resolved

**Model:** Opus (the `/career` page already hit a validator error; correctness matters more than speed)

- [x] Article or WebPage JSON-LD with headline, description, datePublished/dateModified, author and publisher, reusing the existing person schema
- [x] BreadcrumbList matches the visible breadcrumb or navigation path
- [x] One date constant feeds both the JSON-LD and the sitemap `lastmod`
- [ ] No errors and no warnings in the Rich Results Test and Schema.org validator, NO and EN
- [x] Does not conflict with the FAQPage block from ticket 05

## Comments

- Implemented in `src/app/webutvikling/page.js` as its own `ld+json` script (first child of `<main>`), separate from the ticket 05 FAQPage script. `@graph`: Person (from `personSchema`, included because Google does not follow `@id` across pages, see df96813), Article, BreadcrumbList.
- Article: `headline` = `hero.title` (73/74 chars), `description` = `seo.webdevelopment.description`, `image` = `/webutvikler-frontend-backend.webp`, `inLanguage`, `mainEntityOfPage` = page URL, `author` and `publisher` = `{ "@id": base/#person }`. No `mainEntity` in this block.
- Dates: added `WEBUTVIKLING_DATE_PUBLISHED` (2026-11-19, date the route was added) next to `WEBUTVIKLING_DATE_MODIFIED` in `src/lib/page-dates.js`. The sitemap already reads the modified constant; built sitemap shows `lastmod` 2026-11-19 for /webutvikling.
- BreadcrumbList: Home (`breadcrumbHome`, site root) > `hero.title` (page URL), the same strings the visible `<nav>` renders.
- Offline checks on the built HTML for NO and EN: JSON parses, `@context` is https://schema.org, every `@id` reference resolves inside its own graph, Article has headline/description/image/author/publisher/datePublished/dateModified, breadcrumb names equal the visible breadcrumb text, and the two scripts do not share `@id`s or types. Lint and `next build` pass for SELECTED_LANG=no and en (also after merging ticket 05).
- Not done: the last criterion ("no errors and no warnings in Rich Results Test and Schema.org validator") could not be run. Both need network access and a public URL. Run them on the preview or live URL in ticket 08.
