const NO_BASE = "https://sitedesign.no";
const EN_BASE = "https://en.sitedesign.no";

// One entry per page. `lastModified` is the date the page's content last
// changed (route file or its translations), not the build time. Update it
// when the content changes.
const PAGES = [
  {
    path: "",
    lastModified: "2026-11-09",
    no: { changeFrequency: "weekly", priority: 1.0 },
    en: { changeFrequency: "weekly", priority: 0.9 },
  },
  {
    path: "/about",
    lastModified: "2026-11-09",
    no: { changeFrequency: "monthly", priority: 0.8 },
    en: { changeFrequency: "monthly", priority: 0.7 },
  },
  {
    path: "/career",
    lastModified: "2026-11-09",
    no: { changeFrequency: "monthly", priority: 0.7 },
    en: { changeFrequency: "monthly", priority: 0.6 },
  },
  {
    path: "/contact",
    lastModified: "2026-11-09",
    no: { changeFrequency: "monthly", priority: 0.9 },
    en: { changeFrequency: "monthly", priority: 0.8 },
  },
  {
    path: "/webutvikler",
    lastModified: "2026-11-09",
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
