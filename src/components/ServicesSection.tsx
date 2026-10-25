import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Rocket, 
  UserCheck, 
  Share2, 
  Megaphone
} from 'lucide-react';
import { Button } from './ui/button';
import { FloatingParticles } from './ui/FloatingParticles';

interface ServicesSectionProps {
  onOpenBooking: () => void;
  onViewService?: (serviceId: string) => void;
  onOpenPortfolio?: () => void;
}

interface CompactServiceCard {
  id: string;
  targetId: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  isFlagship?: boolean;
}

const HOMEPAGE_SERVICES: CompactServiceCard[] = [
  {
    id: 'product-hunt-launch',
    targetId: 'product-hunt-launch',
    title: 'Product Hunt Launch Support',
    category: 'Flagship Launch',
    description: 'Strategic launch planning, product positioning, launch-day coordination, and organic community outreach for technology startups.',
    icon: Rocket,
    isFlagship: true,
  },
  {
    id: 'linkedin-personal-branding',
    targetId: 'linkedin-personal-branding',
    title: 'LinkedIn Personal Branding',
    category: 'Founder Authority',
    description: 'Build founder authority, improve professional positioning, and grow visibility through strategic LinkedIn content.',
    icon: UserCheck,
    isFlagship: false,
  },
  {
    id: 'account-management',
    targetId: 'account-management',
    title: 'LinkedIn & X Account Management',
    category: 'Social Operations',
    description: 'Manage company social accounts with consistent content, product updates, audience engagement, and performance reporting.',
    icon: Share2,
    isFlagship: false,
  },
  {
    id: 'influencer-marketing',
    targetId: 'influencer-marketing',
    title: 'Influencer Marketing',
    category: 'Creator Campaigns',
    description: 'Connect with relevant LinkedIn, X, and Instagram creators to increase product awareness and reach targeted audiences.',
    icon: Megaphone,
    isFlagship: false,
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = React.memo(({ 
  onViewService,
  onOpenPortfolio,
}) => {
  const handlePortfolioNavigation = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenPortfolio) {
      onOpenPortfolio();
    } else {
      window.history.pushState({}, '', '/portfolio');
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const handleServiceClick = (targetId: string) => {
    if (onViewService) {
      onViewService(targetId);
    } else {
      window.location.hash = `#services/${targetId}`;
    }
  };

  const handleSeeAllServices = () => {
    if (onViewService) {
      onViewService('all');
    } else {
      window.location.hash = '#services/all';
    }
  };

  return (
    <section 
      id="services" 
      className="scroll-mt-24 md:scroll-mt-28 py-16 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#111111] border-t border-[#E5E9E5] relative overflow-hidden font-sans z-10"
    >
      {/* Anchor for any existing #product-hunt links to smoothly scroll to this feature */}
      <span id="product-hunt" className="absolute -top-28 block invisible" aria-hidden="true" />

      {/* Subtle Ambient Mint Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-70" />
        <div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(69, 155, 69, 0.08) 0%, rgba(229, 245, 229, 0.3) 50%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Subtle floating particles behind the service cards */}
        <FloatingParticles variant="services" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10">
        
        {/* Section Header with "See All Services" button aligned top-right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2"
        >
          <div className="space-y-2 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#111111] tracking-tight">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-[#555B55] max-w-xl font-normal leading-relaxed">
              Explore our services to launch products, build authority, and grow your brand.
            </p>
          </div>

          <Button
            variant="outline"
            onClick={handleSeeAllServices}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border-[#459B45]/50 bg-[#FFFFFF] hover:bg-[#EAF7EA] text-[#246B32] hover:border-[#246B32] shadow-2xs hover:-translate-y-0.5 transition-all duration-200 cursor-pointer self-start sm:self-auto shrink-0"
          >
            <span>See All Services</span>
            <ArrowRight className="w-4 h-4 text-[#246B32]" />
          </Button>
        </motion.div>

        {/* Compact 4-Card Responsive Grid: 3 on first row, 4th on next row on desktop; 2 on tablet; 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOMEPAGE_SERVICES.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group relative min-h-[250px] sm:min-h-[270px] ${
                  card.isFlagship
                    ? 'bg-gradient-to-br from-[#F3FAF3] via-[#FFFFFF] to-[#E6F5E6] border-2 border-[#2E8B3A] shadow-[0_6px_28px_rgba(46,139,58,0.16)] hover:border-[#1E6B2A] hover:shadow-[0_10px_36px_rgba(30,107,42,0.24)]'
                    : 'bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs hover:border-[#459B45]/60 hover:shadow-sm'
                }`}
              >
                {/* Subtle top indicator for flagship service */}
                {card.isFlagship && (
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#CDECCF]/45 blur-2xl"
                  />
                )}

                <div className="space-y-3.5 relative z-10">
                  {/* Top Row: Small Icon & Compact Category Label */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[#E5F5E5] border border-[#CDECCF] flex items-center justify-center text-[#246B32] shrink-0">
                      <IconComponent className="w-4 h-4 text-[#246B32]" />
                    </div>
                    <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                      card.isFlagship
                        ? 'bg-[#E5F5E5] text-[#246B32] border-[#CDECCF]'
                        : 'bg-[#F7F9F7] text-[#555B55] border-[#E5E9E5]'
                    }`}>
                      {card.category}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#111111] tracking-tight group-hover:text-[#246B32] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Short Description (approx 2–3 lines) */}
                  <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed font-sans line-clamp-3">
                    {card.description}
                  </p>
                </div>

                {/* Card Footer: Flagship has prominent View My Portfolio + Learn More, others have standard Learn More */}
                {card.isFlagship ? (
                  <div className="pt-4 mt-4 border-t border-[#D9EBD9] flex flex-wrap items-center justify-between gap-3 relative z-10">
                    <a
                      href="/portfolio"
                      id="ph-service-view-portfolio-btn"
                      onClick={handlePortfolioNavigation}
                      className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-full text-xs font-bold text-white bg-[#246B32] hover:bg-[#2E853E] shadow-sm hover:shadow-[0_4px_16px_rgba(36,107,50,0.35)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group/btn"
                    >
                      <span>View My Portfolio</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </a>

                    <button
                      type="button"
                      onClick={() => handleServiceClick(card.targetId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] hover:text-[#246B32] transition-colors cursor-pointer py-1"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#246B32] transition-transform duration-200 hover:translate-x-1" />
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 mt-4 border-t border-[#F0F2F0] relative z-10">
                    <button
                      type="button"
                      onClick={() => handleServiceClick(card.targetId)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#111111] group-hover:text-[#246B32] transition-colors cursor-pointer"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#246B32] transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
});

ServicesSection.displayName = 'ServicesSection';
