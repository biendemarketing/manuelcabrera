'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { 
  SOFTWARE_TOOLS, 
  SOFTWARE_CATEGORY_GROUPS 
} from '@/data/portfolio-data';
import { 
  Cpu, 
  Globe, 
  Code, 
  CheckSquare, 
  Megaphone, 
  Palette, 
  Box, 
  Video, 
  Layers 
} from 'lucide-react';
import { BlurFadeSection, BlurFadeDiv } from '@/components/blur-fade-section';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  'design': Palette,
  'marketing': Megaphone,
  'dev-cloud': Globe,
  'ai': Cpu,
  'video-motion': Video,
  '3d-modeling': Box,
  'productivity': CheckSquare,
  'ides-tools': Code,
};

export function SoftwareShowcase() {
  return (
    <BlurFadeSection id="software" className="py-24 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white relative w-full overflow-hidden transition-colors duration-300">
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        
        {/* Section Header */}
        <BlurFadeDiv className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <Layers className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Suite Técnica & Creativa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            Software & Herramientas
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-zinc-600 dark:text-zinc-400 mt-3.5 leading-relaxed max-w-3xl font-normal">
            Dominio profesional y exhaustivo organizado por áreas de especialización: Diseño Gráfico y UI/UX, Marketing Digital y Publicidad, Desarrollo de Software, Inteligencia Artificial, Edición de Video, Modelado 3D, Google Workspace, Microsoft Office e IDEs.
          </p>
        </BlurFadeDiv>

        {/* Categorized Sections */}
        <div className="space-y-12 sm:space-y-16">
          {SOFTWARE_CATEGORY_GROUPS.map((group, groupIdx) => {
            const IconComponent = CATEGORY_ICONS[group.id] || Layers;
            const categoryTools = SOFTWARE_TOOLS.filter((tool) => tool.category === group.id);

            if (categoryTools.length === 0) return null;

            return (
              <BlurFadeDiv 
                key={group.id} 
                delay={groupIdx * 0.04}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900/30 border border-zinc-200/90 dark:border-0 shadow-md dark:shadow-lg relative overflow-hidden transition-colors duration-300"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/60 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-9 h-9 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                      <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white tracking-tight">
                        {group.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-0.5 max-w-3xl font-medium">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="shrink-0 self-start sm:self-center">
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800/80 shadow-xs">
                      {categoryTools.length} {categoryTools.length === 1 ? 'herramienta' : 'herramientas'}
                    </span>
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5">
                  {categoryTools.map((tool, idx) => (
                    <div
                      key={tool.name + idx}
                      className="group p-2.5 sm:p-3 rounded-xl bg-transparent border-0 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-all duration-200 flex items-center gap-3.5 cursor-default"
                    >
                      {/* Clean Logo / Icon */}
                      <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-zinc-900 dark:text-white shrink-0 group-hover:scale-110 transition-transform">
                        <Icon 
                          icon={tool.icon} 
                          className="w-full h-full object-contain" 
                        />
                      </div>

                      {/* Clean Name & Category */}
                      <div className="min-w-0 flex-1">
                        <h4 className="font-extrabold text-xs sm:text-sm text-zinc-900 dark:text-white leading-tight truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 truncate">
                          {tool.categoryName}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </BlurFadeDiv>
            );
          })}
        </div>

        {/* Global AI Integration Banner */}
        <BlurFadeDiv delay={0.2} className="mt-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-zinc-950 text-zinc-900 dark:text-white shadow-xl dark:shadow-2xl relative overflow-hidden border border-zinc-200 dark:border-0 transition-colors duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-100 text-xs font-bold">
                <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>Flujo de Trabajo Impulsado por IA</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Gemini, Claude, ChatGPT, Codex & Cursor en Producción
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl">
                Acelero los tiempos de desarrollo, creación de contenido publicitario y arquitectura de software integrando modelos de última generación con herramientas como Supabase, Next.js, Cloudflare, Linear y las suites de Google, Microsoft y Adobe.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap items-center justify-start lg:justify-end gap-3">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-100 shadow-sm">
                <Icon icon="logos:google-gemini" className="w-4 h-4" />
                <span>Google Gemini</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-800 dark:text-zinc-100 shadow-sm">
                <Icon icon="logos:claude-icon" className="w-4 h-4" />
                <span>Claude 3.7</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-800 dark:text-white shadow-sm">
                <Icon icon="simple-icons:openai" className="w-4 h-4 text-zinc-950 dark:text-white" />
                <span>GPT-4o & Codex</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-bold text-zinc-800 dark:text-white shadow-sm">
                <Icon icon="simple-icons:nextdotjs" className="w-4 h-4 text-zinc-950 dark:text-white" />
                <span>Next.js Full-Stack</span>
              </div>
            </div>
          </div>
        </BlurFadeDiv>

      </div>
    </BlurFadeSection>
  );
}

export default SoftwareShowcase;
