import Link from "next/link";
import { translations } from "@/lang/translations";
import MobileDarkmodeToggle from "./MobileDarkmodeToggleWrapper";

const navRoutes = ["/", "/about", "/career", "/contact"];

const { navbar } = translations;

export default function Navbar() {
  return (
    <nav
      className="w-full border-b border-content/10 bg-background/95 backdrop-blur-sm sticky top-0 z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-[900px] px-4 lg:px-0">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            {navbar.items.map((item, index) => (
              <Link
                key={index}
                href={navRoutes[index]}
                className="text-sm md:text-lg text-content hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4 md:space-x-6">
            <MobileDarkmodeToggle />

            {navbar.languageToggle === "NO" ? (
              <a
                href="https://en.sitedesign.no/"
                className="text-sm font-medium text-content/70 hover:text-secondary hover:cursor-pointer transition-colors duration-300 ease-out"
                hrefLang="en"
              >
                EN
              </a>
            ) : (
              <a
                href="https://sitedesign.no/"
                className="text-sm font-medium text-content/70 hover:text-secondary hover:cursor-pointer transition-colors duration-300 ease-out"
                hrefLang="no"
              >
                NO
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
