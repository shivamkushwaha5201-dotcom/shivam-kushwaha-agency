import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { InfluencerSection } from './components/InfluencerSection';
import { ProductHuntSection } from './components/ProductHuntSection';
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
import Lenis from 'lenis';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'legal' | 'service'>('home');
  const [activeServiceId, setActiveServiceId] = useState<string>('linkedin-personal-branding');
  const [legalTab, setLegalTab] = useState<'privacy' | 'terms'>('privacy');

  // Initialize Luxury Smooth Scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
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
        
        {/* Top Scroll Reading Progress Indicator */}
        <ScrollProgressBar />

        {/* Continuous Scroll-Driven Planetary Background Layer */}
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
          /* Main Agency Sections Structure */
          <main className="flex-1">
            {/* 01. Hero Section (Large Earth + main positioning) */}
            <HeroSection
              onOpenBooking={scrollToContact}
            />

            {/* 02. Services Section (Earth partially visible / moving through background) */}
            <ServicesSection
              onOpenBooking={scrollToContact}
              onViewService={handleViewService}
            />

            {/* 03. How We Work (Planetary curve / subtle atmospheric visual) */}
            <ProcessSection onOpenBooking={scrollToContact} />

            {/* 04. Case Studies (Earth continues its scroll journey) */}
            <CaseStudiesSection onOpenBooking={scrollToContact} />

            {/* 05. Influencer Marketing (Global network visual + Earth) */}
            <InfluencerSection onOpenBooking={scrollToContact} />

            {/* 06. Product Hunt Launch (Global launch / planetary visual) */}
            <ProductHuntSection onOpenBooking={scrollToContact} />

            {/* 07. About Section (Kept 100% Exactly as it is) */}
            <AboutSection onOpenBooking={scrollToContact} />

            {/* FAQ Section */}
            <FaqSection onOpenBooking={scrollToContact} />

            {/* 08. CTA Section (Large cinematic Earth returns) */}
            <CtaSection />
          </main>
        )}

        {/* 11. Minimal Premium Footer */}
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
