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
      className="py-32 bg-[#0B0812] text-[#F8F7FC] border-t border-[#30213F] relative overflow-hidden font-sans z-10"
    >
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
            // GLOBAL LAUNCH ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8F7FC] tracking-[-0.02em] heading-contrast-shadow">
            Global Launch Visibility.
          </h2>
          <p className="text-sm sm:text-base text-[#B9B1C9] leading-relaxed font-sans max-w-2xl font-normal text-contrast-shadow">
            A battle-tested 4-phase launch framework designed to propel your software to international early-adopter recognition with 100% legitimate strategy.
          </p>
        </motion.div>

        {/* Global Trajectory Process Visual: PRE-LAUNCH ↓ LAUNCH ↓ DISTRIBUTION ↓ POST-LAUNCH */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="p-8 sm:p-12 rounded-3xl bg-[#100B1B] border border-[#30213F] mb-12 shadow-xl shadow-black/50 space-y-8"
        >
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#30213F]">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-[#B98AFF]">
                Launch Flight Path
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F8F7FC] tracking-tight font-display">
                PRE-LAUNCH <span className="text-[#B98AFF] font-light">↓</span> LAUNCH <span className="text-[#B98AFF] font-light">↓</span> DISTRIBUTION <span className="text-[#B98AFF] font-light">↓</span> POST-LAUNCH
              </h3>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0812] border border-[#30213F] text-[#B98AFF] text-xs font-mono font-medium">
              <Globe className="w-3.5 h-3.5" />
              <span>International Early Adopters</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {flightPhases.map((phase, idx) => {
              const Icon = phase.icon;
              return (
                <motion.div 
                  key={phase.stage}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: idx * 0.09, ease: [0.16, 1, 0.3, 1] }}
                  className="fx-card-interactive p-6 rounded-2xl bg-[#0B0812] border border-[#30213F] hover:border-[#7028D8] hover:bg-[#100B1B] hover:shadow-[0_12px_28px_-6px_rgba(112,40,216,0.25)] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#B98AFF]">
                        {phase.name}
                      </span>
                      <Icon className="w-4 h-4 text-[#7028D8]" />
                    </div>

                    <div className="text-[11px] font-mono text-[#B9B1C9]">
                      {phase.timing}
                    </div>

                    <h4 className="text-sm font-bold text-[#F8F7FC] font-display">
                      {phase.title}
                    </h4>

                    <p className="text-xs text-[#B9B1C9] leading-relaxed font-sans font-normal">
                      {phase.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#30213F] text-[10px] font-mono font-semibold text-[#B98AFF]">
                    Phase {phase.stage} of 04
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>

        {/* Ethical Standards & Compliance Guarantee */}
        <div className="p-8 rounded-2xl bg-[#100B1B] border border-[#30213F] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#35106B]/60 border border-[#30213F] text-[#B98AFF] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold text-[#F8F7FC] font-display">
                100% Legitimate Launch Standards
              </h4>
              <p className="text-xs text-[#B9B1C9] leading-relaxed max-w-xl font-normal">
                We strictly adhere to Product Hunt community guidelines. We never coordinate bot rings, upvote trading, or artificial spikes. Our value lies in exceptional product framing, maker narratives, and authentic cross-channel amplification.
              </p>
            </div>
          </div>

          <Button
            onClick={onOpenBooking}
            className="bg-[#7028D8] hover:bg-[#35106B] text-[#F8F7FC] text-xs font-semibold tracking-wider uppercase rounded-full px-6 py-2.5 border border-[#B98AFF]/30 shadow-md shadow-[#7028D8]/25 shrink-0 cursor-pointer"
          >
            <span>PLAN A PRODUCT LAUNCH</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
});
