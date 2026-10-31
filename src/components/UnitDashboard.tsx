import React from 'react';
import { Unit, SubTopic } from '../types/math';
import { 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Sparkles, 
  Zap, 
  Check, 
  Award,
  Layers,
  Search,
  FileText
} from 'lucide-react';

interface UnitDashboardProps {
  units: Unit[];
  completedTopicIds: string[];
  searchQuery: string;
  onSelectTopic: (topicId: string) => void;
  onOpenCheatSheet: () => void;
  onSelectPYQ?: (unitId?: number) => void;
}

export const UnitDashboard: React.FC<UnitDashboardProps> = ({
  units,
  completedTopicIds,
  searchQuery,
  onSelectTopic,
  onOpenCheatSheet,
  onSelectPYQ,
}) => {
  const isTopicCompleted = (id: string) => completedTopicIds.includes(id);

  // Filter topics if search query is provided
  const query = searchQuery.trim().toLowerCase();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Hero Welcome Banner */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-900 text-white shadow-xl shadow-indigo-900/10 p-6 sm:p-10 border border-indigo-600/30">
        <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute right-20 top-6 w-40 h-40 bg-indigo-400/20 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 border border-indigo-400/40 text-indigo-100 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            Diploma & Degree Engineering Mathematics
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-heading leading-tight mb-4">
            Math<span className="text-amber-300">Genie</span> – Engineering Maths Made Simple
          </h1>

          <p className="text-sm sm:text-base text-indigo-100 leading-relaxed font-normal mb-6">
            Bilkul <strong>zero se (ground level)</strong> seekho pure 5 units! Har concept ke sath real-life analogies, formula breakdown, step-by-step solved examples ("kyun kiya" reasoning ke sath), shortcuts aur <strong>Previous Year Exam Papers (Summer 2025, Winter 2025, Summer 2026)</strong> step-by-step marking scheme ke sath. Ghabrane ki bilkul zarurat nahi hai!
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectTopic('1.1')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-indigo-900 font-semibold text-xs sm:text-sm shadow-md hover:bg-indigo-50 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Shuru Karein (Unit 1.1)</span>
              <ArrowRight className="w-4 h-4 text-indigo-700" />
            </button>

            {onSelectPYQ && (
              <button
                onClick={() => onSelectPYQ()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>Solved Exam Papers (2025–26)</span>
              </button>
            )}

            <button
              onClick={onOpenCheatSheet}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/40 hover:bg-indigo-600/60 border border-indigo-300/30 text-white font-medium text-xs sm:text-sm backdrop-blur-xs transition"
            >
              <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Exam Shortcuts Cheat Sheet</span>
            </button>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-6 border-t border-indigo-500/30 text-xs">
          <div>
            <div className="text-indigo-200 text-[11px]">Exact Syllabus</div>
            <div className="font-bold text-white text-base">5 Units Complete</div>
          </div>
          <div>
            <div className="text-indigo-200 text-[11px]">Sub-topics</div>
            <div className="font-bold text-white text-base">32 Sub-topics</div>
          </div>
          <div>
            <div className="text-indigo-200 text-[11px]">Previous Papers</div>
            <div className="font-bold text-amber-300 text-base">S25 • W25 • S26</div>
          </div>
          <div>
            <div className="text-indigo-200 text-[11px]">Instant Help</div>
            <div className="font-bold text-white text-base">AI Doubt Solver</div>
          </div>
        </div>
      </section>

      {/* Dedicated PYQ Callout Banner */}
      {onSelectPYQ && (
        <section className="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-amber-500/15 via-indigo-500/10 to-purple-500/15 border border-amber-200 dark:border-amber-900/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase bg-amber-200 dark:bg-amber-950 text-amber-900 dark:text-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Exam Analysis Included</span>
            </div>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white">
              Solved Question Papers (Summer 2025, Winter 2025, Summer 2026)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-2xl">
              Dekho exact exam papers mein questions kaise aate hain, unhe answer sheet mein kaise likhna hota hai, aur examiner har step par kitne marks deta hai!
            </p>
          </div>

          <button
            onClick={() => onSelectPYQ()}
            className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition"
          >
            Open Exam Papers Hub →
          </button>
        </section>
      )}

      {/* Search results summary if searching */}
      {query && (
        <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border border-indigo-200 dark:border-indigo-800 text-xs text-indigo-900 dark:text-indigo-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-indigo-500" />
            <span>Showing filtered topics for: "<strong>{searchQuery}</strong>"</span>
          </div>
        </div>
      )}

      {/* 5 Big Unit Cards */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white">
              Course Syllabus (5 Units)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Select any unit or topic to start mastering the concept step-by-step
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit) => {
            const total = unit.subTopics.length;
            const completed = unit.subTopics.filter((t) => isTopicCompleted(t.id)).length;
            const percent = Math.round((completed / total) * 100);

            // Filter subtopics if search query active
            const filteredSubTopics = query
              ? unit.subTopics.filter(
                  (t) =>
                    t.title.toLowerCase().includes(query) ||
                    t.subtitle.toLowerCase().includes(query) ||
                    t.id.includes(query) ||
                    t.yeKyaHai.definition.toLowerCase().includes(query)
                )
              : unit.subTopics;

            // If query exists and no topics match in this unit, soften card appearance
            if (query && filteredSubTopics.length === 0) {
              return null;
            }

            return (
              <div
                key={unit.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-indigo-300 dark:hover:border-indigo-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Unit Top Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider uppercase bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 mb-1">
                        {unit.code}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
                        {unit.title}
                      </h3>
                    </div>
                    <div className="shrink-0 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                    {unit.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center text-[11px] mb-1 font-medium">
                      <span className="text-slate-600 dark:text-slate-400">Progress</span>
                      <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                        {completed}/{total} ({percent}%)
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>

                  {/* Subtopics Checklist / Bullets */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-100 dark:border-slate-800 pt-3">
                    <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                      <span>Sub-Topics ({filteredSubTopics.length}):</span>
                      {onSelectPYQ && (
                        <button
                          onClick={() => onSelectPYQ(unit.id)}
                          className="text-amber-600 dark:text-amber-400 hover:underline normal-case font-bold"
                        >
                          Unit PYQs →
                        </button>
                      )}
                    </div>
                    {filteredSubTopics.map((topic) => {
                      const done = isTopicCompleted(topic.id);
                      return (
                        <div
                          key={topic.id}
                          onClick={() => onSelectTopic(topic.id)}
                          className={`flex items-center justify-between p-2 rounded-xl text-xs cursor-pointer transition ${
                            done
                              ? 'bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-300'
                              : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="font-mono font-semibold text-[11px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                              {topic.id}
                            </span>
                            <span className="truncate font-medium">{topic.title}</span>
                          </div>
                          {done ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          ) : (
                            <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0 group-hover:text-indigo-500" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Card Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onSelectTopic(unit.subTopics[0].id)}
                    className="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xs transition"
                  >
                    <span>{completed > 0 ? 'Continue Unit' : 'Start Learning'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {onSelectPYQ && (
                    <button
                      onClick={() => onSelectPYQ(unit.id)}
                      className="py-2.5 px-3 rounded-xl text-xs font-semibold text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 hover:bg-amber-100 transition shrink-0"
                      title="View Previous Year Paper Questions for this unit"
                    >
                      <FileText className="w-3.5 h-3.5 text-amber-600" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
