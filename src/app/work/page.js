import { translations } from "@/lang/translations";
import WorkPageClient from './WorkPageClient';

export const metadata = {
  title: translations.metadata.work.title,
  description: translations.metadata.work.description,
  keywords: translations.metadata.keywords,
  authors: translations.metadata.authors,
  creator: translations.metadata.creator,
  publisher: translations.metadata.publisher,
  robots: translations.metadata.robots,
  category: translations.metadata.category,
  classification: translations.metadata.classification,
  applicationName: translations.metadata.applicationName,
  openGraph: {
    title: translations.metadata.work.title,
    description: translations.metadata.work.description,
    url: 'https://sitedesign.no/work',
    siteName: 'Majid Askarifarsangi - Web Developer Oslo',
    images: [
      {
        url: 'https://sitedesign.no/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Majid Askarifarsangi Work Experience Timeline',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Norway',
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.metadata.work.title,
    description: translations.metadata.work.description,
    images: ['https://sitedesign.no/profile.jpg'],
    creator: '@majid_farsangi',
    site: '@majid_farsangi',
  },
  alternates: {
    canonical: 'https://sitedesign.no/work',
    languages: {
      'en': 'https://sitedesign.no/work',
      'no': 'https://no.sitedesign.no/work',
    },
  },
  other: {
    'msapplication-TileColor': '#071233',
    'theme-color': '#071233',
  },
};

export default function WorkPage() {
  // Work page specific structured data
  const workStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": translations.metadata.work.title,
    "description": translations.metadata.work.description,
    "url": "https://sitedesign.no/work",
    "mainEntity": {
      "@type": "Person",
      "name": "Majid Askarifarsangi",
      "jobTitle": "Full Stack Web Developer",
      "url": "https://sitedesign.no",
      "sameAs": [
        "https://www.linkedin.com/in/farsangi",
        "https://github.com/maf256"
      ],
      "hasOccupation": translations.pages.work.experiences.map(exp => ({
        "@type": "Occupation",
        "name": exp.position,
        "occupationLocation": {
          "@type": "Place",
          "name": exp.location
        },
        "estimatedSalary": {
          "@type": "MonetaryAmountDistribution",
          "name": "Competitive"
        },
        "experienceRequirements": "Professional",
        "skills": exp.skills?.join(", ") || ""
      })),
      "worksFor": translations.pages.work.experiences.map(exp => ({
        "@type": "Organization",
        "name": exp.company,
        "address": exp.location
      }))
    }
  };

  return (
    <>
      {/* Work page structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(workStructuredData),
        }}
      />
      
      <WorkPageClient />
    </>
  );
}