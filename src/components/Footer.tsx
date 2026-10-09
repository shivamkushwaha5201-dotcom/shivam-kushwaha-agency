import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, SERVICES_DATA } from '../data/portfolioData';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';
import brandLogoWebp from '../assets/images/brand_logo_opt.webp';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAudit?: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = React.memo(({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-slate-400 pt-16 pb-12 border-t border-[#3B82F6]/15 relative overflow-hidden font-sans z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#181C26]">
          
          {/* Agency Logo & Description (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-[#3B82F6]/40 p-0.5 bg-[#080B12] flex items-center justify-center shrink-0">
                <picture className="w-full h-full block">
                  <source srcSet={brandLogoWebp} type="image/webp" />
                  <img
                    src={brandLogo}
                    alt="AxentAI Labs"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">
                  AxentAI Labs
                </span>
                <span className="block text-[10px] uppercase font-semibold tracking-wider text-slate-400">
                  Digital Growth & Presence Agency
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              We help founders, startups and brands build visibility that actually matters through LinkedIn personal branding, page handling, organic engagement, Product Hunt launches, and curated influencer marketing.
            </p>

            <div className="text-xs text-slate-400">
              Direct founder-to-founder strategic execution.
            </div>
          </div>

          {/* Core Services (Col 6-8) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a 
                    href={`#services/${srv.id}`}
                    className="text-slate-400 hover:text-[#60A5FA] transition-colors"
                  >
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links (Col 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Contact & Social
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </li>
              <li>
                <a 
                  href={CONTACT_INFO.whatsapp} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li className="pt-1">
                <a 
                  href={CONTACT_INFO.agencyLinkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-[#60A5FA] transition-colors"
                >
                  LinkedIn — AxentAI Labs
                </a>
              </li>
              <li>
                <a 
                  href={CONTACT_INFO.xTwitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} AxentAI Labs. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={scrollToTop}
              className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
});
