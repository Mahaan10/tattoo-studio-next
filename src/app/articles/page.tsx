import ArticlesList from "@/components/features/article/ArticlesList";
import getArticlesApi from "@/components/services/articleService";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

async function Articles() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["articles"],
    queryFn: getArticlesApi,
  });

  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto mt-16">
        <div>
          <h1 className="text-3xl font-bold mb-10 md:text-4xl tracking-tight">
            Articles
          </h1>
        </div>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ArticlesList />
        </HydrationBoundary>
      </div>
    </section>
  );
}

export default Articles;
