import { CalendarDays, Users, Store } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Book your space",
    description:
      "Choose the dates you'd like to work at Block13 and select how many workstations you need.",
  },
  {
    number: "02",
    icon: Users,
    title: "Bring your clients",
    description:
      "You organize your own clients, appointments, deposits, pricing and payments independently.",
  },
  {
    number: "03",
    icon: Store,
    title: "Work independently",
    description:
      "Arrive with your equipment and work from a professional Block13 workstation while remaining fully independent.",
  },
];

function ArtistSpaceWorks() {
  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]">
            How It Works
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
            A professional workspace.
            <br />
            Three simple steps.
          </h2>

          <p className="mt-6 text-sm leading-relaxed md:text-base">
            Artist Space is designed for independent tattoo artists. You remain
            responsible for your clients and your work — Block13 provides the
            professional environment.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-3xl border border-snow/10 bg-onyx p-8 transition-all duration-300 hover:-translate-y-1 hover:border-snow/20 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-[0.2em] text-dried-mustard">
                    {step.number}
                  </span>

                  <Icon
                    size={24}
                    className="transition-colors text-dried-mustard"
                  />
                </div>

                <h3 className="mt-10 text-xl font-semibold">{step.title}</h3>

                <p className="mt-4 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl border border-snow/10 bg-onyx p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                You manage
              </span>

              <ul className="mt-5 space-y-3 text-sm">
                <li>• Your clients and appointments.</li>
                <li>• Your pricing and deposits.</li>
                <li>• Your payments.</li>
                <li>• Communication with your clients.</li>
                <li>• Your tattoo work and touch-up appointments.</li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em]">
                Block13 provides
              </span>

              <ul className="mt-5 space-y-3 text-sm">
                <li>• Professional workstation.</li>
                <li>• Studio infrastructure.</li>
                <li>• Hygiene environment.</li>
                <li>• Reception and waiting area.</li>
                <li>• Creative studio atmosphere.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpaceWorks;
