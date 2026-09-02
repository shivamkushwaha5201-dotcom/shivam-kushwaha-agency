import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  FileText, 
  ArrowLeft, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Lock, 
  Scale, 
  Calendar,
  ExternalLink,
  Printer,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../data/portfolioData';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms';
  onBackToHome: () => void;
  onOpenBooking: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({
  initialTab = 'privacy',
  onBackToHome,
  onOpenBooking
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const privacySections = [
    {
      id: 'privacy-intro',
      title: '1. Information We Collect',
      content: `We collect information necessary to deliver growth strategy, Product Hunt launch engineering, and multi-channel marketing campaigns. This includes:
      
• **Founder & Project Details**: Name, email address, company name, product URLs, demo access credentials, launch assets, and marketing briefs submitted via our forms or discovery calls.
• **Communication Data**: Messages sent via email, WhatsApp, Telegram, Calendly booking questionnaires, and direct messages on X (Twitter) or LinkedIn.
• **Campaign Analytics**: Aggregated engagement metrics, upvote velocity, referral traffic, and conversion statistics from public launch platforms (Product Hunt, Reddit, X, LinkedIn) required to optimize campaign performance.`
    },
    {
      id: 'privacy-use',
      title: '2. How We Use Your Information',
      content: `Your information is strictly used for executing high-impact launch campaigns and client communications:

• Structuring Product Hunt hunt submissions, maker comments, and scheduling optimal launch timing.
• Drafting tailored copy, viral X threads, technical LinkedIn carousels, and founder narratives.
• Coordinating with vetted tech creators and newsletter publishers for authentic review syndication.
• Generating post-launch performance reports and ROI evaluations.
• Direct communication regarding project status, milestones, and strategy revisions.`
    },
    {
      id: 'privacy-confidentiality',
      title: '3. Strict Pre-Launch Confidentiality',
      content: `We recognize that unreleased software, stealth products, and proprietary AI workflows require absolute discretion:

• **NDA Standard**: All unannounced features, pitch decks, internal metrics, and pre-launch assets are treated with strict confidentiality.
• **Zero Pre-disclosure**: We will never publicly tease, reveal, or distribute information regarding your launch without explicit written consent from the founder.
• **Asset Ownership**: Clients retain 100% intellectual property ownership of their brand, codebase, graphics, and product copy.`
    },
    {
      id: 'privacy-security',
      title: '4. Data Security & Storage',
      content: `We implement modern security practices to protect client materials and communication:

• Client briefs and credentials are stored in encrypted, access-restricted workspaces.
• We do not sell, rent, or trade founder personal data or email lists to third-party data brokers under any circumstances.
• Access to client dashboards and staging accounts is revoked immediately upon campaign completion.`
    },
    {
      id: 'privacy-cookies',
      title: '5. Cookies & Tracking Technologies',
      content: `Our website uses minimal, privacy-friendly analytics to assess general traffic patterns and optimize user experience. We do not engage in invasive cross-site user tracking or behavioral advertising profiling.`
    },
    {
      id: 'privacy-rights',
      title: '6. Your Privacy Rights & Data Deletion',
      content: `You have the right to request a copy of your stored project information, update inaccurate data, or request permanent deletion of all launch materials and briefs from our active records. To submit a request, email ${CONTACT_INFO.email}.`
    }
  ];

  const termsSections = [
    {
      id: 'terms-scope',
      title: '1. Scope of Services',
      content: `AxentAI Labs (led by founder Shivam Kushwaha) provides growth marketing and launch execution services including:

• **Product Hunt Hunter Sponsorship**: Hunter submission, maker badge linking, community notification broadcast, and launch-day scheduling.
• **Organic Social Media Growth**: Ghostwriting and distribution for X (Twitter), LinkedIn, and Reddit.
• **Influencer Syndication**: Outreach, briefing, and coordination with tech creators and AI newsletters.
• **Launch War Room & Consulting**: Pre-launch audits, asset optimization, and live launch-day velocity monitoring.`
    },
    {
      id: 'terms-organic',
      title: '2. 100% Organic Delivery & Anti-Bot Policy',
      content: `We strictly adhere to platform integrity guidelines and anti-spam protocols:

• **Zero Bot Policy**: We NEVER use fake upvoting rings, click farms, automated bots, or manipulated engagement. All launch velocity is driven through authentic community outreach, creator syndication, and organic social momentum.
• **Algorithmic Compliance**: We operate in strict compliance with Product Hunt, Reddit, LinkedIn, and X terms of service to safeguard maker accounts from penalization.`
    },
    {
      id: 'terms-client-obligations',
      title: '3. Client Responsibilities',
      content: `To ensure launch success, the client agrees to:

• Provide accurate product information, functional demo access, and approved branding assets at least 5 business days prior to the target launch date.
• Maintain active team presence in the launch comments section during the 24-hour launch window to respond to user questions and maker inquiries.
• Ensure the product complies with applicable laws and does not infringe upon third-party intellectual property.`
    },
    {
      id: 'terms-payments',
      title: '4. Fees, Milestones & Payment Terms',
      content: `• Campaign fees and sprint retainers are agreed upon in advance in the launch agreement.
• Payments are processed securely via approved invoice methods prior to the initiation of deliverables.
• Due to the time-sensitive nature and reservation of dedicated launch windows, campaign deposits are non-refundable once pre-launch drafting and scheduling have commenced.`
    },
    {
      id: 'terms-liability',
      title: '5. Disclaimer of Guarantees & Limitation of Liability',
      content: `While we maintain a 96.2% top-3 Product Hunt finish track record and execute proven viral distribution frameworks, final platform ranks depend on daily community voting dynamics, unexpected platform outages, and competing product launches. 

AxentAI Labs and Shivam Kushwaha are not liable for indirect, incidental, or third-party platform policy modifications beyond our reasonable control.`
    },
    {
      id: 'terms-ip',
      title: '6. Intellectual Property & Portfolio Rights',
      content: `• The client retains sole ownership of all product trademarks, proprietary algorithms, and brand assets.
• Unless a mutual non-disclosure agreement specifies otherwise, AxentAI Labs reserves the right to display publicly verifiable campaign results (e.g. final rank badge, publicly posted metrics, and upvote totals) as case studies in portfolio materials.`
    },
    {
      id: 'terms-governing',
      title: '7. Governing Law & Contact',
      content: `These terms are governed by the laws of India. For any legal inquiries or formal agreements, please contact Shivam Kushwaha at ${CONTACT_INFO.email}.`
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1A1A] pt-24 pb-20">
      
      {/* Top Breadcrumb & Back Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E5E5E1]">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1A1A1A] hover:text-[#FF5A1E] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[#E5E5E1] bg-white text-xs font-semibold text-[#1A1A1A]/70 hover:border-[#1A1A1A] hover:text-[#1A1A1A] transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <Button
              size="sm"
              onClick={onOpenBooking}
              className="bg-[#FF5A1E] hover:bg-[#E04E1A] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm"
            >
              <span>Book a Call</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E1] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1E]" />
            <span className="text-xs font-bold text-[#1A1A1A] tracking-wide uppercase">
              Legal & Compliance
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#1A1A1A] tracking-tight">
            {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
          </h1>

          <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-sans">
            AxentAI Labs • Led by Founder Shivam Kushwaha. Transparent terms, strict confidentiality for tech startups, and zero-bot growth policies.
          </p>

          <div className="flex items-center justify-center gap-4 text-xs text-[#1A1A1A]/50 font-mono-code pt-1">
            <span>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>Jurisdiction: India & Global Clients</span>
          </div>

          {/* Primary Pill Tab Selector */}
          <div className="inline-flex bg-white p-1.5 rounded-full border border-[#E5E5E1] shadow-sm mt-4">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'privacy'
                  ? 'bg-[#1A1A1A] text-white shadow-sm'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              <Shield className="w-4 h-4" />
              <span>Privacy Policy</span>
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'terms'
                  ? 'bg-[#1A1A1A] text-white shadow-sm'
                  : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Terms of Service</span>
            </button>
          </div>

        </div>
      </div>

      {/* Highlights Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-3xl bg-white border border-[#E5E5E1] shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-3">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#1A1A1A]">100% Client Confidentiality</h3>
            <p className="text-xs text-[#1A1A1A]/60 mt-1 leading-relaxed">
              Unannounced products, stealth decks, and pre-launch features are safeguarded under strict non-disclosure.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#E5E5E1] shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-3">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#1A1A1A]">Zero-Bot Policy</h3>
            <p className="text-xs text-[#1A1A1A]/60 mt-1 leading-relaxed">
              100% organic velocity, genuine creator reviews, and anti-spam algorithm compliance on Product Hunt.
            </p>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#E5E5E1] shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center mb-3">
              <Scale className="w-4 h-4" />
            </div>
            <h3 className="text-sm font-bold text-[#1A1A1A]">Founder-First IP Rights</h3>
            <p className="text-xs text-[#1A1A1A]/60 mt-1 leading-relaxed">
              Clients retain full ownership of all software, trademarks, creative assets, and audience data.
            </p>
          </div>
        </div>
      </div>

      {/* Main Document Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Table of Contents Sticky Sidebar */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block space-y-4">
            <div className="p-5 rounded-3xl bg-white border border-[#E5E5E1] shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]/50 mb-3">
                Contents — {activeTab === 'privacy' ? 'Privacy' : 'Terms'}
              </div>
              <nav className="space-y-1">
                {(activeTab === 'privacy' ? privacySections : termsSections).map((sec, idx) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#1A1A1A]/70 hover:text-[#2563EB] hover:bg-[#FAF9F6] transition-all"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="mt-5 pt-4 border-t border-[#E5E5E1]">
                <div className="text-[11px] font-bold text-[#1A1A1A] mb-1">Direct Contact</div>
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  className="text-xs text-[#2563EB] font-medium hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Document Sections */}
          <div className="lg:col-span-8 space-y-6">
            {(activeTab === 'privacy' ? privacySections : termsSections).map((section) => (
              <div
                key={section.id}
                id={section.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5E5E1] shadow-xs scroll-mt-28"
              >
                <h2 className="text-lg sm:text-xl font-bold font-display text-[#1A1A1A] mb-3">
                  {section.title}
                </h2>
                <div className="text-xs sm:text-sm text-[#1A1A1A]/80 leading-relaxed font-sans whitespace-pre-line space-y-2">
                  {section.content}
                </div>
              </div>
            ))}

            {/* Direct Contact & Inquiries Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#1A1A1A] text-white shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#3B82F6] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Have Questions About Our Terms?</span>
              </div>
              
              <h3 className="text-xl font-bold font-display">
                Need a Custom Mutual Non-Disclosure Agreement (NDA)?
              </h3>
              
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                We frequently execute custom bilateral NDAs with venture-backed teams and high-growth AI companies prior to pre-launch discovery calls.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  onClick={onOpenBooking}
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-6 py-2.5 rounded-full"
                >
                  <span>Schedule Discovery Call</span>
                </Button>

                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Shivam</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
