import { URLFormInputs, RegisterURLResponse } from "../schemas/URL";
import { axiosIntance as axios } from "../config/axios";

export const registerURL = async (data: URLFormInputs) => {
  const response = await axios.post<RegisterURLResponse>("/urls/", data);
  return response.data;
};
