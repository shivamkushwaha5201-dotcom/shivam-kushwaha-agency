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
    <section id="faq" className="py-24 bg-[#08060F] text-[#F8F6FF] border-t border-[#30213F] relative overflow-hidden font-sans">
      {/* Faint Atmospheric Gradient Matching Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 85% 75% at 20% 25%, rgba(17, 11, 32, 0.95) 0%, rgba(8, 6, 15, 1) 70%), linear-gradient(135deg, #08060F 0%, #110B20 52%, #08060F 100%)',
        }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
        >
          <span className="text-[#B98AFF] font-semibold tracking-widest text-xs uppercase block">
            Common Questions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F8F7FC] tracking-tight leading-tight">
            Clear Answers on Strategy & Execution
          </h2>
          <p className="text-xs sm:text-sm text-[#B9B1C9] leading-relaxed font-sans">
            Transparent insights into how we handle founder branding, page management, launch operations, and creator partnerships.
          </p>

          {/* Category Filter Buttons */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-250 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#7028D8] text-[#F8F7FC] shadow-sm shadow-[#7028D8]/30 -translate-y-0.5'
                    : 'bg-[#100B1B] text-[#B9B1C9] border border-[#30213F] hover:border-[#7028D8] hover:text-[#F8F7FC] hover:-translate-y-0.5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordions */}
        <Accordion type="single" collapsible defaultValue="faq-1" className="space-y-3">
          {filteredFaqs.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <AccordionItem 
                value={faq.id} 
                className="fx-card-interactive border border-[#30213F] bg-[#100B1B] rounded-2xl px-6 shadow-xs hover:border-[#7028D8]/60 hover:shadow-md hover:shadow-[#7028D8]/10"
              >
                <AccordionTrigger className="text-left font-semibold text-[#F8F7FC] text-base hover:no-underline py-4 cursor-pointer group">
                  <div className="flex items-center gap-3 pr-4">
                    <span className="font-mono text-xs text-[#B98AFF] shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="group-hover:text-[#B98AFF] transition-colors">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-[#B9B1C9] text-xs sm:text-sm leading-relaxed pl-7 pb-5 font-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        {/* Bottom Contact Box */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#100B1B] border border-[#30213F] hover:border-[#7028D8]/50 transition-colors shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#35106B]/60 border border-[#30213F] text-[#B98AFF] flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#F8F7FC]">
                Have a unique question about your digital presence?
              </h4>
              <p className="text-xs text-[#B9B1C9] mt-0.5">
                We are happy to review your current channels and provide direct feedback.
              </p>
            </div>
          </div>

          <Button
            onClick={onOpenBooking}
            size="sm"
            className="shrink-0 bg-[#7028D8] hover:bg-[#5E1EC0] text-[#F8F7FC] text-xs font-semibold rounded-full px-5 py-2.5 cursor-pointer shadow-sm shadow-[#7028D8]/30 hover:-translate-y-0.5 transition-all duration-250"
          >
            <span>Ask Us Directly</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
});
