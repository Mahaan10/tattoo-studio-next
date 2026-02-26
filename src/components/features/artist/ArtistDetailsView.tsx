"use client"

import { useState } from "react";
import { LuAtSign, LuInstagram } from "react-icons/lu";
import useArtist from "./useArtist"
import Image from "next/image";

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

function ArtistDetailsView() {
  const { artistBySlug } = useArtist()
  const [activeId, setActiveId] = useState<number | null>(null);

  if (!artistBySlug) return null;

  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto py-15">
        
        {/* HEADER: Name & Socials */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            {artistBySlug.displayName}
          </h1>
          <a 
            className="flex items-center gap-2 text-snow/75 hover:text-snow transition-colors w-fit" 
            href={`https://instagram.com/${artistBySlug.handle}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LuInstagram size={18} />
            <span className="flex items-center gap-x-0.5">
              <LuAtSign size={18} />
              {artistBySlug.handle}
            </span>
          </a>
        </div>

        {/* TOP SECTION: Image and Bio matched height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Artist Image and Styles */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="relative h-112.5 w-full overflow-hidden rounded-2xl bg-onyx mb-6">
              <Image
                src={"/images/artists/artist.jpg"} 
                alt={artistBySlug.displayName}
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
            
            {/* Styles under the image */}
            <div className="flex flex-wrap">
              {styles.map((style) => (
                <button
                  key={style.id}
                  type="button"
                  className="px-4 py-2 mr-2 mb-2 rounded-[10px] transition-all duration-200 bg-onyx text-snow hover:bg-snow hover:text-onyx font-light text-sm"
                >
                  #{style.title}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Bio & Info Cards */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="flex flex-col h-full">
              
              {/* Scrollable Bio Area (Matches image height) */}
              <div className="overflow-y-auto pr-4 h-112.5">
                <h3 className="text-[10px] uppercase tracking-[0.2em] text-snow/40 font-bold mb-4 pt-1">
                  Biography
                </h3>
                <p className="text-lg leading-relaxed text-snow/75 font-light">
                  {artistBySlug.bio || "No bio available for this artist."}
                </p>
              </div>

              {/* Info Cards (Matches height logic) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-snow/20 mb-auto">
                <div className="p-5 rounded-xl bg-onyx/40 border border-white/5 backdrop-blur-sm">
                  <span className="text-[10px] text-snow/40 uppercase tracking-widest block mb-1 font-bold">Booking Status</span>
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <span className={`h-2.5 w-2.5 rounded-full ${artistBySlug.status === 'ACTIVE' ? 'bg-green-600 animate-pulse' : 'bg-red-600'}`} />
                    {artistBySlug.status === 'ACTIVE' ? 'Available' : 'In Active'}
                  </span>
                </div>
                
                <div className="p-5 rounded-xl bg-onyx/40 border border-white/5 backdrop-blur-sm">
                  <span className="text-[10px] text-snow/40 uppercase tracking-widest block mb-1 font-bold">Location</span>
                  <span className="text-sm font-medium truncate">Block 13 Studio — Cologne</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Full Width Recent Work */}
        <div className="mt-10 border-t border-snow/10 pt-10">
          <h2 className="text-2xl font-bold mb-10 uppercase tracking-tight">Recent Works</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {LookBookImages.map((img) => (
              <div
                key={img.id}
                onClick={() => setActiveId(activeId === img.id ? null : img.id)}
                className="relative w-full overflow-hidden rounded-2xl group aspect-3/4 cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt="Tattoo gallery"
                  fill
                  className={`
                    object-cover
                    transition-all duration-500
                    ${activeId === img.id ? "grayscale-0 scale-105" : "grayscale"}
                    sm:group-hover:grayscale-0
                    sm:group-hover:scale-105
                  `}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ArtistDetailsView