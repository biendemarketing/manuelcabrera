'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ManuelCabreraLogo } from '@/components/logo';
import { useIntro } from './intro-context';

export function IntroSplash() {
  const { completeIntro } = useIntro();
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Cinematic duration: 2.2 seconds display + 0.6 seconds exit transition
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
      completeIntro();
    }, 2200);

    const cleanupTimer = setTimeout(() => {
      setIsRendered(false);
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(cleanupTimer);
    };
  }, [completeIntro]);

  const handleSkip = () => {
    setIsVisible(false);
    completeIntro();
    setTimeout(() => setIsRendered(false), 300);
  };

  if (!isRendered) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white cursor-pointer select-none overflow-hidden"
          onClick={handleSkip}
          title="Haz clic para continuar"
        >
          {/* Subtle ambient light pulse in background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 0.35, scale: 1.15 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute w-[500px] h-[500px] rounded-full bg-zinc-700/30 blur-[130px] pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
            
            {/* Animated MC Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <ManuelCabreraLogo className="w-24 sm:w-32 md:w-40 h-auto text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.25)]" />
            </motion.div>

            {/* Name and Title with Staggered Fade-in */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white"
              >
                Manuel Cabrera
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-zinc-400"
              >
                Director Creativo
              </motion.p>
            </div>

            {/* Progress line indicator that fills up during intro */}
            <div className="w-32 sm:w-40 h-[2px] bg-zinc-800 rounded-full overflow-hidden mt-3">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.0, delay: 0.2, ease: "easeInOut" }}
                className="h-full bg-white rounded-full"
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="text-[10px] text-zinc-500 uppercase tracking-widest pt-2 font-medium"
            >
              Toca para omitir
            </motion.span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
