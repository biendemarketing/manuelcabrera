'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Maximize, 
  Minimize,
  ExternalLink,
  ArrowUp,
  Columns,
  StretchHorizontal
} from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  linkUrl?: string;
}

interface LightboxModalProps {
  images: LightboxImage[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
}

function LightboxModalContent({
  images,
  initialIndex = 0,
  onClose,
}: {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fitMode, setFitMode] = useState<'width' | 'contain'>('width'); // default to fit width from the top
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Reset scroll to top whenever changing image
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setZoomLevel(1);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    if (images.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setZoomLevel(1);
  }, [images.length]);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.6));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  if (images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div 
      id="fullscreen-lightbox-modal"
      className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-2xl animate-fade-in select-none"
    >
      {/* Top Action Bar */}
      <div className="relative z-30 flex items-center justify-between px-4 sm:px-6 py-3 bg-black/80 border-b border-white/10 text-white shrink-0">
        
        {/* Left: Image Counter & Info */}
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-white/15 text-xs font-mono font-bold tracking-wider shrink-0">
            {currentIndex + 1} / {images.length}
          </span>
          <div className="hidden md:block truncate max-w-sm lg:max-w-md text-xs font-semibold text-zinc-300">
            {currentImage.title || currentImage.alt}
          </div>
        </div>

        {/* Center: View Mode (Adapt to Width from Top vs Fit Screen) & Zoom */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Fit Mode Toggle Button */}
          <div className="hidden sm:flex items-center bg-white/10 rounded-full p-0.5 border border-white/10 text-xs">
            <button
              onClick={() => {
                setFitMode('width');
                setZoomLevel(1);
              }}
              className={`px-3 py-1 rounded-full font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                fitMode === 'width' 
                  ? 'bg-white text-zinc-950 shadow-sm' 
                  : 'text-zinc-300 hover:text-white'
              }`}
              title="Ajustar al ancho (Visible desde arriba con scroll)"
            >
              <StretchHorizontal className="w-3.5 h-3.5" />
              <span>Ajustar al Ancho</span>
            </button>
            <button
              onClick={() => {
                setFitMode('contain');
                setZoomLevel(1);
              }}
              className={`px-3 py-1 rounded-full font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                fitMode === 'contain' 
                  ? 'bg-white text-zinc-950 shadow-sm' 
                  : 'text-zinc-300 hover:text-white'
              }`}
              title="Ajustar a pantalla completa"
            >
              <Columns className="w-3.5 h-3.5" />
              <span>Pantalla Completa</span>
            </button>
          </div>

          <button
            onClick={handleZoomOut}
            disabled={zoomLevel <= 0.6}
            className="p-2 rounded-full hover:bg-white/15 text-zinc-300 hover:text-white disabled:opacity-30 transition-colors cursor-pointer"
            title="Alejar (-)"
            aria-label="Alejar"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          
          <button
            onClick={handleResetZoom}
            className="px-2.5 py-1 rounded-full hover:bg-white/15 text-xs font-mono font-bold text-zinc-300 hover:text-white transition-colors cursor-pointer"
            title="Restablecer zoom (0)"
          >
            {Math.round(zoomLevel * 100)}%
          </button>

          <button
            onClick={handleZoomIn}
            disabled={zoomLevel >= 3}
            className="p-2 rounded-full hover:bg-white/15 text-zinc-300 hover:text-white disabled:opacity-30 transition-colors cursor-pointer"
            title="Acercar (+)"
            aria-label="Acercar"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full hover:bg-white/15 text-zinc-300 hover:text-white transition-colors hidden lg:inline-flex cursor-pointer"
            title="Volver arriba de la captura"
            aria-label="Ir al inicio superior"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full hover:bg-white/15 text-zinc-300 hover:text-white transition-colors hidden sm:inline-flex cursor-pointer"
            title={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
            aria-label="Alternar pantalla completa"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {currentImage.linkUrl && (
            <a
              href={currentImage.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/15 text-blue-400 hover:text-blue-300 transition-colors"
              title="Abrir sitio web oficial"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Right: Close Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-lg cursor-pointer"
            title="Cerrar visor (Esc)"
            aria-label="Cerrar visor"
          >
            <X className="w-4 h-4" />
            <span className="hidden sm:inline">Cerrar</span>
          </button>
        </div>

      </div>

      {/* Main Image Stage (Scrollable from top, adapted to width) */}
      <div 
        ref={scrollContainerRef}
        className="relative flex-1 w-full overflow-y-auto overflow-x-hidden p-3 sm:p-6 md:p-8 flex flex-col items-center justify-start scroll-smooth"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Navigation Previous Button (Fixed position) */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-black/95 text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 cursor-pointer"
            aria-label="Imagen anterior"
            title="Anterior (Flecha izquierda)"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Main Image Container Aligned to the Top & Adapted to Width */}
        <div 
          className={`relative transition-transform duration-200 ease-out origin-top my-auto sm:my-0 ${
            fitMode === 'width'
              ? 'w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl'
              : 'max-w-full max-h-[80vh] flex items-center justify-center'
          }`}
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-zinc-950">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentImage.src}
              alt={currentImage.alt || `Captura ${currentIndex + 1}`}
              className={`select-none transition-all ${
                fitMode === 'width'
                  ? 'w-full h-auto object-cover object-top block'
                  : 'max-h-[78vh] max-w-[90vw] object-contain object-top block mx-auto'
              }`}
              draggable={false}
            />
          </div>
        </div>

        {/* Navigation Next Button (Fixed position) */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-3 sm:p-4 rounded-full bg-black/70 hover:bg-black/95 text-white/90 hover:text-white border border-white/20 backdrop-blur-md shadow-2xl transition-all hover:scale-110 cursor-pointer"
            aria-label="Imagen siguiente"
            title="Siguiente (Flecha derecha)"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Bottom Thumbnail Strip & Captions */}
      <div className="relative z-30 px-4 py-3 bg-black/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white shrink-0">
        
        {/* Caption */}
        <div className="text-center sm:text-left">
          <p className="text-xs sm:text-sm font-bold text-white">
            {currentImage.title || currentImage.alt}
          </p>
          {currentImage.caption && (
            <p className="text-[11px] text-zinc-400">
              {currentImage.caption}
            </p>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1 px-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setZoomLevel(1);
                }}
                className={`relative w-14 h-10 rounded-lg overflow-hidden border-2 shrink-0 transition-all cursor-pointer ${
                  idx === currentIndex 
                    ? 'border-white scale-110 shadow-lg ring-2 ring-white/50' 
                    : 'border-white/20 opacity-60 hover:opacity-100'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={`Miniatura ${idx + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export function LightboxModal({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}: LightboxModalProps) {
  if (!isOpen || images.length === 0) return null;

  return (
    <LightboxModalContent
      key={`${initialIndex}-${images.length}`}
      images={images}
      initialIndex={initialIndex}
      onClose={onClose}
    />
  );
}
