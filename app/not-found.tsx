import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Home, ArrowLeft, Layers, Mail, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: '404 — Página no encontrada | Manuel Cabrera',
  description: 'La página que buscas no existe o ha sido movida. Explora el portafolio creativo de Manuel Cabrera.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-[85vh] flex items-center justify-center px-4 sm:px-8 py-24 relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-purple-500/10 dark:bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-xl w-full text-center space-y-8 relative z-10">
        {/* Error Code Display */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 animate-spin text-indigo-600 dark:text-indigo-400" />
            <span>Error 404 • Ruta no encontrada</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-zinc-950 dark:text-white">
            4<span className="text-indigo-600 dark:text-indigo-400">0</span>4
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Esta página no está disponible
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
            Es posible que el enlace esté roto, la URL haya cambiado o la sección se haya reorganizado en el nuevo portafolio.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>

          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 font-bold text-xs sm:text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Explorar Proyectos</span>
          </Link>

          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-bold text-xs sm:text-sm transition-all cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Contacto</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
