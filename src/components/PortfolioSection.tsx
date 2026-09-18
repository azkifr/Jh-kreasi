'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const portfolioItems = [
  {
    title: 'Flagship Boutique Fit-Out',
    location: 'Plaza Indonesia, Jakarta',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    tag: 'Turnkey Fit-Out',
  },
  {
    title: 'Luxury Store Grand Opening',
    location: 'Pacific Place Mall, SCBD',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tag: 'VIP Launch Event',
  },
  {
    title: 'Atrium Spatial Pop-Up',
    location: 'Senayan City, Jakarta',
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=800&q=80',
    tag: 'Pop-Up Installation',
  },
  {
    title: 'Festive Seasonal Activation',
    location: 'Grand Indonesia, Jakarta',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
    tag: 'Brand Activation',
  },
  {
    title: 'Private VIP Salon & Lounge',
    location: 'District 8, SCBD',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    tag: 'Bespoke Experience',
  },
  {
    title: 'Retail Architectural Concept',
    location: 'Pondok Indah Mall 3',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tag: 'Interior Architecture',
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative border-t border-white/5">
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
              A glimpse into our portfolio of luxury retail transformations and prestigious prime space executions.
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
              className="aspect-[4/3] rounded-xl overflow-hidden relative group border border-white/10 bg-forest/40"
            >
              {/* Actual Project Photo */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
              />

              {/* Gradient Vignette Overlay for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500" />
              
              {/* Content Badge & Title */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block bg-gold/20 backdrop-blur-md border border-gold/40 text-gold text-[0.65rem] font-medium tracking-widest uppercase px-2.5 py-1 rounded-full mb-3">
                    {item.tag}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl text-ivory mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sand/70 text-xs font-body tracking-wider">
                    {item.location}
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
          <p className="text-sand mb-6 font-body text-base">Interested in seeing our complete portfolio deck?</p>
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
