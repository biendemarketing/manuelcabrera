'use client';

import React, { useEffect } from 'react';
import { 
  X, 
  Printer, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Wrench
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
          
          {/* Resume Header */}
          <div className="pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-zinc-700 dark:text-zinc-300 mt-1 uppercase tracking-wide">
                  Marketing Digital | Estrategia & Publicidad | Branding | UI/UX & 3D
                </p>
              </div>

              <div className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Instagram className="w-3.5 h-3.5 text-zinc-500" />
                  <span>@{PERSONAL_INFO.instagramPrimary} • @{PERSONAL_INFO.instagramSecondary}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.location}</span>
                </p>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mt-5 pt-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-1.5">
                Sobre Mí & Perfil Profesional
              </h2>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Tengo 29 años y cuento con más de 11 años de experiencia trabajando en empresas publicitarias y como consultor independiente Freelancer. Apasionado por el arte y sus diversas formas de expresión, combinando el equilibrio entre lo simple y lo intenso para comunicar con impacto. Capacidad comprobada para interpretar necesidades complejas y plasmarlas visualmente con los más altos estándares de calidad internacional.
              </p>
            </div>
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
