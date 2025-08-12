"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function MobileDarkmodeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme") === "dark";
    setIsDark(stored);
    document.documentElement.classList.toggle("dark", stored);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle("dark", newIsDark);
    localStorage.setItem("theme", newIsDark ? "dark" : "light");
  };

  return (
    <div className="lg:absolute lg:bottom-20 lg:left-10">
      <button
        onClick={toggleTheme}
        className="text-base lg:text-white/70 hover:text-secondary transition-colors duration-200 p-1"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>
    </div>
  );
}
