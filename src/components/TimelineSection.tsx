'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { getAssetPath } from '@/lib/utils';

const timelineData = [
  { number: '01', title: 'Location Approval', description: 'Pemilihan lokasi ritel ideal, analisis traffic dan visibilitas gerai, serta pengajuan persetujuan manajemen mall.', illustration: '/illustrations/01_location_approval.svg' },
  { number: '02', title: 'LOI Agreement', description: 'Penandatanganan Letter of Intent (LOI) dan penyusunan klausul syarat & ketentuan sewa.', illustration: '/illustrations/02_loi_agreement.svg' },
  { number: '03', title: 'Landlord Handover', description: 'Serah terima kunci dan penguasaan fisik ruang ritel dari manajemen mall.', illustration: '/illustrations/03_landlord_handover.svg' },
  { number: '04', title: 'Fit Out Project', description: 'Desain interior toko, konstruksi sipil, instalasi MEP, pembuatan mebel kustom, dan pemasangan fixtures.', illustration: '/illustrations/04_fit_out_project.svg' },
  { number: '05', title: 'Operational Preparation', description: 'Rekrutmen dan pelatihan staf, finalisasi menu/katalog produk, setup POS & sistem inventaris.', illustration: '/illustrations/05_operational_preparation.svg' },
  { number: '06', title: 'Contractor Hand Over', description: 'Penyelesaian akhir konstruksi, inspeksi bersama, dan serah terima unit toko yang telah selesai.', illustration: '/illustrations/06_contractor_handover.svg' },
  { number: '07', title: 'Opening Day', description: 'Grand launching, pemotongan pita, penyambutan pelanggan perdana, dan selebrasi pembukaan gerai.', illustration: '/illustrations/07_opening_day.svg' },
];

/* ── Individual Stage Card (hooks at top level) ──────────────── */
function TimelineStage({
  stage,
  index,
  smoothProgress,
}: {
  stage: (typeof timelineData)[number];
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const total = timelineData.length;
  const start = index / total;
  const mid = (index + 0.5) / total;
  const end = (index + 1) / total;

  const activeProgress = useTransform(smoothProgress, [start, mid], [0, 1]);
  const opacity = useTransform(activeProgress, [0, 1], [0.35, 1]);
  const yOffset = useTransform(activeProgress, [0, 1], [20, 0]);
  const nodeScale = useTransform(activeProgress, [0, 0.4, 0.7, 1], [1, 1.15, 1.08, 1]);
  const glowOpacity = useTransform(activeProgress, [0, 1], [0, 1]);
  const nodeBg = useTransform(
    activeProgress,
    [0, 0.5],
    ['rgba(28, 37, 32, 1)', 'rgba(212, 175, 55, 1)']
  );

  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-start md:items-center w-full">
      {/* ── Desktop Center Node ── */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-20">
        <motion.div
          className="w-5 h-5 rounded-full border-2 border-ivory/40 flex items-center justify-center"
          style={{ scale: nodeScale }}
        >
          <motion.div
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: nodeBg }}
          />
        </motion.div>
      </div>

      {/* ── Mobile Left Node ── */}
      <div className="md:hidden absolute left-[28px] top-8 -translate-x-1/2 z-20 flex">
        <motion.div
          className="w-4 h-4 rounded-full border-2 border-ivory/40 flex items-center justify-center"
          style={{ scale: nodeScale }}
        >
          <motion.div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: nodeBg }}
          />
        </motion.div>
      </div>

      {/* ── Desktop Layout: Alternating ── */}
      <div className={`hidden md:flex w-full items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Card Side */}
        <div className="w-[44%]">
          <motion.div
            style={{ opacity }}
            className="relative p-8 rounded-2xl glass-card"
          >
            <motion.div
              className="absolute inset-0 rounded-2xl border border-gold/0 pointer-events-none"
              style={{
                opacity: glowOpacity,
                borderColor: 'rgba(212, 175, 55, 0.35)',
                boxShadow: '0 0 25px rgba(212, 175, 55, 0.08)',
              }}
            />
            <div className={isEven ? 'text-right' : 'text-left'}>
              <span className="text-gradient-gold font-heading text-5xl font-light opacity-60">
                {stage.number}
              </span>
              <h3 className="font-heading text-2xl text-ivory mt-2 mb-3">{stage.title}</h3>
              <p className="text-sand text-base leading-relaxed">{stage.description}</p>
            </div>
          </motion.div>
        </div>

        {/* Center Spacer */}
        <div className="w-[12%]" />

        {/* Illustration Side */}
        <div className="w-[44%]">
          <motion.div
            style={{ opacity, y: yOffset }}
            className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}
          >
            <div className="w-[100px] h-[100px] relative">
              <Image
                src={getAssetPath(stage.illustration)}
                alt={stage.title}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Mobile Layout ── */}
      <div className="md:hidden flex w-full pl-16">
        <motion.div style={{ opacity }} className="w-full p-6 rounded-2xl glass-card relative">
          <motion.div
            className="absolute inset-0 rounded-2xl border border-gold/0 pointer-events-none"
            style={{
              opacity: glowOpacity,
              borderColor: 'rgba(212, 175, 55, 0.35)',
            }}
          />
          <div className="flex justify-between items-start mb-3">
            <span className="text-gradient-gold font-heading text-4xl font-light opacity-70">
              {stage.number}
            </span>
            <motion.div style={{ y: yOffset }} className="w-14 h-14 relative shrink-0">
              <Image
                src={getAssetPath(stage.illustration)}
                alt={stage.title}
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
          <h3 className="font-heading text-xl text-ivory mb-2">{stage.title}</h3>
          <p className="text-sand text-sm leading-relaxed">{stage.description}</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Milestone Tracker Dot ──────────────────────────────────── */
function TrackerDot({
  stage,
  index,
  smoothProgress,
}: {
  stage: (typeof timelineData)[number];
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const total = timelineData.length;
  const peak = (index + 0.5) / total;
  const start = Math.max(0, peak - 0.08);
  const end = Math.min(1, peak + 0.08);

  const isActive = useTransform(smoothProgress, [start, peak, end], [0, 1, 0]);
  const dotScale = useTransform(isActive, [0, 1], [1, 1.8]);
  const dotBg = useTransform(
    isActive,
    [0, 1],
    ['rgba(255,255,255,0.2)', '#D4AF37']
  );

  return (
    <div className="flex items-center justify-end gap-3">
      <motion.span
        className="text-xs font-heading text-gold whitespace-nowrap"
        style={{ opacity: isActive }}
      >
        {stage.title}
      </motion.span>
      <motion.div
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: dotBg, scale: dotScale }}
      />
    </div>
  );
}

/* ── Main Timeline Section ──────────────────────────────────── */
export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const progressHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);
  const trackerOpacity = useTransform(smoothProgress, [0.05, 0.12, 0.85, 0.95], [0, 1, 1, 0]);

  return (
    <section id="timeline" className="relative py-24 md:py-32 overflow-hidden border-t border-white/5" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm block mb-4">
            THE JOURNEY
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-ivory font-light mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
            Retail Project Timeline
          </h2>
          <p className="text-sand text-lg max-w-2xl mx-auto mb-2 drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
            7-stage end-to-end execution — from location approval to grand opening.
          </p>
          <p className="text-sand/70 text-sm italic drop-shadow-[0_1px_6px_rgba(0,0,0,0.85)]">
            Timeline tailored to project scale &amp; mall specifications
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* ── Desktop Center Line ── */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            <div className="w-full h-full bg-white/10" />
            <motion.div
              className="w-full bg-gold absolute top-0 left-0 origin-top"
              style={{ height: progressHeight }}
            />
          </div>

          {/* ── Mobile Left Spine ── */}
          <div className="md:hidden absolute left-[28px] top-0 bottom-0 w-[2px]">
            <div className="w-full h-full bg-white/10" />
            <motion.div
              className="w-full bg-gold absolute top-0 left-0 origin-top"
              style={{ height: progressHeight }}
            />
          </div>

          {/* ── Stages ── */}
          <div className="relative flex flex-col gap-16 md:gap-28">
            {timelineData.map((stage, index) => (
              <TimelineStage
                key={stage.number}
                stage={stage}
                index={index}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Side Milestone Tracker (Desktop) ── */}
      <motion.div
        className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-30 pointer-events-none"
        style={{ opacity: trackerOpacity }}
      >
        {timelineData.map((stage, index) => (
          <TrackerDot
            key={`tracker-${stage.number}`}
            stage={stage}
            index={index}
            smoothProgress={smoothProgress}
          />
        ))}
      </motion.div>
    </section>
  );
}
