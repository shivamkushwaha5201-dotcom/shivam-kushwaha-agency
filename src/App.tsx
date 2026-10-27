import React, { useState, useEffect, useCallback } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedByMarquee } from './components/TrustedByMarquee';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ClientSuccessSection } from './components/ClientSuccessSection';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { LegalPage } from './components/LegalPage';
import { ServicePage } from './components/ServicePage';
import { BackToTop } from './components/BackToTop';
import { SEOHead } from './components/SEOHead';
import { ScrollProgressBar } from './components/ui/ScrollProgressBar';
import { AmbientMintBackground } from './components/ui/AmbientMintBackground';
import { SectionTransitionGlow } from './components/ui/SectionTransitionGlow';
import { PortfolioApp } from './portfolio/PortfolioApp';

function isPortfolioLocation(): boolean {
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();
  return (
    path === '/portfolio' ||
    path.startsWith('/portfolio/') ||
    hash === '#portfolio' ||
    hash.startsWith('#/portfolio')
  );
}

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'legal' | 'service' | 'portfolio'>(() =>
    isPortfolioLocation() ? 'portfolio' : 'home'
  );
  const [activeServiceId, setActiveServiceId] = useState<string>('linkedin-personal-branding');
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');
  const [showOpeningIntro, setShowOpeningIntro] = useState<boolean>(true);

  // Short 1.15s Premium Opening Statement ("TRUSTED BY FOUNDERS & TEAMS")
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOpeningIntro(false);
    }, 1150);
    return () => clearTimeout(timer);
  }, []);

  // Sync with URL Pathname & Hash on mount, popstate, and hashchange
  useEffect(() => {
    const syncNavigationState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (
        path === '/portfolio' ||
        path.startsWith('/portfolio/') ||
        hash === '#portfolio' ||
        hash.startsWith('#/portfolio')
      ) {
        setCurrentView('portfolio');
        return;
      }

      if (hash === '#privacy') {
        setCurrentView('legal');
        setLegalTab('privacy');
      } else if (hash === '#terms') {
        setCurrentView('legal');
        setLegalTab('terms');
      } else if (
        hash.startsWith('#services/') || 
        hash === '#all-services' || 
        hash === '#services-all'
      ) {
        const serviceId = hash.startsWith('#services/')
          ? hash.replace('#services/', '').trim()
          : 'all';
        setActiveServiceId(serviceId || 'all');
        setCurrentView('service');
      } else if (
        hash === '#home' || 
        hash === '' || 
        hash.startsWith('#about') || 
        hash.startsWith('#services') || 
        hash.startsWith('#how-we-work') || 
        hash.startsWith('#why-us') || 
        hash.startsWith('#case-studies') || 
        hash.startsWith('#influencer') || 
        hash.startsWith('#product-hunt') || 
        hash.startsWith('#testimonials') || 
        hash.startsWith('#faq') || 
        hash.startsWith('#contact')
      ) {
        setCurrentView('home');
      }
    };

    syncNavigationState();
    window.addEventListener('hashchange', syncNavigationState);
    window.addEventListener('popstate', syncNavigationState);
    return () => {
      window.removeEventListener('hashchange', syncNavigationState);
      window.removeEventListener('popstate', syncNavigationState);
    };
  }, []);

  const handleOpenPortfolio = useCallback(() => {
    window.history.pushState({}, '', '/portfolio');
    setCurrentView('portfolio');
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const scrollToContact = useCallback(() => {
    setCurrentView((prevView) => {
      if (prevView !== 'home') {
        window.location.hash = '#contact';
        setTimeout(() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      return 'home';
    });
  }, []);

  const handleOpenLegalPage = useCallback((tab: 'privacy' | 'terms') => {
    setLegalTab(tab);
    setCurrentView('legal');
    window.location.hash = `#${tab}`;
  }, []);

  const handleBackToHome = useCallback(() => {
    setCurrentView('home');
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/#home');
    } else {
      window.location.hash = '#home';
    }
  }, []);

  const handleViewService = useCallback((serviceId: string) => {
    setActiveServiceId(serviceId);
    setCurrentView('service');
    window.location.hash = `#services/${serviceId}`;
  }, []);

  if (currentView === 'portfolio') {
    return (
      <HelmetProvider>
        <PortfolioApp />
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0A0F0A] hero-global-bg text-[#111111] dark:text-[#F4F6F4] flex flex-col selection:bg-[#459B45]/20 selection:text-[#246B32] font-sans transition-colors duration-200 relative">
        {/* Global Continuous Soft Mint Ambient Background & Animated Organic Mesh */}
        <AmbientMintBackground />
        
        {/* 00. Short Premium Opening Statement (1.15s — No loading bar, smooth fade/upward/scale reveal) */}
        <AnimatePresence>
          {showOpeningIntro && currentView === 'home' && (
            <motion.div
              key="opening-statement"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#FFFFFF]/95 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 1.02 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-center px-6 space-y-2 will-change-transform"
              >
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#246B32]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#459B45]" />
                  <span>AXENTAI LABS</span>
                </div>
                <p className="text-xl sm:text-3xl font-display font-bold tracking-[0.14em] text-[#111111] uppercase">
                  TRUSTED BY FOUNDERS &amp; TEAMS
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Scroll Reading Progress Indicator */}
        <ScrollProgressBar />

        {/* Dynamic Meta Tag Management for Home & Legal Views */}
        {currentView === 'home' && (
          <SEOHead
            title="AxentAI Labs — Growth Systems for Founders, Startups & Modern Brands"
            description="AxentAI Labs helps startups launch products, build founder authority, manage social media presence, collaborate with creators, and reach the right audiences through strategic, organic-first marketing."
            canonicalUrl="https://axentailabs.com/"
            keywords="Growth systems, Product Hunt launch support, LinkedIn personal branding, company page management, influencer marketing, X distribution, founder authority"
          />
        )}

        {currentView === 'legal' && (
          <SEOHead
            title={`${legalTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'} — AxentAI Labs`}
            description={`AxentAI Labs ${legalTab === 'privacy' ? 'Privacy Policy — Transparent client data handling, confidentiality, and security standards.' : 'Terms of Service — Agency agreement, deliverables, and service scopes.'}`}
            canonicalUrl={`https://axentailabs.com/#${legalTab}`}
            keywords="AxentAI Labs privacy policy, terms of service, client confidentiality, growth agency terms"
          />
        )}

        {/* Top Sticky Navbar */}
        <Navbar
          onOpenAudit={scrollToContact}
          onOpenBooking={scrollToContact}
          onNavigateHome={handleBackToHome}
          isLegalPage={currentView === 'legal'}
          isServicePage={currentView === 'service'}
        />

        {currentView === 'legal' ? (
          <LegalPage
            initialTab={legalTab}
            onBackToHome={handleBackToHome}
            onOpenBooking={scrollToContact}
          />
        ) : currentView === 'service' ? (
          <ServicePage
            serviceId={activeServiceId}
            onBackToHome={handleBackToHome}
            onOpenBooking={scrollToContact}
            onSelectService={handleViewService}
            onOpenPortfolio={handleOpenPortfolio}
          />
        ) : (
          /* Main Agency Storytelling Journey */
          <main className="flex-1 relative z-20">
            {/* 01. Hero Section (Strategic Growth, Launch & Positioning) */}
            <HeroSection
              onOpenBooking={scrollToContact}
            />

            {/* 02. Supported Product Launches Marquee */}
            <TrustedByMarquee />

            {/* Transition Glow & Particles */}
            <SectionTransitionGlow />

            {/* 03. Strategic Growth Services — Flagship Product Hunt & Supporting Growth Channels */}
            <ServicesSection
              onOpenBooking={scrollToContact}
              onViewService={handleViewService}
              onOpenPortfolio={handleOpenPortfolio}
            />

            {/* Transition Glow & Particles */}
            <SectionTransitionGlow />

            {/* 05. Growth Systems & Brand Architecture (Tiger & Doorway) */}
            <TrustSection onOpenBooking={scrollToContact} />

            {/* Transition Glow & Particles */}
            <SectionTransitionGlow />

            {/* 06. Client Feedback & Verified Outcomes */}
            <ClientSuccessSection onOpenBooking={scrollToContact} />

            {/* Transition Glow & Particles */}
            <SectionTransitionGlow />

            {/* 11. Founder & Agency Story (Built Around Strategy. Focused on Growth.) */}
            <AboutSection onOpenBooking={scrollToContact} />

            {/* 12. FAQs */}
            <FaqSection onOpenBooking={scrollToContact} />

            {/* 13. Final CTA (Let's Build Your Next Growth Move) */}
            <CtaSection />
          </main>
        )}

        {/* Minimal Premium Footer */}
        <Footer
          onOpenBooking={scrollToContact}
          onOpenLegal={handleOpenLegalPage}
        />

        {/* Floating Back to Top Button */}
        <BackToTop />
      </div>
    </HelmetProvider>
  );
}
