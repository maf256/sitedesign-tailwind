import { translations, getTranslation } from "@/lang/translations";
import Link from "next/link";
import Image from "next/image";

const { webdeveloper } = translations;

export function generateMetadata() {
  const seo = getTranslation("seo.webdeveloper");
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
          ? "https://en.sitedesign.no/webutvikler"
          : "https://sitedesign.no/webutvikler",
      languages: {
        no: "https://sitedesign.no/webutvikler",
        en: "https://en.sitedesign.no/webutvikler",
      },
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url:
        lang === "en"
          ? "https://en.sitedesign.no/webutvikler"
          : "https://sitedesign.no/webutvikler",
      siteName: "Majid Askarifarsangi - Webutvikler Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/majid-askarifarsangi.jpg"
              : "https://sitedesign.no/majid-askarifarsangi.jpg",
          width: 800,
          height: 800,
          alt: "Webutvikler - Majid Askarifarsangi",
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

export default function WebDeveloperPage() {
  const lang = process.env.SELECTED_LANG || "no";
  const base = lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no";
  const pageUrl = `${base}/webutvikler`;
  const seo = getTranslation("seo.webdeveloper");

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: webdeveloper.hero.title,
        description: seo.description,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        inLanguage: lang === "en" ? "en-US" : "no-NO",
        image: `${base}/majid-askarifarsangi.jpg`,
        // References the Person defined on the homepage (`/#person`)
        // instead of duplicating the profile here.
        author: { "@id": `${base}/#person` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: webdeveloper.breadcrumbHome,
            item: base,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: webdeveloper.hero.title,
            item: pageUrl,
          },
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
      <main
        className="min-h-screen w-full"
        style={{ background: "var(--base-100)" }}
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <nav aria-label={webdeveloper.breadcrumbLabel} className="pt-8 pb-4">
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
                  {webdeveloper.breadcrumbHome}
                </Link>
              </li>
              <li aria-hidden="true" style={{ color: "var(--text)" }}>
                /
              </li>
              <li
                aria-current="page"
                style={{ color: "var(--text)" }}
              >
                {webdeveloper.hero.title}
              </li>
            </ol>
          </nav>

          <section className="flex flex-col justify-center py-12 text-center">
            <div className="max-w-4xl mx-auto">
              <h1
                className="font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
                style={{
                  color: "var(--heading)",
                  textShadow: "0 1px 1px var(--shine-strong)",
                }}
              >
                {webdeveloper.hero.title}
              </h1>
              <p
                className="text-xl leading-relaxed max-w-3xl mx-auto"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdeveloper.hero.subtitle}
              </p>
            </div>
          </section>

          <section className="py-8">
            <div className="rounded-lg p-8 text-center metal-card">
              <h2
                className="text-3xl font-semibold mb-3"
                style={{
                  color: "var(--heading)",
                  textShadow: "0 1px 1px var(--shine-strong)",
                }}
              >
                {webdeveloper.cta.title}
              </h2>
              <p
                className="text-lg mb-6"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdeveloper.cta.description}
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg px-8 py-3 font-semibold metal-button"
                style={{
                  color: "var(--primary)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdeveloper.cta.button}
              </Link>
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
                {webdeveloper.what.title}
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdeveloper.what.description}
              </p>
            </div>

            <Image
              src="/webutvikler-frontend-backend.webp"
              alt={webdeveloper.what.imageAlt}
              width={1200}
              height={670}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="w-full h-auto rounded-lg mb-8"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-lg p-8 metal-button">
                <h3
                  className="text-2xl font-semibold mb-3"
                  style={{
                    color: "var(--heading)",
                    textShadow: "0 1px 1px var(--shine-strong)",
                  }}
                >
                  {webdeveloper.what.frontend.title}
                </h3>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {webdeveloper.what.frontend.description}
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
                  {webdeveloper.what.backend.title}
                </h3>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text)",
                    textShadow: "0 1px 0 var(--shine-soft)",
                  }}
                >
                  {webdeveloper.what.backend.description}
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
                {webdeveloper.skills.title}
              </h2>
              <p
                className="text-lg max-w-3xl mx-auto"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdeveloper.skills.description}
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {webdeveloper.skills.items.map((skill, idx) => (
                <div
                  key={idx}
                  className="rounded-lg p-6 text-center metal-button"
                >
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "18px",
                      color: "var(--heading)",
                      textShadow: "0 1px 1px var(--shine-strong)",
                    }}
                  >
                    {skill.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text)",
                      textShadow: "0 1px 0 var(--shine-soft)",
                    }}
                  >
                    {skill.description}
                  </p>
                </div>
              ))}
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
                {webdeveloper.why.title}
              </h2>
              <div className="space-y-5">
                {webdeveloper.why.paragraphs.map((p, idx) => (
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
              {webdeveloper.why.points.map((point, idx) => (
                <div key={idx} className="rounded-lg p-6 metal-button">
                  <h3
                    className="font-semibold mb-2"
                    style={{
                      fontSize: "18px",
                      color: "var(--heading)",
                      textShadow: "0 1px 1px var(--shine-strong)",
                    }}
                  >
                    {point.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text)",
                      textShadow: "0 1px 0 var(--shine-soft)",
                    }}
                  >
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <ExtendedContentSections />

          <section className="py-16 text-center">
            <p
              className="text-lg mb-6"
              style={{
                color: "var(--text)",
                textShadow: "0 1px 0 var(--shine-soft)",
              }}
            >
              {webdeveloper.related.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/career"
                className="font-medium underline"
                style={{ color: "var(--primary)" }}
              >
                {webdeveloper.related.careerLink}
              </Link>
              <Link
                href="/contact"
                className="font-medium underline"
                style={{ color: "var(--primary)" }}
              >
                {webdeveloper.related.contactLink}
              </Link>
            </div>
          </section>
          <section className="py-8">
            <div className="rounded-lg p-8 text-center metal-card">
              <h2
                className="text-3xl font-semibold mb-3"
                style={{
                  color: "var(--heading)",
                  textShadow: "0 1px 1px var(--shine-strong)",
                }}
              >
                {webdeveloper.cta.title}
              </h2>
              <p
                className="text-lg mb-6"
                style={{
                  color: "var(--text)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdeveloper.cta.description}
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-lg px-8 py-3 font-semibold metal-button"
                style={{
                  color: "var(--primary)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                }}
              >
                {webdeveloper.cta.button}
              </Link>
            </div>
          </section>

          <p
            className="text-center pb-16"
            style={{
              fontSize: "16px",
              color: "var(--text)",
              textShadow: "0 1px 0 var(--shine-soft)",
            }}
          >
            {webdeveloper.author.text}
          </p>
        </div>
      </main>
    </>
  );
}

// Ticket 01: extended informational + commercial content.
// Kept as separate components so other page sections can change independently.
const headingStyle = {
  color: "var(--heading)",
  textShadow: "0 1px 1px var(--shine-strong)",
};
const textStyle = {
  color: "var(--text)",
  textShadow: "0 1px 0 var(--shine-soft)",
};

function SectionIntro({ title, intro }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-semibold mb-4" style={headingStyle}>
        {title}
      </h2>
      <p className="text-lg max-w-3xl mx-auto" style={textStyle}>
        {intro}
      </p>
    </div>
  );
}

function InfoCard({ title, children }) {
  return (
    <div className="rounded-lg p-6 metal-button">
      <h3
        className="font-semibold mb-2"
        style={{ fontSize: "18px", ...headingStyle }}
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

function CardText({ children }) {
  return <p style={{ fontSize: "16px", ...textStyle }}>{children}</p>;
}

function ExtendedContentSections() {
  const { technologies, become, employment, price, choose } = webdeveloper;

  return (
    <>
      <section className="py-16">
        <SectionIntro title={technologies.title} intro={technologies.intro} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.items.map((item) => (
            <InfoCard key={item.title} title={item.title}>
              <CardText>{item.description}</CardText>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="rounded-lg p-8 metal-card">
          <h2 className="text-4xl font-semibold mb-6" style={headingStyle}>
            {become.title}
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={textStyle}>
            {become.intro}
          </p>
          <ol className="space-y-6 mb-8">
            {become.steps.map((step, idx) => (
              <li key={step.title} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-semibold metal-button"
                  style={{ color: "var(--primary)" }}
                  aria-hidden="true"
                >
                  {idx + 1}
                </span>
                <div>
                  <h3
                    className="font-semibold mb-1"
                    style={{ fontSize: "18px", ...headingStyle }}
                  >
                    {step.title}
                  </h3>
                  <CardText>{step.description}</CardText>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-lg leading-relaxed" style={textStyle}>
            {become.outro}
          </p>
        </div>
      </section>

      <section className="py-16">
        <SectionIntro title={employment.title} intro={employment.intro} />
        <div className="grid md:grid-cols-3 gap-6">
          {employment.options.map((option) => (
            <InfoCard key={option.title} title={option.title}>
              <CardText>{option.description}</CardText>
            </InfoCard>
          ))}
        </div>
      </section>

      <section className="py-16">
        <SectionIntro title={price.title} intro={price.intro} />
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {price.ranges.map((range) => (
            <InfoCard key={range.title} title={range.title}>
              <p
                className="font-semibold mb-2"
                style={{ fontSize: "17px", color: "var(--primary)" }}
              >
                {range.range}
              </p>
              <CardText>{range.description}</CardText>
            </InfoCard>
          ))}
        </div>
        <p className="text-lg max-w-3xl mx-auto text-center" style={textStyle}>
          {price.note}
        </p>
      </section>

      <section className="py-16">
        <div className="rounded-lg p-8 mb-8 metal-card">
          <h2 className="text-4xl font-semibold mb-6" style={headingStyle}>
            {choose.title}
          </h2>
          <p className="text-lg leading-relaxed" style={textStyle}>
            {choose.intro}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {choose.tips.map((tip) => (
            <InfoCard key={tip.title} title={tip.title}>
              <CardText>{tip.description}</CardText>
            </InfoCard>
          ))}
        </div>
        <p className="text-lg max-w-3xl mx-auto text-center" style={textStyle}>
          {choose.outro}
        </p>
      </section>
    </>
  );
}
