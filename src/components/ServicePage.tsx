import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  MessageSquare, 
  ExternalLink, 
  ShieldAlert, 
  AlertCircle, 
  Briefcase, 
  Layers, 
  Sparkles, 
  TrendingUp, 
  Target, 
  Rocket, 
  UserCheck, 
  Share2, 
  Megaphone, 
  Instagram,
  ShieldCheck
} from 'lucide-react';
import { Button } from './ui/button';
import { SERVICES_DATA, CONTACT_INFO } from '../data/portfolioData';
import { ServiceDetail } from '../types';
import { SEOHead } from './SEOHead';
import productHuntCatMascotPng from '../assets/images/product_hunt_cat_megaphone_transparent.png';
import productHuntCatMascotWebp from '../assets/images/product_hunt_cat_megaphone_transparent.webp';

interface ServicePageProps {
  serviceId: string;
  onBackToHome: () => void;
  onOpenBooking: () => void;
  onOpenAudit?: () => void;
  onOpenPortfolio?: () => void;
  onSelectService: (id: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'UserCheck':
      return <UserCheck className="w-5 h-5 text-[#246B32]" />;
    case 'Share2':
      return <Share2 className="w-5 h-5 text-[#246B32]" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 text-[#246B32]" />;
    case 'Megaphone':
      return <Megaphone className="w-5 h-5 text-[#246B32]" />;
    case 'Instagram':
      return <Instagram className="w-5 h-5 text-[#246B32]" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-[#246B32]" />;
    default:
      return <Rocket className="w-5 h-5 text-[#246B32]" />;
  }
};

export const ServicePage: React.FC<ServicePageProps> = ({
  serviceId,
  onBackToHome,
  onOpenBooking,
  onOpenPortfolio,
  onSelectService
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const isAllServicesView = serviceId === 'all' || serviceId === 'services' || serviceId === 'services-all';
  const isAccountManagementView = serviceId === 'account-management';
  const isInfluencerMarketingView = serviceId === 'influencer-marketing';

  // Selected individual service (if viewing a single service)
  const singleService = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];

  const handleReturnToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    onBackToHome();
    setTimeout(() => {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handlePortfolioNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPortfolio) {
      onOpenPortfolio();
    } else {
      window.history.pushState({}, '', '/portfolio');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  // =========================================================================
  // VIEW 1: FULL SERVICES CATALOG ("See All Services")
  // =========================================================================
  if (isAllServicesView) {
    const categories: { title: string; subtitle: string; tag: string; services: ServiceDetail[] }[] = [
      {
        title: 'Product Hunt Launch Support',
        subtitle: 'Our flagship launch program providing strategic positioning, maker asset review, and organic distribution for tech startups.',
        tag: 'Flagship Service',
        services: SERVICES_DATA.filter(s => s.category === 'flagship'),
      },
      {
        title: 'Founder Positioning & Personal Branding',
        subtitle: 'Turning founder and executive experience into authentic domain authority, buyer trust, and inbound opportunities.',
        tag: 'Founder Authority',
        services: SERVICES_DATA.filter(s => s.category === 'branding'),
      },
      {
        title: 'LinkedIn & X Account Management',
        subtitle: 'Reliable social operations maintaining active, professional presence across company LinkedIn and X channels.',
        tag: 'Social Operations',
        services: SERVICES_DATA.filter(s => s.category === 'account-management'),
      },
      {
        title: 'Influencer Marketing & Creator Partnerships',
        subtitle: 'Vetted creator collaborations on LinkedIn, X, and Instagram. Clearly distinguished from owned account management.',
        tag: 'Creator Campaigns',
        services: SERVICES_DATA.filter(s => s.category === 'influencer-marketing'),
      },
      {
        title: 'Organic Brand Visibility & Audience Growth',
        subtitle: 'Ethical, context-first participation across developer hubs, niche tech subreddits, and open discussions.',
        tag: 'Organic Distribution',
        services: SERVICES_DATA.filter(s => s.category === 'organic-growth'),
      },
    ];

    return (
      <div className="pt-28 pb-20 bg-[#FFFFFF]/75 backdrop-blur-[1.5px] min-h-screen text-[#111111] font-sans relative overflow-hidden">
        {/* Soft Ambient Mint Glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-80" />
          <div
            className="absolute top-1/4 right-[10%] w-[520px] h-[520px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(69, 155, 69, 0.12) 0%, rgba(229, 245, 229, 0.4) 45%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />
        </div>

        <SEOHead
          title="All Growth Services — AxentAI Labs"
          description="Explore our complete catalog of growth services: Product Hunt launch support, LinkedIn personal branding, company account management, and creator campaigns."
          canonicalUrl="https://axentailabs.com/#services/all"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5E9E5]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#555B55]">
              <button onClick={onBackToHome} className="hover:text-[#246B32] transition-colors cursor-pointer">
                Home
              </button>
              <span>/</span>
              <a href="#services" onClick={handleReturnToServices} className="hover:text-[#246B32] transition-colors">
                Services
              </a>
              <span>/</span>
              <span className="text-[#111111] font-semibold">All Services</span>
            </nav>

            <Button
              variant="outline"
              size="sm"
              onClick={handleReturnToServices}
              className="rounded-full text-xs font-semibold border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:border-[#459B45] hover:text-[#246B32] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to Home
            </Button>
          </div>

          {/* Catalog Hero Header */}
          <div className="bg-[#F7F9F7] border border-[#E5E9E5] shadow-xs rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="max-w-3xl space-y-3 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#246B32] uppercase">
                <span>FULL SERVICE CATALOG</span>
                <span aria-hidden="true">·</span>
                <span>8 STRATEGIC PROGRAMS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
                Our Complete Suite of Growth Services
              </h1>
              <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans max-w-2xl">
                Explore our full catalog of services organized into dedicated categories. Every program is built around strategic clarity, direct founder involvement, and genuine organic distribution.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button
                  onClick={onOpenBooking}
                  className="bg-[#246B32] hover:bg-[#1E5B2A] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book Strategy Call</span>
                </Button>
                <a
                  href="/portfolio"
                  onClick={handlePortfolioNavigation}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] border border-[#459B45] transition-all cursor-pointer shadow-2xs"
                >
                  <span>View Launch Portfolio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Categorized Services List */}
          <div className="space-y-14">
            {categories.map((cat, catIdx) => (
              <div key={catIdx} className="space-y-6">
                <div className="space-y-1 text-left border-b border-[#E5E9E5] pb-3">
                  <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#246B32] uppercase">
                    <span>CATEGORY {catIdx + 1}</span>
                    <span aria-hidden="true">·</span>
                    <span>{cat.tag}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-[#111111] tracking-tight">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-[#555B55] max-w-2xl">
                    {cat.subtitle}
                  </p>
                </div>

                <div className={`grid gap-6 ${cat.services.length === 1 ? 'grid-cols-1' : cat.services.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                  {cat.services.map((srv) => (
                    <div
                      key={srv.id}
                      className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xs group ${
                        srv.featured 
                          ? 'bg-gradient-to-br from-[#F5FAF5] via-[#FFFFFF] to-[#EAF7EA] border-2 border-[#459B45]/60 shadow-sm hover:border-[#246B32]'
                          : 'bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45]/60 hover:shadow-sm'
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="w-10 h-10 rounded-2xl bg-[#E5F5E5] border border-[#CDECCF] flex items-center justify-center">
                            {getServiceIcon(srv.icon)}
                          </div>
                          <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                            srv.featured 
                              ? 'bg-[#246B32] text-white border-[#246B32]' 
                              : 'bg-[#F7F9F7] text-[#246B32] border-[#E5E9E5]'
                          }`}>
                            {srv.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#246B32] transition-colors">
                            {srv.title}
                          </h3>
                          <p className="mt-1 text-xs font-medium text-[#246B32]">
                            {srv.tagline}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                          {srv.description}
                        </p>

                        {/* Deliverables summary */}
                        <div className="pt-3 border-t border-[#F0F2F0] space-y-2">
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                            Core Deliverables
                          </div>
                          <ul className="space-y-1.5 text-xs text-[#222222]">
                            {srv.deliverables.slice(0, 4).map((item, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0 mt-0.5" />
                                <span className="leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="pt-5 mt-5 border-t border-[#F0F2F0] flex items-center justify-between gap-3">
                        <button
                          type="button"
                          onClick={() => onSelectService(srv.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer group/btn"
                        >
                          <span>Explore Deep Dive</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#246B32] transition-transform duration-200 group-hover/btn:translate-x-1" />
                        </button>

                        <Button
                          size="sm"
                          onClick={onOpenBooking}
                          className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-3.5 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                        >
                          Discuss Service
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 2: CATEGORY VIEW — LINKEDIN & X ACCOUNT MANAGEMENT
  // =========================================================================
  if (isAccountManagementView) {
    const accountServices = SERVICES_DATA.filter(s => s.category === 'account-management');

    return (
      <div className="pt-28 pb-20 bg-[#FFFFFF]/75 backdrop-blur-[1.5px] min-h-screen text-[#111111] font-sans relative overflow-hidden">
        <SEOHead
          title="LinkedIn & X Account Management — AxentAI Labs"
          description="Manage company social accounts with consistent content, product announcements, audience engagement, and performance reporting."
          canonicalUrl="https://axentailabs.com/#services/account-management"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5E9E5]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#555B55]">
              <button onClick={onBackToHome} className="hover:text-[#246B32] transition-colors cursor-pointer">
                Home
              </button>
              <span>/</span>
              <a href="#services" onClick={handleReturnToServices} className="hover:text-[#246B32] transition-colors">
                Services
              </a>
              <span>/</span>
              <span className="text-[#111111] font-semibold">LinkedIn &amp; X Account Management</span>
            </nav>

            <Button
              variant="outline"
              size="sm"
              onClick={handleReturnToServices}
              className="rounded-full text-xs font-semibold border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:border-[#459B45] hover:text-[#246B32] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to Services
            </Button>
          </div>

          {/* Hero Header */}
          <div className="bg-[#F7F9F7] border border-[#E5E9E5] shadow-xs rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider text-[#246B32] uppercase bg-[#E5F5E5] px-3 py-1 rounded-full border border-[#CDECCF]">
                Social Account Management
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
                LinkedIn &amp; X Account Management
              </h1>
              <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans max-w-2xl">
                Manage company social accounts with consistent content, product updates, audience engagement, and performance reporting across LinkedIn and X.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button
                  onClick={onOpenBooking}
                  className="bg-[#246B32] hover:bg-[#1E5B2A] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book Strategy Call</span>
                </Button>
                <button
                  type="button"
                  onClick={() => onSelectService('all')}
                  className="text-xs font-semibold text-[#555B55] hover:text-[#246B32] underline underline-offset-4 cursor-pointer px-2"
                >
                  View All 8 Services →
                </button>
              </div>
            </div>
          </div>

          {/* Two Separate Detailed Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accountServices.map((srv) => (
              <div key={srv.id} className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 sm:p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#E5F5E5] border border-[#CDECCF] flex items-center justify-center">
                      {getServiceIcon(srv.icon)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#246B32] bg-[#F7F9F7] border border-[#E5E9E5] px-3 py-1 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                      {srv.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#246B32]">
                      {srv.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                    {srv.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] text-xs text-[#333333]">
                    <span className="font-bold text-[#246B32] block mb-0.5">Ideal For:</span>
                    {srv.idealFor}
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                      Key Deliverables
                    </span>
                    <ul className="space-y-2 text-xs text-[#222222]">
                      {srv.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F2F0] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(srv.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer group"
                  >
                    <span>Full Service Specs &amp; Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#246B32] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <Button
                    size="sm"
                    onClick={onOpenBooking}
                    className="bg-[#246B32] hover:bg-[#1E5B2A] text-white text-xs font-semibold px-4 py-2 rounded-full cursor-pointer"
                  >
                    Discuss
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 3: CATEGORY VIEW — INFLUENCER MARKETING & CREATOR CAMPAIGNS
  // =========================================================================
  if (isInfluencerMarketingView) {
    const creatorServices = SERVICES_DATA.filter(s => s.category === 'influencer-marketing');

    return (
      <div className="pt-28 pb-20 bg-[#FFFFFF]/75 backdrop-blur-[1.5px] min-h-screen text-[#111111] font-sans relative overflow-hidden">
        <SEOHead
          title="Influencer Marketing & Creator Partnerships — AxentAI Labs"
          description="Connect with relevant LinkedIn, X, and Instagram creators to increase product awareness and reach targeted audiences."
          canonicalUrl="https://axentailabs.com/#services/influencer-marketing"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#E5E9E5]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#555B55]">
              <button onClick={onBackToHome} className="hover:text-[#246B32] transition-colors cursor-pointer">
                Home
              </button>
              <span>/</span>
              <a href="#services" onClick={handleReturnToServices} className="hover:text-[#246B32] transition-colors">
                Services
              </a>
              <span>/</span>
              <span className="text-[#111111] font-semibold">Influencer Marketing</span>
            </nav>

            <Button
              variant="outline"
              size="sm"
              onClick={handleReturnToServices}
              className="rounded-full text-xs font-semibold border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:border-[#459B45] hover:text-[#246B32] cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
              Back to Services
            </Button>
          </div>

          {/* Hero Header */}
          <div className="bg-[#F7F9F7] border border-[#E5E9E5] shadow-xs rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono font-bold tracking-wider text-[#246B32] uppercase bg-[#E5F5E5] px-3 py-1 rounded-full border border-[#CDECCF]">
                Creator Partnerships
              </span>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
                Influencer Marketing &amp; Creator Partnerships
              </h1>
              <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans max-w-2xl">
                Connect with relevant LinkedIn, X, and Instagram creators to increase product awareness and reach targeted audiences.
              </p>

              {/* Distinction note */}
              <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#EAF7EA] border border-[#CDECCF] text-xs text-[#246B32] font-medium leading-relaxed max-w-2xl">
                <ShieldAlert className="w-4 h-4 shrink-0 text-[#246B32] mt-0.5" />
                <span>
                  <strong>Important Distinction:</strong> Influencer marketing coordinates external third-party creator advocacy, sponsored reviews, and demonstration campaigns, distinct from day-to-day internal account management.
                </span>
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button
                  onClick={onOpenBooking}
                  className="bg-[#246B32] hover:bg-[#1E5B2A] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-xs cursor-pointer"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book Creator Strategy Call</span>
                </Button>
                <button
                  type="button"
                  onClick={() => onSelectService('all')}
                  className="text-xs font-semibold text-[#555B55] hover:text-[#246B32] underline underline-offset-4 cursor-pointer px-2"
                >
                  View All 8 Services →
                </button>
              </div>
            </div>
          </div>

          {/* 3 Platform-Specific Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorServices.map((srv) => (
              <div key={srv.id} className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 space-y-6 flex flex-col justify-between hover:border-[#459B45]/60 hover:shadow-sm transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#E5F5E5] border border-[#CDECCF] flex items-center justify-center">
                      {getServiceIcon(srv.icon)}
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#246B32] bg-[#F7F9F7] border border-[#E5E9E5] px-2.5 py-0.5 rounded-full">
                      {srv.badge}
                    </span>
                  </div>

                  <div>
                    <h2 className="text-lg sm:text-xl font-display font-bold text-[#111111]">
                      {srv.title}
                    </h2>
                    <p className="mt-1 text-xs font-medium text-[#246B32]">
                      {srv.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[#F0F2F0]">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-bold">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#222222]">
                      {srv.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0F2F0] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => onSelectService(srv.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer group"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#246B32] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>

                  <Button
                    size="sm"
                    onClick={onOpenBooking}
                    className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] border border-[#CDECCF] text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer"
                  >
                    Discuss
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // VIEW 4: DEDICATED INDIVIDUAL SERVICE DETAIL PAGE
  // =========================================================================
  const service = singleService;
  const pageTitle = `${service.title} — Growth Systems | AxentAI Labs`;
  const pageDescription = `${service.tagline} ${service.description.slice(0, 120)}...`;
  const pageCanonical = `https://axentailabs.com/#services/${service.id}`;
  const keywords = `${service.title}, ${service.badge}, AxentAI Labs, digital growth, social media strategy, ${service.deliverables.slice(0, 4).join(', ')}`;

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://axentailabs.com/'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Services',
            'item': 'https://axentailabs.com/#services'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': service.title,
            'item': pageCanonical
          }
        ]
      },
      {
        '@type': 'Service',
        '@id': pageCanonical,
        'name': service.title,
        'serviceType': service.badge,
        'provider': {
          '@type': 'Organization',
          'name': 'Axentailabs',
          'url': 'https://axentailabs.com',
          'logo': 'https://axentailabs.com/assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png'
        },
        'description': service.description,
        'areaServed': 'Global',
        'termsOfService': 'https://axentailabs.com/#terms'
      }
    ]
  };

  const otherServices = SERVICES_DATA.filter(s => s.id !== service.id);

  return (
    <div className="pt-28 pb-20 bg-[#FFFFFF]/75 backdrop-blur-[1.5px] min-h-screen text-[#111111] font-sans relative overflow-hidden">
      {/* Soft Ambient Mint Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-80" />
        <div
          className="absolute top-1/4 right-[10%] w-[520px] h-[520px] rounded-full animate-ambient-float-2 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(69, 155, 69, 0.15) 0%, rgba(229, 245, 229, 0.45) 45%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>

      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={pageCanonical}
        keywords={keywords}
        jsonLd={serviceJsonLd}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#E5E9E5]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#555B55]">
            <button onClick={onBackToHome} className="hover:text-[#246B32] transition-colors cursor-pointer">
              Home
            </button>
            <span>/</span>
            <a href="#services" onClick={handleReturnToServices} className="hover:text-[#246B32] transition-colors">
              Services
            </a>
            <span>/</span>
            <span className="text-[#111111] font-semibold">{service.title}</span>
          </nav>

          <Button
            variant="outline"
            size="sm"
            onClick={handleReturnToServices}
            className="rounded-full text-xs font-semibold border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:border-[#459B45] hover:text-[#246B32] cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            Back to All Services
          </Button>
        </div>

        {/* Hero Header for Service */}
        <div className="bg-[#F7F9F7] border border-[#E5E9E5] shadow-xs rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className={`${service.id === 'product-hunt-launch' ? 'lg:col-span-8' : 'lg:col-span-12 max-w-3xl'} space-y-4`}>
              
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-bold text-[#246B32] bg-[#E5F5E5] px-3.5 py-1 rounded-full border border-[#CDECCF]">
                  {service.badge}
                </span>
                <span className="text-xs font-bold text-[#555B55] bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E5E9E5]">
                  {service.categoryTitle}
                </span>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                  {service.resultsMetric}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg font-medium text-[#246B32] leading-snug">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans max-w-2xl">
                {service.description}
              </p>

              {/* Distinction Note for Influencer Marketing */}
              {service.distinctionNote && (
                <div className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-[#EAF7EA] border border-[#CDECCF] text-xs text-[#246B32] font-medium leading-relaxed max-w-2xl">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-[#246B32] mt-0.5" />
                  <span>{service.distinctionNote}</span>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Button
                  onClick={onOpenBooking}
                  size="lg"
                  className="bg-gradient-to-r from-[#246B32] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white font-semibold rounded-full px-7 py-3.5 border border-[#459B45]/40 shadow-xs hover:shadow-md cursor-pointer text-xs sm:text-sm transition-all"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Book a Strategy Call</span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={onOpenBooking}
                  className="rounded-full text-xs sm:text-sm font-semibold border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:border-[#459B45] hover:text-[#246B32] px-6 py-3.5 cursor-pointer"
                >
                  <span>Discuss This Service</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {service.portfolioUrl && (
                  <a
                    href={service.portfolioUrl}
                    id="service-page-view-portfolio-btn"
                    onClick={handlePortfolioNavigation}
                    className="portfolio-highlight-glow inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] border border-[#459B45] hover:border-[#246B32] shadow-2xs hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                  >
                    <span className="relative flex h-2 w-2 mr-0.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#459B45] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#246B32]" />
                    </span>
                    <span>View Launch Portfolio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {service.id === 'product-hunt-launch' && (
                <p className="text-[11px] font-mono text-[#555B55] pt-1">
                  * Direct strategic advisory and organic preparation. We do not promise guaranteed rankings, votes, or launch results.
                </p>
              )}
            </div>

            {service.id === 'product-hunt-launch' && (
              <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center md:justify-end">
                <div className="w-[190px] sm:w-[220px] md:w-[240px] lg:w-[270px] flex items-center justify-center bg-transparent select-none">
                  <picture className="w-full block bg-transparent">
                    <source srcSet={productHuntCatMascotWebp} type="image/webp" />
                    <img
                      src={productHuntCatMascotPng}
                      alt="Product Hunt Launch Support Cat Mascot"
                      className="w-full max-h-[260px] sm:max-h-[280px] h-auto object-contain bg-transparent block mx-auto select-none"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      decoding="async"
                    />
                  </picture>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Scope (Col 1-2) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Who This Service Is For */}
            <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#E5F5E5] flex items-center justify-center text-[#246B32]">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                    Who This Service Is For
                  </h2>
                  <p className="text-xs text-[#555B55]">
                    Designed specifically for high-intent founders, builders, and growth teams.
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] text-xs sm:text-sm text-[#333333] leading-relaxed">
                <span className="font-bold text-[#246B32] block mb-1">Target Profile:</span>
                {service.idealFor}
              </div>
            </div>

            {/* 2. Problems The Service Solves */}
            {service.problemsSolves && service.problemsSolves.length > 0 && (
              <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 sm:p-8 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                      Problems This Service Solves
                    </h2>
                    <p className="text-xs text-[#555B55]">
                      Overcoming common marketing hurdles, operational bottlenecks, and wasted effort.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.problemsSolves.map((problem, pIdx) => (
                    <div 
                      key={pIdx}
                      className="p-4 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] flex items-start gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                      <p className="text-xs text-[#444C44] leading-relaxed font-medium">
                        {problem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. Detailed Scope of Work */}
            {service.scopeOfWork && service.scopeOfWork.length > 0 && (
              <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 sm:p-8 space-y-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E5F5E5] flex items-center justify-center text-[#246B32]">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                      Detailed Scope of Work
                    </h2>
                    <p className="text-xs text-[#555B55]">
                      End-to-end advisory and hands-on execution handled directly with your team.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.scopeOfWork.map((scopeItem, sIdx) => (
                    <div 
                      key={sIdx}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5]"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E5F5E5] text-[#246B32] border border-[#CDECCF] flex items-center justify-center shrink-0 mt-0.5 font-bold text-[11px]">
                        ✓
                      </div>
                      <p className="text-xs sm:text-sm text-[#222222] font-medium leading-relaxed">
                        {scopeItem}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Key Deliverables */}
            <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 sm:p-8 space-y-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#E5F5E5] flex items-center justify-center text-[#246B32]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                    Key Deliverables
                  </h2>
                  <p className="text-xs text-[#555B55]">
                    Concrete assets, documents, schedules, and active operational outputs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.deliverables.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#246B32] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-xs sm:text-sm font-semibold text-[#111111]">
                        {item}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Step-by-Step Workflow */}
            {service.workflow && service.workflow.length > 0 && (
              <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 sm:p-8 space-y-5">
                <div>
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                    Step-by-Step Workflow
                  </h2>
                  <p className="text-xs text-[#555B55] mt-1">
                    Structured 4-step execution framework ensuring transparency and continuous communication.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.workflow.map((flowItem, fIdx) => (
                    <div key={fIdx} className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] space-y-2">
                      <span className="font-mono text-xs font-bold text-[#246B32]">
                        Phase {flowItem.step}
                      </span>
                      <h3 className="text-sm font-bold text-[#111111]">
                        {flowItem.title}
                      </h3>
                      <p className="text-xs text-[#555B55] leading-relaxed">
                        {flowItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 6. Expected Outcomes without Guaranteed Promises */}
            {service.expectedOutcomes && service.expectedOutcomes.length > 0 && (
              <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-7 sm:p-8 space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#E5F5E5] flex items-center justify-center text-[#246B32]">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                      Expected Strategic Outcomes
                    </h2>
                    <p className="text-xs text-[#555B55]">
                      Realistic milestones and enduring compound advantages without exaggerated promises.
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {service.expectedOutcomes.map((outcome, oIdx) => (
                    <div 
                      key={oIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5]"
                    >
                      <div className="w-2 h-2 rounded-full bg-[#246B32] shrink-0 mt-2" />
                      <p className="text-xs sm:text-sm text-[#333333] font-medium leading-relaxed">
                        {outcome}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-xl bg-[#F0F2F0] text-[11px] font-mono text-[#555B55]">
                  * Ethical Policy: AxentAI Labs operates strictly with genuine organic distribution, high-signal copywriting, and direct founder engagement. We never deploy engagement pods, bot upvotes, or fabricate client numbers.
                </div>
              </div>
            )}

            {/* 7. Relevant Portfolio / Verified Results Link */}
            <div className="bg-gradient-to-br from-[#EAF7EA] to-[#FFFFFF] border border-[#CDECCF] shadow-xs rounded-3xl p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1.5 max-w-lg">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#246B32]">
                  Verified Client Track Record
                </span>
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111]">
                  Explore Our 30+ Supported Launches
                </h3>
                <p className="text-xs text-[#555B55] leading-relaxed">
                  Review verified launches including StoreClaw, Chronicle 2.0, Enia Code, Hey Noah, Ito AI, Ctruh Studio, and more in our public database.
                </p>
              </div>

              <a
                href="/portfolio"
                id="service-detail-view-launches-btn"
                onClick={handlePortfolioNavigation}
                className="portfolio-highlight-glow inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#246B32] bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>View Launch Portfolio</span>
                <ExternalLink className="w-4 h-4 text-[#246B32]" />
              </a>
            </div>

          </div>

          {/* Sidebar (Col 3) */}
          <div className="space-y-6">
            <div className="sticky top-28 bg-[#F7F9F7] border border-[#E5E9E5] shadow-sm rounded-3xl p-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#246B32]">
                  Direct Consultation
                </span>
                <h3 className="text-lg font-bold text-[#111111] mt-1">
                  Ready to deploy {service.title}?
                </h3>
                <p className="text-xs text-[#555B55] mt-2 leading-relaxed">
                  Book a direct 30-minute growth strategy session with Founder Shivam Kushwaha to evaluate your goals and map out delivery.
                </p>
              </div>

              <Button
                onClick={onOpenBooking}
                className="w-full justify-center bg-[#246B32] hover:bg-[#1E5B2A] text-white font-semibold rounded-full py-3 shadow-sm shadow-[#246B32]/25 cursor-pointer text-xs"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book a Strategy Call</span>
              </Button>

              <Button
                variant="outline"
                onClick={onOpenBooking}
                className="w-full justify-center rounded-full text-xs font-semibold border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:border-[#459B45] hover:text-[#246B32] py-2.5 cursor-pointer"
              >
                <span>Discuss This Service</span>
              </Button>

              {/* Direct channels */}
              <div className="pt-4 border-t border-[#E5E9E5] space-y-2 text-xs">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FFFFFF] text-[#111111] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="text-[11px] text-[#555B55] font-mono">{CONTACT_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FFFFFF] text-[#111111] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#246B32]" />
                    <span>Official Agency Email</span>
                  </span>
                  <span className="text-[10px] text-[#555B55] font-mono truncate">{CONTACT_INFO.email}</span>
                </a>
              </div>

              {/* All Services Switcher */}
              <div className="pt-4 border-t border-[#E5E9E5]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#555B55]">
                    All 8 Growth Services
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectService('all')}
                    className="text-[10px] font-mono text-[#246B32] hover:underline cursor-pointer"
                  >
                    View Catalog
                  </button>
                </div>
                <div className="space-y-1.5">
                  {SERVICES_DATA.map((s) => {
                    const isCurrent = s.id === service.id;
                    return (
                      <button
                        key={s.id}
                        onClick={() => onSelectService(s.id)}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-medium flex items-center justify-between transition-colors group cursor-pointer ${
                          isCurrent 
                            ? 'bg-[#E5F5E5] text-[#246B32] font-bold border border-[#CDECCF]' 
                            : 'hover:bg-[#FFFFFF] text-[#555B55] hover:text-[#111111]'
                        }`}
                      >
                        <span className="truncate pr-2">{s.title}</span>
                        {isCurrent ? (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#246B32] shrink-0" />
                        ) : (
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#459B45] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Back to Services link */}
              <div className="pt-3 border-t border-[#E5E9E5] text-center">
                <button
                  type="button"
                  onClick={handleReturnToServices}
                  className="text-xs text-[#555B55] hover:text-[#246B32] font-semibold underline underline-offset-4 cursor-pointer"
                >
                  ← Return to Services Page
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
