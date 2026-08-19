import BlurImage from "../skeleton/BlurImage";

const studioImages = [
  {
    src: "/images/studio/IMG-20260810-WA0010.jpg",
    alt: "Tattoo studio interior",
  },
  {
    src: "/images/studio/IMG-20260810-WA0011.jpg",
    alt: "Tattoo artist workspace",
  },
  {
    src: "/images/studio/IMG-20260810-WA0012.jpg",
    alt: "Studio atmosphere",
  },
];

function StudioGallery() {
  return (
    <section className="px-[5%] py-20 md:py-28">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The studio
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
              A space designed for creativity.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted-foreground">
            From the atmosphere to the smallest details, our studio is designed
            to make every part of the tattoo experience feel comfortable,
            personal, and intentional.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {studioImages.map((image, index) => (
            <div
              key={image.src}
              className={`group relative aspect-3/4 overflow-hidden rounded-2xl ${
                index === 1 ? "md:mt-20" : ""
              }`}
            >
              <BlurImage
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center text-center md:mt-24">
          <p className="max-w-2xl text-2xl font-medium leading-tight tracking-tight md:text-4xl">
            A calm environment for focused work, meaningful conversations, and
            exceptional tattoos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StudioGallery;
