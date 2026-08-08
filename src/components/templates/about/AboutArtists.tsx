"use client";

import useArtist from "@/components/features/artist/useArtist";
import Image from "next/image";
import Link from "next/link";

interface Artist {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

const artists: Artist[] = [
  {
    id: "1",
    name: "Alex Morgan",
    specialty: "Fine Line & Minimal",
    image: "/images/artists/artist-1.jpg",
  },
  {
    id: "2",
    name: "Sarah Miller",
    specialty: "Blackwork & Illustrative",
    image: "/images/artists/artist-2.jpg",
  },
  {
    id: "3",
    name: "Daniel Smith",
    specialty: "Traditional & Neo-Traditional",
    image: "/images/artists/artist-3.jpg",
  },
];

function AboutArtists() {
  const { allArtists, allArtistsIsLoading, allArtistsIsError } = useArtist();

  if (allArtistsIsLoading) return <p>Loading</p>;
  return (
    <section className="px-[5%] py-20 md:py-28">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              The artists
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight md:text-5xl">
              Different styles. One commitment to the craft.
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-muted-foreground">
            Our artists bring their own experience, style, and perspective to
            every piece while sharing the same attention to detail.
          </p>
        </div>

        {/* Artists */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {allArtists.map((artist) => (
            <Link
              key={artist.id}
              href={`/artists/${artist.id}`}
              className="group block"
            >
              <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-muted">
                <Image
                  src={artist.coverUrl}
                  alt={artist.displayName}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium tracking-tight">
                    {artist.displayName}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {artist.handle}
                  </p>
                </div>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 flex justify-center md:mt-16">
          <Link
            href="/artists"
            className="inline-flex items-center gap-3 border-b border-foreground pb-1 text-sm font-medium transition-opacity hover:opacity-60"
          >
            Meet all artists
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutArtists;
