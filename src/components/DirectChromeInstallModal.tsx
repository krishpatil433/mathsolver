import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { 
  Download, 
  Smartphone, 
  Check, 
  X, 
  Share, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface DirectChromeInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DirectChromeInstallModal: React.FC<DirectChromeInstallModalProps> = ({ isOpen, onClose }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [activeTab, setActiveTab] = useState<'android' | 'ios' | 'pc'>('android');
  const [installSuccess, setInstallSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await install();
      if (success) {
        setInstallSuccess(true);
        setTimeout(() => {
          onClose();
        }, 2000);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-5 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
        
        {/* Top Header */}
        <div className="flex items-start justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-600 text-white flex items-center justify-center shadow-md shadow-indigo-500/20">
              <Download className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 mb-0.5">
                <ShieldCheck className="w-3 h-3" />
                <span>100% Safe • Official Google PWA</span>
              </div>
              <h2 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                Install Directly from Chrome
              </h2>
              <p className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                Best & Easiest — No APK Tool or Unknown Sources Needed!
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Why this is 100x better than APK callout */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-indigo-500/10 border border-emerald-200 dark:border-emerald-900/50 space-y-2 text-xs">
          <div className="font-bold text-emerald-950 dark:text-emerald-200 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Kyu ye kisi bhi APK se lakh guna better aur asan hai?</span>
          </div>
          <ul className="space-y-1.5 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No APK tool needed:</strong> Phone me koi warning ya dangerous file alert nahi aata.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Instant 1-Click Launch:</strong> Phone ke app drawer me MathGenie ka app icon ban jayega.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Works Offline:</strong> Bus, train ya hostel bina internet ke bhi formulas aur PYQs khol sakte hain.</span>
            </li>
          </ul>
        </div>

        {/* Action Button: Direct Trigger if Chrome has prompt ready */}
        {isInstallable && !installSuccess && (
          <button
            onClick={handleInstallClick}
            className="w-full py-3.5 px-4 rounded-2xl font-extrabold text-sm text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 hover:from-emerald-700 hover:to-indigo-700 shadow-md shadow-emerald-500/25 transition transform active:scale-98 flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Install Now on This Device (1-Click)</span>
          </button>
        )}

        {installSuccess && (
          <div className="p-3.5 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-center text-xs font-bold text-emerald-900 dark:text-emerald-200 flex items-center justify-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>MathGenie App Successfully Installed on Your Device!</span>
          </div>
        )}

        {/* Platform Selection Tabs */}
        <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold">
          <button
            onClick={() => setActiveTab('android')}
            className={`flex-1 py-2 rounded-xl transition ${
              activeTab === 'android'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🤖 Android (Chrome)
          </button>
          <button
            onClick={() => setActiveTab('ios')}
            className={`flex-1 py-2 rounded-xl transition ${
              activeTab === 'ios'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            🍎 iPhone / iPad
          </button>
          <button
            onClick={() => setActiveTab('pc')}
            className={`flex-1 py-2 rounded-xl transition ${
              activeTab === 'pc'
                ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            💻 Laptop / PC
          </button>
        </div>

        {/* Tab 1: Android Chrome Step-by-Step */}
        {activeTab === 'android' && (
          <div className="space-y-3 text-xs">
            <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Android Chrome me 5 second me install karein:</span>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Chrome me Top-Right 3-Dots dabayein</div>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    Apne mobile Chrome browser ke upar daayein kone me <strong>(⋮) Three Dots</strong> par tap karein.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">"Install app" ya "Add to Home screen" par tap karein</div>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    Menu list me <strong>"Install app"</strong> (ya <strong>"Add to Home screen"</strong>) option dikhega, use click karein.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">"Install" dabayein — Done! 🎉</div>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    Ek confirmation popup aayega. <strong>Install</strong> dabate hi app aapke phone ke home screen aur app drawer me add ho jayegi!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: iPhone / Safari */}
        {activeTab === 'ios' && (
          <div className="space-y-3 text-xs">
            <div className="font-bold text-slate-900 dark:text-white">
              iPhone ya iPad (Safari Browser) me install karein:
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  1
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Safari ke bottom me Share button dabayein</div>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    Screen ke bottom bar me <strong>Share icon</strong> (square jisme upar arrow ho) par tap karein.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  2
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">"Add to Home Screen" select karein</div>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    Thoda niche scroll karke <strong>"Add to Home Screen" (➕)</strong> option par click karein.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
                  3
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Top-Right me "Add" dabayein</div>
                  <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                    Top-right corner me <strong>Add</strong> tap karein. MathGenie aapke iOS Home Screen par install ho jayega!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Laptop / PC */}
        {activeTab === 'pc' && (
          <div className="space-y-3 text-xs">
            <div className="font-bold text-slate-900 dark:text-white">
              Laptop ya Desktop PC (Chrome / Edge):
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                URL bar ke right side me dekhein: ek chhota <strong>Computer/Install icon</strong> dikhega.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Ya Chrome menu (three dots ⋮) me jaakar <strong>"Install MathGenie – Engineering Maths..."</strong> par click karein.
              </p>
            </div>
          </div>
        )}

        {/* Bottom Close */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition"
        >
          Got it, Close Guide
        </button>

      </div>
    </div>
  );
};
