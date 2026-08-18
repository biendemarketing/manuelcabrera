import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { ContactSection } from '@/components/contact-section';
import { ArrowLeft, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Contacto — Trabaja Conmigo',
  description: 'Contáctame para proyectos de Marketing Digital, Diseño Gráfico, Branding, Desarrollo Web, UI/UX o Modelado 3D. Disponible en Punta Cana, Santo Domingo y remotamente para el mundo.',
  keywords: [
    'Contactar diseñador gráfico Punta Cana',
    'Contratar marketing digital República Dominicana',
    'Freelancer diseño web',
    'Presupuesto branding',
    'Servicios creativos',
    'Director creativo contacto',
  ],
  alternates: {
    canonical: '/contacto',
  },
  openGraph: {
    title: 'Contacto — Trabaja Conmigo | Manuel Cabrera',
    description: 'Disponible para proyectos de Marketing Digital, Branding, Diseño Web y 3D. Punta Cana, República Dominicana & proyectos remotos.',
    url: `${SITE_URL}/contacto`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Contactar a Manuel Cabrera — Director Creativo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto | Manuel Cabrera',
    description: 'Contáctame para tu próximo proyecto de Marketing Digital, Branding o Diseño Web.',
    images: [`${SITE_URL}/opengraph.png`],
  },
};

export default function ContactoPage() {
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

          <a
            href={PERSONAL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Chatear por WhatsApp ({PERSONAL_INFO.phone})</span>
          </a>
        </div>
      </div>

      {/* Main Contact Component */}
      <ContactSection />
    </div>
  );
}
