import ArtistDetailsView from "@/components/features/artist/ArtistDetailsView"
import { getArtistBySlugApi } from "@/components/services/artistService"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

async function Artist({ params }: { params: Promise<{ slug: string }> }) {
    const queryClient = new QueryClient()
    const { slug } = await params

    await queryClient.prefetchQuery({
        queryKey: ["artist", slug],
        queryFn: () => getArtistBySlugApi(slug)
    })


    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ArtistDetailsView />
        </HydrationBoundary>
    )
}

export default Artist