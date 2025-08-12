import { translations } from "@/lang/translations";

export default function MobileLangToggle() {
  const { navbar } = translations;

  return (
    <div className="lg:hidden">
      {navbar.languageToggle === "NO" ? (
        <a
          href="https://en.sitedesign.no/"
          className="text-content hover:text-secondary transition-colors duration-200 text-sm font-medium"
        >
          EN
        </a>
      ) : (
        <a
          href="https://sitedesign.no/"
          className="text-content hover:text-secondary transition-colors duration-200 text-sm font-medium"
        >
          NO
        </a>
      )}
    </div>
  );
}