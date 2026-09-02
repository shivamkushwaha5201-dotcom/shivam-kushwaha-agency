import React from 'react';
import { motion } from 'motion/react';
import { Award, Star, Flame, CheckCircle, ShieldCheck } from 'lucide-react';

export const SocialProofMarquee: React.FC = () => {
  const logos = [
    { name: 'Product Hunt Top 1% Hunter', icon: '🏆', highlight: '185+ Front-page Hunts' },
    { name: 'YC S23 / W24 Backed Startups', icon: '🟧', highlight: '14 Launches Hunted' },
    { name: 'X / Twitter Growth Architect', icon: '𝕏', highlight: '68M+ Impressions' },
    { name: 'LinkedIn Top Voice Strategy', icon: '💼', highlight: 'Founder Brand Engine' },
    { name: 'Hacker News Frontpage', icon: '🔥', highlight: 'Top #1 Show HN' },
    { name: 'Top Tech Influencer Network', icon: '📣', highlight: '220+ Verified Creators' },
    { name: 'Techstars Alumni Launches', icon: '⭐', highlight: '100% Launch Success' },
    { name: 'Golden Kitty Award Nominees', icon: '🐱', highlight: 'Multi-category Nominees' }
  ];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <p className="text-xs uppercase font-bold tracking-widest text-slate-700">
              Trusted by Top Founders, Accelerators & Builders Worldwide
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-500">
            <span className="flex items-center gap-1 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Spam & Shadowban Safe
            </span>
            <span className="hidden md:inline text-slate-300">•</span>
            <span className="flex items-center gap-1 text-slate-700">
              <Award className="w-4 h-4 text-amber-500" />
              Top 1% Official PH Leaderboard
            </span>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Ticker Banner */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right gradient fades for smooth marquee effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4 whitespace-nowrap py-2">
          {[...logos, ...logos].map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-sm text-slate-800 hover:border-blue-300 hover:bg-blue-50/50 transition-all cursor-default"
            >
              <span className="text-lg">{item.icon}</span>
              <div className="flex flex-col text-left">
                <span className="text-xs font-bold text-slate-900 tracking-tight">{item.name}</span>
                <span className="text-[10px] font-semibold text-blue-600">{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
