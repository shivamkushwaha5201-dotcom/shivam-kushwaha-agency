import React from 'react';
import { FloatingParticles } from './FloatingParticles';

interface SectionTransitionGlowProps {
  className?: string;
  showParticles?: boolean;
}

/**
 * SectionTransitionGlow
 * 
 * Provides a gentle pale mint-green ambient glow and subtle drifting particles
 * at the seams between major sections to make transitions feel cohesive, smooth,
 * and high-end without shifting layouts or obscuring content.
 */
export const SectionTransitionGlow: React.FC<SectionTransitionGlowProps> = React.memo(({
  className = '',
  showParticles = true,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none relative w-full h-12 sm:h-16 -my-6 sm:-my-8 z-10 overflow-hidden select-none flex items-center justify-center ${className}`}
    >
      {/* Soft Green Ambient Radial Flare */}
      <div
        className="w-[85%] max-w-4xl h-full rounded-full opacity-60 animate-section-glow"
        style={{
          background:
            'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(128, 216, 154, 0.22) 0%, rgba(229, 245, 229, 0.12) 45%, transparent 75%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Drifting Transition Particles */}
      {showParticles && (
        <FloatingParticles variant="transition" className="inset-0" />
      )}
    </div>
  );
});

SectionTransitionGlow.displayName = 'SectionTransitionGlow';
