import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import earthImage from '../assets/images/earth_hero.jpg';

export const CinematicHeroEarth: React.FC = () => {
  // Mouse parallax motion values with smooth spring dampening
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 60 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax offsets for different layers (creates real spatial depth)
  const earthTranslateX = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const earthTranslateY = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);

  const glowTranslateX = useTransform(smoothX, [-0.5, 0.5], [-35, 35]);
  const glowTranslateY = useTransform(smoothY, [-0.5, 0.5], [-25, 25]);

  const badge1X = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);
  const badge1Y = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const badge2X = useTransform(smoothX, [-0.5, 0.5], [14, -14]);
  const badge2Y = useTransform(smoothY, [-0.5, 0.5], [12, -12]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[720px] aspect-square flex items-center justify-center select-none pointer-events-none">
      
      {/* 1. Deep Core Atmospheric Backlight (Radial Glow behind Earth) */}
      <motion.div
        style={{ x: glowTranslateX, y: glowTranslateY }}
        className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-indigo-600/10 blur-[90px] -z-10 pointer-events-none"
      />

      {/* 2. Secondary Intense Cyan Limb Glow (Rim Light on Earth Edge) */}
      <motion.div
        style={{ x: glowTranslateX, y: glowTranslateY }}
        className="absolute inset-10 rounded-full bg-sky-400/15 blur-[60px] -z-10 pointer-events-none"
      />

      {/* 3. Outer Atmospheric Halo Ring */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.65, 0.85, 0.65]
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-6 rounded-full border border-sky-400/20 shadow-[0_0_80px_rgba(56,189,248,0.25)] pointer-events-none"
      />

      {/* 4. The Signature Earth Visual (Natural Blend into Dark Space Background) */}
      <motion.div
        style={{ x: earthTranslateX, y: earthTranslateY }}
        animate={{
          y: [-8, 8, -8],
          scale: [1, 1.015, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative w-[88%] h-[88%] rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_100px_rgba(59,130,246,0.28)]"
      >
        {/* The Actual Earth Image Asset */}
        <img
          src={earthImage}
          alt="Planet Earth — Global Digital Reach"
          className="w-full h-full object-cover rounded-full"
          loading="eager"
          decoding="async"
        />

        {/* Soft Atmospheric Vignette Edge Blend (Seamless transition into #02040A) */}
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_transparent_68%,_rgba(2,4,10,0.5)_85%,_rgba(2,4,10,0.92)_100%)] pointer-events-none" />

        {/* Subtle Blue Atmospheric Rim Lighting Overlay */}
        <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(56,189,248,0.35)] pointer-events-none" />

        {/* Very Slow Atmospheric Light Sweep across horizon */}
        <motion.div
          animate={{
            x: ['-120%', '160%'],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 4
          }}
          className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
        />
      </motion.div>

      {/* 5. Minimal Floating UI Elements (Only 2-3 as Requested) */}
      
      {/* Element 1: Top-Right — Organic Reach */}
      <motion.div
        style={{ x: badge1X, y: badge1Y }}
        animate={{
          y: [0, -6, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-8 right-2 sm:right-6 px-4 py-2.5 rounded-xl bg-[#050B14]/85 backdrop-blur-xl border border-blue-500/25 shadow-xl shadow-black/60 pointer-events-auto"
      >
        <div className="flex items-center gap-2 mb-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Organic Reach
          </span>
        </div>
        <div className="text-xs font-semibold text-white">
          ↑ 68% Engagement Lift
        </div>
      </motion.div>

      {/* Element 2: Middle-Left — LinkedIn Growth */}
      <motion.div
        style={{ x: badge2X, y: badge2Y }}
        animate={{
          y: [0, 8, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-28 -left-2 sm:left-4 px-4 py-2.5 rounded-xl bg-[#050B14]/85 backdrop-blur-xl border border-blue-500/25 shadow-xl shadow-black/60 pointer-events-auto"
      >
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider">
            LinkedIn Growth
          </span>
        </div>
        <div className="text-xs font-semibold text-white">
          Founder Authority Pipeline
        </div>
      </motion.div>

      {/* Element 3: Bottom-Right — Creator Campaigns */}
      <motion.div
        animate={{
          y: [-4, 6, -4]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -bottom-2 right-12 sm:right-20 px-3.5 py-2 rounded-xl bg-[#050B14]/85 backdrop-blur-xl border border-blue-500/20 shadow-xl shadow-black/60 pointer-events-auto"
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-slate-300">
            Creator Campaigns
          </span>
          <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded border border-sky-500/20">
            Active
          </span>
        </div>
      </motion.div>

    </div>
  );
};
