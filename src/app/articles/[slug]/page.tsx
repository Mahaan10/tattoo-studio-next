import ArticleDetails from "@/components/features/article/ArticleDetails";
import { getArticleBySlugApi } from "@/components/services/articleService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const queryClient = new QueryClient();
  const { slug } = await params;

  await queryClient.prefetchQuery({
    queryKey: ["article", slug],
    queryFn: () => getArticleBySlugApi(slug),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ArticleDetails />
    </HydrationBoundary>
  );
}

export default Article;
