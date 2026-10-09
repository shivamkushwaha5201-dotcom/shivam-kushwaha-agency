import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { Button } from './ui/button';
import { FAQ_DATA } from '../data/portfolioData';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = React.memo(({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'X & LinkedIn', label: 'LinkedIn & Personal Branding' },
    { id: 'Product Hunt', label: 'Product Hunt' },
    { id: 'Influencer Marketing', label: 'Influencer Campaigns' },
    { id: 'Pricing & Process', label: 'Process & Engagement' }
  ];

  const filteredFaqs = activeCategory === 'all'
    ? FAQ_DATA
    : FAQ_DATA.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-[#080B12] text-slate-100 border-t border-[#181C28] relative overflow-hidden font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-[#60A5FA] font-semibold tracking-widest text-xs uppercase block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight leading-tight">
            Clear Answers on Strategy & Execution
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
            Transparent insights into how we handle founder branding, page management, launch operations, and creator partnerships.
          </p>

          {/* Category Filter Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#3B82F6] text-white shadow-sm shadow-blue-500/20'
                    : 'bg-[#050505] text-slate-400 border border-[#1E2332] hover:text-[#93C5FD]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id} 
              className="border border-[#1E2333] bg-[#050505] rounded-2xl px-6"
            >
              <AccordionTrigger className="text-left font-semibold text-white text-base hover:no-underline py-4 cursor-pointer">
                <div className="flex items-center gap-3 pr-4">
                  <span className="font-mono text-xs text-[#60A5FA] shrink-0">
                    0{idx + 1}
                  </span>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-7 pb-5 font-sans">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom Contact Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#050505] border border-[#1E2333] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#60A5FA] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Have a unique question about your digital presence?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                We are happy to review your current channels and provide direct feedback.
              </p>
            </div>
          </div>

          <Button
            onClick={onOpenBooking}
            size="sm"
            className="shrink-0 bg-[#3B82F6] hover:bg-[#2563EB] text-white text-xs font-semibold rounded-full px-5 py-2.5 cursor-pointer"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </div>

      </div>
    </section>
  );
});
