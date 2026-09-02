import React from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Phone,
  ShieldCheck,
  Award,
  Zap,
  Check
} from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../data/portfolioData';
import shivamAboutPhoto from '../assets/images/Screenshot_2026-09-02-09-30-52-50_99c04817c0de5652397fc8b56c3b3817.jpg';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const highlights = [
    'Founder of AxentAI Labs — leading growth, launch engineering & multi-channel distribution.',
    '185+ Front-page Product Hunt launches with 96.2% top-3 success rate.',
    'Generated over 68M+ organic impressions across LinkedIn, X (Twitter) & Reddit.',
    'Specializing in Product Hunt launches, SMM, founder personal branding, and creator campaigns.',
    'Proven ROI: Helping founders turn public launches into paying customers & investor inbounds.'
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden border-t border-[#E5E5E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Pill, Bold Headline, Bullet Points, and Pill CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF9F6] border border-[#E5E5E1]">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-bold text-[#1A1A1A] tracking-wide uppercase">
                About Me
              </span>
            </div>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1A1A1A] tracking-tight leading-[1.14]">
              I'm Shivam Kushwaha, Founder of <span className="text-[#2563EB]">AxentAI Labs</span> dedicated to crafting high-impact growth and viral distribution for ambitious tech startups.
            </h2>

            <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
              Building great software is only half the battle. If nobody hears about it, even groundbreaking products disappear. I work as an embedded co-pilot for founders—engineering every launch milestone from pre-heat teasers to front-page dominance and long-term organic pipeline growth.
            </p>

            {/* Bullet Points with Blue Accents */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#1A1A1A]/85 font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <Button
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
                className="px-6 py-3 rounded-full border border-[#1A1A1A] bg-white text-[#1A1A1A] text-xs sm:text-sm font-bold hover:bg-[#FAF9F6] transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Headshot with Added Padding and Taller Image Aspect */}
          <div className="lg:col-span-5 relative pt-8 sm:pt-10">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Background Geometric Wireframe Arcs */}
              <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full border border-[#2563EB]/30 pointer-events-none -z-10 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-80 h-80 rounded-full border border-[#1A1A1A]/15 pointer-events-none -z-10" />
              <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-dashed border-[#2563EB]/20 pointer-events-none -z-10" />

              {/* Main Photo Card - Balanced framing with subtle trim top and bottom */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#1A1A1A] bg-[#0A3C42] shadow-2xl shadow-blue-500/5 aspect-[4/5] sm:aspect-[4/5]">
                <img
                  src={shivamAboutPhoto}
                  alt="Shivam Kushwaha - Founder of AxentAI Labs"
                  className="w-full h-full object-cover object-[center_38%] hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Bottom Floating Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E1] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-[#2563EB]/30 p-0.5 bg-white shadow-xs flex items-center justify-center shrink-0">
                      <img
                        src={brandLogo}
                        alt="Logo"
                        className="w-full h-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#1A1A1A]">Shivam Kushwaha</div>
                      <div className="text-[10px] text-[#1A1A1A]/60">Founder — AxentAI Labs</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-2.5 py-1 rounded-full border border-[#2563EB]/20">
                    Top 1% Hunter
                  </span>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-white border border-[#E5E5E1] shadow-lg flex items-center gap-2 text-xs font-bold text-[#1A1A1A] hidden sm:flex">
                <div className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>185+ Launches</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
