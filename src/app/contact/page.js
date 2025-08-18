import { translations, getTranslation } from "@/lang/translations";

const { contact } = translations;

export function generateMetadata() {
  const seo = getTranslation("seo.contact");
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
          ? "https://en.sitedesign.no/contact"
          : "https://sitedesign.no/contact",
      languages: {
        no: "https://sitedesign.no/contact",
        en: "https://en.sitedesign.no/contact",
      },
    },
    openGraph: {
      title: seo.openGraph.title,
      description: seo.openGraph.description,
      url:
        lang === "en"
          ? "https://en.sitedesign.no/contact"
          : "https://sitedesign.no/contact",
      siteName: "Majid Askarifarsangi - Web Developer Oslo",
      images: [
        {
          url:
            lang === "en"
              ? "https://en.sitedesign.no/profile.jpg"
              : "https://sitedesign.no/profile.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Majid Askarifarsangi - Web Developer Oslo",
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

// --- Icons ---
const EmailIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Webutvikler e-post"
  >
    <title>Webutvikler e-post</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    role="img"
    aria-label="webutvikler phone"
  >
    <title>Webutvikler phone</title>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Webutvikler logo"
  >
    <title>Webutvikler logo</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="w-5 h-5"
    fill="currentColor"
    viewBox="0 0 24 24"
    role="img"
    aria-label="Webutvikler og webdesign github"
  >
    <title>Webutvikler og webdesign github</title>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
  </svg>
);

// --- Helpers ---
const getContactIcon = (label) => {
  switch (label.toLowerCase()) {
    case "email":
      return <EmailIcon />;
    case "phone":
      return <PhoneIcon />;
    case "address":
      return <LocationIcon />;
    default:
      return <div className="w-6 h-6 bg-primary rounded-full" />;
  }
};

const getSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <LinkedInIcon />;
    case "github":
      return <GitHubIcon />;
    case "whatsapp":
      return <WhatsAppIcon />;
    case "phone":
    case "telefon":
      return <PhoneIcon />;
    default:
      return null;
  }
};

export default function Contact() {
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
        jobTitle: lang === "en" ? "Web Developer" : "Webutvikler",
        telephone: "+47-40189111",
        email: "maf256@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sandvika",
          addressRegion: "Akershus",
          addressCountry: "NO",
        },
        sameAs: [
          "https://www.linkedin.com/in/farsangi",
          "https://github.com/maf256",
          "https://wa.me/4740189111",
        ],
      },
      {
        "@type": "ContactPage",
        url:
          lang === "en"
            ? "https://en.sitedesign.no/contact"
            : "https://sitedesign.no/contact",
        name:
          lang === "en"
            ? "Contact Web Developer Oslo"
            : "Kontakt Webutvikler Oslo",
        description:
          lang === "en"
            ? "Contact professional web developer in Oslo for your next project. Free consultation available."
            : "Kontakt profesjonell webutvikler i Oslo for ditt neste prosjekt. Gratis konsultasjon tilgjengelig.",
        mainEntity: {
          "@id": `${
            lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
          }/#person`,
        },
      },
      {
        "@type": "ProfessionalService",
        name:
          lang === "en"
            ? "Web Development Consultation"
            : "Webutvikling Konsultasjon",
        provider: {
          "@id": `${
            lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
          }/#person`,
        },
        areaServed: {
          "@type": "Place",
          name: "Oslo, Norway",
        },
        availableChannel: [
          {
            "@type": "ServiceChannel",
            servicePhone: "+47-40189111",
          },
          {
            "@type": "ServiceChannel",
            serviceUrl: "mailto:maf256@gmail.com",
          },
          {
            "@type": "ServiceChannel",
            serviceUrl:
              "https://calendar.google.com/calendar/appointments/schedules/AcZssZ08q78jfdTSAvdjzrYsZzvFRPIxbVtTln79uu3M9ITm3VITP81IoKX-YurFrpjs3PoE-IG9z8je",
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
      <main className="w-full">
        <div className="mx-auto max-w-7xl px-8 lg:px-12 ">
          {/* Header Section */}
          <section className="pt-20 pb-24 text-center">
            <h1 className="text-6xl md:text-7xl font-bold text-content mb-6 leading-tight">
              {contact.title}
            </h1>
            <p className="text-xl text-content/80 mb-4 max-w-2xl mx-auto">
              {contact.sections.intro.description}
            </p>
            <p className="text-lg text-primary font-semibold">
              {contact.sections.intro.status}
            </p>
          </section>

          {/* Contact Information Cards */}
          <section className="pb-20">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contact.sections.contactInfo.items.map((info, index) => (
                <div
                  key={index}
                  className="bg-base-200 rounded-3xl p-8 text-center hover:bg-base-300 transition-colors duration-200"
                >
                  <div className="flex justify-center mb-4 text-primary">
                    {getContactIcon(info.label)}
                  </div>
                  <h3 className="!text-lg !font-bold !text-content !mb-2">
                    {info.label}
                  </h3>
                  <div className="text-content font-semibold">
                    {info.link ? (
                      <a
                        href={info.link}
                        className="focus:outline-none focus:underline hover:text-primary transition-colors duration-200"
                        {...(info.label === "Address" && {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        })}
                      >
                        {info.value}
                      </a>
                    ) : (
                      info.value
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <section className="pb-20">
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Personal Information */}
              <section className="bg-base-200 rounded-3xl p-8">
                <h2 className="!text-xl !font-bold !text-content !mb-6">
                  {contact.sections.personalInfo.title}
                </h2>
                <dl className="space-y-4">
                  {contact.sections.personalInfo.items.map((info, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2"
                    >
                      <dt className="text-content/70 text-sm">{info.label}</dt>
                      <dd className="font-semibold text-content text-sm">
                        {info.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              {/* Resources */}
              <section className="bg-primary/5 rounded-3xl p-8 border border-primary/20">
                <h2 className="!text-xl !font-bold !text-content !mb-6">
                  {contact.sections.resources.title}
                </h2>
                <div className="space-y-3">
                  <a
                    href={contact.sections.resources.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white text-center font-semibold py-4 px-6 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-transparent hover:bg-primary/90 transition-colors duration-200"
                  >
                    {contact.sections.resources.downloadCV}
                  </a>
                  <a
                    href={contact.sections.resources.viewLicences.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-base-200 text-content text-center font-semibold py-4 px-6 rounded-2xl border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent hover:bg-base-300 transition-colors duration-200"
                  >
                    {contact.sections.resources.viewLicences.label}
                  </a>
                </div>
              </section>

              {/* Social Links */}
              <section className="bg-base-200 rounded-3xl p-8">
                <h2 className="!text-xl !font-bold !text-content !mb-6">
                  {contact.sections.connect.title}
                </h2>
                <div className="space-y-3">
                  {contact.sections.connect.socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 bg-base-100 text-content font-medium py-3 px-4 rounded-2xl border border-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm hover:bg-base-300 transition-colors duration-200"
                    >
                      <span className="text-primary">
                        {getSocialIcon(social.name)}
                      </span>
                      {social.name}
                    </a>
                  ))}
                </div>
              </section>
            </div>
          </section>

          {/* Calendar Section */}
          <section className="pb-20 ">
            <div className="bg-base-200 rounded-3xl md:p-12 sm:px-0 py-8 ">
              <h2 className="!text-2xl !font-bold !text-content !mb-8 text-center">
                {contact.sections.meeting.title}
              </h2>
              <div className="rounded-2xl overflow-hidden">
                <iframe
                  src={contact.sections.meeting.calendarUrl}
                  width="100%"
                  height="600"
                  className="block w-full border-0"
                  title={contact.sections.meeting.calendarTitle}
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
