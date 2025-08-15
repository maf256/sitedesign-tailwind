import { translations } from "@/lang/translations";

export default function LangToggle() {
  const { navigation } = translations;

  return (
    <div className="px-2 py-1 rounded-md hover:bg-gray-100/50 transition-colors duration-200">
      {navigation.languageToggle === "NO" ? (
        <a
          href="https://en.sitedesign.no/"
          className="text-content/80 hover:text-content font-old-standard text-sm font-medium transition-colors duration-200"
        >
          EN
        </a>
      ) : (
        <a
          href="https://sitedesign.no/"
          className="text-content/80 hover:text-content font-old-standard text-sm font-medium transition-colors duration-200"
        >
          NO
        </a>
      )}
    </div>
  );
}