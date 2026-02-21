"use client"

import LookBookSwiper from "@/components/templates/lookbook/Swiper"
import Image from "next/image"

const LookBookImages = [
  { id: 1, src: "/images/gallery/IMG_9232.jpg" },
  { id: 2, src: "/images/gallery/IMG_0257.png" },
  { id: 3, src: "/images/gallery/IMG_0258.jpg" },
  { id: 4, src: "/images/gallery/IMG_0265.jpg" },
  { id: 5, src: "/images/gallery/IMG_0266.jpg" },
  { id: 6, src: "/images/gallery/IMG_3387.jpg" },
]

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
]

function LookBook() {
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
              className="px-4 py-2 mr-2 mb-2 rounded-[10px] transition-all duration-200 bg-black text-white hover:bg-white hover:text-black border border-black"
            >
              #{style.title}
            </button>
          ))}
        </div>

        {/* ROW 3 - Masonry Gallery */}
        <div className="mt-24 columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">

          {LookBookImages.map((img) => (
            <div
              key={img.id}
              className="relative w-full overflow-hidden rounded-2xl break-inside-avoid group"
            >
              <Image
                src={img.src}
                alt="Tattoo gallery"
                width={600}
                height={800}
                className="
                  w-full 
                  h-auto 
                  object-cover 
                  grayscale 
                  transition-all 
                  duration-500 
                  group-hover:grayscale-0 
                  group-hover:scale-105
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default LookBook