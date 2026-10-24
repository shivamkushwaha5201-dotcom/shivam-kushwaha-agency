import React, { useEffect, useRef } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import heroCatWebp from '../assets/images/hero_cat_transparent.webp';
import heroCatPng from '../assets/images/hero_cat_transparent.png';
import { scrollCoordinator } from '../lib/scrollCoordinator';
import { CurvedGridBackground } from './ui/CurvedGridBackground';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];

const labelVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.05,
      ease: easeOutExpo,
    },
  },
};

const headlineVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.16,
      ease: easeOutExpo,
    },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.28,
      ease: easeOutExpo,
    },
  },
};

const ctaVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.4,
      ease: easeOutExpo,
    },
  },
};

const proofRowVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.52,
      ease: easeOutExpo,
    },
  },
};

const visualEntranceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.95,
      delay: 0.2,
      ease: easeOutExpo,
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Smooth desktop scroll parallax coordination
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let sectionHeight = el.offsetHeight || 800;

    const updateMetrics = () => {
      if (!sectionRef.current) return;
      sectionHeight = sectionRef.current.offsetHeight || 800;
    };

    const unsubscribe = scrollCoordinator.subscribe(
      (m) => {
        if (!parallaxRef.current) return false;
        if (m.winWidth < 1024) {
          parallaxRef.current.style.transform = 'translate3d(0, 0, 0)';
          return false;
        }
        if (m.scrollY <= sectionHeight * 1.5) {
          const progress = Math.min(1, Math.max(0, m.scrollY / sectionHeight));
          const offsetY = (progress * -24).toFixed(1);
          parallaxRef.current.style.transform = `translate3d(0, ${offsetY}px, 0)`;
        }
        return false;
      },
      () => {
        updateMetrics();
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[92vh] lg:min-h-[96vh] pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-[#FFFFFF] text-[#111111] flex items-center z-10"
    >
      {/* Curved Perspective Grid & Mint Atmospheric Background (Matching Reference Screenshot) */}
      <CurvedGridBackground showOrbs={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Side — Content (Typography & Badges matching Screenshot) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 text-left relative z-20">
            
            {/* 1. Pill Badge: "• GLOBAL DIGITAL GROWTH" */}
            <motion.div
              variants={labelVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45] animate-pulse" />
                <span>GLOBAL DIGITAL GROWTH</span>
              </div>
            </motion.div>

            {/* 2. Main Focal Headline: "BUILD INFLUENCE THAT TRAVELS FURTHER." */}
            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl lg:text-[66px] xl:text-[76px] font-display font-extrabold tracking-[-0.035em] text-[#111111] leading-[1.03] uppercase"
            >
              <span className="block text-[#111111]">
                BUILD INFLUENCE
              </span>
              <span className="block mt-1">
                THAT{' '}
                <span className="text-[#248A3D]">
                  TRAVELS
                </span>
              </span>
              <span className="block mt-1 text-[#248A3D]">
                FURTHER.
              </span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-[19px] text-[#555B55] font-sans leading-[1.68] max-w-xl font-normal"
            >
              We help founders, startups and brands build visibility through personal branding, organic social growth, Product Hunt launches and creator partnerships.
            </motion.p>

            {/* 4. Action Buttons (Primary Green Pill + Secondary Bordered Pill) */}
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              className="pt-1 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Button
                  id="hero-primary-cta"
                  size="lg"
                  onClick={onOpenBooking}
                  className="bg-gradient-to-r from-[#246B32] via-[#2F853E] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-xs sm:text-sm font-semibold tracking-wide px-8 py-4 rounded-full border border-[#459B45]/30 shadow-[0_10px_26px_rgba(36,107,50,0.32)] hover:shadow-[0_14px_34px_rgba(36,107,50,0.44)] hover:-translate-y-0.5 active:translate-y-0 group transition-all duration-300 cursor-pointer justify-center"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#246B32] bg-[#FFFFFF] hover:bg-[#F7F9F7] text-[#111111] hover:text-[#246B32] hover:border-[#1E5B2A] text-xs sm:text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-xs"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* 5. Trust Row: 3 Verified Checkmarks matching Reference Screenshot */}
            <motion.div
              variants={proofRowVariants}
              initial="hidden"
              animate="visible"
              className="pt-4 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-[#222222]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Founder Authority</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Global Organic Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Verified Metrics Only</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side — Cat with Headphones & Laptop with Subtle Floating Motion, Mint Glow & Floating Brand Badges */}
          <motion.div
            variants={visualEntranceVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative z-10"
          >
            {/* Parallax & Floating Wrapper */}
            <div
              ref={parallaxRef}
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
              }}
              className="relative w-full max-w-[400px] sm:max-w-[470px] lg:max-w-[510px] xl:max-w-[550px] flex items-center justify-center select-none"
            >
              {/* Soft Mint-Green Atmospheric Glow Behind Cat (No Rectangular Card or Container) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 sm:-inset-12 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(69, 155, 69, 0.24) 0%, rgba(200, 240, 204, 0.38) 36%, rgba(235, 250, 236, 0.18) 58%, rgba(255, 255, 255, 0) 74%)',
                  filter: 'blur(42px)',
                }}
              />

              {/* Secondary Soft Ambient Aura */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-6 sm:inset-10 rounded-full"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 55%, rgba(69, 155, 69, 0.16) 0%, rgba(255, 255, 255, 0) 66%)',
                  filter: 'blur(30px)',
                }}
              />

              {/* Cat Image — Floats naturally with gentle vertical movement & subtle tilt */}
              <div className="relative z-10 w-full flex items-center justify-center">
                <picture className="w-full flex items-center justify-center">
                  <source srcSet={heroCatWebp} type="image/webp" />
                  <img
                    src={heroCatPng}
                    alt="AxentAI Labs - Digital Growth & Personal Branding"
                    className="w-full h-auto max-h-[460px] sm:max-h-[520px] lg:max-h-[560px] object-contain drop-shadow-[0_20px_45px_rgba(36,107,50,0.13)] cat-gentle-float select-none pointer-events-auto"
                    decoding="async"
                    fetchPriority="high"
                    width={1333}
                    height={1180}
                  />
                </picture>
              </div>

              {/* Floating Official Brand Badges Around Cat */}
              
              {/* Badge 1 (Top-Left): Product Hunt Launches (Official Brand Color #FF6154) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="badge-float-1 absolute -top-3 left-3 sm:left-8 z-30 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E9E5] shadow-[0_10px_25px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FF6154] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-xs">
                  P
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#111111]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#459B45] animate-pulse" />
                    <span>Product Hunt</span>
                  </div>
                  <span className="text-[10px] text-[#555B55] block -mt-0.5">Launches</span>
                </div>
              </motion.div>

              {/* Badge 2 (Top-Right): X Growth (Official Brand Color #000000) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="badge-float-2 absolute -top-2 right-1 sm:right-6 z-30 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E9E5] shadow-[0_10px_25px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#000000] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-xs">
                  𝕏
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#111111]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#459B45] animate-pulse" />
                    <span>X Growth</span>
                  </div>
                  <span className="text-[10px] text-[#246B32] font-semibold flex items-center gap-0.5 -mt-0.5">
                    <TrendingUp className="w-2.5 h-2.5" />
                    <span>Organic Scale</span>
                  </span>
                </div>
              </motion.div>

              {/* Badge 3 (Mid-Left): LinkedIn Personal Branding (Official Brand Color #0A66C2) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: -10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="badge-float-3 absolute top-1/2 -left-3 sm:-left-7 -translate-y-1/2 z-30 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E9E5] shadow-[0_10px_25px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-xs">
                  in
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#111111]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#459B45] animate-pulse" />
                    <span>LinkedIn</span>
                  </div>
                  <span className="text-[10px] text-[#555B55] block -mt-0.5">Personal Branding</span>
                </div>
              </motion.div>

              {/* Badge 4 (Bottom-Right): Reddit Community (Official Brand Color #FF4500) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="badge-float-4 absolute bottom-6 -right-1 sm:right-4 z-30 flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/95 backdrop-blur-md border border-[#E5E9E5] shadow-[0_10px_25px_rgba(0,0,0,0.06),0_2px_4px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#FF4500] flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-xs">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="currentColor"/>
                    <path d="M16.67 13.13a1.5 1.5 0 0 0-1.5-1.5c-.32 0-.61.1-.85.27-1-.69-2.38-1.14-3.92-1.18l.8-3.77 2.62.56a1.2 1.2 0 1 0 .26-.78l-2.95-.63a.3.3 0 0 0-.35.23l-.91 4.29c-1.57.03-2.98.48-4 1.18a1.5 1.5 0 0 0-.85-.27 1.5 1.5 0 0 0-1.06 2.56c-.05.21-.08.43-.08.65 0 2.27 2.64 4.12 5.9 4.12s5.9-1.85 5.9-4.12c0-.22-.03-.44-.08-.65a1.5 1.5 0 0 0 .72-1.28z" fill="white"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-[#111111]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#459B45] animate-pulse" />
                    <span>Reddit</span>
                  </div>
                  <span className="text-[10px] text-[#555B55] block -mt-0.5">Community</span>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Floating Keyframes for Hero Cat & Social Badges */}
      <style>{`
        @keyframes catGentleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-9px) rotate(0.65deg);
          }
        }
        .cat-gentle-float {
          animation: catGentleFloat 5.6s ease-in-out infinite;
          will-change: transform;
          transform-origin: 50% 80%;
          backface-visibility: hidden;
        }

        @keyframes badgeFloat1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes badgeFloat2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes badgeFloat3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes badgeFloat4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }

        .badge-float-1 { animation: badgeFloat1 4.8s ease-in-out infinite; }
        .badge-float-2 { animation: badgeFloat2 5.2s ease-in-out infinite 0.6s; }
        .badge-float-3 { animation: badgeFloat3 5.8s ease-in-out infinite 1.2s; }
        .badge-float-4 { animation: badgeFloat4 4.5s ease-in-out infinite 0.3s; }
      `}</style>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
