import localFont from "next/font/local";
import "./globals.css";

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

export const metadata = {
  title: "Sitedesign",
  description: "Majid Askarifarsangi | personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oldStandard.variable} antialiased`}>{children}</body>
    </html>
  );
}
