import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface SupportedProduct {
  name: string;
  url: string;
}

const SUPPORTED_PRODUCT_HUNT_LAUNCHES: SupportedProduct[] = [
  { name: 'Enia Code', url: 'https://www.producthunt.com/products/enia-code' },
  { name: 'StoreClaw', url: 'https://www.producthunt.com/products/storeclaw' },
  { name: 'Outify', url: 'https://www.producthunt.com/products/outify' },
  { name: 'Eddie AI', url: 'https://www.producthunt.com/products/eddie-ai' },
  { name: 'CTRUH Studio', url: 'https://www.producthunt.com/products/ctruh' },
  { name: 'Hey Noah', url: 'https://www.producthunt.com/products/hey-noah' },
  { name: 'Ito', url: 'https://www.producthunt.com/products/ito' },
  { name: 'BrowserAct', url: 'https://www.producthunt.com/products/browseract' },
  { name: 'Clears', url: 'https://www.producthunt.com/products/clears' },
  { name: 'Supernova AI', url: 'https://www.producthunt.com/products/supernova' },
  { name: 'Speko', url: 'https://www.producthunt.com/products/speko' },
  { name: 'Keplars', url: 'https://www.producthunt.com/products/keplars' },
  { name: 'OpenUI', url: 'https://www.producthunt.com/products/openui' },
  { name: 'Your Next Store', url: 'https://www.producthunt.com/products/your-next-store' },
  { name: 'Chronicle', url: 'https://www.producthunt.com/products/chronicle' },
  { name: 'MorphMind', url: 'https://www.producthunt.com/products/morphmind' },
  { name: 'ZooClaw', url: 'https://www.producthunt.com/products/zooclaw' },
  { name: 'Lessie AI', url: 'https://www.producthunt.com/products/lessie-ai' },
  { name: 'NativeBridge', url: 'https://www.producthunt.com/products/nativebridge' },
  { name: 'Naptick AI', url: 'https://www.producthunt.com/products/naptick-ai' },
  { name: 'Huddle01', url: 'https://www.producthunt.com/products/huddle01' },
  { name: 'Mom Clock', url: 'https://www.producthunt.com/products/mom-clock' },
  { name: 'Computable GPU Index', url: 'https://www.producthunt.com/products/computable-gpu-index' },
  { name: 'Brandjet', url: 'https://www.producthunt.com/products/brandjet' },
  { name: 'Olostep', url: 'https://www.producthunt.com/products/olostep' },
  { name: '1752VC Pitch Deck Analyzer', url: 'https://www.producthunt.com/products/1752vc-pitch-deck-analyzer' },
  { name: 'Caddi', url: 'https://www.producthunt.com/products/caddi' },
  { name: 'Skydive', url: 'https://www.producthunt.com/products/skydive' },
];

export const TrustedByMarquee: React.FC = React.memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setInView(entries[0].isIntersecting);
        }
      },
      { rootMargin: '250px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const rowOne = SUPPORTED_PRODUCT_HUNT_LAUNCHES.slice(0, 14);
  const rowTwo = SUPPORTED_PRODUCT_HUNT_LAUNCHES.slice(14);

  // Duplicated internally for a seamless infinite 0% -> -50% loop
  const marqueeRowOne = [...rowOne, ...rowOne];
  const marqueeRowTwo = [...rowTwo, ...rowTwo];

  return (
    <section
      ref={sectionRef}
      className="pt-28 pb-32 md:pt-36 md:pb-40 bg-transparent relative overflow-hidden z-10"
    >
      {/* Upper Header Zone with Subtle Radial Atmospheric Backing */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        {/* Localized dark radial atmospheric gradient behind central text (No rectangular box or opaque panel) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-16 -inset-y-14 sm:-inset-x-28 sm:-inset-y-20 -z-10"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(2, 6, 15, 0.90) 0%, rgba(2, 6, 15, 0.72) 38%, rgba(2, 6, 15, 0.30) 68%, transparent 100%)',
          }}
        />

        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#38BDF8] mb-5 text-contrast-shadow"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6154]" />
          <span>PRODUCT HUNT · LAUNCH SUPPORT</span>
        </motion.div>

        {/* Refined, Elegant Main Heading (font-weight 500-600, reduced size, generous breathing room) */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl lg:text-[40px] font-display font-medium text-[#F8FAFC] tracking-[0.04em] leading-[1.22] uppercase heading-contrast-shadow"
        >
          SUPPORTED PRODUCTS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0F2FE] via-[#7DD3FC] to-[#38BDF8] font-semibold">
            ON PRODUCT HUNT
          </span>
        </motion.h2>

        {/* Short Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-5 text-xs sm:text-sm text-[#E2E8F0] font-sans max-w-md mx-auto leading-relaxed font-normal text-contrast-shadow"
        >
          Launch visibility, distribution and growth support for products building in public.
        </motion.p>
      </div>

      {/* Dedicated Lower Marquee Zone (Positioned well below the heading in its own horizontal band) */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.85, delay: 0.2 }}
        className={`mt-20 sm:mt-28 relative w-full overflow-hidden py-5 sm:py-6 z-20 ${
          inView ? '' : 'ph-marquee-offscreen'
        }`}
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(2, 6, 15, 0.80) 18%, rgba(3, 8, 20, 0.90) 50%, rgba(2, 6, 15, 0.80) 82%, transparent 100%)',
        }}
      >
        {/* Left & Right Soft Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#02050B] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#02050B] to-transparent z-10" />

        {/* ROW 1: RIGHT → LEFT */}
        <div className="py-3 sm:py-3.5 overflow-hidden">
          <div
            style={{ willChange: inView ? 'transform' : 'auto' }}
            className="flex w-max items-center ph-marquee-ltr"
          >
            {marqueeRowOne.map((product, idx) => (
              <a
                key={`r1-${product.name}-${idx}`}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-9 py-1 shrink-0 transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] group-hover:bg-[#FF6154] transition-colors duration-300" />
                <span className="text-[14px] sm:text-[16px] font-sans font-medium tracking-[0.01em] text-[#F8FAFC] group-hover:text-white transition-colors whitespace-nowrap marquee-item-shadow">
                  {product.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CBD5E1]/80 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        {/* ROW 2: LEFT → RIGHT */}
        <div className="py-3 sm:py-3.5 overflow-hidden mt-1">
          <div
            style={{ willChange: inView ? 'transform' : 'auto' }}
            className="flex w-max items-center ph-marquee-rtl"
          >
            {marqueeRowTwo.map((product, idx) => (
              <a
                key={`r2-${product.name}-${idx}`}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 sm:px-9 py-1 shrink-0 transition-colors duration-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] group-hover:bg-[#FF6154] transition-colors duration-300" />
                <span className="text-[14px] sm:text-[16px] font-sans font-medium tracking-[0.01em] text-[#E2E8F0] group-hover:text-white transition-colors whitespace-nowrap marquee-item-shadow">
                  {product.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#CBD5E1]/75 group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* GPU-accelerated translate3d infinite marquee keyframes with pause-on-hover and offscreen pause */}
      <style>{`
        @keyframes phMarqueeLeft {
          0% { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes phMarqueeRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0%, 0, 0); }
        }
        .ph-marquee-ltr {
          animation: phMarqueeLeft 72s linear infinite;
          backface-visibility: hidden;
        }
        .ph-marquee-rtl {
          animation: phMarqueeRight 78s linear infinite;
          backface-visibility: hidden;
        }
        @media (min-width: 768px) {
          .ph-marquee-ltr {
            animation-duration: 60s;
          }
          .ph-marquee-rtl {
            animation-duration: 66s;
          }
        }
        .ph-marquee-ltr:hover,
        .ph-marquee-rtl:hover,
        .ph-marquee-offscreen .ph-marquee-ltr,
        .ph-marquee-offscreen .ph-marquee-rtl {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
});
