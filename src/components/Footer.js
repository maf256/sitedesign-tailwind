"use client";
import Link from "next/link";
import { translations } from "@/lang/translations";
import { Github, Linkedin, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const { navigation, pages } = translations;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/farsangi",
      ariaLabel: "Visit LinkedIn profile",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/maf256",
      ariaLabel: "Visit GitHub profile",
    },
    {
      name: "Phone",
      icon: Phone,
      url: "tel:+4740189111",
      ariaLabel: "Call phone number",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/4740189111",
      ariaLabel: "Send WhatsApp message",
    },
  ];

  return (
    <footer className="bg-base border-t border-gray-200/20 mt-auto" role="contentinfo" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <h2 id="footer-heading" className="sr-only">Footer Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <section className="space-y-4" aria-labelledby="brand-heading">
            <h3 id="brand-heading" className="sr-only">About Majid Askarifarsangi</h3>
            <Link
              href="/"
              className="font-old-standard text-xl font-bold text-content hover:text-secondary transition-colors duration-200"
              aria-label="Return to homepage - Majid Askarifarsangi"
            >
              Majid Askarifarsangi
            </Link>
            <p className="text-content/80 text-sm font-old-standard leading-relaxed">
              Full Stack Web Developer specializing in React, Next.js, and
              modern web technologies.
            </p>
          </section>

          {/* Social Links */}
          <section className="space-y-4" aria-labelledby="social-heading">
            <h3 id="social-heading" className="font-old-standard font-semibold text-content text-base">
              Connect
            </h3>
            <nav aria-label="Social media links">
              <ul className="flex space-x-4" role="list">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target={
                          social.url.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          social.url.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        aria-label={social.ariaLabel}
                        className="text-content/80 hover:text-secondary transition-colors duration-200 p-2 rounded-md hover:bg-gray-100/50 inline-flex items-center justify-center"
                      >
                        <IconComponent size={18} aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <p className="text-content/80 text-sm font-old-standard">
              Available for freelance projects
            </p>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-200/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-content/80 text-sm font-old-standard">
            © {currentYear} Majid Askarifarsangi. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <ul className="flex space-x-6" role="list">
              <li>
                <Link
                  href="/contact"
                  className="text-content/80 hover:text-content text-sm font-old-standard transition-colors duration-200"
                  aria-label="Go to contact page"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/17mUMeWG0EodCvCT3zQco0ttpT5rxd3z7/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-content/80 hover:text-content text-sm font-old-standard transition-colors duration-200"
                  aria-label="Download CV (opens in new tab)"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
