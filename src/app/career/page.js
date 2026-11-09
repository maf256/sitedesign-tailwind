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
      siteName: "Majid Askarifarsangi - Web Developer Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/profile.jpg"
              : "https://sitedesign.no/profile.jpg",
          width: 1200,
          height: 630,
          alt: "Majid Askarifarsangi - Professional Career Web Developer Oslo",
        },
      ],
      locale: lang === "en" ? "en_US" : "no_NO",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [
        lang === "en"
          ? "https://en.sitedesign.no/profile.jpg"
          : "https://sitedesign.no/profile.jpg",
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Majid Askarifarsangi",
    url:
      lang === "en"
        ? "https://en.sitedesign.no/career"
        : "https://sitedesign.no/career",
    jobTitle: lang === "en" ? "Web Developer" : "Webutvikler",
    worksFor: [
      {
        "@type": "Organization",
        name: "MERCOR",
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Francisco",
          addressCountry: "USA",
        },
        startDate: "2025-01",
      },
    ],
    hasOccupation: [
      {
        "@type": "Occupation",
        name: lang === "en" ? "React Developer" : "React-utvikler",
        occupationLocation: {
          "@type": "Place",
          name: "San Francisco, USA",
        },
        skills: ["React", "JavaScript", "CSS", "Tailwind", "AI", "TypeScript"],
      },
      {
        "@type": "Occupation",
        name: lang === "en" ? "Software Engineer" : "Programvareutvikler",
        occupationLocation: {
          "@type": "Place",
          name: "San Francisco, USA",
        },
        skills: [
          "Python",
          "AI",
          "Machine Learning",
          "Node.js",
          "React",
          "TypeScript",
        ],
      },
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      "TypeScript",
      "Python",
      "AI",
      "Machine Learning",
      "Web Development",
      "Full-stack Development",
    ],
    experienceRequirements: "15+ years",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen w-full" style={{ background: "#ececec" }}>
        <section className="max-w-4xl mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: "#1d1d1f",
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
              }}
            >
              {career.title}
            </h1>
            <p
              className="text-lg max-w-2xl mx-auto"
              style={{
                color: "#3a3a3a",
                textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
              }}
            >
              {career.description}
            </p>
          </header>

          <section
            className="relative"
            role="region"
            aria-labelledby="timeline-heading"
          >
            <h2 id="timeline-heading" className="sr-only">
              Career Timeline
            </h2>

            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
              style={{
                background: "linear-gradient(180deg, #b8b8b8 0%, #d1d1d1 100%)",
                boxShadow: "1px 0 0 rgba(255,255,255,0.8)",
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
                        "linear-gradient(135deg, #e9e9e9 0%, #c1c1c1 100%)",
                      borderColor: "#ececec",
                      boxShadow:
                        "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.8)",
                    }}
                    aria-hidden="true"
                  ></div>

                  <article
                    className="md:ml-16 p-6 hover:shadow-lg transition-all duration-300"
                    style={{
                      background: "rgba(249, 249, 249, 0.6)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(184, 184, 184, 0.3)",
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
                            color: "#1d1d1f",
                            textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
                          }}
                        >
                          {experience.position}
                        </h3>
                        <p
                          className="text-lg font-medium mb-1"
                          style={{
                            color: "#0066cc",
                            textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
                          }}
                        >
                          {experience.company}
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0 md:ml-4">
                        <time
                          className="inline-block px-3 py-1.5 rounded-md text-sm font-medium metal-button"
                          style={{
                            textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
                          }}
                          aria-label={`Employment duration: ${experience.duration}`}
                        >
                          {experience.duration}
                        </time>
                      </div>
                    </header>

                    <p
                      id={`experience-${index}-description`}
                      className="mb-6 leading-relaxed"
                      style={{
                        fontSize: "17px",
                        color: "#2d2d2d",
                        textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
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
                          Technologies used in this role
                        </h4>
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="inline-block px-3 py-1 rounded-full text-sm font-medium hover:scale-105 transition-all duration-200"
                            style={{
                              background: "rgba(0, 102, 204, 0.08)",
                              border: "1px solid rgba(0, 102, 204, 0.2)",
                              color: "#0066cc",
                              textShadow: "0 1px 0 rgba(255, 255, 255, 0.5)",
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
