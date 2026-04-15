import { getMeApi } from "@/components/services/authService";
import { useQuery } from "@tanstack/react-query";

export default function useCurrentUser() {
  const {
    data,
    isLoading: currentUserIsLoading,
    isError: currentUserIsError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: getMeApi,
    retry: false,
  });

  const user = data ?? null;

  return { user, currentUserIsError, currentUserIsLoading };
}
