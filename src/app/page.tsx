import Navigation from "@/components/Pages/LandingPage/Navigation";
import HeroSection from "@/components/Pages/LandingPage/HeroSection";
import CardsSection from "@/components/Pages/LandingPage/CardsSection";
import TabSection from "@/components/Pages/LandingPage/TabSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <CardsSection />
        <TabSection />
      </main>
    </>
  );
}
