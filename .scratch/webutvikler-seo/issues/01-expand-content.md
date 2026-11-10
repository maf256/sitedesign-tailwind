# 01: Expand /webutvikler content to 800-1200 words

**What to build:** The page covers both searcher intents for "webutvikler": informational (what/how to become) and commercial (hire/price).

**Blocked by:** none

**Status:** resolved

## Evidence

Page has about 300 words and reads like a dictionary entry. Top results for the keyword are longer and answer pricing and career questions.

## Acceptance criteria

- [x] 800-1200 words of Norwegian copy, in `src/lang/no.json` (and `en.json`)
- [x] New sections: "Hva koster en webutvikler?", "Hvordan bli webutvikler?", "Frilans, konsulent eller fast ansatt?", "Teknologier" (React, Next.js, WordPress, Sanity, Node), "Slik velger du webutvikler"
- [x] Existing sections kept; no keyword stuffing

## Comments

- Resolved: `webdeveloper.{technologies,become,employment,price,choose}` added (~1080 words total in `webdeveloper.*`, no.json). Rendered by `ExtendedContentSections` in `src/app/webutvikler/page.js`, below the existing sections. Prices are hedged as approximate, ex. VAT. "frilans webutvikler", "webutvikler i Oslo" and "webutvikler nær deg" each appear once, naturally (ticket 09 can build on this). There is no FAQ yet (ticket 04).
