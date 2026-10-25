import React from 'react';

export type ParticleVariant = 'hero' | 'services' | 'methodology' | 'case-studies' | 'about' | 'transition' | 'ambient';

interface FloatingParticlesProps {
  variant?: ParticleVariant;
  className?: string;
}

interface ParticleConfig {
  id: string;
  type: 'dot' | 'speck' | 'orb' | 'sparkle';
  top: string;
  left: string;
  size: number;
  color?: string;
  blur?: number;
  animClass: string;
  duration?: string;
  delay?: string;
  mobileHidden?: boolean;
}

const HERO_PARTICLES: ParticleConfig[] = [
  // Surrounding the cat illustration, waves, and floating logos
  { id: 'h1', type: 'speck', top: '12%', left: '18%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '14s', delay: '0s' },
  { id: 'h2', type: 'orb', top: '16%', left: '82%', size: 9, color: 'rgba(128, 216, 154, 0.45)', blur: 2, animClass: 'anim-particle-orb', duration: '18s', delay: '1.5s' },
  { id: 'h3', type: 'dot', top: '32%', left: '8%', size: 3, color: '#34A853', animClass: 'anim-particle-diag', duration: '16s', delay: '3s' },
  { id: 'h4', type: 'sparkle', top: '24%', left: '88%', size: 8, color: '#459B45', animClass: 'anim-particle-twinkle', duration: '7s', delay: '0.8s' },
  { id: 'h5', type: 'speck', top: '44%', left: '92%', size: 3.5, color: '#FFFFFF', animClass: 'anim-particle-up', duration: '15s', delay: '4s' },
  { id: 'h6', type: 'dot', top: '58%', left: '6%', size: 2.5, color: '#80D89A', animClass: 'anim-particle-down', duration: '19s', delay: '2s' },
  { id: 'h7', type: 'orb', top: '68%', left: '86%', size: 11, color: 'rgba(52, 168, 83, 0.35)', blur: 3, animClass: 'anim-particle-orb', duration: '20s', delay: '5s' },
  { id: 'h8', type: 'sparkle', top: '74%', left: '14%', size: 7, color: '#34A853', animClass: 'anim-particle-twinkle', duration: '6.5s', delay: '2.5s' },
  { id: 'h9', type: 'speck', top: '82%', left: '78%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '17s', delay: '6s' },
  { id: 'h10', type: 'dot', top: '22%', left: '38%', size: 2.5, color: '#34A853', animClass: 'anim-particle-down', duration: '18s', delay: '3.5s', mobileHidden: true },
  { id: 'h11', type: 'orb', top: '80%', left: '28%', size: 8, color: 'rgba(163, 231, 172, 0.5)', blur: 2, animClass: 'anim-particle-orb', duration: '21s', delay: '7s', mobileHidden: true },
  { id: 'h12', type: 'speck', top: '88%', left: '52%', size: 3, color: '#FFFFFF', animClass: 'anim-particle-up', duration: '16s', delay: '1s', mobileHidden: true },
  { id: 'h13', type: 'sparkle', top: '10%', left: '64%', size: 6, color: '#80D89A', animClass: 'anim-particle-twinkle', duration: '8s', delay: '4.2s', mobileHidden: true },
];

const SERVICES_PARTICLES: ParticleConfig[] = [
  // Behind the flagship card and 6 supporting service cards
  { id: 's1', type: 'orb', top: '8%', left: '12%', size: 10, color: 'rgba(128, 216, 154, 0.4)', blur: 3, animClass: 'anim-particle-orb', duration: '22s', delay: '0s' },
  { id: 's2', type: 'speck', top: '15%', left: '84%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '16s', delay: '2s' },
  { id: 's3', type: 'dot', top: '28%', left: '22%', size: 2.5, color: '#34A853', animClass: 'anim-particle-diag', duration: '18s', delay: '4s' },
  { id: 's4', type: 'sparkle', top: '35%', left: '78%', size: 7, color: '#34A853', animClass: 'anim-particle-twinkle', duration: '7.5s', delay: '1.2s' },
  { id: 's5', type: 'orb', top: '48%', left: '8%', size: 12, color: 'rgba(52, 168, 83, 0.3)', blur: 4, animClass: 'anim-particle-orb', duration: '24s', delay: '5s' },
  { id: 's6', type: 'speck', top: '56%', left: '92%', size: 3.5, color: '#FFFFFF', animClass: 'anim-particle-up', duration: '17s', delay: '3.5s' },
  { id: 's7', type: 'dot', top: '68%', left: '16%', size: 3, color: '#80D89A', animClass: 'anim-particle-down', duration: '20s', delay: '6s', mobileHidden: true },
  { id: 's8', type: 'sparkle', top: '75%', left: '86%', size: 7, color: '#80D89A', animClass: 'anim-particle-twinkle', duration: '8s', delay: '3s', mobileHidden: true },
  { id: 's9', type: 'orb', top: '88%', left: '42%', size: 9, color: 'rgba(128, 216, 154, 0.35)', blur: 3, animClass: 'anim-particle-orb', duration: '19s', delay: '7s', mobileHidden: true },
  { id: 's10', type: 'speck', top: '92%', left: '74%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '15s', delay: '2.5s', mobileHidden: true },
];

const METHODOLOGY_PARTICLES: ParticleConfig[] = [
  // Behind the 4 process cards (Discover, Strategy, Execute, Optimize)
  { id: 'm1', type: 'speck', top: '14%', left: '10%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '15s', delay: '0.5s' },
  { id: 'm2', type: 'orb', top: '22%', left: '88%', size: 10, color: 'rgba(128, 216, 154, 0.38)', blur: 3, animClass: 'anim-particle-orb', duration: '21s', delay: '3s' },
  { id: 'm3', type: 'dot', top: '42%', left: '26%', size: 2.5, color: '#34A853', animClass: 'anim-particle-diag', duration: '17s', delay: '1s' },
  { id: 'm4', type: 'sparkle', top: '55%', left: '72%', size: 7, color: '#34A853', animClass: 'anim-particle-twinkle', duration: '7s', delay: '4s' },
  { id: 'm5', type: 'speck', top: '70%', left: '15%', size: 3.5, color: '#FFFFFF', animClass: 'anim-particle-down', duration: '19s', delay: '6s' },
  { id: 'm6', type: 'orb', top: '84%', left: '82%', size: 8, color: 'rgba(52, 168, 83, 0.3)', blur: 2, animClass: 'anim-particle-orb', duration: '23s', delay: '2s', mobileHidden: true },
  { id: 'm7', type: 'dot', top: '88%', left: '48%', size: 2.5, color: '#80D89A', animClass: 'anim-particle-up', duration: '16s', delay: '5s', mobileHidden: true },
];

const CASE_STUDIES_PARTICLES: ParticleConfig[] = [
  // Behind verified case study cards
  { id: 'c1', type: 'orb', top: '10%', left: '80%', size: 11, color: 'rgba(128, 216, 154, 0.4)', blur: 3, animClass: 'anim-particle-orb', duration: '20s', delay: '1s' },
  { id: 'c2', type: 'speck', top: '20%', left: '14%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '16s', delay: '3s' },
  { id: 'c3', type: 'sparkle', top: '38%', left: '88%', size: 7.5, color: '#459B45', animClass: 'anim-particle-twinkle', duration: '6.5s', delay: '0.5s' },
  { id: 'c4', type: 'dot', top: '52%', left: '10%', size: 2.5, color: '#34A853', animClass: 'anim-particle-diag', duration: '18s', delay: '5s' },
  { id: 'c5', type: 'speck', top: '68%', left: '76%', size: 3.5, color: '#FFFFFF', animClass: 'anim-particle-down', duration: '15s', delay: '2s' },
  { id: 'c6', type: 'orb', top: '82%', left: '18%', size: 9, color: 'rgba(52, 168, 83, 0.32)', blur: 2, animClass: 'anim-particle-orb', duration: '22s', delay: '4.5s', mobileHidden: true },
  { id: 'c7', type: 'dot', top: '90%', left: '85%', size: 2.5, color: '#80D89A', animClass: 'anim-particle-up', duration: '17s', delay: '7s', mobileHidden: true },
];

const ABOUT_PARTICLES: ParticleConfig[] = [
  // Behind Founder & Agency Story cards
  { id: 'a1', type: 'speck', top: '12%', left: '15%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '16s', delay: '0s' },
  { id: 'a2', type: 'orb', top: '25%', left: '85%', size: 10, color: 'rgba(128, 216, 154, 0.35)', blur: 3, animClass: 'anim-particle-orb', duration: '21s', delay: '2s' },
  { id: 'a3', type: 'sparkle', top: '45%', left: '12%', size: 7, color: '#34A853', animClass: 'anim-particle-twinkle', duration: '7.2s', delay: '3.5s' },
  { id: 'a4', type: 'dot', top: '60%', left: '88%', size: 2.5, color: '#34A853', animClass: 'anim-particle-diag', duration: '17s', delay: '1.5s' },
  { id: 'a5', type: 'speck', top: '75%', left: '22%', size: 3.5, color: '#FFFFFF', animClass: 'anim-particle-down', duration: '18s', delay: '5s' },
  { id: 'a6', type: 'orb', top: '85%', left: '75%', size: 9, color: 'rgba(52, 168, 83, 0.3)', blur: 2, animClass: 'anim-particle-orb', duration: '20s', delay: '4s', mobileHidden: true },
];

const TRANSITION_PARTICLES: ParticleConfig[] = [
  // Gentle glow & drifting particles between sections
  { id: 't1', type: 'orb', top: '35%', left: '25%', size: 12, color: 'rgba(128, 216, 154, 0.35)', blur: 4, animClass: 'anim-particle-orb', duration: '18s', delay: '0s' },
  { id: 't2', type: 'speck', top: '50%', left: '45%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '14s', delay: '1s' },
  { id: 't3', type: 'sparkle', top: '40%', left: '60%', size: 6.5, color: '#34A853', animClass: 'anim-particle-twinkle', duration: '6.5s', delay: '2s' },
  { id: 't4', type: 'orb', top: '45%', left: '78%', size: 10, color: 'rgba(52, 168, 83, 0.3)', blur: 3, animClass: 'anim-particle-orb', duration: '20s', delay: '3s' },
  { id: 't5', type: 'dot', top: '55%', left: '32%', size: 2.5, color: '#34A853', animClass: 'anim-particle-diag', duration: '16s', delay: '4s', mobileHidden: true },
  { id: 't6', type: 'speck', top: '30%', left: '70%', size: 3, color: '#FFFFFF', animClass: 'anim-particle-down', duration: '15s', delay: '2.5s', mobileHidden: true },
];

const AMBIENT_PARTICLES: ParticleConfig[] = [
  // Sparse site-wide particles drifting across the background
  { id: 'amb1', type: 'speck', top: '8%', left: '22%', size: 3, color: '#80D89A', animClass: 'anim-particle-up', duration: '20s', delay: '0s' },
  { id: 'amb2', type: 'orb', top: '18%', left: '80%', size: 10, color: 'rgba(128, 216, 154, 0.3)', blur: 3, animClass: 'anim-particle-orb', duration: '26s', delay: '4s' },
  { id: 'amb3', type: 'dot', top: '28%', left: '12%', size: 2.5, color: '#34A853', animClass: 'anim-particle-diag', duration: '22s', delay: '8s' },
  { id: 'amb4', type: 'sparkle', top: '38%', left: '88%', size: 7, color: '#34A853', animClass: 'anim-particle-twinkle', duration: '8s', delay: '2s' },
  { id: 'amb5', type: 'speck', top: '48%', left: '30%', size: 3, color: '#FFFFFF', animClass: 'anim-particle-down', duration: '24s', delay: '6s' },
  { id: 'amb6', type: 'orb', top: '58%', left: '75%', size: 11, color: 'rgba(52, 168, 83, 0.28)', blur: 3.5, animClass: 'anim-particle-orb', duration: '25s', delay: '1s' },
  { id: 'amb7', type: 'dot', top: '68%', left: '18%', size: 2.5, color: '#80D89A', animClass: 'anim-particle-up', duration: '21s', delay: '7s' },
  { id: 'amb8', type: 'sparkle', top: '78%', left: '82%', size: 6.5, color: '#80D89A', animClass: 'anim-particle-twinkle', duration: '7.5s', delay: '3s' },
  { id: 'amb9', type: 'speck', top: '88%', left: '26%', size: 3.5, color: '#80D89A', animClass: 'anim-particle-diag', duration: '23s', delay: '5s' },
  { id: 'amb10', type: 'orb', top: '94%', left: '70%', size: 9, color: 'rgba(128, 216, 154, 0.3)', blur: 2.5, animClass: 'anim-particle-orb', duration: '27s', delay: '9s', mobileHidden: true },
];

const VARIANT_MAP: Record<ParticleVariant, ParticleConfig[]> = {
  hero: HERO_PARTICLES,
  services: SERVICES_PARTICLES,
  methodology: METHODOLOGY_PARTICLES,
  'case-studies': CASE_STUDIES_PARTICLES,
  about: ABOUT_PARTICLES,
  transition: TRANSITION_PARTICLES,
  ambient: AMBIENT_PARTICLES,
};

export const FloatingParticles: React.FC<FloatingParticlesProps> = React.memo(({
  variant = 'ambient',
  className = '',
}) => {
  const particles = VARIANT_MAP[variant] || AMBIENT_PARTICLES;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden z-0 select-none ${className}`}
    >
      {particles.map((p) => {
        const visibilityClass = p.mobileHidden ? 'hidden sm:block' : 'block';

        if (p.type === 'sparkle') {
          return (
            <div
              key={p.id}
              className={`absolute ${p.animClass} ${visibilityClass}`}
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-full h-full"
                fill={p.color || '#34A853'}
                style={{
                  filter: `drop-shadow(0 0 4px ${p.color || '#80D89A'})`,
                }}
              >
                <path d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z" />
              </svg>
            </div>
          );
        }

        if (p.type === 'orb') {
          return (
            <div
              key={p.id}
              className={`absolute rounded-full ${p.animClass} ${visibilityClass}`}
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color || 'rgba(128, 216, 154, 0.4)',
                filter: `blur(${p.blur || 3}px)`,
                boxShadow: `0 0 10px ${p.color || 'rgba(128, 216, 154, 0.5)'}`,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          );
        }

        if (p.type === 'speck') {
          return (
            <div
              key={p.id}
              className={`absolute rounded-full ${p.animClass} ${visibilityClass}`}
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color || '#80D89A',
                boxShadow: `0 0 8px ${p.color || '#80D89A'}`,
                animationDuration: p.duration,
                animationDelay: p.delay,
              }}
            />
          );
        }

        // Default 'dot'
        return (
          <div
            key={p.id}
            className={`absolute rounded-full ${p.animClass} ${visibilityClass}`}
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              backgroundColor: p.color || '#34A853',
              boxShadow: `0 0 5px ${p.color || '#34A853'}`,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          />
        );
      })}
    </div>
  );
});

FloatingParticles.displayName = 'FloatingParticles';
