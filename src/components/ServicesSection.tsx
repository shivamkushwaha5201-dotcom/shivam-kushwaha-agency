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
      className="py-32 bg-[#F7F9F7] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Faint Atmospheric Gradient Matching Theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(229, 245, 229, 0.45) 0%, rgba(247, 249, 247, 1) 70%), linear-gradient(135deg, #F7F9F7 0%, #FFFFFF 52%, #F7F9F7 100%)',
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
            className="text-xs uppercase tracking-[0.25em] text-[#246B32] font-semibold font-mono"
          >
            // CORE PRACTICE AREAS
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={headerItemVariants}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] tracking-[-0.02em]"
          >
            Strategic Visibility &amp;{' '}
            <span className="bg-gradient-to-r from-[#246B32] via-[#459B45] to-[#459B45] bg-clip-text text-transparent">
              Category Authority.
            </span>
          </motion.h2>

          {/* Supporting Text */}
          <motion.p
            variants={headerItemVariants}
            className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans max-w-2xl font-normal"
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
                  className={`p-8 sm:p-10 rounded-2xl border transition-all duration-300 relative group overflow-hidden bg-[#FFFFFF] ${
                    isHovered 
                      ? 'border-[#459B45] ring-1 ring-[#459B45]/20 shadow-[0_12px_32px_-6px_rgba(69,155,69,0.18)] -translate-y-0.5' 
                      : 'border-[#E5E9E5] shadow-xs hover:border-[#459B45] hover:ring-1 hover:ring-[#459B45]/20 hover:shadow-[0_12px_32px_-6px_rgba(69,155,69,0.18)] hover:-translate-y-0.5'
                  }`}
                >
                  {/* Subtle Top Edge & Radial Border Glow Overlay on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#459B45]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#459B45]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {isProductHuntService ? (
                    /* Balanced Two-Column Layout for Product Hunt Launch Support: Content Left, Cat Mascot Right */
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-10 items-center relative z-10">
                      {/* Left Column: Index, Title, Description, Deliverables & Action Buttons */}
                      <div className="md:col-span-7 lg:col-span-8 flex flex-col sm:flex-row gap-5 sm:gap-7 items-start">
                        <div className="shrink-0">
                          <span className="font-mono text-2xl sm:text-3xl font-bold text-[#459B45]/60 group-hover:text-[#246B32] transition-colors">
                            0{idx + 1}
                          </span>
                        </div>

                        <div className="space-y-5 flex-1 min-w-0">
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#246B32] bg-[#E5F5E5] px-2.5 py-0.5 rounded-full border border-[#459B45]/30">
                                {service.badge}
                              </span>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight uppercase font-display group-hover:text-[#246B32] transition-colors">
                              {service.title}
                            </h3>

                            <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed max-w-xl font-normal">
                              {service.description}
                            </p>
                          </div>

                          {/* Deliverables: 7 key deliverables */}
                          <div className="space-y-2.5 pt-1">
                            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#111111] block">
                              What We Prepare Together
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
                              {service.deliverables.map((del, dIdx) => (
                                <div 
                                  key={dIdx}
                                  className="inline-flex items-start gap-2 text-xs text-[#555B55] leading-snug"
                                >
                                  <Check className="w-3.5 h-3.5 text-[#459B45] shrink-0 mt-0.5" />
                                  <span>{del}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons: Primary & Secondary CTAs */}
                          <div className="pt-2 flex flex-wrap items-center gap-3.5">
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
                                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#459B45] text-[#FFFFFF] border border-[#459B45]/40 shadow-md shadow-[#459B45]/20 hover:bg-[#246B32] hover:border-[#246B32] hover:shadow-lg hover:shadow-[#459B45]/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#459B45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF] transition-all duration-200 cursor-pointer whitespace-nowrap"
                              >
                                <span>View My Portfolio</span>
                                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                              </a>
                            )}

                            <button
                              type="button"
                              onClick={onOpenBooking}
                              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide bg-[#FFFFFF] text-[#111111] border border-[#E5E9E5] hover:bg-[#F7F9F7] hover:text-[#246B32] hover:border-[#459B45]/60 shadow-xs hover:shadow-md hover:shadow-[#459B45]/15 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#459B45] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFFFFF] transition-all duration-200 cursor-pointer whitespace-nowrap"
                            >
                              <span>Discuss Your Launch</span>
                              <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                            </button>

                            <button
                              type="button"
                              onClick={() => onViewService ? onViewService(service.id) : (window.location.hash = `#services/${service.id}`)}
                              className="text-xs font-medium text-[#555B55] hover:text-[#246B32] transition-colors cursor-pointer inline-flex items-center gap-1 px-1 py-1"
                            >
                              <span>Explore Details</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Right Column: Uploaded Cat Mascot Illustration */}
                      <div className="md:col-span-5 lg:col-span-4 flex items-center justify-center md:justify-end">
                        <div className="w-[190px] sm:w-[220px] md:w-[240px] lg:w-[270px] flex items-center justify-center bg-transparent select-none">
                          <picture className="w-full block bg-transparent">
                            <source srcSet={productHuntCatMascotWebp} type="image/webp" />
                            <img
                              src={productHuntCatMascotPng}
                              alt="Product Hunt Launch Support Cat Mascot"
                              className="w-full max-h-[260px] sm:max-h-[280px] h-auto object-contain bg-transparent block mx-auto select-none"
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
                        <span className="font-mono text-2xl sm:text-3xl font-bold text-[#459B45]/60 group-hover:text-[#246B32] transition-colors">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Column 2: Title & Description */}
                      <div className="lg:col-span-6 space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#246B32] bg-[#E5F5E5] px-2.5 py-0.5 rounded-full border border-[#459B45]/30">
                            {service.badge}
                          </span>
                          {service.id === 'influencer-marketing' && (
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#555B55]">
                              <span>LinkedIn</span>
                              <span>•</span>
                              <span>X / Twitter</span>
                              <span>•</span>
                              <span>Instagram</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight uppercase font-display group-hover:text-[#246B32] transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed max-w-lg font-normal">
                          {service.description}
                        </p>
                      </div>

                      {/* Column 3: Scope Deliverables */}
                      <div className="lg:col-span-3 space-y-2.5">
                        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#111111] block">
                          Deliverables
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {service.deliverables.slice(0, 3).map((del, dIdx) => (
                            <div 
                              key={dIdx}
                              className="inline-flex items-center gap-2 text-xs text-[#555B55]"
                            >
                              <Check className="w-3 h-3 text-[#459B45] shrink-0" />
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
                            className="text-xs font-semibold text-[#246B32] hover:text-[#459B45] inline-flex items-center gap-1.5 transition-colors cursor-pointer group-hover:translate-x-1"
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
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide text-[#246B32] hover:text-white bg-[#E5F5E5] hover:bg-[#459B45] border border-[#459B45]/30 hover:border-[#459B45] shadow-xs hover:shadow-md hover:shadow-[#459B45]/20 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap cursor-pointer"
                            >
                              <span>View My Portfolio</span>
                              <ExternalLink className="w-3 h-3 shrink-0" />
                            </a>
                          )}
                        </div>

                        <button
                          onClick={onOpenBooking}
                          className="text-[11px] font-medium text-[#555B55] hover:text-[#246B32] transition-colors cursor-pointer whitespace-nowrap"
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
