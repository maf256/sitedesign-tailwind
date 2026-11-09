import { translations, getTranslation } from "@/lang/translations";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
          ? "https://en.sitedesign.no/webdeveloper"
          : "https://sitedesign.no/webdeveloper",
      languages: {
        no: "https://sitedesign.no/webdeveloper",
        en: "https://en.sitedesign.no/webdeveloper",
      },
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url:
        lang === "en"
          ? "https://en.sitedesign.no/webdeveloper"
          : "https://sitedesign.no/webdeveloper",
      siteName: "Majid Askarifarsangi - Webutvikler Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/profile.jpg"
              : "https://sitedesign.no/profile.jpg",
          width: 1200,
          height: 630,
          alt: "Webutvikler - Majid Askarifarsangi",
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
  return (
    <main className="min-h-screen w-full" style={{ background: "#ececec" }}>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="pt-8 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-medium"
            style={{
              color: "#0066cc",
              textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
            }}
          >
            <ArrowLeft size={18} /> Back
          </Link>
        </div>

        <section className="flex flex-col justify-center py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1
              className="font-semibold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-6"
              style={{
                color: "#1d1d1f",
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
              }}
            >
              {webdeveloper.hero.title}
            </h1>
            <p
              className="text-xl leading-relaxed max-w-3xl mx-auto"
              style={{
                color: "#2d2d2d",
                textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
              }}
            >
              {webdeveloper.hero.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-lg p-8 mb-8 metal-card">
            <h2
              className="text-4xl font-semibold mb-6"
              style={{
                color: "#1d1d1f",
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
              }}
            >
              {webdeveloper.what.title}
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{
                color: "#2d2d2d",
                textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
              }}
            >
              {webdeveloper.what.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg p-8 metal-button">
              <h3
                className="text-2xl font-semibold mb-3"
                style={{
                  color: "#1d1d1f",
                  textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
                }}
              >
                {webdeveloper.what.frontend.title}
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "#3a3a3a",
                  textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
                }}
              >
                {webdeveloper.what.frontend.description}
              </p>
            </div>
            <div className="rounded-lg p-8 metal-button">
              <h3
                className="text-2xl font-semibold mb-3"
                style={{
                  color: "#1d1d1f",
                  textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
                }}
              >
                {webdeveloper.what.backend.title}
              </h3>
              <p
                style={{
                  fontSize: "17px",
                  color: "#3a3a3a",
                  textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
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
                color: "#1d1d1f",
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
              }}
            >
              {webdeveloper.skills.title}
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{
                color: "#2d2d2d",
                textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
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
                    color: "#1d1d1f",
                    textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
                  }}
                >
                  {skill.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#3a3a3a",
                    textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
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
                color: "#1d1d1f",
                textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
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
                    color: "#2d2d2d",
                    textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
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
                    color: "#1d1d1f",
                    textShadow: "0 1px 1px rgba(255, 255, 255, 0.9)",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#3a3a3a",
                    textShadow: "0 1px 0 rgba(255, 255, 255, 0.7)",
                  }}
                >
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
