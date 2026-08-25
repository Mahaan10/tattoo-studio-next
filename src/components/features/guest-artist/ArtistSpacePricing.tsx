"use client";

function ArtistSpacePricing() {
  const scrollToBooking = () => {
    document.getElementById("book")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="px-[5%] py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-medium uppercase tracking-[0.25em]">
            Pricing
          </span>

          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl lg:text-6xl">
            Choose the space
            <br />
            <span>that works for you.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed md:text-base">
            Whether you're visiting Cologne for a few days or looking for a
            regular professional workspace, choose the option that fits your
            workflow.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Day Pass */}
          <div className="flex flex-col rounded-3xl border border-snow/10 bg-onyx p-7 md:p-10">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.2em]">
                  Flexible
                </span>

                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  Day Pass
                </h3>
              </div>

              <span className="text-xs text-alabaster/50">PAY AS YOU GO</span>
            </div>

            <div className="mt-10">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
                  €100
                </span>

                <span className="mb-2 text-sm">/ day</span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-relaxed">
                Ideal for guest spots, individual appointments and artists who
                want the flexibility to work in Cologne without a long-term
                commitment.
              </p>
            </div>

            <div className="my-8 h-px" />

            <ul className="space-y-3 text-sm">
              <li>Professional tattoo workstation</li>
              <li>Studio infrastructure</li>
              <li>Access to shared studio facilities</li>
              <li>Reception and waiting area</li>
              <li>0% commission on your own clients</li>
            </ul>

            <button
              type="button"
              onClick={scrollToBooking}
              className="mt-10 w-full rounded-full border border-snow/10 px-6 py-3 text-sm font-medium hover:border-snow/20 transition-colors duration-200"
            >
              Check Availability
            </button>
          </div>

          {/* Monthly Pass */}
          <div className="relative flex flex-col rounded-3xl border border-snow/10 p-7 bg-onyx  md:p-10">
            <div className="absolute right-6 top-6 rounded-full bg-dried-mustard px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-onyx">
              Regular Artists
            </div>

            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] /45">
                Long Term
              </span>

              <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                Monthly Pass
              </h3>
            </div>

            <div className="mt-10">
              <div className="flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-[-0.04em] md:text-6xl">
                  €800
                </span>

                <span className="mb-2 text-sm /45">/ month</span>
              </div>

              <p className="mt-4 max-w-md text-sm leading-relaxed /55">
                For artists who work regularly at Block13 and want a permanent
                professional workspace without running their own studio.
              </p>
            </div>

            <div className="my-8 h-px bg-onyx/10" />

            <ul className="space-y-3 text-sm /70">
              <li>Professional tattoo workstation</li>
              <li>Studio infrastructure</li>
              <li>Regular professional workspace</li>
              <li>Reception and waiting area</li>
              <li>0% commission on your own clients</li>
            </ul>

            <button
              type="button"
              onClick={scrollToBooking}
              className="mt-10 w-full rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 hover:opacity-85 border border-snow/10 hover:border-snow/20 "
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Commission statement */}
        <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-onyx/10 bg-onyx/[0.03] p-7 md:flex-row md:items-center md:justify-between md:p-8">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em]">
              Your clients. Your income.
            </span>

            <p className="mt-2 text-lg font-semibold  md:text-xl">
              No commission on your own tattoo appointments.
            </p>
          </div>

          <p className="max-w-md text-sm leading-relaxed md:text-right">
            You keep the income from your own clients. Block13 provides the
            professional space and infrastructure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ArtistSpacePricing;
