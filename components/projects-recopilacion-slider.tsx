'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  Grid3X3, 
  Layers,
  Sparkles
} from 'lucide-react';
import { BlurFadeSection } from '@/components/blur-fade-section';
import { RECOPILACION_SLIDES, RecopilacionSlide } from '@/data/recopilacion-data';
import { RecopilacionGalleryModal } from '@/components/recopilacion-gallery-modal';

// Fast transition speed (2.8 seconds per slide)
const SLIDE_DURATION = 2800;

export function ProjectsRecopilacionSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState<boolean>(false);

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const elapsedRef = useRef<number>(0);

  const currentSlide: RecopilacionSlide = RECOPILACION_SLIDES[currentIndex] || RECOPILACION_SLIDES[0];

  // Advance to next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % RECOPILACION_SLIDES.length);
    setProgress(0);
    elapsedRef.current = 0;
    startTimeRef.current = Date.now();
  }, []);

  // Go to previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + RECOPILACION_SLIDES.length) % RECOPILACION_SLIDES.length);
    setProgress(0);
    elapsedRef.current = 0;
    startTimeRef.current = Date.now();
  }, []);

  // Progress Bar & Auto-play Engine (Fast transitions)
  useEffect(() => {
    if (!isPlaying || isHovered) {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
      return;
    }

    startTimeRef.current = Date.now() - elapsedRef.current;

    progressIntervalRef.current = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      elapsedRef.current = elapsed;

      const currentProgress = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
      }
    }, 30);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [isPlaying, isHovered, nextSlide, currentIndex]);

  return (
    <BlurFadeSection 
      id="recopilacion-proyectos"
      className="py-12 sm:py-16 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative w-full border-b border-zinc-200 dark:border-zinc-800/80 overflow-hidden transition-colors duration-300"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-indigo-500/10 dark:bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* HEADER BAR CON TÍTULO, BOTÓN VER CUADRÍCULA Y CONTADOR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xs">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-zinc-900 dark:text-white tracking-tight">
                  Recopilación de Proyectos
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 text-xs font-bold font-mono">
                  {currentIndex + 1} / {RECOPILACION_SLIDES.length}
                </span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                {currentSlide.category} • {currentSlide.title}
              </p>
            </div>
          </div>

          {/* BOTÓN VER CUADRÍCULA & PLAY/PAUSE */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-between sm:justify-end">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className={`px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                isPlaying 
                  ? 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800' 
                  : 'bg-indigo-600 text-white border-indigo-500'
              }`}
              title={isPlaying ? 'Pausar slider' : 'Reanudar presentación'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span>{isPlaying ? 'Pausa' : 'Auto'}</span>
            </button>

            <button
              onClick={() => setIsGalleryOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm shadow-md border border-indigo-400/40 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Ver Cuadrícula</span>
              <span className="px-1.5 py-0.2 rounded-md bg-black/40 text-[10px] font-mono font-bold text-indigo-200">
                {RECOPILACION_SLIDES.length}
              </span>
            </button>
          </div>
        </div>

        {/* FULL-WIDTH SLIDER CONTAINER */}
        <div 
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-xl dark:shadow-2xl group transition-colors duration-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* BARRA DE CARGA (PROGRESS BAR) */}
          <div className="w-full h-1 bg-zinc-100 dark:bg-zinc-900/90 relative overflow-hidden z-30">
            <div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 transition-all duration-75 ease-linear shadow-xs shadow-indigo-400"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* SLIDE CANVAS - FULL WIDTH ASPECT RATIO */}
          <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center overflow-hidden">
            {RECOPILACION_SLIDES.map((slide, idx) => {
              const isCurrent = idx === currentIndex;

              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                    isCurrent 
                      ? 'opacity-100 pointer-events-auto z-10' 
                      : 'opacity-0 pointer-events-none z-0'
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    className="object-contain object-center select-none"
                  />
                </div>
              );
            })}

            {/* PREVIOUS & NEXT NAVIGATION BUTTONS */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-zinc-900/75 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700/80 backdrop-blur-md shadow-xl transition-all duration-150 hover:scale-110 active:scale-95 opacity-80 group-hover:opacity-100 cursor-pointer"
              title="Lámina anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/90 dark:bg-zinc-900/75 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700/80 backdrop-blur-md shadow-xl transition-all duration-150 hover:scale-110 active:scale-95 opacity-80 group-hover:opacity-100 cursor-pointer"
              title="Lámina siguiente"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

      </div>

      {/* MODAL GRID GALLERY */}
      <RecopilacionGalleryModal
        isOpen={isGalleryOpen}
        onClose={() => setIsGalleryOpen(false)}
        initialSlideIndex={currentIndex}
      />
    </BlurFadeSection>
  );
}

export default ProjectsRecopilacionSlider;
