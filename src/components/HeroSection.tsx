import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  TrendingUp, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Flame, 
  ThumbsUp, 
  ShieldCheck,
  Zap,
  Calendar,
  Phone,
  MessageSquare,
  Star
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { STAT_METRICS, CONTACT_INFO } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenAudit: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAudit, onOpenBooking }) => {
  const [upvotes, setUpvotes] = useState(1482);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [activePreviewTab, setActivePreviewTab] = useState<'ph' | 'x' | 'linkedin'>('ph');

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setUpvotes(prev => prev + 1);
      setHasUpvoted(true);
    } else {
      setUpvotes(prev => prev - 1);
      setHasUpvoted(false);
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero 2-Column Layout matching image.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Bold Headline, Subtitle, Testimonial & Pill CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill status */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E1] shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span className="text-xs font-bold text-[#1A1A1A] tracking-wide">
                Founder — AxentAI Labs
              </span>
              <span className="text-[#1A1A1A]/30">•</span>
              <span className="text-xs font-semibold text-[#2563EB]">
                Top 1% Hunter
              </span>
            </div>

            {/* Main Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#1A1A1A] tracking-tight leading-[1.08]">
                I'm Shivam Kushwaha<span className="text-[#2563EB]">.</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-[#1A1A1A]/80 leading-snug">
                Growth & Multi-Channel Distribution Strategist helping tech startups achieve global reach.
              </p>
            </div>

            {/* Description Paragraph */}
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans max-w-xl">
              I specialize in high-velocity <strong className="text-[#1A1A1A] font-semibold">Product Hunt Launches</strong>, viral organic <strong className="text-[#1A1A1A] font-semibold">LinkedIn & X (Twitter) SMM</strong>, <strong className="text-[#1A1A1A] font-semibold">Reddit Marketing</strong>, and <strong className="text-[#1A1A1A] font-semibold">Tech Influencer Syndication</strong>.
            </p>

            {/* Featured Testimonial Card from image.png */}
            <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#E5E5E1] shadow-sm relative max-w-xl">
              <div className="flex items-center gap-1 text-[#2563EB] mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#2563EB]" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed italic">
                “Shivam hunted our AI startup and took us straight to #1 Product of the Day. We gained 3,400+ new signups and $18k in ARR within 48 hours!”
              </p>

              <div className="mt-4 pt-3 border-t border-[#E5E5E1] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                    alt="Founder avatar"
                    className="w-9 h-9 rounded-full object-cover border border-[#E5E5E1]"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#1A1A1A]">Sarah Jenkins</div>
                    <div className="text-[11px] text-[#1A1A1A]/50">Founder & CEO, FlowGen AI</div>
                  </div>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full border border-[#2563EB]/20">
                  #1 Product of Day
                </span>
              </div>
            </div>

            {/* Action Buttons: Portfolio & Book a Call (Blue Pill) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#case-studies"
                className="px-6 py-3 rounded-full border border-[#1A1A1A] bg-white text-[#1A1A1A] text-xs sm:text-sm font-bold hover:bg-[#FAF9F6] transition-all"
              >
                Portfolio & Proof
              </a>

              <Button
                id="hero-primary-cta"
                size="lg"
                onClick={onOpenBooking}
                className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-lg shadow-[#2563EB]/25 group"
              >
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full border border-[#E5E5E1] bg-white text-[#1A1A1A]/80 text-xs sm:text-sm font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: "HIRE ME" Badge + Starburst + Live Simulator Terminal */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* HIRE ME Badge & Starburst Graphic row matching image.png */}
            <div className="flex items-center justify-center lg:justify-end gap-6 pr-2">
              
              {/* Starburst 8-pointed geometric line icon */}
              <div className="w-14 h-14 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors">
                <svg className="w-8 h-8 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                </svg>
              </div>

              {/* Large Circular "HIRE ME" rotating badge stamp */}
              <div className="relative group cursor-pointer" onClick={onOpenBooking}>
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-[#2563EB] p-1.5 shadow-xl shadow-[#2563EB]/30 flex items-center justify-center relative overflow-hidden">
                  
                  {/* Rotating Curved Text */}
                  <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '14s' }}>
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="transparent"
                      />
                      <text className="text-[9.5px] font-black uppercase tracking-[0.28em] fill-white">
                        <textPath href="#circlePath" startOffset="0%">
                          • HIRE SHIVAM • LAUNCH WITH ME 
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* Inner White Disk */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-inner z-10 group-hover:scale-105 transition-transform">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                      HIRE
                    </span>
                    <span className="text-[11px] font-black uppercase text-[#2563EB]">
                      ME
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Live Launch Simulator Stage */}
            <div className="rounded-3xl border border-[#E5E5E1] bg-white p-5 sm:p-6 shadow-xl shadow-black/5">
              
              {/* Header / Tabs */}
              <div className="flex items-center justify-between gap-2 pb-4 border-b border-[#E5E5E1]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-[#1A1A1A] ml-1">Live Launch Simulator</span>
                </div>

                <div className="flex bg-[#FAF9F6] p-1 rounded-full border border-[#E5E5E1] text-[11px]">
                  <button
                    onClick={() => setActivePreviewTab('ph')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      activePreviewTab === 'ph'
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                    }`}
                  >
                    PH
                  </button>
                  <button
                    onClick={() => setActivePreviewTab('x')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      activePreviewTab === 'x'
                        ? 'bg-[#1A1A1A] text-white shadow-xs'
                        : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                    }`}
                  >
                    𝕏
                  </button>
                  <button
                    onClick={() => setActivePreviewTab('linkedin')}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      activePreviewTab === 'linkedin'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                    }`}
                  >
                    in
                  </button>
                </div>
              </div>

              {/* Tab: Product Hunt */}
              {activePreviewTab === 'ph' && (
                <div className="mt-4 space-y-4">
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white text-xl font-bold flex items-center justify-center shrink-0">
                        ⚡
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h4 className="text-sm font-bold text-[#1A1A1A]">SuperLaunch AI</h4>
                          <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2 py-0.5 rounded-full">
                            🏆 #1 Product
                          </span>
                        </div>
                        <p className="text-xs text-[#1A1A1A]/60 mt-0.5">
                          Autonomous AI viral distribution engine
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleUpvote}
                      className={`flex flex-col items-center justify-center px-3.5 py-2 rounded-xl border transition-all cursor-pointer ${
                        hasUpvoted
                          ? 'border-[#2563EB] bg-[#2563EB] text-white'
                          : 'border-[#E5E5E1] bg-white hover:border-[#2563EB] text-[#1A1A1A]'
                      }`}
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span className="text-xs font-bold font-mono-code">{upvotes}</span>
                    </button>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#E5E5E1] text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-[#1A1A1A]">Shivam (Hunter Comment)</span>
                      <span className="text-[10px] text-[#1A1A1A]/40 font-mono-code">12:01 AM PST</span>
                    </div>
                    <p className="text-[#1A1A1A]/70 leading-relaxed text-[11px]">
                      “Thrilled to hunt SuperLaunch today! Tested with the team for 3 weeks. Drop your questions below!”
                    </p>
                  </div>
                </div>
              )}

              {/* Tab: X Viral Thread */}
              {activePreviewTab === 'x' && (
                <div className="mt-4 p-4 rounded-2xl bg-[#1A1A1A] text-white border border-[#1A1A1A] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#2563EB] text-white font-bold flex items-center justify-center text-xs">
                        S
                      </div>
                      <div>
                        <span className="font-bold">Shivam 🚀</span>
                        <span className="text-[10px] text-white/50 ml-1">@shivam_launches</span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/20 px-2 py-0.5 rounded-full">
                      1.2M Views
                    </span>
                  </div>
                  <p className="text-xs text-white/80 leading-relaxed font-sans pt-1">
                    We just took a bootstrap AI startup from 0 to <strong className="text-blue-400">#1 Product of the Day</strong> on Product Hunt + $14,000 MRR in 48 hours. Here is the 7-step blueprint: 🧵👇
                  </p>
                </div>
              )}

              {/* Tab: LinkedIn */}
              {activePreviewTab === 'linkedin' && (
                <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E5E5E1] text-[#1A1A1A] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold">Shivam • Founder SMM</span>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                      B2B Inbound
                    </span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    How we generated 42 qualified enterprise demo bookings without spending $1 on paid ads using strategic technical carousels.
                  </p>
                </div>
              )}

              {/* Quick Metrics */}
              <div className="mt-4 pt-3 border-t border-[#E5E5E1] grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-[#FAF9F6]">
                  <div className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">Launches</div>
                  <div className="text-sm font-bold text-[#1A1A1A]">185+</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F6]">
                  <div className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">Top 3 Rate</div>
                  <div className="text-sm font-bold text-[#2563EB]">96.2%</div>
                </div>
                <div className="p-2 rounded-xl bg-[#FAF9F6]">
                  <div className="text-[9px] uppercase tracking-wider text-[#1A1A1A]/50 font-bold">Impressions</div>
                  <div className="text-sm font-bold text-[#1A1A1A]">68M+</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4 Stat Cards Row */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STAT_METRICS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-5 rounded-3xl bg-white border border-[#E5E5E1] shadow-xs hover:border-[#2563EB] transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-[#1A1A1A]/60">{stat.label}</span>
                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  {stat.growth}
                </span>
              </div>
              <div className="text-3xl font-black text-[#1A1A1A] font-display tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs text-[#1A1A1A]/60 mt-1 leading-relaxed">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
