import { axiosIntance as axios } from "../config/axios";
import { RegisterFormInputs } from "../schemas/Auth";

export const registerUser = async (data: RegisterFormInputs) => {
  const request = await axios.post("/auth/register", data);
  return request.data;
};
