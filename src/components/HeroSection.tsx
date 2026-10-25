import React, { useEffect, useRef } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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
          const offsetY = (progress * -20).toFixed(1);
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
      className="relative min-h-[92vh] lg:min-h-[96vh] pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FFFFFF] text-[#111111] flex items-center z-10"
    >
      {/* Curved Perspective Grid & Mint Atmospheric Background (Matching Reference Screenshot) */}
      <CurvedGridBackground showOrbs={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Side — Content (Preserving existing typography, CTAs & badges) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 text-left relative z-20">
            
            {/* 1. Pill Eyebrow: "• PRODUCT HUNT LAUNCH & GROWTH" */}
            <motion.div
              variants={labelVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45] animate-pulse" />
                <span>PRODUCT HUNT LAUNCH &amp; GROWTH</span>
              </div>
            </motion.div>

            {/* 2. Main Focal Headline: "LAUNCH SMARTER. GROW FASTER." */}
            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl lg:text-[66px] xl:text-[76px] font-display font-extrabold tracking-[-0.035em] text-[#111111] leading-[1.02] uppercase"
            >
              <span className="block text-[#111111]">
                LAUNCH SMARTER.
              </span>
              <span className="block mt-1 text-[#248A3D]">
                GROW FASTER.
              </span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-[19px] text-[#555B55] font-sans leading-[1.68] max-w-xl font-normal"
            >
              We help SaaS founders prepare, launch and promote their products on Product Hunt through strategic positioning, launch-day coordination and organic distribution.
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
                  <span>Plan Your Product Hunt Launch</span>
                  <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>

                <a
                  href="#product-hunt"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#246B32] bg-[#FFFFFF] hover:bg-[#F7F9F7] text-[#111111] hover:text-[#246B32] hover:border-[#1E5B2A] text-xs sm:text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-xs"
                >
                  Explore Launch Services
                </a>
              </div>
            </motion.div>

            {/* 5. Trust Row: Launch Strategy · Organic Distribution · Founder-Focused Support */}
            <motion.div
              variants={proofRowVariants}
              initial="hidden"
              animate="visible"
              className="pt-4 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-[#222222]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Launch Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Organic Distribution</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Founder-Focused Support</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side — Cat with Headphones & Laptop with 3D Social Icons (Product Hunt, X, LinkedIn, Reddit) */}
          <motion.div
            variants={visualEntranceVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative z-10 w-full"
          >
            {/* Parallax & Visual Stage Wrapper */}
            <div
              ref={parallaxRef}
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
              }}
              className="relative w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[470px] md:max-w-[500px] lg:max-w-[520px] xl:max-w-[560px] mx-auto select-none pt-4 pb-2"
            >
              {/* Soft Mint-Green Ambient Glow Behind Cat (Seamless blending into page) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 sm:-inset-10 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(69, 155, 69, 0.22) 0%, rgba(200, 240, 204, 0.36) 38%, rgba(235, 250, 236, 0.16) 60%, rgba(255, 255, 255, 0) 75%)',
                  filter: 'blur(38px)',
                }}
              />

              {/* Cat and Laptop Image Layer with Floor Contact Shadow */}
              <div className="relative z-20 w-full flex flex-col items-center justify-center">
                <picture className="w-full flex items-center justify-center">
                  <source srcSet={heroCatWebp} type="image/webp" />
                  <img
                    src={heroCatPng}
                    alt="AxentAI Labs - Cat with headphones working on laptop"
                    className="w-full h-auto max-h-[430px] sm:max-h-[490px] lg:max-h-[530px] xl:max-h-[560px] object-contain cat-gentle-float select-none pointer-events-auto"
                    decoding="async"
                    fetchPriority="high"
                    width={1333}
                    height={1180}
                  />
                </picture>

                {/* Realistic floor contact shadow grounding the cat and laptop seamlessly on the page */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none -mt-3.5 sm:-mt-5 w-[84%] h-6 sm:h-7 rounded-[100%] bg-gradient-to-r from-transparent via-[#111111]/15 to-transparent blur-md"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none -mt-4 w-[60%] h-2.5 sm:h-3 rounded-[100%] bg-gradient-to-r from-transparent via-[#246B32]/14 to-transparent blur-xs"
                />
              </div>

              {/* Thin Subtle Dotted Connector Lines & Playful Signals (SVG Overlay) */}
              <svg
                aria-hidden="true"
                className="absolute inset-0 w-full h-full pointer-events-none z-15 select-none"
                viewBox="0 0 520 520"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="dotted-green-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#248A3D" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#459B45" stopOpacity="0.22" />
                  </linearGradient>
                </defs>

                {/* 1. Dotted curve from Product Hunt badge down towards cat */}
                <path
                  d="M 185 64 Q 215 90 240 145"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />

                {/* 2. Dotted curve from X badge & tile down towards cat */}
                <path
                  d="M 405 85 Q 380 115 330 155"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />

                {/* 3. Dotted curve from LinkedIn badge towards cat's side */}
                <path
                  d="M 110 255 Q 148 245 180 270"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />

                {/* 4. Dotted curve from Reddit badge towards laptop */}
                <path
                  d="M 420 290 Q 375 295 340 320"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="3 4"
                  strokeLinecap="round"
                />

                {/* Playful green radiation signal lines directly above cat's headphones */}
                <g className="spark-pulse-1 origin-[260px_122px]">
                  <path d="M 246 130 L 238 114" stroke="#248A3D" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 260 125 L 260 108" stroke="#248A3D" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 274 130 L 282 114" stroke="#248A3D" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Upward green growth trend arrow near X icon */}
                <g className="spark-pulse-2 origin-[446px_94px]">
                  <path
                    d="M 432 106 L 448 90 M 448 90 L 436 90 M 448 90 L 448 102"
                    stroke="#248A3D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Subtle floating ambient green sparkles matching reference */}
                <circle cx="210" cy="182" r="3" fill="#34A853" opacity="0.65" className="spark-pulse-1" />
                <circle cx="368" cy="226" r="3" fill="#34A853" opacity="0.55" className="spark-pulse-2" />
                <circle cx="298" cy="88" r="2.5" fill="#34A853" opacity="0.5" className="spark-pulse-1" />
              </svg>

              {/* 1. TOP-LEFT: Product Hunt — Launch Support */}
              <div className="float-badge-ph absolute -top-3 sm:-top-5 left-[6%] sm:left-[14%] z-30 flex flex-col items-start gap-1 sm:gap-1.5">
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">Product Hunt</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Launch Support</span>
                  </div>
                </div>
                
                {/* 3D Glossy App Tile */}
                <div 
                  className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF6756] via-[#FF503D] to-[#E03B28] flex items-center justify-center text-white font-extrabold text-lg sm:text-2xl shadow-[0_14px_28px_-4px_rgba(234,60,40,0.42),inset_0_2px_3px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-white/40 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 ml-3 sm:ml-4 cursor-default select-none"
                  title="Product Hunt Launch Support"
                >
                  P
                </div>
              </div>

              {/* 2. TOP-RIGHT: X — Organic Reach */}
              <div className="float-badge-x absolute -top-2 sm:-top-4 right-[2%] sm:right-[6%] z-30 flex flex-col items-end gap-1 sm:gap-1.5">
                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">X</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Organic Reach</span>
                  </div>
                </div>

                {/* 3D Glossy App Tile */}
                <div 
                  className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#262B30] via-[#14181B] to-[#0A0D10] flex items-center justify-center text-white shadow-[0_14px_28px_-4px_rgba(10,13,16,0.45),inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-white/20 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 mr-1 sm:mr-2 cursor-default select-none"
                  title="X Organic Reach"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>

              {/* 3. MID-LEFT: LinkedIn — Founder Visibility */}
              <div className="float-badge-li absolute top-[40%] left-0 sm:-left-6 z-30 flex flex-col items-start gap-1 sm:gap-1.5">
                {/* 3D Glossy App Tile */}
                <div 
                  className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0B7CE6] via-[#0A66C2] to-[#004B91] flex items-center justify-center text-white shadow-[0_14px_28px_-4px_rgba(10,102,194,0.42),inset_0_2px_3px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-white/40 transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 ml-1 cursor-default select-none"
                  title="LinkedIn Founder Visibility"
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">LinkedIn</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Founder Visibility</span>
                  </div>
                </div>
              </div>

              {/* 4. BOTTOM-RIGHT: Reddit — Community Discovery */}
              <div className="float-badge-reddit absolute bottom-[12%] right-0 sm:right-1 z-30 flex flex-col items-end sm:items-start gap-1 sm:gap-1.5">
                {/* 3D Glossy App Tile */}
                <div 
                  className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF5722] via-[#FF4500] to-[#E03400] flex items-center justify-center text-white shadow-[0_14px_28px_-4px_rgba(255,69,0,0.42),inset_0_2px_3px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-white/40 transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 mr-1 sm:ml-2 cursor-default select-none"
                  title="Reddit Community Discovery"
                >
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" fillOpacity="0.15" />
                    <path d="M16.5 12C15.9 12 15.4 12.3 15.1 12.7C14.2 12.1 13.1 11.7 11.9 11.6L12.6 8.3L14.9 8.8C15 9.5 15.6 10 16.3 10C17.1 10 17.8 9.3 17.8 8.5C17.8 7.7 17.1 7 16.3 7C15.7 7 15.2 7.4 15 7.9L12.3 7.3C12.1 7.3 11.9 7.4 11.9 7.6L11 11.6C9.8 11.7 8.7 12.1 7.8 12.7C7.5 12.3 7 12 6.4 12C5.4 12 4.6 12.8 4.6 13.8C4.6 14.4 4.9 15 5.4 15.3C5.3 15.6 5.3 15.9 5.3 16.2C5.3 18.7 8.1 20.7 11.5 20.7C14.9 20.7 17.7 18.7 17.7 16.2C17.7 15.9 17.7 15.6 17.6 15.3C18.1 15 18.4 14.4 18.4 13.8C18.4 12.8 17.5 12 16.5 12ZM8.5 14.5C9.1 14.5 9.5 15 9.5 15.5C9.5 16 9.1 16.5 8.5 16.5C7.9 16.5 7.5 16 7.5 15.5C7.5 15 7.9 14.5 8.5 14.5ZM13.8 18.8C12.9 19.3 11.1 19.3 10.2 18.8C10 18.7 10 18.4 10.1 18.2C10.2 18 10.5 18 10.7 18.1C11.3 18.4 12.7 18.4 13.3 18.1C13.5 18 13.8 18 13.9 18.2C14 18.4 14 18.7 13.8 18.8ZM14.5 16.5C13.9 16.5 13.5 16 13.5 15.5C13.5 15 13.9 14.5 14.5 14.5C15.1 14.5 15.5 15 15.5 15.5C15.5 16 15.1 16.5 14.5 16.5Z" fill="white"/>
                  </svg>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">Reddit</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Community Discovery</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Smooth, Lightweight Keyframes for Hero Cat & 3D Badges (GPU Transform Only) */}
      <style>{`
        @keyframes catGentleFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.4deg);
          }
        }
        .cat-gentle-float {
          animation: catGentleFloat 5.6s ease-in-out infinite;
          will-change: transform;
          transform-origin: 50% 85%;
          backface-visibility: hidden;
        }

        @keyframes floatBadgePH {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes floatBadgeX {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatBadgeLI {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes floatBadgeReddit {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes sparkPulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.25); opacity: 1; }
        }

        .float-badge-ph { animation: floatBadgePH 4.8s ease-in-out infinite; }
        .float-badge-x { animation: floatBadgeX 5.2s ease-in-out infinite 0.7s; }
        .float-badge-li { animation: floatBadgeLI 5.8s ease-in-out infinite 1.3s; }
        .float-badge-reddit { animation: floatBadgeReddit 4.6s ease-in-out infinite 0.4s; }
        .spark-pulse-1 { animation: sparkPulse 3.2s ease-in-out infinite; }
        .spark-pulse-2 { animation: sparkPulse 3.8s ease-in-out infinite 1s; }

        @media (prefers-reduced-motion: reduce) {
          .cat-gentle-float,
          .float-badge-ph,
          .float-badge-x,
          .float-badge-li,
          .float-badge-reddit,
          .spark-pulse-1,
          .spark-pulse-2 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
