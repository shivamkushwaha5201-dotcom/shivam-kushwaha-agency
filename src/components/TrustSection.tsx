import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Target, Compass } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const credibilityPoints = [
    {
      title: 'Trusted by Founders & Growing Brands',
      description: 'Collaborating directly with startup executives, solo founders, and growth leaders to build high-signal authority online.',
      icon: Shield
    },
    {
      title: 'Startup-Focused Growth',
      description: 'Engineered for the speed and agility tech startups need—moving from zero audience to sustained inbound pipeline.',
      icon: Target
    },
    {
      title: 'Organic-First Strategy',
      description: 'Prioritizing legitimate conversations, resonant founder perspectives, and genuine engagement over superficial follower gimmicks.',
      icon: Compass
    },
    {
      title: 'Creator-Led Distribution',
      description: 'Tapping into curated, vetted voices across LinkedIn, X, and Instagram to position your product directly in front of active buyers.',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-transparent border-y border-blue-500/15 text-slate-200 relative overflow-hidden z-10">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-blue-600/5 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 space-y-2.5">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Our Foundation
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
            Built on Strategy, Integrity & Measurable Presence
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            We partner with modern brands to engineer sustainable visibility without shortcuts or manufactured hype.
          </p>
        </div>

        {/* 4 Clean Credibility Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credibilityPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#06111F]/70 border border-blue-500/20 hover:border-blue-500/50 hover:bg-[#06111F] transition-all space-y-3 group shadow-lg shadow-black/40"
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/25 transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
