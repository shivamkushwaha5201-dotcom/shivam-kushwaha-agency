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
      className="py-32 bg-[#08060F] text-[#F8F6FF] border-t border-[#30213F] relative overflow-hidden font-sans z-10"
    >
      {/* Faint Atmospheric Gradient Matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(17, 11, 32, 0.95) 0%, rgba(8, 6, 15, 1) 70%), linear-gradient(135deg, #08060F 0%, #110B20 52%, #08060F 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20 space-y-4 relative z-20"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[#B98AFF] font-semibold font-mono">
            // METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8F7FC] tracking-[-0.02em] heading-contrast-shadow">
            The 4-Stage Growth Journey.
          </h2>
          <p className="text-sm sm:text-base text-[#B9B1C9] leading-relaxed font-sans max-w-2xl font-normal text-contrast-shadow">
            A deliberate, continuous progression from initial thesis discovery to enduring category dominance.
          </p>
        </motion.div>

        {/* 4-Stage Journey Connected by a Thin Glowing Line */}
        <div className="relative pt-6">
          
          {/* Background Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[1px] bg-[#30213F] -z-0">
            {/* Animated Glowing Purple Line (Triggered via IntersectionObserver) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full bg-gradient-to-r from-[#35106B] via-[#7028D8] to-[#B98AFF] shadow-[0_0_14px_rgba(185,138,255,0.5)]"
            />
          </div>

          {/* 4 Connected Stages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="fx-card-interactive p-8 rounded-2xl bg-[#100B1B] border border-[#30213F] hover:border-[#7028D8] hover:shadow-[0_14px_32px_-8px_rgba(112,40,216,0.28)] flex flex-col justify-between space-y-6 group shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Stage Node */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#0B0812] border border-[#30213F] flex items-center justify-center font-mono font-bold text-xs text-[#B98AFF] shadow-2xs group-hover:border-[#7028D8] transition-colors">
                        {stage.number}
                      </div>

                      <div className="w-8 h-8 rounded-lg bg-[#35106B]/60 border border-[#30213F] text-[#B98AFF] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#F8F7FC] tracking-tight uppercase font-display group-hover:text-[#B98AFF] transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono font-medium text-[#B98AFF]">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#B9B1C9] leading-relaxed font-sans font-normal">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#30213F] text-[11px] text-[#B9B1C9] font-mono flex items-center justify-between">
                    <span>Phase 0{idx + 1}</span>
                    <span className="text-[#B98AFF] font-semibold">Stage {idx + 1} / 4</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-[#30213F]">
          <div className="text-xs text-[#B9B1C9] font-normal">
            Have an upcoming product release or executive repositioning project?
          </div>
          <Button
            size="sm"
            onClick={onOpenBooking}
            className="bg-[#7028D8] hover:bg-[#35106B] text-[#F8F7FC] text-xs font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full border border-[#B98AFF]/30 shadow-md shadow-[#7028D8]/25 group transition-all cursor-pointer"
          >
            <span>BOOK A STRATEGY CALL</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
});
