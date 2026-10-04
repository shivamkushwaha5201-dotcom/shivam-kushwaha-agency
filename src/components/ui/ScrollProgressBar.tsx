import React, { useEffect, useRef } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    let docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);

    const updateHeight = () => {
      docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };

    const updateBar = () => {
      if (barRef.current) {
        const scrollY = window.scrollY || window.pageYOffset || 0;
        const progress = Math.min(1, Math.max(0, scrollY / docHeight));
        barRef.current.style.transform = `translate3d(0, 0, 0) scale3d(${progress.toFixed(4)}, 1, 1)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateBar);
        ticking = true;
      }
    };

    updateHeight();
    updateBar();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateHeight, { passive: true });

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(updateHeight);
      ro.observe(document.body);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateHeight);
      if (ro) ro.disconnect();
    };
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
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#38BDF8] z-50 pointer-events-none shadow-[0_0_8px_rgba(37,99,235,0.45)]"
      aria-hidden="true"
    />
  );
};
