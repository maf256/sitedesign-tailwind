# 04: Fix About page typos and compute age

**What to build:** The About page copy is free of typos, and the displayed age is calculated from the birth date (1983-03-30) so it never goes stale, in both Norwegian and English, wherever it appears (About summary and Contact page).

**Blocked by:** None (can start immediately)

**Status:** resolved

- [ ] The misspelled `summery` key is renamed and all references updated
- [ ] English summary text is corrected (capitalization, "I'm", grammar)
- [ ] Age is derived from the birth date; no hard-coded "41" remains in either language file
- [ ] Both language builds render the correct current age

## Answer

Implemented on branch `site-polish`.
