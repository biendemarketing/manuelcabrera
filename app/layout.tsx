import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { AppShell } from '@/components/app-shell';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Manuel Cabrera | Marketing, UI/UX & Portafolio Creativo',
    template: '%s | Manuel Cabrera',
  },
  description: 'Portafolio profesional de Manuel Cabrera: Marketing Digital, Estrategia Publicitaria en Meta Ads & Google Ads, Diseñador Gráfico Senior, UI/UX, Desarrollo Web, Modelado 3D e IA con más de 11 años de experiencia. Punta Cana y Santo Domingo, República Dominicana.',
  keywords: [
    'Manuel Cabrera',
    'Marketing Digital Punta Cana',
    'Estrategia Publicitaria Meta Ads',
    'Diseñador Gráfico Senior República Dominicana',
    'UI/UX Designer Santo Domingo',
    'Desarrollo Web Next.js',
    'FacturaDO Facturación Nómina',
    'Decora Group Punta Cana',
    'Fancy RD Radio',
    'Big Print Punta Cana',
    'Modelado 3D Cinema 4D Blender',
    'Portafolio Creativo 2026'
  ],
  authors: [{ name: 'Manuel Cabrera', url: SITE_URL }],
  creator: 'Manuel Cabrera',
  publisher: 'Manuel Cabrera',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Manuel Cabrera | Marketing, UI/UX & Portafolio Creativo',
    description: 'Más de 11 años de experiencia en Marketing Digital, Branding, UI/UX, Desarrollo Web, Modelado 3D y Campañas Meta Ads. Punta Cana / Santo Domingo, República Dominicana.',
    url: SITE_URL,
    siteName: 'Manuel Cabrera — Portafolio Profesional',
    images: [
      {
        url: '/opengraph.png',
        width: 1896,
        height: 888,
        alt: 'Manuel Cabrera — Marketing Digital, UI/UX & Portafolio Creativo',
      },
      {
        url: '/og-image.png',
        width: 1896,
        height: 888,
        alt: 'Manuel Cabrera Portafolio',
      },
    ],
    type: 'website',
    locale: 'es_DO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Cabrera | Marketing, UI/UX & Portafolio Creativo',
    description: 'Estratega de Marketing Digital, Diseñador Gráfico Senior, UI/UX & Full-Stack Web Developer. Punta Cana, República Dominicana.',
    images: ['/opengraph.png'],
    creator: '@biendemarketing',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Manuel Cabrera',
  jobTitle: 'Director Creativo & Estratega de Marketing Digital / Full-Stack Developer',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph.png`,
  sameAs: [
    'https://github.com/biendemarketing',
    'https://www.instagram.com/biendemarketing'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Punta Cana',
    addressRegion: 'La Altagracia',
    addressCountry: 'DO'
  },
  knowsAbout: [
    'Marketing Digital',
    'Meta Ads & Google Ads',
    'UI/UX Design',
    'Next.js & TypeScript',
    'Branding & Identidad Corporativa',
    'Modelado 3D & Gran Formato',
    'SEO Local & Técnico'
  ],
  description: 'Portafolio profesional de Manuel Cabrera: Marketing Digital, Estrategia Publicitaria, UI/UX, Desarrollo Web y Modelado 3D con más de 11 años de experiencia en República Dominicana.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`dark ${dmSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('mc_portfolio_theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                }
              } catch (e) {
                document.documentElement.classList.add('dark');
              }
            `,
          }}
        />
      </head>
      <body className="bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 min-h-screen selection:bg-zinc-300 dark:selection:bg-zinc-700 selection:text-zinc-900 dark:selection:text-white transition-colors duration-300 font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <AppShell>
            {children}
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
