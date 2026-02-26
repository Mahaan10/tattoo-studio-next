import ArtistsList from "@/components/features/artist/ArtistsList"
import getArtistsApi from "@/components/services/artistService"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

async function TattooArtists() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["artists"],
    queryFn: getArtistsApi
  })
  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto py-15">
        <h2 className="text-3xl font-bold mb-10">Artists</h2>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ArtistsList />
        </HydrationBoundary>
      </div>
    </section>
  )
}

export default TattooArtists