import { translations, getTranslation } from "@/lang/translations";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const { home } = translations;

export function generateMetadata() {
  const seo = getTranslation("seo.home");
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
        lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no",
      languages: {
        no: "https://sitedesign.no",
        en: "https://en.sitedesign.no",
      },
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url: lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no",
      siteName: "Majid Askarifarsangi - Webutvikler Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/majid-askarifarsangi.jpg"
              : "https://sitedesign.no/majid-askarifarsangi.jpg",
          width: 800,
          height: 800,
          alt: "Majid Askarifarsangi - Webutvikler i Oslo",
        },
      ],
      locale: lang === "en" ? "en_US" : "no_NO",
      type: "website",
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
    verification: {
      google: "AB9rSMiJ7pRPqNVjQueN25PAjTmJIriz07HUg7iq4Bg",
    },
  };
}

export default function Home() {
  const lang = process.env.SELECTED_LANG || "no";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${
          lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
        }/#person`,
        name: "Majid Askarifarsangi",
        url:
          lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no",
        image: {
          "@type": "ImageObject",
          url:
            lang === "en"
              ? "https://en.sitedesign.no/majid-askarifarsangi.jpg"
              : "https://sitedesign.no/majid-askarifarsangi.jpg",
          width: 800,
          height: 800,
        },
        sameAs: [
          "https://www.linkedin.com/in/farsangi",
          "https://github.com/maf256",
        ],
        jobTitle: lang === "en" ? "Web Developer" : "Webutvikler",
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sandvika",
          addressRegion: "Akershus",
          addressCountry: "NO",
        },
        telephone: "+47-40189111",
        email: "majid@sitedesign.no",
      },
      {
        "@type": "WebSite",
        "@id": `${
          lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
        }/#website`,
        url:
          lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no",
        name: "Majid Askarifarsangi - Web Developer Oslo",
        description:
          lang === "en"
            ? "Professional web developer in Oslo, Norway. Specializing in React, Next.js, and modern web design."
            : "Profesjonell webutvikler i Oslo, Norge. Spesialiserer på React, Next.js og moderne webdesign.",
        publisher: {
          "@id": `${
            lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
          }/#person`,
        },
        inLanguage: lang === "en" ? "en-US" : "no-NO",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${
          lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
        }/#service`,
        name:
          lang === "en" ? "Web Development Services" : "Webutviklingstjenester",
        description:
          lang === "en"
            ? "Professional web development services including React, Next.js, responsive design, and full-stack development."
            : "Profesjonelle webutviklingstjenester inkludert React, Next.js, responsiv design og fullstack-utvikling.",
        provider: {
          "@id": `${
            lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
          }/#person`,
        },
        areaServed: {
          "@type": "Place",
          name: "Oslo, Norway",
        },
        serviceType: [
          "Web Development",
          "React Development",
          "Next.js Development",
          "Responsive Web Design",
          "Full-stack Development",
        ],
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
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <section className="flex flex-col justify-center py-20" id="home">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className="font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-8"
                style={{
                  color: "var(--heading)",
                  textShadow: "0 1px 1px var(--shine-strong)",
                }}
              >
                {home.title.line1}
                <span
                  className="block"
                  style={{
                    color: "var(--primary)",
                    textShadow: "0 1px 1px var(--shine-strong)",
                  }}
                >
                  {home.title.line2}
                </span>
              </h1>

              <div className="flex flex-col items-center gap-6 mb-8">
                <Image
                  className="rounded-2xl w-28 h-28 md:w-32 md:h-32 object-cover metal-frame"
                  src="/majid-askarifarsangi.jpg"
                  alt={home.profile.alt}
                  width={128}
                  height={128}
                  priority
                />
                <div className="text-center">
                  <div
                    className="text-3xl md:text-4xl font-semibold mb-2"
                    style={{
                      color: "var(--heading)",
                      textShadow: "0 1px 1px var(--shine-strong)",
                    }}
                  >
                    {home.profile.name}
                  </div>
                  <p
                    className="text-lg"
                    style={{
                      color: "var(--text-subtle)",
                      textShadow: "0 1px 0 var(--shine-soft)",
                    }}
                  >
                    &ldquo;{home.profile.tagline}&rdquo;
                  </p>
                </div>
              </div>

              <p
                className="text-xl leading-relaxed max-w-3xl mx-auto"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {home.about.description}
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="rounded-lg p-8 mb-12 metal-card">
              <h2
                className="text-4xl font-semibold mb-6"
                style={{
                  color: "var(--heading)",
                  textShadow: "0 1px 1px var(--shine-strong)",
                }}
              >
                {home.whatIsWebDev.title}
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {home.whatIsWebDev.description}
              </p>
              <Link
                href={"/webutvikler"}
                className="inline-flex items-center gap-2 font-medium"
                style={{
                  color: "var(--primary)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {home.whatIsWebDev.readMore}
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg p-8 metal-button">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    color: "var(--heading)",
                    textShadow: "0 1px 1px var(--shine-strong)",
                  }}
                >
                  {home.whatIsWebDev.frontend.title}
                </h3>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {home.whatIsWebDev.frontend.description}
                </p>
              </div>

              <div className="rounded-lg p-8 metal-button">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    color: "var(--heading)",
                    textShadow: "0 1px 1px var(--shine-strong)",
                  }}
                >
                  {home.whatIsWebDev.backend.title}
                </h3>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {home.whatIsWebDev.backend.description}
                </p>
              </div>
            </div>
          </section>

          <section className="py-16">
            <div className="text-center mb-12">
              <h2
                className="text-4xl font-semibold mb-4"
                style={{
                  color: "var(--heading)",
                  textShadow: "0 1px 1px var(--shine-strong)",
                }}
              >
                {home.approach.title}
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {home.approach.description}
              </p>
            </div>
          </section>

          <section className="py-16">
            <div className="rounded-lg p-8 mb-8 metal-card">
              <h2
                className="text-4xl font-semibold mb-6"
                style={{
                  color: "var(--heading)",
                  textShadow: "0 1px 1px var(--shine-strong)",
                }}
              >
                {home.why.title}
              </h2>
              <div className="space-y-5">
                {home.why.paragraphs.map((p, idx) => (
                  <p
                    key={idx}
                    className="text-lg leading-relaxed"
                    style={{
                      color: "var(--text)",
                      textShadow: "0 1px 0 var(--shine-soft)",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-lg p-6 metal-button">
                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "18px",
                    color: "var(--heading)",
                    textShadow: "0 1px 1px var(--shine-strong)",
                  }}
                >
                  {home.features.support.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {home.features.support.description}
                </p>
              </div>

              <div className="rounded-lg p-6 metal-button">
                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "18px",
                    color: "var(--heading)",
                    textShadow: "0 1px 1px var(--shine-strong)",
                  }}
                >
                  {home.features.ux.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {home.features.ux.description}
                </p>
              </div>

              <div className="rounded-lg p-6 metal-button">
                <h3
                  className="font-semibold mb-2"
                  style={{
                    fontSize: "18px",
                    color: "var(--heading)",
                    textShadow: "0 1px 1px var(--shine-strong)",
                  }}
                >
                  {home.features.responsive.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {home.features.responsive.description}
                </p>
              </div>
            </div>
          </section>

          <section className="py-16 text-center">
            <h2
              className="text-4xl font-semibold mb-4"
              style={{
                color: "var(--heading)",
                textShadow: "0 1px 1px var(--shine-strong)",
              }}
            >
              {home.cta.title}
            </h2>
            <p
              className="text-lg mb-8 max-w-2xl mx-auto"
              style={{
                color: "var(--text)",
                textShadow: "0 1px 0 var(--shine-soft)",
              }}
            >
              {home.cta.description}
            </p>
            <Link
              href={"/contact"}
              className="inline-block px-8 py-3 rounded-lg font-semibold text-lg metal-button"
              style={{
              }}
            >
              {home.cta.button}
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
