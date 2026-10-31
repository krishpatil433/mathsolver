import React from 'react';
import { Sparkles, Moon, Sun, RotateCcw, Zap, Search, Menu, FileSpreadsheet, Globe } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface NavbarProps {
  completedCount: number;
  totalCount: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenCheatSheet: () => void;
  onResetProgress: () => void;
  onGoHome: () => void;
  onSelectPYQ: () => void;
  onToggleMobileSidebar: () => void;
  onOpenVercelModal: () => void;
  activeView: 'home' | 'topic' | 'pyq';
}

export const Navbar: React.FC<NavbarProps> = ({
  completedCount,
  totalCount,
  searchQuery,
  setSearchQuery,
  darkMode,
  setDarkMode,
  onOpenCheatSheet,
  onResetProgress,
  onGoHome,
  onSelectPYQ,
  onToggleMobileSidebar,
  onOpenVercelModal,
  activeView,
}) => {
  const percent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          
          {/* Mobile Sidebar Toggle & Brand */}
          <div className="flex items-center gap-2">
            <button
              onClick={onToggleMobileSidebar}
              className="lg:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Toggle Syllabus Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div
              onClick={onGoHome}
              className="flex items-center gap-2.5 cursor-pointer group select-none shrink-0"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-heading font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-slate-900 dark:text-white">
                    Math<span className="text-indigo-600 dark:text-indigo-400">Genie</span>
                  </span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hidden sm:inline-block">
                    MSBTE 314320
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden md:block">
                  Engineering Maths Made Simple
                </p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-1 sm:mx-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search topic or PYQ (Euler, Rank, Lagrange, Simplex)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 sm:py-2 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            
            {/* PWA Install Button */}
            <PWAInstallButton />

            {/* PYQ Solutions Quick Link */}
            <button
              onClick={onSelectPYQ}
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition shadow-xs ${
                activeView === 'pyq'
                  ? 'bg-amber-500 text-slate-950 shadow-amber-500/20'
                  : 'bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border border-amber-200 dark:border-amber-800 hover:bg-amber-100'
              }`}
              title="Previous Year Exam Papers (Summer 2025, Winter 2025, Summer 2026)"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline">PYQ Solutions</span>
            </button>

            {/* Vercel Deploy Button */}
            <button
              onClick={onOpenVercelModal}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Deploy to Vercel"
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>Vercel</span>
            </button>

            {/* Quick Cheat Sheet Button */}
            <button
              onClick={onOpenCheatSheet}
              className="hidden md:flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
              title="Formula Cheat Sheet"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Shortcuts</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* Reset Progress */}
            <button
              onClick={onResetProgress}
              title="Reset progress"
              className="p-2 rounded-xl text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
