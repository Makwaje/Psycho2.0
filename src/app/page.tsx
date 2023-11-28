import Navigation from "@/components/Pages/LandingPage/Navigation";
import HeroSection from "@/components/Pages/LandingPage/HeroSection";
import CardsSection from "@/components/Pages/LandingPage/CardsSection";
import TabSection from "@/components/Pages/LandingPage/TabSection";
import HowSection from "@/components/Pages/LandingPage/HowSection";
import FreeSection from "@/components/Pages/LandingPage/FreeSection";
import HappySadSection from "@/components/Pages/LandingPage/HappySadSection";
import Free2Section from "@/components/Pages/LandingPage/Free2Section";
import FaqSection from "@/components/Pages/LandingPage/FaqSection";
import CtaSection from "@/components/Pages/LandingPage/CtaSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HowSection />
        <CardsSection />
        <FreeSection />
        <Free2Section />
        <CtaSection />
        <FaqSection />
        {/* <TabSection /> */}
        {/* <HappySadSection /> */}
      </main>
    </>
  );
}
