import React, { useEffect, useRef } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import heroChessVisual from '../assets/images/hero_chess_queen_visual_1791791412226.jpg';
import { scrollCoordinator } from '../lib/scrollCoordinator';

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

const queenEntranceVariants: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.95,
      delay: 0.22,
      ease: easeOutExpo,
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Subtle desktop-only scroll parallax (disabled on mobile for smooth touch scrolling)
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
        if (m.scrollY <= sectionHeight * 1.2) {
          const progress = Math.min(1, Math.max(0, m.scrollY / sectionHeight));
          const offsetY = (progress * -22).toFixed(1);
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
      className="relative min-h-[90vh] lg:min-h-[94vh] pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden bg-[#08060F] text-[#F8F6FF] flex items-center z-10"
    >
      {/* Faint Atmospheric Gradient Across Hero Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 18% 22%, rgba(17, 11, 32, 0.95) 0%, rgba(8, 6, 15, 1) 70%), linear-gradient(135deg, #08060F 0%, #110B20 52%, #08060F 100%)',
        }}
      />

      {/* Ambient Purple Lighting Glow Behind the Right Column */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-8%] lg:right-[4%] -translate-y-1/2 w-[380px] h-[380px] sm:w-[520px] sm:h-[520px] lg:w-[640px] lg:h-[640px] rounded-full z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(112, 40, 216, 0.28) 0%, rgba(182, 154, 255, 0.11) 42%, rgba(8, 6, 15, 0) 72%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Subtle Secondary Top-Left Ambient Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full z-0"
        style={{
          background:
            'radial-gradient(circle, rgba(112, 40, 216, 0.14) 0%, rgba(17, 11, 32, 0) 70%)',
          filter: 'blur(32px)',
        }}
      />

      {/* Ultra-Subtle Architectural Grid Overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-35"
        style={{
          backgroundSize: '56px 56px',
          backgroundImage:
            'linear-gradient(to right, rgba(182, 154, 255, 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(182, 154, 255, 0.045) 1px, transparent 1px)',
          maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, #000 30%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 70% at 50% 45%, #000 30%, transparent 100%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left Side — Content (Shown first on mobile and left on desktop) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 text-left relative z-20">
            {/* 1. Small Premium Pill Label */}
            <motion.div
              variants={labelVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#110B20]/90 border border-[#B69AFF]/30 shadow-[0_0_24px_rgba(112,40,216,0.28)] text-[11px] font-mono font-semibold tracking-[0.22em] text-[#B69AFF] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69AFF] shadow-[0_0_8px_#B69AFF] animate-pulse" />
                <span>GLOBAL DIGITAL GROWTH</span>
              </div>
            </motion.div>

            {/* 2. Main Focal Headline */}
            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="text-[38px] sm:text-6xl lg:text-[66px] xl:text-[76px] font-display font-extrabold tracking-[-0.035em] text-[#F8F6FF] leading-[1.03]"
            >
              <span className="block text-[#F8F6FF]">
                BUILD <span className="text-[#FFFFFF]">INFLUENCE</span>
              </span>
              <span className="block mt-1">
                THAT{' '}
                <span className="bg-gradient-to-r from-[#7028D8] via-[#9D6BFF] to-[#B69AFF] bg-clip-text text-transparent">
                  TRAVELS
                </span>
              </span>
              <span className="block mt-1 bg-gradient-to-r from-[#7028D8] via-[#9D6BFF] to-[#B69AFF] bg-clip-text text-transparent">
                FURTHER.
              </span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-[19px] text-[#B7AEC9] font-sans leading-[1.68] max-w-xl font-normal"
            >
              We help founders, startups and brands build visibility through personal branding, organic social growth, Product Hunt launches and creator partnerships.
            </motion.p>

            {/* 4. Clear CTA Buttons + Social Proof Line */}
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
                  className="bg-gradient-to-r from-[#7028D8] via-[#833AE8] to-[#9855F6] hover:from-[#7D35E5] hover:via-[#8F47F2] hover:to-[#A668FF] text-[#F8F6FF] text-xs sm:text-sm font-semibold tracking-[0.1em] uppercase px-8 py-4 rounded-full border border-[#B69AFF]/30 shadow-[0_8px_30px_rgba(112,40,216,0.45)] hover:shadow-[0_12px_38px_rgba(112,40,216,0.65)] hover:-translate-y-0.5 active:translate-y-0 group transition-all duration-300 cursor-pointer justify-center"
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#B69AFF]/35 bg-transparent hover:bg-[#110B20]/85 text-[#F8F6FF] hover:text-[#B69AFF] hover:border-[#B69AFF]/70 text-xs sm:text-sm font-semibold tracking-[0.1em] uppercase hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  Explore Services
                </a>
              </div>

              {/* Social Proof Line */}
              <p className="text-xs sm:text-[13px] font-sans font-medium tracking-wide text-[#B7AEC9] pl-0.5">
                Trusted by <span className="text-[#F8F6FF] font-semibold">50+ Founders</span>
                <span className="mx-2 text-[#B69AFF]/60" aria-hidden="true">·</span>
                <span className="text-[#B69AFF] font-semibold">Global Startups &amp; AI Leaders</span>
              </p>
            </motion.div>

            {/* 5. Subtle Supporting Divider Row */}
            <motion.div
              variants={proofRowVariants}
              initial="hidden"
              animate="visible"
              className="pt-7 border-t border-[#B69AFF]/15 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-[#B7AEC9] font-mono"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7028D8] shadow-[0_0_8px_#7028D8]" />
                <span>Founder Authority</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B69AFF]" />
                <span>Global Organic Reach</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CE8]" />
                <span>Verified Metrics Only</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side — Dominant Chess Queen Visual */}
          <motion.div
            variants={queenEntranceVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative z-10"
          >
            {/* Parallax Wrapper (Desktop Only) */}
            <div
              ref={parallaxRef}
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
              }}
              className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[500px] xl:max-w-[540px] flex items-center justify-center select-none"
            >
              {/* Radial Purple Glow Behind the Chess Queen */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 sm:-inset-10 rounded-[36px]"
                style={{
                  background:
                    'radial-gradient(circle at 50% 48%, rgba(112, 40, 216, 0.42) 0%, rgba(182, 154, 255, 0.16) 46%, rgba(8, 6, 15, 0) 74%)',
                  filter: 'blur(28px)',
                }}
              />

              {/* Continuous Subtle 8px Floating Animation Wrapper (5.2s loop) */}
              <div className="hero-queen-float relative w-full">
                {/* Premium Visual Frame with Softly Rounded Corners, Subtle Lavender Border & Ambient Glow */}
                <div className="relative w-full overflow-hidden rounded-[28px] border border-[#B69AFF]/25 bg-gradient-to-b from-[#110B20] via-[#0B0716] to-[#08060F] shadow-[0_24px_80px_-12px_rgba(112,40,216,0.45)]">
                  {/* Top Specular Lavender Hairline Highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#B69AFF]/55 to-transparent z-20"
                  />

                  <img
                    src={heroChessVisual}
                    alt="Strategic Category Authority Visual"
                    className="w-full h-auto max-h-[520px] sm:max-h-[580px] lg:max-h-[650px] object-contain block mx-auto relative z-10"
                    decoding="async"
                    fetchPriority="high"
                  />

                  {/* Natural Edge Blending Vignettes into the #08060F / #110B20 Hero Frame */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#110B20]/75 via-[#110B20]/20 to-transparent z-20"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#08060F]/85 via-[#08060F]/30 to-transparent z-20"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-inset ring-[#B69AFF]/15 z-20"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth 8px Vertical Floating Keyframes for the Chess Queen Visual */}
      <style>{`
        @keyframes heroQueenFloat {
          0%, 100% {
            transform: translate3d(0, 0px, 0);
          }
          50% {
            transform: translate3d(0, -8px, 0);
          }
        }
        .hero-queen-float {
          animation: heroQueenFloat 5.2s ease-in-out infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
});
