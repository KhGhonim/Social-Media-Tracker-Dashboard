import { useEffect, useState } from "react";
import { FaSun } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

export default function DarkLightMode() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    } else {
      const defaultTheme = "light";
      localStorage.setItem("theme", defaultTheme);
      setTheme(defaultTheme);
      document.documentElement.classList.add(defaultTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (!theme) return null;

  return (
    <div
      onClick={toggleTheme}
      className="flex gap-2 items-center cursor-pointer"
    >
      {theme === "dark" ? (
        <FiMoon className="text-gray-50 text-xl" />
      ) : (
        <FaSun className="text-yellow-400 text-xl" />
      )}
    </div>
  );
}
