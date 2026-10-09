import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioSettings } from '../../types/portfolio';

interface AboutSectionProps {
  settings: PortfolioSettings;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ settings }) => {
  return (
    <section id="about" className="scroll-mt-16 py-12 sm:py-16 bg-[#F7F7F7]">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight">
            About
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed mt-2">
            {settings.aboutText}
          </p>
          {settings.productHuntProfileUrl && (
            <div className="mt-4">
              <a
                href={settings.productHuntProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#DA552F] hover:underline underline-offset-4"
              >
                <span>Visit my Product Hunt profile</span>
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
