import { axiosIntance as axios } from "../config/axios";
import { LoginFormInputs, RegisterFormInputs, UserAuth } from "../schemas/Auth";

export const registerUser = async (data: RegisterFormInputs) => {
  const request = await axios.post("/auth/register", data);
  return request.data;
};

export const loginUser = async (data: LoginFormInputs) => {
  const request = await axios.post<UserAuth>("/auth/login", data);
  return request.data;
}