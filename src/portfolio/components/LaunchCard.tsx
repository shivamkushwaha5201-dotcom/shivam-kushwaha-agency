import React, { useState } from 'react';
import { ArrowUpRight, Pencil, Trash2, Award, Trophy } from 'lucide-react';
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
  if (cleaned.toLowerCase().startsWith('n8n')) return 'n8n';
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

  // Determine ranking text and badge
  const rankingNumber =
    typeof launch.ranking === 'number' && !Number.isNaN(launch.ranking)
      ? launch.ranking
      : parseInt(String(launch.ranking || '').replace(/\D/g, ''), 10) || 0;

  const isRankOne =
    rankingNumber === 1 ||
    launch.isRankOne === true ||
    safeName.toLowerCase() === 'zcad ai';

  const rankingBadgeText =
    launch.rankingBadge ||
    (rankingNumber > 0
      ? `#${rankingNumber} Product of the Day`
      : String(launch.ranking || 'Featured Launch'));

  const hasWeekRanking =
    typeof launch.weekRanking === 'number' && !Number.isNaN(launch.weekRanking);
  const safeWeekRanking = hasWeekRanking ? `#${launch.weekRanking} of the Week` : null;

  const hasValidLogo = Boolean(launch.logoUrl && !imageError);

  const handleCardClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button, a')) {
      return;
    }
    window.open(launch.productHuntUrl, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      const target = e.target as HTMLElement;
      if (!target.closest('button, a')) {
        e.preventDefault();
        window.open(launch.productHuntUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <article
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="article"
      aria-label={`${safeName} — ${rankingBadgeText}, ${safeVotes} upvotes on Product Hunt`}
      className={`ph-launch-card group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full transition-all duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#459B45] ${
        isRankOne
          ? 'bg-gradient-to-b from-[#F2FAF2] via-[#FFFFFF] to-[#FFFFFF] border-2 border-[#459B45] shadow-sm hover:border-[#246B32] hover:shadow-lg hover:shadow-[#459B45]/15 hover:-translate-y-1 ring-1 ring-[#459B45]/20'
          : 'bg-[#FFFFFF] border border-[#E5E9E5] shadow-xs hover:border-[#459B45] hover:shadow-md hover:shadow-[#459B45]/10 hover:-translate-y-1'
      }`}
    >
      {/* Top Header Row: Product logo / placeholder + Product Name + Admin Actions */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            {hasValidLogo ? (
              <img
                src={launch.logoUrl}
                alt={`${safeName} thumbnail`}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-12 h-12 rounded-xl object-cover border border-[#E5E9E5] bg-[#F7F9F7] shrink-0"
              />
            ) : (
              <div
                className={`relative w-12 h-12 rounded-xl border flex items-center justify-center shrink-0 select-none shadow-2xs font-mono font-bold text-xs sm:text-sm ${
                  isRankOne
                    ? 'border-[#459B45]/40 bg-[#E5F5E5] text-[#246B32]'
                    : 'border-[#E5E9E5] bg-gradient-to-br from-[#E5F5E5]/70 to-[#F7F9F7] text-[#246B32]'
                }`}
                aria-hidden="true"
              >
                <span>{getInitials(safeName)}</span>
                {/* Clean Product Hunt badge indicator on placeholder */}
                <span
                  className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#DA552F] text-white flex items-center justify-center text-[9px] font-bold shadow-2xs ring-1.5 ring-white"
                  title="Product Hunt Launch"
                >
                  P
                </span>
              </div>
            )}

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <h3
                  title={safeName}
                  className="ph-launch-card-title text-base sm:text-lg font-bold text-[#111111] group-hover:text-[#246B32] tracking-tight leading-snug break-words transition-colors"
                >
                  {safeName}
                </h3>
              </div>
              <span
                title={launch.productHuntUrl}
                className="text-[11px] text-[#555B55] group-hover:text-[#246B32] font-mono truncate block mt-0.5 transition-colors"
              >
                {launch.productHuntUrl.replace(/^https?:\/\/(www\.)?/, '')}
              </span>
            </div>
          </div>

          {/* Owner-only edit & delete controls (never exposed to public visitors) */}
          {isAdmin && (
            <div className="flex items-center gap-1 shrink-0">
              {onEdit && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(launch);
                  }}
                  title={`Edit ${safeName}`}
                  aria-label={`Edit ${safeName}`}
                  className="p-1.5 rounded-md text-[#555B55] hover:text-[#111111] hover:bg-[#F7F9F7] transition-colors cursor-pointer"
                >
                  <Pencil size={14} />
                </button>
              )}
              {onRequestDelete && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRequestDelete(launch);
                  }}
                  title={`Delete ${safeName}`}
                  aria-label={`Delete ${safeName}`}
                  className="p-1.5 rounded-md text-[#555B55] hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                >
                  <Trash2 size={14} />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Ranking Badges: prominently displayed */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-tight transition-colors ${
              isRankOne
                ? 'bg-[#E5F5E5] text-[#246B32] border border-[#459B45]/40 shadow-2xs font-bold'
                : 'bg-[#F7F9F7] text-[#111111] border border-[#E5E9E5]'
            }`}
          >
            {isRankOne ? (
              <Trophy size={13} className="text-[#246B32] shrink-0" aria-hidden="true" />
            ) : (
              <Award size={13} className="text-[#459B45] shrink-0" aria-hidden="true" />
            )}
            <span>{rankingBadgeText}</span>
          </span>

          {safeWeekRanking && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#F7F9F7] text-[#555B55] border border-[#E5E9E5]">
              {safeWeekRanking}
            </span>
          )}
        </div>
      </div>

      {/* Middle Row: Upvote Count displayed clearly */}
      <div className="my-5 py-3 px-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
              isRankOne ? 'bg-[#E5F5E5] text-[#246B32]' : 'bg-[#FFFFFF] text-[#246B32] border border-[#E5E9E5]'
            }`}
            aria-hidden="true"
          >
            ▲
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider font-semibold text-[#555B55] leading-none">
              Community Votes
            </div>
            <div className="text-base sm:text-lg font-bold text-[#111111] font-mono mt-0.5 leading-tight">
              {safeVotes.toLocaleString()} <span className="text-xs font-normal text-[#555B55]">upvotes</span>
            </div>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[11px] font-mono text-[#246B32] bg-[#E5F5E5] px-2 py-0.5 rounded-md font-semibold">
            Product Hunt
          </span>
        </div>
      </div>

      {/* Bottom: "View on Product Hunt ↗" CTA Button */}
      <div>
        <a
          href={launch.productHuntUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={`View ${safeName} on Product Hunt (opens in new tab)`}
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#459B45] ${
            isRankOne
              ? 'text-[#FFFFFF] bg-[#459B45] hover:bg-[#246B32] shadow-sm shadow-[#459B45]/20'
              : 'text-[#FFFFFF] bg-[#459B45] hover:bg-[#246B32]'
          }`}
        >
          <span>View on Product Hunt</span>
          <ArrowUpRight size={15} aria-hidden="true" className="shrink-0" />
        </a>
      </div>
    </article>
  );
};
