# 02: Replace copy-pasted inline styles with `.metal-card` and `.metal-button`

**What to build:** Every place that repeats the metal gradient/shadow/border styling inline (About page buttons, Navbar, and any other page) uses the shared `.metal-card` / `.metal-button` classes instead, so styling lives in one place.

**Blocked by:** 01: Make the metal styles theme-aware

**Status:** resolved

- [ ] No page or component duplicates the metal button/card gradient, shadow, or border inline
- [ ] Hard-coded light hex colors on those elements are removed
- [ ] Light mode looks the same as before

## Answer

Implemented on branch `site-polish`.
