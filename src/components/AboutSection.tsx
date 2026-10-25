import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight,
  Mail,
  Phone,
  Check
} from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../data/portfolioData';
import shivamAboutPhoto from '../assets/images/Screenshot_2026-09-02-09-30-52-50_99c04817c0de5652397fc8b56c3b3817.jpg';
import shivamProfileWebp from '../assets/images/shivam_profile_opt.webp';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';
import brandLogoWebp from '../assets/images/brand_logo_opt.webp';
import { StaggerContainer, StaggerItem } from './ui/ScrollReveal';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = React.memo(({ onOpenBooking }) => {
  useEffect(() => {
    try {
      const scriptEl = document.getElementById('axentailabs-structured-data');
      if (scriptEl && scriptEl.textContent) {
        const data = JSON.parse(scriptEl.textContent);
        if (data && Array.isArray(data['@graph'])) {
          const person = data['@graph'].find((item: any) => item['@type'] === 'Person');
          const org = data['@graph'].find((item: any) => item['@type'] === 'Organization');
          const origin = window.location.origin;

          if (person && shivamAboutPhoto) {
            person.image = shivamAboutPhoto.startsWith('http')
              ? shivamAboutPhoto
              : `${origin}${shivamAboutPhoto.startsWith('/') ? '' : '/'}${shivamAboutPhoto}`;
          }
          if (org && brandLogo) {
            org.logo = brandLogo.startsWith('http')
              ? brandLogo
              : `${origin}${brandLogo.startsWith('/') ? '' : '/'}${brandLogo}`;
          }
          scriptEl.textContent = JSON.stringify(data, null, 2);
        }
      }
    } catch {
      // Safe fallback
    }
  }, []);

  const highlights = [
    'Product Hunt launch strategy, positioning, and real-time coordination (flagship focus).',
    'LinkedIn personal branding and executive positioning for founders and leadership.',
    'End-to-end company page management, editorial scheduling, and audience interaction.',
    'Vetted creator partnerships and distribution across LinkedIn, X, and tech communities.',
    'Modern website development that communicates clear value propositions.',
    'Direct founder-to-founder strategic collaboration with no agency bureaucracy.'
  ];

  return (
    <section id="about" className="scroll-mt-24 md:scroll-mt-28 py-20 sm:py-24 md:py-28 bg-[#FFFFFF]/75 backdrop-blur-[1.5px] relative overflow-hidden border-t border-[#E5E9E5] text-[#111111] transition-colors duration-200 z-10">
      {/* Soft Ambient Mint Glow with Continuous Breathing Motion */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-radial-mint-ambient animate-section-glow opacity-80"
        />
        <div
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[520px] h-[520px] rounded-full animate-ambient-float-2 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(69, 155, 69, 0.15) 0%, rgba(229, 245, 229, 0.45) 45%, transparent 70%)',
            filter: 'blur(65px)',
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column */}
          <StaggerContainer 
            stagger={0.09}
            delay={0.05}
            className="lg:col-span-7 space-y-6"
          >
            
            {/* Unboxed Metadata */}
            <StaggerItem>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#246B32] uppercase">
                <span>ABOUT AXENTAI LABS</span>
                <span aria-hidden="true">·</span>
                <span>FOUNDER LED</span>
              </div>
            </StaggerItem>

            {/* Bold Headline */}
            <StaggerItem>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-[#111111] tracking-tight leading-[1.14] uppercase">
                BUILT AROUND STRATEGY. <br className="hidden sm:inline" />
                <span className="text-[#248A3D]">FOCUSED ON GROWTH.</span>
              </h2>
            </StaggerItem>

            <StaggerItem>
              <div className="space-y-3">
                <p className="text-base sm:text-lg text-[#111111] leading-relaxed font-sans font-medium">
                  We work with founders and modern brands to clarify their message, prepare launches, strengthen their digital presence, and build consistent visibility across relevant channels.
                </p>
                <p className="text-sm sm:text-base text-[#555B55] leading-relaxed font-sans">
                  Founded by <strong className="text-[#246B32] font-semibold">Shivam Kushwaha</strong>, AxentAI Labs operates as an agile growth partner for startups and technology companies. While Product Hunt launch support is our flagship offering (~65% focus), we provide ongoing personal branding, social presence operations, creator partnerships, and digital development so your brand compounds visibility far beyond a single release.
                </p>
              </div>
            </StaggerItem>

            {/* Bullet Points with Green Accents */}
            <StaggerItem>
              <div className="space-y-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E5F5E5] border border-[#459B45]/30 text-[#246B32] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#111111] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </StaggerItem>

            {/* CTA Buttons */}
            <StaggerItem>
              <div className="pt-4 flex flex-wrap items-center gap-3.5">
                <Button
                  size="lg"
                  onClick={onOpenBooking}
                  className="bg-[#459B45] hover:bg-[#246B32] text-[#FFFFFF] text-xs sm:text-sm font-bold px-7 py-3 rounded-full border border-[#459B45]/30 shadow-lg shadow-[#459B45]/20 group hover:scale-102 transition-all cursor-pointer"
                >
                  <span>Book a Call</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>

                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full border border-[#E5E9E5] bg-[#FFFFFF] text-[#111111] text-xs sm:text-sm font-bold hover:bg-[#F7F9F7] hover:border-[#459B45] transition-all flex items-center gap-2 hover:scale-102 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </StaggerItem>

          </StaggerContainer>

          {/* Right Column: Headshot with Layered Depth */}
          <motion.div 
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative pt-8 sm:pt-10"
          >
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              
              {/* Background Geometric Wireframe Arcs */}
              <div className="absolute -top-6 -left-6 w-72 h-72 rounded-full border border-[#459B45]/30 pointer-events-none -z-10" />
              <div className="absolute -bottom-6 -right-6 w-80 h-80 rounded-full border border-[#E5E9E5] pointer-events-none -z-10" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#E5E9E5] bg-[#F7F9F7] shadow-xl shadow-black/5 aspect-[4/5] sm:aspect-[4/5] group">
                <picture className="w-full h-full block">
                  <source srcSet={shivamProfileWebp} type="image/webp" />
                  <img
                    src={shivamAboutPhoto}
                    alt="Shivam Kushwaha, Founder & CEO of Axentailabs"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-[center_38%] group-hover:scale-104 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </picture>

                {/* Bottom Floating Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#FFFFFF]/95 border border-[#E5E9E5] shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full overflow-hidden border border-[#459B45] p-0.5 bg-[#FFFFFF] shadow-xs flex items-center justify-center shrink-0">
                      <picture className="w-full h-full block">
                        <source srcSet={brandLogoWebp} type="image/webp" />
                        <img
                          src={brandLogo}
                          alt="Axentailabs Logo"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover rounded-full"
                          referrerPolicy="no-referrer"
                        />
                      </picture>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#111111]">Shivam Kushwaha</div>
                      <div className="text-[10px] text-[#555B55]">Founder & CEO, Axentailabs</div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#246B32] bg-[#E5F5E5] px-2.5 py-1 rounded-full border border-[#459B45]/30">
                    Founder Led
                  </span>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 p-3 rounded-2xl bg-[#FFFFFF] border border-[#E5E9E5] shadow-xl flex items-center gap-2 text-xs font-bold text-[#111111] hidden sm:flex">
                <div className="w-7 h-7 rounded-full bg-[#E5F5E5] text-[#246B32] flex items-center justify-center font-bold">
                  ✓
                </div>
                <span>Founder Led</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Founder Social / Contact Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 pt-12 border-t border-[#E5E9E5]"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <div className="text-[11px] font-mono font-semibold uppercase tracking-[0.25em] text-[#246B32]">
                CONNECT WITH SHIVAM
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#111111] tracking-tight uppercase">
                LET&apos;S CONNECT
              </h3>
              <p className="text-xs sm:text-sm text-[#555B55] font-sans leading-relaxed">
                Follow my work, Product Hunt launches and founder journey across the platforms below.
              </p>
            </div>

            {/* Four Clean Premium Social Buttons (4 columns on desktop, 2 columns on mobile) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 w-full lg:w-auto lg:min-w-[560px]">
              {/* 1. Product Hunt */}
              <a
                href="https://www.producthunt.com/@shivam_kushwaha16"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] hover:border-[#459B45] hover:bg-[#E5F5E5]/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#459B45]/15 transition-[border-color,transform,box-shadow,background-color] duration-250"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <svg
                    className="w-4 h-4 text-[#246B32] shrink-0 transition-transform duration-250 group-hover:scale-105"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 0 0 0-3.6zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1.604 12.4h-3.405V18H7.801V6h5.803a4.2 4.2 0 1 1 0 8.4z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#246B32] truncate">
                    Product Hunt
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555B55] group-hover:text-[#246B32] group-hover:translate-x-0.5 transition-transform duration-250 shrink-0" />
              </a>

              {/* 2. LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shivam-k-6a462337b"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] hover:border-[#459B45] hover:bg-[#E5F5E5]/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#459B45]/15 transition-[border-color,transform,box-shadow,background-color] duration-250"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <svg
                    className="w-4 h-4 text-[#246B32] shrink-0 transition-transform duration-250 group-hover:scale-105"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#246B32] truncate">
                    LinkedIn
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555B55] group-hover:text-[#246B32] group-hover:translate-x-0.5 transition-transform duration-250 shrink-0" />
              </a>

              {/* 3. X / Twitter */}
              <a
                href="https://x.com/shivam100x"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] hover:border-[#459B45] hover:bg-[#E5F5E5]/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#459B45]/15 transition-[border-color,transform,box-shadow,background-color] duration-250"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <svg
                    className="w-3.5 h-3.5 text-[#246B32] shrink-0 transition-transform duration-250 group-hover:scale-105"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#246B32] truncate">
                    X
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555B55] group-hover:text-[#246B32] group-hover:translate-x-0.5 transition-transform duration-250 shrink-0" />
              </a>

              {/* 4. Personal Email */}
              <a
                href="mailto:Shivamkushwaha5201@gmail.com"
                className="group flex items-center justify-between gap-3 px-4 py-3.5 rounded-xl bg-[#F7F9F7] border border-[#E5E9E5] hover:border-[#459B45] hover:bg-[#E5F5E5]/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#459B45]/15 transition-[border-color,transform,box-shadow,background-color] duration-250"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-[#246B32] shrink-0 transition-transform duration-250 group-hover:scale-105" />
                  <span className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#246B32] truncate">
                    Email
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#555B55] group-hover:text-[#246B32] group-hover:translate-x-0.5 transition-transform duration-250 shrink-0" />
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
});
