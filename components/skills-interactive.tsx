'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { SKILL_CARDS, SkillCard } from '@/data/portfolio-data';
import { 
  Palette, 
  Layout, 
  Box, 
  Megaphone, 
  Camera, 
  Cpu, 
  ShieldCheck, 
  Printer, 
  CheckCircle2, 
  Wrench, 
  Layers, 
  Award,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Layout,
  Box,
  Megaphone,
  Camera,
  Cpu,
  ShieldCheck,
  Printer,
};

export function SkillsInteractive() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const totalSkills = SKILL_CARDS.length;
  const currentSkill: SkillCard = SKILL_CARDS[activeIndex];
  const IconComponent = iconMap[currentSkill.iconName] || Palette;

  const nextSkill = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSkills);
  }, [totalSkills]);

  const prevSkill = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSkills) % totalSkills);
  }, [totalSkills]);

  // Autoplay timer that passes automatically every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSkill();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSkill]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSkill();
      if (e.key === 'ArrowLeft') prevSkill();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSkill, prevSkill]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSkill();
    if (diff < -50) prevSkill();
    touchStartX.current = null;
  };

  return (
    <BlurFadeSection id="habilidades" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative w-full overflow-hidden transition-colors duration-300">
      {/* Background Ambience Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-20">
        
        {/* Section Header */}
        <BlurFadeDiv className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Capacidades & Especialidades</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Habilidades Profesionales
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 mt-3.5 leading-relaxed max-w-2xl font-normal">
            Explora cada área de dominio técnico, metodologías aplicadas, herramientas clave y resultados comerciales comprobados.
          </p>
        </BlurFadeDiv>

        {/* MAIN STAGE CONTAINER */}
        <BlurFadeDiv delay={0.15} className="relative w-full max-w-[1650px] mx-auto">
          
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="w-full rounded-3xl sm:rounded-[36px] bg-white dark:bg-gradient-to-br dark:from-zinc-900/80 dark:via-zinc-900/40 dark:to-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800/60 p-6 sm:p-10 md:p-12 lg:p-16 shadow-xl dark:shadow-2xl relative overflow-hidden backdrop-blur-xl transition-colors duration-300"
          >
            {/* Top decorative ambient glow */}
            <div className="absolute top-0 right-1/4 w-96 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* LEFT COLUMN: Synchronized Dynamic Text & Skill Details (7 Cols) */}
              <div className="lg:col-span-7 space-y-6 relative z-10">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSkill.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5"
                  >
                    {/* Badge & Number */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                        {String(activeIndex + 1).padStart(2, '0')} / {String(totalSkills).padStart(2, '0')} • {currentSkill.category}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-black text-zinc-900 dark:text-white tracking-tight leading-[1.15]">
                      {currentSkill.title}
                    </h3>

                    {/* Tagline */}
                    <p className="text-sm sm:text-base font-semibold text-zinc-800 dark:text-zinc-200 leading-snug">
                      {currentSkill.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {currentSkill.description}
                    </p>

                    {/* Key Workflow Deliverables */}
                    <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-300 flex items-center gap-2 mb-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span>Flujo de Trabajo & Metodología:</span>
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {currentSkill.keyPoints.map((point, i) => (
                          <li key={i} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-1.5 shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools & Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      {/* Software & Tools */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>Software & Herramientas:</span>
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentSkill.toolsUsed.map((tool, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60 shadow-xs"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Cases / Highlights */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span>Casos & Marcas:</span>
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {currentSkill.highlights.map((item, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 shadow-xs"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                </AnimatePresence>

                {/* Bottom Controls: CTA + Indicators + Carousel Next / Prev Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <Link
                      href="/proyectos"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-black text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-zinc-950 font-black text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Ver Proyectos Relacionados</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    <Link
                      href="/#contacto"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white dark:border-transparent font-bold text-xs sm:text-sm shadow-xs active:scale-95 transition-all cursor-pointer"
                    >
                      <span>Cotizar Proyecto</span>
                    </Link>
                  </div>

                  {/* Dot Progress Indicators + Navigation Arrows */}
                  <div className="flex items-center gap-4">
                    {/* Progress indicators */}
                    <div className="flex items-center gap-1.5">
                      {SKILL_CARDS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveIndex(idx)}
                          aria-label={`Ir a especialidad ${idx + 1}`}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            idx === activeIndex
                              ? 'w-6 bg-indigo-600 dark:bg-indigo-400'
                              : 'w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevSkill}
                        aria-label="Especialidad anterior"
                        className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white dark:border-zinc-700/60 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-sm"
                        title="Anterior"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={nextSkill}
                        aria-label="Siguiente especialidad"
                        className="w-10 h-10 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 dark:text-white dark:border-zinc-700/60 flex items-center justify-center transition-all cursor-pointer active:scale-90 shadow-sm"
                        title="Siguiente"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: 3D Perspective Card Deck Carousel (Clean Images, NO Text Overlay) */}
              <div className="lg:col-span-5 relative h-[420px] sm:h-[480px] md:h-[520px] w-full flex items-center justify-center overflow-hidden">
                
                <div className="relative w-full h-full flex items-center justify-center perspective-[1200px]">
                  {SKILL_CARDS.map((skill, index) => {
                    // Calculate offset relative to active card
                    let offset = index - activeIndex;
                    if (offset > totalSkills / 2) offset -= totalSkills;
                    if (offset < -totalSkills / 2) offset += totalSkills;

                    const isActive = offset === 0;
                    const isVisible = Math.abs(offset) <= 3;

                    if (!isVisible) return null;

                    // Compute smooth 3D transform metrics
                    const translateX = offset * 68; // horizontal spacing in pixels
                    const scale = Math.max(0.68, 1 - Math.abs(offset) * 0.12);
                    const opacity = Math.max(0.25, 1 - Math.abs(offset) * 0.28);
                    const zIndex = 50 - Math.abs(offset) * 10;
                    const rotateY = offset * -6; // slight 3D rotation angle

                    return (
                      <motion.div
                        key={skill.id}
                        initial={false}
                        animate={{
                          x: translateX,
                          scale: isActive ? 1.05 : scale,
                          opacity: isVisible ? opacity : 0,
                          zIndex,
                          rotateY,
                        }}
                        transition={{
                          type: 'spring',
                          stiffness: 280,
                          damping: 28,
                        }}
                        onClick={() => setActiveIndex(index)}
                        className={`absolute w-[220px] sm:w-[260px] md:w-[290px] h-[320px] sm:h-[380px] md:h-[430px] rounded-3xl overflow-hidden cursor-pointer select-none transition-shadow duration-300 border border-zinc-200/60 dark:border-0 ${
                          isActive
                            ? 'shadow-[0_25px_60px_rgba(99,102,241,0.35)]'
                            : 'shadow-lg dark:shadow-xl opacity-80 hover:opacity-100'
                        }`}
                        style={{
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        {/* Clean Full-Bleed Background Image */}
                        {skill.image && (
                          <Image
                            src={skill.image}
                            alt={skill.title}
                            fill
                            sizes="(max-width: 768px) 260px, 320px"
                            className="object-cover object-center transition-transform duration-500 hover:scale-105"
                            priority={isActive || Math.abs(offset) === 1}
                          />
                        )}

                        {/* Soft Ambient Vignette for Depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

                      </motion.div>
                    );
                  })}
                </div>

              </div>

            </div>

          </div>

        </BlurFadeDiv>

      </div>
    </BlurFadeSection>
  );
}

export default SkillsInteractive;
