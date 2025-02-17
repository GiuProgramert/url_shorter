import { useForm } from "react-hook-form";
import { URLFormInputs, URLSchema } from "../schemas/URL";
import useModal from "../hooks/useModal";
import useAuth from "../hooks/useAuth";
import { registerURL } from "../services/URL";
import toast from "react-hot-toast";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { getURLSlug } from "../utils/getURLSlug";

export default function useURLController() {
  const { openModal } = useModal();
  const { isLogged } = useAuth();
  const navigator = useNavigate();

  const { register, handleSubmit, formState } = useForm<URLFormInputs>({
    resolver: zodResolver(URLSchema),
  });

  const onSubmit = async (data: URLFormInputs) => {
    if (!isLogged) {
      openModal("login");
      toast.error("You must be logged in to register a URL");

      return;
    }

    try {
      const { short_url } = await registerURL(data);
      const slug = getURLSlug(short_url);
      navigator(`/shorted/${slug}`);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.toString());
      }
    }
  };

  return { register, handleSubmit, onSubmit, formState };
}
