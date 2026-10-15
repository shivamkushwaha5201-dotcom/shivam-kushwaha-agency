import React from 'react';
import { motion } from 'motion/react';

export const WhyUsSection: React.FC = React.memo(() => {
  const reasons = [
    {
      number: '01',
      title: 'STRATEGY FIRST',
      description: 'We build around your actual growth goals.',
    },
    {
      number: '02',
      title: 'ORGANIC-FIRST',
      description: 'We focus on real visibility and meaningful audience growth.',
    },
    {
      number: '03',
      title: 'FOUNDER-FOCUSED',
      description: 'We understand how founders build authority online.',
    },
    {
      number: '04',
      title: 'EXECUTION',
      description: 'Strategy is only useful when it gets executed properly.',
    },
  ];

  return (
    <section
      id="why-us"
      className="py-28 md:py-36 bg-[#08060F] text-[#F8F6FF] border-t border-[#30213F] relative overflow-hidden font-sans z-10"
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
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16 space-y-3 relative z-20"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[#B98AFF] font-semibold font-mono">
            // WHY US?
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F8F7FC] tracking-[-0.02em] uppercase heading-contrast-shadow">
            WHY CHOOSE AXENTAILABS
          </h2>
          <p className="text-sm sm:text-base text-[#B9B1C9] leading-relaxed font-sans text-contrast-shadow">
            Creative growth systems engineered for real founder authority and measurable reach.
          </p>
        </motion.div>

        {/* 4 Strong Reasons (2x2 Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="fx-card-interactive p-8 sm:p-10 rounded-2xl bg-[#100B1B] border border-[#30213F] hover:border-[#7028D8] hover:shadow-[0_14px_32px_-8px_rgba(112,40,216,0.28)] space-y-3 group shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#B98AFF] tracking-widest">
                  * {item.number}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F8F7FC] tracking-tight group-hover:text-[#B98AFF] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#B9B1C9] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});
