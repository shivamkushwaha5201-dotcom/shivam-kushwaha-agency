import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  Compass, 
  UserCheck, 
  Users, 
  Layers, 
  LineChart, 
  Handshake
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const differentiators = [
    {
      title: 'Strategy Before Execution',
      description: 'We do not publish for the sake of publishing. Every piece of content, engagement interaction, and outreach push is anchored in your commercial objectives.',
      icon: Target
    },
    {
      title: 'Organic-First Approach',
      description: 'Paid ads vanish the moment budget stops. Authentic organic presence creates lasting compound interest, industry trust, and sustainable inbound pipeline.',
      icon: Compass
    },
    {
      title: 'Founder-Focused Branding',
      description: 'People follow people, not faceless logos. We articulate the founder’s unique philosophy, technical depth, and vision to build enduring executive authority.',
      icon: UserCheck
    },
    {
      title: 'Real Audience Building',
      description: 'We reject engagement pods, purchased followers, and superficial vanity metrics. We cultivate real connections with active buyers, peers, and industry decision-makers.',
      icon: Users
    },
    {
      title: 'Platform-Specific Strategies',
      description: 'LinkedIn, X (Twitter), and Instagram require fundamentally different editorial formats, interaction rhythms, and narrative arcs. We tailor execution to each platform.',
      icon: Layers
    },
    {
      title: 'Data-Driven Optimization',
      description: 'We track engagement depth, profile conversions, and inbound leads—refining editorial hooks and distribution channels based on empirical performance.',
      icon: LineChart
    },
    {
      title: 'Hands-On Campaign Management',
      description: 'You work directly with senior growth strategists who manage outreach, creator vetting, and launch execution hands-on—no junior outsourcing.',
      icon: Handshake
    }
  ];

  return (
    <section 
      id="why-us" 
      className="py-24 bg-[#02050A] text-slate-100 border-t border-blue-500/15 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
            Why AxentAI Labs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            How We Differentiate
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-sans">
            A boutique growth agency built around high-touch execution, transparent ethics, and founder-level accountability.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, idx) => {
            const Icon = item.icon;
            const isFullSpan = idx === differentiators.length - 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                className={`p-7 rounded-2xl bg-[#06111F]/70 border border-blue-500/20 hover:border-blue-400/60 hover:bg-[#06111F] transition-all space-y-3 group shadow-lg shadow-black/40 ${
                  isFullSpan ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600/25 transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
