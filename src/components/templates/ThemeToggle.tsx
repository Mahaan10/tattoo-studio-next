"use client";

import { useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";
import { useThemeMode } from "../context/ThemeModeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useThemeMode();
  const [animate, setAnimate] = useState(false);

  const handleToggle = () => {
    setAnimate(true);
    toggleTheme();
    // Match the duration of your ink-animate CSS
    setTimeout(() => setAnimate(false), 350);
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="group relative h-12 w-12 flex items-center justify-center rounded-full bg-carbon-black dark:bg-snow border border-bright-snow/50 dark:border-onyx/20 transition-all duration-300 hover:scale-110 active:scale-95 z-50"
    >
      {theme === "dark" ? (
        <LuMoon
          size={22}
          className={`text-onyx transition-all ${animate && "rotate-90"}`}
        />
      ) : (
        <LuSun
          size={22}
          className={`text-snow transition-transform duration-500 ${animate && "rotate-180"}`}
        />
      )}
    </button>
  );
}

export default ThemeToggle;
