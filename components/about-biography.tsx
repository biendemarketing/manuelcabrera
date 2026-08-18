'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { PERSONAL_INFO, PERSONAL_BRANDS } from '@/data/portfolio-data';
import { 
  Heart, 
  CheckCircle2, 
  Compass, 
  BookOpen, 
  Fish, 
  Gamepad2, 
  Utensils, 
  Activity, 
  Mountain, 
  Award, 
  Briefcase, 
  Mail, 
  MapPin, 
  FileDown, 
  Send, 
  ArrowUpRight, 
  Layers,
  TrendingUp,
  Palette,
  Code2,
  Cpu,
  Camera,
  Sparkles
} from 'lucide-react';
import { WhatsAppOfficialIcon } from '@/components/logo';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';
import { MagicBento } from '@/components/MagicBento';

interface ServiceItem {
  title: string;
  icon: React.ElementType;
  desc: string;
}

function InteractiveServiceCard({ service }: { service: ServiceItem }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group p-6 sm:p-7 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-0 shadow-md dark:shadow-xl flex flex-col justify-between hover:shadow-2xl transition-all duration-300 cursor-default"
    >
      {/* 1. Offset Floating Stroke on Hover */}
      <div 
        className="absolute -inset-2 sm:-inset-2.5 rounded-[32px] p-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none -z-10"
        style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.6) 0%, rgba(168,85,247,0.3) 35%, rgba(0,0,0,0.4) 100%)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* 2. Interactive Cursor Spotlight */}
      {isHovered && (
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none transition-opacity duration-200 overflow-hidden"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99,102,241,0.08), transparent 70%)`,
          }}
        />
      )}

      {/* Card Content */}
      <div className="space-y-3 relative z-10">
        <div className="w-11 h-11 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-950 dark:text-white group-hover:scale-110 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-all duration-300 shadow-xs">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white tracking-tight">
          {service.title}
        </h3>
      </div>
      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed relative z-10 font-normal">
        {service.desc}
      </p>
    </div>
  );
}

function InteractiveSpotlightPortrait({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    handleMouseMove(e);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos(null);
  };

  const spotlightRadius = 170;

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm sm:max-w-md lg:max-w-none h-[440px] sm:h-[500px] lg:h-[540px] rounded-3xl sm:rounded-[36px] overflow-hidden bg-zinc-950 shadow-2xl border-0 outline-none ring-0 cursor-crosshair group select-none transition-transform duration-500 hover:scale-[1.01]"
    >
      {/* 1. Base Layer: Sleek Artistic High-Contrast Black & White */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover object-[100%_top] scale-[1.38] origin-[88%_28%] grayscale contrast-[1.25] brightness-[0.88] transition-transform duration-700 ease-out border-0 outline-none pointer-events-none"
      />

      {/* 2. Top Layer: Vivid Color Revealed by Smooth Natural Spotlight Mask */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          WebkitMaskImage: isHovered && mousePos
            ? `radial-gradient(circle ${spotlightRadius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 35%, transparent 100%)`
            : 'none',
          maskImage: isHovered && mousePos
            ? `radial-gradient(circle ${spotlightRadius}px at ${mousePos.x}px ${mousePos.y}px, black 0%, black 35%, transparent 100%)`
            : 'none',
          opacity: isHovered ? 1 : 0,
          transition: isHovered ? 'opacity 0.2s ease' : 'opacity 0.4s ease'
        }}
        className="absolute inset-0 w-full h-full object-cover object-[100%_top] scale-[1.38] origin-[88%_28%] transition-transform duration-700 ease-out border-0 outline-none pointer-events-none"
      />

      {/* 3. Ambient Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}

interface AboutBiographyProps {
  onOpenCV?: () => void;
}

export function AboutBiography({ onOpenCV }: AboutBiographyProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const coreServices: ServiceItem[] = [
    { 
      title: "Marketing Digital", 
      icon: TrendingUp, 
      desc: "Estrategias de conversión, performance, pauta digital y posicionamiento multicanal." 
    },
    { 
      title: "Diseño Gráfico", 
      icon: Palette, 
      desc: "Identidad visual de alto impacto, branding corporativo y dirección de arte." 
    },
    { 
      title: "Desarrollo de Software y Web", 
      icon: Code2, 
      desc: "Plataformas web interactivas, interfaces modernas y soluciones digitales a medida." 
    },
    { 
      title: "Automatizaciones", 
      icon: Cpu, 
      desc: "Flujos de trabajo automatizados, integraciones API y optimización de procesos." 
    },
    { 
      title: "Fotografía y Video", 
      icon: Camera, 
      desc: "Producción y dirección audiovisual publicitaria con acabado cinematográfico." 
    },
    { 
      title: "Inteligencia Artificial", 
      icon: Sparkles, 
      desc: "Integración de IA generativa aplicada a diseño, copywriting y desarrollo ágil." 
    },
  ];

  const aptitudes = [
    { title: "Estrategia de Marketing & ROAS", desc: "Planificación de campañas con metas cuantitativas claras orientadas a la rentabilidad comercial." },
    { title: "Comunicación Asertiva & Dirección", desc: "Elocuencia para defender conceptos creativos y alinear visiones con comités y clientes." },
    { title: "Liderazgo & Capacitación", desc: "Experiencia coordinando equipos de diseño y estandarizando guías de estilo para agencias." },
    { title: "Toma de Decisiones Basada en Datos", desc: "Análisis de métricas, benchmarks y comportamiento del consumidor para resolver retos gráficos." },
    { title: "Adaptabilidad & Entregas Ágiles", desc: "Respuesta efectiva en entornos dinámicos, cambios de último momento y lanzamientos simultáneos." },
    { title: "Gestión Integral del Tiempo", desc: "Priorización estricta de proyectos manteniendo acabados de calidad internacional." }
  ];

  const hobbiesWithIcons = [
    { name: "Leer libros & Aprender", icon: BookOpen, color: "text-amber-500", glow: "group-hover:drop-shadow-[0_0_18px_rgba(251,191,36,0.9)]" },
    { name: "Pesca deportiva", icon: Fish, color: "text-cyan-500", glow: "group-hover:drop-shadow-[0_0_18px_rgba(34,211,238,0.9)]" },
    { name: "Natación", icon: Compass, color: "text-blue-500", glow: "group-hover:drop-shadow-[0_0_18px_rgba(96,165,250,0.9)]" },
    { name: "Videojuegos & 3D", icon: Gamepad2, color: "text-purple-500", glow: "group-hover:drop-shadow-[0_0_18px_rgba(192,132,252,0.9)]" },
    { name: "Cocina creativa", icon: Utensils, color: "text-rose-500", glow: "group-hover:drop-shadow-[0_0_18px_rgba(251,113,133,0.9)]" },
    { name: "Ejercicio físico", icon: Activity, color: "text-emerald-500", glow: "group-hover:drop-shadow-[0_0_18px_rgba(52,211,153,0.9)]" },
    { name: "Senderismo al aire libre", icon: Mountain, color: "text-lime-600 dark:text-lime-400", glow: "group-hover:drop-shadow-[0_0_18px_rgba(163,230,53,0.9)]" },
  ];

  return (
    <BlurFadeSection id="sobre-mi" className="pt-24 sm:pt-36 pb-20 sm:pb-24 bg-zinc-50 dark:bg-zinc-950 relative w-full border-0 transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        
        {/* 1. Section Header & Bio with Clean Spotlight B&W to Color Portrait */}
        <BlurFadeDiv className="w-full mb-14 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Spotlight Portrait */}
            <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-start">
              <InteractiveSpotlightPortrait 
                src={PERSONAL_INFO.heroBgPhoto}
                alt={PERSONAL_INFO.name}
              />
            </div>

            {/* Right Column: Bio Description */}
            <div className="lg:col-span-7 xl:col-span-8 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-1 shadow-sm">
                <span>Perfil Profesional</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-950 dark:text-white tracking-tight">
                Sobre Mí
              </h2>

              <div className="space-y-5 text-sm sm:text-base lg:text-lg text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                <p>
                  Tengo <strong className="text-zinc-950 dark:text-white font-bold">29 años de edad</strong> y acumulo más de <strong className="text-zinc-950 dark:text-white font-bold">11 años de experiencia profesional continua</strong> trabajando en reconocidas agencias publicitarias, talleres de preprensa e imprentas de gran formato, así como consultor estratégico y freelancer independiente en proyectos de alto nivel para marcas de <strong className="text-zinc-950 dark:text-white font-bold">República Dominicana, Puerto Rico, Estados Unidos y Europa</strong>.
                </p>

                <p>
                  Mi base fundamental nace en la pasión por el <strong className="text-zinc-950 dark:text-white font-bold">Diseño en todas sus expresiones</strong> —desde la identidad visual corporativa, branding y dirección de arte publicitaria, hasta el modelado 3D, renderizado espacial y diseño de interfaces UI/UX de vanguardia. Esta sensibilidad creativa la integro directamente con el <strong className="text-zinc-950 dark:text-white font-bold">Marketing Digital y la estrategia comercial</strong>, estructurando campañas de conversión, análisis de performance y optimización de pauta orientadas a generar impacto y retorno medible.
                </p>

                <p>
                  Para materializar soluciones completas y escalables, complemento mi perfil con el <strong className="text-zinc-950 dark:text-white font-bold">Desarrollo de Software y plataformas Web modernas</strong>, la producción fotográfica y audiovisual, la automatización de procesos empresariales y, en la cúspide de mi flujo de trabajo, la <strong className="text-zinc-950 dark:text-white font-bold">Inteligencia Artificial generativa</strong>, adoptando modelos de última generación para acelerar tiempos de entrega, prototipado e innovación técnica continua.
                </p>
              </div>
            </div>

          </div>
        </BlurFadeDiv>

        {/* 2. Intereses & Hobbies Personales */}
        <BlurFadeDiv delay={0.12} className="mb-14 space-y-4">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-4 h-4 text-rose-500" />
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 dark:text-white">
              Intereses & Hobbies Personales
            </h3>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 pt-3 items-start justify-items-center">
            {hobbiesWithIcons.map((hobby, i) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={i}
                  className="group w-full flex flex-col items-center justify-center text-center gap-2 cursor-default transition-transform"
                >
                  <div className="flex items-center justify-center">
                    <Icon 
                      className={`w-8 h-8 sm:w-9 sm:h-9 ${hobby.color} ${hobby.glow} transition-all duration-300 group-hover:scale-115`} 
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors max-w-[130px] leading-tight text-center">
                    {hobby.name}
                  </span>
                </div>
              );
            })}
          </div>
        </BlurFadeDiv>

        {/* 3. Aptitudes Profesionales (Magic Bento) */}
        <BlurFadeDiv delay={0.15} className="mb-14 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 dark:text-white">
              Aptitudes Profesionales
            </h3>
          </div>

          <MagicBento 
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="147, 51, 234"
          />
        </BlurFadeDiv>

        {/* 4. Marcas Personales & Proyectos Propios */}
        <BlurFadeDiv delay={0.18} className="mb-14 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
              <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 dark:text-white">
                Marcas Personales & Proyectos Propios
              </h3>
            </div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
              Iniciativas fundadas y dirigidas por Manuel Cabrera
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {PERSONAL_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="group flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-900 border border-zinc-200/90 dark:border-0 transition-all shadow-sm dark:shadow-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="text-sm font-black text-zinc-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                    {brand.name}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-zinc-700 dark:text-zinc-300 px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-transparent shrink-0">
                    {brand.category}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-normal line-clamp-2 leading-relaxed">
                  {brand.tagline}
                </p>
              </div>
            ))}
          </div>
        </BlurFadeDiv>

        {/* 5. Especialidades & Servicios Principales */}
        <BlurFadeDiv delay={0.2} className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-zinc-950 dark:text-white">
              Especialidades & Servicios Principales
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreServices.map((service, index) => (
              <InteractiveServiceCard key={index} service={service} />
            ))}
          </div>
        </BlurFadeDiv>

      </div>
    </BlurFadeSection>
  );
}
