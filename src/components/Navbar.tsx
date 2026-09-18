'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Advantage', href: '#advantage' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.href.replace('#', ''));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.getElementById(href.replace('#', ''));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'h-[64px] sm:h-[80px] bg-forest/80 backdrop-blur-md border-b border-gold/20'
            : 'h-[80px] sm:h-[100px] bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="hidden sm:block">
            <Logo variant="full" size={isScrolled ? 'sm' : 'md'} />
          </div>
          <div className="sm:hidden">
            <Logo variant="emblem" size="sm" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`text-sm font-body tracking-wider transition-colors relative py-2 ${
                    activeSection === link.href.replace('#', '') ? 'text-gold' : 'text-ivory hover:text-gold'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                    />
                  )}
                </a>
              ))}
            </div>
            
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="px-6 py-2 border border-gold text-gold font-body text-sm tracking-widest hover:bg-gold hover:text-forest transition-colors duration-300"
            >
              START A PROJECT
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-ivory hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest/95 backdrop-blur-lg flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                className="text-ivory hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`text-2xl font-heading tracking-widest ${
                    activeSection === link.href.replace('#', '') ? 'text-gold' : 'text-ivory'
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => scrollTo(e, '#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.1 }}
                className="mt-8 px-8 py-3 border border-gold text-gold font-body tracking-widest text-sm"
              >
                START A PROJECT
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
