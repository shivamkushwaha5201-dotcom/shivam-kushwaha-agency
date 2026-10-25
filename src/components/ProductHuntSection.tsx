import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Target, 
  Share2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { Button } from './ui/button';
import blueIndustrialHookImg from '../assets/images/blue_industrial_hook_transparent.png';

interface ProductHuntSectionProps {
  onOpenBooking: () => void;
  onOpenPortfolio?: () => void;
}

export const ProductHuntSection: React.FC<ProductHuntSectionProps> = React.memo(({ onOpenBooking, onOpenPortfolio }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const visualWrapperRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // 7 Core Flagship Deliverables
  const featurePoints = [
    'Pre-launch strategy and positioning',
    'Product page and tagline feedback',
    'Launch asset planning',
    'Launch-day coordination',
    'Relevant community outreach',
    'Cross-platform distribution',
    'Post-launch performance review'
  ];

  // 4 Flight Phases
  const flightPhases = [
    {
      stage: '01',
      name: 'PRE-LAUNCH',
      timing: 'T-21 to T-2 Days',
      title: 'Positioning & Teaser Runway',
      description: 'Engineering your official Coming Soon teaser page, writing the authentic maker story, and preparing interactive product video demos.',
      icon: Target
    },
    {
      stage: '02',
      name: 'LAUNCH',
      timing: '00:01 PST Launch Day',
      title: 'Midnight Release & War Room',
      description: 'Synchronized live deployment at midnight PST with active community updates, real-time comment management, and founder response coordination.',
      icon: Rocket
    },
    {
      stage: '03',
      name: 'DISTRIBUTION',
      timing: 'Hours 1–24',
      title: 'Cross-Platform Amplification',
      description: 'Syndicating the launch narrative across executive LinkedIn posts, high-signal X threads, and tech community hubs to drive qualified early-adopter traffic.',
      icon: Share2
    },
    {
      stage: '04',
      name: 'POST-LAUNCH',
      timing: 'Week 1–4',
      title: 'Retention & User Conversion',
      description: 'Translating launch traffic into registered workspace trials, publishing retrospective building lessons, and locking in search authority.',
      icon: TrendingUp
    }
  ];

  // Optional minimal, smooth mouse-follow on desktop (respects reduced-motion)
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 1024) return;
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const xPct = (clientX - rect.left) / rect.width - 0.5;
    const yPct = (clientY - rect.top) / rect.height - 0.5;
    setMouseOffset({
      x: Number((xPct * 10).toFixed(2)),
      y: Number((yPct * 10).toFixed(2))
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setMouseOffset({ x: 0, y: 0 });
  }, []);

  const handleExploreProcess = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('how-we-work');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = '#how-we-work';
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="product-hunt" 
      className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#FFFFFF] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Faint Atmospheric Soft Mint Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(229, 245, 229, 0.45) 0%, rgba(255, 255, 255, 1) 70%), linear-gradient(135deg, #FFFFFF 0%, #F7F9F7 52%, #FFFFFF 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 1. Clean Two-Column Layout: Text on Left, Large Standalone 3D Hook on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Column — Strategic Product Hunt Copy & Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left relative z-20"
          >
            {/* Section Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
              <span>FLAGSHIP SERVICE · 65% STRATEGIC EMPHASIS</span>
            </div>

            {/* Main Heading: MAKE YOUR PRODUCT HUNT LAUNCH COUNT */}
            <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-display font-extrabold text-[#111111] tracking-[-0.03em] leading-[1.08] uppercase">
              MAKE YOUR <br className="hidden sm:inline" />
              PRODUCT HUNT <br className="hidden sm:inline" />
              <span className="text-[#248A3D]">LAUNCH COUNT</span>
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#555B55] font-sans leading-relaxed max-w-xl font-normal">
              A successful launch takes more than publishing a product page. We help founders refine their positioning, prepare launch assets, coordinate launch-day communication, connect with relevant communities, and build a thoughtful distribution plan.
            </p>

            {/* Key Deliverables Grid in Two Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {featurePoints.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#111111] font-medium leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-[#246B32] fill-[#EAF7EA] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4">
              {/* Primary CTA: Plan Your Product Hunt Launch */}
              <Button
                size="lg"
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-[#246B32] via-[#2F853E] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-xs sm:text-sm font-semibold tracking-wide px-7 sm:px-8 py-4 rounded-full border border-[#459B45]/30 shadow-[0_10px_26px_rgba(36,107,50,0.32)] hover:shadow-[0_14px_34px_rgba(36,107,50,0.44)] hover:-translate-y-0.5 active:translate-y-0 group transition-all duration-300 cursor-pointer justify-center"
              >
                <span>Plan Your Product Hunt Launch</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              {/* Secondary CTA: Explore All Growth Services */}
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full border border-[#246B32] bg-[#FFFFFF] hover:bg-[#F7F9F7] text-[#111111] hover:text-[#246B32] hover:border-[#1E5B2A] text-xs sm:text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all duration-300 cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>EXPLORE ALL SERVICES</span>
              </a>

              {/* Highlighted View My Portfolio Button */}
              <a
                href="/portfolio"
                id="ph-section-view-portfolio-btn"
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
                className="portfolio-highlight-glow inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full border border-[#459B45] bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap group"
              >
                <span className="relative flex h-2 w-2 mr-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#459B45] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#246B32]" />
                </span>
                <span>View My Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#246B32] transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column — Large Standalone 3D Blue Industrial Hook (No Card, No Frame) */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex items-center justify-center lg:justify-end relative select-none"
          >
            {/* Visual Stage Container: No card, no rectangular border */}
            <div 
              ref={visualWrapperRef}
              className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[470px] flex flex-col items-center justify-center"
            >
              
              {/* Subtle Blue Radial Glow & Mint Ambience Matching Hook Color */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 sm:-inset-10 rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at 62% 64%, rgba(37, 99, 235, 0.22) 0%, rgba(59, 130, 246, 0.12) 36%, rgba(69, 155, 69, 0.08) 58%, transparent 75%)',
                  filter: 'blur(34px)',
                }}
              />

              {/* Standalone 3D Blue Industrial Hook with Chain entering from Upper-Right */}
              <div 
                className="hook-float-wrapper relative z-10 w-full flex flex-col items-center justify-center"
                style={{
                  transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  willChange: 'transform'
                }}
              >
                <div className="hook-motion w-full flex items-center justify-center">
                  <img
                    src={blueIndustrialHookImg}
                    alt="Blue Industrial Hook — Lifting Your Product Hunt Launch"
                    className="w-full h-auto max-h-[460px] sm:max-h-[520px] lg:max-h-[580px] object-contain select-none pointer-events-auto drop-shadow-[0_28px_40px_rgba(20,60,140,0.22)] drop-shadow-[0_12px_22px_rgba(0,0,0,0.12)] filter"
                    loading="lazy"
                    decoding="async"
                    width={1103}
                    height={1426}
                  />
                </div>

                {/* Soft Dynamic Floor Contact Shadow Matching Hook Blue Tone */}
                <div
                  aria-hidden="true"
                  className="hook-shadow -mt-5 sm:-mt-7 w-[68%] h-5 sm:h-6 rounded-[100%] bg-gradient-to-r from-transparent via-[#102A45]/22 to-transparent blur-md"
                />
              </div>

            </div>
          </motion.div>

        </div>

        {/* 2. Global Trajectory Process Visual: PRE-LAUNCH ↓ LAUNCH ↓ DISTRIBUTION ↓ POST-LAUNCH */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl bg-[#F7F9F7] border border-[#E5E9E5] shadow-sm space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E9E5]">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#246B32]">
                Launch Flight Path
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111] tracking-tight font-display">
                PRE-LAUNCH <span className="text-[#459B45] font-light">↓</span> LAUNCH <span className="text-[#459B45] font-light">↓</span> DISTRIBUTION <span className="text-[#459B45] font-light">↓</span> POST-LAUNCH
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E9E5] text-[#246B32] text-xs font-mono font-medium">
              <Rocket className="w-3.5 h-3.5 text-[#459B45]" />
              <span>Full Launch Trajectory</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flightPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div 
                  key={phase.stage}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="fx-card-interactive p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:shadow-[0_12px_28px_-6px_rgba(69,155,69,0.15)] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#246B32]">
                        {phase.name}
                      </span>
                      <Icon className="w-4 h-4 text-[#459B45]" />
                    </div>

                    <div className="text-[11px] font-mono text-[#555B55]">
                      {phase.timing}
                    </div>

                    <h4 className="text-sm font-bold text-[#111111] font-display">
                      {phase.title}
                    </h4>

                    <p className="text-xs text-[#555B55] leading-relaxed font-sans font-normal">
                      {phase.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E5E9E5] text-[10px] font-mono font-semibold text-[#246B32]">
                    Phase {phase.stage} of 04
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 3. Ethical Standards & Compliance Guarantee */}
        <div className="p-8 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#E5F5E5] border border-[#E5E9E5] text-[#246B32] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#111111] font-display">
                100% Legitimate Launch Standards
              </h4>
              <p className="text-xs text-[#555B55] leading-relaxed max-w-xl font-normal">
                We strictly adhere to Product Hunt community guidelines. We never coordinate bot rings, upvote trading, or artificial spikes. Our value lies in exceptional product framing, maker narratives, and authentic cross-channel amplification.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full text-xs font-semibold tracking-wide bg-[#459B45] text-[#FFFFFF] hover:bg-[#246B32] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Discuss Your Launch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Subtle Floating & Breathing Keyframes for Standalone 3D Hook Visual */}
      <style>{`
        @keyframes hookStandaloneFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.8deg);
          }
        }
        @keyframes hookShadowBreathe {
          0%, 100% {
            transform: scale(1);
            opacity: 0.85;
          }
          50% {
            transform: scale(0.92);
            opacity: 0.55;
          }
        }
        .hook-motion {
          animation: hookStandaloneFloat 6.5s ease-in-out infinite;
          transform-origin: 50% 0%;
          will-change: transform;
        }
        .hook-shadow {
          animation: hookShadowBreathe 6.5s ease-in-out infinite;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .hook-motion,
          .hook-shadow,
          .hook-float-wrapper {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
});

ProductHuntSection.displayName = 'ProductHuntSection';
export default ProductHuntSection;
