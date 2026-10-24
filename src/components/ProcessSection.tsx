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
      className="py-32 bg-[#F7F9F7] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Faint Atmospheric Soft Mint Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(229, 245, 229, 0.45) 0%, rgba(247, 249, 247, 1) 70%), linear-gradient(135deg, #FFFFFF 0%, #F7F9F7 52%, #FFFFFF 100%)',
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
          <div className="text-xs uppercase tracking-[0.25em] text-[#246B32] font-semibold font-mono">
            // METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] tracking-[-0.02em]">
            The 4-Stage Growth Journey.
          </h2>
          <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans max-w-2xl font-normal">
            A deliberate, continuous progression from initial thesis discovery to enduring category dominance.
          </p>
        </motion.div>

        {/* 4-Stage Journey Connected by a Thin Glowing Line */}
        <div className="relative pt-6">
          
          {/* Background Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[1px] bg-[#E5E9E5] -z-0">
            {/* Animated Glowing Line (Triggered via IntersectionObserver) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full bg-gradient-to-r from-[#246B32] via-[#459B45] to-[#E5F5E5] shadow-[0_0_14px_rgba(69,155,69,0.3)]"
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
                  className="fx-card-interactive p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:shadow-[0_14px_32px_-8px_rgba(69,155,69,0.15)] flex flex-col justify-between space-y-6 group shadow-xs"
                >
                  <div className="space-y-4">
                    {/* Stage Node */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#F7F9F7] border border-[#E5E9E5] flex items-center justify-center font-mono font-bold text-xs text-[#246B32] shadow-2xs group-hover:border-[#459B45] transition-colors">
                        {stage.number}
                      </div>

                      <div className="w-8 h-8 rounded-lg bg-[#E5F5E5] border border-[#E5E9E5] text-[#246B32] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#111111] tracking-tight uppercase font-display group-hover:text-[#246B32] transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono font-medium text-[#459B45]">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#555B55] leading-relaxed font-sans font-normal">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E5E9E5] text-[11px] text-[#555B55] font-mono flex items-center justify-between">
                    <span>Phase 0{idx + 1}</span>
                    <span className="text-[#246B32] font-semibold">Stage {idx + 1} / 4</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 flex items-center justify-between flex-wrap gap-4 pt-8 border-t border-[#E5E9E5]">
          <div className="text-xs text-[#555B55] font-normal">
            Have an upcoming product release or executive repositioning project?
          </div>
          <Button
            size="sm"
            onClick={onOpenBooking}
            className="bg-[#459B45] hover:bg-[#246B32] text-[#FFFFFF] text-xs font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full border border-[#459B45]/30 shadow-md shadow-[#459B45]/20 group transition-all cursor-pointer"
          >
            <span>BOOK A STRATEGY CALL</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
});
