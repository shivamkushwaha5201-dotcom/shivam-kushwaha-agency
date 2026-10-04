import React, { useEffect } from 'react';
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
import earthImage from '../assets/images/earth_hero.jpg';

interface CtaSectionProps {
  onSuccessSubmit?: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = () => {
  // Initialize Cal.com inline embed
  useEffect(() => {
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
  }, []);

  return (
    <section 
      id="contact" 
      className="py-32 bg-transparent text-[#F8FAFC] border-t border-white/10 relative overflow-hidden font-sans z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Top Banner with Earth Visual in Background */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#050B14]/92 border border-white/10 relative overflow-hidden mb-12 shadow-2xl shadow-black/60">
          
          {/* Deep blue atmospheric lighting (Radial gradient — zero blur filter cost) */}
          <div
            aria-hidden="true"
            className="absolute -top-16 right-1/4 w-[480px] h-[360px] pointer-events-none -z-0"
            style={{
              background:
                'radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0.06) 45%, transparent 72%)',
            }}
          />

          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Strategic Growth Partnership
            </div>

            {/* Exactly as requested by user prompt */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#F8FAFC] tracking-[-0.02em] leading-[1.08] uppercase">
              READY TO BUILD YOUR <br className="hidden sm:inline" />
              DIGITAL INFLUENCE?
            </h2>

            <p className="text-sm sm:text-base text-[#94A3B8] font-sans leading-relaxed max-w-xl font-normal">
              Let’s build a growth strategy around your brand, audience and goals.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-[#94A3B8] font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Direct senior strategist collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38BDF8]" />
                <span>Custom platform playbook</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Columns: Agency Details & Live Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Agency Channels */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-7 rounded-2xl bg-[#050B14] border border-blue-500/20 space-y-5 shadow-lg shadow-black/40">
              
              <div className="flex items-center gap-3.5 pb-4 border-b border-blue-500/15">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-blue-500/40 p-0.5 bg-[#02040A] shrink-0">
                  <img
                    src={brandLogo}
                    alt="AxentAI Labs"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">AxentAI Labs</h3>
                  <p className="text-xs text-slate-400">Digital Growth Agency</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Choose a time that works for you on the calendar. We review your channels in advance and come prepared with actionable strategic feedback.
              </p>

              {/* Direct channels */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#02040A] border border-blue-500/15 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-[11px] font-semibold text-white">Direct Email</div>
                      <div className="text-[10px] text-slate-400 font-mono truncate">{CONTACT_INFO.email}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                </a>

                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#02040A] border border-blue-500/15 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <div>
                      <div className="text-[11px] font-semibold text-white">WhatsApp</div>
                      <div className="text-[10px] text-slate-400 font-mono">{CONTACT_INFO.phone}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </a>

                <a
                  href={CONTACT_INFO.agencyLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#02040A] border border-blue-500/15 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-4 h-4 flex items-center justify-center font-bold text-xs text-sky-400">in</span>
                    <div>
                      <div className="text-[11px] font-semibold text-white">LinkedIn</div>
                      <div className="text-[10px] text-slate-400">AxentAI Labs</div>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400 transition-colors" />
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Cal.com Live Embed */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#050B14] border border-blue-500/20 space-y-4 shadow-xl shadow-black/40">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-blue-500/15">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/15 border border-blue-500/30 text-sky-400 flex items-center justify-center font-bold shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      Book a Strategy Call
                    </h3>
                    <p className="text-xs text-slate-400">
                      Select a date and time slot directly below.
                    </p>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-sky-400 font-semibold hover:underline inline-flex items-center gap-1.5 self-start sm:self-auto bg-blue-500/10 px-3 py-1.5 rounded-full border border-blue-500/20"
                >
                  <span>Open in Cal.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cal.com Container */}
              <div className="w-full min-h-[620px] rounded-2xl overflow-hidden border border-blue-500/15 bg-[#02040A] p-1">
                <div 
                  style={{ width: "100%", height: "100%", minHeight: "600px", overflow: "scroll" }} 
                  id="my-cal-inline-book-a-growth-strategy-call-with-shivam"
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-slate-500">
                <span>Direct calendar reservation via Cal.com</span>
                <span>Timezone automatically synced to browser</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
