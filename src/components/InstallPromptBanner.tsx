import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Sparkles, X, Smartphone, ArrowRight, ShieldCheck } from 'lucide-react';

interface InstallPromptBannerProps {
  onOpenInstallModal: () => void;
}

export const InstallPromptBanner: React.FC<InstallPromptBannerProps> = ({ onOpenInstallModal }) => {
  const { isInstallable, isInstalled, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);

  // If already running as an installed standalone app or dismissed, hide
  if (isInstalled || isDismissed) {
    return null;
  }

  const handleAction = async () => {
    if (isInstallable) {
      const ok = await install();
      if (!ok) {
        onOpenInstallModal();
      }
    } else {
      onOpenInstallModal();
    }
  };

  return (
    <aside aria-label="App Installation" className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 text-white shadow-md relative overflow-hidden z-30 transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs">
        
        {/* Left Info with Badge */}
        <div className="flex items-center gap-2.5 text-center sm:text-left">
          <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center shrink-0">
            <Smartphone className="w-4 h-4 text-amber-300" />
          </div>
          <div className="flex flex-wrap items-center gap-1.5 justify-center sm:justify-start">
            <span className="font-extrabold tracking-wide uppercase px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 text-[10px] shadow-2xs">
              ⚡ 1-Click Mobile App
            </span>
            <span className="font-bold text-white text-xs sm:text-sm">
              Install directly from Chrome (Best & Easiest — No APK tool needed!)
            </span>
            <span className="text-emerald-100 hidden md:inline text-[11px]">
              • Works 100% offline with zero setup
            </span>
          </div>
        </div>

        {/* Right CTA Buttons */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleAction}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-extrabold text-xs bg-white text-slate-900 hover:bg-amber-300 transition shadow-xs active:scale-95 whitespace-nowrap"
          >
            <Download className="w-3.5 h-3.5 text-emerald-600" />
            <span>Install on Mobile</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
          </button>

          <button
            onClick={() => setIsDismissed(true)}
            className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition"
            title="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </aside>
  );
};
