# 07: Internal linking both ways

**What to build:** `/webutvikling` is discoverable from the rest of the site and links onward with descriptive anchor text, so crawlers and visitors find it and the intent split with `/webutvikler` is clear.

**Blocked by:** 04 (Render body copy)

**Status:** resolved

**Model:** Sonnet

- [x] The home page "Hva er webutvikling?" section links to `/webutvikling`
- [x] `/webutvikler` and `/webutvikling` link to each other with distinct, descriptive anchors
- [x] Links from about, career and contact where natural; navbar/footer only if it fits the design
- [x] `/webutvikling` links to contact (primary CTA) and to relevant experience
- [x] `llm.txt` mentions the page
- [x] No orphan page, no broken links

## Comments

- Added links (anchors verbatim from brief section 5): home `whatIsWebDev.serviceLink`, `/webutvikler` `related.webutviklingLink`, `/career` `webutviklingLink`, `/about` `webutviklingLink` (NO + EN), plus `public/llms.txt` entry (file is `llms.txt`, not `llm.txt`).
- Outgoing links from `/webutvikling` (to /webutvikler, /career, /contact) already existed; page.js untouched. Contact, navbar and footer not changed (no natural fit).
- Lint (existing img warning only) and build pass for SELECTED_LANG=no and en. No missing anchors.
