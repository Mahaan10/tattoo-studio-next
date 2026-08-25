function ArtistSpaceConcept() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em]">
              The Concept
            </span>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl">
              Work independently.
              <br />
              <span>Without running a studio.</span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-sm leading-relaxed md:text-base">
              <p>
                Block13 offers professional, independent tattoo artists a fully
                equipped workspace in Cologne.
              </p>

              <p>
                Whether you're visiting as a guest artist, need a professional
                workspace occasionally, or are looking for a regular place to
                work, you can focus on your art and your clients without the
                responsibilities of running your own studio.
              </p>
            </div>

            <div className="mt-12 border-l border-onyx/20 pl-5 md:mt-16">
              <p className="max-w-xl text-xl font-medium leading-snug md:text-2xl">
                You focus on your art and your clients.
                <br />
                <span>We provide the professional space for it.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpaceConcept;
