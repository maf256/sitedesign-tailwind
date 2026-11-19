# 09: Rendered `<title>` exceeds 60 chars (double brand suffix)

**What to build:** The built `<title>` of `/webutvikling` is `Webutvikling i Oslo: Prosess, teknologi og pris | Majid | Majid Askarifarsangi` (78 chars NO) and `Web Development in Oslo: Process, Tech & Cost | Majid | Majid Askarifarsangi` (77 chars EN). The approved copy already ends in `| Majid` (spec: 56/57 chars), and `src/app/layout.js` adds the template `%s | Majid Askarifarsangi`. The result is truncated in SERPs and repeats the brand. `/webutvikler` has the same pre-existing pattern (`... | Majid Askarifarsangi | Majid Askarifarsangi`).

**Blocked by:** none

**Status:** resolved

**Model:** Sonnet

- [ ] Rendered `<title>` on `/webutvikling` is <= 60 chars in NO and EN, with the brand once (e.g. `title: { absolute: ... }` in `generateMetadata`, or drop the suffix from the copy; copy text itself is not rewritten without Gemini)
- [ ] `og:title` unchanged and still <= 60
- [ ] Decide whether `/webutvikler` gets the same fix (separate page, flag to the user rather than change silently)

## Comments

Fixed with `title: { absolute: seo.title }` in generateMetadata (title now 55/53 chars, brand once). `/webutvikler` has the same double-suffix; left unchanged, flagged to the user.
