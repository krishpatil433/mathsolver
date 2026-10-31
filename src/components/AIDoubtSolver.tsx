import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  Bot, 
  User, 
  Key, 
  Settings, 
  Minimize2, 
  Maximize2, 
  Trash2, 
  CornerDownLeft, 
  Loader2 
} from 'lucide-react';
import { MathView } from './MathView';

// =======================================================================
// GEMINI API CONFIGURATION
// If you are hosting standalone without backend environment variables,
// you can replace YOUR_GEMINI_API_KEY_HERE with your Google AI Studio API key
// from https://aistudio.google.com.
// In AI Studio environment, the backend server automatically uses process.env.GEMINI_API_KEY.
// =======================================================================
const DEFAULT_CLIENT_API_KEY = "YOUR_GEMINI_API_KEY_HERE";

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIDoubtSolverProps {
  currentTopicContext?: string;
  externalPrompt?: string | null;
  onClearExternalPrompt?: () => void;
}

export const AIDoubtSolver: React.FC<AIDoubtSolverProps> = ({
  currentTopicContext,
  externalPrompt,
  onClearExternalPrompt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Namaste! Main hoon aapka **MathGenie** tutor 🧞‍♂️. 
Engineering Maths ke kisi bhi topic me doubt ho — partial derivatives, matrices, vectors, numerical methods ya simplex — bejhijhak poochho! Bilkul zero level se simple Hinglish me samjhaunga.`,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [customKey, setCustomKey] = useState<string>(() => {
    return localStorage.getItem('mathgenie_custom_gemini_key') || '';
  });
  const [showKeyModal, setShowKeyModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle external prompts (e.g., clicking "Ask AI about this topic")
  useEffect(() => {
    if (externalPrompt) {
      setIsOpen(true);
      sendMessage(externalPrompt);
      if (onClearExternalPrompt) onClearExternalPrompt();
    }
  }, [externalPrompt]);

  const suggestionChips = [
    'Simple language mein samjhao',
    'Shortcut do',
    'Example do',
    'Ground level se shuru karo',
  ];

  const handleSaveKey = (key: string) => {
    setCustomKey(key);
    localStorage.setItem('mathgenie_custom_gemini_key', key);
    setShowKeyModal(false);
  };

  const clearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content: `Chat reset ho gayi hai! Kya naya doubt solve karein?`,
        timestamp: new Date(),
      },
    ]);
  };

  const sendMessage = async (textToSend: string) => {
    const userText = textToSend.trim();
    if (!userText || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Send to server endpoint /api/chat which uses GoogleGenAI with gemini-3.8-flash
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: messages.concat(userMessage).map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userMessage: userText,
          customKey: customKey || undefined,
          topicContext: currentTopicContext,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const replyText = data.reply || data.fallback || "Ek chhota sa issue aaya, kripya dobara try karein.";

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: replyText,
          timestamp: new Date(),
        },
      ]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Ghabrao mat! Network connection ya API key issue ki wajah se response aane me dikkat aayi. Aap topic cards me diye gaye verified **Solved Examples** aur **Formula Sheet** directly use kar sakte hain.`,
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Render message text with basic markdown and KaTeX block detection
  const renderMessageContent = (content: string) => {
    const parts = content.split(/(\$\$[\s\S]*?\$\$|\$.*?\$)/g);
    return (
      <div className="space-y-1.5 leading-relaxed text-xs sm:text-sm">
        {parts.map((part, index) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const math = part.slice(2, -2).trim();
            return <MathView key={index} block math={math} />;
          }
          if (part.startsWith('$') && part.endsWith('$')) {
            const math = part.slice(1, -1).trim();
            return <MathView key={index} math={math} />;
          }

          // Format basic bold and bullet lines
          return (
            <span key={index} className="whitespace-pre-wrap">
              {part.split('\n').map((line, lIdx) => {
                // simple bold parsing
                const boldFormatted = line.split(/(\*\*.*?\*\*)/g).map((chunk, cIdx) => {
                  if (chunk.startsWith('**') && chunk.endsWith('**')) {
                    return <strong key={cIdx} className="font-semibold text-indigo-950 dark:text-indigo-200">{chunk.slice(2, -2)}</strong>;
                  }
                  return chunk;
                });

                return (
                  <React.Fragment key={lIdx}>
                    {boldFormatted}
                    {lIdx < part.split('\n').length - 1 && <br />}
                  </React.Fragment>
                );
              })}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Action Button (Bottom-Right) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white shadow-xl shadow-indigo-600/30 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Open MathGenie AI Doubt Solver"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border-2 border-indigo-700 rounded-full" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold font-heading leading-none">AI Doubt Solver</div>
            <div className="text-[10px] text-indigo-200">Ask in Hinglish</div>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[420px] h-[550px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-xs">
                <Sparkles className="w-4 h-4 text-amber-300" />
              </div>
              <div>
                <h3 className="text-sm font-bold font-heading leading-tight flex items-center gap-1.5">
                  <span>MathGenie AI Tutor</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h3>
                <p className="text-[10px] text-indigo-200">
                  {currentTopicContext ? `Topic: ${currentTopicContext}` : 'Ask engineering maths doubts'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setShowKeyModal(true)}
                title="API Key Settings"
                className="p-1.5 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition"
              >
                <Key className="w-4 h-4" />
              </button>
              <button
                onClick={clearChat}
                title="Clear Chat"
                className="p-1.5 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Suggestion Chips */}
          <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 overflow-x-auto text-[11px] shrink-0">
            {suggestionChips.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => sendMessage(chip)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 transition disabled:opacity-50"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 shadow-xs ${
                    m.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-br-xs'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100 rounded-bl-xs border border-slate-200/60 dark:border-slate-700'
                  }`}
                >
                  {renderMessageContent(m.content)}
                  <div
                    className={`text-[9px] mt-1.5 font-mono ${
                      m.role === 'user' ? 'text-indigo-200 text-right' : 'text-slate-400'
                    }`}
                  >
                    {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>

                {m.role === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs pl-2">
                <Loader2 className="w-4 h-4 animate-spin text-indigo-600" />
                <span>MathGenie soch raha hai...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(inputValue);
            }}
            className="p-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Poochho apna doubt (Hinglish allowed)..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1 transition shadow-xs"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* API Key Configuration Modal */}
      {showKeyModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="w-full max-w-sm bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2">
                <Key className="w-4 h-4 text-indigo-600" />
                <span>Gemini API Key Setting</span>
              </h3>
              <button
                onClick={() => setShowKeyModal(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400">
              MathGenie server automatically uses the pre-configured Gemini API. Agar aap apni personal Google AI Studio key use karna chahte hain, toh yahan enter karein:
            </p>

            <input
              type="password"
              placeholder="AIzaSy..."
              value={customKey}
              onChange={(e) => setCustomKey(e.target.value)}
              className="w-full px-3 py-2 text-xs bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
            />

            <div className="text-[11px] text-slate-400">
              Key lene ke liye:{' '}
              <a
                href="https://aistudio.google.com"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-600 dark:text-indigo-400 underline"
              >
                aistudio.google.com
              </a>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => handleSaveKey('')}
                className="px-3 py-1.5 text-xs text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition"
              >
                Clear Key
              </button>
              <button
                onClick={() => handleSaveKey(customKey)}
                className="px-4 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
