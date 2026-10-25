import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  UserCheck, 
  Share2, 
  Layers, 
  Megaphone, 
  Sparkles, 
  TrendingUp, 
  Rocket
} from 'lucide-react';
import { Button } from './ui/button';
import { FloatingParticles } from './ui/FloatingParticles';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onViewService?: (serviceId: string) => void;
  onOpenPortfolio?: () => void;
}

// Icon mapping helper for supporting services
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'UserCheck':
      return <UserCheck className="w-5 h-5 text-[#246B32]" />;
    case 'Share2':
      return <Share2 className="w-5 h-5 text-[#246B32]" />;
    case 'Layers':
      return <Layers className="w-5 h-5 text-[#246B32]" />;
    case 'Megaphone':
      return <Megaphone className="w-5 h-5 text-[#246B32]" />;
    case 'Sparkles':
      return <Sparkles className="w-5 h-5 text-[#246B32]" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-[#246B32]" />;
    default:
      return <Rocket className="w-5 h-5 text-[#246B32]" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ 
  onOpenBooking,
  onViewService,
  onOpenPortfolio,
}) => {
  const flagshipService = SERVICES_DATA.find(s => s.id === 'product-hunt-launch');
  const supportingServices = SERVICES_DATA.filter(s => s.id !== 'product-hunt-launch');

  const handleServiceClick = (serviceId: string) => {
    if (onViewService) {
      onViewService(serviceId);
    } else {
      window.location.hash = `#services/${serviceId}`;
    }
  };

  const handlePortfolioNavigation = (e: React.MouseEvent) => {
    if (
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
        window.history.pushState({}, '', '/portfolio');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  return (
    <section 
      id="services" 
      className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#FFFFFF] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Anchor for any existing #product-hunt links to smoothly scroll to this flagship feature */}
      <span id="product-hunt" className="absolute -top-28 block invisible" aria-hidden="true" />

      {/* Subtle Ambient Mint Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-70" />
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(69, 155, 69, 0.09) 0%, rgba(229, 245, 229, 0.35) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Subtle floating particles behind the service cards */}
        <FloatingParticles variant="services" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* 1. Services Page Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3.5 text-left relative z-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#246B32] uppercase">
            <span>GROWTH SERVICES</span>
            <span aria-hidden="true">·</span>
            <span>AXENTAI LABS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase leading-tight">
            STRATEGIC GROWTH SERVICES <br className="hidden sm:inline" />
            <span className="text-[#248A3D]">FOR STARTUPS &amp; MODERN BRANDS</span>
          </h2>

          <p className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-2xl font-normal">
            AxentAI Labs provides digital growth and marketing services for startups, SaaS founders, and technology brands. Product Hunt Launch Support is our flagship service and represents approximately 65% of our business focus, complemented by dedicated multi-channel growth systems.
          </p>
        </motion.div>

        {/* 2. SECTION A — FLAGSHIP SERVICE (Highest Prominence, Full Width, Pale Mint Glow) */}
        {flagshipService && (
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl bg-gradient-to-br from-[#EAF7EA] via-[#F3FAF3] to-[#EAF7EA] border-2 border-[#459B45]/45 p-7 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden"
          >
            {/* Subtle Pale Mint Radial Ambient Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#CDECCF]/50 blur-3xl"
            />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8 sm:gap-10">
              <div className="space-y-5 max-w-3xl">
                {/* Visual Label */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#246B32] font-mono font-semibold">
                  <span className="inline-flex items-center gap-1.5 bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#CDECCF] shadow-2xs">
                    <Rocket className="w-4 h-4 text-[#246B32]" />
                    <span className="uppercase tracking-wider">FLAGSHIP SERVICE</span>
                  </span>
                  <span className="bg-[#FFFFFF] px-3.5 py-1.5 rounded-full border border-[#E5E9E5] text-[#555B55]">
                    ~65% Business Focus
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
                    Product Hunt Launch Support
                  </h3>
                  <p className="mt-1.5 text-sm sm:text-base font-medium text-[#246B32]">
                    Strategic positioning, launch-day coordination, and organic distribution for technology startups.
                  </p>
                </div>

                {/* Short Description */}
                <p className="text-sm sm:text-base text-[#444C44] leading-relaxed font-sans">
                  A successful launch requires disciplined preparation and real-time execution. We help founders refine product positioning, prepare launch assets, coordinate launch-day outreach, and build an organic distribution plan without artificial tactics or false promises.
                </p>

                {/* Deliverables Displayed as Concise Checkmarked Items */}
                <div className="pt-2 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                    What You Will Receive (Core Deliverables)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#222222]">
                    {flagshipService.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2.5 bg-[#FFFFFF] border border-[#CDECCF] px-4 py-2.5 rounded-xl shadow-2xs font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#246B32] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Clear Disclaimer */}
                <p className="text-[11px] font-mono text-[#555B55] pt-1">
                  * Direct strategic advisory and organic preparation. We do not promise guaranteed rankings, votes, or launch results.
                </p>
              </div>

              {/* Action Column for Flagship Service */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3.5 shrink-0 pt-2 lg:pt-2 w-full lg:w-auto">
                {/* Primary CTA */}
                <Button
                  size="lg"
                  onClick={onOpenBooking}
                  className="bg-gradient-to-r from-[#246B32] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-sm font-semibold px-7 py-3.5 rounded-full border border-[#459B45]/40 shadow-sm hover:shadow-md transition-all cursor-pointer justify-center"
                >
                  <span>Plan Your Product Hunt Launch</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Secondary CTA */}
                <a
                  href="/portfolio"
                  id="services-view-launch-portfolio-btn"
                  onClick={handlePortfolioNavigation}
                  className="portfolio-highlight-glow inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#459B45] bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap group shadow-2xs"
                >
                  <span className="relative flex h-2 w-2 mr-0.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#459B45] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#246B32]" />
                  </span>
                  <span>View Launch Portfolio</span>
                  <ArrowRight className="w-4 h-4 text-[#246B32] transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                {/* Full Details Navigation */}
                <button
                  type="button"
                  onClick={() => handleServiceClick('product-hunt-launch')}
                  className="text-xs text-[#555B55] hover:text-[#246B32] font-semibold underline underline-offset-4 cursor-pointer pt-1"
                >
                  Full Service Specifications &amp; Methodology →
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. SECTION B — OTHER SERVICES */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#246B32] uppercase">
              <span>SUPPORTING SERVICES</span>
              <span aria-hidden="true">·</span>
              <span>MULTI-CHANNEL DISTRIBUTION</span>
            </div>
            {/* Clear Heading as Requested */}
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#111111] tracking-tight">
              More Ways We Help You Grow
            </h3>
            <p className="text-sm sm:text-base text-[#555B55] max-w-2xl font-sans">
              Dedicated organic marketing programs designed for sustained founder authority, company page credibility, creator partnerships, and ongoing audience reach.
            </p>
          </div>

          {/* Clean, Consistent 3-Column Grid on Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#459B45]/60 hover:shadow-sm transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-2xl bg-[#E5F5E5] border border-[#CDECCF] flex items-center justify-center">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#246B32] bg-[#F7F9F7] border border-[#E5E9E5] px-2.5 py-0.5 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#246B32] transition-colors">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-[#246B32]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description: What service is offered */}
                  <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans min-h-[48px]">
                    {service.description}
                  </p>

                  {/* Deliverables: What will the client receive */}
                  <div className="pt-3 border-t border-[#F0F2F0] space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                      Key Deliverables
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#222222]">
                      {service.deliverables.slice(0, 4).map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: What is the next step */}
                <div className="pt-5 mt-5 border-t border-[#F0F2F0] flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => handleServiceClick(service.id)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#246B32]" />
                  </button>

                  <Button
                    size="sm"
                    onClick={onOpenBooking}
                    className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-3.5 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                  >
                    Discuss Service
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
