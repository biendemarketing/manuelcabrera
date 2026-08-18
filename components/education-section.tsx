'use client';

import React from 'react';
import { 
  EDUCATION_ITEMS, 
  TECHNICAL_COURSES 
} from '@/data/portfolio-data';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  BookOpen,
  Calendar,
  Sparkles,
  Building2,
  BookmarkCheck,
  Check
} from 'lucide-react';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';

// Category color highlights for technical certifications
const CATEGORY_COLORS: Record<string, { badge: string; text: string; dot: string }> = {
  'Marketing': { badge: 'bg-purple-950/60 border-purple-800/40 text-purple-300', text: 'text-purple-400', dot: 'bg-purple-400' },
  'Diseño': { badge: 'bg-indigo-950/60 border-indigo-800/40 text-indigo-300', text: 'text-indigo-400', dot: 'bg-indigo-400' },
  'Tecnología': { badge: 'bg-cyan-950/60 border-cyan-800/40 text-cyan-300', text: 'text-cyan-400', dot: 'bg-cyan-400' },
  'Hardware': { badge: 'bg-blue-950/60 border-blue-800/40 text-blue-300', text: 'text-blue-400', dot: 'bg-blue-400' },
  'Idiomas': { badge: 'bg-emerald-950/60 border-emerald-800/40 text-emerald-300', text: 'text-emerald-400', dot: 'bg-emerald-400' },
  'Producción': { badge: 'bg-amber-950/60 border-amber-800/40 text-amber-300', text: 'text-amber-400', dot: 'bg-amber-400' },
  'Gestión': { badge: 'bg-rose-950/60 border-rose-800/40 text-rose-300', text: 'text-rose-400', dot: 'bg-rose-400' },
  'Salud': { badge: 'bg-teal-950/60 border-teal-800/40 text-teal-300', text: 'text-teal-400', dot: 'bg-teal-400' },
};

export function EducationSection() {
  return (
    <BlurFadeSection id="formacion" className="py-24 sm:py-32 bg-zinc-950 text-white relative w-full overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-20">
        
        {/* Section Header */}
        <BlurFadeDiv className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Formación & Certificaciones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Formación Académica & Certificaciones
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-400 mt-4 leading-relaxed max-w-2xl font-normal">
            Preparación continua en instituciones acreditadas, diplomados en diseño publicitario, desarrollo técnico y actualización constante en nuevas tecnologías.
          </p>
        </BlurFadeDiv>

        {/* FULL-WIDTH CONTAINER */}
        <div className="w-full max-w-[1700px] mx-auto space-y-16">
          
          {/* 1. Higher Education & Diplomas Grid (Full-Width 3-Col Cards) */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5">
              <BookOpen className="w-5 h-5 text-indigo-400" />
              <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider">
                Educación Superior & Diplomados
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 w-full">
              {EDUCATION_ITEMS.map((edu, index) => {
                const isFirst = index === 0;
                const isSecond = index === 1;

                return (
                  <div
                    key={edu.id}
                    className="relative p-7 sm:p-8 lg:p-9 rounded-3xl sm:rounded-[32px] bg-gradient-to-br from-zinc-900/95 via-zinc-900/85 to-zinc-950 text-white shadow-2xl flex flex-col justify-between overflow-hidden group hover:bg-zinc-900 transition-all duration-300 border-0"
                  >
                    {/* Subtle Corner Glow Accent */}
                    <div 
                      className={`absolute -right-20 -top-20 w-48 h-48 rounded-full blur-2xl pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity ${
                        isFirst ? 'bg-indigo-500' : isSecond ? 'bg-purple-500' : 'bg-cyan-500'
                      }`} 
                    />

                    <div className="space-y-5 relative z-10">
                      
                      {/* Top Header: Icon + Period Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                          <GraduationCap className={`w-6 h-6 ${isFirst ? 'text-indigo-400' : isSecond ? 'text-purple-400' : 'text-cyan-400'}`} />
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-xs font-mono font-bold text-zinc-300 shadow-xs">
                          <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                          <span>{edu.period}</span>
                        </div>
                      </div>

                      {/* Institution & Degree */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-300/90 block">
                          Institución Académica
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                          {edu.institution}
                        </h4>
                      </div>

                      {/* Degree / Carrera */}
                      <div className="p-3.5 rounded-2xl bg-zinc-950/70 border border-zinc-800/60">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                          Título / Programa
                        </span>
                        <p className="text-sm font-bold text-white leading-snug">
                          {edu.degree}
                        </p>
                      </div>

                      {/* Details */}
                      {edu.details && (
                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal pt-1">
                          {edu.details}
                        </p>
                      )}

                    </div>

                    {/* Bottom Status Tag */}
                    <div className="pt-6 mt-4 border-t border-zinc-800/70 flex items-center justify-between relative z-10">
                      <span className="text-[11px] font-medium text-zinc-400">
                        Estado del Programa:
                      </span>
                      <span className={`text-xs font-bold px-3 py-1 rounded-full shadow-xs ${
                        edu.status === 'completed'
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/40'
                          : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/40'
                      }`}>
                        {edu.statusLabel}
                      </span>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Technical Courses & Certifications (Full-Width 5-Col Modern Grid) */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider">
                  Cursos Técnicos & Certificaciones Continuas
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-zinc-400 hidden sm:block">
                10 Certificaciones Clave
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 w-full">
              {TECHNICAL_COURSES.map((course, idx) => {
                const categoryStyle = CATEGORY_COLORS[course.category] || CATEGORY_COLORS['Tecnología'];

                return (
                  <div
                    key={idx}
                    className="group p-5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-900 flex flex-col justify-between gap-3.5 border-0 shadow-xs hover:shadow-lg transition-all duration-200"
                  >
                    <div className="space-y-2">
                      {/* Category Badge + Verified Check */}
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${categoryStyle.badge}`}>
                          {course.category}
                        </span>
                        <div className="w-5 h-5 rounded-full bg-zinc-950 flex items-center justify-center text-emerald-400 shrink-0 shadow-2xs">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                      </div>

                      {/* Course Title */}
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                        {course.name}
                      </h4>
                    </div>

                    {/* Institution */}
                    <div className="pt-2 border-t border-zinc-800/60 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                      <p className="text-[11px] font-medium text-zinc-400 truncate">
                        {course.institution}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </BlurFadeSection>
  );
}

export default EducationSection;
