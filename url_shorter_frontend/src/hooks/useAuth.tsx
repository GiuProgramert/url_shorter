import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);

  const isLogged = !!auth;

  useEffect(() => {
    const authData = localStorage.getItem("auth");

    if (authData) {
      setAuth(JSON.parse(authData));
    }
  }, [setAuth]);

  useEffect(() => {
    if (!auth) return;

    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  const logout = () => {
    setAuth(undefined);
    localStorage.removeItem("auth");
  };

  return { auth, setAuth, logout, isLogged };
}
