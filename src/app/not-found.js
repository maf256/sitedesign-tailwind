import Link from "next/link";
import { translations } from "@/lang/translations";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import Footer from "@/components/Footer";
import { Home, User, Briefcase, Mail } from "lucide-react";

// Page-specific metadata for 404 page
export const metadata = {
  title: translations.metadata["404"].title,
  description: translations.metadata["404"].description,
  keywords: translations.metadata.keywords,
  authors: translations.metadata.authors,
  creator: translations.metadata.creator,
  publisher: translations.metadata.publisher,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  category: translations.metadata.category,
  classification: translations.metadata.classification,
  applicationName: translations.metadata.applicationName,
  openGraph: {
    title: translations.metadata["404"].title,
    description: translations.metadata["404"].description,
    url: 'https://sitedesign.no/404',
    siteName: 'Majid Askarifarsangi - Web Developer Oslo',
    images: [
      {
        url: 'https://sitedesign.no/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Majid Askarifarsangi - Web Developer Oslo',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Norway',
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.metadata["404"].title,
    description: translations.metadata["404"].description,
    images: ['https://sitedesign.no/profile.jpg'],
    creator: '@majid_farsangi',
    site: '@majid_farsangi',
  },
  alternates: {
    canonical: 'https://sitedesign.no/404',
  },
  other: {
    'msapplication-TileColor': '#071233',
    'theme-color': '#071233',
  },
};

export default function NotFound() {
  const { pages } = translations;
  const notFoundContent = pages["404"];

  // 404 page specific structured data
  const notFoundStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": translations.metadata["404"].title,
    "description": translations.metadata["404"].description,
    "url": "https://sitedesign.no/404",
    "mainEntity": {
      "@type": "Person",
      "name": "Majid Askarifarsangi",
      "jobTitle": "Full Stack Web Developer",
      "url": "https://sitedesign.no",
      "sameAs": [
        "https://www.linkedin.com/in/farsangi",
        "https://github.com/maf256"
      ]
    }
  };

  const actionButtons = [
    {
      href: "/",
      label: notFoundContent.actions.home,
      icon: Home,
      primary: true
    },
    {
      href: "/about",
      label: notFoundContent.actions.about,
      icon: User,
      primary: false
    },
    {
      href: "/work",
      label: notFoundContent.actions.work,
      icon: Briefcase,
      primary: false
    },
    {
      href: "/contact",
      label: notFoundContent.actions.contact,
      icon: Mail,
      primary: false
    }
  ];

  return (
    <>
      {/* 404 page structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(notFoundStructuredData),
        }}
      />
      
      <HorizontalNavbar />
      <main id="main-content" className="min-h-screen bg-base flex flex-col" tabIndex="-1">
        <div className="flex-1 flex items-center justify-center px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Large 404 Number */}
            <div className="space-y-4">
              <h1 className="font-old-standard text-9xl md:text-[12rem] font-bold text-content/20 leading-none" aria-label="Error 404">
                <span aria-hidden="true">404</span>
              </h1>
              <div className="space-y-2">
                <h2 className="font-old-standard text-3xl md:text-4xl font-bold text-content">
                  {notFoundContent.title}
                </h2>
                <p className="font-old-standard text-lg text-content/80" role="doc-subtitle">
                  {notFoundContent.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="max-w-lg mx-auto">
              <p className="text-content/75 font-old-standard text-base leading-relaxed">
                {notFoundContent.description}
              </p>
            </div>

            {/* Action Buttons */}
            <nav className="space-y-6" aria-label="Navigation options">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {actionButtons.map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <Link
                      key={action.href}
                      href={action.href}
                      className={`
                        inline-flex items-center gap-2 px-6 py-3 rounded-lg font-old-standard font-medium transition-all duration-200 focus-ring
                        ${action.primary 
                          ? 'bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg' 
                          : 'bg-gray-100 text-content hover:bg-gray-200 border border-gray-200/50 hover:border-gray-300'
                        }
                      `}
                      aria-label={`Go to ${action.label} page`}
                    >
                      <IconComponent size={18} aria-hidden="true" />
                      {action.label}
                    </Link>
                  );
                })}
              </div>
              
              {/* Quick Navigation Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-md mx-auto mt-8" role="list" aria-label="Quick navigation">
                {actionButtons.slice(1).map((action) => {
                  const IconComponent = action.icon;
                  return (
                    <Link
                      key={action.href}
                      href={action.href}
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-cream hover:bg-gray-100 transition-all duration-200 group focus-ring"
                      role="listitem"
                      aria-label={`Quick link to ${action.label} page`}
                    >
                      <IconComponent 
                        size={24} 
                        className="text-content/80 group-hover:text-secondary transition-colors duration-200" 
                        aria-hidden="true"
                      />
                      <span className="text-sm font-old-standard text-content/75 group-hover:text-content transition-colors duration-200">
                        {action.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Decorative Element */}
            <div className="flex justify-center pt-8">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}