import { HeroSection } from "./components/hero-section";
import { SolutionsSection } from "./components/solutions-section";
import { CoreBankingSection } from "./components/core-banking-section";
import { DigitalBankingSection } from "./components/digital-banking-section";
import { InsightsSection } from "./components/insights-section";
import { ScrollEffects } from "./components/scroll-effects";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <HeroSection />
      <SolutionsSection />
      <CoreBankingSection />
      <DigitalBankingSection />
      <InsightsSection />
    </>
  );
}
