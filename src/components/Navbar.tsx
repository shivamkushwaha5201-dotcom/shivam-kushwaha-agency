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
      className="fixed top-0 left-0 right-0 z-40 py-3.5 sm:py-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2 rounded-full transition-colors duration-300 ${
            scrolled
              ? 'bg-[#02050B]/92 backdrop-blur-md border border-white/15 shadow-2xl shadow-black/90'
              : 'bg-[#02050B]/55 backdrop-blur-sm border border-white/5'
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
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
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

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-2.5">
            <ThemeToggle />

            <Button
              id="nav-cta-button"
              size="sm"
              onClick={onOpenBooking}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold tracking-wide px-5 py-2 rounded-full shadow-lg shadow-blue-500/20 group transition-colors cursor-pointer"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-slate-300 hover:text-white hover:bg-[#151822] transition-colors"
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
            <div className="bg-[#0B0C10]/95 backdrop-blur-md border border-[#1E2230] rounded-2xl shadow-2xl p-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.href)}
                    className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-[#151824] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 mt-2 border-t border-[#1E2230] flex flex-col gap-2">
                  <Button
                    className="w-full justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-2.5 rounded-xl text-xs"
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
                    className="w-full py-2.5 rounded-xl border border-[#222738] bg-[#141722] text-slate-200 text-xs font-medium flex items-center justify-center gap-2 hover:bg-[#1A1E2D] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
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
