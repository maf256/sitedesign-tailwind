import { translations } from "@/lang/translations";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: translations.metadata.about.title,
  description: translations.metadata.about.description,
  keywords: translations.metadata.keywords,
  authors: translations.metadata.authors,
  creator: translations.metadata.creator,
  publisher: translations.metadata.publisher,
  robots: translations.metadata.robots,
  category: translations.metadata.category,
  classification: translations.metadata.classification,
  applicationName: translations.metadata.applicationName,
  openGraph: {
    title: translations.metadata.about.title,
    description: translations.metadata.about.description,
    url: 'https://sitedesign.no/about',
    siteName: 'Majid Askarifarsangi - Web Developer Oslo',
    images: [
      {
        url: 'https://sitedesign.no/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Majid Askarifarsangi - Full Stack Web Developer',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
    type: 'profile',
    countryName: 'Norway',
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.metadata.about.title,
    description: translations.metadata.about.description,
    images: ['https://sitedesign.no/profile.jpg'],
    creator: '@majid_farsangi',
    site: '@majid_farsangi',
  },
  alternates: {
    canonical: 'https://sitedesign.no/about',
    languages: {
      'en': 'https://sitedesign.no/about',
      'no': 'https://no.sitedesign.no/about',
    },
  },
  other: {
    'msapplication-TileColor': '#071233',
    'theme-color': '#071233',
  },
};

export default function AboutPage() {
  const { about } = translations.pages;

  // About page specific structured data
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": translations.metadata.about.title,
    "description": translations.metadata.about.description,
    "url": "https://sitedesign.no/about",
    "mainEntity": {
      "@type": "Person",
      "name": "Majid Askarifarsangi",
      "jobTitle": "Full Stack Web Developer",
      "description": about.introduction.content,
      "image": "https://sitedesign.no/profile.jpg",
      "url": "https://sitedesign.no",
      "sameAs": [
        "https://www.linkedin.com/in/farsangi",
        "https://github.com/maf256"
      ],
      "alumniOf": about.education.universities.map(edu => ({
        "@type": "CollegeOrUniversity",
        "name": edu.institution,
        "description": edu.degree
      })),
      "hasCredential": about.education.certifications.map(cert => ({
        "@type": "EducationalOccupationalCredential",
        "name": cert.title,
        "credentialCategory": "certificate",
        "recognizedBy": {
          "@type": "Organization",
          "name": cert.institution
        }
      })),
      "knowsAbout": [
        "React Development",
        "Next.js Development", 
        "JavaScript Programming",
        "Node.js Development",
        "Full Stack Development",
        "Web Development",
        "Frontend Development",
        "Backend Development"
      ]
    }
  };

  return (
    <>
      {/* About page structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      
      <HorizontalNavbar />
      <main id="main-content" className="flex flex-col mx-auto w-full max-w-[900px] min-h-screen px-4 lg:px-0 pt-20 md:pt-24 pb-8" tabIndex="-1">
        <div className="w-full">
          {/* About Header */}
          <header className="mb-16 text-center">
            <div className="relative">
              <h1 className="font-old-standard text-4xl lg:text-6xl font-bold text-content mb-6 relative">
                {about.title}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-secondary/30 rounded-full" aria-hidden="true"></div>
              </h1>
              <p className="text-xl lg:text-2xl text-content/70 leading-relaxed max-w-3xl mx-auto font-old-standard" role="doc-subtitle">
                {about.subtitle}
              </p>
            </div>
          </header>

          {/* About Content */}
          <div className="space-y-16">
            {/* Introduction */}
            <section className="prose prose-lg max-w-none" aria-labelledby="introduction-heading">
              <div className="flex items-center mb-8">
                <div className="w-8 md:w-12 h-0.5 bg-secondary/30 mr-3 md:mr-4" aria-hidden="true"></div>
                <h2 id="introduction-heading" className="font-old-standard text-2xl md:text-3xl font-semibold text-content">
                  {about.introduction.title}
                </h2>
              </div>
              <div className="bg-gray-50/30 p-8 rounded-2xl border border-gray-200/20">
                <p className="text-content/80 leading-relaxed text-lg font-old-standard">
                  {about.introduction.content}
                </p>
              </div>
            </section>

            {/* Background & Journey */}
            <section className="prose prose-lg max-w-none" aria-labelledby="background-heading">
              <div className="flex items-center mb-8">
                <div className="w-8 md:w-12 h-0.5 bg-secondary/30 mr-3 md:mr-4" aria-hidden="true"></div>
                <h2 id="background-heading" className="font-old-standard text-2xl md:text-3xl font-semibold text-content">
                  {about.background.title}
                </h2>
              </div>
              <div className="bg-gray-50/30 p-8 rounded-2xl border border-gray-200/20">
                <p className="text-content/80 leading-relaxed text-lg font-old-standard">
                  {about.background.content}
                </p>
              </div>
            </section>

            {/* Full Stack Engineering Capabilities */}
            <section aria-labelledby="skills-heading">
              <div className="flex items-center mb-10">
                <div className="w-8 md:w-12 h-0.5 bg-secondary/30 mr-3 md:mr-4" aria-hidden="true"></div>
                <h2 id="skills-heading" className="font-old-standard text-2xl md:text-3xl font-semibold text-content">
                  {about.skills.title}
                </h2>
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
                <div className="group bg-cream/30 p-6 rounded-2xl border border-gray-200/50 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-1" role="listitem">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300" aria-hidden="true">
                    <div className="w-6 h-6 bg-secondary/60 rounded-md"></div>
                  </div>
                  <h3 className="font-old-standard text-lg font-semibold text-content mb-3 group-hover:text-secondary transition-colors duration-300">
                    {about.skills.frontend.title}
                  </h3>
                  <p className="text-content/70 leading-relaxed group-hover:text-content/80 transition-colors duration-300">
                    {about.skills.frontend.description}
                  </p>
                </div>
                <div className="group bg-cream/30 p-6 rounded-2xl border border-gray-200/50 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-1" role="listitem">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300" aria-hidden="true">
                    <div className="w-6 h-6 bg-secondary/60 rounded-md"></div>
                  </div>
                  <h3 className="font-old-standard text-lg font-semibold text-content mb-3 group-hover:text-secondary transition-colors duration-300">
                    {about.skills.backend.title}
                  </h3>
                  <p className="text-content/70 leading-relaxed group-hover:text-content/80 transition-colors duration-300">
                    {about.skills.backend.description}
                  </p>
                </div>
                <div className="group bg-cream/30 p-6 rounded-2xl border border-gray-200/50 hover:shadow-lg hover:border-gray-300/60 transition-all duration-300 hover:-translate-y-1" role="listitem">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors duration-300" aria-hidden="true">
                    <div className="w-6 h-6 bg-secondary/60 rounded-md"></div>
                  </div>
                  <h3 className="font-old-standard text-lg font-semibold text-content mb-3 group-hover:text-secondary transition-colors duration-300">
                    {about.skills.design.title}
                  </h3>
                  <p className="text-content/70 leading-relaxed group-hover:text-content/80 transition-colors duration-300">
                    {about.skills.design.description}
                  </p>
                </div>
              </div>
            </section>

            {/* Education & Qualifications */}
            <section aria-labelledby="education-heading">
              <div className="flex items-center mb-10">
                <div className="w-8 md:w-12 h-0.5 bg-secondary/30 mr-3 md:mr-4" aria-hidden="true"></div>
                <h2 id="education-heading" className="font-old-standard text-2xl md:text-3xl font-semibold text-content">
                  {about.education.title}
                </h2>
              </div>
              
              {/* Universities */}
              <div className="mb-8">
                <h3 className="font-old-standard text-xl font-medium text-content mb-6" id="university-education">
                  University Education
                </h3>
                <ul className="space-y-6" role="list" aria-labelledby="university-education">
                  {about.education.universities.map((edu, index) => (
                    <li key={index} className="group relative bg-gray-50/30 p-6 rounded-2xl border border-gray-200/30 hover:shadow-md hover:border-gray-300/50 transition-all duration-300 hover:-translate-y-0.5">
                      <div className="absolute left-0 top-6 w-1 h-16 bg-secondary/30 rounded-r-full group-hover:bg-secondary/60 transition-colors duration-300" aria-hidden="true"></div>
                      <div className="ml-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="font-old-standard text-lg font-medium text-content group-hover:text-secondary transition-colors duration-300">
                            {edu.degree}
                          </h4>
                          <time className="text-content/80 text-sm font-medium bg-gray-100/50 px-3 py-1 rounded-full" aria-label={`Study period: ${edu.period}`}>
                            {edu.period}
                          </time>
                        </div>
                        <p className="text-secondary font-medium mb-3 group-hover:text-secondary/80 transition-colors duration-300">
                          {edu.institution}
                        </p>
                        <p className="text-content/70 leading-relaxed group-hover:text-content/80 transition-colors duration-300">
                          {edu.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div>
                <h3 className="font-old-standard text-xl font-medium text-content mb-6" id="professional-certifications">
                  Professional Certifications
                </h3>
                <ul className="grid sm:grid-cols-1 md:grid-cols-2 gap-4" role="list" aria-labelledby="professional-certifications">
                  {about.education.certifications.map((cert, index) => (
                    <li key={index} className="group bg-gray-50/50 p-5 rounded-xl border border-gray-200/30 hover:shadow-sm hover:border-gray-300/50 hover:bg-gray-50/70 transition-all duration-300 hover:-translate-y-0.5">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-old-standard font-medium text-content group-hover:text-secondary transition-colors duration-300 flex-1 pr-2">
                          {cert.title}
                        </h4>
                        <time className="text-xs text-content/50 bg-gray-100/60 px-2 py-1 rounded-md font-medium" aria-label={`Certification year: ${cert.year}`}>
                          {cert.year}
                        </time>
                      </div>
                      <p className="text-content/80 text-sm group-hover:text-content transition-colors duration-300">
                        {cert.institution}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Personal Information */}
            <section aria-labelledby="personal-info-heading">
              <div className="flex items-center mb-8">
                <div className="w-8 md:w-12 h-0.5 bg-secondary/30 mr-3 md:mr-4" aria-hidden="true"></div>
                <h2 id="personal-info-heading" className="font-old-standard text-2xl md:text-3xl font-semibold text-content">
                  {about.personal.title}
                </h2>
              </div>
              <div className="bg-cream/20 p-8 rounded-2xl border border-gray-200/30 hover:shadow-sm hover:border-gray-300/40 transition-all duration-300">
                <ul className="space-y-4" role="list" aria-labelledby="personal-info-heading">
                  {about.personal.details.map((detail, index) => (
                    <li key={index} className="group flex items-center text-content/80 hover:text-content/90 transition-colors duration-300">
                      <div className="w-3 h-3 bg-secondary/60 rounded-full mr-4 flex-shrink-0 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300" aria-hidden="true"></div>
                      <span className="font-old-standard text-base leading-relaxed">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}