import React from 'react';

interface PartnerCompany {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
}

const PARTNER_COMPANIES: PartnerCompany[] = [
  {
    id: 'huddle01',
    name: 'Huddle01 Cloud',
    category: 'Real-Time RTC',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    )
  },
  {
    id: 'chronicle',
    name: 'Chronicle',
    category: 'Interactive Presentations',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="8" height="8" x="2" y="2" rx="2" />
        <rect width="8" height="8" x="14" y="2" rx="2" />
        <rect width="8" height="8" x="2" y="14" rx="2" />
        <rect width="8" height="8" x="14" y="14" rx="2" />
      </svg>
    )
  },
  {
    id: 'supernova',
    name: 'Supernova AI',
    category: 'Autonomous Agents',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  },
  {
    id: 'openui',
    name: 'OpenUI',
    category: 'UI Prototyping',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    id: 'olostep',
    name: 'Olostep',
    category: 'Scraping API for AI',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </svg>
    )
  },
  {
    id: 'enia',
    name: 'Enia Code',
    category: 'AI Developer Tools',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    )
  },
  {
    id: 'outify',
    name: 'Outify',
    category: 'Outbound Pipeline',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    )
  },
  {
    id: 'nativebridge',
    name: 'NativeBridge',
    category: 'Cross-Platform SDK',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" y1="22" x2="12" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
      </svg>
    )
  },
  {
    id: 'ito',
    name: 'Ito AI',
    category: 'Code Review Runtime',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 9 10-5 10 5-10 5Z" />
        <path d="m2 14 10 5 10-5" />
        <path d="m2 19 10 5 10-5" />
      </svg>
    )
  },
  {
    id: 'clears',
    name: 'Clears',
    category: 'Focus & Productivity',
    icon: (
      <svg className="w-5 h-5 text-[#2563EB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
];

export const TrustedByMarquee: React.FC = () => {
  // Seamless loop with doubled list
  const displayPartners = [...PARTNER_COMPANIES, ...PARTNER_COMPANIES];

  return (
    <div className="mt-16 pt-10 border-t border-[#E5E5E1]">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5E5E1] shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A]/70">
            Trusted by Ambitious Tech Teams & Ecosystem Partners
          </span>
        </div>
      </div>

      {/* Marquee Track Container with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Left Fade Mask */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10" />

        {/* Right Fade Mask */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10" />

        {/* Continuous Scrolling Row */}
        <div className="animate-marquee flex items-center gap-4 sm:gap-6">
          {displayPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#E5E5E1] shadow-2xs hover:border-[#2563EB] hover:shadow-sm transition-all shrink-0 cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-[#FAF9F6] border border-[#E5E5E1] flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-blue-50 transition-all">
                {partner.icon}
              </div>
              <div className="text-left">
                <div className="text-xs sm:text-sm font-bold text-[#1A1A1A] group-hover:text-[#2563EB] transition-colors leading-tight">
                  {partner.name}
                </div>
                <div className="text-[10px] text-[#1A1A1A]/50 font-medium tracking-wide">
                  {partner.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
