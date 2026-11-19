# 08: Verify SEO signals and overlap with /webutvikler

**What to build:** Evidence that `/webutvikling` is technically sound and does not cannibalize `/webutvikler`. Findings that need work are filed as new tickets in this folder.

**Blocked by:** 05 (FAQ and schema), 06 (Structured data), 07 (Internal linking)

**Status:** ready-for-agent

**Model:** Sonnet

- [ ] Lighthouse SEO and accessibility pass on the built page, NO and EN
- [ ] Built HTML shows correct canonical, hreflang, og:url and one H1
- [ ] Sitemap, canonical and hreflang agree
- [ ] Structured data validators clean
- [ ] Side-by-side check with `/webutvikler`: different title, H1, meta description and body copy
- [ ] Results appended under a `## Comments` heading

## Comments

Verified on branch `t3/verify-seo-acceptance` (contains `webutvikling-page` tip 66ccc9d). `npm ci`, `next build` with `SELECTED_LANG=no` (served on :3108) then `SELECTED_LANG=en` (:3109). Port 3000 untouched. Lighthouse 12.8.2 via npx, headless Chrome, mobile preset, categories SEO + accessibility. Helper scripts lived in the session scratchpad; JSON-LD output saved in `.scratch/webutvikling-page/verification/`.

- **Lighthouse (localhost):** NO SEO 100 / Accessibility 100; EN SEO 100 / Accessibility 100. No failing audits. Caveat: run against localhost, so it does not exercise the real domains or robots.txt on production.
- **Built HTML, NO:** canonical `https://sitedesign.no/webutvikling`, og:url same, hreflang `no`=sitedesign.no/webutvikling and `en`=en.sitedesign.no/webutvikling, `<html lang="no">`, robots `index, follow`, exactly one H1 (`Webutvikling: Fra idé til raske, skalerbare nettsider og webapplikasjoner`), 8 H2, 26 H3, ~1163 words in `<main>`.
- **Built HTML, EN:** canonical and og:url `https://en.sitedesign.no/webutvikling`, same hreflang pair, `<html lang="en">`, one H1, 8 H2, 26 H3, ~1180 words.
- **Sitemap / canonical / hreflang:** both builds list the same two `/webutvikling` entries (sitedesign.no and en.sitedesign.no), each with `xhtml:link` alternates no + en equal to the page's hreflang tags; each entry's `<loc>` equals the canonical served on that host. lastmod 2026-11-19. Agree.
- **Structured data (structural checks, 20/20 pass in both languages):** @context present, Article has headline (73 chars), image, datePublished/dateModified (ISO, modified >= published), author/publisher resolving to the Person in the same graph, url = canonical; BreadcrumbList positions 1,2 and last item = page URL; one FAQPage with 7 Questions each with acceptedAnswer.text, and every question and answer text appears verbatim on the visible page. **NOT RUN: Google Rich Results Test and Schema.org validator** (both need a public URL; the page is not deployed). Ready to paste (Schema.org validator "Code Snippet" tab, Rich Results Test "Code" tab; paste the contents, each file has two top-level blocks): `.scratch/webutvikling-page/verification/jsonld-no.json` and `.scratch/webutvikling-page/verification/jsonld-en.json`. Each file is an array of the two `<script type="application/ld+json">` blocks (graph, then FAQPage); validators take one object at a time, so paste each array element separately. Criterion left open until run on the deployed URL.
- **Side by side with /webutvikler (NO):** titles differ (`Webutvikling i Oslo: Prosess, teknologi og pris | Majid` vs `Hva er en webutvikler? Rolle og ferdigheter | Majid Askarifarsangi`), H1 differ (`Webutvikling: Fra idé til ...` vs `Hvem er en webutvikler?`), meta descriptions differ. Body: 0 identical sentences (>30 chars) of 67, 1.6% shared 5-word shingles (1.2% EN), word-set Jaccard 0.25 (EN 0.30). No cannibalizing duplication.
- **Rendering (headless Chrome, full-page screenshots):** light and dark at 1280px and 375px, NO and EN, all load with no broken images, dark class applied from `prefers-color-scheme`. Screenshots are in the session scratchpad, not committed. **Finding:** horizontal overflow at 375px (scrollWidth 461/467) on every page, caused by the global header, not the page body: ticket 10.
- **Finding:** rendered `<title>` is 77-78 chars with the brand repeated (`... | Majid | Majid Askarifarsangi`), over the 60-char spec limit: ticket 09. Lighthouse does not flag it.

Status left `ready-for-agent`: Lighthouse, HTML, sitemap and overlap checks pass, but the structured-data validators were not run (need a public URL), and tickets 09 and 10 are open.
