import React from 'react';
import { Loader2 } from 'lucide-react';
import { SupportedLaunch } from '../../types/portfolio';
import { LaunchCard } from './LaunchCard';

interface RecentLaunchesSectionProps {
  recentLaunches: SupportedLaunch[];
  pendingConfirmationLaunches: SupportedLaunch[];
  isLoading: boolean;
  isAdmin: boolean;
  onEdit: (launch: SupportedLaunch) => void;
  onRequestDelete: (launch: SupportedLaunch) => void;
}

export const RecentLaunchesSection: React.FC<RecentLaunchesSectionProps> = ({
  recentLaunches,
  pendingConfirmationLaunches,
  isLoading,
  isAdmin,
  onEdit,
  onRequestDelete,
}) => {
  // Combine date-confirmed current-month launches with Recent Launches records awaiting date confirmation (without duplicates)
  const displayedRecentLaunches = React.useMemo(() => {
    const map = new Map<string, SupportedLaunch>();
    for (const item of recentLaunches) {
      map.set(item.id, item);
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
      className="scroll-mt-16 py-12 sm:py-16 bg-[#08060F] border-b border-[#30213F]"
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#F8F6FF] tracking-tight">
            Recent Launches
          </h2>
          <p className="text-sm text-[#B7AEC9] mt-1">
            Launches I’ve supported this month.
          </p>
        </div>

        {isLoading ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-[#151020] border border-[#30213F] rounded-xl p-12 flex flex-col items-center justify-center gap-3 text-center"
          >
            <Loader2 size={22} className="animate-spin text-[#B69AFF]" />
            <p className="text-xs sm:text-sm text-[#B7AEC9]">
              Checking recent launches...
            </p>
          </div>
        ) : displayedRecentLaunches.length === 0 ? (
          <div className="bg-[#151020] border border-[#30213F] rounded-xl p-10 text-center">
            <p className="text-sm font-medium text-[#B7AEC9]">
              No launches added this month yet.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

            {pendingConfirmationLaunches.length > 0 && (
              <p className="text-xs text-[#B9B1C9]">
                Data note: {pendingConfirmationLaunches.length}{' '}
                {pendingConfirmationLaunches.length === 1
                  ? 'record is'
                  : 'records are'}{' '}
                flagged for calendar launch date confirmation (
                {pendingConfirmationLaunches.map((l) => l.name).join(', ')}).
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
