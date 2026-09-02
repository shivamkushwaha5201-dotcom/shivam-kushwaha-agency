import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SocialProofMarquee } from './components/SocialProofMarquee';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FaqSection } from './components/FaqSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { InteractiveAuditModal } from './components/InteractiveAuditModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { LegalPage } from './components/LegalPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'legal'>('home');
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');
  const [auditOpen, setAuditOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);

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
      } else if (hash === '#home' || hash === '' || hash.startsWith('#about') || hash.startsWith('#services') || hash.startsWith('#case-studies') || hash.startsWith('#faq') || hash.startsWith('#contact')) {
        setCurrentView('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollToContact = () => {
    if (currentView === 'legal') {
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

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] flex flex-col selection:bg-[#2563EB]/20 selection:text-[#2563EB] font-sans">
      {/* Top Navbar */}
      <Navbar
        onOpenAudit={() => setAuditOpen(true)}
        onOpenBooking={scrollToContact}
        onNavigateHome={handleBackToHome}
        isLegalPage={currentView === 'legal'}
      />

      {currentView === 'legal' ? (
        <LegalPage
          initialTab={legalTab}
          onBackToHome={handleBackToHome}
          onOpenBooking={scrollToContact}
        />
      ) : (
        /* Main Portfolio Sections */
        <main className="flex-1">
          {/* 1. Hero Section with Live Launch Simulator */}
          <HeroSection
            onOpenAudit={() => setAuditOpen(true)}
            onOpenBooking={scrollToContact}
          />

          {/* 2. Social Proof Marquee & Verified Badges */}
          <SocialProofMarquee />

          {/* 3. About Section (Bio, Portrait, Founder of AxentAI Labs, Core Highlights) */}
          <AboutSection onOpenBooking={scrollToContact} />

          {/* 4. Services Section (PH Hunting, X & LinkedIn SMM, Reddit, Influencer Campaigns) */}
          <ServicesSection
            onOpenBooking={scrollToContact}
            onOpenAudit={() => setAuditOpen(true)}
          />

          {/* 5. Case Studies & Verified Metrics Wall */}
          <CaseStudiesSection onOpenBooking={scrollToContact} />

          {/* 6. FAQ Section with Radix/Shadcn Accordions */}
          <FaqSection onOpenBooking={scrollToContact} />

          {/* 7. Call To Action & Interactive Launch Brief Submission */}
          <CtaSection />
        </main>
      )}

      {/* Footer */}
      <Footer
        onOpenBooking={scrollToContact}
        onOpenAudit={() => setAuditOpen(true)}
        onOpenLegal={handleOpenLegalPage}
      />

      {/* Interactive Launch Readiness Audit Modal */}
      <InteractiveAuditModal
        open={auditOpen}
        onOpenChange={setAuditOpen}
        onBookCall={scrollToContact}
      />

      {/* Legal Privacy & Terms Modal fallback */}
      <PrivacyTermsModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={legalTab}
      />
    </div>
  );
}

