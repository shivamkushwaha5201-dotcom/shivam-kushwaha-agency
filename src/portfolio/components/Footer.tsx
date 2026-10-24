import React from 'react';
import { Lock } from 'lucide-react';

interface FooterProps {
  ownerName: string;
  isAuthenticated: boolean;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  ownerName,
  isAuthenticated,
  onOpenAdmin,
}) => {
  return (
    <footer className="bg-[#FFFFFF] border-t border-[#E5E9E5] py-6">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#555B55]">
        <span>{ownerName} — Product Hunt Launch Portfolio</span>

        <button
          type="button"
          onClick={onOpenAdmin}
          className="inline-flex items-center gap-1.5 text-[#555B55] hover:text-[#246B32] transition-colors cursor-pointer"
        >
          <Lock size={12} aria-hidden="true" />
          <span>{isAuthenticated ? 'Owner Console' : 'Owner Access'}</span>
        </button>
      </div>
    </footer>
  );
};
