// Single source for the Person JSON-LD node. Google parses each page on its
// own and does not follow `@id` references across pages, so every page that
// references `${base}/#person` must also include this node in its own @graph.
export function getBase(lang) {
  return lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no";
}

export function personSchema(lang) {
  const base = getBase(lang);
  return {
    "@type": "Person",
    "@id": `${base}/#person`,
    name: "Majid Askarifarsangi",
    url: base,
    image: {
      "@type": "ImageObject",
      url: `${base}/majid-askarifarsangi.jpg`,
      width: 800,
      height: 800,
    },
    sameAs: ["https://www.linkedin.com/in/farsangi", "https://github.com/maf256"],
    jobTitle: lang === "en" ? "Web Developer" : "Webutvikler",
    worksFor: { "@type": "Organization", name: "Freelance" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sandvika",
      addressRegion: "Akershus",
      addressCountry: "NO",
    },
    telephone: "+47-40189111",
    email: "majid@sitedesign.no",
  };
}
