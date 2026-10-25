import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  UserCheck, 
  Share2, 
  Layers, 
  Megaphone, 
  Sparkles, 
  Globe, 
  Rocket,
  ArrowUpRight
} from 'lucide-react';
import { Button } from './ui/button';
import { SERVICES_DATA } from '../data/portfolioData';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onViewService?: (serviceId: string) => void;
  onOpenPortfolio?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ 
  onOpenBooking,
  onViewService,
  onOpenPortfolio,
}) => {
  const productHuntService = SERVICES_DATA.find(s => s.id === 'product-hunt-launch');

  const handleServiceClick = (serviceId: string) => {
    if (onViewService) {
      onViewService(serviceId);
    } else {
      window.location.hash = `#services/${serviceId}`;
    }
  };

  const handlePortfolioNavigation = (e: React.MouseEvent) => {
    if (
      !e.metaKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      !e.altKey &&
      e.button === 0
    ) {
      e.preventDefault();
      if (onOpenPortfolio) {
        onOpenPortfolio();
      } else {
        window.history.pushState({}, '', '/portfolio');
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    }
  };

  return (
    <section 
      id="services" 
      className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#F7F9F7]/70 backdrop-blur-[1.5px] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Soft Ambient Mint Glow with Continuous Breathing Motion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-75"
        />
        {/* Gentle Ambient Glow Behind Service Clusters */}
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full animate-ambient-float-3 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(69, 155, 69, 0.14) 0%, rgba(229, 245, 229, 0.42) 45%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl space-y-3.5 text-left relative z-20"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#246B32] uppercase">
            <span>FULL GROWTH SERVICE PORTFOLIO</span>
            <span aria-hidden="true">·</span>
            <span>STRATEGY &amp; DISTRIBUTION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-[#111111] tracking-[-0.03em] uppercase leading-tight">
            GROWTH SERVICES <br className="hidden sm:inline" />
            <span className="text-[#248A3D]">BEYOND A SINGLE LAUNCH</span>
          </h2>

          <p className="text-base sm:text-lg text-[#555B55] leading-relaxed font-sans max-w-2xl font-normal">
            AxentAI Labs helps startups launch products, build founder authority, manage social media presence, collaborate with creators, and reach the right audiences through strategic, organic-first marketing.
          </p>
        </motion.div>

        {/* 1. Flagship Spotlight Card: Product Hunt Launch Support (65% Strategic Weight) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-gradient-to-br from-[#FFFFFF] via-[#F9FCF9] to-[#FFFFFF] border-2 border-[#CDECCF] p-7 sm:p-9 shadow-sm relative overflow-hidden"
        >
          {/* Faint mint radial accent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#E5F5E5]/60 blur-3xl"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="space-y-4 max-w-2xl">
              {/* Top metadata row without pill capsules */}
              <div className="flex items-center gap-2.5 text-xs text-[#246B32] font-mono font-semibold">
                <Rocket className="w-4 h-4 text-[#246B32]" />
                <span className="uppercase tracking-wider">01 · FLAGSHIP SERVICE</span>
                <span aria-hidden="true">·</span>
                <span>~65% BUSINESS FOCUS</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111111] tracking-tight">
                  Product Hunt Launch Strategy &amp; Support
                </h3>
                <p className="mt-1 text-sm font-medium text-[#246B32]">
                  Refine positioning, prepare launch assets, coordinate launch day, and build a strategic distribution plan.
                </p>
              </div>

              <p className="text-sm text-[#555B55] leading-relaxed font-sans">
                A successful launch takes more than publishing a product page. We help founders refine their positioning, prepare launch assets, coordinate launch-day communication, connect with relevant communities, and build a thoughtful distribution plan.
              </p>

              {/* Compact scannable deliverables */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-[#222222]">
                {[
                  'Pre-launch strategy & positioning',
                  'Product page & tagline feedback',
                  'Launch asset planning',
                  'Launch-day coordination',
                  'Cross-platform distribution',
                  'Post-launch review'
                ].map((item, dIdx) => (
                  <span
                    key={dIdx}
                    className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#E5E9E5] px-3 py-1.5 rounded-xl shadow-2xs font-medium"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Column: Highlighted "View Launch Portfolio" + Plan Your Launch */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0 pt-2 lg:pt-0">
              {/* Highlighted "View Launch Portfolio" Link */}
              <a
                href="/portfolio"
                id="services-view-launch-portfolio-btn"
                onClick={handlePortfolioNavigation}
                className="portfolio-highlight-glow inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#459B45] bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap group shadow-xs"
              >
                <span className="relative flex h-2 w-2 mr-0.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#459B45] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#246B32]" />
                </span>
                <span>View Launch Portfolio</span>
                <ArrowRight className="w-4 h-4 text-[#246B32] transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <Button
                size="sm"
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-[#246B32] to-[#459B45] hover:from-[#1E5B2A] hover:to-[#388538] text-white text-xs font-semibold px-6 py-3 rounded-full border border-[#459B45]/30 shadow-xs hover:shadow-md transition-all cursor-pointer justify-center"
              >
                <span>Plan Your Product Hunt Launch</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>

              <button
                type="button"
                onClick={() => handleServiceClick('product-hunt-launch')}
                className="text-xs text-[#555B55] hover:text-[#246B32] font-semibold underline underline-offset-4 cursor-pointer pt-1"
              >
                Full Service Specifications →
              </button>
            </div>
          </div>
        </motion.div>

        {/* 2. CLUSTER A: Founder Authority & Executive Positioning (Asymmetrical Split) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#111111] uppercase pb-1 border-b border-[#E5E9E5]">
            <UserCheck className="w-4 h-4 text-[#246B32]" />
            <span>02 · FOUNDER AUTHORITY &amp; EXECUTIVE POSITIONING</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Main Spotlight: LinkedIn Personal Branding (7 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#459B45]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#555B55]">
                  <span className="font-mono text-xs font-bold text-[#246B32]">SERVICE 02A</span>
                  <span>Founder Positioning</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
                    LinkedIn Personal Branding &amp; Founder Positioning
                  </h3>
                  <p className="mt-1 text-sm text-[#246B32] font-medium">
                    Turn founder experience into executive authority, trust, and inbound opportunities.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                  Help founders and executives build credibility through strategic positioning, content planning, thought leadership, and consistent professional visibility. We distill your domain insights into high-signal perspectives.
                </p>

                {/* Deliverables */}
                <div className="pt-2 border-t border-[#F0F2F0] space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Core Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#222222]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                      <span>Founder voice &amp; thesis discovery</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                      <span>Strategic profile optimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                      <span>Weekly high-signal essay roadmap</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                      <span>Active executive network engagement</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F2F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleServiceClick('linkedin-personal-branding')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#246B32]" />
                </button>
                <Button
                  size="sm"
                  onClick={onOpenBooking}
                  className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-4 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                >
                  Discuss Founder Branding
                </Button>
              </div>
            </motion.div>

            {/* Complementary Card: LinkedIn Company Page Management (5 Cols) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#459B45]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#555B55]">
                  <span className="font-mono text-xs font-bold text-[#246B32]">SERVICE 02B</span>
                  <span>Company Presence</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
                    LinkedIn Company Page Management
                  </h3>
                  <p className="mt-1 text-sm text-[#246B32] font-medium">
                    Consistent B2B storytelling, product updates, and brand credibility.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                  Manage company page content, publishing schedules, brand messaging, audience engagement, and organic visibility so your brand looks established.
                </p>

                {/* Deliverables */}
                <div className="pt-2 border-t border-[#F0F2F0] space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Core Deliverables
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#222222]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                      <span>Editorial calendar &amp; publication rhythm</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                      <span>Product feature spotlights &amp; hiring announcements</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                      <span>Follower growth &amp; engagement reporting</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F2F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleServiceClick('linkedin-page-handling')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#246B32]" />
                </button>
                <Button
                  size="sm"
                  onClick={onOpenBooking}
                  className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-4 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                >
                  Discuss Page
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 3. CLUSTER B: Content Operations & Multi-Channel Distribution (Editorial 2-Column) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#111111] uppercase pb-1 border-b border-[#E5E9E5]">
            <Layers className="w-4 h-4 text-[#246B32]" />
            <span>03 · CONTENT OPERATIONS &amp; ORGANIC DISTRIBUTION</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Social Media Management */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#459B45]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#555B55]">
                  <span className="font-mono text-xs font-bold text-[#246B32]">SERVICE 03A</span>
                  <span>Content Strategy</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
                    Social Media Management &amp; Content Strategy
                  </h3>
                  <p className="mt-1 text-sm text-[#246B32] font-medium">
                    Build a consistent social presence with platform-specific content and active community touchpoints.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                  Build a consistent social presence through content strategy, platform-specific publishing, community engagement, and performance reviews. We maintain your brand voice while founders focus on building product.
                </p>

                <div className="pt-2 border-t border-[#F0F2F0] space-y-1.5 text-xs text-[#222222]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Key Deliverables
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Multi-platform editorial strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Visual briefs &amp; interactive product demos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Community moderation &amp; audience engagement</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F2F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleServiceClick('social-media-management')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#246B32]" />
                </button>
                <Button
                  size="sm"
                  onClick={onOpenBooking}
                  className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-4 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                >
                  Discuss Content
                </Button>
              </div>
            </motion.div>

            {/* X (Twitter) Growth */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#459B45]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#555B55]">
                  <span className="font-mono text-xs font-bold text-[#246B32]">SERVICE 03B</span>
                  <span>Build In Public</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
                    X (Twitter) Growth &amp; Distribution
                  </h3>
                  <p className="mt-1 text-sm text-[#246B32] font-medium">
                    Engaging build-in-public threads, launch announcements, and tech community dialogue.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                  Reach early adopters, tech builders, and software engineers through high-velocity thread design, interactive demo clips, and meaningful ecosystem engagement that turns followers into trial users.
                </p>

                <div className="pt-2 border-t border-[#F0F2F0] space-y-1.5 text-xs text-[#222222]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Key Deliverables
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Build-in-public hook &amp; thread writing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Launch-day countdown syndication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Tech niche influencer interaction</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F2F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleServiceClick('x-growth-distribution')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#246B32]" />
                </button>
                <Button
                  size="sm"
                  onClick={onOpenBooking}
                  className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-4 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                >
                  Discuss X Growth
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

        {/* 4. CLUSTER C: Creator Partnerships & Digital Presence */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#111111] uppercase pb-1 border-b border-[#E5E9E5]">
            <Megaphone className="w-4 h-4 text-[#246B32]" />
            <span>04 · CREATOR PARTNERSHIPS &amp; DIGITAL PRESENCE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Influencer Marketing */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#459B45]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#555B55]">
                  <span className="font-mono text-xs font-bold text-[#246B32]">SERVICE 04A</span>
                  <span>Creator Outreach</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
                    Influencer Marketing &amp; Creator Partnerships
                  </h3>
                  <p className="mt-1 text-sm text-[#246B32] font-medium">
                    Vetted collaborations with niche tech creators who test and advocate your product.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                  Connect relevant brands with creators and niche influencers who can showcase products to engaged software engineers and decision-makers without generic sponsored spam.
                </p>

                <div className="pt-2 border-t border-[#F0F2F0] space-y-1.5 text-xs text-[#222222]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Key Deliverables
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Niche creator discovery &amp; authenticity vetting</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Campaign brief &amp; demo angle alignment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Deliverable tracking &amp; referral performance</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F2F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleServiceClick('influencer-marketing')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#246B32]" />
                </button>
                <Button
                  size="sm"
                  onClick={onOpenBooking}
                  className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-4 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                >
                  Discuss Creators
                </Button>
              </div>
            </motion.div>

            {/* Website Development */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[#FFFFFF] border border-[#E5E9E5] p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#459B45]/60 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#555B55]">
                  <span className="font-mono text-xs font-bold text-[#246B32]">SERVICE 04B</span>
                  <span>Digital Presence</span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#111111] tracking-tight">
                    Website Development &amp; Digital Presence
                  </h3>
                  <p className="mt-1 text-sm text-[#246B32] font-medium">
                    Clean, high-performance websites engineered for credibility, conversion, and launch day.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans">
                  Design and develop modern landing pages, digital portfolios, and conversion-focused web presences that convert launch visitors into paying customers.
                </p>

                <div className="pt-2 border-t border-[#F0F2F0] space-y-1.5 text-xs text-[#222222]">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#111111] font-semibold">
                    Key Deliverables
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Conversion-engineered architecture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Fast responsive frontend implementation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#246B32] shrink-0" />
                    <span>Brand identity &amp; typography integration</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F0F2F0] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleServiceClick('website-development')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#246B32]" />
                </button>
                <Button
                  size="sm"
                  onClick={onOpenBooking}
                  className="bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] text-xs font-semibold px-4 py-2 rounded-full border border-[#CDECCF] hover:border-[#459B45] shadow-2xs transition-all cursor-pointer"
                >
                  Discuss Website
                </Button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
