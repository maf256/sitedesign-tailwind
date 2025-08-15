import { translations } from "@/lang/translations";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Download,
  ExternalLink
} from "lucide-react";
import Link from "next/link";
import HorizontalNavbar from "@/components/HorizontalNavbar";
import Footer from "@/components/Footer";

// Icon mapping for dynamic icon rendering
const iconMap = {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Download,
  ExternalLink
};

export const metadata = {
  title: translations.metadata.contact.title,
  description: translations.metadata.contact.description,
  keywords: translations.metadata.keywords,
  authors: translations.metadata.authors,
  creator: translations.metadata.creator,
  publisher: translations.metadata.publisher,
  robots: translations.metadata.robots,
  category: translations.metadata.category,
  classification: translations.metadata.classification,
  applicationName: translations.metadata.applicationName,
  openGraph: {
    title: translations.metadata.contact.title,
    description: translations.metadata.contact.description,
    url: 'https://sitedesign.no/contact',
    siteName: 'Majid Askarifarsangi - Web Developer Oslo',
    images: [
      {
        url: 'https://sitedesign.no/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Majid Askarifarsangi - Web Developer Oslo',
        type: 'image/jpeg',
      }
    ],
    locale: 'en_US',
    type: 'website',
    countryName: 'Norway',
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.metadata.contact.title,
    description: translations.metadata.contact.description,
    images: ['https://sitedesign.no/profile.jpg'],
    creator: '@majid_farsangi',
    site: '@majid_farsangi',
  },
  alternates: {
    canonical: 'https://sitedesign.no/contact',
    languages: {
      'en': 'https://sitedesign.no/contact',
      'no': 'https://no.sitedesign.no/contact',
    },
  },
  other: {
    'msapplication-TileColor': '#071233',
    'theme-color': '#071233',
  },
};

export default function ContactPage() {
  const { pages } = translations;
  const contactData = pages.contact;

  // Contact page specific structured data
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": translations.metadata.contact.title,
    "description": translations.metadata.contact.description,
    "url": "https://sitedesign.no/contact",
    "mainEntity": {
      "@type": "Person",
      "name": "Majid Askarifarsangi",
      "jobTitle": "Full Stack Web Developer",
      "url": "https://sitedesign.no",
      "email": "maf256@gmail.com",
      "telephone": "+47-40189111",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sandvika",
        "addressRegion": "Oslo",
        "addressCountry": "Norway"
      },
      "sameAs": [
        "https://www.linkedin.com/in/farsangi",
        "https://github.com/maf256",
        "https://wa.me/4740189111"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+47-40189111",
        "contactType": "customer service",
        "email": "maf256@gmail.com",
        "availableLanguage": ["English", "Norwegian", "Persian"]
      }
    }
  };

  return (
    <>
      {/* Contact page structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />

      <HorizontalNavbar />
      <main id="main-content" className="min-h-screen bg-base pt-20 pb-16" tabIndex="-1">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Page Header with enhanced styling */}
          <header className="text-center mb-20">
            <div className="inline-block mb-6">
              <h1 className="font-old-standard text-4xl md:text-5xl lg:text-6xl font-bold text-content mb-4 relative">
                {contactData.title}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-secondary rounded-full" aria-hidden="true"></div>
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-content/70 font-old-standard max-w-2xl mx-auto" role="doc-subtitle">
              {contactData.subtitle}
            </p>
          </header>

          {/* Enhanced Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            {/* Get In Touch Section with enhanced styling */}
            <div className="space-y-10">
              <section className="bg-cream/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300" aria-labelledby="get-in-touch-heading">
                <h2 id="get-in-touch-heading" className="font-old-standard text-2xl font-bold text-content mb-6 flex items-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3" aria-hidden="true">
                    <Mail className="w-4 h-4 text-secondary" aria-hidden="true" />
                  </div>
                  {contactData.sections.getInTouch.title}
                </h2>
                <div className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-medium rounded-full text-sm mb-8">
                  {contactData.sections.getInTouch.status}
                </div>

                <ul className="space-y-6" role="list" aria-labelledby="get-in-touch-heading">
                  {contactData.sections.getInTouch.contactInfo.map((item, index) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <li key={index} className="flex items-center space-x-4 group p-4 rounded-xl hover:bg-white/50 transition-all duration-200 hover:shadow-md">
                        <div className="flex-shrink-0 w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center group-hover:bg-secondary/10 group-hover:shadow-md transition-all duration-200 group-hover:scale-105" aria-hidden="true">
                          <IconComponent className="w-6 h-6 text-secondary group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-content/80 font-medium mb-1">
                            {item.label}
                          </p>
                          {item.link ? (
                            <Link
                              href={item.link}
                              className="text-content hover:text-secondary transition-colors duration-200 font-old-standard text-lg font-medium group-hover:underline"
                              target={item.link.startsWith('http') ? '_blank' : undefined}
                              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                              aria-label={`${item.label}: ${item.value}${item.link.startsWith('http') ? ' (opens in new tab)' : ''}`}
                            >
                              {item.value}
                            </Link>
                          ) : (
                            <p className="text-content font-old-standard text-lg font-medium" aria-label={`${item.label}: ${item.value}`}>
                              {item.value}
                            </p>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </section>

              {/* Enhanced About Section */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-old-standard text-xl font-bold text-content mb-6 flex items-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <ExternalLink className="w-4 h-4 text-secondary" />
                  </div>
                  {contactData.sections.about.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactData.sections.about.personalInfo.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 px-4 bg-cream/30 rounded-lg hover:bg-cream/50 transition-colors duration-200">
                      <span className="text-content/80 text-sm font-medium">{item.label}</span>
                      <span className="text-content font-semibold text-sm">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Resources Section */}
              <div className="bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-old-standard text-xl font-bold text-content mb-6 flex items-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <Download className="w-4 h-4 text-secondary" />
                  </div>
                  {contactData.sections.resources.title}
                </h3>
                <div className="space-y-3">
                  <Link
                    href={contactData.sections.resources.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-secondary text-white rounded-xl hover:bg-secondary/90 hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
                  >
                    <Download className="w-5 h-5" />
                    <span>{contactData.sections.resources.downloadCV}</span>
                    <ExternalLink className="w-4 h-4 opacity-70" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Enhanced Connect & Meeting Section */}
            <div className="space-y-10">
              {/* Enhanced Social Links */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-old-standard text-xl font-bold text-content mb-8 flex items-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <MessageCircle className="w-4 h-4 text-secondary" />
                  </div>
                  {contactData.sections.connect.title}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactData.sections.connect.socialLinks.map((social, index) => {
                    const IconComponent = iconMap[social.icon];
                    return (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-5 bg-cream/50 rounded-xl hover:bg-secondary/10 hover:shadow-lg hover:scale-105 transition-all duration-200 group border border-transparent hover:border-secondary/20"
                      >
                        <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-200">
                          <IconComponent className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform duration-200" />
                        </div>
                        <span className="text-content font-medium group-hover:text-secondary transition-colors duration-200">{social.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Enhanced Meeting Booking Section */}
              <div className="bg-cream/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="font-old-standard text-xl font-bold text-content mb-8 flex items-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-lg flex items-center justify-center mr-3">
                    <ExternalLink className="w-4 h-4 text-secondary" />
                  </div>
                  {contactData.sections.meeting.title}
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="text-center mb-6">
                    <h4 className="font-old-standard text-lg font-medium text-content mb-2">
                      {contactData.sections.meeting.calendarTitle}
                    </h4>
                    <p className="text-content/80 text-sm">
                      Schedule a meeting to discuss your project
                    </p>
                  </div>

                  {/* Enhanced Booking iframe placeholder */}
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-200 h-96 flex items-center justify-center hover:border-secondary/30 transition-colors duration-200">
                  <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ08q78jfdTSAvdjzrYsZzvFRPIxbVtTln79uu3M9ITm3VITP81IoKX-YurFrpjs3PoE-IG9z8je?gv=true"
           
            
              loading="lazy"
            ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center bg-gradient-to-br from-cream/80 to-secondary/5 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-300 border border-secondary/10">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-old-standard text-3xl md:text-4xl font-bold text-content mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-content/70 text-lg mb-8 leading-relaxed">
                I&apos;m available for freelance projects and would love to hear about your ideas.
                Let&apos;s discuss how we can bring your vision to life with modern web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="mailto:maf256@gmail.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-xl hover:bg-secondary/90 hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium text-lg"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Send Email
                </Link>
                <Link
                  href="tel:+4740189111"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-secondary text-secondary rounded-xl hover:bg-secondary/10 hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium text-lg"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Call Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}