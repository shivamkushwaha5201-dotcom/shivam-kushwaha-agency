import React from 'react';
import { motion } from 'motion/react';
import { 
  Rocket, 
  Target, 
  Share2, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight,
  Globe
} from 'lucide-react';
import { Button } from './ui/button';

interface ProductHuntSectionProps {
  onOpenBooking: () => void;
}

export const ProductHuntSection: React.FC<ProductHuntSectionProps> = React.memo(({ onOpenBooking }) => {
  const flightPhases = [
    {
      stage: '01',
      name: 'PRE-LAUNCH',
      timing: 'T-21 to T-2 Days',
      title: 'Positioning & Teaser Runway',
      description: 'Engineering your official Coming Soon teaser page, writing the authentic maker story, and preparing interactive product video demos.',
      icon: Target
    },
    {
      stage: '02',
      name: 'LAUNCH',
      timing: '00:01 PST Launch Day',
      title: 'Midnight Release & War Room',
      description: 'Synchronized live deployment at midnight PST with active community updates, real-time comment management, and founder response coordination.',
      icon: Rocket
    },
    {
      stage: '03',
      name: 'DISTRIBUTION',
      timing: 'Hours 1–24',
      title: 'Cross-Platform Amplification',
      description: 'Syndicating the launch narrative across executive LinkedIn posts, high-signal X threads, and tech community hubs to drive qualified early-adopter traffic.',
      icon: Share2
    },
    {
      stage: '04',
      name: 'POST-LAUNCH',
      timing: 'Week 1–4',
      title: 'Retention & User Conversion',
      description: 'Translating launch traffic into registered workspace trials, publishing retrospective building lessons, and locking in search authority.',
      icon: TrendingUp
    }
  ];

  return (
    <section 
      id="product-hunt" 
      className="py-32 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4 relative z-20">
          {/* Subtle localized dark atmospheric gradient behind header text */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-10 sm:-inset-x-16 sm:-inset-y-12 -z-10"
            style={{
              background:
                'radial-gradient(ellipse at center left, rgba(8, 11, 18, 0.88) 0%, rgba(8, 11, 18, 0.62) 40%, rgba(8, 11, 18, 0.24) 70%, transparent 100%)',
            }}
          />
          <div className="text-xs uppercase tracking-[0.25em] text-[#60A5FA] font-semibold font-mono text-contrast-shadow">
            // GLOBAL LAUNCH ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] heading-contrast-shadow">
            Global Launch Visibility.
          </h2>
          <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed font-sans max-w-2xl font-normal text-contrast-shadow">
            A battle-tested 4-phase launch framework designed to propel your software to international early-adopter recognition with 100% legitimate strategy.
          </p>
        </div>

        {/* Global Trajectory Process Visual: PRE-LAUNCH ↓ LAUNCH ↓ DISTRIBUTION ↓ POST-LAUNCH */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#080B12]/92 border border-white/10 mb-12 shadow-2xl shadow-black/60 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#60A5FA]">
                Launch Flight Path
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] tracking-tight font-display">
                PRE-LAUNCH <span className="text-[#60A5FA] font-light">↓</span> LAUNCH <span className="text-[#60A5FA] font-light">↓</span> DISTRIBUTION <span className="text-[#60A5FA] font-light">↓</span> POST-LAUNCH
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#60A5FA] text-xs font-mono">
              <Globe className="w-3.5 h-3.5" />
              <span>International Early Adopters</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flightPhases.map((phase) => {
              const Icon = phase.icon;
              return (
                <div 
                  key={phase.stage}
                  className="p-6 rounded-2xl bg-[#050505]/80 border border-white/10 hover:border-white/20 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#60A5FA]">
                        {phase.name}
                      </span>
                      <Icon className="w-4 h-4 text-[#94A3B8]" />
                    </div>

                    <div className="text-[11px] font-mono text-[#94A3B8]">
                      {phase.timing}
                    </div>

                    <h4 className="text-sm font-bold text-[#F8FAFC] font-display">
                      {phase.title}
                    </h4>

                    <p className="text-xs text-[#94A3B8] leading-relaxed font-sans font-normal">
                      {phase.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-[#93C5FD]">
                    Phase {phase.stage} of 04
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Ethical Standards & Compliance Guarantee */}
        <div className="p-8 rounded-2xl bg-[#080B12]/92 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/25 text-[#60A5FA] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#F8FAFC] font-display">
                100% Legitimate Launch Standards
              </h4>
              <p className="text-xs text-[#94A3B8] leading-relaxed max-w-xl font-normal">
                We strictly adhere to Product Hunt community guidelines. We never coordinate bot rings, upvote trading, or artificial spikes. Our value lies in exceptional product framing, maker narratives, and authentic cross-channel amplification.
              </p>
            </div>
          </div>

          <Button
            onClick={onOpenBooking}
            className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold tracking-wider uppercase rounded-full px-6 py-2.5 shadow-md shadow-blue-500/20 shrink-0"
          >
            <span>PLAN A PRODUCT LAUNCH</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
});
