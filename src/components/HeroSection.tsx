import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Phone
} from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../data/portfolioData';
import { TrustedByMarquee } from './TrustedByMarquee';
import { StaggerContainer, StaggerItem, staggerItemScaleVariants } from './ui/ScrollReveal';

interface HeroSectionProps {
  onOpenAudit: () => void;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero 2-Column Layout */}
        <StaggerContainer 
          stagger={0.1}
          delay={0.05}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          
          {/* Left Column: Bold Headline, Subtitle, Testimonial & Pill CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Pill status */}
            <StaggerItem>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E1] shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
                </span>
                <span className="text-xs font-bold text-[#1A1A1A] tracking-wide">
                  AxentAI Labs
                </span>
                <span className="text-[#1A1A1A]/30">•</span>
                <span className="text-xs font-semibold text-[#2563EB]">
                  Launch & Distribution Agency
                </span>
              </div>
            </StaggerItem>

            {/* Main Name & Title */}
            <StaggerItem>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-[#1A1A1A] tracking-tight leading-[1.08]">
                AxentAI Labs<span className="text-[#2563EB]">.</span>
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-[#1A1A1A]/80 leading-snug">
                Growth & Multi-Channel Distribution Agency helping tech startups achieve global reach.
              </p>
            </StaggerItem>

            {/* Description Paragraph */}
            <StaggerItem>
              <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans max-w-xl">
                We specialize in high-velocity <strong className="text-[#1A1A1A] font-semibold">Product Hunt Launches</strong>, viral organic <strong className="text-[#1A1A1A] font-semibold">LinkedIn & X (Twitter) SMM</strong>, <strong className="text-[#1A1A1A] font-semibold">Reddit Marketing</strong>, and <strong className="text-[#1A1A1A] font-semibold">Tech Influencer Syndication</strong>.
              </p>
            </StaggerItem>

            {/* Action Buttons: Services & Book a Call (Blue Pill) */}
            <StaggerItem>
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#services"
                  className="px-6 py-3 rounded-full border border-[#1A1A1A] bg-white text-[#1A1A1A] text-xs sm:text-sm font-bold hover:bg-[#FAF9F6] transition-all"
                >
                  Explore Services
                </a>

                <Button
                  id="hero-primary-cta"
                  size="lg"
                  onClick={onOpenBooking}
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-7 py-3 rounded-full shadow-lg shadow-[#2563EB]/25 group"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full border border-[#E5E5E1] bg-white text-[#1A1A1A]/80 text-xs sm:text-sm font-semibold hover:border-[#2563EB] hover:text-[#2563EB] transition-all flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </StaggerItem>

          </div>

          {/* Right Column: "WORK WITH US" Badge Stamp & Starburst Graphic */}
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end py-4">
            <StaggerItem variants={staggerItemScaleVariants}>
              <div className="flex items-center gap-6">
                
                {/* Starburst 8-pointed geometric line icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center text-[#1A1A1A]/60 hover:text-[#2563EB] hover:border-[#2563EB] transition-colors">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" />
                  </svg>
                </div>

                {/* Large Circular "WORK WITH US" rotating badge stamp */}
                <div className="relative group cursor-pointer" onClick={onOpenBooking}>
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-[#2563EB] p-1.5 shadow-xl shadow-[#2563EB]/30 flex items-center justify-center relative overflow-hidden">
                    
                    {/* Rotating Curved Text */}
                    <div className="absolute inset-0 flex items-center justify-center animate-spin" style={{ animationDuration: '14s' }}>
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <path
                          id="circlePath"
                          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                          fill="transparent"
                        />
                        <text className="text-[9.5px] font-black uppercase tracking-[0.28em] fill-white">
                          <textPath href="#circlePath" startOffset="0%">
                            • AXENT AI LABS • LAUNCH WITH US 
                          </textPath>
                        </text>
                      </svg>
                    </div>

                    {/* Inner White Disk */}
                    <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-inner z-10 group-hover:scale-105 transition-transform">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]">
                        WORK
                      </span>
                      <span className="text-[11px] font-black uppercase text-[#2563EB]">
                        WITH US
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </StaggerItem>
          </div>

        </StaggerContainer>

        {/* 'Trusted By' Marquee Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <TrustedByMarquee />
        </motion.div>

      </div>
    </section>
  );
};
