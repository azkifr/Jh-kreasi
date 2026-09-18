'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="about" className="bg-forest py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          <motion.div variants={fadeUpVariant} className="mb-6">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">
              HELLO FROM JH KREASI
            </span>
          </motion.div>

          <motion.h2 variants={fadeUpVariant} className="font-heading text-4xl md:text-5xl text-ivory font-light leading-snug mb-12 max-w-4xl">
            We transform vision into exceptional commercial reality.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <motion.div variants={fadeUpVariant}>
              <p className="text-sand text-lg leading-relaxed font-body">
                JH Kreasi stands as your strategic consultancy and executive partner in Indonesia's luxury retail landscape. We go beyond conventional vendor services by building direct bridges to premium mall management and collaborating with the nation's finest contractors. Our holistic approach ensures that from the initial spatial strategy to the final exquisite detail, your brand's physical presence is elevated, authentic, and impeccably executed.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="flex flex-col gap-8">
              <div className="pl-6 border-l-2 border-gold">
                <h3 className="text-ivory font-medium text-lg mb-1 font-heading">Direct Mall Management Access</h3>
                <p className="text-sand/60 text-sm font-body">Accelerated negotiations and prime placement within top-tier locations.</p>
              </div>
              
              <div className="pl-6 border-l-2 border-ivory/10">
                <h3 className="text-ivory font-medium text-lg mb-1 font-heading">End-to-End Project Execution</h3>
                <p className="text-sand/60 text-sm font-body">Seamless delivery from concept design to turnkey fit-out and launch.</p>
              </div>

              <div className="pl-6 border-l-2 border-ivory/10">
                <h3 className="text-ivory font-medium text-lg mb-1 font-heading">Luxury-Grade Craftsmanship</h3>
                <p className="text-sand/60 text-sm font-body">Partnerships with elite contractors ensuring impeccable material finish.</p>
              </div>

              <div className="pl-6 border-l-2 border-ivory/10">
                <h3 className="text-ivory font-medium text-lg mb-1 font-heading">Strategic SCBD Headquarters</h3>
                <p className="text-sand/60 text-sm font-body">Positioned in the heart of Jakarta's business district for rapid synergy.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
