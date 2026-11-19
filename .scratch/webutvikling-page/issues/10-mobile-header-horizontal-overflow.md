# 10: Site-wide header overflows horizontally at 375px

**What to build:** On every page (`/`, `/about`, `/career`, `/contact`, `/webutvikler`, `/webutvikling`) at a 375px phone viewport, `document.documentElement.scrollWidth` is 461 (NO) / 467 (EN) vs clientWidth 375. The offender is the header nav (`div.flex.items-center.space-x-8` with Hjem/Om/Erfaring/Kontakt, right edge 382px) plus the language/theme control group (`div.flex.items-center.gap-2`, right edge 461px). The `/webutvikling` body content itself does not overflow. Pre-existing, not caused by this feature, so confirm scope with the user before fixing.

**Blocked by:** none

**Status:** ready-for-agent

**Model:** Sonnet

- [ ] No horizontal scroll at 375px and 320px on all pages (check with scrollWidth == clientWidth)
- [ ] Nav stays usable (collapse or wrap), desktop layout unchanged, light and dark mode
