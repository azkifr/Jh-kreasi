'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2, MapPin, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function HeroSection() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-10 overflow-hidden">
      {/* Subtle Hero Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center z-10 w-full max-w-5xl mx-auto flex-grow justify-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-block border border-gold/40 text-gold text-xs uppercase tracking-[0.3em] px-4 py-1.5 rounded-full font-medium bg-forest/30 backdrop-blur-sm">
            EST. IN JAKARTA • TREASURY TOWER SCBD
          </span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-heading text-6xl md:text-7xl lg:text-8xl text-ivory font-light leading-tight mb-6 whitespace-pre-line drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          {"Elevating Brands\nin Prime Spaces"}
        </motion.h1>

        <motion.p variants={itemVariants} className="text-sand text-lg md:text-xl max-w-2xl font-body mb-12 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Partner strategis brand luxury untuk menembus ruang ritel prestisius di Indonesia. Dari inisiasi landlord dan turnkey fit-out, hingga grand opening dan aktivasi musiman berdaya cipta tinggi.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto">
          <a
            href="https://wa.me/6281908082775?text=Halo%20JH%20Kreasi%2C%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20ritel..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-forest font-semibold px-8 py-4 rounded-sm hover:bg-[#E5C158] transition text-center"
          >
            Consult Your Space
          </a>
          <button
            onClick={scrollToServices}
            className="border border-ivory/30 text-ivory px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition text-center bg-forest/20 backdrop-blur-sm"
          >
            Explore Core Services
          </button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-auto w-full border-t border-ivory/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <Building2 className="text-gold w-5 h-5" />
              <span className="text-sand/70 text-sm uppercase tracking-wider">Top-Tier Mall Access</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-ivory/20" />
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-gold w-5 h-5" />
              <span className="text-sand/70 text-sm uppercase tracking-wider">Turnkey End-to-End Execution</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-ivory/20" />
            <div className="flex items-center gap-3">
              <MapPin className="text-gold w-5 h-5" />
              <span className="text-sand/70 text-sm uppercase tracking-wider">SCBD Jakarta Headquarters</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="text-gold/50 w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
