import { AxiosResponse } from "axios";
import axiosInstance from "../interceptor";

export const loginUser = (
  body: AuthValues
): Promise<AxiosResponse<LoginResponse>> => {
  return axiosInstance.post<LoginResponse>("user/login", body);
};

export const logoutUser = () => {
  return axiosInstance.post("user/logout");
}

interface AuthValues {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    email: string;
    id: string;
    token: string;
  };
  success: boolean;
  message: string;
}
