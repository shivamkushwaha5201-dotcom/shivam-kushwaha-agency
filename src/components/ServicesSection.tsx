import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onViewService?: (serviceId: string) => void;
  onOpenPortfolio?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ 
  onOpenBooking,
  onViewService,
  onOpenPortfolio
}) => {
  return (
    <section 
      id="services" 
      className="py-24 sm:py-28 md:py-36 bg-[#F7F9F7] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Subtle Mint Ambient Gradient Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(229, 245, 229, 0.5) 0%, rgba(247, 249, 247, 1) 70%), linear-gradient(135deg, #F7F9F7 0%, #FFFFFF 52%, #F7F9F7 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header: Exact Copy and Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-4 text-left relative z-20"
        >
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45] animate-pulse" />
            <span>SERVICES &amp; CAPABILITIES</span>
          </div>

          {/* Section Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase">
            Strategic Visibility &amp; <span className="text-[#248A3D]">Category Authority.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-2xl font-normal">
            We focus exclusively on organic founder authority, executive page operations, and creator syndication—transforming quiet technology companies into industry-defining voices.
          </p>
        </motion.div>

        {/* Large Vertically Stacked Service Cards */}
        <div className="space-y-6 sm:space-y-8">
          {SERVICES_DATA.map((service, idx) => {
            const serviceNumber = `0${idx + 1}`;
            const isProductHunt = service.id === 'product-hunt-launch';

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:shadow-[0_16px_36px_-8px_rgba(69,155,69,0.14)] transition-all duration-300 p-6 sm:p-9 lg:p-11 shadow-xs"
              >
                {/* 3-Column Internal Structure: Left (Details), Middle (Deliverables), Right (Actions) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-start">
                  
                  {/* Column 1: Left — Service Number, Category Badge, Title & Description */}
                  <div className="lg:col-span-5 space-y-4">
                    {/* Number and Category Badge */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#459B45] tracking-widest">
                        {serviceNumber}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#EAF7EA] text-[#246B32] border border-[#CDECCF] text-xs font-semibold tracking-wide">
                        {service.badge}
                      </span>
                      {isProductHunt && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#FFF2EB] text-[#E03B28] border border-[#FFD5C2] text-[10px] font-bold uppercase tracking-wider">
                          Flagship
                        </span>
                      )}
                    </div>

                    {/* Bold Service Title */}
                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#246B32] transition-colors">
                      {service.title}
                    </h3>

                    {/* Descriptive Paragraph */}
                    <p className="text-sm sm:text-[15px] text-[#555B55] leading-relaxed font-sans">
                      {service.description}
                    </p>

                    {/* Results / Target Impact note */}
                    {service.resultsMetric && (
                      <div className="pt-1 text-xs font-medium text-[#246B32] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#459B45]" />
                        <span>Focus: {service.resultsMetric}</span>
                      </div>
                    )}
                  </div>

                  {/* Column 2: Middle — Clearly Labelled Deliverables List */}
                  <div className="lg:col-span-4 space-y-3.5 lg:border-l lg:border-[#F0F2F0] lg:pl-8">
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] font-bold text-[#246B32]">
                      DELIVERABLES
                    </div>

                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, dIdx) => (
                        <li 
                          key={dIdx} 
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222222] font-medium leading-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Right — Actions (Explore & Book Call) */}
                  <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col justify-start lg:items-end gap-3 pt-2 lg:pt-0 lg:border-l lg:border-[#F0F2F0] lg:pl-8">
                    {/* EXPLORE Link */}
                    <button
                      type="button"
                      onClick={() => {
                        if (onViewService) {
                          onViewService(service.id);
                        } else {
                          window.location.hash = `#services/${service.id}`;
                        }
                      }}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-[#D5DDD5] hover:border-[#246B32] bg-[#FFFFFF] hover:bg-[#F7F9F7] text-[#111111] hover:text-[#246B32] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 group/btn cursor-pointer w-full sm:w-auto lg:w-full shadow-2xs"
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-4 h-4 text-[#246B32] transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>

                    {/* BOOK CALL Button */}
                    <Button
                      size="sm"
                      onClick={onOpenBooking}
                      className="bg-gradient-to-r from-[#246B32] via-[#2F853E] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-xs sm:text-sm font-semibold tracking-wide px-6 py-3 rounded-full border border-[#459B45]/30 shadow-[0_4px_14px_rgba(36,107,50,0.22)] hover:shadow-[0_6px_18px_rgba(36,107,50,0.32)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer w-full sm:w-auto lg:w-full justify-center"
                    >
                      <span>BOOK CALL</span>
                    </Button>

                    {/* Specific portfolio link for Product Hunt */}
                    {isProductHunt && (
                      <a
                        href="/portfolio"
                        onClick={(e) => {
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
                        }}
                        className="inline-flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#555B55] hover:text-[#246B32] transition-colors pt-1 cursor-pointer w-full sm:w-auto lg:w-full text-center"
                      >
                        <span>View Launch Portfolio</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
