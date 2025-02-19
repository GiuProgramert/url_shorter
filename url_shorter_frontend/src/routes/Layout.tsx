import { Outlet } from "react-router";
import { useTheme } from "../hooks/useTheme";
import RegisterIcon from "../icons/RegisterIcon";
import GradientCircle from "../components/GradientCircle";
import SecondaryButton from "../components/SecondaryButton";
import ToggleThemeButton from "../components/ToggleThemeButton";
import useAuth from "../hooks/useAuth";
import useModal from "../hooks/useModal";
import UserIcon from "../icons/UserIcon";

export default function Layout() {
  const { theme } = useTheme();
  const { isLogged, logout } = useAuth();
  const { openModal } = useModal();

  const fillColor = theme === "dark" ? "#6F69DC" : "#D68E29";

  return (
    <div className="h-screen grid grid-rows-[auto,1fr,auto] overflow-hidden bg-[#BDBDBD] dark:bg-[#2C2C2C]">
      <nav className="flex flex-row justify-between items-center p-4">
        <div>
          {isLogged ? (
            <SecondaryButton
              text="Logout"
              onClick={logout}
              icon={<UserIcon fill={fillColor} />}
            />
          ) : (
            <div className="flex gap-4">
              <SecondaryButton
                text="Login"
                onClick={() => openModal("login")}
                icon={<UserIcon fill={fillColor} />}
              />
              <SecondaryButton
                text="Register"
                onClick={() => openModal("register")}
                icon={<RegisterIcon fill={fillColor} />}
              />
            </div>
          )}
        </div>
        <div className="flex gap-4 flex-col sm:flex-row justify-between">
          <ToggleThemeButton />
        </div>
      </nav>
      <main className="flex flex-col items-center gap-8 mt-6">
        <Outlet />
      </main>
      <footer className="relative">
        <GradientCircle className="absolute -bottom-20 hidden sm:block -left-14" />
        <GradientCircle className="absolute -bottom-20 hidden sm:block -right-14" />
      </footer>
    </div>
  );
}
