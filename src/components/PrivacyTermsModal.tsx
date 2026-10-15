import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, Mail, Phone, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { CONTACT_INFO } from '../data/portfolioData';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'privacy' | 'terms';
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'privacy'
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(defaultTab);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#110B20] border border-[#30213F] rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#30213F] bg-[#151020]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#241738] text-[#B69AFF] flex items-center justify-center font-bold">
                {activeTab === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
              </div>
              <div>
                <h2 className="text-xl font-bold font-display text-[#F8F6FF]">
                  {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
                </h2>
                <p className="text-xs text-[#B7AEC9]">
                  AxentAI Labs • Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {/* Tab Switcher */}
              <div className="flex bg-[#110B20] border border-[#30213F] rounded-full p-1 text-xs">
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`px-3.5 py-1 rounded-full font-bold transition-all cursor-pointer ${
                    activeTab === 'privacy'
                      ? 'bg-[#7028D8] text-white'
                      : 'text-[#B7AEC9] hover:text-[#F8F6FF]'
                  }`}
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setActiveTab('terms')}
                  className={`px-3.5 py-1 rounded-full font-bold transition-all cursor-pointer ${
                    activeTab === 'terms'
                      ? 'bg-[#7028D8] text-white'
                      : 'text-[#B7AEC9] hover:text-[#F8F6FF]'
                  }`}
                >
                  Terms of Service
                </button>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#1E1430] text-[#B7AEC9] hover:text-[#F8F6FF] transition-colors ml-2 cursor-pointer"
                aria-label="Close legal modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#B7AEC9] leading-relaxed font-sans">
            {activeTab === 'privacy' ? (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    1. Introduction & Scope
                  </h3>
                  <p>
                    AxentAI Labs ("we", "our", or "us") provides strategic launch consulting, Product Hunt hunting, social media marketing (LinkedIn, X, Reddit, Instagram), personal branding, and creator campaign management services to founders and businesses. This Privacy Policy describes how we collect, use, and protect your information when you access our website or engage our services.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    2. Information We Collect
                  </h3>
                  <p className="mb-2">
                    We only collect information necessary to provide growth consulting and deliver contracted services:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#B7AEC9]">
                    <li><strong className="text-[#F8F6FF]">Contact Data:</strong> Name, work email address, phone/WhatsApp number, company/product name, and social media handles provided during inquiry or booking.</li>
                    <li><strong className="text-[#F8F6FF]">Product Information:</strong> URLs, pitch decks, demo credentials, marketing collateral, and launch objectives shared for campaign preparation.</li>
                    <li><strong className="text-[#F8F6FF]">Communication Records:</strong> Notes from strategy calls, email exchanges, and instant messaging via WhatsApp or X DMs regarding your launch.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    3. How We Use Your Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#B7AEC9]">
                    <li>To prepare and execute Product Hunt launches, social media content, and creator outreach campaigns.</li>
                    <li>To schedule consultation sessions and send launch audit feedback.</li>
                    <li>To communicate campaign progress, milestones, and analytics reports.</li>
                    <li>We <strong className="text-[#F8F6FF]">never</strong> sell, rent, or trade your personal or business data to third-party advertisers.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    4. Confidentiality & Non-Disclosure
                  </h3>
                  <p>
                    We treat all unreleased product features, proprietary algorithms, pre-launch assets, and strategic roadmaps with strict confidentiality. Custom Non-Disclosure Agreements (NDAs) can be executed upon request prior to confidential product demos.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    5. Contact Us Regarding Your Data
                  </h3>
                  <p className="mb-3">
                    If you have questions about this policy or wish to request data modification or deletion, contact our team directly:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold">
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#110B20] border border-[#30213F] text-[#F8F6FF]">
                      <Mail className="w-4 h-4 text-[#B69AFF]" />
                      <span>{CONTACT_INFO.email}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#110B20] border border-[#30213F] text-[#F8F6FF]">
                      <Phone className="w-4 h-4 text-[#B69AFF]" />
                      <span>{CONTACT_INFO.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    1. Agreement to Terms
                  </h3>
                  <p>
                    By engaging AxentAI Labs for Product Hunt launch strategy, social media marketing, personal branding, Reddit marketing, or creator campaigns, you agree to comply with and be bound by these Terms of Service.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    2. Scope of Services & Deliverables
                  </h3>
                  <p className="mb-2">
                    Services are tailored per agreed statement of work (SOW) or sprint proposal, which may include:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-[#B7AEC9]">
                    <li>Product Hunt positioning, maker comment strategy, hunting submission, and 24-hour launch war room supervision.</li>
                    <li>LinkedIn & X (Twitter) organic content planning, post creation, and engagement management.</li>
                    <li>Influencer/creator research, outreach, briefing, and campaign performance monitoring.</li>
                    <li>Reddit marketing and community reputation development adhering to community guidelines.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    3. Organic Growth & Platform Compliance Guarantee
                  </h3>
                  <p>
                    AxentAI Labs operates with a <strong className="text-[#F8F6FF]">100% strict organic velocity policy</strong>. We never utilize bot networks, synthetic vote manipulation, or illegitimate engagement pools that violate Product Hunt, LinkedIn, or X terms of service. All outreach, community mobilization, and hunter promotion rely on genuine relationships, optimized timing, and compelling storytelling.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    4. Client Responsibilities
                  </h3>
                  <p>
                    To ensure launch success, the client agrees to provide required product assets (taglines, animated GIFs, demo videos, maker credentials) in a timely manner according to the agreed pre-launch milestone schedule.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    5. Intellectual Property
                  </h3>
                  <p>
                    All client branding, logos, trademarks, and proprietary software remain the exclusive property of the client. Strategy frameworks, copywriting drafts, and creative assets produced during the engagement become client property upon full settlement of contracted invoices.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#151020] border border-[#30213F]">
                  <h3 className="text-base font-bold text-[#F8F6FF] mb-1">
                    6. Direct Inquiries & Dispute Resolution
                  </h3>
                  <p className="mb-3">
                    Any inquiries or service adjustments should be communicated directly to AxentAI Labs leadership:
                  </p>
                  <div className="flex items-center gap-4 text-xs font-semibold text-[#F8F6FF]">
                    <span>AxentAI Labs</span>
                    <span>•</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#B69AFF] hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                    <span>•</span>
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                      WhatsApp: {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-4 border-t border-[#30213F] bg-[#151020] flex items-center justify-between">
            <div className="text-xs text-[#B7AEC9] flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Transparent, founder-first legal standards</span>
            </div>
            <Button size="sm" onClick={onClose}>
              Close & Return to Website
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
