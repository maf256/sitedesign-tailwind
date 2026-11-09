# 10: Give the 404 page clean, non-indexable SEO signals

**What to build:** Unknown URLs return a 404 whose head says `noindex` only, with its own title, not a copy of the homepage metadata.

**Blocked by:** none

**Status:** resolved

## Evidence

`curl https://sitedesign.no/nonexistent` returns 404 with:

- two robots tags: `index, follow` (inherited from the layout) **and** `noindex`
- homepage title and description ("Webutvikler Oslo | Profesjonell Web Design ...") duplicated onto the error page

Status code is correct, so the damage is limited, but conflicting directives and duplicated metadata are avoidable. Source: `src/app/layout.js` robots/metadata defaults and `src/app/not-found.js`.

## Acceptance criteria

- [ ] 404 response has a single robots tag, `noindex`
- [ ] 404 has its own translated title and description, not the homepage's
- [ ] No canonical or hreflang tags on the 404 page
- [ ] Verified in both languages

## Comments

## Answer

Implemented on branch `seo-fixes`.
