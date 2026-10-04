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
      className="py-28 md:py-36 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold font-mono">
              // TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] uppercase">
              WHAT CLIENTS ARE{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] via-[#38BDF8] to-[#60A5FA]">
                SAYING
              </span>
            </h2>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-[#050B14] border border-white/15 hover:border-[#38BDF8] text-[#F8FAFC] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-[#050B14] border border-white/15 hover:border-[#38BDF8] text-[#F8FAFC] flex items-center justify-center transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider where ONE testimonial is visually dominant at a time */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {TESTIMONIAL_PLACEHOLDERS.map((item, idx) => {
            const isDominant = idx === activeSlide;

            return (
              <div
                key={item.id}
                onClick={() => setActiveSlide(idx)}
                className={`rounded-3xl border p-8 sm:p-10 flex flex-col justify-between cursor-pointer transition-[background-color,border-color,opacity,transform] duration-300 ${
                  isDominant
                    ? 'lg:col-span-6 bg-[#050B14]/92 border-[#38BDF8]/50 shadow-2xl shadow-blue-500/10 opacity-100 scale-100'
                    : 'lg:col-span-3 bg-[#050B14]/55 border-white/10 opacity-55 hover:opacity-80 scale-[0.98]'
                }`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#38BDF8] bg-blue-500/10 px-3 py-1 rounded-full border border-blue-400/20">
                      {item.tag}
                    </span>
                    <Quote className="w-5 h-5 text-[#38BDF8]/50" />
                  </div>

                  <p className={`${isDominant ? 'text-lg sm:text-xl' : 'text-sm'} font-display text-[#F8FAFC] leading-relaxed`}>
                    “{item.placeholderNote}”
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {item.roleLabel}
                    </div>
                    <div className="text-[11px] text-[#94A3B8] font-mono">
                      {item.serviceLabel}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
