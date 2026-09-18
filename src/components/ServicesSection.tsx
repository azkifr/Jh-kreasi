'use client'

import React from 'react'
import { motion } from 'framer-motion'

const servicesData = [
  {
    id: '01',
    title: 'Landlord Initiation',
    description: 'Membuka akses dan memperkenalkan brand Anda langsung kepada manajemen/pemilik mall papan atas untuk mengamankan lokasi ritel paling strategis.',
    deliverables: ['Mall Feasibility Study', 'Landlord Pitch Deck', 'Lease Negotiation', 'Prime Spot Securing'],
    className: 'md:col-span-1',
  },
  {
    id: '02',
    title: 'Project Fit Out',
    description: 'Perencanaan dan eksekusi konstruksi toko maupun booth secara menyeluruh (turnkey), dengan koordinasi mulus bersama mall management, kontraktor, dan vendor material.',
    deliverables: ['Architecture Coordination', 'MEP Compliance', '3D Visualization', 'Turnkey Handover'],
    className: 'md:col-span-1',
  },
  {
    id: '03',
    title: 'Store Opening',
    description: 'Mengamplifikasi momen peluncuran toko melalui perancangan bespoke opening events, pelibatan media dan KOL terarah, serta perangkat promosi terpadu.',
    deliverables: ['Grand Opening Concept', 'VIP & Media Handling', 'PR Coverage', 'Launch Collaterals'],
    className: 'md:col-span-2',
  },
  {
    id: '04',
    title: 'Brand Awareness & Activity',
    description: 'Membangun rekognisi merek yang berkelanjutan lewat rangkaian program dan aktivasi kreatif yang disesuaikan untuk setiap musim.',
    deliverables: ['Pop-up Installations', 'Festive Activations', 'Brand Engagement Campaigns'],
    className: 'md:col-span-1',
  },
  {
    id: '05',
    title: 'Bespoke Events',
    description: 'Mengkurasi acara eksklusif yang menyatu dengan DNA brand untuk memaksimalkan customer engagement dan mendorong penjualan langsung.',
    deliverables: ['VIP Client Dinners', 'Trunk Shows', 'Product Unveiling', 'Brand Anniversary Galas'],
    className: 'md:col-span-1',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-sage-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4"
          >
            What We Do
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl text-ivory font-light mb-6"
          >
            Core Services
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sand text-lg max-w-2xl font-body"
          >
            Five strategic pillars that define our comprehensive approach to luxury retail success.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className={`glass-card glass-card-hover rounded-2xl p-8 relative overflow-hidden flex flex-col ${service.className}`}
            >
              <span className="text-gradient-gold font-heading text-5xl md:text-6xl font-light opacity-40 absolute top-6 right-6 select-none pointer-events-none">
                {service.id}
              </span>
              
              <h3 className="font-heading text-2xl md:text-3xl text-ivory mb-4 pr-16 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-sand text-base leading-relaxed mb-6 font-body flex-grow relative z-10">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {service.deliverables.map((item, i) => (
                  <span 
                    key={i} 
                    className="bg-white/5 text-sand/80 text-xs px-3 py-1 rounded-full border border-white/10 font-body backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
