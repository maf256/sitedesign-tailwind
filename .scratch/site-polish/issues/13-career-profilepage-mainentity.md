# 13: Fix ProfilePage `mainEntity` structured data error on /career

**What to build:** `/career` ProfilePage JSON-LD passes Google's Profile page validation (no "Invalid object type for field mainEntity"), so the page is eligible for the Profile page rich result.

**Blocked by:** none

**Status:** resolved

## Evidence

Search Console email (2026-11-19, "New Profile page structured data issues detected for sitedesign.no"): 1 critical issue, `Invalid object type for field "mainEntity"`. Critical issues stop the page from appearing in Search results for that feature.

Cause: `src/app/career/page.js:84-90` declares a `ProfilePage` whose `mainEntity` is only a reference, `{ "@id": ".../#person" }`. The `Person` node with that `@id` is defined in the JSON-LD of the homepage (`src/app/page.js:80`), not in the `/career` document. Google parses each page on its own and does not follow `@id` references across pages, so it sees a `mainEntity` with no type. Google requires `mainEntity` to be a `Person` or `Organization`.

## Acceptance criteria

- [x] The `/career` `@graph` contains a full `Person` node (`@type: Person`, same `@id` `${base}/#person`, `name`, `url`, `image`, `sameAs`, `jobTitle`, ...) and `ProfilePage.mainEntity` points to it (or embeds it inline)
- [x] The Person data is shared with the homepage (extract one helper, e.g. `src/lib/person-schema.js`) instead of copy-pasted, in both `no` and `en`
- [x] `ProfilePage` also has `dateCreated` / `dateModified` (recommended by Google)
- [ ] Google Rich Results Test shows a valid Profile page for `https://sitedesign.no/career` and `https://en.sitedesign.no/career`, no errors
- [ ] In Search Console, click "Validate fix" on the Profile page issue after deploy
- [x] Check other pages for the same pattern: bare `{ "@id": ... }` references to nodes not defined in the same document (e.g. `/webutvikler` `author`, `/contact`)

## Comments

## Answer

Added `src/lib/person-schema.js` (shared Person node, both languages). `/`, `/career` and `/webutvikler` now include it in their own `@graph`, so `ProfilePage.mainEntity` and `Article.author` resolve inside the same document. `/career` ProfilePage also has `dateCreated`/`dateModified` (`src/lib/page-dates.js`). Built output checked: no unresolved `@id` references on any page.

Still manual after deploy: run the Rich Results Test on both `/career` URLs and click "Validate fix" in Search Console.
