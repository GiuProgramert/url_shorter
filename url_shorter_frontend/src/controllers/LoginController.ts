import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormInputs, LoginSchema } from "../schemas/Auth";
import { useForm } from "react-hook-form";
import useModal from "../hooks/useModal";
import axios from "axios";
import { PostError } from "../schemas/Service";
import { loginUser } from "../services/Auth";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

export default function useLoginController() {
  const modalInfo = useModal();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState,
    setError,
    reset: resetForm,
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const userAuth = await loginUser(data);
      toast.success("User logged in successfully");
      modalInfo.closeModal();

      setAuth(userAuth);
      resetForm();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data as PostError<LoginFormInputs>;

        Object.entries(errorData).forEach(([key, value]) => {
          setError(key as keyof LoginFormInputs, {
            type: "custom",
            message: value?.join(" "),
          });
        });
      }
    }
  };

  return { register, handleSubmit, formState, onSubmit, modalInfo };
}
