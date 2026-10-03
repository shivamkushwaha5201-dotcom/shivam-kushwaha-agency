import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../data/portfolioData';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenBooking: () => void;
  onNavigateHome?: () => void;
  isLegalPage?: boolean;
  isServicePage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenBooking,
  onNavigateHome,
  isLegalPage = false,
  isServicePage = false 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    let cachedOffsets: { id: string; top: number; bottom: number }[] = [];

    const updateOffsets = () => {
      const sections = ['home', 'services', 'how-we-work', 'case-studies', 'about', 'contact'];
      cachedOffsets = sections
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.offsetTop;
          return { id, top, bottom: top + el.offsetHeight };
        })
        .filter((item): item is { id: string; top: number; bottom: number } => item !== null);
    };

    updateOffsets();
    window.addEventListener('resize', updateOffsets, { passive: true });

    let lastScrolledState = false;
    let lastActiveSection = 'home';

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const isScrolled = scrollY > 20;
          if (isScrolled !== lastScrolledState) {
            lastScrolledState = isScrolled;
            setScrolled(isScrolled);
          }

          const scrollPosition = scrollY + 140;
          for (const s of cachedOffsets) {
            if (scrollPosition >= s.top && scrollPosition < s.bottom) {
              if (s.id !== lastActiveSection) {
                lastActiveSection = s.id;
                setActiveSection(s.id);
              }
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateOffsets);
    };
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Process', href: '#how-we-work', id: 'how-we-work' },
    { name: 'Case Studies', href: '#case-studies', id: 'case-studies' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if ((isLegalPage || isServicePage) && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        const targetId = href.replace('#', '');
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#02040A]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={handleLogoClick}
            id="nav-logo"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden border border-white/15 p-0.5 bg-[#050B14] group-hover:border-[#3B82F6] transition-colors flex items-center justify-center shrink-0">
              <img
                src={brandLogo}
                alt="AxentAI Labs"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-xs tracking-wider text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors uppercase font-display">
                AxentAI Labs
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !isLegalPage && !isServicePage && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  id={`nav-link-${link.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Controls */}
          <div className="flex items-center gap-2">
            <Button
              id="nav-book-btn"
              size="sm"
              onClick={onOpenBooking}
              className="text-xs bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold tracking-wider uppercase rounded-full px-4 sm:px-5 py-2 shadow-md shadow-blue-500/20 cursor-pointer transition-all"
            >
              <span>BOOK A STRATEGY CALL</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 hidden sm:inline" />
            </Button>

            <ThemeToggle className="ml-1" />

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/5 border border-slate-700/60 ml-1"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-[#0B0C10]/95 backdrop-blur-xl border border-[#1E2230] rounded-2xl shadow-2xl p-4">
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.href)}
                    className="px-3.5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-3 mt-2 border-t border-[#1E2230] flex flex-col gap-2">
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-xs font-semibold py-2"
                  >
                    <span>Book a Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
