'use client';

import React from 'react';

export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-forest/80 backdrop-blur-md border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column: Logo & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="font-heading text-2xl text-ivory mb-4 tracking-widest uppercase block">
              JH Kreasi
            </a>
            <p className="text-sand/60 text-sm font-body max-w-xs leading-relaxed">
              Studio • Brand Services • Established in Jakarta.
            </p>
          </div>

          {/* Center Column: Quick Links */}
          <div className="flex flex-col items-center text-center">
            <nav className="flex flex-col gap-4">
              {['About', 'Services', 'Advantage', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => scrollTo(e, item.toLowerCase())}
                  className="text-sand/60 hover:text-gold text-sm font-body transition-colors duration-300 uppercase tracking-widest"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <div className="flex flex-col gap-3 text-sand/60 text-sm font-body">
              <a href="mailto:jh.kreasi@gmail.com" className="hover:text-gold transition-colors duration-300">
                jh.kreasi@gmail.com
              </a>
              <a href="tel:+6281908082775" className="hover:text-gold transition-colors duration-300">
                +62 819 0808 2775
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sand/40 text-xs font-body tracking-wider">
            © 2026 JH Kreasi Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-sand/40 text-xs hover:text-gold font-body transition-colors duration-300 tracking-wider">
              Privacy Policy
            </a>
            <a href="#" className="text-sand/40 text-xs hover:text-gold font-body transition-colors duration-300 tracking-wider">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
