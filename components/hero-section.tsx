'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Star, 
  Rocket, 
  Users, 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Mail,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { ManuelCabreraLogo } from './logo';
import DotField from './DotField';
import { useIntro } from './intro-context';

interface HeroSectionProps {
  onOpenCV?: () => void;
}

export function HeroSection({ onOpenCV: _onOpenCV }: HeroSectionProps) {
  const effectiveBgPhoto = PERSONAL_INFO.heroBgPhoto;
  const { isIntroComplete } = useIntro();

  return (
    <section 
      id="inicio"
      className="relative min-h-[100dvh] w-full flex flex-col justify-center bg-zinc-950 text-white transition-colors duration-300 border-none outline-none pt-20 pb-12 sm:py-0 [clip-path:inset(0)]"
    >
      {/* HERO BACKGROUND AMBIENT & FIXED PHOTO */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ 
          opacity: isIntroComplete ? 1 : 0, 
          scale: isIntroComplete ? 1 : 1.04 
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 top-0 left-0 w-full h-full z-0 overflow-hidden border-none outline-none pointer-events-none"
      >
        {/* FULL HERO BACKGROUND PHOTO */}
        {effectiveBgPhoto && (
          <div className="absolute inset-0 top-0 w-full h-full overflow-hidden pointer-events-none border-none outline-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              src={effectiveBgPhoto}
              alt={PERSONAL_INFO.name}
              initial={{ scale: 1.15, filter: "blur(12px)" }}
              animate={{ 
                scale: isIntroComplete ? [1.0, 1.08, 1.0] : 1.15,
                filter: isIntroComplete ? "blur(0px)" : "blur(12px)"
              }}
              transition={{ 
                scale: {
                  duration: 18,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                },
                filter: {
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1]
                }
              }}
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

        {/* INTERACTIVE DOTFIELD EFFECT OVERLAY */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isIntroComplete ? 1 : 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full pointer-events-auto opacity-75 dark:opacity-85 mix-blend-screen"
        >
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
        </motion.div>

        {/* Subtle grid texture layer */}
        <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none border-none outline-none" />
      </motion.div>

      {/* HERO MAIN CONTENT CONTAINER */}
      <div className="relative z-10 w-full px-5 sm:px-10 md:px-14 lg:px-20 xl:px-24 2xl:px-28 my-auto py-8 sm:py-12 border-none pointer-events-none">
        <div className="relative z-10 max-w-xl sm:max-w-2xl lg:max-w-3xl flex flex-col items-start space-y-5 sm:space-y-6 text-left border-none pointer-events-auto select-none">
          
          {/* Top Label: DIRECTOR CREATIVO with Purple Gradient Accent */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0, 
              y: isIntroComplete ? 0 : 20, 
              filter: isIntroComplete ? "blur(0px)" : "blur(6px)" 
            }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
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
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{ 
                opacity: isIntroComplete ? 1 : 0, 
                y: isIntroComplete ? 0 : 35, 
                filter: isIntroComplete ? "blur(0px)" : "blur(8px)" 
              }}
              transition={{ duration: 0.95, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-white inline-block"
            >
              Manuel
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
              animate={{ 
                opacity: isIntroComplete ? 1 : 0, 
                y: isIntroComplete ? 0 : 35, 
                filter: isIntroComplete ? "blur(0px)" : "blur(8px)" 
              }}
              transition={{ duration: 0.95, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300 inline-block"
            >
              Cabrera
            </motion.span>
          </h1>

          {/* Value Proposition Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0, 
              y: isIntroComplete ? 0 : 20, 
              filter: isIntroComplete ? "blur(0px)" : "blur(6px)" 
            }}
            transition={{ duration: 0.85, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm sm:text-base lg:text-lg text-zinc-300 font-normal leading-relaxed max-w-lg"
          >
            Estratega. Diseñador. Desarrollador. Creador de experiencias digitales que generan impacto y resultados.
          </motion.p>

          {/* Call-to-Action Glowing Purple Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0, 
              y: isIntroComplete ? 0 : 20 
            }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0, 
              y: isIntroComplete ? 0 : 20 
            }}
            transition={{ duration: 0.85, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
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
                  Marketing, Web e IA
                </span>
              </div>
            </div>

            {/* Stat 3: Proyectos */}
            <div className="flex items-start gap-2.5">
              <Rocket className="w-5 h-5 text-cyan-400 shrink-0 stroke-[1.5] mt-0.5" />
              <div>
                <span className="text-base sm:text-lg lg:text-xl font-black text-white block leading-tight">
                  200+
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-300 tracking-wider block">
                  Proyectos Realizados
                </span>
                <span className="text-[9px] text-zinc-500 hidden sm:block">
                  Branding, Web & Video
                </span>
              </div>
            </div>

            {/* Stat 4: Satisfacción */}
            <div className="flex items-start gap-2.5">
              <Users className="w-5 h-5 text-emerald-400 shrink-0 stroke-[1.5] mt-0.5" />
              <div>
                <span className="text-base sm:text-lg lg:text-xl font-black text-white block leading-tight">
                  100%
                </span>
                <span className="text-[10px] uppercase font-bold text-zinc-300 tracking-wider block">
                  Satisfacción
                </span>
                <span className="text-[9px] text-zinc-500 hidden sm:block">
                  Calidad y puntualidad
                </span>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isIntroComplete ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="pt-4 flex items-center gap-3"
          >
            <div className="w-5 h-8 rounded-full border border-zinc-600 flex items-start justify-center p-1">
              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-indigo-400" 
              />
            </div>
            <div className="flex flex-col text-[9px] uppercase tracking-widest font-bold text-zinc-400 leading-tight">
              <span>Scroll</span>
              <span>Para Explorar</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* FLOATING VERTICAL SOCIAL BAR (FAR RIGHT) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isIntroComplete ? 1 : 0, x: isIntroComplete ? 0 : 20 }}
        transition={{ duration: 0.9, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex fixed right-6 sm:right-8 bottom-12 z-30 flex-col items-center gap-4 pointer-events-auto"
      >
        <div className="w-px h-12 bg-gradient-to-t from-zinc-700 to-transparent" />
        
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          title="Instagram"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>

        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          title="Email"
          aria-label="Email"
        >
          <Mail className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
