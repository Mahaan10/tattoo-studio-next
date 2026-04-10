import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    id: 1,
    img: "/images/gallery/IMG_3381.JPG",
    title: "lorem",
    desc: "lorem ipsum",
  },
  {
    id: 2,
    img: "/images/gallery/IMG_9232.jpg",
    title: "lorem",
    desc: "lorem ipsum",
  },
  {
    id: 3,
    img: "/images/gallery/IMG_0266.jpg",
    title: "lorem",
    desc: "lorem ipsum",
  },
  {
    id: 4,
    img: "/images/gallery/IMG_0265.jpg",
    title: "lorem",
    desc: "lorem ipsum",
  },
  {
    id: 5,
    img: "/images/gallery/IMG_0265.jpg",
    title: "lorem",
    desc: "lorem ipsum",
  },
];

function Articles() {
  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto mt-16">
        <div>
          <h1 className="text-3xl font-bold mb-10 md:text-4xl tracking-tight">
            Articles
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              href={`/articles/${article.title}`}
              key={article.id}
              className="relative h-70 overflow-hidden rounded-2xl"
            >
              <Image
                src={article.img}
                alt={article.title}
                fill
                className="object-cover grayscale"
              />

              <div className="absolute bottom-0 px-3 py-2 backdrop-blur-lg w-full flex flex-col">
                <span className="font-bold text-lg">{article.title}</span>
                <span className="text-sm line-clamp-2">{article.desc}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Articles;
