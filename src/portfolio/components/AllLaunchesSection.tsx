import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { SupportedLaunch } from '../../types/portfolio';
import { LaunchCard } from './LaunchCard';

interface AllLaunchesSectionProps {
  launches: SupportedLaunch[];
  isLoading: boolean;
  isAdmin: boolean;
  onEdit: (launch: SupportedLaunch) => void;
  onRequestDelete: (launch: SupportedLaunch) => void;
}

const PAGE_SIZE = 12;

export const AllLaunchesSection: React.FC<AllLaunchesSectionProps> = ({
  launches,
  isLoading,
  isAdmin,
  onEdit,
  onRequestDelete,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(PAGE_SIZE);

  const visibleLaunches = launches.slice(0, visibleCount);
  const hasMore = visibleCount < launches.length;

  return (
    <section
      id="all-launches"
      className="scroll-mt-16 py-12 sm:py-16 bg-[#F7F7F7] border-b border-[#E5E7EB]"
    >
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#1F2937] tracking-tight">
            All Supported Launches
          </h2>
          <p className="text-sm text-[#6B7280] mt-1">
            Explore the Product Hunt launches I’ve supported.
          </p>
        </div>

        {isLoading ? (
          <div
            role="status"
            aria-live="polite"
            className="bg-white border border-[#E5E7EB] rounded-xl p-12 flex flex-col items-center justify-center gap-3 text-center"
          >
            <Loader2 size={22} className="animate-spin text-[#DA552F]" />
            <p className="text-xs sm:text-sm text-[#6B7280]">
              Loading supported launches...
            </p>
          </div>
        ) : launches.length === 0 ? (
          <div className="bg-white border border-[#E5E7EB] rounded-xl p-10 text-center">
            <p className="text-sm font-medium text-[#6B7280]">
              No launches have been added to this portfolio yet.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {visibleLaunches.map((launch) => (
                <LaunchCard
                  key={launch.id}
                  launch={launch}
                  isAdmin={isAdmin}
                  onEdit={onEdit}
                  onRequestDelete={onRequestDelete}
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-semibold text-[#1F2937] bg-white hover:bg-[#F7F7F7] border border-[#E5E7EB] hover:border-[#DA552F] transition-colors cursor-pointer"
                >
                  Load More ({launches.length - visibleCount} remaining)
                </button>
                <button
                  type="button"
                  onClick={() => setVisibleCount(launches.length)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-xs font-semibold text-[#DA552F] bg-white hover:bg-[#F7F7F7] border border-[#E5E7EB] hover:border-[#DA552F] transition-colors cursor-pointer"
                >
                  Show All ({launches.length})
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
