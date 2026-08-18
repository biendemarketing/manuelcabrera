'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Wrench, 
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
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white print:bg-white print:text-black">
      
      {/* ── SEAMLESS FULL-WIDTH CV DOCUMENT (Zero Visible Buttons) ── */}
      <main className="w-full py-6 sm:py-10 md:py-12 px-4 sm:px-8 md:px-14 lg:px-20 max-w-7xl mx-auto print:p-0 print:m-0 print:max-w-none print:w-full">
        <div 
          id="cv-printable-sheet"
          className="w-full transition-all duration-300 print:p-0 print:m-0"
          style={{
            pageBreakInside: 'auto',
          }}
        >
          
          {/* 1. PORTADA A TODO EL ANCHO CON ENFOQUE SUPERIOR PERFECTO */}
          <div 
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden mb-8 shadow-lg min-h-[300px] sm:min-h-[360px] md:min-h-[400px] flex flex-col justify-end p-6 sm:p-10 md:p-12 print:min-h-[260px] print:p-6 print:rounded-2xl"
            style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
          >
            {/* Foto de Portada con Enfoque Top */}
            {PERSONAL_INFO.heroBgPhoto && (
              <Image
                src={PERSONAL_INFO.heroBgPhoto}
                alt={PERSONAL_INFO.name}
                fill
                priority
                sizes="(max-width: 1400px) 100vw, 1400px"
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
              </div>

              {/* Nombre Principal */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white drop-shadow-md">
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

          {/* 2. RESUMEN PROFESIONAL & FILOSOFÍA */}
          <section className="pb-6 mb-8 print:mb-6" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-400 print:text-indigo-800 mb-3 flex items-center gap-1.5">
              <User className="w-4 h-4" />
              <span>Perfil Profesional & Filosofía de Trabajo</span>
            </h2>
            <p className="text-sm sm:text-base font-normal leading-relaxed text-justify text-zinc-100 print:text-black">
              {PERSONAL_INFO.aboutSummary}
            </p>
            <div className="mt-3 p-4 rounded-xl border-l-4 bg-zinc-900 border-indigo-400 text-zinc-200 print:bg-zinc-100 print:border-indigo-600 print:text-black">
              <p className="text-xs sm:text-sm font-semibold italic">
                &quot;{PERSONAL_INFO.designPhilosophy}&quot;
              </p>
            </div>
          </section>

          {/* 3. FORMACIÓN ACADÉMICA & DIPLOMADOS ── PRIMERO QUE LO LABORAL ── */}
          <section className="pb-6 mb-8 print:mb-6" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-400 print:text-indigo-800 mb-4 flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" />
              <span>Formación Académica & Diplomados</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION_ITEMS.map((edu) => (
                <div 
                  key={edu.id} 
                  className="p-5 rounded-2xl bg-zinc-900 text-zinc-100 print:bg-zinc-100 print:text-black"
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <p className="font-black text-sm sm:text-base text-white print:text-black">
                    {edu.degree}
                  </p>
                  <p className="font-bold text-xs sm:text-sm mt-1 text-indigo-400 print:text-indigo-800">
                    {edu.institution}
                  </p>
                  <p className="text-xs font-mono font-bold mt-1.5 text-zinc-400 print:text-zinc-700">
                    {edu.period} • {edu.statusLabel}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. EXPERIENCIA LABORAL & TRAYECTORIA PROFESIONAL ── DESPUÉS DE LA FORMACIÓN ── */}
          <section className="pb-6 mb-8 print:mb-6">
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-400 print:text-indigo-800 mb-4 flex items-center gap-1.5" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
              <Briefcase className="w-4 h-4" />
              <span>Experiencia Laboral & Trayectoria Profesional</span>
            </h2>

            <div className="space-y-4 sm:space-y-5">
              {WORK_EXPERIENCES.map((exp) => (
                <div 
                  key={exp.id} 
                  className="p-5 sm:p-6 rounded-2xl bg-zinc-900 text-zinc-100 print:bg-zinc-100 print:text-black"
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-white print:text-black">
                        {exp.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-bold text-indigo-400 print:text-indigo-800">
                        {exp.company} • <span className="font-semibold text-zinc-300 print:text-zinc-800">{exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-black font-mono px-3 py-1 rounded-full w-fit shadow-xs bg-zinc-800 text-white print:bg-zinc-200 print:text-black">
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsabilidades */}
                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm list-disc list-inside font-medium text-zinc-200 print:text-black">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3">
                    {exp.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-200 print:bg-zinc-200 print:text-black"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 5. SOFTWARE, HERRAMIENTAS & TECNOLOGÍAS DOMINADAS */}
          <section className="pb-6 mb-8 print:mb-6" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-400 print:text-indigo-800 mb-3 flex items-center gap-1.5">
              <Wrench className="w-4 h-4" />
              <span>Software, Herramientas & Tecnologías Dominadas (+100)</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-zinc-900 print:bg-zinc-100">
                <p className="font-black text-sm mb-1.5 flex items-center gap-1 text-white print:text-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-800" />
                  <span>Diseño & UI/UX</span>
                </p>
                <p className="text-xs font-medium leading-relaxed text-zinc-300 print:text-black">
                  Photoshop, Illustrator, InDesign, Figma, Adobe XD, Acrobat Pro.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900 print:bg-zinc-100">
                <p className="font-black text-sm mb-1.5 flex items-center gap-1 text-white print:text-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-800" />
                  <span>Marketing & Ads</span>
                </p>
                <p className="text-xs font-medium leading-relaxed text-zinc-300 print:text-black">
                  Meta Ads Manager, Google Ads, GA4, TikTok Ads, SEO/SEM, Embudos.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900 print:bg-zinc-100">
                <p className="font-black text-sm mb-1.5 flex items-center gap-1 text-white print:text-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-800" />
                  <span>Software & Web</span>
                </p>
                <p className="text-xs font-medium leading-relaxed text-zinc-300 print:text-black">
                  TypeScript, Next.js, React, Node.js, PostgreSQL, Supabase, Tailwind.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-900 print:bg-zinc-100">
                <p className="font-black text-sm mb-1.5 flex items-center gap-1 text-white print:text-black">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 print:text-indigo-800" />
                  <span>3D, Video & IA</span>
                </p>
                <p className="text-xs font-medium leading-relaxed text-zinc-300 print:text-black">
                  Blender 3D, Cinema 4D, Gemini Pro, ChatGPT, Claude, Midjourney.
                </p>
              </div>
            </div>
          </section>

          {/* 6. REFERENCIAS PROFESIONALES */}
          <section className="pt-2" style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}>
            <h2 className="text-xs font-black uppercase tracking-wider text-indigo-400 print:text-indigo-800 mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4" />
              <span>Referencias Comerciales & Profesionales</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              {REFERENCES.map((ref, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-zinc-900 print:bg-zinc-100"
                  style={{ breakInside: 'avoid', pageBreakInside: 'avoid' }}
                >
                  <p className="font-black text-sm truncate text-white print:text-black">{ref.name}</p>
                  <p className="font-bold text-xs truncate text-indigo-400 print:text-indigo-800">{ref.role}</p>
                  <p className="text-xs truncate font-semibold text-zinc-300 print:text-zinc-800">{ref.company}</p>
                  <p className="font-black font-mono text-xs mt-1.5 text-zinc-200 print:text-black">{ref.phone}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* ── CSS PRINT RULES (Márgenes perfectos de 15mm para que nada toque los bordes) ── */}
      <style jsx global>{`
        @media print {
          @page {
            size: 8.5in 11in portrait;
            margin: 15mm 15mm 15mm 15mm !important;
          }
          
          html, body {
            background-color: #ffffff !important;
            color: #000000 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          main {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            width: 100% !important;
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
