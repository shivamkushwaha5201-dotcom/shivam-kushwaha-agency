import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink, Trophy, Flame } from 'lucide-react';
import { Button } from './ui/button';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
  onOpenPortfolio?: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = React.memo(({ onOpenBooking, onOpenPortfolio }) => {
  const caseStudies = [
    {
      project: 'StoreClaw',
      category: 'E-commerce & Store Infrastructure',
      objective: 'Build day-one visibility and developer trust across modern e-commerce communities.',
      strategy: 'Engineered a transparent maker story highlighting instant setup, interactive visual product demos, and pre-launch teaser distribution.',
      deliverables: 'Pre-launch runway positioning, Product Hunt page copy, maker comments coordination, and founder X thread syndication.',
      verifiedRank: '#1 Product of the Day',
      verifiedVotes: '793 Verified Votes',
      productHuntUrl: 'https://www.producthunt.com/products/storeclaw',
      highlightBadge: 'Daily Champion'
    },
    {
      project: 'Chronicle 2.0',
      category: 'Developer & Creator Storytelling',
      objective: 'Re-launch version 2.0 to capture top weekly mindshare in competitive AI and design categories.',
      strategy: 'Framed the update around product evolution, demonstrable speed enhancements, and coordinated contributor launch outreach.',
      deliverables: 'Positioning teardown, video demo scripting, Product Hunt maker narrative, and cross-platform amplification.',
      verifiedRank: '#2 Product of the Day · #1 Product of the Week',
      verifiedVotes: '736 Verified Votes',
      productHuntUrl: 'https://www.producthunt.com/products/chronicle-6?launch=chronicle-2-0',
      highlightBadge: 'Weekly Winner'
    },
    {
      project: 'Enia Code',
      category: 'AI Developer Assistant & Code Intelligence',
      objective: 'Secure front-page recognition and high-intent software engineer trials on launch day.',
      strategy: 'Developer-first value proposition focusing on workflow automation, reproducible benchmarks, and clean developer documentation.',
      deliverables: 'Asset preparation, tagline optimization, launch day scheduling, and developer community outreach.',
      verifiedRank: '#2 Product of the Day',
      verifiedVotes: '336 Verified Votes',
      productHuntUrl: 'https://www.producthunt.com/products/enia-code',
      highlightBadge: 'Top 3 Podium'
    },
    {
      project: 'Eddie AI 2.0',
      category: 'AI Video Production & Editing Suite',
      objective: 'Introduce a major AI product iteration to early adopters and creator teams.',
      strategy: 'Showcase direct before-and-after video transformations and concise value proposition targeted at content creators.',
      deliverables: 'Visual preview gallery, maker introduction narrative, live comment responses, and creator community engagement.',
      verifiedRank: '#3 Product of the Day',
      verifiedVotes: '358 Verified Votes',
      productHuntUrl: 'https://www.producthunt.com/products/eddie-your-ai-video-editor/launches/eddie-ai-2-0',
      highlightBadge: 'Top 3 Podium'
    }
  ];

  return (
    <section 
      id="case-studies" 
      className="py-28 md:py-36 bg-[#F7F9F7] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Faint Atmospheric Soft Mint Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(229, 245, 229, 0.45) 0%, rgba(247, 249, 247, 1) 70%), linear-gradient(135deg, #FFFFFF 0%, #F7F9F7 52%, #FFFFFF 100%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 space-y-4 relative z-20"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[11px] font-mono font-semibold tracking-[0.2em] text-[#246B32] uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#459B45] shadow-[0_0_8px_#459B45] animate-pulse" />
            <span>SELECTED LAUNCH WORK</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase">
            LAUNCH STRATEGY <span className="text-[#248A3D]">IN ACTION</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-2xl font-normal">
            Explore how positioning, preparation and coordinated distribution can support a product’s launch journey.
          </p>
        </motion.div>

        {/* 2x2 Grid of Genuine Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.project}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="fx-card-interactive p-8 sm:p-9 rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:shadow-[0_16px_36px_-8px_rgba(69,155,69,0.14)] flex flex-col justify-between space-y-6 shadow-xs group"
            >
              <div className="space-y-5">
                
                {/* Header: Name, Category & Ranking Badge */}
                <div className="flex items-start justify-between gap-3 pb-4 border-b border-[#E5E9E5]">
                  <div>
                    <span className="text-[10.5px] font-mono font-semibold text-[#246B32] uppercase tracking-wider block">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-bold text-[#111111] tracking-tight font-display mt-0.5 group-hover:text-[#246B32] transition-colors">
                      {study.project}
                    </h3>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F5E5] border border-[#CDECCF] text-[#246B32] text-xs font-mono font-semibold shrink-0">
                    <Trophy className="w-3.5 h-3.5 text-[#246B32]" />
                    <span>{study.highlightBadge}</span>
                  </div>
                </div>

                {/* Objective & Strategy */}
                <div className="space-y-3">
                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[#111111] uppercase tracking-wider block mb-1">
                      Launch Objective
                    </span>
                    <p className="text-xs text-[#555B55] leading-relaxed">
                      {study.objective}
                    </p>
                  </div>

                  <div>
                    <span className="text-[11px] font-mono font-semibold text-[#246B32] uppercase tracking-wider block mb-1">
                      Strategy &amp; Work Delivered
                    </span>
                    <p className="text-xs text-[#555B55] leading-relaxed">
                      {study.strategy}
                    </p>
                  </div>
                </div>

                {/* Verified Results Row */}
                <div className="p-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-[#246B32] font-semibold">
                    <Flame className="w-3.5 h-3.5 text-[#E03B28]" />
                    <span>{study.verifiedRank}</span>
                  </div>
                  <div className="text-[#555B55]">
                    {study.verifiedVotes}
                  </div>
                </div>

              </div>

              {/* Card Footer: Verified PH Link */}
              <div className="pt-4 border-t border-[#E5E9E5] flex items-center justify-between">
                <a
                  href={study.productHuntUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#246B32] hover:text-[#111111] inline-flex items-center gap-1.5 transition-colors group/link"
                >
                  <span>View Product Hunt Page</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>

                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-[11px] font-medium text-[#555B55] hover:text-[#246B32] transition-colors"
                >
                  Discuss Similar Launch →
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Section Bottom Links */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button
            size="lg"
            onClick={onOpenBooking}
            className="bg-[#459B45] hover:bg-[#246B32] text-[#FFFFFF] text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full border border-[#459B45]/30 shadow-md shadow-[#459B45]/20 group transition-all cursor-pointer"
          >
            <span>DISCUSS YOUR LAUNCH ROADMAP</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>

          <a
            href="/portfolio"
            onClick={(e) => {
              if (
                !e.metaKey &&
                !e.ctrlKey &&
                !e.shiftKey &&
                !e.altKey &&
                e.button === 0
              ) {
                e.preventDefault();
                if (onOpenPortfolio) {
                  onOpenPortfolio();
                } else {
                  window.history.pushState({}, '', '/portfolio');
                  window.dispatchEvent(new PopStateEvent('popstate'));
                }
              }
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[#246B32] bg-[#FFFFFF] hover:bg-[#F7F9F7] text-[#111111] hover:text-[#246B32] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
          >
            <span>Explore All 31 Verified Launches</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
});

CaseStudiesSection.displayName = 'CaseStudiesSection';
export default CaseStudiesSection;
