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
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-forest overflow-hidden text-ivory">
        {/* ============================================================ */}
        {/* CONTINUOUS UNIFIED ARCHITECTURAL MOTIF BACKDROP              */}
        {/* Spans across the entire page, seamlessly connecting sections */}
        {/* ============================================================ */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src={getAssetPath('/images/architectural_motif_bg.jpg')}
            alt="JH Kreasi Continuous Architectural Motif"
            fill
            priority
            className="object-cover object-top opacity-55 filter contrast-110 brightness-90 scale-100 transition-all duration-700"
          />
          {/* Refined Ambient Dark Tint: Eliminates glare while preserving full motif visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/75" />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* ============================================================ */}
        {/* CONTINUOUS CONNECTING ARCHITECTURAL FLOW CONTOURS             */}
        {/* Sweeping lines that physically flow between all sections    */}
        {/* ============================================================ */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
          <svg
            className="w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 6000"
            fill="none"
          >
            {/* Left serpentine gold contour */}
            <path
              d="M 180 0 Q 380 900 120 1800 T 320 3200 T 140 4600 T 220 6000"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeDasharray="5 7"
              opacity="0.5"
            />
            {/* Right sweeping gold contour */}
            <path
              d="M 1260 0 Q 1060 1100 1320 2300 T 1120 3900 T 1240 5300 T 1180 6000"
              stroke="#D4AF37"
              strokeWidth="1.2"
              strokeDasharray="5 7"
              opacity="0.5"
            />
            {/* Soft architectural ivory guideline */}
            <path
              d="M 720 0 C 690 1400 750 2600 720 3800 C 690 5000 740 5500 720 6000"
              stroke="#F9F9F6"
              strokeWidth="0.8"
              opacity="0.1"
            />
          </svg>
        </div>

        {/* ============================================================ */}
        {/* PAGE SECTIONS (Rendered on top of the continuous background)  */}
        {/* ============================================================ */}
        <div className="relative z-10">
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
        </div>
      </div>
    </SmoothScroll>
  );
}
