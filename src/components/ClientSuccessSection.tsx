import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Linkedin } from 'lucide-react';

interface ClientSuccessSectionProps {
  onOpenBooking?: () => void;
}

interface TestimonialItem {
  id: string;
  tag: string;
  name?: string;
  designation?: string;
  linkedinUrl?: string;
  serviceLabel: string;
  roleLabel?: string;
  placeholderNote?: string;
  avatarInitials?: string;
  avatarUrl?: string;
  paragraphs?: string[];
  isPlaceholder: boolean;
}

const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: 'dounia-b',
    tag: 'PRODUCT HUNT LAUNCH SUPPORT',
    name: 'Dounia B.',
    designation: 'Founder of Oktomer',
    linkedinUrl: 'https://www.linkedin.com/in/dounia-boughalem-4aab22108',
    serviceLabel: 'Product Hunt Launch Strategy & Execution',
    avatarInitials: 'DB',
    isPlaceholder: false,
    paragraphs: [
      'Shivam has extensive knowledge of how to boost your brand and product visibility and put your business in the spotlight.',
      'He guided and supported me throughout my recent launch of Oktomer on Product Hunt. He knows the platform inside out and has all the right tips and insights to help you make the most of it.',
      'He even encouraged me to try new things I was initially hesitant about, which turned out to be great ideas!',
    ],
  },
  {
    id: 'slot-01',
    tag: 'FOUNDER PERSONAL BRANDING',
    placeholderNote: 'Client testimonial slot reserved for verified founder quote.',
    roleLabel: 'Founder & CEO — Partner Brand (Placeholder)',
    serviceLabel: 'LinkedIn Personal Branding & Executive Positioning',
    avatarInitials: 'FP',
    isPlaceholder: true,
  },
  {
    id: 'slot-02',
    tag: 'PRODUCT HUNT LAUNCH SUPPORT',
    placeholderNote: 'Client testimonial slot reserved for verified maker launch feedback.',
    roleLabel: 'Co-Founder — Supported Product Launch (Placeholder)',
    serviceLabel: 'Product Hunt Launch Strategy & Execution',
    avatarInitials: 'PH',
    isPlaceholder: true,
  },
  {
    id: 'slot-03',
    tag: 'CREATOR DISTRIBUTION',
    placeholderNote: 'Client testimonial slot reserved for verified campaign partner review.',
    roleLabel: 'Growth Lead — Partner Team (Placeholder)',
    serviceLabel: 'Multi-Platform Influencer Marketing',
    avatarInitials: 'CD',
    isPlaceholder: true,
  },
];

export const ClientSuccessSection: React.FC<ClientSuccessSectionProps> = React.memo(() => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = TESTIMONIAL_ITEMS.length;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (deltaX > 40) {
      handleNext();
    } else if (deltaX < -40) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const renderCard = (
    item: TestimonialItem,
    isDominant: boolean,
    spanClass: string,
    onCardClick?: () => void,
    keyPrefix = 'card'
  ) => {
    return (
      <motion.div
        key={`${keyPrefix}-${item.id}`}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -18 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        onClick={onCardClick}
        className={`fx-card-interactive rounded-3xl border p-7 sm:p-10 flex flex-col justify-between transition-all duration-300 ${spanClass} ${
          onCardClick ? 'cursor-pointer' : ''
        } ${
          isDominant
            ? 'bg-[#100B1B] border-[#7028D8] ring-1 ring-[#B98AFF]/20 shadow-xl shadow-black/60 opacity-100 scale-100'
            : 'bg-[#100B1B]/75 border-[#30213F] opacity-75 hover:opacity-100 hover:border-[#7028D8] scale-[0.985]'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#B98AFF] bg-[#35106B]/60 px-3 py-1 rounded-full border border-[#30213F]">
              {item.tag}
            </span>
            <Quote className="w-5 h-5 text-[#B98AFF]/60 shrink-0" />
          </div>

          {/* Testimonial Text */}
          {!item.isPlaceholder && item.paragraphs ? (
            <div
              className={`space-y-3.5 font-sans ${
                isDominant ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              } text-[#F8F7FC] leading-relaxed`}
            >
              {isDominant ? (
                item.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))
              ) : (
                <p className="line-clamp-4 text-[#B9B1C9] leading-relaxed">
                  “{item.paragraphs[0]}”
                </p>
              )}
            </div>
          ) : (
            <p
              className={`${
                isDominant ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'
              } font-display text-[#B9B1C9] leading-relaxed italic`}
            >
              “{item.placeholderNote}”
            </p>
          )}
        </div>

        {/* Footer Area */}
        <div className="pt-6 mt-6 border-t border-[#30213F] flex items-center justify-between gap-4">
          {!item.isPlaceholder ? (
            <div className="flex items-center gap-3">
              {/* Clean Profile Avatar Placeholder */}
              {item.avatarUrl ? (
                <img
                  src={item.avatarUrl}
                  alt={item.name || 'Client'}
                  className="w-10 h-10 rounded-full object-cover border border-[#7028D8]/50 shrink-0"
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#35106B] to-[#100B1B] border border-[#7028D8]/50 flex items-center justify-center text-xs font-bold text-[#B98AFF] tracking-wider shrink-0 shadow-inner"
                  aria-label={`${item.name} avatar placeholder`}
                >
                  {item.avatarInitials || 'DB'}
                </div>
              )}
              <div>
                {item.linkedinUrl ? (
                  <a
                    href={item.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs sm:text-sm font-bold text-[#F8F7FC] hover:text-[#B98AFF] transition-colors inline-flex items-center gap-1.5 group/link cursor-pointer"
                    title={`View ${item.name} on LinkedIn`}
                  >
                    <span>{item.name}</span>
                    <Linkedin className="w-3.5 h-3.5 text-[#B98AFF]/70 group-hover/link:text-[#B98AFF] transition-colors" />
                  </a>
                ) : (
                  <div className="text-xs sm:text-sm font-bold text-[#F8F7FC]">
                    {item.name}
                  </div>
                )}
                <div className="text-[11px] text-[#B9B1C9] font-mono">
                  {item.designation}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#F8F7FC]">
                {item.roleLabel}
              </div>
              <div className="text-[11px] text-[#B9B1C9] font-mono">
                {item.serviceLabel}
              </div>
            </div>
          )}

          {/* Service Badge Label */}
          {!item.isPlaceholder && (
            <div className="text-[10px] sm:text-[11px] text-[#B98AFF]/80 font-mono text-right hidden sm:block">
              {item.serviceLabel}
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  // Visible items for desktop sliding window (3 items: 6 cols dominant + 3 cols + 3 cols = 12 cols)
  const desktopVisible = [
    { item: TESTIMONIAL_ITEMS[activeSlide], isDominant: true, spanClass: 'lg:col-span-6', onClick: undefined },
    {
      item: TESTIMONIAL_ITEMS[(activeSlide + 1) % total],
      isDominant: false,
      spanClass: 'lg:col-span-3',
      onClick: () => setActiveSlide((activeSlide + 1) % total),
    },
    {
      item: TESTIMONIAL_ITEMS[(activeSlide + 2) % total],
      isDominant: false,
      spanClass: 'lg:col-span-3',
      onClick: () => setActiveSlide((activeSlide + 2) % total),
    },
  ];

  // Visible items for tablet (2 items)
  const tabletVisible = [
    { item: TESTIMONIAL_ITEMS[activeSlide], isDominant: true, spanClass: 'col-span-1', onClick: undefined },
    {
      item: TESTIMONIAL_ITEMS[(activeSlide + 1) % total],
      isDominant: false,
      spanClass: 'col-span-1',
      onClick: () => setActiveSlide((activeSlide + 1) % total),
    },
  ];

  // Mobile: 1 item (dominant active slide)
  const mobileVisible = {
    item: TESTIMONIAL_ITEMS[activeSlide],
    isDominant: true,
    spanClass: 'col-span-1',
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
            <span className="text-xs font-mono font-medium text-[#B98AFF]/80 mr-1 hidden sm:inline-block">
              0{activeSlide + 1} / 0{total}
            </span>
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

        {/* Carousel Container with Touch Support */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative select-none"
        >
          {/* Desktop Layout: 12-column grid showing 3 cards (6 cols dominant + 3 cols + 3 cols) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6 items-stretch">
            <AnimatePresence mode="popLayout" initial={false}>
              {desktopVisible.map((v) =>
                renderCard(v.item, v.isDominant, v.spanClass, v.onClick, 'desktop')
              )}
            </AnimatePresence>
          </div>

          {/* Tablet Layout: 2-column grid showing 2 cards */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-6 items-stretch">
            <AnimatePresence mode="popLayout" initial={false}>
              {tabletVisible.map((v) =>
                renderCard(v.item, v.isDominant, v.spanClass, v.onClick, 'tablet')
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Layout: 1 card (Single-dominant view with touch swipe) */}
          <div className="block md:hidden">
            <AnimatePresence mode="wait" initial={false}>
              {renderCard(
                mobileVisible.item,
                mobileVisible.isDominant,
                mobileVisible.spanClass,
                undefined,
                'mobile'
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Dots Navigation */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {TESTIMONIAL_ITEMS.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Jump to slide ${idx + 1}: ${item.name || item.tag}`}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                activeSlide === idx
                  ? 'w-8 h-2.5 bg-[#7028D8] shadow-sm shadow-[#7028D8]/50 ring-1 ring-[#B98AFF]/50'
                  : 'w-2.5 h-2.5 bg-[#30213F] hover:bg-[#B98AFF]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
