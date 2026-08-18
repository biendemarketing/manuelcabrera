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

export const metadata: Metadata = {
  title: 'Manuel Cabrera | Marketing, UI/UX & Portafolio Creativo',
  description: 'Portafolio profesional de Manuel Cabrera: Marketing Digital, Estrategia Publicitaria, Diseñador Gráfico Senior, UI/UX, Modelado 3D e IA con más de 11 años de experiencia. Ubicado en Verón, Punta Cana, República Dominicana.',
  keywords: [
    'Manuel Cabrera',
    'Marketing Digital',
    'Estrategia Publicitaria',
    'Diseñador Gráfico',
    'UI/UX Designer',
    'Punta Cana',
    'Verón La Altagracia',
    'Modelado 3D',
    'Meta Ads Google Ads',
    'Portafolio Creativo',
    'Prompt Engineering IA'
  ],
  authors: [{ name: 'Manuel Cabrera' }],
  creator: 'Manuel Cabrera',
  openGraph: {
    title: 'Manuel Cabrera | Marketing, UI/UX & Portafolio Creativo',
    description: 'Más de 11 años de experiencia en Marketing Digital, Branding, UI/UX, Modelado 3D y Estrategia Publicitaria. Verón, Punta Cana, R.D.',
    type: 'website',
    locale: 'es_DO',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manuel Cabrera | Marketing & Portafolio Creativo',
    description: 'Estratega de Marketing Digital, Diseñador Gráfico Senior & UI/UX. Verón, Punta Cana.',
  },
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
