# 01: Make the metal styles theme-aware

**What to build:** The shared metal look (cards, buttons, engraved/subtle text, heading and paragraph shadows) adapts to the active theme. In light mode nothing changes visually; in dark mode the gradients, borders, and text shadows use dark-appropriate values driven by the theme variables.

**Blocked by:** None (can start immediately)

**Status:** resolved

- [ ] `.metal-card` and `.metal-button` render correctly in both light and dark mode
- [ ] Heading, paragraph, `.engraved-text` and `.subtle-text` colors and shadows no longer use hard-coded light values
- [ ] Light mode is visually unchanged

## Answer

Implemented on branch `site-polish`.
