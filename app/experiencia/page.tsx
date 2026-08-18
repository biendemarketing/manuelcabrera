import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ExperienceSection } from '@/components/experience-section';
import { ArrowLeft, GraduationCap, ArrowRight } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Experiencia Laboral & Trayectoria Profesional',
  description: 'Más de 11 años de trayectoria profesional de Manuel Cabrera: Big Print Punta Cana, Club Med, Decora Group, Master Creative, CAMI, Didusa SRL y consultoría para marcas en República Dominicana y el Caribe.',
  keywords: [
    'Experiencia laboral Manuel Cabrera',
    'Director creativo trayectoria',
    'Especialista marketing digital experiencia',
    'Big Print Punta Cana',
    'Club Med Punta Cana',
    'Decora Group',
    'Master Creative',
    'Curriculum vitae creativo',
  ],
  alternates: {
    canonical: '/experiencia',
  },
  openGraph: {
    title: 'Experiencia Laboral | Manuel Cabrera',
    description: '+11 años de liderazgo creativo, marketing digital y desarrollo web en empresas líderes de República Dominicana.',
    url: `${SITE_URL}/experiencia`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Experiencia Laboral de Manuel Cabrera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Experiencia Laboral | Manuel Cabrera',
    description: '+11 años de liderazgo creativo, marketing digital y desarrollo web.',
    images: [`${SITE_URL}/opengraph.png`],
  },
};

export default function ExperienciaPage() {
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
            href="/formacion"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Ver Formación & Certificaciones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Experience Component */}
      <ExperienceSection />
    </div>
  );
}
