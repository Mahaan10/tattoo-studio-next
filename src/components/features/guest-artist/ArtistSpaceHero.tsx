"use client";

function ArtistSpaceHero() {
  const scrollToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden px-[5%] py-24 md:py-32 lg:py-40">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <span className="mb-6 text-xs font-medium uppercase tracking-[0.25em]">
          Block13 Tattoo Studio · Cologne
        </span>

        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
          Your workspace.
          <br />
          Your clients.
          <br />
          <span className="text-dried-mustard">Your freedom.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-relaxed md:text-lg">
          A professional, fully equipped workspace for independent tattoo
          artists and guest artists working in Cologne.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={scrollToBooking}
            className="submit-btn min-w-52"
          >
            Book Artist Space
          </button>

          <span className="text-xs">Day Pass €100 · Monthly Pass €800</span>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpaceHero;
