import type { Metadata } from 'next';
import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS, Project } from '@/data/portfolio-data';
import { ProjectDetailView } from '@/components/project-detail-view';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
      description: 'El proyecto que buscas no existe en el portafolio de Manuel Cabrera.',
    };
  }

  const projectTitle = `${project.title} — ${project.category}`;
  const projectDesc = project.description
    ? `${project.description.slice(0, 155)}...`
    : `Caso de estudio: ${project.title}. Proyecto de ${project.category} realizado por Manuel Cabrera — Director Creativo en Punta Cana, República Dominicana.`;

  const projectImageUrl = project.image
    ? (project.image.startsWith('http') ? project.image : `${SITE_URL}${project.image}`)
    : (project.galleryImages && project.galleryImages.length > 0
      ? (project.galleryImages[0].startsWith('http') ? project.galleryImages[0] : `${SITE_URL}${project.galleryImages[0]}`)
      : `${SITE_URL}/opengraph.png`);

  // Schema.org: CreativeWork for project
  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: projectDesc,
    url: `${SITE_URL}/proyectos/${project.id}`,
    image: projectImageUrl,
    author: {
      '@type': 'Person',
      name: 'Manuel Cabrera',
      url: SITE_URL,
    },
    creator: {
      '@type': 'Person',
      name: 'Manuel Cabrera',
    },
    genre: project.category,
    keywords: project.tools?.join(', ') || project.category,
    inLanguage: 'es-DO',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Manuel Cabrera — Portafolio Profesional',
      url: SITE_URL,
    },
  };

  return {
    title: projectTitle,
    description: projectDesc,
    keywords: [
      project.title,
      project.categoryLabel,
      'Manuel Cabrera',
      'Diseño Gráfico Punta Cana',
      'Marketing Digital República Dominicana',
      ...(project.tools || []).slice(0, 5),
    ],
    alternates: {
      canonical: `/proyectos/${project.id}`,
    },
    openGraph: {
      title: `${project.title} | Manuel Cabrera`,
      description: projectDesc,
      url: `${SITE_URL}/proyectos/${project.id}`,
      type: 'article',
      images: [
        {
          url: projectImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} — Proyecto de Manuel Cabrera`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | Manuel Cabrera`,
      description: projectDesc,
      images: [projectImageUrl],
    },
    other: {
      'schema-org': JSON.stringify(projectJsonLd),
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.id === id);

  if (projectIndex === -1) {
    notFound();
  }

  const project: Project = PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  const SITE_URL_SERVER = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';
  const pageImage = project.image
    ? (project.image.startsWith('http') ? project.image : `${SITE_URL_SERVER}${project.image}`)
    : `${SITE_URL_SERVER}/opengraph.png`;

  const projectJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    url: `${SITE_URL_SERVER}/proyectos/${project.id}`,
    image: pageImage,
    author: { '@type': 'Person', name: 'Manuel Cabrera', url: SITE_URL_SERVER },
    genre: project.category,
    inLanguage: 'es-DO',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
      <ProjectDetailView
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </>
  );
}
