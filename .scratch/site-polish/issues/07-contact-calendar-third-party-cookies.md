# 07: Stop the Contact page calendar embed from costing Best Practices points

**What to build:** The Contact page scores 100 on Best Practices like every other page, without removing the booking calendar. Load the Google Calendar appointment embed only after the visitor asks for it (click-to-load placeholder in the metal card style), so no third-party cookies are set on page load.

**Blocked by:** none

**Status:** resolved

## Evidence

Lighthouse (mobile + desktop) on https://sitedesign.no/contact, from thread "Check Site PageSpeed Scores":

| Page | Best Practices |
|---|---|
| Contact | 78-79 |
| Home, About, Career, Webutvikler | 100 |

Failing audits on `/contact`:

- `third-party-cookies`: `NID` (calendar.google.com) and `_GRECAPTCHA` (google.com/recaptcha, loaded inside the embed). This is the cause of the drop.
- `inspector-issues`: Cookie issue, same calendar embed.

Source: the `<iframe>` in `src/app/contact/page.js` (~line 357, `loading="lazy"` but still loads on page load once near the viewport).

Secondary finding, separate from this ticket: `color-contrast` fails in the footer text (`footer ... p.text-sm`) on every page, which holds Accessibility at 95-96. Worth its own ticket.

## Acceptance criteria

- [ ] Contact page makes no calendar.google.com or recaptcha requests until the visitor clicks a "Show booking calendar" control
- [ ] After clicking, the calendar loads in place, same size, and the dark-mode inversion and photo overlay still work
- [ ] Placeholder uses the shared metal styles, works in light and dark mode, and is keyboard accessible
- [ ] Placeholder text is translated in both languages
- [ ] Lighthouse Best Practices on `/contact` is 100 on mobile and desktop before clicking; Performance and Accessibility do not regress
- [ ] A plain link to open the calendar in a new tab is available as a fallback

## Comments

## Answer

Implemented on branch `seo-fixes`.
