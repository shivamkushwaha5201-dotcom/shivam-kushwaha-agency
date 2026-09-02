import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ArrowRight, CheckCircle2, RotateCcw, Zap, Trophy, ShieldAlert, Award } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { LAUNCH_READINESS_QUESTIONS } from '../data/portfolioData';

interface InteractiveAuditModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookCall: () => void;
}

export const InteractiveAuditModal: React.FC<InteractiveAuditModalProps> = ({
  open,
  onOpenChange,
  onBookCall
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (points: number, optionIdx: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentStep] = optionIdx;
    setSelectedAnswers(newAnswers);

    if (currentStep < LAUNCH_READINESS_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetAudit = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  // Calculate total score
  const calculateScore = () => {
    let totalPoints = 0;
    selectedAnswers.forEach((optIdx, qIdx) => {
      if (optIdx !== undefined && LAUNCH_READINESS_QUESTIONS[qIdx]) {
        totalPoints += LAUNCH_READINESS_QUESTIONS[qIdx].options[optIdx].points;
      }
    });
    // Max is 30+30+30+25 = 115, normalize to 100
    const normalized = Math.min(100, Math.round((totalPoints / 115) * 100));
    return normalized;
  };

  const score = calculateScore();

  const getScoreVerdict = () => {
    if (score >= 80) {
      return {
        label: '🚀 Ready for #1 Frontpage Contender',
        color: 'text-emerald-600',
        badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        summary: 'Your assets and audience base are in prime position. With Shivam hunting and coordinating launch day velocity, you are positioned to challenge for #1 Product of the Day.'
      };
    } else if (score >= 50) {
      return {
        label: '⚡ Good Foundation with 2 Critical Gaps',
        color: 'text-amber-600',
        badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
        summary: 'You have a solid core, but need a 2-3 week build-in-public ramp on X/LinkedIn and asset optimization to guarantee top 3 placement.'
      };
    } else {
      return {
        label: '🛠️ Needs Pre-Launch Foundation Sprint',
        color: 'text-blue-600',
        badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
        summary: 'Launching today would risk your product being buried. Shivam’s 30-day pre-launch teaser strategy will build the necessary waitlist before going public.'
      };
    }
  };

  const verdict = getScoreVerdict();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-6 sm:p-8 bg-[#FAF9F6] border-[#E5E5E1] rounded-3xl">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#2563EB] font-bold tracking-[0.2em] text-[10px] uppercase">
              Interactive Audit
            </span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-serif-artistic italic font-medium text-[#1A1A1A]">
            {showResults ? 'Launch Readiness Scorecard' : 'Calculate Your Launch Readiness'}
          </DialogTitle>
          <DialogDescription className="text-[#1A1A1A]/60 text-xs sm:text-sm font-sans">
            {showResults
              ? 'Based on Shivam’s analysis of 185+ Product Hunt leaderboard launches.'
              : `Question ${currentStep + 1} of ${LAUNCH_READINESS_QUESTIONS.length}: Answer honestly to get an accurate velocity roadmap.`}
          </DialogDescription>
        </DialogHeader>

        {!showResults ? (
          <div className="mt-4 space-y-4">
            {/* Progress bar */}
            <div className="w-full bg-[#E5E5E1] rounded-full h-1 overflow-hidden">
              <div
                className="bg-[#2563EB] h-full transition-all duration-300 rounded-full"
                style={{ width: `${((currentStep + 1) / LAUNCH_READINESS_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question */}
            <div className="text-lg font-serif-artistic font-medium text-[#1A1A1A] leading-snug">
              {LAUNCH_READINESS_QUESTIONS[currentStep].question}
            </div>

            {/* Options */}
            <div className="space-y-2">
              {LAUNCH_READINESS_QUESTIONS[currentStep].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(option.points, idx)}
                  className="w-full p-4 text-left rounded-2xl border border-[#E5E5E1] hover:border-[#1A1A1A] bg-white transition-all text-xs sm:text-sm font-sans text-[#1A1A1A] flex items-center justify-between group cursor-pointer"
                >
                  <span className="font-medium">{option.text}</span>
                  <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 group-hover:text-[#1A1A1A] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                </button>
              ))}
            </div>

            {/* Back button */}
            {currentStep > 0 && (
              <div className="flex justify-start pt-2">
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="text-xs font-semibold text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                >
                  ← Back to previous question
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="mt-4 space-y-5">
            {/* Score Display Card in Ink Black */}
            <div className="p-6 rounded-3xl bg-[#1A1A1A] text-white text-center border border-[#1A1A1A]">
              <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold mb-1">
                Calculated Readiness Score
              </div>
              <div className="text-5xl font-serif-artistic italic font-bold text-[#3B82F6]">
                {score}<span className="text-2xl text-white/40 font-normal">/100</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20">
                {verdict.label}
              </div>
              <p className="mt-3 text-xs text-white/70 max-w-md mx-auto leading-relaxed font-sans">
                {verdict.summary}
              </p>
            </div>

            {/* Recommendations checklist based on selections */}
            <div className="space-y-2.5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">
                Shivam’s Key Recommendations:
              </div>
              <div className="space-y-2">
                {selectedAnswers.map((optIdx, qIdx) => {
                  const tip = LAUNCH_READINESS_QUESTIONS[qIdx].options[optIdx]?.tip;
                  return (
                    <div key={qIdx} className="p-3 rounded-2xl bg-white border border-[#E5E5E1] text-xs flex items-start gap-2.5 text-[#1A1A1A]/80 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#DA552F] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="outline"
                onClick={resetAudit}
                className="text-xs justify-center"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                Retake Audit
              </Button>
              <Button
                onClick={() => {
                  onOpenChange(false);
                  onBookCall();
                }}
                className="flex-1 text-xs justify-center font-bold"
              >
                <span>Review Audit with Shivam</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
