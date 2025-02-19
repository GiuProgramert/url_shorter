import { useRegisterController } from "../../controllers/RegisterController";
import Input from "../Input";
import Modal from "../Modal";
import PrimaryButton from "../PrimaryButton";

export default function Register() {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
    modalInfo: { isOpenRegister, closeModal, openModal },
  } = useRegisterController();

  return (
    <Modal isOpen={isOpenRegister} onClose={closeModal}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[18px] items-center"
      >
        <h2 className="text-[#0F0E0E] dark:text-white font-semibold text-[30px]">
          Register
        </h2>

        <Input
          className="w-[280px] sm:w-[378px]"
          placeholder="Enter your username"
          errorMessage={errors.username?.message}
          {...register("username")}
        />
        <Input
          className="w-[280px] sm:w-[378px]"
          placeholder="Enter your email"
          errorMessage={errors.email?.message}
          {...register("email")}
        />

        <div className="flex gap-4 flex-col sm:flex-row w-[280px] sm:w-[378px]">
          <Input
            className="w-full"
            placeholder="First name"
            errorMessage={errors.first_name?.message}
            {...register("first_name")}
          />
          <Input
            className="w-full"
            placeholder="Last name"
            errorMessage={errors.last_name?.message}
            {...register("last_name")}
          />
        </div>

        <Input
          className="w-[280px] sm:w-[378px]"
          placeholder="Password"
          type="password"
          errorMessage={errors.password?.message}
          {...register("password")}
        />
        <Input
          className="w-[280px] sm:w-[378px]"
          placeholder="Confirm your password"
          type="password"
          errorMessage={errors.password2?.message}
          {...register("password2")}
        />

        <div className="my-4 text-base font-medium">
          <span className="text-black dark:text-white">
            You already have an account{" "}
          </span>
          <button
            className="text-[#6d23b7] dark:text-[#be7cff] hover:underline"
            onClick={() => openModal("login")}
          >
            Sign in
          </button>
        </div>

        <PrimaryButton type="submit" className="w-[300px] sm:w-[378px]">
          Sign up
        </PrimaryButton>
      </form>
    </Modal>
  );
}
