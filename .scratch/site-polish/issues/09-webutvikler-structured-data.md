# 09: Add structured data to the /webutvikler page

**What to build:** `/webutvikler` ships JSON-LD like the other pages, so it is eligible for rich results.

**Blocked by:** none

**Status:** resolved

## Evidence

Every other page has two `application/ld+json` blocks (Person, WebSite, ProfessionalService, ContactPage, etc.). `/webutvikler` has none. It is an explanatory article ("Hvem er en webutvikler?") and the main target for the "webutvikler" keyword.

## Acceptance criteria

- [ ] JSON-LD on `/webutvikler`: `Article` (or `WebPage`) with author linked to the existing Person, plus `BreadcrumbList`
- [ ] Add `FAQPage` only if the page content really contains Q&A
- [ ] Passes Google Rich Results Test / schema.org validator in both languages
- [ ] Reuses the existing Person data instead of duplicating it

## Comments

## Answer

Implemented on branch `seo-fixes`.
