import React, { useState, useEffect } from 'react';
import { 
  syllabusUnits, 
  allSubTopics, 
  getSubTopicById, 
  getAdjacentSubTopics, 
  getUnitBySubTopicId 
} from './data/syllabus';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { UnitDashboard } from './components/UnitDashboard';
import { TopicDetail } from './components/TopicDetail';
import { PYQHub } from './components/PYQHub';
import { FormulaCheatSheetModal } from './components/FormulaCheatSheetModal';
import { VercelDeployModal } from './components/VercelDeployModal';
import { AIDoubtSolver } from './components/AIDoubtSolver';

export default function App() {
  // Navigation views: 'home' (Course Dashboard), 'topic' (SubTopic Detail), 'pyq' (Previous Year Papers Hub)
  const [activeView, setActiveView] = useState<'home' | 'topic' | 'pyq'>('home');

  // Current active subtopic id (when activeView === 'topic')
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);

  // Selected unit id when opening PYQ Hub
  const [selectedPYQUnitId, setSelectedPYQUnitId] = useState<number | undefined>(undefined);

  // Search query
  const [searchQuery, setSearchQuery] = useState('');

  // Mobile sidebar drawer open/close
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Exam Shortcuts modal
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState(false);

  // Vercel deployment modal
  const [isVercelModalOpen, setIsVercelModalOpen] = useState(false);

  // Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('mathgenie_theme') === 'dark';
  });

  // Completed topic IDs stored in localStorage
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mathgenie_completed_topics');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // External prompt passed into AI Doubt Solver
  const [aiExternalPrompt, setAiExternalPrompt] = useState<string | null>(null);

  // Sync dark mode class on document element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mathgenie_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mathgenie_theme', 'light');
    }
  }, [darkMode]);

  // Persist completed topics to localStorage
  const handleToggleComplete = (topicId: string) => {
    setCompletedTopicIds((prev) => {
      let updated: string[];
      if (prev.includes(topicId)) {
        updated = prev.filter((id) => id !== topicId);
      } else {
        updated = [...prev, topicId];
      }
      localStorage.setItem('mathgenie_completed_topics', JSON.stringify(updated));
      return updated;
    });
  };

  // Reset all progress
  const handleResetProgress = () => {
    if (window.confirm('Kya aap sach mein saari course progress reset karna chahte hain?')) {
      setCompletedTopicIds([]);
      localStorage.removeItem('mathgenie_completed_topics');
    }
  };

  const handleSelectTopic = (topicId: string) => {
    setActiveTopicId(topicId);
    setActiveView('topic');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectPYQ = (unitId?: number) => {
    setSelectedPYQUnitId(unitId);
    setActiveView('pyq');
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    setActiveView('home');
    setActiveTopicId(null);
    setSearchQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Get active topic data if any
  const currentTopic = activeTopicId ? getSubTopicById(activeTopicId) : null;
  const currentUnit = activeTopicId ? getUnitBySubTopicId(activeTopicId) : undefined;
  const { prev: prevTopic, next: nextTopic } = activeTopicId ? getAdjacentSubTopics(activeTopicId) : { prev: null, next: null };

  const handlePrevTopic = () => {
    if (prevTopic) {
      handleSelectTopic(prevTopic.id);
    }
  };

  const handleNextTopic = () => {
    if (nextTopic) {
      handleSelectTopic(nextTopic.id);
    }
  };

  const handleAskAIFromTopic = (prompt: string) => {
    setAiExternalPrompt(prompt);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors font-sans">
      
      {/* Top Header / Navigation with PWA Install Button */}
      <Navbar
        completedCount={completedTopicIds.length}
        totalCount={allSubTopics.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onResetProgress={handleResetProgress}
        onGoHome={handleGoHome}
        onSelectPYQ={() => handleSelectPYQ()}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        onOpenVercelModal={() => setIsVercelModalOpen(true)}
        activeView={activeView}
      />

      {/* Main Layout Container with Sidebar and Content */}
      <div className="flex-1 flex w-full max-w-[1600px] mx-auto">
        
        {/* Sidebar Navigation */}
        <Sidebar
          units={syllabusUnits}
          activeTopicId={activeTopicId}
          activeView={activeView}
          completedTopicIds={completedTopicIds}
          onSelectTopic={handleSelectTopic}
          onSelectPYQ={handleSelectPYQ}
          onGoHome={handleGoHome}
          onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
          isOpenMobile={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Dynamic Main Content View */}
        <main className="flex-1 min-w-0 pb-16 overflow-y-auto">
          {activeView === 'pyq' ? (
            <PYQHub
              units={syllabusUnits}
              initialUnitId={selectedPYQUnitId}
              onSelectTopic={handleSelectTopic}
              onAskAI={handleAskAIFromTopic}
            />
          ) : activeView === 'topic' && currentTopic ? (
            <TopicDetail
              topic={currentTopic}
              unit={currentUnit}
              isCompleted={completedTopicIds.includes(currentTopic.id)}
              onToggleComplete={handleToggleComplete}
              onPrevTopic={handlePrevTopic}
              onNextTopic={handleNextTopic}
              prevTopic={prevTopic}
              nextTopic={nextTopic}
              onAskAI={handleAskAIFromTopic}
              onNavigateToPYQ={handleSelectPYQ}
            />
          ) : (
            <UnitDashboard
              units={syllabusUnits}
              completedTopicIds={completedTopicIds}
              searchQuery={searchQuery}
              onSelectTopic={handleSelectTopic}
              onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
              onSelectPYQ={handleSelectPYQ}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="font-heading font-semibold text-slate-700 dark:text-slate-300">
            MathGenie – Engineering Mathematics Learning Platform (MSBTE 314320)
          </div>
          <div>
            Built with ❤️ for diploma and degree engineering students. All 5 units + PYQs (S25, W25, S26).
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSelectPYQ()}
              className="text-amber-600 dark:text-amber-400 hover:underline font-bold"
            >
              PYQ Exam Papers
            </button>
            <span>•</span>
            <button
              onClick={() => setIsVercelModalOpen(true)}
              className="text-slate-600 dark:text-slate-400 hover:underline"
            >
              Vercel Guide
            </button>
            <span>•</span>
            <button
              onClick={() => setIsCheatSheetOpen(true)}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Shortcuts Sheet
            </button>
            <span>•</span>
            <button
              onClick={handleGoHome}
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Home
            </button>
          </div>
        </div>
      </footer>

      {/* Exam Shortcuts Cheat Sheet Modal */}
      <FormulaCheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />

      {/* Vercel Deployment Modal */}
      <VercelDeployModal
        isOpen={isVercelModalOpen}
        onClose={() => setIsVercelModalOpen(false)}
      />

      {/* Floating AI Doubt Solver */}
      <AIDoubtSolver
        currentTopicContext={
          activeView === 'topic' && currentTopic
            ? `${currentTopic.id} ${currentTopic.title}`
            : activeView === 'pyq'
            ? 'MSBTE Previous Year Question Papers (Summer 2025, Winter 2025, Summer 2026)'
            : undefined
        }
        externalPrompt={aiExternalPrompt}
        onClearExternalPrompt={() => setAiExternalPrompt(null)}
      />

    </div>
  );
}
