import BlurImage from "../skeleton/BlurImage";

function AboutHero() {
  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto py-15">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              About the studio
            </p>

            <h1 className="text-4xl font-semibold leading-[0.92] tracking-tight md:text-6xl">
              More than
              <br />a tattoo studio.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              A space where craftsmanship, individuality, and meaningful ideas
              come together to create something made to last.
            </p>
          </div>

          <div className="relative mx-auto aspect-3/4 w-full max-w-md overflow-hidden rounded-2xl">
            <BlurImage
              src="/images/studio/IMG-20260810-WA0009.jpg"
              alt="Interior of the tattoo studio"
              fill
              preload
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
