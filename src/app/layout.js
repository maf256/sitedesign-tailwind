import localFont from "next/font/local";
import "./globals.css";
import { translations } from "@/lang/translations";
import ErrorBoundary from "@/components/ErrorBoundary";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";
import SkipLink from "@/components/SkipLink";

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
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

const lang = process.env.SELECTED_LANG || "en";

export const metadata = translations.metadata;

export default function RootLayout({ children }) {
  const structuredData = translations.structuredData;

  return (
    <html lang={lang}>
      <head>
        {/* Critical CSS for above-the-fold content */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body{background:var(--color-base,#fdfdfd);color:var(--color-content,#000717);font-family:var(--font-old-standard),serif}
            .font-bold{font-weight:700}
            .text-4xl{font-size:clamp(2.5rem,5vw,3.5rem)}
            .text-lg{font-size:clamp(1.125rem,2.75vw,1.25rem)}
            .text-base{font-size:clamp(1rem,2.5vw,1.125rem)}
            .leading-none{line-height:1}
            .leading-relaxed{line-height:1.625}
            .mb-6{margin-bottom:1.5rem}
            .mb-4{margin-bottom:1rem}
            .mb-2{margin-bottom:0.5rem}
            .mt-2{margin-top:0.5rem}
            .flex{display:flex}
            .flex-col{flex-direction:column}
            .flex-row{flex-direction:row}
            .items-center{align-items:center}
            .justify-center{justify-content:center}
            .text-center{text-align:center}
            .gap-4{gap:1rem}
            .max-w-2xl{max-width:42rem}
            .text-content\/80{color:rgba(0,7,23,0.8)}
            .font-medium{font-weight:500}
            .min-h-\\[3rem\\]{min-height:3rem}
            @media(min-width:768px){
              .md\\:text-6xl{font-size:clamp(3rem,6vw,4.5rem)}
              .md\\:text-xl{font-size:clamp(1.25rem,3vw,1.5rem)}
              .md\\:text-lg{font-size:clamp(1.125rem,2.75vw,1.25rem)}
              .md\\:w-20{width:5rem}
              .md\\:h-20{height:5rem}
              .md\\:min-h-\\[3\\.5rem\\]{min-height:3.5rem}
            }
            @media(min-width:1024px){
              .lg\\:text-8xl{font-size:clamp(4rem,8vw,6rem)}
              .lg\\:text-2xl{font-size:clamp(1.5rem,3.5vw,2rem)}
              .lg\\:w-24{width:6rem}
              .lg\\:h-24{height:6rem}
            }
          `
        }} />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/profile.jpg" as="image" type="image/jpeg" fetchPriority="high" />
        <link rel="preload" href="/oldstandard.woff2" as="font" type="font/woff2" crossOrigin="" fetchPriority="high" />
        <link rel="preload" href="/oldstandardbold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="//fonts.googleapis.com" crossOrigin="" />
        
        {/* Resource hints for better loading */}
        <link rel="prefetch" href="/sw.js" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Global structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Performance and SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={`${oldStandard.variable} antialiased`}>
        <SkipLink />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
        <PerformanceMonitor />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
