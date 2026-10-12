import React from 'react';
import { ArrowDown } from 'lucide-react';
import { NavSectionId } from '../../types/portfolio';

interface HeroSectionProps {
  onExploreClick: (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: NavSectionId
  ) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="bg-gradient-to-b from-[#050505] via-[#0B0812] to-[#050505] border-b border-[#30213F] py-12 sm:py-16">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#F8F7FC] tracking-tight text-balance">
            Product Hunt Launches I’ve <span className="text-[#B98AFF]">Supported</span>
          </h1>
          <p className="text-sm sm:text-base text-[#B9B1C9] leading-relaxed mt-3">
            A collection of products I’ve helped during their Product Hunt launches, along with their final votes and rankings.
          </p>
          <div className="mt-6">
            <a
              href="#all-launches"
              onClick={(e) => onExploreClick(e, 'all-launches')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#F8F7FC] bg-[#7028D8] hover:bg-[#5E1EC0] shadow-sm shadow-[#7028D8]/30 transition-colors whitespace-nowrap"
            >
              <span>Explore Launches</span>
              <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
