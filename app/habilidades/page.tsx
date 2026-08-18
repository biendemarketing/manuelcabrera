import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { SkillsInteractive } from '@/components/skills-interactive';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Habilidades & Competencias Técnicas',
  description: 'Explora las habilidades técnicas y creativas de Manuel Cabrera: Adobe Creative Suite, Cinema 4D, Blender, Next.js, React, TypeScript, Meta Ads, Google Ads, SEO, Fotografía, IA Generativa y más de 40 herramientas dominadas.',
  keywords: [
    'Habilidades diseñador gráfico',
    'Adobe Illustrator Photoshop InDesign',
    'Cinema 4D Blender 3D',
    'Next.js React TypeScript',
    'Meta Ads Google Ads',
    'SEO marketing digital',
    'Competencias creativas',
    'Software diseño República Dominicana',
  ],
  alternates: {
    canonical: '/habilidades',
  },
  openGraph: {
    title: 'Habilidades Técnicas | Manuel Cabrera',
    description: '+40 herramientas dominadas: Adobe Creative Suite, Next.js, Cinema 4D, Blender, Meta Ads, Google Ads, SEO, IA Generativa y más.',
    url: `${SITE_URL}/habilidades`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Habilidades técnicas de Manuel Cabrera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Habilidades Técnicas | Manuel Cabrera',
    description: '+40 herramientas de diseño, desarrollo y marketing digital dominadas.',
    images: [`${SITE_URL}/opengraph.png`],
  },
};

export default function HabilidadesPage() {
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

          <div className="flex items-center gap-2">
            <Link
              href="/software"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
            >
              <span>Ver Software & Herramientas</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Skills Component */}
      <SkillsInteractive />
    </div>
  );
}
