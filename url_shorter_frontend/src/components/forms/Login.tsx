import Modal from "../Modal";
import Input from "../Input";
import PrimaryButton from "../PrimaryButton";
import useLoginController from "../../controllers/LoginController";

export default function Login() {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
    modalInfo: { isOpenLogin, closeModal, openModal },
  } = useLoginController();

  return (
    <Modal isOpen={isOpenLogin} onClose={closeModal}>
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

        <div className="my-4 text-base font-medium">
          <span className="text-black dark:text-white">
            You don't have an acount{" "}
          </span>
          <button
            className="text-[#6d23b7] dark:text-[#be7cff] hover:underline"
            onClick={() => openModal("register")}
          >
            Sign up
          </button>
        </div>

        <PrimaryButton type="submit" className="w-[378px]">
          Sign in
        </PrimaryButton>
      </form>
    </Modal>
  );
}
