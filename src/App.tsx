import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedByMarquee } from './components/TrustedByMarquee';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { InfluencerSection } from './components/InfluencerSection';
import { ProductHuntSection } from './components/ProductHuntSection';
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
import { ContinuousScrollEarth } from './components/ContinuousScrollEarth';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'legal' | 'service'>('home');
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

  // Sync with URL Hash on mount and hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy') {
        setCurrentView('legal');
        setLegalTab('privacy');
      } else if (hash === '#terms') {
        setCurrentView('legal');
        setLegalTab('terms');
      } else if (hash.startsWith('#services/')) {
        const serviceId = hash.replace('#services/', '').trim();
        setActiveServiceId(serviceId || 'linkedin-personal-branding');
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

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToContact = () => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = '#contact';
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenLegalPage = (tab: 'privacy' | 'terms') => {
    setLegalTab(tab);
    setCurrentView('legal');
    window.location.hash = `#${tab}`;
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.location.hash = '#home';
  };

  const handleViewService = (serviceId: string) => {
    setActiveServiceId(serviceId);
    setCurrentView('service');
    window.location.hash = `#services/${serviceId}`;
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#02050A] text-slate-100 flex flex-col selection:bg-blue-500/30 selection:text-blue-200 font-sans transition-colors duration-200">
        
        {/* 00. Short Premium Opening Statement (1.15s — No loading bar, smooth fade/upward/scale reveal) */}
        <AnimatePresence>
          {showOpeningIntro && currentView === 'home' && (
            <motion.div
              key="opening-statement"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center bg-[#02050A]/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 1.02 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="text-center px-6 space-y-2 will-change-transform"
              >
                <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#38BDF8]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>AXENTAI LABS</span>
                </div>
                <p className="text-xl sm:text-3xl font-display font-bold tracking-[0.14em] text-[#F8FAFC] uppercase">
                  TRUSTED BY FOUNDERS &amp; TEAMS
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Scroll Reading Progress Indicator */}
        <ScrollProgressBar />

        {/* Continuous Scroll-Driven Planetary Background Layer (LOCKED) */}
        {currentView === 'home' && <ContinuousScrollEarth />}

        {/* Dynamic Meta Tag Management for Home & Legal Views */}
        {currentView === 'home' && (
          <SEOHead
            title="AxentAI Labs — Digital Growth & Social Presence Agency"
            description="We help founders, startups and brands build visibility that actually matters through LinkedIn personal branding, page handling, organic engagement, Product Hunt launches, and influencer marketing."
            canonicalUrl="https://axentailabs.com/"
            keywords="LinkedIn personal branding, LinkedIn page handling, organic engagement support, Product Hunt launch support, influencer marketing, digital growth agency"
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
          />
        ) : (
          /* Main Agency Storytelling Journey */
          <main className="flex-1">
            {/* 01. Hero Section (Large Earth + main positioning) */}
            <HeroSection
              onOpenBooking={scrollToContact}
            />

            {/* 02. Trusted By Founders & Makers — Supported Product Hunt Launches Marquee */}
            <TrustedByMarquee />

            {/* 03. Agency Positioning — "WE BUILD GROWTH SYSTEMS FOR MODERN BRANDS" */}
            <TrustSection onOpenBooking={scrollToContact} />

            {/* 04. Existing Services Section (LOCKED — 100% Untouched) */}
            <ServicesSection
              onOpenBooking={scrollToContact}
              onViewService={handleViewService}
            />

            {/* 05. Social Platform / Creator Ecosystem (LinkedIn + X + Instagram Orbit Animation) */}
            <InfluencerSection onOpenBooking={scrollToContact} />

            {/* 06. How We Work (4-Stage Growth Journey) */}
            <ProcessSection onOpenBooking={scrollToContact} />

            {/* 07. Case Studies (Strategic Execution Records) */}
            <CaseStudiesSection onOpenBooking={scrollToContact} />

            {/* 08. Product Hunt Launch Support (Global Launch Visibility) */}
            <ProductHuntSection onOpenBooking={scrollToContact} />

            {/* 09. Why Choose AxentAI Labs (4 Core Pillars) */}
            <WhyUsSection />

            {/* 10. What Clients Are Saying (Single-Dominant Horizontal Slider) */}
            <ClientSuccessSection onOpenBooking={scrollToContact} />

            {/* 11. About Section (Kept 100% Exactly as it is) */}
            <AboutSection onOpenBooking={scrollToContact} />

            {/* 12. FAQ Section */}
            <FaqSection onOpenBooking={scrollToContact} />

            {/* 13. Final CTA + Earth ("READY TO BUILD YOUR DIGITAL INFLUENCE?") */}
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
