'use client';

import React from 'react';
import Link from 'next/link';
import { ContactSection } from '@/components/contact-section';
import { ArrowLeft, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';

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
