import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

export default function useAuth() {
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    if (!auth) return;

    localStorage.setItem("auth", JSON.stringify(auth));
  }, [auth]);

  return { auth, setAuth };
}
