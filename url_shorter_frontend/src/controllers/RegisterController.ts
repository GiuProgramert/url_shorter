import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterFormInputs, RegisterSchema } from "../schemas/Auth";
import { registerUser } from "../services/Auth";
import toast from "react-hot-toast";
import axios from "axios";
import { PostError } from "../schemas/Service";
import useModal from "../hooks/useModal";

export function useRegisterController() {
  const modalInfo = useModal();

  const {
    register,
    handleSubmit,
    formState,
    setError,
    reset: resetForm,
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await registerUser(data);
      toast.success("User registered successfully");
      modalInfo.closeModal();
      resetForm();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorData = error.response.data as PostError<RegisterFormInputs>;

        Object.entries(errorData).forEach(([key, value]) => {
          setError(key as keyof RegisterFormInputs, {
            type: "custom",
            message: value?.join(" "),
          });
        });
      }
    }
  };

  return { register, handleSubmit, formState, onSubmit, modalInfo };
}
