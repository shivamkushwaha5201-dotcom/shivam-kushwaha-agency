import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Share2, Users, MessageSquare, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

interface InfluencerSectionProps {
  onOpenBooking: () => void;
}

interface DistributionPillar {
  id: string;
  name: string;
  pillar: string;
  description: string;
  icon: React.ReactNode;
}

export const InfluencerSection: React.FC<InfluencerSectionProps> = React.memo(({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

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

  const distributionPillars: DistributionPillar[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn Founder Visibility',
      pillar: 'EXECUTIVE BRANDING',
      description: 'Position company founders as domain authorities through high-signal building retrospectives, founder essays and industry insights.',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      )
    },
    {
      id: 'x',
      name: 'X Launch Communication',
      pillar: 'BUILD IN PUBLIC',
      description: 'Engaging real-time launch countdowns, interactive demo videos, founder build-in-public threads, and tech community dialogue.',
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      id: 'community',
      name: 'Relevant Community Outreach',
      pillar: 'COMMUNITY DISCOVERY',
      description: 'Targeted discussions across verified developer hubs, subreddits, Slack groups, and Discord tech servers without spamming.',
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 'creators',
      name: 'Creator Collaboration',
      pillar: 'NICHE ADVOCACY',
      description: 'Vetted partnerships with respected software engineers and SaaS influencers who genuinely evaluate and demonstrate your tool.',
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      id: 'post-launch',
      name: 'Post-Launch Content Distribution',
      pillar: 'SUSTAINED REACH',
      description: 'Recycling launch traction into evergreen customer stories, case retrospectives, and compounding organic search visibility.',
      icon: <TrendingUp className="w-5 h-5" />
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="influencer-marketing"
      className="py-28 md:py-36 bg-[#FFFFFF] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Faint Atmospheric Gradient Matching Theme */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(229, 245, 229, 0.45) 0%, rgba(255, 255, 255, 1) 70%), linear-gradient(135deg, #FFFFFF 0%, #F7F9F7 52%, #FFFFFF 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 relative z-20"
        >
          <div className="space-y-3 max-w-2xl relative">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45] animate-pulse" />
              <span>EXTENDED DISTRIBUTION</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase">
              KEEP YOUR LAUNCH MOVING <span className="text-[#248A3D]">BEYOND PRODUCT HUNT</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-normal">
              Extend your product’s story through relevant founder communities, LinkedIn content, X conversations and creator partnerships.
            </p>
          </div>

          <Button
            onClick={onOpenBooking}
            className="bg-[#459B45] hover:bg-[#246B32] text-white text-xs font-semibold tracking-wider uppercase rounded-full px-6 py-3 border border-[#459B45]/30 shadow-md shadow-[#459B45]/20 hover:-translate-y-0.5 transition-all duration-300 self-start md:self-auto group cursor-pointer"
          >
            <span>DISCUSS DISTRIBUTION</span>
            <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>

        {/* Five Extended Distribution Pillars in a Clean Network Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {distributionPillars.map((item, idx) => {
            const isHighlighted = activePillar === item.id;
            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActivePillar(item.id)}
                onMouseLeave={() => setActivePillar(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`fx-card-interactive p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  isHighlighted
                    ? 'bg-[#E5F5E5] border-[#459B45] shadow-lg shadow-[#459B45]/15 -translate-y-1'
                    : 'bg-[#F7F9F7] border-[#E5E9E5] hover:border-[#459B45] hover:-translate-y-1'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#246B32] bg-white px-2.5 py-1 rounded-full border border-[#E5E9E5]">
                      {item.pillar}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-white border border-[#E5E9E5] flex items-center justify-center text-[#246B32] shadow-2xs">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-display font-bold text-[#111111] tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#555B55] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E5E9E5] text-[11px] font-mono text-[#246B32] font-semibold flex items-center justify-between">
                  <span>Channel 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </div>
              </motion.div>
            );
          })}

          {/* 6th Card: Cross-Platform Synergy Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-7 rounded-3xl border border-[#459B45]/40 bg-gradient-to-br from-[#E5F5E5] to-[#FFFFFF] flex flex-col justify-between space-y-4 shadow-sm"
          >
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-[#246B32] bg-white px-2.5 py-1 rounded-full border border-[#CDECCF]">
                NETWORK MULTIPLIER
              </span>
              <h3 className="text-lg font-display font-bold text-[#111111]">
                Compounding Launch Loops
              </h3>
              <p className="text-xs text-[#555B55] leading-relaxed">
                When Product Hunt momentum is paired with founder storytelling on LinkedIn and X, qualified inbound conversion rates multiply significantly.
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenBooking}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#246B32] hover:text-[#111111] transition-colors pt-3 border-t border-[#CDECCF]"
            >
              <span>Explore Multi-Channel Strategy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
});

InfluencerSection.displayName = 'InfluencerSection';
export default InfluencerSection;
