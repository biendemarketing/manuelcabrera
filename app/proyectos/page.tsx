import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ProjectsGallery } from '@/components/projects-gallery';
import { ArrowLeft, Mail } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Proyectos & Portafolio Creativo',
  description: 'Galería completa de proyectos de Manuel Cabrera: Branding, Identidad Visual, Diseño Web, Marketing Digital, Campañas Meta Ads, Modelado 3D y Gran Formato para marcas en República Dominicana y el mundo.',
  keywords: [
    'Proyectos de Diseño Gráfico Punta Cana',
    'Portafolio Marketing Digital',
    'Branding República Dominicana',
    'Diseño Web Corporativo',
    'Campañas Meta Ads Facebook',
    'Identidad Visual Empresas',
    'Modelado 3D Productos',
    'Gran Formato Vallas',
  ],
  alternates: {
    canonical: '/proyectos',
  },
  openGraph: {
    title: 'Proyectos & Portafolio | Manuel Cabrera',
    description: 'Explora más de 16 proyectos destacados: Branding, Web, Marketing Digital, 3D y Gran Formato para marcas líderes en República Dominicana.',
    url: `${SITE_URL}/proyectos`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Portafolio de Manuel Cabrera — Proyectos Creativos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyectos & Portafolio | Manuel Cabrera',
    description: 'Branding, Marketing Digital, Desarrollo Web, 3D y Gran Formato. +11 años de experiencia visual.',
    images: [`${SITE_URL}/opengraph.png`],
  },
};

export default function ProyectosPage() {
  return (
    <div className="pt-28 pb-16 w-full min-h-screen">
      {/* Page Header Breadcrumb */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contactar sobre Proyectos</span>
          </Link>
        </div>
      </div>

      {/* Main Projects Gallery Component */}
      <ProjectsGallery />
    </div>
  );
}
