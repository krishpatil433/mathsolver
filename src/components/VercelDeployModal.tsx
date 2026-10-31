import React from 'react';
import { X, ExternalLink, Check, Copy, Terminal, ShieldCheck, Zap } from 'lucide-react';

interface VercelDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VercelDeployModal: React.FC<VercelDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-bold text-lg">
              ▲
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                Vercel Deployment Guide (100% Ready)
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Deploy MathGenie SPA + Serverless AI API in 2 minutes
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Callout */}
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="text-xs text-emerald-900 dark:text-emerald-200 space-y-1">
            <div className="font-bold">Codebase is 100% Pre-Configured for Vercel</div>
            <div>
              Both <code className="font-mono bg-emerald-100 dark:bg-emerald-900/60 px-1 py-0.5 rounded">vercel.json</code> and <code className="font-mono bg-emerald-100 dark:bg-emerald-900/60 px-1 py-0.5 rounded">api/chat.js</code> are already created and configured in the root directory!
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-4 text-xs">
          
          {/* Step 1 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px]">1</span>
              <span>Push to GitHub & Import into Vercel</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
              Go to <strong>vercel.com</strong> &rarr; Click <strong>"Add New Project"</strong> &rarr; Select your GitHub repository.
            </p>
          </div>

          {/* Step 2 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
            <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px]">2</span>
              <span>Set Environment Variable for AI Doubt Solver</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
              Under <strong>"Environment Variables"</strong> in the Vercel project configuration, add your Google Gemini API key:
            </p>
            <div className="ml-7 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between font-mono">
              <div>
                <span className="text-indigo-600 dark:text-indigo-400 font-bold">Key:</span> GEMINI_API_KEY<br />
                <span className="text-slate-400 font-bold">Value:</span> <em>Your Google Gemini API Key</em>
              </div>
              <button
                onClick={() => copyToClipboard('GEMINI_API_KEY', 'var')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-600"
                title="Copy variable name"
              >
                {copiedKey === 'var' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px]">3</span>
              <span>Build Settings</span>
            </div>
            <div className="pl-7 space-y-1 text-slate-600 dark:text-slate-300">
              <div><strong>Framework Preset:</strong> Vite</div>
              <div><strong>Build Command:</strong> <code className="font-mono bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">npm run build</code></div>
              <div><strong>Output Directory:</strong> <code className="font-mono bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">dist</code></div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
            <div className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[11px]">4</span>
              <span>Deploy!</span>
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed pl-7">
              Click <strong>"Deploy"</strong>. In under 60 seconds, your site is live with custom URL, SSL, PWA install capability, and secure serverless backend.
            </p>
          </div>

        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-2xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition shadow-sm"
        >
          Got It, Ready to Deploy!
        </button>

      </div>
    </div>
  );
};
