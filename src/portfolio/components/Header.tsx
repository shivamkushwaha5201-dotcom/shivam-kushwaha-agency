import React from 'react';
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
    <header className="sticky top-0 z-30 bg-white border-b border-[#E5E7EB]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Left side: Minimal personal portfolio name / configurable text logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-base sm:text-lg font-bold tracking-tight text-[#1F2937] hover:text-[#DA552F] transition-colors whitespace-nowrap shrink-0"
        >
          {ownerName}
        </a>

        {/* Right side: All Launches, Recent Launches, About link, and Cat mascot logo on the far right */}
        <div className="flex items-center gap-3 sm:gap-6">
          <nav
            aria-label="Main Navigation"
            className="flex items-center gap-3.5 sm:gap-7 text-xs sm:text-sm font-medium"
          >
            <a
              href="#all-launches"
              onClick={(e) => onNavigate(e, 'all-launches')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeNav === 'all-launches'
                  ? 'text-[#DA552F] border-[#DA552F]'
                  : 'text-[#6B7280] border-transparent hover:text-[#DA552F]'
              }`}
            >
              All Launches
            </a>
            <a
              href="#recent-launches"
              onClick={(e) => onNavigate(e, 'recent-launches')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeNav === 'recent-launches'
                  ? 'text-[#DA552F] border-[#DA552F]'
                  : 'text-[#6B7280] border-transparent hover:text-[#DA552F]'
              }`}
            >
              Recent Launches
            </a>
            <a
              href="#about"
              onClick={(e) => onNavigate(e, 'about')}
              className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                activeNav === 'about'
                  ? 'text-[#DA552F] border-[#DA552F]'
                  : 'text-[#6B7280] border-transparent hover:text-[#DA552F]'
              }`}
            >
              About
            </a>
          </nav>

          {/* Owner-only action button (hidden from public visitors) */}
          {isAuthenticated && (
            <button
              type="button"
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#DA552F] hover:bg-[#C44623] transition-colors cursor-pointer whitespace-nowrap shrink-0"
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
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#E5E7EB] bg-white p-0.5 flex items-center justify-center shrink-0 overflow-hidden hover:scale-105 hover:border-[#DA552F]/40 transition-transform duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#DA552F]"
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
