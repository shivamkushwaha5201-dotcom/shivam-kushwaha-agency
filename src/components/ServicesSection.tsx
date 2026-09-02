import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Sparkles, 
  Megaphone, 
  Rocket, 
  Check, 
  ArrowRight, 
  Zap, 
  Flame, 
  Sliders, 
  TrendingUp,
  Clock,
  Shield,
  HelpCircle
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [selectedService, setSelectedService] = useState<string>('all');
  
  // Strategy Estimator State
  const [productType, setProductType] = useState<'ai' | 'saas' | 'devtool' | 'mobile'>('ai');
  const [timeline, setTimeline] = useState<'rush' | 'standard' | 'thorough'>('standard');
  const [targetGoal, setTargetGoal] = useState<'ph1' | 'mrr' | 'viral_brand'>('ph1');

  const filteredServices = selectedService === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.id === selectedService);

  // Estimator Calculations
  const getEstimatedResults = () => {
    let estUpvotes = '850 - 1,400+';
    let estImpressions = '1.5M - 3.5M';
    let estSignups = '2,500 - 8,000+';
    let recommendedTier = 'Product Hunt Hunting + X Social Blitz';

    if (productType === 'ai') {
      estUpvotes = '1,100 - 1,800+';
      estImpressions = '3.0M - 6.5M';
      estSignups = '5,000 - 14,000+';
      recommendedTier = '360° Viral Launch Sprint (Hunting + Creator Syndication)';
    } else if (productType === 'saas') {
      estUpvotes = '750 - 1,200+';
      estImpressions = '1.2M - 2.8M';
      estSignups = '1,800 - 5,000+';
      recommendedTier = 'Product Hunt Hunt + LinkedIn Thought Leadership Inbound';
    } else if (productType === 'devtool') {
      estUpvotes = '900 - 1,350+';
      estImpressions = '2.0M - 4.0M';
      estSignups = '3,000 - 7,500 Devs';
      recommendedTier = 'Hunter Endorsement + Developer Creator Sponsorships';
    }

    return { estUpvotes, estImpressions, estSignups, recommendedTier };
  };

  const { estUpvotes, estImpressions, estSignups, recommendedTier } = getEstimatedResults();

  return (
    <section id="services" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorum ambient background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 ambient-glow pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 ambient-glow-purple pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Badge variant="blue" className="mb-3">
            SPECIALIZED GROWTH SERVICES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
            High-Impact Distribution Offerings Crafted for Velocity.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose a standalone strategic sprint or combine hunting, social media marketing, and influencer partnerships into an all-in-one viral launch campaign.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={() => setSelectedService('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedService === 'all'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Services ({SERVICES_DATA.length})
            </button>
            <button
              onClick={() => setSelectedService('product-hunt-hunting')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedService === 'product-hunt-hunting'
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              🏆 Product Hunt Hunting
            </button>
            <button
              onClick={() => setSelectedService('x-linkedin-smm')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedService === 'x-linkedin-smm'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              𝕏 & LinkedIn SMM
            </button>
            <button
              onClick={() => setSelectedService('influencer-marketing')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedService === 'influencer-marketing'
                  ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/20'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              📣 Influencer Marketing
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredServices.map((service, idx) => {
            const isFeatured = service.featured;
            return (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-blue-300 bg-gradient-to-b from-white via-blue-50/30 to-white shadow-xl shadow-blue-500/10 ring-1 ring-blue-200'
                    : 'border-slate-200/90 bg-white shadow-sm hover:shadow-lg hover:border-slate-300'
                }`}
              >
                <div className="p-7 sm:p-8">
                  {/* Top Badge & Metric */}
                  <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                    <span className="text-xs font-bold text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200/60">
                      {service.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {service.resultsMetric}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-slate-900 font-display">
                    {service.title}
                  </h3>
                  <p className="text-sm font-semibold text-blue-600 mt-1">
                    {service.tagline}
                  </p>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                      Key Deliverables Included:
                    </h4>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Note */}
                  <div className="mt-6 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                    <strong className="text-slate-800 font-semibold">Best suited for:</strong> {service.idealFor}
                  </div>
                </div>

                <div className="p-7 sm:p-8 pt-0">
                  <Button
                    onClick={onOpenBooking}
                    variant={isFeatured ? 'default' : 'outline'}
                    className={`w-full justify-center group ${!isFeatured ? 'hover:border-blue-300 hover:text-blue-700' : ''}`}
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Launch Strategy & Reach Blueprint Generator */}
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-slate-900/5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-2">
                <Sliders className="w-3.5 h-3.5" />
                INTERACTIVE STRATEGY ESTIMATOR
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                Calculate Your Launch Velocity & Reach Potential
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Customize your product profile to see Shivam’s recommended roadmap and estimated reach.
              </p>
            </div>

            <Button
              onClick={onOpenAudit}
              variant="outline"
              size="sm"
              className="text-xs font-semibold text-slate-800 border-slate-300 hover:border-blue-300 hover:text-blue-700 bg-white"
            >
              <Sparkles className="w-4 h-4 mr-2 text-blue-500" />
              Take Full 4-Step Audit
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Product Category Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Product Category
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'ai', label: '🤖 AI & Generative Tool' },
                    { id: 'saas', label: '💼 B2B SaaS Product' },
                    { id: 'devtool', label: '⚡ DevTool / Open Source' },
                    { id: 'mobile', label: '📱 Mobile / Consumer App' }
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setProductType(cat.id as any)}
                      className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                        productType === cat.id
                          ? 'border-blue-500 bg-blue-50 text-blue-950 ring-1 ring-blue-400'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  2. Launch Preparation Window
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'rush', label: '⚡ 1-2 Weeks (Sprint)' },
                    { id: 'standard', label: '🎯 3-4 Weeks (Optimal)' },
                    { id: 'thorough', label: '🚀 6+ Weeks (Full Ramp)' }
                  ].map(time => (
                    <button
                      key={time.id}
                      onClick={() => setTimeline(time.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        timeline === time.id
                          ? 'border-blue-500 bg-blue-50 text-blue-950 ring-1 ring-blue-400'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Launch Objective */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. Primary North Star
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'ph1', label: '🏆 #1 Badge' },
                    { id: 'mrr', label: '💰 Paying MRR' },
                    { id: 'viral_brand', label: '🔥 𝕏 Virality' }
                  ].map(goal => (
                    <button
                      key={goal.id}
                      onClick={() => setTargetGoal(goal.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        targetGoal === goal.id
                          ? 'border-blue-500 bg-blue-50 text-blue-950 ring-1 ring-blue-400'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {goal.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimated Output Blueprint Card */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-400" />
                    <span className="text-sm font-bold font-display">Target Launch Forecast</span>
                  </div>
                  <span className="text-[11px] font-mono-code text-blue-400 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-800">
                    Calculated by Shivam
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                    <div className="text-[11px] text-slate-400">Target Upvotes</div>
                    <div className="text-lg font-bold text-blue-400 font-display mt-0.5">{estUpvotes}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                    <div className="text-[11px] text-slate-400">Social Reach</div>
                    <div className="text-lg font-bold text-blue-300 font-display mt-0.5">{estImpressions}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700">
                    <div className="text-[11px] text-slate-400">Est. Signups</div>
                    <div className="text-lg font-bold text-emerald-400 font-display mt-0.5">{estSignups}</div>
                  </div>
                </div>

                <div className="mt-5 p-4 rounded-xl bg-slate-800/40 border border-slate-700/80 text-xs">
                  <div className="font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Recommended Strategy Blueprint:
                  </div>
                  <p className="text-slate-200 font-medium leading-relaxed">
                    {recommendedTier}
                  </p>
                </div>

                <div className="mt-6">
                  <Button
                    onClick={onOpenBooking}
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold"
                  >
                    <span>Execute This Plan with Shivam</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
