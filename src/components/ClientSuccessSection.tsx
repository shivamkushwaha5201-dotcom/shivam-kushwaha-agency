import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface ClientSuccessSectionProps {
  onOpenBooking?: () => void;
}

const TESTIMONIAL_PLACEHOLDERS = [
  {
    id: 'slot-01',
    tag: 'FOUNDER PERSONAL BRANDING',
    placeholderNote: 'Client testimonial slot reserved for verified founder quote.',
    roleLabel: 'Founder & CEO — Partner Brand (Placeholder)',
    serviceLabel: 'LinkedIn Personal Branding & Executive Positioning',
  },
  {
    id: 'slot-02',
    tag: 'PRODUCT HUNT LAUNCH SUPPORT',
    placeholderNote: 'Client testimonial slot reserved for verified maker launch feedback.',
    roleLabel: 'Co-Founder — Supported Product Launch (Placeholder)',
    serviceLabel: 'Product Hunt Launch Strategy & Execution',
  },
  {
    id: 'slot-03',
    tag: 'CREATOR DISTRIBUTION',
    placeholderNote: 'Client testimonial slot reserved for verified campaign partner review.',
    roleLabel: 'Growth Lead — Partner Team (Placeholder)',
    serviceLabel: 'Multi-Platform Influencer Marketing',
  },
];

export const ClientSuccessSection: React.FC<ClientSuccessSectionProps> = React.memo(() => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? TESTIMONIAL_PLACEHOLDERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === TESTIMONIAL_PLACEHOLDERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonials"
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#B98AFF] font-semibold font-mono">
              // TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F8F7FC] tracking-[-0.02em] uppercase">
              WHAT CLIENTS ARE{' '}
              <span className="text-[#B98AFF]">
                SAYING
              </span>
            </h2>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-[#100B1B] border border-[#30213F] hover:border-[#7028D8] text-[#F8F7FC] hover:text-[#B98AFF] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-250 cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-[#100B1B] border border-[#30213F] hover:border-[#7028D8] text-[#F8F7FC] hover:text-[#B98AFF] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-250 cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Horizontal Slider where ONE testimonial is visually dominant at a time */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {TESTIMONIAL_PLACEHOLDERS.map((item, idx) => {
            const isDominant = idx === activeSlide;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveSlide(idx)}
                className={`fx-card-interactive rounded-3xl border p-8 sm:p-10 flex flex-col justify-between cursor-pointer ${
                  isDominant
                    ? 'lg:col-span-6 bg-[#100B1B] border-[#7028D8] ring-1 ring-[#B98AFF]/20 shadow-xl shadow-black/60 opacity-100 scale-100'
                    : 'lg:col-span-3 bg-[#100B1B]/75 border-[#30213F] opacity-75 hover:opacity-100 hover:border-[#7028D8] scale-[0.985]'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#B98AFF] bg-[#35106B]/60 px-3 py-1 rounded-full border border-[#30213F]">
                      {item.tag}
                    </span>
                    <Quote className="w-5 h-5 text-[#B98AFF]/60" />
                  </div>

                  <p className={`${isDominant ? 'text-lg sm:text-xl' : 'text-sm'} font-display text-[#F8F7FC] leading-relaxed`}>
                    “{item.placeholderNote}”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#30213F] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-[#F8F7FC]">
                      {item.roleLabel}
                    </div>
                    <div className="text-[11px] text-[#B9B1C9] font-mono">
                      {item.serviceLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
