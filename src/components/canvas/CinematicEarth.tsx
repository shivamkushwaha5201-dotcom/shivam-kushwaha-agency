import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CinematicEarthProps {
  className?: string;
  variant?: 'hero' | 'cta';
  intensity?: number;
}

export const CinematicEarth: React.FC<CinematicEarthProps> = ({
  className = '',
  variant = 'hero',
  intensity = 1.0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isDisposed = false;

    // Scene setup
    const scene = new THREE.Scene();
    
    // Calculate initial dimensions
    const rect = container.getBoundingClientRect();
    let width = rect.width || window.innerWidth;
    let height = rect.height || (variant === 'hero' ? window.innerHeight : 550);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    
    if (variant === 'hero') {
      camera.position.set(0, 0.1, 3.1);
    } else {
      camera.position.set(0, -0.3, 3.0);
    }

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35 * intensity;
    container.appendChild(renderer.domElement);

    // Earth System Group
    const earthGroup = new THREE.Group();
    if (variant === 'hero') {
      // Large cinematic curved horizon in lower-middle hero
      earthGroup.position.set(0, -1.02, 0);
      earthGroup.rotation.x = 0.24;
      earthGroup.rotation.z = -0.15;
    } else {
      earthGroup.position.set(0, -1.25, 0);
      earthGroup.rotation.x = 0.28;
      earthGroup.rotation.z = -0.08;
    }
    scene.add(earthGroup);

    // ==========================================
    // 1. Procedural Ultra-Detailed Earth Surface
    // ==========================================
    const createEarthTexture = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      // Deep Space / Ocean Gradient Base
      const oceanGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      oceanGrad.addColorStop(0, '#030D22');
      oceanGrad.addColorStop(0.25, '#051838');
      oceanGrad.addColorStop(0.5, '#062048');
      oceanGrad.addColorStop(0.75, '#041634');
      oceanGrad.addColorStop(1, '#020A1C');
      ctx.fillStyle = oceanGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Procedural Continents Drawing Helper
      const drawContinent = (
        cx: number,
        cy: number,
        rx: number,
        ry: number,
        baseColor: string,
        shelfColor: string
      ) => {
        // Continental Shelf / Coastal Waters Glow
        ctx.beginPath();
        const points = 44;
        for (let i = 0; i <= points; i++) {
          const angle = (i / points) * Math.PI * 2;
          const noise = 1 + Math.sin(angle * 7) * 0.14 + Math.cos(angle * 13) * 0.11;
          const px = cx + Math.cos(angle) * (rx + 16) * noise;
          const py = cy + Math.sin(angle) * (ry + 14) * noise;
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = shelfColor;
        ctx.globalAlpha = 0.45;
        ctx.fill();

        // Main Landmass
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

        // Mountain/Topographic Relief core
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
        ctx.fillStyle = '#16384C';
        ctx.globalAlpha = 0.6;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      };

      // North America
      drawContinent(500, 320, 190, 140, '#0E2436', '#0284c7');
      drawContinent(440, 370, 130, 95, '#122D42', '#0369a1');
      drawContinent(570, 240, 95, 75, '#102A3E', '#0284c7');
      // Central & South America
      drawContinent(640, 650, 115, 205, '#0C2234', '#0284c7');
      drawContinent(620, 590, 90, 130, '#0F283C', '#0369a1');
      // Europe & Eurasia
      drawContinent(1240, 300, 350, 165, '#0E263A', '#0284c7');
      drawContinent(1100, 320, 145, 115, '#0C2234', '#0369a1');
      drawContinent(1470, 340, 210, 135, '#112C42', '#0284c7');
      drawContinent(1360, 440, 130, 85, '#0E2438', '#0369a1');
      // Africa
      drawContinent(1060, 530, 145, 185, '#0C2132', '#0284c7');
      drawContinent(1080, 610, 105, 145, '#0A1C2C', '#0369a1');
      // Australia & Southeast Asia
      drawContinent(1650, 690, 115, 85, '#0E253A', '#0284c7');
      drawContinent(1530, 520, 55, 35, '#0F283C', '#0369a1');
      drawContinent(1580, 570, 55, 40, '#0D2235', '#0284c7');
      drawContinent(430, 240, 65, 55, '#122E44', '#0369a1');

      // Night City Lights Clusters
      const cityClusters = [
        [480, 310], [510, 300], [530, 340], [450, 330], [560, 320],
        [630, 590], [650, 670], [1040, 310], [1090, 280], [1160, 300],
        [1260, 330], [1300, 350], [1400, 340], [1460, 360], [1030, 470],
        [1640, 670], [520, 280], [1120, 290], [1340, 320]
      ];

      cityClusters.forEach(([cx, cy]) => {
        // Cluster center
        for (let i = 0; i < 7; i++) {
          const ox = cx + (Math.random() - 0.5) * 35;
          const oy = cy + (Math.random() - 0.5) * 25;
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
    };

    // ==========================================
    // 2. Procedural Swirling Clouds Texture
    // ==========================================
    const createCloudTexture = (): THREE.CanvasTexture => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (!ctx) return new THREE.CanvasTexture(canvas);

      ctx.fillStyle = 'rgba(0,0,0,0)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const drawCloudBand = (y: number, height: number, density: number) => {
        for (let x = 0; x < canvas.width; x += 14) {
          const cloudY = y + Math.sin(x * 0.025) * 20 + Math.cos(x * 0.06) * 14;
          const cloudH = height + Math.sin(x * 0.035) * 16;
          const alpha = (Math.sin(x * density) * 0.5 + 0.5) * 0.42;
          ctx.fillStyle = `rgba(224, 242, 254, ${alpha})`;
          ctx.beginPath();
          ctx.ellipse(x, cloudY, 32, cloudH, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      };

      drawCloudBand(170, 26, 0.04);
      drawCloudBand(240, 36, 0.025);
      drawCloudBand(330, 22, 0.035);
      drawCloudBand(390, 30, 0.02);

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.ClampToEdgeWrapping;
      return texture;
    };

    // 1. Earth Main Mesh (Radius 1.5 for expansive orbital curvature)
    const earthRadius = 1.48;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: createEarthTexture(),
      roughness: 0.6,
      metalness: 0.1,
    });
    const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earthMesh);

    // 2. Cloud Sphere (Floating slightly above Earth)
    const cloudGeometry = new THREE.SphereGeometry(earthRadius + 0.02, 64, 64);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      map: createCloudTexture(),
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
    earthGroup.add(cloudMesh);

    // 3. Realistic Rayleigh Atmosphere Glow (Custom Shader Halo)
    const atmosphereVertexShader = `
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;

    const atmosphereFragmentShader = `
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
    `;

    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius + 0.16, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: atmosphereVertexShader,
      fragmentShader: atmosphereFragmentShader,
      uniforms: {
        color: { value: new THREE.Color(0x2563eb) }, // Electric Blue
        horizonColor: { value: new THREE.Color(0x38bdf8) }, // Radiant Cyan Horizon
      },
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    earthGroup.add(atmosphereMesh);

    // 4. Inner Limb / Fresnel Rim on Earth Horizon
    const innerRimGeometry = new THREE.SphereGeometry(earthRadius + 0.008, 64, 64);
    const innerRimMaterial = new THREE.ShaderMaterial({
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
    const innerRimMesh = new THREE.Mesh(innerRimGeometry, innerRimMaterial);
    earthGroup.add(innerRimMesh);

    // 5. Sun Limb Flare / Specular Horizon Burst (as seen in the reference video)
    const flareCanvas = document.createElement('canvas');
    flareCanvas.width = 256;
    flareCanvas.height = 256;
    const fCtx = flareCanvas.getContext('2d');
    if (fCtx) {
      const grad = fCtx.createRadialGradient(128, 128, 0, 128, 128, 128);
      grad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      grad.addColorStop(0.2, 'rgba(125, 211, 252, 0.7)');
      grad.addColorStop(0.5, 'rgba(37, 99, 235, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      fCtx.fillStyle = grad;
      fCtx.fillRect(0, 0, 256, 256);
    }
    const flareTexture = new THREE.CanvasTexture(flareCanvas);
    const flareMaterial = new THREE.SpriteMaterial({
      map: flareTexture,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.85,
    });
    const flareSprite = new THREE.Sprite(flareMaterial);
    // Position on the upper-left horizon curve
    flareSprite.position.set(-0.85, 0.62, 0.8);
    flareSprite.scale.set(1.4, 1.4, 1.0);
    earthGroup.add(flareSprite);

    // ==========================================
    // 6. Cosmic Starfield Particles
    // ==========================================
    const starCount = 750;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount; i++) {
      const i3 = i * 3;
      starPositions[i3] = (Math.random() - 0.5) * 24;
      starPositions[i3 + 1] = (Math.random() - 0.5) * 18;
      starPositions[i3 + 2] = -Math.random() * 12 - 2;

      const c = Math.random();
      if (c < 0.35) {
        starColors[i3] = 0.55; starColors[i3 + 1] = 0.8; starColors[i3 + 2] = 1.0;
      } else if (c < 0.7) {
        starColors[i3] = 0.85; starColors[i3 + 1] = 0.92; starColors[i3 + 2] = 1.0;
      } else {
        starColors[i3] = 0.4; starColors[i3 + 1] = 0.6; starColors[i3 + 2] = 0.95;
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.038,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // ==========================================
    // 7. Dynamic Directional & Ambient Lighting
    // ==========================================
    // Key Sun Light (illumination on top-left of Earth)
    const sunLight = new THREE.DirectionalLight(0xf0f9ff, 3.4);
    sunLight.position.set(-3.8, 4.5, 3.0);
    scene.add(sunLight);

    // Rim Fill Light (deep electric blue)
    const rimLight = new THREE.DirectionalLight(0x2563eb, 2.4);
    rimLight.position.set(3.0, -1.8, -1.5);
    scene.add(rimLight);

    // Space Ambient Light (deep indigo)
    const ambientLight = new THREE.AmbientLight(0x040d1a, 1.4);
    scene.add(ambientLight);

    // Specular Violet Point Light
    const violetLight = new THREE.PointLight(0x6366f1, 1.6, 9);
    violetLight.position.set(0, 3.8, 1.8);
    scene.add(violetLight);

    // ==========================================
    // 8. Mouse Parallax & Smooth Rotation
    // ==========================================
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 0.4;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Responsive Resize Observer
    const updateSize = () => {
      if (!container || isDisposed) return;
      const currentRect = container.getBoundingClientRect();
      const newWidth = currentRect.width || window.innerWidth;
      const newHeight = currentRect.height || (variant === 'hero' ? window.innerHeight : 550);
      
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    const resizeObserver = new ResizeObserver(() => {
      updateSize();
    });
    resizeObserver.observe(container);

    // Render Loop
    let clock = new THREE.Clock();

    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      // Slow, majestic continuous rotation
      earthMesh.rotation.y += delta * 0.048;
      cloudMesh.rotation.y += delta * 0.068;

      // Mouse Parallax with smooth lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.045;
      currentMouseY += (targetMouseY - currentMouseY) * 0.045;

      if (variant === 'hero') {
        earthGroup.rotation.y = currentMouseX * 0.45;
        earthGroup.rotation.x = 0.24 - currentMouseY * 0.25;
        starField.rotation.y = currentMouseX * 0.06;
      } else {
        earthGroup.rotation.y = currentMouseX * 0.35;
        earthGroup.rotation.x = 0.28 - currentMouseY * 0.18;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();

      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      earthGeometry.dispose();
      earthMaterial.dispose();
      cloudGeometry.dispose();
      cloudMaterial.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      innerRimGeometry.dispose();
      innerRimMaterial.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, [variant, intensity]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
};
