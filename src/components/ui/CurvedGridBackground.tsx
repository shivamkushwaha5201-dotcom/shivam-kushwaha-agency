import React from 'react';

interface CurvedGridBackgroundProps {
  className?: string;
  showOrbs?: boolean;
}

export const CurvedGridBackground: React.FC<CurvedGridBackgroundProps> = React.memo(({ 
  className = '', 
  showOrbs = true 
}) => {
  return (
    <div 
      aria-hidden="true" 
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 select-none ${className}`}
    >
      {/* 1. Subtle Mint Atmospheric Ambient Glows */}
      <div 
        className="absolute top-0 right-0 w-[550px] sm:w-[700px] lg:w-[900px] h-[550px] sm:h-[700px] lg:h-[900px] rounded-full"
        style={{
          background: 'radial-gradient(circle at 75% 25%, rgba(69, 155, 69, 0.14) 0%, rgba(229, 245, 229, 0.45) 35%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div 
        className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(69, 155, 69, 0.08) 0%, rgba(229, 245, 229, 0.35) 45%, rgba(255, 255, 255, 0) 70%)',
          filter: 'blur(45px)',
        }}
      />

      {/* 2. Soft Green Ambient Orbs in Corners (as seen in the reference screenshot) */}
      {showOrbs && (
        <>
          {/* Bottom Left Blurred Mint Orb */}
          <div 
            className="absolute -bottom-24 -left-20 w-72 sm:w-88 h-72 sm:h-88 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(69, 155, 69, 0.28) 0%, rgba(229, 245, 229, 0.5) 45%, rgba(255, 255, 255, 0) 72%)',
              filter: 'blur(42px)',
            }}
          />
          {/* Bottom Right Blurred Mint Orb */}
          <div 
            className="absolute -bottom-28 -right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(69, 155, 69, 0.25) 0%, rgba(229, 245, 229, 0.45) 45%, rgba(255, 255, 255, 0) 72%)',
              filter: 'blur(46px)',
            }}
          />
        </>
      )}

      {/* 3. Curved 3D Topographic / Mesh Grid Lines (Recreated from Reference Screenshot) */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-60" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <defs>
          <linearGradient id="grid-fade-h" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#459B45" stopOpacity="0.04" />
            <stop offset="40%" stopColor="#459B45" stopOpacity="0.16" />
            <stop offset="70%" stopColor="#459B45" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#459B45" stopOpacity="0.03" />
          </linearGradient>
          <linearGradient id="grid-fade-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#459B45" stopOpacity="0.04" />
            <stop offset="30%" stopColor="#459B45" stopOpacity="0.15" />
            <stop offset="70%" stopColor="#459B45" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#459B45" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Horizontal Curved Arcs */}
        <path d="M-100,120 Q650,80 1540,140" fill="none" stroke="url(#grid-fade-h)" strokeWidth="1" strokeDasharray="none" />
        <path d="M-100,220 Q680,180 1540,240" fill="none" stroke="url(#grid-fade-h)" strokeWidth="1" />
        <path d="M-100,330 Q700,290 1540,360" fill="none" stroke="url(#grid-fade-h)" strokeWidth="1" />
        <path d="M-100,450 Q720,410 1540,490" fill="none" stroke="url(#grid-fade-h)" strokeWidth="1" />
        <path d="M-100,580 Q740,540 1540,630" fill="none" stroke="url(#grid-fade-h)" strokeWidth="1" />
        <path d="M-100,720 Q760,680 1540,780" fill="none" stroke="url(#grid-fade-h)" strokeWidth="1" />

        {/* Vertical Curved Perspective Lines (Converging slightly towards top right) */}
        <path d="M180,-50 Q240,450 200,950" fill="none" stroke="url(#grid-fade-v)" strokeWidth="1" />
        <path d="M340,-50 Q410,450 380,950" fill="none" stroke="url(#grid-fade-v)" strokeWidth="1" />
        <path d="M510,-50 Q590,450 570,950" fill="none" stroke="url(#grid-fade-v)" strokeWidth="1" />
        <path d="M690,-50 Q780,450 770,950" fill="none" stroke="url(#grid-fade-v)" strokeWidth="1" />
        <path d="M880,-50 Q980,450 980,950" fill="none" stroke="url(#grid-fade-v)" strokeWidth="1" />
        <path d="M1070,-50 Q1170,450 1180,950" fill="none" stroke="url(#grid-fade-v)" strokeWidth="1" />
        <path d="M1260,-50 Q1350,450 1370,950" fill="none" stroke="url(#grid-fade-v)" strokeWidth="1" />
      </svg>
    </div>
  );
});

export default CurvedGridBackground;
