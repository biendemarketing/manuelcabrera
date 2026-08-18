import type { Metadata, Viewport } from 'next';
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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://manuelcabrera.pro';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Manuel Cabrera | Director Creativo, Marketing Digital & Portafolio',
    template: '%s | Manuel Cabrera',
  },
  description: 'Portafolio profesional de Manuel Cabrera — Director Creativo con más de 11 años de experiencia en Marketing Digital, Diseño Gráfico Senior, Desarrollo Web, UI/UX, Modelado 3D e Inteligencia Artificial. Punta Cana, República Dominicana.',
  keywords: [
    'Manuel Cabrera',
    'Director Creativo Punta Cana',
    'Marketing Digital República Dominicana',
    'Diseñador Gráfico Senior',
    'UI/UX Designer Santo Domingo',
    'Desarrollo Web Next.js TypeScript',
    'Meta Ads Google Ads Especialista',
    'Branding Identidad Visual',
    'Portafolio Creativo 2026',
    'FacturaDO Facturación Nómina',
    'Decora Group Punta Cana',
    'Big Print Punta Cana',
    'Modelado 3D Cinema 4D Blender',
    'Inteligencia Artificial Generativa',
    'Full Stack Developer Dominicano',
    'SEO Local Punta Cana Bávaro',
    'Diseñador Freelancer República Dominicana',
  ],
  authors: [{ name: 'Manuel Cabrera', url: SITE_URL }],
  creator: 'Manuel Cabrera',
  publisher: 'Manuel Cabrera',
  category: 'Portfolio',
  classification: 'Design, Marketing, Technology',
  alternates: {
    canonical: '/',
    languages: {
      'es-DO': '/',
    },
  },
  openGraph: {
    title: 'Manuel Cabrera | Director Creativo & Marketing Digital',
    description: 'Más de 11 años de experiencia en Marketing Digital, Branding, UI/UX, Desarrollo Web, Modelado 3D y Campañas Meta Ads. Punta Cana, República Dominicana.',
    url: SITE_URL,
    siteName: 'Manuel Cabrera — Portafolio Profesional',
    images: [
      {
        url: `${SITE_URL}/opengraph.png`,
        secureUrl: `${SITE_URL}/opengraph.png`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Manuel Cabrera — Director Creativo, Marketing Digital & Portafolio Profesional',
      },
    ],
    type: 'website',
    locale: 'es_DO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Cabrera | Director Creativo & Marketing Digital',
    description: 'Director Creativo, Diseñador Gráfico Senior, Estratega de Marketing Digital & Full-Stack Developer. Punta Cana, República Dominicana.',
    images: [`${SITE_URL}/opengraph.png`],
    creator: '@biendemarketing',
    site: '@biendemarketing',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// ─── Schema.org Structured Data ───────────────────────────────────────────────
// Primary: Person schema with professional details
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Manuel Cabrera',
  givenName: 'Manuel',
  familyName: 'Cabrera',
  jobTitle: 'Director Creativo & Estratega de Marketing Digital',
  description: 'Director Creativo con más de 11 años de experiencia en Marketing Digital, Diseño Gráfico, Desarrollo Web, UI/UX, Modelado 3D e Inteligencia Artificial. Basado en Punta Cana, República Dominicana.',
  url: SITE_URL,
  image: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/opengraph.png`,
    width: 1200,
    height: 630,
  },
  email: 'manuelcabrerasinfo@gmail.com',
  telephone: '+18496352835',
  sameAs: [
    'https://github.com/biendemarketing',
    'https://www.instagram.com/biendemarketing',
    'https://manuelcabrera.pro',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Verón',
    addressLocality: 'Punta Cana',
    addressRegion: 'La Altagracia',
    addressCountry: 'DO',
    postalCode: '23000',
  },
  nationality: {
    '@type': 'Country',
    name: 'República Dominicana',
  },
  knowsAbout: [
    'Marketing Digital',
    'Estrategia en Meta Ads y Google Ads',
    'Diseño Gráfico y Branding',
    'UI/UX Design',
    'Desarrollo Web con Next.js y TypeScript',
    'Modelado 3D con Cinema 4D y Blender',
    'SEO Local y Técnico',
    'Inteligencia Artificial Generativa',
    'Fotografía y Producción Audiovisual',
    'Automatización de Procesos',
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Director Creativo',
    occupationalCategory: 'Diseño, Marketing y Tecnología',
    skills: [
      'Adobe Creative Suite',
      'Cinema 4D',
      'Blender',
      'Next.js',
      'React',
      'TypeScript',
      'Meta Ads Manager',
      'Google Ads',
      'SEO',
    ],
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Freelancer Independiente & Consultor Creativo',
    url: SITE_URL,
  },
};

// WebSite schema for sitelinks search box potential
const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Manuel Cabrera — Portafolio Profesional',
  url: SITE_URL,
  description: 'Portafolio profesional de Manuel Cabrera: Marketing Digital, Diseño Gráfico, Desarrollo Web, UI/UX y Modelado 3D.',
  inLanguage: 'es-DO',
  author: {
    '@id': `${SITE_URL}/#person`,
  },
  copyrightYear: 2026,
  copyrightHolder: {
    '@id': `${SITE_URL}/#person`,
  },
};

// Professional Service / LocalBusiness schema for local SEO
const professionalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['ProfessionalService', 'LocalBusiness'],
  '@id': `${SITE_URL}/#business`,
  name: 'Manuel Cabrera — Servicios Creativos & Marketing Digital',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph.png`,
  logo: `${SITE_URL}/manuelcabreralogo.svg`,
  telephone: '+18496352835',
  email: 'manuelcabrerasinfo@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Verón',
    addressLocality: 'Punta Cana',
    addressRegion: 'La Altagracia',
    addressCountry: 'DO',
    postalCode: '23000',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.7357,
    longitude: -68.4540,
  },
  areaServed: [
    { '@type': 'City', name: 'Punta Cana' },
    { '@type': 'City', name: 'Bávaro' },
    { '@type': 'City', name: 'Santo Domingo' },
    { '@type': 'City', name: 'Higüey' },
    { '@type': 'Country', name: 'República Dominicana' },
    { '@type': 'Country', name: 'Estados Unidos' },
    { '@type': 'Country', name: 'Puerto Rico' },
  ],
  serviceType: [
    'Marketing Digital',
    'Diseño Gráfico',
    'Branding e Identidad Visual',
    'Desarrollo Web',
    'UI/UX Design',
    'Modelado 3D',
    'Fotografía Comercial',
    'Campañas Meta Ads',
    'Google Ads',
    'SEO',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://github.com/biendemarketing',
    'https://www.instagram.com/biendemarketing',
  ],
  priceRange: '$$',
  currenciesAccepted: 'USD, DOP',
  paymentAccepted: 'Transferencia, PayPal, Efectivo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-DO" className={`dark ${dmSans.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* ── Favicon & Icons ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Canonical domain (non-www → www redirect should be set in Vercel) ── */}
        <link rel="canonical" href={SITE_URL} />

        {/* ── Preconnect to critical origins ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Extended Open Graph tags ── */}
        <meta property="og:image:secure_url" content={`${SITE_URL}/opengraph.png`} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Manuel Cabrera — Director Creativo, Marketing Digital & Portafolio Profesional" />

        {/* ── WhatsApp / Facebook specific ── */}
        <meta property="og:phone_number" content="+18496352835" />

        {/* ── Geo / Local SEO meta tags ── */}
        <meta name="geo.region" content="DO-LA" />
        <meta name="geo.placename" content="Punta Cana, La Altagracia, República Dominicana" />
        <meta name="geo.position" content="18.7357;-68.4540" />
        <meta name="ICBM" content="18.7357, -68.4540" />

        {/* ── Additional SEO signals ── */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Spanish" />
        <meta name="copyright" content="Manuel Cabrera 2026" />
        <meta name="author" content="Manuel Cabrera" />
        <meta name="theme-color" content="#09090b" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />

        {/* ── Schema.org: Person ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        {/* ── Schema.org: WebSite ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* ── Schema.org: ProfessionalService + LocalBusiness ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />

        {/* ── Theme: Avoid FOUC (Flash of Unstyled Content) ── */}
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
