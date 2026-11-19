# 02: Content brief and target phrases

**What to build:** A written brief that decides what `/webutvikling` says and how it differs from `/webutvikler`, so the copy ticket has a fixed target. Saved in `spec.md` under a "Content brief" heading.

**Blocked by:** None (can start immediately)

**Status:** resolved

**Model:** Gemini "Argon" sub agent (text and research only, no code)

- [x] Primary keyword "webutvikling" plus 5-10 secondary phrases (e.g. pris, prosess, nettside, frontend, backend, Oslo), each with its intent
- [x] Intent split table: which queries belong to `/webutvikling` and which stay on `/webutvikler`
- [x] H1/H2/H3 outline and a word budget (about 800-1200 words total)
- [x] Meta title (<= 60 chars) and description (<= 160 chars) candidates, NO and EN
- [x] Internal-link plan (which pages link to which, with anchor text)
- [ ] Brief reviewed by the user or the main agent before ticket 03 starts

## Comments

Appended the `## Content brief` section to `.scratch/webutvikling-page/spec.md` covering:
1. Primary keyword (`webutvikling`) and 9 secondary phrases with NO/EN equivalents, search intent, and target page sections.
2. Intent split table separating `/webutvikling` (service, delivery process, architecture, project pricing, agency vs. consultant) from `/webutvikler` (individual role, career path, personal skills, hiring a person).
3. Complete H1/H2/H3 outline with a 950–1,150 word budget (within the 800–1,200 target) and 7 FAQ questions.
4. Two NO and two EN meta title (`<= 60` chars) and meta description (`<= 160` chars) candidates.
5. Internal-link plan across `/`, `/webutvikler`, `/webutvikling`, `/career`, `/about`, `/contact`, and `public/llms.txt`.
6. Proposed JSON key structure nested under `webutvikling` and `seo.webutvikling` matching the reusable component patterns from `/webutvikler`.

