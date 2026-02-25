import { AxiosResponse } from "axios";
import { AuthResponse, SignIn } from "../schema & types/auth/auth.types";
import http from "./httpService";

export default function AdminSignInApi(user: SignIn): Promise<AuthResponse> {
  return http
    .post("/auth/admin/login", user)
    .then(({ data }: AxiosResponse<AuthResponse>) => data);
}
