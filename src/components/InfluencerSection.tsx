import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import statueCenterVisual from '../assets/images/statue_orbit_center_1791127293704.jpg';

interface InfluencerSectionProps {
  onOpenBooking: () => void;
}

interface ServiceCardPlatform {
  id: string;
  name: string;
  pillar: string;
  description: string;
}

interface OrbitIconNode {
  id: string;
  name: string;
  angleDeg: number;
  icon: React.ReactNode;
}

// Existing 3 Service Cards (Left & Right Columns — Unchanged)
const SERVICE_CARD_PLATFORMS: ServiceCardPlatform[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    pillar: 'SOCIAL DISTRIBUTION',
    description: 'Executive thought leadership and B2B creator authority.',
  },
  {
    id: 'x',
    name: 'X / Twitter',
    pillar: 'CREATOR NETWORK',
    description: 'High-frequency founder narratives, product demos, and launch threads.',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    pillar: 'AUDIENCE GROWTH',
    description: 'Visual storytelling, reels, and creator partnerships that humanize brands.',
  },
];

// Exactly 6 Official Social Platform Logos Arranged Around the Central Statue
const SIX_ORBIT_PLATFORMS: OrbitIconNode[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    angleDeg: -90, // TOP
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    id: 'x',
    name: 'X / Twitter',
    angleDeg: -30, // UPPER RIGHT
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: 'producthunt',
    name: 'Product Hunt',
    angleDeg: 30, // RIGHT / LOWER RIGHT
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.604 12.4h-3.405V18H7.801V6h5.803a4.2 4.2 0 1 1 0 8.4z" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    angleDeg: 90, // LOWER RIGHT / BOTTOM
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.031 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 0 0 1.333 4.993L2 22l5.233-1.237a9.994 9.994 0 0 0 4.779 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0 0 12.031 2zm5.829 14.12c-.246.693-1.434 1.325-1.988 1.408-.508.076-1.15.108-1.855-.116-.428-.136-.978-.318-1.682-.622-2.958-1.277-4.889-4.259-5.037-4.456-.147-.197-1.202-1.599-1.202-3.05 0-1.451.762-2.164 1.032-2.46.27-.295.59-.369.786-.369.197 0 .393.002.565.01.181.009.424-.069.663.507.246.59.835 2.041.909 2.189.074.147.123.32.025.516-.098.197-.147.32-.295.492-.147.172-.31.384-.442.516-.147.148-.301.308-.129.603.172.295.764 1.261 1.64 2.042 1.127 1.005 2.077 1.317 2.372 1.464.295.148.467.123.639-.074.172-.197.737-.861.934-1.156.197-.295.393-.246.663-.148.27.098 1.72.811 2.015.959.295.147.491.221.565.344.074.123.074.713-.172 1.407z" />
      </svg>
    ),
  },
  {
    id: 'reddit',
    name: 'Reddit',
    angleDeg: 150, // LOWER LEFT
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm5.74-8.895a1.464 1.464 0 0 1-.498 1.096c.02.176.03.354.03.534 0 2.722-3.172 4.929-7.085 4.929-3.913 0-7.085-2.207-7.085-4.929 0-.18.01-.358.03-.534a1.465 1.465 0 0 1-.612-1.835 1.465 1.465 0 0 1 2.388-.423c1.17-.83 2.747-1.362 4.504-1.434l.852-4.011a.31.31 0 0 1 .369-.24l2.805.596a1.036 1.036 0 1 1-.136.64l-2.502-.531-.746 3.512c1.737.082 3.295.612 4.453 1.434a1.465 1.465 0 0 1 2.233 1.196zM9.27 13.06a1.22 1.22 0 1 0 0 2.44 1.22 1.22 0 0 0 0-2.44zm5.46 0a1.22 1.22 0 1 0 0 2.44 1.22 1.22 0 0 0 0-2.44zm-5.134 3.597a.328.328 0 0 0-.452.473c.682.652 1.729.975 2.856.975 1.127 0 2.174-.323 2.856-.975a.328.328 0 0 0-.452-.473c-.562.536-1.449.805-2.404.805-.955 0-1.842-.269-2.404-.805z" />
      </svg>
    ),
  },
  {
    id: 'instagram',
    name: 'Instagram',
    angleDeg: 210, // UPPER LEFT
    icon: (
      <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
];

export const InfluencerSection: React.FC<InfluencerSectionProps> = ({ onOpenBooking }) => {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // Pause orbital rotation when section is far outside viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]) {
          setInView(entries[0].isIntersecting);
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="influencer-marketing"
      className="py-28 md:py-36 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-20">
          <div className="space-y-3 max-w-2xl relative">
            {/* Subtle localized dark atmospheric gradient behind header text */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-10 -inset-y-10 sm:-inset-x-16 sm:-inset-y-12 -z-10"
              style={{
                background:
                  'radial-gradient(ellipse at center left, rgba(2, 6, 15, 0.88) 0%, rgba(2, 6, 15, 0.62) 40%, rgba(2, 6, 15, 0.24) 70%, transparent 100%)',
              }}
            />
            <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold font-mono drop-shadow-[0_2px_10px_rgba(2,6,15,0.95)]">
              // SOCIAL PLATFORM EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] uppercase drop-shadow-[0_4px_24px_rgba(2,6,15,0.95)]">
              Creator Network &amp; Social Distribution.
            </h2>
            <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-normal drop-shadow-[0_2px_14px_rgba(2,6,15,0.98)]">
              We connect brands with relevant creators across LinkedIn, X and Instagram to engineer sustained audience growth.
            </p>
          </div>

          <Button
            onClick={onOpenBooking}
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold tracking-wider uppercase rounded-full px-6 py-3 shadow-lg shadow-blue-500/20 self-start md:self-auto group cursor-pointer"
          >
            <span>CONNECT WITH US</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Central Statue + Laptop Visual Surrounded by 6 Orbiting Social Platforms + Existing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Social Distribution & Creator Network */}
          <div className="lg:col-span-4 space-y-8 order-2 lg:order-1">
            {SERVICE_CARD_PLATFORMS.slice(0, 2).map((platform) => {
              const isHighlighted = activePlatform === platform.id;
              return (
                <motion.div
                  key={platform.id}
                  onMouseEnter={() => setActivePlatform(platform.id)}
                  onMouseLeave={() => setActivePlatform(null)}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isHighlighted
                      ? 'bg-[#06111F] border-[#38BDF8] shadow-xl shadow-blue-500/15'
                      : 'bg-[#050B14]/88 border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#38BDF8] font-mono text-xs font-bold">*</span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#38BDF8]">
                      {platform.pillar}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center Column: Statue + Laptop Center Visual with 6 Orbiting Social Platforms */}
          <div className="lg:col-span-4 flex items-center justify-center order-1 lg:order-2 py-8">
            <div
              className={`relative w-[310px] h-[310px] sm:w-[360px] sm:h-[360px] flex items-center justify-center ${
                inView ? '' : 'orbit-paused'
              }`}
            >
              {/* Soft Blue Ambient Halo Behind Central Statue (Zero-blur radial gradient) */}
              <div
                aria-hidden="true"
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(56,189,248,0.10) 45%, transparent 70%)',
                }}
              />

              {/* Central Statue + Laptop Visual */}
              <div className="w-[225px] h-[225px] sm:w-[260px] sm:h-[260px] rounded-full bg-[#000000] border border-[#38BDF8]/30 shadow-[0_0_55px_rgba(56,189,248,0.18)] overflow-hidden relative flex items-end justify-center z-10">
                <img
                  src={statueCenterVisual}
                  alt="Creator Network & Social Distribution Central Visual"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050A]/65 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 ring-1 ring-inset ring-[#38BDF8]/25 rounded-full pointer-events-none" />
              </div>

              {/* Subtle Orbital Track Ring */}
              <div className="absolute inset-2 rounded-full border border-dashed border-[#38BDF8]/20 pointer-events-none" />

              {/* Continuous Slow Circular Orbit Carrier for All 6 Platforms (Single Parent Transform) */}
              <div className="orbit-carrier absolute inset-0 rounded-full z-20">
                {SIX_ORBIT_PLATFORMS.map((platform) => {
                  const isHighlighted = activePlatform === platform.id;
                  const rad = (platform.angleDeg * Math.PI) / 180;
                  // Balanced circular radius (50% center + 46% radius)
                  const leftPct = 50 + 46 * Math.cos(rad);
                  const topPct = 50 + 46 * Math.sin(rad);

                  return (
                    <div
                      key={platform.id}
                      style={{
                        left: `${leftPct}%`,
                        top: `${topPct}%`,
                      }}
                      onMouseEnter={() => setActivePlatform(platform.id)}
                      onMouseLeave={() => setActivePlatform(null)}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                    >
                      {/* Counter-rotating icon container so each logo remains upright */}
                      <div
                        className={`orbit-counter-node w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border transition-colors duration-300 cursor-pointer ${
                          isHighlighted
                            ? 'bg-[#3B82F6] text-white border-[#38BDF8] shadow-[0_0_22px_rgba(56,189,248,0.75)]'
                            : 'bg-[#050B14]/95 text-[#F8FAFC] border-[#38BDF8]/35 hover:border-[#38BDF8] hover:text-[#38BDF8] shadow-[0_0_16px_rgba(56,189,248,0.18)]'
                        }`}
                        title={platform.name}
                        aria-label={platform.name}
                      >
                        {platform.icon}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right Column: Audience Growth & Creator Workflow */}
          <div className="lg:col-span-4 space-y-8 order-3">
            {SERVICE_CARD_PLATFORMS.slice(2).map((platform) => {
              const isHighlighted = activePlatform === platform.id;
              return (
                <motion.div
                  key={platform.id}
                  onMouseEnter={() => setActivePlatform(platform.id)}
                  onMouseLeave={() => setActivePlatform(null)}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    isHighlighted
                      ? 'bg-[#06111F] border-[#38BDF8] shadow-xl shadow-blue-500/15'
                      : 'bg-[#050B14]/88 border-white/10 hover:border-white/25'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#38BDF8] font-mono text-xs font-bold">*</span>
                    <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#38BDF8]">
                      {platform.pillar}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-1">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {platform.description}
                  </p>
                </motion.div>
              );
            })}

            {/* 4-Step Compact Execution Pill */}
            <div className="p-6 rounded-2xl bg-[#050B14]/88 border border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-[#38BDF8] font-mono text-xs font-bold">*</span>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#38BDF8]">
                  END-TO-END FLOW
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-white">
                <span>DISCOVER</span>
                <span className="text-[#38BDF8]">→</span>
                <span>SELECT</span>
                <span className="text-[#38BDF8]">→</span>
                <span>CAMPAIGN</span>
                <span className="text-[#38BDF8]">→</span>
                <span>MEASURE</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Curated creator vetting, outreach, and transparent performance attribution.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* GPU-accelerated 3D orbital keyframes with hover and offscreen pause */}
      <style>{`
        @keyframes orbitSpin3D {
          from { transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg); }
          to { transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 360deg); }
        }
        @keyframes orbitCounterSpin3D {
          from { transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg); }
          to { transform: translate3d(0, 0, 0) rotate3d(0, 0, 1, -360deg); }
        }
        .orbit-carrier {
          animation: orbitSpin3D 34s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .orbit-counter-node {
          animation: orbitCounterSpin3D 34s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        .orbit-carrier:hover,
        .orbit-carrier:hover .orbit-counter-node,
        .orbit-paused .orbit-carrier,
        .orbit-paused .orbit-counter-node {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
