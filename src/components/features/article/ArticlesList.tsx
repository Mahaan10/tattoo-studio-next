"use client";

import Link from "next/link";
import useArticle from "./useArticle";
import Image from "next/image";

function ArticlesList() {
  const { articles } = useArticle();
  console.log("articles =>", articles);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Link
          href={`/articles/${article.slug}`}
          key={article.id}
          className="relative h-70 overflow-hidden rounded-2xl"
        >
          <Image
            //src={article.coverUrl}
            src="/images/gallery/IMG_0265.JPG"
            alt={article.title}
            fill
            className="object-cover grayscale"
          />

          <div className="absolute bottom-0 px-3 py-2 backdrop-blur-lg w-full flex flex-col">
            <span className="font-bold text-lg">{article.title}</span>
            <span className="text-sm line-clamp-2">{article.excerpt}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ArticlesList;
