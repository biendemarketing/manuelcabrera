'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  Star, 
  Rocket, 
  Users, 
  ArrowRight, 
  Linkedin, 
  Mail,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { ManuelCabreraLogo } from './logo';
import DotField from './DotField';

interface HeroSectionProps {
  onOpenCV?: () => void;
}

export function HeroSection({ onOpenCV: _onOpenCV }: HeroSectionProps) {
  // Ultra-fast optimized Cloudinary URL with auto-format (AVIF/WebP) and compression
  const rawBg = PERSONAL_INFO.heroBgPhoto || '';
  const effectiveBgPhoto = rawBg.includes('/image/upload/') && !rawBg.includes('/f_auto')
    ? rawBg.replace('/image/upload/', '/image/upload/f_auto,q_auto,w_1200/')
    : rawBg;

  return (
    <section 
      id="inicio"
      className="relative min-h-[100dvh] w-full flex flex-col justify-center bg-zinc-950 text-white transition-colors duration-300 border-none outline-none pt-20 pb-12 sm:py-0 [clip-path:inset(0)]"
    >
      {/* HERO BACKGROUND AMBIENT & FIXED PHOTO */}
      <div className="fixed inset-0 top-0 left-0 w-full h-full z-0 overflow-hidden border-none outline-none pointer-events-none">
        {/* FULL HERO BACKGROUND PHOTO */}
        {effectiveBgPhoto && (
          <div className="absolute inset-0 top-0 w-full h-full overflow-hidden pointer-events-none border-none outline-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={effectiveBgPhoto}
              alt={PERSONAL_INFO.name}
              fetchPriority="high"
              decoding="async"
              loading="eager"
              className="w-full h-full object-cover object-[72%_top] sm:object-[80%_top] md:object-[86%_top] lg:object-[90%_top] opacity-95 sm:opacity-100 border-none outline-none ring-0 shadow-none will-change-transform"
            />
            {/* Dark Studio Directional Readability Mask */}
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-transparent sm:from-zinc-950/85 sm:via-zinc-950/40 sm:to-transparent border-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/30 border-none" />
          </div>
        )}

        {/* GIANT SUBTLE WATERMARK LOGO BACKGROUND LAYER */}
        <div className="absolute right-[5%] sm:right-[15%] top-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.04] pointer-events-none select-none">
          <ManuelCabreraLogo className="w-[450px] sm:w-[650px] lg:w-[850px] h-auto text-white" />
        </div>

        {/* INTERACTIVE DOTFIELD EFFECT OVERLAY (Lightweight & zero CPU on mobile) */}
        <div className="absolute inset-0 w-full h-full pointer-events-auto opacity-75 dark:opacity-85 mix-blend-screen">
          <DotField
            dotRadius={1.5}
            dotSpacing={22}
            bulgeStrength={67}
            glowRadius={160}
            sparkle={false}
            waveAmplitude={0}
            cursorRadius={500}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#fafafa"
            gradientTo="#B497CF"
            glowColor="#120F17"
            className="w-full h-full"
          />
        </div>

        {/* Subtle grid texture layer */}
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none border-none outline-none" />
      </div>

      {/* HERO MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-28 my-auto py-8 sm:py-12 border-none pointer-events-none">
        <div className="relative z-10 max-w-xl sm:max-w-2xl lg:max-w-3xl flex flex-col items-start space-y-5 sm:space-y-6 text-left border-none pointer-events-auto select-none">
          
          {/* Top Label: DIRECTOR CREATIVO with Purple Gradient Accent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-indigo-400">
              Director Creativo
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-1.5" />
          </motion.div>

          {/* Main Headline: Manuel (White) + Cabrera (Purple/Indigo Gradient) */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.25rem] xl:text-[8.5rem] font-black tracking-tight leading-[0.92] flex flex-col drop-shadow-md">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white inline-block"
            >
              Manuel
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 inline-block"
            >
              Cabrera
            </motion.span>
          </h1>

          {/* Value Proposition Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-zinc-300 font-normal leading-relaxed max-w-lg"
          >
            Estratega. Diseñador. Desarrollador. Creador de experiencias digitales que generan impacto y resultados.
          </motion.p>

          {/* Call-to-Action Glowing Purple Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2"
          >
            <Link
              href="/#proyectos"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600/90 to-purple-600/90 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_30px_-5px_rgba(139,92,246,0.6)] border border-indigo-400/30 active:scale-95 transition-all cursor-pointer"
            >
              <span>Ver Mi Trabajo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Quick Metrics / Stats Row - 4 Comprehensive Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pt-6 sm:pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-zinc-800/60 w-full max-w-2xl"
          >
            {/* Stat 1: Experiencia */}
            <div className="flex items-start gap-2.5">
              <Star className="w-5 h-5 text-indigo-400 shrink-0 stroke-[1.5] mt-0.5" />
              <div>
                <span className="text-base sm:text-lg lg:text-xl font-black text-white block leading-tight">
                  11+
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-300 tracking-wider block">
                  Años de Experiencia
                </span>
                <span className="text-[9px] text-zinc-500 hidden sm:block">
                  Trayectoria continua
                </span>
              </div>
            </div>

            {/* Stat 2: Herramientas */}
            <div className="flex items-start gap-2.5">
              <Sparkles className="w-5 h-5 text-purple-400 shrink-0 stroke-[1.5] mt-0.5" />
              <div>
                <span className="text-base sm:text-lg lg:text-xl font-black text-white block leading-tight">
                  +100
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-300 tracking-wider block">
                  Herramientas
                </span>
                <span className="text-[9px] text-zinc-500 hidden sm:block">
                  Design, Dev, 3D & AI
                </span>
              </div>
            </div>

            {/* Stat 3: Proyectos */}
            <div className="flex items-start gap-2.5">
              <Rocket className="w-5 h-5 text-indigo-400 shrink-0 stroke-[1.5] mt-0.5" />
              <div>
                <span className="text-base sm:text-lg lg:text-xl font-black text-white block leading-tight">
                  200+
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-300 tracking-wider block">
                  Proyectos Realizados
                </span>
                <span className="text-[9px] text-zinc-500 hidden sm:block">
                  Campañas & Branding
                </span>
              </div>
            </div>

            {/* Stat 4: Satisfacción */}
            <div className="flex items-start gap-2.5">
              <Users className="w-5 h-5 text-purple-400 shrink-0 stroke-[1.5] mt-0.5" />
              <div>
                <span className="text-base sm:text-lg lg:text-xl font-black text-white block leading-tight">
                  100%
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-300 tracking-wider block">
                  Satisfacción
                </span>
                <span className="text-[9px] text-zinc-500 hidden sm:block">
                  Compromiso & Calidad
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FLOATING ACTION PILL: Direct Links to Social Media & Contact */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3 p-2 rounded-full bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-2xl"
      >
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Directo"
          className="p-2.5 rounded-full hover:bg-emerald-500/20 text-zinc-400 hover:text-emerald-400 transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
        <Link
          href="/#contacto"
          title="Enviar Correo"
          className="p-2.5 rounded-full hover:bg-indigo-500/20 text-zinc-400 hover:text-indigo-400 transition-colors"
        >
          <Mail className="w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
}
