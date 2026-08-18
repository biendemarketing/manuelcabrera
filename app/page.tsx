'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { HeroSection } from '@/components/hero-section';
import { AboutBiography } from '@/components/about-biography';
import { ProjectsGallery } from '@/components/projects-gallery';
import { ContactSection } from '@/components/contact-section';

// Dynamic code-split components for fast FCP, tiny initial JS bundle & low main-thread work
const SkillsInteractive = dynamic(
  () => import('@/components/skills-interactive').then((mod) => mod.SkillsInteractive),
  { ssr: true }
);

const EducationSection = dynamic(
  () => import('@/components/education-section').then((mod) => mod.EducationSection),
  { ssr: true }
);

const ExperienceSection = dynamic(
  () => import('@/components/experience-section').then((mod) => mod.ExperienceSection),
  { ssr: true }
);

const WorkProcessSection = dynamic(
  () => import('@/components/work-process-section').then((mod) => mod.WorkProcessSection),
  { ssr: true }
);

const TrustedBrandsMarquee = dynamic(
  () => import('@/components/trusted-brands-marquee').then((mod) => mod.TrustedBrandsMarquee),
  { ssr: true }
);

const ProjectsRecopilacionSlider = dynamic(
  () => import('@/components/projects-recopilacion-slider').then((mod) => mod.ProjectsRecopilacionSlider),
  { ssr: true }
);

const SoftwareShowcase = dynamic(
  () => import('@/components/software-showcase').then((mod) => mod.SoftwareShowcase),
  { ssr: true }
);

const CVModal = dynamic(
  () => import('@/components/cv-modal').then((mod) => mod.CVModal),
  { ssr: false }
);

export default function Home() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section con Métricas Integradas & Parallax */}
      <HeroSection onOpenCV={() => setIsCVOpen(true)} />

      {/* 2. Sobre Mí (Biografía, Spotlight B&W a Color, Hobbies, Aptitudes y Marcas Propias) */}
      <AboutBiography />

      {/* 3. Habilidades Profesionales & Flujo IA */}
      <SkillsInteractive />

      {/* 4. Formación Académica & Certificaciones */}
      <EducationSection />

      {/* 5. Experiencia Laboral & Trayectoria (11+ Años) */}
      <ExperienceSection />

      {/* 6. PROCESO — Cómo trabajas */}
      <WorkProcessSection />

      {/* 7. Marcas & Empresas que Confían */}
      <TrustedBrandsMarquee />

      {/* 8. Recopilación de Proyectos — Gran Slider de Presentación (70 Láminas) */}
      <ProjectsRecopilacionSlider />

      {/* 9. Proyectos Destacados & Casos de Éxito */}
      <ProjectsGallery />

      {/* 10. Software & Herramientas Dominadas */}
      <SoftwareShowcase />

      {/* 11. Contacto Directo, Formulario & Barra de Acciones Rápidas */}
      <ContactSection onOpenCV={() => setIsCVOpen(true)} />

      {/* CV Modal (solo se carga cuando se activa) */}
      {isCVOpen && <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />}
    </div>
  );
}
