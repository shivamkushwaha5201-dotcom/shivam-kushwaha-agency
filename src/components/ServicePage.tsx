import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  Check, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';
import { SERVICES_DATA, CONTACT_INFO } from '../data/portfolioData';
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

export const ServicePage: React.FC<ServicePageProps> = ({
  serviceId,
  onBackToHome,
  onOpenBooking,
  onOpenPortfolio,
  onSelectService
}) => {
  const service = SERVICES_DATA.find(s => s.id === serviceId) || SERVICES_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const pageTitle = `${service.title} — Digital Growth Strategy | AxentAI Labs`;
  const pageDescription = `${service.tagline} ${service.description.slice(0, 120)}...`;
  const pageCanonical = `https://axentailabs.com/#services/${service.id}`;
  const keywords = `${service.title}, ${service.badge}, AxentAI Labs, digital presence, social growth agency, ${service.deliverables.slice(0, 4).join(', ')}`;

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
    <div className="pt-28 pb-20 bg-[#FFFFFF] min-h-screen text-[#111111] font-sans relative overflow-hidden">
      {/* Faint Atmospheric Soft Mint Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(229, 245, 229, 0.45) 0%, rgba(255, 255, 255, 1) 70%), linear-gradient(135deg, #FFFFFF 0%, #F7F9F7 52%, #FFFFFF 100%)',
        }}
      />

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
            <button
              onClick={onBackToHome}
              className="hover:text-[#246B32] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                onBackToHome();
                setTimeout(() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="hover:text-[#246B32] transition-colors"
            >
              Services
            </a>
            <span>/</span>
            <span className="text-[#111111] font-semibold">{service.title}</span>
          </nav>

          <Button
            variant="outline"
            size="sm"
            onClick={onBackToHome}
            className="rounded-full text-xs font-semibold border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] hover:border-[#459B45] hover:text-[#246B32]"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            Back to All Services
          </Button>
        </div>

        {/* Hero Header for Service */}
        <div className="bg-[#F7F9F7] border border-[#E5E9E5] shadow-sm rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className={`${service.id === 'product-hunt-launch' ? 'lg:col-span-8' : 'lg:col-span-12 max-w-3xl'} space-y-4`}>
              
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs font-bold text-[#246B32] bg-[#E5F5E5] px-3 py-1 rounded-full border border-[#E5E9E5]">
                  {service.badge}
                </span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                  {service.resultsMetric}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-display font-bold text-[#111111] tracking-tight">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg font-medium text-[#246B32] leading-snug">
                {service.tagline}
              </p>

              <p className="text-sm text-[#555B55] leading-relaxed font-sans max-w-2xl">
                {service.description}
              </p>

              {service.id === 'product-hunt-launch' ? (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  {service.portfolioUrl && (
                    <a
                      href={service.portfolioUrl}
                      id="service-card-view-launch-portfolio-btn"
                      onClick={(e) => {
                        if (
                          service.portfolioUrl?.startsWith('/') &&
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !e.shiftKey &&
                          !e.altKey &&
                          e.button === 0
                        ) {
                          e.preventDefault();
                          if (onOpenPortfolio) {
                            onOpenPortfolio();
                          } else {
                            window.history.pushState({}, '', service.portfolioUrl);
                            window.dispatchEvent(new PopStateEvent('popstate'));
                          }
                        }
                      }}
                      className="portfolio-highlight-glow inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] border border-[#459B45] hover:border-[#246B32] shadow-xs hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#459B45] focus-visible:ring-offset-2 transition-all duration-300 cursor-pointer group"
                    >
                      <span className="relative flex h-2 w-2 mr-0.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#459B45] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#246B32]" />
                      </span>
                      <span>View Launch Portfolio</span>
                      <ArrowRight className="w-4 h-4 text-[#246B32] transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  )}

                  <Button
                    onClick={onOpenBooking}
                    size="lg"
                    className="bg-[#FFFFFF] hover:bg-[#F7F9F7] text-[#111111] hover:text-[#246B32] font-semibold rounded-full px-6 py-3 border border-[#E5E9E5] hover:border-[#459B45] shadow-xs hover:-translate-y-0.5 cursor-pointer text-xs sm:text-sm transition-all"
                  >
                    <span>Discuss Your Launch</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              ) : (
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Button
                    onClick={onOpenBooking}
                    size="lg"
                    className="bg-[#459B45] hover:bg-[#246B32] text-white font-semibold rounded-full px-7 shadow-md shadow-[#459B45]/20 cursor-pointer"
                  >
                    <span>Book a Strategy Call</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  {service.portfolioUrl && (
                    <a
                      href={service.portfolioUrl}
                      onClick={(e) => {
                        if (
                          service.portfolioUrl?.startsWith('/') &&
                          !e.metaKey &&
                          !e.ctrlKey &&
                          !e.shiftKey &&
                          !e.altKey &&
                          e.button === 0
                        ) {
                          e.preventDefault();
                          window.history.pushState({}, '', service.portfolioUrl);
                          window.dispatchEvent(new PopStateEvent('popstate'));
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-[#FFFFFF] text-[#111111] border border-[#E5E9E5] shadow-xs hover:border-[#459B45] hover:text-[#246B32] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                      <span>View My Portfolio</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                  )}
                </div>
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
            
            {/* Scope Deliverables Card */}
            <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-8 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-1">
                  What's Included in This Service
                </h2>
                <p className="text-xs text-[#555B55] font-sans">
                  Tailored deliverables planned and executed directly with your leadership team.
                </p>
              </div>

              <div className="space-y-3">
                {service.deliverables.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E5F5E5] text-[#246B32] border border-[#E5E9E5] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#111111]">
                        {item}
                      </h3>
                      <p className="text-xs text-[#555B55] mt-0.5 leading-relaxed">
                        Executed to institutional quality, aligned with your market timing and growth targets.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Process */}
            <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-8 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111] mb-1">
                  Execution Methodology
                </h2>
                <p className="text-xs text-[#555B55]">
                  Disciplined 4-phase delivery ensuring consistent output and continuous optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#459B45]">01 — Understand</span>
                  <h3 className="text-sm font-semibold text-[#111111]">Brand & Audience Discovery</h3>
                  <p className="text-xs text-[#555B55] leading-relaxed">
                    Analyzing domain context, competitor positioning, and target buyer personas.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#459B45]">02 — Strategize</span>
                  <h3 className="text-sm font-semibold text-[#111111]">Content & Distribution Architecture</h3>
                  <p className="text-xs text-[#555B55] leading-relaxed">
                    Developing editorial calendars, narrative angles, and creator target profiles.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#459B45]">03 — Execute</span>
                  <h3 className="text-sm font-semibold text-[#111111]">Active Production & Engagement</h3>
                  <p className="text-xs text-[#555B55] leading-relaxed">
                    Managing daily publishing, organic community conversations, and creator coordination.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] space-y-2">
                  <span className="font-mono text-xs font-bold text-[#459B45]">04 — Optimize</span>
                  <h3 className="text-sm font-semibold text-[#111111]">Analytics & Performance Review</h3>
                  <p className="text-xs text-[#555B55] leading-relaxed">
                    Iterating based on empirical profile reach, lead quality, and engagement depth.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience Fit */}
            <div className="bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs rounded-3xl p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#111111]">
                Who This Is Built For
              </h2>
              <div className="p-4 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] text-xs text-[#555B55]">
                <span className="font-bold block mb-1 text-[#246B32]">Ideal Engagement Profile:</span>
                {service.idealFor}
              </div>
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
                  Book a direct 30-minute strategy call with Founder Shivam Kushwaha to assess your current presence and plan execution.
                </p>
              </div>

              <Button
                onClick={onOpenBooking}
                className="w-full justify-center bg-[#459B45] hover:bg-[#246B32] text-white font-semibold rounded-full py-3 shadow-sm shadow-[#459B45]/25 cursor-pointer text-xs"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book a Strategy Call</span>
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
                    <span>Email Direct</span>
                  </span>
                  <span className="text-[10px] text-[#555B55] font-mono truncate">{CONTACT_INFO.email}</span>
                </a>
              </div>

              {/* Other Services Switcher */}
              <div className="pt-4 border-t border-[#E5E9E5]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#555B55] block mb-3">
                  Other Services
                </span>
                <div className="space-y-1.5">
                  {otherServices.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => onSelectService(s.id)}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-[#FFFFFF] text-xs font-medium text-[#555B55] hover:text-[#111111] flex items-center justify-between transition-colors group cursor-pointer"
                    >
                      <span className="truncate pr-2">{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#459B45] shrink-0" />
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
