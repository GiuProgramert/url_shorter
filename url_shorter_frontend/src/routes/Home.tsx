import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

export default function Home() {
  return (
    <>
      <h1 className="text-[#0F0E0E] dark:text-white font-bold text-[36px] text-center">
        Short URL
      </h1>
      <section className="bg-[#DDD] dark:bg-[#434343] p-10 rounded-xl w-[644px] text-[#0F0E0E] dark:text-white flex flex-col items-center gap-[21px]">
        <h2 className="text-[#0F0E0E] dark:text-white font-semibold text-[30px]">
          Paste the URL to be shortened
        </h2>

        <Input
          type="url"
          pattern="https://.*"
          className="w-[478px]"
          placeholder="Enter link here"
        />
        <PrimaryButton className="w-[378px]">Shorten URL</PrimaryButton>
      </section>
    </>
  );
}
