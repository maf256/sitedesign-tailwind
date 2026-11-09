const NO_BASE = "https://sitedesign.no";
const EN_BASE = "https://en.sitedesign.no";

// Last content change per page. To update, run
//   git log -1 --format=%cs -- <page file>
// (include src/lang/*.json if only the copy changed) and paste the date here.
const LAST_MODIFIED = {
  home: "2026-11-09", // src/app/page.js
  about: "2026-11-09", // src/app/about/page.js
  career: "2026-11-09", // src/app/career/page.js
  contact: "2026-11-09", // src/app/contact/page.js
  webutvikler: "2026-11-09", // src/app/webutvikler/page.js
};

// One entry per page.
const PAGES = [
  {
    path: "",
    lastModified: LAST_MODIFIED.home,
    no: { changeFrequency: "weekly", priority: 1.0 },
    en: { changeFrequency: "weekly", priority: 0.9 },
  },
  {
    path: "/about",
    lastModified: LAST_MODIFIED.about,
    no: { changeFrequency: "monthly", priority: 0.8 },
    en: { changeFrequency: "monthly", priority: 0.7 },
  },
  {
    path: "/career",
    lastModified: LAST_MODIFIED.career,
    no: { changeFrequency: "monthly", priority: 0.7 },
    en: { changeFrequency: "monthly", priority: 0.6 },
  },
  {
    path: "/contact",
    lastModified: LAST_MODIFIED.contact,
    no: { changeFrequency: "monthly", priority: 0.9 },
    en: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    path: "/webutvikler",
    lastModified: LAST_MODIFIED.webutvikler,
    no: { changeFrequency: "monthly", priority: 0.9 },
    en: { changeFrequency: "monthly", priority: 0.9 },
  },
];

export default function sitemap() {
  return PAGES.flatMap(({ path, lastModified, no, en }) => {
    const languages = {
      no: `${NO_BASE}${path}`,
      en: `${EN_BASE}${path}`,
    };

    return [
      {
        url: languages.no,
        lastModified,
        ...no,
        alternates: { languages },
      },
      {
        url: languages.en,
        lastModified,
        ...en,
        alternates: { languages },
      },
    ];
  });
}
