import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] lg:min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-transparent text-[#F8FAFC] flex items-center z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Confident Editorial Luxury Typography (Cols 1-7) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-8 text-left">
            
            {/* Eyebrow Label */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#050B14]/80 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium tracking-[0.22em] text-[#38BDF8] uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              <span>GLOBAL DIGITAL GROWTH</span>
            </motion.div>

            {/* Main Headline (Clean, Large, Confident Editorial Style) */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-[76px] font-display font-extrabold tracking-[-0.03em] text-[#F8FAFC] leading-[1.04]"
            >
              BUILD INFLUENCE <br />
              THAT TRAVELS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#60A5FA]">
                FURTHER.
              </span>
            </motion.h1>

            {/* Supporting Copy (Restrained, Confident, Generous Leading) */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg text-[#94A3B8] font-sans leading-relaxed max-w-xl font-normal"
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
                className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/20 group transition-all cursor-pointer"
              >
                <span>BOOK A STRATEGY CALL</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <a
                href="#services"
                className="px-7 py-3.5 rounded-full border border-white/10 bg-[#050B14]/80 backdrop-blur-md text-[#94A3B8] text-xs sm:text-sm font-semibold tracking-wider uppercase hover:border-white/20 hover:text-white transition-all cursor-pointer"
              >
                EXPLORE SERVICES
              </a>
            </motion.div>

            {/* Subtle Negative-Space Line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.85, delay: 0.45 }}
              className="pt-8 border-t border-white/10 flex flex-wrap items-center gap-7 text-xs text-[#94A3B8] font-mono"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                <span>Founder Authority</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                <span>Global Organic Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Verified Metrics Only</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: Floating Micro-UI Data Accents (Framing the Earth rising from lower-right) */}
          <div className="lg:col-span-5 xl:col-span-5 min-h-[380px] sm:min-h-[460px] flex items-center justify-center lg:justify-end relative pointer-events-none">
            
            {/* Top-Right: Organic Reach */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, -6, 0] }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.35 },
                y: { repeat: Infinity, duration: 7, ease: "easeInOut" }
              }}
              className="absolute top-10 right-2 sm:right-6 px-4 py-2.5 rounded-xl bg-[#050B14]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 pointer-events-auto"
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
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, y: [0, 6, 0] }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.45 },
                y: { repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-24 -left-2 sm:left-4 px-4 py-2.5 rounded-xl bg-[#050B14]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 pointer-events-auto"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-semibold text-[#38BDF8] uppercase tracking-wider font-mono">
                  Executive Presence
                </span>
              </div>
              <div className="text-xs font-semibold text-[#F8FAFC]">
                Founder Pipeline Growth
              </div>
            </motion.div>

            {/* Lower-Right: Creator Campaigns */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [-4, 4, -4] }}
              transition={{ 
                opacity: { duration: 0.7, delay: 0.55 },
                y: { repeat: Infinity, duration: 9, ease: "easeInOut", delay: 2 }
              }}
              className="absolute -bottom-2 right-8 sm:right-16 px-4 py-2 rounded-xl bg-[#050B14]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80 pointer-events-auto"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-medium text-[#F8FAFC]">
                  Creator Campaigns
                </span>
                <span className="text-[10px] font-mono font-bold text-[#38BDF8] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/25">
                  Active
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
