import dynamic from "next/dynamic";
import {
  HeroSection,
  AdvantagesSection,
} from "@/components/homepage";

// Lazy load below-the-fold sections — reduces initial JS bundle
const RealizationsSection = dynamic(
  () => import("@/components/homepage/RealizationsSection"),
  { ssr: true }
);
const PartnersCarousel = dynamic(
  () => import("@/components/homepage/PartnersCarousel"),
  { ssr: true }
);
const ThermolaquageSectionAdaptive = dynamic(
  () => import("@/components/homepage/ThermolaquageSectionAdaptive"),
  { ssr: true }
);

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
