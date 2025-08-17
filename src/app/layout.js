import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const lang = process.env.SELECTED_LANG || "no";

export const metadata = {
  metadataBase: new URL(
    lang === "en" ? "https://en.sitedesign.no" : "https://sitedesign.no"
  ),
  title: {
    default:
      lang === "en"
        ? "Web Developer Oslo | Professional Web Design Services | Majid Askarifarsangi"
        : "Webutvikler Oslo | Profesjonell Web Design | Majid Askarifarsangi",
    template: "%s | Majid Askarifarsangi",
  },
  description:
    lang === "en"
      ? "Professional web developer in Oslo, Norway. Specializing in React, Next.js, and modern web design. Get responsive, user-friendly websites that drive business growth."
      : "Profesjonell webutvikler i Oslo, Norge. Spesialiserer på React, Next.js og moderne webdesign. Få responsive, brukervennlige nettsider som driver forretningsvekst.",
  keywords:
    lang === "en"
      ? "web developer Oslo, web design Oslo, React developer Norway, Next.js developer, responsive web design, professional website development, Oslo web developer"
      : "webutvikler Oslo, web design Oslo, React utvikler Norge, Next.js utvikler, responsiv webdesign, profesjonell nettside utvikling, Oslo webutvikler, webutvikler oslo",
  authors: [{ name: "Majid Askarifarsangi", url: "https://sitedesign.no" }],
  creator: "Majid Askarifarsangi",
  publisher: "Majid Askarifarsangi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "technology",
  classification: "Web Development Services",
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
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang={lang}>
      <head>
        <meta name="geo.region" content="NO-02" />
        <meta name="geo.placename" content="Oslo" />
        <meta name="geo.position" content="59.9139;10.7522" />
        <meta name="ICBM" content="59.9139, 10.7522" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <link rel="apple-touch-icon" sizes="180x180" href="/profile.jpg" />
        <link rel="icon" type="image/jpeg" sizes="32x32" href="/profile.jpg" />
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/profile.jpg" />
      </head>
      <body className={`${oldStandard.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
