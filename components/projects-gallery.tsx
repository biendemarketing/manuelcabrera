'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import { PROJECTS } from '@/data/portfolio-data';
import { 
  FolderKanban, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  ArrowRight
} from 'lucide-react';
import { ManuelCabreraLogo } from './logo';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'ui-ux', label: 'Diseño Web & UI/UX' },
    { id: '3d-render', label: 'Modelado 3D & Farmacéutica' },
    { id: 'print', label: 'Marketing & Gran Formato' },
    { id: 'branding', label: 'Branding & Identidad' },
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (selectedCategory === 'all') return true;
      return p.category === selectedCategory;
    });
  }, [selectedCategory]);

  // Reset index if category filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory]);

  // Autoplay slider every 5 seconds (paused on hover)
  useEffect(() => {
    if (isPaused || filteredProjects.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, filteredProjects.length]);

  const currentProject = filteredProjects[activeIndex] || filteredProjects[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredProjects.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < filteredProjects.length - 1 ? prev + 1 : 0));
  };

  const getSlideProject = (offset: number) => {
    const len = filteredProjects.length;
    if (len === 0) return null;
    const index = (activeIndex + offset + len) % len;
    return filteredProjects[index];
  };

  const prevProject = getSlideProject(-1);
  const nextProject = getSlideProject(1);

  return (
    <BlurFadeSection id="proyectos" className="py-24 sm:py-32 bg-zinc-950 text-white relative w-full overflow-hidden">
      {/* Background Studio Ambience */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none z-10" />
      <div className="absolute -left-40 top-1/2 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 top-1/2 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <BlurFadeDiv className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <FolderKanban className="w-3.5 h-3.5 text-indigo-400" />
            <span>Portafolio Seleccionado</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Casos de Éxito & Proyectos Destacados
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 mt-4 leading-relaxed max-w-2xl font-normal">
            Soluciones reales y de alto impacto: desarrollo web, diseño de interfaces, renders 3D para la industria médica, packaging comercial y campañas de gran formato.
          </p>
        </BlurFadeDiv>

        {/* Category Filter Pills */}
        <BlurFadeDiv delay={0.08} className="flex items-center justify-center mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl shadow-lg backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-white text-zinc-950 shadow-md'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </BlurFadeDiv>

        {/* APPLE TV+ CINEMATIC BILLBOARD SLIDER (Complete Cards with Smooth Edge Gradient Fades) */}
        {filteredProjects.length > 0 && currentProject && (
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative w-full max-w-[1800px] mx-auto flex flex-col items-center"
          >
            {/* Billboard Presentation Track Container */}
            <div className="relative w-full flex items-center justify-center gap-4 sm:gap-6 lg:gap-8 overflow-hidden py-4">
              
              {/* Left & Right Smooth Edge Fade Masks for Seamless Web Dissolve */}
              <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-30" />
              <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 lg:w-44 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent z-30" />

              {/* Left Peek (Complete Previous Project Card) */}
              {prevProject && (
                <button
                  onClick={handlePrev}
                  className="hidden md:flex flex-col justify-between w-[22vw] lg:w-[24vw] xl:w-[25vw] max-w-sm h-[440px] sm:h-[480px] md:h-[520px] lg:h-[560px] rounded-3xl sm:rounded-[36px] overflow-hidden relative opacity-55 hover:opacity-90 transition-all duration-300 cursor-pointer shrink-0 border border-zinc-800/80 shadow-2xl group scale-95 hover:scale-[0.98]"
                  aria-label={`Ver proyecto anterior: ${prevProject.title}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${prevProject.gradient || 'from-zinc-900 to-black'}`} />
                  {prevProject.image && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={prevProject.image} 
                      alt={prevProject.title}
                      className={`w-full h-full ${prevProject.is3DCard ? 'object-contain p-4' : 'object-cover object-top'} opacity-85 group-hover:scale-105 transition-transform duration-700`} 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  
                  {/* Left Peek Top Badge */}
                  <div className="relative z-10 p-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-indigo-300 uppercase shadow-sm">
                      {prevProject.categoryLabel}
                    </span>
                  </div>

                  {/* Left Peek Bottom Content */}
                  <div className="relative z-10 p-6 text-left space-y-1">
                    <span className="text-xs font-semibold text-zinc-400">{prevProject.client}</span>
                    <h4 className="text-base sm:text-lg font-black text-white uppercase truncate drop-shadow-sm">{prevProject.title}</h4>
                  </div>
                </button>
              )}

              {/* Main Center Active Billboard Slide (Full-Bleed Cover) */}
              <Link
                href={`/proyectos/${currentProject.id}`}
                className="relative w-full md:w-[66vw] lg:w-[60vw] xl:w-[56vw] max-w-4xl h-[480px] sm:h-[520px] md:h-[560px] lg:h-[580px] rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl border border-zinc-800 bg-zinc-950 flex flex-col justify-between group cursor-pointer shrink-0 z-20"
              >
                {/* Full-Bleed Artwork with object-cover object-top */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`bg-${currentProject.id}`}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-0 overflow-hidden"
                  >
                    {/* Gradient Base */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentProject.gradient || 'from-zinc-900 to-black'}`} />
                    
                    {/* Full Hero Image */}
                    {currentProject.image && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        className={`w-full h-full ${currentProject.is3DCard ? 'object-contain p-6 sm:p-10 drop-shadow-2xl' : 'object-cover object-top'} opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out`}
                      />
                    )}

                    {/* Dark Vignette Overlay for Crisp Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Bar: Category Pill + Apple TV+ Style MC Logo Badge */}
                <div className="relative z-20 w-full p-6 sm:p-8 flex items-center justify-between">
                  <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-wider text-indigo-300 shadow-sm">
                    {currentProject.categoryLabel}
                  </span>

                  {/* Brand Badge */}
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
                    <ManuelCabreraLogo className="h-4 w-auto text-white" />
                    <span className="text-[11px] font-black tracking-widest uppercase text-white/90">
                      Portfolio Pro
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay: Client, Big Bold Title, Description & Action Button */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`content-${currentProject.id}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-20 p-6 sm:p-10 space-y-4 max-w-2xl text-left"
                  >
                    {/* Year & Client */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-300">
                      <span className="text-indigo-400 font-bold">{currentProject.client}</span>
                      <span>•</span>
                      <span>{currentProject.year}</span>
                    </div>

                    {/* Main Title */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase drop-shadow-md">
                      {currentProject.title}
                    </h3>

                    {/* 2-Line Impact Description */}
                    <p className="text-xs sm:text-sm md:text-base text-zinc-200 font-normal leading-relaxed line-clamp-2 max-w-xl drop-shadow-sm">
                      {currentProject.description}
                    </p>

                    {/* Single Prominent Action Button */}
                    <div className="pt-2">
                      <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-black text-xs sm:text-sm tracking-wider uppercase shadow-2xl transition-all group-hover:scale-105">
                        <span>Ver Proyecto</span>
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>

              </Link>

              {/* Right Peek (Complete Next Project Card) */}
              {nextProject && (
                <button
                  onClick={handleNext}
                  className="hidden md:flex flex-col justify-between w-[22vw] lg:w-[24vw] xl:w-[25vw] max-w-sm h-[440px] sm:h-[480px] md:h-[520px] lg:h-[560px] rounded-3xl sm:rounded-[36px] overflow-hidden relative opacity-55 hover:opacity-90 transition-all duration-300 cursor-pointer shrink-0 border border-zinc-800/80 shadow-2xl group scale-95 hover:scale-[0.98]"
                  aria-label={`Ver siguiente proyecto: ${nextProject.title}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${nextProject.gradient || 'from-zinc-900 to-black'}`} />
                  {nextProject.image && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img 
                      src={nextProject.image} 
                      alt={nextProject.title}
                      className={`w-full h-full ${nextProject.is3DCard ? 'object-contain p-4' : 'object-cover object-top'} opacity-85 group-hover:scale-105 transition-transform duration-700`} 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
                  
                  {/* Right Peek Top Badge */}
                  <div className="relative z-10 p-6">
                    <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-bold text-indigo-300 uppercase shadow-sm">
                      {nextProject.categoryLabel}
                    </span>
                  </div>

                  {/* Right Peek Bottom Content */}
                  <div className="relative z-10 p-6 text-left space-y-1">
                    <span className="text-xs font-semibold text-zinc-400">{nextProject.client}</span>
                    <h4 className="text-base sm:text-lg font-black text-white uppercase truncate drop-shadow-sm">{nextProject.title}</h4>
                  </div>
                </button>
              )}

            </div>

            {/* APPLE TV+ BOTTOM CONTROLS: Center Dots & Right Play/Pause Buttons */}
            <div className="w-full max-w-4xl mt-8 px-4 flex items-center justify-between">
              
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all cursor-pointer active:scale-90"
                title="Proyecto anterior"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Center Pagination Dots (Active dot expands into pill) */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                {filteredProjects.map((_, dotIdx) => {
                  const isActive = dotIdx === activeIndex;
                  return (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIndex(dotIdx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? 'w-7 sm:w-8 bg-white shadow-xs' 
                          : 'w-1.5 sm:w-2 bg-zinc-700 hover:bg-zinc-500'
                      }`}
                      aria-label={`Ir al proyecto ${dotIdx + 1}`}
                    />
                  );
                })}
              </div>

              {/* Right Play/Pause & Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsPaused((prev) => !prev)}
                  className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all cursor-pointer active:scale-90"
                  title={isPaused ? "Reanudar slider" : "Pausar slider"}
                  aria-label={isPaused ? "Reanudar" : "Pausar"}
                >
                  {isPaused ? (
                    <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  ) : (
                    <Pause className="w-4 h-4 text-zinc-300" />
                  )}
                </button>

                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all cursor-pointer active:scale-90"
                  title="Siguiente proyecto"
                  aria-label="Siguiente proyecto"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        )}

      </div>
    </BlurFadeSection>
  );
}
