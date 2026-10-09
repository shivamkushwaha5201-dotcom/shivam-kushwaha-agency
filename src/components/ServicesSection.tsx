import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
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
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Trigger right-to-left staggered reveal once via IntersectionObserver
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setIsRevealed(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="py-32 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4 relative z-20">
          {/* Subtle localized dark atmospheric gradient behind header text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-10 sm:-inset-x-16 sm:-inset-y-12 -z-10"
            style={{
              background:
                'radial-gradient(ellipse at center left, rgba(8, 11, 18, 0.86) 0%, rgba(8, 11, 18, 0.60) 40%, rgba(8, 11, 18, 0.22) 70%, transparent 100%)',
            }}
          />

          {/* Eyebrow -> 0ms delay */}
          <div
            style={{ transitionDelay: '0ms' }}
            className={`services-reveal-item ${
              isRevealed ? 'services-revealed' : ''
            } text-xs uppercase tracking-[0.25em] text-[#60A5FA] font-semibold font-mono text-contrast-shadow`}
          >
            // CORE PRACTICE AREAS
          </div>

          {/* Heading -> 80ms delay */}
          <h2
            style={{ transitionDelay: '80ms' }}
            className={`services-reveal-item ${
              isRevealed ? 'services-revealed' : ''
            } text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] heading-contrast-shadow`}
          >
            Strategic Visibility &amp; Category Authority.
          </h2>

          {/* Supporting Text -> 160ms delay */}
          <p
            style={{ transitionDelay: '160ms' }}
            className={`services-reveal-item ${
              isRevealed ? 'services-revealed' : ''
            } text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-sans max-w-2xl font-normal text-contrast-shadow`}
          >
            We focus exclusively on organic founder authority, executive page operations, and creator syndication—transforming quiet technology companies into industry-defining voices.
          </p>
        </div>

        {/* Editorial Service List (Luxury Agency Format) */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, idx) => {
            const isHovered = hoveredService === service.id;
            // Stagger: 1st -> 220ms, 2nd -> 280ms, 3rd -> 340ms, etc.
            const staggerDelayMs = 220 + idx * 60;

            return (
              <div
                key={service.id}
                style={{ transitionDelay: `${staggerDelayMs}ms` }}
                className={`services-reveal-item ${
                  isRevealed ? 'services-revealed' : ''
                }`}
              >
                <div
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`p-8 sm:p-10 rounded-2xl border transition-[background-color,border-color,transform] duration-300 relative group overflow-hidden ${
                    isHovered 
                      ? 'bg-[#080B12]/95 border-[#3B82F6]/40 shadow-2xl shadow-blue-500/10 -translate-y-0.5' 
                      : 'bg-[#080B12]/84 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Subtle Electric Blue Light Glow on Hover */}
                  {isHovered && (
                    <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-[#3B82F6]/10 via-[#60A5FA]/5 to-transparent pointer-events-none" />
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                    
                    {/* Column 1: Index Number */}
                    <div className="lg:col-span-1">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-[#94A3B8]/70 group-hover:text-[#60A5FA] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Column 2: Title & Description */}
                    <div className="lg:col-span-6 space-y-3">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-[#60A5FA] bg-[#3B82F6]/10 px-2.5 py-0.5 rounded-full border border-[#3B82F6]/25">
                          {service.badge}
                        </span>
                        {service.id === 'influencer-marketing' && (
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#94A3B8]">
                            <span>LinkedIn</span>
                            <span>•</span>
                            <span>X / Twitter</span>
                            <span>•</span>
                            <span>Instagram</span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight uppercase font-display group-hover:text-white transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-lg font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Column 3: Scope Deliverables */}
                    <div className="lg:col-span-3 space-y-2.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#CBD5E1] block">
                        Deliverables
                      </span>
                      <div className="flex flex-col gap-1.5">
                        {service.deliverables.slice(0, 3).map((del, dIdx) => (
                          <div 
                            key={dIdx}
                            className="inline-flex items-center gap-2 text-xs text-[#E2E8F0]"
                          >
                            <Check className="w-3 h-3 text-[#60A5FA] shrink-0" />
                            <span>{del}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Column 4: Interaction Action */}
                    <div className="lg:col-span-2 flex flex-wrap lg:flex-col lg:items-end justify-between items-center gap-3 pt-2 lg:pt-0">
                      <div className="flex flex-wrap lg:flex-col lg:items-end items-center gap-2.5">
                        <button
                          onClick={() => onViewService ? onViewService(service.id) : (window.location.hash = `#services/${service.id}`)}
                          className="text-xs font-semibold text-[#60A5FA] hover:text-[#93C5FD] inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
                        >
                          <span>EXPLORE</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>

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
                                if (onOpenPortfolio) {
                                  onOpenPortfolio();
                                } else {
                                  window.history.pushState({}, '', service.portfolioUrl);
                                  window.dispatchEvent(new PopStateEvent('popstate'));
                                }
                              }
                            }}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-[#60A5FA] hover:text-white bg-[#3B82F6]/12 hover:bg-[#2563EB] border border-[#3B82F6]/35 hover:border-[#60A5FA]/70 shadow-[0_0_16px_rgba(59,130,246,0.14)] hover:shadow-[0_0_22px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer"
                          >
                            <span>View My Portfolio</span>
                            <ExternalLink className="w-3 h-3 shrink-0" />
                          </a>
                        )}
                      </div>

                      <button
                        onClick={onOpenBooking}
                        className="text-[11px] font-medium text-[#94A3B8] hover:text-[#93C5FD] transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Book Call →
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Hardware-accelerated right-to-left scroll reveal (40px on mobile, 60px on desktop) */}
      <style>{`
        .services-reveal-item {
          opacity: 0;
          transform: translate3d(40px, 0, 0);
          transition-property: transform, opacity;
          transition-duration: 700ms;
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
        @media (min-width: 768px) {
          .services-reveal-item {
            transform: translate3d(60px, 0, 0);
          }
        }
        .services-reveal-item.services-revealed {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          will-change: auto;
        }
      `}</style>
    </section>
  );
});
