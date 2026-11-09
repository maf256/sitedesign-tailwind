import Link from "next/link";
import { translations } from "@/lang/translations";
import DarkmodeToggle from "./DarkmodeToggle";

const navRoutes = ["/", "/about", "/career", "/contact"];
const { navbar } = translations;

export default function Navbar() {
  return (
    <nav
      className="w-full sticky top-0 z-50 metal-card"
      role="navigation"
      aria-label="Main navigation"
      style={{ borderWidth: "0 0 1px 0" }}
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
                  color: "var(--heading)",
                  textShadow: "0 1px 0 var(--shine-soft)",
                  fontWeight: 550,
                  letterSpacing: "-0.01em",
                }}
              >
                <span className="relative inline-block px-3 py-1.5 rounded-md group-hover:bg-content/5 transition-all duration-200">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <DarkmodeToggle />
            {navbar.languageToggle === "NO" ? (
              <a
                href="https://en.sitedesign.no/"
                className="relative text-[14px] font-medium tracking-tight transition-all duration-200 hover:bg-content/5 rounded-md"
                hrefLang="en"
                style={{
                  color: "var(--text-subtle)",
                  textShadow: "0 1px 0 var(--shine-soft)",
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
                className="relative text-[14px] font-medium tracking-tight transition-all duration-200 hover:bg-content/5 rounded-md"
                hrefLang="no"
                style={{
                  color: "var(--text-subtle)",
                  textShadow: "0 1px 0 var(--shine-soft)",
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
