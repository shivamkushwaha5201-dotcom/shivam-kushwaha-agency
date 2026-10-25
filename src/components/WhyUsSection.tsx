import React, { useRef } from 'react';
import { motion } from 'motion/react';
import elephantAntImg from '../assets/images/IMG_9289_a102a36d_transparent.png';

export const WhyUsSection: React.FC = React.memo(() => {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      number: '01',
      title: 'STRATEGY FIRST',
      description: 'Every launch begins with clear positioning and a practical plan.',
    },
    {
      number: '02',
      title: 'ORGANIC-FIRST APPROACH',
      description: 'Focus on relevant communities, authentic conversations and sustainable visibility.',
    },
    {
      number: '03',
      title: 'FOUNDER-FOCUSED',
      description: 'Work closely with founders to prepare messaging and coordinate launch activities.',
    },
    {
      number: '04',
      title: 'TRANSPARENT EXECUTION',
      description: 'Clear deliverables, realistic expectations and honest performance reporting.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="py-28 md:py-36 bg-[#FFFFFF] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two-Column Section: Text & 4 Benefit Cards on Left, Elephant & Ant Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-14 items-center">
          
          {/* Left Column: Heading, Copy & 4 Cards */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 relative z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              {/* Section Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45] animate-pulse" />
                <span>WHY FOUNDERS WORK WITH US</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase">
                SMALL TEAM. <span className="text-[#248A3D]">BIG AMBITIONS.</span>
              </h2>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-xl font-normal">
                Every product deserves a thoughtful launch strategy. We focus on the fundamentals that help founders communicate their value and reach the right audience.
              </p>
            </motion.div>

            {/* 4 Benefit Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {benefits.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="fx-card-interactive p-6 sm:p-7 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] hover:border-[#459B45] hover:shadow-[0_12px_28px_-6px_rgba(69,155,69,0.14)] space-y-2 group shadow-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#459B45] tracking-widest">
                      * {item.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold text-[#111111] tracking-tight group-hover:text-[#246B32] transition-colors uppercase">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Elephant and Ant Visual (Frameless, Natural Cutout Integration, Large & Prominent) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative select-none py-2"
          >
            {/* Elephant and Ant with gentle floating animation */}
            <div className="elephant-float w-full flex items-center justify-center">
              <img
                src={elephantAntImg}
                alt="Ant lifting elephant symbolizing a small focused team accomplishing ambitious goals"
                className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] xl:max-w-[560px] h-auto object-contain select-none"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Subtle Floating Animation */}
      <style>{`
        @keyframes elephantGentleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .elephant-float {
          animation: elephantGentleFloat 6.5s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .elephant-float {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
});

WhyUsSection.displayName = 'WhyUsSection';
export default WhyUsSection;
