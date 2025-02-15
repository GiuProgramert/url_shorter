import axios from "axios";
import { envs } from "./envs";
import { UserAuth } from "../schemas/Auth";

export const axiosIntance = axios.create({
  baseURL: envs.API_URL,
});

axiosIntance.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem("auth");

    if (auth) {
      const { access } = JSON.parse(auth) as UserAuth;

      config.headers.Authorization = `Bearer ${access}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosIntance;
