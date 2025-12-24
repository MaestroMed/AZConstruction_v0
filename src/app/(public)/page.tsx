import {
  HeroSection,
  AdvantagesSection,
  PartnersCarousel,
  RealizationsSection,
  ThermolaquageSection,
  TestimonialsSection,
} from "@/components/homepage";
import CTASection from "@/components/homepage/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AdvantagesSection />
      <ThermolaquageSection />
      <TestimonialsSection />
      <PartnersCarousel />
      <RealizationsSection />
      <CTASection />
    </>
  );
}
