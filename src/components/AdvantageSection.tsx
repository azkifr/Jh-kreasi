'use client';

import { motion } from 'framer-motion';
import { Building2, Briefcase, Gem, MapPin } from 'lucide-react';

const advantages = [
  {
    icon: Building2,
    title: 'Prime Mall Network',
    description: 'Akses dan pemahaman mendalam terhadap regulasi mall grade-A di Jakarta. Jaringan langsung ke manajemen Plaza Indonesia, Pacific Place, Senayan City, dan mall prestisius lainnya.'
  },
  {
    icon: Briefcase,
    title: 'Turnkey Simplicity',
    description: 'Klien cukup membawa visi produk; JH Kreasi menangani birokrasi, konstruksi, hingga selebrasi pembukaan toko. Zero headache, maximum impact.'
  },
  {
    icon: Gem,
    title: 'Luxury Standard Craftsmanship',
    description: 'Standar kualitas material dan eksekusi berorientasi pada detail estetika tinggi. Setiap elemen dirancang untuk memancarkan kesan premium dan refined.'
  },
  {
    icon: MapPin,
    title: 'Strategic SCBD Location',
    description: 'Beroperasi dari Treasury Tower lantai 31, di pusat District 8 SCBD — distrik bisnis paling prestisius di Jakarta.'
  }
];

export default function AdvantageSection() {
  return (
    <section id="advantage" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold block mb-4 font-body">
              THE JH KREASI ADVANTAGE
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-ivory font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Why Brands Trust Us
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 border-l-2 border-gold relative overflow-hidden group hover:glass-card-hover transition-all duration-300"
              >
                <div className="relative z-10">
                  <Icon className="text-gold w-8 h-8 mb-6" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl text-ivory mb-4">
                    {adv.title}
                  </h3>
                  <p className="text-sand text-base leading-relaxed font-body">
                    {adv.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
