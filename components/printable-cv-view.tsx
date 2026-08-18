'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Printer, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Wrench, 
  Sun, 
  Moon, 
  Sliders, 
  Sparkles
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

export function PrintableCVView() {
  // Theme state: 'light' or 'dark'
  const [printTheme, setPrintTheme] = useState<'light' | 'dark'>('light');
  // Paper size format: 'full' (ancho completo), 'letter' (8.5x11), 'a4'
  const [paperFormat, setPaperFormat] = useState<'full' | 'letter' | 'a4'>('full');
  // Layout density: 'normal' or 'compact'
  const [density, setDensity] = useState<'normal' | 'compact'>('normal');

  const handlePrint = () => {
    window.print();
  };

  // Dimensions classes based on paperFormat for screen preview
  const getContainerWidth = () => {
    switch (paperFormat) {
      case 'letter':
        return 'max-w-[880px]'; // standard 8.5" proportion
      case 'a4':
        return 'max-w-[820px]';
      case 'full':
      default:
        return 'w-full max-w-6xl 2xl:max-w-7xl';
    }
  };

  return (
    <div className={`min-h-screen w-full transition-colors duration-300 ${
      printTheme === 'dark' 
        ? 'bg-zinc-950 text-zinc-100' 
        : 'bg-zinc-100 text-zinc-900'
    }`}>
      
      {/* ── TOP FLOATING CONTROL TOOLBAR (Oculta automáticamente en @media print) ── */}
      <header className="sticky top-0 z-50 w-full bg-zinc-900/90 backdrop-blur-md border-b border-zinc-800 text-white shadow-xl print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Back Link & Title */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver al Portafolio</span>
            </Link>
            <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-zinc-700">
              <ManuelCabreraLogo className="h-5 w-auto text-white" />
              <span className="text-xs font-black uppercase tracking-wider text-zinc-300">CV Imprimible</span>
            </div>
          </div>

          {/* Center: Controls for Theme, Paper Size & Density */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            
            {/* Theme Toggle (Light / Dark) */}
            <div className="flex items-center bg-zinc-800 p-1 rounded-xl border border-zinc-700">
              <button
                onClick={() => setPrintTheme('light')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  printTheme === 'light' 
                    ? 'bg-white text-zinc-950 shadow-sm' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Modo Claro (Recomendado para imprimir en papel blanco)"
              >
                <Sun className="w-3 h-3" />
                <span>Claro</span>
              </button>
              <button
                onClick={() => setPrintTheme('dark')}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                  printTheme === 'dark' 
                    ? 'bg-zinc-950 text-white border border-zinc-700 shadow-sm' 
                    : 'text-zinc-400 hover:text-white'
                }`}
                title="Modo Oscuro (Para PDF oscuro de lujo)"
              >
                <Moon className="w-3 h-3" />
                <span>Oscuro</span>
              </button>
            </div>

            {/* Paper Size Selector (Ancho Completo, 8.5x11, A4) */}
            <div className="hidden md:flex items-center bg-zinc-800 px-2 py-1 rounded-xl border border-zinc-700 gap-1">
              <span className="text-[10px] uppercase font-bold text-zinc-400 mr-1">Vista:</span>
              <button
                onClick={() => setPaperFormat('full')}
                className={`px-2 py-0.5 rounded-md font-bold transition-all cursor-pointer text-[11px] ${
                  paperFormat === 'full' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Abarcar todo el ancho disponible de la pantalla"
              >
                Ancho Completo
              </button>
              <button
                onClick={() => setPaperFormat('letter')}
                className={`px-2 py-0.5 rounded-md font-bold transition-all cursor-pointer text-[11px] ${
                  paperFormat === 'letter' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Tamaño Carta Estándar (8.5 x 11 pulgadas)"
              >
                8.5×11 (Carta)
              </button>
              <button
                onClick={() => setPaperFormat('a4')}
                className={`px-2 py-0.5 rounded-md font-bold transition-all cursor-pointer text-[11px] ${
                  paperFormat === 'a4' ? 'bg-indigo-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Formato Internacional A4 (210 x 297 mm)"
              >
                A4
              </button>
            </div>

            {/* Density Toggle */}
            <button
              onClick={() => setDensity((prev) => prev === 'normal' ? 'compact' : 'normal')}
              className={`hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-xl border text-[11px] font-bold transition-all cursor-pointer ${
                density === 'compact' 
                  ? 'bg-purple-600 text-white border-purple-500' 
                  : 'bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700'
              }`}
              title="Compactar espaciados"
            >
              <Sliders className="w-3 h-3" />
              <span>{density === 'compact' ? 'Compacto' : 'Espaciado Normal'}</span>
            </button>

          </div>

          {/* Right: Print / Export Button */}
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-xs shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer border border-indigo-400/40"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir / Guardar en PDF</span>
          </button>

        </div>
      </header>

      {/* ── PRINTABLE CV SHEET CONTAINER ── */}
      <main className="w-full py-6 sm:py-10 px-2 sm:px-4 flex justify-center print:p-0 print:m-0 print:w-full">
        <div 
          id="cv-printable-sheet"
          className={`w-full ${getContainerWidth()} shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 transition-all duration-300 print:shadow-none print:rounded-none print:p-0 print:max-w-none print:w-full ${
            printTheme === 'dark'
              ? 'bg-zinc-900 border border-zinc-800 text-zinc-100'
              : 'bg-white border border-zinc-200 text-zinc-900'
          }`}
          style={{
            pageBreakInside: 'auto',
          }}
        >
          
          {/* 1. PORTADA A TODO EL ANCHO DISPONIBLE CON INFO DE PERFIL A LA IZQUIERDA */}
          <div 
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-6 shadow-xl border border-zinc-200/80 dark:border-zinc-800 min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex flex-col justify-end p-5 sm:p-8 md:p-10"
            style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
          >
            {/* Foto de Portada de Fondo a Todo el Ancho */}
            {PERSONAL_INFO.heroBgPhoto && (
              <Image
                src={PERSONAL_INFO.heroBgPhoto}
                alt={PERSONAL_INFO.name}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover object-center select-none"
              />
            )}

            {/* Gradiente de Alto Contraste para Máxima Legibilidad sobre la Portada */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

            {/* Contenido de Perfil Alineado a la Izquierda Encima de la Portada */}
            <div className="relative z-10 w-full max-w-2xl space-y-3 text-left">
              
              {/* Badge & Logo Monogram */}
              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 inline-flex items-center gap-1.5 shadow-sm">
                  <ManuelCabreraLogo className="h-3.5 w-auto text-white" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    Perfil Profesional
                  </span>
                </div>

                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                  {PERSONAL_INFO.availability}
                </span>
              </div>

              {/* Nombre Principal */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
                {PERSONAL_INFO.name}
              </h1>

              {/* Cargo & Subtítulo */}
              <p className="text-xs sm:text-sm md:text-base font-bold text-indigo-300 tracking-wide drop-shadow-sm">
                Director Creativo • Marketing Digital, UI/UX & Desarrollo Web
              </p>

              {/* Chips de Experiencia & Datos Clave */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] font-semibold text-zinc-200">
                <span className="px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-md border border-white/20 font-mono font-bold text-white">
                  {PERSONAL_INFO.experienceYears} de Experiencia
                </span>
                <span>•</span>
                <span>{PERSONAL_INFO.age}</span>
                <span>•</span>
                <span>República Dominicana</span>
              </div>

              {/* Barra de Contacto Integrada Sobre la Portada */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-zinc-100 font-medium">
                <div className="flex items-center gap-1.5 font-bold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline text-white">
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-1.5 font-semibold bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-white">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                  <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="font-mono text-[11px] font-bold text-white">https://manuelcabrera.pro</span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="text-zinc-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

            </div>
          </div>

          {/* 2. RESUMEN PROFESIONAL & FILOSOFÍA */}
          <section className={`border-b pb-5 ${density === 'compact' ? 'mb-4' : 'mb-6'} ${
            printTheme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
          }`} style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Perfil Profesional & Filosofía de Trabajo</span>
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed text-justify">
              {PERSONAL_INFO.aboutSummary}
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 italic mt-2 border-l-2 border-indigo-500 pl-3">
              &quot;{PERSONAL_INFO.designPhilosophy}&quot;
            </p>
          </section>

          {/* 3. EXPERIENCIA LABORAL & TRAYECTORIA (Evitar saltos de página partidos) */}
          <section className={`border-b pb-6 ${density === 'compact' ? 'mb-4' : 'mb-6'} ${
            printTheme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
          }`}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-1.5" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiencia Laboral & Trayectoria Profesional</span>
            </h2>

            <div className={`space-y-${density === 'compact' ? '4' : '5'}`}>
              {WORK_EXPERIENCES.map((exp) => (
                <div 
                  key={exp.id} 
                  className={`p-4 rounded-xl border ${
                    printTheme === 'dark' 
                      ? 'bg-zinc-950/60 border-zinc-800' 
                      : 'bg-zinc-50/80 border-zinc-200'
                  }`}
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                    <div>
                      <h3 className="text-sm font-bold text-zinc-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        {exp.company} • <span className="text-zinc-500 dark:text-zinc-400 font-normal">{exp.location}</span>
                      </p>
                    </div>
                    <span className="text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsabilidades */}
                  <ul className="mt-2 space-y-1 text-xs text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1 mt-2.5 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. SOFTWARE, HERRAMIENTAS & INTELIGENCIA ARTIFICIAL */}
          <section className={`border-b pb-5 ${density === 'compact' ? 'mb-4' : 'mb-6'} ${
            printTheme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
          }`} style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5" />
              <span>Software, Herramientas & Tecnologías Dominadas (+100)</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                <p className="font-bold text-zinc-900 dark:text-white text-[11px] mb-1">Diseño & UI/UX</p>
                <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-snug">
                  Photoshop, Illustrator, InDesign, Figma, Adobe XD, Acrobat Pro.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                <p className="font-bold text-zinc-900 dark:text-white text-[11px] mb-1">Marketing & Ads</p>
                <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-snug">
                  Meta Ads Manager, Google Ads, GA4, TikTok Ads, SEO/SEM, Embudos.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                <p className="font-bold text-zinc-900 dark:text-white text-[11px] mb-1">Software & Web</p>
                <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-snug">
                  TypeScript, Next.js, React, Node.js, PostgreSQL, Supabase, Tailwind.
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800">
                <p className="font-bold text-zinc-900 dark:text-white text-[11px] mb-1">3D, Video & IA</p>
                <p className="text-[10px] text-zinc-600 dark:text-zinc-400 leading-snug">
                  Blender 3D, Cinema 4D, Gemini Pro, ChatGPT, Claude, Midjourney.
                </p>
              </div>
            </div>
          </section>

          {/* 5. FORMACIÓN ACADÉMICA & CERTIFICACIONES */}
          <section className={`border-b pb-5 ${density === 'compact' ? 'mb-4' : 'mb-6'} ${
            printTheme === 'dark' ? 'border-zinc-800' : 'border-zinc-200'
          }`} style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Formación Académica & Diplomados</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION_ITEMS.map((edu) => (
                <div 
                  key={edu.id} 
                  className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60"
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <p className="font-bold text-zinc-900 dark:text-white text-xs">{edu.degree}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 text-[11px]">{edu.institution}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[10px] font-mono mt-0.5">{edu.period} • {edu.statusLabel}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. REFERENCIAS PROFESIONALES */}
          <section className="pt-2" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>Referencias Comerciales & Profesionales</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs">
              {REFERENCES.map((ref, idx) => (
                <div 
                  key={idx} 
                  className="p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60"
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <p className="font-bold text-zinc-900 dark:text-white text-[11px] truncate">{ref.name}</p>
                  <p className="text-indigo-600 dark:text-indigo-400 text-[10px] truncate">{ref.role}</p>
                  <p className="text-zinc-500 dark:text-zinc-400 text-[10px] truncate font-medium">{ref.company}</p>
                  <p className="text-zinc-600 dark:text-zinc-300 text-[10px] font-mono mt-1">{ref.phone}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* ── CSS PRINT RULES (Garantiza impresión perfecta sin cortes de página) ── */}
      <style jsx global>{`
        @media print {
          @page {
            size: ${paperFormat === 'a4' ? 'A4 portrait' : paperFormat === 'legal' ? 'legal portrait' : '8.5in 11in portrait'};
            margin: 10mm 10mm 10mm 10mm;
          }
          
          body {
            background-color: ${printTheme === 'dark' ? '#09090b' : '#ffffff'} !important;
            color: ${printTheme === 'dark' ? '#f4f4f5' : '#18181b'} !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          #cv-printable-sheet {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background: transparent !important;
          }

          /* Evita cortes a la mitad en bloques de experiencia, educación o habilidades */
          header, section, div[style*="breakInside"], ul, li {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }

          a {
            text-decoration: none !important;
            color: inherit !important;
          }
        }
      `}</style>

    </div>
  );
}
