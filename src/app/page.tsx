import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantageSection from '@/components/AdvantageSection';
import PortfolioSection from '@/components/PortfolioSection';
import TimelineSection from '@/components/TimelineSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AdvantageSection />
        <PortfolioSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </SmoothScroll>
  );
}
