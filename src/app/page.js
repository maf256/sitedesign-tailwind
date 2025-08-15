import Hero from "@/components/Hero";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { translations } from "@/lang/translations";

// Page-specific metadata for Home page
export const metadata = {
  title: translations.metadata.home.title,
  description: translations.metadata.home.description,
  keywords: translations.metadata.keywords,
  authors: translations.metadata.authors,
  creator: translations.metadata.creator,
  publisher: translations.metadata.publisher,
  robots: translations.metadata.robots,
  category: translations.metadata.category,
  classification: translations.metadata.classification,
  applicationName: translations.metadata.applicationName,
  openGraph: {
    title: translations.metadata.home.title,
    description: translations.metadata.home.description,
    url: "https://sitedesign.no",
    siteName: "Majid Askarifarsangi - Web Developer Oslo",
    images: [
      {
        url: "https://sitedesign.no/profile.jpg",
        width: 1200,
        height: 630,
        alt: translations.pages.home.hero.profileAlt,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "Norway",
  },
  twitter: {
    card: "summary_large_image",
    title: translations.metadata.home.title,
    description: translations.metadata.home.description,
    images: ["https://sitedesign.no/profile.jpg"],
    creator: "@majid_farsangi",
    site: "@majid_farsangi",
  },
  alternates: {
    canonical: "https://sitedesign.no",
    languages: {
      en: "https://sitedesign.no",
      no: "https://no.sitedesign.no",
    },
  },
  verification: {
    google: "AB9rSMiJ7pRPqNVjQueN25PAjTmJIriz07HUg7iq4Bg",
  },
  other: {
    "msapplication-TileColor": "#071233",
    "theme-color": "#071233",
  },
};

export default function Home() {
  const { hero } = translations.pages.home;

  // Home page specific structured data
  const homeStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: translations.metadata.home.title,
    description: translations.metadata.home.description,
    url: "https://sitedesign.no",
    mainEntity: {
      "@type": "Person",
      name: `${hero.name.first} ${hero.name.last}`,
      jobTitle: `${hero.roles.role1}, ${hero.roles.role2}`,
      description: hero.description,
      image: "https://sitedesign.no/profile.jpg",
      url: "https://sitedesign.no",
      sameAs: [
        "https://www.linkedin.com/in/farsangi",
        "https://github.com/maf256",
      ],
    },

  };

  return (
    <>
      {/* Home page structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />

      <HorizontalNavbar />
      <main
        id="main-content"
        className="pt-16 mx-auto w-full max-w-[900px] min-h-screen px-4 lg:px-8"
        tabIndex="-1"
      >
        <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
          <Hero />
        </div>
      </main>
      <Footer />
    </>
  );
}
