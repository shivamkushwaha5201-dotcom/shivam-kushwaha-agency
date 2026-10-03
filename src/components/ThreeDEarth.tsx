import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// 1. Procedural High-Resolution Earth Texture
function createEarthSurfaceTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  // Deep Ocean Base Gradient
  const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
  oceanGrad.addColorStop(0, '#030D24');
  oceanGrad.addColorStop(0.25, '#051838');
  oceanGrad.addColorStop(0.5, '#06224C');
  oceanGrad.addColorStop(0.75, '#041634');
  oceanGrad.addColorStop(1, '#020A1E');
  ctx.fillStyle = oceanGrad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Procedural Landmass Contours
  const drawLandmass = (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    baseColor: string,
    shelfColor: string
  ) => {
    // Continental Shelf / Coastal Waters Glow
    ctx.beginPath();
    const points = 40;
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const noise = 1 + Math.sin(angle * 7) * 0.14 + Math.cos(angle * 13) * 0.11;
      const px = cx + Math.cos(angle) * (rx + 18) * noise;
      const py = cy + Math.sin(angle) * (ry + 15) * noise;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = shelfColor;
    ctx.globalAlpha = 0.45;
    ctx.fill();

    // Main Continent Body
    ctx.beginPath();
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const noise = 1 + Math.sin(angle * 7) * 0.14 + Math.cos(angle * 13) * 0.11;
      const px = cx + Math.cos(angle) * rx * noise;
      const py = cy + Math.sin(angle) * ry * noise;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = baseColor;
    ctx.globalAlpha = 0.95;
    ctx.fill();

    // Interior Topography Elevation
    ctx.beginPath();
    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const noise = 1 + Math.sin(angle * 9) * 0.12 + Math.cos(angle * 15) * 0.1;
      const px = cx + Math.cos(angle) * (rx * 0.65) * noise;
      const py = cy + Math.sin(angle) * (ry * 0.65) * noise;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = '#173D54';
    ctx.globalAlpha = 0.6;
    ctx.fill();
    ctx.globalAlpha = 1.0;
  };

  // Continents: Americas, Europe, Africa, Asia, Australia
  drawLandmass(500, 320, 190, 140, '#0E2436', '#0284c7');
  drawLandmass(440, 370, 130, 95, '#122D42', '#0369a1');
  drawLandmass(570, 240, 95, 75, '#102A3E', '#0284c7');
  drawLandmass(640, 650, 115, 205, '#0C2234', '#0284c7');
  drawLandmass(620, 590, 90, 130, '#0F283C', '#0369a1');
  drawLandmass(1240, 300, 350, 165, '#0E263A', '#0284c7');
  drawLandmass(1100, 320, 145, 115, '#0C2234', '#0369a1');
  drawLandmass(1470, 340, 210, 135, '#112C42', '#0284c7');
  drawLandmass(1360, 440, 130, 85, '#0E2438', '#0369a1');
  drawLandmass(1060, 530, 145, 185, '#0C2132', '#0284c7');
  drawLandmass(1080, 610, 105, 145, '#0A1C2C', '#0369a1');
  drawLandmass(1650, 690, 115, 85, '#0E253A', '#0284c7');
  drawLandmass(1530, 520, 55, 35, '#0F283C', '#0369a1');
  drawLandmass(1580, 570, 55, 40, '#0D2235', '#0284c7');

  // Night City Lights
  const cityClusters = [
    [480, 310], [510, 300], [530, 340], [450, 330], [560, 320],
    [630, 590], [650, 670], [1040, 310], [1090, 280], [1160, 300],
    [1260, 330], [1300, 350], [1400, 340], [1460, 360], [1030, 470],
    [1640, 670], [520, 280], [1120, 290]
  ];

  cityClusters.forEach(([cx, cy]) => {
    for (let i = 0; i < 6; i++) {
      const ox = cx + (Math.random() - 0.5) * 32;
      const oy = cy + (Math.random() - 0.5) * 22;
      const r = Math.random() * 2 + 1;
      
      ctx.beginPath();
      ctx.arc(ox, oy, r * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(56, 189, 248, 0.28)';
      ctx.fill();

      ctx.beginPath();
      ctx.arc(ox, oy, r, 0, Math.PI * 2);
      ctx.fillStyle = '#FFE2A3';
      ctx.fill();
    }
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// 2. Procedural Clouds Texture
function createEarthCloudTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.CanvasTexture(canvas);

  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const drawBand = (y: number, height: number, density: number) => {
    for (let x = 0; x < canvas.width; x += 14) {
      const cloudY = y + Math.sin(x * 0.025) * 18 + Math.cos(x * 0.06) * 12;
      const cloudH = height + Math.sin(x * 0.035) * 15;
      const alpha = (Math.sin(x * density) * 0.5 + 0.5) * 0.4;
      ctx.fillStyle = `rgba(224, 242, 254, ${alpha})`;
      ctx.beginPath();
      ctx.ellipse(x, cloudY, 30, cloudH, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  drawBand(170, 24, 0.04);
  drawBand(240, 34, 0.025);
  drawBand(330, 22, 0.035);
  drawBand(390, 28, 0.02);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

// 3. Inner Rotating Earth Group Component
function EarthModel() {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  const earthTexture = useMemo(() => createEarthSurfaceTexture(), []);
  const cloudTexture = useMemo(() => createEarthCloudTexture(), []);

  // Atmospheric Shaders
  const atmosphereMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        uniform vec3 color;
        uniform vec3 horizonColor;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float intensity = pow(0.7 - dot(vNormal, viewDir), 2.2);
          vec3 finalColor = mix(color, horizonColor, pow(intensity, 0.65));
          gl_FragColor = vec4(finalColor, intensity * 0.98);
        }
      `,
      uniforms: {
        color: { value: new THREE.Color(0x2563eb) },
        horizonColor: { value: new THREE.Color(0x38bdf8) },
      },
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  const innerRimMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float rim = 1.0 - max(dot(vNormal, vec3(0.0, 0.0, 1.0)), 0.0);
          rim = pow(rim, 3.2);
          gl_FragColor = vec4(0.22, 0.58, 1.0, rim * 0.85);
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.FrontSide,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  // Sunrise/Limb Flare Sprite
  const flareTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      grad.addColorStop(0.2, 'rgba(125, 211, 252, 0.7)');
      grad.addColorStop(0.5, 'rgba(37, 99, 235, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 256, 256);
    }
    return new THREE.CanvasTexture(canvas);
  }, []);

  // Continuous slow rotation via useFrame
  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.048;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.068;
    }

    // Subtle pointer parallax
    if (groupRef.current) {
      const targetY = state.pointer.x * 0.22;
      const targetX = 0.24 - state.pointer.y * 0.14;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    }
  });

  const earthRadius = 1.48;

  return (
    <group ref={groupRef} position={[0, -1.02, 0]} rotation={[0.24, 0, -0.15]}>
      {/* 1. Earth Body Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[earthRadius, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* 2. Swirling Cloud Layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[earthRadius + 0.02, 64, 64]} />
        <meshStandardMaterial
          map={cloudTexture}
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* 3. Outer Atmospheric Rayleigh Glow Halo */}
      <mesh material={atmosphereMaterial}>
        <sphereGeometry args={[earthRadius + 0.16, 64, 64]} />
      </mesh>

      {/* 4. Inner Limb / Fresnel Rim */}
      <mesh material={innerRimMaterial}>
        <sphereGeometry args={[earthRadius + 0.008, 64, 64]} />
      </mesh>

      {/* 5. Sunrise Limb Flare Burst */}
      <sprite position={[-0.85, 0.62, 0.8]} scale={[1.4, 1.4, 1.0]}>
        <spriteMaterial
          map={flareTexture}
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.85}
        />
      </sprite>
    </group>
  );
}

// 4. Main ThreeDEarth Canvas Export
export interface ThreeDEarthProps {
  className?: string;
}

export const ThreeDEarth: React.FC<ThreeDEarthProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0.1, 3.1], fov: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35,
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Subtle Cosmic Starfield using @react-three/drei */}
          <Stars
            radius={80}
            depth={50}
            count={750}
            factor={3}
            saturation={0.5}
            fade
            speed={0.5}
          />

          {/* Lighting */}
          {/* Main Key Sunlight from top-left */}
          <directionalLight position={[-3.8, 4.5, 3.0]} intensity={3.4} color="#f0f9ff" />
          {/* Electric Blue Rim Light from bottom-right */}
          <directionalLight position={[3.0, -1.8, -1.5]} intensity={2.4} color="#2563eb" />
          {/* Ambient Cosmic Fill */}
          <ambientLight intensity={1.4} color="#040d1a" />
          {/* Specular Violet Accent */}
          <pointLight position={[0, 3.8, 1.8]} intensity={1.6} distance={9} color="#6366f1" />

          {/* The Earth System Model */}
          <EarthModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDEarth;
