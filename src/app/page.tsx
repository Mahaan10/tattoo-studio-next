function Home() {
  return (
    <div className="relative min-h-dvh w-full overflow-hidden flex items-center justify-center flex-col">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 min-w-full min-h-full object-cover"
      >
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="z-20 text-center">
        <h1 className="text-2xl lg:text-6xl drop-shadow-2xl px-[20%] text-nowrap flex items-center justify-center flex-col tracking-widest">
          <span>Block 13</span>
          <span>Tattoo Studio</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
