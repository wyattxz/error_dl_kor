import { BrowserRouter } from "react-router-dom";
import Mainlayout from "./layout/Mainlayout";
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to <html> and save preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Load saved theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <BrowserRouter>
        <Mainlayout darkMode={darkMode} setDarkMode={setDarkMode} />
      </BrowserRouter>
    </div>
  );
}
