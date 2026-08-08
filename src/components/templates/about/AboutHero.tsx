function AboutHero() {
  return (
    <section className="py-16 px-[5%]">
      <div className="container mx-auto py-15">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            About the studio
          </p>

          <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl">
            More than a tattoo studio.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
            A space where craftsmanship, individuality, and meaningful ideas
            come together to create something made to last.
          </p>
        </div>

        <div className="aspect-16/8 overflow-hidden rounded-2xl bg-muted">
          {/* Studio hero image */}
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
