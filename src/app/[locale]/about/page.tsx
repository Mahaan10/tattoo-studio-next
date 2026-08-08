import AboutArtists from "@/components/templates/about/AboutArtists";
import AboutCTA from "@/components/templates/about/AboutCTA";
import AboutFAQ from "@/components/templates/about/AboutFAQ";
import AboutHero from "@/components/templates/about/AboutHero";
import StudioExperience from "@/components/templates/about/StudioExperience";
import StudioGallery from "@/components/templates/about/StudioGallery";
import StudioStory from "@/components/templates/about/StudioStory";

function About() {
  return (
    <main>
      <AboutHero />
      <StudioStory />
      <StudioGallery />
      <StudioExperience />
      <AboutArtists />
      <AboutFAQ />
      <AboutCTA />
    </main>
  );
}

export default About;
