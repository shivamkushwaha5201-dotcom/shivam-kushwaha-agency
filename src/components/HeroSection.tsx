import React from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onOpenBooking }) => {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] lg:min-h-[92vh] pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-[#000000] text-[#F8FAFC] flex items-center z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl space-y-8 text-left relative z-20"
        >
          {/* Eyebrow Label */}
          <motion.div
            variants={fadeInUpVariants}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#080B12] border border-white/15 text-[11px] font-mono font-medium tracking-[0.22em] text-[#7BA7F7] uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#5B8FE8]" />
            <span>GLOBAL DIGITAL GROWTH</span>
          </motion.div>

          {/* Main Headline (Clean, Large, Confident Editorial Style) */}
          <motion.h1
            variants={fadeInUpVariants}
            className="text-4xl sm:text-6xl lg:text-[76px] font-display font-extrabold tracking-[-0.03em] text-[#F5F7FA] leading-[1.04]"
          >
            BUILD INFLUENCE <br />
            THAT TRAVELS <br />
            <span className="text-[#6B9BF0]">
              FURTHER.
            </span>
          </motion.h1>

          {/* Supporting Copy (Restrained, Confident, Generous Leading, Clean Contrast) */}
          <motion.p
            variants={fadeInUpVariants}
            className="text-base sm:text-lg text-[#CBD5E1] font-sans leading-relaxed max-w-xl font-normal"
          >
            We help founders, startups and brands build visibility through personal branding, organic social growth, Product Hunt launches and creator partnerships.
          </motion.p>

          {/* Luxury Action Row + Social Proof Line */}
          <motion.div
            variants={fadeInUpVariants}
            className="pt-2 space-y-3.5"
          >
            <div className="flex flex-wrap items-center gap-4">
              <Button
                id="hero-primary-cta"
                size="lg"
                onClick={onOpenBooking}
                className="bg-[#5B8FE8] hover:bg-[#4F7FD1] text-[#F5F7FA] text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full shadow-md shadow-black/40 group transition-colors cursor-pointer"
              >
                <span>BOOK A STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <a
                href="#services"
                className="px-7 py-3.5 rounded-full border border-white/15 bg-[#080B12] text-[#F5F7FA] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-white/25 hover:text-[#A9C7FF] transition-colors cursor-pointer"
              >
                EXPLORE SERVICES
              </a>
            </div>

            {/* Small, text-based social proof line directly below main hero buttons */}
            <p className="text-xs sm:text-[13px] font-sans font-medium tracking-wide text-[#94A3B8] pl-1">
              Trusted by <span className="text-[#F5F7FA] font-semibold">50+ Founders</span>
              <span className="mx-2 text-white/20" aria-hidden="true">·</span>
              <span className="text-[#7BA7F7]">Global Startups &amp; AI Leaders</span>
            </p>
          </motion.div>

          {/* Subtle Negative-Space Line */}
          <motion.div
            variants={fadeInUpVariants}
            className="pt-8 border-t border-white/15 flex flex-wrap items-center gap-7 text-xs text-[#94A3B8] font-mono"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B8FE8]" />
              <span>Founder Authority</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7BA7F7]" />
              <span>Global Organic Reach</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Verified Metrics Only</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});
