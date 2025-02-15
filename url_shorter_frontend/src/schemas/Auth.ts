import { z } from "zod";

export interface UserAuth {
  access: string;
  refresh: string;
}

export interface AuthContextProps {
  auth?: UserAuth;
  setAuth: React.Dispatch<React.SetStateAction<UserAuth | undefined>>;
}

export const LoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export type LoginFormInputs = z.infer<typeof LoginSchema>;

export const RegisterSchema = LoginSchema.extend({
  email: z.string().email("Invalid email address"),
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  password2: z.string().min(8, "Password must be at least 8 characters"),
}).refine((data) => data.password === data.password2, {
  message: "Passwords do not match",
  path: ["password2"], // Specify the path to show the error on the password2 field
});

export type RegisterFormInputs = z.infer<typeof RegisterSchema>;