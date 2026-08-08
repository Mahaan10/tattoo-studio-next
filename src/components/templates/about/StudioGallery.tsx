import BlurImage from "../skeleton/BlurImage";

function StudioGallery() {
  return (
    <section className="px-[5%] py-20 md:py-28">
      <div className="container mx-auto">
        {/* Section heading */}
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

        {/* Editorial gallery */}
        <div className="grid gap-4 md:grid-cols-12 md:gap-6">
          {/* <BlurImage
            src="/images/gallery/IMG_0258.jpg"
            alt="Image"
            fill
            preload
          /> */}
          <div className="md:col-span-7">
            <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-muted">
              <BlurImage
                src="/images/gallery/IMG_0265.jpg"
                alt="Image"
                fill
                preload
              />
            </div>
          </div>

          {/* Top-right image */}
          <div className="md:col-span-5 md:pt-16">
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
              <BlurImage
                src="/images/gallery/IMG_0266.jpg"
                alt="Image"
                fill
                preload
              />
            </div>
          </div>

          {/* Bottom-left small image */}
          <div className="md:col-span-5 md:ml-[8%]">
            <div className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
              <BlurImage
                src="/images/gallery/IMG_3381.JPG"
                alt="Image"
                fill
                preload
              />
            </div>
          </div>

          {/* Bottom-right image */}
          <div className="md:col-span-7 md:pt-20">
            <div className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-muted">
              <BlurImage
                src="/images/gallery/IMG_3387.JPG"
                alt="Image"
                fill
                preload
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudioGallery;
