'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Project, PERSONAL_INFO } from '@/data/portfolio-data';
import { DidusaLogo, DecoraGroupLogo, LatikLogo, CorambarLogo, ClubMedLogo, BigPrintLogo, CamiLogo, FancyRdLogo, FacturaDoLogo } from '@/components/logo';
import { MacLaptopMockup, IPhone14ProMaxMockup } from '@/components/device-mockups';
import { LightboxModal, LightboxImage } from '@/components/lightbox-modal';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  Globe, 
  User, 
  CheckCircle2, 
  Wrench, 
  Send,
  Phone,
  Maximize2,
  ZoomIn,
  Briefcase,
  Image as ImageIcon,
  Tag,
  BookOpen,
  LayoutGrid,
  Instagram,
  Radio,
  Monitor,
  Smartphone
} from 'lucide-react';

interface ProjectDetailViewProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectDetailView({
  project,
  prevProject,
  nextProject,
}: ProjectDetailViewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const isDidusa = project.id === 'didusa-srl-jamaica';
  const isDecoraCard = project.id === 'decora-group-tarjeta-presentacion';
  const isDecoraWeb = project.id === 'decora-group-web-seo-social-media';
  const isDecora = isDecoraCard || isDecoraWeb;
  const isLatik = project.id === 'latik-logo-identidad';
  const isCorambar = project.id === 'corambar-realty-group-logo';
  const isClubMed = project.id === 'club-med-collection-cap-tridente' || project.id === 'la-boutique-club-med-ecommerce' || project.mockupType === 'merchandise';
  const isLaBoutique = project.id === 'la-boutique-club-med-ecommerce';
  const isWaoooTours = project.id === 'waooo-tours-and-adventures-web';
  const isBigPrint = project.id === 'big-print-punta-cana-brochure' || project.mockupType === 'brochure';
  const isBigPrintWeb = project.id === 'big-print-punta-cana-web-marketing';
  const isCami = project.id === 'cami-instituto-capacitacion-social-media' || project.mockupType === 'flyer-grid';
  const isFancyRd = project.id === 'fancy-rd-radio-web-branding';
  const isFacturaDo = project.id === 'facturadord-sistema-facturacion-nomina';
  const isWebProject = Boolean(project.websiteUrl) || project.mockupType === 'browser';
  const isLogoProject = isLatik || isCorambar || project.mockupType === 'branding' || project.category === 'branding';

  // Prepare images array for lightbox
  const galleryImages: LightboxImage[] = (
    project.galleryImages && project.galleryImages.length > 0
      ? project.galleryImages
      : project.image
      ? [project.image]
      : []
  ).map((imgSrc, idx) => {
    const isFirst = idx === 0;

    let title = `${project.title} - Vista ${idx + 1}`;
    let linkUrl = project.websiteUrl;

    if (isWaoooTours) {
      title = isFirst 
        ? "Waooo Tours & Adventures — Portal Web Turístico Oficial (waoootoursandadventures.vercel.app)" 
        : "Waooo Tours & Adventures — Versión Móvil Responsiva & Reservas";
      linkUrl = "https://waoootoursandadventures.vercel.app/";
    } else if (isLaBoutique) {
      title = isFirst 
        ? "La Boutique Club Med — Plataforma E-Commerce Oficial (laboutiquerd.com)" 
        : "La Boutique Club Med — Versión Móvil & Personalizador en Vivo";
      linkUrl = "https://www.laboutiquerd.com/";
    } else if (isBigPrintWeb) {
      title = isFirst 
        ? "Big Print Punta Cana — Portal Web Oficial (bigprintpuntacana.com)" 
        : "Big Print Punta Cana — Versión Móvil Responsiva";
      linkUrl = "https://bigprintpuntacana.com/";
    } else if (isFacturaDo) {
      title = "FacturaDO — Plataforma SaaS Oficial & Landing Page de Facturación Fiscal (facturadord.com)";
      linkUrl = "https://facturadord.com/";
    } else if (isFancyRd) {
      const fileName = imgSrc.split('/').pop() || '';
      if (fileName.includes('web-desktop')) {
        title = "Fancy RD Radio — Portal Web Oficial & Reproductor Streaming (www.fancyrd.com)";
        linkUrl = "https://www.fancyrd.com/";
      } else if (fileName.includes('web-mobile')) {
        title = "Fancy RD Radio — Versión Móvil & Streaming Adaptativo";
        linkUrl = "https://www.fancyrd.com/";
      } else {
        const logoNum = fileName.replace('fancy-rd-logos-', '').replace('.webp', '');
        title = `Fancy RD Radio — Diseño de Logotipo & Variante de Marca #${logoNum}`;
      }
    } else if (isDecoraWeb) {
      title = isFirst 
        ? "Decora Group Punta Cana — Portal Web Oficial & Arquitectura SEO (decoragrouppuntacana.com)" 
        : "Decora Group Punta Cana — Feed Oficial & Campañas Meta Ads en Instagram (@decoragroup.pc)";
      linkUrl = isFirst ? "https://decoragrouppuntacana.com/" : "https://www.instagram.com/decoragroup.pc";
    } else if (isDidusa) {
      title = isFirst 
        ? "Portal Oficial Didusa República Dominicana (didusasrl.com)" 
        : "Portal Oficial Didusa Jamaica (didusajamaica.com)";
      linkUrl = isFirst ? "https://didusasrl.com" : "https://didusajamaica.com";
    } else if (isDecoraCard) {
      title = isFirst 
        ? "Tarjeta de Presentación Decora Group — Lado Frontal (Anverso)" 
        : "Tarjeta de Presentación Decora Group — Lado Trasero (Reverso / Servicios)";
    } else if (isLatik) {
      title = isFirst 
        ? "Latik — Diseño de Logotipo & Isotipo Vectorial" 
        : "Latik — Aplicación de Marca & Composición";
    } else if (isCorambar) {
      title = isFirst 
        ? "Corambar Realty Group — Construcción Geométrica & Logotipo" 
        : "Corambar Realty Group — Aplicación de Marca & Isotipo";
    } else if (isClubMed) {
      title = `Collection Cap Colors Tridente — Variante ${idx + 1}`;
    } else if (isBigPrint) {
      title = isFirst 
        ? "Big Print Punta Cana — Portada & Servicios de Gran Formato" 
        : "Big Print Punta Cana — Interior & Especificaciones Técnicas";
    } else if (isCami) {
      const fileName = imgSrc.split('/').pop() || '';
      const customTitles: Record<string, string> = {
        'cami-flyer-marketing-digital.webp': 'Marketing Digital & Estrategia en Redes',
        'cami-flyer-oratoria-profesional.webp': 'Curso de Oratoria & Comunicación Eficaz',
        'cami-flyer-diseno-grafico.webp': 'Curso de Diseño Gráfico Publicitario',
        'cami-flyer-manejo-de-dron.webp': 'Curso Profesional de Manejo de Dron',
        'cami-flyer-ingles-para-ninos.webp': 'Inglés Interactivo para Niños',
        'cami-flyer-trenzas-modernas.webp': 'Taller de Trenzas & Estilismo',
        'cami-flyer-curso-de-belleza.webp': 'Curso Integral de Belleza & Estética',
        'cami-flyer-visitador-medico.webp': 'Diplomado Visitador Médico',
        'cami-flyer-emprendimiento-liderazgo.webp': 'Emprendimiento & Liderazgo de Negocios',
        'cami-flyer-sala-de-tarea.webp': 'Sala de Tarea Escolar CAMI',
        'cami-flyer-pestanas-tintado-cejas.webp': 'Taller de Postura de Pestañas & Cejas',
        'cami-flyer-reforzamiento-ciencias.webp': 'Reforzamiento Matemáticas & Ciencias',
        'cami-flyer-reforzamiento-ninos.webp': 'Reforzamiento Escolar para Niños',
        'cami-flyer-dia-del-maestro.webp': 'Campaña Conmemorativa Día del Maestro'
      };
      title = customTitles[fileName] || `CAMI Instituto — Flyer #${idx + 1}`;
    }

    return {
      src: imgSrc,
      alt: `${project.title} - Vista ${idx + 1}`,
      title,
      linkUrl
    };
  });

  const webImages = isFancyRd ? galleryImages.filter(img => img.src.includes('web-')) : galleryImages;
  const fancyLogos = isFancyRd ? galleryImages.filter(img => img.src.includes('logos-')) : [];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="pt-24 sm:pt-28 pb-20 w-full min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500 dark:text-zinc-400">
            <Link href="/" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/proyectos" className="hover:text-zinc-950 dark:hover:text-white transition-colors">
              Proyectos
            </Link>
            <span>/</span>
            <span className="text-zinc-900 dark:text-white font-bold truncate max-w-[200px] sm:max-w-xs">
              {project.title}
            </span>
          </div>

          <Link
            href="/proyectos"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-black bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-750 transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a Galería</span>
          </Link>
        </div>
      </div>

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        
        {/* Project Hero Header */}
        <div className="max-w-4xl mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 text-xs font-black uppercase tracking-wider shadow-sm">
              {project.categoryLabel}
            </span>
            {project.featured && (
              <span className="px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-200 text-xs font-bold flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Caso Destacado</span>
              </span>
            )}
          </div>

          {/* Title and Transparent Vector Logo */}
          <div className="flex flex-wrap items-center gap-4">
            {project.hasCustomLogo && isDidusa && (
              <div className="py-1 inline-flex items-center justify-center">
                <DidusaLogo className="h-10 sm:h-14 w-32 sm:w-44 text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && isDecora && (
              <div className="py-1 inline-flex items-center justify-center">
                <DecoraGroupLogo className="h-10 sm:h-14 w-36 sm:w-48 text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && isLatik && (
              <div className="py-1 inline-flex items-center justify-center">
                <LatikLogo className="h-14 sm:h-20 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && isCorambar && (
              <div className="py-1 inline-flex items-center justify-center">
                <CorambarLogo className="h-14 sm:h-20 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && isClubMed && (
              <div className="py-1 inline-flex items-center justify-center">
                <ClubMedLogo className="h-9 sm:h-12 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && (isBigPrint || isBigPrintWeb) && (
              <div className="py-1 inline-flex items-center justify-center">
                <BigPrintLogo className="h-10 sm:h-14 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && isCami && (
              <div className="py-1 inline-flex items-center justify-center">
                <CamiLogo className="h-10 sm:h-14 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && isFancyRd && (
              <div className="py-1 inline-flex items-center justify-center">
                <FancyRdLogo className="h-10 sm:h-14 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            {project.hasCustomLogo && isFacturaDo && (
              <div className="py-1 inline-flex items-center justify-center">
                <FacturaDoLogo className="h-8 sm:h-12 w-auto text-zinc-950 dark:text-white" />
              </div>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white tracking-tight leading-tight uppercase">
              {project.title}
            </h1>
          </div>

          <p className="text-base sm:text-xl text-zinc-700 dark:text-zinc-300 font-semibold leading-relaxed">
            {project.subtitle}
          </p>

          {/* Client & Metadata Strip */}
          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Cliente: <strong className="text-zinc-950 dark:text-white font-bold">{project.client}</strong></span>
            </div>
            {project.websiteUrl && (
              <a 
                href={project.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-bold"
              >
                <Globe className="w-4 h-4" />
                <span>{project.websiteUrl.replace('https://', '').replace(/\/$/, '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.instagramUrl && (
              <a 
                href={project.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-pink-600 dark:text-pink-400 hover:underline font-bold"
              >
                <Instagram className="w-4 h-4" />
                <span>{project.instagramHandle || 'Instagram'}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ADAPTIVE VISUAL SHOWCASE ACCORDING TO PROJECT CATEGORY / TYPE */}
        {/* ------------------------------------------------------------- */}

        {/* 1. WEB PROJECTS VIEW (Side-by-Side Mac Laptop & iPhone 14 Pro Max Dual Showcase) */}
        {isWebProject && webImages.length > 0 && (() => {
          const desktopImgs = webImages.filter(
            (img) => !img.src.includes('mobile') && !img.src.includes('instagram') && !img.src.includes('phone')
          );
          const webMobileImgs = webImages.filter(
            (img) => (img.src.includes('mobile') || img.src.includes('phone')) && !img.src.includes('instagram')
          );
          const instagramImgs = galleryImages.filter((img) => img.src.includes('instagram'));

          const hasBoth = desktopImgs.length > 0 && webMobileImgs.length > 0;

          return (
            <div className="mb-16 space-y-16">
              {/* Dual Web Showcase */}
              <div className="space-y-6">
                {/* Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-zinc-800/80">
                  <div className="flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                      {hasBoth ? "Despliegue Responsivo — Mac Laptop & iPhone 14 Pro Max" : desktopImgs.length > 0 ? "Versión de Escritorio — Mac Laptop" : "Versión Móvil — iPhone 14 Pro Max"}
                    </h2>
                  </div>
                  {project.websiteUrl && (
                    <a 
                      href={project.websiteUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="font-bold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5 text-xs"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{project.websiteUrl.replace('https://', '').replace(/\/$/, '')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                {/* Layout: Side-by-Side when both exist */}
                {hasBoth ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                    {/* Left Column: Mac Laptop Desktop View */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                      {desktopImgs.map((img, idx) => {
                        const origIdx = galleryImages.findIndex(g => g.src === img.src);
                        const clickIdx = origIdx >= 0 ? origIdx : idx;
                        return (
                          <MacLaptopMockup
                            key={idx}
                            src={img.src}
                            alt={img.alt}
                            title={img.title}
                            url={project.websiteUrl}
                            onOpenLightbox={() => openLightbox(clickIdx)}
                            priority={idx === 0}
                          />
                        );
                      })}
                    </div>

                    {/* Right Column: iPhone 14 Pro Max Web Mobile View (Height-Aligned) */}
                    <div className="lg:col-span-4 flex justify-center items-center">
                      {webMobileImgs.map((img, idx) => {
                        const origIdx = galleryImages.findIndex(g => g.src === img.src);
                        const clickIdx = origIdx >= 0 ? origIdx : idx;
                        return (
                          <IPhone14ProMaxMockup
                            key={idx}
                            src={img.src}
                            alt={img.alt}
                            title={img.title}
                            onOpenLightbox={() => openLightbox(clickIdx)}
                          />
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  /* Fallback when only Desktop or only Mobile exists */
                  <div>
                    {desktopImgs.length > 0 && (
                      <div className={`grid grid-cols-1 ${desktopImgs.length > 1 ? 'lg:grid-cols-2' : 'max-w-4xl mx-auto'} gap-8`}>
                        {desktopImgs.map((img, idx) => {
                          const origIdx = galleryImages.findIndex(g => g.src === img.src);
                          const clickIdx = origIdx >= 0 ? origIdx : idx;
                          return (
                            <MacLaptopMockup
                              key={idx}
                              src={img.src}
                              alt={img.alt}
                              title={img.title}
                              url={project.websiteUrl}
                              onOpenLightbox={() => openLightbox(clickIdx)}
                              priority={idx === 0}
                            />
                          );
                        })}
                      </div>
                    )}

                    {webMobileImgs.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-8">
                        {webMobileImgs.map((img, idx) => {
                          const origIdx = galleryImages.findIndex(g => g.src === img.src);
                          const clickIdx = origIdx >= 0 ? origIdx : idx;
                          return (
                            <IPhone14ProMaxMockup
                              key={idx}
                              src={img.src}
                              alt={img.alt}
                              title={img.title}
                              onOpenLightbox={() => openLightbox(clickIdx)}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* DEDICATED SOCIAL MEDIA & INSTAGRAM FEED SECTION */}
              {(instagramImgs.length > 0 || project.instagramUrl) && (
                <div className="rounded-3xl p-6 sm:p-8 lg:p-10 border border-zinc-200 dark:border-zinc-800/90 bg-white dark:bg-gradient-to-b dark:from-zinc-900/90 dark:via-zinc-950 dark:to-black shadow-xl dark:shadow-2xl space-y-8">
                  {/* Section Header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="p-1.5 rounded-lg bg-pink-100 dark:bg-pink-500/20 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-500/30">
                          <Instagram className="w-4 h-4" />
                        </span>
                        <h2 className="text-base sm:text-lg font-black uppercase tracking-wide text-zinc-900 dark:text-white">
                          Estrategia en Redes Sociales & Feed de Instagram
                        </h2>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                        Diseño de cuadrícula 3x3, catálogo digital interactivo, historias destacadas y campañas publicitarias en Meta Ads.
                      </p>
                    </div>

                    {project.instagramUrl && (
                      <a
                        href={project.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white text-xs font-bold shadow-lg transition-all active:scale-95 cursor-pointer"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        <span>Ver Perfil {project.instagramHandle || '@Instagram'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* 2-Column Content: Strategy Deliverables (Left) + Centered iPhone Mockup (Right) */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Scope & Work Details */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xs font-black uppercase tracking-wider text-pink-600 dark:text-pink-400">
                          Trabajo Realizado & Gestión de Marca
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          Se estructuró una presencia digital orientada a la conversión y captación corporativa para cadenas hoteleras, constructoras y comercios en la región este. La estrategia abarcó desde la curaduría fotográfica industrial hasta la segmentación de anuncios pagados en Meta Ads.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                            <span className="w-2 h-2 rounded-full bg-pink-500" />
                            <span>Feed 3x3 Cohesivo</span>
                          </div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal">
                            Diagramación visual de publicaciones fijas y carruseles con acabados de impresión, vallas y rotulación.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                            <span className="w-2 h-2 rounded-full bg-purple-500" />
                            <span>Historias Destacadas</span>
                          </div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal">
                            Portadas vectoriales categorizadas por servicios: Gran Formato, Vallas, Letras 3D y Material POP.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                            <span className="w-2 h-2 rounded-full bg-blue-500" />
                            <span>Campañas Meta Ads</span>
                          </div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal">
                            Anuncios de alta conversión segmentados en Punta Cana, Bávaro e Higüey para captación de clientes B2B.
                          </p>
                        </div>

                        <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-white">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>Integración Web & WhatsApp</span>
                          </div>
                          <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-normal">
                            Embudos directos de contacto desde Instagram hacia cotizaciones automáticas en WhatsApp Business.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Centered iPhone 14 Pro Max with Instagram Feed */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                      {instagramImgs.map((img, idx) => {
                        const origIdx = galleryImages.findIndex(g => g.src === img.src);
                        const clickIdx = origIdx >= 0 ? origIdx : idx;
                        return (
                          <IPhone14ProMaxMockup
                            key={idx}
                            src={img.src}
                            alt={img.alt}
                            title={img.title || `${project.title} — Feed de Instagram`}
                            onOpenLightbox={() => openLightbox(clickIdx)}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })()}

        {/* 1.1 FANCY RD LOGO & VISUAL IDENTITY GALLERY */}
        {isFancyRd && fancyLogos.length > 0 && (
          <div className="mb-14 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-pink-500" />
                <span>Diseño de Logotipo, Isotipo Vectorial & Variantes de Marca</span>
              </h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Haz clic en cualquier versión para ampliar en alta definición</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              {fancyLogos.map((img, idx) => {
                const origIdx = galleryImages.findIndex(g => g.src === img.src);
                const clickIdx = origIdx >= 0 ? origIdx : idx;
                return (
                  <div 
                    key={idx} 
                    onClick={() => openLightbox(clickIdx)}
                    className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-900 shadow-md dark:shadow-xl transition-all duration-300 hover:border-pink-500/50 cursor-pointer flex flex-col"
                  >
                    <div className="relative w-full aspect-square bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-6 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        unoptimized
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Badge */}
                      <div className="absolute top-2.5 left-2.5 z-10">
                        <span className="px-2 py-0.5 rounded-md bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono font-bold text-pink-600 dark:text-pink-300 shadow-sm">
                          Variante #{idx + 1}
                        </span>
                      </div>

                      {/* Hover Zoom Prompt */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                        <span className="p-2 rounded-full bg-white text-zinc-950 shadow-xl">
                          <ZoomIn className="w-4 h-4" />
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                      <span className="font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white truncate">
                        {(img.title || '').replace('Fancy RD Radio — ', '')}
                      </span>
                      <span className="text-[10px] font-bold text-pink-600 dark:text-pink-400 shrink-0">Logo & Marca</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. CLUB MED MERCHANDISING COLLECTION */}
        {isClubMed && galleryImages.length > 0 && (
          <div className="mb-14 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <Tag className="w-4 h-4 text-sky-500" />
                <span>Colección Completa Cap Colors Tridente — 16 Variantes Cromáticas</span>
              </h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Haz clic para ampliar en alta resolución</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(idx)}
                  className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-900 shadow-md dark:shadow-xl transition-all duration-300 hover:border-sky-500/50 cursor-pointer flex flex-col"
                >
                  <div className="relative w-full aspect-square bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-3 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Variant Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono font-bold text-sky-600 dark:text-sky-300 shadow-sm">
                        Color #{idx + 1}
                      </span>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <span className="p-2 rounded-full bg-white text-zinc-950 shadow-xl">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                    <span className="font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white truncate">
                      Variante {idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400">Bordado 3D</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. BROCHURE & EDITORIAL CATALOG VIEW */}
        {isBigPrint && galleryImages.length > 0 && (
          <div className="mb-14 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-500" />
                <span>Brochure & Catálogo Publicitario de Big Print (2 Cuerpos Editoriales)</span>
              </h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Haz clic para ampliar en alta definición</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(idx)}
                  className="group rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-900 shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-yellow-500/50 cursor-pointer flex flex-col"
                >
                  <div className="relative w-full aspect-[2376/1836] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-3 sm:p-5 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      className="object-contain p-1 sm:p-2 transition-transform duration-500 group-hover:scale-103"
                    />

                    {/* View Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-[11px] font-bold text-zinc-800 dark:text-zinc-200 shadow-sm flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-amber-500' : 'bg-emerald-500'}`} />
                        <span>{idx === 0 ? "Página 1 • Portada & Servicios" : "Página 2 • Interior & Producción"}</span>
                      </span>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 font-black text-xs shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4" />
                        <span>Ver en Pantalla Completa HD</span>
                      </span>
                    </div>
                  </div>

                  {/* Clean Bottom Bar */}
                  <div className="p-4 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="font-extrabold text-sm text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-yellow-300 transition-colors">
                      {img.title}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); openLightbox(idx); }}
                      className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors shrink-0 ml-3 cursor-pointer"
                      title="Pantalla completa"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. CAMI INSTITUTO SOCIAL MEDIA FLYERS */}
        {isCami && galleryImages.length > 0 && (
          <div className="mb-14 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <LayoutGrid className="w-4 h-4 text-rose-500" />
                <span>Colección Completa de Flyers Publicitarios & Social Media (14 Piezas Únicas de Campaña)</span>
              </h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Haz clic en cualquier pieza para ampliar en alta definición</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(idx)}
                  className="group rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 hover:bg-zinc-50 dark:hover:bg-zinc-900 shadow-md dark:shadow-xl transition-all duration-300 hover:border-rose-500/50 cursor-pointer flex flex-col"
                >
                  <div className="relative w-full aspect-square bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-2 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-md bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono font-bold text-rose-600 dark:text-rose-300 shadow-sm">
                        Flyer #{idx + 1}
                      </span>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <span className="p-2 rounded-full bg-white text-zinc-950 shadow-xl">
                        <ZoomIn className="w-4 h-4" />
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs gap-2">
                    <span className="font-bold text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white truncate">
                      {(img.title || '').replace('CAMI Instituto — ', '')}
                    </span>
                    <span className="text-[10px] font-bold text-rose-600 dark:text-rose-400 shrink-0">Social Media</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. BRANDING & LOGO PROJECTS VIEW */}
        {isLogoProject && !isWebProject && !isClubMed && !isBigPrint && !isCami && galleryImages.length > 0 && (
          <div className="mb-14 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Galería de Identidad & Diseño de Logotipo (2 Vistas Oficiales)</span>
              </h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Haz clic para ampliar en alta resolución</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(idx)}
                  className="group rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-900 shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-indigo-400 cursor-pointer flex flex-col"
                >
                  {/* Image Card Box */}
                  <div className="relative w-full aspect-square sm:aspect-[4/3] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-6 sm:p-8 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      className="object-contain p-4 sm:p-6 transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* View Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-[11px] font-bold text-zinc-800 dark:text-zinc-200 shadow-sm">
                        {idx === 0 ? "Vista 1 • Construcción & Isotipo" : "Vista 2 • Aplicación & Composición"}
                      </span>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 font-black text-xs shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4" />
                        <span>Ver en Pantalla Completa HD</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="font-extrabold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {img.title}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); openLightbox(idx); }}
                      className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors shrink-0 ml-3 cursor-pointer"
                      title="Pantalla completa"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. BUSINESS CARDS & PRINT PROJECTS VIEW */}
        {!isWebProject && !isLogoProject && !isClubMed && !isBigPrint && !isCami && galleryImages.length > 0 && (
          <div className="mb-14 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>{isDecora ? "Galería de Tarjeta de Presentación (Anverso & Reverso)" : "Galería del Proyecto"}</span>
              </h2>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Haz clic para ampliar en alta resolución</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {galleryImages.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => openLightbox(idx)}
                  className="group rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 hover:bg-zinc-50 dark:hover:bg-zinc-900 shadow-xl dark:shadow-2xl transition-all duration-300 hover:border-indigo-400 cursor-pointer flex flex-col"
                >
                  {/* Clean Presentation Container */}
                  <div className="relative w-full aspect-[1050/600] bg-zinc-100 dark:bg-zinc-950 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      unoptimized
                      className="object-contain p-2 sm:p-4 transition-transform duration-500 group-hover:scale-105 drop-shadow-xl"
                    />

                    {/* View Label Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-[11px] font-bold text-zinc-800 dark:text-zinc-200 shadow-sm flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
                        <span>{idx === 0 ? "Lado Frontal (Anverso)" : "Lado Trasero (Reverso / Servicios)"}</span>
                      </span>
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-zinc-950 font-black text-xs shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <ZoomIn className="w-4 h-4" />
                        <span>Ver en Pantalla Completa HD</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="p-4 sm:p-5 bg-zinc-50 dark:bg-zinc-900/90 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                    <span className="font-extrabold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {img.title}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); openLightbox(idx); }}
                      className="p-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 transition-colors shrink-0 ml-3 cursor-pointer"
                      title="Pantalla completa"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stats Grid if available */}
        {project.stats && (
          <div className="mb-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.stats.map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md text-center">
                <p className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mb-1">{s.value}</p>
                <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Main Content Grid: Description, Challenge, Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
          
          {/* Left Column: Full Description & Story */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
              <h2 className="text-base sm:text-lg font-black uppercase tracking-wider text-zinc-900 dark:text-white">
                Descripción & Alcance del Proyecto
              </h2>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/80 border border-red-200 dark:border-red-800/60 text-red-700 dark:text-red-300 text-[11px] font-bold uppercase tracking-wider">
                  El Desafío
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300 text-[11px] font-bold uppercase tracking-wider">
                  La Solución Aplicada
                </div>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-200 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Entregables Clave por Manuel Cabrera</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-800/90 hover:bg-zinc-100 dark:hover:bg-zinc-750 text-xs sm:text-sm font-bold text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700/70 shadow-xs transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Meta Specs & Contact Card */}
          <div className="space-y-6">

            {/* Tools & Tech Used */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-white flex items-center gap-2">
                <Wrench className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Software & Herramientas:</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Website CTA (if applicable) */}
            {project.websiteUrl && (
              <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl space-y-3">
                <h4 className="text-sm font-black uppercase tracking-wider">Sitio Web en Producción</h4>
                <p className="text-xs text-blue-100 leading-relaxed font-medium">
                  Este portal web se encuentra en línea y activo bajo administración y soporte continuo.
                </p>
                <div className="flex flex-col gap-2 pt-1">
                  {isDidusa ? (
                    <>
                      <a
                        href="https://didusasrl.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-black shadow-md transition-all cursor-pointer"
                      >
                        <span>Abrir didusasrl.com</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="https://didusajamaica.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs font-bold transition-all border border-white/20 cursor-pointer"
                      >
                        <span>Abrir didusajamaica.com</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </>
                  ) : (
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-100 text-xs font-black shadow-md transition-all cursor-pointer"
                    >
                      <span>Abrir {project.websiteUrl.replace('https://', '').replace(/\/$/, '')}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.instagramUrl && (
                    <a
                      href={project.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white text-xs font-bold transition-all border border-white/20 cursor-pointer"
                    >
                      <Instagram className="w-3.5 h-3.5 text-pink-400" />
                      <span>{project.instagramHandle || 'Instagram'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Direct Project Inquiry CTA */}
            <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-xl space-y-4">
              <h4 className="text-sm font-black uppercase tracking-wider">
                ¿Buscas un proyecto similar?
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
                Desarrollo soluciones a medida para tu empresa con estrategia publicitaria, diseño de identidad corporativa y tecnología de vanguardia.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`${PERSONAL_INFO.whatsappUrl}&text=Hola%20Manuel,%20vi%20tu%20proyecto%20de%20${encodeURIComponent(project.title)}%20y%20me%20gustar%C3%ADa%20cotizar%20un%20trabajo%20similar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 text-xs font-black shadow-md transition-all cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Consultar por WhatsApp</span>
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-750 text-zinc-900 dark:text-white text-xs font-bold border border-zinc-200 dark:border-zinc-700 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Formulario</span>
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Related Projects Section */}
        {project.relatedProjects && project.relatedProjects.length > 0 && (
          <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-xs">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white tracking-tight">
                  Proyectos & Soluciones Relacionadas
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  Soluciones corporativas, arquitectura publicitaria y gráfica comercial en Punta Cana.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {project.relatedProjects.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/90 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all group flex flex-col justify-between shadow-xs"
                >
                  <div className="space-y-2">
                    <span className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-[10px] font-bold text-indigo-700 dark:text-indigo-300 uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-extrabold text-sm text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={`${PERSONAL_INFO.whatsappUrl}&text=Hola%20Manuel,%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20servicio%20de%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      <span>Cotizar solución</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Previous & Next Project Navigation Bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevProject ? (
            <Link
              href={`/proyectos/${prevProject.id}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Proyecto Anterior: <strong className="text-zinc-950 dark:text-white">{prevProject.title}</strong></span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/proyectos"
            className="px-6 py-2.5 rounded-full bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-black text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-700 shadow-sm transition-colors cursor-pointer"
          >
            Ver todos los proyectos
          </Link>

          {nextProject ? (
            <Link
              href={`/proyectos/${nextProject.id}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer"
            >
              <span>Siguiente Proyecto: <strong className="text-zinc-950 dark:text-white">{nextProject.title}</strong></span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={galleryImages}
        initialIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

    </main>
  );
}

export default ProjectDetailView;
