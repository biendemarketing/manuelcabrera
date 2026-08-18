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
      className="group relative rounded-3xl bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-850 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-zinc-200/80 dark:border-zinc-800"
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-lg border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Destacado</span>
        </div>
      )}

      {/* Category Pill on Top Right */}
      <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md text-zinc-200 text-[10px] font-bold shadow-md border border-white/10">
        {project.categoryLabel}
      </div>

      {/* Visual Canvas / Realistic Mockup Area (Clean Background without dark overlay) */}
      <Link 
        href={`/proyectos/${project.id}`}
        className="relative w-full h-60 sm:h-64 overflow-hidden bg-zinc-900/60 dark:bg-zinc-950/90 flex items-center justify-center p-4 cursor-pointer block border-b border-zinc-100 dark:border-zinc-800/80"
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />

        {/* Dynamic Visual Mockup Representation */}
        <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-103">
          
          {/* 1. WEB PROJECTS (Realistic Mini Mac Laptop Mockup with Real Screenshot) */}
          {(project.category === 'web' || project.mockupType === 'browser' || project.websiteUrl || project.id === 'didusa-srl-jamaica' || project.id === 'facturadord-sistema-facturacion-nomina') ? (
            <div className="w-full max-w-[260px] sm:max-w-[280px] flex flex-col items-center select-none shadow-2xl">
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
                <div className="relative w-full h-32 sm:h-34 bg-zinc-950 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 270px, 300px"
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
            <div className="relative w-40 sm:w-44 aspect-square rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl p-1 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 180px, 200px"
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
            <div className="relative w-52 sm:w-56 aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl p-1.5 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 240px, 260px"
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
            <div className="relative w-44 sm:w-48 aspect-square rounded-2xl overflow-hidden border border-zinc-700/80 bg-zinc-950 shadow-2xl p-3 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 200px, 220px"
                  className="object-contain p-1.5 transition-transform duration-500 group-hover:scale-105"
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

        {/* Floating Quick Action indicator */}
        <div className="absolute bottom-3 right-3 z-20 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 shadow-lg">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </Link>

      {/* Card Info Section */}
      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
        
        {/* Title and Client row */}
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
              {project.year}
            </span>
            {project.id === 'didusa-srl-jamaica' ? (
              <div className="h-3.5 w-auto flex items-center text-zinc-700 dark:text-zinc-300">
                <DidusaLogo className="h-3 w-auto" />
              </div>
            ) : (
              <div className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 inline-flex items-center justify-center">
                <span className="text-[9px] font-black font-mono text-zinc-600 dark:text-zinc-300">MC</span>
              </div>
            )}
          </div>

          <h3 className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1">
            <Link href={`/proyectos/${project.id}`} className="hover:underline">
              {project.title}
            </Link>
          </h3>

          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Project Description (Brief 2 lines) */}
        <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Live URL Link if available */}
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 dark:text-indigo-400 hover:underline pt-0.5"
          >
            <Globe className="w-3 h-3" />
            <span>Visitar Sitio Web</span>
            <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
          </a>
        )}

        {/* Tools / Deliverables Tags */}
        <div className="pt-2.5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1 overflow-hidden max-h-5">
            {project.tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-200 dark:group-hover:bg-zinc-700 group-hover:text-zinc-950 dark:group-hover:text-white transition-colors shadow-xs"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 3 && (
              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                +{project.tools.length - 3}
              </span>
            )}
          </div>

          <Link
            href={`/proyectos/${project.id}`}
            aria-label={`Ver detalles de ${project.title}`}
            className="p-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-950 transition-colors shadow-xs"
          >
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

      </div>
    </div>
  );
}
