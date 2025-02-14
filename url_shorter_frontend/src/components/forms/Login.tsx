import useModal from "../../hooks/useModal";
import Modal from "../Modal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Input from "../Input";
import PrimaryButton from "../PrimaryButton";

type LoginFormInputs = z.infer<typeof LoginSchema>;

const LoginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function Login() {
  const { modal, isOpen, closeModal } = useModal();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data);
  };

  console.log({errors});

  return (
    <Modal isOpen={modal === "login" && isOpen} onClose={closeModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[21px] items-center"
      >
        <h2 className="text-[#0F0E0E] dark:text-white font-semibold text-[30px]">
          Login
        </h2>

        <Input
          className="w-[478px]"
          placeholder="Username"
          errorMessage={errors.username?.message}
          {...register("username")}
        />
        <Input
          className="w-[478px]"
          placeholder="Password"
          type="password"
          errorMessage={errors.password?.message}
          {...register("password")}
        />

        <PrimaryButton type="submit" className="w-[378px] mt-14">
          Login
        </PrimaryButton>
      </form>
    </Modal>
  );
}
