import AdminSignInApi from "@/components/services/authService";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";

export default function useAuth() {
  const { isPending, mutateAsync: signIn } = useMutation({
    mutationFn: AdminSignInApi,
    onSuccess: (data) => {
      setCookie("access_token", data?.accessToken);
      toast.success("Welcome back Admin!");
    },

    onError: (error: AxiosError) => {
      const status = error?.response?.status;
      if (status === 400) {
        toast.error("Invalid information");
      } else if (status === 401) {
        toast.error("Email or password is incorrect");
      } else if (status === 404) {
        toast.error("حساب کاربری یافت نشد");
      } else {
        toast.error("ورود به حساب کاربری ناموفق بود، لطفاً دوباره تلاش کنید.");
      }
    },
  });

  return { isPending, signIn };
}
