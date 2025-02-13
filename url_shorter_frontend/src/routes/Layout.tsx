import { Outlet } from "react-router";
import { useTheme } from "../hooks/useTheme";
import LoginIcon from "../icons/LoginIcon";
import RegisterIcon from "../icons/RegisterIcon";
import GradientCircle from "../components/GradientCircle";
import SecondaryButton from "../components/SecondaryButton";
import ToggleThemeButton from "../components/ToggleThemeButton";
import useAuth from "../hooks/useUser";

export default function Layout() {
  const { theme } = useTheme();
  const { auth } = useAuth();

  const fillColor = theme === "dark" ? "#6F69DC" : "#D68E29";

  return (
    <div className="h-screen grid grid-rows-[auto,1fr,auto] overflow-hidden bg-[#BDBDBD] dark:bg-[#2C2C2C]">
      <nav className="flex justify-end p-4">
        <div className="flex gap-4">
          {!auth && (
            <>
              <SecondaryButton
                text="Login"
                icon={<LoginIcon fill={fillColor} />}
              />
              <SecondaryButton
                text="Register"
                icon={<RegisterIcon fill={fillColor} />}
              />
            </>
          )}
          <ToggleThemeButton />
        </div>
      </nav>
      <main className="grid place-content-center">
        <Outlet />
      </main>
      <footer className="relative">
        <GradientCircle className="absolute -bottom-20 -right-14" />
        <GradientCircle className="absolute -bottom-20 -left-14" />
      </footer>
    </div>
  );
}
