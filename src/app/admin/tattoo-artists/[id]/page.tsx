import ArtistLookbookContainer from "@/components/features/admin/lookbook/ArtistLookbookContainer";
import { getArtistByIdApi } from "@/components/services/artistService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function AdminTattooArtistLookbook({
  params,
}: {
  params: Promise<{ artistId: string }>;
}) {
  const queryClient = new QueryClient();
  const { artistId } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["single-artist", artistId],
    queryFn: () => getArtistByIdApi(artistId),
  });
  console.log("artistId =>", artistId);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArtistLookbookContainer />
    </HydrationBoundary>
  );
}

export default AdminTattooArtistLookbook;
