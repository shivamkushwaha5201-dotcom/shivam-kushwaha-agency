import React, { useEffect, useRef } from 'react';
import earthImage from '../assets/images/earth_hero.jpg';
import earthWebp from '../assets/images/earth_hero.webp';
import earthMobileWebp from '../assets/images/earth_hero_mobile.webp';
import { scrollCoordinator, ScrollMetrics } from '../lib/scrollCoordinator';

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
): boolean {
  const safeDt = Math.min(dt, 0.032);
  const diff = state.current - target;
  if (Math.abs(diff) < 0.0004 && Math.abs(state.velocity) < 0.0004) {
    state.current = target;
    state.velocity = 0;
    return false; // settled
  }
  const force = -stiffness * diff - damping * state.velocity;
  const accel = force / mass;
  state.velocity += accel * safeDt;
  state.current += state.velocity * safeDt;
  return true; // still in motion
}

export const ContinuousScrollEarth: React.FC = React.memo(() => {
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
    let winWidth = scrollCoordinator.metrics.winWidth;
    let winHeight = scrollCoordinator.metrics.winHeight;
    let isMobile = winWidth < 1024;

    let lastProgress = scrollCoordinator.metrics.progress;
    let lastTime = performance.now();

    // Spring states for all transformations (LOCKED trajectory & feel)
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

    // Raw Trajectory Constants (LOCKED)
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

    const onMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      targetMouseX = e.clientX / winWidth - 0.5;
      targetMouseY = e.clientY / winHeight - 0.5;
      scrollCoordinator.wake();
    };

    const handleResize = (m: ScrollMetrics) => {
      winWidth = m.winWidth;
      winHeight = m.winHeight;
      isMobile = winWidth < 1024;
    };

    // Unified frame callback inside the central ScrollCoordinator loop
    const handleFrame = (m: ScrollMetrics): boolean => {
      const now = m.now;
      const dt = Math.max(0.001, Math.min(0.05, (now - lastTime) / 1000));
      lastTime = now;

      const targetProgress = m.progress;
      const progressDelta = targetProgress - lastProgress;
      lastProgress = targetProgress;
      const rawVelocity = (progressDelta / dt) * 0.1;

      // Trajectory targets based on scroll progress
      const targetX = interpolate(targetProgress, STOPS, isMobile ? X_MOBILE : X_DESKTOP);
      const targetY = interpolate(targetProgress, STOPS, isMobile ? Y_MOBILE : Y_DESKTOP);
      const targetScale = interpolate(targetProgress, STOPS, isMobile ? SCALE_MOBILE : SCALE_DESKTOP);
      const targetRotate = interpolate(targetProgress, ROTATE_STOPS, ROTATE_VALUES);
      const targetOpacity = interpolate(targetProgress, STOPS, OPACITY_VALUES);

      // Step spring physics & track whether any spring is still active
      const activeVel = stepSpring(velocitySpring, rawVelocity, 95, 20, 0.55, dt);
      const activeX = stepSpring(springX, targetX, 55, 25, 1.20, dt);
      const activeY = stepSpring(springY, targetY, 50, 27, 1.35, dt);
      const activeScale = stepSpring(springScale, targetScale, 62, 29, 0.98, dt);
      const activeRotate = stepSpring(springRotate, targetRotate, 52, 31, 1.12, dt);
      const activeMouseX = !isMobile && stepSpring(smoothMouseX, targetMouseX, 45, 28, 1.0, dt);
      const activeMouseY = !isMobile && stepSpring(smoothMouseY, targetMouseY, 45, 28, 1.0, dt);

      // Velocity Multipliers & Offsets (Scale vs. Translation 3D Depth)
      const v = velocitySpring.current;
      const velocityTranslateX = interpolate(v, [-2, 0, 2], [18, 0, -18]);
      const velocityTranslateY = interpolate(v, [-2, 0, 2], [-45, 0, 45]);
      const velocityScale = interpolate(v, [-2, 0, 2], [-0.10, 0, 0.10]);
      const velocityTilt = interpolate(v, [-2, 0, 2], [-4.0, 0, 4.0]);
      const velocityAtmoLag = interpolate(v, [-2, 0, 2], [-22, 0, 22]);

      // Pixel Coordinates
      const curX = springX.current;
      const curY = springY.current;
      const curScale = Math.max(0.65, springScale.current + velocityScale);
      const curRotate = springRotate.current + velocityTilt;

      const pxX = (curX / 100) * winWidth + velocityTranslateX;
      const pxY = (curY / 100) * winHeight + velocityTranslateY;

      // Parallax Tiers Calculations
      const starfieldPxY = targetProgress * -48;
      const glowOffsetX = interpolate(curX, [-30, 0, 30], [-18, 0, 18]);
      const glowOffsetY = curY * 0.4 + velocityAtmoLag;
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

      const foregroundDustPxY = targetProgress * -110;

      const mousePX = isMobile ? 0 : interpolate(smoothMouseX.current, [-0.5, 0.5], [-16, 16]);
      const mousePY = isMobile ? 0 : interpolate(smoothMouseY.current, [-0.5, 0.5], [-12, 12]);
      const mouseCloudPX = isMobile ? 0 : interpolate(smoothMouseX.current, [-0.5, 0.5], [-24, 24]);
      const mouseCloudPY = isMobile ? 0 : interpolate(smoothMouseY.current, [-0.5, 0.5], [-18, 18]);

      // Direct GPU 3D Transform Application (translate3d + scale3d + rotate3d)
      if (containerRef.current) {
        containerRef.current.style.transform = `translate3d(${pxX.toFixed(1)}px, ${pxY.toFixed(1)}px, 0) scale3d(${curScale.toFixed(3)}, ${curScale.toFixed(3)}, 1) rotate3d(0, 0, 1, ${curRotate.toFixed(2)}deg)`;
        containerRef.current.style.opacity = targetOpacity.toFixed(3);
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowOffsetX.toFixed(1)}px, ${glowOffsetY.toFixed(1)}px, 0) scale3d(${glowScale.toFixed(3)}, ${glowScale.toFixed(3)}, 1)`;
      }

      if (rimHaloRef.current) {
        rimHaloRef.current.style.transform = `translate3d(${glowOffsetX.toFixed(1)}px, ${glowOffsetY.toFixed(1)}px, 0) scale3d(${glowScale.toFixed(3)}, ${glowScale.toFixed(3)}, 1)`;
        rimHaloRef.current.style.opacity = rimGlowIntensity.toFixed(2);
      }

      if (rimRingRef.current) {
        rimRingRef.current.style.transform = `translate3d(${rimLightShiftX.toFixed(1)}px, ${rimLightShiftY.toFixed(1)}px, 0)`;
      }

      if (bodyRef.current) {
        bodyRef.current.style.transform = `translate3d(${mousePX.toFixed(1)}px, ${mousePY.toFixed(1)}px, 0)`;
      }

      if (cloudsRef.current) {
        cloudsRef.current.style.transform = `translate3d(${(cloudOffsetX + mouseCloudPX).toFixed(1)}px, ${(cloudOffsetY + mouseCloudPY).toFixed(1)}px, 0) rotate3d(0, 0, 1, ${cloudRotate.toFixed(1)}deg)`;
      }

      if (rimGlareRef.current) {
        rimGlareRef.current.style.transform = `translate3d(${rimLightShiftX.toFixed(1)}px, ${rimLightShiftY.toFixed(1)}px, 0)`;
      }

      if (flareRef.current) {
        flareRef.current.style.transform = `translate3d(${flarePositionX.toFixed(1)}px, ${flarePositionY.toFixed(1)}px, 0) scale3d(${flareScale.toFixed(2)}, ${flareScale.toFixed(2)}, 1)`;
      }

      if (starfieldRef.current) {
        starfieldRef.current.style.transform = `translate3d(0, ${starfieldPxY.toFixed(1)}px, 0)`;
      }

      if (dustRef.current) {
        dustRef.current.style.transform = `translate3d(0, ${foregroundDustPxY.toFixed(1)}px, 0)`;
      }

      return (
        activeVel ||
        activeX ||
        activeY ||
        activeScale ||
        activeRotate ||
        activeMouseX ||
        activeMouseY ||
        Math.abs(progressDelta) > 0.0001
      );
    };

    const unsubscribe = scrollCoordinator.subscribe(handleFrame, handleResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    return () => {
      unsubscribe();
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* 1. Deep Space Cosmic Background Environment */}
      <div
        ref={starfieldRef}
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
        }}
        className="absolute inset-x-0 -top-20 -bottom-20 bg-[#02050B] -z-20"
      >
        {/* Subtle, fine starfield particles */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:56px_56px]" />

        {/* Pre-baked radial cosmic glow clouds (zero blur filter cost) */}
        <div
          className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(37,99,235,0.07) 0%, rgba(37,99,235,0.025) 45%, transparent 72%)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[650px] h-[650px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(14,165,233,0.07) 0%, rgba(14,165,233,0.025) 45%, transparent 72%)',
          }}
        />
      </div>

      {/* 2. Traveling Continuous Earth Container (Primary GPU Composited Layer) */}
      <div
        ref={containerRef}
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform, opacity',
        }}
        className="absolute inset-0 m-auto w-[520px] sm:w-[650px] lg:w-[780px] aspect-square flex items-center justify-center pointer-events-none"
      >
        {/* Atmospheric Core Glow (Zero-blur radial gradient texture for instant GPU scaling) */}
        <div
          ref={glowRef}
          style={{
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            background:
              'radial-gradient(circle, rgba(37,99,235,0.36) 0%, rgba(14,165,233,0.22) 38%, rgba(79,70,229,0.08) 58%, transparent 74%)',
          }}
          className="absolute -inset-24 rounded-full pointer-events-none -z-10"
        />

        {/* Electric Cyan Rim Light Halo (Zero-blur radial gradient texture) */}
        <div
          ref={rimHaloRef}
          style={{
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            background:
              'radial-gradient(circle, rgba(56,189,248,0.26) 0%, rgba(56,189,248,0.12) 44%, transparent 70%)',
          }}
          className="absolute -inset-12 rounded-full pointer-events-none -z-10"
        />

        {/* Outer Thin Atmospheric Ring with Dynamic Horizon Shift (Radial glow instead of expensive box-shadow) */}
        <div
          ref={rimRingRef}
          style={{
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
            background:
              'radial-gradient(circle, transparent 66%, rgba(56,189,248,0.14) 70%, transparent 74%)',
          }}
          className="absolute inset-3 rounded-full border border-sky-400/25 pointer-events-none"
        />

        {/* The Primary Earth Body (Exact photographic asset, responsive WebP + JPG fallback) */}
        <div
          ref={bodyRef}
          style={{
            transform: 'translate3d(0, 0, 0)',
            backfaceVisibility: 'hidden',
          }}
          className="relative w-[90%] h-[90%] rounded-full overflow-hidden flex items-center justify-center ring-1 ring-sky-400/20"
        >
          <picture className="w-full h-full block">
            <source media="(max-width: 767px)" srcSet={earthMobileWebp} type="image/webp" />
            <source media="(min-width: 768px)" srcSet={earthWebp} type="image/webp" />
            <img
              src={earthImage}
              alt=""
              className="w-full h-full object-cover rounded-full"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>

          {/* High-Altitude Atmospheric Clouds & Weather Fronts */}
          <div
            ref={cloudsRef}
            style={{
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
            }}
            className="absolute -inset-4 rounded-full pointer-events-none opacity-35 overflow-hidden"
          >
            <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_35%_25%,_rgba(255,255,255,0.35)_0%,_rgba(224,242,254,0.16)_35%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_75%,_rgba(186,230,253,0.28)_0%,_transparent_55%)]" />
          </div>

          {/* Rayleigh Horizon Edge Glare (Radial gradient ring instead of inset box-shadow) */}
          <div
            ref={rimGlareRef}
            style={{
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              background:
                'radial-gradient(circle, transparent 58%, rgba(56,189,248,0.22) 84%, rgba(56,189,248,0.42) 100%)',
            }}
            className="absolute inset-0 rounded-full pointer-events-none"
          />

          {/* Natural Atmospheric Edge Blend into Deep Space (#02050B) */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_transparent_65%,_rgba(2,5,11,0.55)_84%,_rgba(2,5,11,0.95)_100%)] pointer-events-none" />

          {/* Specular Sunrise Horizon Flare */}
          <div
            ref={flareRef}
            style={{
              transform: 'translate3d(0, 0, 0)',
              backfaceVisibility: 'hidden',
              background:
                'radial-gradient(circle, rgba(255,255,255,0.75) 0%, rgba(125,211,252,0.38) 38%, transparent 70%)',
            }}
            className="absolute -top-12 -left-12 w-52 h-52 rounded-full pointer-events-none opacity-80"
          />
        </div>
      </div>

      {/* Foreground Orbital Dust Shimmer */}
      <div
        ref={dustRef}
        style={{
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
        }}
        className="absolute inset-x-0 -top-32 -bottom-32 opacity-18 bg-[radial-gradient(#93c5fd_1.2px,transparent_1.2px)] [background-size:80px_80px] pointer-events-none -z-0"
      />

      {/* Subtle Vignette Overlays for Maximum Global Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(2,5,11,0.4)_85%,_rgba(2,5,11,0.85)_100%)] pointer-events-none -z-0" />
    </div>
  );
});
