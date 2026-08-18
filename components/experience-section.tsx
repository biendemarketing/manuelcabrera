'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  WORK_EXPERIENCES, 
  REFERENCES 
} from '@/data/portfolio-data';
import { 
  Briefcase, 
  Users, 
  Calendar, 
  MapPin, 
  Phone, 
  Copy, 
  Check, 
  Building2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play
} from 'lucide-react';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';

interface ExperienceTheme {
  id: string;
  gradient: string;
  tabBg: string;
  activeColor: string;
  monogram: string;
}

const EXPERIENCE_THEMES: Record<string, ExperienceTheme> = {
  'lati-k-publicidad': {
    id: 'lati-k-publicidad',
    gradient: 'from-[#eab308] via-[#ca8a04] to-[#09090b]',
    tabBg: 'bg-amber-50 dark:bg-[#181404] hover:bg-amber-100 dark:hover:bg-[#2c2207]',
    activeColor: '#eab308',
    monogram: 'LK'
  },
  'master-creative': {
    id: 'master-creative',
    gradient: 'from-[#7e22ce] via-[#6b21a8] to-[#09090b]',
    tabBg: 'bg-purple-50 dark:bg-[#140b22] hover:bg-purple-100 dark:hover:bg-[#221038]',
    activeColor: '#7e22ce',
    monogram: 'MC'
  },
  'jirm-consulting': {
    id: 'jirm-consulting',
    gradient: 'from-[#1e40af] via-[#1e3a8a] to-[#020617]',
    tabBg: 'bg-blue-50 dark:bg-[#060c1c] hover:bg-blue-100 dark:hover:bg-[#0d1633]',
    activeColor: '#1e40af',
    monogram: 'JC'
  },
  'habilitic': {
    id: 'habilitic',
    gradient: 'from-[#06b6d4] via-[#0891b2] to-[#0f172a]',
    tabBg: 'bg-cyan-50 dark:bg-[#04161c] hover:bg-cyan-100 dark:hover:bg-[#07242d]',
    activeColor: '#06b6d4',
    monogram: 'HB'
  },
  'laboratorios-sintesis': {
    id: 'laboratorios-sintesis',
    gradient: 'from-[#3b82f6] via-[#2563eb] to-[#0f172a]',
    tabBg: 'bg-blue-50 dark:bg-[#0a1128] hover:bg-blue-100 dark:hover:bg-[#121f42]',
    activeColor: '#3b82f6',
    monogram: 'LS'
  },
  'print-solution': {
    id: 'print-solution',
    gradient: 'from-[#f97316] via-[#ea580c] to-[#09090b]',
    tabBg: 'bg-orange-50 dark:bg-[#1a0c04] hover:bg-orange-100 dark:hover:bg-[#2c1507]',
    activeColor: '#f97316',
    monogram: 'PS'
  },
  'club-med-punta-cana': {
    id: 'club-med-punta-cana',
    gradient: 'from-[#0284c7] via-[#0369a1] to-[#075985]',
    tabBg: 'bg-sky-50 dark:bg-[#051726] hover:bg-sky-100 dark:hover:bg-[#0a253d]',
    activeColor: '#0284c7',
    monogram: 'CM'
  },
  'big-print-decora-group': {
    id: 'big-print-decora-group',
    gradient: 'from-[#dc2626] via-[#b91c1c] to-[#1e3a8a]',
    tabBg: 'bg-rose-50 dark:bg-[#220707] hover:bg-rose-100 dark:hover:bg-[#380e0e]',
    activeColor: '#ef4444',
    monogram: 'BP'
  },
  'bien-de-marketing': {
    id: 'bien-de-marketing',
    gradient: 'from-[#9333ea] via-[#6b21a8] to-[#09090b]',
    tabBg: 'bg-purple-50 dark:bg-[#13071c] hover:bg-purple-100 dark:hover:bg-[#220c30]',
    activeColor: '#9333ea',
    monogram: 'BM'
  }
};

export function ExperienceSection() {
  // Chronological order: Origins (2015) first, progressing to present (2026 CEO)
  const experiences = [...WORK_EXPERIENCES].reverse();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  // Automatic progression every 4.8 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 4800);
    return () => clearInterval(interval);
  }, [isPaused, experiences.length]);

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const currentJob = experiences[activeIndex] || experiences[0];
  const currentTheme = EXPERIENCE_THEMES[currentJob.id] || EXPERIENCE_THEMES['bien-de-marketing'];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : experiences.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < experiences.length - 1 ? prev + 1 : 0));
  };

  return (
    <BlurFadeSection id="experiencia" className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative w-full overflow-hidden transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-zinc-50 dark:from-zinc-950 via-zinc-50/80 dark:via-zinc-950/80 to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-zinc-50 dark:from-zinc-950 via-zinc-50/80 dark:via-zinc-950/80 to-transparent pointer-events-none z-10" />
      <div className="absolute -left-40 top-1/3 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-1/3 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-20">
        
        {/* Section Header with Autoplay Indicator & Controls */}
        <BlurFadeDiv className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest shadow-xs">
              <Briefcase className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Evolución & Trayectoria Profesional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
              Experiencia Laboral
            </h2>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
              Más de 11 años de trayectoria continua: desde los orígenes en preprensa y agencias de publicidad, hasta la dirección estratégica, desarrollo de software y liderazgo de proyectos internacionales.
            </p>
          </div>

          {/* Navigation & Autoplay Controls */}
          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            {/* Play/Pause Toggle */}
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer active:scale-90 shadow-sm"
              title={isPaused ? "Reanudar reproducción automática" : "Pausar reproducción automática"}
              aria-label={isPaused ? "Reanudar" : "Pausar"}
            >
              {isPaused ? <Play className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current" /> : <Pause className="w-4 h-4" />}
            </button>

            {/* Prev Arrow */}
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer active:scale-90 shadow-sm"
              title="Experiencia anterior"
              aria-label="Experiencia anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white border border-zinc-200 dark:border-zinc-800 transition-all cursor-pointer active:scale-90 shadow-sm"
              title="Siguiente experiencia"
              aria-label="Siguiente experiencia"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </BlurFadeDiv>

        {/* SUPABASE-STYLE EXPANDING ACCORDION SHOWCASE WITH AUTO-PROGRESSION */}
        <BlurFadeDiv delay={0.1} className="w-full">
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="hidden lg:flex items-stretch gap-3 w-full h-[580px]"
          >
            
            {experiences.map((job, idx) => {
              const isSelected = idx === activeIndex;
              const theme = EXPERIENCE_THEMES[job.id] || EXPERIENCE_THEMES['bien-de-marketing'];
              const stepNumber = String(idx + 1).padStart(2, '0');

              if (isSelected) {
                return (
                  <motion.div
                    key={job.id}
                    layoutId={`exp-card-${job.id}`}
                    transition={{ type: "spring", stiffness: 260, damping: 28 }}
                    className={`flex-[4] rounded-3xl p-8 sm:p-10 bg-gradient-to-br ${theme.gradient} text-white shadow-2xl flex flex-col justify-between overflow-hidden relative group`}
                  >
                    {/* Top Progress Bar for Autoplay */}
                    {!isPaused && (
                      <motion.div
                        key={`prog-${job.id}-${activeIndex}`}
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 4.8, ease: 'linear' }}
                        className="absolute top-0 inset-x-0 h-1 bg-white/40 z-20"
                      />
                    )}

                    {/* Top Content: Monogram + Company + Role + Location */}
                    <div className="space-y-6 relative z-10">
                      
                      {/* Top Bar inside Active Card */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3.5">
                          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-lg text-white shadow-sm border-0">
                            {theme.monogram}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-black text-white/70">
                                #{stepNumber}
                              </span>
                              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-sm">
                                {job.company}
                              </h3>
                            </div>
                            <p className="text-xs sm:text-sm text-white/85 font-medium flex items-center gap-2 mt-0.5">
                              <MapPin className="w-3.5 h-3.5 shrink-0" />
                              <span>{job.location}</span>
                            </p>
                          </div>
                        </div>

                        {/* Period Tag */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/30 backdrop-blur-md text-xs font-mono font-bold text-white border-0 shrink-0">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{job.period}</span>
                        </div>
                      </div>

                      {/* Role Headline */}
                      <div className="pt-2">
                        <span className="text-xs uppercase font-bold tracking-widest text-white/80 block">
                          Cargo / Rol
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {job.role}
                        </h4>
                      </div>

                      {/* Key Responsibilities */}
                      <div className="space-y-2 pt-2">
                        <ul className="space-y-2.5">
                          {job.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/95 font-medium leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>

                    {/* Bottom Content: Skills & Status */}
                    <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                      <div className="flex flex-wrap gap-1.5">
                        {job.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs font-semibold px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm text-white border-0"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-white text-zinc-950 shadow-sm shrink-0">
                        {job.statusLabel}
                      </span>
                    </div>

                    {/* Ambient Glow */}
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
                  </motion.div>
                );
              }

              // Collapsed Tab Strip (Inactive Panel)
              return (
                <motion.button
                  key={job.id}
                  layoutId={`exp-card-${job.id}`}
                  onClick={() => setActiveIndex(idx)}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  className={`w-20 rounded-3xl p-4 ${theme.tabBg} border border-zinc-200/80 dark:border-transparent outline-none text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white flex flex-col items-center justify-between cursor-pointer transition-colors duration-200 overflow-hidden group shadow-md dark:shadow-lg`}
                  title={job.company}
                  aria-label={`Ver experiencia en ${job.company}`}
                >
                  {/* Top Monogram */}
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900/90 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-800 border border-zinc-200 dark:border-transparent flex items-center justify-center font-bold text-xs text-zinc-900 dark:text-white transition-colors shadow-xs">
                    {theme.monogram}
                  </div>

                  {/* Vertical Company Label */}
                  <div className="my-auto py-4 [writing-mode:vertical-rl] rotate-180 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-400 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors truncate max-h-[300px]">
                    {job.company}
                  </div>

                  {/* Bottom Year */}
                  <span className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400 font-semibold group-hover:text-zinc-950 dark:group-hover:text-white">
                    {job.period.split(' ')[0]}
                  </span>
                </motion.button>
              );
            })}

          </div>

          {/* RESPONSIVE VIEW (Mobile & Tablet < 1024px) */}
          <div 
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="lg:hidden space-y-6"
          >
            {/* Horizontal Scrollable Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {experiences.map((job, idx) => {
                const isSelected = idx === activeIndex;
                const theme = EXPERIENCE_THEMES[job.id] || EXPERIENCE_THEMES['bien-de-marketing'];

                return (
                  <button
                    key={job.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl shrink-0 transition-all font-bold text-xs cursor-pointer border ${
                      isSelected
                        ? `bg-gradient-to-r ${theme.gradient} text-white shadow-md border-transparent`
                        : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white border-zinc-200 dark:border-zinc-800'
                    }`}
                  >
                    <span className="font-mono">{theme.monogram}</span>
                    <span>{job.company.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile Active Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentJob.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className={`rounded-3xl p-6 sm:p-8 bg-gradient-to-br ${currentTheme.gradient} text-white shadow-xl space-y-6 relative overflow-hidden`}
              >
                {/* Mobile Progress Bar */}
                {!isPaused && (
                  <motion.div
                    key={`mobile-prog-${currentJob.id}-${activeIndex}`}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4.8, ease: 'linear' }}
                    className="absolute top-0 inset-x-0 h-1 bg-white/40"
                  />
                )}

                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center font-black text-sm text-white">
                      {currentTheme.monogram}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-white">{currentJob.company}</h3>
                      <p className="text-xs text-white/80 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" />
                        <span>{currentJob.location}</span>
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/30 text-white">
                    {currentJob.period}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/80">Rol</span>
                  <h4 className="text-base font-bold text-white">{currentJob.role}</h4>
                </div>

                <ul className="space-y-2">
                  {currentJob.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-white/90 leading-relaxed font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/20">
                  {currentJob.skills.map((skill, idx) => (
                    <span key={idx} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-black/25 text-white">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </BlurFadeDiv>

        {/* Verifiable References Subsection - Full Width & Modern Design */}
        <BlurFadeDiv delay={0.25} className="mt-20 pt-10 border-t border-zinc-200 dark:border-zinc-800/80 space-y-6 w-full max-w-[1700px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200 dark:border-indigo-800/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-xs">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white uppercase tracking-wider">
                  Referencias Profesionales Verificables
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Contactos directos de directivos, gerentes y ejecutivos con quienes he colaborado
                </p>
              </div>
            </div>

            <span className="text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 hidden sm:block">
              {REFERENCES.length} Contactos Profesionales
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4.5 w-full">
            {REFERENCES.map((ref, idx) => {
              const initials = ref.name
                .replace(/^Lic\.\s*/i, '')
                .split(' ')
                .slice(0, 2)
                .map((n) => n[0])
                .join('')
                .toUpperCase();

              const isCEO = ref.role.toUpperCase().includes('CEO');

              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-zinc-900/90 dark:via-zinc-900/80 dark:to-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/80 flex flex-col justify-between space-y-4 shadow-md dark:shadow-xl hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="space-y-3.5">
                    
                    {/* Header: Monogram Avatar + Role Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/80 flex items-center justify-center font-black text-xs text-zinc-900 dark:text-white shadow-xs group-hover:scale-105 transition-transform">
                        {initials}
                      </div>

                      <span className={`text-[10px] uppercase font-extrabold tracking-wider px-2.5 py-0.5 rounded-full ${
                        isCEO 
                          ? 'bg-purple-100 dark:bg-purple-950/70 border border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300' 
                          : 'bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-800/50 text-indigo-700 dark:text-indigo-300'
                      }`}>
                        {ref.role}
                      </span>
                    </div>

                    {/* Name & Company */}
                    <div>
                      <h4 className="text-base font-black text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors leading-snug">
                        {ref.name}
                      </h4>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 flex items-center gap-1.5 font-medium">
                        <Building2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0" />
                        <span className="truncate">{ref.company}</span>
                      </p>
                    </div>

                  </div>

                  {/* Phone Call & Quick Copy Bar */}
                  <div className="pt-3 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/70">
                    <a
                      href={`tel:${ref.phone.replace(/\s+/g, '')}`}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>{ref.phone}</span>
                    </a>

                    <button
                      onClick={() => handleCopyPhone(ref.phone)}
                      className="p-1.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer shadow-xs active:scale-90"
                      title="Copiar número de teléfono"
                    >
                      {copiedPhone === ref.phone ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </BlurFadeDiv>

      </div>
    </BlurFadeSection>
  );
}
