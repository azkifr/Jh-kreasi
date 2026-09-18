'use client';

import { motion } from 'framer-motion';

const portfolioItems = [
  { category: 'Flagship Store Fit-Out', bg: 'bg-sage/40' },
  { category: 'Grand Opening Event', bg: 'bg-sage/30' },
  { category: 'Pop-Up Installation', bg: 'bg-sage/20' },
  { category: 'Seasonal Activation', bg: 'bg-forest' },
  { category: 'VIP Brand Experience', bg: 'bg-sage/30' },
  { category: 'Retail Space Design', bg: 'bg-sage/40' },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-forest relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold block mb-4 font-body">
              OUR WORK
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-ivory font-light mb-6">
              Curated Showcase
            </h2>
            <p className="text-sand text-lg max-w-2xl mx-auto font-body">
              A glimpse into our portfolio of luxury retail transformations.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`aspect-[4/3] rounded-xl overflow-hidden relative group border border-white/5 ${item.bg}`}
            >
              {/* Decorative SVG pattern / Shape */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="60" cy="60" r="59" stroke="#D4AF37" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="60" cy="60" r="40" stroke="#D4AF37" strokeWidth="1" />
                  <path d="M60 0L60 120M0 60L120 60" stroke="#D4AF37" strokeWidth="1" strokeDasharray="2 4" />
                </svg>
              </div>
              
              {/* Gold gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/40 via-forest/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-heading text-2xl text-ivory mb-2">
                    {item.category}
                  </h3>
                  <p className="text-gold text-xs tracking-[0.2em] uppercase font-body">
                    Coming Soon
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-sand mb-6 font-body text-base">Interested in seeing more?</p>
          <a
            href="https://wa.me/6281908082775?text=Halo%20JH%20Kreasi%2C%20saya%20ingin%20melihat%20portfolio%20lengkap%20proyek%20Anda..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-8 py-4 rounded-full hover:bg-gold hover:text-forest transition-colors duration-300 font-body tracking-wider text-sm uppercase"
          >
            Request Full Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
}
