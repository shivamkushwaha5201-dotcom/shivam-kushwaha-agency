import React from 'react';
import { Loader2, Rocket, Sparkles } from 'lucide-react';
import { SupportedLaunch } from '../../types/portfolio';
import { RECENT_PRODUCT_HUNT_LAUNCHES } from '../../data/portfolioData';
import { LaunchCard } from './LaunchCard';

interface RecentLaunchesSectionProps {
  recentLaunches?: SupportedLaunch[];
  pendingConfirmationLaunches?: SupportedLaunch[];
  isLoading?: boolean;
  isAdmin?: boolean;
  onEdit?: (launch: SupportedLaunch) => void;
  onRequestDelete?: (launch: SupportedLaunch) => void;
}

export const RecentLaunchesSection: React.FC<RecentLaunchesSectionProps> = ({
  recentLaunches = [],
  pendingConfirmationLaunches = [],
  isLoading = false,
  isAdmin = false,
  onEdit,
  onRequestDelete,
}) => {
  // Combines the 5 real Recent Product Hunt Launches with any dynamic additions from the API or admin
  const displayedRecentLaunches = React.useMemo(() => {
    const map = new Map<string, SupportedLaunch>();

    // 1. Seed with the 5 verified recent launches
    for (const item of RECENT_PRODUCT_HUNT_LAUNCHES) {
      map.set(item.id, item);
    }

    // 2. Add or update from props
    for (const item of recentLaunches) {
      map.set(item.id, {
        ...map.get(item.id),
        ...item,
      });
    }

    for (const item of pendingConfirmationLaunches) {
      if (!map.has(item.id)) {
        map.set(item.id, item);
      }
    }

    return Array.from(map.values());
  }, [recentLaunches, pendingConfirmationLaunches]);

  return (
    <section
      id="recent-launches"
      className="scroll-mt-16 py-12 sm:py-16 md:py-20 bg-[#FFFFFF] border-b border-[#E5E9E5] relative"
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#246B32] uppercase tracking-wider mb-2">
              <Rocket size={14} className="text-[#459B45]" />
              <span>Verified Track Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] tracking-tight">
              Recent Product Hunt Launches
            </h2>
            <p className="text-sm sm:text-base text-[#555B55] mt-1.5 max-w-2xl leading-relaxed">
              Real technology startups supported with strategic positioning, organic community amplification, and verified Product Hunt rankings.
            </p>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E5F5E5] text-[#246B32] text-xs font-semibold shrink-0 self-start sm:self-auto border border-[#459B45]/20">
            <Sparkles size={13} className="text-[#459B45]" />
            <span>{displayedRecentLaunches.length} Recent Launches</span>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-[#F7F9F7] border border-[#E5E9E5] rounded-2xl p-16 flex flex-col items-center justify-center gap-3 text-center"
          >
            <Loader2 size={24} className="animate-spin text-[#459B45]" />
            <p className="text-sm font-medium text-[#555B55]">
              Loading verified recent launches...
            </p>
          </div>
        ) : displayedRecentLaunches.length === 0 ? (
          <div className="bg-[#F7F9F7] border border-[#E5E9E5] rounded-2xl p-12 text-center">
            <p className="text-sm font-medium text-[#555B55]">
              No launches found in the recent collection.
            </p>
          </div>
        ) : (
          /* Premium Responsive Card Grid: 3 columns desktop, 2 columns tablet, 1 column mobile */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {displayedRecentLaunches.map((launch) => (
              <LaunchCard
                key={launch.id}
                launch={launch}
                isAdmin={isAdmin}
                onEdit={onEdit}
                onRequestDelete={onRequestDelete}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
