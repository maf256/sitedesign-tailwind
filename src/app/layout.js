import localFont from "next/font/local";
import "./globals.css";
import { translations } from "@/lang/translations";

const oldStandard = localFont({
  src: [
    {
      path: "../../public/oldstandard.woff2",
      weight: "400",
    },
    {
      path: "../../public/oldstandardbold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-old-standard",
});

export const metadata = translations.metadata;

export default function RootLayout({ children }) {
  const lang = process.env.SELECTED_LANG || "en";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    name: "Majid Askarifarsangi",
    jobTitle: "Full Stack Web Developer",
    description:
      "Professional full stack web developer specializing in React, Next.js, Node.js, and modern web technologies.",
    url: "https://sitedesign.no",
    email: "majid@sitedesign.no",
    telephone: "+47-40189111",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sandvika",
      addressCountry: "Norway",
    },
    sameAs: [
      "https://linkedin.com/in/majid-askarifarsangi",
      "https://github.com/majid-askarifarsangi",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Full Stack Development",
      "Web Development",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationLocation: {
        "@type": "Country",
        name: "Norway",
      },
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "PNU University of Iran",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "AZAD University of Iran",
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "MERCOR",
        address: "San Francisco, USA",
      },
    ],
    serviceType: "Web Development",
    areaServed: ["Norway", "Remote"],
    availableLanguage: ["English", "Persian", "Bokomal", "Norwegian"],
  };

  return (
    <html lang={lang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${oldStandard.variable} antialiased`}>{children}</body>
    </html>
  );
}
