import Link from "next/link";
import Image from "next/image";
import { translations, getTranslation } from "@/lang/translations";
import {
  headingStyle,
  textStyle,
  CtaCard,
  SectionIntro,
  SectionHeading,
  InfoCard,
  CardText,
} from "@/components/PageSections";
import { personSchema, getBase } from "@/lib/person-schema";
import {
  WEBUTVIKLING_DATE_PUBLISHED,
  WEBUTVIKLING_DATE_MODIFIED,
} from "@/lib/page-dates";

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

// Article + BreadcrumbList JSON-LD. Kept separate from the FAQPage script
// (ticket 05). The Person node is included in this graph because Google does
// not follow @id references across pages (see src/lib/person-schema.js).
function pageStructuredData() {
  const lang = process.env.SELECTED_LANG || "no";
  const base = getBase(lang);
  const pageUrl = `${base}${PATH}`;
  const person = { "@id": `${base}/#person` };

  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(lang),
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline: webdevelopment.hero.title,
        description: getTranslation("seo.webdevelopment").description,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        inLanguage: lang === "en" ? "en-US" : "no-NO",
        image: `${base}/webutvikler-frontend-backend.webp`,
        author: person,
        publisher: person,
        datePublished: WEBUTVIKLING_DATE_PUBLISHED,
        dateModified: WEBUTVIKLING_DATE_MODIFIED,
      },
      {
        // Mirrors the visible breadcrumb: Home > page title.
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: webdevelopment.breadcrumbHome,
            item: base,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: webdevelopment.hero.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };
}

export default function WebDevelopmentPage() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ background: "var(--base-100)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData()),
        }}
      />
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

        <section className="py-12">
          <SectionHeading>{webdevelopment.what.title}</SectionHeading>
          <p className="text-lg mb-8 max-w-3xl" style={textStyle}>
            {webdevelopment.what.description}
          </p>
          <Image
            src="/webutvikler-frontend-backend.webp"
            alt={webdevelopment.what.imageAlt}
            width={1200}
            height={670}
            sizes="(min-width: 1024px) 896px, 100vw"
            className="w-full h-auto rounded-lg mb-8"
          />
          <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title={webdevelopment.what.frontend.title}>
              <CardText>{webdevelopment.what.frontend.description}</CardText>
            </InfoCard>
            <InfoCard title={webdevelopment.what.backend.title}>
              <CardText>{webdevelopment.what.backend.description}</CardText>
            </InfoCard>
          </div>
        </section>

        <section className="py-12">
          <SectionIntro
            title={webdevelopment.process.title}
            intro={webdevelopment.process.intro}
          />
          <ol className="grid gap-6 list-none p-0">
            {webdevelopment.process.steps.map((step) => (
              <li key={step.title}>
                <InfoCard title={step.title}>
                  <CardText>{step.description}</CardText>
                </InfoCard>
              </li>
            ))}
          </ol>
          <p className="text-lg text-center mt-8" style={textStyle}>
            {webdevelopment.process.outro}
          </p>
        </section>

        <section className="py-12">
          <SectionIntro
            title={webdevelopment.technologies.title}
            intro={webdevelopment.technologies.intro}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {webdevelopment.technologies.items.map((item) => (
              <InfoCard key={item.title} title={item.title}>
                <CardText>{item.description}</CardText>
              </InfoCard>
            ))}
          </div>
        </section>

        <section className="py-12">
          <SectionIntro
            title={webdevelopment.price.title}
            intro={webdevelopment.price.intro}
          />
          <div className="grid md:grid-cols-3 gap-6">
            {webdevelopment.price.ranges.map((item) => (
              <InfoCard key={item.title} title={item.title}>
                <p
                  className="font-semibold mb-2"
                  style={{ fontSize: "16px", color: "var(--primary)" }}
                >
                  {item.range}
                </p>
                <CardText>{item.description}</CardText>
              </InfoCard>
            ))}
          </div>
          <p className="text-lg text-center mt-8" style={textStyle}>
            {webdevelopment.price.note}
          </p>
        </section>

        <section className="py-12">
          <SectionIntro
            title={webdevelopment.choose.title}
            intro={webdevelopment.choose.intro}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {webdevelopment.choose.tips.map((tip) => (
              <InfoCard key={tip.title} title={tip.title}>
                <CardText>{tip.description}</CardText>
              </InfoCard>
            ))}
          </div>
          <p className="text-lg text-center mt-8" style={textStyle}>
            {webdevelopment.choose.outro}
          </p>
        </section>

        {/* FAQ (ticket 05): visible Q&A and FAQPage JSON-LD share one source,
            webdevelopment.faq.items, so the schema text always equals the page. */}
        <section className="py-12" aria-labelledby="faq-heading">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: webdevelopment.faq.items.map((item) => ({
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: { "@type": "Answer", text: item.answer },
                })),
              }),
            }}
          />
          <h2
            id="faq-heading"
            className="text-4xl font-semibold mb-8 text-center"
            style={headingStyle}
          >
            {webdevelopment.faq.title}
          </h2>
          <div className="grid gap-4">
            {webdevelopment.faq.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg metal-button"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg p-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] [&::-webkit-details-marker]:hidden">
                  <h3
                    className="font-semibold"
                    style={{ fontSize: "18px", ...headingStyle }}
                  >
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl leading-none transition-transform group-open:rotate-45"
                    style={{ color: "var(--primary)" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <CardText>{item.answer}</CardText>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="py-8 text-center">
          <p className="text-lg mb-4" style={textStyle}>
            {webdevelopment.related.text}
          </p>
          <ul className="flex flex-col items-center gap-2 list-none p-0">
            {[
              ["/webutvikler", webdevelopment.related.webdeveloperLink],
              ["/career", webdevelopment.related.careerLink],
              ["/contact", webdevelopment.related.contactLink],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-medium underline"
                  style={{ color: "var(--primary)" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CtaCard cta={webdevelopment.cta} />

        <p className="py-8 text-center text-sm" style={textStyle}>
          {webdevelopment.author.text}
        </p>
      </div>
    </main>
  );
}
