import { createContext } from "react";
import { AuthContextProps } from "../schemas/Auth";

export const AuthContext = createContext<AuthContextProps>({
  auth: undefined,
  setAuth: () => {},
});
