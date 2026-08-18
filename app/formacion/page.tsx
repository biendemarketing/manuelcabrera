import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { EducationSection } from '@/components/education-section';
import { ArrowLeft, Briefcase, ArrowRight } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Formación Académica & Certificaciones',
  description: 'Educación y certificaciones de Manuel Cabrera: Licenciatura en Publicidad (Mención Diseño Gráfico Publicitario - UASD), Diplomados en Administración de Empresas, Marketing Digital, Google Ads, Meta Ads y Desarrollo Web.',
  keywords: [
    'Formación académica Manuel Cabrera',
    'Licenciatura publicidad UASD',
    'Certificaciones marketing digital',
    'Diplomados diseño gráfico',
    'Educación profesional',
  ],
  alternates: {
    canonical: '/formacion',
  },
  openGraph: {
    title: 'Formación Académica & Certificaciones | Manuel Cabrera',
    description: 'Licenciatura en Publicidad (UASD) y certificaciones internacionales en Marketing Digital, Gestión Empresarial y Desarrollo Web.',
    url: `${SITE_URL}/formacion`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Formación Académica de Manuel Cabrera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formación Académica | Manuel Cabrera',
    description: 'Licenciatura en Publicidad (UASD) y certificaciones en Marketing y Diseño.',
    images: [`${SITE_URL}/opengraph.png`],
  },
};

export default function FormacionPage() {
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
            href="/experiencia"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Ver Experiencia Laboral</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Main Education Component */}
      <EducationSection />
    </div>
  );
}
