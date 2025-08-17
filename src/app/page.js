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
      siteName: "Majid Askarifarsangi - Web Developer Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/profile.jpg"
              : "https://sitedesign.no/profile.jpg",
          width: 1200,
          height: 630,
          alt: "Majid Askarifarsangi - Professional Web Developer in Oslo",
        },
      ],
      locale: lang === "en" ? "en_US" : "no_NO",
      type: "website",
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
    verification: {
      google: "your-google-verification-code",
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
              ? "https://en.sitedesign.no/profile.jpg"
              : "https://sitedesign.no/profile.jpg",
          width: 400,
          height: 400,
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
        email: "maf256@gmail.com",
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
      <main className="min-h-screen w-full">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <section
            className="min-h-screen flex flex-col justify-center py-20"
            id="home"
          >
            <div className="max-w-4xl mx-auto text-center lg:text-left">
              <h1 className="font-bold !text-5xl md:text-7xl lg:!text-8xl leading-[0.9] tracking-tight text-content mb-8">
                {home.title.line1}
                <span className="block text-primary">{home.title.line2}</span>
              </h1>

              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8 mb-8">
                <Image
                  className="border-2 border-content/20 rounded-3xl w-24 h-24 md:w-28 md:h-28 object-cover"
                  src="/profile.jpg"
                  alt={home.profile.alt}
                  width={112}
                  height={112}
                  priority
                />
                <div className="text-center lg:text-left">
                  <div className="text-3xl md:text-4xl font-semibold text-content mb-2">
                    {home.profile.name}
                  </div>
                  <p className="text-content/70 text-xl">
                    &ldquo;{home.profile.tagline}&rdquo;
                  </p>
                </div>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-content/80 max-w-3xl mx-auto lg:mx-0">
                {home.about.description}
              </p>
            </div>
          </section>

          <section className="py-20 border-t border-content/10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-content mb-8 leading-tight">
                  {home.whatIsWebDev.title}
                </h2>
                <div className="space-y-6 text-lg text-content/80 leading-relaxed">
                  <p>{home.whatIsWebDev.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary hover:underline transition-all duration-200"
                  >
                    {home.whatIsWebDev.readMore}
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-base-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold text-content mb-4">
                    {home.whatIsWebDev.frontend.title}
                  </h3>
                  <p className="text-content/70 leading-relaxed">
                    {home.whatIsWebDev.frontend.description}
                  </p>
                </div>

                <div className="bg-base-200 rounded-3xl p-8">
                  <h3 className="text-2xl font-semibold text-content mb-4">
                    {home.whatIsWebDev.backend.title}
                  </h3>
                  <p className="text-content/70 leading-relaxed">
                    {home.whatIsWebDev.backend.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 border-t border-content/10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
                {home.approach.title}
              </h2>
              <p className="text-xl text-content/70 max-w-3xl mx-auto leading-relaxed">
                {home.approach.description}
              </p>
            </div>
          </section>

          <section className="py-20 border-t border-content/10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-content mb-8 leading-tight">
                  {home.why.title}
                </h2>
                <div className="space-y-6 text-lg text-content/80 leading-relaxed">
                  {home.why.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="bg-base-200 rounded-3xl p-10 space-y-8">
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-content mb-2">
                      {home.features.support.title}
                    </h3>
                    <p className="text-content/70">
                      {home.features.support.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-content mb-2">
                      {home.features.ux.title}
                    </h3>
                    <p className="text-content/70">
                      {home.features.ux.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="font-semibold text-content mb-2">
                      {home.features.responsive.title}
                    </h3>
                    <p className="text-content/70">
                      {home.features.responsive.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
              {home.cta.title}
            </h2>
            <p className="!text-md text-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              {home.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={"/contact"}
                className="bg-primary/30 text-content px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                {home.cta.button}
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
