import getArtistsApi, {
  getArtistBySlugApi,
  getArtistsLookbookApi,
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
    data: artistsData,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtistsApi,
  });

  const artists = artistsData?.items || [];

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

  // Lookbook data

  const {
    isLoading: lookbookIsLoading,
    isError: lookbookIsError,
    data: lookbookData,
  } = useQuery({
    queryKey: ["artists-lookbook"],
    queryFn: getArtistsLookbookApi,
  });

  const lookbookItems = lookbookData?.items || [];

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

    // lookbook
    lookbookIsLoading,
    lookbookIsError,
    lookbookItems,
  };
}
