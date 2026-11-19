# 05: FAQ section with FAQPage structured data

**What to build:** A visible FAQ on `/webutvikling` whose questions and answers are also published as FAQPage JSON-LD, identical to what is shown.

**Blocked by:** 04 (Render body copy)

**Status:** resolved

**Model:** Opus (schema correctness and NO/EN parity)

- [x] FAQ questions and answers come from the ticket 03 copy; JSON-LD text equals the visible text
- [ ] Valid in Google's Rich Results Test and the Schema.org validator, NO and EN
- [x] Only one FAQPage block on the page
- [x] Accessible markup (details/summary or equivalent, keyboard operable)

## Comments

- FAQ block in `src/app/webutvikling/page.js` now renders native `<details>`/`<summary>` (keyboard operable via Enter/Space, visible focus ring); each question is an `<h3>` inside the summary, under the FAQ `<h2>` section (`aria-labelledby`).
- One FAQPage JSON-LD `<script>` sits inside the FAQ section, built from `webdevelopment.faq.items`, the same array that drives the visible text. It is kept separate from the Article/Breadcrumb `@graph` (ticket 06) so the two merge cleanly.
- Checked: `npm run lint` clean; `next build` passes with SELECTED_LANG=no and en; built `webutvikling.html` has exactly 1 FAQPage, and its 7 questions and answers equal the visible ones (NO and EN). Google Rich Results / Schema.org validator not run here (needs a deployed URL or a pasted snippet); the structure mirrors the /webutvikler FAQPage node.
- `src/lang` untouched.
