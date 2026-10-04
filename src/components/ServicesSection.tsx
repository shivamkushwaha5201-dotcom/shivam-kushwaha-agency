import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onViewService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onOpenBooking,
  onViewService 
}) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section 
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
                'radial-gradient(ellipse at center left, rgba(2, 6, 15, 0.86) 0%, rgba(2, 6, 15, 0.60) 40%, rgba(2, 6, 15, 0.22) 70%, transparent 100%)',
            }}
          />
          <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold font-mono drop-shadow-[0_2px_10px_rgba(2,6,15,0.95)]">
            // CORE PRACTICE AREAS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] drop-shadow-[0_4px_24px_rgba(2,6,15,0.95)]">
            Strategic Visibility & Category Authority.
          </h2>
          <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-sans max-w-2xl font-normal drop-shadow-[0_2px_14px_rgba(2,6,15,0.98)]">
            We focus exclusively on organic founder authority, executive page operations, and creator syndication—transforming quiet technology companies into industry-defining voices.
          </p>
        </div>

        {/* Editorial Service List (Luxury Agency Format) */}
        <div className="space-y-4">
          {SERVICES_DATA.map((service, idx) => {
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 relative group overflow-hidden ${
                  isHovered 
                    ? 'bg-[#030814]/95 border-blue-400/40 shadow-2xl shadow-blue-500/10 -translate-y-0.5' 
                    : 'bg-[#030814]/84 border-white/10 hover:border-white/20'
                }`}
              >
                {/* Subtle Electric Blue Light Glow on Hover */}
                {isHovered && (
                  <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-blue-500/10 via-sky-400/5 to-transparent pointer-events-none" />
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Column 1: Index Number */}
                  <div className="lg:col-span-1">
                    <span className="font-mono text-2xl sm:text-3xl font-bold text-[#94A3B8]/70 group-hover:text-[#38BDF8] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Column 2: Title & Description */}
                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#38BDF8] bg-[#3B82F6]/10 px-2.5 py-0.5 rounded-full border border-[#3B82F6]/25">
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
                          <Check className="w-3 h-3 text-[#38BDF8] shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Column 4: Interaction Action */}
                  <div className="lg:col-span-2 flex lg:flex-col lg:items-end justify-between items-center gap-4 pt-2 lg:pt-0">
                    <button
                      onClick={() => onViewService ? onViewService(service.id) : (window.location.hash = `#services/${service.id}`)}
                      className="text-xs font-semibold text-[#38BDF8] hover:text-white inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
                    >
                      <span>EXPLORE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={onOpenBooking}
                      className="text-[11px] font-medium text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
                    >
                      Book Call →
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
