import React from 'react';
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
  const rowOne = SUPPORTED_PRODUCT_HUNT_LAUNCHES.slice(0, 14);
  const rowTwo = SUPPORTED_PRODUCT_HUNT_LAUNCHES.slice(14);

  // Duplicated internally for a seamless infinite 0% -> -50% right-to-left loop
  const marqueeRowOne = [...rowOne, ...rowOne];
  const marqueeRowTwo = [...rowTwo, ...rowTwo];

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#08060F] border-y border-[#30213F] relative overflow-hidden z-10"
    >
      {/* Stationary Purple-Lavender Gradient Border Around the Entire Scrolling Section */}
      <div
        className="max-w-7xl mx-auto rounded-[20px] p-[1.5px] shadow-[0_10px_32px_-8px_rgba(112,40,216,0.25)] relative z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(182, 154, 255, 0.45) 0%, rgba(112, 40, 216, 0.55) 50%, rgba(53, 16, 107, 0.65) 100%)',
        }}
      >
        <div className="rounded-[18.5px] bg-gradient-to-b from-[#110B20] via-[#0B0812] to-[#08060F] border border-[#30213F]/50 py-14 sm:py-20 md:py-24 px-3 sm:px-6 md:px-10 relative overflow-hidden">
          {/* Upper Header Zone */}
          <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 relative z-20 text-center">
            {/* Small Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.28em] text-[#B69AFF] mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#B69AFF] shadow-[0_0_8px_#B69AFF]" />
              <span>PRODUCT HUNT · LAUNCH SUPPORT</span>
            </motion.div>

            {/* Refined, Elegant Main Heading (font-weight 500-600, reduced size, generous breathing room) */}
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl lg:text-[40px] font-display font-medium text-[#F8F6FF] tracking-[0.04em] leading-[1.22] uppercase"
            >
              SUPPORTED PRODUCTS <br />
              <span className="bg-gradient-to-r from-[#7028D8] via-[#9D6BFF] to-[#B69AFF] bg-clip-text text-transparent font-semibold">
                ON PRODUCT HUNT
              </span>
            </motion.h2>

            {/* Short Supporting Sentence */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-5 text-xs sm:text-sm text-[#B7AEC9] font-sans max-w-md mx-auto leading-relaxed font-normal"
            >
              Launch visibility, distribution and growth support for products building in public.
            </motion.p>
          </div>

          {/* Dedicated Lower Marquee Zone (Starts automatically on page load, continuous right-to-left loop) */}
          <div className="mt-14 sm:mt-20 relative w-full overflow-hidden py-5 sm:py-6 z-20">
            {/* Left & Right Soft Edge Fade Masks matching dark gradient */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#0B0812] via-[#0B0812]/90 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#0B0812] via-[#0B0812]/90 to-transparent z-10" />

            {/* ROW 1: RIGHT → LEFT */}
            <div className="py-3 sm:py-3.5 overflow-hidden">
              <div className="flex w-max items-center ph-marquee-track-row1">
                {marqueeRowOne.map((product, idx) => {
                  const isClone = idx >= rowOne.length;
                  return (
                    <a
                      key={`r1-${product.name}-${idx}`}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-hidden={isClone ? 'true' : undefined}
                      tabIndex={isClone ? -1 : undefined}
                      className="group inline-flex items-center gap-2.5 px-6 sm:px-9 py-1 shrink-0 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7028D8] group-hover:bg-[#B69AFF] transition-colors duration-300 shadow-[0_0_6px_rgba(112,40,216,0.6)]" />
                      <span className="text-[14px] sm:text-[16px] font-sans font-medium tracking-[0.01em] text-[#F8F6FF] group-hover:text-[#B69AFF] transition-colors whitespace-nowrap">
                        {product.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B7AEC9] group-hover:text-[#B69AFF] group-hover:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* ROW 2: RIGHT → LEFT */}
            <div className="py-3 sm:py-3.5 overflow-hidden mt-1">
              <div className="flex w-max items-center ph-marquee-track-row2">
                {marqueeRowTwo.map((product, idx) => {
                  const isClone = idx >= rowTwo.length;
                  return (
                    <a
                      key={`r2-${product.name}-${idx}`}
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-hidden={isClone ? 'true' : undefined}
                      tabIndex={isClone ? -1 : undefined}
                      className="group inline-flex items-center gap-2.5 px-6 sm:px-9 py-1 shrink-0 transition-colors duration-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B69AFF] group-hover:bg-[#7028D8] transition-colors duration-300 shadow-[0_0_6px_rgba(182,154,255,0.6)]" />
                      <span className="text-[14px] sm:text-[16px] font-sans font-medium tracking-[0.01em] text-[#F8F6FF] group-hover:text-[#B69AFF] transition-colors whitespace-nowrap">
                        {product.name}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B7AEC9] group-hover:text-[#B69AFF] group-hover:translate-x-0.5 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
