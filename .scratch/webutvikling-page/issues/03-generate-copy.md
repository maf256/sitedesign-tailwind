# 03: Generate Norwegian and English copy for all sections

**What to build:** The complete, final copy for `/webutvikling` in Norwegian and English, ready to drop into the lang files. Natural use of the target phrases, no keyword stuffing, nothing lifted from `/webutvikler`.

**Blocked by:** 02 (Content brief and target phrases)

**Status:** ready-for-agent

**Model:** Gemini "Argon" sub agent only. This ticket produces text, not code. A coding model must not write or paraphrase it.

- [ ] Copy follows the outline and word budget from ticket 02
- [ ] Sections: hero/intro, what is webutvikling, process, technologies, project cost (hedged, approximate, ex. VAT), choosing an agency or consultant, CTA, 6-8 FAQ question/answer pairs
- [ ] NO is the primary language; EN is a proper adaptation, not a literal machine translation
- [ ] Delivered as JSON-ready strings mirroring the key structure the render ticket will use
- [ ] Overlap check against `/webutvikler` copy: no duplicated paragraphs
- [ ] Facts (prices, technologies, claims about Majid) checked against existing site content
