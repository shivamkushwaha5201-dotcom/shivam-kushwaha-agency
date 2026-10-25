import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Compass, Lightbulb, PlayCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import snailSkateboardImg from '../assets/images/WhatsApp_Image_2026-10-25_at_12.27.53_AM_aa982056.jpeg';

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
      description: 'Identify the product’s audience, value proposition, competitive positioning and launch objectives.',
      icon: Compass
    },
    {
      number: '02',
      title: 'STRATEGY',
      subtitle: 'Distribution Architecture',
      description: 'Build a launch plan covering messaging, preparation, launch timing, distribution and audience discovery.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'EXECUTE',
      subtitle: 'Launch-Day Coordination',
      description: 'Coordinate launch activities, founder communications, community outreach and planned content distribution.',
      icon: PlayCircle
    },
    {
      number: '04',
      title: 'OPTIMIZE',
      subtitle: 'Post-Launch Momentum',
      description: 'Review available performance data, identify opportunities and plan post-launch follow-up.',
      icon: TrendingUp
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="how-we-work" 
      className="py-28 md:py-36 bg-[#F7F9F7] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
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
        
        {/* Centered Methodology Header & Standalone Snail Visual */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 relative z-20">
          
          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45] animate-pulse" />
            <span>OUR LAUNCH METHODOLOGY</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase leading-tight"
          >
            DON’T LET YOUR LAUNCH <span className="text-[#248A3D]">CRAWL</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-lg sm:text-xl font-medium text-[#246B32] font-display tracking-tight"
          >
            Build momentum before launch day
          </motion.p>

          {/* Snail on Skateboard: Exact Attached Image Displayed Naturally (No Frame, No Card, No Border) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl my-6 sm:my-8 flex justify-center items-center select-none"
          >
            <img
              src={snailSkateboardImg}
              alt="Snail riding a skateboard at high speed representing launch momentum"
              className="w-full h-auto max-h-[380px] sm:max-h-[440px] md:max-h-[480px] object-contain mix-blend-multiply select-none"
              loading="eager"
              decoding="async"
            />
          </motion.div>

          {/* Supporting Description underneath image */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-2xl mx-auto font-normal mt-2"
          >
            A great launch takes more than publishing a product page. We help founders prepare their positioning, coordinate launch activities, and build a clear distribution plan so their product gets the attention it deserves.
          </motion.p>

        </div>

        {/* 4 Connected Process Stages (Horizontal Row) */}
        <div className="relative pt-4">
          
          {/* Background Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[6%] right-[6%] h-[1px] bg-[#E5E9E5] -z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'left' }}
              className="h-full w-full bg-gradient-to-r from-[#246B32] via-[#459B45] to-[#E5F5E5] shadow-[0_0_14px_rgba(69,155,69,0.3)]"
            />
          </div>

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
                  className="fx-card-interactive p-7 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:shadow-[0_14px_32px_-8px_rgba(69,155,69,0.15)] flex flex-col justify-between space-y-6 group shadow-xs"
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
                    <span>Step 0{idx + 1}</span>
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
            Planning a SaaS or developer tool launch on Product Hunt?
          </div>
          <Button
            size="sm"
            onClick={onOpenBooking}
            className="bg-[#459B45] hover:bg-[#246B32] text-[#FFFFFF] text-xs font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full border border-[#459B45]/30 shadow-md shadow-[#459B45]/20 group transition-all cursor-pointer"
          >
            <span>DISCUSS YOUR LAUNCH</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>

    </section>
  );
});

ProcessSection.displayName = 'ProcessSection';
export default ProcessSection;
