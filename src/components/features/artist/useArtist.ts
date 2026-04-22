import getArtistsApi, {
  createNewArtistApi,
  editArtistApi,
  getAllArtistsApi,
  getArtistBySlugApi,
  getArtistsLookbookApi,
} from "@/components/services/artistService";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function useArtist() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  // get all public artists
  const {
    isLoading: artistsIsLoading,
    isError: artistsIsError,
    data: artistsData,
  } = useQuery({
    queryKey: ["artists"],
    queryFn: getArtistsApi,
  });

  const artists = artistsData?.items || [];

  // get single public artist by slug
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

  // get all artists
  const {
    data,
    isLoading: allArtistsIsLoading,
    isError: allArtistsIsError,
  } = useQuery({
    queryKey: ["all-artists", "artists"],
    queryFn: getAllArtistsApi,
  });

  const allArtists = data?.items || [];

  //create new artist
  const { isPending: createNewArtistIsPending, mutateAsync: createNewArtist } =
    useMutation({
      mutationFn: createNewArtistApi,

      onSuccess: (data) => {
        console.log("createNewArtistOnSuccessData =>", data);
        toast.success(`Create ${data.displayName} successfully`);
      },
      onError: () => {
        toast.error("Artist not created, try again later");
      },
    });

  // edit artist
  const { isPending: editArtistIsPending, mutateAsync: editArtist } =
    useMutation({
      mutationFn: editArtistApi,

      onSuccess: (data) => {
        console.log("editArtistOnSuccessData =>", data);
        toast.success(`Edit ${data.displayName} successfully`);
      },

      onError: () => {
        toast.error("Edit artist failed, try again later");
      },
    });

  // edit artist status
  const { isPending: editArtistStatusIsPending, mutate: editArtistStatus } =
    useMutation({
      mutationFn: ({
        artistId,
        status,
      }: {
        artistId: string;
        status: string;
      }) => editArtistApi({ artistId, newArtist: { status } }),

      onSuccess: (data) => {
        console.log("editArtistStatusOnSuccessData =>", data);

        toast.success(
          `${data.displayName}'s status has been ${data.status === "ACTIVE" ? "actived" : "inactived"} successfully`,
        );
      },

      onError: () => {
        toast.error("Change artist status failed, try again later");
      },
    });

  return {
    // public artists
    artistsIsLoading,
    artistsIsError,
    artists,

    // Single public artist
    artistBySlug,
    artistWorks,
    getArtistBySlugIsError,
    getArtistBySlugIsLoading,

    // lookbook
    lookbookIsLoading,
    lookbookIsError,
    lookbookItems,

    // get all artists
    allArtists,
    allArtistsIsLoading,
    allArtistsIsError,

    // create new artist
    createNewArtist,
    createNewArtistIsPending,

    // edit artist
    editArtist,
    editArtistIsPending,

    // edit artist status
    editArtistStatus,
    editArtistStatusIsPending,
  };
}
