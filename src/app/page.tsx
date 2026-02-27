import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

function Home() {
  return (
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
  );
}

export default Home;
