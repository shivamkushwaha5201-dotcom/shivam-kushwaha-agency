import React, { useEffect, useRef } from 'react';
import { scrollCoordinator } from '../../lib/scrollCoordinator';

export const ScrollProgressBar: React.FC = React.memo(() => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return scrollCoordinator.subscribe((m) => {
      if (barRef.current) {
        barRef.current.style.transform = `translate3d(0, 0, 0) scale3d(${m.progress.toFixed(4)}, 1, 1)`;
      }
      return false;
    });
  }, []);

  return (
    <div
      ref={barRef}
      style={{
        transform: 'translate3d(0, 0, 0) scale3d(0, 1, 1)',
        transformOrigin: '0% 50%',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] z-50 pointer-events-none"
      aria-hidden="true"
    />
  );
});
