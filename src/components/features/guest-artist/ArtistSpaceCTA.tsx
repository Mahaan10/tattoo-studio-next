"use client";

function ArtistSpaceCTA() {
  const scrollToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="px-[5%] py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="border-t border-snow/10 pt-12 md:pt-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.25em] text-alabaster/75">
                Block13 Artist Space
              </span>

              <h2 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                Bring your art.
                <br />
                <span className="text-alabaster/55">We provide the space.</span>
              </h2>
            </div>

            <div className="flex flex-col items-start gap-5 md:items-end">
              <p className="max-w-xs text-sm leading-relaxed md:text-right">
                Professional workspace for independent tattoo artists in
                Cologne.
              </p>

              <button
                type="button"
                onClick={scrollToBooking}
                className="submit-btn min-w-52"
              >
                Book Artist Space
              </button>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-2 border-t border-onyx/10 pt-6 text-xs text-alabaster/55 sm:flex-row sm:items-center sm:justify-between">
            <span>Day Pass from €100</span>

            <span>Monthly Pass €800</span>

            <span>0% commission on your own clients</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpaceCTA;
