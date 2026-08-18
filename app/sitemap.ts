import { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/portfolio-data';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static main pages — ordered by priority
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/proyectos`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/sobre-mi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/contacto`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/recopilacion`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/habilidades`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${BASE_URL}/software`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamic project detail pages
  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${BASE_URL}/proyectos/${project.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: project.featured ? 0.9 : 0.75,
  }));

  return [...staticRoutes, ...projectRoutes];
}
