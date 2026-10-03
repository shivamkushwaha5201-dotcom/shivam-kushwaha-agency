import React from 'react';
import { motion } from 'motion/react';
import { Quote, Star, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Button } from './ui/button';
import { StaggerContainer, StaggerItem } from './ui/ScrollReveal';
import { SpotlightCard } from './ui/SpotlightCard';

interface ClientSuccessSectionProps {
  onOpenBooking: () => void;
  onOpenAudit?: () => void;
}

export const ClientSuccessSection: React.FC<ClientSuccessSectionProps> = ({ 
  onOpenBooking,
  onOpenAudit 
}) => {
  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#FAF9F6] dark:bg-[#0B0F17] border-t border-[#E5E5E1] dark:border-[#1E293B] relative overflow-hidden transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <StaggerContainer 
          stagger={0.08}
          delay={0.05}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#111827] border border-[#E5E5E1] dark:border-[#1E293B] shadow-2xs mb-3.5">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F8FAFC]">
                Client Success Stories
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1A1A1A] dark:text-white tracking-tight leading-[1.12]">
              Real Feedback from Founders Who Launched with Us<span className="text-[#2563EB]">.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="mt-4 text-base sm:text-lg text-[#1A1A1A]/70 dark:text-slate-400 leading-relaxed font-sans max-w-2xl mx-auto">
              From category-leading Product Hunt debuts to high-velocity founder distribution on LinkedIn and X, see how ambitious teams partner with AxentAI Labs to reach thousands of users.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* 3-Column Testimonials Grid with SpotlightCards */}
        <StaggerContainer
          stagger={0.12}
          delay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {TESTIMONIALS.map((item) => {
            return (
              <StaggerItem key={item.id} className="h-full flex">
                <SpotlightCard
                  spotlightColor="rgba(37, 99, 235, 0.1)"
                  className="w-full bg-white dark:bg-[#111827] rounded-3xl border border-[#E5E5E1] dark:border-[#1E293B] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#2563EB]/40 dark:hover:border-blue-500/40 transition-all duration-300 relative group"
                >
                  
                  {/* Top Row: Quotation Mark Icon & Star Rating */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50/70 dark:bg-blue-950/70 border border-blue-100/80 dark:border-blue-900/60 flex items-center justify-center text-[#2563EB] dark:text-[#60A5FA] group-hover:scale-110 transition-transform">
                        <Quote className="w-5 h-5 fill-[#2563EB]/15 stroke-[1.8]" />
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-3.5 h-3.5 text-amber-400 fill-amber-400" 
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Quote */}
                    <div className="relative mb-6">
                      <p className="text-sm sm:text-[15px] text-[#1A1A1A]/85 dark:text-slate-200 leading-relaxed font-sans">
                        <span className="text-lg font-serif text-[#2563EB] font-bold mr-1 select-none">“</span>
                        {item.quote}
                        <span className="text-lg font-serif text-[#2563EB] font-bold ml-1 select-none">”</span>
                      </p>
                    </div>
                  </div>

                  {/* Bottom Content: Key Result & Author Profile */}
                  <div className="pt-5 border-t border-[#E5E5E1]/80 dark:border-[#1E293B]">
                    {/* Key Outcome Highlight */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] dark:text-[#60A5FA] mb-4 bg-blue-50/70 dark:bg-blue-950/40 px-3 py-1.5 rounded-xl border border-blue-100/70 dark:border-blue-900/40">
                      <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{item.highlight}</span>
                    </div>

                    {/* Author Details */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#1A1A1A] to-[#2563EB] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                          {item.avatar}
                        </div>
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-[#1A1A1A] dark:text-white leading-tight truncate">
                            {item.name}
                          </h4>
                          <p className="text-[11px] text-[#1A1A1A]/60 dark:text-slate-400 leading-tight truncate">
                            {item.role} · <span className="font-semibold text-[#1A1A1A]/80 dark:text-slate-300">{item.company}</span>
                          </p>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      <div className="shrink-0 flex items-center text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800/60">
                        <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-600 dark:text-emerald-400" />
                        <span>Verified</span>
                      </div>
                    </div>
                  </div>

                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom CTA Banner for Next Launches */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-[#E5E5E1] dark:border-[#1E293B] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-white">
              Ready to create your own launch success story?
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/60 dark:text-slate-400 mt-1">
              Join dozens of founders who reached #1 on Product Hunt and built compounding audience flywheels.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenAudit && (
              <Button
                variant="outline"
                size="sm"
                onClick={onOpenAudit}
                className="rounded-full text-xs font-semibold"
              >
                Launch Audit
              </Button>
            )}
            <Button
              size="sm"
              onClick={onOpenBooking}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full text-xs font-bold px-5 shadow-md shadow-blue-500/20 group"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
