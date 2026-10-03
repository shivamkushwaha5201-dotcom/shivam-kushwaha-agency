import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, Lightbulb, PlayCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Animated line progress scale
  const lineScaleX = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

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
      ref={containerRef}
      id="how-we-work" 
      className="py-32 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold font-mono">
            // METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em]">
            The 4-Stage Growth Journey.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans max-w-2xl font-normal">
            A deliberate, continuous progression from initial thesis discovery to enduring category dominance.
          </p>
        </div>

        {/* 4-Stage Journey Connected by a Thin Glowing Line */}
        <div className="relative pt-6">
          
          {/* Background Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[1px] bg-white/10 -z-0">
            {/* Animated Glowing Blue Line (Linked to Scroll Progress) */}
            <motion.div
              style={{ scaleX: lineScaleX, transformOrigin: 'left' }}
              className="h-full w-full bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] shadow-[0_0_12px_rgba(56,189,248,0.8)]"
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
                  transition={{ duration: 0.55, delay: idx * 0.12 }}
                  className="p-8 rounded-2xl bg-[#050B14]/80 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-6 group shadow-xl shadow-black/50"
                >
                  <div className="space-y-4">
                    {/* Stage Node */}
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-full bg-[#02040A] border border-white/20 flex items-center justify-center font-mono font-bold text-xs text-[#38BDF8] shadow-md group-hover:border-[#38BDF8] transition-colors">
                        {stage.number}
                      </div>

                      <div className="w-8 h-8 rounded-lg bg-blue-600/10 border border-blue-500/20 text-[#38BDF8] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[#F8FAFC] tracking-tight uppercase font-display group-hover:text-white transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono text-[#38BDF8]">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed font-sans font-normal">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[11px] text-[#94A3B8] font-mono flex items-center justify-between">
                    <span>Phase 0{idx + 1}</span>
                    <span className="text-[#38BDF8]/90">Stage {idx + 1} / 4</span>
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
};
