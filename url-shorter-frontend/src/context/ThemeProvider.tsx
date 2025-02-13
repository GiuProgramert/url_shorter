import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light";

  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) return storedTheme as "dark" | "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(getInitialTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
