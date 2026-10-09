import React from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, PlayCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = React.memo(({ onOpenBooking }) => {
  const stages = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Audience & Core Thesis',
      description: 'We deconstruct your company thesis, executive point-of-view, and competitive landscape to isolate perspectives that command authentic industry attention.',
      icon: Compass
    },
    {
      number: '02',
      title: 'STRATEGY',
      subtitle: 'Distribution Architecture',
      description: 'We architect platform-specific publishing rhythms, founder narrative angles, creator targets, and launch calendars engineered for compounding reach.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'EXECUTE',
      subtitle: 'Hands-On Publishing & Ops',
      description: 'Our senior team oversees end-to-end copywriting, active community dialogue, creator outreach and negotiation, and live launch war room coordination.',
      icon: PlayCircle
    },
    {
      number: '04',
      title: 'OPTIMIZE',
      subtitle: 'Compounding Inbound Pipeline',
      description: 'We audit profile conversions, post resonance, and qualified inbound inquiries—refining distribution channels based on empirical market traction.',
      icon: TrendingUp
    }
  ];

  return (
    <section 
      id="how-we-work" 
      className="py-32 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4 relative z-20">
          {/* Subtle localized dark atmospheric gradient behind header text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-10 sm:-inset-x-16 sm:-inset-y-12 -z-10"
            style={{
              background:
                'radial-gradient(ellipse at center left, rgba(8, 11, 18, 0.88) 0%, rgba(8, 11, 18, 0.62) 40%, rgba(8, 11, 18, 0.24) 70%, transparent 100%)',
            }}
          />
          <div className="text-xs uppercase tracking-[0.25em] text-[#60A5FA] font-semibold font-mono text-contrast-shadow">
            // METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] heading-contrast-shadow">
            The 4-Stage Growth Journey.
          </h2>
          <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-sans max-w-2xl font-normal text-contrast-shadow">
            A deliberate, continuous progression from initial thesis discovery to enduring category dominance.
          </p>
        </div>

        {/* 4-Stage Journey Connected by a Thin Glowing Line */}
        <div className="relative pt-6">
          
          {/* Background Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[1px] bg-white/10 -z-0">
            {/* Animated Glowing Blue Line (Triggered via IntersectionObserver) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD] shadow-[0_0_12px_rgba(59,130,246,0.8)]"
            />
          </div>

          {/* 4 Connected Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.1 }}
                  className="p-8 rounded-2xl bg-[#080B12]/92 border border-white/10 hover:border-white/20 transition-colors flex flex-col justify-between space-y-6 group shadow-xl shadow-black/50"
                >
                  <div className="space-y-4">
                    {/* Stage Node */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#050505] border border-white/20 flex items-center justify-center font-mono font-bold text-xs text-[#60A5FA] shadow-md group-hover:border-[#60A5FA] transition-colors">
                        {stage.number}
                      </div>

                      <div className="w-8 h-8 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight uppercase font-display group-hover:text-white transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono text-[#60A5FA]">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed font-sans font-normal">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[11px] text-[#94A3B8] font-mono flex items-center justify-between">
                    <span>Phase 0{idx + 1}</span>
                    <span className="text-[#93C5FD]">Stage {idx + 1} / 4</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-white/10">
          <div className="text-xs text-[#94A3B8] font-normal">
            Have an upcoming product release or executive repositioning project?
          </div>
          <Button
            size="sm"
            onClick={onOpenBooking}
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full shadow-lg shadow-blue-500/20 group transition-all cursor-pointer"
          >
            <span>BOOK A STRATEGY CALL</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
});
