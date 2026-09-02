import React, { useEffect } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Mail, 
  Phone,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';

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
    <section id="contact" className="py-20 md:py-28 bg-[#FAF9F6] border-t border-[#E5E5E1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Call-to-Action Hero Box */}
        <div className="rounded-3xl bg-[#0F172A] text-white p-8 sm:p-12 lg:p-14 relative overflow-hidden mb-12 border border-slate-800 shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Now Booking Q2 & Q3 Launches
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-tight">
              Ready to Claim Your <span className="text-[#3B82F6]">#1 Product of the Day</span> Badge?
            </h2>
            
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-2xl">
              Book a 1-on-1 strategy call with Shivam to analyze your product's viral distribution potential, target launch date, and multi-channel growth playbook.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
                Max 4 Launches Managed / Month
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200 font-medium bg-slate-800/80 px-3.5 py-1.5 rounded-full border border-slate-700">
                <Clock className="w-4 h-4 text-emerald-400" />
                Guaranteed Response within 12 Hours
              </div>
            </div>
          </div>

          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-0" />
        </div>

        {/* Main Content: Left Quick Direct Channels, Right Pure Cal.com Live Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Channels & Founder Card */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Founder Profile Card */}
            <div className="p-6 sm:p-7 rounded-3xl border border-[#E5E5E1] bg-white shadow-sm space-y-5">
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#E5E5E1]">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#2563EB]/30 p-0.5 bg-white shadow-sm shrink-0">
                  <img
                    src={brandLogo}
                    alt="Shivam Kushwaha - AxentAI Labs"
                    className="w-full h-full object-cover rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1A1A1A]">Shivam Kushwaha</h3>
                  <p className="text-xs text-[#1A1A1A]/60">Founder • AxentAI Labs</p>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full mt-1 border border-blue-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                    Top 1% Hunter
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#1A1A1A]/70">
                <p className="leading-relaxed">
                  Book directly on my strategy calendar. Every call is a direct 1-on-1 discussion on your launch roadmap.
                </p>
              </div>

              {/* Quick Contact Links */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] hover:border-[#2563EB] hover:bg-blue-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200/80 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-bold text-[#1A1A1A]">Direct Email</div>
                      <div className="text-[10px] text-[#1A1A1A]/60 font-mono-code truncate">{CONTACT_INFO.email}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] hover:border-emerald-500 hover:bg-emerald-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#1A1A1A]">WhatsApp Chat</div>
                      <div className="text-[10px] text-[#1A1A1A]/60 font-mono-code">{CONTACT_INFO.phone}</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>

                <a
                  href={CONTACT_INFO.personalLinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#FAF9F6] border border-[#E5E5E1] hover:border-[#2563EB] hover:bg-blue-50/40 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                      in
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-[#1A1A1A]">LinkedIn Profile</div>
                      <div className="text-[10px] text-[#1A1A1A]/60">Shivam • Growth Strategist</div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-[#2563EB] group-hover:translate-x-0.5 transition-all shrink-0" />
                </a>
              </div>

              {/* Guarantee Box */}
              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60 flex items-start gap-2.5 text-xs text-blue-950">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="leading-relaxed font-medium">
                  Every campaign is personally directed by Shivam. Zero junior agency handoffs.
                </span>
              </div>

            </div>

          </div>

          {/* Right Column: Pure Cal.com Live Embed (No Local Form) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-8 rounded-3xl border border-[#E5E5E1] bg-white shadow-sm space-y-4">
              
              {/* Embed Header Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E5E5E1]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] border border-blue-200 flex items-center justify-center font-bold shrink-0">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1A1A1A]">
                      Schedule a Growth Strategy Call
                    </h3>
                    <p className="text-xs text-[#1A1A1A]/60">
                      Select your preferred date & time slot directly below.
                    </p>
                  </div>
                </div>

                <a
                  href={CONTACT_INFO.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#2563EB] font-bold hover:underline inline-flex items-center gap-1.5 self-start sm:self-auto bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200/80"
                >
                  <span>Open in Cal.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Cal.com Live Inline Embed Container */}
              <div className="w-full min-h-[640px] rounded-2xl overflow-hidden border border-[#E5E5E1] bg-[#FAF9F6] p-1 shadow-inner">
                <div 
                  style={{ width: "100%", height: "100%", minHeight: "630px", overflow: "scroll" }} 
                  id="my-cal-inline-book-a-growth-strategy-call-with-shivam"
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-[11px] text-[#1A1A1A]/50">
                <span>🔒 Secure Calendar Embed via Cal.com</span>
                <span>Timezone automatically adjusts to your local browser time</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
