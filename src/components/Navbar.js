import Link from "next/link";
import { translations } from "@/lang/translations";

const navRoutes = ["/", "/about", "/career", "/contact"];
const { navbar } = translations;

export default function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
      style={{
        background:
          "linear-gradient(to bottom, #e8e8e8 0%, #d0d0d0 50%, #c8c8c8 100%)",
        boxShadow:
          "0 1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 2px 8px rgba(0, 0, 0, 0.08)",
        borderBottom: "1px solid #a8a8a8",
      }}
    >
      <div className="mx-auto max-w-[900px] px-6 lg:px-0">
        <div className="flex items-center justify-between h-[48px]">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navbar.items.map((item, index) => (
              <Link
                key={index}
                href={navRoutes[index]}
                className="relative text-[15px] font-medium tracking-tight transition-all duration-200 group"
                style={{
                  color: "#2c2c2c",
                  textShadow: "0 1px 0 rgba(255, 255, 255, 0.6)",
                  fontWeight: 550,
                  letterSpacing: "-0.01em",
                }}
              >
                <span className="relative inline-block px-3 py-1.5 rounded-md group-hover:bg-black/5 transition-all duration-200">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center">
            {navbar.languageToggle === "NO" ? (
              <a
                href="https://en.sitedesign.no/"
                className="relative text-[14px] font-medium tracking-tight transition-all duration-200 hover:bg-black/5 rounded-md"
                hrefLang="en"
                style={{
                  color: "#4a4a4a",
                  textShadow: "0 1px 0 rgba(255, 255, 255, 0.5)",
                  fontWeight: 550,
                  letterSpacing: "-0.01em",
                }}
              >
                <span className="relative inline-flex items-center justify-center px-3 py-1.5">
                  EN
                </span>
              </a>
            ) : (
              <a
                href="https://sitedesign.no/"
                className="relative text-[14px] font-medium tracking-tight transition-all duration-200 hover:bg-black/5 rounded-md"
                hrefLang="no"
                style={{
                  color: "#4a4a4a",
                  textShadow: "0 1px 0 rgba(255, 255, 255, 0.5)",
                  fontWeight: 550,
                  letterSpacing: "-0.01em",
                }}
              >
                <span className="relative inline-flex items-center justify-center px-3 py-1.5">
                  NO
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
