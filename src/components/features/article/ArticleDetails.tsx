"use client";

import Image from "next/image";
import useArticle from "./useArticle";

const article = {
  title: "How to wash and care for your new tattoo",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  coverUrl: "/images/gallery/IMG_0265.JPG",
  tags: ["aftercare, tips"],
  publishedAt: Date.now(),
};

function ArticleDetails() {
  //   const { singleArticleData } = useArticle();

  //   console.log("singleArticleBySlug =>", singleArticleData);
  //   if (!singleArticleData) return null;
  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto py-15">
        <div className="w-full mx-auto flex items-center justify-center flex-col">
          <div className="border border-snow/5 rounded-xl shadow shadow-snow">
            <div className="my-6 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                {article.title}
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center px-6 pb-6">
              {/* LEFT: Artist Image and Styles */}
              <div className="relative w-200 h-60 overflow-hidden rounded-2xl bg-onyx mb-6">
                <Image
                  src={article.coverUrl}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover grayscale"
                />
              </div>

              {/* Styles under the image */}
              <div className="flex flex-wrap w-200">
                <p>{article.content}</p>
              </div>
            </div>

            {/* RIGHT: Bio & Info Cards */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleDetails;
