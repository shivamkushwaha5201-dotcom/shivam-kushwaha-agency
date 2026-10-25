import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import elephantAntImg from '../assets/images/IMG_9289_a102a36d_transparent.png';

interface WhyUsSectionProps {
  onOpenBooking?: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = React.memo(({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);

  const pillars = [
    {
      number: '01',
      title: 'Dedicated Launch Engineering',
      description: 'Strategic Product Hunt positioning, launch-day coordination, community outreach, and runway preparation.'
    },
    {
      number: '02',
      title: 'Founder Authority Systems',
      description: 'Turn founder insights into authority, network leverage, and high-trust inbound conversations on LinkedIn and X.'
    },
    {
      number: '03',
      title: 'Active Content Operations',
      description: 'Company page management, editorial schedules, and organic audience engagement without bloated agency overhead.'
    },
    {
      number: '04',
      title: 'Targeted Creator Distribution',
      description: 'Curated niche creator partnerships, technical dialogue, and high-intent community advocacy that actually converts.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#FFFFFF]/75 backdrop-blur-[1.5px] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Soft Ambient Mint Glow with Continuous Breathing Motion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-80"
        />
        {/* Soft Ambient Glow Behind Small-Team Elephant & Ant Composition */}
        <div
          className="absolute top-1/2 right-[12%] -translate-y-1/2 w-[520px] h-[520px] rounded-full animate-ambient-float-1 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(69, 155, 69, 0.15) 0%, rgba(229, 245, 229, 0.42) 45%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Balanced Two-Column Split: Editorial Narrative on Left, Large Frameless Ant & Elephant on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Heading, Core Narrative & Clean Editorial Pillars */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-8 relative z-20">
            
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3.5"
            >
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#246B32] uppercase">
                <span>WHY FOUNDERS WORK WITH US</span>
                <span aria-hidden="true">·</span>
                <span>OUTSIZED LEVERAGE</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase leading-tight">
                ONE PARTNER. <br className="hidden sm:inline" />
                <span className="text-[#248A3D]">MULTIPLE GROWTH CHANNELS.</span>
              </h2>

              <p className="text-sm font-semibold uppercase tracking-wider text-[#246B32] font-mono">
                Small team. Big ambitions. Outsized leverage.
              </p>

              <p className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-xl font-normal">
                We combine product launch expertise, founder branding, content management, and relevant creator partnerships to help modern brands build visibility across multiple channels.
              </p>
            </motion.div>

            {/* Editorial Advantage List with Hairline Dividers (No Clunky Cards) */}
            <div className="border-t border-[#E5E9E5] divide-y divide-[#E5E9E5]">
              {pillars.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="py-4.5 sm:py-5 flex items-start gap-4 group"
                >
                  <span className="font-mono text-xs font-bold text-[#459B45] tracking-widest pt-1 shrink-0">
                    {item.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base sm:text-lg font-display font-bold text-[#111111] tracking-tight group-hover:text-[#246B32] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {onOpenBooking && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#246B32] hover:text-[#1E5B2A] transition-colors cursor-pointer group"
                >
                  <span>Discuss Your Growth Roadmap</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Elephant and Ant Visual (Frameless, Natural Cutout, Large & Impactful) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 xl:col-span-6 flex items-center justify-center relative select-none py-4"
          >
            {/* Elephant and Ant floating cleanly without any box or frame */}
            <div className="elephant-float w-full flex items-center justify-center">
              <img
                src={elephantAntImg}
                alt="Ant lifting elephant symbolizing a small focused team accomplishing ambitious goals"
                className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[500px] lg:max-w-[540px] xl:max-w-[580px] h-auto object-contain select-none pointer-events-none drop-shadow-[0_24px_45px_rgba(0,0,0,0.08)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

        </div>

      </div>

      {/* Gentle Floating Animation */}
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
