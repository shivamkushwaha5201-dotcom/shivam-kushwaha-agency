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
      className="py-28 md:py-36 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3 relative z-20">
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
            // WHY US?
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] uppercase heading-contrast-shadow">
            WHY CHOOSE AXENTAILABS
          </h2>
          <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-sans text-contrast-shadow">
            Creative growth systems engineered for real founder authority and measurable reach.
          </p>
        </div>

        {/* 4 Strong Reasons (2x2 Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 sm:p-10 rounded-2xl bg-[#080B12]/90 border border-white/10 hover:border-[#3B82F6]/40 transition-colors space-y-3 group shadow-xl shadow-black/50"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#60A5FA] tracking-widest">
                  * {item.number}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F8FAFC] tracking-tight group-hover:text-[#60A5FA] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#94A3B8] leading-relaxed font-normal">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});
