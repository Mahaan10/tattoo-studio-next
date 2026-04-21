import { AxiosResponse } from "axios";
import {
  AuthResponse,
  CurrentUserResponse,
  LogoutResponse,
  SignIn,
} from "../schema & types/auth/auth.types";
import http from "./httpService";

export default function AdminSignInApi(user: SignIn): Promise<AuthResponse> {
  return http
    .post("/auth/admin/login", user)
    .then(({ data }: AxiosResponse<AuthResponse>) => data);
}

export function getMeApi(): Promise<CurrentUserResponse> {
  return http
    .get("/auth/admin/me")
    .then(({ data }: AxiosResponse<CurrentUserResponse>) => data);
}

export function logoutApi(): Promise<LogoutResponse> {
  return http
    .post("/auth/admin/logout")
    .then(({ data }: AxiosResponse<LogoutResponse>) => data);
}
