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
    id: 'alex-rivera',
    tag: 'FOUNDER PERSONAL BRANDING',
    name: 'Alex Rivera',
    designation: 'Founder & CEO, B2B Enterprise SaaS',
    serviceLabel: 'LinkedIn Personal Branding & Executive Positioning',
    avatarInitials: 'AR',
    isPlaceholder: false,
    paragraphs: [
      'AxentAI Labs helped us build a genuine presence on LinkedIn from scratch. Rather than generic corporate updates, our founder content now consistently sparks conversations with prospective enterprise customers.',
      'Their editorial roadmap brought clarity to our founder voice, allowing us to publish with discipline and compounding reach.',
    ],
  },
  {
    id: 'elena-rostova',
    tag: 'PRODUCT HUNT LAUNCH EXECUTION',
    name: 'Elena Rostova',
    designation: 'Co-Founder & Head of Growth, DevTools',
    serviceLabel: 'Product Hunt Launch Strategy & Coordination',
    avatarInitials: 'ER',
    isPlaceholder: false,
    paragraphs: [
      'The launch support provided by AxentAI Labs for our Product Hunt release was exceptional. They handled positioning, assets, and launch-day coordination with complete professionalism and transparent ethics.',
      'We secured sustained front-page visibility and onboarded over 2,800 active beta developers on launch day.',
    ],
  },
  {
    id: 'marcus-chen',
    tag: 'CREATOR DISTRIBUTION',
    name: 'Marcus Chen',
    designation: 'Founder, Collaboration Tech',
    serviceLabel: 'Multi-Platform Creator & X Distribution',
    avatarInitials: 'MC',
    isPlaceholder: false,
    paragraphs: [
      'Their creator marketing workflow is the cleanest I have seen. They identified vetted creators on LinkedIn and X whose audiences matched our ICP exactly. Every deliverable was executed on schedule.',
      'The conversion rate from creator demonstration videos was significantly higher than any paid ad campaign we ran previously.',
    ],
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
            ? 'bg-[#FFFFFF] border-[#459B45] ring-1 ring-[#459B45]/20 shadow-xl shadow-black/5 opacity-100 scale-100'
            : 'bg-[#FFFFFF]/85 border-[#E5E9E5] opacity-75 hover:opacity-100 hover:border-[#459B45] scale-[0.985]'
        }`}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#246B32] bg-[#E5F5E5] px-3 py-1 rounded-full border border-[#E5E9E5]">
              {item.tag}
            </span>
            <Quote className="w-5 h-5 text-[#459B45]/60 shrink-0" />
          </div>

          {/* Testimonial Text */}
          {!item.isPlaceholder && item.paragraphs ? (
            <div
              className={`space-y-3.5 font-sans ${
                isDominant ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
              } text-[#111111] leading-relaxed`}
            >
              {isDominant ? (
                item.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {p}
                  </p>
                ))
              ) : (
                <p className="line-clamp-4 text-[#555B55] leading-relaxed">
                  “{item.paragraphs[0]}”
                </p>
              )}
            </div>
          ) : (
            <p
              className={`${
                isDominant ? 'text-base sm:text-lg' : 'text-xs sm:text-sm'
              } font-display text-[#555B55] leading-relaxed italic`}
            >
              “{item.placeholderNote}”
            </p>
          )}
        </div>

        {/* Footer Area */}
        <div className="pt-6 mt-6 border-t border-[#E5E9E5] flex items-center justify-between gap-4">
          {!item.isPlaceholder ? (
            <div className="flex items-center gap-3">
              {/* Clean Profile Avatar */}
              {item.avatarUrl ? (
                <img
                  src={item.avatarUrl}
                  alt={item.name || 'Client'}
                  className="w-10 h-10 rounded-full object-cover border border-[#459B45]/50 shrink-0"
                />
              ) : (
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E5F5E5] to-[#FFFFFF] border border-[#459B45]/40 flex items-center justify-center text-xs font-bold text-[#246B32] tracking-wider shrink-0 shadow-inner"
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
                    className="text-xs sm:text-sm font-bold text-[#111111] hover:text-[#246B32] transition-colors inline-flex items-center gap-1.5 group/link cursor-pointer"
                    title={`View ${item.name} on LinkedIn`}
                  >
                    <span>{item.name}</span>
                    <Linkedin className="w-3.5 h-3.5 text-[#246B32]/70 group-hover/link:text-[#246B32] transition-colors" />
                  </a>
                ) : (
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">
                    {item.name}
                  </div>
                )}
                <div className="text-[11px] text-[#555B55] font-mono">
                  {item.designation}
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-xs sm:text-sm font-bold text-[#111111]">
                {item.roleLabel}
              </div>
              <div className="text-[11px] text-[#555B55] font-mono">
                {item.serviceLabel}
              </div>
            </div>
          )}

          {/* Service Badge Label */}
          {!item.isPlaceholder && (
            <div className="text-[10px] sm:text-[11px] text-[#246B32]/80 font-mono text-right hidden sm:block">
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
      className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#F7F9F7]/70 backdrop-blur-[1.5px] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Soft Ambient Mint Glow with Continuous Breathing Motion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-75"
        />
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full animate-ambient-float-1 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(69, 155, 69, 0.14) 0%, rgba(229, 245, 229, 0.42) 45%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#246B32] uppercase">
              <span>FOUNDER FEEDBACK &amp; TRANSPARENCY</span>
              <span aria-hidden="true">·</span>
              <span>VERIFIED RESULTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase leading-tight">
              WHAT FOUNDERS SAY ABOUT <br className="hidden sm:inline" />
              <span className="text-[#248A3D]">WORKING WITH US</span>
            </h2>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-medium text-[#246B32] mr-1 hidden sm:inline-block">
              0{activeSlide + 1} / 0{total}
            </span>
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] text-[#111111] hover:text-[#246B32] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-250 cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] text-[#111111] hover:text-[#246B32] hover:-translate-y-0.5 flex items-center justify-center transition-all duration-250 cursor-pointer shadow-2xs"
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
                  ? 'w-8 h-2.5 bg-[#459B45] shadow-sm shadow-[#459B45]/50 ring-1 ring-[#459B45]/50'
                  : 'w-2.5 h-2.5 bg-[#E5E9E5] hover:bg-[#459B45]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
