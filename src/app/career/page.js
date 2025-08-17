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
      <main className="min-h-screen bg-base-100">
        <section className="max-w-4xl mx-auto px-4 py-16">
          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-content mb-4">
              {career.title}
            </h1>
            <p className="text-lg text-content/75 max-w-2xl mx-auto">
              {career.description}
            </p>
          </header>

          {/* Timeline */}
          <section
            className="relative"
            role="region"
            aria-labelledby="timeline-heading"
          >
            <h2 id="timeline-heading" className="sr-only">
              Career Timeline
            </h2>

            {/* Timeline line */}
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 bg-base-300 hidden md:block"
              aria-hidden="true"
            ></div>

            <ol className="space-y-8" role="list">
              {career.experiences.map((experience, index) => (
                <li
                  key={index}
                  className="relative group animate-in fade-in slide-in-from-bottom-4 duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-base-100 hidden md:block group-hover:bg-primary/80 transition-colors duration-200"
                    aria-hidden="true"
                  ></div>

                  {/* Experience card */}
                  <article
                    className="md:ml-16 bg-base-200/30 border border-base-300/30 rounded-2xl p-6 hover:shadow-md hover:border-base-300/50 transition-all duration-300 hover:-translate-y-1"
                    aria-labelledby={`experience-${index}-title`}
                    aria-describedby={`experience-${index}-description`}
                  >
                    {/* Header */}
                    <header className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3
                          id={`experience-${index}-title`}
                          className="text-xl font-semibold text-content mb-2 group-hover:text-primary transition-colors duration-200"
                        >
                          {experience.position}
                        </h3>
                        <p className="text-lg text-primary font-medium mb-1">
                          {experience.company}
                        </p>
                      </div>
                      <div className="mt-3 md:mt-0 md:ml-4">
                        <time
                          className="inline-block bg-base-200/60 text-content/70 px-4 py-2 rounded-full text-sm font-medium"
                          aria-label={`Employment duration: ${experience.duration}`}
                        >
                          {experience.duration}
                        </time>
                      </div>
                    </header>

                    {/* Description */}
                    <p
                      id={`experience-${index}-description`}
                      className="text-content/80 mb-6 leading-relaxed"
                      aria-label={`Job description: ${experience.description}`}
                    >
                      {experience.description}
                    </p>

                    {/* Skills */}
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
                            className="inline-block bg-primary/10 text-primary px-3 py-1.5 rounded-full text-sm font-medium
                                     hover:bg-primary/20 hover:text-primary/90 transition-all duration-200 cursor-default
                                     border border-primary/20 hover:border-primary/30 hover:scale-105"
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
