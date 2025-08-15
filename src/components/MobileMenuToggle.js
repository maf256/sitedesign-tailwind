"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import DarkmodeButton from "./DarkmodeButton";
import LangButton from "./LangButton";

export default function MobileMenuToggle({ navSections }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isOpen) return;

      if (event.key === 'Escape') {
        closeMenu();
        buttonRef.current?.focus();
      }

      if (event.key === 'Tab') {
        const focusableElements = menuRef.current?.querySelectorAll(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (event.shiftKey && document.activeElement === firstElement) {
            event.preventDefault();
            lastElement.focus();
          } else if (!event.shiftKey && document.activeElement === lastElement) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus first menu item when opened
      setTimeout(() => {
        const firstMenuItem = menuRef.current?.querySelector('a');
        firstMenuItem?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile menu button */}
      <button 
        ref={buttonRef}
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md text-content/80 hover:text-content hover:bg-gray-100/50 transition-colors duration-200 interactive-focus"
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 top-16 bg-content/10 backdrop-blur-sm z-40"
            onClick={closeMenu}
          />
          
          {/* Menu */}
          <nav 
            ref={menuRef}
            id="mobile-menu"
            className="md:hidden absolute top-16 left-0 right-0 bg-base/95 nav-blur border-b border-gray-200/20 shadow-lg z-50 animate-in slide-in-from-top-2 duration-200"
            role="menu"
            aria-labelledby="mobile-menu-button"
            aria-label="Mobile navigation menu"
          >
            <ul className="px-6 py-4 space-y-2" role="none">
              {navSections.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} role="none">
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className={`block px-3 py-2 text-content/80 hover:text-content font-old-standard text-base font-medium transition-colors duration-200 rounded-md hover:bg-gray-100/50 interactive-focus ${
                        isActive ? 'text-content bg-gray-100/30' : ''
                      }`}
                      role="menuitem"
                      aria-current={isActive ? 'page' : undefined}
                      aria-label={`${item.name}${isActive ? ' (current page)' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
              
              {/* Mobile controls */}
              <li role="none">
                <div className="flex items-center justify-between pt-4 mt-4 border-t border-gray-200/20">
                  <span className="text-content/80 font-old-standard text-sm" id="mobile-settings-label">Settings</span>
                  <div className="flex items-center space-x-2" role="group" aria-labelledby="mobile-settings-label">
                    <DarkmodeButton />
                    <LangButton />
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}