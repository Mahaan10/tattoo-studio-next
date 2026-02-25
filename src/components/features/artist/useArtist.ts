import getArtistsApi from "@/components/services/artistService";
import { useQuery } from "@tanstack/react-query";

export default function useArtist() {
  const {
    isLoading: artistsIsLoading,
    isError: artistsIsError,
    data,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtistsApi,
  });

  const artists = data?.items || [];

  return { artistsIsLoading, artistsIsError, artists };
}
