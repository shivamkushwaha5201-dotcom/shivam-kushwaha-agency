import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate hero section height or default to 450px threshold
      const heroElement = document.getElementById('home');
      const threshold = heroElement ? heroElement.offsetHeight - 120 : 450;
      setVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
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
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-white/95 dark:bg-slate-800/95 hover:bg-white dark:hover:bg-slate-800 text-[#1A1A1A] dark:text-slate-100 hover:text-[#2563EB] dark:hover:text-blue-400 border border-[#E5E5E1] dark:border-slate-700 shadow-lg shadow-black/8 hover:shadow-xl hover:border-[#2563EB]/40 backdrop-blur-md transition-colors cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
          <span className="sr-only">Back to Top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
