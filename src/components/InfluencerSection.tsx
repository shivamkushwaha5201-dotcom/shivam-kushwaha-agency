import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  UserCheck, 
  Target,
  Send, 
  FileText, 
  PlayCircle, 
  BarChart2, 
  ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';

interface InfluencerSectionProps {
  onOpenBooking: () => void;
}

export const InfluencerSection: React.FC<InfluencerSectionProps> = ({ onOpenBooking }) => {
  const managementWorkflow = [
    {
      step: '01',
      name: 'Creator Discovery',
      description: 'Systematic mapping of high-affinity creators with authentic followings across LinkedIn, X, and Instagram.',
      icon: Search
    },
    {
      step: '02',
      name: 'Creator Vetting',
      description: 'Rigorous auditing of real comment depth, audience authenticity, brand alignment, and historical conversion capability.',
      icon: UserCheck
    },
    {
      step: '03',
      name: 'Campaign Strategy',
      description: 'Designing tailored creative angles, hook structures, and multi-channel synchronization calendars.',
      icon: Target
    },
    {
      step: '04',
      name: 'Outreach',
      description: 'Direct founder-to-creator communications ensuring personal alignment with your brand perspective and ethos.',
      icon: Send
    },
    {
      step: '05',
      name: 'Negotiation',
      description: 'Locking in competitive commercial rates, content usage rights, timeline commitments, and syndication parameters.',
      icon: FileText
    },
    {
      step: '06',
      name: 'Campaign Management',
      description: 'Delivering detailed creative briefs, reviewing draft content, QA testing demo links, and synchronizing live deployment.',
      icon: PlayCircle
    },
    {
      step: '07',
      name: 'Performance Reporting',
      description: 'Comprehensive post-campaign intelligence detailing real impression depth, link clicks, cost-per-acquisition, and strategic takeaways.',
      icon: BarChart2
    }
  ];

  return (
    <section 
      id="influencer-marketing" 
      className="py-32 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-20 space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-[#38BDF8] font-semibold font-mono">
            // CREATOR NETWORK SYNDICATION
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em]">
            Global Creator Ecosystem.
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed font-sans max-w-2xl font-normal">
            We curate and manage synchronized creator partnerships across LinkedIn, X, and Instagram—surrounding your market with verified, trusted voices.
          </p>
        </div>

        {/* Global Creator Distribution Network: LINKEDIN ↓ X / TWITTER ↓ INSTAGRAM */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#050B14]/80 backdrop-blur-md border border-white/10 mb-14 shadow-2xl shadow-black/60 relative overflow-hidden">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#38BDF8] font-semibold">
              Cross-Platform Syndication Channels
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] tracking-tight font-display">
              LINKEDIN <span className="text-[#38BDF8] font-light">↓</span> X / TWITTER <span className="text-[#38BDF8] font-light">↓</span> INSTAGRAM
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Desktop Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] h-[1px] bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] -translate-y-1/2 -z-0 opacity-30" />

            {/* LinkedIn Card */}
            <div className="p-7 rounded-2xl bg-[#02040A]/80 border border-white/10 hover:border-white/20 transition-all space-y-3 relative z-10 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[#F8FAFC] font-display">01. LINKEDIN</span>
                <span className="text-[10px] font-mono font-semibold text-[#3B82F6] bg-[#3B82F6]/10 px-2.5 py-0.5 rounded-full border border-[#3B82F6]/20">
                  B2B & Enterprise
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-normal">
                In-depth thought leadership, commercial case studies, and long-form operator commentary from verified industry leaders.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#38BDF8]">
                Target: VP & C-Level Executives
              </div>
            </div>

            {/* X / Twitter Card */}
            <div className="p-7 rounded-2xl bg-[#02040A]/80 border border-white/10 hover:border-white/20 transition-all space-y-3 relative z-10 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[#F8FAFC] font-display">02. X / TWITTER</span>
                <span className="text-[10px] font-mono font-semibold text-[#38BDF8] bg-[#38BDF8]/10 px-2.5 py-0.5 rounded-full border border-[#38BDF8]/20">
                  Founders & Tech
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-normal">
                Fast-moving viral breakdowns, build-in-public narratives, product video clips, and high-frequency community opinion.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#38BDF8]">
                Target: Early Adopters & Operators
              </div>
            </div>

            {/* Instagram Card */}
            <div className="p-7 rounded-2xl bg-[#02040A]/80 border border-white/10 hover:border-white/20 transition-all space-y-3 relative z-10 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-[#F8FAFC] font-display">03. INSTAGRAM</span>
                <span className="text-[10px] font-mono font-semibold text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                  Visual Ethos
                </span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-normal">
                High-aesthetic UI previews, founder lifestyle carousels, and behind-the-scenes reels that humanize technical software.
              </p>
              <div className="pt-2 text-[11px] font-mono text-[#38BDF8]">
                Target: Modern Creators & Design Teams
              </div>
            </div>

          </div>

        </div>

        {/* 7-Stage End-to-End Workflow */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#050B14]/80 backdrop-blur-md border border-white/10 space-y-8">
          
          <div className="space-y-2">
            <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-[0.2em] font-mono">
              FULL-CYCLE EXECUTION
            </span>
            <h3 className="text-2xl font-bold text-[#F8FAFC] tracking-tight font-display">
              7-Stage Creator Management Protocol
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] font-normal">
              We eliminate administrative friction by leading every step of creator research, negotiation, briefing, and contract reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {managementWorkflow.map((ws, wIdx) => {
              const Icon = ws.icon;
              const isLast = wIdx === managementWorkflow.length - 1;

              return (
                <div 
                  key={ws.step}
                  className={`p-6 rounded-2xl bg-[#02040A]/80 border border-white/10 space-y-2.5 hover:border-white/20 transition-colors ${
                    isLast ? 'sm:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#38BDF8]">
                      {ws.step}
                    </span>
                    <Icon className="w-4 h-4 text-[#94A3B8]" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#F8FAFC] font-display">
                    {ws.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] leading-relaxed font-normal">
                    {ws.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs text-[#94A3B8] font-normal">
              Need a curated creator shortlist aligned with your customer persona?
            </div>
            <Button
              onClick={onOpenBooking}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold tracking-wider uppercase rounded-full px-6 py-2.5 shadow-md shadow-blue-500/20"
            >
              <span>PLAN A CREATOR CAMPAIGN</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};
