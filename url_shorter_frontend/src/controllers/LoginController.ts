import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormInputs, LoginSchema } from "../schemas/Auth";
import { useForm } from "react-hook-form";

export default function LoginController() {
  const { register, handleSubmit, formState } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data);
  };

  return { register, handleSubmit, formState, onSubmit };
}
