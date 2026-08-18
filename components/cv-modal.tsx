'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  X, 
  Printer, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Wrench,
  ExternalLink
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCES, 
  EDUCATION_ITEMS, 
  TECHNICAL_COURSES, 
  SOFTWARE_TOOLS, 
  REFERENCES 
} from '@/data/portfolio-data';
import { ManuelCabreraLogo } from '@/components/logo';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      id="cv-interactive-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-y-auto my-auto flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:px-8 bg-zinc-950 text-white rounded-t-3xl backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center">
              <ManuelCabreraLogo className="h-6 w-auto text-white" />
            </div>
            <div>
              <p className="text-xs font-bold">Currículum Vitae Oficial</p>
              <p className="text-[11px] text-zinc-400">Manuel Cabrera • 11 Años Exp.</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/cv"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-sm"
              title="Abrir vista de impresión y exportación dedicada"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Vista Imprimible 8.5x11</span>
            </Link>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors cursor-pointer"
              title="Imprimir o guardar como PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Imprimir / Guardar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 space-y-8 text-zinc-800 dark:text-zinc-200 print:text-black print:bg-white">
          
          {/* 1. PORTADA A TODO EL ANCHO CON INFORMACIÓN A LA IZQUIERDA */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-6 shadow-xl border border-zinc-200/80 dark:border-zinc-800 min-h-[220px] sm:min-h-[250px] flex flex-col justify-end p-5 sm:p-7">
            {PERSONAL_INFO.heroBgPhoto && (
              <Image
                src={PERSONAL_INFO.heroBgPhoto}
                alt={PERSONAL_INFO.name}
                fill
                priority
                sizes="(max-width: 1000px) 100vw, 900px"
                className="object-cover object-center select-none"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

            <div className="relative z-10 w-full max-w-xl space-y-2 text-left">
              <div className="flex items-center gap-2">
                <div className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20 inline-flex items-center gap-1.5 shadow-sm">
                  <ManuelCabreraLogo className="h-3 w-auto text-white" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">
                    Perfil Profesional
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[9px] font-bold text-emerald-300 uppercase">
                  {PERSONAL_INFO.availability}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-md">
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-xs sm:text-sm font-bold text-indigo-300 drop-shadow-sm">
                Director Creativo • Marketing Digital, UI/UX & Desarrollo Web
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-[10px] font-semibold text-zinc-200">
                <span className="px-2 py-0.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20 font-mono font-bold text-white">
                  {PERSONAL_INFO.experienceYears} de Experiencia
                </span>
                <span>•</span>
                <span>{PERSONAL_INFO.age}</span>
                <span>•</span>
                <span>República Dominicana</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1 text-[11px] text-zinc-100 font-medium">
                <div className="flex items-center gap-1 font-bold bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                  <Phone className="w-3 h-3 text-indigo-400" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline text-white">
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-1 font-semibold bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
                  <Mail className="w-3 h-3 text-indigo-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-white">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 text-[10px]">
                  <MapPin className="w-3 h-3 text-indigo-400" />
                  <span className="text-zinc-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

            {/* Profile Summary */}
            <div className="mt-4 pt-3 border-b border-zinc-200 dark:border-zinc-800 pb-5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-1">
                Sobre Mí & Perfil Profesional
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {PERSONAL_INFO.aboutSummary}
              </p>
            </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2 pb-2">
              <Briefcase className="w-4 h-4 text-zinc-500" />
              <span>Experiencia Laboral</span>
            </h2>

            <div className="space-y-5">
              {WORK_EXPERIENCES.map((job) => (
                <div key={job.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                      {job.company} — <span className="font-semibold text-zinc-700 dark:text-zinc-300">{job.role}</span>
                    </h3>
                    <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400">{job.period}</span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">{job.location} • <span className="italic">{job.statusLabel}</span></p>
                  <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-300 pt-1">
                    {job.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Courses in 2 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            
            {/* Education */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2 pb-2">
                <GraduationCap className="w-4 h-4 text-zinc-500" />
                <span>Educación</span>
              </h2>
              <div className="space-y-3">
                {EDUCATION_ITEMS.map((edu) => (
                  <div key={edu.id} className="space-y-0.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-900 dark:text-white">{edu.institution}</span>
                      <span className="font-mono text-zinc-500 dark:text-zinc-400">{edu.period}</span>
                    </div>
                    <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">{edu.degree}</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{edu.statusLabel}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Courses */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2 pb-2">
                <Award className="w-4 h-4 text-zinc-500" />
                <span>Cursos Técnicos & Certificaciones</span>
              </h2>
              <div className="grid grid-cols-1 gap-2 text-xs">
                {TECHNICAL_COURSES.map((c, i) => (
                  <div key={i} className="flex items-center justify-between py-1">
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">{c.name}</span>
                    <span className="font-semibold text-zinc-500 dark:text-zinc-400 text-[11px]">({c.institution})</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Software & Tools Matrix */}
          <div className="space-y-3 pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
              <Wrench className="w-4 h-4 text-zinc-500" />
              <span>Software & Aplicaciones Dominadas</span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {SOFTWARE_TOOLS.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium"
                >
                  {tool.name} ({tool.level}%)
                </span>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="space-y-3 pt-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
              Referencias Profesionales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              {REFERENCES.map((ref, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/60 shadow-xs">
                  <p className="font-bold text-zinc-900 dark:text-white">{ref.name}</p>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">{ref.role} • {ref.company}</p>
                  <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-1">Tel: {ref.phone}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            Documento actualizado para contratación y servicios 2026.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 text-xs font-bold transition-all shadow-md cursor-pointer flex items-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Descargar PDF / Imprimir</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
