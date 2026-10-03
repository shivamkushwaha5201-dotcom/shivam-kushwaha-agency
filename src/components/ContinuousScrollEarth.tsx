import React, { useEffect, useRef } from 'react';
import earthImage from '../assets/images/earth_hero.jpg';

// Linear interpolation helper
function interpolate(value: number, input: number[], output: number[]): number {
  if (value <= input[0]) return output[0];
  if (value >= input[input.length - 1]) return output[output.length - 1];

  for (let i = 0; i < input.length - 1; i++) {
    if (value >= input[i] && value <= input[i + 1]) {
      const t = (value - input[i]) / (input[i + 1] - input[i]);
      return output[i] + t * (output[i + 1] - output[i]);
    }
  }
  return output[output.length - 1];
}

// 2nd-order spring physics integrator
interface SpringState {
  current: number;
  velocity: number;
}

function stepSpring(
  state: SpringState,
  target: number,
  stiffness: number,
  damping: number,
  mass: number,
  dt: number
) {
  const safeDt = Math.min(dt, 0.032);
  const force = -stiffness * (state.current - target) - damping * state.velocity;
  const accel = force / mass;
  state.velocity += accel * safeDt;
  state.current += state.velocity * safeDt;
}

export const ContinuousScrollEarth: React.FC = () => {
  // Direct DOM references for zero-layout-recalculation GPU transforms
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const rimHaloRef = useRef<HTMLDivElement>(null);
  const rimRingRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const rimGlareRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const starfieldRef = useRef<HTMLDivElement>(null);
  const dustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Window dimension cache (updated strictly on resize)
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    let isMobile = winWidth < 1024;
    let docHeight = document.documentElement.scrollHeight - winHeight;

    // Scroll progress target and smoothed state
    let targetProgress = 0;
    let lastProgress = 0;

    // Spring states for all transformations
    const springX: SpringState = { current: isMobile ? 10 : 28, velocity: 0 };
    const springY: SpringState = { current: isMobile ? 26 : 22, velocity: 0 };
    const springScale: SpringState = { current: isMobile ? 1.25 : 1.60, velocity: 0 };
    const springRotate: SpringState = { current: 0, velocity: 0 };
    const velocitySpring: SpringState = { current: 0, velocity: 0 };

    // Mouse parallax states
    let targetMouseX = 0;
    let targetMouseY = 0;
    const smoothMouseX: SpringState = { current: 0, velocity: 0 };
    const smoothMouseY: SpringState = { current: 0, velocity: 0 };

    // Raw Trajectory Constants
    const STOPS = [0.00, 0.16, 0.32, 0.48, 0.64, 0.78, 0.88, 1.00];
    const X_MOBILE = [10, -10, 12, -12, 10, 0, 14, 6];
    const X_DESKTOP = [28, -24, 22, -26, 24, 0, 28, 14];
    const Y_MOBILE = [26, 15, -6, 12, 18, 26, 18, 22];
    const Y_DESKTOP = [22, 12, -10, 10, 18, 28, 14, 20];
    const SCALE_MOBILE = [1.25, 1.10, 1.35, 1.15, 1.15, 1.25, 1.05, 1.40];
    const SCALE_DESKTOP = [1.60, 1.38, 1.75, 1.45, 1.42, 1.55, 1.22, 1.82];
    const ROTATE_STOPS = [0.00, 0.25, 0.50, 0.75, 1.00];
    const ROTATE_VALUES = [0, 14, 28, 42, 56];
    const OPACITY_VALUES = [0.96, 0.75, 0.88, 0.72, 0.76, 0.82, 0.42, 0.96];

    // Scroll and Mouse listeners strictly store input coordinates
    const onScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      targetProgress = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
    };

    const onResize = () => {
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      isMobile = winWidth < 1024;
      docHeight = document.documentElement.scrollHeight - winHeight;
      onScroll();
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / winWidth) - 0.5;
      targetMouseY = (e.clientY / winHeight) - 0.5;
    };

    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // =======================================================================
    // CENTRALIZED requestAnimationFrame LOOP
    // Single synchronized frame pass for all calculations & DOM updates
    // =======================================================================
    let rafId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      // 1. Calculate raw velocity based on frame delta
      const progressDelta = targetProgress - lastProgress;
      lastProgress = targetProgress;
      const rawVelocity = dt > 0 ? (progressDelta / dt) * 0.1 : 0;

      // 2. Step spring physics
      stepSpring(velocitySpring, rawVelocity, 95, 20, 0.55, dt);

      // Trajectory targets based on scroll progress
      const targetX = interpolate(targetProgress, STOPS, isMobile ? X_MOBILE : X_DESKTOP);
      const targetY = interpolate(targetProgress, STOPS, isMobile ? Y_MOBILE : Y_DESKTOP);
      const targetScale = interpolate(targetProgress, STOPS, isMobile ? SCALE_MOBILE : SCALE_DESKTOP);
      const targetRotate = interpolate(targetProgress, ROTATE_STOPS, ROTATE_VALUES);
      const targetOpacity = interpolate(targetProgress, STOPS, OPACITY_VALUES);

      // Physics integration for all 4 transformations (translateX, translateY, scale, rotate)
      stepSpring(springX, targetX, 55, 25, 1.20, dt);
      stepSpring(springY, targetY, 50, 27, 1.35, dt);
      stepSpring(springScale, targetScale, 62, 29, 0.98, dt);
      stepSpring(springRotate, targetRotate, 52, 31, 1.12, dt);

      // Mouse parallax springs
      stepSpring(smoothMouseX, targetMouseX, 45, 28, 1.0, dt);
      stepSpring(smoothMouseY, targetMouseY, 45, 28, 1.0, dt);

      // 3. Velocity Multipliers & Offsets (Scale vs. Translation 3D Depth)
      const v = velocitySpring.current;
      const velocityTranslateX = interpolate(v, [-2, 0, 2], [18, 0, -18]);
      const velocityTranslateY = interpolate(v, [-2, 0, 2], [-45, 0, 45]);
      const velocityScale = interpolate(v, [-2, 0, 2], [-0.10, 0, 0.10]);
      const velocityTilt = interpolate(v, [-2, 0, 2], [-4.0, 0, 4.0]);
      const velocityAtmoLag = interpolate(v, [-2, 0, 2], [-22, 0, 22]);

      // 4. Pixel Coordinates (Directly pre-calculated to avoid CSS calc() parsing)
      const curX = springX.current;
      const curY = springY.current;
      const curScale = Math.max(0.65, springScale.current + velocityScale);
      const curRotate = springRotate.current + velocityTilt;

      const pxX = (curX / 100) * winWidth + velocityTranslateX;
      const pxY = (curY / 100) * winHeight + velocityTranslateY;

      // 5. Parallax Tiers Calculations
      const starfieldY = targetProgress * -8;
      const glowOffsetX = interpolate(curX, [-30, 0, 30], [-18, 0, 18]);
      const glowOffsetY = (curY * 0.4) + velocityAtmoLag;
      const glowScale = interpolate(curScale, [1.1, 1.8], [1.15, 1.42]);

      const cloudOffsetX = interpolate(curX, [-30, 0, 30], [24, 0, -28]);
      const cloudOffsetY = interpolate(curY, [-15, 0, 30], [18, 0, -22]);
      const cloudRotate = interpolate(curRotate, [0, 56], [0, 74]);

      const rimLightShiftX = interpolate(curX, [-30, 0, 30], [-35, 0, 45]);
      const rimLightShiftY = interpolate(curY, [-15, 0, 30], [-25, 0, 32]);
      const rimGlowIntensity = interpolate(targetProgress, [0.00, 0.32, 0.70, 1.00], [0.45, 0.75, 0.55, 0.85]);

      const flarePositionX = interpolate(curX, [-30, 0, 30], [-55, 0, 65]);
      const flarePositionY = interpolate(curY, [-15, 0, 30], [-40, 0, 48]);
      const flareScale = interpolate(curScale, [1.1, 1.8], [1.1, 1.5]);

      const foregroundDustY = targetProgress * -38;

      const mousePX = interpolate(smoothMouseX.current, [-0.5, 0.5], [-16, 16]);
      const mousePY = interpolate(smoothMouseY.current, [-0.5, 0.5], [-12, 12]);
      const mouseCloudPX = interpolate(smoothMouseX.current, [-0.5, 0.5], [-24, 24]);
      const mouseCloudPY = interpolate(smoothMouseY.current, [-0.5, 0.5], [-18, 18]);

      // 6. Direct GPU Transform Application (Zero DOM Layout / Recalculation)
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${pxX.toFixed(2)}px, ${pxY.toFixed(2)}px, 0) scale(${curScale.toFixed(3)}) rotate(${curRotate.toFixed(2)}deg)`;
        containerRef.current.style.opacity = targetOpacity.toFixed(3);
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowOffsetX.toFixed(2)}px, ${glowOffsetY.toFixed(2)}px, 0) scale(${glowScale.toFixed(3)})`;
      }

      if (rimHaloRef.current) {
        rimHaloRef.current.style.transform = `translate3d(${glowOffsetX.toFixed(2)}px, ${glowOffsetY.toFixed(2)}px, 0) scale(${glowScale.toFixed(3)})`;
        rimHaloRef.current.style.opacity = rimGlowIntensity.toFixed(3);
      }

      if (rimRingRef.current) {
        rimRingRef.current.style.transform = `translate3d(${rimLightShiftX.toFixed(2)}px, ${rimLightShiftY.toFixed(2)}px, 0)`;
      }

      if (bodyRef.current) {
        bodyRef.current.style.transform = `translate3d(${mousePX.toFixed(2)}px, ${mousePY.toFixed(2)}px, 0)`;
      }

      if (cloudsRef.current) {
        cloudsRef.current.style.transform = `translate3d(${(cloudOffsetX + mouseCloudPX).toFixed(2)}px, ${(cloudOffsetY + mouseCloudPY).toFixed(2)}px, 0) rotate(${cloudRotate.toFixed(2)}deg)`;
      }

      if (rimGlareRef.current) {
        rimGlareRef.current.style.transform = `translate3d(${rimLightShiftX.toFixed(2)}px, ${rimLightShiftY.toFixed(2)}px, 0)`;
      }

      if (flareRef.current) {
        flareRef.current.style.transform = `translate3d(${flarePositionX.toFixed(2)}px, ${flarePositionY.toFixed(2)}px, 0) scale(${flareScale.toFixed(3)})`;
      }

      if (starfieldRef.current) {
        starfieldRef.current.style.transform = `translate3d(0, ${starfieldY.toFixed(2)}%, 0)`;
      }

      if (dustRef.current) {
        dustRef.current.style.transform = `translate3d(0, ${foregroundDustY.toFixed(2)}%, 0)`;
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* 1. Deep Space Cosmic Background Environment (GPU Composited Layer) */}
      <div 
        ref={starfieldRef}
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
        }}
        className="absolute inset-x-0 -top-20 -bottom-20 bg-[#02040A] -z-20"
      >
        {/* Subtle, fine starfield particles */}
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
        
        {/* Deep ambient cosmic glow clouds */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* 2. Traveling Continuous Earth Container (GPU Composited via centralized rAF) */}
      <div
        ref={containerRef}
        style={{
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform, opacity',
        }}
        className="absolute inset-0 m-auto w-[520px] sm:w-[650px] lg:w-[780px] aspect-square flex items-center justify-center pointer-events-none"
      >
        {/* Atmospheric Core Glow (Isolated composited layer for rock-solid 60 FPS) */}
        <div
          ref={glowRef}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-indigo-600/10 blur-[110px] pointer-events-none -z-10"
        />

        {/* Electric Cyan Rim Light Halo */}
        <div
          ref={rimHaloRef}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform, opacity',
          }}
          className="absolute inset-8 rounded-full bg-sky-400/20 blur-[75px] pointer-events-none -z-10"
        />

        {/* Outer Thin Atmospheric Ring with Dynamic Horizon Shift */}
        <div 
          ref={rimRingRef}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
          className="absolute inset-3 rounded-full border border-sky-400/25 shadow-[0_0_90px_rgba(56,189,248,0.30)] pointer-events-none" 
        />

        {/* The Primary Earth Body (Exact photographic asset, realistic, high-res) */}
        <div
          ref={bodyRef}
          style={{
            transform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'transform',
          }}
          className="relative w-[90%] h-[90%] rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_120px_rgba(59,130,246,0.35)]"
        >
          {/* Base Photographic Surface Texture */}
          <img
            src={earthImage}
            alt=""
            className="w-full h-full object-cover rounded-full"
            loading="eager"
            decoding="async"
            style={{ 
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          />

          {/* High-Altitude Atmospheric Clouds & Weather Fronts (Leading 1.22x Parallax Modifier) */}
          <div
            ref={cloudsRef}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
            className="absolute -inset-4 rounded-full pointer-events-none opacity-40 mix-blend-screen overflow-hidden"
          >
            <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_35%_25%,_rgba(255,255,255,0.38)_0%,_rgba(224,242,254,0.18)_35%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_75%,_rgba(186,230,253,0.32)_0%,_transparent_55%)]" />
          </div>

          {/* Rayleigh Horizon Edge Glare (1.35x Parallax Speed Modifier) */}
          <div
            ref={rimGlareRef}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
            className="absolute inset-0 rounded-full shadow-[inset_0_0_75px_rgba(56,189,248,0.45)] pointer-events-none"
          />

          {/* Natural Atmospheric Edge Blend into Deep Space (#02040A) */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_transparent_65%,_rgba(2,4,10,0.55)_84%,_rgba(2,4,10,0.95)_100%)] pointer-events-none" />

          {/* Specular Sunrise Horizon Flare (Fastest: 1.55x Parallax Speed Modifier) */}
          <div
            ref={flareRef}
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              willChange: 'transform',
            }}
            className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-gradient-to-br from-white via-sky-300/60 to-transparent blur-xl pointer-events-none opacity-80 mix-blend-screen"
          />

          {/* Gentle, slow atmospheric light sweep across horizon */}
          <div
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12 pointer-events-none"
            style={{
              animation: 'earthSweep 18s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      {/* Foreground Orbital Dust Shimmer */}
      <div
        ref={dustRef}
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
        }}
        className="absolute inset-x-0 -top-32 -bottom-32 opacity-20 bg-[radial-gradient(#93c5fd_1.2px,transparent_1.2px)] [background-size:80px_80px] pointer-events-none -z-0 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />

      {/* Subtle Vignette Overlays for Maximum Global Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(2,4,10,0.4)_85%,_rgba(2,4,10,0.85)_100%)] pointer-events-none -z-0" />

      {/* Horizon Sweep Keyframe definition */}
      <style>{`
        @keyframes earthSweep {
          0%, 100% { transform: translateX(-140%) skewX(-12deg); opacity: 0; }
          15% { opacity: 1; }
          45% { transform: translateX(180%) skewX(-12deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
