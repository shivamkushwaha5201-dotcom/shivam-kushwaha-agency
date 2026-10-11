import React, { useState } from 'react';
import { ArrowUpRight, Pencil, Trash2 } from 'lucide-react';
import { SupportedLaunch } from '../../types/portfolio';

interface LaunchCardProps {
  launch: SupportedLaunch;
  isAdmin?: boolean;
  onEdit?: (launch: SupportedLaunch) => void;
  onRequestDelete?: (launch: SupportedLaunch) => void;
}

function getInitials(name: string): string {
  const cleaned = (name || '').trim();
  if (!cleaned) return 'PH';
  const words = cleaned.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return `${words[0][0]}${words[1][0]}`.toUpperCase();
  }
  return cleaned.slice(0, 2).toUpperCase();
}

export const LaunchCard: React.FC<LaunchCardProps> = ({
  launch,
  isAdmin = false,
  onEdit,
  onRequestDelete,
}) => {
  const [imageError, setImageError] = useState(false);

  const safeName = launch.name?.trim() || 'Untitled Product';
  const safeVotes =
    typeof launch.votes === 'number' && !Number.isNaN(launch.votes)
      ? launch.votes
      : 0;

  const safeRanking =
    typeof launch.ranking === 'number' && !Number.isNaN(launch.ranking)
      ? `#${launch.ranking}`
      : String(launch.ranking || '').startsWith('#')
      ? String(launch.ranking)
      : launch.ranking
      ? `#${launch.ranking}`
      : 'Unranked';

  const hasWeekRanking =
    typeof launch.weekRanking === 'number' && !Number.isNaN(launch.weekRanking);
  const safeWeekRanking = hasWeekRanking ? `#${launch.weekRanking}` : null;

  const hasValidLogo = Boolean(launch.logoUrl && !imageError);

  return (
    <article className="ph-launch-card group bg-white bg-[#111827] border border-[#E5E7EB] rounded-xl p-5 flex flex-col justify-between gap-5 hover:border-[#DA552F]/50 hover:shadow-xs transition-all duration-150 opacity-100">
      {/* Top: Optional product logo + Product name */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5 min-w-0 flex-1">
          {hasValidLogo ? (
            <img
              src={launch.logoUrl}
              alt={`${safeName} logo`}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-11 h-11 rounded-lg object-cover border border-[#E5E7EB] bg-[#F7F7F7] shrink-0"
            />
          ) : (
            <div
              className="w-11 h-11 rounded-lg border border-[#E5E7EB] bg-[#F7F7F7] text-[#1F2937] font-bold text-xs flex items-center justify-center shrink-0 select-none"
              aria-hidden="true"
            >
              {getInitials(safeName)}
            </div>
          )}

          <h3
            title={safeName}
            className="ph-launch-card-title text-base font-semibold text-[#FFFFFF] group-hover:text-[#FFFFFF] group-focus-within:text-[#FFFFFF] tracking-tight leading-snug break-words opacity-100"
          >
            {safeName}
          </h3>
        </div>

        {/* Owner-only edit & delete controls (never exposed to public visitors) */}
        {isAdmin && (
          <div className="flex items-center gap-1 shrink-0">
            {onEdit && (
              <button
                type="button"
                onClick={() => onEdit(launch)}
                title={`Edit ${safeName}`}
                aria-label={`Edit ${safeName}`}
                className="p-1.5 rounded-md text-[#9CA3AF] hover:text-[#FFFFFF] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Pencil size={14} />
              </button>
            )}
            {onRequestDelete && (
              <button
                type="button"
                onClick={() => onRequestDelete(launch)}
                title={`Delete ${safeName}`}
                aria-label={`Delete ${safeName}`}
                className="p-1.5 rounded-md text-[#9CA3AF] hover:text-[#DA552F] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Trash2 size={14} />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Middle: Total votes and Final ranking(s) displayed as separate metrics */}
      <div
        className={`ph-launch-card-metrics grid ${
          safeWeekRanking ? 'grid-cols-3' : 'grid-cols-2'
        } gap-3 py-3 px-3.5 rounded-lg bg-[#F7F7F7] border border-[#E5E7EB] text-[#1F2937] opacity-100`}
      >
        <div className="min-w-0">
          <div className="ph-launch-card-label text-xs font-medium text-[#6B7280] leading-tight opacity-100">
            Votes
          </div>
          <div className="ph-launch-card-value text-base font-bold text-[#1F2937] font-mono-tabular mt-0.5 flex items-center gap-1.5 leading-tight opacity-100">
            <span
              className="text-[11px] text-[#DA552F] leading-none shrink-0"
              aria-hidden="true"
            >
              ▲
            </span>
            <span className="text-[#1F2937]">{safeVotes.toLocaleString()}</span>
          </div>
        </div>

        <div className="border-l border-[#E5E7EB] pl-3 min-w-0">
          <div className="ph-launch-card-label text-xs font-medium text-[#6B7280] leading-tight opacity-100">
            {safeWeekRanking ? 'Day Rank' : 'Ranking'}
          </div>
          <div className="ph-launch-card-value text-base font-bold text-[#1F2937] font-mono-tabular mt-0.5 leading-tight opacity-100">
            {safeRanking}
          </div>
        </div>

        {safeWeekRanking && (
          <div className="border-l border-[#E5E7EB] pl-3 min-w-0">
            <div className="ph-launch-card-label text-xs font-medium text-[#6B7280] leading-tight opacity-100">
              Week Rank
            </div>
            <div className="ph-launch-card-value text-base font-bold text-[#1F2937] font-mono-tabular mt-0.5 leading-tight opacity-100">
              {safeWeekRanking}
            </div>
          </div>
        )}
      </div>

      {/* Bottom: Primary Product Hunt red button labeled "View on Product Hunt" */}
      <div>
        <a
          href={launch.productHuntUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#FFFFFF] bg-[#DA552F] hover:bg-[#C44623] transition-colors whitespace-nowrap"
        >
          <span>View on Product Hunt</span>
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
};
