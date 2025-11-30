import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //to make the system remember what was the last set theme
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed max-sm:hidden bottom-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden",
        "hover:bg-gray-200 dark:hover:bg-gray-700",
        "hover:shadow-lg",
        "hover:scale-110 transform transition-transform"
      )}
    >
      {" "}
      {isDarkMode ? (
        <Sun h-6 w-6 text-yellow-400 />
      ) : (
        <Moon h-6 w-6 text-blue-900 />
      )}
    </button>
  );
};
