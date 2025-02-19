import { useTheme } from "../hooks/useTheme";
import DarkModeIcon from "../icons/DarkModeIcon";
import LightModeIcon from "../icons/LightModeIcon";
import SecondaryButton from "./SecondaryButton";

export default function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  const text = theme === "dark" ? "Light Mode" : "Dark Mode";
  const icon = theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <SecondaryButton
      text={text}
      icon={icon}
      onClick={toggleTheme}
      textClassName="hidden sm:block"
    />
  );
}
