'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/portfolio-data';
import { ArrowUpRight, Globe, ExternalLink } from 'lucide-react';
import { DidusaLogo } from '@/components/logo';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <div
      id={`project-card-${project.id}`}
      className="group relative rounded-3xl bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-850 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <span>Destacado</span>
        </div>
      )}

      {/* Category Pill on Top Right */}
      <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-zinc-950/90 backdrop-blur-md text-zinc-200 text-[10px] font-bold shadow-md">
        {project.categoryLabel}
      </div>

      {/* Visual Canvas / Realistic Mockup Area */}
      <Link 
        href={`/proyectos/${project.id}`}
        className="relative w-full h-64 sm:h-72 overflow-hidden bg-zinc-950 flex items-center justify-center p-4 cursor-pointer block"
      >
        {/* Dark Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-zinc-950 opacity-60 group-hover:opacity-85 group-hover:scale-105 transition-all duration-500" />
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />

        {/* Dynamic Visual Mockup Representation */}
        <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-103">
          
          {/* 1. WEB PROJECTS (Realistic Mini Mac Laptop Mockup with Real Screenshot) */}
          {(project.category === 'web' || project.mockupType === 'browser' || project.websiteUrl || project.id === 'didusa-srl-jamaica' || project.id === 'facturadord-sistema-facturacion-nomina') ? (
            <div className="w-full max-w-[270px] sm:max-w-[290px] flex flex-col items-center select-none shadow-2xl">
              {/* Screen Bezel */}
              <div className="w-full rounded-t-lg overflow-hidden border border-zinc-700/80 bg-zinc-950 flex flex-col">
                {/* Safari Bar */}
                <div className="bg-zinc-950 px-2.5 py-1 flex items-center justify-between border-b border-zinc-800">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/90 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/90 inline-block" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/90 inline-block" />
                  </div>
                  <div className="flex-1 max-w-[130px] bg-zinc-900 rounded px-2 py-0.5 text-[8px] font-mono text-zinc-300 truncate text-center mx-auto flex items-center justify-center gap-1 border border-zinc-800">
                    <Globe className="w-2 h-2 text-zinc-400 shrink-0" />
                    <span className="truncate">{project.websiteUrl ? project.websiteUrl.replace('https://', '').replace(/\/$/, '') : `${project.id.split('-')[0]}.com`}</span>
                  </div>
                </div>
                {/* Screen Canvas */}
                <div className="relative w-full h-32 sm:h-36 bg-zinc-950 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      unoptimized
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="p-3 text-center my-auto flex flex-col items-center justify-center h-full">
                      <p className="text-[10px] font-black text-white uppercase">{project.title}</p>
                      <p className="text-[8px] text-zinc-400 mt-0.5">High Performance Web</p>
                    </div>
                  )}
                </div>
              </div>
              {/* Laptop Base */}
              <div className="w-[102%] -mt-[1px] h-2 rounded-b-md bg-gradient-to-b from-zinc-700 to-zinc-900 border-t border-zinc-600/60 shadow-lg flex items-start justify-center">
                <div className="w-10 h-0.5 rounded-b-xs bg-zinc-900/90" />
              </div>
            </div>
          ) : project.mockupType === 'flyer-grid' || project.category === 'marketing' ? (
            /* 2. MARKETING & SOCIAL MEDIA FLYERS */
            <div className="relative w-44 sm:w-48 aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl p-1.5 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="text-center p-3">
                  <p className="text-xs font-black text-white">{project.title}</p>
                  <p className="text-[9px] text-zinc-400">Social Media Campaign</p>
                </div>
              )}
            </div>
          ) : project.mockupType === 'brochure' || project.category === 'print' ? (
            /* 3. BROCHURE & EDITORIAL */
            <div className="relative w-56 sm:w-60 aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl p-2 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="text-center p-3">
                  <p className="text-xs font-black text-white">{project.title}</p>
                  <p className="text-[9px] text-zinc-400">Brochure 300 DPI</p>
                </div>
              )}
            </div>
          ) : (
            /* 4. BRANDING & GENERAL SHOWCASE */
            <div className="relative w-48 sm:w-52 aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950/80 shadow-2xl p-4 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="text-center p-3">
                  <p className="text-xs font-black text-white">{project.title}</p>
                  <p className="text-[9px] text-zinc-400">{project.categoryLabel}</p>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-30 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-zinc-950 font-black text-xs shadow-xl group-hover:scale-105 transition-transform">
            <span>Abrir Página del Proyecto</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>

      </Link>

      {/* Card Info Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 mb-1.5">
            <span className="font-bold">{project.client}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {project.categoryLabel}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.id === 'didusa-srl-jamaica' && (
              <div className="p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 inline-flex items-center justify-center">
                <DidusaLogo className="h-3.5 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            <Link href={`/proyectos/${project.id}`} className="hover:underline">
              <h3 className="text-lg font-black text-zinc-950 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors line-clamp-1">
                {project.title}
              </h3>
            </Link>
          </div>
          
          <p className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold mt-0.5 line-clamp-1">
            {project.subtitle}
          </p>

          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2.5 line-clamp-2 leading-relaxed font-normal">
            {project.description}
          </p>

          {/* External Live Website Direct Button for Didusa and web projects */}
          {project.websiteUrl && (
            <div className="mt-3">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-4 transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visitar {project.websiteUrl.replace('https://', '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          )}
        </div>

        {/* Tool Tags & Link CTA */}
        <div className="mt-5 pt-3 flex items-center justify-between gap-2 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex flex-wrap gap-1">
            {project.tools.slice(0, 3).map((tool, i) => (
              <span
                key={i}
                className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shadow-xs"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          <Link
            href={`/proyectos/${project.id}`}
            aria-label={`Ver página de ${project.title}`}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shadow-xs"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

    </div>
  );
}


