const AUDIENCES = [
  {
    number: "01",
    title: "Guest artists",
    description:
      "Visiting Cologne for a guest spot or a short period and looking for a professional place to work.",
  },
  {
    number: "02",
    title: "Independent tattooers",
    description:
      "Professional artists who want a fully equipped workspace without the responsibilities of running their own studio.",
  },
  {
    number: "03",
    title: "Regular artists",
    description:
      "Artists who work in Cologne regularly and want a reliable professional environment for their clients.",
  },
];

function ArtistSpaceAudience() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]">
            Who It's For
          </span>

          <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl">
            Made for artists
            <br />
            <span>who work independently.</span>
          </h2>
        </div>

        {/* Audience list */}
        <div className="mt-16 divide-y divide-snow/10 border-y border-snow/10">
          {AUDIENCES.map((audience) => (
            <div
              key={audience.number}
              className="grid gap-5 py-8 md:grid-cols-[70px_0.8fr_1fr] md:items-start md:gap-10"
            >
              <span className="text-xs font-medium tracking-[0.2em] text-dried-mustard">
                {audience.number}
              </span>

              <h3 className="text-xl font-semibold md:text-2xl">
                {audience.title}
              </h3>

              <p className="max-w-xl text-sm leading-relaxed text-alabaster/55 md:text-base">
                {audience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-16 flex flex-col gap-6 md:mt-20 md:flex-row md:items-end md:justify-between">
          <p className="max-w-3xl text-2xl font-medium leading-snug tracking-[-0.02em] md:text-4xl">
            Different styles.
            <br />
            Different artistic directions.
            <br />
            <span>One professional space.</span>
          </p>

          <span className="text-xs font-medium uppercase tracking-[0.2em]">
            Block13 · Cologne
          </span>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpaceAudience;
