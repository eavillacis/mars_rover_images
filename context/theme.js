import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("dark");

  useEffect(() => {
    const isDark = localStorage.getItem("themeName") === "dark";
    if (isDark) setThemeName("dark");
  }, []);

  const toggleTheme = () => {
    const name = themeName === "dark" ? "light" : "dark";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
