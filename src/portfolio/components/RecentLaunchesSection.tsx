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
      className="scroll-mt-16 py-12 sm:py-16 bg-white border-b border-[#E5E7EB]"
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight">
            Recent Launches
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Launches I’ve supported this month.
          </p>
        </div>

        {isLoading ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-[#F7F7F7] border border-[#E5E7EB] rounded-xl p-12 flex flex-col items-center justify-center gap-3 text-center"
          >
            <Loader2 size={22} className="animate-spin text-[#DA552F]" />
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Checking recent launches...
            </p>
          </div>
        ) : displayedRecentLaunches.length === 0 ? (
          <div className="bg-[#F7F7F7] border border-[#E5E7EB] rounded-xl p-10 text-center">
            <p className="text-sm font-medium text-[#6B7280]">
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
              <p className="text-xs text-[#6B7280]">
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
