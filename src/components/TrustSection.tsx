import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Zap, Layers, Compass, ShieldCheck } from 'lucide-react';
import shivamApprovedPhoto from '../assets/images/Screenshot_2026-09-02-09-30-52-50_99c04817c0de5652397fc8b56c3b3817.jpg';
import shivamProfileWebp from '../assets/images/shivam_profile_opt.webp';
import leftFloatingVisual from '../assets/images/growth_systems_left_visual_1791128239625.jpg';
import leftFloatingVisualWebp from '../assets/images/growth_systems_left_visual_opt.webp';
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
      className="px-4 py-2.5 rounded-xl bg-[#100B1B] border border-[#30213F] shadow-xs flex flex-col justify-center"
    >
      <div className="text-xl sm:text-2xl font-display font-bold text-[#F8F7FC] tracking-tight leading-none tabular-nums">
        <span ref={numberSpanRef}>0</span>
        <span className="text-[#B98AFF]">+</span>
      </div>
      <div className="text-[11px] text-[#B9B1C9] font-sans mt-1 leading-none">
        Happy Customers
      </div>
    </div>
  );
});

interface TrustSectionProps {
  onOpenBooking?: () => void;
}

const PILLARS = [
  {
    title: 'Strategy-First Execution',
    icon: Compass,
  },
  {
    title: 'Multi-Platform Distribution',
    icon: Layers,
  },
  {
    title: 'Organic-First Authority',
    icon: Zap,
  },
  {
    title: 'Founder-Led Accountability',
    icon: ShieldCheck,
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
          const offsetY = 18 - clamped * 36; // +18px -> -18px
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
      className="py-28 md:py-36 bg-[#08060F] text-[#F8F6FF] border-t border-[#30213F] relative overflow-hidden z-10"
    >
      {/* Faint Atmospheric Gradient Matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 18% 22%, rgba(17, 11, 32, 0.95) 0%, rgba(8, 6, 15, 1) 70%), linear-gradient(135deg, #08060F 0%, #110B20 52%, #08060F 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Single Large Floating Editorial Visual + Dedicated Scroll Parallax Layer */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Layer 1: Once-Triggered Viewport Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Layer 2: Dedicated Scroll Parallax Wrapper (Single animation source) */}
              <div
                ref={parallaxRef}
                style={{
                  transform: 'translate3d(0, 0, 0)',
                  willChange: inView ? 'transform' : 'auto',
                  backfaceVisibility: 'hidden',
                }}
                className="relative w-full"
              >
                {/* Soft Dark Purple Atmospheric Glow Behind Floating Card */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[40px] pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(112,40,216,0.28) 0%, rgba(53,16,107,0.35) 45%, transparent 72%)',
                  }}
                />

                {/* Layer 3: Continuous Slow GPU Floating Card (6.2s ease-in-out infinite, pauses offscreen) */}
                <div
                  style={{
                    animationPlayState: inView ? 'running' : 'paused',
                    willChange: 'transform',
                  }}
                  className="animate-float trust-floating-card will-change-transform relative rounded-3xl overflow-hidden border border-[#30213F] bg-[#100B1B] shadow-[0_24px_60px_rgba(0,0,0,0.65)] aspect-[4/5]"
                >
                  <picture className="w-full h-full block">
                    <source srcSet={leftFloatingVisualWebp} type="image/webp" />
                    <img
                      src={leftFloatingVisual}
                      alt="AxentAI Labs Growth Systems Visual"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08060F]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#B98AFF]/20 rounded-3xl pointer-events-none" />
                </div>

                {/* Rotating Circular Explore Badge (Corner Accent — Pauses offscreen) */}
                <a
                  href="#services"
                  className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#100B1B]/95 border border-[#30213F] shadow-xl shadow-black/70 flex items-center justify-center group cursor-pointer z-20"
                >
                  <svg
                    viewBox="0 0 120 120"
                    style={{ animationPlayState: inView ? 'running' : 'paused' }}
                    className="w-full h-full animate-[spin_18s_linear_infinite]"
                  >
                    <defs>
                      <path
                        id="circleTextPath"
                        d="M 60, 60 m -44, 0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                      />
                    </defs>
                    <text className="fill-[#B9B1C9] text-[9.5px] font-mono uppercase tracking-[0.24em]">
                      <textPath href="#circleTextPath" startOffset="0%">
                        • EXPLORE MORE • EXPLORE MORE
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute w-11 h-11 rounded-full bg-[#7028D8] group-hover:bg-[#35106B] text-[#F8F7FC] flex items-center justify-center shadow-md shadow-[#7028D8]/35 transition-transform duration-200 group-hover:scale-105">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: "WE BUILD GROWTH SYSTEMS FOR MODERN BRANDS" */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65 }}
            className="lg:col-span-7 space-y-8 relative z-20"
          >
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#B98AFF] font-semibold font-mono">
                // AGENCY POSITIONING
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F8F7FC] tracking-[-0.02em] leading-[1.08] uppercase">
                WE BUILD GROWTH SYSTEMS <br className="hidden sm:inline" />
                <span className="text-[#B98AFF]">
                  FOR MODERN BRANDS
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#B9B1C9] leading-relaxed font-sans max-w-xl">
                We help founders and modern brands build visibility through personal branding, social growth, Product Hunt launches and creator-led distribution.
              </p>
            </div>

            {/* 2x2 Minimal Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-y border-[#30213F] py-6">
              {PILLARS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.5, delay: 0.1 + idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-center gap-3.5 p-2.5 -m-2.5 rounded-xl hover:bg-[#100B1B] transition-colors duration-250 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#100B1B] border border-[#30213F] group-hover:border-[#7028D8] group-hover:bg-[#7028D8] text-[#B98AFF] group-hover:text-[#F8F7FC] flex items-center justify-center shrink-0 transition-colors duration-250">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#F8F7FC] group-hover:text-[#B98AFF] tracking-tight transition-colors">
                      {item.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Founder Attribution, 100+ Happy Customers Counter & Action Row */}
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
                      className="w-11 h-11 rounded-full object-cover object-[center_35%] border border-[#7028D8]"
                    />
                  </picture>
                  <div>
                    <div className="text-sm font-bold text-[#F8F7FC]">Shivam Kushwaha</div>
                    <div className="text-xs text-[#B9B1C9]">Founder &amp; CEO, AxentAI Labs</div>
                  </div>
                </div>

                {/* Subtle 100+ Happy Customers Social-Proof Counter */}
                <HappyCustomersCounter />
              </div>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#100B1B] border border-[#30213F] hover:border-[#7028D8] hover:shadow-md hover:shadow-[#7028D8]/20 hover:-translate-y-0.5 text-xs font-semibold uppercase tracking-wider text-[#F8F7FC] transition-all duration-300 group cursor-pointer"
              >
                <span>Learn More</span>
                <span className="w-7 h-7 rounded-full bg-[#7028D8] group-hover:bg-[#35106B] text-[#F8F7FC] flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>

      {/* Hardware-accelerated 3D floating card keyframes */}
      <style>{`
        @keyframes trustCardFloat {
          0%, 100% {
            transform: translate3d(-2px, -8px, 0) rotate3d(0, 0, 1, -0.8deg);
          }
          50% {
            transform: translate3d(2px, 8px, 0) rotate3d(0, 0, 1, 0.8deg);
          }
        }
        .trust-floating-card {
          animation: trustCardFloat 6.2s ease-in-out infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
});
