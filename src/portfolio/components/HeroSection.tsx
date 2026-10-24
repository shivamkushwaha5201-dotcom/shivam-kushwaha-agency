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
    <section className="bg-[#FFFFFF] border-b border-[#E5E9E5] py-12 sm:py-16">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#111111] tracking-tight text-balance">
            Product Hunt Launches I’ve <span className="text-[#246B32]">Supported</span>
          </h1>
          <p className="text-sm sm:text-base text-[#555B55] leading-relaxed mt-3">
            A collection of products I’ve helped during their Product Hunt launches, along with their final votes and rankings.
          </p>
          <div className="mt-6">
            <a
              href="#all-launches"
              onClick={(e) => onExploreClick(e, 'all-launches')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#FFFFFF] bg-[#459B45] hover:bg-[#246B32] shadow-sm shadow-[#459B45]/20 transition-colors whitespace-nowrap cursor-pointer"
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
