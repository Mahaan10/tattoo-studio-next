const REQUIREMENTS = [
  {
    number: "01",
    title: "Your clients",
    description:
      "You bring and manage your own clients, appointments and client communication.",
  },
  {
    number: "02",
    title: "Your tattoo equipment",
    description:
      "Bring your personal tattoo equipment, including your machine, needles or cartridges and tattoo inks.",
  },
  {
    number: "03",
    title: "Your business",
    description:
      "Your pricing, deposits and payments remain completely under your control.",
  },
  {
    number: "04",
    title: "Your responsibility",
    description:
      "You are responsible for your tattoo work, client communication and any touch-up appointments.",
  },
];

function ArtistSpaceRequirements() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          {/* Intro */}
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em]">
              What You Bring
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              You bring
              <br />
              <span>the art.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-relaxed md:text-base">
              Artist Space is built around independence. You bring your clients,
              your equipment and your artistic direction.
            </p>
          </div>

          {/* Requirements */}
          <div>
            <div className="divide-y divide-snow/10 border-y border-snow/10">
              {REQUIREMENTS.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-5 py-7 md:grid-cols-[60px_1fr] md:gap-8"
                >
                  <span className="text-xs font-medium tracking-[0.2em] text-dried-mustard">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-semibold md:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-relaxed md:text-base text-alabaster/55">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-20 border-t border-snow/10 pt-12 md:mt-28 md:pt-16">
          <p className="max-w-5xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-6xl lg:text-7xl">
            Bring your art.
            <br />
            <span className="text-alabaster/55">We provide the space.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpaceRequirements;
