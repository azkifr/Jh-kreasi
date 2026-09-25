'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';

const services = [
  'Landlord Initiation',
  'Project Fit Out',
  'Store Opening',
  'Brand Awareness & Activity',
  'Bespoke Events',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    services: [] as string[],
    targetMall: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    company: string;
    summary: string;
  } | null>(null);

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const summaryText = `*KONSULTASI PROYEK RITEL — JH KREASI*
----------------------------------------
• *Nama:* ${formData.name}
• *Brand / Perusahaan:* ${formData.company}
• *Email:* ${formData.email}
• *No. WhatsApp / Telp:* ${formData.phone || '-'}
• *Layanan:* ${formData.services.length > 0 ? formData.services.join(', ') : 'Konsultasi Ritel Menyeluruh'}
• *Target Mall / Timeline:* ${formData.targetMall || '-'}

• *Pesan / Visi Proyek:*
"${formData.message}"
----------------------------------------
Terkirim via Website Resmi JH Kreasi`;

    // Attempt optional Web3Forms API submission in the background if configured
    const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (apiKey && apiKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      try {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            access_key: apiKey,
            subject: `New Project Inquiry: ${formData.company} (${formData.name})`,
            from_name: formData.name,
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            services_of_interest: formData.services.join(', '),
            target_mall_timeline: formData.targetMall,
            message: formData.message,
          }),
        });
      } catch {
        // Fallback gracefully without interrupting user
      }
    }

    // Always transition to success state
    setSubmittedData({
      name: formData.name,
      company: formData.company,
      summary: summaryText,
    });
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Automatically open WhatsApp in new tab for instant direct conversation
    const waUrl = `https://wa.me/6281908082775?text=${encodeURIComponent(summaryText)}`;
    if (typeof window !== 'undefined') {
      window.open(waUrl, '_blank');
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.p
            variants={itemVariants}
            className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-4"
          >
            GET IN TOUCH
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="font-heading text-4xl md:text-5xl text-ivory font-light mb-4"
          >
            Thank You Very Much
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sand text-lg mb-16"
          >
            Looking forward to working with you.
          </motion.p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Cards */}
            <motion.div
              variants={containerVariants}
              className="lg:col-span-2 space-y-6"
            >
              {/* Email Card */}
              <motion.a
                variants={itemVariants}
                href="mailto:jh.kreasi@gmail.com?subject=Project%20Inquiry%20-%20JH%20Kreasi"
                className="glass-card glass-card-hover block rounded-xl p-6 group transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-ivory font-medium mb-1">Email Address</p>
                    <p className="text-sand text-sm">jh.kreasi@gmail.com</p>
                  </div>
                </div>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a
                variants={itemVariants}
                href="https://wa.me/6281908082775?text=Halo%20JH%20Kreasi%2C%20saya%20tertarik%20berdiskusi%20mengenai%20proyek%20ritel..."
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover block rounded-xl p-6 group transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <Phone className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-ivory font-medium mb-1">WhatsApp</p>
                    <p className="text-sand text-sm">+62 819 0808 2775</p>
                    <p className="text-gold/60 text-xs mt-1">Chat with us →</p>
                  </div>
                </div>
              </motion.a>

              {/* Office Address Card */}
              <motion.div
                variants={itemVariants}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-ivory font-medium mb-1">Office Address</p>
                    <p className="text-sand text-sm leading-relaxed">
                      Treasury Tower 31st Floor,
                      <br />
                      District 8, SCBD,
                      <br />
                      Jakarta Selatan
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map Embed */}
              <motion.div
                variants={itemVariants}
                className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3] relative group bg-forest"
              >
                {/* Embedded Interactive Map (OpenStreetMap with Architectural Dark Filter) */}
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=106.8040%2C-6.2285%2C106.8150%2C-6.2200&layer=mapnik&marker=-6.2248%2C106.8095"
                  className="absolute inset-0 w-full h-full"
                  style={{
                    border: 0,
                    filter: 'invert(92%) hue-rotate(180deg) brightness(92%) contrast(92%)',
                  }}
                  loading="lazy"
                  title="JH Kreasi Office - Treasury Tower SCBD"
                />

                {/* Top Location Badge */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest/90 backdrop-blur-md border border-white/15 text-xs text-ivory shadow-lg">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
                  </span>
                  <span className="font-medium tracking-wide">Treasury Tower • SCBD</span>
                </div>

                {/* Bottom Navigation Links */}
                <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
                  <a
                    href="https://maps.google.com/?q=Treasury+Tower+District+8+SCBD+Jakarta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest/90 backdrop-blur-md border border-white/15 text-xs text-ivory hover:text-gold hover:border-gold/40 transition-colors shadow-lg"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </a>
                  <a
                    href="https://waze.com/ul?q=Treasury+Tower+SCBD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-forest/90 backdrop-blur-md border border-white/15 text-xs text-ivory hover:text-gold hover:border-gold/40 transition-colors shadow-lg"
                  >
                    <span>Waze</span>
                    <ExternalLink className="w-3 h-3 text-gold" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Inquiry Form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              {isSubmitted && submittedData ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-8 md:p-12 text-center h-full flex flex-col items-center justify-center relative overflow-hidden"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-6 gold-glow">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <span className="text-gold uppercase tracking-[0.25em] text-xs font-semibold mb-2">
                    Permintaan Diterima
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl text-ivory mb-3">
                    Terima Kasih, {submittedData.name}
                  </h3>
                  <p className="text-sand text-sm md:text-base max-w-lg mb-8 leading-relaxed">
                    Detail proyek untuk <span className="text-gold font-medium">{submittedData.company}</span> telah siap. WhatsApp Principal telah kami buka otomatis untuk memulai diskusi langsung.
                  </p>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-8">
                    <a
                      href={`https://wa.me/6281908082775?text=${encodeURIComponent(submittedData.summary)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gold text-forest font-semibold px-6 py-3.5 rounded-lg hover:bg-gold-light transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-gold/20"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Buka WhatsApp Lagi</span>
                    </a>
                    <a
                      href={`mailto:jh.kreasi@gmail.com?subject=${encodeURIComponent(`Konsultasi Proyek: ${submittedData.company} - ${submittedData.name}`)}&body=${encodeURIComponent(submittedData.summary)}`}
                      className="flex-1 border border-white/20 text-ivory hover:border-gold hover:text-gold px-6 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 text-sm backdrop-blur-sm"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Kirim via Email</span>
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setSubmittedData(null);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        services: [],
                        targetMall: '',
                        message: '',
                      });
                    }}
                    className="text-sand/50 text-xs hover:text-gold transition-colors tracking-wider uppercase underline underline-offset-4"
                  >
                    ← Kirim permintaan konsultasi baru
                  </button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-8 md:p-10 space-y-6"
                >
                  <div>
                    <h3 className="font-heading text-2xl text-ivory mb-1">
                      Project Inquiry
                    </h3>
                    <p className="text-sand/60 text-sm">
                      Fill in the details below and we&apos;ll prepare a tailored proposal.
                    </p>
                  </div>

                  {/* Name & Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sand text-sm mb-2">
                        Full Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-sand/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sand text-sm mb-2">
                        Brand / Company <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-sand/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sand text-sm mb-2">
                        Email Address <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-sand/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sand text-sm mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-sand/30 focus:outline-none focus:border-gold/50 transition-colors"
                        placeholder="+62 xxx xxxx xxxx"
                      />
                    </div>
                  </div>

                  {/* Services Multi-select */}
                  <div>
                    <label className="block text-sand text-sm mb-3">
                      Services of Interest
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                            formData.services.includes(service)
                              ? 'bg-gold/20 border-gold text-gold border'
                              : 'bg-white/5 border-white/10 text-sand/70 border hover:border-white/20'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Target Mall */}
                  <div>
                    <label className="block text-sand text-sm mb-2">
                      Target Mall / Timeline
                      <span className="text-sand/40 ml-1">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.targetMall}
                      onChange={(e) =>
                        setFormData({ ...formData, targetMall: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-sand/30 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="e.g., Plaza Indonesia, Q1 2027"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sand text-sm mb-2">
                      Message / Project Vision <span className="text-gold">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-ivory text-sm placeholder:text-sand/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                      placeholder="Tell us about your brand and project vision..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold text-forest font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeDasharray="31.42"
                            strokeDashoffset="10"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Consultation Request
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
