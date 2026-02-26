import getArtistsApi, { getArtistBySlugApi } from "@/components/services/artistService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function useArtist() {
  const params = useParams()
  const slug = params?.slug as string

  // get all artists
  const {
    isLoading: artistsIsLoading,
    isError: artistsIsError,
    data,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtistsApi,
  });

  const artists = data?.items || [];

  // get single artist by slug
  const { isLoading: getArtistBySlugIsLoading, isError: getArtistBySlugIsError, data: singleArtist } = useQuery({
    queryKey: ["artist", slug],
    queryFn: () => getArtistBySlugApi(slug),
    enabled: !!slug
  })

  const artistBySlug = singleArtist?.items?.[0] || null

  return { artistsIsLoading, artistsIsError, artists, artistBySlug, getArtistBySlugIsLoading, getArtistBySlugIsError };
}
