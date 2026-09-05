import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Search, 
  Rocket, 
  Sparkles, 
  ArrowUpRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import { Button } from './ui/button';
import { SUPPORTED_LAUNCHES } from '../data/portfolioData';
import { SupportedLaunch } from '../types';
import { StaggerContainer, StaggerItem } from './ui/ScrollReveal';

interface SupportedLaunchesSectionProps {
  onOpenBooking: () => void;
}

const CATEGORIES = [
  'All',
  'AI & Machine Learning',
  'Developer Tools',
  'SaaS & B2B',
  'Productivity & Design',
  'Infrastructure & Web3'
] as const;

export const SupportedLaunchesSection: React.FC<SupportedLaunchesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredLaunches = useMemo(() => {
    return SUPPORTED_LAUNCHES.filter((launch) => {
      const matchesCategory =
        selectedCategory === 'All' || launch.category === selectedCategory;
      const matchesSearch =
        launch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        launch.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        launch.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="launches" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#E5E5E1] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <StaggerContainer 
          stagger={0.08}
          delay={0.05}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-16"
        >
          <StaggerItem>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E1] shadow-2xs">
              {/* Product Hunt iconic 'P' logo mark */}
              <div className="w-4 h-4 rounded-full bg-[#FF6154] text-white flex items-center justify-center text-[10px] font-black">
                P
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                Supported Product Hunt Launches
              </span>
              <span className="text-[10px] font-bold text-[#2563EB] bg-blue-50 px-2 py-0.5 rounded-full">
                {SUPPORTED_LAUNCHES.length} Products
              </span>
            </div>
          </StaggerItem>

          <StaggerItem>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1A1A1A] tracking-tight">
              Real Launches We’ve <span className="text-[#2563EB]">Supported</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 leading-relaxed font-sans">
              Explore products, developer tools, AI platforms, and SaaS companies supported by AxentAI Labs for launch preparation, community momentum, and distribution.
            </p>
          </StaggerItem>
        </StaggerContainer>

        {/* Filter and Search Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 space-y-4"
        >
          
          {/* Top Row: Category Pills & Search Input */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat;
                const count = cat === 'All' 
                  ? SUPPORTED_LAUNCHES.length 
                  : SUPPORTED_LAUNCHES.filter(l => l.category === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 ${
                      isSelected
                        ? 'bg-[#1A1A1A] text-white shadow-xs'
                        : 'bg-white border border-[#E5E5E1] text-[#1A1A1A]/70 hover:text-[#1A1A1A] hover:border-[#1A1A1A]/30'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#FAF9F6] text-[#1A1A1A]/50'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1A1A1A]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search launches..."
                className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-[#E5E5E1] text-xs sm:text-sm text-[#1A1A1A] placeholder:text-[#1A1A1A]/40 focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/10 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#1A1A1A]/40 hover:text-[#1A1A1A]"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </motion.div>

        {/* Launches Grid */}
        {filteredLaunches.length > 0 ? (
          <StaggerContainer 
            stagger={0.05}
            delay={0.05}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredLaunches.map((launch) => (
              <StaggerItem
                key={launch.id}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-white border border-[#E5E5E1] shadow-2xs hover:border-[#2563EB] hover:shadow-md transition-all duration-200 relative"
              >
                <div>
                  {/* Top Meta Row */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-0.5 rounded-full">
                      {launch.category}
                    </span>

                    {/* Product Hunt Brand Tag */}
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FF6154] bg-[#FF6154]/10 px-2 py-0.5 rounded-full shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6154]" />
                      Product Hunt
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="text-base font-bold text-[#1A1A1A] group-hover:text-[#2563EB] transition-colors flex items-center gap-1.5">
                    <span>{launch.name}</span>
                  </h3>

                  {/* Product Tagline / Description */}
                  <p className="text-xs text-[#1A1A1A]/70 mt-1.5 leading-relaxed line-clamp-2">
                    {launch.tagline}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-4 mt-4 border-t border-[#E5E5E1]/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#1A1A1A]/50 group-hover:text-[#2563EB] transition-colors">
                    View on Product Hunt
                  </span>

                  <a
                    href={launch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FAF9F6] border border-[#E5E5E1] text-[#1A1A1A]/70 group-hover:bg-[#FF6154] group-hover:text-white group-hover:border-[#FF6154] transition-all shrink-0"
                    title={`View ${launch.name} on Product Hunt`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white rounded-3xl border border-[#E5E5E1] max-w-md mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#E5E5E1] flex items-center justify-center mx-auto text-[#1A1A1A]/40 mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-[#1A1A1A]">No launches found</h4>
            <p className="text-xs text-[#1A1A1A]/60 mt-1 mb-4">
              We couldn’t find any product matching "{searchQuery}" in this category.
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Bottom CTA Banner */}
        <StaggerContainer 
          stagger={0.1}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#1A1A1A] to-[#262626] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-black/5"
        >
          <StaggerItem className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-[#FF6154] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready For Launch Day?</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-display">
              Preparing Your Next Product Hunt Launch?
            </h3>
            <p className="text-xs sm:text-sm text-white/70 max-w-xl">
              We coordinate launch-day timing, war room monitoring, maker engagement, and multi-channel amplification on X and LinkedIn.
            </p>
          </StaggerItem>

          <StaggerItem className="flex items-center gap-3 shrink-0">
            <Button
              onClick={onOpenBooking}
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full shadow-lg shadow-[#2563EB]/25"
            >
              <span>Book a Launch Call</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5" />
            </Button>
          </StaggerItem>
        </StaggerContainer>

      </div>
    </section>
  );
};
