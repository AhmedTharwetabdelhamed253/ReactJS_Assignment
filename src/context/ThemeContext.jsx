import { createContext, useContext, useEffect, useState } from "react";

// Context API: lets any component read/update the theme without passing
// props down through every level of the component tree.
const ThemeContext = createContext(undefined);

export function ThemeProvider({ children }) {
  // Built-in Hook (useState): the current theme, initialized from localStorage
  // if the user picked one on a previous visit.
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("bookstore-theme") || "light";
  });

  // Built-in Hook (useEffect): whenever the theme changes, reflect it on <body>
  // (so plain CSS variables can react to it) and persist the choice.
  useEffect(() => {
    document.body.dataset.theme = theme;
    window.localStorage.setItem("bookstore-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Context Provider: makes { theme, toggleTheme } available to every
  // descendant component that calls useTheme().
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

// Custom Hook: wraps useContext so components just call useTheme() instead of
// importing ThemeContext directly everywhere.
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used inside a <ThemeProvider>");
  }
  return context;
}
