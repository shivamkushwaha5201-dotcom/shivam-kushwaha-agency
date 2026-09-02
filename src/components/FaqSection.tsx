import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, MessageSquare, Send, ArrowRight, Sparkles } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { FAQ_DATA } from '../data/portfolioData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'Product Hunt', label: '🏆 Product Hunt' },
    { id: 'X & LinkedIn', label: '𝕏 & LinkedIn SMM' },
    { id: 'Influencer Marketing', label: '📣 Influencer Campaigns' },
    { id: 'Pricing & Process', label: '💼 Pricing & Process' }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-white border-t border-[#E5E5E1] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#2563EB] font-bold tracking-[0.25em] text-xs uppercase mb-3 inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif-artistic font-medium text-[#1A1A1A] tracking-tight leading-tight">
            Everything Before <span className="italic font-normal">You Launch.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#1A1A1A]/70 leading-relaxed">
            Transparent answers on hunter mechanics, algorithm safeguards, content ghostwriting workflows, and campaign timelines.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-[#FAF9F6] text-[#1A1A1A]/70 border border-[#E5E5E1] hover:text-[#1A1A1A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Component with Artistic Minimal Borders */}
        <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <AccordionItem key={faq.id} value={faq.id} className="border border-[#E5E5E1] bg-[#FAF9F6] rounded-2xl px-5">
              <AccordionTrigger className="text-left font-serif-artistic italic font-medium text-[#1A1A1A] text-lg hover:no-underline py-4">
                <div className="flex items-center gap-3 pr-4">
                  <div className="w-5 h-5 rounded-full border border-[#1A1A1A] flex items-center justify-center text-[9px] font-sans font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#1A1A1A]/70 text-xs sm:text-sm leading-relaxed pl-8 pb-4 font-sans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions card in Artistic Border */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#E5E5E1] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-lg font-serif-artistic italic font-medium text-[#1A1A1A]">
                Have a specific question about your launch?
              </h4>
              <p className="text-xs text-[#1A1A1A]/60 mt-0.5">
                Send Shivam a direct message on X or schedule a 15-minute quick strategy audit.
              </p>
            </div>
          </div>

          <Button
            onClick={onOpenBooking}
            size="sm"
            className="shrink-0"
          >
            <span>Ask Shivam Directly</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
};
