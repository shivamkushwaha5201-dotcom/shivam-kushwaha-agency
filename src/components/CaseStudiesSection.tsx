import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
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
      className="py-32 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold font-mono">
            // STRATEGIC EXECUTION RECORDS
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em]">
            Case Architectures.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans max-w-2xl font-normal">
            Detailed breakdowns demonstrating how deliberate positioning, organic authority, and creator distribution solve specific commercial bottlenecks.
          </p>
        </div>

        {/* Large Horizontal Case Study Blocks */}
        <div className="space-y-10">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.architectureId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 sm:p-12 rounded-3xl bg-[#050B14]/92 border border-white/10 hover:border-white/20 transition-colors space-y-8 shadow-2xl shadow-black/60"
            >
              {/* Header: Project / Category */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="space-y-1.5">
                  <span className="text-[11px] font-mono font-medium text-[#38BDF8] uppercase tracking-[0.2em] block">
                    {study.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight font-display">
                    {study.project}
                  </h3>
                </div>
                <div className="font-mono text-xs font-bold text-[#94A3B8] border border-white/10 bg-[#02040A] px-4 py-1.5 rounded-full self-start sm:self-auto">
                  {study.architectureId}
                </div>
              </div>

              {/* 4 Pillars: Challenge, Strategy, Execution, Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Challenge */}
                <div className="p-6 rounded-2xl bg-[#02040A]/80 border border-white/10 space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-rose-400/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    Challenge
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-sans font-normal">
                    {study.challenge}
                  </p>
                </div>

                {/* Strategy */}
                <div className="p-6 rounded-2xl bg-[#02040A]/80 border border-white/10 space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Strategy
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-sans font-normal">
                    {study.strategy}
                  </p>
                </div>

                {/* Execution */}
                <div className="p-6 rounded-2xl bg-[#02040A]/80 border border-white/10 space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#38BDF8] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                    Execution
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-sans font-normal">
                    {study.execution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="p-6 rounded-2xl bg-[#02040A]/80 border border-white/10 space-y-3">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Outcome
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-sans font-normal">
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
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-8 py-3.5 rounded-full shadow-lg shadow-blue-500/20 group transition-all cursor-pointer"
          >
            <span>DISCUSS YOUR GROWTH ROADMAP</span>
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};
