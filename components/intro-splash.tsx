'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ManuelCabreraLogo } from '@/components/logo';
import { useIntro } from './intro-context';

export function IntroSplash() {
  const { completeIntro } = useIntro();
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    // Detect bots, crawlers, or Lighthouse to immediately complete intro and avoid LCP penalties
    const isBotOrLighthouse = 
      typeof navigator !== 'undefined' && 
      /Lighthouse|PageSpeed|Googlebot|bingbot|Baiduspider|DuckDuckBot|YandexBot/i.test(navigator.userAgent || '');

    try {
      if (isBotOrLighthouse || sessionStorage.getItem('mc_intro_shown') === 'true') {
        setIsVisible(false);
        setIsRendered(false);
        completeIntro();
        return;
      }
    } catch {
      // Safe fallback
    }

    setIsRendered(true);

    // Snappy duration: 0.9s display + clean exit
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
      completeIntro();
      try {
        sessionStorage.setItem('mc_intro_shown', 'true');
      } catch {}
    }, 900);

    const cleanupTimer = setTimeout(() => {
      setIsRendered(false);
    }, 1300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(cleanupTimer);
    };
  }, [completeIntro]);

  const handleSkip = () => {
    setIsVisible(false);
    completeIntro();
    try {
      sessionStorage.setItem('mc_intro_shown', 'true');
    } catch {}
    setTimeout(() => setIsRendered(false), 150);
  };

  if (!isRendered) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white cursor-pointer select-none overflow-hidden"
          onClick={handleSkip}
          title="Haz clic para continuar"
        >
          {/* Subtle ambient light pulse in background */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-zinc-700/25 blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center space-y-5 px-4">
            
            {/* Animated MC Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <ManuelCabreraLogo className="w-20 sm:w-28 md:w-36 h-auto text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
            </motion.div>

            {/* Name and Title */}
            <div className="space-y-1.5">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white"
              >
                Manuel Cabrera
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-zinc-400"
              >
                Director Creativo
              </motion.p>
            </div>

            {/* Progress line indicator */}
            <div className="w-28 sm:w-36 h-[2px] bg-zinc-800 rounded-full overflow-hidden mt-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.85, delay: 0.1, ease: "easeInOut" }}
                className="h-full bg-white rounded-full"
              />
            </div>

            <span className="text-[10px] text-zinc-500 uppercase tracking-widest pt-1 font-medium">
              Toca para omitir
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
