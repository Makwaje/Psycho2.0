import CardsSection from '@/components/LandingPage/CardsSection';
import CtaSection from '@/components/LandingPage/CtaSection';
import FaqSection from '@/components/LandingPage/FaqSection';
import Free2Section from '@/components/LandingPage/Free2Section';
import FreeSection from '@/components/LandingPage/FreeSection';
import HeroSection from '@/components/LandingPage/HeroSection';
import HowSection from '@/components/LandingPage/HowSection';
import Navbar from '@/components/LandingPage/LandingPageNavbar';
import Footer from '@/components/ui/footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <HowSection />
      <CardsSection />
      <FreeSection />
      <Free2Section />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
