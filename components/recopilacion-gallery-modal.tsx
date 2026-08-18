'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { 
  X, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  Play, 
  Pause, 
  Download, 
  Layers, 
  SlidersHorizontal
} from 'lucide-react';
import { RECOPILACION_SLIDES, RECOPILACION_CATEGORIES } from '@/data/recopilacion-data';

interface RecopilacionGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlideIndex?: number;
}

export function RecopilacionGalleryModal({ 
  isOpen, 
  onClose, 
  initialSlideIndex = 0 
}: RecopilacionGalleryModalProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPlayingLightbox, setIsPlayingLightbox] = useState<boolean>(false);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setLightboxIndex(null);
      setIsPlayingLightbox(false);
      setIsZoomed(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

  // Lightbox slideshow timer
  useEffect(() => {
    if (!isPlayingLightbox || lightboxIndex === null) return;
    const interval = setInterval(() => {
      setLightboxIndex((prev) => {
        if (prev === null) return 0;
        return (prev + 1) % RECOPILACION_SLIDES.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [isPlayingLightbox, lightboxIndex]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;

    if (e.key === 'Escape') {
      if (lightboxIndex !== null) {
        setLightboxIndex(null);
        setIsZoomed(false);
      } else {
        onClose();
      }
    } else if (lightboxIndex !== null) {
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % RECOPILACION_SLIDES.length : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + RECOPILACION_SLIDES.length) % RECOPILACION_SLIDES.length : 0));
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlayingLightbox((prev) => !prev);
      }
    }
  }, [isOpen, lightboxIndex, onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex flex-col h-screen w-screen bg-zinc-950 text-white overflow-hidden animate-in fade-in duration-200">
      {/* 1. TOP BAR (FIXED ON TOP OF MODAL, NEVER OVERLAPPED) */}
      <div className="shrink-0 z-30 flex flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-8 py-3.5 bg-zinc-900 border-b border-zinc-800 shadow-lg">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                Cuadrícula de Proyectos
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-xs font-bold font-mono">
                {RECOPILACION_SLIDES.length} Láminas
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Haz clic en cualquier lámina para ampliarla en alta definición (Ultra HD 2K).
            </p>
          </div>
        </div>

        {/* Search Bar & Close Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              placeholder="Buscar por tema o lámina..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-7 py-1.5 text-xs sm:text-sm rounded-xl bg-zinc-950 border border-zinc-800 focus:border-indigo-500 text-white placeholder-zinc-500 outline-hidden transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white text-xs cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 transition-colors shrink-0 cursor-pointer"
            title="Cerrar cuadrícula (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 2. CATEGORY FILTER ROW (SHRINK-0) */}
      <div className="shrink-0 px-4 sm:px-8 py-2.5 bg-zinc-950 border-b border-zinc-800 overflow-x-auto no-scrollbar flex items-center gap-2">
        <SlidersHorizontal className="w-3.5 h-3.5 text-zinc-500 shrink-0 mr-1" />
        {RECOPILACION_CATEGORIES.map((cat) => {
          const count = cat === 'Todos' 
            ? RECOPILACION_SLIDES.length 
            : RECOPILACION_SLIDES.filter((s) => s.category === cat).length;
          const isSelected = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 border border-indigo-400'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                isSelected ? 'bg-indigo-700 text-indigo-100' : 'bg-zinc-800 text-zinc-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 3. SCROLLABLE GRID CONTAINER (FLEX-1 WITH MIN-H-0 & GENEROUS BOTTOM PADDING) */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6 md:p-8 pb-40">
        {filteredSlides.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">No se encontraron láminas</h3>
            <p className="text-xs text-zinc-400 max-w-sm">
              No hay láminas que coincidan con &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('Todos');
                setSearchQuery('');
              }}
              className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-bold text-white transition-colors mt-2 cursor-pointer"
            >
              Restablecer Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6">
            {filteredSlides.map((slide) => {
              const globalIndex = RECOPILACION_SLIDES.findIndex((s) => s.id === slide.id);

              return (
                <div
                  key={slide.id}
                  onClick={() => setLightboxIndex(globalIndex)}
                  className="group relative flex flex-col rounded-2xl overflow-hidden bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/70 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-950/40 cursor-pointer"
                >
                  {/* Image 16:9 Thumbnail */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />

                    {/* Page Badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs border border-white/10 text-[10px] font-mono font-bold text-white">
                      #{slide.page.toString().padStart(2, '0')}
                    </div>

                    {/* Hover Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform scale-75 group-hover:scale-100 pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center shadow-lg">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Card Info Bottom */}
                  <div className="p-3 flex flex-col justify-between flex-1 gap-1 bg-zinc-900">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 truncate">
                      {slide.category}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-indigo-300 transition-colors">
                      {slide.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[1000000] flex flex-col bg-black/95 backdrop-blur-2xl text-white animate-in fade-in duration-200">
          {/* Lightbox Top Header */}
          <div className="flex items-center justify-between px-4 sm:px-8 py-3 bg-zinc-950/80 border-b border-zinc-800/80 z-20 backdrop-blur-md shrink-0">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-mono font-black shadow-xs">
                #{RECOPILACION_SLIDES[lightboxIndex].page.toString().padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                  {RECOPILACION_SLIDES[lightboxIndex].title}
                </h3>
                <span className="text-xs text-indigo-400 font-medium">
                  {RECOPILACION_SLIDES[lightboxIndex].category} • {RECOPILACION_SLIDES[lightboxIndex].categoryDesc}
                </span>
              </div>
            </div>

            {/* Lightbox Top Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlayingLightbox((prev) => !prev)}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  isPlayingLightbox 
                    ? 'bg-indigo-600 text-white border-indigo-500' 
                    : 'bg-zinc-900 text-zinc-300 hover:text-white border-zinc-700'
                }`}
                title={isPlayingLightbox ? 'Pausar' : 'Presentación continua'}
              >
                {isPlayingLightbox ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span className="hidden sm:inline">{isPlayingLightbox ? 'Pausar' : 'Auto'}</span>
              </button>

              <button
                onClick={() => setIsZoomed((prev) => !prev)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors cursor-pointer"
                title={isZoomed ? 'Ajustar a pantalla' : 'Tamaño completo'}
              >
                {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <a
                href={RECOPILACION_SLIDES[lightboxIndex].image}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 transition-colors"
                title="Abrir imagen Ultra HD 2K"
              >
                <Download className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  setLightboxIndex(null);
                  setIsZoomed(false);
                  setIsPlayingLightbox(false);
                }}
                className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-600 transition-colors ml-2 cursor-pointer"
                title="Cerrar visor HD (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Stage */}
          <div className="relative flex-1 min-h-0 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
            {/* Left Nav Arrow */}
            <button
              onClick={() => {
                setLightboxIndex((prev) => (prev !== null ? (prev - 1 + RECOPILACION_SLIDES.length) % RECOPILACION_SLIDES.length : 0));
              }}
              className="absolute left-3 sm:left-6 z-30 p-3 sm:p-4 rounded-2xl bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700/80 backdrop-blur-md shadow-2xl transition-all duration-150 hover:scale-110 cursor-pointer"
              title="Lámina anterior (Flecha Izquierda)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Right Nav Arrow */}
            <button
              onClick={() => {
                setLightboxIndex((prev) => (prev !== null ? (prev + 1) % RECOPILACION_SLIDES.length : 0));
              }}
              className="absolute right-3 sm:right-6 z-30 p-3 sm:p-4 rounded-2xl bg-zinc-900/80 hover:bg-indigo-600 text-white border border-zinc-700/80 backdrop-blur-md shadow-2xl transition-all duration-150 hover:scale-110 cursor-pointer"
              title="Lámina siguiente (Flecha Derecha)"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Main HD Image */}
            <div className={`relative w-full h-full flex items-center justify-center ${isZoomed ? 'overflow-auto cursor-grab' : 'overflow-hidden'}`}>
              <div className="relative w-full h-full max-w-7xl max-h-[85vh] aspect-video">
                <Image
                  src={RECOPILACION_SLIDES[lightboxIndex].image}
                  alt={RECOPILACION_SLIDES[lightboxIndex].title}
                  fill
                  priority
                  className={`object-contain transition-all duration-200 drop-shadow-2xl ${
                    isZoomed ? 'scale-125 object-cover' : 'scale-100'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Lightbox Bottom Thumbnail Ribbon */}
          <div className="px-4 py-2.5 bg-zinc-950/90 border-t border-zinc-800/80 overflow-x-auto no-scrollbar flex items-center gap-2 z-20 backdrop-blur-md justify-center shrink-0">
            {RECOPILACION_SLIDES.map((thumb, idx) => {
              const isCurrent = idx === lightboxIndex;

              return (
                <button
                  key={thumb.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`relative shrink-0 w-14 sm:w-16 aspect-video rounded-lg overflow-hidden border transition-all cursor-pointer ${
                    isCurrent
                      ? 'border-indigo-500 ring-2 ring-indigo-500 scale-105 shadow-md shadow-indigo-600/30'
                      : 'border-zinc-800 opacity-40 hover:opacity-100 hover:border-zinc-600'
                  }`}
                  title={`Ir a lámina #${thumb.page}`}
                >
                  <Image
                    src={thumb.image}
                    alt={thumb.title}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 right-0 px-1 py-0.2 bg-black/80 text-[7px] font-mono text-white font-bold">
                    {thumb.page}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>,
    document.body
  );
}

export default RecopilacionGalleryModal;
