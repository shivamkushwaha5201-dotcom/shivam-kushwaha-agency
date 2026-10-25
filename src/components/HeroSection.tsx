import React, { useEffect, useRef } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import heroCatWebp from '../assets/images/hero_cat_transparent.webp';
import heroCatPng from '../assets/images/hero_cat_transparent.png';
import { scrollCoordinator } from '../lib/scrollCoordinator';
import { CurvedGridBackground } from './ui/CurvedGridBackground';
import { FloatingParticles } from './ui/FloatingParticles';

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
      className="scroll-mt-24 md:scroll-mt-28 relative min-h-[90vh] lg:min-h-[94vh] pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-transparent text-[#111111] flex items-center z-10"
    >
      {/* Curved Perspective Grid & Mint Atmospheric Background (Matching Reference Screenshot) */}
      <CurvedGridBackground showOrbs={true} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Side — Content (Preserving existing typography, CTAs & badges) */}
          <div className="lg:col-span-7 space-y-7 sm:space-y-8 text-left relative z-20">
            
            {/* 1. Eyebrow: AxentAI Labs • STRATEGY • LAUNCH • GROWTH */}
            <motion.div
              variants={labelVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF7EA]/95 border border-[#CDECCF] text-[11px] font-mono tracking-[0.18em] uppercase shadow-xs backdrop-blur-xs">
                <span className="hero-brand-contrast font-extrabold text-[#111111] [text-shadow:0_1px_2px_rgba(255,255,255,0.95),0_0_12px_rgba(255,255,255,0.85)] tracking-[0.14em]">
                  AxentAI Labs
                </span>
                <span className="text-[#248A3D] font-bold">•</span>
                <span className="font-semibold text-[#246B32]">STRATEGY • LAUNCH • GROWTH</span>
              </div>
            </motion.div>

            {/* 2. Main Focal Headline: SCALE YOUR BRAND ACROSS THE WORLD. */}
            <motion.h1
              variants={headlineVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-6xl lg:text-[60px] xl:text-[70px] font-display font-extrabold tracking-[-0.035em] text-[#111111] leading-[1.04] uppercase"
            >
              <span className="block text-[#111111]">
                SCALE YOUR BRAND
              </span>
              <span className="block mt-1 text-[#248A3D]">
                ACROSS THE WORLD.
              </span>
            </motion.h1>

            {/* 3. Supporting Description */}
            <motion.p
              variants={descriptionVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg lg:text-[19px] text-[#555B55] font-sans leading-[1.68] max-w-xl font-normal"
            >
              We help SaaS founders and modern brands launch products, build a strong online presence, grow founder authority, and reach relevant audiences through strategic marketing and distribution.
            </motion.p>

            {/* 4. Action Buttons (Primary: Explore Our Services, Secondary: Plan Your Product Hunt Launch) */}
            <motion.div
              variants={ctaVariants}
              initial="hidden"
              animate="visible"
              className="pt-1 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <a
                  id="hero-primary-cta"
                  href="#services"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#246B32] via-[#2F853E] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-xs sm:text-sm font-semibold tracking-wide px-8 py-4 rounded-full border border-[#459B45]/30 shadow-[0_10px_26px_rgba(36,107,50,0.32)] hover:shadow-[0_14px_34px_rgba(36,107,50,0.44)] hover:-translate-y-0.5 active:translate-y-0 group transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <Button
                  id="hero-secondary-cta"
                  size="lg"
                  onClick={onOpenBooking}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-[#246B32] bg-[#FFFFFF] hover:bg-[#F7F9F7] text-[#111111] hover:text-[#246B32] hover:border-[#1E5B2A] text-xs sm:text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-xs"
                >
                  Plan Your Product Hunt Launch
                </Button>
              </div>
            </motion.div>

            {/* 5. Trust Row: Product Launch Strategy · Founder & Brand Growth · Organic Distribution */}
            <motion.div
              variants={proofRowVariants}
              initial="hidden"
              animate="visible"
              className="pt-4 flex flex-wrap items-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-[#222222]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Product Launch Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Founder &amp; Brand Growth</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0" />
                <span>Organic Distribution</span>
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
              {/* Soft Mint-Green Ambient Glow & Flowing Curved Waves Behind Cat */}
              <div aria-hidden="true" className="pointer-events-none absolute -inset-6 sm:-inset-12 z-0 overflow-visible select-none">
                {/* 1. Primary Breathing Mint Glow */}
                <div
                  className="hero-mint-glow absolute inset-0 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 50% 50%, rgba(69, 155, 69, 0.32) 0%, rgba(163, 231, 172, 0.42) 35%, rgba(229, 245, 229, 0.25) 58%, rgba(255, 255, 255, 0) 75%)',
                    filter: 'blur(38px)',
                    animation: 'heroMintGlowPulse 5.4s ease-in-out infinite',
                  }}
                />

                {/* 2. Outer Soft Radiant Mint Aura */}
                <div
                  className="hero-mint-aura absolute -inset-6 rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle at 52% 48%, rgba(52, 168, 83, 0.2) 0%, rgba(200, 240, 204, 0.32) 42%, rgba(255, 255, 255, 0) 72%)',
                    filter: 'blur(52px)',
                    animation: 'heroMintAuraBreathe 7.2s ease-in-out infinite 0.8s',
                  }}
                />

                {/* 3. Elegant Flowing Curved Green Waves Behind Cat (Matching Reference Image) */}
                <svg
                  className="absolute -inset-x-12 -top-10 -bottom-10 w-[calc(100%+6rem)] h-[calc(100%+5rem)] pointer-events-none"
                  viewBox="0 0 600 600"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="hero-wave-grad-1" x1="0%" y1="70%" x2="100%" y2="30%">
                      <stop offset="0%" stopColor="#459B45" stopOpacity="0.08" />
                      <stop offset="40%" stopColor="#34A853" stopOpacity="0.32" />
                      <stop offset="70%" stopColor="#80D89A" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#459B45" stopOpacity="0.04" />
                    </linearGradient>
                    <linearGradient id="hero-wave-grad-2" x1="10%" y1="90%" x2="90%" y2="10%">
                      <stop offset="0%" stopColor="#80D89A" stopOpacity="0.05" />
                      <stop offset="45%" stopColor="#459B45" stopOpacity="0.24" />
                      <stop offset="75%" stopColor="#34A853" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#80D89A" stopOpacity="0.03" />
                    </linearGradient>
                    <linearGradient id="hero-wave-stroke-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#34A853" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#80D89A" stopOpacity="0.75" />
                      <stop offset="100%" stopColor="#34A853" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>

                  {/* Flowing Wave Ribbon 1 */}
                  <g className="hero-wave-layer-1" style={{ animation: 'heroWaveFlow1 6.8s ease-in-out infinite' }}>
                    <path
                      d="M -30 380 C 80 440, 160 320, 280 340 C 390 360, 480 270, 620 290 L 620 380 C 490 350, 400 450, 270 410 C 150 370, 70 480, -30 460 Z"
                      fill="url(#hero-wave-grad-1)"
                    />
                    <path
                      d="M -30 380 C 80 440, 160 320, 280 340 C 390 360, 480 270, 620 290"
                      stroke="url(#hero-wave-stroke-glow)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.6"
                    />
                  </g>

                  {/* Flowing Wave Ribbon 2 */}
                  <g className="hero-wave-layer-2" style={{ animation: 'heroWaveFlow2 7.6s ease-in-out infinite 0.7s' }}>
                    <path
                      d="M -20 320 C 100 280, 180 370, 310 310 C 420 260, 500 330, 620 250 L 620 310 C 490 390, 410 320, 290 370 C 170 420, 90 340, -20 380 Z"
                      fill="url(#hero-wave-grad-2)"
                    />
                    <path
                      d="M -20 320 C 100 280, 180 370, 310 310 C 420 260, 500 330, 620 250"
                      stroke="url(#hero-wave-stroke-glow)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                      opacity="0.5"
                    />
                  </g>
                </svg>

                {/* 4. Faint, Slow-Moving Ambient Dust Particles Drifting in Background Layer */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-visible select-none">
                  <div
                    className="hero-dust-particle hero-dust-1 top-[18%] left-[14%] w-[3px] h-[3px] bg-[#80D89A]/50 shadow-[0_0_8px_rgba(128,216,154,0.6)]"
                    style={{ animationDelay: '0s' }}
                  />
                  <div
                    className="hero-dust-particle hero-dust-2 top-[28%] right-[16%] w-[2.5px] h-[2.5px] bg-[#34A853]/40 shadow-[0_0_6px_rgba(52,168,83,0.5)]"
                    style={{ animationDelay: '2.5s' }}
                  />
                  <div
                    className="hero-dust-particle hero-dust-3 top-[48%] left-[8%] w-[3.5px] h-[3.5px] bg-white/70 shadow-[0_0_6px_rgba(163,231,172,0.8)]"
                    style={{ animationDelay: '5s' }}
                  />
                  <div
                    className="hero-dust-particle hero-dust-4 top-[62%] right-[10%] w-[3px] h-[3px] bg-[#80D89A]/45 shadow-[0_0_8px_rgba(128,216,154,0.6)]"
                    style={{ animationDelay: '8s' }}
                  />
                  <div
                    className="hero-dust-particle hero-dust-5 top-[22%] left-[45%] w-[2px] h-[2px] bg-[#34A853]/45 shadow-[0_0_4px_rgba(52,168,83,0.4)]"
                    style={{ animationDelay: '3.5s' }}
                  />
                  <div
                    className="hero-dust-particle hero-dust-6 top-[75%] left-[22%] w-[3px] h-[3px] bg-white/65 shadow-[0_0_7px_rgba(163,231,172,0.7)]"
                    style={{ animationDelay: '10s' }}
                  />
                  <div
                    className="hero-dust-particle hero-dust-7 top-[38%] right-[28%] w-[2.5px] h-[2.5px] bg-[#80D89A]/40 shadow-[0_0_6px_rgba(128,216,154,0.5)]"
                    style={{ animationDelay: '6.5s' }}
                  />
                  <div
                    className="hero-dust-particle hero-dust-8 top-[56%] left-[32%] w-[2px] h-[2px] bg-[#34A853]/35 shadow-[0_0_5px_rgba(52,168,83,0.4)]"
                    style={{ animationDelay: '1s' }}
                  />
                </div>

                {/* Additional floating specks, soft glowing orbs, and small sparkles around the cat and social floaters */}
                <FloatingParticles variant="hero" />
              </div>

              {/* Cat and Laptop Image Layer with Floor Contact Shadow (Stationary & Still) */}
              <div className="relative z-20 w-full flex flex-col items-center justify-center">
                <picture className="w-full flex items-center justify-center">
                  <source srcSet={heroCatWebp} type="image/webp" />
                  <img
                    src={heroCatPng}
                    alt="AxentAI Labs - Cat with headphones working on laptop"
                    className="w-full h-auto max-h-[430px] sm:max-h-[490px] lg:max-h-[530px] xl:max-h-[560px] object-contain select-none pointer-events-auto"
                    decoding="async"
                    fetchPriority="high"
                    width={680}
                    height={670}
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

              {/* Thin Subtle Dotted Connector Lines, Signals, Diamonds & Sparkles (SVG Overlay) */}
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
                  <filter id="diamond-sparkle-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 1. Dotted curve from Product Hunt badge down towards cat */}
                <path
                  className="hero-dotted-line hero-line-ph"
                  style={{ animation: 'heroDottedLineFlow 4.8s linear infinite 0s' }}
                  d="M 185 64 Q 215 90 240 145"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                />

                {/* 2. Dotted curve from X badge & tile down towards cat */}
                <path
                  className="hero-dotted-line hero-line-x"
                  style={{ animation: 'heroDottedLineFlow 4.8s linear infinite 1.2s' }}
                  d="M 405 85 Q 380 115 330 155"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                />

                {/* 3. Dotted curve from LinkedIn badge towards cat's side */}
                <path
                  className="hero-dotted-line hero-line-li"
                  style={{ animation: 'heroDottedLineFlow 4.8s linear infinite 2.2s' }}
                  d="M 110 255 Q 148 245 180 270"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                />

                {/* 4. Dotted curve from Reddit badge towards laptop */}
                <path
                  className="hero-dotted-line hero-line-reddit"
                  style={{ animation: 'heroDottedLineFlow 4.8s linear infinite 0.6s' }}
                  d="M 420 290 Q 375 295 340 320"
                  stroke="url(#dotted-green-glow)"
                  strokeWidth="1.5"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                />

                {/* Playful green radiation signal lines directly above cat's headphones */}
                <g className="hero-headphone-signals origin-[260px_122px]" style={{ animation: 'heroHeadphoneSignalWave 3.8s ease-in-out infinite 0.2s' }}>
                  <path d="M 246 130 L 238 114" stroke="#248A3D" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 260 125 L 260 108" stroke="#248A3D" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 274 130 L 282 114" stroke="#248A3D" strokeWidth="2.5" strokeLinecap="round" />
                </g>

                {/* Upward green growth trend arrow near X icon */}
                <g className="hero-growth-arrow origin-[446px_94px]" style={{ animation: 'heroGrowthArrowFloat 4.4s ease-in-out infinite 0.4s' }}>
                  <path
                    d="M 432 106 L 448 90 M 448 90 L 436 90 M 448 90 L 448 102"
                    stroke="#248A3D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Glowing 4-Point Green Diamond Sparkles (Matching Reference Image) */}
                {/* Diamond Sparkle 1: Top-center above cat */}
                <g transform="translate(262, 192)" className="hero-sparkle-1" style={{ animation: 'heroSparkleTwinkle 3.4s ease-in-out infinite 0s' }}>
                  <path
                    d="M 0 -8 Q 0 0 8 0 Q 0 0 0 8 Q 0 0 -8 0 Q 0 0 0 -8 Z"
                    fill="#34A853"
                    filter="url(#diamond-sparkle-glow)"
                  />
                  <circle cx="0" cy="0" r="1.8" fill="#FFFFFF" />
                </g>

                {/* Diamond Sparkle 2: Upper-right near X */}
                <g transform="translate(388, 126)" className="hero-sparkle-2" style={{ animation: 'heroSparkleTwinkle 4.2s ease-in-out infinite 1.3s' }}>
                  <path
                    d="M 0 -7 Q 0 0 7 0 Q 0 0 0 7 Q 0 0 -7 0 Q 0 0 0 -7 Z"
                    fill="#34A853"
                    filter="url(#diamond-sparkle-glow)"
                  />
                  <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
                </g>

                {/* Diamond Sparkle 3: Lower-left near LinkedIn */}
                <g transform="translate(186, 274)" className="hero-sparkle-3" style={{ animation: 'heroSparkleTwinkle 3.8s ease-in-out infinite 0.7s' }}>
                  <path
                    d="M 0 -7 Q 0 0 7 0 Q 0 0 0 7 Q 0 0 -7 0 Q 0 0 0 -7 Z"
                    fill="#34A853"
                    filter="url(#diamond-sparkle-glow)"
                  />
                  <circle cx="0" cy="0" r="1.5" fill="#FFFFFF" />
                </g>

                {/* Diamond Sparkle 4: Lower-right near Reddit */}
                <g transform="translate(450, 340)" className="hero-sparkle-4" style={{ animation: 'heroSparkleTwinkle 4.6s ease-in-out infinite 1.9s' }}>
                  <path
                    d="M 0 -6 Q 0 0 6 0 Q 0 0 0 6 Q 0 0 -6 0 Q 0 0 0 -6 Z"
                    fill="#34A853"
                    filter="url(#diamond-sparkle-glow)"
                  />
                  <circle cx="0" cy="0" r="1.4" fill="#FFFFFF" />
                </g>

                {/* Floating ambient green particles */}
                <circle cx="204" cy="178" r="2.8" fill="#34A853" opacity="0.65" className="hero-sparkle-1" style={{ animation: 'heroSparkleTwinkle 3.4s ease-in-out infinite 0.3s' }} />
                <circle cx="372" cy="228" r="2.8" fill="#34A853" opacity="0.55" className="hero-sparkle-2" style={{ animation: 'heroSparkleTwinkle 4.2s ease-in-out infinite 1.0s' }} />
                <circle cx="304" cy="84" r="2.4" fill="#34A853" opacity="0.5" className="hero-sparkle-3" style={{ animation: 'heroSparkleTwinkle 3.8s ease-in-out infinite 0.5s' }} />
              </svg>

              {/* 1. TOP-LEFT: Product Hunt — Launch Support */}
              <div className="float-badge-ph absolute -top-3 sm:-top-5 left-[6%] sm:left-[14%] z-30 flex flex-col items-start gap-1 sm:gap-1.5">
                <div 
                  className="hero-ph-label flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left"
                  style={{ animation: 'heroFloatLabelPH 5.8s ease-in-out infinite 0.4s' }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">Product Hunt</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Launch Support</span>
                  </div>
                </div>
                
                {/* 3D Glossy App Tile */}
                <div 
                  className="hero-ph-tile w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF6756] via-[#FF503D] to-[#E03B28] flex items-center justify-center text-white font-extrabold text-lg sm:text-2xl shadow-[0_14px_28px_-4px_rgba(234,60,40,0.42),inset_0_2px_3px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-white/40 ml-3 sm:ml-4 cursor-default select-none"
                  title="Product Hunt Launch Support"
                  style={{ animation: 'heroFloatPH 5.0s ease-in-out infinite 0s' }}
                >
                  P
                </div>
              </div>

              {/* 2. TOP-RIGHT: X — Growth */}
              <div className="float-badge-x absolute -top-2 sm:-top-4 right-[2%] sm:right-[6%] z-30 flex flex-col items-end gap-1 sm:gap-1.5">
                <div 
                  className="hero-x-label flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left"
                  style={{ animation: 'heroFloatLabelX 6.2s ease-in-out infinite 0.2s' }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">X</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Growth</span>
                  </div>
                </div>

                {/* 3D Glossy App Tile */}
                <div 
                  className="hero-x-tile w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#262B30] via-[#14181B] to-[#0A0D10] flex items-center justify-center text-white shadow-[0_14px_28px_-4px_rgba(10,13,16,0.45),inset_0_2px_3px_rgba(255,255,255,0.4),inset_0_-2px_4px_rgba(0,0,0,0.3)] border border-white/20 mr-1 sm:mr-2 cursor-default select-none"
                  title="X Growth"
                  style={{ animation: 'heroFloatX 5.4s ease-in-out infinite 0.9s' }}
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </div>

              {/* 3. MID-LEFT: LinkedIn — Personal Branding */}
              <div className="float-badge-li absolute top-[40%] left-0 sm:-left-6 z-30 flex flex-col items-start gap-1 sm:gap-1.5">
                {/* 3D Glossy App Tile */}
                <div 
                  className="hero-li-tile w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0B7CE6] via-[#0A66C2] to-[#004B91] flex items-center justify-center text-white shadow-[0_14px_28px_-4px_rgba(10,102,194,0.42),inset_0_2px_3px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-white/40 ml-1 cursor-default select-none"
                  title="LinkedIn Personal Branding"
                  style={{ animation: 'heroFloatLI 5.8s ease-in-out infinite 1.5s' }}
                >
                  <svg className="w-4 h-4 sm:w-6 sm:h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </div>

                <div 
                  className="hero-li-label flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left"
                  style={{ animation: 'heroFloatLabelLI 5.2s ease-in-out infinite 0.7s' }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">LinkedIn</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Personal Branding</span>
                  </div>
                </div>
              </div>

              {/* 4. BOTTOM-RIGHT: Reddit — Community */}
              <div className="float-badge-reddit absolute bottom-[12%] right-0 sm:right-1 z-30 flex flex-col items-end sm:items-start gap-1 sm:gap-1.5">
                {/* 3D Glossy App Tile */}
                <div 
                  className="hero-reddit-tile w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF5722] via-[#FF4500] to-[#E03400] flex items-center justify-center text-white shadow-[0_14px_28px_-4px_rgba(255,69,0,0.42),inset_0_2px_3px_rgba(255,255,255,0.6),inset_0_-2px_4px_rgba(0,0,0,0.2)] border border-white/40 mr-1 sm:ml-2 cursor-default select-none"
                  title="Reddit Community"
                  style={{ animation: 'heroFloatReddit 4.6s ease-in-out infinite 0.5s' }}
                >
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white" fillOpacity="0.15" />
                    <path d="M16.5 12C15.9 12 15.4 12.3 15.1 12.7C14.2 12.1 13.1 11.7 11.9 11.6L12.6 8.3L14.9 8.8C15 9.5 15.6 10 16.3 10C17.1 10 17.8 9.3 17.8 8.5C17.8 7.7 17.1 7 16.3 7C15.7 7 15.2 7.4 15 7.9L12.3 7.3C12.1 7.3 11.9 7.4 11.9 7.6L11 11.6C9.8 11.7 8.7 12.1 7.8 12.7C7.5 12.3 7 12 6.4 12C5.4 12 4.6 12.8 4.6 13.8C4.6 14.4 4.9 15 5.4 15.3C5.3 15.6 5.3 15.9 5.3 16.2C5.3 18.7 8.1 20.7 11.5 20.7C14.9 20.7 17.7 18.7 17.7 16.2C17.7 15.9 17.7 15.6 17.6 15.3C18.1 15 18.4 14.4 18.4 13.8C18.4 12.8 17.5 12 16.5 12ZM8.5 14.5C9.1 14.5 9.5 15 9.5 15.5C9.5 16 9.1 16.5 8.5 16.5C7.9 16.5 7.5 16 7.5 15.5C7.5 15 7.9 14.5 8.5 14.5ZM13.8 18.8C12.9 19.3 11.1 19.3 10.2 18.8C10 18.7 10 18.4 10.1 18.2C10.2 18 10.5 18 10.7 18.1C11.3 18.4 12.7 18.4 13.3 18.1C13.5 18 13.8 18 13.9 18.2C14 18.4 14 18.7 13.8 18.8ZM14.5 16.5C13.9 16.5 13.5 16 13.5 15.5C13.5 15 13.9 14.5 14.5 14.5C15.1 14.5 15.5 15 15.5 15.5C15.5 16 15.1 16.5 14.5 16.5Z" fill="white"/>
                  </svg>
                </div>

                <div 
                  className="hero-reddit-label flex items-center gap-1.5 px-2.5 py-1 sm:px-3 rounded-full bg-white/95 backdrop-blur-sm border border-[#E0EBE1] shadow-[0_4px_16px_rgba(0,0,0,0.06)] text-left"
                  style={{ animation: 'heroFloatLabelReddit 5.6s ease-in-out infinite 1.1s' }}
                >
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#248A3D] animate-pulse" />
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111111] leading-none block">Reddit</span>
                    <span className="text-[8.5px] sm:text-[9.5px] text-[#555B55] leading-none block mt-0.5">Community</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
export default HeroSection;
