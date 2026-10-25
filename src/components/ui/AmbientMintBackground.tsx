import React from 'react';
import { FloatingParticles } from './FloatingParticles';

interface AmbientMintBackgroundProps {
  className?: string;
  showMesh?: boolean;
  showOrbs?: boolean;
  showEdgeShapes?: boolean;
}

/**
 * AmbientMintBackground
 * 
 * Creates a cohesive, premium, soft white and pale mint-green ambient atmosphere
 * across the entire AxentAI Labs website with continuous organic animations.
 * 
 * Features:
 * - Soft mint-green radial gradient lighting
 * - Subtle organic curved mesh lines with gentle drift
 * - Smooth translucent green light gradients (durations: 16s - 24s)
 * - Soft blurred green shapes near bottom corners and page edges
 * - Strict pointer-events-none, hardware-accelerated, zero-layout-shift
 */
export const AmbientMintBackground: React.FC<AmbientMintBackgroundProps> = React.memo(({
  className = '',
  showMesh = true,
  showOrbs = true,
  showEdgeShapes = true,
}) => {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 overflow-hidden select-none ${className}`}
    >
      {/* 1. Base Clean White & Pale Mint Atmospheric Ground */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 95% 85% at 20% 18%, rgba(229, 245, 229, 0.55) 0%, rgba(255, 255, 255, 0.95) 55%, rgba(247, 249, 247, 0.9) 100%)',
        }}
      />

      {/* 2. Soft Mint-Green Floating Radial Gradient Lights (Continuous 18s - 23s Staggered Movement) */}
      {showOrbs && (
        <>
          {/* Orb 1: Upper Left / Hero Quadrant */}
          <div
            className="absolute -top-[12%] -left-[10%] w-[680px] sm:w-[850px] lg:w-[1000px] h-[680px] sm:h-[850px] lg:h-[1000px] rounded-full animate-ambient-float-1"
            style={{
              background:
                'radial-gradient(circle at 45% 45%, rgba(69, 155, 69, 0.16) 0%, rgba(229, 245, 229, 0.48) 38%, rgba(255, 255, 255, 0) 72%)',
              filter: 'blur(65px)',
            }}
          />

          {/* Orb 2: Upper Right / Flagship Launch & Services Quadrant */}
          <div
            className="absolute top-[6%] -right-[12%] w-[700px] sm:w-[880px] lg:w-[1050px] h-[700px] sm:h-[880px] lg:h-[1050px] rounded-full animate-ambient-float-2"
            style={{
              background:
                'radial-gradient(circle at 55% 45%, rgba(69, 155, 69, 0.14) 0%, rgba(215, 242, 216, 0.45) 42%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(75px)',
            }}
          />

          {/* Orb 3: Mid-Left / Process & Why Us Methodology Quadrant */}
          <div
            className="absolute top-[42%] -left-[14%] w-[620px] sm:w-[780px] lg:w-[940px] h-[620px] sm:h-[780px] lg:h-[940px] rounded-full animate-ambient-float-3"
            style={{
              background:
                'radial-gradient(circle at 50% 50%, rgba(69, 155, 69, 0.12) 0%, rgba(229, 245, 229, 0.42) 46%, rgba(255, 255, 255, 0) 72%)',
              filter: 'blur(80px)',
            }}
          />

          {/* Orb 4: Lower Right / CTA & Footer Quadrant */}
          <div
            className="absolute -bottom-[10%] -right-[10%] w-[660px] sm:w-[840px] lg:w-[980px] h-[660px] sm:h-[840px] lg:h-[980px] rounded-full animate-ambient-float-4"
            style={{
              background:
                'radial-gradient(circle at 55% 55%, rgba(69, 155, 69, 0.15) 0%, rgba(229, 245, 229, 0.46) 40%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(70px)',
            }}
          />
        </>
      )}

      {/* 3. Soft Blurred Green Shapes Near Bottom Corners and Page Edges */}
      {showEdgeShapes && (
        <>
          {/* Bottom-Left Corner Blurred Shape */}
          <div
            className="absolute -bottom-16 -left-16 w-72 sm:w-96 h-72 sm:h-96 rounded-full animate-edge-glow-1"
            style={{
              background:
                'radial-gradient(circle, rgba(69, 155, 69, 0.22) 0%, rgba(229, 245, 229, 0.5) 45%, rgba(255, 255, 255, 0) 72%)',
              filter: 'blur(52px)',
            }}
          />

          {/* Bottom-Right Corner Blurred Shape */}
          <div
            className="absolute -bottom-20 -right-20 w-80 sm:w-104 h-80 sm:h-104 rounded-full animate-edge-glow-2"
            style={{
              background:
                'radial-gradient(circle, rgba(69, 155, 69, 0.20) 0%, rgba(229, 245, 229, 0.45) 45%, rgba(255, 255, 255, 0) 72%)',
              filter: 'blur(58px)',
            }}
          />

          {/* Mid-Right Edge Ambient Glow Accent */}
          <div
            className="absolute top-[32%] -right-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full animate-edge-glow-1"
            style={{
              background:
                'radial-gradient(circle, rgba(69, 155, 69, 0.13) 0%, rgba(229, 245, 229, 0.38) 45%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(48px)',
            }}
          />

          {/* Mid-Left Edge Ambient Glow Accent */}
          <div
            className="absolute top-[68%] -left-12 w-64 sm:w-80 h-64 sm:h-80 rounded-full animate-edge-glow-2"
            style={{
              background:
                'radial-gradient(circle, rgba(69, 155, 69, 0.12) 0%, rgba(229, 245, 229, 0.35) 45%, rgba(255, 255, 255, 0) 70%)',
              filter: 'blur(50px)',
            }}
          />
        </>
      )}

      {/* 4. Subtle Organic Curved Mesh Lines across the background (Continuous Gentle Drift) */}
      {showMesh && (
        <div className="absolute inset-0 w-full h-full animate-mesh-drift">
          <svg
            className="w-full h-full opacity-65"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1440 900"
          >
            <defs>
              <linearGradient id="ambient-mesh-fade-h" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#459B45" stopOpacity="0.03" />
                <stop offset="35%" stopColor="#459B45" stopOpacity="0.15" />
                <stop offset="68%" stopColor="#459B45" stopOpacity="0.13" />
                <stop offset="100%" stopColor="#459B45" stopOpacity="0.02" />
              </linearGradient>

              <linearGradient id="ambient-mesh-fade-v" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#459B45" stopOpacity="0.03" />
                <stop offset="28%" stopColor="#459B45" stopOpacity="0.14" />
                <stop offset="72%" stopColor="#459B45" stopOpacity="0.11" />
                <stop offset="100%" stopColor="#459B45" stopOpacity="0.02" />
              </linearGradient>

              <linearGradient id="ambient-mesh-accent" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#246B32" stopOpacity="0.02" />
                <stop offset="50%" stopColor="#459B45" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#246B32" stopOpacity="0.02" />
              </linearGradient>
            </defs>

            {/* Horizontal Organic Topographic Arcs */}
            <path
              d="M-80,95 Q720,55 1520,115"
              fill="none"
              stroke="url(#ambient-mesh-fade-h)"
              strokeWidth="1.1"
            />
            <path
              d="M-80,195 Q740,155 1520,215"
              fill="none"
              stroke="url(#ambient-mesh-fade-h)"
              strokeWidth="1.1"
            />
            <path
              d="M-80,310 Q760,265 1520,335"
              fill="none"
              stroke="url(#ambient-mesh-fade-h)"
              strokeWidth="1.1"
            />
            <path
              d="M-80,435 Q780,390 1520,470"
              fill="none"
              stroke="url(#ambient-mesh-fade-h)"
              strokeWidth="1.1"
            />
            <path
              d="M-80,565 Q800,520 1520,610"
              fill="none"
              stroke="url(#ambient-mesh-fade-h)"
              strokeWidth="1.1"
            />
            <path
              d="M-80,705 Q820,660 1520,755"
              fill="none"
              stroke="url(#ambient-mesh-fade-h)"
              strokeWidth="1.1"
            />
            <path
              d="M-80,845 Q840,800 1520,890"
              fill="none"
              stroke="url(#ambient-mesh-fade-h)"
              strokeWidth="1.1"
            />

            {/* Vertical Curved Perspective Waves */}
            <path
              d="M170,-40 Q240,450 190,940"
              fill="none"
              stroke="url(#ambient-mesh-fade-v)"
              strokeWidth="1.1"
            />
            <path
              d="M330,-40 Q410,450 370,940"
              fill="none"
              stroke="url(#ambient-mesh-fade-v)"
              strokeWidth="1.1"
            />
            <path
              d="M500,-40 Q590,450 560,940"
              fill="none"
              stroke="url(#ambient-mesh-fade-v)"
              strokeWidth="1.1"
            />
            <path
              d="M680,-40 Q780,450 760,940"
              fill="none"
              stroke="url(#ambient-mesh-fade-v)"
              strokeWidth="1.1"
            />
            <path
              d="M870,-40 Q980,450 970,940"
              fill="none"
              stroke="url(#ambient-mesh-fade-v)"
              strokeWidth="1.1"
            />
            <path
              d="M1060,-40 Q1170,450 1170,940"
              fill="none"
              stroke="url(#ambient-mesh-fade-v)"
              strokeWidth="1.1"
            />
            <path
              d="M1250,-40 Q1350,450 1360,940"
              fill="none"
              stroke="url(#ambient-mesh-fade-v)"
              strokeWidth="1.1"
            />

            {/* Intersecting Organic Diagonal Rhythm Ribbons */}
            <path
              d="M-60,500 C350,300 900,680 1500,380"
              fill="none"
              stroke="url(#ambient-mesh-accent)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <path
              d="M-60,250 C400,100 850,450 1500,200"
              fill="none"
              stroke="url(#ambient-mesh-accent)"
              strokeWidth="0.9"
              strokeDasharray="3 5"
            />
          </svg>
        </div>
      )}

      {/* 5. Sparse Subtle Floating Ambient Particles Across Mint-Green Background */}
      <FloatingParticles variant="ambient" />
    </div>
  );
});

AmbientMintBackground.displayName = 'AmbientMintBackground';

