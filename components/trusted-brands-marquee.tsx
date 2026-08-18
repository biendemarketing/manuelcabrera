'use client';

import React from 'react';
import Link from 'next/link';
import { Building2 } from 'lucide-react';
import { TRUSTED_BRANDS } from '@/data/portfolio-data';
import { DidusaLogo, DecoraGroupLogo, LatikLogo, CorambarLogo, ClubMedLogo, BigPrintLogo, CamiLogo, FancyRdLogo, FacturaDoLogo } from '@/components/logo';
import { BlurFadeSection } from '@/components/blur-fade-section';

function getBrandUrl(brandName: string): string {
  if (brandName.includes('Didusa')) return '/proyectos/didusa-srl-jamaica';
  if (brandName.includes('Club Med')) return '/proyectos/club-med-collection-cap-tridente';
  if (brandName.includes('Corambar')) return '/proyectos/corambar-realty-group-logo';
  if (brandName.includes('Big Print')) return '/proyectos/big-print-punta-cana-brochure';
  if (brandName.includes('CAMI')) return '/proyectos/cami-instituto-capacitacion-social-media';
  if (brandName.includes('Fancy')) return '/proyectos/fancy-rd-radio-web-branding';
  if (brandName.includes('FacturaDO')) return '/proyectos/facturadord-sistema-facturacion-nomina';
  if (brandName.includes('Waooo')) return '/proyectos/waooo-tours-and-adventures-web';
  if (brandName.includes('Decora')) return '/proyectos/decora-group-web-seo-social-media';
  if (brandName.includes('Latik')) return '/proyectos/latik-logo-identidad';
  return '/#proyectos';
}

export function TrustedBrandsMarquee() {
  return (
    <BlurFadeSection 
      id="marcas-que-confian"
      className="py-16 sm:py-20 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white relative w-full border-y border-zinc-200 dark:border-zinc-800/80 overflow-hidden transition-colors duration-300"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-32 bg-indigo-500/10 dark:bg-indigo-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28 relative z-10">
        
        {/* Centered Header */}
        <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>Marcas & Empresas que Confían</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 dark:text-white tracking-tight">
            Marcas que Respaldan Mi Trayectoria
          </h3>

          <p className="text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400">
            Publicidad • Software • Branding • Marketing Digital • Producción
          </p>
        </div>

        {/* Infinite Marquee Strip with Large Logos & Clean Layout */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="animate-marquee flex items-center gap-12 sm:gap-20 md:gap-24 py-4">
            {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, i) => {
              const brandUrl = getBrandUrl(brand.name);

              return (
                <div
                  key={`${brand.name}-${i}`}
                  className="flex flex-col items-center justify-center text-center gap-3 shrink-0 px-4 cursor-default group"
                >
                  {/* LOGO ARRIBA */}
                  <div className="h-16 sm:h-20 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    {brand.name.includes('Didusa') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver caso de estudio Didusa"
                      >
                        <DidusaLogo className="h-10 sm:h-14 w-36 sm:w-44" />
                      </Link>
                    ) : brand.name.includes('Club Med') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver colección oficial de gorras Tridente Club Med"
                      >
                        <ClubMedLogo className="h-8 sm:h-11 w-auto text-zinc-950 dark:text-white" />
                      </Link>
                    ) : brand.name.includes('Corambar') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver diseño de logotipo e identidad de Corambar Realty Group"
                      >
                        <CorambarLogo className="h-14 sm:h-20 w-auto text-zinc-950 dark:text-white" />
                      </Link>
                    ) : brand.name.includes('Big Print') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver brochure corporativo de Big Print Punta Cana"
                      >
                        <BigPrintLogo className="h-10 sm:h-14 w-auto text-zinc-950 dark:text-white" />
                      </Link>
                    ) : brand.name.includes('CAMI') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver diseño publicitario y flyers de CAMI Instituto"
                      >
                        <CamiLogo className="h-9 sm:h-12 w-auto text-zinc-950 dark:text-white" />
                      </Link>
                    ) : brand.name.includes('Fancy') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver diseño web, streaming y branding de Fancy RD Radio"
                      >
                        <FancyRdLogo className="h-9 sm:h-12 w-auto text-zinc-950 dark:text-white" />
                      </Link>
                    ) : brand.name.includes('FacturaDO') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver plataforma SaaS de FacturaDO"
                      >
                        <FacturaDoLogo className="h-8 sm:h-11 w-auto text-zinc-950 dark:text-white" />
                      </Link>
                    ) : brand.name.includes('Waooo') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center gap-2 group-hover:scale-105 transition-transform"
                        title="Ver desarrollo web y reservas de Waooo Tours & Adventures"
                      >
                        <div className="text-zinc-950 dark:text-white font-black text-lg sm:text-2xl tracking-wider uppercase flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-cyan-500 inline-block shadow-sm" />
                          <span>WAOOO★ TOURS</span>
                        </div>
                      </Link>
                    ) : brand.name.includes('Decora') ? (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver desarrollo web, SEO y redes sociales de Decora Group Punta Cana"
                      >
                        <DecoraGroupLogo className="h-9 sm:h-12 w-32 sm:w-44 text-zinc-950 dark:text-white" />
                      </Link>
                    ) : (
                      <Link 
                        href={brandUrl}
                        className="inline-flex items-center justify-center"
                        title="Ver diseño de logotipo e identidad de Latik"
                      >
                        <LatikLogo className="h-14 sm:h-20 w-auto text-zinc-950 dark:text-white" />
                      </Link>
                    )}
                  </div>

                  {/* NOMBRE Y RUBRO ABAJO */}
                  <div className="flex flex-col items-center text-center max-w-[200px]">
                    <Link 
                      href={brandUrl} 
                      className="hover:underline"
                    >
                      <span className="text-sm font-black text-zinc-900 dark:text-white whitespace-nowrap group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                        {brand.name}
                      </span>
                    </Link>
                    <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap truncate max-w-[180px] mt-0.5">
                      {brand.industry}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </BlurFadeSection>
  );
}

export default TrustedBrandsMarquee;
