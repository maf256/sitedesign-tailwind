"use client";

import { useState } from "react";

const HEIGHT = "h-[1100px] sm:h-[720px]";
const HEADING = { color: "var(--heading)" };

// Loads the Google Calendar embed only after the visitor asks for it, so no
// third-party cookies are set on page load.
export default function CalendarEmbed({ src, title, labels }) {
  const [loaded, setLoaded] = useState(false);
  // The embed URL carries `?gv=true`; the plain URL opens the full page.
  const newTabHref = src.split("?")[0];

  if (loaded) {
    return (
      <>
        {/* The iframe is inverted in dark mode, which also inverts the
            organizer photo inside it. Re-draw the real photo on top. */}
        <img
          src="/profile.jpg"
          alt=""
          aria-hidden="true"
          className="hidden dark:block absolute z-10 rounded-full object-cover pointer-events-none"
          style={{ top: 26, left: 32, width: 40, height: 40 }}
        />
        <iframe
          src={src}
          width="100%"
          scrolling="no"
          className={`block w-full ${HEIGHT} border-0 rounded bg-white dark:[filter:invert(0.92)_hue-rotate(180deg)]`}
          style={{ colorScheme: "light" }}
          title={title}
        ></iframe>
      </>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-4 text-center rounded metal-card px-4 ${HEIGHT}`}>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="px-8 py-4 rounded-md font-semibold cursor-pointer metal-button focus-visible:outline-2 focus-visible:outline-offset-2"
        style={HEADING}
      >
        {labels.show}
      </button>
      <p className="text-sm max-w-md" style={HEADING}>
        {labels.notice}
      </p>
      <a
        href={newTabHref}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-sm"
        style={HEADING}
      >
        {labels.openInNewTab}
      </a>
    </div>
  );
}
