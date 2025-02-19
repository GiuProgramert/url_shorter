import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import useURLController from "../controllers/URLController";

export default function Home() {
  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors },
  } = useURLController();

  return (
    <>
      <h1 className="text-[#0F0E0E] dark:text-white font-bold text-3xl sm:text-4xl text-center">
        Short URL
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#DDD] dark:bg-[#434343] p-10 rounded-xl max-w-sm sm:max-w-xl text-[#0F0E0E] dark:text-white flex flex-col items-center gap-[21px]"
      >
        <h2 className="text-[#0F0E0E] dark:text-white font-semibold text-xl sm:text-3xl">
          Paste the URL to be shortened
        </h2>

        <Input
          className="w-[300px] sm:w-[478px]"
          placeholder="Enter link here"
          errorMessage={errors.url?.message}
          {...register("url")}
        />
        <PrimaryButton className="w-[280px] sm:w-[378px]" type="submit">
          Shorten URL
        </PrimaryButton>
      </form>
    </>
  );
}
