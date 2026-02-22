"use client";

import { useState } from "react";
import LookBookSwiper from "@/components/templates/lookbook/Swiper";
import Image from "next/image";

interface GalleryImageProps {
  id: number;
  src: string;
  activeId: number | null;
  setActiveId: React.Dispatch<React.SetStateAction<number | null>>;
}

const LookBookImages = [
  { id: 1, src: "/images/gallery/IMG_9232.jpg" },
  { id: 2, src: "/images/gallery/IMG_0257.png" },
  { id: 3, src: "/images/gallery/IMG_0258.jpg" },
  { id: 4, src: "/images/gallery/IMG_0265.jpg" },
  { id: 5, src: "/images/gallery/IMG_0266.jpg" },
  { id: 6, src: "/images/gallery/IMG_3387.jpg" },
  { id: 7, src: "/images/gallery/IMG_3387.jpg" },
  { id: 8, src: "/images/gallery/IMG_3387.jpg" },
  { id: 9, src: "/images/gallery/IMG_3387.jpg" },
  { id: 10, src: "/images/gallery/IMG_3387.jpg" },
  { id: 11, src: "/images/gallery/IMG_3387.jpg" },
];

const styles = [
  { id: 1, title: "Watercolor" },
  { id: 2, title: "Portrait" },
  { id: 3, title: "Oriental" },
  { id: 4, title: "Oldschool" },
  { id: 5, title: "Blackwork" },
  { id: 6, title: "Geometric" },
  { id: 7, title: "New Traditional" },
  { id: 8, title: "Anime" },
  { id: 9, title: "Letterings" },
  { id: 10, title: "Graphic" },
  { id: 11, title: "Fineline" },
  { id: 12, title: "Color Realistic" },
  { id: 13, title: "Dotwork" },
  { id: 14, title: "Mandala" },
  { id: 15, title: "Cover Up" },
];

function LookBook() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto">
        {/* ROW 1 - H1 + SWIPER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 mt-16">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bebas-neue flex flex-col gap-y-3">
              <span>Dig deep in</span>
              <span>Some of Our Styles</span>
            </h1>
          </div>

          <div>
            <LookBookSwiper images={LookBookImages} />
          </div>
        </div>

        {/* ROW 2 - STYLE BUTTONS */}
        <div className="flex flex-wrap mt-16">
          {styles.map((style) => (
            <button
              key={style.id}
              type="button"
              className="px-4 py-2 mr-2 mb-2 rounded-[10px] transition-all duration-200 bg-onyx text-snow hover:bg-snow hover:text-onyx"
            >
              #{style.title}
            </button>
          ))}
        </div>

        {/* ROW 3 - Ordered Grid Gallery */}
        <div className="mt-24 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {LookBookImages.map((img) => (
            <GalleryImage
              key={img.id}
              id={img.id}
              src={img.src}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

//  Gallery Image Component

function GalleryImage({ id, src, activeId, setActiveId }: GalleryImageProps) {
  const isActive = activeId === id;

  const handleClick = () => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full overflow-hidden rounded-2xl group aspect-3/4 cursor-pointer"
    >
      <Image
        src={src}
        alt="Tattoo gallery"
        fill
        sizes="(max-width: 640px) 50vw,
               (max-width: 1024px) 33vw,
               (max-width: 1280px) 25vw,
               20vw"
        className={`
          object-cover
          transition-all duration-500
          ${isActive ? "grayscale-0 scale-105" : "grayscale sm:grayscale"}
          sm:group-hover:grayscale-0
          sm:group-hover:scale-105
        `}
      />
    </div>
  );
}

export default LookBook;
