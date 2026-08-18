'use client';

import React, { useState } from 'react';
import { HeroSection } from '@/components/hero-section';
import { AboutBiography } from '@/components/about-biography';
import { SkillsInteractive } from '@/components/skills-interactive';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { WorkProcessSection } from '@/components/work-process-section';
import { TrustedBrandsMarquee } from '@/components/trusted-brands-marquee';
import { ProjectsRecopilacionSlider } from '@/components/projects-recopilacion-slider';
import { ProjectsGallery } from '@/components/projects-gallery';
import { SoftwareShowcase } from '@/components/software-showcase';
import { ContactSection } from '@/components/contact-section';
import { CVModal } from '@/components/cv-modal';

export default function Home() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      {/* 1. Hero Section con Métricas Integradas & Parallax */}
      <HeroSection onOpenCV={() => setIsCVOpen(true)} />

      {/* 2. Sobre Mí (Biografía, Spotlight B&W a Color, Hobbies, Aptitudes y Marcas Propias) */}
      <AboutBiography />

      {/* 3. Habilidades Profesionales & Flujo IA (ScrollStack) - Antes de Formación */}
      <SkillsInteractive />

      {/* 4. Formación Académica & Certificaciones */}
      <EducationSection />

      {/* 5. Experiencia Laboral & Trayectoria (11+ Años) */}
      <ExperienceSection />

      {/* 6. PROCESO — Cómo trabajas (Cards Verticales Conectadas con Línea Scroll) */}
      <WorkProcessSection />

      {/* 7. Marcas & Empresas que Confían */}
      <TrustedBrandsMarquee />

      {/* 8. Recopilación de Proyectos — Gran Slider de Presentación (70 Láminas con Barra de Carga & Galería Grid) */}
      <ProjectsRecopilacionSlider />

      {/* 9. Proyectos Destacados & Casos de Éxito */}
      <ProjectsGallery />

      {/* 9. Software & Herramientas Dominadas */}
      <SoftwareShowcase />

      {/* 10. Contacto Directo, Formulario & Barra de Acciones Rápidas */}
      <ContactSection onOpenCV={() => setIsCVOpen(true)} />

      {/* CV Modal trigger */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
