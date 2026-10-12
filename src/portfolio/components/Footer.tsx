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
    <footer className="bg-[#050505] border-t border-[#30213F] py-6">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#B9B1C9]">
        <span>{ownerName} — Product Hunt Launch Portfolio</span>

        <button
          type="button"
          onClick={onOpenAdmin}
          className="inline-flex items-center gap-1.5 text-[#B9B1C9] hover:text-[#B98AFF] transition-colors cursor-pointer"
        >
          <Lock size={12} aria-hidden="true" />
          <span>{isAuthenticated ? 'Owner Console' : 'Owner Access'}</span>
        </button>
      </div>
    </footer>
  );
};
