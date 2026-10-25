import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, PlayCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import snailSkateboardImg from '../assets/images/snail_on_skateboard_transparent.png';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = React.memo(({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const stages = [
    {
      number: '01',
      title: 'DISCOVER',
      subtitle: 'Audience & Positioning',
      description: 'Identify target software buyers, value proposition, competitive whitespace, and launch objectives.',
      icon: Compass
    },
    {
      number: '02',
      title: 'STRATEGY',
      subtitle: 'Distribution Architecture',
      description: 'Build a coordinated roadmap across messaging, visual preview assets, launch timing, and developer discovery.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'EXECUTE',
      subtitle: 'Launch-Day Coordination',
      description: 'Real-time launch orchestration, founder updates, community discussions, and synchronized platform distribution.',
      icon: PlayCircle
    },
    {
      number: '04',
      title: 'OPTIMIZE',
      subtitle: 'Compounding Reach',
      description: 'Convert launch momentum into evergreen social content, creator syndication, and compounding inbound visibility.',
      icon: TrendingUp
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="how-we-work" 
      className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#F7F9F7] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
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
        
        {/* Centered Methodology Narrative: Heading Above -> Snail Visual -> Supporting Text Below */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 relative z-20">
          
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#246B32] uppercase mb-3"
          >
            <span>LAUNCH &amp; GROWTH METHODOLOGY</span>
            <span aria-hidden="true">·</span>
            <span>BUILDING MOMENTUM</span>
          </motion.div>

          {/* Heading Above */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase leading-tight"
          >
            A CLEAR STRATEGY <br className="hidden sm:inline" />
            <span className="text-[#248A3D]">FROM LAUNCH TO GROWTH</span>
          </motion.h2>

          {/* Subtitle / Momentum Concept */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-base sm:text-lg font-medium text-[#246B32] font-sans tracking-tight"
          >
            Don't let your launch crawl — build compounding momentum before, during, and beyond launch day.
          </motion.p>

          {/* Snail on Skateboard: Frameless, Natural Transparent Cutout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl my-6 flex justify-center items-center select-none"
          >
            <img
              src={snailSkateboardImg}
              alt="Snail on skateboard building rapid momentum beyond slow growth"
              className="w-full h-auto max-h-[300px] sm:max-h-[360px] md:max-h-[400px] object-contain select-none pointer-events-none drop-shadow-[0_22px_38px_rgba(0,0,0,0.11)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>

          {/* Supporting Description underneath image */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-2xl mx-auto font-normal"
          >
            Our process combines audience research, positioning, coordinated execution, and post-launch distribution to help founders build a stronger foundation for growth.
          </motion.p>

        </div>

        {/* 4 Connected Process Stages (Editorial Horizontal Flow, Subtle Dividers) */}
        <div className="relative pt-4">
          
          {/* Subtle Horizontal Connecting Rail (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-[1px] bg-[#E5E9E5] -z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full bg-gradient-to-r from-[#246B32] via-[#459B45] to-[#E5F5E5]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-[#FFFFFF] border border-[#E5E9E5] p-6 sm:p-7 flex flex-col justify-between shadow-2xs hover:border-[#459B45]/60 transition-all duration-300 group"
                >
                  <div className="space-y-3.5">
                    {/* Top Row: Icon + Stage Number */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#F0F2F0]">
                      <div className="w-9 h-9 rounded-xl bg-[#EAF7EA] text-[#246B32] flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#459B45] tracking-widest">
                        PHASE {stage.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-display font-bold text-[#111111] tracking-tight group-hover:text-[#246B32] transition-colors">
                        {stage.title}
                      </h3>
                      <p className="text-xs font-mono font-medium text-[#246B32] uppercase tracking-wider mt-0.5">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans font-normal">
                      {stage.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Action */}
          <div className="mt-12 text-center">
            <Button
              size="lg"
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-[#246B32] via-[#2F853E] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-xs sm:text-sm font-semibold tracking-wide px-8 py-4 rounded-full border border-[#459B45]/30 shadow-[0_8px_24px_rgba(36,107,50,0.28)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              <span>Map Your Launch Roadmap</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
});

ProcessSection.displayName = 'ProcessSection';
