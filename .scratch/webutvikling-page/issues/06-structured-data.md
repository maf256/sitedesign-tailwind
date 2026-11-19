# 06: Structured data: Article/WebPage, BreadcrumbList, author

**What to build:** Valid JSON-LD on `/webutvikling` describing the page, its breadcrumb (Home > Webutvikling) and its author, with one shared `dateModified` constant used by both the markup and the sitemap.

**Blocked by:** 04 (Render body copy)

**Status:** ready-for-agent

**Model:** Opus (the `/career` page already hit a validator error; correctness matters more than speed)

- [ ] Article or WebPage JSON-LD with headline, description, datePublished/dateModified, author and publisher, reusing the existing person schema
- [ ] BreadcrumbList matches the visible breadcrumb or navigation path
- [ ] One date constant feeds both the JSON-LD and the sitemap `lastmod`
- [ ] No errors and no warnings in the Rich Results Test and Schema.org validator, NO and EN
- [ ] Does not conflict with the FAQPage block from ticket 05
