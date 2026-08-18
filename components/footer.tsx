'use client';

import React from 'react';
import Link from 'next/link';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { ManuelCabreraLogo } from '@/components/logo';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { BlurFadeDiv } from '@/components/blur-fade-section';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/proyectos' },
    { name: 'Habilidades', href: '/habilidades' },
    { name: 'Software & IA', href: '/software' },
    { name: 'Experiencia', href: '/experiencia' },
    { name: 'Formación', href: '/formacion' },
    { name: 'Sobre Mí', href: '/sobre-mi' },
    { name: 'Contacto Directo', href: '/contacto' },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 py-12 transition-colors w-full border-t border-zinc-200/60 dark:border-zinc-850">
      <BlurFadeDiv className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
        
        {/* Main Footer Row */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8">
          
          {/* Brand */}
          <div className="flex items-center gap-3.5">
            <Link href="/" className="flex items-center justify-center hover:scale-105 transition-transform">
              <ManuelCabreraLogo className="h-7 w-auto text-zinc-950 dark:text-white" />
            </Link>
            <div>
              <p className="font-extrabold text-zinc-950 dark:text-white tracking-tight text-base">
                Manuel Cabrera
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
                Marketing Digital, Diseño Gráfico, Desarrollo & IA • 11+ Años Exp.
              </p>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs font-bold text-zinc-700 dark:text-zinc-300">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-zinc-950 dark:hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 text-xs font-semibold">
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-all shadow-xs"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white dark:bg-zinc-900 text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-800 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer shadow-xs"
            >
              <span>Arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 dark:text-zinc-400">
          <p>
            © {new Date().getFullYear()} Manuel Cabrera. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse" />
            <span>Verón, Punta Cana, La Altagracia, R.D. • Proyectos Globales Remotos</span>
          </div>
        </div>

      </BlurFadeDiv>
    </footer>
  );
}
