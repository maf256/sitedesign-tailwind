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

const lang = process.env.SELECTED_LANG || "en";

export const metadata = translations.metadata;

export default function RootLayout({ children }) {
  const structuredData = translations.structuredData;

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
