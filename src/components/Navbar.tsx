import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, Menu, X, Rocket, Calendar, Phone, MessageSquare, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CONTACT_INFO } from '../data/portfolioData';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';

interface NavbarProps {
  onOpenAudit: () => void;
  onOpenBooking: () => void;
  onNavigateHome?: () => void;
  isLegalPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenAudit, 
  onOpenBooking,
  onNavigateHome,
  isLegalPage = false 
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'case-studies', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About me', href: '#about', id: 'about' },
    { name: 'Portfolio', href: '#case-studies', id: 'case-studies' },
    { name: 'My Specialization', href: '#services', id: 'services' },
    { name: 'Testimonials', href: '#case-studies', id: 'testimonials' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (onNavigateHome) {
      e.preventDefault();
      onNavigateHome();
    }
  };

  const handleNavLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (isLegalPage && onNavigateHome) {
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
      className="fixed top-0 left-0 right-0 z-40 py-4 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-md border border-[#E5E5E1] shadow-lg shadow-black/5'
              : 'bg-white/80 backdrop-blur-sm border border-[#E5E5E1]/80 shadow-sm'
          }`}
        >
          {/* Brand Logo & Tag */}
          <a
            href="#home"
            onClick={handleLogoClick}
            id="nav-logo"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#2563EB]/40 p-0.5 bg-white shadow-sm group-hover:border-[#2563EB] group-hover:scale-105 transition-all flex items-center justify-center shrink-0">
              <img
                src={brandLogo}
                alt="AxentAI Labs Logo"
                className="w-full h-full object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-base tracking-tight text-[#1A1A1A] group-hover:text-[#2563EB] transition-colors">
                  AxentAI Labs
                </span>
                {isLegalPage && (
                  <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded-full">
                    Legal Policy
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium text-[#1A1A1A]/60 tracking-wider">
                By Shivam Kushwaha
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !isLegalPage && activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavLinkClick(link.href)}
                  id={`nav-link-${link.id}`}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'bg-[#1A1A1A] text-white'
                      : 'text-[#1A1A1A]/70 hover:text-[#2563EB] hover:bg-blue-50/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              id="nav-audit-btn"
              variant="outline"
              size="sm"
              onClick={onOpenAudit}
              className="text-xs text-[#1A1A1A] font-semibold border-[#E5E5E1] hover:border-[#2563EB] hover:text-[#2563EB] bg-white rounded-full px-4"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#2563EB]" />
              Launch Audit
            </Button>

            <Button
              id="nav-book-btn"
              size="sm"
              onClick={onOpenBooking}
              className="text-xs bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold rounded-full px-5 shadow-sm shadow-[#2563EB]/20"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#1A1A1A] hover:bg-slate-100 border border-[#E5E5E1]"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden max-w-7xl mx-auto px-4 mt-2"
          >
            <div className="bg-white/95 backdrop-blur-xl border border-[#E5E5E1] rounded-3xl shadow-xl overflow-hidden p-5">
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E1]">
                  <span className="text-xs font-semibold text-[#1A1A1A]/70">Launch Availability</span>
                  <span className="inline-flex items-center text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                    Available for Launches
                  </span>
                </div>

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => handleNavLinkClick(link.href)}
                    className="px-3.5 py-2 rounded-xl text-sm font-semibold text-[#1A1A1A] hover:bg-[#FAF9F6] transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <div className="pt-3 flex flex-col gap-2 border-t border-[#E5E5E1]">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAudit();
                    }}
                    className="w-full justify-center rounded-full"
                  >
                    <Sparkles className="w-4 h-4 mr-2 text-[#2563EB]" />
                    Free Launch Readiness Audit
                  </Button>
                  <Button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full font-bold"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Book Strategy Session
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
