import ArtistSpaceAudience from "@/components/features/guest-artist/ArtistSpaceAudience";
import ArtistSpaceConcept from "@/components/features/guest-artist/ArtistSpaceConcept";
import ArtistSpaceCTA from "@/components/features/guest-artist/ArtistSpaceCTA";
import ArtistSpaceHero from "@/components/features/guest-artist/ArtistSpaceHero";
import ArtistSpaceIncluded from "@/components/features/guest-artist/ArtistSpaceIncluded";
import ArtistSpacePricing from "@/components/features/guest-artist/ArtistSpacePricing";
import ArtistSpaceRequirements from "@/components/features/guest-artist/ArtistSpaceRequirements";
import ArtistSpaceWorks from "@/components/features/guest-artist/ArtistSpaceWorks";
import GuestArtistContainer from "@/components/features/guest-artist/GuestArtistContainer";

function Guest() {
  return (
    <main className="py-16">
      <ArtistSpaceHero />

      <ArtistSpaceConcept />

      <ArtistSpaceWorks />

      <ArtistSpacePricing />

      <ArtistSpaceIncluded />

      <ArtistSpaceRequirements />

      <ArtistSpaceAudience />

      <section id="book">
        <GuestArtistContainer />
      </section>

      <ArtistSpaceCTA />
    </main>
  );
}

export default Guest;
