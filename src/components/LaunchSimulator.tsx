import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  Sliders, 
  Calendar,
  Layers,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { Button } from './ui/button';
import { StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { SpotlightCard } from './ui/SpotlightCard';

interface LaunchSimulatorProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

type CategoryType = 'ai-saas' | 'devtools' | 'b2b-saas' | 'consumer';
type ChannelGoal = 'product-hunt' | 'multi-channel' | 'social-smm' | 'github-reputation';
type TimelineType = '14-days' | '30-days' | '60-days';

export const LaunchSimulator: React.FC<LaunchSimulatorProps> = ({
  onOpenBooking,
  onOpenAudit
}) => {
  const [category, setCategory] = useState<CategoryType>('ai-saas');
  const [goal, setGoal] = useState<ChannelGoal>('product-hunt');
  const [timeline, setTimeline] = useState<TimelineType>('30-days');

  // Compute calculated velocity metrics
  const projection = useMemo(() => {
    let minImpressions = 150000;
    let maxImpressions = 450000;
    let upvotesRange = '650 – 1,100+';
    let targetRank = 'Top 3 Contender';
    let expectedSignups = '1,200 – 3,500+';

    if (category === 'ai-saas') {
      minImpressions += 100000;
      maxImpressions += 300000;
      upvotesRange = '850 – 1,450+';
      targetRank = '#1 Product of the Day Target';
      expectedSignups = '2,500 – 5,000+';
    } else if (category === 'devtools') {
      minImpressions += 80000;
      maxImpressions += 220000;
      upvotesRange = '700 – 1,200+';
      targetRank = 'Top 3 Developer Tool';
      expectedSignups = '1,800 – 4,000+';
    }

    if (goal === 'multi-channel') {
      minImpressions = Math.round(minImpressions * 1.6);
      maxImpressions = Math.round(maxImpressions * 1.8);
      upvotesRange = '1,000 – 1,800+';
      targetRank = '#1 Product of the Day & Weekly Leaderboard';
      expectedSignups = '4,000 – 8,500+';
    } else if (goal === 'github-reputation') {
      targetRank = 'GitHub Trending & High Trust Tier';
      upvotesRange = '300 – 750+ Stars Growth';
      expectedSignups = '900 – 2,200+ Developers';
    }

    if (timeline === '60-days') {
      minImpressions = Math.round(minImpressions * 1.35);
      maxImpressions = Math.round(maxImpressions * 1.4);
    } else if (timeline === '14-days') {
      minImpressions = Math.round(minImpressions * 0.85);
      maxImpressions = Math.round(maxImpressions * 0.9);
    }

    const formatNum = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${Math.round(num / 1000)}K`;
      return num.toString();
    };

    return {
      impressionsText: `${formatNum(minImpressions)} – ${formatNum(maxImpressions)}+`,
      upvotesRange,
      targetRank,
      expectedSignups
    };
  }, [category, goal, timeline]);

  const categories = [
    { id: 'ai-saas', label: 'AI & Machine Learning', icon: '⚡' },
    { id: 'b2b-saas', label: 'B2B SaaS & Enterprise', icon: '🏢' },
    { id: 'devtools', label: 'DevTools & Open Source', icon: '💻' },
    { id: 'consumer', label: 'Consumer & Mobile Apps', icon: '📱' },
  ];

  const goals = [
    { id: 'product-hunt', label: 'Product Hunt #1 Blitz', desc: 'Front page war room & leaderboard push' },
    { id: 'multi-channel', label: 'All-In Multi-Channel', desc: 'PH + LinkedIn + X + Influencer syndication' },
    { id: 'social-smm', label: 'Founder X & LinkedIn Engine', desc: 'Organic daily inbound & thought leadership' },
    { id: 'github-reputation', label: 'GitHub & Reputation Growth', desc: 'Open-source stars, developer trust & reviews' },
  ];

  return (
    <section id="simulator" className="py-24 bg-white dark:bg-[#0B0F17] border-t border-[#E5E5E1] dark:border-[#1E293B] relative overflow-hidden transition-colors duration-200">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 ambient-glow pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 ambient-glow-purple pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <StaggerContainer 
          stagger={0.08}
          delay={0.05}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] dark:bg-[#111827] border border-[#E5E5E1] dark:border-[#1E293B] shadow-2xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F8FAFC]">
                Interactive Launch Engine
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1A1A1A] dark:text-white tracking-tight leading-[1.12]">
              Simulate Your Launch Velocity & Reach<span className="text-[#2563EB]">.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/70 dark:text-slate-400 leading-relaxed font-sans max-w-2xl mx-auto">
              Select your product category, primary distribution goal, and preparation timeline to preview realistic benchmarks engineered with AxentAI Labs.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Interactive Simulator Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Category Selector */}
            <SpotlightCard className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-[#E5E5E1] dark:border-[#1E293B] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center text-[11px] font-bold">1</span>
                  Select Product Category
                </span>
                <span className="text-[11px] font-medium text-[#2563EB] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full">
                  Tailors distribution channels
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {categories.map((cat) => {
                  const isActive = category === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setCategory(cat.id as CategoryType)}
                      className={`p-3 rounded-2xl border text-left transition-all relative cursor-pointer ${
                        isActive
                          ? 'border-[#2563EB] bg-blue-50/60 dark:bg-blue-950/40 text-[#2563EB] shadow-xs'
                          : 'border-[#E5E5E1] dark:border-[#1E293B] bg-[#FAF9F6] dark:bg-[#0B0F17] text-[#1A1A1A] dark:text-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xl mb-1.5">{cat.icon}</div>
                      <div className="text-xs font-bold leading-tight">{cat.label}</div>
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            {/* Step 2: Distribution Goal Selector */}
            <SpotlightCard className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-[#E5E5E1] dark:border-[#1E293B] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center text-[11px] font-bold">2</span>
                  Target Distribution Objective
                </span>
                <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 dark:text-emerald-300 px-2 py-0.5 rounded-full">
                  Campaign Focus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {goals.map((g) => {
                  const isActive = goal === g.id;
                  return (
                    <button
                      key={g.id}
                      onClick={() => setGoal(g.id as ChannelGoal)}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                        isActive
                          ? 'border-[#2563EB] bg-blue-50/50 dark:bg-blue-950/30 ring-1 ring-[#2563EB]'
                          : 'border-[#E5E5E1] dark:border-[#1E293B] bg-[#FAF9F6] dark:bg-[#0B0F17] hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-bold ${isActive ? 'text-[#2563EB]' : 'text-[#1A1A1A] dark:text-slate-200'}`}>
                          {g.label}
                        </span>
                        {isActive && <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />}
                      </div>
                      <p className="text-[11px] text-[#1A1A1A]/60 dark:text-slate-400 mt-1 leading-relaxed">
                        {g.desc}
                      </p>
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

            {/* Step 3: Preparation Horizon Timeline */}
            <SpotlightCard className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#111827] border border-[#E5E5E1] dark:border-[#1E293B] shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/60 dark:text-slate-400 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center text-[11px] font-bold">3</span>
                  Pre-Launch Runway Horizon
                </span>
                <span className="text-xs font-semibold text-[#1A1A1A]/70 dark:text-slate-400">
                  {timeline === '14-days' ? 'Rapid Sprint' : timeline === '30-days' ? 'Standard Playbook' : 'Maximum Pre-Heat'}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: '14-days', title: '14 Days', sub: 'Fast Track' },
                  { id: '30-days', title: '30 Days', sub: 'Optimal Runway' },
                  { id: '60-days', title: '60 Days', sub: 'Extensive Teaser' },
                ].map((t) => {
                  const isActive = timeline === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setTimeline(t.id as TimelineType)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        isActive
                          ? 'border-[#2563EB] bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                          : 'border-[#E5E5E1] dark:border-[#1E293B] bg-[#FAF9F6] dark:bg-[#0B0F17] text-[#1A1A1A] dark:text-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{t.title}</div>
                      <div className={`text-[10px] ${isActive ? 'text-white/80' : 'text-[#1A1A1A]/50 dark:text-slate-400'}`}>
                        {t.sub}
                      </div>
                    </button>
                  );
                })}
              </div>
            </SpotlightCard>

          </div>

          {/* Results Projection Card (Right) */}
          <div className="lg:col-span-5 sticky top-28">
            <motion.div
              layout
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-7 sm:p-8 border border-slate-700/80 shadow-2xl relative overflow-hidden"
            >
              {/* Radial Accent Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Projected Impact Model
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    Live Calculation
                  </span>
                </div>

                {/* Primary Metric: Estimated Total Reach */}
                <div>
                  <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5 mb-1">
                    <Eye className="w-3.5 h-3.5 text-blue-400" />
                    Estimated Multi-Channel Impressions
                  </div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={projection.impressionsText}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight"
                    >
                      {projection.impressionsText}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* 2-Column Secondary Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                      <Award className="w-3 h-3 text-amber-400" />
                      Leaderboard Goal
                    </div>
                    <div className="text-sm font-bold text-slate-100 truncate">
                      {projection.targetRank}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-800/70 border border-slate-700/60">
                    <div className="text-[11px] text-slate-400 flex items-center gap-1 mb-1">
                      <Users className="w-3 h-3 text-emerald-400" />
                      Potential Signups
                    </div>
                    <div className="text-sm font-bold text-emerald-400 truncate">
                      {projection.expectedSignups}
                    </div>
                  </div>
                </div>

                {/* Strategic Roadmap Milestones */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Core Campaign Milestones Included:
                  </span>
                  
                  <div className="space-y-2 text-xs text-slate-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span><strong>T-14:</strong> Positioning audit, teaser hook & early supporter list setup</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span><strong>T-0:</strong> 24-Hour live war room monitoring & leaderboard push</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span><strong>T+1:</strong> Founder viral breakdown threads on LinkedIn & X</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-3 space-y-2.5">
                  <Button
                    onClick={onOpenBooking}
                    className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold py-3 rounded-full shadow-lg shadow-blue-500/25 group justify-center relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Lock In This Launch Strategy</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>

                  <button
                    onClick={onOpenAudit}
                    className="w-full text-center text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors py-1 cursor-pointer"
                  >
                    Take the 2-minute Launch Readiness Audit →
                  </button>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
