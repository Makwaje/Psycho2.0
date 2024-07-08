import Navigation from "@components/LandingPage/Navigation";
import HeroSection from "@components/LandingPage/HeroSection";
import CardsSection from "@components/LandingPage/CardsSection";
import TabSection from "@components/LandingPage/TabSection";
import HowSection from "@components/LandingPage/HowSection";
import FreeSection from "@components/LandingPage/FreeSection";
import HappySadSection from "@components/LandingPage/HappySadSection";
import Free2Section from "@components/LandingPage/Free2Section";
import FaqSection from "@components/LandingPage/FaqSection";
import CtaSection from "@components/LandingPage/CtaSection";

export default function LandingPage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HowSection />
        <CardsSection />
        {/* <HappySadSection /> */}
        <FreeSection />
        <Free2Section />
        <CtaSection />
        <FaqSection />
        {/* <TabSection /> */}
      </main>
    </>
  );
}
