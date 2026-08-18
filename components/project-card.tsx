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
        <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
          
          {/* Didusa Real Project Browser with Real Image & Vector SVG Logo */}
          {project.id === 'didusa-srl-jamaica' ? (
            <div className="w-full max-w-[280px] h-48 rounded-xl bg-zinc-900 border border-zinc-700/60 shadow-2xl flex flex-col overflow-hidden">
              <div className="bg-zinc-950 px-3 py-1.5 flex items-center gap-1.5 border-b border-zinc-800">
                <span className="w-2 h-2 rounded-full bg-red-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-2 h-2 rounded-full bg-green-500/80 inline-block" />
                <div className="flex-1 bg-zinc-900 rounded-md px-2 py-0.5 text-[8px] text-zinc-300 truncate text-center mx-1 flex items-center justify-center gap-1">
                  <Globe className="w-2.5 h-2.5 text-zinc-400" />
                  <span>didusasrl.com</span>
                </div>
              </div>
              <div className="relative flex-1 bg-zinc-950 overflow-hidden flex items-center justify-center group/screen">
                {project.image ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.image}
                      alt="Didusa SRL Web Portal"
                      fill
                      className="object-cover object-top"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between p-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800">
                      <DidusaLogo className="h-4 w-16 bg-white dark:bg-white" />
                      <span className="text-[8px] font-bold text-zinc-300 uppercase tracking-wider">HVAC & Aislamiento</span>
                    </div>
                  </div>
                ) : (
                  <div className="p-3 text-center">
                    <DidusaLogo className="h-6 w-24 bg-white dark:bg-white mx-auto mb-1" />
                    <p className="text-[10px] font-bold text-white">didusasrl.com</p>
                  </div>
                )}
              </div>
            </div>
          ) : project.mockupType === 'mobile' ? (
            /* Mobile Phone Mockup */
            <div className="w-48 h-full rounded-2xl bg-zinc-950 shadow-2xl p-2.5 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between px-2 pt-1">
                <div className="w-4 h-4 rounded-full bg-zinc-700 flex items-center justify-center text-[8px] font-black text-white">MC</div>
                <div className="w-12 h-2 rounded-full bg-zinc-800" />
                <span className="text-[9px] text-zinc-300 font-mono">13:48</span>
              </div>
              <div className="bg-zinc-900 rounded-xl p-3 my-auto text-center">
                <p className="text-[10px] font-bold text-white">Banca Móvil</p>
                <p className="text-[8px] text-zinc-300 mt-0.5 font-mono">RD$60,539.14</p>
                <div className="grid grid-cols-3 gap-1 mt-2">
                  <span className="bg-zinc-800 rounded p-1 text-[7px] text-zinc-200 font-semibold">Transferir</span>
                  <span className="bg-zinc-800 rounded p-1 text-[7px] text-zinc-200 font-semibold">Pagar</span>
                  <span className="bg-zinc-800 rounded p-1 text-[7px] text-zinc-200 font-semibold">QR</span>
                </div>
              </div>
              <div className="h-1 w-16 bg-zinc-700 rounded-full mx-auto" />
            </div>
          ) : project.mockupType === 'packaging' ? (
            /* Packaging Box / Can */
            <div className="relative flex items-center justify-center gap-3">
              <div className="w-24 h-40 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 shadow-2xl p-2.5 flex flex-col items-center justify-between text-center transform -rotate-3 group-hover:rotate-0 transition-transform">
                <span className="text-[8px] uppercase tracking-widest text-zinc-300 font-bold">3D Render</span>
                <div className="my-auto">
                  <div className="w-8 h-8 rounded-full bg-zinc-700 mx-auto mb-1 flex items-center justify-center text-white text-[10px] font-black">
                    LS
                  </div>
                  <p className="text-[10px] font-extrabold text-white leading-tight">{project.title.split(' ')[0]}</p>
                  <p className="text-[8px] text-zinc-300">Pharma 4K</p>
                </div>
                <span className="text-[7px] text-zinc-400 font-semibold">Catálogo</span>
              </div>
              <div className="w-24 h-32 rounded-xl bg-gradient-to-tr from-zinc-750 to-zinc-900 shadow-xl p-2 flex flex-col justify-between text-center transform rotate-6 group-hover:rotate-0 transition-transform">
                <span className="text-[7px] text-zinc-300 font-semibold">Packaging</span>
                <p className="text-[9px] font-bold text-zinc-100">{project.client.split(' ')[0]}</p>
                <div className="h-1 w-8 bg-zinc-600 rounded-full mx-auto" />
              </div>
            </div>
          ) : project.mockupType === 'billboard' ? (
            /* Billboard / Large Format Display */
            <div className="w-64 h-36 rounded-xl bg-zinc-900 shadow-2xl p-3 flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[8px] font-black tracking-widest text-white uppercase bg-zinc-800 px-2 py-0.5 rounded">Outdoor Ad</span>
                <span className="text-[8px] text-zinc-300 font-bold">Gran Formato</span>
              </div>
              <div className="relative z-10 my-auto text-left">
                <p className="text-sm font-black text-white tracking-tight uppercase leading-tight">{project.title}</p>
                <p className="text-[9px] text-zinc-300 font-medium">{project.subtitle}</p>
              </div>
              <div className="relative z-10 flex items-center justify-between text-[8px] text-zinc-300 pt-1">
                <span>{project.client}</span>
                <span className="font-bold text-zinc-200">Billboard 3D</span>
              </div>
            </div>
          ) : project.mockupType === 'browser' ? (
            /* Browser / Web UI Mockup */
            <div className="w-60 h-36 rounded-xl bg-zinc-950 shadow-2xl flex flex-col overflow-hidden">
              <div className="bg-zinc-900 px-3 py-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-zinc-600 inline-block" />
                <span className="w-2 h-2 rounded-full bg-zinc-600 inline-block" />
                <span className="w-2 h-2 rounded-full bg-zinc-600 inline-block" />
                <div className="flex-1 max-w-[120px] bg-zinc-800 rounded-md px-2 py-0.5 text-[8px] text-zinc-300 truncate text-center mx-auto">
                  {project.title.toLowerCase().replace(/\s+/g, '')}.com
                </div>
              </div>
              <div className="p-3 flex-1 flex flex-col justify-between bg-zinc-900/60">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-white tracking-wider uppercase">{project.title.split(' ')[0]}</span>
                  <span className="text-[8px] text-zinc-300">Web Portal</span>
                </div>
                <div className="text-center my-auto">
                  <p className="text-xs font-black text-white uppercase tracking-widest">{project.subtitle}</p>
                  <p className="text-[8px] text-zinc-300 mt-0.5">High Performance UI</p>
                </div>
                <div className="h-1.5 w-12 bg-zinc-700 rounded-full mx-auto" />
              </div>
            </div>
          ) : (
            /* Flyer Grid / Urban Social Media */
            <div className="grid grid-cols-2 gap-2 w-52 h-40">
              <div className="rounded-xl bg-zinc-900 p-2.5 flex flex-col justify-between overflow-hidden shadow-lg relative">
                <span className="text-[7px] font-bold text-zinc-300 uppercase">Urban Music</span>
                <p className="text-[9px] font-black text-white leading-tight">{project.title.split(' ')[0]}</p>
                <div className="w-full h-1 bg-zinc-700 rounded-full" />
              </div>
              <div className="rounded-xl bg-zinc-850 p-2.5 flex flex-col justify-between overflow-hidden shadow-lg relative">
                <span className="text-[7px] font-bold text-zinc-300 uppercase">Social Ad</span>
                <p className="text-[9px] font-black text-white leading-tight">Instagram 1:1</p>
                <div className="w-full h-1 bg-zinc-700 rounded-full" />
              </div>
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


