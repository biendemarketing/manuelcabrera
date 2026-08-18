import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { SoftwareShowcase } from '@/components/software-showcase';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Software & Herramientas Profesionales',
  description: 'Suite completa de software dominado por Manuel Cabrera: Adobe Creative Suite (Illustrator, Photoshop, InDesign, After Effects, Premiere), Cinema 4D, Blender, Next.js, React, TypeScript, Figma, Meta Ads Manager, Google Ads y más de 40 herramientas profesionales.',
  keywords: [
    'Adobe Creative Suite Dominicana',
    'Cinema 4D Blender 3D',
    'Figma UI diseño',
    'Next.js React TypeScript desarrollador',
    'Meta Ads Manager Google Ads',
    'Software diseño gráfico',
    'Herramientas marketing digital',
    'Suite profesional creativos',
  ],
  alternates: {
    canonical: '/software',
  },
  openGraph: {
    title: 'Software & Herramientas | Manuel Cabrera',
    description: '+40 herramientas profesionales: Adobe Creative Suite, Cinema 4D, Blender, Next.js, Figma, Meta Ads y más.',
    url: `${SITE_URL}/software`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Software y herramientas profesionales de Manuel Cabrera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software & Herramientas | Manuel Cabrera',
    description: '+40 herramientas de diseño, desarrollo y marketing digital.',
    images: [`${SITE_URL}/opengraph.png`],
  },
};

export default function SoftwarePage() {
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
            href="/habilidades"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
          >
            <span>Ver Habilidades & Metodologías</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Software Showcase Component */}
      <SoftwareShowcase />
    </div>
  );
}
