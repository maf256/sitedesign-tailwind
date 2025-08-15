"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { translations } from "@/lang/translations";
import DarkmodeButton from "./DarkmodeButton";
import LangButton from "./LangButton";
import MobileMenuToggle from "./MobileMenuToggle";

export default function HorizontalNavbar() {
  const pathname = usePathname();
  const { navigation } = translations;
  const navSections = navigation.items;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-base/95 nav-blur border-b border-gray-200/20 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-old-standard text-xl font-bold text-content hover:text-secondary transition-colors duration-200"
              aria-label="Majid Askarifarsangi - Home"
            >
              MA
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8" role="menubar" aria-label="Main navigation menu">
            {navSections.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name} role="none">
                  <Link
                    href={item.href}
                    className={`text-content/80 hover:text-content font-old-standard text-base font-medium transition-all duration-200 relative group nav-focus px-3 py-2 rounded-md hover:bg-gray-100/50 ${
                      isActive ? 'text-content' : ''
                    }`}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`${item.name}${isActive ? ' (current page)' : ''}`}
                  >
                    {item.name}
                    <span 
                      className={`absolute -bottom-1 left-3 h-0.5 bg-secondary transition-all duration-200 ${
                        isActive ? 'w-[calc(100%-1.5rem)]' : 'w-0 group-hover:w-[calc(100%-1.5rem)]'
                      }`}
                      aria-hidden="true"
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2">
              <DarkmodeButton />
              <LangButton />
            </div>
            
            <MobileMenuToggle navSections={navSections} />
          </div>
        </div>
      </nav>
    </header>
  );
}