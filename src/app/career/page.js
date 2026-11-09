import Link from "next/link";
import { translations, getTranslation } from "@/lang/translations";

const { career } = translations;

export function generateMetadata() {
  const seo = getTranslation("seo.career");
  const lang = process.env.SELECTED_LANG || "no";

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "Majid Askarifarsangi" }],
    creator: "Majid Askarifarsangi",
    publisher: "Majid Askarifarsangi",
    alternates: {
      canonical:
        lang === "en"
          ? "https://en.sitedesign.no/career"
          : "https://sitedesign.no/career",
      languages: {
        no: "https://sitedesign.no/career",
        en: "https://en.sitedesign.no/career",
      },
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url:
        lang === "en"
          ? "https://en.sitedesign.no/career"
          : "https://sitedesign.no/career",
      siteName: lang === "en" ? "Majid Askarifarsangi - Web Developer Oslo" : "Majid Askarifarsangi - Webutvikler Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/majid-askarifarsangi.jpg"
              : "https://sitedesign.no/majid-askarifarsangi.jpg",
          width: 800,
          height: 800,
          alt: lang === "en" ? "Majid Askarifarsangi - Web Developer in Oslo" : "Majid Askarifarsangi - Webutvikler i Oslo",
        },
      ],
      locale: lang === "en" ? "en_US" : "no_NO",
      type: "profile",
    },
    twitter: {
      card: "summary",
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [
        lang === "en"
          ? "https://en.sitedesign.no/majid-askarifarsangi.jpg"
          : "https://sitedesign.no/majid-askarifarsangi.jpg",
      ],
      creator: "@majid_dev",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function CareerPage() {
  const lang = process.env.SELECTED_LANG || "no";

  const base = lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no";
  const pageUrl = `${base}/career`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profilepage`,
        url: pageUrl,
        name: career.heading,
        inLanguage: lang === "en" ? "en-US" : "no-NO",
        mainEntity: { "@id": `${base}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Majid Askarifarsangi", item: base },
          { "@type": "ListItem", position: 2, name: career.title, item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: career.timelineHeading,
        itemListElement: career.experiences.map((e, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${e.position} – ${e.company}`,
          description: e.description,
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen w-full" style={{ background: "var(--base-100)" }}>
        <section className="max-w-4xl mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: "var(--heading)",
                textShadow: "0 1px 1px var(--shine-strong)",
              }}
            >
              {career.heading}
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{
                color: "var(--text)",
                textShadow: "0 1px 0 var(--shine-soft)",
              }}
            >
              {career.description}
            </p>
            <p className="mt-4">
              <Link
                href="/webutvikler"
                className="font-medium underline"
                style={{ color: "var(--primary)" }}
              >
                {career.learnMore}
              </Link>
            </p>
          </header>

          <section
            className="relative"
            role="region"
            aria-labelledby="timeline-heading"
          >
            <h2 id="timeline-heading" className="sr-only">
              {career.timelineHeading}
            </h2>

            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
              style={{
                background: "linear-gradient(180deg, var(--card-border) 0%, var(--base-300) 100%)",
                boxShadow: "1px 0 0 var(--card-shine)",
              }}
              aria-hidden="true"
            ></div>

            <ol className="space-y-8" role="list">
              {career.experiences.map((experience, index) => (
                <li
                  key={index}
                  className="relative group animate-in fade-in slide-in-from-bottom-4 duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div
                    className="absolute left-6 w-4 h-4 rounded-full border-4 hidden md:block group-hover:scale-110 transition-transform duration-200"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--button-top) 0%, var(--button-bottom) 100%)",
                      borderColor: "var(--base-100)",
                      boxShadow:
                        "0 1px 3px var(--card-drop), inset 0 1px 0 var(--card-shine)",
                    }}
                    aria-hidden="true"
                  ></div>

                  <article
                    className="md:ml-16 p-6 hover:shadow-lg transition-all duration-300"
                    style={{
                      background: "color-mix(in srgb, var(--card-top) 60%, transparent)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid color-mix(in srgb, var(--card-border) 30%, transparent)",
                      borderRadius: "8px",
                    }}
                    aria-labelledby={`experience-${index}-title`}
                    aria-describedby={`experience-${index}-description`}
                  >
                    <header className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3
                          id={`experience-${index}-title`}
                          className="text-xl font-semibold mb-2"
                          style={{
                            color: "var(--heading)",
                            textShadow: "0 1px 1px var(--shine-strong)",
                          }}
                        >
                          {experience.position}
                        </h3>
                        <p
                          className="text-lg font-medium mb-1"
                          style={{
                            color: "var(--primary)",
                            textShadow: "0 1px 0 var(--shine-soft)",
                          }}
                        >
                          {experience.company}
                        </p>
                      </div>
                      {experience.duration && (
                      <div className="mt-3 md:mt-0 md:ml-4">
                        <time
                          className="inline-block px-3 py-1.5 rounded-md text-sm font-medium metal-button"
                          style={{
                            textShadow: "0 1px 0 var(--shine-soft)",
                          }}
                          aria-label={`${career.durationLabel}: ${experience.duration}`}
                        >
                          {experience.duration}
                        </time>
                      </div>
                      )}
                    </header>

                    <p
                      id={`experience-${index}-description`}
                      className="mb-6 leading-relaxed"
                      style={{
                        fontSize: "17px",
                        color: "var(--text)",
                        textShadow: "0 1px 0 var(--shine-soft)",
                      }}
                      aria-label={`Job description: ${experience.description}`}
                    >
                      {experience.description}
                    </p>

                    {experience.skills && experience.skills.length > 0 && (
                      <div
                        className="flex flex-wrap gap-2"
                        aria-labelledby={`skills-${index}-heading`}
                      >
                        <h4 id={`skills-${index}-heading`} className="sr-only">
                          {career.skillsLabel}
                        </h4>
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200"
                            style={{
                              background: "color-mix(in srgb, var(--primary) 8%, transparent)",
                              border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
                              color: "var(--primary)",
                              textShadow: "0 1px 0 var(--shine-soft)",
                            }}
                            aria-label={`Technology skill: ${skill}`}
                            tabIndex="0"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </li>
              ))}
            </ol>
          </section>
        </section>
      </main>
    </>
  );
}
