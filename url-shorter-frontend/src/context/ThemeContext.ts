import { createContext } from "react";
import { ThemeContextProps } from "../schemas/Theme";

export const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});
