import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, Check, X, Share } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  // If already installed and running as standalone app, hide button
  if (isInstalled) {
    return (
      <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300">
        <Check className="w-3.5 h-3.5 text-emerald-600" />
        <span>Installed App</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      await install();
    } else {
      setShowGuide(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition shadow-xs shadow-emerald-500/20 active:scale-95"
        title="Install MathGenie PWA on your device for offline study"
      >
        <Download className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Install App</span>
      </button>

      {/* Installation Guide Modal (For iOS Safari or Chrome Desktop fallback) */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 flex items-center justify-center">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                    Install MathGenie App
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Works offline like a native mobile application
                  </p>
                </div>
              </div>

              <button
                onClick={() => setShowGuide(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isIOS ? (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Share className="w-4 h-4 text-indigo-500" />
                  <span>How to install on iPhone / iPad (Safari):</span>
                </div>
                <ol className="list-decimal list-inside space-y-2 pl-1 leading-relaxed">
                  <li>
                    Tap the <strong>Share</strong> button (box with an upward arrow) in the Safari bottom bar.
                  </li>
                  <li>
                    Scroll down and tap <strong>"Add to Home Screen"</strong> (➕).
                  </li>
                  <li>
                    Tap <strong>Add</strong> in the top-right corner. The MathGenie icon will appear on your Home Screen!
                  </li>
                </ol>
              </div>
            ) : (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3 text-xs text-slate-700 dark:text-slate-300">
                <div className="font-semibold text-slate-900 dark:text-white">
                  How to install on Chrome / Edge / Android:
                </div>
                <ol className="list-decimal list-inside space-y-2 pl-1 leading-relaxed">
                  <li>
                    Look at the right side of the address bar for the <strong>Install</strong> icon (computer with down arrow).
                  </li>
                  <li>
                    Or click the <strong>three dots (⋮)</strong> in browser menu &rarr; Select <strong>"Install MathGenie..."</strong>.
                  </li>
                  <li>
                    Click <strong>Install</strong> to add MathGenie to your desktop or mobile home screen with instant offline launch!
                  </li>
                </ol>
              </div>
            )}

            <button
              onClick={() => setShowGuide(false)}
              className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-xs hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              Got it!
            </button>

          </div>
        </div>
      )}
    </>
  );
};
