import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Zap, 
  Trophy, 
  Award, 
  Copy, 
  Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Button } from './ui/button';
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
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (showResults) {
      try {
        confetti({
          particleCount: 65,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#60A5FA', '#34D399', '#FBBF24']
        });
      } catch (e) {
        // Safe fallback if blocked
      }
    }
  }, [showResults]);

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
    setCopied(false);
  };

  // Calculate total score
  const calculateScore = () => {
    let totalPoints = 0;
    selectedAnswers.forEach((optIdx, qIdx) => {
      if (optIdx !== undefined && LAUNCH_READINESS_QUESTIONS[qIdx]) {
        totalPoints += LAUNCH_READINESS_QUESTIONS[qIdx].options[optIdx].points;
      }
    });
    const normalized = Math.min(100, Math.round((totalPoints / 115) * 100));
    return normalized;
  };

  const score = calculateScore();

  const getScoreVerdict = () => {
    if (score >= 80) {
      return {
        label: '🚀 Ready for High Velocity Launch',
        color: 'text-emerald-600 dark:text-emerald-400',
        badgeColor: 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
        summary: 'Your assets and audience base are in prime position. With our launch hunting and synchronized launch day distribution, your product is positioned for leaderboard contention.'
      };
    } else if (score >= 50) {
      return {
        label: '⚡ Good Foundation with 2 Critical Gaps',
        color: 'text-amber-600 dark:text-amber-400',
        badgeColor: 'bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border-amber-200 dark:border-amber-800',
        summary: 'You have a solid core, but need a 2-3 week build-in-public ramp on X/LinkedIn and asset optimization to maximize launch momentum.'
      };
    } else {
      return {
        label: '🛠️ Needs Pre-Launch Foundation Sprint',
        color: 'text-blue-600 dark:text-blue-400',
        badgeColor: 'bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-800',
        summary: 'Launching today would risk your product being overlooked. Our 30-day pre-launch teaser strategy will build the necessary waitlist before going public.'
      };
    }
  };

  const verdict = getScoreVerdict();

  const handleCopySummary = () => {
    const text = `AxentAI Labs Launch Readiness Score: ${score}/100\nVerdict: ${verdict.label}\nSummary: ${verdict.summary}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl p-6 sm:p-8 bg-[#FAF9F6] dark:bg-[#0B0F17] border-[#E5E5E1] dark:border-[#1E293B] rounded-3xl text-[#1A1A1A] dark:text-white">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold tracking-[0.2em] text-[10px] uppercase">
              Interactive Launch Diagnostic
            </span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-display font-bold text-[#1A1A1A] dark:text-white">
            {showResults ? 'Launch Readiness Scorecard' : 'Calculate Your Launch Readiness'}
          </DialogTitle>
          <DialogDescription className="text-[#1A1A1A]/60 dark:text-slate-400 text-xs sm:text-sm font-sans">
            {showResults
              ? 'Based on multi-channel launch benchmarks and Product Hunt best practices.'
              : `Question ${currentStep + 1} of ${LAUNCH_READINESS_QUESTIONS.length}: Answer to generate your velocity roadmap.`}
          </DialogDescription>
        </DialogHeader>

        {!showResults ? (
          <div className="mt-4 space-y-4">
            {/* Progress bar */}
            <div className="w-full bg-[#E5E5E1] dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
              <motion.div
                className="bg-[#2563EB] h-full rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / LAUNCH_READINESS_QUESTIONS.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Question with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="text-base sm:text-lg font-bold text-[#1A1A1A] dark:text-white leading-snug">
                  {LAUNCH_READINESS_QUESTIONS[currentStep].question}
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {LAUNCH_READINESS_QUESTIONS[currentStep].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.points, idx)}
                      className="w-full p-4 text-left rounded-2xl border border-[#E5E5E1] dark:border-[#1E293B] hover:border-[#2563EB] dark:hover:border-blue-500 bg-white dark:bg-[#111827] hover:bg-blue-50/20 dark:hover:bg-blue-950/20 transition-all text-xs sm:text-sm font-sans text-[#1A1A1A] dark:text-slate-200 flex items-center justify-between group cursor-pointer"
                    >
                      <span className="font-medium">{option.text}</span>
                      <ArrowRight className="w-4 h-4 text-[#1A1A1A]/40 dark:text-slate-500 group-hover:text-[#2563EB] dark:group-hover:text-[#60A5FA] group-hover:translate-x-1 transition-all shrink-0 ml-2" />
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Back button */}
            {currentStep > 0 && (
              <div className="flex justify-start pt-2">
                <button
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="text-xs font-semibold text-[#1A1A1A]/60 dark:text-slate-400 hover:text-[#1A1A1A] dark:hover:text-white cursor-pointer"
                >
                  ← Back to previous question
                </button>
              </div>
            )}
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-5"
          >
            {/* Score Display Card */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white text-center border border-slate-700/80 shadow-xl relative overflow-hidden">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                Calculated Readiness Score
              </div>
              <div className="text-5xl font-display font-extrabold text-[#3B82F6]">
                {score}<span className="text-2xl text-slate-400 font-normal">/100</span>
              </div>
              <div className="mt-3 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-white border border-white/20">
                {verdict.label}
              </div>
              <p className="mt-3 text-xs text-slate-300 max-w-md mx-auto leading-relaxed font-sans">
                {verdict.summary}
              </p>
            </div>

            {/* Recommendations checklist based on selections */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50 dark:text-slate-400">
                  Custom Strategic Recommendations:
                </div>
                <button
                  onClick={handleCopySummary}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#2563EB] dark:text-[#60A5FA] hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>

              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {selectedAnswers.map((optIdx, qIdx) => {
                  const tip = LAUNCH_READINESS_QUESTIONS[qIdx]?.options[optIdx]?.tip;
                  if (!tip) return null;
                  return (
                    <div key={qIdx} className="p-3 rounded-2xl bg-white dark:bg-[#111827] border border-[#E5E5E1] dark:border-[#1E293B] text-xs flex items-start gap-2.5 text-[#1A1A1A]/85 dark:text-slate-200 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
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
                className="text-xs justify-center rounded-full"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                Retake Audit
              </Button>
              <Button
                onClick={() => {
                  onOpenChange(false);
                  onBookCall();
                }}
                className="flex-1 text-xs justify-center font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-full shadow-md shadow-blue-500/20"
              >
                <span>Review Audit with Our Team</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Button>
            </div>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};
