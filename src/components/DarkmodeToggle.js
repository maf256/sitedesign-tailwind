"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

// Rendered on the server too: the icon is chosen by CSS (`dark:` variant keyed
// on the `.dark` class set by the no-flash theme init), so there is no layout
// shift or icon flicker. State only drives the accessible label.
export default function DarkmodeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    try {
      localStorage.setItem("theme", newIsDark ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-content/70 hover:text-content duration-200 p-1 hover:cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Moon className="w-5 h-5 dark:hidden" />
      <Sun className="w-5 h-5 hidden dark:block" />
    </button>
  );
}
