function StudioExperience() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "Every tattoo starts with a conversation. We take the time to understand your idea, references, expectations, and what you want the final piece to communicate.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Your idea is developed together with your artist, considering placement, proportions, style, and how the design will work with your body.",
    },
    {
      number: "03",
      title: "Tattoo",
      description:
        "Once everything is ready, your artist brings the design to life with careful attention to detail, technique, and your comfort throughout the session.",
    },
    {
      number: "04",
      title: "Aftercare",
      description:
        "The process doesn't end when you leave the studio. You'll receive clear aftercare instructions to help your new tattoo heal properly.",
    },
  ];

  return (
    <section className="bg-onyx px-[5%] py-20 text-snow/60 md:py-28">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              02 — The experience
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              From the first idea to the final piece.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              We believe getting a tattoo should be an experience you feel
              comfortable with from beginning to end. Every step is considered
              with care, from the initial conversation to the finished piece.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-16 border-t border-snow/20 md:mt-24">
          {steps.map((step) => (
            <div
              key={step.number}
              className="grid gap-6 border-b border-snow/20 py-8 md:grid-cols-[100px_0.7fr_1.3fr] md:items-start md:gap-10 md:py-12"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {step.number}
              </span>

              <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                {step.title}
              </h3>

              <p className="max-w-xl text-base leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudioExperience;
