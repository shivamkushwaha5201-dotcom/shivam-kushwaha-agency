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
  MessageSquare
} from 'lucide-react';
import { Button } from './ui/button';
import { SERVICES_DATA, CONTACT_INFO } from '../data/portfolioData';
import { SEOHead } from './SEOHead';

interface ServicePageProps {
  serviceId: string;
  onBackToHome: () => void;
  onOpenBooking: () => void;
  onOpenAudit?: () => void;
  onSelectService: (id: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  serviceId,
  onBackToHome,
  onOpenBooking,
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
    <div className="pt-28 pb-20 bg-[#090A0F] min-h-screen text-slate-100 font-sans">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={pageCanonical}
        keywords={keywords}
        jsonLd={serviceJsonLd}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#181C28]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-400">
            <button
              onClick={onBackToHome}
              className="hover:text-blue-400 transition-colors cursor-pointer"
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
              className="hover:text-blue-400 transition-colors"
            >
              Services
            </a>
            <span>/</span>
            <span className="text-white font-semibold">{service.title}</span>
          </nav>

          <Button
            variant="outline"
            size="sm"
            onClick={onBackToHome}
            className="rounded-full text-xs font-semibold border-slate-700 bg-[#10131E] text-slate-300 hover:border-blue-500 hover:text-white"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            Back to All Services
          </Button>
        </div>

        {/* Hero Header for Service */}
        <div className="bg-[#0F121C] border border-[#1E2333] rounded-3xl p-8 sm:p-12 mb-10 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                {service.badge}
              </span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                {service.resultsMetric}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg font-medium text-blue-400 leading-snug">
              {service.tagline}
            </p>

            <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-2xl">
              {service.description}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Button
                onClick={onOpenBooking}
                size="lg"
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-full px-7 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Scope (Col 1-2) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Scope Deliverables Card */}
            <div className="bg-[#0F121C] border border-[#1E2333] rounded-3xl p-8 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                  What's Included in This Service
                </h2>
                <p className="text-xs text-slate-400 font-sans">
                  Tailored deliverables planned and executed directly with your leadership team.
                </p>
              </div>

              <div className="space-y-3">
                {service.deliverables.map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3.5 p-4 rounded-xl bg-[#141824] border border-[#212738]"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {item}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        Executed to institutional quality, aligned with your market timing and growth targets.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Execution Process */}
            <div className="bg-[#0F121C] border border-[#1E2333] rounded-3xl p-8 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                  Execution Methodology
                </h2>
                <p className="text-xs text-slate-400">
                  Disciplined 4-phase delivery ensuring consistent output and continuous optimization.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#141824] border border-[#212738] space-y-2">
                  <span className="font-mono text-xs font-bold text-blue-400">01 — Understand</span>
                  <h3 className="text-sm font-semibold text-white">Brand & Audience Discovery</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Analyzing domain context, competitor positioning, and target buyer personas.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#141824] border border-[#212738] space-y-2">
                  <span className="font-mono text-xs font-bold text-blue-400">02 — Strategize</span>
                  <h3 className="text-sm font-semibold text-white">Content & Distribution Architecture</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Developing editorial calendars, narrative angles, and creator target profiles.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#141824] border border-[#212738] space-y-2">
                  <span className="font-mono text-xs font-bold text-blue-400">03 — Execute</span>
                  <h3 className="text-sm font-semibold text-white">Active Production & Engagement</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Managing daily publishing, organic community conversations, and creator coordination.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#141824] border border-[#212738] space-y-2">
                  <span className="font-mono text-xs font-bold text-blue-400">04 — Optimize</span>
                  <h3 className="text-sm font-semibold text-white">Analytics & Performance Review</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Iterating based on empirical profile reach, lead quality, and engagement depth.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience Fit */}
            <div className="bg-[#0F121C] border border-[#1E2333] rounded-3xl p-8 space-y-4">
              <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
                Who This Is Built For
              </h2>
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                <span className="font-bold block mb-1">Ideal Engagement Profile:</span>
                {service.idealFor}
              </div>
            </div>

          </div>

          {/* Sidebar (Col 3) */}
          <div className="space-y-6">
            <div className="sticky top-28 bg-[#0F121C] border border-[#1E2333] rounded-3xl p-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400">
                  Direct Consultation
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Ready to deploy {service.title}?
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Book a direct 30-minute strategy call with Founder Shivam Kushwaha to assess your current presence and plan execution.
                </p>
              </div>

              <Button
                onClick={onOpenBooking}
                className="w-full justify-center bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-full py-3 shadow-sm shadow-blue-500/25 cursor-pointer text-xs"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book a Strategy Call</span>
              </Button>

              {/* Direct channels */}
              <div className="pt-4 border-t border-[#1E2333] space-y-2 text-xs">
                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#141824] text-slate-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">{CONTACT_INFO.phone}</span>
                </a>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#141824] text-slate-300 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>Email Direct</span>
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono truncate">{CONTACT_INFO.email}</span>
                </a>
              </div>

              {/* Other Services Switcher */}
              <div className="pt-4 border-t border-[#1E2333]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Other Services
                </span>
                <div className="space-y-1.5">
                  {otherServices.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => onSelectService(s.id)}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-[#141824] text-xs font-medium text-slate-300 hover:text-blue-400 flex items-center justify-between transition-colors group cursor-pointer"
                    >
                      <span className="truncate pr-2">{s.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 shrink-0" />
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
