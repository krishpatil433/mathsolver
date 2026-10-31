import React, { useState } from 'react';
import { Unit } from '../types/math';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  FileText, 
  Zap, 
  GraduationCap, 
  Layers,
  X
} from 'lucide-react';

interface SidebarProps {
  units: Unit[];
  activeTopicId: string | null;
  activeView: 'topic' | 'pyq' | 'home';
  completedTopicIds: string[];
  onSelectTopic: (topicId: string) => void;
  onSelectPYQ: (unitId?: number) => void;
  onGoHome: () => void;
  onOpenCheatSheet: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  units,
  activeTopicId,
  activeView,
  completedTopicIds,
  onSelectTopic,
  onSelectPYQ,
  onGoHome,
  onOpenCheatSheet,
  isOpenMobile,
  onCloseMobile,
}) => {
  // Keep track of which units are expanded in sidebar
  const [expandedUnits, setExpandedUnits] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: false,
    4: false,
    5: false,
  });

  const toggleUnit = (unitId: number) => {
    setExpandedUnits((prev) => ({ ...prev, [unitId]: !prev[unitId] }));
  };

  const isCompleted = (id: string) => completedTopicIds.includes(id);

  const sidebarContent = (
    <div className="h-full flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 select-none">
      
      {/* Top Header / Brand */}
      <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
        <div 
          onClick={() => {
            onGoHome();
            onCloseMobile();
          }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <div className="font-heading font-bold text-sm tracking-tight text-slate-900 dark:text-white">
              Math<span className="text-indigo-600 dark:text-indigo-400">Genie</span>
            </div>
            <div className="text-[10px] text-slate-400">Syllabus & PYQ Hub</div>
          </div>
        </div>

        {/* Mobile close button */}
        <button
          onClick={onCloseMobile}
          className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Navigation Links */}
      <div className="p-3 border-b border-slate-100 dark:border-slate-800 space-y-1 text-xs">
        <button
          onClick={() => {
            onGoHome();
            onCloseMobile();
          }}
          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl font-medium transition ${
            activeView === 'home'
              ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4 text-indigo-500" />
          <span>Course Dashboard</span>
        </button>

        {/* Previous Year Papers (PYQ) Hub */}
        <button
          onClick={() => {
            onSelectPYQ();
            onCloseMobile();
          }}
          className={`w-full flex items-center justify-between px-3 py-2 rounded-xl font-medium transition ${
            activeView === 'pyq'
              ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-bold border border-amber-200 dark:border-amber-800'
              : 'text-slate-700 dark:text-slate-300 hover:bg-amber-50/50 dark:hover:bg-amber-950/30'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>PYQ Exam Papers</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-200/80 dark:bg-amber-900/60 text-amber-900 dark:text-amber-200 font-bold">
            S25•W25•S26
          </span>
        </button>

        {/* Shortcuts button */}
        <button
          onClick={onOpenCheatSheet}
          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Formula Cheat Sheet</span>
        </button>
      </div>

      {/* Units & Sub-Topics Tree */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
        <div className="px-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
          Syllabus Units (5)
        </div>

        {units.map((unit) => {
          const isExpanded = !!expandedUnits[unit.id];
          const total = unit.subTopics.length;
          const doneCount = unit.subTopics.filter((t) => isCompleted(t.id)).length;

          return (
            <div key={unit.id} className="rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800/80">
              
              {/* Unit Header Accordion Toggle */}
              <button
                onClick={() => toggleUnit(unit.id)}
                className="w-full flex items-center justify-between p-2.5 text-left bg-slate-50/70 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <div className="flex items-center gap-2 truncate pr-2">
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                  <span className="text-xs font-bold font-heading text-slate-900 dark:text-white truncate">
                    {unit.code}: {unit.title}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 shrink-0 font-mono font-medium">
                  {doneCount}/{total}
                </span>
              </button>

              {/* Sub-Topics List */}
              {isExpanded && (
                <div className="p-1 space-y-0.5 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                  {unit.subTopics.map((topic) => {
                    const active = activeView === 'topic' && activeTopicId === topic.id;
                    const done = isCompleted(topic.id);

                    return (
                      <button
                        key={topic.id}
                        onClick={() => {
                          onSelectTopic(topic.id);
                          onCloseMobile();
                        }}
                        className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-left transition ${
                          active
                            ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate pr-2">
                          <span
                            className={`font-mono text-[10px] px-1 py-0.2 rounded font-bold shrink-0 ${
                              active
                                ? 'bg-indigo-700 text-indigo-100'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                            }`}
                          >
                            {topic.id}
                          </span>
                          <span className="truncate">{topic.title}</span>
                        </div>

                        {done ? (
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              active ? 'text-emerald-300' : 'text-emerald-500'
                            }`}
                          />
                        ) : (
                          <Circle
                            className={`w-3 h-3 shrink-0 opacity-40 ${
                              active ? 'text-indigo-200' : 'text-slate-400'
                            }`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Progress Summary */}
      <div className="p-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 text-xs">
        <div className="flex items-center justify-between text-[11px] font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
          <span>Overall Course Mastery</span>
          <span className="text-indigo-600 dark:text-indigo-400">
            {completedTopicIds.length} / 32
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300"
            style={{ width: `${(completedTopicIds.length / 32) * 100}%` }}
          />
        </div>
      </div>

    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside className="hidden lg:block w-72 shrink-0 sticky top-16 h-[calc(100vh-4rem)] z-30">
        {sidebarContent}
      </aside>

      {/* Mobile Slide-over Drawer */}
      {isOpenMobile && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            onClick={onCloseMobile}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          />
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};
