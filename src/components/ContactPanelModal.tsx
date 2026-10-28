import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Phone,
  Calendar,
  ArrowRight,
  ExternalLink,
  Check,
  Copy,
  X,
  Sparkles,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

interface ContactPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking?: () => void;
}

export const ContactPanelModal: React.FC<ContactPanelModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const [copied, setCopied] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    onClose();
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      window.location.hash = '#contact';
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-panel-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0A0F0A]/40 backdrop-blur-sm cursor-pointer"
          />

          {/* Contact Panel Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', stiffness: 360, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-[#FFFFFF] rounded-3xl border border-[#E5E9E5] shadow-2xl overflow-hidden z-10"
          >
            {/* Header Accent Glow Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#246B32] via-[#459B45] to-[#78C978]" />

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAF7EA] border border-[#CDECCF] text-[10px] font-mono font-bold tracking-[0.18em] text-[#246B32] uppercase">
                    <Sparkles className="w-3 h-3 text-[#459B45]" />
                    <span>AXENTAI LABS · CONTACT</span>
                  </div>
                  <h2
                    id="contact-panel-title"
                    className="text-2xl sm:text-3xl font-display font-extrabold text-[#111111] tracking-tight uppercase"
                  >
                    Get in Touch
                  </h2>
                  <p className="text-xs sm:text-sm text-[#555B55] leading-relaxed">
                    Connect directly with our agency team. We're ready to discuss your product launch, distribution, and growth systems.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close Contact Panel"
                  className="p-2 rounded-full text-[#555B55] hover:text-[#111111] hover:bg-[#F7F9F7] border border-[#E5E9E5] transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Options List */}
              <div className="space-y-3">
                {/* 1. Official Agency Email */}
                <div className="relative group">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] hover:border-[#459B45] hover:bg-[#EAF7EA]/50 transition-all duration-200 group-hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3.5 min-w-0 pr-12">
                      <div className="w-10 h-10 rounded-xl bg-[#E5F5E5] border border-[#CDECCF] flex items-center justify-center text-[#246B32] shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                            Email Us
                          </span>
                          <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#EAF7EA] text-[#246B32] font-semibold border border-[#CDECCF]">
                            Official Email
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-[#246B32] hover:underline truncate">
                          {CONTACT_INFO.email}
                        </div>
                        <div className="text-[11px] text-[#555B55]">
                          Opens your default email app
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* Copy button floating on right */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    aria-label="Copy email address"
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 px-2.5 py-1.5 rounded-lg border border-[#E5E9E5] bg-[#FFFFFF] hover:border-[#459B45] hover:bg-[#F7F9F7] text-[#246B32] text-xs font-medium flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-[11px] font-semibold text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#555B55]" />
                        <span className="text-[11px] text-[#555B55]">Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* 2. WhatsApp Direct */}
                <a
                  href={CONTACT_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-[#F7F9F7] border border-[#E5E9E5] hover:border-emerald-500 hover:bg-[#EAF7EA]/50 transition-all duration-200 group hover:shadow-sm"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                          WhatsApp
                        </span>
                        <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-full bg-emerald-100/60 text-emerald-800 font-semibold border border-emerald-200">
                          Quick Chat
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-[#111111]">
                        {CONTACT_INFO.phone}
                      </div>
                      <div className="text-[11px] text-[#555B55]">
                        Instant messaging &amp; voice
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#555B55] group-hover:text-emerald-700 transition-colors shrink-0" />
                </a>

                {/* 3. Book a Strategy Call */}
                <button
                  type="button"
                  onClick={handleBookingClick}
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-[#F7F9F7] to-[#EAF7EA]/70 border border-[#CDECCF] hover:border-[#459B45] transition-all duration-200 group text-left cursor-pointer hover:shadow-sm"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-[#246B32] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-[#111111] uppercase tracking-wide block">
                        Book a Strategy Call
                      </span>
                      <div className="text-sm font-semibold text-[#246B32]">
                        1-on-1 Growth Consultation
                      </div>
                      <div className="text-[11px] text-[#555B55]">
                        Direct calendar reservation via Cal.com
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#246B32] group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                {/* 4. Social Media Links */}
                <div className="pt-2">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#555B55] mb-2 px-1">
                    Social &amp; Professional Channels
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href={CONTACT_INFO.agencyLinkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:bg-[#F7F9F7] transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="w-6 h-6 rounded-md bg-[#E5F5E5] text-[#246B32] flex items-center justify-center font-bold text-xs shrink-0">
                          in
                        </span>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-[#111111] group-hover:text-[#246B32]">
                            LinkedIn
                          </div>
                          <div className="text-[10px] text-[#555B55] truncate">
                            AxentAI Labs
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#555B55] group-hover:text-[#246B32] shrink-0" />
                    </a>

                    <a
                      href={CONTACT_INFO.xTwitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-[#FFFFFF] border border-[#E5E9E5] hover:border-[#459B45] hover:bg-[#F7F9F7] transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-6 h-6 rounded-md bg-[#F7F9F7] border border-[#E5E9E5] text-[#111111] flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-[#111111] group-hover:text-[#246B32]">
                            X / Twitter
                          </div>
                          <div className="text-[10px] text-[#555B55] truncate">
                            @axentailabs
                          </div>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[#555B55] group-hover:text-[#246B32] shrink-0" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-3 border-t border-[#E5E9E5] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#555B55]">
                <span>Official agency response within 2–4 hours</span>
                <span className="font-mono text-[#246B32] font-semibold">
                  hello@axentailabs.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
