import React from 'react';
import { notFound } from 'next/navigation';
import { PROJECTS, Project } from '@/data/portfolio-data';
import { ProjectDetailView } from '@/components/project-detail-view';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
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

  return (
    <ProjectDetailView
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}
