import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Sparkles, 
  Megaphone, 
  Rocket, 
  Check, 
  ArrowRight, 
  Flame, 
  TrendingUp,
  Clock,
  Shield,
  HelpCircle
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { SERVICES_DATA } from '../data/portfolioData';
import { StaggerContainer, StaggerItem, staggerItemVariants } from './ui/ScrollReveal';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onOpenAudit?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<string>('all');

  const filteredServices = selectedService === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.id === selectedService);

  return (
    <section id="services" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorum ambient background */}
      <div className="absolute top-1/3 left-0 w-96 h-96 ambient-glow pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 ambient-glow-purple pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <StaggerContainer 
          stagger={0.08}
          delay={0.05}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <StaggerItem>
            <Badge variant="blue" className="mb-3">
              SPECIALIZED GROWTH SERVICES
            </Badge>
          </StaggerItem>
          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
              High-Impact Distribution Offerings Crafted for Velocity.
            </h2>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Choose a standalone strategic sprint or combine hunting, social media marketing, and influencer partnerships into an all-in-one viral launch campaign.
            </p>
          </StaggerItem>

          {/* Filter Pills */}
          <StaggerItem>
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
          </StaggerItem>
        </StaggerContainer>

        {/* Services Cards Grid */}
        <StaggerContainer 
          stagger={0.12}
          delay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredServices.map((service) => {
            const isFeatured = service.featured;
            return (
              <StaggerItem
                key={service.id}
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
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
