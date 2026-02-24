import { SignIn } from "../schema & types/auth/auth.types";
import http from "./httpService";

export default function AdminSignInApi(data: SignIn) {
  return http.post("/auth/admin/login", data).then(({ data }) => data);
}
