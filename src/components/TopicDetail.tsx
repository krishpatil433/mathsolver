import React, { useState } from 'react';
import { SubTopic, Unit, EquationBreakdown, ExamWritingTemplate } from '../types/math';
import { MathView } from './MathView';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  Lightbulb, 
  BookOpen, 
  Layers, 
  HelpCircle, 
  Zap, 
  AlertTriangle, 
  Award, 
  MessageSquareQuote,
  Eye,
  EyeOff,
  Copy,
  Check,
  Sparkles,
  FileCheck,
  Target,
  FileText
} from 'lucide-react';

interface TopicDetailProps {
  topic: SubTopic;
  unit?: Unit;
  isCompleted: boolean;
  onToggleComplete: (topicId: string) => void;
  onPrevTopic: () => void;
  onNextTopic: () => void;
  prevTopic: SubTopic | null;
  nextTopic: SubTopic | null;
  onAskAI: (questionPrompt: string) => void;
  onNavigateToPYQ?: (unitId?: number) => void;
}

export const TopicDetail: React.FC<TopicDetailProps> = ({
  topic,
  unit,
  isCompleted,
  onToggleComplete,
  onPrevTopic,
  onNextTopic,
  prevTopic,
  nextTopic,
  onAskAI,
  onNavigateToPYQ,
}) => {
  // Practice question solution toggle states
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [copiedFormulaIndex, setCopiedFormulaIndex] = useState<number | null>(null);

  const toggleSolution = (id: string) => {
    setOpenSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCompleteClick = () => {
    if (!isCompleted) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    }
    onToggleComplete(topic.id);
  };

  const copyFormula = (latex: string, index: number) => {
    navigator.clipboard.writeText(latex);
    setCopiedFormulaIndex(index);
    setTimeout(() => setCopiedFormulaIndex(null), 2000);
  };

  // Helper to construct a dynamic Equation Breakdown if not explicitly provided
  const activeBreakdown: EquationBreakdown = topic.equationBreakdown || {
    title: `${topic.title} – Core Formula Deep Dive`,
    formulaLatex: topic.formulaSheet.formulas[0]?.latex || '\\text{Formula}',
    kyunAisaHotaHai: `Is topic ka core principle yeh hai ki mathematical laws aur physical rate of changes ko precise algebra mein express kiya jaye. Jab aap formula ke terms ko tod kar dekhte hain, har symbol ek specific geometry ya physical quantity represent karta hai.`,
    termExplanations: topic.formulaSheet.formulas.map((f, i) => ({
      symbol: f.name,
      symbolLatex: f.latex.split('=')[0]?.trim() || f.latex,
      meaning: f.note || `Term representing ${f.name} in this computation.`
    })),
    numericExample: {
      values: 'Standard test values',
      calculationLatex: topic.solvedExamples[0]?.steps[0]?.mathLatex || topic.formulaSheet.formulas[0]?.latex || 'f(x) = 0',
      result: topic.solvedExamples[0]?.finalAnswer || 'Computed value'
    }
  };

  // Helper to construct a dynamic Exam Writing Template if not explicitly provided
  const activeExamTemplate: ExamWritingTemplate = topic.examTemplate || {
    questionType: `Standard University Exam Problem on ${topic.title}`,
    totalMarks: '4 Marks',
    examinerCatchphrase: 'Examiner checks if initial formula is stated clearly, followed by step-by-step substitution and boxed final answer.',
    steps: topic.solvedExamples[0]?.steps.map((st, i) => ({
      stepNumber: i + 1,
      stepHeading: `Step ${i + 1}: ${st.explanation.split('.')[0]}`,
      whatToWrite: `Write explicitly: "${st.explanation}" and compute intermediate value:`,
      latexTemplate: st.mathLatex,
      marksAllotted: i === 0 ? '1 Mark (Formula & Setup)' : i === 1 ? '2 Marks (Calculation)' : '1 Mark (Final Result)'
    })) || [
      {
        stepNumber: 1,
        stepHeading: 'Write the governing formula and given data',
        whatToWrite: 'Given: write inputs and state formula clearly.',
        marksAllotted: '1 Mark'
      },
      {
        stepNumber: 2,
        stepHeading: 'Substitute values & compute intermediate steps',
        whatToWrite: 'Perform algebraic operations showing all steps.',
        marksAllotted: '2 Marks'
      },
      {
        stepNumber: 3,
        stepHeading: 'State the final answer with appropriate units',
        whatToWrite: 'Box the final calculated result.',
        marksAllotted: '1 Mark'
      }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {unit?.code || `UNIT ${topic.unitId}`}: {unit?.title}
          </span>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="font-mono bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 font-bold">
            Topic {topic.id}
          </span>
        </div>

        {/* Mark Completed Button */}
        <button
          onClick={handleCompleteClick}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-semibold text-xs transition shadow-xs ${
            isCompleted
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {isCompleted ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-200" />
              <span>Completed!</span>
            </>
          ) : (
            <>
              <Circle className="w-4 h-4 text-slate-400" />
              <span>Mark as Complete</span>
            </>
          )}
        </button>
      </div>

      {/* Main Title & Subtitle */}
      <div>
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
            Sub-Topic {topic.id}
          </span>
          <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-900/50">
            MSBTE Syllabus 314320
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight mb-2">
          {topic.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-medium">
          {topic.subtitle}
        </p>
      </div>

      {/* Quick Jump Anchor Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 text-xs border-y border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 sticky top-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md z-20">
        <span className="text-[10px] uppercase font-bold text-slate-400 mr-1 shrink-0">Jump to:</span>
        <a href="#section-ye-kya-hai" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
          1. Ye Kya Hai?
        </a>
        <a href="#section-ground-level" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
          2. Ground Level Se
        </a>
        <a href="#section-formulas" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
          3. Formula Sheet
        </a>
        <a href="#section-equation-breakdown" className="px-2.5 py-1 rounded-md hover:bg-indigo-50 dark:hover:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold whitespace-nowrap">
          4. Equation Samjho
        </a>
        <a href="#section-exam-template" className="px-2.5 py-1 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950/60 text-purple-600 dark:text-purple-400 font-semibold whitespace-nowrap">
          5. Exam Mein Kaise Likhein?
        </a>
        <a href="#section-examples" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
          6. Solved Examples
        </a>
        <a href="#section-shortcuts" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
          7. Shortcuts & Tricks
        </a>
        <a href="#section-practice" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">
          8. Practice Questions
        </a>
      </div>

      {/* ========================================================
          SECTION A: "YE KYA HAI?" (Definition + Real-life Analogy)
         ======================================================== */}
      <section id="section-ye-kya-hai" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
            A
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            "Ye Kya Hai?" — Simple Definition & Analogy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Definition */}
          <div className="p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Ground Definition (2-3 Lines)</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {topic.yeKyaHai.definition}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-indigo-900/40 text-[11px] text-indigo-600 dark:text-indigo-400 font-medium">
              💡 Technical terms in English, logic in plain Hinglish!
            </div>
          </div>

          {/* Analogy */}
          <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wide mb-2">
                <Lightbulb className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Real-Life Analogy</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                {topic.yeKyaHai.analogy}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100 dark:border-amber-900/40 text-[11px] text-amber-700 dark:text-amber-400 font-medium">
              🍕 Dimag mein visualise karoge toh formula kabhi nahi bhoologe.
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION B: "GROUND LEVEL SE SAMJHO" (Zero Se Concept)
         ======================================================== */}
      <section id="section-ground-level" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
            B
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
            "Ground Level Se Samjho" — Step-by-Step Concept
          </h2>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <p className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
            {topic.groundLevel.intro}
          </p>

          <div className="grid grid-cols-1 gap-4 pt-2">
            {topic.groundLevel.points.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5"
              >
                <div className="flex items-center gap-2 font-heading font-semibold text-sm text-slate-900 dark:text-white">
                  <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span>{pt.heading}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-7 whitespace-pre-line">
                  {pt.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION C: "FORMULA SHEET" (Clean Highlighted Cards)
         ======================================================== */}
      <section id="section-formulas" className="scroll-mt-28 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
              C
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              "Formula Sheet" — Essential Math Formulas
            </h2>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {topic.formulaSheet.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topic.formulaSheet.formulas.map((form, idx) => (
            <div
              key={idx}
              className="relative group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span>{form.name}</span>
                  <button
                    onClick={() => copyFormula(form.latex, idx)}
                    className="opacity-60 group-hover:opacity-100 p-1 text-slate-400 hover:text-indigo-600 transition"
                    title="Copy LaTeX"
                  >
                    {copiedFormulaIndex === idx ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                <MathView block math={form.latex} />
              </div>
              {form.note && (
                <p className="mt-2 text-[11px] text-slate-500 dark:text-slate-400 italic">
                  Tip: {form.note}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION D: "EQUATION SAMJHO" (DEEP EQUATION BREAKDOWN)
          - Formula cleanly in KaTeX
          - "Kyun aisa hota hai?" deep explanation
          - Term explanations table
          - Numeric example of putting values
         ======================================================== */}
      <section id="section-equation-breakdown" className="scroll-mt-28 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
              D
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                "Equation Samjho" — Deep Equation Breakdown
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Formula ratto mat! Har ek term ka matlab aur "Kyun aisa hota hai" samjho.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            <Sparkles className="w-3.5 h-3.5" /> Deep Breakdown
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/40 dark:from-slate-900 dark:via-slate-900/90 dark:to-indigo-950/30 border border-indigo-200 dark:border-indigo-900/60 shadow-xs space-y-6">
          
          {/* Main Formula Card */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-indigo-100 dark:border-indigo-800/70 shadow-2xs space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              {activeBreakdown.title}
            </div>
            <div className="py-2">
              <MathView block math={activeBreakdown.formulaLatex} />
            </div>
          </div>

          {/* Kyun Aisa Hota Hai? */}
          <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-amber-900 dark:text-amber-200">
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>Kyun Aisa Hota Hai? (Why this equation works)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-normal">
              {activeBreakdown.kyunAisaHotaHai}
            </p>
          </div>

          {/* Term Explanation Breakdown Table */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wide text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>Har Term Ka Asli Meaning (Variables & Symbols Breakdown):</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeBreakdown.termExplanations.map((t, tIdx) => (
                <div
                  key={tIdx}
                  className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col justify-between space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      {t.symbol}
                    </span>
                    {t.symbolLatex && (
                      <span className="text-xs">
                        <MathView math={t.symbolLatex} />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-snug">
                    {t.meaning}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Numeric Plug-In Example */}
          <div className="p-4 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/50 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 dark:text-indigo-200">
              <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Numeric Values Rakh Kar Dekho (Direct Substitution Example):</span>
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              <strong>Sample Input:</strong> {activeBreakdown.numericExample.values}
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-800">
              <MathView block math={activeBreakdown.numericExample.calculationLatex} />
            </div>
            <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5 pt-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>Result: {activeBreakdown.numericExample.result}</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          SECTION E: "EXAM MEIN KAISE LIKHEIN?" (PERFECT ANSWER TEMPLATE)
          - Perfect Answer Template based on previous year papers
          - Step 1, Step 2, Step 3 with exact lines to write
          - Explicit marks allotted per step ([1 Mark], [2 Marks])
         ======================================================== */}
      <section id="section-exam-template" className="scroll-mt-28 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold text-xs">
              E
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
                "Exam Mein Kaise Likhein?" — Perfect Answer Template
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                MSBTE Examiner's Model Solution Pattern: Exactly kya likhna hai aur kahan kitne marks milte hain.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-50 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
            <Award className="w-3.5 h-3.5" /> Step-by-Step Marking
          </span>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-900/60 shadow-xs space-y-5">
          
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Question Blueprint
              </span>
              <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {activeExamTemplate.questionType}
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300">
              Total Weightage: {activeExamTemplate.totalMarks}
            </span>
          </div>

          {/* Examiner Catchphrase Note */}
          <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
            <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <strong>Examiner's Mindset:</strong> {activeExamTemplate.examinerCatchphrase}
            </div>
          </div>

          {/* Step-by-Step Answer Structure with Marks */}
          <div className="space-y-4">
            {activeExamTemplate.steps.map((st) => (
              <div
                key={st.stepNumber}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 relative"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-purple-600 text-white text-xs flex items-center justify-center font-bold">
                      {st.stepNumber}
                    </span>
                    <span className="font-heading font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                      {st.stepHeading}
                    </span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shrink-0">
                    {st.marksAllotted}
                  </span>
                </div>

                <div className="pl-8 space-y-2">
                  <div className="text-xs text-slate-600 dark:text-slate-300 font-mono bg-white dark:bg-slate-900/80 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Answer Sheet Mein Yeh Line Likho:</span>
                    {st.whatToWrite}
                  </div>

                  {st.latexTemplate && (
                    <div className="pt-1">
                      <MathView block math={st.latexTemplate} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Quick link to PYQ Hub */}
          {onNavigateToPYQ && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => onNavigateToPYQ(topic.unitId)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
              >
                <FileText className="w-4 h-4" />
                <span>See all Previous Year Questions for Unit {topic.unitId} →</span>
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================
          SECTION F: "SOLVED EXAMPLES" (EACH Step with "Kyun Kiya")
         ======================================================== */}
      <section id="section-examples" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
            F
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              "Solved Examples" — Step-by-Step with "Kyun Kiya"
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Sirf answer nahi, har step ke peechhe ka logical reason samjho
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {topic.solvedExamples.map((ex, exIdx) => (
            <div
              key={exIdx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    Example {exIdx + 1}
                  </span>
                  <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                    {ex.title}
                  </h3>
                </div>
              </div>

              {/* Problem Statement */}
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                <strong>Problem:</strong> {ex.problem}
                {ex.latexProblem && <MathView block math={ex.latexProblem} />}
              </div>

              {/* Steps */}
              <div className="space-y-3 pt-2">
                {ex.steps.map((st) => (
                  <div
                    key={st.stepNumber}
                    className="relative pl-6 border-l-2 border-indigo-400 dark:border-indigo-600 space-y-1.5"
                  >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-600 text-white text-[10px] flex items-center justify-center font-bold">
                      {st.stepNumber}
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                      Step {st.stepNumber}: {st.explanation}
                    </div>

                    <div className="p-2 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-300">
                      <strong>Kyun kiya:</strong> {st.whyThisStep}
                    </div>

                    {st.mathLatex && <MathView block math={st.mathLatex} />}
                  </div>
                ))}
              </div>

              {/* Final Answer */}
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs sm:text-sm font-semibold text-emerald-900 dark:text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Final Answer: {ex.finalAnswer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION G: "SHORTCUTS & TRICKS" (Exam Time-Savers)
         ======================================================== */}
      <section id="section-shortcuts" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
            G
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              "Shortcuts & Tricks" — Exam Time-Savers
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Exam hall me 10 minute ka sawal 1 minute me karne ke mnemonics aur speed tricks
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topic.shortcuts.map((sc, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-200 dark:border-amber-900/60 space-y-2.5"
            >
              <div className="flex items-center gap-2 font-heading font-bold text-sm text-amber-900 dark:text-amber-200">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                <span>{sc.title}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {sc.rule}
              </p>

              {sc.mnemonic && (
                <div className="p-2.5 rounded-lg bg-white dark:bg-slate-800 border border-amber-200 dark:border-amber-800/80 text-xs font-mono text-amber-900 dark:text-amber-300">
                  ⚡ <strong>Mnemonic:</strong> {sc.mnemonic}
                </div>
              )}

              {sc.latexFormula && <MathView block math={sc.latexFormula} />}

              <div className="text-[11px] text-slate-500 dark:text-slate-400">
                <strong>Kab use karein:</strong> {sc.whenToUse}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          SECTION H: "PRACTICE QUESTIONS" (With Show Solution)
         ======================================================== */}
      <section id="section-practice" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
            H
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              "Practice Questions" — Test Your Understanding
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Pehle rough copy me khud solve karo, fir solution check karo!
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {topic.practiceQuestions.map((pq, idx) => {
            const isOpen = !!openSolutions[pq.id];
            return (
              <div
                key={pq.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs flex items-center justify-center font-bold shrink-0">
                      Q{idx + 1}
                    </span>
                    <span className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                      {pq.question}
                    </span>
                  </div>

                  <button
                    onClick={() => toggleSolution(pq.id)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 transition shrink-0"
                  >
                    {isOpen ? (
                      <>
                        <EyeOff className="w-3.5 h-3.5" />
                        <span>Hide Solution</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Show Solution</span>
                      </>
                    )}
                  </button>
                </div>

                {pq.latex && <MathView block math={pq.latex} />}

                {pq.hint && (
                  <div className="text-xs text-slate-500 dark:text-slate-400 italic">
                    💡 Hint: {pq.hint}
                  </div>
                )}

                {/* Solution Reveal */}
                {isOpen && (
                  <div className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-indigo-200 dark:border-indigo-900/60 space-y-2 animate-in fade-in duration-200">
                    <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                      Verified Solution:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                      {pq.solution}
                    </p>
                    {pq.solutionLatex && <MathView block math={pq.solutionLatex} />}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          EXTRAS: COMMON MISTAKES & EXAM TIP BOXES
         ======================================================== */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Common Mistakes */}
        <div className="p-5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 space-y-3">
          <div className="flex items-center gap-2 font-heading font-bold text-sm text-rose-900 dark:text-rose-200">
            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>Common Mistakes (Ye Galti Mat Karna!)</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-rose-950 dark:text-rose-300">
            {topic.commonMistakes.map((mis, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{mis}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Exam Tip */}
        <div className="p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 space-y-3">
          <div className="flex items-center gap-2 font-heading font-bold text-sm text-amber-900 dark:text-amber-200">
            <Award className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Exam Scoring Tip (Examiner's Mindset)</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed">
            {topic.examTip}
          </p>
        </div>
      </section>

      {/* Ask AI Trigger for Current Topic */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200 dark:border-indigo-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div>
          <div className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center justify-center sm:justify-start gap-1.5">
            <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Still confused about "{topic.title}"?</span>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            MathGenie AI Doubt Solver is ready to explain from zero level in Hinglish.
          </p>
        </div>
        <button
          onClick={() => onAskAI(`Mujhe topic "${topic.id} ${topic.title}" simple Hinglish mein ground level se samjhao aur ek real life analogy do.`)}
          className="px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-xs whitespace-nowrap"
        >
          Ask AI About This Topic
        </button>
      </div>

      {/* Bottom Previous / Next Topic Navigation */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
        {prevTopic ? (
          <button
            onClick={onPrevTopic}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-indigo-400 transition max-w-[45%]"
          >
            <ChevronLeft className="w-4 h-4 shrink-0 text-indigo-600" />
            <div className="text-left truncate">
              <div className="text-[10px] text-slate-400">Previous Topic</div>
              <div className="font-semibold truncate">{prevTopic.id} {prevTopic.title}</div>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextTopic ? (
          <button
            onClick={onNextTopic}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-700 transition max-w-[45%] ml-auto"
          >
            <div className="text-right truncate">
              <div className="text-[10px] text-indigo-200">Next Topic</div>
              <div className="font-semibold truncate">{nextTopic.id} {nextTopic.title}</div>
            </div>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        ) : (
          <div />
        )}
      </div>

    </div>
  );
};
