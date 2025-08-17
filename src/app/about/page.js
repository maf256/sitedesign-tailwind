import Image from "next/image";
import { translations, getTranslation } from "@/lang/translations";

const { about } = translations;

export function generateMetadata() {
  const seo = getTranslation("seo.about");
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
          ? "https://en.sitedesign.no/about"
          : "https://sitedesign.no/about",
      languages: {
        no: "https://sitedesign.no/about",
        en: "https://en.sitedesign.no/about",
      },
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url:
        lang === "en"
          ? "https://en.sitedesign.no/about"
          : "https://sitedesign.no/about",
      siteName: "Majid Askarifarsangi - Web Developer Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/art-portrait.webp"
              : "https://sitedesign.no/art-portrait.webp",
          width: 1200,
          height: 630,
          alt: "Majid Askarifarsangi - Web Developer in Oslo, Norway",
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
          ? "https://en.sitedesign.no/art-portrait.webp"
          : "https://sitedesign.no/art-portrait.webp",
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

export default function About() {
  const lang = process.env.SELECTED_LANG || "no";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Majid Askarifarsangi",
    url:
      lang === "en"
        ? "https://en.sitedesign.no/about"
        : "https://sitedesign.no/about",
    image:
      lang === "en"
        ? "https://en.sitedesign.no/art-portrait.webp"
        : "https://sitedesign.no/art-portrait.webp",
    jobTitle: lang === "en" ? "Web Developer" : "Webutvikler",
    description:
      lang === "en"
        ? "Experienced full-stack developer with over 15 years of professional work, specializing in React.js, Next.js, Node.js, and PostgreSQL."
        : "Erfaren fullstack-utvikler med over 15 år i bransjen, og jobber spesielt med React.js, Next.js, Node.js og PostgreSQL.",
    birthDate: "1983-03-30",
    birthPlace: {
      "@type": "Place",
      name: "Iran",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sandvika",
      addressRegion: "Akershus",
      addressCountry: "NO",
    },
    telephone: "+47-40189111",
    email: "maf256@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/farsangi",
      "https://github.com/maf256",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "JavaScript",
      "TypeScript",
      "Web Development",
      "Full-stack Development",
    ],
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "PNU University of IRAN",
        description: "Master in Business Strategic",
      },
      {
        "@type": "EducationalOrganization",
        name: "AZAD University of IRAN",
        description: "Bachelor in Computer Engineering",
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "MERCOR",
        description: "React Developer - AI training & prompt engineering",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="w-full">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          {/* Hero Image */}
          <section className="pt-20 pb-8 text-center">
            <div className="mb-8">
              <Image
                className="mx-auto rounded-2xl"
                src="/art-portrait.webp"
                alt={about.imageAlt}
                width={800}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
          </section>

          {/* Page Title */}
          <section className="pt-32 pb-16 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-content mb-4 leading-tight">
              {about.pageTitle}
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              {about.subtitle}
            </p>
          </section>

          {/* Story + Philosophy */}
          <section className="py-16">
            <div className="grid lg:grid-cols-3 gap-8">
              <article className="lg:col-span-2 space-y-8">
                {/* My Story */}
                <div className="bg-base-200 rounded-3xl p-10">
                  <h2 className="text-4xl font-bold text-content mb-6">
                    {about.story.title}
                  </h2>
                  <div className="space-y-6 text-lg text-content/80 leading-relaxed">
                    {about.story.paragraphs.map((para, index) => (
                      <p key={index}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Philosophy */}
                <div className="bg-primary/5 rounded-3xl p-10 border border-primary/20">
                  <h2 className="text-3xl font-bold text-content mb-6">
                    {about.philosophy.title}
                  </h2>
                  <blockquote className="text-xl text-content/80 leading-relaxed">
                    {about.philosophy.quote}
                  </blockquote>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Quick Facts */}
                <section className="bg-base-200 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-content mb-6">
                    {about.quickFacts.title}
                  </h2>
                  <dl className="divide-y divide-content/10">
                    {about.quickFacts.facts.map((fact, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2"
                      >
                        <dt className="text-content/70">{fact.label}</dt>
                        <dd className="font-semibold text-content">
                          {fact.label === "Phone" ? (
                            <a
                              href={`tel:${fact.value.replace(/\s+/g, "")}`}
                              className="hover:underline"
                            >
                              {fact.value}
                            </a>
                          ) : (
                            fact.value
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </section>

                {/* Currently */}
                <section className="bg-base-200 rounded-3xl p-8">
                  <h2 className="text-2xl font-bold text-content mb-6">
                    {about.currently.title}
                  </h2>
                  <ul className="space-y-4">
                    {about.currently.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span
                          className="w-2 h-2 bg-primary rounded-full mt-2"
                          aria-hidden="true"
                        ></span>
                        <div>
                          <p className="font-semibold text-content">
                            {item.role}
                          </p>
                          <p className="text-sm text-content/70">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </aside>
            </div>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2
              className="font-old-standard text-2xl font-medium text-content mb-6"
              id="university-education"
            >
              {about.education.title}
            </h2>
            <ul className="space-y-6" aria-labelledby="university-education">
              {about.education.universities.map((edu, index) => (
                <li
                  key={index}
                  className="group relative bg-gray-50/30 p-6 rounded-2xl border border-gray-200/30 transition-all duration-300"
                >
                  <div
                    className="absolute left-0 top-6 w-1 h-16 bg-secondary/30 rounded-r-full transition-colors duration-300"
                    aria-hidden="true"
                  ></div>
                  <div className="ml-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="font-old-standard text-lg font-medium text-content">
                        {edu.degree}
                      </h3>
                      <time
                        className="text-content/80 text-sm font-medium bg-gray-100/50 px-3 py-1 rounded-full"
                        dateTime={edu.period}
                      >
                        {edu.period}
                      </time>
                    </div>
                    <p className="text-secondary font-medium mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-content/70 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
