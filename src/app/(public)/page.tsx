import {
  HeroSection,
  AdvantagesSection,
  PartnersCarousel,
  RealizationsSection,
} from "@/components/homepage";
import ThermolaquageSectionAdaptive from "@/components/homepage/ThermolaquageSectionAdaptive";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <RealizationsSection />
      <PartnersCarousel />
      <ThermolaquageSectionAdaptive />
    </>
  );
}
