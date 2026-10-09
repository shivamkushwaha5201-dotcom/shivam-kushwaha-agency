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
      className="px-4 py-2.5 rounded-xl bg-[#080B12]/90 border border-white/10 shadow-[0_0_24px_rgba(59,130,246,0.12)] flex flex-col justify-center"
    >
      <div className="text-xl sm:text-2xl font-display font-bold text-[#F8FAFC] tracking-tight leading-none tabular-nums">
        <span ref={numberSpanRef}>0</span>
        <span className="text-[#60A5FA]">+</span>
      </div>
      <div className="text-[11px] text-[#94A3B8] font-sans mt-1 leading-none">
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
      className="py-28 md:py-36 bg-transparent text-[#F8FAFC] relative overflow-hidden z-10"
    >
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
                {/* Soft Blue Atmospheric Glow Behind Floating Card (Radial gradient — zero Gaussian blur filter cost) */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-[40px] pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(56,189,248,0.10) 45%, transparent 72%)',
                  }}
                />

                {/* Layer 3: Continuous Slow GPU Floating Card (6.2s ease-in-out infinite, pauses offscreen) */}
                <div
                  style={{
                    animationPlayState: inView ? 'running' : 'paused',
                    willChange: 'transform',
                  }}
                  className="animate-float trust-floating-card will-change-transform relative rounded-3xl overflow-hidden border border-white/15 bg-[#080B12]/92 shadow-[0_24px_60px_rgba(0,0,0,0.75)] aspect-[4/5]"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#3B82F6]/20 rounded-3xl pointer-events-none" />
                </div>

                {/* Rotating Circular Explore Badge (Corner Accent — Pauses offscreen) */}
                <a
                  href="#services"
                  className="absolute -bottom-6 -right-4 sm:-right-6 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#080B12]/95 border border-white/15 shadow-2xl shadow-black/80 flex items-center justify-center group cursor-pointer z-20"
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
                    <text className="fill-[#94A3B8] text-[9.5px] font-mono uppercase tracking-[0.24em]">
                      <textPath href="#circleTextPath" startOffset="0%">
                        • EXPLORE MORE • EXPLORE MORE
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute w-11 h-11 rounded-full bg-[#3B82F6] group-hover:bg-[#2563EB] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform duration-200 group-hover:scale-105">
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
            {/* Subtle localized dark atmospheric gradient behind text area (No rectangular box) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-10 -inset-y-12 sm:-inset-x-16 sm:-inset-y-14 -z-10"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(8, 11, 18, 0.88) 0%, rgba(8, 11, 18, 0.62) 40%, rgba(8, 11, 18, 0.24) 70%, transparent 100%)',
              }}
            />

            <div className="space-y-4">
              <div className="text-xs uppercase tracking-[0.25em] text-[#7BA7F7] font-semibold font-mono">
                // AGENCY POSITIONING
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F5F7FA] tracking-[-0.02em] leading-[1.08] uppercase">
                WE BUILD GROWTH SYSTEMS <br className="hidden sm:inline" />
                <span className="text-[#6B9BF0]">
                  FOR MODERN BRANDS
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans max-w-xl">
                We help founders and modern brands build visibility through personal branding, social growth, Product Hunt launches and creator-led distribution.
              </p>
            </div>

            {/* 2x2 Minimal Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-y border-white/15 py-6">
              {PILLARS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-[#5B8FE8]/15 border border-[#5B8FE8]/30 text-[#7BA7F7] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-[#F5F7FA] tracking-tight">
                      {item.title}
                    </span>
                  </div>
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
                      className="w-11 h-11 rounded-full object-cover object-[center_35%] border border-[#5B8FE8]/40"
                    />
                  </picture>
                  <div>
                    <div className="text-sm font-bold text-[#F5F7FA]">Shivam Kushwaha</div>
                    <div className="text-xs text-[#CBD5E1]">Founder &amp; CEO, AxentAI Labs</div>
                  </div>
                </div>

                {/* Subtle 100+ Happy Customers Social-Proof Counter */}
                <HappyCustomersCounter />
              </div>

              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#080B12] border border-white/15 hover:border-[#5B8FE8]/50 text-xs font-semibold uppercase tracking-wider text-[#F5F7FA] transition-colors group cursor-pointer"
              >
                <span>Learn More</span>
                <span className="w-7 h-7 rounded-full bg-[#5B8FE8] group-hover:bg-[#4F7FD1] text-white flex items-center justify-center transition-colors">
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
