import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, Sparkles } from 'lucide-react';

interface HinglishAudioPlayerProps {
  topicTitle: string;
  hinglishScript: string;
}

export const HinglishAudioPlayer: React.FC<HinglishAudioPlayerProps> = ({
  topicTitle,
  hinglishScript,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [speed, setSpeed] = useState<number>(1.0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!isSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      return;
    }

    window.speechSynthesis.cancel(); // Stop any previous speech

    const cleanText = hinglishScript
      .replace(/\\frac\{.*?\}\{.*?\}/g, 'fraction')
      .replace(/[\$\*\#\_\~]/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utteranceRef.current = utterance;

    // Prefer Indian English or Hindi voice for natural Hinglish flow
    const voices = window.speechSynthesis.getVoices();
    const hinglishVoice =
      voices.find((v) => v.lang === 'hi-IN' || v.lang === 'en-IN') ||
      voices.find((v) => v.lang.startsWith('en')) ||
      voices[0];

    if (hinglishVoice) {
      utterance.voice = hinglishVoice;
    }

    utterance.rate = speed;
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsPlaying(false);
    };

    utterance.onerror = () => {
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  const cycleSpeed = () => {
    const nextSpeed = speed === 1.0 ? 1.25 : speed === 1.25 ? 1.5 : 1.0;
    setSpeed(nextSpeed);
    if (isPlaying && utteranceRef.current) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-amber-500/10 border border-indigo-200 dark:border-indigo-900/60 shadow-2xs">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
          <Volume2 className="w-4 h-4 animate-pulse" />
        </div>
        <div>
          <div className="font-heading font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>🔊 Suno Bhaiya Ki Awaaz Mein (Audio Class)</span>
            <span className="text-[10px] uppercase font-bold px-1.5 py-0.2 rounded bg-amber-200 dark:bg-amber-950 text-amber-900 dark:text-amber-200">
              Hinglish Audio
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Earphones lagao aur concept ko kahani ki tarah sunte hue samjho
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        {/* Speed toggle */}
        <button
          onClick={cycleSpeed}
          className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition"
          title="Change playback speed"
        >
          {speed}x
        </button>

        {/* Play / Stop Button */}
        <button
          onClick={handlePlayPause}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition shadow-xs active:scale-95 ${
            isPlaying
              ? 'bg-rose-600 text-white hover:bg-rose-700'
              : 'bg-indigo-600 text-white hover:bg-indigo-700'
          }`}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5" />
              <span>Stop Audio</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Play Audio</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
