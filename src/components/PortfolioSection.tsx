'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

const portfolioItems = [
  {
    image: '/portfolio/landlord_initiation.jpg',
    scopeTag: 'Landlord Initiation',
  },
  {
    image: '/portfolio/grand_launching.jpg',
    scopeTag: 'Grand Launching',
  },
  {
    image: '/portfolio/private_dinner.jpg',
    scopeTag: 'Private Dinner Event',
  },
  {
    image: '/portfolio/grand_opening.jpg',
    scopeTag: 'Grand Opening Event',
  },
  {
    image: '/portfolio/consultation_phase.jpg',
    scopeTag: 'Consultation Phase',
  },
  {
    image: '/portfolio/beauty_popup.jpg',
    scopeTag: 'Beauty Pop-Up',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold block mb-4 font-body">
              OUR WORK
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-ivory font-light mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              Curated Showcase
            </h2>
            <p className="text-sand text-base max-w-2xl mx-auto font-body drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
              Scope of Work — a glimpse into our luxury retail transformations and prestigious prime space executions.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="aspect-video rounded-xl overflow-hidden relative group border border-white/10 bg-[#0d1a10]"
            >
              {item.image ? (
                <>
                  <Image
                    src={getAssetPath(item.image)}
                    alt={item.scopeTag}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  {/* Subtle scope tag badge on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <span className="inline-block bg-gold/25 backdrop-blur-md border border-gold/50 text-gold text-[0.65rem] font-medium tracking-widest uppercase px-3 py-1 rounded-full">
                      {item.scopeTag}
                    </span>
                  </div>
                </>
              ) : (
                /* Placeholder card */
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6">
                  <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-gold/50"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </div>
                  <p className="text-sand/40 text-xs tracking-widest uppercase font-body text-center">
                    Coming Soon
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p className="text-sand mb-6 font-body text-base">
            Interested in seeing our complete portfolio deck?
          </p>
          <a
            href="https://wa.me/6281908082775?text=Halo%20JH%20Kreasi%2C%20saya%20ingin%20melihat%20portfolio%20lengkap%20proyek%20Anda..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-8 py-4 rounded-full hover:bg-gold hover:text-forest transition-colors duration-300 font-body tracking-wider text-sm uppercase"
          >
            Request Full Portfolio Deck
          </a>
        </motion.div>
      </div>
    </section>
  );
}
