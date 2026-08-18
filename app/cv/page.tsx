import type { Metadata } from 'next';
import React from 'react';
import { PrintableCVView } from '@/components/printable-cv-view';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Currículum Vitae — Manuel Cabrera | Director Creativo & Marketing Digital',
  description: 'Currículum Vitae oficial e imprimible de Manuel Cabrera. Director Creativo con más de 11 años de trayectoria en Marketing Digital, Diseño Gráfico, Desarrollo Web, UI/UX, Modelado 3D e IA. Formato exportable a PDF y tamaño carta (8.5x11).',
  keywords: [
    'Manuel Cabrera CV',
    'Curriculum Vitae Manuel Cabrera',
    'CV Director Creativo República Dominicana',
    'CV Diseñador Gráfico Senior Punta Cana',
    'Currículum Marketing Digital Dominicano',
    'CV Full Stack Developer Punta Cana',
  ],
  alternates: {
    canonical: '/cv',
  },
  openGraph: {
    title: 'Currículum Vitae — Manuel Cabrera | Director Creativo',
    description: 'CV profesional e imprimible con más de 11 años de experiencia en Marketing Digital, Diseño Gráfico y Desarrollo Web.',
    url: `${SITE_URL}/cv`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Manuel Cabrera — Currículum Vitae Profesional',
      },
    ],
  },
};

export default function CVPage() {
  return <PrintableCVView />;
}
