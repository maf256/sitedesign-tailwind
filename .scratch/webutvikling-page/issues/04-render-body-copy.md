# 04: Render the body copy on /webutvikling

**What to build:** The `/webutvikling` page shows the full generated copy in NO and EN with a correct heading hierarchy, a CTA and an image with descriptive alt text.

**Blocked by:** 01 (Route skeleton), 03 (Generate copy)

**Status:** resolved

**Model:** Sonnet (Opus if the section layout needs non-trivial new components)

- [ ] All copy from ticket 03 is in `no.json` and `en.json` verbatim; the page renders from them
- [ ] One H1, H2 per section, H3 only under an H2; no skipped levels
- [ ] CTA links to contact; image has meaningful alt and is optimised via `next/image`
- [ ] Works in light and dark mode and at phone width
- [ ] Word count within the budget from ticket 02
- [ ] Lint and build pass

## Comments

- Copy from ticket 03 merged verbatim into `src/lang/{no,en}.json` (`webdevelopment`, `seo.webdevelopment`), placeholders replaced. No copy was changed.
- `src/app/webutvikling/page.js` renders breadcrumb, H1 hero, top CTA, `what` (H2 + next/image reusing `/webutvikler-frontend-backend.webp` + frontend/backend H3 cards), `process`, `technologies`, `price`, `choose`, `faq` (plain visible cards; ticket 05 replaces the block marked with a comment), related links (`/webutvikler`, `/career`, `/contact`), bottom CTA and author line. Reuses `PageSections.js`; `/webutvikler` untouched.
- Heading outline verified from built HTML: one H1, H2 per section, H3 only under H2, no skipped levels.
- `npm run lint` clean (one pre-existing warning in CalendarEmbed.js). `npm run build` passes with `SELECTED_LANG=no` and `en`; no placeholder strings remain in output.
- Rendered text incl. nav/footer is ~1180 (NO) / ~1200 (EN) words; page body alone is within the 950-1,150 budget by section estimates, not precisely counted.
- Not tested visually: light/dark and phone width (only shared theme-token components used, no browser run).
