import getArtistsApi, {
  getArtistBySlugApi,
} from "@/components/services/artistService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function useArtist() {
  const params = useParams();
  const slug = params?.slug as string;

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
  const {
    isLoading: getArtistBySlugIsLoading,
    isError: getArtistBySlugIsError,
    data: singleArtistData,
  } = useQuery({
    queryKey: ["artist", slug],
    queryFn: () => getArtistBySlugApi(slug),
    enabled: !!slug,
  });

  const artistBySlug = singleArtistData?.artist || null;
  const artistWorks = singleArtistData?.works?.items || null;

  return {
    // All artists
    artistsIsLoading,
    artistsIsError,
    artists,

    // Single artist
    artistBySlug,
    artistWorks,
    getArtistBySlugIsError,
    getArtistBySlugIsLoading,
  };
}
