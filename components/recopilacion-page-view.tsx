'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, 
  Search, 
  SlidersHorizontal, 
  Maximize2, 
  Presentation, 
  Layers, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Minimize2
} from 'lucide-react';
import { RECOPILACION_SLIDES, RECOPILACION_CATEGORIES } from '@/data/recopilacion-data';

export function RecopilacionPageView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Filter slides
  const filteredSlides = useMemo(() => {
    return RECOPILACION_SLIDES.filter((slide) => {
      const matchesCat = selectedCategory === 'Todos' || slide.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        slide.title.toLowerCase().includes(query) ||
        slide.category.toLowerCase().includes(query) ||
        slide.summary.toLowerCase().includes(query) ||
        slide.page.toString().includes(query);
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col pt-24 pb-20 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-28">
      {/* Top Breadcrumb & Return Link */}
      <div className="flex items-center justify-between mb-8">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-bold text-zinc-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al Inicio</span>
        </Link>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
          <Layers className="w-4 h-4 text-indigo-400" />
          <span>70 Láminas Oficiales</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-4xl space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest">
          <Presentation className="w-4 h-4 text-indigo-400" />
          <span>Presentación Completa de Portafolio</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Recopilación de Proyectos & Trayectoria
        </h1>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
          Explora todas las láminas de la presentación en alta definición: identidades visuales, plataformas web, campañas publicitarias, gran formato, renders 3D y piezas editoriales.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-md">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Buscar por marca, tema o página..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-zinc-950 border border-zinc-800 focus:border-indigo-500 text-white placeholder-zinc-500 outline-hidden transition-all"
          />
        </div>

        {/* Categories */}
        <div className="overflow-x-auto no-scrollbar flex items-center gap-2 w-full md:w-auto pb-1 md:pb-0">
          <SlidersHorizontal className="w-4 h-4 text-zinc-500 shrink-0 mr-1" />
          {RECOPILACION_CATEGORIES.map((cat) => {
            const count = cat === 'Todos' 
              ? RECOPILACION_SLIDES.length 
              : RECOPILACION_SLIDES.filter((s) => s.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md border border-indigo-400'
                    : 'bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
              >
                <span>{cat}</span>
                <span className="text-[10px] font-mono opacity-80">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredSlides.map((slide) => {
          const globalIndex = RECOPILACION_SLIDES.findIndex((s) => s.id === slide.id);

          return (
            <div
              key={slide.id}
              onClick={() => setLightboxIndex(globalIndex)}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/60 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono font-black text-white">
                  #{slide.page.toString().padStart(2, '0')}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-3.5 flex flex-col justify-between flex-1 gap-1 bg-zinc-900/90">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 truncate">
                  {slide.category}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1 group-hover:text-indigo-300 transition-colors">
                  {slide.title}
                </h4>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[120] flex flex-col bg-black/95 backdrop-blur-2xl text-white">
          <div className="flex items-center justify-between px-4 sm:px-8 py-3 bg-zinc-950/80 border-b border-zinc-800 z-20">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-mono font-black">
                #{RECOPILACION_SLIDES[lightboxIndex].page.toString().padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm font-bold text-white">
                  {RECOPILACION_SLIDES[lightboxIndex].title}
                </h3>
                <span className="text-xs text-indigo-400">
                  {RECOPILACION_SLIDES[lightboxIndex].category}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed((prev) => !prev)}
                className="p-2 rounded-xl bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white cursor-pointer"
              >
                {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2 rounded-xl bg-zinc-800 border border-zinc-600 text-zinc-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative flex-1 flex items-center justify-center p-4">
            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + RECOPILACION_SLIDES.length) % RECOPILACION_SLIDES.length : 0))}
              className="absolute left-4 z-30 p-3 rounded-2xl bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % RECOPILACION_SLIDES.length : 0))}
              className="absolute right-4 z-30 p-3 rounded-2xl bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700 cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-7xl max-h-[85vh] aspect-video">
              <Image
                src={RECOPILACION_SLIDES[lightboxIndex].image}
                alt={RECOPILACION_SLIDES[lightboxIndex].title}
                fill
                priority
                className={`object-contain transition-all ${isZoomed ? 'scale-125 object-cover' : 'scale-100'}`}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
