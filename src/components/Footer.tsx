import React, { useState, useEffect } from 'react';
import { 
  Trophy, 
  Sparkles, 
  ArrowUp, 
  Heart, 
  Globe, 
  ShieldCheck, 
  Calendar,
  Send,
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { CONTACT_INFO } from '../data/portfolioData';
import brandLogo from '../assets/images/0BB3492B-F314-44D3-BEB0-48FA1559EF8C.png';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
  onOpenLegal?: (tab: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAudit, onOpenLegal }) => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F172A] text-slate-300 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Persona Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500/40 p-0.5 bg-white shadow-sm flex items-center justify-center shrink-0">
                <img
                  src={brandLogo}
                  alt="AxentAI Labs"
                  className="w-full h-full object-cover rounded-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight">
                  AxentAI Labs<span className="text-[#3B82F6]">.</span>
                </span>
                <span className="block text-[10px] uppercase font-bold tracking-widest text-slate-400">
                  By Shivam Kushwaha
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-sans">
              Elite Product Hunt Hunter, X & LinkedIn Social Media Marketing Specialist, and Tech Influencer Strategist. Helping founders achieve front-page dominance and organic distribution.
            </p>

            {/* Live Availability Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-medium">Launch Slots Available</span>
              <span className="text-slate-600">•</span>
              <span className="font-mono-code text-[11px] text-slate-400">{time || '00:00:00'}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About Shivam</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#case-studies" className="text-slate-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Core Offerings
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2 text-slate-300">
                <Trophy className="w-3.5 h-3.5 text-[#3B82F6]" />
                Product Hunt Hunting
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                𝕏 & LinkedIn Organic SMM
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Send className="w-3.5 h-3.5 text-[#3B82F6]" />
                Tech Influencer Sponsorships
              </li>
              <li className="flex items-center gap-2 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-[#3B82F6]" />
                360° All-in-One Launch Sprints
              </li>
            </ul>
          </div>

          {/* Social Channels & Direct Contact */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white">
              Connect Directly
            </h4>
            <div className="flex flex-col gap-2 text-xs font-semibold">
              <a
                href={CONTACT_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors px-3.5"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={CONTACT_INFO.personalLinkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors px-3.5"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center justify-between p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors px-3.5"
              >
                <span>Email Me</span>
                <Mail className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} AxentAI Labs. All rights reserved.
          </div>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            {onOpenLegal && (
              <>
                <button
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <span>•</span>
                <button
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </button>
                <span>•</span>
              </>
            )}
            <button
              onClick={onOpenAudit}
              className="hover:text-white transition-colors"
            >
              Launch Readiness
            </button>
            <span>•</span>
            <button
              onClick={onOpenBooking}
              className="text-[#3B82F6] hover:underline font-semibold transition-colors"
            >
              Book Call
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
