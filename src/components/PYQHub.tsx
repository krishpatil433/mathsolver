import React, { useState, useMemo } from 'react';
import { Unit } from '../types/math';
import { unitPYQData } from '../data/pyqAnalysis';
import { MathView } from './MathView';
import { 
  Award, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  BookOpen, 
  Filter, 
  Layers, 
  ChevronDown,
  ChevronUp,
  FileSpreadsheet,
  Check,
  Search,
  ArrowRight
} from 'lucide-react';

interface PYQHubProps {
  units: Unit[];
  initialUnitId?: number;
  onSelectTopic: (topicId: string) => void;
  onAskAI: (prompt: string) => void;
}

export const PYQHub: React.FC<PYQHubProps> = ({
  units,
  initialUnitId,
  onSelectTopic,
  onAskAI,
}) => {
  const [selectedUnitId, setSelectedUnitId] = useState<number | 'all'>(initialUnitId || 'all');
  const [selectedPaper, setSelectedPaper] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    '1-0': true,
    '2-0': true,
    '4-0': true,
  });

  const toggleCard = (key: string) => {
    setExpandedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Compile all questions with unit metadata
  const allQuestions = useMemo(() => {
    const list: Array<{
      unitId: number;
      unitName: string;
      paper: string;
      marks: number;
      questionText: string;
      latexQuestion?: string;
      given: string;
      toFind: string;
      formula: string;
      formulaExplanation: string;
      stepByStepSolution: Array<{
        stepTitle: string;
        explanation: string;
        mathLatex?: string;
        marksTag?: string;
      }>;
      finalAnswer: string;
      examTip: string;
      relatedTopicId: string;
    }> = [];

    Object.values(unitPYQData).forEach((u) => {
      u.paperQuestions.forEach((q) => {
        let relatedTopicId = `${u.unitId}.1`;
        if (u.unitId === 1) {
          if (q.questionText.includes('maxima') || q.questionText.includes('minima')) relatedTopicId = '1.5';
          else if (q.questionText.includes('Lagrange')) relatedTopicId = '1.6';
          else if (q.questionText.includes('Euler')) relatedTopicId = '1.4';
          else relatedTopicId = '1.2';
        } else if (u.unitId === 2) {
          if (q.questionText.includes('Eigen') || q.questionText.includes('eigen')) relatedTopicId = '2.10';
          else if (q.questionText.includes('Rank') || q.questionText.includes('rank')) relatedTopicId = '2.5';
          else if (q.questionText.includes('consistent') || q.questionText.includes('equations')) relatedTopicId = '2.7';
          else relatedTopicId = '2.3';
        } else if (u.unitId === 3) {
          if (q.questionText.includes('Moment') || q.questionText.includes('moment')) relatedTopicId = '3.5';
          else if (q.questionText.includes('Work') || q.questionText.includes('perpendicular') || q.questionText.includes('dot')) relatedTopicId = '3.4';
          else if (q.questionText.includes('triple') || q.questionText.includes('parallelepiped')) relatedTopicId = '3.6';
          else relatedTopicId = '3.1';
        } else if (u.unitId === 4) {
          if (q.questionText.includes('Simpson') && q.questionText.includes('1/3')) relatedTopicId = '4.4';
          else if (q.questionText.includes('Trapezoidal')) relatedTopicId = '4.3';
          else relatedTopicId = '4.2';
        } else if (u.unitId === 5) {
          if (q.questionText.includes('Simplex') || q.questionText.includes('simplex')) relatedTopicId = '5.4';
          else if (q.questionText.includes('Graphical') || q.questionText.includes('graphical')) relatedTopicId = '5.3';
          else relatedTopicId = '5.2';
        }

        list.push({
          unitId: u.unitId,
          unitName: u.unitName,
          ...q,
          relatedTopicId,
        });
      });
    });

    return list;
  }, []);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchUnit = selectedUnitId === 'all' || q.unitId === selectedUnitId;
      const matchPaper =
        selectedPaper === 'all' ||
        (selectedPaper === 'Summer 2025' && q.paper.includes('Summer 2025')) ||
        (selectedPaper === 'Winter 2025' && q.paper.includes('Winter 2025')) ||
        (selectedPaper === 'Summer 2026' && q.paper.includes('Summer 2026'));

      const qLow = searchQuery.toLowerCase().trim();
      const matchSearch =
        !qLow ||
        q.questionText.toLowerCase().includes(qLow) ||
        q.given.toLowerCase().includes(qLow) ||
        q.toFind.toLowerCase().includes(qLow) ||
        q.paper.toLowerCase().includes(qLow) ||
        q.unitName.toLowerCase().includes(qLow);

      return matchUnit && matchPaper && matchSearch;
    });
  }, [allQuestions, selectedUnitId, selectedPaper, searchQuery]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-indigo-500/10 to-purple-500/15 border border-amber-200 dark:border-amber-900/50 relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-amber-200 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-800">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>MSBTE Course Code 314320 – All Uploaded PYQ Papers Solved</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-slate-900 dark:text-white tracking-tight">
            Deep Step-by-Step PYQ Solutions & Exam Answer Sheets
          </h1>

          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
            Har question ko <strong>"Exam Answer Sheet"</strong> format mein solve kiya gaya hai: <strong>Given &rarr; To Find &rarr; Formula (with variable meaning) &rarr; Zero-jump step-by-step calculations &rarr; Final Answer &rarr; Exam Tip</strong>. Koi direct jump nahi!
          </p>

          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
            <span className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">
              Summer 2025 (Paper 24225)
            </span>
            <span className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">
              Winter 2025 (Paper 12526)
            </span>
            <span className="px-3 py-1 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200">
              Summer 2026 (Paper 25226)
            </span>
            <span className="px-3 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 font-bold text-emerald-800 dark:text-emerald-300">
              ✓ 100% Zero-Jump Rigorous Math
            </span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-3 p-4 sm:p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
        
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search any PYQ topic (e.g. Maxima, Lagrange, Rank, Eigenvalue, Simpson, Simplex, Moment)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filter controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
          
          {/* Paper selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs pb-1 sm:pb-0">
            <span className="text-slate-400 font-bold mr-1 shrink-0 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Paper:
            </span>
            {['all', 'Summer 2025', 'Winter 2025', 'Summer 2026'].map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPaper(p)}
                className={`px-3 py-1.5 rounded-xl font-bold transition whitespace-nowrap ${
                  selectedPaper === p
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {p === 'all' ? 'All Papers' : p}
              </button>
            ))}
          </div>

          {/* Unit selector */}
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            <span className="text-slate-400 font-bold mr-1 shrink-0 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Unit:
            </span>
            <button
              onClick={() => setSelectedUnitId('all')}
              className={`px-2.5 py-1.5 rounded-xl font-bold transition ${
                selectedUnitId === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              All
            </button>
            {[1, 2, 3, 4, 5].map((uId) => (
              <button
                key={uId}
                onClick={() => setSelectedUnitId(uId)}
                className={`px-2.5 py-1.5 rounded-xl font-bold transition ${
                  selectedUnitId === uId
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                U{uId}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Showing Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <div>
          Showing <strong>{filteredQuestions.length}</strong> exam paper questions with zero-jump answers
        </div>
        <div className="text-indigo-600 dark:text-indigo-400 font-semibold">
          Click any card to expand full step-by-step breakdown
        </div>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, idx) => {
          const cardKey = `${q.unitId}-${idx}`;
          const isExpanded = expandedCards[cardKey] ?? true;

          return (
            <div
              key={cardKey}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition-all"
            >
              
              {/* Question Header */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800">
                      {q.paper}
                    </span>
                    <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                      Unit {q.unitId}: {q.unitName}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                      {q.marks} Marks
                    </span>
                    <button
                      onClick={() => onSelectTopic(q.relatedTopicId)}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-xl text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 hover:bg-indigo-100 transition"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Learn Concept {q.relatedTopicId}</span>
                    </button>
                  </div>
                </div>

                {/* Problem Statement */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Question from Exam Paper:
                  </div>
                  <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                    {q.questionText}
                  </p>
                  {q.latexQuestion && <MathView block math={q.latexQuestion} />}
                </div>

                {/* Toggle Button */}
                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => toggleCard(cardKey)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronUp className="w-4 h-4" />
                        <span>Hide Complete Answer Sheet Template</span>
                      </>
                    ) : (
                      <>
                        <ChevronDown className="w-4 h-4" />
                        <span>Show Complete Exam Answer Sheet (Given, Formula, Step-by-Step, Tip)</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => onAskAI(`Mujhe previous year exam question "${q.questionText}" detail mein Hinglish me step by step samjhao aur variables ka matlab batao.`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/60 hover:bg-purple-100 transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                    <span>Ask AI About This Question</span>
                  </button>
                </div>
              </div>

              {/* Exam Answer Sheet Format Container */}
              {isExpanded && (
                <div className="border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/50 p-5 sm:p-7 space-y-6">
                  
                  {/* Header of Answer Sheet */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="w-5 h-5 text-indigo-600" />
                      <span className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white uppercase tracking-wide">
                        Exam Answer Sheet Format (Model Solution)
                      </span>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-200 dark:border-emerald-800">
                      Full Marks Target: {q.marks}/{q.marks}
                    </span>
                  </div>

                  {/* 1. Given & To Find Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Given */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-1.5">
                      <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-indigo-600" />
                        <span>📌 Given (Diya Gaya Hai):</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {q.given}
                      </p>
                    </div>

                    {/* To Find */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-1.5">
                      <div className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-purple-600" />
                        <span>🎯 To Find (Nikalna Kya Hai):</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
                        {q.toFind}
                      </p>
                    </div>
                  </div>

                  {/* 2. Formula & Deep Variable Breakdown */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-indigo-200 dark:border-indigo-900/60 shadow-2xs space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-bold text-indigo-700 dark:text-indigo-300 uppercase tracking-wide flex items-center gap-1.5">
                        <span>📐 Governing Formula:</span>
                      </div>
                      <span className="text-[11px] font-semibold text-slate-400">Formula Step Allotment</span>
                    </div>

                    <div className="py-1">
                      <MathView block math={q.formula} />
                    </div>

                    <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 leading-relaxed space-y-1">
                      <div className="font-bold">Formula Samjho (Variables Meaning):</div>
                      <p>{q.formulaExplanation}</p>
                    </div>
                  </div>

                  {/* 3. Step-by-Step Solution (Zero Jumps) */}
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                      <span>✍️ Step-by-Step Solution (Har Ek Calculation):</span>
                    </div>

                    <div className="space-y-3">
                      {q.stepByStepSolution.map((st, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xs space-y-2"
                        >
                          <div className="flex items-center justify-between gap-2">
                            <div className="font-heading font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] flex items-center justify-center font-bold">
                                {sIdx + 1}
                              </span>
                              <span>{st.stepTitle}</span>
                            </div>
                            {st.marksTag && (
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                                {st.marksTag}
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 pl-7 leading-relaxed whitespace-pre-line">
                            {st.explanation}
                          </p>

                          {st.mathLatex && (
                            <div className="pl-7 pt-1">
                              <MathView block math={st.mathLatex} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 4. Final Answer Box */}
                  <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 flex items-center gap-3 text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <span className="uppercase text-[11px] tracking-wider block text-emerald-700 dark:text-emerald-400">🏁 Final Answer:</span>
                      <span className="font-heading">{q.finalAnswer}</span>
                    </div>
                  </div>

                  {/* 5. Exam Tip Box */}
                  <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/50 flex items-start gap-3 text-xs text-amber-950 dark:text-amber-200">
                    <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold uppercase tracking-wider block text-amber-900 dark:text-amber-300 mb-0.5">💡 Exam Tip (Full Marks Kaise Mileinge):</span>
                      <p className="leading-relaxed">{q.examTip}</p>
                    </div>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
