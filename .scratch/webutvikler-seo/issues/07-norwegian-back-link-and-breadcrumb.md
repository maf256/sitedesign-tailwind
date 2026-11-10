# 07: Replace English "Back" link with a Norwegian breadcrumb

**What to build:** Back link is localised and works as a visible breadcrumb matching the BreadcrumbList schema.

**Blocked by:** none

**Status:** resolved

## Evidence

`src/app/webutvikler/page.js:136` hard-codes "Back" on a Norwegian page.

## Acceptance criteria

- [x] "Tilbake" or breadcrumb (Hjem > Webutvikler) in Norwegian, "Back" in English
- [x] Text comes from the translation files, not hard-coded

## Comments
