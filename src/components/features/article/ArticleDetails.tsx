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
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {article.title}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 items-stretch">
          {/* LEFT: Artist Image and Styles */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative w-[285.533px] h-112.5 overflow-hidden rounded-2xl bg-onyx mb-6">
              <Image
                src={article.coverUrl}
                alt={article.title}
                fill
                priority
                className="object-cover grayscale"
              />
            </div>

            {/* Styles under the image */}
            {/* <div className="flex flex-wrap">
                      {artistWorks?.flatMap((work) =>
                        work.tags.map((tag, index) => (
                          <button
                            key={index}
                            type="button"
                            className="px-4 py-2 mr-2 mb-2 rounded-[10px] transition-all duration-200 bg-onyx text-snow hover:bg-snow hover:text-onyx font-light text-sm capitalize"
                          >
                            #{tag}
                          </button>
                        )),
                      )}
                    </div> */}
          </div>

          {/* RIGHT: Bio & Info Cards */}
        </div>
      </div>
    </section>
  );
}

export default ArticleDetails;
