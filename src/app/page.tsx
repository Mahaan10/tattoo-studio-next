import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

function Home() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden flex items-center justify-center flex-col">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 min-w-full h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="z-20 flex flex-col items-center justify-center gap-y-10 min-h-dvh">
        <h1 className="text-2xl lg:text-6xl drop-shadow-2xl px-[20%] text-nowrap flex items-center justify-center flex-col tracking-widest">
          <span>Block 13</span>
          <span>Tattoo Studio</span>
        </h1>
        <div className="flex items-center justify-center gap-x-10">
          <Link
            href="/booking"
            className="border border-dried-mustard/75 px-4 py-2 flex items-center justify-between w-55 rounded-full hover:border-dried-mustard transition-colors duration-200 group"
          >
            <span>Booking</span>
            <MdArrowRightAlt
              size={22}
              className="group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
          <Link
            href="/guest-artist"
            className="border border-dried-mustard/75 px-4 py-2 flex items-center justify-between w-55 rounded-full hover:border-dried-mustard transition-colors duration-200 group"
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
