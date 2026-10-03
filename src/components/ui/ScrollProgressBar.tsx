import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0%' }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#38BDF8] z-50 pointer-events-none shadow-[0_0_10px_rgba(37,99,235,0.5)]"
      aria-hidden="true"
    />
  );
};
