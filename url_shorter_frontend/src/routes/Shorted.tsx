import { Link, useNavigate, useParams } from "react-router";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import CopyIcon from "../icons/CopyIcon";
import { envs } from "../config/envs";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import toast from "react-hot-toast";

export default function Shorted() {
  const { slug } = useParams();
  const navigator = useNavigate();
  const [, copyToClipboard] = useCopyToClipboard();

  const handleCopy = async () => {
    await copyToClipboard(`${envs.REDIRECT_URL}/${slug}`);
    toast.success("Copied to your Clipboard");
  };

  return (
    <>
      <h1 className="text-[#0F0E0E] dark:text-white font-bold text-[36px] text-center">
        Short URL
      </h1>
      <section className="bg-[#DDD] dark:bg-[#434343] p-10 rounded-xl w-[644px] text-[#0F0E0E] dark:text-white flex flex-col items-center gap-[21px]">
        <h2 className="text-[#0F0E0E] dark:text-white font-semibold text-[30px]">
          Your shortened URL
        </h2>

        <Input
          className="w-[478px]"
          placeholder="Enter link here"
          disabled
          defaultValue={`${envs.REDIRECT_URL}/${slug}`}
        />
        <div className="flex gap-4 w-[378px]">
          <PrimaryButton
            className="grid-cols-[1fr,auto] gap-4"
            onClick={handleCopy}
          >
            <span className="justify-center">Copy URL</span>
            <CopyIcon />
          </PrimaryButton>
          <Link
            className="p-5 text-lg font-bold bg-gradient-to-r from-[#A448FF] to-[#DA48FF] text-white h-[62px] focus:ring-0 focus:outline-none rounded-xl grid place-content-center hover:to-[#b75dce]"
            onClick={() => navigator("/")}
            to="/"
          >
            Short another URL
          </Link>
        </div>
      </section>
    </>
  );
}
