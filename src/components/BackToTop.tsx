import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { scrollCoordinator } from '../lib/scrollCoordinator';

export const BackToTop: React.FC = React.memo(() => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let threshold = 450;
    let lastVisible = false;

    const measureThreshold = () => {
      const heroElement = document.getElementById('home');
      threshold = heroElement ? Math.max(300, heroElement.offsetHeight - 120) : 450;
    };

    return scrollCoordinator.subscribe(
      (m) => {
        const isVisible = m.scrollY > threshold;
        if (isVisible !== lastVisible) {
          lastVisible = isVisible;
          setVisible(isVisible);
        }
        return false;
      },
      () => {
        measureThreshold();
      }
    );
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-[#050B16]/95 hover:bg-[#0B1528] text-slate-100 hover:text-blue-400 border border-slate-700 shadow-lg shadow-black/50 hover:border-[#2563EB]/50 transition-colors cursor-pointer group focus:outline-hidden"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          <span className="sr-only">Back to Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
});
