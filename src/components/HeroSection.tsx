import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = React.memo(({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  // Pause continuous floating micro-badges when Hero is scrolled out of view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setInView(entries[0].isIntersecting);
        }
      },
      { rootMargin: '150px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-transparent text-[#F8FAFC] flex items-center z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Confident Editorial Luxury Typography (Cols 1-7) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-8 text-left relative z-20">
            {/* Subtle localized dark atmospheric gradient behind left text area (No rectangular box) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-10 -inset-y-12 sm:-inset-x-16 sm:-inset-y-16 -z-10"
              style={{
                background:
                  'radial-gradient(ellipse at center left, rgba(5, 5, 5, 0.88) 0%, rgba(5, 5, 5, 0.65) 35%, rgba(5, 5, 5, 0.25) 65%, transparent 100%)',
              }}
            />
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#080B12]/95 border border-white/15 text-[11px] font-mono font-medium tracking-[0.22em] text-[#7BA7F7] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B8FE8]" />
              <span>GLOBAL DIGITAL GROWTH</span>
            </motion.div>

            {/* Main Headline (Clean, Large, Confident Editorial Style) */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#CBD5E1] font-sans leading-relaxed max-w-xl font-normal"
            >
              We help founders, startups and brands build visibility through personal branding, organic social growth, Product Hunt launches and creator partnerships.
            </motion.p>

            {/* Luxury Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
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
                className="px-7 py-3.5 rounded-full border border-white/15 bg-[#080B12]/92 text-[#F5F7FA] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-white/25 hover:text-[#A9C7FF] transition-colors cursor-pointer"
              >
                EXPLORE SERVICES
              </a>
            </motion.div>

            {/* Subtle Negative-Space Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.45 }}
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

          </div>

          {/* RIGHT: Floating Micro-UI Data Accents (GPU CSS translate3d, auto-paused offscreen) */}
          <div className="lg:col-span-5 xl:col-span-5 min-h-[380px] sm:min-h-[460px] flex items-center justify-center lg:justify-end relative pointer-events-none">
            
            {/* Top-Right: Organic Reach */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              style={{
                animationPlayState: inView ? 'running' : 'paused',
                willChange: 'transform',
              }}
              className="animate-float hero-float-1 will-change-transform absolute top-10 right-2 sm:right-6 px-4 py-2.5 rounded-xl bg-[#080B12]/92 border border-white/10 shadow-2xl shadow-black/80 pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-semibold text-[#94A3B8] uppercase tracking-wider font-mono">
                  Organic Reach
                </span>
              </div>
              <div className="text-xs font-semibold text-[#F8FAFC]">
                ↑ 68% Engagement Lift
              </div>
            </motion.div>

            {/* Middle-Left: LinkedIn Growth */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              style={{
                animationPlayState: inView ? 'running' : 'paused',
                willChange: 'transform',
              }}
              className="animate-float hero-float-2 will-change-transform absolute bottom-24 -left-2 sm:left-4 px-4 py-2.5 rounded-xl bg-[#080B12]/92 border border-white/10 shadow-2xl shadow-black/80 pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-semibold text-[#60A5FA] uppercase tracking-wider font-mono">
                  Executive Presence
                </span>
              </div>
              <div className="text-xs font-semibold text-[#F8FAFC]">
                Founder Pipeline Growth
              </div>
            </motion.div>

            {/* Lower-Right: Creator Campaigns */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              style={{
                animationPlayState: inView ? 'running' : 'paused',
                willChange: 'transform',
              }}
              className="animate-float hero-float-3 will-change-transform absolute -bottom-2 right-8 sm:right-16 px-4 py-2 rounded-xl bg-[#080B12]/92 border border-white/10 shadow-2xl shadow-black/80 pointer-events-auto"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium text-[#F8FAFC]">
                  Creator Campaigns
                </span>
                <span className="text-[10px] font-mono font-bold text-[#60A5FA] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/25">
                  Active
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* GPU-accelerated 3D floating keyframes */}
      <style>{`
        @keyframes heroFloatUp {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, -6px, 0); }
        }
        @keyframes heroFloatDown {
          0%, 100% { transform: translate3d(0, 0px, 0); }
          50% { transform: translate3d(0, 6px, 0); }
        }
        @keyframes heroFloatMid {
          0%, 100% { transform: translate3d(0, -4px, 0); }
          50% { transform: translate3d(0, 4px, 0); }
        }
        .hero-float-1 {
          animation: heroFloatUp 7s ease-in-out infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .hero-float-2 {
          animation: heroFloatDown 8s ease-in-out 1s infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .hero-float-3 {
          animation: heroFloatMid 9s ease-in-out 2s infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
});
