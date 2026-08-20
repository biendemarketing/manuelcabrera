import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { SoftwareShowcase } from '@/components/software-showcase';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const metadata: Metadata = {
  title: 'Sistemas, Software & Herramientas Digitales',
  description: 'Suite completa de sistemas, CRM, ERP, automatización y software dominado por Manuel Cabrera: HubSpot, Salesforce, Zoho, Odoo, SAP, Microsoft Dynamics, Zapier, Make, Adobe Creative Cloud, Figma, WordPress, WooCommerce, Shopify, Next.js, React y más.',
  keywords: [
    'CRM HubSpot Salesforce Zoho',
    'ERP Odoo SAP Microsoft Dynamics',
    'Facturacion electronica e-CF',
    'Automatizacion Zapier Make',
    'Gestion de proyectos Trello Asana ClickUp Monday',
    'Adobe Creative Suite Photoshop Illustrator',
    'Desarrollo Web WordPress WooCommerce Shopify React Next.js',
    'Productividad Microsoft Office Google Workspace',
  ],
  alternates: {
    canonical: '/software',
  },
  openGraph: {
    title: 'Sistemas, Software & Herramientas | Manuel Cabrera',
    description: 'Suite completa de sistemas empresariales, CRM, ERP, automatización, diseño, video y desarrollo web.',
    url: `${SITE_URL}/software`,
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        alt: 'Sistemas, Software y herramientas profesionales de Manuel Cabrera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sistemas, Software & Herramientas | Manuel Cabrera',
    description: 'Suite completa de sistemas empresariales, CRM, ERP, diseño y desarrollo.',
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
