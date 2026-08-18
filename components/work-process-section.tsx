'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { 
  Search, 
  Target, 
  Lightbulb, 
  Palette, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  GitCommit,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';

interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: React.ElementType;
  color: string;
  glowColor: string;
  badgeBg: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    phase: 'Fase Inicial',
    title: 'Descubrir',
    subtitle: 'Investigación profunda, diagnóstico y análisis estratégico',
    description: 'Comprendo los objetivos comerciales de tu empresa, analizo a fondo tu competencia, el comportamiento de tu audiencia y los cuellos de botella para definir una ruta clara y sin margen de error.',
    deliverables: [
      'Auditoría y diagnóstico de marca / producto',
      'Benchmark competitivo y análisis de mercado',
      'Definición de público objetivo y arquetipos de usuario',
      'Mapeo de requerimientos técnicos y comerciales'
    ],
    tools: ['User Research', 'Google Analytics', 'Auditoría UX', 'Market Analysis'],
    icon: Search,
    color: 'text-indigo-600 dark:text-indigo-400',
    glowColor: 'rgba(99, 102, 241, 0.3)',
    badgeBg: 'bg-indigo-100 dark:bg-indigo-950/60 border-indigo-200 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-300'
  },
  {
    number: '02',
    phase: 'Planificación',
    title: 'Estrategia',
    subtitle: 'Arquitectura de solución, embudos de conversión y KPIs',
    description: 'Diseño la estrategia integral de conversión y crecimiento, definiendo la arquitectura de información, los puntos de contacto publicitarios, los funnels y las métricas clave de retorno de inversión (ROAS).',
    deliverables: [
      'Estructura de embudos y puntos de conversión',
      'Planificación de campañas y estrategia multicanal',
      'Definición de KPIs de rendimiento y objetivos medibles',
      'Cronograma ágil de entregas y sprints'
    ],
    tools: ['Meta Ads Strategy', 'Funnels de Conversión', 'KPI Frameworks', 'Google Ads'],
    icon: Target,
    color: 'text-purple-600 dark:text-purple-400',
    glowColor: 'rgba(168, 85, 247, 0.3)',
    badgeBg: 'bg-purple-100 dark:bg-purple-950/60 border-purple-200 dark:border-purple-700/50 text-purple-700 dark:text-purple-300'
  },
  {
    number: '03',
    phase: 'Ideación',
    title: 'Concepto',
    subtitle: 'Dirección creativa, narrativa de marca y prototipado',
    description: 'Transformo los datos y la estrategia en conceptos creativos memorables: desarrollo moodboards, wireframes, copy publicitario de alto impacto y la narrativa visual que conectará emocionalmente con tu cliente.',
    deliverables: [
      'Dirección de arte y moodboards conceptuales',
      'Wireframes de baja y media fidelidad',
      'Storytelling de marca y redacción persuasiva (Copywriting)',
      'Validación de conceptos y propuesta de valor'
    ],
    tools: ['Figma', 'Miro', 'Storyboarding', 'Copywriting Creativo'],
    icon: Lightbulb,
    color: 'text-cyan-600 dark:text-cyan-400',
    glowColor: 'rgba(34, 211, 238, 0.3)',
    badgeBg: 'bg-cyan-100 dark:bg-cyan-950/60 border-cyan-200 dark:border-cyan-700/50 text-cyan-700 dark:text-cyan-300'
  },
  {
    number: '04',
    phase: 'Creación Visual',
    title: 'Diseño',
    subtitle: 'Identidad gráfica, interfaces UI/UX y modelado 3D',
    description: 'Doy vida a la interfaz y piezas gráficas con acabados internacionales de máxima precisión: sistemas de diseño escalables, maquetación publicitaria, modelado y renderizado 3D e interactividad fluida.',
    deliverables: [
      'Prototipos interactivos de alta fidelidad UI/UX',
      'Sistemas de diseño (Design Systems) y tokens',
      'Identidad visual, branding y piezas publicitarias',
      'Renders espaciales y elementos tridimensionales 3D'
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Blender / Cinema 4D'],
    icon: Palette,
    color: 'text-rose-600 dark:text-rose-400',
    glowColor: 'rgba(251, 113, 133, 0.3)',
    badgeBg: 'bg-rose-100 dark:bg-rose-950/60 border-rose-200 dark:border-rose-700/50 text-rose-700 dark:text-rose-300'
  },
  {
    number: '05',
    phase: 'Ingeniería',
    title: 'Desarrollo',
    subtitle: 'Software full-stack, automatizaciones y flujos con IA',
    description: 'Construyo la plataforma con código limpio, seguro y ultra-rápido: desarrollo frontend reactivo, backend escalable, bases de datos optimizadas, integraciones de API y modelos de IA generativa.',
    deliverables: [
      'Desarrollo Frontend interactivo (React / Next.js / TypeScript)',
      'Backend robusto, APIs REST y bases de datos seguras',
      'Automatizaciones de flujos empresariales y webhooks',
      'Integración de modelos IA de última generación'
    ],
    tools: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI / Gemini'],
    icon: Code2,
    color: 'text-emerald-600 dark:text-emerald-400',
    glowColor: 'rgba(52, 211, 153, 0.3)',
    badgeBg: 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-300'
  },
  {
    number: '06',
    phase: 'Despliegue & Escala',
    title: 'Lanzamiento',
    subtitle: 'Control de calidad, puesta en marcha y optimización continua',
    description: 'Despliego el proyecto en producción con monitoreo en tiempo real, activo las campañas publicitarias, analizo métricas de comportamiento y optimizo continuamente para maximizar los resultados comerciales.',
    deliverables: [
      'Testing exhaustivo, QA y optimización de rendimiento (Lighthouse 95+)',
      'Despliegue en servidores en la nube con SSL y CI/CD',
      'Lanzamiento oficial de campañas y seguimiento de conversiones',
      'Optimización iterativa y soporte técnico estratégico'
    ],
    tools: ['Vercel / Cloud Run', 'CI/CD Pipelines', 'QA Testing', 'Conversion Optimization'],
    icon: Rocket,
    color: 'text-amber-600 dark:text-amber-400',
    glowColor: 'rgba(251, 191, 36, 0.3)',
    badgeBg: 'bg-amber-100 dark:bg-amber-950/60 border-amber-200 dark:border-amber-700/50 text-amber-800 dark:text-amber-300'
  }
];

function StepCard({ step, index }: { step: ProcessStep; index: number }) {
  const IconComponent = step.icon;
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center w-full my-8 sm:my-12">
      
      {/* Central Node Indicator */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-md items-center justify-center z-20 group">
        <div className={`w-4 h-4 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center font-mono text-[10px] font-black group-hover:scale-110 transition-transform ${step.color}`}>
          <div className="w-2 h-2 rounded-full bg-current" />
        </div>
      </div>

      {/* Card Wrapper (Alternates left and right on desktop) */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto md:text-left'}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-6 sm:p-8 md:p-9 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/80 shadow-lg dark:shadow-2xl overflow-hidden group hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300 text-left"
        >
          {/* Subtle Ambient Radial Glow */}
          <div 
            style={{ backgroundColor: step.glowColor }} 
            className="absolute -right-24 -top-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity" 
          />

          {/* Header: Phase badge + Step Number */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-3">
              <div className={`w-11 h-11 rounded-2xl ${step.badgeBg} flex items-center justify-center shadow-sm border`}>
                <IconComponent className={`w-5 h-5 ${step.color}`} />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                  {step.phase}
                </span>
                <h4 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                  {step.number} — {step.title}
                </h4>
              </div>
            </div>

            <span className="text-3xl font-black font-mono text-zinc-200 dark:text-zinc-800 group-hover:text-zinc-300 dark:group-hover:text-zinc-700 transition-colors select-none">
              {step.number}
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm font-semibold text-zinc-800 dark:text-zinc-300 mb-3">
            {step.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal mb-5">
            {step.description}
          </p>

          {/* Deliverables Checklist */}
          <div className="space-y-2 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 mb-5">
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-bold block">
              Entregables Clave:
            </span>
            <ul className="space-y-1.5">
              {step.deliverables.map((item, i) => (
                <li key={i} className="text-xs text-zinc-700 dark:text-zinc-300 flex items-start gap-2">
                  <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${step.color}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Frameworks Pills */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-100 dark:border-zinc-800/60">
            {step.tools.map((tool, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-300 border border-zinc-200 dark:border-transparent shadow-2xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}

export function WorkProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  return (
    <BlurFadeSection id="proceso" className="py-24 sm:py-32 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white relative w-full overflow-hidden transition-colors duration-300">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-purple-500/10 dark:bg-purple-900/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-900/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-20">
        
        {/* Section Header */}
        <BlurFadeDiv className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <GitCommit className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Metodología & Ejecución</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Mi Proceso de Trabajo
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 mt-4 leading-relaxed max-w-2xl font-normal">
            Un flujo estructurado en 6 etapas iterativas que combina análisis de negocio, creatividad visual, desarrollo full-stack y optimización de conversión.
          </p>
        </BlurFadeDiv>

        {/* Timeline Roadmap */}
        <div ref={containerRef} className="relative w-full max-w-6xl mx-auto">
          
          {/* Vertical Center Line Guide */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 z-10">
            {/* Animated filling line */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-indigo-500 via-purple-500 to-amber-500 rounded-full"
            />
          </div>

          {/* Process Step Cards */}
          <div className="space-y-4 md:space-y-0">
            {PROCESS_STEPS.map((step, idx) => (
              <StepCard key={step.number} step={step} index={idx} />
            ))}
          </div>

        </div>

      </div>
    </BlurFadeSection>
  );
}

export default WorkProcessSection;
