import Link from "next/link";
import { translations } from "@/lang/translations";
import MobileDarkmodeToggle from "./MobileDarkmodeToggleWrapper";

const navRoutes = ["/", "/about", "/career", "/contact"];

const { navbar } = translations;

export default function Navbar() {
  return (
    <>
      <nav className="w-full border-b border-content/10 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-[900px] px-4 lg:px-0">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-8">
              {navbar.items.map((item, index) => (
                <Link
                  key={index}
                  href={navRoutes[index]}
                  className="text-lg text-content hover:text-content "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <input
                type="checkbox"
                id="mobile-menu-toggle"
                className="hidden peer"
              />
              <label
                htmlFor="mobile-menu-toggle"
                className="flex flex-col justify-center items-center w-8 h-8 cursor-pointer group"
              >
                <span className="block w-6 h-0.5 bg-content transition-all duration-300 ease-out group-hover:bg-content/80 peer-checked:rotate-45 peer-checked:translate-y-1.5"></span>
                <span className="block w-6 h-0.5 bg-content mt-1.5 transition-all duration-300 ease-out group-hover:bg-content/80 peer-checked:opacity-0"></span>
                <span className="block w-6 h-0.5 bg-content mt-1.5 transition-all duration-300 ease-out group-hover:bg-content/80 peer-checked:-rotate-45 peer-checked:-translate-y-1.5"></span>
              </label>

              {/* Mobile Menu Dropdown */}
              <div className="absolute top-16 left-0 w-full bg-base-100 border-b border-content/10 shadow-lg transform -translate-y-full opacity-0 invisible peer-checked:translate-y-0 peer-checked:opacity-100 peer-checked:visible transition-all duration-300 ease-out">
                <div className="mx-auto max-w-[900px] px-4 py-4 space-y-4">
                  {navbar.items.map((item, index) => (
                    <Link
                      key={index}
                      href={navRoutes[index]}
                      className="block text-lg text-content hover:text-content/80 py-2 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <MobileDarkmodeToggle />

              {navbar.languageToggle === "NO" ? (
                <a
                  href="https://en.sitedesign.no/"
                  className="text-sm font-medium text-content/70 hover:text-secondary hover:cursor-pointer transition-colors duration-300 ease-out"
                >
                  EN
                </a>
              ) : (
                <a
                  href="https://sitedesign.no/"
                  className="text-sm font-medium text-content/70 hover:text-secondary hover:cursor-pointer transition-colors duration-300 ease-out"
                >
                  NO
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
