import Link from "next/link";

function AboutCTA() {
  return (
    <section className="px-[5%] pb-20 md:pb-28">
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-3xl bg-foreground px-6 py-20 text-background md:px-16 md:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-60">
              Start your journey
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Your idea.
              <br />
              Your story.
              <br />
              Your tattoo.
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 opacity-70 md:text-lg">
              Have an idea in mind? Tell us about it and let's create something
              that feels uniquely yours.
            </p>

            <div className="mt-10">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 rounded-full bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Book a consultation
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;
