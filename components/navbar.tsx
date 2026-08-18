'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './theme-provider';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Home,
  Briefcase, 
  Wrench, 
  Cpu, 
  GraduationCap, 
  User, 
  Mail, 
  FileDown, 
  MapPin, 
  Clock, 
  ArrowRight,
  Send
} from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolio-data';
import { ManuelCabreraLogo, WhatsAppOfficialIcon } from '@/components/logo';

import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenCV?: () => void;
}

export function Navbar({ onOpenCV }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll past Hero section for backdrop background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key & lock background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const isHomepage = pathname === '/';
  const hasSolidBg = !isHomepage || isScrolled;

  const navLinks = [
    { num: '01', name: 'Inicio', href: '/' },
    { num: '02', name: 'Sobre Mí', href: '/#sobre-mi' },
    { num: '03', name: 'Habilidades & IA', href: '/#habilidades' },
    { num: '04', name: 'Formación', href: '/#formacion' },
    { num: '05', name: 'Experiencia', href: '/#experiencia' },
    { num: '06', name: 'Proceso de Trabajo', href: '/#proceso' },
    { num: '07', name: 'Marcas', href: '/#marcas-que-confian' },
    { num: '08', name: 'Recopilación PDF', href: '/#recopilacion-proyectos' },
    { num: '09', name: 'Proyectos', href: '/proyectos' },
    { num: '10', name: 'Currículum Vitae (CV)', href: '/cv' },
    { num: '11', name: 'Software', href: '/#software' },
    { num: '12', name: 'Contacto', href: '/#contacto' },
  ];

  const services = [
    { title: 'Marketing Digital', desc: 'Performance, pauta publicitaria y optimización de ROAS' },
    { title: 'Diseño Gráfico', desc: 'Identidad de marca, branding y dirección de arte' },
    { title: 'Desarrollo Web & Software', desc: 'Aplicaciones modernas, interfaces interactivas y SaaS' },
    { title: 'Automatizaciones', desc: 'Integración de procesos, APIs y optimización operativa' },
    { title: 'Fotografía & Video', desc: 'Producción audiovisual publicitaria cinematográfica' },
    { title: 'Inteligencia Artificial', desc: 'Flujos generativos aplicados a diseño y desarrollo' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 inset-x-0 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 z-40 transition-all duration-300 pointer-events-auto ${
          hasSolidBg
            ? 'py-3.5 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-xs border-b border-zinc-200/50 dark:border-zinc-800/60'
            : 'pt-4 sm:pt-6 pb-2 bg-transparent border-b border-transparent'
        }`}
      >
        {/* Top Bar - Transparent on Hero, Frosted Bar past Hero */}
        <div className="w-full flex items-center justify-between pointer-events-auto">
          
          {/* Brand Logo Only */}
          <Link 
            href="/" 
            onClick={() => setMenuOpen(false)}
            className="group flex items-center focus:outline-none shrink-0 pointer-events-auto cursor-pointer"
            title="Manuel Cabrera - Inicio"
          >
            <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <ManuelCabreraLogo className="h-8 sm:h-9 w-auto text-zinc-950 dark:text-white drop-shadow-md" />
            </div>
          </Link>

          {/* Header Actions: Theme Toggle + Icon-only Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 pointer-events-auto z-40">
            
            {/* Theme Toggle */}
            <button
              type="button"
              id="btn-theme-toggle"
              onClick={(e) => {
                e.stopPropagation();
                toggleTheme();
              }}
              aria-label="Cambiar tema oscuro/claro"
              className="p-2 text-zinc-900 hover:text-black dark:text-zinc-100 dark:hover:text-white transition-all cursor-pointer active:scale-90 bg-transparent border-0 shadow-none outline-none"
              title="Cambiar tema claro/oscuro"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 drop-shadow-sm" />
              ) : (
                <Moon className="w-5 h-5 text-zinc-900 drop-shadow-sm" />
              )}
            </button>

            {/* Icon-Only Hamburger Menu Toggle (Completely Transparent, No Background) */}
            <button
              type="button"
              id="btn-hamburger-menu"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpen((prev) => !prev);
              }}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
              className="p-2 text-zinc-950 hover:text-black dark:text-white dark:hover:text-zinc-200 active:scale-90 transition-all cursor-pointer flex items-center justify-center bg-transparent border-0 shadow-none outline-none"
              title={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {menuOpen ? (
                <X className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] drop-shadow-sm" />
              ) : (
                <Menu className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5] drop-shadow-sm" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MINIMALIST FULL-SCREEN ANIMATED MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fullscreen-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-zinc-950/98 text-white backdrop-blur-2xl flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Navigation Bar inside Menu */}
            <div className="shrink-0 w-full px-5 sm:px-10 md:px-14 lg:px-20 py-5 sm:py-6 flex items-center justify-between">
              <Link 
                href="/" 
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <ManuelCabreraLogo className="h-7 sm:h-8 w-auto text-white group-hover:opacity-80 transition-opacity" />
                <span className="text-xs uppercase tracking-widest text-zinc-400 font-semibold hidden sm:inline-block">
                  / Portafolio
                </span>
              </Link>

              {/* Minimalist Close Button (Borderless) */}
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-all cursor-pointer"
                aria-label="Cerrar menú"
              >
                <span className="text-xs font-bold tracking-wider uppercase">Cerrar</span>
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>

            {/* Main Menu Body - 3 Columns Layout (Secciones, Servicios, Contacto) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 w-full px-5 sm:px-10 md:px-14 lg:px-20 py-8 sm:py-12 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start"
            >
              {/* Column 1: Secciones Principales (Large Typography & Minimal Numbers) */}
              <div className="md:col-span-5 lg:col-span-4 space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-zinc-300 font-bold block mb-3">
                  // Navegación
                </span>
                <nav className="flex flex-col space-y-1.5 sm:space-y-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="group flex items-baseline gap-3 py-1 text-zinc-200 hover:text-white transition-all cursor-pointer"
                      >
                        <span className="text-xs font-mono text-zinc-300 group-hover:text-white transition-colors">
                          {link.num}
                        </span>
                        <span className={`text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight group-hover:translate-x-2 transition-transform duration-200 ${
                          isActive ? 'text-white underline underline-offset-8 decoration-zinc-500' : ''
                        }`}>
                          {link.name}
                        </span>
                        <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-zinc-400 self-center" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              {/* Column 2: Servicios Especializados (Borderless Cards) */}
              <div className="md:col-span-4 lg:col-span-5 space-y-4">
                <span className="text-[11px] uppercase tracking-widest text-zinc-300 font-bold block mb-3">
                  // Servicios & Especialidades
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      href="/#sobre-mi"
                      onClick={() => setMenuOpen(false)}
                      className="group p-4 sm:p-5 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800/90 border-0 transition-all cursor-pointer flex flex-col justify-between shadow-xs"
                    >
                      <div>
                        <h4 className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors flex items-center justify-between">
                          <span>{service.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-zinc-400" />
                        </h4>
                        <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Column 3: Contacto Directo & Acciones Rápidas (Borderless Cards) */}
              <div className="md:col-span-3 lg:col-span-3 space-y-5">
                <span className="text-[11px] uppercase tracking-widest text-zinc-300 font-bold block mb-3">
                  // Contacto Directo
                </span>

                <div className="space-y-3">
                  {/* WhatsApp */}
                  <a
                    href={PERSONAL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800/90 border-0 transition-all group cursor-pointer shadow-xs"
                  >
                    <WhatsAppOfficialIcon className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div className="truncate">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">WhatsApp</span>
                      <span className="text-xs font-bold text-zinc-200 group-hover:text-white transition-colors">
                        {PERSONAL_INFO.phone}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/90 hover:bg-zinc-800/90 border-0 transition-all group cursor-pointer shadow-xs"
                  >
                    <Mail className="w-5 h-5 text-zinc-400 group-hover:text-white shrink-0 transition-colors" />
                    <div className="truncate">
                      <span className="text-[10px] uppercase font-bold text-zinc-400 block">Email</span>
                      <span className="text-xs font-bold text-zinc-200 group-hover:text-white truncate block transition-colors">
                        {PERSONAL_INFO.email}
                      </span>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-900/90 border-0 shadow-xs">
                    <MapPin className="w-5 h-5 text-zinc-300 shrink-0" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-zinc-300 block">Ubicación</span>
                      <span className="text-xs font-medium text-zinc-300 block">
                        {PERSONAL_INFO.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-2 space-y-2.5">
                  <Link
                    href="/contacto"
                    onClick={() => setMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-xs sm:text-sm shadow-md active:scale-95 transition-all cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Iniciar un Proyecto</span>
                  </Link>

                  {onOpenCV && (
                    <button
                      type="button"
                      onClick={() => {
                        setMenuOpen(false);
                        onOpenCV();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border-0 font-bold text-xs sm:text-sm active:scale-95 transition-all cursor-pointer"
                    >
                      <FileDown className="w-3.5 h-3.5" />
                      <span>Descargar CV (PDF)</span>
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Bottom Footer Bar inside Menu */}
            <div className="shrink-0 w-full px-5 sm:px-10 md:px-14 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-300 font-medium">
              <span>
                © {new Date().getFullYear()} Manuel Cabrera. Creatividad, Código & Estrategia.
              </span>
              <div className="flex items-center gap-5">
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Correo
                </a>
                <Link
                  href="/contacto"
                  onClick={() => setMenuOpen(false)}
                  className="text-zinc-300 hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
