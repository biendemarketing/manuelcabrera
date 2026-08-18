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
        : 'bg-zinc-100 text-zinc-950'
    }`}>
      
      {/* ── TOP FLOATING CONTROL TOOLBAR (Oculta automáticamente en @media print) ── */}
      <header className="sticky top-0 z-50 w-full bg-zinc-900/95 backdrop-blur-md text-white shadow-xl print:hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          
          {/* Left: Back Link & Title */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-bold transition-all"
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

      {/* ── PRINTABLE CV SHEET CONTAINER (Sin bordes duros) ── */}
      <main className="w-full py-6 sm:py-10 px-2 sm:px-4 flex justify-center print:p-0 print:m-0 print:w-full">
        <div 
          id="cv-printable-sheet"
          className={`w-full ${getContainerWidth()} shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-12 transition-all duration-300 print:shadow-none print:rounded-none print:p-0 print:max-w-none print:w-full ${
            printTheme === 'dark'
              ? 'bg-zinc-900 text-zinc-100'
              : 'bg-white text-zinc-950'
          }`}
          style={{
            pageBreakInside: 'auto',
          }}
        >
          
          {/* 1. PORTADA A TODO EL ANCHO CON ENCUADRE SUPERIOR PERFECTO (Sin corte de rostro) */}
          <div 
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-8 shadow-xl min-h-[280px] sm:min-h-[320px] md:min-h-[360px] flex flex-col justify-end p-6 sm:p-8 md:p-10"
            style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
          >
            {/* Foto de Portada con Enfoque Top/Upper para que la cabeza y rostro salgan completos */}
            {PERSONAL_INFO.heroBgPhoto && (
              <Image
                src={PERSONAL_INFO.heroBgPhoto}
                alt={PERSONAL_INFO.name}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top select-none"
              />
            )}

            {/* Gradientes de Alto Contraste para Máxima Legibilidad sobre la Portada */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/25 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20 pointer-events-none" />

            {/* Contenido de Perfil Alineado a la Izquierda Encima de la Portada */}
            <div className="relative z-10 w-full max-w-2xl space-y-3 text-left">
              
              {/* Badge & Logo Monogram */}
              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-md inline-flex items-center gap-1.5 shadow-sm">
                  <ManuelCabreraLogo className="h-3.5 w-auto text-white" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white">
                    Perfil Profesional
                  </span>
                </div>

                <span className="px-3 py-1 rounded-lg bg-emerald-500/30 backdrop-blur-md text-[10px] font-black text-emerald-300 uppercase tracking-wider">
                  {PERSONAL_INFO.availability}
                </span>
              </div>

              {/* Nombre Principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white drop-shadow-md">
                {PERSONAL_INFO.name}
              </h1>

              {/* Cargo & Subtítulo */}
              <p className="text-sm sm:text-base md:text-lg font-bold text-indigo-300 tracking-wide drop-shadow-sm">
                Director Creativo • Marketing Digital, UI/UX & Desarrollo Web
              </p>

              {/* Chips de Experiencia & Datos Clave */}
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-semibold text-zinc-200">
                <span className="px-3 py-0.5 rounded-md bg-white/20 backdrop-blur-md font-mono font-bold text-white">
                  {PERSONAL_INFO.experienceYears} de Experiencia
                </span>
                <span>•</span>
                <span>{PERSONAL_INFO.age}</span>
                <span>•</span>
                <span>República Dominicana</span>
              </div>

              {/* Barra de Contacto Integrada Sobre la Portada */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-xs text-white font-semibold">
                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <Phone className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline text-white font-bold">
                    {PERSONAL_INFO.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline text-white font-semibold">
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <Globe className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="font-mono text-xs font-bold text-white">https://manuelcabrera.pro</span>
                </div>

                <div className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span className="text-zinc-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

            </div>
          </div>

          {/* 2. RESUMEN PROFESIONAL & FILOSOFÍA (Alto Contraste y Sin Bordes Duros) */}
          <section className={`pb-6 ${density === 'compact' ? 'mb-4' : 'mb-8'}`} style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>Perfil Profesional & Filosofía de Trabajo</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-950 dark:text-zinc-100 font-normal leading-relaxed text-justify">
              {PERSONAL_INFO.aboutSummary}
            </p>
            <div className="mt-3 p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800/60 border-l-4 border-indigo-600 dark:border-indigo-400">
              <p className="text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 font-semibold italic">
                &quot;{PERSONAL_INFO.designPhilosophy}&quot;
              </p>
            </div>
          </section>

          {/* 3. EXPERIENCIA LABORAL & TRAYECTORIA (Cards limpias sin bordes duros) */}
          <section className={`pb-6 ${density === 'compact' ? 'mb-4' : 'mb-8'}`}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-1.5" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
              <Briefcase className="w-4 h-4" />
              <span>Experiencia Laboral & Trayectoria Profesional</span>
            </h2>

            <div className={`space-y-${density === 'compact' ? '4' : '5'}`}>
              {WORK_EXPERIENCES.map((exp) => (
                <div 
                  key={exp.id} 
                  className={`p-5 rounded-2xl transition-colors ${
                    printTheme === 'dark' 
                      ? 'bg-zinc-800/40 text-zinc-100' 
                      : 'bg-zinc-100/80 text-zinc-950'
                  }`}
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-zinc-950 dark:text-white">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-indigo-700 dark:text-indigo-400">
                        {exp.company} • <span className="text-zinc-700 dark:text-zinc-300 font-semibold">{exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-black font-mono px-3 py-1 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-950 dark:text-white w-fit shadow-xs">
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsabilidades con alto contraste */}
                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-zinc-900 dark:text-zinc-200 list-disc list-inside">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed font-medium">
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags sin bordes */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5 pt-3">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-zinc-200/90 dark:bg-zinc-700/80 text-zinc-900 dark:text-zinc-100 shadow-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 4. SOFTWARE, HERRAMIENTAS & INTELIGENCIA ARTIFICIAL (Cards sin bordes) */}
          <section className={`pb-6 ${density === 'compact' ? 'mb-4' : 'mb-8'}`} style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <Wrench className="w-4 h-4" />
              <span>Software, Herramientas & Tecnologías Dominadas (+100)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40">
                <p className="font-black text-zinc-950 dark:text-white text-sm mb-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Diseño & UI/UX</span>
                </p>
                <p className="text-xs text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed">
                  Photoshop, Illustrator, InDesign, Figma, Adobe XD, Acrobat Pro.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40">
                <p className="font-black text-zinc-950 dark:text-white text-sm mb-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Marketing & Ads</span>
                </p>
                <p className="text-xs text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed">
                  Meta Ads Manager, Google Ads, GA4, TikTok Ads, SEO/SEM, Embudos.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40">
                <p className="font-black text-zinc-950 dark:text-white text-sm mb-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Software & Web</span>
                </p>
                <p className="text-xs text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed">
                  TypeScript, Next.js, React, Node.js, PostgreSQL, Supabase, Tailwind.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40">
                <p className="font-black text-zinc-950 dark:text-white text-sm mb-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>3D, Video & IA</span>
                </p>
                <p className="text-xs text-zinc-800 dark:text-zinc-300 font-medium leading-relaxed">
                  Blender 3D, Cinema 4D, Gemini Pro, ChatGPT, Claude, Midjourney.
                </p>
              </div>
            </div>
          </section>

          {/* 5. FORMACIÓN ACADÉMICA & CERTIFICACIONES (Cards sin bordes) */}
          <section className={`pb-6 ${density === 'compact' ? 'mb-4' : 'mb-8'}`} style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Formación Académica & Diplomados</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION_ITEMS.map((edu) => (
                <div 
                  key={edu.id} 
                  className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40"
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <p className="font-black text-zinc-950 dark:text-white text-sm">{edu.degree}</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-bold text-xs mt-0.5">{edu.institution}</p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-[11px] font-mono font-semibold mt-1">{edu.period} • {edu.statusLabel}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 6. REFERENCIAS PROFESIONALES (Cards sin bordes) */}
          <section className="pt-2" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Referencias Comerciales & Profesionales</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {REFERENCES.map((ref, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-zinc-100/80 dark:bg-zinc-800/40"
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <p className="font-black text-zinc-950 dark:text-white text-sm truncate">{ref.name}</p>
                  <p className="text-indigo-700 dark:text-indigo-400 font-bold text-xs truncate">{ref.role}</p>
                  <p className="text-zinc-800 dark:text-zinc-300 text-xs truncate font-medium">{ref.company}</p>
                  <p className="text-zinc-950 dark:text-zinc-100 font-bold font-mono text-xs mt-1.5">{ref.phone}</p>
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
            size: ${paperFormat === 'a4' ? 'A4 portrait' : '8.5in 11in portrait'};
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
