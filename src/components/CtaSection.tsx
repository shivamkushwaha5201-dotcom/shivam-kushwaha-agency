import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Calendar, 
  Mail, 
  Phone, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';
import brandLogoWebp from '../assets/images/brand_logo_opt.webp';

interface CtaSectionProps {
  onSuccessSubmit?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = React.memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const initializedRef = useRef(false);

  // Defer Cal.com heavy third-party iframe initialization until user scrolls within 800px of Contact
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const initCalEmbed = () => {
      if (initializedRef.current) return;
      initializedRef.current = true;

      try {
        (function (C: any, A: string, L: string) {
          const p = function (a: any, ar: any) { a.q.push(ar); };
          const d = C.document;
          C.Cal = C.Cal || function () {
            const cal = C.Cal;
            const ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              const s = d.createElement("script");
              s.src = A;
              s.async = true;
              d.head.appendChild(s);
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api: any = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else {
                p(cal, ar);
              }
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const win = window as any;
        if (win.Cal) {
          win.Cal("init", "book-a-growth-strategy-call-with-shivam", { origin: "https://app.cal.com" });
          win.Cal.config = win.Cal.config || {};
          win.Cal.config.forwardQueryParams = true;

          setTimeout(() => {
            if (win.Cal && win.Cal.ns && win.Cal.ns["book-a-growth-strategy-call-with-shivam"]) {
              win.Cal.ns["book-a-growth-strategy-call-with-shivam"]("inline", {
                elementOrSelector: "#my-cal-inline-book-a-growth-strategy-call-with-shivam",
                config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
                calLink: "shivam-kushwaha-2fovpp/book-a-growth-strategy-call-with-shivam",
              });
              win.Cal.ns["book-a-growth-strategy-call-with-shivam"]("ui", {
                hideEventTypeDetails: false,
                layout: "month_view",
              });
            }
          }, 150);
        }
      } catch (e) {
        console.warn("Cal embed initialization:", e);
      }
    };

    if (typeof IntersectionObserver === 'undefined') {
      initCalEmbed();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          initCalEmbed();
          observer.disconnect();
        }
      },
      { rootMargin: '800px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="py-32 bg-[#050505] text-[#F8F7FC] border-t border-[#30213F] relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Top Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fx-card-interactive p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#100B1B] via-[#0B0812] to-[#35106B]/30 border border-[#30213F] relative overflow-hidden mb-12 shadow-xl shadow-black/50"
        >
          {/* Subtle Top Specular Arc Highlight Inspired by Reference */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-[#B98AFF]/50 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-8 w-80 h-80 rounded-full bg-[#7028D8]/20 blur-3xl"
          />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B98AFF] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B98AFF] animate-pulse" />
              Strategic Growth Partnership
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8F7FC] tracking-[-0.02em] leading-[1.08] uppercase">
              READY TO BUILD YOUR <br className="hidden sm:inline" />
              <span className="text-[#B98AFF]">DIGITAL INFLUENCE?</span>
            </h2>

            <p className="text-sm sm:text-base text-[#B9B1C9] font-sans leading-relaxed max-w-xl font-normal">
              Let’s build a growth strategy around your brand, audience and goals.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-[#F8F7FC] font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B98AFF]" />
                <span>Direct senior strategist collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B98AFF]" />
                <span>Custom platform playbook</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Columns: Agency Details & Live Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Agency Channels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-6"
          >
            
            <div className="p-7 rounded-2xl bg-[#100B1B] border border-[#30213F] space-y-5 shadow-md shadow-black/40">
              
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#30213F]">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#7028D8] p-0.5 bg-[#0B0812] shrink-0">
                  <picture className="w-full h-full block">
                    <source srcSet={brandLogoWebp} type="image/webp" />
                    <img
                      src={brandLogo}
                      alt="AxentAI Labs"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F8F7FC]">AxentAI Labs</h3>
                  <p className="text-xs text-[#B9B1C9]">Digital Growth Agency</p>
                </div>
              </div>

              <p className="text-xs text-[#B9B1C9] leading-relaxed font-sans">
                Choose a time that works for you on the calendar. We review your channels in advance and come prepared with actionable strategic feedback.
              </p>

              {/* Direct channels */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0812] border border-[#30213F] hover:border-[#7028D8] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-250 group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-[#B98AFF] shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-[#F8F7FC]">Direct Email</div>
                      <div className="text-[10px] text-[#B9B1C9] font-mono truncate">{CONTACT_INFO.email}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B9B1C9] group-hover:text-[#B98AFF] group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0812] border border-[#30213F] hover:border-emerald-500/50 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-250 group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[11px] font-semibold text-[#F8F7FC]">WhatsApp</div>
                      <div className="text-[10px] text-[#B9B1C9] font-mono">{CONTACT_INFO.phone}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B9B1C9] group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                </a>

                <a
                  href={CONTACT_INFO.agencyLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#0B0812] border border-[#30213F] hover:border-[#7028D8] hover:-translate-y-0.5 hover:shadow-sm transition-all duration-250 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-[#B98AFF]">in</span>
                    <div>
                      <div className="text-[11px] font-semibold text-[#F8F7FC]">LinkedIn</div>
                      <div className="text-[10px] text-[#B9B1C9]">AxentAI Labs</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B9B1C9] group-hover:text-[#B98AFF] group-hover:translate-x-0.5 transition-all" />
                </a>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Cal.com Live Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#100B1B] border border-[#30213F] space-y-4 shadow-lg shadow-black/40">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#30213F]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#35106B]/60 border border-[#7028D8]/60 text-[#B98AFF] flex items-center justify-center font-bold shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#F8F7FC]">
                      Book a Strategy Call
                    </h3>
                    <p className="text-xs text-[#B9B1C9]">
                      Select a date and time slot directly below.
                    </p>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#B98AFF] hover:text-[#F8F7FC] font-semibold hover:underline inline-flex items-center gap-1.5 self-start sm:self-auto bg-[#35106B]/50 px-3 py-1.5 rounded-full border border-[#7028D8]/50"
                >
                  <span>Open in Cal.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cal.com Container */}
              <div className="w-full min-h-[620px] rounded-2xl overflow-hidden border border-[#30213F] bg-[#0B0812] p-1">
                <div 
                  style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "auto" }} 
                  id="my-cal-inline-book-a-growth-strategy-call-with-shivam"
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-[#B9B1C9]">
                <span>Direct calendar reservation via Cal.com</span>
                <span>Timezone automatically synced to browser</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
});
