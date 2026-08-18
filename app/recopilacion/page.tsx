import React from 'react';
import type { Metadata } from 'next';
import { RecopilacionPageView } from '@/components/recopilacion-page-view';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Recopilación Histórica de Proyectos & Trayectoria (70 Láminas)',
  description: 'Galería retrospectiva en alta definición de más de 70 láminas de proyectos: branding corporativo, desarrollo web, modelado 3D, gigantografías, campañas en redes sociales y dirección de arte realizadas por Manuel Cabrera.',
  keywords: [
    'Recopilación de proyectos Manuel Cabrera',
    'Portafolio retrospectiva',
    'Láminas de diseño gráfico',
    'Renders 3D portafolio',
    'Branding corporativo República Dominicana',
    'Campañas publicitarias archivo',
  ],
  alternates: {
    canonical: '/recopilacion',
  },
  openGraph: {
    title: 'Recopilación Histórica de Proyectos | Manuel Cabrera',
    description: '70 láminas en ultra alta definición con más de una década de trabajo visual, plataformas web, 3D y marcas líderes.',
    url: `${SITE_URL}/recopilacion`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Recopilación de proyectos de Manuel Cabrera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recopilación Histórica (70 Láminas) | Manuel Cabrera',
    description: '70 láminas en ultra alta definición con más de una década de trayectoria visual y creativa.',
    images: [`${SITE_URL}/opengraph.png`],
  },
};

export default function RecopilacionPage() {
  return <RecopilacionPageView />;
}
