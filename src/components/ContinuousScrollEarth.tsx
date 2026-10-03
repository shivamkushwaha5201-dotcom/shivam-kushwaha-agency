import React, { useEffect, useState } from 'react';
import { 
  motion, 
  useScroll, 
  useSpring, 
  useTransform, 
  useVelocity, 
  useMotionValue 
} from 'motion/react';
import earthImage from '../assets/images/earth_hero.jpg';

export const ContinuousScrollEarth: React.FC = () => {
  // Global scroll progress (0.00 at page top, 1.00 at page bottom)
  const { scrollYProgress } = useScroll();

  // Scroll velocity tracker from Framer Motion
  const scrollVelocity = useVelocity(scrollYProgress);

  // High-fidelity velocity spring for reactive physical momentum
  const velocitySpring = useSpring(scrollVelocity, {
    damping: 20,
    stiffness: 95,
    mass: 0.55,
  });

  // =========================================================================
  // LAYERED VELOCITY MULTIPLIERS: SCALE VS. TRANSLATION (3D DEPTH-OF-FIELD)
  // =========================================================================
  // Translation Velocity Multipliers (Linear inertia along X and Y axes)
  // When scrolling rapidly, translation experiences physical drag/momentum
  const velocityTranslateY = useTransform(velocitySpring, [-2, 0, 2], [-45, 0, 45]);
  const velocityTranslateX = useTransform(velocitySpring, [-2, 0, 2], [18, 0, -18]);

  // Scale Velocity Multiplier (Z-Axis Camera Dolly Zoom & Perspective Compression)
  // Scale reacts with a distinct velocity multiplier from translation, creating
  // a compelling 3D depth-of-field sensation as the user travels through the page
  const velocityScaleMultiplier = useTransform(velocitySpring, [-2, 0, 2], [-0.10, 0, 0.10]);

  // Angular Momentum Tilt Multiplier (Physical rotation reaction to scroll inertia)
  const velocityInertiaTilt = useTransform(velocitySpring, [-2, 0, 2], [-4.0, 0, 4.0]);

  // Atmospheric Volumetric Lag Multiplier (Moves at different speed than the solid body)
  const velocityAtmosphereLag = useTransform(velocitySpring, [-2, 0, 2], [-22, 0, 22]);

  // Dynamic 3D Depth-of-Field Blur (Optical lens softening during acceleration surges)
  const dofBlur = useTransform(
    velocitySpring, 
    [-2, -0.6, 0, 0.6, 2], 
    ['2.8px', '0px', '0px', '0px', '2.8px']
  );

  // Mouse parallax motion values with smooth physical dampening
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 28, stiffness: 45 });
  const smoothMouseY = useSpring(mouseY, { damping: 28, stiffness: 45 });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // =========================================================================
  // RAW SCROLL-LINKED PLANETARY TRAJECTORY (Numerical targets for useSpring)
  // =========================================================================
  // 0.00: HERO (Large in lower/right, rising from below)
  // 0.16: SERVICES (Moves smoothly through viewport to left, curved limb)
  // 0.32: PROCESS (Glowing planetary horizon behind 4-step journey)
  // 0.48: CASE STUDIES (Continues moving, atmospheric glow follows)
  // 0.64: INFLUENCER MARKETING (Background planetary curve)
  // 0.78: PRODUCT HUNT (Lower-center orbital trajectory)
  // 0.88: ABOUT (Gentle ambient backdrop preserving text clarity)
  // 1.00: FINAL CTA (Returns as a large cinematic visual)

  // Raw X coordinate (vw percentage numbers)
  const rawX = useTransform(
    scrollYProgress,
    [0.00, 0.16, 0.32, 0.48, 0.64, 0.78, 0.88, 1.00],
    isMobile
      ? [10, -10, 12, -12, 10, 0, 14, 6]
      : [28, -24, 22, -26, 24, 0, 28, 14]
  );

  // Raw Y coordinate (vh percentage numbers)
  const rawY = useTransform(
    scrollYProgress,
    [0.00, 0.16, 0.32, 0.48, 0.64, 0.78, 0.88, 1.00],
    isMobile
      ? [26, 15, -6, 12, 18, 26, 18, 22]
      : [22, 12, -10, 10, 18, 28, 14, 20]
  );

  // Raw Scale (Numerical scale factor)
  const rawScale = useTransform(
    scrollYProgress,
    [0.00, 0.16, 0.32, 0.48, 0.64, 0.78, 0.88, 1.00],
    isMobile
      ? [1.25, 1.10, 1.35, 1.15, 1.15, 1.25, 1.05, 1.40]
      : [1.60, 1.38, 1.75, 1.45, 1.42, 1.55, 1.22, 1.82]
  );

  // Raw Rotation (Degrees)
  const rawRotate = useTransform(
    scrollYProgress,
    [0.00, 0.25, 0.50, 0.75, 1.00],
    [0, 14, 28, 42, 56]
  );

  // =========================================================================
  // FRAMER MOTION useSpring HOOKS FOR ALL SCROLL-LINKED TRANSFORMATIONS
  // (translateX, translateY, scale, rotate - Weighted, Natural & Non-Robotic)
  // =========================================================================
  // 1. translateX spring momentum
  const springTranslateX = useSpring(rawX, {
    damping: 25,
    stiffness: 55,
    mass: 1.20,
    restDelta: 0.001,
  });

  // 2. translateY spring momentum
  const springTranslateY = useSpring(rawY, {
    damping: 27,
    stiffness: 50,
    mass: 1.35,
    restDelta: 0.001,
  });

  // 3. scale spring momentum
  const springScale = useSpring(rawScale, {
    damping: 29,
    stiffness: 62,
    mass: 0.98,
    restDelta: 0.001,
  });

  // 4. rotate spring momentum
  const springRotate = useSpring(rawRotate, {
    damping: 31,
    stiffness: 52,
    mass: 1.12,
    restDelta: 0.001,
  });

  // Final animated values combining spring momentum and differentiated velocity multipliers
  const translateX = useTransform(
    [springTranslateX, velocityTranslateX],
    ([baseX, vShift]: [number, number]) => `calc(${baseX}vw + ${vShift}px)`
  );

  const translateY = useTransform(
    [springTranslateY, velocityTranslateY],
    ([baseY, drag]: [number, number]) => `calc(${baseY}vh + ${drag}px)`
  );

  // Scale incorporates its own distinct velocity multiplier (3D depth dolly zoom)
  const scale = useTransform(
    [springScale, velocityScaleMultiplier],
    ([baseScale, dolly]: [number, number]) => Math.max(0.65, baseScale + dolly)
  );

  const rotate = useTransform(
    [springRotate, velocityInertiaTilt],
    ([rot, tilt]: [number, number]) => `${rot + tilt}deg`
  );

  // Opacity Modulation (Allows Earth to breathe naturally per section)
  const opacity = useTransform(
    scrollYProgress,
    [0.00, 0.16, 0.32, 0.48, 0.64, 0.78, 0.88, 1.00],
    [0.96, 0.75, 0.88, 0.72, 0.76, 0.82, 0.42, 0.96]
  );

  // =========================================================================
  // MULTI-TIER 3D PARALLAX DEPTH SPEED MODIFIERS (Using spring values)
  // =========================================================================
  // Tier 1: Deep cosmic background (0.25x speed)
  const starfieldY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);

  // Tier 2: Volumetric atmospheric core glow (Lagging with its own velocity multiplier)
  const glowOffsetX = useTransform(springTranslateX, [-30, 0, 30], [-18, 0, 18]);
  const glowOffsetY = useTransform(
    [springTranslateY, velocityAtmosphereLag],
    ([baseY, atmoLag]: [number, number]) => (baseY * 0.4) + atmoLag
  );
  const glowScale = useTransform(
    springScale,
    [1.1, 1.8],
    [1.15, 1.42]
  );

  // Tier 4: Atmospheric clouds & vortex drift (1.22x speed modifier, 1.32x rotation)
  const cloudOffsetX = useTransform(springTranslateX, [-30, 0, 30], [24, 0, -28]);
  const cloudOffsetY = useTransform(springTranslateY, [-15, 0, 30], [18, 0, -22]);
  const cloudRotate = useTransform(
    springRotate,
    [0, 56],
    ['0deg', '74deg']
  );

  // Tier 5: Rayleigh horizon limb glare (1.35x angular shift)
  const rimLightShiftX = useTransform(springTranslateX, [-30, 0, 30], [-35, 0, 45]);
  const rimLightShiftY = useTransform(springTranslateY, [-15, 0, 30], [-25, 0, 32]);
  const rimGlowIntensity = useTransform(
    scrollYProgress,
    [0.00, 0.32, 0.70, 1.00],
    [0.45, 0.75, 0.55, 0.85]
  );

  // Tier 6: Specular sunrise limb burst (1.55x fastest speed)
  const flarePositionX = useTransform(springTranslateX, [-30, 0, 30], [-55, 0, 65]);
  const flarePositionY = useTransform(springTranslateY, [-15, 0, 30], [-40, 0, 48]);
  const flareScale = useTransform(springScale, [1.1, 1.8], [1.1, 1.5]);

  // Tier 7: Foreground stardust (1.40x speed)
  const foregroundDustY = useTransform(scrollYProgress, [0, 1], ['0%', '-38%']);

  // Mouse Parallax Offsets
  const mouseParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-16, 16]);
  const mouseParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);
  const mouseCloudParallaxX = useTransform(smoothMouseX, [-0.5, 0.5], [-24, 24]);
  const mouseCloudParallaxY = useTransform(smoothMouseY, [-0.5, 0.5], [-18, 18]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep Space Cosmic Background Environment */}
      <motion.div 
        style={{ y: starfieldY }}
        className="absolute inset-x-0 -top-20 -bottom-20 bg-[#02040A] -z-20 will-change-transform"
      >
        {/* Subtle, fine starfield particles */}
        <div className="absolute inset-0 opacity-35 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_85%)]" />
        
        {/* Deep ambient cosmic glow clouds */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[650px] bg-blue-600/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-sky-500/5 blur-[150px] rounded-full" />
      </motion.div>

      {/* 2. Traveling Continuous Earth Container (Controlled by useSpring Hooks + Velocity Multipliers) */}
      <motion.div
        style={{
          translateX,
          translateY,
          scale,
          rotate,
          opacity,
          filter: dofBlur, // Dynamic 3D depth-of-field optical lens softening
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] sm:w-[650px] lg:w-[780px] aspect-square flex items-center justify-center will-change-transform"
      >
        {/* Atmospheric Core Glow (Lagging with distinct velocity multiplier) */}
        <motion.div
          style={{
            x: glowOffsetX,
            y: glowOffsetY,
            scale: glowScale,
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-500/20 to-indigo-600/10 blur-[110px] pointer-events-none -z-10 will-change-transform"
        />

        {/* Electric Cyan Rim Light Halo */}
        <motion.div
          style={{
            x: glowOffsetX,
            y: glowOffsetY,
            scale: glowScale,
            opacity: rimGlowIntensity,
          }}
          className="absolute inset-8 rounded-full bg-sky-400/20 blur-[75px] pointer-events-none -z-10 will-change-transform"
        />

        {/* Outer Thin Atmospheric Ring with Dynamic Horizon Shift */}
        <motion.div 
          style={{
            x: rimLightShiftX,
            y: rimLightShiftY,
          }}
          className="absolute inset-3 rounded-full border border-sky-400/25 shadow-[0_0_90px_rgba(56,189,248,0.30)] pointer-events-none will-change-transform" 
        />

        {/* The Primary Earth Body (Exact photographic asset, realistic, high-res) */}
        <motion.div
          style={{
            x: mouseParallaxX,
            y: mouseParallaxY,
          }}
          className="relative w-[90%] h-[90%] rounded-full overflow-hidden flex items-center justify-center shadow-[0_0_120px_rgba(59,130,246,0.35)] will-change-transform"
        >
          {/* Base Photographic Surface Texture */}
          <img
            src={earthImage}
            alt=""
            className="w-full h-full object-cover rounded-full"
            loading="eager"
            decoding="async"
          />

          {/* High-Altitude Atmospheric Clouds & Weather Fronts (Leading 1.22x Parallax Modifier) */}
          <motion.div
            style={{
              x: cloudOffsetX,
              y: cloudOffsetY,
              rotate: cloudRotate,
              translateX: mouseCloudParallaxX,
              translateY: mouseCloudParallaxY,
            }}
            className="absolute -inset-4 rounded-full pointer-events-none opacity-40 mix-blend-screen overflow-hidden will-change-transform"
          >
            <div className="w-full h-full rounded-full bg-[radial-gradient(ellipse_at_35%_25%,_rgba(255,255,255,0.38)_0%,_rgba(224,242,254,0.18)_35%,_transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_75%,_rgba(186,230,253,0.32)_0%,_transparent_55%)]" />
          </motion.div>

          {/* Rayleigh Horizon Edge Glare (1.35x Parallax Speed Modifier) */}
          <motion.div
            style={{
              x: rimLightShiftX,
              y: rimLightShiftY,
            }}
            className="absolute inset-0 rounded-full shadow-[inset_0_0_75px_rgba(56,189,248,0.45)] pointer-events-none will-change-transform"
          />

          {/* Natural Atmospheric Edge Blend into Deep Space (#02040A) */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_transparent_65%,_rgba(2,4,10,0.55)_84%,_rgba(2,4,10,0.95)_100%)] pointer-events-none" />

          {/* Specular Sunrise Horizon Flare (Fastest: 1.55x Parallax Speed Modifier) */}
          <motion.div
            style={{
              x: flarePositionX,
              y: flarePositionY,
              scale: flareScale,
            }}
            className="absolute -top-10 -left-10 w-44 h-44 rounded-full bg-gradient-to-br from-white via-sky-300/60 to-transparent blur-xl pointer-events-none opacity-80 mix-blend-screen will-change-transform"
          />

          {/* Gentle, slow atmospheric light sweep across horizon */}
          <motion.div
            animate={{
              x: ['-140%', '160%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 5,
            }}
            className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/12 to-transparent skew-x-12 pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* Foreground Orbital Dust Shimmer */}
      <motion.div
        style={{ y: foregroundDustY }}
        className="absolute inset-x-0 -top-32 -bottom-32 opacity-20 bg-[radial-gradient(#93c5fd_1.2px,transparent_1.2px)] [background-size:80px_80px] pointer-events-none -z-0 will-change-transform [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]"
      />

      {/* Subtle Vignette Overlays for Maximum Global Readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(2,4,10,0.4)_85%,_rgba(2,4,10,0.85)_100%)] pointer-events-none -z-0" />
    </div>
  );
};
