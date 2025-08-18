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
      siteName: "Majid Askarifarsangi - Web Developer Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/profile.jpg"
              : "https://sitedesign.no/profile.jpg",
          width: 1200,
          height: 630,
          alt: "Web Developer - Majid Askarifarsangi",
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
    <main className="w-full">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="pt-8 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
          >
            <ArrowLeft size={18} /> Back
          </Link>
        </div>

        <section className="flex flex-col justify-center py-12 text-center lg:text-left">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-content">
              {webdeveloper.hero.title}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-content/80 max-w-3xl mx-auto lg:mx-0">
              {webdeveloper.hero.subtitle}
            </p>
          </div>
        </section>

        <section className="py-20 border-t border-content/10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-content mb-8 leading-tight">
                {webdeveloper.what.title}
              </h2>
              <div className="space-y-6 text-lg text-content/80 leading-relaxed">
                <p>{webdeveloper.what.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-base-200 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-content mb-4">
                  {webdeveloper.what.frontend.title}
                </h3>
                <p className="text-content/70">
                  {webdeveloper.what.frontend.description}
                </p>
              </div>
              <div className="bg-base-200 rounded-3xl p-8">
                <h3 className="text-2xl font-semibold text-content mb-4">
                  {webdeveloper.what.backend.title}
                </h3>
                <p className="text-content/70">
                  {webdeveloper.what.backend.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-content/10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-content mb-6">
              {webdeveloper.skills.title}
            </h2>
            <p className="text-xl text-content/70 max-w-3xl mx-auto leading-relaxed">
              {webdeveloper.skills.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webdeveloper.skills.items.map((skill, idx) => (
              <div
                key={idx}
                className="bg-base-200 rounded-3xl p-8 text-center"
              >
                <h3 className="font-semibold text-content mb-2">
                  {skill.title}
                </h3>
                <p className="text-content/70">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-t border-content/10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-content mb-8 leading-tight">
                {webdeveloper.why.title}
              </h2>
              <div className="space-y-6 text-lg text-content/80 leading-relaxed">
                {webdeveloper.why.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
            <div className="bg-base-200 rounded-3xl p-10 space-y-8">
              {webdeveloper.why.points.map((point, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-content mb-2">
                    {point.title}
                  </h3>
                  <p className="text-content/70">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
