# 03: Generate Norwegian and English copy for all sections

**What to build:** The complete, final copy for `/webutvikling` in Norwegian and English, ready to drop into the lang files. Natural use of the target phrases, no keyword stuffing, nothing lifted from `/webutvikler`.

**Blocked by:** 02 (Content brief and target phrases)

**Status:** resolved

**Model:** Gemini "Argon" sub agent only. This ticket produces text, not code. A coding model must not write or paraphrase it.

- [x] Copy follows the outline and word budget from ticket 02
- [x] Sections: hero/intro, what is webutvikling, process, technologies, project cost (hedged, approximate, ex. VAT), choosing an agency or consultant, CTA, 6-8 FAQ question/answer pairs
- [x] NO is the primary language; EN is a proper adaptation, not a literal machine translation
- [x] Delivered as JSON-ready strings mirroring the key structure the render ticket will use
- [x] Overlap check against `/webutvikler` copy: no duplicated paragraphs
- [x] Facts (prices, technologies, claims about Majid) checked against existing site content

## Comments

- **Deliverables:** Created `.scratch/webutvikling-page/copy/no.json` and `.scratch/webutvikling-page/copy/en.json` with top-level `"webdevelopment"` (keeping `breadcrumbLabel` and `breadcrumbHome` from ticket 01 alongside `hero`, `cta`, `what`, `process`, `technologies`, `price`, `choose`, `faq` with 7 items, `related`, and `author`) and `"seo": {"webdevelopment": ...}` using the recommended meta title and description candidates from the brief. `src/lang/no.json` and `src/lang/en.json` were left untouched for ticket 04.
- **Word counts (within the 950–1,150 word budget):**
  - **Norwegian (`no.json`):** **1,125 visible words** (1,141 words including `breadcrumbLabel`, `imageAlt`, and `author.name`). Section breakdown: `hero` 32, `cta` 21, `what` 155, `process` 161, `technologies` 154, `price` 142, `choose` 162, `faq` 259, `related` 35, `author` 18. Meta title: 55 chars (`<= 60`); meta description: 154 chars (`<= 160`).
  - **English (`en.json`):** **1,137 visible words** (1,150 words including `breadcrumbLabel`, `imageAlt`, and `author.name`). Section breakdown: `hero` 36, `cta` 24, `what` 147, `process` 167, `technologies` 157, `price` 145, `choose` 161, `faq` 257, `related` 39, `author` 16. Meta title: 53 chars (`<= 60`); meta description: 153 chars (`<= 160`).
- **Overlap check against `/webutvikler` (`src/lang/no.json` and `src/lang/en.json`):**
  - Automated and manual comparison against all `webdeveloper` strings confirmed **0 duplicated paragraphs or sentences** (`> 3` words).
  - Intent split strictly maintained: `/webutvikling` frames frontend/backend as client vs. server/API system architecture, covers the 5-step project delivery lifecycle, evaluates technologies from a business/platform selection angle, scopes pricing by project delivery tiers, and compares hiring a web agency vs. a senior consultant.
- **Fact check & Facts to confirm:**
  - **Verified against existing site content (`src/lang/*.json`, `public/llms.txt`):** Majid Askarifarsangi based in Sandvika/Oslo; software and web developer since 2004 (15+ years experience); consultant at OsloWeb AS since October 2022; UI/UX design in Figma, component documentation in Storybook, deployment on Vercel and Netlify; tech stack including React, Next.js, TypeScript, JavaScript, Node.js (Express.js, Nest.js), PostgreSQL, WordPress, and Sanity; focus on Core Web Vitals, WCAG accessibility, and technical SEO.
  - **Facts to confirm (hedged in copy with `"typisk"`, `"ca."`, `"ofte"`, `"veiledende estimater"`, `"eks. mva."` / `"approx."`, `"typically"`, `"excl. VAT"`):**
    1. **Business website with CMS price range (`ca. 15 000–50 000 kr eks. mva.` / `approx. NOK 15,000–50,000 excl. VAT`):** Present as hedged market guidance in `webdeveloper.price`, not a binding price list; kept clearly hedged as approximate Norwegian market ranges ex. VAT.
    2. **Custom web application & integrations price range (`typisk fra ca. 50 000 kr eks. mva. og oppover` / `typically from approx. NOK 50,000 excl. VAT and up`):** Kept hedged as an approximate starting market range ex. VAT.
    3. **Hourly consulting rate (`ca. 800–1 500 kr/t eks. mva.` / `approx. NOK 800–1,500/hr excl. VAT`):** Kept hedged as typical Norwegian market consulting rates ex. VAT.
    4. **Typical project duration (`3–6 uker` for a standard business website with CMS; `6 uker til flere måneder` for custom web applications/integrations in FAQ Q2):** Not explicitly stated in existing site files; framed as typical, conditional project timelines (`"gjerne 3–6 uker"`, `"vanligvis fra 6 uker til flere måneder"`).
