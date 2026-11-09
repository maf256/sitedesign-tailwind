import Image from "next/image";
import { translations, getTranslation } from "@/lang/translations";
import { BIRTH_DATE, withAge } from "@/lib/age";

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
          width: 800,
          height: 600,
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
    birthDate: BIRTH_DATE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sandvika",
      addressRegion: "Akershus",
      addressCountry: "NO",
    },
    telephone: "+47-40189111",
    email: "majid@sitedesign.no",
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
      <main className="w-full" style={{ background: "var(--base-100)" }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <section className="pt-20 pb-8 text-center">
            <div className="mb-8">
              <Image
                className="mx-auto metal-frame"
                src="/art-portrait.webp"
                alt={about.imageAlt}
                width={800}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                style={{ borderRadius: "3px" }}
              />
            </div>
          </section>

          <section className="pt-32 pb-16 text-center">
            <h1
              className="text-6xl md:text-7xl text-content mb-4"
              style={{
                fontWeight: "600",
                color: "var(--heading)",
                textShadow: "0 1px 0 var(--shine-strong)",
                letterSpacing: "-0.8px",
              }}
            >
              {about.pageTitle}
            </h1>
            <p
              style={{
                fontSize: "17px",
                color: "var(--text-subtle)",
                textShadow: "0 1px 0 var(--shine-soft)",
              }}
            >
              {about.subtitle}
            </p>
          </section>

          <section className="mb-16">
            <h2
              className="mb-3"
              style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "var(--heading)",
                textShadow: "0 1px 0 var(--shine-strong)",
              }}
            >
              {about.summary.title}
            </h2>
            <ul className="space-y-1.5 pl-5">
              {about.summary.items.map((item, index) => (
                <li
                  key={index}
                  className="list-disc"
                  style={{
                    fontSize: "20px",
                    lineHeight: "1.6",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {withAge(item)}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <div style={{ display: "flex", flexDirection: "row", gap: "5px" }}>
              <a
                href={about.certs.resume.url}
                target="_blank"
                rel="noopener noreferrer"
                className="metal-button"
                style={{
                  display: "block",
                  padding: "7px 14px",
                  fontSize: "18px",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderRadius: "5px",
                  letterSpacing: "-0.01em",
                }}
              >
                {about.certs.resume.text}
              </a>

              <a
                href="https://drive.google.com/file/d/1ik8Ajr50lamXsje0qRqjnsmJIjM2e9Xd/view"
                target="_blank"
                rel="noopener noreferrer"
                className="metal-button"
                style={{
                  display: "block",
                  padding: "7px 14px",
                  fontSize: "18px",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderRadius: "5px",
                  letterSpacing: "-0.01em",
                }}
              >
                {about.certs.viewLicences}
              </a>

              <a
                href="https://drive.google.com/file/d/1Nh8i9QphiozXYRAhtb-X3-OhE2BovEd1/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="metal-button"
                style={{
                  display: "block",
                  padding: "7px 14px",
                  fontSize: "18px",
                  fontWeight: "500",
                  textDecoration: "none",
                  borderRadius: "5px",
                  letterSpacing: "-0.01em",
                }}
              >
                {about.certs.schoolCert}
              </a>
            </div>
          </section>

          <section className="mb-16">
            <h2
              className="mb-4"
              style={{
                fontSize: "28px",
                fontWeight: "600",
                color: "var(--heading)",
                textShadow: "0 1px 0 var(--shine-strong)",
              }}
            >
              {about.education.title}
            </h2>
            <div className="space-y-5">
              {about.education.universities.map((edu, index) => (
                <div key={index}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "var(--heading)",
                        textShadow: "0 1px 0 var(--shine-strong)",
                      }}
                    >
                      {edu.degree}
                    </h3>
                    <time
                      dateTime={edu.period}
                      style={{
                        fontSize: "16px",
                        color: "var(--text-muted)",
                        textShadow: "0 1px 0 var(--shine-soft)",
                      }}
                    >
                      {edu.period}
                    </time>
                  </div>
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "17px",
                      fontWeight: "500",
                      color: "var(--text)",
                      textShadow: "0 1px 0 var(--shine-soft)",
                    }}
                  >
                    {edu.institution}
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-subtle)",
                      lineHeight: "1.5",
                      textShadow: "0 1px 0 var(--shine-soft)",
                    }}
                  >
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="pb-16">
            <p
              style={{
                fontSize: "20px",
                color: "var(--text)",
                lineHeight: "1.6",
                textShadow: "0 1px 0 var(--shine-soft)",
              }}
            >
              {about.now}
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
