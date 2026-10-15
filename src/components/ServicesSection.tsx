import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, Check, ExternalLink } from 'lucide-react';
import { SERVICES_DATA } from '../data/portfolioData';
import productHuntCatMascotPng from '../assets/images/product_hunt_cat_megaphone_transparent.png';
import productHuntCatMascotWebp from '../assets/images/product_hunt_cat_megaphone_transparent.webp';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onViewService?: (serviceId: string) => void;
  onOpenPortfolio?: () => void;
}

const headerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const serviceListContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.06,
    },
  },
};

const serviceCardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 0.985,
  },
  visible: (idx: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 17,
      mass: 0.85,
      delay: idx * 0.14,
      opacity: {
        duration: 0.55,
        delay: idx * 0.14,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }),
};

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ 
  onOpenBooking,
  onViewService,
  onOpenPortfolio
}) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <section 
      id="services" 
      className="py-32 bg-[#08060F] text-[#F8F6FF] border-t border-[#30213F] relative overflow-hidden font-sans z-10"
    >
      {/* Faint Atmospheric Gradient Matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(17, 11, 32, 0.95) 0%, rgba(8, 6, 15, 1) 70%), linear-gradient(135deg, #08060F 0%, #110B20 52%, #08060F 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-3xl mb-20 space-y-4 relative z-20"
        >
          {/* Eyebrow */}
          <motion.div
            variants={headerItemVariants}
            className="text-xs uppercase tracking-[0.25em] text-[#B69AFF] font-semibold font-mono"
          >
            // CORE PRACTICE AREAS
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8F6FF] tracking-[-0.02em]"
          >
            Strategic Visibility &amp;{' '}
            <span className="bg-gradient-to-r from-[#7028D8] via-[#9D6BFF] to-[#B69AFF] bg-clip-text text-transparent">
              Category Authority.
            </span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={headerItemVariants}
            className="text-sm sm:text-base text-[#B7AEC9] leading-relaxed font-sans max-w-2xl font-normal"
          >
            We focus exclusively on organic founder authority, executive page operations, and creator syndication—transforming quiet technology companies into industry-defining voices.
          </motion.p>
        </motion.div>

        {/* Editorial Service List (Luxury Agency Format) */}
        <motion.div
          variants={serviceListContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="space-y-4"
        >
          {SERVICES_DATA.map((service, idx) => {
            const isHovered = hoveredService === service.id;
            const isProductHuntService = service.id === 'product-hunt-launch';

            return (
              <motion.div
                key={service.id}
                custom={idx}
                variants={serviceCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
              >
                <div
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 relative group overflow-hidden bg-[#100B1B] ${
                    isHovered 
                      ? 'border-[#7028D8]/70 ring-1 ring-[#B69AFF]/20 shadow-[0_12px_32px_-6px_rgba(112,40,216,0.3)] -translate-y-0.5 bg-[#151020]' 
                      : 'border-[#30213F] shadow-xs hover:border-[#7028D8]/70 hover:ring-1 hover:ring-[#B69AFF]/20 hover:shadow-[0_12px_32px_-6px_rgba(112,40,216,0.3)] hover:-translate-y-0.5 hover:bg-[#151020]'
                  }`}
                >
                  {/* Subtle Top Edge & Radial Border Glow Overlay on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B69AFF]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#7028D8]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {isProductHuntService ? (
                    /* Balanced Two-Column Layout for Product Hunt Launch Support: Content Left, Cat Mascot Right */
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                      {/* Left Column: Index, Title, Description, Deliverables & Action Buttons */}
                      <div className="lg:col-span-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                        <div className="shrink-0">
                          <span className="font-mono text-2xl sm:text-3xl font-bold text-[#B69AFF]/50 group-hover:text-[#B69AFF] transition-colors">
                            0{idx + 1}
                          </span>
                        </div>

                        <div className="space-y-5 flex-1">
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#B69AFF] bg-[#110B20] px-2.5 py-0.5 rounded-full border border-[#30213F]">
                                {service.badge}
                              </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-[#F8F6FF] tracking-tight uppercase font-display group-hover:text-[#B69AFF] transition-colors">
                              {service.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-[#B7AEC9] leading-relaxed max-w-xl font-normal">
                              {service.description}
                            </p>
                          </div>

                          {/* Deliverables */}
                          <div className="space-y-2.5 pt-1">
                            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#F8F6FF] block">
                              Deliverables
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                              {service.deliverables.slice(0, 4).map((del, dIdx) => (
                                <div 
                                  key={dIdx}
                                  className="inline-flex items-center gap-2 text-xs text-[#B7AEC9]"
                                >
                                  <Check className="w-3 h-3 text-[#B69AFF] shrink-0" />
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="pt-2 flex flex-wrap items-center gap-4">
                            <button
                              onClick={() => onViewService ? onViewService(service.id) : (window.location.hash = `#services/${service.id}`)}
                              className="text-xs font-semibold text-[#B69AFF] hover:text-[#F8F6FF] inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-0.5"
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
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-[#7028D8] text-[#F8F6FF] border border-[#B69AFF]/30 shadow-md shadow-[#7028D8]/30 hover:bg-[#833AE8] hover:border-[#B69AFF]/50 hover:shadow-lg hover:shadow-[#7028D8]/45 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7028D8] focus-visible:ring-offset-2 transition-all duration-200 whitespace-nowrap cursor-pointer"
                              >
                                <span>View My Portfolio</span>
                                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                              </a>
                            )}

                            <button
                              onClick={onOpenBooking}
                              className="text-[11px] font-medium text-[#B7AEC9] hover:text-[#B69AFF] transition-colors cursor-pointer whitespace-nowrap"
                            >
                              Book Call →
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Uploaded Cat Mascot Illustration with Transparent Background (Vertically Centered) */}
                      <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
                        <div className="w-[200px] sm:w-[240px] lg:w-[270px] flex items-center justify-center bg-transparent select-none">
                          <picture className="w-full block bg-transparent">
                            <source srcSet={productHuntCatMascotWebp} type="image/webp" />
                            <img
                              src={productHuntCatMascotPng}
                              alt="Product Hunt Launch Support Cat Mascot"
                              className="w-full max-h-[260px] h-auto object-contain bg-transparent block mx-auto"
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              decoding="async"
                            />
                          </picture>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                      
                      {/* Column 1: Index Number */}
                      <div className="lg:col-span-1">
                        <span className="font-mono text-2xl sm:text-3xl font-bold text-[#B69AFF]/50 group-hover:text-[#B69AFF] transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Column 2: Title & Description */}
                      <div className="lg:col-span-6 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#B69AFF] bg-[#110B20] px-2.5 py-0.5 rounded-full border border-[#30213F]">
                            {service.badge}
                          </span>
                          {service.id === 'influencer-marketing' && (
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#B7AEC9]">
                              <span>LinkedIn</span>
                              <span>•</span>
                              <span>X / Twitter</span>
                              <span>•</span>
                              <span>Instagram</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#F8F7FF] tracking-tight uppercase font-display group-hover:text-[#B69AFF] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#B7AEC9] leading-relaxed max-w-lg font-normal">
                          {service.description}
                        </p>
                      </div>

                      {/* Column 3: Scope Deliverables */}
                      <div className="lg:col-span-3 space-y-2.5">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#F8F7FF] block">
                          Deliverables
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {service.deliverables.slice(0, 3).map((del, dIdx) => (
                            <div 
                              key={dIdx}
                              className="inline-flex items-center gap-2 text-xs text-[#B7AEC9]"
                            >
                              <Check className="w-3 h-3 text-[#B69AFF] shrink-0" />
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
                            className="text-xs font-semibold text-[#B69AFF] hover:text-[#F8F7FF] inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
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
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-[#B69AFF] hover:text-white bg-[#110B20] hover:bg-[#7028D8] border border-[#30213F] hover:border-[#7028D8] shadow-xs hover:shadow-md hover:shadow-[#7028D8]/20 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer"
                            >
                              <span>View My Portfolio</span>
                              <ExternalLink className="w-3 h-3 shrink-0" />
                            </a>
                          )}
                        </div>

                        <button
                          onClick={onOpenBooking}
                          className="text-[11px] font-medium text-[#B7AEC9] hover:text-[#B69AFF] transition-colors cursor-pointer whitespace-nowrap"
                        >
                          Book Call →
                        </button>
                      </div>

                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
});
