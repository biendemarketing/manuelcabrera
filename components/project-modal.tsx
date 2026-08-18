'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/portfolio-data';
import { 
  X, 
  CheckCircle2, 
  User, 
  ArrowRight, 
  Wrench, 
  Palette,
  ExternalLink,
  Globe,
  Maximize2,
  ZoomIn
} from 'lucide-react';
import { DidusaLogo } from '@/components/logo';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { LightboxModal, LightboxImage } from '@/components/lightbox-modal';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxOpen) onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, lightboxOpen]);

  if (!project) return null;

  const galleryImages: LightboxImage[] = (
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : project.image
      ? [project.image]
      : []
  ).map((imgSrc, idx) => ({
    src: imgSrc,
    alt: `${project.title} - Captura ${idx + 1}`,
    title: project.id === 'didusa-srl-jamaica' 
      ? (idx === 0 ? "didusasrl.com (República Dominicana)" : "didusajamaica.com (Internacional)")
      : `${project.title} - Captura ${idx + 1}`,
    caption: project.subtitle,
    linkUrl: project.websiteUrl
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div 
        id="project-detail-modal"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl overflow-y-auto my-auto flex flex-col animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header Bar with Monochromatic Accent */}
          <div className="relative p-6 sm:p-8 bg-zinc-950 text-white rounded-t-3xl overflow-hidden">
            <div className="relative z-10 flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-xs font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                      <span>Caso Destacado</span>
                    </span>
                  )}
                </div>
                
                <div className="flex flex-wrap items-center gap-3 mt-1">
                  {project.id === 'didusa-srl-jamaica' && (
                    <div className="py-1 inline-flex items-center justify-center">
                      <DidusaLogo className="h-7 w-28 text-white" />
                    </div>
                  )}
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {project.title}
                  </h2>
                </div>
                
                <p className="text-sm sm:text-base text-zinc-300 font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Cerrar ventana"
                className="p-2.5 rounded-full bg-zinc-850 hover:bg-zinc-750 text-zinc-300 hover:text-white transition-colors cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick client & meta bar */}
            <div className="relative z-10 flex flex-wrap items-center gap-6 mt-6 pt-4 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-zinc-400" />
                <span>Cliente: <strong className="text-white font-semibold">{project.client}</strong></span>
              </div>
              {project.websiteUrl && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white underline underline-offset-4 transition-colors font-semibold"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Visitar Sitio Web</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-8 text-zinc-800 dark:text-zinc-200">
            
            {/* Real Screenshots / Visual Showcase if Available */}
            {project.galleryImages && project.galleryImages.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Capturas & Portales Web Desarrollados (Clic para pantalla completa)</span>
                  </h3>
                  {project.websiteUrl && (
                    <a 
                      href={project.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>{project.websiteUrl.replace('https://', '').replace(/\/$/, '')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.galleryImages.map((img, idx) => (
                    <div 
                      key={idx} 
                      onClick={() => openLightbox(idx)}
                      className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-md group cursor-pointer"
                    >
                      <div className="bg-zinc-900 px-3 py-1.5 flex items-center justify-between border-b border-zinc-800">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-zinc-600" />
                          <span className="w-2 h-2 rounded-full bg-zinc-600" />
                          <span className="w-2 h-2 rounded-full bg-zinc-600" />
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 font-bold">
                          {project.id === 'didusa-srl-jamaica' 
                            ? (idx === 0 ? "didusasrl.com (República Dominicana)" : "didusajamaica.com (Internacional)")
                            : (img.includes('mobile') ? "Versión Móvil & Streaming" : (project.websiteUrl || '').replace('https://', '').replace(/\/$/, ''))
                          }
                        </span>
                      </div>
                      <div className="relative w-full h-56 sm:h-64 bg-zinc-950">
                        <Image
                          src={img}
                          alt={`Captura ${project.title} - ${idx + 1}`}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-zinc-950 text-xs font-bold shadow-lg">
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>Pantalla Completa</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stats Badges if available */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/80 shadow-xs">
                {project.stats.map((s, idx) => (
                  <div key={idx} className="text-center">
                    <p className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white">{s.value}</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Overview Description */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
                Descripción del Proyecto
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 shadow-xs space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                  El Desafío
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/60 shadow-xs space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white">
                  La Solución Creativa
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables Checklist */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-zinc-500" />
                <span>Entregables Clave de Manuel Cabrera</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-800/70 shadow-xs text-xs font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Color Palette & Tools Used */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Color Palette Swatches */}
              {project.colorPalette && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <Palette className="w-4 h-4 text-zinc-500" />
                    <span>Paleta Cromática del Proyecto:</span>
                  </h4>
                  <div className="flex items-center gap-2">
                    {project.colorPalette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className="w-9 h-9 rounded-xl shadow-xs"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                        <span className="text-[10px] font-mono text-zinc-500 mt-1">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tools Used */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-zinc-500" />
                  <span>Software & Tecnologías:</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Modal Footer Bar */}
          <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-b-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href={`/proyectos/${project.id}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 dark:text-white hover:underline underline-offset-4"
            >
              <span>Ver Caso de Estudio Completo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-xs font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700 cursor-pointer transition-colors"
              >
                Cerrar
              </button>
              <a
                href={`${PERSONAL_INFO.whatsappUrl}&text=Hola%20Manuel,%20me%20interesa%20un%20proyecto%20similar%20a%20${encodeURIComponent(project.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-100 dark:text-zinc-950 text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                <span>Consultar este estilo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox Component */}
      <LightboxModal
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
