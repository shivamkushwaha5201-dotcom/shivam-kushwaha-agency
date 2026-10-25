import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../data/portfolioData';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';
import brandLogoWebp from '../assets/images/brand_logo_opt.webp';
import { ThemeToggle } from './ThemeToggle';
import { scrollCoordinator } from '../lib/scrollCoordinator';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenBooking: () => void;
  onNavigateHome?: () => void;
  isLegalPage?: boolean;
  isServicePage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = React.memo(({ 
  onOpenBooking,
  onNavigateHome,
  isLegalPage = false,
  isServicePage = false 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let cachedOffsets: { id: string; top: number; bottom: number }[] = [];
    let lastScrolledState = false;
    let lastActiveSection = 'home';

    const updateOffsets = () => {
      const sections = ['home', 'services', 'testimonials', 'about', 'faq', 'contact'];
      cachedOffsets = sections
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const top = el.offsetTop;
          return { id, top, bottom: top + el.offsetHeight };
        })
        .filter((item): item is { id: string; top: number; bottom: number } => item !== null);
    };

    return scrollCoordinator.subscribe(
      (m) => {
        const scrollY = m.scrollY;
        const isScrolled = scrollY > 20;
        if (isScrolled !== lastScrolledState) {
          lastScrolledState = isScrolled;
          setScrolled(isScrolled);
        }

        const scrollPosition = scrollY + 140;
        for (let i = 0; i < cachedOffsets.length; i++) {
          const s = cachedOffsets[i];
          if (scrollPosition >= s.top && scrollPosition < s.bottom) {
            if (s.id !== lastActiveSection) {
              lastActiveSection = s.id;
              setActiveSection(s.id);
            }
            break;
          }
        }
        return false;
      },
      () => {
        updateOffsets();
      }
    );
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Results', href: '#testimonials', id: 'testimonials' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
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
      className="fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`flex items-center justify-between px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E9E5] shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
              : 'bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E5E9E5] shadow-[0_4px_20px_rgb(0,0,0,0.03)]'
          }`}
        >
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={handleLogoClick}
            id="nav-logo"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E5E9E5] p-0.5 bg-[#FFFFFF] group-hover:border-[#459B45] transition-colors flex items-center justify-center shrink-0 shadow-xs">
              <picture className="w-full h-full block">
                <source srcSet={brandLogoWebp} type="image/webp" />
                <img
                  src={brandLogo}
                  alt="AxentAI Labs"
                  className="w-full h-full object-cover rounded-full"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
              </picture>
            </div>

            <div className="flex flex-col">
              <span className="hero-brand-contrast font-extrabold text-xs sm:text-[13px] tracking-[0.14em] text-[#111111] group-hover:text-[#246B32] transition-colors uppercase font-display [text-shadow:0_1px_2px_rgba(255,255,255,0.95),0_0_12px_rgba(255,255,255,0.85)]">
                AxentAI Labs
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = !isLegalPage && !isServicePage && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  id={`nav-link-${link.id}`}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                    isActive
                      ? 'text-[#246B32] font-semibold'
                      : 'text-[#444444] hover:text-[#111111] hover:bg-[#F7F9F7]'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-[#EAF7EA] border border-[#CDECCF] -z-10"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              id="nav-cta-button"
              size="sm"
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-[#246B32] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-xs font-semibold tracking-wide px-5 py-2.5 rounded-full border border-[#459B45]/30 shadow-[0_4px_14px_rgba(36,107,50,0.28)] hover:shadow-[0_6px_20px_rgba(36,107,50,0.36)] hover:-translate-y-0.5 active:translate-y-0 group transition-all duration-300 cursor-pointer"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#111111] hover:text-[#459B45] hover:bg-[#F7F9F7] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 px-4 max-w-7xl mx-auto"
          >
            <div className="bg-[#FFFFFF]/98 backdrop-blur-md border border-[#E5E9E5] rounded-2xl shadow-2xl shadow-black/10 p-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.href)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-[#555B55] hover:text-[#111111] hover:bg-[#F7F9F7] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 mt-2 border-t border-[#E5E9E5] flex flex-col gap-2">
                  <Button
                    className="w-full justify-center bg-[#459B45] hover:bg-[#246B32] text-white font-semibold py-2.5 rounded-xl text-xs"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                  >
                    <span>Book a Strategy Call</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                  <a
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl border border-[#E5E9E5] bg-[#F7F9F7] text-[#111111] text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#E5F5E5] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});
