import Review from "@/components/features/review/Review";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const content = [
  {
    id: 1,
    title: "Artists",
    linkHref: "/tattoo-artists",
    imgSrc: "/images/gallery/IMG_3381.JPG",
  },
  {
    id: 2,
    title: "Lookbook",
    linkHref: "/lookbook",
    imgSrc: "/images/gallery/IMG_0257.PNG",
  },
  {
    id: 3,
    title: "Articles",
    linkHref: "/articles",
    imgSrc: "/images/gallery/IMG_0258.jpg",
  },
];

function Home() {
  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        >
          <source src="/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center gap-y-10">
          <h1 className="text-3xl sm:text-6xl lg:text-8xl drop-shadow-2xl px-[20%] text-nowrap flex items-center justify-center flex-col font-blakely">
            <span>Block 13</span>
            <span>Tattoo Studio</span>
          </h1>

          <div className="flex items-center justify-center gap-x-10">
            <Link
              href="/booking"
              className="border border-snow/30 px-4 py-2 flex items-center justify-between w-55 rounded-full hover:border-snow/75 transition-colors duration-200 group"
            >
              <span>Booking</span>
              <MdArrowRightAlt
                size={22}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>

            <Link
              href="/guest-artist"
              className="border border-snow/30 px-4 py-2 flex items-center justify-between w-55 rounded-full hover:border-snow/75 transition-colors duration-200 group"
            >
              <span>Guest Artist</span>
              <MdArrowRightAlt
                size={22}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* main */}
      <div className="py-16 px-[5%]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {content.map((c) => (
              <Link
                key={c.id}
                href={c.linkHref}
                className="relative h-112.5 w-80 overflow-hidden rounded-2xl bg-onyx transition-all duration-500 ease-in-out group/card cursor-pointer shadow shadow-alabaster/20 hover:shadow-md hover:z-10 hover:opacity-100! group/card"
              >
                <Image
                  src={c.imgSrc}
                  alt={c.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover/card:blur-sm grayscale"
                />

                {/* Name Badge (Top Left) */}
                <div className="absolute inset-0 flex items-center justify-center p-6 bg-linear-to-t from-onyx via-onyx/40 to-transparent translate-y-full group-hover/card:translate-y-0 transition-transform duration-500 ">
                  <span className="text-3xl">{c.title}</span>
                </div>
                <div className="absolute bottom-0 px-6 py-2 text-center text-3xl group-hover/card:hidden bg-onyx w-full">
                  {c.title}
                </div>
              </Link>
            ))}
          </div>
          {/* Comment Section */}
          <Review />
        </div>
      </div>
    </>
  );
}

export default Home;
