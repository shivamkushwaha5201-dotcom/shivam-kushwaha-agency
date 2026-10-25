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
  // Duplicated internally for a seamless infinite 0% -> -50% right-to-left loop
  const marqueeProducts = [
    ...SUPPORTED_PRODUCT_HUNT_LAUNCHES,
    ...SUPPORTED_PRODUCT_HUNT_LAUNCHES,
  ];

  return (
    <section className="py-14 sm:py-18 md:py-24 w-full relative overflow-hidden z-10 bg-transparent">
      {/* Upper Header Zone (Centered Container) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center mb-10 sm:mb-12 md:mb-14">
        {/* Small Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono font-semibold uppercase tracking-[0.28em] text-[#246B32] mb-4 sm:mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45]" />
          <span>PRODUCT HUNT · LAUNCH SUPPORT</span>
        </motion.div>

        {/* Refined Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl lg:text-[40px] font-display font-medium text-[#111111] tracking-[0.04em] leading-[1.22] uppercase"
        >
          SUPPORTED PRODUCTS <br />
          <span className="bg-gradient-to-r from-[#246B32] via-[#459B45] to-[#459B45] bg-clip-text text-transparent font-semibold">
            ON PRODUCT HUNT
          </span>
        </motion.h2>

        {/* Short Supporting Sentence */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mt-4 sm:mt-5 text-xs sm:text-sm text-[#555B55] font-sans max-w-md mx-auto leading-relaxed font-normal"
        >
          Launch visibility, distribution and growth support for products building in public.
        </motion.p>
      </div>

      {/* Full-Width Scrolling Strip (Edge-to-Edge, 100% Viewport Width, Thin Green Top & Bottom Borders) */}
      <div className="w-full relative overflow-hidden border-y border-[#459B45]/25 sm:border-[#459B45]/30 bg-[#F7F9F7]/70 backdrop-blur-[2px] py-4 sm:py-5">
        {/* Left & Right Soft Edge Fade Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/85 to-transparent z-10" />

        {/* Single Horizontal Continuous Infinite Marquee Track */}
        <div className="flex w-max items-center ph-marquee-track">
          {marqueeProducts.map((product, idx) => {
            const isClone = idx >= SUPPORTED_PRODUCT_HUNT_LAUNCHES.length;
            return (
              <a
                key={`ph-${product.name}-${idx}`}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden={isClone ? 'true' : undefined}
                tabIndex={isClone ? -1 : undefined}
                className="group inline-flex items-center gap-2.5 px-6 sm:px-8 md:px-10 py-1.5 shrink-0 transition-colors duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#459B45] group-hover:bg-[#246B32] transition-colors duration-200 shrink-0 shadow-[0_0_6px_rgba(69,155,69,0.4)]" />
                <span className="text-[14px] sm:text-[15px] md:text-[16px] font-sans font-medium tracking-[0.01em] text-[#111111] group-hover:text-[#246B32] transition-colors whitespace-nowrap">
                  {product.name}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#555B55]/70 group-hover:text-[#459B45] group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
});
