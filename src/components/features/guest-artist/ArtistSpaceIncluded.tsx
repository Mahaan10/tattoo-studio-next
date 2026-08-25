const INCLUDED_ITEMS = [
  {
    number: "01",
    title: "Professional workstation",
    description: "A dedicated professional space designed for tattooing.",
  },
  {
    number: "02",
    title: "Tattoo bed & armrest",
    description: "Essential furniture for comfortable client sessions.",
  },
  {
    number: "03",
    title: "Work trolley",
    description: "Practical workspace storage for your daily setup.",
  },
  {
    number: "04",
    title: "Workstation lighting",
    description: "Professional lighting for precise tattoo work.",
  },
  {
    number: "05",
    title: "Hygiene infrastructure",
    description: "Professional studio infrastructure for your workflow.",
  },
  {
    number: "06",
    title: "Studio consumables",
    description: "Selected consumables are available as part of the workspace.",
  },
  {
    number: "07",
    title: "Stencil printer",
    description: "Convenient access to stencil printing within the studio.",
  },
  {
    number: "08",
    title: "Wi-Fi",
    description: "Reliable connectivity throughout the studio.",
  },
  {
    number: "09",
    title: "Reception & waiting area",
    description:
      "A professional environment for your clients before their appointment.",
  },
  {
    number: "10",
    title: "Central Cologne location",
    description: "A professional tattoo environment in the heart of Cologne.",
  },
];

function ArtistSpaceIncluded() {
  return (
    <section className="px-[5%] py-20 text-alabaster md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20">
          {/* Intro */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-alabaster/40">
              What's Included
            </span>

            <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-[1.05] tracking-[-0.04em] md:text-5xl lg:text-6xl">
              Everything you need.
              <br />
              <span className="text-alabaster/35">
                Nothing you need to build yourself.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-relaxed text-alabaster/50 md:text-base">
              Your Artist Space comes with the professional infrastructure
              needed to work comfortably and independently at Block13.
            </p>
          </div>

          {/* Items */}
          <div className="border-t border-alabaster/10">
            {INCLUDED_ITEMS.map((item) => (
              <div
                key={item.number}
                className="group grid gap-4 border-b border-alabaster/10 py-6 md:grid-cols-[60px_1fr_auto] md:items-center md:gap-8"
              >
                <span className="text-xs font-medium tracking-[0.2em] text-dried-mustard">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-base font-medium text-alabaster md:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-alabaster/40">
                    {item.description}
                  </p>
                </div>

                <span className="hidden text-alabaster/20 transition-transform duration-300 group-hover:translate-x-1 md:block">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpaceIncluded;
