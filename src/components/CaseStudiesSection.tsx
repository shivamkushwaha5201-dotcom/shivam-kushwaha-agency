import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = React.memo(({ onOpenBooking }) => {
  const caseStudies = [
    {
      project: 'B2B Enterprise Workflow SaaS',
      category: 'LinkedIn Personal Branding & Executive Presence',
      architectureId: 'CASE 01',
      challenge: 'The founder possessed deep industry expertise, but virtually zero online visibility. Prospective enterprise customers had little context on leadership, leading to prolonged sales cycles and sluggish pipeline conversion.',
      strategy: 'Clarify the founder’s core thesis around enterprise workflow bottlenecks. Position the executive as an outspoken voice on modern operational efficiency rather than pitching product features directly.',
      execution: 'Structured a 3x weekly editorial framework: technical deep dives, founder lessons learned, and active commenting on key enterprise discussions. Redesigned personal profile positioning.',
      outcome: 'Established executive authority with consistent monthly inbound inquiries from target VP-level buyers and meaningful industry network expansion.'
    },
    {
      project: 'Developer Infrastructure Tool',
      category: 'Product Hunt Launch Support & Technical Positioning',
      architectureId: 'CASE 02',
      challenge: 'Launching a technical developer product required immediate credibility. Previous releases failed to gain traction due to confusing messaging and uncoordinated launch-day efforts.',
      strategy: 'Develop a developer-first narrative emphasizing immediate utility, reproducible demo benchmarks, and a transparent open-source ethos without marketing fluff.',
      execution: 'Engineered a 4-week pre-launch sequence: preview media creation, interactive demo GIFs, maker story copywriting, and launch-day war room coordination with early beta contributors.',
      outcome: 'Secured front-page visibility throughout the 24-hour cycle, resulting in thousands of qualified developer trial accounts and organic community discussions.'
    },
    {
      project: 'Modern Team Productivity Platform',
      category: 'Curated Influencer Marketing Campaign',
      architectureId: 'CASE 03',
      challenge: 'The company needed to reach remote-first team leaders across LinkedIn and X, but generic display ads yielded high bounce rates and low trial-to-paid conversions.',
      strategy: 'Identify niche creators with verified audiences of remote founders and engineering managers. Build authentic product walkthroughs tailored to each creator’s native style.',
      execution: 'Vetted 12 high-signal creators across LinkedIn and X. Coordinated contract negotiation, product briefing, and staggered publishing over a two-week period with custom tracking.',
      outcome: 'Drove high-intent referral visits and hundreds of new team workspace signups with substantially better retention compared to paid search.'
    }
  ];

  return (
    <section 
      id="case-studies" 
      className="py-32 bg-[#08060F] text-[#F8F6FF] border-t border-[#30213F] relative overflow-hidden font-sans z-10"
    >
      {/* Faint Atmospheric Gradient Matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(17, 11, 32, 0.95) 0%, rgba(8, 6, 15, 1) 70%), linear-gradient(135deg, #08060F 0%, #110B20 52%, #08060F 100%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-20 space-y-4 relative z-20"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[#B98AFF] font-semibold font-mono">
            // STRATEGIC EXECUTION RECORDS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8F7FC] tracking-[-0.02em] heading-contrast-shadow">
            Case Architectures.
          </h2>
          <p className="text-sm sm:text-base text-[#B9B1C9] leading-relaxed font-sans max-w-2xl font-normal text-contrast-shadow">
            Detailed breakdowns demonstrating how deliberate positioning, organic authority, and creator distribution solve specific commercial bottlenecks.
          </p>
        </motion.div>

        {/* Large Horizontal Case Study Blocks */}
        <div className="space-y-10">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.architectureId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="fx-card-interactive p-8 sm:p-12 rounded-3xl bg-[#0B0812] border border-[#30213F] hover:border-[#7028D8] hover:shadow-[0_16px_40px_-10px_rgba(112,40,216,0.22)] space-y-8 shadow-xs"
            >
              {/* Header: Project / Category */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#30213F]">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-semibold text-[#B98AFF] uppercase tracking-[0.2em] block">
                    {study.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F8F7FC] tracking-tight font-display">
                    {study.project}
                  </h3>
                </div>
                <div className="font-mono text-xs font-bold text-[#B98AFF] border border-[#30213F] bg-[#100B1B] px-4 py-1.5 rounded-full self-start sm:self-auto">
                  {study.architectureId}
                </div>
              </div>

              {/* 4 Pillars: Challenge, Strategy, Execution, Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Challenge */}
                <div className="p-6 rounded-2xl bg-[#100B1B] border border-[#30213F] space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8F7FC] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35106B] ring-1 ring-[#B98AFF]/50" />
                    Challenge
                  </div>
                  <p className="text-xs text-[#B9B1C9] leading-relaxed font-sans font-normal">
                    {study.challenge}
                  </p>
                </div>

                {/* Strategy */}
                <div className="p-6 rounded-2xl bg-[#100B1B] border border-[#30213F] space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#B98AFF] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B98AFF]" />
                    Strategy
                  </div>
                  <p className="text-xs text-[#B9B1C9] leading-relaxed font-sans font-normal">
                    {study.strategy}
                  </p>
                </div>

                {/* Execution */}
                <div className="p-6 rounded-2xl bg-[#100B1B] border border-[#30213F] space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#7028D8] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7028D8]" />
                    Execution
                  </div>
                  <p className="text-xs text-[#B9B1C9] leading-relaxed font-sans font-normal">
                    {study.execution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-6 rounded-2xl bg-[#100B1B] border border-[#30213F] space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Outcome
                  </div>
                  <p className="text-xs text-[#B9B1C9] leading-relaxed font-sans font-normal">
                    {study.outcome}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            onClick={onOpenBooking}
            className="bg-[#7028D8] hover:bg-[#35106B] text-[#F8F7FC] text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full border border-[#B98AFF]/30 shadow-md shadow-[#7028D8]/25 group transition-all cursor-pointer"
          >
            <span>DISCUSS YOUR GROWTH ROADMAP</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
});
