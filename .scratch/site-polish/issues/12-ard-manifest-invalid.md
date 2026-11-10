# 12: Fix "ARD manifest is invalid" in PageSpeed Agentic Browsing audit

**What to build:** The site exposes a valid ARD (agent resource discovery) manifest so the PageSpeed Insights "Agentic Browsing" category scores 4/4 instead of 3/4.

**Blocked by:** none

**Status:** open (fix implemented, awaiting deploy and PSI re-run)

## Evidence

- PageSpeed Insights, mobile, `https://sitedesign.no` (Agentic Browsing, score 3/4). Failing audit under *Agent discoverability*:
  - "ARD manifest is invalid. ARD manifest could not be loaded for schema validation."
- The audit says the category is still under development and subject to change.
- The repo has no manifest to load. `public/` holds only `llms.txt`, `robots.txt` and images, and there is no `public/.well-known/` directory. The audit most likely fails because the manifest is missing, unreachable or served with the wrong content type. This still needs confirming.

## Approach

1. Find the current ARD manifest spec and the exact path Lighthouse fetches. Check the Lighthouse agentic-browsing audit source and the linked "browsable websites for AI agents" doc. Do not guess the path or schema.
2. Add the manifest, probably as a static file under `public/` (maybe `public/.well-known/`). List the site's discoverable resources: the five pages, `llms.txt`, and the sitemap.
3. Check it validates against the published schema, and that the file is served with `application/json` and no redirect.
4. Re-run PageSpeed Insights.

## Acceptance criteria

- [x] Spec and manifest URL confirmed from a primary source and noted in this ticket
- [ ] Manifest is served at that URL on production with HTTP 200 and a JSON content type
- [x] Manifest validates against the ARD schema
- [x] Manifest content matches `llms.txt`, `sitemap.js` and the page canonicals
- [ ] PageSpeed Insights Agentic Browsing audit no longer reports "ARD manifest is invalid"

## Comments

## Answer

Added `public/.well-known/ard.json` and an identical `public/.well-known/ai-catalog.json`, both:

```json
{ "specVersion": "1.0", "entries": [] }
```

- The site has no MCP servers, A2A agents or skills to advertise, so `entries` is empty. `llms.txt`, the sitemap and the pages are not ARD resource types, so they are not listed.
- Released Lighthouse 13.5.0 only probes the legacy `/.well-known/ai-catalog.json`. With only `ard.json` present it reports the audit as not applicable. The current spec and the Chrome docs name `ard.json`, so both files are served.
- 13.5.0 requires `specVersion` and accepts only `"1.0"`. `"0.91"` is rejected, even though the spec page is v0.91.
- Verified locally with `lighthouse@13.5.0` against a production build: `ard-schema` score 1. Without `specVersion` it failed with "'specVersion' is a required property".
- Remove `ai-catalog.json` once Lighthouse releases probe `ard.json` first.
- Still to check after deploy: re-run PageSpeed Insights on production.
