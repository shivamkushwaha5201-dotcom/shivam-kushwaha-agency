import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Layers, Compass, TrendingUp } from 'lucide-react';
import shivamApprovedPhoto from '../assets/images/shivam_profile.jpeg';
import shivamProfileWebp from '../assets/images/shivam_profile_opt.webp';
import tigerDoorImg from '../assets/images/tiger_door_growth.jpg';
import { scrollCoordinator } from '../lib/scrollCoordinator';

// Zero-React-render 100+ Happy Customers Counter (Mutates textContent directly via rAF, stops on completion)
const HappyCustomersCounter: React.FC = React.memo(() => {
  const counterRef = useRef<HTMLDivElement>(null);
  const numberSpanRef = useRef<HTMLSpanElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const el = counterRef.current;
    if (!el) return;

    let rafId: number | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          observer.disconnect();

          const durationMs = 1750;
          const startTime = performance.now();
          let lastRendered = -1;

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / durationMs, 1);
            // Smooth cubic ease-out
            const eased = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.round(eased * 100);

            if (currentVal !== lastRendered && numberSpanRef.current) {
              lastRendered = currentVal;
              numberSpanRef.current.textContent = String(currentVal);
            }

            if (progress < 1) {
              rafId = requestAnimationFrame(tick);
            } else {
              if (numberSpanRef.current) {
                numberSpanRef.current.textContent = '100';
              }
              rafId = null;
            }
          };

          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={counterRef}
      className="px-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs flex flex-col justify-center"
    >
      <div className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight leading-none tabular-nums">
        <span ref={numberSpanRef}>0</span>
        <span className="text-[#459B45]">+</span>
      </div>
      <div className="text-[11px] text-[#555B55] font-sans mt-1 leading-none">
        Happy Customers
      </div>
    </div>
  );
});

HappyCustomersCounter.displayName = 'HappyCustomersCounter';

interface TrustSectionProps {
  onOpenBooking?: () => void;
}

const PILLARS = [
  {
    title: 'Product Hunt Launch Strategy (Flagship)',
    icon: Compass,
  },
  {
    title: 'Founder Authority & Executive Positioning',
    icon: Layers,
  },
  {
    title: 'LinkedIn & Social Presence Operations',
    icon: Zap,
  },
  {
    title: 'Creator Partnerships & Digital Distribution',
    icon: TrendingUp,
  },
];

export const TrustSection: React.FC<TrustSectionProps> = React.memo(({ onOpenBooking }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  // Unified scrollCoordinator parallax + IntersectionObserver offscreen pause
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let isVisible = false;
    let sectionTop = el.offsetTop;
    let sectionHeight = el.offsetHeight || 600;

    const cacheMetrics = () => {
      if (!sectionRef.current) return;
      sectionTop = sectionRef.current.offsetTop;
      sectionHeight = sectionRef.current.offsetHeight || 600;
    };

    const unsubscribeScroll = scrollCoordinator.subscribe(
      (m) => {
        if (isVisible && parallaxRef.current) {
          const rawProgress = (m.scrollY + m.winHeight - sectionTop) / (m.winHeight + sectionHeight);
          const clamped = Math.min(1, Math.max(0, rawProgress));
          const offsetY = 14 - clamped * 28; // Subtle +14px -> -14px scroll reveal
          parallaxRef.current.style.transform = `translate3d(0, ${offsetY.toFixed(1)}px, 0)`;
        }
        return false;
      },
      () => {
        cacheMetrics();
      }
    );

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          isVisible = entries[0].isIntersecting;
          setInView(isVisible);
          if (isVisible) {
            cacheMetrics();
            scrollCoordinator.wake();
          }
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      unsubscribeScroll();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-growth"
      className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#FFFFFF]/75 backdrop-blur-[1.5px] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden z-10 font-sans"
    >
      {/* Soft Ambient Mint Glow with Continuous Breathing Motion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-80"
        />
        <div
          className="absolute top-1/3 left-[5%] w-[480px] h-[480px] rounded-full animate-ambient-float-1 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(69, 155, 69, 0.15) 0%, rgba(229, 245, 229, 0.42) 45%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT: Tiger-and-Door Image with Gentle Scroll Parallax & Ambient Halo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Viewport Reveal Wrapper */}
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[420px]"
            >
              {/* Parallax Container */}
              <div
                ref={parallaxRef}
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  willChange: inView ? 'transform' : 'auto',
                  backfaceVisibility: 'hidden',
                }}
                className="relative w-full"
              >
                {/* Soft Mint Ambient Glow Around the Doorway */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 sm:-inset-10 rounded-[44px] pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 45% 40%, rgba(69, 155, 69, 0.22) 0%, rgba(229, 245, 229, 0.45) 48%, transparent 72%)',
                    filter: 'blur(28px)',
                  }}
                />

                {/* Tiger & Door Visual Container — Editorial Photo Without Artificial Inner Frame */}
                <div
                  className="relative rounded-2xl overflow-hidden border border-[#E5E9E5] shadow-[0_16px_40px_rgba(0,0,0,0.08)] aspect-[4/5] flex items-center justify-center group"
                >
                  <img
                    src={tigerDoorImg}
                    alt="Outgrow Your Competition — Step through the doorway with launch momentum"
                    className="w-full h-full object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Subtle inner hairline ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                </div>

                {/* Rotating Circular Explore Badge (Pauses offscreen) */}
                <a
                  href="#services"
                  aria-label="Explore Growth Systems"
                  className="absolute -bottom-5 -right-3 sm:-right-5 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFFFFF]/95 backdrop-blur-sm border border-[#E5E9E5] shadow-xl shadow-[#459B45]/10 flex items-center justify-center group cursor-pointer z-20"
                >
                  <svg
                    viewBox="0 0 120 120"
                    style={{ animationPlayState: inView ? 'running' : 'paused' }}
                    className="w-full h-full animate-[spin_18s_linear_infinite]"
                  >
                    <defs>
                      <path
                        id="circleTextPathTiger"
                        d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                      />
                    </defs>
                    <text className="fill-[#555B55] text-[9px] font-mono uppercase tracking-[0.22em]">
                      <textPath href="#circleTextPathTiger" startOffset="0%">
                        • STRATEGY • LAUNCH • GROWTH
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute w-10 h-10 rounded-full bg-[#459B45] group-hover:bg-[#246B32] text-white flex items-center justify-center shadow-md shadow-[#459B45]/35 transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Central Brand Positioning & Growth Systems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-7 relative z-20 text-left"
          >
            <div className="space-y-4">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
                <span>GROWTH SYSTEMS &amp; POSITIONING</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-[46px] font-display font-extrabold text-[#111111] tracking-[-0.025em] leading-[1.08] uppercase">
                GROWTH SYSTEMS FOR <br className="hidden sm:inline" />
                <span className="text-[#248A3D]">FOUNDERS, STARTUPS &amp; MODERN BRANDS</span>
              </h2>

              {/* Central Brand Supporting Text */}
              <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans max-w-xl font-normal">
                AxentAI Labs helps startups launch products, build founder authority, manage social media presence, collaborate with creators, and reach the right audiences through strategic, organic-first marketing.
              </p>
            </div>

            {/* 2x2 Feature Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 border-y border-[#E5E9E5] py-6">
              {PILLARS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: 0.08 + idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3.5 p-2.5 -m-2.5 rounded-xl hover:bg-[#F7F9F7] transition-colors duration-200 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] group-hover:border-[#459B45] group-hover:bg-[#459B45] text-[#246B32] group-hover:text-white flex items-center justify-center shrink-0 transition-colors duration-200 shadow-2xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#246B32] tracking-tight transition-colors">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row: Founder Attribution, 100+ Happy Customers & EXPLORE SERVICES */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-3.5">
                  <picture className="w-11 h-11 shrink-0 block">
                    <source srcSet={shivamProfileWebp} type="image/webp" />
                    <img
                      src={shivamApprovedPhoto}
                      alt="Shivam Kushwaha"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      className="w-11 h-11 rounded-full object-cover object-[center_20%] border border-[#459B45]"
                    />
                  </picture>
                  <div>
                    <div className="text-sm font-bold text-[#111111]">Shivam Kushwaha</div>
                    <div className="text-xs text-[#555B55]">Founder, AxentAI Labs</div>
                  </div>
                </div>

                {/* 100+ Happy Customers Counter */}
                <HappyCustomersCounter />
              </div>

              {/* Action Button: EXPLORE OUR SERVICES */}
              <a
                href="#services"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:shadow-md hover:shadow-[#459B45]/20 hover:-translate-y-0.5 text-xs font-semibold uppercase tracking-wider text-[#111111] transition-all duration-300 group cursor-pointer shadow-2xs"
              >
                <span>EXPLORE OUR SERVICES</span>
                <span className="w-7 h-7 rounded-full bg-[#459B45] group-hover:bg-[#246B32] text-white flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
});

TrustSection.displayName = 'TrustSection';
