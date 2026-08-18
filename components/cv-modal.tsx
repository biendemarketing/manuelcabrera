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
  ExternalLink,
  User,
  CheckCircle2
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  WORK_EXPERIENCES, 
  EDUCATION_ITEMS, 
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
        className="relative w-full max-w-5xl max-h-[92vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-y-auto my-auto flex flex-col animate-in zoom-in-95 duration-200 text-zinc-950 dark:text-zinc-100"
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
              title="Abrir vista de impresión dedicada"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Página Imprimible</span>
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

        {/* Printable Resume Content (Alto Contraste y Sin Bordes Duros) */}
        <div className="p-6 sm:p-10 space-y-8 text-zinc-950 dark:text-zinc-100 print:text-black print:bg-white">
          
          {/* 1. PORTADA A TODO EL ANCHO CON ENFOQUE SUPERIOR COMPLETO */}
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-6 shadow-xl min-h-[260px] sm:min-h-[300px] flex flex-col justify-end p-5 sm:p-8">
            {PERSONAL_INFO.heroBgPhoto && (
              <Image
                src={PERSONAL_INFO.heroBgPhoto}
                alt={PERSONAL_INFO.name}
                fill
                priority
                sizes="(max-width: 1000px) 100vw, 1000px"
                className="object-cover object-top select-none"
              />
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl space-y-2.5 text-left">
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md inline-flex items-center gap-1.5 shadow-sm">
                  <ManuelCabreraLogo className="h-3 w-auto text-white" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white">
                    Perfil Profesional
                  </span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white drop-shadow-md">
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-xs sm:text-sm md:text-base font-bold text-indigo-300 drop-shadow-sm">
                Director Creativo • Marketing Digital, UI/UX & Desarrollo Web
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs font-semibold text-zinc-200">
                <span className="px-2.5 py-0.5 rounded-md bg-white/20 backdrop-blur-md font-mono font-bold text-white">
                  {PERSONAL_INFO.experienceYears} de Experiencia
                </span>
                <span>•</span>
                <span>{PERSONAL_INFO.age}</span>
                <span>•</span>
                <span>República Dominicana</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1 text-xs text-white font-semibold">
                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
                  <Phone className="w-3.5 h-3.5 text-indigo-400" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline text-white font-bold">
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
                  <Mail className="w-3.5 h-3.5 text-indigo-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-white font-semibold">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-1 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md text-xs">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="text-zinc-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mt-4 pt-3 pb-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400 mb-1.5 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>Sobre Mí & Perfil Profesional</span>
            </h2>
            <p className="text-sm text-zinc-950 dark:text-zinc-100 font-medium leading-relaxed">
              {PERSONAL_INFO.aboutSummary}
            </p>
          </div>

          {/* 2. FORMACIÓN ACADÉMICA ── PRIMERO QUE LO LABORAL ── */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5 pb-1">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Formación Académica & Diplomados</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION_ITEMS.map((edu) => (
                <div key={edu.id} className="p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-950 dark:text-zinc-100">
                  <p className="font-black text-black dark:text-white text-sm">{edu.degree}</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-bold text-xs mt-0.5">{edu.institution}</p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-[11px] font-mono font-semibold mt-1">{edu.period} • {edu.statusLabel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. EXPERIENCIA LABORAL ── DESPUÉS DE LA FORMACIÓN ── */}
          <div className="space-y-4">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5 pb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiencia Laboral & Trayectoria</span>
            </h2>

            <div className="space-y-4">
              {WORK_EXPERIENCES.map((exp) => (
                <div key={exp.id} className="p-4 sm:p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 text-zinc-950 dark:text-zinc-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-base font-black text-black dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400">
                        {exp.company} • <span className="text-zinc-800 dark:text-zinc-300 font-semibold">{exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-700 text-black dark:text-white w-fit shadow-xs">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-2.5 space-y-1 text-xs text-zinc-950 dark:text-zinc-200 list-disc list-inside font-medium">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 mt-3">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-zinc-200 dark:bg-zinc-700 text-zinc-950 dark:text-zinc-100 shadow-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Software Tools */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5 pb-1">
              <Wrench className="w-3.5 h-3.5" />
              <span>Software & Habilidades Técnicas</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60">
                <p className="font-black text-black dark:text-white text-xs mb-1">Diseño & UI/UX</p>
                <p className="text-[11px] text-zinc-900 dark:text-zinc-300 font-medium">Photoshop, Illustrator, InDesign, Figma, Adobe XD, Acrobat Pro.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60">
                <p className="font-black text-black dark:text-white text-xs mb-1">Marketing & Ads</p>
                <p className="text-[11px] text-zinc-900 dark:text-zinc-300 font-medium">Meta Ads Manager, Google Ads, GA4, TikTok Ads, SEO/SEM.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60">
                <p className="font-black text-black dark:text-white text-xs mb-1">Software & Web</p>
                <p className="text-[11px] text-zinc-900 dark:text-zinc-300 font-medium">TypeScript, Next.js, React, Node.js, PostgreSQL, Tailwind.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60">
                <p className="font-black text-black dark:text-white text-xs mb-1">3D, Video & IA</p>
                <p className="text-[11px] text-zinc-900 dark:text-zinc-300 font-medium">Blender 3D, Cinema 4D, Gemini Pro, ChatGPT, Midjourney.</p>
              </div>
            </div>
          </div>

          {/* References */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5 pb-1">
              <Award className="w-3.5 h-3.5" />
              <span>Referencias Comerciales & Profesionales</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
              {REFERENCES.map((ref, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60">
                  <p className="font-black text-black dark:text-white text-xs truncate">{ref.name}</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-bold text-[11px] truncate">{ref.role}</p>
                  <p className="text-zinc-800 dark:text-zinc-300 text-[11px] truncate font-medium">{ref.company}</p>
                  <p className="text-black dark:text-zinc-100 font-bold font-mono text-xs mt-1">{ref.phone}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-700 dark:text-zinc-400 font-medium">
            Documento oficial actualizado para contratación y servicios 2026.
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
