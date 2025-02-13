export interface UserAuth {
  access: string;
  refresh: string;
}

export interface AuthContextProps {
  auth?: UserAuth;
  setAuth: React.Dispatch<React.SetStateAction<UserAuth | undefined>>;
}
