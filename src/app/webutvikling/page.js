import Link from "next/link";
import { translations, getTranslation } from "@/lang/translations";
import { headingStyle, textStyle, CtaCard } from "@/components/PageSections";

const { webdevelopment } = translations;

const PATH = "/webutvikling";
const NO_BASE = "https://sitedesign.no";
const EN_BASE = "https://en.sitedesign.no";

export function generateMetadata() {
  const seo = getTranslation("seo.webdevelopment");
  const lang = process.env.SELECTED_LANG || "no";
  const base = lang === "en" ? EN_BASE : NO_BASE;
  const url = `${base}${PATH}`;
  const image = `${base}/majid-askarifarsangi.jpg`;

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "Majid Askarifarsangi" }],
    creator: "Majid Askarifarsangi",
    publisher: "Majid Askarifarsangi",
    alternates: {
      canonical: url,
      languages: {
        no: `${NO_BASE}${PATH}`,
        en: `${EN_BASE}${PATH}`,
      },
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url,
      siteName: "Majid Askarifarsangi - Webutvikler Oslo",
      images: [
        {
          url: image,
          width: 800,
          height: 800,
          alt: "Majid Askarifarsangi",
        },
      ],
      locale: lang === "en" ? "en_US" : "no_NO",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      images: [image],
      creator: "@maf256",
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

export default function WebDevelopmentPage() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ background: "var(--base-100)" }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <nav aria-label={webdevelopment.breadcrumbLabel} className="pt-8 pb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-medium"
                style={{
                  color: "var(--primary)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdevelopment.breadcrumbHome}
              </Link>
            </li>
            <li aria-hidden="true" style={{ color: "var(--text)" }}>
              /
            </li>
            <li aria-current="page" style={{ color: "var(--text)" }}>
              {webdevelopment.hero.title}
            </li>
          </ol>
        </nav>

        <section className="flex flex-col justify-center py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
              style={headingStyle}
            >
              {webdevelopment.hero.title}
            </h1>
            <p
              className="text-xl leading-relaxed max-w-3xl mx-auto"
              style={textStyle}
            >
              {webdevelopment.hero.subtitle}
            </p>
          </div>
        </section>

        <CtaCard cta={webdevelopment.cta} />
      </div>
    </main>
  );
}
