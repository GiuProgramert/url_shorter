import { createContext } from "react";
import { AuthContextProps } from "../schemas/User";

export const AuthContext = createContext<AuthContextProps>({
  auth: undefined,
  setAuth: () => {},
});
