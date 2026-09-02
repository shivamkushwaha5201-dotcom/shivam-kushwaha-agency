import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  TrendingUp, 
  Sparkles, 
  Users, 
  Quote, 
  CheckCircle2, 
  ExternalLink, 
  ArrowUpRight,
  Flame,
  Star,
  Zap,
  Award
} from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { CASE_STUDIES, TESTIMONIALS } from '../data/portfolioData';

interface CaseStudiesSectionProps {
  onOpenBooking: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [expandedStudy, setExpandedStudy] = useState<string | null>(CASE_STUDIES[0].id);

  const filteredStudies = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section id="case-studies" className="py-24 bg-[#FAF9F6] border-t border-[#E5E5E1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[#2563EB] font-bold tracking-[0.25em] text-xs uppercase mb-3 inline-block">
            Verified Proof & Metrics
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif-artistic font-medium text-[#1A1A1A] tracking-tight leading-tight">
            Proven Launch Teardowns & <span className="italic font-normal">Impact.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed">
            Real founders, real products, and undeniable front-page dominance across tech platforms.
          </p>
        </div>

        {/* Case Studies Teardown Grid */}
        <div className="space-y-6 mb-16">
          {filteredStudies.map((study, idx) => {
            const isExpanded = expandedStudy === study.id;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-3xl border border-[#E5E5E1] bg-white p-6 sm:p-9 hover:border-[#2563EB] transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Product & Outcome Overview */}
                  <div className="lg:col-span-5 space-y-3.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full border border-[#2563EB]/20">
                        {study.badgeRank}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1A1A]/60 bg-[#FAF9F6] px-2.5 py-1 rounded-full border border-[#E5E5E1]">
                        {study.category}
                      </span>
                    </div>

                    <h3 className="text-3xl font-serif-artistic italic font-medium text-[#1A1A1A]">
                      {study.productName}
                    </h3>
                    <p className="text-xs font-semibold text-[#1A1A1A]/80">
                      {study.tagline}
                    </p>
                    <p className="text-xs text-[#1A1A1A]/70 leading-relaxed font-sans">
                      {study.summary}
                    </p>

                    {/* Key Strategic Lever */}
                    <div className="p-4 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] text-xs">
                      <strong className="text-[#2563EB] font-bold block text-[10px] uppercase tracking-widest mb-1">
                        Key Strategy:
                      </strong>
                      <span className="text-[#1A1A1A]/80 leading-relaxed font-serif-artistic italic text-sm">
                        {study.keyStrategy}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: High-Impact Metric Grid + Testimonial */}
                  <div className="lg:col-span-7 space-y-4">
                    {/* Metric Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                      <div className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1]">
                        <div className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold">PH Upvotes</div>
                        <div className="text-2xl font-serif-artistic italic font-bold text-[#2563EB] mt-0.5">
                          {study.totalUpvotes}+
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1]">
                        <div className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold">Signups</div>
                        <div className="text-2xl font-serif-artistic italic font-bold text-[#1A1A1A] mt-0.5">
                          {study.newSignups}
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1]">
                        <div className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold">Impressions</div>
                        <div className="text-2xl font-serif-artistic italic font-bold text-[#1A1A1A] mt-0.5">
                          {study.impressions}
                        </div>
                      </div>
                      <div className="p-3 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1]">
                        <div className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold">Social Reach</div>
                        <div className="text-2xl font-serif-artistic italic font-bold text-[#1A1A1A] mt-0.5">
                          {study.linkedinReach}
                        </div>
                      </div>
                    </div>

                    {/* Founder Testimonial Box in Ink Black */}
                    <div className="p-6 rounded-3xl bg-[#1A1A1A] text-white relative overflow-hidden border border-[#1A1A1A]">
                      <p className="text-sm italic text-white/90 leading-relaxed font-serif-artistic text-base">
                        "{study.testimonial}"
                      </p>
                      
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={study.founderAvatar}
                            alt={study.founderName}
                            className="w-8 h-8 rounded-full object-cover border border-white/20"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <div className="text-xs font-bold text-white">{study.founderName}</div>
                            <div className="text-[10px] text-white/50">{study.founderTitle}</div>
                          </div>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest font-mono-code text-[#3B82F6] bg-white/10 px-2 py-0.5 rounded-full">
                          Verified #1 Launch
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Testimonials Wall */}
        <div className="rounded-3xl border border-[#E5E5E1] bg-white p-6 sm:p-10">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#1A1A1A]/40 mb-1 block">
              Founder Feedback
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif-artistic font-medium text-[#1A1A1A]">
              What Founders Say About Working with <span className="italic">Shivam</span>
            </h3>
            <p className="text-xs text-[#1A1A1A]/60 mt-1">
              From early-stage bootstrappers to venture-backed CEOs, here is how our distribution partnerships perform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-3xl bg-[#FAF9F6] border border-[#E5E5E1] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1 text-[#2563EB]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#2563EB]" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#2563EB] bg-white px-2.5 py-0.5 rounded-full border border-[#E5E5E1]">
                      {t.highlight}
                    </span>
                  </div>

                  <p className="text-xs text-[#1A1A1A]/80 leading-relaxed font-serif-artistic italic text-sm">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-[#E5E5E1] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#E5E5E1]"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">{t.name}</div>
                      <div className="text-[10px] text-[#1A1A1A]/50">{t.role}, {t.company}</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-medium uppercase tracking-widest text-[#1A1A1A]/50">
                    {t.verifiedLaunch}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              onClick={onOpenBooking}
              size="lg"
            >
              <span>Schedule Your Launch Strategy Session</span>
              <Zap className="w-3.5 h-3.5 ml-2" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};
