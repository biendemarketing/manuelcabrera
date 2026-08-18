'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { Navbar } from './navbar';
import { Footer } from './footer';
import { IntroSplash } from './intro-splash';
import { IntroProvider } from './intro-context';

const CVModal = dynamic(
  () => import('./cv-modal').then((mod) => mod.CVModal),
  { ssr: false }
);

export function AppShell({ children }: { children: React.ReactNode }) {
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const pathname = usePathname();
  const isCVPage = pathname === '/cv';

  if (isCVPage) {
    return (
      <div className="min-h-screen w-full bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
        <main className="w-full">{children}</main>
      </div>
    );
  }

  return (
    <IntroProvider>
      <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-950">
        <IntroSplash />
        <Navbar onOpenCV={() => setCvModalOpen(true)} />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        {cvModalOpen && <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />}
      </div>
    </IntroProvider>
  );
}
