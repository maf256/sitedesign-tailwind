# 04: Render the body copy on /webutvikling

**What to build:** The `/webutvikling` page shows the full generated copy in NO and EN with a correct heading hierarchy, a CTA and an image with descriptive alt text.

**Blocked by:** 01 (Route skeleton), 03 (Generate copy)

**Status:** ready-for-agent

**Model:** Sonnet (Opus if the section layout needs non-trivial new components)

- [ ] All copy from ticket 03 is in `no.json` and `en.json` verbatim; the page renders from them
- [ ] One H1, H2 per section, H3 only under an H2; no skipped levels
- [ ] CTA links to contact; image has meaningful alt and is optimised via `next/image`
- [ ] Works in light and dark mode and at phone width
- [ ] Word count within the budget from ticket 02
- [ ] Lint and build pass
