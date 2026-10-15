import React from 'react';
import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { NavSectionId } from '../../types/portfolio';
import catMascotLogo from '../../assets/images/cat_mascot_logo_1791537468388.jpg';

interface HeaderProps {
  ownerName: string;
  activeNav: NavSectionId;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: NavSectionId) => void;
  isAuthenticated: boolean;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  ownerName,
  activeNav,
  onNavigate,
  isAuthenticated,
  onOpenAdmin,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-[#08060F]/90 backdrop-blur-md border-b border-[#30213F]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Left side: Minimal personal portfolio name / configurable text logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-[#F8F6FF] hover:text-[#B69AFF] transition-colors whitespace-nowrap shrink-0"
        >
          {ownerName}
        </a>

        {/* Right side: All Launches, Recent Launches, About link, and Cat mascot logo on the far right */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-3.5 sm:gap-7 text-xs sm:text-sm font-medium"
          >
            {(
              [
                { id: 'all-launches', label: 'All Launches' },
                { id: 'recent-launches', label: 'Recent Launches' },
                { id: 'about', label: 'About' },
              ] as { id: NavSectionId; label: string }[]
            ).map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => onNavigate(e, item.id)}
                  className={`relative transition-colors whitespace-nowrap shrink-0 py-1.5 ${
                    isActive
                      ? 'text-[#B69AFF] font-semibold'
                      : 'text-[#B7AEC9] hover:text-[#F8F6FF]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-header-nav-indicator"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-[#7028D8] to-[#8B5CE8] rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Owner-only action button (hidden from public visitors) */}
          {isAuthenticated && (
            <button
              type="button"
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#7028D8] hover:bg-[#5E1EC0] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Plus size={14} aria-hidden="true" />
              <span>Add Launch</span>
            </button>
          )}

          {/* Far right: Clickable Cat Mascot Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Scroll to top of homepage"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#30213F] bg-[#110B20] p-0.5 flex items-center justify-center shrink-0 overflow-hidden hover:scale-105 hover:border-[#7028D8]/60 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7028D8]"
          >
            <img
              src={catMascotLogo}
              alt="Cat mascot logo"
              className="w-full h-full object-contain select-none"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
